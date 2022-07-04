import BigInt
import Foundation
import web3swift

extension EthereumTransaction {
    enum OptionValue {
        case gasPrice(BigUInt)
        case gasLimit(BigUInt)
        case nonce(BigUInt)
    }

    func prepareSigning(with options: TransactionOptions, web3: web3) async -> EthereumTransaction? {
        var transaction = self
        let chainID = web3.provider.network?.chainID

        guard let from = options.from,
              let gasPricePolicy = options.gasPrice,
              let gasLimitPolicy = options.gasLimit,
              let noncePolicy = options.nonce else {
            return nil
        }

        let queryTransaction = transaction
        async let gasPriceValue = web3.getGasPriceOptionValue(for: gasPricePolicy)
        async let gasLimitValue = web3.getGasLimitOptionValue(for: gasLimitPolicy, and: queryTransaction, options: options)
        async let nonceValue = web3.getNonceOptionValue(for: noncePolicy, address: from)

        let optionValues = await [gasPriceValue, gasLimitValue, nonceValue].compactMap { $0 }
        guard optionValues.count == 3 else {
            return nil
        }

        for value in optionValues {
            switch value {
            case let .nonce(value): transaction.nonce = value
            case let .gasLimit(value): transaction.gasLimit = value
            case let .gasPrice(value): transaction.gasPrice = value
            }
        }

        if chainID != nil {
            transaction.chainID = chainID
        }

        return transaction
    }
}

extension web3 {
    func getGasPrice(for policy: TransactionOptions.GasPricePolicy) async -> BigUInt? {
        await Task {
            switch policy {
            case .manual(let gasPrice): return gasPrice
            default: return try? self.eth.getGasPrice()
            }
        }
        .value
    }

    func getGasPriceOptionValue(for policy: TransactionOptions.GasPricePolicy) async -> EthereumTransaction.OptionValue? {
        guard let value = await getGasPrice(for: policy) else {
            return nil
        }

        return .gasPrice(value)
    }

    func getGasLimit(
        for policy: TransactionOptions.GasLimitPolicy,
        and transaction: EthereumTransaction,
        options: TransactionOptions
    ) async -> BigUInt? {
        await Task {
            switch policy {
            case .manual(let gasLimit): return gasLimit
            default: return try? self.eth.estimateGas(transaction, transactionOptions: options)
            }
        }
        .value
    }

    func getGasLimitOptionValue(
        for policy: TransactionOptions.GasLimitPolicy,
        and transaction: EthereumTransaction,
        options: TransactionOptions
    ) async -> EthereumTransaction.OptionValue? {
        guard let value = await getGasLimit(for: policy, and: transaction, options: options) else {
            return nil
        }

        return .gasLimit(value)
    }

    func getNonce(
        for policy: TransactionOptions.NoncePolicy,
        address: EthereumAddress
    ) async -> BigUInt? {
        await Task {
            switch policy {
            case .manual(let nonce): return nonce
            default: return try? eth.getTransactionCount(address: address, onBlock: "pending")
            }
        }
        .value
    }

    func getNonceOptionValue(
        for policy: TransactionOptions.NoncePolicy,
        address: EthereumAddress
    ) async -> EthereumTransaction.OptionValue? {
        guard let value = await getNonce(for: policy, address: address) else {
            return nil
        }
        return .nonce(value)
    }
}
