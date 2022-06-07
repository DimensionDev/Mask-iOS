import SwiftUI
import UIKit

final class FileServiceViewController: BaseViewController {

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    override func viewDidLoad() {
        super.viewDidLoad()
        title = L10n.Scene.App.Plugins.fileService
        FileServiceOnBoardView().asContent(in: self)
    }


    private func configUploadOption() {
        coordinator.present(
            scene: .fileServiceOptions,
            transition: .detail()
        )
    }
}

extension FileServiceViewController {
    @objc
    override func prepareRightNavigationItems() {
        let button = NavigationItemView(imageAsset: Asset.Plugins.closeSquare) { [weak self] in
            self?.navigationController?.popViewController(animated: true)
        }
        .frame(width: 36, height: 36)

        self.navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: button.asUIView())
        ]
    }

    @objc
    override func prepareLeftNavigationItems() {
        let settings = NavigationItemView(imageAsset: Asset.Plugins.LuckyDrop.setting) { [weak self] in
            self?.configUploadOption()
        }
        .frame(width: 36, height: 36)

        self.navigationItem.leftBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: settings.asUIView())
        ]
    }
}
