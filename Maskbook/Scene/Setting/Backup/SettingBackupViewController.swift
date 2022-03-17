//
//  SettingBackupViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import OSLog
import PanModal
import UIKit

class SettingBackupViewController: UIViewController {
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.Setting.BackupData.title
        label.textAlignment = .center
        return label
    }()
    
    lazy var subtitleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH5
        label.textColor = Asset.Colors.Text.normal.color
        label.text = L10n.Scene.Setting.BackupData.title
        label.textAlignment = .center
        return label
    }()
    
    lazy var topVStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.spacing = 8
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 27, left: 22.5, bottom: 0, right: 22.5)
        view.alignment = .fill
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        subtitleLabel.translatesAutoresizingMaskIntoConstraints = false
        iCloudButton.translatesAutoresizingMaskIntoConstraints = false
        manuallyButton.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(titleLabel)
        view.addArrangedSubview(subtitleLabel)
        view.addArrangedSubview(iCloudButton)
        view.addArrangedSubview(manuallyButton)
        
        let spacing = UIView()
        spacing.setContentHuggingPriority(.defaultLow, for: .vertical)
        view.addArrangedSubview(spacing)
        
        view.setCustomSpacing(20, after: titleLabel)
        view.setCustomSpacing(16, after: iCloudButton)
        view.setCustomSpacing(0, after: manuallyButton)
        
        NSLayoutConstraint.activate([
            iCloudButton.heightAnchor.constraint(equalToConstant: 54),
            manuallyButton.heightAnchor.constraint(equalToConstant: 54)
        ])
        return view
    }()
    
    lazy var iCloudButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Common.Controls.backUpToCloud)
        btn.setImage(Asset.Images.Scene.Setting.Backup.icloud.image, for: .normal)
        btn.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        return btn
    }()
    
    lazy var manuallyButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Common.Controls.backUpLocally)
        btn.setImage(Asset.Images.Scene.Setting.Backup.iphone.image, for: .normal)
        btn.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        return btn
    }()
    
    let style: Style
    // MARK: - Data
    var disposeBag = Set<AnyCancellable>()
    var keyboardHeight: CGFloat?

    @InjectedProvider(\.userDefaultSettings)
    private var userSettings
    
    init(style: Style = .normal) {
        self.style = style
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupUI()
        bindAction()
    }
}

private extension SettingBackupViewController {
    private var backupTitle: String {
        return L10n.Scene.Setting.BackupData.title
    }
    
    private var subtitle: String? {
        guard style == .reminder else { return nil }
        guard let date = userSettings.backupDate else {
            return L10n.Scene.Setting.BackupData.noBackupTitle
        }
        
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy.MM.dd"
        let dateStr = formatter.string(from: date)
        return L10n.Scene.Setting.BackupData.subtitle(dateStr)
    }
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(topVStackView)

        topVStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            topVStackView.topAnchor.constraint(equalTo: self.view.topAnchor),
            topVStackView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor),
            self.view.trailingAnchor.constraint(equalTo: topVStackView.trailingAnchor),
            self.view.safeAreaLayoutGuide.bottomAnchor.constraint(equalTo: topVStackView.bottomAnchor, constant: 24)
        ])
        
        titleLabel.text = backupTitle
        subtitleLabel.text = subtitle
    }
    
    func bindAction() {
        manuallyButton.cv.tap()
            .sink { [weak self] in
                self?.dismiss(animated: true, completion: {
                    Coordinator.main.present(
                        scene: .localBackup(type: .local),
                        transition: .detail()
                    )
                })
            }
            .store(in: &disposeBag)

        iCloudButton.cv.tap()
            .sink { [weak self] in
                self?.proceedRemoteBackup()
            }
            .store(in: &disposeBag)
    }

    private func proceedRemoteBackup() {
        let canStartRemoteBackup: Bool = {
            let phoneBinded = userSettings.remoteBackupPhoneNumber?.isNotEmpty ?? false
            let emailBinded = userSettings.remoteBackupEmail?.isNotEmpty ?? false
            return phoneBinded || emailBinded
        }()

        guard canStartRemoteBackup else {
            self.dismiss(animated: true) {
                self.showBindingAlert()
            }
            return
        }

        self.dismiss(animated: true) {        
            // start request validation code
            Coordinator.main.present(scene: .remoteBackupGetVerifyCode, transition: .popup)
        }
    }

    private func showBindingAlert() {
        Alert {
            ImageItem(.warning)
            PlainTextItem(
                title: L10n.Common.Alert.BackupPopupBindingFirst.title,
                detail: L10n.Common.Alert.BackupPopupBindingFirst.description
            )
            DoneActionItem(.init(title: L10n.Common.Controls.ok))
        }
        .show()
    }
}

extension SettingBackupViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        return nil
    }
    
    var longFormHeight: PanModalHeight {
        .intrinsicHeight
    }
}

extension SettingBackupViewController {
    enum Style {
        case normal
        case reminder
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct SettingBackupViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = SettingBackupViewController()
        let safeBottom = vc.view.safeAreaInsets.bottom
        let height = 217 + safeBottom + 24
        Group {
            UIViewPreview {
                let view = vc.view!
                NSLayoutConstraint.activate([
                    vc.view.widthAnchor.constraint(equalToConstant: 375),
                    vc.view.heightAnchor.constraint(equalToConstant: height)
                ])
                return view
            }
            .previewLayout(.fixed(width: 375, height: height))
        }
    }
}
#endif
