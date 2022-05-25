//
//  WalletCoreHelper.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/25.
//  Copyright © 2021 dimension. All rights reserved.
//
import CoreData
import CoreDataStack
import MaskWalletCore
import OSLog
import web3swift
import SwiftProtobuf

// swiftlint:disable file_length
extension WalletCoreError: LocalizedError {
    public var errorDescription: String? {
        // TODO: i18n
        switch self {
        case .lowLevelLibError(let error):
            return "MaskWalletCore execution error: \(error.localizedDescription)"
        case .walletCoreError(let maskWalletCoreError):
            return maskWalletCoreError.localizedDescription
            
        case .unsupportedChainType:
            return "Unsupported blockchain type"
        case .coreDataError:
            return "CoreData internal error"
        case .storedKeyAlreadyExisting:
            return "Same account already existing"
        case .accountNotFound(let address):
            return "Cannot find the account of address:\(address)"
        case .requestParamError:
            return "Invalid request parameter"
        case .defaultStoreKeyNotFound:
            return "No default StoreKey found"
        }
    }
}

extension ChainType {
    var coin: Api_Coin {
        switch self {
        case .ethereum:
            return .ethereum
            
        case .polkadot:
            return .polkadot
        }
    }
}

extension StoredKey {
    convenience init(storedKeyInfo: Api_StoredKeyInfo, context: NSManagedObjectContext) {
        self.init(context: context)
        self.id = storedKeyInfo.id
        self.hashString = storedKeyInfo.hash
        self.data = storedKeyInfo.data
        switch storedKeyInfo.type {
        case .privateKey:
            self.type = Int16(StoredKeyType.privateKey.rawValue)
            
        case .mnemonic:
            self.type = Int16(StoredKeyType.mnemonic.rawValue)
            
        case .UNRECOGNIZED(_):
            self.type = Int16(StoredKeyType.mnemonic.rawValue)
        }
    }
}

extension Account {
    convenience init(accountInfo: Api_StoredKeyAccountInfo, context: NSManagedObjectContext) {
        self.init(context: context)
        self.address = accountInfo.address
        self.name = accountInfo.name
        self.derivationPath = accountInfo.derivationPath
        self.extendedPublicKey = accountInfo.extendedPublicKey
        switch accountInfo.coin.lowercased() {
        case "ethereum":
            self.chainId = Int64(ChainType.ethereum.rawValue)
        case "polkadot":
            self.chainId = Int64(ChainType.polkadot.rawValue)
            
        default:
            self.chainId = -1
        }
        let portfolio = Portfolio(context: context)
        portfolio.chainId = Int64(maskUserDefaults.network.chain.rawValue)
        portfolio.networkId = Int64(maskUserDefaults.network.networkId)
        self.addToPortfolios(portfolio)
    }
}

