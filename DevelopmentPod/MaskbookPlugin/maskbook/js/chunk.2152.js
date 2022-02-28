"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2152],{

/***/ 62152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fetchPool": () => (/* reexport */ fetchPool),
  "fetchPools": () => (/* reexport */ fetchPools)
});

// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/constants.ts
var constants = __webpack_require__(25611);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/apis/index.ts


async function fetchPools(chainId) {
    // See https://github.com/pooltogether/pooltogether-api-monorepo for API documentation
    const url = new URL(`/pools/${chainId}.json`, constants/* API_URL */.T5);
    const response = await fetch(url.toString(), {});
    const data = await response.json();
    return data !== null && data !== void 0 ? data : [];
}
async function fetchPool(address, subgraphUrl) {
    var ref;
    if (!address || !subgraphUrl) return undefined;
    const body = {
        query: `{
            prizePool(id: "${address.toLowerCase()}") {
                underlyingCollateralToken
                underlyingCollateralDecimals
                underlyingCollateralName
                underlyingCollateralSymbol
                prizeStrategy{
                    singleRandomWinner{
                        prizePeriodSeconds,
                        ticket{
                            id
                            decimals
                            symbol
                            totalSupply
                        }
                    }
                    multipleWinners{
                        prizePeriodSeconds,
                        numberOfWinners
                        ticket{
                            id
                            decimals
                            symbol
                            totalSupply
                        }
                    }
                }
            }
        }`
    };
    const response = await fetch(subgraphUrl, {
        body: JSON.stringify(body),
        method: 'POST',
        mode: 'cors',
        credentials: 'omit'
    });
    const result = (ref = await response.json()) === null || ref === void 0 ? void 0 : ref.data;
    const prizePool = result.prizePool;
    const prizeStrategy = prizePool.prizeStrategy.singleRandomWinner ? prizePool.prizeStrategy.singleRandomWinner : prizePool.prizeStrategy.multipleWinners;
    var _numberOfWinners;
    return {
        address: address,
        config: {
            numberOfWinners: (_numberOfWinners = prizeStrategy.numberOfWinners) !== null && _numberOfWinners !== void 0 ? _numberOfWinners : '1',
            prizePeriodSeconds: prizeStrategy.prizePeriodSeconds
        },
        prize: {},
        prizePool: {
            address: address
        },
        tokens: {
            ticket: {
                ...prizeStrategy.ticket,
                address: prizeStrategy.ticket.id,
                totalSupplyUnformatted: prizeStrategy.ticket.totalSupply,
                totalSupply: (0,formatter/* formatBalance */.az)(prizeStrategy.ticket.totalSupply, prizeStrategy.ticket.decimals)
            },
            underlyingToken: {
                address: prizePool.underlyingCollateralToken,
                symbol: prizePool.underlyingCollateralSymbol,
                name: prizePool.underlyingCollateralName,
                decimals: prizePool.underlyingCollateralDecimals
            }
        },
        tokenFaucets: []
    };
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/services.ts



/***/ })

}]);