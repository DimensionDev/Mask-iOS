//
//  SettingRecoverViewController.swift
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

class SettingRecoverViewController: UIViewController {
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.Setting.Recovery.title
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
        iCloudButton.translatesAutoresizingMaskIntoConstraints = false
        phoneButton.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(titleLabel)
        view.addArrangedSubview(iCloudButton)
        view.addArrangedSubview(phoneButton)
        
        let spacing = UIView()
        spacing.setContentHuggingPriority(.defaultLow, for: .vertical)
        view.addArrangedSubview(spacing)
        
        view.setCustomSpacing(20, after: titleLabel)
        view.setCustomSpacing(16, after: iCloudButton)
        view.setCustomSpacing(0, after: phoneButton)
        
        NSLayoutConstraint.activate([
            iCloudButton.heightAnchor.constraint(equalToConstant: 54),
            phoneButton.heightAnchor.constraint(equalToConstant: 54)
        ])
        return view
    }()
    
    lazy var iCloudButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.Setting.BackupData.backupIcloud)
        btn.setImage(Asset.Images.Scene.Setting.Backup.icloud.image, for: .normal)
        btn.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        return btn
    }()
    
    lazy var phoneButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.Setting.BackupData.backupManually)
        btn.setImage(Asset.Images.Scene.Setting.Backup.iphone.image, for: .normal)
        btn.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        return btn
    }()
    
    // MARK: - Data
    var disposeBag = Set<AnyCancellable>()
    var keyboardHeight: CGFloat?
    
    init() {
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
        bindViewModel()
    }
}

private extension SettingRecoverViewController {
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
    }
    
    func bindAction() {
    }
    
    func bindViewModel() {
    }
}

extension SettingRecoverViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        return nil
    }
    
    var longFormHeight: PanModalHeight {
        let height: CGFloat = 217
        return .contentHeight(height)
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct SettingRecoverViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        UIViewPreview {
            SettingBackupViewController().view
        }
    }
}
#endif
