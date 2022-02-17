//
//  UIImageView+Kingfisher.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import Kingfisher

extension UIImageView {
    func setNetworkImage(
        url: String?,
        placeholder: UIImage? = Asset.Images.Scene.Balance.tokenIconPlaceholder.image,
        completionHandler: ((Result<RetrieveImageResult, KingfisherError>) -> Void)? = nil) {
        guard let urlString = url, let url = URL(string: urlString) else {
            self.kf.cancelDownloadTask()
            self.image = placeholder
            return
        }
        let processor = GifRoundCornerImageProcessor(cornerRadius: 20)
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
            completionHandler: completionHandler
        )
    }
}

// A subclass of `RoundCornerImageProcessor` to:
// 1.crop a round corner to non-gif images
// 2.leave original gif image untouched
public struct GifRoundCornerImageProcessor: ImageProcessor {
    /// Represents a radius specified in a `RoundCornerImageProcessor`.
    public enum Radius {
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
    public let identifier: String

    /// The radius will be applied in processing. Specify a certain point value with `.point`, or a fraction of the
    /// target image with `.widthFraction`. or `.heightFraction`. For example, given a square image with width and
    /// height equals,  `.widthFraction(0.5)` means use half of the length of size and makes the final image a round one.
    public let radius: Radius
    
    /// The target corners which will be applied rounding.
    public let roundingCorners: RectCorner
    
    /// Target size of output image should be. If `nil`, the image will keep its original size after processing.
    public let targetSize: CGSize?

    /// Background color of the output image. If `nil`, it will use a transparent background.
    public let backgroundColor: KFCrossPlatformColor?

    public init(
        cornerRadius: CGFloat,
        targetSize: CGSize? = nil,
        roundingCorners corners: RectCorner = .all,
        backgroundColor: KFCrossPlatformColor? = nil
    ) {
        let radius = Radius.point(cornerRadius)
        self.init(radius: radius, targetSize: targetSize, roundingCorners: corners, backgroundColor: backgroundColor)
    }

    public init(
        radius: Radius,
        targetSize: CGSize? = nil,
        roundingCorners corners: RectCorner = .all,
        backgroundColor: KFCrossPlatformColor? = nil
    ) {
        self.radius = radius
        self.targetSize = targetSize
        self.roundingCorners = corners
        self.backgroundColor = backgroundColor

        self.identifier = {
            var identifier = ""

            if let size = targetSize {
                identifier = "com.dimension.MaskNetwork.RoundCornerImageProcessor" +
                             "(\(radius.radiusIdentifier)_\(size)\(corners.rawValue))"
            } else {
                identifier = "com.dimension.MaskNetwork.RoundCornerImageProcessor" +
                             "(\(radius.radiusIdentifier)\(corners.rawValue))"
            }
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
    public func process(item: ImageProcessItem, options: KingfisherParsedOptionsInfo) -> KFCrossPlatformImage? {
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
            
            if image.kf.gifRepresentation() == nil {
                return image.kf.scaled(to: options.scaleFactor)
                            .kf.image(
                                withRoundRadius: cornerRadius,
                                fit: size,
                                roundingCorners: roundingCorners,
                                backgroundColor: backgroundColor)
            } else {
                return image.kf.scaled(to: options.scaleFactor)
            }
            
        case .data:
            return (DefaultImageProcessor.default |> self).process(item: item, options: options)
        }
    }
}
