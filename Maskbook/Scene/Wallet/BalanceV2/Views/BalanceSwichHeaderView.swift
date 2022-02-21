//
//  BalanceSwichHeaderView.swift
//  Test
//
//  Created by Hugo L on 2022/2/18.
//

import SwiftUI

struct BalanceSwichHeaderView: View {
    var body: some View {
        HStack {
            BalanceSwichButton(title: "Tokens", selection: .selected)
            Spacer().frame(width: 16)
            BalanceSwichButton(title: "Collectibles", selection: .normal)
            Spacer()
        }
        .background(Asset.Colors.Background.normal.asColor())
        .padding(.horizontal, 22.5)
    }
}

struct BalanceSwichButton: View {
    let title: String
    let selection: SelectionState
    
    var body: some View {
        VStack {
            Text(title)
                .font(FontStyles.bh4.font)
                .foregroundColor(selection.color)
            Asset.Colors.Background.blue.asColor()
                .frame(width: 18, height: 3)
                .cornerRadius(4)
                .opacity(selection.opacity)
        }
    }
}

extension BalanceSwichButton {
    enum SelectionState {
        case selected
        case normal
        
        var color: Color {
            switch self {
            case .normal: return Asset.Colors.Text.normal.asColor()
            case .selected: return Asset.Colors.Text.dark.asColor()
            }
        }
        
        var opacity: CGFloat {
            if case .normal = self {
                return 0
            }
            return 1
        }
    }
}

struct BalanceSwichHeaderView_Previews: PreviewProvider {
    static var previews: some View {
        BalanceSwichHeaderView()
    }
}
