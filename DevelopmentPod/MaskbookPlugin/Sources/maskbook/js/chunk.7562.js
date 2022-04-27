"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7562],{

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

/***/ 29339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const RefreshIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Refresh', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.433 7.174l.975.683a.5.5 0 01-.13.884L5.89 9.858a.5.5 0 01-.657-.461L5.136 5.84a.5.5 0 01.787-.423l.806.564A8 8 0 114 12h2.001a6 6 0 102.433-4.826z",
        fill: "#1C68F3"
    })
}), '0 0 24 24');


/***/ }),

/***/ 92526:
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
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/base.tsx
var PoolTogether_base = __webpack_require__(30689);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/UI/DepositDialog.tsx + 1 modules
var DepositDialog = __webpack_require__(17308);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/constants.ts
var constants = __webpack_require__(29708);
// EXTERNAL MODULE: ../icons/general/Refresh.tsx
var Refresh = __webpack_require__(29339);
// EXTERNAL MODULE: ../theme/src/entry-base.ts
var entry_base = __webpack_require__(81242);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants_constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(27536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(3543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(6823);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(99192);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(46140);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/contracts/usePoolTogetherPool.ts + 1 modules
var usePoolTogetherPool = __webpack_require__(19596);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/messages.ts
var messages = __webpack_require__(65677);
;// CONCATENATED MODULE: ../web3-contracts/abis/PoolTogetherPrizeStrategy.json
const PoolTogetherPrizeStrategy_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract BeforeAwardListenerInterface","name":"beforeAwardListener","type":"address"}],"name":"BeforeAwardListenerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20Upgradeable","name":"externalErc20","type":"address"}],"name":"ExternalErc20AwardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20Upgradeable","name":"externalErc20Award","type":"address"}],"name":"ExternalErc20AwardRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC721Upgradeable","name":"externalErc721","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"ExternalErc721AwardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC721Upgradeable","name":"externalErc721Award","type":"address"}],"name":"ExternalErc721AwardRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"prizePeriodStart","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"prizePeriodSeconds","type":"uint256"},{"indexed":true,"internalType":"contract PrizePool","name":"prizePool","type":"address"},{"indexed":false,"internalType":"contract TicketInterface","name":"ticket","type":"address"},{"indexed":false,"internalType":"contract IERC20Upgradeable","name":"sponsorship","type":"address"},{"indexed":false,"internalType":"contract RNGInterface","name":"rng","type":"address"},{"indexed":false,"internalType":"contract IERC20Upgradeable[]","name":"externalErc20Awards","type":"address[]"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[],"name":"NoWinners","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"numberOfWinners","type":"uint256"}],"name":"NumberOfWinnersSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract PeriodicPrizeStrategyListenerInterface","name":"periodicPrizeStrategyListener","type":"address"}],"name":"PeriodicPrizeStrategyListenerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"prizePeriodSeconds","type":"uint256"}],"name":"PrizePeriodSecondsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"prizePool","type":"address"},{"indexed":true,"internalType":"uint32","name":"rngRequestId","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"rngLockBlock","type":"uint32"}],"name":"PrizePoolAwardCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"prizePool","type":"address"},{"indexed":true,"internalType":"uint32","name":"rngRequestId","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"rngLockBlock","type":"uint32"}],"name":"PrizePoolAwardStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"randomNumber","type":"uint256"}],"name":"PrizePoolAwarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"uint256","name":"prizePeriodStartedAt","type":"uint256"}],"name":"PrizePoolOpened","type":"event"},{"anonymous":false,"inputs":[],"name":"RngRequestFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint32","name":"rngRequestTimeout","type":"uint32"}],"name":"RngRequestTimeoutSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract RNGInterface","name":"rngService","type":"address"}],"name":"RngServiceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"splitExternalErc20Awards","type":"bool"}],"name":"SplitExternalErc20AwardsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract TokenListenerInterface","name":"tokenListener","type":"address"}],"name":"TokenListenerUpdated","type":"event"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"_externalErc20","type":"address"}],"name":"addExternalErc20Award","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable[]","name":"_externalErc20s","type":"address[]"}],"name":"addExternalErc20Awards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721Upgradeable","name":"_externalErc721","type":"address"},{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"addExternalErc721Award","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"beforeAwardListener","outputs":[{"internalType":"contract BeforeAwardListenerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"},{"internalType":"address","name":"referrer","type":"address"}],"name":"beforeTokenMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"}],"name":"beforeTokenTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"currentTime","type":"uint256"}],"name":"calculateNextPrizePeriodStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canCompleteAward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canStartAward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cancelAward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"completeAward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPrize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"secondsPerBlockMantissa","type":"uint256"}],"name":"estimateRemainingBlocksToPrize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getExternalErc20Awards","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721Upgradeable","name":"_externalErc721","type":"address"}],"name":"getExternalErc721AwardTokenIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getExternalErc721Awards","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastRngLockBlock","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastRngRequestId","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_prizePeriodStart","type":"uint256"},{"internalType":"uint256","name":"_prizePeriodSeconds","type":"uint256"},{"internalType":"contract PrizePool","name":"_prizePool","type":"address"},{"internalType":"contract TicketInterface","name":"_ticket","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_sponsorship","type":"address"},{"internalType":"contract RNGInterface","name":"_rng","type":"address"},{"internalType":"contract IERC20Upgradeable[]","name":"externalErc20Awards","type":"address[]"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_prizePeriodStart","type":"uint256"},{"internalType":"uint256","name":"_prizePeriodSeconds","type":"uint256"},{"internalType":"contract PrizePool","name":"_prizePool","type":"address"},{"internalType":"contract TicketInterface","name":"_ticket","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_sponsorship","type":"address"},{"internalType":"contract RNGInterface","name":"_rng","type":"address"},{"internalType":"uint256","name":"_numberOfWinners","type":"uint256"}],"name":"initializeMultipleWinners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPrizePeriodOver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRngCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRngRequested","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRngTimedOut","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfWinners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodicPrizeStrategyListener","outputs":[{"internalType":"contract PeriodicPrizeStrategyListenerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePeriodEndAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePeriodRemainingSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePeriodSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePeriodStartedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePool","outputs":[{"internalType":"contract PrizePool","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"_externalErc20","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_prevExternalErc20","type":"address"}],"name":"removeExternalErc20Award","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721Upgradeable","name":"_externalErc721","type":"address"},{"internalType":"contract IERC721Upgradeable","name":"_prevExternalErc721","type":"address"}],"name":"removeExternalErc721Award","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rng","outputs":[{"internalType":"contract RNGInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rngRequestTimeout","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract BeforeAwardListenerInterface","name":"_beforeAwardListener","type":"address"}],"name":"setBeforeAwardListener","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"setNumberOfWinners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract PeriodicPrizeStrategyListenerInterface","name":"_periodicPrizeStrategyListener","type":"address"}],"name":"setPeriodicPrizeStrategyListener","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_prizePeriodSeconds","type":"uint256"}],"name":"setPrizePeriodSeconds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_rngRequestTimeout","type":"uint32"}],"name":"setRngRequestTimeout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract RNGInterface","name":"rngService","type":"address"}],"name":"setRngService","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_splitExternalErc20Awards","type":"bool"}],"name":"setSplitExternalErc20Awards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract TokenListenerInterface","name":"_tokenListener","type":"address"}],"name":"setTokenListener","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"splitExternalErc20Awards","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sponsorship","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startAward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ticket","outputs":[{"internalType":"contract TicketInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenListener","outputs":[{"internalType":"contract TokenListenerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/hooks/usePools.ts





