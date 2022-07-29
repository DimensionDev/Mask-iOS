(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1675],{

/***/ 14136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ attachment_namespaceObject)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/utils.js
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/types.js
const MAGIC_HEADER = new TextEncoder().encode("MASKBOOK-ATTACHMENT");
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/encoder.js



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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/utils.js
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/payload.js




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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/decoder.js


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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/index.js


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 58277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(43147);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 69480:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(58277)();
}


/***/ }),

/***/ 43147:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 56812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/truncate.js + 5 modules
var truncate = __webpack_require__(21186);
// EXTERNAL MODULE: ../plugins/FileService/src/base.ts + 7 modules
var base = __webpack_require__(87245);
// EXTERNAL MODULE: ../plugins/FileService/src/constants.ts
var constants = __webpack_require__(94529);
// EXTERNAL MODULE: ../plugins/FileService/src/helpers.ts
var helpers = __webpack_require__(21627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(80226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var isNil = __webpack_require__(29330);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(43133);
;// CONCATENATED MODULE: ../plugins/FileService/src/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "com.maskbook.fileservice", ...props })
function useI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("com.maskbook.fileservice")
    return (0,react.useMemo)(
        function proxyBasedHooks() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = t.bind(null, key));
        },
    });
},
        [t],
    )
}
const Translate = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(10503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/index.js + 7 modules
var common_protocols_esm = __webpack_require__(14136);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(81117);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Radio/Radio.js + 5 modules
var Radio = __webpack_require__(68421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(23230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
;// CONCATENATED MODULE: ../plugins/FileService/src/file-key.ts
function makeFileKey(length = 16) {
    let key = '';
    // cspell:disable-next-line
    const table = 'ABDEFGHJKMNPQRTWXYadefhijkmnprstuvwxyz03478';
    for(let i = 0; i < length; i += 1){
        key += table.charAt(Math.floor(Math.random() * table.length));
    }
    return key;
}

// EXTERNAL MODULE: ../plugins/FileService/src/Worker/rpc.ts
var rpc = __webpack_require__(48293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(23228);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/file.js
var icons_file = __webpack_require__(14049);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/RecentFiles.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
const useItemStyles = (0,entry/* makeStyles */.ZL)()({
    root: {
        padding: 0,
        paddingBottom: 10,
        userSelect: 'none',
        cursor: 'pointer'
    }
});
const useItemIconStyles = (0,entry/* makeStyles */.ZL)()({
    root: {
        minWidth: 32
    }
});
const useItemTextStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const t = useI18N();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { classes  } = useStyles();
    const { classes: itemClasses  } = useItemStyles();
    const { classes: itemIconClasses  } = useItemIconStyles();
    const { classes: itemTextClasses  } = useItemTextStyles();
    const onClick = (info)=>()=>{
            navigate(constants/* FileRouter.uploaded */.er.uploaded, {
                state: info
            });
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.heading,
                children: t.recent_files()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.listing,
                children: files.slice(0, 4).map(renderItem)
            }),
            onMore && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.more,
                onClick: onMore,
                children: t.show_more()
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/upload-cloud.js
var upload_cloud = __webpack_require__(85143);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useDropArea.js
var useDropArea = __webpack_require__(84429);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/UploadDropArea.tsx








const UploadDropArea_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
            userSelect: 'none',
            height: 200
        },
        here: {
            fontSize: 12,
            lineHeight: 2.5,
            color: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[500],
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
            userSelect: 'none'
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
            userSelect: 'none',
            cursor: 'pointer',
            zIndex: 0
        }
    })
);
const UploadDropArea = ({ maxFileSize , onFile  })=>{
    const t = useI18N();
    const { classes , cx  } = UploadDropArea_useStyles();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
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
        const file = event.currentTarget.files?.item(0);
        if ((0,isNil/* default */.Z)(file)) {
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
            101: t.error_101(),
            102: t.error_102({
                limit: MAX_FILE_SIZE
            })
        };
        if (code in messages) {
            showSnackbar(`Error ${code}: ${messages[code]}`, {
                variant: 'error'
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        component: "label",
        ...bond,
        className: cx(classes.label, {
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
                children: t.drop_indicator()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(upload_cloud/* default */.Z, {
                className: classes.uploader,
                width: 64,
                height: 64
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                className: classes.here,
                children: t.drop_here()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: classes.hint,
                children: t.drop_hint_1({
                    limit: MAX_FILE_SIZE
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: classes.hint,
                children: t.drop_hint_2()
            })
        ]
    });
};

// EXTERNAL MODULE: ../plugins/FileService/src/types.ts
var types = __webpack_require__(8634);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/Upload.tsx
















const Upload_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column'
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
    const t = useI18N();
    const { classes  } = Upload_useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [encrypted, setEncrypted] = (0,react.useState)(true);
    const [useCDN, setUseCDN] = (0,react.useState)(false);
    const [provider, setProvider] = (0,react.useState)(types/* Provider.arweave */.z.arweave);
    const recent = (0,useAsync/* default */.Z)(()=>rpc/* PluginFileServiceRPC.getRecentFiles */.N.getRecentFiles()
    , []);
    const allProviders = [
        {
            provider: types/* Provider.arweave */.z.arweave,
            name: t.provider_arweave()
        },
        {
            provider: types/* Provider.ipfs */.z.ipfs,
            name: t.provider_ipfs()
        },
        {
            provider: types/* Provider.swarm */.z.swarm,
            name: t.provider_swarm()
        }, 
    ];
    const onFile = async (file)=>{
        let key = undefined;
        if (encrypted) {
            key = makeFileKey();
        }
        const block = new Uint8Array(await file.arrayBuffer());
        const checksum = (0,esm/* encodeArrayBuffer */.ll)(await common_protocols_esm/* Attachment.checksum */.P.checksum(block));
        const item = await rpc/* PluginFileServiceRPC.getFileInfo */.N.getFileInfo(checksum);
        if ((0,isNil/* default */.Z)(item)) {
            navigate(constants/* FileRouter.uploading */.er.uploading, {
                state: {
                    key,
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    block,
                    checksum,
                    useCDN,
                    provider
                }
            });
        } else {
            navigate(constants/* FileRouter.uploaded */.er.uploaded, {
                state: item
            });
        }
    };
    const allProviderOptions = allProviders.map((config)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                color: "primary",
                checked: provider === config.provider,
                onChange: ()=>setProvider(config.provider)
            }),
            className: classes.encrypted,
            label: config.name
        }, config.provider)
    );
    const cdnButton = provider === types/* Provider.arweave */.z.arweave ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
            color: "primary",
            checked: useCDN,
            onChange: (event)=>setUseCDN(event.target.checked)
        }),
        className: classes.usedCDN,
        label: t.use_cdn()
    }) : null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
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
                        files: recent.value ?? []
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.checkItems,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: encrypted,
                            onChange: (event)=>setEncrypted(event.target.checked)
                        }),
                        className: classes.encrypted,
                        label: t.on_encrypt_it()
                    }),
                    cdnButton
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.checkItems,
                children: allProviderOptions
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.legal,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.legalText,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate.legal_text, {
                        components: {
                            terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                target: "_blank",
                                href: t.legal_terms_link()
                            }),
                            policy: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                target: "_blank",
                                href: t.legal_policy_link()
                            })
                        }
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/hooks/Exchange.tsx



