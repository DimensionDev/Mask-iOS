//
//  ScanLineAnimation.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class ScanLineAnimationView: UIImageView {
    var isAnimationing = false
    var animationRect = CGRect.zero
        
    init() {
        super.init(frame: .zero)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func startAnimation(inRect animationRect: CGRect, parentView: UIView, image: UIImage?) {
        self.image = image
        self.animationRect = animationRect
        parentView.addSubview(self)
        
        isHidden = false
        isAnimationing = true
        if image != nil {
            buildAnimation()
        }
    }
    
    func buildAnimation() {
        guard isAnimationing else {
            return
        }
        
        var frame = animationRect
        let hImg = image!.size.height * animationRect.size.width / image!.size.width

        frame.origin.y -= hImg
        frame.size.height = hImg
        self.frame = frame
        alpha = 0.0

        UIView.animate(withDuration: 1.4, animations: {
            self.alpha = 1.0
            var frame = self.animationRect
            let hImg = self.image!.size.height * self.animationRect.size.width / self.image!.size.width
            frame.origin.y += (frame.size.height - hImg)
            frame.size.height = hImg
            self.frame = frame
        }, completion: { _ in
            DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(300)) {
                self.buildAnimation()
            }
        })
    }
    
    func stopAnimation() {
        isHidden = true
        isAnimationing = false
    }

    deinit {
        stopAnimation()
    }
}
