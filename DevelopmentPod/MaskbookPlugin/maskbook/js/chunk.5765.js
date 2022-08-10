(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5765],{

/***/ 33953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:t.rawValues?i:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 38419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(51911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(2633);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(96719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(54455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(15853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(52062);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js


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

/***/ 35886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(80480);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 83646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ContentContainer)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35878);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31939);


const ContentContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('div')(({ theme  })=>({
        flex: 1,
        borderRadius: Number(theme.shape.borderRadius) * 5,
        backgroundColor: _masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .MaskColorVar.primaryBackground */ .ZN.primaryBackground
    })
);


/***/ }),

/***/ 57475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ LoadingPlaceholder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21784);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77818);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        prompt: {
            color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.textLight */ .ZN.textLight,
            fontSize: theme.typography.pxToRem(12),
            lineHeight: theme.typography.pxToRem(16),
            marginTop: theme.spacing(2.5)
        },
        icon: {
            width: 30,
            height: 30,
            fill: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primary */ .ZN.primary
        }
    })
);
const LoadingPlaceholder = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .LoadingAnimation */ .p6, {
                className: classes.icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.prompt,
                children: "loading..."
            })
        ]
    });
});


/***/ }),

/***/ 13254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ PageFrame)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Drawer/Drawer.js
var Drawer = __webpack_require__(53400);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/paperClasses.js
var paperClasses = __webpack_require__(36328);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(52775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/AppBar/AppBar.js
var AppBar = __webpack_require__(60590);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(72610);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(27692);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/Menu.js
var Menu = __webpack_require__(67764);
// EXTERNAL MODULE: ../../node_modules/.pnpm/color@4.2.3/node_modules/color/index.js
var color = __webpack_require__(88106);
var color_default = /*#__PURE__*/__webpack_require__.n(color);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/context.ts
var context = __webpack_require__(48271);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/Navigation.tsx + 5 modules
var Navigation = __webpack_require__(32181);
// EXTERNAL MODULE: ../icons/brands/MaskBanner.tsx
var MaskBanner = __webpack_require__(48154);
// EXTERNAL MODULE: ../icons/brands/Mask.tsx
var Mask = __webpack_require__(75611);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(80226);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(81267);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 3 modules
var usePersonaContext = __webpack_require__(16386);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var src_entry = __webpack_require__(70226);
;// CONCATENATED MODULE: ../dashboard/src/components/PageFrame/FeaturePromotions/index.tsx











const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            padding: theme.spacing(3.125),
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
                marginBottom: theme.spacing(2)
            },
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },
        img: {
            fill: 'none',
            width: 250,
            height: 140,
            cursor: 'pointer'
        }
    })
);
const FeaturePromotions = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes  } = useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { currentPersona , connectPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    // const { setDialog: setBuyDialog } = useRemoteControlledDialog(PluginMessages.Transak.buyTokenDialogUpdated)
    const isConnectedTwitter = (0,react.useMemo)(()=>{
        if (!currentPersona) return false;
        const { linkedProfiles  } = currentPersona;
        if (linkedProfiles.length === 0) return false;
        return !!linkedProfiles.find((profile)=>profile.identifier.network === shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter
        );
    }, [
        currentPersona
    ]);
    const openTransakDialog = (0,react.useCallback)(()=>{
    // setBuyDialog({
    //     open: true,
    //     address: account ?? '',
    // })
    }, []);
    const openTwitter = (pluginId)=>async ()=>{
            if (!currentPersona) {
                navigate(shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp);
                return;
            }
            if (isConnectedTwitter) {
                await API/* Services.SocialNetwork.openSNSAndActivatePlugin */.K9.SocialNetwork.openSNSAndActivatePlugin('https://twitter.com/home', pluginId);
                return;
            }
            connectPersona(currentPersona.identifier, shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter);
        }
    ;
    const openMaskNetwork = ()=>(0,src/* openWindow */.xw)('https://twitter.com/realMaskNetwork')
    ;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.img,
                onClick: ()=>openTwitter(src_entry/* PluginId.RedPacket */.je.RedPacket)
                ,
                src: new URL(/* asset import */ __webpack_require__(36242), __webpack_require__.b).toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.img,
                onClick: openTransakDialog,
                src: new URL(/* asset import */ __webpack_require__(76580), __webpack_require__.b).toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                onClick: openMaskNetwork,
                className: classes.img,
                src: new URL(/* asset import */ __webpack_require__(97351), __webpack_require__.b).toString(),
                style: {
                    height: 80
                }
            })
        ]
    });
});