function usePools() {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(()=>messages/* PluginPooltogetherRPC.fetchPools */.K.fetchPools(chainId)
    , [
        chainId
    ]);
}
function usePool(address, subgraphUrl, isCommunityPool) {
    const poolContract = (0,usePoolTogetherPool/* usePoolTogetherPoolContract */.T)(address);
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !subgraphUrl || !poolContract) return undefined;
        const pool = await messages/* PluginPooltogetherRPC.fetchPool */.K.fetchPool(address, subgraphUrl);
        if (!pool) return;
        const prizeStrategyAddress = await poolContract.methods.prizeStrategy().call();
        const prizeStrategyContract = (0,useContract/* createContract */.OP)(web3, prizeStrategyAddress, PoolTogetherPrizeStrategy_namespaceObject);
        pool.prize.prizePeriodEndAt = await prizeStrategyContract.methods.prizePeriodEndAt().call();
        const awardBalance = await poolContract.methods.awardBalance().call();
        pool.prize.amount = (0,formatter/* formatBalance */.az)(awardBalance, Number.parseInt(pool.tokens.underlyingToken.decimals, 10));
        pool.isCommunityPool = isCommunityPool;
        return pool;
    }, [
        address,
        subgraphUrl,
        isCommunityPool
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useMulticall.ts
var useMulticall = __webpack_require__(89650);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(35827);
;// CONCATENATED MODULE: ../web3-contracts/abis/PoolTogetherTicket.json
const PoolTogetherTicket_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"chanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controller","outputs":[{"internalType":"contract TokenControllerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"controllerBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"controllerBurnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"controllerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"randomNumber","type":"uint256"}],"name":"draw","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"contract TokenControllerInterface","name":"_controller","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/contracts/usePoolTogetherTicket.ts


function usePoolTogetherTicketContracts(addresses) {
    return (0,useContract/* useContracts */.GP)(addresses, PoolTogetherTicket_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/hooks/useAccountBalances.ts




/**
 * A callback for getting account balances of ticket pools
 * @param pools
 */ function useAccountBalance(pools) {
    const account = (0,useAccount/* useAccount */.m)();
    const ticketContracts = usePoolTogetherTicketContracts(pools.map((pool)=>pool.tokens.ticket.address
    )).filter(Boolean);
    const [results, calls, _, callback] = (0,useMulticall/* useMultipleContractSingleData */._Y)(ticketContracts, Array.from({
        length: ticketContracts.length
    }).fill('balanceOf'), [
        account || primitives/* ZERO_ADDRESS */.r
    ]);
    const asyncResults = (0,useAsyncRetry/* default */.Z)(()=>callback(calls)
    , [
        calls
    ]);
    const values = (0,react.useMemo)(()=>{
        return results.length !== 0 ? pools.map((pool, i)=>({
                pool: pool,
                account: {
                    ticketBalance: results[i].value,
                    userAddress: account
                }
            })
        ) : undefined;
    }, [
        account,
        ticketContracts,
        asyncResults,
        results
    ]);
    return {
        ...asyncResults,
        value: values
    };
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon_SvgIcon = __webpack_require__(73160);
;// CONCATENATED MODULE: ./src/resources/PoolTogetherIcon.tsx


const PoolTogetherIcon = (props)=>/*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        children: /*#__PURE__*/ _jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 131 224",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M65.4128 0.503418C101.497 0.503418 130.749 30.2437 130.749 66.9303V105.126C130.749 141.812 101.497 171.553 65.4128 171.553C59.7447 171.553 54.2453 170.819 49.0013 169.44L49.0019 173.949C49.0019 200.786 27.4996 222.593 0.810361 223.027L0 223.033V76.8943L0.0748859 76.8926L0.0768772 66.9303C0.0768772 30.2437 29.3288 0.503418 65.4128 0.503418ZM65.4128 50.3236C56.3918 50.3236 49.0788 57.7586 49.0788 66.9303V105.126C49.0788 114.297 56.3918 121.732 65.4128 121.732C74.4338 121.732 81.7468 114.297 81.7468 105.126V66.9303C81.7468 57.7586 74.4338 50.3236 65.4128 50.3236Z",
                    fill: "url(#paint0_linear)"
                }),
                /*#__PURE__*/ _jsx("defs", {
                    children: /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint0_linear",
                        x1: "65.3744",
                        y1: "0.503418",
                        x2: "65.3744",
                        y2: "223.033",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#7E46F2"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#46279A"
                            })
                        ]
                    })
                })
            ]
        })
    })
