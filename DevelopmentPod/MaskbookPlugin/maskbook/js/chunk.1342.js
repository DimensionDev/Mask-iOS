"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1342],{

/***/ 20690:
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

/***/ 96782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const RefreshIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Refresh', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.433 7.174l.975.683a.5.5 0 01-.13.884L5.89 9.858a.5.5 0 01-.657-.461L5.136 5.84a.5.5 0 01.787-.423l.806.564A8 8 0 114 12h2.001a6 6 0 102.433-4.826z",
        fill: "#1C68F3"
    })
}), '0 0 24 24');


/***/ }),

/***/ 89320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var src = __webpack_require__(27194);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/base.tsx
var PoolTogether_base = __webpack_require__(39703);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/UI/DepositDialog.tsx + 1 modules
var DepositDialog = __webpack_require__(38585);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/constants.ts
var constants = __webpack_require__(9994);
// EXTERNAL MODULE: ../icons/general/Refresh.tsx
var Refresh = __webpack_require__(96782);
// EXTERNAL MODULE: ../theme/src/constants.ts
var src_constants = __webpack_require__(5400);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 26 modules
var evm_constants = __webpack_require__(92211);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(80241);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(55673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(24515);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(22946);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(49103);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(35428);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var theme_src = __webpack_require__(92597);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(47930);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(90495);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(42340);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/contracts/usePoolTogetherPool.ts + 1 modules
var usePoolTogetherPool = __webpack_require__(76149);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/messages.ts
var messages = __webpack_require__(17489);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(11061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(98294);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useMulticall.ts
var useMulticall = __webpack_require__(55082);
// EXTERNAL MODULE: ../web3-shared/evm/constants/specific.ts
var specific = __webpack_require__(5919);
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
        account || specific/* ZERO_ADDRESS */.r_
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
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ./src/resources/PoolTogetherIcon.tsx
var PoolTogetherIcon = __webpack_require__(86056);
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
var PoolTogether_utils = __webpack_require__(36996);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useInterval.js
var useInterval = __webpack_require__(43509);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/intervalToDuration/index.js + 7 modules
var intervalToDuration = __webpack_require__(64893);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/CountdownView.tsx








const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    const classes = (0,theme_src/* useStylesExtends */.Bc)(useStyles(), props1);
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
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "h6",
            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
            className: classes.end,
            children: msgOnEnd
        }));
    }
    var ref;
    const daysArray = (ref = days === null || days === void 0 ? void 0 : days.toString().split('')) !== null && ref !== void 0 ? ref : [
        0,
        0
    ];
    var ref1;
    const hoursArray = (ref1 = hours === null || hours === void 0 ? void 0 : hours.toString().split('')) !== null && ref1 !== void 0 ? ref1 : [
        0,
        0
    ];
    var ref2;
    const minutesArray = (ref2 = minutes === null || minutes === void 0 ? void 0 : minutes.toString().split('')) !== null && ref2 !== void 0 ? ref2 : [
        0,
        0
    ];
    var ref3;
    const secondsArray = (ref3 = seconds === null || seconds === void 0 ? void 0 : seconds.toString().split('')) !== null && ref3 !== void 0 ? ref3 : [
        0,
        0
    ];
    // 86400 seconds = 1 day
    // 3600 seconds = 1 hour
    const textColor = secondsRemaining >= 86400 ? 'green-1' : secondsRemaining >= 3600 ? 'yellow-1' : 'red-1';
    const Digit = (props)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            fontWeight: "fontWeightBold",
            children: props.digit
        }));
    };
    const LeftDigit = (props)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            py: 0.2,
            mr: 0.1,
            ml: 0.3,
            className: classes.digit,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Digit, {
                digit: props.digit
            })
        }));
    };
    const RightDigit = (props)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            py: 0.2,
            mr: 0.3,
            ml: 0.1,
            className: classes.digit,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Digit, {
                digit: props.digit
            })
        }));
    };
    const DoubleDigits = (props)=>{
        const { leftDigit , rightDigit , label  } = props;
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
        }));
    };
    const Separator = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
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
    }));
};

// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(22229);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/NetworkView.tsx







