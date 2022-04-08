import Foundation

import BigInt
import web3swift

final class LuckyDropHistoryViewModel {

    func fetch() {

        Task.detached {
            try Task.checkCancellation()
            let blockNumber = try Web3ProviderFactory.provider?.eth.getBlockNumber()

        }

    }
}
