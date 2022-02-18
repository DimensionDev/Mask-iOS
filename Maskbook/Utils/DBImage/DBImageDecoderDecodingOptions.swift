import Foundation
import UIKit

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
