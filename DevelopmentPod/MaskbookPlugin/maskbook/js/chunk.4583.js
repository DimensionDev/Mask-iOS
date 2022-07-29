"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4583],{

/***/ 38419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 84583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ NFTAvatarDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/AddNFT.tsx
var AddNFT = __webpack_require__(20700);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(83621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(43133);
;// CONCATENATED MODULE: ./src/plugins/Avatar/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "com.maskbook.avatar", ...props })
function useI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("com.maskbook.avatar")
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
;// CONCATENATED MODULE: ./src/plugins/Avatar/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts


// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(11087);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(23228);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(65129);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(799);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/setting.tsx


const WalletSettingIcon = (0,utils/* createIcon */.I)('WalletSettingIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M18.4604 9.27869L14.8394 3.00525C14.5796 2.55603 14.0972 2.27869 13.5796 2.27869H6.42139C5.85303 2.27869 5.32178 2.58533 5.03857 3.07751L1.45654 9.27869C1.19678 9.72791 1.19678 10.2845 1.45654 10.7318L5.07764 17.0033C5.3374 17.4525 5.81787 17.7299 6.3374 17.7299H13.5796C14.0972 17.7299 14.5796 17.4506 14.8394 17.0033L18.4604 10.7318C18.7183 10.2826 18.7183 9.72595 18.4604 9.27869ZM17.2749 10.0482L13.6538 16.3197C13.6382 16.347 13.6089 16.3627 13.5796 16.3627H6.3374C6.30615 16.3627 6.27881 16.347 6.26318 16.3197L2.64209 10.0482C2.62646 10.0209 2.62646 9.98767 2.64209 9.96228L6.22217 3.76306C6.26318 3.69275 6.33936 3.64783 6.42139 3.64783H13.5796C13.6108 3.64783 13.6382 3.66345 13.6538 3.6908L17.2749 9.96228C17.2905 9.98767 17.2905 10.0209 17.2749 10.0482Z",
            fill: "#767F8D"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.95898 7.03943C8.32422 7.03943 6.99414 8.36951 6.99414 10.0043C6.99414 11.639 8.32422 12.9691 9.95898 12.9691C11.5937 12.9691 12.9238 11.641 12.9238 10.0062C12.9238 8.37146 11.5937 7.03943 9.95898 7.03943ZM9.95898 11.6039C9.07812 11.6039 8.36133 10.8871 8.36133 10.0062C8.36133 9.12537 9.07812 8.40857 9.95898 8.40857C10.8398 8.40857 11.5566 9.12537 11.5566 10.0062C11.5566 10.8871 10.8398 11.6039 9.95898 11.6039Z",
            fill: "#767F8D"
        })
    ]
}), '0 0 20 20');

;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/checked.tsx


const CheckedIcon = (0,utils/* createIcon */.I)('CheckedIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "10",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7 12.5L10.3333 16L17 9",
            stroke: "white",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        })
    ]
}), '0 0 24 24');
const UncheckIcon = (0,utils/* createIcon */.I)('UncheckIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        fill: "none",
        strokeWidth: "2",
        stroke: "#CFD9DE"
    })
}), '0 0 24 24');

// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(10503);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(39969);
;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/link.tsx


const LinkIcon = (0,utils/* createIcon */.I)('LinkIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.1333 2.79997C2.1333 2.43178 2.43178 2.1333 2.79997 2.1333H7.5049V3.19997H3.19997V12.8H12.8V8.31266H13.8666V13.2C13.8666 13.5682 13.5682 13.8666 13.2 13.8666H2.79997C2.43178 13.8666 2.1333 13.5682 2.1333 13.2V2.79997ZM9.10936 2.66663C9.10936 2.37208 9.34814 2.1333 9.64269 2.1333H13.3333C13.6279 2.1333 13.8666 2.37208 13.8666 2.66663V6.32887C13.8666 6.62342 13.6279 6.86221 13.3333 6.86221C13.0387 6.86221 12.8 6.62342 12.8 6.32887V3.96988L6.21998 10.6629C6.01349 10.8729 5.67581 10.8758 5.46576 10.6693C5.25572 10.4628 5.25284 10.1251 5.45934 9.9151L12.0611 3.19997H9.64269C9.34814 3.19997 9.10936 2.96119 9.10936 2.66663Z",
        fill: "#767F8D"
    })
}), '0 0 16 16');

;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/copy.tsx


const CopyIcon = (0,utils/* createIcon */.I)('CopyIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.80202 9.27209C5.12846 9.27209 4.54141 9.07143 4.11916 8.67693C3.69422 8.2799 3.47515 7.72255 3.47515 7.0891L3.47515 3.53008C3.47515 2.89957 3.69264 2.34469 4.11413 1.94825C4.53299 1.55429 5.11552 1.35199 5.78397 1.34826L5.7862 1.34825L9.07328 1.34709C9.74684 1.34709 10.334 1.54776 10.7561 1.94231C11.181 2.33936 11.3999 2.8967 11.3999 3.53009L11.3999 7.0891C11.3999 7.71955 11.1826 8.27436 10.7611 8.67074C10.3423 9.06464 9.7599 9.26681 9.09151 9.27054L9.08928 9.27055L5.80202 9.27209C5.80199 9.27209 5.8022 9.27209 5.80202 8.87209L5.80202 9.27209ZM5.80202 8.47209C5.28538 8.47208 4.90894 8.31998 4.66532 8.09236C4.42439 7.86726 4.27515 7.53311 4.27515 7.0891L4.27515 3.53008C4.27515 3.08856 4.4232 2.75582 4.66223 2.53099C4.90374 2.30384 5.27641 2.1513 5.78743 2.14825C5.78776 2.14825 5.7881 2.14825 5.78843 2.14825L9.07301 2.14709C9.07304 2.14709 9.07353 2.14709 9.07357 2.14709C9.59019 2.14711 9.9664 2.29921 10.2099 2.52678C10.4507 2.75186 10.5999 3.08601 10.5999 3.53009L10.5999 7.0891C10.5999 7.53069 10.4519 7.86331 10.213 8.088C9.97166 8.31503 9.59911 8.46751 9.08803 8.47055L5.80202 8.47209Z",
            fill: "#767F8D"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.05777 10.8297C3.38422 10.8297 2.79716 10.629 2.37492 10.2345C1.94998 9.83752 1.7309 9.28017 1.7309 8.64672L1.7309 5.0877C1.7309 4.27471 2.09351 3.59811 2.75721 3.22102C2.94928 3.11189 3.19346 3.17913 3.30259 3.3712C3.41172 3.56328 3.34448 3.80745 3.15241 3.91659C2.76684 4.13566 2.5309 4.5289 2.5309 5.0877L2.5309 8.64672C2.5309 9.09073 2.68014 9.42488 2.92108 9.64998C3.16469 9.87759 3.54104 10.0297 4.05768 10.0297L7.34378 10.0282C7.91628 10.0248 8.31516 9.83448 8.55288 9.55766C8.6968 9.39007 8.94934 9.37087 9.11694 9.5148C9.28454 9.65872 9.30373 9.91126 9.1598 10.0789C8.73864 10.5693 8.09726 10.824 7.34726 10.8282L7.34503 10.8282L4.05777 10.8297C4.05775 10.8297 4.05796 10.8297 4.05777 10.4297L4.05777 10.8297Z",
            fill: "#767F8D"
        })
    ]
}), '0 0 12 12');

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/verify.tsx


