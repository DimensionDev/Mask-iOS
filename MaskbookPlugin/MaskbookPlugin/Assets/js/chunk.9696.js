"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8981],{

/***/ 57209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ attachment_namespaceObject)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js
var attachment_namespaceObject = {};
__webpack_require__.r(attachment_namespaceObject);
__webpack_require__.d(attachment_namespaceObject, {
  "checksum": () => (checksum),
  "decode": () => (decode),
  "encode": () => (encode),
  "getPayload": () => (getPayload),
  "loadKey": () => (loadKey)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@1.12.2/node_modules/@msgpack/msgpack/dist.es5/msgpack.min.js
var msgpack_min = __webpack_require__(21795);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/utils.js
async function checksum(block) {
    const hashed = await crypto.subtle.digest({ name: "SHA-256" }, block);
    return new Uint8Array(hashed);
}
async function loadKey(passphrase, salt) {
    const key = await crypto.subtle.importKey("raw", passphrase, { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
    return crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt,
        iterations: 1000,
        hash: "SHA-256",
    }, key, { name: "AES-GCM", length: 128 }, true, ["encrypt", "decrypt"]);
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/types.js
const MAGIC_HEADER = new TextEncoder().encode("MASKBOOK-ATTACHMENT");
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/encoder.js



async function encode(passphrase, input) {
    let algorithm, salt, block, keyHash;
    if (passphrase === undefined) {
        block = input.block;
    }
    else {
        keyHash = await checksum(passphrase);
        salt = crypto.getRandomValues(new Uint8Array(8));
        const key = await loadKey(passphrase, salt);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        algorithm = { name: "AES-GCM", iv, tagLength: 128 };
        const encrypted = await crypto.subtle.encrypt(algorithm, key, input.block);
        block = new Uint8Array(encrypted);
    }
    const payload = {
        version: 0,
        mime: input.mime,
        metadata: input.metadata,
        algorithm,
        salt,
        keyHash,
        block,
        blockHash: await checksum(block),
    };
    return Uint8Array.from([...MAGIC_HEADER, ...(0,msgpack_min.encode)(payload)]);
}
//# sourceMappingURL=encoder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/utils.js
function bufferEqual(buf1, buf2) {
    if (buf1 === buf2) {
        return true;
    }
    else if (buf1.byteLength !== buf2.byteLength) {
        return false;
    }
    let i = buf1.byteLength;
    while (i--) {
        if (buf1[i] !== buf2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/payload.js




async function getPayload(passphrase, encoded) {
    if (!bufferEqual(MAGIC_HEADER, encoded.slice(0, MAGIC_HEADER.length))) {
        throw new Error("unexpected magic header.");
    }
    const buffer = encoded.slice(MAGIC_HEADER.length);
    const payload = (0,msgpack_min.decode)(buffer);
    if (payload.version !== 0) {
        throw new Error("unexpected file version.");
    }
    else if (payload.mime.length === 0) {
        throw new Error("unexpected `.mime`.");
    }
    else if (!bufferEqual(payload.blockHash, await checksum(payload.block))) {
        throw new Error("unexpected `blockHash`.");
    }
    else if (passphrase && payload.keyHash) {
        if (!bufferEqual(payload.keyHash, await checksum(passphrase))) {
            throw new Error("unexpected `keyHash`.");
        }
    }
    return payload;
}
//# sourceMappingURL=payload.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/decoder.js


async function decode(passphrase, encoded) {
    const payload = await getPayload(passphrase, encoded);
    let block = payload.block;
    if (passphrase && payload.algorithm && payload.salt) {
        const data = await crypto.subtle.decrypt(payload.algorithm, await loadKey(passphrase, payload.salt), payload.block);
        block = new Uint8Array(data);
    }
    return {
        mime: payload.mime,
        metadata: payload.metadata,
        block,
    };
}
//# sourceMappingURL=decoder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/index.js


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 61754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ CompositionContext),
/* harmony export */   "C": () => (/* binding */ useCompositionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


const CompositionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    attachMetadata () {
    },
    dropMetadata () {
    }
});
const useCompositionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionContext)
;
/* unsupported import.meta.webpackHot */ undefined && 0;


/***/ }),

/***/ 70988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(77504);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/useTheme.js
var useTheme = __webpack_require__(7931);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(82215);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogTitle/DialogTitle.js + 1 modules
var DialogTitle = __webpack_require__(20481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(11042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(18658);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(14840);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx






function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: (0,base/* isTwitter */.L3)(social_network.activatedSocialNetworkUI) ? 'primary' : 'inherit'
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {
    });
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogBackdropRoot: {
        }
    })
);
function InjectedDialog(props) {
    var ref, ref1, ref2;
    const overwrite = social_network.activatedSocialNetworkUI.customization.componentOverwrite || {
    };
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container , ...dialogClasses } = (0,shared_src.useStylesExtends)(useStyles(), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , ...rest } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack  } = (0,src/* useDialogStackConsumer */.N8)(open);
    return (0,utils/* usePortalShadowRoot */.ad)((container1)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
            container: container1,
            fullScreen: fullScreen,
            classes: dialogClasses,
            scroll: "paper",
            fullWidth: true,
            maxWidth: "sm",
            disableAutoFocus: true,
            disableEnforceFocus: true,
            onClose: (event, reason)=>{
                if (reason === 'backdropClick' && disableBackdropClick) return;
                onClose === null || onClose === void 0 ? void 0 : onClose();
            },
            onBackdropClick: disableBackdropClick ? void 0 : onClose,
            BackdropProps: {
                classes: {
                    root: dialogBackdropRoot
                }
            },
            ...rest,
            ...extraProps,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src.ErrorBoundary, {
                children: [
                    title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                        classes: {
                            root: dialogTitle
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                size: "large",
                                classes: {
                                    root: dialogCloseButton
                                },
                                "aria-label": t('post_dialog__dismiss_aria'),
                                onClick: onClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIconUI, {
                                    style: shouldReplaceExitWithBack ? 'back' : titleBarIconStyle
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: dialogTitleTypography,
                                display: "inline",
                                variant: "inherit",
                                children: title
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    }),
                    content,
                    actions
                ]
            })
        }));
    });
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>{
        return (child === null || child === void 0 ? void 0 : child.type) === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,shared_src.mergeClasses)(extraClasses, child.props.classes)
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 18981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/resources/tool-icon/index.ts
var tool_icon = __webpack_require__(30234);
// EXTERNAL MODULE: ./src/plugins/FileService/base.ts
var base = __webpack_require__(586);
// EXTERNAL MODULE: ./src/plugins/FileService/constants.ts
var constants = __webpack_require__(74010);
// EXTERNAL MODULE: ./src/plugins/FileService/helpers.ts + 2 modules
var helpers = __webpack_require__(58970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(27019);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/index.js + 7 modules
var common_protocols_esm = __webpack_require__(57209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(87239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(98569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.11.4_6270a9eba2c2d5b9e14d97f76e4f3a45/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(8286);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
;// CONCATENATED MODULE: ./src/plugins/FileService/file-key.ts
function makeFileKey(length = 16) {
    let key = '';
    const table = 'ABDEFGHJKMNPQRTWXYadefhijkmnprstuvwxyz03478';
    for(let i = 0; i < length; i += 1){
        key += table.charAt(Math.floor(Math.random() * table.length));
    }
    return key;
}

// EXTERNAL MODULE: ./src/plugins/FileService/Worker/rpc.ts
var rpc = __webpack_require__(46426);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(54819);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(5075);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/file.js
var icons_file = __webpack_require__(68818);
;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/components/RecentFiles.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            userSelect: 'none',
            display: 'flex',
            flexDirection: 'column',
            width: 150,
            paddingLeft: 10
        },
        heading: {
            fontSize: 14,
            lineHeight: 1.1,
            color: theme.palette.text.primary,
            marginTop: 0,
            marginBottom: 10
        },
        listing: {
            flex: 1
        },
        more: {
            fontSize: 14,
            lineHeight: 1.2,
            color: theme.palette.primary.contrastText
        }
    })
);
const useItemStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        padding: 0,
        paddingBottom: 10,
        userSelect: 'none',
        cursor: 'pointer'
    }
});
const useItemIconStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        minWidth: 32
    }
});
const useItemTextStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            margin: 0,
            marginLeft: 3
        },
        primary: {
            fontSize: 12,
            lineHeight: 1.1,
            color: theme.palette.text.primary,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        secondary: {
            fontSize: 10,
            lineHeight: 1.2,
            color: theme.palette.text.secondary
        }
    })
);
const RecentFiles = ({ files , onMore  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const history = (0,react_router/* useHistory */.k6)();
    const { classes  } = useStyles();
    const { classes: itemClasses  } = useItemStyles();
    const { classes: itemIconClasses  } = useItemIconStyles();
    const { classes: itemTextClasses  } = useItemTextStyles();
    const onClick = (info)=>()=>{
            history.replace(constants/* FileRouter.uploaded */.er.uploaded, info);
        }
    ;
    const renderItem = (file, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
            classes: itemClasses,
            onClick: onClick(file),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                    classes: itemIconClasses,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_file/* default */.Z, {
                        width: 32,
                        height: 32
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                    classes: itemTextClasses,
                    primary: file.name,
                    secondary: (0,format/* default */.Z)(file.createdAt, 'yyyy-MM-dd HH:mm')
                })
            ]
        }, index)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.heading,
                children: t('plugin_file_service_recent_files')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.listing,
                children: files.slice(0, 4).map(renderItem)
            }),
            onMore && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.more,
                onClick: onMore,
                children: t('plugin_file_service_show_more')
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/upload-cloud.js
var upload_cloud = __webpack_require__(60074);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useDropArea.js
var useDropArea = __webpack_require__(67805);
;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/components/UploadDropArea.tsx










