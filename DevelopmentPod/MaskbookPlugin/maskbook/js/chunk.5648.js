"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5648],{

/***/ 96234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ instagramShared)
/* harmony export */ });
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13591);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13573);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94869);



const instagramShared = {
    ..._base__WEBPACK_IMPORTED_MODULE_2__/* .instagramBase */ .j,
    utils: {
        getHomePage: ()=>'https://www.instagram.com/'
        ,
        getProfilePage: ()=>'https://www.instagram.com/'
        ,
        createPostContext: (0,_social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_0__/* .createSNSAdaptorSpecializedPostContext */ .k)({
            payloadParser: _utils__WEBPACK_IMPORTED_MODULE_1__/* .deconstructPayload */ .Qn
        })
    }
};


/***/ }),

/***/ 74164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/shared.ts
var shared = __webpack_require__(96234);
// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/base.ts
var base = __webpack_require__(94869);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.0/node_modules/idb/with-async-ittr.js
var with_async_ittr = __webpack_require__(20326);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/collecting/identity-provider.ts




const IdentityProviderInstagram = {
    async start (signal) {
        const ref = this.recognized;
        update();
        async function update() {
            if (signal.aborted) return;
            const val = await query();
            if (val) ref.value = val;
            setTimeout(update, 10 * 1000);
        }
    },
    recognized: social_network/* creator.EmptyIdentityResolveProviderState */.Du.EmptyIdentityResolveProviderState()
};
async function query() {
    const db = await (0,with_async_ittr/* openDB */.X3)('redux', 1, {
        upgrade: ()=>{
            db.createObjectStore('paths');
        }
    });
    const tx = db.transaction('paths', 'readonly');
    const id = await tx.store.get('users.viewerId');
    if (!id) return null;
    const detail = (await tx.store.get('users.users'))[id];
    db.close();
    return {
        identifier: new src/* ProfileIdentifier */.WO(base/* instagramBase.networkIdentifier */.j.networkIdentifier, detail.username),
        avatar: detail.profilePictureUrl,
        nickname: detail.fullName
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/social-network/utils.ts
var utils = __webpack_require__(32665);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var typed_message_base = __webpack_require__(69492);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(84749);
// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(13591);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/collecting/posts.ts








const posts = new umd.LiveSelector().querySelectorAll('main[role="main"] article[role="presentation"][tabindex="-1"]');
const PostProviderInstagram = {
    posts: utils/* creator.EmptyPostProviderState */.Du.EmptyPostProviderState(),
    start (signal) {
        collectPostsInstagramInner(this.posts, signal);
    }
};
function collectPostsInstagramInner(store, signal) {
    (0,watcher/* startWatch */.f)(new umd.MutationObserverWatcher(posts).useForeach((node, key, metadata)=>{
        const { subscriptions , ...info } = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = shared/* instagramShared.utils.createPostContext */.U.utils.createPostContext({
            comments: undefined,
            rootElement: metadata,
            suggestedInjectionPoint: metadata.realCurrent.querySelector('header+div+div') || metadata.realCurrent,
            ...subscriptions
        });
        store.set(metadata, postInfo);
        function collectPostInfo() {
            const nextTypedMessage = [];
            info.postBy.value = getPostBy(metadata);
            info.postID.value = getPostID(metadata);
            const img = node.querySelectorAll('img')[1];
            if (img) {
                nextTypedMessage.push((0,typed_message_base/* makeTypedMessageImage */.as)(img.src, img));
                info.postMetadataImages.add(img.src);
            } else nextTypedMessage.push((0,typed_message_base/* makeTypedMessageImage */.as)(''));
            info.postMessage.value = (0,typed_message_base/* makeTypedMessageTuple */.Zw)(nextTypedMessage);
        }
        collectPostInfo();
        return {
            onNodeMutation: collectPostInfo,
            onTargetChanged: collectPostInfo,
            onRemove: ()=>store.delete(metadata)
        };
    }), signal);
}
function getPostBy(node) {
    // the first a
    const author = node.current.querySelector('a');
    if (!author) return src/* ProfileIdentifier.unknown */.WO.unknown;
    const href = new URL(author.href).pathname;
    if (href.startsWith('/') && href.endsWith('/') && href.slice(1, -1).includes('/') === false) {
        return new src/* ProfileIdentifier */.WO(base/* instagramBase.networkIdentifier */.j.networkIdentifier, href.slice(1, -1));
    }
    return src/* ProfileIdentifier.unknown */.WO.unknown;
}
function getPostID(node) {
    var ref, ref1, ref2;
    return ((ref2 = (ref1 = (ref = node.current) === null || ref === void 0 ? void 0 : ref.querySelector('a[href^="/p/"]')) === null || ref1 === void 0 ? void 0 : ref1.href.match(/\/p\/(.+)\/.+/)) === null || ref2 === void 0 ? void 0 : ref2[1]) || null;
}

// EXTERNAL MODULE: ./src/social-network/defaults/index.ts
var defaults = __webpack_require__(60599);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(69366);
// EXTERNAL MODULE: ./shared/index.ts
var shared_0 = __webpack_require__(70609);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/post-inspector.ts


const map = new WeakMap();
function getShadowRoot(node) {
    if (map.has(node)) return map.get(node);
    const dom = node.attachShadow({
        mode: shared_0/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
    });
    map.set(node, dom);
    return dom;
}
function injectPostInspectorInstagram(signal, current) {
    return (0,defaults/* injectPostInspectorDefault */.Jg)({
        injectionPoint: (post)=>getShadowRoot(post.suggestedInjectionPoint)
    }, ()=>({
            slotPosition: 'after'
        })
    )(current, signal);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/utils/selector.ts

const querySelector = (selector, singleMode = true)=>{
    const ls = new umd.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const querySelectorAll = (selector)=>{
    return new LiveSelector().querySelectorAll(selector);
};
const searchProfileTabListLastChildSelector = ()=>querySelector('[id="react-root"] section main  div[role="tablist"] > :last-child')
;
const searchProfileTabPageSelector = ()=>querySelector('[id="react-root"] section main > div > div:last-child')
;
const searchProfileTabSelector = ()=>querySelector('[id="react-root"] section main div[role="tablist"]  a[aria-selected="false"]')
;
const searchProfileActiveTabSelector = ()=>querySelector('[id="react-root"] section main  div[role="tablist"] a[aria-selected="true"]')
;
const bioDescriptionSelector = ()=>querySelector('[id="react-root"] section main header section > div:last-child > :nth-child(3)')
;
const personalHomepageSelector = ()=>querySelector('[id="react-root"] section main header section > div:last-child  a')
;
const searchNickNameSelector = ()=>querySelector('[id="react-root"] section main header section > div:last-child > span')
;
const searchUserIdSelector = ()=>querySelector('[id="react-root"] section main header section h2')
;
const searchUserIdInEditPageSelector = ()=>querySelector('[id="react-root"] button > img').closest(4).querySelector('h1')
;
const searchProfileTabArticlePageSelector = ()=>querySelector('[id="react-root"] section main div[role="tablist"]')
;
const searchProfileTabOtherArticlePageSelector = ()=>querySelector('[id="react-root"] section main > div > div:last-child > div')
;
const searchInstagramAvatarListSelector = ()=>querySelector('[role="dialog"] .piCib > div > form').closest(1).querySelector('button')
;
const searchInstagramAvatarOpenFilesSelector = ()=>querySelector('[id="react-root"] button > img').closest(4).querySelector('form')
;
const searchInstagramSaveAvatarButtonSelector = ()=>querySelector('section > div > header > div > div:last-child > button')
;
const searchInstagramAvatarSelector = ()=>querySelector('[id="react-root"] header img, img[data-testid="user-avatar"]')
;
const searchInstagramProfileAvatarButtonSelector = ()=>querySelector('[id="react-root"] button > img').closest(3)
;
const searchInstagramAvatarSettingDialog = ()=>querySelector('[id="react-root"]')
;
const searchInstagramAvatarUploadLoadingSelector = ()=>querySelector('[id="react-root"] button').closest(1).querySelector('div[data-visualcompletion="loading-state"]')
;
const searchInstagramProfileSettingButtonSelector = ()=>querySelector('[id="react-root"] header button').closest(4).querySelector('section > div > div')
;
const searchInstagramProfileEditButton = ()=>querySelector('[id="react-root"] a[href="/accounts/edit/"]')
;
const searchInstagramPostAvatarSelector = ()=>new umd.LiveSelector().querySelectorAll('[role="button"] > a > img[data-testid="user-avatar"]')
;

// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var src_utils = __webpack_require__(13573);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/utils/user.ts



function getBioDescription() {
    const bio = bioDescriptionSelector().evaluate();
    return bio ? (0,src_utils/* collectNodeText */.aW)(bio) : '';
}
const getPersonalHomepage = ()=>{
    const node = personalHomepageSelector().evaluate();
    if (!(node === null || node === void 0 ? void 0 : node.textContent)) return '';
    if (node.textContent.startsWith('http')) return node.textContent;
    return `https://${node.textContent}`;
};
const getNickname = ()=>{
    const node = searchNickNameSelector().evaluate();
    return node ? (0,src_utils/* collectNodeText */.aW)(node) : '';
};
const getUserId = ()=>{
    const node = searchUserIdSelector().evaluate();
    const secondNode = searchUserIdInEditPageSelector().evaluate();
    return node ? (0,src_utils/* collectNodeText */.aW)(node) : secondNode ? (0,src_utils/* collectNodeText */.aW)(secondNode) : '';
};
const getAvatar = ()=>{
    const node = searchInstagramAvatarSelector().evaluate();
    if (!node) return '';
    var ref;
    const imageURL = (ref = node.getAttribute('src')) !== null && ref !== void 0 ? ref : '';
    return imageURL.trim();
};
const clearStorages = ()=>{
    shared_0/* InMemoryStorages.InstagramNFTEvent.storage.userId.setValue */.uU.InstagramNFTEvent.storage.userId.setValue('');
    shared_0/* InMemoryStorages.InstagramNFTEvent.storage.address.setValue */.uU.InstagramNFTEvent.storage.address.setValue('');
    shared_0/* InMemoryStorages.InstagramNFTEvent.storage.tokenId.setValue */.uU.InstagramNFTEvent.storage.tokenId.setValue('');
};
const INSTAGRAM_AVATAR_ID_MATCH = /(\w+).(?:png|jpg|gif|bmp)/;
const getAvatarId = (avatarURL)=>{
    if (!avatarURL) return '';
    const _url = new URL(avatarURL);
    const match = _url.pathname.match(INSTAGRAM_AVATAR_ID_MATCH);
    if (!match) return '';
    return match[1];
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/collecting/identity.ts







function resolveCurrentVisitingIdentityInner(ref, cancel) {
    const avatarSelector = searchInstagramAvatarSelector();
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(500);
        const bio = getBioDescription();
        const homepage = getPersonalHomepage();
        const nickname = getNickname();
        const handle = getUserId();
        const avatar = getAvatar();
        ref.value = {
            identifier: new src/* ProfileIdentifier */.WO(base/* instagramBase.networkIdentifier */.j.networkIdentifier, handle),
            nickname,
            avatar,
            bio,
            homepage
        };
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
}
const CurrentVisitingIdentityProviderInstagram = {
    hasDeprecatedPlaceholderName: false,
    recognized: social_network/* creator.EmptyIdentityResolveProviderState */.Du.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveCurrentVisitingIdentityInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var theme_src = __webpack_require__(92597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/utils/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(75995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(44719);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/NFT/ProfileNFTAvatar.tsx








async function injectProfileNFTAvatarInInstagram(signal) {
    const watcher = new umd.MutationObserverWatcher(searchInstagramAvatarListSelector());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButtonInDialog, {}));
}
const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        root: {
            width: '100%',
            fontSize: props.fontSize,
            lineHeight: 1.5,
            minHeight: props.minHeight,
            borderTop: props.borderTop,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ED4956',
            fontWeight: 600,
            cursor: 'pointer'
        }
    })
);
function NFTAvatarButtonInDialog() {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const [style, setStyle] = (0,react.useState)({
        fontSize: 12,
        minHeight: 48,
        // Instagram css var
        borderTop: '1px solid rgba(var(--b6a,219,219,219),1)'
    });
    const location = (0,useLocation/* default */.Z)();
    const { classes  } = useStyles(style);
    const setStyleWithSelector = (0,react.useCallback)(()=>{
        const dom = searchInstagramAvatarListSelector().evaluate();
        if (!dom) return;
        const css = window.getComputedStyle(dom);
        setStyle({
            minHeight: Number(css.minHeight.replace('px', '')),
            fontSize: Number(css.fontSize.replace('px', '')),
            color: css.color,
            borderTop: css.borderTop
        });
    }, []);
    const onClick = (0,react.useCallback)(()=>{
        src_utils/* MaskMessages.events.nftAvatarSettingDialogUpdated.sendToLocal */.ql.events.nftAvatarSettingDialogUpdated.sendToLocal({
            open: true
        });
    }, []);
    (0,react.useLayoutEffect)(setStyleWithSelector, []);
    (0,useLocationChange/* useLocationChange */.S)(setStyleWithSelector);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        onClick: onClick,
        children: [
            "🔥 ",
            t('use_nft')
        ]
    }));
}

// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/index.ts + 2 modules
var hooks = __webpack_require__(45255);
// EXTERNAL MODULE: ./src/plugins/Avatar/constants.ts
var constants = __webpack_require__(17692);
// EXTERNAL MODULE: ./src/plugins/Avatar/messages.ts
var messages = __webpack_require__(37867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(30865);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadge.tsx + 1 modules
var NFTBadge = __webpack_require__(42509);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/max.js
var max = __webpack_require__(77218);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/RainbowBox.tsx
var RainbowBox = __webpack_require__(10593);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/NFT/NFTAvatarInInstagram.tsx



















function injectNFTAvatarInInstagram(signal) {
    const watcher = new umd.MutationObserverWatcher(searchInstagramAvatarSelector());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInInstagram, {}));
}
const NFTAvatarInInstagram_useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        root: {
            position: 'absolute',
            textAlign: 'center',
            color: 'white',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
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
function NFTAvatarInInstagram() {
    const { classes  } = NFTAvatarInInstagram_useStyles();
    const wallet = (0,plugin_infra_src/* useWallet */.Os)();
    const [avatar, setAvatar] = (0,react.useState)();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const location = (0,useLocation/* default */.Z)();
    const { value: _avatar1  } = (0,hooks/* useNFTAvatar */.i)(identity.identifier.userId, constants/* RSS3_KEY_SNS.INSTAGRAM */.vu.INSTAGRAM);
    const windowSize = (0,useWindowSize/* default */.Z)();
    const showAvatar = (0,react.useMemo)(()=>{
        var ref;
        if ((ref = location.pathname) === null || ref === void 0 ? void 0 : ref.includes('/edit')) return false;
        var _avatar;
        return getAvatarId((_avatar = identity.avatar) !== null && _avatar !== void 0 ? _avatar : '') === (avatar === null || avatar === void 0 ? void 0 : avatar.avatarId);
    }, [
        avatar === null || avatar === void 0 ? void 0 : avatar.avatarId,
        identity.avatar,
        location.pathname
    ]);
    const size = (0,react.useMemo)(()=>{
        const ele = searchInstagramAvatarSelector().evaluate();
        if (!ele) return 0;
        const style = window.getComputedStyle(ele);
        var ref;
        return (0,max/* default */.Z)([
            146,
            Number.parseInt((ref = style.width.replace('px', '')) !== null && ref !== void 0 ? ref : 0, 10)
        ]);
    }, [
        windowSize
    ]);
    (0,react.useEffect)(()=>{
        const watcher = new umd.MutationObserverWatcher(searchInstagramAvatarUploadLoadingSelector()).addListener('onRemove', async ()=>{
            const storages = shared_0/* InMemoryStorages.InstagramNFTEvent.storage */.uU.InstagramNFTEvent.storage;
            if (!wallet) return;
            if (storages.address.value && storages.userId.value && storages.tokenId.value) {
                try {
                    await (0,esm/* delay */.gw)(1000);
                    const url = `${location.protocol}//${location.host}/${identity.identifier.userId}`;
                    const response = await fetch(url);
                    const htmlString = await response.text();
                    const html = document.createElement('html');
                    html.innerHTML = htmlString;
                    const metaTag = html.querySelector('meta[property="og:image"]');
                    if (!(metaTag === null || metaTag === void 0 ? void 0 : metaTag.content)) return;
                    const avatarInfo = await messages/* PluginNFTAvatarRPC.saveNFTAvatar */.B.saveNFTAvatar(wallet.address, {
                        userId: storages.userId.value,
                        tokenId: storages.tokenId.value,
                        address: storages.address.value,
                        avatarId: getAvatarId(metaTag.content)
                    }, identity.identifier.network, constants/* RSS3_KEY_SNS.INSTAGRAM */.vu.INSTAGRAM);
                    if (!avatarInfo) {
                        clearStorages();
                        setAvatar(undefined);
                        window.alert('Sorry, failed to save NFT Avatar. Please set again.');
                        return;
                    }
                    setAvatar(avatarInfo);
                    clearStorages();
                    await messages/* PluginNFTAvatarRPC.clearCache */.B.clearCache(identity.identifier.userId, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier, constants/* RSS3_KEY_SNS.INSTAGRAM */.vu.INSTAGRAM);
                    // If the avatar is set successfully, reload the page
                    window.location.reload();
                } catch (error) {
                    clearStorages();
                    setAvatar(undefined);
                    window.alert(error.message);
                    return;
                }
            }
        }).startWatch({
            childList: true,
            subtree: true,
            attributes: true
        });
        return ()=>{
            watcher.stopWatch();
        };
    }, [
        identity,
        wallet
    ]);
    (0,react.useEffect)(()=>{
        var ref4, ref1, ref2;
        if (!showAvatar) return;
        let containerDom;
        if (((ref4 = searchInstagramAvatarSelector().evaluate()) === null || ref4 === void 0 ? void 0 : (ref1 = ref4.parentElement) === null || ref1 === void 0 ? void 0 : ref1.tagName) === 'SPAN') {
            containerDom = searchInstagramAvatarSelector().closest(1);
        } else {
            containerDom = searchInstagramAvatarSelector().closest(2);
        }
        const style = document.createElement('style');
        style.innerText = `
                ${RainbowBox/* rainbowBorderKeyFrames.styles */.v.styles}

                .rainbowBorder {
                    animation: ${RainbowBox/* rainbowBorderKeyFrames.name */.v.name} 6s linear infinite;
                    box-shadow: 0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
                    transition: .125s ease;
                    border: 2px solid #00f8ff;
                }
            `;
        const parentDom = searchInstagramAvatarSelector().closest(2).evaluate();
        parentDom === null || parentDom === void 0 ? void 0 : parentDom.appendChild(style);
        (ref2 = containerDom.evaluate()) === null || ref2 === void 0 ? void 0 : ref2.classList.add('rainbowBorder');
        return ()=>{
            var ref, ref3;
            if ((parentDom === null || parentDom === void 0 ? void 0 : (ref = parentDom.lastElementChild) === null || ref === void 0 ? void 0 : ref.tagName) === 'STYLE') {
                parentDom.removeChild(parentDom.lastElementChild);
            }
            (ref3 = containerDom.evaluate()) === null || ref3 === void 0 ? void 0 : ref3.classList.remove('rainbowBorder');
        };
    }, [
        location.pathname,
        showAvatar
    ]);
    (0,react.useEffect)(()=>setAvatar(_avatar1)
    , [
        _avatar1,
        location
    ]);
    if (!avatar || !size || !showAvatar) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadge/* NFTBadge */.A, {
        hasRainbow: false,
        avatar: avatar,
        size: size,
        classes: {
            root: classes.root,
            text: classes.text,
            icon: classes.icon
        }
    }));
}

// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarButton.tsx + 1 modules
var NFTAvatarButton = __webpack_require__(81179);
// EXTERNAL MODULE: ./src/plugins/Avatar/utils/index.ts
var Avatar_utils = __webpack_require__(23594);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(43470);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(35437);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatar.tsx + 2 modules
var NFTAvatar = __webpack_require__(26176);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/NFT/NFTAvatarSettingDialog.tsx














const NFTAvatarSettingDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        root: {
            padding: '8px 0',
            margin: '0 16px'
        }
    })
);
async function changeImageToActiveElements(image) {
    var ref;
    const imageBuffer = await image.arrayBuffer();
    (0,sdk/* hookInputUploadOnce */.ed)('image/png', 'avatar.png', new Uint8Array(imageBuffer));
    (ref = searchInstagramAvatarOpenFilesSelector().evaluate()) === null || ref === void 0 ? void 0 : ref.click();
}
function NFTAvatarSettingDialog() {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const [open, setOpen] = (0,react.useState)(false);
    const { classes  } = NFTAvatarSettingDialog_useStyles();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const onChange = (0,react.useCallback)(async (token)=>{
        var ref, ref1, ref2;
        if (!token.info.imageURL) return;
        const image = await (0,Avatar_utils/* toPNG */.mr)(token.info.imageURL);
        if (!image) return;
        await changeImageToActiveElements(image);
        (ref = shared_0/* InMemoryStorages.InstagramNFTEvent */.uU.InstagramNFTEvent) === null || ref === void 0 ? void 0 : ref.storage.userId.setValue(identity.identifier.userId);
        (ref1 = shared_0/* InMemoryStorages.InstagramNFTEvent */.uU.InstagramNFTEvent) === null || ref1 === void 0 ? void 0 : ref1.storage.address.setValue(token.contractDetailed.address);
        (ref2 = shared_0/* InMemoryStorages.InstagramNFTEvent */.uU.InstagramNFTEvent) === null || ref2 === void 0 ? void 0 : ref2.storage.tokenId.setValue(token.tokenId);
        setOpen(false);
    }, [
        identity
    ]);
    const onClose = (0,react.useCallback)(()=>setOpen(false)
    , []);
    (0,useMount/* default */.Z)(()=>{
        clearStorages();
        return src_utils/* MaskMessages.events.nftAvatarSettingDialogUpdated.on */.ql.events.nftAvatarSettingDialogUpdated.on((data)=>setOpen(data.open)
        );
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* DialogStackingProvider */.yu, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            keepMounted: true,
            open: open,
            onClose: onClose,
            title: t('set_nft_profile_photo'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatar/* NFTAvatar */.R, {
                    onChange: onChange,
                    classes: classes,
                    hideWallet: true
                })
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/NFT/NFTAvatarEditProfile.tsx









function injectOpenNFTAvatarEditProfileButton(signal) {
    const watcher = new umd.MutationObserverWatcher(searchInstagramProfileAvatarButtonSelector());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(OpenNFTAvatarEditProfileButtonInInstagram, {}));
    const dialogWatcher = new umd.MutationObserverWatcher(searchInstagramAvatarSettingDialog());
    (0,src_utils/* startWatch */.fy)(dialogWatcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(dialogWatcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarSettingDialog, {}));
}
const NFTAvatarEditProfile_useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        root: {
            marginTop: 5,
            marginLeft: 'auto',
            marginRight: 'auto',
            background: '#262626',
            borderRadius: '4px !important',
            height: 30,
            width: 104
        },
        text: {
            fontSize: 12,
            color: '#ffffff',
            lineHeight: '12px'
        }
    })
);
function OpenNFTAvatarEditProfileButtonInInstagram() {
    var ref;
    const location = (0,useLocation/* default */.Z)();
    const onClick = (0,react.useCallback)(()=>{
        src_utils/* MaskMessages.events.nftAvatarSettingDialogUpdated.sendToLocal */.ql.events.nftAvatarSettingDialogUpdated.sendToLocal({
            open: true
        });
    }, []);
    const { classes  } = NFTAvatarEditProfile_useStyles();
    const editButton = (0,react.useMemo)(()=>searchInstagramProfileEditButton().evaluate()
    , [
        location.pathname
    ]);
    if (((ref = location.pathname) === null || ref === void 0 ? void 0 : ref.includes('/edit')) || !editButton) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButton/* NFTAvatarButton */.m, {
        onClick: onClick,
        classes: classes
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/utils/avatar.ts

function getInjectNodeInfo(element) {
    const avatarId = getAvatarId(element.src);
    if (!avatarId) return;
    // instagram bug, when page routing is switched, the avatar size on the timeline will initially be 150.
    return {
        element,
        width: element.width === 150 ? 32 : element.width,
        height: element.height === 150 ? 32 : element.height,
        avatarId
    };
}

// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadgeTimeline.tsx
var NFTBadgeTimeline = __webpack_require__(21663);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/NFT/NFTAvatarInTimeline.tsx










const NFTAvatarInTimeline_useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        root: {
            transform: 'scale(1)!important'
        }
    })
);
const TimeLineRainbow = /*#__PURE__*/ (0,react.memo)(({ userId , avatarId , width , height  })=>{
    const { classes  } = NFTAvatarInTimeline_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadgeTimeline/* NFTBadgeTimeline */.J, {
            userId: userId,
            avatarId: avatarId,
            width: width,
            height: height,
            classes: classes,
            snsKey: constants/* RSS3_KEY_SNS.INSTAGRAM */.vu.INSTAGRAM
        })
    }));
});
function _(selector, signal) {
    (0,src_utils/* startWatch */.fy)(new umd.MutationObserverWatcher(selector()).useForeach((element)=>{
        let remove = ()=>{};
        const run = async ()=>{
            var ref;
            const href = (ref = element.parentNode) === null || ref === void 0 ? void 0 : ref.href;
            if (!href) return;
            const id = new URL(href).pathname.replaceAll('/', '');
            if (!id) return;
            const info = getInjectNodeInfo(element);
            if (!info) return;
            const proxy = (0,umd.DOMProxy)({
                afterShadowRootInit: {
                    mode: shared_0/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
                }
            });
            proxy.realCurrent = info.element;
            const root = (0,src_utils/* createReactRootShadowed */.ou)(proxy.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(TimeLineRainbow, {
                userId: id,
                avatarId: info.avatarId,
                width: info.width - 4,
                height: info.height - 4
            }));
            remove = root.destory;
        };
        run();
        return {
            onNodeMutation: run,
            onTargetChanged: run,
            onRemove: ()=>remove()
        };
    }), signal);
}
async function injectUserNFTAvatarAtInstagram(signal) {
    _(searchInstagramPostAvatarSelector, signal);
}

// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(46098);
;// CONCATENATED MODULE: ../icons/general/Collectible.tsx


const CollectibleIcon = (0,icons_utils/* createIcon */.I)('CollectibleIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.5 0C3.19309 0 0.5 2.68977 0.5 6C0.5 9.31023 3.19309 12 6.5 12C9.80699 12 12.5 9.30699 12.5 6C12.5 2.69309 9.81023 0 6.5 0ZM11.723 6C11.723 7.09786 11.3836 8.11733 10.8025 8.95911C10.7942 8.93641 10.7859 8.9143 10.7774 8.89282L10.7766 8.89097C10.621 8.50719 10.3092 8.04673 9.87242 7.52383L9.8716 7.52286C9.78185 7.41662 9.69673 7.31807 9.62002 7.23165C9.69 7.13083 9.73052 7.00932 9.73052 6.88005V3.97493C9.73052 2.47275 8.69247 1.20012 7.29807 0.837914C9.79965 1.22358 11.723 3.39267 11.723 6ZM1.27697 6C1.27697 3.35699 3.25334 1.16431 5.80493 0.82309C5.32743 0.946988 4.88529 1.19888 4.51779 1.56174C3.95715 2.11554 3.63538 2.88101 3.63538 3.6595V7.06027C3.24488 7.48348 2.79182 8.07468 2.51792 8.66962C2.44555 8.82641 2.38231 8.9786 2.32583 9.12844C1.66869 8.25476 1.27697 7.17385 1.27697 6ZM2.91361 9.79306C2.97595 9.59581 3.0495 9.39582 3.13777 9.18782C3.1546 9.30043 3.17764 9.41355 3.20842 9.52492L3.20897 9.52683C3.31072 9.88296 3.51473 10.1872 3.69042 10.4006C3.41344 10.2229 3.1533 10.0189 2.91361 9.79306ZM4.46845 7.32311C4.49106 7.30201 4.51522 7.28084 4.54072 7.25959C4.53497 7.33649 4.53176 7.41488 4.532 7.49347C4.53284 7.77335 4.57732 8.08178 4.73189 8.33408C4.89232 8.60081 5.13947 8.75693 5.44699 8.80481C5.53684 8.82026 5.62005 8.82361 5.69565 8.82361C6.14582 8.82361 6.54768 8.64126 6.8634 8.43078C7.09334 8.27749 7.28628 8.10351 7.43008 7.95737C7.51479 7.99677 7.60637 8.01611 7.69864 8.01611C7.77625 8.01611 7.85041 8.00051 7.91557 7.97724L8.59765 7.73177C8.32151 7.89818 8.02521 8.14445 7.77377 8.50577C7.49265 8.91243 7.33096 9.52485 7.23448 10.066C7.1574 10.4984 7.11806 10.9095 7.0985 11.1821C6.9036 11.2068 6.70925 11.2223 6.51318 11.223C6.45029 10.9238 6.27701 10.4777 5.78732 10.2103C5.2048 9.89207 4.67982 9.93678 4.38054 10.0064C4.23778 9.85245 4.03893 9.59669 3.95872 9.31487C3.80658 8.78239 3.9024 8.13107 3.94629 7.89184C4.14512 7.64809 4.33686 7.44631 4.46845 7.32311ZM5.48427 8.57729L5.44922 8.80515L5.44699 8.80481L5.44477 8.80443L5.48427 8.57729ZM7.83478 4.27724H7.83162V3.05388C7.83162 2.22895 7.16015 1.56138 6.33913 1.56138H6.21296C6.13488 1.56138 6.05821 1.5674 5.98338 1.57899C6.15635 1.53276 6.33674 1.51003 6.52254 1.51191C7.86304 1.52936 8.95355 2.63156 8.95355 3.97493V6.77583L7.83478 7.18038V4.27724ZM4.41551 3.6595C4.41551 3.11413 4.63087 2.57437 5.00993 2.17154C4.82794 2.4191 4.72047 2.72445 4.72047 3.05388V4.50801C4.72047 4.95112 4.91622 5.3444 5.21819 5.61603C5.20048 5.68094 5.16381 5.76701 5.08994 5.86261C4.98282 6.00212 4.77586 6.14337 4.52409 6.31232C4.48779 6.33607 4.45154 6.36033 4.41551 6.38504V3.6595ZM6.33598 6.00681C6.59634 6.00681 6.83992 5.93887 7.0515 5.82111V7.21423C6.97799 7.30209 6.81478 7.48519 6.59718 7.65842C6.28789 7.90464 5.91908 8.09102 5.56332 8.03667L5.56177 8.03644C5.47791 8.02421 5.42985 7.99062 5.3903 7.92876C5.30885 7.79299 5.28639 7.54547 5.31611 7.24756C5.3408 6.99998 5.39689 6.75891 5.44174 6.60437C5.53633 6.52499 5.62614 6.43731 5.70215 6.33913C5.79897 6.21284 5.86524 6.08903 5.91066 5.97416C6.00577 5.99475 6.10559 6.00681 6.2098 6.00681H6.33598ZM5.49743 3.05388C5.49743 2.65821 5.81945 2.33835 6.21296 2.33835H6.33913C6.73479 2.33835 7.05465 2.66036 7.05465 3.05388V4.50801C7.05465 4.90368 6.73264 5.22354 6.33913 5.22354H6.21296C5.81729 5.22354 5.49743 4.90152 5.49743 4.50801V3.05388ZM8.41206 8.94806C8.73453 8.48174 9.17067 8.2849 9.42324 8.20704C9.74053 8.60584 9.95554 8.94079 10.0558 9.1849C10.1075 9.3118 10.1557 9.47918 10.1949 9.68357C9.56381 10.3158 8.77319 10.7886 7.88981 11.034C7.91227 10.7858 7.9488 10.4732 8.00686 10.1559C8.09543 9.67193 8.2278 9.21506 8.41206 8.94806ZM4.4623 10.8046C4.46589 10.7968 4.46904 10.791 4.47155 10.7868C4.59177 10.7457 4.96726 10.65 5.41179 10.8931C5.53484 10.9601 5.61646 11.0558 5.6701 11.1549C5.24834 11.0863 4.844 10.9665 4.4623 10.8046Z"
    })
}), '0 0 13 12');

