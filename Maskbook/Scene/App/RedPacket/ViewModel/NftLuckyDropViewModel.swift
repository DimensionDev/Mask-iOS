import Combine
import CombineExt
import CoreData
import CoreDataStack
import Foundation
import web3swift
import BigInt

struct CollectiableGroup: Hashable {
    let name: String
    let address: String
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

    let gasFeeViewModel: GasFeeViewModel
    let walletBottomViewModel: WalletBottomWidgetViewModel
    
    init(gasFeeViewModel: GasFeeViewModel,
         walletBottomViewModel: WalletBottomWidgetViewModel) {
        self.gasFeeViewModel = gasFeeViewModel
        self.walletBottomViewModel = walletBottomViewModel
        
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
        case addCollectibles(groupName: String, contractAddress: String, selectedIdentifiers: Set<String>)
        case confirmRisk
        case createBNFTLuckyDrop(NftRecpacketDraft)
        case selectCollectibleGroup
        case unlockWallet
        case unlockNFT(contractAddress: String, gasItem: GasFeeCellItem)
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
    
    @InjectedProvider(\.personaManager)
    private var personaManager
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

        collectibleGroup = .init(
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
        case .unlockDGC:
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
            createNFTLuckyDrop()

        default: break
        }
    }
}
extension NftLuckyDropViewModel {
    func createNFTLuckyDrop() {
        guard let privateKey = SECP256K1.generatePrivateKey() else { return }
        guard let publicKey = Web3.Utils.privateToPublic(privateKey) else { return }
        guard let publicKeyETH = Web3.Utils.publicToAddress(publicKey) else { return }
        let password = privateKey.toHexString().addHexPrefix()
        let duration = BigUInt(60 * 60 * 24)
        let randomStr = "\(Float.random(in: 0 ..< 1))"
        guard let seed = randomStr.data(using: .utf8)?.sha3(.keccak256) else { return }
        let senderName = personaManager.currentProfile.value?.userName
            ?? personaManager.currentPersona.value?.nickname
            ?? "Unknown User"
        guard let nftAddress = collectibles.first?.address,
              let collectionName = collectibles.first?.collectionName,
              let logoUrl = collectibles.first?.logoUrl,
              let tokenAddr = EthereumAddress(nftAddress)
        else {
            return
        }
        
        guard let redPacketChainID = RedPacket.ChainId(rawValue: Int(settings.network.networkId)) else {
            return
        }
        
        let erc721TokenIDs = collectibles.compactMap {
            $0.tokenId.flatMap({BigUInt($0)})
        }
        let param = NFTRedPacketABI.CreateNFTRedPacketInput(
            publicKey: publicKeyETH,
            duration: duration,
            seed: seed.bytes,
            message: message,
            name: senderName,
            tokenAddr: tokenAddr,
            erc721TokenIDs: erc721TokenIDs
        )
        Task {
            let tx = await ABI.nftRedPacketABI.createRedPacket(
                gasFeeViewModel: gasFeeViewModel,
                param: param,
                password: password
            )
            if let tx = tx {
                walletBottomViewModel.observeTransaction(txHash: tx)
                let payload = NftRedPacketPayload(
                    id: nil,
                    txid: tx,
                    duration: duration.asDouble() ?? 0,
                    message: message,
                    senderName: senderName,
                    contractName: collectionName,
                    contractAddress: nftAddress,
                    contractVersion: 1,
                    contractTokenURI: logoUrl,
                    privateKey: password,
                    chainId: redPacketChainID
                )
                PluginStorageRepository.save(
                    chain: settings.network,
                    txHash: tx,
                    nftPayload: payload
                )
            }
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
