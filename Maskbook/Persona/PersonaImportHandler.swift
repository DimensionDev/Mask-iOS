//
//  PersonaImportPrivateKeyHandler.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import SwiftMsgPack
import SwiftyJSON

class PersonaImportHandler {
    enum ImportScene: Int {
        case userInput
        case userScan
    }
    
    init(scene: ImportScene) {
        self.scene = scene
    }
    
    private var scene: ImportScene
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    private var disposeBag = Set<AnyCancellable>()
    
    func checkExistAndRestore(from item: PersonaImportItem) {
        if let personaRecord = currentPersonaRecord(for: item) {
            if !personaRecord.hasLogout {
                showRestoreAlreadyExistedAlert()
                return
            }
            renameAndSetCurrentPersona(name: item.name, personaRecord: personaRecord)
        } else {
            renameNameAndRestorePersona(from: item)
        }
    }
    
    private func currentPersonaRecord(for item: PersonaImportItem) -> PersonaRecord? {
        switch item.type {
        case let .privateKey(privateKey):
            let decodedData = Data(base64URLEncoded: privateKey)

            let unpackedData = try? decodedData?.unpack() as? [String: Any]
            guard let d = unpackedData?["d"] as? String else {
                log.debug("private key error", source: "persona")
                return nil
            }
            let personaRecord = PersonaRepository.queryPersonas(identifiers: nil)
                .first(where: {
                    d == $0.dKeyInPrivateKey
                })
            return personaRecord
        case let .mnemonic(mnemonic):
            let personaRecord = PersonaRepository.queryPersonas(identifiers: nil)
                .first(where: {
                    mnemonic == $0.mnemonic
                })
            return personaRecord
        }
    }
    
    private func renameAndSetCurrentPersona(name: String?, personaRecord: PersonaRecord) {
        let names = personaManager.personaRecordsSubject.value.map(\.nickname)
        if let nickname = name, names.contains(nickname) {
            let renameViewModel = RenameViewModel(
                originalName: "",
                title: L10n.Scene.Personas.Create.createPersona,
                dismissOnConfirm: false
            ) { [weak self] name, viewModel in
                guard let self = self else { return }
                if names.contains(name) {
                    self.personaNicknameDuplicated()
                    return
                }
                viewModel.dismissSignal.send {
                    PersonaRepository.updatePersonaNickname(identifier: personaRecord.nonOptionalIdentifier, nickname: name)
                    self.setCurrentPersona(persona: personaRecord)
                }
            }
            
            coordinator.present(
                scene: .rename(viewModel: renameViewModel),
                transition: .panModel(animated: true)
            )
        } else {
            setCurrentPersona(persona: personaRecord)
        }
    }
    
    private func renameNameAndRestorePersona(from item: PersonaImportItem) {
        var item = item
        let names = personaManager.personaRecordsSubject.value.map(\.nickname)
        if let nickname = item.name, names.contains(nickname) {
            let renameViewModel = RenameViewModel(
                originalName: "",
                title: L10n.Scene.Personas.Create.createPersona,
                dismissOnConfirm: false
            ) { [weak self] name, viewModel in
                guard let self = self else { return }
                if names.contains(name) {
                    self.personaNicknameDuplicated()
                    return
                }
                item.changeName(name: name)
                viewModel.dismissSignal.send { [weak self] in
                    self?.restore(from: item)
                }
            }
            
            coordinator.present(
                scene: .rename(viewModel: renameViewModel),
                transition: .panModel(animated: true)
            )
        } else {
            restore(from: item)
        }
    }
    
    private func restore(from item: PersonaImportItem) {
        switch item.type {
        case let .mnemonic(mnemonic):
            restoreFroMmnemonic(mnemonic: mnemonic, nickname: item.name)
        case let .privateKey(privateKey):
            restoreFromPrivateKey(privateKey: privateKey, nickname: item.name)
        }
    }
    
    private func setCurrentPersona(persona: PersonaRecord) {
        if persona.hasLogout {
            PersonaRepository.logoutPersona(identifier: persona.nonOptionalIdentifier, logout: false)
        }
        userSetting.currentPesonaIdentifier = persona.nonOptionalIdentifier
        showRestoreSuccessAlert()
    }
    
    private func showInputNameViewController(privateKey: String) {
        let titles = personaManager.personaRecordsSubject.value.map(\.nickname)
        let renameViewModel = RenameViewModel(
            originalName: "",
            title: L10n.Scene.Personas.Create.createPersona,
            dismissOnConfirm: false
        ) { [weak self] name, viewModel in
            guard let self = self else { return }
            if titles.contains(name) {
                self.personaNicknameDuplicated()
                return
            }
            
            viewModel.dismissSignal.send {
                PersonaManager.restoreFromPrivateKey(privateKey: privateKey, nickname: name)
                    .receive(on: DispatchQueue.main)
                    .sink(receiveCompletion: { _ in
                    }) { [weak self] result in
                        if result.isSuccess {
                            if let identifier = result.result?.dictionaryValue["identifier"]?.stringValue {
                                self?.userSetting.currentPesonaIdentifier = identifier
                            }
                            self?.showRestoreSuccessAlert()
                        } else {
                            self?.showRestoreFailedAlert(errorMessage: result.error?.message)
                        }
                    }
                    .store(in: &self.disposeBag)
            }
        }
        
        coordinator.present(
            scene: .rename(viewModel: renameViewModel),
            transition: .panModel(animated: true)
        )
    }
    
    private func restoreFromPrivateKey(privateKey: String, nickname: String?) {
        PersonaManager.restoreFromPrivateKey(privateKey: privateKey, nickname: nickname ?? "persona1")
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in
            }) { [weak self] result in
                if result.isSuccess {
                    if let identifier = result.result?.dictionaryValue["identifier"]?.stringValue {
                        self?.userSetting.currentPesonaIdentifier = identifier
                    }
                    self?.showRestoreSuccessAlert()
                } else {
                    self?.showRestoreFailedAlert(errorMessage: result.error?.message)
                }
            }
            .store(in: &disposeBag)
    }
    
    private func restoreFroMmnemonic(mnemonic: String, nickname: String?) {
        PersonaManager.restoreFromMnemonic(mnemonic: mnemonic, nickname: nickname ?? "persona1")
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in
            }) { [weak self] result in
                if result.isSuccess {
                    if let identifier = result.result?.dictionaryValue["identifier"]?.stringValue {
                        self?.userSetting.currentPesonaIdentifier = identifier
                    }
                    self?.showRestoreSuccessAlert()
                } else {
                    self?.showRestoreFailedAlert(errorMessage: result.error?.message)
                }
            }
            .store(in: &disposeBag)
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
