//
//  PagerView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/28.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct PagerView<Content: View>: UIViewRepresentable {
    var contentSize: CGSize
    var content: Content
    @Binding var page: Int
    @Binding var offset: CGFloat
    
    init(contentSize: CGSize,
         page: Binding<Int>,
         offset: Binding<CGFloat>,
         @ViewBuilder content: @escaping () -> Content) {
        self.contentSize = contentSize
        self._page = page
        self._offset = offset
        self.content = content()
    }
    
    // swiftlint:disable implicitly_unwrapped_optional
    func makeUIView(context: Context) -> UIScrollView {
        let scrollView = UIScrollView()
        scrollView.isPagingEnabled = true
        scrollView.showsHorizontalScrollIndicator = false
        scrollView.showsVerticalScrollIndicator = false
        scrollView.delegate = context.coordinator
        
        let hostViewController = UIHostingController(rootView: content)
        let hostView: UIView! = hostViewController.view
        hostView.translatesAutoresizingMaskIntoConstraints = false
        scrollView.addSubview(hostView)

        hostView.translatesAutoresizingMaskIntoConstraints = false
        hostView.backgroundColor = .clear
        NSLayoutConstraint.activate([
            hostView.topAnchor.constraint(equalTo: scrollView.contentLayoutGuide.topAnchor),
            hostView.leadingAnchor.constraint(equalTo: scrollView.contentLayoutGuide.leadingAnchor),
            scrollView.contentLayoutGuide.bottomAnchor.constraint(equalTo: hostView.bottomAnchor),
            scrollView.contentLayoutGuide.trailingAnchor.constraint(equalTo: hostView.trailingAnchor),
            hostView.heightAnchor.constraint(equalTo: scrollView.heightAnchor)
        ])
        return scrollView
    }
    // swiftlint:enable implicitly_unwrapped_optional
    
    func updateUIView(_ uiView: UIScrollView, context: Context) {
    }
    
    func makeCoordinator() -> Coordinator {
        Coordinator(parent: self)
    }
    
    class Coordinator: NSObject, UIScrollViewDelegate {
        var parent: PagerView
        
        init(parent: PagerView) {
            self.parent = parent
        }
        
        func scrollViewDidScroll(_ scrollView: UIScrollView) {
            parent.offset = scrollView.contentOffset.x
        }
        
        func scrollViewDidEndDecelerating(_ scrollView: UIScrollView) {
            parent.page = getIndex(
                screenSize: parent.contentSize,
                scrollView: scrollView
            )
        }
        
        func scrollViewDidEndScrollingAnimation(_ scrollView: UIScrollView) {
            parent.page = getIndex(
                screenSize: parent.contentSize,
                scrollView: scrollView
            )
        }
        
        private func getIndex(
            screenSize: CGSize,
            scrollView: UIScrollView) -> Int {
                Int(scrollView.contentOffset.x / screenSize.width)
            }
    }
}

struct PagerView_Previews: PreviewProvider {
    static var previews: some View {
        GuideView()
    }
}
