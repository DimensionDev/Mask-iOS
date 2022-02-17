//
//  WalletConnectServerError.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

enum WalletConnectServerError: Error {
    case invalidWalletConnectURL
    case couldNotStartWallectConnectSession
}
