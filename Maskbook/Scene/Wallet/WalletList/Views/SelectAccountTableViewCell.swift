//
//  SelectAccountTableViewCell.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import UIKit
import WalletConnectSwift

protocol SelectAccountTableViewCellDelegate: AnyObject {
    func walletTableViewCell(cell: SelectAccountTableViewCell, moreBtnClicked: UIButton)
}

class SelectAccountTableViewCell: UITableViewCell {
    private lazy var selectBackgroudView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.layer.cornerRadius = 12
        view.clipsToBounds = true
        view.isHidden = true
        
        return view
    }()
    
    private lazy var avatar: AvatarView = {
        let view = AvatarView(title: nil)
        view.applyCornerRadius(radius: 16, cornerCurve: .circular)
        return view
    }()
    
    private lazy var avatarIcon: UIImageView = {
        let imageView = UIImageView()
        return imageView
    }()
    
    private lazy var walletIconContainer: UIView = {
        let view = UIView()
        avatarIcon.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(avatarIcon)
        NSLayoutConstraint.activate([
            avatarIcon.widthAnchor.constraint(equalToConstant: 32),
            avatarIcon.heightAnchor.constraint(equalToConstant: 32),
            avatarIcon.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            avatarIcon.topAnchor.constraint(equalTo: view.topAnchor)
        ])

        walletIcon.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(walletIcon)
        NSLayoutConstraint.activate([
            walletIcon.widthAnchor.constraint(equalToConstant: 16),
            walletIcon.heightAnchor.constraint(equalToConstant: 16),
            walletIcon.bottomAnchor.constraint(equalTo: avatarIcon.bottomAnchor),
            walletIcon.centerXAnchor.constraint(equalTo: avatarIcon.trailingAnchor)
        ])
        return view
    }()
    
    private lazy var walletIcon: UIImageView = {
        let imageView = UIImageView()
        imageView.applyCornerRadius(radius: 8)
        imageView.layer.borderWidth = 1.5
        imageView.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
        return imageView
    }()
    
    private lazy var avatarStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        
        avatar.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            avatar.widthAnchor.constraint(equalToConstant: 32),
            avatar.heightAnchor.constraint(equalToConstant: 32)
        ])
        view.addArrangedSubview(avatar)
        
        walletIconContainer.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(walletIconContainer)
        NSLayoutConstraint.activate([
            walletIconContainer.widthAnchor.constraint(equalToConstant: 40),
            walletIconContainer.heightAnchor.constraint(equalToConstant: 32)
        ])
        return view
    }()
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.lineBreakMode = .byTruncatingMiddle
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        return label
    }()
    
    private lazy var subtitleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Text.normal.color
        return label
    }()
    
    private lazy var importLabel: UIView = {
        let view = UIButton()
        view.isUserInteractionEnabled = false
        view.setTitle(L10n.Scene.WalletList.walletsListImport, for: .normal)
        view.setTitleColor(Asset.Colors.Public.blue.color, for: .normal)
        view.backgroundColor = Asset.Colors.Public.infoBg.color
        view.layer.cornerRadius = 4
        view.contentEdgeInsets = UIEdgeInsets(top: 3, left: 8, bottom: 3, right: 8)
        view.isHidden = true
        view.titleLabel?.font = FontStyles.BH7
        
        view.setContentCompressionResistancePriority(.required, for: .horizontal)
        view.setContentCompressionResistancePriority(.required, for: .vertical)
        return view
    }()
    
    private lazy var moreButton: UIButton = {
        let btn = HitTestExpandedButton(type: .custom)
        btn.setImage(UIImage(systemName: "ellipsis"), for: .normal)
        btn.tintColor = Asset.Colors.Text.normal.color
        
        btn.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            btn.widthAnchor.constraint(equalToConstant: 24),
            btn.heightAnchor.constraint(equalToConstant: 24)
        ])
        return btn
    }()
    
    private lazy var checkButton: UIButton = {
        let btn = HitTestExpandedButton(type: .custom)
        btn.setImage(Asset.Icon.Cell.cellCheck.image, for: .normal)
        btn.tintColor = Asset.Colors.Text.normal.color
        
        btn.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            btn.widthAnchor.constraint(equalToConstant: 24),
            btn.heightAnchor.constraint(equalToConstant: 24)
        ])
        return btn
    }()
    
    private lazy var hStackView0: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fill
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 20, left: 16, bottom: 20, right: 16)
        
        avatarStackView.translatesAutoresizingMaskIntoConstraints = false
        vStackView1.translatesAutoresizingMaskIntoConstraints = false
        hStackView2.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(avatarStackView)
        view.addArrangedSubview(vStackView1)
        view.addArrangedSubview(hStackView2)
        
        view.setCustomSpacing(8, after: avatarStackView)
        return view
    }()
    
    private lazy var titleStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fill
        view.spacing = 8
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        importLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(titleLabel)
        view.addArrangedSubview(importLabel)
        return view
    }()
    
    private lazy var vStackView1: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .leading
        view.spacing = 8
        
        titleStackView.translatesAutoresizingMaskIntoConstraints = false
        subtitleLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(titleStackView)
        view.addArrangedSubview(subtitleLabel)
        return view
    }()
    
    private lazy var hStackView2: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        
        view.addArrangedSubview(moreButton)
        view.addArrangedSubview(checkButton)
        return view
    }()
    
    weak var delegate: SelectAccountTableViewCellDelegate?
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
        bindAction()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        importLabel.isHidden = true
        moreButton.isHidden = true
        checkButton.isHidden = true
    }
    
    private func update(data: SelectAccountViewModel.WalletWrapType) {
        titleLabel.text = data.name
        update(
            quantity: data.balance.stringValue,
            symbol: data.network.mainToken?.symbol
        )
        
        importLabel.isHidden = !data.isImported
        selectBackgroudView.isHidden = false
        avatar.title = data.name
        avatar.isHidden = data.isFromWalletConnect
        walletIconContainer.isHidden = !data.isFromWalletConnect
        if data.isFromWalletConnect {
            avatarIcon.image = Asset.Images.Scene.WalletConnect.walletConnect.image
            if let name = data.account.session?.walletInfo?.peerMeta.name,
               let walletEntry = WalletConnectClient.walletEntryWithName(name: name)
            {
                walletIcon.isHidden = false
                walletIcon.setNetworkImage(url: walletEntry.imageURL)
            } else {
                walletIcon.isHidden = true
            }
        }
    }

    func editaleUpdate(data: SelectAccountViewModel.WalletWrapType, isEditing: Bool) {
        update(data: data)
        checkButton.isHidden = isEditing ? true : !data.selected
        moreButton.isHidden = !isEditing
    }
    
    func noEditaleUpdate(data: SelectAccountViewModel.WalletWrapType) {
        update(data: data)
        checkButton.isHidden = !data.selected
        moreButton.isHidden = true
    }
}

private extension SelectAccountTableViewCell {
    private func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        contentView.addSubview(selectBackgroudView)
        contentView.addSubview(hStackView0)

        selectBackgroudView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            selectBackgroudView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            selectBackgroudView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: LayoutConstraints.leading),
            selectBackgroudView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -8),
            selectBackgroudView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -LayoutConstraints.trailing)
        ])
        
        hStackView0.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            hStackView0.topAnchor.constraint(equalTo: contentView.topAnchor),
            hStackView0.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: LayoutConstraints.leading),
            hStackView0.bottomAnchor.constraint(equalTo: contentView.bottomAnchor),
            hStackView0.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -LayoutConstraints.trailing)
        ])
    }
    
    private func bindAction() {
        moreButton.addTarget(self, action: #selector(onMoreBtnDidClick), for: .touchUpInside)
    }
    
    private func update(quantity: String?, symbol: String?) {
        subtitleLabel.text = "\(quantity ?? "0") \(symbol ?? "")"
    }

    @objc
    private func onMoreBtnDidClick() {
        delegate?.walletTableViewCell(cell: self, moreBtnClicked: moreButton)
    }
}

extension SelectAccountTableViewCell {
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        walletIcon.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
    }
}
