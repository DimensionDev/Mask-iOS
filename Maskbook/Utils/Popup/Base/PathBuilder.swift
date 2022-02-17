//
//  PathBuilder.swift
//  Maskbook
//
//  Created by yzj on 2021/8/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

protocol PathProvider: AnyObject {
    func path(of rect: CGRect) -> UIBezierPath?
    var maskLayer: CAShapeLayer { get }
}
