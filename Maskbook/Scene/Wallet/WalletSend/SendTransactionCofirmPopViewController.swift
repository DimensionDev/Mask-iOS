//
//  SendTransactionCofirmPopViewController.swift
//  Maskbook
//
//  Created by caiyu on 2021/9/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Combine
import CombineEvent
import PanModal
import UIKit
import UStack
import web3swift
import CoreDataStack
import WebExtension_Shim

enum SendStatus {
    case ready
    case sending
    case sent
    
    var confirmButtonTitle: String {
        switch self {
        case .ready:
            return L10n.Common.Controls.confirm
            
        case .sending:
            return L10n.Common.Controls.sending
            
        case .sent:
            return L10n.Common.Controls.sent
        }
    }
}

// swiftlint:disable force_cast line_length type_body_length file_length
final class SendTransactionCofirmPopViewController: UIViewController {
    typealias ViewModel = SendTransactionConfirmViewModel
    @InjectedProvider(\.vault)
    var vault
    @InjectedProvider(\.userDefaultSettings)
    var settings
    var disposeBag = Set<AnyCancellable>()
    var viewModel: ViewModel
    let toAddress: String?
    let amount: String
    let nonce: BigUInt?
    
    var sendStatus: SendStatus = .ready {
        didSet {
            DispatchQueue.main.async {
                self.updateSendStatus()
            }
        }
    }
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH4
        label.text = L10n.Scene.Sendtransaction.Send.btnSend
        label.textAlignment = .center
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 22)
        ])
        return label
    }()
    
    let toNameLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        label.textAlignment = .center
        label.isHidden = true
        return label
    }()
    
    let toAddressLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH7
        label.textAlignment = .center
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 22)
        ])
        return label
    }()
    
    let tokenImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.applyCornerRadius(radius: 12)
        imageView.snp.makeConstraints { $0.width.height.equalTo(24) }
        return imageView
    }()
    
    let tokenAmountLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH6
        label.snp.makeConstraints { $0.height.equalTo(24) }
        return label
    }()
    
    let tokenPriceLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH6
        label.textAlignment = .right
        label.snp.makeConstraints { $0.height.equalTo(24) }
        return label
    }()
    
    let gasFeeLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH6
        label.text = L10n.Scene.Sendtransaction.Sendconfirmpop.gasfee
        return label
    }()
    
    let gasFeeEthLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH6
        label.textAlignment = .right
        return label
    }()
    
    let gasFeeEditLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.blue.color
        label.font = FontStyles.BH6
        label.textAlignment = .right
        label.text = L10n.Scene.Sendtransaction.Sendconfirmpop.edit
        return label
    }()
    
    let totalLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH6
        label.text = L10n.Scene.Sendtransaction.Sendconfirmpop.total
        return label
    }()
    
    let totalPriceLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH6
        label.textAlignment = .right
        return label
    }()
    
    let messageLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH6
        return label
    }()
    
    let messageContentLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH6
        label.textAlignment = .right
        return label
    }()
    
    lazy var cancelButton: SecondaryButton = {
        let btn = SecondaryButton(title: L10n.Common.Controls.cancel)
        btn.addTarget(self, action: #selector(cancelClicked(_:)), for: .touchUpInside)

        NSLayoutConstraint.activate([
            btn.heightAnchor.constraint(equalToConstant: 54)
        ])
        return btn
    }()
    
    lazy var confirmButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Common.Controls.confirm)
        btn.addTarget(self, action: #selector(confirmClicked(_:)), for: .touchUpInside)
        NSLayoutConstraint.activate([
            btn.heightAnchor.constraint(equalToConstant: 54)
        ])
        return btn
    }()
    
    private lazy var headStackView = VStackView(spacing: 8) {
        Spacer(height: 24)
        titleLabel
        Spacer(height: 9)
        (toNameLabel.text?.isEmpty == false ? toNameLabel : nil)
        toAddressLabel
    }
    
    private lazy var editFeeGasStackView = HStackView {
        gasFeeLabel
        Spacer()
        gasFeeEthLabel
        Spacer(width: 8)
        gasFeeEditLabel
    }.cv.apply {
        NSLayoutConstraint.activate([
            $0.heightAnchor.constraint(equalToConstant: 22)
        ])
    }
    
    private lazy var gasFeeStackView = VStackView(spacing: 16) {
        HStackView {
            tokenImageView
            Spacer(width: 8)
            tokenAmountLabel
            tokenPriceLabel
        }.cv.apply {
            NSLayoutConstraint.activate([
                $0.heightAnchor.constraint(equalToConstant: 24)
            ])
        }
        editFeeGasStackView
        HStackView {
            totalLabel
            totalPriceLabel
        }.cv.apply {
            NSLayoutConstraint.activate([
                $0.heightAnchor.constraint(equalToConstant: 22)
            ])
        }
    }.cv.apply {
        NSLayoutConstraint.activate([
            $0.heightAnchor.constraint(equalToConstant: 100)
        ])
    }
    
    private lazy var messageStackView = HStackView {
        messageLabel
        messageContentLabel
    }.cv.apply {
        $0.isHidden = true
    }
    
    private lazy var buttonStackView = HStackView(spacing: 20, distribution: .fillEqually, alignment: .center) {
        cancelButton
        confirmButton
    }.cv.apply {
        NSLayoutConstraint.activate([
            $0.heightAnchor.constraint(equalToConstant: 54)
        ])
    }
    
    private lazy var backStackView = VStackView(spacing: 20) {
        headStackView
        gasFeeStackView
//        messageStackView
        buttonStackView
        Spacer()
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
    }
    
    init(sendConfirmViewModel: SendConfirmViewModel, toAddress: String, amount: String, nonce: BigUInt?) {
        self.viewModel = SendTransactionConfirmViewModel(selectedToken: sendConfirmViewModel.selectedTokenPublisher.value, gasPrice: sendConfirmViewModel.gasPricePublisher.value, gasLimit: sendConfirmViewModel.gasLimitPublisher.value, gasFeeNetModel: sendConfirmViewModel.gasFeeNetModelTokenPublisher.value)
        self.toAddress = toAddress
        self.amount = amount
        self.nonce = nonce
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder aDecoder: NSCoder) {
        fatalError("shoud not be called")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = Asset.Colors.Background.normal.color
        view.withSubViews {
            backStackView
        }
        
        NSLayoutConstraint.activate([
            backStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            backStackView.topAnchor.constraint(equalTo: view.topAnchor, constant: 25),
            backStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing),
            backStackView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor, constant: -24)
        ])
        bindSubscriptions()
    }
        
    func bindSubscriptions() {
        viewModel.selectedTokenPublisher.combineLatest(UserDefaultPublishers.currency)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] selectedToken, currency in
                guard let self = self,
                      let url = selectedToken?.logoUrl else { return }
                let tokenPrice: String = selectedToken?.calculateAmountValue(quantity: self.amount) ?? "0"
                self.tokenPriceLabel.text = "\(currency.symbol)\(tokenPrice)"
                self.tokenImageView.setNetworkImage(url: url)
                self.tokenAmountLabel.text = self.amount
                self.toAddressLabel.text = self.toAddress
            }
            .store(in: &disposeBag)
        
        viewModel.gasPricePublisher.combineLatest(viewModel.gasLimitPublisher)
                 .receive(on: DispatchQueue.main)
                 .sink { [weak self] gasPriceValue, gasLimitValue in
                    guard let self = self,
                            let gasPriceValue = gasPriceValue,
                            let costEth = Web3.Utils.formatToEthereumUnits(gasPriceValue * gasLimitValue, toUnits: .eth, decimals: 4) else { return }
                     
                     let token = WalletAssetManager.shared.getDefaultMainToken()
                     self.gasFeeEthLabel.text = "\(costEth) \(maskUserDefaults.network.mainToken?.symbol ?? "")"
                     let tokenValue = NSDecimalNumber(string: self.viewModel.selectedTokenPublisher.value?.calculateAmountValue(quantity: self.amount))
                     let gasValue = NSDecimalNumber(string: EthUtil.getGasFee(gwei: gasPriceValue, gasLimit: gasLimitValue, price: token?.price as! Double))
                     
                     let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 2, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
                     let totalValue = tokenValue.adding(gasValue).rounding(accordingToBehavior: roundBehavior)
                     if totalValue.compare(NSDecimalNumber(string: "0.01")) == .orderedAscending{
                         self.totalPriceLabel.text = "\(maskUserDefaults.currency.symbol) < 0.01"
                     } else{
                         self.totalPriceLabel.text = "\(maskUserDefaults.currency.symbol)\(totalValue.stringValue)"
                     }
                  
                 }
                .store(in: &disposeBag)
        
        editFeeGasStackView
            .gesture()
            .receive(on: DispatchQueue.main)
            .sink { [weak self, weak editFeeGasStackView] _ in
                guard let self = self else { return }
                Coordinator.main.present(
                    scene: .gasFee(delegate: self, gasLimit: self.viewModel.gasLimitPublisher.value),
                    transition: .panModel(animated: true)
                )
            }
            .store(in: &disposeBag)
    }
    
    private func handleConfirmClicked(password: String) {
                guard let fromAddress = maskUserDefaults.defaultAccountAddress  else { print("fromAddress is illegal"); return }
                guard let toAddress = self.toAddress else { print("address is empty"); return }
                guard let token = self.viewModel.selectedTokenPublisher.value else { return }


                self.sendStatus = .sending
                
        if let nonce = self.nonce {
            self.viewModel.sendTransaction(password: password, amount: self.amount, toAddress: toAddress, fromAddress: fromAddress, nonce: self.nonce!) { [weak self] result in
                DispatchQueue.main.async {
                    switch result {
                    case .success(let txhash):
                        self?.sendStatus = .sent
                        let recentAddress = RecentlyAddress(address: toAddress, chainId: Int64(maskUserDefaults.network.networkId))
                        maskUserDefaults.addRecentlyAddress(address: recentAddress)
                        let transactionInfo = PendingTransaction.TranscationInfo(gaslimit: self?.viewModel.gasLimitPublisher.value, gasPrice: self?.viewModel.gasPricePublisher.value, amount: self?.amount ?? "0", toAddress: toAddress, gasNetModel: self?.viewModel.gasFeeNetModelTokenPublisher.value, token: token)
                        let history = TransactionHistory(txHash: txhash ?? "", asset: token, toAddress: toAddress, amount: self?.amount ?? "0")
                        PendingTransactionManager.shared.addPendingTrancation(txHash: txhash ?? "", history: history, transcationInfo:transactionInfo, nonce: nonce)
                        self?.dismiss(animated: true, completion: {
                            Coordinator.main.present(scene: .walletHistory,
                                                     transition: .replaceCurrentNavigationWithoutRoot(tab: .wallet, animated: true))
//                            Coordinator.main.present(scene: .balance, transition: .replaceCurrentNavigation(tab: .wallet, animated: true)) {
//                                Coordinator.main.present(scene: .walletHistory, transition: .detail(animated: true))
//                            }
                        })
                        
                    case .failure(let error):
                        self?.sendStatus = .ready
                        let alertController = AlertController(title: error.localizedDescription, message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error)
                        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
                    }
                }
            }

        } else {
            Web3ProviderFactory.provider?.eth.getTransactionCountPromise(address: fromAddress).done({ nonce in
                self.viewModel.sendTransaction(password: password, amount: self.amount, toAddress: toAddress, fromAddress: fromAddress, nonce: nonce) { [weak self] result in
                    DispatchQueue.main.async {
                        switch result {
                        case .success(let txhash):
                            self?.sendStatus = .sent
                            let recentAddress = RecentlyAddress(address: toAddress, chainId: Int64(maskUserDefaults.network.networkId))
                            maskUserDefaults.addRecentlyAddress(address: recentAddress)
                            let transactionInfo = PendingTransaction.TranscationInfo(gaslimit: self?.viewModel.gasLimitPublisher.value, gasPrice: self?.viewModel.gasPricePublisher.value, amount: self?.amount ?? "0", toAddress: toAddress, gasNetModel: self?.viewModel.gasFeeNetModelTokenPublisher.value, token: token)
                            let history = TransactionHistory(txHash: txhash ?? "", asset: token, toAddress: toAddress, amount: self?.amount ?? "0")
                            PendingTransactionManager.shared.addPendingTrancation(txHash: txhash ?? "", history: history, transcationInfo:transactionInfo, nonce: nonce)
                            self?.dismiss(animated: true, completion: {
                                Coordinator.main.present(scene: .walletHistory,
                                                         transition: .replaceCurrentNavigationWithoutRoot(tab: .wallet, animated: true))
//                                Coordinator.main.present(scene: .balance, transition: .replaceCurrentNavigation(tab: .wallet, animated: true)) {
//                                    Coordinator.main.present(scene: .walletHistory, transition: .detail(animated: true))
//                                }
                            })
                            
                        case .failure(let error):
                            self?.sendStatus = .ready
                            let alertController = AlertController(title: error.localizedDescription, message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error)
                            Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
                        }
                    }
                }
            })
        }
    }
}

