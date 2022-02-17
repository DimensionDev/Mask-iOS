//
//  WalletConnectCollectionFlowLayout.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/9/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class WalletConnectCollectionFlowLayout: UICollectionViewFlowLayout {
    let rows: Int = 4
    
    let collums: Int = 4
    
    let sectionInsets = UIEdgeInsets(top: 20, left: 23.5, bottom: 60, right: 23.5)
    
    var attrsArray = [UICollectionViewLayoutAttributes]()
    
    override func prepare() {
        super.prepare()
    }
    
    override func invalidateLayout() {
        super.invalidateLayout()
        attrsArray.removeAll()
    }
    
    override func shouldInvalidateLayout(forBoundsChange newBounds: CGRect) -> Bool {
        true
    }
    
    override func layoutAttributesForItem(at indexPath: IndexPath) -> UICollectionViewLayoutAttributes? {
        guard let collectionView = collectionView else {
            return nil
        }
        let attribute = UICollectionViewLayoutAttributes(forCellWith: indexPath)
        
        let page = indexPath.section
        let cellW = (collectionView.frame.width - 45 - 90) / CGFloat(collums)
        let itemRow = CGFloat(indexPath.item / collums)
        let itemCol = CGFloat(indexPath.item % collums)

        let cellX = CGFloat(page) * collectionView.bounds.width + CGFloat(itemCol) * (cellW + 30) + sectionInsets.left
        let cellH: CGFloat = 73
        let cellY = itemRow * (cellH + 12) + sectionInsets.top
        attribute.frame = CGRect(x: cellX, y: cellY, width: cellW, height: cellH)
        return attribute
    }

    override func layoutAttributesForElements(in rect: CGRect) -> [UICollectionViewLayoutAttributes]? {
        guard let collectionView = collectionView else {
            return nil
        }
        let page = collectionView.numberOfSections
        for i in 0 ..< page {
            let itemCount = collectionView.numberOfItems(inSection: i)
            for j in 0 ..< itemCount {
                if let attr = layoutAttributesForItem(at: IndexPath(item: j, section: i)) {
                    attrsArray.append(attr)
                }
            }
        }
        return attrsArray
    }
    
    override var collectionViewContentSize: CGSize {
        guard let collectionView = collectionView else {
            return .zero
        }
        let page = collectionView.numberOfSections

        return CGSize(width: CGFloat(page) * collectionView.bounds.width, height: 0)
    }
}