// EXTERNAL MODULE: ./src/components/InjectedComponents/ProfileTab.tsx
var ProfileTab = __webpack_require__(3925);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/ProfileTab.tsx









function injectProfileTabAtInstagram(signal) {
    let tabInjected = false;
    const contentWatcher = new umd.MutationObserverWatcher(searchProfileTabPageSelector()).useForeach(()=>{
        const elePage = searchProfileTabPageSelector().evaluate();
        if (elePage && !tabInjected) {
            const watcher = new umd.MutationObserverWatcher(searchProfileTabListLastChildSelector());
            (0,src_utils/* startWatch */.fy)(watcher, signal);
            (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
                signal
            }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabAtInstagram, {}));
            tabInjected = true;
        }
    });
    (0,src_utils/* startWatch */.fy)(contentWatcher, signal);
}
function getStyleProps(activeColor) {
    const EMPTY_STYLE = {};
    const eleTab = searchProfileTabSelector().evaluate();
    const style = eleTab ? window.getComputedStyle(eleTab) : EMPTY_STYLE;
    return {
        color: activeColor.color,
        font: style.font,
        fontSize: style.fontSize,
        padding: style.paddingBottom,
        height: style.height,
        hover: activeColor.activeColor,
        line: activeColor.activeColor
    };
}
const ProfileTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>{
    return {
        root: {
            '&:hover': {
                cursor: 'pointer'
            },
            display: '-webkit-box',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 60
        },
        button: {
            color: props.color,
            font: props.font,
            fontSize: props.fontSize,
            height: props.height,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            borderTop: '1px solid transparent'
        },
        selected: {
            borderTop: `1px solid ${props.hover}`,
            color: props.hover,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                borderTop: 'unset'
            }
        },
        line: {},
        icon: {
            [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
                fontSize: props.fontSize,
                paddingRight: 4
            }
        }
    };
});
function getActiveColor() {
    var ref;
    const activeTab = (ref = searchProfileActiveTabSelector().evaluate()) === null || ref === void 0 ? void 0 : ref.firstElementChild;
    if (!activeTab) return '';
    const activeStyle = window.getComputedStyle(activeTab);
    return activeStyle.color;
}
function getColor() {
    const tab = searchProfileTabSelector().evaluate();
    if (!tab) return '';
    const style = window.getComputedStyle(tab);
    return style.color;
}
function ProfileTabAtInstagram() {
    const isMobile = (0,src_utils/* useMatchXS */.IN)();
    const location = (0,useLocation/* default */.Z)();
    const [styles, setStyles] = (0,react.useState)({
        color: '',
        font: '',
        hover: '',
        fontSize: '',
        height: '',
        padding: ''
    });
    const { activeColor: activeColor1 , color: color1  } = (0,react.useMemo)(()=>{
        const activeColor = getActiveColor();
        const color = getColor();
        return {
            activeColor,
            color
        };
    }, [
        location.pathname
    ]);
    (0,react.useLayoutEffect)(()=>{
        const tabStyles = getStyleProps({
            activeColor: activeColor1,
            color: color1
        });
        setStyles(tabStyles);
    }, []);
    const { classes  } = ProfileTab_useStyles(styles);
    const reset = ()=>{
        const activeTab = searchProfileActiveTabSelector().evaluate();
        if (activeTab === null || activeTab === void 0 ? void 0 : activeTab.style) {
            activeTab.style.borderTop = '';
            activeTab.style.color = '';
        }
        if (isMobile) {
            var ref;
            const activeTab = (ref = searchProfileActiveTabSelector().evaluate()) === null || ref === void 0 ? void 0 : ref.firstElementChild;
            if ((activeTab === null || activeTab === void 0 ? void 0 : activeTab.tagName.toUpperCase()) === 'SVG') {
                const ele = activeTab;
                if (ele.style) {
                    ele.style.color = '';
                    ele.style.fill = '';
                }
            }
        }
        const ele = searchProfileTabPageSelector().evaluate();
        if (ele === null || ele === void 0 ? void 0 : ele.style) {
            ele.style.display = '';
        }
    };
    const clear = async ()=>{
        const style = getStyleProps({
            activeColor: activeColor1,
            color: color1
        });
        const activeTab = searchProfileActiveTabSelector().evaluate();
        if (activeTab === null || activeTab === void 0 ? void 0 : activeTab.style) {
            activeTab.style.borderTop = 'none';
            activeTab.style.color = style.color;
        }
        if (isMobile) {
            var ref;
            const activeTab = (ref = searchProfileActiveTabSelector().evaluate()) === null || ref === void 0 ? void 0 : ref.firstElementChild;
            if ((activeTab === null || activeTab === void 0 ? void 0 : activeTab.tagName.toUpperCase()) === 'SVG') {
                const ele = activeTab;
                if (ele.style) {
                    ele.style.color = style.color;
                    ele.style.fill = style.color;
                }
            }
        }
        const ele = searchProfileTabPageSelector().evaluate();
        if (ele === null || ele === void 0 ? void 0 : ele.style) {
            ele.style.display = 'none';
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTab/* ProfileTab */.D, {
        title: "Web3",
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleIcon, {
            className: classes.icon
        }),
        classes: classes,
        reset: reset,
        clear: clear
    }));
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/ProfileTabContent.tsx + 3 modules
var ProfileTabContent = __webpack_require__(60551);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/ProfileTabContent.tsx






