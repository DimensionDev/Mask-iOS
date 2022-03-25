//
//  RemoteRestoreInfoViewModel.swift
//  Maskbook
//
//  Created by yzj on 2021/8/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Alamofire
import Combine

final class RemoteRestoreInfoViewModel: ObservableObject {
    @Published
    var showPassword = false
    
    @InjectedProvider(\.vault)
    private var vault

    private let verifyData: CloudVerifyResult
    private(set) var loadingState = PassthroughSubject<LoadingState, Never>()
    private var remotePasswordSignal = PassthroughSubject<String, Never>()
    private(set) var restoreSucceedStrategy = PassthroughSubject<RestoreCompletionStrategy, Never>()

    private(set) var remoteContent = CurrentValueSubject<Data?, Never>(nil)

    private var downloadSignalStorage: Set<AnyCancellable> = []
    private var strategyStorage: Set<AnyCancellable> = []
    private(set) var cancelableStorage: Set<AnyCancellable> = []
    private var restoreStorage: Set<AnyCancellable> = []

    private lazy var formatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd HH:mm"
        formatter.locale = Locale.current
        return formatter
    }()

    @Published
    private(set) var backupPreview: RemoteBackupPreview?

    @Published
    var remotePassword: String = "" {
        didSet {
            if oldValue != remotePassword, tip != .none {
                tip = .none
            }
        }
    }

    @Published
    private(set) var tip: Tip = .none

    init(verifyData: CloudVerifyResult) {
        self.verifyData = verifyData
        observeRestoreSucceedStrategy()
    }

    private func observeRestoreSucceedStrategy() {
        Publishers.CombineLatest(
            remotePasswordSignal,
            vault.getValue(for: .backupPassword)
        )
        .receive(on: DispatchQueue.global())
        .map { remotePassword, backupPassword in
            remotePassword != backupPassword
                ? RestoreCompletionStrategy.suggestSyncing(remotePassword: remotePassword)
                : .ignoreAndLogin
        }
        .receive(on: DispatchQueue.main)
        .removeDuplicates()
        .bind(to: \.restoreSucceedStrategy, on: self)
        .store(in: &strategyStorage)
    }

    func loadRemoteData() {
        cancelableStorage.removeAll()
        loadingState.send(.loading)
        RemoteBackupRequest(from: verifyData)
            .asResponsePublisher()
            .map { $0.backupPreview }
            .handleEvents(receiveOutput: { [weak self] data in
                self?.downloadRestoreFile(for: data?.downloadUrl)
            })
            .compactMap { $0 }
            .removeDuplicates()
            .assign(to: \.backupPreview, on: self)
            .store(in: &cancelableStorage)
    }

    func reloadRestoreData() {
        loadingState.send(.loading)
        downloadRestoreFile(for: backupPreview?.downloadUrl)
    }

    private func downloadRestoreFile(for url: URL?) {
        guard let url = url else {
            loadingState.send(.retryLoadRestoreInfo)
            return
        }
        downloadSignalStorage.removeAll()
        let dataPublisher = URLSession.shared
            .dataTaskPublisher(for: url)
            .receive(on: DispatchQueue.global())
            .map { $0.data }
            .replaceError(with: nil)
            .receive(on: DispatchQueue.main)
            .share()

        dataPublisher
            .map { $0 == nil ? .retryLoadRestoreFile : .loaded }
            .bind(to: \.loadingState, on: self)
            .store(in: &downloadSignalStorage)

        dataPublisher
            .bind(to: \.remoteContent, on: self)
            .store(in: &downloadSignalStorage)
    }

    func decryptRemoteFile() {
        guard let content = remoteContent.value else { return }

        self.loadingState.send(.restoring)
        let localBackupPassword = vault.getValue(for: .backupPassword).setFailureType(to: Error.self)
        let decrypt = Crypto.decryptBackupToDataPublisher(
            password: remotePassword,
            account: verifyData.accountForCypt,
            content: content
        )
        .subscribe(on: DispatchQueue.global())

        
        Publishers.Zip(localBackupPassword, decrypt)
            .receive(on: RunLoop.main)
            .sink { [weak self] completion in
                switch completion {
                case .finished:
                    break

                case let .failure(error):
                    self?.tip = .incorrectBackupPassword
                    self?.loadingState.send(.restoreFailure(error: error))
                }
            } receiveValue: { [weak self] backupPassword, data in
                self?.tip = .none
//                if let backupPassword = backupPassword, backupPassword != self?.remotePassword {
//                    self?.loadingState.send(.syncCloudPassword)
//                } else {
//                    self?.loadingState.send(.restored)
//                }
                self?.loadingState.send(.restored(data))
            }
            .store(in: &restoreStorage)
    }

    func restore(data: Data) -> AnyPublisher<MaskWebMessageResult, Error> {
        RestoreBackupMWEMessage.withPayload {
            .init(backupInfo: String(data: data, encoding: .utf8))
        }
        .eraseToAnyPublisher()
    }
}

extension RemoteRestoreInfoViewModel {
    var fileIdentifier: String {
        backupPreview?.abstract ?? ""
    }

    var fileUpdateTime: String {
        guard let time = backupPreview?.uploadedTime else { return "-- -- -- --:--" }
        let date = Date(timeIntervalSince1970: time)
        return formatter.string(from: date)
    }

    var fileSize: String {
        guard let fileSize = backupPreview?.size else { return "0 kb" }
        let kb = fileSize / 1_024
        guard kb > 1_024 else {
            return String(format: "%.2f KB", kb)
        }

        let mb = kb / 1_024
        guard mb > 1_024 else {
            return String(format: "%.2f MB", mb)
        }

        let gb = mb / 1_024
        return String(format: "%.2f GB", gb)
    }
}

extension RemoteRestoreInfoViewModel {
    enum LoadingState {
        case loading
        case loaded
        // restroe file
        case retryLoadRestoreFile
        // restore preview info
        case retryLoadRestoreInfo
        
        case restoring
        case restored(Data)
        case restoreFailure(error: Error)
        case syncCloudPassword
    }

    enum Tip {
        case incorrectBackupPassword
        case none

        var showing: Bool {
            switch self {
            case .incorrectBackupPassword: return true
            default: return false
            }
        }
    }
}

extension Result where Success == RemoteBackupPreview, Failure == AFError {
    var backupPreview: RemoteBackupPreview? {
        switch self {
        case let .success(value): return value
        default: return nil
        }
    }
}
