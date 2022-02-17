//
//  RoundCornerView.swift
//  Maskbook
//
//  Created by yzj on 2021/8/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit

class RoundCornerView: UIView {
    private(set) var cancelableStorage: Set<AnyCancellable> = []
    private(set) var maskLayer = CAShapeLayer()
    var corners: UIRectCorner = [] {
        didSet {
            setNeedsLayout()
        }
    }

    var cornersSize = CGSize(width: 10, height: 10) {
        didSet {
            setNeedsLayout()
        }
    }

    init() {
        super.init(frame: .zero)
        publisher(for: \.bounds, options: .new)
            .didChange()
            .sink { [weak self]_ in
                self?.updateMask()
            }
            .store(in: &cancelableStorage)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    private func updateMask() {
        guard let path = path(of: bounds)?.cgPath else {
            return
        }
        if layer.mask != maskLayer {
            layer.mask = maskLayer
        }
        if maskLayer.frame != bounds {
            maskLayer.frame = bounds
        }
        if maskLayer.path != path {
            maskLayer.path = path
        }
    }
}

extension RoundCornerView: PathProvider {
    func path(of rect: CGRect) -> UIBezierPath? {
        corners.rawValue > 0
            ? UIBezierPath(roundedRect: rect, byRoundingCorners: corners, cornerRadii: cornersSize)
            : nil
    }
}
