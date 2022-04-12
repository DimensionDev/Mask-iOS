"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5777],{

/***/ 79208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ twitterEncoding)
/* harmony export */ });
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57614);
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

/***/ 29909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ twitterShared)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13591);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93573);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74926);
/* harmony import */ var _encoding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79208);
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95418);






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

/***/ 11710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ isMobileTwitter)
/* harmony export */ });
/* unused harmony export twitterDomain */
const isMobileTwitter = !!navigator.userAgent.match(/Mobile|mobile/);
const twitterDomain = (/* unused pure expression or super */ null && (isMobileTwitter ? 'https://mobile.twitter.com/' : 'https://twitter.com/'));


/***/ }),

/***/ 7068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wu": () => (/* binding */ hasEditor),
/* harmony export */   "iv": () => (/* binding */ isCompose),
/* harmony export */   "kt": () => (/* binding */ getEditorContent),
/* harmony export */   "uf": () => (/* binding */ hasFocus)
/* harmony export */ });
/* unused harmony export isMobile */
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10735);

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

/***/ 10735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$3": () => (/* binding */ searchProfileSaveSelector),
/* harmony export */   "$P": () => (/* binding */ searchProfessionalButtonSelector),
/* harmony export */   "$_": () => (/* binding */ postEditorContentInPopupSelector),
/* harmony export */   "Ab": () => (/* binding */ searchTweetAvatarSelector),
/* harmony export */   "Dc": () => (/* binding */ searchTwitterAvatarNFTSelector),
/* harmony export */   "Du": () => (/* binding */ rootSelector),
/* harmony export */   "FK": () => (/* binding */ searchProfileSetAvatarSelector),
/* harmony export */   "Fe": () => (/* binding */ searchProfileTabSelector),
/* harmony export */   "Fv": () => (/* binding */ searchTwitterAvatarNFTLinkSelector),
/* harmony export */   "Hk": () => (/* binding */ searchAppBarBackSelector),
/* harmony export */   "IQ": () => (/* binding */ personalHomepageSelector),
/* harmony export */   "JN": () => (/* binding */ searchProfileTabListSelector),
/* harmony export */   "L2": () => (/* binding */ searchProfileTabListLastChildSelector),
/* harmony export */   "Ls": () => (/* binding */ searchAvatarSelector),
/* harmony export */   "N7": () => (/* binding */ searchTwitterAvatarLinkSelector),
/* harmony export */   "Ps": () => (/* binding */ postEditorInTimelineSelector),
/* harmony export */   "QG": () => (/* binding */ composeAnchorSelector),
/* harmony export */   "QK": () => (/* binding */ bioPageUserIDSelector),
/* harmony export */   "R9": () => (/* binding */ searchResultHeadingSelector),
/* harmony export */   "Rd": () => (/* binding */ postEditorInPopupSelector),
/* harmony export */   "V5": () => (/* binding */ bioDescriptionSelector),
/* harmony export */   "WU": () => (/* binding */ sideBarProfileSelector),
/* harmony export */   "XD": () => (/* binding */ postsContentSelector),
/* harmony export */   "XL": () => (/* binding */ searchTwitterAvatarOpenFilesSelector),
/* harmony export */   "Y5": () => (/* binding */ postEditorDraftContentSelector),
/* harmony export */   "YG": () => (/* binding */ floatingBioCardSelector),
/* harmony export */   "YX": () => (/* binding */ searchProfileEmptySelector),
/* harmony export */   "ag": () => (/* binding */ headingTextSelector),
/* harmony export */   "bQ": () => (/* binding */ searchRetweetAvatarSelector),
/* harmony export */   "ch": () => (/* binding */ toolBoxInSideBarSelector),
/* harmony export */   "dA": () => (/* binding */ searchNFTAvatarSelector),
/* harmony export */   "nS": () => (/* binding */ newPostButtonSelector),
/* harmony export */   "p$": () => (/* binding */ searchTwitterAvatarSelector),
/* harmony export */   "pz": () => (/* binding */ searchAvatarMetaSelector),
/* harmony export */   "qB": () => (/* binding */ selfInfoSelectors),
/* harmony export */   "r$": () => (/* binding */ searchNewTweetButtonSelector),
/* harmony export */   "rf": () => (/* binding */ searchNickNameSelector),
/* harmony export */   "rk": () => (/* binding */ postsImageSelector),
/* harmony export */   "uy": () => (/* binding */ bioPageUserNickNameSelector),
/* harmony export */   "vL": () => (/* binding */ postAvatarsContentSelector),
/* harmony export */   "wP": () => (/* binding */ searchEditProfileSelector),
/* harmony export */   "xH": () => (/* binding */ composeAnchorTextSelector),
/* harmony export */   "xx": () => (/* binding */ searchProfileTabPageSelector),
/* harmony export */   "yR": () => (/* binding */ timelinePostContentSelector),
/* harmony export */   "zA": () => (/* binding */ searchProfileTabLoseConnectionPageSelector)
/* harmony export */ });
/* unused harmony exports querySelector, searchProfileSelector, searchProfileActiveTabSelector, searchProfileActiveTabStatusLineSelector, searchProfileActiveTabLabelSelector, searchForegroundColorSelector, bioCardSelector, postEditorToolbarSelector, twitterMainAvatarSelector, searchProfileAvatarSelector, searchProfileAvatarParentSelector, searchAvatarSelectorInput, searchAvatarSelectorImage, searchUseCellSelector */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79304);
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11710);
/* harmony import */ var _postBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7068);




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
const searchProfileTabPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="navigation"] + * > div[aria-label]:not([role="progressbar"])')
;
const searchProfileTabLoseConnectionPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="navigation"] + * > div[dir="auto"]:not([role="progressbar"])')
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
const searchNickNameSelector = ()=>querySelector('[data-testid="tweet"] a:not([target]) > div > div[dir="auto"] > span > span')
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
const searchProfileSetAvatarSelector = ()=>_isMobile__WEBPACK_IMPORTED_MODULE_1__/* .isMobileTwitter */ .b ? searchProfessionalButtonSelector().closest(4).querySelector('div > div:nth-child(2) >div > div:nth-child(2)') : querySelector('[data-testid="ProfileBirthdate"]').closest(5).querySelector('div > div:nth-child(2) > div:nth-child(2)')
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

