//
//  BalanceAccountCell.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import UIKit
import UStack

protocol BalanceAccountCellDelegate: AnyObject {
    func balanceAccountCell(cell: BalanceAccountCell, button: UIButton)
}

class BalanceAccountCell: UITableViewCell {
    var accountCardView: AccountCardView
    
    private var disposeBag = Set<AnyCancellable>()
    
    private var accountCardShadowView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private var actionsStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.alignment = .center
        stackView.distribution = .fillEqually
        stackView.spacing = 22
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    private var sendView: ActionView = {
        let view = ActionView()
        view.configWith(image: Asset.Images.Scene.Balance.Button.send.image, title: L10n.Scene.WalletBalance.btnSend)
        view.addSelfConstraints()
        return view
    }()
    
    private var receiveView: ActionView = {
        let view = ActionView()
        view.configWith(image: Asset.Images.Scene.Balance.Button.receive.image, title: L10n.Scene.WalletBalance.btnReceive)
        view.addSelfConstraints()
        return view
    }()
    
    private var historyView: ActionView = {
        let view = ActionView()
        view.configWith(image: Asset.Images.Scene.Balance.Button.history.image, title: L10n.Scene.WalletDetail.walletItemsHistory)
        view.addSelfConstraints()
        return view
    }()
    
    override func layoutSubviews() {
        super.layoutSubviews()
        let shadowLayer = accountCardShadowView.layer
        shadowLayer.shadowOpacity = 1
        shadowLayer.shadowOffset = .zero
        shadowLayer.shadowRadius = 10
        
        let rect = CGRect(x: 36,
                          y: accountCardView.bounds.height,
                          width: accountCardView.bounds.width - 72,
                          height: 10)
        shadowLayer.shadowPath = UIBezierPath(roundedRect: rect, cornerRadius: 20).cgPath
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        accountCardView = AccountCardView()
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        _init()
    }
    
    required init?(coder: NSCoder) {
        accountCardView = AccountCardView()
        super.init(coder: coder)
        _init()
    }
    
    weak var delegate: BalanceAccountCellDelegate?
    private func _init() {
        accountCardView.shadowView = accountCardShadowView
        
        selectionStyle = .none
        backgroundColor = .clear
        
        accountCardView.delegate = self
        accountCardView.translatesAutoresizingMaskIntoConstraints = false
        
        contentView.addSubview(accountCardShadowView)
        contentView.addSubview(accountCardView)
        contentView.addSubview(actionsStackView)
        
        NSLayoutConstraint.activate([
            accountCardView.topAnchor.constraint(
                equalTo: contentView.safeAreaLayoutGuide.topAnchor,
                constant: LayoutConstraints.top),
            accountCardView.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor),
            accountCardView.trailingAnchor.constraint(equalTo: contentView.readableContentGuide.trailingAnchor),
            accountCardView.heightAnchor.constraint(equalToConstant: 186)
        ])
        
        NSLayoutConstraint.activate([
            accountCardShadowView.leadingAnchor.constraint(equalTo: accountCardView.leadingAnchor),
            accountCardShadowView.topAnchor.constraint(equalTo: accountCardView.topAnchor),
            accountCardShadowView.trailingAnchor.constraint(equalTo: accountCardView.trailingAnchor),
            accountCardShadowView.bottomAnchor.constraint(equalTo: accountCardView.bottomAnchor)
        ])
        
        actionsStackView.addArrangedSubview(sendView)
        actionsStackView.addArrangedSubview(receiveView)
        actionsStackView.addArrangedSubview(historyView)
        
