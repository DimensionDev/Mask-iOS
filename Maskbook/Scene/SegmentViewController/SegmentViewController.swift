//
//  SegmentViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class SegmentViewController: UIViewController {
    static var segmentHeight: CGFloat = 56
    
    var disposeBag = Set<AnyCancellable>()
    
    var items: [String]
    var viewControllers: [UIViewController]
    
    var style: MaskSegmentControlStyle
    
    lazy var segments: MaskSegmentControl = {
        switch style {
        case .group:
            let segments = GroupMaskSegmentControl()
            return segments
            
        case .plain:
            let segments = PlainMaskSegmentComtrol()
            return segments
        }
    }()
    
    let scrollView: UIScrollView = {
        let scrollView = UIScrollView()
        scrollView.showsVerticalScrollIndicator = false
        scrollView.showsHorizontalScrollIndicator = false
        scrollView.alwaysBounceHorizontal = true
        scrollView.clipsToBounds = false
        scrollView.isPagingEnabled = true
        return scrollView
    }()
    
    var width: CGFloat {
        UIScreen.main.bounds.width
    }
    
    required init(items: [String], viewControllers: [UIViewController], style: MaskSegmentControlStyle = .plain) {
        self.items = items
        self.viewControllers = viewControllers
        self.style = style
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        viewControllers.forEach { vc in
            vc.viewWillAppear(animated)
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupSegmentControl()
        addScrollView()
        setupViewControllers()
        view.bringSubviewToFront(segments)
    }
    
    func setupSegmentControl() {
        segments.setItems(items: items)
        view.addSubview(segments)
        segments.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            segments.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor),
            segments.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            segments.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            segments.heightAnchor.constraint(equalToConstant: Self.segmentHeight)
        ])
        DispatchQueue.main.async {
            self.segments.selectedIndex(at: 0, animated: false)
        }
    }
    
    func addScrollView() {
        scrollView.translatesAutoresizingMaskIntoConstraints = false
        scrollView.delegate = self
        view.addSubview(scrollView)
        NSLayoutConstraint.activate([
            scrollView.frameLayoutGuide.topAnchor.constraint(equalTo: segments.bottomAnchor),
            scrollView.frameLayoutGuide.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            scrollView.frameLayoutGuide.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            scrollView.frameLayoutGuide.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            scrollView.contentLayoutGuide.heightAnchor.constraint(equalTo: scrollView.frameLayoutGuide.heightAnchor),
            scrollView.contentLayoutGuide.widthAnchor.constraint(equalToConstant: CGFloat(viewControllers.count) * width)
        ])
    }
    
    func setupViewControllers() {
        segments.selectedIndex
            .sink { [weak self] index in
                guard let self = self else { return }
                self.loadViewOfIndex(index: index)
                if self.scrollView.frame.width > 0 {
                    let currentIndex = floor(self.scrollView.contentOffset.x / self.scrollView.frame.width)
                    let animated = abs(Int(currentIndex) - index) < 2
                    self.scrollView.setContentOffset(CGPoint(x: CGFloat(index) * self.width, y: 0), animated: animated)
                }
            }
            .store(in: &disposeBag)
    }
    
    func loadViewOfIndex(index: Int) {
        let vc = viewControllers[index]
        let subView = vc.view!
        if subView.superview == nil {
            addChild(vc)
            subView.translatesAutoresizingMaskIntoConstraints = false
            scrollView.addSubview(subView)
            vc.didMove(toParent: self)

            NSLayoutConstraint.activate([
                subView.topAnchor.constraint(equalTo: scrollView.contentLayoutGuide.topAnchor),
                subView.leadingAnchor.constraint(equalTo: scrollView.contentLayoutGuide.leadingAnchor, constant: CGFloat(index) * width),
                subView.widthAnchor.constraint(equalToConstant: width),
                subView.heightAnchor.constraint(equalTo: scrollView.contentLayoutGuide.heightAnchor)
            ])
        }
    }
}

extension SegmentViewController: UIScrollViewDelegate {
    func scrollViewDidScroll(_ scrollView: UIScrollView) {
        parent?.view.endEditing(true)
    }
    
    func scrollViewDidEndDecelerating(_ scrollView: UIScrollView) {
        var index = floor(scrollView.contentOffset.x / scrollView.frame.width)
        // FIXED: crash when index is less than zero or index is greater than or equal to `items.count`.
        index = min(CGFloat(items.count - 1), index)
        index = max(0, index)
        
        loadViewOfIndex(index: Int(index))
        segments.selectedIndex(at: Int(index), animated: false)
    }
}
