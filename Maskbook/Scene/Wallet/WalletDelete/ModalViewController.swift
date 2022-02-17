//
//  ModalViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class ModalViewController: UIViewController {
    lazy var backgroundView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.mask.color
        return view
    }()
    
    init(viewController: UIViewController) {
        super.init(nibName: nil, bundle: nil)
        
        addChild(viewController)
        
        view.addSubview(backgroundView)
        view.addSubview(viewController.view)
        
        viewController.view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            viewController.view.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            viewController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 22),
            viewController.view.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -22)
        ])
        
        backgroundView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            backgroundView.topAnchor.constraint(equalTo: view.topAnchor),
            backgroundView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            view.bottomAnchor.constraint(equalTo: backgroundView.bottomAnchor),
            view.trailingAnchor.constraint(equalTo: backgroundView.trailingAnchor)
        ])
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
