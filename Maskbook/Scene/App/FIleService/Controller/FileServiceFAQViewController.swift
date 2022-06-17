import SwiftUI
import UIKit

final class FileServiceFAQViewController: BaseViewController {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    override func viewDidLoad() {
        super.viewDidLoad()
        title = "FAQ"

        FileServiceFAQView { [weak self] url in
            self?.open(url: url)
        }
        .asContent(in: self)
    }

    private func open(url: String) {
        guard let url = URL(string: url) else { return }

        coordinator.present(
            scene: .safariView(url: url),
            transition: .modal()
        )
    }
}

struct FileServiceFAQView: View {
    init(openURLCallback: @escaping (String) -> Void) {
        self.openURLCallback = openURLCallback
    }

    private let openURLCallback: (String) -> Void

    @State
    private var showFileService = true

    @State
    private var showMesonCDN = false

    @State
    private var showArweave = false

    @State
    private var showIPFS = false

    var body: some View {
        let items: [(content: String, label: String, binding: Binding<Bool>, url: String)] = [
            (
                L10n.Plugins.FileService.Faq.fileService,
                L10n.Plugins.FileService.Faq.whatIsFileService,
                $showFileService,
                ""
            ),
            (
                L10n.Plugins.FileService.Faq.mesonCdn,
                L10n.Plugins.FileService.Faq.whatIsMesonCdn,
                $showMesonCDN,
                "https://meson.network/index.html"
            ),
            (
                L10n.Plugins.FileService.Faq.arweave,
                L10n.Plugins.FileService.Faq.whatIsArweave,
                $showArweave,
                "https://www.arweave.org/"
            ),
            (
                L10n.Plugins.FileService.Faq.ipfs,
                L10n.Plugins.FileService.Faq.whatIsIpfs,
                $showIPFS,
                "https://medium.com/wolverineblockchain/what-is-ipfs-b83277597da5"
            )
        ]

        VStack {
            ScrollView(.vertical, showsIndicators: false) {
                LazyVStack(spacing: 32) {
                    ForEach(items, id: \.content) { item in
                        DisclosureGroup(isExpanded: item.binding) {
                            groupContent(of: item.content, url: item.url)
                        } label: {
                            groupLabel(of: item.label)
                        }
                        .accentColor(Asset.Colors.Text.normal.asColor())
                    }
                }
            }
        }
        .padding(.top, 16)
        .padding(.horizontal, 20)
        .background(Asset.Colors.Background.normal.asColor())
    }

    private func groupContent(of text: String, url: String) -> some View {
        VStack(alignment: .leading, spacing: 32) {
            Text(text)
                .font(.mh7)
                .foregroundColor(Asset.Colors.Text.normal)

            if url.isNotEmpty {
                Text(L10n.Plugins.FileService.Faq.learnMore)
                    .font(.mh7)
                    .foregroundColor(Asset.Colors.Public.blue)
                    .onTapGesture {
                        openURLCallback(url)
                    }
            }
        }
    }

    private func groupLabel(of text: String) -> some View {
        Text(text)
            .font(.bh4)
            .foregroundColor(Asset.Colors.Text.dark)
    }
}


struct FileServiceFAQView_Previews: PreviewProvider {
    static var previews: some View {
        FileServiceFAQView { _ in }
    }
}
