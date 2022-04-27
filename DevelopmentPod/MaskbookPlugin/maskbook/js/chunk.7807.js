"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7807],{

/***/ 61009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ twitterEncoding)
/* harmony export */ });
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52222);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32139);


const ICAO9303Checksum = {
    encode: (input)=>{
        return `${input}${(input.toUpperCase().replace(/[+/=]/g, '0').split('').map((d, i)=>Number.parseInt(d, 36) * [
                7,
                3,
                1
            ][i % 3]
        ).reduce((l, r)=>l + r
        , 0) % 19).toString(19).toUpperCase()}`;
    },
    decode: (input)=>{
        const content = input.slice(0, input.length - 1);
        const checksum = input.slice(input.length - 1);
        const r = ICAO9303Checksum.encode(content);
        if (checksum === r.slice(r.length - 1)) {
            return content;
        } else {
            return null;
        }
    }
};
const twitterEncoding = {
    /**
     * @link https://github.com/DimensionDev/Maskbook/issues/191
     */ publicKeyEncoder: (text)=>`\u{1F3AD}${ICAO9303Checksum.encode(text)}\u{1F3AD}`
    ,
    publicKeyDecoder: (text)=>{
        const r = regexMatchAll(text, /([\d+/=A-Za-z]{20,60})/);
        if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(r)) {
            return [];
        }
        for (const v of r){
            const retV = ICAO9303Checksum.decode(v);
            if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(retV)) {
                continue;
            }
            return [
                retV
            ];
        }
        return [];
    },
    payloadEncoder: _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__/* .__TwitterEncoder */ .EK,
    payloadDecoder: (text)=>{
        return (0,_masknet_encryption__WEBPACK_IMPORTED_MODULE_0__/* .TwitterDecoder */ .Ym)(text).map((x)=>[
                x
            ]
        ).unwrapOr([]);
    }
};
function regexMatchAll(str, regexp, index = 1) {
    const gPos = regexp.flags.indexOf('g');
    const withoutG = gPos >= 0 ? `${regexp.flags.slice(0, gPos)}${regexp.flags.slice(gPos + 1)}` : regexp.flags;
    const o = new RegExp(regexp.source, withoutG);
    const g = new RegExp(regexp.source, `${withoutG}g`);
    const r = str.match(g);
    if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(r)) {
        return null;
    }
    const sto = [];
    for (const v of r){
        const retV = v.match(o);
        if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(retV)) {
            continue;
        }
        sto.push(retV[index]);
    }
    if (sto.length === 0) {
        return null;
    }
    return sto;
}


/***/ }),

/***/ 29055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ twitterShared)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53242);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94627);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6955);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37732);
/* harmony import */ var _encoding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61009);
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25954);








const getPostURL = (post)=>{
    if (!(post.identifier instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO)) return null;
    return new URL(`https://twitter.com/${post.identifier.userId}/status/${post.postId}`);
};
const twitterShared = {
    ..._base__WEBPACK_IMPORTED_MODULE_5__/* .twitterBase */ .oQ,
    utils: {
        getHomePage: ()=>'https://twitter.com'
        ,
        getProfilePage: (userId)=>`https://twitter.com/${userId}`
        ,
        isValidUsername: _utils_user__WEBPACK_IMPORTED_MODULE_7__/* .usernameValidator */ .S_,
        textPayloadPostProcessor: {
            encoder (text) {
                return _encoding__WEBPACK_IMPORTED_MODULE_6__/* .twitterEncoding.payloadEncoder */ .n.payloadEncoder(text);
            },
            decoder (text) {
                return _encoding__WEBPACK_IMPORTED_MODULE_6__/* .twitterEncoding.payloadDecoder */ .n.payloadDecoder(text);
            }
        },
        getPostURL,
        share (text) {
            const url = this.getShareLinkURL(text);
            const width = 700;
            const height = 520;
            const openedWindow = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .openWindow */ .xw)(url, 'share', {
                width,
                height,
                screenX: window.screenX + (window.innerWidth - width) / 2,
                screenY: window.screenY + (window.innerHeight - height) / 2,
                opener: true,
                referrer: true,
                behaviors: {
                    toolbar: true,
                    status: true,
                    resizable: true,
                    scrollbars: true
                }
            });
            if (openedWindow === null) {
                location.assign(url);
            }
        },
        getShareLinkURL (message) {
            const url = urlcat__WEBPACK_IMPORTED_MODULE_2___default()('https://twitter.com/intent/tweet', {
                text: message
            });
            return new URL(url);
        },
        createPostContext: (0,_social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_3__/* .createSNSAdaptorSpecializedPostContext */ .k)({
            payloadParser: _utils__WEBPACK_IMPORTED_MODULE_4__/* .deconstructPayload */ .Qn,
            payloadDecoder: _encoding__WEBPACK_IMPORTED_MODULE_6__/* .twitterEncoding.payloadDecoder */ .n.payloadDecoder,
            getURLFromPostIdentifier: getPostURL
        })
    }
};


