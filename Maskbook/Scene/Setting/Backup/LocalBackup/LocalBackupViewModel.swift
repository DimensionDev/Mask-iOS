//
//  LocalBackupViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/17.
//  Copyright © 2021 dimension. All rights reserved.
//
// swiftlint: disable force_unwrapping

import Alamofire
import Combine
import Foundation
import OSLog
import SocketIO
import SwiftyJSON
import WalletConnectSwift
import WebExtension_Shim

final class LocalBackupViewModel {
    enum WriteBackupError: Error {
        case fail
    }

    enum BackupType {
        case local
        case remote

        var title: String {
            switch self {
            case .local:
                return L10n.Scene.Setting.LocalBackup.title

            case .remote:
                return L10n.Scene.Setting.RemoteBackup.title
            }
        }
    }

    enum RemoteBackupError: Error {
        case invalidParam
        case failToGetUploadURL
        case failToUpload
    }

    enum LoadingState {
        case loading(text: String?)
        case idle
    }

    private(set) var previewPublisher = CurrentValueSubject<MaskWebMessageResult?, Never>(nil)
    private(set) var backupData = CurrentValueSubject<Backup, Never>(.init())

    /// payment password will be validated and passed in by PaymentFormItemViewModel
    private(set) var paymentPassword = CurrentValueSubject<String, Never>("")

    @Published
    var loading: LoadingState = .idle

    typealias CreateBackup = WebExtension.Setting.SettingsCreateBackup
    typealias GetBackupPreviewInfo = WebExtension.Setting.GetBackupPreviewInfo

    @InjectedProvider(\.maskMessageRelay)
    private var messageRelay

    @InjectedProvider(\.vault)
    private var vault

    @InjectedProvider(\.personaManager)
    private var personaManager

    @InjectedProvider(\.backupWallets)
    private var walletInfoProvider

    var disposeBag = Set<AnyCancellable>()

    let backupType: BackupType
    let cloudVerifyResult: CloudVerifyResult?
    lazy var uploadBackupInfo: AnyPublisher<URL, Error> = {
        getUploadBackupInfo().tryMap { response -> URL in
            guard let url = response?.uploadUrl else {
                throw RemoteBackupError.failToGetUploadURL
            }
            return url
        }
        .eraseToAnyPublisher()
    }()

    init(type: BackupType, cloudVerifyResult: CloudVerifyResult?) {
        backupType = type
        self.cloudVerifyResult = cloudVerifyResult
    }

    var backupWallet: Bool {
        (!backupData.value.isWalletEmpty && backupData.value.walletsSelected)
    }
}

// MARK: public methods

extension LocalBackupViewModel {
    func prepareBackup() {
        loading = .loading(text: nil)

        let backupDataPublisher = loadBackupDataPublisher()
            .share()
            .eraseToAnyPublisher()

        backupDataPublisher
            .map { Backup(rawData: $0.result, nativeWalletsCount: $1) }
            .receive(on: DispatchQueue.main)
            .bind(to: \.backupData, on: self)
            .store(in: &disposeBag)

        previewBackupPublisher(backupDataPublisher)
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { [weak self] result in
                self?.previewPublisher.value = result
                self?.loading = .idle
            })
            .store(in: &disposeBag)
    }

    func writeDataTo(url: URL) -> AnyPublisher<Void, Error> {
        Publishers.CombineLatest4(
            vault.getValue(for: .backupPassword).setFailureType(to: Error.self),
            getWalletInfo(),
            LazyFuture { [weak self] promise in
                promise(.success(self?.backupData.value ?? .init()))
            }
            .setFailureType(to: Error.self)
            .eraseToAnyPublisher(),
            Just(()).asyncMap({ _ in
                return await BackupDataGenerator.generate()
            })
            .eraseToAnyPublisher()
        )
        .tryMap { backupPassword, wallets, backup, nativeBackup -> (String, [String: Any]) in
            guard let password = backupPassword,
                  let content = backup.merge(nativeJson: nativeBackup,
                                             wallets: wallets)?.rawValue as? [String: Any]
            else {
                throw WriteBackupError.fail
            }
            return (password, content)
        }
        .tryMap { password, json in
            // use original implementation as it was to encrypt json
            let data = try Crypto.encryptBackup(password: password, account: "", content: json)
            try data.write(to: url)
            return ()
        }
        .eraseToAnyPublisher()
    }

    func backupRemotely() -> AnyPublisher<Void, Error> {
        uploadBackupInfo
            .flatMap { [weak self] url -> AnyPublisher<Void, Error> in
                guard let self = self else { return Empty().eraseToAnyPublisher() }
                return self.uploadBackupData(url: url)
            }
            .eraseToAnyPublisher()
    }

    func hasPaymentpassword() -> Bool {
        vault.hasSetWalletPassword()
    }
}

// MARK: private methods

