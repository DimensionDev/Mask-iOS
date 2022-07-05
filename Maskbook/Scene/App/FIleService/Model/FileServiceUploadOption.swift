import Foundation

struct FileServiceUploadOption {
    enum Service: String, Hashable, CaseIterable, Identifiable {
        case arweave
        case ipfs
//        case swarm

        var options: [Option] {
            switch self {
            case .arweave: return [.encrypt, .mesoncdn]
            case .ipfs: return [.encrypt]
//            case .swarm: return [.encrypt]
            }
        }

        var title: String {
            switch self {
            case .arweave: return "Arweave"
            case .ipfs: return "IPFS"
            }
        }

        var id: String { self.rawValue }
    }

    enum Option: String, Hashable, Identifiable {
        case encrypt
        case mesoncdn

        var title: String {
            switch self {
            case .encrypt: return L10n.Plugins.FileService.encrypt
            case .mesoncdn: return L10n.Plugins.FileService.mesoncdn
            }
        }

        var id: String { self.rawValue }
    }

    var service: Service
    var encrypted: Bool
    var useMesonCDN: Bool

    init(
        service: Service = .arweave,
        encrypted: Bool = true,
        useMesonCDN: Bool = false
    ) {
        self.service = service
        self.encrypted = encrypted
        self.useMesonCDN = useMesonCDN
    }

    init?(_ stringValue: FileServiceUploadOptionString) {
        let components = stringValue.components(separatedBy: ",")

        guard components.count == 3,
              let service = Service(rawValue: components.first ?? "") else {
            return nil
        }
        let encrypted = components[1] == "1"
        let useMesonCDN = components.last == "1"

        self.service = service
        self.encrypted = encrypted
        self.useMesonCDN = useMesonCDN
    }

    func asString() -> FileServiceUploadOptionString {
        "\(self.service.rawValue),\(encrypted ? "1" : "0"),\(useMesonCDN ? "1" : "0")"
    }
}

extension FileServiceUploadOption {
    static var `default`: FileServiceUploadOption {
        .init(service: .arweave)
    }

    static var defaultOption: String {
        "\(Service.arweave.rawValue),\("1"),\("0")"
    }
}

typealias FileServiceUploadOptionString = String

extension FileServiceUploadOptionString {
    func toFileServiceUploadOption() -> FileServiceUploadOption? {
        .init(self)
    }
}
