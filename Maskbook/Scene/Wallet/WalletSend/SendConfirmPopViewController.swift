//
//  SendConfirmPopViewController.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Combine
import CombineEvent
import PanModal
import PromiseKit
import UIKit
import UStack
import WalletConnectSwift
import web3swift

// swiftlint:disable force_cast line_length type_body_length file_length
protocol SendConfirmPopViewDelegate: AnyObject {
    func web3TransactionResponse(response: Web3MessageResolver.Web3TransactionResponse)
}

final class SendConfirmPopViewController: UIViewController {
    @InjectedProvider(\.vault)
    var vault
    var disposeBag = Set<AnyCancellable>()
    private var web3Request: MaskWeb3MessageRequest?
    private var resolver: Resolver<String>?

    weak var web3delegate: SendConfirmPopViewDelegate?
    
    private var walletConnectRequest: Request?
    weak var walletConnectDelegate: WalletConnectSendResponseDelegate?
    
    typealias ViewModel = SendConfirmPopViewModel
    var viewModel: ViewModel
    
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
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    let tokenAmountLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH6
        return label
    }()
    
    let tokenPriceLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH6
        label.textAlignment = .right
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
        btn.isEnabled = false
        return btn
    }()
    
    private lazy var headStackView = VStackView(spacing: 8) {
        Spacer(height: 25)
        titleLabel
        Spacer(height: 9)
        toNameLabel
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
    
    private lazy var gasFeeStackView = VStackView(spacing: 8) {
        HStackView {
            tokenImageView
            tokenAmountLabel
            tokenPriceLabel
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
        messageStackView
        buttonStackView
        Spacer()
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
    }
    
    init(transaction: EthereumTransaction, transactionOptions: TransactionOptions, request: MaskWeb3MessageRequest) {
        self.viewModel = SendConfirmPopViewModel(transaction: transaction, transactionOptions: transactionOptions)
        self.web3Request = request
        super.init(nibName: nil, bundle: nil)
    }
    
    init(transaction: EthereumTransaction, transactionOptions: TransactionOptions, request: Request) {
        self.viewModel = SendConfirmPopViewModel(transaction: transaction, transactionOptions: transactionOptions)
        self.walletConnectRequest = request
        super.init(nibName: nil, bundle: nil)
    }
    
    init(transaction: EthereumTransaction, transactionOptions: TransactionOptions, resolver: Resolver<String>?) {
        self.resolver = resolver
        self.viewModel = SendConfirmPopViewModel(transaction: transaction, transactionOptions: transactionOptions, resolver: resolver)
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder aDecoder: NSCoder) {
        fatalError("shoud not be called")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.withSubViews {
            backStackView
        }
        
        NSLayoutConstraint.activate([
            backStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 22),
            backStackView.topAnchor.constraint(equalTo: view.topAnchor, constant: 25),
            backStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -22),
            backStackView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor)
        ])
        bindSubscriptions()
    }
        
    func bindSubscriptions() {
        viewModel.transactionPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] ethTransaction in
                guard let self = self,
                      let transaction = ethTransaction,
                      let gasfeePrice = self.calcGasFeePriceText(transaction: transaction),
                      let totalPriceText = self.calcTotalPriceText(transaction: transaction) else { return }
                self.toAddressLabel.text = transaction.to.address
                self.gasFeeEthLabel.text = gasfeePrice
                self.totalPriceLabel.text = totalPriceText
            }
            .store(in: &disposeBag)
        
        editFeeGasStackView
            .gesture()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self,
                      let gaslimit = self.viewModel.transactionPublisher.value?.gasLimit else { return }
                Coordinator.main.present(scene: .gasFee(delegate: self, gasLimit: gaslimit), transition: .panModel(animated: true))
            }
            .store(in: &disposeBag)
        
        viewModel.gasPricePublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] newGasPrice in
                if let validGasPrice = newGasPrice {
                    self?.viewModel.transactionPublisher.value?.gasPrice = validGasPrice
                    guard let self = self,
                          let transaction = self.viewModel.transactionPublisher.value,
                          let gasfeePrice = self.calcGasFeePriceText(transaction: transaction),
                          let totalPriceText = self.calcTotalPriceText(transaction: transaction) else { return }
                    self.gasFeeEthLabel.text = gasfeePrice
                    self.totalPriceLabel.text = totalPriceText
                    self.sendStatus = .ready
                } else {
                    self?.confirmButton.isEnabled = false
                }
            }
            .store(in: &disposeBag)
    }
    
    private func calcGasFeePriceText(transaction: EthereumTransaction) -> String? {
        guard let costEth = Web3.Utils.formatToEthereumUnits(transaction.gasLimit * transaction.gasPrice, toUnits: .eth, decimals: 4) else {
            return nil
        }
        return "\(costEth) \(maskUserDefaults.network.mainToken?.symbol ?? "")"
    }
    
    private func calcTotalPriceText(transaction: EthereumTransaction) -> String? {
        guard let costEth = Web3.Utils.formatToEthereumUnits(transaction.gasLimit * transaction.gasPrice, toUnits: .eth, decimals: 4) else {
            return nil
        }
        let amount = NSDecimalNumber(string: costEth).adding(NSDecimalNumber(string: Web3.Utils.formatToEthereumUnits(transaction.value ?? BigUInt(0), toUnits: .eth, decimals: 8)))
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 2, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return "\(maskUserDefaults.currency.symbol)\(EthUtil.calculateTokenPrice(amount: amount.rounding(accordingToBehavior: roundBehavior).stringValue))"
    }
    
    private func handleConfirmClicked() {
        vault.getWalletPassword()
            .sink(receiveCompletion: { _ in }) { [weak self] password in
                self?.sendStatus = .sending
                self?.viewModel.sendTransaction(password: password) { [weak self] result in
                    switch result {
                    case .success(let txHash):
                        guard let self = self else { return }
                        self.sendStatus = .sent
                        if let request = self.web3Request {
                            self.web3delegate?.web3TransactionResponse(response: .sendTransaction(txHash, request: request))
                        }
                        if let request = self.walletConnectRequest,
                           let id = request.id,
                           let response = try? Response(url: request.url, value: txHash, id: id) {
                            self.walletConnectDelegate?.walletConnectTransactionResponse(response: response)
                        }
                        if let resolver = self.resolver {
                            resolver.fulfill(txHash)
                        }
                        
                    case .failure(let error):
                        guard let self = self else { return }
                        self.sendStatus = .ready
                        if let request = self.web3Request {
                            self.web3delegate?.web3TransactionResponse(response: .fail(errorMessage: error.localizedDescription, code: 0, request: request))
                        }
                        if let request = self.walletConnectRequest,
                           let response = try? Response(request: request, error: .errorResponse) {
                            self.walletConnectDelegate?.walletConnectTransactionResponse(response: response)
                        }
                        if let resolver = self.resolver {
                            resolver.reject(error)
                        }
                    }
                    DispatchQueue.main.async {
                        self?.dismiss(animated: true, completion: nil)
                    }
                }
            }
            .store(in: &disposeBag)
    }
}

