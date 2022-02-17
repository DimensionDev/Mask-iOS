//
//  WalletImportViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import OSLog
import UIKit

class WalletImportViewController: BaseViewController {
    typealias ViewModel = WalletImportViewModel
    typealias Section = ViewModel.Section
    typealias Item = ImportItem
    
    let viewModel: WalletImportViewModel
    var disposeBag = Set<AnyCancellable>()
    
    lazy var tableView: UITableView = {
        let tableView = UITableView()
        tableView.backgroundColor = Asset.Colors.Background.normal.color
        tableView.estimatedRowHeight = 65
        tableView.rowHeight = UITableView.automaticDimension
        tableView.tableFooterView = UIView()
        tableView.separatorStyle = .none
        tableView.register(WalletImportTableViewCell.self)
        tableView.delegate = self
        return tableView
    }()
    
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        return UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { tableView, indexPath, item in
                let cell: WalletImportTableViewCell = tableView.dequeCell(at: indexPath)
                switch item {
                case .mnemonicWords(let title, let description):
                    cell.iconView.image = Asset.Images.Scene.WalletImport.iconMnemonic.image
                    cell.titleLabel.text = title
                    cell.subtitleLabel.text = description

                case .privateKey(let title, let description):
                    cell.iconView.image = Asset.Images.Scene.WalletImport.iconPrivateKey.image
                    cell.titleLabel.text = title
                    cell.subtitleLabel.text = description

                case .keystore(let title, let description):
                    cell.iconView.image = Asset.Images.Scene.WalletImport.iconKeystore.image
                    cell.titleLabel.text = title
                    cell.subtitleLabel.text = description
                }
                return cell
        }
    }()
    
    init(name: String?, password: String) {
        self.viewModel = WalletImportViewModel(name: name, password: password)
        
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.title = L10n.Scene.WalletImport.title
        navigationItem.largeTitleDisplayMode = .always
        self.navigationController?.navigationBar.prefersLargeTitles = true
        setupUI()
        
        viewModel
            .itemsPublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { completion in
                switch completion {
                case .failure(let error):
                    os_log("%{public}s[%{public}ld], %{public}s: [hugo] %@}", ((#file as NSString).lastPathComponent), #line, #function, error.localizedDescription)

                case .finished:
                    break
                }
            }, receiveValue: { [weak self] items in
                guard let self = self else { return }
                var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
                snapshot.appendSections([.main])
                snapshot.appendItems(items)
                self.dataSource.apply(snapshot, animatingDifferences: false)
            })
            .store(in: &disposeBag)
    }
    
    // MARK: Private methods
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(tableView)
        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            view.safeAreaLayoutGuide.bottomAnchor.constraint(equalTo: tableView.bottomAnchor),
            view.trailingAnchor.constraint(equalTo: tableView.trailingAnchor)
        ])
    }
}

extension WalletImportViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let item = dataSource.itemIdentifier(for: indexPath) else {
            return
        }
        
        let name = viewModel.name
        let password = viewModel.password
        
        switch item {
        case .mnemonicWords:
            Coordinator.main.present(scene: .importFromMnemonic(name: name, password: password), transition: .detail(animated: true))

        case .privateKey:
            Coordinator.main.present(scene: .importFromPrivateKey(name: name, password: password), transition: .detail(animated: true))

        case .keystore:
            Coordinator.main.present(scene: .importFromKeystore(name: name, password: password), transition: .detail(animated: true))
        }
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletImportViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = WalletImportViewController(name: nil, password: "123456")
        let width: CGFloat = 375
        let height: CGFloat = 812
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
            .previewDevice("iPhone 12 Pro")
            .previewLayout(.fixed(width: width, height: height))
        }
    }
}
#endif
