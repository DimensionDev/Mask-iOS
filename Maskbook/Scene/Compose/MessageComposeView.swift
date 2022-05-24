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
            Spacer()
            pluginsToolBar()
            bottomToolBar()
        }
        .background(Asset.Colors.Twitter.buttonText.asColor())
        .padding(.horizontal, 20)
        .padding(.bottom, 24)
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
                action: {},
                label: {
                    HStack {
                        Text(L10n.Scene.MessageCompose.encrypt)
                            .font(FontStyles.mh5.font)
                            .foregroundColor(Asset.Colors.Twitter.blue.asColor())
                    }
                }
            )
            .opacity(viewModel.encryptButtonEnable ? 0.3 : 1)
        }
        .frame(height: 48)
    }

    private func messageInputView() -> some View {
        ZStack(alignment: .topLeading) {
            TextEditor(text: $viewModel.message)
                .foregroundColor(Color.black)
                .font(FontStyles.mh5.font)
                .lineSpacing(5)
                .padding(.vertical, 8)
                .background(Asset.Colors.Twitter.buttonText.asColor())
                .frame(height: 278, alignment: .leading)
                .cornerRadius(8)
                .onChange(of: viewModel.message) { _ in
                }
                .onTapGesture {
                    if viewModel.showPlaceHolder {
                        viewModel.showPlaceHolder.toggle()
                    }
                }
            Text(L10n.Scene.MessageCompose.placeholder)
                .foregroundColor(Asset.Colors.Twitter.second.asColor())
                .font(FontStyles.mh5.font)
                .padding(.leading, 5)
                .padding(.top, 8)
                .opacity(viewModel.showPlaceHolder ? 1 : 0)
            Spacer()
        }
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
        Text("ddddddddddddddddddddd")
    }

    private func pluginContentItem(pluginContent: MessageComposePluginContent) -> some View {
        HStack(alignment: .center) {
            Image(pluginContent.type.icon)
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
        .background(Asset.Colors.Twitter.inputBg.asColor())
        .frame(height: 40, alignment: .leading)
        .cornerRadius(20)
    }
}

struct EncryptedMessageEditorView_Previews: PreviewProvider {
    static var previews: some View {
        MessageComposeView(viewModel: MessageComposeViewModel())
    }
}
