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
    var pluginContent:[MessageComposePluginContent] = []
    
    @Published
    var recipient: Recipient = .all
    
    @Published
    var encryptButtonEnable = true
    
    init() {
        $message
            .map({
                $0.isEmpty
            })
            .assign(to: \.encryptButtonEnable, on: self)
            .store(in: &disposeBag)
    }
}

extension MessageComposeViewModel {
    enum Recipient: String, Equatable, CaseIterable {
        case all
        case my
        case specificUser

        var title: String {
            switch self {
            case .all: return "Everyone can see"
            case .my: return "My"
            case .specificUser: return "Specific the mask user"
            }
        }
        
        var icon: Image? {
            nil
        }
    }
}