const UploadDropArea_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        label: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            position: 'relative',
            border: '1px dashed #C4C4C4',
            boxSizing: 'border-box',
            borderRadius: 4,
            textAlign: 'center',
            flex: 1,
            padding: 12,
            overflow: 'hidden',
            userSelect: 'none'
        },
        here: {
            fontSize: 14,
            lineHeight: 2.5,
            color: theme.palette.grey[100],
            userSelect: 'none'
        },
        hint: {
            margin: 0,
            color: '#939393',
            fontSize: 12,
            lineHeight: 1.5,
            userSelect: 'none'
        },
        over: {
            borderColor: '#2CA4EF',
            borderStyle: 'solid',
            userSelect: 'none',
            '& > $indicator': {
                opacity: 1
            }
        },
        indicator: {
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0,
            cursor: 'pointer',
            transition: 'all 500ms ease-out',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.85)',
            fontSize: 30,
            color: '#2CA4EF',
            userSelect: 'none',
            zIndex: 1
        },
        uploader: {
            position: 'absolute',
            top: 38,
            userSelect: 'none',
            cursor: 'pointer',
            zIndex: 0
        }
    })
);
const UploadDropArea = ({ maxFileSize , onFile  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = UploadDropArea_useStyles();
    const snackbar = (0,src/* useSnackbar */.Ds)();
    const [bond, { over  }] = (0,useDropArea/* default */.Z)({
        onFiles (files) {
            if (files.length > 1) {
                onError(101);
            } else if (files[0].size > maxFileSize) {
                onError(102);
            } else {
                onFile(files[0]);
            }
        },
        onText: ()=>onError(101)
        ,
        onUri: ()=>onError(101)
    });
    const MAX_FILE_SIZE = (0,esm/* formatFileSize */.sS)(maxFileSize);
    const onInput = (event)=>{
        var ref;
        const file = (ref = event.currentTarget.files) === null || ref === void 0 ? void 0 : ref.item(0);
        if ((0,lodash.isNil)(file)) {
            onError(101);
        } else if (file.size > maxFileSize) {
            onError(102);
        } else {
            onFile(file);
        }
    };
    // error code definition:
    // see https://confluence.dimension.chat/x/3IEf#Maskbook:Plugin:FileService-ErrorHandling
    const onError = (code)=>{
        const messages = {
            101: t('plugin_file_service_error_101'),
            102: t('plugin_file_service_error_102', {
                limit: MAX_FILE_SIZE
            })
        };
        if (code in messages) {
            snackbar.enqueueSnackbar(`Error ${code}: ${messages[code]}`, {
                variant: 'error'
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        component: "label",
        ...bond,
        className: classnames_default()(classes.label, {
            [classes.over]: over
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                type: "file",
                onInput: onInput,
                hidden: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.indicator,
                children: t('plugin_file_service_drop_indicator')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(upload_cloud/* default */.Z, {
                className: classes.uploader,
                width: 64,
                height: 64
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                className: classes.here,
                children: t('plugin_file_service_drop_here')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: classes.hint,
                children: t('plugin_file_service_drop_hint_1', {
                    limit: MAX_FILE_SIZE
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: classes.hint,
                children: t('plugin_file_service_drop_hint_2')
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/components/Upload.tsx
















const Upload_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: 260
        },
        upload: {
            flex: 1,
            display: 'flex'
        },
        legal: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 'fit-content'
        },
        checkItems: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            height: 'fit-content'
        },
        encrypted: {
            userSelect: 'none',
            '& span': {
                fontSize: 12,
                lineHeight: 1.75
            }
        },
        usedCDN: {
            userSelect: 'none',
            '& span': {
                fontSize: 12,
                lineHeight: 1.75
            }
        },
        legalText: {
            userSelect: 'none',
            fontSize: 12,
            lineHeight: 1.75,
            color: theme.palette.text.secondary,
            '& a': {
                textDecoration: 'none'
            }
        }
    })
);
const Upload = ()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Upload_useStyles();
    const history = (0,react_router/* useHistory */.k6)();
    const [encrypted, setEncrypted] = (0,react.useState)(true);
    const [useCDN, setUseCDN] = (0,react.useState)(false);
    const recent = (0,useAsync/* default */.Z)(()=>rpc/* PluginFileServiceRPC.getRecentFiles */.N.getRecentFiles()
    , []);
    const onFile = async (file)=>{
        let key = undefined;
        if (encrypted) {
            key = makeFileKey();
        }
        const block = new Uint8Array(await (0,esm/* blobToArrayBuffer */.vZ)(file));
        const checksum = (0,esm/* encodeArrayBuffer */.ll)(await common_protocols_esm/* Attachment.checksum */.P.checksum(block));
        const item = await rpc/* PluginFileServiceRPC.getFileInfo */.N.getFileInfo(checksum);
        if ((0,lodash.isNil)(item)) {
            history.replace(constants/* FileRouter.uploading */.er.uploading, {
                key,
                name: file.name,
                size: file.size,
                type: file.type,
                block,
                checksum,
                useCDN
            });
        } else {
            history.replace(constants/* FileRouter.uploaded */.er.uploaded, item);
        }
    };
    var _value;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.upload,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadDropArea, {
                        maxFileSize: constants/* MAX_FILE_SIZE */.Tb,
                        onFile: onFile
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(RecentFiles, {
                        files: (_value = recent.value) !== null && _value !== void 0 ? _value : []
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.checkItems,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "secondary",
                            checked: encrypted,
                            onChange: (event)=>setEncrypted(event.target.checked)
                        }),
                        className: classes.encrypted,
                        label: t('plugin_file_service_on_encrypt_it')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "secondary",
                            checked: useCDN,
                            onChange: (event)=>setUseCDN(event.target.checked)
                        }),
                        className: classes.usedCDN,
                        label: t('plugin_file_service_use_cdn')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.legal,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.legalText,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                        i18nKey: "plugin_file_service_legal_text",
                        components: {
                            terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                target: "_blank",
                                href: t('plugin_file_service_legal_terms_link')
                            }),
                            policy: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                target: "_blank",
                                href: t('plugin_file_service_legal_policy_link')
                            })
                        }
                    })
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/hooks/Exchange.tsx



