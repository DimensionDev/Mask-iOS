//
//  CropImageViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
import UStack

protocol CropImageViewControllerDelegate: AnyObject {
    func cropViewController(_ cropViewController: CropImageViewController, didCropToImage image: UIImage)
}

class CropImageViewController: BaseViewController {
    var image: UIImage

    init(image: UIImage) {
        self.image = image
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    weak var delegate: CropImageViewControllerDelegate?

    private var initialImageViewOffset = CGPoint()

    override var navigationBarHidden: Bool {
        true
    }

    private lazy var imageView: ZoomScaleImageView = {
        let imageView = ZoomScaleImageView(image: self.image)
        imageView.contentMode = .scaleAspectFit
        return imageView
    }()

    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .center
        label.textColor = Asset.Colors.Public.white.color
        label.font = FontStyles.BH4
        label.text = L10n.Scene.PersonaAvatar.crop
        return label
    }()

    private lazy var saveButton: UIButton = {
        let button = UIButton(type: .custom)
        button.titleLabel?.font = FontStyles.BH6
        button.setTitle(L10n.Common.Controls.save, for: .normal)
        button.setInsets(forContentPadding: UIEdgeInsets(top: 11, left: 8, bottom: 11, right: 8), imageTitlePadding: 0)
        
        button.addTarget(self, action: #selector(saveAction), for: .touchUpInside)
        return button
    }()

    private lazy var backButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Icon.Arrows.backArrowSmall.image, for: .normal)
        button.setInsets(forContentPadding: UIEdgeInsets(top: 6, left: 6, bottom: 6, right: 6), imageTitlePadding: 0)
        button.addTarget(self, action: #selector(backAction), for: .touchUpInside)
        return button
    }()
    
    private lazy var rotateButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.Personas.rotate.image, for: .normal)
        button.addTarget(self, action: #selector(rotateAction), for: .touchUpInside)
        return button
    }()

    private lazy var customNavigationBar: HStackView = {
        let hStack = HStackView(alignment: .center) {
            self.backButton
            self.titleLabel
            self.saveButton
        }
        return hStack
    }()

    private lazy var scanBorderView: UIView = {
        let view = UIView()
        view.backgroundColor = .clear
        view.translatesAutoresizingMaskIntoConstraints = false
        view.isUserInteractionEnabled = false
        return view
    }()

    func setupBackgroundAndCorner(button: UIButton) {
        button.backgroundColor = Asset.Colors.Background.mask.color.withAlphaComponent(0.3)
        button.applyCornerRadius(radius: 8)
        button.setTitleColor(Asset.Colors.Public.white.color, for: .normal)
    }

    func setupCustomNavigationBar() {
        view.withSubViews {
            customNavigationBar
        }
        titleLabel.setContentHuggingPriority(.defaultLow, for: .horizontal)
        backButton.setContentHuggingPriority(.required, for: .horizontal)
        saveButton.setContentHuggingPriority(.required, for: .horizontal)
        setupBackgroundAndCorner(button: backButton)
        setupBackgroundAndCorner(button: saveButton)
        NSLayoutConstraint.activate([
            customNavigationBar.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor),
            customNavigationBar.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20),
            customNavigationBar.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20),
            customNavigationBar.heightAnchor.constraint(equalToConstant: 64)
        ])
    }

    func addMaskLayer() {
        let center = CGPoint(x: UIScreen.main.bounds.size.width / 2,
                             y: UIScreen.main.bounds.size.height / 2)
        let width = UIScreen.main.bounds.size.width / 2 - 44

        let shapeLayer = CAShapeLayer()
        shapeLayer.opacity = 0.7
        shapeLayer.fillColor = Asset.Colors.Background.mask.color.cgColor
        shapeLayer.frame = view.bounds
        let path = UIBezierPath(arcCenter: center,
                                radius: width,
                                startAngle: 0,
                                endAngle: 2.0 * Double.pi,
                                clockwise: true)
            .reversing()
        let screenPath = UIBezierPath(roundedRect: view.bounds,
                                      cornerRadius: 0)
        screenPath.append(path)
        shapeLayer.path = screenPath.cgPath
        view.layer.addSublayer(shapeLayer)

        view.addSubview(scanBorderView)
        NSLayoutConstraint.activate([
            scanBorderView.widthAnchor.constraint(equalToConstant: width * 2),
            scanBorderView.heightAnchor.constraint(equalToConstant: width * 2),
            scanBorderView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            scanBorderView.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])
        scanBorderView.layer.cornerRadius = width
        scanBorderView.layer.borderColor = CGColor.white()
        scanBorderView.layer.borderWidth = 1
    }

    func addImageView() {
        view.withSubViews {
            imageView
        }
        NSLayoutConstraint.activate([
            imageView.topAnchor.constraint(equalTo: view.topAnchor),
            imageView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            imageView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            imageView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
    
    func addRotateButton() {
        view.withSubViews {
            rotateButton
        }
        NSLayoutConstraint.activate([
            rotateButton.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            rotateButton.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -60)
        ])
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .black
        view.clipsToBounds = true
        addImageView()
        addMaskLayer()
        setupCustomNavigationBar()
        addRotateButton()
    }
}

extension CropImageViewController {
    @objc
    func backAction() {
        navigationController?.popViewController(animated: true)
    }
    
    @objc
    func saveAction() {
        PersonaAvatarViewModel.saveImageForCurrentPersona(image: image)
        navigationController?.popViewController(animated: true)
    }
    
    @objc
    func rotateAction() {
        imageView.rotateLeft()
    }
}
