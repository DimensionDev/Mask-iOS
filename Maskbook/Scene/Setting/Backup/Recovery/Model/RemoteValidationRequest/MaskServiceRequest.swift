//
//  MaskServiceRequest.swift
//  Maskbook
//
//  Created by yzj on 2021/8/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Alamofire
import Combine
import Foundation

protocol ResponseBaseType: Codable {
    var message: String? { get }
}

protocol MaskServiceRequest: Codable {
    associatedtype ResponseType: ResponseBaseType
    var baseURL: String { get }
    var endPoint: String { get }

    var emptyResponseCodes: Set<Int> { get }
    var httpMethod: HTTPMethod { get }
    var requestEncoder: ParameterEncoder { get }
}

extension MaskServiceRequest {
    var httpMethod: HTTPMethod { .post }
    var requestEncoder: ParameterEncoder { JSONParameterEncoder.default }
    var emptyResponseCodes: Set<Int> { [201] }

    func asResponsePublisher() -> AnyPublisher<Result<ResponseType, AFError>, Never> {
        Session.default.request(
            URL(string: "\(baseURL)\(endPoint)")!,
            method: httpMethod,
            parameters: self,
            encoder: requestEncoder
        )
        .publishResponse(
            using: DecodableResponseSerializer<ResponseType>(
                emptyResponseCodes: emptyResponseCodes, emptyRequestMethods: [httpMethod]
            )
        )
        .result()
    }
    
    func asResponsePublisherWithError() -> AnyPublisher<ResponseType, AFError> {
        Session.default.request(
            URL(string: "\(baseURL)\(endPoint)")!,
            method: httpMethod,
            parameters: self,
            encoder: requestEncoder
        )
        .publishResponse(
            using: DecodableResponseSerializer<ResponseType>(
                emptyResponseCodes: emptyResponseCodes, emptyRequestMethods: [httpMethod]
            )
        )
        .value()
    }
    
    func asResponsePublisherWithStatusCode(_ allowStatusCode: [Int] = (200..<300) + [404]) -> AnyPublisher<ResponseType, Error> {
        Session.default.request(
            URL(string: "\(baseURL)\(endPoint)")!,
            method: httpMethod,
            parameters: self,
            encoder: requestEncoder
        )
        .publishResponse(
            using: DecodableResponseSerializer<ResponseType>(
                emptyResponseCodes: emptyResponseCodes, emptyRequestMethods: [httpMethod]
            )
        )
        .tryMap { response in
            switch response.result {
            case let .success(result):
                guard let statusCode = response.response?.statusCode else { return result }
                if allowStatusCode.contains(statusCode) {
                    return result
                } else {
                    let message = result.message
                    let error = NSError(domain: "", code: 0, userInfo: [NSLocalizedDescriptionKey: message ?? ""])
                    throw error
                }
                
            case let .failure(error):
                throw error
            }
        }
        .eraseToAnyPublisher()
    }
}

extension String {
    static let remoteBackupBaseURL = "https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com"
}
