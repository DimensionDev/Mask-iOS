import SwiftUI
import UIKit

class SheetHostingController<Content: View>: UIHostingController<Content> {
    private var presenter = SheetPresenter(
        presentStyle: .translucent,
        transition: Transition()
    )

    override init(rootView: Content) {
        super.init(rootView: rootView)
        view.backgroundColor = .clear
        modalPresentationStyle = .overCurrentContext
        presenter.bind(to: self)
        buildEvent()
    }

    @available(*, unavailable)
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    func buildEvent() {}
}

typealias SheetAdapitveHostingController<T: View> = SheetHostingController<SheetAdaptiveContainer<T>>
