import Foundation
import UIKit
import UStack

struct ContentTextItem {
    let contentText: NSAttributedString
    let alignment: NSTextAlignment

    init(_ contentText: NSAttributedString, alignment: NSTextAlignment = .center) {
        self.contentText = contentText
        self.alignment = alignment
    }
}

extension ContentTextItem: AlertItemRepresentable {
    var itemPack: [AlertItemRepresentable] { [self] }

    func makeView(for alert: Alert) -> UIView {
        UILabel().cv.apply { label in
            label.numberOfLines = 0
            let final = NSMutableAttributedString(attributedString: contentText)
            let paragraphStyle = NSMutableParagraphStyle()
            paragraphStyle.alignment = alignment
            paragraphStyle.lineSpacing = 10
            final.addAttribute(.paragraphStyle,
                               value: paragraphStyle,
                               range: NSRange(location: 0, length: contentText.string.count))
            label.attributedText = final
        }
    }
}
