import Combine
import SwiftUI

final class LuckDropHistoryController: BaseViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        title = "History Records"
    }

    override func buildContent() {
        super.buildContent()
        LuckyDropHistoryView().asContent(in: self)

    }
}


enum LuckDropKind: RawRepresentable, Hashable, Identifiable, CaseIterable {
    case token
    case nft

    var id: String { self.rawValue }

    var rawValue: String {
        switch self {
        case .token: return L10n.Plugins.Luckydrop.token
        case .nft: return L10n.Plugins.Luckydrop.nft
        }
    }

    init?(rawValue: String) {
        switch rawValue {
        case L10n.Plugins.Luckydrop.token: self = .token
        case L10n.Plugins.Luckydrop.nft: self = .nft
        default: return nil
        }
    }
}

// MARK: Segment

struct SegmentControl<Item>: View
where Item: Hashable,
      Item: CaseIterable,
      Item.AllCases: RandomAccessCollection,
      Item.AllCases.Index == Int,
      Item: RawRepresentable,
      Item.RawValue == String {

    @Binding var selection: Item

    var body: some View {
        GeometryReader { proxy in
            let count = CGFloat(Item.allCases.count)
            let itemWidth = proxy.size.width / count
            let delta: CGFloat = (proxy.size.width - itemWidth) / 2

            HStack(alignment: .center, spacing: 0) {
                ForEach(Item.allCases, id: \.self) { item in
                    Text(item.rawValue)
                        .segmentStyle(isSelected: selection == item)
                        .background(Color.clear)
                        .frame(minWidth: itemWidth, minHeight: proxy.size.height)
                        .contentShape(Rectangle())
                        .onTapGesture {
                            withAnimation {
                                self.selection = item
                            }
                        }
                }
            }
            .background(
                Asset.Colors.Background.selected.asColor()
                    .overlay(
                        Asset.Colors.Background.tab.asColor()
                            .frame(
                                width: -8 + itemWidth,
                                height: proxy.size.height - 8,
                                alignment: .center
                            )
                            .cornerRadius(8)
                            .offset(x: -delta)
                            .offset(x: CGFloat(index(of: selection)) * itemWidth)
                    )
            )
            .cornerRadius(8)
        }
    }

    private func index(of item: Item) -> Int {
        Item.allCases.firstIndex(of: item) ?? 0
    }
}

extension Text {
    fileprivate func segmentStyle(isSelected: Bool) -> some View {
        self.font(FontStyles.bh5.font)
            .foregroundColor(
                isSelected
                ? Asset.Colors.Text.dark.asColor()
                : Asset.Colors.Text.normal.asColor()
            )
            .background(Color.clear)
    }
}
