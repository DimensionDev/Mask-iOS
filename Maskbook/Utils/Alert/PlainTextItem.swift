import Foundation
import UIKit
import UStack

struct PlainTextItem {
    let title: String
    let detail: String
    let detailAlignment: NSTextAlignment

    init(title: String, detail: String, detailAlignment: NSTextAlignment = .left) {
        self.title = title
        self.detail = detail
        self.detailAlignment = detailAlignment
    }
}

extension PlainTextItem: AlertItemRepresentable {
    func makeView(for alert: Alert) -> UIView {
        VStackView(spacing: 12) {
            UILabel().cv.apply { titlelabel in
                titlelabel.textAlignment = .center
                titlelabel.text = title
                titlelabel.font = FontStyles.BH4
                titlelabel.textColor = Asset.Colors.Text.dark.color
                titlelabel.numberOfLines = 0
            }
            UILabel().cv.apply { label in
                let detailString = NSAttributedString(
                    string: detail,
                    attributes: [
                        .font: FontStyles.MH5,
                        .foregroundColor: Asset.Colors.Text.normal.color
                    ]
                )
                let final = NSMutableAttributedString(attributedString: detailString)
                let paragraphStyle = NSMutableParagraphStyle()
                paragraphStyle.alignment = detailAlignment
                paragraphStyle.lineSpacing = 10
                final.addAttribute(.paragraphStyle,
                                   value: paragraphStyle,
                                   range: NSRange(location: 0, length: detailString.string.count))
                label.attributedText = final
                label.numberOfLines = 0
            }
        }
    }
}