// EXTERNAL MODULE: ../dashboard/src/components/NavigationVersionFooter/index.tsx
var NavigationVersionFooter = __webpack_require__(22796);
;// CONCATENATED MODULE: ../dashboard/src/components/PageFrame/index.tsx














const featurePromotionsEnabled = [
    shared_base_src/* DashboardRoutes.Wallets */.vq.Wallets,
    shared_base_src/* DashboardRoutes.WalletsTransfer */.vq.WalletsTransfer,
    shared_base_src/* DashboardRoutes.WalletsHistory */.vq.WalletsHistory, 
];
const MaskLogo = (0,styled/* default */.ZP)(Grid/* default */.ZP)`
    flex-basis: 212px;
    max-width: 212px;
    & > svg {
        flex: 1;
    }
`;
const MenuButton = (0,styled/* default */.ZP)(IconButton/* default */.Z)(({ theme  })=>({
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5)
    })
);
const PageTitle = (0,styled/* default */.ZP)(Grid/* default */.ZP)(({ theme  })=>({
        minHeight: 40,
        alignItems: 'center',
        paddingLeft: theme.spacing(4.25),
        '& > h6': {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.down('lg')]: {
            flex: 1
        }
    })
);
const Containment = (0,styled/* default */.ZP)(Grid/* default */.ZP)(({ theme  })=>({
        maxWidth: '100%',
        display: 'flex',
        height: 'calc(100vh - 64px)',
        overflow: 'hidden'
    })
);
const NavigationDrawer = (0,styled/* default */.ZP)(Drawer/* default */.ZP)(({ theme  })=>({
        top: `${theme.mixins.toolbar.minHeight}px !important`,
        // https://github.com/mui-org/material-ui/issues/20012#issuecomment-770654893
        [`& > .${paperClasses/* default.root */.Z.root}`]: {
            width: 232,
            top: theme.mixins.toolbar.minHeight,
            paddingTop: '28px',
            background: new (color_default())(theme.palette.background.paper).alpha(0.8).toString(),
            backdropFilter: 'blur(4px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: `calc( 22px + ${theme.mixins.toolbar.minHeight}px)`
        }
    })
);
const ShapeHelper = (0,styled/* default */.ZP)('div')(({ theme  })=>({
        padding: theme.spacing(3),
        paddingBottom: 0,
        borderTopLeftRadius: Number(theme.shape.borderRadius) * 5,
        borderTopRightRadius: Number(theme.shape.borderRadius) * 5,
        backgroundColor: theme.palette.mode === 'dark' ? '#1B1E38' : entry/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'auto'
    })
);
const ContentContainer = (0,styled/* default */.ZP)('div')(({ theme  })=>({
        display: 'flex',
        flexDirection: 'column',
        borderRadius: Number(theme.shape.borderRadius) * 5,
        backgroundColor: 'transparent',
        minHeight: '100%',
        position: 'relative',
        '&:after': {
            content: '""',
            display: 'block',
            paddingTop: theme.spacing(3)
        }
    })
);
const useStyle = (0,entry/* makeStyles */.ZL)()((theme)=>({
        toolbarGutters: {
            backgroundColor: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            [theme.breakpoints.up('lg')]: {
                paddingLeft: theme.spacing(0)
            },
            [theme.breakpoints.down('lg')]: {
                paddingLeft: theme.spacing(1)
            }
        },
        shapeContainerWithBackground: {
            backgroundColor: theme.palette.background.paper
        }
    })
);
const PageFrame = /*#__PURE__*/ (0,react.memo)((props)=>{
    const location = (0,react_router/* useLocation */.TH)();
    const left = typeof props.title === 'string' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        variant: "h6",
        children: props.title
    }) : props.title;
    const right = props.primaryAction;
    const isLargeScreen = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.up('lg')
    );
    const { drawerOpen , toggleDrawer  } = (0,react.useContext)(context/* DashboardContext */.G);
    const showFeaturePromotions = featurePromotionsEnabled.some((path)=>path === location.pathname
    );
    const mode = (0,useTheme/* default */.Z)().palette.mode;
    const { classes  } = useStyle();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* default */.Z, {
                position: "relative",
                color: "inherit",
                elevation: 0,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Toolbar/* default */.Z, {
                    classes: {
                        gutters: classes.toolbarGutters
                    },
                    children: [
                        !isLargeScreen && /*#__PURE__*/ (0,jsx_runtime.jsxs)(MaskLogo, {
                            item: true,
                            container: true,
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuButton, {
                                    size: "large",
                                    onClick: toggleDrawer,
                                    children: drawerOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Menu/* default */.Z, {})
                                }),
                                mode === 'dark' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskBanner/* MaskBannerIcon */.i, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mask/* MaskNotSquareIcon */.h, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(PageTitle, {
                            item: true,
                            xs: isLargeScreen ? 12 : 10,
                            container: true,
                            children: [
                                left,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    sx: {
                                        flex: 1
                                    }
                                }),
                                right
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Containment, {
                children: [
                    !isLargeScreen && /*#__PURE__*/ (0,jsx_runtime.jsxs)(NavigationDrawer, {
                        open: drawerOpen,
                        onClose: toggleDrawer,
                        ModalProps: {
                            BackdropProps: {
                                sx: {
                                    background: 'transparent'
                                }
                            }
                        },
                        transitionDuration: 300,
                        variant: "temporary",
                        elevation: 0,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Navigation/* Navigation */.W, {
                                onClose: toggleDrawer
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationVersionFooter/* NavigationVersionFooter */.h, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShapeHelper, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ErrorBoundary */.SV, {
                                children: props.children
                            })
                        })
                    }),
                    showFeaturePromotions ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FeaturePromotions, {}) : null
                ]
            })
        ]
    });
});


