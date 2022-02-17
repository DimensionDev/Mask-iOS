//
//  SelectedView.swift
//  Maskbook
//
//  Created by yzj on 2021/8/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import SwiftUI
import WebExtension_Shim

struct SelectableSheetItemView<T: PluginSelecteableItem>: View {
    @ObservedObject
    private(set) var viewModel: ProviderViewModel<T>

    init(viewModel: ProviderViewModel<T>) {
        self.viewModel = viewModel
    }

    var body: some View {
        Button(
            action: { viewModel.toggleToSelected() },
            label: {
                HStack {
                    iconView

                    Text(viewModel.item.title)
                        .font(FontStyles.bh5.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())

                    Spacer()

                    if viewModel.selected {
                        Color(Asset.Colors.Public.blue)
                            .opacity(0.1)
                            .frame(width: 20, height: 20)
                            .cornerRadius(5)
                            .overlay(
                                Image(Asset.Plugins.checkMark.name)
                            )
                    }
                }
            }
        )
        .disabled(viewModel.selected)
        .padding([.leading, .trailing], 12)
        .background(
            backView
                .frame(height: 56)
                .cornerRadius(12)
        )
        .frame(height: 56)
    }

    @ViewBuilder
    private var iconView: some View {
        switch viewModel.item.icon {
        case TradeProvider.uniswap.icon:
            Circle()
                .fill(uniswapGradient)
                .background(
                    Circle()
                        .fill(Color.white)
                )
                .overlay(
                    Circle()
                        .strokeBorder(Asset.Plugins.uniswapBorder.asColor())
                )
                .overlay(
                    Image(viewModel.item.icon)
                )
                .frame(width: 32, height: 32)

        case TradeProvider.quickswap.icon:
            Color(Asset.Colors.Background.dark.name)
                .frame(width: 32, height: 32)
                .cornerRadius(16)
                .overlay(
                    Image(viewModel.item.icon)
                )

        case TradeProvider.pancakeswap.icon:
            Color(Asset.Plugins.circleBackground.name)
                .frame(width: 32, height: 32)
                .cornerRadius(16)
                .overlay(
                    Image(viewModel.item.icon)
                        .scaleEffect(0.7)
                )

        default:
            Color(Asset.Plugins.circleBackground.name)
                .frame(width: 32, height: 32)
                .cornerRadius(16)
                .overlay(
                    Image(viewModel.item.icon)
                )
        }
    }

    private var uniswapGradient: LinearGradient {
        LinearGradient(
            gradient: Gradient(
                stops: [
                    .init(color: Asset.Plugins.uniswapGradientOne.asColor(), location: 0),
                    .init(color: Asset.Plugins.uniswapGradientTwo.asColor(), location: 1)
                ]
            ),
            startPoint: .top,
            endPoint: .bottom
        )
    }

    private var backView: some View {
        viewModel.selected
            ? Asset.Colors.Background.dark.asColor()
            : Color.clear
    }
}

final class ProviderViewModel<T: PluginSelecteableItem>: ObservableObject {
    let item: T

    @Published
    var selected: Bool

    private(set) var selectedSignal = PassthroughSubject<T, Never>()

    init(item: T, isSelected: Bool) {
        self.item = item
        self.selected = isSelected
    }

    /// Only sync selected status
    func syncSelected(_ selected: Bool) {
        self.selected = selected
    }

    /// Tap to selected and notify observers
    func toggleToSelected() {
        if selected { return }
        selected = true
        selectedSignal.send(item)
    }
}

typealias TradeProvider = WebExtension.Setting.TradeProvider
typealias DataProvider = WebExtension.Setting.DataProvider

struct SelectedViewPreviews: PreviewProvider {
    static var previews: some View {
        Group {
            SelectableSheetItemView<TradeProvider>(
                viewModel: ProviderViewModel<TradeProvider>(item: .uniswap, isSelected: false)
            )
            SelectableSheetItemView<DataProvider>(
                viewModel: ProviderViewModel<DataProvider>(item: .coinGecko, isSelected: true)
            )
        }
    }
}
