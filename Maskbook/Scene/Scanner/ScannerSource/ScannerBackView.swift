//
//  ScannerBackView.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class ScannerBackView: UIView {
    var scanCoordinateRect = CGRect.zero
    var isAnimationing = false
    var scanLineAnimation = ScanLineAnimationView()

    override init(frame: CGRect) {
        super.init(frame: frame)
        backgroundColor = .clear
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("unavailable")
    }

    deinit {
        scanLineAnimation.stopAnimation()
    }
    
    func startScanAnimation() {
        guard !isAnimationing else {
            return
        }
        isAnimationing = true

        let cropRect = getScanRectForAnimation()
        scanLineAnimation.startAnimation(inRect: cropRect,
                                                  parentView: self,
                                                  image: Asset.Images.Scene.SendTransaction.scanLine.image)
    }
    
    func stopScanAnimation() {
        isAnimationing = false
        scanLineAnimation.stopAnimation()
    }
    
    func getScanRectForAnimation() -> CGRect {
        let xCoordinate: CGFloat = 45.0
        let scanSize = CGSize(width: frame.size.width - xCoordinate * 2,
                              height: frame.size.width - xCoordinate * 2)
        let yCoordinate = frame.size.height / 2.0 - scanSize.height / 2.0
        let cropRect = CGRect(x: xCoordinate, y: yCoordinate, width: scanSize.width, height: scanSize.height)
        return cropRect
    }
    
    override func draw(_ rect: CGRect) {
        drawScanRect()
    }
    
    private func drawScanRect() {
        let xCoordinateLeft: CGFloat = 45.0
        let scanSize = CGSize(width: frame.size.width - xCoordinateLeft * 2.0, height: frame.size.width - xCoordinateLeft * 2.0)

        let yMinCoordinate = frame.size.height / 2.0 - scanSize.height / 2.0
        let yMaxCoordinate = yMinCoordinate + scanSize.height
        let xCoordinateRight = frame.size.width - xCoordinateLeft
        
        guard let context = UIGraphicsGetCurrentContext() else {
            return
        }
        
        context.setFillColor(UIColor(red: 0.0, green: 0.0, blue: 0.0, alpha: 0.5).cgColor)

        var rect = CGRect(x: 0, y: 0, width: frame.size.width, height: yMinCoordinate)
        context.fill(rect)

        rect = CGRect(x: 0, y: yMinCoordinate, width: xCoordinateLeft, height: scanSize.height)
        context.fill(rect)

        rect = CGRect(x: xCoordinateRight, y: yMinCoordinate, width: xCoordinateLeft, height: scanSize.height)
        context.fill(rect)

        rect = CGRect(x: 0, y: yMaxCoordinate, width: frame.size.width, height: frame.size.height - yMaxCoordinate)
        context.fill(rect)
        
        context.strokePath()

        context.setStrokeColor(UIColor.white.cgColor)
        context.setLineWidth(0.5)
        context.addRect(CGRect(x: xCoordinateLeft, y: yMinCoordinate, width: scanSize.width, height: scanSize.height))
        context.strokePath()

        scanCoordinateRect = CGRect(x: xCoordinateLeft, y: yMinCoordinate, width: scanSize.width, height: scanSize.height)
        
        let wAngle: CGFloat = 18
        let hAngle: CGFloat = 18
        let linewidthAngle: CGFloat = 3
        let diffAngle: CGFloat = -1.5

        context.setStrokeColor(Asset.Colors.Public.blue.color.cgColor)
        context.setFillColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0)

        context.setLineWidth(linewidthAngle)
        
        let leftX = xCoordinateLeft - diffAngle
        let topY = yMinCoordinate - diffAngle
        let rightX = xCoordinateRight + diffAngle
        let bottomY = yMaxCoordinate + diffAngle

        context.move(to: CGPoint(x: leftX - linewidthAngle / 2, y: topY))
        context.addLine(to: CGPoint(x: leftX + wAngle, y: topY))
        
        context.move(to: CGPoint(x: leftX, y: topY - linewidthAngle / 2))
        context.addLine(to: CGPoint(x: leftX, y: topY + hAngle))
        
        context.move(to: CGPoint(x: leftX - linewidthAngle / 2, y: bottomY))
        context.addLine(to: CGPoint(x: leftX + wAngle, y: bottomY))
        
        context.move(to: CGPoint(x: leftX, y: bottomY + linewidthAngle / 2))
        context.addLine(to: CGPoint(x: leftX, y: bottomY - hAngle))

        context.move(to: CGPoint(x: rightX + linewidthAngle / 2, y: topY))
        context.addLine(to: CGPoint(x: rightX - wAngle, y: topY))
        
        context.move(to: CGPoint(x: rightX, y: topY - linewidthAngle / 2))
        context.addLine(to: CGPoint(x: rightX, y: topY + hAngle))

        context.move(to: CGPoint(x: rightX + linewidthAngle / 2, y: bottomY))
        context.addLine(to: CGPoint(x: rightX - wAngle, y: bottomY))

        context.move(to: CGPoint(x: rightX, y: bottomY + linewidthAngle / 2))
        context.addLine(to: CGPoint(x: rightX, y: bottomY - hAngle))
        
        context.strokePath()
    }
}