/***/ }),

/***/ 25954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IF": () => (/* binding */ getBio),
/* harmony export */   "S_": () => (/* binding */ usernameValidator),
/* harmony export */   "WM": () => (/* binding */ getTwitterId),
/* harmony export */   "o1": () => (/* binding */ getPersonalHomepage),
/* harmony export */   "wX": () => (/* binding */ getAvatar),
/* harmony export */   "y": () => (/* binding */ getNickname),
/* harmony export */   "yd": () => (/* binding */ getAvatarId)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32139);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43399);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6955);



/**
 * @link https://help.twitter.com/en/managing-your-account/twitter-username-rules
 */ const usernameValidator = (name)=>{
    for (const v of [
        /(twitter|admin)/i,
        /.{16,}/,
        /\W/
    ]){
        if (!(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(v.exec(name))) {
            return false;
        }
    }
    if (name.length < 4) return false;
    return true;
};
const getNickname = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNickNameSelector */ .rf)().evaluate();
    if (!node) return '';
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .collectNodeText */ .aW)(node);
};
const getTwitterId = ()=>{
    const ele = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchAvatarSelector */ .Ls)().evaluate()?.closest('a') || (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNFTAvatarSelector */ .dA)().evaluate()?.closest('a');
    if (ele) {
        const link = ele.getAttribute('href');
        if (link) {
            const [, userId] = link.match(/^\/(\w+)\/(photo|nft)$/) ?? [];
            return userId;
        }
    }
    return '';
};
const getBio = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .profileBioSelector */ .Rj)().evaluate();
    return node ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .collectNodeText */ .aW)(node) : '';
};
const getPersonalHomepage = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .personalHomepageSelector */ .IQ)().evaluate();
    return node?.getAttribute('href') || '';
};
const getAvatar = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchAvatarSelector */ .Ls)().evaluate() || (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNFTAvatarSelector */ .dA)().evaluate();
    if (node) {
        const imageURL = node.getAttribute('src') ?? '';
        return imageURL.trim();
    }
    return '';
};
const TWITTER_AVATAR_ID_MATCH = /^\/profile_images\/(\d+)/;
const getAvatarId = (avatarURL)=>{
    if (!avatarURL) return '';
    const _url = new URL(avatarURL);
    const match = _url.pathname.match(TWITTER_AVATAR_ID_MATCH);
    if (!match) return '';
    return match[1];
};


/***/ }),

/***/ 47807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37732);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29055);


const twitterWorker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .twitterWorkerBase */ .x,
    ..._shared__WEBPACK_IMPORTED_MODULE_1__/* .twitterShared */ .p,
    tasks: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twitterWorker);


/***/ }),

