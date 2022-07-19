//
//  MnemonicVerifyCollectionFlowLayout.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class FlowCollectionFlowLayout: UICollectionViewFlowLayout {
    enum SpacingMode {
        case fixed(spacing: CGFloat)
        case overlap(visibleOffset: CGFloat)
    }

    fileprivate struct LayoutState: Equatable {
        var size: CGSize
        var direction: UICollectionView.ScrollDirection
    }

    var sideItemXScale: CGFloat = 0.7
    var sideItemYScale: CGFloat = 0.7
    var sideItemAlpha: CGFloat = 0.8
    var sideItemShift: CGFloat = 0.0
    var spacingMode = SpacingMode.overlap(visibleOffset: 40)

    fileprivate var state = LayoutState(size: .zero, direction: .horizontal)

    override  func prepare() {
        super.prepare()
        let currentState = LayoutState(
            size: collectionView?.bounds.size ?? .zero,
            direction: scrollDirection
        )

        if self.state != currentState {
            self.setupCollectionView()
            self.updateLayout()
            self.state = currentState
        }
    }

    fileprivate func setupCollectionView() {
        guard let collectionView = self.collectionView else { return }
        if collectionView.decelerationRate != .fast {
            collectionView.decelerationRate = .fast
        }
        estimatedItemSize = .zero
    }

    fileprivate func updateLayout() {
        guard let collectionView = self.collectionView else { return }

        let collectionSize = collectionView.bounds.size
        let isHorizontal = scrollDirection == .horizontal

        let yInset = (collectionSize.height - itemSize.height) / 2
        let xInset = (collectionSize.width - itemSize.width) / 2
        self.sectionInset = UIEdgeInsets(top: yInset, left: xInset, bottom: yInset, right: xInset)

        let side = isHorizontal ? itemSize.width : itemSize.height
        let scaledItemOffset = (side - side * sideItemXScale) / 2
        switch self.spacingMode {
        case .fixed(let spacing):
            self.minimumLineSpacing = spacing - scaledItemOffset

        case .overlap(let visibleOffset):
            let fullSizeSideItemOverlap = visibleOffset + scaledItemOffset
            let inset = isHorizontal ? xInset : yInset
            self.minimumLineSpacing = inset - fullSizeSideItemOverlap
        }
    }

    override func shouldInvalidateLayout(forBoundsChange newBounds: CGRect) -> Bool {
        return true
    }

    override  func layoutAttributesForElements(in rect: CGRect) -> [UICollectionViewLayoutAttributes]? {
        guard let superAttributes = super.layoutAttributesForElements(in: rect),
              let attributes = NSArray(array: superAttributes, copyItems: true) as? [UICollectionViewLayoutAttributes] else {
            return nil
        }
        return attributes.map({ self.transformLayoutAttributes($0) })
    }

    fileprivate func transformLayoutAttributes(_ attributes: UICollectionViewLayoutAttributes) -> UICollectionViewLayoutAttributes {
        guard let collectionView = self.collectionView else { return attributes }
        let isHorizontal = scrollDirection == .horizontal

        let collectionCenter = isHorizontal
            ? collectionView.frame.size.width / 2
            : collectionView.frame.size.height / 2

        let offset = isHorizontal ? collectionView.contentOffset.x : collectionView.contentOffset.y
        let normalizedCenter = (isHorizontal ? attributes.center.x : attributes.center.y) - offset

        let maxDistance = (isHorizontal ? itemSize.width : itemSize.height) + minimumLineSpacing
        let distance = min(abs(collectionCenter - normalizedCenter), maxDistance)
        let ratio = (maxDistance - distance) / maxDistance
        let alpha = ratio * (1 - sideItemAlpha) + sideItemAlpha
        let xScale = ratio * (1 - sideItemXScale) + sideItemXScale
        let yScale = ratio * (1 - sideItemYScale) + sideItemYScale
        let shift = (1 - ratio) * sideItemShift
        attributes.alpha = alpha
        attributes.transform3D = CATransform3DScale(CATransform3DIdentity, xScale, yScale, 1)
        attributes.zIndex = Int(alpha * 10)

        if isHorizontal {
            attributes.center.y += shift
        } else {
            attributes.center.x += shift
        }

        return attributes
    }

    override func targetContentOffset(forProposedContentOffset proposedContentOffset: CGPoint, withScrollingVelocity velocity: CGPoint) -> CGPoint {
        guard let collectionView = collectionView,
              !collectionView.isPagingEnabled,
              let layoutAttributes = self.layoutAttributesForElements(in: collectionView.bounds) else {
            return super.targetContentOffset(forProposedContentOffset: proposedContentOffset)
        }

        let isHorizontal = scrollDirection == .horizontal

        let midSide = (isHorizontal ? collectionView.bounds.size.width : collectionView.bounds.size.height) / 2
        let proposedOffsetCenter = (isHorizontal ? proposedContentOffset.x : proposedContentOffset.y) + midSide

        var targetContentOffset: CGPoint
        if isHorizontal {
            let closest = layoutAttributes.min(by: {
                let first = abs($0.center.x - proposedOffsetCenter)
                let second = abs($1.center.x - proposedOffsetCenter)
                return first < second
            }) ?? UICollectionViewLayoutAttributes()

            targetContentOffset = CGPoint(x: floor(closest.center.x - midSide), y: proposedContentOffset.y)
        } else {
            let closest = layoutAttributes.min(by: {
                let first = abs($0.center.y - proposedOffsetCenter)
                let second = abs($1.center.y - proposedOffsetCenter)
                return first < second
            }) ?? UICollectionViewLayoutAttributes()

            targetContentOffset = CGPoint(x: proposedContentOffset.x, y: floor(closest.center.y - midSide))
        }

        return targetContentOffset
    }
}
