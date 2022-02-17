//
//  WalletListWalletTableViewCell.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import UIKit
import WalletConnectSwift

protocol WalletListWalletTableViewCellDelegate: AnyObject {
    func walletTableViewCell(cell: WalletListWalletTableViewCell, moreBtnClicked: UIButton)
}

class WalletListWalletTableViewCell: UITableViewCell {
    lazy var selectBackgroudView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.layer.cornerRadius = 12
        view.clipsToBounds = true
        view.isHidden = true
        
        return view
    }()
    
    lazy var avatar: AvatarView = {
        let view = AvatarView(title: nil)
        view.applyCornerRadius(radius: 16, cornerCurve: .circular)
        return view
    }()
    
    lazy var avatarIcon: UIImageView = {
        let imageView = UIImageView()
        return imageView
    }()
    
    lazy var walletIconContainer: UIView = {
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
    
    lazy var walletIcon: UIImageView = {
        let imageView = UIImageView()
        imageView.applyCornerRadius(radius: 8)
        imageView.layer.borderWidth = 1.5
        imageView.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
        return imageView
    }()
    
    lazy var avatarStackView: UIStackView = {
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
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.lineBreakMode = .byTruncatingMiddle
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        return label
    }()
    
    lazy var subtitleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Text.normal.color
        return label
    }()
    
    lazy var importLabel: UIView = {
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
    
    lazy var moreButton: UIButton = {
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
    
    lazy var checkButton: UIButton = {
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
    
    lazy var hStackView0: UIStackView = {
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
    
    lazy var titleStackView: UIStackView = {
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
    
    lazy var vStackView1: UIStackView = {
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
    
    lazy var hStackView2: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        
        view.addArrangedSubview(moreButton)
        view.addArrangedSubview(checkButton)
        return view
    }()
    
    weak var delegate: WalletListWalletTableViewCellDelegate?
    
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
    
    func update(data: WalletListViewModel.WalletWrapType) {
        titleLabel.text = data.name
        moreButton.isHidden = false
        checkButton.isHidden = true
        update(
            quantity: data.balance.stringValue,
            symbol: data.network.mainToken?.symbol
        )
        
        importLabel.isHidden = !data.isImported
        selectBackgroudView.isHidden = !data.selected
        avatar.title = data.name
        avatar.isHidden = data.isFromWalletConnect
        walletIconContainer.isHidden = !data.isFromWalletConnect
        if data.isFromWalletConnect {
            avatarIcon.image = Asset.Images.Scene.WalletConnect.walletConnect.image
            if let name = data.account.session?.walletInfo?.peerMeta.name,
               let walletEntry = WalletConnectClient.walletEntryWithName(name: name) {
                walletIcon.isHidden = false
                walletIcon.setNetworkImage(url: walletEntry.imageURL)
            } else {
                walletIcon.isHidden = true
            }
        }
    }
    
    func walletConnectUpdate(data: WalletListViewModel.WalletWrapType) {
        update(data: data)
        moreButton.isHidden = true
    }
}

private extension WalletListWalletTableViewCell {
    func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        contentView.addSubview(selectBackgroudView)
        contentView.addSubview(hStackView0)

        selectBackgroudView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            selectBackgroudView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            selectBackgroudView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            contentView.bottomAnchor.constraint(equalTo: selectBackgroudView.bottomAnchor, constant: 8),
            contentView.trailingAnchor.constraint(equalTo: selectBackgroudView.trailingAnchor)
        ])
        
        hStackView0.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            hStackView0.topAnchor.constraint(equalTo: contentView.topAnchor),
            hStackView0.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            contentView.bottomAnchor.constraint(equalTo: hStackView0.bottomAnchor),
            contentView.trailingAnchor.constraint(equalTo: hStackView0.trailingAnchor)
        ])
    }
    
    func bindAction() {
        moreButton.addTarget(self, action: #selector(onEditBtnDidClick), for: .touchUpInside)
    }
    
    func update(quantity: String?, symbol: String?) {
        subtitleLabel.text = "\(quantity ?? "0") \(symbol ?? "")"
    }

    @objc
    func onEditBtnDidClick() {
        delegate?.walletTableViewCell(cell: self, moreBtnClicked: moreButton)
    }
}

extension WalletListWalletTableViewCell {
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
            walletIcon.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletListWalletTableViewCellPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let cell = WalletListWalletTableViewCell(style: .default, reuseIdentifier: nil)
                cell.titleLabel.text = "0xec4eec4eec4eec4eec4e1cd0"
                cell.subtitleLabel.text = "0 ETH"
                cell.selectBackgroudView.isHidden = false
                cell.contentView.backgroundColor = .red
                
                cell.frame = CGRect(x: 0, y: 0, width: 272, height: 85)
                return cell
            }
            .previewLayout(.fixed(width: 272, height: 85))
            
            UIViewPreview {
                let cell = WalletListWalletTableViewCell(style: .default, reuseIdentifier: nil)
                cell.titleLabel.text = "0xec4e...1cd0"
                cell.subtitleLabel.text = "0 ETH"
                cell.importLabel.isHidden = false
                
                cell.frame = CGRect(x: 0, y: 0, width: 272, height: 85)
                return cell
            }
            .previewLayout(.fixed(width: 272, height: 85))

            UIViewPreview {
                let cell = WalletListWalletTableViewCell(style: .default, reuseIdentifier: nil)
                cell.titleLabel.text = "0xec4e...1cd0"
                cell.subtitleLabel.text = "0 ETH"
                
                cell.frame = CGRect(x: 0, y: 0, width: 272, height: 85)
                return cell
            }
            .previewLayout(.fixed(width: 272, height: 85))
        }
    }
}
#endif
