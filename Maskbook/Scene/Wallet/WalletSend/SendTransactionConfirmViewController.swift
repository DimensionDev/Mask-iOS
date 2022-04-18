//
//  SendTransactionConfirmViewController.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Combine
import CoreDataStack
import PanModal
import PromiseKit
import SnapKit
import UIKit
import UStack
import web3swift

// swiftlint:disable type_body_length file_length
class SendTransactionConfirmViewController: BaseViewController {
    @InjectedProvider(\.userDefaultSettings)
    var userSettings
    @InjectedProvider(\.vault)
    var vault
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    var subscriptions: Set<AnyCancellable> = []
    let viewModel = SendConfirmViewModel()
    var toAddress: String?
    var disposeBag = Set<AnyCancellable>()
    let keyboardExpandView = UIView()
    
    typealias ContactParam = Coordinator.Scene.WalletContactParam
    var param: ContactParam?
    var tokenId: String?

    let toAddressLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.Sendtransaction.Send.labelTo
        return label
    }()
    
    let toAddressDetailLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        label.lineBreakMode = .byTruncatingMiddle
        return label
    }()
    
    let contactButton: UIButton = {
        let button = UIButton()
        let image = Asset.Images.Scene.SendTransaction.addUser.image
        button.setImage(image, for: .normal)
        button.setImage(image, for: .disabled)
        button.setImage(image, for: .selected)
        button.setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.normal.color), for: .normal)
        button.setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.normal.color), for: .disabled)
        button .addTarget(self, action: #selector(contactClick(_:)), for: .touchUpInside)

        return button
    }()
    
    private var tokenIconImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.applyCornerRadius(radius: 19)
        return imageView
    }()
    
    private var tokenNameLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        return label
    }()
    
    private var tokenAmountlabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH6
        return label
    }()
    
    let arrowImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Icon.Arrows.celllRight.image
        return imageView
    }()
    
    let chooseTokenBtn: UIButton = {
        let button = UIButton(type: .custom)
        button.backgroundColor = .clear
        button .addTarget(self, action: #selector(chooseTokenClick(_:)), for: .touchUpInside)
        return button
    }()
    
    let amountLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.Sendtransaction.Send.labelAmount
        return label
    }()
    
    let amountTextField: MaskTextField = {
        let textField = MaskTextField()
        
        textField.autocapitalizationType = .none
        textField.autocorrectionType = .no
        textField.keyboardType = .decimalPad
        textField.backgroundColor = Asset.Colors.Background.dark.color
        textField.textColor = Asset.Colors.Text.dark.color
        textField.attributedPlaceholder = NSAttributedString(string: L10n.Scene.Sendtransaction.Send.labelAmount,
                                                             attributes: [.foregroundColor: Asset.Colors.Text.light.color,
                                                                          .font: FontStyles.BH5])
        return textField
    }()
    
    let maxButton: SecondaryButton = {
        let btn = SecondaryButton(title: L10n.Scene.Sendtransaction.Send.btnMax)
        btn.addTarget(self, action: #selector(maxBtnClicked(_:)), for: .touchUpInside)
        return btn
    }()
    
    lazy var passwordStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .fill
        view.spacing = 0
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 16, left: LayoutConstraints.leading, bottom: 0, right: LayoutConstraints.trailing)

        amountErrorLabel.translatesAutoresizingMaskIntoConstraints = false
        gasStackView.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(amountErrorLabel)
        view.addArrangedSubview(passwordView)
        view.addArrangedSubview(gasStackView)
        
        view.setCustomSpacing(8, after: amountErrorLabel)
        view.setCustomSpacing(16, after: passwordView)

        return view
    }()
    
    lazy var gasStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .equalCentering
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: LayoutConstraints.leading, bottom: 0, right: LayoutConstraints.trailing)
        view.spacing = 20
        feeButton.translatesAutoresizingMaskIntoConstraints = false
        timeArriveButton.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(feeButton)
        view.addArrangedSubview(timeArriveButton)
        
        NSLayoutConstraint.activate([
            feeButton.heightAnchor.constraint(equalToConstant: 26),
            feeButton.heightAnchor.constraint(equalTo: timeArriveButton.heightAnchor),
            feeButton.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            timeArriveButton.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        return view
    }()
    
    let amountErrorLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Public.error.color
        label.text = L10n.Scene.Sendtransaction.Send.amountError
        label.isHidden = true
        return label
    }()
    
    lazy var passwordView: PasswordFormItemView = {
        let view = PasswordFormItemFactory.createPaymentFormItem()
        return view
    }()
    
    let feeButton: UIButton = {
        let button = UIButton(type: .custom)
        button.backgroundColor = Asset.Colors.Background.blue.color
        button.applyCornerRadius(radius: 13)
        button.setTitleColor(Asset.Colors.Public.white.color, for: .normal)
        button.setTitleColor(Asset.Colors.Public.white.color, for: .selected)
        button.setTitle("fee", for: .normal)
        button.titleLabel?.font = FontStyles.BH7
        button.contentEdgeInsets = UIEdgeInsets(top: 5, left: 10, bottom: 5, right: 10)
        button.addTarget(self, action: #selector(chooseFee(_:)), for: .touchUpInside)
        return button
    }()
    
    let timeArriveButton: UIButton = {
        let button = UIButton(type: .custom)
        button.backgroundColor = Asset.Colors.Background.blue.color
        button.applyCornerRadius(radius: 13)
        button.setTitleColor(Asset.Colors.Public.white.color, for: .normal)
        button.setTitleColor(Asset.Colors.Public.white.color, for: .selected)
        button.setTitle("Arrives", for: .normal)
        button.titleLabel?.font = FontStyles.BH7
        button.addTarget(self, action: #selector(chooseFee(_:)), for: .touchUpInside)
        button.contentEdgeInsets = UIEdgeInsets(top: 5, left: 10, bottom: 5, right: 10)

        return button
    }()
    
    let warningImage: UIImageView = {
         let image = UIImageView()
         image.image = Asset.Images.Scene.Alert.warning.image
         return image
     }()

     let warningLabel: UILabel = {
         let label = UILabel()
         label.font = FontStyles.MH7
         label.textColor = Asset.Colors.Public.warnings.color
         label.text = L10n.Scene.Sendtransaction.Send.gasfeeError
         return label
     }()

     lazy var warningView: UIView = {
         let view = UIView()
         view.applyCornerRadius(radius: 16)
         view.backgroundColor = Asset.Colors.Background.warningsBg.color
         view.isHidden = true
         return view
     }()
    
    let sendButton: PrimeryButton =  {
        let button = PrimeryButton(title: L10n.Scene.Sendtransaction.Send.btnSend)
        button.tintColor = Asset.Colors.AccountCard.nameText.color
        button.setImage(Asset.Images.Scene.SendTransaction.upload.image, for: .normal)
        button.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        button.addTarget(self, action: #selector(sendTransaction(_:)), for: .touchUpInside)
        button.isEnabled = false
        return button
    }()
        
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let tokenIdentifier = tokenId,
           let token = walletAssetManager.getToken(
            tokenIdentifier: tokenIdentifier,
            context: AppContext.shared.coreDataStack.persistentContainer.viewContext) {
            viewModel.selectedTokenPublisher.value = token
        }

        setupNaviItems()
        setupSubViews()
        toAddressDetailLabel.text = toAddress
        getNetData()
        setSubscriptions()
        handleForKeyboard()
    }
    // swiftlint:disable line_length

    func getNetData() {
        GasFeeApi.getGasFee().receive(on: DispatchQueue.main)
            .sink { completion in
                switch completion {
                case .finished: break

                case .failure(let error):
                    print("Error: \(error)")
                }
            } receiveValue: {[weak self] gasFeeModel in
                self?.viewModel.gasFeeNetModelTokenPublisher.value = GasFeeCellItem(gasFeeModel: gasFeeModel, type: .medium)
            }.store(in: &self.subscriptions)
           
         DispatchQueue.global().async {
            guard let inputAddress = AddressCheckViewModel.formatAddress(address: self.toAddress) else { print("address is empty"); return }
            self.toAddress = inputAddress
            guard let receiveAddress = EthereumAddress(inputAddress) else { print("address is illegal"); return }
            guard  let fromAddress = EthereumAddress(maskUserDefaults.defaultAccountAddress ?? "")  else { return }
            guard let web3Provier = Web3ProviderFactory.provider?.eth else { return }

            var defaultOptions = TransactionOptions.defaultOptions
            defaultOptions.from = fromAddress
            defaultOptions.gasPrice = .manual(BigUInt(0))
            let transacation = EthereumTransaction(to: receiveAddress, data: Data(), options: defaultOptions)
            when(fulfilled: web3Provier.estimateGasPromise(transacation, transactionOptions: defaultOptions), web3Provier.getGasPricePromise())
                .done { gasLimit, gasPrice in
                self.viewModel.gasPricePublisher.value = gasPrice
                self.viewModel.gasLimitPublisher.value = gasLimit
                }
                .catch { error in
                   print(error)
                }
         }
    }

    private func setupNaviItems() {
        navigationItem.largeTitleDisplayMode = .never
        navigationItem.title = L10n.Scene.Sendtransaction.Send.btnSend
    }
    
    func setupSubViews() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        
        view.addSubview(toAddressLabel)
        toAddressLabel.snp.makeConstraints { make in
            make.left.equalTo(LayoutConstraints.leading)
            make.top.equalTo(view.safeAreaLayoutGuide.snp.top).offset(LayoutConstraints.top)
        }
        
        view.addSubview(toAddressDetailLabel)
        view.addSubview(contactButton)
        
        toAddressDetailLabel.snp.makeConstraints {make in
            make.left.equalTo(toAddressLabel)
            make.top.equalTo(toAddressLabel.snp.bottom).offset(8)
            make.right.equalTo(contactButton.snp.left).offset(-12)
        }
        
        contactButton.snp.makeConstraints { make in
            make.right.equalTo(-LayoutConstraints.trailing)
            make.height.equalTo(32)
            make.width.equalTo(32)
            make.centerY.equalTo(toAddressDetailLabel.snp.centerY)
        }
        
        view.addSubview(tokenIconImageView)
        tokenIconImageView.snp.makeConstraints { make in
            make.top.equalTo(toAddressDetailLabel.snp.bottom).offset(20)
            make.left.equalTo(toAddressDetailLabel)
            make.size.equalTo(CGSize(width: 38, height: 38))
        }
        
        view.addSubview(tokenNameLabel)
        tokenNameLabel.snp.makeConstraints { make in
            make.top.equalTo(tokenIconImageView)
            make.left.equalTo(tokenIconImageView.snp.right).offset(8)
        }
        
        view.addSubview(tokenAmountlabel)
        tokenAmountlabel.snp.makeConstraints {make in
            make.top.equalTo(tokenNameLabel.snp.bottom)
            make.left.equalTo(tokenNameLabel)
        }
        
        view.addSubview(arrowImageView)
        arrowImageView.snp.makeConstraints { make in
            make.right.equalTo(contactButton)
            make.centerY.equalTo(tokenIconImageView.snp.centerY)
            make.size.equalTo(CGSize(width: 6, height: 11))
        }
        
        view.addSubview(chooseTokenBtn)
        chooseTokenBtn.snp.makeConstraints { make in
            make.left.top.bottom.equalTo(tokenIconImageView)
            make.right.equalTo(contactButton)
        }
        
        view.addSubview(amountLabel)
        amountLabel.snp.makeConstraints { make in
            make.left.equalTo(LayoutConstraints.leading)
            make.top.equalTo(chooseTokenBtn.snp.bottom).offset(16)
        }
    
        view.addSubview(amountTextField)
        amountTextField.snp.makeConstraints {make in
            make.left.equalTo(amountLabel)
            make.top.equalTo(amountLabel.snp.bottom).offset(8)
            make.right.equalTo(-LayoutConstraints.trailing)
            make.height.equalTo(52)
        }
        
        amountTextField.addSubview(maxButton)
        maxButton.snp.makeConstraints { make in
            make.right.equalTo(-12)
            make.height.equalTo(24)
            make.width.equalTo(42)
            make.centerY.equalTo(amountTextField)
        }
        
        view.addSubview(passwordStackView)
        
        passwordStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            passwordStackView.topAnchor.constraint(equalTo: amountTextField.bottomAnchor),
            passwordStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            view.trailingAnchor.constraint(equalTo: passwordStackView.trailingAnchor)
        ])
        
        view.addSubview(warningView)
        warningView.snp.makeConstraints {
            $0.height.equalTo(56)
            $0.left.right.equalTo(amountTextField)
            $0.top.equalTo(passwordStackView.snp.bottom).offset(20)
        }

        warningView.addSubview(warningImage)
        warningImage.snp.makeConstraints {
            $0.size.equalTo(CGSize(width: 20, height: 20))
            $0.centerY.equalTo(warningView)
            $0.left.equalTo(18)
        }

        warningView.addSubview(warningLabel)
        warningLabel.snp.makeConstraints {
            $0.centerY.equalTo(warningView)
            $0.left.equalTo(warningImage.snp.right).offset(12)
        }
        
        view.addSubview(sendButton)
        sendButton.snp.makeConstraints { make in
            make.right.equalTo(-LayoutConstraints.trailing)
            make.left.equalTo(LayoutConstraints.leading)
            make.height.equalTo(54)
        }
        
        view.addSubview(keyboardExpandView)
        keyboardExpandView.snp.makeConstraints { make in
            make.top.equalTo(sendButton.snp.bottom).offset(8)
            make.leading.trailing.equalToSuperview()
            make.bottom.equalTo(view.safeAreaLayoutGuide.snp.bottom)
            make.height.equalTo(0)
        }
    }

    func setSubscriptions() {
        view.gesture().sink { [weak self] _ in
            self?.view.endEditing(true)
        }
        .store(in: &subscriptions)
        
        viewModel.selectedTokenPublisher.combineLatest(UserDefaultPublishers.currency)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] selectedToken, currency in
                guard let name = selectedToken?.name,
                      let symbol = selectedToken?.symbol,
                      let displayQuantity = selectedToken?.displayQuantity.stringValue,
                      let displayBalance = selectedToken?.displayBalance.stringValue else { return }
                self?.tokenAmountlabel.text = "\(displayQuantity) \(symbol) ≈ \(currency.symbol)\(displayBalance)"
                self?.tokenNameLabel.text = name
                self?.tokenIconImageView.setNetworkImage(url: selectedToken?.logoUrl)
            }
            .store(in: &subscriptions)
        
        viewModel.selectedTokenPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] selectedToken in
                    guard let selectedToken = selectedToken else { return }
                    guard let contractAddress = selectedToken.contractAddress, let tokenAddress = EthereumAddress(contractAddress) else { return }
                    guard  let fromAddress = EthereumAddress(maskUserDefaults.defaultAccountAddress ?? "")  else { return }
                    guard  let toAddress = EthereumAddress(self?.toAddress ?? "") else { return }
                    guard let web3Provier = Web3ProviderFactory.provider?.eth else { return }

                    var defaultOptions = TransactionOptions.defaultOptions
                    defaultOptions.from = fromAddress
                    defaultOptions.gasLimit = .automatic
                    let preTransacation = web3Provier.sendERC20tokensWithKnownDecimals(
                        tokenAddress: tokenAddress,
                        from: fromAddress,
                        to: toAddress,
                        amount: BigUInt(1),
                        transactionOptions: defaultOptions
                    )
                    preTransacation?.assemblePromise().done({ transactionSendingResult in
                        when(fulfilled: web3Provier.estimateGasPromise(transactionSendingResult, transactionOptions: defaultOptions), web3Provier.getGasPricePromise()).done { gasLimit, gasPrice in
                            self?.viewModel.gasPricePublisher.value = gasPrice
                            self?.viewModel.gasLimitPublisher.value = gasLimit * BigUInt(2)
                        }.catch { error in
                            print(error)
                        }
                    }).catch({ error in
                        print(error)
                    })
            }
            .store(in: &subscriptions)
        
        Publishers.CombineLatest3(viewModel.gasLimitPublisher,
                                  viewModel.gasPricePublisher,
                                  viewModel.gasFeeTokenTokenPublisher)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] gasLimit, gasPrice, gasFeeToken in
                guard let gasPrice = gasPrice else { return }
                guard let price = gasFeeToken?.price else { return }
                let gasFee = EthUtil.getGasFee(gwei: gasPrice, gasLimit: gasLimit, price: price.doubleValue)
                self?.feeButton.setTitle("\(L10n.Scene.Sendtransaction.Gasprice.fee) :\(maskUserDefaults.currency.symbol)\(gasFee)", for: .normal)
                
                guard let totalAmount = gasFeeToken?.displayQuantity else { return }
                guard let gas = Web3.Utils.formatToEthereumUnits(gasPrice * gasLimit, toUnits: .eth, decimals: 6) else { return }
                let isShow = NSDecimalNumber(string: gas).compare(totalAmount) == .orderedDescending
                self?.warningView.isHidden = !isShow
                self?.sendButton.isEnabled = !isShow
            }
            .store(in: &subscriptions)
        
        viewModel.gasFeeNetModelTokenPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] netItem in
                guard let netItem = netItem else { return }
                self?.timeArriveButton.setTitle(netItem.costTime, for: .normal)
            }
            .store(in: &subscriptions)
        
        viewModel.isShowBioIDPage
            .receive(on: DispatchQueue.main)
            .sink { [weak self] isShow in
                self?.setIsShowBioIDPage(isShow: isShow)
            }
            .store(in: &subscriptions)
        
        amountTextField.textPublisher()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] text in
                 guard let self = self else { return }
                 guard let totalAmount = self.viewModel.selectedTokenPublisher.value?.displayQuantity else { return }
                 let isShow = NSDecimalNumber(string: text).compare(totalAmount) == .orderedDescending
                 self.amountErrorLabel.isHidden = !isShow
                 self.sendButton.isEnabled = !(isShow || text.isEmpty)
            }
            .store(in: &subscriptions)
    }
    
    @objc
    func endEditing() {
        view.endEditing(true)
    }
    
    func setIsShowBioIDPage(isShow: Bool) {
        if isShow {
            passwordView.isHidden = true
            
            sendButton.setImage(LocalAuthentication.shared.bioIDButtonImage(), for: .normal)
            sendButton.setTitle(L10n.Scene.Sendtransaction.Send.btnWithoutpassword, for: .normal)
        } else {
            passwordView.isHidden = false
            
            sendButton.setImage(Asset.Images.Scene.SendTransaction.upload.image, for: .normal)
            sendButton.setTitle(L10n.Scene.Sendtransaction.Send.btnSend, for: .normal)
        }
        if viewModel.isWalletConnectAccount {
            passwordView.isHidden = true
        }
    }
    
    private func handleConfirmClicked() {
        // maybe need toast
        guard let toAddress = self.toAddress else { print("address is empty"); return }
        guard let amount = self.amountTextField.text else { print("amount is illegal"); return }
        
        if amount.isNotEmpty {
            Coordinator.main.present(
                scene: .sendTransactionPopConfirm(sendConfirmViewModel: self.viewModel, toAddress: toAddress, amount: amount),
                transition: .panModel(animated: true))
        }
    }

    private func verifyWithFaceId() {
        LocalAuthentication.shared.evaluateBiometryID { [weak self] result, _ in
            guard let self = self else { return }
            if result {
                DispatchQueue.main.async {
                    self.handleConfirmClicked()
                }
            } else {
                self.viewModel.isShowBioIDPage.value = false
            }
        }
    }
    
    func handleForKeyboard() {
        let endFrame = KeyboardResponderService.shared.endFrame.removeDuplicates()
        let willShow = NotificationCenter.default.publisher(for: UIResponder.keyboardWillShowNotification, object: nil)
        let willHide = NotificationCenter.default.publisher(for: UIResponder.keyboardWillHideNotification, object: nil)
        Publishers.CombineLatest(willShow, endFrame).sink { notification, _ in
            guard let duration = notification.userInfo?[UIResponder.keyboardAnimationDurationUserInfoKey] as? Double else {
                return
            }
            guard let endFrame = notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect else {
                return
            }
            UIView.animate(
                withDuration: duration,
                delay: 0,
                options: .curveEaseIn) {
                    self.keyboardExpandView.snp.remakeConstraints { make in
                        make.top.equalTo(self.sendButton.snp.bottom).offset(8)
                        make.leading.trailing.equalToSuperview()
                        make.bottom.equalTo(self.view.snp.bottom)
                        make.height.equalTo(endFrame.height)
                        self.sendButton.layoutIfNeeded()
                    }
            }
            self.view.layoutIfNeeded()
        }.store(in: &subscriptions)
        
        Publishers.CombineLatest(willHide, endFrame).sink { notification, _ in
            guard let duration = notification.userInfo?[UIResponder.keyboardAnimationDurationUserInfoKey] as? Double else {
                return
            }
            UIView.animate(
                withDuration: duration,
                delay: 0,
                options: .curveEaseIn) {
                    self.keyboardExpandView.snp.remakeConstraints { make in
                        make.top.equalTo(self.sendButton.snp.bottom).offset(8)
                        make.leading.trailing.equalToSuperview()
                        make.bottom.equalTo(self.view.safeAreaLayoutGuide.snp.bottom)
                        make.height.equalTo(0)
                    }
            }
            self.view.layoutIfNeeded()
        }.store(in: &subscriptions)
    }
}

