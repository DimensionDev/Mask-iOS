import Combine
import Introspect
import SwiftUI

extension View {
    func focusTextView(
        when condition: @escaping @autoclosure () -> Bool = true
    ) -> some View {
        introspect(selector: TargetViewSelector.siblingContaining) { (view: UITextView) in
            let shouldBecomeFirstResponder = condition()

            if shouldBecomeFirstResponder {
                if !view.isFirstResponder {
                    view.becomeFirstResponder()
                }
            } else {
                if view.isFirstResponder {
                    view.resignFirstResponder()
                }
            }
        }
    }

    func focusTextField(
        when condition: @escaping @autoclosure () -> Bool = true
    ) -> some View {
        introspect(selector: TargetViewSelector.siblingContaining) { (view: UITextField) in
            let shouldBecomeFirstResponder = condition()

            if shouldBecomeFirstResponder {
                if !view.isFirstResponder {
                    view.becomeFirstResponder()
                }
            } else {
                if view.isFirstResponder {
                    view.resignFirstResponder()
                }
            }
        }
    }
}

extension View {
    func forceResignKeyboard() {
        UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
    }
}

struct KeyBoardObservingModifier: ViewModifier {
    // MARK: Lifecycle

    init<V: AnyObject>(_ keyPath: ReferenceWritableKeyPath<V, Bool>, on object: V) {
        _viewModel = .init(
            wrappedValue: .init(
                isFirstResponder: .init(
                    get: { [weak object] in
                        object?[keyPath: keyPath] ?? false
                    },
                    set: { [weak object] newValue, _ in
                        object?[keyPath: keyPath] = newValue
                    }
                )
            )
        )
    }

    init(_ binding: Binding<Bool>) {
        _viewModel = .init(
            wrappedValue: .init(
                isFirstResponder: .init(
                    get: {
                        binding.wrappedValue
                    },
                    set: { newValue, _ in
                        binding.wrappedValue = newValue
                    }
                )
            )
        )
    }

    // MARK: Internal

    final class ViewModel: ObservableObject {
        // MARK: Lifecycle

        init(isFirstResponder: Binding<Bool>) {
            _isFirstResponder = .init(projectedValue: isFirstResponder)
        }

        // MARK: Internal

        func registerKeyboardNotification() {
            guard !registerred else {
                return
            }

            NotificationCenter.Publisher(
                center: NotificationCenter.default, name: UIResponder.keyboardWillShowNotification
            )
            .merge(
                with: NotificationCenter.Publisher(
                    center: NotificationCenter.default, name: UIResponder.keyboardDidShowNotification
                )
            )
            .throttle(for: .seconds(0.5), scheduler: DispatchQueue.main, latest: true)
            .map { _ in true }
            .sink {
                self.isFirstResponder <| $0
            }
            .store(in: &cancelableStorage)

            NotificationCenter.Publisher(center: NotificationCenter.default, name: UIResponder.keyboardWillHideNotification)
                .merge(
                    with: NotificationCenter.default.publisher(for: UIResponder.keyboardDidHideNotification)
                )
                .map { _ in false }
                .throttle(for: .seconds(0.5), scheduler: DispatchQueue.main, latest: true)
                .sink {
                    self.isFirstResponder <| $0
                }
                .store(in: &cancelableStorage)
        }

        // MARK: Private

        private var registerred = false

        private var cancelableStorage: Set<AnyCancellable> = []

        @Binding
        private var isFirstResponder: Bool
    }

    func body(content: Content) -> some View {
        content
            .onAppear {
                viewModel.registerKeyboardNotification()
            }
    }

    // MARK: Private

    @StateObject
    private var viewModel: ViewModel
}
