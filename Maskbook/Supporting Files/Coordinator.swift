//  Coordinator.swift
//  Maskbook
//
//  Created by MainasuK Cirno on 2020/3/4.
//  Copyright © 2020 dimension. All rights reserved.
//

import BigInt
import CoreDataStack
import PanModal
import PromiseKit
import SwiftUI
import UIKit
import WalletConnectSwift
import web3swift

// swiftlint:disable file_length
class Coordinator {
    static let main = Coordinator()
    
    @InjectedProvider(\.maskBrowser)
    private var maskBrowser
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    private var window: UIWindow?
    
    enum FromEdge {
        case bottom
    }

    enum Transition {
        case root
        case modal(animated: Bool = true, adaptiveDelegate: UIAdaptivePresentationControllerDelegate? = nil)
        case detail(animated: Bool = true)
        case panModel(animated: Bool = true)
        case alertController(completion: (() -> Void)? = nil)
        case replaceCurrentNavigation(tab: MainTabBarController.Tab, animated: Bool = true, selected: Bool = false)
        case replaceWalletTab(animated: Bool = false)
        case popup
        case presentActivity(animated: Bool, from: UIView? = nil, completion: (() -> Void)? = nil)
    }

    enum Scene {
        enum WalletContactParam {
            case address(address: String)
            case ensName(ensName: String)

            var displayText: String {
                switch self {
                case .address(let address):
                    return address

                case .ensName(let ensName):
                    return ensName
                }
            }
        }

        enum SendTransactionParam {
            case token(id: String)
            case collectible(collectible: Collectible)
        }