extension SendTransactionCofirmPopViewController: GasFeeBackDelegate {
    func getGasFeeAction(gasFeeModel: GasFeeCellItem) {
        guard let gwei = BigUInt(gasFeeModel.gWei), let gasLimitValut = BigUInt(gasFeeModel.gasLimit) else {
            return
        }
        self.viewModel.gasPricePublisher.value = gwei * (BigUInt(10).power(9))
        self.viewModel.gasLimitPublisher.value = gasLimitValut
        if maskUserDefaults.network == .eth {
            self.viewModel.maxFeePerGasPublisher.value = Web3.Utils.parseToBigUInt(gasFeeModel.suggestedMaxFeePerGas , units: .Gwei)
            self.viewModel.maxInclusionFeePerGasPublisher.value = Web3.Utils.parseToBigUInt(gasFeeModel.suggestedMaxPriorityFeePerGas , units: .Gwei)
        }
    }
}

extension SendTransactionCofirmPopViewController {
    @objc
    func confirmClicked(_ sender: UIButton) {
        if let currentAccount = WalletCoreService.shared.getCurrentAccount(),
           currentAccount.fromWalletConnect {
            handleConfirmClicked(password: "")
        } else {
            vault.getWalletPassword()
                .sink(receiveCompletion: { _ in }) { [weak self] password in
                    self?.handleConfirmClicked(password: password)
                }
                .store(in: &disposeBag)
        }
    }
    
