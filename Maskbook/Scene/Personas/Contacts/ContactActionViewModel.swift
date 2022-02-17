//
//  ContactActionViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

protocol ContactActionViewModelDelegate: AnyObject {
    func contactAction(didDelete profile: Profile)
}

final class ContactActionViewModel: SelectActionViewModelProtocol {
    weak var delegate: ContactActionViewModelDelegate?
    
    init(profile: Profile,
         delegate: ContactActionViewModelDelegate?) {
        self.profile = profile
        self.delegate = delegate
    }

    private var profile: Profile

    private var disposeBag = Set<AnyCancellable>()

    var dismissSignal = PassthroughSubject<(() -> Void)?, Never>()

    var title: String? {
        profile.nickname ?? profile.socialID
    }

    var actionTitles: [String] {
        ContactActionViewModel.Action.allCases.map(\.title)
    }

    var actionIcons: [UIImage] {
        ContactActionViewModel.Action.allCases.map(\.image)
    }

    func select(index: Int) {
        guard let item = ContactActionViewModel.Action(rawValue: index) else {
            assertionFailure()
            return
        }
        switch item {
        case .delete:
            let alertController = AlertController(
                title: "",
                message: nil,
                confirmButtonText: L10n.Common.Controls.confirm,
                cancelButtonText: L10n.Common.Controls.cancel,
                buttonAxis: .horizontal,
                imageType: .warning,
                confirmButtonClicked: { _ in
                    self.deleteProfile()
                },
                cancelButtonClicked: nil
            )
            let attribute1 = NSAttributedString(string: L10n.Scene.PersonaContacts.delete,
                                                attributes: [.foregroundColor: Asset.Colors.Text.normal.color,
                                                             .font: FontStyles.BH4])
            let attribute2 = NSAttributedString(string: "\(L10n.Scene.PersonaContacts.contact) ?",
                                                attributes: [.foregroundColor: Asset.Colors.Text.dark.color,
                                                             .font: FontStyles.BH4])
            let attribte = NSMutableAttributedString()
            attribte.append(attribute1)
            attribte.append(attribute2)
            alertController.setAttributeTitle(attrTitle: attribte)

            Coordinator.main.present(scene: .alertController(alertController: alertController),
                                     transition: .alertController(completion: nil))
        }
    }

    func deleteProfile() {
        guard let personaIdentifier = profile.linkedPersona else {
            return
        }
        RelationRepository.deleteRelation(personaIdentifier: personaIdentifier,
                                          profileIdentifier: profile.identifier)
        delegate?.contactAction(didDelete: profile)
        self.dismissSignal.send(nil)
    }
}

extension ContactActionViewModel {
    enum Action: Int, CaseIterable {
        case delete

        var title: String {
            switch self {
            case .delete:
                return L10n.Scene.Personas.Action.delete
            }
        }

        var image: UIImage {
            switch self {
            case .delete:
                return Asset.Images.Scene.WalletEdit.iconDelete.image
            }
        }
    }
}
