"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8693],{

/***/ 55223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lK": () => (/* reexport */ decryptBackup),
  "Hb": () => (/* reexport */ encryptBackup)
});

// UNUSED EXPORTS: BackupErrors

// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(82151);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
var decode = __webpack_require__(92415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ../backup-format/src/BackupErrors.ts
var BackupErrors;
(function(BackupErrors) {
    BackupErrors["UnknownFormat"] = '[@masknet/backup-format] Unknown format.';
    BackupErrors["WrongCheckSum"] = '[@masknet/backup-format] Bad checksum.';
})(BackupErrors || (BackupErrors = {}));

;// CONCATENATED MODULE: ../backup-format/src/container/index.ts


const MAGIC_HEADER_Version0 = new TextEncoder().encode('MASK-BACKUP-V000');
const CHECKSUM_LENGTH = 32;
var SupportedVersions;
(function(SupportedVersions) {
    SupportedVersions[SupportedVersions["Version0"] = 0] = "Version0";
})(SupportedVersions || (SupportedVersions = {}));
function getMagicHeader(version) {
    if (version === 0) return MAGIC_HEADER_Version0;
    (0,esm/* unreachable */.t1)(version);
}
/** @internal */ async function createContainer(version, data) {
    const checksum = await crypto.subtle.digest({
        name: 'SHA-256'
    }, data);
    return (0,esm/* concatArrayBuffer */.v_)(getMagicHeader(version), data, checksum);
}
/** @internal */ async function parseEncryptedJSONContainer(version, _container) {
    const container = new Uint8Array(_container);
    for (const [index, value] of getMagicHeader(version).entries()){
        if (container[index] !== value) throw new TypeError(BackupErrors.UnknownFormat);
    }
    const data = container.slice(MAGIC_HEADER_Version0.length, -CHECKSUM_LENGTH);
    const sum = new Uint8Array(await crypto.subtle.digest({
        name: 'SHA-256'
    }, data));
    for (const [index1, value1] of container.slice(-CHECKSUM_LENGTH).entries()){
        if (sum[index1] !== value1) throw new TypeError(BackupErrors.WrongCheckSum);
    }
    return data;
}

;// CONCATENATED MODULE: ../backup-format/src/v3-EncryptedJSON/index.ts



async function encryptBackup(password, binaryBackup) {
    const [pbkdf2IV, AESKey] = await createAESFromPassword(password);
    const AESParam = {
        name: 'AES-GCM',
        iv: crypto.getRandomValues(new Uint8Array(16))
    };
    const encrypted = new Uint8Array(await crypto.subtle.encrypt(AESParam, AESKey, binaryBackup));
    const container = (0,encode/* encode */.c)([
        pbkdf2IV,
        AESParam.iv,
        encrypted
    ]);
    return createContainer(SupportedVersions.Version0, container);
}
async function decryptBackup(password, data) {
    const container = await parseEncryptedJSONContainer(SupportedVersions.Version0, data);
    const _ = (0,decode/* decode */.Jx)(container);
    if (!Array.isArray(_) || _.length !== 3) throw new TypeError(BackupErrors.UnknownFormat);
    if (!_.every((x)=>x instanceof Uint8Array
    )) throw new TypeError(BackupErrors.UnknownFormat);
    const [pbkdf2IV, encryptIV, encrypted] = _;
    const aes = await getAESFromPassword(password, pbkdf2IV);
    const AESParam = {
        name: 'AES-GCM',
        iv: encryptIV
    };
    const decryptedBackup = await crypto.subtle.decrypt(AESParam, aes, encrypted);
    return decryptedBackup;
}
async function createAESFromPassword(password) {
    const pbkdf = await crypto.subtle.importKey('raw', password, 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
    const iv = crypto.getRandomValues(new Uint8Array(16));
    const aes = await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: iv,
        iterations: 10000,
        hash: 'SHA-256'
    }, pbkdf, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
    return [
        iv,
        aes
    ];
}
async function getAESFromPassword(password, iv) {
    const pbkdf = await crypto.subtle.importKey('raw', password, 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
    const aes = await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: iv,
        iterations: 10000,
        hash: 'SHA-256'
    }, pbkdf, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
    return aes;
}

;// CONCATENATED MODULE: ../backup-format/src/index.ts




/***/ }),