const Context = /*#__PURE__*/ (0,react.createContext)({
    onInsert: noop/* default */.Z,
    onUploading: noop/* default */.Z,
    onDialogClose: noop/* default */.Z
});
const Exchange = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
        value: (0,omit/* default */.Z)(props, [
            'children'
        ]),
        children: props.children
    })
;
const useExchange = ()=>(0,react.useContext)(Context)
;

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/FileName.tsx



const FileName_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        name: {
            fontSize: 16,
            lineHeight: 1.75,
            textAlign: 'center',
            color: theme.palette.text.secondary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    })
);
const FileName = (props)=>{
    const { classes  } = FileName_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.name,
        children: props.name,
        title: props.name
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/Uploaded.tsx















const Uploaded_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        height: 250,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
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
    change: {
        fontSize: 14,
        margin: '0 auto',
        display: 'flex',
        padding: '0 60px',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    info: {
        margin: 0
    }
});
const Uploaded = ()=>{
    const t = useI18N();
    const { classes  } = Uploaded_useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { onInsert , onDialogClose  } = useExchange();
    const state = (0,react_router/* useLocation */.TH)().state;
    (0,react.useEffect)(()=>{
        onInsert(state);
    }, [
        onInsert,
        state
    ]);
    const onBack = ()=>{
        onInsert(null);
        navigate(constants/* FileRouter.upload */.er.upload);
    };
    // return upload route
    onDialogClose(onBack);
    const onPreview = (event)=>{
        // ! THIS METHOD IS ONLY IN THE DEBUGGER !
        // ! Trigger: [Shift Key] + [Click] !
        // see https://mdn.io/shiftKey
        if (!event.shiftKey) {
            return;
        }
        const linkPrefix = (0,helpers/* resolveGatewayAPI */.u)(state.provider);
        const link = dist_default()(linkPrefix, '/:txId', {
            txId: state.landingTxID
        });
        (0,src/* openWindow */.xw)(state.key ? `${link}#${state.key}` : link);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
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
                sx: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FileName, {
                        name: state.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "section",
                        className: classes.meta,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
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
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.change,
                        onClick: onBack,
                        variant: "contained",
                        children: t.on_change_file()
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(37194);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/ProgressBar.tsx





const ProgressBar_useStyles = (0,entry/* makeStyles */.ZL)()({
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
        justifyContent: 'center'
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
    const t = useI18N();
    const { classes  } = ProgressBar_useStyles();
    const { startedAt , fileSize , sendSize  } = props;
    const value = sendSize / fileSize * 100;
    const elapsed = (Date.now() - startedAt) / 1000;
    const remaining = (fileSize - sendSize) / (elapsed ? sendSize / elapsed : 0);
    const variant = props.preparing ? 'indeterminate' : 'determinate';
    let completion = t.uploading_preparing();
    if (!props.preparing) {
        completion = `${(0,esm/* formatFileSize */.sS)(sendSize)} of ${(0,esm/* formatFileSize */.sS)(fileSize)}`;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
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
    });
};
const Duration = ({ value  })=>{
    const t = useI18N();
    const render = ()=>{
        if (!Number.isFinite(value)) {
            return t.uploading_estimating_time();
        } else if (value < 60) {
            return t.uploading_in_minute_remaining({
                seconds: value.toFixed(0)
            });
        }
        return t.uploading_remaining({
            minutes: Math.trunc(value / 60) + '',
            seconds: (value % 60).toFixed(0)
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: render()
    });
};

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/Uploading.tsx














const Uploading_useStyles = (0,entry/* makeStyles */.ZL)()({
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
        whiteSpace: 'nowrap'
    }
});
const Uploading = ()=>{
    const t = useI18N();
    const { classes  } = Uploading_useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { onUploading  } = useExchange();
    const [startedAt] = (0,react.useState)(Date.now());
    const [preparing, setPreparing] = (0,react.useState)(true);
    const [sendSize, setSendSize] = (0,react.useState)(0);
    const state = (0,react_router/* useLocation */.TH)().state;
    (0,react.useEffect)(()=>{
        onUploading(true);
        return ()=>onUploading(false)
        ;
    }, [
        onUploading
    ]);
    const { error  } = (0,useAsync/* default */.Z)(async ()=>{
        const currentProvider = state.provider;
        const payloadTxID = await (0,esm/* timeout */.Vs)(rpc/* PluginFileServiceRPC.makeAttachment */.N.makeAttachment(currentProvider, {
            name: state.name,
            key: state.key,
            block: state.block,
            type: state.type
        }), 60000);
        setPreparing(false);
        for await (const pctComplete of rpc/* PluginFileServiceRPCGenerator.upload */.$.upload(currentProvider, payloadTxID)){
            setSendSize(state.size * (pctComplete / 100));
        }
        const landingTxID = await (0,esm/* timeout */.Vs)(rpc/* PluginFileServiceRPC.uploadLandingPage */.N.uploadLandingPage(currentProvider, {
            name: state.name,
            size: state.size,
            txId: payloadTxID,
            type: state.type,
            key: state.key,
            useCDN: state.useCDN
        }), 300000);
        const item = {
            type: 'file',
            provider: currentProvider,
            id: state.checksum,
            name: state.name,
            size: state.size,
            createdAt: new Date(startedAt),
            key: state.key,
            payloadTxID,
            landingTxID
        };
        await rpc/* PluginFileServiceRPC.setFileInfo */.N.setFileInfo(item);
        navigate(constants/* FileRouter.uploaded */.er.uploaded, {
            state: item
        });
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
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
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
                        children: t.signing_failed()
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
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
                sx: {
                    width: '100%'
                },
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
    });
};

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/index.tsx






const Entry = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* MemoryRouter */.VA, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: constants/* FileRouter.upload */.er.upload,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Upload, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: constants/* FileRouter.uploading */.er.uploading,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Uploading, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: constants/* FileRouter.uploaded */.er.uploaded,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Uploaded, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: "*",
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Navigate */.Fg, {
                        replace: true,
                        to: constants/* FileRouter.upload */.er.upload
                    })
                })
            ]
        })
    })
