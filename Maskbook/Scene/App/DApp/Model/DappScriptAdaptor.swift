import Combine
import WebKit

// swiftlint:disable implicitly_unwrapped_optional
final class DappScriptAdaptor<T: DecentralisedApplicationResolver>: NSObject, WKNavigationDelegate {
    private var cancelableStorage: Set<AnyCancellable> = []

    private(set) var loadingSignal = CurrentValueSubject<LoadingState, Never>(.loading)

    private(set) var resolver: T

    @WKScriptMessageHandled(handlerName: T.scriptMessageHandlerName)
    private(set) var webView: WKWebView?

    init(resolver: T) {
        self.resolver = resolver
        super.init()
    }

    private var bundle: Bundle { Bundle(for: Self.self) }

    private var ethereumScript: WKUserScript {
        let rpcUrl = Web3ProviderFactory.provider?.provider.url.absoluteString ?? ""
        let source =
                """
                (function() {
                    var config = {
                        chainId: \(maskUserDefaults.network.networkId),
                        rpcUrl: "\(rpcUrl)",
                        isDebug: true
                    };
                    window.ethereum = new web3Channel.Provider(config);
                    window.web3 = new web3Channel.Web3(window.ethereum);
                })();
                """
        return WKUserScript(source: source, injectionTime: .atDocumentStart, forMainFrameOnly: false)
    }

    private var jsContent: String? {
        if let filepath = bundle.path(forResource: "mask-min", ofType: "js") {
            do {
                let js = try String(contentsOfFile: filepath)
                return js
            } catch {
                NSLog("Failed to load web.js")
                return nil
            }
        } else {
            NSLog("web3.js not found in bundle")
            return nil
        }
    }

    func bind(to webView: WKWebView) {
        if let js = jsContent {
            let web3EnventScript = WKUserScript(source: js, injectionTime: .atDocumentStart, forMainFrameOnly: false)
            webView.configuration.userContentController.addUserScript(web3EnventScript)
            webView.configuration.userContentController.addUserScript(ethereumScript)
        }
        // for propertyWrapper don't support lazy initialization
        // we need this setter to trigger WKScriptMessageHandled work as expected
        self.webView = webView

        cancelableStorage.removeAll()
        $webView
            .asDriver()
            .sink { [weak self] message in
                guard let self = self,
                      let webView = self.webView else {
                    return
                }
                self.resolver.resolve(message, from: webView)
            }
            .store(in: &cancelableStorage)
    }

    // MARK: WKNavigationDelegate

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        loadingSignal.accept(.loaded)
    }

    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {}

    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {}

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {}
}

extension DappScriptAdaptor {
    enum LoadingState {
        case loading
        case loaded
        case reload
    }
}
// swiftlint:enable implicitly_unwrapped_optional
