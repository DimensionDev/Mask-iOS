//
//  RestoreRetryAlertController.swift
//  Maskbook
//
//  Created by yzj on 2021/8/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit
import UStack

final class RestoreRetryAlertController: AlertContainerController<VStackView> {
    private var cancelableStorage: Set<AnyCancellable> = []
    private var okButton: UIButton

    init() {
        let okButton = UIButton().cv.apply {
            $0.layer.cornerRadius = 8
            $0.backgroundColor = Asset.Colors.Public.blue.color
            $0.setTitleColor(Asset.Colors.Text.lighter.color, for: .normal)
            $0.setTitle(L10n.Common.Controls.ok, for: .normal)
            $0.titleLabel?.font = FontStyles.BH5
        }
        let shadowView = ShadowContainerView {
            okButton
        }
        okButton.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
        self.okButton = okButton
        super.init {
            VStackView(spacing: 20) {
                Spacer().cv.apply {
                    $0.snp.makeConstraints { $0.height.equalTo(12) }
                }

                HStackView(distribution: .equalSpacing) {
                    Spacer()
                    UIImageView(image: Asset.Images.Scene.Alert.error.image)
                        .cv.apply {
                            $0.snp.makeConstraints { $0.size.equalTo(60) }
                        }
                    Spacer()
                }

                UILabel().cv.apply { label in
                    label.textAlignment = .center
                    label.textColor = Asset.Colors.Text.dark.color
                    label.font = FontStyles.BH4
                    label.text = L10n.Scene.Restore.Tip.failedLoadingRemotefile
                }

                HStackView {
                    Spacer().cv.apply {
                        $0.snp.makeConstraints { $0.width.equalTo(16) }
                    }
                    shadowView.cv.apply {
                        $0.snp.makeConstraints { $0.height.equalTo(54) }
                    }
                    Spacer().cv.apply {
                        $0.snp.makeConstraints { $0.width.equalTo(16) }
                    }
                }

                Spacer().cv.apply {
                    $0.snp.makeConstraints { $0.height.equalTo(4) }
                }
            }
        }
        dissmissOnTap = false
    }

    override func buildEvent() {
        super.buildEvent()
        okButton.cv
            .tap()
            .sink { [weak self] _ in
                self?.hide()
            }
            .store(in: &cancelableStorage)
    }
}
