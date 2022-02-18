import Combine
import UIKit
import web3swift
import WebKit

final class LabsBrowserController<T: DecentralisedApplicationResolver>: BaseViewController {
    private var wkAdaptor: DappScriptAdaptor<T>

    private(set) lazy var cancelableStorage: Set<AnyCancellable> = []

    private var loading = LoadingIndicatorController()

    private lazy var webView: WKWebView = {
        let websiteDataTypes: Set<String> = [WKWebsiteDataTypeDiskCache, WKWebsiteDataTypeMemoryCache]
        let date = Date(timeIntervalSince1970: 0)

        WKWebsiteDataStore.default().removeData(
            ofTypes: websiteDataTypes,
            modifiedSince: date,
            completionHandler: {}
        )

        let webView = WKWebView(
            frame: .zero,
            configuration: WKWebViewConfiguration()
        )
        webView.allowsBackForwardNavigationGestures = true
        webView.scrollView.isScrollEnabled = true
//        webView.navigationDelegate = self
        webView.configuration.preferences.setValue(true, forKey: "developerExtrasEnabled")
        return webView
    }()

    init(dappResolver: T) {
        self.wkAdaptor = DappScriptAdaptor(resolver: dappResolver)
        super.init(nibName: nil, bundle: Bundle(for: Self.self))
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        prepareScriptInjection()
        prepareloadingDApp()
    }

    private func prepareloadingDApp() {
        guard let url = wkAdaptor.resolver.entryPointURL else {
            return
        }
        let request = URLRequest(url: url)
        webView.load(request)
    }

    private func prepareScriptInjection() {
        wkAdaptor.bind(to: webView)
    }

    override func buildContent() {
        super.buildContent()
        self.view.addSubview(webView)
        webView.snp.makeConstraints { make in
            make.top.leading.trailing.equalToSuperview()
            make.bottom.equalToSuperview()
        }

        self.view.addSubview(loading.view)
        loading.view.snp.makeConstraints { $0.edges.equalToSuperview() }
    }

    override func buildEvent() {
        super.buildEvent()
        webView.publisher(for: \.isLoading)
            .dropFirst()
            .asDriver()
            .sink { [weak self] isloading in
                isloading
                ? self?.loading.startAnimation()
                : self?.loading.stopAnimation()
            }
            .store(in: &cancelableStorage)
    }
}
