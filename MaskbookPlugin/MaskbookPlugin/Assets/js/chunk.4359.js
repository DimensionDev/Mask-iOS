"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8177],{

/***/ 19732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ File1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const File1 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('File', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.5",
            d: "M8.08752 12.9375C8.08752 9.62379 10.4 6.9375 13.2525 6.9375H28.7473C31.5998 6.9375 33.9123 9.62379 33.9123 12.9375V36.9375C33.9123 40.2512 31.5998 42.9375 28.7473 42.9375H13.2525C10.4 42.9375 8.08752 40.2512 8.08752 36.9375V12.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.1",
            d: "M33.9122 20.3906V12.9375C33.9122 9.62379 31.5998 6.9375 28.7473 6.9375H22.3314L33.9122 20.3906Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M22.3314 6.9375L22.3314 14.3906C22.3314 17.7043 24.6439 20.3906 27.4964 20.3906L33.9122 20.3906L22.3314 6.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22.7565 22.8277C22.2814 22.2145 21.649 21.8834 21.0023 21.8834C20.3556 21.8834 19.7233 22.2145 19.2482 22.8277C18.7715 23.443 18.4959 24.2895 18.4959 25.1833V27.7068H23.5088V25.1833C23.5088 24.2895 23.2332 23.443 22.7565 22.8277ZM24.5113 27.7068V25.1833C24.5113 24.0179 24.1531 22.8894 23.5017 22.0486C22.8487 21.2057 21.951 20.7188 21.0023 20.7188C20.0536 20.7188 19.1559 21.2057 18.503 22.0486C17.8515 22.8894 17.4933 24.0179 17.4933 25.1833V27.7068H17.1007C16.2174 27.7068 15.4855 28.5263 15.4855 29.5597V34.0066C15.4855 35.0399 16.2174 35.8594 17.1007 35.8594H24.8985C25.7819 35.8594 26.5138 35.0399 26.5138 34.0066V29.5597C26.5138 28.5263 25.7819 27.7068 24.8985 27.7068H24.5113ZM25.5112 29.5597C25.5112 29.1896 25.2456 28.8715 24.8985 28.8715H17.1007C16.7536 28.8715 16.488 29.1896 16.488 29.5597V34.0066C16.488 34.3766 16.7536 34.6948 17.1007 34.6948H24.8985C25.2456 34.6948 25.5112 34.3766 25.5112 34.0066V29.5597Z",
            fill: "white"
        })
    ]
}), '0 0 42 48', [
    42,
    48
]);



/***/ }),

/***/ 71955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97448);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80050);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    textField: {
        width: '100%'
    },
    textFieldInput: {
        backgroundColor: '#F7F9FA'
    },
    input: {
        padding: '11px 9px',
        fontSize: 12
    }
});
const StyledInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.useStylesExtends)(useStyles(), props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        inputRef: ref,
        variant: "filled",
        className: classes.textField,
        inputProps: {
            className: classes.input
        },
        InputProps: {
            disableUnderline: true,
            classes: {
                root: classes.textFieldInput
            }
        },
        ...props
    }));
}));


/***/ }),

