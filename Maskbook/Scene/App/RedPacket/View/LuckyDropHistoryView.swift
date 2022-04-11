//
//  LuckyDropHistoryView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct LuckyDropHistoryView: View {
    @State var listKind: LuckDropKind = .token
    
    var body: some View {
        VStack(spacing: 20) {
            ScrollView {
                LazyVStack(spacing: 16, pinnedViews: [.sectionHeaders]) {
                    Section {
                        ForEach(0...10, id:\.self) { id in
                            LuckyDropHistoryRow()
                                .id(id)
                        }
                    } header: {
                        SegmentControl(selection: $listKind)
                            .frame(height: 48)
                    }
                }
                .padding(.horizontal, LayoutConstraints.horizontal)
            }
        }
        .padding(.top, LayoutConstraints.top)
        .background(Asset.Colors.Background.normal.asColor().ignoresSafeArea())
    }
}

struct LuckyDropHistoryRow: View {
    @State var loading = false

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(alignment: .top, spacing: 10) {
                VStack(alignment: .leading, spacing: 2) {
                    Text("New Year Special Events")
                        .font(FontStyles.bh5.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                        .horizontallyFilled()

                    Text("2020/12/30 12:30 UTC+8")
                        .font(FontStyles.rh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                }

                Button {
                    loading.toggle()
                } label: {
                    LoadingText(
                        loading: $loading,
                        text: L10n.Plugins.Luckydrop.refund
                    )
                    .frame(width: 84, height: 32)
                }
                .background(Asset.Colors.Background.blue.asColor().cornerRadius(8))
            }

            VStack(spacing: 3) {
                HStack(spacing: 4) {
                    Text(L10n.Plugins.Luckydrop.claimed)
                        .font(FontStyles.rh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                        .layoutPriority(1)

                    Text("1/3")
                        .font(FontStyles.mh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                }
                .horizontallyFilled()

                HStack(spacing: 4) {
                    Text("48333333333222233333.33/42221122218333333333331333.33")
                        .lineLimit(1)
                        .font(FontStyles.mh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                        .layoutPriority(1)

                    Text("DAI")
                        .font(FontStyles.mh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                        .layoutPriority(1)

                    Asset.Images.Scene.WalletList.Coins.ethSelected.asImage().resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 20)
                        .layoutPriority(1)
                }
                .frame(maxWidth: .infinity)
            }
        }
        .padding(.all, 12)
        .background(Asset.Colors.Background.dark.asColor())
        .cornerRadius(8)
    }
}

struct LoadingText: View {
    @Binding var loading: Bool

    private let indicatorSize: CGSize
    private let text: String

    init(
        loading: Binding<Bool>,
        indicatorSize: CGSize = .init(width: 16, height: 16),
        text: String
    ) {
        _loading = loading
        self.indicatorSize = indicatorSize
        self.text = text
    }

    var body: some View {
        ZStack {
            Text(loading ? "" : text)
                .font(FontStyles.bh6.font)
                .foregroundColor(Color.white)
                .zIndex(1)

            if loading {
                LoadingIndicator(loading: loading, preferredSize: indicatorSize)
                    .frame(width: indicatorSize.width, height: indicatorSize.height)
                    .colorScheme(.dark)
                    .zIndex(2)
            }
        }
    }
}

struct LuckyDropHistoryView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropHistoryView()
    }
}
