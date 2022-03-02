"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5719],{

/***/ 55350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ SearchResultBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89729);


const PluginRenderer = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createInjectHooksRenderer */ .EK)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */ .Pz.visibility.useNotMinimalMode, (x)=>x.SearchResultBox
);
function SearchResultBox(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginRenderer, {}));
}


/***/ }),

/***/ 49543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ twitterEncoding)
/* harmony export */ });
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37348);
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

/***/ 67307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ twitterShared)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43576);
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6062);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7282);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69825);
/* harmony import */ var _encoding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49543);
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32036);






const getPostURL = (post)=>{
    if (!(post.identifier instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO)) return null;
    return new URL(`https://twitter.com/${post.identifier.userId}/status/${post.postId}`);
};
const twitterShared = {
    ..._base__WEBPACK_IMPORTED_MODULE_3__/* .twitterBase */ .oQ,
    utils: {
        getHomePage: ()=>'https://twitter.com'
        ,
        getProfilePage: (userId)=>`https://twitter.com/${userId}`
        ,
        isValidUsername: _utils_user__WEBPACK_IMPORTED_MODULE_5__/* .usernameValidator */ .S_,
        publicKeyEncoding: {
            encoder (text) {
                return _encoding__WEBPACK_IMPORTED_MODULE_4__/* .twitterEncoding.publicKeyEncoder */ .n.publicKeyEncoder(text);
            },
            decoder (text) {
                return _encoding__WEBPACK_IMPORTED_MODULE_4__/* .twitterEncoding.publicKeyDecoder */ .n.publicKeyDecoder(text);
            }
        },
        textPayloadPostProcessor: {
            encoder (text) {
                return _encoding__WEBPACK_IMPORTED_MODULE_4__/* .twitterEncoding.payloadEncoder */ .n.payloadEncoder(text);
            },
            decoder (text) {
                return _encoding__WEBPACK_IMPORTED_MODULE_4__/* .twitterEncoding.payloadDecoder */ .n.payloadDecoder(text);
            }
        },
        getPostURL,
        getShareLinkURL (message) {
            return new URL(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`);
        },
        createPostContext: (0,_social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_1__/* .createSNSAdaptorSpecializedPostContext */ .k)({
            payloadParser: _utils__WEBPACK_IMPORTED_MODULE_2__/* .deconstructPayload */ .Qn,
            payloadDecoder: _encoding__WEBPACK_IMPORTED_MODULE_4__/* .twitterEncoding.payloadDecoder */ .n.payloadDecoder,
            getURLFromPostIdentifier: getPostURL
        })
    }
};


/***/ }),

/***/ 75719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(69825);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/collecting/getSearchedKeyword.ts


/**
 * Listing all possible pathnames start from /search that the search box will keep existing on twitter.
 * That means the keyword will not be cleaned and related components keep injecting.
 * Otherwise, if a pathname not in this list the keyword will be cleaned and remove relative components from DOM.
 */ const SAFE_PATHNAMES_ON_TWITTER = [
    '/compose/tweet',
    '/search-advanced',
    '/settings/trends',
    '/settings/search',
    '/i/display',
    '/account/switch',
    '/i/keyboard_shortcuts', 
];
function getSearchedKeywordAtTwitter() {
    if (!(0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM)) return '';
    const params = new URLSearchParams(location.search);
    const hashTagMatched = location.pathname.match(/\/hashtag\/([\dA-Za-z]+)/);
    var ref;
    const isTabAvailable = [
        'top'
    ].includes((ref = params.get('f')) !== null && ref !== void 0 ? ref : '');
    var ref1;
    if (location.pathname === '/search' && (!params.get('f') || isTabAvailable)) return decodeURIComponent((ref1 = params.get('q')) !== null && ref1 !== void 0 ? ref1 : '');
    else if (hashTagMatched) return '#' + hashTagMatched[1];
    else if (!SAFE_PATHNAMES_ON_TWITTER.includes(location.pathname)) return '';
    return '';
};

// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/shared.ts
var shared = __webpack_require__(67307);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitFriends.ts
var InitFriends = __webpack_require__(24504);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(64750);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(87478);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var typed_message_base = __webpack_require__(32475);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/openComposeBox.ts


function openComposeBoxTwitter(content, options) {
    messages/* MaskMessages.events.requestComposition.sendToLocal */.q.events.requestComposition.sendToLocal({
        reason: 'timeline',
        open: true,
        content: typeof content === 'string' ? (0,typed_message_base/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(4520);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/selector.ts
var selector = __webpack_require__(57852);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/postBox.ts
var postBox = __webpack_require__(18340);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(70409);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/isMobile.ts
var isMobile = __webpack_require__(30677);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/pasteTextToComposition.ts







/**
 * Wait for up to 5000 ms
 * If not complete, let user do it.
 */ const pasteTextToCompositionTwitter = (text, opt)=>{
    const interval = 500;
    const timeout = 5000;
    const worker = async function(abort) {
        const checkSignal = ()=>{
            if (abort.aborted) throw new Error('Aborted');
        };
        if (!(0,postBox/* isCompose */.iv)() && !(0,postBox/* hasEditor */.Wu)()) {
            // open tweet window
            await (0,dom/* untilElementAvailable */.f)((0,selector/* newPostButtonSelector */.nS)());
            (0,selector/* newPostButtonSelector */.nS)().evaluate().click();
            checkSignal();
        }
        // get focus
        const i = (0,selector/* postEditorDraftContentSelector */.Y5)();
        await (0,dom/* untilElementAvailable */.f)(i);
        checkSignal();
        while(!(0,postBox/* hasFocus */.uf)(i)){
            i.evaluate().focus();
            checkSignal();
            await (0,esm/* delay */.gw)(interval);
        }
        // paste
        isMobile/* isMobileTwitter */.b ? (0,sdk/* inputText */.iJ)(text) : (0,sdk/* pasteText */.M1)(text);
        await (0,esm/* delay */.gw)(interval);
        if (!(0,postBox/* getEditorContent */.kt)().replace(/\n/g, '').includes(text.replace(/\n/g, ''))) {
            fail(new Error('Unable to paste text automatically'));
        }
    };
    const fail = (e)=>{
        if (opt === null || opt === void 0 ? void 0 : opt.recover) messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
            text
        });
        throw e;
    };
    worker((0,esm/* abortSignalTimeout */.VJ)(timeout)).then(undefined, (error)=>fail(error)
    );
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/gotoNewsFeedPage.ts
function gotoNewsFeedPageTwitter() {
    if (location.pathname.includes('/home')) location.reload();
    else location.assign('/home');
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/gotoProfilePage.ts
function gotoProfilePageTwitter(profile) {
    var ref;
    const path = `/${profile.userId}`;
    (ref = document.querySelector(`[href="${path}"]`)) === null || ref === void 0 ? void 0 : ref.click();
    setTimeout(()=>{
        // The classic way
        if (!location.pathname.startsWith(path)) location.assign(path);
    }, 400);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var isNil = __webpack_require__(29330);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(43576);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/user.ts
var user = __webpack_require__(32036);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/collecting/identity.ts









function resolveLastRecognizedIdentityInner(ref, cancel) {
    const selfSelector = (0,selector/* selfInfoSelectors */.qB)().handle;
    const assign = ()=>{
        const handle = (0,selector/* selfInfoSelectors */.qB)().handle.evaluate();
        const nickname = (0,selector/* selfInfoSelectors */.qB)().name.evaluate();
        const avatar = (0,selector/* selfInfoSelectors */.qB)().userAvatar.evaluate();
        if (!(0,isNil/* default */.Z)(handle)) {
            ref.value = {
                identifier: new src/* ProfileIdentifier */.WO(base/* twitterBase.networkIdentifier */.oQ.networkIdentifier, handle),
                nickname,
                avatar
            };
        }
    };
    const watcher = new umd.MutationObserverWatcher(selfSelector).addListener('onAdd', ()=>assign()
    ).addListener('onChange', ()=>assign()
    ).startWatch({
        childList: true,
        subtree: true
    });
    cancel.addEventListener('abort', ()=>watcher.stopWatch()
    );
}
function resolveCurrentVisitingIdentityInner(ref, cancel) {
    const avatarSelector = (0,selector/* searchAvatarSelector */.Ls)();
    const avatarMetaSelector = (0,selector/* searchAvatarMetaSelector */.pz)();
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(500);
        const bio = (0,user/* getBioDescription */.Ek)();
        const homepage = (0,user/* getPersonalHomepage */.o1)();
        const nickname = (0,user/* getNickname */.y)();
        const handle = (0,user/* getTwitterId */.WM)();
        const avatar = (0,user/* getAvatar */.wX)();
        ref.value = {
            identifier: new src/* ProfileIdentifier */.WO(base/* twitterBase.networkIdentifier */.oQ.networkIdentifier, handle),
            nickname,
            avatar,
            bio
        };
        service/* default.Helper.resolveTCOLink */.ZP.Helper.resolveTCOLink(homepage).then((link)=>{
            if ((cancel === null || cancel === void 0 ? void 0 : cancel.aborted) || !link) return;
            ref.value = {
                ...ref.value,
                homepage: link
            };
        });
    };
    const createWatcher = (selector)=>{
        const watcher = new umd.MutationObserverWatcher(selector).addListener('onAdd', ()=>assign()
        ).addListener('onChange', ()=>assign()
        ).startWatch({
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                'src',
                'content'
            ]
        });
        window.addEventListener('locationchange', assign);
        cancel.addEventListener('abort', ()=>{
            window.removeEventListener('locationchange', assign);
            watcher.stopWatch();
        });
    };
    assign();
    createWatcher(avatarSelector);
    createWatcher(avatarMetaSelector);
}
const IdentityProviderTwitter = {
    hasDeprecatedPlaceholderName: false,
    recognized: social_network/* creator.EmptyIdentityResolveProviderState */.Du.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveLastRecognizedIdentityInner(this.recognized, cancel);
    }
};
const CurrentVisitingIdentityProviderTwitter = {
    hasDeprecatedPlaceholderName: false,
    recognized: social_network/* creator.EmptyIdentityResolveProviderState */.Du.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveCurrentVisitingIdentityInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(58245);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/defaultTo.js
var defaultTo = __webpack_require__(51670);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flattenDeep.js
var flattenDeep = __webpack_require__(65648);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/utils/url.ts
const twitterUrl = {
    hostIdentifier: 'twitter.com',
    hostLeadingUrl: 'https://twitter.com',
    hostLeadingUrlMobile: 'https://mobile.twitter.com'
};
const hostLeadingUrlAutoTwitter = (isMobile)=>isMobile ? twitterUrl.hostLeadingUrlMobile : twitterUrl.hostLeadingUrl
;
// more about twitter photo url formating: https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/entities-object#photo_format
const canonifyImgUrl = (url)=>{
    const parsed = new URL(url);
    if (parsed.hostname !== 'pbs.twimg.com') {
        return url;
    }
    const { searchParams  } = parsed;
    searchParams.set('name', 'orig');
    // we can't understand original image format when given url labeled as webp
    if (searchParams.get('format') === 'webp') {
        searchParams.set('format', 'png');
        const pngURL = parsed.href;
        searchParams.set('format', 'jpg');
        const jpgURL = parsed.href;
        return [
            pngURL,
            jpgURL
        ];
    }
    return parsed.href;
};

// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var src_utils = __webpack_require__(7282);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/utils/fetch.ts






/**
 * @example
 * parseNameArea("nickname@handle")
 */ const parseNameArea = (nameArea)=>{
    const atIndex = nameArea.lastIndexOf('@');
    const name = nameArea.slice(0, atIndex).replace(/\n+/g, '');
    const handle = nameArea.slice(atIndex + 1).replace(/\n+/g, '');
    return name && handle ? {
        name,
        handle
    } : {
        name: '',
        handle: ''
    };
};
const parseId = (t)=>{
    return (0,utils/* regexMatch */.ZB)(t, /status\/(\d+)/, 1);
};
const postIdParser = (node)=>{
    var ref, ref1;
    const idNode = (0,defaultTo/* default */.Z)((ref = node.children[1]) === null || ref === void 0 ? void 0 : ref.querySelector('a[href*="status"]'), (0,defaultTo/* default */.Z)(node.parentElement.querySelector('a[href*="status"]'), (ref1 = node.closest('article > div')) === null || ref1 === void 0 ? void 0 : ref1.querySelector('a[href*="status"]')));
    const isRetweet = !!node.querySelector('[data-testid=socialContext]');
    const pid = idNode ? parseId(idNode.href) : parseId(location.href);
    // You can't retweet a tweet or a retweet, but only cancel retweeting
    return isRetweet ? `retweet:${pid}` : pid;
};
const postNameParser = (node)=>{
    var ref;
    const tweetElement = (ref = node.querySelector('[data-testid="tweet"]')) !== null && ref !== void 0 ? ref : node;
    const nameElement = (0,src_utils/* collectNodeText */.aW)(tweetElement.querySelector('a[role] div[id]'));
    const nameElementInQuoted = (0,dom/* nthChild */.v)(tweetElement, 0, 0, 0, 0, 0);
    const nameInQuoteTweet = nameElementInQuoted ? (0,src_utils/* collectNodeText */.aW)(nameElementInQuoted) : '';
    var ref2;
    return (ref2 = [
        nameElement,
        nameInQuoteTweet
    ].filter((x)=>{
        return x === null || x === void 0 ? void 0 : x.includes('@');
    }).map(parseNameArea).find((r)=>r.name && r.handle
    )) !== null && ref2 !== void 0 ? ref2 : {
        name: '',
        handle: ''
    };
};
const postAvatarParser = (node)=>{
    var ref;
    const tweetElement = (ref = node.querySelector('[data-testid="tweet"]')) !== null && ref !== void 0 ? ref : node;
    const avatarElement = tweetElement.children[0].querySelector('img[src*="twimg.com"]');
    return avatarElement ? avatarElement.src : undefined;
};
const postContentMessageParser = (node1)=>{
    function resolve(content) {
        if (content.startsWith('@')) return 'user';
        if (content.startsWith('#')) return 'hash';
        if (content.startsWith('$')) return 'cash';
        return 'normal';
    }
    function make(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (!node.nodeValue) return (0,typed_message_base/* makeTypedMessageEmpty */.WM)();
            return (0,typed_message_base/* makeTypedMessageText */.P)(node.nodeValue);
        } else if (node instanceof HTMLAnchorElement) {
            const anchor = node;
            var ref;
            const href = (ref = anchor.getAttribute('title')) !== null && ref !== void 0 ? ref : anchor.getAttribute('href');
            const content = anchor.textContent;
            if (!content) return (0,typed_message_base/* makeTypedMessageEmpty */.WM)();
            return (0,typed_message_base/* makeTypedMessageAnchor */.Jv)(resolve(content), href !== null && href !== void 0 ? href : '', content);
        } else if (node instanceof HTMLImageElement) {
            const image = node;
            const src = image.getAttribute('src');
            const matched = src === null || src === void 0 ? void 0 : src.match(/emoji\/v2\/svg\/([\w\-]+)\.svg/);
            if (matched === null || matched === void 0 ? void 0 : matched[1]) {
                const codePoints = matched[1].split('-').map((x)=>Number.parseInt(`0x${x}`, 16)
                );
                return (0,typed_message_base/* makeTypedMessageText */.P)((0,src_utils/* collectTwitterEmoji */._r)(codePoints));
            }
            return (0,typed_message_base/* makeTypedMessageEmpty */.WM)();
        } else if (node.childNodes.length) {
            const flattened = (0,flattenDeep/* default */.Z)(Array.from(node.childNodes).map(make));
            // conjunct text messages under same node
            if (flattened.every(typed_message_base/* isTypedMessageText */.Rz)) return (0,typed_message_base/* makeTypedMessageText */.P)(flattened.map((x)=>x.content
            ).join(''));
            return flattened;
        } else return (0,typed_message_base/* makeTypedMessageEmpty */.WM)();
    }
    const lang = node1.parentElement.querySelector('[lang]');
    return lang ? Array.from(lang.childNodes).flatMap(make) : [];
};
const postImagesParser = async (node2)=>{
    const isQuotedTweet = !!node2.closest('div[role="link"]');
    const imgNodes = node2.querySelectorAll('img[src*="twimg.com/media"]');
    if (!imgNodes.length) return [];
    var ref;
    const imgUrls = Array.from(imgNodes).filter((node)=>isQuotedTweet || !node.closest('div[role="link"]')
    ).flatMap((node)=>canonifyImgUrl((ref = node.getAttribute('src')) !== null && ref !== void 0 ? ref : '')
    ).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
};
const postParser = (node)=>{
    return {
        ...postNameParser(node),
        avatar: postAvatarParser(node),
        // FIXME:
        // we get wrong pid for nested tweet
        pid: postIdParser(node),
        messages: postContentMessageParser(node).filter((x)=>!(0,typed_message_base/* isTypedMessageEmpty */.YN)(x)
        )
    };
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(77184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(51155);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(3993);
// EXTERNAL MODULE: ./shared/index.ts
var shared_0 = __webpack_require__(71986);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(41878);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/MaskIcon.tsx










function Icon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskIcon */.ec, {
        size: props.size,
        style: {
            verticalAlign: 'text-bottom',
            marginLeft: 6
        }
    }));
}
function _(main, size, signal) {
    // TODO: for unknown reason the MutationObserverWatcher doesn't work well
    // To reproduce, open a profile and switch to another profile.
    (0,utils_watcher/* startWatch */.f)(new umd.MutationObserverWatcher(main()).useForeach((ele, _, meta)=>{
        let remover = ()=>{};
        const remove = ()=>remover()
        ;
        const check = ()=>{
            ifUsingMask(new src/* ProfileIdentifier */.WO('twitter.com', (0,selector/* bioPageUserIDSelector */.QK)(main).evaluate() || '')).then(()=>{
                const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                    signal
                });
                root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                    size: size
                }));
                remover = root.destory;
            }, remove);
        };
        check();
        return {
            onNodeMutation: check,
            onTargetChanged: check,
            onRemove: remove
        };
    }), signal);
}
function injectMaskUserBadgeAtTwitter(signal) {
    // profile
    _(selector/* bioPageUserNickNameSelector */.uy, 24, signal);
    // floating bio
    _(selector/* floatingBioCardSelector */.YG, 20, signal);
}
function injectMaskIconToPostTwitter(post, signal) {
    const ls = new umd.LiveSelector([
        post.rootElement
    ]).map((x)=>{
        var ref, ref1, ref2;
        return (ref = x.current.parentElement) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.previousElementSibling) === null || ref2 === void 0 ? void 0 : ref2.querySelector('a[role="link"] > div > div:first-child');
    }).enableSingleMode();
    ifUsingMask(post.author.getCurrentValue()).then(add, remove);
    post.author.subscribe(()=>ifUsingMask(post.author.getCurrentValue()).then(add, remove)
    );
    let remover = ()=>{};
    function add() {
        if (signal === null || signal === void 0 ? void 0 : signal.aborted) return;
        const node = ls.evaluate();
        if (!node) return;
        const proxy = (0,umd.DOMProxy)({
            afterShadowRootInit: {
                mode: shared_0/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
            }
        });
        proxy.realCurrent = node;
        const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(proxy.afterShadow, {
            signal
        });
        root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
            size: 24
        }));
        remover = root.destory;
    }
    function remove() {
        remover();
    }
}
const ifUsingMask = (0,esm/* memoizePromise */.J3)((pid)=>service/* default.Identity.queryProfile */.ZP.Identity.queryProfile(pid).then((x)=>x.linkedPersona ? Promise.resolve() : Promise.reject()
    )
, (pid)=>pid.toText()
);

// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(6062);
// EXTERNAL MODULE: ./src/social-network-adaptor/utils.ts
var social_network_adaptor_utils = __webpack_require__(33410);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/collecting/post.ts














function getPostActionsNode(postNode) {
    var ref;
    if (!postNode) return null;
    return (ref = postNode.closest('[data-testid="tweet"]')) === null || ref === void 0 ? void 0 : ref.querySelector('[role="group"] > div:last-child');
}
const getParentTweetNode = (node)=>{
    return node.closest('[data-testid="tweet"]');
};
function isQuotedTweet(tweetNode) {
    return (tweetNode === null || tweetNode === void 0 ? void 0 : tweetNode.getAttribute('role')) === 'link';
}
function registerPostCollectorInner(postStore, cancel) {
    const getTweetNode = (node)=>{
        const root = node.closest([
            'article > div',
            'div[role="link"]'
        ].join());
        if (!root) return null;
        const isCardNode = node.matches('[data-testid="card.wrapper"]');
        const hasTextNode = !!root.querySelector([
            '[data-testid="tweet"] div[lang]',
            '[data-testid="tweet"] + div div[lang]'
        ].join());
        // if a text node already exists, it's not going to decrypt the card node
        if (isCardNode && hasTextNode) return null;
        return root;
    };
    const updateProfileInfo = (0,memoize/* default */.Z)((info)=>{
        var ref;
        const currentProfile = (0,social_network_adaptor_utils/* getCurrentIdentifier */.T)();
        const profileIdentifier = info.author.getCurrentValue();
        service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(profileIdentifier, {
            nickname: info.nickname.getCurrentValue(),
            avatarURL: (ref = info.avatarURL.getCurrentValue()) === null || ref === void 0 ? void 0 : ref.toString()
        });
        if (currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.linkedPersona) {
            service/* default.Identity.createNewRelation */.ZP.Identity.createNewRelation(profileIdentifier, currentProfile.linkedPersona.identifier);
        }
    }, (info)=>{
        var ref;
        return (ref = info.author.getCurrentValue()) === null || ref === void 0 ? void 0 : ref.toText();
    });
    const watcher = new umd.IntervalWatcher((0,selector/* postsContentSelector */.XD)()).useForeach((node, _, proxy)=>{
        const tweetNode = getTweetNode(node);
        if (!tweetNode) return;
        const refs = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        let actionsElementProxy = undefined;
        const actionsInjectPoint = getPostActionsNode(proxy.current);
        let unwatchPostNodeChange = noop/* default */.Z;
        if (actionsInjectPoint && !isQuotedTweet(tweetNode)) {
            actionsElementProxy = (0,umd.DOMProxy)({});
            actionsElementProxy.realCurrent = actionsInjectPoint;
            const handleChanged = (e)=>{
                actionsElementProxy.realCurrent = getPostActionsNode(e.new) || null;
            };
            proxy.on('currentChanged', handleChanged);
            unwatchPostNodeChange = ()=>{
                proxy.off('currentChanged', handleChanged);
            };
        }
        const info = shared/* twitterShared.utils.createPostContext */.p.utils.createPostContext({
            comments: undefined,
            rootElement: proxy,
            actionsElement: actionsElementProxy,
            suggestedInjectionPoint: tweetNode,
            ...refs.subscriptions
        });
        function run() {
            collectPostInfo(tweetNode, refs, cancel);
            collectLinks(tweetNode, refs, cancel);
        }
        run();
        cancel.addEventListener('abort', info.containingMaskPayload.subscribe(()=>{
            const payload = info.containingMaskPayload.getCurrentValue();
            if (payload.err && refs.postMetadataImages.size === 0) return;
            updateProfileInfo(info);
        }));
        injectMaskIconToPostTwitter(info, cancel);
        postStore.set(proxy, info);
        return {
            onTargetChanged: run,
            onRemove: ()=>{
                postStore.delete(proxy);
                unwatchPostNodeChange();
            },
            onNodeMutation: run
        };
    }).assignKeys((node)=>{
        const tweetNode = getTweetNode(node);
        const parentTweetNode = isQuotedTweet(tweetNode) ? getParentTweetNode(tweetNode) : null;
        if (!tweetNode) return node.innerText;
        const parentTweetId = parentTweetNode ? postIdParser(parentTweetNode) : '';
        const tweetId = postIdParser(tweetNode);
        return `${parentTweetId}/${tweetId}`;
    });
    watcher.startWatch(250);
    cancel.addEventListener('abort', ()=>watcher.stopWatch()
    );
}
const PostProviderTwitter = {
    posts: social_network/* creator.EmptyPostProviderState */.Du.EmptyPostProviderState(),
    start (cancel) {
        registerPostCollectorInner(this.posts, cancel);
    }
};
function collectPostInfo(tweetNode, info, cancel) {
    if (!tweetNode) return;
    if (cancel === null || cancel === void 0 ? void 0 : cancel.aborted) return;
    const { pid , messages , handle , name , avatar  } = postParser(tweetNode);
    if (!pid) return;
    const postBy = handle ? new src/* ProfileIdentifier */.WO(base/* twitterBase.networkIdentifier */.oQ.networkIdentifier, handle) : src/* ProfileIdentifier.unknown */.WO.unknown;
    info.postID.value = pid;
    if (!info.postBy.value.equals(postBy)) info.postBy.value = postBy;
    info.nickname.value = name;
    info.avatarURL.value = avatar || null;
    // decode steganographic image
    // don't add await on this
    const images = (0,dom/* untilElementAvailable */.f)((0,selector/* postsImageSelector */.rk)(tweetNode), 10000).then(()=>postImagesParser(tweetNode)
    ).then((urls)=>{
        for (const url of urls)info.postMetadataImages.add(url);
        if (urls.length) return (0,typed_message_base/* makeTypedMessageTupleFromList */.n_)(...urls.map((x)=>(0,typed_message_base/* makeTypedMessageImage */.as)(x)
        ));
        return (0,typed_message_base/* makeTypedMessageEmpty */.WM)();
    }).catch(()=>(0,typed_message_base/* makeTypedMessageEmpty */.WM)()
    );
    info.postMessage.value = (0,typed_message_base/* makeTypedMessageTuple */.Zw)([
        ...messages,
        (0,typed_message_base/* makeTypedMessagePromise */.Ng)(images)
    ]);
}
function collectLinks(tweetNode, info, cancel) {
    if (!tweetNode) return;
    if (cancel === null || cancel === void 0 ? void 0 : cancel.aborted) return;
    const links = [
        ...tweetNode.querySelectorAll('a')
    ].filter((x)=>x.rel
    );
    const seen = new Set([
        'https://help.twitter.com/using-twitter/how-to-tweet#source-labels'
    ]);
    for (const x1 of links){
        if (seen.has(x1.href)) continue;
        seen.add(x1.href);
        info.postMetadataMentionedLinks.set(x1, x1.href);
        service/* default.Helper.resolveTCOLink */.ZP.Helper.resolveTCOLink(x1.href).then((val)=>{
            if (cancel === null || cancel === void 0 ? void 0 : cancel.aborted) return;
            if (!val) return;
            info.postMetadataMentionedLinks.set(x1, val);
        });
    }
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(97978);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(1235);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/customization/twitter-color-schema.json
var twitter_color_schema = __webpack_require__(88674);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/customization/custom.ts












const themeColorRef = new umd.ValueRef('rgb(29, 161, 242)');
const textColorRef = new umd.ValueRef('rgb(255, 255, 255)');
const backgroundColorRef = new umd.ValueRef('rgb(255, 255, 255)');
const currentTheme = new umd.ValueRef('light');
const PaletteModeProviderTwitter = {
    current: (0,src/* SubscriptionFromValueRef */.Jf)(currentTheme),
    start: startWatchThemeColor
};
function startWatchThemeColor(signal) {
    function updateThemeColor() {
        const composeAnchor = (0,selector/* composeAnchorSelector */.QG)().evaluate();
        const anchorText = (0,selector/* composeAnchorTextSelector */.xH)().evaluate();
        const headingText = (0,selector/* headingTextSelector */.ag)().evaluate();
        const themeColor = (0,theme_tools/* getBackgroundColor */.dF)(composeAnchor);
        const textColor = (0,theme_tools/* getForegroundColor */.aF)(anchorText || headingText);
        const backgroundColor = (0,theme_tools/* getBackgroundColor */.dF)(document.body);
        currentTheme.value = (0,theme_tools/* isDark */._T)((0,theme_tools/* fromRGB */.f2)(backgroundColor)) ? 'dark' : 'light';
        if (themeColor) themeColorRef.value = themeColor;
        if (textColor) textColorRef.value = textColor;
        if (backgroundColor) backgroundColorRef.value = backgroundColor;
    }
    const watcher = new umd.MutationObserverWatcher((0,selector/* composeAnchorSelector */.QG)()).addListener('onAdd', updateThemeColor).addListener('onChange', updateThemeColor).startWatch({
        childList: true,
        subtree: true
    });
    const unwatchAnchor = ()=>watcher.stopWatch()
    ;
    let unwatchHeadingText = noop/* default */.Z;
    if (isMobile/* isMobileTwitter */.b) {
        const headingWatcher = new umd.MutationObserverWatcher((0,selector/* headingTextSelector */.ag)()).addListener('onAdd', updateThemeColor).addListener('onChange', updateThemeColor).startWatch({
            childList: true,
            subtree: true
        });
        unwatchHeadingText = ()=>headingWatcher.stopWatch()
        ;
    }
    signal.addEventListener('abort', ()=>{
        unwatchAnchor();
        unwatchHeadingText();
    });
}
function useThemeTwitterVariant(baseTheme) {
    const primaryColor = (0,shared_src/* useValueRef */.E)(themeColorRef);
    const primaryContrastColor = (0,shared_src/* useValueRef */.E)(textColorRef);
    const backgroundColor = (0,shared_src/* useValueRef */.E)(backgroundColorRef);
    return (0,react.useMemo)(()=>{
        const primaryColorRGB = (0,theme_tools/* fromRGB */.f2)(primaryColor);
        const primaryContrastColorRGB = (0,theme_tools/* fromRGB */.f2)(primaryContrastColor);
        (0,immer_esm/* setAutoFreeze */.Fl)(false);
        const TwitterTheme = (0,immer_esm/* default */.ZP)(baseTheme, (theme)=>{
            theme.palette.background.paper = backgroundColor;
            const isDark1 = theme.palette.mode === 'dark';
            const isDarker = backgroundColor === 'rgb(0,0,0)';
            theme.palette.primary = {
                light: (0,theme_tools/* toRGB */.xr)((0,theme_tools/* shade */.wj)(primaryColorRGB, 10)),
                main: (0,theme_tools/* toRGB */.xr)(primaryColorRGB),
                dark: (0,theme_tools/* toRGB */.xr)((0,theme_tools/* shade */.wj)(primaryColorRGB, -10)),
                contrastText: (0,theme_tools/* toRGB */.xr)(primaryContrastColorRGB)
            };
            const themeName = isDark1 ? isDarker ? 'darker' : 'dark' : 'light';
            // Just for design
            if (themeName === 'dark') {
                theme.palette.background.paper = '#151D26';
            }
            const colorSchema = twitter_color_schema[themeName];
            const colors = Object.keys(colorSchema);
            colors.forEach((color)=>{
                if (typeof theme.palette[color] === 'object') {
                    Object.assign(theme.palette[color], colorSchema[color]);
                }
            });
            theme.palette.divider = colorSchema.divider;
            theme.palette.secondaryDivider = colorSchema.secondaryDivider;
            theme.shape.borderRadius = isMobile/* isMobileTwitter */.b ? 0 : 15;
            theme.breakpoints.values = {
                xs: 0,
                sm: 687,
                md: 1024,
                lg: 1280,
                xl: 1920
            };
            theme.components = theme.components || {};
            const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
            theme.components.MuiButton = {
                defaultProps: {
                    size: 'medium',
                    disableElevation: true,
                    variant: 'contained'
                },
                variants: [
                    {
                        props: {
                            variant: 'sns'
                        },
                        style: {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.common.white,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                                color: theme.palette.common.white
                            },
                            '&.Mui-disabled': {
                                opacity: 0.5,
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.common.white
                            }
                        }
                    },
                    {
                        props: {
                            color: 'error'
                        },
                        style: {
                            backgroundColor: theme.palette.error.main,
                            color: theme.palette.common.white,
                            '&:hover': {
                                backgroundColor: '#f53b47'
                            }
                        }
                    }, 
                ],
                styleOverrides: {
                    root: {
                        borderRadius: 500,
                        textTransform: 'initial',
                        fontWeight: 600,
                        minHeight: 39,
                        paddingLeft: 15,
                        paddingRight: 15,
                        boxShadow: 'none',
                        [smallQuery]: {
                            '&': {
                                height: 30,
                                minHeight: 'auto !important',
                                padding: '0 14px !important'
                            }
                        }
                    },
                    contained: {
                        backgroundColor: theme.palette.text.primary,
                        color: theme.palette.text.buttonText,
                        '&.Mui-disabled': {
                            opacity: 0.5,
                            backgroundColor: theme.palette.text.primary,
                            color: theme.palette.text.buttonText
                        },
                        '&:hover': {
                            backgroundColor: theme.palette.action.buttonHover
                        },
                        [smallQuery]: {
                            '&': {
                                height: 30,
                                minHeight: 'auto !important',
                                padding: '0 14px !important'
                            }
                        }
                    },
                    containedSecondary: {
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.strong,
                        '&:hover': {
                            color: theme.palette.action.buttonHover,
                            backgroundColor: theme.palette.action.bgHover
                        },
                        '&.Mui-disabled': {
                            opacity: 0.5,
                            backgroundColor: theme.palette.background.default,
                            color: theme.palette.text.strong
                        }
                    },
                    outlined: {
                        color: theme.palette.text.strong,
                        borderColor: theme.palette.secondaryDivider,
                        backgroundColor: 'transparent',
                        '&:hover': {
                            color: theme.palette.action.buttonHover,
                            borderColor: theme.palette.secondaryDivider,
                            backgroundColor: (0,theme_src/* parseColor */.lu)(theme.palette.text.primary).setAlpha(0.1).toRgbString()
                        },
                        '&.Mui-disabled': {
                            opacity: 0.5,
                            color: theme.palette.text.strong,
                            backgroundColor: 'transparent'
                        }
                    },
                    sizeLarge: {
                        minHeight: 40,
                        paddingLeft: 30,
                        paddingRight: 30,
                        [smallQuery]: {
                            '&': {
                                height: 28,
                                minHeight: 28,
                                paddingLeft: 15,
                                paddingRight: 15
                            }
                        }
                    },
                    sizeSmall: {
                        minHeight: 30,
                        paddingLeft: 15,
                        paddingRight: 15,
                        [smallQuery]: {
                            '&': {
                                height: 25,
                                minHeight: 29,
                                paddingLeft: 10,
                                paddingRight: 10
                            }
                        }
                    }
                }
            };
            theme.components.MuiPaper = {
                defaultProps: {
                    elevation: 0
                }
            };
            theme.components.MuiTab = {
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    }
                }
            };
            theme.components.MuiChip = {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.strong
                    },
                    colorPrimary: {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        '&:hover': {
                            backgroundColor: (0,theme_src/* parseColor */.lu)(theme.palette.text.primary).setAlpha(0.1).toRgbString()
                        }
                    }
                }
            };
            theme.components.MuiBackdrop = {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.action.mask
                    }
                }
            };
            theme.components.MuiTooltip = {
                styleOverrides: {
                    tooltip: {
                        backgroundColor: theme.palette.background.tipMask,
                        color: theme.palette.text.buttonText,
                        borderRadius: 8
                    },
                    tooltipArrow: {
                        backgroundColor: theme.palette.background.tipMask
                    },
                    arrow: {
                        color: theme.palette.background.tipMask
                    }
                }
            };
            theme.components.MuiSnackbar = {
                styleOverrides: {
                    root: {
                        filter: `drop-shadow(0px 0px 16px ${theme.palette.background.messageShadow});`
                    }
                }
            };
        });
        (0,immer_esm/* setAutoFreeze */.Fl)(true);
        return (0,createMuiStrictModeTheme/* default */.Z)(TwitterTheme);
    }, [
        baseTheme,
        backgroundColor,
        primaryColor,
        primaryContrastColor
    ]);
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/ToolboxUnstyled.tsx + 1 modules
var ToolboxUnstyled = __webpack_require__(63685);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(84879);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(52867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(90056);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(11178);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ./src/components/GuideStep/index.tsx
var GuideStep = __webpack_require__(81048);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/ToolboxHint_UI.tsx


// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated



const twitterBreakPoint = 1265;
const Container = (0,styled/* default */.ZP)('div')`
    cursor: pointer;
    padding: 4px 0;
`;
const ListItem = (0,styled/* default */.ZP)(ListItemButton/* default */.Z)`
    border-radius: 9999px;
    padding: 6px 14px;
    display: inline-flex;
    &:hover {
        background: rgba(15, 20, 25, 0.1);
        ${({ theme  })=>theme.palette.mode === 'dark' ? 'background: rgba(217, 217, 217, 0.1);' : ''
}
    }
    /* twitter break point */
    @media screen and (max-width: ${twitterBreakPoint}px) {
        height: 50px;
    }
`;
const Text = (0,styled/* default */.ZP)(Typography/* default */.Z)`
    margin-left: 20px;
    margin-right: 16px;
    font-size: 15px;
    font-family: inherit;
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme  })=>theme.palette.mode === 'light' ? 'rgb(15, 20, 25)' : 'rgb(216, 216, 216)'
};
`;
const ToolboxHint_UI_Icon = (0,styled/* default */.ZP)(ListItemIcon/* default */.Z)`
    color: ${({ theme  })=>theme.palette.mode === 'light' ? 'rgb(15, 20, 25)' : 'rgb(216, 216, 216)'
};
    min-width: 0;
`;
function ToolboxHintAtTwitter() {
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const mini = (0,useMediaQuery/* default */.Z)(`(max-width: ${twitterBreakPoint}px)`);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxUnstyled/* ToolboxHintUnstyled */.z, {
        mini: mini,
        ListItemIcon: ToolboxHint_UI_Icon,
        Typography: Text,
        ListItemButton: ListItem,
        Container: Container
    }));
}
function ProfileLinkAtTwitter() {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(GuideStep/* default */.Z, {
        step: 2,
        total: 3,
        tip: t('user_guide_tip_2'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            sx: {
                position: 'absolute',
                left: 0,
                right: 0,
                width: '100%',
                height: '100%'
            }
        })
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/ToolboxHint.tsx






function injectToolboxHintAtTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* toolBoxInSideBarSelector */.ch)());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHintAtTwitter, {}));
    injectProfile(signal);
}
function injectProfile(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* sideBarProfileSelector */.WU)());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileLinkAtTwitter, {}));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/en-US.json
const en_US_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"This tweet is encrypted with #mask_io (@realMaskNetwork). 📪🔑\\n\\nInstall {{encrypted}} to decrypt it."}');
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/ja-JP.json
const ja_JP_namespaceObject = {};
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/ko-KR.json
const ko_KR_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"이 트윗은 #mask_io (@realMaskNetwork) 로 암호화되었습니다. 📪🔑\\n\\n{{encrypted}} 설치하고 해독하세요."}');
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/qya-AA.json
const qya_AA_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"crwdns5581:0{{encrypted}}crwdne5581:0"}');
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/zh-CN.json
const zh_CN_namespaceObject = {};
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/zh-TW.json
const zh_TW_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"此推文已被 Mask（@realMaskNetwork）加密。📪🔑\\n\\n請安裝 {{encrypted}} 進行解密。"}');
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/languages.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts







const languages = {
    en: en_US_namespaceObject,
    ja: ja_JP_namespaceObject,
    ko: ko_KR_namespaceObject,
    qy: qya_AA_namespaceObject,
    'zh-CN': zh_CN_namespaceObject,
    zh: zh_TW_namespaceObject
};
const addDO_NOT_USEI18N = (0,src/* createI18NBundle */.C9)('DO_NOT_USE', languages);
// @ts-ignore
if (false) {}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/customization/i18n.ts

var _mask;
const i18NOverwriteTwitter = {
    mask: {}
};
const resource = languages;
for(const lng in resource){
    for(const key in resource[lng]){
        var _key;
        (_key = (_mask = i18NOverwriteTwitter.mask)[key]) !== null && _key !== void 0 ? _key : _mask[key] = {};
        i18NOverwriteTwitter.mask[key][lng] = resource[lng][key];
    }
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/SearchResultBox.tsx
var SearchResultBox = __webpack_require__(55350);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/SearchResultBox.tsx






function injectSearchResultBoxAtTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchResultHeadingSelector */.R9)());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultBox/* SearchResultBox */.L, {}));
}

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/ProfileSlider.tsx


const PluginRenderer = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor.visibility.useAnyMode */.Pz.visibility.useAnyMode, (x)=>{
    return ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "Profile Slider"
        }));
    };
});
function ProfileSlider(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRenderer, {}));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/ProfileSlider.tsx






function injectProfileSliderAtTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchResultHeadingSelector */.R9)());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileSlider, {}));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/color@4.2.1/node_modules/color/index.js
var color = __webpack_require__(49557);
var color_default = /*#__PURE__*/__webpack_require__.n(color);
// EXTERNAL MODULE: ./src/components/InjectedComponents/ProfileTab.tsx
var ProfileTab = __webpack_require__(92724);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/ProfileTab.tsx







function getStyleProps() {
    var ref;
    const EMPTY_STYLE = {};
    const eleTab = (ref = (0,selector/* searchProfileTabSelector */.Fe)().evaluate()) === null || ref === void 0 ? void 0 : ref.querySelector('div');
    const style = eleTab ? window.getComputedStyle(eleTab) : EMPTY_STYLE;
    const eleNewTweetButton = (0,selector/* searchNewTweetButtonSelector */.r$)().evaluate();
    const newTweetButtonColorStyle = eleNewTweetButton ? window.getComputedStyle(eleNewTweetButton) : EMPTY_STYLE;
    const eleBackButton = (0,selector/* searchAppBarBackSelector */.Hk)().evaluate();
    const backButtonColorStyle = eleBackButton ? window.getComputedStyle(eleBackButton) : EMPTY_STYLE;
    return {
        color: style.color,
        font: style.font,
        fontSize: style.fontSize,
        padding: style.paddingBottom,
        height: style.height,
        hover: backButtonColorStyle.color,
        line: newTweetButtonColorStyle.backgroundColor
    };
}
const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const props = getStyleProps();
    return {
        root: {
            '&:hover': {
                backgroundColor: new (color_default())(props.hover).alpha(0.1).toString(),
                cursor: 'pointer'
            },
            height: props.height
        },
        button: {
            zIndex: 1,
            position: 'relative',
            display: 'flex',
            minWidth: 56,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: theme.spacing(0, props.padding),
            color: props.color,
            font: props.font,
            fontSize: props.fontSize,
            fontWeight: 500,
            '&:hover': {
                color: props.color
            },
            height: props.height
        },
        selected: {
            color: `${props.hover} !important`,
            fontWeight: 700
        },
        line: {
            borderRadius: 9999,
            position: 'absolute',
            bottom: 0,
            minWidth: 56,
            alignSelf: 'center',
            height: 4,
            backgroundColor: props.line
        }
    };
});
async function clear() {
    var ref;
    const eleTab = (ref = (0,selector/* searchProfileTabSelector */.Fe)().evaluate()) === null || ref === void 0 ? void 0 : ref.querySelector('div');
    if (!eleTab) return;
    const style = window.getComputedStyle(eleTab);
    // hide the activated indicator
    const tabList = (0,selector/* searchProfileTabListSelector */.JN)().evaluate();
    tabList.map((v)=>{
        const _v = v.querySelector('div');
        _v.style.color = style.color;
        const line = v.querySelector('div > div');
        line.style.display = 'none';
    });
    // hide the empty list indicator on the page
    const eleEmpty = (0,selector/* searchProfileEmptySelector */.YX)().evaluate();
    if (eleEmpty) eleEmpty.style.display = 'none';
    // hide the content page
    await (0,src_utils/* untilElementAvailable */.ft)((0,selector/* searchProfileTabPageSelector */.xx)());
    const elePage = (0,selector/* searchProfileTabPageSelector */.xx)().evaluate();
    if (elePage) elePage.style.visibility = 'hidden';
}
function ProfileTab_reset() {
    var ref;
    const eleTab = (ref = (0,selector/* searchProfileTabSelector */.Fe)().evaluate()) === null || ref === void 0 ? void 0 : ref.querySelector('div');
    if (!eleTab) return;
    const eleEmpty = (0,selector/* searchProfileEmptySelector */.YX)().evaluate();
    if (eleEmpty) eleEmpty.style.display = '';
    const elePage = (0,selector/* searchProfileTabPageSelector */.xx)().evaluate();
    if (elePage) elePage.style.visibility = 'visible';
    const tabList = (0,selector/* searchProfileTabListSelector */.JN)().evaluate();
    tabList.map((v)=>{
        const _v = v.querySelector('div');
        _v.style.color = '';
        const line = v.querySelector('div > div');
        line.style.display = '';
    });
}
function ProfileTabAtTwitter() {
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTab/* ProfileTab */.D, {
        title: "Web3",
        classes: classes,
        reset: ProfileTab_reset,
        clear: clear,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.line
        })
    }));
}
function injectProfileTabAtTwitter(signal) {
    let tabInjected = false;
    const contentWatcher = new umd.MutationObserverWatcher((0,selector/* searchProfileTabPageSelector */.xx)()).useForeach(()=>{
        const elePage = (0,selector/* searchProfileTabPageSelector */.xx)().evaluate();
        if (elePage && !tabInjected) {
            const watcher = new umd.MutationObserverWatcher((0,selector/* searchProfileTabListLastChildSelector */.L2)());
            (0,src_utils/* startWatch */.fy)(watcher, signal);
            (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
                signal
            }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabAtTwitter, {}));
            tabInjected = true;
        }
    });
    (0,src_utils/* startWatch */.fy)(contentWatcher, signal);
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/ProfileTabContent.tsx + 3 modules
var ProfileTabContent = __webpack_require__(40383);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/ProfileTabContent.tsx






function injectProfileTabContentForEmptyState(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchProfileEmptySelector */.YX)());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContentAtTwitter, {}));
}
function injectProfileTabContentState(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchProfileTabPageSelector */.xx)());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContentAtTwitter, {}));
}
function injectProfileTabContentAtTwitter(signal) {
    injectProfileTabContentForEmptyState(signal);
    injectProfileTabContentState(signal);
}
function ProfileTabContent_getStyleProps() {
    const newTweetButton = (0,selector/* searchNewTweetButtonSelector */.r$)().evaluate();
    return {
        backgroundColor: newTweetButton ? window.getComputedStyle(newTweetButton).backgroundColor : undefined,
        fontFamily: (newTweetButton === null || newTweetButton === void 0 ? void 0 : newTweetButton.firstChild) ? window.getComputedStyle(newTweetButton.firstChild).fontFamily : undefined
    };
}
const ProfileTabContent_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const props = ProfileTabContent_getStyleProps();
    return {
        root: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1
        },
        text: {
            paddingTop: 29,
            paddingBottom: 29,
            '& > p': {
                fontSize: 28,
                fontFamily: props.fontFamily,
                fontWeight: 700,
                color: (0,theme_src/* getMaskColor */.nb)(theme).textPrimary
            }
        },
        button: {
            backgroundColor: props.backgroundColor,
            color: 'white',
            marginTop: 18,
            '&:hover': {
                backgroundColor: props.backgroundColor
            }
        }
    };
});
function ProfileTabContentAtTwitter() {
    const { classes  } = ProfileTabContent_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContent/* ProfileTabContent */.d, {
        classes: classes
    }));
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx + 1 modules
var PostReplacer = __webpack_require__(39811);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostReplacer.tsx

function resolveLangNode(node) {
    var ref;
    var ref1;
    return node.hasAttribute('lang') ? node : (ref1 = node.querySelector('[lang]')) !== null && ref1 !== void 0 ? ref1 : (ref = node.parentElement) === null || ref === void 0 ? void 0 : ref.querySelector('[lang]');
}
function injectPostReplacerAtTwitter(signal, current) {
    return (0,PostReplacer/* injectPostReplacer */.C)({
        zipPost (node) {
            const langNode = resolveLangNode(node.current);
            if (langNode) langNode.style.display = 'none';
        },
        unzipPost (node) {
            if (!node.current) return;
            const langNode = resolveLangNode(node.current);
            if (langNode) langNode.style.display = 'unset';
        }
    })(current, signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PageInspector.tsx + 3 modules
var PageInspector = __webpack_require__(43439);
// EXTERNAL MODULE: ./src/components/shared/NotSetupYetPrompt.tsx + 1 modules
var NotSetupYetPrompt = __webpack_require__(68708);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/SetupPrompt.tsx







function injectSetupPromptAtTwitter(signal) {
    const emptyNode = document.createElement('div');
    injectSetupPrompt((0,selector/* postEditorInTimelineSelector */.Ps)(), signal);
    injectSetupPrompt((0,selector/* postEditorInPopupSelector */.Rd)().map((x)=>(0,postBox/* isCompose */.iv)() && (0,postBox/* hasEditor */.Wu)() ? x : emptyNode
    ), signal);
}
function injectSetupPrompt(ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NotSetupYetPrompt/* NotSetupYetPrompt */.N, {}));
}

// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 15 modules
var Composition = __webpack_require__(27120);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostDialog.tsx






function renderPostDialogTo(reason, ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
        type: reason
    }));
}
function injectPostDialogAtTwitter(signal) {
    renderPostDialogTo('popup', (0,selector/* postEditorContentInPopupSelector */.$_)(), signal);
    renderPostDialogTo('timeline', (0,selector/* rootSelector */.Du)(), signal);
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(55900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.4.2_03eb9a7115720fddaa34be5f9d89cc8e/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(57492);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(3087);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostDialogHint.tsx















const PostDialogHint_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        iconButton: {
            '&:hover': {
                background: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, 0.1)
            }
        },
        tooltip: {
            marginTop: '2px !important',
            borderRadius: 2,
            padding: 4,
            background: theme_src/* MaskColorVar.twitterTooltipBg */.ZN.twitterTooltipBg
        }
    })
);
function injectPostDialogHintAtTwitter(signal) {
    const emptyNode = document.createElement('div');
    renderPostDialogHintTo('timeline', (0,selector/* postEditorInTimelineSelector */.Ps)(), signal);
    renderPostDialogHintTo('popup', (0,selector/* postEditorInPopupSelector */.Rd)().map((x)=>(0,postBox/* isCompose */.iv)() && (0,postBox/* hasEditor */.Wu)() ? x : emptyNode
    ), signal);
}
function renderPostDialogHintTo(reason, ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHintAtTwitter, {
        reason: reason
    }));
}
function PostDialogHintAtTwitter({ reason  }) {
    const { classes  } = PostDialogHint_useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const onHintButtonClicked = (0,react.useCallback)(()=>{
        const content = settings/* sayHelloShowed */.Pg[base/* twitterBase.networkIdentifier */.oQ.networkIdentifier].value ? undefined : (0,typed_message_base/* makeTypedMessageText */.P)(t('setup_guide_say_hello_content') + t('setup_guide_say_hello_follow', {
            account: '@realMaskNetwork'
        }));
        messages/* MaskMessages.events.requestComposition.sendToLocal */.q.events.requestComposition.sendToLocal({
            reason,
            open: true,
            content
        });
        settings/* sayHelloShowed */.Pg[base/* twitterBase.networkIdentifier */.oQ.networkIdentifier].value = true;
    }, [
        reason
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
        classes: {
            iconButton: classes.iconButton,
            tooltip: classes.tooltip
        },
        size: 17,
        onHintButtonClicked: onHintButtonClicked,
        tooltip: {
            disabled: false
        }
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/inject.tsx


function injectPostBoxComposed(signal) {
    injectPostDialogAtTwitter(signal);
    injectPostDialogHintAtTwitter(signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx + 7 modules
var StartSetupGuide = __webpack_require__(91630);
// EXTERNAL MODULE: ./src/social-network/defaults/automation/AttachImageToComposition.ts
var AttachImageToComposition = __webpack_require__(14218);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostInspector.tsx + 16 modules
var PostInspector = __webpack_require__(1615);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/encoding.ts
var encoding = __webpack_require__(49543);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostInspector.tsx


function injectPostInspectorAtTwitter(signal, current) {
    return (0,PostInspector/* injectPostInspectorDefault */.J)({
        zipPost (node) {
            var ref, ref1;
            const contentContainer = node.current.parentElement;
            if (!contentContainer) return;
            const content = contentContainer.querySelector('[lang]');
            if (!content) return;
            for (const a of content.querySelectorAll('a')){
                if (encoding/* twitterEncoding.payloadDecoder */.n.payloadDecoder(a.title).length) hideDOM(a);
                if (/^https?:\/\/mask(\.io|book\.com)$/i.test(a.title)) hideDOM(a);
            }
            for (const span of content.querySelectorAll('span')){
                // match (.) (\n) (—§—) (any space) (/*)
                // Note: In Chinese we can't hide dom because "解密这条推文。\n—§—" is in the same DOM
                // hide it will break the sentence.
                if (span.innerText.match(/^\.\n\u2014\u00A7\u2014 +\/\* $/)) hideDOM(span);
                // match (any space) (*/) (any space)
                if (span.innerText.match(/^ +\*\/ ?$/)) hideDOM(span);
            }
            const parent = (ref = content.parentElement) === null || ref === void 0 ? void 0 : ref.nextElementSibling;
            if (parent && matches(parent.innerText)) {
                parent.style.height = '0';
                parent.style.overflow = 'hidden';
            }
            const cardWrapper = (ref1 = contentContainer.parentElement) === null || ref1 === void 0 ? void 0 : ref1.querySelector('[data-testid="card.wrapper"]');
            if (cardWrapper) {
                cardWrapper.style.display = 'none';
                cardWrapper.setAttribute('aria-hidden', 'true');
            }
        }
    })(current, signal);
}
function matches(input) {
    input = input.toLowerCase();
    return input.includes('maskbook.com') && input.includes('make privacy protected again');
}
function hideDOM(a) {
    a.style.width = '0';
    a.style.height = '0';
    a.style.overflow = 'hidden';
    a.style.display = 'inline-block';
}

// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(9853);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostActions.tsx


const ActionsRenderer = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */.Pz.visibility.useNotMinimalMode, (plugin)=>plugin.PostActions
);
function PostActions() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionsRenderer, {}));
}

;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostActions.tsx





function createPostActionsInjector() {
    return function injectPostActions(current, signal) {
        const jsx = /*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostActions, {})
        });
        if (current.actionsElement) {
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(current.actionsElement.afterShadow, {
                key: 'post-actions',
                signal
            });
            root.render(jsx);
            return root.destory;
        }
        return noop/* default */.Z;
    };
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostActions/index.tsx


function injectPostActionsAtTwitter(signal, current) {
    if (!shared_0/* Flags.post_actions_enabled */.vU.post_actions_enabled) return;
    const injector = createPostActionsInjector();
    return injector(current, signal);
}

// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(17047);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(7334);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(29528);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/index.ts + 2 modules
var hooks = __webpack_require__(79191);
// EXTERNAL MODULE: ./src/plugins/Avatar/messages.ts
var Avatar_messages = __webpack_require__(7341);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadge.tsx + 1 modules
var NFTBadge = __webpack_require__(93545);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatar.tsx + 2 modules
var NFTAvatar = __webpack_require__(24369);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(30865);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(44719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(19669);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/RainbowBox.tsx
var RainbowBox = __webpack_require__(76737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/trim.js
var trim = __webpack_require__(99589);
// EXTERNAL MODULE: ./src/plugins/Avatar/constants.ts
var constants = __webpack_require__(60581);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/NFTAvatarInTwitter.tsx

















function injectNFTAvatarInTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchTwitterAvatarSelector */.p$)());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInTwitter, {}));
}
const NFTAvatarInTwitter_useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        root: {
            transform: 'scale(1.022)',
            position: 'absolute',
            textAlign: 'center',
            color: 'white',
            zIndex: 2,
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        text: {
            fontSize: '20px !important',
            fontWeight: 700
        },
        icon: {
            width: '19px !important',
            height: '19px !important'
        }
    })
);
function NFTAvatarInTwitter() {
    const rainBowElement = (0,react.useRef)();
    const borderElement = (0,react.useRef)();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const { value: _avatar4  } = (0,hooks/* useNFTAvatar */.i)(identity.identifier.userId, constants/* RSS3_KEY_SNS.TWITTER */.vu.TWITTER);
    const [avatar1, setAvatar] = (0,react.useState)();
    const windowSize = (0,useWindowSize/* default */.Z)();
    const location = (0,useLocation/* default */.Z)();
    var _avatar1;
    const showAvatar = (0,react.useMemo)(()=>{
        return (0,user/* getAvatarId */.yd)((_avatar1 = identity.avatar) !== null && _avatar1 !== void 0 ? _avatar1 : '') === (avatar1 === null || avatar1 === void 0 ? void 0 : avatar1.avatarId) && avatar1.avatarId;
    }, [
        avatar1 === null || avatar1 === void 0 ? void 0 : avatar1.avatarId,
        identity.avatar
    ]);
    const size = (0,react.useMemo)(()=>{
        var ref;
        const ele = (ref = (0,selector/* searchTwitterAvatarSelector */.p$)().evaluate()) === null || ref === void 0 ? void 0 : ref.querySelector('img');
        if (ele) {
            const style = window.getComputedStyle(ele);
            var ref1;
            return Number.parseInt((ref1 = style.width.replace('px', '')) !== null && ref1 !== void 0 ? ref1 : 0, 10);
        }
        return 0;
    }, [
        windowSize,
        location
    ]);
    const { classes  } = NFTAvatarInTwitter_useStyles();
    const [NFTEvent, setNFTEvent] = (0,react.useState)();
    const onUpdate = (data)=>{
        setNFTEvent(data);
    };
    // After the avatar is set, it cannot be saved immediately, and must wait until the avatar of twitter is updated
    (0,useAsync/* default */.Z)(async ()=>{
        if (!wallet || !NFTAvatar/* NFTAvatar */.R) return;
        if (!(NFTEvent === null || NFTEvent === void 0 ? void 0 : NFTEvent.address) || !(NFTEvent === null || NFTEvent === void 0 ? void 0 : NFTEvent.tokenId)) {
            setAvatar(undefined);
            var _avatar;
            src_utils/* MaskMessages.events.NFTAvatarTimelineUpdated.sendToAll */.ql.events.NFTAvatarTimelineUpdated.sendToAll({
                userId: identity.identifier.userId,
                avatarId: (0,user/* getAvatarId */.yd)((_avatar = identity.avatar) !== null && _avatar !== void 0 ? _avatar : ''),
                address: '',
                tokenId: ''
            });
            return;
        }
        var _avatar2;
        const avatar = await Avatar_messages/* PluginNFTAvatarRPC.saveNFTAvatar */.B.saveNFTAvatar(wallet.address, {
            ...NFTEvent,
            avatarId: (0,user/* getAvatarId */.yd)((_avatar2 = identity.avatar) !== null && _avatar2 !== void 0 ? _avatar2 : '')
        }, identity.identifier.network, constants/* RSS3_KEY_SNS.TWITTER */.vu.TWITTER).catch((error)=>{
            setNFTEvent(undefined);
            setAvatar(undefined);
            window.alert(error.message);
            return;
        });
        if (!avatar) {
            setNFTEvent(undefined);
            setAvatar(undefined);
            window.alert('Sorry, failed to save NFT Avatar. Please set again.');
            return;
        }
        setAvatar(avatar);
        var _avatar3;
        src_utils/* MaskMessages.events.NFTAvatarTimelineUpdated.sendToAll */.ql.events.NFTAvatarTimelineUpdated.sendToAll(avatar !== null && avatar !== void 0 ? avatar : {
            userId: identity.identifier.userId,
            avatarId: (0,user/* getAvatarId */.yd)((_avatar3 = identity.avatar) !== null && _avatar3 !== void 0 ? _avatar3 : ''),
            address: '',
            tokenId: ''
        });
        setNFTEvent(undefined);
    }, [
        identity.avatar
    ]);
    (0,react.useEffect)(()=>{
        setAvatar(_avatar4);
    }, [
        _avatar4
    ]);
    (0,react.useEffect)(()=>{
        return src_utils/* MaskMessages.events.NFTAvatarUpdated.on */.ql.events.NFTAvatarUpdated.on((data)=>onUpdate(data)
        );
    }, [
        onUpdate
    ]);
    (0,react.useEffect)(()=>{
        if (!showAvatar) return;
        const linkDom = (0,selector/* searchTwitterAvatarLinkSelector */.N7)().evaluate();
        if ((linkDom === null || linkDom === void 0 ? void 0 : linkDom.firstElementChild) && linkDom.childNodes.length === 4) {
            var ref;
            const linkParentDom = linkDom.closest('div');
            if (linkParentDom) linkParentDom.style.overflow = 'visible';
            // create rainbow shadow border
            if (((ref = linkDom.lastElementChild) === null || ref === void 0 ? void 0 : ref.tagName) !== 'STYLE') {
                var ref2;
                borderElement.current = linkDom.firstElementChild;
                // remove useless border
                linkDom.removeChild(linkDom.firstElementChild);
                const style = document.createElement('style');
                style.innerText = `
                ${RainbowBox/* rainbowBorderKeyFrames.styles */.v.styles}

                .rainbowBorder {
                    animation: ${RainbowBox/* rainbowBorderKeyFrames.name */.v.name} 6s linear infinite;
                    box-shadow: 0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
                    transition: none;
                    border: 0px solid #00f8ff;
                }
            `;
                rainBowElement.current = linkDom.firstElementChild.nextElementSibling;
                (ref2 = linkDom.firstElementChild.nextElementSibling) === null || ref2 === void 0 ? void 0 : ref2.classList.add('rainbowBorder');
                linkDom.appendChild(style);
            }
        }
        return ()=>{
            var ref;
            if ((linkDom === null || linkDom === void 0 ? void 0 : (ref = linkDom.lastElementChild) === null || ref === void 0 ? void 0 : ref.tagName) === 'STYLE') {
                linkDom.removeChild(linkDom.lastElementChild);
            }
            if (borderElement.current && (linkDom === null || linkDom === void 0 ? void 0 : linkDom.firstElementChild) !== borderElement.current) {
                linkDom === null || linkDom === void 0 ? void 0 : linkDom.insertBefore(borderElement.current, linkDom.firstChild);
            }
            if (rainBowElement.current) {
                var ref3;
                (ref3 = rainBowElement.current) === null || ref3 === void 0 ? void 0 : ref3.classList.remove('rainbowBorder');
            }
        };
    }, [
        location.pathname,
        showAvatar
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (location.pathname && location.pathname.split('/').length === 2 && (0,trim/* default */.Z)(location.pathname, '/') !== identity.identifier.userId) {
            setAvatar(undefined);
        }
    }, [
        location,
        identity
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        var ref;
        const linkParentDom = (ref = (0,selector/* searchTwitterAvatarLinkSelector */.N7)().evaluate()) === null || ref === void 0 ? void 0 : ref.closest('div');
        if (!avatar1 || !linkParentDom || !showAvatar) return;
        const handler = ()=>{
            window.open((0,pipes/* resolveOpenSeaLink */.QN)(avatar1.address, avatar1.tokenId), '_blank');
        };
        linkParentDom.addEventListener('click', handler);
        return ()=>{
            linkParentDom.removeEventListener('click', handler);
        };
    }, [
        avatar1
    ]);
    if (!avatar1 || !size) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: showAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadge/* NFTBadge */.A, {
            borderSize: 5,
            hasRainbow: true,
            avatar: avatar1,
            size: size,
            width: 15,
            classes: {
                root: classes.root,
                text: classes.text,
                icon: classes.icon
            }
        }) : null
    }));
}

// EXTERNAL MODULE: ./src/plugins/Avatar/utils/index.ts
var Avatar_utils = __webpack_require__(87937);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/ProfileNFTAvatar.tsx











async function injectProfileNFTAvatarInTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchProfileSetAvatarSelector */.FK)());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileNFTAvatar_NFTAvatarInTwitter, {}));
}
const ProfileNFTAvatar_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        root: {
            paddingLeft: props.paddingLeft,
            paddingTop: props.paddingTop,
            paddingRight: props.paddingRight,
            paddingBottom: props.paddingBottom
        }
    })
);
function getStyles() {
    const ele = (0,selector/* searchProfessionalButtonSelector */.$P)().evaluate();
    if (!ele) return {
        paddingTop: '11px',
        paddingLeft: '14px',
        paddingRight: '14px',
        paddingBottom: '14px'
    };
    const style = window.getComputedStyle(ele);
    return {
        paddingTop: style.paddingTop,
        paddingLeft: style.paddingLeft,
        paddingRight: style.paddingRight,
        paddingBottom: style.paddingBottom
    };
}
async function changeImageToActiveElements(image) {
    var ref, ref1, ref2;
    const imageBuffer = await image.arrayBuffer();
    (0,sdk/* hookInputUploadOnce */.ed)('image/png', 'avatar.png', new Uint8Array(imageBuffer));
    (ref2 = (ref = (0,selector/* searchTwitterAvatarOpenFilesSelector */.XL)().evaluate()[0]) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : ref1.children[0]) === null || ref2 === void 0 ? void 0 : ref2.click();
}
function ProfileNFTAvatar_NFTAvatarInTwitter() {
    const { classes  } = ProfileNFTAvatar_useStyles(getStyles());
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const [avatarEvent, setAvatarEvent] = (0,react.useState)();
    const onChange = async (token)=>{
        if (!token.info.imageURL) return;
        const image = await (0,Avatar_utils/* toPNG */.mr)(token.info.imageURL);
        if (!image) return;
        changeImageToActiveElements(image);
        var _avatar;
        setAvatarEvent({
            userId: identity.identifier.userId,
            avatarId: (0,user/* getAvatarId */.yd)((_avatar = identity.avatar) !== null && _avatar !== void 0 ? _avatar : ''),
            address: token.contractDetailed.address,
            tokenId: token.tokenId
        });
    };
    const handler = ()=>{
        var _avatar;
        src_utils/* MaskMessages.events.NFTAvatarUpdated.sendToLocal */.ql.events.NFTAvatarUpdated.sendToLocal(avatarEvent !== null && avatarEvent !== void 0 ? avatarEvent : {
            userId: identity.identifier.userId,
            avatarId: (0,user/* getAvatarId */.yd)((_avatar = identity.avatar) !== null && _avatar !== void 0 ? _avatar : ''),
            address: '',
            tokenId: ''
        });
        setAvatarEvent(undefined);
    };
    (0,react.useEffect)(()=>{
        const profileSave = (0,selector/* searchProfileSaveSelector */.$3)().evaluate();
        if (!profileSave) return;
        profileSave.addEventListener('click', handler);
        return ()=>profileSave.removeEventListener('click', handler)
        ;
    }, [
        handler
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatar/* NFTAvatar */.R, {
        onChange: onChange,
        classes: classes
    }));
}

// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadgeTimeline.tsx
var NFTBadgeTimeline = __webpack_require__(37677);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/utils/avatar.ts

const ClipPath = 'url("#hex-hw-shapeclip-clipconfig")';
function getInjectNodeInfo(ele) {
    var ref, ref1, ref2, ref3, ref4;
    const imgEle = ele.firstChild.querySelector('img');
    if (!imgEle) return;
    const nftDom = (ref = imgEle.parentNode) === null || ref === void 0 ? void 0 : (ref1 = ref.parentNode) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.parentNode) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.parentNode) === null || ref3 === void 0 ? void 0 : ref3.parentNode;
    if (!nftDom) return;
    nftDom.style.overflow = 'unset';
    const avatarParent = nftDom.parentElement;
    let isTwitterNFT = false;
    if (avatarParent) {
        const style = window.getComputedStyle(avatarParent);
        isTwitterNFT = style.clipPath === ClipPath;
    }
    var ref5;
    const width = Number((ref5 = window.getComputedStyle(nftDom).width.replace('px', '')) !== null && ref5 !== void 0 ? ref5 : 0);
    var ref6;
    const height = Number((ref6 = window.getComputedStyle(nftDom).height.replace('px', '')) !== null && ref6 !== void 0 ? ref6 : 0);
    const dom = (ref4 = imgEle.parentNode) === null || ref4 === void 0 ? void 0 : ref4.firstChild;
    if (dom) dom.style.borderRadius = '100%';
    const avatarId = (0,user/* getAvatarId */.yd)(imgEle.src);
    if (!avatarId) return;
    return {
        element: nftDom,
        width,
        height,
        avatarId,
        isTwitterNFT
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(23290);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useNFTContainerAtTwitter.ts


function useNFTContainerAtTwitter(screenName) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        return web3_providers_src/* Twitter.getUserNftContainer */.tL.getUserNftContainer(screenName);
    }, [
        web3_providers_src/* Twitter */.tL,
        screenName
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarClip.tsx








// from twitter page
const ViewBoxWidth = 200;
const ViewBoxHeight = 188;
const rainbowBorderKeyFrames = theme_src/* keyframes */.F4`
    0%, to {
        stroke: #00f8ff;
    }
    20% {
        stroke: #a4ff00;
    }
    40% {
        stroke: #f7275e;
    }
    60% {
        stroke: #ffd300;
    }
    80% {
        stroke: #ff8a00;
    }
`;
const NFTAvatarClip_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {},
        miniBorder: {
            transform: 'scale(0.94) translate(7px, 6px) translateZ(0)',
            strokeWidth: 6,
            stroke: '#00f8ff',
            fill: 'none'
        },
        borderPath: {
            transform: 'scale(0.98, 1.035) translate(3px, -2px)',
            strokeWidth: 3
        },
        background: {
            transform: 'scale(1, 1.05) translate(1px, -3px)',
            fill: 'none',
            strokeWidth: 30,
            stroke: 'black',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
        },
        rainbowBorder: {
            animation: `${rainbowBorderKeyFrames} 6s linear infinite`,
            transition: 'none',
            fill: 'none',
            strokeLinejoin: 'round',
            strokeLinecap: 'round'
        },
        text: {
            transform: 'translate(1px, -5px) '
        },
        price: {
            transform: 'translate(0px, -5px) '
        },
        namePath: {
            transform: 'scale(0.9) translate(10px, 10px)'
        }
    })
);
function NamePath(props) {
    const classes = (0,theme_src/* useStylesExtends */.Bc)(NFTAvatarClip_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        className: classes.root,
        d: "M6.74789,69.55C14.0458,54.2034 22.5561,39.4634 32.1979,25.47L35.3079,20.96C39.1367,15.4049 44.155,10.7724 49.9981,7.3994C55.8413,4.02636 62.3625,1.99743 69.0879,1.46004L74.5479,1.02004C91.4873,-0.340012 108.508,-0.340012 125.448,1.02004L130.908,1.46004C137.633,1.99743 144.155,4.02636 149.998,7.3994C155.841,10.7724 160.859,15.4049 164.688,20.96L167.798,25.43C177.44,39.4234 185.95,54.1634 193.248,69.51",
        id: props.id
    }));
}
function PricePath({ id  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37",
        id: id
    }));
}
function BorderPath({ id  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        id: id,
        d: "M193.248 69.51C185.95 54.1634 177.44 39.4234 167.798 25.43L164.688 20.96C160.859 15.4049 155.841 10.7724 149.998 7.3994C144.155 4.02636 137.633 1.99743 130.908 1.46004L125.448 1.02004C108.508 -0.340012 91.4873 -0.340012 74.5479 1.02004L69.0879 1.46004C62.3625 1.99743 55.8413 4.02636 49.9981 7.3994C44.155 10.7724 39.1367 15.4049 35.3079 20.96L32.1979 25.47C22.5561 39.4634 14.0458 54.2034 6.74789 69.55L4.39789 74.49C1.50233 80.5829 0 87.2441 0 93.99C0 100.736 1.50233 107.397 4.39789 113.49L6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37L195.598 113.43C198.493 107.337 199.996 100.676 199.996 93.93C199.996 87.1841 198.493 80.5229 195.598 74.43L193.248 69.51Z"
    }));
}
function NFTAvatarClip_Text(props) {
    const { xlinkHref , fontSize =12 , text , fill  } = props;
    const classes = (0,theme_src/* useStylesExtends */.Bc)(NFTAvatarClip_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
        x: "0%",
        textAnchor: "middle",
        fill: fill,
        fontFamily: "sans-serif",
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textPath", {
            xlinkHref: xlinkHref,
            startOffset: "50%",
            rotate: "auto",
            dominantBaseline: "mathematical",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tspan", {
                fontWeight: "bold",
                fontSize: fontSize,
                children: text
            })
        })
    }));
}
function NFTAvatarClip(props) {
    const { id =(0,v4/* default */.Z)() , width , height , viewBoxHeight =ViewBoxHeight , viewBoxWidth =ViewBoxWidth , screenName  } = props;
    const classes = (0,theme_src/* useStylesExtends */.Bc)(NFTAvatarClip_useStyles(), props);
    const { loading , value: avatarMetadata  } = useNFTContainerAtTwitter(screenName !== null && screenName !== void 0 ? screenName : '');
    var ref, ref1;
    const { value ={
        amount: '0',
        symbol: 'ETH',
        name: '',
        slug: ''
    } , loading: loadingNFT  } = (0,hooks/* useNFT */.e)((ref = avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.address) !== null && ref !== void 0 ? ref : '', (ref1 = avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.token_id) !== null && ref1 !== void 0 ? ref1 : '');
    const { amount , name , symbol , slug  } = value;
    if (!(avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.address) || !(avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.token_id)) return null;
    var ref2;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        className: classes.root,
        width: width,
        height: height,
        id: id,
        viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NamePath, {
                        id: `${id}-name-path`,
                        classes: {
                            root: classes.namePath
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PricePath, {
                        id: `${id}-price-path`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderPath, {
                        id: `${id}-border-path`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: `${id}-gradient`,
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#00f8ff"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "20%",
                                stopColor: "#a4ff00"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "40%",
                                stopColor: "#f7275e"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "60%",
                                stopColor: "#ffd300"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "80%",
                                stopColor: "#ff8a00"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#00f8ff"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("pattern", {
                        id: `${id}-pattern`,
                        x: "0",
                        y: "0",
                        width: "300%",
                        height: "100%",
                        patternUnits: "userSpaceOnUse",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                            cx: viewBoxWidth / 2,
                            cy: viewBoxHeight / 2,
                            r: Math.max(viewBoxWidth, viewBoxHeight) + 1,
                            fill: `url(#${id}-gradient)`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                dur: "10s",
                                repeatCount: "indefinite",
                                from: `0 ${viewBoxWidth / 2} ${viewBoxHeight / 2}`,
                                to: `360 ${viewBoxWidth / 2} ${viewBoxHeight / 2}`
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                        xlinkHref: `#${id}-border-path`,
                        className: classes.background
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                        xlinkHref: `#${id}-border-path`,
                        className: classnames_default()(classes.rainbowBorder, classes.borderPath)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClip_Text, {
                        xlinkHref: `#${id}-name-path`,
                        fill: `url(#${id}-pattern)`,
                        text: loading || loadingNFT ? 'loading...' : `${(0,Avatar_utils/* formatText */.RZ)(name, (ref2 = avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.token_id) !== null && ref2 !== void 0 ? ref2 : '')} ${slug.toLowerCase() === 'ens' ? 'ENS' : ''}`,
                        classes: {
                            root: classes.text
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClip_Text, {
                        fill: `url(#${id}-pattern)`,
                        xlinkHref: `#${id}-price-path`,
                        classes: {
                            root: classes.price
                        },
                        text: loading || loadingNFT ? '' : (0,Avatar_utils/* formatPrice */.T4)(amount, symbol)
                    })
                ]
            })
        ]
    }));
}
function NFTAvatarMiniClip(props) {
    const { id =(0,v4/* default */.Z)() , width , height , viewBoxHeight =ViewBoxHeight , viewBoxWidth =ViewBoxWidth , screenName  } = props;
    const classes = (0,theme_src/* useStylesExtends */.Bc)(NFTAvatarClip_useStyles(), props);
    const identity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const { loading , value: avatarMetadata  } = useNFTContainerAtTwitter(screenName !== null && screenName !== void 0 ? screenName : identity.identifier.userId);
    if (loading || !(avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.address) || !(avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.token_id)) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        className: classes.root,
        width: width,
        height: height,
        id: id,
        viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderPath, {
                    id: `${id}-border-path`
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                    xlinkHref: `#${id}-border-path`,
                    className: classnames_default()(classes.rainbowBorder, classes.miniBorder)
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/Avatar.tsx









function getTwitterId(ele) {
    var ref;
    const twitterIdNode = ((ref = ele.firstChild) === null || ref === void 0 ? void 0 : ref.nextSibling).querySelector('[dir="ltr"] > span');
    if (!twitterIdNode) return;
    return twitterIdNode.innerText.trim().replace('@', '');
}
function Avatar_(main, signal) {
    (0,src_utils/* startWatch */.fy)(new umd.MutationObserverWatcher(main()).useForeach((ele, _, meta)=>{
        let remover = ()=>{};
        const remove = ()=>remover()
        ;
        const run = async ()=>{
            const twitterId = getTwitterId(ele);
            if (!twitterId) return;
            const info = getInjectNodeInfo(ele.firstChild);
            if (!info) return;
            const proxy = (0,umd.DOMProxy)({
                afterShadowRootInit: {
                    mode: shared_0/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
                }
            });
            proxy.realCurrent = info.element.firstChild;
            const root = (0,src_utils/* createReactRootShadowed */.ou)(proxy.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 2
                },
                children: info.isTwitterNFT ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarMiniClip, {
                    width: info.width,
                    height: info.height,
                    screenName: twitterId
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadgeTimeline/* NFTBadgeTimeline */.J, {
                    userId: twitterId,
                    avatarId: info.avatarId,
                    width: info.width - 4,
                    height: info.height - 4,
                    snsKey: constants/* RSS3_KEY_SNS.TWITTER */.vu.TWITTER
                })
            }));
            remover = root.destory;
        };
        run();
        return {
            onNodeMutation: run,
            onTargetChanged: run,
            onRemove: remove
        };
    }), signal);
}
async function injectUserNFTAvatarAtTwitter(signal) {
    Avatar_(selector/* postAvatarsContentSelector */.vL, signal);
}

// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarButton.tsx + 1 modules
var NFTAvatarButton = __webpack_require__(96016);
// EXTERNAL MODULE: ./src/utils/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(19066);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/NFTAvatarEditProfile.tsx








function injectOpenNFTAvatarEditProfileButton(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchEditProfileSelector */.wP)());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(OpenNFTAvatarEditProfileButtonInTwitter, {}));
}
const NFTAvatarEditProfile_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        root: {
            minHeight: props.minHeight,
            fontSize: props.fontSize,
            marginBottom: props.marginBottom,
            marginTop: 1,
            marginRight: theme.spacing(0.5)
        }
    })
);
function OpenNFTAvatarEditProfileButtonInTwitter() {
    const [style, setStyle] = (0,react.useState)({
        minHeight: 32,
        fontSize: 14,
        marginBottom: 11
    });
    const onClick = ()=>{
        const editDom = (0,selector/* searchEditProfileSelector */.wP)().evaluate();
        editDom === null || editDom === void 0 ? void 0 : editDom.click();
    };
    const setStyleFromEditProfileSelector = ()=>{
        const editDom = (0,selector/* searchEditProfileSelector */.wP)().evaluate();
        if (!editDom) return;
        const css = window.getComputedStyle(editDom);
        setStyle({
            minHeight: Number(css.minHeight.replace('px', '')),
            fontSize: Number(css.fontSize.replace('px', '')),
            marginBottom: Number(css.marginBottom.replace('px', ''))
        });
    };
    (0,react.useEffect)(()=>setStyleFromEditProfileSelector()
    , []);
    (0,useLocationChange/* useLocationChange */.S)(()=>setStyleFromEditProfileSelector()
    );
    const { classes  } = NFTAvatarEditProfile_useStyles(style);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButton/* NFTAvatarButton */.m, {
        classes: {
            root: classes.root
        },
        onClick: onClick
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadgeTweet.tsx




const NFTBadgeTweet_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {}
    })
);
function NFTBadgeTweet(props) {
    const { avatarId , width , height , snsKey  } = props;
    const identity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    if (!(identity === null || identity === void 0 ? void 0 : identity.identifier.userId)) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadgeTimeline/* NFTBadgeTimeline */.J, {
        width: width,
        height: height,
        userId: identity === null || identity === void 0 ? void 0 : identity.identifier.userId,
        avatarId: avatarId,
        snsKey: snsKey
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/TweetNFTAvatar.tsx









function TweetNFTAvatar_(main, signal) {
    (0,src_utils/* startWatch */.fy)(new umd.MutationObserverWatcher(main()).useForeach((ele, _, meta)=>{
        let remover = ()=>{};
        const remove = ()=>remover()
        ;
        const run = async ()=>{
            const info = getInjectNodeInfo(ele.firstChild);
            if (!info) return;
            const proxy = (0,umd.DOMProxy)({
                afterShadowRootInit: {
                    mode: shared_0/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
                }
            });
            proxy.realCurrent = info.element.firstChild;
            const root = (0,src_utils/* createReactRootShadowed */.ou)(proxy.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 2
                },
                children: info.isTwitterNFT ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarMiniClip, {
                    width: info.width,
                    height: info.height
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadgeTweet, {
                    width: info.width - 4,
                    height: info.height - 4,
                    avatarId: info.avatarId,
                    snsKey: constants/* RSS3_KEY_SNS.TWITTER */.vu.TWITTER
                })
            }));
            remover = root.destory;
        };
        run();
        return {
            onNodeMutation: run,
            onTargetChanged: run,
            onRemove: remove
        };
    }), signal);
}
async function injectUserNFTAvatarAtTweet(signal) {
    TweetNFTAvatar_(selector/* searchTweetAvatarSelector */.Ab, signal);
    TweetNFTAvatar_(selector/* searchRetweetAvatarSelector */.bQ, signal);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(54105);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useNFTVerified.ts


function useNFTVerified(address) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!address) return;
        return Avatar_messages/* PluginNFTAvatarRPC.getNFTContractVerifiedFromJSON */.B.getNFTContractVerifiedFromJSON(address);
    }, [
        address
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTContractImage.tsx





const NFTContractImage_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {},
        image: {
            width: 24,
            height: 24
        }
    })
);
function NFTContractImage(props) {
    const { userId , snsKey  } = props;
    const { classes  } = NFTContractImage_useStyles();
    const { loading: loadingNFT , value: NFTAvatar  } = (0,hooks/* useNFTAvatar */.i)(userId, snsKey);
    var ref;
    const { loading , value: contract  } = useNFTVerified((ref = NFTAvatar === null || NFTAvatar === void 0 ? void 0 : NFTAvatar.address) !== null && ref !== void 0 ? ref : '');
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: loading || loadingNFT ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: "small"
        }) : contract ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            className: classes.image,
            src: contract === null || contract === void 0 ? void 0 : contract.icon
        }) : null
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/NFTContract.tsx







