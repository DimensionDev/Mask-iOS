//
//  LuckyDropViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/29.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class LuckyDropViewModel: ObservableObject {
    @Published var quantityStr = ""
    // to be used in avaerage mode
    @Published var amountPerShareStr = ""
    // to be used in random mode
    @Published var amountTotalShareStr = ""
    @Published var message = ""
    @Published var transactionInfoStr = "$18.8 (~32s)"
    @Published var totalAmountStr = ""
    @Published var mode = RedPacket.RedPacketType.average
}
