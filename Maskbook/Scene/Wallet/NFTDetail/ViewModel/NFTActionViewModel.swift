//
//  NFTActionViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/2/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

class NFTActionViewModel {
    lazy var menuItemsPublisher: AnyPublisher<[SectionItem], Never> = {
        return Future { [weak self] promise in
            guard let self = self else { return promise(.success([])) }
            let items = self.generateMenuItems()
            promise(.success(items))
        }
        .eraseToAnyPublisher()
    }()
    
    let token: Collectible
    init(token: Collectible) {
        self.token = token
    }
    
    private func generateMenuItems() -> [SectionItem] {
        var items = [SectionItem]()
                
        if let imageUrl = token.imageUrl?.absoluteString,
           imageUrl.contains("lh3.googleusercontent"){
            let saveItem = SectionItem.savephoto(title: L10n.Scene.NftDetail.savePhoto, imageUrl: token.imageUrl)
            items.append(saveItem)
        }
     
        if let websiteUrl = token.collectionWebsite {
            let websiteItem = SectionItem.website(title: L10n.Scene.NftDetail.collectionWeb, websiteUrl: websiteUrl)
            items.append(websiteItem)
        }
        
        let ethscanUrl = URL(string: "https://etherscan.io/nft/\(token.address ?? "")/\(token.tokenId ?? "")")
        let ethscanItem = SectionItem.ethscan(title: L10n.Scene.NftDetail.etherscan, ethscanUrl: ethscanUrl)
        items.append(ethscanItem)

        return items
    }
}

extension NFTActionViewModel {
    enum Section {
        case main
    }
    
    enum SectionItem: Hashable {
        case savephoto(title: String, imageUrl: URL?)
        case website(title: String, websiteUrl: URL?)
        case ethscan(title: String, ethscanUrl: URL?)
    }
}
