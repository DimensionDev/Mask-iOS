// swiftlint:disable all
// Generated using SwiftGen — https://github.com/SwiftGen/SwiftGen

#if os(macOS)
  import AppKit
#elseif os(iOS)
  import UIKit
#elseif os(tvOS) || os(watchOS)
  import UIKit
#endif

// Deprecated typealiases
@available(*, deprecated, renamed: "ColorAsset.Color", message: "This typealias will be removed in SwiftGen 7.0")
internal typealias AssetColorTypeAlias = ColorAsset.Color
@available(*, deprecated, renamed: "ImageAsset.Image", message: "This typealias will be removed in SwiftGen 7.0")
internal typealias AssetImageTypeAlias = ImageAsset.Image

// swiftlint:disable superfluous_disable_command file_length implicit_return

// MARK: - Asset Catalogs

// swiftlint:disable identifier_name line_length nesting type_body_length type_name
internal enum Asset {
  internal enum Colors {
    internal enum AccountCard {
      internal static let addressText = ColorAsset(name: "Colors/AccountCard/address_text")
      internal static let buttonBg = ColorAsset(name: "Colors/AccountCard/button_bg")
      internal enum Chains {
        internal static let all1 = ColorAsset(name: "Colors/AccountCard/chains/all1")
        internal static let all2 = ColorAsset(name: "Colors/AccountCard/chains/all2")
        internal static let all3 = ColorAsset(name: "Colors/AccountCard/chains/all3")
        internal static let arbitrum1 = ColorAsset(name: "Colors/AccountCard/chains/arbitrum1")
        internal static let arbitrum2 = ColorAsset(name: "Colors/AccountCard/chains/arbitrum2")
        internal static let arbitrum3 = ColorAsset(name: "Colors/AccountCard/chains/arbitrum3")
        internal static let bsc1 = ColorAsset(name: "Colors/AccountCard/chains/bsc1")
        internal static let bsc2 = ColorAsset(name: "Colors/AccountCard/chains/bsc2")
        internal static let bsc3 = ColorAsset(name: "Colors/AccountCard/chains/bsc3")
        internal static let eth1 = ColorAsset(name: "Colors/AccountCard/chains/eth1")
        internal static let eth2 = ColorAsset(name: "Colors/AccountCard/chains/eth2")
        internal static let eth3 = ColorAsset(name: "Colors/AccountCard/chains/eth3")
        internal static let matic1 = ColorAsset(name: "Colors/AccountCard/chains/matic1")
        internal static let matic2 = ColorAsset(name: "Colors/AccountCard/chains/matic2")
        internal static let matic3 = ColorAsset(name: "Colors/AccountCard/chains/matic3")
        internal static let optimism1 = ColorAsset(name: "Colors/AccountCard/chains/optimism1")
        internal static let optimism2 = ColorAsset(name: "Colors/AccountCard/chains/optimism2")
        internal static let optimism3 = ColorAsset(name: "Colors/AccountCard/chains/optimism3")
        internal static let xdai1 = ColorAsset(name: "Colors/AccountCard/chains/xdai1")
        internal static let xdai2 = ColorAsset(name: "Colors/AccountCard/chains/xdai2")
        internal static let xdai3 = ColorAsset(name: "Colors/AccountCard/chains/xdai3")
      }
      internal static let nameText = ColorAsset(name: "Colors/AccountCard/name_text")
      internal static let wcBackground1 = ColorAsset(name: "Colors/AccountCard/wcBackground1")
      internal static let wcBackground2 = ColorAsset(name: "Colors/AccountCard/wcBackground2")
      internal static let wcBackground3 = ColorAsset(name: "Colors/AccountCard/wcBackground3")
    }
    internal enum Background {
      internal static let bar = ColorAsset(name: "Colors/Background/bar")
      internal static let blue = ColorAsset(name: "Colors/Background/blue")
      internal static let blue1 = ColorAsset(name: "Colors/Background/blue1")
      internal static let blur = ColorAsset(name: "Colors/Background/blur")
      internal static let blurred = ColorAsset(name: "Colors/Background/blurred")
      internal static let container = ColorAsset(name: "Colors/Background/container")
      internal static let dark = ColorAsset(name: "Colors/Background/dark")
      internal static let disable = ColorAsset(name: "Colors/Background/disable")
      internal static let gradient = ColorAsset(name: "Colors/Background/gradient")
      internal static let light = ColorAsset(name: "Colors/Background/light")
      internal static let lightBlue = ColorAsset(name: "Colors/Background/lightBlue")
      internal static let mask = ColorAsset(name: "Colors/Background/mask")
      internal static let normal = ColorAsset(name: "Colors/Background/normal")
      internal static let selected = ColorAsset(name: "Colors/Background/selected")
      internal static let toast = ColorAsset(name: "Colors/Background/toast")
      internal static let twitterMask = ColorAsset(name: "Colors/Background/twitterMask")
      internal static let walletConnect = ColorAsset(name: "Colors/Background/walletConnect")
      internal static let warningsBg = ColorAsset(name: "Colors/Background/warnings-bg")
      internal static let yellow = ColorAsset(name: "Colors/Background/yellow")
    }
    internal enum Balances {
      internal static let expandButtonBackground = ColorAsset(name: "Colors/Balances/expandButtonBackground")
      internal static let tokenBackground = ColorAsset(name: "Colors/Balances/tokenBackground")
    }
    internal enum ConnectTip {
      internal static let background1 = ColorAsset(name: "Colors/ConnectTip/background1")
      internal static let background2 = ColorAsset(name: "Colors/ConnectTip/background2")
    }
    internal enum Control {
      internal enum TextView {
        internal static let placeholderColor = ColorAsset(name: "Colors/Control/TextView/placeholderColor")
      }
    }
    internal enum Gradient {
      internal static let blue1 = ColorAsset(name: "Colors/Gradient/blue1")
      internal static let blue2 = ColorAsset(name: "Colors/Gradient/blue2")
      internal static let guide1 = ColorAsset(name: "Colors/Gradient/guide1")
      internal static let guide2 = ColorAsset(name: "Colors/Gradient/guide2")
    }
    internal enum RedPackage {
      internal static let background = ColorAsset(name: "Colors/RedPackage/background")
      internal static let border = ColorAsset(name: "Colors/RedPackage/border")
      internal static let shareBackground = ColorAsset(name: "Colors/RedPackage/shareBackground")
      internal static let shareButtonTitle = ColorAsset(name: "Colors/RedPackage/shareButtonTitle")
      internal static let shareGradientLeading = ColorAsset(name: "Colors/RedPackage/shareGradientLeading")
      internal static let shareGradientTrailing = ColorAsset(name: "Colors/RedPackage/shareGradientTrailing")
    }
    internal enum Social {
      internal static let connectHintBannerBg = ColorAsset(name: "Colors/Social/connectHintBannerBg")
      internal static let connectHintText = ColorAsset(name: "Colors/Social/connectHintText")
    }
    internal enum Text {
      internal static let black = ColorAsset(name: "Colors/Text/black")
      internal static let dark = ColorAsset(name: "Colors/Text/dark")
      internal static let darklight = ColorAsset(name: "Colors/Text/darklight")
      internal static let light = ColorAsset(name: "Colors/Text/light")
      internal static let lighter = ColorAsset(name: "Colors/Text/lighter")
      internal static let link = ColorAsset(name: "Colors/Text/link")
      internal static let main = ColorAsset(name: "Colors/Text/main")
      internal static let normal = ColorAsset(name: "Colors/Text/normal")
    }
    internal enum TokenDetail {
      internal static let background1 = ColorAsset(name: "Colors/TokenDetail/Background1")
      internal static let background2 = ColorAsset(name: "Colors/TokenDetail/Background2")
      internal static let shadow = ColorAsset(name: "Colors/TokenDetail/Shadow")
      internal enum Chains {
        internal static let arbitrum = ColorAsset(name: "Colors/TokenDetail/chains/arbitrum")
        internal static let bsc = ColorAsset(name: "Colors/TokenDetail/chains/bsc")
        internal static let eth = ColorAsset(name: "Colors/TokenDetail/chains/eth")
        internal static let matic = ColorAsset(name: "Colors/TokenDetail/chains/matic")
        internal static let optimism = ColorAsset(name: "Colors/TokenDetail/chains/optimism")
        internal static let xdai = ColorAsset(name: "Colors/TokenDetail/chains/xdai")
      }
    }
    internal enum Twitter {
      internal static let buttonText = ColorAsset(name: "Colors/Twitter/buttonText")
      internal static let main = ColorAsset(name: "Colors/Twitter/main")
      internal static let mask = ColorAsset(name: "Colors/Twitter/mask")
      internal static let second = ColorAsset(name: "Colors/Twitter/second")
      internal static let strong = ColorAsset(name: "Colors/Twitter/strong")
    }
    internal enum Public {
      internal static let blue = ColorAsset(name: "Colors/public/Blue")
      internal static let info = ColorAsset(name: "Colors/public/Info")
      internal static let popupShadow = ColorAsset(name: "Colors/public/PopupShadow")
      internal static let s1 = ColorAsset(name: "Colors/public/S1")
      internal static let shadow = ColorAsset(name: "Colors/public/Shadow")
      internal static let success = ColorAsset(name: "Colors/public/Success")
      internal enum Background {
        internal static let blue = ColorAsset(name: "Colors/public/background/blue")
        internal static let dark = ColorAsset(name: "Colors/public/background/dark")
        internal static let info = ColorAsset(name: "Colors/public/background/info")
      }
      internal static let error = ColorAsset(name: "Colors/public/error")
      internal static let gradientBlue = ColorAsset(name: "Colors/public/gradientBlue")
      internal static let infoBg = ColorAsset(name: "Colors/public/info-bg")
      internal static let systemGreen = ColorAsset(name: "Colors/public/systemGreen")
      internal static let warnings = ColorAsset(name: "Colors/public/warnings")
      internal static let white = ColorAsset(name: "Colors/public/white")
    }
    internal static let segmentShadow = ColorAsset(name: "Colors/segmentShadow")
    internal enum Shadow {
      internal static let accoundCard = ColorAsset(name: "Colors/shadow/accoundCard")
      internal enum Card {
        internal static let all = ColorAsset(name: "Colors/shadow/card/all")
        internal static let arbitrum = ColorAsset(name: "Colors/shadow/card/arbitrum")
        internal static let bsc = ColorAsset(name: "Colors/shadow/card/bsc")
        internal static let eth = ColorAsset(name: "Colors/shadow/card/eth")
        internal static let matic = ColorAsset(name: "Colors/shadow/card/matic")
        internal static let wallet = ColorAsset(name: "Colors/shadow/card/wallet")
        internal static let xdai = ColorAsset(name: "Colors/shadow/card/xdai")
      }
      internal static let primaryButton = ColorAsset(name: "Colors/shadow/primaryButton")
      internal static let sendButton = ColorAsset(name: "Colors/shadow/sendButton")
      internal static let sesondaryButton = ColorAsset(name: "Colors/shadow/sesondaryButton")
      internal static let socialShadow = ColorAsset(name: "Colors/shadow/socialShadow")
    }
  }
  internal enum Icon {
    internal enum Arrows {
      internal static let `right` = ImageAsset(name: "Icon/Arrows/Right")
      internal static let backArrow = ImageAsset(name: "Icon/Arrows/backArrow")
      internal static let celllRight = ImageAsset(name: "Icon/Arrows/celllRight")
      internal static let down = ImageAsset(name: "Icon/Arrows/down")
      internal static let drop = ImageAsset(name: "Icon/Arrows/drop")
      internal static let `left` = ImageAsset(name: "Icon/Arrows/left")
    }
    internal enum Cell {
      internal static let cellCheck = ImageAsset(name: "Icon/Cell/cellCheck")
    }
    internal enum Logo {
      internal static let largeMask = ImageAsset(name: "Icon/Logo/largeMask")
      internal static let littleMask = ImageAsset(name: "Icon/Logo/littleMask")
      internal static let mask = ImageAsset(name: "Icon/Logo/mask")
    }
    internal static let close = ImageAsset(name: "Icon/close")
    internal static let insecureEye = ImageAsset(name: "Icon/insecureEye")
    internal static let secureEye = ImageAsset(name: "Icon/secureEye")
  }
  internal enum Images {
    internal enum Scene {
      internal enum Alert {
        internal static let error = ImageAsset(name: "Images/Scene/Alert/error")
        internal static let success = ImageAsset(name: "Images/Scene/Alert/success")
        internal static let warning = ImageAsset(name: "Images/Scene/Alert/warning")
      }
      internal enum Balance {
        internal static let accountBgMask1 = ImageAsset(name: "Images/Scene/Balance/accountBgMask1")
        internal static let accountBgMask2 = ImageAsset(name: "Images/Scene/Balance/accountBgMask2")
        internal static let accountBgMask3 = ImageAsset(name: "Images/Scene/Balance/accountBgMask3")
        internal static let accountBgWc = ImageAsset(name: "Images/Scene/Balance/accountBgWc")
        internal enum Chain {
          internal static let all = ImageAsset(name: "Images/Scene/Balance/chain/all")
          internal static let arbitrium = ImageAsset(name: "Images/Scene/Balance/chain/arbitrium")
          internal static let bsc = ImageAsset(name: "Images/Scene/Balance/chain/bsc")
          internal static let eth = ImageAsset(name: "Images/Scene/Balance/chain/eth")
          internal static let matic = ImageAsset(name: "Images/Scene/Balance/chain/matic")
          internal static let xdai = ImageAsset(name: "Images/Scene/Balance/chain/xdai")
        }
        internal enum ChainBg {
          internal static let all = ImageAsset(name: "Images/Scene/Balance/chainBg/all")
          internal static let arbitrium = ImageAsset(name: "Images/Scene/Balance/chainBg/arbitrium")
          internal static let bsc = ImageAsset(name: "Images/Scene/Balance/chainBg/bsc")
          internal static let eth = ImageAsset(name: "Images/Scene/Balance/chainBg/eth")
          internal static let matic = ImageAsset(name: "Images/Scene/Balance/chainBg/matic")
          internal static let xdai = ImageAsset(name: "Images/Scene/Balance/chainBg/xdai")
        }
        internal static let copyButton = ImageAsset(name: "Images/Scene/Balance/copyButton")
        internal static let emptyToken = ImageAsset(name: "Images/Scene/Balance/emptyToken")
        internal static let expandArrowDown = ImageAsset(name: "Images/Scene/Balance/expandArrowDown")
        internal static let expandArrowRight = ImageAsset(name: "Images/Scene/Balance/expandArrowRight")
        internal static let expandArrowUp = ImageAsset(name: "Images/Scene/Balance/expandArrowUp")
        internal static let moreButton = ImageAsset(name: "Images/Scene/Balance/moreButton")
        internal static let nativeWallet = ImageAsset(name: "Images/Scene/Balance/nativeWallet")
        internal static let receiveButton = ImageAsset(name: "Images/Scene/Balance/receiveButton")
        internal static let receiveButtonBlue = ImageAsset(name: "Images/Scene/Balance/receiveButtonBlue")
        internal static let sendButton = ImageAsset(name: "Images/Scene/Balance/sendButton")
        internal enum SmallChain {
          internal static let arbitrum = ImageAsset(name: "Images/Scene/Balance/smallChain/arbitrum")
          internal static let bsc = ImageAsset(name: "Images/Scene/Balance/smallChain/bsc")
          internal static let eth = ImageAsset(name: "Images/Scene/Balance/smallChain/eth")
          internal static let matic = ImageAsset(name: "Images/Scene/Balance/smallChain/matic")
          internal static let xdai = ImageAsset(name: "Images/Scene/Balance/smallChain/xdai")
        }
        internal static let swapButton = ImageAsset(name: "Images/Scene/Balance/swapButton")
        internal static let tokenBgCircleLarge = ImageAsset(name: "Images/Scene/Balance/tokenBgCircleLarge")
        internal static let tokenBgCircleSmall = ImageAsset(name: "Images/Scene/Balance/tokenBgCircleSmall")
        internal static let tokenIconPlaceholder = ImageAsset(name: "Images/Scene/Balance/tokenIconPlaceholder")
        internal static let walletConnectScan = ImageAsset(name: "Images/Scene/Balance/walletConnectScan")
      }
      internal enum BioID {
        internal static let faceIDInButton = ImageAsset(name: "Images/Scene/BioID/faceIDInButton")
        internal static let faceIDInSetting = ImageAsset(name: "Images/Scene/BioID/faceIDInSetting")
        internal static let touchIDInButton = ImageAsset(name: "Images/Scene/BioID/touchIDInButton")
        internal static let touchIDInSetting = ImageAsset(name: "Images/Scene/BioID/touchIDInSetting")
      }
      internal enum BiometryRecognition {
        internal static let facialRecognition = ImageAsset(name: "Images/Scene/BiometryRecognition/facialRecognition")
        internal static let touchIDRecognition = ImageAsset(name: "Images/Scene/BiometryRecognition/touchIDRecognition")
      }
      internal enum Empty {
        internal static let emptyBox = ImageAsset(name: "Images/Scene/Empty/EmptyBox")
      }
      internal enum Guide {
        internal static let guide1 = ImageAsset(name: "Images/Scene/Guide/guide_1")
        internal static let guide2 = ImageAsset(name: "Images/Scene/Guide/guide_2")
        internal static let guide3 = ImageAsset(name: "Images/Scene/Guide/guide_3")
        internal static let guide4 = ImageAsset(name: "Images/Scene/Guide/guide_4")
        internal static let guidePage1 = ImageAsset(name: "Images/Scene/Guide/guide_page_1")
        internal static let guidePage2 = ImageAsset(name: "Images/Scene/Guide/guide_page_2")
        internal static let guidePage3 = ImageAsset(name: "Images/Scene/Guide/guide_page_3")
        internal static let guidePage4 = ImageAsset(name: "Images/Scene/Guide/guide_page_4")
        internal static let net = ImageAsset(name: "Images/Scene/Guide/net")
      }
      internal enum Identity {
        internal static let icloud = ImageAsset(name: "Images/Scene/Identity/icloud")
        internal static let iphone = ImageAsset(name: "Images/Scene/Identity/iphone")
        internal static let personas = ImageAsset(name: "Images/Scene/Identity/personas")
        internal static let privateKey = ImageAsset(name: "Images/Scene/Identity/privateKey")
      }
      internal enum Mnemonic {
        internal static let refresh = ImageAsset(name: "Images/Scene/Mnemonic/refresh")
      }
      internal enum Nft {
        internal static let more = ImageAsset(name: "Images/Scene/NFT/More")
        internal static let ethscan = ImageAsset(name: "Images/Scene/NFT/ethscan")
        internal static let savephoto = ImageAsset(name: "Images/Scene/NFT/savephoto")
        internal static let website = ImageAsset(name: "Images/Scene/NFT/website")
      }
      internal enum Personas {
        internal static let plus = ImageAsset(name: "Images/Scene/Personas/Plus")
        internal static let add = ImageAsset(name: "Images/Scene/Personas/add")
        internal static let addUser = ImageAsset(name: "Images/Scene/Personas/addUser")
        internal static let backup = ImageAsset(name: "Images/Scene/Personas/backup")
        internal static let changeOrAdd = ImageAsset(name: "Images/Scene/Personas/changeOrAdd")
        internal static let delete = ImageAsset(name: "Images/Scene/Personas/delete")
        internal static let download = ImageAsset(name: "Images/Scene/Personas/download")
        internal static let emptyContact = ImageAsset(name: "Images/Scene/Personas/emptyContact")
        internal static let emptyPersona = ImageAsset(name: "Images/Scene/Personas/emptyPersona")
        internal static let exportPrivateKey = ImageAsset(name: "Images/Scene/Personas/exportPrivateKey")
        internal static let facebook = ImageAsset(name: "Images/Scene/Personas/facebook")
        internal static let instagram = ImageAsset(name: "Images/Scene/Personas/instagram")
        internal static let logout = ImageAsset(name: "Images/Scene/Personas/logout")
        internal static let minds = ImageAsset(name: "Images/Scene/Personas/minds")
        internal static let recovery = ImageAsset(name: "Images/Scene/Personas/recovery")
        internal static let rename = ImageAsset(name: "Images/Scene/Personas/rename")
        internal static let twitter = ImageAsset(name: "Images/Scene/Personas/twitter")
        internal static let watermark = ImageAsset(name: "Images/Scene/Personas/watermark")
      }
      internal enum RedPackage {
        internal static let closeSquare = ImageAsset(name: "Images/Scene/RedPackage/closeSquare")
        internal static let redPackage = ImageAsset(name: "Images/Scene/RedPackage/redPackage")
        internal static let redPacketShare = ImageAsset(name: "Images/Scene/RedPackage/redPacketShare")
        internal static let unavailableRedPacket = ImageAsset(name: "Images/Scene/RedPackage/unavailableRedPacket")
      }
      internal enum SendTransaction {
        internal static let addUser = ImageAsset(name: "Images/Scene/SendTransaction/AddUser")
        internal static let scan = ImageAsset(name: "Images/Scene/SendTransaction/Scan")
        internal static let upload = ImageAsset(name: "Images/Scene/SendTransaction/Upload")
        internal static let arrow = ImageAsset(name: "Images/Scene/SendTransaction/arrow")
        internal static let receive = ImageAsset(name: "Images/Scene/SendTransaction/receive")
        internal static let scanLine = ImageAsset(name: "Images/Scene/SendTransaction/scanLine")
        internal static let search = ImageAsset(name: "Images/Scene/SendTransaction/search")
      }
      internal enum Setting {
        internal enum Backup {
          internal static let folder = ImageAsset(name: "Images/Scene/Setting/Backup/folder")
          internal static let icloud = ImageAsset(name: "Images/Scene/Setting/Backup/icloud")
          internal static let iphone = ImageAsset(name: "Images/Scene/Setting/Backup/iphone")
        }
        internal static let appearance = ImageAsset(name: "Images/Scene/Setting/appearance")
        internal static let backupData = ImageAsset(name: "Images/Scene/Setting/backupData")
        internal static let backupPassword = ImageAsset(name: "Images/Scene/Setting/backup_password")
        internal static let changePassword = ImageAsset(name: "Images/Scene/Setting/change_password")
        internal static let dataSource = ImageAsset(name: "Images/Scene/Setting/dataSource")
        internal static let email = ImageAsset(name: "Images/Scene/Setting/email")
        internal static let language = ImageAsset(name: "Images/Scene/Setting/language")
        internal static let phoneNumber = ImageAsset(name: "Images/Scene/Setting/phone_number")
        internal static let restoreData = ImageAsset(name: "Images/Scene/Setting/restoreData")
        internal static let signOut = ImageAsset(name: "Images/Scene/Setting/signOut")
        internal static let sync = ImageAsset(name: "Images/Scene/Setting/sync")
      }
      internal enum Social {
        internal static let connectDots = ImageAsset(name: "Images/Scene/Social/connectDots")
        internal static let connectHintBannerClose = ImageAsset(name: "Images/Scene/Social/connectHintBannerClose")
        internal static let connectHintBannerIcon = ImageAsset(name: "Images/Scene/Social/connectHintBannerIcon")
        internal static let iconMaskDashboard = ImageAsset(name: "Images/Scene/Social/iconMaskDashboard")
      }
      internal enum TermsOfService {
        internal static let legal = ImageAsset(name: "Images/Scene/TermsOfService/legal")
      }
      internal enum WalletAdd {
        internal static let add = ImageAsset(name: "Images/Scene/WalletAdd/add")
        internal static let `import` = ImageAsset(name: "Images/Scene/WalletAdd/import")
        internal static let multichainIcon = ImageAsset(name: "Images/Scene/WalletAdd/multichainIcon")
        internal static let question = ImageAsset(name: "Images/Scene/WalletAdd/question")
      }
      internal enum WalletConnect {
        internal static let arrowLeftCircle = ImageAsset(name: "Images/Scene/WalletConnect/arrowLeftCircle")
        internal static let arrowRightCircle = ImageAsset(name: "Images/Scene/WalletConnect/arrowRightCircle")
        internal static let qrBackground = ImageAsset(name: "Images/Scene/WalletConnect/qrBackground")
        internal static let scanBorder = ImageAsset(name: "Images/Scene/WalletConnect/scanBorder")
        internal static let scanner = ImageAsset(name: "Images/Scene/WalletConnect/scanner")
        internal static let walletConnect = ImageAsset(name: "Images/Scene/WalletConnect/walletConnect")
        internal static let walletConnectConnected = ImageAsset(name: "Images/Scene/WalletConnect/walletConnectConnected")
        internal static let walletConnectServer = ImageAsset(name: "Images/Scene/WalletConnect/walletConnectServer")
      }
      internal enum WalletDetail {
        internal static let iconWalletBackup = ImageAsset(name: "Images/Scene/WalletDetail/iconWalletBackup")
        internal static let iconWalletCreate = ImageAsset(name: "Images/Scene/WalletDetail/iconWalletCreate")
        internal static let iconWalletHistory = ImageAsset(name: "Images/Scene/WalletDetail/iconWalletHistory")
        internal static let iconWalletImport = ImageAsset(name: "Images/Scene/WalletDetail/iconWalletImport")
        internal static let iconWalletRename = ImageAsset(name: "Images/Scene/WalletDetail/iconWalletRename")
      }
      internal enum WalletEdit {
        internal static let disconnect = ImageAsset(name: "Images/Scene/WalletEdit/disconnect")
        internal static let iconDelete = ImageAsset(name: "Images/Scene/WalletEdit/iconDelete")
      }
      internal enum WalletEntry {
        internal static let walletEntry = ImageAsset(name: "Images/Scene/WalletEntry/WalletEntry")
      }
      internal enum WalletImport {
        internal static let closeEyes = ImageAsset(name: "Images/Scene/WalletImport/closeEyes")
        internal static let iconKeystore = ImageAsset(name: "Images/Scene/WalletImport/iconKeystore")
        internal static let iconMnemonic = ImageAsset(name: "Images/Scene/WalletImport/iconMnemonic")
        internal static let iconPrivateKey = ImageAsset(name: "Images/Scene/WalletImport/iconPrivateKey")
        internal static let openEyes = ImageAsset(name: "Images/Scene/WalletImport/openEyes")
      }
      internal enum WalletList {
        internal enum Coins {
          internal static let arbitrumSelected = ImageAsset(name: "Images/Scene/WalletList/Coins/arbitrumSelected")
          internal static let arbitrumUnselected = ImageAsset(name: "Images/Scene/WalletList/Coins/arbitrumUnselected")
          internal static let bscSelected = ImageAsset(name: "Images/Scene/WalletList/Coins/bscSelected")
          internal static let bscUnselected = ImageAsset(name: "Images/Scene/WalletList/Coins/bscUnselected")
          internal static let ethSelected = ImageAsset(name: "Images/Scene/WalletList/Coins/ethSelected")
          internal static let ethUnselected = ImageAsset(name: "Images/Scene/WalletList/Coins/ethUnselected")
          internal static let optimismSelected = ImageAsset(name: "Images/Scene/WalletList/Coins/optimismSelected")
          internal static let optimismUnselected = ImageAsset(name: "Images/Scene/WalletList/Coins/optimismUnselected")
          internal static let polygonSelected = ImageAsset(name: "Images/Scene/WalletList/Coins/polygonSelected")
          internal static let polygonUnselected = ImageAsset(name: "Images/Scene/WalletList/Coins/polygonUnselected")
          internal static let xdaiSelected = ImageAsset(name: "Images/Scene/WalletList/Coins/xdaiSelected")
          internal static let xdaiUnselected = ImageAsset(name: "Images/Scene/WalletList/Coins/xdaiUnselected")
        }
        internal static let buttonAdd = ImageAsset(name: "Images/Scene/WalletList/button_add")
        internal static let check = ImageAsset(name: "Images/Scene/WalletList/check")
        internal static let iconItemCreate = ImageAsset(name: "Images/Scene/WalletList/iconItemCreate")
        internal static let iconItemImport = ImageAsset(name: "Images/Scene/WalletList/iconItemImport")
        internal static let unchecked = ImageAsset(name: "Images/Scene/WalletList/unchecked")
      }
      internal enum Receive {
        internal static let addressCopy = ImageAsset(name: "Images/Scene/receive/addressCopy")
        internal static let qrRectLB = ImageAsset(name: "Images/Scene/receive/qrRectLB")
        internal static let qrRectLT = ImageAsset(name: "Images/Scene/receive/qrRectLT")
        internal static let qrRectRB = ImageAsset(name: "Images/Scene/receive/qrRectRB")
        internal static let qrRectRT = ImageAsset(name: "Images/Scene/receive/qrRectRT")
        internal static let shareButton = ImageAsset(name: "Images/Scene/receive/shareButton")
      }
      internal enum Transaction {
        internal static let iconApprove = ImageAsset(name: "Images/Scene/transaction/iconApprove")
        internal static let iconFail = ImageAsset(name: "Images/Scene/transaction/iconFail")
        internal static let iconReceive = ImageAsset(name: "Images/Scene/transaction/iconReceive")
        internal static let iconSend = ImageAsset(name: "Images/Scene/transaction/iconSend")
        internal static let iconSwap = ImageAsset(name: "Images/Scene/transaction/iconSwap")
      }
    }
    internal enum Toast {
      internal static let check = ImageAsset(name: "Images/Toast/check")
    }
  }
  internal enum Plugins {
    internal static let checkMark = ImageAsset(name: "Plugins/checkMark")
    internal static let circleBackground = ColorAsset(name: "Plugins/circleBackground")
    internal static let closeSquare = ImageAsset(name: "Plugins/closeSquare")
    internal static let coidMarketCap = ImageAsset(name: "Plugins/coidMarketCap")
    internal static let coinGecko = ImageAsset(name: "Plugins/coinGecko")
    internal static let dhedge = ImageAsset(name: "Plugins/dhedge")
    internal static let disableTransactionone = ColorAsset(name: "Plugins/disableTransactionone")
    internal static let disableTransactiontwo = ColorAsset(name: "Plugins/disableTransactiontwo")
    internal static let disabled = ColorAsset(name: "Plugins/disabled")
    internal static let fileservice = ImageAsset(name: "Plugins/fileservice")
    internal static let gitcoin = ImageAsset(name: "Plugins/gitcoin")
    internal static let ito = ImageAsset(name: "Plugins/ito")
    internal static let luckyDrop = ImageAsset(name: "Plugins/luckyDrop")
    internal static let marketTrend = ImageAsset(name: "Plugins/marketTrend")
    internal static let nft = ImageAsset(name: "Plugins/nft")
    internal static let pancakeSwap = ImageAsset(name: "Plugins/pancakeSwap")
    internal static let pluginArrow = ImageAsset(name: "Plugins/pluginArrow")
    internal static let quickSwap = ImageAsset(name: "Plugins/quickSwap")
    internal static let selected = ColorAsset(name: "Plugins/selected")
    internal static let setting = ImageAsset(name: "Plugins/setting")
    internal static let settingColor = ColorAsset(name: "Plugins/settingColor")
    internal static let snapshot = ImageAsset(name: "Plugins/snapshot")
    internal static let sushiSwap = ImageAsset(name: "Plugins/sushiSwap")
    internal static let swap = ImageAsset(name: "Plugins/swap")
    internal static let switchDisabled = ColorAsset(name: "Plugins/switchDisabled")
    internal static let transak = ImageAsset(name: "Plugins/transak")
    internal static let uniswap = ImageAsset(name: "Plugins/uniswap")
    internal static let uniswapBorder = ColorAsset(name: "Plugins/uniswapBorder")
    internal static let uniswapGradientOne = ColorAsset(name: "Plugins/uniswapGradientOne")
    internal static let uniswapGradientTwo = ColorAsset(name: "Plugins/uniswapGradientTwo")
    internal static let valuables = ImageAsset(name: "Plugins/valuables")
    internal static let valuablestint = ColorAsset(name: "Plugins/valuablestint")
    internal static let zrx = ImageAsset(name: "Plugins/zrx")
  }
  internal enum Splash {
    internal enum A {
      internal static let background = ColorAsset(name: "Splash/A/background")
      internal static let logo = ImageAsset(name: "Splash/A/logo")
    }
    internal enum B {
      internal static let chat = ImageAsset(name: "Splash/B/Chat")
      internal static let background = ColorAsset(name: "Splash/B/background")
    }
    internal enum C {
      internal static let locker = ImageAsset(name: "Splash/C/Locker")
      internal static let background = ColorAsset(name: "Splash/C/background")
    }
    internal static let nextButtonBlue = ColorAsset(name: "Splash/nextButtonBlue")
    internal static let pageControlActiveColor = ColorAsset(name: "Splash/pageControlActiveColor")
    internal static let pageControlInactiveColor = ColorAsset(name: "Splash/pageControlInactiveColor")
    internal static let startUsingButtonBackgroundBlue = ColorAsset(name: "Splash/startUsingButtonBackgroundBlue")
  }
  internal enum Tab {
    internal static let profile = ImageAsset(name: "Tab/Profile")
    internal static let app = ImageAsset(name: "Tab/app")
    internal static let setting = ImageAsset(name: "Tab/setting")
    internal static let wallet = ImageAsset(name: "Tab/wallet")
  }
  internal static let backgroundGray = ColorAsset(name: "backgroundGray")
  internal static let facebookBlue = ColorAsset(name: "facebookBlue")
  internal static let dashboardIcon = ImageAsset(name: "dashboard_icon")
  internal static let dashboardSiteFacebook = ImageAsset(name: "dashboard_site_facebook")
  internal static let dashboardSiteTwitter = ImageAsset(name: "dashboard_site_twitter")
  internal static let 🎉 = ImageAsset(name: "🎉")
}
// swiftlint:enable identifier_name line_length nesting type_body_length type_name

