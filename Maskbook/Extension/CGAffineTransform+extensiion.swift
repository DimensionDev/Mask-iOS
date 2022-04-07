//
//  CGAffineTransform+extensiion.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit
extension CGAffineTransform {
    
    var xScale: CGFloat {
        return sqrt(a * a + c * c)
    }
    
    var yScale: CGFloat {
        return sqrt(b * b + d * d)
    }
    
    var rotation: CGFloat {
        return CGFloat(atan2f(Float(b), Float(a)))
    }
    
    static func makeTransform(xScale: CGFloat, yScale: CGFloat,
                       theta: CGFloat, tx: CGFloat, ty: CGFloat) -> CGAffineTransform {
        
        var transform = CGAffineTransform.identity
        
        transform.a = CGFloat(xScale * cos(theta))
        transform.b = CGFloat(yScale * sin(theta))
        transform.c = CGFloat(xScale * -sin(theta))
        transform.d = CGFloat(xScale * cos(theta))
        transform.tx = CGFloat(tx)
        transform.ty = CGFloat(ty)
        
        return transform
    }
    
}
