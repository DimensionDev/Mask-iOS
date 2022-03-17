"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6016],{

/***/ 18635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ openseaShared)
/* harmony export */ });
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13591);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13573);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27870);



const openseaShared = {
    ..._base__WEBPACK_IMPORTED_MODULE_2__/* .openseaBase */ .W,
    utils: {
        getHomePage: ()=>'https://opensea.io/'
        ,
        getProfilePage: ()=>'https://opensea.io/account'
        ,
        createPostContext: (0,_social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_0__/* .createSNSAdaptorSpecializedPostContext */ .k)({
            payloadParser: _utils__WEBPACK_IMPORTED_MODULE_1__/* .deconstructPayload */ .Qn
        })
    }
};


/***/ }),

/***/ 66016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/utils.ts
var utils = __webpack_require__(32665);
// EXTERNAL MODULE: ./src/social-network/defaults/index.ts
var defaults = __webpack_require__(60599);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(49165);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/social-network-adaptor/opensea.io/base.ts
var base = __webpack_require__(27870);
;// CONCATENATED MODULE: ./src/social-network-adaptor/opensea.io/collecting/Identity.ts



const IdentityProviderOpensea = {
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
    function cookie2Json() {
        const res = decodeURIComponent(document.cookie).split('; ').find((x)=>x.includes('wallet={')
        );
        if (!res) return '';
        const [, value] = res.split('wallet=');
        if (!value) return '';
        return JSON.parse(value);
    }
    function getBioByCookie() {
        const empty = {
            username: '',
            profilePictureUrl: '',
            fullName: ''
        };
        if (document.cookie.length) {
            const _res = cookie2Json();
            const raw = _res.activeAccount;
            if (!_res.activeAccount) return empty;
            return {
                ...raw,
                profilePictureUrl: raw.imageUrl,
                username: raw.user.username,
                nickname: raw.nickname
            };
        }
        return empty;
    }
    const detail = await getBioByCookie();
    return {
        identifier: new src/* ProfileIdentifier */.WO(base/* openseaBase.networkIdentifier */.W.networkIdentifier, detail.username),
        avatar: detail.profilePictureUrl,
        nickname: detail.nickname
    };
}

// EXTERNAL MODULE: ./src/social-network-adaptor/opensea.io/shared.ts
var shared = __webpack_require__(18635);
;// CONCATENATED MODULE: ./src/social-network-adaptor/opensea.io/ui-provider.ts






const ui_provider_define = {
    ...shared/* openseaShared */._,
    ...base/* openseaBase */.W,
    automation: {},
    collecting: {
        identityProvider: IdentityProviderOpensea
    },
    configuration: {
        setupWizard: {
            disableSayHello: true
        }
    },
    customization: {},
    init (signal) {
        const friends = utils/* stateCreator.friends */.ZZ.friends();
        const profiles = utils/* stateCreator.profiles */.ZZ.profiles();
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, shared/* openseaShared.networkIdentifier */._.networkIdentifier);
        return {
            friends,
            profiles
        };
    },
    injection: {
        setupWizard: (0,defaults/* createTaskStartSetupGuideDefault */.Zh)()
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
/* harmony import */ var _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97770);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(59324);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(39850);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(70644);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Lock.js
var Lock = __webpack_require__(10111);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(76262);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 15 modules
var dom = __webpack_require__(68876);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
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


/***/ })

}]);