const Context = /*#__PURE__*/ (0,react.createContext)({
    onInsert: lodash.noop,
    onUploading: lodash.noop
});
const Exchange = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
        value: (0,lodash.omit)(props, [
            'children'
        ]),
        children: props.children
    })
;
const useExchange = ()=>(0,react.useContext)(Context)
;

;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/components/FileName.tsx



const FileName_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        name: {
            fontSize: 16,
            lineHeight: 1.75,
            textAlign: 'center',
            color: theme.palette.text.secondary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: 400
        }
    })
);
const FileName = (props)=>{
    const { classes  } = FileName_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.name,
        children: props.name,
        title: props.name
    }));
};

;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/components/Uploaded.tsx












const Uploaded_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        height: 250,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        userSelect: 'none',
        paddingTop: 18,
        paddingBottom: 18
    },
    name: {
        fontSize: 16,
        lineHeight: 1.75,
        color: '#3B3B3B',
        textAlign: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: 400,
        whiteSpace: 'nowrap'
    },
    meta: {
        fontSize: 14,
        lineHeight: 1.71,
        color: '#5D6F88',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    info: {
        margin: 0
    }
});
const Uploaded = ()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Uploaded_useStyles();
    const history = (0,react_router/* useHistory */.k6)();
    const { onInsert  } = useExchange();
    const { state  } = (0,react_router/* useLocation */.TH)();
    (0,react.useEffect)(()=>{
        onInsert(state);
    }, [
        onInsert,
        state
    ]);
    const onBack = ()=>{
        onInsert(null);
        history.replace(constants/* FileRouter.upload */.er.upload);
    };
    const onPreview = (event)=>{
        // ! THIS METHOD IS ONLY IN THE DEBUGGER !
        // ! Trigger: [Shift Key] + [Click] !
        // see https://mdn.io/shiftKey
        if (!event.shiftKey) {
            return;
        }
        const link = `https://arweave.net/${state.landingTxID}`;
        open(state.key ? `${link}#${state.key}` : link);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                onClick: onPreview,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_file/* default */.Z, {
                    width: 96,
                    height: 120
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FileName, {
                        name: state.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        component: "section",
                        className: classes.meta,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: classes.info,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: (0,esm/* formatFileSize */.sS)(state.size)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: '  '
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: (0,format/* default */.Z)(state.createdAt, 'yyyy-MM-dd HH:mm:ss')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                onClick: onBack,
                                variant: "contained",
                                children: t('plugin_file_service_on_change_file')
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(52259);
;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/components/ProgressBar.tsx





const ProgressBar_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        height: 250,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        userSelect: 'none',
        paddingTop: 18,
        paddingBottom: 18
    },
    progress: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 400
    },
    meta: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: 0,
        color: '#939393',
        fontSize: 12,
        lineHeight: 1.75
    }
});
const ProgressBar = (props)=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ProgressBar_useStyles();
    const { startedAt , fileSize , sendSize  } = props;
    const value = sendSize / fileSize * 100;
    const elapsed = (Date.now() - startedAt) / 1000;
    const remaining = (fileSize - sendSize) / (elapsed ? sendSize / elapsed : 0);
    const variant = props.preparing ? 'indeterminate' : 'determinate';
    let completion = t('plugin_file_service_uploading_preparing');
    if (!props.preparing) {
        completion = `${(0,esm/* formatFileSize */.sS)(sendSize)} of ${(0,esm/* formatFileSize */.sS)(fileSize)}`;
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.progress,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.meta,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Duration, {
                        value: remaining
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: completion
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress/* default */.Z, {
                    variant: variant,
                    value: value
                })
            })
        ]
    }));
};
const Duration = ({ value  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const render = ()=>{
        if (!Number.isFinite(value)) {
            return t('plugin_file_service_uploading_estimating_time');
        } else if (value < 60) {
            return t('plugin_file_service_uploading_in_minute_remaining', {
                seconds: value.toFixed(0)
            });
        }
        return t('plugin_file_service_uploading_remaining', {
            minutes: Math.trunc(value / 60),
            seconds: (value % 60).toFixed(0)
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: render()
    }));
};

;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/components/Uploading.tsx













const Uploading_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        height: 250,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        userSelect: 'none',
        paddingTop: 18,
        paddingBottom: 18
    },
    name: {
        fontSize: 16,
        lineHeight: 1.75,
        textAlign: 'center',
        color: '#3B3B3B',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: 400
    }
});
const Uploading = ()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Uploading_useStyles();
    const history = (0,react_router/* useHistory */.k6)();
    const { onUploading  } = useExchange();
    const [startedAt] = (0,react.useState)(Date.now());
    const [preparing, setPreparing] = (0,react.useState)(true);
    const [sendSize, setSendSize] = (0,react.useState)(0);
    const { state  } = (0,react_router/* useLocation */.TH)();
    (0,react.useEffect)(()=>{
        onUploading(true);
        return ()=>onUploading(false)
        ;
    }, [
        onUploading
    ]);
    const { error  } = (0,useAsync/* default */.Z)(async ()=>{
        const payloadTxID = await (0,utils/* timeout */.Vs)(rpc/* PluginFileServiceRPC.makeAttachment */.N.makeAttachment({
            key: state.key,
            block: state.block,
            type: state.type
        }), 60000);
        setPreparing(false);
        for await (const pctComplete of rpc/* PluginFileServiceRPCGenerator.upload */.$.upload(payloadTxID)){
            setSendSize(state.size * (pctComplete / 100));
        }
        const landingTxID = await (0,utils/* timeout */.Vs)(rpc/* PluginFileServiceRPC.uploadLandingPage */.N.uploadLandingPage({
            name: state.name,
            size: state.size,
            txId: payloadTxID,
            type: state.type,
            key: state.key,
            useCDN: state.useCDN
        }), 300000);
        const item = {
            type: 'file',
            provider: 'arweave',
            id: state.checksum,
            name: state.name,
            size: state.size,
            createdAt: new Date(startedAt),
            key: state.key,
            payloadTxID: payloadTxID,
            landingTxID: landingTxID
        };
        await rpc/* PluginFileServiceRPC.setFileInfo */.N.setFileInfo(item);
        history.replace(constants/* FileRouter.uploaded */.er.uploaded, item);
    }, []);
    (0,react.useEffect)(()=>{
        if (error) {
            onUploading(false);
        }
    }, [
        error,
        onUploading
    ]);
    if (error) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_file/* default */.Z, {
                        width: 96,
                        height: 120
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: t('plugin_file_service_signing_failed')
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_file/* default */.Z, {
                    width: 96,
                    height: 120
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FileName, {
                        name: state.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressBar, {
                        preparing: preparing,
                        fileSize: state.size,
                        sendSize: sendSize,
                        startedAt: startedAt
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/components/index.tsx






const Entry = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* MemoryRouter */.VA, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                path: constants/* FileRouter.upload */.er.upload,
                component: Upload
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                path: constants/* FileRouter.uploading */.er.uploading,
                component: Uploading
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                path: constants/* FileRouter.uploaded */.er.uploaded,
                component: Uploaded
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
                to: constants/* FileRouter.upload */.er.upload
            })
        ]
    })