;
const PoolTogetherTrophy = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon_SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 182 230",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    clipPath: "url(#clip0)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M30.3339 15.8871C29.8869 11.7722 32.0591 11.3205 33.2011 11.6089C33.2011 11.6089 52.0917 19.6333 89.8159 20.2918C127.54 20.9503 148.301 11.8902 148.301 11.8902C149.444 11.6073 151.614 12.0697 151.147 16.1823C150.68 20.2948 149.965 32.1772 149.666 37.6043L171.377 37.6573C174.044 37.5686 178.973 39.1043 177.356 45.9565C177.027 47.3505 176.545 49.7352 175.925 52.7968C172.738 68.5477 165.925 102.213 157.771 111.043C152.041 117.885 144.32 121.294 138.317 122.708C133.317 124.194 128.102 123.933 126.299 123.842L126.299 123.842C126.04 123.829 125.852 123.82 125.745 123.82C121.731 129.809 111.472 142.754 102.549 146.617C99.6405 147.667 99.6637 148.724 99.682 149.554C99.6835 149.622 99.685 149.688 99.6848 149.752C100.142 157.467 102.081 174.726 106.176 182.05C106.72 183.143 106.872 183.974 106.977 184.545C107.092 185.168 107.149 185.48 107.596 185.481L113.024 185.494C113.596 185.496 114.967 185.499 115.878 186.644C116.365 187.256 117.22 187.242 118.149 187.227C119.393 187.207 120.773 187.184 121.587 188.658C122.458 190.235 122.277 191.92 122.184 192.789C122.163 192.978 122.147 193.128 122.147 193.23L130.717 193.251C131.765 193.253 133.858 193.773 133.853 195.83L133.811 212.97C133.811 213.282 133.788 213.538 133.77 213.746C133.688 214.684 133.688 214.684 136.093 214.69L143.52 214.708C143.997 214.709 144.948 214.768 144.942 217.282L144.923 224.996C144.922 225.567 144.919 226.71 142.348 226.703L38.104 226.449C35.5329 226.442 35.5357 225.3 35.5371 224.728L35.556 217.015C35.5621 214.501 36.5138 214.446 36.9906 214.447L44.4181 214.466C46.8229 214.472 46.8229 214.472 46.7453 213.534L46.7453 213.534L46.7453 213.533C46.728 213.325 46.7069 213.069 46.7077 212.757L46.7496 195.617C46.7546 193.56 48.8508 193.051 49.8983 193.053L58.4685 193.074C58.4687 192.972 58.4533 192.822 58.4339 192.633C58.3448 191.764 58.1718 190.078 59.051 188.505C59.8722 187.035 61.2513 187.065 62.4955 187.091C63.425 187.111 64.2792 187.129 64.7693 186.519C65.6863 185.379 67.0575 185.382 67.6289 185.383L73.0567 185.397C73.5042 185.398 73.563 185.086 73.6805 184.463C73.7881 183.893 73.9448 183.063 74.4934 181.972C78.6249 174.669 80.6478 157.419 81.1427 149.707C81.1429 149.643 81.1447 149.577 81.1465 149.51L81.1465 149.509C81.1688 148.678 81.1973 147.622 78.2937 146.558C69.3902 142.651 59.1948 129.656 55.21 123.647C55.1031 123.647 54.9161 123.656 54.6595 123.667L54.6581 123.667L54.6554 123.667L54.6552 123.667C52.8517 123.749 47.6361 123.985 42.6432 122.474C36.6475 121.031 28.9427 117.584 23.246 110.714C15.1355 101.844 8.48736 68.1462 5.37695 52.38C4.77236 49.3155 4.30143 46.9284 3.9794 45.5329C2.39638 38.6728 7.33272 37.1613 9.99878 37.263L31.7099 37.3161C31.4375 31.8876 30.7809 20.0019 30.3339 15.8871ZM15.8476 46.8138C12.5076 46.7555 13.3007 50.6603 13.9042 53.6313C13.9825 54.0169 14.0576 54.3867 14.1201 54.7302C14.6639 57.7197 17.1903 70.0411 23.8372 89.8645C30.484 109.688 43.3322 111.131 48.9255 109.374C45.0967 101.096 37.0168 74.5989 35.3888 65.4319C33.7607 56.2649 31.7356 47.0911 29.3524 47.0495L15.8476 46.8138ZM167.242 54.8108C167.897 51.8509 168.758 47.9604 165.418 47.9605L151.911 47.9604C149.528 47.9604 147.343 57.0975 145.555 66.2347C143.767 75.3718 135.226 101.724 131.253 109.934C136.815 111.788 149.686 110.57 156.678 90.8651C163.67 71.1608 166.411 58.8853 167.007 55.9058C167.076 55.5635 167.157 55.1951 167.242 54.8109L167.242 54.8108ZM109.937 85.5318L90.4634 97.7875L71.0746 85.3978L90.4062 113.585L90.4062 113.593L90.4089 113.589L90.4117 113.593L90.4117 113.585L109.937 85.5318ZM90.6544 44.0403L90.6544 44.0221L90.6491 44.0311L90.644 44.0222L90.6439 44.04L70.9767 77.6478L90.4858 89.882L90.4857 89.8887L90.4911 89.8854L90.4962 89.8885L90.4962 89.8822L110.089 77.783L90.6544 44.0403Z",
                            fill: "#FFB636"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M150.342 12.4881C150.294 17.973 123.755 22.1881 91.0653 21.9028C58.3754 21.6176 31.1194 16.9261 31.1673 11.4412C31.2152 5.95629 58.5488 1.75504 91.2387 2.04032C123.929 2.32561 150.39 7.00325 150.342 12.4881Z",
                            fill: "#FFD469"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M133.184 32.0401C136.105 32.0401 136.626 32.0401 141.923 30.1864C141.266 33.7106 137.812 60.4196 136.626 64.6113C133.458 75.8122 129.879 93.1217 125.24 96.4669C124.358 97.1025 120.473 96.4669 119.027 95.5353C117.581 94.6037 122.592 85.0014 128.682 64.6113C132.125 42.6323 131.066 33.0993 133.184 32.0401Z",
                            fill: "#FFCC4E"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                        id: "clip0",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            width: "181.131",
                            height: "229.4",
                            fill: "white"
                        })
                    })
                })
            ]
        })
    })
