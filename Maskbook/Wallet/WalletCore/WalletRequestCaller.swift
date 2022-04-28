//
//  WalletRequestCaller.swift
//  Maskbook
//
//  Created by yzj on 2021/7/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import MaskWalletCore
import MaskWalletCoreMobile
import os

protocol RequestCaller {
    func publisherFromRustLib(
        _ req: Api_MWRequest,
        file: String,
        line: Int,
        function: String
    ) -> AnyPublisher<Api_MWResponse, Error>

    func sendRequestToRustLib(
        _ req: Api_MWRequest,
        file: String,
        line: Int,
        function: String
    ) -> Result<Api_MWResponse, Error>
}

extension RequestCaller {
    func call<R: WalletCoreRequest, T>(
        _ request: R,
        file: String = #file,
        line: Int = #line,
        function: String = #function
    ) -> AnyPublisher<T, Error> where T == R.ParsedResult {
        publisherFromRustLib(request.asWalletRequest(), file: file, line: line, function: function)
            .tryMap { try request.parse($0) }
            .eraseToAnyPublisher()
    }

    func sendRequestToRustLib(
        _ req: Api_MWRequest,
        file: String = #file,
        line: Int = #line,
        function: String = #function
    ) -> Result<Api_MWResponse, Error> {
        do {
            let reqData = try req.serializedData()
            let res = try reqData.withUnsafeBytes { unsafeBytes -> Result<Api_MWResponse, Error> in
                guard let bytes = unsafeBytes.bindMemory(to: UInt8.self).baseAddress else {
                    return .failure(WalletCoreError.defaultStoreKeyNotFound)
                }
                let result = rust_request(bytes, UInt(UInt32(reqData.count)));defer { rust_free(result) }
                let data = Data(bytes: result.bytes, count: Int(result.len))
                let rsp = try Api_MWResponse(serializedData: data)

                if case .error(let errorResp)? = rsp.response {
                    let maskWalletCoreError = MaskWalletCoreError(errorCode: errorResp.errorCode, errorMessage: errorResp.errorMsg)
                    let error = WalletCoreError.walletCoreError(maskWalletCoreError)
                    throw error
                }

                return .success(rsp)
            }
            return res
        } catch {
            os_log(
                "%{public}s[%{public}ld], %{public}s: [MW] mask-wallet-core fail error: %@",
                (file as NSString).lastPathComponent,
                line,
                function,
                error.localizedDescription
            )
            return .failure(WalletCoreError.lowLevelLibError(error))
        }
    }

    func publisherFromRustLib(
        _ req: Api_MWRequest,
        file: String = #file,
        line: Int = #line,
        function: String = #function
    ) -> AnyPublisher<Api_MWResponse, Error> {
        Future { promise in
            do {
                let reqData = try req.serializedData()
                let res = try reqData.withUnsafeBytes { unsafeBytes -> Api_MWResponse in
                    guard let bytes = unsafeBytes.bindMemory(to: UInt8.self).baseAddress else {
                        throw WalletCoreError.defaultStoreKeyNotFound
                    }
                    let result = rust_request(bytes, UInt(UInt32(reqData.count)));defer { rust_free(result) }

                    let data = Data(bytes: result.bytes, count: Int(result.len))
                    let rsp = try Api_MWResponse(serializedData: data)

                    if case .error(let errorResp)? = rsp.response {
                        let maskWalletCoreError = MaskWalletCoreError(errorCode: errorResp.errorCode, errorMessage: errorResp.errorMsg)
                        let error = WalletCoreError.walletCoreError(maskWalletCoreError)
                        throw error
                    }

                    return rsp
                }
                promise(.success(res))
            } catch {
                os_log(
                    "%{public}s[%{public}ld], %{public}s: [MW] mask-wallet-core fail error: %@",
                    (file as NSString).lastPathComponent,
                    line,
                    function,
                    error.localizedDescription
                )
                promise(.failure(WalletCoreError.lowLevelLibError(error)))
            }
        }
        .eraseToAnyPublisher()
    }
}

extension WalletCoreHelper: RequestCaller {}
