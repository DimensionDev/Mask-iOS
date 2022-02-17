"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3377],{

/***/ 24267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ twitterEncoding)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96578);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);


const ICAO9303Checksum = {
    encode: (input)=>{
        return `${input}${(input.toUpperCase().replace(/[+/=]/g, '0').split('').map((d, i)=>parseInt(d, 36) * [
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
     */ publicKeyEncoder: (text)=>`🎭${ICAO9303Checksum.encode(text)}🎭`
    ,
    publicKeyDecoder: (text)=>{
        const r = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .regexMatchAll */ .zA)(text, /([\d+/=A-Za-z]{20,60})/);
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.isNull)(r)) {
            return [];
        }
        for (const v of r){
            const retV = ICAO9303Checksum.decode(v);
            if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.isNull)(retV)) {
                continue;
            }
            return [
                retV
            ];
        }
        return [];
    },
    /**
     * @link https://github.com/DimensionDev/Maskbook/issues/198
     */ payloadEncoder: (text)=>`https://mask.io/?PostData_v1=${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .batchReplace */ .aP)(text, [
            [
                '🎼',
                '%20'
            ],
            [
                ':||',
                '%40'
            ],
            [
                '+',
                '-'
            ],
            [
                '=',
                '_'
            ],
            [
                /\|/g,
                '.'
            ], 
        ])}`
    ,
    payloadDecoder: (text)=>{
        if (!text) return [];
        if (!text.includes('%20') || !text.includes('%40')) return [];
        const payloadLink = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .parseURL */ .Lk)(text).map((x)=>x.replace(/…$/, '')
        ).filter((x)=>x.endsWith('%40')
        )[0];
        try {
            const { search , pathname  } = new URL(payloadLink);
            const payload = search ? search.slice(1) : pathname.slice(1);
            if (!payload) return [];
            return [
                `🎼${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .batchReplace */ .aP)(payload// https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1476
                // eslint-disable-next-line unicorn/better-regex
                .replace(/^PostData_v\d=/i, '').replace(/^%20/, '').replace(/%40$/, ''), [
                    [
                        '-',
                        '+'
                    ],
                    [
                        '_',
                        '='
                    ],
                    [
                        /\./g,
                        '|'
                    ], 
                ])}:||`, 
            ];
        } catch  {
            return [];
        }
    }
};


/***/ }),

/***/ 85333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ twitterShared)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67561);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37186);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14840);
/* harmony import */ var _encoding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24267);
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22490);






const getPostURL = (post)=>{
    if (!(post.identifier instanceof _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier)) return null;
    return new URL(`https://twitter.com/${post.identifier.userId}/status/${post.postId}`);
};
const twitterShared = {
    ..._base__WEBPACK_IMPORTED_MODULE_3__/* .twitterBase */ .oQ,
    utils: {
        getHomePage: ()=>'https://twitter.com'
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

/***/ 57486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kt": () => (/* binding */ getEditorContent),
/* harmony export */   "tq": () => (/* binding */ isMobile),
/* harmony export */   "iv": () => (/* binding */ isCompose),
/* harmony export */   "uf": () => (/* binding */ hasFocus),
/* harmony export */   "Wu": () => (/* binding */ hasEditor)
/* harmony export */ });
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31948);

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

/***/ 31948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L2": () => (/* binding */ searchProfileTabListLastChildSelector),
/* harmony export */   "xx": () => (/* binding */ searchProfileTabPageSelector),
/* harmony export */   "YX": () => (/* binding */ searchProfileEmptySelector),
/* harmony export */   "Fe": () => (/* binding */ searchProfileTabSelector),
/* harmony export */   "JN": () => (/* binding */ searchProfileTabListSelector),
/* harmony export */   "Q2": () => (/* binding */ searchForegroundColorSelector),
/* harmony export */   "r$": () => (/* binding */ searchNewTweetButtonSelector),
/* harmony export */   "rf": () => (/* binding */ searchNickNameSelector),
/* harmony export */   "Du": () => (/* binding */ rootSelector),
/* harmony export */   "QG": () => (/* binding */ composeAnchorSelector),
/* harmony export */   "xH": () => (/* binding */ composeAnchorTextSelector),
/* harmony export */   "$_": () => (/* binding */ postEditorContentInPopupSelector),
/* harmony export */   "Rd": () => (/* binding */ postEditorInPopupSelector),
/* harmony export */   "ch": () => (/* binding */ toolBoxInSideBarSelector),
/* harmony export */   "Ps": () => (/* binding */ postEditorInTimelineSelector),
/* harmony export */   "Y5": () => (/* binding */ postEditorDraftContentSelector),
/* harmony export */   "R9": () => (/* binding */ searchResultHeadingSelector),
/* harmony export */   "Ol": () => (/* binding */ postEditorToolbarSelector),
/* harmony export */   "nS": () => (/* binding */ newPostButtonSelector),
/* harmony export */   "V5": () => (/* binding */ bioDescriptionSelector),
/* harmony export */   "uy": () => (/* binding */ bioPageUserNickNameSelector),
/* harmony export */   "QK": () => (/* binding */ bioPageUserIDSelector),
/* harmony export */   "YG": () => (/* binding */ floatingBioCardSelector),
/* harmony export */   "rk": () => (/* binding */ postsImageSelector),
/* harmony export */   "XD": () => (/* binding */ postsContentSelector),
/* harmony export */   "qB": () => (/* binding */ selfInfoSelectors)
/* harmony export */ });
/* unused harmony exports searchProfileSelector, searchProfileActiveTabSelector, searchProfileActiveTabStatusLineSelector, searchProfileActiveTabLabelSelector, bioCardSelector */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96578);
/* harmony import */ var _postBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57486);