/***/ 54987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfirmDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68435);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12463);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58465);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68681);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72212);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21692);




const StyledButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(()=>({
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].root */ .Z.root}`]: {
            minWidth: 100
        }
    })
);
function ConfirmDialog(props) {
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_2__/* .useDashboardI18N */ .x)();
    const { title , open , onClose , onConfirm , children , maxWidth ='sm' , cancelText =t.settings_button_cancel() , confirmText =t.settings_button_confirm() , confirmDisabled =false ,  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskDialog */ .Df, {
        title: title,
        fullWidth: true,
        maxWidth: maxWidth,
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton, {
                        onClick: onClose,
                        color: "secondary",
                        children: cancelText
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton, {
                        onClick: onConfirm,
                        disabled: confirmDisabled,
                        children: confirmText
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 38551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ LoadingButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        icon: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).white,
            width: '100%'
        },
        loadingButtonOverride: {
            opacity: '1 !important'
        }
    })
);
const LoadingButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    const { onClick , children , ...rest } = props;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskLoadingButton */ .b4, {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.icon, props.loading ? classes.loadingButtonOverride : ''),
        variant: "contained",
        loadingPosition: "end",
        soloLoading: false,
        fullWidth: true,
        loadingIndicator: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .LoadingAnimation */ .p6, {
            style: {
                fontSize: '1.2rem'
            }
        }),
        onClick: onClick,
        ...rest,
        children: children
    }));
});


/***/ }),

/***/ 79042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ MaskAlert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68435);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39402);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88570);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79230);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87409);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87857);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43021);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26224);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17974);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57214);






const InfoAlert = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(({ theme  })=>({
        [`&  > .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].message */ .Z.message}`]: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: '16px',
            color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.secondaryInfoText */ .ZN.secondaryInfoText,
            fontSize: theme.typography.caption.fontSize
        },
        [`&  > .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].icon */ .Z.icon}`]: {
            alignItems: 'center'
        },
        [`&  > .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].action */ .Z.action}`]: {
            alignItems: 'center'
        },
        // standard
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardInfo */ .Z.standardInfo}`]: {
            backgroundColor: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .getMaskColor */ .nb)(theme).infoBackground
        },
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardInfo */ .Z.standardInfo} .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].icon */ .Z.icon}`]: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .getMaskColor */ .nb)(theme).secondaryInfoText
        },
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardInfo */ .Z.standardInfo} .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].action */ .Z.action}`]: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .getMaskColor */ .nb)(theme).secondaryInfoText
        },
        // error
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardError */ .Z.standardError}`]: {
            backgroundColor: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.redMain.alpha */ .ZN.redMain.alpha(0.1)
        },
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardError */ .Z.standardError} .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].icon */ .Z.icon}`]: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .getMaskColor */ .nb)(theme).redMain,
            'path:first-child': {
                fill: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.redMain.alpha */ .ZN.redMain.alpha(0.5)
            },
            path: {
                fill: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .getMaskColor */ .nb)(theme).redMain
            }
        },
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardError */ .Z.standardError} .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].action */ .Z.action}`]: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .getMaskColor */ .nb)(theme).redMain
        },
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardError */ .Z.standardError} .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].message */ .Z.message}`]: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .getMaskColor */ .nb)(theme).redMain
        },
        // success
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardSuccess */ .Z.standardSuccess}`]: {
            backgroundColor: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.greenMain.alpha */ .ZN.greenMain.alpha(0.1)
        },
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardSuccess */ .Z.standardSuccess} .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].icon */ .Z.icon}`]: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .getMaskColor */ .nb)(theme).greenMain
        },
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardSuccess */ .Z.standardSuccess} .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].action */ .Z.action}`]: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .getMaskColor */ .nb)(theme).greenMain
        },
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].standardSuccess */ .Z.standardSuccess} .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].message */ .Z.message}`]: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .getMaskColor */ .nb)(theme).greenMain
        }
    })
);
const AlertIconMapping = {
    error: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .RiskIcon */ .w, {}),
    info: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__/* .InfoIcon */ .s, {}),
    success: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__/* .SuccessIcon */ .t, {}),
    warning: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__/* .InfoIcon */ .s, {})
};
const MaskAlert = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ description , type ='info'  })=>{
    const [openAlert, setOpenAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        in: openAlert,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InfoAlert, {
            icon: AlertIconMapping[type],
            severity: type,
            action: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                "aria-label": "close",
                color: "inherit",
                size: "small",
                onClick: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setOpenAlert(false)
                , []),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    fontSize: "inherit"
                })
            }),
            children: description
        })
    }));
});