// MARK: - Implementation Details

internal final class ColorAsset {
  internal fileprivate(set) var name: String

  #if os(macOS)
  internal typealias Color = NSColor
  #elseif os(iOS) || os(tvOS) || os(watchOS)
  internal typealias Color = UIColor
  #endif

  @available(iOS 11.0, tvOS 11.0, watchOS 4.0, macOS 10.13, *)
  internal private(set) lazy var color: Color = {
    guard let color = Color(asset: self) else {
      fatalError("Unable to load color asset named \(name).")
    }
    return color
  }()

  fileprivate init(name: String) {
    self.name = name
  }
}

internal extension ColorAsset.Color {
  @available(iOS 11.0, tvOS 11.0, watchOS 4.0, macOS 10.13, *)
  convenience init?(asset: ColorAsset) {
    let bundle = BundleToken.bundle
    #if os(iOS) || os(tvOS)
    self.init(named: asset.name, in: bundle, compatibleWith: nil)
    #elseif os(macOS)
    self.init(named: NSColor.Name(asset.name), bundle: bundle)
    #elseif os(watchOS)
    self.init(named: asset.name)
    #endif
  }
}

internal struct ImageAsset {
  internal fileprivate(set) var name: String

  #if os(macOS)
  internal typealias Image = NSImage
  #elseif os(iOS) || os(tvOS) || os(watchOS)
  internal typealias Image = UIImage
  #endif