function NFTContract_(main, signal) {
    (0,src_utils/* startWatch */.fy)(new umd.MutationObserverWatcher(main()).useForeach((ele, _, meta)=>{
        let remover = ()=>{};
        const remove = ()=>remover()
        ;
        const run = async ()=>{
            const twitterIdNode = ele.querySelector('div > :nth-child(2) > :nth-child(2) > div > div > div > div > div > a > div > :last-child');
            if (!twitterIdNode) return;
            const twitterId = twitterIdNode.innerText.trim().replace('@', '');
            const nftDom = ele.querySelector('div > :nth-child(2) > :nth-child(2) > div > div > div > div > div > a > div > div > :last-child');
            if (!nftDom) return;
            const proxy = (0,umd.DOMProxy)({
                afterShadowRootInit: {
                    mode: shared_0/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
                }
            });
            proxy.realCurrent = nftDom;
            const root = (0,src_utils/* createReactRootShadowed */.ou)(proxy.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTContractImage, {
                    userId: twitterId,
                    snsKey: constants/* RSS3_KEY_SNS.TWITTER */.vu.TWITTER
                })
            }));
            remover = root.destory;
        };
        run();
        return {
            onNodeMutation: run,
            onTargetChanged: run,
            onRemove: remove
        };
    }), signal);
}
async function injectNFTContractAtTwitter(signal) {
    NFTContract_(selector/* postAvatarsContentSelector */.vL, signal);
}

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(52522);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/NFTAvatarClip.tsx









function injectNFTAvatarClipInTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchTwitterAvatarNFTSelector */.Dc)());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClipInTwitter, {}));
}
const NFT_NFTAvatarClip_useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        root: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        text: {},
        icon: {}
    })
);
function NFTAvatarClipInTwitter() {
    const { classes  } = NFT_NFTAvatarClip_useStyles();
    const windowSize = (0,useWindowSize/* default */.Z)();
    const location = (0,useLocation/* default */.Z)();
    const borderElement = (0,react.useRef)();
    const linkDom = (0,react.useRef)();
    const size = (0,react.useMemo)(()=>{
        var ref, ref1;
        const ele = (ref1 = (ref = (0,selector/* searchTwitterAvatarNFTSelector */.Dc)().evaluate()) === null || ref === void 0 ? void 0 : ref.closest('a')) === null || ref1 === void 0 ? void 0 : ref1.querySelector('img');
        if (!ele) return 0;
        const style = window.getComputedStyle(ele);
        var ref2;
        return Number.parseInt((ref2 = style.width.replace('px', '')) !== null && ref2 !== void 0 ? ref2 : 0, 10);
    }, [
        windowSize,
        location
    ]);
    const twitterId = (0,react.useMemo)(()=>{
        var ref;
        const ele = (ref = (0,selector/* searchTwitterAvatarNFTSelector */.Dc)().evaluate()) === null || ref === void 0 ? void 0 : ref.closest('a');
        if (!ele) return;
        const path = ele.getAttribute('href');
        if (!path) return;
        var ref3;
        const [, userId] = (ref3 = path.match(/^\/(\w+)\/nft$/)) !== null && ref3 !== void 0 ? ref3 : [];
        return userId;
    }, [
        location
    ]);
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            var ref, ref4;
            linkDom.current = (0,selector/* searchTwitterAvatarNFTLinkSelector */.Fv)().evaluate();
            if (((ref = linkDom.current) === null || ref === void 0 ? void 0 : ref.firstElementChild) && ((ref4 = linkDom.current) === null || ref4 === void 0 ? void 0 : ref4.childNodes.length) === 4) {
                var ref5;
                borderElement.current = linkDom.current.firstElementChild;
                // remove useless border
                linkDom.current.removeChild((ref5 = linkDom.current) === null || ref5 === void 0 ? void 0 : ref5.firstElementChild);
            }
        }, 5000);
        return ()=>{
            var ref;
            if (borderElement.current && borderElement.current !== ((ref = linkDom.current) === null || ref === void 0 ? void 0 : ref.firstElementChild) && linkDom.current) linkDom.current.insertBefore(borderElement.current, linkDom.current.firstChild);
        };
    }, [
        location.pathname
    ]);
    if ((0,base_src/* isZero */.Fr)(size) || !twitterId) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClip, {
        screenName: twitterId,
        width: size,
        height: size,
        classes: {
            root: classes.root,
            text: classes.text,
            icon: classes.icon
        }
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/Components/Text.tsx
var Components_Text = __webpack_require__(42820);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/customization/render-fragments.tsx




const TwitterRenderFragments = {
    AtLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const target = '/' + props.children.slice(1);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: target,
            children: props.children
        }));
    }),
    HashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const text = props.children.slice(1);
        const target = `/hashtag/${encodeURIComponent(text)}?src=hashtag_click`;
        const { hasMatch , ...events } = (0,Components_Text/* useTagEnhancer */.fR)('hash', text);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            href: target,
            children: props.children
        }));
    }),
    CashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const target = `/search?q=${encodeURIComponent(props.children)}&src=cashtag_click`;
        const { hasMatch , ...events } = (0,Components_Text/* useTagEnhancer */.fR)('cash', props.children.slice(1));
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            href: target,
            children: props.children
        }));
    }),
    Image: ()=>null
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/ui-provider.ts










































