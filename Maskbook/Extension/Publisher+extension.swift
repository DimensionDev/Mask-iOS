import Combine

extension Publisher where Failure == Never {
    func assign<Root: AnyObject>(
        to keyPath: ReferenceWritableKeyPath<Root, Output>,
        on object: Root
    ) -> AnyCancellable {
        sink { [weak object] value in
            object?[keyPath: keyPath] = value
        }
    }

    func bind<R, S>(
        to keyPath: ReferenceWritableKeyPath<R, S>,
        on object: R
    ) -> AnyCancellable
    where R: AnyObject,
          S: Subject,
          S.Output == Output,
          S.Failure == Never {
        sink { [weak object] value in
            object?[keyPath: keyPath].send(value)
        }
    }
    
    func bind<R, S>(
        to keyPath: KeyPath<R, S>,
        on object: R
    ) -> AnyCancellable
    where R: AnyObject,
          S: Subject,
          S.Output == Output,
          S.Failure == Never {
        sink { [weak object] value in
            object?[keyPath: keyPath].send(value)
        }
    }

    func fireAndIgnore() -> AnyCancellable {
        sink { _ in }
    }
}

extension Publisher where Output: Equatable, Failure == Never {
    func distinctlyAssign<Root: AnyObject>(
        to keyPath: ReferenceWritableKeyPath<Root, Output>,
        on object: Root
    ) -> AnyCancellable {
        self.removeDuplicates()
            .assign(to: keyPath, on: object)
    }
}

extension Publisher where Failure == Error {
    func fireAndIgnore() -> AnyCancellable {
        sink { _ in
        } receiveValue: { _ in
        }
    }
    
    func bind<R, S>(
        to keyPath: ReferenceWritableKeyPath<R, S>,
        on object: R
    ) -> AnyCancellable
    where R: AnyObject,
          S: Subject,
          S.Output == Output,
          S.Failure == Error {
              sink { [weak object] completion in
                  object?[keyPath: keyPath].send(completion: completion)
              } receiveValue: { [weak object] value in
                  object?[keyPath: keyPath].send(value)
              }
          }
}
