//
//  GroupMaskSegmentControlView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

public struct MaskSegmentedControlView<SelectionValue, Content>: View
    where SelectionValue: Hashable, Content: View
{
    @Binding public
    var selection: SelectionValue

    @Namespace var namespace

    private let content: Content

    public init(selection: Binding<SelectionValue>,
                @ViewBuilder content: () -> Content)
    {
        self._selection = selection
        self.content = content()
    }

    public var body: some View {
        HStack {
            content
        }
        .frame(width: .infinity, height: 48, alignment: .center)
        .padding(.horizontal, 20)
        .background(
            RoundedRectangle(cornerRadius: 8)
                .fill(Asset.Colors.Background.selected.asColor())
                .padding(.horizontal, 20)
        )
        .clipShape(RoundedRectangle(cornerRadius: 8))
        .environment(\.selectedSegmentTag, $selection)
        .environment(\.segmentedControlNamespace, namespace)
    }
}

private struct SegmentedControlItemContainer<SelectionValue, Content>: View
    where SelectionValue: Hashable, Content: View
{
    @Environment(\.selectedSegmentTag)
    var selectedSegmentTag

    @Environment(\.segmentedControlNamespace)
    var segmentedControlNamespace

    @Namespace var namespace

    let tag: SelectionValue
    let content: Content

    @ViewBuilder
    var body: some View {
        content
            .frame(maxWidth: .infinity)
            .contentShape(Rectangle())
            .foregroundColor(isSelected ? Asset.Colors.Text.dark.asColor() : Asset.Colors.Text.normal.asColor())
            .font(isSelected ? FontStyles.bh5.font : FontStyles.mh5.font)
            .background(isSelected ? background : nil)
            .onTapGesture {
                select()
            }
            .disabled(isSelected)
    }

    private var isSelected: Bool {
        let selectedTag = (selectedSegmentTag as? Binding<SelectionValue>)?.wrappedValue
        return tag == selectedTag
    }

    private var background: some View {
        RoundedRectangle(cornerRadius: 4)
            .fill(Asset.Colors.Background.tab.asColor())
            .padding(.horizontal, 4)
            .padding(.vertical, -10)
            .matchedGeometryEffect(id: "selection",
                                   in: segmentedControlNamespace ?? namespace)
    }

    private func select() {
        withAnimation(.easeInOut(duration: 0.3)) {
            if let binding = selectedSegmentTag as? Binding<SelectionValue> {
                binding.wrappedValue = tag
            }
        }
    }
}

public extension View {
    func segmentedControlItemTag<SelectionValue: Hashable>(_ tag: SelectionValue) -> some View {
        SegmentedControlItemContainer(tag: tag,
                                      content: self)
    }
}

private struct SelectedSegmentTagKey: EnvironmentKey {
    static var defaultValue: Any?
}

private extension EnvironmentValues {
    var selectedSegmentTag: Any? {
        get { self[SelectedSegmentTagKey.self] }
        set { self[SelectedSegmentTagKey.self] = newValue }
    }
}

private struct SegmentedControlNamespaceKey: EnvironmentKey {
    static var defaultValue: Namespace.ID?
}

private extension EnvironmentValues {
    var segmentedControlNamespace: Namespace.ID? {
        get { self[SegmentedControlNamespaceKey.self] }
        set { self[SegmentedControlNamespaceKey.self] = newValue }
    }
}

#if DEBUG
struct CustomSegmentedControlPreview: PreviewProvider {
    struct RootView: View {
        enum LayoutMode {
            case years
            case months
            case days
        }

        @State var mode: LayoutMode = .days

        var body: some View {
            VStack {
                MaskSegmentedControlView(selection: $mode) {
                    Text("Years").segmentedControlItemTag(LayoutMode.years)
                    Text("Months").segmentedControlItemTag(LayoutMode.months)
                    Text("Days").segmentedControlItemTag(LayoutMode.days)
                }
            }
            .frame(width: 400, height: 400, alignment: .center)
        }
    }

    static var previews: some View {
        RootView()
    }
}
#endif
