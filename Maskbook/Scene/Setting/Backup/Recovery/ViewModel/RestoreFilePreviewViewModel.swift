//
//  RestoreFilePreviewViewModel.swift
//  Maskbook
//
//  Created by yzj on 2021/8/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import SwiftMsgPack

// swiftlint:disable array_init
final class RestoreFilePreviewViewModel: ObservableObject {
    @Published
    var restoreFile: RestorePreviewResult

    private var cancelableStorage: Set<AnyCancellable> = []
    private var fileHandlerStorage: Set<AnyCancellable> = []
    private(set) var stateSignal = PassthroughSubject<State, Never>()

    private let fileSource: RestoreFileSource
    private var decryptSeed: String? { fileSource.decryptSeed }
    private var decryptedData = Data()
    private var restoreRawData = Data()
    private var validRestoreData: Data {
        switch fileSource {
        case let .localFileURL(_, decryptSeed): return decryptSeed == nil ? restoreRawData : decryptedData
        case let .data(data): return data
        }
    }

    private(set) var walletPipeline = WalletRestorePipeline()

    init(
        _ restoreFile: RestorePreviewResult,
        restoreFileSource: RestoreFileSource
    ) {
        self.restoreFile = restoreFile
        self.fileSource = restoreFileSource
        self.fileSource.startAccessingSecurityScopedResource()
    }

    deinit {
        self.fileSource.stopAccessingSecurityScopedResource()
    }

    func startPreparingData() {
        switch fileSource {
        case let .localFileURL(url, decryptSeed):
            if decryptSeed == nil {
                LazyFuture<Data?, Never> { promise in
                    if let content = try? Data(contentsOf: url) {
                        promise(.success(content))
                    } else {
                        promise(.success(nil))
                    }
                }
                .receive(on: DispatchQueue.global())
                .map { $0 }
                .receive(on: DispatchQueue.main)
                .sink { [weak self] data in
                    guard let rawData = data else {
                        self?.stateSignal.send(.failedLoadingData)
                        return
                    }

                    self?.restoreRawData = rawData
                    self?.parsingData()
                }
                .store(in: &cancelableStorage)
            } else {
                // this case maybe never be excuted, for data would have been decrtypted when validating decrtypt seed
                decrtyptData(at: url)
            }

        case .data: parsingData()
        }
    }

    private func decrtyptData(at fileURL: URL) {
        guard let seed = decryptSeed else {
            return
        }

        fileHandlerStorage.removeAll()
        let fileLoadingPublisher = fileURL
            .asDataInBackupFile(with: seed)
            .share()

        fileLoadingPublisher
            .compactMap {
                if case .failure = $0 {
                    return .failedLoadingData
                } else {
                    return nil
                }
            }
            .bind(to: \.stateSignal, on: self)
            .store(in: &fileHandlerStorage)

        fileLoadingPublisher
            .compactMap { result -> Data? in
                if case let .success(data) = result {
                    return data
                } else {
                    return nil
                }
            }
            .sink { [weak self] decryptedData in
                self?.decryptedData = decryptedData
                self?.parsingData()
            }
            .store(in: &fileHandlerStorage)
    }

    private func parsingData() {
        let data = self.validRestoreData
        let dataSignal = GetRestorePreviewInfoMWEMessage
            .withPayload {
                .init(backupInfo: String(data: data, encoding: .utf8))
            }
            .eraseToAnyPublisher()

        let timerSignal = LazyFuture.delay(1).setFailureType(to: Error.self)

        Publishers.CombineLatest(dataSignal, timerSignal)
            .receive(on: DispatchQueue.main)
            .flatMap { data, _ -> AnyPublisher<State, Error> in
                return Just(data.state).setFailureType(to: Error.self).eraseToAnyPublisher()
            }
            .handleEvents(receiveOutput: { [weak self] state in
                guard let self = self else { return }
                guard case let .fileDecoded(data) = state else {
                    return
                }
                self.restoreFile = data
            })
            .replaceError(with: .restoreFailed)
            .bind(to: \.stateSignal, on: self)
            .store(in: &cancelableStorage)
    }

    func restore() {
        self.stateSignal.send(.startRestoring)
        let data = self.validRestoreData

        walletPipeline.restore(with: data)
    }
}

extension RestoreFilePreviewViewModel {
    enum State: Equatable {
        case startRestoring
        case unsupportedFile
        case fileDecoded(RestorePreviewResult)
        case failedLoadingData

        case restoreFailed
    }
}

private extension MaskWebMessageResult {
    var state: RestoreFilePreviewViewModel.State {
        if self.error != nil {
            return .unsupportedFile
        }

        let model = RestorePreviewResult(from: result)
        return .fileDecoded(model)
    }
}

enum RestoreFileSource {
    case localFileURL(URL, decryptSeed: String?)
    case data(Data)

    var decryptSeed: String? {
        switch self {
        case let .localFileURL(_, decryptSeed): return decryptSeed
        case .data: return nil
        }
    }

    func startAccessingSecurityScopedResource() {
        switch self {
        case let .localFileURL(url, _): _ = url.startAccessingSecurityScopedResource()
        default: break
        }
    }

    func stopAccessingSecurityScopedResource() {
        switch self {
        case let .localFileURL(url, _): url.stopAccessingSecurityScopedResource()
        default: break
        }
    }
}
// swiftlint:enable array_init

extension URL {
    func asDataInBackupFile(with decyptSeed: String) -> AnyPublisher<Result<Data, Error>, Never> {
        LazyFuture<Data, Error> { promise in
            do {
            let content = try Data(contentsOf: self)
                promise(.success(content))
            } catch {
                promise(.failure(error))
            }
        }
        .receive(on: DispatchQueue.global())
        .flatMap {
            Crypto.decryptBackupToDataPublisher(password: decyptSeed, account: "", content: $0)
        }
        .map { data -> Result<Data, Error> in
            .success(data)
        }
        .catch { error in
            Just(.failure(error))
        }
        .receive(on: RunLoop.main)
        .eraseToAnyPublisher()
    }
}
