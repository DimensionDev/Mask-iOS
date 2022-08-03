import SwiftUI

extension View {
    func asUIView() -> UIView {
        let view = UIHostingController(rootView: self).view ?? UIView()
        view.backgroundColor = .clear
        return view
    }
}
