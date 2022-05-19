import Foundation

struct RedPacketAvailability: Codable {
    init(tokenAddress: String, balance: String, total: String, claimed: String, expired: Bool, claimedAmount: String?) {
        self.tokenAddress = tokenAddress
        self.balance = balance
        self.total = total
        self.claimed = claimed
        self.expired = expired
        self.claimedAmount = claimedAmount
    }

    let tokenAddress: String
    let balance: String
    let total: String
    let claimed: String
    let expired: Bool
    let claimedAmount: String?

    enum CodingKeys: String, CodingKey {
        case tokenAddress = "token_address"
        case balance
        case total
        case claimed
        case expired
        case claimedAmount = "claimed_amount"
    }
}
