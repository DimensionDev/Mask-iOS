import CryptoKit
import CryptoSwift
import Foundation

protocol FileServiceUploadHandler {
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error>

    func makePayload(data: Data, type: String, delegate: URLSessionTaskDelegate?) async throws -> String
    func buildLink(for payloadTxID: String, option: FileServiceUploadOption) -> String
    func replace(_ html: String, with text: String) throws -> Data
    func landingPage(
        item: FileServiceUploadingItem,
        option: FileServiceUploadOption,
        tx: FileServiceTranscation
    ) async throws -> String
}

extension FileServiceUploadHandler {
    func encodeArrayBuffer(_ data: Data) -> String {
        data.base64EncodedString()
    }

    func makeFileKeySigned(fileKey: String?) throws -> [String] {
        guard let encodedKey = fileKey?.data(using: .utf8) else {
            throw "key not exist"
        }
        let generatedKey: [UInt8] = try Crypto.randomData(length: 64)
        let hmac = HMAC(key: generatedKey, variant: HMAC.Variant.sha2(SHA2.Variant.sha256))
        let signed = try hmac.authenticate(encodedKey.bytes)
        let signedB64 = encodeArrayBuffer(Data(signed))
        let generatedKeyB64 = encodeArrayBuffer(Data(generatedKey))
        return [signedB64, generatedKeyB64]
    }

    func formattedPayload(
        from item: FileServiceUploadingItem,
        option: FileServiceUploadOption,
        tx: FileServiceTranscation
    ) -> String {
        let dic: [String: Any?] = [
            "name": item.fileName,
            "size": "\(item.content.count)",
            "provider": item.provider,
            "link": buildLink(for: tx.payloadTxID, option: option),
            "signed": try? makeFileKeySigned(fileKey: tx.key),
            "createdAt": Date().toISOString()
        ]

        return dic.asString()
    }

    func landingHTML() async throws -> String {
        // use same Arweave.landingURL`s html
        // and replace __METADATA__ parts if needed
        let request = URLRequest(url: Arweave.landingURL)
        let (data, response) = try await URLSession.shared.data(for: request)
        let httpResponse = response as? HTTPURLResponse
        let statusCode = httpResponse?.statusCode ?? 0
        if statusCode != 200 {
            throw "Bad response code \(statusCode)"
        }
        guard let htmlText = String(data: data, encoding: .utf8) else {
            throw "wrong html content"
        }

        return htmlText
    }
}

extension FileServiceUploadHandler {
    func makePayload(
        data: Data,
        type: String = "",
        delegate: URLSessionTaskDelegate? = nil
    ) async throws -> String { "" }

    func buildLink(for payloadTxID: String, option: FileServiceUploadOption) -> String { "" }

    func replace(_ html: String, with text: String) throws -> Data {
        guard let replacedData = html
            .replacingOccurrences(of: "__METADATA__", with: text)
            .data(using: .utf8)
        else {
            throw "encode html error"
        }

        return replacedData
    }

    func landingPage(
        item: FileServiceUploadingItem,
        option: FileServiceUploadOption,
        tx: FileServiceTranscation
    ) async throws -> String {
        let jsonString = formattedPayload(
            from: item,
            option: option,
            tx: tx
        )
        let htmlText = try await landingHTML()
        let replacedData = try replace(htmlText, with: jsonString)
        return try await makePayload(data: replacedData)
    }
}

struct MockUploadingHandler: FileServiceUploadHandler {
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error> {
        .init { continuation in
            Task.detached {
                try await Task.sleep(nanoseconds: 200_000_000)
                continuation.yield(FileServiceTranscation.progress(0.2))
                try await Task.sleep(nanoseconds: 100_000_000)
                continuation.yield(FileServiceTranscation.progress(0.4))
                try await Task.sleep(nanoseconds: 100_000_000)
                continuation.yield(FileServiceTranscation.progress(0.6))
                try await Task.sleep(nanoseconds: 100_000_000)
                continuation.yield(FileServiceTranscation.progress(0.8))
                try await Task.sleep(nanoseconds: 100_000_000)
                continuation.yield(FileServiceTranscation.progress(1))
                continuation.finish()
            }
        }
    }
}
