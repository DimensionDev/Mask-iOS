import Alamofire
import Combine
import SwiftUI

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
    var mainCoordinator
    
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
            mainCoordinator.present(scene: .luckyDrop, transition: .modal(animated: true))
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
        // TODO: get authorID, authorKeyData and network
        let encrtypedMessage = WalletCoreHelper.encryptPost(content: message, authorID: nil, authorKeyData: nil, network: nil, metas: pluginContents)

        // TODO: text trimming before post to twitter

        // TODO: add i18n prefix
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
