"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7116],{

/***/ 62758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(81987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(88448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/styles/useThemeProps.js
var useThemeProps = __webpack_require__(43285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_873b6ee332b32a0534335ea366866a4e/node_modules/@material-ui/unstyled/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(59891);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_873b6ee332b32a0534335ea366866a4e/node_modules/@material-ui/unstyled/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(26110);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_873b6ee332b32a0534335ea366866a4e/node_modules/@material-ui/unstyled/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(98224);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(72717);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = styleProps => {
  const {
    classes
  } = styleProps;
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

  const styleProps = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(styleProps);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    styleProps: styleProps
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ }),

/***/ 69502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oQ": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.oQ),
/* harmony export */   "eT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.eT),
/* harmony export */   "H9": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.H9),
/* harmony export */   "FT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.FT),
/* harmony export */   "Vc": () => (/* binding */ usePostLink),
/* harmony export */   "NH": () => (/* binding */ usePostClaimedAuthor)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43670);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47713);



function usePostLink() {
    var _utils, ref;
    const postID = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.postID */ .H9.postID();
    const postIdentifier = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.postIdentifier */ .H9.postIdentifier();
    if (!postID || !postIdentifier) return '';
    var ref1;
    return (ref1 = (ref = (_utils = _social_network__WEBPACK_IMPORTED_MODULE_0__.activatedSocialNetworkUI.utils).getPostURL) === null || ref === void 0 ? void 0 : ref.call(_utils, postIdentifier)) !== null && ref1 !== void 0 ? ref1 : '';
}
function usePostClaimedAuthor() {
    const info = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.postPayload */ .H9.postPayload();
    if (info.err) return undefined;
    const payload = info.val;
    if (payload.version !== -38) return undefined;
    return payload.authorUserID;
}


/***/ }),

/***/ 7116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/SnackbarContent/SnackbarContent.js + 1 modules
var SnackbarContent = __webpack_require__(8580);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(98621);
// EXTERNAL MODULE: ./src/plugins/MaskbookPluginWrapper.tsx
var MaskbookPluginWrapper = __webpack_require__(18156);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(57411);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(69502);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(27768);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(36487);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(72052);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(41362);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(72717);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(62758);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(185);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(5075);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/isBefore/index.js
var isBefore = __webpack_require__(45358);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(22209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(17952);
;// CONCATENATED MODULE: ../web3-contracts/abis/GoodGhostingPolygon.json
const GoodGhostingPolygon_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract IERC20","name":"_inboundCurrency","type":"address"},{"internalType":"contract ILendingPoolAddressesProvider","name":"_lendingPoolAddressProvider","type":"address"},{"internalType":"uint256","name":"_segmentCount","type":"uint256"},{"internalType":"uint256","name":"_segmentLength","type":"uint256"},{"internalType":"uint256","name":"_segmentPayment","type":"uint256"},{"internalType":"uint256","name":"_earlyWithdrawalFee","type":"uint256"},{"internalType":"uint256","name":"_customFee","type":"uint256"},{"internalType":"address","name":"_dataProvider","type":"address"},{"internalType":"uint256","name":"_maxPlayersCount","type":"uint256"},{"internalType":"address","name":"_incentiveController","type":"address"},{"internalType":"contract IERC20","name":"_matic","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalGameInterest","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"adminFeeAmount","type":"uint256"}],"name":"AdminWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":true,"internalType":"uint256","name":"segment","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalGamePrincipal","type":"uint256"}],"name":"EarlyWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalGamePrincipal","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalGameInterest","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewards","type":"uint256"}],"name":"FundsRedeemedFromExternalPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"JoinedGame","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"winners","type":"address[]"}],"name":"WinnersAnnouncement","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"playerReward","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"adaiToken","outputs":[{"internalType":"contract AToken","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"adminFeeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"adminWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"customFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"daiToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"earlyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earlyWithdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"firstSegmentStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getCurrentSegment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getNumberOfPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"incentiveController","outputs":[{"internalType":"contract IncentiveController","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"isGameCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"iterablePlayers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"joinGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastSegment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lendingPool","outputs":[{"internalType":"contract ILendingPool","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lendingPoolAddressProvider","outputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"makeDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"matic","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxPlayersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"players","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"withdrawn","type":"bool"},{"internalType":"bool","name":"canRejoin","type":"bool"},{"internalType":"uint256","name":"mostRecentSegmentPaid","type":"uint256"},{"internalType":"uint256","name":"amountPaid","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"redeemed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsPerPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"segmentLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"segmentPayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalGameInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalGamePrincipal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"adminFeeWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redeemFromExternalPool","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/contracts/useGoodGhostingContract.ts


function useGoodGhostingContract(address) {
    return (0,web3_shared_src/* useContract */.cqn)(address, GoodGhostingPolygon_namespaceObject.Mt);
}

// EXTERNAL MODULE: ./src/plugins/GoodGhosting/constants.ts
var constants = __webpack_require__(68457);
// EXTERNAL MODULE: ./src/utils/index.ts
var src_utils = __webpack_require__(77287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/addSeconds/index.js
var addSeconds = __webpack_require__(30249);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/hooks/useGameInfo.ts







function useGameContractAddress(id) {
    const { GOOD_GHOSTING_CONTRACT_ADDRESS_FILE  } = (0,web3_shared_src/* useGoodGhostingConstants */.JHm)();
    const asyncResult = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!GOOD_GHOSTING_CONTRACT_ADDRESS_FILE) return {
            contractAddress: ''
        };
        const response = await fetch(GOOD_GHOSTING_CONTRACT_ADDRESS_FILE);
        const data = await response.text();
        const gameData = data ? JSON.parse(data) : {
        };
        return gameData[id] || gameData.default || {
        };
    }, [
        id,
        GOOD_GHOSTING_CONTRACT_ADDRESS_FILE
    ]);
    return asyncResult;
}
function useGameInfo(gameData) {
    const contract = useGoodGhostingContract(gameData.contractAddress);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { names , callDatas  } = (0,react.useMemo)(()=>{
        const names1 = [
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
                ...names1,
                'players'
            ],
            callDatas: [
                ...Array(names1.length).fill([]),
                [
                    account || constants/* ZERO_ADDRESS */.r_
                ]
            ]
        };
    }, [
        account
    ]);
    const [results, calls, _, callback] = (0,web3_shared_src/* useSingleContractMultipleData */.esU)(contract, names, callDatas);
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
            currentPlayer: player && player.addr !== constants/* ZERO_ADDRESS */.r_ ? player : undefined,
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
    const numberOfRounds = info.lastSegment && info.lastSegment + 1;
    const timeline = (0,react.useMemo)(()=>{
        if (!startTime || !roundDuration || !numberOfRounds) return [];
        const initialDate = new Date(startTime * 1000);
        const rounds = [];
        for(let i = 0; i <= numberOfRounds; i += 1){
            rounds.push({
                date: (0,addSeconds/* default */.Z)(initialDate, roundDuration * i),
                ...getTimelineEvent(i, numberOfRounds)
            });
        }
        return rounds;
    }, [
        startTime,
        roundDuration,
        numberOfRounds
    ]);
    return timeline;
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/TimelineView.tsx







const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
        tallVeritcalLine: {
            height: '120px'
        },
        shortVeritcalLine: {
            height: '50px'
        }
    })
);
function TimelineView(props) {
    const { classes  } = useStyles();
    const timeline = useTimeline(props.info);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
                                        className: classnames_default()(classes.verticalLine, index % 2 === 0 ? classes.tallVeritcalLine : classes.shortVeritcalLine)
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
                    }, `timeline-${timelineEvent.date.toString()}`)
                ),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    className: classes.timelinePadding
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/CircularDataDisplay.tsx