const VerifyIcon = (0,utils/* createIcon */.I)('VerifyIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.18642 1.49397C7.6125 0.991107 8.38807 0.991107 8.81415 1.49397L9.32754 2.09995C9.58882 2.40831 10.0019 2.54254 10.3945 2.44663L11.166 2.25816C11.8063 2.10176 12.4338 2.55764 12.4829 3.21488L12.542 4.00691C12.5722 4.40994 12.8275 4.76135 13.2015 4.91453L13.9364 5.21556C14.5464 5.46534 14.786 6.20299 14.4394 6.76358L14.0218 7.4391C13.8092 7.78288 13.8092 8.21723 14.0218 8.56102L14.4394 9.23654C14.786 9.79712 14.5464 10.5348 13.9364 10.7845L13.2015 11.0856C12.8275 11.2388 12.5722 11.5902 12.542 11.9932L12.4829 12.7852C12.4338 13.4425 11.8063 13.8983 11.166 13.742L10.3945 13.5535C10.0019 13.4576 9.58882 13.5918 9.32754 13.9002L8.81415 14.5061C8.38807 15.009 7.6125 15.009 7.18642 14.5061L6.67303 13.9002C6.41175 13.5918 5.99869 13.4576 5.60605 13.5535L4.83451 13.742C4.19426 13.8983 3.56679 13.4425 3.51769 12.7852L3.45852 11.9932C3.42841 11.5902 3.1731 11.2388 2.7991 11.0856L2.06412 10.7845C1.45422 10.5348 1.21454 9.79712 1.56114 9.23654L1.97881 8.56102C2.19135 8.21723 2.19135 7.78288 1.97881 7.4391L1.56114 6.76358C1.21454 6.20299 1.45422 5.46534 2.06412 5.21556L2.7991 4.91453C3.1731 4.76135 3.42841 4.40994 3.45852 4.00691L3.51769 3.21488C3.56679 2.55764 4.19426 2.10176 4.83451 2.25816L5.60605 2.44663C5.99869 2.54254 6.41175 2.40831 6.67303 2.09995L7.18642 1.49397Z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.19967 9.40003L5.79967 8.00003L5.33301 8.4667L7.19967 10.3334L11.1997 6.33337L10.733 5.8667L7.19967 9.40003Z",
            fill: "white",
            stroke: "white",
            strokeWidth: "0.4"
        })
    ]
}), '0 0 16 16');

;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/Verify2.tsx


const Verify2Icon = (0,utils/* createIcon */.I)('Verify2Icon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.4423 4.51878C11.2605 3.99219 9.94008 3.86173 8.67804 4.14687C7.416 4.43201 6.27994 5.11748 5.43929 6.10103C4.59865 7.08458 4.09846 8.31352 4.01333 9.60457C3.9282 10.8956 4.26269 12.1796 4.9669 13.265C5.67112 14.3504 6.70733 15.1791 7.92101 15.6275C9.13468 16.0759 10.4608 16.12 11.7015 15.7531C12.9423 15.3863 14.0312 14.6282 14.8059 13.5919C15.5806 12.5556 15.9996 11.2966 16.0003 10.0028V9.38983C16.0003 9.02164 16.2988 8.72316 16.667 8.72316C17.0352 8.72316 17.3337 9.02164 17.3337 9.38983V10.0032C17.3328 11.5845 16.8207 13.1236 15.8738 14.3902C14.927 15.6568 13.5961 16.5834 12.0796 17.0317C10.5631 17.4801 8.94231 17.4263 7.45894 16.8782C5.97556 16.3302 4.70907 15.3173 3.84836 13.9907C2.98765 12.6641 2.57884 11.0948 2.68289 9.51684C2.78694 7.93889 3.39828 6.43685 4.42573 5.23473C5.45318 4.03261 6.8417 3.19483 8.3842 2.84632C9.92669 2.49781 11.5405 2.65726 12.985 3.30088C13.3213 3.45073 13.4725 3.84485 13.3226 4.18117C13.1728 4.51748 12.7786 4.66864 12.4423 4.51878Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.1291 4.51888C17.3945 4.77407 17.4027 5.1961 17.1475 5.4615L10.7373 12.1282C10.6116 12.2588 10.4382 12.3327 10.2569 12.3328C10.0756 12.3328 9.90213 12.259 9.77641 12.1284L7.85334 10.1304C7.59801 9.86513 7.60607 9.4431 7.87135 9.18777C8.13662 8.93244 8.55866 8.94051 8.81398 9.20578L10.2565 10.7045L16.1864 4.53736C16.4416 4.27196 16.8637 4.26368 17.1291 4.51888Z",
            fill: "white"
        })
    ]
}), '0 0 20 20');

// EXTERNAL MODULE: ./src/plugins/Avatar/utils/index.ts
var Avatar_utils = __webpack_require__(85418);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/WalletList.tsx
