/***/ 94627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ createRefsForCreatePostContext),
  "k": () => (/* binding */ createSNSAdaptorSpecializedPostContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.9.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(85646);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(10888);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/resolveFacebookLink.ts

function resolveFacebookLink(link, id) {
    return id === src/* EnhanceableSite.Facebook */.Jk.Facebook ? link.replace(/\?fbclid=[\S\s]*#/, '#') : link;
}

;// CONCATENATED MODULE: ./src/social-network/utils/create-post-context.ts






function createSNSAdaptorSpecializedPostContext(create) {
    return function createPostContext(opt) {
        const cancel = [];
        opt.signal?.addEventListener('abort', ()=>cancel.forEach((fn)=>fn?.()
            )
        );
        // #region Post text content
        const postContent = new umd.ValueRef(extractText());
        cancel.push(opt.rawMessage.subscribe(()=>postContent.value = extractText()
        ));
        function extractText() {
            return (0,base/* extractTextFromTypedMessage */.Vc)(opt.rawMessage.getCurrentValue()).unwrapOr('');
        }
        // #endregion
        // #region Mentioned links
        const links = new src/* ObservableSet */.n7();
        cancel.push(postContent.addListener((post)=>{
            links.clear();
            (0,src/* parseURL */.Lk)(post).forEach((link)=>links.add(resolveFacebookLink(link, ui.activatedSocialNetworkUI.networkIdentifier))
            );
            opt.postMentionedLinksProvider?.getCurrentValue().forEach((link)=>links.add(resolveFacebookLink(link, ui.activatedSocialNetworkUI.networkIdentifier))
            );
        }));
        cancel.push(opt.postMentionedLinksProvider?.subscribe(()=>{
            // Not clean old links cause post content not changed
            opt.postMentionedLinksProvider?.getCurrentValue().forEach((link)=>links.add(resolveFacebookLink(link, ui.activatedSocialNetworkUI.networkIdentifier))
            );
        }));
        const linksSubscribe = (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>links.size ? [
                    ...links
                ] : src/* EMPTY_LIST */.rP
            ,
            subscribe: (sub)=>links.event.on(src/* ALL_EVENTS */.Ko, sub)
        });
        // #endregion
        // #region Parse payload
        const postPayload = new umd.ValueRef((0,esm/* Err */.UG)(new Error('Empty')));
        parsePayload();
        cancel.push(postContent.addListener(parsePayload));
        cancel.push(linksSubscribe.subscribe(parsePayload));
        function parsePayload() {
            // TODO: Also parse for payload in the image.
            let lastResult = (0,esm/* Err */.UG)(new Error('No candidate'));
            for (const each of (create.payloadDecoder || ((x)=>[
                    x
                ]
            ))(postContent.value + linksSubscribe.getCurrentValue().join('\n'))){
                lastResult = create.payloadParser(each);
                if (lastResult.ok) {
                    postPayload.value = lastResult;
                    return;
                }
            }
            if (postPayload.value.err) postPayload.value = lastResult;
        }
        // #endregion
        const author = {
            avatarURL: opt.avatarURL,
            nickname: opt.nickname,
            author: opt.author,
            snsID: opt.snsID
        };
        const transformedPostContent = new umd.ValueRef((0,base/* makeTypedMessageTupleFromList */.n_)(), base/* isTypedMessageEqual */.Hz);
        const postIdentifier = (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>{
                const by = opt.author.getCurrentValue();
                const id = opt.snsID.getCurrentValue();
                if (by.isUnknown || id === null) return null;
                return new src/* PostIdentifier */._P(by, id);
            },
            subscribe: (sub)=>{
                const a = opt.author.subscribe(sub);
                const b = opt.snsID.subscribe(sub);
                return ()=>void [
                        a(),
                        b()
                    ]
                ;
            }
        });
        const iv = new umd.ValueRef(null);
        const isPublicShared = new umd.ValueRef(undefined);
        const ownersAESKeyEncrypted = new umd.ValueRef(undefined);
        const version = new umd.ValueRef(undefined);
        return {
            author: author.author,
            avatarURL: author.avatarURL,
            nickname: author.nickname,
            snsID: author.snsID,
            get rootNode () {
                return opt.rootElement.realCurrent;
            },
            rootElement: opt.rootElement,
            actionsElement: opt.actionsElement,
            suggestedInjectionPoint: opt.suggestedInjectionPoint,
            comment: opt.comments,
            identifier: postIdentifier,
            url: (0,src/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>{
                    const id = postIdentifier.getCurrentValue();
                    if (id) return create.getURLFromPostIdentifier?.(id) || null;
                    return null;
                },
                subscribe: (sub)=>postIdentifier.subscribe(sub)
            }),
            mentionedLinks: linksSubscribe,
            postMetadataImages: opt.postImagesProvider || (0,src/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>src/* EMPTY_LIST */.rP
                ,
                subscribe: ()=>()=>{}
            }),
            rawMessage: opt.rawMessage,
            rawMessagePiped: transformedPostContent,
            postContent: (0,src/* SubscriptionFromValueRef */.Jf)(postContent),
            containingMaskPayload: (0,src/* SubscriptionFromValueRef */.Jf)(postPayload),
            iv,
            publicShared: (0,src/* SubscriptionFromValueRef */.Jf)(isPublicShared),
            ownersKeyEncrypted: (0,src/* SubscriptionFromValueRef */.Jf)(ownersAESKeyEncrypted),
            version: (0,src/* SubscriptionFromValueRef */.Jf)(version),
            decryptedReport (opts) {
                if (opts.iv) iv.value = opts.iv;
                if (opts.sharedPublic?.some) isPublicShared.value = opts.sharedPublic.val;
                if (opts.ownersAESKeyEncrypted) ownersAESKeyEncrypted.value = opts.ownersAESKeyEncrypted;
                if (opts.version) version.value = opts.version;
            }
        };
    };
}
function createRefsForCreatePostContext() {
    const avatarURL = new umd.ValueRef(null);
    const nickname = new umd.ValueRef(null);
    const postBy = new umd.ValueRef(src/* ProfileIdentifier.unknown */.WO.unknown, src/* ProfileIdentifier.equals */.WO.equals);
    const postID = new umd.ValueRef(null);
    const postMessage = new umd.ValueRef((0,base/* makeTypedMessageTupleFromList */.n_)());
    const postMetadataImages = new src/* ObservableSet */.n7();
    const postMetadataMentionedLinks = new src/* ObservableMap */.vP();
    const subscriptions = {
        avatarURL: (0,src/* mapSubscription */.S3)((0,src/* SubscriptionFromValueRef */.Jf)(avatarURL), (x)=>{
            if (!x) return null;
            try {
                return new URL(x);
            } catch  {}
            return null;
        }),
        nickname: (0,src/* SubscriptionFromValueRef */.Jf)(nickname),
        author: (0,src/* SubscriptionFromValueRef */.Jf)(postBy),
        snsID: (0,src/* SubscriptionFromValueRef */.Jf)(postID),
        rawMessage: (0,src/* SubscriptionFromValueRef */.Jf)(postMessage),
        postImagesProvider: (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>postMetadataImages.size ? [
                    ...postMetadataImages
                ] : src/* EMPTY_LIST */.rP
            ,
            subscribe: (sub)=>postMetadataImages.event.on(src/* ALL_EVENTS */.Ko, sub)
        }),
        postMentionedLinksProvider: (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>postMetadataMentionedLinks.size ? [
                    ...postMetadataMentionedLinks.values()
                ] : src/* EMPTY_LIST */.rP
            ,
            subscribe: (sub)=>postMetadataMentionedLinks.event.on(src/* ALL_EVENTS */.Ko, sub)
        })
    };
    return {
        subscriptions,
        avatarURL,
        nickname,
        postBy,
        postID,
        postMessage,
        postMetadataMentionedLinks,
        postMetadataImages
    };
}


/***/ })

}]);