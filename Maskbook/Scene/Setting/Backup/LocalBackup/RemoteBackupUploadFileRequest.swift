//
//  RemoteBackupUploadFileRequest.swift
//  Maskbook
//
//  Created by Hugo L on 2021/10/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Alamofire
import Combine
import Foundation

struct RemoteBackupUploadFileRequest: MaskServiceRequest {
    typealias ResponseType = RemoteBackupUploadFileResponse
    var endPoint: String = ""
    var baseURL: String = ""
    var uploadURL: URL
    var emptyResponseCodes: Set<Int> { [200, 201] }
    
    func asUploadPublisher(data: Data) -> DataResponsePublisher<Data> {
        Session.default.upload(data, to: URL(string: "\(uploadURL)")!, method: .put)
            .publishData(emptyResponseCodes: emptyResponseCodes, emptyRequestMethods: [httpMethod])
    }
}

struct RemoteBackupUploadFileResponse: ResponseBaseType {
    var message: String?
}
