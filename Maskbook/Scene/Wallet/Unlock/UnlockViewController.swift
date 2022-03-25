//
//  UnlockViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import LocalAuthentication
import OSLog
import PanModal
import UIKit

class UnlockViewController: AlertPopupController {
    typealias ViewModelType = UnlockViewModel
    typealias Completion = (UnlockError?) -> Void
    
    enum UnlockError: Error {
        case cancel
    }
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.WalletUnlock.title
        label.textAlignment = .center
        return label
    }()
    
    lazy var topVStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.spacing = 8
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 24, left: LayoutConstraints.leading, bottom: 24, right: LayoutConstraints.trailing)
        view.alignment = .fill
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        passwordFormItem.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(titleLabel)
        view.addArrangedSubview(passwordFormItem)
        view.addArrangedSubview(hStack)
        view.addArrangedSubview(expandView)
        
        view.setCustomSpacing(20, after: titleLabel)
        view.setCustomSpacing(20, after: passwordFormItem)
        view.setCustomSpacing(0, after: hStack)
        
        return view
    }()
    
    lazy var passwordFormItem: PasswordFormItemView = {
        let form = PasswordFormItemFactory.createPaymentFormItem()
        return form
    }()
    
    lazy var unlockButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.WalletUnlock.button)
        btn.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        
        btn.snp.makeConstraints {
            $0.height.equalTo(52)
        }
        return btn
    }()
    
    lazy var cancelButton: SecondaryButton = {
        let btn = SecondaryButton(title: L10n.Scene.WalletDelete.btnCancel)
        
        btn.snp.makeConstraints {
            $0.height.equalTo(52)
        }
        return btn
    }()
    
    lazy var hStack: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fill
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0)
        view.spacing = 20
        
        view.addArrangedSubview(cancelButton)
        view.addArrangedSubview(unlockButton)
        
        cancelButton.snp.makeConstraints {
            $0.width.equalTo(unlockButton.snp.width)
        }
        return view
    }()
    
    let expandView = UIView()
    
    let completion: Completion?
    
    // MARK: - Data
    var disposeBag = Set<AnyCancellable>()
    var keyboardHeight: CGFloat?
    let viewModel: ViewModelType
    let cancelable: Bool
    
    /// init UnlockViewController
    /// - Parameters:
    ///   - cancelable: If true, show cancel button, otherwise hidden cancel button.
    ///   - completion: If it doesn't set this value, will select second tab item after verifying payment password. Otherwise, do nothing, just dismiss itself.
    init(cancelable: Bool = true, completion: Completion? = nil) {
        self.viewModel = ViewModelType()
        self.completion = completion
        self.cancelable = cancelable
        
        super.init(presenter: .alert)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        bindViewModel()
    }
    
    override func buildContent() {
        super.buildContent()

        contentView.withSubViews {
            topVStackView
        }
        
        cancelButton.isHidden = !cancelable
    }

    override func buildLayout() {
        super.buildLayout()
        topVStackView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }
    
    override func buildEvent() {
        super.buildEvent()
        dissmissOnTap = false
        view.gesture().sink { [weak self] _ in
            self?.view.endEditing(true)
        }.store(in: &disposeBag)
        
        unlockButton.cv.tap().sink { [weak self] _ in
            guard let self = self else { return }
            
            if self.viewModel.isShowBioIDPage.value {
                self.handleWithFacialAuth()
            } else {
                self.passwordFormItem.verify { [weak self] in
                    self?.unlock()
                }
            }
        }.store(in: &disposeBag)
        
        cancelButton.cv.tap().sink { [weak self] _ in
            self?.dismiss(animated: true, completion: { [weak self] in
                self?.completion?(.cancel)
            })
        }.store(in: &disposeBag)
    }
}

private extension UnlockViewController {
    func bindViewModel() {
        viewModel.isShowBioIDPage
            .receive(on: DispatchQueue.main)
            .sink { [weak self] isShow in
                self?.updateViewForBio(showBio: isShow)
                
                // !!!: It will not be laid out properly after the biometric authentication failure, if it is not executed asynchronously.
                DispatchQueue.main.async {
                    self?.panModalSetNeedsLayoutUpdate()
                    self?.panModalTransition(to: .longForm)
                }
            }
            .store(in: &disposeBag)
    }
    
    func updateViewForBio(showBio: Bool) {
        if showBio {
            passwordFormItem.isHidden = true
            unlockButton.setImage(LocalAuthentication.shared.bioIDButtonImage(), for: .normal)
        } else {
            passwordFormItem.isHidden = false
            unlockButton.setImage(nil, for: .normal)
        }
    }
    
    func handleWithFacialAuth() {
        LocalAuthentication.shared.evaluateBiometryID { [weak self] result, _ in
            guard let self = self else { return }
            if result {
                DispatchQueue.main.async {
                    self.unlock()
                }
            } else {
                // handle all failure cases
                self.viewModel.isShowBioIDPage.value = false
            }
        }
    }
    
    func unlock() {
        os_log("%{public}s[%{public}ld], %{public}s: [unlock] %@",
               ((#file as NSString).lastPathComponent),
               #line,
               #function,
               "unlock")
        maskUserDefaults.resetPasswordExpiryDate()
        dismiss(animated: true) { [weak self] in
            guard let completion = self?.completion else {
                MainTabBarController.currentTabBarController()?.selectedIndex = 1
                return
            }
            completion(nil)
        }
    }
    
    @objc
    func onReturn() {
        view.endEditing(true)
    }
}

extension UnlockViewController: PanModalPresentable {
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
struct UnlockViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = UnlockViewController()
        let safeBottom = vc.view.safeAreaInsets.bottom
        let height = 216 + safeBottom + 142
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
