import Combine
import Foundation
import SwiftUI

final class WalletRestoreInfoViewModel: ObservableObject {
    let items: [RestoreWalletItem]
    let itemCount: CGFloat

    let actionSignal = PassthroughSubject<Action, Never>()

    init(items: [RestoreWalletItem]) {
        self.items = items
        self.itemCount = CGFloat(items.count)
    }
}

extension WalletRestoreInfoViewModel {
    enum Action {
        case dismiss
    }
}
