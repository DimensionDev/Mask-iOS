import Combine
import Foundation

final class RestoreLocalFileValidationViewModel: ObservableObject {
    let sceneSignal = PassthroughSubject<SceneAction, Never>()

    @Published
    var decryptSeed: String = "" {
        didSet {
            guard validationState != .validating else {
                return
            }

            guard validationState == .invalid else {
                return
            }

            if decryptSeed != oldValue {
                validationState = .active
            }
        }
    }

    @Published
    var validationState: ValidationState = .active

    private let fileURL: URL
    private var cancelableStorage: Set<AnyCancellable> = []

    init(_ localFileURL: URL) {
        self.fileURL = localFileURL
        _ = fileURL.startAccessingSecurityScopedResource()
    }

    deinit { fileURL.stopAccessingSecurityScopedResource() }

    func startValidating() {
        guard self.validationState != .validating else {
            return
        }

        validationState = .validating
        cancelableStorage.removeAll()

        // this signal is receiving on main queue
        let validateResult = fileURL
            .asDataInBackupFile(with: decryptSeed)
            .share()

        // update passwordFormItem validate state
        validateResult
            .map {
                switch $0 {
                case .success: return .active
                case .failure: return .invalid
                }
            }
            .assign(to: \.validationState, on: self)
            .store(in: &cancelableStorage)

        // navigate to restore preview scene
        validateResult
            .compactMap { result -> Data? in
                switch result {
                case let .success(data): return data
                default: return nil
                }
            }
            .sink { [weak self] decryptedData in
                self?.startRestoringFrom(data: decryptedData)
            }
            .store(in: &cancelableStorage)
    }

    private func startRestoringFrom(data: Data) {
        self.sceneSignal.send(.startRestoring(data: data))
    }
}

extension RestoreLocalFileValidationViewModel {
    enum SceneAction {
        case dismiss
        case startRestoring(data: Data)
    }

    enum ValidationState: Equatable {
        case active
        case validating
        case invalid

        var isInValid: Bool {
            switch self {
            case .invalid: return true
            default: return false
            }
        }

        var title: String {
            switch self {
            case .validating: return ""
            case .active: return L10n.Scene.Restore.Buttontitles.next
            case .invalid: return L10n.Scene.Setting.BackupRecovery.wrongPassword
            }
        }
    }
}
