"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6608],{

/***/ 26721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ LinkOutIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const LinkOutIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('LinkOutIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12.6667 13.1667H13.1667V12.6667V8.5H13.5V12.6667C13.5 13.1239 13.1239 13.5 12.6667 13.5H3.33333C2.8711 13.5 2.5 13.1255 2.5 12.6667V3.33333C2.5 2.87451 2.8711 2.5 3.33333 2.5H7.5V2.83333H3.33333H2.83333V3.33333V12.6667V13.1667H3.33333H12.6667ZM13.1667 6.16667V4.27333V3.06623L12.3131 3.91978L6.11333 10.1196L5.88044 9.88667L12.0802 3.68689L12.9338 2.83333H11.7267H9.83333V2.5H13.5V6.16667H13.1667Z",
        fill: "#07101B"
    })
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12.6667 13.1667H13.1667V12.6667V8.5H13.5V12.6667C13.5 13.1239 13.1239 13.5 12.6667 13.5H3.33333C2.8711 13.5 2.5 13.1255 2.5 12.6667V3.33333C2.5 2.87451 2.8711 2.5 3.33333 2.5H7.5V2.83333H3.33333H2.83333V3.33333V12.6667V13.1667H3.33333H12.6667ZM13.1667 6.16667V4.27333V3.06623L12.3131 3.91978L6.11333 10.1196L5.88044 9.88667L12.0802 3.68689L12.9338 2.83333H11.7267H9.83333V2.5H13.5V6.16667H13.1667Z",
        fill: "#F5F5F5"
    })
}), undefined, '0 0 16 16');


/***/ }),

/***/ 94926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ TwitterAdaptor)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10126);



if (false) {}
const origins = [
    'https://mobile.twitter.com/*',
    'https://twitter.com/*'
];
const TwitterAdaptor = {
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter,
    declarativePermissions: {
        origins
    },
    homepage: 'https://twitter.com',
    getProfilePage: (userId)=>new URL(`https://twitter.com/${userId.userId}`)
    ,
    getShareLinkURL (message) {
        const url = urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://twitter.com/intent/tweet', {
            text: message
        });
        return new URL(url);
    }
};
(0,_definitions__WEBPACK_IMPORTED_MODULE_2__/* .defineSiteAdaptor */ .$)(TwitterAdaptor);


/***/ }),

/***/ 36358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(72005);
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
    const params = new URLSearchParams(location.search);
    const hashTagMatched = location.pathname.match(/\/hashtag\/([\dA-Za-z]+)/);
    const isTabAvailable = [
        'top'
    ].includes(params.get('f') ?? '');
    if (location.pathname === '/search' && (!params.get('f') || isTabAvailable)) return decodeURIComponent(params.get('q') ?? '');
    else if (hashTagMatched) return '#' + hashTagMatched[1];
    else if (!SAFE_PATHNAMES_ON_TWITTER.includes(location.pathname)) return '';
    return '';
};

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(70802);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../encryption/src/index.ts
var encryption_src = __webpack_require__(66525);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/user.ts
var user = __webpack_require__(70667);
// EXTERNAL MODULE: ./shared/site-adaptors/implementations/twitter.com.ts
var twitter_com = __webpack_require__(94926);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/shared.ts








