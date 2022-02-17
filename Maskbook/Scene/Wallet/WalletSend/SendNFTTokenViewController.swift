//
//  SendNFTTokenViewController.swift
//  Maskbook
//
//  Created by caiyu on 2021/7/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Combine
import CoreDataStack
import PanModal
import PromiseKit
import SnapKit
import UIKit
import web3swift

// swiftlint:disable file_length type_body_length
class SendNFTTokenViewController: BaseViewController {
    @InjectedProvider(\.userDefaultSettings)
    var userSettings
    @InjectedProvider(\.vault)
    var vault
    var subscriptions: Set<AnyCancellable> = []
    
    typealias ViewModelType = SendNftTokenViewModel
    typealias ContactParam = Coordinator.Scene.WalletContactParam
    var toAddress: String?
    var param: ContactParam?
    var passsToken: Collectible?
    let toAddressPublisher = CurrentValueSubject<String?, Never>(nil)
    var disposeBag = Set<AnyCancellable>()

    let toAddressLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.Sendtransaction.Send.labelTo
        return label
    }()
    
    let addressLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
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
        button.addTarget(self, action: #selector(contactClick(_:)), for: .touchUpInside)

        return button
    }()
    
    private var tokenIconImageView: CollectibleIconImageView = {
        let imageView = CollectibleIconImageView()
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
        imageView.image = Asset.Images.Scene.SendTransaction.arrow.image
        return imageView
    }()
    
    let tokenView: UIView = {
        let tokenView = UIView()
        return tokenView
    }()
    
    lazy var passwordStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .fill
        view.spacing = 0
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 16, left: 23, bottom: 0, right: 23)

        nftTokenImageView.translatesAutoresizingMaskIntoConstraints = false
        gasStackView.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(nftTokenImageView)
        view.addArrangedSubview(passwordView)
        view.addArrangedSubview(gasStackView)
        
        NSLayoutConstraint.activate([
            nftTokenImageView.heightAnchor.constraint(equalToConstant: 248)
        ])
        
        view.setCustomSpacing(8, after: nftTokenImageView)
        view.setCustomSpacing(16, after: passwordView)
        return view
    }()
    
    lazy var gasStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .equalCentering
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: 22, bottom: 0, right: 22)
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
    
    let nftTokenImageView: CollectibleIconImageView = {
        let imageView = CollectibleIconImageView()
        return imageView
    }()
    
    lazy var passwordView: PasswordFormItemView = {
        let view = PasswordFormItemFactory.createPaymentFormItem()
        return view
    }()
    
    let feeButton: UIButton = {
        let button = UIButton(type: .custom)
        button.backgroundColor = Asset.Colors.Background.blue.color
        button.applyCornerRadius(radius: 13)
        button.setTitleColor(Asset.Colors.Public.blue.color, for: .normal)
        button.setTitleColor(Asset.Colors.Public.blue.color, for: .selected)
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
        button.setTitleColor(Asset.Colors.Public.blue.color, for: .normal)
        button.setTitleColor(Asset.Colors.Public.blue.color, for: .selected)
        button.setTitle("Arrives", for: .normal)
        button.titleLabel?.font = FontStyles.BH7
        button.addTarget(self, action: #selector(chooseFee(_:)), for: .touchUpInside)
        button.contentEdgeInsets = UIEdgeInsets(top: 5, left: 10, bottom: 5, right: 10)

        return button
    }()
    
    let sendButton: PrimeryButton =  {
        let button = PrimeryButton(title: L10n.Scene.Sendtransaction.Send.btnSend)
        button.tintColor = Asset.Colors.AccountCard.nameText.color
        button.setImage(Asset.Images.Scene.SendTransaction.upload.image, for: .normal)
        button.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        button.addTarget(self, action: #selector(sendTransaction(_:)), for: .touchUpInside)
        return button
    }()
    
    let viewModel: ViewModelType
    
    init(token: Collectible) {
        self.viewModel = SendNftTokenViewModel(token: token)
        self.passsToken = token
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupNaviItems()
        setupSubViews()
        
        addressLabel.text = param?.displayText
        getNetData()
        setSubscriptions()
    }

    private func setupNaviItems() {        
        navigationItem.largeTitleDisplayMode = .never
        navigationItem.title = L10n.Scene.Sendtransaction.Send.btnSend
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
            } receiveValue: { [weak self] gasFeeModel in
                self?.viewModel.gasFeeNetModelTokenPublisher.value = GasFeeCellItem(gasFeeModel: gasFeeModel, type: .medium)
            }.store(in: &self.subscriptions)
           
         DispatchQueue.global().async {
             guard let inputAddress = AddressCheckViewModel.formatAddress(address: self.param?.displayText) else { print("address is empty"); return }
             self.toAddress = inputAddress
             self.toAddressPublisher.value = inputAddress
         }
    }
    
    func setupSubViews() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        
        view.addSubview(toAddressLabel)
        toAddressLabel.snp.makeConstraints { make in
            make.left.equalTo(23)
            make.top.equalTo(view.safeAreaLayoutGuide.snp.top).offset(24)
        }
        
        view.addSubview(addressLabel)
        view.addSubview(contactButton)
        
        addressLabel.snp.makeConstraints {make in
            make.left.equalTo(toAddressLabel)
            make.top.equalTo(toAddressLabel.snp.bottom).offset(8)
            make.right.equalTo(contactButton.snp.left).offset(-12)
        }
        
        contactButton.snp.makeConstraints { make in
            make.right.equalTo(-23)
            make.height.equalTo(32)
            make.width.equalTo(32)
            make.centerY.equalTo(addressLabel.snp.centerY)
        }
        
        view.addSubview(tokenView)
        tokenView.snp.makeConstraints {
            $0.left.equalTo(addressLabel)
            $0.right.equalTo(contactButton)
            $0.top.equalTo(addressLabel.snp.bottom).offset(20)
            $0.height.equalTo(44)
        }
        
        tokenView.addSubview(tokenIconImageView)
        tokenIconImageView.snp.makeConstraints { make in
            make.top.equalTo(3)
            make.left.equalTo(addressLabel)
            make.size.equalTo(CGSize(width: 38, height: 38))
        }
        
        tokenView.addSubview(tokenNameLabel)
        tokenNameLabel.snp.makeConstraints { make in
            make.top.equalTo(tokenIconImageView)
            make.left.equalTo(tokenIconImageView.snp.right).offset(8)
        }
        
        tokenView.addSubview(tokenAmountlabel)
        tokenAmountlabel.snp.makeConstraints {make in
            make.top.equalTo(tokenNameLabel.snp.bottom)
            make.left.equalTo(tokenNameLabel)
        }
        
        tokenView.addSubview(arrowImageView)
        arrowImageView.snp.makeConstraints { make in
            make.right.equalTo(contactButton)
            make.centerY.equalTo(tokenView)
            make.size.equalTo(CGSize(width: 11, height: 6))
        }
        
        view.addSubview(passwordStackView)
        
        passwordStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            passwordStackView.topAnchor.constraint(equalTo: tokenView.bottomAnchor),
            passwordStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            view.trailingAnchor.constraint(equalTo: passwordStackView.trailingAnchor)
        ])
        
        view.addSubview(sendButton)
        sendButton.snp.makeConstraints { make in
            make.right.equalTo(-23)
            make.left.equalTo(23)
            make.height.equalTo(54)
            make.bottom.equalTo(view.safeAreaLayoutGuide.snp.bottom).offset(-24)
        }
    }
    func setSubscriptions() {
        view.gesture().sink { [weak self] _ in
            self?.view.endEditing(true)
        }
        .store(in: &subscriptions)
        
        
        viewModel.selectedTokenPublisher.combineLatest(UserDefaultPublishers.currency)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] selectedToken, _ in
                guard let selectedToken = selectedToken else { return }
                guard let symbol = selectedToken.tokenSymbol, let name = selectedToken.name else { return }
                self?.tokenAmountlabel.text = name
                self?.tokenNameLabel.text = symbol
                self?.tokenIconImageView.setImageUrl(selectedToken.logoUrl)
                self?.nftTokenImageView.setImageUrl(selectedToken.imageUrl?.absoluteString)
            }
            .store(in: &subscriptions)
        
        viewModel.selectedTokenPublisher.combineLatest(toAddressPublisher)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] selectedToken, toAddressValue in
                    guard let userAddress = maskUserDefaults.defaultAccountAddress else { return }
                    guard let selectedToken = selectedToken else { return }
                    guard let selectedTokenAddress = selectedToken.address, let selectedTokenId = selectedToken.tokenId, let toAddressValue = toAddressValue else { return }
                    guard let tokenAddress = EthereumAddress(selectedTokenAddress), let fromAddress = EthereumAddress(userAddress),
                          let toAddress = EthereumAddress(toAddressValue), let tokenId = BigInt(selectedTokenId) else { return }
                    
                    let web3Provier = Web3.InfuraMainnetWeb3().eth
                    var defaultOptions = TransactionOptions.defaultOptions
                    defaultOptions.from = fromAddress
                 
                    let erc721 = ERC721(web3: Web3.InfuraMainnetWeb3(), provider: Web3.InfuraMainnetWeb3().provider, address: tokenAddress)
                    do {
                        let preTransacation = try erc721.safeTransferFrom(from: fromAddress, to: toAddress, originalOwner: fromAddress, tokenId: BigUInt(tokenId), data: [])
                        preTransacation.assemblePromise().done({ transactionSendingResult in
                            when(fulfilled: web3Provier.estimateGasPromise(transactionSendingResult, transactionOptions: defaultOptions), web3Provier.getGasPricePromise()).done { gasLimit, gasPrice in
                                self?.viewModel.gasPricePublisher.value = gasPrice
                                self?.viewModel.gasLimitPublisher.value = gasLimit
                            }.catch { error in
                                  print(error)
                            }
                        }).catch({ error in
                            print(error)
                        })
                    } catch {
                        print(error)
                    }
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
                self?.feeButton.setTitle(
                    "\(L10n.Scene.Sendtransaction.Gasprice.fee) :\(maskUserDefaults.currency.symbol)\(gasFee)",
                    for: .normal
                )
            }
            .store(in: &subscriptions)
        
        viewModel.gasFeeNetModelTokenPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.timeArriveButton.setTitle("\(L10n.Scene.Sendtransaction.Gasprice.arrives) ~ 1 min", for: .normal)
            }
            .store(in: &subscriptions)
        
        viewModel.isShowBioIDPage
            .receive(on: DispatchQueue.main)
            .sink { [weak self] isShow in
                self?.setIsShowBioIDPage(isShow: isShow)
            }
            .store(in: &subscriptions)
        
        tokenView.gesture()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                Coordinator.main.present(scene: .sendTransacationTokenlist(delegate: self, isNftList: true), transition: .detail(animated: true))
            }
            .store(in: &subscriptions)
    }
    
    @objc
    func endEditing() {
        view.endEditing(true)
    }
    
    func setIsShowBioIDPage(isShow: Bool) {
        if !maskUserDefaults.isPasswordExpried() {
            passwordView.isHidden = true
            
            sendButton.setImage(Asset.Images.Scene.SendTransaction.upload.image, for: .normal)
            sendButton.setTitle(L10n.Scene.Sendtransaction.Send.btnSend, for: .normal)
        } else if isShow {
            passwordView.isHidden = true
            
            sendButton.setImage(LocalAuthentication.shared.bioIDButtonImage(), for: .normal)
            sendButton.setTitle(L10n.Scene.Sendtransaction.Send.btnWithoutpassword, for: .normal)
        } else {
            passwordView.isHidden = false
            
            sendButton.setImage(Asset.Images.Scene.SendTransaction.upload.image, for: .normal)
            sendButton.setTitle(L10n.Scene.Sendtransaction.Send.btnSend, for: .normal)
        }
    }
        
    private func handleConfirmClicked() {   
        vault.getWalletPassword()
            .sink(receiveCompletion: { _ in }) { [weak self] password in
                guard let self = self else { return }
                guard let toAddress = self.toAddress else { print("address is empty"); return }
                guard let fromAddress = maskUserDefaults.defaultAccountAddress  else { print("fromAddress is illegal"); return }
                self.sendButton.isEnabled = false
                
                self.viewModel.sendTransaction(password: password, toAddress: toAddress, fromAddress: fromAddress) { [weak self] result in
                    DispatchQueue.main.async {
                        self?.sendButton.isEnabled = true
                        switch result {
                        case .success:
                            let recentAddress = RecentlyAddress(address: self?.addressLabel.text ?? toAddress, chainId: Int64(maskUserDefaults.network.networkId))
                            maskUserDefaults.addRecentlyAddress(address: recentAddress)
                            self?.navigationController?.popToRootViewController(animated: true)
                            self?.userSettings.resetPasswordExpiredDate()

                        case .failure(let error):
                            let alertController = AlertController(title: error.localizedDescription, message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error)
                            Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
                        }
                    }
                }
            }
            .store(in: &disposeBag)
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
}

extension SendNFTTokenViewController {
    @objc
    func contactClick(_ sender: UIButton) {
        guard let contactParam = param else { return }
        Coordinator.main.present(scene: .addContact(param: contactParam), transition: .panModel(animated: true))
    }
        
    @objc
    func maxBtnClicked(_ sender: UIButton) {
    }
    
    @objc
    func sendTransaction(_ sender: UIButton) {
        guard !self.viewModel.isShowBioIDPage.value else {
            verifyWithFaceId()
            return
        }
        passwordView.verify { [weak self] in
            guard let self = self else { return }
            self.handleConfirmClicked()
        }
    }
    
    @objc
    func chooseFee(_ sender: UIButton) {
        Coordinator.main.present(
            scene: .gasFee(
                delegate: self,
                gasLimit: self.viewModel.gasLimitPublisher.value
            ),
            transition: .panModel(animated: true)
        )
    }
}

extension SendNFTTokenViewController: GasFeeBackDelegate {
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

extension SendNFTTokenViewController: ChooseTokenBackDelegate {
    func chooseTokenAction(token: Token) {
    }
    
    func chooseNFTTokenAction(token: Collectible) {
        self.viewModel.selectedTokenPublisher.value = token
    }
}
// swiftlint:enable file_length type_body_length
