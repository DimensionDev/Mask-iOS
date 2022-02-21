//
//  BalanceExpandableHeaderView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/21.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct BalanceExpandableHeaderView: View {
    let state: BalanceRightArrowButton.State
    let balance: String
    let onTap: (() -> Void)?
    
    var body: some View {
        HStack {
            BalanceRightArrowButton(state: state)
                .onTapGesture {
                    onTap?()
                }
            Spacer()
            Text(balance)
                .font(FontStyles.bh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
            Spacer().frame(width: 12)
        }
        .padding(.horizontal, 22.5)
    }
}

struct BalanceRightArrowButton: View {
    enum State {
        case collapse
        case expand
        
        var title: String {
            switch self {
            case .collapse:
                return L10n.Scene.WalletBalance.balanceExpandAll
                
            case .expand:
                return L10n.Scene.WalletBalance.balanceExpandLess
            }
        }
        
        var arrowDegree: Angle {
            switch self {
            case .collapse:
                return Angle.degrees(0)
                
            case .expand:
                return Angle.degrees(90)
            }
        }
    }
    
    let state: State
    
    var arrow: Image {
        Asset.Images.Scene.Balance.expandArrowRight.asImage()
    }
    
    var body: some View {
        HStack {
            Text(state.title)
                .font(FontStyles.rh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
            arrow.rotationEffect(state.arrowDegree)
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 4)
        .background(Asset.Colors.Background.selected.asColor())
        .cornerRadius(16)
    }
}
