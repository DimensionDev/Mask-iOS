//
//  CollectibleIconImageView.swift
//  Maskbook
//
//  Created by BradGao on 2021/10/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import BMPlayer
import Kingfisher
import UIKit
import WebKit
import SnapKit

class CollectibleIconImageView: UIView, WKScriptMessageHandler {
    static let webProgressMessage: String = "postProgress"
    
    enum TokenImageType {
        case placeholder
        case normalImage(UIImage)
        case normalUrl(String)
        case svgUrl(String)
        case supports3d(imageUrl: String, animationUrl: String)
        case supportsVideo(imageUrl: String, animationUrl: String)
        case other(url: String)
    }
    
    enum PlaceholderType {
        case image(UIImage)
        case view(UIView)
        
        var placeHolderCustomView: UIView? {
            switch self {
            case .image:
                return nil
                
            case .view(let view):
                return view
            }
        }
    }
    
    private var imageView: UIImageView = {
        let view = UIImageView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.contentMode = .scaleAspectFill
        view.applyCornerRadius(radius: 19)
        view.isHidden = true
        return view
    }()
    
    private var svgWebView: WKWebView = {
        let webView = WKWebView()
        webView.backgroundColor = .clear
        webView.isOpaque = false
        webView.scrollView.backgroundColor = .clear
        webView.scrollView.isScrollEnabled = false
        webView.scrollView.showsHorizontalScrollIndicator = false
        webView.scrollView.showsVerticalScrollIndicator = false
        webView.translatesAutoresizingMaskIntoConstraints = false
        webView.isHidden = true
        webView.applyCornerRadius(radius: 19)
        return webView
    }()
    
    private var videoPlayerView: BMPlayer = {
        BMPlayerConf.topBarShowInCase = .horizantalOnly
        var controller = BMPlayerControlView()
        controller.mainMaskView.isHidden = true
        controller.bottomMaskView.isHidden = true
        let videoPlayerView = BMPlayer(customControlView: controller)
        videoPlayerView.applyCornerRadius(radius: 19)
        videoPlayerView.isHidden = true
        return videoPlayerView
    }()
    
    var tokenImageType: TokenImageType = .placeholder {
        didSet {
            updateImage()
        }
    }
    
    var placeholder: PlaceholderType = .image(Asset.Images.Scene.Balance.tokenIconPlaceholder.image) {
        willSet {
            if case .view(let oldView) = placeholder {
                oldView.removeFromSuperview()
            }
            guard case .view(let view) = newValue else {
                return
            }
            addSubview(view)
            view.translatesAutoresizingMaskIntoConstraints = false
            NSLayoutConstraint.activate([
                view.leadingAnchor.constraint(equalTo: leadingAnchor),
                view.trailingAnchor.constraint(equalTo: trailingAnchor),
                view.topAnchor.constraint(equalTo: topAnchor),
                view.bottomAnchor.constraint(equalTo: bottomAnchor)
            ])
        }
    }
    