;

// EXTERNAL MODULE: ./src/components/CompositionDialog/CompositionContext.tsx
var CompositionContext = __webpack_require__(61754);
;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/MainDialog.tsx












const MainDialog_useStyles = (0,src/* makeStyles */.ZL)()({
    actions: {
        alignSelf: 'center'
    },
    button: {
        borderRadius: 26,
        marginTop: 24,
        fontSize: 16,
        lineHeight: 2.5,
        paddingLeft: 35,
        paddingRight: 35
    }
});
const FileServiceDialog = (props)=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = MainDialog_useStyles();
    const snackbar = (0,src/* useSnackbar */.Ds)();
    const [uploading, setUploading] = (0,react.useState)(false);
    const [selectedFileInfo, setSelectedFileInfo] = (0,react.useState)(null);
    const { attachMetadata , dropMetadata  } = (0,CompositionContext/* useCompositionContext */.C)();
    const onInsert = ()=>{
        if ((0,lodash.isNil)(selectedFileInfo)) {
            return;
        }
        if (selectedFileInfo) {
            attachMetadata(constants/* META_KEY_2 */.lw, JSON.parse(JSON.stringify(selectedFileInfo)));
        } else {
            dropMetadata(constants/* META_KEY_2 */.lw);
        }
        props.onClose();
    };
    const onDecline = ()=>{
        if (!uploading) {
            props.onClose();
            return;
        }
        snackbar.enqueueSnackbar(t('plugin_file_service_uploading_on_cancel'));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        open: props.open,
        title: t('plugin_file_service_display_name'),
        onClose: onDecline,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Exchange, {
                    onUploading: setUploading,
                    onInsert: setSelectedFileInfo,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                classes: {
                    root: classes.actions
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "contained",
                    classes: {
                        root: classes.button
                    },
                    onClick: onInsert,
                    disabled: (0,lodash.isNil)(selectedFileInfo),
                    children: t('plugin_file_service_on_insert')
                })
            })
        ]
    }));
};
/* harmony default export */ const MainDialog = (FileServiceDialog);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/download-cloud.js
var download_cloud = __webpack_require__(95957);
;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/components/Copyable.tsx

