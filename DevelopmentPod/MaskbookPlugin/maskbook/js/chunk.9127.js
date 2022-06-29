"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9127],{

/***/ 75630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ MindsAdaptor)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10126);



if (false) {}
const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const MindsAdaptor = {
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Minds */ .Jk.Minds,
    declarativePermissions: {
        origins
    },
    homepage: 'https://www.minds.com',
    getProfilePage: ()=>new URL('https://www.minds.com')
    ,
    getShareLinkURL (message) {
        const url = urlcat__WEBPACK_IMPORTED_MODULE_1___default()('https://www.minds.com/newsfeed/subscriptions', {
            intentUrl: message
        });
        return new URL(url);
    }
};
(0,_definitions__WEBPACK_IMPORTED_MODULE_2__/* .defineSiteAdaptor */ .$)(MindsAdaptor);


/***/ }),

/***/ 79127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/social-network/defaults/index.ts
var defaults = __webpack_require__(22094);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PageInspector.tsx + 3 modules
var PageInspector = __webpack_require__(78583);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx + 7 modules
var StartSetupGuide = __webpack_require__(4154);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(66909);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(95175);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(47675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/selector.ts

const querySelector = (selector, singleMode = true)=>{
    const ls = new umd.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const rootSelector = ()=>querySelector('m-app')
;
const themeListItemSelector = ()=>querySelector('.m-sidebarMore__dropdown > li:nth-child(7)')
;
const composerModalSelector = ()=>querySelector('m-composer__modal')
;
const postEditorInPopupSelector = ()=>querySelector('m-composer__modal m-composer__toolbar > div > *:nth-child(4)', true)
;
const postEditorInDialogSelector = ()=>querySelector('m-composer__modal m-composer__titlebar m-composertitlebar__dropdown', true)
;
const postEditorInTimelineSelector = ()=>querySelector('m-newsfeed m-composer', true)
;
const toolBoxInSideBarSelector = ()=>querySelector('.m-sidebarNavigation__list li:nth-child(7)')
;
const postEditorDraftContentSelector = ()=>{
    return querySelector('m-composer__modal m-composer__textarea textarea.m-composerTextarea__message');
};
const handleSelector = ()=>querySelector('.m-user-menu ul li a:first-child')
;
const selfInfoSelectors = ()=>({
        handle: handleSelector().map((x)=>x.innerText.replace(/@/, '').trim()
        ),
        avatar: querySelector('.m-user-menu .minds-avatar').map((x)=>// get everything between the parens (the url)
            x.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g, '')
        )
    })
;
const composeButtonSelector = ()=>querySelector([
        '.m-sidebarNavigation__item m-sidebarNavigation__item--compose',
        '.m-sidebarNavigation__item--compose a'
    ].join(), true)
;
const composeTextareaSelector = ()=>new umd.LiveSelector().querySelector('m-composer__textarea textarea').enableSingleMode()
;
const composeDialogIndicatorSelector = ()=>new umd.LiveSelector().querySelector('m-composer__modal')
;
const composerModalTextAreaSelector = ()=>new umd.LiveSelector().querySelector('m-composer__modal m-composer__textArea .m-composer__textArea textarea').enableSingleMode()
;
const composerPreviewSelector = ()=>new umd.LiveSelector().querySelector('m-composer__modal m-composer__preview img').enableSingleMode()
;
const searchResultHeadingSelector = ()=>querySelector('m-discovery__search')
;
const postContentSelector = ()=>new umd.LiveSelector().querySelectorAll([
        'm-activity__modal m-activity__content .m-activityContent__mediaDescriptionText',
        'm-activity__modal m-activity__content .m-activityContent__messageWrapper > span:first-child',
        'm-activity:not(.m-activity--minimalMode) m-activity__content .m-activityContent__messageWrapper > span:first-child',
        'm-activity:not(.m-activity--minimalMode) m-activity__content .m-activityContent__mediaDescriptionText', 
    ].join())
;

// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(21158);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(73742);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/postBox.ts

const getEditorContent = ()=>{
    const editorNode = postEditorDraftContentSelector().evaluate();
    if (!editorNode) return '';
    return editorNode.value;
};
const isCompose = ()=>!!composerModalSelector().evaluate()
;
const hasFocus = (x)=>x.evaluate() === document.activeElement
;
const hasEditor = ()=>!!postEditorDraftContentSelector().evaluate()
;

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/pasteTextToComposition.ts







/**
 * Wait for up to 5000 ms
 * If not complete, let user do it.
 */ const pasteTextToCompositionMinds = (text, opt)=>{
    const interval = 500;
    const timeout = 5000;
    const worker = async function(abort) {
        const checkSignal = ()=>{
            if (abort.aborted) throw new Error('Aborted');
        };
        if (!isCompose() && !hasEditor()) {
            // open the composer
            await (0,dom/* untilElementAvailable */.f)(composeButtonSelector());
            composeButtonSelector().evaluate().click();
            checkSignal();
        }
        // get focus
        const i = postEditorDraftContentSelector();
        const textarea = i.evaluate();
        await (0,dom/* untilElementAvailable */.f)(i);
        checkSignal();
        while(!hasFocus(i)){
            textarea?.focus();
            checkSignal();
            await (0,esm/* delay */.gw)(interval);
        }
        (0,utils/* selectElementContents */.Ms)(textarea);
        // paste
        (0,sdk/* inputText */.iJ)(text);
        await (0,esm/* delay */.gw)(interval);
        if (!getEditorContent().replace(/\n/g, '').includes(text.replace(/\n/g, ''))) {
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

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/AttachImageToComposition.ts




const hasSucceed = ()=>composerPreviewSelector().evaluate()
;
function pasteImageToCompositionMinds() {
    return async function(url, { recover , relatedTextPayload  }) {
        const image = typeof url === 'string' ? await (0,utils/* downloadUrl */.GR)(url) : url;
        const data = [
            new ClipboardItem({
                [image.type]: image
            })
        ];
        pasteTextToCompositionMinds(relatedTextPayload || '', {
            recover: false
        });
        await navigator.clipboard.write(data);
        composerModalTextAreaSelector().evaluate()?.focus();
        document.execCommand('paste');
        if (hasSucceed()) {
            // clear clipboard
            return navigator.clipboard.writeText('');
        } else if (recover) {
            messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
                text: relatedTextPayload || '',
                image
            });
        }
    };
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/gotoNewsFeedPage.ts
function gotoNewsFeedPageMinds() {
    const path = '/newsfeed/subscriptions';
    if (location.pathname.includes(path)) return;
    location.assign(path);
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/gotoProfilePage.ts
function gotoProfilePageMinds(profile) {
    const path = `/${profile.userId}`;
    document.querySelector(`[href="${path}"]`)?.click();
    setTimeout(()=>{
        // The classic way
        if (!location.pathname.startsWith(path)) location.assign(path);
    }, 400);
}

// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts
var locales_legacy = __webpack_require__(88278);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/openComposeBox.ts





async function openComposeBoxMinds(content, options) {
    await (0,esm/* waitDocumentReadyState */.uL)('interactive');
    await (0,esm/* delay */.gw)(800);
    // active the compose dialog
    const composeTextarea = composeTextareaSelector().evaluate();
    const composeButton = composeButtonSelector().evaluate();
    if (composeButton) composeButton.click();
    if (composeTextarea) composeTextarea.focus();
    await (0,esm/* delay */.gw)(800);
    // the indicator only available when compose dialog opened successfully
    const composeIndicator = composeDialogIndicatorSelector().evaluate();
    if (!composeIndicator) {
        alert(locales_legacy/* i18n.t */.a.t('automation_request_click_post_button'));
        return;
    }
    await (0,esm/* delay */.gw)(800);
    src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
        reason: 'popup',
        open: true,
        content: typeof content === 'string' ? (0,base/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var minds_com_base = __webpack_require__(8721);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/collecting/getSearchedKeyword.ts
function getSearchedKeywordAtMinds() {
    const params = new URLSearchParams(location.search);
    if (location.pathname === '/discovery/search') {
        return decodeURIComponent(params.get('q') ?? '');
    }
    return '';
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/collecting/identity.ts






async function resolveLastRecognizedIdentityInner(ref, cancel) {
    await (0,esm/* waitDocumentReadyState */.uL)('interactive');
    await (0,dom/* untilElementAvailable */.f)(handleSelector());
    const handle = selfInfoSelectors().handle.evaluate();
    const avatar = selfInfoSelectors().avatar.evaluate();
    if (handle) {
        // get handle and avatar from the user menu
        ref.value = {
            identifier: src/* ProfileIdentifier.of */.WO.of(minds_com_base/* mindsBase.networkIdentifier */.N.networkIdentifier, handle).unwrapOr(undefined),
            nickname: undefined,
            avatar
        };
        // call the API to get the nickname
        fetch('/api/v1/channel/' + handle, {
            signal: cancel
        }).then((res)=>res.json()
        ).then(({ channel  })=>{
            ref.value = {
                identifier: src/* ProfileIdentifier.of */.WO.of(minds_com_base/* mindsBase.networkIdentifier */.N.networkIdentifier, channel.username).unwrapOr(undefined),
                nickname: channel.name,
                avatar: channel.avatar_url?.medium
            };
        });
    }
}
const IdentityProviderMinds = {
    hasDeprecatedPlaceholderName: false,
    recognized: social_network/* creator.EmptyIdentityResolveProviderState */.Du.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveLastRecognizedIdentityInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./src/social-network/utils.ts
var social_network_utils = __webpack_require__(25513);
// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(70802);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(93995);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
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

// EXTERNAL MODULE: ./shared/site-adaptors/implementations/minds.com.ts
var minds_com = __webpack_require__(75630);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/shared.ts






const getPostURL = (post)=>{
    return new URL(`https://minds.com/newsfeed/${post.postId}`);
};
const mindsShared = {
    ...minds_com_base/* mindsBase */.N,
    utils: {
        isValidUsername: usernameValidator,
        getPostURL,
        share (message) {
            (0,shared_base_ui_src/* openWindow */.xw)(minds_com/* MindsAdaptor.getShareLinkURL */.x.getShareLinkURL?.(message));
        },
        createPostContext: (0,create_post_context/* createSNSAdaptorSpecializedPostContext */.k)({
            hasPayloadLike: src_utils/* hasPayloadLike */.sC,
            getURLFromPostIdentifier: getPostURL
        })
    }
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flattenDeep.js
var flattenDeep = __webpack_require__(65648);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/fetch.ts



const parseNameArea = (nameArea)=>{
    const displayNameNode = nameArea.querySelector('strong');
    return {
        name: displayNameNode && (0,esm/* assertNonNull */.Cq)(displayNameNode) ? displayNameNode.innerText : nameArea.innerText,
        handle: nameArea.href.slice(8).split('/')[1]
    };
};
const postIdParser = (node)=>{
    const idNode = node.querySelector('.m-activityOwnerBlock__permalink');
    return idNode ? idNode.getAttribute('href')?.split('/')[2] ?? undefined : undefined;
};
const postNameParser = (node)=>{
    return parseNameArea((0,esm/* assertNonNull */.Cq)(node.querySelector('.m-activityOwnerBlock__displayName')));
};
const postAvatarParser = (node)=>{
    const avatarElement = node.querySelector('.m-activityOwnerBlock__avatar img');
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
            if (!node.nodeValue) return (0,base/* makeTypedMessageEmpty */.WM)();
            return (0,base/* makeTypedMessageText */.P)(node.nodeValue);
        } else if (node instanceof HTMLAnchorElement && !node.className.includes('m-activityContentMedia__link')) {
            const anchor = node;
            const href = anchor.getAttribute('title') ?? anchor.getAttribute('href');
            const content = anchor.textContent;
            if (!content) return (0,base/* makeTypedMessageEmpty */.WM)();
            return (0,base/* makeTypedMessageAnchor */.Jv)(resolve(content), href ?? '', content);
        } else if (node instanceof HTMLImageElement) {
            const image = node;
            const src = image.getAttribute('src');
            const matched = src?.match(/emoji\/v2\/svg\/([\w\-]+)\.svg/);
            if (!matched) return (0,base/* makeTypedMessageEmpty */.WM)();
            const points = matched[1].split('-').map((point)=>Number.parseInt(point, 16)
            );
            return (0,base/* makeTypedMessageText */.P)(String.fromCodePoint(...points));
        } else if (node.childNodes.length) {
            const flattened = (0,flattenDeep/* default */.Z)(Array.from(node.childNodes).map(make));
            // conjunct text messages under same node
            if (flattened.every(base/* isTypedMessageText */.Rz)) return (0,base/* makeTypedMessageText */.P)(flattened.map((x)=>x.content
            ).join(''));
            return flattened;
        } else return (0,base/* makeTypedMessageEmpty */.WM)();
    }
    const content1 = node1.querySelector('m-activity__content');
    return content1 ? Array.from(content1.childNodes).flatMap(make) : [];
};
const postParser = (node)=>{
    return {
        ...postNameParser(node),
        avatar: postAvatarParser(node),
        pid: postIdParser(node),
        messages: postContentMessageParser(node).filter((x)=>!(0,base/* isTypedMessageEmpty */.YN)(x)
        )
    };
};

// EXTERNAL MODULE: ./src/social-network-adaptor/utils.ts
var social_network_adaptor_utils = __webpack_require__(1250);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/collecting/post.ts













const PostProviderMinds = {
    posts: social_network_utils/* creator.EmptyPostProviderState */.D.EmptyPostProviderState(),
    start (signal) {
        collectPostsMindsInner(this.posts, signal);
    }
};
function collectPostsMindsInner(store, signal) {
    (0,utils_watcher/* startWatch */.f)(new umd.MutationObserverWatcher(postContentSelector()).useForeach((node, key, metadata)=>{
        const activitySelector = new umd.LiveSelector().replace(()=>[
                metadata.realCurrent
            ]
        ).closest('m-activity, m-activity__modal');
        const activityNode = activitySelector.evaluate()[0];
        // ? inject after comments
        const commentsSelector = activitySelector.clone().querySelectorAll('m-comment .m-comment__message');
        // ? inject comment text field
        const commentBoxSelector = activitySelector.clone().querySelectorAll('.m-commentPoster__form').map((x)=>x.parentElement
        );
        const { subscriptions , ...info } = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = mindsShared.utils.createPostContext({
            comments: {
                commentBoxSelector,
                commentsSelector
            },
            rootElement: metadata,
            suggestedInjectionPoint: node,
            ...subscriptions
        });
        store.set(metadata, postInfo);
        function collectPostInfo() {
            const { pid , messages , handle , name , avatar  } = postParser(activityNode);
            if (!pid) return;
            const postBy = src/* ProfileIdentifier.of */.WO.of(minds_com_base/* mindsBase.networkIdentifier */.N.networkIdentifier, handle).unwrapOr(null);
            info.postID.value = pid;
            info.postBy.value = postBy;
            info.nickname.value = name;
            info.avatarURL.value = avatar || null;
            if (name && postBy) {
                const currentProfile = (0,social_network_adaptor_utils/* getCurrentIdentifier */.T)();
                service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(postBy, {
                    nickname: name,
                    avatarURL: avatar
                });
                if (currentProfile?.linkedPersona) service/* default.Identity.createNewRelation */.ZP.Identity.createNewRelation(postBy, currentProfile.linkedPersona);
            }
            // decode steganographic image
            // don't add await on this
            const images = (0,dom/* untilElementAvailable */.f)(new umd.LiveSelector([
                activityNode
            ]).querySelectorAll('.m-activityContent__media--image img'), 10000).then(()=>getMetadataImages(activityNode)
            ).then((urls)=>{
                for (const url of urls)info.postMetadataImages.add(url);
                if (urls.length) return (0,base/* makeTypedMessageTupleFromList */.n_)(...urls.map((x)=>(0,base/* makeTypedMessageImage */.as)(x)
                ));
                return (0,base/* makeTypedMessageEmpty */.WM)();
            }).catch(()=>(0,base/* makeTypedMessageEmpty */.WM)()
            );
            info.postMessage.value = (0,base/* makeTypedMessageTuple */.Zw)([
                ...messages,
                (0,base/* makeTypedMessagePromise */.Ng)(images)
            ]);
        }
        collectPostInfo();
        return {
            onNodeMutation: collectPostInfo,
            onTargetChanged: collectPostInfo,
            onRemove: ()=>store.delete(metadata)
        };
    }), signal);
}
function getMetadataImages(activityNode) {
    const imgNodes = activityNode.querySelectorAll('.m-activityContent__media--image img') || [];
    if (!imgNodes.length) return [];
    const imgUrls = Array.from(imgNodes).map((node)=>node.src
    )// FIXME! there's a CORS issue on the CDN
    .map((src)=>src.replace('cdn.minds.com', 'minds.com')
    )// Use the master version of the image so the dimensions don't change
    .map((src)=>src.replace('xlarge', 'master')
    ).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(25105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ./src/utils/theme/index.ts
var utils_theme = __webpack_require__(17784);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/customization/custom.ts








// TODO: get this from DOM. But currently Minds has a single primary color
const primaryColorRef = new umd.ValueRef((0,utils_theme/* toRGB */.xr)([
    68,
    170,
    255
]));
const primaryColorContrastColorRef = new umd.ValueRef((0,utils_theme/* toRGB */.xr)([
    255,
    255,
    255
]));
const backgroundColorRef = new umd.ValueRef((0,utils_theme/* toRGB */.xr)([
    255,
    255,
    255
]));
const currentTheme = new umd.ValueRef('light');
const PaletteModeProviderMinds = {
    current: (0,src/* createSubscriptionFromValueRef */._H)(currentTheme),
    start: startWatchThemeColor
};
function startWatchThemeColor(signal) {
    function updateThemeColor() {
        const contrastColor = (0,utils_theme/* getForegroundColor */.aF)(themeListItemSelector().evaluate());
        const backgroundColor = (0,utils_theme/* getBackgroundColor */.dF)(document.body);
        currentTheme.value = contrastColor === 'rgb(255,255,255)' ? 'dark' : 'light';
        if (contrastColor) primaryColorContrastColorRef.value = contrastColor;
        if (backgroundColor) backgroundColorRef.value = currentTheme.value === 'light' ? 'rgb(244, 244 ,245)' : 'rgb(26, 32, 37)';
    }
    // init
    currentTheme.value = (0,utils_theme/* getBackgroundColor */.dF)(document.body) === 'rgb(255,255,255)' ? 'light' : 'dark';
    // update
    new umd.MutationObserverWatcher(themeListItemSelector()).addListener('onAdd', updateThemeColor).addListener('onChange', updateThemeColor).startWatch({
        childList: true,
        subtree: true
    }, signal);
}
function useThemeMindsVariant(baseTheme) {
    const primaryColor = (0,shared_base_ui_src/* useValueRef */.E)(primaryColorRef);
    const primaryContrastColor = (0,shared_base_ui_src/* useValueRef */.E)(primaryColorContrastColorRef);
    const backgroundColor = (0,shared_base_ui_src/* useValueRef */.E)(backgroundColorRef);
    return (0,react.useMemo)(()=>{
        const primaryColorRGB = (0,utils_theme/* fromRGB */.f2)(primaryColor);
        const primaryContrastColorRGB = (0,utils_theme/* fromRGB */.f2)(primaryContrastColor);
        (0,immer_esm/* setAutoFreeze */.Fl)(false);
        const MindsTheme = (0,immer_esm/* default */.ZP)(baseTheme, (theme)=>{
            theme.palette.background.paper = backgroundColor;
            theme.palette.primary = {
                light: (0,utils_theme/* toRGB */.xr)((0,utils_theme/* shade */.wj)(primaryColorRGB, 10)),
                main: (0,utils_theme/* toRGB */.xr)(primaryColorRGB),
                dark: (0,utils_theme/* toRGB */.xr)((0,utils_theme/* shade */.wj)(primaryColorRGB, -10)),
                contrastText: (0,utils_theme/* toRGB */.xr)(primaryContrastColorRGB)
            };
            theme.shape.borderRadius = 15;
            theme.breakpoints.values = {
                xs: 0,
                sm: 687,
                md: 1024,
                lg: 1220,
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
        return (0,createMuiStrictModeTheme/* default */.Z)(MindsTheme);
    }, [
        baseTheme,
        backgroundColor,
        primaryColor,
        primaryContrastColor
    ]);
}

// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/pasteToCommentBoxMinds.ts




async function pasteToCommentBoxMinds(encryptedComment, current, dom) {
    const fail = ()=>{
        messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
            text: encryptedComment
        });
    };
    const root = dom || current.rootNode;
    if (!root) return fail();
    const input = root.querySelector('[contenteditable]');
    if (!input) return fail();
    (0,utils/* selectElementContents */.Ms)(input);
    (0,sdk/* pasteText */.M1)(encryptedComment);
    await (0,esm/* delay */.gw)(200);
    if (!root.innerText.includes(encryptedComment)) return fail();
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/CommentBox.tsx



function injectCommentBoxAtMinds() {
    return (0,defaults/* injectCommentBoxDefaultFactory */.SA)(pasteToCommentBoxMinds, (classes)=>({
            inputProps: {
                classes
            }
        })
    , (0,entry/* makeStyles */.ZL)()((theme)=>({
            root: {
                fontSize: 16,
                background: 'transparent',
                // FIXME: A weird issue with margins
                width: '96.2%',
                height: 44,
                borderRadius: 2,
                padding: '2px 1em',
                border: `1px solid ${theme.palette.mode === 'dark' ? '#414c57' : '#d3dbe3'}`,
                margin: '0 10px 10px',
                color: theme.palette.mode === 'dark' ? '#fff' : '#43434d',
                fontWeight: 400
            },
            input: {
                '&::placeholder': {
                    color: theme.palette.mode === 'dark' ? '#b8c1c' : '#72727c',
                    opacity: 1,
                    fontWeight: 400
                },
                '&:focus::placeholder': {
                    color: 'transparent'
                }
            }
        })
    ));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 20 modules
var Composition = __webpack_require__(65902);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostDialog.tsx






function injectPostDialogAtMinds(signal) {
    renderPostDialogTo('popup', composerModalSelector(), signal);
    renderPostDialogTo('timeline', rootSelector(), signal);
}
function renderPostDialogTo(reason, ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
        requireClipboardPermission: true,
        type: reason
    }));
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(43017);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostDialogHint.tsx









function injectPostDialogHintAtMinds(signal) {
    renderPostDialogHintTo(postEditorInDialogSelector(), signal, 'popup');
    renderPostDialogHintTo(postEditorInTimelineSelector(), signal, 'timeline');
}
function renderPostDialogHintTo(ls, signal, reason) {
    const watcher = new umd.MutationObserverWatcher(ls, document.querySelector('m-app'));
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    watcher.useForeach((node, key, meta)=>{
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHintAtMinds, {
            reason: reason
        }));
    });
}
const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { reason  })=>({
        buttonText: {
            margin: 0
        },
        buttonTransform: {
            ...reason === 'timeline' ? {
                width: '40px',
                transform: 'translateX(200px) translateY(-78px)'
            } : {}
        },
        iconButton: {
            '&:hover': {
                background: 'none'
            }
        }
    })
);
function PostDialogHintAtMinds({ reason  }) {
    const { classes  } = useStyles({
        reason
    });
    const onHintButtonClicked = (0,react.useCallback)(()=>src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
            reason,
            open: true
        })
    , [
        reason
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
        size: 17,
        iconType: "minds",
        onHintButtonClicked: onHintButtonClicked,
        tooltip: {
            disabled: true
        },
        classes: {
            buttonTransform: classes.buttonTransform,
            iconButton: classes.iconButton
        }
    });
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/inject.tsx


function injectPostBoxComposed(signal) {
    injectPostDialogAtMinds(signal);
    injectPostDialogHintAtMinds(signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostInspector.tsx + 17 modules
var PostInspector = __webpack_require__(10327);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostInspector.tsx

function injectPostInspectorAtMinds(signal, current) {
    return (0,PostInspector/* injectPostInspectorDefault */.J)()(current, signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx + 1 modules
var PostReplacer = __webpack_require__(33262);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostReplacer.tsx

function resolveContentNode(node) {
    return node.closest([
        'm-activity__content .m-activityContent__messageWrapper > span:first-child',
        'm-activity__content .m-activityContent__mediaDescriptionText', 
    ].join());
}
function injectPostReplacerAtMinds(signal, current) {
    return (0,PostReplacer/* injectPostReplacer */.C)({
        zipPost (node) {
            const langNode = resolveContentNode(node.current);
            if (langNode) langNode.style.display = 'none';
        },
        unzipPost (node) {
            if (!node.current) return;
            const langNode = resolveContentNode(node.current);
            if (langNode) langNode.style.display = 'unset';
        }
    })(current, signal);
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/SearchResultBox.tsx
var SearchResultBox = __webpack_require__(16834);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/SearchResultBox.tsx






function injectSearchResultBoxAtMinds(signal) {
    const watcher = new umd.MutationObserverWatcher(searchResultHeadingSelector());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultBox/* SearchResultBox */.L, {}));
}

// EXTERNAL MODULE: ./src/components/shared/NotSetupYetPrompt.tsx + 1 modules
var NotSetupYetPrompt = __webpack_require__(83458);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/SetupPrompt.tsx







function injectSetupPromptAtMinds(signal) {
    injectSetupPrompt(postEditorInTimelineSelector(), signal, /*#__PURE__*/ (0,jsx_runtime.jsx)(MindsNotSetupYet_Timeline, {}));
    injectSetupPrompt(postEditorInDialogSelector(), signal, /*#__PURE__*/ (0,jsx_runtime.jsx)(MindsNotSetupYet_Popup, {}));
}
function injectSetupPrompt(ls, signal, element) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    watcher.useForeach((node, key, meta)=>{
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
            signal
        }).render(element);
    });
}
const SetupPrompt_useStyles = (0,entry/* makeStyles */.ZL)()({
    buttonText: {
        margin: '-2px 0 !important',
        transform: 'translateX(200px) translateY(-78px)'
    },
    content: {
        marginRight: 5
    },
    buttonNoMargin: {
        margin: '0 !important'
    }
});
const MindsNotSetupYet_Timeline = ()=>{
    const { classes  } = SetupPrompt_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NotSetupYetPrompt/* NotSetupYetPrompt */.N, {
        iconType: "minds",
        classes: {
            buttonText: classes.buttonText,
            content: classes.content
        }
    });
};
const MindsNotSetupYet_Popup = ()=>{
    const { classes  } = SetupPrompt_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NotSetupYetPrompt/* NotSetupYetPrompt */.N, {
        iconType: "minds",
        classes: {
            buttonText: classes.buttonNoMargin
        }
    });
};

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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/ToolboxHint_UI.tsx



const mindsBreakPoint = 1221 /** px */ ;
const Container = (0,styled/* default */.ZP)('div')`
    height: 45px;
    margin-bottom: 10px;
`;
const Item = (0,styled/* default */.ZP)(ListItemButton/* default */.Z)`
    border-radius: 8px;
    height: 45px;
    padding: 4px 12px 4px 0;
    color: ${({ theme  })=>theme.palette.mode === 'dark' ? '#b8c1ca' : '#72727c'
};
    &:hover {
        background: unset;
        color: rgb(48, 153, 242);
    }
    @media screen and (max-width: ${mindsBreakPoint}px) {
        padding: 12px 0;
        justify-content: center;
    }
`;
const Text = (0,styled/* default */.ZP)(Typography/* default */.Z)`
    font-size: 0.9375rem;
    font-weight: 500;
    color: inherit !important;
    /* Minds font */
    font-family: Roboto, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 44px;
`;
const Icon = (0,styled/* default */.ZP)(ListItemIcon/* default */.Z)`
    color: inherit;
    min-width: 48px;
    margin-left: 6px;
    @media screen and (max-width: ${mindsBreakPoint}px) {
        min-width: 0;
    }
`;
function ToolboxHintAtMinds(props) {
    const mini = (0,useMediaQuery/* default */.Z)(`(max-width: ${mindsBreakPoint}px)`);
    const mode = (0,useTheme/* default */.Z)().palette.mode;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxUnstyled/* ToolboxHintUnstyled */.z, {
        mini: mini,
        Container: Container,
        ListItemButton: Item,
        Typography: Text,
        ListItemIcon: Icon,
        category: props.category
    });
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/ToolboxHint.tsx






function injectToolboxHintAtMinds(signal, category) {
    const watcher = new umd.MutationObserverWatcher(toolBoxInSideBarSelector());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHintAtMinds, {
        category: category
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/Components/Text.tsx
var Components_Text = __webpack_require__(61323);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/customization/render-fragments.tsx




const MindsRenderFragments = {
    AtLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const target = '/' + props.children.slice(1);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: target,
            children: props.children
        });
    }),
    HashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const text = props.children.slice(1);
        const target = `/discovery/search?q=%23${encodeURIComponent(text)}`;
        const { hasMatch , ...events } = (0,Components_Text/* useTagEnhancer */.fR)('hash', text);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            href: target,
            children: props.children,
            onClick: (e)=>{
                e.stopPropagation();
            }
        });
    }),
    CashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const text = props.children.slice(1);
        const target = `/discovery/search?q=$${encodeURIComponent(text)}`;
        const { hasMatch , ...events } = (0,Components_Text/* useTagEnhancer */.fR)('cash', text);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            href: target,
            children: props.children,
            onClick: (e)=>{
                e.stopPropagation();
            }
        });
    }),
    Image: ()=>null
};

// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/transformer.ts
var transformer = __webpack_require__(16248);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/ui-provider.ts



























const useInjectedDialogClassesOverwriteMinds = (0,entry/* makeStyles */.ZL)()((theme)=>{
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
                '&': {
                    display: 'block !important',
                    borderRadius: '0 !important'
                }
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
const mindsUI = {
    ...minds_com_base/* mindsBase */.N,
    ...mindsShared,
    automation: {
        maskCompositionDialog: {
            open: openComposeBoxMinds
        },
        nativeCommentBox: undefined,
        nativeCompositionDialog: {
            appendText: pasteTextToCompositionMinds,
            // TODO: make a better way to detect
            attachImage: pasteImageToCompositionMinds()
        },
        redirect: {
            newsFeed: gotoNewsFeedPageMinds,
            profilePage: gotoProfilePageMinds
        }
    },
    collecting: {
        identityProvider: IdentityProviderMinds,
        postsProvider: PostProviderMinds,
        getSearchedKeyword: getSearchedKeywordAtMinds
    },
    customization: {
        paletteMode: PaletteModeProviderMinds,
        sharedComponentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteMinds
            }
        },
        componentOverwrite: {
            RenderFragments: MindsRenderFragments
        },
        useTheme: useThemeMindsVariant
    },
    init (signal) {
        const profiles = social_network/* stateCreator.profiles */.ZZ.profiles();
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, mindsShared.networkIdentifier);
        (0,transformer/* enableFbStyleTextPayloadReplace */.Hk)();
        return {
            profiles
        };
    },
    injection: {
        toolbox: injectToolboxHintAtMinds,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        postInspector: injectPostInspectorAtMinds,
        enhancedPostRenderer: injectPostReplacerAtMinds,
        setupPrompt: injectSetupPromptAtMinds,
        searchResult: injectSearchResultBoxAtMinds,
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
        commentComposition: {
            compositionBox: (0,defaults/* injectPostCommentsDefault */.MF)(),
            commentInspector: injectCommentBoxAtMinds()
        },
        // NOT SUPPORTED YET
        userBadge: undefined
    },
    configuration: {
        steganography: {
            // ! Change this might be a breaking change !
            password () {
                const id = IdentityProviderMinds.recognized.value.identifier?.userId || social_network/* globalUIState.profiles.value */.EJ.profiles.value?.[0].identifier.userId;
                if (!id) throw new Error('Cannot figure out password');
                return src/* ProfileIdentifier.of */.WO.of(src/* EnhanceableSite.Minds */.Jk.Minds, id).unwrap().toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (mindsUI);


/***/ }),

/***/ 22094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jg": () => (/* reexport safe */ _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__.J),
/* harmony export */   "MF": () => (/* reexport safe */ _inject_Comments__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   "Rv": () => (/* reexport safe */ _inject_PageInspector__WEBPACK_IMPORTED_MODULE_5__.R),
/* harmony export */   "SA": () => (/* reexport safe */ _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   "SK": () => (/* reexport safe */ _state_InitProfiles__WEBPACK_IMPORTED_MODULE_4__.S),
/* harmony export */   "Zh": () => (/* reexport safe */ _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_7__.Z)
/* harmony export */ });
/* harmony import */ var _automation_AttachImageToComposition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89523);
/* harmony import */ var _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27531);
/* harmony import */ var _inject_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91632);
/* harmony import */ var _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10327);
/* harmony import */ var _state_InitProfiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66909);
/* harmony import */ var _inject_PageInspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78583);
/* harmony import */ var _inject_PostReplacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33262);
/* harmony import */ var _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4154);










