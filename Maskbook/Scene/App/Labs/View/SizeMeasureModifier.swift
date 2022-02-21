//
//  SizeMeasureModifier.swift
//  Maskbook
//
//  Created by yzj on 2021/7/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct SizePreferenceKey: PreferenceKey {
    static func reduce(value: inout CGSize?, nextValue: () -> CGSize?) {
        value = nextValue() ?? value
    }
}

struct SizeMeasureModifier: ViewModifier {
    @Binding private var size: CGSize
    init(size: Binding<CGSize>) {
        self._size = size
    }

    func body(content: Content) -> some View {
        content
            .background(
                GeometryReader { proxy in
                    Color.clear
                        .preference(
                            key: SizePreferenceKey.self,
                            value: proxy.size
                        )
                }
            )
            .onPreferenceChange(SizePreferenceKey.self) { size in
                guard let size = size else { return }
                self.size = size
            }
    }
}

struct SizeUpdateModifier: ViewModifier {
    let sizeHandler: (CGSize) -> Void
    init(sizeHandler: @escaping (CGSize) -> Void) {
        self.sizeHandler = sizeHandler
    }

    func body(content: Content) -> some View {
        content
            .background(
                GeometryReader { proxy in
                    Color.clear
                        .preference(
                            key: SizePreferenceKey.self,
                            value: proxy.size
                        )
                }
            )
            .onPreferenceChange(SizePreferenceKey.self) { size in
                guard let size = size else { return }
                sizeHandler(size)
            }
    }
}

extension View {
    func measureSize(to size: Binding<CGSize>) -> some View {
        self.modifier(SizeMeasureModifier(size: size))
    }

    func updateSize(using sizeHandler: @escaping (CGSize) -> Void) -> some View {
        self.modifier(SizeUpdateModifier(sizeHandler: sizeHandler))
    }
}
