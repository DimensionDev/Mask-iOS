"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9514],{

/***/ 16365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.27.0_react@18.0.0-rc.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(67947);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.0/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 13943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(97538);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(93086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(84879);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(20153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.69_9eb0130ea7f00b7e78e913147317bb83/node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(99572);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.69_9eb0130ea7f00b7e78e913147317bb83/node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(74707);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.69_9eb0130ea7f00b7e78e913147317bb83/node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(82298);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(20895);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabPanelUtilityClass, classes);
};

const TabPanelRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
const TabPanel = /*#__PURE__*/react.forwardRef(function TabPanel(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabPanel'
  });

  const {
    children,
    className,
    value
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(ownerState);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m["default"])(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    ownerState: ownerState
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ }),

/***/ 44875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FileUpload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20235);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67020);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82314);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84176);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '100%',
        borderRadius: 8
    },
    container: {
        textAlign: 'center'
    },
    file: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        opacity: 0,
        cursor: 'pointer'
    },
    text: {
        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
        fontSize: 13
    }
});
function FileUpload({ width , height , readAsText , onChange , accept , icon  }) {
    const { classes  } = useStyles();
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const handleChange = ({ target  })=>{
        if (target.files) {
            setFile(target.files[0]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (file) {
            if (readAsText) {
                (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .blobToText */ .Gx)(file).then((result)=>onChange(file, result)
                );
            } else {
                onChange(file);
            }
        }
    }, [
        file,
        readAsText,
        onChange
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        variant: "background",
        className: classes.root,
        style: {
            width,
            height
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.container,
                children: [
                    icon !== null && icon !== void 0 ? icon : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .File */ .$, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: classes.text,
                        children: "Please click or drag the file to here"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                type: "file",
                className: classes.file,
                accept: accept,
                onChange: handleChange
            })
        ]
    }));
};


/***/ }),

/***/ 19514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignIn)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/RowLayout.tsx
var RowLayout = __webpack_require__(98086);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentHeader.tsx
var ColumnContentHeader = __webpack_require__(81634);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(61382);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentLayout.tsx + 1 modules
var ColumnContentLayout = __webpack_require__(66248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.0_history@5.2.0+react@18.0.0-rc.0/node_modules/react-router/index.js
var react_router = __webpack_require__(63552);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(88785);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(20235);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(77964);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js
var format = __webpack_require__(20478);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/BackupPreviewCard.tsx






const useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        root: {
            padding: '19px 24px 9px',
            minHeight: 205,
            borderRadius: 8,
            background: theme_src/* MaskColorVar.infoBackground */.ZN.infoBackground,
            width: '100%'
        },
        item: {
            paddingBottom: 10,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14
        },
        sub: {
            paddingLeft: 30
        }
    })
);
function BackupPreviewCard({ json  }) {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = useStyles();
    const records = [
        {
            name: t.settings_backup_preview_personas(),
            value: json.personas
        },
        {
            name: t.settings_backup_preview_associated_account(),
            value: json.accounts,
            sub: true
        },
        {
            name: t.settings_backup_preview_posts(),
            value: json.posts,
            sub: true
        },
        {
            name: t.settings_backup_preview_contacts(),
            value: json.contacts,
            sub: true
        },
        {
            name: t.settings_backup_preview_fils(),
            value: json.files,
            sub: true
        },
        {
            name: t.settings_backup_preview_wallets(),
            value: json.wallets
        },
        {
            name: t.settings_backup_preview_created_at(),
            value: json.createdAt ? (0,format/* default */.Z)(json.createdAt, 'MM-dd-yyyy HH:mm:ss') : ''
        }, 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: records.map((record, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()(classes.item, record.sub ? classes.sub : ''),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        children: record.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        children: record.value
                    })
                ]
            }, idx)
        )
    }));
};

