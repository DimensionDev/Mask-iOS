// Generated using SwiftGen, by O.Halligon — https://github.com/SwiftGen/SwiftGen

import Foundation

// swiftlint:disable superfluous_disable_command
// swiftlint:disable file_length

// swiftlint:disable explicit_type_interface identifier_name line_length nesting type_body_length type_name
enum L10n {

  /// Update bundle if you need to change app language
  static var bundle: Bundle?


  enum Chain {

    enum Name {
      /// Arbitrum
      static var arbitrum: String {
        return L10n.tr("Localizable", "Chain.Name.Arbitrum")
      }
      /// BNB Chain
      static var bsc: String {
        return L10n.tr("Localizable", "Chain.Name.Bsc")
      }
      /// Polkadot
      static var dot: String {
        return L10n.tr("Localizable", "Chain.Name.Dot")
      }
      /// Ethereum
      static var eth: String {
        return L10n.tr("Localizable", "Chain.Name.Eth")
      }
      /// Optimism
      static var optimism: String {
        return L10n.tr("Localizable", "Chain.Name.Optimism")
      }
      /// Polygon/Matic Network
      static var polygon: String {
        return L10n.tr("Localizable", "Chain.Name.Polygon")
      }
      /// Gnosis
      static var xdai: String {
        return L10n.tr("Localizable", "Chain.Name.Xdai")
      }
    }

    enum ShortName {
      /// Arbitrum
      static var arbitrum: String {
        return L10n.tr("Localizable", "Chain.ShortName.Arbitrum")
      }
      /// BNB
      static var bsc: String {
        return L10n.tr("Localizable", "Chain.ShortName.Bsc")
      }
      /// DOT
      static var dot: String {
        return L10n.tr("Localizable", "Chain.ShortName.Dot")
      }
      /// ETH
      static var eth: String {
        return L10n.tr("Localizable", "Chain.ShortName.Eth")
      }
      /// Optimism
      static var optimism: String {
        return L10n.tr("Localizable", "Chain.ShortName.Optimism")
      }
      /// Polygon
      static var polygon: String {
        return L10n.tr("Localizable", "Chain.ShortName.Polygon")
      }
      /// Gnosis
      static var xdai: String {
        return L10n.tr("Localizable", "Chain.ShortName.Xdai")
      }
    }
  }

  enum Common {
    /// No records
    static var empty: String {
      return L10n.tr("Localizable", "Common.Empty")
    }
    /// Loading...
    static var loading: String {
      return L10n.tr("Localizable", "Common.Loading")
    }
    /// Search
    static var searchPlaceholder: String {
      return L10n.tr("Localizable", "Common.SearchPlaceholder")
    }

    enum Alert {

      enum BackupPopupBindingFirst {
        /// Please bind your email or phone number before you back up to cloud.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.BackupPopupBindingFirst.Description")
        }
        /// Bind your email or phone
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.BackupPopupBindingFirst.Title")
        }
      }

