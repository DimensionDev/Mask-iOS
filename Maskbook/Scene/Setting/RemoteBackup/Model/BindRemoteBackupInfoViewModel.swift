import Combine
import Foundation

final class BindRemoteBackupInfoViewModel: ObservableObject {
    @Published
    var strategyModel: RemoteBackpVerifyStrategy

    @Published
    var email: String = "" {
        didSet {
            strategyModel.verificationIdentifier.updateEmail(email)
        }
    }

    @Published
    var mobileRegionCode = "+" {
        didSet {
            var code = mobileRegionCode
            if !code.hasPrefix("+") {
                code = "+\(code)"
                // trigger didSet again, so just return
                mobileRegionCode = code
                return
            }
            strategyModel.verificationIdentifier.updatePhoneRegion(mobileRegionCode)
        }
    }

    @Published
    var mobileNumber = "" {
        didSet {
            strategyModel.verificationIdentifier.updatePhoneNumber(mobileNumber)
        }
    }

    @Published
    private(set) var countDownTime: Int = 60

    @Published
    private(set) var state: State = .updatingIdentifier

    @Published
    private(set) var validateCodeMismatch = false

    @InjectedProvider(\.userDefaultSettings)
    private var userSettings

    private(set) var sceneSignal = PassthroughSubject<SceneAction, Never>()

    var isResendEnabled: Bool { countDownTime == 0 }
    var countingText: String { "\(countDownTime)s" }

    var confirmEnabled: Bool {
        switch state {
        case .updatingIdentifier: return strategyModel.verificationIdentifier.isValidContent
        case .validatingCode, .validatingBeforeChange: return strategyModel.verificationCode.count >= 6
        }
    }

    var resendButtonTitle: String {
        isResendEnabled
            ? L10n.Scene.Restore.Buttontitles.resend
            : countingText
    }

    private(set) var cancelableStorage: Set<AnyCancellable> = []
    private(set) var coutingStorage: Set<AnyCancellable> = []

    init(strategy: RemoteBackpVerifyStrategy, validateBeforeChange: Bool = false) {
        self.strategyModel = strategy
        if validateBeforeChange {
            state = .validatingBeforeChange
            requestValidationCode()
        }
    }

    func requestValidationCode() {
        strategyModel.asValidationCodeRequest()
            .asResponsePublisher()
            .fireAndIgnore()
            .store(in: &cancelableStorage)
        updateStateIfNeeded()
        validateCodeMismatch = false
    }

    private func updateStateIfNeeded() {
        switch state {
        case .updatingIdentifier:
            startCounting()
            state = .validatingCode

        case .validatingBeforeChange:
            startCounting()

        case .validatingCode:
            guard isResendEnabled else {
                return
            }
            startCounting()
        }
    }

    private func startCounting() {
        countDownTime = 60
        coutingStorage.removeAll()
        Timer.publish(every: 1, on: .main, in: .common)
            .autoconnect()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                if self.countDownTime > 0 {
                    self.countDownTime -= 1
                }
            }
            .store(in: &coutingStorage)
    }

    func validate() {
        strategyModel.asVerificationRequest()
            .asResponsePublisher()
            .map { result -> RequestResult in
                switch result {
                case let .success(response):
                    let message = response.message ?? ""
                    return .init(message: message)

                case let .failure(error):
                    return .init(message: "\(error)")
                }
            }
            .receive(on: DispatchQueue.main)
            .sink { [weak self] result in
                guard let self = self else { return }
                switch result {
                case .success:
                    self.handleValidationIfSucceed()

                case .codeMismatch:
                    // if code mismatch show tips and wait for user action
                    self.validateCodeMismatch = true

                default:
                    #if DEBUG
                    print(result.message)
                    #endif
                    self.sceneSignal.send(.errorResponse)
                }
            }
            .store(in: &cancelableStorage)
    }

    private func handleValidationIfSucceed() {
        switch self.state {
        case .validatingCode:
            self.saveEmailOrMobileNumber()

        case .validatingBeforeChange:
            self.strategyModel.cleanVerificationIdentifierIfNeeded()
            self.state = .updatingIdentifier

        // do nothing under this case
        case .updatingIdentifier: break
        }
    }

    private func saveEmailOrMobileNumber() {
        switch strategyModel.verificationIdentifier {
        case let .phoneNumber(regionCode, number):
            userSettings.remoteBackupPhoneNumber = "\(regionCode),\(number)"

        case let .email(emailAddress):
            userSettings.remoteBackupEmail = emailAddress
        }
        sceneSignal.send(.bindingSucceed)
    }
}

extension BindRemoteBackupInfoViewModel {
    enum State {
        case updatingIdentifier
        case validatingCode
        case validatingBeforeChange
    }

    enum SceneAction {
        case bindingSucceed
        case errorResponse
        case dismiss
    }

    struct RequestResult {
        let message: String
    }
}

extension BindRemoteBackupInfoViewModel.RequestResult: RawRepresentable {
    var rawValue: String { message }

    init?(rawValue: String) {
        message = rawValue
    }
}

extension BindRemoteBackupInfoViewModel.RequestResult {
    static func ~= (lhs: Self, rhs: Self) -> Bool {
        return lhs.rawValue == rhs.rawValue
    }

    static func ~= (lhs: String, rhs: Self) -> Bool {
        return lhs == rhs.rawValue
    }

    static var codeMismatch: Self {
        .init(message: "code mismatch")
    }

    static var success: Self {
        .init(message: "")
    }
}
