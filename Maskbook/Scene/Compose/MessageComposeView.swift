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
        VStack {
            navigationBarView()
            messageInputView()
            Spacer()
            pluginsToolBar()
            bottomToolBar()
        }
        .background(Color.white)
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
                        Text("Cancel")
                            .font(FontStyles.mh5.font)
                            .foregroundColor(Asset.Colors.Twitter.blue.asColor())
                    }
                }
            )
            Spacer()
            Text("Mask: Compose")
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Twitter.strong.asColor())
            Spacer()
            Button(
                action: {},
                label: {
                    HStack {
                        Text("Encrypt")
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
        VStack(spacing: 0) {
            TextEditor(text: $viewModel.message)
                .foregroundColor(Color.black)
                .font(FontStyles.rh7.font)
                .lineSpacing(5)
                .padding(.vertical, 8)
                .background(Asset.Colors.Twitter.buttonText.asColor())
                .frame(height: 278)
                .cornerRadius(8)
                .onChange(of: viewModel.message) { _ in
                }

            Spacer()
        }
    }
    
    private func pluginsToolBar() -> some View {
        Text("ddddddddddddddddddddd")
    }
    
    private func bottomToolBar() -> some View {
        Text("ddddddddddddddddddddd")
    }
}

struct EncryptedMessageEditorView_Previews: PreviewProvider {
    static var previews: some View {
        MessageComposeView(viewModel: MessageComposeViewModel())
    }
}