const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            borderRadius: 9999,
            paddingLeft: 4,
            paddingRight: 4,
            cursor: 'pointer',
            backgroundColor: theme.palette.mode === 'dark' ? '#15171A' : '#F6F8F8'
        },
        wrapper: {},
        address: {
            lineHeight: 1.5
        },
        copy: {
            color: theme.palette.secondary.main
        },
        icon: {
            width: 24,
            height: 24
        },
        iconShadow: {
            filter: 'drop-shadow(0px 0px 6px rgba(28, 104, 243, 0.6))'
        },
        change: {
            marginLeft: theme.spacing(4),
            backgroundColor: entry/* MaskColorVar.twitterButton */.ZN.twitterButton,
            borderRadius: 9999,
            fontWeight: 600,
            fontSize: 14
        },
        divider: {
            borderColor: theme.palette.mode === 'dark' ? '#2F3336' : '#F2F5F6',
            marginLeft: 16,
            marginRight: 16
        },
        paper: {
            backgroundColor: 'black',
            width: 335
        }
    })
);
function AddressNames(props) {
    const { onChange: onChange1 , account , wallets  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const onClose = ()=>setAnchorEl(null)
    ;
    const onOpen = (event)=>setAnchorEl(event.currentTarget)
    ;
    const t = useI18N();
    const currentPluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const [selectedWallet1, setSelectedWallet] = (0,react.useState)(account || wallets?.[0]?.identity || '');
    const chainId1 = (0,entry_web3/* useChainId */.xx)(currentPluginId);
    const onClick = (0,react.useCallback)((address, pluginId, chainId)=>{
        onChange1(address, pluginId, chainId);
        setSelectedWallet(address);
        onClose();
    }, []);
    const theme = (0,useTheme/* default */.Z)();
    (0,react.useEffect)(()=>{
        if (!account && !wallets?.[0]?.identity) return;
        setSelectedWallet(account || wallets?.[0]?.identity);
    }, [
        account,
        wallets?.[0]?.identity
    ]);
    const { setDialog: openSelectProviderDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.selectProviderDialogUpdated */.R$.events.selectProviderDialogUpdated);
    const openPopupsWindow = (0,react.useCallback)(()=>{
        service/* Services.Helper.openPopupWindow */.K9.Helper.openPopupWindow(shared_base_src/* PopupRoutes.ConnectedWallets */.mZ.ConnectedWallets, {
            chainId: chainId1,
            internal: true
        });
    }, [
        chainId1
    ]);
    const onConnectWallet = (0,react.useCallback)(()=>{
        openSelectProviderDialog({
            open: true
        });
        onClose();
    }, [
        openSelectProviderDialog,
        onClose
    ]);
    const walletItem = (selectedWallet, wallet, enableChange, verify, isETH, onChange)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            value: wallet,
            onClick: ()=>onClick(wallet, isETH ? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM : currentPluginId, wallets.some((x)=>(0,src/* isSameAddress */.Wr)(x.identity, wallet)
                ) ? types/* ChainId.Mainnet */.a_.Mainnet : chainId1)
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                    children: selectedWallet === wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckedIcon, {
                            className: classnames_default()(classes.icon, classes.iconShadow)
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(UncheckIcon, {
                        className: classes.icon
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletUI, {
                    address: wallet,
                    verify: verify,
                    isETH: isETH
                }),
                enableChange && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    size: "small",
                    className: classes.change,
                    onClick: onChange,
                    children: t.change()
                })
            ]
        })
    ;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                onClick: onOpen,
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletUI, {
                        address: selectedWallet1,
                        isETH: wallets.some((x)=>(0,src/* isSameAddress */.Wr)(x.identity, selectedWallet1)
                        ) || currentPluginId === src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(entry/* ShadowRootMenu */.dy, {
                open: Boolean(anchorEl),
                anchorEl: anchorEl,
                onClose: onClose,
                disableRestoreFocus: true,
                PaperProps: {
                    style: {
                        backgroundColor: theme.palette.mode === 'dark' ? '#000000' : 'white',
                        width: 335
                    }
                },
                children: [
                    account ? walletItem(selectedWallet1, account, Boolean(account), wallets.some((x)=>(0,src/* isSameAddress */.Wr)(x.identity, account)
                    ), wallets.some((x)=>(0,src/* isSameAddress */.Wr)(x.identity, account)
                    ) || currentPluginId === src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, onConnectWallet) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            fullWidth: true,
                            onClick: onConnectWallet,
                            sx: {
                                width: 311,
                                padding: 1,
                                borderRadius: 9999
                            },
                            children: t.connect_your_wallet()
                        })
                    }, "Connect Wallet"),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                        className: classes.divider
                    }, (0,v4/* default */.Z)()),
                    wallets.sort((a, b)=>Number.parseInt(b.created_at, 10) - Number.parseInt(a.created_at, 10)
                    )?.filter((x)=>!(0,src/* isSameAddress */.Wr)(x.identity, account)
                    ).map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                walletItem(selectedWallet1, x.identity, false, true, true),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                                    className: classes.divider
                                }, (0,v4/* default */.Z)())
                            ]
                        }, i)
                    ),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
                        onClick: ()=>{
                            openPopupsWindow();
                            onClose();
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSettingIcon, {
                                    className: classes.icon
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                fontWeight: 700,
                                children: t.wallet_settings()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Verify2Icon, {
                                style: {
                                    marginLeft: 24
                                }
                            })
                        ]
                    }, "Wallet Setting")
                ]
            })
        ]
    });
}
const useWalletUIStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {},
        address: {
            fontSize: 10
        },
        copy: {
            fontSize: 16,
            cursor: 'pointer'
        },
        link: {
            color: theme.palette.text.secondary,
            lineHeight: 0
        },
        linkIcon: {
            width: 16,
            height: 16
        },
        walletName: {
            color: theme.palette.mode === 'dark' ? '#D9D9D9' : '#0F1419'
        },
        walletAddress: {
            color: theme.palette.mode === 'dark' ? '#6E767D' : '#536471'
        }
    })
);
function WalletUI(props) {
    const { isETH , address , verify =false  } = props;
    const { classes  } = useWalletUIStyles();
    const currentPluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const chainId = (0,entry_web3/* useChainId */.xx)(isETH ? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM : currentPluginId);
    const networkDescriptor = (0,entry_web3/* useNetworkDescriptor */.Vw)(isETH ? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM : currentPluginId, chainId);
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, address);
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(isETH ? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM : currentPluginId);
    if (!address) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        alignItems: "center",
        justifyContent: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                size: 30,
                icon: networkDescriptor?.icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "column",
                style: {
                    marginLeft: 4
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        display: "flex",
                        fontSize: 14,
                        flexDirection: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.walletName,
                                fontWeight: 700,
                                fontSize: 14,
                                children: currentPluginId === src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM ? domain ?? (0,Avatar_utils/* formatAddress */.Tg)(address, 4) : (0,Avatar_utils/* formatAddress */.Tg)(address, 4)
                            }),
                            verify ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyIcon, {
                                style: {
                                    width: 13,
                                    height: 13,
                                    marginLeft: 4
                                }
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        direction: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                color: "textSecondary",
                                className: classnames_default()(classes.address, classes.walletAddress),
                                children: (0,Avatar_utils/* formatAddress */.Tg)(address, 4)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIconButton, {
                                text: address,
                                className: classes.copy
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: Others?.explorerResolver.addressLink?.(chainId, address) ?? '',
                                target: "_blank",
                                title: "View on Explorer",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkIcon, {
                                    className: classes.linkIcon
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const CopyIconButton = /*#__PURE__*/ (0,react.memo)(({ text , ...props })=>{
    const t = useI18N();
    const theme = (0,useTheme/* default */.Z)();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const [open, setOpen] = (0,react.useState)(false);
    const onCopy = (0,shared_src/* useSnackbarCallback */.iD)({
        executor: async ()=>copyToClipboard(text)
        ,
        deps: [],
        successText: t.copy_success_of_wallet_address()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* ShadowRootTooltip */.p_, {
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            style: {
                color: theme.palette.text.primary
            },
            children: t.copied()
        }),
        open: open,
        onMouseLeave: ()=>setOpen(false)
        ,
        disableFocusListener: true,
        disableTouchListener: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {
            onClick: onCopy,
            className: props.className
        })
    });
});

// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/wallet.tsx


const WalletIcon = (0,utils/* createIcon */.I)('WalletIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.6499 8.36282C4.6499 8.03145 4.91853 7.76282 5.2499 7.76282H9.7499C10.0813 7.76282 10.3499 8.03145 10.3499 8.36282C10.3499 8.69419 10.0813 8.96282 9.7499 8.96282H5.2499C4.91853 8.96282 4.6499 8.69419 4.6499 8.36282Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.2674 2.72991C3.06877 2.72991 2.0999 3.69878 2.0999 4.89741V8.3624C2.0999 8.69378 1.83127 8.9624 1.4999 8.9624C1.16853 8.9624 0.899902 8.69378 0.899902 8.3624V4.89741C0.899902 3.03604 2.40603 1.52991 4.2674 1.52991H8.4824C9.36856 1.52991 10.2054 1.80585 10.8305 2.34197C11.4641 2.88541 11.8499 3.67243 11.8499 4.61241C11.8499 4.94378 11.5813 5.21241 11.2499 5.21241C10.9185 5.21241 10.6499 4.94378 10.6499 4.61241C10.6499 4.02238 10.4169 3.56815 10.0493 3.25284C9.67312 2.93021 9.12624 2.72991 8.4824 2.72991H4.2674Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.4999 5.21282C3.17377 5.21282 2.0999 6.28669 2.0999 7.61282V12.8628C2.0999 14.1889 3.17377 15.2628 4.4999 15.2628H11.9999C13.326 15.2628 14.3999 14.1889 14.3999 12.8628V12.3753H14.3024C13.3619 12.3753 12.3958 11.7967 12.1255 10.7911L12.1247 10.788L12.1247 10.788C11.919 10.0065 12.1634 9.23223 12.6871 8.72452C13.0777 8.3272 13.6126 8.10028 14.1899 8.10028H14.3999V7.61282C14.3999 6.29419 13.3185 5.21282 11.9999 5.21282H4.4999ZM0.899902 7.61282C0.899902 5.62395 2.51103 4.01282 4.4999 4.01282H11.9999C13.9813 4.01282 15.5999 5.63145 15.5999 7.61282V8.70028C15.5999 9.03165 15.3313 9.30028 14.9999 9.30028H14.1899C13.9307 9.30028 13.7036 9.40067 13.5398 9.56888C13.5351 9.57371 13.5303 9.57847 13.5254 9.58314C13.3045 9.79525 13.1921 10.1267 13.2847 10.481C13.3901 10.8697 13.8036 11.1753 14.3024 11.1753H14.9999C15.3313 11.1753 15.5999 11.4439 15.5999 11.7753V12.8628C15.5999 14.8517 13.9888 16.4628 11.9999 16.4628H4.4999C2.51103 16.4628 0.899902 14.8517 0.899902 12.8628V7.61282Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.1901 9.29973C13.9309 9.29973 13.7037 9.40012 13.54 9.56833L13.5292 9.5791C13.3374 9.76637 13.2305 10.0327 13.2574 10.3154L13.2581 10.3224L13.258 10.3224C13.2959 10.7764 13.7348 11.1748 14.2801 11.1748H15.7276C15.8275 11.1748 15.9001 11.0946 15.9001 11.0097V9.46475C15.9001 9.37993 15.8275 9.29973 15.7276 9.29973H14.1901ZM12.6855 8.72574C13.0763 8.32732 13.6119 8.09973 14.1901 8.09973H15.7276C16.4826 8.09973 17.1001 8.70956 17.1001 9.46475V11.0097C17.1001 11.7649 16.4826 12.3748 15.7276 12.3748H14.2801C13.2064 12.3748 12.1614 11.5897 12.0625 10.4256C12.0009 9.76738 12.2515 9.15251 12.6855 8.72574Z",
            fill: "white"
        })
    ]
}), '0 0 18 18');

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Launch.js
var Launch = __webpack_require__(32841);
// EXTERNAL MODULE: ./src/plugins/Avatar/assets/application.tsx
var application = __webpack_require__(3988);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/WalletConnect.tsx