const querySelector = (selector, singleMode = true)=>{
    const ls = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const querySelectorAll = (selector)=>{
    return new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.LiveSelector().querySelectorAll(selector);
};
//#region "Enhanced Profile"
const searchProfileSelector = ()=>querySelector('[aria-label][role="navigation"]')
;
const searchProfileTabListLastChildSelector = ()=>querySelector('[data-testid="primaryColumn"] > div > :nth-child(2) > div > div > :nth-child(2) > div > :last-child')
;
const searchProfileTabPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="region"] [aria-label]')
;
const searchProfileEmptySelector = ()=>querySelector('[data-testid="primaryColumn"] [data-testid="emptyState"]')
;
const searchProfileActiveTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"]')
;
const searchProfileTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="false"]')
;
const searchProfileActiveTabStatusLineSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"] > div > div')
;
const searchProfileActiveTabLabelSelector = ()=>querySelector('[aria-label][role="navigation"] [role="tablist"] [role="tab"][aria-selected="true"] > div')
;
const searchProfileTabListSelector = ()=>querySelectorAll('[aria-label][role="navigation"]  [role="tablist"][data-testid="ScrollSnap-List"] a')
;
const searchForegroundColorSelector = ()=>querySelector('[data-testid="primaryColumn"] > div > div > div > div > div > div > div > div > div > div')
;
const searchNewTweetButtonSelector = ()=>querySelector('[data-testid="SideNav_NewTweet_Button"]')
;
const searchNickNameSelector = ()=>querySelector('[data-testid="UserProfileHeader_Items"]')
;
const bioCardSelector = (singleMode = true)=>querySelector([
        '.profile',
        'a[href*="header_photo"] ~ div',
        'div[data-testid="primaryColumn"] > div > div:last-child > div > div > div > div ~ div'
    ].join(), singleMode)
;
//#endregion
const rootSelector = ()=>querySelector('#react-root')
;
const composeAnchorSelector = ()=>querySelector('header[role=banner] a[href="/compose/tweet"]')
;
const composeAnchorTextSelector = ()=>querySelector('header[role=banner] a[href="/compose/tweet"] div[dir]')
;
const postEditorContentInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"] > div:first-child > div:nth-child(3)')
;
const postEditorInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"] > div:first-child > div:nth-child(3) > div:first-child > div:first-child [role="button"][aria-label]:nth-child(6)')
;
const toolBoxInSideBarSelector = ()=>querySelector('[role="banner"] [role="navigation"] > div')
;
const postEditorInTimelineSelector = ()=>querySelector('[role="main"] :not(aside) > [role="progressbar"] ~ div [role="button"][aria-label]:nth-child(6)')
;
const postEditorDraftContentSelector = ()=>{
    if (location.pathname === '/compose/tweet') {
        return querySelector(`[contenteditable][aria-label][spellcheck],textarea[aria-label][spellcheck]`);
    }
    return ((0,_postBox__WEBPACK_IMPORTED_MODULE_1__/* .isCompose */ .iv)() ? postEditorInPopupSelector() : postEditorInTimelineSelector()).querySelector('.public-DraftEditor-content, [contenteditable][aria-label][spellcheck]');
};
const searchResultHeadingSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="region"] [role="heading"]')
;
const postEditorToolbarSelector = ()=>querySelector('[data-testid="toolBar"] > div > *:last-child')
;
const newPostButtonSelector = ()=>querySelector('[data-testid="SideNav_NewTweet_Button"]')
;
const bioDescriptionSelector = ()=>querySelector('[data-testid="UserDescription"]')
;
const bioPageUserNickNameSelector = ()=>{
    return querySelector('[data-testid="UserDescription"]').map((x)=>{
        var ref, ref1;
        return (ref = x.parentElement) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : ref1.previousElementSibling;
    }).querySelector('div[dir]');
};
const bioPageUserIDSelector = (selector)=>{
    return selector().map((x)=>{
        var ref5;
        return ((ref5 = x.parentElement) === null || ref5 === void 0 ? void 0 : ref5.nextElementSibling).innerText.replace('@', '');
    });
};
const floatingBioCardSelector = ()=>querySelector(`[style~="left:"] a[role=link] > div:first-child > div:first-child > div:first-child[dir="auto"]`)
;
const postsImageSelector = (node)=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.LiveSelector([
        node
    ]).querySelectorAll([
        '[data-testid="tweet"] > div > div img[src*="media"]',
        '[data-testid="tweet"] ~ div img[src*="media"]'
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
    ].join()).concat(querySelectorAll('[data-testid="tweet"] > div:last-child').map((x)=>{
        var ref6, ref7, ref8, ref9, ref10;
        const textElement = (ref6 = x.querySelector('[role="group"]')) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.parentElement) === null || ref7 === void 0 ? void 0 : ref7.querySelector('div[lang]');
        if (textElement) return textElement;
        // There's no textElement as there's only a twitter summary card parsed by a single url.
        const summaryCardElement = (ref10 = (ref8 = x.querySelector('[role="group"]')) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.parentElement) === null || ref9 === void 0 ? void 0 : ref9.querySelector('[data-testid="card.wrapper"]')) === null || ref10 === void 0 ? void 0 : ref10.previousElementSibling;
        return summaryCardElement;
    }));
};
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