;

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/hooks/usePoolURL.ts


function usePoolURL(pool) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const chainName = types/* ChainId */.a_[chainId].toLowerCase();
    return pool.isCommunityPool ? new URL(`/pools/${chainName}/${pool.address}`, constants/* COMMUNITY_URL */.xz).toString() : new URL(`/pools/${chainName}/${pool.symbol}`, constants/* APP_URL */.FX).toString();
}
function useManagePoolURL(pool) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const chainName = types/* ChainId */.a_[chainId].toLowerCase();
    return pool.isCommunityPool ? new URL(`/pools/${chainName}/${pool.address}/home`, constants/* COMMUNITY_URL */.xz).toString() : new URL(`/account/pools/${chainName}/${pool.symbol}/manage-tickets`, constants/* APP_URL */.FX).toString();
}

// EXTERNAL MODULE: ./src/plugins/PoolTogether/utils.ts
var PoolTogether_utils = __webpack_require__(87708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useInterval.js
var useInterval = __webpack_require__(81630);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/intervalToDuration/index.js + 7 modules
var intervalToDuration = __webpack_require__(64893);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/CountdownView.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',
            maxWidth: '300px'
        },
        part: {
            alignItems: 'center',
            width: '24%'
        },
        end: {
            textAlign: 'center'
        },
        digit: {
            backgroundColor: '#492e73',
            borderRadius: theme.spacing(0.5),
            color: '#6cf5db',
            width: '50%'
        },
        placeholder: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center'
        },
        label: {
            color: '#a69bbc'
        },
        separator: {
            color: '#6cf5db',
            width: '2%'
        }
    })
);
const CountdownView = (props1)=>{
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props1);
    const { secondsRemaining , msgOnEnd  } = props1;
    const [secs, setSecs] = (0,react.useState)(secondsRemaining);
    (0,useInterval/* default */.Z)(()=>{
        setSecs(secs - 1);
    }, constants/* ONE_SECOND */.WT);
    const { days , hours , minutes , seconds  } = (0,intervalToDuration/* default */.Z)({
        start: 0,
        end: secs * 1000
    });
    if (secs <= 0 || days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "h6",
            color: entry_base/* DarkColor.textSecondary */.I3.textSecondary,
            className: classes.end,
            children: msgOnEnd
        });
    }
    const daysArray = days?.toString().split('') ?? [
        0,
        0
    ];
    const hoursArray = hours?.toString().split('') ?? [
        0,
        0
    ];
    const minutesArray = minutes?.toString().split('') ?? [
        0,
        0
    ];
    const secondsArray = seconds?.toString().split('') ?? [
        0,
        0
    ];
    // 86400 seconds = 1 day
    // 3600 seconds = 1 hour
    const textColor = secondsRemaining >= 86400 ? 'green-1' : secondsRemaining >= 3600 ? 'yellow-1' : 'red-1';
    const Digit = (props)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            fontWeight: "fontWeightBold",
            children: props.digit
        });
    };
    const LeftDigit = (props)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            py: 0.2,
            mr: 0.1,
            ml: 0.3,
            className: classes.digit,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Digit, {
                digit: props.digit
            })
        });
    };
    const RightDigit = (props)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            py: 0.2,
            mr: 0.3,
            ml: 0.1,
            className: classes.digit,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Digit, {
                digit: props.digit
            })
        });
    };
    const DoubleDigits = (props)=>{
        const { leftDigit , rightDigit , label  } = props;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.placeholder,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LeftDigit, {
                            digit: leftDigit
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(RightDigit, {
                            digit: rightDigit
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "subtitle2",
                        fontSize: 8,
                        className: classes.label,
                        children: label
                    })
                })
            ]
        });
    };
    const Separator = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
            container: true,
            item: true,
            direction: "column",
            className: classes.separator,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                py: 0.2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body2",
                    fontWeight: "fontWeightBold",
                    children: ":"
                })
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        direction: "row",
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                container: true,
                item: true,
                direction: "column",
                className: classes.part,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoubleDigits, {
                    leftDigit: daysArray.length < 2 ? 0 : daysArray[0],
                    rightDigit: daysArray.length > 1 ? daysArray[1] : daysArray[0],
                    label: "DAY"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                container: true,
                item: true,
                direction: "column",
                className: classes.part,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoubleDigits, {
                    leftDigit: hoursArray.length < 2 ? 0 : hoursArray[0],
                    rightDigit: hoursArray.length > 1 ? hoursArray[1] : hoursArray[0],
                    label: "HR"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Separator, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                container: true,
                item: true,
                direction: "column",
                className: classes.part,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoubleDigits, {
                    leftDigit: minutesArray.length < 2 ? 0 : minutesArray[0],
                    rightDigit: minutesArray.length > 1 ? minutesArray[1] : minutesArray[0],
                    label: "MIN"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Separator, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                container: true,
                item: true,
                direction: "column",
                className: classes.part,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoubleDigits, {
                    leftDigit: secondsArray.length < 2 ? 0 : secondsArray[0],
                    rightDigit: secondsArray.length > 1 ? secondsArray[1] : secondsArray[0],
                    label: "SEC"
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/NetworkView.tsx







const NetworkView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center'
        },
        icon: {
            width: '1em',
            height: '1em',
            marginRight: theme.spacing(0.5)
        }
    })
);
const NetworkView = (props)=>{
    const classes = (0,entry/* useStylesExtends */.Bc)(NetworkView_useStyles(), props);
    const { chainId =types/* ChainId.Mainnet */.a_.Mainnet  } = props;
    const networkProvider = (0,entry_web3/* useNetworkDescriptor */.Vw)(undefined, entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainDetail = (0,chainDetailed/* getChainDetailed */.$G)(chainId);
    const color = (0,PoolTogether_utils/* getNetworkColor */.xr)(chainDetail?.chainId ?? types/* ChainId.Mainnet */.a_.Mainnet);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        variant: "subtitle2",
        color: color,
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                classes: {
                    icon: classes.icon
                },
                icon: networkProvider?.icon
            }),
            chainDetail?.fullName
        ]
    });
};

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/AccountPool.tsx












