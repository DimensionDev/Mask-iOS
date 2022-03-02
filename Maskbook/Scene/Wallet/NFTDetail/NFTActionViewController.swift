//
//  NFTActionViewController.swift
//  Maskbook
//
//  Created by caiyu on 2022/2/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import Kingfisher
import PanModal
import Photos
import PhotosUI
import UIKit

class NFTActionViewController: UIViewController {
    typealias Section = NFTActionViewModel.Section
    typealias Item = NFTActionViewModel.SectionItem
    typealias ViewModel = NFTActionViewModel
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 56
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.register(NFTActionTableViewCell.self)
        view.delegate = self
        return view
    }()
    
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { tableView, indexPath, item in
                let cell: NFTActionTableViewCell = tableView.dequeCell(at: indexPath)
                switch item {
                case .savephoto(let title, _):
                    cell.iconView.image = Asset.Images.Scene.Nft.savephoto.image
                    cell.titleLabel.text = title
                    cell.isArrowDisplay = false
                
                case .website(let title, _):
                    cell.iconView.image = Asset.Images.Scene.Nft.website.image
                    cell.titleLabel.text = title
                    cell.isArrowDisplay = true
                
                case .ethscan(let title, _):
                    cell.iconView.image = Asset.Images.Scene.Nft.ethscan.image
                    cell.titleLabel.text = title
                    cell.isArrowDisplay = true
                }
                return cell
            }
    }()
    
    let viewModel: ViewModel
    var subscriptions = Set<AnyCancellable>()
    
    init(nftTokenModel: Collectible) {
        self.viewModel = ViewModel(token: nftTokenModel)
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupNaviItems()
        setupSubviews()
        setSubscriptions()
    }
    
    private func setupNaviItems() {
        navigationItem.largeTitleDisplayMode = .never
    }
    
    private func setupSubviews() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(tableView)
        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.topAnchor, constant: 40),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
    
    func setSubscriptions() {
        viewModel.menuItemsPublisher.sink { [weak self] items in
            guard let self = self else { return }
            var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
            snapshot.appendSections([.main])
            snapshot.appendItems(items)
            self.dataSource.apply(snapshot)
        }
        .store(in: &subscriptions)
    }
}

extension NFTActionViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return }
        switch item {
        case .savephoto(_, let imageUrl):
            guard let url = imageUrl else { return }
            ImageDownloader.default.downloadImage(with: url) { [weak self] result in
                var image: UIImage?
                switch result {
                case .success(let value): image = value.image
                    
                default:
                    break
                }
                if let image = image {
                    self?.saveImageToPhotoLibrary(image: image)
                }
            }
        case .website(_, let websiteUrl):
            guard let url = websiteUrl else { return }
            dismiss(animated: true, completion: nil)
            Coordinator.main.present(scene: .safariView(url: url), transition: .modal(animated: true))
            
        case .ethscan(_, let ethscanUrl):
            guard let url = ethscanUrl else { return }
            dismiss(animated: true, completion: nil)
            Coordinator.main.present(scene: .safariView(url: url), transition: .modal(animated: true))
        }
    }
}

extension NFTActionViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        let heightOfItem = 56 * CGFloat(dataSource.tableView(tableView, numberOfRowsInSection: 0))
        return .contentHeight(CGFloat(84 + heightOfItem))
    }
}

extension NFTActionViewController {
    private func saveImageToPhotoLibrary(image: UIImage?) {
        guard let img = image else {
            return
        }
        switch PHPhotoLibrary.authorizationStatus() {
        case .authorized:
            saveImage(image: img)
            
        case .notDetermined:
                
            PHPhotoLibrary.requestAuthorization { [weak self] status in
                if status == .authorized {
                    self?.saveImage(image: img)
                } else {
                    print("User denied")
                }
            }
                
        case .restricted, .denied:
            if let url = URL(string: UIApplication.openSettingsURLString) {
                if UIApplication.shared.canOpenURL(url) {
                    UIApplication.shared.open(url, options: [:]) { isAccess in
                        if isAccess {
                            self.saveImageToPhotoLibrary(image: image)
                        }
                    }
                }
            }
                
        case .limited:
            PHPhotoLibrary.shared().presentLimitedLibraryPicker(from: self)
        }
    }
    
    private func saveImage(image: UIImage) {
        PHPhotoLibrary.shared().performChanges({
            PHAssetChangeRequest.creationRequestForAsset(from: image)
        }, completionHandler: { [weak self] isSuccess, _ in
            DispatchQueue.main.async {
                if isSuccess {
                    self?.makeToast(message: L10n.Common.Toast.saved,
                                    image: Asset.Images.Toast.check.image)
                } else {}
            }
        })
    }
}
