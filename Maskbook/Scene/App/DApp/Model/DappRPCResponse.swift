import Foundation

struct DappRPCResponse<T: Codable>: Codable {
    init(
        id: Int,
        result: T?,
        error: DappRPCResponse<T>.ErrorMessage? = nil,
        message: String? = nil,
        jsonrpc: String = "2.0"
    ) {
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error
        self.message = message
    }

    init(error: Error) {
        self.init(id: -1, result: nil, error: .init(code: -1, message: error.localizedDescription), message: nil)
    }

    struct ErrorMessage: Codable {
        let code: Int
        let message: String
    }

    let id: Int
    let jsonrpc: String
    let result: T?
    let error: ErrorMessage?
    let message: String?
}

extension DappRPCResponse {
    func asReponseString() -> String? {
        guard let data = try? JSONEncoder().encode(self) else {
            return nil
        }

        return String(data: data, encoding: .utf8)
    }
}
