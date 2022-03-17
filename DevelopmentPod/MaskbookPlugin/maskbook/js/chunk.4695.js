"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4695],{

/***/ 97554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ facebookShared)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40543);
/* harmony import */ var _utils_parse_username__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69189);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13573);
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13591);





const getPostURL = (post)=>{
    if (post.identifier instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier */ .WO) return new URL((0,_utils_parse_username__WEBPACK_IMPORTED_MODULE_1__/* .getPostUrlAtFacebook */ .tx)(post));
    return null;
};
const facebookShared = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .facebookBase */ .qv,
    utils: {
        getHomePage: ()=>'https://www.facebook.com'
        ,
        getProfilePage: (userId)=>'https://www.facebook.com'
        ,
        isValidUsername: (v)=>!!(0,_utils_parse_username__WEBPACK_IMPORTED_MODULE_1__/* .isValidFacebookUsername */ .mt)(v)
        ,
        textPayloadPostProcessor: undefined,
        getPostURL,
        getShareLinkURL (message) {
            const url = new URL('https://www.facebook.com/sharer/sharer.php');
            url.searchParams.set('quote', message);
            url.searchParams.set('u', 'mask.io');
            return url;
        },
        createPostContext: (0,_social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_4__/* .createSNSAdaptorSpecializedPostContext */ .k)({
            payloadParser: _utils__WEBPACK_IMPORTED_MODULE_3__/* .deconstructPayload */ .Qn,
            getURLFromPostIdentifier: getPostURL
        })
    }
};


/***/ }),

/***/ 72572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ isMobileFacebook)
/* harmony export */ });
/* unused harmony export facebookDomain */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

const isMobileFacebook = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ContentScript) ? location.hostname === 'm.facebook.com' : navigator.userAgent.match(/Mobile|mobile/);
const facebookDomain = (/* unused pure expression or super */ null && (isMobileFacebook ? 'https://m.facebook.com/' : 'https://facebook.com/'));


/***/ }),

/***/ 69189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mt": () => (/* binding */ isValidFacebookUsername),
/* harmony export */   "tg": () => (/* binding */ getProfilePageUrlAtFacebook),
/* harmony export */   "tx": () => (/* binding */ getPostUrlAtFacebook)
/* harmony export */ });
/* unused harmony export getFacebookHostName */
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72572);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6900);


/**
 * @see https://www.facebook.com/help/105399436216001#What-are-the-guidelines-around-creating-a-custom-username?
 * ! Start to use this in a breaking change!
 */ function isValidFacebookUsername(name) {
    if (!name) return null;
    // Avoid common mistake
    if (name === 'photo.php') return null;
    const n = name.toLowerCase().replace(/\./g, '');
    if (n.match(/^[\da-z]+$/)) {
        return n;
    }
    return null;
}
/**
 * Normalize post url
 */ function getPostUrlAtFacebook(post) {
    const id = post.identifier;
    const { postId  } = post;
    const { userId  } = id;
    const host = getFacebookHostName();
    if (!isValidFacebookUsername(userId)) return host;
    if (Number.parseFloat(userId)) return `${host}/permalink.php?story_fbid=${postId}&id=${userId}`;
    return `${host}/${userId}/posts/${postId}`;
}
/**
 * Normalize profile url
 */ function getProfilePageUrlAtFacebook(user) {
    if (user.network !== 'facebook.com') throw new Error('Wrong origin');
    const host = getFacebookHostName();
    const username = user.userId;
    if (!isValidFacebookUsername(username)) throw new TypeError(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('service_username_invalid'));
    if (Number.parseFloat(username)) return `${host}/profile.php?id=${username}`;
    return `${host}/${username}`;
}
function getFacebookHostName() {
    if (_isMobile__WEBPACK_IMPORTED_MODULE_0__/* .isMobileFacebook */ .q) return 'https://m.facebook.com';
    return 'https://www.facebook.com';
}


/***/ }),

/***/ 74695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40543);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97554);


const facebookWorker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .facebookWorkerBase */ .XO,
    ..._shared__WEBPACK_IMPORTED_MODULE_1__/* .facebookShared */ .T,
    tasks: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (facebookWorker);


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
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(40543);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/resolveFacebookLink.ts

function resolveFacebookLink(link, id) {
    return id === facebook_com_base/* FACEBOOK_ID */.Iz ? link.replace(/\?fbclid=[\S\s]*#/, '#') : link;
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
        return {
            ...author,
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
            decryptedPayloadForImage: new umd.ValueRef(null),
            iv: new umd.ValueRef(null),
            publicShared: (0,src/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>postPayload.value.map((val)=>val.version === -38 && val.sharedPublic
                    ).unwrapOr(undefined)
                ,
                subscribe: (sub)=>postPayload.addListener(sub)
            })
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