;

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/MainDialog.tsx












const MainDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
        },
        paper: {
            width: '600px !important',
            maxWidth: 'none',
            boxShadow: 'none',
            backgroundImage: 'none',
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                display: 'block !important',
                margin: 12
            }
        }
    })
);
const FileServiceDialog = (props)=>{
    const t = useI18N();
    const { classes  } = MainDialog_useStyles();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const [uploading, setUploading] = (0,react.useState)(false);
    const [selectedFileInfo, setSelectedFileInfo] = (0,react.useState)(null);
    const { attachMetadata , dropMetadata  } = (0,entry_content_script/* useCompositionContext */.Cp)();
    const { closeDialog: closeApplicationBoardDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.ApplicationDialogUpdated */.R$.events.ApplicationDialogUpdated);
    const onInsert = ()=>{
        if ((0,isNil/* default */.Z)(selectedFileInfo)) {
            return;
        }
        if (selectedFileInfo) {
            attachMetadata(constants/* META_KEY_2 */.lw, JSON.parse(JSON.stringify(selectedFileInfo)));
        } else {
            dropMetadata(constants/* META_KEY_2 */.lw);
        }
        closeApplicationBoardDialog();
        props.onClose();
    };
    let onDialogCloseCallback;
    const callDialogClose = ()=>{
        try {
            onDialogCloseCallback?.();
        } catch (error) {}
        onDialogCloseCallback = null;
    };
    const onDecline = ()=>{
        if (onDialogCloseCallback) {
            callDialogClose();
            return;
        }
        if (!uploading) {
            props.onClose();
            return;
        }
        showSnackbar(t.uploading_on_cancel());
    };
    const onDialogClose = (cb)=>{
        onDialogCloseCallback = cb;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(entry/* MaskDialog */.Df, {
        isOpenFromApplicationBoard: props.isOpenFromApplicationBoard,
        DialogProps: {
            scroll: 'paper',
            classes: {
                paper: classes.paper
            }
        },
        open: props.open,
        title: t.__display_name(),
        onClose: onDecline,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Exchange, {
                    onDialogClose: onDialogClose,
                    onUploading: setUploading,
                    onInsert: setSelectedFileInfo,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {})
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
                    disabled: (0,isNil/* default */.Z)(selectedFileInfo),
                    children: t.on_insert()
                })
            })
        ]
    });
};
/* harmony default export */ const MainDialog = (FileServiceDialog);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/download-cloud.js
var download_cloud = __webpack_require__(79047);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/Copyable.tsx

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
        globalThis.getSelection()?.removeAllRanges();
    };
    const onCopy = async (event)=>{
        onSelect(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
        className: className,
        onClick: onCopy,
        onMouseEnter: onSelect,
        onMouseLeave: onDeselect,
        children: children
    });
};

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/Preview.tsx











