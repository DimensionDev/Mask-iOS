//
//  WordsVerifyProtocol.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/9.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

protocol WordsVerifyProtocol {
    var words: [String] { get }
    var selectedWords: CurrentValueSubject<[String], Never> { get }
    var mnemonicError: CurrentValueSubject<Bool, Never> { get }
    var randomOrderWords: [String] { get }
}
