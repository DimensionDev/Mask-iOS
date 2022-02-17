import BigInt
import Foundation
import web3swift

extension TransactionOptions {
    typealias AddressTuple = (
        privateKey: Data,
        derivationPath: String,
        fromAddress: String,
        addressEthFormat: EthereumAddress
    )

    func addressInfo() async throws -> AddressTuple {
        let task = Task.detached(priority: .userInitiated) { @MainActor () -> AddressTuple in
            guard let fromAddress = from?.address,
                  let fromAddressEthFormat = from else {
                throw WalletSendError.addressError
            }

            guard let account = WalletCoreStorage.getAccount(address: fromAddress),
                  let storedKeyData = account.ownedByStoredKey?.data,
                  let derivationPath = account.derivationPath else {
                throw WalletSendError.addressError
            }

            return (storedKeyData, derivationPath, fromAddress, fromAddressEthFormat)
        }

        return try await task.value
    }
}
