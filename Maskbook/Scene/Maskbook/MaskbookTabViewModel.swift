//
//  MaskbookTabViewModel.swift
//  Maskbook
//
//  Created by MainasuK Cirno on 2020/3/10.
//  Copyright © 2020 dimension. All rights reserved.
//

import Combine
import UIKit
import WebKit

final class MaskbookTabViewModel {
    private(set) var disposeBag = Set<AnyCancellable>()
    
    // Input
    let navigationFailure = CurrentValueSubject<NavigationFailure?, Never>(nil)
    
    // Output
    let shouldFailureDescriptionHidden = CurrentValueSubject<Bool, Never>(true)
    let retryCount = CurrentValueSubject<Int, Never>(0)
    let requestURLString = CurrentValueSubject<String?, Never>(nil)
    let errorDescription = CurrentValueSubject<String?, Never>(nil)
    let shouldDisplayGoTimelineButton = CurrentValueSubject<Bool, Never>(false)
    
    init() {
        navigationFailure
            .sink { [weak self] failure in
                guard let `self` = self else { return }
                
                if let oldFailure = self.navigationFailure.value {
                    if oldFailure.navigationAction.request.url == failure?.navigationAction.request.url {
                        self.retryCount.accept(self.retryCount.value + 1)
                    } else {
                        self.retryCount.accept(0)
                    }
                }
                
                guard let navigationFailure = failure else { return }
                guard let url = navigationFailure.navigationAction.request.url else { return }
                self.requestURLString.accept(url.absoluteString)

                let nsError = (navigationFailure.error as NSError)
                let retryCount = self.retryCount.value
                let message: String = {
                    if retryCount < 3 {
                        return "Error: \(nsError.localizedDescription)\nRequest failed, please try again"
                    } else {
                        return "Error: \(nsError.localizedDescription)\nPlease check the network and try again"
                    }
                }()
                self.errorDescription.accept(message)
            }
            .store(in: &disposeBag)
        retryCount
            .map { $0 >= 3 }
            .assign(to: \.value, on: shouldDisplayGoTimelineButton)
            .store(in: &disposeBag)
        
        navigationFailure
            .map { $0 == nil }
            .assign(to: \.value, on: shouldFailureDescriptionHidden)
            .store(in: &disposeBag)
    }
}

extension MaskbookTabViewModel {
    struct NavigationFailure {
        let navigationAction: WKNavigationAction
        let error: Error
    }
}
