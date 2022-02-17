//
//  String+Regex.swift
//  Maskbook
//
//  Created by BradGao on 2021/9/29.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

extension String {
    var isValidPhoneNumber: Bool {
        let regEx = #"^(\+?([ .-])?\d{1,2}([ .-])?)?(\(?\d{3}\)?|\d{3})([ .-])?(\d{3}([ .-])?\d{4})"#
        return evaluteRegEx(regEx)
    }

    var isValidEmailAddress: Bool {
        let regEx = #"^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$"#
        return evaluteRegEx(regEx)
    }
    
    var isValidPasswordFormat: Bool {
        let regEx = "^((?=.*[^\\dA-Za-z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[^\\dA-Za-z])).{8,20}$"
        return evaluteRegEx(regEx)
    }
    
    var isValidBackupPasswordFormat: Bool {
        let regEx = "^(?=.{8,20}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[^\\dA-Za-z])"
        return evaluteRegEx(regEx)
    }
    
    var isMnemonicFormat: Bool {
        let validWordsNumber: [Int] = [12, 18, 24]
        let words = components(separatedBy: " ")
        return validWordsNumber.contains(words.count)
    }
    
    func evaluteRegEx(_ regularExpression: String) -> Bool {
        let result = self.range(
            of: regularExpression,
            options: .regularExpression
        )

        return (result != nil)
    }
}
