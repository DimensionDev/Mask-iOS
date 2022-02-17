import Combine
import Foundation

struct LazyFuture<Output, Failure>: Publisher where Failure: Error {
    let upstream: Deferred<Future<Output, Failure>>

    init(_ resultCall: @escaping (@escaping (Result<Output, Failure>) -> Void) -> Void) {
        upstream = Deferred {
            Future { promise in
                resultCall { result in
                    promise(result)
                }
            }
        }
    }

    func receive<S>(subscriber: S) where
        S: Subscriber,
        Failure == S.Failure,
        Output == S.Input {
        upstream.receive(subscriber: subscriber)
    }
}

extension LazyFuture where Output == Void, Failure == Never {
    static func delay(_ time: TimeInterval = 1) -> AnyPublisher<Void, Never> {
        LazyFuture { promise in
            DispatchQueue.main.asyncAfter(deadline: .now() + time) {
                promise(.voidSuccess)
            }
        }
        .eraseToAnyPublisher()
    }
}
