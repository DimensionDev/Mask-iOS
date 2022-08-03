import Combine
import UIKit

final class NftRedPacketShareViewController: SheetViewAdapterController<NftRedpacketShareView> {
    init() {
        let viewModel = NftRedpacketShareViewModel()
        self.viewModel = viewModel
        super.init(
            rootView: .init(viewModel)
        )
        dissmissOnTap = false
        
    }

    let viewModel: NftRedpacketShareViewModel
    private var cancelableStorage: Set<AnyCancellable> = []

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func buildEvent() {
        super.buildEvent()
        viewModel.actionSignal
            .sink { [weak self] action in
                guard let self = self else { return }
                switch action {
                case .dismiss: self.dismiss(animated: true)
                case .share: self.share()
                }
            }
            .store(in: &cancelableStorage)
    }

    private func share() {
        // TODO: share to compose
        let payload = PluginMeta.nftRedPacket(
            .init(
                id: "",
                txid: "",
                duration: 0,
                message: "",
                senderName: "",
                contractName: "",
                contractAddress: "",
                contractVersion: 0,
                contractTokenURI: "",
                privateKey: "",
                chainId: .mainnet
            )
        )
    }
}

final class NftRedpacketShareViewModel: ObservableObject {
    enum Action {
        case dismiss
        case share
    }

    let actionSignal = PassthroughSubject<Action, Never>()
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
import UStack

struct NftRedPacketShareSheetPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            NftRedPacketShareViewController().view
        }
    }
}
#endif
