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
    // MARK: Internal

    static var searchBarHeight: CGFloat = 52

    static var tableHeaderHeight: CGFloat = 52 + 22

    let viewModel = ContactsViewModel()

    override func viewDidLoad() {
        super.viewDidLoad()
        setupTableView()
        showEmptyView()
        subscribeSignal()
        addSearchBar()
        adjustTableView()
    }

    func adjustTableView() {
        let insets = UIEdgeInsets(top: Self.tableHeaderHeight, left: 0, bottom: 0, right: 0)
        tableView.scrollIndicatorInsets = insets
        tableView.contentInset = insets
        tableView.contentOffset = CGPoint(x: 0, y: -Self.tableHeaderHeight - tableView.adjustedContentInset.top)
    }

    func showEmptyView() {
        view.withSubViews {
            emptyView
        }
        NSLayoutConstraint.activate([
            emptyView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            emptyView.centerYAnchor.constraint(equalTo: view.centerYAnchor, constant: -10),
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
        viewModel.isSearching
            .receive(on: DispatchQueue.main)
            .sink { [weak self] isSearching in
                self?.emptyView.setSearchMode(isSearching: isSearching)
            }
            .store(in: &disposeBag)
        viewModel.dataSource
            .removeDuplicates()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.refreshTableView()
            }
            .store(in: &disposeBag)

        viewModel.profileRecordsSubject
            .receive(on: DispatchQueue.main)
            .sink { [weak self] records in
                self?.searchBar.alpha = records.isEmpty ? 0 : 1
            }
            .store(in: &disposeBag)
    }

    func addSearchBar() {
        tableHeader.frame = CGRect(
            origin: CGPoint(
                x: 0,
                y: -Self.tableHeaderHeight
            ),
            size: CGSize(
                width: UIScreen.main.bounds.width,
                height: Self.tableHeaderHeight
            )
        )
        tableView.addSubview(tableHeader)
    }

    func refreshTableView() {
        emptyView.isHidden = !viewModel.dataSource.value.isEmpty
        tableView.reloadData()
    }

    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        searchBar.update(height: Self.searchBarHeight, color: Asset.Colors.Background.dark.color, radius: 10)
    }

    // MARK: Private

    private var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.userDefaultSettings)
    private var settings

    @InjectedProvider(\.personaManager)
    private var personaManager

    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator

    private lazy var searchBar: UISearchBar = {
        let searchBar = UISearchBar()
        searchBar.translatesAutoresizingMaskIntoConstraints = false
        searchBar.placeholder = "  " + L10n.Scene.Personas.Search.placeholder
        searchBar.delegate = self
        searchBar.searchBarStyle = .minimal
        searchBar.update(height: Self.searchBarHeight, color: Asset.Colors.Background.dark.color, radius: 10)
        let attributes = [
            NSAttributedString.Key.font: FontStyles.BH5,
            NSAttributedString.Key.foregroundColor: Asset.Colors.Text.dark.color,
        ]
        UIBarButtonItem.appearance(whenContainedInInstancesOf: [UISearchBar.self]).setTitleTextAttributes(
            attributes,
            for: .normal)
        UIBarButtonItem.appearance(whenContainedInInstancesOf: [UISearchBar.self]).title = L10n.Common.Controls.cancel

        UILabel.appearance(whenContainedInInstancesOf: [UISearchBar.self]).font = FontStyles.MH7
        UILabel.appearance(whenContainedInInstancesOf: [UISearchBar.self]).textColor = Asset.Colors.Text.light.color

        searchBar.setLeftImage(Asset.Images.Scene.Personas.searchBar.image, with: 10)
        return searchBar
    }()

    private lazy var tableHeader: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(searchBar)
        NSLayoutConstraint.activate([
            searchBar.topAnchor.constraint(equalTo: view.topAnchor, constant: 10),
            searchBar.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 15),
            searchBar.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -15),
            searchBar.heightAnchor.constraint(equalToConstant: Self.searchBarHeight),
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

    private lazy var emptyView = ContactEmptyView()
}

extension ContactsViewController: UITableViewDataSource {
    func tableView(_: UITableView, numberOfRowsInSection _: Int) -> Int {
        viewModel.dataSource.value.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: ContactProfileTableViewCell = tableView.dequeCell(at: indexPath)
        let profileRecord = viewModel.dataSource.value[safeIndex: indexPath.row]

        if let profileRecord = profileRecord {
            cell.config(profile: profileRecord)
            cell.onInviteEvent = { [weak self, cell] socialID in
                // as only twitter support invite
                // here we skip checking
                self?.shareAction(sender: cell.inviteButton, socialID: socialID)
            }
        }

        return cell
    }
}

extension ContactsViewController: UITableViewDelegate {
    func scrollViewDidScroll(_: UIScrollView) {
        if !viewModel.isSearching.value {
            tableHeader.frame.origin = CGPoint(x: 0, y: -Self.tableHeaderHeight)
        } else {
            tableHeader.frame.origin = CGPoint(x: 0, y: tableView.contentOffset.y)
        }
        searchBar.resignFirstResponder()
    }
}

extension ContactsViewController {
    private func shareAction(sender: UIView, socialID: String?) {
        guard let socialID = socialID else { return }

        let text = L10n.Scene.Share.invite(socialID)
        let maskSocialViewController = mainCoordinator.getMaskSocialViewController()
        maskSocialViewController?.openComposer(message: text.URLEncoded() ?? "")
        maskSocialViewController?.dismiss(animated: true)
    }
}

extension ContactsViewController: UISearchBarDelegate {
    func searchBarShouldBeginEditing(_: UISearchBar) -> Bool {
        true
    }

    func searchBar(_ searchBar: UISearchBar, textDidChange _: String) {
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

    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
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
