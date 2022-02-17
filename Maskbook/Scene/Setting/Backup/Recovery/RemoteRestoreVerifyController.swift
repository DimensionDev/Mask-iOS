//
//  RemoteRestoreVerifyController.swift
//  Maskbook
//
//  Created by yzj on 2021/8/23.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import SwiftUI
import UIKit

final class RemoteRestoreVerifyController: SheetAdapitveHostingController<RemoteRestoreVerifyView> {
    private var viewModel: RemoteRestoreVerifyViewModel
    private(set) var cancelableStorage: Set<AnyCancellable> = []

    init() {
        let viewModel = RemoteRestoreVerifyViewModel()
        self.viewModel = viewModel
        super.init(
            rootView: SheetAdaptiveContainer(
                content: { RemoteRestoreVerifyView(viewModel: viewModel) },
                onDismiss: { viewModel.dismissSignal.send() }
            )
        )
    }

    override func buildEvent() {
        super.buildEvent()
        viewModel.validateResult
            .receive(on: DispatchQueue.main)
            .sink { [weak self] verifyResult in
                self?.handleVerifyResult(verifyResult.0, preview: verifyResult.1)
            }
            .store(in: &cancelableStorage)

        viewModel.dismissSignal
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { [weak self] _ in
                self?.dismiss(animated: true, completion: nil)
            })
            .store(in: &cancelableStorage)
    }

    private func handleVerifyResult(_ result: CloudVerifyResult, preview: RemoteBackupPreview) {
        self.dismiss(animated: true) {
            Coordinator.main.present(scene: .pickRemoteDataAndLogin(result), transition: .detail())
        }
    }
}

extension SheetViewController {
    func hostingContentView<V: View>(view: V) {
        view.asSheetContent(in: self)
    }
}

extension View {
    func boxedByHostingController() -> UIHostingController<Self> {
        UIHostingController(rootView: self)
    }

    func asSheetContent(in sheet: SheetViewController) {
        let hostviewController = boxedByHostingController()
        hostviewController.view.backgroundColor = Asset.Colors.Background.normal.color
        sheet.contentView.withSubViews {
            hostviewController.view ?? UIView()
        }
        sheet.addChild(hostviewController)
        hostviewController.view.setContentCompressionResistancePriority(.defaultHigh, for: .vertical)
        hostviewController.view.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }

    func asContent(in controller: UIViewController) {
        let hostController = boxedByHostingController()

        controller.addChild(hostController)
        controller.view.addSubview(hostController.view)
        hostController.view.backgroundColor = Asset.Colors.Background.normal.color
        hostController.view.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }
}