/***/ }),

/***/ 32596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92332);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87409);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34382);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84258);





const PasswordField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref)=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskTextField */ .FU, {
        ...props,
        ref: ref,
        type: showPassword ? 'text' : 'password',
        InputProps: {
            ...props.InputProps,
            endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    "aria-label": "toggle password visibility",
                    onClick: ()=>setShowPassword(!showPassword)
                    ,
                    onMouseDown: (event)=>event.preventDefault()
                    ,
                    edge: "end",
                    size: "small",
                    children: showPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .EyeOffIcon */ .X, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .EyeIcon */ .t, {})
                })
            })
        }
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordField);


/***/ }),

/***/ 14087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ BackupInfoCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20333);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13152);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18287);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57753);
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98162);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72753);






const BackupInfoCard = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ info  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        variant: "background",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
            container: true,
            spacing: 2,
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
            sx: {
                padding: '8px'
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                    item: true,
                    xs: 10,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                variant: "body2",
                                children: economizeAbstract(info.abstract)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                variant: "body2",
                                children: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(info.uploadedAt), 'yyyy-MM-dd HH:mm')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                    item: true,
                    xs: 2,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            align: "right",
                            variant: "body2",
                            children: [
                                Math.ceil(info.size / 1024),
                                "K"
                            ]
                        })
                    })
                })
            ]
        })
    }));
});
function economizeAbstract(input) {
    if (!input.length) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: "error"
    }));
    if (input.length < 30) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: input
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        title: input,
        placement: "top",
        arrow: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                input.slice(0, 30),
                "...(",
                input.split(',').length,
                ")"
            ]
        })
    }));
}


/***/ }),

/***/ 4047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ LoadingCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16787);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13152);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74491);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);




const LoadingCard = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ text ='Loading'  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        variant: "background",
        sx: {
            width: '100%'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            justifyContent: "center",
            alignItems: "center",
            sx: {
                minHeight: 140
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .LoadingIcon */ .H, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    variant: "caption",
                    marginBottom: 0,
                    marginTop: "8px",
                    children: text
                })
            ]
        })
    }));
});


/***/ }),

/***/ 99323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eu": () => (/* binding */ fetchBackupValue),
/* harmony export */   "VP": () => (/* binding */ verifyCode),
/* harmony export */   "Wg": () => (/* binding */ useTrendingDataSource),
/* harmony export */   "Z3": () => (/* binding */ sendCode),
/* harmony export */   "ZK": () => (/* binding */ useLanguage),
/* harmony export */   "iQ": () => (/* binding */ fetchUploadLink),
/* harmony export */   "iT": () => (/* binding */ fetchDownloadLink),
/* harmony export */   "zy": () => (/* binding */ uploadBackupValue)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98193);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85971);


const [useLanguage] = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getLanguage */ .K9.Settings.getLanguage, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.languageSettings.on */ .Vm.events.languageSettings.on);
const [useTrendingDataSource] = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getTrendingDataSource */ .K9.Settings.getTrendingDataSource, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.currentDataProviderSettings.on */ .Vm.events.currentDataProviderSettings.on);
const BASE_RUL = 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api';
const withErrorMiddleware = (handler)=>async (res)=>{
        const result = await handler(res);
        if (!res.ok) {
            // eslint-disable-next-line no-throw-literal
            throw {
                status: res.status,
                ...result
            };
        }
        return result;
    }
