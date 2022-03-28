//
//  SocialProfileDetectViewController.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import PanModal
import UIKit

typealias SocialProfileDetectable = SocialProfileDetectViewControllerDelegate
protocol SocialProfileDetectViewControllerDelegate: AnyObject {
    func socialProfileDetectViewController(
        _ controller: SocialProfileDetectViewController,
        didConnect profiles: [SocialProfile]
    )
}

class SocialProfileDetectViewController: UIViewController {
    typealias ViewModel = SocialProfileDetectViewModel
    typealias Section = ViewModel.Section
    typealias Item = ViewModel.ProfileItem
    
    lazy var stackView: UIStackView = {
        let stack = UIStackView()
        stack.axis = .horizontal
        stack.alignment = .center
        stack.distribution = .equalSpacing
        stack.spacing = 16
        stack.translatesAutoresizingMaskIntoConstraints = false
        return stack
    }()
    
    lazy var avatarView: AvatarView = {
        let view = AvatarView(title: "")
        view.applyCornerRadius(radius: 24, cornerCurve: .circular)
        view.backgroundColor = Asset.Colors.Public.blue.color
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 48),
            view.heightAnchor.constraint(equalToConstant: 48)
        ])
        return view
    }()
    
    lazy var dotsView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Social.connectDots.image
        imageView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            imageView.widthAnchor.constraint(equalToConstant: 26),
            imageView.heightAnchor.constraint(equalToConstant: 6)
        ])
        return imageView
    }()
    
    lazy var logoView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Social.iconMaskDashboard.image
        imageView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            imageView.widthAnchor.constraint(equalToConstant: 48),
            imageView.heightAnchor.constraint(equalToConstant: 48)
        ])
        return imageView
    }()
    
    lazy var hintTitle: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.bh3.uifont
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 52
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.register(SocialProfileDetectCell.self)
        view.delegate = self
        return view
    }()
    
    lazy var connectButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.Social.connectButtonTitle)
        return btn
    }()
    
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        return UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { tableView, indexPath, item in
            let cell: SocialProfileDetectCell = tableView.dequeCell(at: indexPath)
            switch item {
            case let .item(profile):
                cell.titleLabel.text = profile.userId
                cell.isConnected = profile.connected
            }
            return cell
        }
    }()
    
    let viewModel: ViewModel
    var disposeBag = Set<AnyCancellable>()
    
    weak var delegate: SocialProfileDetectViewControllerDelegate?
    
    init(profiles: [SocialProfile], personaIdentifier: String, delegate: SocialProfileDetectViewControllerDelegate?) {
        self.viewModel = ViewModel(profiles: profiles, personaIdentifier: personaIdentifier)
        self.delegate = delegate
        super.init(nibName: nil, bundle: nil)
        
        self.title = L10n.Scene.Social.profileSelectTitle
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupUI()
        bindViewModel()
    }
    
    // MARK: Actions
    @objc
    func onDoneDidClick() {
        self.dismiss(animated: true, completion: nil)
    }
    
    // MARK: Private methods
    private func bindViewModel() {
        viewModel.menuItemsPublisher.sink { [weak self] items in
            guard let self = self else { return }
            var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
            snapshot.appendSections([.main])
            snapshot.appendItems(items)
            self.dataSource.apply(snapshot)
        }
        .store(in: &disposeBag)
    }
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(stackView)
        view.addSubview(hintTitle)
        view.addSubview(tableView)
        view.addSubview(connectButton)
        
        avatarView.title = String(viewModel.persona?.nickname?.dropFirst() ?? "")
        avatarView.setNetworkURL(url: viewModel.persona?.avatar)
        
        let connected = viewModel.profiles.first?.connected ?? false
        hintTitle.text = connected ? L10n.Scene.Social.accountAlreadyConnected : L10n.Scene.Social.connectToMaskNetwork
        
        stackView.addArrangedSubview(avatarView)
        stackView.addArrangedSubview(dotsView)
        stackView.addArrangedSubview(logoView)
        
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: view.topAnchor, constant: 48),
            stackView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            stackView.heightAnchor.constraint(equalToConstant: 48),
            stackView.widthAnchor.constraint(equalToConstant: 153)
        ])
        
        hintTitle.setContentHuggingPriority(.defaultLow - 1, for: .vertical)
        NSLayoutConstraint.activate([
            hintTitle.topAnchor.constraint(equalTo: stackView.bottomAnchor, constant: 21),
            hintTitle.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            hintTitle.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 64),
            hintTitle.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -64),
            hintTitle.heightAnchor.constraint(equalToConstant: 22)
        ])
        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: hintTitle.bottomAnchor, constant: 21),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            tableView.heightAnchor.constraint(equalToConstant: 52)
        ])
        
        connectButton.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            connectButton.topAnchor.constraint(equalTo: tableView.bottomAnchor, constant: 20),
            connectButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            connectButton.heightAnchor.constraint(equalToConstant: 54),
            connectButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing),
            connectButton.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: -24)
        ])
        
        let allConnected = viewModel.profiles.allSatisfy { $0.connected }
        
        connectButton.setTitle(allConnected ? L10n.Common.Controls.done : L10n.Scene.Social.connectButtonTitle, for: .normal)
        connectButton.addTarget(self, action: #selector(didClickConnectButton(_:)), for: .touchUpInside)
    }
    
    @objc
    private func didClickConnectButton(_ sender: UIButton) {
        let notConnectedProfiles = viewModel.profiles.filter { !$0.connected }
        delegate?.socialProfileDetectViewController(self, didConnect: notConnectedProfiles)
    }
}

extension SocialProfileDetectViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        return nil
    }
    
    var longFormHeight: PanModalHeight {
        .intrinsicHeight
    }
    
    var allowsTapToDismiss: Bool {
        return false
    }
}

extension SocialProfileDetectViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {}
}
