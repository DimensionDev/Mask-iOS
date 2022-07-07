import Foundation

enum OnboardFeature: Int, CaseIterable {
    case fileService

    static var allFeatures: String {
        allCases.reduce(into: "", { $0 = "\($0),\($1.rawValue)" })
    }
}
