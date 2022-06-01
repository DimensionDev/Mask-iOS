//
//  SelectContactViewController.swift
//  Maskbook
//
//  Created by caiyu on 2022/5/23.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit

import Combine
import Foundation
import PanModal
import UIKit

class SelectContactViewController: UIViewController {
    var viewModel: SelectContactViewModel
    
    static let rowHeight: CGFloat = 72
    
    init(viewModel: SelectContactViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .center
        return label
    }()

    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = SelectContactViewController.rowHeight
        view.rowHeight = SelectContactViewController.rowHeight
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.delegate = self
        view.dataSource = self
        view.register(SelectContactTableViewCell.self, forCellReuseIdentifier: String(describing: SelectContactTableViewCell.self))
        return view
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
    }
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(titleLabel)
        view.addSubview(tableView)
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            titleLabel.topAnchor.constraint(equalTo: view.topAnchor),
            titleLabel.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            titleLabel.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])

        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: titleLabel.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
}

extension SelectContactViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.reloadData()
        dismiss(animated: true)
    }
}

extension SelectContactViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return viewModel.titles.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: SelectContactTableViewCell = tableView.dequeCell(at: indexPath)
        cell.update(index: indexPath.row, selected: viewModel.selectedIndex == indexPath.row, viewModel: viewModel)
        return cell
    }
    // swiftlint:enable force_cast
}

extension SelectContactViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        .contentHeight(SelectContactViewController.rowHeight * CGFloat(viewModel.titles.count) + 58)
    }
}
