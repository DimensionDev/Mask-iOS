//
//  UIImageView+Kingfisher.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit
import Kingfisher

extension UIImageView {
    func setNetworkImage(
        url: String?,
        placeholder: UIImage? = Asset.Images.Scene.Balance.tokenIconPlaceholder.image,
        cornerRadius: CGFloat? = nil,
        downsample: Bool? = false,
        downsamplingSize: CGSize? = nil,
        completionHandler: ((Result<RetrieveImageResult, KingfisherError>) -> Void)? = nil) {
            guard let urlString = url, let url = URL(string: urlString) else {
                self.kf.cancelDownloadTask()
                self.image = placeholder
                return
            }
            let processor: ImageProcessor = {
                if downsample == true {
                    return GifRoundCornerImageProcessor(cornerRadius: cornerRadius,
                                                        targetSize: downsamplingSize)
                } else if let cornerRadius = cornerRadius {
                    return RoundCornerImageProcessor(cornerRadius: cornerRadius)
                }
                return DefaultImageProcessor.default
            }()
            
            self.kf.indicatorType = .none
            self.kf.setImage(
                with: url,
                placeholder: placeholder,
                options: [
                    .processor(processor),
                    .cacheSerializer(FormatIndicatedCacheSerializer.gif),
                    .scaleFactor(UIScreen.main.scale),
                    .transition(.fade(1))
                ],
                completionHandler: completionHandler)
        }
}

private var imageTaskKey: Void?

func getAssociatedObject<T>(_ object: Any, _ key: UnsafeRawPointer) -> T? {
    return objc_getAssociatedObject(object, key) as? T
}

func setRetainedAssociatedObject<T>(_ object: Any, _ key: UnsafeRawPointer, _ value: T) {
    objc_setAssociatedObject(object, key, value, .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
}

typealias DownSamplingLevel = DBImageDecoder.DownSamplingLevel
// A subclass of `RoundCornerImageProcessor` to:
// 1.crop a round corner to non-gif images
// 2.leave original gif image untouched
struct GifRoundCornerImageProcessor: ImageProcessor {
    /// Represents a radius specified in a `RoundCornerImageProcessor`.
    enum Radius {
        /// The radius should be calculated as a fraction of the image width. Typically the associated value should be
        /// between 0 and 0.5, where 0 represents no radius and 0.5 represents using half of the image width.
        case widthFraction(CGFloat)
        /// The radius should be calculated as a fraction of the image height. Typically the associated value should be
        /// between 0 and 0.5, where 0 represents no radius and 0.5 represents using half of the image height.
        case heightFraction(CGFloat)
        /// Use a fixed point value as the round corner radius.
        case point(CGFloat)

        var radiusIdentifier: String {
            switch self {
            case .widthFraction(let f):
                return "w_frac_\(f)"
            case .heightFraction(let f):
                return "h_frac_\(f)"
            case .point(let p):
                return p.description
            }
        }
    }

    /// Identifier of the processor.
    /// - Note: See documentation of `ImageProcessor` protocol for more.
    let identifier: String

    /// The radius will be applied in processing. Specify a certain point value with `.point`, or a fraction of the
    /// target image with `.widthFraction`. or `.heightFraction`. For example, given a square image with width and
    /// height equals,  `.widthFraction(0.5)` means use half of the length of size and makes the final image a round one.
    let radius: Radius
    
    /// The target corners which will be applied rounding.
    let roundingCorners: RectCorner
    
    /// Target size of output image should be. If `nil`, the image will keep its original size after processing.
    let targetSize: CGSize?
    
    let downsamplingLevel: DownSamplingLevel

    /// Background color of the output image. If `nil`, it will use a transparent background.
    let backgroundColor: KFCrossPlatformColor?

    init(
        cornerRadius: CGFloat?,
        targetSize: CGSize? = nil,
        roundingCorners corners: RectCorner = .all,
        backgroundColor: KFCrossPlatformColor? = nil
    ) {
        let radius = Radius.point(cornerRadius ?? 0)
        self.init(radius: radius, targetSize: targetSize, roundingCorners: corners, backgroundColor: backgroundColor)
    }

    init(
        radius: Radius,
        targetSize: CGSize? = nil,
        roundingCorners corners: RectCorner = .all,
        backgroundColor: KFCrossPlatformColor? = nil,
        downsamplingLevel: DownSamplingLevel = .level3
    ) {
        self.radius = radius
        self.targetSize = targetSize
        self.roundingCorners = corners
        self.backgroundColor = backgroundColor
        self.downsamplingLevel = downsamplingLevel
        self.identifier = {
            var identifier = "com.dimension.MaskNetwork.RoundCornerImageProcessor" +
            "(\(radius.radiusIdentifier)_\(targetSize ?? .zero)_\(corners.rawValue)_\(downsamplingLevel.rawValue))"
            if let backgroundColor = backgroundColor {
                identifier += "_\(backgroundColor)"
            }
            
            return identifier
        }()
    }
    
    /// Processes the input `ImageProcessItem` with this processor.
    ///
    /// - Parameters:
    ///   - item: Input item which will be processed by `self`.
    ///   - options: Options when processing the item.
    /// - Returns: The processed image.
    ///
    /// - Note: See documentation of `ImageProcessor` protocol for more.
    func process(item: ImageProcessItem, options: KingfisherParsedOptionsInfo) -> KFCrossPlatformImage? {
        switch item {
        case .image(let image):
            let size = targetSize ?? image.kf.base.size

            let cornerRadius: CGFloat
            switch radius {
            case .point(let point):
                cornerRadius = point
                
            case .widthFraction(let widthFraction):
                cornerRadius = size.width * widthFraction
                
            case .heightFraction(let heightFraction):
                cornerRadius = size.height * heightFraction
            }
            
            log.debug("original size: \(image.kf.base.size) fit size: \(size)", source: "collection-image")
            if let gifData = image.kf.gifRepresentation() {
                log.debug("process gif image", source: "collection-image")
                // download image -> processor -> cache 
                let decoder = DBImageDecoder(downsamplingLevel: downsamplingLevel, maxSize: targetSize)
                decoder.setData(gifData, allDataReceived: true)
                guard let processedData = decoder.data else {
                    return image
                }
                guard let prcessedImage = KingfisherWrapper.animatedImage(
                    data: processedData, options: options.imageCreatingOptions
                ) else {
                    return image
                }
                log.debug(
                    "process gif image, original size: \(gifData.count) processed size: \(processedData.count)",
                    source: "collection-image"
                )
                return prcessedImage
            } else {
                return image.kf.image(
                        withRoundRadius: cornerRadius,
                        fit: size,
                        roundingCorners: roundingCorners,
                        backgroundColor: backgroundColor)
            }
            
        case .data:
            return (DefaultImageProcessor.default |> self).process(item: item, options: options)
        }
    }
}

extension KingfisherParsedOptionsInfo {
    var imageCreatingOptions: ImageCreatingOptions {
        return ImageCreatingOptions(
            scale: scaleFactor,
            duration: 0.0,
            preloadAll: preloadAllAnimationData,
            onlyFirstFrame: onlyLoadFirstFrame)
    }
}
