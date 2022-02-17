import BigInt
import Combine
import Foundation

final class RedPacketShareViewModel: ObservableObject {
    enum Action {
        case share(RedPacketInteractivePayload)
        case close
    }

    enum RedPacketStatus {
        case sharable
        case maybeNextTime

        var imageName: String {
            switch self {
            case .sharable: return Asset.Images.Scene.RedPackage.redPacketShare.name
            case .maybeNextTime: return Asset.Images.Scene.RedPackage.unavailableRedPacket.name
            }
        }
    }

    let claimAmount: String
    let symbol: String
    let actionSignal = PassthroughSubject<Action, Never>()

    @Published
    private(set) var redPacketStatus: RedPacketStatus = .sharable

    private let payload: RedPacketInteractivePayload?

    init(claimAmount: BigUInt?, payload: RedPacketInteractivePayload?) {
        let canShare = !(payload?.availability.expired ?? true)
        self.redPacketStatus = canShare ? .sharable : .maybeNextTime
        self.payload = payload

        let amount = claimAmount?.description ?? ""
        let amountDecimal = NSDecimalNumber(string: amount).decimalValue
        let displayAmount = EthUtil.calcAmount(amount: amountDecimal, decimals: payload?.decimals ?? 18)
        self.claimAmount = displayAmount.stringValue
        self.symbol = payload?.redpacketPayload.symbol ?? ""
    }

    func share() {
        guard let payload = self.payload else {
            return
        }
        self.actionSignal.send(.share(payload))
    }
}

extension EitherOr where T == RedPacketPayload, V == NftRedPacketPayload {
    var symbol: String? {
        switch self {
        case let .either(t): return t.payload?.token?.symbol
        case .or: return nil
        }
    }
}

extension RedPacket.FungibleToken {
    var symbol: String? {
        switch self {
        case let .erc20Token(token): return token.symbol
        case let .nativeToken(token): return token.symbol
        case let .unsupportType(token): return token.symbol
        }
    }
}

private extension String {
    func decimalFormat() -> String {
        let numberFormatter = NumberFormatter()
        numberFormatter.positiveFormat = "###,##0"
        numberFormatter.maximumFractionDigits = self.fractionDigits

        let value = Double(self) ?? 0

        return numberFormatter.string(from: NSNumber(value: value)) ?? ""
    }

    var fractionDigits: Int {
        let components = self.components(separatedBy: ".")
        guard let lastPart = components.last else {
            return 0
        }

        return lastPart == self ? 0 : lastPart.count
    }
}