function injectProfileTabContentAtInstagram(signal) {
    injectProfileTabContentHaveArticle(signal);
}
function injectProfileTabContentHaveArticle(signal) {
    const watcher = new umd.MutationObserverWatcher(searchProfileTabArticlePageSelector());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContentAtInstagram, {}));
}
function ProfileTabContent_getStyleProps() {
    const activeTab = searchProfileActiveTabSelector().evaluate();
    return {
        backgroundColor: activeTab ? window.getComputedStyle(activeTab).backgroundColor : undefined,
        fontFamily: activeTab ? window.getComputedStyle(activeTab).fontFamily : undefined
    };
}
const ProfileTabContent_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const props = ProfileTabContent_getStyleProps();
    return {
        root: {
            position: 'relative'
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
function ProfileTabContentAtInstagram() {
    const { classes  } = ProfileTabContent_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContent/* ProfileTabContent */.d, {
        classes: classes
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/ui-provider.ts















const ui_provider_define = {
    ...shared/* instagramShared */.U,
    ...base/* instagramBase */.j,
    automation: {
        nativeCompositionDialog: {
            attachImage (url, options) {
                if (url instanceof Blob) url = URL.createObjectURL(url);
                (0,sdk/* pasteInstagram */.X2)(url);
            }
        }
    },
    collecting: {
        identityProvider: IdentityProviderInstagram,
        currentVisitingIdentityProvider: CurrentVisitingIdentityProviderInstagram,
        postsProvider: PostProviderInstagram
    },
    configuration: {
        setupWizard: {
            disableSayHello: true
        }
    },
    customization: {},
    init (signal) {
        const friends = social_network/* stateCreator.friends */.ZZ.friends();
        const profiles = social_network/* stateCreator.profiles */.ZZ.profiles();
        (0,defaults/* InitAutonomousStateProfiles */.SK)(signal, profiles, base/* instagramBase.networkIdentifier */.j.networkIdentifier);
        // No need to init cause this network is not going to support those features now.
        return {
            friends,
            profiles
        };
    },
    injection: {
        setupWizard: (0,defaults/* createTaskStartSetupGuideDefault */.Zh)(),
        postInspector: injectPostInspectorInstagram,
        profileAvatar: injectNFTAvatarInInstagram,
        enhancedProfileNFTAvatar: injectProfileNFTAvatarInInstagram,
        openNFTAvatar: injectOpenNFTAvatarEditProfileButton,
        userAvatar: injectUserNFTAvatarAtInstagram,
        profileTab: injectProfileTabAtInstagram,
        profileTabContent: injectProfileTabContentAtInstagram
    }
};
/* harmony default export */ const ui_provider = (ui_provider_define);


/***/ }),

/***/ 60599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jg": () => (/* reexport safe */ _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__.J),
/* harmony export */   "MF": () => (/* reexport safe */ _inject_Comments__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   "SA": () => (/* reexport safe */ _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   "SK": () => (/* reexport safe */ _state_InitProfiles__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "Zh": () => (/* reexport safe */ _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__.Z)
/* harmony export */ });
/* harmony import */ var _automation_AttachImageToComposition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66991);
/* harmony import */ var _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86330);
/* harmony import */ var _inject_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84334);
/* harmony import */ var _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13360);
/* harmony import */ var _state_InitFriends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50814);
/* harmony import */ var _state_InitProfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49165);
/* harmony import */ var _inject_PageInspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89887);
/* harmony import */ var _inject_PostReplacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51682);
/* harmony import */ var _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72048);