const CopyableCode = ({ children , className  })=>{
    const onSelect = (event)=>{
        const selection = globalThis.getSelection();
        if (selection === null) {
            return;
        }
        const range = globalThis.document.createRange();
        range.selectNode(event.currentTarget);
        selection.removeAllRanges();
        selection.addRange(range);
    };
    const onDeselect = ()=>{
        var ref;
        (ref = globalThis.getSelection()) === null || ref === void 0 ? void 0 : ref.removeAllRanges();
    };
    const onCopy = async (event)=>{
        onSelect(event);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
        className: className,
        onClick: onCopy,
        onMouseEnter: onSelect,
        onMouseLeave: onDeselect,
        children: children
    }));
};

;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/Preview.tsx







const Preview_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            width: 345,
            border: `1px solid ${theme.palette.divider}`,
            boxSizing: 'border-box',
            borderRadius: 12,
            padding: theme.spacing(2),
            cursor: 'default',
            userSelect: 'none',
            '& p': {
                margin: 0
            }
        },
        meta: {
            flex: 1,
            minWidth: '1%',
            marginLeft: 18,
            marginRight: 18,
            fontSize: 14,
            lineHeight: 1.85
        },
        name: {
            fontSize: 16,
            lineHeight: 1.85,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        code: {
            lineHeight: 1,
            userSelect: 'auto'
        },
        download: {
            display: 'block',
            cursor: 'pointer'
        }
    })
);
function Preview({ info  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Preview_useStyles();
    const fileKey = info.key ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        component: "p",
        color: "textPrimary",
        children: [
            t('plugin_file_service_file_key'),
            " ",
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyableCode, {
                className: classes.code,
                children: info.key
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        component: "p",
        color: "textSecondary",
        children: t('plugin_file_service_unencrypted')
    });
    const link = `https://arweave.net/${info.landingTxID}`;
    const onClick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        open(info.key ? `${link}#${info.key}` : link);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        elevation: 0,
        className: classes.root,
        onClick:  true ? onClick : 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_file/* default */.Z, {
                className: classes.download,
                width: 44,
                height: 44,
                onClick: onClick
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.meta,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "p",
                        color: "textPrimary",
                        className: classes.name,
                        title: info.name,
                        children: info.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "p",
                        color: "textSecondary",
                        children: (0,esm/* formatFileSize */.sS)(info.size)
                    }),
                    fileKey
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(download_cloud/* default */.Z, {
                className: classes.download,
                width: 24,
                height: 24,
                onClick: onClick
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/FileService/SNSAdaptor/index.tsx









const definition = {
    ...base/* base */.u,
    init (signal) {
    },
    DecryptedInspector (props) {
        const metadata = (0,helpers/* FileInfoMetadataReader */.r)(props.message.meta);
        if (!metadata.ok) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Preview, {
            info: metadata.val
        }));
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* META_KEY_1 */.ki,
            onAttachedFile
        ],
        [
            constants/* META_KEY_2 */.lw,
            onAttachedFile
        ], 
    ]),
    CompositionDialogEntry: {
        label: '📃 File Service',
        dialog: MainDialog
    },
    ToolbarEntry: {
        ...tool_icon/* ToolIconURLs.files */.m.files,
        onClick: 'openCompositionEntry'
    }
};
/* harmony default export */ const SNSAdaptor = (definition);
function onAttachedFile(payload) {
    const name = (0,lodash.truncate)(payload.name, {
        length: 10
    });
    return `Attached File: ${name} (${(0,esm/* formatFileSize */.sS)(payload.size)})`;
}


