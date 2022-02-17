//
//  PersonaImportPrivateKeyHandler.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import SwiftMsgPack
import SwiftyJSON

class PersonaImportPrivateKeyHandler {
    enum ImportPrivateKeyScene: Int {
        case userInput
        case userScan
    }
    
    init(scene: ImportPrivateKeyScene) {
        self.scene = scene
    }
    
    private var scene: ImportPrivateKeyScene
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    private var disposeBag = Set<AnyCancellable>()
    
    func restoreFromPrivateKey(text: String) {
        let decodedData = Data(base64URLEncoded: text)
        let unpackedData = try? decodedData?.unpack() as? [String: Any]
        guard let d = unpackedData?["d"] as? String else {
            print("private key error")
            return
        }
        let personaRecords = PersonaRepository.queryPersonas(identifiers: nil).filter {
            guard let privateKey = $0.privateKey else { return false }
            guard let data = privateKey.data(using: .utf8) else { return false }
            let json = try? JSON(data: data)
            guard let dInPersona = json?["d"].string else { return false }
            return d == dInPersona
        }
        
        if !personaRecords.isEmpty {
            let personaRecord = personaRecords[0]
            guard let personaIdentifier = personaRecords[0].identifier else { return }
            if scene == .userScan, !personaRecord.hasLogout {
                showRestoreAlreadyExistedAlert()
            } else {
                showRestoreSuccessAlert()
            }
            if personaRecord.hasLogout {
                PersonaRepository.logoutPersona(identifier: personaIdentifier, logout: false)
            }
            userSetting.currentPesonaIdentifier = personaIdentifier
        } else {
            switch scene {
            case .userInput:
                restoreFromPrivateKey(privateKey: text)
                
            case .userScan:
                showInputNameViewController(privateKey: text)
            }
        }
    }
    
    private func restoreFromPrivateKey(privateKey: String) {
        PersonaManager.restoreFromPrivateKey(privateKey: privateKey)
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in
            }) { [weak self] result in
                if result.isSuccess {
                    self?.showRestoreSuccessAlert()
                } else {
                    self?.showRestoreFailedAlert(errorMessage: result.error?.message)
                }
            }
            .store(in: &disposeBag)
    }
    
    private func showInputNameViewController(privateKey: String) {
        let titles = personaManager.personaRecordsSubject.value.map(\.nickname)
        let viewModel = RenameViewModel(
            originalName: "",
            title: L10n.Scene.Personas.Create.createPersona
        ) { [weak self] name in
            guard let self = self else { return }
            if titles.contains(name) {
                self.personaNicknameDuplicated()
                return
            }
            
            PersonaManager.restoreFromPrivateKey(privateKey: privateKey, nickname: name)
                .receive(on: DispatchQueue.main)
                .sink(receiveCompletion: { _ in
                }) { [weak self] result in
                    if result.isSuccess {
                        self?.showRestoreSuccessAlert()
                    } else {
                        self?.showRestoreFailedAlert(errorMessage: result.error?.message)
                    }
                }
                .store(in: &self.disposeBag)
        }
        
        coordinator.present(
            scene: .rename(viewModel: viewModel),
            transition: .panModel(animated: true)
        )
    }
    
    private func showRestoreSuccessAlert() {
        coordinator.present(scene: .persona,
                            transition: .replaceCurrentNavigation(tab: .personas, animated: true),
                            from: nil)
        {
            switch self.scene {
            case .userInput:
                let alertController = AlertController(title: L10n.Scene.Restore.Titles.restoreSucceed,
                                                      message: L10n.Scene.IdentityRestoreSigninSuccess.title,
                                                      confirmButtonText: L10n.Common.Controls.done,
                                                      imageType: .success)
                self.coordinator.present(scene: .alertController(alertController: alertController),
                                         transition: .alertController(completion: nil))
                
            case .userScan:
                let alertController = AlertController(title: L10n.Common.Alert.ScanPersonaSuccess.title,
                                                      message: L10n.Common.Alert.ScanPersonaSuccess.description,
                                                      confirmButtonText: L10n.Common.Controls.ok,
                                                      imageType: .success)
                self.coordinator.present(scene: .alertController(alertController: alertController),
                                         transition: .alertController(completion: nil))
            }
        }
    }
    
    private func showRestoreAlreadyExistedAlert() {
        let alertController = AlertController(title: L10n.Common.Alert.ScanPersonaExist.title,
                                              message: L10n.Common.Alert.ScanPersonaExist.description,
                                              confirmButtonText: L10n.Common.Controls.ok,
                                              imageType: .warning)
        coordinator.present(scene: .alertController(alertController: alertController),
                            transition: .alertController(completion: nil))
    }
    
    private func showRestoreFailedAlert(errorMessage: String?) {
        if let errorMessage = errorMessage {
            let alertController = AlertController(title: errorMessage,
                                                  message: "",
                                                  confirmButtonText: L10n.Common.Controls.done,
                                                  imageType: .error)
            coordinator.present(scene: .alertController(alertController: alertController),
                                transition: .alertController(completion: nil))
        }
    }
    
    private func personaNicknameDuplicated() {
        let alertController = AlertController(
            title: L10n.Common.Alert.PersonaNameDuplicated.title,
            message: "",
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .error
        )
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }
}
