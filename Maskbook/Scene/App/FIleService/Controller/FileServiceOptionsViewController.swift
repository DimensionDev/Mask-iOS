import SwiftUI

final class FileServiceOptionViewController: BaseViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        title = L10n.Plugins.FileService.settingTitle

        FileServiceOptionView { option in

        }
        .asContent(in: self)
    }
}

extension FileServiceOptionViewController {
    @objc
    override func prepareRightNavigationItems() {
        let button = NavigationItemView(imageAsset: Asset.Icon.faq) { [weak self] in
            // TODO: file service faq
        }
        .frame(width: 36, height: 36)

        self.navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: button.asUIView())
        ]
    }
}
