import Foundation

public struct JSResources {
    public static func javascript(named fileName: String) -> String? {
        #if SPM
        let bundleURL = Bundle.module.bundleURL.appendingPathComponent("Scripts")
        let bundle = Bundle(url: bundleURL)!

        guard let url = bundle.url(forResource: fileName, withExtension: "js") else {
            return nil
        }

        return try? String(contentsOf: url)
        #else
        return nil
        #endif
    }
}
