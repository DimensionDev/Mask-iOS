import Combine
import SnapKit
import UIKit
import WebKit

final class TransakIntegratingController: UIViewController {
    private lazy var webView: WKWebView = {
        let webConfiguration = WKWebViewConfiguration()
        let webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.uiDelegate = self
        webView.navigationDelegate = self
        return webView
    }()

    @InjectedProvider(\.userDefaultSettings)
    private var userSetting

    private lazy var loadingController = LoadingIndicatorController()

    private(set) var cancelableStorage: Set<AnyCancellable> = []

    override func viewDidLoad() {
        super.viewDidLoad()

        view.addSubview(webView)
        webView.snp.makeConstraints { $0.edges.equalToSuperview() }

        prepareCloseButton()

        addChild(loadingController)
        view.addSubview(loadingController.view)
        loadingController.view.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }

        let environment: TransakConfig.Environment = {
            #if DEBUG
            return .staging
            #else
            return .production
            #endif
        }()

        let transakConfig = TransakConfig(
            environment: environment,
            walletAddress: userSetting.defaultAccountAddress
        )
        guard let transakURL = transakConfig.asTransakURL() else {
            return
        }
        let request = URLRequest(url: transakURL)
        webView.load(request)

        webView.publisher(for: \.isLoading)
            .asDriver()
            .sink { [weak self] loading in
                if !loading {
                    self?.loadingController.stopAnimation()
                }
            }
            .store(in: &cancelableStorage)
    }

    private func prepareCloseButton() {
        let button = NavigationBarItemView(imageAsset: Asset.Plugins.closeSquare) { [weak self] in
            self?.dismiss(animated: true, completion: nil)
        }
        .asUIView()

        view.addSubview(button)
        button.snp.makeConstraints { make in
            make.width.height.equalTo(36)
            make.trailing.equalTo(view.safeAreaLayoutGuide.snp.trailing)
                .offset(-20)
            make.top.equalTo(view.safeAreaLayoutGuide.snp.top)
        }
    }
}

extension TransakIntegratingController: WKUIDelegate, WKNavigationDelegate {
    func webView(
        _ webView: WKWebView,
        didReceive challenge: URLAuthenticationChallenge,
        completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void
    ) {
        if let serverTrust = challenge.protectionSpace.serverTrust {
            completionHandler(.useCredential, URLCredential(trust: serverTrust))
        }
    }
}

extension TransakIntegratingController {
    struct TransakConfig {
        enum Environment: String {
            case production = "PRODUCTION"
            case staging = "STAGING"

            var apiKey: String {
                switch self {
                case .production: return "253be1f0-c6d8-46e7-9d80-38f33bf973e2"
                case .staging: return "4fcd6904-706b-4aff-bd9d-77422813bbb7"
                }
            }

            var host: String {
                switch self {
                case .staging: return "staging-global.transak.com"
                case .production: return "global.transak.com"
                }
            }
        }

        enum Parameter {
            case environment(String)
            case apiKey(String)
            case defaultFiatAmount(String)
            case defaultCryptoCurrency(String)
            case hostURL(String)
            case exchangeScreenTitle(String)
            case themeColor(String)
            case hideMenu(String)
            case walletAddress(String)

            var queryItem: URLQueryItem {
                switch self {
                case let .environment(string): return .init(name: "environment", value: string)
                case let .apiKey(key): return .init(name: "apiKey", value: key)
                case let .defaultFiatAmount(amount): return .init(name: "defaultFiatAmount", value: amount)
                case let .defaultCryptoCurrency(currency): return .init(name: "defaultCryptoCurrency", value: currency)
                case let .hostURL(url): return .init(name: "hostURL", value: url)
                case let .exchangeScreenTitle(title): return .init(name: "exchangeScreenTitle", value: title)
                case let .themeColor(color): return .init(name: "themeColor", value: color)
                case let .hideMenu(hide): return .init(name: "hideMenu", value: hide)
                case let .walletAddress(address): return .init(name: "walletAddress", value: address)
                }
            }
        }

        let environment: Environment
        let walletAddress: String?

        init(
            environment: Environment,
            walletAddress: String?
        ) {
            self.environment = environment
            self.walletAddress = walletAddress
        }

        func asTransakURL() -> URL? {
            var components = URLComponents()
            components.scheme = "https"
            components.host = environment.host

            let walletName = (walletAddress ?? "").prefix(4)

            let parameters: [Parameter] = [
                .apiKey(environment.apiKey),
                .environment(environment.rawValue),
                .defaultCryptoCurrency("ETH"),
                .hostURL("window.location.origin"),
                .defaultFiatAmount("100"),
                .exchangeScreenTitle("Buy Crypto to \(walletName)"),
                .themeColor("#1C68F3"),
                .hideMenu("true")
            ]

            components.queryItems = parameters.map { $0.queryItem }

            return components.url
        }
    }
}
