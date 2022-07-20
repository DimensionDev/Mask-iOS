import Combine
import Foundation

final class NftLuckyDropViewModel: ObservableObject {
    private(set) var groupName: String?
    private(set) var groupIconURL: URL?

    deinit {
        print("\(self) deinit")
    }

    func selectCollectible(groupName: String, groupIconURL: URL?) {
        self.groupName = groupName
        self.groupIconURL = groupIconURL
        objectWillChange.send()
    }

    func confirmAction() {}
}

extension NftLuckyDropViewModel {
    var showCollectible: Bool {
        guard let groupName = groupName else {
            return false
        }

        return groupName.isNotEmpty
    }
}
