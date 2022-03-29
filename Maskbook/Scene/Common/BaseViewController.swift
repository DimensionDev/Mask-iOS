//
//  BaseViewController.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class BaseViewController: UIViewController {
    var navigationBarHidden: Bool {
        return false
    }
    
    var isNavigationBarShadowVisible: Bool {
        return false
    }
    
    var interactivePopGestureRecognizerEnabled: Bool {
        return true
    }
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        switch traitCollection.userInterfaceStyle {
        case .light: return .darkContent
        case .dark: return .lightContent
        case .unspecified: return .default
        @unknown default: return .default
        }
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.setNavigationBarHidden(navigationBarHidden, animated: animated)
        setNeedsStatusBarAppearanceUpdate()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        extendedLayoutIncludesOpaqueBars = true
        edgesForExtendedLayout = UIRectEdge.all
        view.backgroundColor = Asset.Colors.Background.normal.color
        // Hide the text on back button
        navigationItem.backButtonTitle = ""
        
        // Defaults to use largeTitleDisplayMode
        navigationItem.largeTitleDisplayMode = .automatic
        if isNavigationBarShadowVisible {
        } else {
            navigationController?.navigationBar.setOpaque()
        }
        prepareRightNavigationItems()
        buildContent()
        buildLayout()
        buildEvent()
    }

    /// Initial controller content here
    func buildContent() {}
    /// Bind event stream here
    func buildEvent() {}
    /// BuildLayout here
    func buildLayout() {}
}
