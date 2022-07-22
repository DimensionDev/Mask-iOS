import SwiftUI

private struct CornerShape: Shape {
    // MARK: Lifecycle

    init(radius: CGFloat = 20) {
        self.radius = radius
    }

    // MARK: Internal

    let radius: CGFloat

    func path(in rect: CGRect) -> Path {
        let cgPath = UIBezierPath(
            roundedRect: rect,
            byRoundingCorners: [.topLeft, .topRight],
            cornerRadii: CGSize(width: radius, height: radius)
        ).cgPath
        return Path(cgPath)
    }
}

private struct SafeAreaKey: PreferenceKey {
    static var defaultValue: CGFloat = 0

    static func reduce(value: inout CGFloat, nextValue: () -> CGFloat) {
        value <| nextValue()
    }
}

/// usage:
///         declare this keyboard flag in an ObservedObject
///         @Published
///         var focusKeyBoard: Bool?
///
///         SheetAdaptiveContainer {
///             content: {
///                 Text("some text")
///                     .focusKeyboardInAdaptiveSheet(focusKeyBoard)
///             },
///             onDismiss: {}
///         }
///
struct SheetAdaptiveContainer<Content: View>: View {
    // MARK: Lifecycle

    init(
        gestureInteractor: SheetGestureInteractor = .default,
        embedWithInput: Bool = true,
        @ViewBuilder content contentBuilder: @escaping () -> Content,
        onDismiss: @escaping () -> Void
    ) {
        self.gestureInteractor = gestureInteractor
        self.embedWithInput = embedWithInput
        self.contentBuilder = contentBuilder
        self.dismissAction = onDismiss
    }

    // MARK: Internal

    var body: some View {
        GeometryReader { proxy in
            // pub the Color.clear here we can get safeAreaInsets
            Color.clear
                .preference(
                    key: SafeAreaKey.self,
                    value: proxy.safeAreaInsets.bottom
                )
                .frame(width: 0, height: 0)

            ZStack(
                alignment: Alignment(
                    horizontal: .center,
                    vertical: .bottom
                )
            ) {
                transparentMaskView

                VStack(spacing: 25) {
                    grayIndicatorView

                    contentBuilder()
                        .measureSize(to: $contentSize)
                        .alignmentGuide(.bottom, computeValue: { $0[.bottom] })
                }
                .padding(.bottom, max(24, safeAreaBottom))
                .background(Asset.Colors.Background.normal.asColor())
                .clipShape(CornerShape())
                .shadow(
                    color: Asset.Colors.Public.s1.asColor(),
                    radius: 12,
                    x: 0,
                    y: 6
                )
                .offset(x: 0, y: max(0, verticalOffset))
                .gesture(
                    DragGesture(minimumDistance: 0.5, coordinateSpace: .local)
                        .onChanged { value in
                            guard self.gestureInteractor.translateWhenSwiping else {
                                return
                            }
                            let translation = value.translation
                            verticalOffset = translation.height
                        }
                        .onEnded { value in
                            guard self.gestureInteractor.translateWhenSwiping else {
                                return
                            }
                            if value.translation.height > self.contentSize.height * self.gestureInteractor.dismissDelta {
                                guard self.gestureInteractor.swipeToDismiss else {
                                    return
                                }
                                self.dismissAction()
                            } else {
                                withAnimation(.spring()) {
                                    verticalOffset = 0
                                }
                            }
                        },
                    including: .all
                )
            }
        }
        .ignoresSafeArea(.container, edges: .bottom)
        .onPreferenceChange(SafeAreaKey.self) { value in
            safeAreaBottom <| value
        }
    }

    // MARK: Private

    @State
    private var contentSize = CGSize.zero

    // if safeAreaBottom equals 0, the keyboard in active, so it is 0
    // otherwise it is the safeAreaInsets.bottom of the device
    @State
    private var safeAreaBottom: CGFloat = 0

    @State
    private var verticalOffset: CGFloat = 0

    @State
    private var showing = false

    private var contentBuilder: () -> Content
    private let dismissAction: () -> Void
    private let gestureInteractor: SheetGestureInteractor
    private let embedWithInput: Bool

    private var transparentMaskView: some View {
        Spacer()
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(Asset.Colors.Background.mask.asColor())
            .gesture(DragGesture(), including: .all)
            .onTapGesture {
                guard self.gestureInteractor.tapToDismiss else {
                    return
                }
                self.dismissAction()
            }
            .edgesIgnoringSafeArea(.all)
    }

    private var grayIndicatorView: some View {
        ZStack(alignment: Alignment(horizontal: .center, vertical: .bottom)) {
            Spacer()
                .frame(maxWidth: .infinity, maxHeight: .infinity)

            Asset.Colors.Background.disable.asColor()
                .frame(width: 40, height: 4)
                .cornerRadius(4)
        }
        .frame(height: 24)
    }
}
