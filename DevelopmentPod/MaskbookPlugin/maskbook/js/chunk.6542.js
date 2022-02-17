"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6542],{

/***/ 72501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ facebookShared)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81223);
/* harmony import */ var _utils_parse_username__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18049);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87470);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76108);
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3025);





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

/***/ 16542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/utils.ts
var utils = __webpack_require__(55334);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(81223);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/shared.ts
var shared = __webpack_require__(72501);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/utils/parse-username.ts
var parse_username = __webpack_require__(18049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(86865);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 1 modules
var locales_legacy = __webpack_require__(6057);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(79918);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
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
    await (0,dom/* untilDocumentReady */.Hx)();
    await (0,src/* delay */.gw)(200);
    // active the compose dialog
    const composeTextarea = nativeComposeTextareaSelector().evaluate();
    const composeButton = nativeComposeButtonSelector().evaluate();
    if (composeTextarea) composeTextarea.focus();
    if (composeButton) composeButton.click();
    await (0,src/* delay */.gw)(200);
    // the indicator only available when compose dialog opened successfully
    const composeIndicator = nativeComposeDialogIndicatorSelector().evaluate();
    if (!composeIndicator) {
        alert(locales_legacy/* i18n.t */.a.t('automation_request_click_post_button'));
        return;
    }
    await (0,src/* delay */.gw)(2000);
    messages/* MaskMessages.events.requestComposition.sendToLocal */.q.events.requestComposition.sendToLocal({
        reason: 'popup',
        open: true,
        content: typeof content === 'string' ? (0,src/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/utils/isMobile.ts
var isMobile = __webpack_require__(35486);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(35520);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/automation/pasteTextToComposition.ts






async function openPostDialogFacebook() {
    await untilDocumentReady();
    const notActivated = isMobileFacebook ? new LiveSelector().querySelector('[role="textbox"]') : new LiveSelector().querySelector('[role="region"]').querySelector('textarea, [aria-multiline="true"]').closest(1);
    const activated = new LiveSelector().querySelector(isMobileFacebook ? 'form textarea' : '.notranslate');
    const dialog = new LiveSelector().querySelector('[role=main] [role=dialog]');
    if (notActivated.evaluate()[0]) {
        if (isMobileFacebook) {
            try {
                notActivated.evaluate()[0].click();
                await timeout(new MutationObserverWatcher(activated), 2000);
                await delay(1000);
            } catch (error) {
                clickFailed(error);
            }
        } else {
            try {
                console.log('Awaiting to click the post box');
                const [dom1] = await timeout(new MutationObserverWatcher(notActivated), 1000);
                dom1.click();
                console.log('Non-activated post box found Stage 1', dom1);
                const [dom2] = await timeout(new IntervalWatcher(notActivated.clone().filter((x)=>x !== dom1
                )), 3000);
                console.log('Non-activated post box found Stage 2', dom2);
                dom2.click();
                await timeout(new MutationObserverWatcher(activated), 1000);
                if (!dialog.evaluate()[0]) throw new Error('Click not working');
            } catch (error) {
                clickFailed(error);
            }
            console.log('Awaiting dialog');
        }
    }
    await delay(500);
    try {
        await timeout(new MutationObserverWatcher(isMobileFacebook ? activated : dialog), 2000);
        console.log('Dialog appeared');
    } catch  {
    // ignore
    }
    function clickFailed(error) {
        console.warn(error);
        if (!dialog.evaluate()[0]) alert('Click the input box, please.');
    }
}
/**
 * Access: https://(www|m).facebook.com/
 */ async function pasteTextToCompositionFacebook(text, options) {
    const { recover  } = options;
    await (0,dom/* untilDocumentReady */.Hx)();
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
        await (0,src/* delay */.gw)(100);
        if ('value' in document.activeElement) (0,sdk/* inputText */.iJ)(text);
        else (0,sdk/* pasteText */.M1)(text);
        await (0,src/* delay */.gw)(400);
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

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/social-network-adaptor/utils.ts
var social_network_adaptor_utils = __webpack_require__(6);
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
    if (url.pathname.endsWith('.php')) {
        if (!url.search) return null;
        const search = new URLSearchParams(url.search);
        return search.get('id');
    }
    const val = url.pathname.replace(/^\//, '').replace(/\/$/, '').split('/')[0];
    if (val === 'me') return null;
    return val;
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/collecting/identity.ts





const IdentityProviderFacebook = {
    hasDeprecatedPlaceholderName: true,
    recognized: utils/* creator.EmptyIdentityResolveProviderState */.Du.EmptyIdentityResolveProviderState(),
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
// #region LS
// Try to resolve my identities
const myUsernameLiveSelectorPC = new umd.LiveSelector().querySelectorAll('[data-pagelet="LeftRail"] > [data-visualcompletion="ignore-dynamic"]:first-child > div:first-child > ul [role="link"]').filter((x)=>x.innerText
);
const myUsernameLiveSelectorMobile = new umd.LiveSelector().querySelector('#bookmarks_flyout .mSideMenu > div > ul > li:first-child a, #MComposer a');

// EXTERNAL MODULE: ./src/social-network/defaults/state/InitFriends.ts
var InitFriends = __webpack_require__(96625);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(53752);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(74936);
// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 16 modules
var Composition = __webpack_require__(4684);
// EXTERNAL MODULE: ./src/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(547);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(82125);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(14767);
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
    } else composeBox = new umd.LiveSelector().querySelector('[role="dialog"] form > div:first-child > div:first-child > div:first-child > div:first-child > div:first-child > div:last-child > div:first-child').querySelectorAll('[role="button"][tabindex="0"], [role="button"][tabindex="-1"]').map((x)=>x.parentElement
    ).at(-2).map((x)=>x.parentElement
    ).map((x)=>x.parentElement
    );
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
var NotSetupYetPrompt = __webpack_require__(27731);
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
var Comments = __webpack_require__(49007);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils_utils = __webpack_require__(92610);
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
        await (0,src/* delay */.gw)(200);
        if (!root.innerText.includes(encryptedComment)) return fail();
    } else {
        const root = dom || current.rootNode;
        if (!root) return fail();
        const input = root.querySelector('[contenteditable] > *');
        if (!input) return fail();
        (0,utils_utils/* selectElementContents */.Ms)(input);
        input.focus();
        (0,sdk/* pasteText */.M1)(encryptedComment);
        await (0,src/* delay */.gw)(200);
        if (!root.innerText.includes(encryptedComment)) return fail();
    }
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/CommentBox.tsx + 1 modules
var CommentBox = __webpack_require__(13861);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostInspector.tsx + 17 modules
var PostInspector = __webpack_require__(42924);
// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared_0 = __webpack_require__(89650);
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
var create_post_context = __webpack_require__(3025);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var src_utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
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
                        return esm/* None */.Hq;
                    }
                    return (0,esm/* Some */.bD)('\n' + (href.includes('l.facebook.com') ? new URL(href).searchParams.get('u') : node.innerText));
                }
            });
            nextTypedMessage.push((0,src/* makeTypedMessageText */.P)(text));
            // parse image
            const images = getMetadataImages(metadata);
            for (const url of images){
                info.postMetadataImages.add(url);
                nextTypedMessage.push((0,src/* makeTypedMessageImage */.as)(url));
            }
            // parse post content
            info.postMessage.value = (0,src/* makeTypedMessageTuple */.Zw)(nextTypedMessage);
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
var AttachImageToComposition = __webpack_require__(54216);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PageInspector.tsx + 3 modules
var PageInspector = __webpack_require__(74730);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx
var StartSetupGuide = __webpack_require__(56630);
// EXTERNAL MODULE: ../encryption/src/index.ts + 22 modules
var encryption_src = __webpack_require__(53723);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(18702);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(57288);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var kit_esm = __webpack_require__(14381);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(29980);
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
// EXTERNAL MODULE: ./src/components/InjectedComponents/ToolboxUnstyled.tsx
var ToolboxUnstyled = __webpack_require__(63948);
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
    const watcher = new umd.MutationObserverWatcher(new umd.LiveSelector().querySelector('[data-pagelet="LeftRail"] li:nth-child(2)'));
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxAtFacebook, {}));
}

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
        postsProvider: PostProviderFacebook
    },
    customization: {
        paletteMode: PaletteModeProviderFacebook,
        componentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteFacebook
            }
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
        postInspector: injectPostInspectorFacebook,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        setupWizard: (0,StartSetupGuide/* createTaskStartSetupGuideDefault */.Z)(),
        toolbox: injectToolboxHintAtFacebook
    },
    configuration: {
        steganography: {
            // ! the color image cannot compression resistance in Facebook
            grayscaleAlgorithm: encryption_src/* GrayscaleAlgorithm.LUMINANCE */.Ft.LUMINANCE,
            password () {
                // ! Change this might be a breaking change !
                return new src/* ProfileIdentifier */.WO('facebook.com', src/* ProfileIdentifier.getUserName */.WO.getUserName(IdentityProviderFacebook.recognized.value.identifier) || src/* ProfileIdentifier.getUserName */.WO.getUserName(social_network.globalUIState.profiles.value[0].identifier) || (0,kit_esm/* unreachable */.t1)('Cannot figure out password')).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (facebookUI);


/***/ }),

/***/ 18049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mt": () => (/* binding */ isValidFacebookUsername),
/* harmony export */   "tx": () => (/* binding */ getPostUrlAtFacebook),
/* harmony export */   "tg": () => (/* binding */ getProfilePageUrlAtFacebook)
/* harmony export */ });
/* unused harmony export getFacebookHostName */
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35486);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6057);


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

/***/ 13861:
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
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(36190);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(29980);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(67908);
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
        snsId: social_network.activatedSocialNetworkUI.networkIdentifier
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
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(74936);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(66337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(86865);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(82125);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
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
            const decryptedText = (0,shared_base_src/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
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

/***/ 49007:
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
var renderInShadowRoot = __webpack_require__(74936);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(21949);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Chip/Chip.js
var Chip = __webpack_require__(57277);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/Lock.js
var Lock = __webpack_require__(13071);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(32637);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(66337);
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
        const decryptedText = (0,shared_base_src/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
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
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(82125);
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