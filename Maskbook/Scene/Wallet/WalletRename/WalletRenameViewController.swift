//
//  WalletRenameViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import OSLog
import PanModal
import UIKit

class WalletRenameViewController: UIViewController {
    typealias ViewModelType = WalletRenameViewModel
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.spacing = 8
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 48, left: LayoutConstraints.leading, bottom: 24, right: LayoutConstraints.trailing)
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
        view.placeholder = L10n.Scene.WalletRename.placeholder
        view.font = FontStyles.BH5
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 52)
        ])
        
        return view
    }()
    
    lazy var renameButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.WalletRename.renameButton)
        btn.snp.makeConstraints {
            $0.height.equalTo(52)
        }
        return btn
    }()
    
    let expandView = UIView()
    
    var keyboardHandler: KeyboardHandler?
    
    // MARK: - Data
    var disposeBag = Set<AnyCancellable>()
    let viewModel: ViewModelType
    
    init(account: Account) {
        self.viewModel = ViewModelType(account: account)
        
        super.init(nibName: nil, bundle: nil)
        
        nameTextField.text = account.name
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupUI()
        bindAction()
        
        keyboardHandler = KeyboardHandler.attach(to: self, paddingBottom: 80, expandView: expandView)
    }
}

private extension WalletRenameViewController {
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        
        view.addSubview(stackView)
        stackView.snp.makeConstraints {
            $0.top.leading.trailing.equalToSuperview()
            $0.bottom.equalTo(view.safeAreaLayoutGuide.snp.bottom)
        }
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
                self.nameTextField.text = String(self.nameTextField.text?.prefix(12) ?? "")
                if let walletName = self.nameTextField.text, !walletName.isEmpty {
                    self.renameButton.isEnabled = true
                } else {
                    self.renameButton.isEnabled = false
                }
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
        let result = viewModel.updateAccount(name: nameTextField.text ?? "")
        switch result {
        case .success:
            dismiss(animated: true, completion: nil)

        case .failure(let error):
            os_log("%{public}s[%{public}ld], %{public}s: [ihugo] %@}", ((#file as NSString).lastPathComponent), #line, #function, error.localizedDescription)
        }
    }
}

extension WalletRenameViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        return nil
    }
    
    var longFormHeight: PanModalHeight {
        return .intrinsicHeight
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct RenameViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let account = Account(context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
        let vc = WalletRenameViewController(account: account)
        let safeBottom = vc.view.safeAreaInsets.bottom
        let height = 216 + safeBottom
        Group {
            UIViewPreview {
                let view = vc.view ?? UIView()
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
