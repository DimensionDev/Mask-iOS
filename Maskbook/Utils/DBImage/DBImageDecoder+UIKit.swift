import ImageIO
import MobileCoreServices
import UIKit

extension DBImageDecoder {
    var image: UIImage? {
        switch frameCount {
        case 0: return nil
        case 1: return staticUIImage
        default: return animatedUIImage
        }
    }
    
    var data: Data? {
        switch frameCount {
        case 0: return nil
        case 1: return staticUIImage?.pngData()
            
        default:
            guard let images = image?.images else {
                return nil
            }
            return animatedGif(from: images)
        }
    }
    
    var animatedUIImage: UIImage? {
        guard frameCount > 1 else {
            return nil
        }
        
        var duration: TimeInterval = 0.0
        var images: [UIImage] = []
        
        for i in 0..<frameCount {
            guard let image = createFrameUIImage(
                at: i,
                downsamplingLevel: downsamplingLevel,
                decodingOptions: DecodingOptions(
                    mode: .asynchronous,
                    fitSize: maxSize
                )
            ) else {
                continue
            }
            
            images.append(image)
            duration += frameDuration(at: i) ?? 0.0
        }
        
        return UIImage.animatedImage(with: images, duration: duration)
    }
    
    // If we need to have only static image, no matter has single or multiple frames.
    var staticUIImage: UIImage? {
        frameCount > 0 ? createFrameUIImage(at: 0) : nil
    }
    
    private func createFrameUIImage(
        at index: Int,
        downsamplingLevel: DownSamplingLevel = .default,
        decodingOptions: DecodingOptions = .default) -> UIImage? {
            guard let cgImage = createFrameImage(
                at: index,
                downsamplingLevel: downsamplingLevel,
                decodingOptions: decodingOptions) else {
                return nil
            }
            
            return UIImage(cgImage: cgImage)
    }
    
    private func animatedGif(from images: [UIImage]) -> Data? {
        guard let imageData = CFDataCreateMutable(nil, 0) else {
            return nil
        }
        let fileProperties: CFDictionary = [
            kCGImagePropertyGIFDictionary as String: [kCGImagePropertyGIFLoopCount as String: 0]
        ]  as CFDictionary
        
        guard let destination = CGImageDestinationCreateWithData(imageData, kUTTypeGIF, images.count, nil) else {
            return nil
        }
        CGImageDestinationSetProperties(destination, fileProperties)
        for (index, image) in images.enumerated() {
            guard let cgImage = image.cgImage else { continue }
            guard let duration = frameDuration(at: index) else { continue }
            let frameProperties: CFDictionary = [
                kCGImagePropertyGIFDictionary as String: [(kCGImagePropertyGIFDelayTime as String): duration]
            ] as CFDictionary
            CGImageDestinationAddImage(destination, cgImage, frameProperties)
        }
        if !CGImageDestinationFinalize(destination) {
            print("Failed to finalize the image destination")
        }
        return imageData as NSData as Data}
}
