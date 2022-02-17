"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5357],{

/***/ 35357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "createBuyOrder": () => (/* reexport */ createBuyOrder),
  "createSellOrder": () => (/* reexport */ createSellOrder),
  "fulfillOrder": () => (/* reexport */ fulfillOrder),
  "getAsset": () => (/* reexport */ getAsset),
  "getEvents": () => (/* reexport */ getEvents),
  "getHistoryFromRarible": () => (/* reexport */ getHistoryFromRarible),
  "getListingsFromRarible": () => (/* reexport */ getListingsFromRarible),
  "getNFTItem": () => (/* reexport */ getNFTItem),
  "getOffersFromRarible": () => (/* reexport */ getOffersFromRarible),
  "getOrderFromRarbile": () => (/* reexport */ getOrderFromRarbile),
  "getOrders": () => (/* reexport */ getOrders),
  "getProfilesFromRarible": () => (/* reexport */ getProfilesFromRarible)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/opensea-js@1.1.11/node_modules/opensea-js/lib/index.js
var lib = __webpack_require__(13736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumService.ts + 13 modules
var EthereumService = __webpack_require__(51968);
// EXTERNAL MODULE: ./src/plugins/Collectible/pipes/index.ts
var pipes = __webpack_require__(3362);
// EXTERNAL MODULE: ./src/plugins/Collectible/constants.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8846.js
var constants = __webpack_require__(10794);
=======
var constants = __webpack_require__(21542);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5357.js
;// CONCATENATED MODULE: ./src/plugins/Collectible/queries/OpenSea.ts
const OpenSeaEventHistoryQuery = `
    query EventHistoryQuery(
        $archetype: ArchetypeInputType
        $bundle: BundleSlug
        $collections: [CollectionSlug!]
        $categories: [CollectionSlug!]
        $eventTypes: [EventType!]
        $cursor: String
        $count: Int = 10
        $showAll: Boolean = false
        $identity: IdentityInputType
    ) {
        ...EventHistory_data_3WnwJ9
    }

    fragment AccountLink_data on AccountType {
        address
        chain {
            identifier
            id
        }
        user {
            publicUsername
            id
        }
        ...ProfileImage_data
        ...wallet_accountKey
    }

    fragment AssetCell_asset on AssetType {
        collection {
            name
            id
        }
        name
        ...AssetMedia_asset
        ...asset_url
    }

    fragment AssetCell_assetBundle on AssetBundleType {
        assetQuantities(first: 2) {
            edges {
                node {
                    asset {
                        collection {
                            name
                            id
                        }
                        name
                        ...AssetMedia_asset
                        ...asset_url
                        id
                    }
                    relayId
                    id
                }
            }
        }
        name
        slug
    }

    fragment AssetMedia_asset on AssetType {
        animationUrl
        backgroundColor
        collection {
            description
            displayData {
                cardDisplayStyle
            }
            imageUrl
            hidden
            name
            slug
            id
        }
        description
        name
        tokenId
        imageUrl
    }

    fragment AssetQuantity_data on AssetQuantityType {
        asset {
            ...Price_data
            id
        }
        quantity
    }

    fragment EventHistory_data_3WnwJ9 on Query {
        assetEvents(
            after: $cursor
            bundle: $bundle
            archetype: $archetype
            first: $count
            categories: $categories
            collections: $collections
            eventTypes: $eventTypes
            identity: $identity
            includeHidden: true
        ) {
            edges {
                node {
                    assetBundle @include(if: $showAll) {
                        ...AssetCell_assetBundle
                        id
                    }
                    assetQuantity {
                        asset @include(if: $showAll) {
                            ...AssetCell_asset
                            id
                        }
                        ...quantity_data
                        id
                    }
                    relayId
                    eventTimestamp
                    eventType
                    customEventName
                    devFee {
                        quantity
                        ...AssetQuantity_data
                        id
                    }
                    devFeePaymentEvent {
                        ...EventTimestamp_data
                        id
                    }
                    fromAccount {
                        address
                        ...AccountLink_data
                        id
                    }
                    price {
                        quantity
                        ...AssetQuantity_data
                        id
                    }
                    endingPrice {
                        quantity
                        ...AssetQuantity_data
                        id
                    }
                    seller {
                        ...AccountLink_data
                        id
                    }
                    toAccount {
                        ...AccountLink_data
                        id
                    }
                    winnerAccount {
                        ...AccountLink_data
                        id
                    }
                    ...EventTimestamp_data
                    id
                    __typename
                }
                cursor
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }

    fragment EventTimestamp_data on AssetEventType {
        eventTimestamp
        transaction {
            blockExplorerLink
            id
        }
    }

    fragment Price_data on AssetType {
        decimals
        imageUrl
        symbol
        usdSpotPrice
        assetContract {
            blockExplorerLink
            id
        }
    }

    fragment ProfileImage_data on AccountType {
        imageUrl
        address
        chain {
            identifier
            id
        }
    }

    fragment asset_url on AssetType {
        assetContract {
            account {
                address
                chain {
                    identifier
                    id
                }
                id
            }
            id
        }
        tokenId
    }

    fragment quantity_data on AssetQuantityType {
        asset {
            decimals
            id
        }
        quantity
    }

    fragment wallet_accountKey on AccountType {
        address
        chain {
            identifier
            id
        }
    }
`;

// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(93975);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/Collectible/apis/opensea.ts










function createExternalProvider() {
    return {
        isMetaMask: false,
        isStatus: true,
        host: '',
        path: '',
        sendAsync: EthereumService.requestSend,
        send: EthereumService.requestSend,
        request: EthereumService.request
    };
}
async function createOpenSeaPort() {
    const chainId = settings/* currentChainIdSettings.value */.wU.value;
    return new lib/* OpenSeaPort */.I2(createExternalProvider(), {
        networkName: (0,pipes/* resolveOpenSeaNetwork */.q0)(chainId),
        apiKey: constants/* OpenSeaAPI_Key */.SP
    }, console.log);
}
async function createOpenSeaAPI() {
    const chainId = settings/* currentChainIdSettings.value */.wU.value;
    if (![
        src/* ChainId.Mainnet */.a_e.Mainnet,
        src/* ChainId.Rinkeby */.a_e.Rinkeby
    ].includes(chainId)) throw new Error(`${(0,src/* getChainName */.qzE)(chainId)} is not supported.`);
    return chainId === src/* ChainId.Mainnet */.a_e.Mainnet ? constants/* OpenSeaBaseURL */.kP : constants/* OpenSeaRinkebyBaseURL */.OW;
}
async function getAsset(tokenAddress, tokenId) {
    var ref;
    const sdkResponse = await (await createOpenSeaPort()).api.getAsset({
        tokenAddress,
        tokenId
    });
    const fetchResponse = await (await fetch(dist_default()(await createOpenSeaAPI(), '/asset/:tokenAddress/:tokenId', {
        tokenAddress,
        tokenId
    }), {
        mode: 'cors',
        headers: {
            'x-api-key': constants/* OpenSeaAPI_Key */.SP
        }
    })).json();
    const endTime = (ref = (0,lodash.head)(fetchResponse.orders.filter((item)=>item.side === 1 && item.closing_extendable
    ))) === null || ref === void 0 ? void 0 : ref.closing_date;
    return {
        ...sdkResponse,
        ...fetchResponse,
        owner: fetchResponse.owner,
        orders: sdkResponse.orders,
        assetContract: sdkResponse.assetContract,
        endTime
    };
}
async function getEvents(asset_contract_address, token_id, cursor, count = 10) {
    const query = {
        id: 'EventHistoryQuery',
        query: OpenSeaEventHistoryQuery,
        variables: {
            archetype: {
                assetContractAddress: asset_contract_address,
                tokenId: token_id
            },
            bundle: null,
            collections: null,
            categories: null,
            eventTypes: null,
            cursor: cursor,
            count,
            showAll: false,
            identity: null
        }
    };
    const response = await fetch(constants/* OpenSeaGraphQLURL */.cj, {
        method: 'POST',
        body: json_stable_stringify_default()(query)
    });
    const { data  } = await response.json();
    return data.assetEvents;
}
async function getOrders(asset_contract_address, token_id, side, opts = {
    pageNum: 1,
    count: 10
}) {
    return (await createOpenSeaPort()).api.getOrders({
        asset_contract_address,
        token_id,
        side,
        limit: opts.count,
        offset: opts.count * opts.pageNum
    });
}
async function createBuyOrder(payload) {
    return (await createOpenSeaPort()).createBuyOrder({
        referrerAddress: constants/* ReferrerAddress */.E8,
        ...payload
    });
}
async function createSellOrder(payload) {
    return (await createOpenSeaPort()).createSellOrder(payload);
}
async function fulfillOrder(payload) {
    return (await createOpenSeaPort()).fulfillOrder({
        referrerAddress: constants/* ReferrerAddress */.E8,
        ...payload
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/opensea-js@1.1.11/node_modules/opensea-js/lib/types.js
var types = __webpack_require__(93986);
// EXTERNAL MODULE: ./src/plugins/Collectible/helpers.ts + 1 modules
var helpers = __webpack_require__(94051);
;// CONCATENATED MODULE: ./src/plugins/Collectible/apis/rarible.ts








async function fetchFromRarible(root, subPath, config = {
}) {
    const response = await (await fetch(dist_default()(root, subPath), {
        mode: 'cors',
        ...config
    })).json();
    return response;
}
async function getProfilesFromRarible(addresses) {
    return fetchFromRarible(constants/* RaribleChainURL */.Jv, 'profiles/list', {
        method: 'POST',
        body: json_stable_stringify_default()(addresses),
        headers: {
            'content-type': 'application/json'
        }
    });
}
async function getNFTItem(tokenAddress, tokenId) {
    const assetResponse = await fetchFromRarible(constants/* RaribleChainURL */.Jv, dist_default()('/v0.1/nft/items/:tokenAddress::tokenId', {
        includeMeta: true,
        tokenAddress,
        tokenId
    }), {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    return assetResponse;
}
async function getOffersFromRarible(tokenAddress, tokenId) {
    const orders = await fetchFromRarible(constants/* RaribleChainURL */.Jv, `items/${tokenAddress}:${tokenId}/offers`);
    const profiles = await getProfilesFromRarible(orders.map((item)=>item.owner
    ));
    const chainId = settings/* currentChainIdSettings.value */.wU.value;
    return orders.map((order)=>{
        const ownerInfo = profiles.find((owner)=>owner.id === order.owner
        );
        var ref;
        return {
            unitPrice: order.buyPriceEth,
            hash: order.signature,
            makerAccount: {
                user: {
                    username: ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.name
                },
                address: ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.id,
                profile_img_url: (0,helpers/* toRaribleImage */.HV)(ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.image),
                link: `${(0,pipes/* resolveRaribleUserNetwork */.gV)(chainId)}${(ref = ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.id) !== null && ref !== void 0 ? ref : ''}`
            }
        };
    });
}
async function getListingsFromRarible(tokenAddress, tokenId, owners) {
    const assets = await fetchFromRarible(constants/* RaribleChainURL */.Jv, 'ownerships/list', {
        method: 'POST',
        body: json_stable_stringify_default()(owners.map((owner)=>`${tokenAddress}:${tokenId}:${owner}`
        )),
        headers: {
            'content-type': 'application/json'
        }
    });
    const profiles = await getProfilesFromRarible(owners);
    const chainId = settings/* currentChainIdSettings.value */.wU.value;
    return assets.map((asset)=>{
        const ownerInfo = profiles.find((owner)=>owner.id === asset.ownership.owner
        );
        var ref;
        return {
            unitPrice: asset.ownership.priceEth,
            hash: asset.ownership.signature,
            makerAccount: {
                user: {
                    username: ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.name
                },
                address: ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.id,
                profile_img_url: (0,helpers/* toRaribleImage */.HV)(ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.image),
                link: `${(0,pipes/* resolveRaribleUserNetwork */.gV)(chainId)}${(ref = ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.id) !== null && ref !== void 0 ? ref : ''}`
            }
        };
    }).filter((item)=>item.unitPrice
    );
}
async function getOrderFromRarbile(tokenAddress, tokenId, side) {
    switch(side){
        case types.OrderSide.Buy:
            return getOffersFromRarible(tokenAddress, tokenId);
        case types.OrderSide.Sell:
            const asset = (0,lodash.head)(await fetchFromRarible(constants/* RaribleChainURL */.Jv, 'items/map', {
                method: 'POST',
                body: json_stable_stringify_default()([
                    `${tokenAddress}:${tokenId}`
                ]),
                headers: {
                    'content-type': 'application/json'
                }
            }));
            return getListingsFromRarible(tokenAddress, tokenId, []);
        default:
            return [];
    }
}
async function getHistoryFromRarible(tokenAddress, tokenId) {
    const histories = await fetchFromRarible(constants/* RaribleChainURL */.Jv, `items/${tokenAddress}:${tokenId}/history`);
    const profiles = await getProfilesFromRarible((0,lodash.compact)([
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
        return {
            ...history,
            ownerInfo,
            fromInfo
        };
    });
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/apis/index.ts



;// CONCATENATED MODULE: ./src/plugins/Collectible/services.ts



/***/ })

}]);