"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1089],{

/***/ 71858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ mindsShared)
});

// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(13591);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(65375);
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
        getShareLinkURL (message) {
            return new URL(`https://www.minds.com/newsfeed/subscriptions?intentUrl=${encodeURIComponent(message)}`);
        },
        createPostContext: (0,create_post_context/* createSNSAdaptorSpecializedPostContext */.k)({
            payloadParser: utils/* deconstructPayload */.Qn,
            getURLFromPostIdentifier: getPostURL
        })
    }
};


/***/ }),

/***/ 11089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65375);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71858);


const mindsWorker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .mindsWorkerBase */ .fy,
    ..._shared__WEBPACK_IMPORTED_MODULE_1__/* .mindsShared */ .f,
    tasks: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mindsWorker);


/***/ }),

/***/ 13591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ createRefsForCreatePostContext),
  "k": () => (/* binding */ createSNSAdaptorSpecializedPostContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(65631);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/resolveFacebookLink.ts

function resolveFacebookLink(link, id) {
    return id === src/* EnhanceableSite.Facebook */.Jk.Facebook ? link.replace(/\?fbclid=[\S\s]*#/, '#') : link;
}

;// CONCATENATED MODULE: ./src/social-network/utils/create-post-context.ts






function createSNSAdaptorSpecializedPostContext(create) {
    return function createPostContext(opt) {
        var ref2, ref1;
        const cancel = [];
        (ref2 = opt.signal) === null || ref2 === void 0 ? void 0 : ref2.addEventListener('abort', ()=>{
            return cancel.forEach((fn)=>{
                return fn === null || fn === void 0 ? void 0 : fn();
            });
        });
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
            var ref;
            links.clear();
            (0,src/* parseURL */.Lk)(post).forEach((link)=>links.add(resolveFacebookLink(link, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier))
            );
            (ref = opt.postMentionedLinksProvider) === null || ref === void 0 ? void 0 : ref.getCurrentValue().forEach((link)=>links.add(resolveFacebookLink(link, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier))
            );
        }));
        cancel.push((ref1 = opt.postMentionedLinksProvider) === null || ref1 === void 0 ? void 0 : ref1.subscribe(()=>{
            var // Not clean old links cause post content not changed
            ref;
            (ref = opt.postMentionedLinksProvider) === null || ref === void 0 ? void 0 : ref.getCurrentValue().forEach((link)=>links.add(resolveFacebookLink(link, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier))
            );
        }));
        const linksSubscribe = (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>[
                    ...links
                ]
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
                    var ref;
                    const id = postIdentifier.getCurrentValue();
                    if (id) return ((ref = create.getURLFromPostIdentifier) === null || ref === void 0 ? void 0 : ref.call(create, id)) || null;
                    return null;
                },
                subscribe: (sub)=>postIdentifier.subscribe(sub)
            }),
            mentionedLinks: linksSubscribe,
            postMetadataImages: opt.postImagesProvider || (0,src/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>[]
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
                var ref;
                if (opts.iv) iv.value = opts.iv;
                if ((ref = opts.sharedPublic) === null || ref === void 0 ? void 0 : ref.some) isPublicShared.value = opts.sharedPublic.val;
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
            getCurrentValue: ()=>[
                    ...postMetadataImages
                ]
            ,
            subscribe: (sub)=>postMetadataImages.event.on(src/* ALL_EVENTS */.Ko, sub)
        }),
        postMentionedLinksProvider: (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>[
                    ...postMetadataMentionedLinks.values()
                ]
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