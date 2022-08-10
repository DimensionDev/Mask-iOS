"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2975],{

/***/ 79172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fetchPool": () => (/* reexport */ fetchPool),
  "fetchPoolPerformance": () => (/* reexport */ fetchPoolPerformance)
});

// EXTERNAL MODULE: ./src/plugins/dHEDGE/utils.ts
var utils = __webpack_require__(28892);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/apis/index.ts

async function fetchPool(address, url) {
    const body = {
        query: `query Fund($fundAddress: String!) {
            fund(address: $fundAddress) {
                address
                name
                blockchainCode
                managerName
                managerAddress
                managerLogicAddress
                poolDetails
                riskFactor
                totalValue
                performance
                poolType
                balanceOfManager
                totalSupply
            }
        }`,
        variables: {
            fundAddress: address
        }
    };
    const response = await fetch(url, {
        body: JSON.stringify(body),
        method: 'POST',
        mode: 'cors',
        credentials: 'omit'
    });
    const res = (await response.json())?.data;
    return {
        ...res.fund,
        chainId: (0,utils/* getChainIdFromCode */.N)(res.fund.blockchainCode)
    };
}
async function fetchPoolPerformance(address, period, url, sort = true) {
    const body = {
        query: `query PerformanceHistory($fundAddress: String!, $period: String!) {
            performanceHistory(address: $fundAddress, period: $period) {
                history {
                    performance
                    timestamp
                }
            }
        }`,
        variables: {
            fundAddress: address,
            period
        }
    };
    const response = await fetch(url, {
        body: JSON.stringify(body),
        method: 'POST',
        mode: 'cors',
        credentials: 'omit'
    });
    const history = (await response.json())?.data.performanceHistory.history;
    if (!history) return [];
    if (sort) history.sort((a, b)=>Number.parseInt(a.timestamp, 10) - Number.parseInt(b.timestamp, 10)
    );
    return history;
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/services.ts



/***/ }),

/***/ 17794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W4": () => (/* binding */ PoolType),
/* harmony export */   "Xp": () => (/* binding */ BlockchainCode),
/* harmony export */   "pH": () => (/* binding */ Period)
/* harmony export */ });
var PoolType;
(function(PoolType) {
    PoolType["v1"] = 'V1.0';
    PoolType["v2"] = 'V2.0';
})(PoolType || (PoolType = {}));
var BlockchainCode;
(function(BlockchainCode) {
    BlockchainCode["ethereum"] = 'ETH';
    BlockchainCode["polygon"] = 'POLYGON';
})(BlockchainCode || (BlockchainCode = {}));
var Period;
(function(Period) {
    Period["D1"] = '1d';
    Period["W1"] = '1w';
    Period["M1"] = '1m';
    Period["M3"] = '3m';
    Period["M6"] = '6m';
})(Period || (Period = {}));


/***/ }),

/***/ 28892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ formatAmountPostfix),
/* harmony export */   "N": () => (/* binding */ getChainIdFromCode)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72499);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17794);



const ONE_THOUSAND = 1000;
const ONE_MILLION = ONE_THOUSAND * 1000;
const ONE_BILLION = ONE_MILLION * 1000;
const ONE_TRILLION = ONE_BILLION * 1000;
/**
 * A helper function to format amount
 * @param input raw amount
 * @return {String} Postfixed formatted amount
 * @example
 * formatAmountPostfix(1.234);
 * // returns 1.23
 * @example
 * formatAmountPostfix(12.34);
 * // returns 12.3
 * @example
 * formatAmountPostfix(2000.123);
 * // returns 2.12K
 * @example
 * formatAmountPostfix(20000.123);
 * // returns 20.1K
 **/ function formatAmountPostfix(input) {
    let postfix = '';
    let amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(input);
    if (amount.isGreaterThanOrEqualTo(ONE_TRILLION)) {
        postfix = 'T';
        amount = amount.dividedBy(ONE_TRILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_BILLION)) {
        postfix = 'B';
        amount = amount.dividedBy(ONE_BILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_MILLION)) {
        postfix = 'M';
        amount = amount.dividedBy(ONE_MILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_THOUSAND)) {
        postfix = 'K';
        amount = amount.dividedBy(ONE_THOUSAND);
    }
    const fixedAmount = amount.isLessThanOrEqualTo(10) ? amount.toFixed(2) : amount.toFixed(1);
    return `${fixedAmount.replace(/\.0$/, '')}${postfix}`;
}
function getChainIdFromCode(blockChainCode) {
    switch(blockChainCode){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .BlockchainCode.ethereum */ .Xp.ethereum:
            return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .BlockchainCode.polygon */ .Xp.polygon:
            return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic;
    }
}


/***/ })

}]);