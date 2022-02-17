//
//  PersonaWelcomeViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/9.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
import UStack
import WebExtension_Shim

class PersonaWelcomeViewController: BaseViewController {
    var words: [String] = []

    private var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.personaManager)
    private var personaManager
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    private lazy var indicatorView = MaskLoadingIndicator()

    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.PersonaWelcome.title
        label.font = FontStyles.BH1
        label.numberOfLines = 0
        label.textColor = Asset.Colors.Text.dark.color
        return label
    }()

    private lazy var descriptionLabel: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.PersonaWelcome.description
        label.font = FontStyles.RH4
        label.numberOfLines = 0
        label.textColor = Asset.Colors.Text.normal.color
        return label
    }()

    private lazy var personaLabel: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.PersonaWelcome.persona
        label.font = FontStyles.BH5
        label.numberOfLines = 0
        label.textColor = Asset.Colors.Text.normal.color
        return label
    }()

    private lazy var nameTextField: MaskTextField = {
        let maskTextField = MaskTextField()
        maskTextField.font = FontStyles.BH5
        return maskTextField
    }()

    private lazy var nextButton: PrimeryButton = {
        let button = PrimeryButton(title: L10n.Common.Controls.next)
        button.isEnabled = false
        return button
    }()

    @InjectedProvider(\.maskMessageRelay)
    private var maskMessageRelay

    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.largeTitleDisplayMode = .never
    }

    override func buildContent() {
        nextButton.snp.makeConstraints { $0.height.equalTo(54) }
        nameTextField.snp.makeConstraints { $0.height.equalTo(52) }
        let contentStack = VStackView(
            spacing: 16
        ) {
                titleLabel
                descriptionLabel
                personaLabel
                nameTextField
                UStack.Spacer()
                nextButton
        }

        view.withSubViews {
            contentStack
        }

        contentStack.isLayoutMarginsRelativeArrangement = true
        contentStack.layoutMargins = UIEdgeInsets(top: 0, left: 22.5, bottom: 32, right: 22.5)
        contentStack.snp.makeConstraints {
            $0.top.equalTo(view.layoutMarginsGuide)
            $0.leading.equalTo(view.snp.leading)
            $0.trailing.equalTo(view.snp.trailing)
            $0.bottom.equalTo(view.readableContentGuide)
        }

        view.withSubViews {
            indicatorView
        }
        indicatorView.snp.makeConstraints {
            $0.centerX.equalToSuperview()
            $0.centerY.equalToSuperview().offset(-15)
            $0.size.equalTo(27)
        }
    }

    override func buildEvent() {
        NotificationCenter.default
            .publisher(for: UITextField.textDidChangeNotification, object: nameTextField)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                guard self.nameTextField.markedTextRange == nil else { return }
                if let text = self.nameTextField.text, !text.isEmpty {
                    self.nextButton.isEnabled = true
                } else {
                    self.nextButton.isEnabled = false
                }
                self.nameTextField.text = String(self.nameTextField.text?.prefix(12) ?? "")
            }
            .store(in: &disposeBag)

        nextButton.cv.tap()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.nextAction()
            }
            .store(in: &disposeBag)

        view.gesture()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.view.endEditing(true)
                self?.nameTextField.resignFirstResponder()
            }
            .store(in: &disposeBag)
    }

    func nextAction() {
        guard let text = nameTextField.text else {
            assertionFailure()
            return
        }
        let names = personaManager.personaRecordsSubject.value.map(\.nickname)
        if names.contains(text) {
            personaNicknameDuplicated()
            return
        }
        nameTextField.resignFirstResponder()
        indicatorView.startAnimation()

        PersonaManager.createPersona(nickname: text, mnemonic: words.joined(separator: " "))
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in
            }) { [weak self] result in
                self?.indicatorView.stopAnimation()
                if result.isSuccess {
                    self?.createPersonaSuccess()
                } else {
                    self?.createPersonaFailed(result: result)
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

    func createPersonaSuccess() {
        DispatchQueue.main.async {
            self.coordinator.present(scene: .persona, transition: .replaceCurrentNavigation(tab: .personas, animated: true))
        }
    }

    func createPersonaFailed(result: MaskWebMessageResult) {
        if let errorMessage = result.error?.message {
            let alertController = AlertController(title: errorMessage, message: "",
                                                  confirmButtonText: L10n.Common.Controls.done,
                                                  imageType: .error)
            coordinator.present(scene: .alertController(alertController: alertController),
                                transition: .alertController(completion: nil))
        }
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct PersonaWelcomePreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            PersonaWelcomeViewController().view
        }
    }
}
#endif