const CircularDataDisplay_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ../web3-contracts/abis/GoodGhostingIncentives.json
const GoodGhostingIncentives_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"rewardToken","type":"address"},{"internalType":"address","name":"emissionManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"emission","type":"uint256"}],"name":"AssetConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"AssetIndexUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"}],"name":"ClaimerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ditributionEnd","type":"uint256"}],"name":"DistributionEndUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"PendingAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsAccrued","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"vault","type":"address"}],"name":"RewardsVaultUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAdming","type":"address"},{"indexed":false,"internalType":"uint256","name":"role","type":"uint256"}],"name":"RoleClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"UserIndexUpdated","type":"event"},{"inputs":[],"name":"DISTRIBUTION_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSION_MANAGER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_TOKEN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"assets","outputs":[{"internalType":"uint128","name":"emissionPerSecond","type":"uint128"},{"internalType":"uint128","name":"lastUpdateTimestamp","type":"uint128"},{"internalType":"uint256","name":"index","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"claimRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"claimRewardsOnBehalf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"}],"name":"claimRoleAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256[]","name":"emissionsPerSecond","type":"uint256[]"}],"name":"configureAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"}],"name":"getAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getClaimer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDistributionEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"}],"name":"getPendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"address","name":"user","type":"address"}],"name":"getRewardsBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardsVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"asset","type":"address"}],"name":"getUserAssetData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserUnclaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"totalSupply","type":"uint256"},{"internalType":"uint256","name":"userBalance","type":"uint256"}],"name":"handleAction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardsVault","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"caller","type":"address"}],"name":"setClaimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"distributionEnd","type":"uint256"}],"name":"setDistributionEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"role","type":"uint256"},{"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"setPendingAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardsVault","type":"address"}],"name":"setRewardsVault","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/contracts/useGoodGhostingIncentivesContract.ts


function useGoodGhostingIncentiveContract() {
    const { GOOD_GHOSTING_INCENTIVES_CONTRACT_ADDRESS  } = (0,web3_shared_src/* useGoodGhostingConstants */.JHm)();
    return (0,web3_shared_src/* useContract */.cqn)(GOOD_GHOSTING_INCENTIVES_CONTRACT_ADDRESS, GoodGhostingIncentives_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/hooks/usePoolData.ts






function usePoolData(info) {
    const rewardToken = useRewardToken();
    const contract = useGoodGhostingContract(info.contractAddress);
    const adaiContract = (0,web3_shared_src/* useERC20TokenContract */.xwH)(info.adaiTokenAddress);
    const rewardTokenContract = (0,web3_shared_src/* useERC20TokenContract */.xwH)(rewardToken.address);
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
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    return constants/* DAI */.h1[chainId];
}
function useRewardToken() {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    return constants/* WETH */.DX[chainId];
}
function usePoolAssets() {
    const gameToken = useGameToken();
    const rewardToken = useRewardToken();
    const { value: gameTokenDetailed , loading: gameTokenLoading , error: gameTokenError , retry: gameTokenRetry ,  } = (0,web3_shared_src/* useERC20TokenDetailed */.kIC)(gameToken.address);
    const { value: rewardTokenDetailed , loading: rewardTokenLoading , error: rewardTokenError , retry: rewardTokenRetry ,  } = (0,web3_shared_src/* useERC20TokenDetailed */.kIC)(rewardToken.address);
    const assets = gameTokenDetailed && rewardTokenDetailed ? [
        gameTokenDetailed,
        rewardTokenDetailed
    ] : [];
    const { value , loading , error , retry  } = (0,web3_shared_src/* useAssets */.LiV)(assets);
    const assetRetry = ()=>{
        if (gameTokenError) gameTokenRetry();
        else if (rewardTokenError) rewardTokenRetry();
        else retry();
    };
    let gameAssets;
    if (value === null || value === void 0 ? void 0 : value.length) {
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/differenceInDays/index.js + 2 modules
var differenceInDays = __webpack_require__(31237);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/formatDuration/index.js
var formatDuration = __webpack_require__(99008);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/utils.ts






var PlayerStatus;
(function(PlayerStatus1) {
    PlayerStatus1["Winning"] = 'winning';
    PlayerStatus1["Waiting"] = 'waiting';
    PlayerStatus1["Ghost"] = 'ghost';
    PlayerStatus1["Dropout"] = 'dropout';
    PlayerStatus1["Unknown"] = 'unknown';
})(PlayerStatus || (PlayerStatus = {
}));
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
    return Object.values(web3_shared_src/* TransactionStateType */.n$V).includes(error.gameActionStatus) && error.transactionHash !== undefined;
}
function getGameFinancialData(info, poolData, playerStandings, assets) {
    const rawPoolInterest = new (bignumber_default())(poolData.totalAdai).isZero() ? new (bignumber_default())(0) : new (bignumber_default())(poolData.totalAdai).minus(info.totalGamePrincipal);
    const gameInterest = new (bignumber_default())(info.gameHasEnded ? info.totalGameInterest : rawPoolInterest).multipliedBy(assets.gameAsset.price ? assets.gameAsset.price[web3_shared_src/* CurrencyType.USD */.V2A.USD] : 1);
    const gameRewards = new (bignumber_default())(poolData.reward).plus(info.gameHasEnded ? new (bignumber_default())(playerStandings.winning).multipliedBy(info.rewardsPerPlayer) : poolData.incentives).multipliedBy(assets.rewardAsset.price ? assets.rewardAsset.price[web3_shared_src/* CurrencyType.USD */.V2A.USD] : 0);
    const totalEarnings = gameInterest.plus(gameRewards);
    const winnerGains = totalEarnings.div(playerStandings.winning || 1);
    const baseDate = new Date(0);
    const dateAfterDuration = (0,addSeconds/* default */.Z)(baseDate, info.segmentLength * (info.lastSegment + 1));
    const gameDuration = (0,differenceInDays/* default */.Z)(dateAfterDuration, baseDate);
    const expectedPayment = new (bignumber_default())(info.segmentPayment).multipliedBy(info.lastSegment);
    const dividend = winnerGains.multipliedBy(365);
    const divisor = expectedPayment.multipliedBy(gameDuration).multipliedBy(assets.gameAsset.price ? assets.gameAsset.price[web3_shared_src/* CurrencyType.USD */.V2A.USD] : 1);
    const poolAPY = dividend.dividedBy(divisor).multipliedBy(100);
    return {
        poolAPY,
        poolEarnings: info.gameHasEnded ? new (bignumber_default())(info.totalGameInterest) : rawPoolInterest,
        extraRewards: info.gameHasEnded ? new (bignumber_default())(playerStandings.winning).multipliedBy(info.rewardsPerPlayer) : new (bignumber_default())(poolData.reward).plus(poolData.incentives)
    };
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/GameStatsView.tsx









const GameStatsView_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    const { value: otherPlayerData , loading: otherPlayerloading , error: otherPlayerError , retry: otherPlayerRetry ,  } = props.otherPlayerResult;
    const gameToken = useGameToken();
    const rewardToken = useRewardToken();
    const { value: poolAssetsValue , loading: poolAssetsLoading , error: poolAssetsError , retry: poolAssetsRetry ,  } = props.poolAssetsResult;
    const { t  } = (0,src_utils/* useI18N */.M1)();
    if (loading && !financialData || otherPlayerloading || poolAssetsLoading) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "h6",
            color: "textSecondary",
            children: "Loading game stats"
        }));
    } else if (error || !financialData || otherPlayerError || !otherPlayerData || poolAssetsError || !poolAssetsValue) {
        const retryFailed = ()=>{
            if (error || !financialData) retry();
            else if (otherPlayerError || !otherPlayerData) otherPlayerRetry();
            else if (poolAssetsError || !poolAssetsValue) poolAssetsRetry();
        };
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: "Something went wrong."
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    sx: {
                        marginTop: 1
                    },
                    size: "small",
                    onClick: retryFailed,
                    children: "Retry"
                })
            ]
        }));
    }
    const gameLengthFormatted = getReadableInterval(props.info.segmentLength * (props.info.lastSegment + 1));
    const segmentLengthFormatted = getReadableInterval(props.info.segmentLength);
    const playerStandings = getPlayerStandings(otherPlayerData, props.info);
    const { poolAPY , poolEarnings , extraRewards  } = getGameFinancialData(props.info, financialData, playerStandings, poolAssetsValue);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                                        (0,web3_shared_src/* formatBalance */.azF)(props.info.segmentPayment, gameToken.decimals),
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
                                        title: new (bignumber_default())((0,web3_shared_src/* formatBalance */.azF)(poolEarnings, gameToken.decimals)).toFixed(2),
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
                                        title: new (bignumber_default())((0,web3_shared_src/* formatBalance */.azF)(extraRewards, rewardToken.decimals)).toFixed(2),
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
                                        title: (0,web3_shared_src/* formatBalance */.azF)(props.info.totalGamePrincipal, gameToken.decimals),
                                        subtitle: gameToken.symbol
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/OtherPlayersView.tsx






