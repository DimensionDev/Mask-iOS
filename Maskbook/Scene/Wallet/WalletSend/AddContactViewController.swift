//
//  AddContactViewController.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import PanModal
import UIKit

class AddContactViewController: UIViewController {
    typealias Param = Coordinator.Scene.WalletContactParam
    
    var param: Param
    
    var keyboardHeight: CGFloat?
    var subscriptions: Set<AnyCancellable> = []

    let contactView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Public.blue.color
        view.layer.cornerRadius = 36
        view.layer.cornerCurve = .continuous
        view.clipsToBounds = true
        return view
    }()
    
    let firstNamelabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.white.color
        label.font = FontStyles.BH1
        return label
    }()
        
    let contactTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.attributedPlaceholder = NSAttributedString(string: L10n.Scene.Sendtransaction.Addcontact.placeholderName,
                                                             attributes: [.foregroundColor: Asset.Colors.Text.light.color,
                                                                          .font: FontStyles.BH5])
        return textField
    }()
    
    let addressLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.blue.color
        label.font = FontStyles.MH7
        return label
    }()
    
    lazy var confirmButton: UIButton = {
        let btn = PrimeryButton(title: L10n.Scene.Sendtransaction.Addcontact.btnAdd)
        btn.addTarget(self, action: #selector(confirmClicked(_:)), for: .touchUpInside)
        return btn
    }()
    
    init(param: Coordinator.Scene.WalletContactParam) {
        self.param = param
        super.init(nibName: nil, bundle: nil)
        
        switch param {
        case .address(let address):
            addressLabel.text = address

        case .ensName(let ensName):
            addressLabel.text = ensName
        }
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        setSubView()
        subscribeSignal()
    }
    
    func setSubView() {
        view.backgroundColor = Asset.Colors.Background.normal.color

        view.addSubview(contactView)
        contactView.snp.makeConstraints { make in
            make.centerX.equalTo(view)
            make.size.equalTo(CGSize(width: 72, height: 72))
            make.top.equalTo(48)
        }
        
        contactView.addSubview(firstNamelabel)
        firstNamelabel.snp.makeConstraints { make in
            make.centerX.centerY.equalTo(contactView)
        }
        
        view.addSubview(contactTextField)
        contactTextField.snp.makeConstraints { make in
            make.right.equalTo(-22)
            make.left.equalTo(22)
            make.height.equalTo(52)
            make.top.equalTo(contactView.snp.bottom).offset(20)
        }
        
        view.addSubview(addressLabel)
        addressLabel.snp.makeConstraints { make in
            make.right.left.equalTo(contactTextField)
            make.top.equalTo(contactTextField.snp.bottom).offset(12)
        }
        
        view.addSubview(confirmButton)
        confirmButton.snp.makeConstraints { make in
            make.right.left.equalTo(contactTextField)
            make.top.equalTo((addressLabel).snp.bottom).offset(20)
            make.height.equalTo(54)
        }
    }
    
    func subscribeSignal() {
        view.gesture().sink { [weak self] _ in
            self?.view.endEditing(true)
        }
        .store(in: &subscriptions)
        
        contactTextField.textPublisher()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] text in
                guard let self = self else { return }
                self.firstNamelabel.text = text.prefix(1).uppercased()
                self.confirmButton.isEnabled = !text.isEmpty
            }
            .store(in: &subscriptions)
        
        Publishers.CombineLatest(
            KeyboardResponderService.shared.state.eraseToAnyPublisher(),
            KeyboardResponderService.shared.endFrame.eraseToAnyPublisher()
        )
        .receive(on: DispatchQueue.main)
        .sink(receiveValue: { [weak self] state, endFrame in
            guard let self = self else { return }
            
            guard state == .dock else {
                self.keyboardHeightChanged(keyboardHeight: 0.0)
                return
            }
            
            let contentFrame = self.view.convert(self.view.frame, to: nil)
            let padding = contentFrame.maxY - endFrame.minY
            guard padding > 0 else {
                self.keyboardHeightChanged(keyboardHeight: 0.0)
                return
            }
            
            self.keyboardHeightChanged(keyboardHeight: padding)
        })
        .store(in: &subscriptions)
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
    
    @objc
    func confirmClicked(_ sender: UIButton) {
        guard let _ = self.addressLabel.text,
              let name = self.contactTextField.text else {
                  return
              }
        var toAddAddress: String?
        var toAddEnsName: String?
        switch param {
        case .address(let address):
            toAddAddress = address

        case .ensName(let ensName):
            toAddEnsName = ensName
        }

        ContactManager.addContact(address: toAddAddress,
                                  name: name,
                                  ensName: toAddEnsName,
                                  chainId: Int64(maskUserDefaults.network.chain.rawValue),
                                  networkId: Int64(maskUserDefaults.network.networkId))
        
        dismiss(animated: true, completion: nil)
    }
}

extension AddContactViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        let height: CGFloat = self.keyboardHeight ?? 0
        
        return .contentHeight(300 + height)
    }
}