const AccountPool_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#341762',
            textAlign: 'center',
            borderRadius: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1)
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            fontSize: 15
        },
        token: {
            padding: theme.spacing(1, 2),
            borderRight: '#290b5a dashed',
            margin: 'auto'
        },
        tokenIcon: {
            backgroundColor: 'transparent',
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center'
        },
        info: {
            padding: theme.spacing(1, 2),
            justifyContent: 'space-between',
            textAlign: 'justify'
        },
        prize: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            margin: 'auto 0',
            width: 'auto'
        },
        trophy: {
            margin: 'auto'
        },
        prizeAmount: {
            margin: 'auto',
            marginRight: theme.spacing(0.5),
            textAlign: 'center'
        },
        in: {
            margin: 'auto',
            marginRight: theme.spacing(0.5)
        },
        manage: {
            cursor: 'pointer',
            color: '#3ef3d4',
            textDecoration: 'none',
            fontSize: '0.6rem',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            },
            maxHeight: theme.spacing(1),
            '&:hover': {
                color: '#ffffff'
            }
        },
        countdown: {
            alignSelf: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        countdownDigit: {
            backgroundColor: 'transparent',
            color: entry_base/* DarkColor.textSecondary */.I3.textSecondary
        },
        countdownSeparator: {
            color: entry_base/* DarkColor.textSecondary */.I3.textSecondary
        },
        odds: {
            fontSize: '0.6rem'
        },
        item: {
            width: 'auto'
        },
        footer: {
            display: 'block',
            alignSelf: 'flex-end',
            textAlign: 'end'
        }
    })
);
function AccountPool(props) {
    const { accountPool  } = props;
    const token = accountPool.pool.tokens.underlyingToken;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = AccountPool_useStyles();
    const poolURL = useManagePoolURL(accountPool.pool);
    const chainId = (0,useChainId/* useChainId */.xx)();
    const balance = (0,formatter/* formatBalance */.az)(accountPool.account.ticketBalance, Number.parseInt(accountPool.pool.tokens.ticket.decimals, 10));
    const formattedBalance = Number.parseFloat(balance).toLocaleString(undefined, {
        maximumFractionDigits: 6
    });
    const odds = (0,PoolTogether_utils/* calculateOdds */.Gb)(Number.parseFloat(formattedBalance), Number.parseFloat(accountPool.pool.tokens.ticket.totalSupply), Number.parseInt(accountPool.pool.config.numberOfWinners, 10));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        direction: "row",
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                direction: "column",
                item: true,
                xs: 3,
                className: classes.token,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.tokenIcon,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                            address: token.address,
                            name: token.symbol
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: entry_base/* DarkColor.textSecondary */.I3.textSecondary,
                            variant: "subtitle1",
                            fontWeight: "fontWeightBold",
                            children: token.symbol
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                flexWrap: "nowrap",
                item: true,
                xs: 9,
                className: classes.info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.item,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: entry_base/* DarkColor.textSecondary */.I3.textSecondary,
                                variant: "h5",
                                fontWeight: "fontWeightBold",
                                children: formattedBalance
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.odds,
                                color: entry_base/* DarkColor.textSecondary */.I3.textSecondary,
                                variant: "subtitle2",
                                children: t('plugin_pooltogether_winning_odds')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.odds,
                                color: entry_base/* DarkColor.textSecondary */.I3.textSecondary,
                                variant: "subtitle2",
                                children: odds ? t('plugin_pooltogether_short_odds_value', {
                                    value: odds
                                }) : 'n/a'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        direction: "column",
                        item: true,
                        className: classes.item,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                item: true,
                                className: classes.prize,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolTogetherTrophy, {
                                        className: classes.trophy
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.prizeAmount,
                                        color: entry_base/* DarkColor.textSecondary */.I3.textSecondary,
                                        variant: "subtitle2",
                                        fontWeight: "fontWeightBold",
                                        children: (0,PoolTogether_utils/* calculateNextPrize */.LL)(accountPool.pool)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.in,
                                        color: entry_base/* DarkColor.textSecondary */.I3.textSecondary,
                                        variant: "subtitle2",
                                        fontWeight: "fontWeightBold",
                                        children: t('plugin_pooltogether_in')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CountdownView, {
                                        secondsRemaining: (0,PoolTogether_utils/* calculateSecondsRemaining */.Q)(accountPool.pool),
                                        msgOnEnd: t('plugin_pooltogether_pool_ended'),
                                        classes: {
                                            digit: classes.countdownDigit,
                                            separator: classes.countdownSeparator
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                item: true,
                                className: classes.footer,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkView, {
                                        chainId: chainId
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        className: classes.manage,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: poolURL,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "subtitle2",
                                            children: t('plugin_pooltogether_manage')
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/Account.tsx










const Account_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            boxShadow: 'none',
            border: `solid 1px ${theme.palette.divider}`,
            backgroundColor: '#290b5a',
            textAlign: 'center',
            padding: theme.spacing(2)
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            padding: theme.spacing(1),
            fontSize: 'inherit'
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            padding: theme.spacing(1)
        },
        totalDeposits: {
            display: 'flex',
            justifyContent: 'space-between',
            background: 'linear-gradient(334deg,#4c249f 28%,rgba(255,119,225,.9) 164%),#290b5a',
            padding: theme.spacing(2, 4),
            borderRadius: theme.spacing(1),
            marginBottom: theme.spacing(1),
            color: entry_base/* DarkColor.textSecondary */.I3.textSecondary
        },
        noAccountPool: {
            padding: theme.spacing(2, 4),
            color: entry_base/* DarkColor.textSecondary */.I3.textSecondary
        },
        missingPool: {
            padding: theme.spacing(2, 4),
            color: '#7458df'
        },
        missingPoolLink: {
            color: 'inherit',
            '&:hover': {
                color: '#ffffff'
            }
        },
        pools: {
            margin: theme.spacing(1, 0)
        }
    })
);
function Account(props) {
    const { pools  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Account_useStyles();
    const { value: balances = [] , loading , retry , error  } = useAccountBalance(pools);
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            className: classes.progress,
            color: "primary",
            size: 15
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
            className: classes.refresh,
            color: "primary",
            onClick: retry
        });
    }
    const noZeroBalances = balances.filter((balance)=>Number.parseInt(balance.account.ticketBalance, 10) !== 0
    );
    const totalUsdBalance = noZeroBalances.map((balance)=>{
        const ticketBalance = Number.parseFloat((0,formatter/* formatBalance */.az)(balance.account.ticketBalance, Number.parseInt(balance.pool.tokens.ticket.decimals, 10)));
        const ticketUsdRate = balance.pool.tokens.ticket.usd;
        if (!ticketUsdRate) return 0;
        return ticketBalance * ticketUsdRate;
    }).reduce((x, y)=>x + y
    , 0).toLocaleString();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        direction: "column",
        className: classes.root,
        children: [
            noZeroBalances.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.noAccountPool,
                    variant: "h5",
                    fontWeight: "fontWeightBold",
                    children: t('plugin_pooltogether_no_account_pool')
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.totalDeposits,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h5",
                                fontWeight: "fontWeightBold",
                                children: t('plugin_pooltogether_my_deposits')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "h5",
                                fontWeight: "fontWeightBold",
                                children: [
                                    "$",
                                    totalUsdBalance
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.pools,
                        children: noZeroBalances.map((balance, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AccountPool, {
                                accountPool: balance
                            }, i)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.missingPool,
                    variant: "subtitle2",
                    fontWeight: "fontWeightBold",
                    children: [
                        t('plugin_pooltogether_missing_pool'),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            target: "_blank",
                            className: classes.missingPoolLink,
                            rel: "noopener noreferrer",
                            title: "PoolTogether",
                            href: constants/* COMMUNITY_URL */.xz,
                            children: constants/* COMMUNITY_URL */.xz
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 5 modules
var useERC20TokenDetailed = __webpack_require__(29782);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/PoolView.tsx















const PoolView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(1, 2),
            alignItems: 'stretch',
            backgroundColor: '#341762',
            margin: theme.spacing(1, 0),
            borderRadius: theme.spacing(1),
            '&:hover': {
                backgroundColor: '#43286e'
            },
            fontSize: 14,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
        },
        icon: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            marginRight: theme.spacing(1),
            backgroundColor: 'transparent'
        },
        button: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            fontWeight: 500
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1)
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            fontSize: 15
        },
        poolLink: {
            cursor: 'pointer',
            color: 'inherit',
            textDecoration: 'inherit',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            }
        },
        networkIcon: {
            width: '1em',
            height: '1em',
            backgroundColor: 'transparent',
            marginRight: theme.spacing(0.5)
        },
        metaTitle: {
            marginBottom: theme.spacing(1),
            justifyContent: 'inherit',
            alignItems: 'center'
        },
        metaFooter: {
            justifyContent: 'inherit',
            alignItems: 'center'
        },
        metaText: {
            marginTop: theme.spacing(1),
            justifyContent: 'inherit'
        },
        metaTextPrize: {
            color: '#55f1d7',
            margin: theme.spacing(0, 1),
            backgroundColor: 'rgba(53, 230, 208, 0.2)',
            borderRadius: theme.spacing(1),
            padding: theme.spacing(0, 0.5)
        },
        metaPrize: {
            marginTop: theme.spacing(1),
            padding: theme.spacing(1),
            borderRadius: theme.spacing(1),
            backgroundColor: '#290B5A',
            justifyContent: 'center',
            maxWidth: '50%'
        },
        metaDeposit: {
            marginTop: theme.spacing(1),
            padding: theme.spacing(0, 1),
            justifyContent: 'center',
            maxWidth: '50%'
        },
        prize: {
            background: 'linear-gradient(40deg,#ff9304,#ff04ea 10%,#9b4beb 20%,#0e8dd6 30%,#0bc6df 40%,#07d464 50%,#dfd105 60%,#ff04ab 78%,#8933eb 90%,#3b89ff)',
            '-webkit-background-clip': 'text',
            color: 'transparent',
            animation: '$rainbow_animation 6s linear infinite',
            backgroundSize: '600% 600%',
            fontSize: '1.2rem',
            '@media (min-width:600px)': {
                fontSize: '2rem'
            }
        },
        '@keyframes rainbow_animation': {
            '0%': {
                backgroundPosition: '100% 0%'
            },
            '100%': {
                backgroundPosition: '0 100%'
            }
        },
        countdown: {
            alignSelf: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        deposit: {
            backgroundColor: '#3ef3d4',
            color: '#4c249f',
            marginTop: theme.spacing(0.5)
        },
        info: {
            marginTop: theme.spacing(0.5),
            justifyContent: 'space-between'
        },
        apr: {
            color: '#bdb3d2',
            display: 'flex',
            alignItems: 'center'
        },
        poolIcon: {
            backgroundColor: 'transparent !important',
            marginRight: `${theme.spacing(0.5)} !important`,
            width: 13,
            height: 13
        },
        viewPool: {
            cursor: 'pointer',
            color: '#3ef3d4',
            textDecoration: 'none',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            },
            maxHeight: theme.spacing(1),
            '&:hover': {
                color: '#ffffff'
            }
        }
    })
);
function PoolView(props) {
    const { pool  } = props;
    const { classes  } = PoolView_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const poolURL = usePoolURL(pool);
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [prize, setPrize] = (0,react.useState)('TBD');
    const [period, setPeriod] = (0,react.useState)('Custom Period');
    // #region pool token
    const { value: token , loading: loadingToken , retry: retryToken , error: errorToken ,  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(pool.tokens.underlyingToken.address);
    // #endregion
    // #region process data
    const prizePeriodSeconds = Number.parseInt(pool.config.prizePeriodSeconds, 10);
    (0,react.useEffect)(()=>{
        setPrize((0,PoolTogether_utils/* calculateNextPrize */.LL)(pool));
        setPeriod((0,PoolTogether_utils/* getPrizePeriod */.fe)(t, prizePeriodSeconds));
    }, [
        pool
    ]);
    // #endregion
    // #region the deposit dialog
    const { setDialog: openDepositDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* PluginPoolTogetherMessages.DepositDialogUpdated */.d.DepositDialogUpdated);
    const onDeposit = (0,react.useCallback)(()=>{
        if (!pool || !token) return;
        openDepositDialog({
            open: true,
            pool: pool,
            token: token
        });
    }, [
        pool,
        token,
        openDepositDialog
    ]);
    // #endregion
    if (loadingToken) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.root,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                className: classes.progress,
                color: "primary",
                size: 15
            })
        });
    }
    if (errorToken) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.root,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
                className: classes.refresh,
                color: "primary",
                onClick: retryToken
            })
        });
    }
    if (!token) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.prize,
            variant: "h5",
            fontWeight: "fontWeightBold",
            children: t('plugin_pooltogether_token_not_found')
        });
    }
    const tokenFaucet = (0,head/* default */.Z)(pool.tokenFaucets);
    const tokenFaucetDripToken = (0,head/* default */.Z)(pool.tokens.tokenFaucetDripTokens);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        direction: "row",
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                container: true,
                direction: "column",
                className: classes.metaPrize,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        item: true,
                        className: classes.metaTitle,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                                    address: token.address,
                                    name: token.symbol,
                                    classes: {
                                        icon: classes.icon
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.prize,
                                    variant: "h4",
                                    fontWeight: "fontWeightBold",
                                    children: prize
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        item: true,
                        xs: 3,
                        className: classes.metaFooter,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                className: classes.metaTextPrize,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    fontSize: 10,
                                    variant: "subtitle2",
                                    children: t('plugin_pooltogether_prize', {
                                        period: period
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkView, {
                                    chainId: chainId
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                container: true,
                direction: "column",
                className: classes.metaDeposit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.countdown,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CountdownView, {
                            secondsRemaining: (0,PoolTogether_utils/* calculateSecondsRemaining */.Q)(pool),
                            msgOnEnd: t('plugin_pooltogether_pool_ended')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.deposit,
                            variant: "contained",
                            fullWidth: true,
                            size: "small",
                            onClick: onDeposit,
                            children: t('plugin_pooltogether_deposit', {
                                token: token.symbol ?? ''
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        item: true,
                        className: classes.info,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: tokenFaucet && tokenFaucetDripToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.apr,
                                    fontSize: "0.7rem",
                                    variant: "subtitle2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                                            address: tokenFaucetDripToken.address,
                                            name: tokenFaucetDripToken.symbol,
                                            classes: {
                                                icon: classes.poolIcon
                                            }
                                        }),
                                        t('plugin_pooltogether_apr', {
                                            apr: tokenFaucet.apr?.toFixed(2) ?? 0,
                                            token: tokenFaucetDripToken.symbol
                                        })
                                    ]
                                }) : null
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                    className: classes.viewPool,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: poolURL,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: "0.7rem",
                                        variant: "subtitle2",
                                        children: t('plugin_pooltogether_view_pool')
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

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/PoolsView.tsx



const PoolsView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            position: 'relative',
            padding: theme.spacing(0.5),
            justifyContent: 'center',
            flexDirection: 'column'
        }
    })
);
function PoolsView(props) {
    const { pools  } = props;
    const { classes  } = PoolsView_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: pools.map((pool)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PoolView, {
                pool: pool
            }, pool.prizePool.address)
        )
    });
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/PoolTogetherView.tsx











