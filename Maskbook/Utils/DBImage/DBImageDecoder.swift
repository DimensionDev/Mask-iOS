import Foundation
import ImageIO
import UIKit

final class DBImageDecoder {
    struct DecodingOptions {
        enum Mode {
            case synchronous
            case asynchronous
        }
        
        static var `default`: DecodingOptions {
            DecodingOptions(mode: .asynchronous, sizeForDrawing: nil)
        }
        
        var mode: Mode
        var sizeForDrawing: CGSize?
    }
    
    enum DownSamplingLevel: Int, Hashable {
        case level0 = 1
        case level1 = 2
        case level2 = 4
        case level3 = 8
        
        static var `default`: DownSamplingLevel {
            .level0
        }
    }
    
    let maxSize: CGSize?
    let downsamplingLevel: DownSamplingLevel
    // MARK: - Public
    
    init(downsamplingLevel: DownSamplingLevel = .level3, maxSize: CGSize? = nil) {
        imageSource = CGImageSourceCreateIncremental(nil)
        self.downsamplingLevel = downsamplingLevel
        self.maxSize = maxSize
    }
    
    private(set) var isAllDataReceived = false
    
    func setData(_ data: Data, allDataReceived: Bool) {
        assert(!isAllDataReceived)
        
        isAllDataReceived = allDataReceived
        CGImageSourceUpdateData(imageSource, data as CFData, allDataReceived)
    }
    
    func setDataProvider(_ dataProvider: CGDataProvider, allDataReceived: Bool) {
        assert(!isAllDataReceived)
        isAllDataReceived = allDataReceived
        CGImageSourceUpdateDataProvider(imageSource, dataProvider, allDataReceived)
    }
    
    var uti: String? {
        CGImageSourceGetType(imageSource) as String?
    }
    
    var frameCount: Int {
        CGImageSourceGetCount(imageSource)
    }
    
    func frameDuration(at index: Int) -> TimeInterval? {
        guard let frameProperties = CGImageSourceCopyPropertiesAtIndex(
            imageSource,
            index,
            imageSourceOptions()
        ) as? [CFString: Any] else {
            return nil
        }
        
        var animationProperties = frameProperties.animationProperties()
        
        if animationProperties == nil {
            if let properties = CGImageSourceCopyProperties(imageSource, imageSourceOptions()) as? [CFString: Any] {
                animationProperties = properties.animationHEICSProperties(at: index)
            }
        }
        
        let duration: TimeInterval
        
        // Use the unclamped frame delay if it exists. Otherwise use the clamped frame delay.
        if let unclampedDelay = animationProperties?["UnclampedDelayTime" as CFString] as? TimeInterval {
            duration = unclampedDelay
        } else if let delay = animationProperties?["DelayTime" as CFString] as? TimeInterval {
            duration = delay
        } else {
            duration = 0.0
        }
        
        // We are not allowing frame duration faster than 10ms here but we can have it as required.
        return duration < 0.011 ? 0.1 : duration
    }
    
    func frameSize(at index: Int, downsamplingLevel: DownSamplingLevel = .default) -> CGSize? {
        guard let properties = CGImageSourceCopyPropertiesAtIndex(
            imageSource,
            index,
            imageSourceOptions(with: downsamplingLevel)
        ) as? [CFString: Any] else {
            return nil
        }
        
        guard let width = properties[kCGImagePropertyPixelWidth] as? Int,
                let height = properties[kCGImagePropertyPixelHeight] as? Int else {
            return nil
        }
        
        return CGSize(width: width, height: height)
    }
    
    func createFrameImage(
        at index: Int,
        downsamplingLevel: DownSamplingLevel = .default,
        decodingOptions: DecodingOptions = .default) -> CGImage? {
        guard index < frameCount else {
            return nil
        }
        
        let image: CGImage?
        let options: CFDictionary
        
        switch decodingOptions.mode {
        case .asynchronous:
            // No need to consider the down sampling when comparing the image native size with sizeForDrawing.
            guard var size = frameSize(at: index) else {
                return nil
            }
            
            if let sizeForDrawing = decodingOptions.sizeForDrawing {
                // Choose the smaller one.
                if sizeForDrawing.width * sizeForDrawing.height < size.width * size.height {
                    size = sizeForDrawing
                }
            }
            
            options = imageSourceAsyncOptions(sizeForDrawing: size, donwsamplingLevel: downsamplingLevel)
            image = CGImageSourceCreateThumbnailAtIndex(imageSource, index, options)
            
        case .synchronous:
            options = imageSourceOptions(with: downsamplingLevel)
            image = CGImageSourceCreateImageAtIndex(imageSource, index, options)
        }
        
        return image
    }
    
    func isFrameComplete(at index: Int) -> Bool {
        assert(frameCount > index)
        
        if index == frameCount - 1 {
            return CGImageSourceGetStatus(imageSource) == .statusComplete
        }
        
        return CGImageSourceGetStatusAtIndex(imageSource, index) == .statusComplete
    }
    
    // MARK: - Private
    
    private static let imageSourceOptions: [CFString: Any] = [
        kCGImageSourceShouldCache: true
    ]
    
    private static let imageSourceAsyncOptions: [CFString: Any] = [
        kCGImageSourceShouldCacheImmediately: true,
        kCGImageSourceCreateThumbnailFromImageAlways: true
    ]
    
    private let imageSource: CGImageSource
    
    private func imageSourceOptions(with downsamplingLevel: DownSamplingLevel = .default) -> CFDictionary {
        var options = DBImageDecoder.imageSourceOptions
        
        switch downsamplingLevel {
        case .default:
            return options as CFDictionary
            
        default:
            options[kCGImageSourceSubsampleFactor] = downsamplingLevel
            return options as CFDictionary
        }
    }
    
    private func imageSourceAsyncOptions(sizeForDrawing: CGSize, donwsamplingLevel: DownSamplingLevel = .default)
    -> CFDictionary {
        var options = DBImageDecoder.imageSourceAsyncOptions
        
        options[kCGImageSourceThumbnailMaxPixelSize] = Int(max(sizeForDrawing.width, sizeForDrawing.height))
        
        switch donwsamplingLevel {
        case .default:
            return options as CFDictionary
            
        default:
            options[kCGImageSourceSubsampleFactor] = donwsamplingLevel
            return options as CFDictionary
        }
    }
}

fileprivate extension Dictionary where Key == CFString, Value == Any {
    func animationProperties() -> [CFString: Any]? {
        if let gifProperties = self[kCGImagePropertyGIFDictionary] as? [CFString: Any] {
            return gifProperties
        }
        
        if let pngProperties = self[kCGImagePropertyPNGDictionary] as? [CFString: Any] {
            return pngProperties
        }
        
        if #available(iOS 13.0, *) {
            if let heicsProperties = self[kCGImagePropertyHEICSDictionary] as? [CFString: Any] {
                return heicsProperties
            }
        }
        
        return nil
    }
    
    func animationHEICSProperties(at index: Int) -> [CFString: Any]? {
        if #available(iOS 13.0, *) {
            guard let heicsProperties = self[kCGImagePropertyHEICSDictionary] as? [CFString: Any] else {
                return nil
            }
            
            guard let array = heicsProperties["FrameInfo" as CFString] as? [[CFString: Any]], array.count > index else {
                return nil
            }
            
            return array[index]
        }
        
        return nil
    }
}
