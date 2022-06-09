import SwiftUI

struct FileServiceOptionView: View {
    typealias Service = FileServiceUploadOption.Service
    typealias Option = FileServiceUploadOption.Option

    @State var fileServiceOption: FileServiceUploadOption = .init()

    private let optionHandler: (FileServiceUploadOption) -> Void

    init(_ optionHandler: @escaping (FileServiceUploadOption) -> Void) {
        self.optionHandler = optionHandler
    }

    var body: some View {
        VStack {
            ScrollView(.vertical, showsIndicators: false) {
                LazyVStack(
                    alignment: .leading,
                    spacing: 16,
                    pinnedViews: [.sectionHeaders]
                ) {
                    Section {
                        ForEach(Service.allCases) { item in
                            Row<Service>(title: item.rawValue, item: item, style: .service, selection: $fileServiceOption.service)
                        }
                    } header: {
                        Text(L10n.Plugins.FileService.serviceTitle)
                            .font(.bh3)
                            .foregroundColor(Asset.Colors.Text.dark)
                            .horizontallyFilled()
                            .background(Asset.Colors.Background.normal.asColor())
                    }

                    Section {
                        ForEach(fileServiceOption.service.options) { item in
                            Row<Option>(
                                title: item.title,
                                item: item,
                                style: .option,
                                selection: $fileServiceOption.option
                            )
                        }
                    } header: {
                        Text(L10n.Plugins.FileService.otherOption)
                            .font(.bh3)
                            .foregroundColor(Asset.Colors.Text.dark)
                            .horizontallyFilled()
                            .background(Asset.Colors.Background.normal.asColor())
                    }
                }
            }

            Button(
                action: { optionHandler(fileServiceOption) },
                label: {
                    Asset.Colors.Public.blue.asColor()
                        .overlay(
                            Text(L10n.Common.Controls.confirm)
                                .font(.bh5)
                                .foregroundColor(Asset.Colors.Text.lighter.asColor())
                        )
                }
            )
            .cornerRadius(8)
            .frame(height: 54)
        }
        .padding(.horizontal, 20)
        .padding(.top, 20)
        .background(Asset.Colors.Background.normal.asColor())
    }
}

fileprivate struct Row<Selection: Equatable>: View {
    enum Style {
        case service
        case option
    }

    var selected: Bool {
        item == selection
    }

    let title: String
    let item: Selection
    let style: Style

    @Binding var selection: Selection

    var body: some View {
        RoundedRectangle(cornerRadius: 12)
            .onTapGesture {
                guard !selected else {
                    return
                }

                selection = item
            }
            .foregroundColor(Asset.Colors.Background.dark.asColor())
            .frame(height: 56)
            .overlay(
                HStack(spacing: 4) {
                    Text(title)
                        .font(.bh5)
                        .foregroundColor(Asset.Colors.Text.dark)
                        .horizontallyFilled()

                    switch style {
                    case .service:
                        selected
                        ? Asset.Icon.Cell.cellCheck.asImage()
                        : Asset.Icon.Cell.cellUncheck.asImage()

                    case .option:
                        selected
                        ? Asset.Images.Scene.WalletList.check.asImage()
                        : Asset.Images.Scene.WalletList.unchecked.asImage()
                    }
                }
                .padding(.horizontal, 12)
            )
    }
}

struct FileServiceOptionView_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        FileServiceOptionView { _ in }
            .colorScheme(.dark)
    }
}