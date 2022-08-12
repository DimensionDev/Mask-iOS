import Combine
import CoreData
import Foundation

import BigInt
import CombineExt
import CoreDataStack
import web3swift

@MainActor
final class NftLuckyDropViewModel: ObservableObject {
    var action: (Event) -> Void = { _ in }

    // binded in `LuckyDropViewModel`
    @Published var gasFeeItem: GasFeeCellItem?
    @Published var message = ""
    @Published var isNFTDropEditing = false

    @Published
    private(set) var token: Token?

    @Published
    private(set) var collectibleGroup: CollectiableGroup?

    @Published
    private(set) var actionState: TransactionState = .unlockWallet

    @Published
    private(set) var items: [CollectibleItem] = []

    private(set) var collectibles: [Collectible] = []

    private let gasFeeViewModel: GasFeeViewModel

    private var viewContext: NSManagedObjectContext {
        AppContext.shared.coreDataStack.persistentContainer.viewContext
    }

    private var cancelableStorage: Set<AnyCancellable> = []

    @InjectedProvider(\.userDefaultSettings)
    private var settings

    @InjectedProvider(\.walletCoreService)
    private var walletCoreService

    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager

    init(gasFeeViewModel: GasFeeViewModel) {
        self.gasFeeViewModel = gasFeeViewModel
        let gasItem = gasFeeViewModel.confirmedGasFeePublisher
            .removeDuplicates()
            .filter { $0 != nil }
            .share()

        gasItem
            .assign(to: \.gasFeeItem, on: self)
            .store(in: &cancelableStorage)

        Publishers.CombineLatest3(
            settings.defaultAccountAddressPublisher.removeDuplicates(),
            settings.networkPubisher.removeDuplicates(),
            walletAssetManager.activateProvider.nativeTokenSubject.prepend(())
        )
        .asDriver()
        .sink { [weak self] _, _, _ in
            guard let self = self else {
                return
            }

            self.token = self.nativeToken()
        }
        .store(in: &cancelableStorage)

        // check action state
        Publishers.MergeMany(
            settings.$passwordExpiredDate
                .map { _ in () }
                .eraseToAnyPublisher(),
            settings.$confirmedPluginRiskWarnings
                .removeDuplicates()
                .map { _ in () }
                .eraseToAnyPublisher(),
            $token
                .map { _ in () }
                .eraseToAnyPublisher(),
            $gasFeeItem
                .map { _ in () }
                .eraseToAnyPublisher(),
            $collectibleGroup
                .removeDuplicates()
                .map { _ in }
                .eraseToAnyPublisher()
        )
        .collect(1)
        .throttle(for: 2, scheduler: DispatchQueue.main, latest: true)
        .sink { [weak self] _ in
            guard let self = self else {
                return
            }
            self.actionState <| self.checkState()
        }
        .store(in: &cancelableStorage)
    }

    deinit {
        print("\(self) deinit")
    }
}

// MARK: presentation

extension NftLuckyDropViewModel {
    var groupName: String? { collectibleGroup?.name }
    var groupIconURL: URL? { collectibleGroup?.groupIconURL }

    var collectibleCountInfo: String {
        "\(collectibles.count)\(collectibleGroup?.totalCount ?? 0)"
    }

    var showCollectible: Bool {
        guard let groupName = groupName else {
            return false
        }

        return groupName.isNotEmpty
    }
}

extension NftLuckyDropViewModel {
    func updateState() {
        actionState = checkState()
    }

    private func checkCollectionApproving() -> Bool {
        guard let contractAddress = collectibleGroup?.address,
              let walletAddress = settings.defaultAccountAddress else {
            return false
        }

        return WalletSendHelper.isApprovedForAll(contractAddress: contractAddress, fromAddress: walletAddress)
    }

    private func checkState() -> TransactionState {
        guard let fromAddress = settings.defaultAccountAddress,
              let fromAccount = walletCoreService.getAccount(address: fromAddress) else {
            return .needWallet
        }

        guard let token = token else {
            return .needToken
        }

        // Only check payment password for wallet which created by Maskbook.
        if !fromAccount.fromWalletConnect {
            guard let date = settings.passwordExpiredDate,
                  !self.settings.isPasswordExpried(date) else {
                return .unlockWallet
            }
        }

        guard settings.hasRiskConfirmed else {
            return .confirmRisk
        }

        // check collectibles
        guard !collectibles.isEmpty else {
            return .addCollectibles
        }

        // gas amount
        guard let gasFeeNumber = gasFeeNumber() else {
            return .insufficientGas
        }

        if gasFeeNumber.doubleValue > token.quantityNumber.doubleValue {
            return .insufficientGas
        }

        guard checkCollectionApproving() else {
            return .unlockNFT
        }

        // no message
        guard !message.isEmpty else {
            return .needMessage
        }

        return .createNFTDrop
    }

    private func gasFeeNumber() -> NSDecimalNumber? {
        guard let gasFee = gasFeeItem?.gasFee else {
            return nil
        }
        let gasFeeNumber = NSDecimalNumber(string: gasFee)
        guard gasFeeNumber != .notANumber else {
            return nil
        }

        return gasFeeNumber
    }