const OtherPlayersView_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "h6",
            color: "textSecondary",
            children: "Loading other players' stats"
        }));
    } else if (error || !players) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: "Something went wrong."
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    sx: {
                        marginTop: 1
                    },
                    size: "small",
                    onClick: retry,
                    children: "Retry"
                })
            ]
        }));
    }
    const playerStandings = getPlayerStandings(players, props.info);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(46440);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/hooks/useGameActions.ts



function useJoinGame(info) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const contract = useGoodGhostingContract(info.contractAddress);
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const canJoinGame = (!info.currentPlayer || info.currentPlayer.canRejoin) && info.currentSegment === 0 && info.numberOfPlayers <= info.maxPlayersCount;
    return {
        canJoinGame,
        joinGame: async ()=>{
            if (contract) {
                const gasEstimate = await contract.methods.joinGame().estimateGas({
                    from: account
                }).catch(()=>gasPrice
                );
                let txHash = '';
                return new Promise(async (resolve, reject)=>{
                    contract.methods.joinGame().send({
                        from: account,
                        gas: gasEstimate,
                        gasPrice
                    }).on(web3_shared_src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, (hash)=>txHash = hash
                    ).on(web3_shared_src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, (_no, receipt)=>{
                        if (receipt.status) {
                            resolve();
                        } else {
                            reject({
                                gameActionStatus: web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                                ...receipt
                            });
                        }
                    }).on(web3_shared_src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                        reject({
                            gameActionStatus: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                            transactionHash: txHash
                        });
                    });
                });
            }
        }
    };
}
function useMakeDeposit(info) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const contract = useGoodGhostingContract(info.contractAddress);
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const status = getPlayerStatus(info, info.currentPlayer);
    const canMakeDeposit = info.currentPlayer && info.currentSegment > 0 && info.currentSegment < info.lastSegment && status === PlayerStatus.Waiting;
    return {
        canMakeDeposit,
        makeDeposit: async ()=>{
            if (contract) {
                const gasEstimate = await contract.methods.makeDeposit().estimateGas({
                    from: account
                });
                let txHash = '';
                return new Promise(async (resolve, reject)=>{
                    contract.methods.makeDeposit().send({
                        from: account,
                        gas: gasEstimate,
                        gasPrice
                    }).on(web3_shared_src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, (hash)=>txHash = hash
                    ).on(web3_shared_src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, (_no, receipt)=>{
                        if (receipt.status) {
                            resolve();
                        } else {
                            reject({
                                gameActionStatus: web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                                ...receipt
                            });
                        }
                    }).on(web3_shared_src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                        reject({
                            gameActionStatus: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                            transactionHash: txHash
                        });
                    });
                });
            }
        }
    };
}
function useWithdraw(info) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const contract = useGoodGhostingContract(info.contractAddress);
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const canWithdraw = info.currentPlayer && !info.currentPlayer.withdrawn && info.gameHasEnded;
    return {
        canWithdraw,
        withdraw: async ()=>{
            if (contract) {
                const gasEstimate = await contract.methods.withdraw().estimateGas({
                    from: account
                });
                let txHash = '';
                return new Promise(async (resolve, reject)=>{
                    contract.methods.withdraw().send({
                        from: account,
                        gas: gasEstimate,
                        gasPrice
                    }).on(web3_shared_src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, (hash)=>txHash = hash
                    ).on(web3_shared_src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, (_no, receipt)=>{
                        if (receipt.status) {
                            resolve();
                        } else {
                            reject({
                                gameActionStatus: web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                                ...receipt
                            });
                        }
                    }).on(web3_shared_src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                        reject({
                            gameActionStatus: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                            transactionHash: txHash
                        });
                    });
                });
            }
        }
    };
}
function useEarlyWithdraw(info) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const contract = useGoodGhostingContract(info.contractAddress);
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const canEarlyWithdraw = info.currentPlayer && !info.currentPlayer.withdrawn && info.currentSegment < info.lastSegment;
    return {
        canEarlyWithdraw,
        earlyWithdraw: async ()=>{
            if (contract) {
                const gasEstimate = await contract.methods.earlyWithdraw().estimateGas({
                    from: account
                });
                let txHash = '';
                return new Promise(async (resolve, reject)=>{
                    contract.methods.earlyWithdraw().send({
                        from: account,
                        gas: gasEstimate,
                        gasPrice
                    }).on(web3_shared_src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, (hash)=>txHash = hash
                    ).on(web3_shared_src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, (_no, receipt)=>{
                        if (receipt.status) {
                            resolve();
                        } else {
                            reject({
                                gameActionStatus: web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                                ...receipt
                            });
                        }
                    }).on(web3_shared_src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                        reject({
                            gameActionStatus: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                            transactionHash: txHash
                        });
                    });
                });
            }
        }
    };
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/PersonalView.tsx











