import Combine
import UIKit
import web3swift
import WebKit

final class LabsBrowserController<T: DecentralisedApplicationResolver>: BrowserViewController {
    private var wkAdaptor: DappScriptAdaptor<T>
    private(set) lazy var cancelableStorage: Set<AnyCancellable> = []

    private var loading = LoadingIndicatorController()

    init(dappResolver: T) {
        self.wkAdaptor = DappScriptAdaptor(resolver: dappResolver)
        super.init(nibName: nil, bundle: Bundle(for: Self.self))
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    deinit {
        // plz do remember to call this function
        // otherwise there will be memory leak
        wkAdaptor.cleanup()
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        buildUIContent()
        buildEvent()
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
        wkAdaptor.bind(to: self.webView)
    }

    private func buildUIContent() {
        self.view.addSubview(self.webView)
        self.webView.snp.makeConstraints { make in
            make.top.leading.trailing.equalToSuperview()
            make.bottom.equalToSuperview()
        }

        self.view.addSubview(loading.view)
        loading.view.snp.makeConstraints { $0.edges.equalToSuperview() }
    }

    private func buildEvent() {
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