const PoolTogetherView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            // width: '100%',
            boxShadow: 'none',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0,
            backgroundColor: '#290b5a',
            textAlign: 'center'
        },
        message: {
            color: theme.palette.text.primary,
            textAlign: 'center'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            padding: theme.spacing(1),
            fontSize: 'inherit'
        },
        content: {
            // width: '100%',
            height: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important'
        },
        body: {
            flex: 1,
            overflow: 'auto',
            maxHeight: 350,
            borderRadius: 0,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            backgroundColor: '#290b5a'
        },
        tabs: {
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`,
            width: '100%',
            minHeight: 'unset',
            color: entry_base/* DarkColor.textPrimary */.I3.textPrimary
        },
        tab: {
            minHeight: 'unset',
            minWidth: 'unset'
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            padding: theme.spacing(1)
        }
    })
);
function PoolTogetherView(props) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = PoolTogetherView_useStyles();
    const [pools, setPools] = (0,react.useState)([]);
    // #region pools
    const { value: _pools = [] , error: error , loading: loading , retry: retry  } = usePools();
    _pools.sort((x, y)=>Number(y.prize.weeklyTotalValueUsd) - Number(x.prize.weeklyTotalValueUsd)
    );
    // #endregion
    // #region mask pool
    const { MASK_POOL_ADDRESS , MASK_POOL_SUBGRAPH  } = (0,constants_constants/* usePoolTogetherConstants */.tL)();
    const { value: maskPool , error: errorMask , loading: loadingMask , retry: retryMask ,  } = usePool(MASK_POOL_ADDRESS, MASK_POOL_SUBGRAPH, true);
    // #endregion
    // #region tabs
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_pooltogether_tab_pools')
        }, "pools"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_pooltogether_tab_account')
        }, "account"), 
    ].filter(Boolean);
    // #endregion
    (0,react.useEffect)(()=>{
        if (maskPool) {
            setPools([
                maskPool,
                ..._pools
            ]);
        } else {
            setPools(_pools);
        }
    }, [
        _pools,
        maskPool
    ]);
    if (loading || loadingMask) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            className: classes.progress,
            color: "primary",
            size: 15
        });
    }
    if (error || errorMask) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
            className: classes.refresh,
            color: "primary",
            onClick: error ? retry : retryMask
        });
    }
    if (pools.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.message,
            children: t('plugin_pooltogether_no_pool')
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                    className: classes.tabs,
                    indicatorColor: "primary",
                    textColor: "inherit",
                    variant: "fullWidth",
                    value: tabIndex,
                    onChange: (ev, newValue)=>setTabIndex(newValue)
                    ,
                    TabIndicatorProps: {
                        style: {
                            display: 'none'
                        }
                    },
                    children: tabs
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                    className: classes.body,
                    children: [
                        tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolsView, {
                            pools: pools
                        }) : null,
                        tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                            pools: pools
                        }) : null
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/SNSAdaptor/index.tsx











const isPoolTogetherUrl = (url)=>constants/* URL_PATTERN.test */.lu.test(url)
;
const sns = {
    ...PoolTogether_base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,src/* parseURL */.Lk)(x.val).find(isPoolTogetherUrl);
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
        const link = links.find(isPoolTogetherUrl);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    GlobalInjection: function Component() {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DepositDialog/* DepositDialog */.H, {});
    }
};
/* harmony default export */ const SNSAdaptor = (sns);
function Renderer(props) {
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: types/* ChainId.Mainnet */.a_.Mainnet,
        isValidChainId: (chainId)=>[
                types/* ChainId.Mainnet */.a_.Mainnet,
                types/* ChainId.Matic */.a_.Matic
            ].includes(chainId)
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolTogetherView, {})
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


/***/ })

}]);