const Preview_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
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
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    const t = useI18N();
    const { classes  } = Preview_useStyles();
    const fileKey = info.key ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        component: "p",
        color: "textPrimary",
        children: [
            t.file_key(),
            " ",
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyableCode, {
                className: classes.code,
                children: info.key
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        component: "p",
        color: "textSecondary",
        children: t.unencrypted()
    });
    const linkPrefix = (0,helpers/* resolveGatewayAPI */.u)(info.provider);
    const link = dist_default()(linkPrefix, '/:txId', {
        txId: info.landingTxID
    });
    const onClick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        (0,src/* openWindow */.xw)(info.key ? `${link}#${info.key}` : link);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
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
    });
}

// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/FileService.tsx


const FileServiceIcon = (0,utils/* createIcon */.I)('FileService', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M5 10C5 9.44772 5.44772 9 6 9H15.75C16.0648 9 16.3611 9.14819 16.55 9.4L21.8 16.4C22.2944 17.0592 21.824 18 21 18H6C5.44772 18 5 17.5523 5 17V10Z",
            fill: "#F7931E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter0_b_39_226867)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                x: "7.25",
                y: "11.0039",
                width: "22.5",
                height: "15.75",
                rx: "1",
                fill: "white",
                fillOpacity: "0.3"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 11.7363C5.44772 11.7363 5 12.184 5 12.7363V14.5V19.7363V28.25C5 28.8023 5.44771 29.25 6 29.25H31C31.5523 29.25 32 28.8023 32 28.25V14.5C32 13.9477 31.5523 13.5 31 13.5H17.5728L16.55 12.1363C16.3611 11.8845 16.0648 11.7363 15.75 11.7363H6Z",
            fill: "#FFB110"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.9282 17.7951C14.9046 17.9701 14.2166 18.9418 14.3916 19.9655C14.5666 20.9891 15.5383 21.6771 16.562 21.5022C17.5857 21.3272 18.2736 20.3554 18.0986 19.3317C17.9236 18.3081 16.9519 17.6201 15.9282 17.7951ZM12.913 20.2182C12.5984 18.3779 13.8352 16.6311 15.6755 16.3165C17.5158 16.0019 19.2626 17.2387 19.5772 19.079C19.8918 20.9192 18.655 22.6661 16.8147 22.9807C14.9745 23.2953 13.2276 22.0585 12.913 20.2182Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.8942 21.1761C18.1384 20.8415 18.6076 20.7682 18.9422 21.0123L23.1469 24.0806C23.4815 24.3248 23.5548 24.7939 23.3106 25.1285C23.0665 25.4631 22.5973 25.5365 22.2627 25.2923L18.058 22.224C17.7234 21.9798 17.65 21.5107 17.8942 21.1761Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.2519 23.516C19.9157 23.2741 19.8393 22.8054 20.0812 22.4692L20.984 21.2145C21.226 20.8783 21.6947 20.8018 22.0309 21.0437C22.3671 21.2857 22.4435 21.7544 22.2016 22.0906L21.2988 23.3453C21.0568 23.6815 20.5882 23.7579 20.2519 23.516Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22.0537 24.0463C21.7175 23.8043 21.641 23.3357 21.883 22.9994L22.7858 21.7447C23.0277 21.4085 23.4964 21.3321 23.8326 21.574C24.1688 21.8159 24.2453 22.2846 24.0034 22.6208L23.1005 23.8756C22.8586 24.2118 22.3899 24.2882 22.0537 24.0463Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                id: "filter0_b_39_226867",
                x: "-2.75",
                y: "1.00391",
                width: "42.5",
                height: "35.75",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                        in: "BackgroundImage",
                        stdDeviation: "5"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("feComposite", {
                        in2: "SourceAlpha",
                        operator: "in",
                        result: "effect1_backgroundBlur_39_226867"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_backgroundBlur_39_226867",
                        result: "shape"
                    })
                ]
            })
        })
    ]
}), '0 0 37 36');

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/index.tsx












