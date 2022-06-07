import SwiftUI

struct FileServiceView: View {
    @State
    private var showOnboard = true

    var body: some View {

        if showOnboard {
            FileServiceOnBoardView()
        } else {
            // file list view
        }
    }
}
