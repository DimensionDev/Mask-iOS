//
//  RecoverySheetController.swift
//  Maskbook
//
//  Created by yzj on 2021/7/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit
import UStack

final class RecoverySheetController: SheetViewController {
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.text = "Recovery with Email"
        label.textAlignment = .center
        label.textColor = .black
        label.font = FontStyles.BH4
        return label
    }()

    private lazy var emailLabel: UILabel = {
        let label = UILabel()
        label.text = "Email"
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        return label
    }()

    private lazy var textfield: UITextField = {
        let field = UITextField()
        field.layer.cornerRadius = 8
        field.backgroundColor = .white
        field.snp.makeConstraints { $0.height.equalTo(52) }
        return field
    }()

    private lazy var tipLabel: UILabel = {
        let label = UILabel()
        label.text = "Incorrect Email"
        label.textColor = Asset.Colors.Public.error.color
        label.font = FontStyles.MH6
        return label
    }()

    private lazy var nextButton: UIButton = {
        let button = UIButton()

        button.setTitle("Next", for: .normal)
        button.titleLabel?.font = FontStyles.BH5
        button.backgroundColor = Asset.Colors.Public.blue.color
        button.setTitleColor(.white, for: .normal)
        button.layer.cornerRadius = 8
        button.snp.makeConstraints { $0.height.equalTo(54) }
        button.translucentShadow()

        return button
    }()

    private lazy var switchLabel: UILabel = {
        let label = UILabel()
        label.text = "Recovery with Mobile"
        label.textColor = Asset.Colors.Public.blue.color
        label.font = FontStyles.MH6
        return label
    }()

    private lazy var stack = VStackView(spacing: 8) {
        titleLabel
        emailLabel
        textfield
        tipLabel
        nextButton
        HStackView(distribution: .equalCentering) {
            Spacer()
            switchLabel
            Spacer()
        }
    }

    override func buildContent() {
        super.buildContent()
        contentView.withSubViews {
            stack
        }

        stack.setCustomSpacing(21, after: titleLabel)
        stack.setCustomSpacing(16, after: tipLabel)
    }

    override func buildLayout() {
        super.buildLayout()

        stack.snp.makeConstraints {
            $0.top.bottom.equalToSuperview()
                .inset(25)
            $0.leading.trailing.equalToSuperview()
                .inset(22.5)
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        textfield.becomeFirstResponder()
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct RecoverySheetControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            RecoverySheetController(
                presenter: SheetPresenter(presentStyle: .translucent)
            ).view
        }
    }
}
#endif
