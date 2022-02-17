//
//  RedPackageView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/1/26.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftUI
import UIKit
import UStack

class RedPackageView: UIView {
    init() {
        super.init(frame: .zero)
        backgroundColor = Asset.Colors.RedPackage.background.color
        setupUI()
    }
    
    private lazy var backgroundImage: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.RedPackage.redPackage.image
        return imageView
    }()
    
    private lazy var attachedMessageLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH6
        label.textColor = Asset.Colors.Public.white.color
        return label
    }()
    
    private lazy var infoLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH7
        label.textColor = Asset.Colors.Public.warnings.color
        return label
    }()
    
    private lazy var expireLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.RH10
        label.textColor = Asset.Colors.Public.warnings.color
        return label
    }()
    
    private lazy var statusLabel: UIButton = {
        let button = UIButton(type: .custom)
        button.isUserInteractionEnabled = false
        button.titleLabel?.font = FontStyles.RH10
        button.setTitleColor(Asset.Colors.Public.white.color, for: .normal)
        button.isHidden = true
        NSLayoutConstraint.activate([
            button.heightAnchor.constraint(equalToConstant: 26)
        ])
        button.contentEdgeInsets = UIEdgeInsets(top: 5, left: 7, bottom: 5, right: 7)
        button.setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Twitter.mask.color), for: .normal)
        button.applyCornerRadius(radius: 14)
        return button
    }()
    
    private lazy var fromLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.RH10
        label.textColor = Asset.Colors.Public.white.color
        return label
    }()
    
    private lazy var vStackLeft: VStackView = {
        let vStack = VStackView(spacing: 4, distribution: .fill, alignment: .fill) {
            attachedMessageLabel
            infoLabel
            UStack.Spacer()
            expireLabel
        }
        return vStack
    }()
    
    private lazy var vStackRight: VStackView = {
        let vStack = VStackView(spacing: 0, distribution: .fill, alignment: .trailing) {
            statusLabel
            UStack.Spacer()
            fromLabel
        }
        return vStack
    }()
    
    func updateWithPayload(payload: RedPacketInteractivePayload) {
        guard let address = WalletCoreService.shared.getCurrentAccount()?.address else {
            return
        }
        let network = WalletCoreStorage.getCurrentNetwork()
        let status = payload.parseStatus(accountAddress: address, network: network)
        updateStatusLabel(status: status)
        updateSubtitle(payload: payload)
        updateExpireLabel(payload: payload)
        updateFromLabel(payload: payload)
        switch payload.redpacketPayload {
        case .either(let tokenPayload):
            attachedMessageLabel.text = tokenPayload.payload?.sender.message
            
        case .or(let nftPayload):
            attachedMessageLabel.text = nftPayload.message
        }
    }
    
    private func updateSubtitle(payload: RedPacketInteractivePayload) {
        infoLabel.text = payload.infoDescription
    }
    
    private func updateStatusLabel(status: RedpacketStatus) {
        let shouldShowStatusLabel = status.isClaimed
            || status.isRefunded
            || status.isExpired
            || status.isEmpty
        
        statusLabel.isHidden = !shouldShowStatusLabel
        
        let statusText: String? = {
            if status.isClaimed {
                return L10n.Scene.OpenRedPackage.claimed
            }
            if status.isRefunded {
                return L10n.Scene.OpenRedPackage.refunded
            }
            if status.isExpired {
                return L10n.Scene.OpenRedPackage.expired
            }
            if status.isEmpty {
                return L10n.Scene.OpenRedPackage.empty
            }
            return L10n.Scene.OpenRedPackage.onGoing
        }()
        statusLabel.setTitle(statusText, for: .normal)
    }
    
    private func updateExpireLabel(payload: RedPacketInteractivePayload) {
        let expiredDescription: String? = {
            switch payload.redpacketPayload {
            case .either(let tokenPayload):
                return tokenPayload.endTimeDescription
                
            case .or(let nftPayload):
                // TODO: nft payload expiration time
                return nil
            }
        }()
        expireLabel.text = expiredDescription
    }
    
    private func updateFromLabel(payload: RedPacketInteractivePayload) {
        let senderName: String? = {
            switch payload.redpacketPayload {
            case .either(let tokenPayload):
                return tokenPayload.fromDescription
                
            case .or(let nftPayload):
                // TODO: NFt sender name
                return nil
            }
        }()
        fromLabel.text = senderName
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func setupUI() {
        withSubViews {
            backgroundImage
            vStackLeft
            vStackRight
        }
        vStackLeft.isLayoutMarginsRelativeArrangement = true
        vStackLeft.layoutMargins = UIEdgeInsets(top: 12, left: 12, bottom: 12, right: 12)
        vStackRight.isLayoutMarginsRelativeArrangement = true
        vStackRight.layoutMargins = UIEdgeInsets(top: 12, left: 12, bottom: 12, right: 12)
        NSLayoutConstraint.activate([
            vStackLeft.topAnchor.constraint(equalTo: topAnchor),
            vStackLeft.leadingAnchor.constraint(equalTo: leadingAnchor),
            vStackLeft.trailingAnchor.constraint(equalTo: trailingAnchor),
            vStackLeft.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
        NSLayoutConstraint.activate([
            vStackRight.topAnchor.constraint(equalTo: topAnchor),
            vStackRight.leadingAnchor.constraint(equalTo: leadingAnchor),
            vStackRight.trailingAnchor.constraint(equalTo: trailingAnchor),
            vStackRight.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
        NSLayoutConstraint.activate([
            backgroundImage.widthAnchor.constraint(equalToConstant: 255),
            backgroundImage.heightAnchor.constraint(equalToConstant: 155),
            backgroundImage.centerXAnchor.constraint(equalTo: centerXAnchor),
            backgroundImage.centerYAnchor.constraint(equalTo: centerYAnchor, constant: 14)
        ])
    }
}