/***/ 68177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46754);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20261);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42316);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57652);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14175);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _components_NetworkSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32263);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34054);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1173);
/* harmony import */ var _components_StyledInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71955);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19732);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6615);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88088);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35313);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37186);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 10px'
    },
    title: {
        color: '#15181B',
        fontSize: 12,
        fontHeight: '16px'
    },
    content: {
        flex: 1,
        backgroundColor: '#F7F9FA',
        display: 'flex',
        flexDirection: 'column'
    },
    tabPanel: {
        padding: 16,
        backgroundColor: '#ffffff'
    },
    label: {
        color: '#1C68F3',
        fontSize: 12,
        lineHeight: '16px',
        marginBottom: 10
    },
    button: {
        padding: '9px 0',
        borderRadius: 20
    },
    placeholder: {
        padding: '35px 0',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#F7F9FA',
        fontSize: 12,
        lineHeight: '16px',
        color: '#15181B'
    },
    privateKey: {
        backgroundColor: '#F7F9FA',
        fontSize: 12,
        lineHeight: '16px',
        color: '#15181B',
        borderRadius: 8,
        padding: '10px 14px',
        height: 140,
        wordBreak: 'break-word',
        userSelect: 'text'
    },
    tip: {
        marginTop: 10,
        color: '#FF5F5F',
        fontSize: 12,
        lineHeight: '14px'
    }
});
const StyledTabs = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .ZP)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)`
    &.${_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default.root */ .Z.root} {
        min-height: unset;
        background-color: #f7f9fa;
        padding-top: 6px;
    }
    &.${_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default.indicator */ .Z.indicator} {
        display: none;
    }
    &.${_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default.flexContainer */ .Z.flexContainer} {
        justify-content: center;
    }
`;
const StyledTab = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .ZP)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)`
    &.${_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default.root */ .Z.root} {
        font-size: 12px;
        line-height: 16px;
        min-height: unset;
        min-width: 145px;
        padding: 7px 0;
        background-color: #f7f9fa;
        border-radius: 4px 4px 0px 0px;
        color: #15181b;
    }
    &.${_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default.selected */ .Z.selected} {
        background-color: white;
        font-weight: 500;
    }
`;
var BackupTabs;
(function(BackupTabs1) {
    BackupTabs1["JsonFile"] = 'Json File';
    BackupTabs1["PrivateKey"] = 'Private Key';
})(BackupTabs || (BackupTabs = {
}));
const BackupWallet = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const wallet = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .Osb)();
    const [confirmed, setConfirmed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(BackupTabs.JsonFile);
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { value: [privateKeyInHex] = [
        '',
        []
    ]  } = (0,react_use__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z)(async ()=>{
        if (!wallet) return;
        const record = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletRPC.getWallet */ .V.getWallet(wallet.address);
        if (!record) return;
        const { privateKeyInHex: privateKeyInHex1  } = record._private_key_ ? await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletRPC.recoverWalletFromPrivateKey */ .V.recoverWalletFromPrivateKey(record._private_key_) : await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletRPC.recoverWalletFromMnemonicWords */ .V.recoverWalletFromMnemonicWords(record.mnemonic, record.passphrase);
        return [
            privateKeyInHex1,
            record.mnemonic
        ];
    }, [
        wallet
    ]);
    const onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setConfirmed(true);
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                        className: classes.title,
                        children: t('popups_wallet_backup_wallet')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NetworkSelector__WEBPACK_IMPORTED_MODULE_3__/* .NetworkSelector */ .k, {
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.content,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_lab__WEBPACK_IMPORTED_MODULE_15__/* .default */ .ZP, {
                    value: currentTab,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTabs, {
                            value: currentTab,
                            onChange: (event, tab)=>setCurrentTab(tab)
                            ,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTab, {
                                    label: t('popups_wallet_backup_json_file'),
                                    value: BackupTabs.JsonFile
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTab, {
                                    label: t('popups_wallet_backup_private_key'),
                                    value: BackupTabs.PrivateKey
                                })
                            ]
                        }),
                        confirmed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_lab__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                                    value: BackupTabs.JsonFile,
                                    className: classes.tabPanel,
                                    style: {
                                        flex: currentTab === BackupTabs.JsonFile ? '1' : '0'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: classes.placeholder,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_17__/* .File */ .$, {
                                                style: {
                                                    fontSize: 32,
                                                    width: 32,
                                                    height: 32
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                                            className: classes.tip,
                                            children: t('popups_wallet_backup_json_file_confirm_password_tip')
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_lab__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                                    value: BackupTabs.PrivateKey,
                                    className: classes.tabPanel,
                                    style: {
                                        flex: currentTab === BackupTabs.PrivateKey ? '1' : '0'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                                            className: classes.privateKey,
                                            children: privateKeyInHex
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                                            className: classes.tip,
                                            children: t('popups_wallet_backup_private_key_tip')
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classes.tabPanel,
                            style: {
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                                    className: classes.label,
                                    children: "Confirm with password"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_4__/* .StyledInput */ .F, {
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value)
                                    ,
                                    placeholder: t('popups_wallet_backup_input_password')
                                })
                            ]
                        })
                    ]
                })
            }),
            !(confirmed && currentTab === BackupTabs.PrivateKey) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                style: {
                    padding: 16
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
                    variant: "contained",
                    fullWidth: true,
                    className: classes.button,
                    disabled: !confirmed && !password,
                    onClick: onConfirm,
                    children: !confirmed ? t('popups_wallet_next') : t('download')
                })
            }) : null
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackupWallet);


/***/ })

}]);