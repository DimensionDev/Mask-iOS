"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7635],{

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

/***/ 47061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ PluginWalletConnectIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const PluginWalletConnectIcon = (0,_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('PluginWalletConnectIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.15015 7.36221C4.15015 7.03084 4.41878 6.76221 4.75015 6.76221H9.25015C9.58152 6.76221 9.85015 7.03084 9.85015 7.36221C9.85015 7.69358 9.58152 7.96221 9.25015 7.96221H4.75015C4.41878 7.96221 4.15015 7.69358 4.15015 7.36221Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.76765 1.7293C2.56902 1.7293 1.60015 2.69817 1.60015 3.8968V7.36179C1.60015 7.69317 1.33152 7.96179 1.00015 7.96179C0.668776 7.96179 0.400146 7.69317 0.400146 7.36179V3.8968C0.400146 2.03543 1.90628 0.529297 3.76765 0.529297H7.98264C8.86881 0.529297 9.70567 0.805241 10.3308 1.34136C10.9644 1.8848 11.3501 2.67182 11.3501 3.61179C11.3501 3.94317 11.0815 4.2118 10.7501 4.2118C10.4188 4.2118 10.1501 3.94317 10.1501 3.61179C10.1501 3.02177 9.91716 2.56754 9.54953 2.25223C9.17337 1.9296 8.62648 1.7293 7.98264 1.7293H3.76765Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.00015 4.21221C2.67402 4.21221 1.60015 5.28608 1.60015 6.61221V11.8622C1.60015 13.1883 2.67402 14.2622 4.00015 14.2622H11.5001C12.8263 14.2622 13.9001 13.1883 13.9001 11.8622V11.3747H13.8027C12.8621 11.3747 11.896 10.7961 11.6257 9.79044L11.6249 9.78738L11.6249 9.78738C11.4193 9.00591 11.6636 8.23162 12.1873 7.72391C12.5779 7.32659 13.1128 7.09967 13.6901 7.09967H13.9001V6.61221C13.9001 5.29358 12.8188 4.21221 11.5001 4.21221H4.00015ZM0.400146 6.61221C0.400146 4.62334 2.01128 3.01221 4.00015 3.01221H11.5001C13.4815 3.01221 15.1001 4.63084 15.1001 6.61221V7.69967C15.1001 8.03104 14.8315 8.29967 14.5001 8.29967H13.6901C13.4309 8.29967 13.2038 8.40006 13.04 8.56827C13.0353 8.5731 13.0305 8.57786 13.0257 8.58253C12.8047 8.79464 12.6923 9.12611 12.785 9.48043C12.8903 9.86908 13.3039 10.1747 13.8027 10.1747H14.5001C14.8315 10.1747 15.1001 10.4433 15.1001 10.7747V11.8622C15.1001 13.8511 13.489 15.4622 11.5001 15.4622H4.00015C2.01128 15.4622 0.400146 13.8511 0.400146 11.8622V6.61221Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.6903 8.29912C13.4311 8.29912 13.204 8.39951 13.0402 8.56772L13.0294 8.57849C12.8376 8.76576 12.7307 9.03208 12.7576 9.31477L12.7583 9.32182L12.7583 9.32183C12.7961 9.77582 13.235 10.1741 13.7803 10.1741H15.2278C15.3278 10.1741 15.4003 10.094 15.4003 10.0091V8.46414C15.4003 8.37932 15.3278 8.29912 15.2278 8.29912H13.6903ZM12.1858 7.72513C12.5765 7.32671 13.1122 7.09912 13.6903 7.09912H15.2278C15.9829 7.09912 16.6003 7.70895 16.6003 8.46414V10.0091C16.6003 10.7643 15.9829 11.3741 15.2278 11.3741H13.7803C12.7067 11.3741 11.6617 10.5891 11.5627 9.42502C11.5011 8.76677 11.7517 8.1519 12.1858 7.72513Z",
            fill: "white"
        })
    ]
}), '0 0 17 16');


/***/ }),

/***/ 69592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/GoodGhosting.tsx