;
const fetchBase = (input, init, handler = (res)=>res.json()
)=>fetch(input, init).then(withErrorMiddleware(handler))
;
const fetchBaseInstance = (baseURL)=>(input, init)=>fetchBase(`${baseURL}/${input}`, init)
;
const fetchBackupInstance = fetchBaseInstance(BASE_RUL);
const sendCode = ({ account , type , scenario , locale  })=>{
    return fetchBackupInstance('v1/backup/send_code', {
        method: 'POST',
        body: JSON.stringify({
            account: account.replace(' ', ''),
            account_type: type,
            scenario,
            locale
        })
    });
};
const fetchUploadLink = ({ code , account , abstract , type  })=>{
    return fetchBackupInstance('v1/backup/upload', {
        method: 'POST',
        body: JSON.stringify({
            code,
            account_type: type,
            account: account.replace(' ', ''),
            abstract
        })
    }).then((res)=>res.upload_url
    );
};
const fetchDownloadLink = ({ account , code , type  })=>{
    return fetchBackupInstance('v1/backup/download', {
        method: 'POST',
        body: JSON.stringify({
            code,
            account_type: type,
            account: account.replace(' ', '')
        })
    }).then(({ abstract , download_url , size , uploaded_at  })=>{
        return {
            downloadURL: download_url,
            size: size,
            uploadedAt: uploaded_at,
            abstract: abstract
        };
    });
};
const verifyCode = ({ account , type , code  })=>{
    return fetchBackupInstance('v1/backup/validate_code', {
        method: 'POST',
        body: JSON.stringify({
            account: account.replace(' ', ''),
            account_type: type,
            code
        })
    });
};
const fetchBackupValue = (downloadLink)=>{
    return fetchBase(downloadLink, {
        method: 'GET'
    }, (res)=>res.arrayBuffer()
    );
};
const uploadBackupValue = (uploadLink, content)=>{
    return fetch(uploadLink, {
        method: 'PUT',
        // mode: 'no-cors',
        headers: new Headers({
            'content-type': 'application/octet-stream'
        }),
        body: content
    });
};


/***/ }),

/***/ 60708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SettingPasswordDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18287);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74491);
/* harmony import */ var _hooks_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60838);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21692);
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35275);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43021);
/* harmony import */ var _components_PasswordField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32596);









function SettingPasswordDialog({ open , onClose , onSet  }) {
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_4__/* .useDashboardI18N */ .x)();
    const { showSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .useCustomSnackbar */ .Ii)();
    const { user , updateUser  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_hooks_UserContext__WEBPACK_IMPORTED_MODULE_3__/* .UserContext */ .S);
    const [incorrectPassword, setIncorrectPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [passwordValid, setValidState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [passwordMatched, setMatchState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [repeatPassword, setRepeatPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const passwordRule = t.settings_password_rule();
    const handleClose = ()=>{
        setPassword('');
        onClose();
    };
    const handleConfirm = ()=>{
        if (user.backupPassword) {
            if (user.backupPassword !== password) {
                setIncorrectPassword(true);
                return;
            }
        }
        if (!newPassword) return setValidState(false);
        const matched = newPassword === repeatPassword;
        setMatchState(matched);
        if (passwordValid && matched) {
            const msg = user.backupPassword ? t.settings_alert_password_updated() : t.settings_alert_password_set();
            showSnackbar(msg, {
                variant: 'success'
            });
            updateUser({
                backupPassword: newPassword
            });
            onSet === null || onSet === void 0 ? void 0 : onSet();
            onClose();
        }
    };
    const validCheck = ()=>{
        const isValid = _regexp__WEBPACK_IMPORTED_MODULE_7__/* .passwordRegexp.test */ .qH.test(newPassword);
        setValidState(isValid);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!newPassword || !repeatPassword) {
            setMatchState(true);
        }
        if (!newPassword) {
            setValidState(true);
        }
    }, [
        newPassword,
        repeatPassword
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: user.backupPassword ? t.settings_dialogs_change_backup_password() : t.settings_dialogs_setting_backup_password(),
        maxWidth: "xs",
        open: open,
        onClose: handleClose,
        onConfirm: handleConfirm,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            sx: {
                minHeight: '160px'
            },
            py: 1,
            children: [
                user.backupPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fullWidth: true,
                    value: password,
                    onChange: (event)=>setPassword(event.target.value)
                    ,
                    placeholder: t.settings_label_backup_password(),
                    sx: {
                        marginBottom: '16px'
                    },
                    error: incorrectPassword,
                    helperText: incorrectPassword ? t.settings_dialogs_incorrect_password() : ''
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fullWidth: true,
                    value: newPassword,
                    onChange: (event)=>setNewPassword(event.target.value)
                    ,
                    onBlur: validCheck,
                    placeholder: user.backupPassword ? t.settings_label_new_backup_password() : t.settings_label_backup_password(),
                    sx: {
                        marginBottom: '16px'
                    },
                    error: !passwordValid,
                    helperText: passwordValid ? '' : passwordRule
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fullWidth: true,
                    value: repeatPassword,
                    onChange: (event)=>setRepeatPassword(event.target.value)
                    ,
                    placeholder: t.settings_label_re_enter(),
                    error: !passwordMatched,
                    helperText: !passwordMatched ? t.settings_dialogs_inconsistency_password() : ''
                }),
                passwordValid && passwordMatched ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    sx: {
                        fontSize: '12px',
                        padding: '8px 0'
                    },
                    children: passwordRule
                }) : null
            ]
        })
    }));
};


