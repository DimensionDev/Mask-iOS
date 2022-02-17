//
//  OpenRedPackageViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/1/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation

final class OpenRedPackageViewModel {
    let payloadSubject: CurrentValueSubject<RedPacketInteractivePayload, Never>
    let confirmState = CurrentValueSubject<ConfirmState, Never>(.onGoing)
    var timer: Timer?
    
    init(payload: RedPacketInteractivePayload) {
        payloadSubject = CurrentValueSubject<RedPacketInteractivePayload, Never>(payload)
        
        timer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { [weak self] _ in
            self?.checkAvailability()
        }
    }
    
    func checkAvailability() {
        guard let rpId = payloadSubject.value.rpId else {
            return
        }
        
        Task { [weak self] in
            guard let availability = await ABI.happyRedPacketV4.checkAvailability(redPackageId: rpId) else {
                return
            }
            
            guard let tokenAddress = availability.address?.address,
                  let balance = availability.balance,
                  let total = availability.total,
                  let claimed = availability.claimed,
                  let expired = availability.expired,
                  let claimedAmount = availability.claimedAmount else {
                      return
                  }
            
            let balanceStr = String(balance)
            let totalStr = String(total)
            let claimedStr = String(claimed)
            let claimedAmountStr = String(claimedAmount)
            let redPacketAvailability = RedPacketAvailability(
                tokenAddress: tokenAddress,
                balance: balanceStr,
                total: totalStr,
                claimed: claimedStr,
                expired: expired,
                claimedAmount: claimedAmountStr
            )
            await MainActor.run { [weak self] in
                self?.update(availability: redPacketAvailability)
            }
        }
    }
    
    private func update(availability: RedPacketAvailability) {
        guard confirmState.value != .claiming else {
            return
        }
        var payload = payloadSubject.value
        payload.availability = availability
        payloadSubject.accept(payload)
        
        guard let address = WalletCoreService.shared.getCurrentAccount()?.address else {
            return
        }
        let network = WalletCoreStorage.getCurrentNetwork()
        let status = payload.parseStatus(accountAddress: address, network: network)
        if status.isClaimed {
            confirmState.accept(.claimed)
        } else if status.isRefunded {
            confirmState.accept(.refunded)
        } else if status.isExpired {
            confirmState.accept(.expired)
        } else if status.isEmpty {
            confirmState.accept(.empty)
        } else {
            confirmState.accept(.onGoing)
        }
    }
}

extension OpenRedPackageViewModel {
    enum ConfirmState {
        case claiming
        case claimed
        case refunded
        case expired
        case empty
        case onGoing
        
        var title: String {
            switch self {
            case .claiming:
                return L10n.Scene.OpenRedPackage.claiming
                
            case .claimed:
                return L10n.Scene.OpenRedPackage.claimed
                
            case .refunded:
                return L10n.Scene.OpenRedPackage.refunded
                
            case .expired:
                return L10n.Scene.OpenRedPackage.expired
                
            case .empty:
                return L10n.Scene.OpenRedPackage.empty
                
            case .onGoing:
                return L10n.Scene.OpenRedPackage.claim
            }
        }
    }
}
