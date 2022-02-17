import Foundation

struct DappError: Error {
    var code: Int
    var description: String

    var localizedDescription: String { description }
}

extension Error where Self == DappError {
    static var invalidWeb3: DappError {
        DappError(code: -1, description: "invalid web3 provider without url or url session")
    }
}
