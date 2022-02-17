//
//  CreateWalletMultichainView.swift
//  Maskbook
//
//  Created by BradGao on 2021/11/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class CreateWalletMultichainView: UIView {
    lazy var bgView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.container.color
        view.layer.cornerRadius = 12
        view.clipsToBounds = true
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.CreateWallet.multichainWalletTitle
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        return label
    }()
    
    lazy var questionButton: UIButton = {
        let button = UIButton(type: .custom)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.setImage(Asset.Images.Scene.WalletAdd.question.image, for: .normal)
        return button
    }()
    
    lazy var coinImageView: UIImageView = {
        let view = UIImageView()
        view.image = Asset.Images.Scene.WalletAdd.multichainIcon.image
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 64),
            view.heightAnchor.constraint(equalToConstant: 32)
        ])
        return view
    }()
    
    lazy var hStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fill
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 12, left: 16, bottom: 12, right: 16)
        view.spacing = 8
        
        view.addArrangedSubview(coinImageView)
        view.addArrangedSubview(titleLabel)
        return view
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupUI()
    }
    
    private func setupUI() {
        backgroundColor = Asset.Colors.Background.normal.color
        addSubview(bgView)
        addSubview(hStackView)
        addSubview(questionButton)

        bgView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            bgView.topAnchor.constraint(equalTo: topAnchor, constant: 0),
            bgView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 0),
            bottomAnchor.constraint(equalTo: bgView.bottomAnchor, constant: 0),
            trailingAnchor.constraint(equalTo: bgView.trailingAnchor, constant: 0)
        ])
        
        hStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            hStackView.topAnchor.constraint(equalTo: bgView.topAnchor),
            hStackView.leadingAnchor.constraint(equalTo: bgView.leadingAnchor),
            bgView.bottomAnchor.constraint(equalTo: hStackView.bottomAnchor),
            bgView.trailingAnchor.constraint(equalTo: hStackView.trailingAnchor)
        ])
        
        NSLayoutConstraint.activate([
            questionButton.widthAnchor.constraint(equalToConstant: 20),
            questionButton.heightAnchor.constraint(equalToConstant: 20),
            questionButton.centerYAnchor.constraint(equalTo: self.centerYAnchor),
            questionButton.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -28)
        ])
        
        questionButton.addTarget(self, action: #selector(questionButtonDidClicked), for: .touchUpInside)
    }
    
    @objc
    private func questionButtonDidClicked() {
        Coordinator.main.present(scene: .walletMultichainAlert, transition: .alertController(completion: nil))
    }
}
