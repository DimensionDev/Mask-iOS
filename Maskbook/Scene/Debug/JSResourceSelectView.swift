//
//  JSResourceSelectView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/1/6.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct JSResourceSelectView: View {
    @ObservedObject
    var viewModel = JSResourceSelectViewModel()

    var body: some View {
        VStack {
            HStack {
                Text("Please input js zip url")
                Spacer()
            }
            HStack {
                TextField("download url", text: $viewModel.zipDownloadUrl)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                Button(action: {
                    if let string = UIPasteboard.general.string {
                        viewModel.zipDownloadUrl = string
                    }
                }) {
                    Text("paste")
                        .foregroundColor(.blue)
                }
                Button(action: {
                    viewModel.startDownload()
                }) {
                    Text("download")
                        .foregroundColor(!viewModel.zipDownloadUrl.isEmpty ? .green : .gray)
                }
            }
            HStack {
                if viewModel.downloadProgress > 0 && viewModel.downloadProgress < 1 {
                    Text("downloading progress \(viewModel.downloadProgress * 100) %")
                }
                if viewModel.downloadProgress == 1 {
                    Text("download complete!")
                }
                if !viewModel.downloadErrorString.isEmpty {
                    Text("\(viewModel.downloadErrorString)")
                }
            }
            Text("current bundle resource: ")
                + Text(viewModel.jsResourceIsUsingBundle ? "bundle" : "\(viewModel.jsDocumentResourceSelectedCommitHash)")
                .foregroundColor(.green)
                .bold()
            Text("You need to restart the app to reload the resources completely")
                .font(.system(size: 10, weight: .regular))
            Toggle(isOn: $viewModel.jsResourceIsUsingBundle) {
                Text("chose bundle resource:")
            }
            .onChange(of: viewModel.jsResourceIsUsingBundle, perform: { newValue in
                viewModel.setJsResourceIsUsingBundle(isOn: newValue)
            })
            .disabled(viewModel.maskbookItems.isEmpty)

            List {
                ForEach(viewModel.maskbookItems) { item in
                    Text(item.json.gitInfoDescription)
                        .foregroundColor(item.isSelected ? .red : .gray)
                        .font(.system(size: 8, weight: .regular))
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .onTapGesture {
                            viewModel.setSelectedItem(item: item)
                        }
                }
                .onDelete(perform: onDelete)
                .opacity(viewModel.jsResourceIsUsingBundle ? 0.5 : 1)
            }
        }
        .padding()
        .navigationTitle("JSResourceSelect")
        .navigationBarBackButtonHidden(true)
        .onAppear {
            viewModel.readMaskbookItems()
        }
    }

    private func onDelete(offsets: IndexSet) {
        if let index = offsets.first {
            let item = viewModel.maskbookItems[index]
            viewModel.deleteItem(item: item)
        }
    }
}

struct JSResourceSelectView_Previews: PreviewProvider {
    static var previews: some View {
        JSResourceSelectView()
    }
}