/***/ }),

/***/ 60838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ UserContext),
  "d": () => (/* binding */ UserProvider)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/components/dialogs/SettingPasswordDialog.tsx
var SettingPasswordDialog = __webpack_require__(60708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(68681);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(72212);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(21692);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.2.2_react@18.0.0-rc.2/node_modules/react-router/index.js
var react_router = __webpack_require__(92186);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ../dashboard/src/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(32596);
;// CONCATENATED MODULE: ../dashboard/src/components/BackupPasswordConfirmDialog/index.tsx









const BackupPasswordConfirmDialog = /*#__PURE__*/ (0,react.memo)(({ onConfirmed , onClose , open , option  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { user  } = (0,react.useContext)(UserContext);
    const [password, setPassword] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const onSubmitPassword = ()=>{
        if (user.backupPassword === password) {
            onConfirmed();
        } else {
            setError(t.settings_dialogs_incorrect_password());
        }
    };
    const title = (0,react.useMemo)(()=>{
        var ref;
        return (ref = user.backupPassword ? option === null || option === void 0 ? void 0 : option.confirmTitle : option === null || option === void 0 ? void 0 : option.tipTitle) !== null && ref !== void 0 ? ref : t.confirm_password();
    }, [
        option === null || option === void 0 ? void 0 : option.tipTitle,
        option === null || option === void 0 ? void 0 : option.confirmTitle
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* MaskDialog */.Df, {
        open: open,
        title: title,
        onClose: onClose,
        maxWidth: "xs",
        children: [
            !user.backupPassword && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                        sx: {
                            py: 0,
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            fontSize: 13,
                            children: option === null || option === void 0 ? void 0 : option.tipContent
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "secondary",
                                onClick: onClose,
                                children: t.personas_cancel()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                onClick: ()=>navigate(shared_base_src/* DashboardRoutes.Settings */.vq.Settings, {
                                        state: {
                                            open: 'password'
                                        }
                                    })
                                ,
                                children: t.settings()
                            })
                        ]
                    })
                ]
            }),
            user.backupPassword && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                        sx: {
                            py: 0,
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                            sx: {
                                flex: 1
                            },
                            onChange: (e)=>{
                                setPassword(e.currentTarget.value);
                                setError('');
                            },
                            placeholder: t.settings_label_backup_password(),
                            error: !!error,
                            helperText: error
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "secondary",
                                onClick: onClose,
                                children: t.personas_cancel()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                disabled: !!error,
                                onClick: onSubmitPassword,
                                children: t.personas_confirm()
                            })
                        ]
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/hooks/UserContext.tsx




