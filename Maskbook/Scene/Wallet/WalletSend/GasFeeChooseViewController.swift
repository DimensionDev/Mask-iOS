//
//  GasFeeChooseViewController.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Alamofire
import BigInt
import Combine
import CoreDataStack
import IQKeyboardManagerSwift
import PanModal
import UIKit
import UStack

protocol GasFeeBackDelegate: AnyObject {
    func getGasFeeAction(gasFeeModel: GasFeeCellItem)
}

// swiftlint:disable force_cast line_length type_body_length file_length
class GasFeeChooseViewController: UIViewController {
    var disposeBag = Set<AnyCancellable>()
    var contentHeight: CGFloat = 340

    weak var delegate: GasFeeBackDelegate?
    
    typealias Section = GasFeeViewModel.Section
    typealias Item = GasFeeViewModel.SectionItem
    typealias ViewModel = GasFeeViewModel
    var viewModel: ViewModel
    
    var keyboardHeight: CGFloat?
    var keyboardManagerEnable = IQKeyboardManager.shared.enable
    private lazy var indicatorView = MaskLoadingIndicator()
    
    lazy var keyboardHandler: KeyboardHandler = {
        let handler = KeyboardHandler(panModalVC: self, paddingBottom: 8)
        return handler
    }()
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH4
        label.text = L10n.Scene.Sendtransaction.Gasprice.title
        label.textAlignment = .center
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 22)
        ])
        return label
    }()
    
    let costFiatLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH1
        label.textAlignment = .center
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 38)
        ])
        return label
    }()
    
    let costEthLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH5
        label.textAlignment = .center
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 24)
        ])
        return label
    }()
    
    let costTimeLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.success.color
        label.font = FontStyles.BH5
        label.textAlignment = .center
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 24)
        ])
        return label
    }()
    
    lazy var collectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.scrollDirection = .horizontal
        flowLayout.minimumLineSpacing = 12
        flowLayout.minimumInteritemSpacing = 12
        let view = UICollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = .clear
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.layer.masksToBounds = false
        view.register(GasFeeStandardCollectionViewCell.self, forCellWithReuseIdentifier: String(describing: GasFeeStandardCollectionViewCell.self))
        view.allowsMultipleSelection = false
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 64)
        ])
        return view
    }()
    
    lazy var dataSource: UICollectionViewDiffableDataSource<Section, Item> = {
        return UICollectionViewDiffableDataSource<Section, Item>(collectionView: collectionView) {collectionView, indexPath, item in
            switch item {
            case .item(let cellItem):
                    let cell: GasFeeStandardCollectionViewCell = collectionView.dequeCell(at: indexPath)
                    cell.setGas(gasFeeSelectedItem: cellItem, gasFeeCurrentItem: self.viewModel.gasFeePublisher.value ?? cellItem)
                    return cell
            }
        }
    }()
    let advancedLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.Sendtransaction.Gasprice.advancedbtn
        label.textAlignment = .right
        return label
    }()
    
    let advancedImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Balance.expandArrowUp.image
        NSLayoutConstraint.activate([
            imageView.heightAnchor.constraint(equalToConstant: 24),
            imageView.widthAnchor.constraint(equalToConstant: 24)
        ])
        return imageView
    }()
        
    lazy var advancedView = HStackView(alignment: .center) {
        Spacer()
        advancedLabel
        advancedImageView
        Spacer()
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
        NSLayoutConstraint.activate([
            $0.heightAnchor.constraint(equalToConstant: 24),
            self.advancedLabel.centerXAnchor.constraint(equalTo: $0.centerXAnchor)
        ])
    }
    
    lazy var headStackView = VStackView {
        Spacer(height: 25)
        titleLabel
        Spacer(height: 20)
        costFiatLabel
        Spacer(height: 4)
        costEthLabel
        Spacer(height: 4)
        costTimeLabel
        Spacer(height: 20)
        collectionView
        Spacer(height: 20)
        advancedView
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
    }
    
    let gasLimitLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.Sendtransaction.Gasprice.gaslimit
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 24)
        ])
        return label
    }()
    
    let gaslimitTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.backgroundColor = Asset.Colors.Background.dark.color
        textField.keyboardType = .decimalPad
        NSLayoutConstraint.activate([
            textField.heightAnchor.constraint(equalToConstant: 52)
        ])
        textField.setContentCompressionResistancePriority(.required, for: .vertical)
        return textField
    }()
    
    let gaslimitErrorLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.error.color
        label.font = FontStyles.RH6
        label.isHidden = true
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 24)
        ])
        return label
    }()
    
    lazy var gasLimitStackView = VStackView(spacing: 8) {
        gasLimitLabel
        gaslimitTextField
        gaslimitErrorLabel
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
    }
    
    let maxPriorityFeeLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.Sendtransaction.Gasprice.maxpriorityfee
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 24)
        ])
        return label
    }()
    
    let maxPriorityFeeFiatLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        label.textAlignment = .right
        return label
    }()
    
    lazy var maxPriorityFeeHeadStackView = HStackView(alignment: .center) {
        maxPriorityFeeLabel
        maxPriorityFeeFiatLabel
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
    }
    
    let maxPriorityFeeTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.backgroundColor = Asset.Colors.Background.dark.color
        textField.keyboardType = .decimalPad
        NSLayoutConstraint.activate([
            textField.heightAnchor.constraint(equalToConstant: 52)
        ])
        return textField
    }()
    
    let maxPriorityFeeErrorLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.error.color
        label.font = FontStyles.RH6
        label.isHidden = true
        label.text = L10n.Scene.Sendtransaction.Gasprice.maxpriorityfeeErrorLow

        return label
    }()
    
    lazy var maxPriorityFeeStackView = VStackView(spacing: 8) {
        maxPriorityFeeHeadStackView
        maxPriorityFeeTextField
        maxPriorityFeeErrorLabel
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
    }
    
    let maxFeeLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.Sendtransaction.Gasprice.maxfee
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 24)
        ])
        return label
    }()
    
    let maxFeeFiatLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        label.textAlignment = .right
        return label
    }()
    
    lazy var maxFeeHeadStackView = HStackView(alignment: .center) {
        maxFeeLabel
        maxFeeFiatLabel
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
    }
    
    let maxFeeTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.backgroundColor = Asset.Colors.Background.dark.color
        textField.keyboardType = .decimalPad
        NSLayoutConstraint.activate([
            textField.heightAnchor.constraint(equalToConstant: 52)
        ])
        return textField
    }()
    
    let maxFeeErrorLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.error.color
        label.font = FontStyles.RH6
        label.isHidden = true
        label.text = L10n.Scene.Sendtransaction.Gasprice.maxfeeErrorLow
        return label
    }()
    
    lazy var maxFeeStackView = VStackView(spacing: 8) {
        maxFeeHeadStackView
        maxFeeTextField
        maxFeeErrorLabel
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
    }
    
    let gWeiLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.Sendtransaction.Gasprice.gasprice
        return label
    }()
    
    let gWeiFiatLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        label.textAlignment = .right
        return label
    }()
    
    lazy var gWeiHeadStackView = HStackView(alignment: .center) {
        gWeiLabel
        gWeiFiatLabel
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
        NSLayoutConstraint.activate([
            $0.heightAnchor.constraint(equalToConstant: 24)
        ])
    }
    
    let gWeiTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.backgroundColor = Asset.Colors.Background.dark.color
        textField.keyboardType = .decimalPad
        textField.snp.makeConstraints { $0.height.equalTo(52) }
        return textField
    }()
    
    let gWeiErrorLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.error.color
        label.font = FontStyles.RH6
        label.isHidden = true
        label.text = L10n.Scene.Sendtransaction.Gasprice.maxfeeErrorLow

        return label
    }()
    
    lazy var gWeiStackView = VStackView(spacing: 8) {
        gWeiHeadStackView
        gWeiTextField
        gWeiErrorLabel
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
        $0.isHidden = true
    }
    
    lazy var gasFeeBackView = VStackView(spacing: 16, distribution: .fillProportionally) {
        gasLimitStackView
        maxPriorityFeeStackView
        maxFeeStackView
        gWeiStackView
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
        $0.isHidden = true
    }
    
    let confirmButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.Sendtransaction.Gasprice.btnConfirm)
        btn.addTarget(self, action: #selector(confirmClicked(_:)), for: .touchUpInside)
        NSLayoutConstraint.activate([
            btn.heightAnchor.constraint(equalToConstant: 54)
        ])
        return btn
    }()
    
    lazy var backStackView = VStackView(spacing: 20) {
        headStackView
        gasFeeBackView
        confirmButton
        Spacer()
    }.cv.apply {
        $0.backgroundColor = Asset.Colors.Background.normal.color
    }
    
    private var gasLimit: BigUInt {
        viewModel.gasLimitPublisher.value
    }
    
    init(_ viewModel: ViewModel? = nil, gasLimit: BigUInt? = nil) {
        let vm = viewModel ?? ViewModel()
        if let gasLimit = gasLimit {
            vm.gasLimitPublisher.accept(gasLimit)
        }
        self.viewModel = vm
        super.init(nibName: nil, bundle: nil)
    }
     
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.viewModel.indicatorView = indicatorView
        initViews()
        buildSubscriptions()
        
        viewModel.collectionView = collectionView
        viewModel.dataSource = dataSource
        viewModel.gasFeePublisher.value?.gasLimit = gasLimit.description
        viewModel.localGasFeeModel?.gasLimit = gasLimit.description
        gaslimitErrorLabel.text = L10n.Scene.Sendtransaction.Gasprice.gaslimitError + gasLimit.description
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        IQKeyboardManager.shared.enable = true
        IQKeyboardManager.shared.shouldResignOnTouchOutside = true
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        IQKeyboardManager.shared.enable = keyboardManagerEnable
        IQKeyboardManager.shared.shouldResignOnTouchOutside = keyboardManagerEnable
    }
    
    func initViews() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        
        backStackView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(backStackView)
        NSLayoutConstraint.activate([
            backStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            backStackView.topAnchor.constraint(equalTo: view.topAnchor, constant: 25),
            backStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing),
            backStackView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor)
        ])
            
        view.addSubview(indicatorView)
        indicatorView.snp.makeConstraints {
            $0.centerX.equalToSuperview()
            $0.centerY.equalToSuperview().offset(-15)
            $0.size.equalTo(27)
        }
        
        collectionView.dataSource = dataSource
        collectionView.delegate = viewModel
        viewModel.refresh()
    }
    
    func buildSubscriptions() {
        advancedView
            .gesture()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                self.gasFeeBackView.isHidden = !self.gasFeeBackView.isHidden
                self.view.endEditing(true)
                self.changeViewHeight()
            }
            .store(in: &disposeBag)
        
        confirmButton
            .gesture()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                self.viewModel.gasFeePublisher.value?.gasLimit = self.gasLimit.description
                guard let item = self.viewModel.gasFeePublisher.value else {
                    return
                }
                // share the choose `item` to mutiple delegates
                self.viewModel.confirmedGasFeePublisher.accept(item)
                self.delegate?.getGasFeeAction(gasFeeModel: item)
                self.dismiss(animated: true, completion: nil)
            }
            .store(in: &disposeBag)
                
        let token = WalletAssetManager.shared.getDefaultMainToken()
        
        gaslimitTextField.textPublisher()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] text in
                guard let self = self else { return }
                guard let gaslimit = BigUInt(text) else { return}
                
                guard let gwei = self.viewModel.localGasFeeModel?.gasLimit else { return }
                let isShow = NSDecimalNumber(string: text).compare(NSDecimalNumber(string: gwei)) == .orderedAscending
                self.gaslimitErrorLabel.isHidden = !isShow
                
                self.viewModel.gasLimitPublisher.accept(gaslimit)
                self.viewModel.gasFeePublisher.value?.gasLimit = text
                self.viewModel.gasFeePublisher.value?.type = .custom
            }
            .store(in: &disposeBag)
        
        gWeiTextField.textPublisher()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] text in
                guard let self = self else { return }
                
                guard let gwei = self.viewModel.localGasFeeModel?.gWei else { return }
                let isShow = NSDecimalNumber(string: text).compare(NSDecimalNumber(string: gwei)) == .orderedAscending
                self.gWeiErrorLabel.isHidden = !isShow
                
                self.viewModel.gasFeePublisher.value?.type = .custom
                self.viewModel.gasFeePublisher.value?.gWei = text
            }
            .store(in: &disposeBag)
        
        maxFeeTextField.textPublisher()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] text in
                guard let self = self else { return }
                
                guard let gwei = self.viewModel.localGasFeeModel?.estimatedBaseFee else { return }
                let isShow = NSDecimalNumber(string: text).compare(NSDecimalNumber(string: gwei)) == .orderedAscending
                self.maxFeeErrorLabel.isHidden = !isShow
                
                self.viewModel.gasFeePublisher.value?.suggestedMaxFeePerGas = text
                self.viewModel.gasFeePublisher.value?.type = .custom
            }
            .store(in: &disposeBag)
        
        maxPriorityFeeTextField.textPublisher()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] text in
                guard let self = self else { return }
                
                let isShow = NSDecimalNumber(string: text).compare(NSDecimalNumber.zero) == .orderedAscending
                self.maxPriorityFeeErrorLabel.isHidden = !isShow
                
                self.viewModel.gasFeePublisher.value?.suggestedMaxPriorityFeePerGas = text
                self.viewModel.gasFeePublisher.value?.type = .custom
            }
            .store(in: &disposeBag)
        
        Publishers.CombineLatest(viewModel.gasFeePublisher, viewModel.gasLimitPublisher)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] item, gasLimit in
                guard let self = self else { return }
                guard let item = item else { return }
                guard let symbol = token?.symbol else { return }

                log.debug("gaslimit \(gasLimit.description)", source: "lucky drop")
                self.gaslimitTextField.text = gasLimit.description
                self.maxPriorityFeeTextField.text = item.suggestedMaxPriorityFeePerGas
                self.maxFeeTextField.text = item.suggestedMaxFeePerGas
                self.gWeiTextField.text = item.gWei
                self.costTimeLabel.text = item.costTime
                self.costFiatLabel.text = "~\(maskUserDefaults.currency.symbol)\(EthUtil.getGasFeeFiat(gwei: item.gWei, gasLimit: self.gasLimit.description, price: token!.price as! Double))"
                self.costEthLabel.text = "\(L10n.Scene.Sendtransaction.Gasprice.costfee) \(EthUtil.getGasFeeToken(gwei: item.gWei, gasLimit: self.gasLimit.description)) \(symbol)"
                if item.type == .custom {
                    self.collectionView.reloadData()
                }
            }
            .store(in: &disposeBag)
        
        UserDefaultPublishers.network
            .receive(on: DispatchQueue.main)
            .sink { [weak self] blockChainNetwork  in
                guard let self = self else { return }
                    self.maxPriorityFeeStackView.isHidden = !(blockChainNetwork == .eth)
                    self.maxFeeStackView.isHidden = !(blockChainNetwork == .eth)
                    self.gWeiStackView.isHidden = (blockChainNetwork == .eth)
            }
            .store(in: &disposeBag)
        
        Publishers.CombineLatest(
            KeyboardResponderService.shared.state.eraseToAnyPublisher(),
            KeyboardResponderService.shared.endFrame.eraseToAnyPublisher()
        )
        .receive(on: DispatchQueue.main)
        .sink(receiveValue: { [weak self] state, endFrame in
            guard let self = self else { return }
            
            guard state == .dock else {
                self.keyboardHeightChanged(keyboardHeight: 0.0)
                self.titleLabel.isHidden = false
                return
            }
            
            let contentFrame = self.view.convert(self.view.frame, to: nil)
            let padding = contentFrame.maxY - endFrame.minY
            guard padding > 0 else {
                self.keyboardHeightChanged(keyboardHeight: 0.0)
                self.titleLabel.isHidden = false

                return
            }
            self.keyboardHeightChanged(keyboardHeight: padding)
            self.titleLabel.isHidden = true
        })
        .store(in: &disposeBag)
    }
    
    func keyboardHeightChanged(keyboardHeight: CGFloat) {
        if self.keyboardHeight == nil {
            self.keyboardHeight = keyboardHeight
            return
        }
        if self.keyboardHeight != keyboardHeight {
            self.keyboardHeight = keyboardHeight
            self.panModalSetNeedsLayoutUpdate()
            self.panModalTransition(to: .longForm)
        }
    }
}
// swiftlint:enable force_cast

extension GasFeeChooseViewController {
    func changeViewHeight() {
        self.panModalSetNeedsLayoutUpdate()
        self.panModalTransition(to: .longForm)
    }
}

// Action
extension GasFeeChooseViewController {
    @objc
    func confirmClicked(_ sender: UIButton) {
//        self.viewModel.gasFeePublisher.value?.gasLimit = self.gasLimit.description
//        guard let item = self.viewModel.gasFeePublisher.value else {
//            return
//        }
//        delegate?.getGasFeeAction(gasFeeModel: item)
//        dismiss(animated: true, completion: nil)
    }
}

extension GasFeeChooseViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        let height: CGFloat = self.keyboardHeight ?? 0
        
        if height > 0 {
            return .maxHeight
        }
        return .intrinsicHeight
    }
}
