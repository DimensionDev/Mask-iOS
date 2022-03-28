//
//  DerivationPathViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/5.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit

class DerivationPathViewController: BaseViewController {
    typealias ViewModelType = DerivationPathsViewModel
    typealias Section = ViewModelType.Section
    typealias Item = ViewModelType.Item
    
    // MARK: - Property (Data)
    var disposeBag = Set<AnyCancellable>()
    let viewModel: DerivationPathsViewModel
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        return UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { tableView, index, item in
            let cell: DerivationPathTableViewCell = tableView.dequeCell(at: index)
            cell.update(item: item)
            cell.operationButton.publisher(for: .touchUpInside).sink { [weak self] _ in
                self?.viewModel.toggleItem(item: item)
            }.store(in: &cell.disposeBag)
            return cell
        }
    }()
    
    // MARK: - Property (UI)
    lazy var subtitleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.RH4
        label.textColor = Asset.Colors.Text.normal.color
        label.text = "(m/ 44'/ 60'/ 0' /0 )"
        return label
    }()
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.rowHeight = UITableView.automaticDimension
        view.estimatedRowHeight = 40
        view.sectionHeaderHeight = UITableView.automaticDimension
        view.estimatedSectionHeaderHeight = 37
        
        view.delegate = self
        view.separatorStyle = .none
        view.backgroundColor = .clear
        
        view.register(DerivationPathTableViewCell.self)
        view.registerHeaderFooter(DerivationPathHeaderView.self)

        return view
    }()
    
    lazy var nextButton: PrimeryButton = {
        let button = PrimeryButton(title: L10n.Common.Controls.next)
        button.isEnabled = false
        button.snp.makeConstraints {
            $0.height.equalTo(52)
        }
        return button
    }()
    
    lazy var bottomView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 24, left: LayoutConstraints.leading, bottom: 24, right: LayoutConstraints.trailing)
        
        view.addArrangedSubview(nextButton)
        return view
    }()
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 12, left: 0, bottom: 0, right: 0)
        
        let subtitleStackView: UIStackView = {
            let view = UIStackView()
            view.isLayoutMarginsRelativeArrangement = true
            view.layoutMargins = UIEdgeInsets(top: 0, left: LayoutConstraints.leading, bottom: 0, right: LayoutConstraints.trailing)
            view.addArrangedSubview(subtitleLabel)
            return view
        }()
        
        view.addArrangedSubview(subtitleStackView)
        view.addArrangedSubview(tableView)
        view.addArrangedSubview(bottomView)
        return view
    }()
    
    // MARK: - Lifecycle
    init(name: String?, mnemonic: String) {
        self.viewModel = DerivationPathsViewModel(name: name, mnemonic: mnemonic)
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        title = L10n.Scene.WalletDerivationPath.title
        navigationItem.largeTitleDisplayMode = .always
        navigationController?.navigationBar.prefersLargeTitles = true
        
        setupUI()
        bindViewModel()
    }
    
    // MARK: - Private methods
    private func bindViewModel() {
        viewModel.fetchAccountsAndBalance()
        
        viewModel.itemListSubject
            .receive(on: DispatchQueue.main)
            .sink { [weak self] items in
                guard let self = self else { return }
                var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
                snapshot.appendSections([.main])
                snapshot.appendItems(items)
                self.dataSource.apply(snapshot, animatingDifferences: false)
            }.store(in: &disposeBag)
        
        viewModel.itemListSubject
            .compactMap({ items in
                let existAddresses = WalletCoreService.shared.getAllAccounts().compactMap { account in
                    return account.address
                }
                return items.contains { $0.isAdded && !existAddresses.contains($0.address) }
            })
            .receive(on: DispatchQueue.main)
            .assign(to: \.isEnabled, on: nextButton)
            .store(in: &disposeBag)
        
        nextButton.publisher(for: .touchUpInside).sink { [weak self] _ in
            guard let self = self else { return }
            let result = self.viewModel.createAccounts()
            switch result {
            case .success:
                self.showSuccess()
                
            case let .failure(errorList):
                errorList.list.forEach { [weak self] error in
                    self?.showError(error: error)
                }
            }
        }.store(in: &disposeBag)
    }
    
    private func setupUI() {
        view.addSubview(stackView)
        
        stackView.snp.makeConstraints {
            $0.top.leading.trailing.equalToSuperview()
            $0.bottom.equalTo(view.safeAreaLayoutGuide.snp.bottom)
        }
    }
    
    private func showSuccess() {
        let alertController = AlertController(
            title: L10n.Common.Alert.WalletImport.alertTitleSuccess,
            message: "",
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .success,
            confirmButtonClicked: { _ in
                let walletListVC = self.navigationController?.viewControllers.first(where: { vc in
                    return vc.isKind(of: WalletListViewController.self)
                })
                if let walletListVC = walletListVC {
                    self.navigationController?.popToViewController(walletListVC, animated: true)
                    return
                }
                
                Coordinator.main.present(scene: .balance, transition: .replaceCurrentNavigation(tab: .wallet, animated: true))
            }
        )
        
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }
    
    private func showError(error: Error) {
        let alertController = AlertController(
            title: L10n.Common.Alert.WalletImport.alertTitleFail,
            message: error.localizedDescription,
            confirmButtonText: L10n.Common.Controls.ok,
            imageType: .error
        )
        
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }
}

extension DerivationPathViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let view = tableView.dequeueHeaderFooter(DerivationPathHeaderView.self)
        
        return view
    }
}