/***/ }),

/***/ 14628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MiniMaskIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const MiniMaskIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('MiniMask', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "white"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            opacity: "0.5",
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "rgba(0,0,0,0.2)"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "rgba(0,0,0,0.2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), undefined, '0 0 48 48');


/***/ }),

/***/ 10581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EmptyIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const EmptyIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('EmptyIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            clipPath: "url(#empty_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M94 77c0 8.284-20.147 15-45 15S4 85.284 4 77c0-4.353 5.564-8.274 14.45-11.014v.608L47.906 78.5 77.35 66.578v-1.227C87.51 68.1 94 72.298 94 77z",
                    fill: "url(#empty_paint0_linear)"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M77.36 36.64L47.894 48.649v-22L77.36 36.64z",
                    fill: "#699EFF"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M47.895 26.648v21.93L18.43 36.64l29.466-9.992z",
                    fill: "#82AEFF"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                    filter: "url(#empty_filter0_b)",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M18.43 66.615l29.465 11.931V48.572l-29.466-11.93v29.973z",
                        fill: "#7DABFF",
                        fillOpacity: ".5"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                    filter: "url(#empty_filter1_b)",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M47.895 48.572v29.974l29.466-11.931V36.64L47.895 48.57z",
                        fill: "#7AA9FF",
                        fillOpacity: ".32"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                    filter: "url(#empty_filter2_b)",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M0 43.95l29.466 11.995 18.43-7.31-29.468-11.994L0 43.951zm47.896 4.685l18.429 7.31L95.79 43.95l-18.429-7.31-29.465 11.994z",
                        fill: "#6CA0FF",
                        fillOpacity: ".2"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                    filter: "url(#empty_filter3_b)",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M33.864 21.624a4 4 0 00-2.829 4.899l1.553 5.795a4 4 0 004.9 2.829l3.863-1.035 1.138.657a.1.1 0 00.137-.037l.657-1.138.286-.077.86-.23 2.717-.728a4 4 0 002.829-4.9l-1.553-5.795a4 4 0 00-4.899-2.828l-9.66 2.588zm3.037 7.469a1 1 0 10-.518-1.933 1 1 0 00.518 1.933zm4.57-2.26a1 1 0 11-1.932.517 1 1 0 011.932-.518zm3.157.189a1 1 0 10-.518-1.932 1 1 0 00.518 1.932z",
                        fill: "#1C68F3",
                        fillOpacity: ".2"
                    })
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "empty_filter0_b",
                    x: "14.429",
                    y: "32.642",
                    width: "37.466",
                    height: "49.905",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "empty_filter1_b",
                    x: "43.895",
                    y: "32.641",
                    width: "37.466",
                    height: "49.905",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "empty_filter2_b",
                    x: "-4",
                    y: "32.641",
                    width: "103.79",
                    height: "27.304",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "empty_filter3_b",
                    x: "26.898",
                    y: "14.898",
                    width: "27.214",
                    height: "24.386",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "empty_paint0_linear",
                    x1: "49",
                    y1: "62",
                    x2: "49",
                    y2: "80.158",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#3E7DEF",
                            stopOpacity: ".29"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#8DB3F9",
                            stopOpacity: "0"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                    id: "empty_clip0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        fill: "#fff",
                        d: "M0 0h96v96H0z"
                    })
                })
            ]
        })
    ]
}), '0 0 96 96');