// EXTERNAL MODULE: ../dashboard/src/components/MaskAlert/index.tsx
var MaskAlert = __webpack_require__(81142);
// EXTERNAL MODULE: ../dashboard/src/components/FileUpload/index.tsx
var FileUpload = __webpack_require__(44875);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ButtonContainer.tsx
var ButtonContainer = __webpack_require__(12638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_8495c1478c7f1d196df61d0bdcd91148/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(84176);
// EXTERNAL MODULE: ../dashboard/src/components/Restore/steps/LoadingCard.tsx
var LoadingCard = __webpack_require__(95147);
// EXTERNAL MODULE: ../backup-format/src/index.ts + 3 modules
var backup_format_src = __webpack_require__(44599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(82151);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
var decode = __webpack_require__(92415);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(21526);
// EXTERNAL MODULE: ../dashboard/src/components/LoadingButton/index.tsx
var LoadingButton = __webpack_require__(62641);
// EXTERNAL MODULE: ../dashboard/src/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(33602);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromLocal.tsx




















var RestoreStatus;
(function(RestoreStatus) {
    RestoreStatus[RestoreStatus["WaitingInput"] = 0] = "WaitingInput";
    RestoreStatus[RestoreStatus["Verifying"] = 1] = "Verifying";
    RestoreStatus[RestoreStatus["Verified"] = 2] = "Verified";
    RestoreStatus[RestoreStatus["Decrypting"] = 3] = "Decrypting";
})(RestoreStatus || (RestoreStatus = {}));
const supportedFileType = {
    json: 'application/json',
    octetStream: 'application/octet-stream',
    macBinary: 'application/macbinary'
};
const RestoreFromLocal = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { showSnackbar  } = (0,theme_src/* useCustomSnackbar */.Ii)();
    const { currentPersona , changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const [file1, setFile] = (0,react.useState)(null);
    const [json, setJSON] = (0,react.useState)(null);
    const [backupValue, setBackupValue] = (0,react.useState)('');
    const [backupId, setBackupId] = (0,react.useState)('');
    const [password, setPassword] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const [restoreStatus, setRestoreStatus] = (0,react.useState)(RestoreStatus.WaitingInput);
    const handleSetFile = (0,react.useCallback)(async (file)=>{
        setFile(file);
        if (file.type === supportedFileType.json) {
            const content = await (0,esm/* blobToText */.Gx)(file);
            setBackupValue(content);
        } else if ([
            supportedFileType.octetStream,
            supportedFileType.macBinary
        ].includes(file.type)) {
            setRestoreStatus(RestoreStatus.Decrypting);
        } else {
            showSnackbar(t.sign_in_account_cloud_backup_not_support(), {
                variant: 'error'
            });
        }
    }, []);
    (0,useAsync/* default */.Z)(async ()=>{
        if (!backupValue) return;
        setRestoreStatus(RestoreStatus.Verifying);
        try {
            const backupInfo = await API/* Services.Welcome.parseBackupStr */.K9.Welcome.parseBackupStr(backupValue);
            if (backupInfo) {
                setJSON(backupInfo.info);
                setBackupId(backupInfo.id);
                setRestoreStatus(RestoreStatus.Verified);
            } else {
                setRestoreStatus(RestoreStatus.WaitingInput);
                setBackupValue('');
            }
        } catch  {
            showSnackbar(t.sign_in_account_cloud_backup_not_support(), {
                variant: 'error'
            });
            setRestoreStatus(RestoreStatus.WaitingInput);
            setBackupValue('');
        }
    }, [
        backupValue
    ]);
    const decryptBackupFile = (0,react.useCallback)(async ()=>{
        if (!file1) return;
        try {
            const decrypted = await (0,backup_format_src/* decryptBackup */.lK)((0,encode/* encode */.c)(password), await file1.arrayBuffer());
            setBackupValue(JSON.stringify((0,decode/* decode */.Jx)(decrypted)));
        } catch (error_) {
            setError(t.sign_in_account_cloud_backup_decrypt_failed());
        }
    }, [
        file1,
        password
    ]);
    const restoreCallback = (0,react.useCallback)(async ()=>{
        if (!currentPersona) {
            const lastedPersona = await API/* Services.Identity.queryLastPersonaCreated */.K9.Identity.queryLastPersonaCreated();
            if (lastedPersona) {
                await changeCurrentPersona(lastedPersona.identifier);
            }
        }
        navigate(src/* DashboardRoutes.Personas */.vq.Personas, {
            replace: true
        });
    }, [
        currentPersona,
        changeCurrentPersona
    ]);
    const restoreDB = (0,react.useCallback)(async ()=>{
        try {
            // If json has wallets, restore in popup.
            if (json === null || json === void 0 ? void 0 : json.wallets) {
                await API/* Services.Welcome.checkPermissionAndOpenWalletRecovery */.K9.Welcome.checkPermissionAndOpenWalletRecovery(backupId);
                return;
            } else {
                await API/* Services.Welcome.checkPermissionsAndRestore */.K9.Welcome.checkPermissionsAndRestore(backupId);
                await restoreCallback();
            }
        } catch  {
            showSnackbar(t.sign_in_account_cloud_backup_failed(), {
                variant: 'error'
            });
        }
    }, [
        backupId,
        json
    ]);
    (0,react.useEffect)(()=>{
        return API/* Messages.events.restoreSuccess.on */.Vm.events.restoreSuccess.on(restoreCallback);
    }, [
        restoreCallback
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    width: '100%'
                },
                children: [
                    restoreStatus === RestoreStatus.Verifying && /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {
                        text: "Verifying"
                    }),
                    restoreStatus === RestoreStatus.WaitingInput && /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                        variant: "background",
                        sx: {
                            height: '144px'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileUpload/* default */.Z, {
                            onChange: handleSetFile,
                            accept: Object.values(supportedFileType).join(',')
                        })
                    }),
                    restoreStatus === RestoreStatus.Verified && json && /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupPreviewCard, {
                        json: json
                    }),
                    restoreStatus === RestoreStatus.Decrypting && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            mt: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                            placeholder: t.sign_in_account_cloud_backup_password(),
                            type: "password",
                            onChange: (e)=>setPassword(e.currentTarget.value)
                            ,
                            error: !!error,
                            helperText: error
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* LoadingButton */.f, {
                    variant: "rounded",
                    size: "large",
                    color: "primary",
                    onClick: restoreStatus === RestoreStatus.Decrypting ? decryptBackupFile : restoreDB,
                    disabled: restoreStatus === RestoreStatus.Verified ? !json : !file1,
                    children: restoreStatus !== RestoreStatus.Verified ? t.next() : t.restore()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    pt: 4,
                    pb: 2,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_local_backup_warning()
                })
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/components/Mnemonic/index.tsx + 2 modules
var Mnemonic = __webpack_require__(5565);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useList.js
var useList = __webpack_require__(40111);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/some.js
var some = __webpack_require__(40250);
// EXTERNAL MODULE: ../dashboard/src/pages/SignUp/routePath.ts
var routePath = __webpack_require__(56641);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromMnemonic.tsx
















