//
//  Toast.swift
//  Toast-Swift
//
//  Copyright (c) 2015-2019 Charles Scalesse.
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the
//  "Software"), to deal in the Software without restriction, including
//  without limitation the rights to use, copy, modify, merge, publish,
//  distribute, sublicense, and/or sell copies of the Software, and to
//  permit persons to whom the Software is furnished to do so, subject to
//  the following conditions:
//
//  The above copyright notice and this permission notice shall be included
//  in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
//  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
//  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
//  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
//  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// swiftlint:disable empty_count function_default_parameter_at_end file_length
import ObjectiveC
import UIKit
import UStack

/**
 Toast is a Swift extension that adds toast notifications to the `UIView` object class.
 It is intended to be simple, lightweight, and easy to use. Most toast notifications
 can be triggered with a single line of code.
 
 The `makeToast` methods create a new view and then display it as toast.
 
 The `showToast` methods display any view as toast.
 
 */
public extension UIView {
    /**
     Keys used for associated objects.
     */
    private enum ToastKeys {
        static var timer = "com.toast-swift.timer"
        static var duration = "com.toast-swift.duration"
        static var position = "com.toast-swift.position"
        static var completion = "com.toast-swift.completion"
        static var activeToasts = "com.toast-swift.activeToasts"
        static var activityView = "com.toast-swift.activityView"
        static var queue = "com.toast-swift.queue"
    }
    
    /**
     Swift closures can't be directly associated with objects via the
     Objective-C runtime, so the (ugly) solution is to wrap them in a
     class that can be used with associated objects.
     */
    private class ToastCompletionWrapper {
        let completion: ((Bool) -> Void)?
        
        init(_ completion: ((Bool) -> Void)?) {
            self.completion = completion
        }
    }
    
    private enum ToastError: Error {
        case missingParameters
    }
    
