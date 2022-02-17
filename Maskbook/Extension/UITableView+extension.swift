import UIKit

// swiftlint:disable force_cast
extension UITableView {
    func register<T: UITableViewCell>(_ cellType: T.Type) {
        register(cellType, forCellReuseIdentifier: String(describing: T.self))
    }

    func dequeCell<T: UITableViewCell>(at indexPath: IndexPath) -> T {
        dequeueReusableCell(withIdentifier: String(describing: T.self), for: indexPath) as! T
    }
    
    func registerHeaderFooter<T: UITableViewHeaderFooterView>(_ viewType: T.Type) {
        register(viewType, forHeaderFooterViewReuseIdentifier: String(describing: T.self))
    }
    
    func dequeueHeaderFooter<T: UITableViewHeaderFooterView>(_ viewType: T.Type) -> T? {
        dequeueReusableHeaderFooterView(withIdentifier: String(describing: viewType.self)) as? T
    }
}
// swiftlint:enable force_cast
