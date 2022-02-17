//
//  WarningPopController.swift
//  Maskbook
//
//  Created by yzj on 2021/7/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CombineEvent
import UIKit
import UStack

final class WariningPopupController: PopupViewController {
    final class Circle: UIView {
        private var cancelableStorage: Set<AnyCancellable> = []
        init() {
            super.init(frame: .zero)

            publisher(for: \.bounds)
                .didChange()
                .receive(on: DispatchQueue.main)
                .sink { [weak self] _ in
                    self?.blurShadow()
                }
                .store(in: &cancelableStorage)
        }

        @available(*, unavailable)
        required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
        }
    }

    typealias Spacer = UStack.Spacer
    private let circleRadius: CGFloat = 30
    private let shadowRadius: CGFloat = 40
    private let buttonRadius: CGFloat = 10
    private let stackMargin: CGFloat = 20
    private let stackPadding: CGFloat = 20
    private let contentCorner: CGFloat = 20
    private let contentPadding: CGFloat = 22

    private lazy var blueCircle: Circle = {
        let view = Circle()
        view.backgroundColor = Asset.Colors.Public.blue.color
        view.layer.cornerRadius = circleRadius
        view.snp.makeConstraints { $0.width.height.equalTo(circleRadius * 2) }
        return view
    }()

    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.text = "Waring"
        label.textColor = Asset.Colors.Public.blue.color
        label.textAlignment = .center
        label.font = FontStyles.MH4
        return label
    }()

    private lazy var tipsLabel: UILabel = {
        let label = UILabel()
        label.text = "Simply taking a screenshot of recovery phrase is not safe."
        label.font = FontStyles.RH6
        label.numberOfLines = 0
        label.textColor = Asset.Colors.Public.blue.color
        return label
    }()

    private lazy var doneButton: UIButton = {
        let button = UIButton()
        button.setTitle("Done", for: .normal)
        button.backgroundColor = Asset.Colors.Public.blue.color
        button.setTitleColor(.white, for: .normal)
        button.titleLabel?.font = FontStyles.MH5
        button.layer.cornerRadius = buttonRadius
        button.snp.makeConstraints { $0.height.equalTo(54) }
        return button
    }()

    override func buildContent() {
        let contentStack = VStackView(spacing: stackMargin) {
            HStackView(distribution: .equalCentering) {
                Spacer()
                blueCircle
                Spacer()
            }
            titleLabel
            tipsLabel
            doneButton
        }

        let roundedView: RoundCornerView = {
            let roundedView = RoundCornerView()
            roundedView.backgroundColor = .white
            roundedView.corners = [.allCorners]
            roundedView.cornersSize = CGSize(width: contentCorner, height: contentCorner)
            roundedView.withSubViews {
                contentStack
            }

            return roundedView
        }()

        contentStack.snp.makeConstraints { $0.edges.equalToSuperview().inset(stackPadding) }

        let shadowContainerView = ShadowShapeView {
            roundedView
        }
        
        view.withSubViews {
            shadowContainerView
        }
        
        shadowContainerView.snp.makeConstraints {
            $0.center.equalToSuperview()
            $0.leading.trailing.equalToSuperview()
                .inset(contentPadding)
        }
    }

    override func buildEvent() {
        doneButton.cv.tap()
            .sink { [weak self] _ in
                self?.hide()
            }
            .store(in: &subscriptionSet)
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct WarnPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            WariningPopupController(presenter: .alert).view
        }
    }
}
#endif
