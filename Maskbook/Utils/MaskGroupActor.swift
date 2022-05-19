import Foundation

@globalActor
struct MaskGroupActor {
  actor ActorType {}
  static let shared: ActorType = ActorType()
}
