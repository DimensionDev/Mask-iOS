"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8679],{

/***/ 8679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fetchPool": () => (/* reexport */ fetchPool),
  "fetchPools": () => (/* reexport */ fetchPools)
});

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/constants.ts
var constants = __webpack_require__(78755);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/apis/index.ts


async function fetchPools(chainId) {
    // See https://github.com/pooltogether/pooltogether-api-monorepo for API documentation
    const url = new URL(`/pools/${chainId}.json`, constants/* API_URL */.T5);
    const response = await fetch(url.toString(), {});
    const data = await response.json();
    return data ?? [];
}
async function fetchPool(address, subgraphUrl) {
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
    const result = (await response.json())?.data;
    const prizePool = result.prizePool;
    const prizeStrategy = prizePool.prizeStrategy.singleRandomWinner ? prizePool.prizeStrategy.singleRandomWinner : prizePool.prizeStrategy.multipleWinners;
    return {
        address,
        config: {
            numberOfWinners: prizeStrategy.numberOfWinners ?? '1',
            prizePeriodSeconds: prizeStrategy.prizePeriodSeconds
        },
        prize: {},
        prizePool: {
            address
        },
        tokens: {
            ticket: {
                ...prizeStrategy.ticket,
                address: prizeStrategy.ticket.id,
                totalSupplyUnformatted: prizeStrategy.ticket.totalSupply,
                totalSupply: (0,src/* formatBalance */.az)(prizeStrategy.ticket.totalSupply, prizeStrategy.ticket.decimals)
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