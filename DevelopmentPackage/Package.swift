// swift-tools-version: 5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

// EUMTouchPointView

let package = Package(
    name: "DevelopmentPackage",
    platforms: [.iOS(.v14)],
    products: [
        .library(name: "WebExtension-Shim", targets: ["WebExtension-Shim-Swift", "WebExtension-Shim-Objc"]),
        .library(name: "PanModal", targets: ["PanModal"]),
        .library(name: "MaskLog", targets: ["MaskLog"]),
        .library(name: "MaskWalletCore", targets: ["MaskWalletCore"]),
        .library(name: "MaskbookPlugin", targets: ["MaskbookPlugin"]),
    ],
    dependencies: [
        .package(url: "https://github.com/apple/swift-protobuf.git", from: "1.0.0"),
        .package(url: "https://github.com/SwiftyJSON/SwiftyJSON.git", from: "5.0.0"),
        .package(url: "https://github.com/Alamofire/Alamofire.git", from: "5.4.4"),
//        .package(url: "https://github.com/onevcat/Kingfisher.git", from: "7.0.0"),
        // .package(url: "https://github.com/socketio/socket.io-client-swift.git", exact: "15.2.0"),
        // .package(url: "https://github.com/DimensionDev/web3swift.git", branch: "master"),
//        .package(url: "https://github.com/DimensionDev/WalletConnectSwift.git", branch: "master"),
        // .package(url: "https://github.com/rursache/BMPlayer.git", branch: "master"),
        // .package(url: "https://github.com/konkab/AlamofireNetworkActivityLogger.git", from: "3.0.0"),
//        .package(url: "https://github.com/hackiftekhar/IQKeyboardManager.git", from: "6.3.0"),
        // .package(url: "https://github.com/SwiftGen/SwiftGen.git", from: "6.4.0"),
        // .package(url: "https://github.com/kishikawakatsumi/KeychainAccess.git", from: "4.2.0"),
        // .package(url: "https://github.com/EFPrefix/EFQRCode.git", from: "6.1.0"),
//        .package(url: "https://github.com/ruslanskorb/RSKPlaceholderTextView.git", from: "6.0.0"),
        // .package(url: "https://github.com/weichsel/ZIPFoundation.git", from: "0.9.0"),
//        .package(url: "https://github.com/malcommac/SwiftMsgPack.git", branch: "develop"),
        // .package(url: "https://github.com/foxsin10/UStack.git", from: "2.2.1"),
        // .package(url: "https://github.com/foxsin10/CombineEvent.git", from: "1.0.0")
    ],
    targets: [
        .target(name: "DevelopmentPackage"),
        .testTarget(
            name: "DevelopmentPackageTests",
            dependencies: [
                .product(name: "SwiftyJSON", package: "SwiftyJSON"),
                "MaskbookPlugin",
                "MaskWalletCore",
                "WebExtension-Shim-Swift",
            ]
        ),

        // WebExtension-Shim
        .target(
            name: "WebExtension-Shim-Swift",
            dependencies: [
                .product(name: "SwiftyJSON", package: "SwiftyJSON"),
                .product(name: "Alamofire", package: "Alamofire")
            ],
            path: "Sources/WebExtension-Shim/WebExtension-Shim-Swift",
            resources: [
                // do not use 'Resources' to name the resources folder
                // use copy to keep folder structure
                // use / at the end of path to handle all file under path
                .copy("./Scripts/")
            ],
            swiftSettings: [
                .define("SPM")
            ]
        ),
        .target(
            name: "WebExtension-Shim-Objc",
            path: "Sources/WebExtension-Shim/WebExtension-Shim-Objc",
            publicHeadersPath: "include",
            cSettings: [
                .headerSearchPath(".")
            ]
        ),

        // PanModal
        .target(
            name: "PanModal",
            dependencies: [],
            path: "Sources/PanModal",
            exclude: [
                "LICENSE",
                "README.md"
            ]
        ),

        // MaskLog
        .target(
            name: "MaskLog",
            dependencies: [],
            path: "Sources/MaskLog",
            exclude: [
                "./Logging/LICENSE.txt",
                "./LoggingOSLog/LICENSE"
            ]
        ),

        // MaskWalletCore
        .binaryTarget(name: "MaskWalletCoreMobile", path: "Sources/MaskWalletCoreMobile/MaskWalletCoreMobile.xcframework"),
        .target(
            name: "MaskWalletCore",
            dependencies: [
                .product(name: "SwiftProtobuf", package: "swift-protobuf"),
                .target(name: "MaskWalletCoreMobile")
            ],
            path: "Sources/MaskWalletCore"
        ),

        // MaskbookPlugin
        .target(
            name: "MaskbookPlugin",
            dependencies: [
                .product(name: "SwiftyJSON", package: "SwiftyJSON")
            ],
            // same file type in the same folder
            path: "Sources/MaskbookPlugin",
            resources: [
                .copy("./maskbook/"),
            ],
            swiftSettings: [
                // define a macro in swift like you define under User-Define in build settings section of a project
                .define("SPM")
            ]
        )
    ],
    swiftLanguageVersions: [.v5]
)
