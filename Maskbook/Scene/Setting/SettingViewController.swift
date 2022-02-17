//
//  SettingViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CombineEvent
import UIKit

// swiftlint:disable identifier_name
class SettingViewController: BaseViewController {
    let viewModel = SettingViewModel()

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    var disposeBag = Set<AnyCancellable>()
    
    @InjectedProvider(\.vault)
    private var vault
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting

    let tableView: UITableView = {
        let tableView = ControlContainableTableView()
        tableView.separatorStyle = .none
        tableView.tableFooterView = UIView()
        tableView.estimatedRowHeight = 64
        tableView.rowHeight = 64
        tableView.backgroundColor = .clear
        tableView.separatorInset = UIEdgeInsets(all: .zero)
        tableView.register(SettingTableViewCell.self)
        return tableView
    }()

    lazy var dataSource: UITableViewDiffableDataSource<SettingViewModel.Section, SettingViewModel.Item> = {
        UITableViewDiffableDataSource<SettingViewModel.Section, SettingViewModel.Item>(tableView: tableView) {
            tableView, indexPath, item in
            let cell: SettingTableViewCell = tableView.dequeCell(at: indexPath)
            cell.update(item: item)
            cell.rightSwitch.cv.publisher(on: .valueChanged)
                .sink { sender in
                    if sender.isOn {
                        LocalAuthentication.shared.openBiometryID { success, _ in
                            if success {
                                maskUserDefaults.enableBiometryID = true
                            } else {
                                DispatchQueue.main.async {
                                    sender.isOn.toggle()
                                }
                            }
                        }
                    } else {
                        maskUserDefaults.enableBiometryID = false
                    }
                }
                .store(in: &cell.disposeBag)
            return cell
        }
    }()
    
    override var navigationBarHidden: Bool {
        true
    }

    private lazy var feedbackGenerator = UISelectionFeedbackGenerator()
}

extension SettingViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Asset.Colors.Background.normal.color
        navigationItem.largeTitleDisplayMode = .never
        setupTableView()
        setupDataSource()
        bindViewModel()

        feedbackGenerator.prepare()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        tableView.deselectRow(with: transitionCoordinator, animated: animated)
        tableView.reloadData()
    }
    
    func setupTableView() {
        tableView.delegate = self
        tableView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(tableView)
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.layoutMarginsGuide.topAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
    }
    
    func setupDataSource() {
        var generals: [SettingViewModel.Item] = [
            .language,
            .appearance,
            .dataSource
        ]
        if vault.hasSetWalletPassword() {
            generals.append(.changePassword)
        }
        if LocalAuthentication.shared.isBiometricsAvailable() {
            generals.append(.unlockWithBioID)
        }

        typealias Section = SettingViewModel.Section
        typealias Item = SettingViewModel.Item
        typealias Pair = SectionPack<Section, Item>
        let snapshot = NSDiffableDataSourceSnapshot {
            Pair.single(.init(section: .general, items: generals))
            Pair.single(.init(section: .backUpAndRestore, items: [
                .restoreData,
                .backUpData,
                userSetting.hasBackupPassword ? .changeBackUpPassword : .backUpPassword,
                .email(value: userSetting.remoteBackupEmail ?? L10n.Scene.Setting.Profile.emailEmpty),
                .phoneNumber(
                    value: userSetting.remoteBackupPhoneNumber?.formattedPhoneNumber
                    ?? L10n.Scene.Setting.Profile.phoneNumberEmpty
                )
            ]))
        }
        
        dataSource.defaultRowAnimation = .none
        dataSource.apply(snapshot)
        
        GetTrendingDataSourceMWEMessage()
            .eraseToAnyPublisher()
            .compactMap { $0.dataSource }
            .eraseToAnyPublisher()
            .receive(on: RunLoop.main)
            .sink(receiveCompletion: { _ in
            }) { [weak self] provider in
                guard let self = self else { return }
                guard let indexPath = self.dataSource.indexPath(for: .dataSource) else { return }
                if let cell = self.tableView.cellForRow(at: indexPath) as? SettingTableViewCell {
                    cell.currentValueLabel.text = provider.title
                }
            }
            .store(in: &disposeBag)
    }
}

