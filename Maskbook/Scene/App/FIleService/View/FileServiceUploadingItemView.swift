import SwiftUI

struct FileServiceUploadingItemView: View {
    private let item: FileServiceUploadingItem
    private let onDelete: (FileServiceUploadingItem) -> Void
    private let onShare: (FileServiceUploadingItem) -> Void
    
    init(
        _ item: FileServiceUploadingItem,
        onDelete: @escaping (FileServiceUploadingItem) -> Void,
        onShare: @escaping (FileServiceUploadingItem) -> Void
    ) {
        self.item = item
        self.onShare = onShare
        self.onDelete = onDelete
    }
    
    var body: some View {
        Group {
            if let item = item {
                content(of: item)
            } else {
                Color.clear
            }
        }
    }

    func content(of item: FileServiceUploadingItem) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            HStack(spacing: 12) {
                Image(Asset.Plugins.FileService.folder)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 56, height: 56)

                VStack(alignment: .leading, spacing: 4) {
                    Text(item.fileName)
                        .font(.bh4)
                        .foregroundColor(Asset.Colors.Text.dark)
                        .lineLimit(1)
                        .multilineTextAlignment(.leading)
                    
                    if item.state == .uploaded, item.uploadDate.isSome {
                        Text(item.uploadDateText)
                            .font(.mh7)
                            .foregroundColor(Asset.Colors.Text.normal)
                            .lineLimit(1)
                            .horizontallyFilled()
                    }
                }
                
                if item.state == .uploaded {
                    Button(
                        action: { onShare(item) },
                        label: {
                            Asset.Colors.Public.blue.asColor()
                                .overlay(
                                    Text(L10n.Plugins.FileService.post)
                                        .font(.bh6)
                                        .foregroundColor(.white)
                                )
                                .frame(width: 78, height: 32)
                                .cornerRadius(8)
                        }
                    )
                }
            }
            
            switch item.state {
            case .failed:
                Text(L10n.Plugins.FileService.failureTip)
                    .font(.mh7)
                    .foregroundColor(Asset.Colors.Public.error)
                    .lineSpacing(4)
                    .layoutPriority(1)
                    .horizontallyFilled()
                
            default:
                VStack(alignment: .leading, spacing: 4) {
                    HStack {
                        Text(item.state.detailText)
                            .font(.mh5)
                            .foregroundColor(Asset.Colors.Text.normal)
                        
                        Spacer()
                        
                        Text(item.progressFileText)
                            .font(.rh6)
                            .foregroundColor(Asset.Colors.Text.normal)
                    }
                    
                    progressView
                }
            }
        }
        .overlay(
            Group {
                if item.state == .failed {
                    Asset.Colors.Background.closeGray.asColor()
                        .clipShape(Circle())
                        .overlay(
                            Image(Asset.Plugins.closeSquare)
                                .resizable()
                                .aspectRatio(contentMode: .fit)
                                .foregroundColor(.white)
                                .frame(width: 16, height: 16)
                        )
                        .frame(width: 20, height: 20)
                        .offset(y: 2)
                        .onTapGesture { self.dropItem() }
                }
            },
            alignment: .topTrailing
        )
        .padding(.all, 12)
        .background(Asset.Colors.Background.dark.asColor())
        .cornerRadius(8)
    }

    private var progressView: some View {
        Group {
            if let item = item {
                GeometryReader { proxy in
                    Asset.Colors.Background.selected.asColor()
                        .cornerRadius(3)
                        .overlay(
                            Asset.Colors.Public.success.asColor()
                                .frame(width: proxy.size.width * item.progress)
                                .cornerRadius(3),
                            alignment: .leading
                        )
                        .frame(
                            width: proxy.size.width
                        )
                }
                .frame(height: 6)
            } else {
                Color.clear
            }
        }
    }
    
    private func dropItem() {
        self.onDelete(item)
    }
}

#if DEBUG
extension FileServiceUploadingItem {
    static var preparing: Self {
        .init(
            fileName: "Rosecoke.png",
            provider: "arweave",
            state: .preparing,
            content: Data.init(count: 3072 * 1024),
            uploadedBytes: 0
        )
    }
    
    static var failed: Self {
        .init(
            fileName: "Rosecoke.png",
            provider: "arweave",
            state: .failed,
            content: Data.init(count: 3072 * 1024),
            uploadedBytes: 0
        )
    }
    
    static var uploading: Self {
        .init(
            fileName: "Rosecoke.png",
            provider: "arweave",
            fileType: .file,
            state: .uploading,
            content: Data.init(count: 3072 * 1024),
            uploadedBytes: 1024 * 1024
        )
    }
    
    static var uploaded: Self {
        .init(
            fileName: "Rosecoke.png",
            provider: "arweave",
            state: .uploaded,
            content: Data.init(count: 3072 * 1024),
            uploadedBytes: 3072 * 1024,
            uploadDate: Date()
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
                    $0,
                    onDelete: { _ in },
                    onShare: { _ in }
                )
            }
        }
        .padding(.all, 20)
        .background(Color.orange.ignoresSafeArea())
        .frame(width: 375)
    }
}
#endif
