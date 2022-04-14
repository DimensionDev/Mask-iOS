"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5605],{

/***/ 99138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ mindsShared)
});

// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(94627);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(8727);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNull.js
var isNull = __webpack_require__(32139);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/user.ts

const usernameValidator = (name)=>{
    for (const v of [
        /(minds|admin)/i,
        /.{16,}/,
        /\W/
    ]){
        if (!(0,isNull/* default */.Z)(v.exec(name))) {
            return false;
        }
    }
    return name.length >= 4;
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/shared.ts






const getPostURL = (post)=>{
    return new URL(`https://minds.com/newsfeed/${post.postId}`);
};
const mindsShared = {
    ...base/* mindsBase */.NE,
    utils: {
        getHomePage: ()=>'https://www.minds.com'
        ,
        getProfilePage: ()=>'https://www.minds.com'
        ,
        isValidUsername: usernameValidator,
        textPayloadPostProcessor: undefined,
        getPostURL,
        share (message) {
            (0,src/* openWindow */.xw)(this.getShareLinkURL?.(message));
        },
        getShareLinkURL (message) {
            const url = dist_default()('https://www.minds.com/newsfeed/subscriptions', {
                intentUrl: message
            });
            return new URL(url);
        },
        createPostContext: (0,create_post_context/* createSNSAdaptorSpecializedPostContext */.k)({
            payloadParser: utils/* deconstructPayload */.Qn,
            getURLFromPostIdentifier: getPostURL
        })
    }
};


/***/ }),

/***/ 75605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8727);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99138);


const mindsWorker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .mindsWorkerBase */ .fy,
    ..._shared__WEBPACK_IMPORTED_MODULE_1__/* .mindsShared */ .f,
    tasks: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mindsWorker);


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