const definition = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector (props) {
        const metadata = (0,helpers/* FileInfoMetadataReader */.ri)(props.message.meta);
        if (!metadata.ok) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Preview, {
            info: metadata.val
        });
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
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceIcon, {
                    style: {
                        width: 16,
                        height: 16
                    }
                }),
                "File Service"
            ]
        }),
        dialog: MainDialog
    },
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceIcon, {});
            const name = {
                i18nKey: '__plugin_name',
                fallback: 'File Service'
            };
            const iconFilterColor = 'rgba(247, 147, 30, 0.3)';
            return {
                ApplicationEntryID: base/* base.ID */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    const clickHandler = ()=>shared_base_src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
                            reason: 'timeline',
                            open: true,
                            options: {
                                startupPlugin: base/* base.ID */.u.ID,
                                isOpenFromApplicationBoard: true
                            }
                        })
                    ;
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PluginI18NFieldRender */.KP, {
                            field: name,
                            pluginID: base/* base.ID */.u.ID
                        }),
                        ...EntryComponentProps,
                        icon: icon,
                        iconFilterColor: iconFilterColor,
                        onClick: EntryComponentProps.onClick ? ()=>EntryComponentProps.onClick?.(clickHandler)
                         : clickHandler
                    });
                },
                appBoardSortingDefaultPriority: 2,
                marketListSortingPriority: 2,
                icon,
                category: 'dapp',
                description: {
                    i18nKey: '__plugin_description',
                    fallback: 'Decentralized file storage, permanently. Upload and share files to your Mask friends on top of Arweave Network.'
                },
                name,
                iconFilterColor,
                tutorialLink: 'https://realmasknetwork.notion.site/8c8fe1efce5a48b49739a38f4ea8c60f'
            };
        })(), 
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceIcon, {
            style: {
                width: 24,
                height: 24,
                filter: 'drop-shadow(0px 6px 12px rgba(247, 147, 30, 0.2))'
            }
        }),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(255, 177, 16, 0.2) 100%), #FFFFFF;'
    }
};
/* harmony default export */ const SNSAdaptor = (definition);
function onAttachedFile(payload) {
    const name = (0,truncate/* default */.Z)(payload.name, {
        length: 10
    });
    return {
        text: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                display: 'flex',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceIcon, {
                    style: {
                        width: 16,
                        height: 16
                    }
                }),
                "Attached File: ",
                name,
                " (",
                (0,esm/* formatFileSize */.sS)(payload.size),
                ")"
            ]
        })
    };
}


