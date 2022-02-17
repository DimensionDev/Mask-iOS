"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2189],{

/***/ 42189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "oD": () => (/* binding */ CoinGecko),
  "bC": () => (/* binding */ Explorer),
  "cl": () => (/* binding */ KeyValue),
  "jo": () => (/* binding */ NFTScan),
  "x4": () => (/* reexport */ NonFungibleTokenAPI),
  "Nn": () => (/* binding */ OpenSea),
  "S5": () => (/* binding */ src_RSS3),
  "e8": () => (/* binding */ Rarible),
  "bb": () => (/* reexport */ getOrderUnitPrice)
});

// UNUSED EXPORTS: RSS3BaseAPI, getAssetListFromDebank, getNFTScanNFTList, getNFTScanNFTs, getOpenSeaCollectionList, getOpenSeaNFTList, getOrderUSDPrice, getRaribleNFTList, toImage

;// CONCATENATED MODULE: ../web3-providers/src/coingecko/constants.ts
const COINGECKO_URL_BASE = 'https://api.coingecko.com/api/v3';

;// CONCATENATED MODULE: ../web3-providers/src/coingecko/index.ts

class CoinGeckoAPI {
    async getTokenPrice(tokenId, currency) {
        const requestPath = `${COINGECKO_URL_BASE}/simple/price?ids=${tokenId}&vs_currencies=${currency}`;
        const price = await fetch(requestPath).then((r)=>r.json()
        );
        return price[tokenId];
    }
    async getTokensPrice(tokenIds, currency) {
        const requestPath = `${COINGECKO_URL_BASE}/simple/price?ids=${tokenIds}&vs_currencies=${currency}`;
        return fetch(requestPath).then((r)=>r.json()
        );
    }
}

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var utils_token = __webpack_require__(11304);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/fromUnixTime/index.js
var fromUnixTime = __webpack_require__(98162);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(91518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var src = __webpack_require__(91339);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(54575);
;// CONCATENATED MODULE: ../web3-providers/src/opensea/utils.ts



function getOrderUnitPrice(currentPrice, decimals, quantity) {
    if (!currentPrice || !decimals || !quantity) return;
    const _currentPrice = new (bignumber_default())(currentPrice).div((0,src/* pow10 */.wA)(decimals));
    const _quantity = new (bignumber_default())(quantity).div((0,src/* pow10 */.wA)((0,src/* isOne */.P$)(quantity) ? 0 : 8));
    return _currentPrice.dividedBy(_quantity).decimalPlaces(4, 2);
}
function getOrderUSDPrice(currentPrice, usdPrice, decimals) {
    if (!currentPrice || !decimals) return;
    const quantity = new (bignumber_default())(currentPrice).div((0,src/* pow10 */.wA)(decimals));
    return new (bignumber_default())(usdPrice !== null && usdPrice !== void 0 ? usdPrice : 0).multipliedBy(quantity).decimalPlaces(2, 2);
}
function toImage(url) {
    if (!url) return '';
    if (url.startsWith('ipfs://')) {
        const cid = url.replace(/^ipfs:\/\//, '');
        return (0,pipes/* resolveIPFSLink */.r5)(cid);
    }
    return url;
}

;// CONCATENATED MODULE: ../web3-providers/src/opensea/constants.ts
const OPENSEA_ACCOUNT_URL = 'https://opensea.io/accounts/:address';
const OPENSEA_API_KEY = 'c38fe2446ee34f919436c32db480a2e3';
const OPENSEA_API_URL = 'https://api.opensea.io';

;// CONCATENATED MODULE: ../web3-providers/src/helpers.ts
function isProxyENV() {
    try {
        return process.env.PROVIDER_API_ENV === 'proxy';
    } catch  {
        return false;
    }
}
async function fetchJSON(requestInfo, requestInit) {
    const res = await globalThis.fetch(requestInfo, requestInit);
    return res.json();
}

;// CONCATENATED MODULE: ../web3-providers/src/opensea/index.ts









async function fetchFromOpenSea(url, chainId, apiKey) {
    if (![
        types/* ChainId.Mainnet */.a_.Mainnet,
        types/* ChainId.Rinkeby */.a_.Rinkeby
    ].includes(chainId)) return;
    try {
        const response = await fetch(dist_default()(OPENSEA_API_URL, url), {
            method: 'GET',
            headers: {
                'x-api-key': apiKey !== null && apiKey !== void 0 ? apiKey : OPENSEA_API_KEY,
                Accept: 'application/json'
            },
            ...!isProxyENV() && {
                mode: 'cors'
            }
        });
        if (response.status === 404) return;
        return response.json();
    } catch  {
        return;
    }
}
function createERC721ContractFromAssetContract(address, chainId, assetContract) {
    var ref;
    return (0,utils_token/* createERC721ContractDetailed */.ek)(chainId, (ref = assetContract === null || assetContract === void 0 ? void 0 : assetContract.address) !== null && ref !== void 0 ? ref : '', assetContract === null || assetContract === void 0 ? void 0 : assetContract.name, assetContract === null || assetContract === void 0 ? void 0 : assetContract.token_symbol, undefined, assetContract === null || assetContract === void 0 ? void 0 : assetContract.image_url);
}
function createERC721TokenFromAsset(address, tokenId, chainId, asset) {
    var ref;
    var ref1, ref2;
    const imageURL = (ref2 = (ref1 = asset === null || asset === void 0 ? void 0 : asset.image_url) !== null && ref1 !== void 0 ? ref1 : asset === null || asset === void 0 ? void 0 : asset.image_preview_url) !== null && ref2 !== void 0 ? ref2 : '';
    var ref3, ref4, ref5, ref6, ref7, _address;
    return (0,utils_token/* createERC721Token */.Of)(createERC721ContractFromAssetContract(asset === null || asset === void 0 ? void 0 : (ref = asset.asset_contract) === null || ref === void 0 ? void 0 : ref.address, chainId, asset === null || asset === void 0 ? void 0 : asset.asset_contract), {
        name: (ref4 = (ref3 = asset === null || asset === void 0 ? void 0 : asset.name) !== null && ref3 !== void 0 ? ref3 : asset === null || asset === void 0 ? void 0 : asset.asset_contract.name) !== null && ref4 !== void 0 ? ref4 : '',
        description: (ref5 = asset === null || asset === void 0 ? void 0 : asset.description) !== null && ref5 !== void 0 ? ref5 : '',
        imageURL,
        mediaUrl: (ref7 = asset === null || asset === void 0 ? void 0 : asset.animation_url) !== null && ref7 !== void 0 ? ref7 : toImage((ref6 = asset === null || asset === void 0 ? void 0 : asset.image_original_url) !== null && ref6 !== void 0 ? ref6 : imageURL),
        owner: (_address = asset === null || asset === void 0 ? void 0 : asset.owner.address) !== null && _address !== void 0 ? _address : ''
    }, tokenId, {
        name: asset.collection.name,
        image: asset.collection.image_url || undefined,
        slug: asset.collection.slug
    });
}
function createTokenDetailed(chainId, token) {
    if (token.symbol === 'ETH') return (0,utils_token/* createNativeToken */.$c)(chainId);
    return (0,utils_token/* createERC20Token */.wY)(chainId, token.address, token.decimals, token.name, token.symbol);
}
function createAssetLink(account) {
    var ref;
    if (!account) return '';
    var ref8;
    return dist_default()(OPENSEA_ACCOUNT_URL, {
        address: (ref8 = account === null || account === void 0 ? void 0 : (ref = account.user) === null || ref === void 0 ? void 0 : ref.username) !== null && ref8 !== void 0 ? ref8 : account === null || account === void 0 ? void 0 : account.address
    });
}
function createNFTAsset(asset, chainId) {
    var ref24, ref9, ref10, ref11, ref12;
    var ref13, ref14;
    const desktopOrder = (0,head/* default */.Z)((ref24 = asset.orders) === null || ref24 === void 0 ? void 0 : ref24.sort((a, b)=>{
        var ref, ref23;
        return new (bignumber_default())((ref13 = getOrderUSDPrice(b.current_price, (ref = b.payment_token_contract) === null || ref === void 0 ? void 0 : ref.usd_price)) !== null && ref13 !== void 0 ? ref13 : 0).minus((ref14 = getOrderUSDPrice(a.current_price, (ref23 = a.payment_token_contract) === null || ref23 === void 0 ? void 0 : ref23.usd_price)) !== null && ref14 !== void 0 ? ref14 : 0).toNumber();
    }));
    var ref15, _endTime, _animation_url, ref16, ref17, ref18, ref19, ref20, ref21, _name, ref22;
    return {
        is_verified: [
            'approved',
            'verified'
        ].includes((ref15 = (ref9 = asset.collection) === null || ref9 === void 0 ? void 0 : ref9.safelist_request_status) !== null && ref15 !== void 0 ? ref15 : ''),
        // it's an IOS string as my inspection
        is_auction: (0,isAfter/* default */.Z)(Date.parse(`${(_endTime = asset.endTime) !== null && _endTime !== void 0 ? _endTime : ''}Z`), Date.now()),
        image_url: (ref18 = (ref17 = (ref16 = (_animation_url = asset.animation_url) !== null && _animation_url !== void 0 ? _animation_url : asset.image_original_url) !== null && ref16 !== void 0 ? ref16 : asset.image_url) !== null && ref17 !== void 0 ? ref17 : asset.image_preview_url) !== null && ref18 !== void 0 ? ref18 : '',
        asset_contract: {
            name: asset.asset_contract.name,
            description: asset.asset_contract.description,
            schemaName: asset.asset_contract.schema_name
        },
        current_price: desktopOrder ? new (bignumber_default())((ref19 = getOrderUnitPrice(desktopOrder.current_price, (ref10 = desktopOrder.payment_token_contract) === null || ref10 === void 0 ? void 0 : ref10.decimals, desktopOrder.quantity)) !== null && ref19 !== void 0 ? ref19 : 0).toNumber() : null,
        current_symbol: (ref20 = desktopOrder === null || desktopOrder === void 0 ? void 0 : (ref11 = desktopOrder.payment_token_contract) === null || ref11 === void 0 ? void 0 : ref11.symbol) !== null && ref20 !== void 0 ? ref20 : 'ETH',
        owner: {
            ...asset.owner,
            link: createAssetLink(asset.owner)
        },
        creator: {
            ...asset.creator,
            link: createAssetLink(asset.creator)
        },
        token_id: asset.token_id,
        token_address: asset.token_address,
        traits: asset.traits,
        safelist_request_status: (ref21 = (ref12 = asset.collection) === null || ref12 === void 0 ? void 0 : ref12.safelist_request_status) !== null && ref21 !== void 0 ? ref21 : '',
        description: asset.description,
        name: (_name = asset.name) !== null && _name !== void 0 ? _name : asset.collection.name,
        collection_name: asset.collection.name,
        animation_url: asset.animation_url,
        end_time: asset.endTime ? new Date(asset.endTime) : desktopOrder ? (0,fromUnixTime/* default */.Z)(desktopOrder.listing_time) : null,
        order_payment_tokens: (desktopOrder === null || desktopOrder === void 0 ? void 0 : desktopOrder.payment_token_contract) ? [
            createTokenDetailed(chainId, desktopOrder.payment_token_contract)
        ] : [],
        offer_payment_tokens: (0,uniqBy/* default */.Z)(asset.collection.payment_tokens.map((x)=>createTokenDetailed(chainId, x)
        ), (x)=>x.address.toLowerCase()
        ).filter((x)=>x.type === types/* EthereumTokenType.ERC20 */.Dr.ERC20
        ),
        slug: asset.collection.slug,
        desktopOrder,
        top_ownerships: asset.top_ownerships.map((x)=>{
            var ref;
            return {
                owner: {
                    address: x.owner.address,
                    profile_img_url: x.owner.profile_img_url,
                    user: {
                        username: (ref22 = (ref = x.owner.user) === null || ref === void 0 ? void 0 : ref.username) !== null && ref22 !== void 0 ? ref22 : ''
                    },
                    link: ''
                }
            };
        }),
        collection: asset.collection,
        response_: asset,
        last_sale: asset.last_sale
    };
}
function createNFTHistory(event) {
    var ref, ref25, ref26, ref27, ref28, ref29, ref30, ref31, ref32, ref33, ref34, ref35, ref36, ref37, ref38, ref39, ref40;
    const accountPair = event.event_type === 'successful' ? {
        from: {
            username: (ref = event.seller) === null || ref === void 0 ? void 0 : (ref25 = ref.user) === null || ref25 === void 0 ? void 0 : ref25.username,
            address: (ref26 = event.seller) === null || ref26 === void 0 ? void 0 : ref26.address,
            imageUrl: (ref27 = event.seller) === null || ref27 === void 0 ? void 0 : ref27.profile_img_url,
            link: createAssetLink(event.seller)
        },
        to: {
            username: (ref28 = event.winner_account) === null || ref28 === void 0 ? void 0 : (ref29 = ref28.user) === null || ref29 === void 0 ? void 0 : ref29.username,
            address: (ref30 = event.winner_account) === null || ref30 === void 0 ? void 0 : ref30.address,
            imageUrl: (ref31 = event.winner_account) === null || ref31 === void 0 ? void 0 : ref31.profile_img_url,
            link: createAssetLink(event.winner_account)
        }
    } : {
        from: {
            username: (ref32 = event.from_account) === null || ref32 === void 0 ? void 0 : (ref33 = ref32.user) === null || ref33 === void 0 ? void 0 : ref33.username,
            address: (ref34 = event.from_account) === null || ref34 === void 0 ? void 0 : ref34.address,
            imageUrl: (ref35 = event.from_account) === null || ref35 === void 0 ? void 0 : ref35.profile_img_url,
            link: createAssetLink(event.from_account)
        },
        to: {
            username: (ref36 = event.to_account) === null || ref36 === void 0 ? void 0 : (ref37 = ref36.user) === null || ref37 === void 0 ? void 0 : ref37.username,
            address: (ref38 = event.to_account) === null || ref38 === void 0 ? void 0 : ref38.address,
            imageUrl: (ref39 = event.to_account) === null || ref39 === void 0 ? void 0 : ref39.profile_img_url,
            link: createAssetLink(event.to_account)
        }
    };
    var _bid_amount, ref41;
    return {
        id: event.id,
        accountPair,
        price: {
            quantity: event.quantity,
            asset: event.asset,
            paymentToken: event.payment_token,
            price: (ref41 = (_bid_amount = event.bid_amount) !== null && _bid_amount !== void 0 ? _bid_amount : event.ending_price) !== null && ref41 !== void 0 ? ref41 : event.starting_price
        },
        eventType: event.event_type,
        transactionBlockExplorerLink: (ref40 = event.transaction) === null || ref40 === void 0 ? void 0 : ref40.blockExplorerLink,
        timestamp: new Date(`${event.created_date}Z`).getTime()
    };
}
function createAssetOrder(order) {
    return {
        created_time: order.created_time,
        current_price: order.current_price,
        current_bounty: order.current_bounty,
        maker_account: {
            ...order.maker,
            link: ''
        },
        taker_account: {
            ...order.taker,
            link: ''
        },
        payment_token: order.payment_token,
        payment_token_contract: order.payment_token_contract,
        fee_recipient_account: order.fee_recipient,
        cancelled_or_finalized: order.cancelled || order.finalized,
        marked_invalid: order.marked_invalid,
        approved_on_chain: order.approved_on_chain,
        listing_time: order.listing_time,
        side: order.side,
        quantity: order.quantity,
        expiration_time: order.expiration_time,
        order_hash: order.order_hash
    };
}
class OpenSeaAPI {
    async getAsset(address, tokenId, { chainId =types/* ChainId.Mainnet */.a_.Mainnet  } = {}) {
        const requestPath = dist_default()('/api/v1/asset/:address/:tokenId', {
            address,
            tokenId
        });
        const response = await fetchFromOpenSea(requestPath, chainId);
        if (!response) return;
        return createNFTAsset(response, chainId);
    }
    async getContract(address, chainId) {
        const requestPath = dist_default()('/api/v1/asset_contract/:address', {
            address
        });
        const assetContract = await fetchFromOpenSea(requestPath, chainId);
        return createERC721ContractFromAssetContract(address, chainId, assetContract);
    }
    async getToken(address, tokenId, chainId) {
        const requestPath = dist_default()('/api/v1/asset/:address/:tokenId', {
            address,
            tokenId
        });
        const response = await fetchFromOpenSea(requestPath, chainId);
        if (!response) return;
        return createERC721TokenFromAsset(address, tokenId, chainId, response);
    }
    async getTokens(from, opts) {
        var ref;
        const { chainId =types/* ChainId.Mainnet */.a_.Mainnet , page =0 , size =50  } = opts;
        const requestPath = dist_default()('/api/v1/assets', {
            owner: from,
            offset: page * size,
            limit: size,
            collection: (ref = opts.pageInfo) === null || ref === void 0 ? void 0 : ref.collection
        });
        const response = await fetchFromOpenSea(requestPath, chainId, this._apiKey);
        var ref42;
        const assets = (ref42 = response === null || response === void 0 ? void 0 : response.assets.filter((x)=>[
                'non-fungible',
                'semi-fungible'
            ].includes(x.asset_contract.asset_contract_type) || [
                'ERC721',
                'ERC1155'
            ].includes(x.asset_contract.schema_name)
        ).map((asset)=>createERC721TokenFromAsset(from, asset.token_id, chainId, asset)
        )) !== null && ref42 !== void 0 ? ref42 : [];
        return {
            data: assets,
            hasNextPage: assets.length === size
        };
    }
    async getHistory(address, tokenId, { chainId =types/* ChainId.Mainnet */.a_.Mainnet , page , size  } = {}) {
        const requestPath = dist_default()('/api/v1/events', {
            asset_contract_address: address,
            token_id: tokenId,
            offset: page,
            limit: size
        });
        const response = await fetchFromOpenSea(requestPath, chainId);
        var ref;
        return (ref = response === null || response === void 0 ? void 0 : response.asset_events.map(createNFTHistory)) !== null && ref !== void 0 ? ref : [];
    }
    async getOrders(address, tokenId, side, { chainId =types/* ChainId.Mainnet */.a_.Mainnet , page , size  } = {}) {
        var ref;
        const requestPath = dist_default()('/wyvern/v1/orders', {
            asset_contract_address: address,
            token_id: tokenId,
            side,
            offset: page,
            limit: size
        });
        const response = await fetchFromOpenSea(requestPath, chainId);
        var ref43;
        return (ref43 = response === null || response === void 0 ? void 0 : (ref = response.orders) === null || ref === void 0 ? void 0 : ref.map(createAssetOrder)) !== null && ref43 !== void 0 ? ref43 : [];
    }
    async getCollections(address, opts = {}) {
        const { chainId =types/* ChainId.Mainnet */.a_.Mainnet , page =0 , size =50  } = opts;
        const requestPath = dist_default()('/api/v1/collections', {
            asset_owner: address,
            offset: page * size,
            limit: size
        });
        const response = await fetchFromOpenSea(requestPath, chainId, this._apiKey);
        if (!response) {
            return {
                data: [],
                hasNextPage: false
            };
        }
        var ref48;
        const collections = (ref48 = response === null || response === void 0 ? void 0 : response.map((x1)=>{
            var ref, ref44, ref45, ref46, ref47;
            return {
                name: x1.name,
                image: x1.image_url || undefined,
                slug: x1.slug,
                id: x1.slug,
                chainId,
                symbol: (ref = x1.primary_asset_contracts) === null || ref === void 0 ? void 0 : (ref44 = ref[0]) === null || ref44 === void 0 ? void 0 : ref44.symbol,
                address: (ref45 = x1.primary_asset_contracts) === null || ref45 === void 0 ? void 0 : (ref46 = ref45[0]) === null || ref46 === void 0 ? void 0 : ref46.address,
                // workaround: rarible collection have multi contract
                addresses: (ref47 = x1.primary_asset_contracts) === null || ref47 === void 0 ? void 0 : ref47.map((x)=>x.address
                ),
                iconURL: x1.image_url,
                balance: x1.owned_asset_count
            };
        })) !== null && ref48 !== void 0 ? ref48 : [];
        return {
            data: collections,
            hasNextPage: collections.length === size
        };
    }
    constructor(apiKey){
        this._apiKey = apiKey;
    }
}
function getOpenSeaNFTList(apiKey, address, page, size) {
    const opensea = new OpenSeaAPI(apiKey);
    return opensea.getTokens(address, {
        page,
        size
    });
}
function getOpenSeaCollectionList(apiKey, address, page, size) {
    const opensea = new OpenSeaAPI(apiKey);
    return opensea.getCollections(address, {
        page,
        size
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(27862);
// EXTERNAL MODULE: ../web3-shared/evm/utils/enum.ts
var utils_enum = __webpack_require__(11585);
;// CONCATENATED MODULE: ../web3-providers/src/rarible/types.ts
var RARIBLE_FEATURES;
(function(RARIBLE_FEATURES) {
    RARIBLE_FEATURES["APPROVE_FOR_ALL"] = "APPROVE_FOR_ALL";
    RARIBLE_FEATURES["SET_URI_PREFIX"] = "SET_URI_PREFIX";
    RARIBLE_FEATURES["BURN"] = "BURN";
    RARIBLE_FEATURES["MINT_WITH_ADDRESS"] = "MINT_WITH_ADDRESS";
    RARIBLE_FEATURES["SECONDARY_SALE_FEES"] = "SECONDARY_SALE_FEES";
})(RARIBLE_FEATURES || (RARIBLE_FEATURES = {}));
var RaribleProfileType;
(function(RaribleProfileType) {
    RaribleProfileType["USER"] = "USER";
    RaribleProfileType["COLLECTION"] = "COLLECTION";
})(RaribleProfileType || (RaribleProfileType = {}));
var RaribleEventType;
(function(RaribleEventType) {
    RaribleEventType["ORDER"] = 'order';
    RaribleEventType["BUY"] = 'buy';
    RaribleEventType["TRANSFER"] = 'transfer';
    RaribleEventType["OFFER"] = 'offer';
})(RaribleEventType || (RaribleEventType = {}));

;// CONCATENATED MODULE: ../web3-providers/src/rarible/constants.ts
const RaribleURL = 'https://api.rarible.com/';
const RaribleChainURL = 'https://ethereum-api.rarible.org/';
const RaribleIPFSURL = 'https://ipfs.rarible.com/ipfs/';
const RaribleUserURL = 'https://rarible.com/user/';
const RaribleRopstenUserURL = 'https://ropsten.rarible.com/user/';
const RaribleMainnetURL = 'https://api-mainnet.rarible.com/marketplace/api/v4/';
const RaribleStagingMainnetAPI_URL = 'https://api-staging.rarible.com/protocol/v0.1';
const RaribleMainnetSearchURL = 'https://api-mainnet.rarible.com/marketplace/search/v1/';

;// CONCATENATED MODULE: ../web3-providers/src/rarible/utils.ts

function toRaribleImage(url) {
    if (!url) return '';
    if (url.startsWith('ipfs://ipfs/')) return url.replace(/^ipfs:\/\/ipfs\//, RaribleIPFSURL);
    return url;
}

;// CONCATENATED MODULE: ../web3-providers/src/rarible/index.ts








const resolveRaribleUserNetwork = (0,utils_enum/* createLookupTableResolver */.F)({
    [types/* ChainId.Mainnet */.a_.Mainnet]: RaribleUserURL,
    [types/* ChainId.Ropsten */.a_.Ropsten]: RaribleRopstenUserURL
}, RaribleUserURL);
async function fetchFromRarible(url, path, init) {
    const response = await fetch(dist_default()(url, path), {
        ...!isProxyENV() && {
            mode: 'cors'
        },
        ...init
    });
    return response.json();
}
function getProfilesFromRarible(addresses) {
    return fetchFromRarible(RaribleMainnetURL, '/profiles/list', {
        method: 'POST',
        body: JSON.stringify(addresses),
        headers: {
            'content-type': 'application/json'
        }
    });
}
function rarible_createERC721TokenFromAsset(tokenAddress, tokenId, asset) {
    var ref, ref1, ref2, ref3;
    var _ORIGINAL, ref4;
    const imageURL = toRaribleImage((ref4 = (_ORIGINAL = (ref = asset === null || asset === void 0 ? void 0 : asset.meta.image) === null || ref === void 0 ? void 0 : ref.url.ORIGINAL) !== null && _ORIGINAL !== void 0 ? _ORIGINAL : (ref1 = asset === null || asset === void 0 ? void 0 : asset.meta.image) === null || ref1 === void 0 ? void 0 : ref1.url.PREVIEW) !== null && ref4 !== void 0 ? ref4 : '');
    var _name, _name1, _description, _ORIGINAL1, ref5;
    return {
        contractDetailed: {
            type: types/* EthereumTokenType.ERC721 */.Dr.ERC721,
            chainId: types/* ChainId.Mainnet */.a_.Mainnet,
            address: tokenAddress,
            name: (_name = asset === null || asset === void 0 ? void 0 : asset.meta.name) !== null && _name !== void 0 ? _name : '',
            symbol: ''
        },
        info: {
            name: (_name1 = asset === null || asset === void 0 ? void 0 : asset.meta.name) !== null && _name1 !== void 0 ? _name1 : '',
            description: (_description = asset === null || asset === void 0 ? void 0 : asset.meta.description) !== null && _description !== void 0 ? _description : '',
            mediaUrl: toRaribleImage((ref5 = (_ORIGINAL1 = (ref2 = asset === null || asset === void 0 ? void 0 : asset.meta.animation) === null || ref2 === void 0 ? void 0 : ref2.url.ORIGINAL) !== null && _ORIGINAL1 !== void 0 ? _ORIGINAL1 : (ref3 = asset === null || asset === void 0 ? void 0 : asset.meta.animation) === null || ref3 === void 0 ? void 0 : ref3.url.PREVIEW) !== null && ref5 !== void 0 ? ref5 : '') || imageURL,
            imageURL,
            owner: asset === null || asset === void 0 ? void 0 : asset.owners[0]
        },
        tokenId: tokenId
    };
}
function rarible_createNFTAsset(asset, chainId) {
    var ref, ref6;
    const owner = (0,head/* default */.Z)(asset === null || asset === void 0 ? void 0 : asset.owners);
    const creator = (0,head/* default */.Z)(asset === null || asset === void 0 ? void 0 : asset.creators);
    var _description, _name;
    return {
        is_verified: false,
        is_auction: false,
        token_address: asset.contract,
        image_url: toRaribleImage((ref = asset === null || asset === void 0 ? void 0 : asset.meta.image) === null || ref === void 0 ? void 0 : ref.url.ORIGINAL),
        asset_contract: null,
        owner: owner ? {
            address: owner,
            profile_img_url: '',
            user: {
                username: owner
            },
            link: ''
        } : null,
        creator: creator ? {
            address: creator.account,
            profile_img_url: '',
            user: {
                username: creator.account
            },
            link: ''
        } : null,
        traits: asset === null || asset === void 0 ? void 0 : asset.meta.attributes.map(({ key , value  })=>({
                trait_type: key,
                value
            })
        ),
        description: (_description = asset === null || asset === void 0 ? void 0 : asset.meta.description) !== null && _description !== void 0 ? _description : '',
        name: (_name = asset === null || asset === void 0 ? void 0 : asset.meta.name) !== null && _name !== void 0 ? _name : 'Unknown',
        collection_name: '',
        animation_url: (ref6 = asset.meta.animation) === null || ref6 === void 0 ? void 0 : ref6.url.PREVIEW,
        current_price: 0,
        current_symbol: 'ETH',
        end_time: null,
        order_payment_tokens: [],
        offer_payment_tokens: [],
        top_ownerships: owner ? [
            {
                owner: {
                    address: owner,
                    profile_img_url: '',
                    user: {
                        username: owner
                    },
                    link: ''
                }
            }, 
        ] : [],
        slug: '',
        response_: asset,
        token_id: asset.tokenId,
        safelist_request_status: '',
        last_sale: null
    };
}
function _getAsset(address, tokenId) {
    const requestPath = dist_default()('/v0.1/nft/items/:address::tokenId', {
        includeMeta: true,
        address,
        tokenId
    });
    return fetchFromRarible(RaribleChainURL, requestPath, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        }
    });
}
class RaribleAPI {
    async getAsset(address, tokenId, { chainId =types/* ChainId.Mainnet */.a_.Mainnet  } = {}) {
        const asset = await _getAsset(address, tokenId);
        if (!asset) return;
        return rarible_createNFTAsset(asset, chainId);
    }
    async getToken(tokenAddress, tokenId) {
        const asset = await _getAsset(tokenAddress, tokenId);
        return rarible_createERC721TokenFromAsset(tokenAddress, tokenId, asset);
    }
    async getTokens(from, opts) {
        const requestPath = dist_default()('/protocol/v0.1/ethereum/nft/items/byOwner', {
            owner: from,
            size: opts.size,
            ...opts.pageInfo
        });
        const asset1 = await fetchFromRarible(RaribleURL, requestPath, undefined);
        if (!asset1) return {
            data: [],
            hasNextPage: false
        };
        const data = asset1.items.map((asset)=>rarible_createERC721TokenFromAsset(asset.contract, asset.tokenId, asset)
        ).filter((x)=>{
            var ref, ref7;
            return ((ref = x.info) === null || ref === void 0 ? void 0 : (ref7 = ref.owner) === null || ref7 === void 0 ? void 0 : ref7.toLowerCase()) === from.toLowerCase();
        });
        return {
            data,
            hasNextPage: !!asset1.continuation,
            nextPageInfo: {
                continuation: asset1.continuation
            }
        };
    }
    async getOffers(tokenAddress, tokenId, { chainId =types/* ChainId.Mainnet */.a_.Mainnet  } = {}) {
        const requestPath = dist_default()('/items/:tokenAddress::tokenId/offers', {
            tokenAddress,
            tokenId
        });
        const orders = await fetchFromRarible(RaribleMainnetURL, requestPath, {
            method: 'POST',
            body: JSON.stringify({
                size: 20
            }),
            headers: {
                'content-type': 'application/json'
            }
        });
        const profiles = await getProfilesFromRarible(orders.map((item)=>item.maker
        ));
        return orders.map((order)=>{
            const ownerInfo = profiles.find((owner)=>owner.id === order.maker
            );
            var ref, ref8, ref9;
            return {
                created_time: order.updateDate,
                current_price: order.buyPriceEth,
                current_bounty: order.fee,
                payment_token: order.token,
                listing_time: 0,
                side: NonFungibleTokenAPI.OrderSide.Buy,
                quantity: '1',
                expiration_time: 0,
                order_hash: order.signature,
                approved_on_chain: false,
                maker_account: {
                    user: {
                        username: (ref = ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.name) !== null && ref !== void 0 ? ref : ''
                    },
                    address: (ref8 = ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.id) !== null && ref8 !== void 0 ? ref8 : '',
                    profile_img_url: toRaribleImage(ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.image),
                    link: `${resolveRaribleUserNetwork(chainId)}${(ref9 = ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.id) !== null && ref9 !== void 0 ? ref9 : ''}`
                }
            };
        });
    }
    async getListings(tokenAddress, tokenId, { chainId =types/* ChainId.Mainnet */.a_.Mainnet  } = {}) {
        const requestPath = dist_default()('/items/:tokenAddress::tokenId/ownerships', {
            tokenAddress,
            tokenId
        });
        const assets = await fetchFromRarible(RaribleMainnetURL, requestPath);
        const listings = assets.filter((x)=>x.selling
        );
        const profiles = await getProfilesFromRarible(listings.map((x)=>x.owner
        ));
        return listings.map((asset)=>{
            const ownerInfo = profiles.find((owner)=>owner.id === asset.owner
            );
            var ref, ref10, ref11;
            return {
                created_time: asset.date,
                approved_on_chain: false,
                current_price: asset.priceEth,
                payment_token: asset.token,
                listing_time: 0,
                side: NonFungibleTokenAPI.OrderSide.Buy,
                quantity: '1',
                expiration_time: 0,
                order_hash: asset.signature,
                maker_account: {
                    user: {
                        username: (ref = ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.name) !== null && ref !== void 0 ? ref : ''
                    },
                    address: (ref10 = ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.id) !== null && ref10 !== void 0 ? ref10 : '',
                    profile_img_url: toRaribleImage(ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.image),
                    link: `${resolveRaribleUserNetwork(chainId)}${(ref11 = ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.id) !== null && ref11 !== void 0 ? ref11 : ''}`
                }
            };
        });
    }
    async getOrders(tokenAddress, tokenId, side, opts = {}) {
        switch(side){
            case NonFungibleTokenAPI.OrderSide.Buy:
                return this.getOffers(tokenAddress, tokenId, opts);
            case NonFungibleTokenAPI.OrderSide.Sell:
                return this.getListings(tokenAddress, tokenId, opts);
            default:
                return [];
        }
    }
    async getHistory(tokenAddress, tokenId) {
        const response = await fetchFromRarible(RaribleMainnetURL, '/activity', {
            method: 'POST',
            body: JSON.stringify({
                // types: ['BID', 'BURN', 'BUY', 'CANCEL', 'CANCEL_BID', 'ORDER', 'MINT', 'TRANSFER', 'SALE'],
                filter: {
                    '@type': 'by_item',
                    address: tokenAddress,
                    tokenId
                },
                size: 100
            }),
            headers: {
                'content-type': 'application/json'
            }
        });
        const histories = response.filter((x)=>Object.values(RaribleEventType).includes(x['@type'])
        );
        const profiles = await getProfilesFromRarible((0,compact/* default */.Z)([
            ...histories.map((history)=>history.owner
            ),
            ...histories.map((history)=>history.buyer
            ),
            ...histories.map((history)=>history.from
            ), 
        ]));
        return histories.map((history)=>{
            const ownerInfo = profiles.find((profile)=>profile.id === history.owner
            );
            const fromInfo = profiles.find((profile)=>profile.id === history.buyer || profile.id === history.from
            );
            var ref;
            return {
                id: history.id,
                eventType: history['@type'],
                timestamp: (ref = history.date.getTime()) !== null && ref !== void 0 ? ref : 0,
                price: {
                    quantity: '1',
                    price: history.price,
                    asset: {
                        id: fromInfo === null || fromInfo === void 0 ? void 0 : fromInfo.id,
                        decimals: 0,
                        image_url: fromInfo === null || fromInfo === void 0 ? void 0 : fromInfo.image,
                        image_original_url: '',
                        image_preview_url: '',
                        asset_contract: {
                            symbol: fromInfo === null || fromInfo === void 0 ? void 0 : fromInfo.type
                        },
                        permalink: ''
                    }
                },
                accountPair: {
                    from: {
                        username: fromInfo === null || fromInfo === void 0 ? void 0 : fromInfo.name,
                        address: fromInfo === null || fromInfo === void 0 ? void 0 : fromInfo.id,
                        imageUrl: fromInfo === null || fromInfo === void 0 ? void 0 : fromInfo.image,
                        link: ''
                    },
                    to: {
                        username: ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.name,
                        address: ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.id,
                        imageUrl: ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.image,
                        link: ''
                    }
                }
            };
        });
    }
}
function getRaribleNFTList(apiKey, address, page, size, pageInfo) {
    const rarible = new RaribleAPI();
    return rarible.getTokens(address, {
        page,
        size,
        pageInfo
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/addSeconds/index.js
var addSeconds = __webpack_require__(71767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isBefore/index.js
var isBefore = __webpack_require__(33086);
;// CONCATENATED MODULE: ../web3-providers/src/NFTScan/constants.ts

const NFTSCAN_ID = 't9k2o5GC';
const NFTSCAN_SECRET = '21da1d638ef5d0bf76e37aa5c2da7fd789ade9e3';
const NFTSCAN_URL = 'https://restapi.nftscan.com';
const NFTSCAN_BASE_API = dist_default()(NFTSCAN_URL, '/api/v1');
const NFTSCAN_ACCESS_TOKEN_URL = dist_default()(NFTSCAN_URL, '/gw/token', {
    apiKey: NFTSCAN_ID,
    apiSecret: NFTSCAN_SECRET
});

;// CONCATENATED MODULE: ../web3-providers/src/NFTScan/index.ts






const tokenCache = new Map();
async function getToken() {
    const token = tokenCache.get('token');
    if (token && (0,isBefore/* default */.Z)(Date.now(), token.expiration)) {
        return token.token;
    }
    const response = await fetch(NFTSCAN_ACCESS_TOKEN_URL, {
        ...!isProxyENV() && {
            mode: 'cors'
        }
    });
    const { data ,  } = await response.json();
    tokenCache.set('token', {
        token: data.accessToken,
        expiration: (0,addSeconds/* default */.Z)(Date.now(), data.expiration)
    });
    return data.accessToken;
}
async function fetchAsset(path, body) {
    const response = await fetch(dist_default()(NFTSCAN_BASE_API, path), {
        method: 'POST',
        headers: {
            'Access-Token': await getToken(),
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) return;
    return response.json();
}
function createERC721ContractDetailedFromAssetContract(asset) {
    var _trade_contract;
    return (0,utils_token/* createERC721ContractDetailed */.ek)(types/* ChainId.Mainnet */.a_.Mainnet, (_trade_contract = asset.trade_contract) !== null && _trade_contract !== void 0 ? _trade_contract : asset.nft_contract_address, undefined, asset.trade_symbol);
}
function createERC721TokenAsset(asset) {
    const payload = JSON.parse(asset.nft_json);
    const detailed = createERC721ContractDetailedFromAssetContract(asset);
    var ref, ref1, ref2, ref3, ref4, _nft_holder;
    return (0,utils_token/* createERC721Token */.Of)(detailed, {
        name: (ref2 = (ref1 = (ref = payload === null || payload === void 0 ? void 0 : payload.name) !== null && ref !== void 0 ? ref : asset.nft_name) !== null && ref1 !== void 0 ? ref1 : asset.nft_platform_name) !== null && ref2 !== void 0 ? ref2 : '',
        description: (ref3 = payload === null || payload === void 0 ? void 0 : payload.description) !== null && ref3 !== void 0 ? ref3 : '',
        mediaUrl: (ref4 = payload === null || payload === void 0 ? void 0 : payload.image) !== null && ref4 !== void 0 ? ref4 : '',
        owner: (_nft_holder = asset.nft_holder) !== null && _nft_holder !== void 0 ? _nft_holder : ''
    }, asset.token_id);
}
class NFTScanAPI {
    async getContractBalance(address) {
        const response = await fetchAsset('getGroupByNftContract', {
            erc: 'erc721',
            user_address: address
        });
        if (!(response === null || response === void 0 ? void 0 : response.data)) return [];
        return response.data.map((x)=>{
            const contractDetailed = (0,utils_token/* createERC721ContractDetailed */.ek)(types/* ChainId.Mainnet */.a_.Mainnet, x.nft_contract_address, x.nft_platform_name, undefined, undefined, x.nft_platform_image);
            const balance = x.nft_asset.length;
            return {
                contractDetailed,
                balance
            };
        }).sort((a, b)=>a.balance - b.balance
        );
    }
    async getToken(address, tokenId, chainId) {
        const response = await fetchAsset('getSingleNft', {
            nft_address: address,
            token_id: tokenId
        });
        if (!response) return;
        return createERC721TokenAsset(response.data);
    }
    async getTokens(from, { chainId =types/* ChainId.Mainnet */.a_.Mainnet , page =0 , size =50 , pageInfo  }) {
        var ref;
        const response = await fetchAsset('getAllNftByUserAddress', {
            page_size: size,
            page_index: page + 1,
            user_address: from,
            erc: (ref = pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.type) !== null && ref !== void 0 ? ref : 'erc721'
        });
        if (!(response === null || response === void 0 ? void 0 : response.data)) return {
            data: [],
            hasNextPage: false
        };
        const data = response.data.content.map(createERC721TokenAsset);
        const total = response.data.total;
        return {
            data,
            hasNextPage: total - (page + 1) * size > 0
        };
    }
}
function getNFTScanNFTList(address) {
    const nftScanAPI = new NFTScanAPI();
    return nftScanAPI.getContractBalance(address);
}
function getNFTScanNFTs(address, type, page, size) {
    const nftScanAPI = new NFTScanAPI();
    return nftScanAPI.getTokens(address, {
        page,
        size,
        pageInfo: {
            type
        }
    });
}

;// CONCATENATED MODULE: ../web3-providers/src/explorer/helpers.ts
function toTransaction(transaction) {
    return {
        nonce: Number.parseInt(transaction.nonce, 10),
        blockHash: transaction.blockHash,
        blockNumber: Number.parseInt(transaction.blockNumber, 10),
        from: transaction.from,
        to: transaction.to,
        gas: Number.parseInt(transaction.gas, 10),
        gasPrice: transaction.gasPrice,
        hash: transaction.hash,
        input: transaction.input,
        transactionIndex: Number.parseInt(transaction.transactionIndex, 10),
        value: transaction.value,
        status: transaction.txreceipt_status,
        confirmations: Number.parseInt(transaction.confirmations, 10)
    };
}

;// CONCATENATED MODULE: ../web3-providers/src/explorer/index.ts


class NativeExplorerAPI {
    async getLatestTransactions(account, url, { offset =10 , apikey  } = {}) {
        var ref;
        const response = await fetch(dist_default()(url, {
            module: 'account',
            action: 'txlist',
            address: account.toLowerCase(),
            startBlock: 0,
            endblock: 999999999999,
            page: 1,
            offset,
            sort: 'desc',
            apikey
        }));
        const rawTransactions = await response.json();
        var ref1;
        return (ref1 = (ref = rawTransactions.result) === null || ref === void 0 ? void 0 : ref.map(toTransaction)) !== null && ref1 !== void 0 ? ref1 : [];
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/rss3-next@0.6.17_typescript@4.6.0-dev.20211202/node_modules/rss3-next/dist/browser/RSS3.js
var RSS3 = __webpack_require__(18632);
var RSS3_default = /*#__PURE__*/__webpack_require__.n(RSS3);
;// CONCATENATED MODULE: ../web3-providers/src/rss3/constants.ts
const RSS3_ENDPOINT = 'https://hub.pass3.me';

;// CONCATENATED MODULE: ../web3-providers/src/types.ts
var RSS3BaseAPI;
(function(RSS3BaseAPI1) {
    let AssetType;
    (function(AssetType) {
        AssetType["GitcoinDonation"] = 'Gitcoin-Donation';
        AssetType["POAP"] = 'POAP';
        AssetType["NFT"] = 'NFT';
    })(AssetType = RSS3BaseAPI1.AssetType || (RSS3BaseAPI1.AssetType = {}));
})(RSS3BaseAPI || (RSS3BaseAPI = {}));
var NonFungibleTokenAPI;
(function(NonFungibleTokenAPI1) {
    let OrderSide;
    (function(OrderSide) {
        OrderSide[OrderSide["Buy"] = 0] = "Buy";
        OrderSide[OrderSide["Sell"] = 1] = "Sell";
    })(OrderSide = NonFungibleTokenAPI1.OrderSide || (NonFungibleTokenAPI1.OrderSide = {}));
})(NonFungibleTokenAPI || (NonFungibleTokenAPI = {}));

;// CONCATENATED MODULE: ../web3-providers/src/rss3/index.ts





class RSS3API {
    createRSS3(address, sign = ()=>{
        throw new Error('Not supported.');
    }) {
        return new (RSS3_default())({
            endpoint: RSS3_ENDPOINT,
            address,
            sign
        });
    }
    async getFileData(rss3, address, key) {
        const file = await rss3.files.get(address);
        if (!file) throw new Error('The account was not found.');
        const descriptor = Object.getOwnPropertyDescriptor(file, key);
        return descriptor === null || descriptor === void 0 ? void 0 : descriptor.value;
    }
    async setFileData(rss3, address, key, data) {
        const file = await rss3.files.get(address);
        if (!file) throw new Error('The account was not found.');
        const descriptor = Object.getOwnPropertyDescriptor(file, key);
        const value = {
            ...descriptor === null || descriptor === void 0 ? void 0 : descriptor.value,
            ...data
        };
        rss3.files.set(Object.assign(file, {
            [key]: value
        }));
        await rss3.files.sync();
        return value;
    }
    async getDonations(address) {
        const url = dist_default()(RSS3_ENDPOINT, '/assets/list', {
            personaID: address,
            type: RSS3BaseAPI.AssetType.GitcoinDonation
        });
        return fetchJSON(url);
    }
    async getFootprints(address) {
        const url = dist_default()(RSS3_ENDPOINT, '/assets/list', {
            personaID: address,
            type: RSS3BaseAPI.AssetType.POAP
        });
        return fetchJSON(url);
    }
    async getNameInfo(id) {
        if (!id) return;
        const url = dist_default()('https://rss3.domains/name/:id', {
            id
        });
        return fetchJSON(url);
    }
    async getProfileInfo(address) {
        if (!address) return;
        const url = dist_default()(RSS3_ENDPOINT, '/:address', {
            address
        });
        const rsp = await fetchJSON(url);
        return rsp === null || rsp === void 0 ? void 0 : rsp.profile;
    }
    async getAssets(address) {
        const url = dist_default()(RSS3_ENDPOINT, '/assets/list', {
            personaID: address,
            type: RSS3BaseAPI.AssetType.NFT
        });
        const { status , assets =[]  } = await fetchJSON(url);
        if (!status) return [];
        return assets.map((asset)=>{
            var _image_preview_url, _title, _collection, _animation_url;
            return {
                is_verified: false,
                is_auction: false,
                image_url: (_image_preview_url = asset.info.image_preview_url) !== null && _image_preview_url !== void 0 ? _image_preview_url : '',
                asset_contract: null,
                current_price: null,
                current_symbol: '',
                owner: null,
                creator: null,
                token_id: asset.id.substr(asset.id.lastIndexOf('-') + 1),
                token_address: asset.id.substr(0, asset.id.indexOf('-')),
                traits: [],
                safelist_request_status: '',
                description: '',
                name: (_title = asset.info.title) !== null && _title !== void 0 ? _title : '',
                collection_name: (_collection = asset.info.collection) !== null && _collection !== void 0 ? _collection : '',
                animation_url: (_animation_url = asset.info.animation_url) !== null && _animation_url !== void 0 ? _animation_url : '',
                end_time: asset.info.end_date ? new Date(asset.info.end_date) : null,
                order_payment_tokens: [],
                offer_payment_tokens: [],
                slug: null,
                top_ownerships: [],
                response_: asset,
                last_sale: null
            };
        });
    }
}

;// CONCATENATED MODULE: ../web3-providers/src/kv/constants.ts
const KV_ROOT_URL = 'https://kv.r2d2.to';

;// CONCATENATED MODULE: ../web3-providers/src/kv/index.ts



class JSON_Storage {
    async set(key, value) {
        await fetch(dist_default()(KV_ROOT_URL, 'api/:name', {
            name: `${this.prefix}_${key}`
        }), {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        });
    }
    async get(key) {
        try {
            return fetchJSON(dist_default()(KV_ROOT_URL, 'api/:name', {
                name: `${this.prefix}_${key}`
            }), {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch  {
            return;
        }
    }
    constructor(prefix){
        this.prefix = prefix;
    }
}
class KeyValueAPI {
    createJSON_Storage(key) {
        return new JSON_Storage(key);
    }
}

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ../web3-constants/evm/debank.json
var debank = __webpack_require__(60816);
;// CONCATENATED MODULE: ../web3-providers/src/debank/format.ts




function format_formatAssets(data) {
    const supportedChains = Object.values(DeBank.CHAIN_ID).filter(Boolean);
    return data.filter((x)=>x.is_verified
    ).map((y)=>{
        var ref;
        const chainIdFromChain = (ref = getChainIdFromName(y.chain)) !== null && ref !== void 0 ? ref : ChainId.Mainnet;
        const address = supportedChains.includes(y.id) ? createNativeToken(chainIdFromChain).address : y.id;
        var _price;
        return {
            id: address,
            chainId: chainIdFromChain,
            token: {
                id: address,
                address: address,
                chainId: chainIdFromChain,
                type: TokenType.Fungible,
                decimals: y.decimals,
                name: y.name,
                symbol: y.symbol,
                logoURI: y.logo_url
            },
            balance: rightShift(y.amount, y.decimals).toFixed(),
            price: {
                [CurrencyType.USD]: toFixed(y.price)
            },
            value: {
                [CurrencyType.USD]: multipliedBy((_price = y.price) !== null && _price !== void 0 ? _price : 0, y.amount).toFixed()
            },
            logoURI: y.logo_url
        };
    });
}

;// CONCATENATED MODULE: ../web3-providers/src/debank/index.ts


const DEBANK_OPEN_API = 'https://openapi.debank.com';
async function getAssetListFromDebank(address) {
    const response = await fetch(urlcat(DEBANK_OPEN_API, '/v1/user/token_list', {
        is_all: true,
        has_balance: true,
        id: address.toLowerCase()
    }));
    try {
        var ref;
        const result = (ref = await response.json()) !== null && ref !== void 0 ? ref : [];
        return formatAssets(result);
    } catch  {
        return [];
    }
}

;// CONCATENATED MODULE: ../web3-providers/src/index.ts









const OpenSea = new OpenSeaAPI();
const Rarible = new RaribleAPI();
const NFTScan = new NFTScanAPI();
const CoinGecko = new CoinGeckoAPI();
const Explorer = new NativeExplorerAPI();
const src_RSS3 = new RSS3API();
const KeyValue = new KeyValueAPI();
// Method for provider proxy






/***/ })

}]);