        indirect case root(window: UIWindow, scene: Scene)
        case welcome
        case mainTab(selectedTab: MainTabBarController.Tab)
        case persona
        case personaAvatar
        case cropImage(image: UIImage)
        case termsOfService(walletStartType: WalletStartType)
        case biometryRecognition(walletStartType: WalletStartType)
        case mnemonicWord(name: String?)
        case mnemonicVerify(name: String?, words: [String])
        case createWalletWithName(walletStartType: WalletStartType)
        case balance
        case walletList
        case selectItemViewController(viewModel: SelectItemViewModelProtocol)
        case selectActionViewController(viewModel: SelectActionViewModelProtocol)
        case alertController(alertController: AlertController)
        case activityViewController(
            activityViewController: UIActivityViewController,
            sourceView: UIView?,
            barButtonItem: UIBarButtonItem?
        )
        case importWallet(name: String?, password: String)
        case selectNetwork
        case importFromMnemonic(name: String?, password: String)
        case importFromPrivateKey(name: String?, password: String)
        case importFromKeystore(name: String?, password: String)
        case walletListAdd
        case walletEdit(account: Account, sourceView: UIView?)
        case walletRename(account: Account)
        case walletDelete(account: Account)
        case walletMultichainAlert
        case walletDetail(account: Account, sourceView: UIView?)
        case walletBackup(account: Account)
        case walletUnlock(cancellable: Bool, completion: ((Error?) -> Void)?)
        case sendTransaction(param: SendTransactionParam?)
        case sendTransactionPopConfirm(sendConfirmViewModel: SendConfirmViewModel, toAddress: String, amount: String)
        case sendTransactionConfirm(param: WalletContactParam, tokenId: String?)
        case sendNFTTransactionConfirm(param: WalletContactParam, nftToken: Collectible)
        case addContact(param: WalletContactParam)
        case sendTransacationTokenlist(delegate: ChooseTokenBackDelegate?, isNftList: Bool)
        case maskSendTransactionPopView(delegate: SendConfirmPopViewDelegate?,
                                        transaction: EthereumTransaction,
                                        transactionOptions: TransactionOptions,
                                        request: MaskWeb3MessageRequest)
        case maskSendWalletConnectTransactionPopView(delegate: WalletConnectSendResponseDelegate?,
                                        transaction: EthereumTransaction,
                                        transactionOptions: TransactionOptions,
                                                     request: Request)
        case maskSendResolverTransactionPopView(resolver: Resolver<String>?,
                                                transaction: EthereumTransaction,
                                                transactionOptions: TransactionOptions)
        case scanBase(delegate: ScannerLineViewControllerDelegate)
        case gasFee(delegate: GasFeeBackDelegate?, gasLimit: BigUInt)
        case rename(viewModel: RenameViewModel)
        case personaAction(viewModel: PersonasActionViewModel)
        case personaList
        case personaWelcome
        case personaExportPrivateKey(personaIdentifier: String)
        case tokenDetail(token: MaskToken)
        case nftDetail(nftToken: Collectible)
        case nftAction(nftToken: Collectible)
        case walletHistory
        case safariView(url: URL)
        case setPassword
        case changePasswordStep1
        case changePasswordStep2
        case receiveAddress(network: BlockChainNetwork, token: Token?, address: String)
        case emptyWallet
        case emptyIdentity
        case identityCreate
        case identityRecovery(from: IdentityRecoveryViewController.From)
        case identityMnemonicImport
        case identityPrivateKeyImport
        case derivationPath(name: String?, mnemonic: String)
        case pluginRiskWarning
        case backupPasswordVerify(verifyPassedCompletion: () -> Void)
        case localBackup(type: LocalBackupViewModel.BackupType, cloudVerifyResult: CloudVerifyResult? = nil)
        case chooseBackupStrategy
        case backupReminder
        case remoteBackupGetVerifyCode
        case maskSocial(socialPlatform: ProfileSocialPlatform)
        case maskConnectingSocial(socialPlatform: ProfileSocialPlatform, personaIdentifier: String?)
        case detectProfiles(
            profiles: [SocialProfile],
            personaIdentifier: String,
            delegate: SocialProfileDetectViewControllerDelegate?
        )
        case connectableSocialList
        case setBackupPassword
        case changeBackupPasswordStep1
        case changeBackupPasswordStep2
        case verifyBackupFileEncryptSeed(completion: (Data) -> Void, fileURL: URL)
        case pickLocalRestoreDataInInit(sender: UIView?)
        case pickLocalRestoreDataInSetting(sender: UIView?)
        case pickRemoteDataAndLogin(CloudVerifyResult)
        case remoteResotreVerify
        case localRestoreEncryptBackup(
            _ backup: Data,
            destination: RestoreDataPreviewController.Destination)
        case localRestore(
            _ url: URL,
            destination: RestoreDataPreviewController.Destination)
//        case remoteRestore(_ data: Data, strategy: RestoreCompletionStrategy)
        case walletConnectStart
        case walletConnectConnecting
        case walletConnectFail
        case commonScan
        case walletConnectServerConfirm(viewModel: WalletConnectServerConfirmViewModel)
        case walletConnectDappList
        case walletConnectSelectAccount
        case redPackageSelectAccount
        case changeEmail
        case setupEmail
        case setupPhoneNumber
        case changePhoneNumber
        case remoteBackupActions(viewModel: RemoteBackupActionsViewModel)
        case mergeToLocal(viewModel: RemoteBackupActionsViewModel)
        case showTransakIntegration
        case pluginConfiguration
        case openRedPackage(payload: RedPacketInteractivePayload,
                            delegate: OpenRedPackageViewControllerDelegate?,
                            requestId: String)
        case shareRedPackage(
            _ payload: RedPacketInteractivePayload,
            claimedAmount: BigUInt?,
            shareActionDelegate: RedPacketShareDelegate?
        )
        case moveBackupData
        case debug
    }
    
    func setupMainWindow(window: UIWindow) {
        let maskSocialVC = MaskSocialViewController(socialPlatform: settings.currentProfileSocialPlatform)
        let naviVC = NavigationController(rootViewController: maskSocialVC)
        window.rootViewController = naviVC
        window.makeKeyAndVisible()
        
        present(scene: .mainTab(selectedTab: .personas), transition: .modal(animated: false, adaptiveDelegate: maskSocialVC))
        
        // If all data (legacy wallets info and indexedDB data) has migrated to
        // native side, we do not need to wait for the extension JS scripts to
        // finish executing
        let needToWaitExtensionFinishLoaded =
        !settings.legacyWalletsImported || !settings.indexedDBDataMigrated
        if needToWaitExtensionFinishLoaded {
            let welcomeVC = WelcomeViewController()
            welcomeVC.modalPresentationStyle = .fullScreen
            welcomeVC.modalPresentationCapturesStatusBarAppearance = true
            UIApplication.getTopViewController()?.present(welcomeVC, animated: false, completion: nil)
        }
    }

    func setup(window: UIWindow) {
        self.window = window
        
        if !settings.hasShownGuide || !settings.didPresentWizard {
            settings.hasShownGuide = true
            settings.didPresentWizard = true
            showGuide(window: window)
            return
        }
        setupMainWindow(window: window)
    }
    