const GoogGhostingIcon = (0,utils/* createPaletteAwareIcon */.t)('GoogGhostingIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M11.19.166C7.05.753 4.526 2.96 5.176 5.414c.159.587.832 1.67 1.029 1.67.086 0 .469-.324.858-.71l.723-.698-.38-.299c-.65-.524-.698-.735-.233-1.172 1.335-1.258 4.165-1.957 7.374-1.82 2.438.1 4.104.549 5.439 1.434.894.598.968.782.527 1.31l-.368.41 1.569 1.422.306-.524c.44-.782.563-1.172.563-1.82 0-1.683-1.58-3.217-4.104-4.014-1.874-.586-4.924-.773-7.288-.436Zm.743 4.002c-2.376.523-4.888 2.518-6.014 4.786C5.22 10.35 5 11.36 5 13.068c0 1.421.037 1.658.38 2.63.429 1.21 1.409 2.805 2.438 3.948 2.11 2.344 7.23 6.046 10.755 7.766 1.31.636 1.96.748 2.168.374.208-.398.073-.648-.796-1.57-.637-.665-.833-.973-.993-1.534-.47-1.62.061-3.341 1.617-5.236.992-1.209 1.715-2.501 2.156-3.83.404-1.234.404-3.54 0-4.986-.895-3.166-3.626-5.822-6.7-6.483-1.066-.224-3.05-.224-4.092.013v.008Zm4.079.872c3.43.898 5.94 4.014 6.161 7.654.123 2.11-.661 4.251-2.278 6.195-1.446 1.745-2.058 3.329-1.948 5.087.061.872.453 1.907.943 2.48.441.511-2.474-1.172-4.973-2.88-3.895-2.655-6.455-5.198-7.46-7.454-1.942-4.325.667-9.66 5.407-11.048.967-.287 3.123-.311 4.152-.037l-.004.003Zm1.165 5.66c-.6.324-1.237 1.084-1.189 1.408.062.474.564.424.968-.078.392-.486 1.066-.772 1.507-.664.159.037.502.299.76.573.526.549.967.648 1.094.25.097-.337-.441-1.048-1.102-1.434a2.076 2.076 0 0 0-2.034-.063l-.004.008Zm-8.208.224c-.637.412-1.004.923-.943 1.31.062.473.441.398 1.078-.212.821-.782 1.25-.782 2.07-.013.637.611.919.686 1.103.325.097-.187.048-.337-.246-.711-.857-1.097-2.02-1.359-3.062-.698Zm3.039 3.528c-.331.195-.245.56.232 1.055.54.536 1.299.91 1.862.923.547 0 1.29-.412 1.678-.923.65-.873.012-1.31-.784-.535-.245.237-.563.473-.71.511-.343.112-1.053-.195-1.409-.61-.38-.45-.612-.562-.87-.425v.004Z",
        fill: "#2B2B52"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M11.19.166C7.05.753 4.526 2.96 5.176 5.414c.159.587.832 1.67 1.029 1.67.086 0 .469-.324.858-.71l.723-.698-.38-.299c-.65-.524-.698-.735-.233-1.172 1.335-1.258 4.165-1.957 7.374-1.82 2.438.1 4.104.549 5.439 1.434.894.598.968.782.527 1.31l-.368.41 1.569 1.422.306-.524c.44-.782.563-1.172.563-1.82 0-1.683-1.58-3.217-4.104-4.014-1.874-.586-4.924-.773-7.288-.436Zm.743 4.002c-2.376.523-4.888 2.518-6.014 4.786C5.22 10.35 5 11.36 5 13.068c0 1.421.037 1.658.38 2.63.429 1.21 1.409 2.805 2.438 3.948 2.11 2.344 7.23 6.046 10.755 7.766 1.31.636 1.96.748 2.168.374.208-.398.073-.648-.796-1.57-.637-.665-.833-.973-.993-1.534-.47-1.62.061-3.341 1.617-5.236.992-1.209 1.715-2.501 2.156-3.83.404-1.234.404-3.54 0-4.986-.895-3.166-3.626-5.822-6.7-6.483-1.066-.224-3.05-.224-4.092.013v.008Zm4.079.872c3.43.898 5.94 4.014 6.161 7.654.123 2.11-.661 4.251-2.278 6.195-1.446 1.745-2.058 3.329-1.948 5.087.061.872.453 1.907.943 2.48.441.511-2.474-1.172-4.973-2.88-3.895-2.655-6.455-5.198-7.46-7.454-1.942-4.325.667-9.66 5.407-11.048.967-.287 3.123-.311 4.152-.037l-.004.003Zm1.165 5.66c-.6.324-1.237 1.084-1.189 1.408.062.474.564.424.968-.078.392-.486 1.066-.772 1.507-.664.159.037.502.299.76.573.526.549.967.648 1.094.25.097-.337-.441-1.048-1.102-1.434a2.076 2.076 0 0 0-2.034-.063l-.004.008Zm-8.208.224c-.637.412-1.004.923-.943 1.31.062.473.441.398 1.078-.212.821-.782 1.25-.782 2.07-.013.637.611.919.686 1.103.325.097-.187.048-.337-.246-.711-.857-1.097-2.02-1.359-3.062-.698Zm3.039 3.528c-.331.195-.245.56.232 1.055.54.536 1.299.91 1.862.923.547 0 1.29-.412 1.678-.923.65-.873.012-1.31-.784-.535-.245.237-.563.473-.71.511-.343.112-1.053-.195-1.409-.61-.38-.45-.612-.562-.87-.425v.004Z",
        fill: "#fff"
    })
}), undefined, '0 0 28 28');

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isBefore/index.js
var isBefore = __webpack_require__(33086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants = __webpack_require__(47104);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(36596);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
;// CONCATENATED MODULE: ../web3-contracts/abis/GoodGhostingPolygon.json
const GoodGhostingPolygon_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_inboundCurrency","type":"address"},{"internalType":"contract ILendingPoolAddressesProvider","name":"_lendingPoolAddressProvider","type":"address"},{"internalType":"uint256","name":"_segmentCount","type":"uint256"},{"internalType":"uint256","name":"_segmentLength","type":"uint256"},{"internalType":"uint256","name":"_segmentPayment","type":"uint256"},{"internalType":"uint256","name":"_earlyWithdrawalFee","type":"uint256"},{"internalType":"uint256","name":"_customFee","type":"uint256"},{"internalType":"address","name":"_dataProvider","type":"address"},{"internalType":"uint256","name":"_maxPlayersCount","type":"uint256"},{"internalType":"address","name":"_incentiveController","type":"address"},{"internalType":"contract IERC20","name":"_matic","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalGameInterest","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"adminFeeAmount","type":"uint256"}],"name":"AdminWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":true,"internalType":"uint256","name":"segment","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalGamePrincipal","type":"uint256"}],"name":"EarlyWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalGamePrincipal","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalGameInterest","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewards","type":"uint256"}],"name":"FundsRedeemedFromExternalPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"JoinedGame","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"winners","type":"address[]"}],"name":"WinnersAnnouncement","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"playerReward","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"adaiToken","outputs":[{"internalType":"contract AToken","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"adminFeeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"adminWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"customFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"daiToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"earlyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earlyWithdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"firstSegmentStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getCurrentSegment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getNumberOfPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"incentiveController","outputs":[{"internalType":"contract IncentiveController","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"isGameCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"iterablePlayers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"joinGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastSegment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lendingPool","outputs":[{"internalType":"contract ILendingPool","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lendingPoolAddressProvider","outputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"makeDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"matic","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxPlayersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"players","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"withdrawn","type":"bool"},{"internalType":"bool","name":"canRejoin","type":"bool"},{"internalType":"uint256","name":"mostRecentSegmentPaid","type":"uint256"},{"internalType":"uint256","name":"amountPaid","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"redeemed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsPerPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"segmentLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"segmentPayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalGameInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalGamePrincipal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"adminFeeWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redeemFromExternalPool","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/contracts/useGoodGhostingContract.ts


function useGoodGhostingContract(chainId, address) {
    return (0,entry_web3_evm/* useContract */.cq)(chainId, address, GoodGhostingPolygon_namespaceObject);
}

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/addSeconds/index.js
var addSeconds = __webpack_require__(71767);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/hooks/useGameInfo.ts










function useGameContractAddress(id) {
    const { GOOD_GHOSTING_CONTRACT_ADDRESS_FILE  } = (0,constants/* useGoodGhostingConstants */.JH)();
    const asyncResult = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!GOOD_GHOSTING_CONTRACT_ADDRESS_FILE) return {
            contractAddress: ''
        };
        const gameData = await service/* default.Helper.fetchJSON */.ZP.Helper.fetchJSON(GOOD_GHOSTING_CONTRACT_ADDRESS_FILE);
        return gameData?.[id] || gameData?.default || {};
    }, [
        id,
        GOOD_GHOSTING_CONTRACT_ADDRESS_FILE
    ]);
    return asyncResult;
}
function useGameInfo(gameData) {
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const contract = useGoodGhostingContract(chainId, gameData.contractAddress);
    const account = (0,entry_web3/* useAccount */.mA)();
    const { names: names1 , callDatas  } = (0,react.useMemo)(()=>{
        const names = [
            'segmentPayment',
            'firstSegmentStart',
            'getCurrentSegment',
            'lastSegment',
            'segmentLength',
            'getNumberOfPlayers',
            'maxPlayersCount',
            'totalGameInterest',
            'totalGamePrincipal',
            'adaiToken',
            'lendingPool',
            'earlyWithdrawalFee',
            'rewardsPerPlayer', 
        ];
        return {
            names: [
                ...names,
                'players'
            ],
            callDatas: [
                ...Array(names.length).fill([]),
                [
                    account || primitives/* ZERO_ADDRESS */.r
                ]
            ]
        };
    }, [
        account
    ]);
    const [results, calls, _, callback] = (0,entry_web3_evm/* useSingleContractMultipleData */.es)(contract, names1, callDatas);
    const asyncResult = (0,useAsyncRetry/* default */.Z)(()=>callback(calls)
    , [
        calls
    ]);
    const gameInfo = (0,react.useMemo)(()=>{
        if (!contract || !results.length) return;
        let failedToGetInfo = false;
        const [segmentPayment, firstSegmentStart, currentSegment, lastSegment, segmentLength, numberOfPlayers, maxPlayersCount, totalGameInterest, totalGamePrincipal, adaiToken, lendingPool, earlyWithdrawalFee, rewardsPerPlayer, currentPlayer, ] = results.map((x)=>{
            if (x.error) failedToGetInfo = true;
            return x.error ? '' : x.value;
        });
        if (failedToGetInfo) return;
        const player = currentPlayer;
        return {
            ...gameData,
            segmentPayment,
            rewardsPerPlayer,
            firstSegmentStart: Number.parseInt(firstSegmentStart, 10),
            currentSegment: Number.parseInt(currentSegment, 10),
            lastSegment: Number.parseInt(lastSegment, 10),
            segmentLength: Number.parseInt(segmentLength, 10),
            numberOfPlayers: Number.parseInt(numberOfPlayers, 10),
            maxPlayersCount: Number.parseInt(maxPlayersCount, 10),
            totalGameInterest,
            totalGamePrincipal,
            adaiTokenAddress: adaiToken,
            lendingPoolAddress: lendingPool,
            earlyWithdrawalFee,
            currentPlayer: !(0,address/* isZeroAddress */.uO)(player?.addr) ? player : undefined,
            gameHasEnded: Number.parseInt(currentSegment, 10) > Number.parseInt(lastSegment, 10),
            refresh: asyncResult.retry
        };
    }, [
        results,
        contract
    ]);
    return {
        ...asyncResult,
        value: gameInfo
    };
}
function useTimeline(info) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const getTimelineEvent = (index, numberOfRounds)=>{
        if (index === 0) {
            return {
                eventOnDate: t('plugin_good_ghosting_game_launched'),
                ongoingEvent: t('plugin_good_ghosting_join_round')
            };
        } else if (index === 1) {
            return {
                eventOnDate: t('plugin_good_ghosting_join_deadline'),
                ongoingEvent: t('plugin_good_ghosting_deposit', {
                    index: index + 1
                })
            };
        } else if (index === numberOfRounds - 1) {
            return {
                eventOnDate: t('plugin_good_ghosting_deposit_deadline', {
                    index
                }),
                ongoingEvent: t('plugin_good_ghosting_waiting_round')
            };
        } else if (index === numberOfRounds) {
            return {
                eventOnDate: t('plugin_good_ghosting_waiting_round_end'),
                ongoingEvent: t('plugin_good_ghosting_withdraw')
            };
        } else {
            return {
                eventOnDate: t('plugin_good_ghosting_deposit_deadline', {
                    index
                }),
                ongoingEvent: t('plugin_good_ghosting_deposit', {
                    index: index + 1
                })
            };
        }
    };
    const startTime = info.firstSegmentStart;
    const roundDuration = info.segmentLength;
    const numberOfRounds1 = info.lastSegment && info.lastSegment + 1;
    const timeline = (0,react.useMemo)(()=>{
        if (!startTime || !roundDuration || !numberOfRounds1) return [];
        const initialDate = new Date(startTime * 1000);
        const rounds = [];
        for(let i = 0; i <= numberOfRounds1; i += 1){
            rounds.push({
                date: (0,addSeconds/* default */.Z)(initialDate, roundDuration * i),
                ...getTimelineEvent(i, numberOfRounds1)
            });
        }
        return rounds;
    }, [
        startTime,
        roundDuration,
        numberOfRounds1
    ]);
    return timeline;
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/TimelineView.tsx







const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        text: {
            whiteSpace: 'nowrap'
        },
        timelineWrapper: {
            overflowX: 'auto'
        },
        timeline: {
            margin: theme.spacing(1),
            overflow: 'visible',
            flexWrap: 'nowrap',
            alignItems: 'flex-end'
        },
        timelinePadding: {
            height: '1px',
            paddingLeft: theme.spacing(10)
        },
        timelineCells: {
            position: 'relative',
            overflow: 'visible'
        },
        eventText: {
            position: 'relative',
            padding: theme.spacing(1.5, 2),
            margin: theme.spacing(1.5),
            marginTop: 0,
            borderTop: '1px solid #D9E0F0',
            whiteSpace: 'nowrap'
        },
        rightAligned: {
            position: 'absolute',
            right: `calc(-4px - ${theme.spacing(1.5)})`,
            top: '-4px'
        },
        timelineEvent: {
            position: 'relative',
            left: 0,
            transform: 'translateX(50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bottom: '-4px',
            width: '1px'
        },
        circleIndicator: {
            borderRadius: '100%',
            width: '8px',
            height: '8px',
            border: '2px solid #8E79FC',
            boxSizing: 'border-box'
        },
        circleIndicatorFilled: {
            background: '#8E79FC'
        },
        circleIndicatorEmpty: {
            background: 'none'
        },
        verticalLine: {
            width: '1px',
            background: '#D9E0F0',
            marginBottom: theme.spacing(1)
        },
        tallVerticalLine: {
            height: '120px'
        },
        shortVerticalLine: {
            height: '50px'
        }
    })
);
function TimelineView(props) {
    const { classes  } = useStyles();
    const timeline = useTimeline(props.info);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.timelineWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            className: classes.timeline,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.timelinePadding
                }),
                timeline.map((timelineEvent, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.timelineCells,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.timelineEvent,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "caption",
                                        color: "textSecondary",
                                        className: classes.text,
                                        children: timelineEvent.eventOnDate
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "subtitle2",
                                        color: "textPrimary",
                                        className: classes.text,
                                        children: (0,format/* default */.Z)(timelineEvent.date, 'HH:mm EEE d LLL O')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classnames_default()(classes.verticalLine, index % 2 === 0 ? classes.tallVerticalLine : classes.shortVerticalLine)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classnames_default()(classes.circleIndicator, (0,isBefore/* default */.Z)(new Date(), timelineEvent.date) ? classes.circleIndicatorFilled : classes.circleIndicatorEmpty)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.eventText,
                                children: [
                                    index === timeline.length - 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classnames_default()(classes.circleIndicator, classes.circleIndicatorFilled, classes.rightAligned)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "caption",
                                        color: "textSecondary",
                                        className: classes.text,
                                        children: timelineEvent.ongoingEvent
                                    })
                                ]
                            })
                        ]
                    }, index)
                ),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.timelinePadding
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/CircularDataDisplay.tsx



