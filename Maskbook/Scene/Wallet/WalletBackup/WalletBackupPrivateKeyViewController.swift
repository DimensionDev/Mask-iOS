//
//  WalletBackupPrivateKeyViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit

class WalletBackupPrivateKeyViewController: BaseViewController {
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.distribution = .fill
        view.alignment = .fill
        view.spacing = 12
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 24, left: 24, bottom: 16, right: 24)
        
        textContainer.translatesAutoresizingMaskIntoConstraints = false
        tipsLabel.translatesAutoresizingMaskIntoConstraints = false
        buttonsStack.translatesAutoresizingMaskIntoConstraints = false
        spacer.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(textContainer)
        view.addArrangedSubview(tipsLabel)
        view.addArrangedSubview(spacer)
        view.addArrangedSubview(buttonsStack)
        return view
    }()
    
    lazy var textView: UITextView = {
        let view = UITextView()
        view.backgroundColor = .clear
        view.delegate = self
        view.translatesAutoresizingMaskIntoConstraints = false
        view.font = FontStyles.BH6
        view.textColor = Asset.Colors.Text.dark.color
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 276)
        ])
        return view
    }()
    
    lazy var textContainer: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.applyCornerRadius(radius: 8)
        view.addSubview(textView)
        
        textView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            textView.topAnchor.constraint(equalTo: view.topAnchor, constant: 12),
            textView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 12),
            view.bottomAnchor.constraint(equalTo: textView.bottomAnchor, constant: 12),
            view.trailingAnchor.constraint(equalTo: textView.trailingAnchor, constant: 12)
        ])
        return view
    }()
    
    lazy var tipsLabel: UILabel = {
        let view = UILabel()
        view.font = FontStyles.MH6
        view.textColor = Asset.Colors.Public.blue.color
        view.text = L10n.Scene.WalletBackup.privateKeyTips
        view.numberOfLines = 0
        return view
    }()
    
    lazy var buttonsStack: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0)
        view.spacing = 20
        
        cancelButton.translatesAutoresizingMaskIntoConstraints = false
        copyButton.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(cancelButton)
        view.addArrangedSubview(copyButton)
        
        NSLayoutConstraint.activate([
            cancelButton.heightAnchor.constraint(equalToConstant: 52),
            cancelButton.heightAnchor.constraint(equalTo: copyButton.heightAnchor),
            cancelButton.widthAnchor.constraint(equalTo: copyButton.widthAnchor)
        ])
        return view
    }()
    
    lazy var spacer: UIView = {
        let view = UIView()
        view.setContentHuggingPriority(.defaultLow, for: .vertical)
        return view
    }()
    
    lazy var cancelButton: SecondaryButton = {
        let btn = SecondaryButton(title: L10n.Scene.WalletBackup.btnCancel)
        return btn
    }()
    
    lazy var copyButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.WalletBackup.btnCopy)
        return btn
    }()
    
    // MARK: - Data
    var disposeBag = Set<AnyCancellable>()
    let viewModel = WalletBackupPrivateKeyViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupUI()
        bindViewModel()
        bindAction()
    }
    
    // MARK: Private methods
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(stackView)
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: view.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            view.safeAreaLayoutGuide.bottomAnchor.constraint(equalTo: stackView.bottomAnchor),
            view.trailingAnchor.constraint(equalTo: stackView.trailingAnchor)
        ])
    }
    
    private func bindViewModel() {
        viewModel.privateKeyPublisher
            .receive(on: RunLoop.main)
            .sink { _ in
            } receiveValue: { [weak self] json in
                self?.textView.text = json
            }
            .store(in: &disposeBag)
    }
    
    private func bindAction() {
        copyButton.cv.tap().sink { [weak self] _ in
            UIPasteboard.general.string = self?.textView.text
            self?.showSuccess()
        }
        .store(in: &disposeBag)
        
        cancelButton.cv.tap().sink { [weak self] _ in
            self?.navigationController?.popViewController(animated: true)
        }
        .store(in: &disposeBag)
    }
    
    private func showSuccess() {
        let alertController = AlertController(
            title: L10n.Common.Alert.WalletBackup.title,
            message: "",
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .success,
            confirmButtonClicked: { _ in
            }
        )
        
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }
}

extension WalletBackupPrivateKeyViewController: UITextViewDelegate {
    func textViewShouldBeginEditing(_ textView: UITextView) -> Bool {
        return false
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletBackupPrivateKeyViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = WalletBackupPrivateKeyViewController()
        let width: CGFloat = 375
        let height: CGFloat = 668
        Group {
            UIViewPreview {
                let view = vc.view!
                view.translatesAutoresizingMaskIntoConstraints = false
                NSLayoutConstraint.activate([
                    view.widthAnchor.constraint(equalToConstant: width),
                    view.heightAnchor.constraint(equalToConstant: height)
                ])
                return view
            }
            .previewLayout(.fixed(width: width, height: height))
        }
    }
}
#endif