  internal var image: Image {
    let bundle = BundleToken.bundle
    #if os(iOS) || os(tvOS)
    let image = Image(named: name, in: bundle, compatibleWith: nil)
    #elseif os(macOS)
    let name = NSImage.Name(self.name)
    let image = (bundle == .main) ? NSImage(named: name) : bundle.image(forResource: name)
    #elseif os(watchOS)
    let image = Image(named: name)
    #endif
    guard let result = image else {
      fatalError("Unable to load image asset named \(name).")
    }
    return result
  }
}

internal extension ImageAsset.Image {
  @available(macOS, deprecated,
    message: "This initializer is unsafe on macOS, please use the ImageAsset.image property")
  convenience init?(asset: ImageAsset) {
    #if os(iOS) || os(tvOS)
    let bundle = BundleToken.bundle
    self.init(named: asset.name, in: bundle, compatibleWith: nil)
    #elseif os(macOS)
    self.init(named: NSImage.Name(asset.name))
    #elseif os(watchOS)
    self.init(named: asset.name)
    #endif
  }
}

// swiftlint:disable convenience_type
private final class BundleToken {
  static let bundle: Bundle = {
    #if SWIFT_PACKAGE
    return Bundle.module
    #else
    return Bundle(for: BundleToken.self)
    #endif
  }()
}
// swiftlint:enable convenience_type