const CircularDataDisplay_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            textAlign: 'center'
        },
        header: {
            whiteSpace: 'nowrap',
            paddingBottom: theme.spacing(0.5)
        },
        circleData: {
            width: '100%',
            paddingTop: 'calc(100% - 16px)',
            boxSizing: 'border-box',
            position: 'relative',
            borderRadius: '100%',
            border: '8px solid #6Eb0FC'
        },
        circleDataText: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }
    })
);
function CircularDataDisplay(props) {
    const { classes  } = CircularDataDisplay_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.header,
                variant: "h6",
                color: "textPrimary",
                children: props.header
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.circleData,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.circleDataText,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "h6",
                            color: "textPrimary",
                            children: props.title
                        }),
                        props.subtitle && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "subtitle1",
                            color: "textSecondary",
                            children: props.subtitle
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/constants/tokens.ts
var tokens = __webpack_require__(74404);
;// CONCATENATED MODULE: ../web3-contracts/abis/GoodGhostingIncentives.json
const GoodGhostingIncentives_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"rewardToken","type":"address"},{"internalType":"address","name":"emissionManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"emission","type":"uint256"}],"name":"AssetConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"AssetIndexUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"}],"name":"ClaimerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ditributionEnd","type":"uint256"}],"name":"DistributionEndUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"PendingAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsAccrued","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"vault","type":"address"}],"name":"RewardsVaultUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAdming","type":"address"},{"indexed":false,"internalType":"uint256","name":"role","type":"uint256"}],"name":"RoleClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"UserIndexUpdated","type":"event"},{"inputs":[],"name":"DISTRIBUTION_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSION_MANAGER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_TOKEN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"assets","outputs":[{"internalType":"uint128","name":"emissionPerSecond","type":"uint128"},{"internalType":"uint128","name":"lastUpdateTimestamp","type":"uint128"},{"internalType":"uint256","name":"index","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"claimRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"claimRewardsOnBehalf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"}],"name":"claimRoleAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256[]","name":"emissionsPerSecond","type":"uint256[]"}],"name":"configureAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"}],"name":"getAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getClaimer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDistributionEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"}],"name":"getPendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"address","name":"user","type":"address"}],"name":"getRewardsBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardsVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"asset","type":"address"}],"name":"getUserAssetData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserUnclaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"totalSupply","type":"uint256"},{"internalType":"uint256","name":"userBalance","type":"uint256"}],"name":"handleAction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardsVault","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"caller","type":"address"}],"name":"setClaimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"distributionEnd","type":"uint256"}],"name":"setDistributionEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"},{"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"setPendingAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardsVault","type":"address"}],"name":"setRewardsVault","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/contracts/useGoodGhostingIncentivesContract.ts