const PersonalView_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { classes  } = PersonalView_useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const gameToken = useGameToken();
    const { canEarlyWithdraw , earlyWithdraw  } = useEarlyWithdraw(props.info);
    const [buttonEnabled, setButtonEnabled] = (0,react.useState)(true);
    const [errorState, setErrorState] = (0,react.useState)({
    });
    const status = usePlayerStatusMessage(props.info, props.info.currentPlayer);
    if (!props.info.currentPlayer) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "h6",
            color: "textSecondary",
            children: t('plugin_good_ghosting_not_a_participant')
        }));
    }
    const withdraw = async ()=>{
        setButtonEnabled(false);
        setErrorState({
        });
        try {
            await earlyWithdraw();
        } catch (error) {
            if (isGameActionError(error) && error.transactionHash) {
                const link = (0,web3_shared_src/* resolveTransactionLinkOnExplorer */.z4)(chainId, error.transactionHash);
                if (error.gameActionStatus === web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED) {
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                                    children: (0,web3_shared_src/* formatEthereumAddress */.j8w)(props.info.currentPlayer.addr, 4)
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
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                        value: props.info.currentPlayer.amountPaid,
                                        decimals: gameToken.decimals,
                                        symbol: gameToken.symbol
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
                            amount: (0,web3_shared_src/* formatBalance */.azF)(earlyWithdrawalFee, gameToken.decimals),
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
    }));
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
    const [addressResults, addressCalls, _, addressCallback] = (0,web3_shared_src/* useSingleContractMultipleData */.esU)(contract, addressNames, addressCallDatas);
    const { loading: addressLoading , error: addressError , retry: addressRetry ,  } = (0,useAsyncRetry/* default */.Z)(()=>addressCallback(addressCalls)
    , [
        addressCalls
    ]);
    const { playerNames , playerCallDatas  } = (0,react.useMemo)(()=>({
            playerNames: Array(addressResults.length).fill('players'),
            playerCallDatas: Array(addressResults.length).fill('').map((_1, i)=>[
                    addressResults[i].value
                ]
            )
        })
    , [
        addressResults
    ]);
    const [playerResults, playerCalls, __, playerCallback] = (0,web3_shared_src/* useSingleContractMultipleData */.esU)(contract, playerNames, playerCallDatas);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/intervalToDuration/index.js + 7 modules
var intervalToDuration = __webpack_require__(23822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69739);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(62623);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(77603);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(76589);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(33326);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/GameActionDialog.tsx










const GameActionDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    const { value: tokenBalance = '0' , loading: loadingTokenBalance , error: errorTokenBalance , retry: retryLoadTokenBalance ,  } = (0,web3_shared_src/* useERC20TokenBalance */.yps)(gameToken.address);
    const hasSufficientBalance = !loadingTokenBalance && !errorTokenBalance && new (bignumber_default())(tokenBalance).isGreaterThanOrEqualTo(info.segmentPayment);
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
                    amount: (0,web3_shared_src/* formatBalance */.azF)(info.segmentPayment, gameToken.decimals),
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
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
                                amount: (0,web3_shared_src/* formatBalance */.azF)(info.segmentPayment, gameToken.decimals),
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
    }));
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/GameAction.tsx











