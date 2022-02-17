//
//  WebViewNavigationFailureDescriptionView.swift
//  Maskbook
//
//  Created by MainasuK Cirno on 2020/3/10.
//  Copyright © 2020 dimension. All rights reserved.
//

import UIKit
import WebKit

protocol WebViewNavigationFailureDescriptionViewDelegate: AnyObject {
    func webViewNavigationFailureDescriptionView(_ descriptionView: WebViewNavigationFailureDescriptionView, retryButtonPressed button: UIButton)
    func webViewNavigationFailureDescriptionView(_ descriptionView: WebViewNavigationFailureDescriptionView, backButtonPressed button: UIButton)
    func webViewNavigationFailureDescriptionView(_ descriptionView: WebViewNavigationFailureDescriptionView, timelineButtonPressed button: UIButton)
}

class WebViewNavigationFailureDescriptionView: UIView {
    weak var delegate: WebViewNavigationFailureDescriptionViewDelegate?
    
    let requestURLLabel: UILabel = {
        let label = UILabel()
        label.textColor = ._secondaryLabel
        label.numberOfLines = 0
        label.textAlignment = .center
        return label
    }()
    
    let errorDescriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = ._secondaryLabel
        label.numberOfLines = 0
        label.textAlignment = .center
        return label
    }()
    
    let retryButton: UIButton = {
        let button = UIButton()
        button.setTitle("Retry", for: .normal)
        button.titleLabel?.textColor = .systemBlue
        button.setTitleColor(.systemBlue, for: .normal)
        button.contentEdgeInsets = UIEdgeInsets(top: 16, left: 16, bottom: 16, right: 16)
        return button
    }()

    let backButton: UIButton = {
        let button = UIButton()
        button.setTitle("Back", for: .normal)
        button.titleLabel?.textColor = .systemBlue
        button.setTitleColor(.systemBlue, for: .normal)
        button.contentEdgeInsets = UIEdgeInsets(top: 16, left: 16, bottom: 16, right: 16)
        return button
    }()
    
    let timeliineButton: UIButton = {
        let button = UIButton()
        button.setTitle("Go to Timeline", for: .normal)
        button.titleLabel?.textColor = .systemBlue
        button.setTitleColor(.systemBlue, for: .normal)
        button.contentEdgeInsets = UIEdgeInsets(top: 16, left: 16, bottom: 16, right: 16)
        button.isHidden = true
        return button
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        _init()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        _init()
    }
}

extension WebViewNavigationFailureDescriptionView {
    private func _init() {
        backgroundColor = ._secondarySystemBackground
        isHidden = true
        isUserInteractionEnabled = true
        
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.preservesSuperviewLayoutMargins = true
        stackView.distribution = .fill
        stackView.alignment = .center
        stackView.spacing = 16
        
        let topPaddingView = UIView()
        topPaddingView.translatesAutoresizingMaskIntoConstraints = false
        let bottomPaddingView = UIView()
        bottomPaddingView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(topPaddingView)
        stackView.addArrangedSubview(requestURLLabel)
        stackView.addArrangedSubview(errorDescriptionLabel)
        stackView.addArrangedSubview(retryButton)
        stackView.addArrangedSubview(backButton)
        stackView.addArrangedSubview(timeliineButton)
        stackView.addArrangedSubview(bottomPaddingView)
        NSLayoutConstraint.activate([
            bottomPaddingView.heightAnchor.constraint(equalTo: topPaddingView.heightAnchor, multiplier: 2.0)
        ])
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        addSubview(stackView)
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: topAnchor),
            stackView.leadingAnchor.constraint(equalTo: leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
        
        retryButton.addTarget(self, action: #selector(WebViewNavigationFailureDescriptionView.retryButtonPressed(_:)), for: .touchUpInside)
        backButton.addTarget(self, action: #selector(WebViewNavigationFailureDescriptionView.backButtonPressed(_:)), for: .touchUpInside)
        timeliineButton.addTarget(self, action: #selector(WebViewNavigationFailureDescriptionView.timelineButtonPressed(_:)), for: .touchUpInside)
    }
}

extension WebViewNavigationFailureDescriptionView {
    @objc
    private func retryButtonPressed(_ sender: UIButton) {
        delegate?.webViewNavigationFailureDescriptionView(self, retryButtonPressed: sender)
    }

    @objc
    private func backButtonPressed(_ sender: UIButton) {
        delegate?.webViewNavigationFailureDescriptionView(self, backButtonPressed: sender)
    }
    
    @objc
    private func timelineButtonPressed(_ sender: UIButton) {
        delegate?.webViewNavigationFailureDescriptionView(self, timelineButtonPressed: sender)
    }
    
    func toggle(hidden shouldHidden: Bool) {
        isHidden = shouldHidden
        isUserInteractionEnabled = !shouldHidden
    }
}