    init() {
        super.init(frame: .zero)
        setupSubViews()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func setupSubViews() {
        backgroundColor = .clear
        addSubview(imageView)
        addSubview(svgWebView)
        addSubview(videoPlayerView)
        
        NSLayoutConstraint.activate([
            imageView.leadingAnchor.constraint(equalTo: leadingAnchor),
            imageView.trailingAnchor.constraint(equalTo: trailingAnchor),
            imageView.topAnchor.constraint(equalTo: topAnchor),
            imageView.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
        
        NSLayoutConstraint.activate([
            svgWebView.leadingAnchor.constraint(equalTo: leadingAnchor),
            svgWebView.trailingAnchor.constraint(equalTo: trailingAnchor),
            svgWebView.topAnchor.constraint(equalTo: topAnchor),
            svgWebView.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
        
        svgWebView.configuration.userContentController.add(self, name: CollectibleIconImageView.webProgressMessage)
        
        videoPlayerView.snp.makeConstraints {
            $0.top.left.right.bottom.equalTo(self)
        }
        
        videoPlayerView.delegate = self
    }
    
    func setImageUrl(_ url: String?, _ animationUrl: String? = nil) {
        guard let validUrl = url else {
            showPlaceholder()
            return
        }

        guard let animationUrl = animationUrl else {
            if validUrl.hasSuffix(".svg") {
                tokenImageType = .svgUrl(validUrl)
            } else {
                tokenImageType = .normalUrl(validUrl)
            }
            return
        }

        if animationUrl.hasSuffix(".glb") || animationUrl.hasSuffix(".gltf") {
            tokenImageType = .supports3d(imageUrl: validUrl, animationUrl: animationUrl)
        }
        
        if animationUrl.hasSuffix(".mp3") || animationUrl.hasSuffix(".wav") || animationUrl.hasSuffix(".mp4") {
            tokenImageType = .supportsVideo(imageUrl: validUrl, animationUrl: animationUrl)
        }
        tokenImageType = .other(url: animationUrl)
    }
    
    private func updateImage() {
        reset()
        switch tokenImageType {
        case .placeholder:
            showPlaceholder()
            
        case .normalUrl(let url):
            imageView.isHidden = false
            imageView.setNetworkImage(url: url) { [weak self] result in
                guard case .failure = result else {
                    self?.hidePlaceholder()
                    return
                }
                self?.showPlaceholder()
            }
            
        case .normalImage(let image):
            imageView.isHidden = false
            imageView.image = image
            
        case .svgUrl(let url):
            svgWebView.isHidden = false
            svgWebView.loadHTMLString(url.svgHTML, baseURL: nil)
            
        case let .supports3d(normalURL, nftURL):
            imageView.isHidden = false
            svgWebView.isHidden = false
            svgWebView.isUserInteractionEnabled = true
            svgWebView.loadHTMLString(nftURL.nft3dHTML, baseURL: nil)
            imageView.setNetworkImage(url: normalURL) { [weak self] result in
                guard case .failure = result else {
                    self?.hidePlaceholder()
                    return
                }
                self?.showPlaceholder()
            }
            
        case let .supportsVideo(imageUrl, nftURL):
            imageView.isHidden = false
            imageView.setNetworkImage(url: imageUrl) { [weak self] result in
                guard case .failure = result else {
                    self?.hidePlaceholder()
                    return
                }
                self?.showPlaceholder()
            }
            let asset = BMPlayerResource(url: URL(string: nftURL)!)
            videoPlayerView.setVideo(resource: asset)
            
        case .other(let url):
            imageView.isHidden = false
            svgWebView.isHidden = false
            svgWebView.isUserInteractionEnabled = true
            if let validUrl = URL(string: url) {
                let request = URLRequest(url: validUrl)
                svgWebView.load(request)
            } else {
                showPlaceholder()
            }
        }
    }
    
    func setImage(_ image: UIImage) {
        tokenImageType = .normalImage(image)
    }
    
    private func showPlaceholder() {
        switch placeholder {
        case .image(let image):
            imageView.isHidden = false
            imageView.kf.cancelDownloadTask()
            svgWebView.isHidden = true
            placeholder.placeHolderCustomView?.isHidden = true
            imageView.image = image
            
        case .view(let customView):
            imageView.isHidden = true
            imageView.kf.cancelDownloadTask()
            svgWebView.isHidden = true
            customView.isHidden = false
        }
    }
    
    private func hidePlaceholder() {
        switch placeholder {
        case .image:
            break
            
        case .view(let customView):
            customView.isHidden = true
        }
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if message.name == CollectibleIconImageView.webProgressMessage,
           let progress: NSNumber = message.body as? NSNumber,
           progress.intValue == 1 {
            imageView.isHidden = true
        }
    }
    
    private func reset() {
        imageView.isHidden = true
        videoPlayerView.isHidden = true
        svgWebView.isHidden = true
        svgWebView.isUserInteractionEnabled = false
        placeholder.placeHolderCustomView?.isHidden = true
        imageView.kf.cancelDownloadTask()
        videoPlayerView.pause()
    }
    
    deinit {
        svgWebView.configuration.userContentController.removeScriptMessageHandler(forName: CollectibleIconImageView.webProgressMessage)
    }
}

extension CollectibleIconImageView: BMPlayerDelegate {
    func bmPlayer(player: BMPlayer, loadedTimeDidChange loadedDuration: TimeInterval, totalDuration: TimeInterval) {}
    
    func bmPlayer(player: BMPlayer, playTimeDidChange currentTime: TimeInterval, totalTime: TimeInterval) {
        guard case .supportsVideo = tokenImageType else { return }
        if currentTime > 0 {
            imageView.isHidden = true
            svgWebView.isHidden = true
            placeholder.placeHolderCustomView?.isHidden = true
            
            videoPlayerView.isHidden = false
        }
    }
    
    func bmPlayer(player: BMPlayer, playerIsPlaying playing: Bool) {}
    
    func bmPlayer(player: BMPlayer, playerOrientChanged isFullscreen: Bool) {}
    
    func bmPlayer(player: BMPlayer, playerStateDidChange state: BMPlayerState) {}
}

private extension String {
    var svgHTML: String {
        """
        <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no">
          <style>
              html, body {
                      margin: 0;
                      padding: 0;
                      height: 100%;
                      width: 100%;
                      overflow: hidden;
                      background-color: transparent;
                    }
                    img {
                      object-fit: contain;
                      border-radius: 20px;
                      position: fixed;
                      top: 0;
                      left: 0;
                      height: 100%;
                      width: 100%;
                      overflow: hidden;
                    }
            </style>
          </head>
          <body>
            <img src="\(self)"/>
          </body>
        </html>
        """
    }

    var nft3dHTML: String {
        """
        <html>
        <head>
          <meta charset="utf-8">
          <script type="module" src="https://unpkg.com/@google/model-viewer@0.6.0/dist/model-viewer.js"></script>
          <script nomodule src="https://unpkg.com/@google/model-viewer@0.6.0/dist/model-viewer-legacy.js"></script>
          <title>GLBModelViewer</title>
          <style>
            * { margin:0; padding:0; }
            html { height: 100%; width: 100%; }
            body { height: 100%; width: 100%; }
            model-viewer { width: 100%; height: 100% }
          </style>
        </head>
        <body>
          <model-viewer src="\(self)"/} alt = ''
          )} auto-rotate camera-controls autoplay shadow-intensity="1">
            <div slot="progress-bar"></div>
          </model-viewer>
          <script type="text/javascript">
            function shouldPostMessage(type, payload) {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: type,
                payload: payload,
              }));
            }
            var modelViewer = document.querySelector("model-viewer");
            modelViewer.addEventListener("progress", function (e) {
              window.webkit.messageHandlers.postProgress.postMessage(e.detail.totalProgress)
            });
            modelViewer.addEventListener("model-visibility", function (e) {
              shouldPostMessage("model-visibility", !!e.detail.visible);
            });
          </script>
        </body>
        </html>
        """
    }
}