const useInjectedDialogClassesOverwriteTwitter = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [smallQuery]: {
                display: 'block !important'
            }
        },
        container: {
            alignItems: 'center'
        },
        paper: {
            width: '600px !important',
            maxWidth: 'none',
            boxShadow: 'none',
            backgroundImage: 'none',
            [smallQuery]: {
                display: 'block !important',
                margin: 12
            }
        },
        dialogTitle: {
            display: 'flex',
            alignItems: 'center',
            padding: '3px 16px',
            borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#2f3336' : '#eff3f4'}`,
            '& > h2': {
                display: 'inline-block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            [smallQuery]: {
                display: 'flex',
                justifyContent: 'start',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px 11px !important'
            }
        },
        dialogContent: {
            padding: 16,
            [smallQuery]: {
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px'
            }
        },
        dialogActions: {
            padding: '6px 16px',
            [smallQuery]: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px !important'
            }
        },
        dialogBackdropRoot: {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(110, 118, 125, 0.4)' : 'rgba(0, 0, 0, 0.4)'
        }
    };
});
const twitterUI = {
    ...base/* twitterBase */.oQ,
    ...shared/* twitterShared */.p,
    automation: {
        maskCompositionDialog: {
            open: openComposeBoxTwitter
        },
        nativeCommentBox: undefined,
        nativeCompositionDialog: {
            appendText: pasteTextToCompositionTwitter,
            // TODO: make a better way to detect
            attachImage: (0,AttachImageToComposition/* pasteImageToCompositionDefault */.f)(()=>false
            )
        },
        redirect: {
            newsFeed: gotoNewsFeedPageTwitter,
            profilePage: gotoProfilePageTwitter
        }
    },
    collecting: {
        identityProvider: IdentityProviderTwitter,
        currentVisitingIdentityProvider: CurrentVisitingIdentityProviderTwitter,
        postsProvider: PostProviderTwitter,
        getSearchedKeyword: getSearchedKeywordAtTwitter
    },
    customization: {
        paletteMode: PaletteModeProviderTwitter,
        componentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteTwitter
            },
            RenderFragments: TwitterRenderFragments
        },
        useTheme: useThemeTwitterVariant,
        i18nOverwrite: i18NOverwriteTwitter
    },
    init (signal) {
        const friends = social_network/* stateCreator.friends */.ZZ.friends();
        const profiles = social_network/* stateCreator.profiles */.ZZ.profiles();
        (0,InitFriends/* InitAutonomousStateFriends */.f)(signal, friends, shared/* twitterShared.networkIdentifier */.p.networkIdentifier);
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, shared/* twitterShared.networkIdentifier */.p.networkIdentifier);
        return {
            friends,
            profiles
        };
    },
    injection: {
        toolbox: injectToolboxHintAtTwitter,
        searchResult: injectSearchResultBoxAtTwitter,
        profileTab: injectProfileTabAtTwitter,
        profileTabContent: injectProfileTabContentAtTwitter,
        profileSlider: injectProfileSliderAtTwitter,
        enhancedPostRenderer: injectPostReplacerAtTwitter,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        postInspector: injectPostInspectorAtTwitter,
        postActions: injectPostActionsAtTwitter,
        setupPrompt: injectSetupPromptAtTwitter,
        newPostComposition: {
            start: injectPostBoxComposed,
            supportedInputTypes: {
                text: true,
                image: true
            },
            supportedOutputTypes: {
                text: true,
                image: true
            }
        },
        setupWizard: (0,StartSetupGuide/* createTaskStartSetupGuideDefault */.Z)(),
        userBadge: injectMaskUserBadgeAtTwitter,
        commentComposition: undefined,
        userAvatar: injectUserNFTAvatarAtTwitter,
        enhancedProfileNFTAvatar: injectProfileNFTAvatarInTwitter,
        profileAvatar: injectNFTAvatarInTwitter,
        openNFTAvatar: injectOpenNFTAvatarEditProfileButton,
        postAndReplyNFTAvatar: injectUserNFTAvatarAtTweet,
        collectionAvatar: injectNFTContractAtTwitter,
        avatarClipNFT: injectNFTAvatarClipInTwitter
    },
    configuration: {
        nextIDConfig: {
            enable: true,
            platform: src/* NextIDPlatform.Twitter */.Vd.Twitter,
            collectVerificationPost: (keyword)=>{
                const userId = IdentityProviderTwitter.recognized.value.identifier || social_network/* globalUIState.profiles.value.0.identifier */.EJ.profiles.value[0].identifier;
                const postNodes = (0,selector/* timelinePostContentSelector */.yR)().evaluate();
                for (const postNode of postNodes){
                    var ref;
                    const postId = postIdParser(postNode);
                    const postContent = postContentMessageParser(postNode);
                    var ref1;
                    const isVerified = postId && postContent[0] && (0,typed_message_base/* isTypedMessageText */.Rz)(postContent[0]) && ((ref1 = (ref = postContent[0]) === null || ref === void 0 ? void 0 : ref.content) !== null && ref1 !== void 0 ? ref1 : '').toLowerCase() === keyword.toLowerCase();
                    if (isVerified && userId) {
                        return new src/* PostIdentifier */._P(userId, postId);
                    }
                }
                return null;
            }
        },
        steganography: {
            password () {
                // ! Change this might be a breaking change !
                return new src/* ProfileIdentifier */.WO('twitter.com', src/* ProfileIdentifier.getUserName */.WO.getUserName(IdentityProviderTwitter.recognized.value.identifier) || src/* ProfileIdentifier.getUserName */.WO.getUserName(social_network/* globalUIState.profiles.value.0.identifier */.EJ.profiles.value[0].identifier) || (0,esm/* unreachable */.t1)('Cannot figure out password')).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (twitterUI);


/***/ }),

/***/ 30677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ isMobileTwitter)
/* harmony export */ });
/* unused harmony export twitterDomain */
const isMobileTwitter = !!navigator.userAgent.match(/Mobile|mobile/);
const twitterDomain = (/* unused pure expression or super */ null && (isMobileTwitter ? 'https://mobile.twitter.com/' : 'https://twitter.com/'));


