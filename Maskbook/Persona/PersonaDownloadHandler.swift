//
//  PersonaDownloadHandler.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/15.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import PDFKit
import UIKit

class PersonaDownloadHandler: NSObject {
    var disposeBag = Set<AnyCancellable>()
    
    var personaIdentifier: String?
    
    var personaMnemonic: [String]?
    
    var pdfDocument: PDFDocument?
    
    @InjectedProvider(\.personaManager)
    var personaManager

    init(mnemonic: [String]) {
        self.personaMnemonic = mnemonic
    }

    init(personaIdentifier: String) {
        self.personaIdentifier = personaIdentifier
    }
    
    func downloadAction() {
        if let personaIdentifier = personaIdentifier {
            if let image = generateImage(personaIdentifier: personaIdentifier) {
                generatePDF(image: image)
            }
        }
        if let personaMnemonic = personaMnemonic {
            createTempPersona(mnemonic: personaMnemonic)
        }
        selectDestinationFolder()
    }
    
    func createTempPersona(mnemonic: [String]) {
        guard let tempName = personaManager.temporaryPersonaName else { return }
        PersonaManager.createPersona(nickname: tempName,
                                     mnemonic: mnemonic.joined(separator: " "))
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in
            }) { [weak self] result in
                if result.isSuccess {
                    if let identifier = result.result?.dictionaryValue["identifier"]?.stringValue {
                        if let image = self?.generateImage(personaIdentifier: identifier) {
                            self?.generatePDF(image: image)
                        }
                        PersonaRepository.deletePersona(identifier: identifier)
                    }
                }
            }
            .store(in: &disposeBag)
    }
    
    func generateImage(personaIdentifier: String) -> UIImage? {
        if let persona = PersonaRepository.queryPersona(identifier: personaIdentifier) {
            let view = PersonaKeyInfoPreview(persona: persona)
            
            let image = view.snapshot()
            return image
        }
        return nil
    }
    
    func generatePDF(image: UIImage) {
        let document = PDFDocument()
        guard let pdfPage = PDFPage(image: image) else { return }
        document.insert(pdfPage, at: 0)
        guard let page = document.page(at: 0) else { return }
        let bounds = page.bounds(for: .cropBox)
        let renderer = UIGraphicsImageRenderer(bounds: bounds, format: UIGraphicsImageRendererFormat.default())
        let image = renderer.image { context in
            context.cgContext.saveGState()

            context.cgContext.translateBy(x: 0, y: bounds.height)
            context.cgContext.concatenate(CGAffineTransform(scaleX: 1, y: -1))
            page.draw(with: .mediaBox, to: context.cgContext)

            context.cgContext.restoreGState()

            let myImage = Asset.Images.Scene.Personas.watermark.image
            let imageRect = CGRect(origin: .zero, size: myImage.size)
            myImage.draw(in: imageRect)
        }
        guard let newPage = PDFPage(image: image) else { return }
        for annotation in page.annotations {
            newPage.addAnnotation(annotation)
        }

        document.insert(newPage, at: 0)
        document.removePage(at: 1)
        pdfDocument = document
    }
    
    private func selectDestinationFolder() {
        let documentPicker: UIDocumentPickerViewController = {
            if #available(iOS 15.0, *) {
                return UIDocumentPickerViewController(forOpeningContentTypes: [.folder])
            } else {
                return UIDocumentPickerViewController(documentTypes: ["public.folder"], in: .open)
            }
        }()
        documentPicker.delegate = self
        UIApplication.getTopViewController()?.present(documentPicker, animated: true, completion: nil)
    }
}

extension PersonaDownloadHandler: UIDocumentPickerDelegate {
    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentAt url: URL) {
        // Start accessing a security-scoped resource.
        guard url.startAccessingSecurityScopedResource() else {
            // Handle the failure here.
            return
        }
        defer {
            url.stopAccessingSecurityScopedResource()
        }
        var name: String
        if let personaIdentifier = personaIdentifier {
            name = PersonaManager.personaFor(identifier: personaIdentifier)?.nickname ?? ""
        } else if self.personaMnemonic != nil {
            name = personaManager.temporaryPersonaName ?? ""
        } else {
            name = ""
        }
        let fileName = "mask-persona-" + name + ".pdf"
        let pdfURL = url.appendingPathComponent(fileName)
        log.debug("write pdf to path \(pdfURL.absoluteString)", source: "persona")
        guard let pdfDocument = pdfDocument else { return }
        let success = pdfDocument.write(to: pdfURL)
        if success {
            UIApplication.getTopViewController()?.view
                .makeToast(message: L10n.Common.Toast.copy,
                           image: Asset.Images.Toast.check.image)
        }
    }
}
