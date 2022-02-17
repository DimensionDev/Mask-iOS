//
//  MaskTextField.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

// swiftlint:disable identifier_name
final class MaskTextField: UITextField {
    // mark this textfield used for password
    var isPasswordTextField = false {
        willSet {
            if newValue {
                self.isSecureTextEntry = true
                rightView = self.rightEyeButton
                rightViewMode = .always
                rightEyeButton.isSelected = true
            } else {
                self.isSecureTextEntry = false
                rightView = nil
                rightViewMode = .never
            }
        }
    }
    
    private lazy var rightEyeButton: HitTestExpandedButton = {
        let button = HitTestExpandedButton(frame: CGRect(x: 0, y: 0, width: 24, height: 24))
        button.setImage(Asset.Images.Scene.WalletImport.openEyes.image, for: .normal)
        button.setImage(Asset.Images.Scene.WalletImport.closeEyes.image, for: .selected)
        button.addTarget(self, action: #selector(rightEyeButtonAction), for: .touchUpInside)
        return button
    }()
    
    override func rightViewRect(forBounds bounds: CGRect) -> CGRect {
        let eyeSize = CGSize(width: 48, height: 24)
        let y = (frame.height - eyeSize.height) / 2
        return CGRect(origin: CGPoint(x: frame.width - eyeSize.width, y: y), size: eyeSize)
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        _init()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        _init()
    }
}

extension MaskTextField {
    private func _init() {
        self.autocapitalizationType = .none
        self.autocorrectionType = .no
        self.backgroundColor = Asset.Colors.Background.dark.color
        self.textColor = Asset.Colors.Text.dark.color
        self.font = FontStyles.BH5
        self.borderStyle = UITextField.BorderStyle.roundedRect
        let paddingView = UIView(frame: CGRect(x: 0, y: 0, width: 5, height: self.frame.height))
        self.leftView = paddingView
        self.leftViewMode = .always
        
        self.addTarget(self, action: #selector(onReturn), for: .primaryActionTriggered)
        
        self.setupLayer()
    }
    
    private func setupLayer() {
        self.layer.cornerRadius = 8
        self.layer.cornerCurve = .continuous
        self.layer.masksToBounds = true
        self.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
        self.layer.borderWidth = 1
    }
    
    @objc
    private func onReturn() {
        endEditing(true)
    }
    
    @objc
    func rightEyeButtonAction() {
        isSecureTextEntry = !isSecureTextEntry
        self.rightEyeButton.isSelected = isSecureTextEntry
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        self.setupLayer()
    }
}
// swiftlint:enable identifier_name
