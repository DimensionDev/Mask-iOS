//
//  WalletStartType.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/8.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
enum WalletStartType {
    case byImport(name: String?, password: String?)
    case byCreate(name: String?)
    case byWalletConnect
}