/***/ }),

/***/ 46426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ PluginFileServiceRPC),
/* harmony export */   "$": () => (/* binding */ PluginFileServiceRPCGenerator)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74010);


/* unsupported import.meta.webpackHot */ undefined && 0;
const PluginFileServiceMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .FileServicePluginID */ .hM);
const PluginFileServiceRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .FileServicePluginID */ .hM, ()=>Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(6316), __webpack_require__.e(9278), __webpack_require__.e(3850), __webpack_require__.e(8192)]).then(__webpack_require__.bind(__webpack_require__, 49023))
, PluginFileServiceMessage._);
const PluginFileServiceRPCGenerator = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPCGenerator */ .Sc)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .FileServicePluginID */ .hM, ()=>Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(6316), __webpack_require__.e(9278), __webpack_require__.e(3850), __webpack_require__.e(8192)]).then(__webpack_require__.bind(__webpack_require__, 49023)).then(({ upload  })=>({
            upload
        })
    )
, PluginFileServiceMessage._2);


/***/ }),

/***/ 58970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ FileInfoMetadataReader),
  "F": () => (/* binding */ FileInfoV1ToV2)
});

// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
// EXTERNAL MODULE: ./src/plugins/FileService/constants.ts
var constants = __webpack_require__(74010);
;// CONCATENATED MODULE: ./src/plugins/FileService/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["arweave"],"title":"type"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","size"]}');
;// CONCATENATED MODULE: ./src/plugins/FileService/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["file"],"title":"type"},"provider":{"type":"string","enum":["arweave"],"title":"provider"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","provider","size","type"]}');
;// CONCATENATED MODULE: ./src/plugins/FileService/helpers.ts




