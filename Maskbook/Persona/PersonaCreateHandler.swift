//
//  PersonaCreateHandler.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/11.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation

class PersonaCreateHandler {
    private var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.personaManager)
    private var personaManager

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    @InjectedProvider(\.userDefaultSettings)
    private var userSetting

    func createPersona(name: String, mnemonic: String) {
        let names = personaManager.personaRecordsSubject.value
            .map(\.nickname)
        if names.contains(name) {
            personaNicknameDuplicated()
            return
        }

        PersonaManager.createPersona(nickname: name, mnemonic: mnemonic)
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in
            }) { [weak self] result in
                if result.isSuccess {
                    if let identifier = result.result?.dictionaryValue["identifier"]?.stringValue {
                        self?.userSetting.currentPesonaIdentifier = identifier
                    }
                    self?.succeedInCreatingPersona(name: name)
                } else {
                    self?.failedInCreatingPersona(result: result)
                }
            }
            .store(in: &disposeBag)
    }

    func personaNicknameDuplicated() {
        let alertController = AlertController(
            title: L10n.Common.Alert.PersonaNameDuplicated.title,
            message: "",
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .error)
        coordinator.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil))
    }

    func succeedInCreatingPersona(name: String) {
        coordinator.present(scene: .persona, transition: .replaceCurrentNavigation(tab: .personas, animated: true)) {
            let alertController = AlertController(title: L10n.Common.Alert.PersonaCreate.title,
                                                  message: L10n.Common.Alert.PersonaCreate.description(name),
                                                  confirmButtonText: L10n.Common.Controls.done,
                                                  imageType: .success)
            let message = self.titleAttributeString(name: name)
            alertController.setAttributeMessage(attrMessage: message)
            self.coordinator.present(scene: .alertController(alertController: alertController),
                                     transition: .alertController(completion: nil))
        }
    }

    func titleAttributeString(name: String) -> NSAttributedString {
        let words = L10n.Common.Alert.PersonaCreate.description(name)
        let attributeString = NSMutableAttributedString()
        let attribute = NSAttributedString(string: words,
                                           attributes: [.foregroundColor: Asset.Colors.Text.normal.color,
                                                        .font: FontStyles.MH5])
        attributeString.append(attribute)
        attributeString.addAttribute(color: Asset.Colors.Text.dark.color, keywords: name)
        return attributeString
    }

    func failedInCreatingPersona(result: MaskWebMessageResult) {
        if let errorMessage = result.error?.message {
            let alertController = AlertController(title: errorMessage,
                                                  message: "",
                                                  confirmButtonText: L10n.Common.Controls.done,
                                                  imageType: .error)
            coordinator.present(scene: .alertController(alertController: alertController),
                                transition: .alertController(completion: nil))
        }
    }
}