/***/ }),

/***/ 18340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kt": () => (/* binding */ getEditorContent),
/* harmony export */   "iv": () => (/* binding */ isCompose),
/* harmony export */   "uf": () => (/* binding */ hasFocus),
/* harmony export */   "Wu": () => (/* binding */ hasEditor)
/* harmony export */ });
/* unused harmony export isMobile */
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57852);

const getEditorContent = ()=>{
    const editorNode = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .postEditorDraftContentSelector */ .Y5)().evaluate();
    if (!editorNode) return '';
    if (editorNode.tagName.toLowerCase() === 'div') return editorNode.innerText;
    return editorNode.value;
};
const isMobile = ()=>globalThis.location.host.includes('mobile')
;
const isCompose = ()=>globalThis.location.pathname.includes('compose')
;
const hasFocus = (x)=>x.evaluate() === document.activeElement
;
const hasEditor = ()=>!!(0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .postEditorDraftContentSelector */ .Y5)().evaluate()
;


/***/ }),

/***/ 57852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L2": () => (/* binding */ searchProfileTabListLastChildSelector),
/* harmony export */   "xx": () => (/* binding */ searchProfileTabPageSelector),
/* harmony export */   "YX": () => (/* binding */ searchProfileEmptySelector),
/* harmony export */   "Fe": () => (/* binding */ searchProfileTabSelector),
/* harmony export */   "Hk": () => (/* binding */ searchAppBarBackSelector),
/* harmony export */   "JN": () => (/* binding */ searchProfileTabListSelector),
/* harmony export */   "r$": () => (/* binding */ searchNewTweetButtonSelector),
/* harmony export */   "rf": () => (/* binding */ searchNickNameSelector),
/* harmony export */   "Ls": () => (/* binding */ searchAvatarSelector),
/* harmony export */   "dA": () => (/* binding */ searchNFTAvatarSelector),
/* harmony export */   "pz": () => (/* binding */ searchAvatarMetaSelector),
/* harmony export */   "wP": () => (/* binding */ searchEditProfileSelector),
/* harmony export */   "Du": () => (/* binding */ rootSelector),
/* harmony export */   "QG": () => (/* binding */ composeAnchorSelector),
/* harmony export */   "xH": () => (/* binding */ composeAnchorTextSelector),
/* harmony export */   "ag": () => (/* binding */ headingTextSelector),
/* harmony export */   "$_": () => (/* binding */ postEditorContentInPopupSelector),
/* harmony export */   "Rd": () => (/* binding */ postEditorInPopupSelector),
/* harmony export */   "ch": () => (/* binding */ toolBoxInSideBarSelector),
/* harmony export */   "WU": () => (/* binding */ sideBarProfileSelector),
/* harmony export */   "Ps": () => (/* binding */ postEditorInTimelineSelector),
/* harmony export */   "Y5": () => (/* binding */ postEditorDraftContentSelector),
/* harmony export */   "R9": () => (/* binding */ searchResultHeadingSelector),
/* harmony export */   "nS": () => (/* binding */ newPostButtonSelector),
/* harmony export */   "V5": () => (/* binding */ bioDescriptionSelector),
/* harmony export */   "IQ": () => (/* binding */ personalHomepageSelector),
/* harmony export */   "uy": () => (/* binding */ bioPageUserNickNameSelector),
/* harmony export */   "QK": () => (/* binding */ bioPageUserIDSelector),
/* harmony export */   "YG": () => (/* binding */ floatingBioCardSelector),
/* harmony export */   "rk": () => (/* binding */ postsImageSelector),
/* harmony export */   "yR": () => (/* binding */ timelinePostContentSelector),
/* harmony export */   "XD": () => (/* binding */ postsContentSelector),
/* harmony export */   "vL": () => (/* binding */ postAvatarsContentSelector),
/* harmony export */   "qB": () => (/* binding */ selfInfoSelectors),
/* harmony export */   "XL": () => (/* binding */ searchTwitterAvatarOpenFilesSelector),
/* harmony export */   "$3": () => (/* binding */ searchProfileSaveSelector),
/* harmony export */   "$P": () => (/* binding */ searchProfessionalButtonSelector),
/* harmony export */   "FK": () => (/* binding */ searchProfileSetAvatarSelector),
/* harmony export */   "N7": () => (/* binding */ searchTwitterAvatarLinkSelector),
/* harmony export */   "p$": () => (/* binding */ searchTwitterAvatarSelector),
/* harmony export */   "Ab": () => (/* binding */ searchTweetAvatarSelector),
/* harmony export */   "bQ": () => (/* binding */ searchRetweetAvatarSelector),
/* harmony export */   "Dc": () => (/* binding */ searchTwitterAvatarNFTSelector),
/* harmony export */   "Fv": () => (/* binding */ searchTwitterAvatarNFTLinkSelector)
/* harmony export */ });
/* unused harmony exports querySelector, searchProfileSelector, searchProfileActiveTabSelector, searchProfileActiveTabStatusLineSelector, searchProfileActiveTabLabelSelector, searchForegroundColorSelector, bioCardSelector, postEditorToolbarSelector, twitterMainAvatarSelector, searchProfileAvatarSelector, searchProfileAvatarParentSelector, searchAvatarSelectorInput, searchAvatarSelectorImage, searchUseCellSelector */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58245);
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30677);
/* harmony import */ var _postBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18340);




