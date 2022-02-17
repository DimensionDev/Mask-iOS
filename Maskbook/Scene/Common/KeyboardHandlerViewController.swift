//
//  KeyboardHandlerViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/12/3.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import IQKeyboardManagerSwift
import PanModal
import UIKit

class KeyboardHandlerViewController: UIViewController {
    var disposeBag = Set<AnyCancellable>()
    
    var keyboardIQEnable: Bool
    let contentViewController: KeyboardHandlerContent
    let paddingTop: CGFloat
    var keyboardHeight: CGFloat?
    
    var contentView: UIView {
        contentViewController.view
    }
    
    override var navigationItem: UINavigationItem {
        contentViewController.navigationItem
    }
    
    lazy var scrollView: UIScrollView = {
        let view = ControlContainableScrollView()
        view.contentInsetAdjustmentBehavior = .never
        view.addSubview(contentView)
        contentView.snp.makeConstraints { make in
            make.edges.equalToSuperview()
            make.width.equalTo(view)
        }
        return view
    }()
    
    init(content: KeyboardHandlerContent, paddingTop: CGFloat = 48) {
        contentViewController = content
        keyboardIQEnable = false
        self.paddingTop = paddingTop
        super.init(nibName: nil, bundle: nil)
        
        addChild(content)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Asset.Colors.Background.normal.color
        
        view.addSubview(scrollView)
        scrollView.snp.makeConstraints { make in
            make.leading.bottom.trailing.equalToSuperview()
            make.top.equalTo(self.paddingTop)
        }
        
        Publishers.CombineLatest(
            KeyboardResponderService.shared.state.eraseToAnyPublisher(),
            KeyboardResponderService.shared.endFrame.eraseToAnyPublisher()
        )
            .removeDuplicates(by: { arg1, arg2 in
                let (lstate, lframe) = arg1
                let (rstate, rframe) = arg2
                let result = lstate == rstate && lframe.equalTo(rframe)
                return result
            })
            .debounce(for: 0.1, scheduler: DispatchQueue.main, options: nil)
            .sink(receiveValue: { [weak self] state, endFrame in
                guard let self = self else { return }
                guard state == .dock else {
                    self.keyboardHeightChanged(keyboardHeight: 0)
                    return
                }
                
                let screenHeight = UIScreen.main.bounds.height
                let padding = screenHeight - endFrame.minY
                self.keyboardHeightChanged(keyboardHeight: padding)
                
                self.contentViewController.keyboardHandlerWillShowKeyboard(
                    self,
                    scrollView: self.scrollView,
                    keyboardFrame: endFrame,
                    firstResponder: UIResponder.actualFirst as? UIView
                )
            })
            .store(in: &disposeBag)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        keyboardIQEnable = IQKeyboardManager.shared.enable
        IQKeyboardManager.shared.enable = false
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        IQKeyboardManager.shared.enable = keyboardIQEnable
    }
    
    private func keyboardHeightChanged(keyboardHeight: CGFloat) {
        guard !isBeingDismissed else { return }
        guard keyboardHeight != self.keyboardHeight else { return }
        self.keyboardHeight = keyboardHeight
        let contentInset = UIEdgeInsets(
            top: 0,
            left: 0,
            bottom: keyboardHeight,
            right: 0)
        scrollView.contentInset = contentInset
        scrollView.scrollIndicatorInsets = contentInset
        panModalSetNeedsLayoutUpdate()
        panModalTransition(to: .longForm)
        print("[keyboard] adjust contentInset: \(keyboardHeight)")
    }
    
    override func viewWillLayoutSubviews() {
        super.viewWillLayoutSubviews()
        
        panModalSetNeedsLayoutUpdate()
        panModalTransition(to: .longForm)
    }
}

extension KeyboardHandlerViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        view.layoutIfNeeded()
        
        var height = scrollView.contentSize.height + paddingTop
        if let keyboardHeight = keyboardHeight, keyboardHeight > 0 {
            // need to subtract `safeAreaInsets.bottom` when keyboard has shown,
            // otherwise the bottom of the view is too far from the keyboard.
            height += keyboardHeight - view.safeAreaInsets.bottom
        }
        print("[keyboard] content view's frame: \(contentView.frame.height) contentSize: \(scrollView.contentSize.height)")
        print("[keyboard] longFormHeight: \(height) adjustInset: \(scrollView.adjustedContentInset.bottom)")
        return .contentHeight(height)
    }
}

protocol KeyboardHandlerContent where Self: UIViewController {
    func keyboardHandlerWillShowKeyboard(
        _ sender: KeyboardHandlerViewController,
        scrollView: UIScrollView,
        keyboardFrame: CGRect,
        firstResponder: UIView?)
}

extension KeyboardHandlerContent {
    func keyboardHandlerWillShowKeyboard(
        _ sender: KeyboardHandlerViewController,
        scrollView: UIScrollView,
        keyboardFrame: CGRect,
        firstResponder: UIView?) { }
}

extension UIScrollView {
    func scrollToBottom() {
        let contentHeight = contentSize.height + adjustedContentInset.bottom
        let frameHeight = frame.height
        let toOffsetY = contentHeight - frameHeight
        setContentOffset(CGPoint(x: 0, y: max(0, toOffsetY)), animated: true)
        print("[keyboard] scrollView adjustedContentInset: \(adjustedContentInset.bottom)")
    }
}

// https://stackoverflow.com/questions/1823317/get-the-current-first-responder-without-using-a-private-api
// A convience way to find firstResponder
extension UIResponder {
    private static weak var first: UIResponder?
    
    @objc
    private func firstResponderWhereYouAre(sender: AnyObject) {
        UIResponder.first = self
    }
    
    static var actualFirst: UIResponder? {
        UIApplication.shared.sendAction(#selector(firstResponderWhereYouAre(sender:)), to: nil, from: nil, for: nil)
        return UIResponder.first
    }
}
