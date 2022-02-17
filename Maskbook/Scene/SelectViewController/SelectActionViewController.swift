//
//  SelectActionViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit

class SelectActionViewController: UIViewController {
    var viewModel: SelectActionViewModelProtocol
    
    static let rowHeight: CGFloat = 72
    
    private var disposeBag = Set<AnyCancellable>()
    
    init(viewModel: SelectActionViewModelProtocol) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    lazy var navigationBar: UINavigationBar = {
        let view = UINavigationBar()
        view.tintColor = Asset.Colors.Public.blue.color
        view.setBackgroundImage(UIImage(), for: .default)
        view.shadowImage = UIImage()
        return view
    }()
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = SelectActionViewController.rowHeight
        view.rowHeight = SelectActionViewController.rowHeight
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.delegate = self
        view.dataSource = self
        view.register(SelectActionTableViewCell.self, forCellReuseIdentifier: String(describing: SelectActionTableViewCell.self))
        return view
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        
        viewModel.dismissSignal
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { [weak self] completion in
                self?.dismiss(animated: true, completion: completion)
            })
            .store(in: &disposeBag)
    }
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(navigationBar)
        view.addSubview(tableView)
        
        navigationBar.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            navigationBar.topAnchor.constraint(equalTo: view.topAnchor, constant: 27),
            navigationBar.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            navigationBar.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        if let title = viewModel.title {
            let navigationItem = UINavigationItem(title: title)
            navigationBar.items = [navigationItem]
        }
        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: navigationBar.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
}

extension SelectActionViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        viewModel.select(index: indexPath.row)
        tableView.reloadData()
    }
}

extension SelectActionViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        viewModel.actionTitles.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: SelectActionTableViewCell = tableView.dequeCell(at: indexPath)
        let title = viewModel.actionTitles[indexPath.row]
        let icon = viewModel.actionIcons[indexPath.row]
        cell.config(title: title, icon: icon)
        return cell
    }
    // swiftlint:enable force_cast
}

extension SelectActionViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        if let _ = viewModel.title {
            return .contentHeight(SelectActionViewController.rowHeight * CGFloat(viewModel.actionTitles.count) + 71)
        } else {
            return .contentHeight(SelectActionViewController.rowHeight * CGFloat(viewModel.actionTitles.count) + 58)
        }
    }
}