    private func showGuide(window: UIWindow) {
        let guideVC = MaskHostViewController(rootView: GuideView() { [weak self] in
            self?.setupMainWindow(window: window)
            self?.present(scene: .emptyIdentity, transition: .detail(animated: false))
        })
        window.rootViewController = guideVC
        window.makeKeyAndVisible()
    }

    // swiftlint:disable cyclomatic_complexity
    func present(scene: Scene, transition: Transition, from: UIViewController? = nil, completion: (() -> Void)? = nil) {
        let vc = get(scene: scene)

        switch scene {
        case let .root(window, subScene):
            let vc = get(scene: subScene)
//            if maskBrowser.browser.tabs.backgroundTab.webView.superview != nil {
//                maskBrowser.browser.tabs.backgroundTab.webView.superview?.removeFromSuperview()
//                vc.view.addSubview(maskBrowser.browser.tabs.backgroundTab.webView)
//                vc.view.sendSubviewToBack(maskBrowser.browser.tabs.backgroundTab.webView)
//            }
            window.rootViewController = vc
            window.makeKeyAndVisible()

        default:
            let fromController: UIViewController? = {
                // If presentVC is designated, just use it
                // Otherwise, search for the most top viewController
                from ?? UIApplication.getTopViewController()
            }()
            guard let presentVC = fromController else {
                assertionFailure("Fail to find the presenting UIViewController")
                return
            }

            switch transition {
            case .root:
                assertionFailure("Should only use for root scene")

            case .detail:
                // Get the UINavigationController to push the
                presentVC.show(vc, sender: from)
                completion?()

            case .panModel:
                let presenter = {
                    presentVC.navigationController ?? presentVC
                }()
                showPanModal(presentVC: presenter, vc: vc)

            case let .modal(animated, delegate):
                vc.presentationController?.delegate = delegate
                vc.modalPresentationCapturesStatusBarAppearance = true
                presentVC.present(vc, animated: animated, completion: completion)

            case let .alertController(completion):
                vc.modalPresentationStyle = .overFullScreen
                vc.modalPresentationCapturesStatusBarAppearance = true
                presentVC.present(vc, animated: false, completion: completion)
                
            case let .replaceCurrentNavigation(tab, animated, selected):
                MainTabBarController.currentTabBarController()?.replace(tab: tab, with: vc, animated: animated, selected: selected)

            case let .replaceWalletTab(animated):
                MainTabBarController.currentTabBarController()?.replace(tab: .wallet, with: vc, animated: animated)

            case .popup:
                var controller: UIViewController? = presentVC
                while controller != nil, controller?.isBeingDismissed == true {
                    controller = controller?.presentingViewController
                }

                controller?.present(vc, animated: true, completion: {})
                
            case let .presentActivity(animated, from, completion):
                if UIDevice.current.userInterfaceIdiom == .pad {
                    vc.popoverPresentationController?.sourceView = from
                    vc.preferredContentSize = .zero
                }
                vc.modalPresentationCapturesStatusBarAppearance = true
                presentVC.present(vc, animated: animated, completion: completion)
            }
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            let window = UIApplication.shared.windows.first { window in
                window.isKeyWindow == true
            }
            window?.bringSubviewToFront(self.maskBrowser.browser.tabs.backgroundTab.webView)
        }
        
        completion?()
    }
    
    private func showPanModal(presentVC: UIViewController, vc: UIViewController) {
            guard let panViewController = vc as? PanModalPresentable.LayoutType else {
                return
            }
            let presenter = {
                presentVC.navigationController ?? presentVC
            }()
            presenter.presentPanModal(panViewController)
        }
}

