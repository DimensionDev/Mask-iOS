//
//  PersonaManager.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation
import SwiftyJSON
import WebExtension_Shim

class PersonaManager {
    internal static let shared = PersonaManager()
    
    @InjectedProvider(\.maskMessageRelay)
    internal var maskMessageRelay
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings

    var personaRecordsSubject: FetchedResultsPublisher<PersonaRecord> = {
        let fetchResultController: NSFetchedResultsController<PersonaRecord> = {
            let controller = NSFetchedResultsController<PersonaRecord>(
                fetchRequest: PersonaRepository.queryPersonasFetchRequest(identifiers: nil,
                                                                          hasPrivateKey: true,
                                                                          hasLogout: false),
                managedObjectContext: AppContext.shared.coreDataStack.persistentContainer.viewContext,
                sectionNameKeyPath: nil,
                cacheName: nil
            )
            return controller
        }()
        return FetchedResultsPublisher(fetchResultController: fetchResultController)
    }()

    let currentPersona = CurrentValueSubject<PersonaRecord?, Never>(nil)
    let currentProfiles = CurrentValueSubject<[ProfileRecord], Never>([])
    
    // temporary store a persona name here
    var temporaryPersonaName: String?
    
    private var disposeBag = Set<AnyCancellable>()
    
    init() {
        Publishers.CombineLatest(personaRecordsSubject, settings.$currentPesonaIdentifier)
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { [weak self] _, _ in
                guard let self = self else { return }
                let identifier = self.settings.currentPesonaIdentifier
                let personas = self.personaRecordsSubject.value
                let newCurrentPersona = personas.first(where: { $0.identifier == identifier }) ?? personas.first
                self.currentPersona.value = newCurrentPersona
                if let identifier = newCurrentPersona?.identifier {
                    self.setCurrentPersonaIdentifierToWeb(identifier: identifier)
                }
                if self.settings.currentPesonaIdentifier != newCurrentPersona?.identifier {
                    self.settings.currentPesonaIdentifier = newCurrentPersona?.identifier
                }
            })
            .store(in: &disposeBag)
        
        currentPersona
            .receive(on: DispatchQueue.main)
            .map {
                guard let persona = $0 else { return [] }
                return persona.linkedProfiles?.compactMap {
                    guard let profile = $0 as? ProfileRecord else { return nil }
                    return profile
                } ?? []
            }
            .assign(to: \.currentProfiles.value, on: self)
            .store(in: &disposeBag)
        
        if let currentPersonaIdentifier = settings.currentPesonaIdentifier,
           let currentPersonaRecord = PersonaRepository.queryPersona(identifier: currentPersonaIdentifier),
           currentPersonaRecord.hasLogout == false
        {
            currentPersona.value = currentPersonaRecord
        } else {
            settings.currentPesonaIdentifier = personaRecordsSubject.value.first?.identifier
        }
    }
    
    private func setCurrentPersonaIdentifierToWeb(identifier: String) {
        let request = WebExtension.Persona.SetCurrentPersonaIdenfitier.withPayload {
            .init(identifier: identifier)
        }
        request
            .eraseToAnyPublisher()
            .sink { completion in
                switch completion {
                case let .failure(error):
                    log.debug("set current identifier error \(String(describing: error))", source: "persona")
                    
                case .finished:
                    log.debug("set current identifier finished", source: "persona")
                }
            } receiveValue: { result in
                if let error = result.error {
                    log.debug("set current identifier error \(String(describing: error.message))", source: "persona")
                }
            }
            .store(in: &disposeBag)
    }
    
    static func updatePersona(identifier: String, nickname: String) {
        PersonaRepository.updatePersonaNickname(identifier: identifier, nickname: nickname)
    }
    
    static func createPersona(nickname: String, mnemonic: String = "") -> AnyPublisher<MaskWebMessageResult, Error> {
        let words: String
        if mnemonic.isEmpty {
            let result = WalletCoreHelper.generateMnemonic()
            switch result {
            case let .success(mnemonic):
                words = mnemonic
                
            case let .failure(error):
                print(error)
                return Fail(error: error)
                    .eraseToAnyPublisher()
            }
        } else {
            words = mnemonic
        }
        let request = WebExtension.Persona.CreatePersonaByMnemonic.withPayload {
            WebExtension.Persona.CreatePersonaByMnemonic.Payload(mnemonic: words, nickname: nickname, password: "")
        }
        return request
            .eraseToAnyPublisher()
            .handleEvents(receiveOutput: { result in
                if result.isFailure {
                    log.debug("[create persona] failed. \(result.error?.message ?? "")", source: "persona")
                }
            })
            .eraseToAnyPublisher()
    }
    
    static func personaRecordFor(identifier: String) -> PersonaRecord? {
        PersonaRepository.queryPersona(identifier: identifier)
    }
    
    static func personaFor(identifier: String) -> Persona? {
        if let personaRecord = PersonaManager.personaRecordFor(identifier: identifier) {
            return Persona(fromRecord: personaRecord)
        }
        return nil
    }
    
    static func removePersona(identifier: String) {
        PersonaRepository.deletePersona(identifier: identifier)
    }
    
    static func logoutPersona(identifier: String) {
        PersonaRepository.logoutPersona(identifier: identifier, logout: true)
        if shared.personaRecordsSubject.value.isEmpty {
            Coordinator.main.present(scene: .emptyIdentity,
                                     transition: .replaceCurrentNavigation(tab: .personas,
                                                                           animated: true))
        }
    }
    
    private static func setCurrentPersona(identifier: String) -> AnyPublisher<MaskWebMessageResult, Error> {
        let request = WebExtension.Persona.SetCurrentPersonaIdenfitier.withPayload {
            .init(identifier: identifier)
        }
        return request
            .eraseToAnyPublisher()
    }
    
    static func attachProfile(personaIdentifier: String,
                              profileIdentifier: String)
    {
        ProfileRepository.attachProfile(personaIdentifier: personaIdentifier,
                                        profileIdentifier: profileIdentifier)
    }
    
    static func detachProfile(identifier: String) {
        ProfileRepository.detachProfile(identifier: identifier)
    }
}

private enum PersonaManagerInjectValueKey: InjectValueKey {
    static var defaultInjectValue = PersonaManager.shared
}

extension InjectValues {
    var personaManager: PersonaManager {
        Self[PersonaManagerInjectValueKey.self]
    }
}
