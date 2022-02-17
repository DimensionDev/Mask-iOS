//
//  WalletConnectDappListViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import Alamofire
import Combine
import Foundation
import PanModal
import UIKit
import WalletConnectSwift
import CoreDataStack

class WalletConnectDappListViewController: BaseViewController {
    @InjectedProvider(\.walletConnectServer)
    private var walletConnectServer

    static let rowHeight: CGFloat = 85

    private var disposeBag = Set<AnyCancellable>()

    private lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = PersonaActionViewController.rowHeight
        view.rowHeight = WalletConnectDappListViewController.rowHeight
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.separatorInset = UIEdgeInsets(all: .zero)
        view.dataSource = self
        view.register(WalletConnectDappCell.self)
        view.translatesAutoresizingMaskIntoConstraints = false
        view.isScrollEnabled = false
        return view
    }()

    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH4
        label.text = L10n.Scene.WalletConnectServer.connectedApps
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        addTitleLabel()
        setupTableView()
        subscribeSignal()
    }
    
    func addTitleLabel() {
        view.addSubview(titleLabel)
        NSLayoutConstraint.activate([
            titleLabel.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor, constant: 48),
            titleLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor)
        ])
    }

    func subscribeSignal() {
        walletConnectServer.sessionsPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] sessions in
                self?.tableView.reloadData()
                if sessions.isEmpty {
                    self?.dismiss(animated: true, completion: nil)
                }
            }
            .store(in: &disposeBag)
    }

    private func setupTableView() {
        view.addSubview(tableView)

        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: titleLabel.bottomAnchor, constant: 21),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
    
    private func disconnectAction(session: WalletConnectSession) {
        if let topic = session.topic {
            walletConnectServer.disconnect(topic: topic)
        }
    }
}

extension WalletConnectDappListViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        walletConnectServer.sessionsPublisher.value.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: WalletConnectDappCell = tableView.dequeCell(at: indexPath)
        let wcSession = walletConnectServer.sessionsPublisher.value[indexPath.row]
        if let session = try? Session.from(wcSession) {
            cell.configWith(session: session)
        }
        cell.disconnectButton
            .cv.tap()
            .sink { [weak self] in
                self?.disconnectAction(session: wcSession)
            }
            .store(in: &cell.disposeBag)
        return cell
    }
}

extension WalletConnectDappListViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        tableView
    }

    var longFormHeight: PanModalHeight {
        .contentHeight(134 + CGFloat(walletConnectServer.sessionsPublisher.value.count) * WalletConnectDappListViewController.rowHeight)
    }
}
