"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4805],{

/***/ 14012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* reexport */ createFungibleAsset),
  "m": () => (/* reexport */ createFungibleToken)
});

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/flow/index.ts + 14 modules
var flow = __webpack_require__(85081);
;// CONCATENATED MODULE: ../plugins/Flow/src/helpers/token.ts


function createFungibleToken(chainId, address, name, symbol, decimals, logoURL) {
    return {
        id: address,
        chainId,
        type: src/* TokenType.Fungible */.iv.Fungible,
        schema: flow/* SchemaType.Fungible */.XQ.Fungible,
        address,
        name,
        symbol,
        decimals,
        logoURL
    };
}
function createFungibleAsset(token, balance, price) {
    return {
        ...token,
        balance: (0,src/* leftShift */.w5)(balance, 8).toFixed(),
        price,
        value: {
            [src/* CurrencyType.USD */.V2.USD]: (0,src/* multipliedBy */.$q)(price?.usd ?? 0, (0,src/* leftShift */.w5)(balance, 8)).toFixed()
        }
    };
}

;// CONCATENATED MODULE: ../plugins/Flow/src/helpers/index.ts



/***/ }),

/***/ 34805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getFungibleAssets": () => (/* reexport */ getFungibleAssets)
});

// EXTERNAL MODULE: ../web3-shared/flow/index.ts + 14 modules
var flow = __webpack_require__(85081);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ../plugins/Flow/src/helpers/index.ts + 1 modules
var helpers = __webpack_require__(14012);
;// CONCATENATED MODULE: ../plugins/Flow/src/apis/fungibleAssets.ts




async function getTokenBalance(chainId, account, decimals, { fungibleTokenAddress , tokenAddress , exportKey , storageKey  }) {
    const sdk = (0,flow/* createClient */.eI)(chainId);
    try {
        const balance = await sdk.query({
            cadence: `
            import FungibleToken from ${fungibleTokenAddress}
            import ${exportKey} from ${tokenAddress}

            pub fun main(address: Address): UFix64 {
                let account = getAccount(address)
                let vaultRef = account
                    .getCapability(/public/${storageKey})
                    .borrow<&${exportKey}.Vault{FungibleToken.Balance}>()
                    ?? panic("Could not borrow Balance capability")

                return vaultRef.balance
            }
        `,
            args: (arg, t)=>[
                    arg(account, t.Address)
                ]
        });
        return (0,src/* rightShift */.pu)(balance, decimals).integerValue().toFixed();
    } catch  {
        return '0';
    }
}
async function getAssetFUSD(chainId, account) {
    const { FUSD_ADDRESS ='' , FUNGIBLE_TOKEN_ADDRESS =''  } = (0,flow/* getTokenConstants */.aV)(chainId);
    const price = await web3_providers_src/* CoinGecko.getTokenPriceByCoinId */.oD.getTokenPriceByCoinId('usd-coin', src/* CurrencyType.USD */.V2.USD);
    const balance = await getTokenBalance(chainId, account, 8, {
        fungibleTokenAddress: FUNGIBLE_TOKEN_ADDRESS,
        tokenAddress: FUSD_ADDRESS,
        exportKey: 'FUSD',
        storageKey: 'fusdBalance'
    });
    return (0,helpers/* createFungibleAsset */.k)((0,helpers/* createFungibleToken */.m)(chainId, FUSD_ADDRESS, 'Flow USD', 'FUSD', 8, new URL(/* asset import */ __webpack_require__(11390), __webpack_require__.b).toString()), balance, {
        [src/* CurrencyType.USD */.V2.USD]: price.toString()
    });
}
async function getAssetFLOW(chainId, account) {
    const { FLOW_ADDRESS ='' , FUNGIBLE_TOKEN_ADDRESS =''  } = (0,flow/* getTokenConstants */.aV)(chainId);
    const price = await web3_providers_src/* CoinGecko.getTokenPriceByCoinId */.oD.getTokenPriceByCoinId('flow', src/* CurrencyType.USD */.V2.USD);
    const balance = await getTokenBalance(chainId, account, 8, {
        fungibleTokenAddress: FUNGIBLE_TOKEN_ADDRESS,
        tokenAddress: FLOW_ADDRESS,
        exportKey: 'FlowToken',
        storageKey: 'flowTokenBalance'
    });
    return (0,helpers/* createFungibleAsset */.k)((0,helpers/* createFungibleToken */.m)(chainId, FLOW_ADDRESS, 'Flow', 'FLOW', 8, new URL(/* asset import */ __webpack_require__(36284), __webpack_require__.b).toString()), balance, {
        [src/* CurrencyType.USD */.V2.USD]: price.toString()
    });
}
async function getAssetTether(chainId, account) {
    const { TETHER_ADDRESS ='' , FUNGIBLE_TOKEN_ADDRESS =''  } = (0,flow/* getTokenConstants */.aV)(chainId);
    const price = await web3_providers_src/* CoinGecko.getTokenPriceByCoinId */.oD.getTokenPriceByCoinId('tether', src/* CurrencyType.USD */.V2.USD);
    const balance = await getTokenBalance(chainId, account, 8, {
        fungibleTokenAddress: FUNGIBLE_TOKEN_ADDRESS,
        tokenAddress: TETHER_ADDRESS,
        exportKey: 'TeleportedTetherToken',
        storageKey: 'teleportedTetherTokenBalance'
    });
    return (0,helpers/* createFungibleAsset */.k)((0,helpers/* createFungibleToken */.m)(chainId, TETHER_ADDRESS, 'Tether USD', 'tUSD', 8, new URL(/* asset import */ __webpack_require__(75183), __webpack_require__.b).toString()), balance, {
        [src/* CurrencyType.USD */.V2.USD]: price.toString()
    });
}
async function getFungibleAssets(chainId, address, options) {
    const allSettled = await Promise.allSettled([
        getAssetFLOW(chainId, address),
        getAssetFUSD(chainId, address),
        getAssetTether(chainId, address), 
    ]);
    const items = allSettled.map((x)=>x.status === 'fulfilled' ? x.value : null
    ).filter(Boolean);
    return (0,src/* createPageable */.LI)(items, 0);
}

;// CONCATENATED MODULE: ../plugins/Flow/src/apis/index.ts


;// CONCATENATED MODULE: ../plugins/Flow/src/services.ts



/***/ }),

/***/ 11390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e151ef2b82727c3881e1.png";

/***/ }),

/***/ 36284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0c3b46b836f44283e009.png";

/***/ }),

/***/ 75183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/625b21693ea176a83262.png";

/***/ })

}]);