//
//  IdentityEmptyView1.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/23.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct IdentityEmptyView1: View {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    var body: some View {
        VStack(spacing: 0) {
            VStack(spacing: 16) {
                Spacer()
                
                Asset.Icon.Logo.logoWithName.asImage()
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 114)
                
                Spacer().frame(height: 8)
                
                Text(L10n.Scene.Landing.description)
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Background.blue.asColor())
                
                Spacer()
                
                PrimaryButton(action: {
                    coordinator.present(
                        scene: .personaWelcome,
                        transition: .detail(animated: true)
                    )
                }, title: L10n.Scene.Landing.createAPersona)
                
                PrimaryButton(action: {
                    coordinator.present(
                        scene: .identityRecovery(from: .initilisation),
                        transition: .detail(animated: true)
                    )
                }, title: L10n.Scene.Landing.recoverYourPersona)
                
                PrimaryButton(action: {
                    coordinator.present(scene: .commonScan, transition: .modal(animated: true))
                }, title: L10n.Scene.Landing.synchronization)
            }
        }
        .padding(.horizontal, LayoutConstraints.horizontal)
        .padding(.bottom, 24)
    }
}

struct IdentityEmptyView1_Previews: PreviewProvider {
    static var previews: some View {
        IdentityEmptyView1()
    }
}
