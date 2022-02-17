import Foundation
import SwiftyJSON
import web3swift
import WebKit

struct AnyDappResolver: DecentralisedApplicationResolver {
    typealias Parameters = JSON
    typealias CustomRPCResponse = EmptyWrapper

    var entryPointURL: URL? { URL(string: urlString) }

    let urlString: String

    init(_ urlString: String) {
        self.urlString = urlString
    }
}

extension DecentralisedApplicationResolver where Self == AnyDappResolver {
    static var uniSwap: AnyDappResolver { .init("https://app.uniswap.org") }
    static var pancake: AnyDappResolver { .init("https://pancakeswap.finance/swap") }
}