/***/ }),

/***/ 86330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ injectCommentBoxDefaultFactory)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(13863);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(65375);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/CommentBox.tsx






const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        root: {
            flex: 1,
            fontSize: 13,
            background: '#3a3b3c',
            width: snsId === base/* MINDS_ID */.fN ? '96%' : '100%',
            height: 34,
            borderRadius: 20,
            padding: '2px 1em',
            boxSizing: 'border-box',
            marginTop: 6,
            color: '#e4e6eb'
        },
        input: {
            '&::placeholder': {
                color: '#b0b3b8',
                opacity: 1
            },
            '&:focus::placeholder': {
                color: '#d0d2d6'
            }
        }
    })
);
function CommentBox(props) {
    const { classes  } = useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    });
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        sx: {
            display: 'flex',
            width: '100%'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
            className: classes.root,
            inputProps: {
                className: classes.input,
                'data-testid': 'comment_input'
            },
            placeholder: t('comment_box__placeholder'),
            onKeyDownCapture: (e)=>{
                const node = e.target;
                if (!node.value) return;
                if (e.key === 'Enter') {
                    props.onSubmit(node.value);
                    node.value = '';
                }
            },
            ...props.inputProps
        })
    }));
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(76262);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(2214);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(84749);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var typed_message_base = __webpack_require__(69492);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/CommentBox.tsx












