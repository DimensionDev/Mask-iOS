//
//  PersonasActionViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import UIKit

final class PersonasActionViewModel {
    @InjectedProvider(\.personaManager)
    private var personaManager

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    @InjectedProvider(\.userDefaultSettings)
    private var userSetting

    @InjectedProvider(\.vault)
    private var vault
    
    var personaDownloadHandler: PersonaDownloadHandler?

    private var disposeBag = Set<AnyCancellable>()

    var dismissSignal = PassthroughSubject<(() -> Void)?, Never>()

    var title: String? {
        personaManager.currentPersona.value?.nickname
    }
    
    var actions: [PersonasActionViewModel.Action] {
        guard let persona = personaManager.currentPersona.value else { return [] }
        
        var actions = PersonasActionViewModel.Action.allCases
        if !persona.isDownloadable {
            actions.removeAll { $0 == .download }
        }
        return actions
    }

    var actionTitles: [String] {
        PersonasActionViewModel.Action.allCases.map(\.title)
    }

    var actionIconNames: [String] {
        PersonasActionViewModel.Action.allCases.map(\.imageName)
    }

    func select(index: Int, cell: UIView?) {
        guard let persona = personaManager.currentPersona.value else {
            return
        }

        guard let item = PersonasActionViewModel.Action(rawValue: index) else {
            assertionFailure()
            return
        }
        switch item {
        case .changeOrAddPersona:
            coordinator.present(scene: .personaList, transition: .panModel(animated: true))

        case .rename:
            // self need captured by this block to use disposeBag
            let viewModel = RenameViewModel(
                originalName: persona.nickname ?? "",
                title: L10n.Scene.Personas.Action.rename
            ) { [weak self] newName in
                guard let self = self else { return }
                if self.personaManager.personaRecordsSubject.value.contains(where: {
                    $0.nickname == newName
                }) {
                    self.personaNicknameDuplicated()
                    return
                }
                PersonaRepository.updatePersonaNickname(identifier: persona.nonOptionalIdentifier, nickname: newName)
            }
            coordinator.present(
                scene: .rename(viewModel: viewModel),
                transition: .panModel(animated: true)
            )

        case .exportPrivateKey:
            guard userSetting.hasBackupPassword else {
                let words = L10n.Common.Alert.ExportPrivateKey.description(L10n.Scene.Setting.BackupRecovery.backUpPassword)
                let alertController = AlertController(
                    title: L10n.Common.Alert.ExportPrivateKey.title,
                    message: words,
                    confirmButtonText: L10n.Common.Controls.ok,
                    cancelButtonText: L10n.Common.Controls.cancel,
                    buttonAxis: .horizontal,
                    imageType: .warning,
                    confirmButtonClicked: { [weak self] _ in
                        self?.setBackupPassword(cell: cell)
                    },
                    cancelButtonClicked: nil
                )
                let keyWords = L10n.Scene.Setting.BackupRecovery.backUpPassword

                let attributes = NSMutableAttributedString(string: words)
                attributes.addAttribute(color: Asset.Colors.Public.blue.color, keywords: keyWords)
                alertController.setAttributeMessage(attrMessage: attributes)
                coordinator.present(
                    scene: .alertController(alertController: alertController),
                    transition: .alertController(completion: nil)
                )
                return
            }
            coordinator.present(scene: .backupPasswordVerify(verifyPassedCompletion: {
                self.coordinator.present(
                    scene: .personaExportPrivateKey(personaIdentifier: persona.nonOptionalIdentifier),
                    transition: .detail(animated: true)
                )
            }), transition: .panModel(animated: true))

        case .download:
            guard let identifier = personaManager.currentPersona.value?.identifier else { return }
            personaDownloadHandler = PersonaDownloadHandler(personaIdentifier: identifier)
            personaDownloadHandler?.downloadAction()
            
        case .backUp:
            showBackupData(cell: cell)

        case .logout:
            if userSetting.hasBackupPassword {
                coordinator.present(scene: .backupPasswordVerify(verifyPassedCompletion: {
                    self.showLogoutAlert(persona: persona)
                }), transition: .panModel(animated: true))
            } else {
                showLogoutAlert(persona: persona)
            }
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

    private func showLogoutAlert(persona: PersonaRecord) {
        let alertController = AlertController(
            title: L10n.Common.Alert.PersonaLogout.title,
            message: L10n.Common.Alert.PersonaLogout.description,
            confirmButtonText: L10n.Common.Controls.confirm,
            cancelButtonText: L10n.Common.Controls.cancel,
            buttonAxis: .horizontal,
            imageType: .warning,
            confirmButtonClicked: { [weak self] _ in
                PersonaManager.logoutPersona(identifier: persona.nonOptionalIdentifier)
                self?.dismissSignal.send(nil)
            },
            cancelButtonClicked: nil
        )
        coordinator.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }

    private func showDeleteAlert(persona: Persona) {
        let alertController = AlertController(
            title: "",
            message: L10n.Scene.Personas.deleteTip,
            confirmButtonText: L10n.Common.Controls.confirm,
            cancelButtonText: L10n.Common.Controls.cancel,
            buttonAxis: .horizontal,
            imageType: .warning,
            confirmButtonClicked: { _ in
                PersonaManager.removePersona(identifier: persona.identifier)
            },
            cancelButtonClicked: nil
        )
        let attribute1 = NSAttributedString(string: L10n.Scene.Personas.delete,
                                            attributes: [.foregroundColor: Asset.Colors.Text.normal.color,
                                                         .font: FontStyles.BH4])
        let attribute2 = NSAttributedString(string: "\(persona.nickname ?? "") ?",
                                            attributes: [.foregroundColor: Asset.Colors.Text.dark.color,
                                                         .font: FontStyles.BH4])
        let attribte = NSMutableAttributedString()
        attribte.append(attribute1)
        attribte.append(attribute2)
        alertController.setAttributeTitle(attrTitle: attribte)

        coordinator.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }

    private func showBackupData(cell: UIView?) {
        if !userSetting.hasBackupPassword {
            let words = L10n.Common.Alert.BackupTipsNoBackupPassword.description(L10n.Scene.Setting.BackupRecovery.backUpPassword)
            let alertController = AlertController(
                title: L10n.Common.Alert.BackupTipsNoBackupPassword.title,
                message: words,
                confirmButtonText: L10n.Common.Controls.ok,
                imageType: .warning,
                confirmButtonClicked: { [weak self] _ in
                    self?.setBackupPassword(cell: cell)
                },
                cancelButtonClicked: nil
            )
            let keyWords = L10n.Scene.Setting.BackupRecovery.backUpPassword

            let attributes = NSMutableAttributedString(string: words)
            attributes.addAttribute(color: Asset.Colors.Public.blue.color, keywords: keyWords)
            alertController.setAttributeMessage(attrMessage: attributes)
            coordinator.present(
                scene: .alertController(alertController: alertController),
                transition: .alertController(completion: nil)
            )
        } else {
            coordinator.present(scene: .chooseBackupStrategy, transition: .panModel(animated: true))
        }
    }

    private func setBackupPassword(cell: UIView?) {
        coordinator.present(
            scene: .setBackupPassword,
            transition: .panModel()
        )
    }
}

extension PersonasActionViewModel {
    enum Action: Int, CaseIterable {
        case changeOrAddPersona = 0
        case rename
        case exportPrivateKey
        case download
        case backUp
        case logout

        var title: String {
            switch self {
            case .changeOrAddPersona:
                return L10n.Scene.Personas.Action.changeAddPersona

            case .rename:
                return L10n.Scene.Personas.Action.rename

            case .exportPrivateKey:
                return L10n.Scene.Personas.Action.exportPrivateKey

            case .download:
                return L10n.Scene.Personas.Action.download
                
            case .backUp:
                return L10n.Scene.Personas.Action.backup

            case .logout:
                return L10n.Scene.Personas.Action.logOut
            }
        }

        var imageName: String {
            switch self {
            case .changeOrAddPersona:
                return Asset.Images.Scene.Personas.changeOrAdd.name

            case .rename:
                return Asset.Images.Scene.Personas.rename.name

            case .exportPrivateKey:
                return Asset.Images.Scene.Personas.exportPrivateKey.name

            case .download:
                return Asset.Images.Scene.Personas.download.name
                
            case .backUp:
                return Asset.Images.Scene.Personas.backup.name

            case .logout:
                return Asset.Images.Scene.Personas.logout.name
            }
        }
    }
}
