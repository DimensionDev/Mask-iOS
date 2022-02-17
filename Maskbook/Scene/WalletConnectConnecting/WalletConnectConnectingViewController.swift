//
//  WalletConnectConnectingViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/9/23.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit
import UStack

class WalletConnectConnectingViewController: BaseViewController {
    var disposeBag = Set<AnyCancellable>()
    
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.WalletConnect.walletConnect
        label.textAlignment = .center
        label.numberOfLines = 0
        return label
    }()
    
    let connectingLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Text.light.color
        label.text = L10n.Scene.WalletConnect.connecting
        label.textAlignment = .center
        return label
    }()
    
    let walletConnectImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.WalletConnect.walletConnect.image
        return imageView
    }()
    
    let maskImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Icon.Logo.littleMask.image
        return imageView
    }()
    
    let animationBackground = UIView()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        addAnimation()
        
        walletConnectClient.didConnectSubject
            .receive(on: RunLoop.main)
            .sink { [weak self] _, _ in
                guard let self = self else { return }
                // it's a bug of panModel, can't dismiss totally in background mode
                self.dismiss(animated: true) {
                    self.dismiss(animated: true) {
                        Coordinator.main.present(scene: .balance,
                                                 transition: .replaceCurrentNavigation(tab: .wallet, animated: true)
                        )
                    }
                }
            }
            .store(in: &disposeBag)
        
        walletConnectClient.didFailToConnectSubject
            .receive(on: RunLoop.main)
            .sink { [weak self] _, _ in
                guard let self = self else { return }
                // it's a bug of panModel, can't dismiss totally in background mode
                self.dismiss(animated: true) {
                    self.dismiss(animated: true) {
                        Coordinator.main.present(scene: .walletConnectFail,
                                                 transition: .panModel(animated: true)
                        )
                    }
                }
            }
            .store(in: &disposeBag)
    }

    func addAnimation() {
        let lay = CAReplicatorLayer()
        lay.frame = CGRect(origin: .zero, size: CGSize(width: 26, height: 6))
        let circle = CALayer()
        circle.frame = CGRect(origin: .zero, size: CGSize(width: 6, height: 6))
        circle.cornerRadius = circle.frame.width / 2
        circle.backgroundColor = Asset.Colors.Text.normal.color.cgColor
        let anim = CABasicAnimation(keyPath: #keyPath(CALayer.opacity))
        anim.fromValue = 1.0
        anim.toValue = 0.2
        anim.duration = 1
        anim.repeatCount = .infinity
        circle.add(anim, forKey: nil)
        lay.addSublayer(circle)
        lay.instanceCount = 3
        lay.instanceTransform = CATransform3DMakeTranslation(14, 0, 0)
        lay.instanceDelay = anim.duration / Double(lay.instanceCount)
        
        animationBackground.layer.addSublayer(lay)
    }
    
    func setupUI() {
        let hStack = HStackView(spacing: 15, distribution: .fill, alignment: .center) {
            walletConnectImageView
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 48),
                        $0.widthAnchor.constraint(equalToConstant: 48)
                    ])
                }
            animationBackground
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 6),
                        $0.widthAnchor.constraint(equalToConstant: 40)
                    ])
                }
            maskImageView
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 48),
                        $0.widthAnchor.constraint(equalToConstant: 48)
                    ])
                }
        }
        let vStack = VStackView(spacing: 24, distribution: .fill, alignment: .center) {
            UStack.Spacer(height: 25, width: nil)
            titleLabel
            UStack.Spacer(height: 155, width: nil)
            hStack
            connectingLabel
            UStack.Spacer()
        }
        
        view.withSubViews {
            vStack
        }
        
        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.topAnchor),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            vStack.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            vStack.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
}

extension WalletConnectConnectingViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }

    var longFormHeight: PanModalHeight {
        .contentHeight(618)
    }
}

extension CALayer {
    func add(animation: String, fromValue: Double, toValue: Double, duration: Double) {
        let animation = CABasicAnimation(keyPath: animation)
        animation.fromValue = fromValue
        animation.toValue = toValue
        animation.duration = duration
        animation.repeatCount = Float.greatestFiniteMagnitude
        add(animation, forKey: nil)
    }
}