/***/ }),

/***/ 27531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ injectCommentBoxDefaultFactory)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(52125);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/CommentBox.tsx






const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { snsId  })=>({
        root: {
            flex: 1,
            fontSize: 13,
            background: '#3a3b3c',
            width: snsId === src/* EnhanceableSite.Minds */.Jk.Minds ? '96%' : '100%',
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
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
            onKeyDown: (event)=>{
                const node = event.target;
                if (!node.value) return;
                if (event.key !== 'Enter') return;
                props.onSubmit(node.value);
                node.value = '' // clear content
                ;
            },
            ...props.inputProps
        })
    });
}

// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(95175);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(93995);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/CommentBox.tsx









const defaultOnPasteToCommentBox = async (encryptedComment, _current, _realCurrent)=>{
    messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
        text: encryptedComment
    });
};
// TODO: should not rely on onPasteToCommentBoxFacebook.
// Use automation.nativeCommentBox.appendText
const injectCommentBoxDefaultFactory = function(onPasteToCommentBox = defaultOnPasteToCommentBox, additionPropsToCommentBox = ()=>({})
, useCustomStyles = (0,entry/* makeStyles */.ZL)()({}), mountPointCallback) {
    const CommentBoxUI = /*#__PURE__*/ (0,react.memo)(function CommentBoxUI({ dom  }) {
        const info = (0,entry_content_script/* usePostInfo */.oQ)();
        const encryptComment = entry_content_script/* usePostInfoDetails.encryptComment */.H9.encryptComment();
        const { classes  } = useCustomStyles();
        const props = additionPropsToCommentBox(classes);
        const onCallback = (0,react.useCallback)(async (content)=>{
            if (!encryptComment) return;
            const encryptedComment = await encryptComment(content);
            onPasteToCommentBox(encryptedComment, info, dom);
        }, [
            encryptComment,
            info,
            dom
        ]);
        if (!encryptComment) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBox, {
            onSubmit: onCallback,
            ...props
        });
    });
    return (signal, current)=>{
        if (!current.comment?.commentBoxSelector) return;
        const commentBoxWatcher = new umd.MutationObserverWatcher(current.comment.commentBoxSelector.clone(), document.body).useForeach((node, key, meta)=>{
            try {
                mountPointCallback?.(meta);
            } catch  {}
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PostInfoProvider */.eT, {
                post: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBoxUI, {
                    ...current,
                    dom: meta.realCurrent
                })
            }));
            return root.destroy;
        });
        (0,watcher/* startWatch */.f)(commentBoxWatcher, signal);
    };
};


