//
//  IndicatorController.swift
//  Maskbook
//
//  Created by yzj on 2021/8/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

final class LoadingIndicatorController: PopupViewController {
    private(set) var indicatorView = MaskLoadingIndicator()

    init() {
        super.init(presenter: Presenter(presentStyle: .transparent))
    }

    deinit {
        indicatorView.stopAnimation()
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        dissmissOnTap = false
        indicatorView.startAnimation()
    }

    override func buildContent() {
        super.buildContent()

        view.backgroundColor = Asset.Colors.Background.normal.color
        view.withSubViews {
            indicatorView
        }
    }

    func startAnimation() {
        view.isHidden = false
        indicatorView.startAnimation()
    }

    func stopAnimation() {
        view.isHidden = true
        indicatorView.stopAnimation()
    }

    override func buildLayout() {
        super.buildLayout()

        indicatorView.snp.makeConstraints {
            $0.center.equalToSuperview()
            $0.size.greaterThanOrEqualTo(32)
        }
    }
}
