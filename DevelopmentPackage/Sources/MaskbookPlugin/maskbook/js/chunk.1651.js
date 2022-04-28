"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1651],{

/***/ 69157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ TabContext),
/* harmony export */   "_i": () => (/* binding */ useTabContext),
/* harmony export */   "pQ": () => (/* binding */ getTabId),
/* harmony export */   "uU": () => (/* binding */ getPanelId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71999);


/**
 * @type {React.Context<{ idPrefix: string; value: string } | null>}
 */


const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

function useUniquePrefix() {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}

function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, {
    value: context,
    children: children
  });
}
 false ? 0 : void 0;
/**
 * @returns {unknown}
 */

function useTabContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-T-${value}`;
}

/***/ }),

/***/ 37101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(51911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(2633);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(88516);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.76_31fee5138b61bcdeb416e3946f47cd38/node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(44007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.76_31fee5138b61bcdeb416e3946f47cd38/node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72755);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.76_31fee5138b61bcdeb416e3946f47cd38/node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(94282);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(69157);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabPanel/TabPanel.js


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

/***/ 44309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ detectScrollType),
/* harmony export */   "T": () => (/* binding */ getNormalizedScrollLeft)
/* harmony export */ });
// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ 1322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(6823);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(27536);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(69157);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(37101);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isBefore/index.js
var isBefore = __webpack_require__(33086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(35827);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useMulticall.ts
var useMulticall = __webpack_require__(89650);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
;// CONCATENATED MODULE: ../web3-contracts/abis/GoodGhostingPolygon.json
const GoodGhostingPolygon_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_inboundCurrency","type":"address"},{"internalType":"contract ILendingPoolAddressesProvider","name":"_lendingPoolAddressProvider","type":"address"},{"internalType":"uint256","name":"_segmentCount","type":"uint256"},{"internalType":"uint256","name":"_segmentLength","type":"uint256"},{"internalType":"uint256","name":"_segmentPayment","type":"uint256"},{"internalType":"uint256","name":"_earlyWithdrawalFee","type":"uint256"},{"internalType":"uint256","name":"_customFee","type":"uint256"},{"internalType":"address","name":"_dataProvider","type":"address"},{"internalType":"uint256","name":"_maxPlayersCount","type":"uint256"},{"internalType":"address","name":"_incentiveController","type":"address"},{"internalType":"contract IERC20","name":"_matic","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalGameInterest","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"adminFeeAmount","type":"uint256"}],"name":"AdminWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":true,"internalType":"uint256","name":"segment","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalGamePrincipal","type":"uint256"}],"name":"EarlyWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalGamePrincipal","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalGameInterest","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewards","type":"uint256"}],"name":"FundsRedeemedFromExternalPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"JoinedGame","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"winners","type":"address[]"}],"name":"WinnersAnnouncement","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"playerReward","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"adaiToken","outputs":[{"internalType":"contract AToken","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"adminFeeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"adminWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"customFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"daiToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"earlyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earlyWithdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"firstSegmentStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getCurrentSegment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getNumberOfPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"incentiveController","outputs":[{"internalType":"contract IncentiveController","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"isGameCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"iterablePlayers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"joinGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastSegment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lendingPool","outputs":[{"internalType":"contract ILendingPool","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lendingPoolAddressProvider","outputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"makeDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"matic","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxPlayersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"players","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"withdrawn","type":"bool"},{"internalType":"bool","name":"canRejoin","type":"bool"},{"internalType":"uint256","name":"mostRecentSegmentPaid","type":"uint256"},{"internalType":"uint256","name":"amountPaid","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"redeemed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsPerPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"segmentLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"segmentPayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalGameInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalGamePrincipal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"adminFeeWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redeemFromExternalPool","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/contracts/useGoodGhostingContract.ts


function useGoodGhostingContract(address) {
    return (0,useContract/* useContract */.cq)(address, GoodGhostingPolygon_namespaceObject);
}

// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/addSeconds/index.js
var addSeconds = __webpack_require__(71767);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
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
    const contract = useGoodGhostingContract(gameData.contractAddress);
    const account = (0,useAccount/* useAccount */.m)();
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
    const [results, calls, _, callback] = (0,useMulticall/* useSingleContractMultipleData */.es)(contract, names1, callDatas);
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
    const { t  } = (0,utils/* useI18N */.M1)();
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
                    index: index
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
                    index: index
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
            marginTop: '0px',
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
            left: '0px',
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

// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
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
            top: '0px',
            left: '0px',
            bottom: '0px',
            right: '0px'
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

// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC20TokenContract.ts
var useERC20TokenContract = __webpack_require__(91690);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/constants/tokens.ts
var tokens = __webpack_require__(10466);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 5 modules
var useERC20TokenDetailed = __webpack_require__(29782);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAssets.ts + 1 modules
var useAssets = __webpack_require__(19681);
;// CONCATENATED MODULE: ../web3-contracts/abis/GoodGhostingIncentives.json
const GoodGhostingIncentives_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"rewardToken","type":"address"},{"internalType":"address","name":"emissionManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"emission","type":"uint256"}],"name":"AssetConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"AssetIndexUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"}],"name":"ClaimerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ditributionEnd","type":"uint256"}],"name":"DistributionEndUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"PendingAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsAccrued","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"vault","type":"address"}],"name":"RewardsVaultUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAdming","type":"address"},{"indexed":false,"internalType":"uint256","name":"role","type":"uint256"}],"name":"RoleClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"UserIndexUpdated","type":"event"},{"inputs":[],"name":"DISTRIBUTION_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSION_MANAGER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_TOKEN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"assets","outputs":[{"internalType":"uint128","name":"emissionPerSecond","type":"uint128"},{"internalType":"uint128","name":"lastUpdateTimestamp","type":"uint128"},{"internalType":"uint256","name":"index","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"claimRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"claimRewardsOnBehalf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"}],"name":"claimRoleAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256[]","name":"emissionsPerSecond","type":"uint256[]"}],"name":"configureAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"}],"name":"getAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getClaimer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDistributionEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"}],"name":"getPendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"address","name":"user","type":"address"}],"name":"getRewardsBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardsVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"asset","type":"address"}],"name":"getUserAssetData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserUnclaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"totalSupply","type":"uint256"},{"internalType":"uint256","name":"userBalance","type":"uint256"}],"name":"handleAction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardsVault","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"caller","type":"address"}],"name":"setClaimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"distributionEnd","type":"uint256"}],"name":"setDistributionEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"},{"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"setPendingAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardsVault","type":"address"}],"name":"setRewardsVault","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/contracts/useGoodGhostingIncentivesContract.ts


function useGoodGhostingIncentiveContract() {
    const { GOOD_GHOSTING_INCENTIVES_CONTRACT_ADDRESS  } = (0,constants/* useGoodGhostingConstants */.JH)();
    return (0,useContract/* useContract */.cq)(GOOD_GHOSTING_INCENTIVES_CONTRACT_ADDRESS, GoodGhostingIncentives_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/hooks/usePoolData.ts





function usePoolData(info) {
    const rewardToken = useRewardToken();
    const contract = useGoodGhostingContract(info.contractAddress);
    const adaiContract = (0,useERC20TokenContract/* useERC20TokenContract */.x)(info.adaiTokenAddress);
    const rewardTokenContract = (0,useERC20TokenContract/* useERC20TokenContract */.x)(rewardToken.address);
    const incentivesContract = useGoodGhostingIncentiveContract();
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
    const chainId = (0,useChainId/* useChainId */.xx)();
    return tokens/* DAI */.h1[chainId];
}
function useRewardToken() {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return tokens/* WNATIVE */.FX[chainId];
}
function usePoolAssets() {
    const gameToken = useGameToken();
    const rewardToken = useRewardToken();
    const { value: gameTokenDetailed , loading: gameTokenLoading , error: gameTokenError , retry: gameTokenRetry ,  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(gameToken.address);
    const { value: rewardTokenDetailed , loading: rewardTokenLoading , error: rewardTokenError , retry: rewardTokenRetry ,  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(rewardToken.address);
    const assets = gameTokenDetailed && rewardTokenDetailed ? [
        gameTokenDetailed,
        rewardTokenDetailed
    ] : [];
    const { value , loading , error , retry  } = (0,useAssets/* useAssets */.L)(assets);
    const assetRetry = ()=>{
        if (gameTokenError) gameTokenRetry();
        else if (rewardTokenError) rewardTokenRetry();
        else retry();
    };
    let gameAssets;
    if (value?.length) {
        const gameAsset = value.find((asset)=>asset.token.address === gameToken.address
        );
        const rewardAsset = value.find((asset)=>asset.token.address === rewardToken.address
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
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
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
    const gameInterest = new (bignumber_default())(info.gameHasEnded ? info.totalGameInterest : rawPoolInterest).multipliedBy(assets.gameAsset?.price ? assets.gameAsset?.price[types/* CurrencyType.USD */.V2.USD] : 1);
    const gameRewards = new (bignumber_default())(poolData.reward).plus(info.gameHasEnded ? new (bignumber_default())(playerStandings.winning).multipliedBy(info.rewardsPerPlayer) : poolData.incentives).multipliedBy(assets.rewardAsset?.price ? assets.rewardAsset?.price[types/* CurrencyType.USD */.V2.USD] : 0);
    const totalEarnings = gameInterest.plus(gameRewards);
    const winnerGains = totalEarnings.div(playerStandings.winning || 1);
    const baseDate = new Date(0);
    const dateAfterDuration = (0,addSeconds/* default */.Z)(baseDate, info.segmentLength * (info.lastSegment + 1));
    const gameDuration = (0,differenceInDays/* default */.Z)(dateAfterDuration, baseDate);
    const expectedPayment = (0,base_src/* multipliedBy */.$q)(info.segmentPayment, info.lastSegment);
    const dividend = winnerGains.multipliedBy(365);
    const divisor = expectedPayment.multipliedBy(gameDuration).multipliedBy(assets.gameAsset?.price ? assets.gameAsset?.price[types/* CurrencyType.USD */.V2.USD] : 1);
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
    const { t  } = (0,utils/* useI18N */.M1)();
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
                                        (0,formatter/* formatBalance */.az)(props.info.segmentPayment, gameToken.decimals),
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
                                        title: (0,base_src/* toFixed */.FH)((0,formatter/* formatBalance */.az)(poolEarnings, gameToken.decimals), 2),
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
                                        title: (0,base_src/* toFixed */.FH)((0,formatter/* formatBalance */.az)(extraRewards, rewardToken.decimals), 2),
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
                                        title: (0,formatter/* formatBalance */.az)(props.info.totalGamePrincipal, gameToken.decimals),
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
    const { t  } = (0,utils/* useI18N */.M1)();
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

// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useGasPrice.ts
var useGasPrice = __webpack_require__(34790);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/hooks/useGameActions.ts



function useJoinGame(info) {
    const account = (0,useAccount/* useAccount */.m)();
    const contract = useGoodGhostingContract(info.contractAddress);
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
    const account = (0,useAccount/* useAccount */.m)();
    const contract = useGoodGhostingContract(info.contractAddress);
    const gasPrice = (0,useGasPrice/* useGasPrice */.F)();
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
    const account = (0,useAccount/* useAccount */.m)();
    const contract = useGoodGhostingContract(info.contractAddress);
    const gasPrice = (0,useGasPrice/* useGasPrice */.F)();
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
    const account = (0,useAccount/* useAccount */.m)();
    const contract = useGoodGhostingContract(info.contractAddress);
    const gasPrice = (0,useGasPrice/* useGasPrice */.F)();
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

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
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
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = PersonalView_useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
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
                const link = (0,pipes/* resolveTransactionLinkOnExplorer */.z4)(chainId, error.transactionHash);
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
                                        formatter: formatter/* formatBalance */.az
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
                            amount: (0,formatter/* formatBalance */.az)(earlyWithdrawalFee, gameToken.decimals),
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
    const { t  } = (0,utils/* useI18N */.M1)();
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
    const contract = useGoodGhostingContract(info.contractAddress);
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
    const [addressResults, addressCalls, _, addressCallback] = (0,useMulticall/* useSingleContractMultipleData */.es)(contract, addressNames, addressCallDatas);
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
    const [playerResults, playerCalls, __, playerCallback] = (0,useMulticall/* useSingleContractMultipleData */.es)(contract, playerNames, playerCallDatas);
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(52599);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenBalance.ts
var useERC20TokenBalance = __webpack_require__(58498);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(44632);
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
    const { t  } = (0,utils/* useI18N */.M1)();
    const { value: tokenBalance = '0' , loading: loadingTokenBalance , error: errorTokenBalance , retry: retryLoadTokenBalance ,  } = (0,useERC20TokenBalance/* useERC20TokenBalance */.y)(gameToken.address);
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
                    amount: (0,formatter/* formatBalance */.az)(info.segmentPayment, gameToken.decimals),
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
                                amount: (0,formatter/* formatBalance */.az)(info.segmentPayment, gameToken.decimals),
                                token: gameToken.symbol,
                                roundCount: info.lastSegment
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
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
    const chainId = (0,useChainId/* useChainId */.xx)();
    const gameToken = useGameToken();
    const { classes  } = GameAction_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { canJoinGame , joinGame  } = useJoinGame(props.info);
    const { canMakeDeposit , makeDeposit  } = useMakeDeposit(props.info);
    const { canWithdraw , withdraw  } = useWithdraw(props.info);
    const [openDialog, setOpenDialog] = (0,react.useState)(false);
    const [buttonEnabled, setButtonEnabled] = (0,react.useState)(true);
    const [errorState, setErrorState] = (0,react.useState)({});
    const { value: tokenDetailed , loading: loadingToken , error: errorToken ,  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(tokens/* DAI */.h1[chainId]?.address);
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
                const link = (0,pipes/* resolveTransactionLinkOnExplorer */.z4)(chainId, error.transactionHash);
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
                    amount: (0,formatter/* formatBalance */.az)(props.info.segmentPayment, gameToken.decimals),
                    token: gameToken.symbol
                })
            };
        } else if (canMakeDeposit) {
            return {
                needsApprove: true,
                action: makeDeposit,
                text: t('plugin_good_ghosting_make_deposit'),
                helpText: t('plugin_good_ghosting_deposit_help_text', {
                    segmentPayment: (0,formatter/* formatBalance */.az)(props.info.segmentPayment, gameToken.decimals),
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
    const { t  } = (0,utils/* useI18N */.M1)();
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
    const { t  } = (0,utils/* useI18N */.M1)();
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
    const { t  } = (0,utils/* useI18N */.M1)();
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
var GoodGhosting_base = __webpack_require__(5493);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
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
    }
};
function Renderer(props) {
    let [id = ''] = props.url.match(/pools\/([\w ]+)/) ?? [];
    if (id) {
        id = id.replace('pools/', '');
    }
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: types/* ChainId.Matic */.a_.Matic,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {
            id: id
        })
    });
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 52599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ EthereumWalletConnectedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(43369);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletRiskWarningDialog.ts




const useWalletRiskWarningDialog = ()=>{
    const account = (0,useAccount/* useAccount */.m)();
    const [isConfirmed, setConfirmed] = (0,react.useState)(false);
    const fetchRiskWarningStatus = ()=>{
        if (!account) setConfirmed(false);
        else messages/* WalletRPC.getRiskWarningConfirmed */.V.getRiskWarningConfirmed(account).then((confirmed)=>setConfirmed(confirmed ?? false)
        );
    };
    const { openDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletRiskWarningDialogUpdated */.R.events.walletRiskWarningDialogUpdated, fetchRiskWarningStatus);
    (0,react.useEffect)(fetchRiskWarningStatus, [
        account
    ]);
    return {
        isConfirmed,
        openDialog
    };
};

;// CONCATENATED MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx











const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function EthereumWalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const account = (0,useAccount/* useAccount */.m)();
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)();
    // #region remote controlled confirm risk warning
    const { isConfirmed: isRiskWarningConfirmed , openDialog: openRiskWarningDialog  } = useWalletRiskWarningDialog();
    // #endregion
    // #region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    if (!account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openSelectProviderDialog,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_connect_a_wallet')
        })
    });
    if (!isRiskWarningConfirmed && !hideRiskWarningConfirmed) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openRiskWarningDialog,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_confirm_risk_warning')
        })
    });
    if ((0,base_src/* isZero */.Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.gasFeeButton),
            disabled: !nativeTokenBalance.error,
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: nativeTokenBalance.retry,
            ...props.ActionButtonProps,
            children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
        })
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.invalidButton),
            disabled: true,
            fullWidth: true,
            variant: "contained",
            size: "large",
            ...props.ActionButtonProps,
            children: t('plugin_wallet_invalid_network')
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: children
    });
}


/***/ }),

/***/ 61114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ useMulticallContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/Multicall.json
const Multicall_namespaceObject = JSON.parse('[{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Call[]","name":"calls","type":"tuple[]"}],"name":"multicall","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"uint256","name":"gasUsed","type":"uint256"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ../web3-shared/evm/contracts/useMulticallContract.ts



function useMulticallContract(chainId) {
    const { MULTICALL_ADDRESS  } = (0,constants/* useEthereumConstants */.HV)(chainId);
    return (0,useContract/* useContract */.cq)(MULTICALL_ADDRESS, Multicall_namespaceObject);
}


/***/ }),

/***/ 19681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ useAssets)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(67376);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(38443);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAssetsFromChain.ts + 2 modules
var useAssetsFromChain = __webpack_require__(72831);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAssetsFromProvider.ts
var useAssetsFromProvider = __webpack_require__(38392);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var token = __webpack_require__(33690);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAssetsMerged.ts






/**
 * Merge multiple token lists into one which sorted by balance.
 * The order of result values is determined by the order they occur in the array.
 * @param listOfTokens
 */ function useAssetsMerged(...listOfTokens) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const mergedAssets = (0,react.useMemo)(()=>{
        if (!NATIVE_TOKEN_ADDRESS) return src/* EMPTY_LIST */.rP;
        return (0,uniqBy/* default */.Z)(listOfTokens.flatMap((x)=>x
        ), (x)=>`${x.token.chainId}_${(0,formatter/* formatEthereumAddress */.j8)(x.token.address)}`
        ).sort((0,token/* makeSortAssertFn */.Si)(chainId));
    }, [
        NATIVE_TOKEN_ADDRESS,
        ...listOfTokens,
        chainId
    ]);
    return mergedAssets;
}

;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAssets.ts








function useAssets(tokens, chainId) {
    const wallet = (0,useWallet/* useWallet */.O)();
    const { value: nativeTokenDetailed , loading: nativeTokenDetailedLoading , error: nativeTokenDetailedError , retry: retryNativeTokenDetailed ,  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)(chainId === 'all' ? undefined : chainId);
    const { value: assetsFromChain = src/* EMPTY_LIST */.rP , loading: assetsDetailedChainLoading , error: assetsDetailedChainError , retry: retryAssetsDetailedChain ,  } = (0,useAssetsFromChain/* useAssetsFromChain */.R)(nativeTokenDetailed ? [
        nativeTokenDetailed,
        ...tokens
    ] : tokens);
    const { value: assetsFromProvider = src/* EMPTY_LIST */.rP , loading: assetsDetailedProviderLoading , error: assetsDetailedProviderError , retry: retryAssetsDetailedDebank ,  } = (0,useAssetsFromProvider/* useAssetsFromProvider */.u)(chainId);
    const detailedTokensRetry = (0,react.useCallback)(()=>{
        retryNativeTokenDetailed();
        retryAssetsDetailedChain();
        retryAssetsDetailedDebank();
    }, [
        retryNativeTokenDetailed,
        retryAssetsDetailedChain,
        retryAssetsDetailedDebank
    ]);
    const matchedAssetsFromChain = (0,react.useMemo)(()=>assetsFromChain.filter((x)=>!chainId || chainId === 'all' || x.token.chainId === chainId
        )
    , [
        assetsFromChain,
        chainId
    ]);
    const assetsDetailed = useAssetsMerged(assetsFromProvider, matchedAssetsFromChain);
    const assets = (0,react.useMemo)(()=>assetsDetailed.filter((x)=>!wallet?.erc20_token_blacklist.has((0,formatter/* formatEthereumAddress */.j8)(x.token.address))
        )
    , [
        assetsDetailed,
        wallet?.erc20_token_blacklist
    ]);
    return {
        value: assets,
        error: nativeTokenDetailedError || assetsDetailedChainError || assetsDetailedProviderError,
        loading: nativeTokenDetailedLoading || assetsDetailedChainLoading || assetsDetailedProviderLoading,
        retry: detailedTokensRetry
    };
}


/***/ }),

/***/ 34790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useGasPrice)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64452);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46140);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31174);



function useGasPrice() {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)({
        chainId
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return web3.eth.getGasPrice();
    }, [
        web3,
        chainId
    ]);
}


/***/ }),

/***/ 89650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F_": () => (/* binding */ MulticallStateType),
/* harmony export */   "_Y": () => (/* binding */ useMultipleContractSingleData),
/* harmony export */   "es": () => (/* binding */ useSingleContractMultipleData)
/* harmony export */ });
/* unused harmony exports useMulticallCallback, useMulticallStateDecoded, useMultipleContractMultipleData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61114);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33690);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46140);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93328);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31174);






// conservative, hard-coded estimate of the current block gas limit
const CONSERVATIVE_BLOCK_GAS_LIMIT = 10_000_000;
// the default value for calls that don't specify gasRequired
const DEFAULT_GAS_REQUIRED = 200_000;
const DEFAULT_GAS_LIMIT = 1_000_000;
// #endregion
// #region cached results
const cachedResults = {};
function toCallKey(call) {
    return call.join('-');
}
function getCallResult(call, chainId, blockNumber) {
    const cache = cachedResults[chainId];
    const blockNumber_ = cache?.blockNumber ?? 0;
    if (blockNumber_ < blockNumber) return;
    return cache.results[toCallKey(call)];
}
function setCallResult(call, result, chainId, blockNumber) {
    const cache = cachedResults[chainId] ?? {
        results: [],
        blockNumber: 0
    };
    const blockNumber_ = cache.blockNumber;
    if (blockNumber_ > blockNumber) return;
    if (blockNumber_ < blockNumber) cache.blockNumber = blockNumber;
    cache.results[toCallKey(call)] = result;
    cachedResults[chainId] = cache;
}
// evenly distributes items among the chunks
function chunkArray(items, gasLimit = CONSERVATIVE_BLOCK_GAS_LIMIT * 10) {
    const chunks = [];
    let currentChunk = [];
    let currentChunkCumulativeGas = 0;
    for (const item of items){
        // calculate the gas required by the current item
        const gasRequired = item[1] ?? DEFAULT_GAS_REQUIRED;
        // if the current chunk is empty, or the current item wouldn't push it over the gas limit,
        // append the current item and increment the cumulative gas
        if (currentChunk.length === 0 || currentChunkCumulativeGas + gasRequired < gasLimit) {
            currentChunk.push(item);
            currentChunkCumulativeGas += gasRequired;
        } else {
            // otherwise, push the current chunk and create a new chunk
            chunks.push(currentChunk);
            currentChunk = [
                item
            ];
            currentChunkCumulativeGas = gasRequired;
        }
    }
    if (currentChunk.length > 0) chunks.push(currentChunk);
    return chunks;
}
var MulticallStateType;
(function(MulticallStateType) {
    MulticallStateType[MulticallStateType["UNKNOWN"] = 0] = "UNKNOWN";
    MulticallStateType[MulticallStateType[/** Wait for tx call */ "PENDING"] = 1] = "PENDING";
    MulticallStateType[MulticallStateType[/** Tx call resolved */ "SUCCEED"] = 2] = "SUCCEED";
    MulticallStateType[MulticallStateType[/** Tx call rejected */ "FAILED"] = 3] = "FAILED";
})(MulticallStateType || (MulticallStateType = {}));
/**
 * The basic hook for fetching data from the Multicall contract
 * @param calls
 */ function useMulticallCallback(targetChainId, targetBlockNumber) {
    const currentChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const chainId = targetChainId ?? currentChainId;
    const { value: defaultBlockNumber = 0  } = (0,_useBlockNumber__WEBPACK_IMPORTED_MODULE_2__/* .useBlockNumber */ .O)();
    const blockNumber = targetBlockNumber ?? defaultBlockNumber;
    const multicallContract = (0,_contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_3__/* .useMulticallContract */ .g)(chainId);
    const [multicallState, setMulticallState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        type: MulticallStateType.UNKNOWN
    });
    const multicallCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (calls, overrides)=>{
        if (calls.length === 0 || !multicallContract) {
            setMulticallState({
                type: MulticallStateType.UNKNOWN
            });
            return;
        }
        try {
            setMulticallState({
                type: MulticallStateType.PENDING
            });
            // filter out cached calls
            const unresolvedCalls = calls.filter((call_)=>!getCallResult(call_, chainId, blockNumber)
            );
            // resolve the calls by chunks
            if (unresolvedCalls.length) {
                await Promise.all(chunkArray(unresolvedCalls).map(async (chunk)=>{
                    // we don't mind the actual block number of the current call
                    const { returnData  } = await multicallContract.methods.multicall(chunk).call(overrides);
                    returnData.forEach((result, index)=>setCallResult(chunk[index], result, chainId, blockNumber)
                    );
                }));
            }
            setMulticallState({
                type: MulticallStateType.SUCCEED,
                results: calls.map((call)=>getCallResult(call, chainId, blockNumber) ?? [
                        false,
                        '0x0',
                        '0x0'
                    ]
                )
            });
        } catch (error) {
            if (error instanceof Error) {
                setMulticallState({
                    type: MulticallStateType.FAILED,
                    error
                });
            }
            throw error;
        }
    }, [
        chainId,
        blockNumber,
        multicallContract
    ]);
    return [
        multicallState,
        multicallCallback
    ];
}
// #endregion
// #region useMulticallStateDecoded
function useMulticallStateDecoded(contracts, names, state, chainId) {
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3 */ .$)({
        chainId
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (state.type !== MulticallStateType.SUCCEED) return [];
        if (contracts.length !== state.results.length) return [];
        return state.results.map(([succeed, gasUsed, result], index)=>{
            // the ignore formatter for better reading
            // prettier-ignore
            const outputs = contracts[index].options.jsonInterface.find(({ type , name  })=>type === 'function' && name === names[index]
            )?.outputs ?? [];
            try {
                const value = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .decodeOutputString */ .mO)(web3, outputs, result);
                return {
                    succeed,
                    gasUsed,
                    value,
                    error: null
                };
            } catch (error) {
                return {
                    succeed: false,
                    gasUsed,
                    value: null,
                    error
                };
            }
        });
    }, [
        web3,
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        state
    ]);
}
// #endregion
function useSingleContractMultipleData(contract, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT, chainId, blockNumber) {
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!contract) return [];
        return callDatas.map((data, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...data).encodeABI(), 
            ]
        );
    }, [
        contract?.options.address,
        names.join(),
        callDatas.flatMap((x)=>x
        ).join()
    ]);
    const [state, callback] = useMulticallCallback(chainId, blockNumber);
    const results = useMulticallStateDecoded(Array.from({
        length: calls.length
    }).fill(contract), names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMultipleContractSingleData(contracts, names, callData, chainId, blockNumber, gasLimit = DEFAULT_GAS_LIMIT) {
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...callData).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callData.join()
    ]);
    const [state, callback] = useMulticallCallback(chainId, blockNumber);
    const results = useMulticallStateDecoded(contracts, names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMultipleContractMultipleData(contracts, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT, chainId) {
    const calls = useMemo(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](callDatas[i]).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callDatas.flatMap((x)=>x
        ).join(),
        gasLimit
    ]);
    const [state, callback] = useMulticallCallback(chainId);
    const results = useMulticallStateDecoded(contracts, names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}


/***/ }),

/***/ 33703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NU": () => (/* binding */ isNextStateAvailable),
/* harmony export */   "ir": () => (/* binding */ isFinalState)
/* harmony export */ });
/* unused harmony export isEIP1559Transaction */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);


function isEIP1559Transaction(receipt) {
    return typeof receipt.maxFeePerGas !== 'undefined' && typeof receipt.maxPriorityFeePerGas !== 'undefined';
}
function isFinalState(type) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED
    ].includes(type);
}
/**
 * UNKNOWN -> WAIT_FOR_CONFIRMING
 * UNKNOWN, WAIT_FOR_CONFIRMING -> HASH
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH -> RECEIPT
 * WAIT_FOR_CONFIRMING, HASH, RECEIPT -> CONFIRMED
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH, RECEIPT -> FAILED
 */ function isNextStateAvailable(type, nextType) {
    switch(nextType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN:
            return false;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(nextType);
    }
}


/***/ })

}]);