extension Coordinator {
    // swiftlint:disable cyclomatic_complexity function_body_length
    private func get(scene: Scene) -> UIViewController {
        switch scene {
        case .root:
            return UIViewController()
            
        case .welcome:
            return WelcomeViewController()
            
        case let .mainTab(selectedTab):
            let mainTab = MainTabBarController()
            mainTab.selectedIndex = selectedTab.rawValue
            return mainTab
        
        case .persona:
            return PersonasViewController()
            
        case .personaAvatar:
            return PersonaAvatarViewController()

        case let .cropImage(image):
            return CropImageViewController(image: image)
            
        case let .termsOfService(walletStartType):
            let termsOfServiceViewController = TermsOfServiceViewController(walletStartType: walletStartType)
            return termsOfServiceViewController

        case let .createWalletWithName(walletStartType):
            let viewController = CreateWalletWithNameViewController()
            viewController.viewModel.walletStartType = walletStartType
            let vc = KeyboardHandlerViewController(content: viewController, paddingTop: 0)
            return vc

        case let .biometryRecognition(walletStartType):
            let viewController = BiometryRecognitionViewController()
            viewController.viewModel.walletStartType = walletStartType
            return viewController

        case let .mnemonicWord(name):
            let viewController = MnemonicViewController()
            viewController.viewModel.name = name
            return viewController

        case let .mnemonicVerify(name, words):
            let viewController = MnemonicVerifyViewController()
            viewController.viewModel.name = name
            viewController.viewModel.words = words
            return viewController

        case .balance:
            let viewController = BalanceViewController()
            return viewController

        case .walletList:
            return WalletListViewController()

        case let .selectItemViewController(viewModel):
            return SelectItemViewController(viewModel: viewModel)

        case let .selectActionViewController(viewModel):
            return SelectActionViewController(viewModel: viewModel)

        case let .alertController(alertController):
            if let popoverPresentationController = alertController.popoverPresentationController {
                assert(
                    popoverPresentationController.sourceView != nil ||
                        popoverPresentationController.sourceRect != .zero ||
                        popoverPresentationController.barButtonItem != nil
                )
            }
            return alertController

        case let .activityViewController(activityViewController, sourceView, barButtonItem):
            activityViewController.popoverPresentationController?.sourceView = sourceView
            activityViewController.popoverPresentationController?.barButtonItem = barButtonItem
            return activityViewController
            
        case let .importWallet(name, password):
            let viewController = WalletImportViewController(name: name, password: password)
            return viewController

        case .selectNetwork:
            let viewController = SelectNetworkViewController()
            return viewController

        case let .importFromMnemonic(name, password):
            return ImportMnemonicViewController(name: name, password: password)

        case let .importFromPrivateKey(name, password):
            return ImportPrivateKeyViewController(name: name, password: password)

        case let .importFromKeystore(name, password):
            return ImportKeystoreViewController(name: name, password: password)

        case .walletListAdd:
            return WalletListAddViewController()

        case let .walletEdit(account, sender):
            return WalletEditViewController(account: account, renameSourceView: sender)

        case let .walletRename(account):
            return WalletRenameViewController(account: account)

        case let .walletDelete(account):
            let vc = WalletDeleteViewController(account: account)
            let wrapper = ModalViewController(viewController: vc)
            wrapper.modalTransitionStyle = .crossDissolve
            return wrapper
            
        case .walletMultichainAlert:
            let vc = WalletImportMultiChainAlert()
            let wrapper = ModalViewController(viewController: vc)
            wrapper.modalTransitionStyle = .crossDissolve
            return wrapper

        case let .walletDetail(account, sourceView):
            return WalletDetailViewController(account: account, sourceView: sourceView)

        case .walletBackup:
            return WalletBackupViewController()

        case let .walletUnlock(cancelable, completion):
            return UnlockViewController(cancelable: cancelable, completion: completion)

        case .sendTransaction(let param):
            let sendVc = SendTransactionViewController()
            sendVc.sendParam = param
            return sendVc

        case let .sendTransactionConfirm(param, tokenId):
            let sendConfirmVc = SendTransactionConfirmViewController()
            sendConfirmVc.toAddress = param.displayText
            sendConfirmVc.param = param
            sendConfirmVc.tokenId = tokenId
            return sendConfirmVc

        case let .sendNFTTransactionConfirm(param, token):
            let sendConfirmVc = SendNFTTokenViewController(token: token)
            sendConfirmVc.toAddress = param.displayText
            sendConfirmVc.param = param
            return sendConfirmVc

        case let .sendTransacationTokenlist(viewController, isNftList):
            let tokenListVc = SearchTokenListViewController()
            tokenListVc.isNftTokenList = isNftList
            tokenListVc.delegate = viewController
            return tokenListVc
        
        case let .sendTransactionPopConfirm(sendConfirmViewModel,
                                            toAddress,
                                            amount):
            let popVc = SendTransactionCofirmPopViewController(
                sendConfirmViewModel: sendConfirmViewModel,
                toAddress: toAddress,
                amount: amount
            )
            return popVc
            
        case let .maskSendTransactionPopView(delegate,
                                             transaction,
                                             transactionOptions,
                                             request):
            let popVc = SendConfirmPopViewController(transaction: transaction,
                                                     transactionOptions: transactionOptions,
                                                     request: request)
            popVc.web3delegate = delegate
            return popVc
            
        case let .maskSendWalletConnectTransactionPopView(delegate,
                                                          transaction,
                                                          transactionOptions,
                                                          request):
            let popVc = SendConfirmPopViewController(transaction: transaction,
                                                     transactionOptions: transactionOptions,
                                                     request: request)
            popVc.walletConnectDelegate = delegate
            return popVc
            
        case let .maskSendResolverTransactionPopView(resolver,
                                                     transaction,
                                                     transactionOptions):
            let popVc = SendConfirmPopViewController(transaction: transaction,
                                                     transactionOptions: transactionOptions,
                                                     resolver: resolver)
            return popVc
            
        case let .scanBase(viewController):
            let scanBasVc = ScannerLineViewController()
            scanBasVc.scanResultDelegate = viewController
            return scanBasVc

        case let .rename(viewModel):
            return RenameViewController(viewModel: viewModel)

        case .pluginRiskWarning:
            return PluginAlertViewController()

        case let .personaAction(viewModel):
            return PersonaActionViewController(viewModel: viewModel)
            
        case .personaList:
            return PersonaListViewController()

        case .personaWelcome:
            let viewController = PersonaWelcomeViewController()
            return viewController

        case let .personaExportPrivateKey(personaIdentifier):
            let viewModel = PersonaExportPrivateKeyViewModel(personaIdentifier: personaIdentifier)
            let viewController = PersonaExportPrivateKeyViewController(viewModel: viewModel)
            return viewController
            
        case let .tokenDetail(token):
            let viewController = TokenDetailViewController(tokenModel: token)
            return viewController
            
        case let .nftDetail(token):
            let viewController = NFTDetailViewController(nftTokenModel: token)
            return viewController

        case let .nftAction(token):
            let viewController = NFTActionViewController(nftTokenModel: token)
            return viewController
            
        case .walletHistory:
            return WalletHistoryViewController()
            
        case let .safariView(url):
            return MaskSafariUtil.createSfSafariVC(url: url)

        case let .gasFee(viewController, gasLimit):
            let gasFee = GasFeeChooseViewController()
            gasFee.delegate = viewController
            gasFee.gasLimit = gasLimit
            return gasFee

        case .setPassword:
            let vc = SetPasswordViewController()
            return KeyboardHandlerViewController(content: vc)

        case .changePasswordStep1:
            let vc = ChangePasswordStep1ViewController()
            return KeyboardHandlerViewController(content: vc)

        case .changePasswordStep2:
            let vc = ChangePasswordViewController()
            return KeyboardHandlerViewController(content: vc)

        case let .addContact(param):
            return AddContactViewController(param: param)

        case let .receiveAddress(network, token, address):
            let viewController = WalletAddrReceiveViewController(network: network, address: address, token: token)
            return viewController

        case .emptyWallet:
            let viewController = WalletEmptyViewController()
            return viewController

        case .emptyIdentity:
            let viewController = IdentityEmptyViewController()
            return viewController

        case .identityCreate:
            let viewController = IdentityCreateViewController()
            return viewController

        case let .identityRecovery(from):
            let viewController = IdentityRecoveryViewController(from: from)
            return viewController

        case .identityMnemonicImport:
            let viewController = IdentityMnemonicImportViewController()
            return viewController

        case .identityPrivateKeyImport:
            let viewController = IdentityPrivateKeyImportViewController()
            return viewController

        case let .derivationPath(name, mnemonic):
            let viewController = DerivationPathViewController(name: name, mnemonic: mnemonic)
            return viewController
            
        case let .backupPasswordVerify(verifyPassedCompletion):
            let vc = BackupPasswordVerifyViewController(
                destination: .verifyPassedCompletion(completion: verifyPassedCompletion)
            )
            return KeyboardHandlerViewController(content: vc)

        case .chooseBackupStrategy:
            return SettingBackupViewController()
        
        case .backupReminder:
            return SettingBackupViewController(style: .reminder)
            
        case let .localBackup(type, cloudVerifyResult):
            return LocalBackupViewController(type: type, cloudVerifyResult: cloudVerifyResult)

        case let .pickLocalRestoreDataInInit(sender):
            return RestoreDataPickerController(destination: .root, sender: sender)
            
        case let .pickLocalRestoreDataInSetting(sender):
            return RestoreDataPickerController(destination: .setting, sender: sender)

        case let .pickRemoteDataAndLogin(data):
            return RemoteRestoreInfoController(verifyData: data)

        case .remoteResotreVerify:
            return RemoteRestoreVerifyController()

        case let .localRestoreEncryptBackup(data, destination):
            return RestoreDataPreviewController(data, destination: destination)
            
        case let .localRestore(url, destination):
            return RestoreDataPreviewController(url, destination: destination)
            
        case let .maskSocial(socialPlatform):
            let maskSocialVC = MaskSocialViewController(socialPlatform: socialPlatform)
            let naviVC = NavigationController(rootViewController: maskSocialVC)
            return naviVC
            
        case let .maskConnectingSocial(socialPlatform, personaIdentifier):
            let maskSocialVC = MaskConnectingSocialViewController(socialPlatform: socialPlatform, personaIdentifier: personaIdentifier)
            return maskSocialVC
            
        case let .detectProfiles(profiles, personaIdentifier, delegate):
            return SocialProfileDetectViewController(profiles: profiles, personaIdentifier: personaIdentifier, delegate: delegate)

        case .connectableSocialList:
            return ConnectableSocialListPanModelController()

        case .setBackupPassword:
            let vc = SetBackupPasswordViewController()
            return KeyboardHandlerViewController(content: vc)
            
        case .changeBackupPasswordStep1:
            let vc = ChangeBackupPasswordViewController()
            return KeyboardHandlerViewController(content: vc)
            
        case .changeBackupPasswordStep2:
            let vc = ChangeBackupPasswordStep2ViewController()
            return KeyboardHandlerViewController(content: vc)

        case let .verifyBackupFileEncryptSeed(completion, fileURL):
            return RestoreLocalFileValidationController(
                fileURL: fileURL,
                completion: completion
            )
            
        case .walletConnectStart:
            return WalletConnectStartViewController()
        
        case .walletConnectConnecting:
            return WalletConnectConnectingViewController()
            
        case .walletConnectFail:
            return WalletConnectFailedViewController()
        
        case .commonScan:
            return MaskScanViewController()
        
        case let .walletConnectServerConfirm(viewModel):
            return WalletConnectServerConfirmViewController(viewModel: viewModel)

        case .walletConnectDappList:
            return WalletConnectDappListViewController()
            
        case .walletConnectSelectAccount:
            return WalletConnectSelectAccountViewController()
            
        case .redPackageSelectAccount:
            let vc = WalletConnectSelectAccountViewController()
            vc.viewModel.showWalletConnect = true
            return vc
            
        case .setupEmail:
            return RemoteInfoBindingViewController()

        case .changeEmail:
            return RemoteInfoBindingViewController(strategy: .updateEmail)

        case .setupPhoneNumber:
            return RemoteInfoBindingViewController(strategy: .setupPhoneNumber)

        case .changePhoneNumber:
            return RemoteInfoBindingViewController(strategy: .updatePhoneNumber)
            
        case .remoteBackupGetVerifyCode:
            return RemoteBackupVerifyViewController()
            
        case let .remoteBackupActions(viewModel):
            let vc = RemoteBackupActionsViewController(viewModel: viewModel)
            return vc
            
        case let .mergeToLocal(viewModel):
            return MergeToLocalViewController(
                viewModel: MergeToLocalViewModel(actionsViewModel: viewModel)
            )

        case .showTransakIntegration:
            return TransakIntegratingController()

        case .pluginConfiguration: return PluginSettingViewController()
            
        case let .openRedPackage(payload, delegate, requestId):
            let viewModel = OpenRedPackageViewModel(payload: payload)
            let viewController = OpenRedPackageViewController(viewModel: viewModel,
                                                              delegate: delegate,
                                                              requestId: requestId)
            return viewController

        case let .shareRedPackage(payload, claimedAmount, shareActionDelegate):
            return RedPacketShareSheet(
                claimedAmount: claimedAmount,
                payload: payload,
                shareDelegate: shareActionDelegate
            )
        
        case .moveBackupData:
            return MoveBackupDataViewController()
            
        case .debug:
            return UIHostingController(rootView: DebugView())
        }
    }
    // swiftlint:enable cyclomatic_complexity function_body_length
    
    func dismissMainTabBarViewController(animated: Bool) {
        guard let keyWindow = UIApplication.shared.windows.first(where: \.isKeyWindow) else {
            return
        }
        if let mainTabVC = keyWindow.rootViewController?.presentedViewController as? MainTabBarController {
            mainTabVC.dismiss(animated: animated, completion: nil)
        }
    }
}

enum CoordinatorInjectKey: InjectValueKey {
    static var defaultInjectValue = Coordinator.main
}

extension InjectValues {
    var mainCoordinator: Coordinator {
        Self[CoordinatorInjectKey.self]
    }
}
// swiftlint:enable file_length