const getPostURL = (post)=>{
    if (!(post.identifier instanceof src/* ProfileIdentifier */.WO)) return null;
    return new URL(`https://twitter.com/${post.identifier.userId}/status/${post.postId}`);
};
const twitterShared = {
    ...base/* twitterBase */.o,
    utils: {
        isValidUsername: user/* usernameValidator */.S_,
        getPostURL,
        share (text) {
            const url = twitter_com/* TwitterAdaptor.getShareLinkURL */.R.getShareLinkURL(text);
            const width = 700;
            const height = 520;
            const openedWindow = (0,shared_base_ui_src/* openWindow */.xw)(url, 'share', {
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
        createPostContext: (0,create_post_context/* createSNSAdaptorSpecializedPostContext */.k)({
            hasPayloadLike: (text)=>{
                return (0,encryption_src/* TwitterDecoder */.Ym)(text).map(utils/* hasPayloadLike */.sC).unwrapOr(false);
            },
            getURLFromPostIdentifier: getPostURL
        })
    }
};

// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(66909);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(80681);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/openComposeBox.ts


function openComposeBoxTwitter(content, options) {
    src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
        reason: 'timeline',
        open: true,
        content: typeof content === 'string' ? (0,typed_message_base/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(73742);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/selector.ts
var selector = __webpack_require__(38129);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/postBox.ts
var postBox = __webpack_require__(10863);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(21158);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/isMobile.ts
var isMobile = __webpack_require__(8529);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(95175);
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
        if (!(0,postBox/* isCompose */.iv)() && !(0,postBox/* hasEditor */.Wu)() && opt?.reason !== 'reply') {
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
        if (opt?.recover) messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
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
    const path = `/${profile.userId}`;
    document.querySelector(`[href="${path}"]`)?.click();
    setTimeout(()=>{
        // The classic way
        if (!location.pathname.startsWith(path)) location.assign(path);
    }, 400);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/collecting/identity.ts










function recognizeDesktop() {
    const collect = ()=>{
        const handle = (0,selector/* selfInfoSelectors */.qB)().handle.evaluate();
        const nickname = (0,selector/* selfInfoSelectors */.qB)().name.evaluate();
        const avatar = (0,selector/* selfInfoSelectors */.qB)().userAvatar.evaluate();
        return {
            handle,
            nickname,
            avatar
        };
    };
    const watcher = new umd.MutationObserverWatcher((0,selector/* selfInfoSelectors */.qB)().handle);
    return {
        watcher,
        collect
    };
}
function _getNickname(nickname) {
    const nicknameNode = (0,selector/* searchSelfNicknameSelector */.Sn)().closest(1).evaluate();
    let _nickname = '';
    if (!nicknameNode?.childNodes.length) return nickname;
    for (const child of nicknameNode.childNodes){
        const ele = child;
        if (ele.tagName === 'IMG') {
            _nickname += ele.getAttribute('alt') ?? '';
        }
        if (ele.tagName === 'SPAN') {
            _nickname += ele.textContent?.trim();
        }
    }
    return _nickname ?? nickname;
}
function resolveLastRecognizedIdentityInner(ref, cancel) {
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(5000);
        const { collect  } = recognizeDesktop();
        const dataFromScript = collect();
        const avatar = ((0,selector/* searchSelfAvatarSelector */.Kq)().evaluate()?.getAttribute('src') || dataFromScript.avatar) ?? '';
        const handle = (0,selector/* searchSelfHandleSelector */.s8)().evaluate()?.textContent?.trim()?.replace(/^@/, '') || dataFromScript.handle;
        const nickname = _getNickname(dataFromScript.nickname) ?? '';
        if (handle) {
            ref.value = {
                avatar,
                nickname,
                identifier: src/* ProfileIdentifier.of */.WO.of(base/* twitterBase.networkIdentifier */.o.networkIdentifier, handle).unwrapOr(undefined)
            };
        }
    };
    const createWatcher = (selector)=>{
        new umd.MutationObserverWatcher(selector).addListener('onAdd', ()=>assign()
        ).addListener('onChange', ()=>assign()
        ).startWatch({
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                'src'
            ]
        }, cancel);
        window.addEventListener('locationchange', assign, {
            signal: cancel
        });
    };
    assign();
    createWatcher((0,selector/* searchSelfHandleSelector */.s8)());
    createWatcher((0,selector/* searchWatcherAvatarSelector */.Rg)());
}
function resolveLastRecognizedIdentityMobileInner(ref, cancel) {
    const onLocationChange = async ()=>{
        const settings = await web3_providers_src/* Twitter.getSettings */.tL.getSettings();
        const identifier = src/* ProfileIdentifier.of */.WO.of(base/* twitterBase.networkIdentifier */.o.networkIdentifier, settings?.screen_name).unwrapOr(undefined);
        if (identifier && !ref.value.identifier) {
            ref.value = {
                ...ref.value,
                identifier
            };
        }
    };
    onLocationChange();
    window.addEventListener('locationchange', onLocationChange, {
        signal: cancel
    });
}
function resolveCurrentVisitingIdentityInner(ref, cancel) {
    const avatarSelector = (0,selector/* searchAvatarSelector */.Ls)();
    const avatarMetaSelector = (0,selector/* searchAvatarMetaSelector */.pz)();
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(5000);
        const bio = (0,user/* getBio */.IF)();
        const nickname = (0,user/* getNickname */.y)();
        const handle = (0,user/* getTwitterId */.WM)();
        const avatar = (0,user/* getAvatar */.wX)();
        const homepage = await service/* default.Helper.resolveTCOLink */.ZP.Helper.resolveTCOLink((0,user/* getPersonalHomepage */.o1)());
        ref.value = {
            identifier: src/* ProfileIdentifier.of */.WO.of(base/* twitterBase.networkIdentifier */.o.networkIdentifier, handle).unwrapOr(undefined),
            nickname,
            avatar,
            bio,
            homepage: homepage ?? ''
        };
    };
    const createWatcher = (selector)=>{
        new umd.MutationObserverWatcher(selector).addListener('onAdd', ()=>assign()
        ).addListener('onChange', ()=>assign()
        ).startWatch({
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                'src',
                'content'
            ]
        }, cancel);
        window.addEventListener('locationchange', assign, {
            signal: cancel
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
        if (isMobile/* isMobileTwitter */.b) resolveLastRecognizedIdentityMobileInner(this.recognized, cancel);
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
var utils_utils = __webpack_require__(47675);
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
// more about twitter photo url formatting:
// https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/entities-object#photo_format
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

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/utils/fetch.ts





const parseId = (t)=>{
    return (0,utils_utils/* regexMatch */.ZB)(t, /status\/(\d+)/, 1);
};
const postIdParser = (node)=>{
    const idNode = (0,defaultTo/* default */.Z)(node.children[1]?.querySelector('a[href*="status"]'), (0,defaultTo/* default */.Z)(node.parentElement.querySelector('a[href*="status"]'), node.closest('article > div')?.querySelector('a[href*="status"]')));
    const isRetweet = !!node.querySelector('[data-testid=socialContext]');
    const pid = idNode ? parseId(idNode.href) : parseId(location.href);
    // You can't retweet a tweet or a retweet, but only cancel retweeting
    return isRetweet ? `retweet:${pid}` : pid;
};
const postNameParser = (node)=>{
    const tweetElement = node.querySelector('[data-testid="tweet"]') ?? node;
    const name = (0,utils/* collectNodeText */.aW)(tweetElement.querySelector('a:not([target]) > div > div[dir="auto"] > span'));
    const handle = (0,utils/* collectNodeText */.aW)(tweetElement.querySelector('a[tabindex="-1"] span'));
    if (name && handle) {
        return {
            name,
            handle: handle.slice(1)
        };
    }
    const quotedTweetName = (0,utils/* collectNodeText */.aW)(tweetElement.querySelector('div[role="link"] div[dir="auto"] > span'));
    const quotedTweetHandle = (0,utils/* collectNodeText */.aW)(tweetElement.querySelector('div[role="link"] div[dir="ltr"] > span'));
    if (quotedTweetName && quotedTweetHandle) {
        return {
            name: quotedTweetName,
            handle: quotedTweetHandle.slice(1)
        };
    }
    return {
        name: '',
        handle: ''
    };
};
const postAvatarParser = (node)=>{
    const tweetElement = node.querySelector('[data-testid="tweet"]') ?? node;
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
            const href = anchor.getAttribute('title') ?? anchor.getAttribute('href');
            const content = anchor.textContent;
            if (!content) return (0,typed_message_base/* makeTypedMessageEmpty */.WM)();
            return (0,typed_message_base/* makeTypedMessageAnchor */.Jv)(resolve(content), href ?? '', content);
        } else if (node instanceof HTMLImageElement) {
            const image = node;
            const src = image.getAttribute('src');
            const matched = src?.match(/emoji\/v2\/svg\/([\w\-]+)\.svg/);
            if (!matched) return (0,typed_message_base/* makeTypedMessageEmpty */.WM)();
            const points = matched[1].split('-').map((point)=>Number.parseInt(point, 16)
            );
            return (0,typed_message_base/* makeTypedMessageText */.P)((0,utils/* collectTwitterEmoji */._r)(points));
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
    const imgUrls = Array.from(imgNodes).filter((node)=>isQuotedTweet || !node.closest('div[role="link"]')
    ).flatMap((node)=>canonifyImgUrl(node.getAttribute('src') ?? '')
    ).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
};
const postParser = (node)=>{
    return {
        ...postNameParser(node),
        avatar: postAvatarParser(node),
        // FIXME: we get wrong pid for nested tweet
        pid: postIdParser(node),
        messages: postContentMessageParser(node).filter((x)=>!(0,typed_message_base/* isTypedMessageEmpty */.YN)(x)
        )
    };
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(77184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(61305);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(93995);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/MaskIcon.tsx









function Icon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskIcon */.ec, {
        size: props.size,
        style: {
            verticalAlign: 'text-bottom',
            marginLeft: 6
        }
    });
}
function _(main, size, signal) {
    // TODO: for unknown reason the MutationObserverWatcher doesn't work well
    // To reproduce, open a profile and switch to another profile.
    (0,utils_watcher/* startWatch */.f)(new umd.MutationObserverWatcher(main()).useForeach((ele, _, meta)=>{
        let remover = ()=>{};
        const remove = ()=>remover()
        ;
        const check = ()=>{
            ifUsingMask(src/* ProfileIdentifier.of */.WO.of(src/* EnhanceableSite.Twitter */.Jk.Twitter, (0,selector/* bioPageUserIDSelector */.QK)(main).evaluate()).unwrapOr(null)).then(()=>{
                const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                    signal
                });
                root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                    size: size
                }));
                remover = root.destroy;
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
    ]).map((x)=>x.current.parentElement?.parentElement?.previousElementSibling?.querySelector('a[role="link"] > div > div:first-child')
    ).enableSingleMode();
    ifUsingMask(post.author.getCurrentValue()).then(add, remove);
    post.author.subscribe(()=>ifUsingMask(post.author.getCurrentValue()).then(add, remove)
    );
    let remover = ()=>{};
    function add() {
        if (signal?.aborted) return;
        const node = ls.evaluate();
        if (!node) return;
        const proxy = (0,umd.DOMProxy)({
            afterShadowRootInit: {
                mode: 'closed'
            }
        });
        proxy.realCurrent = node;
        const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(proxy.afterShadow, {
            signal
        });
        root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
            size: 24
        }));
        remover = root.destroy;
    }
    function remove() {
        remover();
    }
}
const ifUsingMask = (0,esm/* memoizePromise */.J3)(async (pid)=>{
    if (!pid) throw new Error();
    const p = await service/* default.Identity.queryProfilesInformation */.ZP.Identity.queryProfilesInformation([
        pid
    ]);
    if (!p[0].linkedPersona?.rawPublicKey) throw new Error();
}, (x)=>x
);

// EXTERNAL MODULE: ./src/social-network-adaptor/utils.ts
var social_network_adaptor_utils = __webpack_require__(1250);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/collecting/post.ts















function getPostActionsNode(postNode) {
    if (!postNode) return null;
    return postNode.closest('[data-testid="tweet"]')?.querySelector('[role="group"] > div:last-child');
}
const getParentTweetNode = (node)=>{
    return node.closest('[data-testid="tweet"]');
};
function isQuotedTweet(tweetNode) {
    return tweetNode?.getAttribute('role') === 'link';
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
        const currentProfile = (0,social_network_adaptor_utils/* getCurrentIdentifier */.T)();
        const profileIdentifier = info.author.getCurrentValue();
        if (!profileIdentifier) return;
        service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(profileIdentifier, {
            nickname: info.nickname.getCurrentValue(),
            avatarURL: info.avatarURL.getCurrentValue()?.toString()
        });
        if (currentProfile?.linkedPersona) {
            service/* default.Identity.createNewRelation */.ZP.Identity.createNewRelation(profileIdentifier, currentProfile.linkedPersona);
        }
    }, (info)=>info.author.getCurrentValue()
    );
    new umd.IntervalWatcher((0,selector/* postsContentSelector */.XD)()).useForeach((node, _, proxy)=>{
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
            unwatchPostNodeChange = proxy.on('currentChanged', handleChanged);
        }
        const info = twitterShared.utils.createPostContext({
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
        cancel.addEventListener('abort', info.hasMaskPayload.subscribe(()=>{
            const payload = info.hasMaskPayload.getCurrentValue();
            if (!payload && refs.postMetadataImages.size === 0) return;
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
    }).startWatch(250, cancel);
}
const PostProviderTwitter = {
    posts: social_network/* creator.EmptyPostProviderState */.Du.EmptyPostProviderState(),
    start (cancel) {
        registerPostCollectorInner(this.posts, cancel);
    }
};
function collectVerificationPost(keyword) {
    const userId = IdentityProviderTwitter.recognized.value.identifier || social_network/* globalUIState.profiles.value.0.identifier */.EJ.profiles.value[0].identifier;
    const postNodes = (0,selector/* timelinePostContentSelector */.yR)().evaluate();
    for (const postNode of postNodes){
        const postId = postIdParser(postNode);
        const postContent = postContentMessageParser(postNode);
        const content = postContent.map((x)=>{
            if ((0,typed_message_base/* isTypedMessageText */.Rz)(x)) return x.content ?? '';
            if ((0,typed_message_base/* isTypedMessageAnchor */.bj)(x) && x.category === 'user') return x.content ?? '';
            if ((0,typed_message_base/* isTypedMessageAnchor */.bj)(x) && x.category === 'normal') return (x.content ?? '').replace(/http(.*)\/\//g, '');
            return '';
        }).join('');
        const isVerified = postId && content.toLowerCase().replace(/\r\n|\n|\r/gm, '') === keyword.toLowerCase().replace(/\r\n|\n|\r/gm, '');
        if (isVerified && userId) {
            return new src/* PostIdentifier */._P(userId, postId);
        }
    }
    return null;
}
function collectPostInfo(tweetNode, info, cancel) {
    if (!tweetNode) return;
    if (cancel?.aborted) return;
    const { pid , messages , handle , name , avatar  } = postParser(tweetNode);
    if (!pid) return;
    const postBy = src/* ProfileIdentifier.of */.WO.of(base/* twitterBase.networkIdentifier */.o.networkIdentifier, handle).unwrapOr(null);
    info.postID.value = pid;
    info.postBy.value = postBy;
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
    if (cancel?.aborted) return;
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
            if (cancel?.aborted) return;
            if (!val) return;
            info.postMetadataMentionedLinks.set(x1, val);
        });
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/buttonClasses.js
var buttonClasses = __webpack_require__(14820);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(25105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ./src/utils/theme/index.ts
var utils_theme = __webpack_require__(17784);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/customization/twitter-color-schema.json
var twitter_color_schema = __webpack_require__(88674);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/customization/custom.ts











const themeColorRef = new umd.ValueRef('rgb(29, 161, 242)');
const textColorRef = new umd.ValueRef('rgb(255, 255, 255)');
const backgroundColorRef = new umd.ValueRef('rgb(255, 255, 255)');
const currentTheme = new umd.ValueRef('light');
const PaletteModeProviderTwitter = {
    current: (0,src/* createSubscriptionFromValueRef */._H)(currentTheme),
    start: startWatchThemeColor
};
function startWatchThemeColor(signal) {
    function updateThemeColor() {
        const composeAnchor = (0,selector/* composeAnchorSelector */.QG)().evaluate();
        const anchorText = (0,selector/* composeAnchorTextSelector */.xH)().evaluate();
        const headingText = (0,selector/* headingTextSelector */.ag)().evaluate();
        const themeColor = (0,utils_theme/* getBackgroundColor */.dF)(composeAnchor);
        const textColor = (0,utils_theme/* getForegroundColor */.aF)(anchorText || headingText);
        const backgroundColor = (0,utils_theme/* getBackgroundColor */.dF)(document.body);
        currentTheme.value = (0,utils_theme/* isDark */._T)((0,utils_theme/* fromRGB */.f2)(backgroundColor)) ? 'dark' : 'light';
        if (themeColor) themeColorRef.value = themeColor;
        if (textColor) textColorRef.value = textColor;
        if (backgroundColor) backgroundColorRef.value = backgroundColor;
    }
    new umd.MutationObserverWatcher((0,selector/* composeAnchorSelector */.QG)()).addListener('onAdd', updateThemeColor).addListener('onChange', updateThemeColor).startWatch({
        childList: true,
        subtree: true
    }, signal);
    if (isMobile/* isMobileTwitter */.b) {
        new umd.MutationObserverWatcher((0,selector/* headingTextSelector */.ag)()).addListener('onAdd', updateThemeColor).addListener('onChange', updateThemeColor).startWatch({
            childList: true,
            subtree: true
        }, signal);
    }
}
function useThemeTwitterVariant(baseTheme) {
    const primaryColor = (0,shared_base_ui_src/* useValueRef */.E)(themeColorRef);
    const primaryContrastColor = (0,shared_base_ui_src/* useValueRef */.E)(textColorRef);
    const backgroundColor = (0,shared_base_ui_src/* useValueRef */.E)(backgroundColorRef);
    return (0,react.useMemo)(()=>{
        const primaryColorRGB = (0,utils_theme/* fromRGB */.f2)(primaryColor);
        const primaryContrastColorRGB = (0,utils_theme/* fromRGB */.f2)(primaryContrastColor);
        (0,immer_esm/* setAutoFreeze */.Fl)(false);
        const TwitterTheme = (0,immer_esm/* default */.ZP)(baseTheme, (theme)=>{
            const isDark1 = theme.palette.mode === 'dark';
            theme.palette.primary = {
                light: (0,utils_theme/* toRGB */.xr)((0,utils_theme/* shade */.wj)(primaryColorRGB, 10)),
                main: (0,utils_theme/* toRGB */.xr)(primaryColorRGB),
                dark: (0,utils_theme/* toRGB */.xr)((0,utils_theme/* shade */.wj)(primaryColorRGB, -10)),
                contrastText: (0,utils_theme/* toRGB */.xr)(primaryContrastColorRGB)
            };
            const themeName = isDark1 ? 'dark' : 'light';
            const colorSchema = twitter_color_schema[themeName];
            const colors = Object.keys(colorSchema);
            colors.forEach((color)=>{
                if (typeof theme.palette[color] === 'object') {
                    Object.assign(theme.palette[color] ?? {}, colorSchema[color]);
                }
            });
            theme.palette.maskColor = colorSchema.maskColor;
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
                            size: 'small'
                        },
                        style: {
                            padding: '8px 12px',
                            borderRadius: 6,
                            fontSize: 12,
                            lineHeight: '16px'
                        }
                    },
                    {
                        props: {
                            size: 'medium'
                        },
                        style: {
                            padding: '11px 18px',
                            borderRadius: 8,
                            fontSize: 14,
                            lineHeight: '18px'
                        }
                    },
                    {
                        props: {
                            size: 'large'
                        },
                        style: {
                            padding: '14px 20px',
                            borderRadius: 10,
                            fontSize: 16,
                            lineHeight: '20px'
                        }
                    },
                    {
                        props: {
                            variant: 'outlined'
                        },
                        style: {
                            background: theme.palette.maskColor?.thirdMain,
                            color: theme.palette.text.primary,
                            ['&:hover']: {
                                backgroundColor: theme.palette.background.paper,
                                border: 'none',
                                boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(255, 255, 255, 0.1)' : '0 8px 25px rgba(0, 0, 0, 0.1)'
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                opacity: 0.4,
                                color: theme.palette.text.primary
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'flat'
                        },
                        style: {
                            background: theme.palette.maskColor?.thirdMain,
                            color: theme.palette.text.primary,
                            ['&:hover']: {
                                backgroundColor: theme.palette.background.paper,
                                boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(255, 255, 255, 0.1)' : '0 8px 25px rgba(0, 0, 0, 0.1)'
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                opacity: 0.4,
                                color: theme.palette.text.primary
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'contained'
                        },
                        style: {
                            backgroundColor: theme.palette.text.primary,
                            ['&:hover']: {
                                backgroundColor: theme.palette.text.primary,
                                boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(255, 255, 255, 0.2)' : '0 8px 25px rgba(0, 0, 0, 0.2)'
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                background: theme.palette.maskColor?.primaryMain,
                                opacity: 0.6,
                                color: theme.palette.background.paper
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text'
                        },
                        style: {
                            color: theme.palette.text.primary,
                            ['&:hover']: {
                                background: theme.palette.maskColor?.thirdMain
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                opacity: 0.4
                            }
                        }
                    },
                    // info button
                    {
                        props: {
                            variant: 'contained',
                            color: 'info'
                        },
                        style: {
                            background: theme.palette.maskColor?.primary,
                            color: theme.palette.maskColor?.white,
                            ['&:hover']: {
                                background: theme.palette.maskColor?.primary,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.3).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.3).toRgbString(),
                                opacity: 0.6
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'flat',
                            color: 'info'
                        },
                        style: {
                            backgroundColor: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.1).toRgbString(),
                            color: theme.palette.maskColor?.primary,
                            ['&:hover']: {
                                background: theme.palette.mode === 'dark' ? (0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.3).toRgbString() : theme.palette.maskColor?.white,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.1).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                color: theme.palette.maskColor?.primary,
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.1).toRgbString(),
                                opacity: 0.4
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text',
                            color: 'info'
                        },
                        style: {
                            color: theme.palette.maskColor?.primary,
                            ['&:hover']: {
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.1).toRgbString()
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                color: theme.palette.maskColor?.primary,
                                opacity: 0.4
                            }
                        }
                    },
                    // warn button
                    {
                        props: {
                            variant: 'contained',
                            color: 'warning'
                        },
                        style: {
                            backgroundColor: theme.palette.maskColor?.warn,
                            color: theme.palette.maskColor?.white,
                            ['&:hover']: {
                                background: theme.palette.maskColor?.warn,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.maskColor?.warn).setAlpha(0.3).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.warn).setAlpha(0.5).toRgbString(),
                                opacity: 0.6
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'flat',
                            color: 'warning'
                        },
                        style: {
                            backgroundColor: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.warn).setAlpha(0.1).toRgbString(),
                            color: theme.palette.maskColor?.warn,
                            ['&:hover']: {
                                background: theme.palette.mode === 'dark' ? (0,entry/* parseColor */.lu)(theme.palette.maskColor?.warn).setAlpha(0.3).toRgbString() : theme.palette.maskColor?.white,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.maskColor?.warn).setAlpha(0.1).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                color: theme.palette.maskColor?.warn,
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.warn).setAlpha(0.1).toRgbString(),
                                opacity: 0.4
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text',
                            color: 'warning'
                        },
                        style: {
                            color: theme.palette.maskColor?.warn,
                            ['&:hover']: {
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.warn).setAlpha(0.1).toRgbString()
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                color: theme.palette.maskColor?.warn,
                                opacity: 0.4
                            }
                        }
                    },
                    // success button
                    {
                        props: {
                            variant: 'contained',
                            color: 'success'
                        },
                        style: {
                            background: theme.palette.maskColor?.success,
                            color: theme.palette.maskColor?.white,
                            ['&:hover']: {
                                background: theme.palette.maskColor?.success,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.maskColor?.success).setAlpha(0.3).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.success).setAlpha(0.5).toRgbString(),
                                opacity: 0.6
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'flat',
                            color: 'success'
                        },
                        style: {
                            background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.success).setAlpha(0.1).toRgbString(),
                            color: theme.palette.maskColor?.warn,
                            ['&:hover']: {
                                background: theme.palette.mode === 'dark' ? (0,entry/* parseColor */.lu)(theme.palette.maskColor?.success).setAlpha(0.3).toRgbString() : theme.palette.maskColor?.white,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.maskColor?.success).setAlpha(0.1).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                color: theme.palette.maskColor?.success,
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.success).setAlpha(0.1).toRgbString(),
                                opacity: 0.4
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text',
                            color: 'success'
                        },
                        style: {
                            color: theme.palette.maskColor?.success,
                            ['&:hover']: {
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.success).setAlpha(0.1).toRgbString()
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                color: theme.palette.maskColor?.success,
                                opacity: 0.4
                            }
                        }
                    },
                    // error button
                    {
                        props: {
                            variant: 'contained',
                            color: 'error'
                        },
                        style: {
                            backgroundColor: theme.palette.maskColor?.danger,
                            color: theme.palette.maskColor?.white,
                            ['&:hover']: {
                                background: theme.palette.maskColor?.danger,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.maskColor?.danger).setAlpha(0.3).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.danger).setAlpha(0.5).toRgbString(),
                                opacity: 0.6
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'flat',
                            color: 'error'
                        },
                        style: {
                            backgroundColor: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.danger).setAlpha(0.1).toRgbString(),
                            color: theme.palette.maskColor?.danger,
                            ['&:hover']: {
                                background: theme.palette.mode === 'dark' ? (0,entry/* parseColor */.lu)(theme.palette.maskColor?.danger).setAlpha(0.3).toRgbString() : theme.palette.maskColor?.white,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.maskColor?.danger).setAlpha(0.1).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                color: theme.palette.maskColor?.danger,
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.danger).setAlpha(0.1).toRgbString(),
                                opacity: 0.4
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text',
                            color: 'error'
                        },
                        style: {
                            color: theme.palette.maskColor?.danger,
                            ['&:hover']: {
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.danger).setAlpha(0.1).toRgbString()
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                color: theme.palette.maskColor?.danger,
                                opacity: 0.4
                            }
                        }
                    },
                    // rounded button
                    {
                        props: {
                            variant: 'roundedFlat'
                        },
                        style: {
                            borderRadius: 99,
                            background: theme.palette.maskColor?.thirdMain,
                            color: theme.palette.text.primary,
                            ['&:hover']: {
                                backgroundColor: theme.palette.background.paper,
                                boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(255, 255, 255, 0.1)' : '0 8px 25px rgba(0, 0, 0, 0.1)'
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                opacity: 0.4,
                                color: theme.palette.text.primary
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'roundedContained'
                        },
                        style: {
                            backgroundColor: theme.palette.text.primary,
                            borderRadius: 99,
                            ['&:hover']: {
                                backgroundColor: theme.palette.text.primary,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.text.primary).setAlpha(0.3).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                background: theme.palette.maskColor?.primaryMain,
                                opacity: 0.6,
                                color: theme.palette.background.paper
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'roundedText'
                        },
                        style: {
                            color: theme.palette.text.primary,
                            borderRadius: 99,
                            ['&:hover']: {
                                background: theme.palette.maskColor?.thirdMain
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                opacity: 0.4
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'roundedContained',
                            color: 'info'
                        },
                        style: {
                            background: theme.palette.maskColor?.primary,
                            color: theme.palette.maskColor?.white,
                            borderRadius: 99,
                            ['&:hover']: {
                                background: theme.palette.maskColor?.primary,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.3).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.3).toRgbString(),
                                opacity: 0.6
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'roundedFlat',
                            color: 'info'
                        },
                        style: {
                            backgroundColor: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.1).toRgbString(),
                            color: theme.palette.maskColor?.primary,
                            borderRadius: 99,
                            ['&:hover']: {
                                background: theme.palette.mode === 'dark' ? (0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.3).toRgbString() : theme.palette.maskColor?.white,
                                boxShadow: `0 8px 25px ${(0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.1).toRgbString()}`
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                color: theme.palette.maskColor?.primary,
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.1).toRgbString(),
                                opacity: 0.4
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'roundedText',
                            color: 'info'
                        },
                        style: {
                            color: theme.palette.maskColor?.primary,
                            borderRadius: 99,
                            ['&:hover']: {
                                background: (0,entry/* parseColor */.lu)(theme.palette.maskColor?.primary).setAlpha(0.1).toRgbString()
                            },
                            [`&.${buttonClasses/* default.disabled */.Z.disabled}`]: {
                                color: theme.palette.maskColor?.primary,
                                opacity: 0.4
                            }
                        }
                    }, 
                ],
                styleOverrides: {
                    root: {
                        textTransform: 'initial',
                        fontWeight: 700,
                        color: theme.palette.background.paper
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
                            backgroundColor: `${theme.palette.primary.main} !important`,
                            opacity: 0.9
                        }
                    }
                }
            };
            theme.components.MuiBackdrop = {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.action.mask
                    },
                    invisible: {
                        opacity: '0 !important'
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
                        filter: `drop-shadow(0 0 16px ${theme.palette.background.messageShadow});`
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
var ToolboxUnstyled = __webpack_require__(77126);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(836);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(23228);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(52775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ./src/components/GuideStep/index.tsx
var GuideStep = __webpack_require__(97997);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/ToolboxHint_UI.tsx






const twitterBreakPoint = 1265;
const Container = (0,styled/* default */.ZP)('div')`
    cursor: pointer;
    padding: 4px 0;
`;
const ListItem = (0,styled/* default */.ZP)(ListItemButton/* default */.Z)`
    border-radius: 9999px;
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
function ToolboxHintAtTwitter(props) {
    const mini = (0,useMediaQuery/* default */.Z)(`(max-width: ${twitterBreakPoint}px)`);
    const { textMarginLeft , itemPadding , iconSize  } = useSideBarNativeItemStyleVariants();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxUnstyled/* ToolboxHintUnstyled */.z, {
        iconSize: Number(iconSize.replace('px', '')) - 1,
        iconFontSize: "1.75rem",
        mini: mini,
        ListItemIcon: ToolboxHint_UI_Icon,
        Typography: ({ children  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Text, {
                marginLeft: textMarginLeft ?? '20px',
                children: children
            })
        ,
        ListItemButton: ({ children , onClick  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem, {
                style: {
                    padding: `6px ${itemPadding ?? '11px'}`
                },
                onClick: onClick,
                children: children
            })
        ,
        Container: Container,
        category: props.category
    });
}
function ProfileLinkAtTwitter() {
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(GuideStep/* default */.Z, {
        step: 3,
        total: 4,
        tip: t('user_guide_tip_3'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            sx: {
                position: 'absolute',
                left: 0,
                right: 0,
                width: '100%',
                height: '100%'
            }
        })
    });
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/ToolboxHint.tsx







const SideBarNativeItemTextMarginLeftRef = new umd.ValueRef('20px');
const SideBarNativeItemIconSize = new umd.ValueRef('24px');
const SideBarNativeItemPaddingRef = new umd.ValueRef('11px');
function injectToolboxHintAtTwitter(signal, category) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* toolBoxInSideBarSelector */.ch)()).addListener('onAdd', updateStyle).addListener('onChange', updateStyle).startWatch({
        childList: true,
        subtree: true
    }, signal);
    function updateStyle() {
        const SideBarNativeItem = document.querySelector('[role="banner"] [role="navigation"] > div > div');
        const SideBarNativeItemText = document.querySelector('[role="banner"] [role="navigation"] > div > div > div[dir="auto"]');
        const SideBarNativeItemIcon = document.querySelector('[role="banner"] [role="navigation"] > div > div > div:first-child');
        const SideBarNativeItemStyle = SideBarNativeItem ? window.getComputedStyle(SideBarNativeItem) : null;
        const SideBarNativeItemTextStyle = SideBarNativeItemText ? window.getComputedStyle(SideBarNativeItemText) : null;
        const SideBarNativeItemIconStyle = SideBarNativeItemIcon ? window.getComputedStyle(SideBarNativeItemIcon) : null;
        SideBarNativeItemPaddingRef.value = SideBarNativeItemStyle?.padding ?? '11px';
        SideBarNativeItemIconSize.value = SideBarNativeItemIconStyle?.width ?? '24px';
        SideBarNativeItemTextMarginLeftRef.value = SideBarNativeItemTextStyle?.marginLeft ?? '20px';
    }
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHintAtTwitter, {
        category: category
    }));
    injectProfile(signal);
}
function useSideBarNativeItemStyleVariants() {
    return {
        textMarginLeft: (0,shared_base_ui_src/* useValueRef */.E)(SideBarNativeItemTextMarginLeftRef),
        itemPadding: (0,shared_base_ui_src/* useValueRef */.E)(SideBarNativeItemPaddingRef),
        iconSize: (0,shared_base_ui_src/* useValueRef */.E)(SideBarNativeItemIconSize)
    };
}
function injectProfile(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* sideBarProfileSelector */.WU)());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.beforeShadow, {
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

const i18NOverwriteTwitter = {
    mask: {}
};
const resource = languages;
for (const language of Object.keys(resource)){
    for (const key of Object.keys(resource[language])){
        i18NOverwriteTwitter.mask[key] ??= {};
        i18NOverwriteTwitter.mask[key][language] = resource[language][key];
    }
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/SearchResultBox.tsx
var SearchResultBox = __webpack_require__(16834);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/SearchResultBox.tsx






function injectSearchResultBoxAtTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchResultHeadingSelector */.R9)());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultBox/* SearchResultBox */.L, {}));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/color@4.2.3/node_modules/color/index.js
var color = __webpack_require__(88106);
var color_default = /*#__PURE__*/__webpack_require__.n(color);
// EXTERNAL MODULE: ./src/components/InjectedComponents/ProfileTab.tsx
var ProfileTab = __webpack_require__(26292);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/ProfileTab.tsx








function getStyleProps() {
    const EMPTY_STYLE = {};
    const eleTab = (0,selector/* searchProfileTabSelector */.Fe)().evaluate()?.querySelector('div');
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
const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
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
async function hideTwitterActivatedContent() {
    const eleTab = (0,selector/* searchProfileTabSelector */.Fe)().evaluate()?.querySelector('div');
    const loseConnectionEle = (0,selector/* searchProfileTabLoseConnectionPageSelector */.zA)().evaluate();
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
    if (loseConnectionEle) return;
    // hide the empty list indicator on the page
    const eleEmpty = (0,selector/* searchProfileEmptySelector */.YX)().evaluate();
    if (eleEmpty) eleEmpty.style.display = 'none';
    // hide the content page
    await (0,utils/* untilElementAvailable */.ft)((0,selector/* searchProfileTabPageSelector */.xx)());
    const elePage = (0,selector/* searchProfileTabPageSelector */.xx)().evaluate();
    if (elePage) {
        elePage.style.visibility = 'hidden';
        elePage.style.height = '0';
    }
}
function resetTwitterActivatedContent() {
    const eleTab = (0,selector/* searchProfileTabSelector */.Fe)().evaluate()?.querySelector('div');
    const loseConnectionEle = (0,selector/* searchProfileTabLoseConnectionPageSelector */.zA)().evaluate();
    if (!eleTab) return;
    const tabList = (0,selector/* searchProfileTabListSelector */.JN)().evaluate();
    tabList.map((v)=>{
        const _v = v.querySelector('div');
        _v.style.color = '';
        const line = v.querySelector('div > div');
        line.style.display = '';
    });
    if (loseConnectionEle) return;
    const eleEmpty = (0,selector/* searchProfileEmptySelector */.YX)().evaluate();
    if (eleEmpty) eleEmpty.style.display = '';
    const elePage = (0,selector/* searchProfileTabPageSelector */.xx)().evaluate();
    if (elePage) {
        elePage.style.visibility = 'visible';
        elePage.style.height = 'auto';
    }
}
function ProfileTabAtTwitter() {
    const { classes  } = useStyles();
    const [hidden, setHidden] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        return utils/* MaskMessages.events.profileTabHidden.on */.ql.events.profileTabHidden.on((data)=>{
            setHidden(data.hidden);
        });
    }, []);
    return hidden ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTab/* ProfileTab */.D, {
        title: "Web3",
        classes: classes,
        reset: resetTwitterActivatedContent,
        clear: hideTwitterActivatedContent,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.line
        })
    });
}
function injectProfileTabAtTwitter(signal) {
    let tabInjected = false;
    const contentWatcher = new umd.MutationObserverWatcher((0,selector/* searchProfileTabPageSelector */.xx)()).useForeach(()=>{
        const elePage = (0,selector/* searchProfileTabPageSelector */.xx)().evaluate();
        if (elePage && !tabInjected) {
            const watcher = new umd.MutationObserverWatcher((0,selector/* searchProfileTabListLastChildSelector */.L2)());
            (0,utils/* startWatch */.fy)(watcher, signal);
            (0,utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
                signal
            }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabAtTwitter, {}));
            tabInjected = true;
        }
    });
    (0,utils/* startWatch */.fy)(contentWatcher, signal);
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/ProfileTabContent.tsx
var ProfileTabContent = __webpack_require__(91381);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/ProfileTabContent.tsx






function injectProfileTabContentForEmptyState(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchProfileEmptySelector */.YX)());
    (0,utils/* startWatch */.fy)(watcher, signal);
    (0,utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContentAtTwitter, {}));
}
function injectProfileTabContentState(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchProfileTabPageSelector */.xx)());
    (0,utils/* startWatch */.fy)(watcher, signal);
    (0,utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContentAtTwitter, {}));
}
function injectProfileTabContentAtTwitter(signal) {
    const contentLoseConnectionWatcher = new umd.MutationObserverWatcher((0,selector/* searchProfileTabLoseConnectionPageSelector */.zA)()).useForeach(()=>utils/* MaskMessages.events.profileTabHidden.sendToLocal */.ql.events.profileTabHidden.sendToLocal({
            hidden: true
        })
    );
    const contentContentWatcher = new umd.MutationObserverWatcher((0,selector/* searchProfileTabPageSelector */.xx)()).useForeach(()=>utils/* MaskMessages.events.profileTabHidden.sendToLocal */.ql.events.profileTabHidden.sendToLocal({
            hidden: false
        })
    );
    const ContentForEmptyWatcher = new umd.MutationObserverWatcher((0,selector/* searchProfileEmptySelector */.YX)()).useForeach(()=>utils/* MaskMessages.events.profileTabHidden.sendToLocal */.ql.events.profileTabHidden.sendToLocal({
            hidden: false
        })
    );
    (0,utils/* startWatch */.fy)(contentLoseConnectionWatcher, signal);
    (0,utils/* startWatch */.fy)(contentContentWatcher, signal);
    (0,utils/* startWatch */.fy)(ContentForEmptyWatcher, signal);
    injectProfileTabContentForEmptyState(signal);
    injectProfileTabContentState(signal);
}
function ProfileTabContent_getStyleProps() {
    const newTweetButton = (0,selector/* searchNewTweetButtonSelector */.r$)().evaluate();
    return {
        backgroundColor: newTweetButton ? window.getComputedStyle(newTweetButton).backgroundColor : undefined,
        fontFamily: newTweetButton?.firstChild ? window.getComputedStyle(newTweetButton.firstChild).fontFamily : undefined,
        isPositionStatic: location.pathname.endsWith('/likes') || location.pathname.endsWith('/media')
    };
}
const ProfileTabContent_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const props = ProfileTabContent_getStyleProps();
    return {
        root: {
            position: props.isPositionStatic ? 'static' : 'absolute',
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
                color: (0,entry/* getMaskColor */.nb)(theme).textPrimary
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContent/* ProfileTabContent */.d, {
        classes: classes
    });
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx + 1 modules
var PostReplacer = __webpack_require__(33262);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostReplacer.tsx

function resolveLangNode(node) {
    return node.hasAttribute('lang') ? node : node.querySelector('[lang]') ?? node.parentElement?.querySelector('[lang]');
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
var PageInspector = __webpack_require__(78583);
// EXTERNAL MODULE: ./src/components/shared/NotSetupYetPrompt.tsx + 1 modules
var NotSetupYetPrompt = __webpack_require__(83458);
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

// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 20 modules
var Composition = __webpack_require__(65902);
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
var PostDialogHint = __webpack_require__(43017);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.8.0_2f7y4c3dlygqpuszd3d43oslwi/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(92756);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(5903);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostDialogHint.tsx















const PostDialogHint_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        iconButton: {
            '&:hover': {
                background: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, 0.1)
            }
        },
        tooltip: {
            marginTop: '2px !important',
            borderRadius: 2,
            padding: 4,
            background: entry/* MaskColorVar.twitterTooltipBg */.ZN.twitterTooltipBg,
            color: entry/* MaskColorVar.white */.ZN.white
        }
    })
);
function injectPostDialogHintAtTwitter(signal) {
    const emptyNode = document.createElement('div');
    renderPostDialogHintTo('timeline', (0,selector/* searchReplyToolbarSelector */.NN)(), signal);
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
    const { t  } = (0,utils/* useI18N */.M1)();
    const onHintButtonClicked = (0,react.useCallback)(()=>{
        const content = settings/* sayHelloShowed */.Pg[base/* twitterBase.networkIdentifier */.o.networkIdentifier].value ? undefined : (0,typed_message_base/* makeTypedMessageText */.P)(t('setup_guide_say_hello_content') + t('setup_guide_say_hello_follow', {
            account: '@realMaskNetwork'
        }));
        src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
            reason: (0,selector/* isReplyPageSelector */.tk)() ? 'reply' : reason,
            open: true,
            content
        });
        settings/* sayHelloShowed */.Pg[base/* twitterBase.networkIdentifier */.o.networkIdentifier].value = true;
    }, [
        reason,
        selector/* isReplyPageSelector */.tk
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
        disableGuideTip: reason === 'popup',
        classes: {
            iconButton: classes.iconButton,
            tooltip: classes.tooltip
        },
        size: 20,
        onHintButtonClicked: onHintButtonClicked,
        tooltip: {
            disabled: false
        }
    });
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/inject.tsx


function injectPostBoxComposed(signal) {
    injectPostDialogAtTwitter(signal);
    injectPostDialogHintAtTwitter(signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx + 7 modules
var StartSetupGuide = __webpack_require__(4154);
// EXTERNAL MODULE: ./src/social-network/defaults/automation/AttachImageToComposition.ts
var AttachImageToComposition = __webpack_require__(89523);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostInspector.tsx + 17 modules
var PostInspector = __webpack_require__(10327);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostInspector.tsx
/* eslint @dimensiondev/unicode/specific-set: ["error", { "only": "code" }] */ 

function injectPostInspectorAtTwitter(signal, current) {
    return (0,PostInspector/* injectPostInspectorDefault */.J)({
        zipPost (node) {
            const contentContainer = node.current.parentElement;
            if (!contentContainer) return;
            const content = contentContainer.querySelector('[lang]');
            if (!content) return;
            for (const a of content.querySelectorAll('a')){
                if ((0,encryption_src/* TwitterDecoder */.Ym)(a.title).some) hideDOM(a);
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
            const parent = content.parentElement?.nextElementSibling;
            if (parent && matches(parent.innerText)) {
                parent.style.height = '0';
                parent.style.overflow = 'hidden';
            }
            const cardWrapper = contentContainer.parentElement?.querySelector('[data-testid="card.wrapper"]');
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

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostActions.tsx


const ActionsRenderer = (0,entry_content_script/* createInjectHooksRenderer */.EK)(entry_content_script/* useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */.Pz.visibility.useNotMinimalMode, (plugin)=>plugin.PostActions
);
function PostActions() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionsRenderer, {});
}

;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostActions.tsx





function createPostActionsInjector() {
    return function injectPostActions(current, signal) {
        const jsx = /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostActions, {})
        });
        if (current.actionsElement) {
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(current.actionsElement.afterShadow, {
                key: 'post-actions',
                signal
            });
            if (current.actionsElement?.realCurrent?.parentNode) {
                const actionsContainer = current.actionsElement.realCurrent.parentNode;
                actionsContainer.style.maxWidth = '100%';
            }
            root.render(jsx);
            return root.destroy;
        }
        return noop/* default */.Z;
    };
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostActions/index.tsx


function injectPostActionsAtTwitter(signal, postInfo) {
    if (!shared/* Flags.post_actions_enabled */.vU.post_actions_enabled) return;
    const injector = createPostActionsInjector();
    return injector(postInfo, signal);
}

// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(23397);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadge.tsx + 1 modules
var NFTBadge = __webpack_require__(99089);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(18940);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(95736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(40661);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/RainbowBox.tsx
var RainbowBox = __webpack_require__(36199);
// EXTERNAL MODULE: ./src/plugins/Avatar/constants.ts
var constants = __webpack_require__(80624);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/usePersonaNFTAvatar.ts
var usePersonaNFTAvatar = __webpack_require__(15495);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/useWallet.ts
var useWallet = __webpack_require__(17321);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/index.ts + 3 modules
var hooks = __webpack_require__(15716);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(58248);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatar.tsx
var NFTAvatar = __webpack_require__(24926);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/NFTAvatarInTwitter.tsx























function injectNFTAvatarInTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchTwitterAvatarSelector */.p$)());
    (0,utils/* startWatch */.fy)(watcher, signal);
    (0,utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInTwitter, {}));
}
const NFTAvatarInTwitter_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
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
    const { t  } = (0,utils/* useI18N */.M1)();
    const rainBowElement = (0,react.useRef)();
    const borderElement = (0,react.useRef)();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const { value: _avatar  } = (0,usePersonaNFTAvatar/* usePersonaNFTAvatar */.O)(identity.identifier?.userId ?? '', (0,user/* getAvatarId */.yd)(identity.avatar ?? ''), constants/* RSS3_KEY_SNS.TWITTER */.vu.TWITTER);
    const [avatar1, setAvatar] = (0,react.useState)();
    const account = (0,entry_web3/* useAccount */.mA)();
    const { loading: loadingWallet , value: storage  } = (0,useWallet/* useWallet */.O)(_avatar?.userId ?? '');
    const { value: nftInfo , loading: loadingNFTInfo  } = (0,hooks/* useNFT */.el)(storage?.address ?? account, _avatar?.address ?? '', _avatar?.tokenId ?? '', _avatar?.pluginId ?? base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, _avatar?.chainId ?? types/* ChainId.Mainnet */.a_.Mainnet);
    const windowSize = (0,useWindowSize/* default */.Z)();
    const location = (0,useLocation/* default */.Z)();
    const showAvatar = (0,react.useMemo)(()=>(0,user/* getAvatarId */.yd)(identity.avatar ?? '') === _avatar?.avatarId && _avatar.avatarId
    , [
        _avatar?.avatarId,
        identity.avatar
    ]);
    const size = (0,react.useMemo)(()=>{
        const ele = (0,selector/* searchTwitterAvatarSelector */.p$)().evaluate()?.querySelector('img');
        if (ele) {
            const style = window.getComputedStyle(ele);
            return Number.parseInt(style.width.replace('px', '') ?? 0, 10);
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
    const openConfirmDialog = (0,shared_src/* useShowConfirm */.Lm)();
    const [, saveNFTAvatar] = (0,hooks/* useSaveNFTAvatar */.dw)();
    // After the avatar is set, it cannot be saved immediately, and must wait until the avatar of twitter is updated
    (0,useAsync/* default */.Z)(async ()=>{
        if (!account || !NFTAvatar/* NFTAvatar */.R) return;
        if (!identity.identifier) return;
        if (!NFTEvent?.address || !NFTEvent?.tokenId) {
            setAvatar(undefined);
            utils/* MaskMessages.events.NFTAvatarTimelineUpdated.sendToAll */.ql.events.NFTAvatarTimelineUpdated.sendToAll({
                userId: identity.identifier.userId,
                avatarId: (0,user/* getAvatarId */.yd)(identity.avatar ?? ''),
                address: '',
                tokenId: '',
                schema: types/* SchemaType.ERC721 */.XQ.ERC721,
                pluginId: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                chainId: types/* ChainId.Mainnet */.a_.Mainnet
            });
            return;
        }
        const avatar = await saveNFTAvatar(account, {
            ...NFTEvent,
            avatarId: (0,user/* getAvatarId */.yd)(identity.avatar ?? '')
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
        openConfirmDialog({
            title: t('plugin_avatar_setup_share_title'),
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                        contractAddress: avatar.address,
                        tokenId: avatar.tokenId
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        mt: 3,
                        fontSize: "18px",
                        children: t('plugin_avatar_setup_success')
                    })
                ]
            }),
            confirmLabel: t('share'),
            onSubmit () {
                ui.activatedSocialNetworkUI.utils.share?.(t('plugin_avatar_setup_pfp_share'));
            }
        });
        setAvatar(avatar);
        utils/* MaskMessages.events.NFTAvatarTimelineUpdated.sendToAll */.ql.events.NFTAvatarTimelineUpdated.sendToAll(avatar ?? {
            userId: identity.identifier.userId,
            avatarId: (0,user/* getAvatarId */.yd)(identity.avatar ?? ''),
            address: '',
            tokenId: '',
            schema: types/* SchemaType.ERC721 */.XQ.ERC721,
            pluginId: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
            chainId: types/* ChainId.Mainnet */.a_.Mainnet
        });
        setNFTEvent(undefined);
    }, [
        identity.avatar,
        openConfirmDialog,
        t,
        saveNFTAvatar
    ]);
    (0,react.useEffect)(()=>{
        setAvatar(_avatar);
    }, [
        _avatar
    ]);
    (0,react.useEffect)(()=>{
        return utils/* MaskMessages.events.NFTAvatarUpdated.on */.ql.events.NFTAvatarUpdated.on((data)=>onUpdate(data)
        );
    }, [
        onUpdate
    ]);
    (0,react.useEffect)(()=>{
        if (!showAvatar) return;
        const linkDom = (0,selector/* searchTwitterAvatarLinkSelector */.N7)().evaluate();
        if (linkDom?.firstElementChild && linkDom.childNodes.length === 4) {
            const linkParentDom = linkDom.closest('div');
            if (linkParentDom) linkParentDom.style.overflow = 'visible';
            // create rainbow shadow border
            if (linkDom.lastElementChild?.tagName !== 'STYLE') {
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
                    border: 0 solid #00f8ff;
                }
            `;
                rainBowElement.current = linkDom.firstElementChild.nextElementSibling;
                linkDom.firstElementChild.nextElementSibling?.classList.add('rainbowBorder');
                linkDom.appendChild(style);
            }
        }
        return ()=>{
            if (linkDom?.lastElementChild?.tagName === 'STYLE') {
                linkDom.removeChild(linkDom.lastElementChild);
            }
            if (borderElement.current && linkDom?.firstElementChild !== borderElement.current) {
                linkDom?.insertBefore(borderElement.current, linkDom.firstChild);
            }
            if (rainBowElement.current) {
                rainBowElement.current?.classList.remove('rainbowBorder');
            }
        };
    }, [
        location.pathname,
        showAvatar
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        const linkParentDom = (0,selector/* searchTwitterAvatarLinkSelector */.N7)().evaluate()?.closest('div');
        if (!_avatar || !linkParentDom || !showAvatar) return;
        const handler = ()=>{
            if (!nftInfo?.permalink) return;
            (0,shared_base_ui_src/* openWindow */.xw)(nftInfo?.permalink);
        };
        linkParentDom.addEventListener('click', handler);
        return ()=>{
            linkParentDom.removeEventListener('click', handler);
        };
    }, [
        _avatar,
        showAvatar,
        nftInfo
    ]);
    if (!_avatar || !size || loadingWallet || loadingNFTInfo) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: showAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadge/* NFTBadge */.A, {
            nftInfo: nftInfo,
            borderSize: 5,
            hasRainbow: true,
            avatar: _avatar,
            size: size,
            width: 15,
            classes: {
                root: classes.root,
                text: classes.text,
                icon: classes.icon
            }
        }) : null
    });
}

