import Foundation

struct DappRPCResponse<T: Codable>: Codable {
    init(id: Int, result: T?, error: DappRPCResponse<T>.ErrorMessage?, message: String?, jsonrpc: String = "2.0") {
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
