import Foundation

import web3swift
import BigInt

extension web3swift.web3 {
    func blockNumber() async throws -> BigUInt? {
        // get endBlock
        let blockNumber = Task.detached { () -> Result<BigUInt?, Error> in
            try Task.checkCancellation()
            let number = try self.eth.getBlockNumber()
            guard !Task.isCancelled else {
                return .success(nil)
            }
            return .success(number)
        }

        do {
            return try await blockNumber.value.get()
        } catch is CancellationError {
            return nil
        } catch {
            throw error
        }
    }
}
