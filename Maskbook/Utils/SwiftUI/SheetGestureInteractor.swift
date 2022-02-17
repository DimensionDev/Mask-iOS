import UIKit

protocol SheetGestureInteractor {
    var tapToDismiss: Bool { get set }
    var swipeToDismiss: Bool { get set }
    var translateWhenSwiping: Bool { get set }

    var dismissDelta: CGFloat { get set }
}

struct DefaultSheetGestureInteractor: SheetGestureInteractor {
    var tapToDismiss = true
    var swipeToDismiss = true
    var translateWhenSwiping = true
    var dismissDelta: CGFloat

    init(
        tapToDismiss: Bool = true,
        swipeToDismiss: Bool = true,
        translateWhenSwiping: Bool = true,
        dismissDelta: CGFloat = 0.5
    ) {
        self.tapToDismiss = tapToDismiss
        self.swipeToDismiss = swipeToDismiss
        self.translateWhenSwiping = translateWhenSwiping
        self.dismissDelta = dismissDelta
    }
}

extension SheetGestureInteractor where Self == DefaultSheetGestureInteractor {
    static var `default`: DefaultSheetGestureInteractor { .init() }
}
