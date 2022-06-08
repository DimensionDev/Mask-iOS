import SwiftUI

struct FileServiceUploadingItem {
    init(
        fileName: String,
        state: FileServiceUploadingItem.State,
        totalBytes: Int,
        uploadedBytes: Int,
        uploadDateText: String? = nil
    ) {
        self.fileName = fileName
        self.state = state
        self.totalBytes = totalBytes
        self.uploadedBytes = uploadedBytes
        self.uploadDateText = uploadDateText
    }

    enum State: String {
        case preparing
        case uploading
        case uploaded
        case failed

        var detailText: String {
            switch self {
            case .preparing: return "Preparing..."
            case .uploading: return "Uploading..."
            case .uploaded: return "Uploaded"
            case .failed: return ""
            }
        }
    }

    let fileName: String
    let state: State
    let totalBytes: Int
    let uploadedBytes: Int
    let uploadDateText: String?

    func fileSizeText(of size: Int) -> String {
        if size == 0 { return "0.0 kb" }
        let fileSize = Double(size)
        let kb = fileSize / 1_024
        guard kb >= 1_024 else {
            return String(format: "%.1f KB", kb)
        }

        let mb = kb / 1_024
        guard mb >= 1_024 else {
            return String(format: "%.1f MB", mb)
        }

        let gb = mb / 1_024
        return String(format: "%.1f GB", gb)
    }

    var progress: CGFloat {
        guard totalBytes > 0 else {
            return 0
        }

        return CGFloat(uploadedBytes) / CGFloat(totalBytes)
    }

    var progressFileText: String {
        switch self.state {
        case .failed, .preparing: return ""
        case .uploading, .uploaded:
            let uploadingText = fileSizeText(of: uploadedBytes)
            let totalText = fileSizeText(of: totalBytes)
            return "\(uploadingText)/\(totalText)"
        }
    }
}

struct FileServiceUploadingItemView: View {
    @Binding var item: FileServiceUploadingItem

    var body: some View {

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

                    if item.state == .uploaded, let date = item.uploadDateText {
                        Text(date)
                            .font(.mh7)
                            .foregroundColor(Asset.Colors.Text.normal)
                            .lineLimit(1)
                            .horizontallyFilled()
                    }
                }

                if item.state == .uploaded {
                    Button(
                        action: {},
                        label: {
                            Asset.Colors.Public.blue.asColor()
                                .overlay(
                                    Text("Post")
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
                Text("Failed to upload due to network conditions or other problems.")
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
    }

    func dropItem() {

    }
}

#if DEBUG
extension FileServiceUploadingItem {
    static var preparing: Self {
        .init(
            fileName: "Rosecoke.png",
            state: .preparing,
            totalBytes: 3072 * 1024,
            uploadedBytes: 0
        )
    }

    static var failed: Self {
        .init(
            fileName: "Rosecoke.png",
            state: .failed,
            totalBytes: 3072 * 1024,
            uploadedBytes: 0
        )
    }

    static var uploading: Self {
        .init(
            fileName: "Rosecoke.png",
            state: .uploading,
            totalBytes: 3072 * 1024,
            uploadedBytes: 1024 * 1024
        )
    }

    static var uploaded: Self {
        .init(
            fileName: "Rosecoke.png",
            state: .uploaded,
            totalBytes: 3072 * 1024,
            uploadedBytes: 3072 * 1024,
            uploadDateText: "2012-09-40 12:12:10"
        )
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
                    item: .constant($0)
                )
            }
        }
        .padding(.all, 20)
        .background(Color.orange.ignoresSafeArea())
        .frame(width: 375)
    }
}
#endif
