//
//  TertiaryButton.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/1/26.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit

class TertiaryButton: UIButton {
    private lazy var titleStack: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.spacing = 8
        view.isUserInteractionEnabled = false
        
        view.addArrangedSubview(titleEmbedButton)
        view.addArrangedSubview(indicator)
        return view
    }()
    
    private lazy var titleEmbedButton: UIButton = {
        let btn = UIButton()
        
        btn.titleLabel?.font = FontStyles.BH5
        return btn
    }()
    
    let indicator = UIActivityIndicatorView(style: .medium).cv.apply { view in
        view.color = Asset.Colors.Twitter.buttonText.color
        view.hidesWhenStopped = true
    }
    
    override func setTitle(_ title: String?, for state: UIControl.State) {
        titleEmbedButton.setTitle(title, for: state)
    }
    
    override var isEnabled: Bool {
        set {
            titleEmbedButton.isEnabled = newValue
        }
        
        get {
            titleEmbedButton.isEnabled
        }
    }
    
    init(title: String) {
        super.init(frame: .zero)
        
        titleEmbedButton.setTitleColor(Asset.Colors.Twitter.buttonText.color, for: .normal)
        titleEmbedButton.setTitleColor(Asset.Colors.Twitter.buttonText.color, for: .disabled)
        titleEmbedButton.setTitle(title, for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Twitter.strong.color),
                           for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Twitter.strong.color.withAlphaComponent(0.5)),
                           for: .disabled)
        layer.cornerRadius = 24
        clipsToBounds = true
        
        addSubview(titleStack)
        titleStack.snp.makeConstraints { make in
            make.center.equalToSuperview()
        }
    }
    
    init(image: UIImage) {
        super.init(frame: .zero)
        
        setTitleColor(Asset.Colors.Text.lighter.color, for: .normal)
        setImage(image, for: .normal)
        setImage(image, for: .disabled)
        setImage(image, for: .selected)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Twitter.strong.color),
                           for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Twitter.strong.color.withAlphaComponent(0.5)),
                           for: .disabled)
        layer.cornerRadius = 24
        clipsToBounds = true
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Twitter.strong.color),
                           for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Twitter.strong.color.withAlphaComponent(0.5)),
                           for: .disabled)
    }
}