const querySelector = (selector, singleMode = true)=>{
    const ls = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const querySelectorAll = (selector)=>{
    return new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.LiveSelector().querySelectorAll(selector);
};
// #region "Enhanced Profile"
const searchProfileSelector = ()=>querySelector('[aria-label][role="navigation"]')
;
const searchProfileTabListLastChildSelector = ()=>querySelector('[data-testid="primaryColumn"] div + [role="navigation"][aria-label] [data-testid="ScrollSnap-nextButtonWrapper"]')
;
const searchProfileTabPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="navigation"] ~ [aria-labelledby^="accessible-list"] [role="heading"] ~ div[aria-label]')
;
const searchProfileEmptySelector = ()=>querySelector('[data-testid="primaryColumn"] [data-testid="emptyState"]')
;
const searchProfileActiveTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"]')
;
const searchProfileTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="false"]')
;
const searchAppBarBackSelector = ()=>querySelector('[data-testid="app-bar-back"] > div')
;
const searchProfileActiveTabStatusLineSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"] > div > div')
;
const searchProfileActiveTabLabelSelector = ()=>querySelector('[aria-label][role="navigation"] [role="tablist"] [role="tab"][aria-selected="true"] > div')
;
const searchProfileTabListSelector = ()=>querySelectorAll('[aria-label][role="navigation"]  [role="tablist"][data-testid="ScrollSnap-List"] a')
;
const searchForegroundColorSelector = ()=>querySelector('[data-testid="primaryColumn"] > div > div > div > div > div > div > div > div > div > div')
;
const searchNewTweetButtonSelector = ()=>{
    const q = querySelector('[data-testid="FloatingActionButtons_Tweet_Button"]');
    if (q.evaluate()) return q;
    return querySelector('[data-testid="SideNav_NewTweet_Button"]');
};
const searchNickNameSelector = ()=>querySelector('[data-testid="UserProfileHeader_Items"]')
;
const searchAvatarSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href$="/photo"] img[src*="profile_images"]')
;
const searchNFTAvatarSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href$="/nft"] img[src*="profile_images"]')
;
const searchAvatarMetaSelector = ()=>querySelector('head > meta[property="og:image"]:last-child')
;
const searchEditProfileSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href="/settings/profile"]')
;
const bioCardSelector = (singleMode = true)=>querySelector([
        '.profile',
        'a[href*="header_photo"] ~ div',
        'div[data-testid="primaryColumn"] > div > div:last-child > div > div > div > div ~ div'
    ].join(), singleMode)