const NetworkView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    const classes = (0,theme_src/* useStylesExtends */.Bc)(NetworkView_useStyles(), props);
    const { chainId =types/* ChainId.Mainnet */.a_.Mainnet  } = props;
    const networkProvider = (0,src/* useNetworkDescriptor */.Vw)(undefined, src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainDetail = (0,chainDetailed/* getChainDetailed */.$G)(chainId);
    var ref;
    const color = (0,PoolTogether_utils/* getNetworkColor */.xr)((ref = chainDetail === null || chainDetail === void 0 ? void 0 : chainDetail.chainId) !== null && ref !== void 0 ? ref : types/* ChainId.Mainnet */.a_.Mainnet);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        variant: "subtitle2",
        color: color,
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                classes: {
                    icon: classes.icon
                },
                icon: networkProvider === null || networkProvider === void 0 ? void 0 : networkProvider.icon
            }),
            chainDetail === null || chainDetail === void 0 ? void 0 : chainDetail.fullName
        ]
    }));
};

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/AccountPool.tsx












const AccountPool_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary
        },
        countdownSeparator: {
            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
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
                            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
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
                                color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
                                variant: "h5",
                                fontWeight: "fontWeightBold",
                                children: formattedBalance
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.odds,
                                color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
                                variant: "subtitle2",
                                children: t('plugin_pooltogether_winning_odds')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.odds,
                                color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
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
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolTogetherIcon/* PoolTogetherTrophy */.l, {
                                        className: classes.trophy
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.prizeAmount,
                                        color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
                                        variant: "subtitle2",
                                        fontWeight: "fontWeightBold",
                                        children: (0,PoolTogether_utils/* calculateNextPrize */.LL)(accountPool.pool)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.in,
                                        color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
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
    }));
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/Account.tsx










const Account_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary
        },
        noAccountPool: {
            padding: theme.spacing(2, 4),
            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary
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
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            className: classes.progress,
            color: "primary",
            size: 15
        }));
    }
    if (error) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
            className: classes.refresh,
            color: "primary",
            onClick: retry
        }));
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
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
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(9744);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 2 modules
var useERC20TokenDetailed = __webpack_require__(14754);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/PoolView.tsx














const PoolView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    var ref;
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
    const { setDialog: openDepositDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* PluginPoolTogetherMessages.DepositDialogUpdated */.d.DepositDialogUpdated);
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
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.root,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                className: classes.progress,
                color: "primary",
                size: 15
            })
        }));
    }
    if (errorToken) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.root,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
                className: classes.refresh,
                color: "primary",
                onClick: retryToken
            })
        }));
    }
    if (!token) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.prize,
            variant: "h5",
            fontWeight: "fontWeightBold",
            children: t('plugin_pooltogether_token_not_found')
        }));
    }
    const tokenFaucet = (0,head/* default */.Z)(pool.tokenFaucets);
    const tokenFaucetDripToken = (0,head/* default */.Z)(pool.tokens.tokenFaucetDripTokens);
    var _symbol, ref1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
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
                                token: (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : ''
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
                                            apr: (ref1 = (ref = tokenFaucet.apr) === null || ref === void 0 ? void 0 : ref.toFixed(2)) !== null && ref1 !== void 0 ? ref1 : 0,
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
    }));
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/PoolsView.tsx



const PoolsView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: pools.map((pool)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PoolView, {
                pool: pool
            }, pool.prizePool.address)
        )
    }));
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/PoolTogetherView.tsx











const PoolTogetherView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
            color: src_constants/* DarkColor.textPrimary */.I3.textPrimary
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
    const { MASK_POOL_ADDRESS , MASK_POOL_SUBGRAPH  } = (0,evm_constants/* usePoolTogetherConstants */.tL)();
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
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            className: classes.progress,
            color: "primary",
            size: 15
        }));
    }
    if (error || errorMask) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
            className: classes.refresh,
            color: "primary",
            onClick: error ? retry : retryMask
        }));
    }
    if (pools.length === 0) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.message,
            children: t('plugin_pooltogether_no_pool')
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
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
    }));
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(72148);
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
            return (0,shared_base_src/* parseURL */.Lk)(x.val).find(isPoolTogetherUrl);
        }, [
            props.message
        ]);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    PostInspector: function Component() {
        const links = src/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isPoolTogetherUrl);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    GlobalInjection: function Component() {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DepositDialog/* DepositDialog */.H, {}));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);
function Renderer(props) {
    (0,src/* usePluginWrapper */.fI)(true);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: types/* ChainId.Mainnet */.a_.Mainnet,
        isValidChainId: (chainId)=>[
                types/* ChainId.Mainnet */.a_.Mainnet,
                types/* ChainId.Matic */.a_.Matic
            ].includes(chainId)
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolTogetherView, {})
    }));
}


/***/ })

}]);