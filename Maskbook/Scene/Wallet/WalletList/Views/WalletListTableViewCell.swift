////
////  WalletListTableViewCell.swift
////  Maskbook
////
////  Created by Hugo L on 2021/5/19.
////  Copyright © 2021 dimension. All rights reserved.
////
//
// import UIKit
//
// class WalletListTableViewCell: UITableViewCell {
//    typealias ViewModel = WalletListTableViewCellModel
//    typealias Section = ViewModel.Section
//    typealias Item = ViewModel.Item
//    
//    static let reuseIdentifier = "WalletListTableViewCell"
//    
//    lazy var bgView: UIView = {
//        let view = UIView()
//        // itodo: need to replace a right color
//        view.backgroundColor = Asset.Colors.Background.dark.color
//        view.layer.cornerRadius = 12
//        view.clipsToBounds = true
//        return view
//    }()
//    
//    lazy var leftView: UIStackView = {
//        let view = UIStackView()
//        view.axis = .vertical
//        view.alignment = .center
//        view.distribution = .fillEqually
//        return view
//    }()
//    
//    lazy var ethView: WalletListCoinView = {
//        let selected = Asset.Images.Scene.WalletList.Coins.ethSelected.image
//        let unselected = Asset.Images.Scene.WalletList.Coins.ethUnselected.image
//        let view = WalletListCoinView(
//            isFirst: true,
//            isLast: false,
//            selectedImage: selected,
//            unselectedImage: unselected
//        )
//        return view
//    }()
//    
//    lazy var bscView: WalletListCoinView = {
//        let selected = Asset.Images.Scene.WalletList.Coins.bscSelected.image
//        let unselected = Asset.Images.Scene.WalletList.Coins.bscUnselected.image
//        let view = WalletListCoinView(
//            isFirst: false,
//            isLast: true,
//            selectedImage: selected,
//            unselectedImage: unselected
//        )
//        return view
//    }()
//    
//    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
//        return UITableViewDiffableDataSource<Section, Item>(
//            tableView: tableView) { tableView, indexPath, item in
//            
//            let cell = tableView.dequeueReusableCell(
//                withIdentifier: WalletListWalletTableViewCell.reuseIdentifier
//            ) as? WalletListWalletTableViewCell ?? WalletListWalletTableViewCell()
//            cell.update(account: item)
//            return cell
//        }
//    }()
//    
//    lazy var tableView: UITableView = {
//        let view = UITableView()
//        view.rowHeight = UITableView.automaticDimension
//        view.estimatedRowHeight = 80
//        view.register(WalletListWalletTableViewCell.self, forCellReuseIdentifier: WalletListWalletTableViewCell.reuseIdentifier)
//        view.backgroundColor = Asset.Colors.Background.dark.color
//        view.separatorStyle = .none
//        return view
//    }()
//    
//    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
//        super.init(style: style, reuseIdentifier: reuseIdentifier)
//        
//        setupUI()
//    }
//    
//    required init?(coder: NSCoder) {
//        fatalError("init(coder:) has not been implemented")
//    }
//    
//    override func prepareForReuse() {
//        super.prepareForReuse()
//        leftView.arrangedSubviews.forEach { view in
//            view.removeFromSuperview()
//        }
//    }
//    
//    private func setupUI() {
//        contentView.backgroundColor = Asset.Colors.Background.normal.color
//        contentView.addSubview(bgView)
//        bgView.addSubview(leftView)
//        bgView.addSubview(tableView)
//        
//        bgView.translatesAutoresizingMaskIntoConstraints = false
//        NSLayoutConstraint.activate([
//            bgView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
//            bgView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 22.5),
//            contentView.bottomAnchor.constraint(equalTo: bgView.bottomAnchor, constant: 8),
//            contentView.trailingAnchor.constraint(equalTo: bgView.trailingAnchor, constant: 22.5),
//            bgView.heightAnchor.constraint(equalToConstant: 274)
//        ])
//        
//        leftView.translatesAutoresizingMaskIntoConstraints = false
//        NSLayoutConstraint.activate([
//            bgView.leadingAnchor.constraint(equalTo: leftView.leadingAnchor),
//            leftView.widthAnchor.constraint(equalToConstant: 47),
//            bgView.topAnchor.constraint(equalTo: leftView.topAnchor),
//            leftView.bottomAnchor.constraint(equalTo: bgView.bottomAnchor),
//        ])
//        
//        tableView.translatesAutoresizingMaskIntoConstraints = false
//        NSLayoutConstraint.activate([
//            leftView.trailingAnchor.constraint(equalTo: tableView.leadingAnchor),
//            tableView.trailingAnchor.constraint(equalTo: bgView.trailingAnchor),
//            tableView.topAnchor.constraint(equalTo: bgView.topAnchor, constant: 16),
//            bgView.bottomAnchor.constraint(equalTo: tableView.bottomAnchor, constant: 16),
//        ])
//    }
//    
//    func update(accounts: [WalletListViewModel.WalletAccount]) {
//        let grouped = Dictionary(grouping: accounts) { item in
//            return item.maskAccount.coin
//        }
//        
//        let coins = grouped.compactMap { $0.key }
//        if coins.contains(.ethereum) {
//            leftView.addArrangedSubview(ethView)
//            ethView.isSelected = true
//        }
//        if coins.contains(.ethereum) {
//            leftView.addArrangedSubview(bscView)
//        }
//        
//        var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
//        snapshot.appendSections([.main])
//        if let items = grouped[.ethereum] {
//            snapshot.appendItems(items)
//        } else {
//            snapshot.appendItems([])
//        }
//        dataSource.apply(snapshot)
//    }
// }
//
// #if canImport(SwiftUI) && DEBUG
// import SwiftUI
// @available(iOS 13.0, *)
// struct WalletListTableViewCellPreview: PreviewProvider {
//    static var previews: some SwiftUI.View {
//        Group {
//            UIViewPreview {
//                let cell = WalletListTableViewCell(style: .default, reuseIdentifier: nil)
//                return cell
//            }
//            .previewLayout(.fixed(width: 375, height: 274))
//            
//            UIViewPreview {
//                let selected = Asset.Images.Scene.WalletList.Coins.bscSelected.image
//                let unselected = Asset.Images.Scene.WalletList.Coins.bscUnselected.image
//                let view = WalletListCoinView(
//                    isFirst: true,
//                    isLast: false,
//                    selectedImage: selected,
//                    unselectedImage: unselected
//                )
//                return view
//            }
//            .previewLayout(.fixed(width: 47, height: 137))
//
//            UIViewPreview {
//                let selected = Asset.Images.Scene.WalletList.Coins.bscSelected.image
//                let unselected = Asset.Images.Scene.WalletList.Coins.bscUnselected.image
//                let view = WalletListCoinView(
//                    isFirst: false,
//                    isLast: false,
//                    selectedImage: selected,
//                    unselectedImage: unselected
//                )
//                view.isSelected = true
//                return view
//            }
//            .previewLayout(.fixed(width: 47, height: 137))
//
//            UIViewPreview {
//                let selected = Asset.Images.Scene.WalletList.Coins.bscSelected.image
//                let unselected = Asset.Images.Scene.WalletList.Coins.bscUnselected.image
//                let view = WalletListCoinView(
//                    isFirst: false,
//                    isLast: true,
//                    selectedImage: selected,
//                    unselectedImage: unselected
//                )
//                return view
//            }
//            .previewLayout(.fixed(width: 47, height: 137))
//        }
//    }
// }
// #endif