const GameAction_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1)
        }
    })
);
function GameAction(props) {
    var ref;
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const gameToken = useGameToken();
    const { classes  } = GameAction_useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { canJoinGame , joinGame  } = useJoinGame(props.info);
    const { canMakeDeposit , makeDeposit  } = useMakeDeposit(props.info);
    const { canWithdraw , withdraw  } = useWithdraw(props.info);
    const [openDialog, setOpenDialog] = (0,react.useState)(false);
    const [buttonEnabled, setButtonEnabled] = (0,react.useState)(true);
    const [errorState, setErrorState] = (0,react.useState)({
    });
    const { value: tokenDetailed , loading: loadingToken , error: errorToken ,  } = (0,web3_shared_src/* useERC20TokenDetailed */.kIC)((ref = constants/* DAI */.h1[chainId]) === null || ref === void 0 ? void 0 : ref.address);
    if (loadingToken || errorToken) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    }));
    const buttonAction = async (action)=>{
        setButtonEnabled(false);
        setOpenDialog(false);
        setErrorState({
        });
        try {
            await action();
            props.info.refresh();
        } catch (error) {
            if (isGameActionError(error) && error.transactionHash) {
                const link = (0,web3_shared_src/* resolveTransactionLinkOnExplorer */.z4)(chainId, error.transactionHash);
                if (error.gameActionStatus === web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED) {
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
                    amount: (0,web3_shared_src/* formatBalance */.azF)(props.info.segmentPayment, gameToken.decimals),
                    token: gameToken.symbol
                })
            };
        } else if (canMakeDeposit) {
            return {
                needsApprove: true,
                action: makeDeposit,
                text: t('plugin_good_ghosting_make_deposit'),
                helpText: t('plugin_good_ghosting_deposit_help_text', {
                    segmentPayment: (0,web3_shared_src/* formatBalance */.azF)(props.info.segmentPayment, gameToken.decimals),
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
        } else return {
        };
    };
    const buttonMethod = getButton();
    if (buttonMethod.action) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
        }));
    } else return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    }));
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/TimelineTimer.tsx











