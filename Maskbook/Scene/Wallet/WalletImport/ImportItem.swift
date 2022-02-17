//
//  ImportItem.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

// swiftlint:disable identifier_name
enum ImportItem: Hashable {
    case mnemonicWords(title: String, `description`: String)
    case privateKey(title: String, `description`: String)
    case keystore(title: String, `description`: String)
}
// swiftlint:enable identifier_name
