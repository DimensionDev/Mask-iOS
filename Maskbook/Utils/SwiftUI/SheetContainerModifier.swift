import SwiftUI

private struct CornerShape: Shape {
    let radius: CGFloat

    init(radius: CGFloat = 20) {
        self.radius = radius
    }

    func path(in rect: CGRect) -> Path {
        let cgPath = UIBezierPath(
            roundedRect: rect,
            byRoundingCorners: [.topLeft, .topRight],
            cornerRadii: CGSize(width: 20, height: 20)
        ).cgPath
        return Path(cgPath)
    }
}

private struct InputModifier: ViewModifier {
    let embedWithInput: Bool

    func body(content: Content) -> some View {
        if embedWithInput {
            content
        } else {
            content
                .edgesIgnoringSafeArea(.bottom)
        }
    }
}

struct SheetAdaptiveContainer<Content: View>: View {
    @State
    private var contentSize = CGSize.zero

    @State
    private var verticalOffset: CGFloat = 0

    @State
    private var showing = false

    private let contentBuilder: () -> Content
    private let dismissAction: () -> Void
    private let gestureInteractor: SheetGestureInteractor
    private let embedWithInput: Bool

    init(
        gestureInteractor: SheetGestureInteractor = .default,
        embedWithInput: Bool = true,
        content contentBuilder: @escaping () -> Content,
        onDismiss: @escaping () -> Void
    ) {
        self.gestureInteractor = gestureInteractor
        self.embedWithInput = embedWithInput
        self.contentBuilder = contentBuilder
        self.dismissAction = onDismiss
    }

    var body: some View {
        ZStack(alignment: Alignment(horizontal: .center, vertical: .bottom)) {
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

            VStack(spacing: 25) {
                ZStack(alignment: Alignment(horizontal: .center, vertical: .bottom)) {
                    Spacer()
                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                    Asset.Colors.Background.disable.asColor()
                        .frame(width: 40, height: 4)
                        .cornerRadius(4)
                }
                .frame(height: 24)

                contentBuilder()
                    .measureSize(to: $contentSize)
                    .alignmentGuide(.bottom, computeValue: { $0[.bottom] })
            }
            .padding(.bottom, 24)
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
        .modifier(InputModifier(embedWithInput: embedWithInput))
    }
}

extension View {
    func asUIView() -> UIView {
        let view = UIHostingController(rootView: self).view ?? UIView()
        view.backgroundColor = .clear
        return view
    }
}