/***/ }),

/***/ 91632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ injectPostCommentsDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(80226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(11142);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Lock.js
var Lock = __webpack_require__(43011);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostComments.tsx








const useStyle = (0,entry/* makeStyles */.ZL)()({
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
    const chipClasses = (0,entry/* useStylesExtends */.Bc)(useStyle(), props.ChipProps || {});
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
            "data-testid": "comment_field",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lock/* default */.Z, {}),
            label: props.children,
            color: "secondary",
            ...props.ChipProps,
            classes: chipClasses
        })
    });
}
function PostComment(props) {
    const { needZip  } = props;
    const comment = (0,src/* useValueRef */.E)(props.comment);
    const decrypt = entry_content_script/* usePostInfoDetails.decryptComment */.H9.decryptComment();
    const { value  } = (0,useAsync/* default */.Z)(async ()=>decrypt?.(comment)
    , [
        decrypt,
        comment
    ]);
    (0,react.useEffect)(()=>void (value && needZip())
    , [
        value,
        needZip
    ]);
    if (value) return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostCommentDecrypted, {
        children: value
    });
    return null;
}

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(93995);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/Comments.tsx









/**
 * Creat a default implementation of injectPostComments
 */ function injectPostCommentsDefault(config = {}, additionalPropsToPostComment = ()=>({})
, useCustomStyles = (0,entry/* makeStyles */.ZL)()({})) {
    const { needZip  } = config;
    const PostCommentDefault = /*#__PURE__*/ (0,react.memo)(function PostCommentDefault(props) {
        const { classes  } = useCustomStyles();
        const additional = additionalPropsToPostComment(classes);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostComment, {
            ...props,
            ...additional
        });
    });
    return function injectPostComments(signal, current) {
        const selector = current.comment?.commentsSelector;
        if (!selector) return;
        const commentWatcher = new umd.MutationObserverWatcher(selector, document.body).useForeach((commentNode, key, meta)=>{
            const commentRef = new umd.ValueRef((0,utils/* collectNodeText */.aW)(commentNode));
            const needZipF = needZip || (()=>undefined
            );
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PostInfoProvider */.eT, {
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
                    root.destroy();
                }
            };
        });
        (0,watcher/* startWatch */.f)(commentWatcher, signal);
    };
}


/***/ })

}]);