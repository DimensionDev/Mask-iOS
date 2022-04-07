//
//  WalletAddrReceiveViewController.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import EFQRCode
import UIKit

class WalletAddrReceiveViewController: BaseViewController {
    private var network: BlockChainNetwork
    private var token: Token?
    private var address: String

    init(network: BlockChainNetwork, address: String, token: Token? = nil) {
        self.network = network
        self.address = address
        self.token = token
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    var containerView: UIView = {
        let view = UIView()
        view.applyCornerRadius(radius: 20)
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    var chainImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    var qrcodeContainerView: UIView = {
        let view = UIView()
        view.applyShadow(color: Asset.Colors.segmentShadow.color, alpha: 1, x: 0, y: 4, blur: 14)
        view.backgroundColor = .clear
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    var qrcodeImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    var addressTitleLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 14, weight: .semibold)
        label.textColor = Asset.Colors.Text.normal.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    var addressContainerView: UIView = {
        let view = UIView()
        view.applyCornerRadius(radius: 12)
        view.backgroundColor = Asset.Colors.Background.light.color
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    var addressLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .center
        label.numberOfLines = 0
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    var shareButton: PrimeryButton = {
        let button = PrimeryButton(title: L10n.Scene.WalletReceive.btnShare)
        button.setImage(Asset.Images.Scene.Receive.shareButton.image, for: .normal)
        button.imageEdgeInsets = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 8)
        button.titleEdgeInsets = UIEdgeInsets(top: 0, left: 8, bottom: 0, right: 0)
        button.applyShadow(color: Asset.Colors.Background.light.color, alpha: 0.15, x: 0, y: 6, blur: 12)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.largeTitleDisplayMode = .never
        
        navigationItem.title = "\(L10n.Scene.WalletBalance.btnReceive) \(token?.name?.capitalized ?? network.name)"
        
        view.addSubview(containerView)
        containerView.addSubview(qrcodeContainerView)
        qrcodeContainerView.addSubview(qrcodeImageView)
        containerView.addSubview(chainImageView)
        containerView.addSubview(addressTitleLabel)
        containerView.addSubview(addressContainerView)
        containerView.addSubview(addressLabel)
        view.addSubview(shareButton)
        
        // lt - Left Top
        // lb - left bottom
        // rt - right top
        // rb - right bottom
        let ltRectImageView = UIImageView(image: Asset.Images.Scene.Receive.qrRectLT.image)
        ltRectImageView.translatesAutoresizingMaskIntoConstraints = false
        let lbRectImageView = UIImageView(image: Asset.Images.Scene.Receive.qrRectLB.image)
        lbRectImageView.translatesAutoresizingMaskIntoConstraints = false
        let rtRectImageView = UIImageView(image: Asset.Images.Scene.Receive.qrRectRT.image)
        rtRectImageView.translatesAutoresizingMaskIntoConstraints = false
        let rbRectImageView = UIImageView(image: Asset.Images.Scene.Receive.qrRectRB.image)
        rbRectImageView.translatesAutoresizingMaskIntoConstraints = false
        qrcodeContainerView.addSubview(ltRectImageView)
        qrcodeContainerView.addSubview(lbRectImageView)
        qrcodeContainerView.addSubview(rtRectImageView)
        qrcodeContainerView.addSubview(rbRectImageView)
        
        NSLayoutConstraint.activate([
            containerView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: LayoutConstraints.top),
            containerView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            containerView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing)
        ])
        
        NSLayoutConstraint.activate([
            chainImageView.widthAnchor.constraint(equalToConstant: 56),
            chainImageView.heightAnchor.constraint(equalToConstant: 56),
            chainImageView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            chainImageView.topAnchor.constraint(equalTo: containerView.topAnchor, constant: 24)
        ])
        
        NSLayoutConstraint.activate([
            qrcodeContainerView.leadingAnchor.constraint(
                equalTo: containerView.leadingAnchor,
                constant: 25),
            qrcodeContainerView.trailingAnchor.constraint(
                equalTo: containerView.trailingAnchor,
                constant: -25),
            qrcodeContainerView.topAnchor.constraint(
                equalTo: chainImageView.bottomAnchor,
                constant: 24),
            qrcodeContainerView.heightAnchor.constraint(
                equalTo: qrcodeContainerView.widthAnchor)
        ])
        
        NSLayoutConstraint.activate([
            qrcodeImageView.leadingAnchor.constraint(equalTo: qrcodeContainerView.leadingAnchor, constant: 20),
            qrcodeImageView.trailingAnchor.constraint(equalTo: qrcodeContainerView.trailingAnchor, constant: -20),
            qrcodeImageView.topAnchor.constraint(equalTo: qrcodeContainerView.topAnchor, constant: 20),
            qrcodeImageView.bottomAnchor.constraint(equalTo: qrcodeContainerView.bottomAnchor, constant: -20)
        ])
        
        NSLayoutConstraint.activate([
            ltRectImageView.widthAnchor.constraint(equalToConstant: 18),
            ltRectImageView.heightAnchor.constraint(equalToConstant: 18),
            ltRectImageView.leadingAnchor.constraint(equalTo: qrcodeContainerView.leadingAnchor),
            ltRectImageView.topAnchor.constraint(equalTo: qrcodeContainerView.topAnchor)
        ])

        NSLayoutConstraint.activate([
            lbRectImageView.widthAnchor.constraint(equalToConstant: 18),
            lbRectImageView.heightAnchor.constraint(equalToConstant: 18),
            lbRectImageView.leadingAnchor.constraint(equalTo: qrcodeContainerView.leadingAnchor),
            lbRectImageView.bottomAnchor.constraint(equalTo: qrcodeContainerView.bottomAnchor)
        ])

        NSLayoutConstraint.activate([
            rtRectImageView.widthAnchor.constraint(equalToConstant: 18),
            rtRectImageView.heightAnchor.constraint(equalToConstant: 18),
            rtRectImageView.trailingAnchor.constraint(equalTo: qrcodeContainerView.trailingAnchor),
            rtRectImageView.topAnchor.constraint(equalTo: qrcodeContainerView.topAnchor)
        ])

        NSLayoutConstraint.activate([
            rbRectImageView.widthAnchor.constraint(equalToConstant: 18),
            rbRectImageView.heightAnchor.constraint(equalToConstant: 18),
            rbRectImageView.trailingAnchor.constraint(equalTo: qrcodeContainerView.trailingAnchor),
            rbRectImageView.bottomAnchor.constraint(equalTo: qrcodeContainerView.bottomAnchor)
        ])

        NSLayoutConstraint.activate([
            addressTitleLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            addressTitleLabel.topAnchor.constraint(equalTo: qrcodeContainerView.bottomAnchor, constant: 8)
        ])
        
        NSLayoutConstraint.activate([
            addressLabel.topAnchor.constraint(equalTo: addressTitleLabel.bottomAnchor, constant: 26),
            addressLabel.leadingAnchor.constraint(equalTo: containerView.leadingAnchor, constant: 32),
            addressLabel.trailingAnchor.constraint(equalTo: containerView.trailingAnchor, constant: -32)
        ])
        
        NSLayoutConstraint.activate([
            addressContainerView.topAnchor.constraint(equalTo: addressLabel.topAnchor, constant: -10),
            addressContainerView.bottomAnchor.constraint(equalTo: addressLabel.bottomAnchor, constant: 10),
            addressContainerView.leadingAnchor.constraint(equalTo: addressLabel.leadingAnchor, constant: -16.5),
            addressContainerView.trailingAnchor.constraint(equalTo: addressLabel.trailingAnchor, constant: 16.5)
        ])
        
        NSLayoutConstraint.activate([
            containerView.bottomAnchor.constraint(equalTo: addressContainerView.bottomAnchor, constant: 24)
        ])
        
        NSLayoutConstraint.activate([
            shareButton.heightAnchor.constraint(equalToConstant: 54),
            shareButton.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: -36),
            shareButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            shareButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing)
        ])
        
        addressTitleLabel.text = L10n.Scene.WalletReceive.yourAddress(token?.symbol ?? network.shortName)
        
        let attachString = NSAttributedString(
            attachment: NSTextAttachment(
                image: Asset.Images.Scene.Receive.addressCopy.image
            )
        )
        
        let paragraphStyle = NSMutableParagraphStyle()
        paragraphStyle.alignment = .center
        paragraphStyle.lineHeightMultiple = 1.07
        let addressString = NSMutableAttributedString(string: address, attributes: [
            .font: UIFont.systemFont(ofSize: 16),
            .foregroundColor: Asset.Colors.Text.dark.color,
            .paragraphStyle: paragraphStyle
        ])
        addressString.append(NSAttributedString(string: " "))
        addressString.append(attachString)
        addressLabel.attributedText = addressString
        
        chainImageView.image = network.selectedIcon
        
        DispatchQueue.global().async {
            if let qrcodeCgImage = EFQRCode.generate(for: self.address,
                                                        foregroundColor: Asset.Colors.TokenDetail.background1.color.cgColor) {
                DispatchQueue.main.async {
                    self.qrcodeImageView.image = UIImage(cgImage: qrcodeCgImage)
                }
            }
        }
        
        addressLabel.isUserInteractionEnabled = true
        addressLabel.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(addressLabelDidTapped(_:))))
        shareButton.addTarget(self, action: #selector(shareButtonDidClicked(_:)), for: .touchUpInside)
    }
    
    @objc
    private func addressLabelDidTapped(_ sender: UITapGestureRecognizer) {
        UIPasteboard.general.string = address
        makeToast(message: L10n.Common.Toast.copy,
                  image: Asset.Images.Toast.check.image)
    }
    
    @objc
    private func shareButtonDidClicked(_ sender: UIButton) {
        let activityViewController = UIActivityViewController(
            activityItems: [address as Any], applicationActivities: nil)
        
        activityViewController.popoverPresentationController?.sourceView = sender
        activityViewController.activityItemsConfiguration = [
            UIActivity.ActivityType.message
        ] as? UIActivityItemsConfigurationReading
        
        self.present(activityViewController, animated: true, completion: nil)
    }
}
