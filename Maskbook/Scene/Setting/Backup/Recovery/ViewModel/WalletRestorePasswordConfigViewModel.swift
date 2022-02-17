import Combine
import Foundation
import SwiftUI

final class WalletRestorePasswordConfigViewModel: ObservableObject {
    @Published
    var password = ""

    @Published
    var repeatPassword = ""

    @Published
    private(set) var tips = Tips.none

    private(set) var cancelableStorage: Set<AnyCancellable> = []

    @InjectedProvider(\.vault)
    private var vault

    private(set) var actionSignal = PassthroughSubject<Action, Never>()

    init() {
        Publishers.CombineLatest(
            $password.eraseToAnyPublisher(),
            $repeatPassword.eraseToAnyPublisher()
        )
        .map { "\($0)\($1)" }
        .removeDuplicates()
        .sink { [weak self] _ in
            guard let self = self else { return }
            withAnimation(.spring()) {
                self.tips = .none
            }
        }
        .store(in: &cancelableStorage)
    }

    func verfityPassword() {
        let tips: Tips = {
            if !password.isValidPasswordFormat {
                return .invalidPassword
            }

            if !repeatPassword.isValidPasswordFormat {
                return .invalidRepeatPassword
            }

            if password != repeatPassword {
                return .passwordsUnmatch
            }

            return .none
        }()

        guard tips == .none else {
            withAnimation(.spring()) {
                self.tips = tips
            }
            return
        }

        let newWalletPassword = password
        let walletUpdateResult = WalletCoreService.shared.updatePassword(
            password: "",
            newPassword: newWalletPassword)

        switch walletUpdateResult {
        case .success:
            vault.set(newWalletPassword, key: .walletPassword)
            actionSignal.send(.continueRestoring)

        case .failure(_):
            withAnimation(.spring()) {
                self.tips = .unkownError
            }
        }
    }
}

extension WalletRestorePasswordConfigViewModel {
    enum Tips: Equatable {
        case passwordsUnmatch
        case invalidPassword
        case invalidRepeatPassword
        case unkownError
        case none

        var showTips: Bool {
            self != .none
        }

        var text: String {
            switch self {
            case .none, .invalidPassword: return L10n.Scene.SetPassword.passwordInvalid
            case .invalidRepeatPassword, .passwordsUnmatch: return L10n.Scene.ChangePassword.passwordNotMatch
            case .unkownError: return L10n.Scene.SetPassword.failedUpdatingPassword
            }
        }
    }

    enum Action {
        case dismiss
        case continueRestoring
    }
}
