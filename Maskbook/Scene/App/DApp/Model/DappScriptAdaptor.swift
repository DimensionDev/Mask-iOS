import Combine
import WebKit

// swiftlint:disable implicitly_unwrapped_optional
final class DappScriptAdaptor<T: DecentralisedApplicationResolver>: NSObject, WKNavigationDelegate, WKScriptMessageHandler {
    private(set) weak var webView: WKWebView?
    private var observingHandler: NSKeyValueObservation?

    private(set) var cancelableStorage: Set<AnyCancellable> = []

    // use exactly the same name match Bridge.name in web3swift
    // to make sure co-response to js script
    private var scriptMessageHandlerName: String {
        resolver.scriptMessageHandlerName
    }

    private(set) var loadingSignal = CurrentValueSubject<LoadingState, Never>(.loading)

    private(set) var resolver: T

    func cleanup() {
        webView?.configuration.userContentController.removeScriptMessageHandler(forName: scriptMessageHandlerName)
        observingHandler?.invalidate()
    }

    init(resolver: T) {
        self.resolver = resolver
        super.init()
    }

    func bind(to webView: WKWebView) {
        cleanup()
        self.webView = webView
        webView.configuration.userContentController.add(self, name: scriptMessageHandlerName)

        observingHandler = webView.configuration.observe(
            \.userContentController,
            options: [.new, .old]
        ) { [weak self] _, updateValue in
            guard let self = self else { return }
            updateValue.oldValue?.removeScriptMessageHandler(forName: self.scriptMessageHandlerName)
            updateValue.newValue?.add(self, name: self.scriptMessageHandlerName)
        }
    }

    // MARK: WKNavigationDelegate

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        loadingSignal.accept(.loaded)
    }

    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {}

    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {}

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {}

    // MARK: WKScriptMessageHandler
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let webView = self.webView else {
            return
        }
        resolver.resolve(message, from: webView)
    }
}

extension DappScriptAdaptor {
    enum LoadingState {
        case loading
        case loaded
        case reload
    }
}
// swiftlint:enable implicitly_unwrapped_optional
