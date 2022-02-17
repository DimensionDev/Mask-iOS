"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7429],{

/***/ 18306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ instagramShared)
/* harmony export */ });
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3025);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76108);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27947);



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

/***/ 37429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(29980);
// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/shared.ts
var shared = __webpack_require__(18306);
// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/base.ts
var base = __webpack_require__(27947);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
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
    recognized: social_network.creator.EmptyIdentityResolveProviderState()
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
var utils = __webpack_require__(55334);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(82125);
// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(3025);
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
                nextTypedMessage.push((0,src/* makeTypedMessageImage */.as)(img.src, img));
                info.postMetadataImages.add(img.src);
            } else nextTypedMessage.push((0,src/* makeTypedMessageImage */.as)(''));
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
var defaults = __webpack_require__(40770);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(35520);
// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared_0 = __webpack_require__(89650);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(74936);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(40299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(30681);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/Create.js
var Create = __webpack_require__(5208);
// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 16 modules
var Composition = __webpack_require__(4684);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var src_utils = __webpack_require__(76108);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/Entry.tsx







const Container = (0,styled/* default */.ZP)('div')`
    position: fixed;
    right: 2.5em;
    bottom: 5em;
`;
const appearsWith = '[data-testid="new-post-button"]';
function Entry() {
    const [display, setDisplay] = (0,react.useState)(!!document.querySelector(appearsWith));
    (0,react.useEffect)(()=>{
        const watch = new umd.MutationObserverWatcher(new umd.LiveSelector().querySelector(appearsWith).enableSingleMode()).startWatch({
            childList: true,
            subtree: true
        });
        watch.on('onAdd', ()=>setDisplay(true)
        );
        watch.on('onRemove', ()=>setDisplay(false)
        );
        return ()=>watch.stopWatch()
        ;
    });
    if (!display) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Fab/* default */.Z, {
                variant: "extended",
                onClick: ()=>{
                    src_utils/* MaskMessages.events.requestComposition.sendToLocal */.ql.events.requestComposition.sendToLocal({
                        open: true,
                        reason: 'timeline'
                    });
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Create/* default */.Z, {}),
                    "Create with Mask"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
                type: "timeline"
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/newPostComposition.tsx




function newPostCompositionInstagram(signal) {
    const container = document.createElement('div');
    const shadow = container.attachShadow({
        mode: shared_0/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
    });
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(shadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {}));
    document.body.appendChild(container);
    signal.addEventListener('abort', ()=>container.remove()
    );
}

// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(53752);
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
        postsProvider: PostProviderInstagram
    },
    configuration: {
        setupWizard: {
            disableSayHello: true
        }
    },
    customization: {},
    init (signal) {
        const friends = social_network.stateCreator.friends();
        const profiles = social_network.stateCreator.profiles();
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, base/* instagramBase.networkIdentifier */.j.networkIdentifier);
        // No need to init cause this network is not going to support those features now.
        return {
            friends,
            profiles
        };
    },
    injection: {
        setupWizard: (0,defaults/* createTaskStartSetupGuideDefault */.Zh)(),
        postInspector: injectPostInspectorInstagram,
        newPostComposition: {
            start: newPostCompositionInstagram,
            supportedInputTypes: {
                text: true,
                image: true
            },
            supportedOutputTypes: {
                text: false,
                image: true
            }
        }
    }
};
/* harmony default export */ const ui_provider = (ui_provider_define);


/***/ }),

/***/ 40770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SA": () => (/* reexport safe */ _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   "MF": () => (/* reexport safe */ _inject_Comments__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   "Jg": () => (/* reexport safe */ _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__.J),
/* harmony export */   "Zh": () => (/* reexport safe */ _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__.Z)
/* harmony export */ });
/* harmony import */ var _automation_AttachImageToComposition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54216);
/* harmony import */ var _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13861);
/* harmony import */ var _inject_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49007);
/* harmony import */ var _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42924);
/* harmony import */ var _state_InitFriends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96625);
/* harmony import */ var _state_InitProfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53752);
/* harmony import */ var _inject_PageInspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74730);
/* harmony import */ var _inject_PostReplacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95751);
/* harmony import */ var _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56630);











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
/* harmony export */   "Lj": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.Lj),
/* harmony export */   "X3": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.X3)
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31637);
/* harmony import */ var _build_async_iterators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);




/***/ })

}]);