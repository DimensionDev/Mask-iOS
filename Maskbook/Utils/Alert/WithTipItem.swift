import Foundation
import UIKit
import UStack

struct WithTipItem {
    let title: String
    let detail: NSAttributedString
    let detailAlignment: NSTextAlignment

    init(title: String, detail: NSAttributedString, detailAlignment: NSTextAlignment = .left) {
        self.title = title
        self.detail = detail
        self.detailAlignment = detailAlignment
    }
}

extension WithTipItem: AlertItemRepresentable {
    func makeView(for alert: Alert) -> UIView {
        VStackView(spacing: 12) {
            UILabel().cv.apply { titlelabel in
                titlelabel.textAlignment = .center
                titlelabel.text = title
                titlelabel.font = FontStyles.BH4
                titlelabel.textColor = Asset.Colors.Text.dark.color
            }
            UILabel().cv.apply { label in
                let final = NSMutableAttributedString(attributedString: detail)
                let paragraphStyle = NSMutableParagraphStyle()
                paragraphStyle.alignment = detailAlignment
                paragraphStyle.lineSpacing = 10
                final.addAttribute(.paragraphStyle,
                                   value: paragraphStyle,
                                   range: NSRange(location: 0, length: detail.string.count))
                label.attributedText = final
                label.numberOfLines = 0
            }
        }
    }
}