extension LocalBackupViewModel {
    /// return nativeWallets
    /// if walletsSelected and paymentpassword is validated
    /// return wallets that recorded in coreData
    /// otherwise return empty
    private func getWalletInfo() -> AnyPublisher<[WalletBackupInfo], Error> {
        backupData.value.walletsSelected
        ? walletInfoProvider
            .prepareWallets(password: paymentPassword.value)
            .setFailureType(to: Error.self)
            .eraseToAnyPublisher()
        : LazyFuture { promise in
            promise(.success([]))
        }
        .setFailureType(to: Error.self)
        .eraseToAnyPublisher()
    }

    private func getUploadBackupInfo() -> AnyPublisher<RemoteBackupUploadResponse?, Error> {
        guard let cloudVerifyResult = cloudVerifyResult else {
            return Just<RemoteBackupPreview?>(nil).tryMap { _ in
                throw RemoteBackupError.invalidParam
            }
            .eraseToAnyPublisher()
        }

        var type: RemoteBackupUploadRequest.AccountType = .email
        switch cloudVerifyResult.verify {
        case .email:
            type = .email

        case .mobileNumber:
            type = .phone
        }

        let abstract = personaManager.personaRecordsSubject.value.compactMap { $0.nickname }.joined(separator: ",")
        let request = RemoteBackupUploadRequest(
            accountType: type,
            account: cloudVerifyResult.accountContent,
            code: cloudVerifyResult.verifyCode,
            abstract: abstract)
        return request.asResponsePublisher().tryMap { result in
            switch result {
            case let .success(data):
                return data

            case let .failure(error):
                throw error
            }
        }
        .eraseToAnyPublisher()
    }

    private func uploadBackupData(url: URL) -> AnyPublisher<Void, Error> {
        Publishers.CombineLatest4(
            vault.getValue(for: .backupPassword).setFailureType(to: Error.self),
            getWalletInfo(),
            Just(backupData.value).setFailureType(to: Error.self),
            Just(()).asyncMap({ _ in
                return await BackupDataGenerator.generate()
            })
            .eraseToAnyPublisher()
        )
        .tryMap { [weak self] backupPassword, wallets, backup, nativeJson -> (String, [String: Any], CloudVerifyResult) in
            guard let cloudVerifyResult = self?.cloudVerifyResult else {
                throw RemoteBackupError.invalidParam
            }

            guard let password = backupPassword,
                  let content = backup.merge(nativeJson: nativeJson,
                                             wallets: wallets)?.rawValue as? [String: Any] else {
                    throw WriteBackupError.fail
            }

            return (password, content, cloudVerifyResult)
        }
        .tryMap { backupPassword, content, cloudVerifyResult in
            let data = try Crypto.encryptBackup(
                password: backupPassword,
                account: cloudVerifyResult.accountForCypt,
                content: content)
            return data
        }
        .flatMap { data -> AnyPublisher<Void, Error> in
            RemoteBackupUploadFileRequest(uploadURL: url)
                .asUploadPublisher(data: data)
                .tryMap { result -> Void in
                    if result.response?.statusCode == 200 {
                        return ()
                    }

                    throw RemoteBackupError.failToUpload
                }
                .eraseToAnyPublisher()
        }
        .eraseToAnyPublisher()
    }

    private func loadBackupDataPublisher() -> AnyPublisher<(MaskWebMessageResult, Int), Never> {
       Publishers.CombineLatest(
            CreateBackup.withPayload {
                .default
            }
            .asAnyPublisher(),
            walletInfoProvider.nativeWalletsCount()
        )
        .map { ($0, $1) }
        .eraseToAnyPublisher()
    }

    private func previewBackupPublisher(
        _ backupPublisher: AnyPublisher<(MaskWebMessageResult, Int), Never>
    ) -> AnyPublisher<MaskWebMessageResult, Never> {
        backupPublisher.flatMap { result, _ -> AnyPublisher<MaskWebMessageResult, Never> in
            return GetBackupPreviewInfo.withPayload {
                .init(backupInfo: result.result?.rawString())
            }
            .asAnyPublisher()
        }
        .eraseToAnyPublisher()
    }
}

extension LocalBackupViewModel {
    struct Backup {
        var rawData: JSON?
        var nativeWalletsCount = 0

        var walletsSelected = false

        func merge(nativeJson: JSON,
                   wallets: [WalletBackupInfo]) -> JSON? {
            let dataWithoutWallets = try? rawData?.merged(with: nativeJson)
            guard walletsSelected,
                  !wallets.isEmpty else {
                return dataWithoutWallets
            }

            guard let walletsJson = wallets.wrappedIntoJSON() else {
                return dataWithoutWallets
            }
            return try? dataWithoutWallets?.merged(with: walletsJson)
        }

        var isWalletEmpty: Bool { nativeWalletsCount == 0 }
    }
}

// swiftlint: enable force_unwrapping
