//
//  JSResourceSelectViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/1/6.
//  Copyright © 2022 dimension. All rights reserved.
//

import Alamofire
import Combine
import Foundation
import SwiftUI
import SwiftyJSON
import ZIPFoundation

class JSResourceSelectViewModel: ObservableObject {
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting

    private(set) var disposeBag = Set<AnyCancellable>()

    @Published var jsResourceIsUsingBundle = true
    @Published var jsDocumentResourceSelectedCommitHash: String = ""

    @Published var zipDownloadUrl: String = ""

    @Published var downloadErrorString: String = ""
    @Published var downloadProgress: Double = 0

    @Published var maskbookItems: [GitInfo] = []

    init() {
        jsResourceIsUsingBundle = userSetting.jsResourceIsUsingBundle
        userSetting.$jsResourceIsUsingBundle
            .assign(to: \.jsResourceIsUsingBundle, on: self)
            .store(in: &disposeBag)
        jsDocumentResourceSelectedCommitHash = userSetting.jsDocumentResourceSelectedCommitHash
        userSetting.$jsDocumentResourceSelectedCommitHash
            .compactMap { $0 }
            .assign(to: \.jsDocumentResourceSelectedCommitHash, on: self)
            .store(in: &disposeBag)
        readMaskbookItems()
    }

    static let documentPath = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first!

    static let documentMaskbook = documentPath.appendingPathComponent("maskbook")

    static var tempZipFileUrl = documentPath.appendingPathComponent("maskbookTemp.zip")

    static var tempJSFolderUrl = documentPath.appendingPathComponent("maskbookTemp")

    static func finalJSFolderUrl(commitHash: String) -> URL {
        return documentMaskbook.appendingPathComponent("\(commitHash)")
    }

    static let gitinfoFileKey = "git-info.json"

    static let tempGitInfoFileURL = tempJSFolderUrl.appendingPathComponent(gitinfoFileKey)

    static func gitInfoFileURL(commitHash: String) -> URL {
        return documentMaskbook.appendingPathComponent("\(commitHash)/\(gitinfoFileKey)")
    }

    func startDownload() {
        downloadProgress = 0
        downloadErrorString = ""
        AF.download(zipDownloadUrl)
            .downloadProgress { [weak self] progress in
                self?.downloadProgress = progress.fractionCompleted
            }
            .responseData { [weak self] response in
                switch response.result {
                case .success:
                    response.value.flatMap {
                        self?.receiveData(data: $0)
                    }

                case let .failure(error):
                    self?.downloadErrorString = "\(error)"
                }
            }
    }

    func receiveData(data: Data) {
        let fileManager = FileManager.default
        let sourceURL = JSResourceSelectViewModel.tempZipFileUrl
        let destinationURL = JSResourceSelectViewModel.tempJSFolderUrl
        try? data.write(to: sourceURL)
        try? fileManager.removeItem(at: destinationURL)
        unzipFile(source: JSResourceSelectViewModel.tempZipFileUrl, destination: destinationURL)
        try? fileManager.removeItem(at: sourceURL)
        // unzipped file may still be a zip file, then unzip twice
        let zipPath = JSResourceSelectViewModel.tempJSFolderUrl.appendingPathComponent("MaskNetwork.iOS.zip")
        unzipFile(source: zipPath, destination: destinationURL)
        saveContentWithGitInfo(destinationURL: destinationURL)
        readMaskbookItems()
    }
    
    func unzipFile(source: URL, destination: URL) {
        let fileManager = FileManager.default
        if fileManager.fileExists(atPath: source.path) {
            do {
                try fileManager.unzipItem(at: source, to: destination)
            } catch {
                print("Extraction of ZIP archive failed with error:\(error)")
                return
            }
        }
        try? fileManager.removeItem(at: source)
    }

    func saveContentWithGitInfo(destinationURL: URL) {
        let fileManager = FileManager.default
        let gitInfoURL = JSResourceSelectViewModel.tempGitInfoFileURL
        let json = try? JSON(data: Data(contentsOf: gitInfoURL))
        if let commitHash = json?["COMMIT_HASH"].string {
            let finalJSFolderUrl = JSResourceSelectViewModel.finalJSFolderUrl(commitHash: commitHash)
            try? fileManager.createDirectory(at: JSResourceSelectViewModel.documentMaskbook,
                                             withIntermediateDirectories: true,
                                             attributes: nil)
            try? fileManager.removeItem(at: finalJSFolderUrl)
            try? fileManager.moveItem(at: destinationURL,
                                      to: finalJSFolderUrl)
        }
        try? fileManager.removeItem(at: destinationURL)
    }

    func readMaskbookItems() {
        let directoryContents = try? FileManager.default.contentsOfDirectory(
            at: JSResourceSelectViewModel.documentMaskbook,
            includingPropertiesForKeys: nil,
            options: .skipsSubdirectoryDescendants)
        maskbookItems = directoryContents?.compactMap {
            try? JSON(data: Data(contentsOf: $0.appendingPathComponent(JSResourceSelectViewModel.gitinfoFileKey)))
        }
        .map {
            let item = GitInfo(id: $0["COMMIT_HASH"].stringValue, json: $0)
            item.isSelected = item.id == userSetting.jsDocumentResourceSelectedCommitHash
            return item
        } ?? []
        if maskbookItems.isEmpty {
            userSetting.jsResourceIsUsingBundle = true
            userSetting.jsDocumentResourceSelectedCommitHash = ""
        }
    }

    func setSelectedItem(item: GitInfo) {
        userSetting.jsDocumentResourceSelectedCommitHash = item.id
        readMaskbookItems()
    }
    
    func setJsResourceIsUsingBundle(isOn: Bool) {
        userSetting.jsResourceIsUsingBundle = isOn
    }

    func deleteItem(item: GitInfo) {
        try? FileManager.default.removeItem(at: JSResourceSelectViewModel.finalJSFolderUrl(commitHash: item.id))
        readMaskbookItems()
    }
}

extension JSResourceSelectViewModel {
    class GitInfo: ObservableObject, Identifiable {
        init(id: String, json: JSON) {
            self.id = id
            self.json = json
        }

        let id: String
        let json: JSON
        var isSelected = false
    }
}

extension JSON {
    var gitInfoDescription: String {
        "BUILD_DATE: \(self["BUILD_DATE"].stringValue)\n"
            + "VERSION: \(self["VERSION"].stringValue)\n"
            + "TAG_NAME: \(self["TAG_NAME"].stringValue)\n"
            + "COMMIT_HASH: \(self["COMMIT_HASH"].stringValue)\n"
            + "COMMIT_DATE: \(self["COMMIT_DATE"].stringValue)\n"
            + "BRANCH_NAME: \(self["BRANCH_NAME"].stringValue)\n"
            + "DIRTY: \(self["DIRTY"].stringValue)\n"
            + "TAG_DIRTY: \(self["TAG_DIRTY"].stringValue)\n"
    }
}