/***/ 95418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ek": () => (/* binding */ getBioDescription),
/* harmony export */   "S_": () => (/* binding */ usernameValidator),
/* harmony export */   "WM": () => (/* binding */ getTwitterId),
/* harmony export */   "o1": () => (/* binding */ getPersonalHomepage),
/* harmony export */   "wX": () => (/* binding */ getAvatar),
/* harmony export */   "y": () => (/* binding */ getNickname),
/* harmony export */   "yd": () => (/* binding */ getAvatarId)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32139);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10735);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93573);



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
    var ref;
    const node = (ref = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNickNameSelector */ .rf)().evaluate()) === null || ref === void 0 ? void 0 : ref.querySelector('span span');
    if (!node) return '';
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .collectNodeText */ .aW)(node);
};
const getTwitterId = ()=>{
    var ref, ref1;
    const ele = ((ref = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchAvatarSelector */ .Ls)().evaluate()) === null || ref === void 0 ? void 0 : ref.closest('a')) || ((ref1 = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNFTAvatarSelector */ .dA)().evaluate()) === null || ref1 === void 0 ? void 0 : ref1.closest('a'));
    if (ele) {
        const link = ele.getAttribute('href');
        if (link) {
            var ref2;
            const [, userId] = (ref2 = link.match(/^\/(\w+)\/(photo|nft)$/)) !== null && ref2 !== void 0 ? ref2 : [];
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

/***/ 85777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74926);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29909);


const twitterWorker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .twitterWorkerBase */ .x,
    ..._shared__WEBPACK_IMPORTED_MODULE_1__/* .twitterShared */ .p,
    tasks: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twitterWorker);


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