    private func nativeToken() -> Token? {
        walletAssetManager.getMainToken(
            network: settings.network,
            chainId: settings.network.chain.rawValue,
            networkId: Int(settings.network.networkId),
            context: viewContext
        )
    }
}

extension NftLuckyDropViewModel {
    func switchCollectibleGroup() {
        action(.selectCollectibleGroup)
    }

    func addMoreCollectibles() {
        guard let groupInfo = collectibleGroup else {
            return
        }
        let name = groupName ?? ""
        let identifiers = collectibles.map { $0.id ?? "" }
        action(
            .addCollectibles(
                groupName: name,
                contractAddress: groupInfo.address,
                selectedIdentifiers: Set(identifiers)
            )
        )
    }

    func addCollectibles(_ collectibles: [Collectible]) {
        self.collectibles = collectibles

        var collectibleItems: [CollectibleItem] = [.add]
        let showAll = collectibles.count > 5
        for (idx, item) in collectibles.enumerated() where idx < 5 {
            switch idx {
            case 4:
                collectibleItems.append(
                    showAll
                        ? .all(item)
                        : .normal(item)
                )
            default:
                collectibleItems.append(.normal(item))
            }
        }

        items = collectibleItems
    }

    func selectCollectible(
        groupName: String,
        contractAddress: String,
        groupIconURL: URL?,
        totalCount: Int
    ) {
        let keepValues = collectibleGroup?.name == groupName

        collectibleGroup = CollectiableGroup(
            name: groupName,
            address: contractAddress,
            groupIconURL: groupIconURL,
            totalCount: totalCount
        )

        if keepValues {
            return
        }

        collectibles = []
        items = [.add]
    }

    func confirmAction() {
        switch actionState {
        case .unlockWallet: action(.unlockWallet)
        case .confirmRisk: action(.confirmRisk)
        case .unlockNFT:
            guard let contractAddress = collectibleGroup?.address, let item = gasFeeItem else {
                return
            }

            action(
                .unlockNFT(
                    contractAddress: contractAddress,
                    gasItem: item
                )
            )

        case .createNFTDrop:
            guard let groupInfo = collectibleGroup else {
                return
            }
            let draft = NftRecpacketDraft(
                message: message,
                collectibles: collectibles,
                collectibleGroup: groupInfo
            )
            action(.createNFTLuckyDrop(draft: draft, gasFeeViewModel: gasFeeViewModel))

        case .addCollectibles, .insufficientGas, .needToken, .needWallet, .needMessage: break
        }
    }
}

extension NftLuckyDropViewModel {
    enum Event {
        case addCollectibles(groupName: String, contractAddress: String, selectedIdentifiers: Set<String>)
        case confirmRisk
        case createNFTLuckyDrop(draft: NftRecpacketDraft, gasFeeViewModel: GasFeeViewModel)
        case selectCollectibleGroup
        case unlockWallet
        case unlockNFT(contractAddress: String, gasItem: GasFeeCellItem)
    }

    enum CollectibleItem: Identifiable {
        case add
        case normal(Collectible)
        case all(Collectible)

        var id: String {
            switch self {
            case .add: return "add"
            case let .normal(item): return item.id ?? ""
            case let .all(item): return item.id ?? ""
            }
        }
    }

    enum TransactionState {
        case needToken
        case needWallet
        case needMessage
        case insufficientGas

        case unlockWallet
        case confirmRisk
        case unlockNFT
        case createNFTDrop
        case addCollectibles

        var isActionEnabled: Bool {
            switch self {
            case .unlockWallet, .unlockNFT, .confirmRisk, .createNFTDrop: return true
            case .needMessage, .needToken, .needWallet,
                 .addCollectibles, .insufficientGas: return false
            }
        }

        var detailText: String {
            switch self {
            case .needToken: return L10n.Plugins.Luckydrop.Buttons.noToken
            case .needWallet: return L10n.Plugins.Luckydrop.Buttons.noAccount
            case .unlockWallet: return L10n.Scene.WalletUnlock.title
            case .confirmRisk: return L10n.Plugins.Luckydrop.Buttons.riskWarning
            case .insufficientGas: return L10n.Plugins.Luckydrop.Buttons.insufficientGas
            case .addCollectibles: return L10n.Plugins.Luckydrop.Buttons.selectNfts
            case .unlockNFT: return L10n.Plugins.Luckydrop.Buttons.approveCollection
            case .needMessage: return L10n.Plugins.Luckydrop.Buttons.noMessage
            case .createNFTDrop: return L10n.Plugins.Luckydrop.Buttons.createNfgLuckyDrop
            }
        }
    }
}

extension NftLuckyDropViewModel: ChooseCollectionBackDelegate {
    func chooseNFTCollectionAction(token: Collectible) {
        
    }
}

extension NftLuckyDropViewModel: SearchSingleNFTDelegate {
    func returnSelectedNFT(collectible: [Collectible]?) {
        
    }
}
