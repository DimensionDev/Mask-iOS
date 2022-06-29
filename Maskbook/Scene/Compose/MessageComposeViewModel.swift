import Alamofire
import BigInt
import Combine
import SwiftUI
import web3swift
import MaskWalletCore
import CoreDataStack
import WebExtension_Shim


final class MessageComposeViewModel: ObservableObject {
    private var disposeBag = Set<AnyCancellable>()
    
    @Published
    var message = ""
    
    @Published
    var showPlaceHolder = true

    @Published
    private(set) var pluginContents: [PluginMeta] = []
    
    @Published
    var recipient: Recipient = .everyone
    
    @Published
    var encryptButtonEnable = true
    
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    init() {
        let messageSignal = $message.map(\.isEmpty)
            .share()

        messageSignal
            .map { !$0 }
            .assign(to: \.encryptButtonEnable, on: self)
            .store(in: &disposeBag)
        
        messageSignal
            .assign(to: \.showPlaceHolder, on: self)
            .store(in: &disposeBag)
    }
    
    func append(newPluginContent: PluginMeta) {
        // Note: there always be only one plugin of it's kind
        pluginContents.removeAll(where: { $0.key == newPluginContent.key })
        pluginContents.append(newPluginContent)
    }
    
    func remove(pluginContent: PluginMeta) {
        pluginContents.removeAll {
            $0.key == pluginContent.key
        }
    }
    
    func dismiss() {
        mainCoordinator.topViewController?.dismiss(animated: true)
    }
    func pluginAddClicked(plugin: PluginType) {
        switch plugin {
        case .luckyDrop:
            mainCoordinator.present(scene: .luckyDrop(source: .composer, callback: { @MainActor [weak self] payload in
                let meta = PluginMeta.redPacket(payload)
                self?.pluginContents.append(meta)
                
                self?.mainCoordinator.dismissTopViewController()
            }), transition: .modal(animated: true))
        default:
            print("message compose \(plugin) add did clicked")
        }
    }
    func selectContactButtonClick() {
        let viewModel = SelectContactViewModel()
        viewModel.selectedContactType = recipient
        mainCoordinator.present(scene: .composeSelectContact(viewModel: viewModel, delegate: self), transition: .panModel(animated: true))
    }
}

extension MessageComposeViewModel {
    func addRedPacketMeta(_ payload: RedPacketPayload) {
        let meta = PluginMeta.redPacket(payload)

        append(newPluginContent: meta)
    }

    func encryptContent() {
        let isPublic = recipient == .everyone
        var authorKeyData: Data? = nil
        var authorPrivateKeyData: Data?
        var localKey: Data?
        var e2eParam: WalletCoreHelper.EncryptPostE2EParam?
        if let personaRecord = personaManager.currentPersona.value {
            let persona = Persona(fromRecord: personaRecord)
            authorKeyData = persona?.publicKey?.getRawData()
            authorPrivateKeyData = Data(base64URLEncoded: personaRecord.dKeyInPrivateKey)
            if let validLocalKey = persona?.localKey?.k {
                localKey = Data(base64URLEncoded: validLocalKey)
            }
        }
        let socialPlatform = personaManager.currentProfile.value?.socialPlatform ?? .twitter
        let authorId: String? = personaManager.currentProfile.value?.identifier
            .flatMap { $0.clip(first: "person:".count) }
        let authorName = authorId?.components(separatedBy: "/").last
        if !isPublic {
            guard let authorPrivateKeyData = authorPrivateKeyData,
                  let localKey = localKey else {
                // TODO: Error handling
                return
            }
            var target = [String: Data]()
            if case let .specialContacts(personaRecords) = recipient {
                personaRecords.forEach {
                    let publicKeyData = Persona(fromRecord: $0)?.publicKey?.getRawData()
                    let profile = $0.linkedProfiles?.first(where: { _ in
                        true
                    }) as? ProfileRecord
                    let identifier = profile?.identifier
                    if let publicKeyData = publicKeyData,
                       let identifier = identifier {
                        target[identifier] = publicKeyData
                    }
                }
            }
            e2eParam = WalletCoreHelper.EncryptPostE2EParam(localKey: localKey, target: target, authorPrivateKey: authorPrivateKeyData)
        }

        guard let encryptionResult = try? WalletCoreHelper.encryptPost(
            isPublic: isPublic,
            content: message,
            authorID: authorName,
            authorKeyData: authorKeyData,
            socialPlatform: socialPlatform,
            metas: pluginContents,
            e2eParam: e2eParam
        ).get() else {
            // TODO: Error handling
            return
        }

        let finalPostText = getShareText(encrtypedMessage: encryptionResult.output)
        if !isPublic {
            publishE2EResult(encryptionResult, platform: socialPlatform)
        }
        
        log.debug("\(finalPostText)", source: "share")
        // past final text to twitter compose
        if socialPlatform == .twitter {
            let maskSocialViewController = mainCoordinator.getMaskSocialViewController()
            maskSocialViewController?.openComposer(message: finalPostText.urlEncode() ?? "")
            maskSocialViewController?.dismiss(animated: true)
        }
    }
    
