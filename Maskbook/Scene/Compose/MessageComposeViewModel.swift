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
        Publishers.CombineLatest($message, $pluginContents)
            .map {
                $0.isEmpty && $1.isEmpty
            }
            .assign(to: \.encryptButtonEnable, on: self)
            .store(in: &disposeBag)
        
        $message
            .map(\.isEmpty)
            .assign(to: \.showPlaceHolder, on: self)
            .store(in: &disposeBag)
    }
    
    func append(newPluginContent: PluginMeta) {
        pluginContents.removeAll()
        pluginContents.append(newPluginContent)
    }
    
    func remove(pluginContent: PluginMeta) {
        pluginContents.removeAll {
            $0.id == pluginContent.id
        }
    }
    
    func pluginAddClicked(plugin: PluginType) {
        switch plugin {
        case .luckyDrop:
            mainCoordinator.present(scene: .luckyDrop(source: .composer, callback: { @MainActor [weak self] payload in
                let meta = PluginMeta.redPacket(key: PluginType.luckyDrop.postEncryptionKey, value: payload)
                self?.pluginContents.append(meta)
                
                self?.mainCoordinator.dismissTopViewController()
            }), transition: .modal(animated: true))
        default:
            print("message compose \(plugin) add did clicked")
        }
    }
}

extension MessageComposeViewModel {
    func addRedPacketMeta(_ payload: RedPacketPayload) {
        let key = PluginType.luckyDrop.postEncryptionKey
        let meta = PluginMeta.redPacket(key: key, value: payload)

        append(newPluginContent: meta)
    }

    func encryptContent() {
        var authorKeyData: Data? = nil
        if let personaRecord = personaManager.currentPersona.value {
            let persona = Persona(fromRecord: personaRecord)
            authorKeyData = persona?.publicKey?.getRawData()
        }
        let socialPlatform = personaManager.currentProfile.value?.socialPlatform
        let authorId = personaManager.currentPersona.value?.identifier
        
        guard let encrtypedMessage = try? WalletCoreHelper.encryptPost(
            content: message,
            authorID: authorId,
            authorKeyData: authorKeyData,
            socialPlatForm: socialPlatform,
            metas: pluginContents).get() else {
            // TODO: Error handling
            return
        }

        let finalPostText: String = {
            switch socialPlatform {
            case .twitter:
                return L10n.Plugins.Luckydrop
                    .twitteOrFacebookTemplate(L10n.Plugins.Luckydrop.twitterAccount, encrtypedMessage)

            case .facebook:
                return L10n.Plugins.Luckydrop
                    .twitteOrFacebookTemplate(L10n.Plugins.Luckydrop.facebookAccount, encrtypedMessage)

            default: return L10n.Plugins.Luckydrop.socialMediaTemplate(encrtypedMessage)
            }
        }()

        // past final text to twitter compose
        if socialPlatform == .twitter {
            let maskSocialViewController = mainCoordinator.getMaskSocialViewController()
            maskSocialViewController?.openComposer(message: finalPostText.urlEncode() ?? "")
            mainCoordinator.dismissTopViewController()
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