extension SendConfirmPopViewController: GasFeeBackDelegate {
    func getGasFeeAction(gasFeeModel: GasFeeCellItem) {
        guard let gwei = BigUInt(gasFeeModel.gWei), let gasLimitValut = BigUInt(gasFeeModel.gasLimit) else {
            return
        }
        viewModel.transactionPublisher.value?.gasPrice = gwei * (BigUInt(10).power(9))
        viewModel.transactionPublisher.value?.gasLimit = gasLimitValut
        if maskUserDefaults.network == .eth {
            viewModel.maxFeePerGasPublisher.value = Web3.Utils.parseToBigUInt(gasFeeModel.suggestedMaxFeePerGas, units: .Gwei)
            viewModel.maxInclusionFeePerGasPublisher.value = Web3.Utils.parseToBigUInt(gasFeeModel.suggestedMaxPriorityFeePerGas, units: .Gwei)
        }
    }
}

extension SendConfirmPopViewController {
    @objc
    func confirmClicked(_ sender: UIButton) {
        handleConfirmClicked()
    }
    
    @objc
    func cancelClicked(_ sender: UIButton) {
        if let request = web3Request {
            web3delegate?.web3TransactionResponse(response: .fail(errorMessage: "cancel", code: 0, request: request))
        }
        if let request = walletConnectRequest {
            walletConnectDelegate?.walletConnectTransactionResponse(response: .reject(request))
        }
        resolver?.reject(WalletSendError.cancelled)
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

extension SendConfirmPopViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        .intrinsicHeight
    }
    
    var allowsDragToDismiss: Bool {
        false
    }
    
    var allowsTapToDismiss: Bool {
        false
    }
}
