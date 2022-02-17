import UIKit

// swiftlint:disable force_cast
extension UICollectionView {
    func register<T: UICollectionViewCell>(_ cellType: T.Type) {
        register(cellType, forCellWithReuseIdentifier: String(describing: T.self))
    }

    func dequeCell<T: UICollectionViewCell>(at indexPath: IndexPath) -> T {
        dequeueReusableCell(withReuseIdentifier: String(describing: T.self), for: indexPath) as! T
    }
}
// swiftlint:enable force_cast
