//
//  GasFeeApi.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

enum GasFeeApi {
    static func getGasFee() -> AnyPublisher<GasFeeModel, NetworkError> {
        switch maskUserDefaults.network {
        case .eth:
            let url = URL(string: "https://gas-api.metaswap.codefi.network/networks/1/suggestedGasFees")!

            let config = URLSessionConfiguration.default
            config.urlCache = nil
            let session = URLSession(configuration: config)

            let urlRequest = URLRequest(url: url)
            return session.dataTaskPublisher(for: urlRequest)
              .tryMap { response in
                guard
                  let httpURLResponse = response.response as? HTTPURLResponse,
                  httpURLResponse.statusCode == 200
                  else {
                  throw NetworkError.serverError
                }
                return response.data
              }
              .decode(type: GasFeeModel.self, decoder: JSONDecoder())
              .mapError { NetworkError.map($0) }
              .eraseToAnyPublisher()
            
        case .polygon:
            let url = URL(string: "https://gasstation-mainnet.matic.network")!
            let config = URLSessionConfiguration.default
            config.urlCache = nil
            let session = URLSession(configuration: config)

            let urlRequest = URLRequest(url: url)
            return session.dataTaskPublisher(for: urlRequest)
              .tryMap { response in
                guard
                  let httpURLResponse = response.response as? HTTPURLResponse,
                  httpURLResponse.statusCode == 200
                  else {
                  throw NetworkError.serverError
                }
                return response.data
              }
              .decode(type: GasFeeMaticModel.self, decoder: JSONDecoder())
              .map({ gasFeeMaticModel in
                    return GasFeeModel(maticModel: gasFeeMaticModel)
              })
              .mapError { NetworkError.map($0) }
              .eraseToAnyPublisher()
            
        case .arbitrum:
            return  Just(GasFeeModel(baseGasFee: "3"))
                .setFailureType(to: NetworkError.self)
                .eraseToAnyPublisher()
            
        case .xdai:
            return  Just(GasFeeModel(baseGasFee: "3"))
                .setFailureType(to: NetworkError.self)
                .eraseToAnyPublisher()
            
        case .bsc:
            return Just(GasFeeModel(baseGasFee: "5"))
                .setFailureType(to: NetworkError.self)
                .eraseToAnyPublisher()
            
        default:
            return Just(GasFeeModel(baseGasFee: "5"))
                .setFailureType(to: NetworkError.self)
                .eraseToAnyPublisher()
        }
    }
}