function useGoodGhostingIncentiveContract(chainId) {
    const { GOOD_GHOSTING_INCENTIVES_CONTRACT_ADDRESS  } = (0,constants/* useGoodGhostingConstants */.JH)();
    return (0,entry_web3_evm/* useContract */.cq)(chainId, GOOD_GHOSTING_INCENTIVES_CONTRACT_ADDRESS, GoodGhostingIncentives_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/hooks/usePoolData.ts








function usePoolData(info) {
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const rewardToken = useRewardToken();
    const contract = useGoodGhostingContract(chainId, info.contractAddress);
    const adaiContract = (0,entry_web3_evm/* useERC20TokenContract */.xw)(chainId, info.adaiTokenAddress);
    const rewardTokenContract = (0,entry_web3_evm/* useERC20TokenContract */.xw)(chainId, rewardToken.address);
    const incentivesContract = useGoodGhostingIncentiveContract(chainId);
    const [currentData, setCurrentData] = (0,react.useState)();
    const asyncResult = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!contract || !rewardTokenContract || !adaiContract || !incentivesContract) return;
        const [incentives, totalAdai, reward] = await Promise.all([
            incentivesContract.methods.getRewardsBalance([
                info.adaiTokenAddress
            ], info.contractAddress).call(),
            adaiContract.methods.balanceOf(info.contractAddress).call(),
            rewardTokenContract.methods.balanceOf(info.contractAddress).call(), 
        ]);
        const data = {
            incentives,
            totalAdai,
            reward
        };
        setCurrentData(data);
        return data;
    }, [
        info.gameHasEnded,
        info.totalGameInterest,
        info.totalGamePrincipal
    ]);
    return {
        ...asyncResult,
        value: asyncResult.value || currentData
    };
}
function useGameToken() {
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return tokens/* DAI */.h1[chainId];
}
function useRewardToken() {
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return tokens/* WNATIVE */.FX[chainId];
}
function usePoolAssets() {
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const gameToken = useGameToken();
    const rewardToken = useRewardToken();
    const { value: gameTokenDetailed , loading: gameTokenLoading , error: gameTokenError , retry: gameTokenRetry ,  } = (0,entry_web3/* useFungibleToken */.cf)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, gameToken.address, {
        chainId
    });
    const { value: rewardTokenDetailed , loading: rewardTokenLoading , error: rewardTokenError , retry: rewardTokenRetry ,  } = (0,entry_web3/* useFungibleToken */.cf)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, rewardToken.address, {
        chainId
    });
    const { value , loading , error , retry  } = (0,entry_web3/* useFungibleAssets */.$U)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const assetRetry = ()=>{
        if (gameTokenError) gameTokenRetry();
        else if (rewardTokenError) rewardTokenRetry();
        else retry();
    };
    let gameAssets;
    if (value?.length) {
        const gameAsset = value.find((asset)=>asset.address === gameToken.address
        );
        const rewardAsset = value.find((asset)=>asset.address === rewardToken.address
        );
        gameAssets = {
            gameAsset,
            rewardAsset
        };
    }
    return {
        value: gameAssets,
        error: error || gameTokenError || rewardTokenError,
        loading: loading || gameTokenLoading || rewardTokenLoading,
        retry: assetRetry
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/differenceInDays/index.js + 2 modules
var differenceInDays = __webpack_require__(20485);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/formatDuration/index.js
var formatDuration = __webpack_require__(71322);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/utils.ts







var PlayerStatus;
(function(PlayerStatus) {
    PlayerStatus["Winning"] = 'winning';
    PlayerStatus["Waiting"] = 'waiting';
    PlayerStatus["Ghost"] = 'ghost';
    PlayerStatus["Dropout"] = 'dropout';
    PlayerStatus["Unknown"] = 'unknown';
})(PlayerStatus || (PlayerStatus = {}));
function getPlayerStatus(info, player) {
    if (!player) return PlayerStatus.Unknown;
    const mostRecentSegmentPaid = Number.parseInt(player.mostRecentSegmentPaid, 10);
    if (mostRecentSegmentPaid === info.lastSegment - 1) return PlayerStatus.Winning;
    if (player.withdrawn) return PlayerStatus.Dropout;
    if (mostRecentSegmentPaid < info.currentSegment - 1) return PlayerStatus.Ghost;
    if (mostRecentSegmentPaid === info.currentSegment - 1) return PlayerStatus.Waiting;
    if (mostRecentSegmentPaid === info.currentSegment) return PlayerStatus.Winning;
    return PlayerStatus.Unknown;
}
function getNextTimelineIndex(timeline) {
    const now = new Date();
    for(let i = 0; i < timeline.length; i += 1){
        if ((0,isBefore/* default */.Z)(now, timeline[i].date)) {
            return i;
        }
    }
    return timeline.length - 1;
}
function isEndOfTimeline(timelineIndex, timeline) {
    return timelineIndex === timeline.length - 1 && (0,isBefore/* default */.Z)(timeline[timelineIndex].date, new Date());
}
function getPlayerStandings(players, info) {
    const playerStandings = {
        winning: 0,
        waiting: 0,
        ghosts: 0,
        dropouts: 0
    };
    players.forEach((player, i)=>{
        const playerStatus = getPlayerStatus(info, player);
        if (playerStatus === PlayerStatus.Dropout) playerStandings.dropouts += 1;
        else if (playerStatus === PlayerStatus.Ghost) playerStandings.ghosts += 1;
        else if (playerStatus === PlayerStatus.Waiting) playerStandings.waiting += 1;
        else if (playerStatus === PlayerStatus.Winning) playerStandings.winning += 1;
    });
    return playerStandings;
}
function getReadableInterval(roundLength) {
    const baseDate = new Date(0);
    const dateAfterDuration = (0,addSeconds/* default */.Z)(baseDate, roundLength);
    const dayDifference = (0,differenceInDays/* default */.Z)(dateAfterDuration, baseDate);
    const weeks = Math.floor(dayDifference / 7);
    const days = Math.floor(dayDifference - weeks * 7);
    return (0,formatDuration/* default */.Z)({
        weeks,
        days
    });
}
function isGameActionError(error) {
    return Object.values(types/* TransactionStateType */.n$).includes(error.gameActionStatus) && error.transactionHash !== undefined;
}
function getGameFinancialData(info, poolData, playerStandings, assets) {
    const rawPoolInterest = (0,base_src/* isZero */.Fr)(poolData.totalAdai) ? base_src/* ZERO */.xE : new (bignumber_default())(poolData.totalAdai).minus(info.totalGamePrincipal);
    const gameInterest = new (bignumber_default())(info.gameHasEnded ? info.totalGameInterest : rawPoolInterest).multipliedBy(assets.gameAsset?.price ? assets.gameAsset?.price[base_src/* CurrencyType.USD */.V2.USD] ?? 1 : 1);
    const gameRewards = new (bignumber_default())(poolData.reward).plus(info.gameHasEnded ? new (bignumber_default())(playerStandings.winning).multipliedBy(info.rewardsPerPlayer) : poolData.incentives).multipliedBy(assets.rewardAsset?.price ? assets.rewardAsset?.price[base_src/* CurrencyType.USD */.V2.USD] ?? 0 : 0);
    const totalEarnings = gameInterest.plus(gameRewards);
    const winnerGains = totalEarnings.div(playerStandings.winning || 1);
    const baseDate = new Date(0);
    const dateAfterDuration = (0,addSeconds/* default */.Z)(baseDate, info.segmentLength * (info.lastSegment + 1));
    const gameDuration = (0,differenceInDays/* default */.Z)(dateAfterDuration, baseDate);
    const expectedPayment = (0,base_src/* multipliedBy */.$q)(info.segmentPayment, info.lastSegment);
    const dividend = winnerGains.multipliedBy(365);
    const divisor = expectedPayment.multipliedBy(gameDuration).multipliedBy(assets.gameAsset?.price ? assets.gameAsset?.price[base_src/* CurrencyType.USD */.V2.USD] ?? 1 : 1);
    const poolAPY = dividend.dividedBy(divisor).multipliedBy(100);
    return {
        poolAPY,
        poolEarnings: info.gameHasEnded ? new (bignumber_default())(info.totalGameInterest) : rawPoolInterest,
        extraRewards: info.gameHasEnded ? (0,base_src/* multipliedBy */.$q)(playerStandings.winning, info.rewardsPerPlayer) : new (bignumber_default())(poolData.reward).plus(poolData.incentives)
    };
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/GameStatsView.tsx








const GameStatsView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        infoRow: {
            paddingBottom: theme.spacing(1)
        },
        circularDataSection: {
            paddingTop: theme.spacing(2)
        },
        circularDataWrapper: {
            minWidth: '80px'
        },
        circularData: {
            padding: theme.spacing(1),
            maxWidth: '100px',
            margin: 'auto'
        }
    })
);
function GameStatsView(props) {
    const { classes  } = GameStatsView_useStyles();
    const { value: financialData , loading , error , retry  } = props.finDataResult;
    const { value: otherPlayerData , loading: otherPlayerLoading , error: otherPlayerError , retry: otherPlayerRetry ,  } = props.otherPlayerResult;
    const gameToken = useGameToken();
    const rewardToken = useRewardToken();
    const { value: poolAssetsValue , loading: poolAssetsLoading , error: poolAssetsError , retry: poolAssetsRetry ,  } = props.poolAssetsResult;
    const { t  } = (0,src_utils/* useI18N */.M1)();
    if (loading && !financialData || otherPlayerLoading || poolAssetsLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "h6",
            color: "textSecondary",
            children: t('plugin_good_ghosting_loading_game_stats')
        });
    } else if (error || !financialData || otherPlayerError || !otherPlayerData || poolAssetsError || !poolAssetsValue) {
        const retryFailed = ()=>{
            if (error || !financialData) retry();
            else if (otherPlayerError || !otherPlayerData) otherPlayerRetry();
            else if (poolAssetsError || !poolAssetsValue) poolAssetsRetry();
        };
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: t('go_wrong')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    sx: {
                        marginTop: 1
                    },
                    size: "small",
                    onClick: retryFailed,
                    children: t('retry')
                })
            ]
        });
    }
    const gameLengthFormatted = getReadableInterval(props.info.segmentLength * (props.info.lastSegment + 1));
    const segmentLengthFormatted = getReadableInterval(props.info.segmentLength);
    const playerStandings = getPlayerStandings(otherPlayerData, props.info);
    const { poolAPY , poolEarnings , extraRewards  } = getGameFinancialData(props.info, financialData, playerStandings, poolAssetsValue);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                className: classes.infoRow,
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        container: true,
                        xs: 6,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    children: [
                                        t('plugin_good_ghosting_game_duration'),
                                        ":"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: gameLengthFormatted
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        container: true,
                        xs: 6,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    children: [
                                        t('plugin_good_ghosting_current_round'),
                                        ":"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: [
                                        Math.min(props.info.currentSegment + 1, props.info.lastSegment),
                                        " / ",
                                        props.info.lastSegment
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                className: classes.infoRow,
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        container: true,
                        xs: 6,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    children: [
                                        t('plugin_good_ghosting_recurring_deposit'),
                                        ":"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: [
                                        (0,base_src/* formatBalance */.az)(props.info.segmentPayment, gameToken.decimals),
                                        " ",
                                        gameToken.symbol
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        container: true,
                        xs: 6,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    children: [
                                        t('plugin_good_ghosting_round_length'),
                                        ":"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: segmentLengthFormatted
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.circularDataSection,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        className: classes.infoRow,
                        container: true,
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                className: classes.circularDataWrapper,
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.circularData,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularDataDisplay, {
                                        header: t('plugin_good_ghosting_pool_apy'),
                                        title: poolAPY.toFixed(2),
                                        subtitle: "%"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                className: classes.circularDataWrapper,
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.circularData,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularDataDisplay, {
                                        header: t('plugin_good_ghosting_pool_earnings'),
                                        title: (0,base_src/* toFixed */.FH)((0,base_src/* formatBalance */.az)(poolEarnings, gameToken.decimals), 2),
                                        subtitle: gameToken.symbol
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        className: classes.infoRow,
                        container: true,
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                className: classes.circularDataWrapper,
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.circularData,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularDataDisplay, {
                                        header: t('plugin_good_ghosting_extra_rewards'),
                                        title: (0,base_src/* toFixed */.FH)((0,base_src/* formatBalance */.az)(extraRewards, rewardToken.decimals), 2),
                                        subtitle: rewardToken.symbol
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                className: classes.circularDataWrapper,
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.circularData,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularDataDisplay, {
                                        header: t('plugin_good_ghosting_total_saved'),
                                        title: (0,base_src/* formatBalance */.az)(props.info.totalGamePrincipal, gameToken.decimals),
                                        subtitle: gameToken.symbol
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/OtherPlayersView.tsx






const OtherPlayersView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        infoRow: {
            paddingBottom: theme.spacing(1)
        },
        circularDataSection: {
            paddingTop: theme.spacing(2)
        },
        circularDataWrapper: {
            minWidth: '80px'
        },
        circularData: {
            padding: theme.spacing(1),
            maxWidth: '100px',
            margin: 'auto'
        }
    })
);
function OtherPlayersView(props) {
    const { classes  } = OtherPlayersView_useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { value: players , loading , error , retry  } = props.otherPlayerResult;
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "h6",
            color: "textSecondary",
            children: t('plugin_good_ghosting_loading_other_player_stats')
        });
    } else if (error || !players) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: t('go_wrong')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    sx: {
                        marginTop: 1
                    },
                    size: "small",
                    onClick: retry,
                    children: t('retry')
                })
            ]
        });
    }
    const playerStandings = getPlayerStandings(players, props.info);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.circularDataSection,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                className: classes.infoRow,
                container: true,
                justifyContent: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        className: classes.circularDataWrapper,
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.circularData,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularDataDisplay, {
                                header: t('plugin_good_ghosting_all_players_status_winning'),
                                title: playerStandings.winning
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        className: classes.circularDataWrapper,
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.circularData,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularDataDisplay, {
                                header: t('plugin_good_ghosting_all_players_status_waiting'),
                                title: playerStandings.waiting
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                className: classes.infoRow,
                container: true,
                justifyContent: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        className: classes.circularDataWrapper,
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.circularData,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularDataDisplay, {
                                header: t('plugin_good_ghosting_all_players_status_ghost'),
                                title: playerStandings.ghosts
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        className: classes.circularDataWrapper,
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.circularData,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularDataDisplay, {
                                header: t('plugin_good_ghosting_all_players_status_dropout'),
                                title: playerStandings.dropouts
                            })
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/hooks/useGameActions.ts





function useJoinGame(info) {
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const contract = useGoodGhostingContract(chainId, info.contractAddress);
    const canJoinGame = (!info.currentPlayer || info.currentPlayer.canRejoin) && info.currentSegment === 0 && info.numberOfPlayers <= info.maxPlayersCount;
    return {
        canJoinGame,
        joinGame: async ()=>{
            if (!contract) return;
            const gasEstimate = await contract.methods.joinGame().estimateGas({
                from: account
            });
            let txHash = '';
            return new Promise(async (resolve, reject)=>{
                contract.methods.joinGame().send({
                    from: account,
                    gas: gasEstimate
                }).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>txHash = hash
                ).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_no, receipt)=>{
                    if (receipt.status) {
                        resolve();
                    } else {
                        reject({
                            gameActionStatus: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                            ...receipt
                        });
                    }
                }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                    reject({
                        gameActionStatus: types/* TransactionStateType.FAILED */.n$.FAILED,
                        transactionHash: txHash
                    });
                });
            });
        }
    };
}
function useMakeDeposit(info) {
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const contract = useGoodGhostingContract(chainId, info.contractAddress);
    const status = getPlayerStatus(info, info.currentPlayer);
    const canMakeDeposit = info.currentPlayer && info.currentSegment > 0 && info.currentSegment < info.lastSegment && status === PlayerStatus.Waiting;
    return {
        canMakeDeposit,
        async makeDeposit () {
            if (!contract) return;
            const gasEstimate = await contract.methods.makeDeposit().estimateGas({
                from: account
            });
            let txHash = '';
            return new Promise(async (resolve, reject)=>{
                contract.methods.makeDeposit().send({
                    from: account,
                    gas: gasEstimate
                }).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>txHash = hash
                ).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_no, receipt)=>{
                    if (receipt.status) {
                        resolve();
                    } else {
                        reject({
                            gameActionStatus: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                            ...receipt
                        });
                    }
                }).on(types/* TransactionEventType.ERROR */.iE.ERROR, ()=>{
                    reject({
                        gameActionStatus: types/* TransactionStateType.FAILED */.n$.FAILED,
                        transactionHash: txHash
                    });
                });
            });
        }
    };
}
function useWithdraw(info) {
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const contract = useGoodGhostingContract(chainId, info.contractAddress);
    const canWithdraw = info.currentPlayer && !info.currentPlayer.withdrawn && info.gameHasEnded;
    return {
        canWithdraw,
        async withdraw () {
            if (!contract) return;
            const gasEstimate = await contract.methods.withdraw().estimateGas({
                from: account
            });
            let txHash = '';
            return new Promise(async (resolve, reject)=>{
                contract.methods.withdraw().send({
                    from: account,
                    gas: gasEstimate
                }).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>txHash = hash
                ).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_no, receipt)=>{
                    if (receipt.status) {
                        resolve();
                    } else {
                        reject({
                            gameActionStatus: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                            ...receipt
                        });
                    }
                }).on(types/* TransactionEventType.ERROR */.iE.ERROR, ()=>{
                    reject({
                        gameActionStatus: types/* TransactionStateType.FAILED */.n$.FAILED,
                        transactionHash: txHash
                    });
                });
            });
        }
    };
}
function useEarlyWithdraw(info) {
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const contract = useGoodGhostingContract(chainId, info.contractAddress);
    const canEarlyWithdraw = info.currentPlayer && !info.currentPlayer.withdrawn && info.currentSegment < info.lastSegment;
    return {
        canEarlyWithdraw,
        async earlyWithdraw () {
            if (!contract) return;
            const gasEstimate = await contract.methods.earlyWithdraw().estimateGas({
                from: account
            });
            let txHash = '';
            return new Promise(async (resolve, reject)=>{
                contract.methods.earlyWithdraw().send({
                    from: account,
                    gas: gasEstimate
                }).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>txHash = hash
                ).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_no, receipt)=>{
                    if (receipt.status) {
                        resolve();
                    } else {
                        reject({
                            gameActionStatus: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                            ...receipt
                        });
                    }
                }).on(types/* TransactionEventType.ERROR */.iE.ERROR, ()=>{
                    reject({
                        gameActionStatus: types/* TransactionStateType.FAILED */.n$.FAILED,
                        transactionHash: txHash
                    });
                });
            });
        }
    };
}

// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/PersonalView.tsx













const PersonalView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        infoRow: {
            paddingBottom: theme.spacing(1)
        },
        circularDataSection: {
            paddingTop: theme.spacing(2)
        },
        circularDataWrapper: {
            minWidth: '80px'
        },
        circularData: {
            padding: theme.spacing(1),
            maxWidth: '100px',
            margin: 'auto'
        },
        withdraw: {
            marginTop: theme.spacing(5),
            textAlign: 'center'
        }
    })
);
function PersonalView(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = PersonalView_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const gameToken = useGameToken();
    const { canEarlyWithdraw , earlyWithdraw  } = useEarlyWithdraw(props.info);
    const [buttonEnabled, setButtonEnabled] = (0,react.useState)(true);
    const [errorState, setErrorState] = (0,react.useState)({});
    const status = usePlayerStatusMessage(props.info, props.info.currentPlayer);
    if (!props.info.currentPlayer) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "h6",
            color: "textSecondary",
            children: t('plugin_good_ghosting_not_a_participant')
        });
    }
    const withdraw = async ()=>{
        setButtonEnabled(false);
        setErrorState({});
        try {
            await earlyWithdraw();
        } catch (error) {
            if (isGameActionError(error) && error.transactionHash) {
                const link = resolver/* explorerResolver.transactionLink */.Nb.transactionLink(chainId, error.transactionHash);
                if (error.gameActionStatus === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) {
                    setErrorState({
                        message: t('plugin_good_ghosting_tx_fail'),
                        link
                    });
                } else {
                    setErrorState({
                        message: t('plugin_good_ghosting_tx_timeout'),
                        link
                    });
                }
            } else {
                setErrorState({
                    message: t('plugin_good_ghosting_something_went_wrong')
                });
            }
        } finally{
            setButtonEnabled(true);
        }
    };
    const earlyWithdrawalFee = new (bignumber_default())(props.info.currentPlayer.amountPaid).multipliedBy(props.info.earlyWithdrawalFee).dividedBy(100);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                className: classes.infoRow,
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        container: true,
                        xs: 6,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    children: [
                                        t('plugin_good_ghosting_address'),
                                        ":"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: (0,formatter/* formatEthereumAddress */.j8)(props.info.currentPlayer.addr, 4)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        container: true,
                        xs: 6,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    children: [
                                        t('plugin_good_ghosting_total_deposited'),
                                        ":"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                        value: props.info.currentPlayer.amountPaid,
                                        decimals: gameToken.decimals,
                                        symbol: gameToken.symbol,
                                        formatter: base_src/* formatBalance */.az
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                className: classes.infoRow,
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        container: true,
                        xs: 6,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    children: [
                                        t('plugin_good_ghosting_status'),
                                        ":"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: status
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        container: true,
                        xs: 6,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    children: [
                                        t('plugin_good_ghosting_deposits'),
                                        ":"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: [
                                        Number.parseInt(props.info.currentPlayer.mostRecentSegmentPaid, 10) + 1,
                                        " /",
                                        ' ',
                                        props.info.lastSegment
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            canEarlyWithdraw && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.withdraw,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: t('plugin_good_ghosting_early_withdraw_info', {
                            amount: (0,base_src/* formatBalance */.az)(earlyWithdrawalFee, gameToken.decimals),
                            token: gameToken.symbol
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "primary",
                        disabled: !buttonEnabled,
                        onClick: ()=>withdraw()
                        ,
                        children: t('plugin_good_ghosting_leave_game')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textPrimary",
                        children: errorState.message
                    }),
                    errorState.link && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        color: "primary",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: errorState.link,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "subtitle1",
                            children: t('plugin_good_ghosting_view_on_explorer')
                        })
                    })
                ]
            })
        ]
    });
}
function usePlayerStatusMessage(info, player) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    switch(getPlayerStatus(info, player)){
        case PlayerStatus.Winning:
            return t('plugin_good_ghosting_status_winning');
        case PlayerStatus.Waiting:
            return t('plugin_good_ghosting_status_waiting');
        case PlayerStatus.Ghost:
            return t('plugin_good_ghosting_status_ghost');
        case PlayerStatus.Dropout:
            return t('plugin_good_ghosting_status_dropout');
        default:
            return t('plugin_good_ghosting_status_unknown');
    }
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/hooks/useOtherPlayerInfo.ts