/***/ }),

/***/ 22490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S_": () => (/* binding */ usernameValidator),
/* harmony export */   "y": () => (/* binding */ getNickname),
/* harmony export */   "WM": () => (/* binding */ getTwitterId),
/* harmony export */   "Ek": () => (/* binding */ getBioDescription)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31948);


/**
 * @link https://help.twitter.com/en/managing-your-account/twitter-username-rules
 */ const usernameValidator = (name)=>{
    for (const v of [
        /(twitter|admin)/i,
        /.{16,}/,
        /\W/
    ]){
        if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.isNull)(v.exec(name))) {
            return false;
        }
    }
    if (name.length < 4) return false;
    return true;
};
const getNickname = ()=>{
    var ref, ref1, ref2, ref3;
    const node = (ref = (0,_selector__WEBPACK_IMPORTED_MODULE_1__/* .searchNickNameSelector */ .rf)().evaluate()) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.parentElement) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.firstChild) === null || ref3 === void 0 ? void 0 : ref3.nextSibling;
    if (!node) return '';
    const nicknameNode = node.querySelector('div span span');
    if (!nicknameNode) return '';
    return nicknameNode.innerHTML.trim();
};
const getTwitterId = ()=>{
    var ref13, ref14, ref15, ref16, ref17, ref18, ref19;
    const node = (ref13 = (0,_selector__WEBPACK_IMPORTED_MODULE_1__/* .searchNickNameSelector */ .rf)().evaluate()) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.parentElement) === null || ref14 === void 0 ? void 0 : (ref15 = ref14.parentElement) === null || ref15 === void 0 ? void 0 : (ref16 = ref15.firstChild) === null || ref16 === void 0 ? void 0 : (ref17 = ref16.nextSibling) === null || ref17 === void 0 ? void 0 : (ref18 = ref17.firstChild) === null || ref18 === void 0 ? void 0 : (ref19 = ref18.firstChild) === null || ref19 === void 0 ? void 0 : ref19.lastChild;
    if (!node) return '';
    const twitterIdNode = node.querySelector('div span');
    if (!twitterIdNode) return '';
    return twitterIdNode.innerHTML.trim().replace('@', '');
};
const getBioDescription = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_1__/* .bioDescriptionSelector */ .V5)().evaluate();
    var ref20;
    return (ref20 = node === null || node === void 0 ? void 0 : node.innerText) !== null && ref20 !== void 0 ? ref20 : '';
};


/***/ }),

/***/ 73377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14840);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85333);


const twitterWorker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .twitterWorkerBase */ .x,
    ..._shared__WEBPACK_IMPORTED_MODULE_1__/* .twitterShared */ .p,
    tasks: {
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twitterWorker);


/***/ }),

/***/ 67561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ createSNSAdaptorSpecializedPostContext),
/* harmony export */   "T": () => (/* binding */ createRefsForCreatePostContext)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);