class WalletCoreHelper {
    class func sendRequestToRustLib(_ req: Api_MWRequest) -> Result<Api_MWResponse, Error> {
        do {
            let reqData = try req.serializedData()
            let res = try reqData.withUnsafeBytes { unsafeBytes -> Result<Api_MWResponse, Error> in
                let bytes = unsafeBytes.bindMemory(to: UInt8.self).baseAddress!
                let result = rust_request(bytes, UInt(UInt32(reqData.count)))
                
                let data = Data(bytes: result.bytes, count: Int(result.len))
                let rsp = try Api_MWResponse(serializedData: data)
                
                if case .error(let errorResp)? = rsp.response {
                    let maskWalletCoreError = MaskWalletCoreError(errorCode: errorResp.errorCode, errorMessage: errorResp.errorMsg)
                    let error = WalletCoreError.walletCoreError(maskWalletCoreError)
                    return .failure(error)
                }
                
                rust_free(result)
                return .success(rsp)
            }
            return res
        } catch {
            os_log("%{public}s[%{public}ld], %{public}s: [MW] mask-wallet-core fail error: %@", ((#file as NSString).lastPathComponent), #line, #function, error.localizedDescription)
            return .failure(WalletCoreError.lowLevelLibError(error))
        }
    }
}

// MARK: - StoredKey
extension WalletCoreHelper {
    class func generateMnemonic() -> Result<String, Error> {
        let param = Api_GenerateMnemonicParam()
        var req = Api_MWRequest()
        req.paramGenerateMnemonic = param
        return sendRequestToRustLib(req).map {
            $0.respGenerateMnemonic.mnemonic
        }
    }
    
    //    class func createHdWallet(password: String) -> Result<(storedKey: StoredKey, mnemonic: String), Error> {
    //        var param = Api_CreateStoredKeyParam()
    //        param.password = password
    //        var req = Api_MWRequest()
    //        req.paramCreateStoredKey = param
    //        return sendRequestToRustLib(req).map {
    //            (StoredKey(storedKeyInfo: $0.respCreateStoredKey.storedKey),
    //             $0.respCreateStoredKey.mnemonic)
    //        }
    //    }
    
    // always return .success if the response is successfull from `wallet-core`
    class func importWithMnemonicForcely(password: String, mnemonic: String, context: NSManagedObjectContext) -> Result<StoredKey, Error> {
        var param = Api_ImportMnemonicStoredKeyParam()
        param.password = password
        param.mnemonic = mnemonic
        var req = Api_MWRequest()
        req.paramImportMnemonic = param
        let resp = sendRequestToRustLib(req)
        switch resp {
        case .success(let response):
            if let storedKey = WalletCoreStorage.getStoredKey(hash: response.respImportMnemonic.storedKey.hash) {
                return .success(storedKey)
            }
            return .success(StoredKey(storedKeyInfo: response.respImportMnemonic.storedKey, context: context))
            
        case .failure(let error):
            return .failure(error)
        }
    }
    
    class func importWithPrivateKey(privateKey: String, password: String, name: String, chainType: ChainType, context: NSManagedObjectContext) -> Result<StoredKey, Error> {
        let apiCoin = chainType.coin
        
        var param = Api_ImportPrivateStoredKeyParam()
        param.privateKey = privateKey
        param.password = password
        param.name = name
        param.coin = apiCoin
        var req = Api_MWRequest()
        req.paramImportPrivateKey = param
        let resp = sendRequestToRustLib(req)
        switch resp {
        case .success(let response):
            if let _ = WalletCoreStorage.getStoredKey(hash: response.respImportPrivateKey.storedKey.hash) {
                return .failure(WalletCoreError.storedKeyAlreadyExisting)
            }
            return .success(StoredKey(storedKeyInfo: response.respImportPrivateKey.storedKey, context: context))
            
        case .failure(let error):
            return .failure(error)
        }
    }
    
    class func importWithJSONStoredKey(json: String, name: String, keyStoreJsonPassword: String, password: String, chainType: ChainType, context: NSManagedObjectContext) -> Result<StoredKey, Error> {
        let apiCoin = chainType.coin
        
        var param = Api_ImportJSONStoredKeyParam()
        param.json = json
        param.name = name
        param.keyStoreJsonPassword = keyStoreJsonPassword
        param.password = password
        param.coin = apiCoin
        var req = Api_MWRequest()
        req.paramImportJson = param
        let resp = sendRequestToRustLib(req)
        switch resp {
        case .success(let response):
            if let _ = WalletCoreStorage.getStoredKey(hash: response.respImportJson.storedKey.hash) {
                return .failure(WalletCoreError.storedKeyAlreadyExisting)
            }
            return .success(StoredKey(storedKeyInfo: response.respImportJson.storedKey, context: context))
            
        case .failure(let error):
            return .failure(error)
        }
    }
    
    class func updatePassword(password: String, newPassword: String, storedKeyData: Data)
    -> Result<(newHash: String, newData: Data), Error> {
        var param = Api_UpdateStoredKeyPasswordParam()
        param.storedKeyData = storedKeyData
        param.oldPassword = password
        param.newPassword = newPassword
        
        var req = Api_MWRequest()
        req.paramUpdateKeyStorePassword = param
        let resp = sendRequestToRustLib(req)
        switch resp {
        case .success(let response):
            let updatedStoredKey = response.respUpdateKeyStorePassword.storedKey
            return .success((updatedStoredKey.hash, updatedStoredKey.data))
            
        case .failure(let error):
            return .failure(error)
        }
    }
}

// MARK: - Account
extension WalletCoreHelper {
    class func createAccount(password: String, name: String, chainType: ChainType, derivationPath: String, storedKeyData: Data, context: NSManagedObjectContext) -> Result<Account, Error> {
        var param = Api_CreateStoredKeyNewAccountAtPathParam()
        param.password = password
        param.name = name
        switch chainType {
        case .ethereum:
            param.coin = Api_Coin.ethereum
            
        case .polkadot:
            return .failure(WalletCoreError.unsupportedChainType)
        }
        param.storedKeyData = storedKeyData
        param.derivationPath = derivationPath
        
        var req = Api_MWRequest()
        req.paramCreateAccountOfCoinAtPath = param
        
        let resp = sendRequestToRustLib(req)
        switch resp {
        case .success(let response):
            if let _ = WalletCoreStorage.getAccount(address: response.respCreateAccountOfCoinAtPath.account.address) {
                return .failure(WalletCoreError.storedKeyAlreadyExisting)
            }
            return .success(Account(accountInfo: response.respCreateAccountOfCoinAtPath.account, context: context))
            
        case .failure(let error):
            return .failure(error)
        }
    }
}

// MARK: - StoredKey Import & Export
extension WalletCoreHelper {
    class func getImportSupportType(chainType: ChainType) -> Result<[StoredKeyImportType], Error> {
        let apiCoin = chainType.coin
        
        var param = Api_GetKeyStoreSupportImportTypeParam()
        param.coin = apiCoin
        var req = Api_MWRequest()
        req.paramGetStoredKeyImportType = param
        return sendRequestToRustLib(req).map {
            $0.respGetStoredKeyImportType.type.compactMap {
                StoredKeyImportType(rawValue: $0.rawValue)
            }
        }
    }
    
    class func getExportSupportType(chainType: ChainType) -> Result<[StoredKeyExportType], Error> {
        let apiCoin = chainType.coin
        
        var param = Api_GetKeyStoreSupportExportTypeParam()
        param.coin = apiCoin
        var req = Api_MWRequest()
        req.paramGetStoredKeyExportType = param
        return sendRequestToRustLib(req).map {
            $0.respGetStoredKeyExportType.type.compactMap {
                StoredKeyExportType(rawValue: $0.rawValue)
            }
        }
    }
    
    class func exportKeystore(password: String, newPassword: String, account: Account) -> Result<String, Error> {
        guard let storedKey = account.ownedByStoredKey else { return .failure(WalletCoreError.requestParamError) }
        guard let storedKeyData = storedKey.data else { return .failure(WalletCoreError.requestParamError) }
        guard let chainType = ChainType(rawValue: Int(account.chainId)) else { return .failure(WalletCoreError.requestParamError) }
        guard let storedKeyType = StoredKeyType(rawValue: Int(storedKey.type)) else { return .failure(WalletCoreError.requestParamError) }
        
        var req = Api_MWRequest()
        switch storedKeyType {
        case .privateKey:
            guard let address = account.address else { return .failure(WalletCoreError.requestParamError) }
            var param = Api_ExportKeyStoreJSONOfAddressParam()
            param.coin = chainType.coin
            param.password = password
            param.newPassword = newPassword
            param.storedKeyData = storedKeyData
            param.address = address
            req.paramExportKeyStoreJsonOfAddress = param
            
        case .mnemonic:
            guard let derivationPath = account.derivationPath else { return .failure(WalletCoreError.requestParamError) }
            var param = Api_ExportKeyStoreJSONOfPathParam()
            param.coin = chainType.coin
            param.password = password
            param.newPassword = newPassword
            param.storedKeyData = storedKeyData
            param.derivationPath = derivationPath
            req.paramExportKeyStoreJsonOfPath = param
        }
        
        return sendRequestToRustLib(req).map {
            $0.respExportKeyStoreJson.json
        }
    }
    
    class func exportPrivateKey(password: String, account: Account) -> Result<String, Error> {
        guard let storedKey = account.ownedByStoredKey else { return .failure(WalletCoreError.requestParamError) }
        guard let storedKeyData = storedKey.data else { return .failure(WalletCoreError.requestParamError) }
        guard let chainType = ChainType(rawValue: Int(account.chainId)) else {
            return .failure(WalletCoreError.requestParamError)
        }
        let derivationPath = account.derivationPath
        var req = Api_MWRequest()
        
        if derivationPath?.hasSuffix("/0") == true {
            var param = Api_ExportKeyStorePrivateKeyParam()
            param.coin = chainType.coin
            param.password = password
            param.storedKeyData = storedKeyData
            req.paramExportPrivateKey = param
        } else {
            var param = Api_ExportKeyStorePrivateKeyOfPathParam()
            param.storedKeyData = storedKeyData
            param.password = password
            param.coin = chainType.coin
            param.derivationPath = derivationPath ?? ""
            req.paramExportPrivateKeyOfPath = param
        }
        return sendRequestToRustLib(req).map {
            $0.respExportPrivateKey.privateKey
        }
    }
    
    class func exportMnemonic(password: String, account: Account) -> Result<String, Error> {
        guard let storedKey = account.ownedByStoredKey else { return .failure(WalletCoreError.requestParamError) }
        guard storedKey.keyType == .mnemonic else { return
            .failure(WalletCoreError.requestParamError)
        }
        guard let storedKeyData = storedKey.data else { return .failure(WalletCoreError.requestParamError) }
        
        var req = Api_MWRequest()
        var param = Api_ExportKeyStoreMnemonicParam()
        param.password = password
        param.storedKeyData = storedKeyData
        req.paramExportMnemonic = param
        return sendRequestToRustLib(req).map {
            $0.respExportMnemonic.mnemonic
        }
    }
}

// MARK: - Validation
extension WalletCoreHelper {
    class func validatePrivateKey(privateKey: String) -> Bool {
        var param = Api_ValidateParam()
        param.privateKey = privateKey
        var req = Api_MWRequest()
        req.paramValidation = param
        switch sendRequestToRustLib(req) {
        case .success(let resp):
            return resp.respValidate.valid
            
        case .failure:
            return false
        }
    }
    
    class func validateMnemonic(mnemonic: String) -> Bool {
        var param = Api_ValidateParam()
        param.mnemonic = mnemonic
        var req = Api_MWRequest()
        req.paramValidation = param
        switch sendRequestToRustLib(req) {
        case .success(let resp):
            return resp.respValidate.valid
            
        case .failure:
            return false
        }
    }
    
    class func validateKeyStoreJson(keyStoreJson: String) -> Bool {
        var param = Api_ValidateParam()
        param.keyStoreJson = keyStoreJson
        var req = Api_MWRequest()
        req.paramValidation = param
        switch sendRequestToRustLib(req) {
        case .success(let resp):
            return resp.respValidate.valid
            
        case .failure:
            return false
        }
    }
    
    class func validateAddress(address: String, chainType: ChainType) -> Bool {
        let apiCoin = chainType.coin
        var param = Api_ValidateParam()
        var addressValidationParam = Api_AddressValidationParam()
        addressValidationParam.address = address
        addressValidationParam.coin = apiCoin
        param.addressValidationParam = addressValidationParam
        var req = Api_MWRequest()
        req.paramValidation = param
        switch sendRequestToRustLib(req) {
        case .success(let resp):
            return resp.respValidate.valid
            
        case .failure:
            return false
        }
    }
    
    class func validatePassword(password: String, storedKeyData: Data) -> Bool {
        var param = Api_ValidateParam()
        var passwordValidationParam = Api_PasswordValidationParam()
        passwordValidationParam.password = password
        passwordValidationParam.storedKeyData = storedKeyData
        param.storedKeyPassword = passwordValidationParam
        var req = Api_MWRequest()
        req.paramValidation = param
        switch sendRequestToRustLib(req) {
        case .success(let resp):
            return resp.respValidate.valid
            
        case .failure:
            return false
        }
    }
}

// MARK: - Sign
extension WalletCoreHelper {
    // swiftlint:disable enum_case_associated_values_count
    enum SignInput {
        case eth(
            chainId: Int64,
            nonce: String,
            gasPrice: String, // "Use 0x0 for EIP 1559 transaction"
            maxInclusionFeePerGas: String,
            maxFeePerGas: String,
            gasLimit: String,
            amount: String,
            toAddress: String,
            payload: Data)
    }
    // swiftlint:enable enum_case_associated_values_count
    // swiftlint:disable identifier_name
    enum SignOutput {
        case eth(
            encoded: Data,
            v: UInt32,
            r: Data,
            s: Data,
            data: Data
        )
    }
    // swiftlint:enable identifier_name
    class func signTransaction(
        password: String,
        storedKeyData: Data,
        derivationPath: String,
        input: SignInput,
        chainType: ChainType) -> Result<SignOutput, Error> {
            let apiCoin = chainType.coin
            
            var param = Api_SignTransactionParam()
            param.storedKeyData = storedKeyData
            param.password = password
            param.coin = apiCoin
            param.derivationPath = derivationPath
            
            switch chainType {
            case .ethereum:
                guard case .eth(let chainId,
                                let nonce,
                                let gasPrice,
                                let maxInclusionFeePerGas,
                                let maxFeePerGas,
                                let gasLimit,
                                let amount,
                                let toAddress,
                                let payload) = input else {
                    return .failure(WalletCoreError.requestParamError)
                }
                var ethSignInput = Ethereum_SignInput()
                ethSignInput.chainID = UInt64(chainId)
                ethSignInput.nonce = nonce
                ethSignInput.gasPrice = gasPrice
                ethSignInput.maxInclusionFeePerGas = maxInclusionFeePerGas
                ethSignInput.maxFeePerGas = maxFeePerGas
                ethSignInput.gasLimit = gasLimit
                ethSignInput.amount = amount
                ethSignInput.toAddress = toAddress
                ethSignInput.payload = payload
                param.signInput = ethSignInput
                
            case .polkadot:
                return .failure(WalletCoreError.unsupportedChainType)
            }
            
            var req = Api_MWRequest()
            req.paramSignTransaction = param
            
            switch sendRequestToRustLib(req) {
            case .failure(let error):
                return .failure(error)
                
            case .success(let resp):
                switch resp.respSignTransaction.output {
                case .none:
                    return .failure(WalletCoreError.requestParamError)
                    
                case .some(.signOutput(let ethOutput)):
                    return .success(SignOutput.eth(encoded: ethOutput.encoded, v: ethOutput.v, r: ethOutput.r, s: ethOutput.s, data: ethOutput.data))
                }
            }
        }
}

// MARK: - Generate addresses
extension WalletCoreHelper {
    class func generateAccountAddressForcely(
        password: String,
        name: String,
        chainType: ChainType,
        derivationPath: String,
        storedKeyData: Data) -> Result<String, Error> {
            guard chainType == .ethereum else {
                return .failure(WalletCoreError.unsupportedChainType)
            }

            return sendRequest(
                requestConfiguration: { request in
                    var param = Api_CreateStoredKeyNewAccountAtPathParam()
                    param.password = password
                    param.name = name
                    param.coin = .ethereum
                    param.storedKeyData = storedKeyData
                    param.derivationPath = derivationPath

                    request.paramCreateAccountOfCoinAtPath = param
                },
                flatMap: { response in
                    if let address = WalletCoreStorage.getAccount(address: response.respCreateAccountOfCoinAtPath.account.address)?.address {
                        return .success(address)
                    }
                    return .success(response.respCreateAccountOfCoinAtPath.account.address)
                }
            )
        }
    
    class func signMessage(message: String, fromAddress: String, _ completion: @escaping (Result<String, Error>) -> Void) {
        do {
            guard let messageData = Data.fromHex(message) else {
                throw Web3Error.dataError
            }
            guard let hash = Web3.Utils.hashPersonalMessage(messageData) else {
                throw Web3Error.dataError
            }
            guard let account = WalletCoreService.shared.getAccount(address: fromAddress) else {
                throw WalletCoreError.coreDataError
            }
            if account.fromWalletConnect {
                WalletConnectClient.shared.signMessage(message: message, fromAddress: fromAddress, completion)
            } else {
                let walletPassword = try Vault.shared.get(key: .walletPassword)
                
                let privateKey = try exportPrivateKey(password: walletPassword ?? "", account: account).get()
                
                guard let privateKeyData = Data.fromHex(privateKey) else {
                    throw MaskWalletCoreError.invalidPrivateKey
                }
                let (compressedSignature, _) = SECP256K1.signForRecovery(hash: hash, privateKey: privateKeyData)
                guard let signature = compressedSignature?.toHexString().addHexPrefix() else {
                    throw MaskWalletCoreError.invalidPrivateKey
                }
                completion(.success(signature))
            }
        } catch {
            completion(.failure(error))
            return
        }
    }

    /// Encrypt plugin metas and text content
    /// - Parameters:
    ///   - content: text content
    ///   - aauthorID: user id
    ///   - authorKeyData: raw data of user public key
    ///   - socialPlatForm: social platform identifier
    ///   - metas: plugin metas
    ///   - version: api version
    /// - Returns: encrypted content
    class func encryptPost(
        content: String,
        authorID: String?,
        authorKeyData: Data?,
        socialPlatForm: ProfileSocialPlatform?,
        metas: [PluginMeta],
        version: EncryptionVersion = .v38
    ) -> Result<String, Error> {
        if version == .v37 {
            return .failure(WalletCoreError.requestParamError)
        }

        let encryptingMessage: String? = {
            if metas.isEmpty {
                return content
            }
            guard let metaString = metas.stringfy() else {
                return nil
            }
            let seperator = "\u{1F9E9}"
            return "\(metaString)\(seperator)\(content)"
        }()

        guard let encryptingMessage = encryptingMessage else {
            return .failure(WalletCoreError.requestParamError)
        }

        let needTwitterEncoder: Bool = {
            guard let platform = socialPlatForm else {
                return false
            }

            return platform == .twitter
        }()

        return sendRequest(
            bindWith: \.paramPostEncryption,
            paramBuilder:
                Api_PostEncryptionParam.with { param in
                    switch version {
                    case .v37: param.version = .v37
                    case .v38: param.version = .v38
                    }

                    param.content = encryptingMessage
                    param.authorPublicKeyAlgr = .secp256K1Algr
                    if let data = authorKeyData {
                        param.authorPublicKeyData = data
                    }

                    if let id = authorID {
                        param.authorUserID = id
                    }

                    if let network = socialPlatForm {
                        param.network = network.url
                    }
                }
            ,
            map: { response in
                needTwitterEncoder
                ? Self.twitterEncode(content: response.respPostEncryption.content)
                : response.respPostEncryption.content
            }
        )
    }

    class func sendRequest<T>(
        requestConfiguration: (inout Api_MWRequest) throws -> Void,
        map: (Api_MWResponse) -> T
    ) -> Result<T, Error> {
        var req = Api_MWRequest()
        do {
            try requestConfiguration(&req)
            return sendRequestToRustLib(req).map(map)
        } catch {
            return .failure(error)
        }
    }

    class func sendRequest<T, V: Message>(
        bindWith keyPath: WritableKeyPath<Api_MWRequest, V>,
        paramBuilder: @autoclosure () throws -> V,
        map: (Api_MWResponse) -> T
    ) -> Result<T, Error> {
        var req = Api_MWRequest()
        do {
            req[keyPath: keyPath] = try paramBuilder()
            return sendRequestToRustLib(req).map(map)
        } catch {
            return .failure(error)
        }
    }

    class func sendRequest<T>(
        requestConfiguration: (inout Api_MWRequest) throws -> Void,
        flatMap: (Api_MWResponse) -> Result<T, Error>
    ) -> Result<T, Error> {
        var req = Api_MWRequest()
        do {
            try requestConfiguration(&req)
            let resp = sendRequestToRustLib(req).flatMap(flatMap)
            return resp
        } catch {
            return .failure(error)
        }
    }
    
    class func twitterEncode(content: String) -> String {
        return "https://mask.io/?PostData_v1=" +
                       content.replaceFirst(of: "\u{1F3BC}", with: "%20")
                      .replaceFirst(of: ":||", with: "%40")
                      .replaceFirst(of: "=", with: "_")
                      .replaceFirst(of: "+", with: "-")
                      .replacingOccurrences(of: "|", with: ".")
    }
}
// swiftlint:enable file_length
