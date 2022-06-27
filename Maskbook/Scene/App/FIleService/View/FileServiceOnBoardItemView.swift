import SwiftUI

struct FileServiceOnBoardItemView: View, OnBoardItemView {
    typealias Item = FileServiceOnBoardItem

    let item: Item

    init(item: FileServiceOnBoardItem) {
        self.item = item
    }

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
            .offset(y: -48)

            Spacer()
        }
        .padding(.horizontal, 20)
    }
}

enum FileServiceOnBoardItem {
    case one
    case two
    case three
    case four

    var imageName: String {
        switch self {
        case .one: return Asset.Plugins.FileService.onboardOne.name
        case .two: return Asset.Plugins.FileService.onboardTwo.name
        case .three: return Asset.Plugins.FileService.onboardThree.name
        case .four: return Asset.Plugins.FileService.onboardFour.name
        }
    }

    var detailString: String {
        switch self {
        case .one: return L10n.Plugins.FileService.Onboard.stepOne
        case .two: return L10n.Plugins.FileService.Onboard.stepTwo
        case .three: return L10n.Plugins.FileService.Onboard.stepThree
        case .four: return L10n.Plugins.FileService.Onboard.stepFour
        }
    }

    init(index: Int) {
        let value = index % Self.allCases.count

        switch value {
        case 0: self = .one
        case 1: self = .two
        case 2: self = .three
        default: self = .four
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
        case .four: return 3
        }
    }
}
