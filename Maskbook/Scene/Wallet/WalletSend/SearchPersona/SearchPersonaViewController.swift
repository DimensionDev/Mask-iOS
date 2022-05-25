//
//  SearchPersonaViewController.swift
//  Maskbook
//
//  Created by caiyu on 2022/5/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit

import Combine
import Foundation
import PanModal
import UIKit
import UStack

class SearchPersonaViewController: UIViewController {
    var viewModel: SelectContactViewModel
    
    static let rowHeight: CGFloat = 72
    
    init(viewModel: SelectContactViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false

        return label
    }()
    
    lazy var backButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Icon.Arrows.left.image, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    lazy var doneButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setTitleColor(Asset.Colors.Twitter.blue.color, for: .normal)
        button.titleLabel?.font = FontStyles.BH5
        button.setTitle(L10n.Common.Controls.done, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private lazy var headStackView = HStackView() {
        backButton
        titleLabel
        doneButton
    }
    
    lazy var contactAmountLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH5
        label.textColor = Asset.Colors.Twitter.strong.color
        label.textAlignment = .left
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    lazy var selectAllButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setTitleColor(Asset.Colors.Twitter.blue.color, for: .normal)
        button.titleLabel?.font = FontStyles.MH5
        //l10
        button.setTitle("Select All", for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private lazy var infoStackView = HStackView() {
        contactAmountLabel
        selectAllButton
    }
    
    lazy var searchTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.backgroundColor = Asset.Colors.Twitter.inputBg.color
        textField.layer.cornerRadius = 20
        textField.attributedPlaceholder = NSAttributedString(string: L10n.Scene.Sendtransaction.Tokenlist.placeholder,
                                                             attributes: [.foregroundColor: Asset.Colors.Text.light.color,
                                                                          .font: FontStyles.BH5])
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
            textField.heightAnchor.constraint(equalToConstant: 40)
        ])
        textField.translatesAutoresizingMaskIntoConstraints = false
        return textField
    }()

    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = SearchPersonaViewController.rowHeight
        view.rowHeight = SearchPersonaViewController.rowHeight
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.delegate = self
        view.dataSource = self
        view.register(SearchPersonaTableViewCell.self, forCellReuseIdentifier: String(describing: SearchPersonaTableViewCell.self))
        view.translatesAutoresizingMaskIntoConstraints = false

        return view
    }()
    
    lazy var backStackView =  VStackView() {
        headStackView
        Spacer(height: 20)
        searchTextField
        Spacer(height: 16)
        infoStackView
        Spacer(height: 20)
        tableView
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
    }
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(backStackView)
        
        NSLayoutConstraint.activate([
            backStackView.topAnchor.constraint(equalTo: view.topAnchor),
            backStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            backStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: LayoutConstraints.trailing),
            backStackView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
        ])
    }
}

extension SearchPersonaViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.reloadData()
        dismiss(animated: true)
    }
}

extension SearchPersonaViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return viewModel.titles.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: SearchPersonaTableViewCell = tableView.dequeCell(at: indexPath)

        return cell
    }
    // swiftlint:enable force_cast
}

extension SearchPersonaViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        .contentHeight(SearchPersonaViewController.rowHeight * CGFloat(viewModel.titles.count) + 150)
    }
}
