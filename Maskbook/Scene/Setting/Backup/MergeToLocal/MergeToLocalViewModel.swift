//
//  MergeToLocalViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/10/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

final class MergeToLocalViewModel: ObservableObject {
    @Published
    var actionsViewModel: RemoteBackupActionsViewModel
    
    @Published
    var loadingState: LoadingState = .idle
    
    var disposeBag = Set<AnyCancellable>()
    
    init(actionsViewModel: RemoteBackupActionsViewModel) {
        self.actionsViewModel = actionsViewModel
    }
    
    func mergeToLocal(password: String) {
        guard let url = actionsViewModel.remoteBackupPreview.downloadUrl else { return }
        loadingState = .loading
        downloadRestoreFile(for: url)
            .mapError({ error -> Error in
                return error
            })
            .flatMap { [weak self] data -> AnyPublisher<Data, Error> in
                guard let self = self else { return Empty().eraseToAnyPublisher() }
                return self.decryptRemoteFile(password: password, data: data)
            }
            .flatMap { [weak self] decryptedData -> AnyPublisher<MaskWebMessageResult, Error> in
                guard let self = self else { return Empty().eraseToAnyPublisher() }
                return self.restore(data: decryptedData)
                    .eraseToAnyPublisher()
            }
            .receive(on: RunLoop.main)
            .sink { [weak self] completion in
                switch completion {
                case .finished:
                    self?.loadingState = .success
                    
                case let .failure(error):
                    self?.loadingState = .failure(error: error)
                }
            } receiveValue: { _ in
            }
            .store(in: &disposeBag)
    }
    
    private func downloadRestoreFile(for url: URL) -> AnyPublisher<Data, URLError> {
        URLSession.shared
            .dataTaskPublisher(for: url)
            .map { $0.data }
            .retry(3)
            .share()
            .eraseToAnyPublisher()
    }
    
    func decryptRemoteFile(password: String, data: Data) -> AnyPublisher<Data, Error> {
        // swiftlint:disable array_init
        Crypto.decryptBackupToDataPublisher(
            password: password,
            account: actionsViewModel.cloudVerifyResult.accountForCypt,
            content: data)
            .map { $0 }
            .eraseToAnyPublisher()
    }
    
    func restore(data: Data) -> AnyPublisher<MaskWebMessageResult, Error> {
        RestoreBackupMWEMessage.withPayload {
            .init(backupInfo: String(data: data, encoding: .utf8))
        }
        .eraseToAnyPublisher()
    }
}

extension MergeToLocalViewModel {
    enum LoadingState {
        case idle
        case loading
        case success
        case failure(error: Error)
    }
}
