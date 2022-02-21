//
//  ContentView.swift
//  Test
//
//  Created by Hugo L on 2022/2/8.
//

import CoreData
import CoreDataStack
import SwiftUI

struct BalanceV2View: View {
    @ObservedObject var viewModel = BalanceV2ViewModel()
    
    var body: some View {
        ScrollView {
            LazyVStack(pinnedViews: [.sectionHeaders]) {
                Section(header: BalanceSwichHeaderView()) {
                    BalanceTokenListView(tokens: viewModel.mainTokens)
                    if viewModel.showExpandHeader {
                        BalanceExpandableHeaderView(state: viewModel.expandState, balance: viewModel.expandAmount) {
                            withAnimation {
                                viewModel.isTokenExpanded.toggle()
                            }
                        }
                    }
                    if viewModel.isTokenExpanded {
                        BalanceTokenListView(tokens: viewModel.expandTokens)
                    }
                }
            }
        }
        .background(Asset.Colors.Background.normal.asColor())
    }
}

struct BalanceV2View_Previews: PreviewProvider {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    
    static var previews: some View {
        @InjectedProvider(\.userDefaultSettings)
        var userSetting
        
        return BalanceV2View()
            .environment(\.managedObjectContext, viewContext)
            .environment(\.userSetting, userSetting)
    }
}