      enum BackupTipsNoBackupPassword {
        /// Please set up your %@ before you back up.
        static func description(_ p1: String) -> String {
          return L10n.tr("Localizable", "Common.Alert.BackupTipsNoBackupPassword.Description", p1)
        }
        ///  Set up backup password
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.BackupTipsNoBackupPassword.Title")
        }
      }

      enum BindRemoteInfo {
        /// Unable to verify because of internet connection or server problems. Please try again.
        static var detail: String {
          return L10n.tr("Localizable", "Common.Alert.BindRemoteInfo.Detail")
        }
        /// Internet or server problems
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.BindRemoteInfo.Title")
        }
      }

      enum BiometryIdActivate {
        /// %@ has been enabled successfully.
        static func description(_ p1: String) -> String {
          return L10n.tr("Localizable", "Common.Alert.BiometryIdActivate.Description", p1)
        }
        /// Activation successful
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.BiometryIdActivate.Title")
        }
      }

      enum CameraAccess {
        /// Please go to Settings to allow access.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.CameraAccess.Description")
        }
        /// Mask Network would like to\naccess your camera
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.CameraAccess.Title")
        }
      }

      enum ChangeBackupPassword {
        /// You have successfully changed your backup password.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.ChangeBackupPassword.Description")
        }
        /// Backup Password changed successfully!
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.ChangeBackupPassword.Title")
        }
      }

      enum ChangeBackupPasswordFailed {
        /// Backup Password changed failed!
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.ChangeBackupPasswordFailed.Title")
        }
      }

      enum ChangePassword {
        /// You have successfully changed your payment password.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.ChangePassword.Description")
        }
        /// Password changed successfully!
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.ChangePassword.Title")
        }
      }

      enum ChangePasswordFailed {
        /// Password changed failed!
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.ChangePasswordFailed.Title")
        }
      }

      enum DisconnectProfile {
        /// Are you sure you want to disconnect it? This account will not be able to decrypt and encrypt any information with Mask Network.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.DisconnectProfile.Description")
        }
        /// Disconnect Social Account \n %@
        static func title(_ p1: String) -> String {
          return L10n.tr("Localizable", "Common.Alert.DisconnectProfile.Title", p1)
        }
      }

      enum DownloadIdentityCode {
        /// Please set up your %@ before you download persona QR code. 
        static func description(_ p1: String) -> String {
          return L10n.tr("Localizable", "Common.Alert.DownloadIdentityCode.Description", p1)
        }
        /// Set up backup password 
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.DownloadIdentityCode.Title")
        }
      }

      enum ExportPrivateKey {
        /// Please set up your %@ before you export private key. 
        static func description(_ p1: String) -> String {
          return L10n.tr("Localizable", "Common.Alert.ExportPrivateKey.Description", p1)
        }
        /// Set up backup password 
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.ExportPrivateKey.Title")
        }
      }

      enum FaceIdActivateFail {
        /// Fail to enable Face id.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.FaceIdActivateFail.Description")
        }
        /// Activation fails
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.FaceIdActivateFail.Title")
        }
      }

      enum FileServiceFileTooLarge {
        /// The file exceeds the size limit of 10.5 MB. 
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.FileServiceFileTooLarge.Description")
        }
        /// File size is too large
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.FileServiceFileTooLarge.Title")
        }
      }

      enum IdentifyCodeScreenshotWarning {
        /// Simply taking a screenshot of identity code is not safe.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.IdentifyCodeScreenshotWarning.Description")
        }
        /// Warning
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.IdentifyCodeScreenshotWarning.Title")
        }
      }

      enum KeychainAuthPrompt {
        /// Authenticate to use your secrets
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.KeychainAuthPrompt.Title")
        }
      }

      enum LocalBackup {
        /// Backup completed!
        static var backupCompleted: String {
          return L10n.tr("Localizable", "Common.Alert.LocalBackup.BackupCompleted")
        }
        /// Backup failed!
        static var backupFailed: String {
          return L10n.tr("Localizable", "Common.Alert.LocalBackup.BackupFailed")
        }
      }

      enum NoLocalWalletForWalletconnect {
        /// Unable to connect to walletConnect as there is no local wallet.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.NoLocalWalletForWalletconnect.Description")
        }
        /// Unable to connect
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.NoLocalWalletForWalletconnect.Title")
        }
      }

      enum OnlyScanPersona {
        /// The QR code is not Persona QR Code.\nPlease scan Persona QR Code.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.OnlyScanPersona.Description")
        }
        /// Please Scan Persona QR Code
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.OnlyScanPersona.Title")
        }
      }

      enum PersonaCreate {
        /// You have successfully created your persona %@. 
        static func description(_ p1: String) -> String {
          return L10n.tr("Localizable", "Common.Alert.PersonaCreate.Description", p1)
        }
        /// Successful 
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.PersonaCreate.Title")
        }
      }

      enum PersonaLogout {
        /// After logging out, your associated social accounts can no longer decrypt past encrypted messages.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.PersonaLogout.Description")
        }
        /// Confirm to log out?
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.PersonaLogout.Title")
        }
      }

      enum PersonaNameDuplicated {
        /// The username has already been created.
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.PersonaNameDuplicated.Title")
        }
      }

      enum RecoveryKey {
        /// Your recovery key is composed of randomly selected words. Please carefully write down each word in the order it appears.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.RecoveryKey.Description")
        }
        /// Keep Recovery Key Carefully
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.RecoveryKey.Title")
        }
      }

      enum RecoveryKeyTips {
        /// Your recovery key is composed of randomly selected words. Please carefully write down each word in the order it appears.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.RecoveryKeyTips.Description")
        }
        /// Store recovery key safely
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.RecoveryKeyTips.Title")
        }
      }

      enum RecoveryKeyWarning {
        /// Simply taking a screenshot of recovery phrase is not safe.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.RecoveryKeyWarning.Description")
        }
        /// Warning
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.RecoveryKeyWarning.Title")
        }
      }

      enum RedPacketNoWallet {
        /// You can’t use Lucky Drop as there is no wallet. Please create, import or connect a wallet.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.RedPacketNoWallet.Description")
        }
        /// There is no wallet
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.RedPacketNoWallet.Title")
        }
      }

      enum ScanFailed {
        /// Unable to recognize the QR code.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.ScanFailed.Description")
        }
        /// Scanning failed
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.ScanFailed.Title")
        }
      }

      enum ScanPersonaExist {
        /// The persona that corresponds with the QR code already existed.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.ScanPersonaExist.Description")
        }
        /// The persona already existed.
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.ScanPersonaExist.Title")
        }
      }

      enum ScanPersonaSuccess {
        /// You have successfully imported your persona. 
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.ScanPersonaSuccess.Description")
        }
        /// Successful 
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.ScanPersonaSuccess.Title")
        }
      }

      enum SetPassword {
        /// You have successfully set up your payment password.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.SetPassword.Description")
        }
        /// Payment Password set up successfully!
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.SetPassword.Title")
        }
      }

      enum Setting {
        /// We have detected that you haven’t set up your backup password and/or payment password. Please set up your backup password and/or payment password before you back up.
        static var warningBackupDataDescription: String {
          return L10n.tr("Localizable", "Common.Alert.Setting.WarningBackupDataDescription")
        }
        ///  Set up password before backup
        static var warningBackupDataTitile: String {
          return L10n.tr("Localizable", "Common.Alert.Setting.WarningBackupDataTitile")
        }
      }

      enum SetupBackupPassword {
        /// You have successfully set up your backup password.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.SetupBackupPassword.Description")
        }
        /// Backup Password set up successfully!
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.SetupBackupPassword.Title")
        }
      }

      enum SetupBackupPasswordFailed {
        /// Backup Password set up failed!
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.SetupBackupPasswordFailed.Title")
        }
      }

      enum Signout {
        /// Mask Network does not save any of your data. Please remember your account and password, and back up your data in time before your sign out.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.Signout.Description")
        }
        /// Are you sure?
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.Signout.Title")
        }
      }

      enum TokenBalance {
        /// Buy %@
        static func btnConfirm(_ p1: String) -> String {
          return L10n.tr("Localizable", "Common.Alert.TokenBalance.BtnConfirm", p1)
        }
        /// You have 0 %@ in your account to pay for transaction fees. Buy some %@ or deposit from another account.
        static func description(_ p1: String, _ p2: String) -> String {
          return L10n.tr("Localizable", "Common.Alert.TokenBalance.Description", p1, p2)
        }
      }

      enum WalletCreateSuccess {
        /// In order to protect your funds against hackers and thieves, store this recovery phrase in a safe and secure place.
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.WalletCreateSuccess.Description")
        }
        /// Perfect!
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.WalletCreateSuccess.Title")
        }
      }

      enum WalletDeriveSuccess {
        /// New wallet account created successfully
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.WalletDeriveSuccess.Description")
        }
        /// Perfect!
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.WalletDeriveSuccess.Title")
        }
      }

      enum WalletImport {
        /// Error!
        static var alertTitleFail: String {
          return L10n.tr("Localizable", "Common.Alert.WalletImport.AlertTitleFail")
        }
        /// Import completed!
        static var alertTitleSuccess: String {
          return L10n.tr("Localizable", "Common.Alert.WalletImport.AlertTitleSuccess")
        }
      }

      enum WrongFolder {
        /// When you delete Mask App, the Mask Network sandbox folder would also be deleted. For data security, please save to a more secure folder (non-sandbox).
        static var description: String {
          return L10n.tr("Localizable", "Common.Alert.WrongFolder.Description")
        }
        /// Please select another folder
        static var title: String {
          return L10n.tr("Localizable", "Common.Alert.WrongFolder.Title")
        }
      }
    }

    enum Controls {
      /// Accept
      static var accept: String {
        return L10n.tr("Localizable", "Common.Controls.Accept")
      }
      /// Back up
      static var backUp: String {
        return L10n.tr("Localizable", "Common.Controls.BackUp")
      }
      /// Back up locally
      static var backUpLocally: String {
        return L10n.tr("Localizable", "Common.Controls.BackUpLocally")
      }
      /// Back up to cloud
      static var backUpToCloud: String {
        return L10n.tr("Localizable", "Common.Controls.BackUpToCloud")
      }
      /// Cancel
      static var cancel: String {
        return L10n.tr("Localizable", "Common.Controls.Cancel")
      }
      /// Change
      static var change: String {
        return L10n.tr("Localizable", "Common.Controls.Change")
      }
      /// Clear
      static var clear: String {
        return L10n.tr("Localizable", "Common.Controls.Clear")
      }
      /// Send encrypted post
      static var compose: String {
        return L10n.tr("Localizable", "Common.Controls.Compose")
      }
      /// Confirm
      static var confirm: String {
        return L10n.tr("Localizable", "Common.Controls.Confirm")
      }
      /// Connect Wallet
      static var connectWallet: String {
        return L10n.tr("Localizable", "Common.Controls.ConnectWallet")
      }
      /// Create Wallet
      static var createWallet: String {
        return L10n.tr("Localizable", "Common.Controls.CreateWallet")
      }
      /// Done
      static var done: String {
        return L10n.tr("Localizable", "Common.Controls.Done")
      }
      /// Don’t Allow
      static var dontAllow: String {
        return L10n.tr("Localizable", "Common.Controls.DontAllow")
      }
      /// Download
      static var download: String {
        return L10n.tr("Localizable", "Common.Controls.Download")
      }
      /// I downloaded, next
      static var downloadNext: String {
        return L10n.tr("Localizable", "Common.Controls.DownloadNext")
      }
      /// Edit
      static var edit: String {
        return L10n.tr("Localizable", "Common.Controls.Edit")
      }
      /// Enable
      static var enable: String {
        return L10n.tr("Localizable", "Common.Controls.Enable")
      }
      /// To Settings
      static var goSettings: String {
        return L10n.tr("Localizable", "Common.Controls.GoSettings")
      }
      /// Import Wallet
      static var importWallet: String {
        return L10n.tr("Localizable", "Common.Controls.ImportWallet")
      }
      /// Invite
      static var invite: String {
        return L10n.tr("Localizable", "Common.Controls.Invite")
      }
      /// Understood
      static var iUnderstand: String {
        return L10n.tr("Localizable", "Common.Controls.IUnderstand")
      }
      /// Merge and back up
      static var mergeAndBackUp: String {
        return L10n.tr("Localizable", "Common.Controls.MergeAndBackUp")
      }
      /// Merge to local data
      static var mergeToLocalData: String {
        return L10n.tr("Localizable", "Common.Controls.MergeToLocalData")
      }
      /// Move data now
      static var moveDataNow: String {
        return L10n.tr("Localizable", "Common.Controls.MoveDataNow")
      }
      /// Next
      static var next: String {
        return L10n.tr("Localizable", "Common.Controls.Next")
      }
      /// No thanks
      static var noThanks: String {
        return L10n.tr("Localizable", "Common.Controls.NoThanks")
      }
      /// Ok
      static var ok: String {
        return L10n.tr("Localizable", "Common.Controls.Ok")
      }
      /// Post to twitter
      static var postToTwitter: String {
        return L10n.tr("Localizable", "Common.Controls.PostToTwitter")
      }
      /// Remind me later
      static var remindMeLater: String {
        return L10n.tr("Localizable", "Common.Controls.RemindMeLater")
      }
      /// Resend
      static var resend: String {
        return L10n.tr("Localizable", "Common.Controls.Resend")
      }
      /// Retry
      static var retry: String {
        return L10n.tr("Localizable", "Common.Controls.Retry")
      }
      /// Save
      static var save: String {
        return L10n.tr("Localizable", "Common.Controls.Save")
      }
      /// Select from photos
      static var selectFromPhoto: String {
        return L10n.tr("Localizable", "Common.Controls.SelectFromPhoto")
      }
      /// Sending...
      static var sending: String {
        return L10n.tr("Localizable", "Common.Controls.Sending")
      }
      /// Sent
      static var sent: String {
        return L10n.tr("Localizable", "Common.Controls.Sent")
      }
      /// Sign Out
      static var signout: String {
        return L10n.tr("Localizable", "Common.Controls.Signout")
      }
      /// Skip, download later
      static var skip: String {
        return L10n.tr("Localizable", "Common.Controls.Skip")
      }
      /// Speed Up
      static var speedUp: String {
        return L10n.tr("Localizable", "Common.Controls.SpeedUp")
      }
      /// Take a photo
      static var takePhoto: String {
        return L10n.tr("Localizable", "Common.Controls.TakePhoto")
      }
      /// Try Again
      static var tryAgain: String {
        return L10n.tr("Localizable", "Common.Controls.TryAgain")
      }
      /// Verify
      static var verify: String {
        return L10n.tr("Localizable", "Common.Controls.Verify")
      }
      /// Back
      static var webviewGoBack: String {
        return L10n.tr("Localizable", "Common.Controls.WebviewGoBack")
      }
    }

    enum Toast {
      /// copied!
      static var copy: String {
        return L10n.tr("Localizable", "Common.Toast.Copy")
      }
      /// Failed
      static var failed: String {
        return L10n.tr("Localizable", "Common.Toast.Failed")
      }
      /// Saved!
      static var saved: String {
        return L10n.tr("Localizable", "Common.Toast.Saved")
      }
    }
  }

  enum Plugins {

    enum FileService {
      /// Arweave
      static var arweave: String {
        return L10n.tr("Localizable", "Plugins.FileService.Arweave")
      }
      /// Make it encrypted
      static var encrypt: String {
        return L10n.tr("Localizable", "Plugins.FileService.Encrypt")
      }
      /// Encrypting...
      static var encrypting: String {
        return L10n.tr("Localizable", "Plugins.FileService.Encrypting")
      }
      /// Failed
      static var failed: String {
        return L10n.tr("Localizable", "Plugins.FileService.Failed")
      }
      /// Failed to upload due to network conditions or other problems.
      static var failureTip: String {
        return L10n.tr("Localizable", "Plugins.FileService.FailureTip")
      }
      /// File Key
      static var fileKey: String {
        return L10n.tr("Localizable", "Plugins.FileService.FileKey")
      }
      /// IPFS
      static var ipfs: String {
        return L10n.tr("Localizable", "Plugins.FileService.Ipfs")
      }
      /// You haven't uploaded any files yet.
      static var listEmpty: String {
        return L10n.tr("Localizable", "Plugins.FileService.ListEmpty")
      }
      /// Use Meson CDN
      static var mesoncdn: String {
        return L10n.tr("Localizable", "Plugins.FileService.Mesoncdn")
      }
      /// Other Options
      static var otherOption: String {
        return L10n.tr("Localizable", "Plugins.FileService.OtherOption")
      }
      /// Share
      static var post: String {
        return L10n.tr("Localizable", "Plugins.FileService.Post")
      }
      /// Preparing...
      static var preparing: String {
        return L10n.tr("Localizable", "Plugins.FileService.Preparing")
      }
      /// No files currently found.
      static var searchEmpty: String {
        return L10n.tr("Localizable", "Plugins.FileService.SearchEmpty")
      }
      /// Service Protocols
      static var serviceTitle: String {
        return L10n.tr("Localizable", "Plugins.FileService.ServiceTitle")
      }
      /// Upload Settings
      static var settingTitle: String {
        return L10n.tr("Localizable", "Plugins.FileService.SettingTitle")
      }
      /// Swarm
      static var swarm: String {
        return L10n.tr("Localizable", "Plugins.FileService.Swarm")
      }
      /// Uploaded
      static var uploaded: String {
        return L10n.tr("Localizable", "Plugins.FileService.Uploaded")
      }
      /// Uploading...
      static var uploading: String {
        return L10n.tr("Localizable", "Plugins.FileService.Uploading")
      }

      enum Faq {
        /// Arweave Network is lightweight and sustainable file storage protocol. Paying for storage fee on Arweave once allows lifelong access to Arweave’s database and encryption schemes.
        static var arweave: String {
          return L10n.tr("Localizable", "Plugins.FileService.Faq.Arweave")
        }
        /// Web3 File Service is a decentralized storage service that allows users to store files on the blockchain in an immutable and permanent way. Mask Network provides this service by working with reputable file storage protocols, including IPFS, Arweave, Swarm and Meson Network and supports file types like .pdf, .doc, .mp3, .mp4 among other formats, with the maximum file format being 10.4 mb.\n\nUpon uploading a file, an exclusive link will be generated, embedded with metadata, including the on-chain file storage location. Please note that anyone with the link can download it. Users are given the option to change the privacy settings of their file, if they want it to be public or encrypted on social platforms. This ensures that users have autonomy over their files and how they are stored, serving the decentralized file management function.
        static var fileService: String {
          return L10n.tr("Localizable", "Plugins.FileService.Faq.FileService")
        }
        /// IPFS is a decentralized transmision protocol, based on smart contracts for storage and monetized with a pay-as-you-go model. IPFS assigns a unique hash value to each file, such that even if the content of 2 files is only different by 1 bit, the hash value will be different.
        static var ipfs: String {
          return L10n.tr("Localizable", "Plugins.FileService.Faq.Ipfs")
        }
        /// Learn more
        static var learnMore: String {
          return L10n.tr("Localizable", "Plugins.FileService.Faq.LearnMore")
        }
        /// As a decentralized Content Delivery Network (CDN), Meson CDN optimizes the file and content delivery processes. The service is supported by over 36,000 nodes incentivized to serve content on Arweave Network.\n\nIntegrated with Arweave Network as the storage layer, Meson Network operates as a cache layer that focuses on the distribution of data. Unlike centralized services like Cloudflare and Amazon Web Services, Meson Network offers a cheaper alternative to individuals who are looking to send or receive files.
        static var mesonCdn: String {
          return L10n.tr("Localizable", "Plugins.FileService.Faq.MesonCdn")
        }
        /// What is Arweave Network?
        static var whatIsArweave: String {
          return L10n.tr("Localizable", "Plugins.FileService.Faq.WhatIsArweave")
        }
        /// What is Web3 File Service?
        static var whatIsFileService: String {
          return L10n.tr("Localizable", "Plugins.FileService.Faq.WhatIsFileService")
        }
        /// What is IPFS?
        static var whatIsIpfs: String {
          return L10n.tr("Localizable", "Plugins.FileService.Faq.WhatIsIpfs")
        }
        /// What is Meson CDN?
        static var whatIsMesonCdn: String {
          return L10n.tr("Localizable", "Plugins.FileService.Faq.WhatIsMesonCdn")
        }
      }

      enum LocalFileSource {
        /// Save into the album
        static var saveToAlbum: String {
          return L10n.tr("Localizable", "Plugins.FileService.LocalFileSource.SaveToAlbum")
        }
        /// Save to folder
        static var saveToFolder: String {
          return L10n.tr("Localizable", "Plugins.FileService.LocalFileSource.SaveToFolder")
        }
        /// Take Photos
        static var takePhotos: String {
          return L10n.tr("Localizable", "Plugins.FileService.LocalFileSource.TakePhotos")
        }
        /// Upload File
        static var uploadFile: String {
          return L10n.tr("Localizable", "Plugins.FileService.LocalFileSource.UploadFile")
        }
        /// Upload Photos
        static var uploadPhotos: String {
          return L10n.tr("Localizable", "Plugins.FileService.LocalFileSource.UploadPhotos")
        }
        /// The size limit is 10.5MB.\nThe upload can’t be cancelled.
        static var uploadTips: String {
          return L10n.tr("Localizable", "Plugins.FileService.LocalFileSource.UploadTips")
        }
      }

      enum Onboard {
        /// Free to use Web3 File service, upload and store files permanently.
        static var stepOne: String {
          return L10n.tr("Localizable", "Plugins.FileService.Onboard.StepOne")
        }
        /// No restrictions on traditional social platforms, easy to upload and share files with friends.
        static var stepThree: String {
          return L10n.tr("Localizable", "Plugins.FileService.Onboard.StepThree")
        }
        /// Decentralized storage service, powered by IPFS, Arweave, Starm and Meson Network.
        static var stepTwo: String {
          return L10n.tr("Localizable", "Plugins.FileService.Onboard.StepTwo")
        }
      }
    }

    enum Luckydrop {
      /// Account
      static var account: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Account")
      }
      /// Amount per share
      static var amountPerShare: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Amount-Per-Share")
      }
      /// Claimed
      static var claimed: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Claimed")
      }
      /// Created
      static var created: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Created")
      }
      /// End Time
      static var endTime: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.End-Time")
      }
      /// Enter attached message
      static var enterMessage: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Enter-Message")
      }
      /// Enter quantity
      static var enterQuantity: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Enter-Quantity")
      }
      /// masknetwork
      static var facebookAccount: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.FacebookAccount")
      }
      /// History Records
      static var historyTitle: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.HistoryTitle")
      }
      /// MAX
      static var max: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Max")
      }
      /// The max quantity is 255.
      static var maxQuantityError: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Max-Quantity-Error")
      }
      /// NFT
      static var nft: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Nft")
      }
      /// Enter attached message
      static var nftMessagePlaceholder: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Nft-Message-Placeholder")
      }
      /// NFTs selected
      static var nftSelected: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Nft-Selected")
      }
      /// Best Wishes!
      static var pluginRedPacketBestWishes: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.PluginRedPacketBestWishes")
      }
      /// Quantity
      static var quantity: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Quantity")
      }
      /// Refund
      static var refund: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Refund")
      }
      /// Refund the unclaimed after %@
      static func refundTip(_ p1: String) -> String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.RefundTip", p1)
      }
      /// Select the Social account to share the Lucky Drop.
      static var selectSocialDescription: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Select-Social-Description")
      }
      /// Select Social Account
      static var selectSocialTitle: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Select-Social-Title")
      }
      /// Connect your Persona to social media before you share your lucky Drop.
      static var shareConnectPersona: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Share-Connect-Persona")
      }
      /// To send lucky drop, please create a persona to connect to your social account.
      static var shareCreatePersona: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Share-Create-Persona")
      }
      /// Share Lucky Drop
      static var shareTitle: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Share-Title")
      }
      /// Hi, claim this lucky drop with #mask_io %@
      static func socialMediaRedpacketTemplate(_ p1: String) -> String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Social-Media-Redpacket-Template", p1)
      }
      /// This tweet is encrypted with #mask_io (@realMaskNetwork). 📪🔑\n\nInstall %@ to decrypt it.
      static func socialMediaTemplate(_ p1: String) -> String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Social-Media-Template", p1)
      }
      /// Lucky Drop
      static var title: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Title")
      }
      /// Token
      static var token: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Token")
      }
      /// Total Amount
      static var totalAmount: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Total-Amount")
      }
      /// Transaction fee
      static var transactionFee: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Transaction-Fee")
      }
      /// Hi, claim this lucky drop with #mask_io @%@ %@
      static func twitterOrFacebookRedpacketTemplate(_ p1: String, _ p2: String) -> String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Twitter-Or-Facebook-Redpacket-Template", p1, p2)
      }
      /// This tweet is encrypted with #mask_io (@%@). 📪🔑\n\nInstall %@ to decrypt it.
      static func twitterOrFacebookTemplate(_ p1: String, _ p2: String) -> String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.Twitter-Or-Facebook-Template", p1, p2)
      }
      /// realMaskNetwork
      static var twitterAccount: String {
        return L10n.tr("Localizable", "Plugins.Luckydrop.TwitterAccount")
      }

      enum Alert {
        /// You can’t select tokens as there is no wallet.
        static var messageNoAccount: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Alert.MessageNoAccount")
        }
      }

      enum Buttons {
        /// Average
        static var average: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Average")
        }
        /// Best Wishes!
        static var bestWishes: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Best-Wishes")
        }
        /// Create Persona
        static var createPersona: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Create-Persona")
        }
        /// Enter Quantity(Max: 255)
        static var exceedMaxQuantity: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Exceed-Max-Quantity")
        }
        /// Insufficient Balance
        static var insufficientBalance: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Insufficient-Balance")
        }
        /// Insufficient Gas Amount
        static var insufficientGas: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Insufficient-Gas")
        }
        /// The minimum amount for each share is %@ %@
        static func minimumAmount(_ p1: String, _ p2: String) -> String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Minimum-Amount", p1, p2)
        }
        /// There is no wallet
        static var noAccount: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.No-Account")
        }
        /// Enter Amount Per Share
        static var noAmountPerShare: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.No-Amount-Per-Share")
        }
        /// Enter Attached Messege
        static var noMessage: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.No-Message")
        }
        /// Enter share
        static var noShare: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.No-Share")
        }
        /// Select a Token
        static var noToken: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.No-Token")
        }
        /// Enter Total Amount
        static var noTotalAmount: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.No-Total-Amount")
        }
        /// Random
        static var random: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Random")
        }
        /// Recover Persona
        static var recoverPersona: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Recover-Persona")
        }
        /// Confirm Risk Warning
        static var riskWarning: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Risk-Warning")
        }
        /// Select NFT collection
        static var selectNftCollection: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Select-Nft-Collection")
        }
        /// Select NFTs
        static var selectNfts: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Select-Nfts")
        }
        /// Send %@
        static func send(_ p1: String) -> String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Send", p1)
        }
        /// Approve %@
        static func unlockToken(_ p1: String) -> String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Unlock-Token", p1)
        }
        /// Approving
        static var unlockingToken: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Buttons.Unlocking-Token")
        }
      }

      enum Confirm {
        /// Amount per share
        static var amountPerShare: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Confirm.AmountPerShare")
        }
        /// Attached message
        static var attachedMessage: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Confirm.AttachedMessage")
        }
        /// Share
        static var share: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Confirm.Share")
        }
        /// Split mode
        static var splitMode: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Confirm.SplitMode")
        }
        /// You can withdraw the remaining balance 24 hours after the Lucky Drop is sent.
        static var tips: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Confirm.Tips")
        }
        /// Confirm Your Lucky Drop
        static var title: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Confirm.Title")
        }
        /// Total amount
        static var totalAmount: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Confirm.TotalAmount")
        }
        /// Transaction fee
        static var transactionFee: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Confirm.TransactionFee")
        }
        /// Wallet account
        static var walletAccount: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Confirm.WalletAccount")
        }
      }

      enum ShareSheet {
        /// You can now see your Lucky Drop in History Tab. To let people claim it, share to your social media.
        static var detail: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Share-Sheet.Detail")
        }
        /// Luck Drop Successfully Created!
        static var title: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Share-Sheet.Title")
        }
        /// Share to social media
        static var toSocialMedia: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Share-Sheet.To-Social-Media")
        }
        /// Share to Twitter
        static var toTwitter: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.Share-Sheet.To-Twitter")
        }
      }

      enum State {
        /// Tx failed
        static var failed: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.State.Failed")
        }
        /// Pending...
        static var pending: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.State.Pending")
        }
        /// Tx Success
        static var success: String {
          return L10n.tr("Localizable", "Plugins.Luckydrop.State.Success")
        }
      }
    }

    enum Policy {
      /// and
      static var and: String {
        return L10n.tr("Localizable", "Plugins.Policy.And")
      }
      /// the privacy policy
      static var privacy: String {
        return L10n.tr("Localizable", "Plugins.Policy.Privacy")
      }
      /// I have reviewed
      static var reviewed: String {
        return L10n.tr("Localizable", "Plugins.Policy.Reviewed")
      }
      /// Upload now
      static var startUpload: String {
        return L10n.tr("Localizable", "Plugins.Policy.StartUpload")
      }
      /// terms of service.
      static var uploadTerms: String {
        return L10n.tr("Localizable", "Plugins.Policy.UploadTerms")
      }
    }
  }

  enum Scene {

    enum App {
      /// Better Luck next time
      static var goodLuckNextTime: String {
        return L10n.tr("Localizable", "Scene.App.GoodLuckNextTime")
      }
      /// Market trend source
      static var marketTrendSource: String {
        return L10n.tr("Localizable", "Scene.App.MarketTrendSource")
      }
      /// If you turn off a plugin, the plugin function can no longer be rendered on timeline when browsing social media.
      static var pluginTip: String {
        return L10n.tr("Localizable", "Scene.App.PluginTip")
      }
      /// %@ Claimed
      static func redPacketClaimed(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.App.RedPacketClaimed", p1)
      }
      /// Dear User,\n\nWhen using any wallet-related plugins in Mask Network, please confirm to accept the following usage risks:\n\nMask Network provides non-commercial free services. The plug-ins are provided by community members and other excellent third-party DApp teams. Due to the freedom of the decentralized network and other uncertain risk factors, users are requested to properly protect their sensitive information such as wallet mnemonic words and private keys. Please be cautious when conducting any blockchain contract interaction. The risks caused by any third-party DApps (plug-ins) are borne by the third-party DApps themselves.\n\nClicking the confirm button means that you agree to bear the above possible risks.
      static var riskwarning: String {
        return L10n.tr("Localizable", "Scene.App.Riskwarning")
      }
      /// Risk Warning
      static var riskwarningTitle: String {
        return L10n.tr("Localizable", "Scene.App.RiskwarningTitle")
      }
      /// Swap source
      static var swapOptionSource: String {
        return L10n.tr("Localizable", "Scene.App.SwapOptionSource")
      }
      /// Wallet address
      static var walletAddress: String {
        return L10n.tr("Localizable", "Scene.App.WalletAddress")
      }

      enum PluginIntroduction {
        /// Decentralized file storage for users.
        static var fileService: String {
          return L10n.tr("Localizable", "Scene.App.PluginIntroduction.FileService")
        }
        /// Enable users to buy tokens directly on Twitter.
        static var ito: String {
          return L10n.tr("Localizable", "Scene.App.PluginIntroduction.Ito")
        }
        /// Send a surprise crypto giveaway. Tokens and NFTs are supported.
        static var luckydrop: String {
          return L10n.tr("Localizable", "Scene.App.PluginIntroduction.Luckydrop")
        }
        /// Purchase tokens through dex without additional fees.
        static var swap: String {
          return L10n.tr("Localizable", "Scene.App.PluginIntroduction.Swap")
        }
        /// Buy crypto with Transak, support 60+ currencies.
        static var transak: String {
          return L10n.tr("Localizable", "Scene.App.PluginIntroduction.Transak")
        }
      }

      enum Plugins {
        /// Collectibles
        static var collectibles: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.Collectibles")
        }
        /// DHEDGE
        static var dhedge: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.Dhedge")
        }
        /// File Service
        static var fileService: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.FileService")
        }
        /// Gitcoin
        static var gitcoin: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.Gitcoin")
        }
        /// ITO
        static var ito: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.Ito")
        }
        /// Lucky Drop
        static var lucyDrop: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.LucyDrop")
        }
        /// Market Trend
        static var marketTrend: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.MarketTrend")
        }
        /// Snapshot
        static var snapshot: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.Snapshot")
        }
        /// Swap
        static var swap: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.Swap")
        }
        /// Fiat On-Ramp
        static var transaction: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.Transaction")
        }
        /// Valuables
        static var valuables: String {
          return L10n.tr("Localizable", "Scene.App.Plugins.Valuables")
        }
      }

      enum SwapNetworkSource {
        /// BSC Network
        static var bsc: String {
          return L10n.tr("Localizable", "Scene.App.SwapNetworkSource.Bsc")
        }
        /// ETH Network
        static var eth: String {
          return L10n.tr("Localizable", "Scene.App.SwapNetworkSource.Eth")
        }
        /// Polygon/Matic Network
        static var poly: String {
          return L10n.tr("Localizable", "Scene.App.SwapNetworkSource.Poly")
        }
      }

      enum Title {
        /// Labs
        static var labs: String {
          return L10n.tr("Localizable", "Scene.App.Title.Labs")
        }
        /// Plugin Settings
        static var pluginsSetting: String {
          return L10n.tr("Localizable", "Scene.App.Title.PluginsSetting")
        }
        /// Share
        static var redPacketShare: String {
          return L10n.tr("Localizable", "Scene.App.Title.RedPacketShare")
        }
      }
    }

    enum Backup {
      /// Email
      static var backupVerifyFieldEmail: String {
        return L10n.tr("Localizable", "Scene.Backup.BackupVerifyFieldEmail")
      }
      /// Phone
      static var backupVerifyFieldPhone: String {
        return L10n.tr("Localizable", "Scene.Backup.BackupVerifyFieldPhone")
      }
      /// Cloud backup with Email
      static var backupVerifyTitleEmail: String {
        return L10n.tr("Localizable", "Scene.Backup.BackupVerifyTitleEmail")
      }
      /// Cloud backup with Phone
      static var backupVerifyTitlePhone: String {
        return L10n.tr("Localizable", "Scene.Backup.BackupVerifyTitlePhone")
      }
      /// Create at
      static var restoreCreatedDate: String {
        return L10n.tr("Localizable", "Scene.Backup.RestoreCreatedDate")
      }
      /// Associated account
      static var restoredAccount: String {
        return L10n.tr("Localizable", "Scene.Backup.RestoredAccount")
      }
      /// Contacts
      static var restoredContacts: String {
        return L10n.tr("Localizable", "Scene.Backup.RestoredContacts")
      }
      /// Files
      static var restoredFiles: String {
        return L10n.tr("Localizable", "Scene.Backup.RestoredFiles")
      }
      /// Personas
      static var restoredPersona: String {
        return L10n.tr("Localizable", "Scene.Backup.RestoredPersona")
      }
      /// Encrypted post
      static var restoredPost: String {
        return L10n.tr("Localizable", "Scene.Backup.RestoredPost")
      }
      /// Relations
      static var restoredRelations: String {
        return L10n.tr("Localizable", "Scene.Backup.RestoredRelations")
      }
      /// Verification code has been sent by Email to 
      static var tipsEmail: String {
        return L10n.tr("Localizable", "Scene.Backup.TipsEmail")
      }
      /// Verification code has been sent by SMS to 
      static var tipsPhone: String {
        return L10n.tr("Localizable", "Scene.Backup.TipsPhone")
      }
      /// Verification Code
      static var validationCode: String {
        return L10n.tr("Localizable", "Scene.Backup.ValidationCode")
      }
      /// Back up with Email
      static var withEmail: String {
        return L10n.tr("Localizable", "Scene.Backup.WithEmail")
      }
      /// Back up with Phone
      static var withPhone: String {
        return L10n.tr("Localizable", "Scene.Backup.WithPhone")
      }

      enum MergeToLocal {
        /// Merge cloud backup failed!
        static var mergeFailedMessage: String {
          return L10n.tr("Localizable", "Scene.Backup.MergeToLocal.MergeFailedMessage")
        }
        /// Merge cloud backup
        static var title: String {
          return L10n.tr("Localizable", "Scene.Backup.MergeToLocal.Title")
        }
      }

      enum RemoteBackupActionsView {
        /// There is already a cloud backup, you can either first merge this cloud backup to your local data before you back up, or back up directly.
        static var tips: String {
          return L10n.tr("Localizable", "Scene.Backup.RemoteBackupActionsView.Tips")
        }
      }
    }

    enum BackupPasswordVerify {
      /// Backup password
      static var title: String {
        return L10n.tr("Localizable", "Scene.BackupPasswordVerify.Title")
      }
    }

    enum BiometryId {
      /// Your %@ has been changed, %@ will be closed
      static func biometryHasChanged(_ p1: String, _ p2: String) -> String {
        return L10n.tr("Localizable", "Scene.BiometryId.BiometryHasChanged", p1, p2)
      }
      /// Authentication was not successful because there were too many failed %@ attempts and %@ is now locked. Passcode is required to unlock %@.
      static func biometryLockout(_ p1: String, _ p2: String, _ p3: String) -> String {
        return L10n.tr("Localizable", "Scene.BiometryId.BiometryLockout", p1, p2, p3)
      }
      /// Mask need your Authentication of %@. Please go to Setting -> Mask Network to open
      static func biometryNotAvailable(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.BiometryId.BiometryNotAvailable", p1)
      }
      /// Authentication could not start because %@ has no enrolled identities.
      static func biometryNotEnrolled(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.BiometryId.BiometryNotEnrolled", p1)
      }
      /// Face ID
      static var faceId: String {
        return L10n.tr("Localizable", "Scene.BiometryId.FaceId")
      }
      /// Mask Network needs FaceID to protect your wallet
      static var faceIdReason: String {
        return L10n.tr("Localizable", "Scene.BiometryId.FaceIdReason")
      }
      /// Authentication could not start because passcode is not set on the device.
      static var passcodeNotset: String {
        return L10n.tr("Localizable", "Scene.BiometryId.PasscodeNotset")
      }
      /// Touch ID
      static var touchId: String {
        return L10n.tr("Localizable", "Scene.BiometryId.TouchId")
      }
      /// Mask Network needs TouchID to protect your wallet
      static var touchIdReason: String {
        return L10n.tr("Localizable", "Scene.BiometryId.TouchIdReason")
      }
    }

    enum BiometryRecognition {

      enum FaceId {
        /// Unlock Mask Network faster by setting up facial recognition.
        static var description: String {
          return L10n.tr("Localizable", "Scene.BiometryRecognition.FaceId.Description")
        }
        /// Unlock with Face ID?
        static var title: String {
          return L10n.tr("Localizable", "Scene.BiometryRecognition.FaceId.Title")
        }
      }

      enum TouchId {
        /// Unlock Mask faster with touch ID.
        static var description: String {
          return L10n.tr("Localizable", "Scene.BiometryRecognition.TouchId.Description")
        }
        /// Unlock with touch ID?
        static var title: String {
          return L10n.tr("Localizable", "Scene.BiometryRecognition.TouchId.Title")
        }
      }
    }

    enum ChangeBackupPassword {
      /// Backup password
      static var backupPassword: String {
        return L10n.tr("Localizable", "Scene.ChangeBackupPassword.BackupPassword")
      }
      /// Repeat New Backup Password
      static var confirmBackupPassword: String {
        return L10n.tr("Localizable", "Scene.ChangeBackupPassword.ConfirmBackupPassword")
      }
      /// Two inconsistent passwords.
      static var errorInconsistentPassword: String {
        return L10n.tr("Localizable", "Scene.ChangeBackupPassword.ErrorInconsistentPassword")
      }
      /// Incorrect Backup Password.
      static var errorIncorrectPassword: String {
        return L10n.tr("Localizable", "Scene.ChangeBackupPassword.ErrorIncorrectPassword")
      }
      /// New Backup Password
      static var newBackupPassword: String {
        return L10n.tr("Localizable", "Scene.ChangeBackupPassword.NewBackupPassword")
      }
      /// Please verify your current Backup Password
      static var subTitle: String {
        return L10n.tr("Localizable", "Scene.ChangeBackupPassword.SubTitle")
      }
      /// Backup password must be between 8 and 20 characters and contains at least a number, a uppercase letter, a lowercase letter and a special character.
      static var tips: String {
        return L10n.tr("Localizable", "Scene.ChangeBackupPassword.Tips")
      }
      /// Change Backup Password
      static var title: String {
        return L10n.tr("Localizable", "Scene.ChangeBackupPassword.Title")
      }
    }

    enum ChangePassword {
      /// Repeat New Payment Password
      static var confirmPassword: String {
        return L10n.tr("Localizable", "Scene.ChangePassword.ConfirmPassword")
      }
      /// Failed loading payment password
      static var failedLoadingPassword: String {
        return L10n.tr("Localizable", "Scene.ChangePassword.FailedLoadingPassword")
      }
      /// Incorrect Password.
      static var incorrectPassword: String {
        return L10n.tr("Localizable", "Scene.ChangePassword.IncorrectPassword")
      }
      /// New Payment Password
      static var newPassword: String {
        return L10n.tr("Localizable", "Scene.ChangePassword.NewPassword")
      }
      /// Payment Password
      static var password: String {
        return L10n.tr("Localizable", "Scene.ChangePassword.Password")
      }
      /// Payment Password must be a combination of 2 categories out of numbers, letters and special characters with a length of 8-20 characters.
      static var passwordDemand: String {
        return L10n.tr("Localizable", "Scene.ChangePassword.PasswordDemand")
      }
      /// Two inconsistent passwords.
      static var passwordNotMatch: String {
        return L10n.tr("Localizable", "Scene.ChangePassword.PasswordNotMatch")
      }
      /// Please verify current Payment Password
      static var subTitle: String {
        return L10n.tr("Localizable", "Scene.ChangePassword.SubTitle")
      }
      /// Change Payment Password
      static var title: String {
        return L10n.tr("Localizable", "Scene.ChangePassword.Title")
      }
    }

    enum CreateWallet {
      /// Enter Password
      static var enterPassword: String {
        return L10n.tr("Localizable", "Scene.CreateWallet.EnterPassword")
      }
      /// Our EVM compatible wallet supports the following blockchain networks:
      static var multichainWalletDescription: String {
        return L10n.tr("Localizable", "Scene.CreateWallet.MultichainWalletDescription")
      }
      /// Multi-chain wallet
      static var multichainWalletTitle: String {
        return L10n.tr("Localizable", "Scene.CreateWallet.MultichainWalletTitle")
      }
      /// Incorrect Password.
      static var passwordError: String {
        return L10n.tr("Localizable", "Scene.CreateWallet.PasswordError")
      }
      /// Select Network
      static var selectNetwork: String {
        return L10n.tr("Localizable", "Scene.CreateWallet.SelectNetwork")
      }
      /// Wallet Name
      static var walletName: String {
        return L10n.tr("Localizable", "Scene.CreateWallet.WalletName")
      }
      /// Name your wallet
      static var walletNamePlaceholder: String {
        return L10n.tr("Localizable", "Scene.CreateWallet.WalletNamePlaceholder")
      }
    }

    enum Guide {
      /// Your Portal to the New,\nOpen Internet
      static var description1: String {
        return L10n.tr("Localizable", "Scene.Guide.Description1")
      }
      /// Send Encrypted Messages\non Social Networks with Persona
      static var description2: String {
        return L10n.tr("Localizable", "Scene.Guide.Description2")
      }
      /// Multi-Chain Wallet,\nCompatible with WalletConnect
      static var description3: String {
        return L10n.tr("Localizable", "Scene.Guide.Description3")
      }
      /// Back up in Time,\nwith Cloud / Local Backup
      static var description4: String {
        return L10n.tr("Localizable", "Scene.Guide.Description4")
      }
      /// Let’s start
      static var letsStart: String {
        return L10n.tr("Localizable", "Scene.Guide.LetsStart")
      }
      /// Skip
      static var skip: String {
        return L10n.tr("Localizable", "Scene.Guide.Skip")
      }
    }

    enum IdentifyVerify {
      /// Tap each word in the correct order.
      static var description: String {
        return L10n.tr("Localizable", "Scene.IdentifyVerify.Description")
      }
      /// The identity code is incorrect
      static var identityError: String {
        return L10n.tr("Localizable", "Scene.IdentifyVerify.IdentityError")
      }
      /// Verify identity code
      static var title: String {
        return L10n.tr("Localizable", "Scene.IdentifyVerify.Title")
      }
    }

    enum IdentityCreate {
      /// Download your identity code.
      static var description: String {
        return L10n.tr("Localizable", "Scene.IdentityCreate.Description")
      }
      /// Identity code is used to generate your persona.
      static var identityTips: String {
        return L10n.tr("Localizable", "Scene.IdentityCreate.IdentityTips")
      }
      /// Create Persona
      static var title: String {
        return L10n.tr("Localizable", "Scene.IdentityCreate.Title")
      }
    }

    enum IdentityEmpty {
      /// Create Persona
      static var createAnIdentity: String {
        return L10n.tr("Localizable", "Scene.IdentityEmpty.CreateAnIdentity")
      }
      /// Recover Persona
      static var recoverySignIn: String {
        return L10n.tr("Localizable", "Scene.IdentityEmpty.RecoverySignIn")
      }
      /// Persona
      static var title: String {
        return L10n.tr("Localizable", "Scene.IdentityEmpty.Title")
      }
    }

    enum IdentityMnemonicImport {
      /// The identity code can only recover your persona. 
      static var description: String {
        return L10n.tr("Localizable", "Scene.IdentityMnemonicImport.Description")
      }
      /// Please enter 12 mnemonic words\nseparated by spaces
      static var placeholder: String {
        return L10n.tr("Localizable", "Scene.IdentityMnemonicImport.Placeholder")
      }
      /// Identity
      static var title: String {
        return L10n.tr("Localizable", "Scene.IdentityMnemonicImport.Title")
      }
    }

    enum IdentityPrivatekeyImport {
      /// The private key of your identity code can only recover your persona.
      static var description: String {
        return L10n.tr("Localizable", "Scene.IdentityPrivatekeyImport.Description")
      }
      /// Input your private key
      static var placeholder: String {
        return L10n.tr("Localizable", "Scene.IdentityPrivatekeyImport.Placeholder")
      }
      /// Private Key
      static var title: String {
        return L10n.tr("Localizable", "Scene.IdentityPrivatekeyImport.Title")
      }
    }

    enum IdentityRecovery {
      /// Recovering your personas and wallets (if backed up) with Email or phone number.
      static var cloudBackupRecoveryButtonDescription: String {
        return L10n.tr("Localizable", "Scene.IdentityRecovery.CloudBackupRecoveryButtonDescription")
      }
      /// Cloud backup Recovery
      static var cloudBackupRecoveryButtonTitle: String {
        return L10n.tr("Localizable", "Scene.IdentityRecovery.CloudBackupRecoveryButtonTitle")
      }
      /// Identity Code
      static var identityButton: String {
        return L10n.tr("Localizable", "Scene.IdentityRecovery.IdentityButton")
      }
      /// Recovering your persona.
      static var identityButtonDescription: String {
        return L10n.tr("Localizable", "Scene.IdentityRecovery.IdentityButtonDescription")
      }
      /// Local Backup Recovery
      static var localBackupRecoveryButton: String {
        return L10n.tr("Localizable", "Scene.IdentityRecovery.LocalBackupRecoveryButton")
      }
      /// Recovering your personas and wallets (if backed up).
      static var localBackupRecoveryButtonDescription: String {
        return L10n.tr("Localizable", "Scene.IdentityRecovery.LocalBackupRecoveryButtonDescription")
      }
      /// Private Key
      static var privateKeyButton: String {
        return L10n.tr("Localizable", "Scene.IdentityRecovery.PrivateKeyButton")
      }
      /// Recovering your persona.
      static var privateKeyButtonDescription: String {
        return L10n.tr("Localizable", "Scene.IdentityRecovery.PrivateKeyButtonDescription")
      }
      /// Recovery & Sign In
      static var title: String {
        return L10n.tr("Localizable", "Scene.IdentityRecovery.Title")
      }
    }

    enum IdentityRestoreSigninSuccess {
      /// Restore & Sign In completed!
      static var title: String {
        return L10n.tr("Localizable", "Scene.IdentityRestoreSigninSuccess.Title")
      }
    }

    enum MaskScan {
      /// Scan Persona or walletConnect QR Code
      static var scanAll: String {
        return L10n.tr("Localizable", "Scene.MaskScan.ScanAll")
      }
      /// Scan Persona QR Code
      static var scanPersona: String {
        return L10n.tr("Localizable", "Scene.MaskScan.ScanPersona")
      }
    }

    enum MessageCompose {
      /// Encrypt
      static var encrypt: String {
        return L10n.tr("Localizable", "Scene.MessageCompose.Encrypt")
      }
      /// Everyone can see
      static var everyone: String {
        return L10n.tr("Localizable", "Scene.MessageCompose.Everyone")
      }
      /// Only me
      static var onlyMe: String {
        return L10n.tr("Localizable", "Scene.MessageCompose.OnlyMe")
      }
      /// What do you want to encrypt?
      static var placeholder: String {
        return L10n.tr("Localizable", "Scene.MessageCompose.Placeholder")
      }
      /// Special Contacts can see
      static var specialContacts: String {
        return L10n.tr("Localizable", "Scene.MessageCompose.SpecialContacts")
      }
      /// Compose
      static var title: String {
        return L10n.tr("Localizable", "Scene.MessageCompose.Title")
      }
    }

    enum MnemonicVerify {
      /// Tap each word in the correct order.
      static var description: String {
        return L10n.tr("Localizable", "Scene.MnemonicVerify.Description")
      }
      /// The mnemonic is incorrect
      static var mnemonicError: String {
        return L10n.tr("Localizable", "Scene.MnemonicVerify.MnemonicError")
      }
      /// Tap the middle to replace the word.
      static var mnemonicPrompt: String {
        return L10n.tr("Localizable", "Scene.MnemonicVerify.MnemonicPrompt")
      }
      /// Verify Your Phrase
      static var title: String {
        return L10n.tr("Localizable", "Scene.MnemonicVerify.Title")
      }
      /// Tap each word in the correct order.
      static var wordsTitle: String {
        return L10n.tr("Localizable", "Scene.MnemonicVerify.WordsTitle")
      }
    }

    enum MnemonicWord {
      /// Write down each word.
      static var description: String {
        return L10n.tr("Localizable", "Scene.MnemonicWord.Description")
      }
      /// Mnemonic word
      static var title: String {
        return L10n.tr("Localizable", "Scene.MnemonicWord.Title")
      }
    }

    enum MoveBackupData {
      /// We have detected that there are probably important backup documents(.pdf, .bin) in your Mask Network Sandbox Folder.
      static var description1: String {
        return L10n.tr("Localizable", "Scene.MoveBackupData.Description1")
      }
      /// When you delete Mask App, these documents would also be deleted.
      static var description2: String {
        return L10n.tr("Localizable", "Scene.MoveBackupData.Description2")
      }
      /// For data safety, please move your data to a more secure folder.
      static var description3: String {
        return L10n.tr("Localizable", "Scene.MoveBackupData.Description3")
      }
      /// Please move your data
      static var title: String {
        return L10n.tr("Localizable", "Scene.MoveBackupData.Title")
      }
    }

    enum NftDetail {
      /// View Collection Website
      static var collectionWeb: String {
        return L10n.tr("Localizable", "Scene.NftDetail.CollectionWeb")
      }
      /// View on Etherscan
      static var etherscan: String {
        return L10n.tr("Localizable", "Scene.NftDetail.Etherscan")
      }
      /// Floor Price
      static var floorPrice: String {
        return L10n.tr("Localizable", "Scene.NftDetail.FloorPrice")
      }
      /// Last Sale Price
      static var lastSalePrice: String {
        return L10n.tr("Localizable", "Scene.NftDetail.LastSalePrice")
      }
      /// List Price
      static var listPrice: String {
        return L10n.tr("Localizable", "Scene.NftDetail.ListPrice")
      }
      /// Save to Photos
      static var savePhoto: String {
        return L10n.tr("Localizable", "Scene.NftDetail.SavePhoto")
      }
    }

    enum OpenRedPackage {
      /// Claim
      static var claim: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Claim")
      }
      /// Claimed
      static var claimed: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Claimed")
      }
      /// Claiming
      static var claiming: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Claiming")
      }
      /// Confirm Risk Warning
      static var confirmRiskWarning: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.ConfirmRiskWarning")
      }
      /// Empty
      static var empty: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Empty")
      }
      /// Ends
      static var ends: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Ends")
      }
      /// Expired
      static var expired: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Expired")
      }
      /// From: @
      static var from: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.From")
      }
      /// Ongoing
      static var onGoing: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.OnGoing")
      }
      /// Refund
      static var refund: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Refund")
      }
      /// Refunded
      static var refunded: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Refunded")
      }
      /// Hi friends, I just claimed a lucky drop sent by %@ on %@ network. Follow %@ (mask.io) to claim the lucky drops.\n#mask_io #LuckyDrop\n%@
      static func shareMessageOfficial(_ p1: String, _ p2: String, _ p3: String, _ p4: String) -> String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.ShareMessageOfficial", p1, p2, p3, p4)
      }
      /// Hi friends, I just claimed a lucky drop sent by @%@ on %@ network. \n%@
      static func shareMessageUnsupportPlatform(_ p1: String, _ p2: String, _ p3: String) -> String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.ShareMessageUnsupportPlatform", p1, p2, p3)
      }
      /// Shares
      static var shares: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Shares")
      }
      /// Switch Network
      static var switchNetwork: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.SwitchNetwork")
      }
      /// Lucky Drop
      static var title: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Title")
      }
      /// Total
      static var total: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Total")
      }
      /// Wallet
      static var wallet: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.Wallet")
      }
      /// Wrong Network
      static var wrongNetwork: String {
        return L10n.tr("Localizable", "Scene.OpenRedPackage.WrongNetwork")
      }
    }

    enum PersonaAvatar {
      /// Crop & rotate
      static var crop: String {
        return L10n.tr("Localizable", "Scene.PersonaAvatar.Crop")
      }
      /// Remove Persona Avatar
      static var removeAvatar: String {
        return L10n.tr("Localizable", "Scene.PersonaAvatar.RemoveAvatar")
      }
      /// Set Persona Avatar
      static var title: String {
        return L10n.tr("Localizable", "Scene.PersonaAvatar.Title")
      }
    }

    enum PersonaContacts {
      /// Contact
      static var contact: String {
        return L10n.tr("Localizable", "Scene.PersonaContacts.Contact")
      }
      /// Confirm to delete 
      static var delete: String {
        return L10n.tr("Localizable", "Scene.PersonaContacts.Delete")
      }
      /// No accounts captured on Timeline. \nInvite friends to download Mask Network.
      static var emptyContactsTips: String {
        return L10n.tr("Localizable", "Scene.PersonaContacts.EmptyContactsTips")
      }
      /// No contact found. This account may not \nbe captured on timeline.
      static var searchContactTips: String {
        return L10n.tr("Localizable", "Scene.PersonaContacts.SearchContactTips")
      }
    }

    enum PersonaDownload {
      /// The QR code encrypts the identity code or private key of your persona. It’s recommended to print it. You can use Mask App to scan the QR code to login.
      static var downloadTips: String {
        return L10n.tr("Localizable", "Scene.PersonaDownload.DownloadTips")
      }
      /// Identity Code
      static var identityId: String {
        return L10n.tr("Localizable", "Scene.PersonaDownload.IdentityId")
      }
    }

    enum PersonaExportPrivateKey {
      /// Backup and Recovery
      static var backupRecovery: String {
        return L10n.tr("Localizable", "Scene.PersonaExportPrivateKey.BackupRecovery")
      }
      /// This export is only for exporting private key. We do not export any other data. If you need more data, please go to Settings: 
      static var tips: String {
        return L10n.tr("Localizable", "Scene.PersonaExportPrivateKey.Tips")
      }
      /// Export Private Key
      static var title: String {
        return L10n.tr("Localizable", "Scene.PersonaExportPrivateKey.Title")
      }
    }

    enum PersonaSocial {
      /// Accounts
      static var accounts: String {
        return L10n.tr("Localizable", "Scene.PersonaSocial.Accounts")
      }
      /// Add
      static var add: String {
        return L10n.tr("Localizable", "Scene.PersonaSocial.Add")
      }
      /// Connect Social accounts
      static var connectSocialAccounts: String {
        return L10n.tr("Localizable", "Scene.PersonaSocial.ConnectSocialAccounts")
      }
      /// Connect persona to social networks below
      static var connectTips: String {
        return L10n.tr("Localizable", "Scene.PersonaSocial.ConnectTips")
      }
      /// Disconnect
      static var disconnect: String {
        return L10n.tr("Localizable", "Scene.PersonaSocial.Disconnect")
      }
      /// Facebook
      static var facebook: String {
        return L10n.tr("Localizable", "Scene.PersonaSocial.Facebook")
      }
      /// Instagram
      static var instagram: String {
        return L10n.tr("Localizable", "Scene.PersonaSocial.Instagram")
      }
      /// Minds
      static var minds: String {
        return L10n.tr("Localizable", "Scene.PersonaSocial.Minds")
      }
      /// Twitter
      static var twitter: String {
        return L10n.tr("Localizable", "Scene.PersonaSocial.Twitter")
      }
    }

    enum PersonaWelcome {
      /// Create personas and connect social accounts
      static var description: String {
        return L10n.tr("Localizable", "Scene.PersonaWelcome.Description")
      }
      /// Persona
      static var persona: String {
        return L10n.tr("Localizable", "Scene.PersonaWelcome.Persona")
      }
      /// Welcome to Mask Network
      static var title: String {
        return L10n.tr("Localizable", "Scene.PersonaWelcome.Title")
      }
    }

    enum Personas {
      /// Add Persona
      static var addPersona: String {
        return L10n.tr("Localizable", "Scene.Personas.AddPersona")
      }
      /// Confirm to delete persona\n
      static var delete: String {
        return L10n.tr("Localizable", "Scene.Personas.Delete")
      }
      /// If you haven’t backed up, please go to Settings - Backup and Recovery
      static var deleteTip: String {
        return L10n.tr("Localizable", "Scene.Personas.DeleteTip")
      }
      /// Persona
      static var personas: String {
        return L10n.tr("Localizable", "Scene.Personas.Personas")
      }

      enum Action {
        /// Back Up
        static var backup: String {
          return L10n.tr("Localizable", "Scene.Personas.Action.Backup")
        }
        /// Change or Add Persona
        static var changeAddPersona: String {
          return L10n.tr("Localizable", "Scene.Personas.Action.ChangeAddPersona")
        }
        /// Delete
        static var delete: String {
          return L10n.tr("Localizable", "Scene.Personas.Action.Delete")
        }
        /// Download Persona QR Code
        static var download: String {
          return L10n.tr("Localizable", "Scene.Personas.Action.Download")
        }
        /// Export Private Key
        static var exportPrivateKey: String {
          return L10n.tr("Localizable", "Scene.Personas.Action.ExportPrivateKey")
        }
        /// Log Out
        static var logOut: String {
          return L10n.tr("Localizable", "Scene.Personas.Action.LogOut")
        }
        /// Rename
        static var rename: String {
          return L10n.tr("Localizable", "Scene.Personas.Action.Rename")
        }
      }

      enum Create {
        /// Create Persona
        static var createPersona: String {
          return L10n.tr("Localizable", "Scene.Personas.Create.CreatePersona")
        }
        /// Input persona name
        static var inputPersonaName: String {
          return L10n.tr("Localizable", "Scene.Personas.Create.InputPersonaName")
        }
        /// Persona
        static var persona: String {
          return L10n.tr("Localizable", "Scene.Personas.Create.Persona")
        }
      }

      enum Search {
        /// Search
        static var placeholder: String {
          return L10n.tr("Localizable", "Scene.Personas.Search.Placeholder")
        }
      }

      enum Tabs {
        /// Contacts
        static var contacts: String {
          return L10n.tr("Localizable", "Scene.Personas.Tabs.Contacts")
        }
        /// Group
        static var group: String {
          return L10n.tr("Localizable", "Scene.Personas.Tabs.Group")
        }
        /// Post
        static var post: String {
          return L10n.tr("Localizable", "Scene.Personas.Tabs.Post")
        }
        /// Social
        static var social: String {
          return L10n.tr("Localizable", "Scene.Personas.Tabs.Social")
        }
      }
    }

    enum Restore {
      /// Please examine your data backup.
      static var checkUnsupportData: String {
        return L10n.tr("Localizable", "Scene.Restore.CheckUnsupportData")
      }
      /// Restore completed.
      static var completion: String {
        return L10n.tr("Localizable", "Scene.Restore.Completion")
      }
      /// Restore Failed. We are unable to restore your backup.
      static var failedDetail: String {
        return L10n.tr("Localizable", "Scene.Restore.FailedDetail")
      }
      /// Backup time
      static var restoreCreatedDate: String {
        return L10n.tr("Localizable", "Scene.Restore.RestoreCreatedDate")
      }
      /// Associated account
      static var restoredAccount: String {
        return L10n.tr("Localizable", "Scene.Restore.RestoredAccount")
      }
      /// Contacts
      static var restoredContacts: String {
        return L10n.tr("Localizable", "Scene.Restore.RestoredContacts")
      }
      /// Files
      static var restoredFiles: String {
        return L10n.tr("Localizable", "Scene.Restore.RestoredFiles")
      }
      /// Personas
      static var restoredPersona: String {
        return L10n.tr("Localizable", "Scene.Restore.RestoredPersona")
      }
      /// Encrypted post
      static var restoredPost: String {
        return L10n.tr("Localizable", "Scene.Restore.RestoredPost")
      }
      /// Relations
      static var restoredRelations: String {
        return L10n.tr("Localizable", "Scene.Restore.RestoredRelations")
      }
      /// Restore and Sign in completed.
      static var succeedDetail: String {
        return L10n.tr("Localizable", "Scene.Restore.SucceedDetail")
      }
      /// existed
      static var walletExisted: String {
        return L10n.tr("Localizable", "Scene.Restore.WalletExisted")
      }

      enum Buttontitles {
        /// Restore Backups
        static var backup: String {
          return L10n.tr("Localizable", "Scene.Restore.Buttontitles.Backup")
        }
        /// Confirm
        static var confirm: String {
          return L10n.tr("Localizable", "Scene.Restore.Buttontitles.Confirm")
        }
        /// Recovery with Mobile
        static var email: String {
          return L10n.tr("Localizable", "Scene.Restore.Buttontitles.Email")
        }
        /// Recovery with Email
        static var mobile: String {
          return L10n.tr("Localizable", "Scene.Restore.Buttontitles.Mobile")
        }
        /// Next
        static var next: String {
          return L10n.tr("Localizable", "Scene.Restore.Buttontitles.Next")
        }
        /// Resend
        static var resend: String {
          return L10n.tr("Localizable", "Scene.Restore.Buttontitles.Resend")
        }
        /// Resotre
        static var restore: String {
          return L10n.tr("Localizable", "Scene.Restore.Buttontitles.Restore")
        }
      }

      enum InputPlaceholder {
        /// Input your Email Address
        static var email: String {
          return L10n.tr("Localizable", "Scene.Restore.InputPlaceholder.Email")
        }
      }

      enum InputTitle {
        /// Email
        static var email: String {
          return L10n.tr("Localizable", "Scene.Restore.InputTitle.Email")
        }
        /// Phone Number
        static var mobile: String {
          return L10n.tr("Localizable", "Scene.Restore.InputTitle.Mobile")
        }
        /// Payment Password 
        static var paymentPassword: String {
          return L10n.tr("Localizable", "Scene.Restore.InputTitle.PaymentPassword")
        }
        /// Cloud backup password
        static var remoteBackupPassword: String {
          return L10n.tr("Localizable", "Scene.Restore.InputTitle.RemoteBackupPassword")
        }
        /// Verification Code
        static var validationcode: String {
          return L10n.tr("Localizable", "Scene.Restore.InputTitle.Validationcode")
        }
      }

      enum Tip {
        /// To decrypt the cloud backup, enter the backup password you used when you backed up to cloud.
        static var cloudBackupPasswordHint: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.CloudBackupPasswordHint")
        }
        /// Please try to load data again.
        static var dataFailedToFetch: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.DataFailedToFetch")
        }
        /// Verification code has been sent by Email to
        static var emailValidationcode: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.EmailValidationcode")
        }
        /// Failed to download restore file, please try again
        static var failedLoadingRemotefile: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.FailedLoadingRemotefile")
        }
        /// failed to download remote file
        static var failedToDownloadFile: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.FailedToDownloadFile")
        }
        /// Incorrect cloud backup password
        static var incorrectBackupPassword: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.IncorrectBackupPassword")
        }
        /// The verification code is incorrect
        static var incorrectValidationcode: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.IncorrectValidationcode")
        }
        /// Please enter the correct email address
        static var invalidEmailAddress: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.InvalidEmailAddress")
        }
        /// Incorrect Phone number
        static var invalidMobileNumber: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.InvalidMobileNumber")
        }
        /// The verification code is invalid
        static var invalidValidationcode: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.InvalidValidationcode")
        }
        /// Verification code has been sent to by SMS to
        static var mobileValidationcode: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.MobileValidationcode")
        }
        /// You have successfully verified your cloud password and the backup is being uploaded. 
        static var remoteRestoreSucceed: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.RemoteRestoreSucceed")
        }
        /// To unify backup passwords, do you want to synchronize your cloud password as local password?
        static var remoteRestoreSyncingPassword: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.RemoteRestoreSyncingPassword")
        }
        /// Incorrect verification code, please try again after 5 minutes
        static var validationcodeFiveMinutes: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.ValidationcodeFiveMinutes")
        }
        /// Incorrect verification code, please try again after 1 hour
        static var validationcodeOneHour: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.ValidationcodeOneHour")
        }
        /// Incorrect verification code, please try again after 10 minutes
        static var validationcodeTenMinutes: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.ValidationcodeTenMinutes")
        }
        /// Incorrect verification code, please try again after 30 minutes
        static var validationcodeThirtyMinutes: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.ValidationcodeThirtyMinutes")
        }
        /// Incorrect verification code, please try again after 24 hours
        static var validationcodeTwentyfourHours: String {
          return L10n.tr("Localizable", "Scene.Restore.Tip.ValidationcodeTwentyfourHours")
        }
      }

      enum Titles {
        /// Loading failed
        static var loadingFailed: String {
          return L10n.tr("Localizable", "Scene.Restore.Titles.LoadingFailed")
        }
        /// Wallets for recovery
        static var nativeWallets: String {
          return L10n.tr("Localizable", "Scene.Restore.Titles.NativeWallets")
        }
        /// Recovery with Email
        static var recoveryWithEmail: String {
          return L10n.tr("Localizable", "Scene.Restore.Titles.RecoveryWithEmail")
        }
        /// Recovery with Phone Number
        static var recoveryWithMobile: String {
          return L10n.tr("Localizable", "Scene.Restore.Titles.RecoveryWithMobile")
        }
        /// Restore backups
        static var restoreBuckup: String {
          return L10n.tr("Localizable", "Scene.Restore.Titles.RestoreBuckup")
        }
        /// Restore failed
        static var restoreFailed: String {
          return L10n.tr("Localizable", "Scene.Restore.Titles.RestoreFailed")
        }
        /// Restore Cloud backup
        static var restoreRemoteBackup: String {
          return L10n.tr("Localizable", "Scene.Restore.Titles.RestoreRemoteBackup")
        }
        /// Restore succeed
        static var restoreSucceed: String {
          return L10n.tr("Localizable", "Scene.Restore.Titles.RestoreSucceed")
        }
        /// Unsupported data backup
        static var unsupportRestoreData: String {
          return L10n.tr("Localizable", "Scene.Restore.Titles.UnsupportRestoreData")
        }
        /// Verify Payment Password
        static var verifyWalletPassword: String {
          return L10n.tr("Localizable", "Scene.Restore.Titles.VerifyWalletPassword")
        }
      }
    }

    enum Sendtransaction {

      enum Addcontact {
        /// Add Contact
        static var btnAdd: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Addcontact.BtnAdd")
        }
        /// Pending...
        static var pending: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Addcontact.Pending")
        }
        /// Name
        static var placeholderName: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Addcontact.PlaceholderName")
        }
      }

      enum Gasprice {
        /// Advanced
        static var advancedbtn: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Advancedbtn")
        }
        /// Arrives in
        static var arrives: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Arrives")
        }
        /// Confirm
        static var btnConfirm: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.BtnConfirm")
        }
        /// cost fee:
        static var costfee: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Costfee")
        }
        /// Custom
        static var custom: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Custom")
        }
        /// Fast
        static var fast: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Fast")
        }
        /// Fee
        static var fee: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Fee")
        }
        /// Gas Limit(gas)
        static var gaslimit: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Gaslimit")
        }
        /// Gas limit must be at least 
        static var gaslimitError: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.GaslimitError")
        }
        /// Gas Price(Gwei)
        static var gasprice: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Gasprice")
        }
        /// Max fee(Gwei)
        static var maxfee: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Maxfee")
        }
        /// Max fee is higher than necessary.
        static var maxfeeErrorHigh: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.MaxfeeErrorHigh")
        }
        /// Max fee cannot be lower than max priority fee
        static var maxfeeErrorLow: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.MaxfeeErrorLow")
        }
        /// Max priority fee(Gwei)
        static var maxpriorityfee: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Maxpriorityfee")
        }
        /// Max fee too low for network conditions.
        static var maxpriorityfeeErrorHigh: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.MaxpriorityfeeErrorHigh")
        }
        /// Max pirority fee extremely low for network conditions.
        static var maxpriorityfeeErrorLow: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.MaxpriorityfeeErrorLow")
        }
        /// Standard
        static var standard: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Standard")
        }
        /// Edit Gas Price
        static var title: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Gasprice.Title")
        }
      }

      enum Send {
        /// Insufficient amount.
        static var amountError: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.AmountError")
        }
        /// Max
        static var btnMax: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.BtnMax")
        }
        /// Next
        static var btnNext: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.BtnNext")
        }
        /// Send
        static var btnSend: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.BtnSend")
        }
        /// Hold to Send
        static var btnWithoutpassword: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.BtnWithoutpassword")
        }
        /// Contacts
        static var contact: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.Contact")
        }
        /// Insufficient gas balance.
        static var gasfeeError: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.GasfeeError")
        }
        /// Amount
        static var labelAmount: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.LabelAmount")
        }
        /// Password
        static var labelPassword: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.LabelPassword")
        }
        /// To
        static var labelTo: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.LabelTo")
        }
        /// Incorrect payment password.
        static var passwordError: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.PasswordError")
        }
        /// Ens or Address(0x...)
        static var placeholderAddress: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.PlaceholderAddress")
        }
        /// Recent
        static var recent: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Send.Recent")
        }
      }

      enum Sendconfirmpop {
        /// Edit
        static var edit: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Sendconfirmpop.Edit")
        }
        /// Gas fee
        static var gasfee: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Sendconfirmpop.Gasfee")
        }
        /// Very likely in < 15 seconds
        static var gasfeehigh: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Sendconfirmpop.Gasfeehigh")
        }
        /// Maybe in 30 seconds
        static var gasfeelow: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Sendconfirmpop.Gasfeelow")
        }
        /// Likely in < 30 seconds
        static var gasfeemedium: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Sendconfirmpop.Gasfeemedium")
        }
        /// Total
        static var total: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Sendconfirmpop.Total")
        }
      }

      enum Tokenlist {
        /// Token name or contract address
        static var placeholder: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Tokenlist.Placeholder")
        }
        /// Search Token
        static var title: String {
          return L10n.tr("Localizable", "Scene.Sendtransaction.Tokenlist.Title")
        }
      }
    }

    enum SetBackupPassword {
      /// Backup password
      static var backupPassword: String {
        return L10n.tr("Localizable", "Scene.SetBackupPassword.BackupPassword")
      }
      /// Confirm Backup Password
      static var confirmBackupPassword: String {
        return L10n.tr("Localizable", "Scene.SetBackupPassword.ConfirmBackupPassword")
      }
      /// Two inconsistent passwords.
      static var errorInconsistentPassword: String {
        return L10n.tr("Localizable", "Scene.SetBackupPassword.ErrorInconsistentPassword")
      }
      /// Backup password must be between 8 and 20 characters and contains at least a number, a uppercase letter, a lowercase letter and a special character.
      static var tips: String {
        return L10n.tr("Localizable", "Scene.SetBackupPassword.Tips")
      }
      /// Set Up Backup Password
      static var title: String {
        return L10n.tr("Localizable", "Scene.SetBackupPassword.Title")
      }
    }

    enum SetPassword {
      /// Confirm Payment Password 
      static var confirmPaymentPassword: String {
        return L10n.tr("Localizable", "Scene.SetPassword.ConfirmPaymentPassword")
      }
      /// Failed updating payment password
      static var failedUpdatingPassword: String {
        return L10n.tr("Localizable", "Scene.SetPassword.FailedUpdatingPassword")
      }
      /// Input Payment Password
      static var inputPaymentPassword: String {
        return L10n.tr("Localizable", "Scene.SetPassword.InputPaymentPassword")
      }
      /// Payment Password must be a combination of 2 categories out of numbers, letters and special characters with a length of 8-20 characters.
      static var passwordInvalid: String {
        return L10n.tr("Localizable", "Scene.SetPassword.PasswordInvalid")
      }
      /// Payment Password
      static var paymentPassword: String {
        return L10n.tr("Localizable", "Scene.SetPassword.PaymentPassword")
      }
      /// Repeat Payment Password
      static var repeatPaymentPassword: String {
        return L10n.tr("Localizable", "Scene.SetPassword.RepeatPaymentPassword")
      }
      /// Set Up Payment Password
      static var title: String {
        return L10n.tr("Localizable", "Scene.SetPassword.Title")
      }
    }

    enum Setting {
      /// Verification Code
      static var validationCode: String {
        return L10n.tr("Localizable", "Scene.Setting.ValidationCode")
      }
      /// Incorrect Verification Code
      static var validationCodeMismatch: String {
        return L10n.tr("Localizable", "Scene.Setting.ValidationCodeMismatch")
      }
      /// Verification code has been sent by Email to
      static var validationCodeViaEmail: String {
        return L10n.tr("Localizable", "Scene.Setting.ValidationCodeViaEmail")
      }
      /// Verification code has been sent by SMS to
      static var validationCodeViaMobilePhone: String {
        return L10n.tr("Localizable", "Scene.Setting.ValidationCodeViaMobilePhone")
      }

      enum BackupData {
        /// Back Up All to iCloud
        static var backupIcloud: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupData.BackupIcloud")
        }
        /// Back Up Manually
        static var backupManually: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupData.BackupManually")
        }
        /// You haven’t backed up yet
        static var noBackupTitle: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupData.NoBackupTitle")
        }
        /// Your most recent backup is %@.
        static func subtitle(_ p1: String) -> String {
          return L10n.tr("Localizable", "Scene.Setting.BackupData.Subtitle", p1)
        }
        /// Back up your data
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupData.Title")
        }
      }

      enum BackupRecovery {
        /// Back Up Data
        static var backUpData: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupRecovery.BackUpData")
        }
        /// Backup Password
        static var backUpPassword: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupRecovery.BackUpPassword")
        }
        /// Please set up backup password
        static var backUpPasswordEmpty: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupRecovery.BackUpPasswordEmpty")
        }
        /// Please enter the backup password that you used when you encrypt the backup file. 
        static var backUpPasswordValidationTip: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupRecovery.BackUpPasswordValidationTip")
        }
        /// Change Backup Password
        static var changeBackupPassword: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupRecovery.ChangeBackupPassword")
        }
        /// Restore Data
        static var restoreData: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupRecovery.RestoreData")
        }
        /// Backup & Recovery
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupRecovery.Title")
        }
        /// Wrong Password
        static var wrongPassword: String {
          return L10n.tr("Localizable", "Scene.Setting.BackupRecovery.WrongPassword")
        }
      }

      enum BindEmail {
        /// Email
        static var subTitle: String {
          return L10n.tr("Localizable", "Scene.Setting.BindEmail.SubTitle")
        }
        /// Set up email
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.BindEmail.Title")
        }
      }

      enum BindPhoneNumber {
        /// Phone number
        static var subTitle: String {
          return L10n.tr("Localizable", "Scene.Setting.BindPhoneNumber.SubTitle")
        }
        /// Set Up Phone number
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.BindPhoneNumber.Title")
        }
      }

      enum BindRemoteInfo {
        /// You have successfully change your email.
        static var changeEmailDetail: String {
          return L10n.tr("Localizable", "Scene.Setting.BindRemoteInfo.ChangeEmailDetail")
        }
        /// Email successfully changed!
        static var changeEmailTitle: String {
          return L10n.tr("Localizable", "Scene.Setting.BindRemoteInfo.ChangeEmailTitle")
        }
        /// You have successfully change your phone number.
        static var changePhoneNumberDetail: String {
          return L10n.tr("Localizable", "Scene.Setting.BindRemoteInfo.ChangePhoneNumberDetail")
        }
        /// Phone number successfully changed!
        static var changePhoneNumberTitle: String {
          return L10n.tr("Localizable", "Scene.Setting.BindRemoteInfo.ChangePhoneNumberTitle")
        }
        /// You have successfully set up your email.
        static var setupEmailDetail: String {
          return L10n.tr("Localizable", "Scene.Setting.BindRemoteInfo.SetupEmailDetail")
        }
        /// Email successfully set up!
        static var setupEmailTitle: String {
          return L10n.tr("Localizable", "Scene.Setting.BindRemoteInfo.SetupEmailTitle")
        }
        /// You have successfully set up your phone number.
        static var setupPhoneNumberDetail: String {
          return L10n.tr("Localizable", "Scene.Setting.BindRemoteInfo.SetupPhoneNumberDetail")
        }
        /// Phone number successfully set up!
        static var setupPhoneNumberTitle: String {
          return L10n.tr("Localizable", "Scene.Setting.BindRemoteInfo.SetupPhoneNumberTitle")
        }
      }

      enum ChangeEmail {
        /// New Email
        static var subTitle: String {
          return L10n.tr("Localizable", "Scene.Setting.ChangeEmail.SubTitle")
        }
        /// To change Email, please verify your current Email address
        static var tips: String {
          return L10n.tr("Localizable", "Scene.Setting.ChangeEmail.Tips")
        }
        /// Change Email
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.ChangeEmail.Title")
        }
      }

      enum ChangePhoneNumber {
        /// New Phone number
        static var subTitle: String {
          return L10n.tr("Localizable", "Scene.Setting.ChangePhoneNumber.SubTitle")
        }
        /// To change your phone,  you need to verify your current phone number.
        static var tips: String {
          return L10n.tr("Localizable", "Scene.Setting.ChangePhoneNumber.Tips")
        }
        /// Change Phone number
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.ChangePhoneNumber.Title")
        }
      }

      enum Detail {
        /// Automatic
        static var automatic: String {
          return L10n.tr("Localizable", "Scene.Setting.Detail.Automatic")
        }
        /// Dark
        static var dark: String {
          return L10n.tr("Localizable", "Scene.Setting.Detail.Dark")
        }
        /// Light
        static var light: String {
          return L10n.tr("Localizable", "Scene.Setting.Detail.Light")
        }
      }

      enum General {
        /// Appearance
        static var appearance: String {
          return L10n.tr("Localizable", "Scene.Setting.General.Appearance")
        }
        /// Change Payment Password
        static var changePaymentPassword: String {
          return L10n.tr("Localizable", "Scene.Setting.General.ChangePaymentPassword")
        }
        /// Data Source
        static var dataSource: String {
          return L10n.tr("Localizable", "Scene.Setting.General.DataSource")
        }
        /// Language
        static var language: String {
          return L10n.tr("Localizable", "Scene.Setting.General.Language")
        }
        /// Payment Password
        static var setupPaymentPassword: String {
          return L10n.tr("Localizable", "Scene.Setting.General.SetupPaymentPassword")
        }
        /// Sync with Plug-ins
        static var syncWithPlug: String {
          return L10n.tr("Localizable", "Scene.Setting.General.SyncWithPlug")
        }
        /// General
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.General.Title")
        }
        /// Unlock wallet with Face ID
        static var unlockWalletWithFaceId: String {
          return L10n.tr("Localizable", "Scene.Setting.General.UnlockWalletWithFaceId")
        }
        /// Unlock wallet with Touch ID
        static var unlockWalletWithTouchId: String {
          return L10n.tr("Localizable", "Scene.Setting.General.UnlockWalletWithTouchId")
        }
      }

      enum LocalBackup {
        /// Backing up...
        static var loadingText: String {
          return L10n.tr("Localizable", "Scene.Setting.LocalBackup.LoadingText")
        }
        /// Local Wallet
        static var localWallet: String {
          return L10n.tr("Localizable", "Scene.Setting.LocalBackup.LocalWallet")
        }
        /// Back up locally
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.LocalBackup.Title")
        }
      }

      enum Profile {
        /// Email
        static var email: String {
          return L10n.tr("Localizable", "Scene.Setting.Profile.Email")
        }
        /// Please bind your Email
        static var emailEmpty: String {
          return L10n.tr("Localizable", "Scene.Setting.Profile.EmailEmpty")
        }
        /// Log Out
        static var logOut: String {
          return L10n.tr("Localizable", "Scene.Setting.Profile.LogOut")
        }
        /// Phone Number
        static var phoneNumber: String {
          return L10n.tr("Localizable", "Scene.Setting.Profile.PhoneNumber")
        }
        /// Please bind your phone number
        static var phoneNumberEmpty: String {
          return L10n.tr("Localizable", "Scene.Setting.Profile.PhoneNumberEmpty")
        }
        /// Profile
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.Profile.Title")
        }
      }

      enum Recovery {
        /// Backup Recovery from iCloud
        static var backupIcloud: String {
          return L10n.tr("Localizable", "Scene.Setting.Recovery.BackupIcloud")
        }
        /// Backup Recovery from iPhone
        static var backupManually: String {
          return L10n.tr("Localizable", "Scene.Setting.Recovery.BackupManually")
        }
        /// Backup Recovery
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.Recovery.Title")
        }
      }

      enum RemoteBackup {
        /// Back up to cloud
        static var title: String {
          return L10n.tr("Localizable", "Scene.Setting.RemoteBackup.Title")
        }
      }
    }

    enum Share {
      /// Hi %@, install Mask.io to explore Web3 features in social media. Free to use NFT PFP, Crypto lucky drop, Web3 FIle service and other plugins. Showcase your Web3 explore footprints.
      static func invite(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.Share.Invite", p1)
      }
      /// Share Mask Network Link:
      static var sharelink: String {
        return L10n.tr("Localizable", "Scene.Share.Sharelink")
      }
    }

    enum Social {
      /// Account already connected
      static var accountAlreadyConnected: String {
        return L10n.tr("Localizable", "Scene.Social.AccountAlreadyConnected")
      }
      /// Connect
      static var connectButtonTitle: String {
        return L10n.tr("Localizable", "Scene.Social.ConnectButtonTitle")
      }
      /// Connected
      static var connected: String {
        return L10n.tr("Localizable", "Scene.Social.Connected")
      }
      /// Log in to %@ to connect
      static func connectHint(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.Social.ConnectHint", p1)
      }
      /// %@ connected.\nSwitch account to access another.
      static func connectHintLoggedIn(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.Social.ConnectHintLoggedIn", p1)
      }
      /// 
      static var connectStop: String {
        return L10n.tr("Localizable", "Scene.Social.ConnectStop")
      }
      /// Connect to Mask Network
      static var connectToMaskNetwork: String {
        return L10n.tr("Localizable", "Scene.Social.ConnectToMaskNetwork")
      }
      /// I understand
      static var iUnderstand: String {
        return L10n.tr("Localizable", "Scene.Social.IUnderstand")
      }
      /// Please log in to Twitter first and we will guide you through the next steps to connect to Mask Network.
      static var loginInNotify: String {
        return L10n.tr("Localizable", "Scene.Social.LoginInNotify")
      }
      /// Log in to continue
      static var loginInToContinue: String {
        return L10n.tr("Localizable", "Scene.Social.LoginInToContinue")
      }
      /// Select Username
      static var profileSelectTitle: String {
        return L10n.tr("Localizable", "Scene.Social.ProfileSelectTitle")
      }
      /// Home
      static var title: String {
        return L10n.tr("Localizable", "Scene.Social.Title")
      }

      enum Error {
        /// Fail to connect the profile
        static var failToConnect: String {
          return L10n.tr("Localizable", "Scene.Social.Error.FailToConnect")
        }
      }
    }

    enum TermsOfService {
      /// Please review the Privacy Policy and Terms of Service of Mask Network.
      static var description: String {
        return L10n.tr("Localizable", "Scene.TermsOfService.Description")
      }
      /// Service Agreement
      static var serviceAgreement: String {
        return L10n.tr("Localizable", "Scene.TermsOfService.ServiceAgreement")
      }
      /// Legal
      static var title: String {
        return L10n.tr("Localizable", "Scene.TermsOfService.Title")
      }
    }

    enum TokenDetail {
      /// Switch Network Manually
      static var switchNetwork: String {
        return L10n.tr("Localizable", "Scene.TokenDetail.SwitchNetwork")
      }
      /// The walletConnect wallet network is not the same as the asset network (%@). Please go to your wallet and switch to %@ and reconnect with walletConnect.
      static func walletconnectSwitchNetworkAlert(_ p1: String, _ p2: String) -> String {
        return L10n.tr("Localizable", "Scene.TokenDetail.WalletconnectSwitchNetworkAlert", p1, p2)
      }
    }

    enum TransactionHistory {
      /// You don’t have any transaction records
      static var noTransaction: String {
        return L10n.tr("Localizable", "Scene.TransactionHistory.NoTransaction")
      }
      /// Failed
      static var statusFailed: String {
        return L10n.tr("Localizable", "Scene.TransactionHistory.StatusFailed")
      }
      /// Pending...
      static var statusPendind: String {
        return L10n.tr("Localizable", "Scene.TransactionHistory.StatusPendind")
      }
    }

    enum WalletBackup {
      /// Cancel
      static var btnCancel: String {
        return L10n.tr("Localizable", "Scene.WalletBackup.BtnCancel")
      }
      /// Copy
      static var btnCopy: String {
        return L10n.tr("Localizable", "Scene.WalletBackup.BtnCopy")
      }
      /// Please remember your current payment password. Your current payment password is required for decryption when using the wallet Keystore for recovery.
      static var keystoreTips: String {
        return L10n.tr("Localizable", "Scene.WalletBackup.KeystoreTips")
      }
      /// One can use the private key to recover wallet account directly. Please do not let anyone else see the private key.
      static var privateKeyTips: String {
        return L10n.tr("Localizable", "Scene.WalletBackup.PrivateKeyTips")
      }
      /// Keystore
      static var tabKeystore: String {
        return L10n.tr("Localizable", "Scene.WalletBackup.TabKeystore")
      }
      /// Private Key
      static var tabPrivateKey: String {
        return L10n.tr("Localizable", "Scene.WalletBackup.TabPrivateKey")
      }
      /// Back up wallet
      static var title: String {
        return L10n.tr("Localizable", "Scene.WalletBackup.Title")
      }
    }

    enum WalletBalance {
      /// All
      static var balanceExpandAll: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.BalanceExpandAll")
      }
      /// Less
      static var balanceExpandLess: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.BalanceExpandLess")
      }
      /// Receive
      static var btnReceive: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.BtnReceive")
      }
      /// Send
      static var btnSend: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.BtnSend")
      }
      /// Swap
      static var btnSwap: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.BtnSwap")
      }
      /// Last month
      static var dateLastmonth: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.DateLastmonth")
      }
      /// This month
      static var dateThismonth: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.DateThismonth")
      }
      /// Today
      static var dateToday: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.DateToday")
      }
      /// Yesterday
      static var dateYestoday: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.DateYestoday")
      }
      /// You don’t have any Collectibles
      static var emptyCollectibles: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.EmptyCollectibles")
      }
      /// You don’t have any Tokens
      static var emptyToken: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.EmptyToken")
      }
      /// Collectibles
      static var headerTitleCollectibles: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.HeaderTitleCollectibles")
      }
      /// Tokens
      static var headerTitleTokens: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.HeaderTitleTokens")
      }
      /// on %@
      static func transactionActionTitle(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.WalletBalance.TransactionActionTitle", p1)
      }
      /// View on %@
      static func transactionActionView(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.WalletBalance.TransactionActionView", p1)
      }
      /// Approve
      static var transactionApprove: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.TransactionApprove")
      }
      /// Cancel
      static var transactionCancel: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.TransactionCancel")
      }
      /// Deposit
      static var transactionDeposit: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.TransactionDeposit")
      }
      /// Received
      static var transactionReceived: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.TransactionReceived")
      }
      /// Send
      static var transactionSend: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.TransactionSend")
      }
      /// Swap
      static var transactionSwap: String {
        return L10n.tr("Localizable", "Scene.WalletBalance.TransactionSwap")
      }
    }

    enum WalletConnect {
      /// The wallet address already exists.
      static var addressExist: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.AddressExist")
      }
      /// Connecting...
      static var connecting: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.Connecting")
      }
      /// Connection failed.
      static var connectionFail: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.ConnectionFail")
      }
      /// Wallet Successfully Connected to Mask Network
      static var connectSuccess: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.ConnectSuccess")
      }
      /// Please try to use a native wallet, then switch the blockchain network again
      static var couldNotSwitchBlockchainNetworkMessage: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.CouldNotSwitchBlockchainNetworkMessage")
      }
      /// Switching blockchain network not supported with WalletConnect
      static var couldNotSwitchBlockchainNetworkTitle: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.CouldNotSwitchBlockchainNetworkTitle")
      }
      /// Disconnect
      static var disconnect: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.Disconnect")
      }
      /// The current network %@ is different from the connecting network %@. Do you want to switch your current network to %@?
      static func networkNotMatch(_ p1: String, _ p2: String, _ p3: String) -> String {
        return L10n.tr("Localizable", "Scene.WalletConnect.NetworkNotMatch", p1, p2, p3)
      }
      /// The wallet network %@ is currently not supported by Mask Network. We can’t connect your wallet. Please switch your wallet network manually.
      static func networkNotSupport(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.WalletConnect.NetworkNotSupport", p1)
      }
      /// You haven’t installed any available %@ wallets for walletConnect
      static func noWallets(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.WalletConnect.NoWallets", p1)
      }
      /// Use a WalletConnect compatiable wallet\nto scan the QR Code
      static var qrCodeTips: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.QrCodeTips")
      }
      /// This wallet address was connected with WalletConnect. Importing this wallet address automatically dis-connects the walletConnect account.
      static var replaceWalletConnectWallet: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.ReplaceWalletConnectWallet")
      }
      /// Scan QR Code
      static var scanQRCode: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.ScanQRCode")
      }
      /// Select Wallet
      static var selectWallet: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.SelectWallet")
      }
      /// Tap to copy to clipboard
      static var tapToCopy: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.TapToCopy")
      }
      /// WalletConnect
      static var walletConnect: String {
        return L10n.tr("Localizable", "Scene.WalletConnect.WalletConnect")
      }
    }

    enum WalletConnectServer {
      /// Connect
      static var connect: String {
        return L10n.tr("Localizable", "Scene.WalletConnectServer.Connect")
      }
      /// Connected Apps
      static var connectedApps: String {
        return L10n.tr("Localizable", "Scene.WalletConnectServer.ConnectedApps")
      }
      /// Switch wallets
      static var switchWallet: String {
        return L10n.tr("Localizable", "Scene.WalletConnectServer.SwitchWallet")
      }
      /// A transaction is requested by wallet connect
      static var walletConnectNotification: String {
        return L10n.tr("Localizable", "Scene.WalletConnectServer.WalletConnectNotification")
      }
      /// %@ wants to connect to your wallet
      static func wantToConnect(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.WalletConnectServer.WantToConnect", p1)
      }
    }

    enum WalletDelete {
      /// Cancel
      static var btnCancel: String {
        return L10n.tr("Localizable", "Scene.WalletDelete.BtnCancel")
      }
      /// Delete
      static var btnDelete: String {
        return L10n.tr("Localizable", "Scene.WalletDelete.BtnDelete")
      }
      /// Are you sure you want to delete this wallet? Your wallet cannot be recoverd without seed phrase.
      static var content: String {
        return L10n.tr("Localizable", "Scene.WalletDelete.Content")
      }
      /// Password
      static var password: String {
        return L10n.tr("Localizable", "Scene.WalletDelete.Password")
      }
      /// Password
      static var placeholder: String {
        return L10n.tr("Localizable", "Scene.WalletDelete.Placeholder")
      }
      /// Delete wallet
      static var title: String {
        return L10n.tr("Localizable", "Scene.WalletDelete.Title")
      }
    }

    enum WalletDerivationPath {
      /// Address
      static var headerAddress: String {
        return L10n.tr("Localizable", "Scene.WalletDerivationPath.HeaderAddress")
      }
      /// Balance (%@)
      static func headerBalance(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.WalletDerivationPath.HeaderBalance", p1)
      }
      /// Operation
      static var headerOperation: String {
        return L10n.tr("Localizable", "Scene.WalletDerivationPath.HeaderOperation")
      }
      /// Add
      static var operationAdd: String {
        return L10n.tr("Localizable", "Scene.WalletDerivationPath.OperationAdd")
      }
      /// Added
      static var operationAdded: String {
        return L10n.tr("Localizable", "Scene.WalletDerivationPath.OperationAdded")
      }
      /// Derivation path
      static var title: String {
        return L10n.tr("Localizable", "Scene.WalletDerivationPath.Title")
      }
    }

    enum WalletDetail {
      /// Back up
      static var walletItemsBackup: String {
        return L10n.tr("Localizable", "Scene.WalletDetail.WalletItemsBackup")
      }
      /// Delete
      static var walletItemsDelete: String {
        return L10n.tr("Localizable", "Scene.WalletDetail.WalletItemsDelete")
      }
      /// Transaction History
      static var walletItemsHistory: String {
        return L10n.tr("Localizable", "Scene.WalletDetail.WalletItemsHistory")
      }
      /// Rename Wallet
      static var walletItemsRename: String {
        return L10n.tr("Localizable", "Scene.WalletDetail.WalletItemsRename")
      }
      /// Change
      static var walletTitleChange: String {
        return L10n.tr("Localizable", "Scene.WalletDetail.WalletTitleChange")
      }
    }

    enum WalletEdit {
      /// Delete Wallet
      static var itemDelete: String {
        return L10n.tr("Localizable", "Scene.WalletEdit.ItemDelete")
      }
      /// Rename Wallet
      static var itemRename: String {
        return L10n.tr("Localizable", "Scene.WalletEdit.ItemRename")
      }
    }

    enum WalletImport {
      /// Keystore
      static var itemKeystore: String {
        return L10n.tr("Localizable", "Scene.WalletImport.ItemKeystore")
      }
      /// Encrypted private key JSON content.
      static var itemKeystoreDesc: String {
        return L10n.tr("Localizable", "Scene.WalletImport.ItemKeystoreDesc")
      }
      /// Mnemonic words
      static var itemMnemonicWords: String {
        return L10n.tr("Localizable", "Scene.WalletImport.ItemMnemonicWords")
      }
      /// The mnemonic is composed of words and separated by spaces
      static var itemMnemonicWordsDesc: String {
        return L10n.tr("Localizable", "Scene.WalletImport.ItemMnemonicWordsDesc")
      }
      /// Private Key
      static var itemPrivateKey: String {
        return L10n.tr("Localizable", "Scene.WalletImport.ItemPrivateKey")
      }
      /// Plaintext private key
      static var itemPrivateKeyDesc: String {
        return L10n.tr("Localizable", "Scene.WalletImport.ItemPrivateKeyDesc")
      }
      /// Import wallet
      static var title: String {
        return L10n.tr("Localizable", "Scene.WalletImport.Title")
      }
    }

    enum WalletKeystore {
      /// Confirm
      static var btnConfirm: String {
        return L10n.tr("Localizable", "Scene.WalletKeystore.BtnConfirm")
      }
      /// Keystore content
      static var keystorePlaceholder: String {
        return L10n.tr("Localizable", "Scene.WalletKeystore.KeystorePlaceholder")
      }
      /// Wallet password
      static var passwordPlaceholder: String {
        return L10n.tr("Localizable", "Scene.WalletKeystore.PasswordPlaceholder")
      }
      /// Keystore
      static var title: String {
        return L10n.tr("Localizable", "Scene.WalletKeystore.Title")
      }
    }

    enum WalletList {
      /// Switch Wallets
      static var title: String {
        return L10n.tr("Localizable", "Scene.WalletList.Title")
      }
      /// Add wallet
      static var walletsItemsAdd: String {
        return L10n.tr("Localizable", "Scene.WalletList.WalletsItemsAdd")
      }
      /// Create a new wallet
      static var walletsItemsCreate: String {
        return L10n.tr("Localizable", "Scene.WalletList.WalletsItemsCreate")
      }
      /// Import wallet
      static var walletsItemsImport: String {
        return L10n.tr("Localizable", "Scene.WalletList.WalletsItemsImport")
      }
      /// Imported
      static var walletsListImport: String {
        return L10n.tr("Localizable", "Scene.WalletList.WalletsListImport")
      }
    }

    enum WalletMnemonic {
      /// Confirm
      static var btnConfirm: String {
        return L10n.tr("Localizable", "Scene.WalletMnemonic.BtnConfirm")
      }
      /// Enter mnemonic phrase separated by spaces
      static var placeholder: String {
        return L10n.tr("Localizable", "Scene.WalletMnemonic.Placeholder")
      }
      /// Mnemonic
      static var title: String {
        return L10n.tr("Localizable", "Scene.WalletMnemonic.Title")
      }
    }

    enum WalletPrivateKey {
      /// Confirm
      static var btnConfirm: String {
        return L10n.tr("Localizable", "Scene.WalletPrivateKey.BtnConfirm")
      }
      /// Enter Private Key
      static var placeholder: String {
        return L10n.tr("Localizable", "Scene.WalletPrivateKey.Placeholder")
      }
      /// Private key
      static var title: String {
        return L10n.tr("Localizable", "Scene.WalletPrivateKey.Title")
      }
    }

    enum WalletReceive {
      /// Share
      static var btnShare: String {
        return L10n.tr("Localizable", "Scene.WalletReceive.BtnShare")
      }
      /// Your %@ Address
      static func yourAddress(_ p1: String) -> String {
        return L10n.tr("Localizable", "Scene.WalletReceive.YourAddress", p1)
      }
    }

    enum WalletRename {
      /// Wallet name
      static var nameTitle: String {
        return L10n.tr("Localizable", "Scene.WalletRename.NameTitle")
      }
      /// Name your wallet
      static var placeholder: String {
        return L10n.tr("Localizable", "Scene.WalletRename.Placeholder")
      }
      /// Rename
      static var renameButton: String {
        return L10n.tr("Localizable", "Scene.WalletRename.RenameButton")
      }
    }

    enum WalletUnlock {
      /// Unlock
      static var button: String {
        return L10n.tr("Localizable", "Scene.WalletUnlock.Button")
      }
      /// Unlock Wallet
      static var title: String {
        return L10n.tr("Localizable", "Scene.WalletUnlock.Title")
      }
    }

    enum WalletsListAdd {
      /// Create a New Wallet
      static var walletsItemsAdd: String {
        return L10n.tr("Localizable", "Scene.WalletsListAdd.WalletsItemsAdd")
      }
      /// Import Wallet
      static var walletsListImport: String {
        return L10n.tr("Localizable", "Scene.WalletsListAdd.WalletsListImport")
      }
    }

    enum WelcomeIdentityEmpty {
      /// Create Persona
      static var createAPersona: String {
        return L10n.tr("Localizable", "Scene.WelcomeIdentityEmpty.CreateAPersona")
      }
      /// The portal to a new and open Internet
      static var description: String {
        return L10n.tr("Localizable", "Scene.WelcomeIdentityEmpty.Description")
      }
      /// Recover your Persona
      static var recoverYourPersona: String {
        return L10n.tr("Localizable", "Scene.WelcomeIdentityEmpty.RecoverYourPersona")
      }
    }
  }

  enum Tab {
    /// Labs
    static var labs: String {
      return L10n.tr("Localizable", "Tab.Labs")
    }
    /// Persona
    static var personas: String {
      return L10n.tr("Localizable", "Tab.Personas")
    }
    /// Setting
    static var setting: String {
      return L10n.tr("Localizable", "Tab.Setting")
    }
    /// Wallet
    static var wallet: String {
      return L10n.tr("Localizable", "Tab.Wallet")
    }
  }
}
// swiftlint:enable explicit_type_interface identifier_name line_length nesting type_body_length type_name

extension L10n {
    private static func tr(_ table: String, _ key: String, _ args: CVarArg...) -> String {
        let format = NSLocalizedString(key, tableName: table, bundle: bundle ?? Bundle(for: BundleToken.self), comment: "")
        let result = String(format: format, locale: Locale.current, arguments: args)
        if result == key {
            guard let englighPath = Bundle.main.path(forResource: "en", ofType: "lproj") else { return result }
            guard let englishBundle = Bundle(path: englighPath) else { return result }
            let format = NSLocalizedString(key, tableName: table, bundle: englishBundle, comment: "")
            return String(format: format, locale: Locale.current, arguments: args)
        } else {
            return result
        }
    }
}

private final class BundleToken {}