const TimelineTimer_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    const [isLastEvent, setIsLastEvent] = (0,react.useState)(isEndOfTimeline(timelineIndex, timeline));
    const nextTimelineEvent = timeline[timelineIndex];
    const onUpdateTargetDate = ()=>{
        const index = getNextTimelineIndex(timeline);
        setTimelineIndex(index);
        setIsLastEvent(isEndOfTimeline(timelineIndex, timeline));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
    }));
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        variant: "body1",
        color: "textSecondary",
        children: dateDisplay
    }));
}

;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/UI/PreviewCard.tsx













const PreviewCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
(function(GoodGhostingTab1) {
    GoodGhostingTab1["Game"] = "Game";
    GoodGhostingTab1["Timeline"] = "Timeline";
    GoodGhostingTab1["Personal"] = "Personal";
    GoodGhostingTab1["Everyone"] = "Everyone";
})(GoodGhostingTab || (GoodGhostingTab = {
}));
function PreviewCard(props) {
    const { value: addressInfo , error , loading , retry  } = useGameContractAddress(props.id);
    if (loading) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            color: "textPrimary",
            children: "Loading..."
        }));
    }
    if (error || !(addressInfo === null || addressInfo === void 0 ? void 0 : addressInfo.contractAddress)) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: "Something went wrong."
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    sx: {
                        marginTop: 1
                    },
                    size: "small",
                    onClick: retry,
                    children: "Retry"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCardWithGameAddress, {
        gameData: addressInfo
    }));
}
function PreviewCardWithGameAddress(props) {
    const { value: info , error , loading , retry  } = useGameInfo(props.gameData);
    if (loading) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            color: "textPrimary",
            children: "Loading..."
        }));
    }
    if (error || !info) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: "Something went wrong."
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    sx: {
                        marginTop: 1
                    },
                    size: "small",
                    onClick: retry,
                    children: "Retry"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCardWithGameInfo, {
        info: info
    }));
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
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
    }));
}