/***/ }),

/***/ 48293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ PluginFileServiceRPCGenerator),
/* harmony export */   "N": () => (/* binding */ PluginFileServiceRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);

/* unsupported import.meta.webpackHot */ undefined && 0;
const PluginFileServiceMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService);
const PluginFileServiceRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3147), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(9278), __webpack_require__.e(3742), __webpack_require__.e(7372), __webpack_require__.e(1240), __webpack_require__.e(4038), __webpack_require__.e(3850), __webpack_require__.e(3708), __webpack_require__.e(2116), __webpack_require__.e(2514), __webpack_require__.e(4859), __webpack_require__.e(9074)]).then(__webpack_require__.bind(__webpack_require__, 23403)).then(({ upload , setupDatabase , ...rest })=>rest
    )
, PluginFileServiceMessage._);
const PluginFileServiceRPCGenerator = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPCGenerator */ .Sc)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3147), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(9278), __webpack_require__.e(3742), __webpack_require__.e(7372), __webpack_require__.e(1240), __webpack_require__.e(4038), __webpack_require__.e(3850), __webpack_require__.e(3708), __webpack_require__.e(2116), __webpack_require__.e(2514), __webpack_require__.e(4859), __webpack_require__.e(9074)]).then(__webpack_require__.bind(__webpack_require__, 23403)).then(({ upload  })=>({
            upload
        })
    )
, PluginFileServiceMessage._2);


/***/ })

}]);