// EXTERNAL MODULE: ./src/plugins/Tips/components/index.ts + 14 modules
var components = __webpack_require__(11940);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/Tip/ProfileTipButton.tsx








function injectOpenTipButtonOnProfile(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* profileFollowButtonSelector */.at)());
    (0,utils/* startWatch */.fy)(watcher, signal);
    (0,utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(OpenTipDialog, {}));
}
const ProfileTipButton_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        button: {
            height: props.size,
            width: props.size,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.mode === 'dark' ? '#536471' : '#d2dbe0',
            borderRadius: 999,
            marginRight: theme.spacing(1),
            marginBottom: props.marginBottom,
            verticalAlign: 'top',
            color: theme.palette.text.primary,
            '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(239,243,244,0.1)' : 'rgba(15,20,25,0.1)'
            }
        },
        label: {
            fontSize: 14,
            marginLeft: theme.spacing(0.5)
        }
    })
);
function OpenTipDialog() {
    const [style, setStyle] = (0,react.useState)({
        size: 34,
        fontSize: 14,
        marginBottom: 11
    });
    const visitingPersona = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const setStyleFromEditProfileSelector = ()=>{
        const menuButton = (0,selector/* profileMenuButtonSelector */.b2)().evaluate();
        if (!menuButton) return;
        const css = window.getComputedStyle(menuButton);
        setStyle({
            size: Number.parseFloat(css.height.replace('px', '')),
            fontSize: Number.parseFloat(css.fontSize.replace('px', '')),
            marginBottom: Number.parseFloat(css.marginBottom.replace('px', ''))
        });
    };
    (0,react.useEffect)(setStyleFromEditProfileSelector, []);
    (0,utils/* useLocationChange */.SL)(setStyleFromEditProfileSelector);
    const { classes  } = ProfileTipButton_useStyles(style);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(components/* TipButton */.X, {
        className: classes.button,
        receiver: visitingPersona.identifier
    });
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/Tip/index.ts


// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadgeTimeline.tsx
var NFTBadgeTimeline = __webpack_require__(60783);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/utils/avatar.ts

// cspell:disable-next
const ClipPath = 'url("#hex-hw-shapeclip-clipconfig")';
function getInjectNodeInfo(ele) {
    const imgEle = ele.firstChild.querySelector('img');
    if (!imgEle) return;
    const nftDom = imgEle.parentNode?.parentNode?.parentNode?.parentNode?.parentNode;
    if (!nftDom) return;
    nftDom.style.overflow = 'unset';
    const avatarParent = nftDom.parentElement;
    let isTwitterNFT = false;
    if (avatarParent) {
        const style = window.getComputedStyle(avatarParent);
        isTwitterNFT = style.clipPath === ClipPath;
    }
    const width = Number(window.getComputedStyle(nftDom).width.replace('px', '') ?? 0);
    const height = Number(window.getComputedStyle(nftDom).height.replace('px', '') ?? 0);
    const dom = imgEle.parentNode?.firstChild;
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useNFTContainerAtTwitter.ts


function useNFTContainerAtTwitter(screenName) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!screenName) return;
        return web3_providers_src/* Twitter.getUserNftContainer */.tL.getUserNftContainer(screenName);
    }, [
        web3_providers_src/* Twitter */.tL,
        screenName
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Avatar/utils/index.ts
var Avatar_utils = __webpack_require__(85418);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarClip.tsx











// from twitter page
const ViewBoxWidth = 200;
const ViewBoxHeight = 188;
const rainbowBorderKeyFrames = entry/* keyframes */.F4`
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
const NFTAvatarClip_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {},
        miniBorder: {
            transform: 'scale(0.94) translate(7px, 6px)',
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
            transform: 'translate(1px, -5px) ',
            '@supports (translate: 0)': {
                transform: 'none',
                translate: '1px, -5px'
            }
        },
        price: {
            transform: 'translate(0, -5px) '
        },
        namePath: {
            transform: 'scale(0.9) translate(10px, 10px)'
        }
    })
);
function NamePath(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(NFTAvatarClip_useStyles(), props);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        className: classes.root,
        d: "M6.74789,69.55C14.0458,54.2034 22.5561,39.4634 32.1979,25.47L35.3079,20.96C39.1367,15.4049 44.155,10.7724 49.9981,7.3994C55.8413,4.02636 62.3625,1.99743 69.0879,1.46004L74.5479,1.02004C91.4873,-0.340012 108.508,-0.340012 125.448,1.02004L130.908,1.46004C137.633,1.99743 144.155,4.02636 149.998,7.3994C155.841,10.7724 160.859,15.4049 164.688,20.96L167.798,25.43C177.44,39.4234 185.95,54.1634 193.248,69.51",
        id: props.id
    });
}
function PricePath({ id  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37",
        id: id
    });
}
function BorderPath({ id  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        id: id,
        d: "M193.248 69.51C185.95 54.1634 177.44 39.4234 167.798 25.43L164.688 20.96C160.859 15.4049 155.841 10.7724 149.998 7.3994C144.155 4.02636 137.633 1.99743 130.908 1.46004L125.448 1.02004C108.508 -0.340012 91.4873 -0.340012 74.5479 1.02004L69.0879 1.46004C62.3625 1.99743 55.8413 4.02636 49.9981 7.3994C44.155 10.7724 39.1367 15.4049 35.3079 20.96L32.1979 25.47C22.5561 39.4634 14.0458 54.2034 6.74789 69.55L4.39789 74.49C1.50233 80.5829 0 87.2441 0 93.99C0 100.736 1.50233 107.397 4.39789 113.49L6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37L195.598 113.43C198.493 107.337 199.996 100.676 199.996 93.93C199.996 87.1841 198.493 80.5229 195.598 74.43L193.248 69.51Z"
    });
}
function NFTAvatarClip_Text(props) {
    const { xlinkHref , fontSize =12 , text , fill  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(NFTAvatarClip_useStyles(), props);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
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
    });
}
function NFTAvatarClip(props) {
    const { id =(0,v4/* default */.Z)() , width , height , viewBoxHeight =ViewBoxHeight , viewBoxWidth =ViewBoxWidth , screenName  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(NFTAvatarClip_useStyles(), props);
    const { loading , value: avatarMetadata  } = useNFTContainerAtTwitter(screenName ?? '');
    const account = (0,entry_web3/* useAccount */.mA)();
    const { value ={
        amount: '0',
        symbol: 'ETH',
        name: '',
        slug: ''
    } , loading: loadingNFT  } = (0,hooks/* useNFT */.el)(account, avatarMetadata?.address ?? '', avatarMetadata?.token_id ?? '', base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, types/* ChainId.Mainnet */.a_.Mainnet);
    const { amount , name , symbol , slug  } = value;
    if (!avatarMetadata?.address || !avatarMetadata?.token_id) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                        className: classes.text,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClip_Text, {
                            xlinkHref: `#${id}-name-path`,
                            fill: `url(#${id}-pattern)`,
                            text: loading || loadingNFT ? 'loading...' : `${(0,Avatar_utils/* formatText */.RZ)(name, avatarMetadata?.token_id ?? '')} ${slug.toLowerCase() === 'ens' ? 'ENS' : ''}`
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                        className: classes.price,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClip_Text, {
                            fill: `url(#${id}-pattern)`,
                            xlinkHref: `#${id}-price-path`,
                            text: loading || loadingNFT ? '' : (0,Avatar_utils/* formatPrice */.T4)(amount, symbol)
                        })
                    })
                ]
            })
        ]
    });
}
function NFTAvatarMiniClip(props) {
    const { id =(0,v4/* default */.Z)() , width , height , viewBoxHeight =ViewBoxHeight , viewBoxWidth =ViewBoxWidth , screenName  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(NFTAvatarClip_useStyles(), props);
    const identity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const { loading , value: avatarMetadata  } = useNFTContainerAtTwitter(screenName ?? identity.identifier?.userId);
    if (loading || !avatarMetadata?.address || !avatarMetadata?.token_id) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
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
    });
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/Avatar.tsx








