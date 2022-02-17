//
//  File.swift
//  Maskbook
//
//  Created by yzj on 2021/8/30.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

enum RestoreCompletionStrategy: Equatable {
    case suggestSyncing(remotePassword: String)
    case ignoreAndLogin
}
