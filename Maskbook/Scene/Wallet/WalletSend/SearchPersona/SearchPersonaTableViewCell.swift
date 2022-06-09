//
//  SearchPersonaTableViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2022/5/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit
import UStack
import CoreDataStack

class SearchPersonaTableViewCell: UITableViewCell {
    
    lazy var photoImageView: AvatarView = {
        let imageView = AvatarView(title: "")
        imageView.applyRadius(radius: 19)
        NSLayoutConstraint.activate([
            imageView.heightAnchor.constraint(equalToConstant: 38),
            imageView.widthAnchor.constraint(equalToConstant: 38)
        ])
        return imageView
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
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 24),
            view.heightAnchor.constraint(equalToConstant: 24)
        ])
        return view
    }()
    

    
    private lazy var vStackView = VStackView(spacing: 2) {
        titleLabel
        contentLabel
    }
    
    private lazy var hStackView = HStackView(alignment: .center) {
        photoImageView
        Spacer(width: 8)
        vStackView
        Spacer(width: 10)
        checkImageView
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
    
    private func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.dark.color
        contentView.addSubview(hStackView)

        hStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            hStackView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 12),
            hStackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            hStackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -12),
            hStackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor)
        ])
    }
    
    func update(model: ProfileRecord,selectedProfile:[ProfileRecord]){
        titleLabel.text = model.socialID
        photoImageView.title = model.nickname ?? model.nonOptionalIdentifier.components(separatedBy: "/").last
        photoImageView.setNetworkURL(url: model.avatar)
        contentLabel.text = model.identifier?.split(separator: "/").last.flatMap({ String($0) })
        
        if selectedProfile.contains(model){
            checkImageView.image = Asset.Icon.Cell.cellTwitterCheck.image
        } else {
            checkImageView.image = Asset.Icon.Cell.cellUncheck.image
        }
    }
}
