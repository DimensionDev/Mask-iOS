//
//  PresentStyle.swift
//  Maskbook
//
//  Created by yzj on 2021/7/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

public enum PresentStyle: Equatable {
    case transparent
    case translucent
    case customContainer(color: UIColor)
    case blur
}
