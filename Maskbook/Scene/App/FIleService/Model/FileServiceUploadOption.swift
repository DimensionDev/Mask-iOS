import Foundation

struct FileServiceUploadOption {
    enum Service: String, Hashable, CaseIterable, Identifiable {
        case arweave = "Arweave"
        case ipfs = "IPFS"
        case swarm = "Swarm"

        var options: [Option] {
            switch self {
            case .arweave: return [.encrypt, .mesoncdn]
            case .ipfs: return [.encrypt]
            case .swarm: return [.encrypt]
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

    var service: Service {
        didSet {
            // set option to encrypt when service change
            if option != .encrypt {
                option = .encrypt
            }
        }
    }

    var option: Option

    init(service: Service = .arweave, option: Option = .encrypt) {
        self.service = service
        self.option = option
    }

    init?(_ stringValue: String) {
        let components = stringValue.components(separatedBy: ",")
        guard let service = Service(rawValue: components.first ?? ""),
              let option = Option(rawValue: components.last ?? "") else {
            return nil
        }

        self.service = service
        self.option = option
    }

    func asString() -> String {
        [service.rawValue, option.rawValue].joined(separator: ",")
    }
}

extension FileServiceUploadOption {
    static var `default`: FileServiceUploadOption {
        .init(service: .arweave, option: .encrypt)
    }

    static var defaultOption: String {
        [Service.arweave.rawValue, Option.encrypt.rawValue].joined(separator: ",")
    }
}
