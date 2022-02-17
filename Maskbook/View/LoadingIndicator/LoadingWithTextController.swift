//
//  FullScreenLoadingTextController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/9/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

final class LoadingWithTextController: PopupViewController {
    private var indicatorView = MaskLoadingIndicator()
    
    lazy var textLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Text.main.color
        return label
    }()
    
    private lazy var stack: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.spacing = 26
        view.alignment = .center
        
        view.addArrangedSubview(indicatorView)
        view.addArrangedSubview(textLabel)
        
        indicatorView.snp.makeConstraints {
            $0.size.equalTo(48)
        }
        return view
    }()
    
    init(title: String?) {
        super.init(presenter: Presenter(presentStyle: .transparent))
        
        textLabel.text = title
    }

    deinit {
        indicatorView.stopAnimation()
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        indicatorView.startAnimation()
    }

    override func buildContent() {
        super.buildContent()

        view.backgroundColor = Asset.Colors.Background.normal.color
        view.withSubViews {
            stack
        }
    }

    func startAnimation() {
        indicatorView.startAnimation()
    }

    func stopAnimation() {
        indicatorView.stopAnimation()
    }

    override func buildLayout() {
        super.buildLayout()

        stack.snp.makeConstraints {
            $0.centerX.equalToSuperview()
            $0.bottom.equalTo(view.snp.centerY)
        }
    }
}
