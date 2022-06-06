//
//  SelectContactTableViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2022/5/23.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit
import UStack

class SelectContactTableViewCell: UITableViewCell {
    
    lazy var bgView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.layer.cornerRadius = 12
        view.clipsToBounds = true
        view.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
        view.layer.borderWidth = 1
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Twitter.strong.color
        return label
    }()
    
    lazy var contentLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.RH6
        label.textColor = Asset.Colors.Twitter.second.color
        return label
    }()
    
    lazy var checkImageView: UIImageView = {
        let image = Asset.Icon.Cell.cellUncheck.image
        let view = UIImageView(image: image)
        view.isHidden = true
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 24),
            view.heightAnchor.constraint(equalToConstant: 24)
        ])
        return view
    }()
    
    lazy var arrowImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.image = Asset.Icon.Arrows.celllRight.image
        return imageView
    }()
    
    private lazy var vStackView = VStackView(spacing: 2) {
        titleLabel
        contentLabel
    }
    
    private lazy var hStackView = HStackView {
        Spacer(width: 14)
        checkImageView
        vStackView
        Spacer(width: 8)
        arrowImageView
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
    func update(index :Int, selected: Bool, viewModel: SelectContactViewModel){
        titleLabel.text = viewModel.titles[index]
        contentLabel.text = viewModel.content[index]
        checkImageView.image = selected ? Asset.Icon.Cell.cellTwitterCheck.image : Asset.Icon.Cell.cellUncheck.image
        bgView.layer.borderColor = selected ? Asset.Colors.Twitter.blue.color.cgColor :Asset.Colors.Twitter.second.color.cgColor
        arrowImageView.isHidden = viewModel.cellTypes[index] == .normal
    }
    
    private func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        contentView.addSubview(bgView)
        contentView.addSubview(hStackView)

        bgView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            bgView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            bgView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: LayoutConstraints.leading),
            contentView.bottomAnchor.constraint(equalTo: bgView.bottomAnchor, constant: 8),
            contentView.trailingAnchor.constraint(equalTo: bgView.trailingAnchor, constant: LayoutConstraints.trailing)
        ])
        
        hStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            hStackView.topAnchor.constraint(equalTo: bgView.topAnchor),
            hStackView.leadingAnchor.constraint(equalTo: bgView.leadingAnchor),
            bgView.bottomAnchor.constraint(equalTo: hStackView.bottomAnchor),
            bgView.trailingAnchor.constraint(equalTo: hStackView.trailingAnchor)
        ])
    }
}
