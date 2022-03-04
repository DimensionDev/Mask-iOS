"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9813],{

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
        publicKeyEncoding: undefined,
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

/***/ 89813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/utils.ts
var utils = __webpack_require__(32665);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(40543);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/shared.ts
var shared = __webpack_require__(97554);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/utils/parse-username.ts
var parse_username = __webpack_require__(69189);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(2214);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 3 modules
var locales_legacy = __webpack_require__(6900);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var typed_message_base = __webpack_require__(69492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/automation/openComposeBox.ts





const nativeComposeButtonSelector = ()=>new umd.LiveSelector().querySelector([
        '[role="region"] [role="link"]+[role="button"]',
        '#MComposer [role="button"]'
    ].join(',')).enableSingleMode()
;
const nativeComposeTextareaSelector = ()=>new umd.LiveSelector().querySelector([
        '#structured_composer_form .mentions textarea'
    ].join(',')).enableSingleMode()
;
const nativeComposeDialogIndicatorSelector = ()=>new umd.LiveSelector().querySelector([
        // PC -  the form of compose dialog
        '[role="dialog"] form[method="post"]',
        // mobile - the submit button
        '#composer-main-view-id button[type="submit"]', 
    ].join(','))
;
async function taskOpenComposeBoxFacebook(content, options) {
    await (0,esm/* waitDocumentReadyState */.uL)('interactive');
    await (0,esm/* delay */.gw)(200);
    // active the compose dialog
    const composeTextarea = nativeComposeTextareaSelector().evaluate();
    const composeButton = nativeComposeButtonSelector().evaluate();
    if (composeTextarea) composeTextarea.focus();
    if (composeButton) composeButton.click();
    await (0,esm/* delay */.gw)(200);
    // the indicator only available when compose dialog opened successfully
    const composeIndicator = nativeComposeDialogIndicatorSelector().evaluate();
    if (!composeIndicator) {
        alert(locales_legacy/* i18n.t */.a.t('automation_request_click_post_button'));
        return;
    }
    await (0,esm/* delay */.gw)(2000);
    messages/* MaskMessages.events.requestComposition.sendToLocal */.q.events.requestComposition.sendToLocal({
        reason: 'popup',
        open: true,
        content: typeof content === 'string' ? (0,typed_message_base/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/utils/isMobile.ts
var isMobile = __webpack_require__(72572);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(69366);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/automation/pasteTextToComposition.ts





/**
 * Access: https://(www|m).facebook.com/
 */ async function pasteTextToCompositionFacebook(text, options) {
    const { recover  } = options;
    await (0,esm/* waitDocumentReadyState */.uL)('interactive');
    // Save the scrolling position
    const scrolling = document.scrollingElement || document.documentElement;
    const scrollBack = ((top)=>()=>scrolling.scroll({
                top
            })
    )(scrolling.scrollTop);
    const activated = new umd.LiveSelector().querySelectorAll(// cspell:disable-next-line
    isMobile/* isMobileFacebook */.q ? 'form textarea' : 'div[role=presentation] .notranslate[aria-describedby]');
    if (isMobile/* isMobileFacebook */.q) activated.filter((x)=>x.getClientRects().length > 0
    );
    // Select element with fb customize background image.
    const activatedCustom = new umd.LiveSelector().querySelectorAll('.notranslate[aria-label]');
    activatedCustom.filter((x)=>{
        var ref, ref1, ref2, ref3;
        return (ref = x.parentElement) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.parentElement) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.parentElement) === null || ref3 === void 0 ? void 0 : ref3.hasAttribute('style');
    });
    var ref4;
    const element = (ref4 = activated.evaluate()[0]) !== null && ref4 !== void 0 ? ref4 : activatedCustom.evaluate()[0];
    try {
        element.focus();
        await (0,esm/* delay */.gw)(100);
        if ('value' in document.activeElement) (0,sdk/* inputText */.iJ)(text);
        else (0,sdk/* pasteText */.M1)(text);
        await (0,esm/* delay */.gw)(400);
        if (isMobile/* isMobileFacebook */.q) {
            const e = document.querySelector('.mentions-placeholder');
            if (e) e.style.display = 'none';
        }
        // Prevent Custom Paste failed, this will cause service not available to user.
        if (!element.innerText.includes(text) || 'value' in element && !element.value.includes(text)) copyFailed('Not detected');
    } catch (error1) {
        copyFailed(error1);
    }
    scrollBack();
    function copyFailed(error) {
        console.warn('Text not pasted to the text area', error);
        if (recover) messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
            text
        });
    }
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ./src/social-network-adaptor/utils.ts
var social_network_adaptor_utils = __webpack_require__(23003);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/selector.ts

const querySelector = (selector, singleMode = true)=>{
    const ls = new umd.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const querySelectorAll = (selector)=>{
    return new umd.LiveSelector().querySelectorAll(selector);
};
const searchUserIdOnMobileSelector = ()=>querySelector('div[data-sigil$="profile"] a')
;
const searchAvatarSelector = ()=>querySelector('[role="main"] [role="link"] [role="img"] image, [role="main"] [role="button"] [role="img"] image')
;
const searchNickNameSelector = ()=>querySelector('span[dir="auto"] div h1')
;
const searchNickNameSelectorOnMobile = ()=>querySelector('#cover-name-root h3')
;
const bioDescriptionSelector = ()=>querySelector('span[dir="auto"] div h1').closest(7).querySelector('span[dir="auto"] > span')
;
const bioDescriptionSelectorOnMobile = ()=>querySelector('#bio div')
;
const searchUserIdSelector = ()=>querySelector('div[data-pagelet="ProfileTabs"] a[role="tab"]')
;
const searchUserIdSelectorOnMobile = ()=>querySelector('#tlFeed div[data-sigil="scroll-area"] a:last-child')
;
// #endregion facebook nft avatar
const searchFacebookAvatarListSelector = ()=>querySelector('[role="dialog"] > div > div > div > input[type=file] + [role="button"]').closest(3).querySelector('div')
;
const searchFacebookAvatarMobileListSelector = ()=>querySelector('#nuxChoosePhotoButton').closest(6)
;
const searchFacebookAvatarSelector = ()=>querySelector('[role="main"] [role="button"] svg[role="img"],[role="main"] [role="link"] svg[role="img"]')
;
const searchFacebookAvatarOnMobileSelector = ()=>querySelector('[data-sigil="timeline-cover"] i[aria-label$="picture"]')
;
const searchFaceBookPostAvatarSelector = ()=>new umd.LiveSelector().querySelectorAll('[type="nested/pressable"] > a > div > svg, ul div[role="article"] a > div > svg[role="none"]')
;
const searchFaceBookPostAvatarOnMobileSelector = ()=>querySelectorAll('[data-gt=\'{"tn":"~"}\']')
;
const searchFacebookAvatarOpenFilesSelector = ()=>querySelector('[role="dialog"] input[type=file] ~ div')
;
const searchFacebookAvatarOpenFilesOnMobileSelector = ()=>querySelector('#nuxChoosePhotoButton ~ input')
;
const searchFacebookSaveAvatarButtonOnMobileSelector = ()=>querySelector('#nuxUploadPhotoButton')
;
const searchFacebookAvatarContainerSelector = ()=>querySelector('div[data-pagelet="ProfileActions"] > div > div')
;
const searchFacebookProfileSettingButtonSelector = ()=>querySelector('[role="button"] [role="img"]').closest(10).querySelector('input[type="file"] ~ div').closest(2)
;
const searchFacebookEditProfileSelector = ()=>querySelector('[role="button"] [role="img"]').closest(1).querySelector('i[data-visualcompletion="css-img"]')
;
const searchFacebookSaveAvatarButtonSelector = ()=>{
    return new umd.LiveSelector().querySelector('[role="dialog"] [role="slider"]').closest(7).querySelectorAll('div').map((x)=>{
        var ref;
        return (ref = x.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement;
    }).at(-1);
};
const searchFacebookConfirmAvatarImageSelector = ()=>querySelector('[role="dialog"] [role="slider"]').closest(7).querySelector('img')
;
// #region
const toolBoxInSideBarSelector = ()=>querySelector('[data-pagelet="LeftRail"] li:nth-child(2)')
;
// for getting normal tab style
const profileTabUnselectedSelector = ()=>querySelector('[data-pagelet="ProfileTabs"] a[aria-selected="false"]')
;
// for getting activated tab style
const profileTabSelectedSelector = ()=>querySelector('[data-pagelet="ProfileTabs"] [aria-selected="true"]')
;
// fot inserting web3 tab
const searchProfileTabSelector = ()=>querySelector('[data-pagelet="ProfileTabs"] a:nth-child(7)')
;
// fot getting the inserted web3 tab
const web3TabSelector = ()=>querySelector('[data-pagelet="ProfileTabs"] a:nth-child(7)+span')
;
// fot inserting web3 tab content
const searchProfileTabPageSelector = ()=>querySelector('[data-pagelet="ProfileAppSection_0"], [data-pagelet="ProfileTimeline"]').closest(1).querySelector('div:first-of-type')
;
// fot getting profile section style
const profileSectionSelector = ()=>querySelector('[data-pagelet="ProfileAppSection_0"], [data-pagelet="ProfileTimeline"]').querySelector('[style]')
;
const searchIntroSectionSelector = ()=>querySelector('[data-pagelet="ProfileTilesFeed_0"]')
;
const searchBioSelector = ()=>querySelector('[data-pagelet="ProfileTilesFeed_0"] > div > div > div > div > div:last-child span[dir="auto"]')
;
const searchHomepageSelector = ()=>querySelector('[data-pagelet="ProfileTilesFeed_0"] ul a span[dir="auto"]')
;

;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/getProfileIdentifier.ts




/**
 *
 * @param allowCollectInfo
 * @param links
 *  Could be a group of anchor element. Seems like this:
 *  [
 *      <a class="_2nlw _2nlv" href="https://www.facebook.com/xxx">
 *          [USERNAME HERE]
 *          <span class="alternate_name">
 *              ([USER SCREEN NAME HERE])
 *          </span>
 *      </a>
 *  ]
 */ function getProfileIdentifierAtFacebook(links, allowCollectInfo) {
    const unknown = {
        identifier: src/* ProfileIdentifier.unknown */.WO.unknown,
        avatar: undefined,
        nickname: undefined
    };
    try {
        if (!Array.isArray(links)) links = [
            links
        ];
        const result = links.filter((x)=>x
        ).map((x)=>({
                nickname: x.ariaLabel,
                id: getUserID(x.href),
                dom: x
            })
        ).filter((x)=>x.id
        );
        const { dom , id , nickname  } = result[0] || {};
        if (id) {
            const result = new src/* ProfileIdentifier */.WO('facebook.com', id);
            const currentProfile = (0,social_network_adaptor_utils/* getCurrentIdentifier */.T)();
            let avatar = null;
            try {
                const image = dom.closest('.clearfix').parentElement.querySelector('img');
                avatar = image.src;
                if (allowCollectInfo && image.getAttribute('aria-label') === nickname && nickname) {
                    service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(result, {
                        nickname,
                        avatarURL: image.src
                    });
                    if (currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.linkedPersona) {
                        service/* default.Identity.createNewRelation */.ZP.Identity.createNewRelation(result, currentProfile.linkedPersona.identifier);
                    }
                }
            } catch  {}
            try {
                const image = dom.querySelector('img');
                avatar = image.src;
                if (allowCollectInfo && avatar) {
                    service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(result, {
                        nickname,
                        avatarURL: image.src
                    });
                    if (currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.linkedPersona) {
                        service/* default.Identity.createNewRelation */.ZP.Identity.createNewRelation(result, currentProfile.linkedPersona.identifier);
                    }
                }
            } catch  {}
            try {
                const image = dom.querySelector('image');
                avatar = image.getAttribute('xlink:href');
                if (allowCollectInfo && avatar) {
                    service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(result, {
                        nickname,
                        avatarURL: avatar
                    });
                    if (currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.linkedPersona) {
                        service/* default.Identity.createNewRelation */.ZP.Identity.createNewRelation(result, currentProfile.linkedPersona.identifier);
                    }
                }
            } catch  {}
            return {
                identifier: result,
                avatar: avatar !== null && avatar !== void 0 ? avatar : undefined,
                nickname: nickname !== null && nickname !== void 0 ? nickname : undefined
            };
        }
        return unknown;
    } catch (error) {
        console.error(error);
    }
    return unknown;
}
function getUserID(x) {
    if (!x) return null;
    const relative = !x.startsWith('https://') && !x.startsWith('http://');
    const url = relative ? new URL(x, location.host) : new URL(x);
    if (url.hostname !== 'www.facebook.com' && url.hostname !== 'm.facebook.com') return null;
    // Get the userId from the meta element
    if (url.hostname === 'm.facebook.com') {
        const node = searchUserIdOnMobileSelector().evaluate();
        if (!node) return null;
        const href = node.getAttribute('href');
        if (!href) return null;
        const match = href.match(/lst=(\w+)/);
        if (!match) return null;
        return match[1];
    }
    if (url.pathname.endsWith('.php')) {
        if (!url.search) return null;
        const search = new URLSearchParams(url.search);
        return search.get('id');
    }
    const val = url.pathname.replace(/^\//, '').replace(/\/$/, '').split('/')[0];
    if (val === 'me') return null;
    return val;
}

// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var src_utils = __webpack_require__(13573);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(21202);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/user.ts





const getNickName = ()=>{
    const node = isMobile/* isMobileFacebook */.q ? searchNickNameSelectorOnMobile().evaluate() : searchNickNameSelector().evaluate();
    if (!node) return '';
    return (0,src_utils/* collectNodeText */.aW)(node);
};
const getAvatar = ()=>{
    var ref;
    const node = isMobile/* isMobileFacebook */.q ? searchFacebookAvatarOnMobileSelector().evaluate() : searchAvatarSelector().evaluate();
    if (!node) return;
    var ref1;
    const imageURL = (ref1 = isMobile/* isMobileFacebook */.q ? (ref = node.style.background.match(/\(["']?(.*?)["']?\)/)) === null || ref === void 0 ? void 0 : ref[1] : node.getAttribute('xlink:href')) !== null && ref1 !== void 0 ? ref1 : '';
    return imageURL.trim();
};
const getBioDescription = ()=>{
    const intro = searchIntroSectionSelector().evaluate();
    const node = isMobile/* isMobileFacebook */.q ? bioDescriptionSelectorOnMobile().evaluate() : searchBioSelector().evaluate();
    if (intro && node) {
        const text = (0,src_utils/* collectNodeText */.aW)(node);
        settings/* bioDescription */.JE[base/* FACEBOOK_ID */.Iz].value = text;
    } else if (intro) {
        settings/* bioDescription */.JE[base/* FACEBOOK_ID */.Iz].value = '';
    }
    return settings/* bioDescription */.JE[base/* FACEBOOK_ID */.Iz].value;
};
const getFacebookId = ()=>{
    const node = isMobile/* isMobileFacebook */.q ? searchUserIdSelectorOnMobile().evaluate() : searchUserIdSelector().evaluate();
    if (!node) return '';
    const url = new URL(node.href);
    if (url.pathname === '/profile.php') return url.searchParams.get(isMobile/* isMobileFacebook */.q ? 'lst' : 'id');
    return url.pathname.replaceAll('/', '');
};
const FACEBOOK_AVATAR_ID_MATCH = /(\w+).(?:png|jpg|gif|bmp)/;
const getAvatarId = (avatarURL)=>{
    if (!avatarURL) return '';
    const _url = new URL(avatarURL);
    const match = _url.pathname.match(FACEBOOK_AVATAR_ID_MATCH);
    if (!match) return '';
    return match[1];
};
const getPersonalHomepage = ()=>{
    const intro = searchIntroSectionSelector().evaluate();
    const node = searchHomepageSelector().evaluate();
    if (intro && node) {
        let text = (0,src_utils/* collectNodeText */.aW)(node);
        if (text && !text.startsWith('http')) {
            text = 'http://' + text;
        }
        settings/* personalHomepage */.yO[base/* FACEBOOK_ID */.Iz].value = text;
    } else if (intro) {
        settings/* personalHomepage */.yO[base/* FACEBOOK_ID */.Iz].value = '';
    }
    return settings/* personalHomepage */.yO[base/* FACEBOOK_ID */.Iz].value;
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/collecting/identity.ts








const IdentityProviderFacebook = {
    hasDeprecatedPlaceholderName: true,
    recognized: social_network/* creator.EmptyIdentityResolveProviderState */.Du.EmptyIdentityResolveProviderState(),
    start (signal) {
        resolveLastRecognizedIdentityFacebookInner(this.recognized, signal);
    }
};
function resolveLastRecognizedIdentityFacebookInner(ref, signal) {
    const self = (isMobile/* isMobileFacebook */.q ? myUsernameLiveSelectorMobile : myUsernameLiveSelectorPC).clone().map((x)=>getProfileIdentifierAtFacebook(x, false)
    );
    const watcher = new umd.MutationObserverWatcher(self).setComparer(undefined, (a, b)=>a.identifier.equals(b.identifier)
    ).addListener('onAdd', (e)=>assign(e.value)
    ).addListener('onChange', (e)=>assign(e.newValue)
    ).startWatch({
        childList: true,
        subtree: true,
        characterData: true
    });
    signal.addEventListener('abort', ()=>watcher.stopWatch()
    );
    function assign(i) {
        if (!i.identifier.isUnknown) ref.value = i;
    }
    fetch('/me', {
        method: 'HEAD',
        signal
    }).then((x)=>x.url
    ).then(getUserID).then((id)=>id && assign({
            ...ref.value,
            identifier: new src/* ProfileIdentifier */.WO('facebook.com', id)
        })
    );
}
function resolveCurrentVisitingIdentityInner(ref, cancel) {
    const selector1 = isMobile/* isMobileFacebook */.q ? searchUserIdOnMobileSelector() : searchAvatarSelector();
    const assign = async ()=>{
        await (0,esm/* delay */.gw)(500);
        const nickname = getNickName();
        const bio = getBioDescription();
        const handle = getFacebookId();
        const homepage = getPersonalHomepage();
        const avatar = getAvatar();
        ref.value = {
            identifier: handle ? new src/* ProfileIdentifier */.WO('facebook.com', handle) : src/* ProfileIdentifier.unknown */.WO.unknown,
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
            attributes: true
        });
        window.addEventListener('locationchange', assign);
        cancel.addEventListener('abort', ()=>{
            window.removeEventListener('locationchange', assign);
            watcher.stopWatch();
        });
    };
    assign();
    createWatcher(selector1);
}
const CurrentVisitingIdentityProviderFacebook = {
    hasDeprecatedPlaceholderName: false,
    recognized: social_network/* creator.EmptyIdentityResolveProviderState */.Du.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveCurrentVisitingIdentityInner(this.recognized, cancel);
    }
};
// #region LS
// Try to resolve my identities
const myUsernameLiveSelectorPC = new umd.LiveSelector().querySelectorAll('[data-pagelet="LeftRail"] > [data-visualcompletion="ignore-dynamic"]:first-child > div:first-child > ul [role="link"]').filter((x)=>x.innerText
);
const myUsernameLiveSelectorMobile = new umd.LiveSelector().querySelector('#bookmarks_flyout .mSideMenu > div > ul > li:first-child a, #MComposer a');

// EXTERNAL MODULE: ./src/social-network/defaults/state/InitFriends.ts
var InitFriends = __webpack_require__(50814);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(49165);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 15 modules
var Composition = __webpack_require__(71244);
// EXTERNAL MODULE: ./src/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(91968);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(84749);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var theme_src = __webpack_require__(92597);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/Composition.tsx











let composeBox;
const useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        tooltip: {
            borderRadius: 8,
            padding: 8,
            marginBottom: '0 !important',
            fontSize: 12,
            background: 'rgba(0,0,0,.75)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.5)',
            color: '#ddd'
        }
    })
);
function isGroup() {
    const matched = location.href.match(/\/groups/);
    if (!matched) return false;
    return matched[0];
}
if (isMobile/* isMobileFacebook */.q) {
    composeBox = new umd.LiveSelector().querySelector('#structured_composer_form');
} else {
    if (isGroup()) {
        composeBox = new umd.LiveSelector().querySelector('[id="toolbarLabel"]').closest(1).querySelector('div:nth-child(2) > div:nth-child(4)');
    } else {
        composeBox = new umd.LiveSelector().querySelectorAll('[role="dialog"] form > div:first-child > div:first-child > div:first-child > div:first-child > div:first-child > div:last-child > div:first-child  > div:last-child > div > div').at(-2);
    }
}
function injectCompositionFacebook(signal) {
    const watcher = new umd.MutationObserverWatcher(composeBox.clone());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(UI, {}));
    signal.addEventListener('abort', messages/* MaskMessages.events.requestComposition.on */.q.events.requestComposition.on((data)=>{
        if (data.reason === 'popup') return;
        if (data.open === false) return;
        taskOpenComposeBoxFacebook(data.content || '', data.options);
    }));
}
function UI() {
    const { classes  } = useStyles();
    const onHintButtonClicked = (0,react.useCallback)(()=>messages/* MaskMessages.events.requestComposition.sendToLocal */.q.events.requestComposition.sendToLocal({
            reason: 'popup',
            open: true
        })
    , []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        style: {
            display: 'block',
            padding: 0,
            marginTop: 0
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
                size: 24,
                classes: {
                    tooltip: classes.tooltip
                },
                onHintButtonClicked: onHintButtonClicked,
                tooltip: {
                    disabled: false,
                    placement: 'top'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
                type: "popup"
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/components/shared/NotSetupYetPrompt.tsx + 1 modules
var NotSetupYetPrompt = __webpack_require__(37674);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/SetupPrompt.tsx






let SetupPrompt_composeBox;
if (isMobile/* isMobileFacebook */.q) {
    SetupPrompt_composeBox = new umd.LiveSelector().querySelector('#structured_composer_form');
} else {
    SetupPrompt_composeBox = new umd.LiveSelector().querySelector('[role="dialog"] form').querySelectorAll('[role="button"][tabindex="0"], [role="button"][tabindex="-1"]').map((x)=>x.parentElement
    ).at(-1);
}
function injectSetupPromptFacebook(signal) {
    const watcher = new umd.MutationObserverWatcher(SetupPrompt_composeBox.clone());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        style: {
            display: 'block',
            padding: '0 16px',
            marginTop: 0
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NotSetupYetPrompt/* NotSetupYetPrompt */.N, {})
    }));
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/Comments.tsx + 1 modules
var Comments = __webpack_require__(84334);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils_utils = __webpack_require__(79304);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/automation/pasteToCommentBoxFacebook.ts





async function pasteToCommentBoxFacebook(encryptedComment, current, dom) {
    const fail = ()=>{
        messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
            text: encryptedComment
        });
    };
    if (isMobile/* isMobileFacebook */.q) {
        var ref, ref1;
        const root = dom || ((ref = current.comment) === null || ref === void 0 ? void 0 : (ref1 = ref.commentBoxSelector) === null || ref1 === void 0 ? void 0 : ref1.evaluate()[0]);
        if (!root) return fail();
        const textarea = root.querySelector('textarea');
        if (!textarea) return fail();
        textarea.focus();
        (0,sdk/* inputText */.iJ)(encryptedComment);
        textarea.dispatchEvent(new CustomEvent('input', {
            bubbles: true,
            cancelable: false,
            composed: true
        }));
        await (0,esm/* delay */.gw)(200);
        if (!root.innerText.includes(encryptedComment)) return fail();
    } else {
        const root = dom || current.rootNode;
        if (!root) return fail();
        const input = root.querySelector('[contenteditable] > *');
        if (!input) return fail();
        (0,utils_utils/* selectElementContents */.Ms)(input);
        input.focus();
        (0,sdk/* pasteText */.M1)(encryptedComment);
        await (0,esm/* delay */.gw)(200);
        if (!root.innerText.includes(encryptedComment)) return fail();
    }
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/CommentBox.tsx + 1 modules
var CommentBox = __webpack_require__(86330);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostInspector.tsx + 16 modules
var PostInspector = __webpack_require__(13360);
// EXTERNAL MODULE: ./shared/index.ts
var shared_0 = __webpack_require__(70609);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/PostInspector.tsx



const map = new WeakMap();
function getShadowRoot(node) {
    if (map.has(node)) return map.get(node);
    const dom = node.attachShadow({
        mode: shared_0/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
    });
    map.set(node, dom);
    return dom;
}
function injectPostInspectorFacebook(signal, current) {
    var ref;
    clickSeeMore((ref = current.rootElement.current) === null || ref === void 0 ? void 0 : ref.parentElement);
    return (0,PostInspector/* injectPostInspectorDefault */.J)({
        zipPost (node) {
            zipEncryptedPostContent(node);
            zipPostLinkPreview(node);
        },
        injectionPoint: (post)=>getShadowRoot(post.suggestedInjectionPoint)
    })(current, signal);
}
function zipPostLinkPreview(node) {
    const parentEle = node.current.parentElement;
    if (!parentEle) return;
    if (isMobile/* isMobileFacebook */.q) {
        var ref, ref1;
        const img = (ref1 = (ref = parentEle.querySelector('a[href*="maskbook.io"]')) !== null && ref !== void 0 ? ref : parentEle.querySelector('a[href*="mask.io"]')) !== null && ref1 !== void 0 ? ref1 : parentEle.querySelector('a[href*="maskbook.com"]');
        const parent = img === null || img === void 0 ? void 0 : img.closest('section');
        if (img && parent) {
            parent.style.display = 'none';
        }
    } else {
        var ref2, ref3;
        const img = (ref3 = (ref2 = parentEle.querySelector('a[href*="maskbook.io"] img')) !== null && ref2 !== void 0 ? ref2 : parentEle.querySelector('a[href*="mask.io"] img')) !== null && ref3 !== void 0 ? ref3 : parentEle.querySelector('a[href*="maskbook.com"] img');
        const parent = img === null || img === void 0 ? void 0 : img.closest('span');
        if (img && parent) {
            parent.style.display = 'none';
        }
    }
}
function zipEncryptedPostContent(node) {
    const parent = node.current.parentElement;
    // It's image based encryption, skip zip post.
    if (!node.current.innerText.includes('\u{1F3BC}')) return;
    // Style modification for repost
    if (!node.current.className.includes('userContent') && node.current.innerText.length > 0) {
        node.after.setAttribute('style', `border: 1px solid #ebedf0;
display: block;
border-top: none;
border-bottom: none;
margin-bottom: 0px;
padding: 0px 10px;`);
    }
    if (parent) {
        // post content
        const p = parent.querySelector('p');
        if (p) {
            p.style.display = 'block';
            p.style.maxHeight = '20px';
            p.style.overflow = 'hidden';
            p.style.marginBottom = '0';
        }
    }
}
function clickSeeMore(node) {
    if (!node) return;
    const more = node.querySelector(isMobile/* isMobileFacebook */.q ? '[data-sigil="more"] a' : '[role=article] span[dir="auto"] div[dir="auto"] [role="button"]');
    if (more && node.querySelector('img[alt="\u{1F3BC}"]')) {
        const trap = (e)=>{
            e.preventDefault();
        };
        more.parentNode.addEventListener('click', trap);
        more.click();
        setTimeout(()=>{
            if (more.parentNode) more.parentNode.removeEventListener('click', trap);
        }, 0);
    }
}

// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(13591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var ts_results_esm = __webpack_require__(79594);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/collecting/posts.tsx












const posts = new umd.LiveSelector().querySelectorAll(isMobile/* isMobileFacebook */.q ? '.story_body_container > div' : '[role=article] [data-ad-preview="message"]');
const PostProviderFacebook = {
    posts: utils/* creator.EmptyPostProviderState */.Du.EmptyPostProviderState(),
    start (signal) {
        collectPostsFacebookInner(this.posts, signal);
    }
};
function collectPostsFacebookInner(store, signal) {
    (0,utils_watcher/* startWatch */.f)(new umd.MutationObserverWatcher(posts).useForeach((node, key, metadata)=>{
        clickSeeMore(node);
    }), signal);
    (0,utils_watcher/* startWatch */.f)(new umd.MutationObserverWatcher(posts).useForeach((node1, key, metadata)=>{
        const root = new umd.LiveSelector().replace(()=>[
                metadata.realCurrent
            ]
        ).closest('[role=article]').map((x)=>{
            var ref, ref1;
            return (ref = x.parentElement) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : ref1.parentElement;
        });
        const rootProxy = (0,umd.DOMProxy)({
            afterShadowRootInit: {
                mode: shared_0/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
            },
            beforeShadowRootInit: {
                mode: shared_0/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
            }
        });
        rootProxy.realCurrent = root.evaluate()[0];
        // ? inject after comments
        const commentSelectorPC = root.clone().querySelectorAll('[role=article] [aria-label] span[dir="auto"]').closest(3);
        const commentSelectorMobile = root.clone().map((x)=>x.parentElement
        ).querySelectorAll('[data-commentid]');
        const commentsSelector = isMobile/* isMobileFacebook */.q ? commentSelectorMobile : commentSelectorPC;
        // ? inject comment text field
        const commentBoxSelectorPC = root.clone().querySelectorAll('[role="article"] [role="presentation"]:not(img)').map((x)=>x.parentElement
        );
        const commentBoxSelectorMobile = root.clone().map((x)=>x.parentElement
        ).querySelectorAll('textarea').map((x)=>x.parentElement
        ).filter((x)=>x.innerHTML.includes('comment')
        );
        const commentBoxSelector = isMobile/* isMobileFacebook */.q ? commentBoxSelectorMobile : commentBoxSelectorPC;
        const { subscriptions , ...info } = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = shared/* facebookShared.utils.createPostContext */.T.utils.createPostContext({
            rootElement: rootProxy,
            suggestedInjectionPoint: metadata.realCurrent,
            signal,
            comments: {
                commentBoxSelector,
                commentsSelector
            },
            ...subscriptions
        });
        store.set(metadata, postInfo);
        function collectPostInfo() {
            rootProxy.realCurrent = root.evaluate()[0];
            const nextTypedMessage = [];
            info.postBy.value = getPostBy(metadata, postInfo.containingMaskPayload.getCurrentValue() !== null).identifier;
            info.postID.value = getPostID(metadata, rootProxy.realCurrent);
            // parse text
            const text = (0,src_utils/* collectNodeText */.aW)(node1, {
                onHTMLAnchorElement (node) {
                    const href = node.getAttribute('href');
                    if (!href) {
                        return ts_results_esm/* None */.Hq;
                    }
                    return (0,ts_results_esm/* Some */.bD)('\n' + (href.includes('l.facebook.com') ? new URL(href).searchParams.get('u') : node.innerText));
                }
            });
            nextTypedMessage.push((0,typed_message_base/* makeTypedMessageText */.P)(text));
            // parse image
            const images = getMetadataImages(metadata);
            for (const url of images){
                info.postMetadataImages.add(url);
                nextTypedMessage.push((0,typed_message_base/* makeTypedMessageImage */.as)(url));
            }
            // parse post content
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
function getPostBy(node, allowCollectInfo) {
    var ref;
    const dom = isMobile/* isMobileFacebook */.q ? node.current.querySelectorAll('a') : [
        ((ref = node.current.closest('[role="article"]')) !== null && ref !== void 0 ? ref : node.current.parentElement).querySelectorAll('a')[1]
    ];
    // side effect: save to service
    return getProfileIdentifierAtFacebook(Array.from(dom), allowCollectInfo);
}
function getPostID(node, root) {
    if (isMobile/* isMobileFacebook */.q) {
        const abbr = node.current.querySelector('abbr');
        if (!abbr) return null;
        const idElement = abbr.closest('a');
        if (!idElement) return null;
        const id = new URL(idElement.href);
        return id.searchParams.get('id') || '';
    } else {
        // In single url
        if (location.href.match(/plugins.+(perma.+story_fbid%3D|posts%2F)?/)) {
            const url = new URL(location.href);
            return url.searchParams.get('id');
        } else {
            try {
                var ref, ref2, ref3, ref4;
                // In timeline
                const postTimeNode1 = root.querySelector('[href*="permalink"]');
                var ref5;
                const postIdMode1 = postTimeNode1 ? (ref5 = (ref2 = (ref = postTimeNode1.getAttribute('href')) === null || ref === void 0 ? void 0 : ref.match(/story_fbid=(\d+)/g)) === null || ref2 === void 0 ? void 0 : ref2[0].split('=')[1]) !== null && ref5 !== void 0 ? ref5 : null : null;
                if (postIdMode1) return postIdMode1;
                const postTimeNode2 = root.querySelector('[href*="posts"]');
                var ref6;
                const postIdMode2 = postTimeNode2 ? (ref6 = (ref4 = (ref3 = postTimeNode2.getAttribute('href')) === null || ref3 === void 0 ? void 0 : ref3.match(/posts\/(\d+)/g)) === null || ref4 === void 0 ? void 0 : ref4[0].split('/')[1]) !== null && ref6 !== void 0 ? ref6 : null : null;
                if (postIdMode2 && /^-?\d+$/.test(postIdMode2)) return postIdMode2;
            } catch  {
                return null;
            }
            const parent = node.current.parentElement;
            if (!parent) return null;
            const idNode = Array.from(parent.querySelectorAll('[id]')).map((x)=>x.id.split(';')
            ).filter((x)=>x.length > 1
            );
            if (!idNode.length) return null;
            return idNode[0][2];
        }
    }
}
function getMetadataImages(node2) {
    var ref;
    const parent = (ref = node2.current.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement;
    if (!parent) return [];
    const imgNodes = isMobile/* isMobileFacebook */.q ? parent.querySelectorAll('div>div>div>a>div>div>i.img') : parent.querySelectorAll('img') || [];
    if (!imgNodes.length) return [];
    const imgUrls = isMobile/* isMobileFacebook */.q ? (getComputedStyle(imgNodes[0]).backgroundImage || '').slice(4, -1).replace(/["']/g, '').split(',').filter(Boolean) : Array.from(imgNodes).map((node)=>node.src
    ).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
}

// EXTERNAL MODULE: ./src/social-network/defaults/automation/AttachImageToComposition.ts
var AttachImageToComposition = __webpack_require__(66991);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PageInspector.tsx + 3 modules
var PageInspector = __webpack_require__(89887);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx + 7 modules
var StartSetupGuide = __webpack_require__(72048);
// EXTERNAL MODULE: ../encryption/src/index.ts + 22 modules
var encryption_src = __webpack_require__(96663);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(58727);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(11062);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/customization/custom.ts







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
const PaletteModeProviderFacebook = {
    current: (0,src/* SubscriptionFromValueRef */.Jf)(currentTheme),
    start: startWatchThemeColor
};
function startWatchThemeColor(signal) {
    function updateThemeColor(isDarkMode) {
        const contrastColor = 'rgb(255,255,255)';
        const backgroundColor = isDarkMode ? 'rgb(0,0,0)' : 'rgb(255,255,255)';
        currentTheme.value = (0,theme_tools/* isDark */._T)((0,theme_tools/* fromRGB */.f2)(backgroundColor)) ? 'dark' : 'light';
        primaryColorContrastColorRef.value = contrastColor;
        backgroundColorRef.value = backgroundColor;
    }
    const htmlElement = document.querySelector('html');
    updateThemeColor(Boolean(htmlElement === null || htmlElement === void 0 ? void 0 : htmlElement.className.includes('dark-mode')));
    const observer = new MutationObserver((mutations)=>{
        mutations.forEach((mutation)=>{
            var ref;
            updateThemeColor(!((ref = mutation.oldValue) === null || ref === void 0 ? void 0 : ref.includes('dark-mode')));
        });
    });
    observer.observe(document.querySelector('html'), {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: [
            'class'
        ]
    });
    signal.addEventListener('abort', ()=>observer.disconnect()
    );
}
function useThemeFacebookVariant(baseTheme) {
    const primaryColor = (0,shared_src/* useValueRef */.E)(primaryColorRef);
    const primaryContrastColor = (0,shared_src/* useValueRef */.E)(primaryColorContrastColorRef);
    const backgroundColor = (0,shared_src/* useValueRef */.E)(backgroundColorRef);
    return (0,react.useMemo)(()=>{
        const primaryColorRGB = (0,theme_tools/* fromRGB */.f2)(primaryColor);
        const primaryContrastColorRGB = (0,theme_tools/* fromRGB */.f2)(primaryContrastColor);
        (0,immer_esm/* setAutoFreeze */.Fl)(false);
        const FacebookTheme = (0,immer_esm/* default */.ZP)(baseTheme, (theme)=>{
            theme.palette.background.paper = backgroundColor;
            theme.palette.primary = {
                light: (0,theme_tools/* toRGB */.xr)((0,theme_tools/* shade */.wj)(primaryColorRGB, 10)),
                main: (0,theme_tools/* toRGB */.xr)(primaryColorRGB),
                dark: (0,theme_tools/* toRGB */.xr)((0,theme_tools/* shade */.wj)(primaryColorRGB, -10)),
                contrastText: (0,theme_tools/* toRGB */.xr)(primaryContrastColorRGB)
            };
            theme.shape.borderRadius = 15;
            theme.breakpoints.values = {
                xs: 0,
                sm: 687,
                md: 1024,
                lg: 1280,
                xl: 1920
            };
            theme.components = theme.components || {};
            theme.components.MuiButton = {
                defaultProps: {
                    size: 'medium',
                    disableElevation: true
                },
                styleOverrides: {
                    root: {
                        borderRadius: 500,
                        textTransform: 'initial',
                        fontWeight: 'bold',
                        minHeight: 39,
                        paddingLeft: 15,
                        paddingRight: 15,
                        boxShadow: 'none',
                        [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                            '&': {
                                height: '28px !important',
                                minHeight: 'auto !important',
                                padding: '0 14px !important'
                            }
                        }
                    },
                    sizeLarge: {
                        minHeight: 49,
                        paddingLeft: 30,
                        paddingRight: 30
                    },
                    sizeSmall: {
                        minHeight: 30,
                        paddingLeft: 15,
                        paddingRight: 15
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
        });
        (0,immer_esm/* setAutoFreeze */.Fl)(true);
        return (0,createMuiStrictModeTheme/* default */.Z)(FacebookTheme);
    }, [
        baseTheme,
        backgroundColor,
        primaryColor,
        primaryContrastColor
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(8571);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(58364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(13970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(19063);
// EXTERNAL MODULE: ./src/components/InjectedComponents/ToolboxUnstyled.tsx + 1 modules
var ToolboxUnstyled = __webpack_require__(19462);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/ToolbarUI.tsx

// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated


const fbBreakPoint = 700 /** px */ ;
const Container = (0,styled/* default */.ZP)('div')`
    padding: 0 8px;
`;
const Item = (0,styled/* default */.ZP)(ListItemButton/* default */.Z)`
    border-radius: 8px;
    padding-left: 10px;
`;
const Text = (0,styled/* default */.ZP)(Typography/* default */.Z)`
    font-size: 0.9375rem;
    /* This CSS variable is inherit from Facebook. */
    color: var(--primary-text);
    font-weight: 500;
`;
const Icon = (0,styled/* default */.ZP)(ListItemIcon/* default */.Z)`
    min-width: 46px;
    @media screen and (max-height: ${fbBreakPoint}px) {
        min-width: 36px;
    }
`;
function ToolboxAtFacebook() {
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const isSmall = (0,useMediaQuery/* default */.Z)(`(max-height: ${fbBreakPoint}px)`);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxUnstyled/* ToolboxHintUnstyled */.z, {
        iconSize: isSmall ? 24 : 32,
        Container: Container,
        ListItemButton: Item,
        Typography: Text,
        ListItemIcon: Icon
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/Toolbar.tsx






function injectToolboxHintAtFacebook(signal) {
    const watcher = new umd.MutationObserverWatcher(toolBoxInSideBarSelector());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxAtFacebook, {}));
}

// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatar.tsx + 2 modules
var NFTAvatar = __webpack_require__(26176);
// EXTERNAL MODULE: ./src/plugins/Avatar/utils/index.ts
var Avatar_utils = __webpack_require__(23594);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/NFT/ProfileNFTAvatar.tsx













async function injectProfileNFTAvatarInFaceBook(signal) {
    if (!isMobile/* isMobileFacebook */.q) {
        // The first step in setting an avatar
        const watcher = new umd.MutationObserverWatcher(searchFacebookAvatarListSelector());
        (0,src_utils/* startWatch */.fy)(watcher, signal);
        (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInFacebookFirstStep, {}));
        // The second step in setting an avatar
        const saveButtonWatcher = new umd.MutationObserverWatcher(searchFacebookSaveAvatarButtonSelector()).useForeach((node, key, proxy)=>{
            const root = (0,src_utils/* createReactRootShadowed */.ou)(proxy.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInFacebookSecondStep, {}));
            return ()=>root.destory()
            ;
        });
        (0,src_utils/* startWatch */.fy)(saveButtonWatcher, signal);
    }
    const watcher = new umd.MutationObserverWatcher(searchFacebookAvatarMobileListSelector());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarListInFaceBookMobile, {}));
}
const ProfileNFTAvatar_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        padding: '8px 0',
        margin: '0 16px'
    }
});
async function changeImageToActiveElements(image) {
    var ref;
    const imageBuffer = await image.arrayBuffer();
    (0,sdk/* hookInputUploadOnce */.ed)('image/png', 'avatar.png', new Uint8Array(imageBuffer));
    (ref = searchFacebookAvatarOpenFilesSelector().evaluate()) === null || ref === void 0 ? void 0 : ref.click();
}
function NFTAvatarInFacebookFirstStep() {
    const { classes  } = ProfileNFTAvatar_useStyles();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const onChange = (0,react.useCallback)(async (token)=>{
        if (!token.info.imageURL) return;
        const image = await (0,Avatar_utils/* toPNG */.mr)(token.info.imageURL);
        if (!image) return;
        await changeImageToActiveElements(image);
        src_utils/* MaskMessages.events.NFTAvatarUpdated.sendToLocal */.ql.events.NFTAvatarUpdated.sendToLocal({
            userId: identity.identifier.userId,
            avatarId: '',
            address: token.contractDetailed.address,
            tokenId: token.tokenId
        });
    }, [
        identity
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatar/* NFTAvatar */.R, {
        onChange: onChange,
        classes: classes
    }));
}
function NFTAvatarInFacebookSecondStep() {
    (0,react.useEffect)(()=>{
        const save = searchFacebookSaveAvatarButtonSelector().evaluate().at(0);
        if (!save) return;
        const handler = ()=>{
            const image = searchFacebookConfirmAvatarImageSelector().evaluate();
            if (!image) return;
            const imageURL = image.getAttribute('src');
            if (!imageURL) return;
            const avatarId = getAvatarId(imageURL);
            if (avatarId) {
                src_utils/* MaskMessages.events.NFTAvatarUpdated.sendToLocal */.ql.events.NFTAvatarUpdated.sendToLocal({
                    userId: '',
                    address: '',
                    tokenId: '',
                    avatarId
                });
            }
        };
        save.addEventListener('click', handler);
        return ()=>save.removeEventListener('click', handler)
        ;
    }, []);
    return null;
}
async function changeImageToActiveElementsOnMobile(image) {
    const imageBuffer = await image.arrayBuffer();
    const input = searchFacebookAvatarOpenFilesOnMobileSelector().evaluate();
    if (input) {
        input.style.visibility = 'unset';
        input.focus();
        (0,sdk/* hookInputUploadOnce */.ed)('image/png', 'avatar.png', new Uint8Array(imageBuffer), true);
        input.style.visibility = 'hidden';
        const file = new File([
            image
        ], 'avatar.png', {
            type: 'image/png',
            lastModified: Date.now()
        });
        const container = new DataTransfer();
        container.items.add(file);
        input.files = container.files;
    }
}
const useMobileStyles = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        backgroundColor: '#ffffff'
    }
});
function NFTAvatarListInFaceBookMobile() {
    const { classes  } = useMobileStyles();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const onChange = (0,react.useCallback)(async (token)=>{
        if (!token.info.imageURL) return;
        const image = await (0,Avatar_utils/* toPNG */.mr)(token.info.imageURL);
        if (!image) return;
        await changeImageToActiveElementsOnMobile(image);
        shared_0/* InMemoryStorages.FacebookNFTEventOnMobile.storage.userId.setValue */.uU.FacebookNFTEventOnMobile.storage.userId.setValue(identity.identifier.userId);
        shared_0/* InMemoryStorages.FacebookNFTEventOnMobile.storage.address.setValue */.uU.FacebookNFTEventOnMobile.storage.address.setValue(token.contractDetailed.address);
        shared_0/* InMemoryStorages.FacebookNFTEventOnMobile.storage.tokenId.setValue */.uU.FacebookNFTEventOnMobile.storage.tokenId.setValue(token.tokenId);
    }, [
        identity
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatar/* NFTAvatar */.R, {
        onChange: onChange,
        classes: classes
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/max.js
var max = __webpack_require__(77218);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pickBy.js
var pickBy = __webpack_require__(74258);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(44719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(30865);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ./src/plugins/Avatar/messages.ts
var Avatar_messages = __webpack_require__(37867);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/index.ts + 2 modules
var hooks = __webpack_require__(45255);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadge.tsx + 1 modules
var NFTBadge = __webpack_require__(42509);
// EXTERNAL MODULE: ./src/plugins/Avatar/constants.ts
var constants = __webpack_require__(17692);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/NFT/NFTAvatarInFacebook.tsx

















function injectNFTAvatarInFacebook(signal) {
    const watcher = new umd.MutationObserverWatcher(searchFacebookAvatarSelector());
    if (!isMobile/* isMobileFacebook */.q) {
        (0,src_utils/* startWatch */.fy)(watcher, signal);
        (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInFacebook, {}));
        return;
    }
    // mobile
    const mobileWatcher = new umd.MutationObserverWatcher(searchFacebookAvatarOnMobileSelector());
    (0,src_utils/* startWatch */.fy)(mobileWatcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(mobileWatcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarInFacebook, {}));
}
const NFTAvatarInFacebook_useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
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
const clearStorages = ()=>{
    shared_0/* InMemoryStorages.FacebookNFTEventOnMobile.storage.userId.setValue */.uU.FacebookNFTEventOnMobile.storage.userId.setValue('');
    shared_0/* InMemoryStorages.FacebookNFTEventOnMobile.storage.address.setValue */.uU.FacebookNFTEventOnMobile.storage.address.setValue('');
    shared_0/* InMemoryStorages.FacebookNFTEventOnMobile.storage.tokenId.setValue */.uU.FacebookNFTEventOnMobile.storage.tokenId.setValue('');
};
function NFTAvatarInFacebook() {
    const { classes  } = NFTAvatarInFacebook_useStyles();
    const wallet = (0,plugin_infra_src/* useWallet */.Os)();
    const [avatar, setAvatar] = (0,react.useState)();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const location = (0,useLocation/* default */.Z)();
    const { value: _avatar1  } = (0,hooks/* useNFTAvatar */.i)(identity.identifier.userId, constants/* RSS3_KEY_SNS.FACEBOOK */.vu.FACEBOOK);
    const [NFTEvent, setNFTEvent] = (0,react.useState)();
    const windowSize = (0,useWindowSize/* default */.Z)();
    const showAvatar = (0,react.useMemo)(()=>{
        if (isMobile/* isMobileFacebook */.q) {
            const node = searchFacebookAvatarOnMobileSelector().closest(1).evaluate();
            if (node) {
                node.style.position = 'relative';
            }
        }
        var _avatar;
        return getAvatarId((_avatar = identity.avatar) !== null && _avatar !== void 0 ? _avatar : '') === (avatar === null || avatar === void 0 ? void 0 : avatar.avatarId);
    }, [
        avatar === null || avatar === void 0 ? void 0 : avatar.avatarId,
        identity.avatar,
        isMobile/* isMobileFacebook */.q
    ]);
    const size = (0,react.useMemo)(()=>{
        const ele = isMobile/* isMobileFacebook */.q ? searchFacebookAvatarOnMobileSelector().evaluate() : searchFacebookAvatarSelector().evaluate();
        if (ele) {
            const style = window.getComputedStyle(ele);
            var ref;
            return (0,max/* default */.Z)([
                148,
                Number.parseInt((ref = style.width.replace('px', '')) !== null && ref !== void 0 ? ref : 0, 10)
            ]);
        }
        return 0;
    }, [
        windowSize,
        isMobile/* isMobileFacebook */.q,
        avatar
    ]);
    (0,react.useEffect)(()=>{
        return src_utils/* MaskMessages.events.NFTAvatarUpdated.on */.ql.events.NFTAvatarUpdated.on((data)=>setNFTEvent((prev)=>{
                if (!prev) return data;
                return {
                    ...prev,
                    ...(0,pickBy/* default */.Z)(data, (item)=>!!item
                    )
                };
            })
        );
    }, []);
    // Because of the mobile upload step, need to use memory storage to store NFTEven
    (0,useAsync/* default */.Z)(async ()=>{
        const storages = shared_0/* InMemoryStorages.FacebookNFTEventOnMobile.storage */.uU.FacebookNFTEventOnMobile.storage;
        if (!wallet) return;
        if ((NFTEvent === null || NFTEvent === void 0 ? void 0 : NFTEvent.address) && (NFTEvent === null || NFTEvent === void 0 ? void 0 : NFTEvent.tokenId) && (NFTEvent === null || NFTEvent === void 0 ? void 0 : NFTEvent.avatarId)) {
            try {
                var _avatar;
                const avatarInfo = await Avatar_messages/* PluginNFTAvatarRPC.saveNFTAvatar */.B.saveNFTAvatar(wallet.address, {
                    ...NFTEvent,
                    avatarId: getAvatarId((_avatar = identity.avatar) !== null && _avatar !== void 0 ? _avatar : '')
                }, identity.identifier.network, constants/* RSS3_KEY_SNS.FACEBOOK */.vu.FACEBOOK);
                if (!avatarInfo) {
                    setNFTEvent(undefined);
                    setAvatar(undefined);
                    window.alert('Sorry, failed to save NFT Avatar. Please set again.');
                    return;
                }
                setAvatar(avatarInfo);
                setNFTEvent(undefined);
            } catch (error) {
                setNFTEvent(undefined);
                setAvatar(undefined);
                window.alert(error.message);
                return;
            }
        } else if (storages.address.value && storages.userId.value && storages.tokenId.value) {
            try {
                var _avatar2;
                const avatarInfo = await Avatar_messages/* PluginNFTAvatarRPC.saveNFTAvatar */.B.saveNFTAvatar(wallet.address, {
                    userId: storages.userId.value,
                    tokenId: storages.tokenId.value,
                    address: storages.address.value,
                    avatarId: getAvatarId((_avatar2 = identity.avatar) !== null && _avatar2 !== void 0 ? _avatar2 : '')
                }, identity.identifier.network, constants/* RSS3_KEY_SNS.FACEBOOK */.vu.FACEBOOK);
                if (!avatarInfo) {
                    clearStorages();
                    setAvatar(undefined);
                    window.alert('Sorry, failed to save NFT Avatar. Please set again.');
                    return;
                }
                setAvatar(avatarInfo);
                clearStorages();
            } catch (error) {
                clearStorages();
                setAvatar(undefined);
                window.alert(error.message);
                return;
            }
        }
    }, [
        identity.avatar
    ]);
    (0,react.useEffect)(()=>setAvatar(_avatar1)
    , [
        _avatar1,
        location
    ]);
    // #region clear white border
    (0,react.useLayoutEffect)(()=>{
        const node = searchFacebookAvatarSelector().closest(3).evaluate();
        if (!node) return;
        if (showAvatar) {
            node.setAttribute('style', 'padding: 0px');
        } else {
            node.removeAttribute('style');
        }
    });
    // #endregion
    if (!avatar || !size || !showAvatar) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTBadge/* NFTBadge */.A, {
        avatar: avatar,
        size: size,
        classes: {
            root: classes.root,
            text: classes.text,
            icon: classes.icon
        }
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/avatar.ts


function getInjectNodeInfo(element) {
    var ref, ref1;
    if (!isMobile/* isMobileFacebook */.q) {
        var ref2;
        const imgEle = element.querySelector('image');
        if (!imgEle) return;
        const nftDom = (ref2 = imgEle.parentNode) === null || ref2 === void 0 ? void 0 : ref2.parentNode;
        var ref3;
        const width = Number((ref3 = window.getComputedStyle(nftDom).width.replace('px', '')) !== null && ref3 !== void 0 ? ref3 : 0);
        var ref4;
        const height = Number((ref4 = window.getComputedStyle(nftDom).height.replace('px', '')) !== null && ref4 !== void 0 ? ref4 : 0);
        const avatarId = getAvatarId(imgEle.href.baseVal);
        if (!avatarId) return;
        return {
            element: nftDom,
            width,
            height,
            avatarId
        };
    }
    const imgEle = element.querySelector('i');
    if (!imgEle) return;
    const nftDom = (ref = imgEle.parentNode) === null || ref === void 0 ? void 0 : ref.parentNode;
    const containerDom = imgEle.parentNode;
    var ref5;
    const width = Number((ref5 = window.getComputedStyle(nftDom).width.replace('px', '')) !== null && ref5 !== void 0 ? ref5 : 0);
    var ref6;
    const height = Number((ref6 = window.getComputedStyle(nftDom).height.replace('px', '')) !== null && ref6 !== void 0 ? ref6 : 0);
    var ref7;
    const avatarId = getAvatarId((ref7 = (ref1 = imgEle.style.background.match(/\(["']?(.*?)["']?\)/)) === null || ref1 === void 0 ? void 0 : ref1[1]) !== null && ref7 !== void 0 ? ref7 : '');
    if (!avatarId) return;
    return {
        element: containerDom,
        width,
        height,
        avatarId
    };
}

// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadgeTimeline.tsx
var NFTBadgeTimeline = __webpack_require__(21663);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/NFT/NFTAvatarInTimeline.tsx











const NFTAvatarInTimeline_useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        root: {
            transform: 'scale(1)!important'
        }
    })
);
const TimelineRainbow = /*#__PURE__*/ (0,react.memo)(({ userId , avatarId , width , height  })=>{
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
            snsKey: constants/* RSS3_KEY_SNS.FACEBOOK */.vu.FACEBOOK
        })
    }));
});
function NFTAvatarInTimeline_getFacebookId(element) {
    var ref;
    const node = isMobile/* isMobileFacebook */.q ? element.firstChild : (ref = element.parentNode) === null || ref === void 0 ? void 0 : ref.parentNode;
    if (!node) return '';
    const url = new URL(node.href);
    if (url.pathname === '/profile.php' && url.searchParams.get('id')) {
        return url.searchParams.get(isMobile/* isMobileFacebook */.q ? 'lst' : 'id');
    }
    if (url.pathname.includes('/groups')) {
        const match = url.pathname.match(/\/user\/(\w+)\//);
        if (!match) return '';
        return match[1];
    }
    return url.pathname.replace('/', '');
}
function _(selector, signal) {
    (0,src_utils/* startWatch */.fy)(new umd.MutationObserverWatcher(selector()).useForeach((element, key)=>{
        let remove = ()=>{};
        const run = async ()=>{
            const facebookId = NFTAvatarInTimeline_getFacebookId(element);
            if (!facebookId) return;
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
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TimelineRainbow, {
                    userId: facebookId,
                    avatarId: info.avatarId,
                    width: info.width - 4,
                    height: info.height - 4
                })
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
async function injectUserNFTAvatarAtFacebook(signal) {
    _(isMobile/* isMobileFacebook */.q ? searchFaceBookPostAvatarOnMobileSelector : searchFaceBookPostAvatarSelector, signal);
}

// EXTERNAL MODULE: ./src/utils/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(75995);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarButton.tsx + 1 modules
var NFTAvatarButton = __webpack_require__(81179);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/NFT/NFTAvatarEditProfile.tsx








function injectOpenNFTAvatarEditProfileButton(signal) {
    const watcher = new umd.MutationObserverWatcher(searchFacebookProfileSettingButtonSelector());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(OpenNFTAvatarEditProfileButtonInFaceBook, {}));
}
const NFTAvatarEditProfile_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        root: {
            minHeight: props.minHeight,
            fontSize: props.fontSize,
            marginTop: props.marginTop,
            backgroundColor: '#fff!important',
            marginRight: theme.spacing(0.5),
            marginLeft: theme.spacing(1.25),
            borderRadius: '6px !important',
            border: 'none !important',
            color: '#050505!important'
        }
    })
);
function OpenNFTAvatarEditProfileButtonInFaceBook() {
    const [style, setStyle] = (0,react.useState)({
        minHeight: 36,
        fontSize: 15,
        marginTop: 6
    });
    const onClick = ()=>{
        const editDom = searchFacebookEditProfileSelector().evaluate();
        editDom === null || editDom === void 0 ? void 0 : editDom.click();
    };
    const setStyleWithSelector = ()=>{
        const editDom = searchFacebookProfileSettingButtonSelector().evaluate();
        if (!editDom) return;
        const buttonDom = editDom.querySelector('a > div');
        if (!buttonDom) return;
        const editCss = window.getComputedStyle(editDom);
        const buttonCss = window.getComputedStyle(buttonDom);
        setStyle({
            fontSize: Number(editCss.fontSize.replace('px', '')),
            marginTop: Number(editCss.paddingTop.replace('px', '')),
            minHeight: 36,
            backgroundColor: buttonCss.backgroundColor
        });
    };
    (0,react.useLayoutEffect)(()=>{
        setStyleWithSelector();
    }, []);
    (0,useLocationChange/* useLocationChange */.S)(()=>{
        setStyleWithSelector();
    });
    const { classes  } = NFTAvatarEditProfile_useStyles(style);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarButton/* NFTAvatarButton */.m, {
        classes: classes,
        onClick: onClick,
        showSetting: false
    }));
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/ProfileTab.tsx
var ProfileTab = __webpack_require__(3925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/utils/debounce.js
var debounce = __webpack_require__(4045);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/ProfileTab.tsx








function getStyleProps() {
    var ref, ref1, ref2;
    const EMPTY_STYLE = {};
    const divEle = (ref = profileTabUnselectedSelector().evaluate()) === null || ref === void 0 ? void 0 : ref.querySelector('div');
    const spanEle = (ref1 = profileTabUnselectedSelector().evaluate()) === null || ref1 === void 0 ? void 0 : ref1.querySelector('div span');
    const selectedSpanEle = (ref2 = profileTabSelectedSelector().evaluate()) === null || ref2 === void 0 ? void 0 : ref2.querySelector('div span');
    const divStyle = divEle ? window.getComputedStyle(divEle) : EMPTY_STYLE;
    const spanStyle = spanEle ? window.getComputedStyle(spanEle) : EMPTY_STYLE;
    const selectedSpanStyle = selectedSpanEle ? window.getComputedStyle(selectedSpanEle) : EMPTY_STYLE;
    return {
        color: spanStyle.color,
        font: spanStyle.font,
        fontSize: spanStyle.fontSize,
        padding: divStyle.paddingLeft,
        height: divStyle.height,
        hover: 'var(--hover-overlay)',
        line: selectedSpanStyle.color
    };
}
const ProfileTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const props = getStyleProps();
    return {
        root: {
            '&:hover': {
                cursor: 'pointer'
            },
            height: props.height,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            padding: '4px 0',
            boxSizing: 'border-box'
        },
        button: {
            flex: 1,
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
            fontWeight: 600,
            '&:hover': {
                backgroundColor: props.hover,
                color: props.color
            },
            borderRadius: 6
        },
        selected: {
            color: `${props.line} !important`
        },
        line: {
            borderRadius: 9999,
            position: 'absolute',
            bottom: -4,
            width: '100%',
            alignSelf: 'center',
            height: 3,
            backgroundColor: props.line
        }
    };
});
function ProfileTabAtFacebook() {
    const { classes  } = ProfileTab_useStyles();
    const [action, setAction] = (0,react.useState)('reset');
    function styleTab(textColor, borderColor) {
        const ele = profileTabSelectedSelector().evaluate();
        if (!ele) return;
        const textEle = ele.querySelector('span');
        const borderEle = ele.querySelector('span ~ div:last-child');
        if (!textEle || !borderEle) return;
        textEle.style.color = textColor;
        borderEle.style.backgroundColor = borderColor;
        const iconEle = ele.querySelector('svg');
        if (!iconEle) return;
        iconEle.style.fill = textColor;
    }
    function clear() {
        setAction('clear');
        styleTab(getStyleProps().color, 'transparent');
    }
    function reset() {
        setAction('reset');
        styleTab('', getStyleProps().line);
    }
    // handle cleared tab will be reactivated after scroll
    (0,react.useEffect)(()=>{
        const handler = (0,debounce/* default */.Z)(()=>{
            if (action === 'clear') {
                clear();
            }
        }, 1000);
        window.addEventListener('scroll', handler);
        return ()=>{
            window.removeEventListener('scroll', handler);
        };
    }, [
        action
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTab/* ProfileTab */.D, {
        title: "Web3",
        classes: classes,
        reset: reset,
        clear: clear,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.line
        })
    }));
}
function injectProfileTabAtFacebook(signal) {
    const watcher = new umd.MutationObserverWatcher(searchProfileTabSelector());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabAtFacebook, {}));
    setTimeout(()=>{
        const web3Tab = web3TabSelector().evaluate();
        if (web3Tab) {
            web3Tab.style.float = 'left';
        }
    }, 1000);
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/ProfileTabContent.tsx + 3 modules
var ProfileTabContent = __webpack_require__(60551);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/ProfileContent.tsx






function injectProfileTabContentState(signal) {
    const watcher = new umd.MutationObserverWatcher(searchProfileTabPageSelector());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContentAtFacebook, {}));
}
function injectProfileTabContentAtFacebook(signal) {
    injectProfileTabContentState(signal);
}
function ProfileContent_getStyleProps() {
    const EMPTY_STYLE = {};
    const profileSection = profileSectionSelector().evaluate();
    const style = profileSection ? window.getComputedStyle(profileSection) : EMPTY_STYLE;
    return {
        borderRadius: style.borderRadius,
        backgroundColor: style.backgroundColor,
        fontFamily: style.fontFamily,
        boxShadow: style.boxShadow
    };
}
const ProfileContent_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const props = ProfileContent_getStyleProps();
    return {
        root: {
            position: 'relative',
            marginBottom: 16,
            paddingBottom: 16,
            background: props.backgroundColor,
            borderRadius: props.borderRadius,
            boxShadow: props.boxShadow
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
function ProfileTabContentAtFacebook() {
    const { classes  } = ProfileContent_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileTabContent/* ProfileTabContent */.d, {
        classes: classes
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(98294);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/Components/Text.tsx
var Components_Text = __webpack_require__(69973);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/customization/render-fragments.tsx




function Hash(props) {
    const text = props.children.slice(1);
    const target = `/hashtag/${encodeURIComponent(text)}`;
    const { hasMatch , ...events } = (0,Components_Text/* useTagEnhancer */.fR)('hash', text);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        ...events,
        href: target,
        children: props.children
    }));
}
const FacebookRenderFragments = {
    // AtLink: not supported
    HashLink: /*#__PURE__*/ (0,react.memo)(Hash),
    // Facebook has no native cashtag support. Treat it has a hash.
    CashLink: /*#__PURE__*/ (0,react.memo)(Hash)
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/ui-provider.ts

































const useInjectedDialogClassesOverwriteFacebook = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
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
                borderRadius: '0 !important'
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
                justifyContent: 'space-between',
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
                padding: '7px 14px 6px !important'
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
const facebookUI = {
    ...base/* facebookBase */.qv,
    ...shared/* facebookShared */.T,
    automation: {
        redirect: {
            profilePage (profile) {
                // there is no PWA way on Facebook desktop.
                // mobile not tested
                location.assign((0,parse_username/* getProfilePageUrlAtFacebook */.tg)(profile));
            },
            newsFeed () {
                const homeLink = document.querySelector([
                    '[data-click="bluebar_logo"] a[href]',
                    '#feed_jewel a[href]'
                ].join(','));
                if (homeLink) homeLink.click();
                else if (location.pathname !== '/') location.assign('/');
            }
        },
        maskCompositionDialog: {
            open: taskOpenComposeBoxFacebook
        },
        nativeCompositionDialog: {
            appendText: pasteTextToCompositionFacebook,
            // TODO: make a better way to detect
            attachImage: (0,AttachImageToComposition/* pasteImageToCompositionDefault */.f)(()=>false
            )
        },
        nativeCommentBox: {
            appendText: pasteToCommentBoxFacebook
        }
    },
    collecting: {
        identityProvider: IdentityProviderFacebook,
        currentVisitingIdentityProvider: CurrentVisitingIdentityProviderFacebook,
        postsProvider: PostProviderFacebook
    },
    customization: {
        paletteMode: PaletteModeProviderFacebook,
        componentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteFacebook
            },
            RenderFragments: FacebookRenderFragments
        },
        useTheme: useThemeFacebookVariant
    },
    init (signal) {
        const friends = utils/* stateCreator.friends */.ZZ.friends();
        const profiles = utils/* stateCreator.profiles */.ZZ.profiles();
        (0,InitFriends/* InitAutonomousStateFriends */.f)(signal, friends, shared/* facebookShared.networkIdentifier */.T.networkIdentifier);
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, shared/* facebookShared.networkIdentifier */.T.networkIdentifier);
        return {
            friends,
            profiles
        };
    },
    injection: {
        newPostComposition: {
            start: injectCompositionFacebook,
            supportedOutputTypes: {
                text: true,
                image: true
            },
            supportedInputTypes: {
                text: true,
                image: true
            }
        },
        // Not supported yet
        enhancedPostRenderer: undefined,
        userBadge: undefined,
        searchResult: undefined,
        setupPrompt: injectSetupPromptFacebook,
        commentComposition: {
            compositionBox: (0,Comments/* injectPostCommentsDefault */.M)(),
            commentInspector: (0,CommentBox/* injectCommentBoxDefaultFactory */.S)(pasteToCommentBoxFacebook, undefined, undefined, (node)=>{
                setTimeout(()=>{
                    node.after.style.flexBasis = '100%';
                    node.current.parentElement.style.flexWrap = 'wrap';
                });
            })
        },
        userAvatar: injectUserNFTAvatarAtFacebook,
        enhancedProfileNFTAvatar: injectProfileNFTAvatarInFaceBook,
        profileAvatar: injectNFTAvatarInFacebook,
        openNFTAvatar: injectOpenNFTAvatarEditProfileButton,
        postInspector: injectPostInspectorFacebook,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        setupWizard: (0,StartSetupGuide/* createTaskStartSetupGuideDefault */.Z)(),
        toolbox: injectToolboxHintAtFacebook,
        profileTab: injectProfileTabAtFacebook,
        profileTabContent: injectProfileTabContentAtFacebook
    },
    configuration: {
        steganography: {
            // ! the color image cannot compression resistance in Facebook
            grayscaleAlgorithm: encryption_src/* GrayscaleAlgorithm.LUMINANCE */.Ft.LUMINANCE,
            password () {
                // ! Change this might be a breaking change !
                return new src/* ProfileIdentifier */.WO('facebook.com', src/* ProfileIdentifier.getUserName */.WO.getUserName(IdentityProviderFacebook.recognized.value.identifier) || src/* ProfileIdentifier.getUserName */.WO.getUserName(social_network/* globalUIState.profiles.value.0.identifier */.EJ.profiles.value[0].identifier) || (0,esm/* unreachable */.t1)('Cannot figure out password')).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (facebookUI);


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


/***/ })

}]);