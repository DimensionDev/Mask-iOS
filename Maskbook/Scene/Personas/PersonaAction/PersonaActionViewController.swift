//
//  PersonaActionViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CombineEvent
import UIKit

class PersonaActionViewController: BaseViewController {
    var viewModel: PersonasActionViewModel
    
    static let rowHeight: CGFloat = 72
    
    private var disposeBag = Set<AnyCancellable>()
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    init(viewModel: PersonasActionViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = PersonaActionViewController.rowHeight
        view.rowHeight = PersonaActionViewController.rowHeight
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.separatorInset = UIEdgeInsets(all: .zero)
        view.delegate = self
        view.dataSource = self
        view.register(GroupStyleTableViewCell.self)
        view.contentInset = UIEdgeInsets(top: 24, left: 0, bottom: 0, right: 0)
        return view
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.largeTitleDisplayMode = .never
        setupTableView()
        subscribeSignal()
    }
    
    func subscribeSignal() {
        viewModel.dismissSignal
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { [weak self] completion in
                self?.navigationController?.popViewController(animated: true)
                if let completion = completion {
                    completion()
                }
            })
            .store(in: &disposeBag)
        
        personaManager.currentPersona
            .map { $0?.nickname }
            .assign(to: \.title, on: self)
            .store(in: &disposeBag)
    }
    private func setupTableView() {
        view.addSubview(tableView)

        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
}

extension PersonaActionViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let cell = tableView.cellForRow(at: indexPath)
        viewModel.select(index: indexPath.row, cell: cell)
        tableView.deselectRow(at: indexPath, animated: false)
    }
}

extension PersonaActionViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        viewModel.actionTitles.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: GroupStyleTableViewCell = tableView.dequeCell(at: indexPath)
        let title = viewModel.actionTitles[indexPath.row]
        let iconName = viewModel.actionIconNames[indexPath.row]
        cell.update(title: title, subTitle: nil, iconName: iconName)
        if indexPath.row == viewModel.actionTitles.count - 1 {
            cell.icon.tintColor = Asset.Colors.Public.error.color
            cell.titleLabel.textColor = Asset.Colors.Public.error.color
        } else {
            cell.icon.tintColor = nil
            cell.titleLabel.textColor = Asset.Colors.Text.dark.color
        }
        cell.contentView.backgroundColor = Asset.Colors.Background.normal.color
        return cell
    }
}
