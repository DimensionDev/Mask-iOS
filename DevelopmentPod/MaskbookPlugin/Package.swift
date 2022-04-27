// swift-tools-version: 5.6
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "MaskbookPlugin",
    products: [
        // Products define the executables and libraries a package produces, and make them visible to other packages.
        .library(
            name: "MaskbookPlugin",
            targets: ["MaskbookPlugin"]),
    ],
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        // .package(url: /* package url */, from: "1.0.0"),
        .package(url: "https://github.com/SwiftyJSON/SwiftyJSON.git", from: "5.0.0")
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages this package depends on.
        .target(
            name: "MaskbookPlugin",
            dependencies: [
                .product(name: "SwiftyJSON", package: "SwiftyJSON")
            ],
            path: "Sources",
            resources: [
                // resources must under the path directory
                .copy("./maskbook/")
            ],
            swiftSettings: [
                .define("SPM")
            ]
        ),
        .testTarget(
            name: "MaskbookPluginTests",
            dependencies: ["MaskbookPlugin"]),
    ]
)
