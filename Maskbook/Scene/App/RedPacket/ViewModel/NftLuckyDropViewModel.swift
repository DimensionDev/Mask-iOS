import Combine
import CombineExt
import CoreData
import CoreDataStack
import Foundation

struct CollectiableGroup: Hashable {
    let name: String
    let groupIconURL: URL?
    let totalCount: Int
}

struct NftRecpacketDraft {
    let message: String
    let collectibles: [Collectible]
    let gasFeeItem: GasFeeCellItem
    let token: Token
}

@MainActor
final class NftLuckyDropViewModel: ObservableObject {
    // MARK: Lifecycle

    deinit {
        print("\(self) deinit")
    }

    init() {
        Publishers.CombineLatest3(
            settings.defaultAccountAddressPublisher.removeDuplicates(),
            settings.networkPubisher.removeDuplicates(),
            walletAssetManager.activateProvider.nativeTokenSubject.prepend(())
        )
        .asDriver()
        .sink { [weak self] _, network, _ in
            guard let self = self else { return }
            // don't replace this with self.nativeToken()
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
            guard let self = self else { return }
            self.actionState <| self.checkState()
        }
        .store(in: &cancelableStorage)
    }

    // MARK: Internal

    enum Event {
        case addCollectibles(groupName: String, selectedIdentifiers: Set<String>)
        case confirmRisk
        case createBNFTLuckyDrop(NftRecpacketDraft)
        case selectCollectibleGroup
        case unlockWallet
        case unlockDGC
    }

    enum CollectibleItem: Identifiable {
        case add
        case normal(Collectible)
        case all(Collectible)

        // MARK: Internal

        var id: String {
            switch self {
            case .add: return "add"
            case let .normal(item): return item.id ?? ""
            case let .all(item): return item.id ?? ""
            }
        }
    }

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

    var viewContext: NSManagedObjectContext {
        AppContext.shared.coreDataStack.persistentContainer.viewContext
    }

    var groupName: String? { collectibleGroup?.name }
    var groupIconURL: URL? { collectibleGroup?.groupIconURL }

    var collectibleCountInfo: String {
        "\(collectibles.count)\(collectibleGroup?.totalCount ?? 0)"
    }

    // MARK: Private

    private var cancelableStorage: Set<AnyCancellable> = []

    @InjectedProvider(\.userDefaultSettings)
    private var settings

    @InjectedProvider(\.walletCoreService)
    private var walletCoreService

    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
}

extension NftLuckyDropViewModel {
    func updateState() {
        actionState = checkState()
    }

    private func checkCollectionApproving(with token: Token) -> Bool {
        // TODO: update dgcUnlock
        return false
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
            guard let date = settings.passwordExpiredDate, !self.settings.isPasswordExpried(date) else {
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

        // TODO: check dgc with token

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
        let name = groupName ?? ""
        let identifiers = collectibles.map { $0.id ?? "" }
        action(
            .addCollectibles(
                groupName: name,
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

    func selectCollectible(groupName: String, groupIconURL: URL?, totalCount: Int) {
        let keepValues = collectibleGroup?.name == groupName

        collectibleGroup = .init(
            name: groupName,
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
        case .unlockDGC: action(.unlockDGC)

        case .createNFTDrop:
            guard let item = gasFeeItem, let token = token else {
                return
            }
            let draft = NftRecpacketDraft(
                message: message,
                collectibles: collectibles,
                gasFeeItem: item,
                token: token
            )
            action(.createBNFTLuckyDrop(draft))

        default: break
        }
    }
}

extension NftLuckyDropViewModel {
    var showCollectible: Bool {
        guard let groupName = groupName else {
            return false
        }

        return groupName.isNotEmpty
    }

    enum TransactionState {
        case needToken
        case needWallet
        case needMessage
        case insufficientGas

        case unlockWallet
        case confirmRisk
        case unlockDGC
        case createNFTDrop
        case addCollectibles

        // MARK: Internal

        var isActionEnabled: Bool {
            switch self {
            case .unlockWallet, .unlockDGC, .confirmRisk, .createNFTDrop: return true
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
            case .unlockDGC: return L10n.Plugins.Luckydrop.Buttons.approveCollection
            case .needMessage: return L10n.Plugins.Luckydrop.Buttons.noMessage
            case .createNFTDrop: return L10n.Plugins.Luckydrop.Buttons.createNfgLuckyDrop
            }
        }
    }
}