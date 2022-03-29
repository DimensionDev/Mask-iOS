//
//  WalletImportMultiChainAlert.swift
//  Maskbook
//
//  Created by BradGao on 2021/11/15.
//  Copyright © 2021 dimension. All rights reserved.
//
import UIKit

class WalletImportMultiChainAlert: BaseViewController {
    
    lazy var vStack: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .fill
        view.spacing = 0
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(
            top: LayoutConstraints.top,
            left: LayoutConstraints.leading,
            bottom: 24,
            right: LayoutConstraints.trailing)
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        contentLabel.translatesAutoresizingMaskIntoConstraints = false
        okButton.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(titleLabel)
        view.addArrangedSubview(contentLabel)
        view.addArrangedSubview(blockchainCollectionView)
        view.addArrangedSubview(okButton)
        
        view.setCustomSpacing(12, after: titleLabel)
        view.setCustomSpacing(20, after: contentLabel)
        view.setCustomSpacing(20, after: blockchainCollectionView)

        return view
    }()

    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.CreateWallet.multichainWalletTitle
        label.textAlignment = .center
        return label
    }()
    
    lazy var contentLabel: UILabel = {
        let label = UILabel()
        label.numberOfLines = 0
        let paragraphStyle = NSMutableParagraphStyle()
        paragraphStyle.minimumLineHeight = 24
        paragraphStyle.maximumLineHeight = 24
        label.attributedText = NSAttributedString(string: L10n.Scene.CreateWallet.multichainWalletDescription,
                                        attributes: [.foregroundColor: Asset.Colors.Text.normal.color,
                                                     .font: FontStyles.MH6,
                                                     .paragraphStyle: paragraphStyle])
        return label
    }()
    
    lazy var blockchainCollectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.minimumInteritemSpacing = 12
        flowLayout.minimumLineSpacing = 12
        flowLayout.itemSize = CGSize(width: 64, height: 78)
        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: flowLayout)
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        collectionView.backgroundColor = .clear
        collectionView.showsVerticalScrollIndicator = false
        collectionView.showsHorizontalScrollIndicator = false
        collectionView.register(WalletMultiChainCell.self)
        return collectionView
    }()
    
    lazy var okButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Common.Controls.ok)
        return btn
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupUI()
    }
}

private extension WalletImportMultiChainAlert {
    func setupUI() {
        view.layer.cornerRadius = 20
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(vStack)
        
        vStack.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.topAnchor),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            view.trailingAnchor.constraint(equalTo: vStack.trailingAnchor),
            view.bottomAnchor.constraint(equalTo: vStack.bottomAnchor)
        ])
        
        blockchainCollectionView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            blockchainCollectionView.leadingAnchor.constraint(equalTo: vStack.layoutMarginsGuide.leadingAnchor),
            blockchainCollectionView.trailingAnchor.constraint(equalTo: vStack.layoutMarginsGuide.trailingAnchor),
            blockchainCollectionView.heightAnchor.constraint(equalToConstant: 168)
        ])
        
        NSLayoutConstraint.activate([
            okButton.heightAnchor.constraint(equalToConstant: 54)
        ])
        
        blockchainCollectionView.dataSource = self
        
        okButton.addTarget(self, action: #selector(onOkBtnClicked), for: .touchUpInside)
    }
    
    @objc
    func onOkBtnClicked() {
        self.dismiss(animated: true, completion: nil)
    }
}

extension WalletImportMultiChainAlert: UICollectionViewDataSource {
    func numberOfSections(in collectionView: UICollectionView) -> Int {
        return 1
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return BlockChainNetwork.supportedNetwork.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell: WalletMultiChainCell = collectionView.dequeCell(at: indexPath)
        let blockchain = BlockChainNetwork.supportedNetwork[indexPath.row]
        cell.iconView.image = blockchain.selectedIcon
        cell.titleLabel.text = blockchain.shortName
        return cell
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletImportMultiChainAlertPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = WalletImportMultiChainAlert()
        let width: CGFloat = 330
        let height: CGFloat = 473
        Group {
            UIViewPreview {
                let view = vc.view!
                view.translatesAutoresizingMaskIntoConstraints = false
                NSLayoutConstraint.activate([
                    view.widthAnchor.constraint(equalToConstant: width),
                    view.heightAnchor.constraint(equalToConstant: height)
                ])
                return view
            }
            .previewLayout(.fixed(width: width, height: height))
        }
    }
}
#endif

