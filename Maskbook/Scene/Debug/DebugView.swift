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
    @InjectedProvider(\.mainCoordinator)
    private var coordinator: Coordinator
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            NavigationLink(destination: JSResourceSelectView()) {
                Text("JSResourceSelect")
            }
            Button {
                guard let url = try? hadesLogger.zipLogs() else {
                    return
                }
                var filesToShare = [Any]()
                filesToShare.append(url)
                let activityViewController = UIActivityViewController(
                    activityItems: filesToShare,
                    applicationActivities: nil
                )
                coordinator.present(scene: .activityViewController(
                    activityViewController: activityViewController,
                    sourceView: nil,
                    barButtonItem: nil
                ), transition: .presentActivity(
                    animated: true,
                    from: coordinator.topViewController?.view ?? UIView(),
                    completion: nil)
                )
            } label: {
                Text("zip logs")
            }
            Spacer()
        }
        .navigationTitle("Debug")
        .navigationBarTitleDisplayMode(.inline)
        .navigationBarBackButtonHidden(true)
        .navigationBarItems(leading: NavigationBarItemView(imageAsset: Asset.Icon.Arrows.backArrow) {
            presentationMode.wrappedValue.dismiss()
        })
    }
}

struct DebugView_Previews: PreviewProvider {
    static var previews: some View {
        DebugView()
    }
}
