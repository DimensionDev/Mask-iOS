//
//  UIImage.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreImage
import Foundation
import UIKit

extension UIImage {
    static func placeholder(color: UIColor, size: CGSize = CGSize(width: 1, height: 1)) -> UIImage {
        let render = UIGraphicsImageRenderer(size: size)

        return render.image { (context: UIGraphicsImageRendererContext) in
            context.cgContext.setFillColor(color.cgColor)
            context.fill(CGRect(origin: .zero, size: size))
        }
    }
}

// refs: https://www.hackingwithswift.com/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage
extension UIImage {
    @available(iOS 14.0, *)
    var dominantColor: UIColor? {
        guard let inputImage = CIImage(image: self) else { return nil }

        let filter = CIFilter.areaAverage()
        filter.inputImage = inputImage
        filter.extent = inputImage.extent
        guard let outputImage = filter.outputImage else { return nil }

        var bitmap = [UInt8](repeating: 0, count: 4)
        let context = CIContext(options: [.workingColorSpace: kCFNull as Any])
        context.render(outputImage, toBitmap: &bitmap, rowBytes: 4, bounds: CGRect(x: 0, y: 0, width: 1, height: 1), format: .RGBA8, colorSpace: nil)

        return UIColor(red: CGFloat(bitmap[0]) / 255, green: CGFloat(bitmap[1]) / 255, blue: CGFloat(bitmap[2]) / 255, alpha: CGFloat(bitmap[3]) / 255)
    }
}

extension UIImage {
    @available(iOS 13.0, *)
    func blur(radius: CGFloat) -> UIImage? {
        guard let inputImage = CIImage(image: self) else { return nil }
        let blurFilter = CIFilter.gaussianBlur()
        blurFilter.inputImage = inputImage
        blurFilter.radius = Float(radius)
        guard let outputImage = blurFilter.outputImage else { return nil }
        guard let cgImage = CIContext().createCGImage(outputImage, from: outputImage.extent) else { return nil }
        let image = UIImage(cgImage: cgImage, scale: scale, orientation: imageOrientation)
        return image
    }
}

extension UIImage {
    func withRoundedCorners(radius: CGFloat? = nil) -> UIImage? {
        let maxRadius = min(size.width, size.height) / 2
        let cornerRadius: CGFloat = {
            guard let radius = radius, radius > 0 else { return maxRadius }
            return min(radius, maxRadius)
        }()

        let render = UIGraphicsImageRenderer(size: size)
        return render.image { (_: UIGraphicsImageRendererContext) in
            let rect = CGRect(origin: .zero, size: size)
            UIBezierPath(roundedRect: rect, cornerRadius: cornerRadius).addClip()
            draw(in: rect)
        }
    }
}

extension UIImage {
    func resize(width: CGFloat) -> UIImage? {
        let scale = width / size.width
        let newHeight = size.height * scale
        UIGraphicsBeginImageContext(CGSize(width: width, height: newHeight))
        draw(in: CGRect(x: 0, y: 0, width: width, height: newHeight))
        let newImage = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        return newImage
    }
}

extension UIImage {
    @available(iOS 13.0, *)
    static func adaptiveUserInterfaceStyleImage(lightImage: UIImage, darkImage: UIImage) -> UIImage {
        let imageAsset = UIImageAsset()
        imageAsset.register(lightImage, with: UITraitCollection(traitsFrom: [
            UITraitCollection(displayScale: 1.0),
            UITraitCollection(userInterfaceStyle: .light)
        ]))
        imageAsset.register(darkImage, with: UITraitCollection(traitsFrom: [
            UITraitCollection(displayScale: 1.0),
            UITraitCollection(userInterfaceStyle: .dark)
        ]))
        return imageAsset.image(with: UITraitCollection.current)
    }
}

extension UIImage {
    static func render(size: CGSize, _ draw: () -> Void) -> UIImage? {
            UIGraphicsBeginImageContext(size)
            defer { UIGraphicsEndImageContext() }
            
            draw()
            
            return UIGraphicsGetImageFromCurrentImageContext()?
                .withRenderingMode(.alwaysTemplate)
    }
}
