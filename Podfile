source 'https://github.com/CocoaPods/Specs.git'

platform :ios, '13.0'

target 'Maskbook' do
  use_frameworks!

  # Pods for Maskbook
  # Local pod
  pod 'MaskbookPlugin', :path => './DevelopmentPod/MaskbookPlugin', :testspecs => ['Tests']
  pod 'MaskWalletCore', :path => './DevelopmentPod/MaskWalletCore'
  pod 'MaskLog', :path => './DevelopmentPod/MaskLog'

  # let a controller can be dragble
  # https://github.com/slackhq/PanModal
  pod 'PanModal', :path => './DevelopmentPod/PanModal'
  
  # private pod
#  pod 'WebExtension-Shim', '~> 0.5.6'
  pod 'WebExtension-Shim', :git => 'https://github.com/DimensionDev/WebExtension-Shim-iOS.git',  :tag => '2.0'

  pod 'SwiftGen', '~> 6.4.0'
  pod 'KMPageControl', '~> 0.0.2'
  
  pod 'KeychainAccess', '~> 4.2'
  
  pod 'EFQRCode', '~> 6.1.0'
  pod 'Alamofire', '~> 5.4'

  # Press
  pod "EUMTouchPointView"
  
  pod 'Kingfisher', '~> 7.0'
  
  pod 'Socket.IO-Client-Swift', '~> 15.2.0'
  
  pod 'IQKeyboardManagerSwift', '6.3.0'
  
  pod 'FLEX', :configurations => ['Debug']
  
  pod 'RSKPlaceholderTextView', '~> 6.0.0'
  
  pod 'BMPlayer', '~> 1.3.0'
  
  # Web3
  pod 'BigInt', '~> 5.2'
  pod 'web3swift', :git => 'https://github.com/DimensionDev/web3swift.git'
  pod 'IpfsLiteApi'

  #UI
  pod 'SnapKit', '~> 5.0.0'
  #debug
  pod 'LookinServer', :configurations => ['Debug']

  pod 'SwiftLint', '0.43.1', :configurations => ['Debug']
  
  # unzip js files
  pod 'ZIPFoundation', '~> 0.9'
  
  pod 'UStack', '~> 2.2.1'
  pod 'CombineEvent', '~> 1.0.0'
  pod 'CombineExt'
  pod 'SwiftMsgPack', :git => 'https://github.com/malcommac/SwiftMsgPack.git', :branch => 'develop'
  pod 'WalletConnectSwift', :git => 'https://github.com/DimensionDev/WalletConnectSwift.git'
  pod 'ResponderChain', '~> 1.1'
  pod 'Pika', '0.1.8'

  pod 'Firebase/Analytics'
  target 'MaskbookTests' do
    inherit! :search_paths
    # Pods for testing
  end

  target 'MaskWalletTests' do
    inherit! :search_paths
    # Pods for testing
  end

end

post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings.delete 'IPHONEOS_DEPLOYMENT_TARGET'
      config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
    end
  end
end