function useOtherPlayerInfo(info) {
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const contract = useGoodGhostingContract(chainId, info.contractAddress);
    const { addressNames , addressCallDatas  } = (0,react.useMemo)(()=>({
            addressNames: Array(info.numberOfPlayers).fill('iterablePlayers'),
            addressCallDatas: Array(info.numberOfPlayers).fill('').map((_, i)=>[
                    i
                ]
            )
        })
    , [
        info.numberOfPlayers
    ]);
    const [addressResults, addressCalls, _, addressCallback] = (0,entry_web3_evm/* useSingleContractMultipleData */.es)(contract, addressNames, addressCallDatas);
    const { loading: addressLoading , error: addressError , retry: addressRetry ,  } = (0,useAsyncRetry/* default */.Z)(()=>addressCallback(addressCalls)
    , [
        addressCalls
    ]);
    const { playerNames , playerCallDatas  } = (0,react.useMemo)(()=>({
            playerNames: Array(addressResults.length).fill('players'),
            playerCallDatas: Array(addressResults.length).fill('').map((_, i)=>[
                    addressResults[i].value
                ]
            )
        })
    , [
        addressResults
    ]);
    const [playerResults, playerCalls, __, playerCallback] = (0,entry_web3_evm/* useSingleContractMultipleData */.es)(contract, playerNames, playerCallDatas);
    const { loading: playerLoading , error: playerError , retry: playerRetry ,  } = (0,useAsyncRetry/* default */.Z)(()=>playerCallback(playerCalls)
    , [
        playerCalls
    ]);
    const players = (0,react.useMemo)(()=>playerResults.map((res)=>res.value
        )
    , [
        playerResults
    ]);
    return {
        error: addressError || playerError,
        loading: addressLoading || playerLoading,
        retry: addressError ? addressRetry : playerRetry,
        value: players
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/intervalToDuration/index.js + 7 modules
var intervalToDuration = __webpack_require__(64893);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19963);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/GameActionDialog.tsx










const GameActionDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
        },
        button: {
            width: '60%',
            minHeight: 39,
            margin: `${theme.spacing(1)} auto`
        },
        actionText: {
            textAlign: 'center',
            marginBottom: theme.spacing(5)
        },
        actionSection: {
            textAlign: 'center',
            width: '100%'
        }
    })
);
function GameActionDialog(props) {
    const { open , onAction , onClose , bodyText , titleText , actionText , token , info , needsApprove  } = props;
    const { classes  } = GameActionDialog_useStyles();
    const gameToken = useGameToken();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { value: tokenBalance = '0' , loading: loadingTokenBalance , error: errorTokenBalance , retry: retryLoadTokenBalance ,  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, gameToken.address);
    const hasSufficientBalance = !loadingTokenBalance && !errorTokenBalance && (0,base_src/* isGreaterThanOrEqualTo */.KH)(tokenBalance, info.segmentPayment);
    let action = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.actionSection,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                classes: {
                    root: classes.button
                },
                color: "primary",
                variant: "contained",
                fullWidth: true,
                disabled: needsApprove && !hasSufficientBalance,
                onClick: onAction,
                children: actionText
            }),
            needsApprove && !hasSufficientBalance && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "subtitle1",
                color: loadingTokenBalance ? 'textSecondary' : 'red',
                children: loadingTokenBalance ? t('plugin_good_ghosting_checking_balance') : t('plugin_good_ghosting_insufficient_balance', {
                    amount: (0,base_src/* formatBalance */.az)(info.segmentPayment, gameToken.decimals),
                    token: gameToken.symbol
                })
            })
        ]
    });
    if (needsApprove) {
        if (errorTokenBalance) {
            action = /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                classes: {
                    root: classes.button
                },
                color: "primary",
                variant: "contained",
                fullWidth: true,
                onClick: retryLoadTokenBalance,
                children: t('plugin_good_ghosting_balance_error')
            });
        }
        action = /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
            amount: info.segmentPayment,
            spender: info.contractAddress,
            token: token,
            children: action
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: onClose,
        title: titleText,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.actionText,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                color: "textPrimary",
                                children: bodyText
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "h6",
                            color: "textSecondary",
                            children: t('plugin_good_ghosting_rules')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textSecondary",
                            children: t('plugin_good_ghosting_game_rules', {
                                amount: (0,base_src/* formatBalance */.az)(info.segmentPayment, gameToken.decimals),
                                token: gameToken.symbol,
                                roundCount: info.lastSegment
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                    children: action
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/GameAction.tsx












const GameAction_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1)
        }
    })
);
function GameAction(props) {
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const gameToken = useGameToken();
    const { classes  } = GameAction_useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { canJoinGame , joinGame  } = useJoinGame(props.info);
    const { canMakeDeposit , makeDeposit  } = useMakeDeposit(props.info);
    const { canWithdraw , withdraw  } = useWithdraw(props.info);
    const [openDialog, setOpenDialog] = (0,react.useState)(false);
    const [buttonEnabled, setButtonEnabled] = (0,react.useState)(true);
    const [errorState, setErrorState] = (0,react.useState)({});
    const { value: tokenDetailed , loading: loadingToken , error: errorToken ,  } = (0,entry_web3/* useFungibleToken */.cf)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, tokens/* DAI */.h1[chainId]?.address);
    if (loadingToken || errorToken) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    const buttonAction = async (action)=>{
        setButtonEnabled(false);
        setOpenDialog(false);
        setErrorState({});
        try {
            await action();
            props.info.refresh();
        } catch (error) {
            if (isGameActionError(error) && error.transactionHash) {
                const link = resolver/* explorerResolver.transactionLink */.Nb.transactionLink(chainId, error.transactionHash);
                if (error.gameActionStatus === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) {
                    setErrorState({
                        message: t('plugin_good_ghosting_tx_fail'),
                        link
                    });
                } else {
                    setErrorState({
                        message: t('plugin_good_ghosting_tx_timeout'),
                        link
                    });
                }
            } else {
                setErrorState({
                    message: t('plugin_good_ghosting_something_went_wrong')
                });
            }
        } finally{
            setButtonEnabled(true);
        }
    };
    const getButton = ()=>{
        if (canJoinGame) {
            return {
                needsApprove: true,
                action: joinGame,
                text: t('plugin_good_ghosting_join_game'),
                helpText: t('plugin_good_ghosting_join_help_text', {
                    amount: (0,base_src/* formatBalance */.az)(props.info.segmentPayment, gameToken.decimals),
                    token: gameToken.symbol
                })
            };
        } else if (canMakeDeposit) {
            return {
                needsApprove: true,
                action: makeDeposit,
                text: t('plugin_good_ghosting_make_deposit'),
                helpText: t('plugin_good_ghosting_deposit_help_text', {
                    segmentPayment: (0,base_src/* formatBalance */.az)(props.info.segmentPayment, gameToken.decimals),
                    token: gameToken.symbol
                })
            };
        } else if (canWithdraw) {
            return {
                needsApprove: false,
                action: withdraw,
                text: t('plugin_good_ghosting_withdraw'),
                helpText: t('plugin_good_ghosting_withdraw_help_text')
            };
        } else return {};
    };
    const buttonMethod = getButton();
    if (buttonMethod.action) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GameActionDialog, {
                    open: openDialog,
                    actionText: buttonMethod.text,
                    titleText: buttonMethod.text,
                    bodyText: buttonMethod.helpText,
                    onAction: ()=>buttonAction(buttonMethod.action)
                    ,
                    onClose: ()=>setOpenDialog(false)
                    ,
                    info: props.info,
                    token: tokenDetailed,
                    needsApprove: buttonMethod.needsApprove
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    color: "primary",
                    variant: "outlined",
                    disabled: !buttonEnabled,
                    className: classes.button,
                    onClick: ()=>setOpenDialog(true)
                    ,
                    children: buttonMethod.text
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textPrimary",
                    children: errorState.message
                }),
                errorState.link && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    color: "primary",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: errorState.link,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "subtitle1",
                        children: t('plugin_good_ghosting_view_on_explorer')
                    })
                })
            ]
        });
    } else return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/TimelineTimer.tsx











