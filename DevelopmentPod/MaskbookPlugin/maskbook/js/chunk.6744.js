"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6744,9613],{

/***/ 12837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ SearchResultBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94531);


const PluginRenderer = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createInjectHooksRenderer */ .EK)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */ .Pz.visibility.useNotMinimalMode, (x)=>x.SearchResultBox
);
function SearchResultBox(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginRenderer, {}));
}


/***/ }),

/***/ 49257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ InputBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50266);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98174);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36190);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            display: 'block',
            width: '100%',
            border: `1px solid ${(0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).border}`,
            alignItems: 'center',
            padding: theme.spacing(1),
            boxSizing: 'border-box'
        },
        search: {
            marginBottom: 0,
            display: 'flex',
            alignItems: 'center'
        },
        input: {
            width: '100%'
        },
        iconButton: {
            padding: theme.spacing(0.5)
        },
        label: {
            width: '100%',
            paddingLeft: theme.spacing(1)
        }
    })
);
function InputBox(props) {
    const { label , children , onChange , value  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setVisible((v)=>!(!value || value.length === 0)
        );
    }, [
        value
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.root,
        elevation: 0,
        children: [
            visible ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                variant: "body2",
                className: classes.label,
                children: label
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: classes.search,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        size: "large",
                        className: classes.iconButton,
                        "aria-label": "label",
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                        className: classes.input,
                        placeholder: label,
                        value: value,
                        onChange: (e)=>{
                            setVisible(e.target.value.length !== 0);
                            onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
                        },
                        ...props.inputBaseProps
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 16053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22407);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94531);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(4477), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(1860)]).then(__webpack_require__.bind(__webpack_require__, 57621))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 92280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ EVM_Messages),
/* harmony export */   "k": () => (/* binding */ EVM_RPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44365);



if (false) {}
const EVM_Messages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const EVM_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(2189), __webpack_require__.e(6280)]).then(__webpack_require__.bind(__webpack_require__, 46280))
, EVM_Messages.events.rpc);


/***/ }),

/***/ 13826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ twitterEncoding)
/* harmony export */ });
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53723);
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

/***/ 73265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ twitterShared)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3025);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76108);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13138);
/* harmony import */ var _encoding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13826);
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53874);






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

/***/ 56744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(29980);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(13138);
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
    if (!(0,base/* isTwitter */.L3)(social_network.activatedSocialNetworkUI)) return '';
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
var shared = __webpack_require__(73265);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitFriends.ts
var InitFriends = __webpack_require__(96625);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(53752);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(86865);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/openComposeBox.ts


function openComposeBoxTwitter(content, options) {
    messages/* MaskMessages.events.requestComposition.sendToLocal */.q.events.requestComposition.sendToLocal({
        reason: 'timeline',
        open: true,
        content: typeof content === 'string' ? (0,shared_base_src/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(35520);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/selector.ts
var selector = __webpack_require__(23602);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/postBox.ts
var postBox = __webpack_require__(87450);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(79918);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/isMobile.ts
var isMobile = __webpack_require__(67787);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/pasteTextToComposition.ts







/**
 * Wait for up to 5000 ms
 * If not complete, let user do it.
 */ const pasteTextToCompositionTwitter = (text, opt)=>{
    const interval = 500;
    const timeout = 5000;
    const worker = async function(abort) {
        const checkSignal = ()=>{
            if (abort.signal.aborted) throw new Error('Aborted');
        };
        if (!(0,postBox/* isCompose */.iv)() && !(0,postBox/* hasEditor */.Wu)()) {
            // open tweet window
            await (0,dom/* untilElementAvailable */.ft)((0,selector/* newPostButtonSelector */.nS)());
            (0,selector/* newPostButtonSelector */.nS)().evaluate().click();
            checkSignal();
        }
        // get focus
        const i = (0,selector/* postEditorDraftContentSelector */.Y5)();
        await (0,dom/* untilElementAvailable */.ft)(i);
        checkSignal();
        while(!(0,postBox/* hasFocus */.uf)(i)){
            i.evaluate().focus();
            checkSignal();
            await (0,shared_base_src/* delay */.gw)(interval);
        }
        // paste
        isMobile/* isMobileTwitter */.b ? (0,sdk/* inputText */.iJ)(text) : (0,sdk/* pasteText */.M1)(text);
        await (0,shared_base_src/* delay */.gw)(interval);
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
    const abortCtr = new AbortController();
    setTimeout(()=>{
        abortCtr.abort();
    }, timeout);
    worker(abortCtr).then(undefined, (error)=>fail(error)
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
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/user.ts
var user = __webpack_require__(53874);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/collecting/identity.ts








function resolveLastRecognizedIdentityInner(ref, cancel) {
    const selfSelector = (0,selector/* selfInfoSelectors */.qB)().handle;
    const assign = ()=>{
        const handle = (0,selector/* selfInfoSelectors */.qB)().handle.evaluate();
        const nickname = (0,selector/* selfInfoSelectors */.qB)().name.evaluate();
        const avatar = (0,selector/* selfInfoSelectors */.qB)().userAvatar.evaluate();
        if (!(0,isNil/* default */.Z)(handle)) {
            ref.value = {
                identifier: new shared_base_src/* ProfileIdentifier */.WO(base/* twitterBase.networkIdentifier */.oQ.networkIdentifier, handle),
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
        await (0,shared_base_src/* delay */.gw)(500);
        const bio = (0,user/* getBioDescription */.Ek)();
        const homepage = (0,user/* getPersonalHomepage */.o1)();
        const nickname = (0,user/* getNickname */.y)();
        const handle = (0,user/* getTwitterId */.WM)();
        const avatar = (0,user/* getAvatar */.wX)();
        ref.value = {
            identifier: new shared_base_src/* ProfileIdentifier */.WO(base/* twitterBase.networkIdentifier */.oQ.networkIdentifier, handle),
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
    recognized: social_network.creator.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveLastRecognizedIdentityInner(this.recognized, cancel);
    }
};
const CurrentVisitingIdentityProviderTwitter = {
    hasDeprecatedPlaceholderName: false,
    recognized: social_network.creator.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveCurrentVisitingIdentityInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(92610);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/defaultTo.js
var defaultTo = __webpack_require__(51670);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flattenDeep.js
var flattenDeep = __webpack_require__(65648);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/url.ts
var url = __webpack_require__(42771);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var src_utils = __webpack_require__(76108);
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
    const nameElementInQuoted = (0,dom/* nthChild */.vv)(tweetElement, 0, 0, 0, 0, 0);
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
            if (!node.nodeValue) return (0,shared_base_src/* makeTypedMessageEmpty */.WM)();
            return (0,shared_base_src/* makeTypedMessageText */.P)(node.nodeValue);
        } else if (node instanceof HTMLAnchorElement) {
            const anchor = node;
            var ref;
            const href = (ref = anchor.getAttribute('title')) !== null && ref !== void 0 ? ref : anchor.getAttribute('href');
            const content = anchor.textContent;
            if (!content) return (0,shared_base_src/* makeTypedMessageEmpty */.WM)();
            return (0,shared_base_src/* makeTypedMessageAnchor */.Jv)(resolve(content), href !== null && href !== void 0 ? href : '', content);
        } else if (node instanceof HTMLImageElement) {
            const image = node;
            const src = image.getAttribute('src');
            const matched = src === null || src === void 0 ? void 0 : src.match(/emoji\/v2\/svg\/([\w\-]+)\.svg/);
            if (matched === null || matched === void 0 ? void 0 : matched[1]) {
                const codePoints = matched[1].split('-').map((x)=>Number.parseInt(`0x${x}`, 16)
                );
                return (0,shared_base_src/* makeTypedMessageText */.P)((0,src_utils/* collectTwitterEmoji */._r)(codePoints));
            }
            return (0,shared_base_src/* makeTypedMessageEmpty */.WM)();
        } else if (node.childNodes.length) {
            const flattened = (0,flattenDeep/* default */.Z)(Array.from(node.childNodes).map(make));
            // conjunct text messages under same node
            if (flattened.every(shared_base_src/* isTypedMessageText */.Rz)) return (0,shared_base_src/* makeTypedMessageText */.P)(flattened.map((x)=>x.content
            ).join(''));
            return flattened;
        } else return (0,shared_base_src/* makeTypedMessageEmpty */.WM)();
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
    ).flatMap((node)=>(0,url/* canonifyImgUrl */.WR)((ref = node.getAttribute('src')) !== null && ref !== void 0 ? ref : '')
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
        messages: postContentMessageParser(node).filter((x)=>!(0,shared_base_src/* isTypedMessageEmpty */.YN)(x)
        )
    };
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(77184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(8231);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(74936);
// EXTERNAL MODULE: ./utils-pure/index.ts + 3 modules
var utils_pure = __webpack_require__(49613);
// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared_0 = __webpack_require__(89650);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(82125);
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
            ifUsingMask(new shared_base_src/* ProfileIdentifier */.WO('twitter.com', (0,selector/* bioPageUserIDSelector */.QK)(main).evaluate() || '')).then(()=>{
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
const ifUsingMask = (0,utils_pure/* memoizePromise */.J3)((pid)=>service/* default.Identity.queryProfile */.ZP.Identity.queryProfile(pid).then((x)=>x.linkedPersona ? Promise.resolve() : Promise.reject()
    )
, (pid)=>pid.toText()
);

// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(3025);
// EXTERNAL MODULE: ./src/social-network-adaptor/utils.ts
var social_network_adaptor_utils = __webpack_require__(6);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/collecting/post.ts













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
    const getParentTweetNode = (node)=>{
        return node.closest('[data-testid="tweet"]');
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
        const info = shared/* twitterShared.utils.createPostContext */.p.utils.createPostContext({
            comments: undefined,
            rootElement: proxy,
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
            onRemove: ()=>postStore.delete(proxy)
            ,
            onNodeMutation: run
        };
    }).assignKeys((node)=>{
        const tweetNode = getTweetNode(node);
        const parentTweetNode = (tweetNode === null || tweetNode === void 0 ? void 0 : tweetNode.getAttribute('role')) === 'link' ? getParentTweetNode(tweetNode) : null;
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
    posts: social_network.creator.EmptyPostProviderState(),
    start (cancel) {
        registerPostCollectorInner(this.posts, cancel);
    }
};
function collectPostInfo(tweetNode, info, cancel) {
    if (!tweetNode) return;
    if (cancel === null || cancel === void 0 ? void 0 : cancel.aborted) return;
    const { pid , messages , handle , name , avatar  } = postParser(tweetNode);
    if (!pid) return;
    const postBy = handle ? new shared_base_src/* ProfileIdentifier */.WO(base/* twitterBase.networkIdentifier */.oQ.networkIdentifier, handle) : shared_base_src/* ProfileIdentifier.unknown */.WO.unknown;
    info.postID.value = pid;
    if (!info.postBy.value.equals(postBy)) info.postBy.value = postBy;
    info.nickname.value = name;
    info.avatarURL.value = avatar || null;
    // decode steganographic image
    // don't add await on this
    const images = (0,dom/* untilElementAvailable */.ft)((0,selector/* postsImageSelector */.rk)(tweetNode), 10000).then(()=>postImagesParser(tweetNode)
    ).then((urls)=>{
        for (const url of urls)info.postMetadataImages.add(url);
        if (urls.length) return (0,shared_base_src/* makeTypedMessageTupleFromList */.n_)(...urls.map((x)=>(0,shared_base_src/* makeTypedMessageImage */.as)(x)
        ));
        return (0,shared_base_src/* makeTypedMessageEmpty */.WM)();
    }).catch(()=>(0,shared_base_src/* makeTypedMessageEmpty */.WM)()
    );
    info.postMessage.value = (0,shared_base_src/* makeTypedMessageTuple */.Zw)([
        ...messages,
        (0,shared_base_src/* makeTypedMessagePromise */.Ng)(images)
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
var src = __webpack_require__(21949);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(18702);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(57288);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/customization/twitter-color-schema.json
var twitter_color_schema = __webpack_require__(88674);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(14767);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/customization/custom.ts











const primaryColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    29,
    161,
    242
]));
const primaryColorContrastColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    255,
    255,
    255
]));
const backgroundColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    255,
    255,
    255
]));
const currentTheme = new umd.ValueRef('light');
const PaletteModeProviderTwitter = {
    current: (0,shared_base_src/* SubscriptionFromValueRef */.Jf)(currentTheme),
    start: startWatchThemeColor
};
function startWatchThemeColor(signal) {
    function updateThemeColor() {
        const color = (0,theme_tools/* getBackgroundColor */.dF)((0,selector/* composeAnchorSelector */.QG)().evaluate());
        const contrastColor = (0,theme_tools/* getForegroundColor */.aF)((0,selector/* composeAnchorTextSelector */.xH)().evaluate());
        const backgroundColor = (0,theme_tools/* getBackgroundColor */.dF)(document.body);
        currentTheme.value = (0,theme_tools/* isDark */._T)((0,theme_tools/* fromRGB */.f2)(backgroundColor)) ? 'dark' : 'light';
        if (color) primaryColorRef.value = color;
        if (contrastColor) primaryColorContrastColorRef.value = contrastColor;
        if (backgroundColor) backgroundColorRef.value = backgroundColor;
    }
    const watcher = new umd.MutationObserverWatcher((0,selector/* composeAnchorSelector */.QG)()).addListener('onAdd', updateThemeColor).addListener('onChange', updateThemeColor).startWatch({
        childList: true,
        subtree: true
    });
    signal.addEventListener('abort', ()=>watcher.stopWatch()
    );
}
function useThemeTwitterVariant(baseTheme) {
    const primaryColor = (0,src/* useValueRef */.E)(primaryColorRef);
    const primaryContrastColor = (0,src/* useValueRef */.E)(primaryColorContrastColorRef);
    const backgroundColor = (0,src/* useValueRef */.E)(backgroundColorRef);
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

// EXTERNAL MODULE: ./src/components/InjectedComponents/ToolboxUnstyled.tsx
var ToolboxUnstyled = __webpack_require__(63948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(40299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(18283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(9506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(95501);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ./src/components/GuideStep/index.tsx
var GuideStep = __webpack_require__(5694);
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
const addDO_NOT_USEI18N = (0,shared_base_src/* createI18NBundle */.C9)('DO_NOT_USE', languages);
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
var SearchResultBox = __webpack_require__(12837);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/SearchResultBox.tsx






function injectSearchResultBoxAtTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchResultHeadingSelector */.R9)());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultBox/* SearchResultBox */.L, {}));
}

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/color@4.2.0/node_modules/color/index.js
var color = __webpack_require__(91102);
var color_default = /*#__PURE__*/__webpack_require__.n(color);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/utils/hooks/useLocationChange.ts

function useLocationChange(handler) {
    (0,react.useEffect)(()=>{
        window.addEventListener('locationchange', handler);
        return ()=>window.removeEventListener('locationchange', handler)
        ;
    }, [
        handler
    ]);
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/ProfileTab.tsx






function ProfileTab(props) {
    const { reset , clear , children , classes , title  } = props;
    const [active, setActive] = (0,react.useState)(false);
    const onClick = (0,react.useCallback)(()=>{
        src_utils/* MaskMessages.events.profileTabUpdated.sendToLocal */.ql.events.profileTabUpdated.sendToLocal({
            show: true
        });
        setActive(true);
        clear();
    }, [
        clear
    ]);
    useLocationChange(()=>{
        src_utils/* MaskMessages.events.profileTabUpdated.sendToLocal */.ql.events.profileTabUpdated.sendToLocal({
            show: false
        });
        setActive(false);
        reset();
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.tab,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            className: classnames_default()(classes.button, active ? classes.selected : ''),
            onClick: onClick,
            component: "div",
            children: [
                title,
                active && children ? children : null
            ]
        })
    }, "nfts"));
}

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
        tab: {
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTab, {
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(70520);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(2974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(19149);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(69172);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAddressNames.ts


function useAddressNames(identity, sorter) {
    const { getAddressNamesList  } = (0,context/* useWeb3Context */.Z_)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const addressNames = await getAddressNamesList(identity);
        return sorter ? addressNames.sort(sorter) : addressNames;
    }, [
        identity,
        getAddressNamesList
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PageTabItem.tsx




const PageTabItem_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        hidden: {
            display: 'none'
        },
        button: {
            border: `1px solid ${theme.palette.text.primary} !important`,
            color: `${theme.palette.text.primary} !important`,
            borderRadius: 9999
        },
        selected: {
            border: `1px solid ${theme.palette.primary.main} !important`,
            color: `${theme.palette.primary.main} !important`
        }
    })
);
function PageTabItem(props) {
    const { tab , selected , onClick  } = props;
    const { classes  } = PageTabItem_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
        className: classnames_default()(selected ? classes.selected : classes.button),
        variant: "outlined",
        size: "medium",
        onClick: ()=>{
            return onClick === null || onClick === void 0 ? void 0 : onClick(tab);
        },
        children: tab.label
    }));
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/PageTab.tsx



const PageTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
        }
    })
);
function PageTab(props) {
    const { tabs , selectedTab , onChange  } = props;
    const { classes  } = PageTab_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: tabs.map((x)=>{
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PageTabItem, {
                tab: x,
                selected: (selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.ID) === x.ID,
                onClick: (tab)=>{
                    onChange === null || onChange === void 0 ? void 0 : onChange(tab);
                }
            }, x.ID));
        })
    }));
}

// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(68836);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/ProfileTabContent.tsx












function getTabContent(tabId) {
    return (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor.visibility.useAnyMode */.Pz.visibility.useAnyMode, (x1)=>{
        var ref, ref1;
        const tab = (ref = x1.ProfileTabs) === null || ref === void 0 ? void 0 : ref.find((x)=>x.ID === tabId
        );
        if (!tab) return;
        return (ref1 = tab.UI) === null || ref1 === void 0 ? void 0 : ref1.TabContent;
    });
}
const ProfileTabContent_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1
        },
        tags: {
            padding: theme.spacing(2)
        },
        metadata: {},
        content: {
            position: 'relative',
            padding: theme.spacing(1)
        }
    })
);
function ProfileTabContent(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const classes = (0,theme_src/* useStylesExtends */.Bc)(ProfileTabContent_useStyles(), props);
    const [hidden, setHidden] = (0,react.useState)(true);
    const [selectedTab, setSelectedTab] = (0,react.useState)();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const { value: addressNames , loading: loadingAddressNames  } = useAddressNames(identity);
    var ref5, ref2;
    const tabs = (0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)('any').flatMap((x)=>{
        var ref3;
        return (ref5 = (ref3 = x.ProfileTabs) === null || ref3 === void 0 ? void 0 : ref3.map((y)=>({
                ...y,
                pluginID: x.ID
            })
        )) !== null && ref5 !== void 0 ? ref5 : [];
    }).filter((z)=>{
        var ref, ref4;
        return (ref2 = (ref = z.Utils) === null || ref === void 0 ? void 0 : (ref4 = ref.shouldDisplay) === null || ref4 === void 0 ? void 0 : ref4.call(ref, identity, addressNames)) !== null && ref2 !== void 0 ? ref2 : true;
    }).sort((a, z)=>{
        // order those tabs from next id first
        if (a.pluginID === plugin_infra_src/* PluginId.NextID */.je.NextID) return -1;
        if (z.pluginID === plugin_infra_src/* PluginId.NextID */.je.NextID) return 1;
        // order those tabs from collectible first
        if (a.pluginID === plugin_infra_src/* PluginId.Collectible */.je.Collectible) return -1;
        if (z.pluginID === plugin_infra_src/* PluginId.Collectible */.je.Collectible) return 1;
        // place those tabs from debugger last
        if (a.pluginID === plugin_infra_src/* PluginId.Debugger */.je.Debugger) return 1;
        if (z.pluginID === plugin_infra_src/* PluginId.Debugger */.je.Debugger) return -1;
        // place those tabs from dao before the last
        if (a.pluginID === plugin_infra_src/* PluginId.DAO */.je.DAO) return 1;
        if (z.pluginID === plugin_infra_src/* PluginId.DAO */.je.DAO) return -1;
        return a.priority - z.priority;
    });
    const selectedTabComputed = selectedTab !== null && selectedTab !== void 0 ? selectedTab : (0,head/* default */.Z)(tabs);
    useLocationChange(()=>{
        setSelectedTab(undefined);
    });
    (0,useUpdateEffect/* default */.Z)(()=>{
        setSelectedTab(undefined);
    }, [
        identity.identifier
    ]);
    (0,react.useEffect)(()=>{
        return src_utils/* MaskMessages.events.profileTabUpdated.on */.ql.events.profileTabUpdated.on((data)=>{
            setHidden(!data.show);
        });
    }, [
        identity
    ]);
    const ContentComponent = (0,react.useMemo)(()=>{
        var ref;
        return getTabContent((ref = selectedTabComputed === null || selectedTabComputed === void 0 ? void 0 : selectedTabComputed.ID) !== null && ref !== void 0 ? ref : '');
    }, [
        selectedTabComputed,
        identity.identifier
    ]);
    if (hidden) return null;
    if (loadingAddressNames) return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            sx: {
                paddingTop: 4,
                paddingBottom: 4
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.tags,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PageTab, {
                    tabs: tabs,
                    selectedTab: selectedTabComputed,
                    onChange: setSelectedTab
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentComponent, {
                    addressNames: addressNames,
                    identity: identity
                })
            })
        ]
    }));
}

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
const injection_ProfileTabContent_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const props = ProfileTabContent_getStyleProps();
    return {
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
    const { classes  } = injection_ProfileTabContent_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContent, {
        classes: classes
    }));
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx + 1 modules
var PostReplacer = __webpack_require__(95751);
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
var PageInspector = __webpack_require__(74730);
// EXTERNAL MODULE: ./src/components/shared/NotSetupYetPrompt.tsx + 1 modules
var NotSetupYetPrompt = __webpack_require__(27731);
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

// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 16 modules
var Composition = __webpack_require__(4684);
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
var PostDialogHint = __webpack_require__(547);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.2.5_78136fa2e471fe4795d123fe9b8f9a75/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(59197);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(87050);
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
        const content = settings/* sayHelloShowed */.Pg[base/* twitterBase.networkIdentifier */.oQ.networkIdentifier].value ? undefined : (0,shared_base_src/* makeTypedMessageText */.P)(t('setup_guide_say_hello_content') + t('setup_guide_say_hello_follow', {
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

// EXTERNAL MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx
var StartSetupGuide = __webpack_require__(56630);
// EXTERNAL MODULE: ./src/social-network/defaults/automation/AttachImageToComposition.ts
var AttachImageToComposition = __webpack_require__(54216);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostInspector.tsx + 17 modules
var PostInspector = __webpack_require__(42924);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/encoding.ts
var encoding = __webpack_require__(13826);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(28620);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(54575);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsyncRetry.js
var esm_useAsyncRetry = __webpack_require__(29105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNull.js
var isNull = __webpack_require__(32139);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ./src/plugins/EVM/messages.ts
var EVM_messages = __webpack_require__(92280);
// EXTERNAL MODULE: ../web3-providers/src/index.ts + 21 modules
var web3_providers_src = __webpack_require__(42189);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(91339);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ./src/plugins/Avatar/utils/index.ts







function getLastSalePrice(lastSale) {
    var ref;
    if (!(lastSale === null || lastSale === void 0 ? void 0 : lastSale.total_price) || !(lastSale === null || lastSale === void 0 ? void 0 : (ref = lastSale.payment_token) === null || ref === void 0 ? void 0 : ref.decimals)) return;
    return (0,formatter/* formatBalance */.az)(lastSale.total_price, lastSale.payment_token.decimals);
}
async function getNFT(address, tokenId) {
    var ref, ref1, ref2, ref3, ref4, ref5;
    const asset = await EVM_messages/* EVM_RPC.getAsset */.k.getAsset({
        address,
        tokenId,
        chainId: types/* ChainId.Mainnet */.a_.Mainnet,
        provider: types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA
    });
    var ref6, ref7, ref8, ref9;
    const amount = (ref9 = (ref8 = (0,web3_providers_src/* getOrderUnitPrice */.bb)(asset === null || asset === void 0 ? void 0 : (ref = asset.desktopOrder) === null || ref === void 0 ? void 0 : ref.current_price, (ref6 = asset === null || asset === void 0 ? void 0 : (ref1 = asset.desktopOrder) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.payment_token_contract) === null || ref2 === void 0 ? void 0 : ref2.decimals) !== null && ref6 !== void 0 ? ref6 : 0, (ref7 = asset === null || asset === void 0 ? void 0 : (ref3 = asset.desktopOrder) === null || ref3 === void 0 ? void 0 : ref3.quantity) !== null && ref7 !== void 0 ? ref7 : '1')) !== null && ref8 !== void 0 ? ref8 : getLastSalePrice(asset === null || asset === void 0 ? void 0 : asset.last_sale)) !== null && ref9 !== void 0 ? ref9 : base_src/* ZERO */.xE;
    var ref10, ref11, ref12, _address, ref13;
    return {
        amount: new (bignumber_default())(amount).toFixed(),
        name: (ref10 = asset === null || asset === void 0 ? void 0 : asset.name) !== null && ref10 !== void 0 ? ref10 : '',
        symbol: (ref11 = asset === null || asset === void 0 ? void 0 : (ref4 = asset.desktopOrder) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.payment_token_contract) === null || ref5 === void 0 ? void 0 : ref5.symbol) !== null && ref11 !== void 0 ? ref11 : 'ETH',
        image: (ref12 = asset === null || asset === void 0 ? void 0 : asset.image_url) !== null && ref12 !== void 0 ? ref12 : '',
        owner: (_address = asset === null || asset === void 0 ? void 0 : asset.top_ownerships[0].owner.address) !== null && _address !== void 0 ? _address : '',
        slug: (ref13 = asset === null || asset === void 0 ? void 0 : asset.slug) !== null && ref13 !== void 0 ? ref13 : ''
    };
}
async function createNFT(address, tokenId) {
    return EVM_messages/* EVM_RPC.getNFT */.k.getNFT({
        address,
        tokenId,
        chainId: types/* ChainId.Mainnet */.a_.Mainnet,
        provider: types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA
    });
}
async function getImage(image) {
    const blob = await Services.Helper.fetch(image);
    return await blobToBase64(blob);
}
function blobToBase64(blob) {
    return new Promise((resolve, _)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>resolve(reader.result)
        ;
        reader.readAsDataURL(blob);
    });
}
function toPNG(image) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if ((0,isNull/* default */.Z)(ctx)) throw new Error('Canvas was not supported');
        img.addEventListener('load', ()=>{
            [canvas.width, canvas.height] = [
                img.width,
                img.height
            ];
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.toBlob((blob)=>{
                resolve(blob);
            }, 'image/png');
        });
        img.addEventListener('error', ()=>{
            reject(new Error('Could not load image'));
        });
        img.setAttribute('CrossOrigin', 'Anonymous');
        img.src = image;
    });
}
function formatPrice(amount, symbol) {
    const _amount = new (bignumber_default())(amount !== null && amount !== void 0 ? amount : '0');
    if (_amount.isZero()) return '';
    if (_amount.isLessThan(1)) return `${_amount.toFixed(2)} ${symbol}`;
    if (_amount.isLessThan(1000)) return `${_amount.toFixed(1)} ${symbol}`;
    if (_amount.isLessThan(1000000)) return `${_amount.div(1000000).toFixed(1)}K ${symbol}`;
    return `${_amount.div(1000000).toFixed(1)}M ${symbol}`;
}
function formatText(name, tokenId) {
    const _name = name.replace(/#\d*/, '').trim();
    let token = tokenId;
    if (tokenId.length > 10) {
        token = tokenId.slice(0, 6) + '...' + tokenId.slice(-4);
    }
    return `${_name} #${token}`;
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useNFT.ts


const NFTCache = new Map();
function useNFT(address, tokenId) {
    return (0,esm_useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !tokenId) return;
        let f = NFTCache.get(`${address}-${tokenId}`);
        if (!f) {
            f = getNFT(address, tokenId);
            NFTCache.set(`${address}-${tokenId}`, f);
        }
        return f;
    }, [
        address,
        tokenId,
        NFTCache,
        getNFT
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(32637);
// EXTERNAL MODULE: ./src/plugins/Avatar/messages.ts
var Avatar_messages = __webpack_require__(16053);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useNFTAvatar.ts



function useNFTAvatar(userId) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!userId || userId === '$unknown') return;
        return Avatar_messages/* PluginNFTAvatarRPC.getNFTAvatar */.B.getNFTAvatar(userId, social_network.activatedSocialNetworkUI.networkIdentifier);
    }, [
        userId,
        social_network.activatedSocialNetworkUI.networkIdentifier
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/index.ts



// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/RainbowBox.tsx


const rainbowBorderKeyFrames = theme_src/* keyframes */.F4`
    0%, to {
        border-color: #00f8ff;
        box-shadow: 0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    20% {
        border-color: #a4ff00;
        box-shadow: 0 5px 15px rgba(164, 255, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    40% {
        border-color: #f7275e;
        box-shadow: 0 5px 15px rgba(247, 39, 94, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    60% {
        border-color: #ffd300;
        box-shadow: 0 5px 15px rgba(255, 211, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    80% {
        border-color: #ff8a00;
        box-shadow: 0 5px 15px rgba(255, 138, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
`;
const RainbowBox_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, { width , height , radius ='100%'  })=>({
        root: {
            transform: 'scale(0.97)',
            animation: `${rainbowBorderKeyFrames} 6s linear infinite`,
            width,
            height,
            boxShadow: '0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2)',
            transition: 'none',
            borderRadius: radius,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 0,
            border: '2px solid #00f8ff'
        }
    })
);
function RainbowBox(props) {
    const classes = (0,theme_src/* useStylesExtends */.Bc)(RainbowBox_useStyles({
        width: props.width,
        height: props.height,
        radius: props.radius
    }), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: props.children
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarRing.tsx



const NFTAvatarRing_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            overflow: 'unset'
        }
    })
);
function NFTAvatarRing(props) {
    const { classes  } = NFTAvatarRing_useStyles();
    const { stroke , strokeWidth , fontSize , text , width , id , price  } = props;
    const avatarSize = width + 1;
    const R = avatarSize / 2;
    const path_r = R - strokeWidth + fontSize / 2;
    const x1 = R - path_r;
    const y1 = R;
    const x2 = R + path_r;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RainbowBox, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            className: classes.root,
            width: "100%",
            height: "100%",
            viewBox: `0 0 ${avatarSize} ${avatarSize}`,
            id: id,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            id: `${id}-path-name`,
                            fill: "none",
                            stroke: "none",
                            strokeWidth: "0",
                            d: `M${x1} ${y1} A${path_r} ${path_r} 0 1 1 ${x2} ${y1}`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            id: `${id}-path-price`,
                            fill: "none",
                            stroke: "none",
                            strokeWidth: "0",
                            d: `M${x1} ${y1} A${path_r} ${path_r} 0 1 0 ${x2} ${y1}`
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
                /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                    cx: R,
                    cy: R,
                    r: R - strokeWidth / 2 + 1,
                    fill: "none",
                    stroke: stroke,
                    strokeWidth: strokeWidth
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("pattern", {
                    id: `${id}-pattern`,
                    x: "0",
                    y: "0",
                    width: "300%",
                    height: "100%",
                    patternUnits: "userSpaceOnUse",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                        cx: R,
                        cy: R,
                        r: R,
                        fill: `url(#${id}-gradient)`,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("animateTransform", {
                            attributeName: "transform",
                            type: "rotate",
                            dur: "10s",
                            repeatCount: "indefinite",
                            from: `0 ${R} ${R}`,
                            to: `360 ${R} ${R}`
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                    x: "0%",
                    textAnchor: "middle",
                    fill: `url(#${id}-pattern)`,
                    fontFamily: "sans-serif",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textPath", {
                        xlinkHref: `#${id}-path-name`,
                        startOffset: "50%",
                        rotate: "auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tspan", {
                            fontWeight: "bold",
                            fontSize: fontSize,
                            children: text
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                    x: "0%",
                    textAnchor: "middle",
                    fill: `url(#${id}-pattern)`,
                    fontFamily: "sans-serif",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textPath", {
                        xlinkHref: `#${id}-path-price`,
                        startOffset: "50%",
                        rotate: "auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tspan", {
                            fontWeight: "bold",
                            fontSize: fontSize,
                            dy: "0.5em",
                            children: price
                        })
                    })
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadge.tsx







const NFTBadge_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        image: {
            position: 'absolute',
            bottom: 0
        }
    })
);
function NFTBadge(props) {
    const { avatar , size =140  } = props;
    const classes = (0,theme_src/* useStylesExtends */.Bc)(NFTBadge_useStyles(), props);
    const { value ={
        amount: '0',
        symbol: 'ETH',
        name: '',
        slug: ''
    } , loading  } = useNFT(avatar.address, avatar.tokenId);
    const { amount , symbol , name , slug  } = value;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        onClick: (e)=>{
            e.preventDefault();
            window.open((0,pipes/* resolveOpenSeaLink */.QN)(avatar.address, avatar.tokenId), '_blank');
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: (0,pipes/* resolveOpenSeaLink */.QN)(avatar.address, avatar.tokenId),
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarRing, {
                id: "NFTAvatarRing",
                width: size,
                strokeWidth: 14,
                stroke: "black",
                fontSize: 9,
                text: loading ? 'loading...' : `${formatText(name, avatar.tokenId)} ${slug.toLowerCase() === 'ens' ? 'ENS' : ''}`,
                price: loading ? '' : formatPrice(amount, symbol)
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(39973);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(64069);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useSocket.ts
var useSocket = __webpack_require__(73841);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useImageChecker.ts
var useImageChecker = __webpack_require__(16154);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Skeleton/Skeleton.js + 1 modules
var Skeleton = __webpack_require__(56118);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(41460);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(52646);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(32364);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/InputBox.tsx
var InputBox = __webpack_require__(49257);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/AddNFT.tsx









const AddNFT_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {},
        addNFT: {
            position: 'absolute',
            right: 20,
            top: 10
        },
        input: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        message: {
            '&:before': {
                content: '""',
                marginRight: theme.spacing(0.5),
                borderLeft: '2px solid'
            }
        }
    })
);
function AddNFT(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = AddNFT_useStyles();
    const [address1, setAddress] = (0,react.useState)('');
    const [tokenId1, setTokenId] = (0,react.useState)('');
    const [message, setMessage] = (0,react.useState)('');
    const { onClose , open , onAddClick  } = props;
    const account = (0,useAccount/* useAccount */.m)();
    const onClick = (0,react.useCallback)(async ()=>{
        if (!address1) {
            setMessage(t('nft_input_address_label'));
            return;
        }
        if (!tokenId1) {
            setMessage(t('nft_input_tokenid_label'));
            return;
        }
        createNFT(address1, tokenId1).then((token)=>{
            if (!token || !(0,address/* isSameAddress */.Wr)(token === null || token === void 0 ? void 0 : token.info.owner, account)) {
                setMessage(t('nft_owner_hint'));
                return;
            }
            onAddClick(token);
            handleClose();
        }).catch((error)=>setMessage(t('nft_owner_hint'))
        );
    }, [
        tokenId1,
        address1,
        onAddClick,
        onClose
    ]);
    const onAddressChange = (0,react.useCallback)((address)=>{
        setMessage('');
        setAddress(address);
    }, []);
    const onTokenIdChange = (0,react.useCallback)((tokenId)=>{
        setMessage('');
        setTokenId(tokenId);
    }, []);
    const handleClose = ()=>{
        setMessage('');
        onClose();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t('nft_add_dialog_title'),
        open: open,
        onClose: handleClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.addNFT,
                    variant: "contained",
                    size: "small",
                    onClick: onClick,
                    children: t('nft_add_button_label')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.input,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBox/* InputBox */.W, {
                        label: "Input Contract Address",
                        onChange: (address)=>onAddressChange(address)
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.input,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBox/* InputBox */.W, {
                        label: "Token ID",
                        onChange: (tokenId)=>onTokenIdChange(tokenId)
                    })
                }),
                message ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "error",
                    className: classes.message,
                    children: message
                }) : null
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTImage.tsx




