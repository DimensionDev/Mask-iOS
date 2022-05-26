import SwiftUI

struct MessageComposeView: View {
    @ObservedObject
    private var viewModel: MessageComposeViewModel

    @Environment(\.presentationMode) var presentationMode
    
    init(viewModel: MessageComposeViewModel) {
        self.viewModel = viewModel
        UITextView.appearance().backgroundColor = Asset.Colors.Twitter.buttonText.color
    }

    var body: some View {
        VStack(alignment: .leading) {
            navigationBarView()
            if !viewModel.pluginContents.isEmpty {
                pluginsContainer()
            }
            messageInputView()
            pluginsToolBar()
            Spacer().frame(height: 12)
            Divider()
                .frame(maxWidth: .infinity, idealHeight: 0.5)
                .background(Asset.Colors.Twitter.line2.asColor())
            Spacer().frame(height: 12)
            bottomToolBar()
        }
        .padding(.horizontal, 20)
        .padding(.bottom, 12)
        .background(
            Asset.Colors.Twitter.buttonText.asColor()
                .ignoresSafeArea()
        )
        .navigationBarHidden(true)
    }

    private func navigationBarView() -> some View {
        HStack {
            Button(
                action: {
                    presentationMode.wrappedValue.dismiss()
                },
                label: {
                    HStack {
                        Text(L10n.Common.Controls.cancel)
                            .font(FontStyles.mh5.font)
                            .foregroundColor(Asset.Colors.Twitter.blue.asColor())
                    }
                }
            )
            Spacer()
            Text(L10n.Scene.MessageCompose.title)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Twitter.strong.asColor())
            Spacer()
            Button(
                action: {
                    viewModel.encryptContent()
                },
                label: {
                    HStack {
                        Text(L10n.Scene.MessageCompose.encrypt)
                            .font(FontStyles.mh5.font)
                            .foregroundColor(Asset.Colors.Twitter.blue.asColor())
                    }
                }
            )
            .disabled(!viewModel.encryptButtonEnable)
            .opacity(viewModel.encryptButtonEnable ? 1 : 0.3)
        }
        .frame(height: 48)
    }

    private func messageInputView() -> some View {
        TextEditor(text: $viewModel.message)
            .foregroundColor(Asset.Colors.Twitter.strong.asColor())
            .font(FontStyles.mh5.font)
            .lineSpacing(5)
            .padding(.vertical, 8)
            .background(Asset.Colors.Twitter.buttonText.asColor())
            .frame(maxHeight: .infinity, alignment: .leading)
            .cornerRadius(8)
            .overlay(
                Text(L10n.Scene.MessageCompose.placeholder)
                    .foregroundColor(Asset.Colors.Twitter.second.asColor())
                    .font(FontStyles.mh5.font)
                    .multilineTextAlignment(.leading)
                    .lineLimit(0)
                    .padding(.leading, 8)
                    .padding(.top, 16)
                    .opacity(viewModel.showPlaceHolder ? 1 : 0)
                    .allowsHitTesting(false),
                alignment: .topLeading
            )
    }

    private func pluginsContainer() -> some View {
        VStack {
            ForEach(viewModel.pluginContents) { pluginContent in
                HStack {
                    Spacer()
                    pluginContentItem(pluginContent: pluginContent)
                    Spacer()
                }
            }
        }
    }

    private func pluginsToolBar() -> some View {
        HStack {
            pluginToolItem(plugin: .luckyDrop)
            pluginToolItem(plugin: .fileService)
        }
    }

    private func bottomToolBar() -> some View {
        HStack {
            Image(viewModel.recipient.iconName)
                .resizable()
                .frame(width: 18, height: 18, alignment: .leading)
            Text(viewModel.recipient.title)
                .font(FontStyles.rh7.font)
                .foregroundColor(Asset.Colors.Twitter.blue.asColor())
        }
    }

    private func pluginContentItem(pluginContent: PluginMeta) -> some View {
        HStack(alignment: .center) {
            Image(pluginContent.plugin.icon)
                .resizable()
                .frame(width: 24, height: 24, alignment: .leading)
            Text(pluginContent.title)
            Button(action: {
                viewModel.remove(pluginContent: pluginContent)
            }, label: {
                Asset.Images.Scene.Compose.close.asImage()
                    .resizable()
                    .frame(width: 24, height: 24, alignment: .leading)
            })
        }
        .foregroundColor(Asset.Colors.Twitter.strong.asColor())
        .padding()
        .background(Asset.Colors.Twitter.inputBg.asColor())
        .frame(height: 50, alignment: .center)
        .cornerRadius(25)
    }

    private func pluginToolItem(plugin: PluginType) -> some View {
        Button(action: {
            viewModel.pluginAddClicked(plugin: plugin)
        }, label: {
            Image(plugin.icon)
                .resizable()
                .frame(width: 24, height: 24, alignment: .leading)
            Text(plugin.name)
        })
        .foregroundColor(Asset.Colors.Twitter.strong.asColor())
        .padding()
        .frame(height: 40, alignment: .leading)
        .overlay(
            RoundedRectangle(cornerRadius: 20)
                .stroke(Asset.Colors.Twitter.line2.asColor(), lineWidth: 0.5)
        )
    }
}

struct EncryptedMessageEditorView_Previews: PreviewProvider {
    static var previews: some View {
        MessageComposeView(viewModel: MessageComposeViewModel())
    }
}
