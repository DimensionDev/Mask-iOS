//
//  MaskClientMeta.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/9.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WalletConnectSwift

struct WalletConnectMaskInfo {
    static let name = "Mask Network"
    static let description = "The portal to the new, open internet."
    static let iconUrl = "https://user-images.githubusercontent.com/6863518/147734284-f34f2023-9259-4fd7-8444-a4e9a29c05f3.png"
    static let url = "https://mask.io"
    static let scheme = "mask:"
}

extension Session.ClientMeta {
    static var maskWalletMeta: Self {
        .init(
            name: WalletConnectMaskInfo.name,
            description: WalletConnectMaskInfo.description,
            icons: [
                URL(string: WalletConnectMaskInfo.iconUrl)!
            ],
            url: URL(string: WalletConnectMaskInfo.url)!,
            scheme: WalletConnectMaskInfo.scheme
        )
    }
}