const WalletConnect_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(249, 55, 55, 0.2) 100%), #FFFFFF',
            borderRadius: 16,
            padding: 14,
            position: 'relative',
            height: 196,
            margin: theme.spacing(2)
        },
        title: {
            display: 'flex',
            color: '#07101b'
        },
        button: {
            textAlign: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 16,
            width: '100%'
        },
        link: {
            padding: 0,
            marginLeft: theme.spacing(0.5),
            marginTop: 2,
            color: '#6E767D'
        },
        rectangle: {
            marginLeft: theme.spacing(1),
            marginTop: theme.spacing(6)
        }
    })
);
function NFTWalletConnect(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(WalletConnect_useStyles(), props);
    const providerType = (0,entry_web3/* useProviderType */._o)();
    const t = useI18N();
    const { setDialog: openSelectProviderDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.selectProviderDialogUpdated */.R$.events.selectProviderDialogUpdated);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(application/* ApplicationSmallIcon */.tc, {
                        sx: {
                            fill: 'white'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        fontSize: 16,
                        fontWeight: 700,
                        sx: {
                            flex: 1,
                            color: '#07101B',
                            marginLeft: 1
                        },
                        children: t.application_dialog_title()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "#536471",
                        children: t.provider_by()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginLeft: 0.5
                        },
                        color: "#07101b",
                        fontWeight: 500,
                        children: "Mask Network"
                    }),
                    providerType ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        className: classes.link,
                        href: resolver/* providerResolver.providerHomeLink */.bN.providerHomeLink(providerType),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: stop,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch/* default */.Z, {
                            fontSize: "small"
                        })
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Rectangle, {
                className: classes.rectangle
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.button,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: ()=>openSelectProviderDialog({
                            open: true
                        })
                    ,
                    style: {
                        width: 254,
                        backgroundColor: '#07101b',
                        color: 'white',
                        borderRadius: 9999
                    },
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon, {
                        style: {
                            width: 18,
                            height: 18
                        }
                    }),
                    children: t.connect_your_wallet()
                })
            })
        ]
    });
}
const useRectangleStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        rectangle: {
            height: 8,
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 8
        }
    })
);
function Rectangle(props) {
    const { classes  } = useRectangleStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.rectangle,
                style: {
                    width: 103
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.rectangle,
                style: {
                    width: 68,
                    marginTop: 4
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.rectangle,
                style: {
                    width: 48,
                    marginTop: 4
                }
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/plugins/Avatar/Application/NFTListPage.tsx + 2 modules
var NFTListPage = __webpack_require__(7602);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ./src/plugins/Avatar/constants.ts
var constants = __webpack_require__(80624);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/NFTList.tsx









const NFTList_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        selected: {
            backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
            border: '1px solid transparent',
            borderTop: `1px solid ${theme.palette.mode === 'dark' ? '#2F3336' : '#EFF3F4'}`,
            color: `${theme.palette.text.primary} !important`,
            minHeight: 37,
            height: 37,
            zIndex: 1
        },
        tab: {
            backgroundColor: theme.palette.mode === 'dark' ? '#15171A' : '#F6F8F8',
            color: theme.palette.text.secondary,
            borderTop: '1px solid transparent',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#2F3336' : '#EFF3F4'}`,
            minHeight: 37,
            height: 37,
            zIndex: 1
        },
        tabPanel: {
            padding: theme.spacing(1),
            paddingTop: 50,
            paddingBottom: 80
        }
    })
);
function NFTList(props) {
    const { onSelect , tokenInfo , onChangeChain , tokens =[] , children , chainId , nextPage , loadError , loadFinish ,  } = props;
    const [currentTab, onChange, tabs, setTab] = (0,entry/* useTabs */.YE)(constants/* Application_NFT_LIST_PAGE.Application_nft_tab_eth_page */.U$.Application_nft_tab_eth_page, constants/* Application_NFT_LIST_PAGE.Application_nft_tab_polygon_page */.U$.Application_nft_tab_polygon_page);
    const { classes  } = NFTList_useStyles({
        currentTab
    });
    const _onChange = (event, value)=>{
        onChange(event, value);
        onChangeChain?.(value === constants/* Application_NFT_LIST_PAGE.Application_nft_tab_eth_page */.U$.Application_nft_tab_eth_page ? types/* ChainId.Mainnet */.a_.Mainnet : types/* ChainId.Matic */.a_.Matic);
    };
    (0,react.useEffect)(()=>{
        setTab(chainId === types/* ChainId.Matic */.a_.Matic ? constants/* Application_NFT_LIST_PAGE.Application_nft_tab_polygon_page */.U$.Application_nft_tab_polygon_page : constants/* Application_NFT_LIST_PAGE.Application_nft_tab_eth_page */.U$.Application_nft_tab_eth_page);
    }, [
        chainId,
        setTab
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
        value: currentTab,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                value: currentTab,
                variant: "fullWidth",
                onChange: _onChange,
                sx: {
                    minHeight: 37,
                    height: 37,
                    '.MuiTabsindicator': {
                        display: 'none'
                    },
                    position: 'absolute',
                    width: '99.5%',
                    justifyContent: 'center'
                },
                children: constants/* SUPPORTED_CHAIN_IDS.map */.FQ.map((x, i)=>{
                    const curChainId = currentTab === tabs.ETH ? types/* ChainId.Mainnet */.a_.Mainnet : types/* ChainId.Matic */.a_.Matic;
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: 14,
                            fontWeight: 700,
                            children: x === types/* ChainId.Mainnet */.a_.Mainnet ? constants/* Application_NFT_LIST_PAGE.Application_nft_tab_eth_page */.U$.Application_nft_tab_eth_page : constants/* Application_NFT_LIST_PAGE.Application_nft_tab_polygon_page */.U$.Application_nft_tab_polygon_page
                        }),
                        value: x === types/* ChainId.Mainnet */.a_.Mainnet ? tabs.ETH : tabs.Polygon,
                        className: curChainId === x ? classes.selected : classes.tab
                    }, i);
                })
            }),
            constants/* SUPPORTED_CHAIN_IDS.map */.FQ.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: x === types/* ChainId.Mainnet */.a_.Mainnet ? tabs.ETH : tabs.Polygon,
                    className: classes.tabPanel,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTListPage/* NFTListPage */.T, {
                        pluginId: src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                        tokens: tokens,
                        tokenInfo: tokenInfo,
                        onChange: onSelect,
                        children: children,
                        nextPage: nextPage,
                        loadError: !!loadError,
                        loadFinish: loadFinish
                    })
                }, i)
            )
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/NFTListDialog.tsx

















const NFTListDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        AddressNames: {
            position: 'absolute',
            top: 10,
            right: 10
        },
        button: {
            width: 219.5,
            borderRadius: 999
        },
        AddCollectiblesButton: {
            fontWeight: 600,
            color: '#1D9BF0'
        },
        actions: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: 'calc(100% - 32px)'
        },
        content: {
            height: 612,
            padding: 0,
            backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
            marginBottom: 72,
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250, 250, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundClip: 'padding-box'
            }
        },
        error: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            paddingTop: 260
        },
        skeleton: {
            width: 97,
            height: 97,
            objectFit: 'cover',
            borderRadius: '100%',
            boxSizing: 'border-box',
            padding: 6,
            margin: theme.spacing(0.5, 1)
        },
        skeletonBox: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        gallery: {
            display: 'flex',
            flexFlow: 'row wrap',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    })
);
function isSameToken(token, tokenInfo) {
    if (!token && !tokenInfo) return false;
    return (0,src/* isSameAddress */.Wr)(token?.address, tokenInfo?.address) && token?.tokenId === tokenInfo?.tokenId;
}
function NFTListDialog(props) {
    const { onNext , wallets , onSelected , tokenInfo  } = props;
    const { classes  } = NFTListDialog_useStyles();
    const currentPluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const account = (0,entry_web3/* useAccount */.mA)(currentPluginId);
    const currentChainId = (0,entry_web3/* useChainId */.xx)(currentPluginId);
    const [chainId1, setChainId] = (0,react.useState)(currentChainId ?? types/* ChainId.Mainnet */.a_.Mainnet);
    const [open_, setOpen_] = (0,react.useState)(false);
    const [selectedAccount, setSelectedAccount] = (0,react.useState)((account ?? wallets?.[0]?.identity) ?? '');
    const [selectedPluginId, setSelectedPluginId] = (0,react.useState)(currentPluginId ?? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [selectedToken, setSelectedToken] = (0,react.useState)(tokenInfo);
    const [disabled, setDisabled] = (0,react.useState)(false);
    const t = useI18N();
    const [tokens, setTokens] = (0,react.useState)([]);
    const { value: collectibles = shared_base_src/* EMPTY_LIST */.rP , done: loadFinish , next: nextPage , error: loadError ,  } = (0,entry_web3/* useNonFungibleAssets */.H1)(selectedPluginId, undefined, {
        chainId: chainId1,
        account: selectedAccount
    });
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const onChangeWallet = (address, pluginId, chainId)=>{
        setSelectedAccount(address);
        setSelectedPluginId(pluginId);
        setChainId(chainId);
        setSelectedToken(undefined);
    };
    const onChangeToken = (token)=>{
        setSelectedToken(token);
    };
    const onSave = (0,react.useCallback)(async ()=>{
        if (!selectedToken?.metadata?.imageURL) return;
        setDisabled(true);
        try {
            const image = await (0,Avatar_utils/* toPNG */.mr)(selectedToken.metadata.imageURL);
            if (!image) {
                showSnackbar(t.download_image_error(), {
                    variant: 'error'
                });
                return;
            }
            onSelected({
                image: URL.createObjectURL(image),
                account: selectedAccount,
                token: selectedToken,
                pluginId: selectedPluginId
            });
            setDisabled(false);
            onNext();
        } catch (error) {
            showSnackbar(String(error), {
                variant: 'error'
            });
            return;
        }
    }, [
        selectedToken,
        selectedAccount,
        selectedPluginId
    ]);
    const onClick = (0,react.useCallback)(()=>{
        if (!account && !wallets?.length) {
            showSnackbar(t.connect_wallet(), {
                variant: 'error'
            });
            return;
        }
        setOpen_(true);
    }, [
        account,
        wallets,
        showSnackbar
    ]);
    (0,react.useEffect)(()=>{
        setDisabled(!selectedToken || isSameToken(selectedToken, tokenInfo));
    }, [
        selectedToken,
        tokenInfo
    ]);
    (0,react.useEffect)(()=>{
        setSelectedPluginId(currentPluginId);
    }, [
        currentPluginId
    ]);
    (0,react.useEffect)(()=>{
        setChainId(currentChainId);
    }, [
        currentChainId
    ]);
    (0,react.useEffect)(()=>setSelectedAccount(account || wallets?.[0]?.identity || '')
    , [
        account,
        wallets
    ]);
    const onAddClick = (token)=>{
        setTokens((_tokens)=>(0,uniqBy/* default */.Z)([
                ..._tokens,
                token
            ], (x)=>x.contract?.address.toLowerCase() + x.tokenId
            )
        );
    };
    const onChangeChain = (chainId)=>{
        setChainId(chainId);
    };
    const AddCollectible = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.error,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textSecondary",
                textAlign: "center",
                fontSize: 14,
                fontWeight: 600,
                children: selectedPluginId === src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM ? chainId1 === types/* ChainId.Matic */.a_.Matic ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate.collectible_on_polygon, {
                    components: {
                        br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                    }
                }) : t.collectible_no_eth() : t.collectible_no_collectible()
            }),
            selectedPluginId === src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.AddCollectiblesButton,
                variant: "text",
                onClick: ()=>setOpen_(true)
                ,
                children: t.add_collectible()
            }) : null
        ]
    });
    const LoadStatus = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.gallery,
        children: (0,range/* default */.Z)(8).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                variant: "rectangular",
                className: classes.skeleton
            }, i)
        )
    });
    const Retry = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.error,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textSecondary",
                children: t.no_collectible_found()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.button,
                variant: "text",
                onClick: nextPage,
                children: t.retry()
            })
        ]
    });
    const tokensInList = (0,uniqBy/* default */.Z)([
        ...tokens.filter((x)=>x.chainId === chainId1
        ),
        ...collectibles
    ], selectedPluginId === src/* NetworkPluginID.PLUGIN_SOLANA */.FF.PLUGIN_SOLANA ? (x)=>x.tokenId
     : (x)=>x.contract?.address.toLowerCase() + x.tokenId
    ).filter((x)=>x.chainId === chainId1
    );
    const NoNFTList = ()=>{
        if (!collectibles.length && !loadFinish && !loadError) {
            return LoadStatus;
        }
        if (chainId1 === types/* ChainId.Matic */.a_.Matic && tokensInList.length) return;
        if (tokensInList.length === 0) return AddCollectible;
        if (loadError && !loadFinish && !collectibles.length) {
            return Retry;
        }
        return;
    };
    if (!wallets?.length && !account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
        className: classes.content,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTWalletConnect, {})
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AddressNames, {
                        account: account,
                        wallets: wallets ?? [],
                        classes: {
                            root: classes.AddressNames
                        },
                        onChange: onChangeWallet
                    }),
                    (account || Boolean(wallets?.length)) && (selectedPluginId !== src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTListPage/* NFTListPage */.T, {
                        pluginId: selectedPluginId,
                        tokens: tokensInList,
                        tokenInfo: selectedToken,
                        onChange: onChangeToken,
                        children: NoNFTList(),
                        nextPage: nextPage,
                        loadError: !!loadError,
                        loadFinish: loadFinish
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTList, {
                        chainId: chainId1,
                        onSelect: onChangeToken,
                        tokens: tokensInList,
                        tokenInfo: selectedToken,
                        children: NoNFTList(),
                        onChangeChain: onChangeChain,
                        nextPage: nextPage,
                        loadError: !!loadError,
                        loadFinish: loadFinish
                    }))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: [
                    selectedPluginId === src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM && tokensInList.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        sx: {
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'row',
                            paddingLeft: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "#1D9BF0",
                            sx: {
                                cursor: 'pointer',
                                paddingLeft: 0.5
                            },
                            onClick: onClick,
                            children: t.add_collectible()
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                        className: classes.button,
                        disabled: disabled,
                        init: !selectedToken ? t.set_PFP_title() : t.set_avatar_title(),
                        waiting: t.downloading_image(),
                        executor: onSave,
                        completeIcon: null,
                        failIcon: null,
                        failed: t.set_avatar_title(),
                        failedOnClick: "use executor",
                        "data-testid": "confirm_button",
                        complete: t.set_avatar_title(),
                        children: !selectedToken ? t.set_PFP_title() : t.set_avatar_title()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddNFT/* AddNFT */.F, {
                account: selectedAccount,
                chainId: chainId1,
                title: t.add_collectible(),
                open: open_,
                onClose: ()=>setOpen_(false)
                ,
                onAddClick: onAddClick,
                expectedPluginID: selectedPluginId
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Slider/Slider.js
var Slider = __webpack_require__(4612);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-avatar-editor@13.0.0/node_modules/react-avatar-editor/dist/index.js
var dist = __webpack_require__(991);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/user.ts
var user = __webpack_require__(70667);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(9987);
// EXTERNAL MODULE: ./src/plugins/Avatar/context.ts
var context = __webpack_require__(79533);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(14257);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/save/useSave.ts + 3 modules
var useSave = __webpack_require__(30257);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/UploadAvatarDialog.tsx














const UploadAvatarDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        actions: {
            padding: theme.spacing(0, 2, 2, 2)
        },
        cancel: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#111418',
            border: 'none',
            '&:hover': {
                border: 'none'
            }
        }
    })
);
async function uploadAvatar(blob, userId) {
    try {
        const media = await web3_providers_src/* Twitter.uploadUserAvatar */.tL.uploadUserAvatar(userId, blob);
        const data = await web3_providers_src/* Twitter.updateProfileImage */.tL.updateProfileImage(userId, media.media_id_string);
        if (!data) {
            return;
        }
        const avatarId = (0,user/* getAvatarId */.yd)(data?.imageUrl ?? '');
        return {
            ...data,
            avatarId
        };
    } catch (err) {
        return;
    }
}
function UploadAvatarDialog(props) {
    const { image , account , token , onClose , onBack , proof , isBindAccount =false , pluginId  } = props;
    const currentPluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)(pluginId);
    const { classes  } = UploadAvatarDialog_useStyles();
    const identifier = (0,use_subscription.useSubscription)(context/* context.currentVisitingProfile */.D.currentVisitingProfile);
    const [editor, setEditor] = (0,react.useState)(null);
    const [scale, setScale] = (0,react.useState)(1);
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const [disabled, setDisabled] = (0,react.useState)(false);
    const { currentConnectedPersona  } = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const t = useI18N();
    const [, saveAvatar] = (0,useSave/* useSave */.O)(currentPluginId, token?.chainId ?? types/* ChainId.Mainnet */.a_.Mainnet);
    const onSave = (0,react.useCallback)(async ()=>{
        if (!editor || !account || !token || !currentConnectedPersona?.identifier || !proof) return;
        editor.getImage().toBlob(async (blob)=>{
            if (!blob) return;
            setDisabled(true);
            const avatarData = await uploadAvatar(blob, proof.identity);
            if (!avatarData) {
                setDisabled(false);
                return;
            }
            const response = await saveAvatar(account, isBindAccount, token, avatarData, currentConnectedPersona.identifier, proof);
            if (!response) {
                showSnackbar(t.upload_avatar_failed_message(), {
                    variant: 'error'
                });
                setDisabled(false);
                return;
            }
            showSnackbar(t.upload_avatar_success_message(), {
                variant: 'success'
            });
            location.reload();
            onClose();
            setDisabled(false);
        }, 'image/png');
    }, [
        account,
        editor,
        identifier,
        onClose,
        currentConnectedPersona,
        proof,
        isBindAccount,
        saveAvatar
    ]);
    if (!account || !image || !token || !proof) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                sx: {
                    overFlow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((dist_default()), {
                        ref: (e)=>setEditor(e)
                        ,
                        image: image,
                        style: {
                            width: '100%',
                            height: '100%'
                        },
                        scale: scale ?? 1,
                        rotate: 0,
                        border: 50,
                        borderRadius: 300
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
                        disabled: disabled,
                        max: 2,
                        min: 0.5,
                        step: 0.1,
                        defaultValue: 1,
                        onChange: (_, value)=>setScale(value)
                        ,
                        "aria-label": "Scale"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        disabled: disabled,
                        className: classes.cancel,
                        fullWidth: true,
                        variant: "outlined",
                        onClick: onBack,
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        fullWidth: true,
                        onClick: onSave,
                        disabled: disabled,
                        children: t.save()
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/close.tsx


const CloseIcon = (0,utils/* createIcon */.I)('CloseIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M11.1782 9.9999L16.0057 5.1724C16.3307 4.8474 16.3307 4.3199 16.0057 3.99406C15.6807 3.66823 15.1532 3.66906 14.8274 3.99406L9.9999 8.82156L5.1724 3.99406C4.8474 3.66906 4.3199 3.66906 3.99406 3.99406C3.66823 4.31906 3.66906 4.84656 3.99406 5.1724L8.82156 9.9999L3.99406 14.8274C3.66906 15.1524 3.66906 15.6799 3.99406 16.0057C4.15656 16.1682 4.36906 16.2499 4.58323 16.2499C4.7974 16.2499 5.0099 16.1682 5.1724 16.0057L9.9999 11.1782L14.8274 16.0057C14.9899 16.1682 15.2024 16.2499 15.4166 16.2499C15.6307 16.2499 15.8432 16.1682 16.0057 16.0057C16.3307 15.6807 16.3307 15.1532 16.0057 14.8274L11.1782 9.9999Z",
        fill: "currentColor"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/usePersonas.ts









function usePersonas(userId) {
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const currentIdentifier = (0,use_subscription.useSubscription)(context/* context.currentVisitingProfile */.D.currentVisitingProfile);
    const platform = social_network/* activatedSocialNetworkUI.configuration.nextIDConfig */.LM.configuration.nextIDConfig?.platform;
    const identifier = (0,use_subscription.useSubscription)(context/* context.lastRecognizedProfile */.D.lastRecognizedProfile);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!identifier?.identifier?.userId) return;
        const personaBindings = await web3_providers_src/* NextIDProof.queryExistedBindingByPlatform */.q7.queryExistedBindingByPlatform(platform, userId?.toLowerCase() ?? identifier.identifier.userId.toLowerCase());
        const currentPersonaBinding = (0,head/* default */.Z)(personaBindings.sort((a, b)=>(0,Avatar_utils/* sortPersonaBindings */.bA)(a, b, (userId?.toLowerCase() ?? identifier.identifier?.userId.toLowerCase()) ?? '')
        ));
        if (!currentPersonaBinding) return;
        const isOwner = userId ? currentIdentifier?.identifier?.toText() === userId.toLowerCase() : currentIdentifier?.identifier && identifier.identifier && currentIdentifier?.identifier.toText() === identifier.identifier.toText();
        const wallets = currentPersonaBinding?.proofs.filter((proof)=>proof.platform === shared_base_src/* NextIDPlatform.Ethereum */.Vd.Ethereum
        );
        return {
            wallets,
            isOwner,
            binds: currentPersonaBinding,
            status: personaConnectStatus
        };
    }, [
        currentIdentifier,
        identifier,
        personaConnectStatus.hasPersona,
        platform,
        userId
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(836);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/point.tsx


const PointIcon = (0,utils/* createIcon */.I)('PointIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M4.6001 8.29999C6.5331 8.29999 8.1001 6.73298 8.1001 4.79999C8.1001 2.86699 6.5331 1.29999 4.6001 1.29999C2.6671 1.29999 1.1001 2.86699 1.1001 4.79999C1.1001 6.73298 2.6671 8.29999 4.6001 8.29999Z",
        fill: "#3DC233",
        stroke: "white"
    })
}), '0 0 9 9');