    @objc
    func cancelClicked(_ sender: UIButton) {
        dismiss(animated: true, completion: nil)
    }
    
    private func updateSendStatus() {
        confirmButton.setTitle(sendStatus.confirmButtonTitle, for: .normal)
        switch sendStatus {
        case .ready:
            confirmButton.isEnabled = true
            
        case .sending:
            confirmButton.isEnabled = false
            
        case .sent:
            confirmButton.isEnabled = true
        }
    }
}

extension SendTransactionCofirmPopViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        return nil
    }
    
    var longFormHeight: PanModalHeight {
        return .intrinsicHeight
    }
    
    var allowsDragToDismiss: Bool {
        false
    }
}

// swiftlint:disable line_length
extension TransactionHistory {
    init(txHash: String,
         asset: Token,
         toAddress: String,
         amount: String) {

        self.id = txHash
        self.type = .send
        self.status = .pending
        self.name = self.type.rawValue
        self.gasFee = nil
        self.gasPrice = nil
        let time = Int(round(Date().timeIntervalSince1970))
        self.timeAt = TimeInterval(time)
        let historyAsset = TransactionHistory.Asset(assetCode: asset.identifier ?? "",
                                                    decimals: Int(asset.decimal),
                                                    iconUrl: URL(string: asset.logoUrl ?? ""),
                                                    price: (asset.price ?? Decimal.zero as NSDecimalNumber) as Decimal,
                                                    isDisplayable: true,
                                                    isVerified: true,
                                                    name: asset.name,
                                                    symbol: asset.symbol ?? "",
                                                    type: nil)
        
        let value = NSDecimalNumber(string: amount).multiplying(byPowerOf10: asset.decimal)
        
        let change = TransactionHistory.TransactionChange(asset: historyAsset,
                                                          value:value as Decimal,
                                                          address_from: maskUserDefaults.defaultAccountAddress ?? "",
                                                          address_to: toAddress,
                                                          price: historyAsset.price)
        self.change = change
    }
}
// swiftlint:enable line_length file_length

