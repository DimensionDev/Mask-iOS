//
//  BalanceTokenListView.swift
//  Test
//
//  Created by Hugo L on 2022/2/18.
//

import CoreDataStack
import SwiftUI

struct BalanceTokenListView: View {
    var tokens: [Token]
    
    var body: some View {
        ForEach(tokens, id: \.identifier) { item in
            BalanceTokenRowView(token: item)
                .padding(.horizontal, 22.5)
        }
    }
}

struct BalanceTokenListView_Previews: PreviewProvider {
    static var previews: some View {
        BalanceTokenListView(tokens: [])
    }
}