const reader_v1 = (0,metadata/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_1 */.ki, schema_v1_namespaceObject);
const reader_v2 = (0,metadata/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_2 */.lw, schema_v2_namespaceObject);
function FileInfoMetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta).map(FileInfoV1ToV2);
}
function FileInfoV1ToV2(info) {
    return {
        ...info,
        type: 'file',
        provider: 'arweave'
    };
}


/***/ }),

/***/ 49970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fG": () => (/* binding */ metadataSchemaStoreReadonly),
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "Jp": () => (/* binding */ isDataMatchJSONSchema),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata),
/* harmony export */   "r1": () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports registerMetadataSchema, readTypedMessageMetadataUntyped, editMetadata, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64614);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20391);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98723);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
const metadataSchemaStore = new Map();
const metadataSchemaStoreReadonly = (/* runtime-dependent pure expression or super */ !/^(1680|964)$/.test(__webpack_require__.j) ? (metadataSchemaStore) : null);
/**
 * Register your metadata with a JSON Schema so Mask can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key)
    ;
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (!meta.has(key)) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({
    });
    if (!validator.validate(data, jsonSchema)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(validator.getLastErrors());
    return ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.ok) return render(message.val);
        return null;
    };
}
function editMetadata(metadata, edit) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(metadata || new Map(), (e)=>void edit(e)
    );
}
function editTypedMessageMeta(typedMessage, edit) {
    const meta = editMetadata(typedMessage.meta, edit);
    return {
        ...typedMessage,
        meta: meta.size === 0 ? undefined : meta
    };
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.ok) return render(message.val);
    return null;
}


/***/ }),

