import Combine
import Foundation

final class LabsPluginViewModel: ObservableObject {
    @InjectedProvider(\.userDefaultSettings)
    var userSetting
    
    private(set) var pluginSignal = PassthroughSubject<PluginType, Never>()
}
