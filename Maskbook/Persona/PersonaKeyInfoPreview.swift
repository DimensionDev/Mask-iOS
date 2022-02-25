//
//  PersonaKeyInfoPreview.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/11.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import CoreDataStack
import EFQRCode
import SwiftMsgPack
import SwiftUI
import SwiftyJSON

struct PersonaKeyInfoPreview: View {
    var name: String
    var maskId: String
    var privateKey: String
    var word: [String]?

    init(persona: PersonaRecord) {
        self.name = persona.nickname ?? ""
        self.maskId = persona.identifier?
            .split(separator: "/").last
            .flatMap { String($0) }
            ?? ""
        let originPersona = Persona(fromRecord: persona)
        self.privateKey = originPersona?.privateKey?.privateKeyBase64String ?? ""

        let mnemonic = persona.mnemonic
        self.word = mnemonic?
            .split(separator: " ")
            .map { String($0) }
    }

    var body: some View {
        VStack {
            keyInfoView()
            if let word = word {
                Spacer().frame(height: 56)
                mnemonicSection(word: word)
            }
            Spacer().frame(height: 20)
            HStack(alignment: .center) {
                Image(uiImage: Asset.Images.Scene.Social.connectHintBannerIcon.image)
                    .resizable()
                    .frame(width: 20, height: 20)
                Text(L10n.Scene.PersonaDownload.downloadTips)
                    .foregroundColor(Asset.Colors.Gradient.blue2.asColor())
                    .font(FontStyles.rh7.font)
            }
            .offset(x: 5, y: 0)
            Spacer()
        }
        .padding(.init(top: 120,
                       leading: 172,
                       bottom: 120,
                       trailing: 172))
        .frame(width: 794, height: 1_124, alignment: .center)
    }

    @ViewBuilder
    func keyInfoView() -> some View {
        VStack(alignment: .center, spacing: 58) {
            HStack {
                Image(uiImage: Asset.Icon.Logo.largeMask.image)
                    .resizable()
                    .frame(width: 64, height: 64)
                VStack(alignment: .leading, spacing: 12) {
                    Text(name)
                        .font(FontStyles.bh3.font)
                        .foregroundColor(Asset.Colors.Text.black.asColor())
                    Text("ID: \(maskId)")
                        .foregroundColor(Asset.Colors.Text.black.asColor())
                        .font(FontStyles.bh7.font)
                }
                Spacer()
            }
            qrcodeImageView()
        }
    }

    @ViewBuilder
    func qrcodeImageView() -> some View {
        if let image = EFQRCode.generate(
            for: "mask://persona/privatekey/" + privateKey,
            size: EFIntSize(width: 320, height: 320)
        ) {
            Image(uiImage: UIImage(cgImage: image))
                .frame(width: 320, height: 320, alignment: .center)
        } else {
            Text("Create QRCode image failed!")
        }
    }

    @ViewBuilder
    func mnemonicSection(word: [String]) -> some View {
        VStack(alignment: .center, spacing: 20) {
            Divider()
            Text(L10n.Scene.PersonaDownload.identityId)
                .foregroundColor(Asset.Colors.Text.black.asColor())
                .font(FontStyles.bh4.font)
            mnemonic(word: word)
        }
        .padding(.top, 20)
    }

    @ViewBuilder
    func mnemonic(word: [String]) -> some View {
        let gridItems: [GridItem] = Array(repeating: .init(.flexible()), count: 3)

        LazyVGrid(columns: gridItems, spacing: 12) {
            ForEach(0 ... word.count - 1, id: \.self) { index in
                Text("\(index). \(word[index])")
                    .frame(width: 125, height: 48, alignment: .center)
                    .foregroundColor(Asset.Colors.Gradient.blue2.asColor())
                    .background(Asset.Colors.Gradient.blue2.asColor().opacity(0.1))
                    .cornerRadius(8)
            }
        }
    }
}