const NFTImage_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        imgBackground: {
            position: 'relative',
            margin: theme.spacing(0.5, 1),
            borderRadius: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        icon: {
            position: 'absolute',
            top: 5,
            right: 5,
            width: 24,
            height: 24
        },
        image: {
            width: 97,
            height: 97,
            objectFit: 'cover',
            borderRadius: '100%',
            boxSizing: 'border-box',
            '&:hover': {
                border: `4px solid ${theme.palette.primary.main}`
            }
        },
        selected: {
            border: `4px solid ${theme.palette.primary.main}`
        }
    })
);
function isSameNFT(a, b) {
    return (0,address/* isSameAddress */.Wr)(a.contractDetailed.address, b === null || b === void 0 ? void 0 : b.contractDetailed.address) && a.contractDetailed.chainId === (b === null || b === void 0 ? void 0 : b.contractDetailed.chainId) && a.tokenId === (b === null || b === void 0 ? void 0 : b.tokenId);
}
function NFTImage(props) {
    const { token , onChange , selectedToken  } = props;
    const { classes  } = NFTImage_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.imgBackground,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            onClick: ()=>onChange(token)
            ,
            src: token.info.imageURL,
            className: classnames_default()(classes.image, isSameNFT(token, selectedToken) ? classes.selected : '')
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatar.tsx













const NFTAvatar_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {},
        title: {
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14,
            alignItems: 'center'
        },
        account: {
            display: 'flex',
            alignItems: 'center'
        },
        galleryItem: {
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 4,
            padding: theme.spacing(1)
        },
        gallery: {
            display: 'flex',
            flexFlow: 'row wrap',
            height: 150,
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        button: {
            textAlign: 'center',
            paddingTop: theme.spacing(1),
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row'
        },
        setNFTAvatar: {},
        skeleton: {
            width: 97,
            height: 97,
            objectFit: 'cover',
            borderRadius: '100%',
            boxSizing: 'border-box',
            padding: 6,
            margin: theme.spacing(0.5, 1)
        },
        skeletonBox: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        error: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
        },
        changeButton: {
            fontSize: 14
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: theme.spacing(1)
        }
    })
);
function NFTAvatar(props) {
    var ref;
    const { onChange  } = props;
    const classes = (0,theme_src/* useStylesExtends */.Bc)(NFTAvatar_useStyles(), props);
    const account = (0,plugin_infra_src/* useAccount */.mA)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [selectedToken, setSelectedToken] = (0,react.useState)();
    const [open_, setOpen_] = (0,react.useState)(false);
    const [collectibles_, setCollectibles_] = (0,react.useState)([]);
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { Utils  } = (0,plugin_infra_src/* useWeb3State */.dM)();
    const { data: collectibles , error , retry , state  } = (0,useCollectibles/* useCollectibles */.d)(account, types/* ChainId.Mainnet */.a_.Mainnet);
    const onClick = (0,react.useCallback)(async ()=>{
        if (!selectedToken) return;
        onChange(selectedToken);
        setSelectedToken(undefined);
    }, [
        onChange,
        selectedToken
    ]);
    const onAddClick = (0,react.useCallback)((token)=>{
        setSelectedToken(token);
        setCollectibles_((tokens)=>(0,uniqBy/* default */.Z)([
                token,
                ...tokens
            ], (x)=>x.contractDetailed.address && x.tokenId
            )
        );
    }, []);
    const { openDialog: openSelectProviderDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.selectProviderDialogUpdated */.R$.events.selectProviderDialogUpdated);
    const LoadStatus = Array.from({
        length: 8
    }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.skeletonBox,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                variant: "rectangular",
                className: classes.skeleton
            })
        }, i)
    );
    const Retry = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.error,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textSecondary",
                children: t('dashboard_no_collectible_found')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.button,
                variant: "text",
                onClick: retry,
                children: t('plugin_collectible_retry')
            })
        ]
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                color: "textPrimary",
                                children: t('nft_list_title')
                            }),
                            account ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body1",
                                color: "textPrimary",
                                className: classes.account,
                                children: [
                                    t('nft_wallet_label'),
                                    ": ",
                                    (Utils === null || Utils === void 0 ? void 0 : (ref = Utils.formatAddress) === null || ref === void 0 ? void 0 : ref.call(Utils, account, 4)) || account,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        variant: "text",
                                        onClick: openSelectProviderDialog,
                                        size: "small",
                                        className: classes.changeButton,
                                        children: t('nft_wallet_change')
                                    })
                                ]
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                        chainId: chainId,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.galleryItem,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.gallery,
                                    children: state !== useSocket/* SocketState.done */.d.done && collectibles.length === 0 ? LoadStatus : error || collectibles.length === 0 && collectibles_.length === 0 ? Retry : (0,uniqBy/* default */.Z)([
                                        ...collectibles_,
                                        ...collectibles
                                    ], (x)=>x.contractDetailed.address && x.tokenId
                                    ).map((token, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTImageCollectibleAvatar, {
                                            token: token,
                                            selectedToken: selectedToken,
                                            setSelectedToken: setSelectedToken
                                        }, i)
                                    )
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.buttons,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            variant: "outlined",
                                            size: "small",
                                            onClick: ()=>setOpen_(true)
                                            ,
                                            children: t('nft_button_add_collectible')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            variant: "contained",
                                            size: "small",
                                            sx: {
                                                marginLeft: 2
                                            },
                                            onClick: onClick,
                                            disabled: !selectedToken,
                                            children: t('nft_button_set_avatar')
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddNFT, {
                open: open_,
                onClose: ()=>setOpen_(false)
                ,
                onAddClick: onAddClick
            })
        ]
    }));
}
function NFTImageCollectibleAvatar({ token , setSelectedToken , selectedToken  }) {
    var ref;
    const { classes  } = NFTAvatar_useStyles();
    const { value: isImageToken , loading  } = (0,useImageChecker/* useImageChecker */.v)((ref = token.info) === null || ref === void 0 ? void 0 : ref.imageURL);
    if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.skeletonBox,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
            animation: "wave",
            variant: "rectangular",
            className: classes.skeleton
        })
    }));
    return isImageToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTImage, {
        token: token,
        selectedToken: selectedToken,
        onChange: setSelectedToken
    }) : null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(71443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(85337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/trim.js
var trim = __webpack_require__(99589);
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
    const { value: _avatar4  } = useNFTAvatar(identity.identifier.userId);
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
        const ele = (0,selector/* searchTwitterAvatarSelector */.p$)().evaluate();
        if (ele) {
            const style = window.getComputedStyle(ele);
            var ref;
            return Number.parseInt((ref = style.width.replace('px', '')) !== null && ref !== void 0 ? ref : 0, 10);
        }
        return 0;
    }, [
        windowSize
    ]);
    const { classes  } = NFTAvatarInTwitter_useStyles();
    const [NFTEvent, setNFTEvent] = (0,react.useState)();
    const onUpdate = (data)=>{
        setNFTEvent(data);
    };
    // After the avatar is set, it cannot be saved immediately, and must wait until the avatar of twitter is updated
    (0,useAsync/* default */.Z)(async ()=>{
        if (!wallet || !NFTAvatar) return;
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
        }, identity.identifier.network).catch((error)=>{
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
                borderElement.current = linkDom.firstElementChild;
                // remove useless border
                linkDom.removeChild(linkDom.firstElementChild);
                const style = document.createElement('style');
                style.innerText = `
                ${rainbowBorderKeyFrames.styles}

                .rainbowBorder {
                    animation: ${rainbowBorderKeyFrames.name} 6s linear infinite;
                    box-shadow: 0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
                    transition: .125s ease;
                    border: 2px solid #00f8ff;
                }
            `;
                rainBowElement.current = linkDom.firstElementChild;
                if (showAvatar) linkDom.firstElementChild.classList.add('rainbowBorder');
                linkDom.appendChild(style);
            }
        }
        return ()=>{
            var ref;
            if ((linkDom === null || linkDom === void 0 ? void 0 : (ref = linkDom.lastElementChild) === null || ref === void 0 ? void 0 : ref.tagName) === 'STYLE') {
                linkDom.removeChild(linkDom.lastElementChild);
            }
            if (borderElement.current && (linkDom === null || linkDom === void 0 ? void 0 : linkDom.firstElementChild) !== borderElement.current) {
                var ref1;
                linkDom === null || linkDom === void 0 ? void 0 : linkDom.insertBefore(borderElement.current, linkDom.firstChild);
                (ref1 = rainBowElement.current) === null || ref1 === void 0 ? void 0 : ref1.classList.remove('rainbowBorder');
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
        children: showAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadge, {
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
    const imageBuffer = await (0,esm/* blobToArrayBuffer */.vZ)(image);
    (0,sdk/* hookInputUploadOnce */.ed)('image/png', 'avatar.png', new Uint8Array(imageBuffer));
    (ref2 = (ref = (0,selector/* searchAvatarOpenFileSelector */.jv)().evaluate()[0]) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : ref1.children[0]) === null || ref2 === void 0 ? void 0 : ref2.click();
}
function ProfileNFTAvatar_NFTAvatarInTwitter() {
    const { classes  } = ProfileNFTAvatar_useStyles(getStyles());
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const [avatarEvent, setAvatarEvent] = (0,react.useState)();
    const onChange = async (token)=>{
        if (!token.info.imageURL) return;
        const image = await toPNG(token.info.imageURL);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatar, {
        onChange: onChange,
        classes: classes
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadgeTimeline.tsx






function NFTBadgeTimeline(props) {
    const { userId , avatarId , width , height  } = props;
    const { loading , value: _avatar  } = useNFTAvatar(userId);
    const [avatar, setAvatar] = (0,react.useState)();
    const [avatarId_, setAvatarId_] = (0,react.useState)('');
    const onUpdate = (data)=>{
        if (!data.address || !data.tokenId) {
            setAvatar(undefined);
            return;
        }
        setAvatar(data);
        setAvatarId_(data.avatarId);
    };
    (0,react.useEffect)(()=>{
        setAvatarId_(avatarId);
    }, [
        avatarId
    ]);
    (0,react.useEffect)(()=>{
        setAvatar(_avatar);
    }, [
        _avatar
    ]);
    (0,react.useEffect)(()=>src_utils/* MaskMessages.events.NFTAvatarTimelineUpdated.on */.ql.events.NFTAvatarTimelineUpdated.on((data)=>onUpdate(data)
        )
    , []);
    if (!avatar) return null;
    if (avatarId_ && avatar.avatarId !== avatarId_) return null;
    return loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
        size: width
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(RainbowBox, {
        width: width,
        height: height,
        radius: "100%"
    });
}

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

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/escapeRegExp.js
var escapeRegExp = __webpack_require__(39345);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/userNFTContainerAtTwitter.ts




function getScriptURL(content, name) {
    const matchURL = new RegExp(`${(0,escapeRegExp/* default */.Z)(`https://abs.twimg.com/responsive-web/client-web/${name}.`)}\\w+${(0,escapeRegExp/* default */.Z)('.js')}`, 'm');
    var ref;
    const [url] = (ref = content.match(matchURL)) !== null && ref !== void 0 ? ref : [];
    return url;
}
function useScriptContent(url) {
    return (0,esm_useAsyncRetry/* default */.Z)(async ()=>{
        if (!url) return '';
        const response = await fetch(url);
        return response.text();
    }, [
        url
    ]);
}
function useScriptContentMatched(content, regexp) {
    return (0,react.useMemo)(()=>{
        if (!content) return;
        var ref;
        const [, matched] = (ref = content.match(regexp)) !== null && ref !== void 0 ? ref : [];
        return matched;
    }, [
        content,
        regexp
    ]);
}
function useCSRFToken() {
    return (0,react.useMemo)(()=>{
        const ct0 = document.cookie.split('; ').find((x)=>x.includes('ct0')
        );
        if (!ct0) return '';
        const [, value] = ct0.split('=');
        return value;
    }, []);
}
function useNFTContainerAtTwitter(screenName) {
    const { value: swContent  } = useScriptContent('https://twitter.com/sw.js');
    const { value: mainContent  } = useScriptContent(getScriptURL(swContent !== null && swContent !== void 0 ? swContent : '', 'main'));
    const { value: nftContent  } = useScriptContent(getScriptURL(swContent !== null && swContent !== void 0 ? swContent : '', 'bundle.UserNft'));
    const bearerToken = useScriptContentMatched(mainContent !== null && mainContent !== void 0 ? mainContent : '', /s="(\w+%3D\w+)"/);
    const queryToken = useScriptContentMatched(nftContent !== null && nftContent !== void 0 ? nftContent : '', /{\s?id:\s?"([\w-]+)"/);
    const csrfToken = useCSRFToken();
    return (0,esm_useAsyncRetry/* default */.Z)(async ()=>{
        if (!bearerToken || !queryToken || !csrfToken) return;
        const response = await fetch(dist_default()(`https://twitter.com/i/api/graphql/:queryToken/userNftContainer_Query?variables=${encodeURIComponent(JSON.stringify({
            screenName
        }))}`, {
            queryToken
        }), {
            headers: {
                authorization: `Bearer ${bearerToken}`,
                'x-csrf-token': csrfToken,
                'content-type': 'application/json',
                'x-twitter-auth-type': 'OAuth2Session',
                'x-twitter-active-user': 'yes',
                referer: `https://twitter.com/${screenName}/nft`
            }
        });
        return response.json();
    }, [
        bearerToken,
        csrfToken,
        queryToken,
        screenName
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarClip.tsx








// from twitter page
const ViewBoxWidth = 200;
const ViewBoxHeight = 188;
const NFTAvatarClip_rainbowBorderKeyFrames = theme_src/* keyframes */.F4`
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
            animation: `${NFTAvatarClip_rainbowBorderKeyFrames} 6s linear infinite`,
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
    var _address, _token_id;
    const { value ={
        amount: '0',
        symbol: 'ETH',
        name: '',
        slug: ''
    } , loading: loadingNFT  } = useNFT((_address = avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.data.user.result.nft_avatar_metadata.smart_contract.address) !== null && _address !== void 0 ? _address : '', (_token_id = avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.data.user.result.nft_avatar_metadata.token_id) !== null && _token_id !== void 0 ? _token_id : '');
    const { amount , name , symbol , slug  } = value;
    if (!(avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.data.user.result.has_nft_avatar)) return null;
    var _token_id1;
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
                        text: loading || loadingNFT ? 'loading...' : `${formatText(name, (_token_id1 = avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.data.user.result.nft_avatar_metadata.token_id) !== null && _token_id1 !== void 0 ? _token_id1 : '')} ${slug.toLowerCase() === 'ens' ? 'ENS' : ''}`,
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
                        text: loading || loadingNFT ? '' : formatPrice(amount, symbol)
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
    if (loading || !(avatarMetadata === null || avatarMetadata === void 0 ? void 0 : avatarMetadata.data.user.result.has_nft_avatar)) return null;
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
    const twitterId = twitterIdNode.innerText.trim().replace('@', '');
    return twitterId;
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
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadgeTimeline, {
                    userId: twitterId,
                    avatarId: info.avatarId,
                    width: info.width - 4,
                    height: info.height - 4
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

// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(5521);
;// CONCATENATED MODULE: ../icons/general/GearSettings.tsx


const GearSettingsIcon = (0,icons_utils/* createIcon */.I)('GearSettingsIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.0003 4.47314C5.60697 4.47314 4.47363 5.60648 4.47363 6.99981C4.47363 8.39314 5.60697 9.52648 7.0003 9.52648C8.39363 9.52648 9.52697 8.39314 9.52697 6.99981C9.52697 5.60648 8.39363 4.47314 7.0003 4.47314ZM7.0003 8.52648C6.15897 8.52648 5.47363 7.84248 5.47363 6.99981C5.47363 6.15714 6.1603 5.47314 7.0003 5.47314C7.8403 5.47314 8.52697 6.15714 8.52697 6.99981C8.52697 7.84248 7.84163 8.52648 7.0003 8.52648Z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.24003 13.9166H6.7587C5.97003 13.9166 5.3227 13.3246 5.2507 12.5406L5.24136 12.4426C5.2247 12.2513 5.10336 12.0873 4.9267 12.0133C4.73603 11.9333 4.5387 11.9699 4.3947 12.0899L4.31736 12.1546C3.7387 12.6379 2.81536 12.5966 2.27736 12.0613L1.93736 11.7213C1.38003 11.1613 1.34003 10.2853 1.84403 9.68125L1.90936 9.60259C2.03336 9.45459 2.0627 9.25392 1.9907 9.07792C1.91736 8.89659 1.75203 8.77525 1.56003 8.75792L1.46003 8.74859C0.673365 8.67725 0.0820312 8.02859 0.0820312 7.24059V6.75925C0.0820312 5.97059 0.674031 5.32325 1.45803 5.25125L1.56203 5.24192C1.75203 5.22525 1.91536 5.10392 1.99003 4.92659C2.06336 4.74659 2.03336 4.54459 1.91003 4.39659L1.84736 4.31925C1.3427 3.71392 1.38203 2.83725 1.9387 2.27925L2.28003 1.93792C2.81603 1.40192 3.7387 1.36125 4.32003 1.84459L4.39736 1.90992C4.5427 2.03259 4.74936 2.06325 4.92403 1.99125C5.10403 1.91659 5.22536 1.75259 5.24203 1.56259L5.25136 1.46059C5.3227 0.673919 5.97136 0.083252 6.75936 0.083252H7.2407C8.02936 0.083252 8.6767 0.675252 8.7487 1.45925L8.75803 1.56325C8.7747 1.75325 8.89536 1.91659 9.0727 1.98992C9.25737 2.06792 9.45936 2.03125 9.60203 1.91192L9.68203 1.84392C10.26 1.36192 11.1847 1.40259 11.722 1.93725L12.062 2.27859C12.6194 2.83725 12.6594 3.71392 12.1554 4.31859L12.0887 4.39725C11.9634 4.54392 11.9327 4.74525 12.0067 4.92259C12.0814 5.10259 12.2467 5.22259 12.4374 5.24125L12.5387 5.25059C13.3254 5.32192 13.9167 5.97059 13.9167 6.75858V7.24059C13.9167 8.02925 13.3247 8.67659 12.5407 8.74859L12.4374 8.75792C12.248 8.77392 12.084 8.89459 12.0107 9.07125C11.9354 9.25259 11.966 9.45392 12.0887 9.60125L12.1554 9.68125C12.6594 10.2846 12.6194 11.1613 12.062 11.7213L11.722 12.0613C11.184 12.5973 10.262 12.6373 9.68203 12.1546L9.60536 12.0906C9.4607 11.9686 9.25203 11.9373 9.0787 12.0093C8.8967 12.0853 8.77536 12.2493 8.7587 12.4399L8.74936 12.5399C8.67803 13.3219 8.02937 13.9133 7.24136 13.9133L7.24003 13.9166ZM4.7247 10.9699C4.9247 10.9699 5.12003 11.0099 5.3047 11.0866C5.83136 11.3053 6.18737 11.7893 6.23803 12.3506L6.24736 12.4486C6.27203 12.7153 6.49203 12.9153 6.7607 12.9153H7.24203C7.5087 12.9153 7.7287 12.7153 7.75403 12.4486L7.76336 12.3499C7.81403 11.7886 8.17003 11.3053 8.69136 11.0886C9.22003 10.8686 9.82203 10.9673 10.2467 11.3219L10.322 11.3846C10.4407 11.4833 10.566 11.5046 10.6507 11.5046C10.788 11.5046 10.9174 11.4513 11.0147 11.3533L11.3547 11.0133C11.544 10.8239 11.558 10.5266 11.3867 10.3213L11.32 10.2413C10.9587 9.80792 10.8687 9.21459 11.0854 8.69258C11.3027 8.16592 11.7867 7.81259 12.348 7.76125L12.4514 7.75192C12.716 7.72725 12.918 7.50725 12.918 7.23859V6.75725C12.918 6.49059 12.716 6.27059 12.45 6.24525L12.3487 6.23592C11.7847 6.18392 11.302 5.82925 11.0854 5.30725C10.868 4.78192 10.9587 4.18859 11.3207 3.75592L11.3874 3.67725C11.5587 3.47059 11.5447 3.17325 11.3554 2.98392L11.0154 2.64392C10.918 2.54592 10.7887 2.49259 10.6514 2.49259C10.5667 2.49259 10.4414 2.51392 10.3234 2.61259L10.2434 2.67925C9.8207 3.03125 9.21003 3.12592 8.69536 2.91525C8.17003 2.69725 7.81536 2.21392 7.76403 1.65125L7.7547 1.54792C7.73136 1.28325 7.51136 1.08125 7.24336 1.08125H6.76136C6.4947 1.08125 6.2747 1.28325 6.24936 1.54925L6.24003 1.65059C6.18936 2.21259 5.8347 2.69592 5.31336 2.91259C4.7887 3.12992 4.1847 3.03459 3.76003 2.67925L3.68136 2.61525C3.56136 2.51525 3.43603 2.49525 3.35136 2.49525C3.21403 2.49525 3.0847 2.54859 2.98736 2.64592L2.64603 2.98592C2.45803 3.17525 2.44403 3.47259 2.61536 3.67792L2.68203 3.75659C3.04203 4.19192 3.13336 4.78592 2.9167 5.30659C2.6987 5.83192 2.21536 6.18659 1.65336 6.23792L1.54936 6.24725C1.2847 6.27192 1.0827 6.49192 1.0827 6.76059V7.24192C1.0827 7.50859 1.2847 7.72859 1.5507 7.75392L1.6507 7.76325C2.21603 7.81525 2.69936 8.17125 2.91536 8.69392C3.13203 9.21792 3.04203 9.81059 2.68003 10.2439L2.61603 10.3206C2.4427 10.5273 2.45736 10.8246 2.6467 11.0139L2.9867 11.3539C3.08403 11.4519 3.21336 11.5053 3.3507 11.5053C3.43536 11.5053 3.5607 11.4853 3.6787 11.3853L3.75603 11.3213C4.0267 11.0973 4.37136 10.9719 4.7247 10.9719V10.9699Z"
        })
    ]
}), '0 0 14 14');

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarButton.tsx





const NFTAvatarButton_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 9999,
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            border: '1px solid',
            backgroundColor: theme.palette.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
            color: theme.palette.mode === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
            cursor: 'pointer'
        },
        icon: {
            width: 14,
            height: 14,
            marginLeft: 2
        },
        text: {
            display: 'flex',
            alignItems: 'center'
        }
    })
);
function NFTAvatarButton(props) {
    const classes = (0,theme_src/* useStylesExtends */.Bc)(NFTAvatarButton_useStyles(), props);
    const { onClick  } = props;
    const { t  } = (0,src_utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            variant: "body1",
            className: classes.text,
            children: [
                "🔥",
                t('nft_avatar'),
                " ",
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GearSettingsIcon, {
                    className: classes.icon
                })
            ]
        })
    }));
}

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
    useLocationChange(()=>setStyleFromEditProfileSelector()
    );
    const { classes  } = NFTAvatarEditProfile_useStyles(style);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButton, {
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
    const { avatarId , width , height  } = props;
    const identity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    if (!(identity === null || identity === void 0 ? void 0 : identity.identifier.userId)) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadgeTimeline, {
        width: width,
        height: height,
        userId: identity === null || identity === void 0 ? void 0 : identity.identifier.userId,
        avatarId: avatarId
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
                    avatarId: info.avatarId
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
    const { userId  } = props;
    const { classes  } = NFTContractImage_useStyles();
    const { loading: loadingNFT , value: NFTAvatar  } = useNFTAvatar(userId);
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
                    userId: twitterId
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
    const size = (0,react.useMemo)(()=>{
        const ele = (0,selector/* searchTwitterAvatarNFTSelector */.Dc)().evaluate();
        if (!ele) return 0;
        const style = window.getComputedStyle(ele);
        var ref;
        return Number.parseInt((ref = style.width.replace('px', '')) !== null && ref !== void 0 ? ref : 0, 10);
    }, [
        windowSize
    ]);
    const twitterId = (0,react.useMemo)(()=>{
        var ref;
        const ele = (ref = (0,selector/* searchTwitterAvatarNFTSelector */.Dc)().evaluate()) === null || ref === void 0 ? void 0 : ref.closest('a');
        if (!ele) return;
        const path = ele.getAttribute('href');
        if (!path) return;
        var ref1;
        const [, userId] = (ref1 = path.match(/^\/(\w+)\/nft$/)) !== null && ref1 !== void 0 ? ref1 : [];
        return userId;
    }, [
        location
    ]);
    (0,react.useEffect)(()=>{
        const linkDom = (0,selector/* searchTwitterAvatarNFTLinkSelector */.Fv)().evaluate();
        if ((linkDom === null || linkDom === void 0 ? void 0 : linkDom.firstElementChild) && linkDom.childNodes.length === 4) {
            borderElement.current = linkDom.firstElementChild;
            // remove useless border
            linkDom.removeChild(linkDom.firstElementChild);
        }
        const first = linkDom === null || linkDom === void 0 ? void 0 : linkDom.firstChild;
        first.style.width = '';
        first.style.height = '';
        return ()=>{
            if (borderElement.current && borderElement.current !== (linkDom === null || linkDom === void 0 ? void 0 : linkDom.firstElementChild)) {
                linkDom === null || linkDom === void 0 ? void 0 : linkDom.insertBefore(borderElement.current, linkDom.firstChild);
            }
        };
    }, [
        location
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
            }
        },
        useTheme: useThemeTwitterVariant,
        i18nOverwrite: i18NOverwriteTwitter
    },
    init (signal) {
        const friends = social_network.stateCreator.friends();
        const profiles = social_network.stateCreator.profiles();
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
        steganography: {
            password () {
                // ! Change this might be a breaking change !
                return new shared_base_src/* ProfileIdentifier */.WO('twitter.com', shared_base_src/* ProfileIdentifier.getUserName */.WO.getUserName(IdentityProviderTwitter.recognized.value.identifier) || shared_base_src/* ProfileIdentifier.getUserName */.WO.getUserName(social_network.globalUIState.profiles.value[0].identifier) || (0,esm/* unreachable */.t1)('Cannot figure out password')).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (twitterUI);


/***/ }),

/***/ 67787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ isMobileTwitter)
/* harmony export */ });
/* unused harmony export twitterDomain */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42771);


const isMobileTwitter = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ContentScript) ? location.hostname === _url__WEBPACK_IMPORTED_MODULE_0__/* .twitterUrl.hostLeadingUrlMobile.substr */ .x_.hostLeadingUrlMobile.substr(8) : !!navigator.userAgent.match(/Mobile|mobile/);
const twitterDomain = (/* unused pure expression or super */ null && (isMobileTwitter ? 'https://mobile.twitter.com/' : 'https://twitter.com/'));


/***/ }),

/***/ 87450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kt": () => (/* binding */ getEditorContent),
/* harmony export */   "iv": () => (/* binding */ isCompose),
/* harmony export */   "uf": () => (/* binding */ hasFocus),
/* harmony export */   "Wu": () => (/* binding */ hasEditor)
/* harmony export */ });
/* unused harmony export isMobile */
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23602);

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

/***/ 23602:
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
/* harmony export */   "pz": () => (/* binding */ searchAvatarMetaSelector),
/* harmony export */   "wP": () => (/* binding */ searchEditProfileSelector),
/* harmony export */   "Du": () => (/* binding */ rootSelector),
/* harmony export */   "QG": () => (/* binding */ composeAnchorSelector),
/* harmony export */   "xH": () => (/* binding */ composeAnchorTextSelector),
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
/* harmony export */   "XD": () => (/* binding */ postsContentSelector),
/* harmony export */   "vL": () => (/* binding */ postAvatarsContentSelector),
/* harmony export */   "qB": () => (/* binding */ selfInfoSelectors),
/* harmony export */   "jv": () => (/* binding */ searchAvatarOpenFileSelector),
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
/* unused harmony exports searchProfileSelector, searchProfileActiveTabSelector, searchProfileActiveTabStatusLineSelector, searchProfileActiveTabLabelSelector, searchForegroundColorSelector, bioCardSelector, postEditorToolbarSelector, twitterMainAvatarSelector, searchProfileAvatarSelector, searchProfileAvatarParentSelector, searchAvatarSelectorInput, searchAvatarSelectorImage, searchUseCellSelector */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92610);
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67787);
/* harmony import */ var _postBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87450);




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
// #region nft avatar
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
const searchAvatarOpenFileSelector = ()=>querySelectorAll('[data-testid="fileInput"]').at(1)
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
const searchTwitterAvatarSelector = ()=>querySelector('[data-testid="UserProfileHeader_Items"]').closest(2).querySelector('img').closest(1)
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
const searchTwitterAvatarNFTSelector = ()=>querySelector('a[href*=nft]').closest(1).querySelector('a  div:nth-child(3) > div')
;
const searchTwitterAvatarNFTLinkSelector = ()=>querySelector('a[href*=nft]')
;


/***/ }),

/***/ 42771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x_": () => (/* binding */ twitterUrl),
/* harmony export */   "WR": () => (/* binding */ canonifyImgUrl)
/* harmony export */ });
/* unused harmony export hostLeadingUrlAutoTwitter */
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


/***/ }),

/***/ 53874:
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
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23602);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76108);



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
    var ref, ref4, ref5, ref6, ref7, ref8, ref9;
    const node = (ref = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNickNameSelector */ .rf)().evaluate()) === null || ref === void 0 ? void 0 : (ref4 = ref.parentElement) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.parentElement) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.firstChild) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.nextSibling) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.firstChild) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.firstChild) === null || ref9 === void 0 ? void 0 : ref9.lastChild;
    if (!node) return '';
    const twitterIdNode = node.querySelector('div span');
    if (!twitterIdNode) return '';
    return twitterIdNode.innerHTML.trim().replace('@', '');
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
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchAvatarSelector */ .Ls)().evaluate();
    if (!node) return '';
    var ref;
    const imageURL = (ref = node.getAttribute('src')) !== null && ref !== void 0 ? ref : '';
    return imageURL.trim();
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

/***/ 95751:
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
var renderInShadowRoot = __webpack_require__(74936);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(66337);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(94531);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(87050);
// EXTERNAL MODULE: ./src/components/InjectedComponents/TypedMessageRenderer.tsx + 1 modules
var TypedMessageRenderer = __webpack_require__(53513);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostReplacer.tsx










const useStyles = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        overflowWrap: 'break-word'
    }
});
function PostReplacer(props) {
    const { classes  } = useStyles();
    const postMessage = usePostInfo/* usePostInfoDetails.rawMessage */.H9.rawMessage();
    const postPayload = usePostInfo/* usePostInfoDetails.containingMaskPayload */.H9.containingMaskPayload();
    const allPostReplacement = (0,shared_src/* useValueRef */.E)(settings/* allPostReplacementSettings */.zs);
    const plugins = (0,src/* useActivatedPluginsSNSAdaptor */.Pz)(false);
    const processedPostMessage = (0,react.useMemo)(()=>{
        return plugins.reduce((x, plugin)=>{
            var ref;
            const result = esm/* Result.wrap */.x4.wrap(()=>{
                var ref1;
                return (ref = (ref1 = plugin.typedMessageTransformer) === null || ref1 === void 0 ? void 0 : ref1.call(plugin, x)) !== null && ref !== void 0 ? ref : x;
            }).unwrapOr(x);
            if ((0,shared_base_src/* isTypedMessageTuple */.bZ)(result)) return result;
            console.warn('[TypedMessage] typedMessageTransformer that return a non TypedMessageTuple is not supported yet. This transform is ignored', result);
            return x;
        }, postMessage);
    }, [
        plugins.map((x)=>x.ID
        ).join(),
        postMessage
    ]);
    const shouldReplacePost = // replace all posts
    allPostReplacement || // replace posts which enhanced by plugins
    processedPostMessage.items.some((x)=>!(0,shared_base_src/* isWellKnownTypedMessages */.rK)(x)
    ) || // replace posts which encrypted by Mask
    postPayload.ok;
    // zip/unzip original post
    (0,react.useEffect)(()=>{
        var ref, ref2;
        if (shouldReplacePost) (ref = props.zip) === null || ref === void 0 ? void 0 : ref.call(props);
        else (ref2 = props.unzip) === null || ref2 === void 0 ? void 0 : ref2.call(props);
    }, [
        shouldReplacePost
    ]);
    return shouldReplacePost ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderer/* DefaultTypedMessageRenderer */.sF, {
            message: (0,shared_base_src/* makeTypedMessageTuple */.Zw)(processedPostMessage.items.filter((x)=>!(0,shared_base_src/* isTypedMessagePromise */.KV)(x)
            ))
        })
    }) : null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx







function injectPostReplacer(config = {}, additionalPropsToPostReplacer = ()=>({})
, useCustomStyles = (0,theme_src/* makeStyles */.ZL)()({})) {
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


/***/ }),

/***/ 41460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ EthereumChainBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(69172);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAllowTestnet.ts

function useAllowTestnet() {
    return (0,context/* useWeb3StateContext */.N9)().allowTestnet;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(9094);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(54575);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(9228);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(18274);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(87050);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumChainBoundary.tsx














const useStyles = (0,src/* makeStyles */.ZL)()(()=>({})
);
function EthereumChainBoundary(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const pluginID = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const plugin = (0,plugin_infra_src/* useActivatedPlugin */.Rc)(pluginID, 'any');
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const allowTestnet = useAllowTestnet();
    const providerType = (0,shared_src/* useValueRef */.E)(settings/* currentProviderSettings */.t1);
    const { noSwitchNetworkTip =false  } = props;
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const expectedChainId = props.chainId;
    const expectedNetwork = (0,chainDetailed/* getChainName */.qz)(expectedChainId);
    const actualChainId = chainId;
    const actualNetwork = (0,chainDetailed/* getChainName */.qz)(actualChainId);
    // if false then it will not guide the user to switch the network
    const isAllowed = (0,chainDetailed/* isChainIdValid */.Ji)(expectedChainId, allowTestnet) && !!account && providerType !== types/* ProviderType.Coin98 */.lP.Coin98;
    // is the actual chain id matched with the expected one?
    const isChainMatched = actualChainId === expectedChainId;
    const isPluginMatched = pluginID === plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    var ref1;
    // is the actual chain id a valid one even if it does not match with the expected one?
    const isValid = (ref1 = props === null || props === void 0 ? void 0 : (ref = props.isValidChainId) === null || ref === void 0 ? void 0 : ref.call(props, actualChainId, expectedChainId)) !== null && ref1 !== void 0 ? ref1 : false;
    const onSwitchChain = (0,react.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,shared_base_src/* delay */.gw)(1000);
        if (!isAllowed) return;
        const switchToChain = async ()=>{
            // read the chain detailed from the built-in chain list
            const chainDetailedCAIP = (0,chainDetailed/* getChainDetailedCAIP */.EX)(expectedChainId);
            if (!chainDetailedCAIP) throw new Error('Unknown network type.');
            // if mask wallet was used it can switch network automatically
            if (providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet) {
                await messages/* WalletRPC.updateAccount */.V.updateAccount({
                    chainId: expectedChainId
                });
                return;
            }
            // request ethereum-compatible network
            const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(expectedChainId);
            if (!networkType) return;
            try {
                const overrides = {
                    chainId: expectedChainId,
                    providerType
                };
                await Promise.race([
                    (async ()=>{
                        await (0,shared_base_src/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
                        throw new Error('Timeout!');
                    })(),
                    networkType === types/* NetworkType.Ethereum */.td.Ethereum ? service/* default.Ethereum.switchEthereumChain */.ZP.Ethereum.switchEthereumChain(expectedChainId, overrides) : service/* default.Ethereum.addEthereumChain */.ZP.Ethereum.addEthereumChain(chainDetailedCAIP, account, overrides), 
                ]);
                // recheck
                const chainIdHex = await service/* default.Ethereum.getChainId */.ZP.Ethereum.getChainId(overrides);
                if (Number.parseInt(chainIdHex, 16) !== expectedChainId) throw new Error('Failed to switch chain.');
            } catch  {
                throw new Error(`Switch Chain Error: Make sure your wallet is on the ${(0,pipes/* resolveNetworkName */.nW)(networkType)} network.`);
            }
        };
        const switchToPlugin = async ()=>{
            settings_settings/* pluginIDSettings.value */.tR.value = plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
        };
        if (!isChainMatched) await switchToChain();
        if (!isPluginMatched) await switchToPlugin();
    }, [
        account,
        isAllowed,
        isChainMatched,
        isPluginMatched,
        providerType,
        expectedChainId
    ]);
    const { openDialog: openSelectProviderDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    const renderBox = (children)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            sx: !props.disablePadding ? {
                paddingTop: 1,
                paddingBottom: 1
            } : null,
            children: children
        }));
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_connect_wallet_tip')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                size: "small",
                sx: {
                    marginTop: 1.5
                },
                onClick: openSelectProviderDialog,
                children: t('plugin_wallet_connect_wallet')
            })
        ]
    }));
    if (isChainMatched && isPluginMatched || isValid) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    }));
    if (!isAllowed) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: t('plugin_wallet_not_available_on', {
                network: actualNetwork
            })
        })
    }));
    if (pluginID !== plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
        var ref2;
        var ref3, _switchButtonStyle;
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: (ref3 = plugin === null || plugin === void 0 ? void 0 : (ref2 = plugin.name) === null || ref2 === void 0 ? void 0 : ref2.fallback) !== null && ref3 !== void 0 ? ref3 : 'Unknown Plugin'
                        })
                    })
                }) : null,
                isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    variant: "contained",
                    size: "small",
                    className: classes.switchButton,
                    sx: (_switchButtonStyle = props.switchButtonStyle) !== null && _switchButtonStyle !== void 0 ? _switchButtonStyle : {
                        marginTop: 1.5
                    },
                    init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_switch_network', {
                            network: expectedNetwork
                        })
                    }),
                    waiting: t('plugin_wallet_switch_network_under_going', {
                        network: expectedNetwork
                    }),
                    complete: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...props.ActionButtonPromiseProps
                }) : null
            ]
        }));
    }
    var _switchButtonStyle1;
    return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualNetwork
                    })
                })
            }) : null,
            isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                variant: "contained",
                size: "small",
                className: classes.switchButton,
                sx: (_switchButtonStyle1 = props.switchButtonStyle) !== null && _switchButtonStyle1 !== void 0 ? _switchButtonStyle1 : {
                    marginTop: 1.5
                },
                init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedNetwork
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedNetwork
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...props.ActionButtonPromiseProps
            }) : null
        ]
    }));
}


/***/ }),

/***/ 94165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ assertNonNull)
/* harmony export */ });
/**
 * Ensure a value not null or undefined.
 */ function assertNonNull(val, message = 'Unexpected nil value detected') {
    if (val === null || val === undefined) throw new Error(message);
    return val;
}


/***/ }),

/***/ 23720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ CryptoKeyToJsonWebKey)
/* harmony export */ });
function CryptoKeyToJsonWebKey(key) {
    return crypto.subtle.exportKey('jwk', key);
}


/***/ }),

/***/ 69370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ startEffects)
/* harmony export */ });
function startEffects(hot) {
    const ac = new AbortController();
    hot === null || hot === void 0 ? void 0 : hot.dispose(()=>ac.abort()
    );
    return {
        signal: ac.signal,
        run (callback) {
            try {
                ac.signal.addEventListener('abort', callback());
            } catch (error) {
                console.error(error);
            }
        }
    };
}


/***/ }),

/***/ 49613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iV": () => (/* reexport */ utils_pure_crypto/* CryptoKeyToJsonWebKey */.i),
  "rP": () => (/* reexport */ EMPTY_LIST),
  "G1": () => (/* reexport */ OnDemandWorker),
  "Cq": () => (/* reexport */ assertion/* assertNonNull */.C),
  "J3": () => (/* reexport */ memoizePromise),
  "mS": () => (/* reexport */ type/* restorePrototype */.mS),
  "Yo": () => (/* reexport */ type/* restorePrototypeArray */.Yo),
  "Wu": () => (/* reexport */ hmr/* startEffects */.W)
});

// UNUSED EXPORTS: EMPTY_OBJECT, assert, nonNullable

// EXTERNAL MODULE: ./utils-pure/type/index.ts + 1 modules
var type = __webpack_require__(76871);
// EXTERNAL MODULE: ./utils-pure/assertion/index.ts
var assertion = __webpack_require__(94165);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(77184);
;// CONCATENATED MODULE: ./utils-pure/memoize.ts

/**
 * The promise version of lodash-es/memoize
 * @param f An async function
 * @param resolver If the function has 1 param, it can be undefined
 * as `x => x`. If it has more than 1 param, you must specify a function
 * to map the param the memoize key.
 */ function memoizePromise(f, resolver) {
    if (resolver === undefined) resolver = (x)=>x
    ;
    const memorizedFunction = (0,memoize/* default */.Z)(async function(...args) {
        try {
            // ? DO NOT remove "await" here
            return await f(...args);
        } catch (error) {
            memorizedFunction.cache.delete(resolver(...args));
            throw error;
        }
    }, resolver);
    return memorizedFunction;
}

;// CONCATENATED MODULE: ./utils-pure/misc.ts
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

// EXTERNAL MODULE: ./utils-pure/hmr.ts
var hmr = __webpack_require__(69370);
// EXTERNAL MODULE: ./utils-pure/crypto/index.ts
var utils_pure_crypto = __webpack_require__(23720);
;// CONCATENATED MODULE: ./utils-pure/OnDemandWorker/index.ts
// Implementation detail
/**
 * A Worker-like class that create/destory Worker on demand.
 *
 * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
 * This "Alive" MUST be the first message.
 */ class OnDemandWorker extends EventTarget {
    watchUsage() {
        const i = setInterval(()=>{
            if (!this.worker) {
                clearInterval(i);
                return;
            }
            if (Date.now() - this.lastUsed > this.inactiveTimeToTerminate) {
                this.log('inactive for', this.inactiveTimeToTerminate / 1000, 'sec');
                this.terminate();
                clearInterval(i);
            }
        }, Math.min(this.inactiveTimeToTerminate, 60 * 1000));
    }
    log(...args) {
    // console.log(`OnDemandWorker ${this.init[1]?.name}`, ...args)
    }
    use(onReady) {
        this.keepAlive();
        if (this.worker) return onReady();
        this.worker = new Worker(...this.__init);
        // TODO: what if the worker does not start successfully?
        this.worker.addEventListener('message', ()=>{
            this.worker.addEventListener('message', (e)=>this.dispatchEvent(cloneEvent(e))
            );
            onReady();
        }, {
            once: true
        });
        this.worker.addEventListener('error', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.worker.addEventListener('messageerror', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.watchUsage();
    }
    terminate() {
        var ref;
        (ref = this.worker) === null || ref === void 0 ? void 0 : ref.terminate();
        this.worker = undefined;
        this.log('terminated');
        this.dispatchEvent(new Event('terminated'));
    }
    keepAlive() {
        this.log('keep alive');
        this.lastUsed = Date.now();
    }
    onTerminated(callback) {
        this.addEventListener('terminated', callback, {
            once: true
        });
        return ()=>this.removeEventListener('terminated', callback)
        ;
    }
    postMessage(...args) {
        this.use(()=>{
            var ref;
            return (ref = this.worker) === null || ref === void 0 ? void 0 : ref.postMessage(...args);
        });
    }
    set onmessage(_) {
        OnDemandWorker_throws();
    }
    set onerror(_) {
        OnDemandWorker_throws();
    }
    set onmessageerror(_) {
        OnDemandWorker_throws();
    }
    /**
     * A Worker-like class that create/destory Worker on demand.
     *
     * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
     * This "Alive" MUST be the first message.
     */ constructor(...init){
        var ref;
        super();
        this.worker = undefined;
        this.lastUsed = Date.now();
        this.__init = init;
        this.inactiveTimeToTerminate = 15 * 60 * 1000;
        var ref1;
        this.log((ref1 = (ref = init[1]) === null || ref === void 0 ? void 0 : ref.name) !== null && ref1 !== void 0 ? ref1 : 'anonymous Worker', 'created with', ...init);
    }
}
function OnDemandWorker_throws() {
    throw new TypeError('Please use addEventListener');
}
function cloneEvent(e) {
    // @ts-ignore
    return new e.constructor(e.type, e);
}

;// CONCATENATED MODULE: ./utils-pure/index.ts









/***/ }),

/***/ 76871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mS": () => (/* reexport */ restorePrototype),
  "Yo": () => (/* reexport */ restorePrototypeArray)
});

// UNUSED EXPORTS: assert, nonNullable

;// CONCATENATED MODULE: ./utils-pure/type/prototype.ts
/**
 * @description Restore prototype on an object. This does not work with classes that uses ES private field.
 * @example
 * restorePrototype({ value: 1 }, SomeClass.prototype)
 * @param obj The prototype-less object.
 * @param prototype The prototype object
 * @returns The original object with prototype restored.
 */ function restorePrototype(obj, prototype) {
    if (!obj) return obj;
    Object.setPrototypeOf(obj, prototype);
    return obj;
}
function restorePrototypeArray(arr, prototype) {
    if (!arr) return arr;
    arr.forEach((x)=>Object.setPrototypeOf(x, prototype)
    );
    return arr;
}

;// CONCATENATED MODULE: ./utils-pure/type/index.ts

function assert(x, ...args) {
    console.assert(x, ...args);
    if (!x) throw new Error('Assert failed!');
}
function nonNullable(x) {
    return x !== undefined && x !== null;
}


/***/ }),

/***/ 64069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCollections),
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69172);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52646);
/* harmony import */ var _useSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73841);




function useCollections(address, chainId) {
    const id = `mask.fetchNonFungibleCollectionAsset_${address}_${chainId}`;
    const message = {
        id,
        method: 'mask.fetchNonFungibleCollectionAsset',
        params: {
            address: address,
            pageSize: 200
        }
    };
    return (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
}
function useCollectibles(address, chainId, dependReady) {
    const { erc721Tokens  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const id = `mask.fetchNonFungibleCollectibleAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectibleAsset',
        params: {
            address: address,
            pageSize: 30
        }
    };
    const { data , state , error , retry  } = (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
    const all = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        ...data !== null && data !== void 0 ? data : [],
        ...erc721Tokens.getCurrentValue().filter((x)=>!chainId || x.contractDetailed.chainId === chainId
        ), 
    ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
    );
    return {
        data: all,
        state,
        error,
        retry
    };
}


/***/ }),

/***/ 16154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ useImageChecker)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59302);

// filter out nft with image resource
function useImageChecker(url) {
    return (0,react_use__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(async ()=>{
        if (!url) return false;
        const { pathname  } = new URL(url);
        if (/\.(gif|svg|png|webp|jpg|jpeg)$/.test(pathname)) return true;
        if (/\.(mp4|webm|mov|ogg|mp3|wav)$/.test(pathname)) return false;
        const contentType = await getContentType(url);
        return contentType.startsWith('image/');
    }, [
        url
    ]);
}
async function getContentType(url) {
    if (!/^https?:/.test(url)) {
        return '';
    }
    return Promise.race([
        new Promise((resolve)=>setTimeout(()=>resolve('')
            , 20000)
        ),
        new Promise((resolve)=>{
            fetch(url, {
                method: 'HEAD',
                mode: 'cors'
            }).then((response)=>response.status !== 200 ? resolve('') : resolve(response.headers.get('content-type'))
            ).catch(()=>resolve('')
            );
        }), 
    ]);
}


/***/ }),

/***/ 73841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SocketState),
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69172);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19149);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);




