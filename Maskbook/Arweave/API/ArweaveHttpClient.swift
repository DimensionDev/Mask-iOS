import Foundation

extension String: Error { }

public struct HttpResponse {
    let data: Data
    let statusCode: Int
}

struct ArweaveHttpClient {

    static func request(_ target: Arweave.Request, delegate: URLSessionTaskDelegate? = nil) async throws -> HttpResponse {
        
        var request = URLRequest(url: target.url)
        request.httpMethod = target.method
        request.httpBody = target.body
        if request.httpMethod?.uppercased() == "POST" {
            request.allHTTPHeaderFields = target.headers
        }
        
        let (data, response) = try await Self.urlSession(for: request, delegate: delegate)
        
        let httpResponse = response as? HTTPURLResponse
        let statusCode = httpResponse?.statusCode ?? 0
        
        if case .transactionStatus = target.route {}
        else if statusCode != 200 {
            throw "Bad response code \(statusCode)"
        }
        
        return HttpResponse(data: data, statusCode: statusCode)
    }
    
    static func urlSession(for request: URLRequest, delegate: URLSessionTaskDelegate? = nil) async throws -> (Data, URLResponse) {
        if #available(iOS 15.0, *) {
            return try await URLSession.shared.data(for: request, delegate: delegate)
        } else {
            return try await URLSession.shared.data(for: request)
        }
    }
}