function getTwitterId(ele) {
    const twitterIdNode = ele.firstChild?.nextSibling.querySelector('[dir="ltr"] > span');
    if (!twitterIdNode) return;
    return twitterIdNode.innerText.trim().replace('@', '');
}
function Avatar_(main, signal) {
    (0,utils/* startWatch */.fy)(new umd.MutationObserverWatcher(main()).useForeach((ele, _, meta)=>{
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
                    mode: 'closed'
                }
            });
            proxy.realCurrent = info.element.firstChild;
            const root = (0,utils/* createReactRootShadowed */.ou)(proxy.afterShadow, {
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
            remover = root.destroy;
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

// EXTERNAL MODULE: ./src/components/DataSource/useNextID.ts
var useNextID = __webpack_require__(360);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(9987);
// EXTERNAL MODULE: ./src/plugins/Avatar/Application/NFTAvatarsDialog.tsx + 25 modules
var NFTAvatarsDialog = __webpack_require__(84583);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarButton.tsx + 1 modules
var NFTAvatarButton = __webpack_require__(24311);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/NFTAvatarEditProfile.tsx










function injectOpenNFTAvatarEditProfileButton(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchEditProfileSelector */.wP)());
    (0,utils/* startWatch */.fy)(watcher, signal);
    (0,utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(OpenNFTAvatarEditProfileButtonInTwitter, {}));
}
const NFTAvatarEditProfile_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        root: {
            minHeight: props.minHeight,
            fontSize: props.fontSize,
            marginBottom: props.marginBottom,
            marginTop: 1,
            marginRight: theme.spacing(2),
            border: props.border
        },
        text: {
            color: props.color
        }
    })
);
function openNFTAvatarSettingDialog() {
    const editDom = (0,selector/* searchEditProfileSelector */.wP)().evaluate();
    editDom?.click();
}
function OpenNFTAvatarEditProfileButtonInTwitter() {
    const [style, setStyle] = (0,react.useState)({
        minHeight: 32,
        fontSize: 14,
        marginBottom: 11,
        border: 'none',
        color: ''
    });
    const [open, setOpen] = (0,react.useState)(false);
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const nextIDConnectStatus = (0,useNextID/* useNextIDConnectStatus */.EP)();
    const createOrConnectPersona = (0,react.useCallback)(()=>{
        personaConnectStatus.action?.();
    }, [
        personaConnectStatus
    ]);
    const verifyPersona = (0,react.useCallback)(()=>{
        nextIDConnectStatus.reset();
    }, [
        nextIDConnectStatus
    ]);
    const clickHandler = ()=>{
        if (!personaConnectStatus.hasPersona || !personaConnectStatus.connected) return createOrConnectPersona();
        if (!nextIDConnectStatus.isVerified) return verifyPersona();
        setOpen(true);
        return;
    };
    const setStyleFromEditProfileSelector = ()=>{
        const editDom = (0,selector/* searchEditProfileSelector */.wP)().evaluate();
        if (!editDom) return;
        const css = window.getComputedStyle(editDom);
        const spanCss = window.getComputedStyle(editDom.querySelector('span'));
        setStyle({
            minHeight: Number(css.minHeight.replace('px', '')),
            fontSize: Number(css.fontSize.replace('px', '')),
            marginBottom: Number(css.marginBottom.replace('px', '')),
            border: css.border,
            color: spanCss.color
        });
    };
    (0,react.useEffect)(()=>setStyleFromEditProfileSelector()
    , []);
    (0,utils/* useLocationChange */.SL)(()=>setStyleFromEditProfileSelector()
    );
    const { classes  } = NFTAvatarEditProfile_useStyles(style);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButton/* NFTAvatarButton */.m, {
                classes: {
                    root: classes.root,
                    text: classes.text
                },
                onClick: clickHandler
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarsDialog/* NFTAvatarDialog */.a, {
                open: open,
                onClose: ()=>setOpen(false)
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadgeTweet.tsx




const NFTBadgeTweet_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {}
    })
);
function NFTBadgeTweet(props) {
    const { avatarId , width , height , snsKey  } = props;
    const identity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    if (!identity?.identifier?.userId) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadgeTimeline/* NFTBadgeTimeline */.J, {
        width: width,
        height: height,
        userId: identity?.identifier.userId,
        avatarId: avatarId,
        snsKey: snsKey
    });
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/TweetNFTAvatar.tsx








