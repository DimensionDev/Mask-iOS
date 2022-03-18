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
    
    private func initialSetup() {
        isUserInteractionEnabled = true

        addGestureRecognizer(pinchGesture)
        addGestureRecognizer(rotateGesture)
        addGestureRecognizer(panGesture)
    }
    
    internal func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer,
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
    private func panMonster() {
        let translation = panGesture.translation(in: superview)
        guard let panView = panGesture.view else {
            return
        }
        
        panView.center.x += translation.x
        panView.center.y += translation.y
        
        panGesture.setTranslation(.zero, in: panView.superview)
    }
    
    @objc
    private func rotateMonster() {
        guard let rotateView = rotateGesture.view else {
            return
        }
        rotateView.transform = rotateView.transform.rotated(by: rotateGesture.rotation)
        rotateGesture.rotation = .zero
    }
    
    @objc
    private func pinchMonster() {
        guard let pinchView = pinchGesture.view else {
            return
        }
        pinchView.transform = pinchView.transform.scaledBy(x: pinchGesture.scale, y: pinchGesture.scale)
        pinchGesture.scale = 1
    }
    
    func rotateLeft() {
        let rotate = rotation(from: transform)
        var index = rotate * 2.0 / Double.pi
        let floorIndex = floor(index)
        if index == floorIndex {
            index -= 1
        } else if floorIndex - index < 0.0001 {
            index = floorIndex - 1
        }
        let rotateIndex = floor(index) / 2.0
        print(index)
        let oldTransform = transform
        UIView.animate(withDuration: 0.3) {
            self.transform = CGAffineTransform.makeTransform(
                xScale: oldTransform.xScale,
                yScale: oldTransform.yScale,
                theta: rotateIndex * Double.pi,
                tx: oldTransform.tx,
                ty: oldTransform.ty)
        }
    }
}

extension ZoomScaleImageView {
    func rotation(from transform: CGAffineTransform) -> Double {
        atan2(Double(transform.b), Double(transform.a))
    }
}
