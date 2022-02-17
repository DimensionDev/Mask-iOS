//
//  SelectItemViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/4.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit

class SelectItemViewController: UIViewController {
    var viewModel: SelectItemViewModelProtocol
    
    static let rowHeight: CGFloat = 72
    
    init(viewModel: SelectItemViewModelProtocol) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
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
        view.estimatedRowHeight = SelectItemViewController.rowHeight
        view.rowHeight = SelectItemViewController.rowHeight
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.delegate = self
        view.dataSource = self
        view.register(PanModelSettingTableViewCell.self, forCellReuseIdentifier: String(describing: PanModelSettingTableViewCell.self))
        return view
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
    }
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(navigationBar)
        view.addSubview(tableView)
        
        navigationBar.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            navigationBar.topAnchor.constraint(equalTo: view.topAnchor),
            navigationBar.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            navigationBar.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: navigationBar.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
}

extension SelectItemViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        viewModel.select(index: indexPath.row)
        tableView.reloadData()
        dismiss(animated: true)
    }
}

extension SelectItemViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return viewModel.titles().count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: PanModelSettingTableViewCell = tableView.dequeCell(at: indexPath)
        let title = viewModel.titles()[indexPath.row]
        cell.update(title: title, selected: viewModel.selectedIndex() == indexPath.row)
        return cell
    }
    // swiftlint:enable force_cast
}

extension SelectItemViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        .contentHeight(SelectItemViewController.rowHeight * CGFloat(viewModel.titles().count) + 58)
    }
}
