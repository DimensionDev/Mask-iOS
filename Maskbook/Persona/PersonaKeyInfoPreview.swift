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
import SwiftUI
import SwiftyJSON
import SwiftMsgPack

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
        self.privateKey = originPersona?.packedData?.base64URLEncodedString() ?? ""
        
        let mnemonic = persona.mnemonic
        self.word = mnemonic?
            .split(separator: " ")
            .map { String($0) }
    }

    var body: some View {
        VStack {
            privateKeySection()
            if let word = word {
                mnemonicSection(word: word)
            }
            Spacer()
        }
        .padding(.init(top: 28, leading: 21, bottom: 28, trailing: 21))
        .frame(width: 794, height: 1_124, alignment: .center)
    }

    func privateKeySection() -> some View {
        var blueGradient: BlueGradientDecorator {
            .init(
                selectedColors: [],
                normalColors: [
                    Asset.Colors.Gradient.blue1.asColor(),
                    Asset.Colors.Gradient.blue2.asColor()
                ]
            )
        }
        return HStack {
            keyInfoView()
                .padding(.top, 25)
                .padding(.leading, 16)
            Spacer()
            qrcodeImageView()
                .padding(.trailing, 16)
        }
        .frame(width: nil, height: 168, alignment: .center)
        .blueGradient(radius: 8, isSelected: false, colorDecorator: blueGradient)
    }

    @ViewBuilder
    func keyInfoView() -> some View {
        VStack(alignment: .leading, spacing: 12.0) {
            HStack {
                Image(uiImage: Asset.Icon.Logo.littleMask.image)
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .stroke(Asset.Colors.Public.white.asColor(), lineWidth: 1)
                    )
                Text(L10n.Scene.PersonaDownload.persona + " " + name)
                    .font(FontStyles.bh2.font)
                    .foregroundColor(Asset.Colors.Public.white.asColor())
            }
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    Text(L10n.Scene.PersonaDownload.maskId)
                        .foregroundColor(Asset.Colors.Public.white.asColor())
                        .font(FontStyles.bh6.font)
                    Text(L10n.Scene.PersonaDownload.privateKey)
                        .foregroundColor(Asset.Colors.Public.white.asColor())
                        .font(FontStyles.bh6.font)
                    Spacer()
                }
                VStack(alignment: .leading) {
                    Spacer().frame(height: 2)
                    Text(maskId)
                        .foregroundColor(Asset.Colors.Public.white.asColor())
                        .font(FontStyles.rh10.font)
                    Spacer().frame(height: 9)
                    Text(privateKey)
                        .foregroundColor(Asset.Colors.Public.white.asColor())
                        .font(FontStyles.rh10.font)
                    Spacer()
                }
            }
        }
    }

    @ViewBuilder
    func qrcodeImageView() -> some View {
        if let image = EFQRCode.generate(
            for: "mask://persona/privatekey/" + privateKey,
            size: EFIntSize(width: 136, height: 136),
            icon: Asset.Icon.Logo.littleMask.image.cgImage,
            iconSize: EFIntSize(width: 26, height: 26)
        ) {
            Image(uiImage: UIImage(cgImage: image))
                .frame(width: 136, height: 136, alignment: .center)
        } else {
            Text("Create QRCode image failed!")
        }
    }

    @ViewBuilder
    func mnemonicSection(word: [String]) -> some View {
        VStack(alignment: .leading, spacing: 30) {
            Text(L10n.Scene.PersonaDownload.identityId)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
                .font(FontStyles.bh5.font)
            mnemonic(word: word)
            HStack {
                Image(uiImage: Asset.Images.Scene.Social.connectHintBannerIcon.image)
                    .resizable()
                    .frame(width: 20, height: 20)
                Text(L10n.Scene.PersonaDownload.downloadTips)
                    .foregroundColor(Asset.Colors.Text.black.asColor())
                    .font(FontStyles.bh7.font)
            }
        }
        .padding(.top, 20)
    }

    @ViewBuilder
    func mnemonic(word: [String]) -> some View {
        let gridItems: [GridItem] = Array(repeating: .init(.flexible()), count: 4)

        LazyVGrid(columns: gridItems, spacing: 15) {
            ForEach(0 ... word.count - 1, id: \.self) { index in
                Text("\(index). \(word[index])")
                    .frame(width: 166, height: 39, alignment: .center)
                    .foregroundColor(Asset.Colors.Public.blue.asColor())
                    .background(Asset.Colors.Gradient.blue2.asColor().opacity(0.1))
                    .cornerRadius(8)
            }
        }
        .padding(.leading, -7)
    }
}
