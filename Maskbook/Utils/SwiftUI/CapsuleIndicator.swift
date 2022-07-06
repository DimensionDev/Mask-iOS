import Foundation
import SwiftUI

struct CapsuleIndicator: View {
    let configuration: LayouConfiguration
    let totalCount: CGFloat
    let count: Int

    var body: some View {
        // indicator control
        HStack(spacing: indicatorSpacing) {
            ForEach(0 ... count - 1) { index in
                Capsule()
                    .fill(
                        self.index == index
                            ? configuration.indicatorColor.asColor()
                            : Asset.Colors.Background.lightBlue.asColor()
                    )
                    .frame(
                        width: self.index == index
                            ? capsuleWidth
                            : indicatorWidth,
                        height: indicatorHeight
                    )
            }
        }
        .overlay(
            Capsule()
                .fill(configuration.indicatorColor.asColor())
                .frame(width: capsuleWidth, height: indicatorHeight)
                .offset(x: calculatedOffset),

            alignment: .leading
        )
    }

    private let capsuleWidth: CGFloat = 20
    private let indicatorWidth: CGFloat = 10
    private let indicatorHeight: CGFloat = 6
    private let indicatorSpacing: CGFloat = 7

    var index: Int {
        guard !totalCount.isZero else {
            return 0
        }

        let progress = round(scrollOffset / contentWidth)
        let index = max(0, min(progress, totalCount - 1))

        let value = Int(index)

        return value
    }

    var calculatedOffset: CGFloat {
        guard !contentWidth.isZero else {
            return 0
        }
        let progress = scrollOffset / contentWidth
        let maxWidth = indicatorWidth + indicatorSpacing
        let value = progress * maxWidth
        let maxOffset = (totalCount - 1) * maxWidth

        return  max(0, min(value, maxOffset))
    }

    @Binding
    var scrollOffset: CGFloat

    @Binding
    var contentWidth: CGFloat
}
