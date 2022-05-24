//
//  DebugEntryView.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

class DebugEntryView: UIView {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator: Coordinator
    
    lazy var tapGesture: UITapGestureRecognizer = .init(target: self, action: #selector(onTapGestureTapped(_:)))
    
    init() {
        super.init(frame: CGRect(origin: .zero, size: CGSize(width: 32, height: 32)))
        backgroundColor = .clear
        tapGesture.numberOfTapsRequired = DebugControl.DebugEntryTapCount
        addGestureRecognizer(tapGesture)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @objc
    func onTapGestureTapped(_ gesture: UITapGestureRecognizer) {
        coordinator.present(scene: .debug, transition: .detail(animated: true))
    }
}