    private func publishE2EResult(_ result: WalletCoreHelper.EncryptionResult,
                                  platform: ProfileSocialPlatform) {
        guard let postIVOrigin = result.postIdentifier.components(separatedBy: "/").last else {
            return
        }
        let base64PostIV = postIVOrigin.replacingOccurrences(of: "|", with: "/")
//        guard let postIVData = Data(base64Encoded: base64PostIV) else {
//            return
//        }
        let networkHint = platform.url
        typealias MWE2eResult = WebExtension.Encryption.PublishE2EResultMessage.Payload.EncryptionResultE2E
        var e2eResult = [MWE2eResult]()
        
        for (identifier, v) in result.e2eResult {
            let encryptPostKey = v.encryptedPostKeyData.base64EncodedString()
            let ivToBePublished = v.iv?.base64EncodedString() ?? ""
            let result = MWE2eResult(target: identifier, encryptedPostKey: encryptPostKey, ivToBePublished: ivToBePublished)
            e2eResult.append(result)
        }
        let request = WebExtension.Encryption.PublishE2EResultMessage.withPayload {
            .init(postIV: base64PostIV,
                  networkHint: networkHint,
                  e2eResult: e2eResult)
        }
        request
            .eraseToAnyPublisher()
            .sink { completion in
                switch completion {
                case let .failure(error):
                    log.debug("set current identifier error \(String(describing: error))", source: "persona")
                    
                case .finished:
                    log.debug("set current identifier finished", source: "persona")
                }
            } receiveValue: { result in
                if let error = result.error {
                    log.debug("set current identifier error \(String(describing: error.message))", source: "persona")
                }
            }
            .store(in: &disposeBag)
    }
    
    private func getShareText(encrtypedMessage: String) -> String {
        let socialPlatform = personaManager.currentProfile.value?.socialPlatform
        let twitterAccount = L10n.Plugins.Luckydrop.twitterAccount
        let facebookAccount = L10n.Plugins.Luckydrop.twitterAccount
        guard pluginContents.first(where: { meta in
            if case .redPacket = meta {
                return true
            } else {
                return false
            }
        }) != nil else {
            // only encrypt message
            switch socialPlatform {
            case .twitter: return L10n.Plugins.Luckydrop.twitterOrFacebookTemplate(twitterAccount, encrtypedMessage)
            case .facebook: return L10n.Plugins.Luckydrop.twitterOrFacebookTemplate(facebookAccount, encrtypedMessage)
            default: return L10n.Plugins.Luckydrop.socialMediaTemplate(encrtypedMessage)
            }
        }
        
        switch socialPlatform {
        case .twitter: return L10n.Plugins.Luckydrop.twitterOrFacebookRedpacketTemplate(twitterAccount, encrtypedMessage)
        case .facebook: return L10n.Plugins.Luckydrop.twitterOrFacebookRedpacketTemplate(facebookAccount, encrtypedMessage)
        default: return L10n.Plugins.Luckydrop.socialMediaRedpacketTemplate(encrtypedMessage)
        }
    }
}

extension MessageComposeViewModel {
    enum Recipient: Equatable, CaseIterable {
        case everyone
        case onlyMe
        case specialContacts([PersonaRecord])

        var title: String {
            switch self {
            case .everyone: return L10n.Scene.MessageCompose.everyone
            case .onlyMe: return L10n.Scene.MessageCompose.onlyMe
            case .specialContacts: return L10n.Scene.MessageCompose.specialContacts
            }
        }
        
        var iconName: String {
            switch self {
            case .everyone: return Asset.Images.Scene.Compose.everyone.name
            case .onlyMe: return Asset.Images.Scene.Compose.onlyMe.name
            case .specialContacts: return Asset.Images.Scene.Compose.specialContacts.name
            }
        }
        
        static var allCases: [MessageComposeViewModel.Recipient] {
            [.everyone, .onlyMe, .specialContacts([])]
        }
    }
}

extension String {
    func clip(first count: Int) -> String? {
        let starIndex = self.startIndex
        let endIndex = self.endIndex

        guard let clipIndex = index(starIndex, offsetBy: count, limitedBy: endIndex) else {
            return nil
        }

        let subs = self[clipIndex...]

        return String(subs)
    }
}

extension MessageComposeViewModel: SelectComposeContactTypeDelegate {
    func returnContactType(type: MessageComposeViewModel.Recipient){
        recipient = type
    }    
}

