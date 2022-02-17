import Combine
import Foundation
import SwiftUI

final class WalletRestoreVerifyViewModel: ObservableObject {
    @Published
    var paymentPassword = "" {
        didSet {
            guard errorTime != 0 else { return }
            self.tips = .none
            withAnimation(.spring()) {
                self.errorTime = 0
            }
        }
    }

    @Published
    var tips = Tips.none

    @Published
    var errorTime = 0

    @Published
    var showing = false

    @InjectedProvider(\.vault)
    private var vault

    private(set) var actionSignal = PassthroughSubject<Action, Never>()

    private(set) var cancelableStorage: Set<AnyCancellable> = []

    func verfityPassword() {
        cancelableStorage.removeAll()
        let localPassword = paymentPassword

        vault.getValue(for: .walletPassword)
            .receive(on: DispatchQueue.global())
            .map { remotePassword -> MatchResult in
                guard let password = remotePassword else {
                    return .failedToLoadWalletPassword
                }
                return .verifyed(password == localPassword)
            }
            .receive(on: DispatchQueue.main)
            .sink { [weak self] matchResult in
                guard let self = self else { return }

                switch matchResult {
                case let .verifyed(match):
                    if match {
                        self.tips = .none
                        self.actionSignal.send(.verifyed)
                    } else {
                        withAnimation(.spring()) {
                            self.errorTime += 1
                        }
                        self.tips = .incorrectWalletPassword
                    }

                case .failedToLoadWalletPassword:
                    self.tips = .networkError
                }
            }
            .store(in: &cancelableStorage)
    }
}

extension WalletRestoreVerifyViewModel {
    enum Action {
        case dismiss
        case verifyed
    }

    enum MatchResult {
        case verifyed(Bool)
        case failedToLoadWalletPassword
    }

    enum Tips {
        case none
        case networkError
        case incorrectWalletPassword

        var showTipText: Bool {
            switch self {
            case .none: return false
            default: return true
            }
        }

        var tipText: String {
            switch self {
            case .none: return ""
            case .networkError: return L10n.Scene.ChangePassword.failedLoadingPassword
            case .incorrectWalletPassword: return L10n.Scene.ChangePassword.incorrectPassword
            }
        }
    }
}
