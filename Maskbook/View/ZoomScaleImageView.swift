//
//  ZoomScaleImageView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

class ZoomScaleImageView: UIImageView, UIGestureRecognizerDelegate {
    private lazy var panGesture: UIPanGestureRecognizer = {
        let pan = UIPanGestureRecognizer()
        pan.addTarget(self, action: #selector(panMonster))
        pan.delegate = self
        return pan
    }()
    
    private lazy var rotateGesture: UIRotationGestureRecognizer = {
        let rotate = UIRotationGestureRecognizer()
        rotate.addTarget(self, action: #selector(rotateMonster))
        rotate.delegate = self
        return rotate
    }()
    
    private lazy var pinchGesture: UIPinchGestureRecognizer = {
        let pinch = UIPinchGestureRecognizer()
        pinch.addTarget(self, action: #selector(pinchMonster))
        pinch.delegate = self
        return pinch
    }()
    
    override init(image: UIImage!) {
        super.init(image: image)
        initialSetup()
    }
    
    required init(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)!
        initialSetup()
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        initialSetup()
    }
    
    func initialSetup() {
        isUserInteractionEnabled = true

        addGestureRecognizer(pinchGesture)
        addGestureRecognizer(rotateGesture)
        addGestureRecognizer(panGesture)
    }
    
    func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer,
                           shouldRecognizeSimultaneouslyWith otherGestureRecognizer: UIGestureRecognizer) -> Bool
    {
        if gestureRecognizer is UITapGestureRecognizer
            || otherGestureRecognizer is UITapGestureRecognizer
        {
            return false
        }
        return true
    }
    
    @objc
    func panMonster() {
        let translation = panGesture.translation(in: superview)
        guard let panView = panGesture.view else {
            return
        }
        
        panView.center.x += translation.x
        panView.center.y += translation.y
        
        panGesture.setTranslation(.zero, in: panView.superview)
    }
    
    @objc
    func rotateMonster() {
        guard let rotateView = rotateGesture.view else {
            return
        }
        rotateView.transform = rotateView.transform.rotated(by: rotateGesture.rotation)
        rotateGesture.rotation = .zero
    }
    
    @objc
    func pinchMonster() {
        guard let pinchView = pinchGesture.view else {
            return
        }
        pinchView.transform = pinchView.transform.scaledBy(x: pinchGesture.scale, y: pinchGesture.scale)
        pinchGesture.scale = 1
    }
}