/***/ 30234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ ToolIconURLs)
/* harmony export */ });
const ToolIconURLs = {
    encryptedmsg: {
        image: new URL(/* asset import */ __webpack_require__(53305), __webpack_require__.b).toString(),
        label: 'Encrypted message',
        priority: 1000
    },
    redpacket: {
        image: new URL(/* asset import */ __webpack_require__(80759), __webpack_require__.b).toString(),
        label: 'Red Packet',
        priority: 990
    },
    files: {
        image: new URL(/* asset import */ __webpack_require__(34816), __webpack_require__.b).toString(),
        label: 'File Service',
        priority: 980
    },
    markets: {
        image: new URL(/* asset import */ __webpack_require__(12143), __webpack_require__.b).toString(),
        label: 'Markets',
        priority: 970
    },
    token: {
        image: new URL(/* asset import */ __webpack_require__(51614), __webpack_require__.b).toString(),
        label: 'Buy Cryptocurrency',
        priority: 960
    },
    swap: {
        image: new URL(/* asset import */ __webpack_require__(10548), __webpack_require__.b).toString(),
        label: 'Swap',
        priority: 950
    },
    claim: {
        image: new URL(/* asset import */ __webpack_require__(80003), __webpack_require__.b).toString(),
        label: 'Claim',
        priority: 940
    }
};


/***/ }),

/***/ 80003:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4da8b02bb5b7217131cc.png";

/***/ }),

/***/ 53305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fc5b3d5182d68ccb073.png";

/***/ }),

/***/ 34816:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fb14937533af5e01082.png";

/***/ }),

/***/ 12143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94a03fed8e268b91e255.png";

/***/ }),

/***/ 80759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a56884045e4fd720b0d.png";

/***/ }),

/***/ 10548:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1aa4a9fd7abb70f94bc.png";

/***/ }),

/***/ 51614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54b2701bac7cc9acc5b1.png";

/***/ })

}]);