const TimelineTimer_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        timer: {
            textAlign: 'center',
            display: 'inline-block',
            padding: theme.spacing(1, 4),
            margin: theme.spacing(2, 0),
            border: `solid 1px ${theme.palette.divider}`,
            borderRadius: theme.shape.borderRadius
        },
        eventText: {
            padding: theme.spacing(0.5, 6, 1, 6)
        }
    })
);
function TimelineTimer(props) {
    const { classes  } = TimelineTimer_useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const timeline = useTimeline(props.info);
    const [timelineIndex, setTimelineIndex] = (0,react.useState)(getNextTimelineIndex(timeline));
    const [isLastEvent, setLastEvent] = (0,react.useState)(isEndOfTimeline(timelineIndex, timeline));
    const nextTimelineEvent = timeline[timelineIndex];
    const onUpdateTargetDate = ()=>{
        const index = getNextTimelineIndex(timeline);
        setTimelineIndex(index);
        setLastEvent(isEndOfTimeline(timelineIndex, timeline));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        justifyContent: "center",
        alignItems: "center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
            item: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.timer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textSecondary",
                        children: isLastEvent ? t('plugin_good_ghosting_game_end') : t('plugin_good_ghosting_next_event')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h5",
                        color: "textPrimary",
                        className: classes.eventText,
                        children: isLastEvent ? t('plugin_good_ghosting_game_over') : nextTimelineEvent.eventOnDate
                    }),
                    isLastEvent ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textSecondary",
                        children: t('plugin_good_ghosting_participants_withdraw')
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Timer, {
                        targetDate: nextTimelineEvent.date,
                        onUpdateTargetDate: onUpdateTargetDate
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GameAction, {
                        info: props.info
                    })
                ]
            })
        })
    });
}
function Timer(props) {
    const [dateDisplay, setDateDisplay] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        const timerId = setInterval(()=>{
            const now = new Date();
            if ((0,isBefore/* default */.Z)(props.targetDate, now)) {
                clearInterval(timerId);
                props.onUpdateTargetDate();
            } else {
                const duration = (0,intervalToDuration/* default */.Z)({
                    start: now,
                    end: props.targetDate
                });
                setDateDisplay((0,formatDuration/* default */.Z)(duration, {
                    zero: true,
                    format: [
                        'days',
                        'hours',
                        'minutes',
                        'seconds'
                    ]
                }));
            }
        }, 1000);
        return ()=>clearInterval(timerId)
        ;
    }, [
        props.targetDate
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        variant: "body1",
        color: "textSecondary",
        children: dateDisplay
    });
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/PreviewCard.tsx














const PreviewCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        tabs: {
            height: 'var(--tabHeight)',
            width: '100%',
            minHeight: 'unset',
            display: 'flex'
        },
        tab: {
            flex: 1,
            height: 'var(--tabHeight)',
            minHeight: 'unset',
            minWidth: 'unset'
        },
        gameName: {
            textAlign: 'center'
        }
    })
);
var GoodGhostingTab;
(function(GoodGhostingTab) {
    GoodGhostingTab["Game"] = "Game";
    GoodGhostingTab["Timeline"] = "Timeline";
    GoodGhostingTab["Personal"] = "Personal";
    GoodGhostingTab["Everyone"] = "Everyone";
})(GoodGhostingTab || (GoodGhostingTab = {}));
function PreviewCard(props) {
    const { value: addressInfo , error , loading , retry  } = useGameContractAddress(props.id);
    const { t  } = (0,src_utils/* useI18N */.M1)();
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            color: "textPrimary",
            children: t('loading')
        });
    }
    if (error || !addressInfo?.contractAddress) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: t('go_wrong')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    sx: {
                        marginTop: 1
                    },
                    size: "small",
                    onClick: retry,
                    children: t('retry')
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCardWithGameAddress, {
        gameData: addressInfo
    });
}
function PreviewCardWithGameAddress(props) {
    const { value: info , error , loading , retry  } = useGameInfo(props.gameData);
    const { t  } = (0,src_utils/* useI18N */.M1)();
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            color: "textPrimary",
            children: t('loading')
        });
    }
    if (error || !info) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: t('go_wrong')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    sx: {
                        marginTop: 1
                    },
                    size: "small",
                    onClick: retry,
                    children: t('retry')
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCardWithGameInfo, {
        info: info
    });
}
function PreviewCardWithGameInfo(props) {
    const { classes  } = PreviewCard_useStyles();
    const [activeTab, setActiveTab] = (0,react.useState)(GoodGhostingTab.Game);
    const finDataResult = usePoolData(props.info);
    const otherPlayerResult = useOtherPlayerInfo(props.info);
    const poolAssetsResult = usePoolAssets();
    const tabs = [
        GoodGhostingTab.Game,
        GoodGhostingTab.Timeline,
        GoodGhostingTab.Everyone
    ];
    if (props.info.currentPlayer) tabs.push(GoodGhostingTab.Personal);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        variant: "outlined",
        className: classes.root,
        elevation: 0,
        children: [
            props.info.gameName && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.gameName,
                variant: "h6",
                color: "textPrimary",
                children: props.info.gameName
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TimelineTimer, {
                info: props.info
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: activeTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                        className: classes.tabs,
                        value: activeTab,
                        onChange: (event, tab)=>setActiveTab(tab)
                        ,
                        children: tabs.map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                className: classes.tab,
                                value: tab,
                                label: tab
                            }, tab)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: GoodGhostingTab.Game,
                        sx: {
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GameStatsView, {
                            info: props.info,
                            finDataResult: finDataResult,
                            otherPlayerResult: otherPlayerResult,
                            poolAssetsResult: poolAssetsResult
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: GoodGhostingTab.Timeline,
                        sx: {
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TimelineView, {
                            info: props.info
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: GoodGhostingTab.Everyone,
                        sx: {
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OtherPlayersView, {
                            info: props.info,
                            otherPlayerResult: otherPlayerResult
                        })
                    }),
                    props.info.currentPlayer && /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: GoodGhostingTab.Personal,
                        sx: {
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonalView, {
                            info: props.info
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/plugins/GoodGhosting/base.ts + 1 modules
var GoodGhosting_base = __webpack_require__(89355);
// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/SNSAdaptor/index.tsx












const isGoodGhosting = (x)=>/^https:\/\/goodghosting.com/.test(x)
;
const sns = {
    ...GoodGhosting_base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,src/* parseURL */.Lk)(x.val).find(isGoodGhosting);
        }, [
            props.message
        ]);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    PostInspector: function Component() {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isGoodGhosting);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    ApplicationEntries: [
        {
            ApplicationEntryID: GoodGhosting_base/* base.ID */.u.ID,
            category: 'dapp',
            marketListSortingPriority: 13,
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_good_ghosting_description"
            }),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_good_ghosting_name"
            }),
            tutorialLink: 'https://realmasknetwork.notion.site/f94aa38b01404b9c99c7a03935840962',
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(GoogGhostingIcon, {})
        }, 
    ]
};
function Renderer(props) {
    let [id = ''] = props.url.match(/pools\/([\w ]+)/) ?? [];
    if (id) {
        id = id.replace('pools/', '');
    }
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
        expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
        expectedChainId: types/* ChainId.Matic */.a_.Matic,
        renderInTimeline: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {
            id: id
        })
    });
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 73495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ ChainBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76618);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21784);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72499);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80226);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46123);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72288);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93455);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91788);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77818);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47061);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89239);















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        action: {
            textAlign: 'center',
            margin: theme.spacing(1),
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 48
        },
        tooltip: {
            borderRadius: 4,
            padding: 10
        }
    })
);
function ChainBoundary(props) {
    const { noSwitchNetworkTip =true , expectedPluginID , expectedChainId , predicate =(actualPluginID, actualChainId)=>actualPluginID === expectedPluginID && actualChainId === expectedChainId
     ,  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const actualPluginID1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const plugin = (0,_masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_11__/* .useActivatedPlugin */ .Rc)(actualPluginID1, 'any');
    const { Others: actualOthers  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(actualPluginID1);
    const actualChainId1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)(actualPluginID1);
    const actualProviderType = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useProviderType */ ._o)(actualPluginID1);
    const actualChainName = actualOthers?.chainResolver.chainName(actualChainId1);
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .mA)(actualPluginID1);
    const { Others: expectedOthers  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(expectedPluginID);
    const expectedConnection = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3Connection */ .Tv)(expectedPluginID);
    const expectedAllowTestnet = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAllowTestnet */ .QE)(expectedPluginID);
    const expectedChainName = expectedOthers?.chainResolver.chainName(expectedChainId);
    const expectedNetworkDescriptor = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkDescriptor */ .Vw)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, expectedChainId);
    const expectedChainAllowed = expectedOthers?.chainResolver.isValid(expectedChainId, expectedAllowTestnet);
    const isPluginIDMatched = actualPluginID1 === expectedPluginID;
    const isMatched = predicate(actualPluginID1, actualChainId1);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    const onSwitchChain = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .delay */ .gw)(1000);
        if (!expectedChainAllowed) return;
        if (!isPluginIDMatched || actualProviderType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect) {
            openSelectProviderDialog();
            return;
        }
        if (!isMatched) {
            await expectedConnection?.connect({
                chainId: expectedChainId
            });
        }
    }, [
        expectedChainAllowed,
        isMatched,
        isPluginIDMatched,
        actualProviderType,
        expectedChainId,
        expectedConnection,
        openSelectProviderDialog, 
    ]);
    // TODO: will remove this and extract new boundary for timeline
    const buttonProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            ...props.renderInTimeline ? {
                variant: 'contained',
                fullWidth: true,
                sx: {
                    backgroundColor: theme.palette.maskColor?.dark,
                    color: theme.palette.maskColor?.white,
                    '&:hover': {
                        backgroundColor: theme.palette.maskColor?.dark
                    }
                }
            } : {},
            ...props.ActionButtonPromiseProps
        };
    }, [
        props.ActionButtonPromiseProps,
        props.renderInTimeline
    ]);
    const renderBox = (children, tips)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .ShadowRootTooltip */ .p_, {
            title: tips ?? '',
            classes: {
                tooltip: classes.tooltip
            },
            arrow: true,
            placement: "top",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: props.className,
                sx: {
                    flex: 1
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: children
            })
        });
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !props.hiddenConnectButton ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
            fullWidth: true,
            startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__/* .PluginWalletConnectIcon */ .Q, {}),
            variant: "contained",
            size: props.ActionButtonPromiseProps?.size,
            sx: {
                marginTop: 1.5
            },
            onClick: openSelectProviderDialog,
            ...buttonProps,
            children: t('plugin_wallet_connect_wallet')
        }) : null
    }));
    if (isMatched) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.children
    });
    if (actualPluginID1 !== expectedPluginID) {
        return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.errorPlugin */ .ZN.errorPlugin,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: plugin?.name?.fallback ?? 'Unknown Plugin'
                        })
                    })
                }) : null,
                expectedChainAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                    fullWidth: true,
                    className: classes.switchButton,
                    startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .WalletIcon */ .o, {
                        mainIcon: expectedNetworkDescriptor?.icon,
                        size: 18
                    }),
                    sx: props.ActionButtonPromiseProps?.sx,
                    style: {
                        borderRadius: 10
                    },
                    init: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: t('plugin_wallet_connect_network', {
                            network: 'EVM'
                        })
                    }),
                    waiting: t('plugin_wallet_connect_network_under_going', {
                        network: 'EVM'
                    }),
                    complete: t('plugin_wallet_connect_network', {
                        network: 'EVM'
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...buttonProps
                }) : null
            ]
        }));
    }
    return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.errorPlugin */ .ZN.errorPlugin,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualChainName
                    })
                })
            }) : null,
            expectedChainAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .WalletIcon */ .o, {
                    mainIcon: expectedNetworkDescriptor?.icon,
                    size: 18
                }),
                sx: props.ActionButtonPromiseProps?.sx,
                style: {
                    borderRadius: 10,
                    paddingTop: 11,
                    paddingBottom: 11
                },
                init: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedChainName
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedChainName
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedChainName
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...buttonProps
            }) : null
        ]
    }), actualProviderType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect ? t('plugin_wallet_connect_tips') : '');
}


