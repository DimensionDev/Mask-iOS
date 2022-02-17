//
//  Fonts.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI
import UIKit

enum FontStyles {
    case mh1

    case rh1

    case bh1

    case mh2

    case rh2

    case bh2

    case mh3

    case rh3

    case bh3

    case mh4

    case rh4

    case bh4

    case mh5

    case rh5

    case bh5

    case mh6

    case rh6

    case bh6

    case mh7

    case rh7

    case bh7

    case mh8

    case rh8

    case bh8

    case mh10

    case rh10
    
    case bh10

    case mh11

    case rh11

    case bh11

    var fontSize: CGFloat {
        switch self {
        case .mh1, .bh1, .rh1: return 32
        case .bh2:  return 24
        case .mh2, .rh2: return 20
        case .bh3: return 20
        case .mh3, .rh3: return 18
        case .mh4, .bh4, .rh4: return 18
        case .mh5, .bh5, .rh5: return 16
        case .rh6:             return 15
        case .mh6, .bh6:       return 14
        case .mh7:             return 14
        case .rh7:             return 13
        case .bh7:             return 12
        case .mh8, .bh8, .rh8: return 13
        case .mh10, .bh10, .rh10: return 10
        case .mh11, .bh11, .rh11: return 8
        }
    }
}
extension FontStyles {
    var weight: UIFont.Weight {
        switch self {
        case .mh1,
             .mh2,
             .mh3,
             .mh4,
             .mh5,
             .mh6,
             .mh7,
             .mh8,
             .mh10,
             .mh11:
            return .medium

        case .rh1,
             .rh2,
             .rh3,
             .rh4,
             .rh5,
             .rh6,
             .rh7,
             .rh8,
             .rh10,
             .rh11:
            return .regular

        case .bh1,
             .bh2,
             .bh3,
             .bh4,
             .bh5,
             .bh6,
             .bh7,
             .bh8,
             .bh10,
             .bh11:
            return .bold
        }
    }
}

extension FontStyles {
    var weightStyle: SwiftUI.Font.Weight {
        switch self {
        case .mh1,
             .mh2,
             .mh3,
             .mh4,
             .mh5,
             .mh6,
             .mh7,
             .mh8,
             .mh10,
             .mh11:
            return .medium

        case .rh1,
             .rh2,
             .rh3,
             .rh4,
             .rh5,
             .rh6,
             .rh7,
             .rh8,
             .rh10,
             .rh11:
            return .regular

        case .bh1,
             .bh2,
             .bh3,
             .bh4,
             .bh5,
             .bh6,
             .bh7,
             .bh8,
             .bh10,
             .bh11:
            return .bold
        }
    }
}

extension FontStyles {
    var font: SwiftUI.Font {
        .system(size: fontSize).weight(weightStyle)
    }

    var uifont: UIFont {
        .systemFont(ofSize: fontSize, weight: weight)
    }
}

extension FontStyles {
    static var MH1: UIFont {
        Self.mh1.uifont
    }

    static var RH1: UIFont {
        Self.rh1.uifont
    }

    static var BH1: UIFont {
        Self.bh1.uifont
    }

    static var MH2: UIFont {
        Self.mh2.uifont
    }

    static var RH2: UIFont {
        Self.rh2.uifont
    }

    static var BH2: UIFont {
        Self.bh2.uifont
    }

    static var MH3: UIFont {
        Self.mh3.uifont
    }

    static var RH3: UIFont {
        Self.rh3.uifont
    }

    static var BH3: UIFont {
        Self.bh3.uifont
    }

    static var MH4: UIFont {
        Self.mh4.uifont
    }

    static var RH4: UIFont {
        Self.rh4.uifont
    }

    static var BH4: UIFont {
        Self.bh4.uifont
    }

    static var MH5: UIFont {
        Self.mh5.uifont
    }

    static var RH5: UIFont {
        Self.rh5.uifont
    }

    static var BH5: UIFont {
        Self.bh5.uifont
    }

    static var MH6: UIFont {
        Self.mh6.uifont
    }

    static var RH6: UIFont {
        Self.rh6.uifont
    }

    static var BH6: UIFont {
        self.bh6.uifont
    }

    static var MH7: UIFont {
        Self.mh7.uifont
    }

    static var RH7: UIFont {
        Self.rh7.uifont
    }

    static var BH7: UIFont {
        Self.bh7.uifont
    }

    static var MH8: UIFont {
        Self.mh8.uifont
    }

    static var RH8: UIFont {
        Self.rh8.uifont
    }

    static var BH8: UIFont {
        Self.bh8.uifont
    }

    static var MH10: UIFont {
        Self.mh10.uifont
    }

    static var RH10: UIFont {
        Self.rh10.uifont
    }

    static var BH10: UIFont {
        Self.bh10.uifont
    }

    static var MH11: UIFont {
        Self.mh11.uifont
    }

    static var RH11: UIFont {
        Self.rh11.uifont
    }

    static var BH11: UIFont {
        Self.bh11.uifont
    }
}
