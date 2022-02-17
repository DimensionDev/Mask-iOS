import Foundation

struct RedPacketAvailability: Codable {
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
