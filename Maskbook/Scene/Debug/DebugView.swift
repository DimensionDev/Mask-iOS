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

    @State private var isPresented = false

    var body: some View {
        VStack(alignment: .leading) {
            NavigationLink(destination: JSResourceSelectView()) {
                Text("JSResourceSelect")
            }
            Button(
                action: {
                    isPresented.toggle()
                },
                label: { Text("MessageCompose") }
            )
            .fullScreenCover(isPresented: $isPresented) {
                MessageComposeView(viewModel: MessageComposeViewModel())
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
