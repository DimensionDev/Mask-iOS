//
//  AlertPopupController.swift
//  Maskbook
//
//  Created by yzj on 2021/8/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class AlertPopupController: PopupViewController {
    var contentPadding: CGFloat { 22 }
    var contentCorner: CGFloat { 20 }

    private(set) var contentView = RoundCornerView().cv.apply { roundedView in
        roundedView.backgroundColor = Asset.Colors.Background.normal.color
        roundedView.corners = [.allCorners]
    }

    private(set) lazy var shadowContainerView = ShadowShapeView { self.contentView }

    override func buildContent() {
        view.withSubViews {
            shadowContainerView
        }

        contentView.cornersSize = CGSize(width: contentCorner, height: contentCorner)
        shadowContainerView.snp.makeConstraints {
            $0.center.equalToSuperview()
            $0.leading.trailing.equalToSuperview()
                .inset(contentPadding)
        }
    }
}

class AlertContainerController<V: UIView>: PopupViewController {
    @ShadowAndRadiusWrapped
    private(set) var content: V

    init(_ content: V) {
        self.content = content
        super.init(presenter: .alert)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.withSubViews {
            $content
        }

        $content.snp.makeConstraints {
            $0.center.equalToSuperview()
            $0.leading.trailing.equalToSuperview()
                .inset(_content.paddings)
        }
    }
}
