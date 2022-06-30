import SwiftUI

struct FileServiceOnBoardItemView: View, OnBoardItemView {
    typealias Item = FileServiceOnBoardItem

    let item: Item

    init(item: FileServiceOnBoardItem) {
        self.item = item
    }

    private let contentOffsetY: CGFloat = 48

    var body: some View {
        VStack(alignment: .center) {
            Spacer()
            
            VStack(spacing: 24) {
                Image(item.imageName)
                    .frame(width: 240, height: 240)

                Text(item.detailString)
                    .font(.bh3)
                    .foregroundColor(Asset.Colors.Text.dark)
                    .multilineTextAlignment(.center)
                    .frame(maxWidth: .infinity)
                    .horizontallyCenterred()
            }
            .offset(y: -contentOffsetY)
            .overlay(
                GeometryReader { proxy in
                    Color.clear
                          .preference(
                              key: IndicatorOffsetKey.self,
                              value: proxy.frame(in: .global).maxY - contentOffsetY
                          )
                          .frame(width: 1)
                },
                alignment: .bottom
            )

            Spacer()
        }
        .padding(.horizontal, 20)
    }
}

enum FileServiceOnBoardItem {
    case one
    case two
    case three

    var imageName: String {
        switch self {
        case .one: return Asset.Plugins.FileService.onboardOne.name
        case .two: return Asset.Plugins.FileService.onboardTwo.name
        case .three: return Asset.Plugins.FileService.onboardThree.name
        }
    }

    var detailString: String {
        switch self {
        case .one: return L10n.Plugins.FileService.Onboard.stepOne
        case .two: return L10n.Plugins.FileService.Onboard.stepTwo
        case .three: return L10n.Plugins.FileService.Onboard.stepThree
        }
    }

    init(index: Int) {
        let value = index % Self.allCases.count

        switch value {
        case 0: self = .one
        case 1: self = .two
        default: self = .three
        }
    }
}

extension FileServiceOnBoardItem: Identifiable {
    var id: Int { index }
}

extension FileServiceOnBoardItem: OnBoardItem {
    var isFirst: Bool {
        self == .one
    }

    var index: Int {
        switch self {
        case .one: return 0
        case .two: return 1
        case .three: return 2
        }
    }
}
