import Foundation

struct DappRPCRequest<T: Codable>: Codable {
    init(method: String, id: Int, params: T, jsonrpc: String = "2.0") {
        self.method = method
        self.id = id
        self.jsonrpc = jsonrpc
        self.params = params
    }

    let method: String
    let id: Int
    let jsonrpc: String
    let params: T
}
