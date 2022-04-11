import Foundation
import BigInt

/// Restful response for etherscan.io/bscscan.com/...
struct AnyscanResponse<T: Codable>: Codable {
    let status: String
    let message: String
    let result: T
}

struct RedPacketHistoryInfo: Codable {
    let blockNumber: String
    let timeStamp: String
    let hash: String
    let nonce: String
    let blockHash: String
    let transactionIndex: String
    let from: String
    let to: String
    let value: String
    let gas: String
    let gasPrice: String
    let isError: String
    let txreceiptStatus: String
    let input: String
    let contractAddress: String
    let cumulativeGasUsed: String
    let gasUsed: String
    let confirmations: String
}

typealias AnyscanListOf<T: Codable> = AnyscanResponse<[T]>