const defaultOnPasteToCommentBox = async (encryptedComment, _current, _realCurrent)=>{
    messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
        text: encryptedComment
    });
};
// TODO: should not rely on onPasteToCommentBoxFacebook.
// Use automation.nativeCommentBox.appendText
const injectCommentBoxDefaultFactory = function(onPasteToCommentBox = defaultOnPasteToCommentBox, additionPropsToCommentBox = ()=>({})
, useCustomStyles = (0,src/* makeStyles */.ZL)()({}), mountPointCallback) {
    const CommentBoxUI = /*#__PURE__*/ (0,react.memo)(function CommentBoxUI({ dom  }) {
        const info = (0,usePostInfo/* usePostInfo */.oQ)();
        const payload = usePostInfo/* usePostInfoDetails.containingMaskPayload */.H9.containingMaskPayload();
        const postContent = usePostInfo/* usePostInfoDetails.rawMessagePiped */.H9.rawMessagePiped();
        const { classes  } = useCustomStyles();
        const iv = usePostInfo/* usePostInfoDetails.iv */.H9.iv();
        const props = additionPropsToCommentBox(classes);
        const onCallback = (0,react.useCallback)(async (content)=>{
            const postIV = iv || payload.unwrap().iv;
            const decryptedText = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
            const encryptedComment = await service/* default.Crypto.encryptComment */.ZP.Crypto.encryptComment(postIV, decryptedText, content);
            onPasteToCommentBox(encryptedComment, info, dom).catch(console.error);
        }, [
            payload,
            postContent,
            info,
            dom,
            iv
        ]);
        if (!postContent.items.length) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBox, {
            onSubmit: onCallback,
            ...props
        }));
    });
    return (signal, current)=>{
        var ref;
        if (!((ref = current.comment) === null || ref === void 0 ? void 0 : ref.commentBoxSelector)) return noop/* default */.Z;
        const commentBoxWatcher = new umd.MutationObserverWatcher(current.comment.commentBoxSelector.clone(), document.body).useForeach((node, key, meta)=>{
            try {
                mountPointCallback === null || mountPointCallback === void 0 ? void 0 : mountPointCallback(meta);
            } catch  {}
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
                post: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBoxUI, {
                    ...current,
                    dom: meta.realCurrent
                })
            }));
            return root.destory;
        });
        (0,watcher/* startWatch */.f)(commentBoxWatcher, signal);
        return ()=>commentBoxWatcher.stopWatch()
        ;
    };
};


/***/ }),

/***/ 84334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ injectPostCommentsDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(39850);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(3073);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var theme_src = __webpack_require__(92597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Lock.js
var Lock = __webpack_require__(43257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(76262);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostComments.tsx










const useStyle = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        height: 'auto',
        width: 'calc(98% - 10px)',
        padding: '6px'
    },
    label: {
        width: '90%',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
        textOverflow: 'clip'
    }
});
function PostCommentDecrypted(props) {
    const chipClasses = (0,theme_src/* useStylesExtends */.Bc)(useStyle(), props.ChipProps || {});
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
            "data-testid": "comment_field",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lock/* default */.Z, {}),
            label: props.children,
            color: "secondary",
            ...props.ChipProps,
            classes: chipClasses
        })
    }));
}
function PostComment(props) {
    const { needZip  } = props;
    const comment = (0,src/* useValueRef */.E)(props.comment);
    const postContent = usePostInfo/* usePostInfoDetails.rawMessagePiped */.H9.rawMessagePiped();
    const containingPayload = usePostInfo/* usePostInfoDetails.containingMaskPayload */.H9.containingMaskPayload();
    const iv = usePostInfo/* usePostInfoDetails.iv */.H9.iv();
    const postIV = containingPayload.map((x)=>x.iv
    ).unwrapOr(iv);
    const dec = (0,useAsync/* default */.Z)(async ()=>{
        const decryptedText = (0,base/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
        if (!postIV || !decryptedText) throw new Error('Decrypt comment failed');
        const result = await service/* default.Crypto.decryptComment */.ZP.Crypto.decryptComment(postIV, decryptedText, comment);
        if (result === null) throw new Error('Decrypt result empty');
        return result;
    }, [
        postIV,
        postContent,
        comment
    ]);
    (0,react.useEffect)(()=>void (dec.value && needZip())
    , [
        dec.value,
        needZip
    ]);
    if (dec.value) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostCommentDecrypted, {
        children: dec.value
    }));
    return null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(84749);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/Comments.tsx










/**
 * Creat a default implementation of injectPostComments
 */ function injectPostCommentsDefault(config = {}, additionalPropsToPostComment = ()=>({})
, useCustomStyles = (0,theme_src/* makeStyles */.ZL)()({})) {
    const { needZip  } = config;
    const PostCommentDefault = /*#__PURE__*/ (0,react.memo)(function PostCommentDefault(props) {
        const { classes  } = useCustomStyles();
        const additional = additionalPropsToPostComment(classes);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostComment, {
            ...props,
            ...additional
        }));
    });
    return function injectPostComments(signal, current) {
        var ref;
        const selector = (ref = current.comment) === null || ref === void 0 ? void 0 : ref.commentsSelector;
        if (!selector) return noop/* default */.Z;
        const commentWatcher = new umd.MutationObserverWatcher(selector, document.body).useForeach((commentNode, key, meta)=>{
            const commentRef = new umd.ValueRef((0,utils/* collectNodeText */.aW)(commentNode));
            const needZipF = needZip || (()=>undefined
            );
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
                post: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostCommentDefault, {
                    needZip: needZipF,
                    comment: commentRef
                })
            }));
            return {
                onNodeMutation () {
                    commentRef.value = (0,utils/* collectNodeText */.aW)(commentNode);
                },
                onTargetChanged () {
                    commentRef.value = (0,utils/* collectNodeText */.aW)(commentNode);
                },
                onRemove () {
                    root.destory();
                }
            };
        });
        (0,watcher/* startWatch */.f)(commentWatcher, signal);
        return ()=>commentWatcher.stopWatch()
        ;
    };
}


/***/ }),

/***/ 51682:
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
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(76262);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 15 modules
var dom = __webpack_require__(68876);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/context.tsx + 2 modules
var context = __webpack_require__(53763);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(3787);
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






function injectPostReplacer(config = {}) {
    const PostReplacerDefault = /*#__PURE__*/ (0,react.memo)(function PostReplacerDefault(props) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacer, {
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

/***/ 46517:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85621);


const advanceMethodProps = ['continue', 'continuePrimaryKey', 'advance'];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get(target, prop) {
        if (!advanceMethodProps.includes(prop))
            return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function (...args) {
                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
        }
        return cachedFunc;
    },
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
        cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
        return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.a.set(proxiedCursor, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u)(cursor));
    while (cursor) {
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return ((prop === Symbol.asyncIterator &&
        (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.i)(target, [IDBIndex, IDBObjectStore, IDBCursor])) ||
        (prop === 'iterate' && (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.i)(target, [IDBIndex, IDBObjectStore])));
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get(target, prop, receiver) {
        if (isIteratorProp(target, prop))
            return iterate;
        return oldTraps.get(target, prop, receiver);
    },
    has(target, prop) {
        return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    },
}));


/***/ }),

/***/ 20326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lj": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteDB),
/* harmony export */   "X3": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.openDB)
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31637);
/* harmony import */ var _build_async_iterators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);




/***/ })

}]);