var SocketState;
(function(SocketState) {
    SocketState["init"] = "init";
    SocketState["sent"] = "sent";
    SocketState["receiving"] = "receiving";
    SocketState["done"] = "done";
})(SocketState || (SocketState = {}));
const useSocket = (message)=>{
    const { providerSocket  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(SocketState.init);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
    const { value: socket , loading  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>providerSocket
    , []);
    const { retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!socket || !message.id || loading) return;
        const requestId1 = `${message.id}_${id}`;
        const notifyUpdatedHook = (info)=>{
            if (!info.done) {
                setState(SocketState.receiving);
            } else {
                setState(SocketState.done);
            }
            setError(info.error);
            if (!socket) return;
            const requestId = `${message.id}_${id}`;
            setData(socket.getResult(requestId));
        };
        socket.send({
            ...message,
            notify: notifyUpdatedHook,
            id: requestId1
        });
        // Get data from cache
        setData(socket.getResult(requestId1));
        setState(SocketState.sent);
    }, [
        message.id,
        socket,
        loading,
        id
    ]);
    const handleRetry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setId((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
        setState(SocketState.sent);
        setData([]);
        retry();
    }, [
        retry
    ]);
    return {
        data: data !== null && data !== void 0 ? data : [],
        state,
        error,
        retry: handleRetry
    };
};


/***/ })

}]);