;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/twitter.tsx


const TwitterIcon = (0,utils/* createIcon */.I)('TwitterIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M0.599976 7.66533C0.599976 3.68888 3.82353 0.465332 7.79997 0.465332C11.7764 0.465332 15 3.68888 15 7.66533C15 11.6418 11.7764 14.8653 7.79997 14.8653C3.82353 14.8653 0.599976 11.6418 0.599976 7.66533Z",
            fill: "#1DA1F2"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M6.38413 10.6854C9.26371 10.6854 10.8387 8.36099 10.8387 6.34529C10.8387 6.27927 10.8387 6.21355 10.8341 6.14812C11.1405 5.93219 11.405 5.66483 11.6152 5.35856C11.3295 5.48197 11.0264 5.56287 10.716 5.59855C11.0429 5.40794 11.2875 5.1081 11.4043 4.75486C11.097 4.93255 10.7608 5.05777 10.4102 5.12511C10.1741 4.88056 9.86192 4.71862 9.5219 4.66436C9.18187 4.6101 8.83296 4.66654 8.52918 4.82494C8.22539 4.98335 7.98365 5.23488 7.84137 5.54063C7.6991 5.84637 7.66421 6.18928 7.74211 6.51629C7.11967 6.48587 6.51075 6.32826 5.95487 6.0537C5.39899 5.77914 4.90859 5.39377 4.51548 4.92258C4.31528 5.25838 4.25396 5.6559 4.34401 6.0342C4.43406 6.41251 4.66872 6.74315 5.00019 6.9588C4.75103 6.95169 4.50729 6.8862 4.28961 6.76788V6.78721C4.28971 7.13938 4.41484 7.48068 4.64377 7.75322C4.8727 8.02575 5.19134 8.21275 5.54565 8.28248C5.31516 8.34374 5.07332 8.35269 4.83873 8.30865C4.93881 8.61172 5.13359 8.87674 5.39584 9.06666C5.65809 9.25659 5.9747 9.36193 6.30141 9.36795C5.9768 9.61654 5.60508 9.80034 5.2075 9.90882C4.80992 10.0173 4.39428 10.0484 3.98438 10.0002C4.70035 10.4478 5.53341 10.6853 6.38413 10.6842",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.79997 13.8653C4.37581 13.8653 1.59998 11.0895 1.59998 7.66533H-0.400024C-0.400024 12.1941 3.27124 15.8653 7.79997 15.8653V13.8653ZM14 7.66533C14 11.0895 11.2241 13.8653 7.79997 13.8653V15.8653C12.3287 15.8653 16 12.1941 16 7.66533H14ZM7.79997 1.46533C11.2241 1.46533 14 4.24117 14 7.66533H16C16 3.1366 12.3287 -0.534668 7.79997 -0.534668V1.46533ZM7.79997 -0.534668C3.27124 -0.534668 -0.400024 3.1366 -0.400024 7.66533H1.59998C1.59998 4.24117 4.37581 1.46533 7.79997 1.46533V-0.534668Z",
            fill: "#F9F9F9"
        })
    ]
}), '0 0 15 15');

// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/RainbowBox.tsx
var RainbowBox = __webpack_require__(36199);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/NFTAvatar.tsx






