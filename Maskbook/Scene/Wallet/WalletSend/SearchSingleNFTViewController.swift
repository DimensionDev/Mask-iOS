//
//  SearchSingleNFTViewController.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import PanModal
import UIKit
import UStack

protocol SearchSingleNFTDelegate {
    func returnSelectedNFT(collectible: [Collectible]?)
}

class SearchSingleNFTViewController: BaseViewController {
    var viewModel: SearchSingleNFTViewModel
    private var disposeBag = Set<AnyCancellable>()
    var delegate: SearchSingleNFTDelegate?

    var isSelectedAll: Bool = false

    init(contractAddress: String) {
        viewModel = SearchSingleNFTViewModel(contractAddress: contractAddress)
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder _: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    lazy var selectAllButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setTitleColor(Asset.Colors.Text.normal.color, for: .normal)
        button.titleLabel?.font = FontStyles.MH5
        // l10
        button.setTitle("Select All", for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.setImage(Asset.Icon.Cell.cellUncheck.image, for: .normal)
        button.setInsets(forContentPadding: .zero, imageTitlePadding: 7)
        button.contentHorizontalAlignment = .left
        return button
    }()

    lazy var nftAmountLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH5
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .right
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()

    private lazy var infoStackView = HStackView(distribution: .fillProportionally) {
        selectAllButton
        nftAmountLabel
    }

    lazy var searchTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.backgroundColor = Asset.Colors.Twitter.inputBg.color
        textField.layer.cornerRadius = 8
        textField.attributedPlaceholder = NSAttributedString(
            string: L10n.Scene.Sendtransaction.Tokenlist.placeholder,
            attributes: [
                .foregroundColor: Asset.Colors.Text.light.color,
                .font: FontStyles.BH5,
            ]
        )
        let paddingView = UIView(frame: CGRect(x: 0, y: 0, width: 48, height: 40))
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Personas.searchTwitter.image
        paddingView.addSubview(imageView)
        imageView.snp.makeConstraints { make in
            make.centerY.equalTo(paddingView)
            make.left.equalTo(12)
            make.right.equalTo(-12)
            make.size.equalTo(CGSize(width: 16, height: 16))
        }
        textField.leftView = paddingView
        NSLayoutConstraint.activate([
            textField.heightAnchor.constraint(equalToConstant: 40),
        ])
        textField.translatesAutoresizingMaskIntoConstraints = false
        return textField
    }()

    private lazy var collectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.scrollDirection = .vertical
        let view = UICollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.register(SearchSingleNFTCollectionViewCell.self)
        view.delegate = self
        view.dataSource = self
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = .clear
        return view
    }()

    lazy var confirmButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Common.Controls.confirm)
        btn.addTarget(self, action: #selector(onConfirmClicked(_:)), for: .touchUpInside)
        NSLayoutConstraint.activate([
            btn.heightAnchor.constraint(equalToConstant: 54),
        ])
        return btn
    }()

    lazy var contentStackView = VStackView {
        Spacer(height: 20)
        searchTextField
        Spacer(height: 16)
        infoStackView
        Spacer(height: 20)
        collectionView
        confirmButton
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        setupNaviItems()
        setupUI()
        buildSubscriptions()
    }

    private func setupNaviItems() {
        navigationItem.largeTitleDisplayMode = .never
        navigationItem.title = L10n.Plugins.Luckydrop.Buttons.selectNftCollection
    }

    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        contentStackView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(contentStackView)

        NSLayoutConstraint.activate([
            contentStackView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            contentStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            contentStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing),
            contentStackView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
        ])
    }

    private func buildSubscriptions() {
        viewModel.dataSource
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.collectionView.reloadData()
            }.store(in: &disposeBag)

        searchTextField.textPublisher()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] searchText in
                self?.viewModel.searchString.value = searchText
                self?.collectionView.reloadData()
            }.store(in: &disposeBag)

        selectAllButton
            .gesture()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else {
                    return
                }
                self.isSelectedAll = !self.isSelectedAll
                if self.isSelectedAll {
                    self.viewModel.selectedCollectibles.value.removeAll()
                    self.viewModel.selectedCollectibles.value = self.viewModel.collectiblesSubject.value
                    self.selectAllButton.setImage(Asset.Icon.Cell.cellCheck.image, for: .normal)

                } else {
                    self.viewModel.selectedCollectibles.value.removeAll()
                    self.selectAllButton.setImage(Asset.Icon.Cell.cellUncheck.image, for: .normal)

                }

                self.collectionView.reloadData()
            }
            .store(in: &disposeBag)

        viewModel.selectedCollectibles
            .receive(on: DispatchQueue.main)
            .sink { [weak self] collectibles in
                self?.nftAmountLabel.text = "\(collectibles.count) NFT selected"
                self?.confirmButton.isEnabled = !collectibles.isEmpty
            }.store(in: &disposeBag)
    }
}

extension SearchSingleNFTViewController {
    @objc
    private func onConfirmClicked(_: UIButton) {
        delegate?.returnSelectedNFT(collectible: viewModel.selectedCollectibles.value)
        navigationController?.popViewController(animated: true)
    }
}

extension SearchSingleNFTViewController: UICollectionViewDataSource {
    func collectionView(_: UICollectionView, numberOfItemsInSection _: Int) -> Int {
        viewModel.dataSource.value.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell: SearchSingleNFTCollectionViewCell = collectionView.dequeCell(at: indexPath)
        if let collectible = viewModel.dataSource.value[safeIndex: indexPath.row] {
            cell.update(collectible: collectible, selectedCollectible: viewModel.selectedCollectibles.value)
        }
        return cell
    }
}

extension SearchSingleNFTViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        if let collectibles = viewModel.dataSource.value[safeIndex: indexPath.row] {
            if viewModel.selectedCollectibles.value.contains(collectibles) {
                viewModel.selectedCollectibles.value = viewModel.selectedCollectibles.value.filter { $0 != collectibles }
            } else {
                viewModel.selectedCollectibles.value.append(collectibles)
            }
        }
        collectionView.reloadData()
    }
}

extension SearchSingleNFTViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(
        _: UICollectionView,
        layout _: UICollectionViewLayout,
        minimumInteritemSpacingForSectionAt _: Int
    ) -> CGFloat
    {
        0
    }

    func collectionView(
        _: UICollectionView,
        layout _: UICollectionViewLayout,
        minimumLineSpacingForSectionAt _: Int
    ) -> CGFloat
    {
        0
    }

    func collectionView(
        _: UICollectionView,
        layout _: UICollectionViewLayout,
        sizeForItemAt _: IndexPath
    ) -> CGSize
    {
        SearchSingleNFTCollectionViewCell.itemSize
    }
}
