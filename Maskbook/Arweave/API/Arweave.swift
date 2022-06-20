import Foundation

public struct Arweave {
    static let shared = Arweave()
    private init() {}
    public static var baseUrl = URL(string: "https://arweave.net")!
    
    public static let landingURL = URL(string: "https://files.r2d2.to/partner/arweave/landing-page.html")!
    
    public static let mesonCDNURL = URL(string: "https://coldcdn.com/api/cdn/9m5pde")!
    
    func request(for route: Route) -> Request {
        return Request(route: route)
    }
}

enum Route {
    case txAnchor
    case transaction(id: TransactionId)
    case transactionData(id: TransactionId)
    case transactionStatus(id: TransactionId)
    case reward(ArweaveTransaction.PriceRequest)
    case commit(ArweaveTransaction)
}

extension Arweave {
    
    struct Request {
        
        var route: Route
        
        var path: String {
            switch route {
            case .txAnchor:
                return "/tx_anchor"
            case let .transaction(id):
                return "/tx/\(id)"
            case let .transactionData(id):
                return "/tx/\(id)/data"
            case let .transactionStatus(id):
                return "/tx/\(id)/status"
            case let .reward(request):
                return "/price/\(String(request.bytes))"
            case .commit:
                return "/tx"
            }
        }
        
        var url: URL {
            baseUrl.appendingPathComponent(path)
        }
        
        var method: String {
            if case Route.commit = route {
                return "post"
            } else {
                return "get"
            }
        }
        
        var body: Data? {
            if case let Route.commit(transaction) = route {
                return try? JSONEncoder().encode(transaction)
            } else {
                return nil
            }
        }
        
        var headers: [String: String]? {
            ["Content-type": "application/json"]
        }
    }
}