extension SettingViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let sectionData = dataSource.snapshot().sectionIdentifiers[section] as SettingViewModel.Section
        let label = UILabel()
        label.backgroundColor = .clear
        label.font = FontStyles.BH3
        label.textColor = Asset.Colors.Text.dark.color
        label.text = sectionData.title()
        label.translatesAutoresizingMaskIntoConstraints = false
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(label)
        
        label.snp.makeConstraints { make in
            make.leading.equalTo(22)
            make.top.equalTo(section == 0 ? 16 : 32)
            make.bottom.equalTo(-28)
        }
        return view
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let section = dataSource.snapshot().sectionIdentifiers[indexPath.section] as SettingViewModel.Section
        let cell = tableView.cellForRow(at: indexPath)
        switch section {
        case .general:
            let item = dataSource.snapshot().itemIdentifiers(inSection: .general)[indexPath.row] as SettingViewModel.Item
            switch item {
            case .language:
                let viewModel = LanguageUpdateViewModel()
                coordinator.present(
                    scene: .selectItemViewController(viewModel: viewModel),
                    transition: .panModel(animated: true))

            case .appearance:
                let viewModel = SelectAppearanceViewModel()
                coordinator.present(
                    scene: .selectItemViewController(viewModel: viewModel),
                    transition: .panModel(animated: true))

            case .dataSource:
                let viewModel = SelectDataSourceViewModel()
                coordinator.present(
                    scene: .selectItemViewController(viewModel: viewModel),
                    transition: .panModel(animated: true))

            case .setupPassword:
                self.coordinator.present(
                    scene: .setPassword,
                    transition: .panModel()
                )
                
            case .changePassword:
                self.coordinator.present(
                    scene: .changePasswordStep1,
                    transition: .panModel()
                )
                
            default:
                print("\(item) does not response to selection")
            }

        case .backUpAndRestore:
            let idetifiers = dataSource.snapshot().itemIdentifiers(inSection: .backUpAndRestore)
            let item = idetifiers[indexPath.row] as SettingViewModel.Item
            switch item {
            case .restoreData:
                restoreData()

            case .backUpData:
                showBackupData(sourceView: cell)

            case .backUpPassword:
                coordinator.present(
                    scene: .setBackupPassword,
                    transition: .panModel()
                )
                
            case .changeBackUpPassword:
                coordinator.present(
                    scene: .changeBackupPasswordStep1,
                    transition: .panModel()
                )
                
            case .email:
                let didBindEmail = userSetting.remoteBackupEmail?.isNotEmpty ?? false
                let scene: Coordinator.Scene = didBindEmail ? .changeEmail : .setupEmail
                coordinator.present(scene: scene, transition: .popup)
                feedbackGenerator.selectionChanged()

            case .phoneNumber:
                let didBindPhoneNumber = userSetting.remoteBackupPhoneNumber?.isNotEmpty ?? false
                let scene: Coordinator.Scene = didBindPhoneNumber ? .changePhoneNumber : .setupPhoneNumber
                coordinator.present(scene: scene, transition: .popup)
                feedbackGenerator.selectionChanged()

            default:
                break
            }
        }

        tableView.deselectRow(at: indexPath, animated: false)
    }
    
    func tableView(_ tableView: UITableView, willDisplay cell: UITableViewCell, forRowAt indexPath: IndexPath) {
        guard let cell = cell as? SettingTableViewCell else {
            return
        }
        let count = tableView.numberOfRows(inSection: indexPath.section)
        let row = indexPath.row
        
        if row == 0 {
            cell.roundBackgroundView.applyRadius(radius: 8, corners: [.topLeft, .topRight])
            cell.bottomSeperatorLine.isHidden = false
        } else if row == count - 1 {
            cell.roundBackgroundView.applyRadius(radius: 8, corners: [.bottomLeft, .bottomRight])
            cell.bottomSeperatorLine.isHidden = true
        } else {
            cell.roundBackgroundView.applyRadius(radius: 0)
            cell.bottomSeperatorLine.isHidden = false
        }
    }

    private func bindViewModel() {
        let backupPasswordDidChange = userSetting
            .$hasBackupPassword
            .removeDuplicates().map { _ in () }
            .eraseToAnyPublisher()
        let walletPasswordDidChnage = userSetting
            .$walletPasswordData
            .removeDuplicates()
            .map { _ in () }
            .eraseToAnyPublisher()
        let dataSourceDidChnage = userSetting
            .$dataProviderValue
            .removeDuplicates()
            .map { _ in () }
            .eraseToAnyPublisher()
        let emailDidChange = userSetting
            .$remoteBackupEmail
            .removeDuplicates()
            .map { _ in () }
            .eraseToAnyPublisher()
        let phoneDidChange = userSetting
            .$remoteBackupPhoneNumber
            .removeDuplicates()
            .map { _ in () }
            .eraseToAnyPublisher()
        
        Publishers.MergeMany(
            backupPasswordDidChange,
            walletPasswordDidChnage,
            dataSourceDidChnage,
            emailDidChange,
            phoneDidChange
        )
        .throttle(for: 0.1, scheduler: DispatchQueue.main, latest: true)
        .receive(on: DispatchQueue.main)
        .sink { [weak self] _ in
            self?.setupDataSource()
        }
        .store(in: &disposeBag)
    }
    
    private func showBackupData(sourceView: UIView?) {
        if !userSetting.hasBackupPassword {
            let words = L10n.Common.Alert.BackupTipsNoBackupPassword.description(L10n.Scene.Setting.BackupRecovery.backUpPassword)
            let alertController = AlertController(
                title: L10n.Common.Alert.BackupTipsNoBackupPassword.title,
                message: words,
                confirmButtonText: L10n.Common.Controls.ok,
                imageType: .warning,
                confirmButtonClicked: { _ in
                },
                cancelButtonClicked: nil
            )
            let keyWords = L10n.Scene.Setting.BackupRecovery.backUpPassword

            let attributes = NSMutableAttributedString(string: words)
            attributes.addAttribute(color: Asset.Colors.Public.blue.color, keywords: keyWords)
            alertController.setAttributeMessage(attrMessage: attributes)
            coordinator.present(
                scene: .alertController(alertController: alertController),
                transition: .alertController(completion: nil)
            )
            feedbackGenerator.selectionChanged()
        } else {
            coordinator.present(scene: .chooseBackupStrategy, transition: .panModel(animated: true))
        }
    }

    private func restoreData() {
        coordinator.present(scene: .identityRecovery(from: .settings), transition: .detail(animated: true))
        feedbackGenerator.selectionChanged()
    }
}
// swiftlint:enable identifier_name force_cast