        NSLayoutConstraint.activate([
            actionsStackView.topAnchor.constraint(equalTo: accountCardView.bottomAnchor,
                                                  constant: 22),
            actionsStackView.leadingAnchor.constraint(equalTo: accountCardView.leadingAnchor,
                                                      constant: 12),
            actionsStackView.trailingAnchor.constraint(equalTo: accountCardView.trailingAnchor,
                                                       constant: -12),
            actionsStackView.heightAnchor.constraint(equalToConstant: 61),
            actionsStackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor,
                                                     constant: -16)
        ])
        
        sendView
            .cv.tapGesture()
            .sink { [weak self] _ in
                guard let self = self else { return }
                let mainToken = WalletAssetManager.shared.getDefaultMainToken()
                
                if let quantity = mainToken?.quantity {
                    if quantity.compare(NSDecimalNumber.zero) == .orderedSame {
                        self.showBalanceNotEnoughAlert()
                    } else {
                        Coordinator.main.present(
                            scene: .sendTransaction(param: nil),
                            transition: .detail(animated: true))
                    }
                } else {
                    self.showBalanceNotEnoughAlert()
                }
            }
            .store(in: &disposeBag)
        
        receiveView
            .cv.tapGesture()
            .sink { _ in
                guard let defaultAddress = maskUserDefaults.defaultAccountAddress else {
                    return
                }
                Coordinator.main.present(
                    scene: .receiveAddress(
                        network: maskUserDefaults.network,
                        token: nil,
                        address: defaultAddress),
                    transition: .detail(animated: true))
            }
            .store(in: &disposeBag)
        
        historyView
            .cv.tapGesture()
            .sink { _ in
                Coordinator.main.present(scene: .walletHistory, transition: .detail(animated: true))
            }
            .store(in: &disposeBag)
    }
    
    func setup(account: Account?, portfolio: Portfolio?) {
        accountCardView.setup(account: account, portfolio: portfolio)
    }
}

extension BalanceAccountCell: AccountCardViewDelegate {
    func moreButtonDidClick(view: AccountCardView, button: UIButton) {
        delegate?.balanceAccountCell(cell: self, button: button)
    }
}

extension BalanceAccountCell {
    func showBalanceNotEnoughAlert() {
        let mainToken = maskUserDefaults.network.mainToken
        guard let symbol = mainToken?.symbol.uppercased() else { return }
        
        let des = L10n.Common.Alert.TokenBalance.description(symbol, symbol)
        let btnConfirm = L10n.Common.Alert.TokenBalance.btnConfirm(symbol)
        
        let alertController = AlertController(
            title: "",
            message: des,
            confirmButtonText: btnConfirm,
            cancelButtonText: L10n.Common.Controls.cancel,
            imageType: .warning,
            confirmButtonClicked: { _ in
                Coordinator.main.present(scene: .showTransakIntegration, transition: .modal())
            },
            cancelButtonClicked: nil)
        Coordinator.main.present(scene: .alertController(alertController:
            alertController),
        transition: .alertController(completion: nil))
    }
}

extension BalanceAccountCell {
    class ActionView: UIView {
        let imageView: UIImageView = {
            let imageView = UIImageView()
            return imageView
        }()
    
        let titleLabel: UILabel = {
            let label = UILabel()
            label.font = FontStyles.BH6
            label.textColor = Asset.Colors.Text.dark.color
            return label
        }()
    
        init() {
            super.init(frame: .zero)
            withSubViews {
                imageView
                titleLabel
            }
            NSLayoutConstraint.activate([
                imageView.widthAnchor.constraint(equalToConstant: 36),
                imageView.heightAnchor.constraint(equalToConstant: 36),
                imageView.centerXAnchor.constraint(equalTo: centerXAnchor),
                imageView.topAnchor.constraint(equalTo: topAnchor)
            ])
            NSLayoutConstraint.activate([
                titleLabel.topAnchor.constraint(equalTo: imageView.bottomAnchor, constant: 4),
                titleLabel.centerXAnchor.constraint(equalTo: centerXAnchor)
            ])
        }

        @available(*, unavailable)
        required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
        }
    
        func addLayoutConstraints() {
            let width = (UIScreen.main.bounds.width - LayoutConstraints.leading * 2) / 3
            NSLayoutConstraint.activate([
                heightAnchor.constraint(equalToConstant: 61),
                widthAnchor.constraint(equalToConstant: width).priority(.required - 1)
            ])
        }
    
        func config(image: UIImage, title: String) {
            imageView.image = image
            titleLabel.text = title
        }
    }
}
