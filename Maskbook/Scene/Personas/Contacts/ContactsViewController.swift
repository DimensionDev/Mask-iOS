//
//  ContactsViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import UIKit
import UStack

class ContactsViewController: BaseViewController {
    static var searchBarHeight: CGFloat = 52

    static var tableHeaderHeight: CGFloat = 52 + 12
    
    private var disposeBag = Set<AnyCancellable>()

    let viewModel = ContactsViewModel()

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

    private lazy var emptyImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Personas.emptyContact.image
        imageView.contentMode = .scaleAspectFit
        return imageView
    }()

    private lazy var emptyTipsLabel: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.PersonaContacts.emptyContactsTips
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH6
        label.numberOfLines = 0
        label.textAlignment = .center
        return label
    }()

    private lazy var inviteButton = PrimeryButton(title: L10n.Common.Controls.invite)

    private lazy var searchBar: UISearchBar = {
        let searchBar = UISearchBar()
        searchBar.translatesAutoresizingMaskIntoConstraints = false
        searchBar.placeholder = L10n.Scene.Personas.Search.placeholder
        searchBar.delegate = self
        searchBar.searchBarStyle = .minimal
        searchBar.update(height: Self.searchBarHeight, color: Asset.Colors.Background.dark.color, radius: 10)
        let attributes = [NSAttributedString.Key.font: FontStyles.BH5,
                          NSAttributedString.Key.foregroundColor: Asset.Colors.Text.dark.color]
        UIBarButtonItem.appearance(whenContainedInInstancesOf: [UISearchBar.self]).setTitleTextAttributes(attributes,
                                                                                                          for: .normal)
        UIBarButtonItem.appearance(whenContainedInInstancesOf: [UISearchBar.self]).title = L10n.Common.Controls.cancel
        return searchBar
    }()

    private lazy var tableHeader: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(searchBar)
        NSLayoutConstraint.activate([
            searchBar.topAnchor.constraint(equalTo: view.topAnchor),
            searchBar.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 15),
            searchBar.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -15),
            searchBar.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -12),
            searchBar.heightAnchor.constraint(equalToConstant: Self.searchBarHeight)
        ])
        return view
    }()

    private lazy var tableView: FixUITableView = {
        let view = FixUITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 80
        view.rowHeight = 80
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.dataSource = self
        view.delegate = self
        view.register(ContactProfileTableViewCell.self)
        return view
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        showEmptyView()
        subscribeSignal()
        addSearchBar()
        adjustTableView()
    }

    func adjustTableView() {
        let insets = UIEdgeInsets(top: Self.tableHeaderHeight, left: 0, bottom: 0, right: 0)
        tableView.scrollIndicatorInsets = insets
        tableView.contentInset = insets
        tableView.contentOffset = CGPoint(x: 0, y: -Self.tableHeaderHeight)
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
            tableView.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor),
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

        viewModel.dataSource
            .removeDuplicates()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.refreshTableView()
            }
            .store(in: &disposeBag)
    }

    func addSearchBar() {
        tableHeader.frame = CGRect(origin: CGPoint(x: 0,
                                                   y: -Self.tableHeaderHeight),
                                   size: CGSize(width: UIScreen.main.bounds.width,
                                                height: Self.tableHeaderHeight))
        tableView.addSubview(tableHeader)
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
        searchBar.update(height: Self.searchBarHeight, color: Asset.Colors.Background.dark.color, radius: 10)
    }
}

extension ContactsViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        viewModel.dataSource.value.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: ContactProfileTableViewCell = tableView.dequeCell(at: indexPath)
        let profileRecord = viewModel.dataSource.value[safeIndex: indexPath.row]

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

extension ContactsViewController: UITableViewDelegate {
    func scrollViewDidScroll(_ scrollView: UIScrollView) {
        if !viewModel.isSearching.value {
            tableHeader.frame.origin = CGPoint(x: 0, y: -Self.tableHeaderHeight)
        } else {
            tableHeader.frame.origin = CGPoint(x: 0, y: tableView.contentOffset.y)
        }
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

extension ContactsViewController: UISearchBarDelegate {
    func searchBarShouldBeginEditing(_ searchBar: UISearchBar) -> Bool {
        true
    }

    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        viewModel.searchString.value = searchBar.text ?? ""
    }

    func searchBarTextDidBeginEditing(_ searchBar: UISearchBar) {
        searchBar.setShowsCancelButton(true, animated: true)
        viewModel.isSearching.value = true
    }

    func searchBarCancelButtonClicked(_ searchBar: UISearchBar) {
        searchBar.setShowsCancelButton(false, animated: true)
        searchBar.text = nil
        viewModel.searchString.value = ""
        viewModel.isSearching.value = false
        searchBar.resignFirstResponder()
    }

    func searchBarTextDidEndEditing(_ searchBar: UISearchBar) {
        searchBar.resignFirstResponder()
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
