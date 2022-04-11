import Foundation

import BigInt
import web3swift

@MainActor
final class LuckyDropHistoryViewModel {

    var exploreAddress: String? {
         [
            .eth: "https://api.etherscan.io/api",
            .bsc: "https://api.bscscan.com/api",
            .polygon: "https://api.polygonscan.com/api",
            .arbitrum: "https://api.arbiscan.io/api",
            .xdai: "https://blockscout.com/xdai/mainnet/api"
         ][usersettings.network]
    }

    @InjectedProvider(\.userDefaultSettings)
    private var usersettings

    func fetch() {

        // first get explore url, if return nil
        // display empty state

        Task.detached {
            try Task.checkCancellation()
            let blockNumber = try Web3ProviderFactory.provider?.eth.getBlockNumber()

        }

    }
}

struct HistoryPack: Codable {
    
}
