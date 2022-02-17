//
//  ScrollPositionModifier.swift
//  Maskbook
//
//  Created by yzj on 2021/8/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct ScrollPositionPreferenceKey: PreferenceKey {
    static var defaultValue: CGPoint = .zero
    static func reduce(value: inout CGPoint, nextValue: () -> CGPoint) {
        value = nextValue()
    }
}

// This view will not perform offsetChanged when be used in modifier
struct ObservedScrollView<Content: View>: View {
    let axes: Axis.Set
    let showsIndicators: Bool
    let offsetChanged: (CGPoint) -> Void
    let content: Content

    private var coordinateSpace: String { "ObservedScrollView\(String(describing: Content.self))" }

    init(
        axes: Axis.Set = .vertical,
        showsIndicators: Bool = false,
        offsetChanged: @escaping (CGPoint) -> Void = { _ in },
        @ViewBuilder content: () -> Content
    ) {
        self.axes = axes
        self.showsIndicators = showsIndicators
        self.offsetChanged = offsetChanged
        self.content = content()
    }

    var body: some View {
        ScrollView(axes, showsIndicators: showsIndicators) {
            GeometryReader { geometry in
                Color.clear
                    .preference(
                        key: ScrollPositionPreferenceKey.self,
                        value: geometry.frame(in: .named(coordinateSpace)).origin
                    )
            }
            .frame(width: 0, height: 0)

            content
        }
        .coordinateSpace(name: coordinateSpace)
        .onPreferenceChange(ScrollPositionPreferenceKey.self, perform: offsetChanged)
    }
}