function TweetNFTAvatar_(main, signal) {
    (0,utils/* startWatch */.fy)(new umd.MutationObserverWatcher(main()).useForeach((ele, _, meta)=>{
        let remover = ()=>{};
        const remove = ()=>remover()
        ;
        const run = async ()=>{
            const info = getInjectNodeInfo(ele.firstChild);
            if (!info) return;
            const proxy = (0,umd.DOMProxy)({
                afterShadowRootInit: {
                    mode: 'closed'
                }
            });
            proxy.realCurrent = info.element.firstChild;
            const root = (0,utils/* createReactRootShadowed */.ou)(proxy.afterShadow, {
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
            remover = root.destroy;
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

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/NFT/NFTAvatarClip.tsx









function injectNFTAvatarClipInTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchTwitterAvatarNFTSelector */.Dc)());
    (0,utils/* startWatch */.fy)(watcher, signal);
    (0,utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClipInTwitter, {}));
}
const NFT_NFTAvatarClip_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
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
        const ele = (0,selector/* searchTwitterAvatarNFTSelector */.Dc)().evaluate()?.closest('a')?.querySelector('img');
        if (!ele) return 0;
        const style = window.getComputedStyle(ele);
        return Number.parseInt(style.width.replace('px', '') ?? 0, 10);
    }, [
        windowSize,
        location
    ]);
    const twitterId = (0,react.useMemo)(()=>{
        const ele = (0,selector/* searchTwitterAvatarNFTSelector */.Dc)().evaluate()?.closest('a');
        if (!ele) return;
        const path = ele.getAttribute('href');
        if (!path) return;
        const [, userId] = path.match(/^\/(\w+)\/nft$/) ?? [];
        return userId;
    }, [
        location
    ]);
    (0,react.useEffect)(()=>{
        const timer = setTimeout(()=>{
            linkDom.current = (0,selector/* searchTwitterAvatarNFTLinkSelector */.Fv)().evaluate();
            if (linkDom.current?.firstElementChild && linkDom.current?.childNodes.length === 4) {
                borderElement.current = linkDom.current.firstElementChild;
                // remove useless border
                linkDom.current.removeChild(linkDom.current?.firstElementChild);
            }
            const link = linkDom.current;
            link.style.backgroundColor = 'transparent';
            link.style.boxShadow = 'none';
        }, 5000);
        return ()=>{
            clearTimeout(timer);
            if (borderElement.current && borderElement.current !== linkDom.current?.firstElementChild && linkDom.current) linkDom.current.insertBefore(borderElement.current, linkDom.current.firstChild);
        };
    }, [
        location.pathname
    ]);
    if ((0,base_src/* isZero */.Fr)(size) || !twitterId) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarClip, {
        screenName: twitterId,
        width: size,
        height: size,
        classes: {
            root: classes.root,
            text: classes.text,
            icon: classes.icon
        }
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/Components/Text.tsx
var Components_Text = __webpack_require__(61323);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/customization/render-fragments.tsx




const TwitterRenderFragments = {
    AtLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const target = '/' + props.children.slice(1);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: target,
            children: props.children
        });
    }),
    HashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const text = props.children.slice(1);
        const target = `/hashtag/${encodeURIComponent(text)}?src=hashtag_click`;
        const { hasMatch , ...events } = (0,Components_Text/* useTagEnhancer */.fR)('hash', text);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            href: target,
            children: props.children
        });
    }),
    CashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const target = `/search?q=${encodeURIComponent(props.children)}&src=cashtag_click`;
        const { hasMatch , ...events } = (0,Components_Text/* useTagEnhancer */.fR)('cash', props.children.slice(1));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            href: target,
            children: props.children
        });
    }),
    Image: ()=>null
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/ui-provider.ts



































