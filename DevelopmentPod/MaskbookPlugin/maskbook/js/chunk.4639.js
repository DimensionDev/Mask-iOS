"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4639],{

/***/ 74639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getAsset": () => (/* reexport */ getAsset),
  "getCollections": () => (/* reexport */ getCollections),
  "getHistory": () => (/* reexport */ getHistory),
  "getListings": () => (/* reexport */ getListings),
  "getNFT": () => (/* reexport */ getNFT),
  "getNFTBalance": () => (/* reexport */ getNFTBalance),
  "getNFTContract": () => (/* reexport */ getNFTContract),
  "getNFTsByPagination": () => (/* reexport */ getNFTsByPagination),
  "getOrders": () => (/* reexport */ getOrders)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(24524);
;// CONCATENATED MODULE: ./src/plugins/EVM/services/Asset/index.ts



const defaultPageableData = {
    data: [],
    hasNextPage: false
};
async function getAsset(options) {
    switch(options.provider){
        case types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
            return src/* OpenSea.getAsset */.Nn.getAsset(options.address, options.tokenId, {
                chainId: options.chainId
            });
        case types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
            return;
        case types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
            return src/* Rarible.getAsset */.e8.getAsset(options.address, options.tokenId, {
                chainId: options.chainId
            });
        default:
            (0,esm/* unreachable */.t1)(options.provider);
    }
}
async function getOrders(options) {
    const { provider , address , tokenId , side , chainId , page , size  } = options;
    switch(provider){
        case types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
            return src/* OpenSea.getOrders */.Nn.getOrders(address, tokenId, side, {
                chainId,
                page,
                size
            });
        case types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
            return [];
        case types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
            return src/* Rarible.getOrders */.e8.getOrders(address, tokenId, side, {
                chainId
            });
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}
async function getListings(options) {
    const { address , tokenId , chainId , provider  } = options;
    switch(provider){
        case types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
            return [];
        case types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
            return [];
        case types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
            return src/* Rarible.getListings */.e8.getListings(address, tokenId, {
                chainId
            });
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}
async function getHistory(options) {
    const { address , tokenId , chainId , provider , page , size  } = options;
    switch(provider){
        case types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
            return src/* OpenSea.getHistory */.Nn.getHistory(address, tokenId, {
                chainId,
                page,
                size
            });
        case types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
            return [];
        case types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
            return src/* Rarible.getHistory */.e8.getHistory(address, tokenId);
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}
async function getCollections(options) {
    const { address , chainId , provider , page , size  } = options;
    switch(provider){
        case types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
            return src/* OpenSea.getCollections */.Nn.getCollections(address, {
                chainId,
                page,
                size
            });
        case types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
            return defaultPageableData;
        case types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
            return defaultPageableData;
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}

;// CONCATENATED MODULE: ./src/plugins/EVM/services/NFT/index.ts



async function getNFT(options) {
    const { address , tokenId , chainId , provider  } = options;
    switch(provider){
        case types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
            return src/* OpenSea.getToken */.Nn.getToken(address, tokenId, chainId);
        case types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
            return src/* NFTScan.getToken */.jo.getToken(address, tokenId, chainId);
        case types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
            return src/* Rarible.getToken */.e8.getToken(address, tokenId);
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}
async function getNFTBalance(options) {
    const { address , chainId , provider  } = options;
    switch(provider){
        case types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
        case types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
        case types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
            return src/* NFTScan.getContractBalance */.jo.getContractBalance(address);
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}
async function getNFTContract(options) {
    const { contractAddress , chainId , provider  } = options;
    switch(provider){
        case types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
        case types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
            return src/* OpenSea.getContract */.Nn.getContract(contractAddress, chainId);
        case types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
            return;
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}
async function getNFTsByPagination(options) {
    const { provider , from , chainId , page , size  } = options;
    switch(provider){
        case types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
            return src/* OpenSea.getTokens */.Nn.getTokens(from, options);
        case types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
            return src/* NFTScan.getTokens */.jo.getTokens(from, options);
        case types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
            return src/* Rarible.getTokens */.e8.getTokens(from, options);
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}

;// CONCATENATED MODULE: ./src/plugins/EVM/services/index.ts




/***/ })

}]);