const RestoreFromMnemonic_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        error: {
            marginTop: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            color: (0,theme_src/* getMaskColor */.nb)(theme).redMain,
            borderLeft: `2px solid ${(0,theme_src/* getMaskColor */.nb)(theme).redMain}`
        }
    })
);
const RestoreFromMnemonic = ()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { classes  } = RestoreFromMnemonic_useStyles();
    const [error, setError] = (0,react.useState)('');
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const t = (0,locales/* useDashboardI18N */.x)();
    const [values, { updateAt , set: setMnemonic  }] = (0,useList/* default */.Z)(Array.from({
        length: 12
    }).fill(''));
    const handleImport = async ()=>{
        try {
            const persona = await API/* Services.Identity.queryPersonaByMnemonic */.K9.Identity.queryPersonaByMnemonic(values.join(' '), '');
            if (persona) {
                await changeCurrentPersona(persona.identifier);
                // Waiting persona changed event notify
                await (0,src/* delay */.gw)(100);
                navigate(src/* DashboardRoutes.Personas */.vq.Personas, {
                    replace: true
                });
            } else {
                navigate(`${src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.PersonaRecovery */.X.PersonaRecovery}`, {
                    replace: false,
                    state: {
                        mnemonic: values
                    }
                });
            }
        } catch  {
            setError(t.sign_in_account_mnemonic_confirm_failed());
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Mnemonic/* DesktopMnemonicConfirm */.q, {
                        onChange: (word, index)=>{
                            updateAt(index, word);
                            setError('');
                        },
                        puzzleWords: values,
                        setAll: setMnemonic
                    }),
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        variant: "body2",
                        children: error
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* LoadingButton */.f, {
                    variant: "rounded",
                    size: "large",
                    onClick: handleImport,
                    disabled: (0,some/* default */.Z)(values, (value)=>!value
                    ),
                    children: t.confirm()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    pt: 4,
                    pb: 2,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_identity_warning()
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/api.ts
var api = __webpack_require__(1226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(56838);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useMap.js
var useMap = __webpack_require__(92899);
;// CONCATENATED MODULE: ../dashboard/src/components/Stepper/index.tsx





const Stepper_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    hidden: {
        position: 'absolute',
        left: 10000
    }
});
const Step = ({ children , toStep , params  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children(toStep, params)
    }));
};
const Stepper = (props)=>{
    const { defaultStep , transition , step  } = props;
    const { classes  } = Stepper_useStyles();
    const [currentStep, setCurrentStep] = (0,react.useState)(defaultStep);
    const [currentTransition, setCurrentTransition] = (0,react.useState)(transition === null || transition === void 0 ? void 0 : transition.render);
    const [steps, { set: setSteps  }] = (0,useMap/* default */.Z)();
    const [stepParams, { set: setParam  }] = (0,useMap/* default */.Z)();
    const toStep = (stepName, params)=>{
        setCurrentStep(stepName);
        setParam(stepName, params);
    };
    (0,react.useEffect)(()=>{
        react.Children.forEach(props.children, (child)=>{
            if (!/*#__PURE__*/ (0,react.isValidElement)(child)) return;
            const name = child.props.name;
            setSteps(name, child);
        });
    }, []);
    (0,react.useEffect)(()=>{
        if (!transition) {
            setCurrentTransition(null);
            return;
        }
        if (transition.trigger) {
            setCurrentTransition(transition.render);
        } else {
            setCurrentTransition(null);
        }
    }, [
        transition
    ]);
    (0,react.useEffect)(()=>{
        if (!step) return;
        toStep(step.name, step.params);
    }, [
        step
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: currentTransition
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: steps[currentStep] ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: currentTransition ? classes.hidden : '',
                    width: "100%",
                    children: /*#__PURE__*/ (0,react.cloneElement)(steps[currentStep], {
                        toStep,
                        params: stepParams[currentStep]
                    })
                }) : null
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../dashboard/src/components/Restore/BackupInfoCard.tsx
var BackupInfoCard = __webpack_require__(18807);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/ConfirmBackupInfo.tsx







const ConfirmBackupInfo = /*#__PURE__*/ (0,react.memo)(({ backupInfo , onNext  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const [password, setPassword] = (0,react.useState)('');
    const [errorMessage, setErrorMessage] = (0,react.useState)('');
    const handleNext = async ()=>{
        const result = await onNext(password);
        if (result) {
            setErrorMessage(result);
        }
    };
    if (!backupInfo) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupInfoCard/* BackupInfoCard */.g, {
                        info: backupInfo
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            mt: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                            label: t.sign_in_account_cloud_backup_password(),
                            onChange: (e)=>setPassword(e.currentTarget.value)
                            ,
                            error: !!errorMessage,
                            helperText: errorMessage
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    onClick: handleNext,
                    children: t.restore()
                })
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(66709);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/type.ts
var Settings_type = __webpack_require__(27976);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/common.tsx




var ValidationCodeStep;
(function(ValidationCodeStep) {
    ValidationCodeStep["EmailInput"] = "EmailInput";
    ValidationCodeStep["PhoneInput"] = "PhoneInput";
    ValidationCodeStep["AccountValidation"] = "AccountValidation";
    ValidationCodeStep["ConfirmBackupInfo"] = "ConfirmBackupInfo";
})(ValidationCodeStep || (ValidationCodeStep = {}));
const Label = /*#__PURE__*/ (0,react.memo)(({ mode , onModeChange  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                sx: {
                    fontWeight: 'bolder',
                    fontSize: 12
                },
                color: "textPrimary",
                children: mode === 'email' ? 'Email' : 'Phone Number'
            }),
            mode === 'email' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                size: "small",
                variant: "text",
                onClick: ()=>onModeChange(Settings_type/* AccountType.phone */.Qm.phone)
                ,
                children: "Recovery with Mobile"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                size: "small",
                variant: "text",
                onClick: ()=>onModeChange(Settings_type/* AccountType.email */.Qm.email)
                ,
                children: "Recovery with Email"
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/regexp.ts
var regexp = __webpack_require__(32130);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/EmailField.tsx









const EmailField = /*#__PURE__*/ (0,react.memo)(({ toStep  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const [account, setAccount] = (0,react.useState)('');
    const [invalidEmail, setInvalidEmail] = (0,react.useState)(false);
    const validCheck = ()=>{
        if (!account) return;
        const isValid = regexp/* emailRegexp.test */.LX.test(account);
        setInvalidEmail(!isValid);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* MaskTextField */.FU, {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                    onModeChange: ()=>toStep(ValidationCodeStep.PhoneInput)
                    ,
                    mode: Settings_type/* AccountType.email */.Qm.email
                }),
                fullWidth: true,
                value: account,
                onBlur: validCheck,
                onChange: (event)=>setAccount(event.target.value)
                ,
                error: invalidEmail,
                helperText: invalidEmail ? t.sign_in_account_cloud_backup_email_format_error() : '',
                type: "email"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    size: "large",
                    onClick: ()=>toStep(ValidationCodeStep.AccountValidation, {
                            account: account,
                            type: Settings_type/* AccountType.email */.Qm.email
                        })
                    ,
                    disabled: !account || invalidEmail,
                    children: t.next()
                })
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/PhoneField.tsx









const PhoneField = /*#__PURE__*/ (0,react.memo)(({ toStep  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const [account, setAccount] = (0,react.useState)('');
    const [invalidPhone, setInvalidPhone] = (0,react.useState)(false);
    const validCheck = ()=>{
        if (!account) return;
        const isValid = regexp/* phoneRegexp.test */.wZ.test(account);
        setInvalidPhone(!isValid);
    };
    const handleClick = (0,react.useCallback)(()=>{
        if (regexp/* phoneRegexp.test */.wZ.test(account)) {
            toStep(ValidationCodeStep.AccountValidation, {
                account: account,
                type: Settings_type/* AccountType.phone */.Qm.phone
            });
        }
    }, [
        account
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* PhoneNumberField */.g8, {
                onBlur: validCheck,
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                    onModeChange: ()=>toStep(ValidationCodeStep.EmailInput)
                    ,
                    mode: Settings_type/* AccountType.phone */.Qm.phone
                }),
                onChange: ({ country , phone  })=>setAccount(country + ' ' + phone)
                ,
                error: invalidPhone ? t.sign_in_account_cloud_backup_phone_format_error() : '',
                value: {
                    country: '+1',
                    phone: ''
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    size: "large",
                    onClick: ()=>handleClick()
                    ,
                    disabled: !account || invalidPhone,
                    children: t.next()
                })
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/ValidationAccount.tsx










const ValidationAccount = ({ account , toStep , type , onNext  })=>{
    const language = (0,api/* useLanguage */.ZK)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { showSnackbar  } = (0,theme_src/* useCustomSnackbar */.Ii)();
    const [code, setCode] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const [{ error: sendCodeError  }, handleSendCodeFn] = (0,useAsyncFn/* default */.Z)(async ()=>{
        showSnackbar(t.sign_in_account_cloud_backup_send_email_success({
            type
        }), {
            variant: 'success'
        });
        await (0,api/* sendCode */.Z3)({
            account: account,
            type,
            scenario: Settings_type/* Scenario.backup */.$4.backup,
            locale: language.includes('zh') ? Settings_type/* Locale.zh */.go.zh : Settings_type/* Locale.en */.go.en
        });
    }, [
        account,
        type
    ]);
    const handleNext = async ()=>{
        const backupInfo = await onNext(account, type, code);
        if (backupInfo.downloadURL) {
            setError('');
            toStep(ValidationCodeStep.ConfirmBackupInfo, {
                backupInfo: backupInfo,
                account: account,
                type: type
            });
        } else {
            setError(backupInfo.message);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* SendingCodeField */.oe, {
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "body2",
                    sx: {
                        fontWeight: 'bolder',
                        fontSize: 12
                    },
                    lineHeight: "30px",
                    color: "textPrimary",
                    children: [
                        t.sign_in_account_cloud_send_verification_code_tip(),
                        " ",
                        account
                    ]
                }),
                autoSend: true,
                onChange: (c)=>setCode(c)
                ,
                errorMessage: (sendCodeError === null || sendCodeError === void 0 ? void 0 : sendCodeError.message) || error,
                onSend: handleSendCodeFn
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    size: "large",
                    variant: "rounded",
                    color: "primary",
                    onClick: handleNext,
                    disabled: !account || !code,
                    children: t.next()
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/CodeValidation.tsx











const CodeValidation = /*#__PURE__*/ (0,react.memo)(({ onValidated  })=>{
    const [{ loading: fetchingBackupInfo  }, fetchDownloadLinkFn] = (0,useAsyncFn/* default */.Z)(async (account, type, code)=>{
        return (0,api/* fetchDownloadLink */.iT)({
            code,
            account,
            type
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stepper, {
        defaultStep: ValidationCodeStep.EmailInput,
        transition: {
            render: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {}),
            trigger: fetchingBackupInfo
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                name: ValidationCodeStep.EmailInput,
                children: (toStep)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(EmailField, {
                        toStep: toStep
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                name: ValidationCodeStep.PhoneInput,
                children: (toStep)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneField, {
                        toStep: toStep
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                name: ValidationCodeStep.AccountValidation,
                children: (toStep, { account , type  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ValidationAccount, {
                        toStep: toStep,
                        account: account,
                        type: type,
                        onNext: fetchDownloadLinkFn
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                name: ValidationCodeStep.ConfirmBackupInfo,
                children: (toStep, { backupInfo , account , type  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmBackupInfo, {
                        toStep: toStep,
                        backupInfo: backupInfo,
                        onNext: (password)=>onValidated(backupInfo.downloadURL, account, password, type)
                    })
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/hooks/UserContext.tsx + 1 modules
var UserContext = __webpack_require__(61199);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(33351);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(57787);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(90425);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/ConfirmSynchronizePasswordDialog.tsx






const ConfirmSynchronizePasswordDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose , onConform  })=>{
    const t1 = (0,locales/* useDashboardI18N */.x)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(theme_src/* MaskDialog */.Df, {
        open: open,
        title: t1.cloud_backup(),
        onClose: onClose,
        maxWidth: "xs",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        alignItems: "center",
                        py: 2,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Success/* SuccessIcon */.t, {
                                sx: {
                                    fontSize: 54
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "caption",
                                sx: {
                                    color: (t)=>(0,theme_src/* getMaskColor */.nb)(t).greenMain
                                },
                                fontSize: 24,
                                children: t1.successful()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "caption",
                        children: t1.sign_in_account_cloud_backup_synchronize_password_tip()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        onClick: onClose,
                        children: t1.personas_cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: onConform,
                        children: t1.personas_confirm()
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromCloud.tsx























const RestoreFromCloud = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { showSnackbar  } = (0,theme_src/* useCustomSnackbar */.Ii)();
    const { user , updateUser  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const { currentPersona , changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const [account1, setAccount] = (0,react.useState)(null);
    const [backupId, setBackupId] = (0,react.useState)('');
    const [openSynchronizePasswordDialog, toggleSynchronizePasswordDialog] = (0,react.useState)(false);
    const [step, setStep] = (0,react.useState)({
        name: 'validate',
        params: null
    });
    const [{ loading: fetchingBackupValue , error: fetchBackupValueError  }, fetchBackupValueFn] = (0,useAsyncFn/* default */.Z)(async (downloadLink)=>(0,api/* fetchBackupValue */.Eu)(downloadLink)
    , []);
    const [{ loading: decryptingBackup  }, decryptBackupFn] = (0,useAsyncFn/* default */.Z)(async (account, password, encryptedValue)=>{
        try {
            const decrypted = await (0,backup_format_src/* decryptBackup */.lK)((0,encode/* encode */.c)(account + password), encryptedValue);
            return JSON.stringify((0,decode/* decode */.Jx)(decrypted));
        } catch  {
            return null;
        }
    }, []);
    (0,react.useEffect)(()=>{
        if (!fetchBackupValueError) return;
        showSnackbar(t.sign_in_account_cloud_backup_download_failed(), {
            variant: 'error'
        });
    }, [
        fetchBackupValueError
    ]);
    const onValidated = (0,react.useCallback)(async (downloadLink, accountValue, password, type)=>{
        const backupValue = await fetchBackupValueFn(downloadLink);
        const backupText = await decryptBackupFn(accountValue, password, backupValue);
        if (!backupText) {
            return t.sign_in_account_cloud_backup_decrypt_failed();
        }
        const backupInfo = await API/* Services.Welcome.parseBackupStr */.K9.Welcome.parseBackupStr(backupText);
        if (backupInfo) {
            setBackupId(backupInfo.id);
            setAccount({
                type,
                value: accountValue,
                password
            });
            setStep({
                name: 'restore',
                params: {
                    backupJson: backupInfo.info,
                    handleRestore: ()=>onRestore(backupInfo, {
                            type,
                            value: accountValue,
                            password
                        })
                }
            });
            return null;
        }
        return t.sign_in_account_cloud_backup_decrypt_failed();
    }, []);
    const restoreCallback = (0,react.useCallback)(async ()=>{
        if (!currentPersona) {
            const lastedPersona = await API/* Services.Identity.queryLastPersonaCreated */.K9.Identity.queryLastPersonaCreated();
            if (lastedPersona) {
                await changeCurrentPersona(lastedPersona.identifier);
            }
        }
        if (account1) {
            if (!user.email && account1.type === Settings_type/* AccountType.email */.Qm.email) {
                updateUser({
                    email: account1.value
                });
            }
            if (!user.phone && account1.type === Settings_type/* AccountType.phone */.Qm.phone) {
                updateUser({
                    phone: account1.value
                });
            }
        }
        toggleSynchronizePasswordDialog(true);
    }, [
        currentPersona,
        account1,
        user,
        toggleSynchronizePasswordDialog
    ]);
    const onRestore = (0,react.useCallback)(async (backupInfo, account)=>{
        try {
            var ref;
            if ((ref = backupInfo.info) === null || ref === void 0 ? void 0 : ref.wallets) {
                await API/* Services.Welcome.checkPermissionAndOpenWalletRecovery */.K9.Welcome.checkPermissionAndOpenWalletRecovery(backupInfo.id);
                return;
            } else {
                await API/* Services.Welcome.checkPermissionsAndRestore */.K9.Welcome.checkPermissionsAndRestore(backupInfo.id);
                await restoreCallback();
            }
        } catch  {
            showSnackbar(t.sign_in_account_cloud_restore_failed(), {
                variant: 'error'
            });
        }
    }, [
        user
    ]);
    const getTransition = (0,react.useMemo)(()=>{
        if (decryptingBackup) {
            return {
                render: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {
                    text: "Decrypting"
                }),
                trigger: decryptingBackup
            };
        }
        if (fetchingBackupValue) {
            return {
                render: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {
                    text: "Downloading"
                }),
                trigger: true
            };
        }
        return undefined;
    }, [
        fetchingBackupValue,
        decryptingBackup
    ]);
    const synchronizePassword = ()=>{
        if (!account1) return;
        updateUser({
            backupPassword: account1.password
        });
        onCloseSynchronizePassword();
    };
    const onCloseSynchronizePassword = ()=>{
        toggleSynchronizePasswordDialog(false);
        navigate(src/* DashboardRoutes.Personas */.vq.Personas, {
            replace: true
        });
    };
    (0,react.useEffect)(()=>{
        return API/* Messages.events.restoreSuccess.on */.Vm.events.restoreSuccess.on(restoreCallback);
    }, [
        restoreCallback
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stepper, {
                transition: getTransition,
                defaultStep: "validate",
                step: step,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                        name: "validate",
                        children: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    width: '100%'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeValidation, {
                                    onValidated: onValidated
                                })
                            })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                        name: "restore",
                        children: (_, { backupJson: backupBasicInfoJson , handleRestore: handleRestore  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                        sx: {
                                            width: '100%'
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupPreviewCard, {
                                            json: backupBasicInfoJson
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* LoadingButton */.f, {
                                            size: "large",
                                            variant: "rounded",
                                            color: "primary",
                                            onClick: handleRestore,
                                            children: t.restore()
                                        })
                                    })
                                ]
                            })
                    })
                ]
            }),
            openSynchronizePasswordDialog && /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmSynchronizePasswordDialog, {
                open: openSynchronizePasswordDialog,
                onClose: ()=>onCloseSynchronizePassword()
                ,
                onConform: synchronizePassword
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    pt: 4,
                    pb: 2,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_cloud_backup_warning()
                })
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.27.0_react@18.0.0-rc.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(67947);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(16365);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.11.6/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(34181);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromPrivateKey.tsx















const RestoreFromPrivateKey = /*#__PURE__*/ (0,react.memo)(()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const schema = lib.z.object({
        privateKey: lib.z.string()
    });
    const { control , handleSubmit , setError , formState: { errors , isSubmitting , isDirty  } ,  } = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            privateKey: ''
        }
    });
    const onSubmit = async (data)=>{
        try {
            const persona = await API/* Services.Identity.queryPersonaByPrivateKey */.K9.Identity.queryPersonaByPrivateKey(data.privateKey);
            if (persona) {
                await changeCurrentPersona(persona.identifier);
                // Waiting persona changed event notify
                await (0,src/* delay */.gw)(100);
                navigate(src/* DashboardRoutes.Personas */.vq.Personas);
            } else {
                navigate(`${src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.PersonaRecovery */.X.PersonaRecovery}`, {
                    replace: false,
                    state: {
                        privateKey: data.privateKey
                    }
                });
            }
        } catch  {
            setError('privateKey', {
                type: 'value',
                message: t.sign_in_account_private_key_error()
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                control: control,
                                render: ({ field  })=>{
                                    var ref;
                                    /*#__PURE__*/ return (0,jsx_runtime.jsx)(theme_src/* MaskTextField */.FU, {
                                        ...field,
                                        sx: {
                                            width: '100%'
                                        },
                                        multiline: true,
                                        rows: 8,
                                        helperText: (ref = errors.privateKey) === null || ref === void 0 ? void 0 : ref.message,
                                        error: !!errors.privateKey,
                                        placeholder: t.sign_in_account_private_key_placeholder()
                                    });
                                },
                                name: "privateKey"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                size: "large",
                                variant: "rounded",
                                color: "primary",
                                type: "submit",
                                disabled: isSubmitting || !isDirty,
                                children: t.confirm()
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    pt: 4,
                    pb: 2,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_private_key_warning()
                })
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(20895);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(13943);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/index.tsx











const Restore_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        tabs: {
            width: '100%',
            display: 'flex',
            marginBottom: theme.spacing(4)
        },
        panels: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            width: '100%'
        }
    })
);
const Restore = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = Restore_useStyles();
    const [currentTab, onChange, tabs] = (0,theme_src/* useTabs */.YE)('mnemonic', 'privateKey', 'local', 'cloud');
    const tabPanelClasses = {
        root: classes.panels
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* PersonaLogoBox */.xK, {
                children: [
                    'mnemonic',
                    'privateKey'
                ].includes(currentTab) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* RestoreBlueLogo */.ud, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: currentTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(theme_src/* ButtonGroupTabList */.E1, {
                        classes: {
                            root: classes.tabs
                        },
                        onChange: onChange,
                        "aria-label": t.wallets_import_wallet_tabs(),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.sign_in_account_tab_identity(),
                                value: tabs.mnemonic
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.wallets_wallet_private_key(),
                                value: tabs.privateKey
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.wallets_wallet_json_file(),
                                value: tabs.local
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.cloud_backup(),
                                value: tabs.cloud
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.mnemonic,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromMnemonic, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.privateKey,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromPrivateKey, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.local,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromLocal, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.cloud,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromCloud, {})
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/SignIn/index.tsx










function SignIn() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { state , search  } = (0,react_router/* useLocation */.TH)();
    const from = new URLSearchParams(search).get('from');
    const action = (0,react.useMemo)(()=>{
        return (state === null || state === void 0 ? void 0 : state.from) || from === 'popups' ? {
            name: t.close(),
            callback: ()=>{
                return (state === null || state === void 0 ? void 0 : state.from) ? navigate(state.from) : navigate(src/* DashboardRoutes.Personas */.vq.Personas);
            }
        } : {
            name: t.sign_in_account_sign_up_button(),
            callback: ()=>navigate(src/* DashboardRoutes.SignUp */.vq.SignUp)
        };
    }, [
        state
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UserContext/* UserProvider */.d, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RowLayout/* RowLayout */.V, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                        title: t.sign_in_account_identity_title(),
                        action: action
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Body */.uT, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Restore, {})
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 82314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const File = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('File', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
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


/***/ })

}]);