    private var activeToasts: NSMutableArray {
        if let activeToasts = objc_getAssociatedObject(self, &ToastKeys.activeToasts) as? NSMutableArray {
            return activeToasts
        } else {
            let activeToasts = NSMutableArray()
            objc_setAssociatedObject(self, &ToastKeys.activeToasts, activeToasts, .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
            return activeToasts
        }
    }
    
    private var queue: NSMutableArray {
        if let queue = objc_getAssociatedObject(self, &ToastKeys.queue) as? NSMutableArray {
            return queue
        } else {
            let queue = NSMutableArray()
            objc_setAssociatedObject(self, &ToastKeys.queue, queue, .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
            return queue
        }
    }
    
    // MARK: - Make Toast Methods
    
    /**
     Creates and presents a new toast view.
     
     @param message The message to be displayed
     @param duration The toast duration
     @param position The toast's position
     @param image The image
     @param style The style. The shared style will be used when nil
     @param completion The completion closure, executed after the toast view disappears.
            didTap will be `true` if the toast view was dismissed from a tap.
     */
    func makeToast(message: String? = nil,
                   duration: TimeInterval = ToastManager.shared.duration,
                   position: ToastPosition = ToastManager.shared.position,
                   image: UIImage? = nil,
                   style: ToastStyle = ToastManager.shared.style,
                   completion: ((_ didTap: Bool) -> Void)? = nil)
    {
        do {
            let toast = try toastViewForMessage(message: message,
                                                image: image,
                                                style: style)
            showToast(toast,
                      duration: duration,
                      position: position,
                      completion: completion)
        } catch ToastError.missingParameters {
            print("Error: message, title, and image are all nil")
        } catch {}
    }
    
    // MARK: - Show Toast Methods
    
    /**
     Displays any view as toast at a provided center point and duration. The completion closure
     executes when the toast view completes. `didTap` will be `true` if the toast view was
     dismissed from a tap.
     
     @param toast The view to be displayed as toast
     @param duration The notification duration
     @param position The toast's position
     @param completion The completion block, executed after the toast view disappears.
     didTap will be `true` if the toast view was dismissed from a tap.
     */
    func showToast(_ toast: UIView,
                   duration: TimeInterval = ToastManager.shared.duration,
                   position: ToastPosition,
                   completion: ((_ didTap: Bool) -> Void)? = nil)
    {
        objc_setAssociatedObject(toast, &ToastKeys.completion, ToastCompletionWrapper(completion), .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
        
        if ToastManager.shared.isQueueEnabled, activeToasts.count > 0 {
            objc_setAssociatedObject(toast, &ToastKeys.duration, NSNumber(value: duration), .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
            objc_setAssociatedObject(toast, &ToastKeys.position, NSNumber(value: position.rawValue), .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
            
            queue.add(toast)
        } else {
            showToast(toast, duration: duration, position: position)
        }
    }
    
    // MARK: - Hide Toast Methods
    
    /**
      Hides the active toast. If there are multiple toasts active in a view, this method
      hides the oldest toast (the first of the toasts to have been presented).
     
      @see `hideAllToasts()` to remove all active toasts from a view.
     
      @warning This method has no effect on activity toasts. Use `hideToastActivity` to
      hide activity toasts.
     
     */
    func hideToast() {
        guard let activeToast = activeToasts.firstObject as? UIView else { return }
        hideToast(activeToast)
    }
    
    /**
     Hides an active toast.
     
     @param toast The active toast view to dismiss. Any toast that is currently being displayed
     on the screen is considered active.
     
     @warning this does not clear a toast view that is currently waiting in the queue.
     */
    func hideToast(_ toast: UIView) {
        guard activeToasts.contains(toast) else { return }
        hideToast(toast, fromTap: false)
    }
    
    /**
      Hides all toast views.
     
      @param includeActivity If `true`, toast activity will also be hidden. Default is `false`.
      @param clearQueue If `true`, removes all toast views from the queue. Default is `true`.
     */
    func hideAllToasts(clearQueue: Bool = true) {
        if clearQueue {
            clearToastQueue()
        }
        
        activeToasts.compactMap { $0 as? UIView }
            .forEach { hideToast($0) }
    }
    
    /**
     Removes all toast views from the queue. This has no effect on toast views that are
     active. Use `hideAllToasts(clearQueue:)` to hide the active toasts views and clear
     the queue.
     */
    func clearToastQueue() {
        queue.removeAllObjects()
    }
    
    // MARK: - Private Show/Hide Methods
    
    private func showToast(_ toast: UIView, duration: TimeInterval, position: ToastPosition) {
        toast.alpha = 0.0
        
        if ToastManager.shared.isTapToDismissEnabled {
            let recognizer = UITapGestureRecognizer(target: self, action: #selector(UIView.handleToastTapped(_:)))
            toast.addGestureRecognizer(recognizer)
            toast.isUserInteractionEnabled = true
            toast.isExclusiveTouch = true
        }
        
        activeToasts.add(toast)
        addSubview(toast)
        position.addToastConstraint(forToast: toast, inSuperview: self)
        UIView.animate(withDuration: ToastManager.shared.style.fadeDuration,
                       delay: 0.0,
                       options: [.curveEaseOut, .allowUserInteraction],
                       animations: {
                           toast.alpha = 1.0
                       }) { _ in
            let timer = Timer(timeInterval: duration,
                              target: self,
                              selector: #selector(UIView.toastTimerDidFinish(_:)),
                              userInfo: toast,
                              repeats: false)
            RunLoop.main.add(timer, forMode: .common)
            objc_setAssociatedObject(toast, &ToastKeys.timer, timer, .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
        }
    }
    
    private func hideToast(_ toast: UIView, fromTap: Bool) {
        if let timer = objc_getAssociatedObject(toast, &ToastKeys.timer) as? Timer {
            timer.invalidate()
        }
        
        UIView.animate(withDuration: ToastManager.shared.style.fadeDuration,
                       delay: 0.0,
                       options: [.curveEaseIn, .beginFromCurrentState],
                       animations: {
                           toast.alpha = 0.0
                       }) { _ in
            toast.removeFromSuperview()
            self.activeToasts.remove(toast)
            
            if let wrapper = objc_getAssociatedObject(toast, &ToastKeys.completion) as? ToastCompletionWrapper, let completion = wrapper.completion {
                completion(fromTap)
            }
            
            if let nextToast = self.queue.firstObject as? UIView,
               let duration = objc_getAssociatedObject(nextToast, &ToastKeys.duration) as? NSNumber,
               let position = objc_getAssociatedObject(nextToast, &ToastKeys.position) as? NSValue,
               let value = position.value(of: Int.self),
               let position = ToastPosition(rawValue: value)
            {
                self.queue.removeObject(at: 0)
                self.showToast(nextToast,
                               duration: duration.doubleValue,
                               position: position)
            }
        }
    }
    
    // MARK: - Events
    
    @objc
    private func handleToastTapped(_ recognizer: UITapGestureRecognizer) {
        guard let toast = recognizer.view else { return }
        hideToast(toast, fromTap: true)
    }
    
    @objc
    private func toastTimerDidFinish(_ timer: Timer) {
        guard let toast = timer.userInfo as? UIView else { return }
        hideToast(toast)
    }
    
    // MARK: - Toast Construction
    
    /**
      Creates a new toast view with any combination of message, title, and image.
      The look and feel is configured via the style. Unlike the `makeToast` methods,
      this method does not present the toast view automatically. One of the `showToast`
      methods must be used to present the resulting view.
    
      @warning if message, title, and image are all nil, this method will throw
      `ToastError.missingParameters`
    
      @param message The message to be displayed
      @param title The title
      @param image The image
      @param style The style. The shared style will be used when nil
      @throws `ToastError.missingParameters` when message, title, and image are all nil
      @return The newly created toast view
     */
    
    func messageLabel(message: String, style: ToastStyle) -> UILabel {
        let label = UILabel()
        label.text = message
        label.numberOfLines = style.messageNumberOfLines
        label.font = style.messageFont
        label.textAlignment = style.messageAlignment
        label.textColor = style.messageColor
        label.backgroundColor = UIColor.clear
        return label
    }
    
    func imageView(image: UIImage, style: ToastStyle) -> UIImageView {
        let imageView = UIImageView(image: image)
        imageView.contentMode = .scaleAspectFit
        return imageView
    }

    func toastViewForMessage(message: String?,
                             image: UIImage?,
                             style: ToastStyle) throws -> UIView
    {
        // sanity
        guard message != nil || image != nil else {
            throw ToastError.missingParameters
        }
        
        let wrapperView = VStackView(spacing: 6, distribution: .fill, alignment: .fill) {
            if let image = image {
                imageView(image: image, style: style)
            }
            
            if let message = message {
                messageLabel(message: message, style: style)
                    .cv.apply {
                        $0.setContentCompressionResistancePriority(.required, for: .horizontal)
                    }
            }
        }
        wrapperView.translatesAutoresizingMaskIntoConstraints = false
        wrapperView.backgroundColor = style.backgroundColor
        wrapperView.layer.cornerRadius = style.cornerRadius
        wrapperView.isLayoutMarginsRelativeArrangement = true
        wrapperView.layoutMargins = UIEdgeInsets(top: 8,
                                                 left: 20,
                                                 bottom: 8,
                                                 right: 20)
        
        if style.displayShadow {
            wrapperView.layer.shadowColor = UIColor.black.cgColor
            wrapperView.layer.shadowOpacity = style.shadowOpacity
            wrapperView.layer.shadowRadius = style.shadowRadius
            wrapperView.layer.shadowOffset = style.shadowOffset
        }
        return wrapperView
    }
}

// MARK: - Toast Style

/**
 `ToastStyle` instances define the look and feel for toast views created via the
 `makeToast` methods as well for toast views created directly with
 `toastViewForMessage(message:title:image:style:)`.

 @warning `ToastStyle` offers relatively simple styling options for the default
 toast view. If you require a toast view with more complex UI, it probably makes more
 sense to create your own custom UIView subclass and present it with the `showToast`
 methods.
 */
public struct ToastStyle {
    public init() {}
    
    /**
      The background color. Default is `.black` at 80% opacity.
     */
    public var backgroundColor = UIColor(named: Asset.Colors.Background.toast.name)
    
    /**
      The message color.
     */
    public var messageColor = UIColor(named: Asset.Colors.Background.normal.name)
    /**
      The spacing from the horizontal edge of the toast view to the content. When an image
      is present, this is also used as the padding between the image and the text.
      Default is 10.0.
     
     */
    public var horizontalPadding: CGFloat = 20.0
    
    /**
      The spacing from the vertical edge of the toast view to the content. When a title
      is present, this is also used as the padding between the title and the message.
      Default is 10.0. On iOS11+, this value is added added to the `safeAreaInset.top`
      and `safeAreaInsets.bottom`.
     */
    public var verticalPadding: CGFloat = 20
    
    /**
      The corner radius.
     */
    public var cornerRadius: CGFloat = 8.0
    
    /**
      The message font.
     */
    public var messageFont: UIFont = FontStyles.BH6
    /**
      The message text alignment.
     */
    public var messageAlignment: NSTextAlignment = .center
    
    /**
      The maximum number of lines for the message.
     */
    public var messageNumberOfLines = 1
    
    /**
      Enable or disable a shadow on the toast view. Default is `false`.
     */
    public var displayShadow = false
    
    /**
     The shadow color. Default is `.black`.
     */
    public var shadowColor: UIColor = .black
    
    /**
      A value from 0.0 to 1.0, representing the opacity of the shadow.
      Default is 0.8 (80% opacity).
     */
    public var shadowOpacity: Float = 0.8 {
        didSet {
            shadowOpacity = max(min(shadowOpacity, 1.0), 0.0)
        }
    }

    /**
      The shadow radius. Default is 6.0.
     */
    public var shadowRadius: CGFloat = 6.0
    
    /**
      The shadow offset. The default is 4 x 4.
     */
    public var shadowOffset = CGSize(width: 4.0, height: 4.0)
    
    /**
     The fade in/out animation duration. Default is 0.2.
     */
    public var fadeDuration: TimeInterval = 0.2

}

// MARK: - Toast Manager

/**
 `ToastManager` provides general configuration options for all toast
 notifications. Backed by a singleton instance.
 */
public class ToastManager {
    /**
     The `ToastManager` singleton instance.
     
     */
    public static let shared = ToastManager()
    
    /**
     The shared style. Used whenever toastViewForMessage(message:title:image:style:) is called
     with with a nil style.
     
     */
    public var style = ToastStyle()
    
    /**
     Enables or disables tap to dismiss on toast views. Default is `true`.
     
     */
    public var isTapToDismissEnabled = true
    
    /**
     Enables or disables queueing behavior for toast views. When `true`,
     toast views will appear one after the other. When `false`, multiple toast
     views will appear at the same time (potentially overlapping depending
     on their positions). This has no effect on the toast activity view,
     which operates independently of normal toast views. Default is `false`.
     
     */
    public var isQueueEnabled = false
    
    /**
     The default duration. Used for the `makeToast` and
     `showToast` methods that don't require an explicit duration.
     Default is 3.0.
     
     */
    public var duration: TimeInterval = 3.0
    
    /**
     Sets the default position. Used for the `makeToast` and
     `showToast` methods that don't require an explicit position.
     Default is `ToastPosition.Bottom`.
     
     */
    public var position: ToastPosition = .center
}

// MARK: - ToastPosition

public enum ToastPosition: Int {
    case top = 0
    case center
    case bottom
    
    fileprivate func addToastConstraint(forToast toast: UIView, inSuperview superview: UIView) {
        let topPadding: CGFloat = ToastManager.shared.style.verticalPadding + superview.csSafeAreaInsets.top
        let bottomPadding: CGFloat = ToastManager.shared.style.verticalPadding + superview.csSafeAreaInsets.bottom
        
        switch self {
        case .top:
            NSLayoutConstraint.activate([
                toast.topAnchor.constraint(equalTo: superview.topAnchor, constant: topPadding)
            ])
            
        case .center:
            NSLayoutConstraint.activate([
                toast.centerYAnchor.constraint(equalTo: superview.centerYAnchor)
            ])
            
        case .bottom:
            NSLayoutConstraint.activate([
                toast.bottomAnchor.constraint(equalTo: superview.bottomAnchor, constant: -bottomPadding)
            ])
        }
        NSLayoutConstraint.activate([
            toast.centerXAnchor.constraint(equalTo: superview.centerXAnchor)
        ])
    }
}

// MARK: - Private UIView Extensions

private extension UIView {
    var csSafeAreaInsets: UIEdgeInsets {
        if #available(iOS 11.0, *) {
            return self.safeAreaInsets
        } else {
            return .zero
        }
    }
}