function createSNSAdaptorSpecializedPostContext(create) {
    return function createPostContext(opt) {
        var ref, ref1, ref2, ref3;
        const cancel = [];
        (ref = opt.signal) === null || ref === void 0 ? void 0 : ref.addEventListener('abort', ()=>{
            return cancel.forEach((fn)=>{
                return fn === null || fn === void 0 ? void 0 : fn();
            });
        });
        //#region Post text content
        const postContent = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(extractText());
        cancel.push(opt.rawMessage.subscribe(()=>postContent.value = extractText()
        ));
        function extractText() {
            return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.extractTextFromTypedMessage)(opt.rawMessage.getCurrentValue()).unwrapOr('');
        }
        //#endregion
        //#region Mentioned links
        const links = new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableSet();
        cancel.push(postContent.addListener((post)=>{
            var ref4;
            links.clear();
            (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.parseURL)(post).forEach((link)=>links.add(link)
            );
            (ref4 = opt.postMentionedLinksProvider) === null || ref4 === void 0 ? void 0 : ref4.getCurrentValue().forEach((link)=>links.add(link)
            );
        }));
        cancel.push((ref1 = opt.postMentionedLinksProvider) === null || ref1 === void 0 ? void 0 : ref1.subscribe(()=>{
            var // Not clean old links cause post content not changed
            ref5;
            (ref5 = opt.postMentionedLinksProvider) === null || ref5 === void 0 ? void 0 : ref5.getCurrentValue().forEach((link)=>links.add(link)
            );
        }));
        const linksSubscribe = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>[
                    ...links
                ]
            ,
            subscribe: (sub)=>links.event.on(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ALL_EVENTS, sub)
        });
        //#endregion
        //#region Parse payload
        const postPayload = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef((0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new Error('Empty')));
        parsePayload();
        cancel.push(postContent.addListener(parsePayload));
        cancel.push(linksSubscribe.subscribe(parsePayload));
        function parsePayload() {
            // TODO: Also parse for payload in the image.
            let lastResult = (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new Error('No candidate'));
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
        //#endregion
        const author = {
            avatarURL: opt.avatarURL,
            nickname: opt.nickname,
            postBy: opt.postBy,
            postID: opt.postID
        };
        const transformedPostContent = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef((0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.makeTypedMessageTupleFromList)(), _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.isTypedMessageEqual);
        const postIdentifier = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>{
                const by = opt.postBy.getCurrentValue();
                const id = opt.postID.getCurrentValue();
                if (by.isUnknown || id === null) return null;
                return new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.PostIdentifier(by, id);
            },
            subscribe: (sub)=>{
                const a = opt.postBy.subscribe(sub);
                const b = opt.postID.subscribe(sub);
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
            rootNodeProxy: opt.rootElement,
            postContentNode: opt.suggestedInjectionPoint,
            comment: opt.comments,
            commentBoxSelector: (ref2 = opt.comments) === null || ref2 === void 0 ? void 0 : ref2.commentBoxSelector,
            commentsSelector: (ref3 = opt.comments) === null || ref3 === void 0 ? void 0 : ref3.commentsSelector,
            postIdentifier,
            url: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
                getCurrentValue: ()=>{
                    var ref6;
                    const id = postIdentifier.getCurrentValue();
                    if (id) return ((ref6 = create.getURLFromPostIdentifier) === null || ref6 === void 0 ? void 0 : ref6.call(create, id)) || null;
                    return null;
                },
                subscribe: (sub)=>postIdentifier.subscribe(sub)
            }),
            postMentionedLinks: linksSubscribe,
            postMetadataImages: opt.postImagesProvider || (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
                getCurrentValue: ()=>[]
                ,
                subscribe: ()=>()=>{
                    }
            }),
            postMetadataMentionedLinks: linksSubscribe,
            postMessage: opt.rawMessage,
            transformedPostContent,
            postContent: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postContent),
            postPayload: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postPayload),
            decryptedPayloadForImage: new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null),
            iv: new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null),
            publicShared: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
                getCurrentValue: ()=>postPayload.value.map((val)=>val.version === -38 && val.sharedPublic
                    ).unwrapOr(undefined)
                ,
                subscribe: (sub)=>postPayload.addListener(sub)
            })
        };
    };
}
function createRefsForCreatePostContext() {
    const avatarURL = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const nickname = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const postBy = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier.unknown, _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier.equals);
    const postID = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const url = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const postMessage = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef((0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.makeTypedMessageTupleFromList)());
    const postMetadataImages = new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableSet();
    const postMetadataMentionedLinks = new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableMap();
    const subscriptions = {
        avatarURL: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(avatarURL),
        nickname: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(nickname),
        postBy: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postBy),
        postID: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postID),
        rawMessage: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postMessage),
        postImagesProvider: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>[
                    ...postMetadataImages
                ]
            ,
            subscribe: (sub)=>postMetadataImages.event.on(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ALL_EVENTS, sub)
        }),
        postMentionedLinksProvider: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>[
                    ...postMetadataMentionedLinks.values()
                ]
            ,
            subscribe: (sub)=>postMetadataMentionedLinks.event.on(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ALL_EVENTS, sub)
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