const SOCIAL_MEDIA_ICON_MAPPING = {
    [shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter]: /*#__PURE__*/ (0,jsx_runtime.jsx)(TwitterIcon, {
        style: {
            width: 15,
            height: 15
        }
    }),
    [shared_base_src/* EnhanceableSite.Localhost */.Jk.Localhost]: null
};
function NFTAvatar(props) {
    const { avatar , hasBorder , platform ='' , owner =false  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        position: "relative",
        children: [
            hasBorder ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RainbowBox/* RainbowBox */._, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                    src: avatar
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                style: {
                    border: '2px solid transparent'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                    src: avatar
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                sx: {
                    position: 'absolute',
                    right: -3,
                    bottom: 0,
                    overflow: 'hidden',
                    borderRadius: '100%',
                    backgroundColor: 'white'
                },
                children: SOCIAL_MEDIA_ICON_MAPPING[shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter]
            }),
            owner ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PointIcon, {
                sx: {
                    position: 'absolute',
                    top: 1,
                    right: 6,
                    width: 8,
                    height: 8
                }
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/NFTInfo.tsx










const NFTInfo_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        root: {
            width: 160
        },
        nft: {
            display: 'flex',
            alignItems: 'center'
        }
    })
);
function NFTInfo(props) {
    const { nft , owner , loading =false  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(NFTInfo_useStyles(), props);
    const t = useI18N();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(nft?.networkPluginID ?? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
        size: 24
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.root,
        children: !nft ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            fontWeight: 700,
            fontSize: 12,
            children: t.persona_set_nft()
        }) : !owner ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            color: "#FFB915",
            fontWeight: 700,
            fontSize: 12,
            children: t.persona_verification_failed()
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.nft,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(application/* ApplicationRoundIcon */.Ff, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        marginLeft: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textPrimary",
                            children: (0,shared_base_src/* formatPersonaName */.rY)(nft.name.replace(/#\d+/, ''))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    children: (0,Avatar_utils/* formatTokenId */.Xy)(nft.symbol, nft.tokenId)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    sx: {
                                        marginLeft: 0.5,
                                        lineHeight: 0
                                    },
                                    href: Others?.explorerResolver.nonFungibleTokenLink(nft.chainId, nft.address, nft.tokenId),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkIcon, {
                                        sx: {
                                            width: 16,
                                            height: 16
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(8461);
;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/more.tsx


const svg = /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.43427 19.5657C8.12185 19.2533 8.12185 18.7468 8.43427 18.4344L14.8686 12L8.43427 5.56573C8.12185 5.25331 8.12185 4.74678 8.43427 4.43436C8.74668 4.12194 9.25322 4.12194 9.56564 4.43436L16.5656 11.4344C16.8781 11.7468 16.8781 12.2533 16.5656 12.5657L9.56564 19.5657C9.25322 19.8782 8.74669 19.8782 8.43427 19.5657Z",
        fill: "#536471"
    })
});
const MoreIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: svg
    })
;

// EXTERNAL MODULE: ./src/plugins/Avatar/messages.ts
var messages = __webpack_require__(63970);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useTokenOwner.ts






function useTokenOwner(address, tokenId, pluginId, chainId, account) {
    const hub = (0,entry_web3/* useWeb3Hub */.hh)(pluginId, {
        chainId,
        account
    });
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !tokenId || !hub?.getNonFungibleAsset) return;
        const token = await hub.getNonFungibleAsset(address, tokenId, {
            chainId
        });
        return {
            owner: token?.owner?.address ?? token?.ownerId,
            name: token?.contract?.name,
            symbol: token?.contract?.symbol
        };
    }, [
        hub,
        tokenId,
        address,
        account,
        chainId
    ]);
}
function useCheckTokenOwner(pluginId, userId, owner) {
    const { value: persona , loading  } = usePersonas(userId);
    const { value: storage , loading: loadingAddress  } = (0,useAsyncRetry/* default */.Z)(async ()=>messages/* PluginNFTAvatarRPC.getAddress */.B.getAddress(social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier, userId)
    , [
        userId
    ]);
    return {
        loading: loading || loadingAddress,
        isOwner: Boolean(storage?.address && (0,src/* isSameAddress */.Wr)(storage.address, owner) && pluginId === storage.networkPluginID || persona?.wallets.some((x)=>(0,src/* isSameAddress */.Wr)(x.identity, owner)
        ))
    };
}

// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/usePersonaNFTAvatar.ts
var usePersonaNFTAvatar = __webpack_require__(15495);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/useWallet.ts
var useWallet = __webpack_require__(17321);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/PersonaItem.tsx














const PersonaItem_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        root: {
            margin: theme.spacing(2, 0.5),
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 16,
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        userInfo: {
            fontSize: 14,
            marginLeft: 16,
            flex: 1
        }
    })
);
function PersonaItem(props) {
    const { userId , onSelect , owner =false , proof , avatar , nickname =''  } = props;
    const { classes  } = PersonaItem_useStyles({
        disabled: !owner
    });
    const { value: _avatar , loading  } = (0,usePersonaNFTAvatar/* usePersonaNFTAvatar */.O)(userId, (0,user/* getAvatarId */.yd)(avatar) ?? '', constants/* RSS3_KEY_SNS.TWITTER */.vu.TWITTER);
    const { loading: loadingWallet , value: storage  } = (0,useWallet/* useWallet */.O)(userId);
    const { value: token , loading: loadingToken  } = useTokenOwner(_avatar?.address ?? '', _avatar?.tokenId ?? '', (_avatar?.pluginId ?? storage?.networkPluginID) ?? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, _avatar?.chainId, storage?.address);
    const { loading: loadingCheckOwner , isOwner  } = useCheckTokenOwner(_avatar?.pluginId ?? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, userId, token?.owner ?? '');
    const tokenDetailed = (0,react.useMemo)(()=>({
            tokenId: _avatar?.tokenId ?? '',
            contract: {
                chainId: _avatar?.chainId ?? types/* ChainId.Mainnet */.a_.Mainnet,
                name: token?.name ?? '',
                symbol: token?.symbol ?? 'ETH',
                address: _avatar?.address ?? '',
                schema: types/* SchemaType.ERC721 */.XQ.ERC721,
                owner: token?.owner
            },
            metadata: {
                chainId: _avatar?.chainId ?? types/* ChainId.Mainnet */.a_.Mainnet,
                name: token?.name ?? '',
                symbol: token?.symbol ?? 'ETH'
            },
            id: _avatar?.address ?? '',
            chainId: _avatar?.chainId ?? types/* ChainId.Mainnet */.a_.Mainnet,
            type: src/* TokenType.NonFungible */.iv.NonFungible,
            schema: types/* SchemaType.ERC721 */.XQ.ERC721,
            address: _avatar?.address ?? ''
        })
    , [
        _avatar,
        token
    ]);
    const onClick = (0,react.useCallback)(()=>{
        if (!proof) return;
        onSelect?.(proof, _avatar && isOwner ? tokenDetailed : undefined);
    }, [
        _avatar,
        proof
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
        className: classes.root,
        onClick: onClick,
        disabled: !owner || !proof,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatar, {
                owner: owner,
                avatar: avatar || _avatar?.imageUrl,
                hasBorder: !!_avatar,
                platform: proof?.platform
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.userInfo,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textPrimary",
                        fontSize: 14,
                        fontWeight: 700,
                        children: nickname || _avatar?.nickname
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textSecondary",
                        fontSize: 12,
                        children: [
                            "@",
                            userId
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTInfo, {
                loading: loading || loadingToken || loadingCheckOwner || loadingWallet,
                owner: owner ? isOwner && _avatar?.avatarId === (0,user/* getAvatarId */.yd)(avatar) : true,
                nft: _avatar ? {
                    name: token?.name ?? '',
                    symbol: token?.symbol ?? '',
                    tokenId: _avatar?.tokenId ?? '',
                    address: _avatar?.address ?? '',
                    chainId: _avatar.chainId ?? types/* ChainId.Mainnet */.a_.Mainnet,
                    networkPluginID: _avatar.pluginId ?? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
                } : undefined
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MoreIcon, {
                style: {
                    marginLeft: 24
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/info.tsx


const InfoIcon = (0,utils/* createIcon */.I)('InfoIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.5 10.8652C17.5 15.0074 14.1421 18.3652 10 18.3652C5.85786 18.3652 2.5 15.0074 2.5 10.8652C2.5 6.7231 5.85786 3.36523 10 3.36523C14.1421 3.36523 17.5 6.7231 17.5 10.8652Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.0004 9.47534C10.4146 9.47534 10.7504 9.81113 10.7504 10.2253L10.7504 14.7418C10.7504 15.156 10.4146 15.4918 10.0004 15.4918C9.58615 15.4918 9.25037 15.156 9.25037 14.7418L9.25037 10.2253C9.25037 9.81113 9.58615 9.47534 10.0004 9.47534Z",
            fill: "currentColor",
            style: {
                filter: 'invert(1)'
            }
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.0004 6.97534C10.4146 6.97534 10.7504 7.31113 10.7504 7.72534L10.7504 7.74449C10.7504 8.1587 10.4146 8.49449 10.0004 8.49449C9.58615 8.49449 9.25037 8.1587 9.25037 7.74449L9.25037 7.72534C9.25037 7.31113 9.58615 6.97534 10.0004 6.97534Z",
            fill: "currentColor",
            style: {
                filter: 'invert(1)'
            }
        })
    ]
}), '0 0 20 21');

// EXTERNAL MODULE: ./src/components/DataSource/useMyPersonas.ts
var useMyPersonas = __webpack_require__(80006);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/PersonaPage.tsx













const PersonaPage_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        messageBox: {
            display: 'flex',
            borderRadius: 4,
            padding: 8,
            backgroundColor: theme.palette.mode === 'dark' ? '#15171A' : '#F9F9F9',
            fontSize: 14,
            alignItems: 'center',
            color: theme.palette.text.primary
        }
    })
);
function PersonaPage(props) {
    const { onNext , onChange , onClose  } = props;
    const [visible, setVisible] = (0,react.useState)(true);
    const currentIdentity = (0,use_subscription.useSubscription)(context/* context.lastRecognizedProfile */.D.lastRecognizedProfile);
    const { classes  } = PersonaPage_useStyles();
    const { loading , value: persona  } = usePersonas();
    const myPersonas = (0,useMyPersonas/* useMyPersonas */.n)();
    const t = useI18N();
    const onSelect = (0,react.useCallback)((proof, tokenInfo)=>{
        onChange(proof, persona?.wallets, tokenInfo);
        onNext();
    }, [
        persona?.wallets
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
        sx: {
            height: 612,
            padding: 2
        },
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
            justifyContent: "center",
            alignItems: "center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                visible ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.messageBox,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoIcon, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "currentColor",
                            variant: "body1",
                            fontSize: 14,
                            children: t.persona_hint()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseIcon, {
                            sx: {
                                cursor: 'pointer'
                            },
                            onClick: ()=>setVisible(false)
                        })
                    ]
                }) : null,
                persona?.binds?.proofs.filter((proof)=>proof.platform === shared_base_src/* NextIDPlatform.Twitter */.Vd.Twitter
                ).filter((x)=>x.identity.toLowerCase() === currentIdentity?.identifier?.userId.toLowerCase()
                ).map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaItem, {
                        avatar: currentIdentity?.avatar ?? '',
                        owner: true,
                        nickname: currentIdentity?.nickname,
                        proof: x,
                        userId: currentIdentity?.identifier?.userId ?? x.identity,
                        onSelect: onSelect
                    }, "avatar")
                ),
                myPersonas?.[0] && myPersonas[0].linkedProfiles.filter((x)=>x.identifier.network === currentIdentity?.identifier?.network
                ).map((x, i)=>persona?.binds.proofs.some((y)=>y.identity === x.identifier.userId.toLowerCase()
                    ) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaItem, {
                        avatar: "",
                        owner: false,
                        userId: x.identifier.userId
                    }, `persona${i}`)
                ),
                persona?.binds?.proofs.filter((proof)=>proof.platform === shared_base_src/* NextIDPlatform.Twitter */.Vd.Twitter
                ).filter((x)=>x.identity.toLowerCase() !== currentIdentity?.identifier?.userId.toLowerCase()
                ).map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaItem, {
                        avatar: "",
                        owner: false,
                        userId: x.identity,
                        proof: x
                    }, i)
                )
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/NFTAvatarsDialog.tsx










const NFTAvatarsDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            margin: 0,
            padding: '0px !important',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        }
    })
);
var CreateNFTAvatarStep;
(function(CreateNFTAvatarStep) {
    CreateNFTAvatarStep["Persona"] = 'persona';
    CreateNFTAvatarStep["NFTList"] = "NFTList";
    CreateNFTAvatarStep["UploadAvatar"] = "UploadAvatar";
})(CreateNFTAvatarStep || (CreateNFTAvatarStep = {}));
function NFTAvatarDialog(props) {
    const [step, setStep] = (0,react.useState)(CreateNFTAvatarStep.Persona);
    const [wallets1, setWallets] = (0,react.useState)();
    const [selectedTokenInfo, setSelectedTokenInfo] = (0,react.useState)();
    const [tokenInfo1, setTokenInfo] = (0,react.useState)();
    const [proof1, setProof] = (0,react.useState)();
    const t = useI18N();
    const { classes  } = NFTAvatarsDialog_useStyles();
    const onPersonaChange = (proof, wallets, tokenInfo)=>{
        setWallets(wallets);
        setTokenInfo(tokenInfo);
        setProof(proof);
    };
    const onSelected = (info)=>{
        setSelectedTokenInfo(info);
    };
    const onNext = (0,react.useCallback)(()=>{
        if (step === CreateNFTAvatarStep.Persona) setStep(CreateNFTAvatarStep.NFTList);
        else if (step === CreateNFTAvatarStep.NFTList) setStep(CreateNFTAvatarStep.UploadAvatar);
    }, [
        step
    ]);
    const onBack = (0,react.useCallback)(()=>{
        if (step === CreateNFTAvatarStep.UploadAvatar) setStep(CreateNFTAvatarStep.NFTList);
        else if (step === CreateNFTAvatarStep.NFTList) setStep(CreateNFTAvatarStep.Persona);
        else props.onClose();
    }, [
        step
    ]);
    const onClose = (0,react.useCallback)(()=>{
        setStep(CreateNFTAvatarStep.Persona);
        props.onClose();
    }, [
        props.onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: step === CreateNFTAvatarStep.UploadAvatar ? t.application_edit_profile_dialog_title() : t.application_dialog_title(),
        isOnBack: step !== CreateNFTAvatarStep.Persona,
        open: props.open,
        onClose: onBack,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.root,
            children: [
                step === CreateNFTAvatarStep.Persona ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaPage, {
                    onClose: onClose,
                    onNext: onNext,
                    onChange: onPersonaChange
                }) : null,
                step === CreateNFTAvatarStep.NFTList ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTListDialog, {
                    tokenInfo: tokenInfo1,
                    wallets: wallets1,
                    onNext: onNext,
                    onSelected: onSelected
                }) : null,
                step === CreateNFTAvatarStep.UploadAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadAvatarDialog, {
                    proof: proof1,
                    isBindAccount: wallets1?.some((x)=>(0,src/* isSameAddress */.Wr)(x.identity, selectedTokenInfo?.account)
                    ),
                    account: selectedTokenInfo?.account,
                    image: selectedTokenInfo?.image,
                    token: selectedTokenInfo?.token,
                    pluginId: selectedTokenInfo?.pluginId,
                    onBack: onBack,
                    onClose: onClose
                }) : null
            ]
        })
    });
}


/***/ }),

/***/ 79533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ context),
/* harmony export */   "H": () => (/* binding */ setupContext)
/* harmony export */ });
let context;
function setupContext(x) {
    context = x;
}


/***/ }),

/***/ 70667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IF": () => (/* binding */ getBio),
/* harmony export */   "S_": () => (/* binding */ usernameValidator),
/* harmony export */   "WM": () => (/* binding */ getTwitterId),
/* harmony export */   "o1": () => (/* binding */ getPersonalHomepage),
/* harmony export */   "wX": () => (/* binding */ getAvatar),
/* harmony export */   "y": () => (/* binding */ getNickname),
/* harmony export */   "yd": () => (/* binding */ getAvatarId)
/* harmony export */ });
if (1711 != __webpack_require__.j) {
	/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32139);
}
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38129);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93455);



/**
 * @link https://help.twitter.com/en/managing-your-account/twitter-username-rules
 */ const usernameValidator = (name)=>{
    for (const v of [
        /(twitter|admin)/i,
        /.{16,}/,
        /\W/
    ]){
        if (!(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(v.exec(name))) {
            return false;
        }
    }
    if (name.length < 4) return false;
    return true;
};
const getNickname = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNickNameSelector */ .rf)().evaluate();
    if (!node) return '';
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .collectNodeText */ .aW)(node);
};
const getTwitterId = ()=>{
    const ele = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchAvatarSelector */ .Ls)().evaluate()?.closest('a') || (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNFTAvatarSelector */ .dA)().evaluate()?.closest('a');
    if (ele) {
        const link = ele.getAttribute('href');
        if (link) {
            const [, userId] = link.match(/^\/(\w+)\/(photo|nft)$/) ?? [];
            return userId;
        }
    }
    return '';
};
const getBio = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .profileBioSelector */ .Rj)().evaluate();
    return node ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .collectNodeText */ .aW)(node) : '';
};
const getPersonalHomepage = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .personalHomepageSelector */ .IQ)().evaluate();
    return node?.getAttribute('href') ?? '';
};
const getAvatar = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchAvatarSelector */ .Ls)().evaluate() || (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .searchNFTAvatarSelector */ .dA)().evaluate();
    if (node) {
        const imageURL = node.getAttribute('src') ?? '';
        return imageURL.trim();
    }
    return '';
};
const TWITTER_AVATAR_ID_MATCH = /^\/profile_images\/(\d+)/;
const getAvatarId = (avatarURL)=>{
    if (!avatarURL) return '';
    const _url = new URL(avatarURL);
    const match = _url.pathname.match(TWITTER_AVATAR_ID_MATCH);
    if (!match) return '';
    return match[1];
};


/***/ })

}]);