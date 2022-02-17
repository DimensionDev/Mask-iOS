//
//  Web3TransactionReceipt.swift
//  Maskbook
//
//  Created by caiyu on 2022/1/27.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import web3swift

struct RedPacketHashModel: Codable {
    var txhash: String
    var payload: RedPacketInteractivePayload
    var isSuccessful = false
}

class Web3TransactionReceiptManger {
    @InjectedProvider(\.tabService)
    private var tabService: MaskbookTabService
    
    static let shared = Web3TransactionReceiptManger()
    var timer: Timer?
    var currentRedPack: RedPacketHashModel?

    public func getTransactionReceipt(txHash: String, payload: RedPacketInteractivePayload) {
        let redpacketHashModel = RedPacketHashModel(txhash: txHash, payload: payload, isSuccessful: false)
        currentRedPack = redpacketHashModel
        timer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { _ in
            DispatchQueue.global().async {
                guard let web3Provier = Web3ProviderFactory.provider?.eth else {
                    self.timer?.invalidate()
                    self.currentRedPack = nil
                    return
                }
                _ = web3Provier.getTransactionReceiptPromise(txHash).done {[weak self] transactionReceipt in
                    switch transactionReceipt.status {
                    case .ok:
                        let redpacketHashModel = RedPacketHashModel(txhash: txHash, payload: payload, isSuccessful: true)
                        self?.timer?.invalidate()
                        Task.detached(priority: .background) { [weak self] in
                            let availability = await self?.getRedPacketResult()
                            await MainActor.run(body: { [weak self] in
                                self?.currentRedPack = nil
                                self?.presentRedpacketClaimResult(redpacketModel: redpacketHashModel,
                                                                  availability: availability)
                            })
                        }
                        
                    case .failed:
                        self?.currentRedPack = nil
                        self?.timer?.invalidate()
                        
                        Task.detached {
                            await MainActor.run(body: {
                                let alertController = AlertController(title: "Fail to execute the contact",
                                                                      message: "",
                                                                      confirmButtonText: L10n.Common.Controls.done,
                                                                      imageType: .error)
                                Coordinator.main.present(scene: .alertController(alertController: alertController),
                                                         transition: .alertController(completion: nil))
                            })
                        }
                        
                    case .notYetProcessed: break
                    }
                }
            }
        }
    }
    
    func getRedPacketResult() async -> HappyRedPacketV4.CheckAvailabilityResult? {
        guard let redpackId = self.currentRedPack?.payload.redpacketId else {
            return nil
        }
        return await ABI.happyRedPacketV4.checkAvailability(redPackageId: redpackId)
    }
    
    func presentRedpacketClaimResult(redpacketModel: RedPacketHashModel,
                                     availability: HappyRedPacketV4.CheckAvailabilityResult?) {
        Coordinator.main.present(scene: .shareRedPackage(redpacketModel.payload,
                                                         claimedAmount: availability?.claimedAmount,
                                                         shareActionDelegate: tabService),
                                 transition: .popup)
    }
}