const UserContext = /*#__PURE__*/ (0,react.createContext)({
    user: {
        backupPassword: '',
        email: '',
        phone: '',
        backupMethod: '',
        backupAt: ''
    },
    updateUser: ()=>{
        throw new Error('Context not provided.');
    },
    ensurePasswordSet: ()=>{
        throw new Error('Context not provided.');
    },
    confirmPassword: ()=>{
        throw new Error('Context not provided.');
    }
});
function UserProvider({ children  }) {
    const backupPassword = localStorage.getItem('backupPassword');
    const [user, setUser] = (0,react.useState)({
        backupPassword: backupPassword && atob(backupPassword),
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        backupMethod: localStorage.getItem('backupMethod'),
        backupAt: localStorage.getItem('backupAt')
    });
    const [callback, setCallback] = (0,react.useState)(null);
    const [confirmCallback, setConfirmCallback] = (0,react.useState)(null);
    const [confirmOption, setConfirmOption] = (0,react.useState)();
    const updateUser = (obj)=>{
        const updated = {
            ...user,
            ...obj
        };
        setUser(updated);
        var _backupPassword;
        localStorage.setItem('backupPassword', btoa((_backupPassword = updated.backupPassword) !== null && _backupPassword !== void 0 ? _backupPassword : ''));
        localStorage.setItem('email', updated.email || '');
        localStorage.setItem('phone', updated.phone || '');
        localStorage.setItem('backupMethod', updated.backupMethod || '');
        localStorage.setItem('backupAt', updated.backupAt || '');
    };
    const ensurePasswordSet = (f)=>{
        if (user.backupPassword) f();
        else setCallback([
            f
        ]);
    };
    const confirmPassword = (f, option)=>{
        const { force =true  } = option !== null && option !== void 0 ? option : {};
        if (!force && !user.backupPassword) {
            f();
        } else {
            setConfirmCallback([
                f
            ]);
            setConfirmOption(option);
        }
    };
    const onSet = ()=>{
        var ref;
        callback === null || callback === void 0 ? void 0 : (ref = callback[0]) === null || ref === void 0 ? void 0 : ref.call(callback);
    };
    const onConfirmed = ()=>{
        var ref;
        confirmCallback === null || confirmCallback === void 0 ? void 0 : (ref = confirmCallback[0]) === null || ref === void 0 ? void 0 : ref.call(confirmCallback);
        setConfirmCallback(null);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(UserContext.Provider, {
        value: {
            user,
            updateUser,
            ensurePasswordSet,
            confirmPassword
        },
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingPasswordDialog/* default */.Z, {
                open: !!callback,
                onSet: onSet,
                onClose: ()=>setCallback(null)
            }),
            !!confirmCallback && /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupPasswordConfirmDialog, {
                option: confirmOption,
                open: !!confirmCallback,
                onConfirmed: onConfirmed,
                onClose: ()=>setConfirmCallback(null)
            })
        ]
    }));
}


/***/ }),

/***/ 35275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LX": () => (/* binding */ emailRegexp),
/* harmony export */   "qH": () => (/* binding */ passwordRegexp),
/* harmony export */   "wZ": () => (/* binding */ phoneRegexp)
/* harmony export */ });
const passwordRegexp = /^(?=.{8,20}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\dA-Za-z]).*/;
const emailRegexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegexp = /^(\+?([ .-])?\d{1,2}([ .-])?)?(\(?\d{3}\)?|\d{3})([ .-])?(\d{3}([ .-])?\d{4})/;


/***/ }),

/***/ 33044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$4": () => (/* binding */ Scenario),
/* harmony export */   "Qm": () => (/* binding */ AccountType),
/* harmony export */   "go": () => (/* binding */ Locale)
/* harmony export */ });
var AccountType;
(function(AccountType) {
    AccountType["email"] = "email";
    AccountType["phone"] = "phone";
})(AccountType || (AccountType = {}));
var Scenario;
(function(Scenario) {
    Scenario["backup"] = "backup";
    Scenario["create"] = 'create_binding';
    Scenario["change"] = 'change_binding';
})(Scenario || (Scenario = {}));
var Locale;
(function(Locale) {
    Locale["en"] = "en";
    Locale["zh"] = "zh";
})(Locale || (Locale = {}));


/***/ }),

/***/ 84258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EyeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const EyeIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), undefined, '0 0 20 20');


/***/ }),

/***/ 34382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ EyeOffIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const EyeOffIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeOffIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#111432",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#ffffff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), undefined, '0 0 20 20');


/***/ }),

/***/ 17974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ InfoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const InfoIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Info', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.2",
            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V11Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z",
            fill: "currentColor"
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 57214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SuccessIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const SuccessIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Success', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".2",
            d: "M32 58.667c14.727 0 26.667-11.94 26.667-26.667 0-14.728-11.94-26.667-26.667-26.667C17.272 5.333 5.333 17.273 5.333 32c0 14.728 11.94 26.667 26.667 26.667z",
            fill: "#77E0B5"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.46 22.027c1.09.99 1.17 2.677.18 3.767L31.306 40.46a2.667 2.667 0 01-3.708.23l-9.333-8a2.667 2.667 0 113.47-4.049l7.367 6.314 11.591-12.75a2.667 2.667 0 013.767-.18z",
            fill: "#77E0B5"
        })
    ]
}), '0 0 64 64');


/***/ })

}]);