extension SendTransactionConfirmViewController {
    @objc
    func chooseTokenClick(_ sender: UIButton) {
        Coordinator.main.present(scene: .sendTransacationTokenlist(delegate: self, isNftList: false), transition: .detail(animated: true))
    }
    
    @objc
    func contactClick(_ sender: UIButton) {
        guard let contactParam = param else {
            return
        }
        Coordinator.main.present(
            scene: .addContact(param: contactParam),
            transition: .panModel(animated: true)
        )
    }
        
    @objc
    func maxBtnClicked(_ sender: UIButton) {
        guard let isMainToken = self.viewModel.selectedTokenPublisher.value?.isMainToken else { return }
        if isMainToken {
            guard let gasPrice = self.viewModel.gasPricePublisher.value  else { return }
            let gasFee = self.viewModel.gasLimitPublisher.value * gasPrice
            guard let amount = self.viewModel.selectedTokenPublisher.value?.displayQuantity.subtracting(NSDecimalNumber(string: Web3.Utils.formatToEthereumUnits(gasFee, toUnits: .eth, decimals: 18))) else { return }
            let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 6, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
            self.amountTextField.text = amount.rounding(accordingToBehavior: roundBehavior).stringValue
        } else {
            self.amountTextField.text = self.viewModel.selectedTokenPublisher.value?.displayQuantity.stringValue
        }
    }
    
