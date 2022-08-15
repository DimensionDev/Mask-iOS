import Foundation
import CoreDataStack

extension Collectible {
    var previewLink: URL? {
        guard let imageURL = imageUrl?.absoluteString else {
            return nil
        }

        if imageURL.hasSuffix(".svg") {
            // unsupport
            return nil
        } else if imageURL.hasPrefix("Qm") ||  imageURL.hasPrefix("ba") {
            return URL(string: "https://ipfs.infura.io/ipfs/\(imageURL)")
        } else {
            return imageUrl
        }
    }
}
