//
//  DebugView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/1/6.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct DebugView: View {
    @Environment(\.presentationMode)
    private var presentationMode
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    var body: some View {
        VStack(alignment: .leading) {
            NavigationLink(destination: JSResourceSelectView()) {
                Text("JSResourceSelect")
            }
            NavigationLink(destination: MessageComposeView(viewModel: MessageComposeViewModel())) {
                Text("MessageCompose")
            }
            Spacer()
        }
        .navigationTitle("Debug")
        .navigationBarTitleDisplayMode(.inline)
        .navigationBarBackButtonHidden(true)
        .navigationBarItems(leading: NavigationItemView(imageAsset: Asset.Icon.Arrows.backArrow) {
            presentationMode.wrappedValue.dismiss()
        })
    }
}

struct DebugView_Previews: PreviewProvider {
    static var previews: some View {
        DebugView()
    }
}
