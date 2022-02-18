import Combine
import Foundation
import WebKit

/// usage:
///
///         class ViewController : UIViewController {
///             private lazy var webView: WKWebView = {
///                 let websiteDataTypes: Set<String> = [WKWebsiteDataTypeDiskCache, WKWebsiteDataTypeMemoryCache]
///                 let date = Date(timeIntervalSince1970: 0)
///
///                 WKWebsiteDataStore.default().removeData(
///                     ofTypes: websiteDataTypes,
///                     modifiedSince: date,
///                     completionHandler: {}
///                 )
///
///                 let webView = WKWebView(
///                     frame: .zero,
///                     configuration: WKWebViewConfiguration()
///                 )
///                 webView.allowsBackForwardNavigationGestures = true
///                 webView.scrollView.isScrollEnabled = true
///                 webView.navigationDelegate = self
///                 webView.configuration.preferences.setValue(true, forKey: "developerExtrasEnabled")
///                 return webView
///             }()
///
///             @WKScriptMessageHandled(handlerName: "some domain string")
///             private var localWebView: WKWebView?
///
///             override func viewDidLoad() {
///                 super.viewDidLoad()
///                 // not this WKScriptMessageHandled will be initialized before self get initialized
///                 // for propertyWrapper don't support lazy initialization/
///                 // we need this setter to trigger WKScriptMessageHandled work as expected
///                 localWebView = self.webView
///
///                 $localWebView
///                     .asDriver()
///                     .sink { [weak self] message in
///                         guard let self = self else { return }
///                         self.wkAdaptor.resolver.resolve(message, from: self.webView)
///                     }
///             }
///         }
///
@propertyWrapper
final class WKScriptMessageHandled {
    private let messageHandlerNames: Set<String>

    private weak var webView: WKWebView? {
        didSet {
            removeMessageHandlers(for: oldValue?.configuration.userContentController)
            observingHandler?.invalidate()
            startObserving()
        }
    }

    private var observingHandler: NSKeyValueObservation?
    private let messageSubject = CurrentValueSubject<WKScriptMessage?, Never>(nil)

    var wrappedValue: WKWebView? {
        get { webView }
        set { webView = newValue }
    }

    var projectedValue: AnyPublisher<WKScriptMessage, Never> {
        messageSubject
            .compactMap { $0 }
            .eraseToAnyPublisher()
    }

    init(handlerNames: Set<String>, wrappedValue defaultValue: WKWebView? = nil) {
        webView = defaultValue
        messageHandlerNames = handlerNames
        startObserving()
    }

    deinit { cleanup() }

    private func cleanup() {
        removeMessageHandlers(for: self.webView?.configuration.userContentController)
        observingHandler?.invalidate()
    }

    private func removeMessageHandlers(for userContentController: WKUserContentController?) {
        guard let controller = userContentController else {
            return
        }
        for name in messageHandlerNames {
            controller.removeScriptMessageHandler(forName: name)
        }
    }

    private func startObserving() {
        bindProxy(for: webView?.configuration.userContentController)
        observingHandler = webView?.configuration.observe(\.userContentController, options: [.new, .old]) { [weak self] _, updateValue in
            self?.removeMessageHandlers(for: updateValue.oldValue)
            self?.bindProxy(for: updateValue.newValue)
        }
    }

    private func bindProxy(for userContentController: WKUserContentController?) {
        guard let controller = userContentController else {
            return
        }

        let proxy = WeakProxy()

        proxy
            .messageSubject
            .bind(to: \.messageSubject, on: self)
            .store(in: &proxy.cancelableStorage)

        for name in messageHandlerNames {
            controller.add(proxy, name: name)
        }
    }
}

extension WKScriptMessageHandled {
    convenience init(handlerName: String, wrappedValue defaultValue: WKWebView? = nil) {
        self.init(handlerNames: [handlerName], wrappedValue: defaultValue)
    }
}

extension WKScriptMessageHandled {
    private final class WeakProxy: NSObject, WKScriptMessageHandler {
        let messageSubject = CurrentValueSubject<WKScriptMessage?, Never>(nil)
        var cancelableStorage: Set<AnyCancellable> = []

        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            messageSubject.send(message)
        }
    }
}
