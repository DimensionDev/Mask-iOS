//
//  PersonaExportPrivateKeyViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit

class PersonaExportPrivateKeyViewController: BaseViewController {
    init(viewModel: PersonaExportPrivateKeyViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    let viewModel: PersonaExportPrivateKeyViewModel

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
        view.numberOfLines = 0
        view.attributedText = tipsAttributeText()
        return view
    }()
    
    lazy var buttonsStack: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: 16, bottom: 0, right: 16)
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
    
    var disposeBag = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = L10n.Scene.PersonaExportPrivateKey.title
        setupUI()
        subscribeSignal()
    }
    
    func tipsAttributeText() -> NSAttributedString {
        let attrbute = NSMutableAttributedString()
        let attrbute1 = NSAttributedString(string: L10n.Scene.PersonaExportPrivateKey.tips,
                                           attributes: [.foregroundColor: Asset.Colors.Text.normal.color,
                                                        .font: FontStyles.MH6])
        let attribte2 = NSAttributedString(string: L10n.Scene.PersonaExportPrivateKey.backupRecovery,
                                           attributes: [.foregroundColor: Asset.Colors.Public.blue.color,
                                                        .font: FontStyles.MH6])
        attrbute.append(attrbute1)
        attrbute.append(attribte2)
        return attrbute
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
    
    private func onCopyButtonClicked() {
        UIPasteboard.general.string = textView.text
        showSuccess()
    }
    
    private func subscribeSignal() {
        cancelButton.cv.tap()
            .sink { [weak self] _ in
                self?.navigationController?.popViewController(animated: true)
            }
            .store(in: &disposeBag)
        
        copyButton.cv.tap()
            .sink { [weak self] _ in
                self?.onCopyButtonClicked()
            }
            .store(in: &disposeBag)
            
        viewModel.privateKeyPublisher
            .receive(on: DispatchQueue.main)
            .sink { _ in
            } receiveValue: { [weak self] json in
                self?.textView.text = json
            }
            .store(in: &disposeBag)
    }
    
    private func showSuccess() {
        UIApplication.getTopViewController()?.view
            .makeToast(message: L10n.Common.Toast.copy,
                       image: Asset.Images.Toast.check.image)
    }
}

extension PersonaExportPrivateKeyViewController: UITextViewDelegate {
    func textViewShouldBeginEditing(_ textView: UITextView) -> Bool {
        false
    }
}