;
// #endregion
const rootSelector = ()=>querySelector('#react-root')
;
// `aside *` selectors are for mobile mode
const composeAnchorSelector = ()=>querySelector('header[role=banner] a[href="/compose/tweet"],aside a[href="/compose/tweet"]')
;
const composeAnchorTextSelector = ()=>querySelector('header[role=banner] a[href="/compose/tweet"] div[dir],aside a[href="/compose/tweet"] div[dir]')
;
const headingTextSelector = ()=>querySelector('[role="banner"] [role="heading"]')
;
const postEditorContentInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"] > div:first-child > div:first-child > div:first-child > div:nth-child(3)')
;
const postEditorInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"] > div:first-child > div:first-child > div:first-child > div:nth-child(3) > div:first-child [role="button"][aria-label]:nth-child(6)')
;
const toolBoxInSideBarSelector = ()=>querySelector('[role="banner"] [role="navigation"] > div')
;
const sideBarProfileSelector = ()=>querySelector('[role="banner"] [role="navigation"] [aria-label="Lists"] > div')
;
const postEditorInTimelineSelector = ()=>querySelector('[role="main"] :not(aside) > [role="progressbar"] ~ div [role="button"][aria-label]:nth-child(6)')
;
const postEditorDraftContentSelector = ()=>{
    if (location.pathname === '/compose/tweet') {
        return querySelector('[contenteditable][aria-label][spellcheck],textarea[aria-label][spellcheck]');
    }
    return ((0,_postBox__WEBPACK_IMPORTED_MODULE_2__/* .isCompose */ .iv)() ? postEditorInPopupSelector() : postEditorInTimelineSelector()).querySelector('.public-DraftEditor-content, [contenteditable][aria-label][spellcheck]');
};
const searchResultHeadingSelector = ()=>querySelector('[role="main"] [data-testid="primaryColumn"] [role="region"] > [role="heading"]')
;
const postEditorToolbarSelector = ()=>querySelector('[data-testid="toolBar"] > div > *:last-child')
;
const twitterMainAvatarSelector = ()=>querySelector('[data-testid="toolBar"]').closest(4).querySelector('div > a > div > :nth-child(2) > div')
;
const newPostButtonSelector = ()=>querySelector('[data-testid="SideNav_NewTweet_Button"]')
;
const bioDescriptionSelector = ()=>querySelector('[data-testid="UserDescription"]')
;
const personalHomepageSelector = ()=>querySelector('[data-testid="UserUrl"]')
;
const bioPageUserNickNameSelector = ()=>{
    return querySelector('[data-testid="UserDescription"]').map((x)=>{
        var ref, ref1;
        return (ref = x.parentElement) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : ref1.previousElementSibling;
    }).querySelector('div[dir]');
};
const bioPageUserIDSelector = (selector)=>{
    return selector().map((x)=>{
        var ref;
        return ((ref = x.parentElement) === null || ref === void 0 ? void 0 : ref.nextElementSibling).innerText.replace('@', '');
    });
};
const floatingBioCardSelector = ()=>querySelector('[style~="left:"] a[role=link] > div:first-child > div:first-child > div:first-child[dir="auto"]')
;
const postsImageSelector = (node)=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.LiveSelector([
        node
    ]).querySelectorAll([
        '[data-testid="tweet"] > div > div img[src*="media"]',
        '[data-testid="tweet"] ~ div img[src*="media"]'
    ].join())
;
const timelinePostContentSelector = ()=>querySelectorAll([
        '[data-testid="tweet"] div + div div[lang]',
        '[data-testid="tweet"] div + div div[data-testid="card.wrapper"]'
    ].join())
;
const postsContentSelector = ()=>{
    return querySelectorAll([
        // tweets on timeline page
        '[data-testid="tweet"] div + div div[lang]',
        '[data-testid="tweet"] div + div div[data-testid="card.wrapper"]',
        // tweets on detailed page
        '[data-testid="tweet"] + div > div:first-child div[lang]',
        '[data-testid="tweet"] + div > div div[data-testid="card.wrapper"]',
        // quoted tweets
        '[data-testid="tweet"] + div div[role="link"] div[lang]',
        '[data-testid="tweet"] > div:last-child div[role="link"] div[lang]',
        // reply-tweets
        '[data-testid="tweet"] + div div div[lang][dir]', 
    ].join()).concat(querySelectorAll('[data-testid="tweet"] > div:last-child').map((x)=>{
        var ref, ref2, ref3, ref4, ref5;
        const textElement = (ref = x.querySelector('[role="group"]')) === null || ref === void 0 ? void 0 : (ref2 = ref.parentElement) === null || ref2 === void 0 ? void 0 : ref2.querySelector('div[lang]');
        if (textElement) return textElement;
        // There's no textElement as there's only a twitter summary card parsed by a single url.
        const summaryCardElement = (ref5 = (ref3 = x.querySelector('[role="group"]')) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.parentElement) === null || ref4 === void 0 ? void 0 : ref4.querySelector('[data-testid="card.wrapper"]')) === null || ref5 === void 0 ? void 0 : ref5.previousElementSibling;
        return summaryCardElement;
    }));
};
const postAvatarsContentSelector = ()=>querySelectorAll('[data-testid="tweet"] > div > div > div > :nth-child(2)')
;
const base = querySelector('#react-root + script');
const handle = /"screen_name":"(.*?)"/;
const name = /"name":"(.*?)"/;
const bio = /"description":"(.*?)"/;
const avatar = /"profile_image_url_https":"(.*?)"/;
/**
 * first matched element can be extracted by index zero, followings are all capture groups, if no 'g' specified.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 */ const p = (regex, index)=>{
    return base.clone().map((x)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .regexMatch */ .ZB)(x.innerText, regex, index)
    );
};
const selfInfoSelectors = ()=>({
        handle: p(handle, 1),
        name: p(name, 1),
        bio: p(bio, 1),
        userAvatar: p(avatar, 1)
    })
;
// #region twitter nft avatar
const searchProfileAvatarSelector = ()=>{
    return querySelectorAll('[data-testid="fileInput"]').at(1).closest(4);
};
const searchProfileAvatarParentSelector = ()=>{
    var ref, ref6, ref7;
    return (ref = querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).evaluate()[0].firstChild) === null || ref === void 0 ? void 0 : (ref6 = ref.firstChild) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.lastChild) === null || ref7 === void 0 ? void 0 : ref7.firstChild;
};
const searchAvatarSelectorInput = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).querySelector('div > div > :nth-child(2) > div > :first-child')
;
const searchAvatarSelectorImage = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).querySelector('div > div > :nth-child(2) > div > img')
;
const searchTwitterAvatarOpenFilesSelector = ()=>querySelectorAll('[data-testid="fileInput"]').at(1)
;
const searchProfileSaveSelector = ()=>querySelector('[data-testid="Profile_Save_Button"]')
;
const searchProfessionalButtonSelector = ()=>querySelector('[data-testid*="ProfessionalButton"]')
;
const searchProfileSetAvatarSelector = ()=>_isMobile__WEBPACK_IMPORTED_MODULE_1__/* .isMobileTwitter */ .b ? searchProfessionalButtonSelector().closest(4).querySelector('div > div:nth-child(2) >div > div:nth-child(2)') : searchProfessionalButtonSelector().closest(3).querySelector('div > div:nth-child(2) > div:nth-child(2)')
;
// #endregion
// #region avatar selector
const searchTwitterAvatarLinkSelector = ()=>querySelector('[data-testid="UserProfileHeader_Items"]').closest(2).querySelector('div  a')
;
const searchTwitterAvatarSelector = ()=>querySelector('a[href$="/photo"]').querySelector('img').closest(1)
;
// #endregion
// #region twitter avatar
const searchUseCellSelector = ()=>querySelector('[data-testid="UserCell"]')
;
// #endregion
const searchTweetAvatarSelector = ()=>querySelector('[data-testid="tweetButtonInline"]').closest(7)
;
const searchRetweetAvatarSelector = ()=>querySelector('[data-testid="tweetButton"]').closest(6)
;
const searchTwitterAvatarNFTSelector = ()=>querySelector('a[href$="/nft"]').closest(1).querySelector('a div:nth-child(3) > div')
;
const searchTwitterAvatarNFTLinkSelector = ()=>querySelector('a[href$="/nft"]')
;


/***/ }),

/***/ 32036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S_": () => (/* binding */ usernameValidator),
/* harmony export */   "y": () => (/* binding */ getNickname),
/* harmony export */   "WM": () => (/* binding */ getTwitterId),
/* harmony export */   "Ek": () => (/* binding */ getBioDescription),
/* harmony export */   "o1": () => (/* binding */ getPersonalHomepage),
/* harmony export */   "wX": () => (/* binding */ getAvatar),
/* harmony export */   "yd": () => (/* binding */ getAvatarId)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32139);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57852);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7282);



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
    var ref, ref1, ref2, ref3;
    const node = (ref = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNickNameSelector */ .rf)().evaluate()) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.parentElement) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.firstChild) === null || ref3 === void 0 ? void 0 : ref3.nextSibling;
    if (!node) return '';
    const nicknameNode = node.querySelector('div span');
    if (!nicknameNode) return '';
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .collectNodeText */ .aW)(nicknameNode);
};
const getTwitterId = ()=>{
    var ref, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11;
    const node = (ref = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNickNameSelector */ .rf)().evaluate()) === null || ref === void 0 ? void 0 : (ref4 = ref.parentElement) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.parentElement) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.firstChild) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.nextSibling) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.firstChild) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.firstChild) === null || ref9 === void 0 ? void 0 : ref9.lastChild;
    if (node) {
        const twitterIdNode = node.querySelector('div span');
        if (twitterIdNode) return twitterIdNode.innerHTML.trim().replace('@', '');
    }
    const ele = ((ref10 = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchAvatarSelector */ .Ls)().evaluate()) === null || ref10 === void 0 ? void 0 : ref10.closest('a')) || ((ref11 = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNFTAvatarSelector */ .dA)().evaluate()) === null || ref11 === void 0 ? void 0 : ref11.closest('a'));
    if (ele) {
        const link = ele.getAttribute('href');
        if (link) {
            var ref12;
            const [, userId] = (ref12 = link.match(/^\/(\w+)\/(photo|nft)$/)) !== null && ref12 !== void 0 ? ref12 : [];
            return userId;
        }
    }
    return '';
};
const getBioDescription = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .bioDescriptionSelector */ .V5)().evaluate();
    return node ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .collectNodeText */ .aW)(node) : '';
};
const getPersonalHomepage = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .personalHomepageSelector */ .IQ)().evaluate();
    return (node === null || node === void 0 ? void 0 : node.getAttribute('href')) || '';
};
const getAvatar = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchAvatarSelector */ .Ls)().evaluate() || (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNFTAvatarSelector */ .dA)().evaluate();
    if (node) {
        var ref;
        const imageURL = (ref = node.getAttribute('src')) !== null && ref !== void 0 ? ref : '';
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

/***/ 39811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ injectPostReplacer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(3993);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(9853);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(32475);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 15 modules
var dom = __webpack_require__(2159);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/context.tsx + 2 modules
var context = __webpack_require__(3497);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(17047);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(3749);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostReplacer.tsx









const useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        overflowWrap: 'break-word'
    }
});
function PostReplacer(props) {
    var ref, ref1;
    const { classes  } = useStyles();
    const postMessage = usePostInfo/* usePostInfoDetails.rawMessage */.H9.rawMessage();
    const author = usePostInfo/* usePostInfoDetails.author */.H9.author();
    const currentProfile = (ref = (0,useActivatedUI/* useCurrentIdentity */.Ud)()) === null || ref === void 0 ? void 0 : ref.identifier;
    const url = usePostInfo/* usePostInfoDetails.url */.H9.url();
    const initialTransformationContext = (0,react.useMemo)(()=>{
        return {
            authorHint: author,
            currentProfile,
            postURL: url === null || url === void 0 ? void 0 : url.toString()
        };
    }, [
        author,
        currentProfile,
        url
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* TextResizeContext.Provider */.FG.Provider, {
            value: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* TypedMessageRenderContext */.w, {
                renderFragments: (ref1 = ui.activatedSocialNetworkUI === null || ui.activatedSocialNetworkUI === void 0 ? void 0 : ui.activatedSocialNetworkUI.customization.componentOverwrite) === null || ref1 === void 0 ? void 0 : ref1.RenderFragments,
                context: initialTransformationContext,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transformer, {
                    ...props,
                    message: postMessage
                })
            })
        })
    }));
}
function Transformer({ message , unzip , zip  }) {
    const after = (0,dom/* useTransformedValue */.CB)(message);
    const shouldReplace = (0,react.useMemo)(()=>{
        const flatten = (0,base/* FlattenTypedMessage */.po)(message, base/* emptyTransformationContext */.vg);
        if (!(0,base/* isTypedMessageEqual */.Hz)(flatten, after)) return true;
        if (hasCashOrHashTag(after)) return true;
        return false;
    }, [
        message,
        after
    ]);
    (0,react.useEffect)(()=>{
        if (shouldReplace) zip === null || zip === void 0 ? void 0 : zip();
        else unzip === null || unzip === void 0 ? void 0 : unzip();
        return ()=>{
            return unzip === null || unzip === void 0 ? void 0 : unzip();
        };
    }, []);
    if (shouldReplace) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* TypedMessageRender */.Ot, {
        message: after
    }));
    return null;
}
function hasCashOrHashTag(message) {
    let result = false;
    function visitor(node) {
        if ((0,base/* isTypedMessageAnchor */.bj)(node)) {
            if (node.category === 'cash' || node.category === 'hash') {
                result = true;
                return 'stop';
            }
        } else (0,base/* forEachTypedMessageChild */.ss)(node, visitor);
    }
    visitor(message);
    (0,base/* forEachTypedMessageChild */.ss)(message, visitor);
    return result;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx







function injectPostReplacer(config = {}, additionalPropsToPostReplacer = ()=>({})
, useCustomStyles = (0,src/* makeStyles */.ZL)()({})) {
    const PostReplacerDefault = /*#__PURE__*/ (0,react.memo)(function PostReplacerDefault(props) {
        const { classes  } = useCustomStyles();
        const additionalProps = additionalPropsToPostReplacer(classes);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacer, {
            ...additionalProps,
            zip: props.zipPost,
            unzip: props.unZipPost
        }));
    });
    const { zipPost , unzipPost  } = config;
    const zipPostF = zipPost || noop/* default */.Z;
    const unzipPostF = unzipPost || noop/* default */.Z;
    return function injectPostReplacer(current, signal) {
        signal.addEventListener('abort', unzipPostF);
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(current.rootElement.afterShadow, {
            key: 'post-replacer',
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacerDefault, {
                zipPost: ()=>zipPostF(current.rootElement)
                ,
                unZipPost: ()=>unzipPostF(current.rootElement)
                ,
                ...current
            })
        }));
    };
}


/***/ })

}]);