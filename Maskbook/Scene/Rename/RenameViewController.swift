//
//  RenameViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import PanModal
import UIKit

class RenameViewController: UIViewController {
    typealias ViewModelType = RenameViewModel
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.spacing = 8
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 48, left: 22, bottom: 24, right: 22)
        view.alignment = .fill
        
        nameLabel.translatesAutoresizingMaskIntoConstraints = false
        nameTextField.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(nameLabel)
        view.addArrangedSubview(nameTextField)
        view.addArrangedSubview(renameButton)
        view.addArrangedSubview(expandView)
        
        view.setCustomSpacing(20, after: nameTextField)
        view.setCustomSpacing(0, after: renameButton)
        
        return view
    }()
    
    lazy var nameLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.normal.color
        label.text = L10n.Scene.WalletRename.nameTitle
        return label
    }()
    
    lazy var nameTextField: MaskTextField = {
        let view = MaskTextField()
        view.font = FontStyles.BH5
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 52)
        ])
        
        return view
    }()
    
    lazy var renameButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Common.Controls.confirm)
        btn.isEnabled = false
        btn.snp.makeConstraints {
            $0.height.equalTo(52)
        }
        return btn
    }()
    
    let expandView = UIView()
    
    var keyboardHandler: KeyboardHandler?
    
    // MARK: - Data
    var disposeBag = Set<AnyCancellable>()
    var keyboardHeight: CGFloat?
    let viewModel: ViewModelType
    
    init(viewModel: ViewModelType) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
        
        nameTextField.text = viewModel.originalName
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

private extension RenameViewController {
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        nameLabel.text = viewModel.title

        view.addSubview(stackView)
        stackView.snp.makeConstraints {
            $0.top.leading.trailing.equalToSuperview()
            $0.bottom.equalTo(view.safeAreaLayoutGuide.snp.bottom)
        }
        
        keyboardHandler = KeyboardHandler.attach(to: self, paddingBottom: 80, expandView: expandView)
    }
    
    func bindAction() {
        view.gesture().sink { [weak self] _ in
            self?.view.endEditing(true)
        }
        .store(in: &disposeBag)
        
        NotificationCenter.default
            .publisher(for: UITextField.textDidChangeNotification, object: nameTextField)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                guard self.nameTextField.markedTextRange == nil else { return }
                if let text = self.nameTextField.text, !text.isEmpty {
                    self.renameButton.isEnabled = true
                } else {
                    self.renameButton.isEnabled = false
                }
                self.nameTextField.text = String(self.nameTextField.text?.prefix(12) ?? "")
            }
            .store(in: &disposeBag)
        
        nameTextField.addTarget(self, action: #selector(onReturn), for: .primaryActionTriggered)
        renameButton.addTarget(self, action: #selector(onRenameClicked), for: .touchUpInside)
    }
    
    @objc
    func onReturn() {
        view.endEditing(true)
    }
    
    @objc
    func onRenameClicked() {
        guard let newName = self.nameTextField.text, !newName.isEmpty else {
            return
        }
        dismiss(animated: true) {
            self.viewModel.confirmAction(newName)
        }
    }
}

extension RenameViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        return nil
    }
    
    var longFormHeight: PanModalHeight {
        return .intrinsicHeight
    }
}