const useInjectedDialogClassesOverwriteTwitter = (0,entry/* makeStyles */.ZL)()((theme)=>{
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
            },
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        dialogTitle: {
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            padding: 16,
            position: 'relative',
            background: theme.palette.maskColor?.modelTitleBg,
            borderBottom: 'none',
            '& > p': {
                fontSize: 18,
                lineHeight: '22px',
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
    ...base/* twitterBase */.o,
    ...twitterShared,
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
        sharedComponentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteTwitter
            }
        },
        componentOverwrite: {
            RenderFragments: TwitterRenderFragments
        },
        useTheme: useThemeTwitterVariant,
        i18nOverwrite: i18NOverwriteTwitter
    },
    init (signal) {
        const profiles = social_network/* stateCreator.profiles */.ZZ.profiles();
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, twitterShared.networkIdentifier);
        return {
            profiles
        };
    },
    injection: {
        toolbox: injectToolboxHintAtTwitter,
        searchResult: injectSearchResultBoxAtTwitter,
        profileTab: injectProfileTabAtTwitter,
        profileTabContent: injectProfileTabContentAtTwitter,
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
        profileAvatar: injectNFTAvatarInTwitter,
        profileTip: injectOpenTipButtonOnProfile,
        openNFTAvatar: injectOpenNFTAvatarEditProfileButton,
        postAndReplyNFTAvatar: injectUserNFTAvatarAtTweet,
        avatarClipNFT: injectNFTAvatarClipInTwitter,
        openNFTAvatarSettingDialog: openNFTAvatarSettingDialog
    },
    configuration: {
        nextIDConfig: {
            enable: true,
            platform: src/* NextIDPlatform.Twitter */.Vd.Twitter,
            collectVerificationPost: collectVerificationPost
        },
        steganography: {
            // ! Change this might be a breaking change !
            password () {
                const id = IdentityProviderTwitter.recognized.value.identifier?.userId || social_network/* globalUIState.profiles.value */.EJ.profiles.value?.[0].identifier.userId;
                if (!id) throw new Error('Cannot figure out password');
                return src/* ProfileIdentifier.of */.WO.of(src/* EnhanceableSite.Twitter */.Jk.Twitter, id).unwrap().toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (twitterUI);


/***/ })

}]);