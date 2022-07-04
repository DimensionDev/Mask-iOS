import SwiftUI

struct FileServiceConfirmView: View {
    typealias Service = FileServiceUploadOption.Service
    typealias Option = FileServiceUploadOption.Option

    enum Action {
        case faq
        case confirm(option: FileServiceUploadOption)
    }
    
    let actionSignal: (Action) -> Void
    
    let fileServiceItem: FileServiceSelectedFileItem
    
    @State
    private var fileServiceOption: FileServiceUploadOption

    init(_ fileServiceItem: FileServiceSelectedFileItem,
         action: @escaping (Action) -> Void) {
        self.fileServiceItem = fileServiceItem
        self.actionSignal = action

        _fileServiceOption = .init(initialValue: FileServiceUploadOption.default)
    }

    var body: some View {
        VStack {
            ScrollView(.vertical, showsIndicators: false) {
                LazyVStack(
                    alignment: .leading,
                    spacing: 16
                ) {
                    FileServiceGeneralPreview(item: fileServiceItem)
                    Section {
                        ForEach(Service.allCases) { item in
                            Row<Service>(title: item.title, item: item, style: .service, selection: $fileServiceOption.service)
                        }
                    } header: {
                        HStack {
                            Text(L10n.Plugins.FileService.serviceTitle)
                                .font(.bh3)
                                .foregroundColor(Asset.Colors.Text.dark)
                                .horizontallyFilled()
                                .background(Asset.Colors.Background.normal.asColor())
                            Spacer()
                            Image(Asset.Icon.faq)
                                .onTapGesture {
                                    actionSignal(.faq)
                                }
                        }
                    }

                    Section {
                        SelectionRow(
                            title: Option.encrypt.title,
                            selected: $fileServiceOption.encrypted
                        )

                        if fileServiceOption.service == .arweave {
                            SelectionRow(
                                title: Option.mesoncdn.title,
                                selected: $fileServiceOption.useMesonCDN
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
                action: { actionSignal(.confirm(option: fileServiceOption)) },
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
        .padding(.vertical, 20)
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

fileprivate struct SelectionRow: View {
    let title: String

    @Binding var selected: Bool

    var body: some View {
        RoundedRectangle(cornerRadius: 12)
            .onTapGesture {
                selected.toggle()
            }
            .foregroundColor(Asset.Colors.Background.dark.asColor())
            .frame(height: 56)
            .overlay(
                HStack(spacing: 4) {
                    Text(title)
                        .font(.bh5)
                        .foregroundColor(Asset.Colors.Text.dark)
                        .horizontallyFilled()

                    checkBox
                }
                .padding(.horizontal, 12)
            )
    }

    private var checkBox: some View {
        selected
        ? Asset.Plugins.FileService.checkSquare.asImage()
        : Asset.Images.Scene.WalletList.unchecked.asImage()
    }
}

#if debug
extension FileServiceSelectedFileItem {
    static var previewItem: Self {
        .init(
            data: Data.init(count: 3072 * 1024),
            fileName: "Rosecoke.png",
            fileType: .image,
            mime: ""
        )
    }
}
struct FileServiceOptionView_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        FileServiceConfirmView(.previewItem) { _ in }
            .colorScheme(.dark)
    }
}
#endif
