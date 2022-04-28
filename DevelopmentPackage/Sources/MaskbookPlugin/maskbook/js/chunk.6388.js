"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6388],{

/***/ 30363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ openseaShared)
/* harmony export */ });
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94627);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6955);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69118);



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

/***/ 16388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/utils.ts
var utils = __webpack_require__(30821);
// EXTERNAL MODULE: ./src/social-network/defaults/index.ts
var defaults = __webpack_require__(6115);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(61199);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ./src/social-network-adaptor/opensea.io/base.ts
var base = __webpack_require__(69118);
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
var shared = __webpack_require__(30363);
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

/***/ 6115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jg": () => (/* reexport safe */ _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__.J),
/* harmony export */   "MF": () => (/* reexport safe */ _inject_Comments__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   "SA": () => (/* reexport safe */ _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   "SK": () => (/* reexport safe */ _state_InitProfiles__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "Zh": () => (/* reexport safe */ _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__.Z)
/* harmony export */ });
/* harmony import */ var _automation_AttachImageToComposition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8142);
/* harmony import */ var _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8712);
/* harmony import */ var _inject_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96575);
/* harmony import */ var _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72097);
/* harmony import */ var _state_InitFriends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58903);
/* harmony import */ var _state_InitProfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61199);
/* harmony import */ var _inject_PageInspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22283);
/* harmony import */ var _inject_PostReplacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7641);
/* harmony import */ var _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85153);











/***/ }),

/***/ 8712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ injectCommentBoxDefaultFactory)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.9.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(85646);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(85974);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/CommentBox.tsx






const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { snsId  })=>({
        root: {
            flex: 1,
            fontSize: 13,
            background: '#3a3b3c',
            width: snsId === src/* MINDS_ID */.fN ? '96%' : '100%',
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
    });
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(55423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(32196);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(69900);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
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
        const postContent = entry_content_script/* usePostInfoDetails.rawMessagePiped */.H9.rawMessagePiped();
        const { classes  } = useCustomStyles();
        const iv = entry_content_script/* usePostInfoDetails.iv */.H9.iv();
        const props = additionPropsToCommentBox(classes);
        const onCallback = (0,react.useCallback)(async (content)=>{
            const decryptedText = (0,base/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
            const encryptedComment = await service/* default.Crypto.encryptComment */.ZP.Crypto.encryptComment(new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(iv)), decryptedText, content);
            onPasteToCommentBox(encryptedComment, info, dom).catch(console.error);
        }, [
            postContent,
            info,
            dom,
            iv
        ]);
        if (!iv) return null;
        if (!postContent.items.length) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBox, {
            onSubmit: onCallback,
            ...props
        });
    });
    return (signal, current)=>{
        if (!current.comment?.commentBoxSelector) return noop/* default */.Z;
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
        return ()=>commentBoxWatcher.stopWatch()
        ;
    };
};


/***/ }),

/***/ 96575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ injectPostCommentsDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.9.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(85646);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(55423);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(46995);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Lock.js
var Lock = __webpack_require__(51462);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
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
    const postContent = entry_content_script/* usePostInfoDetails.rawMessagePiped */.H9.rawMessagePiped();
    const iv = entry_content_script/* usePostInfoDetails.iv */.H9.iv();
    const dec = (0,useAsync/* default */.Z)(async ()=>{
        const decryptedText = (0,base/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
        if (!iv || !decryptedText) throw new Error('Decrypt comment failed');
        const result = await service/* default.Crypto.decryptComment */.ZP.Crypto.decryptComment(new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(iv)), decryptedText, comment);
        if (result === null) throw new Error('Decrypt result empty');
        return result;
    }, [
        iv,
        postContent,
        comment
    ]);
    (0,react.useEffect)(()=>void (dec.value && needZip())
    , [
        dec.value,
        needZip
    ]);
    if (dec.value) return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostCommentDecrypted, {
        children: dec.value
    });
    return null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(69900);
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
        if (!selector) return noop/* default */.Z;
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
        return ()=>commentWatcher.stopWatch()
        ;
    };
}


/***/ })

}]);