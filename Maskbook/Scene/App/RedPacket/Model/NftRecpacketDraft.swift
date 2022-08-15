import Foundation

import CoreDataStack

struct NftRecpacketDraft {
    let message: String
    let collectibles: [Collectible]
    let collectibleGroup: CollectiableGroup
}
