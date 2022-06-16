import SwiftUI

final class FileServiceOptionViewController: BaseViewController {

    @InjectedProvider(\.userDefaultSettings)
    private var settings

    override func viewDidLoad() {
        super.viewDidLoad()

        title = L10n.Plugins.FileService.settingTitle

        FileServiceOptionView { [weak self] option in
            self?.settings.fileServiceUploadOption = option.asString()
        }
        .asContent(in: self)
    }
}

extension FileServiceOptionViewController {
    @objc
    override func prepareRightNavigationItems() {
        let button = NavigationBarItemView(imageAsset: Asset.Icon.faq) { [weak self] in
            // TODO: file service faq
        }

        self.navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: button.asUIView())
        ]
    }
}