/***/ }),

/***/ 19963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ EthereumERC20TokenApprovedBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69427);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96436);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46123);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93455);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72288);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94806);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            flexDirection: 'column',
            position: 'relative',
            marginTop: theme.spacing(1.5),
            lineHeight: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 0',
            fontSize: 18
        },
        buttonLabel: {
            display: 'block',
            fontWeight: 'inherit',
            transform: 'translateY(-4px)'
        },
        buttonAmount: {
            fontSize: 10,
            fontWeight: 300,
            transform: 'translateY(12px)',
            position: 'absolute'
        },
        children: {
            marginTop: 8,
            width: '100%'
        }
    })
);
function EthereumERC20TokenApprovedBoundary(props) {
    const { amount , spender , token , children =null , render , fallback , infiniteUnlockContent , onlyInfiniteUnlock =false , withChildren =false ,  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [{ type: approveStateType , allowance  }, transactionState, approveCallback, resetApproveCallback] = (0,_masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .useERC20TokenApproveCallback */ .Sj)(token?.address ?? '', amount, spender);
    const onApprove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (useExact = false)=>{
        if (approveStateType !== _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.NOT_APPROVED */ .iW.NOT_APPROVED) return;
        await approveCallback(useExact);
    }, [
        approveStateType,
        transactionState,
        approveCallback
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        container: true,
        children: render ? render(false) : children
    });
    if (transactionState.loading || approveStateType === _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.UPDATING */ .iW.UPDATING) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                disabled: true,
                ...props.ActionButtonProps,
                children: [
                    transactionState.loading ? t('plugin_ito_unlocking_symbol', {
                        symbol: token.symbol
                    }) : `Updating ${token.symbol}`,
                    "\u2026"
                ]
            }),
            withChildren ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.UNKNOWN */ .iW.UNKNOWN) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                disabled: true,
                ...props.ActionButtonProps,
                children: fallback ?? 'Enter an amount'
            }),
            withChildren ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.FAILED */ .iW.FAILED) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                onClick: resetApproveCallback,
                ...props.ActionButtonProps,
                children: t('wallet_load_retry', {
                    symbol: (token.symbol ?? token.name) ?? 'Token'
                })
            }),
            withChildren ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.NOT_APPROVED */ .iW.NOT_APPROVED) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        width: "100%",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                container: true,
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
                spacing: 2,
                children: [
                    !onlyInfiniteUnlock ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            onClick: ()=>onApprove(true)
                            ,
                            ...props.ActionButtonProps,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: classes.buttonLabel,
                                    children: t('plugin_wallet_token_unlock')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: classes.buttonAmount,
                                    children: [
                                        (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .formatBalance */ .az)(amount, token.decimals, 2),
                                        " ",
                                        token?.symbol ?? 'Token'
                                    ]
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                        item: true,
                        xs: onlyInfiniteUnlock ? 12 : 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            onClick: ()=>onApprove(false)
                            ,
                            ...props.ActionButtonProps,
                            children: infiniteUnlockContent ?? t('plugin_wallet_token_infinite_unlock')
                        })
                    })
                ]
            }),
            withChildren ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.APPROVED */ .iW.APPROVED) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        container: true,
        children: render ? render(false) : typeof children === 'function' ? children(allowance) : children
    });
    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .unreachable */ .t1)(approveStateType);
}


/***/ }),

/***/ 59345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ WalletConnectedBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72288);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91788);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93455);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50719);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            margin: 0
        },
        timeline: {
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            width: '100%',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            }
        }
    })
);
function WalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false , renderInTimeline =false  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const pluginID = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useAccount */ .mA)();
    const chainIdValid = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useChainId */ .xx)();
    const nativeTokenBalance = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useNativeTokenBalance */ .hj)();
    const approved = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useRiskWarningApproved */ ._W)();
    const { setDialog: setRiskWarningDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.walletRiskWarningDialogUpdated */ .R.events.walletRiskWarningDialogUpdated);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // TODO: will remove  this and extract new boundary for timeline
    const buttonClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, classes.connectWallet, renderInTimeline ? classes.timeline : null));
    if (!account) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        startIcon: props.startIcon,
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: openSelectProviderDialog,
        ...props.ActionButtonProps,
        children: t('plugin_wallet_connect_a_wallet')
    });
    if (!approved && !hideRiskWarningConfirmed) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>{
            setRiskWarningDialog({
                open: true,
                account,
                pluginID
            });
        },
        ...props.ActionButtonProps,
        children: t('plugin_wallet_confirm_risk_warning')
    });
    if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isZero */ .Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: !nativeTokenBalance.error,
        fullWidth: true,
        variant: "contained",
        onClick: nativeTokenBalance.retry,
        ...props.ActionButtonProps,
        children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: true,
        fullWidth: true,
        variant: "contained",
        ...props.ActionButtonProps,
        children: t('plugin_wallet_invalid_network')
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 44737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ createContainer),
/* harmony export */   "u": () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


/***/ })

}]);