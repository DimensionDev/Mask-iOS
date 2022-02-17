//
//  Numeric+currency.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

extension Formatter {
    static func format(object: Any?,
                       style: NumberFormatter.Style,
                       locale: Locale = Locale(identifier: "en_US"),
                       with groupingSeparator: String? = nil) -> String {
        let number = NumberFormatter()
        number.locale = locale
        number.numberStyle = style
        if let groupingSeparator = groupingSeparator {
            number.groupingSeparator = groupingSeparator
        } else {
            /*
             a space with the same width of a period
             https://stackoverflow.com/questions/29999024/adding-thousand-separator-to-int-in-swift
             */
            number.groupingSeparator = "\u{2008}"
        }
        var currencyString = number.string(for: object) ?? ""
        if !currencyString.isEmpty {
            // Remove the generated symbol string
            currencyString = currencyString.filter { !$0.isCurrencySymbol && !$0.isWhitespace }
            return currencyString
        } else {
            return "0"
        }
    }
}

extension Numeric {
    var currency: String { Formatter.format(object: self, style: .currency) }
}

extension String {
    var currency: String {
        // Since we need to keep more than 2 decimal places to display the amount of token, we separator the string by the decimal point,
        // then only format the integer part
        let components = self.components(separatedBy: ".")
        
        var stringAfterDot: String?
        if components.count > 1 {
            stringAfterDot = components[1]
        }
        guard let stringBeforeDot = components.first,
              let intValue = Int(stringBeforeDot) else {
                  return "0"
              }
        
        let formattedStringBeforeDot = Formatter.format(object: intValue, style: .currency)
        // Not a valid integer value
        guard !formattedStringBeforeDot.isEmpty else {
            return "0"
        }
        
        // Formatted string has a default ".00" at the end, we strip it
        guard let formattedStringBeforeDot = formattedStringBeforeDot.components(separatedBy: ".").first else {
            return "0"
        }
        
        // Then append the retained string
        if let stringAfterDot = stringAfterDot {
            return formattedStringBeforeDot.appending(".").appending(stringAfterDot)
        }
        return formattedStringBeforeDot
    }
}
