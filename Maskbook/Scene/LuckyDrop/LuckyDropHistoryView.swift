//
//  LuckyDropHistoryView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct LuckyDropHistoryView: View {
    @State var segmentSize: CGSize = .zero
    
    var body: some View {
        VStack(spacing: 0) {
            LuckyDropSegmentView()
                .padding(.horizontal, LayoutConstraints.horizontal)
            Spacer().frame(height: 20)
            ScrollView {
                LazyVStack(spacing: 16) {
                    ForEach(0...10, id:\.self) { _ in
                        LuckyDropHistoryRow()
                    }
                    .padding(.horizontal, LayoutConstraints.horizontal)
                }
            }
        }
        
        .padding(.top, LayoutConstraints.top)
    }
}

struct LuckyDropHistoryRow: View {
    var body: some View {
        HStack(spacing: 0) {
            VStack(alignment: .leading, spacing: 0) {
                Text("New Year Special Events")
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                Spacer().frame(height: 2)
                HStack(spacing: 4) {
                    Text("End Time")
                        .font(FontStyles.rh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                    Text("2020/12/30 12:30 UTC+8")
                        .font(FontStyles.rh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                }
                Spacer().frame(height: 12)
                HStack(spacing: 0) {
                    Text("Claimed")
                        .font(FontStyles.rh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                    Spacer().frame(width: 4)
                    Text("1/3")
                        .font(FontStyles.mh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                    Spacer().frame(width: 10)
                    Text("0.3/2.00")
                        .font(FontStyles.mh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                    Spacer().frame(width: 4)
                    Text("DAI")
                        .font(FontStyles.mh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                    Spacer().frame(width: 4)
                    Asset.Images.Scene.WalletList.Coins.ethSelected.asImage().resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 20)
                }
            }
            
            Spacer()
            
            Button {
                
            } label: {
                Text("Refund").font(FontStyles.bh6.font)
                    .foregroundColor(Color.white)
            }
            .padding(.horizontal, 21.5)
            .frame(height: 32)
            .background(Asset.Colors.Background.blue.asColor().cornerRadius(8))
        }
    }
}

struct LuckyDropHistoryView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropHistoryView()
    }
}
