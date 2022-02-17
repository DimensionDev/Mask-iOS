import Foundation
import web3swift

extension Web3Signer {
    static func signTX(
        transaction: inout EthereumTransaction,
        privateKey: Data,
        account: EthereumAddress,
        password: String,
        useExtraEntropy: Bool = false
    ) throws {
        if transaction.intrinsicChainID != nil {
            try EIP155Signer.sign(transaction: &transaction, privateKey: privateKey, useExtraEntropy: useExtraEntropy)
        } else {
            try FallbackSigner.sign(transaction: &transaction, privateKey: privateKey, useExtraEntropy: useExtraEntropy)
        }
    }
}
