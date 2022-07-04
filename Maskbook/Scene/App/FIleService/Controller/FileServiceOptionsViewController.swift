import SwiftUI

final class FileServiceOptionViewController: BaseViewController {

    @InjectedProvider(\.userDefaultSettings)
    private var settings

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    override func viewDidLoad() {
        super.viewDidLoad()

        title = L10n.Plugins.FileService.settingTitle

        FileServiceOptionView { [weak self] option in
            self?.navigationController?.popViewController(animated: true)
        }
        .asContent(in: self)
    }
}

extension FileServiceOptionViewController {
    @objc
    override func prepareRightNavigationItems() {
        let button = NavigationBarItemView(imageAsset: Asset.Icon.faq) { [weak self] in
            self?.coordinator.present(scene: .fileServiceFAQ, transition: .detail())
        }

        self.navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: button.asUIView())
        ]
    }
}
