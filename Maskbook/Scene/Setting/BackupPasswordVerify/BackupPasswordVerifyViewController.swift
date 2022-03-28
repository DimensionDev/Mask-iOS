//
//  BackupPasswordViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import LocalAuthentication
import OSLog
import PanModal
import UIKit

class BackupPasswordVerifyViewController: UIViewController {
    lazy var topVStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.spacing = 20
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: LayoutConstraints.leading, bottom: 24, right: LayoutConstraints.trailing)
        view.alignment = .fill
        
        passwordFormItem.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(passwordFormItem)
        view.addArrangedSubview(nextButton)
        
        return view
    }()
    
    lazy var passwordFormItem: PasswordFormItemView = {
        let form = PasswordFormItemFactory.createBackupFormItem(autoVerify: true)
        form.passwordTitleLabel.text = L10n.Scene.BackupPasswordVerify.title
        return form
    }()
    
    lazy var nextButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Common.Controls.next)
        btn.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        
        btn.snp.makeConstraints {
            $0.height.equalTo(52)
        }
        return btn
    }()
    
    // MARK: - Data
    var disposeBag = Set<AnyCancellable>()

    private var cancelableStorage: Set<AnyCancellable> = []

    private let destination: Destination
    
    init(destination: Destination) {
        self.destination = destination
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

private extension BackupPasswordVerifyViewController {
    private func setupUI() {
        view.addSubview(topVStackView)
        topVStackView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }
    
    func bindAction() {
        view.cv.tapGesture().sink { [weak self] _ in
            self?.view.endEditing(true)
        }
        .store(in: &disposeBag)
        
        nextButton.addTarget(self, action: #selector(onUnlockClicked), for: .touchUpInside)
        
        if case .verifyPassedCompletion = self.destination {
            passwordFormItem.viewModel.passwordError
                .map(\.isVerifyed)
                .assign(to: \.isEnabled, on: nextButton)
                .store(in: &disposeBag)
        }
    }
    
    func bindViewModel() {
    }
    
    func updateViewForBio(showBio: Bool) {
        if showBio {
            passwordFormItem.isHidden = true
            nextButton.setImage(LocalAuthentication.shared.bioIDButtonImage(), for: .normal)
        } else {
            passwordFormItem.isHidden = false
            nextButton.setImage(nil, for: .normal)
        }
    }
    
    @objc
    func onReturn() {
        view.endEditing(true)
    }
    
    @objc
    func onUnlockClicked() {    
        switch self.destination {
        case let .verifyPassedCompletion(completion):
            self.passwordFormItem.verify {
                self.dismiss(animated: true) {
                    completion()
                }
            }
        }
    }
}

extension BackupPasswordVerifyViewController {
    enum Destination {
        case verifyPassedCompletion(completion: () -> Void)
    }
}

extension BackupPasswordVerifyViewController: KeyboardHandlerContent {
    func keyboardHandlerWillShowKeyboard(
        _ sender: KeyboardHandlerViewController,
        scrollView: UIScrollView,
        keyboardFrame: CGRect,
        firstResponder: UIView?
    ) {
        scrollView.scrollToBottom()
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct BackupPasswordViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = BackupPasswordVerifyViewController(
            destination: .verifyPassedCompletion(completion: {})
        )
        let height: CGFloat = 237
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
