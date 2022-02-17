//
//  KeyboardHandler.swift
//  Maskbook
//
//  Created by Hugo L on 2021/7/1.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import PanModal
import UIKit

final class KeyboardHandler {
    typealias PanModalViewController = PanModalPresentable & UIViewController
    
    // MARK: - Property
    private weak var textFieldView: UIView?
    private weak var panModalVC: PanModalViewController?
    
    var disposeBag = Set<AnyCancellable>()
    var expandBottom: CGFloat = 0
    var keyboardHeight: CGFloat? {
        didSet {
            // calculate height of expand view
            guard let keyboardHeight = keyboardHeight, keyboardHeight > 0 else {
                expandBottom = 0
                expandView?.snp.remakeConstraints {
                    $0.height.equalTo(expandBottom)
                }
                return
            }
            guard let view = self.panModalVC?.view else { return }
            guard let textFieldView = self.textFieldView else { return }
            
            view.layoutIfNeeded()
            let frame = textFieldView.convert(textFieldView.bounds, to: view)
            // distance from maxY of textFieldView.frame to bottom without height of expandBottom
            let offsetToBottom = view.frame.height - frame.maxY - expandBottom
            guard offsetToBottom < keyboardHeight else {
                return
            }
            
            expandBottom = keyboardHeight - offsetToBottom + paddingBottom
            expandView?.snp.remakeConstraints {
                $0.height.equalTo(expandBottom)
            }
        }
    }
    // Distance from the top of the keyboard to the bottom of the `TextField`
    let paddingBottom: CGFloat
    
    let expandView: UIView?
    
    class func attach(
        to panModalVC: PanModalViewController?,
        paddingBottom: CGFloat = 0,
        expandView: UIView? = nil) -> KeyboardHandler {
        return KeyboardHandler(panModalVC: panModalVC, paddingBottom: paddingBottom, expandView: expandView)
    }
    // MARK: - Lifecycle
    init(panModalVC: PanModalViewController?, paddingBottom: CGFloat = 0, expandView: UIView? = nil) {
        self.panModalVC = panModalVC
        self.paddingBottom = paddingBottom
        self.expandView = expandView
        
        observeKeyboard()
        observeTextFieldSelected()
    }
    
    // MARK: - Public methods
    func longFromHeight(with height: CGFloat) -> PanModalHeight {
        guard let view = self.panModalVC?.view else { return .contentHeight(height) }
        
        if let keyboardHeight = keyboardHeight, keyboardHeight > 0, let findView = textFieldView {
            let textField = findView
            let frame = textField.convert(textField.bounds, to: view)
            let marginBottom = height - frame.maxY
            
            if keyboardHeight > marginBottom {
                return .contentHeight(height + keyboardHeight - marginBottom + paddingBottom)
            }
        }
        return .contentHeight(height)
    }
    
    // MARK: - Keyboard handling
    private func observeKeyboard() {
        Publishers.CombineLatest(
            KeyboardResponderService.shared.state.eraseToAnyPublisher(),
            KeyboardResponderService.shared.endFrame.eraseToAnyPublisher()
        )
        .receive(on: DispatchQueue.main)
        .sink(receiveValue: { [weak self] state, endFrame in
            guard let self = self else { return }
            guard let view = self.panModalVC?.view else { return }
            
            guard state == .dock else {
                self.keyboardHeightChanged(keyboardHeight: 0.0)
                return
            }
            
            let contentFrame = view.convert(view.frame, to: nil)
            let padding = contentFrame.maxY - endFrame.minY
            guard padding > 0 else {
                self.keyboardHeightChanged(keyboardHeight: 0.0)
                return
            }
            
            self.keyboardHeightChanged(keyboardHeight: padding)
        })
        .store(in: &disposeBag)
    }
    
    private func keyboardHeightChanged(keyboardHeight: CGFloat) {
        if self.keyboardHeight == nil {
            self.keyboardHeight = keyboardHeight
            return
        }
        if self.keyboardHeight != keyboardHeight {
            self.keyboardHeight = keyboardHeight
            self.panModalVC?.panModalSetNeedsLayoutUpdate()
            self.panModalVC?.panModalTransition(to: .longForm)
        }
    }
    
    // MARK: - TextField
    private func observeTextFieldSelected() {
        NotificationCenter.default.publisher(for: UITextField.textDidBeginEditingNotification)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] notification in
                guard let self = self else { return }
                
                self.textFieldView = notification.object as? UIView
                
                self.panModalVC?.panModalSetNeedsLayoutUpdate()
                self.panModalVC?.panModalTransition(to: .longForm)
            }
            .store(in: &disposeBag)
    }
}