    @objc
    func sendTransaction(_ sender: UIButton) {
        guard !self.viewModel.isShowBioIDPage.value else {
            verifyWithFaceId()
            return
        }
        
        if viewModel.isWalletConnectAccount {
            handleConfirmClicked()
        } else {
            passwordView.verify { [weak self] in
                guard let self = self else { return }
                self.handleConfirmClicked()
            }
        }
    }
    
    @objc
    func chooseFee(_ sender: UIButton) {
        Coordinator.main.present(
            scene: .gasFee(delegate: self, gasLimit: self.viewModel.gasLimitPublisher.value),
            transition: .panModel(animated: true)
        )
    }
}

extension SendTransactionConfirmViewController: GasFeeBackDelegate {
    func getGasFeeAction(gasFeeModel: GasFeeCellItem) {
        self.viewModel.gasFeeNetModelTokenPublisher.value = gasFeeModel
        
        guard let gwei = BigUInt(gasFeeModel.gWei), let gasLimitValut = BigUInt(gasFeeModel.gasLimit) else {
            return
        }
        self.viewModel.gasPricePublisher.value = gwei * (BigUInt(10).power(9))
        self.viewModel.gasLimitPublisher.value = gasLimitValut
        self.amountTextField.text = ""
        self.view.endEditing(true)
    }
}

extension SendTransactionConfirmViewController: ChooseTokenBackDelegate {
    func chooseTokenAction(token: Token) {
        self.viewModel.selectedTokenPublisher.value = token
    }
    
    func chooseNFTTokenAction(token: Collectible) {
    }
}
