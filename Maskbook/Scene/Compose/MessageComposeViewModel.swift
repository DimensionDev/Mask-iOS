import Alamofire
import BigInt
import Combine
import SwiftUI
import web3swift

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
        if !pluginContents.isEmpty {
            return
        }
        switch plugin {
        case .luckyDrop:
            guard userSetting.defaultAccountAddress?.isNotEmpty == true else {
                self.alertNoWallet()
                return
            }
            mainCoordinator.present(scene: .luckyDrop(source: .composer), transition: .modal())
            
        case .fileService:
            mainCoordinator.present(scene: .fileService, transition: .modal())
            
        default:
            print("message compose \(plugin) add did clicked")
        }
    }
    
    private func alertNoWallet() {
        let alertController = AlertController(
            title: L10n.Common.Alert.RedPacketNoWallet.title,
            message: L10n.Common.Alert.RedPacketNoWallet.description,
            confirmButtonText: L10n.Common.Controls.connectWallet,
            cancelButtonText: L10n.Common.Controls.cancel,
            imageType: .error,
            confirmButtonClicked:  { [weak self] _ in
                self?.mainCoordinator.goToBalance(from: .composer)
            })
        mainCoordinator.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil))
    }
}

extension MessageComposeViewModel {
    func addRedPacketMeta(_ payload: RedPacketPayload) {
        let meta = PluginMeta.redPacket(payload)

        append(newPluginContent: meta)
    }

    func encryptContent() {
        var authorKeyData: Data? = nil
        if let personaRecord = personaManager.currentPersona.value {
            let persona = Persona(fromRecord: personaRecord)
            authorKeyData = persona?.publicKey?.getRawData()
        }
        let socialPlatform = personaManager.currentProfile.value?.socialPlatform
        let authorId = personaManager.currentProfile.value?.identifier
            .flatMap { $0.clip(first: "person:".count) }

        guard let encrtypedMessage = try? WalletCoreHelper.encryptPost(
            content: message,
            authorID: authorId,
            authorKeyData: authorKeyData,
            socialPlatForm: socialPlatform,
            metas: pluginContents).get() else {
            // TODO: Error handling
            return
        }

        let finalPostText = getShareText(encrtypedMessage: encrtypedMessage)
        
        log.debug("\(finalPostText)", source: "share")
        // past final text to twitter compose
        if socialPlatform == .twitter {
            let maskSocialViewController = mainCoordinator.getMaskSocialViewController()
            maskSocialViewController?.openComposer(message: finalPostText.URLEncoded() ?? "")
            maskSocialViewController?.dismiss(animated: true)
        }
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
    enum Recipient: String, Equatable, CaseIterable {
        case everyone
        case onlyMe
        case specialContacts

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
