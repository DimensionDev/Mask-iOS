//
//  PersonaCollectionDataSource.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

class PersonaCollectionDataSource: NSObject {
    @InjectedProvider(\.personaManager)
    private var personaManager

    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator

    @InjectedProvider(\.userDefaultSettings)
    private var userSetting

    static var itemSize = CGSize(width: UIScreen.main.bounds.size.width - LayoutConstraints.horizontal * 2, height: 122)
}

extension PersonaCollectionDataSource: UICollectionViewDataSource {
    func numberOfSections(in collectionView: UICollectionView) -> Int {
        1
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        personaManager.personaRecordsSubject.value.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell: PersonaCollectionCell = collectionView.dequeCell(at: indexPath)
        let persona = personaManager.personaRecordsSubject.value[indexPath.row]
        cell.config(persona: persona)
        cell.applyGradient(index: indexPath.row)
        cell.delegate = self
        cell.setNeedsLayout()
        cell.layoutIfNeeded()
        return cell
    }
}

extension PersonaCollectionDataSource: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumLineSpacingForSectionAt section: Int) -> CGFloat
    {
        // return a non-zero number to validate item position
        0.1
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        sizeForItemAt indexPath: IndexPath) -> CGSize
    {
        PersonaCollectionDataSource.itemSize
    }
}

extension PersonaCollectionDataSource: UICollectionViewDelegate {}

extension PersonaCollectionDataSource: UIScrollViewDelegate {
    func scrollViewDidEndDecelerating(_ scrollView: UIScrollView) {
        if let collectionView = scrollView as? UICollectionView {
            var visibleRect = CGRect()

            visibleRect.origin = collectionView.contentOffset
            visibleRect.size = collectionView.bounds.size

            let visiblePoint = CGPoint(x: visibleRect.midX, y: visibleRect.midY)

            guard let indexPath = collectionView.indexPathForItem(at: visiblePoint) else { return }

            let persona = personaManager.personaRecordsSubject.value[indexPath.row]
            userSetting.currentPesonaIdentifier = persona.identifier
        }
    }
}

extension PersonaCollectionDataSource: PersonaCollectionCellDelegate {
    func moreButtonClicked() {
        let viewModel = PersonasActionViewModel()
        mainCoordinator.present(
            scene: .personaAction(viewModel: viewModel),
            transition: .detail(animated: true)
        )
    }

    func avatarClicked() {
        if let _ = personaManager.currentPersona.value?.avatarData {
            let viewModel = PersonaAvatarActionViewModel()
            mainCoordinator.present(scene: .selectActionViewController(viewModel: viewModel),
                                    transition: .panModel(animated: true))
        } else {
            mainCoordinator.present(scene: .personaAvatar,
                                    transition: .detail(animated: true))
        }
    }
}
