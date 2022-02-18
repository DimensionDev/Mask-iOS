//
//  PersonaListViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit

class PersonaListViewController: UIViewController {
    let viewModel = PersonaListViewModel()
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    private var disposeBag = Set<AnyCancellable>()
    
    static let rowHeight: CGFloat = 72

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
        view.estimatedRowHeight = PersonaListViewController.rowHeight
        view.rowHeight = PersonaListViewController.rowHeight
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.delegate = self
        view.dataSource = self
        view.register(PanModelSettingTableViewCell.self)
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
            navigationBar.topAnchor.constraint(equalTo: view.topAnchor, constant: 27),
            navigationBar.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            navigationBar.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        
        let navigationItem = UINavigationItem(title: L10n.Scene.Personas.personas)
        navigationBar.items = [navigationItem]
        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: navigationBar.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
}

extension PersonaListViewController {
    func showCreatePersonaViewController(cell: UIView?) {
        let viewModel = RenameViewModel(
            originalName: "",
            title: L10n.Scene.Personas.Create.createPersona) { [weak self] name in
                guard let self = self else { return }
                if self.viewModel.titles.contains(name) {
                    self.dismiss(animated: false) {
                        self.personaNicknameDuplicated()
                    }
                    return
                }
                self.dismiss(animated: true) {
                    self.personaManager.temporaryPersonaName = name
                    Coordinator.main.present(scene: .identityCreate, transition: .detail(animated: true))
                }
        }
        
        Coordinator.main.present(
            scene: .rename(viewModel: viewModel),
            transition: .panModel(animated: true)
        )
    }
    
    func personaNicknameDuplicated() {
        let alertController = AlertController(
            title: L10n.Common.Alert.PersonaNameDuplicated.title,
            message: "",
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .error)
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil))
    }
}

extension PersonaListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if viewModel.titles.count - 1 == indexPath.row {
            let cell = tableView.cellForRow(at: indexPath)
            showCreatePersonaViewController(cell: cell)
        } else {
            viewModel.changeCurrentPersona(to: indexPath.row)
            dismiss(animated: true, completion: nil)
        }
    }
}

extension PersonaListViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        viewModel.titles.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: PanModelSettingTableViewCell = tableView.dequeCell(at: indexPath)
        let title = viewModel.titles[indexPath.row]
        if viewModel.titles.count - 1 == indexPath.row {
            cell.setAddIcon(title: title)
        } else {
            cell.update(title: title, selected: viewModel.selectedIndex == indexPath.row)
        }
        return cell
    }
}

extension PersonaListViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        .contentHeight(PersonaListViewController.rowHeight * CGFloat(viewModel.titles.count) + 71)
    }
}