/***/ }),

/***/ 63954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ ITOIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const ITOIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ITOIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.4238 6.13342C16.4238 6.56199 16.2324 6.97013 15.8866 7.34099V9.06512C18.7797 9.49384 20.9995 11.9877 20.9995 15C20.9995 18.3137 18.3132 21 14.9995 21C14.2629 21 13.5572 20.8673 12.9052 20.6244C11.9455 20.8639 10.8445 21 9.67383 21C6.55843 21 3.93599 20.0359 3.15832 18.7251H3.00256V18.389C2.95072 18.2349 2.92383 18.0772 2.92383 17.9165C2.92383 17.7559 2.95072 17.5981 3.00256 17.4441V6.60587C2.95072 6.45185 2.92383 6.29407 2.92383 6.13342C2.92383 4.43045 5.94591 3.04993 9.67383 3.04993C13.4018 3.04993 16.4238 4.43045 16.4238 6.13342Z",
            fill: "#FEDD18"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.38496 7.53516C8.9584 7.53516 6.83496 7.49531 6.83496 6.68438C6.83496 6.52734 6.96152 6.40078 7.11855 6.40078C7.25684 6.40078 7.37402 6.50156 7.39746 6.63281C7.5334 6.75469 8.23184 6.96797 9.38496 6.96797C10.3881 6.96797 11.0467 6.80625 11.2928 6.68438C11.049 6.5625 10.3904 6.40078 9.38496 6.40078C8.9584 6.40078 6.83496 6.36094 6.83496 5.55C6.83496 4.73906 8.96074 4.69922 9.38496 4.69922C9.80918 4.69922 11.935 4.73906 11.935 5.55C11.935 5.70703 11.8084 5.83359 11.6514 5.83359C11.5131 5.83359 11.3959 5.73281 11.3725 5.60156C11.2365 5.47969 10.5381 5.26641 9.38496 5.26641C8.38184 5.26641 7.72324 5.42813 7.47715 5.55C7.7209 5.67188 8.37949 5.83359 9.38496 5.83359C9.81152 5.83359 11.935 5.87344 11.935 6.68438C11.935 7.49531 9.80918 7.53516 9.38496 7.53516Z",
            fill: "#FFF4B3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.1834 21.6352C11.5107 21.6352 8.52246 18.6469 8.52246 14.9742C8.52246 11.3016 11.5107 8.31329 15.1834 8.31329C18.856 8.31329 21.8443 11.3039 21.8443 14.9766C21.8443 18.6492 18.856 21.6352 15.1834 21.6352ZM15.1834 9.16642C11.9795 9.16642 9.37324 11.7727 9.37324 14.9766C9.37324 18.1805 11.9795 20.7867 15.1834 20.7867C18.3873 20.7867 20.9935 18.1805 20.9935 14.9766C20.9935 11.7727 18.3873 9.16642 15.1834 9.16642Z",
            fill: "#FFB600"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.10059 7.89141C9.10059 8.04844 9.22715 8.175 9.38418 8.175C9.53887 8.175 9.66543 8.04609 9.66777 7.89141V4.49063C9.66777 4.33359 9.54121 4.20703 9.38418 4.20703C9.22715 4.20703 9.10059 4.33359 9.10059 4.49063V7.89141Z",
            fill: "#FFF4B3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.2734 20.3626C10.6734 20.454 10.0383 20.5008 9.38204 20.5008C5.925 20.5008 3.00469 19.1391 3.00469 17.5243C3.00469 17.4727 2.99297 17.4235 2.97656 17.3766C2.99297 17.3297 3.00469 17.2805 3.00469 17.229V16.5188C4.21172 17.7188 6.58828 18.518 9.38204 18.518C9.43594 18.518 9.48985 18.5157 9.54376 18.5157C9.37266 18.2438 9.22032 17.9602 9.08907 17.6649C5.76094 17.5899 3.00234 16.261 3.00234 14.693V13.6876C4.0875 14.7657 6.12188 15.5204 8.55469 15.661C8.53126 15.436 8.51954 15.2086 8.51954 14.979C8.51954 14.9227 8.52188 14.8641 8.52422 14.8079C5.45391 14.6063 3.00234 13.3383 3.00234 11.8618V10.8516C4.13438 11.9766 6.3 12.7501 8.8711 12.8415C8.96954 12.5508 9.08672 12.2696 9.22266 11.9977C5.8336 11.9579 3 10.6126 3 9.02349V8.01802C4.20703 9.21802 6.5836 10.0172 9.37735 10.0172C9.87423 10.0172 10.357 9.99146 10.8234 9.94224C11.993 8.92974 13.5141 8.31568 15.1758 8.31568C15.2531 8.31568 15.3305 8.31802 15.4078 8.32271C15.5297 8.22427 15.6469 8.12349 15.7524 8.01802V8.34146C16.0406 8.36724 16.3242 8.40943 16.6031 8.47037V6.1899C16.6031 4.04537 13.4297 2.3649 9.37501 2.3649C5.32032 2.3649 2.15625 4.04537 2.15625 6.1899V17.2313C2.15625 17.2829 2.16797 17.3321 2.18437 17.379C2.16797 17.4258 2.15625 17.4751 2.15625 17.5266C2.15625 19.6711 5.32969 21.3516 9.38438 21.3516C10.4625 21.3516 11.4774 21.2321 12.3867 21.0165C11.993 20.836 11.6203 20.6157 11.2734 20.3626ZM9.38438 3.21334C12.8414 3.21334 15.7617 4.57506 15.7617 6.1899C15.7617 7.80474 12.8414 9.16646 9.38438 9.16646C5.92735 9.16646 3.00703 7.80474 3.00703 6.1899C3.00703 4.57506 5.92735 3.21334 9.38438 3.21334Z",
            fill: "#FFB600"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.183 17.0297C14.2291 17.0297 13.4814 16.4906 13.4814 15.8016C13.4814 15.6445 13.608 15.518 13.765 15.518C13.9221 15.518 14.0486 15.6445 14.0486 15.8016C14.0486 16.1531 14.5783 16.4625 15.183 16.4625C15.7877 16.4625 16.3174 16.1531 16.3174 15.8016C16.3174 15.45 15.7877 15.1406 15.183 15.1406C14.2291 15.1406 13.4814 14.6016 13.4814 13.9125C13.4814 13.2234 14.2291 12.6844 15.183 12.6844C16.1369 12.6844 16.8846 13.2234 16.8846 13.9125C16.8846 14.0695 16.758 14.1961 16.601 14.1961C16.4439 14.1961 16.3174 14.0695 16.3174 13.9125C16.3174 13.5609 15.7877 13.2516 15.183 13.2516C14.5783 13.2516 14.0486 13.5609 14.0486 13.9125C14.0486 14.2641 14.5783 14.5734 15.183 14.5734C16.1369 14.5734 16.8846 15.1125 16.8846 15.8016C16.8846 16.4906 16.1369 17.0297 15.183 17.0297Z",
            fill: "#FFF4B3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.183 18.0938C15.026 18.0938 14.8994 17.9672 14.8994 17.8102V12.1407C14.8994 11.9836 15.026 11.8571 15.183 11.8571C15.34 11.8571 15.4666 11.9836 15.4666 12.1407V17.8079C15.4666 17.9672 15.34 18.0938 15.183 18.0938Z",
            fill: "#FFF4B3"
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 42829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ RedPacketIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const RedPacketIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('RedPacketIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M3.765 5.161s-.661-1.903 6.767-1.903c7.428 0 6.767 1.903 6.767 1.903v.82H3.765v-.82z",
            fill: "#DB1919"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
            cx: "13.389",
            cy: "4.498",
            r: "1.96",
            fill: "#FFBC5A",
            stroke: "#F5B250",
            strokeWidth: ".2"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.515 4.062v.621h-1.96a.85.85 0 00.83.658.853.853 0 00.766-.472h.364v.522a.225.225 0 01-.226.224h-1.804a.225.225 0 01-.226-.224V4.062h2.256zm-.58.807a.665.665 0 01-1.098 0h1.097zm-1.03-.658a.35.35 0 00-.348.298h.193a.163.163 0 01.31 0h.192a.35.35 0 00-.347-.298zm.965 0a.35.35 0 00-.348.298h.193a.163.163 0 01.31 0h.192a.35.35 0 00-.347-.298zm.42-.832c.124 0 .225.1.225.223v.274H12.26v-.274c0-.123.101-.223.226-.223h1.805z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.484 4.498a1.96 1.96 0 11-3.92 0 1.96 1.96 0 013.92 0z",
            fill: "#FFBC5A",
            stroke: "#F5B250",
            strokeWidth: ".2"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.65 4.062v.621H6.69a.85.85 0 00.83.658.853.853 0 00.766-.472h.364v.522a.225.225 0 01-.226.224H6.62a.225.225 0 01-.226-.224V4.062H8.65zm-.58.807a.665.665 0 01-1.098 0h1.097zm-1.03-.658a.35.35 0 00-.348.298h.192a.163.163 0 01.31 0h.193a.35.35 0 00-.348-.298zm.964 0a.35.35 0 00-.347.298h.192a.163.163 0 01.31 0h.193a.35.35 0 00-.348-.298zm.42-.832c.125 0 .226.1.226.223v.274H6.394v-.274c0-.123.101-.223.226-.223h1.804z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13.168 3.986a2.636 2.636 0 11-5.272 0 2.636 2.636 0 015.272 0z",
            fill: "#FFBC5A",
            stroke: "#F5B250",
            strokeWidth: ".2"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.03 3.407v.825H9.426c.113.5.565.874 1.104.874.446 0 .831-.255 1.016-.627h.484v.693a.298.298 0 01-.3.297H9.333a.298.298 0 01-.3-.297V3.407h2.997zm-.771 1.072a.883.883 0 01-.73.382.883.883 0 01-.728-.382h1.457zM9.89 3.605a.465.465 0 00-.461.396h.255a.216.216 0 01.412 0h.255a.465.465 0 00-.461-.396zm1.282 0a.465.465 0 00-.462.396h.256a.216.216 0 01.206-.148c.096 0 .177.062.206.148h.255a.465.465 0 00-.461-.396zM11.73 2.5c.166 0 .3.133.3.297v.363H9.034v-.363c0-.164.134-.297.3-.297h2.396z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M3.765 5.215s2.511.753 6.754.753c4.243 0 6.78-.753 6.78-.753V17.75a1 1 0 01-1 1H4.765a1 1 0 01-1-1V5.215z",
            fill: "#F93737"
        })
    ]
}), '0 0 20 20');


/***/ }),

/***/ 80480:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 76580:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/113cffe822f49e239c50.png";

/***/ }),

/***/ 97351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/22461b76dd69c61cc73b.png";

/***/ }),

/***/ 36242:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/52fd5c64700034442ae5.png";

/***/ })

}]);