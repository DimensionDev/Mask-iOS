//
//  BalanceV2ViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/21.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation

class BalanceV2ViewModel: ObservableObject {
    typealias Section = BalanceTokenService.Section
    
    @Published var isTokenExpanded = false
    @Published var tokenService = BalanceTokenService()
    var tokenSections: [Section] {
        tokenService.tokenSections
    }
    var showExpandHeader: Bool {
        tokenSections.count > 1
    }
    var expandState: BalanceRightArrowButton.State {
        isTokenExpanded ? .expand : .collapse
    }
    var expandAmount: String {
        if case .less(_, let balance) = tokenSections.last {
            return "\(maskUserDefaults.currency.symbol)\(balance.currency)"
        }
        return ""
    }
    var mainTokens: [Token] {
        if case .main(let tokens) = tokenSections.first {
            return tokens
        }
        return []
    }
    var expandTokens: [Token] {
        if case .less(let tokens, _) = tokenSections.last {
            return tokens
        }
        return []
    }
}
