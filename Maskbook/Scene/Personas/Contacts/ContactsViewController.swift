//
//  ContactsViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
import UStack
import CoreDataStack

class ContactsViewController: BaseViewController {
    private var disposeBag = Set<AnyCancellable>()

    private let viewModel = ContactsViewViewModel()

    @InjectedProvider(\.userDefaultSettings)
    private var settings

    @InjectedProvider(\.personaManager)
    private var personaManager

    private lazy var emptyView: UIStackView = VStackView(spacing: 24,
                                                         distribution: StackView.Distribution.fill,
                                                         alignment: StackView.Alignment.center) {
        emptyImageView
        emptyTipsLabel
        inviteButton.cv.apply {
            NSLayoutConstraint.activate([
                $0.heightAnchor.constraint(equalToConstant: 40),
                $0.widthAnchor.constraint(equalToConstant: 128)
            ])
        }
    }

    private let emptyImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Personas.emptyContact.image
        imageView.contentMode = .scaleAspectFit
        return imageView
    }()

    private let emptyTipsLabel: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.PersonaContacts.emptyContactsTips
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH6
        label.numberOfLines = 0
        label.textAlignment = .center
        return label
    }()

    private let inviteButton = PrimeryButton(title: L10n.Common.Controls.invite)

    private lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 80
        view.rowHeight = 80
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.dataSource = self
        view.register(ContactProfileTableViewCell.self)
        view.contentInsetAdjustmentBehavior = .always
        return view
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        showEmptyView()
        subscribeSignal()
    }

    override func viewWillLayoutSubviews() {
        super.viewWillLayoutSubviews()
        adjustTableViewInset()
    }

    func adjustTableViewInset() {
        let insets = UIEdgeInsets(top: -tableView.adjustedContentInset.top + 14, left: 0, bottom: 0, right: 0)
        tableView.scrollIndicatorInsets = insets
        tableView.contentInset = insets
    }

    func showEmptyView() {
        view.withSubViews {
            emptyView
        }
        NSLayoutConstraint.activate([
            emptyView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            emptyView.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])
    }

    func setupTableView() {
        view.withSubViews {
            tableView
        }
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.topAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }

    func subscribeSignal() {
        inviteButton.cv.tap()
            .sink { [weak self] _ in
                guard let sender = self?.inviteButton else { return }
                self?.shareAction(sender: sender)
            }
            .store(in: &disposeBag)

        viewModel.profileRecordsSubject
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.refreshTableView()
            }
            .store(in: &disposeBag)
    }

    func refreshTableView() {
        if !viewModel.profileRecordsSubject.value.isEmpty {
            if tableView.superview == nil {
                setupTableView()
            }
            tableView.reloadData()
            emptyView.removeFromSuperview()
        } else {
            if emptyView.superview == nil {
                showEmptyView()
            }
            tableView.removeFromSuperview()
        }
        tableView.reloadData()
    }

    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        adjustTableViewInset()
    }
}

extension ContactsViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        viewModel.profileRecordsSubject.value.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: ContactProfileTableViewCell = tableView.dequeCell(at: indexPath)
        let profileRecord = viewModel.profileRecordsSubject.value[safeIndex: indexPath.row]

        if let profileRecord = profileRecord {
            cell.config(profile: profileRecord)
            cell.inviteButton.removeTarget(self, action: #selector(shareAction(sender:)), for: .touchUpInside)
            cell.inviteButton.addTarget(self, action: #selector(shareAction(sender:)), for: .touchUpInside)
        } else {
            return UITableViewCell()
        }
        return cell
    }
}

extension ContactsViewController {
    @objc
    func shareAction(sender: UIView) {
        guard let url = URL(string: "https://mask.io/download-links/") else { return }

        let activityViewController = UIActivityViewController(
            activityItems: [url],
            applicationActivities: [DownloadMaskActivity(url: url)]
        )
        Coordinator.main.present(scene: .activityViewController(
            activityViewController: activityViewController,
            sourceView: nil,
            barButtonItem: nil
        ),
        transition: .presentActivity(animated: true, from: sender, completion: nil))
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct ContactsPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            ContactsViewController().view
        }
    }
}
#endif
