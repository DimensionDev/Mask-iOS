//
//  NFTLuckyDropClaimDetailView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/8/5.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import Kingfisher
import SwiftUI

struct NFTLuckyDropClaimDetailView: View {
    @StateObject
    var viewModel: NFTLuckyDropClaimDetailViewModel

    init(viewModel: NFTLuckyDropClaimDetailViewModel) {
        _viewModel = .init(wrappedValue: viewModel)
    }

    var columns: [GridItem] = [
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible()),
    ]

    var body: some View {
        ScrollView {
            Spacer()
                .frame(width: nil, height: 24, alignment: .center)
            Text(L10n.Plugins.Luckydrop.nftClaimed("\(viewModel.remainResult?.claimedErc721TokenIDs?.count ?? 0)"))
                .horizontallyFilled(alignment: .center)
                .font(FontStyles.bh6.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
            LazyVGrid(columns: columns,
                      spacing: 12) {
                ForEach(viewModel.claimStates,
                        id: \.id) { state in
                    nftView(state: state)
                        .frame(height: 137)
                }
            }
            .padding()
        }
    }

    @ViewBuilder
    func nftView(state: CollectibleClaimState) -> some View
    {
        // TODO: replace nft collection url
        VStack {
            KFImage.url(
                state.collectible?.previewLink,
                cacheKey: state.collectible?.previewLink?.absoluteString
            )
            .placeholder {
                Asset.Colors.Background.normal.asColor()
                    .overlay(
                        placeHolderIcon
                    )
            }
            .cancelOnDisappear(true)
            .resizable()
            .clipShape(RoundedRectangle(cornerRadius: 8.0, style: .continuous))
            .frame(width: nil, height: 104)
            .opacity(state.isClaimed ? 0.5 : 1)
            .overlay(
                VStack {
                    Spacer()
                    Text(L10n.Scene.OpenRedPackage.claimed)
                        .horizontallyFilled(alignment: .center)
                        .frame(width: nil, height: 32, alignment: .center)
                        .background(
                            Asset.Colors.Background.mask.asColor().opacity(0.8)
                                .clipShape(RoundedCorner(radius: 8,
                                                         corners: [.bottomLeft, .bottomRight]))
                        )
                }
                .opacity(state.isClaimed ? 1 : 0)
            )
            Text("# \(state.tokenId)")
                .horizontallyFilled(alignment: .leading)
                .font(FontStyles.rh6.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
        }
    }
    
    private var placeHolderIcon: some View {
        Image(Asset.Icon.Logo.largeMask)
            .resizable()
            .frame(width: nil, height: 104)
            .overlay(
                Asset.Colors.Background.normal.asColor()
                    .opacity(0.5)
            )
            .clipShape(Circle())
    }
}

extension Int64: Identifiable {
    public typealias ID = Int
    public var id: Int {
        Int(self)
    }
}
