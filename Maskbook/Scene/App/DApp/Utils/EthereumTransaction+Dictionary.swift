import BigInt
import web3swift

extension Dictionary where Key == String, Value == Any {
    func asTransactionAndOptions() -> (transaction: EthereumTransaction, options: TransactionOptions)? {
        guard let transaction = EthereumTransaction.fromJSON(self),
              let options = TransactionOptions.fromJSON(self) else { return nil }
        var transactionOptions = TransactionOptions.defaultOptions
        transactionOptions.from = options.from
        transactionOptions.to = options.to
        transactionOptions.value = options.value ?? BigUInt(0)
        transactionOptions.gasLimit = options.gasLimit ?? .automatic
        transactionOptions.gasPrice = options.gasPrice ?? .automatic
        if let nonceString = self["nonce"] as? String,
           let nonce = BigUInt(nonceString.stripHexPrefix(), radix: 16) {
            transactionOptions.nonce = .manual(nonce)
        } else {
            transactionOptions.nonce = .pending
        }

        return (transaction, transactionOptions)
    }
}

extension BigInt {
    func hexStringWithPrefix() -> String {
        serialize().toHexString().addHexPrefix()
    }
}

extension Data {
    func hexStringWithPrefix() -> String {
        toHexString().addHexPrefix()
    }
}
