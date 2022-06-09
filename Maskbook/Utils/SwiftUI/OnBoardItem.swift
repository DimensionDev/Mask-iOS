import SwiftUI

protocol OnBoardItem: CaseIterable, Hashable, Identifiable where
     AllCases: RandomAccessCollection,
     AllCases.Index == Int {

     var isFirst: Bool { get }
     var index: Int { get }
 }

 protocol OnBoardItemView {
     associatedtype Item: OnBoardItem
     init(item: Item)
 }