// EXTERNAL MODULE: ./src/plugins/GoodGhosting/base.ts
var base = __webpack_require__(68413);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx
var EthereumChainBoundary = __webpack_require__(99902);
;// CONCATENATED MODULE: ./src/plugins/GoodGhosting/SNSAdaptor/index.tsx











const isGoodGhosting = (x)=>/^https:\/\/goodghosting.com/.test(x)
;
const sns = {
    ...base/* base */.u,
    init (signal) {
    },
    DecryptedInspector: function Component(props) {
        const text = (0,react.useMemo)(()=>(0,typed_message/* extractTextFromTypedMessage */.Vc)(props.message)
        , [
            props.message
        ]);
        const link = (0,react.useMemo)(()=>(0,utils/* parseURL */.Lk)(text.val || '')
        , [
            text.val
        ]).find(isGoodGhosting);
        if (!text.ok) return null;
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    PostInspector: function Component1() {
        const link = usePostInfo/* usePostInfoDetails.postMetadataMentionedLinks */.H9.postMetadataMentionedLinks().concat(usePostInfo/* usePostInfoDetails.postMentionedLinks */.H9.postMentionedLinks()).find(isGoodGhosting);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    }
};
function Renderer(props) {
    var ref;
    let [id = ''] = (ref = props.url.match(/pools\/([\w ]+)/)) !== null && ref !== void 0 ? ref : [];
    if (id) {
        id = id.replace('pools/', '');
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookPluginWrapper/* default */.Z, {
        pluginName: "GoodGhosting",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
                message: "Mask is loading this plugin..."
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                chainId: web3_shared_src/* ChainId.Matic */.a_e.Matic,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {
                    id: id
                })
            })
        })
    }));
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 18156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskbookPluginWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76814);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8580);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99195);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5726);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43670);
/* harmony import */ var _resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98556);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34539);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83826);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        card: {
            margin: theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            border: `1px solid ${theme.palette.divider}`,
            cursor: 'default',
            ...(0,_social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__/* .isTwitter */ .L3)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI) ? {
                borderRadius: 15,
                overflow: 'hidden'
            } : null
        },
        header: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.spacing(1)
        },
        icon: {
            width: '3em',
            height: '3em'
        },
        body: {
            margin: theme.spacing(2)
        }
    };
});
function MaskbookPluginWrapper(props) {
    const { classes  } = useStyles();
    const { pluginName , children  } = props;
    const useStableTheme = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI.customization.useTheme).current;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useStableTheme === null || useStableTheme === void 0 ? void 0 : useStableTheme();
    const inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.card,
        onClick: (ev)=>ev.stopPropagation()
        ,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_3__/* .MaskbookIcon */ .LX, {
                        className: classes.icon
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                                variant: "overline",
                                children: "Mask Plugin"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                                variant: "h6",
                                children: pluginName
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.body,
                children: children
            })
        ]
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            message: "Mask is loading this plugin..."
        }),
        children: theme ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
            theme: theme,
            children: inner
        }) : inner
    }));
};


/***/ }),

/***/ 57411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mC": () => (/* reexport */ metadata/* createRenderWithMetadata */.mC),
  "Bi": () => (/* reexport */ metadata/* createTypedMessageMetadataReader */.Bi),
  "r1": () => (/* reexport */ metadata/* editTypedMessageMeta */.r1),
  "Vc": () => (/* reexport */ src.extractTextFromTypedMessage),
  "vi": () => (/* reexport */ getRendererOfTypedMessage),
  "MH": () => (/* reexport */ getTypedMessageContent),
  "Jp": () => (/* reexport */ metadata/* isDataMatchJSONSchema */.Jp),
  "bj": () => (/* reexport */ src.isTypedMessageAnchor),
  "YN": () => (/* reexport */ src.isTypedMessageEmpty),
  "Rz": () => (/* reexport */ src.isTypedMessageText),
  "Jv": () => (/* reexport */ src.makeTypedMessageAnchor),
  "WM": () => (/* reexport */ src.makeTypedMessageEmpty),
  "as": () => (/* reexport */ src.makeTypedMessageImage),
  "Ng": () => (/* reexport */ src.makeTypedMessagePromise),
  "P": () => (/* reexport */ src.makeTypedMessageText),
  "Zw": () => (/* reexport */ src.makeTypedMessageTuple),
  "n_": () => (/* reexport */ src.makeTypedMessageTupleFromList),
  "fG": () => (/* reexport */ metadata/* metadataSchemaStoreReadonly */.fG),
  "vq": () => (/* reexport */ registerTypedMessageRenderer)
});

// UNUSED EXPORTS: editMetadata, isSerializableTypedMessage, isTypedMessageEqual, isTypedMessageImage, isTypedMessageImageV1, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownCoreTypedMessages, isWellKnownTypedMessages, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped

// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(63371);
;// CONCATENATED MODULE: ./src/protocols/typed-message/helpers.ts


// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(63332);
;// CONCATENATED MODULE: ./src/protocols/typed-message/types.ts


function getTypedMessageContent(message) {
    if ((0,src.isTypedMessageText)(message)) return message.content;
    if ((0,src.isTypedMessageAnchor)(message)) return message.href;
    return '';
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/render-registry.tsx
const registry = new Map();
// TODO: before metadata, after metadata, ...
function registerTypedMessageRenderer(matching, config) {
    const set = registry.get(matching) || new Set();
    // No overwrite in production
    if (false) {}
    set.add(config);
    registry.set(matching, set);
}
// TODO: add settings for "selected" renderer
function getRendererOfTypedMessage(message) {
    const list = [
        ...registry.get(message.type) || [],
        ...registry.get('*') || []
    ].sort((x, y)=>x.priority - y.priority
    );
    return list;
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/index.ts






/***/ }),

/***/ 63332:
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53408);



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

/***/ 33326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ EthereumERC20TokenApprovedBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(185);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22209);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24982);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77287);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26940);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            flexDirection: 'column',
            position: 'relative',
            marginTop: theme.spacing(1.5)
        },
        buttonLabel: {
            display: 'block',
            fontWeight: 'inherit',
            marginTop: theme.spacing(-0.5),
            marginBottom: theme.spacing(1)
        },
        buttonAmount: {
            fontSize: 10,
            fontWeight: 300,
            bottom: theme.spacing(1),
            position: 'absolute'
        }
    })
);
function EthereumERC20TokenApprovedBoundary(props) {
    const { amount , spender , token , children =null , fallback  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const { enqueueSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useSnackbar */ .Ds)();
    var ref;
    const [{ type: approveStateType , allowance  }, transactionState, approveCallback, resetApproveCallback] = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useERC20TokenApproveCallback */ .Sj0)((ref = token === null || token === void 0 ? void 0 : token.address) !== null && ref !== void 0 ? ref : '', amount, spender);
    const onApprove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (useExact = false)=>{
        if (approveStateType !== _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.NOT_APPROVED */ .iWP.NOT_APPROVED) return;
        await approveCallback(useExact);
    }, [
        approveStateType,
        transactionState,
        approveCallback
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (transactionState.type === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .TransactionStateType.FAILED */ .n$V.FAILED) enqueueSnackbar(transactionState.error.message, {
            variant: 'error'
        });
    }, [
        transactionState.type,
        enqueueSnackbar
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        children: children
    }));
    if (approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.UNKNOWN */ .iWP.UNKNOWN) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
            className: classes.button,
            fullWidth: true,
            variant: "contained",
            size: "large",
            disabled: true,
            children: fallback !== null && fallback !== void 0 ? fallback : 'Enter an amount'
        })
    }));
    var _symbol, ref1;
    if (approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.FAILED */ .iWP.FAILED) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
            className: classes.button,
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: resetApproveCallback,
            children: [
                "Failed to load ",
                (ref1 = (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : token.name) !== null && ref1 !== void 0 ? ref1 : 'Token',
                ". Click to retry."
            ]
        })
    }));
    var ref2;
    if (approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.NOT_APPROVED */ .iWP.NOT_APPROVED) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
                    className: classes.button,
                    fullWidth: true,
                    variant: "contained",
                    size: "large",
                    onClick: ()=>onApprove(true)
                    ,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: classes.buttonLabel,
                            children: t('plugin_wallet_token_unlock')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: classes.buttonAmount,
                            children: `${(0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .formatBalance */ .azF)(amount, token.decimals, 2)} ${(ref2 = token === null || token === void 0 ? void 0 : token.symbol) !== null && ref2 !== void 0 ? ref2 : 'Token'}`
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
                    className: classes.button,
                    fullWidth: true,
                    variant: "contained",
                    size: "large",
                    onClick: ()=>onApprove(false)
                    ,
                    children: t('plugin_wallet_token_infinite_unlock')
                })
            })
        ]
    }));
    if (approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.PENDING */ .iWP.PENDING || approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.UPDATING */ .iWP.UPDATING) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
            className: classes.button,
            fullWidth: true,
            variant: "contained",
            size: "large",
            disabled: true,
            children: [
                approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.PENDING */ .iWP.PENDING ? t('plugin_ito_unlocking_symbol', {
                    symbol: token.symbol
                }) : `Updating ${token.symbol}`,
                "…"
            ]
        })
    }));
    if (approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.APPROVED */ .iWP.APPROVED) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        children: typeof children === 'function' ? children(allowance) : children
    }));
    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_4__/* .unreachable */ .t1)(approveStateType);
}


/***/ })

}]);