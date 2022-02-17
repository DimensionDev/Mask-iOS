//
//  SocialIconBackBarItem.swift
//  Maskbook
//
//  Created by BradGao on 2021/10/9.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit

class SocialIconBackBarItem: UIButton {
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    private var disposeBag = Set<AnyCancellable>()
    
    init() {
        super.init(frame: .zero)
        setImage(Asset.Icon.close.image, for: .normal)
        bindEvents()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func refreshSelfState() {
        let isShow = !personaManager.currentProfiles.value.isEmpty
        if isShow {
            enable()
        } else {
            disable()
        }
    }
    
    private func enable() {
        isHidden = false
    }
    
    private func disable() {
        isHidden = true
    }
    
    private func bindEvents() {
        personaManager.currentProfiles
            .receive(on: DispatchQueue.main)
            .sink { profile in
                self.refreshSelfState()
            }
            .store(in: &disposeBag)
    }
}
