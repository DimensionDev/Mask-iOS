//
//  MaskSegmentControl.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

protocol MaskSegmentControlDelegate: AnyObject {
    func didSelectedIndex(_ index: Int)
}

protocol MaskSegmentControl: UIView {
    var delegate: MaskSegmentControlDelegate? { get }
    var selectedIndex: CurrentValueSubject<Int, Never> { get }
    func setItems(items: [String])
    func selectedIndex(at index: Int, animated: Bool)
}

enum MaskSegmentControlStyle {
    case group
    case plain
}
