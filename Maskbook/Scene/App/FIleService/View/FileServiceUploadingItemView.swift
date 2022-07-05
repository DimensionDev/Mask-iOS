import SwiftUI

struct FileServiceUploadingItemView: View {

    enum Event {
        case share(FileServiceUploadingItem)
        case remove(FileServiceUploadingItem)
        case reTry(FileServiceUploadingItem)
    }

    @StateObject
    private var viewModel: FileServiceUploadViewModel
    private let onEvent: (Event) -> Void
    
    init(
        _ viewModel: FileServiceUploadViewModel,
        onEvent: @escaping (Event) -> Void
    ) {
        _viewModel = .init(wrappedValue: viewModel)
        self.onEvent = onEvent
    }
    
    var body: some View {
        content(of: viewModel.item)
            .colorScheme(.light)
    }

    func content(of item: FileServiceUploadingItem) -> some View {
        HStack(spacing: 12) {
            Image(Asset.Plugins.FileService.folder)
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 32, height: 32)

            VStack(alignment: .leading, spacing: 4) {
                Text(item.fileName)
                    .font(.bh4)
                    .foregroundColor(Asset.Colors.Text.dark)
                    .lineLimit(1)
                    .multilineTextAlignment(.leading)


                Text(item.state.detailText)
                    .font(.rh7)
                    .foregroundColor(
                        item.state == .failed
                        ? Asset.Colors.Public.error.asColor()
                        : Asset.Colors.Text.normal.asColor()
                    )
                    .horizontallyFilled()

                progressView
            }

            HStack(spacing: 20) {
                Button(
                    action: {
                        switch item.state {
                        case .uploading, .encrypting, .preparing: break
                        case .failed: onEvent(.reTry(item))
                        case .uploaded: onEvent(.share(item))
                        }
                    },
                    label: {
                        switch item.state {
                        case .uploaded:
                            Image(Asset.Plugins.FileService.share)
                                .renderingMode(.template)
                                .foregroundColor(Asset.Colors.Text.dark.asColor())

                        default:
                            Image(Asset.Plugins.FileService.retry)
                                .renderingMode(.template)
                                .foregroundColor(Asset.Colors.Text.dark.asColor())
                        }
                    }
                )

                Button(
                    action: { onEvent(.remove(item)) },
                    label: {
                        Image(Asset.Plugins.closeSquare)
                            .renderingMode(.template)
                            .foregroundColor(Asset.Colors.Text.dark.asColor())

                    }
                )
            }
            .opacity(item.state.isInterActive ? 1 : 0)
            .disabled(!item.state.isInterActive)
        }

        .padding(.all, 12)
        .background(backGroundGradient)
        .cornerRadius(8)
    }

    private var backGroundGradient: some View {
        LinearGradient(
            stops: [
                .init(
                    color: Asset.Colors.Gradient.d6E9Ff.asColor(),
                    location: 0
                ),
                .init(
                    color: Asset.Colors.Gradient.ebf2Ff.asColor(),
                    location: 1
                )
            ],
            startPoint: .init(x: 0, y: 0),
            endPoint: .init(x: 0, y: 1)
        )
    }

    private var progressView: some View {
        GeometryReader { proxy in
            Asset.Colors.Public.white.asColor()
                .cornerRadius(3)
                .overlay(
                    Asset.Colors.Public.success.asColor()
                        .frame(width: proxy.size.width * viewModel.item.progress)
                        .cornerRadius(3),
                    alignment: .leading
                )
                .frame(
                    width: proxy.size.width
                )
        }
        .frame(height: 6)
    }
    
    private func dropItem() {
        self.onEvent(.remove(viewModel.item))
    }
}

extension FileServiceUploadingItem.State {
    fileprivate var isInterActive: Bool {
        switch self {
        case .failed, .uploaded: return true
        case .encrypting, .preparing, .uploading: return false
        }
    }
}

#if DEBUG
extension FileServiceUploadingItem {
    static var preparing: Self {
        .init(
            fileName: "Rosecoke.png",
            provider: "arweave",
            state: .encrypting,
            content: Data.init(count: 3072 * 1024),
            uploadedBytes: 0,
            option: .init()
        )
    }
    
    static var failed: Self {
        .init(
            fileName: "Rosecoke.png",
            provider: "arweave",
            state: .failed,
            content: Data.init(count: 3072 * 1024),
            uploadedBytes: 3072 * 1024 * 0.5,
            option: .init()
        )
    }
    
    static var uploading: Self {
        .init(
            fileName: "Rosecoke.png",
            provider: "arweave",
            fileType: .file,
            state: .uploading,
            content: Data.init(count: 3072 * 1024),
            uploadedBytes: 1024 * 1024,
            option: .init()
        )
    }
    
    static var uploaded: Self {
        .init(
            fileName: "Rosecoke.png",
            provider: "arweave",
            state: .uploaded,
            content: Data.init(count: 3072 * 1024),
            uploadedBytes: 3072 * 1024,
            uploadDate: Date(),
            option: .init(),
            tx: .init(
                id: "1133--1131",
                key: "qeraqeqDDDdqe-_Dqeg",
                landingTxID: "131",
                payloadTxID: "1313",
                progress: 1,
                state: .uploaded
            )
        )
    }
    
    static var shuffle: Self {
        let index = Int.random(in: 0 ... 3)
        return [
            .preparing,
            .uploading,
            .uploaded,
            .failed
        ][index]
    }
}

struct UploadingItemView_preview: PreviewProvider {
    static var previews: some View {
        let items: [FileServiceUploadingItem] = [
            .preparing, .uploading, .uploaded, .failed
        ]
        VStack {
            ForEach(items, id: \.state) {
                FileServiceUploadingItemView(
                    .init(item: $0),
                    onEvent: { _ in }
                )
            }
        }
        .padding(.all, 20)
        .background(Color.orange.ignoresSafeArea())
        .frame(width: 375)
    }
}
#endif
