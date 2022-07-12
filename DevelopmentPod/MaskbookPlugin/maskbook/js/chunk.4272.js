"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4272],{

/***/ 44272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(70186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(60647);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/VerifiedUser.js
var VerifiedUser = __webpack_require__(89009);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/CollectibleTab.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()({
    root: {
        width: '100%',
        height: '100%',
        borderRadius: 0,
        overflow: 'auto'
    }
});
function CollectibleTab(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        ...props.CardProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
            className: classes.content,
            children: props.children
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/opensea-js@1.2.7_webpack-cli@4.10.0/node_modules/opensea-js/lib/types.js
var types = __webpack_require__(24860);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/types/index.ts
var TabState;
(function(TabState) {
    TabState[TabState["ARTICLE"] = 0] = "ARTICLE";
    TabState[TabState["TOKEN"] = 1] = "TOKEN";
    TabState[TabState["OFFER"] = 2] = "OFFER";
    TabState[TabState["HISTORY"] = 3] = "HISTORY";
})(TabState || (TabState = {}));
var TransactionType;
(function(TransactionType) {
    TransactionType["BID_WITHDRAW"] = 'Bid Withdrawn';
    TransactionType["SETTLED"] = 'Settled';
    TransactionType["BID_PLACED"] = 'Bid Placed';
    TransactionType["ON_SALE"] = 'On Sale';
    TransactionType["EDITION_CREATED"] = 'Edition Created';
})(TransactionType || (TransactionType = {}));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants = __webpack_require__(47104);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var evm_types = __webpack_require__(72499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/escapeRegExp.js
var escapeRegExp = __webpack_require__(39345);
// EXTERNAL MODULE: ./src/plugins/CryptoartAI/constants.ts
var CryptoartAI_constants = __webpack_require__(92890);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/utils.ts




function checkUrl(url) {
    const protocol = 'https://';
    const _url = new URL(url.startsWith(protocol) ? url : protocol + url);
    return [
        CryptoartAI_constants/* mainNetwork.hostname */.f3.hostname,
        CryptoartAI_constants/* testNetwork.hostname */.aM.hostname
    ].includes(_url.hostname.replace(/^www\./, '')) && _url.pathname.includes(CryptoartAI_constants/* prefixPath */.oO);
}
function getRelevantUrl(textContent) {
    const urls = (0,shared_base_src/* parseURL */.Lk)(textContent);
    return urls.find(checkUrl);
}
function getAssetInfoFromURL(url) {
    if (!url) return null;
    const addresses = {
        [evm_types/* ChainId.Kovan */.a_.Kovan]: CryptoartAI_constants/* testNetwork.contractAddress */.aM.contractAddress,
        [evm_types/* ChainId.Mainnet */.a_.Mainnet]: CryptoartAI_constants/* mainNetwork.contractAddress */.f3.contractAddress
    };
    const { hostname , pathname  } = new URL(url);
    const pattern = new RegExp(`^${(0,escapeRegExp/* default */.Z)(CryptoartAI_constants/* prefixPath */.oO)}${/\/([^/]+)\/(\d+)/.source}$`, 'g');
    const matched = pattern.exec(pathname);
    if (!matched) {
        return null // early return
        ;
    }
    const chain_id = hostname === CryptoartAI_constants/* testNetwork.hostname */.aM.hostname ? evm_types/* ChainId.Kovan */.a_.Kovan : evm_types/* ChainId.Mainnet */.a_.Mainnet;
    const creator = matched[1];
    const token_id = matched[2];
    const contractAddress = addresses[chain_id];
    return {
        chain_id,
        creator,
        token_id,
        contractAddress
    };
}
function toTokenIdentifier(token) {
    if (!token) return '';
    return `${token.contractAddress}_${token.tokenId}`;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/pipes/index.ts



function resolveAPILinkOnCryptoartAI(chainId) {
    if (chainId === evm_types/* ChainId.Kovan */.a_.Kovan) {
        return CryptoartAI_constants/* testNetwork.endpoint */.aM.endpoint;
    }
    return CryptoartAI_constants/* mainNetwork.endpoint */.f3.endpoint;
}
function resolveWebLinkOnCryptoartAI(chainId) {
    if (chainId === evm_types/* ChainId.Kovan */.a_.Kovan) {
        return `https://${CryptoartAI_constants/* testNetwork.hostname */.aM.hostname}`;
    }
    return `https://${CryptoartAI_constants/* mainNetwork.hostname */.f3.hostname}`;
}
function resolveAssetLinkOnCryptoartAI(creator, token_id, chainId) {
    return dist_default()(resolveWebLinkOnCryptoartAI(chainId), `${CryptoartAI_constants/* prefixPath */.oO}/:creator/:token_id`, {
        creator: encodeURI(creator),
        token_id
    });
}
function resolvePaymentTokensOnCryptoartAI(chainId) {
    if (chainId === evm_types/* ChainId.Kovan */.a_.Kovan) {
        return [
            CryptoartAI_constants/* testNetwork.paymentToken */.aM.paymentToken
        ];
    }
    return [
        CryptoartAI_constants/* mainNetwork.paymentToken */.f3.paymentToken
    ];
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/apis/index.ts




async function getAsset(tokenId, chainId) {
    const ownersResponse = await (await fetch(dist_default()(resolveAPILinkOnCryptoartAI(chainId), '/api/artwork/current/owners/:tokenId', {
        tokenId
    }), {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json'
        }
    })).json();
    const tradeResponse = await (await fetch(dist_default()(resolveAPILinkOnCryptoartAI(chainId), '/api/artwork/tradeInfo/:tokenId', {
        tokenId
    }), {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json'
        }
    })).json();
    const fetchResponse = await (await fetch(dist_default()(resolveAPILinkOnCryptoartAI(chainId), '/api/artwork/detail'), {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            artworkId: tokenId,
            ethAddress: ''
        })
    })).json();
    return {
        ...fetchResponse.data,
        owners: ownersResponse.data && ownersResponse.data.length === 0 && fetchResponse.data.creatorInfo ? [
            {
                ownerAddress: fetchResponse.data.creatorInfo.ethAddress,
                ownerName: fetchResponse.data.creatorInfo.username,
                ownerAvatar: fetchResponse.data.creatorInfo.avatarPath,
                ownerRoleType: fetchResponse.data.creatorInfo.roleType
            }, 
        ] : ownersResponse.data,
        trade: tradeResponse.data
    };
}
async function getEvents(tokenId, chainId) {
    const historyResponse = await (await fetch(dist_default()(resolveAPILinkOnCryptoartAI(chainId), '/api/artwork/recent/history/:tokenId', {
        tokenId
    }), {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json'
        }
    })).json();
    return historyResponse.data;
}
async function getOrders(tokenId, side = types.OrderSide.Buy, chainId) {
    const tradeResponse = await (await fetch(dist_default()(resolveAPILinkOnCryptoartAI(chainId), '/api/artwork/tradeInfo/:tokenId', {
        tokenId
    }), {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json'
        }
    })).json();
    const filterType = [
        TransactionType.BID_PLACED,
        TransactionType.BID_WITHDRAW,
        TransactionType.SETTLED
    ];
    const historyResponse = (await getEvents(tokenId, chainId)).filter((event)=>{
        return filterType.includes(event.transactionType);
    }).map((event, idx)=>{
        event.status = 'Expired';
        if (event.transactionType === TransactionType.BID_WITHDRAW) event.status = 'Withdrawn';
        else if (event.transactionType === TransactionType.SETTLED) event.status = 'Settled';
        return event;
    });
    return {
        trade: tradeResponse.data,
        history: historyResponse.map((event, idx)=>{
            if (idx === 0 && event.transactionType === TransactionType.BID_PLACED) {
                event.status = 'Active';
            }
            return event;
        })
    };
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/hooks/useAsset.ts






function useAsset(token) {
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!token) return;
        const assetResponse = await getAsset(token.tokenId, chainId);
        return {
            owner: assetResponse.owners,
            trade: assetResponse.trade,
            is_owner: assetResponse.owners.some((owner)=>(0,src/* isSameAddress */.Wr)(owner.ownerAddress, account)
            ),
            creator: assetResponse.creatorInfo,
            token_id: assetResponse.id,
            title: assetResponse.title,
            description: assetResponse.description,
            ossUrl: assetResponse.ossUrl,
            ossUrlCompress: assetResponse.ossUrlCompress,
            shareUrl: assetResponse.shareUrl,
            priceInWei: assetResponse.priceInWei,
            priceInEth: assetResponse.priceInEth,
            lowestAuctionPriceWei: assetResponse.lowestAuctionPriceWei,
            lowestAuctionPriceEth: assetResponse.lowestAuctionPriceEth,
            isEnableAuction: assetResponse.isEnableAuction,
            totalAvailable: assetResponse.totalAvailable,
            rareType: assetResponse.rareType,
            artistCommission: assetResponse.artistCommission,
            tokenUri: assetResponse.tokenUri,
            editionType: assetResponse.editionType,
            editionNumber: assetResponse.editionNumber,
            metadataContentLength: assetResponse.metadataContentLength,
            metadataContentType: assetResponse.metadataContentType,
            metadateColorModel: assetResponse.metadateColorModel,
            metadataHasAlpha: assetResponse.metadataHasAlpha,
            metadataPixelWidth: assetResponse.metadataPixelWidth,
            metadataPixelHeight: assetResponse.metadataPixelHeight,
            viewCount: assetResponse.viewCount,
            createTime: assetResponse.createTime,
            soldNum: assetResponse.soldNum,
            totalSurplus: assetResponse.totalSurplus,
            labelList: assetResponse.labelList,
            priceInUsd: assetResponse.priceInUsd,
            likeNum: assetResponse.likeNum,
            hasLike: assetResponse.hasLike,
            linkWithCreation: assetResponse.linkWithCreation,
            linkWithIpfs: assetResponse.linkWithIpfs,
            latestBidVo: assetResponse.latestBidVo,
            bidVoList: assetResponse.bidVoList,
            auditStatus: assetResponse.auditStatus,
            auditReason: assetResponse.auditReason,
            isSoldOut: assetResponse.isSoldOut,
            is24Auction: assetResponse.is24Auction,
            isCreateSplit: assetResponse.isCreateSplit,
            splitList: assetResponse.splitList,
            auctionId: assetResponse.auctionId,
            onSales: assetResponse.onSales,
            startTimestamp24Auction: assetResponse.startTimestamp24Auction,
            is_auction: false
        };
    }, [
        toTokenIdentifier(token),
        account,
        chainId,
        WNATIVE_ADDRESS
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/hooks/useOrders.ts






function useOrders(token, side = types.OrderSide.Buy) {
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!token) return;
        const tradeResponse = await getOrders(token.tokenId, side, chainId);
        return {
            trade: tradeResponse.trade,
            history: tradeResponse.history
        };
    }, [
        chainId,
        toTokenIdentifier(token)
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/hooks/useEvents.ts





function useEvents(token) {
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!token) {
            return {
                data: []
            };
        }
        const assetEvents = await getEvents(token.tokenId, chainId);
        return {
            data: assetEvents.map((event)=>{
                return {
                    avatarPath: event.avatarPath,
                    award: event.award,
                    createTime: event.createTime,
                    operatorAddress: event.operatorAddress,
                    operatorName: event.operatorName,
                    operatorNikeName: event.operatorNikeName,
                    priceInEth: event.priceInEth,
                    priceInUsd: event.priceInUsd,
                    transactionType: event.transactionType,
                    transactionTypeName: event.transactionTypeName,
                    transactionUrl: event.transactionUrl
                };
            })
        };
    }, [
        chainId,
        toTokenIdentifier(token)
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/hooks/useCollectibleState.ts







function useCollectibleState(token) {
    const [tabIndex, setTabIndex] = (0,react.useState)(TabState.ARTICLE);
    const asset = useAsset(token);
    const offers = useOrders(tabIndex === TabState.OFFER ? token : undefined, types.OrderSide.Buy);
    const events = useEvents(token);
    return {
        token,
        asset,
        tabIndex,
        setTabIndex,
        offers,
        events,
        chainId: token?.chainId
    };
}
const CollectibleState = (0,unstated_next/* createContainer */.f)(useCollectibleState);

// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/ArticleTab.tsx





const ArticleTab_useStyles = (0,entry/* makeStyles */.ZL)()({
    body: {
        display: 'flex',
        justifyContent: 'center',
        height: '300px'
    },
    player: {
        maxWidth: '100%',
        maxHeight: '100%',
        border: 'none'
    },
    iframe: {
        minWidth: 300,
        minHeight: 300
    }
});
function ArticleTab(props) {
    const { classes  } = ArticleTab_useStyles();
    const { asset  } = CollectibleState.useContainer();
    if (!asset.value) return null;
    const resourceUrl = asset.value.ossUrl || asset.value.ossUrlCompress || asset.value.shareUrl;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.body,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                url: resourceUrl,
                classes: {
                    wrapper: classes.player,
                    iframe: classes.iframe
                }
            })
        })
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx + 1 modules
var Markdown = __webpack_require__(34430);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/Account.tsx




function Account({ address , username  }) {
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: (0,src/* isSameAddress */.Wr)(account, address ?? '') ? t('plugin_collectible_you') : username || address?.slice(2, 8)
    });
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/TokenTab.tsx














const TokenTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            paddingTop: 0,
            paddingBottom: '0 !important'
        },
        container: {
            padding: theme.spacing(1)
        },
        markdown: {
            margin: theme.spacing(1, 0)
        },
        description: {
            fontSize: 14,
            wordBreak: 'break-all'
        },
        trait_content: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: theme.spacing(2)
        },
        trait: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 14,
            fontWeight: 600
        },
        chain_row: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(0.5),
            '&:last-child': {
                marginBottom: 0
            }
        },
        edition_row: {
            display: 'flex',
            marginBottom: theme.spacing(0.5)
        },
        tokenId: {
            maxWidth: 112,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    };
});
function TokenTab(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = TokenTab_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { token , asset  } = CollectibleState.useContainer();
    const assetSource = (0,react.useMemo)(()=>{
        if (!asset.value || asset.error) return;
        return asset.value;
    }, [
        asset.value
    ]);
    if (!asset.value) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectibleTab, {
        classes: {
            content: classes.content
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_base')
                    }),
                    assetSource?.creator ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        children: [
                            t('plugin_collectible_create_by'),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolveWebLinkOnCryptoartAI(chainId) + '/' + assetSource?.creator.username,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                    address: assetSource?.creator.ethAddress,
                                    username: (0,formatter/* formatEthereumAddress */.j8)(assetSource?.creator.username, 4)
                                })
                            })
                        ]
                    }) : null,
                    assetSource?.owner[0] ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        children: [
                            t('plugin_collectible_owned_by'),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolveWebLinkOnCryptoartAI(chainId) + '/' + assetSource?.owner[0].ownerName,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                    address: assetSource?.owner[0]?.ownerAddress,
                                    username: (0,formatter/* formatEthereumAddress */.j8)(assetSource?.owner[0]?.ownerName, 4)
                                })
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_cryptoartai_description_title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                        classes: {
                            root: classes.markdown
                        },
                        content: assetSource?.description ?? ''
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_cryptoartai_edition')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.edition_row,
                        children: [
                            assetSource?.linkWithCreation ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body2",
                                style: {
                                    marginRight: '20px'
                                },
                                children: [
                                    t('plugin_collectible_view_on'),
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        href: assetSource?.linkWithCreation,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "\u039EEtherscan"
                                    })
                                ]
                            }) : null,
                            assetSource?.linkWithIpfs ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body2",
                                children: [
                                    t('plugin_collectible_view_on'),
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        href: assetSource?.linkWithIpfs,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "IPFS"
                                    })
                                ]
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_chain_info')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_contract_address')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolver/* explorerResolver.addressLink */.Nb.addressLink(chainId ?? evm_types/* ChainId.Mainnet */.a_.Mainnet, token?.contractAddress ?? ''),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                        address: token?.contractAddress ?? '',
                                        size: 4,
                                        formatter: formatter/* formatEthereumAddress */.j8
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_token_id')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.tokenId,
                                variant: "body2",
                                children: assetSource?.editionNumber
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_block_chain')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: resolver/* chainResolver.chainName */.VU.chainName(chainId)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(34085);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(9293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(9051);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(82302);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(66415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/truncate.js + 5 modules
var truncate = __webpack_require__(21186);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/OrderRow.tsx







const OrderRow_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        account: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1
        },
        avatar: {
            width: 18,
            height: 18
        },
        accountName: {
            marginLeft: theme.spacing(0.5),
            fontSize: 14,
            lineHeight: 1
        },
        relativeTime: {
            whiteSpace: 'nowrap'
        },
        token: {
            objectFit: 'contain',
            width: 18,
            height: 18,
            marginRight: theme.spacing(0.5)
        },
        tokenLink: {
            display: 'flex',
            alignItems: 'center'
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            lineHeight: 1
        },
        ethPrice: {
            display: 'flex',
            alignItems: 'center',
            fontWeight: 700
        },
        usdcPrice: {
            display: 'flex',
            alignItems: 'center',
            color: 'grey'
        }
    };
});
function OrderRow({ event , chainId  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = OrderRow_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: resolveWebLinkOnCryptoartAI(chainId) + '/' + event.operatorName,
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: event.avatarPath,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                username: (0,truncate/* default */.Z)(event.operatorName, {
                                    length: 13
                                }),
                                address: event.operatorAddress
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    variant: "body2",
                    children: event.status
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    variant: "body2",
                    children: event.createTime.slice(0, Math.max(0, event.createTime.length - 3))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.ethPrice,
                        variant: "body2",
                        children: [
                            event.priceInEth,
                            " \u039E"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.usdcPrice,
                        variant: "body2",
                        children: [
                            "($",
                            event.priceInUsd,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: event.transactionUrl,
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: t('plugin_cryptoartai_tx')
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableFooter/TableFooter.js + 1 modules
var TableFooter = __webpack_require__(39923);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/LoadingTable.tsx


function LoadingTable() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
        size: "small",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "rectangular",
                            width: "100%",
                            height: 22
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                children: Array.from({
                    length: 5
                }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                animation: "wave",
                                variant: "rectangular",
                                width: "100%",
                                height: 14
                            })
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableFooter/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "rectangular",
                            width: "100%",
                            height: 28
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/OfferTab.tsx











const OfferTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        content: {
            padding: '0 !important'
        },
        container: {
            padding: theme.spacing(2)
        },
        latest_bid: {
            maxWidth: 112,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        chain_row: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(0.5),
            '&:last-child': {
                marginBottom: 0
            }
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none'
        },
        button: {
            marginLeft: theme.spacing(1)
        }
    };
});
function OfferTab() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = OfferTab_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { asset , offers  } = CollectibleState.useContainer();
    const assetSource = (0,react.useMemo)(()=>{
        if (!asset.value || asset.error) return;
        return asset.value;
    }, [
        asset.value
    ]);
    const dataSource = (0,react.useMemo)(()=>{
        if (!offers.value || offers.error) return;
        return offers.value;
    }, [
        offers.value
    ]);
    if (offers.loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingTable, {});
    if (!offers.value || offers.error || dataSource?.history?.length <= 0) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
        size: "small",
        stickyHeader: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
            className: classes.empty,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                    className: classes.emptyCell,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            children: t('plugin_collectible_no_offers')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                marginTop: 1
                            },
                            variant: "text",
                            onClick: ()=>offers.retry()
                            ,
                            children: t('plugin_collectible_retry')
                        })
                    ]
                })
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: [
            dataSource?.trade?.latestBid > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_cryptoartai_latest_bid')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                    children: t('plugin_cryptoartai_price')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.latest_bid,
                                variant: "body2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                    children: [
                                        dataSource?.trade?.latestBid ?? 'Unknown',
                                        " \u039E"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }) : null,
            assetSource?.is24Auction && assetSource?.latestBidVo?.auctionEndTime ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.container,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "body2",
                    children: [
                        t('plugin_cryptoartai_auction_end_time'),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                            children: assetSource?.latestBidVo?.auctionEndTime
                        })
                    ]
                })
            }) : null,
            dataSource?.history?.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
                size: "small",
                stickyHeader: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: t('plugin_cryptoartai_operator')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: t('plugin_cryptoartai_status')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: t('plugin_cryptoartai_time')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: t('plugin_cryptoartai_price')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: t('plugin_cryptoartai_tx')
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                        children: dataSource?.history?.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(OrderRow, {
                                event: order,
                                chainId: chainId
                            }, order.id)
                        )
                    })
                ]
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/HistoryTab/Row.tsx






const Row_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        account: {
            display: 'flex',
            alignItems: 'center'
        },
        avatar: {
            width: 18,
            height: 18
        },
        accountName: {
            marginLeft: theme.spacing(0.5)
        },
        relativeTime: {
            whiteSpace: 'nowrap'
        },
        token: {
            objectFit: 'contain',
            width: 18,
            height: 18,
            marginRight: theme.spacing(0.5)
        },
        content: {
            display: 'flex',
            alignItems: 'center'
        },
        ethPrice: {
            display: 'flex',
            alignItems: 'center',
            fontWeight: 700
        },
        usdcPrice: {
            display: 'flex',
            alignItems: 'center',
            color: 'grey'
        }
    };
});
function Row({ event , chainId  }) {
    const { classes  } = Row_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: resolveWebLinkOnCryptoartAI(chainId) + '/' + event.operatorName,
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: event.avatarPath,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                username: (0,truncate/* default */.Z)(event.operatorName, {
                                    length: 13
                                }),
                                address: event.operatorAddress
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: event.transactionUrl,
                    title: "",
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.content,
                        variant: "body2",
                        children: event.transactionTypeName
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    variant: "body2",
                    children: event.createTime.slice(0, Math.max(0, event.createTime.length - 3))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.ethPrice,
                        variant: "body2",
                        children: [
                            event.priceInEth,
                            " \u039E"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.usdcPrice,
                        variant: "body2",
                        children: [
                            "($",
                            event.priceInUsd,
                            ")"
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/HistoryTab/index.tsx










const HistoryTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        content: {
            padding: '0 !important'
        },
        spacer: {
            flex: 0
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none'
        }
    };
});
function HistoryTab(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = HistoryTab_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { events  } = CollectibleState.useContainer();
    if (events.loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingTable, {});
    if (!events.value || events.error || !events.value?.data.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
        size: "small",
        stickyHeader: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
            className: classes.empty,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                    className: classes.emptyCell,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            children: t('plugin_collectible_no_history')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                marginTop: 1
                            },
                            variant: "text",
                            onClick: ()=>events.retry()
                            ,
                            children: t('plugin_collectible_retry')
                        })
                    ]
                })
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_cryptoartai_operator')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_cryptoartai_activity_type')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_cryptoartai_time')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_cryptoartai_price')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: events.value.data.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Row, {
                            event: order,
                            chainId: chainId
                        }, order.id)
                    )
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/CollectibleCard.tsx


function CollectibleCard(props) {
    const { children  } = props;
    const classes = props.classes;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes?.root,
        elevation: 0,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/PluginSkeleton.tsx



const PluginSkeleton_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(2),
            '&:first-child': {
                marginTop: theme.spacing(3)
            }
        }
    };
});
function PluginSkeleton() {
    const { classes  } = PluginSkeleton_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: Array.from({
            length: 2
        }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.skeleton,
                animation: "wave",
                variant: "rectangular",
                width: i === 0 ? '80%' : '60%',
                height: 15
            }, i)
        )
    });
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(45908);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49596);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/SelectTokenAmountPanel.tsx
var SelectTokenAmountPanel = __webpack_require__(86085);
// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
// EXTERNAL MODULE: ../web3-shared/evm/utils/contract.ts
var contract = __webpack_require__(28114);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(36596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
;// CONCATENATED MODULE: ../web3-contracts/abis/CryptoArtAIKnownOriginDigitalAssetV2.json
const CryptoArtAIKnownOriginDigitalAssetV2_namespaceObject = JSON.parse('[{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_active","type":"bool"}],"name":"updateActive","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"priceInWeiToken","outputs":[{"name":"_priceInWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_uri","type":"string"}],"name":"setTokenURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_koCommissionAccount","type":"address"}],"name":"updateKoCommissionAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"InterfaceId_ERC165","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionData","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newBaseURI","type":"string"}],"name":"updateTokenBaseURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"uint8"}],"name":"checkRole","outputs":[],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalPurchaseValueInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_startDate","type":"uint256"}],"name":"updateStartDate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"artistCommission","outputs":[{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"tokenURIEdition","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_editionNumber","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalNumberAvailable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"uint8"}],"name":"addAddressToAccessControl","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"priceInWeiEdition","outputs":[{"name":"_priceInWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenBaseURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_rate","type":"uint256"}],"name":"updateArtistCommission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionType","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOf","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"purchaseDatesEdition","outputs":[{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_artistsAccount","type":"address"}],"name":"artistsEditions","outputs":[{"name":"_editionNumbers","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"totalAvailableEdition","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"koCommissionAccount","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"editionNumber","type":"uint256"}],"name":"detailsOfEdition","outputs":[{"name":"_editionData","type":"bytes32"},{"name":"_editionType","type":"uint256"},{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"},{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"},{"name":"_priceInWei","type":"uint256"},{"name":"_tokenURI","type":"string"},{"name":"_totalSupply","type":"uint256"},{"name":"_totalAvailable","type":"uint256"},{"name":"_active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_uri","type":"string"}],"name":"updateEditionTokenURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"tokensOfEdition","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_editionNumber","type":"uint256"}],"name":"underMint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_priceInWei","type":"uint256"}],"name":"updatePriceInWei","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"editionOfTokenId","outputs":[{"name":"_editionNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_editionNumber","type":"uint256"}],"name":"purchaseTo","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionData","type":"bytes32"},{"name":"_editionType","type":"uint256"},{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"},{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"},{"name":"_priceInWei","type":"uint256"},{"name":"_tokenURI","type":"string"},{"name":"_totalAvailable","type":"uint256"}],"name":"createActiveEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_MINTER","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"uint8"}],"name":"hasRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"uint8"}],"name":"removeAddressFromAccessControl","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_rate","type":"uint256"},{"name":"_recipient","type":"address"}],"name":"updateOptionalCommission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_UNDER_MINTER","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionData","type":"bytes32"},{"name":"_editionType","type":"uint256"},{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"},{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"},{"name":"_priceInWei","type":"uint256"},{"name":"_tokenURI","type":"string"},{"name":"_totalSupply","type":"uint256"},{"name":"_totalAvailable","type":"uint256"}],"name":"createInactivePreMintedEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"reclaimEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"highestEditionNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenIds","type":"uint256[]"}],"name":"batchTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionData","type":"bytes32"},{"name":"_editionType","type":"uint256"},{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"},{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"},{"name":"_priceInWei","type":"uint256"},{"name":"_tokenURI","type":"string"},{"name":"_totalSupply","type":"uint256"},{"name":"_totalAvailable","type":"uint256"}],"name":"createActivePreMintedEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_artistAccount","type":"address"}],"name":"updateArtistsAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenData","outputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionType","type":"uint256"},{"name":"_editionData","type":"bytes32"},{"name":"_tokenURI","type":"string"},{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"totalSupplyEdition","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"purchaseDatesToken","outputs":[{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionActive","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"totalRemaining","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_totalAvailable","type":"uint256"}],"name":"updateTotalAvailable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_KNOWN_ORIGIN","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionType","type":"uint256"}],"name":"updateEditionType","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionOptionalCommission","outputs":[{"name":"_rate","type":"uint256"},{"name":"_recipient","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_endDate","type":"uint256"}],"name":"updateEndDate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionData","type":"bytes32"},{"name":"_editionType","type":"uint256"},{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"},{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"},{"name":"_priceInWei","type":"uint256"},{"name":"_tokenURI","type":"string"},{"name":"_totalAvailable","type":"uint256"}],"name":"createInactiveEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_type","type":"uint256"}],"name":"editionsOfType","outputs":[{"name":"_editionNumbers","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"purchase","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"totalNumberMinted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenIds","type":"uint256[]"}],"name":"batchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_totalSupply","type":"uint256"}],"name":"updateTotalSupply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURISafe","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_tokenId","type":"uint256"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_buyer","type":"address"},{"indexed":false,"name":"_priceInWei","type":"uint256"}],"name":"Purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_tokenId","type":"uint256"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_buyer","type":"address"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_editionData","type":"bytes32"},{"indexed":true,"name":"_editionType","type":"uint256"}],"name":"EditionCreated","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"uint8"}],"name":"RoleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"uint8"}],"name":"RoleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/CryptoArtAIArtistAcceptingBidsV2.json
const CryptoArtAIArtistAcceptingBidsV2_namespaceObject = JSON.parse('[{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"increaseBid","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"highestBidForEdition","outputs":[{"name":"_bidder","type":"address"},{"name":"_value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"checkRole","outputs":[],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"withdrawBid","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_WHITELISTED","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"hasRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operators","type":"address[]"}],"name":"removeAddressesFromWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_withdrawalAccount","type":"address"}],"name":"withdrawStuckEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"}],"name":"removeAddressFromWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"acceptBid","outputs":[{"name":"tokenId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"addedEditions","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minBidAmount","type":"uint256"}],"name":"setMinBidAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"editionHighestBid","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minBidAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"editionsOnceEnabledForAuctions","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionController","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"rejectBid","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"koCommissionAccount","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"disableEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"editionNumberToArtistControlAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"}],"name":"addAddressToWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"auctionDetails","outputs":[{"name":"_enabled","type":"bool"},{"name":"_bidder","type":"address"},{"name":"_value","type":"uint256"},{"name":"_controller","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"enableEditionForArtist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_bidder","type":"address"},{"name":"_amount","type":"uint256"}],"name":"manualOverrideEditionHighestBidAndBidder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_koCommissionAccount","type":"address"}],"name":"setKoCommissionAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"cancelAuction","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_bidder","type":"address"}],"name":"manualDeleteEditionBids","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"placeBid","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"}],"name":"whitelist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_address","type":"address"}],"name":"setArtistsControlAddressAndEnabledEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_withdrawalAccount","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawStuckEtherOfAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kodaAddress","type":"address"}],"name":"setKodavV2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"enabledEditions","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_address","type":"address"}],"name":"setArtistsControlAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kodaAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operators","type":"address[]"}],"name":"addAddressesToWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"isEditionEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"enableEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_kodaAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"BidPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"BidIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_editionNumber","type":"uint256"}],"name":"BidWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_tokenId","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"BidAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caller","type":"address"},{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"BidRejected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_bidder","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"BidderRefunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_editionNumber","type":"uint256"}],"name":"AuctionCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_auctioneer","type":"address"}],"name":"AuctionEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_auctioneer","type":"address"}],"name":"AuctionDisabled","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"string"}],"name":"RoleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"string"}],"name":"RoleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/CryptoArtAICANFTMarket.json
const CryptoArtAICANFTMarket_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract IAccessControl","name":"access","type":"address"},{"internalType":"contract ICAAsset","name":"caAsset","type":"address"},{"internalType":"address payable","name":"treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"bidder","type":"address"},{"indexed":false,"internalType":"uint256","name":"award","type":"uint256"}],"name":"AuctionAwardUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint32","name":"caPoints","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"artistPoints","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"sellerPoints","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"auctionAwardPoints","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"sharePoints","type":"uint32"}],"name":"MarketFeesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"bidder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"ReserveAuctionBidPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"ReserveAuctionCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"ReserveAuctionCanceledByAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint32","name":"minPercentIncrementInBasisPoints","type":"uint32"},{"indexed":false,"internalType":"uint256","name":"maxBidIncrementRequirement","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"extensionDuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"goLiveDate","type":"uint256"}],"name":"ReserveAuctionConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"extensionDuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reservePrice","type":"uint256"}],"name":"ReserveAuctionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"address","name":"bidder","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveAuctionFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"originalSellerAddress","type":"address"},{"indexed":true,"internalType":"address","name":"newSellerAddress","type":"address"}],"name":"ReserveAuctionSellerMigrated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reservePrice","type":"uint256"}],"name":"ReserveAuctionUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"share","type":"address"},{"indexed":false,"internalType":"uint256","name":"award","type":"uint256"}],"name":"ShareAwardUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"accessControl","outputs":[{"internalType":"contract IAccessControl","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"string","name":"reason","type":"string"}],"name":"adminCancelReserveAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"minPercentIncrementInBasisPoints","type":"uint32"},{"internalType":"uint32","name":"duration","type":"uint32"},{"internalType":"uint32","name":"_caPoints","type":"uint32"},{"internalType":"uint32","name":"_artistPoints","type":"uint32"},{"internalType":"uint32","name":"_sellerPoints","type":"uint32"},{"internalType":"uint32","name":"_auctionAwardPoints","type":"uint32"},{"internalType":"uint32","name":"_sharePoints","type":"uint32"}],"name":"adminUpdateConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"awards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"cancelReserveAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"reservePrice","type":"uint256"}],"name":"createReserveAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"finalizeReserveAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getArtist","outputs":[{"internalType":"address","name":"artist","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCATreasury","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeeConfig","outputs":[{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"getFees","outputs":[{"internalType":"uint256","name":"caFee","type":"uint256"},{"internalType":"uint256","name":"artistFee","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"auctionFee","type":"uint256"},{"internalType":"uint256","name":"shareFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getIsPrimary","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"getMinBidAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getPendingWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"getReserveAuction","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint32","name":"duration","type":"uint32"},{"internalType":"uint32","name":"extensionDuration","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"shareUser","type":"address"}],"internalType":"struct NFTMarketReserveAuction.ReserveAuction","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserveAuctionConfig","outputs":[{"internalType":"uint256","name":"minPercentIncrementInBasisPoints","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getReserveAuctionIdFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"address","name":"shareUser","type":"address"}],"name":"placeBid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_treasury","type":"address"}],"name":"setCATreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"uint256","name":"reservePrice","type":"uint256"}],"name":"updateReserveAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"user","type":"address"}],"name":"withdrawFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_withdrawalAccount","type":"address"}],"name":"withdrawStuckEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/hooks/useCryptoArtAI_Contract.ts





function useCryptoArtAI_Contract(chainId) {
    const { KNOWN_ORIGIN_DIGITAL_ASSET_V2 , ARTIST_ACCEPTING_BIDS_V2 , CANFT_MARKET  } = (0,constants/* useCryptoArtAIConstants */.ZK)();
    const KnownOriginDigitalAssetV2_CONTRACT = (0,entry_web3_evm/* useContract */.cq)(chainId, KNOWN_ORIGIN_DIGITAL_ASSET_V2, CryptoArtAIKnownOriginDigitalAssetV2_namespaceObject);
    const ArtistAcceptingBidsV2_CONTRACT = (0,entry_web3_evm/* useContract */.cq)(chainId, ARTIST_ACCEPTING_BIDS_V2, CryptoArtAIArtistAcceptingBidsV2_namespaceObject);
    const CANFTMarket_CONTRACT = (0,entry_web3_evm/* useContract */.cq)(chainId, CANFT_MARKET, CryptoArtAICANFTMarket_namespaceObject);
    return {
        knownOriginDigitalAssetV2_contract: KnownOriginDigitalAssetV2_CONTRACT,
        artistAcceptingBidsV2_contract: ArtistAcceptingBidsV2_CONTRACT,
        cANFTMarket_contract: CANFTMarket_CONTRACT
    };
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/hooks/usePlaceBidCallback.ts





function usePlaceBidCallback(is24Auction, editionNumber) {
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { artistAcceptingBidsV2_contract , cANFTMarket_contract  } = useCryptoArtAI_Contract(chainId);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncFn/* default */.Z)(async (priceInWei)=>{
        if (!is24Auction && !artistAcceptingBidsV2_contract) return;
        if (is24Auction && !cANFTMarket_contract) return;
        // estimate gas and compose transaction
        const config = {
            from: account,
            value: (0,src/* toFixed */.FH)(priceInWei)
        };
        const tx = is24Auction ? await (0,contract/* encodeContractTransaction */.Wp)(artistAcceptingBidsV2_contract, artistAcceptingBidsV2_contract.methods.placeBid(editionNumber), config) : await (0,contract/* encodeContractTransaction */.Wp)(cANFTMarket_contract, cANFTMarket_contract.methods.placeBid(editionNumber, primitives/* ZERO_ADDRESS */.r), config);
        return connection.sendTransaction(tx);
    }, [
        account,
        chainId,
        is24Auction,
        editionNumber,
        artistAcceptingBidsV2_contract,
        cANFTMarket_contract
    ]);
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(72005);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(5492);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/MakeOfferDialog.tsx



















const MakeOfferDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0
        },
        details: {
            color: '#999',
            fontSize: '14px',
            margin: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {},
        buttons: {
            width: '100%',
            margin: `0 ${theme.spacing(-0.5)}`
        },
        button: {
            flex: 1,
            margin: `${theme.spacing(1.5)} ${theme.spacing(0.5)} 0`
        },
        markdown: {
            margin: theme.spacing(1, 0)
        },
        mediaContent: {
            display: 'flex',
            justifyContent: 'center',
            height: '200px'
        },
        player: {
            maxWidth: '100%',
            maxHeight: '100%',
            border: 'none'
        }
    };
});
function MakeOfferDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = MakeOfferDialog_useStyles();
    const { asset , open , onClose  } = props;
    const assetSource = (0,react.useMemo)(()=>{
        if (!asset || !asset.value || asset.error) return;
        return asset.value;
    }, [
        asset?.value
    ]);
    const is24Auction = assetSource?.is24Auction ?? false;
    const isVerified = (!assetSource?.isSoldOut && !assetSource?.is_owner) ?? false;
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const paymentTokens = resolvePaymentTokensOnCryptoartAI(chainId) ?? [];
    const selectedPaymentToken = (0,head/* default */.Z)(paymentTokens);
    const { amount , token , balance , setAmount , setAddress  } = (0,entry_web3/* useFungibleTokenWatched */.g3)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, selectedPaymentToken?.address);
    const [atLeastBidValue, setAtLeastBidValue] = (0,react.useState)(0);
    (0,react.useEffect)(()=>{
        const price = new (bignumber_default())(is24Auction ? assetSource?.latestBidVo?.priceInEth : assetSource?.trade?.latestBid);
        setAtLeastBidValue(price.isFinite() ? price.plus(price.gte(1) ? '0.1' : '0.01').toNumber() : 0.01);
    }, [
        assetSource?.latestBidVo
    ]);
    const [{ loading: isPlacingBid  }, placeBidCallback] = usePlaceBidCallback(is24Auction, assetSource?.editionNumber ?? '0');
    const assetLink = resolveAssetLinkOnCryptoartAI(assetSource?.creator?.username, assetSource?.token_id, chainId);
    const shareText = token ? t((0,base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.D)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_cryptoartai_offer_share' : 'plugin_cryptoartai_offer_share_no_official_account', {
        amount,
        symbol: token?.value?.symbol,
        title: assetSource?.title,
        assetLink,
        account: (0,base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
    }) : '';
    const openShareTxDialog = (0,shared_src/* useOpenShareTxDialog */.z)();
    const onMakeOffer = (0,react.useCallback)(async ()=>{
        const hash = await placeBidCallback(new (bignumber_default())(amount).shiftedBy(selectedPaymentToken?.decimals ?? 18).toNumber());
        if (typeof hash !== 'string') return;
        await openShareTxDialog({
            hash,
            onShare () {
                social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
            }
        });
        asset?.retry();
    }, [
        placeBidCallback,
        amount,
        asset?.retry,
        openShareTxDialog
    ]);
    (0,react.useEffect)(()=>{
        setAmount(atLeastBidValue.toString());
    }, [
        open
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        const amount_ = new (bignumber_default())(amount || '0');
        const balance_ = new (bignumber_default())(balance.value ?? '0');
        if (amount_.isZero()) return t('plugin_collectible_enter_a_price');
        if (amount_.lt(atLeastBidValue)) return t('plugin_collectible_enter_a_price');
        if (balance_.isZero() || amount_.gt((0,src/* formatBalance */.az)(balance.value, token?.value?.decimals, 4))) return t('plugin_collectible_insufficient_balance');
        if (assetSource?.is24Auction && new Date(assetSource?.latestBidVo?.auctionEndTime).getTime() - Date.now() <= 0) {
            return t('plugin_cryptoartai_auction_end');
        }
        return '';
    }, [
        amount,
        balance.value,
        isVerified,
        is24Auction
    ]);
    if (!asset || !asset.value) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: assetSource?.is24Auction ? t('plugin_collectible_place_a_bid') : t('plugin_collectible_make_an_offer'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.mediaContent,
                                children: assetSource?.ossUrl.match(/\.(mp4|avi|webm)$/i) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: assetSource?.ossUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                                        url: assetSource.ossUrl || assetSource.shareUrl
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    className: classes.player,
                                    src: assetSource?.ossUrl || assetSource?.shareUrl,
                                    alt: assetSource?.title
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                children: (assetSource?.is24Auction ? t('plugin_collectible_place_a_bid') : t('plugin_collectible_make_an_offer')) + ' ' + assetSource?.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel/* SelectTokenAmountPanel */.Q, {
                                amount: amount,
                                balance: balance.value ?? '0',
                                token: token.value,
                                disableNativeToken: !paymentTokens.some(address/* isNativeTokenAddress */.qw),
                                onAmountChange: setAmount,
                                onTokenChange: (x)=>setAddress(x.address)
                                ,
                                TokenAmountPanelProps: {
                                    label: t('plugin_collectible_price')
                                },
                                FungibleTokenListProps: {
                                    selectedTokens: selectedPaymentToken ? [
                                        selectedPaymentToken.address
                                    ] : [],
                                    tokens: paymentTokens,
                                    whitelist: paymentTokens.map((x)=>x.address
                                    )
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: classes.details,
                                style: {
                                    marginTop: '10px'
                                },
                                children: [
                                    t('plugin_cryptoartai_current_highest_offer'),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        style: {
                                            fontSize: '18px'
                                        },
                                        children: (is24Auction ? assetSource?.latestBidVo?.priceInEth : assetSource?.trade?.latestBid) + ' ETH'
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: classes.details,
                                children: t('plugin_cryptoartai_bid_least') + atLeastBidValue + ' ETH'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: classes.details,
                                children: t('plugin_cryptoartai_escrowed')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: classes.details,
                                children: t('plugin_cryptoartai_current_balance_is') + (0,src/* formatBalance */.az)(balance.value, token?.value?.decimals, 4) + ' ETH'
                            }),
                            assetSource?.is24Auction ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: classes.details,
                                children: [
                                    t('plugin_cryptoartai_auction_end_time'),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: assetSource?.latestBidVo?.auctionEndTime
                                    })
                                ]
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.buttons,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                    loading: isPlacingBid,
                                    className: classes.button,
                                    variant: "contained",
                                    disabled: !!validationMessage || isPlacingBid,
                                    fullWidth: true,
                                    onClick: onMakeOffer,
                                    children: validationMessage || t(is24Auction ? 'plugin_collectible_place_bid' : 'plugin_collectible_make_offer')
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/hooks/usePurchaseCallback.ts





function usePurchaseCallback(editionNumber, priceInWei) {
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { knownOriginDigitalAssetV2_contract  } = useCryptoArtAI_Contract(chainId);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!knownOriginDigitalAssetV2_contract) return;
        const config = {
            from: account,
            value: (0,src/* toFixed */.FH)(priceInWei)
        };
        const tx = await (0,contract/* encodeContractTransaction */.Wp)(knownOriginDigitalAssetV2_contract, knownOriginDigitalAssetV2_contract.methods.purchase(editionNumber), config);
        return connection.sendTransaction(tx);
    }, [
        account,
        chainId,
        knownOriginDigitalAssetV2_contract,
        connection
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/CheckoutDialog.tsx

















const CheckoutDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {},
        buttons: {
            width: '100%',
            margin: `0 ${theme.spacing(-0.5)}`
        },
        button: {
            flex: 1,
            margin: `${theme.spacing(1.5)} ${theme.spacing(0.5)} 0`
        },
        container: {
            padding: theme.spacing(1)
        },
        chain_row: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(0.5),
            '&:last-child': {
                marginBottom: 0
            }
        },
        mediaContent: {
            display: 'flex',
            justifyContent: 'center',
            height: '200px'
        },
        player: {
            maxWidth: '100%',
            maxHeight: '100%',
            border: 'none'
        }
    };
});
function CheckoutDialog(props) {
    const { asset , open , onClose  } = props;
    const isVerified = (!asset?.value?.isSoldOut && asset?.value?.totalSurplus > 0 && !asset?.value?.is24Auction && asset?.value?.priceInEth < 100000 && asset?.value?.trade?.isCanBuy) ?? false;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CheckoutDialog_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const paymentTokens = resolvePaymentTokensOnCryptoartAI(chainId) ?? [];
    const selectedPaymentToken = (0,head/* default */.Z)(paymentTokens);
    const { token , balance  } = (0,entry_web3/* useFungibleTokenWatched */.g3)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, selectedPaymentToken?.address);
    const [{ loading: isPurchasing  }, purchaseCallback] = usePurchaseCallback(asset?.value?.editionNumber ?? '0', asset?.value?.priceInWei > 0 ? asset?.value?.priceInWei : new (bignumber_default())(0.01).shiftedBy(selectedPaymentToken?.decimals ?? 18).toNumber());
    const assetLink = resolveAssetLinkOnCryptoartAI(asset?.value?.creator?.username, asset?.value?.token_id, chainId);
    const shareText = token ? t((0,base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.D)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_cryptoartai_share' : 'plugin_cryptoartai_share_no_official_account', {
        amount: asset?.value?.priceInEth,
        symbol: token?.value?.symbol,
        title: asset?.value?.title,
        assetLink,
        account: (0,base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
    }) : '';
    const openShareTxDialog = (0,shared_src/* useOpenShareTxDialog */.z)();
    const purchase = (0,react.useCallback)(async ()=>{
        const hash = await purchaseCallback();
        if (typeof hash !== 'string') return;
        await openShareTxDialog({
            hash,
            onShare () {
                social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
            }
        });
    }, [
        purchaseCallback,
        openShareTxDialog
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        if (!isVerified) return t('plugin_collectible_check_tos_document');
        if (new (bignumber_default())(asset?.value?.priceInEth).gt((0,src/* formatBalance */.az)(balance.value, token?.value?.decimals, 4))) {
            return t('plugin_collectible_insufficient_balance');
        }
        return '';
    }, [
        isVerified,
        balance.value,
        asset?.value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('plugin_cryptoartai_buy'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.mediaContent,
                                children: asset?.value?.ossUrl.match(/\.(mp4|avi|webm)$/i) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: asset.value.ossUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                                        url: asset.value.ossUrl || asset.value.shareUrl
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    className: classes.player,
                                    src: asset?.value?.shareUrl,
                                    alt: asset?.value?.title
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.container,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body1",
                                        sx: {
                                            marginBottom: 1
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                            children: t('plugin_cryptoartai_buy') + ' ' + asset?.value?.title + ' ' + asset?.value?.priceInEth + ' ETH'
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        className: classes.chain_row,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                children: t('plugin_collectible_token_id')
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                children: asset?.value?.editionNumber
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        className: classes.chain_row,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                children: t('plugin_cryptoartai_current_balance')
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                children: (0,src/* formatBalance */.az)(balance.value, token?.value?.decimals, 4)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                loading: isPurchasing,
                                className: classes.button,
                                fullWidth: true,
                                variant: "contained",
                                disabled: !!validationMessage || isPurchasing,
                                onClick: purchase,
                                children: validationMessage || t('plugin_cryptoartai_buy_now')
                            })
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/ActionBar.tsx










const ActionBar_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            flex: 1,
            gap: 8
        },
        button: {
            flex: 1,
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            }
        }
    };
});
function ActionBar(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ActionBar_useStyles();
    const { asset  } = CollectibleState.useContainer();
    const assetSource = (0,react.useMemo)(()=>{
        if (!asset.value || asset.error) return;
        return asset.value;
    }, [
        asset.value
    ]);
    const { open: openCheckoutDialog , onOpen: onOpenCheckoutDialog , onClose: onCloseCheckoutDialog ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    const { open: openOfferDialog , onOpen: onOpenOfferDialog , onClose: onCloseOfferDialog  } = (0,useControlledDialog/* useControlledDialog */.D)();
    if (!asset.value) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        display: "flex",
        justifyContent: "center",
        children: [
            !assetSource?.isSoldOut && !assetSource?.is_owner && assetSource?.is24Auction && new Date(assetSource?.latestBidVo?.auctionEndTime ?? 0).getTime() > Date.now() ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                fullWidth: true,
                variant: "contained",
                onClick: ()=>{
                    onOpenOfferDialog();
                },
                children: t('plugin_collectible_place_bid')
            }) : null,
            !assetSource?.isSoldOut && !assetSource?.is24Auction && (!assetSource?.trade?.latestBid || assetSource?.trade?.latestBid < assetSource?.priceInEth) && assetSource?.trade?.is_auction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                variant: "contained",
                onClick: ()=>{
                    onOpenOfferDialog();
                },
                children: t('plugin_collectible_make_offer')
            }) : null,
            !assetSource?.isSoldOut && assetSource?.totalSurplus > 0 && !assetSource?.is24Auction && assetSource?.priceInEth < 100000 && assetSource?.trade?.isCanBuy ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                variant: "contained",
                onClick: onOpenCheckoutDialog,
                children: t('plugin_collectible_buy_now')
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckoutDialog, {
                asset: asset,
                open: openCheckoutDialog,
                onClose: onCloseCheckoutDialog
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MakeOfferDialog, {
                asset: asset,
                open: openOfferDialog,
                onClose: onCloseOfferDialog
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/Collectible.tsx





















const Collectible_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            padding: 0
        },
        content: {
            width: '100%',
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
            }
        },
        tabs: {
            height: 'var(--tabHeight)',
            width: '100%',
            minHeight: 'unset',
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        tab: {
            height: 'var(--tabHeight)',
            minHeight: 'unset',
            minWidth: 'unset',
            whiteSpace: 'nowrap'
        },
        subtitle: {
            fontSize: 12,
            marginRight: theme.spacing(0.5),
            maxHeight: '3.5rem',
            overflow: 'hidden',
            wordBreak: 'break-word'
        },
        description: {
            fontSize: 12,
            '& > strong': {
                color: theme.palette.text.primary,
                fontWeight: 300
            }
        }
    };
});
function Collectible(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Collectible_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { asset , events , tabIndex , setTabIndex , chainId: expectChainId  } = CollectibleState.useContainer();
    const assetSource = (0,react.useMemo)(()=>{
        if (!asset.value || asset.error) return;
        return asset.value;
    }, [
        asset.value
    ]);
    const [soldPrice, setSoldPrice] = (0,react.useState)(0);
    (0,react.useEffect)(()=>{
        if (assetSource?.is24Auction && assetSource?.isSoldOut && [
            TransactionType.BID_PLACED,
            TransactionType.SETTLED
        ].includes(events.value?.data[0].transactionType)) {
            setSoldPrice(events.value?.data[0].priceInEth);
        } else setSoldPrice(0);
    }, [
        asset,
        events
    ]);
    if (asset.loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginSkeleton, {});
    if (!asset.value) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                sx: {
                    marginTop: 8,
                    marginBottom: 8
                },
                children: "Failed to load your collectible on CRYPTOART.AI."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                color: "primary",
                size: "small",
                variant: "text",
                onClick: ()=>asset.retry()
                ,
                sx: {
                    marginTop: 1.5
                },
                children: "Refresh"
            })
        ]
    });
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_overview')
        }, "article"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_details')
        }, "details"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_offers')
        }, "offers"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_history')
        }, "history"), 
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectibleCard, {
                classes: {
                    root: classes.root
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            href: resolveWebLinkOnCryptoartAI(chainId) + '/' + ((assetSource?.owner[0]?.ownerName ?? assetSource?.creator?.username) ?? ''),
                            title: (assetSource?.owner[0]?.ownerName ?? assetSource?.creator?.username) ?? '',
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                src: (assetSource?.owner[0]?.ownerAvatar ?? assetSource?.creator?.avatarPath) ?? ''
                            })
                        }),
                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            style: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                assetSource?.tokenUri && assetSource?.token_id ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    color: "primary",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: resolveAssetLinkOnCryptoartAI(assetSource?.creator?.username, assetSource?.token_id, chainId),
                                    children: assetSource?.title ?? ''
                                }) : assetSource?.title ?? '',
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifiedUser/* default */.Z, {
                                    color: "primary",
                                    fontSize: "small",
                                    sx: {
                                        marginLeft: 0.5
                                    }
                                })
                            ]
                        }),
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                assetSource?.description ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.subtitle,
                                        component: "div",
                                        variant: "body2",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                                            content: assetSource?.description
                                        })
                                    })
                                }) : null,
                                assetSource?.priceInEth > 100000 && !assetSource?.isSoldOut ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    sx: {
                                        marginTop: 1
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.description,
                                        component: "span",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                            i18nKey: "plugin_cryptoartai_no_price_description",
                                            values: {
                                                bidPrice: assetSource?.is24Auction ? assetSource?.latestBidVo?.priceInEth : assetSource?.trade?.latestBid,
                                                price: 'Unknown',
                                                symbol: ' \u039E',
                                                soldNum: assetSource?.soldNum === assetSource?.totalAvailable ? assetSource?.soldNum : assetSource?.soldNum + 1,
                                                totalAvailable: assetSource?.totalAvailable,
                                                editionNumber: assetSource?.editionNumber
                                            }
                                        })
                                    })
                                }) : '',
                                assetSource?.priceInEth && assetSource?.priceInEth <= 100000 && !assetSource?.isSoldOut ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    sx: {
                                        marginTop: 1
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.description,
                                        component: "span",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                            i18nKey: "plugin_cryptoartai_description",
                                            values: {
                                                bidPrice: assetSource?.is24Auction ? assetSource?.latestBidVo?.priceInEth : assetSource?.trade?.latestBid,
                                                price: assetSource?.priceInEth,
                                                symbol: ' \u039E',
                                                soldNum: assetSource?.soldNum && assetSource?.soldNum === assetSource?.totalAvailable ? assetSource?.soldNum : Number(assetSource?.soldNum) + 1,
                                                totalAvailable: assetSource?.totalAvailable,
                                                editionNumber: assetSource?.editionNumber
                                            }
                                        })
                                    })
                                }) : '',
                                assetSource?.is24Auction && assetSource?.isSoldOut ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    sx: {
                                        marginTop: 1
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.description,
                                        component: "span",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                            i18nKey: "plugin_cryptoartai_sold_description",
                                            values: {
                                                soldPrice,
                                                symbol: ' \u039E',
                                                soldNum: assetSource?.soldNum === assetSource?.totalAvailable ? assetSource?.soldNum : assetSource?.soldNum + 1,
                                                totalAvailable: assetSource?.totalAvailable,
                                                editionNumber: assetSource?.editionNumber
                                            }
                                        })
                                    })
                                }) : ''
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                                className: classes.tabs,
                                indicatorColor: "primary",
                                textColor: "primary",
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
                                    tabIndex === TabState.ARTICLE ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArticleTab, {}) : null,
                                    tabIndex === TabState.TOKEN ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenTab, {}) : null,
                                    tabIndex === TabState.OFFER ? /*#__PURE__*/ (0,jsx_runtime.jsx)(OfferTab, {}) : null,
                                    tabIndex === TabState.HISTORY ? /*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTab, {}) : null
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    width: 'calc(100% - 24px)',
                    padding: 1.5
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedPluginID: src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                    expectedChainId: expectChainId ?? chainId,
                    renderInTimeline: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionBar, {})
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/PostInspector.tsx



function PostInspector(props) {
    const token = props.payload;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleState.Provider, {
        initialState: {
            chainId: token.chain_id,
            creator: token.creator,
            tokenId: token.token_id,
            contractAddress: token.contractAddress
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Collectible, {})
    });
}

// EXTERNAL MODULE: ./src/plugins/CryptoartAI/base.ts
var CryptoartAI_base = __webpack_require__(60268);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/CryptoArt.tsx


const CryptoArtIcon = (0,icons_utils/* createIcon */.I)('CryptoArtIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "24",
            height: "24",
            rx: "12",
            fill: "url(#pattern0)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("pattern", {
                    id: "pattern0",
                    patternContentUnits: "objectBoundingBox",
                    width: "1",
                    height: "1",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                        xlinkHref: "#image0_3012_21974",
                        transform: "scale(0.00195312)"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("image", {
                    id: "image0_3012_21974",
                    width: "512",
                    height: "512",
                    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAAK2WlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU9kWhs+96SGhJBDphN6RTgApIbTQpYOohCSQUGJICCpiZ3AEx4KKCKgjVkTB0REQG2LBNij2PkEGBXUcLNhQMzfwCDPz1ntvvb3WyfnWzj777H3uPWv9FwByOEcszoc1ASgQFUniw4LoqWnpdNxTgAYagAg8gCWHKxUz4+KiAGIT89/t/W0AKecbjspc//7/fzUKjy/lAgBlIJzFk3ILEO5ExnOuWFIEAGo/4jefWyRW8jWEtSVIgQj/puSccf6o5KwxRpPGYhLjWQjTAcCTOBxJDgAkB8RPL+bmIHlIyh6cRTyhCOFShP25Ag4P4eMIOxQUzFHyIMI2SLwYADJyOoCR9ZecOX/Ln6XKz+HkqHi8rzHDBwul4nzO/P/zaP63FeTLJvawQgZJIAmPV+6HnN/dvDmRKhZlxcROsJA3XpOSBbLwpAnmSlnpE8zjBEeq1ubHRE1wtjCUrcpTxE6cYL40JGGCJXPiVXtlS1jMCeZIxvYlIiyX5SWp/AI+W5W/RJCYMsHFwuSYCZbmJUROxrBUfoksXlU/XxQWNLlvqKr3Aulf+hWyVWuLBInhqt45k/XzRczJnNJUVW08fnDIZEySKl5cFKTaS5wfp4rn54ep/NLiBNXaIuTlnFwbpzrDXE5E3AQDIYgGHMCla0wQAEX8eUXKRlhzxPMlwhxBEZ2J3DY+nS3iOjnQXZ1dXQFQ3t3x1+EtbexOQrRLk74yAwD8XikUimOTvshdABxOQx7LzUmftQ4A6kcBuLCVK5MUj/vQyh8M8vQ0gDbQA8bAHNgAR+AKPIEvCAQhIALEgkSQBmYhtQpAAZCAuaAULAXloBKsBRtBLdgGdoC94AA4BNrAcXAanAeXwTVwCzwAcjAAXoBh8B6MQhCEg8gQFdKDTCBLyB5yhRiQPxQCRUHxUBqUCeVAIkgGlULLoUqoCqqFtkON0E/QUeg0dBHqhe5BfdAQ9Ab6DKNgEqwNG8FW8FSYATPhSDgRngnnwIVwCVwGr4Zr4AZ4P9wKn4Yvw7dgOfwCHkEBlBqKhjJFOaIYKBYqFpWOykZJUItQFahqVAOqGdWB6kbdQMlRL1Gf0Fg0FU1HO6J90eHoJDQXXYhehF6FrkXvRbeiz6JvoPvQw+hvGDLGEGOP8cGwMamYHMxcTDmmGrMbcwRzDnMLM4B5j8ViaVhrrBc2HJuGzcUuwK7CbsG2YDuxvdh+7AgOh9PD2eP8cLE4Dq4IV47bjNuPO4W7jhvAfcSr4U3wrvhQfDpehF+Gr8bvw5/EX8c/w48SNAmWBB9CLIFHmE9YQ9hJ6CBcJQwQRolaRGuiHzGRmEtcSqwhNhPPER8S36qpqZmpeatNVxOqLVGrUTuodkGtT+0TiUKyI7FIGSQZaTVpD6mTdI/0lkwmW5EDyenkIvJqciP5DPkx+aM6Vd1Jna3OU1+sXqfeqn5d/ZUGQcNSg6kxS6NEo1rjsMZVjZeaBE0rTZYmR3ORZp3mUc07miNaVC0XrVitAq1VWvu0LmoNUnAUK0oIhUcpo+ygnKH0U1FUcyqLyqUup+6knqMOaGO1rbXZ2rnaldoHtHu0h3UoOu46yTrzdOp0TujIaSiaFY1Ny6etoR2i3aZ9nmI0hTmFP2XllOYp16d80DXQDdTl61botuje0v2sR9cL0cvTW6fXpvdIH61vpz9df67+Vv1z+i8NtA18DbgGFQaHDO4bwoZ2hvGGCwx3GF4xHDEyNgozEhttNjpj9NKYZhxonGu8wfik8ZAJ1cTfRGiyweSUyXO6Dp1Jz6fX0M/Sh00NTcNNZabbTXtMR82szZLMlpm1mD0yJ5ozzLPNN5h3mQ9bmFhEW5RaNFnctyRYMiwFlpssuy0/WFlbpVitsGqzGrTWtWZbl1g3WT+0IdsE2BTaNNjctMXaMmzzbLfYXrOD7TzsBHZ1dlftYXtPe6H9FvteB4yDt4PIocHhjiPJkelY7Njk2OdEc4pyWubU5vRqqsXU9KnrpnZP/ebs4ZzvvNP5gQvFJcJlmUuHyxtXO1eua53rTTeyW6jbYrd2t9fu9u58963udz2oHtEeKzy6PL56enlKPJs9h7wsvDK96r3uMLQZcYxVjAveGO8g78Xex70/+Xj6FPkc8vnD19E3z3ef7+A062n8aTun9fuZ+XH8tvvJ/en+mf4/+ssDTAM4AQ0BTwLNA3mBuwOfMW2Zucz9zFdBzkGSoCNBH1g+rIWszmBUcFhwRXBPCCUkKaQ25HGoWWhOaFPocJhH2IKwznBMeGT4uvA7bCM2l93IHo7wilgYcTaSFJkQWRv5JMouShLVEQ1HR0Svj34YYxkjimmLBbHs2PWxj+Ks4wrjjk3HTo+bXjf9abxLfGl8dwI1YXbCvoT3iUGJaxIfJNkkyZK6kjWSM5Ibkz+kBKdUpchTp6YuTL2cpp8mTGtPx6Unp+9OH5kRMmPjjIEMj4zyjNszrWfOm3lxlv6s/FknZmvM5sw+nInJTMncl/mFE8tp4IxksbPqs4a5LO4m7gteIG8Db4jvx6/iP8v2y67KHszxy1mfMyQIEFQLXgpZwlrh69zw3G25H/Ji8/bkKfJT8lsK8AWZBUdFFFGe6Owc4znz5vSK7cXlYnmhT+HGwmFJpGS3FJLOlLYXaSMi6YrMRvadrK/Yv7iu+OPc5LmH52nNE827Mt9u/sr5z0pCS3YtQC/gLugqNS1dWtq3kLlw+yJoUdairsXmi8sWDywJW7J3KXFp3tJfljkvq1r2bnnK8o4yo7IlZf3fhX3XVK5eLim/s8J3xbbv0d8Lv+9Z6bZy88pvFbyKS5XOldWVX1ZxV136weWHmh8Uq7NX96zxXLN1LXataO3tdQHr9lZpVZVU9a+PXt+6gb6hYsO7jbM3Xqx2r962ibhJtkleE1XTvtli89rNX2oFtbfqgupa6g3rV9Z/2MLbcn1r4NbmbUbbKrd9/lH4493tYdtbG6waqndgdxTveLozeWf3Lsauxt36uyt3f90j2iPfG7/3bKNXY+M+w31rmuAmWdPQ/oz91w4EH2hvdmze3kJrqTwIDsoOPv8p86fbhyIPdR1mHG7+2fLn+iPUIxWtUOv81uE2QZu8Pa2992jE0a4O344jx5yO7TluerzuhM6JNSeJJ8tOKk6VnBrpFHe+PJ1zur9rdteDM6lnbp6dfrbnXOS5C+dDz5/pZnafuuB34fhFn4tHLzEutV32vNx6xePKkV88fjnS49nTetXravs172sdvdN6T14PuH76RvCN8zfZNy/firnVezvp9t07GXfkd3l3B+/l33t9v/j+6IMlDzEPKx5pPqp+bPi44VfbX1vknvITfcF9V54kPHnQz+1/8Zv0ty8DZU/JT6ufmTxrHHQdPD4UOnTt+YznAy/EL0Zflv+u9Xv9K5tXP/8R+MeV4dThgdeS14o3q97qvd3zzv1d10jcyOP3Be9HP1R81Pu49xPjU/fnlM/PRud+wX2p+Wr7teNb5LeHigKFQsyRcMakAAoZcHY2AG/2INoY0Q5URJcTZ4xr6zGDxr8Hxgj8Jx7X32PmCUAzMillEasTgIOd43KWjMxKSZQYCGA3N9X4l0mz3VzHc5EQZYn5qFC8NQIA1wHAV4lCMbpFofi6Eyn2HgCdheOaXmlYRMs3u+0S9jjdo9gtAf+wcb3/lx7/OQNlBe7gn/OftJEbJR/Xsv4AAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAgCgAwAEAAAAAQAAAgAAAAAAKDCXvwAAQABJREFUeAHsvQmgJVdVtl3zme45d+x5zJxAyBySQEICCfNgAPlUPhAEAyoI+qngh+KPyo+IiCiTDCKKDMEkCERmMgAJhAyEpJNO0kk63Z1OT7fv7XvvGWv8n3fX7UZ/UdIaTbrPrj5dt06dGvZ+d9W71l5r7bXdoigcu1gELAIWAYvA8CHgDV+VbY0tAhYBi4BFQAhYAWCfA4uARcAiMKQIWAEwpA1vq20RsAhYBKwAsM+ARcAiYBEYUgSsABjShrfVtghYBCwCVgDYZ8AiYBGwCAwpAlYADGnD22pbBCwCFgErAOwzYBGwCFgEhhQBKwCGtOFttS0CFgGLgBUA9hmwCFgELAJDioAVAEPa8LbaFgGLgEXACgD7DFgELAIWgSFFwAqAIW14W22LgEXAImAFgH0GLAIWAYvAkCJgBcCQNryttkXAImARsALAPgMWAYuARWBIEbACYEgb3lbbImARsAhYAWCfAYuARcAiMKQIWAEwpA1vq20RsAhYBKwAsM+ARcAiYBEYUgSsABjShrfVtghYBCwCVgDYZ8AiYBGwCAwpAlYADGnD22pbBCwCFgErAOwzYBGwCFgEhhQBKwCGtOFttS0CFgGLgBUA9hmwCFgELAJDioAVAEPa8LbaFgGLgEXACgD7DFgELAIWgSFFwAqAIW14W22LgEXAImAFgH0GLAIWAYvAkCJgBcCQNryttkXAImARsALAPgMWAYuARWBIEbACYEgb3lbbImARsAhYAWCfAYuARcAiMKQIWAEwpA1vq20RsAhYBKwAsM+ARcAiYBEYUgSsABjShrfVtghYBCwCVgDYZ8AiYBGwCAwpAlYADGnD22pbBCwCFgErAOwzYBGwCFgEhhQBKwCGtOFttS0CFgGLgBUA9hmwCFgELAJDioAVAEPa8LbaFgGLgEXACgD7DFgELAIWgSFFwAqAIW14W22LgEXAImAFgH0GLAIWAYvAkCJgBcCQNryttkXAImARsALAPgMWAYuARWBIEbACYEgb3lbbImARsAhYAWCfAYuARcAiMKQIWAEwpA1vq20RsAhYBKwAsM+ARcAiYBEYUgSsABjShrfVtghYBCwCVgDYZ8AiYBGwCAwpAlYADGnD22pbBCwCFgErAOwzYBGwCFgEhhQBKwCGtOFttS0CFgGLgBUA9hmwCFgELAJDioAVAEPa8LbaFgGLgEXACgD7DFgELAIWgSFFwAqAIW14W22LgEXAImAFgH0GLAIWAYvAkCJgBcCQNryttkXAImARsALAPgMWAYuARWBIEbACYEgb3lbbImARsAhYAWCfAYuARcAiMKQIWAEwpA1vq20RsAhYBKwAsM+ARcAiYBEYUgSsABjShrfVtghYBCwCVgDYZ8AiYBGwCAwpAlYADGnD22pbBCwCFgErAOwzYBGwCFgEhhQBKwCGtOFttS0CFgGLgBUA9hmwCFgELAJDioAVAEPa8LbaFgGLgEXACgD7DFgELAIWgSFFwAqAIW14W22LgEXAImAFgH0GLAIWAYvAkCJgBcCQNryttkXAImARsALAPgMWAYuARWBIEbACYEgb3lbbImARsAhYAWCfAYuARcAiMKQIWAEwpA1vq20RsAhYBKwAsM+ARcAiYBEYUgSsABjShrfVtghYBCwCVgDYZ8AiYBGwCAwpAlYADGnD22pbBCwCFgErAOwzYBGwCFgEhhQBKwCGtOFttS0CFgGLgBUA9hmwCFgELAJDioAVAEPa8LbaFgGLgEXACgD7DFgELAIWgSFFwAqAIW14W22LgEXAImAFgH0GLAIWAYvAkCJgBcCQNryttkXAImARsALAPgMWAYuARWBIEbACYEgb3lbbImARsAhYAWCfAYuARcAiMKQIWAEwpA1vq20RsAhYBKwAsM+ARcAiYBEYUgSsABjShrfVtghYBCwCVgDYZ8AiYBGwCAwpAlYADGnD22pbBCwCFgErAOwzYBGwCFgEhhQBKwCGtOFttS0CFgGLgBUA9hmwCFgELAJDioAVAEPa8LbaFgGLgEXACgD7DFgELAIWgSFFwAqAIW14W22LgEXAImAFgH0GLAIWAYvAkCJgBcCQNryttkXAImARsALAPgMWAYuARWBIEbACYEgb3lbbImARsAhYAWCfAYuARcAiMKQIWAEwpA1vq20RsAhYBKwAsM+ARcAiYBEYUgSsABjShrfVtghYBCwCVgDYZ8AiYBGwCAwpAlYADGnD22pbBCwCFgErAOwzYBE4BBDI8oHj5FlW5LlTFHwyx0kcp5dlbPBVS1mNAxuHQK1sER9tBKwAeLRbwN7fIvAwEHCLilN4vud6ruPqeN9xwiTxfJ8NCYAcyWAXi8BBIuBafeEgEbOHWwQeDQSMfp+mjifCd6D7wJf2lmZpEAQHCsR+1ywH9tgNi8B/gIAVAP8BOPYni8BjBQGj36eOm3uuOgBFwV/fQSqY7sBjpZS2HIcaAlYAHGotZss7pAj0ynpj/88L/ACB63oYhBwnwA3A4nnega4A/QC+DilOttoHg8CPO48Hc5Y91iJgEfgfRSDJu74XeU5V1F/A/aUfWIYh3AClJ4BtawL6H22VQ/9mVgAc+m1oazAECIRe3XFqxP5s3zbYvXu63d43PfNgt7dv6bLxqampdevWTUxM4M9jQfdnPQSQ2Co+AghYAfAIgGgvYRH470Ygzysz07377tl73bd/tHHj3fMLe/YtbI+TuYXu9jVr1jzpSU968pOffNxxx01OTlISBACe4P/uItnrHwYIWB/AYdCItgqHEQIEc7pJ4aaZU7gOgT5hMfC2bXKu/MfsW9+4buOPNrfqk6tXLGuN5L63L8nmcm/ng9N3fv+eLw6cHauPmPylV776jb/2lomxUSdwut1upVLBOoQ8wEmAh2AwGLDnMALLVuW/ioAVAP9VBO35FoFHEoHMyYo497ueO1akTnvO+fRHb7/ib7rttl+vNMdby2pBNe233WKhUu2HYTKxfL45kY+vim+9+6ufuPyvMicJwsp7/uKvLvnlV5Rc3+l0Go0GJbTs/0g20+FyLSsADpeWtPU4PBDIFdqZOgPXq9y/wXnzr33ngTui0fB0v/ZgtVqtR5GbJ27Rr1fTwIv7g/kwyPNidu368JSzli3k9//aW17Z97uZm5xz5jlf/vKXMQSNjo7GcRyGIdtsRFF0eOBka/GIIGAFwCMCo72IReARQiB3Fnq7642ld97i/OrLrprdctLS1tTopFOtTidp18m6ftCL/LgSpJGfuW5edZf0FnaO1Pq4h1/48vO8pZ0XXPKcmfYeJ3XGx8c3bNiwcuXK0iVg2f8RaqHD6jI2WPiwak5bmUMdgX7HaTYWbrx+5tUvuG/+wXNWrZoam3IWulvm9xXZIKoEzXrU8ouw1076vTxw653O5uVLa5Uinqo1r/zMF9dOrP3oX3y04leIBcLmc+yxx+7YsYPYUGBB97fRQYf64/GIl98KgEccUntBi8B/HoHqiLP1gRVvee1dC3uOGp+q9dNd7cHeejOtRk4UuGkaD3p9onxqeHddbED9SrUz6O/yPaxB87Ui+vzfXXHx+S/40zf9KaSPExgHwNlnn12OEkjT1IYG/ecb5jA903/b2952mFbNVssicOghkBWD33nFzntuPml0iTO2JE7ixHPzqJI72UIYJb4X++6gEhaVkFxASRTmlSBLu72JVstzEBLelq33F1n68l992fU/uv7++++H8efm5ggBIk7UWv8Pvafhv7/E1gfw34+xvYNF4GEj8P1r977+RVkWL119fLb9wR1Lp8aicCFuj46P7HXyokiSwMurlczNO67Tr1V9L52eaNbTzr5aEDdGsn297V49+ZXfuGTPuhl0/3a7XWaJuPvuu4866ihKYTsBD7sphuJAawIaima2lXzMIZDD57NK6Z86GGccZ6aHi7fIf/PlE5WRJc2pQXumOzVSd5OOM8ADPJukce4MgmgQVtqeM4tUqEf9wJ0PK2k/nc+jfhb1cqdTLdLWoPj2P3zh+GXHvfnXfjtjOEAYEVj0qle+GurvJXHpDyjXYGK9Ao+5B+N/tkBWAPzP4m3vZhEoEfBSzxlPig7fGKGV5GG17nz2I3vR2ZNkgNWecVtQNkydF6lbOG6Re4VJ9awwUZP6v1wXGQmiQ98NlP2tCEO/yNPZvXt23L7ht17/62tXr+ZMsgXdeOMNV155ZSWSc5hbsEbqlNFBtkGGGQErAIa59W3dHzUE0rTv5I7rJZrQy3FI5bn1Pucj79qrKV98vjqBNviQ1EH07ysDXIGh3/UyZgRwnQzfgO9q7RUpI4aLPM6zpBL4UeC0F/Zd88Uro1r9TW98o8MdsmQQD173ute1F+axCNXrpBVaTBeRJPRByi6IimGXYUPACoBha3Fb38cEAkEQkuwh8Mb8YG+ShZ5T+/RH5nZtXTc61qhFoVNkeZ56Hj5ePwx8183gfc9hMgDNBOa5GdTPbADQfuDmDA1zitgt0jztBV5RrQSV0J2+5972xrte9fM/d+zRRzBtQHOkuW3r1ksvvZS+Beo/vM/QMIBg+zEBhy3Eo4SAbf5HCXh726FHgCQ9MSGdjsusjnfc4lz+iX0rltUio/XLM1BA6xnWHnoAgUcfAAGQQv0unQCj/pcboccEAQPkQeQXfpEWWQ8jUL3qRwvdDd+9vjY6/or//VLSwmH2Ae83vOENDAtgo/QB9Hq9MlPQgYkEhr5Nhg4AKwCGrslthR8LCOSFm6ReWHeSeKJwonf93tbZPS03dHr9TpYS68nUj5h+0jxDtU/I7Mk3qf/S/bH8FFL/kQ10C4wViIkC0Pqj0HUkA/octiKqbrrpZmf79ouf89x6JeCHwA8Gvfjtb3871Uf9xwFQq9WwCFk/8GPheXi0ymAFwKOFvL3vUCPgOozLBYF9cez84Crn+qt7y1eMp6R/wzPgSOvnA8vLAUAnAfVfk0Gi/rOBM8D0A3SAnAGo/PQGipxRAgXb+IoRA263m84vbLjppsedcvLzn/c87oRLmXlkPvjBD15//fVYfqB+dpZBogeCgoa6SYay8lYADGWz20o/6gjkqOGEf8Zh1fmD37hzfHS1Hzh+GI80GkTyEPljfACa5dHEAiEYWEzwD+IBsxFkzgZeAaKDSB6XxYO45+RpGHh+4KLwL22OZb3+ts33O/3Bs5/9bBwJSUpPQpMEvOlNbyIEiCvjCShHh5X7zS3sargQsAPBHuX2jnHE6VN4erv3T+LhOrGbh3j72JkSMZ4TKoj7L4MxiBExC6fovYUMpEiiy8ED5gJcDmJAtzO7Y8cv+FYk9PkrnIt6mBWEhaRuld9lZpBuaC6CRsoFTTQhOwsCDwkVIRDRFCoaVPUr28w3xSmYng2bOAOK5LGTY8VQ2BpETtzTlNNcn4uYkikljZ/UVK6yqFqr2vpKVGS5re9YwIl51JVcJzxwjCqie6hmvo7nNBZza8pg7qXfVRGfMVNuSOZLL08SLwqznFlz0ZQJeuHDPEi+k0dOHlBc3d1PHJdA+8wQLSX0o3y68ILE4QoYZrCteF2CZUC/k5TZldGdyxQLqM//gSt1EHcqkbIxg+ZieU2hnZyW6WX56Mc/EP/JbwTLVnhBpR2FSZFWcOQyviv0B4Grcb+hn6Ha++5C6BaRT8BPP3K7kdsPGRXsFZHXC3w6AbF2Oh2+sh2CZLDQ8Aft/t4Xv/H1+eMev+7cC7ZvfbDGg+FHZIX70pe+9NznPpeClN7gAz7hsmh2PTwI2BnBHuW2RtGTMqc+P9wlgtN8r9Co48Wy8xLZbQSEKSbB4SJf/SquNWs4Wr8REYI1IMhyqMzButyNvfl23u01drSd+YW5vdNzszNJp0PYIQSO2tjoi6Z9Lua6BBGyIdsCixdwV7MBDekH3Y+A9BD2M3fS+fChCqfDmZl8/zEieq4Cz6oKOkslI4ZFx1MhHdirmkdu8SKauUrHEOBoForC6dSI6ohVObHkTTY4klN1S7gUDq+au0PgMHCKuGIfe+KRIEmhTnVtK2GErBt0e+i5XjKGKMzdfpp1uQNx9ogW7pTVp6Fy9O0cdg1qQdAKoobn15zBinZ7byfJIq9SdJO52X2723M3bbz9Gc+4mPyaIyMjKt7DWMJAdvY0zcOAhMwUUefslxnV3TucT7z//vGl6z2vmuVxltLYVI4DVR1JYeoluajmddERFPSJLaj8lQNxA+gY9QaoDLJe8OswNWhWBFmx+e67jzzjtBc+7znv/8CHY8fNBgN0/9e+9rXbtm0rewBlb8Dczq6GDgErAB7lJo9w9pWsIO1M9FCq9BVDaST8HUh35EOHgGAQdGNxMm868zypc5Am0L2T5ftuvas9Mzuzbcf8lh29XXvSPXPJ3HzWG0wsxLBh5LlVL6gGfs33mSMKNsmLHmuuH/owdEnkhnlga/gFwiU2hTuJhaXse02tSx6H08026yKNjAyATsVDCBND3BIpqY7hw0UC9lJokVitYvZLHhh+33+pPNCAJnNT9puDyzV46L5c0Eijco1AUjgjV6ZknITgycoDihmvVas6kZ93OhhSgsgL8szpe04WmdB6/iTwL77PlPhJqNKrhkG9Upl0oiknbQymB1u2b5uent39QGf33OxDu3aCWzavqbWEV6PK1LtlHD2Y0VjmUqCo5Sc+ScgJGorUbfxKKjfqqEO9ApNNGI18+L33bb5n9Jijq3Gcj1Ra/V6PTots/cJSRn8xPo0gMZjRJdOnZPlyBIAEgxwDEhU4hAumCSNgVOdWCyfIi7ofbN5w25Hd5/3iz77w/R/6MOp/veKTJG737t3vf//7f/3Xfx0PMB2CskY/sfx25+GNgDUBPdrtizKHCy/H+GC0YJGfBILf579sFbGUYO3hg+UGHdVBId2+q71l++ymrQ9tuOvBO+7Z/eBDR2cBNIiOG+ROxXXrQTRSrVWjqBu3UXahwchjUJFMHtKDXTepiYiQDUSZE3nIUFIWMTQMy73K3gB74BLROMwdsSG1l1ItcreO6/sMTdLiyprC6VxU10qCAWsO5oL6yJTN+bBTKQCMYOBeupShePUwzMWpZ7lHP5HFWJS5uEe31kXU+alUzU7sLxkTKHJ3D2sNcghTFUJFRxJc44MFqEG9g1oH0xe1d/1GWGkF1TEnGHG80JlbN7Nrfut9u7fcv2f71j27tu+Z3r1nfmHf6qXB0jXLkyReNTXlDVLMPltmpn/mZb+w9pyLyifmYSrOtCuSlMYrJHgw5qh6XIE63/Dt4GXPuW1q7KRqhTkAti8dW9XtzUUhHS8idjLsPwF2Hn8Ap2MUCt22DD5uwp7QMSYgP2Z/5Hc4IPQGkdevuO3Q1WwBmIAanJ4s1CrJdNF+6uteUzv1jNOf8cJb7ri3QT45pE2e0w/YvHnzihUrKAxBovRpynrZ9VAhYHsAj3ZzZ9C2Bn3SEiXRozHmMcZnM3NT7kQifkwnebx1++y2hy7//JUzD+2a3rwt3jk90i+W+pWJoLbcj9Iw5pWOKlVoE/W+7xaDvOfFA78uTkaXDLCyIwBcpxKYoUWwBLHl8h969CxSRh1JTXcrnuaMlQ3GSCaiFTmMPXnfkzOgNPiI07UNNZOj2EgFNFHTbzCkz08hcemcasxBsLOTlMTtDCo1yE8EaLhcjgMd54aorsaSAXHT4xF9cxdGQHEjFlmWdCT72QlQRL1zf9mL0P99Rk6RKc1ERXJwf8C1/EYVFDv9Aep3pdqsNJdW3LoTLnXciXQ+uveO2bvu3Prgtt2bvvu1XptUygtpnNSq4dIlzaNXrWiNHtl35poTrf5gIYgA0J9pzy874oi1J51Upk+AQCmGKZlW5c4DX//lhiqoA0CaEgtB45xR9d73js1BdpIbELkJ3rVeL6kisZwYmWtiPekBcBdtsy53UkMzBKz8Ciro+6miQnWYIoXM2owaKwbMGNPw8/nuwgM3XnPCmSe/9MXPv+XWP+v0k2aziVWKfsCb3/zmj33sY9jHLPv/yyYbqm3bA3i0mxszjvrtkLyiO3D8iu6TLK3hCHQGe+Z2bdi04VvX3XnV9dP3POB242ZKqF9QC6N6FKLmV3wlC0BJnh/FRYp2T5+hqLro+9LuoZkMysDgrVwxshqJMzF7+E4ra0JhRkFHY0YGiE7BosowVOiVQ6SdQ8GLRJ+HXUPUPz5HJhfRPdYJeNko8lLPRdzaU4PyDOlD3OWv5mvaqEJ33NqUQ2dhsOCOxC/qeIxFfOMDE5rr5KFiV4xxSb0TGJ9qmTYzPQaON6OkjKFEEij1Z4NqPQ2qRVhz6q1Ka8IZGRt0B5W9S7Zt3nX7rVvu3rBzy/1zu7a3Z/f2u534ccsm6/Xq2ESt2QpqjTyqxWEl9jEbTdU7cYfcOX6WMUPjTCf++de9cdnjHqc+BOU0C7yPJCjZv3QIl/v/1RpQjfpvOnJo30WEladwPveZwW/94o51q9f3MieqzlaK8cLZXfVrJPn3PaV6Dr3El6d3ENCCDAl2e1QuYj9uYXoA3oADyAwahu3ASXAOh26ngh/Y6+pEL6257aaTNp3O/GBnurz55N/5vW2D1vFPeaGfJwsLC8wuSSHxAdx+++0nnHCCdQL/qyYbpi+2B/Bot3bJIuJMV15CbPydQTY9u+H2jTde890bvn713ObtY6k/7lXqDr2EYKyKRgozewMnH+QDaeRhGGA46KA5YgLRjswvYC1kSoZIYLaoDBOT1GqIM/ThelRGdwGjuUwmIvpAyqmiiFh6Kd5hhp56RB1htgm5GQQOhzETLXqoLNpYpDGfe+Sd5/gskC4sUlbUulRyDU7iJExXSCR5BfiqjgSSCvcGlg0hXsoJ1hTauBxkaNKRxluwKEhk/HHTmNtzX4mHRXkFpcqDqy5TghdEnlA6MI4XcIXB+JHR+PIoGnf8UadoDabdjddvu+67t2+4dNO+2e7cTBcB1XRGp0bHj52aGFvbTIJOWHWjOoOyQDSJ4xRB5OdRlGFMy3EA5GTtibMTTj5j+dGP7zp4h41Kv/+poWCUcf+3n/AXNwPiFjlBo5F+jVQ9lHrPbucjf7avVpsa5A72n7To43rnpzwm+McY8XUXeQIAx/jBWTMM2AAsEYQU1CgwmfuVHYj99AzAmLYAcg0WKwKCmkg02m+G6Vx798wt1615/muedeEFV1xxhWkuCVH6AW984xtJEkff8ScU3e4aAgRswz/ajSyLORQHWebTe6bvuuGWr33u89d946rJXb2aE4040WpXsd1QG/ZgiHkhhfS9CDNOAJXzvuM96JIHbJWHw49f8B0UnUwk64deSBzMQONIuQJ0HvI7hhLM5vgJvFhEoBhHri6lWlq/g7WG3giORujaCfG0skcs7o4OGqJdPjL+mLXKjUXJuEDl5pUuv2gaUtoCsT/0KEVezK5+gJgybxvSZz/sr17J4tdaBKspghPvN1lyKKdoHxERwJhGgGgP++kpsSR5n65HgUyMqqj80cio0xx1ao0iX7dt2747bt+y8Uc33vi9++67ezpP6knuHeUsC50ly6PqRKPWrHnVYMA0ilF/T3eylzMkK8y9KPOqBY7yLKq5IfDMjNWqg37PRRIU/jOf/7NCxTws8Kag20/9kDt7ytQ6//ZhErIyAWG14gy58ftd54rLvrbxR89ctW4O2JIM6Tveju+YiI51ApKDGkOg6fOYPpk4XZJA99a2OQDxKxmqSF0NBQA57UdUmH6GdmYekU2Kba2HxaDob7rt5rMuLp73rGcSAMqFcGBQYIw/3/jGNy677LKXvvSlKqVdhg8BawJ6hNs8d/Cw8UpjleZllKbG8Bw4LulGIWHYqGoQo49RgYwuLATqhU67u+PeBz/zoY//82f+yelCtFHNIWqkyfsv864cgNgEsOGICOokfTEhm6FG/JQqPMRdZBgrRErwuHhUxG3CezgX+hX3iI1ldwnNV0hP10FiGGMRLC0dWyq/bCoSBvo4QSGfrq7romSr90CR+ILsYTecRi2hIqO5i5/3SwiPcQe6uDR6Q/Hwmi7iOtV5uWt9RhVwbfgwc0PGRHE8IZDQIUznO9WGxj3ArIGXtvIi7lVw5FJvGYiCjusN/KAV9YLJJc6SVU5reRFO7Z5Jb71l020/vPN7P9j20OYd7d39utMad5hPd3zcG+N+NcKMGAEQZmGjCBu5W0uDihOQHble0APwa0lR6Tu1JBjxfOJLgaPSaRY1pNW+OH/yi1983HlPcisVWFYekoNZUmIx/TTpDYj5cfw9qTOxa4//9FN2V/KloamQTxQ/OrvHzF9K6ukFSuQgD7CHYYfofs0ChlJfxd3uYQJKAyL9ZerpGVNPVsXI57cr/nzkcnAeMV+Y33a9+aVJO68V8/n0VCMe685mYX3tr7/xnqPWP+PxL965eyIcn0l7TpRMDrK9tfGR+3fsbfG4+D7ZgcgPQf1KoxAtoKa3y+GLgO0BPMJtCwtC6zkeUXgeBnXQxIKMcPKGyyTdUCgeWDTcsAgQBrsf2n31F6/87D98dsONP8TWvDwYn2iMpR0MAyhx0nD5I9UP04p2wZdul9DA0nSDRRjeVXJgjQUNUfh4WRlPBl3LRoNeKMom0j3IKQnKoWLDoRgUdXGyNGmFFfIrrgPtlAGBRVQNy8NKUrEFDxYFXU/qt4In+RXDt2xG+BsooewQiDvYQj0EheSg1yNvjMbMBbglVzJ1gMk6CC5mNTejmzBIhV4OQmlcSSR21AOggslCL82TiB5MrTadyg+OQO2kXboR463ailUNqH9scs/M7D2bp394x3duuPGeDTffN7ujHeTBRLQSN+oKf/VktGykaMikT1k0hAwxTEAOkMHvRpXWhgqs+yKnWEupV4Xx2Va9qL3QbVTGx8ZbJ552ilchfJV2OOiFjG+mM0bEUR4P6n7Ffc//s6MzlzVGBYm5F+jIP6/42/0KvmkIANcjwD7wlZ1HfzQ+z4wD4LJ8tA0q2jatSSNKVKPXIeZdp1FBji5kzBmTJgubNx5x2jHPefaLP/J315OLmps3qjjQo247//N3v+Ptv/c23MJlPCgdmrJPY9lf0B7Wi+0BPMLNmyXEpPCmouk72JOjSO80yyBtY6rQiE5MLLmz654dn/n7z376k5+e2fkAntqlI1PYfoveoEEYDko3TA1tGMYXTRGmifZrbA6ia+n46OkePgPjvOWAok40jDRymXF4842Srq+R6BnWQ9GXyl/q++xHm4VT5APgIzcAZ4p/6FVwI3bSD5CKLn8AXQ2uwUhaEzOq61MGvukYfmDDEJaqyTUhNvbIGaAeCjNSoega2xHKhsQA54iyINkCm1Rd1vy4GBA2hFPBI1ASLzQp7ZXUbEDFYq/pNarB5LizarmzfAX9hTse3HH3lu1X/3DHbbfdufGO+5O+33LHRpKRMacxFo1hyfcxnQWtWtEAUqLqa7o9kA+ws+MYjkYKt4a1J/Fl8CFONCMZQ1jPnGriVVOvVnAO3RqfIWuV1p593Re+4lVrTz+DjphqR1sepBBgli6GF3Aykb5+5N96c/rSi2ar9SV08QBVFrIi9ryYICjEIrAFAc5egrXYow96ve/jDcYJ3KELGOD79ekB9CoMAJYTuKgh7rxOGMzjFq4WDAwesM2w4VFSA0XUaC7Md432ZlFB+o9//NG/+xtXXZ0/8wVvSf1pJ8obzkjFi+Y6vfpYvnHDfatWrYL3TVNqRX1tDwAQDu/F9gAe4faFaTH5GF7MDPujxXlJwUDQKi877H/3Tff87Qf/9utXfL3dWUAlXVFfMej1w0QOQOiX4Uzo1Cj5njPgFWQsFkRKdyHBPoCdANLwMR5BHcSfSBWUpR1aRzFkA+JGn5YMkDUe1R5CQWBoD1qkaB3rPyYdaZFSK038kTzAHEnguU5C8GDyhmgoh9nmhgUWCdmyuEhCt8aMH0aVxwubqmyYmHRxQxnqVHCuvL9EO0qwJKoT0SqKVULNhthwXiawHxqr0XDJepEjpeAxkuMwFi6ZJ4qzh++6NrXMGR+LTj6ZOdF3p/Ed23d//4bvXn/LnbfesenBB3eEvdGq35gcWTU5OtEgfjJxmkXUHNRT2YlCL2U4RGqEj2qbkVrZRQD4HrxLuRmkRmWQb4AdcAYCE+LL+IofhS4CXZnAqZKoYWLdmrWnn4ow63R6I3XjAD5IAcDABNdtOITzOxVA/7O3bneSdejlECw4ASNtRHtJQqknxx7WpLmgWWneMrKTPcKfBG4UzXwUNabWRNl3MByl2M5oJnNASlJoJhKgIxa4JJZg8q9BJVKSuPltdzobvvekc0885WT/pttqYaUSx/OMCqxHQXtu4e1vf/uHPvQhunjoCngIWPNi0KyP8OthL/cYQ8AKgEe+QXi3ZfpH5yO3jNiTmEwvSMM7b3ngw3/111/63JW8mBMu5umRVq210H0oxeI6CCpBrcBWjMeOQaucYjoOevOVGD4lSETs77h1+Q5gK0/BL5S9PI4BWYZQ5LzF/we9yPQvLVxRKFAM3IFnAvO9hIHoOkeiGB1UQYdIGizJKrPJeoNngjG06hxoNCkuUFnvZZDHiMRRyBtEGVJNWSUq+oovFqUVGSCVFtFCF8Ao+9CU1MgszhAuSAJunEwyQABGg8j4NXM6SAiM/hVnZp541W6z7q5aXTv2aH/t6nnX3TG370u33n3bxk3X33z7fQ885GD7D0bHasuPWHXUEqKDGFswKPByV2On4UYVsv84+3JnlFoYnyneVcYpICMTkkNA+xRU49FUJT4p7u8iLPBA0OHKAygvRXLiIJFdTWRa2Ts/98pLXpsphD+UZZwWwUJ1kF0AiRJConKI2Pn8Z+Nrv1JZt9bpdArNyqWWkP2JVlbTIDax3CjaR+H8fBAA5Zp+Om6j/SJBUsHIBnoGCA+xf/mVeviu8SW4iGacRWmc4Q/o535W85xmnCY/uLZ69v3PfFZy04/iPFniuvO514lq3kjgf+QjH3nJS17ytKc9rXwfeIBsbGgJxeG9tgLgEW5fjeuSaRwtitSMAYOP8q6z4ba73/+2T333mu/Eg8FkdTXjS+Hkql+f76EYjmLBgCZj4i/xjVYaEGYv6fhQlzH+intlF6c3IBs9aiscy+zhOFmJ7CQ3kLRFcuAgC3yxsIwzIgKt+dUEbBLMuKi5K9yTe5veA/SN4o/6LxnAibAK9MPV1AOgEngXIEwUZWPOwZfN4QWUxC3EViiJgeLgoTBoCNWZsWYYhRTHowEHeAS0lOIAUSU2A+uR3dwhJUpF1eIPZFurkNK4d94TmytWNlet2uMU127f+d2rr7/2Rxs2bLp3YY4h0RiFmuPLTxp165UuAxKSoEvgSw8rkYz5XiXBzq2Ub9V6WKWvRFgsCj2yF+rvxeRTk/os8VRxCcKkB6DAJkY7CLvMkwvadAXUDwIBjUIjh8TumYXjTjtt6ZFHEoWqIdbUQPsRXarFwSw1x51xi8mde7vvf+f2idbxuIfqDan8AkVWMSBFqlBIJLfpARjFX2KAXym52F/CAMQk95X2j0ohD2RMNIyPJEBga7oYdpoNgnblRiawtXAGMfVxnEkmG7h/U7j33mde0HrPe5JeZ+CPUPM4yXgaa3nee9e73nX22WfjBiijQuXxAWYeN7scvghYAfAIty3x89IScfZCNgPnnh/u+ewnv/I3H/7k0mJZ3VmxBJdkmlVcxve7/axHUngCUOKMt1Q+UNYdHMVOUQmaxPijb8KziiWSF1WJYOACTewkYSC1lTVSgTU0y/Aq6ANKOKBOYnCBa4kCgvEhBqwCOl7aubyisD0LTA0/kgeCE7kKxyi5To5xXnH/spHIPSCBwdSDcLtMJhzGZ79ZCRMQ21QaTZrSEkTkp9qjPDyggCQRgXIXY9ii6AQ6wkx+1q0G3url9ROODo5Y57RaPxhJNtyz6bp/vP4HG+/Zsn2P8nRWW2515cREFZ04TIJK6lXigi9RiHE8yZIgTRIM3aFfRT1XzydxO6nXyFMEQuhpCFdExBOShnxFVKMeM6YX1GTbolMTEiYrHdxFkDK8AsMUSZGUak8ZexDejA07/5nPQkb5bjjASk4PQBIVsXqQi5K6qu6XfiTbcFv1hCMZmpW1RpmUUf0txADtJWEgS53QVvOZPaJ7rH0mvQ/MvmjzEeMjDHjAjMCQJFaHgESxxiIkOaERA0hU5HbaqfoZY8IpArMONCOn1y56G4vzTh89/9x9X716IfBIU+pXKt04q9br7jXXXPPZz372Va96FbyPYEfAW/Y/yMY+9A63AuARbjNMz0Tmh151fnf/4++/7K/fc+l8P1wWnDye+gOnx7DWzBlgkMYnR2pGkpDFA/x+lTztE/tCZD+jgRADg2SQuxVxNioyhhKXdDcK/sGwQ4SQNEfTFUB7FkfDFFB5lmElVuwRxhpZO3JMFzoWZkGSMG+4lElF6mDdRaXnWooQ4kRPmZI5HnLjOkQbQdzcC2nB8SFmHmzoPl0OCQBYij9GEkDq5ZXFWVwfBZWHibFJEhiMMkMUmH8qDmaUdMA0t1x3z9KVK49aFz5u3eiK1t6xyvV55yv3bbz2exsf+v6W3ftmVbfJKWfdMURoqiOR5EW7E8HMFGUwQFfFlJ94bSa/bXanIqcWYsRZcLEwVRymw5KBvwmZO4gJChNEiw7osJIFyAukEVwvOka1RiLJXsZX1qDJeDrEFhVRAAzZcs6+6Nyx1StxCwCF2N8IYdj34B+XfNCv7t3rfPTdvYnm6t7AadT9JDY9EkVgiGrxPchZA6uL2mk0thWgpeEY8jsvLqgC5qt6TvpVMUKKDDauFCNFJNZpUu3EcZ92ulU83h5hxTXgo5MRpsX2O531T2o++ZwlX/v2nkGP7o9fm6qRKhBXDFFqb33rWy+++GIS3lEwOzpsP/CH8189g4dz/R6huoHSAW2o3I4J7A/q8AJ6Gik746wbMcIU/RgGbTtfvPT2t/32+9rzQRPfpJPVK2EBeaHKK4ASZZ8tKXemdBhvylcaJzCpnOms8yuvccqNZJKRHR2zAT+h3EFfOgB7BLSr91xmAZWtntfhCj74FwkZQqOVsUg5dtS+qPmKLFKYv2xEOhG+Yw1ra4iY8kbIyYA8UI9B2jDXl5hBTqDsYxFH2hQUQGYlApVINlmhc0BY6siyvN9vuA52ZDcjw6WHTt0ddOs1tM+kgeCYbVfrY96qVe11K8dOf8LC807cl6Y/3Lb1K7fcdNXNt95371aZ8ltjzugyE+YvWwghU14/ifoFcqeFBEwzOD5KsypJlZPcJZdZnFYyrD1OGHsV3CcZ2RXIncRIAYZQjNIgFRL6SwQJN0QJ2aDdJp0FJ6iTd5muREYgEOH/WOgqYeq1nK4/O9oKwhwrVm1f6mXVkdf96Z8c1LOTO+0sBQMJ6bxYgFKdXGMGkmwhCJo///RNP7jqmKlVPCDtqBhR98j0iRgiYML5E0J9sFtB31WPrKO5xkX4A4L6WeM4p1EqHlFADPYg5UOXKKCqa8YB+Cm5H3yPYQF9fuKWVVy+wT7Pn6t4s0oM586TE4KEeIuhWJSOZFGvPXpD7YyzT/qU0x3hWYlGw153tlptovJP79n3lrf87h//8f9Lo9MNsjLgoJ6BQ/Fg2wP46a0mO7e073+l/cH+aZYnaadWbXQ7br0+TmJmKOT2bw/e9vt/esv37/eykWXNNcTNwItZwvhcbCFcR1cx7M8mshdKpQlQL/EdwOls8WGntGq4UBxuBLS5N5soffgG5FrVNuoqLt6MHgDyAZVQ2q3OQ3jkWApQcLmGpIK0SrkWpc5rQBlfTSIH7cFUjmEDNdIY7fH0IjKosgkwNfYdlEE4Dc0bWREGSkyDKRrjsYLzPaczhxWmQ3KxpGggN/qxv5C3qrXdD+yq+RVv6VTl/FNqL3qGc9pxdz/wwHe2bv+n93343l07bn3g/s4gdiamKuuPDjwEitcdYKxR6Y3vPENQUmxkmKmo8OEnDpO2q7XimowtSsBQHZwQ8kwDhAFBjSpZC3ZlrYBJgwBUUW0p9bSUe5lOZPMZadadtKfYqGo4Ozf/4pf8gq5wcAvdN7Rop0LaVcZN9+KKGTOGQ+Kb/+RsvN0ZnVTfpNNOGQHQRijU5cI1SoBEuLbLVqKaphMgMc+GbD7qB6jbpoqag9Wo2qC5eT5KixBiw5yIfoCfALVEDwmtq5PKp4cNcGTK4e17jzx35VPOO+mqr21E1uPsbTYrnU5MxtNGo/aOd7zz1a++5Mgjj7Tsf3Dtf2gebQXAT2k3QyI/Zn++shhazrDXBH6z25uvNwgocdp7nfe++8uXf+jWmW53/cQ5mC/ibo/pR0aiShREg6ytfACmd08cIiyvN5ylwKwhKkc1p3MgWoO89RPvuwiCg00ueHoANBZ0BqkxkbfpJUD78LakBVdmHAFvuI7G/Wm4DopzI1kxxAAwCDsJIZVdwaj8ED1qPWxBUEyKK9IIjMT0ANBPfVlskBZaINcWSmnh9MgaihDAVuUGIUlo5C2Yjxi3rCr5/dzr4cvGgO77JzzjmVOnPt4//XFb6v734oXrrr3mM1+9cvOGHznL1yIt3bVHBQ1y2dXzNO92Y7DC6yArC1IAUYg9KSVwVCyNtAMNFRVIoDN4T4PswECcyYecRTA6IpO1Oi3iPiniXAz1H1mhjo+MP2U3Bz81e4zEwBMg1ZpgIdIsy5kSReHMQnv1UUcee/YTf8pj8W9+xp0jwpUEkhCizSnCIKZ3U/ub97bjhaNaSxb6g6hRG+v14wYJnUTKVAZrHu0soqcyiCRVybS7as1DYFibX9W+uj6tTDMrUkh5oziFmnO8PAHyAMt3QyCQHgzmQCACVZ5kLlKOxOBifr+YvXd68mnV5z3nid/42m300Bh9QUjU2Nj49PT0+Pg4Aa9vetNvX3bZFZQPa1gZD/pvqmt3HCYIWAHwUxoSrmQ5cBDszzZr8nVGKMZujKnDSWrXfG3rH/3uFQ/cU1ST1avrdVTjvQs7RuujgdNM4i4Ov8Ijw4AUUiziMk3wuuq1542H99Hj0d/RqnmdcU3yKyfA+HABGzAdnMeLjMYnEVIKD2nuerV1zfKy8IVOgbU5EhnA2boH42gX9Ud2KvMPPQZi7rE9oDNjydeAMkJH8KJSMNkK5IzGMyoFkwso3l9CYAAlQyBuTv7ofl8DrJhx0fN7taAz3yE4h9D7ojUycdpJx1xwduPoNXOV4NKdWy//8uVX3nJrPL3XqdWd8UbzrAsWcM5WIpgsHQzSbtvpUU0MTFg7JPoM+8uNgmjB/mM+eECMidyMp9A2UCHVGBKWyZsLxSl6c7EHYAifUlKTklURIxH2Lhy/HM2QNIUAaYiErN+IhDyvOVU/oDCNShU3xkLWe+GLXoSbWlge1ILXGrsN2RiEpfofST6IKrXPfTy/6fvpaIuOFWO1Q+RCf6CxbnQfpfirTUsSpzjqBBgfL2t9RPSo8/L6GupXiyCnZUIsd3Kwcf8y4gFJg7TDf5MwiIycfr4+6AGcK2gAZPHDFbc5ztbtF5xz/NhSd3o2G4mqCCoySFUqmi1y6bKJyy///FVXffOpT73Qsv9BPQKH4sFWABxcq8GE5QmhTw9/nweBdVb8xdvu+pu//EGajo+NFXVnaXt+JvDD8dFJcvKTXIW0MkadF1XDC66YvaR7CQD5VY3RX25ebC0mDFzWdgakStBASoqbNC4Bqb5MHGiEEGTBdSBnKYa83VnRM/JEvQfJGFmRdAG+8pftMl4okeYM88g+QoE0MBgDlWSAiSaCV+AjDTjCeI04gpvw50oVjSlDwkBTtxqGI9g1kCpJrz+IZzpIgmh8/ZEnnHbm5GmnzK6euGp6y1evvfrL379ubraNMd9ZusR5wpnOVMMZdPto9w0sLj0GSatcymVBwuM06y+QzEimNg4ojT9iP+Z6oWIMDy40cstQP5GNzEADSAoANd5TZS2V+q8kRpokQAqvWBWQZSpifhUmFaaHxrWQbAIC6mdcAmuwJ3I2DZi7YCC63bPQPvbU05cfc2w3TuqRseCA3cNbGP2H20GtI1MTDp+ZrGj02s5fvmNbtbYC132QknG6urDPmRhXyp0qcqi0YVFIRYJKLZAWb1R7s6GdhvoPSAUT6KlOpH5SJKjkhHaWYaA4zcmTRMeD9EGB09fwBg0qZtFDpj/8R2bOOfHtGx534ZOefM6JX/jS7SQAxz1CNg5yRNMESljiO0wVcN1111H1KFLiaLscrghYAfCwWhbOZTnA/pxDoE41HNtwU/WXXvzebduWrAhPboy2nfDBPE2iRhU1td8nrj+r1EaIhOwR7w/1aIH2CNCTBixdXgQtNobY5RiQrgYFitPZw9EQstRxKbO853ILQ4n6Zyw/on51CBAnMnlwPAezwoCC/qv3naAZ03vheBy24gsZP5AOiuqBDfAf0F2gc8HNZL4wIgNGghsJ5tEBBJjDqjJLkVoBRTtIOume/pw6JpXIr9VOPOPCY594Wu3oI3/U3vvuDTdf+Q833/XQFi7vHLGmum711MgI45E6zDs4CzhFUkX17WrqdcRPwkyNcUaMOhVgjnpiFREA+shXonhTqfwiO6qoccQwtGQAggHLmMfs6LIRabjboglIbgAECjtVU8k3mDjE661UQgnEx0XxWqD1qwegYFC2EVAx6DJnTDvuZ5X6hRdfbDokB/1eGPAkzrlpJ5mtkqbDa/zFuzZtvW/F+qOiHlFf3aDVEvr9PgkyYjndxfUYbTSjCxJLhn41GV+l/htJVnK9pLiJ9+cYE/FZjgYQ70t4mPFfbDMETOq/x5hnh1mRB4KDayqTB1fgYZL+oTEVsTN/731Tz1l47tPP+ucv3D43s68xtpxxdKj/tDju/1Zr5Kabb/nEJz7xmte8hvPschgjcNAP+mGMxU+sGpz7b/ejJTFz1gfeufnP3/adSnbGuiZzivTm52bHghWz6cxIfRQt16+FTPDU77d7g34Fm9AAToKneedhWpyq6NCQWXlx+B1GRUkz1heEAfGdcCjKsCzgsB+yATM4w3ZwFahfwH6uBeljCJIgkVIP+3MwPIcbkEtxAAzKvGB8leKLcd3YwyFTWEMSRETJcfKJchDxoNxW9ifkHHYhdEZJCzMOgC/kVmCsVdzLPaY0iZYsP+aYo885e93jT9iSpFdsve9zH/rg1VvvpYPgjI07a5/QGp9c8HNig/oR8xX3q2kyjuUpDDuybzmQPnJK2SHI9yayBhQCRSWTjPjjJwopfR2KBip0d3hfH8pmcuCXhiAjJxTET0lL9jcCQEwq0Vmq/1icdC3F/uMGUKXMdTkNLhYJQ46MwM7dbpGfccF5zeXL57uDJlkfDnJB7DCZQEiuUdOzyp3anbc4n/xgumTpCKa6qIp3nB5Tv9Gs9ufi1mhEZIBonUJSVukBMgfRoobT9ZyUgkGdNSMSOKA0B9FiNB6uf21IMCA2YH9UCvUGZAiSD4DpYtTDkRhSK/PQyIsOLjEem37Q3rHXuf+2i5581roVl27ZsSBBnLaZKWxubsHMDpZPTLTe9od/8KIXXzw1ufwgkbCHH0oIWAHwU1oLnej/dwTsT97El//s9266fnvNP6E1Mh7683E612AC1j5zcbV6A/gZ83jQHQywN/tVPMADohKl6+sf10MMsEgkYLswaj0ygDcUEheZi/r1IxaAMo7DqPfG1GOUdYhQyhw8qlBMEacUO3MBPLWGSEw3gZ9SnMzciZ1iEB1iJAf3EB1AOuj2nK7bwSf6nelksLlr8DBMg6k9V5S610n63V6xorL0jDPPO+mJT02nll6/ddull1/7yS3f3zU/69Qq7up1wfiYV2t6UdQm5zWSKCZBTVqM+P0Kw5FibEZuGyJG6zVDtMhVLy8jRi2MFgPVixKZHoBKBt3LsCPpprUKaEw7dFwk17DuSHoaGCm1DN1mTQSOejamA8T50sflZJE5CO8HFRbFGuFG2h8jDwIl2uu2u0W1+pRnPxtZU4P9QURgHcyC98ZM9dXvMStBa3Y+/egHNhftE4JlWb/n0+1pjoZZNscAtpHmSL8zaDBA+MCjpRZAG1BPzugEsD/x+0KB5i83JKgMkYMC2xymnpxAoZBlbw/2LzeQDXrAqKs5TBc9UBOyj4eDKG+nM5tuP+Kil5592qnb/vnbQAP70wMYG2vRAkwRXK83du7cw7CAD33wowfOtRuHHwKimcOvVv+pGs07Tktvvl4bDCnk5IGrCK0GIUiEPSRDIHje+fY3F37nVXfN7xmtYj1FhS3iLKe7jQ6NiUaTcZk3WZYZKI89ej+xMhRwHCwMfzEOjK86mD2obGjuJroRvsU2Yo7XXaW5YygRUys6iJ9UhtLIw7nog8ZqZK4jsUJKYX5VFKAuIj1Rx2NC2X8WfQL2UDBdeYToR2ql5NQ+02HVGPej0Hmf/PUEBjacgoQAiTNYSOewE9Vqled3nrj+9NPHzzpjcy28ctOdX7n91rund5Dkzjn+NM7yaqSuQOEszfZcH2ML5pnEYVQumXqY8F0WHGOCV4Ykykgp8HcQJ48Uk+8XU3aRkBWJHkNGvqORtKgO8mCQVZUtH/dDEsRZGGOBCkjbQ++hwWyJxFUWtZDhYJhwMKvQb3HckRz3rqaJJ98nwf5k4Q5rBC65/rgZ39uoVupeEDFlJBly2tUala+kUWXT3tlXvv43jj35FNpSPQTcCj/mTND66Uvm9HxScwJwtI9Ey1d/Lb7kJb1Ga4rp3TkZOxX9FGSK6Fuz+DKNO4n+8V/LaMPk7yQEJXUPijyJ/tlvpnjshQ7R/YtZPyOvw8wBjCHXTABm9sfQTApf8aYx9Ff9lPkgK+5c5O2N/Fk8wFWvz7NZ9UwiKp4OHjkjbwgOxp8013aC41c3f+W3P3ndg7/44nePJUu8cdKOkheiU1E6pIJBALRhu53ec+8Da9etK9HoMzFDVOkP+kw9Tffpp4Nij3jMI2B7AItNlKZ1kwBRKrHRqqoaO4VwJHRmwHjTENt8Ec587D299721guE8qlSIfze5YxShIb2eF8xon+hexhqDrTpERWMbK7/sEuhlTBSATkqwI/cwtgpY0ORc0AWMqsaBJs5HF5R3QARp4tc1YbAEFCv5eDmIV1CnmB4DWzoWBdtcha+6Inv4qrPU0OYWhIuwnT9Uc6f6wYo4xIPadpJZp0vONiYuWOKMo3LvbvTm057f8x7vHHVR8+wzx58wePmqW7du/fpXr/z29m33pr14tFlbvbY52pxBE0UdR+RQWLRHvMgl0VNvQ3gl73B3FvZJoedgyUfVQaWV3DKOcHaaY4DPHGBqIPWdI/STJLFOkXOXWkvr127dB2VYtwVU7ZIfAFs2ur0cxMhxfWXYF+GpiJKYBHD4LyoV4lAzoiYf2r37lNOeuH79eq6kpNvcnEgnQoYOZmFiL2DG4dxldhYvfM8f3u0HS0rHD2LJcK8uhzqP0cbQsZGIKrlR5wWEnh7Q4cboZTKNqS5GqZeAN1qC+gpss5OLsSGtX1dTEwOokkDoXEWACfgSln9ZD8aL8BgxJfDePbube6bPeNzxK9aPz2/qIzZxhBA2bLpQMgPSOeMKv3zJq77+9a+nCa5yMoaADYn7rFv4XyJ6aG9bAbDYfoS2s0WehoxEDhoZjyFEP/GiMW9Ury9zyO//aufznyjGJvPuvjOjsb3yNso5ag4j3IRodvXSsTiYN1zyg26BDLXiBkPTRM5Dfzg0pYazwYG8xuI3+IMuu3RnSmFOgQeUVdnQHD0Jokb0q0aBwbeyDqFFy/8p8tUlUFrV1eDK6hxgDqYC8KXR+s1leXuRHKx1+opkoR+m95Fomo5AQYfAbTrVmlffGc4SoTOyUH2yc8Izm6cev+IJM/WRm/PBH/7D3+7tJ3uKvD8+VllxdHUcjdGZiYk0h1wNq+NHkGDjI9OS4hSVvk7sVn5EWaIp5JTh9LJ0sBbllIgU26vFYxIAAEAASURBVCE+QrJH46pUkI4EBp0DTFx4Bai9wMBsTucHajIWIaoveuWjk3UDVR9TG7zPBGNY3UyyT2WtK9IK46O5tIkCIqiJw+jB9InPbY495alPq+CiNbKENe4IrszGw18qPnM2c/u4Xq99+m+SW7+3qrUE9YAqqFgiTgqoP4KAD3UQ18vWrw2aVWseQIDgmVElxeaINLOfMRdsU2dpG0rqIccAfQudZRwAdItIqI040/RhdChl8tI9ERV6kLTJY8moN/2B693+dBxvuuuEZ59z3lknf2HTdQyDq1RwGUiKa5wHiwxo6be+ddW11159/gUXcAFmkdSsBshVuxwuCFgBsL8leU/hWsLhPWWhYa/iTpS3h5iKsdn5wSUvuPuum45fstKN+/7ESjyZFd7nnIFMvIZK4wXFQDPwDRYe3mLM9FBaaecRLxtSRDeTACBND51svWsiPd5OKIADZBkR+Zhj9LXc4EiEk24jAVCahsSz6gcwIgx3Kvshl8UUm5CIdhp24HgIz7z/5vrGTgUTSDCk4zEJYiqyxzcwRQyK6TwjyU59MHaRe9TzvePWuyseyr2/27P5yu69Nw62FJNP8EfrsmTXGv0ADy+3pPCkbJNAgoALCiDyMnQPbymJqOFy7YGjVXadgaSDxw3pI/X2F5N+F4crDDbiJPKOyphk5AT2H2MsMpIU9hYNKvjHOH6l2RsnMGIADE2Xibor+Icp1hUShCTAAyxRRKhRN6oE1RESMpE9KC2YgobcRJ32U5729BXHHU8jENVaqUYInH9vgl8q8e8uXMudyd2R2b3OB9+5sHrlRB+hLOc6mryqDx0LJCpswjdF5eJ3faByegZmW45c1RD2XzxATl15hvU8ILRKHy9BRPL3Qv18GATg6yllvjmmk9T0AHQ8aXUUCvUiSvZXv0ANzw+EXzGEAivf7js3rD5/9unnnfbFz1xjbG+S2bhlEB7ifz+gTzAzG7/h9a/79ne/i4ej3mjKY6IHyC6HCQJWACw2ZFbw8uitgQiMkhp7QZcw/8KZuGtj9qpnd3dtecLEqjnXn6yOOL04402Azky/nzeNlJKwFfRHIJ1GhBrNnVeOcbUiPL179KqlhHGMdH+5MuF0MSavsDbQypEKZo0ay6sK46PoYf+Rugcjch25CtQP4Gf0YQ6GJpQ8rtwDZXCMESTsWbwmMszUUMLD/KSzzPGrx4vBaH923iFTWYfYkPXOkjXO5M84Z5EYbUfY/Vx295c7O+7lSuNLqmNPqQcTMrn7YQxTEd7vwZKMBGMW8zmuJkclvCXlmhLygZlkiFC9jHgQ+8ubYgoIUGVxUE81FFVeAVie6HzUfwQAOcuQAYT6gJdGA3ANfbi21H/WRO8zqyQ0hV0HH4YcveoESEHmWli5RX6YpkLCiRT/wyeKMMbDm7SwuilRs+JXwu6gHY6On3neUxQSJN8wPxsGJDrIoPbwV4S2kneJsz/4l5s333/E6rUanEY+aiXfkWzQBy3e9FzUiPwo0qcrIKVePI4AQFKUX81aSZ5R9s1P/IrPAFFBiyMDtIbolZpPIgR9H8W/xyxmmPHJ4y2hYnoAWL/MjaX10/w8V5JGASP5MqT5tq33Olvuesa5J69cMbLlobZ0f1JHyaBHp4tF08KsWTN1xx33/NMVl73iVb98AA09hoLKLoc8AlYALDYhupX0WehK0SvdKhHrTqvIx278vnPJzzyQdddOLMWYPJl4827WEptgldErDbXDc2yjpLFC5yxpWtkapAajBfO68BbKfC0NTJ5hXnV2wmpShiEqokL1GmN7lhFAhhrOKBm8DPLhnec6pnOgroDsBvC+GR0G8UjkoOBKL5PlR3uMVNB1ZF7XIvlhqJ/Sqn/T9eeJTWJu+qozeZwzeZJz1CnO0eu9JRvym76R7/1iMjdPfov6kdXKVKXazLEOxwooVYYh362TEUi5wgbdZKEYU7yOIVajc1JBLk9dZIaQYqu68JXCyfLEhjF0ifSN+s+BAkN2IfAojT/qBCjiUz0AgcRaVYf6yeNg2J9MRcr3IJaTN0D8CuebdmBelzDEICeTHtQvupc7n5JIXFTcGEnP2GDSpHXn273uk//X8xvLV2rS9pp+V/HlC6LJDo7hmCDHycd+ePuuT3xgbmq5M9frNxokdKtL4zd2N5qsNObQRvs5vaR+ST9RtnqSix0CKfJGJBg5gUiD0JEZUgV4ThT3yVfTddCcyvIq40zuk5RQgwA0N4DpAcg6xjMq4meRFsITSQcninp5r8WQiG7avn/D2meff/ZZj998+Q0MTwujWkRWPR4wpZhSZlTmCWg1vd/5nd967nOfP7lkKQmveMjJda4r2uXQR8AKgMU2JJcLg6VEVl5eraKgVrsz3nVXOZe84qHlKydns0G1WSOXbz5oVZtFe94lfwD6ojgHvhbFwxfky2cNvxt9i1dfo69k6pHmaygQKlRvnuMx3Ot95iMPqtRXmXSInVTYD2UyDI6iBXXRY+AYqcQ6Bfuvuho6UbJHYZWUFtFS0pYZByAxQEnKwyR+xMpyFUhRp5T8tCfaU+2NrHOOPMc76fT6MYFb29jZ89X8wb8d/aGbjwbBmvHGOr8yIbmW9Py4n9QxyysaibTV6ryEeV7hSlzW9Ccocllr7sAGN5cM0NpYtKiAVEqxOUUDDQqF+q81hSs7BDLgIJ00K6boXiiaS0oGUAp6ANJ31ZECZcXUsFGq+kYAUVIqiohgcLM6BdgqlGYZzR5PAMY5JyEnaMB0DHkSRCHCr93vrT3yiLOfcj68q+zTBiZl1wswZilnhvY87AW51N7n/PU7FxZmj1x6nBIr0KAm8tQ8DpJQUCeuXSN+jfqPxKIHRJkB0SgEiH+azaxVGYCVWmB0AmMvkkClTdEGyp1SF0ATeVCmANIMypIlHKw6SfSqXXRrToD9WSMQSUlB94R8gYTy7Lj3jmP6cy987tMv/9LNcZzC+FHAiA/aRiPCjMiOJycnHnhg+qMf/fD/fcsfhBETQOiCdjk8ELAC4EA7VnhhTSAQNpNOPGheeXn3T37ve62RC/u9eGqlywxK9J2JEsHxWWkMvJi8ujpXHKQxVYbIeBm109hzoFqYSbovzMurjsmI11F9BWYpYS1Pr6iQt5K3FZLTS2/e2dKSA01DEVCuXmckge4Fd5f9AAkSHW3WnMTponZzL732fBWn0AshFQ4FMAdDSUgC6clOcWbvzFODJ5w6elbojN+ysPlr8fU/cG/aV9vWCJ5KJH8zaLikMO3NdPyA0U1O0HQLRv9q3BFTiMWaUpGQTBlrmJxKhTbqPb+rpoaPZeNSZXVS+TNFVQH1xXxM7SE0/rKPXyF9+kvqofDReRyO5KBe/MoxQlaXNzLAaLbaJhKLba5TLlC/SW9NNI/EKiezljuTIJbyotQgqvaSXrVRf9qFT4+qtW5/UK9gElfIEHUxRVy82sP/Q5vdvdH55udWLF/RmG8TXsvsBA0oNeKi/+qKRiqrQwL1GyEnNje10kOix8I8CEbWicLhYp6qRWGIHIWW9VSpKUqJYoSHBAk9P+03MJmHhvtKU+c4oQOE3AkjGzN0EtKTDQbEz27Zdt9R27c+5ZwzW63W3NysOYypNWVURMqyxg2wsLCwevX4W9/69p95wYsed+IpKqJdDhcEhk4AkGgSlieRc2nmzZj/Gi1RJMWY0biQOaWWFbW//3j+x/9319jIhQFTbRUkTOetMxGWCuFhPGUVpYt3joXXAVrmDUUxlQWXF9O8IYrH0esoiteG00aF5wVGB8Y3oLX8t7yu3J29sJV+4kDF+YghzTwBRYSKjVZY+pPF6coyCTViQ2GnrlO6ECrw4KDHRIBp5HZqYT9P0HIbOrUWOJVe0F8gvIco8m5xrHP0qc4pL1//cw/526/vf//rM9fcEt+7z4vqE+uWNU+utpfB3SRvoHeBVR4TSggrc12jdjIzfY75h8EO0DzVSsjEYzy99EOweRP4j2xAEEFCwCRrGAPJZA1jodTUyuuL1svtcreyDmX5qIJ8sNizIOK4hkv+HymrMCGjCBI/ir0oiUKs/+rsYDqrMgZYH+V0AEZ1KNSDqDMBilfQnSNfnT6aFphPHJr0D+mgTri+7z80PzjqrLNXnPVklP86V2LZT2v8ReJpz09aUqdDJcJBjUNy9x7POZaj+skckxW/4Zd+GHmnjjDu2dsRd1fQiUAxIL+pMVRhtCJLnAnaoczKR0HQjgSd9HJj3DdmH8buAjYOFD4MFk9ILkf2DPBGjCD8ydDHAeQcIkg5dBMyOMmC5qZMG1BxutWiV1Gvk6JRdT113F6SBBnCUyqbpdOOuCdPSdBlXLkTL4+jrTd8Z/0rznzB+U/91BWXd0lYEVaaWIEYHB0QF0xssNesM8QjGRtxXvvaX/zO926JARvHFSMzqAdRR3FsrEaMK5HPwIqHn/TUPHb3/bsP+mO3yP+1ksH+cBHvl7FbIwwWEUi6WIErhTvTyUb+4a+9d/z+nSPNdW4ox4DeG55r/rAB96KvS3kzpC/ClopafjVHISrMT7x4euWkf7KBYUKWHLH8ItXogmJEOX7NiF/1u+UZXhRI8DC/mhcXBbEsAOdKL5YxB5FT3tSo3Pl0kddao5CF2+s25vujpPfygz4ThvjNdjQ3CPa5c/F6Z825o2edeeTJ5OX87NZ/vHXrnTfld01j7hg7bllrVR6PxzNhxLyLFFpaKDJGG0gk9hg11XCKqfJi5Sl/qV0a3XOxZYADAbCotC7uU2nhfclEVVoCoLwY1+Ya5sMR1E4fs8Exiz+ZixnvpESrrm3QoJjaFpy6NEq19mtYgghKJjEaGZTplTHeOnIj0rciuhs1ElYzZeSFT3/GYuEO7s+8k63QkAxqma8mNV1nPqiPuh/9q87c3npjhF4bjp+xBFmErm8ysXGoUQkWa27qr6KrwGJ/xKXZoKh6JmBsqiSMVB0qt4gtvGt2KjwU7HhmyuMVRCSHi84SpiU+qhNX4XSz8EO5jeTkWZIego8XEdXrd/fudHp7z7vgSZ+4/HIwI5bZJH8iVwWeADpOAcxO29Vq4a23bLjssktf+LMvpRz0IdSgyhYXYTiC+pEH5Z7FW9o/hwICQycAeK94RxjChRjA4MsLBjsYgmAKxnbPCT/ywd3veMvcimUnVapk9MeQzFPNgy7CNcv+V4q9ZpMVGyXZ6wCxlt49owvxSupHCCov0NGluXMpdDtxA5q1TtV8AKJD/QRXUTxZCXQJXnjFCEE2yCET16JdsoVzHQquUsFzOjFvVqoLgy5xnBNeq+mTZ79LzsdePdob7HVmemuc5edWzzx/3dlTK5s3zFz3oe9d8f3sgQGyLRyLxlaG1eVu3Az7tXqO92On6kUl6NAoQzQmKuqvaqhmInfqR/FMAQUfe2TRkLUH/uAYNqgz2/wxwlJ0L4+urNmqq7mermFs/WjtHEC9+Qg7rmT2Uz1QUwynNHvhb+4DDjSX1oAF26t0uoFMJURmIeCJydL4L5oV/sUbDNXSL8GJgh8Byd9o3vvg/ee/4Pkr1h7BDU0bqjYPc6H0+B8U30VSBbfOWbWGs2WL/6kPzab9FWNjqM5A0hJZ8wxgvEEkm3sYdpYYha+pZ2nrp/HgbqPFczgYqxZ0fDSKQt0FPqmOKR3CxusLiItfkQTqJSAP8Bsxvo8NlW2xSuVNzeXUoGZRC9DlkdwUYgwCpHfV2bnZ2XnvBRc9aXQq2tdntkqPYKmqh4cnpbsszUVeAS6O6zf5vd9980VPf1ajNWGEL1MNS/2nm4Gkwm+sd+KgEV0sm/3zqCAwdAKAx5qsBWDNg0pKAMOtcBhDYIr+oHLpZ9w//v0trcmjqlNOskBvW+8rihpPNhSo90hcb1pq/1slZUrL/peMA8yB5V5YCoLSSRnqJ+8J/QASVELo9MChVk7ktRXplyYgo93rK3THP/kAZCOGTdHHecm5j34lSFQ+YY0Ok42Fnc12WotqcVRDHZunVxEFsc8LHDfajdNbT3z6ynNPXLPqgXjTO2/5q6vnvt0jcZlz1OjoilpjeVrUmcNSmTq9QeTneyk8RRbrSFTxoQB8pHByY+Qmf6VtGramQHyMJDO4iMu0ITJW3SQANVZO8EFrFJxNVY41R2FPkv1DVWENPWsCAIjahP2wgYRgD5OQGTEAwcD4GFSk3qNmS79nS1cSerC/gtS5og6B9LmopIpMdxIdOLLzsaVjOxfm6lNLLnzOc1VIyVyKeRCL60w5bsfJmCMeE1zQ7XUr9frH3rNv++Zlo2MhT1a/nVeRTNyzlE0GIb4KEsX7gw9YqtWNkBCb86u0ePE7bV1G92tbMkBrgOOhLSOF+BWpgOPFnEiOPpI/60M+CYJ/qJM+5sqLlSqfU8EuPUR31XRxEjsqGZlSnfndvY03rr3wOWc/6dQvf+2GQUiOJrdBFByTTNMLwKaEA8UHzWzN6qV3bXrowx9435vf8lZD9XSq9CqVwyZ48Mo42oNA0x76aCMwdAJAozMXuRn2n4dVmVnWc0bwHH7u74M/eNP05OSJlan5+S59+2h8VJOdY5KWIiTdVLy3+EYt8r40TZb9YgCBoe9SsXgPYabyLE6UfiRRwsturEi6DHSPyZuLQo1yA6hnIDaHIqExddTNHgkAhoOJ7nl1dRbvsuKL+JUNYuZJPtcYxO2uqHWkzjSVcXeh0UvXOLWfX/8LJ562Yqay+89ufvs/b/riTNFrVY6YKNZGI2uIdIrnERjqRXi1JIna/WLeKVYa3lc1YQBZo43jAjmjElM2SQVTQzbYozhL4DF+25L99asRAyo/8FEZRfrrU8Khr3JhiPoZj2UkGqSPxV/Ub9iftcYBKDDU01QumRL7m3T/qPUQHSjLiIIoMNclGAqi9wjulAdZ21qDjCKKoHjfZRIaJmVm7rJdu+Ze9ppL/NY4FyDQ5WBfQM0eBkNSayM6avXixps6X/zUCLPCRQ0iwOZ4IIqiScWJElNvANkDaPJSABdnKbTfmH3g/ZLiRf1GDLBGEpidivFnmgYOlmrPzgOBocHiV+I+FRwcKu0z7I9HAQlhYmN58ISNWocbswh19b4WuxiMdSeQk1/7SlPqRGm+feMtR180/8LnPO3LX76BcF85UcyJMH/u4RJWZBqJr7oL8yuXN/783e98+ctfvnzVkaWiw4FIF7ZLQ5A5z64OGQSGTgCoZYwOSia0gdNNc3IYL2PPF77p/NE7Nni1E2tjTjJoZWk8sQwzyoDJW41aJUVWfGcYQ5JA1KMFicBag4/Kxbxz4kqYiTOkn0rVYgfbWmmnzB5GUaZzzU6p2KijolFlcOMrd4A5IEWuodAdWGC/5Qfi0hstD7AGo6GJK9L03v7saKNedasLcW/fwp4lfvDcE0989uNP8vyJy3706cvu+/R9g/tcrzVZO6kRrSazS571kT4YeWvRCA7efcyzzjdiXRV2xAsN+6vGRv3X/Qnq5yuFVvmNHDKqJuWkMOjXYvz9nQaEhCoFAFI8+UiXN2wk6WbQV82gePG7WYuo2fhxP4CvkgEMDYMby7ggek8YeKTeY5xCxeceEjBiTA1uUuw/XlHEhSKBTEgpQEk+IRVc5uZsLZm6f/uWY04+8dRzzxOmZVtylYNc8mzE8/c6xSQmRCdovPePb+u2T2pNOnHWLYpBtYb9R1MeUD6j+MP2aksgKvndUDGEvvjVkDvQKnyzZH9i/AX/4qwvpnOjDM/YgjiFwxT1X24w5ou8/0xFTGZtqqjYWD2KVNg8cKZe5aNYVpGmWFw0vo70T/Kk11x3etsDR89ufua5Z0xNNKanY7fFUOm+HsOQ+eQZVh3Ggy4PbZYmpInecc/uP/uTt//FBz/BpZQXvVLBEMS69AEceC/238n+fUwjMHQCIGf2O1mPeT3RMquRNwWHfPdq51d+ZdvIyOrGOONaR9MFpzUWzXceCN3VYj2zGD1ObjvxOGxm3iVpSuaRXxQD0F0pIbi6OYCV+ctrqRP3v4G6aClBXDJPiCtlrGCt7vvicfzhqqIGEwCSGK5n4Ky5pFhPPKOPMbeH4+sw2M/tnfXS3tPWHf+s805c2Sp277zzj676y3v2bJ538qno8S13nZu0iH+K6wP02LyPIbvDHQNedMZNuQ20feZOkbWCkoqAub36LRQKQjKFpOTwtAAoq6BtDucYeJoNqiuFl7+KaJJ/AhEnu5ExOqj3YzLBAYSRBLQBwlBYcTfTJIoeMugZPJABhsypriAUivqgKOsWBlB+UEYI7D/IBVVGs/4yVRqDABAJUv+NFchhFoLUr1Uuet5zyXyaqNeExfzHRKkyP4wF2IygQy1AMw6//Ln0O1+pMulZhsWKwbneuMZLg4SifikoGRqMyd3AJUCMtJYXVygBnuACZjMxAG3NHjp2GvFshgggNqF7tumBSlRKQhhRIYEhoYrZJyanEYYjdcNKKKQcqCZqBj3n+qJL8wfUcUbh+6X2WI5UBEKbw7jT23PXzWtOvfjCc8659AtXpTB62K/g5tV9FfpMTwND/2izMTuzd/2q5qf+/u/+18tfe84558D7XBXq163IRNHvM60Y23Y5VBAwdHWoFPaRKKcXYSnQUCoF++V1Xom7NzhveuOnKrU1iRvFBMil7dGJJB04lXx9tUFIjGEm8wrxFrFAVJwtvY7LwFI6gB36KPhd7CVyXzzYvH9ShA2XG7rUFVjKcxTfQ4HgC9RXEViEOUO5hZSXkQ+qrPlJ+xmcRBCouA2RgIFDVghOkUnECzsj+3YlY/WlL7/oZ//PS56+ZsS79Jt/+5or3nDjnmuDqHpk5QmjwZqkEc1ViXpPJjvL+iSMCevkR/PibjTojjnORBE0uuibEnGqNX0eaekikUUZJ7qkgiq9donuTT1UfSpV/mp2lj+VBK26w9Vwj3oO+0+CWwQVVCTG3y8DSqlQroWrOQbTP0TEwdyYmoIX53Ez/kgCIFEwsJTCoZQEoMiiteAxG15zpL5reteZZz3x6BMeR6cA1kNmGFLkYgex5MXAC5jfixlj5ukBfPjde0LnCL/aJ9EcUxtDlFkiP3DpWWD+3gOXlvwWBBS9NAGpf8A2xK1nST9J8pbyTV9Vx/IZ0TEm8kcSGSz4lbLrglxKTxPCQBKSRVfiRLWFFn1R0yzKSrZ58iON8NINwKEvN68MaVvvvo3k0eefcw7nxAl5jPKgQkqOFPWf2S8I8gHtJGHARJWccRjnfvM3f3NmZsZckNQci44Uy/6C+5Bahq4H0HXCOloVlpb5WtRK75yJX3jJXYP4fzcmSW/GQ96EbTooviSyJ/0B6QMU24ZSJtLh9TGcxku2aBDhfeMd5ZUsf2dDxh2zlCfoTeQN5G0zL6EuwX+9vXonWRbHEGgTJU8utfJEw22YUBh6HyudGdnRilhR2Rj7OzM1sprRJc9mU3eOCcdcd81Y++rzjz/m55535pIlzqVf//THv/XX9zmbndFiVe9iWJCAHxWx79SU+T/sOp16PMK9iCPJq1AaOmdPzE4mNHkdpDjLBkEqbJnw5RM2C4RFDZWoITcqNmX1JJ+wDvVdRlEwLsyIJ3iIS5IoT8YfhbSIbAqSVTAGCShMcrcgzYWxjDzy9GI0qSZZNdZAVe6ZorVnYZXwf6HHAtuhbGKxCEnyBqRVBwrGKtInvt6rZF7dZWwGoyZGmHsnqBHmFRMd34DCBvXRarszu9OpO5PNpzzvZ8gRAfZ4ixel9iLcZQV/+prJEZxgxqs2Bs7kRz9+3733HtWcglUTzGmgQXPTqrJPIUSJ3UJmh9jUAI3ZejUgQLJdEoxhAbLzMGEO2jX2HAZb0PzsEZuj6etgTRWARxYrP70JdpppAzouWR9kB0MQkvVhLnV3MR8AzyOtJ6mgD83E1MToJnrENJqCJ5iWM42AVj+vBIYukytwcEoGcDSeyEk23+Y8uOGiZ58Zvj3qLCRj4Qi9Xb/KJMeK81ESEGQqF6VeaW/Vkto9t93wxcs+9srX/Cb9rD7tSAByv6tpAtRMdjlkEDjIx/+Qqde/W1BJPPlOa8XIrn291v95zfZ980VlnFFaqL0ycKPF8yIaxV/aLntYw2jaKJlcqpVR1tDBtFMaFu9SucErJ2LXFYwWV35VV798ObWfhRPNu6rtcg8bixfRPpGIhAV84YeMlIoHzFtIySrZYHZ8dGUa1ncne/LaeJSf6Hby8eDGS17xkle//sydwcY3fOBl7/3W7+90dow4a5bl5xxQA1UN9OHFRe3OfQ/c2uyWbColVImAvgkNI7PKwqnHYyogQUadKKEQM4jocC2lkFyUb+arVkbiscbyo/Ok3etCxhDEGnIpv5q+B/ul4EvuGnUZzX4/YAfurjJKXEKo0CoZ7OjaoahWoz4plcgGRL4aMom6RbfdGW2Nz7cXzn3K+a2lS3CBQtQqBFLn4Bfm2HSKsU6yb/dO5/KPLomzvSNIUrqSFOVfX69EnjtJTzeiszxAz5TB0Kz5QWNStMjdztEAi4ij+uXldC7HqMGMvk8TKkhUdihxO08ZF0TcLjZLWSP6FCX+/04F1fTmpwMPwOz0nv7OB49at+qC856komC8IxzLtIkp5/4LmYeBEjaqzgfe//65uZn23ALsH/fTSrVKno39x9m/hwYCQycASDTGs9+O9/a8JW9+y8x3r1kzufSEYGShZHzREpAwgFXxjvqYd4sgSJhOg2M5gJdP758sFGanXj7DpDrRmOthnv17DIMZuucns1MvqlDnLH30kpk9/Krr8NVcB8N5SvA1loygquRuJJX0R/1grDWycu/CHrJVtCZPmmuHs3N3PPWckff90QtOPMv7x6s+8cY//4Wvb/1CpzJYMrV2af2Y2sJyKW3YkRi8K9ajDDApZqXy6Vx8XblvuaBnaltERe0oj0xloiYjHU1sj2hI5RdQ+ih7g8BZNG6Iv0qOMPAsCgMlPzV9pZLujTA1I4XlAFDJdDetdTYHS1+lKIT9lJlnRPAM+sWcIxMQR+rDKfL0qgdCvH+AYR9rdZGRfPP/Y+9N4C0rqnv/fc6ezninngfoFgPNjIyCIIkmLxqNGV8SM74X49P8zfT04/CJ0QgaB1SiQeP8gkkUghGVqHFCHCOjCEgzNQ009Nx9+05n2sPZ5//9rTrn0kn0PSEg3Xp37963Tu3atWtXrfqtVatWrUKeZVf0CgOTtMq+zD47M/cmV6996rnnUb8yu9Ljsoe3hhh++w/4pxTjBi+phPVL3zV97+1jE00mhGVU68Dd1YoqWjguoKfyxHWpE6pWcxdSWBlqczXxH3KUoScWotIF6bMldXBLUj8UZzPDMAApgjQfINDH4NLNA+MImsGdxhZDDqlX82b3Bx43DFicwmpWpXDVpwDl4EaW9u+/67Zy3f+ZZ57LcKvTTWh7igD1kASqhEu5q36WShPjlbvufOjvPvDeifE6ZahWNFIe0pNyXToOjxr4sVMBQf6J1xvUS29/3/RHP5asOW6K2bC8r60RrcWYooTi6c+uRzNYFlXzU5aM3FJvdj+VDAwHT0hqoChUpDNJ+NJwWWE9rYTSvboAHYr7NguteB4RkpESTNIzCnOinJf/Som1TAjIHwVCYZ7m2GhUxo7EgGnX1h1Hrp190UtOOfuk5q4te9582e9ff/etHa80NXkyRhmzc5VllaBax4wVpAWFmMwDjPhIwQzIByTzm1fyoSqSsTGBA691cE/p+QixOr6bgD6bjIT47qdADfxmtGJKHM1b8gyyIx8s+VruKoZwx/dzh0gFMP2Us083/WuWP0TaagBdVWNApdw+B+YLWaVkJS8rbGkFCcsURC9g5hM9EX7NBjh+0Aa/Mv30eqV+vRF30/mKX8H3Ea5+MFPfs2/3c37z1yvLV1CzofP7ppr20NyUY2tR+/kDXWSE1L3lO+Hl764y98u7QH/P60opxZdbFRBwfFxCvXmw4x0mAEgwANnBdHCcK1gP4ovtjiLNsEfqIDn4FNTK1nPo4VmfDNZj+09kqh1gMACVNxHxAK6OB7ivEFGN2kEQb7jv6HEYBq8pCpWg+vbGa6Wd99153H78Ap1crbKddTru1UrMZqjkGgGLKETBFFgHhV+/qvI3b3vrL/78Lx91zAlMvrNg+NHso/ADVfpSoserBiCbH6+D7a6wnf7kN+cveue28Y3rs/qOhWIh9cb6bIHHwhdZvmtbWNwdu5/Ib5xsjG7+WXTLBSQO25gALGUMb+brGjdo6azDTV3NG4zuGmjZlfDBPx0wqJMJG9wpqTjJEix+sgLzTHhDKcJTEXgAAk5WZmeD9MCBZ503eP2rTznn7OanvvwPv/u6c79099ezcjwebCzNrRrLnzQeHtHKsr39/UJ/mwkF9yWlawQgQ3RiGcHQ8zmEFHqJurhFEs/oRDK8tBIW4GOtqMbpxANkxi+hHesXCfPCYjFNTmfnM4R7KfRHJ2/SvgZAvw2oMM+RsT7sw/EDi4cHmKG8lkyJBwCMjAPMw5vz/+wGSJQYK1gYDwulmbbQyWNaB6updNn/4EwpYt8rVGbthSM3HXsmXj+x/E1RCrHHsH03pjPsz/wIjxwzskHt7a/bxTLryngbmzLk3koFRKb1VDZKxisk8tth8abWB9OteQX6kuVBUgf02PYo7FjC0LZHszNgeiomYat8aXzEf4N+LD41PYD5v3n/L7B9lWGs5iDscCKIKtsEChc3CquJxYs1bJWeR8UXD2B2pTu3Z3bHPWeevOmM007WRIwYvaR+DlpVvF7llBAgZjZgwUk0P9N9w2tfjUVykXVBf1evrhRL18OiBoY0c1iU9TEpZFH1bn0wfe1r9/jjR4fL97SSTtRMUBoYrAvItO4J5YGAnqtOScdiCVpS5GxWjE9IFkZbwS2g0LRDThkirCeSp9AUDXHTdX2H8nzGCOvphAJfYwzDq+BYnUy9j8nBop+xGlNQpRVrpNm3p9Oob/ut3629/oKNU+P7X/eGP3vj/3nNHm9PEG9qNn+iVl5WKXzc+RT4uyEwtpLe65Db5ggliRr6ozpxCCWsBwEM7imZC1ixqQGxBMUoD5XIQB+4UIGJsavQX1gs0CPSHQCLVG0gjcR0IQ0jIE6mSoX+OnFLuRjG3p/hglv5JRfOOtl1TNKzbfwScjUwgnvxcqkjyJREYiBiAJQBdsHohW1q/CzvjTUxl0rDSnk+mW97+TN/6RfwWUP5MIgiAwE06vM8jauadX9EB7qoz3+i+43PrpxczRQDw4FW3m/bPrs0q6pU9QDQUz2UmEJKmcMrBZ1S6QD6ipTUD56a8ocEhHWKJTD3a1hPSmLkP04BhgtKppRaKozsb67/yz2NGHTCUfRqNYodqnLRkk5agMMJ+1LUWCQ/dS6GU1h5a8e9t5ab5fOefg6t11roRFimDZVLNrjR14klkJvxm/7GdfWrP/evX7zqE+whSc5mNGavX7ocJjXwY8cA9ufeq/7i2tn2ifWV43PthVpleZK3k/K0k3NBdvquTmGfTuBPkfRtYwP2E35ApxpGKt5Q0rCeZ9XRDTqFjy48/GljbQmK9DqjDwWGUv+wKw7ZQNmr16JaNZITY3kyKNqd9kJ3rhwVm1be97rXbviDlzSuuf6aF77stz5z00dB1mZ4woS3NuzVqn49DuLeoAMHaVQaeZvhg+GdNOeCbWER+MlbXWEcNNhVEUIvdXVDDcGZ+3B+8i2OlUgUBNG5CuSoFriC7grzJEq6L+OvabKk+QGLHCcgBjFd4j/QTaQLaP0XdWnrfgF9XmWefww8VVVofpDsMV0E4sicBIxftNiJ/5jF4sWDpdwI/jL8t7XCikB3xkwMNlSRzyhpw2knY6bDV0hORpKFVwDBI63fI+qqe3aVP/D2uWZ1ou+1SmU2kYmwEcM7J9+zyP5choJ34JJyqrod6ItHGvoL+uGp1JwAVVnATBwt8IUaDRhXICA2ILlbPMP4Bz9R+IgfMOwQt9Bcht7yMPpT3+5YDAj0LdKhP1dODrWxHTwelfr3b7nNm91z3nlPGx8fb3VSKfGGdzUKEF2o9VXmImdb5Qz9WaNa/tu/eUcyP4up1qNYWe3yX7o+UTUgsvmxOi6+5Lpbbl7Vj9HwQPFHARny14uXZOG4eoVxAuH7sJOYssT9VH+xnwRApmECiyTmoMeFpCZZDwGUn6QXEnBVV1YXsp+jnkq0dcjFtkDzw96t6FUZeLOTCdJyVC2vWRu8+6+PPWWTd8m7PvRHr/317+77UhQ3q8FR9fK6sSLHWqjXy3uIwiHOQKNS1q1rS0t7EwhtKDLMH8DQGw9+u2L0+brS7dXzhf7uOCilgT74ZeivqwVsJnf4CYieSIMO9LkqR/ciYEPaB1gnCXiOkpGMq2Lgs8pM8RxWXEpJltznoHgK8N9OMTEt/mKSXOoPxZJUfpv6Ra0aFzmG+eVe1quNN3/mOc/mBjMI7mMkGNtB5glG+4/wuPKKzTdcF1bHvEHawDA3w+i0XMMvskN/BAa+ybIcvYYfGkIN21e1pWpiMGmiNGj+cIHEVqkjVbzxDAXAXLMOklxB5eiuZkiMiDQ4cHU0FP+/17cs8oD/fJPm5lCmJS+O4Jre9J5dvYXZ0884dcPGo2Dc7IShwZYKbOzesqDcfCwm/4xOo8DHRcR3bv72Zz/7aSbbWV5nSZYuh00N/OhOAuOGvpx2s0oVpbD3IFYzbW/ic9/a885PT3gbqmwH22Zf85D9aHGLErNbVA83Mg6n6K3anIsexzgYUzuQ3KZ08SInjEc5KyTq2aQxwGJ3kcLBMpYLMHq3RZ0YdYByZCVQo79gmai+YTAhHDSAEwYrGxjDoIMmHF9ieSqFOQ4Ws1K3lwZRI+4Vg2kcDXvef/vZykte7u3f+dArX/e6L379Kh6aCDaE+XKvXwuKSq+MJQowg2IFqT8tMTHqVSQsimOhHGGtAPscYHxOf8c+HZUCkAkOoTrhk+BeUnNp/Zl2lx9k5YIFpn0YjxRclJOrFO7ysaNtYzX/oRPRXLUkgOA7BPpDjb/nJ6pPvp0q1q6/6LDsFlyKLHFfhH285gOyQlfYAFOpfRw2+GEeVLIwzgOtiOPF2vUXNi0tHRiFroN0ePVht5VAAyQYAKwNK3uUSh7Or6Mgw6NldTJoB/mBbu9Xn/WsyfUb2c0gGCl7xC10iAdW/O9rtM5rSDDoz2J37+UrvOhArz21f7Z7yV+uW7Oqhtc58mPPBX00U7FAt3qS+KeQXbgM0SDUoxSRDw9BNjWtdunR/DAjWfLIkw8+9FHp9MzGnxldIrOyz0SF9kCQ+ghfQESyLGDQwt0btAxjD735qDQTeS29k/dRCLWAcW0CJl5ofkYRNI8GFC5AMo0spAVi3MW6DDWedFJAvy0QHpvbu+1bn970ayc9/WfPue227wwyJjyYY2AFIkTAAjLomGkpGgnNV1rH5VQyv3qqjkO6C175x8959s9Vp9aQIbNXtBPsOU2SKKqygIWwK6CVculyCNWAsOxH8wBRCswZTMwt1udeffP2/kWXbPZQ+wrCQGsppBE7QXSthzKVjjqS6W3sisQlvERklVBMnxHqCc9dYpDVpDXJ/k5wVWJJaEpP2F1tSCEstFtUNr2P1ygBB2jbl9NFJjEjcsOeI4izcpQEReTnQTLXT/aXxoL4Ja+IX3Vh/dZv7nzRC1/4xa9/kXRj8fLAb0gbxTsl3QrohfV2gEoc9gqaWBBOtL13eF+CJXFWzoPixe5cpB6SvEkaw3rlZyVWJLXBqQQWZ8mU1A4T811QAwFqUSK/vphIZW/5UZfEc1W8nYofJTCtBnItmANXwnG9dM7CMZLSehYrkyA7uckhNlcuxaHPUlVelBb5+g0bn3LG6VoNoIhHfGQsAy/h3xn0n0VZGNa9d164GznX1YOTrEd18h8zNxBWhbvvVUUh6TMUGNaqPptn3E99l3i1SEYVa9xJNaNao5r11ZyQnmmKSAOPFxW5zGmCYctY+4gaeeyggyY46JeC8AO1vnKBgymg/et97bCza9dDXsJ2cU+Jw1K7w6oJKkH1q4coGFUMJWNMxbwMky9BeXa2TZUk3e4Ff/kasmHOKo6pJNFhFMdZDpf5j2/X+5aOQ6MGRI8/kgcyKt8lq+scl1XleS9890dvvWnLSq8elSN20S4QcjlzfCYTDpDQxQwQh6XxN1MflotxaoguY2zdsrBG75xwCE1oGoa5K1AsNmDacGJA/8WwfiL32oPuLW6WWJFBh8z9IKKLpVr428lKnV4/HSRh7Jeasb92Xe/lF1R+7/cbH7/8oy/+kzPvefBOwHE8XMHiowxHkH4liCL5jBQa2CHs59ulskWRQGJn++9ukszGBECRItSnhxO/0m6BUiqqAsafSGPJlMog3CmCRzhtiAYqCcu5z/sNym2EBFCr5ztwX+QBVA8Abkp/VTPv5KedNuUrrBO8q9hkyUW+PzmFKEPsFPqDO6zQtsVf5vlNYcRMVguYohzB2xvMtdvPePaz4uXLcSaNCPwoDrBOFaRni1qzcuuN3qf+QXumA4IHY9oQfElojI3EtLOwntMEf0Yn5KSr0mjul3xBc00ImykmOYgdI6mrcUzpL0ldQwRMlN3kMIkZujEVXPLwL8QtN2cATVk1jTDWWL5KbSf1Lq7CTfqB3sppk8BqTrulb7MENANKR0ZEu7Zv6+zdfv5Zp2/c+KRuihIS7iIGYIa9jE7EA2hZfhMjug09JgyWTY19/IqP3Lf5OxGDFI0rEGp4LWnLIcPEpeNQrYEf2bZJcBPgPLFAqVXvn7/Uu+LzWemItfIAhE0ntuh4UgiA/gF+8znZljArIyuynx/aD659PKVl5Qz2gIYkY2sUbBVhA7hENPagvutsQwXuMiFlsG8BqWyFATwidiIzIQG9IrF0EcIBeyTgcaY+MfgHz+AosvH2ujCnIBwvDcYxLN8/WzTX3/Oad3s/9xvBmy96zyte/Yr5bGfdi5fFywK/zgxc2WtGyKUYbKQtMqWjgvXyfQNCg8LiBFKfGDOQGsL1eVCG7mucAKHUjQMY1jj01xI2+xbiwXeDNCVWgBpTyYefYLnCMPQ5dHUTXYeyvO1WKfTXgeZHricN9LVgYAj6IKT45tAFNPHaa1P2Pyqo1kHrROoX3xQHc4Q6ZDm28zs2PVK8yBE0KeQCmsllvidBNTTfaR917LEnnXc+EARn6D2KRb98Lp6XEbWlZ5kAT99x4bxfXj1iAGJvqsPRQQ26IMhOvQnNpc8BXU3FYmoYswhSBXNraPNjcG8GPyQWS5AJkPBdz9oWkmJpitQkOOgv839sQF0yNS08Ax4gHjIsjBpBnEvor4AB/TBszS0ysLI6eiBMAHsfPJ8j13fn9z+09btPWr/yrDNORy2X9LBEg+nyklHlKyxq08QHO4VVaikr4yK/10nf9sbXeYNkkCVZ2oNlo2VCQ0difOu6ylm6Hmo1MKTaQ61Y//XyoDmG+JN8IY2698x5b/zb69Pq0YP6Xhs+4wYFf13azBZAz1jaWcb5W5rgxQsb8ZL2qCXSDREyIT72fkM2IH4AtxiuFQDfmUSgv4IWkvE1SjDLUe3SYigPstsKA9RN2h7X7jp+IAWUHhlEoBOOHlKvjfO3clihA/dS74C349TnTL/6XcdsOCF76ctf+ua3/nmnmK83ngwi9dNSkSAR14JyPcsZdQPyIIDhPuKg0F1ymsBTRih4fjdHQNSHHSDCCP3p+QbDwnSTEEFrhjs2CDBGNUR5KR/M0FOCLeommYRyBfplxi/k4SdY707TTwD9wkgz7nRX4wFm9e94AKCf47xZfBNtnNAfvbfxAL2NeVudvBkI550aZvBPWmto1kBfNqDMRohFuBx1xS6oN0i8Svirv/27TBmIfeD5h5we8cEj8x4ukkrsB13+1BWdz36201wl1bZq76ADTucixAqpE8ExYO2k/pHdjqw8henEO/Qfmv2IQ8iKiFvI9eINyP5stczcgEQC/IvKbxWReP/Xli9yL8rsCjagLALANlbLOrAC0j/erEGHtSPf7NBflSYewCGW4AT/4SKAh9mDxsm0BtWN76tSvv3uW7xy55nPOJcHkx6yvJ63ESasS/wZspBsQ6uLww9wHppl3XWro89+8nNf/exVjMbYcY93ZXAAe/OA0cXScUjWwI8sA2AbcK+I/Upp3iu//m9vfGh3pbEWAm/JTbE8FZvcKsEcQJF5u1lTS9KXvA91lwgg/0H8NjKQjM9UgXEC0gRgvZ4y1RDyrdMdiRkIPUFDWz3gVpMBqQJ6GIMtlXI8YMQq1CeZL8YXWxgHoP9cO907t7892PNTv9p++ZtXHbHR+9MXvvEjH3x/rV4ar6yfb6XjwfLYb9D3wxITmOUUDiCuUQP8hPuaBqBNbQTgpEMENRsHgAgCKB2S6PVf4rxJiIJZKoeyoJugZ4sHGMRLkWDpNaIgYFzBrpptFiqDfUzjSsdgIr+b6QXTDavFEkB/jY7k+h8nclSYVZtEfkXCgFRVGjsJ/QFw9D98hmn/CSBA6rWGq1JjwNdQ/jDx63gAC75sBKC5UMqmlRk1b19r5vTzzll5zNHMOuN8TvMFj7zv8cbcmwuYqi5q+/d577owW9ZcWQS9RfB3bACO5PK2ynNBKpWNXIjXhCv1atobYF3QT02PVDoS7SX781HD4cLwrq37FcNAzLewUwqRXnaf5VLX3MCRuQ3x1NgG8FYypAfpX1yzugBSPwFR/PAQb3CRpqJTtQLWwD8TzB6Kx2Lv9i3ezPanP+20qZUTiEV4iQDnISv7KEG6BgQylED/FuA+t1qtAPjLmrWVk95Ff3VB0Zrjm0kXYIprRxg9qkmYYXmX/jyONfAjywC8pAbOJ17j6jtKV351unLcxla2HXNxJDgTLg0t1UtBF+ADOcoG+3hWlHLGAboEdsnyMAONDNxSYW3cBeIDNwLxkQSN2D2UnaX80ZjAqUqIF8jRHewRbtnsq2R/94gAIOyW2HkJyxc2aO3NTazb89O/mr/+LccUC94Lfu0PvvCpS5ZX11e6zX5v1+pwjdePNWxx3Vn6crygxT3c90ow5kuQyQ3xDOoBAsVLHaRb/FD35RB4gBViVyqb+IGiuUvJ3XeZgK/PVM8XAEtVb8zA8Fhv0+cb+hueUN2CHxsHMKgBGd3pxhhWDaoDxwOUMWXV+908AT+Howtlr/KplGifjadRNvCJJsI1hlT/NOPQBRA/OaWu4YpqiN0uJ9evfOZzniWW4IdJIm858ItHcRQZTrLzbsu74kP9u+5srjqinDIlOsrKcQKNcvg0qz33CkjJmKzwnUpzgj/1BmTSDAxApe6n8YX71LdGN1phq59iFTxlowHNAfATXjJiGC5ePICVwHBzvkuY7N56UAnUVBap6h8VzMWIMSzyA7v1cIIBe2JDgQNsfXpzu7bfe9vGo1adcc7ptgIxFwOQ3EA2ygkGwAY8nIT4fG0GWeqn3bmVk/49d9z90Y98mGEpyUhKfYklaVZg6TgUa2BIP4di0f6LZUJAiaZnEu+it9/q1db2KnMoeKqlClNSARplSJfeIdlI2gxTn4iaQQ0LG2ZKKKYTsyReKmRgkd7iEJ+Fq4atdAW6Mj1DYMohTDdIBQJgEkTqliLVGTjtJwih5Nb3kIpzvDWjKUeU7/Y8P+6f84ypV7xh3fyO5M9e/Lxrr/7EZFgrOvdXi/7a4Nhy1mWimL7vS7HD2FxSGGuRTBob9XUrCSUD16UhMLXAMM794busGy9GUhq6t4pnYwLFk+QgTLEYQQBJeK97nJw5RpkQyU0bB4BaKqSdbioYiOQ51Zal4hYVxpWDShUrJGDyJa+Vzkdk6TJnd3eL0U9wR7PBzPbaoXlhazR+2Twlt7121nvqeWePHbFOfMRjPV01x8W0vUqv+8EPfGOXmxR0ZnbwwbfOT45h7kJh1ajCtNHhwq4aVGfDO6Yf0ycMf0v8dzyAYomnumqkToakId5gjQKxiCBVej1Lzqo3JRMLMQUR9Yv65eH6VCJ3jP7yS9nZT/cCYhYDw8SjBC5l4Fcx+MxQykHzSXfb/Xf5lfIZTz2dxEznStNDBnyDlUoVbs3Bz0qtxs449Uo1QnmU9Vcsr73z4osPHNhHtjjCFv1R0lE9LL56KXCI1MBhzwBMm0Nl5v2CLU61SR+Ux+lV98x5y97wT/tumZ3xlkP8HfQl3RDj/wWsK4sw7XMNMrQSqB7kuh0VKBbpmsiVLF+EJsgzAo8whx+kEXOLRTvot/xiPijmgn4v7HeificoCPSiQRc/zXGRxKzKz9AdZX6a+2nqp1mZAPqlvBXMA8dhrxrh0jnMF6LZvNrNS0ni4xgf5T/q3u4D3nVP/8P8Dy9Y01rY8b9/6ae333h9BSVAvx77R3ulFSwIoLgMGFBOCMMHyMHa3aafJSwZ1hBGy2FR+NhVmmEtiTXf10AO8nYuFUyocQzLn/IikfCObKwkaL3Y+JWSi9vBulAaDS2oqNgSE+psnIyCC+t9ufKhxkp+zpt9rG5QVbOcCovJHs4XkFZ5r1ma0Pu1E6QNL7AIBIvzQTMbVPOwmsPmmProo0jjPeUBZrlxlMdBzlYjcYQLPER3Tnn5xMaEMO2Jg3v2sOllcZJVil6liFH1o36oDbp+r94Ii6wVxtl8ui9fe8TZz/sV5jTZA97NADAnjF/V79vfJKYzS6n7OIcwy3jKj1jQTfJuWix/64Wd2dZkPIY2qhOlWk0ApnFojkNmMAAhQfDRYrH9Z49GTdIy8sDIoM/HgKjiwtxSjeXy9U8CGTH1sKcPSx2WbLDjcTzIotJC2YsZAQRBR3dxMaFtgHphma2GmY2Y872ZcNCtDspVz9ciDe1/abxenqxY7cBb3eSDLHHg1Bq9iinT0syzSOXGh9IyFJcAzFdz85686OEAlD1Ce9gih1VW0u3etjXdP/3cn/252pg/0+4kWRSF41Ll99MajlfllaSMkxL41iBP4qicpF0yZDS2puL1dh+4+C//nJ5RZ0yjeiXVkgpIFXEIHoc9AzAKAyEQStBgqjtIBEdMK01dd1f3mmtv8hpjpbgy6HSWr11bJF2zLFdyszFBOyD61KnuIPWJ8MAkVUl76tSgjxN/lPVQpkMSQiTTqf5FR0MUUkdD4Y0YjBpdMC1MYHzghg4o+NHy09H7JfZcxLlBGHmVWrle6e6uhxP7sqmt7dt+45UnvPCP1+/dNv2nv/OKzZvv7CVJPWhWq7LzYW8mco+kpaUQRLiGGxadUlo3008Lk+B7HDbmGMZr4AITMSGRnBdTLz6uAEl06sMXE1A5w0qwKJ7V4+5KQuXkykbuli0Y4+RZVRLY8/DhQGioITCpX3kP7X94XPlQCF2BWUxe7TRXQYOwgvMxeGwvjqN2rxPhj21QdPvZ85///FqzySMMFLjmBu1uz0J+/ueDl8jbEryVcsuvtAjCrgHb3N78De/qz93RnPBqVS9P8pDd0h+uKpWKpxZrzOjk4De4ShPNDGtR5MAjitc4QLGEFbBRoq6ApVMTOmIzxRENTjGhGZRFyNSk1+FGP+59B7csMarngw6xKt5qFOuiF9MvEgAl4/sRURjtItHPHpjZt3fnURvWb9q0iUdYkc4KsCCIWChAsI+JHAUwQYu7hHW1dw6y3rFHL7vqyitu/tY3GHPjfY/6NIWQe/PS9dCqgVFfPbRK9QhKo3WtCDqm+xYZstc5Un4p2++FH7rq6/fPJl59bJBlpVqtgzaXDiQBlm5EL5L0JAU3vR6xVbOQZGNzm+IESG0y1xN6PXxKSWLJUHgDLTYxYNMDLCM46BQP0HyyTSmLB/gsmYmSImUrroS9qljaxPQeMmLmjwWlfZ3+Xu+hZ/zZcb/0gmZvYe/rX/qnN3zhmiTPIi/GBB5JFgkTnQ/dGElT43BTVJmU7iqKngicqB8aqBDWTCooJoBRpdA7h2DkHhCrU6ThAnBhmgg9lNiHAABAAElEQVRw2zBCuhhhEzg1vErzYT95ux5REUBCFym+KaFf2Shs6h2VFVaIiKyfqkWET/3UnLBkUVn+sKwU2VtvpThkLJ4MrCh3fSMFZ4EE7yVrvZ1vkvYflIbP4yQ1A478SDHkwoqN6fbC8aedcfpZZ1HCfp4HIVoyQaEOfe33PkqldhjiQk4iKroOtGpKjSvRBMgLP/jOmc78+qhKa+D8oObzqtGhYo4OwlZoJnhtykS6ecN9KRHBbqpUWnKKw0ucTt/UOEy8ouKnChh9OnrTTK/mkE31L4WPzQpoMOGTA6MHzgHU6ibKjTfTHqppNaIhsrT8hvUaDVuAYjoeQECzM0SqyqzKRdDSOomEKLLGo2QeLrRmtm29e+Wy8TPOOB0vhN1ul4oJWHnNNvHoVhl52ruk/nREYlTBrWpc7i4cwBffmy/4cy9rs2qCxcTazWHpOCRr4LBnAEgndIdFHyQsVUfvDfBdc7/35dt3lSdXgqJenlYb9c7Mfr+KztiAHtMTND8QvxDfTikj7Ce2OmIGQ+NC1B0aIjMBYMkEqiST0adOjbDNcTTqFE5wH+cprCtOYQCyI0IFwFbhshpCDmrnnTTK2YIxHWRIUfSWclyeDZfvSm4+/8UT/98Lx4LWzje+6I9u+MxVU1E2FS9rVMdR1iQa3KP7pgvxYiEjAaMloSVYCCdwXIErtwxCESKBZ94gABVY88dA34E0N8hDfddN5NqgSaxCD4EMILTpeQwieCHCpt6sHMQeyNsmH8F4KsDQ3+4wCDJdseE+YyGhvJRGbtNHwgAV2jXxA9JLmSTc8/GeIUfOIJu+Dnt3NxsD+qt8QmOKxMehP9GO61oCxs4I/ZRCRjFatjartNgA0m/Uf+7XfoWaydC9gTiGz0J2/Co4Fc/37YHAn1BQ68ukD8RKmJ0nqx//x/bXv9BZvWwNo7VOmwWuAfaO/yEPalKVqXoH3ymk5HcXhoMJwXVKcte3GZo7lmBh4kF8aoFKHDIGnhXKowUyY1C3+EteJdB1oW2TFZDkkmEx7BsPLhLg7g6nC7VmEeJzcIUN2JWC6ifjVBu/UslQiKxwaQ06Q6Veg27uv/cOz2ufe95TqcJuly2INOy12WCW+GKAOvpwSFCECOXQYB7eqNitdMOayRu+8u1vfflfkc2wVxsVd1i2pT+HTg0c/gwAsXixOkHjMGTHlP1e8N5P3dptrMjAa/YAq/udzmx5rIYhpuAeRSg0z1VuaIR3nNq1FaxXL3AnswJwgsyxB7ulBUdiA0omZGeqAC0vBtvsuSLLUbeuWDzAZH/J93Iy4UxLGS6g9g6a+K8vEkYkAEDcXwgWtuQ7j/n1ZX/womYxt+O9f/zKWz5x1YrSAN+SRQIUo76uVOBgPgpzmdeEUWwSJsu7BP3GCRw2D3mALZwSnyAA+vO1rm5MqJeiwaGVzVQ79JcgBxaoDoXsQIWBhgRSLW7g8yXiwRh0GofgzdwisUn7AhXJ6Po1FP8N6InnJ3wWt8+csvUkmez9hcxWhVxZqsAqODzHxMZT0NoMT6ehgxNIZ0SR1ECM1bR0w3YgyACp/gCX1wlq7UGQ94r0qc84f83xx1OSUJ6f9d0S5+37sW63v9/zEg+YC8JmmJdIQ572WYY98BZmvXddtK1RXze/gBMcwLvFUpHi3+O/A8HhVR8ghmYLTcQJ3Lko/j+M+JLrwf2hdA+gD117lqXAl+dn5H3uig1g/k8y2wHGS9gAmTUBam+xd41rxNgl+Kv5nGECsWLkFiOsV8MI7nXaLRpBYTqAjQCAbUN/iVBMuBSlEPbihwELevfv2jb70N1Pe9rZGzasTRIGVTyP1CMdXpribhZiGX6jqwHah/fiwbBRj/POgeOe5L/pL1+Rz+5lTyINEpaOQ7IGhgBxSJbtERQKLARToHGWsrQ972tbpr92673+5HJ07h7WlDGCTsIy9wGu24EU4RrnCNck9BC2AcFQNSSI58Sy0MR/w336tkN/G+CDbTLllCN2BWAtqG85baUYDEDzm1pSgKtfeADsIcyKGPmNTb2yGGGyHu8u9jzQ3dz8meRlrzmqMj9z2Wve8s2/v3zZIKsjvaaT7IHFAiBmDBQQ20FLTR+nO/OtQgBdTfwnBuxxV0mfEsikRuYLFeDTBBEWYVfAY/hTPVg4bWaJEuXJXVIgbzNEp5O76hK0id2QISlUddySckeaMP0dCpMGOYIlwxuqMBydcN5FyFFLiYOYMt+W/srdv7QayP4j8V+jDk7eCpeQmg4Mt1XCmkrVbGqEv7E+SvlaI5yZn65O1J/1K7+EsC1J2xAQVbWMSDXS0LDk+x8oVORkzk0Z9NJeGDSou/e8Y277vSsqdaR3VNm452Mq36vG2vv3Px/2Thn0qmFoiaFQD3ZL1++GAtL5GGga+ksjZAad4m2iGliCrQLTAFIbfkl4MEUQikJ8w2VleZFLGB+RJyfVoqagJf89tqoFuQdvMNB34aHgb+2rVhZt6HAjANpY4wAGXmGEj2z0Nd0kgQZ67QPb7r3jiCPXn3Hm6aTvdOB+JU28UFaI2lBfXUFiiH2jxp6DaCyYbSUsHl4zWdt6285PXf5hvndpCtjq+1C8qIcc3gfgBGG6niBZNLh33vv7L93kxU2mBL0xVAFwhE5Yxcyl7eFvTchu7MIUO8OfdAFOaX6GqiEUDorRKd6gR0z1IexzkeCG7NLFA8QJ0KA68yG7ag5AAwKbCcBKRicKoryddgCmuFprFy029G2cOfHiPz1youR98b0f/tz7Pry6OoGquTyYGq9NaA2bNCWUwxnhYU6CJ01EVKErpTEsFuA59LcYp6yhP7ruaWAAREji0+HQQQH+S/VgQO1w35II8UEPw33qVUBhUp4qAbaiV+lLTf9DLgC92XkTcKeeGMmZlIyXoFfhpF6N4Rr2aCjAuEsGQoCYVEry1GyMTYgP0zI2wEtATtl3Mp0L7Ah5sAoSKwKm+BbYczmuIJPiFjQ49yfPry2fauNMyXYxZBqTj+UftSdR+fsfbOcC0aiswG2RR2GTqektm72/f9fsqtUrOkkxsQy/chnegCLZ83yPjATEPG2Vo6udYgY2VBrCukR7XiONkCXgARtauTkApxpSs0mEsCvsQSsJ7Mqz+A01HREUx1dRL8aMCRgxjNrXPlSfY4fax8qmhh6RgRpKP61mrOld/ciPEmMrBmphBImykzKKzPvvuR0COP/88/EU3VpoM6DSsgvMLWxhlxY02OFeZwOCUoq+v0IZvaS9cMqx0fve8Za9qJIWyzQs2tKfQ6UGDn8GYFoO0Tz/+zI3uHfX/Ge+cXN9Yryg3w567GzqlbAQzcvV0MM3ND1HQgviikRMxGVxD+G7AE7NAtgBY6oYeo2dJvDaewSIksHUg+iFespOixSrUIBcdEXkAwwdHqIbLbpaVqb7qI36++f2x6uiX37Rsaes7n/lny+/9M0XhXkrS7BkOjauHtHp7EzQcWufWdQZWP7QHTH6ZAIU/OPFDopUxMUeuAjuPKUiWeEoEL90DGU+3dThvlRfNzz0OIXn6g5Lr8xHGfBqSwDAKRHaf5Mg7QmZqFiWEjXFA0BdnuMlXOHAPLCYsQGyUullpDQuBNYpvb0acd9eMXyxeILxAFnoYKPOGgBGCpq0VwKWqE7PTq9et/qZz3suz6u8yompAtgFjaq38bRl/L0vPua/KPokF0tTzSYRrVnvb9/5ud7chnIlZdVIJ2mFlQWWg1M8NCH/gZtYZdgXKnvq052jd8GldBhdaXyog8/WWFGqGiCeWzxi1ac6h67srsVbgxDJ2jHIhoGCNn/n+/h6y5Y/oxeRxZCRD2PI3bUmgcXD0H9ICmpv8uaVpOS7GXTkeS/NqDfMrSL0jiVv144H8epz6qmnTIxPwFJZEgxnzXJMl/VR/LfCKxMLK0BP4+FaTbbBFX+wcKD1N2+/CMfZurd0HHo18H/RjR56hf1eJUq8OG71uw1cpWcskELa/5MrPu2tPa0d4U4NDIa6gZBAXQfyRyAMTI/rFmPS/+iArl8iwJO/YZk6GVgGboy6EZCmsOLVSzXiLTpWHPqABFaAZ/g4emK9Sz1SIjwHfQub+Kg3NtdsFc0DU5UD03d6q7Y8/cXnHHOyV7vmW5946auiudm18RF4rygFLRyBzpfCuuRwSZ7CBmzBmUxFCwNiCFE10chQndRgHXNvvALXQCo+vZpRCc4XWMZUquAkIiy30PiD10zX6us0u80jTM2yoZV0SOUAl/woVTTnIY2RXOTrpaYapgy8i4VAZLGgEQ/zuah1uMlyZNTGrFIQdupjMaBBG89c+CDFfUZRlRqMLMnJ6g4bVsE9HBFrKXuV5HiJ8nghY9MvnO4zHwAXJg9qE1FeT3IXd/mAebXMBgf9KNdyX7wWU/+1eRzntbE6rIY/+Rv/3Zsc6/aSelWeiKkHnnToqC0N/x8HrvdIfYCFX0FJfpmuu33mk//0syvWYTpAtTM/UCuyBjoi1pNR3wU1J+zUK+BVkg1Av0KmBrAmDQsl7DNvj/pLOhHQ1Gn58d+A1xzk/sCrsYtBudSW2kcnIj/SPRzG9nknQoMDYvKA6aRSKygfKJfnSqVZ2p5v49MhQ9ZrGxNhmYTcbohObRhmwwr9FPmp5hUSq+VKuWlw+AtUKa5D6WkibasGSfSMVdWZQuth21ZnzQXbZLRndj14582nHH/6qaee9sUvX3OgW1QbcQxx5V0TfyiM+I4Nbkzq8LxlNGTWGdTL3WDA/purVno3fuFj+2/8zbGnPY/C50kWh2GftTExSxgYa7H+mBIuHU9YDfw/u8cTVrIf8MXa0aOOX3xmzqDF6pV3PNRjH0SI12DJeqppHzTxC7UT5gHDSXotMZCfTuh5MZKf7hF3JY1LxtViSDnMwXqBfprug4yVJ9dheqkp9DrTpUT12ZpfrQRj83NePTvx93/mmeceWXngwQte/dp9u3fXvCrTZ2g4GByknbTGwgXrF+qzHAJuXU2/bzcc1xK70i3JYww17IATsRl6VMEJfrvvzbXSA2nRZqlXGe/SIeiLPXcvGSwwuw3ks9sIS7yYDU+ZSC38rF9Oy1mqmW1c4FEgbL+7LJorQqakxW+Eb4jUpr6HvaEMs9VetuZLTNK+XFyFWXKdmhtxLo1RZadlco/7UchWBwUAEDLN6Rch66I4q4NaZcBWXtXYq0VKE2OcyZIjHN+kZXaXKeehn2PxyWwxgmUlhOllCYOkwaaTTjjxvHNanYVKNUar9GgOuFva9Aa1rBe1WoMPvKVbxn24Do0n4DdMOWAd4wwB+szIgsx8FHY6EgRsth3IL3r9olN43cJrc2Lz5U5UTNzC3R/2PKwRK/k9/KwNSm3jG6Icm7Hhl3RENiBA9e/EFpRI1C+fRLwolPPfHYqFtEaSPunEBowZWFhs4KBDkotYxbCOSIw4ZOMAWg0qMhrjQaNycRTeVy7dd9/Wcr160kknsuw6STBJY8o+FksxqlvM3koO7WOnIJkSk4UaiyL7/XqtwqqBN1zw2qCf5L1WTMNSZNKQtJ8PJ+sXc1kK/NBrYNjqP/T3PnYvLLwFaBoniUWtV/Lee+21rAD1KqyUBKyR2bgicMpxm1PxKyBbICIRUE05rUlgixEPsGTup/qF+2kB9wgxJFMOCGNkYh2HGEE/C4mJJ7HJyIpk6C4xWGwgj9jJif2uuvMPLn/m+ic/dxnLWr/8mgu+e/3NY0Ftxdgy03Lb3o/geELfpI/xmIpC0HES63eaeEMWNHFQ1WhFMQWW6//agCst0H2VgZtOXFtX+JPY5nVShkhsm5WUq/NedX8RA7NBgX1ROcDayPPRNtVLlYaW5WLghOEO1lNhyryDB/qHPWEF6ALEYsvPvCrTEWy5wvpcOBCivYoo1DHdjlN7yTqKBRHgno9hi/a20ul1/XKnXO6Vyki3eah1AMyieEGV3XtwLTyI4wIFM1u6cI3CAXsdwLjM6YMqkupAUY3D1qwSxY1GY67Xef4L/getUG02eX/4yMmZQVaaz+KDmw8J4tInP7r/ui8sW75iHK84oJgtCxg2LjtIemUW5UoAly5K8GhiL8ANLTBNLRcV7DAnhqGTYWfA3vbMMBfo0BmFKhJXbjgZLc1rMkCmn1jIKMBQQFebDSZS8cMEbqEAu8Db6xZxGuJUjQvTuRphiBhcwIR9YwYgPq3B6VJbAmsoHhS3Vo3KssrRmP1US5IBMaLgLffeyUzPueed02jWEpZDsGBcwzbRGw3P1R28WkRaYi+LNta0DDEYiUEhuF5Zs6J543W3fvajl8ZsOpy1kSKYCYGzwVFgmyr00vHE1YDY9eF9sMqLD5AypPzZ+6ZvenC3V3+SD7rJlTtUD4WJMgFN6awJOIwwJY+BlyNBTUiK7EmmZTEWVkqInCsPEjSkcwmIc+KVFMcmm+lxTjiNVBBKDBYijVsB2HcYR+5ePNg3e59/anTcb697cuTdctG7vn35R5dH4xE6HDZfzQPbhJu1TSGL2ciCTmiv4SrEl6xJjD5E3VVD/KHDZ1kBYXIPKOHPC0uNwiamJbyykWCWYHQUR7gL7feybj/tsUMHW0122C5YYwa+mRE9WE/WYip8z1DUNMRXbfBR2gGqomlC7PUpFw/JD6pmStD5KBN6MqoItCNMI+LVSPnJeBJYjQTwcmkgHQk1jiZFE7/SjeA0mLXRtnsgyyWUKc1gLSFUk44Drh465/8I2zrQukgN4nmz83OdqHjGc//b6mOO6gwwlwRpBWnDdlEb/EAHOOVTaSp6sHe398GL0F+z1bkq8qC8iNAvfR6fSVCit1YnwPIUFk+OHZ0ZjcEhme6hOAAs20BKGSjNEAc5y5JHGIifEZikbhgnAPTFBriycScmxGVWj8jvmy/nz7BKvGLYcglHwjYcgOg4KBCtBknwk7Bjx5r9dj+VRPEcVI8SmDtch/I2rgH3nUwENbtPktjBRzKS2z+9a3rXg095ysnr16/bsuVuZgDgiwF6Qlx/WD9BRUjO9mkqDSTXHGt22vPKi4FPr1urjq9eWb70HW953rN+utycYu0G/J4Cs40Rk3ZuLkeFWzqeiBo4/BkA03aDHKkR0fx9N96ozV/Gqrj3Z/8W4RTICUqptwi26KbqFsQAaoJyxHmu1o0E+mCr9QsC9ETEIpeMhhH6O8YA6ZIM4uYueZI5eYMAPO7yAbjoEqQnWvGk5BfgWSpaaXP/EX/wM7WVXvHVa2+7+D2I6lW2+hB/YUfgOMG1Lshq+9dK42ziv/T0FBVmQi5wF1AR8HQwqAIDJ2IPXLDRYN9i+d1hgRkedFA0s6inOpvl3e4CpZcOZ1BESRt/QP3+1DY9xNczEgIBMhQVcDI2EsYrJPXG0EcLg9RV0RKViqzatUiQgYplFwLzKaMlE7AeHAgRpzkA2fbATvoenqs1xMK7JJagKdoluf6nZhop7hQoLEVhgZGWdgm7US94VV7vo4iXvyMYA/VC5fEgo4ZShLoqKEklJI9E+viklI6vWPnLv/N8ap1JgU7WbTJvQhMZVj+CrsSbi3p38FDor3zfO+Z2b1u5eoPXTVpxle02tcTcMSVlSPOWWJmhoOZ8MEyVpM/SXN4pdkwrEa8Z6zIrZUsYjmpM0G/zhLEJWg1Xm4j5pAf9EeppS/R+QLybDJDzZ/wIYexv3oRIoFGS1gFoKYAUQbS3Ib9yBMqNZQ7pbhH6qRDHCaA+6IowJGu4b1deSbwiWeKhloYwaCgmD/gs4hnGaiJBxnUqX6c7f/c9tz/tp379xJOOv/POu22BNOq5mEH3sEooi8oP8almaFEcRTjpq1716YhZb2FyLN66bdsH/vpNL3rTxWmv5VcmIEB1QOhv6XhCa+DwZwClUiOP5gLvlr29q7feEzTWSXDKZ9BvG6BD+wicgDVjbYNs5C2TWUxSMlhXzx51LPiD3HgCc/Qwo+ghmiPaW8cSstOb6Fh0EMgXOnbxggfXlOIFdD7HMxADQRGe8hfSdPuK/37i0aeHzZ333/D6t3X23d8PmIALm406M8dIoJLxtT08loIUUsK4dXmhvPiI2Jehx5AxqP8I/XTiWwGAwF4yKvt1BgHM26ZZJ+0n/YUwyVppfyaK8/Hl0bLlY80mU33+5LqjokqMJ/cYgRdjF/FBfVc/rBnEUGlAhK68GbjpBLhRAjik5qJ+xG1gNkWpJq0ytWtcgxSqQAEP/IfqkJKMlOhtEJe1b4I36LIuQt2eb+GEKfGNxKP6VwyoKn4Ab9IiMV49aKBywAAU88SSj6aKIQCjCc1il37ilOOi5eNwT/azbYRVasE1rGuFH/jaLtI4qkx9+5bpKz4YTSyXSBrBi1HYMbEEJlNUal0nLUDheQ8VxWIx+HUPz5kgqmn/2tRhiMPxcj/0+2zuIDIol8eq4LsmT2wJM/DIB4LpfKrpdmzRrynLAH0mCWQnWmbXF5RlhFkJQqTCUC0P8hSYLLJYPIB76ESgv4jyJooI/S2SW9DxMAEMGtJUjFiSym1cXZIBJGo6Hz6SeOQfmQQUJRZab73vnqf9dHHOOedc9alP9noM+KAVzIDE8+gqKo4oRj9dqVrtLjwcqoGqaDLEfKpo4yr/Ux/78M//5m+tPeU8bTTPSIH15nAZMbWl4wmrgcOeASDjIFQlgXfJ5q8zeRZVK3nelvIaB4TQoA7+gEpG9aJTnrA+geTGON26qehXhIi8B13rKjYgBOOweABA0jz4BiBC9paDpR9KMa4PSAySqacEL3oaIECMbhVZusc7obbpl49Y0+60P/CxrV+5uh5NICEFCeuGBwkyE/O/4Bs+LbOEZ+mOvFpd18pg3c0Ef/dN6nRKZeK/RGeeB8Z5Z7c33006+aDjV3IWDje9ZeecfdS5P3nMSaeuXLUuHJ+oTEw2mo1xUBT0NZMZIQWHcISaUn/WT47RX4UX8YXaoUYoHkBIgJEAyfStxBg7UnVTV9yzW/wdtgMVP4p3X6VMOfRKxhMWcGF+iqnZXcuH+lblE6EmgHcPAmZV0SVgn95pNWoN3eS2y9Ce+0Evgya6lTSp/+O75uZnm9W1Ra/DZAB28PoaV4SB/Pe1Cm+e2d3ZhT0MdjTFMugWRadEANcRVEMAAzD3pWC9j6jvV+CrtAjs1g9qUQUTIWau3UwI88ioyZG2NXSQrl8StDW6LIiwDuIk3lkHmbGQWKvYo/sqK5bRIJx3SM58PTFUAFcn4ysswzdrWdeCVBNpLJnu0jIO9Hm5uLCWxSP7EFDm5Ag/i0rbdzzQmt53zjlPXbduxYFd++TfLRL5ubIYMxPdcxDGM2iWFZUo7EPTOMNFFMCpRTaoV5mQ8t7/znde+J4zZJvGXIqP+9mEOnL5LF2fkBo47Gu/l+ESGMtE7xNbbw4bazFCkyPgMXTufBqUbsCOltrkcaNZkMpwyCIlrg7xiS5CmFbgP/0BwVbYMyRtSf2OB5CaHkQPAXEsKw0XoPyDfloeRJORS6x8KtnU886cr3qVb91xw+vfzfa/u5rxmhamKxWMr6WvLwetvMcsqOHOYrsIP4X1iP8UUC/m1dIm29t1z0EjWn5EriTtLfTaYdQ/8cT1z/jZM88464SfPHt1reHVm6AM1iko7LFXbOorBd0qnw1o+DrA1OAFW1QdfKxBr0CeA1ChSCYyioPyoAw4FYgsH32qtF6jpwigOLL32NOCZwRKammxtolH2NabdGSsBVYQJFFGwJ+VkLcOlfHWkEpDrtR7v4ZVPlu+4eAD9Mf/T8ZAQWzjkR5I+tH01Z9c9q+Xr5ha0/NLrBrHP3PTWeCwziDvd9N8upvu6mU7s2Ku5D3Ay5naxqyTrVNKPrZNKENATrUFikUsqTC5SnIsnrQWobXfq8f1ycbkZGNsolYLKgzT0PJhbiUBAwLlyjpCta2YvNiAQbTWBmuNtmJYB6DPZiw5lEn4RlUtTw0PZaCYhw8XQ17uoEJdcgICd/2yJlYrc4rhkIPKYUMEa0cSDGq16szM9IMPbtu06YQjjjhi97Z9OESijC5jkZ/LVw2j8jBDwKvZhwc5qhJhWoalF16xBmkyWL289o2vXv31L3zh/F94Pg+pxpbQ/+EWe2JCi0DzxLz+v/7Wmp/Ph95ld+wIZprZKrzEazs6raCiF4LBmCxKVUO3coogyB5RE8pG2c4VTQlXgz+NhimO9T71BlNUqKNYDwFZ0CEBWEqLoL2oETL6B5TVq/S83wv6MQbdaDx83EniVEwuQfftS3/l6Jmzaudl03f9xes7g4XCqxw1W02rwaBXsPqefZeYN8TihVkApkt5P84jKmEEe0OhHEYVvJAhsSNn+6VmxoLVSkUWGXiZC/AbFKGaXphLBt7+FcuLX/3NU37vBc8+9fSjo4qDGNdVWY0/wUcY5LpaHzW9Sn3wMVq3755bvKPkymAxYhQY5UP6f/fIKB9L5+4MJerRkwf/laP94UFa9yJB/+JxcN4uXItd0XWlihZTfu+ANbImM/IFnD0wxUCV4pK7NJgrkmWXXNjL00o5ktZsrFljg2Y2GeslM61kS9K/xyttLwZ7B/05Vh2UvHtZo8CiKPbv6RfdfICJJ9aoyPKmRYGLYrYU1uKoznKowIsmJic7/dJMb1utG40HtVWN5WsnV0w2JqqNLvPhQV6GJfTZnaKYY1OJqgh2jpUErPsNSh3fn/FLC2E5wzisKu5rNQwxa6WAqBasRtdiNjyiVOOumGgZi4aQDeSpDccGICp7RBkNvGoxiPtluDf2+LIgYLpdEgtzGJCedn6gw/Ao8zu1TrKweet1xz/l5HPP++l/+9rN7QQHTPM4LMEODPkmgKQYh6AYwkaYomODbc3DJBT0ic4rY2YIJVeEtXayPuz/09v+4vzzf8obXy2rAGywGH8tHU9cDYx67xNXgv/qm5OiVfW+ftet2vSDPq1VklovS28QJgPwjG013Ea0hPLpBBJGDaroDqjRmekzHHHClbsFBatDGSErvZ0QOjOcTrPPHR5y8o+kNCXhIFDQ6xGilXaAb9xKgifFBe/JjYnzNxzheQ/+3ZXT37oRy8NKlXkwZhDpwnql/eFib7SciMQ2MWQdEnNqXRadRewZCcPqZHubzeWtVqfsN9hqld24y0Fv/9ze445c/79e/ILn//Y5q9erbJRaovLSsVgDtLycvOUh/nwAT7TTsAxqyC994OJ9927Nx6fWlPH3gAic9pJsV6d3ay/b10sfzItthbd34M3mLKfoo9DvmlpFdl3khpEPudmQRQgMSWWDJElbvTQstbQIbMar1OPaWG2sFNVZArarPTvTeRDLphOOXLN6bLxRq9C6gyypx+Umji3SrmgUAAerGYEKVUUTjtENGcDiF1nAkor4DK8fvsdPI0mpgwgobORgJDbMbzFjSf3UDQTDeENKIV5vV+MiPLJr1y4WqJxw0knjzVqr00HLqfxE/yJd2LV+qwJsaKCceBlhd9UtzMdYKzhe8/bvffCqj/zdL/7RK7vdjG3EdG/peOJq4PBnAOXavUX+tR1bSs0qDtlMkyAXcKkZNNItoFUo2P4QggyhctQLkLb4g65DoZafdGTjCuoqDMD1x5TbTumBih6sV0ex9mLCdphYnRTS1096DiMMpkQZ1jPISKJW0q2m3nOPDzd66zffs+X9VwzSaQxCsfnB+WKVTYBlpW2imWVK5vQ8MkKcYuU986bYbErGZ9krq6aQxxpxu9seG1vVavc7WNt5u46cnHjf21798z//lNVrYtT6ffwPwe7U9wIW7lRk07h0UAM5tjkFgujAa3dn6zXmxrMorD+4u/IPH1jI+5PLVnlsZl6wo/nCTVl/cyv9Zt4nfm/fmx4M0Pyg9AeUWQglHiHyEAKKXBxeC/ylmxIBMB5kpkSVLnuooNspzXXKe0txPWqM15pTY+O1SuPG7fs3TizftGzZqnrUZF0s3l97Lbbk8uuAPvNMZIJiUIog2m8RsF1DGogLbUV3lMPmnSBuqfshUCuQo1PQn8MVV1d7HhozriCHTJrlJwuIThOynHyGpv55TrMLZvKFa9CHdjy4e+/eM84688gnHXXPd29P0pJXkWhFfXEgGhHkUJ3YPyiQTkEPQSQyPqGhq5cMmlV/Zib/xEfee96zn7Ns08nwz8MfgKxOD9vL4V//fnjN1ttnS73K5KrSQg8v/FLe+LAAGVfSddQhzCUDV1G1JHrFQvRG7RCt/ZRSG/rlv/4QSQrRNPabrsOJYTCYANxF7Jo8UIZ0e/U59xaRAaME7rE4gcH0gDW3reCoRn5ec5m3b+7Dl4Xf2cy2juVqPWRNrB8DQhLzzByV15GjcjAeEIW1lB1a0bWzoEj54fGenP2wmMT6cL4z08rnNqxf8do//LPn/96z16xF9QBXy/o4PYXHYQKlMTxzcUsSltWoGDmqDh1YKLJRsOe11I6D8JK37tq+dd0RGzBe3Z4lc2l618zsjYPwNm/wUAkz/EG7JJFfJo8+tjyYVxlVCezJU6t31WTCYhETtEAyVDKgttxSicqwm2KPLdjCIGknCwve3ExpppLWpqKpfLZdyuf6U1Nrx3Cwz5qpcr3s98oyBvXZUQJbINkLmf8f3mEIK2ITa1chhP6iGCM9froYGQURLfFbcj2fCDlSNhN1uEHJgXWmi0B8I3JZAZPecF92QZaYt5BGLIEr+saZ1uzdW+/+yXOee9LJJ99+2+1dNilqYO9knEPfLdHIZg9UqWiliOH9uq3JMlURKk4YFBuOrV3u3bNj+0ff99d/evEHs34YPIrFe8pu6XhsauCwZwB7St6nrr/Wq1aScj9irSZkzSybxDEg2DoNgwB6AXTtgF5ee8FKeoakNLiCDDo56K/QrXoMnZir9XHuGjWTnq6nZJL85BvHfpCDuIvUpQhQMvcsNUoRQ/9BklfisIcN9Npy86xVbO614dbbt3z8kxVvYS70lkfVZgefBpiP9LCkd13UZEbJUsoZzwNaqMB+SviClpyJgUnAbgBxdX4urFTLM8n955x59MXvfO1ZZz+ph8JJH6r/uF4gH9zfh6jCmAbhQXXGpYPK9PFrFoY1LRhjGUHBeoQ1t1znffLSMdiBH87seOj60mBLJ7ku9abDwX3Y5lCh8t8g0oCP8pcnsezRFCiVDIFAIrK7EuxDSiRGNcIQQashRFkiKZMXmINCA0KawWAhSTg978D8ZCePx8tZt9uZ66xoblozNlYN0PWF0BOCP1PIZcwYUCQhmACvPE5b6h3Kx94nNLcRAOSrwOjqAqA/kWbVQ0CiOOlFrbLLtVXyLADRBgvCelLyLXyUrHZlHoolqN6HkM8VL1Lkee8D9zzz6b9w8umnXfGRy1odJqC8uFrhk6QWpR40zcbwwziBegu9QlNvxDACoDvR26gDnhqrR+sm029+/uM//xu/c9RTn+noVl+1dDwRNXDYM4Drep07d+7x1q0a5L1+pDVUtiLVPP9IGIL60M3oj3Qy6kNaOKyAOo2hP3EQuBPzCYnah3fVp9zKXiKVg2a61OPFPnhM9x0C6A/EDv/IMpa8ZxVMQRAWu97xk7Wz104yO3HpJ1sP3BVHcTvtrsBQpMwEr/x9ai2pwAQ24ECEzq0BdKIdgGWriSwfVWohswm9tJN0YE6d7MDb3vzyP3nZLwaywEkqFYAp6OMxJ2QGpGLrctXn9JGGFwotHRpK4SEDfT2bn7CuuMnai7e//tYoPaWxbMf+6S+3Wt+uhHfl+e1Vr4qrCrNhEjPWDKbhLkBHAzMBL3niYSheRH8akUqHF2sQihAhoUOPG/KiDnRNgGYfsCyVDsztTby5bjzZak50w04/ahdTlSPrQchKN81KaQGwVoFRXLSBFMAaVBmKAnmX8F08AFLVG4ycheM6lQBY5w93KbbGrYCxGBT0RtnFCQycoVhLqa6ikYEJ/gRsZlg6IgayaZ4w+Nm5d/dMa+7Ek05atmpZe2Ga7XGYmJbrPVatON2X9QvxGvtS8RrepFsKADRhXM6SotdLlzW8zkz3sne/5TWnneFFU5Z86fLE1MBhzwCuvPf2HEWHTBKzPKaXY/xDv0G7iBDjAFp6f/VG9Ufo3HqSKJt+QC8QucrqH6lIhxLrry70MnEIHoC21fUE9xJ1lImll2220nCTxKQpkhSDRHxVlvPpniwYz1zXGwuO+NZ37r/ic9iKZH5tjT9WSyN2VOr4BWt2edS6qOvi0t5LZGI91CCG6eAggXJTzHa7vZB1xipjzVXbPvOvV5548qok6WHHz7ADC1JgCdHUhjL8svILeGwXFzJcOtBAYO+CRx6ZKYJIMMjGVz/v3fSVsfGp3a3ksvn5G0Nvl19MY6Zb8ruDoo7fGgeONL2gUyimhpA04ahD2Csao4HU8Hblp1ZP6aBnCWz5w1McEJmuEo4hloJNUjD/fag73fH6M4O5uR7LUlZMjK2ty9WsmZlqqbANOniG5zhYuGJ/3dWCVizhvtGgmlzRvJeXGYewq0WC/oqXHKMxK4yI8QHDjSEFmsKHbzOpn2y5q96hDxc9env27d62fdsxxx1/7HEnXvv1r8ksDVjH65921OZQT8KbIS+nACqwvdQVkqtMg3Cnh0kc4cJbO+7dee1Xbv7Y3532Oy9fTLMU+OHXwGGPDld95/oy3kXaOE4GSOneyFoIbQhOEJxkGgQ+YwbchTCNNomkKyFAgehQOJ2FXoDmkpME2MEB67pK6Oeks9BlRNn2IGFOE+MY+SoZgwQedOFBDVZE55CztGXLp7yTVs95B2Y//qV0994wqHa6nQ3hRDXDG2S/Eww6bA886ieuj0MBriBaiITGPwyrcR39Ty/rgf5nn332TXdcfuIpExiOVtgskm41wAs0xeVjO/i1Z0EY4CIwMP1rH93z0mE1gOYHnYxcXqABKYfdtvf2N1/tJU/aO3fZrn2f6md3hOG9g36n7q9HWVHKG6VBAzezuAjFuQiVXNa2EtpOiNaRlsa08zZbm7JRlxzjlLqcJV3ZyA2zzh7bVeb9HsYzTMtL68hkKcNGPEIXLPRji0UhK2rKnd35u/bt2bJv9x0P3n/jnZutKQFJGk6kAQ+AJIdCyX9qykXicXccCcEMFuMhWW6JcIdkBvOzPgC9uoC6gdKIW4g9GJcbgrduseYNSmN19vT09EM7dqxZu/aYY46R3StlVLl0KDQ6Rj/0QhsD6IY6ItwSluKj/ayzVQC2n+Oxd/mH3j16bunvE1MD/gUXXPDEvPkRvpVFmEgYaHZYp4SsCzX1yuWb0uQ937gecwMMkKFo4HQA5ElmVxdy9GySDdNPnPJcY12Kjgy60o0F40J7xstOFS+GQf+RRlRDZBgD7+KqYb2JSi6SbmIbipFG/MB1IkgeGQ32U86nOjIyaf/+Gd6Ud+y2e+M/ecN0Z7pSihvRmHk2Rj6U/+WMIQUbsSISirew0Tbu61kEIK85AU53+34Pc3Ccs7MWabDrj17+vPf/46salXFJWhINdYhjGdjDDGyczTeZ/kf9D86k20sHNYAL07SDL/qw8B8qFxNXfCD/yIfuz8c+1Ghd1fT6VaqqqOO4s69ZX5TVakWDRKEi4wdMGOXbGrIgVjo6kQsV7DwsafHvAC9BtGCE0l6LXMUqMHHByRorYWXrQvPwFOMQdrBgUqGKCyu9hT3utRPZbFrs7oc7gvG40ztidWWtv2dZmtT6+OYOy7i/DrRUkK8A4s10R/aniNzILybvEE8ABDcaNR4Cz6HoWi7Ald0DFEbbQ/nH2JKgKGvvXxazob9hCGn0jQdyApxMdEsFhAsPWGEnQJeJvXLIIz0vP/WsU7qd1jVXfYYJionmxBhLFhBj2OlIrjt4mI4IP6FnwXk08QH5EtaElHEZWCCzJHgi4UNY1TKYn+vlrU1nnd4r1RDE6N5iLOUCZ9lLnqJ/ON32sAEIifQmqkBLdiDYe7fcdY/pNc1HsUR5Ahpfy80IxC6NjbiAo0k9zgnSqvNC3nS+Po7yUf7YVuWm7JWMD6uw4YLYACNmA1l3lXDOLeAZUBCHkMpUL6Bz23Ic2AMO371+h0U+x64Il7P00y9/+tp9+3dpROFGFrAXCqlZMX0KAesvw7CbEqDY3TQJ4yCmA/ndTr73DX/1mje+6RX4Jx5+/dKfR1gDgBs+wtN+1/fWzR/w/vrCzzeb/zY3v9lGejQM8CVYt4GcAZfwXdo0DaXsauI4tMMiP95NJDzY/CdYSUwQ1ojRAq5bcdWwkHwc/qFfgRxxc2QRGBeZN+1BEJcbuBGan0+23bfr5gfn/+2urTN4g6uzB3xRGWvgYw9f3WIW3/+AHDmgJV7gDgklFiLwcBTg6vJ5OFbCi2iav7rlCFrMhKf4LdUi8agkWWc4c2Bmfu4njj5m3cYjOz2v28HbA5bJeg/fyYcbl1JZVAvqFTrcXxdBmC5ikWwvzF5O3mcvv7S9bUvanVWsKpqFz6jHFgut6KXj8asBR6mPX/6PWc5IZOQlcVxZ8kd7dlxz0w2IdkAx/sDwRin7C3gAc3wK6JSaE0yVjD06wXcH8X6mAa5kMpwXs9UUghFjCbdbgNlBOHkIrOfUblm6a1fCxCiN6Y4oDGGbSyMSjwx+0YvSwSlT8aRXn95VuuxLibcgedD2U1Xp5WAAr/1SWlmXhZNoSCKGg4pZAxCvWh3rpd2kmJtLHnjPe/7q5a/6dfQX+OrX1y8dj6YGJAaUylWa551v+O7u6Zt7C9eu8ffggUPrtQz95RlabqUR3iW/C44ULwQHx+H+BuWKJEwRnKSvu4i8knppxCEPUIaGfGQoaVgky4FbNIYR2lMGCZsHuCXHaOw27zUjTOvzwR37029sXbh9f6cVh2ieinLbBHcVhQNYFg9RcHiFINxPdwuwVswi+vOIdQXkGpNWGIpA1jL+Ee0NRX6yhrAk7CCZmEqUHgJhKoHIEq4mFhnsnT5w/0Pbjz7u2KOPOz7J8JmaLsK6GB21a+jOM66AdlfaUxdwtUzp6LFIX2w6if1C+cCBD7/tgrFInIudnLTZW4ARhbPUsGyWLo9nDRicPp4veOzyltJDsjt/RLHedF7cdN8DEuoZ6IpyxQk0LQct6afGATJSA1G5akxgnED9xYa8JDIcZ7Gt2ACOuuRo2AG9yfiMSGUyl3Mydi8CAphoKMbgXqoe+RylgzguQpgYtldhDmAi9I6dSMN+9JVrkxtuZmLRnFxKOSB8lwaLnqohBkN4yks3U/fhIAHSqB8sdBfiOttx7X3jW17xgv/1LLp3wBbztuP5Y1elP0Y5CWxNrXP7jXOXvufymnfjpMcG8DPobQT3uLcUviPRi0+LVUvGl1bDOIGwi1Mcwk7gXvGCNmx+NbITG+BibEDjANgG8ZKc5fZMMztgsSiXhR+MOZkXCEI8pJWbUYmN7ctVH+1PtLxRG1Rrs2n9375bPDDDwuFywnYOPMn2pqJaJ6TrCj1wcXO/gnt9nJ1DDsGvYVdw/ABRxWiaDoTu0vSYxDBEFj/Qd8ASFNaQVrgvFZCYREliFd2ID42CVq+3ecuWSnVs00kn0QHZg1Nu88IKHn3ELLUsgs/WodG1u/IgVamiETKVK3/0Sz9x83rsMu+mz39h57e/6RcdXIeywixndQC1u3T8UGrgsGEAkCAVIqEJsjcHjFv37d+hXbrV0wzxIfmRgAQnYBAgg2ytzZdUI/XiULyxwQEsQl1Dz0j0EcQzIBjBvaBcRtIS8wmzeIsrm/0C/SB+jv5e2ynqiihnbID+ArbjHT7pYv2PqbO3bhz/kdFnvtYeHEDpGjj/h6aYQkelotkkgziaOicdR+In4wQ8gjLry7Bjvrf/f7/sxS99+e8SzrUFcREF/849zg+FQn5EXiL4Q6xMvQv+7CNZ/mWsWqaq7E+5DOJBay/oN6w34JYeG9QWpttQAKzH4Mr9JOagE6CCdcu9mziB4w0WIFJZ6ZRozC0jXmxhGGGwuAPMnKx4EzW/WS+HNZ89dLNGkDaCZNVYGIdrtm6r3XRHf6Y7qNaNSDt1ET0Qb1jvmoQwh0N/E9iHYccVIHmXWAnoNBL2JaqA6UOsF/QrRiNWxBYDfQ1mFXCMQddMw1QfNoARFec9993XGqRPOfPMWj2eb0n/w7QKU2h0MeMBfCpkDZUL5vnPm/X5Yo0wFjnTgrWqaGJecrVHJ1seeZdd8iZ/YR+bQKAUk1M/dcyl44dRA4cNA4AwHFUgt1AxKNpv2nJPykopM8ZjlaxmwaD6RayX6NJnPSZTAtp5zg0CSIaMgXNfZpMZEBBpqiGEKSwy5OyeibGyVEPqEW6hjOR6qFtYrxNOAFdAfSSGQQ+i+8AJ6DViA7AE+j193D9yBYNt/6H7Bt/6jiYQteNrwKwzvUnLA8TMeFgSlguYPERfkdgkviQHxLMnnLLxTW99KdDRas+xYhLf1ZhPLB2PrgawDvOj/GPv/+71135mWdxZXR9b6E7X/A3m4Y9GYxyAyzUmbBHYpd9fFPZHcC+7MDsBMQIm+OuqgYKlp+XExUFNrjSr0uD604RflZkZfm13w165zYo3PumtqpXHKv1SzSsm4mJZ3V9Zq6yoVMYG3dIgSvy1N23Nb93W96rmchVaNHmfbAiA7AwgCTv0VyQAi6pHKlL1kkXol+5TySAqTXYhl9tVOk0KrrKLCEWK9C/rDHwQOTg2gBAk1oXyh33ASBBWazv27du+e89JZ562/oiNrY630MbxuBVJ/VMqIAf3qh1Vo02JCP81JrJTPxzo6DsYW/je2onSvdde/90vXhUMuhHJuG1fx3ctHY93DRw2DADCEC2L7HV0B/1rb7mNnTvQ/JgkYXp/oTw8AIglIBl7pBcahvUT5wsZPABzIm19hBof3qCpMUzyxBa0IRIikW5IqEc2skEzV+mLHOITht65qxNUN06gaQDONPLCqbHBk1bmXlL9/M0LO3fE4DnZmAxIX+RVkvrVG0zwl+SEbMRAW8ogcSVtqtgfX+5/4ctX0huTpNuoY5LI5lKsvT9s2ss106FzRYbvzfcuvvBv1te69WSjLDa9RltzwhLVubLhmM8pCZUBwRDBiad1wHd3JWAAxbPiEKNIuLhOkA0OYTzAKUI0N6Dxgt3VChKvEnj1qjfFJg0NlvZ5RewltbA3WSlNVeLJsDkRTPk9EDXpT9a292vfuMe7fXu9H4951barye8pGEPC6hn0D2H38DDBXxxCQwHEDnUfw3pRnYwjuBr0O/Qf4T7jA8EytyxDu/Jh6g98XRjMzi0wCFi1dt2JpzyFb263ujn+a7mNmRP8DoYjlmi9VKBPPKlYPimWyCHQJwnxkLJpzljMMt6sr6t5H3/fO/KdD+BCFOWnqnbp+KHUwGEFKMYARGQskOoP7r7/Prqb4BRqJVLSNejveIAFXCQzAdwS5UlWKbPfBoocKYtIY9oheonypKfAA0wu554EGCNlaghy1OlgwcImPGmg7KQrrq5D8Tj7S42PBevwNuON3Xh/K2tFFLbPqFpJKK31Vr5ANU9YEpb1Ot1CymNUzJS2l1/91c/VxkwakhbBl0U/RTusmuuHQsA/6EsKb/o9b/vyrgOfLzphzZvoFysa8VjO4gmsFVH6y0SL8Zf9kSZHyMUtch/N9yo8Orilw90yNgC8LraNmloSsPEEQg4QpUaXv+R6JWjWosk8WygVnShIxypejc3O2IO+U6TzjE2RIIpeNUknJzfv9G64o5dWmoMKsGyvhOCGfwXuIhioaHTL3XmYDbh4CF90Y/r9EQGRhg5BpG5ZAIo38H44N5eArgNHQj3JQZp2r7tj104GTJuOOQ5T1hRpxfQ94of8L6Bzy2hYQ5RI6M8f440m6ViXgeg1IcYuaEGw70BreS1o73joX6/8p6Lfq1erVvGj71z6+3jWwCLVPp4veSzyDlI8+XoZfwJmQsM7Frr7+N1ryHA4z0tso4gtMtvSckWiR/mTmZ92dIp2St5nCw62Xcd7O6ofBG6zFtVAISu0Hqsblnohm3zghxESFRijpywzhQeVSpVrSlRUQBSg57FtexQM0BlgHcdoIBqwEzvOZkrlNO7vWjhpVSv3Vs0tTF5zzapsfldYCqoTcSkmaa8YsAYYM+curtDpOpqV6FcrvKGnMQsbRAbltrfn4ve+/Phj18B06DpxiA2ghC8xocOmuR6LJn9UeSSDdp9JeGZ8ZGNJnaJyw71/d27zsvdf9NcrSsdMVmqJtyfyu+0Eh/uo2I0ra24GeMLhKqpuVpZXK+VaBXfeJRwWVzjx7E+8XaULZ67GrrbFo0YDuGpi+UmW+GkRFdrTi32MB8HYoFIut9IAz1A4n55a4a18cmn1yqCWpPt9b3sz6qys1SaDiUpWL+O9FtOwUm9n3Iv90uRMazm7MA+e9JW7a9fd1S2xBzsTB+VqL4O0pYhCotHcLMtJbC4X0mEEqU/lagGxAdn/IO2gZg9kdYQRftDPyn7iB/gNka9RrWSzVQLoJm2m1xRBPg4oOJGGcPdQ6ftpknXKpSTy8U47MTV54+237s3nzzz/rHhqas+C1+lpmRz1mHazkkhZc1n0Fw2jODUAshl2J00pUiuHucWaGV7Ong6YSvOWn6h6N3/krTPf/hff6y1o1UTi4W4CM1N2atAsOGJcKl9CS8djWgOHGaJIKJOOxrv7vvsQPiB/p9xHEJIiCNo3Xb8CB59mDiQat/Sk1JjAToXt5EEih7csE6Uh0nRMUuPTqTUyoI9IVLKraYTYrlaRmBkhKmWlZt2bYFdeb3bzloU9exOW4ADejqPo9Q8fkhNxtViKFnrdZmMS9hDHcTdvn3zScf/jf/7yw+mWQo+kBqJSVXPp8EqWC6KrY3KGjV+86psv/Jtu1qkwD5CCoGBhFsnjHhgo6ytODeFoRil8nPgqqZkYroRGaIbArPGB/ZQETVbubpiHtX6jUTSjlD2KcEkl4yIItTWIWO83lhRry1OrvaPCYood53NvVy2qRsxgQToahUoWUBFKXjWqdjrsMyO9YlSvwM3ufmimkyNrsLSrW8NNEcZgKDlZTeBGrVY5jrLIhEO4Ty8hoFGu6+Aqqk4pKy2g0Scp9Xn6OJkhuGOYXgWyNOA2JmxYJfAK4vJ+v9VpP7hz+8ajfuKIDUd2exoEwO1Q8cA2tdW7HfoUV4s2DLI4TQMMA4rUC0mD6Ibzo5S5Cbhr0b/q0ku9rEu/y/GjUmY1GKIPlUxv0xiaB1wWS9fHqgZcez9WuT3u+YgBoLH3vBu/fauoF3pD5oHsNN+L2Y+WAmCaIDag+NHp4B40J5keIaVZBzFKIEwMXZD0qFm4Lp78REdk6/hJp535tJRyKCtqxQAn82QYAmEOJJMh5g/SYmLCWz2Gxjm59pa0NUsZcegfsQWsVKvqQgRcNbk/9CsG1NOt1lhz8kBnP5LWpf9wSVBZHOg/7lX6I/YCrUmVVMC+6ki3GH55sR/c9I27/uWfr5zwGmzJmBYJwjvNTDwAA5Q77Y2k0iG+GNKIGRAxhHtpOCzxiBM46VbTA8Rwl60rK2z+WDQYGMZMJkv/P+h62tJtfLByw2DTRu/IZhB3PEx7DrBpUK3WcM66IVKJJuI+AuWAVb+MXXDrUfT8eNArB7c+ONi8Z4xBALf1RSJExHamhYXlEmokFA1VNyPikmik7HRxtEdAS1qI0SNDNuAmACBr0kv1j0ylqzEkU+xjXYH2SaSqEbH6Smm+29t8772r1hyx6aRTOuyfabtWqB6pPzEdqkn8RNyUGXaKzE8FdFChHBa0MINnfGSg4JRbk/54qfjuF758/zWfa5a7SP1kztPwX9CfJfKytxpOJbgMlq6PQQ0cPgxAFCSKxlMCxHHLnXeJGjKb7wUtrRsJyiW2y9JN4UW7IPdTd+lBI4hfZA+jgGYXCJNgFEMYhbxOvDOj32RRvNRCqDWR+mUvBOiXfToji8gYhctgNJ0a88diVoPFt26J0VqxQWCZXSEDFD7aXhqLWwAAQABJREFU/FsKWWs2dVmJlmxiXI+bgVedX2ijqXjFq15y4ikbeunMY9C2P5ZZUKU2v+iwkU0bARLvotdcEnv+itokikGAhD0boaVSzoIsUZRhkkN/jQTsMNHejEFN5BcbIGBsgFtaLGY/pR00y0axB3BTFl6c+CthQ0kP3635em/Vsd6ZG8tnBoPm/sHd+0s3Dfz55dUjI2kW3aIQ4N+0IeaXKmOLUL/KZnC9rJsW3VK1tjsJr7mTTSj9AJ17JpJnhKPNzRit6DNM0oeaLMznCM0tUiQG+kp3KegfmSsIogF3MQaSKSyy1NhWs148awMF8QPFJwysSUNtwRzocUHQGwzu2bat6w1OOPVUPDa0On2JVXQaVsioFgX6OsjMrhTSVTJ6IbUO2Ygl6DVKTK9kdBOxGl+LZzZUvH95/zu89h5Sat6DPxK51Gp6VPNhS8djWQOudR7LHB+vvFRSepd6N342d+w/gGrF5HdDbfEAEawtBWBQjVjlfh50FZmrq+kUk5BlA1c3J6ww0pWLkWbU+pBGBqzZlS2paY0sN9Ek/U+ptQhNfUcdRL0M3ezkOCUN9s3Ut2wLJb0EmIYyX8gAnq5EfqJ3vsL+cKmEFe1rX20mXueotWte9qqXsKlLvLSRy6MlIwcRsphlK+ZyDFpffeUtN3z9O6jaE4TVPm4GtOqUf8wdQTSAik5aQmu7QC3T5xlwglEju0/wXdZBgv4S2hgn8qPkwWZ0aDiU+uzLkLIV+iDA2U3Sy9v422x6U6d55z45PA5XVTsH9+0o3Zk2W9UmG7/gtRsxW4cEeCjb5G5JCWnm+zEoDynjUQ4z+yxaef2W7Dvb+lk8xUBDN7BiY8YhqoC8Bt/Kw9Bc5EUYUCUAgIrMNRUii2azZmOjJMN6c5UCDxAbsFliUJ6UegQaF+g6DsHMgVZIiq3xH9JF9RQE9+/ZvXvhwHFPOXVq1crZBbRAUDizb3AH1aHSGWTLSFZwr1GSJHiT/cnYOAQF1HwA7eX7rDbAI5FXKQ82rKhuv+2Wuz99GUMC1kYrkQ7xJP6Mflrc0uWxqAFV6+FxSCKBCqT/ue+hnR3MgCAeJ9rTkSW2g8kS3gXo4gQmCwnr1TmE7HQROoRWDBh7MKU/88GW2CaG9exw0YBLhi2oLdmiM+lkJCAZz64DpqIZFlh/pLfamkqzJh+fIG1+3wPB/dvbCGq4mUhL9GktehHj0EyCurwI2sCKvT+KFJ+Rmbfwsle+qDFGF2PZ8eHTLoce9aBVZqIxKGN/6/X2em+58G1VNiQvsPPNQvzu+FEr74JxCLsOrfQFhi8CGh1qGifja6Sn8PDnaBAAA9D6Xm6xYM/0P2zdzHryAdu8IRRDInERrvbWHxucvqH8FHT3O/o37PRuycJirL7m/2fvPQAtqcp839qhdu18Ynef7qZpusk5DYKIYERFMafR8U3yzpugE957zsy74xt1nOuMOo5h1BlH9D4FIyYMgAEFTINKEAQk00DT+aQdq2rvqvv7f6v26QbEsb0YznCqq+tUrVq7wqq1/l/+Vj2oa6ZJXH3pSGYc4mEMtdU9wGpgnQDHYqGEjwyEbFhobuuUL73eu7dV86s1vAE02SiPX8z3YCusm0tBz07WT0eFJgoI982BwRyZYVIcpy/cz4BeZ8WX89aOJGjLSLLuSvAXcQA6xaCx+IBBMbd9YW7Ljh0bDz9y8xHHdJj1Gtt0geAXdWjj7o33z7T8QnktogSSMUQIbCuqoFLNdl3AtcKCe9rd3sbp4uff/572nTd4SRsvaDUOP2JQ6U3tj3ZXlkemBZYR0Lgers590+13kv8e2BRnksmf9H2jAcA6WIty34RSyaVmIWBUaRUMy9tCgrTBvTsUmy8PIqljJT0YbWCrmtAPdDeK5pJYIB6erYKKNeYYeBAi4+MYXxZI1GzyZZItW709uxYJDMYbZFDA6UK/g07oFxAyjQj7gPmwH5fypSQND1q/7nd+78XQrk6vX8zLO2Vl+blaAMYaHSEdm4w73gf//WO33n3bTLCGcF+ceVCtwDsbbEr9DV/KZ3CryLI46ayEKziZIDMDZNKA+Fc+M4XgPmgNDYASsFP2yuWkUmBWuqhQHVQ3eBuP9U45JXniXGnHrYPr7/Z+7JXCaX9yvD/uhwHToqgb2GJsifqGVrsc09Ywv4UokPSZdOVCvjx59TbvqlvarbBUJlMaomYx34+ISFd/4jLuWnoDVuMwNFp4WPoT3RZGHA2Laiv+S4eiFmoB6420FciqLFQ0QFY/+61okhNydRexUghC/mK/S06IenPyqGNPoJmZIIwnxTtKTA7XEtzriejjrp+rRDROjrPa4SRbziJtUMQknV7A05BZm1yskxO1xbu3X/7J87z2dlSkQD4Xo0l4MfxMuezK8gi2wDIiAHQgB5refVu3aZzSN+gXdL19V8mxlFuhQfnes/scSqUDvlPNFYpsqCJbeI1s6+zDDAiNKpOx3ZY6FEIbGC8667qn9Xe0UkGgxL8Li/lBHJbgMXFlyIfQCLq9G6vZS2S4QyQ93NVcPPu3r/trhRN7w3KZHPSP4Cd+dF0KRyy8a4BvOsL997bf8g9vW185YEjaypREbMVevxemcbEQSDMncIVU6HtITTJa2Gc1jQWnpBGSfVhbFo0XwZoVgtFGaQRlda8ZKKGDT4blhtc4MHfQYbmjD06Ous375h3ej/H5H2vMTOWrpcX2oIOAN8ZvYY1ZnfDhFEHcAD6FbcGvwPqnUQRs00vL1fpsUr/+1rnZhQiJA+LAE/Q5yzT31jd5qoeFRgk3egk4etB/9JZZL3QUQhpNk3vU0/mvBskWlDMsGikMOafHKRIH79161x0A8sZNm4NysdfzwhgdDnchw51+zoY7Cei1z8Pq6firY1eS7UKVioMwafoVKA+apNp0bpGEo+sal332/P59d8Lf8eTIw1LS8cOHf0udXln2vwWWOsT+//SX+4sQzwpYkYHcu+/euXvQQR1aTdC7ikOXS4/ySJGdMMoV8XPu24wArpxTrHQkcj0onMqg3IBeciUyuJAcBZGEBsf+Sy/EIHXO1VAIVEYQG9bItvGQ6V7E3DMvBlMHcs10iG95flfLa5a8VVMh+HHTTZ4/O94vLHrDTiUsD33pUqWHdYwY8f0khS8PvHKYm2wPI7/Uf9pzzipV/cEQ8gFnZtm/frkt/F/jbri3S2obxuTdf90fv7U8XFWK8eLX5+SjgoQBid6kLYQfxge9bHDPqwNIrLLWoJOwuV/ED3OCCqaDwO0G9Qw1ZAnAZbGEej4XlOT9SIhAcZuf1L207O1qlebXFR/3/PQvN6VHXVK84Ob+NflCZ21QrvdzcRgT+NpncuJhr59LSGdCXAgzGdHFgGCxIjLU1lOvG6dzZIEY5qZMFGgFw9n81MHfvqf5+Rvj2erqQlCBilTrXj9tArQgtvwL4B1kmOKBUfKY1p5rot4hrAVdKQMilwW7Mw0AA0WDCT82MR3YvyAkzBDgPNuU8UoubrpIMSn4mmaITFhyc1a2kx4jLqj8aPfOe5LFYx5/ejC2dnaRzKCaNIZ5+bi/eHxBtjLqlZQNNWELTcaTlGwYrMhNopzUKXhBOgiCuJfOez7cEpOopjBQSbF1VGfuw2/6Gwrw/KdleKu415JD78ryiLbAsiEA4hjEgNDVkt3zCxzgEgD0Ziy8RAHEV61ueQDjP+L04ab2lo8KVTLS+bgdJxyoMhBgVzam0LCCQ7tBVm5kw91aeCEeh594w34kzo19urAt2VPZx5Psq/fhbcAWRn38ylf+/uSU1D6mSJXK1SqubPa7BRC54PLzOf/7V9565Te+KUVNPkFNve+FxJLue/xT9/lG+54HtbDoMr8wF8ExQORB/bLQTMcibxcc6+HJ2Sfmn41/wq3e5dcPryJ+jyeAp1f3MIWMriaGVhIhP0aINDFSd6GG9RnOoqNXfZgTEaDEC1t7/Erpmluja2/pDctMIAlCl/KFNrVU0RbXqcThqI8KidXF+Pk+7wt5UKFupEawp9KP9SQ6dI8hiYFTJl7IAKtfCdehMVaYz80tLN52u3JCHH3c8cRiRogjuOcxMZouoMWEJB3sy/jbK1Jmj6ZTqslilbOGppD71cZzd978oxu/9pWaN+BloRh+tcHHdfVXto9UCyybBh11lXyrG27btZuegGsO421kAzAQNxYe+Fa3RkUjDb4h/tK+Y+TZit1iZcf2Xc2s0J0yHRHlDuJhrtxZUN1KNGpZMezCdOEjapZhGQXpzcz31+ri8sNJ2B1qIkK4oSW9s8njjAqBAt4Smvp1+Lu/9wowIcTixcgk9GAl69vP38GTSlBPO97r/+rv0fpM1iba0fwYCXhoautDfDS3jGBzf++kWd3JjEAfY/DIB1QZ/wsTg2rba096G58z+IMzvXPu8m75unfhjvRGokBI78o96ADwJ/oF350+oIVCVmGqtpI0tNJJDMHFzDgaABmo+bnq+PiWhTXfvjE/H6dkh4rbEbOcqWOK5TBeQ0CqK5u3mWRNKfohT04LZB1W91FlN/AN6M0YQKemplYu4mqqoyIs8Z50VblHydyls7xCvh0Orr/ltsbUqsOPPQZbNJMWIWgwHargm+bgL79mLFBqDU13l6wCteS/LTK2uJ0RJXCn9Ez8zCclXv8L73uXN7+t6MWIOAwOd6nsZyt/HokWWDYEwAyovHG+Ew72LLQkPcJ4AMdLmG5WXPHdLEJ84bKUPNrK/ydbpdk3jZBT8btDDaOlCku/YiAC8XaK7dLVUChBF4w2yFmIB1BUvtkQxKukPgpnnOPg7WUfLFLZLG+omlyXp5/Tw4X+jMxuPLdp8wEHH3wQZMvHtYQ3JOq/sJL2+efs3TCJwMTnLrz82utuGiuPD6J+o1xd7CIyGvQY6vBV7RsAlw+76BONln2FADHKcgxGMwGsFkoFnzgPwa7XrnmbH+u98FzvscV49xeDz15VvHGaNBJEsip8SegJlsq1xrqVk1fF/nMhLin/S6E/WyyqbI0MmF+CUQ4ygreJYSuvuXZLcP2dfjCWy5fB2VKG/gbZXIq+xpXZEmIlr2QlKoEMcDUH39yQ9zKUN3x3iM8P2eEtaBlpjWzf7Qjx7ec66wgM23whKhZvufdeOP71hxyRr3pEPfS6caNccg0raQHEt60aCn9/7Yv60YBqDvsE0Ant0OuNbFCTU9RghaAcvKa+8+rvXv3pC7yEKb9DZlj+aR9s9LFW/u5XCywbAiApVnYsr9MNwz5oTaxtnIsH5PDHixiVPeNGDnSsmREYlsbWjK+3saXhMlopl9OnBp8xUVbOwGG10cmIYc0MAO4idn0NSskQRloI/pWBAXsikgH9GmYwKeGesdimczMO4RYlKKiPq6kZRZIJzCVVAKIR23vxS55brcFlEVCmm9uyF33c8cr2Z2yBsJu2dqb/+Lq3HVDfSDzVEPWytP/CWVYtIxrA7r4ob+cesHFY5ooMlPRR+GZ0F7Ej8CBouY3A8+07Xvcs7zkv9V5JFsBL0vdeWfh8UvZWeZsc80x1162E72QeVy/LmH3RAO2rQtY96Tnal+AI5mbdEyeZKJ+vFXd0Kld8P7h9Z1qeQEFeF7cuqVFMhlbTGqmPy2ABZUKPz+pcP9UTDcfFizOW6MJ2KM6cHbkpG1XAPJChP5eViKtD26pLs89vu/nibfdv397rbz7u2FUbN7f6DEwkEvIA2ewKvLauygOJz2HRPjtGBiRCOIGA5xJV0MqOQ3+quYYOcoNNY4VLP/Sv3o4tFS+pEk+ZfUL3TVa2j0ALCIOWyULnFTrOzs4nYULEfD5MqoSgEH8oFsXAOsN6kJ2JVE3zkkG8efdLe4N6R8AtvY24HTn8qIOLu9eg0ZhgqyGlVT6e+zL+VjM1xFfCCW6q5NIjKYTYHAyEWLDw6V/s0YnxHdUo4HpAuxb1bRZsdOxzeW6CIPO85z8L1ZHUwmTAsshLXkgHK8v+t0DgFz7wrx+57b67ZbhMh2P1cqvbajSn3JUyADFM4vuz/qcL32upDp+PtDj6iIrG1Qcj5gA5FHZkffGw5xaee3Qu+LL3+Qu8f6OjzcRjodeAW86wHuYE5YyjHhk3gnKfvmaUwNh8aiqVCb1G0M9GAoFbBwQCM4Ni2iaN9I+21L5+ndf3A7qSaZUkqUo7bwMEbgPQTRIL/YX9h7pofHAr4/GNkXf7DCfdHXYEssFZ6X9UYvwPW0kDrPYYehjKDf01LMJysGVh/qat984ccfjMwQfPKymQkjHC8aiL66r2dNZ43JjRS6vRZBjZDf9tYIgMaOEU5RxkjYsV3i+2Wv2Jetrfde/FH3wvieHwoMBndGV5ZFvAtf8je81fyNU0Imzc7to+O+jFlaRQRecYCv210nMZC+J8TIOP16VTyjMdGEy63PZJIZ0adsvfX7KCWQK072IFJBCM5pBRxMA+AcBGV9T9peoxho0S3YsBoV+xIx8Obgr/AwEIh2mHPMPcTeooPZN1bQ0JzTmp9tG41SOnq6YnD9iwJpU/IqnJBqUS6mVGy17QUb2V5Wduga13Re9553mHjx/Fpwl780nSr5Vriwuk/8+a1NEA1/4/81X3VjQVOhIFZgB4XDJ54LtYbBQbvzl8/ubCQd9N7/6I94Htwbax2J8MV3UKO9UB8KKUghDjjjhoOgQ9MWP56QKiARw6MiAFDvtiz0dkwJ1a4Bpx1+91qxWvnfd/cOvkbVtW+/U503jxeAxk0+DT7RgmyrQJ6srxf1Su1zdxQfQA6Bfv7+DXSJRjR4wSZKecSEEdUSBGlZ5UAoF6PVSqXGG24u/fckuhWjv42ONCvDM0eRg6UN1ZPd0Q3zUcB675bYcnkfCrOkaxKAT93Tu4+jx0OiwRuMGk8wdMFr/1mU/tuuo/PLJkZN/Q1VrZPgItsGwIgAmj+v5zc3NkiPUhACmpHVGz042s+7t+vQ8NEDEweiB/HnVhO9Q4zHYoEXDvu7qao/pWkztnq4YpWG9LVmhkQATA6qjbywdxkEYIDrqwHpvezA/1jGI5R0yPXcBLTzzp2GqNuHdV402cHECUKIcry8/RAn/7//2PucU24EFzT403+91F3yf6N+AD2NfJLrnv/n96l30rE09A7+Ezm9s7fMWQmWSazebL0rPJ6PxZ7wvf9y4n9GNV/qiBV/EK20FifXx6lPQw3EohuOottri/QlbrJJy1CuLl1dcAUW5GT4HBL+T6vYUAt/lcGAfhndsnv/PdqEvKZlt0B/UyrqdLmQLGvHcE2c4IrB6m89l9VQ0cFl+vOiyCbXtCexiJAtnClUW3RDYyuJBWiqOy/+Mtd2MMOfjIIzBIdHrCaz0O9XgOuwObJa49+7Hx+1ZNt6WaK8/qc2hPMyS3dK2K9yipqXOd1hc+8hECoM0QN3qslb+PRAssfZRH4mK/yGv4cpAfEsyze1drqjxRjbtef65c8Cf6CetYXxl3G1FSHaRBnPi4fVuaTiRYjVatdHcxJW56AFl0TZ8j1SY53HAycMZk5+kPfLPGTOpFrjY0PFo18OGCYIckUoiLcyu3QMVj5jMmgwG4C73xaq2bdr20nuL/oZSh4QBhwM/hg245HsxawRAp4Jx47gseVwwgI1h9A9xFbCDD/CyNml9kmy7ra6cw+Eh2Aq84aVlWPe/7X7vtK5/82qrqVMdrD8bzuzEHjU0oIYffA06VRhZ0MdOk2FtN5cts8HmtFJp8SZPYJQ2EDDFBXwGwfilRM+etrxXSbqU1z6TuRT/yFjanm980++ZSsf7x+BMXeO8aeosTUWVXqbWjGPrRtLoMnS6vYECkPCXX1BylTPqVhIh8WJNlGSa5A9oVgbjBvUgFNECHKoTjTse7KLcm24XS7u6wXq3t8W6/oVi7ae1ryJnJbENpqb4YpkGZRyOdkBYlpxWIF9FLMtG9PP1tFlP0LLDo6CRdt0VnQ0ZD8hpmgpGZEHgeKAV3lzma/YKGUZiSWC8lxqZbyLdpJvJ1lms3bt/541bv+FOeNNlc3W3T0AVyokqrJKch+csaOZBuR4YvuUwpDkBrmhIZoOAAneJQGZpA+6IRJIhKpdxZHHRbpNoIqqt9f+Haq6/+xMeZUoMhI+ZIX92oEu3kSpZ1Z/7VPfyyIQCwxvTtfqfXarXwwOG5GY4o4sVr2Moh7Lkst6YR4lC8liJrYFeE3RmnT9dmpcREAQnmXJcxmdEJBtwD133lg9GvJBkwxBAg7LemRKLEVvombh+VQMpQhq51UGaEd51WW2OSGA5oe3mLNWvW2HxU6gI8BttR4KVKVpaf0gLEoAKUYdQp5vEYVFTvX/3VG6rlKqn0gB4nlo24UQGRsabGYUpJwoUzlNctDP0dDeCrLZ3gZ0sPQDn7cW6xM8xXu7XGIGonnbK/7mj/+EO96avT228a/KjvtZkSxR8GJIQokSFWgC4kVT+BhLCoV9pf49Ppaxy4CpAZqVmWqA6nMu0Qj5PrD0OIBbNu4Ve6sNit1cff+u73Pf+PX92qzPRA8N7ieFAcRNDEYUGh6MBwxvBoh0UKH5Exo2T28tntlt5V7I0qql2gB+wa2bMyK9EFGVKs1FEw3GDQ6XXvuX9bbXpq02GH4wy60OrRhZfajNajzRm5Cni2jNDWsrqFq6Niu9hoxxkGVKgxOmACZbyH0lVTY63ZnZd+9uNef57qONnpUxCQHEduyOh5VpafqwXUFZbRQrxJv9uT2kdZF+GuSSerFYMXJX6CW1y2+uR9HDI7U1IkuBaCwaxhrDD1jh5kW9MFmdeQU+47lZHq0JEd9BvQC+6znQz67VCaXavpLArMOCYJQMO0gYJK0+gZBMBiQo+kGBUXqU7uM5BRRZXyxfXr19P+Nu6y76Cp9VaW/7QFYJyHYql90iEgPQXVj3z4a9dcc2u9XicVhJraAIzLsA8jmoAkYvPllWIgZiYlucPI5M/iYM1Rf3DJgBvsfsAK8AxLrRDW16uWhm3Y+cO90870z8Ah87PpJ7/vfbvjdarBeHFQLcZM9eOrt4lFMDJgzp1QfZ5LWiADWeDYqfvVH535Vx1ZlEDVQE0zOVG/UC6RbC5ggrJCfmc8f8qZT9542lleMDb5Gy+5rzOElR4rJP1u6I8X5sI47zf5rTh9dzVp5UXueDsurne0Le/ukJ224E1lBKam8yPKSpycLJYepyd6L/2b3yKvMEM1e1E/uvbmm/yJsSMec2on8VqII7H6t1ZaDv6HN4QfsrkC2OdbcIp72L7IkSvRcbavCqwwbMRYQzt6nV61VByr5bfefM1/XPhhJlJm8jWmB5TAxGMpCMOoubvEynY/W2DZEADjLORhwIzpuPfl4yHjPkiIXmeeO3yBSLYwBOvZDwZJMNQK+pdsR/uDoVtx2pF7XQbutiOsl9eQeZFaieB+VIc+rF5Pl7ScExqvCqJXobl+ohSisgYQqqE+Oqp8TPB7o2rOIRRrhFuPF+dv/Jd5/CCVe8N6s+EIABjBh2PQs6UalGM/v+OjrzpTpogACGKIoNi5ffCWt7x33apDmVWtiJ7clr3oQrfBJUh4qBVQ1fe0XGscijV3q+1zKM57tNhXGx2gmiBDglfu5waL3vyMt+458TOOCQ+5PnfdF3MX3endgjeCn9ZJaVMkaYFL82AQTG/iioJ11/t0Vz529kBgvdTb0AmIALyH1C8ZGRCOaz/pdLuIKffuuI855kq52hvf9nblmS01Dzn7lZX1R7eQArgi9KyEPodLlUnNo+vz4vLalOZS9IB9iUbs69Aojd7ZOrV7GCE+P+RXrOrmEqGF+PL/QV8kNTz7ZrVFwVksXH/7HbOed+CJJwzLXm/AhBhoeEpS+IDjDAahM90eS4ArEelz5VyCOpylsra2jg45JS/bQTjgY/bD9lSzvGm6ftH73z1/712IHkNiJdEgBQqXkRlvZfl5W2DZAI1j0MIw7Cy21LUHgLtXtAgAJwH4aP+HXjBgjqGUtZyklaFWRwzcPoX+UGeprPm7nNIm25qFyWn2zUJgGYQ0AkQMWPH/cWTDOQJZCYNJqI2jOdWgB7BgaF2LhaRRhhlCPnVckIgEkoJ6PN0e3wzNisqAnZqaWL16Nd8ODmnfL4gWaN/Dlf2f2ALloAy0tfskfsq/423n7d7ZyfuwyeJwIdaIXQha8PsqURgSnUbp/6G7DvpF9kWg1fKO8Kqy+w7myrh0031pwNigUfbTHcU9rbTwWO9xL/BOSIedf/MuvD53w7DY9YuVtA8qYYImZSyRioLvEYgL08EqRwnYpwfZKSGYQBlgxSGZ7iZpgD6F3GC8ipGQQolZp5EDgi2te1/91//PzKEbSDlFP82vOuL0Z/3hbN/b1Rv6teKe+ajemI7oihZvDGRTh4tLPypMJzRMUC4QtxYheRs3FW2wck6JbMDMmGu09qkshgcigVFBEQyw+ASC0bXhUzw/uGf37rsW5tcccXRt7fqFbjIM6cw+HAw9GnBhcEjM4OoSwMT7O/Rny0Ir6aH4OKJTtmb7pNvO4UnBwGk2x/uDuN/vTlWCcMfWr57/Ia/bYS5NrHO6hK6vB15Zfr4WWDYEwNkAFucXZskDQepBCACdPByQaB/34+IQt2fZfkti/9NANED7ew8T5maFGKTl2IhEnEI/fFMiEUqm0SCUl4eoUN72JSWY2geuUejNjczGQE1WzGoMBTkmCG+QjXO5MElaofK2MIvpRJMxDMRrMg0FAZiHqEZDIVdgCnl5Z/PBVq9dA/RT/KBlRQJ4UIM89JBvEjElg5evlce2bAkvvPBLM+sPKBRTvGUGID52XdDfLwx9pjTRIfoTwQ+cviKUyI4sNt+tWTkI7CqYBKDvI8QCkEw7NNr3SeGXa3eT3nrviLMLT8Dt8ZvelR/3vsis7EHQbCaTgwTLMHIcD4dCEGwSsov+G2dtNEBkB2mAVWLniAwsaXuExRAAYTT9BmIgNgLa1SP/pzdcPbP2//rb17S6HVT9iECxV1x10vPXHv/Ce3teJyFXfzHu5Ukxy6vKzCu6YqFbQklhLRDPNdUQgnWrIHrgwrsE1E4a4IGpowrMTmFCAFdjcLBPoaiLcT7kgF6IBzfet7V+4IEHHn7MXCvp93hPwsFENOn41mzq4TSnZIJRtNcoBpinEPvvtks7VDNbcb5cCEKyY/sBuRS7ndam1TNXX/SF3T+8jrzQcFrqFaKBJgY+tIuslPwMLbBsCIB7lziO+50urgLK1onXsQmo6IJMCNAWMwDcPVuEA6ZVpRqHWAgc3IP4SsI5zJWTnGQFMxjwc1Y4Q/k6SFo2vYLBugN3536GowbTDGifOgoyUPyXTRgg4YDDNIzTdjfuwQJ5lalxDy5f3h2aQFJAIsoAp0JWFUkAsj17udWrp3kvuWzYokHzwB13uLJ9aAvAEOBmIkeS1Hvn288L+zCbQ3TzYL1Av0SWhGLiMxcnM1iJGCj2TitaZX0DMZ/iUQU9fGrH+DtCnEH/Q29p2rmOh//Z4qp05pneM0/2jvxx6Y4PFD8zl7/TYyq4cKoW18Eu/EEjkpFKA46cRz8VnyrMdWofjqAH4g7EbNAPAHq0QI4HVjEV5KAJxHIJSY8U4a6EP+tC3Hntm96AibfRCKBoTCVK6lAvXXPy0/8iWbNpNvSalfFBm7yceiNW3sUewIiQrB1Cf/H7TgKggkp4BFMWaauHg0rZINAjiWCYxAChkv5HJgzakHg4eWXgtgNjf81tt6W15uZjjiddD6mhzXPIajklD9KAIN7Iq5VYLwf61cQixzhkOcbfMkbQVGqpZMhkqn6x2O3HTKfhk/s0Rza8SnV+4euf+ky0Z48MZday/CUaQ9daWfa/BZYNARAXlMsHRcyn9D6YOoWAac5FxhZ8i3VkMXnW3xl2OOPLa5SJfNmi4mfOuWQI2+eL/RbiU1lb22Ef5kcDQSyThqNYL7cyRt0qW54BvcG9zpr1WGoeVuqA471wyDQ1wFKzlvOxzGkRxohp0rDXvnSeMlFy2Gg02D7I6guRk/JgZfmpLUD0HvhAk99w4/ZPfvyiVdNrZWjMM7OUEjbLs5P8ZQUYXmKhcD+UQR7chwwIudwW9BfwGDiB0TCrLCMavHRzPtbSPjuL+U6UCzf4G5/sndUYFi5OL/+ifyX8fjOZCga1klclwzFiaZyP8EgD9Oy36pXs0D11KHwzvbz6GXiqMqCMlcWOhf6OBoi/tcqkNZ3rzB130okv/d2X9zXTMcnJe/S6MjwwPM3Bp68/8mS0/1F7MFGf6vVbxnO70aCexiK0HL3KaF/H4Duv7TokD5YBsx6Sh+EIocmIEKfMYYkhknVkkB0zQL5w6z33kA19ZsPGYqkc9422Wfempbm2kWq9+FJDahDYk+ge2bWszErZsDIk4a6gkbV6k4mce8O0Wh/r9+MNYxOXXfS5m394gz20fs41bHZP7a8s+9sCJkbt749+FfXpRkAlDD1ZV4hBxCmCUddNIz82PKU/Ia0zamC0rfORgpwf0H/xtWRsixV34nwhpJzxh/cAA1Ssn5UHtmVgYD0T94TqxrihBJ8c6690SjCEi7iFwcZkXyI+MDzDpDsM87VCccf8cOdcMF6YP37z6u6aPd7uIOkW0+kceecHqIbJI1xmRgPm8aDbVjy/z3wGGgD0YT0t2MQYg9Fjf2VxLcCsKITdMn2ij+rM6Z2xdWL29zqR1+wVvNf83btz1ckE7b+X79HA+oRGp6H3SFtMoKVPlAxKgUBOaYFgHdQp9OE4pWl2QUHFpoqP4EsYPxHmmXPX1xRXuA9gs7FrwnncNn7bxMIJLxi+9LjC+m8Xrjo//P9jb4fnr63EtZB8BZ4+aBBVmHmem+lqI2CHJzGWgTIhKwEi3AzGBIzlOehkFHKCaewbtWbUQXrB4YVgcthfJrjM36vpJrrvPu99miGABFToPIOATsPrRmhDUu+sl/7jLbfcttjbHQwXcxWSxKETFS+f5lA5ysMeS7d0XlIBCWKN/xEvBIXk2cBxZ36wqBifKBp0/bD8EFpm3+sXioteoQ2TI0jnErBUjXS4kPO7dNudC6Xb9+TXHn28P+Pv3t0vlJNDG7ngfi+tekHsg9+LATPbGCmDwnBzxiKH0CiupXGpQioYfdFA4L8cvXnGNKQBql4ZowYZwPJ+tV/Pr0vGP/F3/3j8qU+KaImACRa6Y9AhOVqvLPvdAoLVZbQAvoouoV/2o7gfMhIYJNLGON7cJn10LLw6tQRvydIa0jawqUy5ep71Loag0J1OaXKA+CUT2inUKSvUsDTeH04f2yyeQm5RHIrua4ICLQh9wBc0jofb5xkk44ceFMqNDUnZw19OWmgcuC2JPHXtkmKU+NmDGl9Mlp14UPmj9pDWAKVpFjUWrSnokNDk5crsXX7Fjddc+8OxiQm5V8Lll3wlLiZFG/vIARICUP5YzmZ+4oQA40jRBXE1nTLCz1Zfw5gGEX4s9cV81A8J1oLmx0kMuDOjb68QB93Vj8uf8Jjake1S78roP7Z782D9uFfX48nfXZoJtzhRb+nIvjWPbM8/KuV17NW0tR3mAgsWOi2kXHU2ox4Fn+RS8UJv4dWvfvXmQw/hpzAKdCe6EUueRNGoUbhtMPOEJ//29rlWocJMYpHey1aGDD+RYGGoqzvC1Bs7z8+laLKH0QihmhMUKGeIqXNKQWT7UDMqU0HsERcxQao4YEKkNNfttG/def/kps2HHXlCt+UNFkLm+FUMJJo3eB0m0DSmnuvbs2RNoMJRiSt3j/qgyvYrztjzQRiGw3IpiDu9yy/4CF7U3Va7VMYLNzurd1hZ9qcFHtgd9+eXv+S6Gp9Sl+MYkMgGQK+MSAghvb+MUzZLF1vcQ7HQKkHbyGZLTZkKnLXABQ1gJ0ACMErgzAbAPWZZ2Q9UTgCBtuKOqAOvIyfRgRI8JIRGap7uZBB5ZHxDUYOCVoZi2Dnc67y0Hwc7O8So1A/fNJyZLnuwkEmY9lGN8vAgjo1ZxBJsaAwcOFQLELNSez9GiLoyBe5wZQvSAdWloqQiyCvNBj0QcqTMruj987vemy8Ffr2Slv1CrRxhvwUZidHF/EukEtBYZEdb6YWYTx0fchmHVcHTFo2g1M+CfvxhJPlpB68h4jTgcwlohcbzmZOA7DdeO+1t6B/+HO/MQ6Znrih8/3PelyEAhUJ9Iqkb9JuwKRWfESoDXDNnZuyvu43RAGNL4EyEv+yjY5EjgizDcgDLwWb0Zd8t9DVJhLra9PiqP/zjPyLISy0wYhGEi0SdeEyAgz28dtgZr1i96cRdncW8TyPRRpxGkOUFpWvhLkJzw3FDc5MGdHdZCLi7qIKrLL2/EQNJJ1waCcq4LNpdPVOi9pCHgtoNkgqfJux+8/abetOTqzYfS6JeJjgtMTEbedBpz4LM8kA+vL5aQbsiA+zb82mrcu4NPYDrMgOAWDdO2Au4EeH22UKI6uUK4t6XPvbJ7l33TFSrIIPEhZXl52qB5dRypGdLUI9HERBfRd0IG+KygZpPJ+ohWYYHCZgu7GYbEwWG14JK9p7CUGxmYQrlSGokxFmD8RFCcpYvKeMdE3GiYAKoAr3NVbOLmL+QNP5oevGJI6ifpBGI8pIAiIWvbZsrM39es146fDODn+EQDRgU6DClECB0SIyVVNFFZqaF7jisX0J8uju81VKn/7m+6X+pHyk1vrGMgJ6SrQIMBmeg6wc++tmrfnjjzObNIRBSKYX5tF9IB1iA/fyA+UPZYb5ZO4zNMuwMwokvszDRRANnH8ZakBkMMoFASiJZhuMKfqbwsUBnKZcEOItBCvKne2c+rnxSOxl8evDVa7zr+MLlfAN/UoGboB+0Y75PHABYwTR0M4AbHIuTKgV08AdU5m1YbUcCqkNhtmRUK5WqdBJUXr1BvyQHmHQuWXzVn//ZhkM3Iw2NWHWe0WEkDyh2QZMJ+dNPfcGf7+mWYhlHxK3rdnAb6pu6C4Uy6o5O0bTu1sis1GRrJVbHHonXYv5IyiEvWKXsaiMhjHsSjlMoV4vwOYXrt92zJc0Fh52QjNUTUkWHukskKQZPJfxIQXlT9fA09jkdJeD9s5dgj30eVsuo0A4etEGs8wvFyWo13LX7o+/9N14M+QMLhH6/sux/CyynhiP/YiUo00kH3T7gG2haChxA8e+UHMBquC8vIAqXcF+xAlCCETGAJOAdxKGchdwKGZDb6LCEbyg7XGd0CBkggKDMmmglZ08xRTJI8IKGtye6GKoj938mB3b+oF4huv3Oeq8PRzdx8nEd+KWCX0IQBgcYPwxYmDESCYvdgUkrLC526N8Sp83Esf+f77/+L9DlwPDC+2MQRBQAVlA6AEY3b/fec8GFqw45fGEYh36ODtFOyR9WGfpFeGK4TrZE5A1IGIAp2IgBNgHF6OnsiAbgn4IuyBmNoQfw/rZiPSZwHBOniA8TL1ZzYdRL27l1/sZnz5xdm6xfNPf1i/vfGhTCsUKzVhhXjJaMSrZmZMCIgfYhDICmA0C0IeJ3oQFST0rDk5EBA2uEDQFxLyIFFd0rN5ssQKt29HZPTa7+oz99lXEOgse8KYj07ZGDi3EuLas7IajiWHzUMw459txtC10ZAAzWuYXJTZA0XZwGpARMB5Udvy/0Nz8fDiEPSzTA9oX7sg2YlCCuXSCtZ84p6Q8zGPmopxC5Bp3+7Z04f9oZnfXrO/0csxXLQ0P4ziT3EkasFYzBh+U3GuCyALnmoKYRFt5OdIJCIwOicEsEwO1LlsD0XSgcMDlx1aVf3nP9jY1q05pU7bGy7G8LLBsCQMdlmZycrFeqca8ft3sofMT1G75nBMDIgGP2xfvjCTpi/1WBfWjDKHYM9Kcm1RzBAP0VRayYYcUQUC72H4VjrLnbKwNFD7hAM2QCduRNJDKDkVDqUlzkFGSZ8/v33FXdtmumWF1z6gl9PAJJ38hlGHlFsICujWisQzo243X7tt32WtlG6u4V5c++LaJ2AnKwnyAwQd8RtwAugMz7h/d/aCsc5thEi4khSsWIDDy1Sq7suyAAJADH5rvtkN86ft/3kQBMQWQ0gCnY0AiZBCAPUduXFcHWXhKTgSdh3njfCzvRmDfxuFVnHr9h/bW1Oz/W/swO755iaVUtXYPnz4DM/A73wXex5kuiAFjJY6NagZYw8TqcPju2kllBogzvQqEgVdX0tppfzDqUN1mdRv8DgfqXf/+X2liD3gECu4EAF6x2oiFyOMCKPyf6dijWInjq8/44LG5W9kKTOk3zIwlDcQZ2FxEGIwYiA8aTiPAou4qq4QTBPBbakZaSeCvNIG81HfqbEMajAtKMvrTYwZYOlrcG1959/+2bNsxuXL8rGnZ7mt2oUshVIKLyuhK+O0x36G9bx/E7xl9AD21iq2oSBVSig31ogA4RzcgBFPfr5aBZLJ7/nn+DI8j87dQiK8v+tcCyIQDutRrVWhPXSTScUaxsEMRwoYQhAZYBvUJWNAOMTAJO6Y+Iy46QWgJwdlaHZiSQ0GA0w9EPIxJZciGogjssx6QXTSEPDv1RFokSJDkkACrIwEBHxRiMgzSRBDCT4UJ0060HerkNJx1bWXuglDyDhFgWnh9wpwfD7OtvHg2Tt2PnHmKbH/TFqMbyoMJH76EidwlCEhCgHoEU0DQ/uP76j112ZfXAjTv6ndxYPSJqiASqAaF+OcAdrGeLfl+gb+p+QB8uVfsyEftDVZA9QJYAswnLGszKbVTBJlQpEviKQsnDobMbtfAyOaZ6zNkbnkYiqo+0vnSFdxlxgI1kQ5xMMjskMAfnqlWcbqbkyPaNGAgAOSXeV9wtq8RBYBQygMZpdAhA8wilYpkAr9agjQf8bLjw2DPPeNbznolvMCeNf6dzWPdgk8th7YWh56K8CVdsxb3mgUee8vhXyVlBbsss3EkmM9DcdkQGwHpWCQQgKoYB6Yio6AhSJpdwqEHDa4lOiOhyO6fL4h35mYgDNoaA9sp5e3o33H7vVUFh8eD1c7lCh2Sn8j3ySvbCBEY7gQjrAdegIdwHRePPVXl4bdVwWngIFvvgqsaiY5WMdpDqvEEU99avWnXz937w/YsuLqKiWll+rhZQp1kWCx8fBTqPWg3KRAPIDkyXUOc1H3y622gfcxUexOb/I58fdWzxVIob4G3F2AgnRBjY0VkjErgGykFI+yhdGaOqIHwf5RpiB6ug9D/oIsyDENsYVy4A6WLMNNRQKJRy0a4bbxobehMb1q4+eDMF9GfAifEYYUbWAFA/lu8/44Rsil2muMxogDr7aFkWH+WX8ZByNncQYRSUKeFarXe84x3eWGMRp+DJqfl+T9G/ubQTyQCJfkReQHwT4+i1NXYeLtWx9hyy44CeyoJc6ogMyG1GwMMqUJZPUakahGmsOcX82lFrjjpu9fo75ucv2X15u3T3dBFfy8leUidRQVnoJOx2NMCw3g4NlHUozQ+Lhpsg0ek5uN2okAcHRflHJ4mxN+eqtWKtFbfHas03vflNYqJ9ZTiNNDu6HlG/M1NwQlxj2vFwbpYDKsmT0f3kn/r0P+EkuK7eLbupYaqYfa0sSzs8CY6hvKwNEdXkJzynKoghZ2sGYcqMfujmbiHmWInYSIwEsUVvNWi1ezuhwRtmwqDUx27O+HIJV3iqDGYM/e3hbeA4pNfl7KpOtsmEACsc3UsVtM+WIUacM0Fx0QDNnzdZb17w/g+ShEhXWVn2vwWWEQFgvtFgsR2PVSrlLk7XQdSKo1IkfnzgMQ87azGOmATWZyU1sKxXeYBByc41N0C+GOUKkfQ2aIFkBlDMvq3h0JceCdFXylFcoGH/zR6grBJYac1ByNJIDFLmG6jFaR2mb5irDXL4ODejpBkNmnFSj+NK3G8lk8U7O962hXE/t+mFj/fisMhURt482mdCw/K5ci4K/KTGPCIlvzy3sHDzTdttPoD5KGYSsRwJfUXpVvrzUleOvb68SZCw2pVB0ve8D33n5gt3J8lY06tUBngBFEqdQmF32d9dLe8pB/OlpFXKdYJ8GKD9LzKTYlJgQpgyJgHyimH75Qf4k6PgTvEvKgVh1e+VC/0SeqT8oFzEpJsGBBLn2pV+xDQP5Xq7lFT9mVOb55x12LN3J96flf/87t5dQXRc0d8MBW/kZ8nTH5GYimvmS+iahpZ8n/z7eKuh8EE2sRWslAHAVnAM3iXwBoQxYzFGm4g9yzzaJD0E1WKzS8rDAtx9/OKXv/g3HnMcrmTGZXgVQmMzlhmaoKyCuEAWcmO4oqIHgeOuePW8V8Ur9Vkvefu2Vh6yEPjNYVwm8eyeeCFpTKCJYjpLewyH7BIqkLJoWEaMsUYiAkJvU/7s9EoLkn5RnCERyPdBnBZCSBdlqVgiXIBiP1+sN7zd3WBXb/Zxz05KU9vmCrvrMnRMRVViowlZk+xj7rhQPdpCBJc3IEBGwdysej8WPjtkC0aP30prZo8L6Bfx59UF/KicduMwCGqI4v1UbVWdTS953fvEG+KT0UMhJskNqkdJLyN8S51pZefBLbCMCIA+JpneyffLDgY7GBB0pcqeBdPjeo2JsuLrZfAivEb9QDHAxryzD/NuZxXm6Bh8Sbnw+/K/yyQJRAq8jMRecR12KDcpgUMqs9UoGUpcEOMzChdgX7ogJnbJ+60dO+++/Q64vaNP+Y389ARPPZARU/MA8uQKH5BoTl+XeXOWrGL4tRIt4MvhxFmDYUxXFtcCRBBh4mSyqUIYzJUkv334K5d6pYq1n3HDctqBpdWW7086VgQCyQRm+9UWg3CRqcoFP4C+zLzEZRi/L/2GwaiEBqBV4oK2yASoh6rNai/ulNPAb5fPOv0JYxuLV23/wZ133zjw2tVitVgo8+FwQSA7ZzLEBjvi7vnw7uGAMymFsgURYa98YAKBUDjTf6iOow3VfHUhWmyUGwvh3Mzk6te85v+Oo0jTT+7nsvmkU4447ox2tzAY9suE0EXDqcmZ+YU97jLW/R06itnPCq0BKVW/Bu21ZueW6oyqCrwVLMkbMAzdW4ThYG6heOA674C1XWzYXd7IizB1ERuNCo6xYYs+lLXFqEDVWAT/tti+VbXNUiFVKGBcuhKJ3cwq45cRoK+66qr7brkPkuUTEyDxnoHqxVEI7V1ZfnoL7O2gP73er8nZoJKfXDWJOoWxjpu3bH9KVAinj8ZGng2E3xvjTwl9DzuBtrmEZCFxPsGXP5aJGCjHVGCaH8gAaC4ywFZWYpeud7QP0JvBwOwBSvmpOmwzyQDfC2x8wIC2uHzCy03kA6/d/+H3rqbvbTrh6JkTj1kkPw0kJiE5jJ5V7BPwr14vt7zrrrmZ/BTq1USeQVRG6o5fkwb/lT8G0Eej49xD/AUk/+1fueLWe7Z7OH4YJwwlRyWXioAqJop9sB6aQb9gxT00LuWjIB+VSAZHQIA8RJVOXjsIB6INWAVyRaU1Nhpg4QLQgGKhWhzvp1EI7eiVnnbiOccecezuSufC2z+2fWEr/GuFrEOouJNKHp47X9F0bxliwuCiVgIXhaG241CegYYiyM5KEeSUQrYDlDraYCaELv2EiHfliBu8/u9fd+DmdX6phKpwvz9ErXnGU1429Kb6MTnk5hkU5OlU/kK6oDoeXVBckFgksUB6WsUISOGjcg0IeTaYHklIC6LKAsEiCqHO69HUiFNyaJZjm+f1w+HWHbl10+3DN++hmy/QikQoxLFx+nR4OCShNj+F5RLtdot+yrW5q+zURia0byo1tQwLGrPskEzTRMAxlLkzs4qlzP3QqNVnZ2c/84GPYA2WO0a+EMqqAV0qSAO8svzUFrD2/ak1fk1O0mHgyQslb3rNJLEAdNtgGBTjEia/wgDxnmnrGOJMD0BIu4RweQdFShrqVpB9yf8H/U8G6HZ2b7kZhDEsyzLsjMBWgteOswk7lyHnNcSW5KPSI7HDbAT6leYkKEWDhl+9/+rr2zsXgmpw7NlPYESVvdqQqH552blxx9vIFQRp+LKvfk8Sr+Rgcf90eIUKrCyjFsDNttMnA1uhXynfMRu+9dOf9qemvfqYUygYU2/um4JZGW+jYoE1LOb7xXzP1i5bsuSX8jHRYaXCICjgI0QQgBxGzVkIwpBRBaLGLEpA6JKvDfy0l/TWNNY994kv8mvepTdf/LWFy0reZKOyxsvVpdvLoZEpgYFwDQIpdBsCLKE8n9mpOgAiK0FfLf0PUKcdiISZAYzrt7gB+y0/KZcbyIJz4e5DD9r80pe9SJ4/hHjVaqP2+Fn/kpZ/09FnHn3Ck/YsEBcG3Be7nbhSRcGJV2YG8c4FSGQAI7CMASg7lf2NQzx/IERYeY33l+yCdKVFrwAc04H5JqqADGX8DMeRt3UnE0zuPHTTNn5L7oh8FT8NYJm8q5KPBfy2wyjQFWgCHG6tvQT4KmRLiSMPaisWtZuRjdE+uD9g3OGDyoQBcVyt1ldNrbrqS9/Ydu0dUCdJ7PQEud0RivazNtejtt6yIQDGeaj7Ta+eogfQH9HplqISOl3c65gjnh38PBT3iXaIMe1YdWPq5Q9q3p/S/rsSoN/5gxoxoDwLCgPNYcNh8G0LrLsYMUG/0kdn5aqMktaICrpe50LqHIS8ftRkUvCtc3d+6xp0Oqec87TC5g1KVcmkqgTrwFcBUwr1gvPEw7z8w2tvay/CE2IlNuZHPXFp51HbLfe+ODnP6uXaLFTd8175vnf3O+Tbx/schbeU6lptJ/Vx9icAC/2Ph08M2ERcGBDdK2jbxw6DTODnoAEorAeiBzAPmrrHiEEWN0AyZUIEiBojfEyBIkEuLCaPP+NJGw6auqe/+1Pf+9ycN18vbw78A9Jhlb4AIpGqiLC/It8+p7RooJUU16gncR0Vy6u0zChJRNiRZVTCKt29RYpRjdUZBvRb1la/Q9pZJNx/ff97Kw0Si+darXkwd2+L/Gx7JLrl1k995svKjXWYyXCCIpOmQpslhEKvFO0FldI+GG4sv7Sbog0SaEFOoDwCpKVRkZsQNMDswMJ/gBxlDIcw+lxIFgP0QIzKXbNeNwqPOnzP5FirRXxkXrOiIQGIE0frRivQZqYCAv1HL2Jwr6tLHlMFkQRHZqxxKBENYJ/SOOTjcDOZoLlCt9OPen2chKf95mc//Eks4fhaEORNTWjD/jfb6JkeNX+XvsIyeGP52+e8iemJIuOC0RLmS7BzcP0S6ZED4AfIBSarn5n5sABCCQpMzkesDFwNNjU5zY1kgswaPDoU6Bu/rx0nBLhDJy5QKOJhQQPmbGrRZAO4fso1/aRJABICfB960EzKP77kymHX23jU5pOe9pS24nqYyhR3UKYHN+ZPvBSTfFSIZ7j+h1vEuWDM0CLysAw+xi/rESuAEZ8x8M/77g+vvu5Hwfp1qMloRukXWC3Zg+QA6fdx+rRCdpwZALcZKAEaIW1xloRnAPElDSAKwP5DCdAC0X3MPiw5wKQB6YuIINvWnj/q+BOe+PSzk2nvwms+c/X89eXaqtxwKh3UCNcFdFAdxgNCnkBCJqE09Bcjb9y9VBbGLGe2XyiV0q7hCWA1TSAw6Befm9EAYCtfKJXm49Yzn/aMM550ShRJbdhoEui03wvXIiHQ5PpNTz7nFXft7EMRBzwsThLIofRAKYIwlWbSgLRA5g0HkEMbKI8ZTFxBMC+vUB5SmM8ChhunLuaaB+elnAJV+aGTwsJicXvfO+qYzkHrmKNmsZ+QlpsIDTK20Rz0bYf+NJCupNfWpUWUhPuuUISBU0uIr+Yaob81KYZAGr9ENAA6K0QwPXnirWuuvuF71377M19FIhNZI2QEicQ9sz34yuYntsBywhopJBULNlEul0sEaCKyKsQTe5+mNWJHPVcrBgCU8hLsnWpIdWIKtYLv9A/gWymDxPMotYMxQplMgLZeJbayoxVVkk1BQ3iBIgy0mpGA6yzJGY5s4OdZwMPf21Cst66786YrrwUDnoCseXkAAEAASURBVPqiF1THVuOhMBj0BwPCFsQO4SYNW0U/9r3mZz99MT14L+5rqKwsoxaICnu85J5+8vrPf2Ji9cawmGuUlGNJ0M8qsy3WXduBI5TepeQhHygVGQBNOf4jWomXZcWcSl9QrJPhvlTYJA7ih6IcihKQPcDCwXq5tDo59rTnnrv2kMn/2HLTJ6/+FDS6mV+Xz1WEeuismaFLHYgAvyZn4KYRGoVQAizzKBZumbML6j6HchICTAlIuUGfeAHVF1Pg9vF2GquNv+Wf34IisFSm+wgWcXofNcfP+hcnfeUNyuVOe+KLZw46aS7qdqJOIVcHGtEqwUlJHSMywD4Qym3s0OwBmvvFjaQlBDX/BXtm9wDQZK6tt1NyVYiKUNpLO53gzj3eAQclB62fHeYWu2FA0+rzUBn0d7CuN+L9QX8rEU1hodOLMLk9HeqKuqgttquSElpgWp1y1FW5XDmoBMTa4/sb4SwQfPqCjw/39PAd4pLlKuYZ9+uV7cO2wHJqIQgA71GplZn3FWMpB/D+iJ848MDJoEkfbU2UNX8OCQrSNBJ8xQTt5uXgQJ8eNnLp0YXUhYkuM58fcwHKnIJG5e5QdWwl9EyZwsRNoYxSNAAOPbpgmuLZT9esxp4/3/v+N77JwD31CSccdfKJ4D05ieHC3KdwjkBkL2bikq9+5Rv8CCcU0/dCHojgedgP9qg7EQ7rXv4NH/2f8/fPLoyXK92kNewXyTFJz4V1FJPt0FVb4JeOASllIRRAzv6QBFY8A+ggOAih7KYXyIMlsxyoTqEohZycDJVAlI8CUVmIeiefetrJpzwmzHkf+tL5O7p3e0G5FEJ9YDFBJUASfQkcKMk4x4eRdPQjtMqgHEA33tmd2UvU9UBatDXQ05tkhyS+H/T/5NWvOuzwtZAwzTeENgiCYx5i+/XpNbBzSJzDnD/xvJf+/mx7vlxFaV5BcaMmA6xZDdaz5uNYLDr2DJEo+dMpHph3Ub29t7ZHp0xecEC36J+Z4O2CwyhMt8zm/Ppgaqyb5kM0q9SkHaw/a5iIJC011D5XHeGQNY3perKTWVvtrYpzZw/1ngf0CwRkD9DCY9SC8p4dez7yPz9EZel/0FDt+7OV/Z/UAqOG/0nnfq3KCPFEUY5DSGN1XB/P9br4UY8nabecVitJrTSoBEPyAFTKURCE5VJkrt1RUIh8Py6WyGg+VE508scRMUNkQCHEKpCSSigfxbmY7LWhnzDparHEOiwEg1yJ+HKif8PMHShTHC2piaQolQoALhDVk/Q/Sj+HIiiZyg/i1ny+2SzUp7Z+6+bOFbdPet5Zf/+KNDmgUC2H+fmQxHD5blDp+PiqdMfyjZlb7+p877t3wIklYQuiFsYSZh5tC37o4kbliGI7vD9pxPr9TiP48I3XffXWG70DVpdqE2T8L1fqCgmU+gB0WWL/YTSV3VPSmYwz+GeSMFS9BuehAcmCykEvKHVLfrcUdPxSzw96frmPCo4sb6VSvjI2VyhuD4J7mdlxvJHsXuiuHTzzv720dmztozd84ZJvfiHorV7rHxtVJqLBMFKsUiOOqmlShwR1By3PZyJElP7KD8KKEcodqsTkD+iNZBGpiaTnAVVlBbCF8GYmvDJPpHyUDFbPDF71Zy8TeePS+bJxF7A2+y0ByE85FyToSNP0+CNPOfXE52zb2QqL9yfFbjffpbVzXqUYBUVNYl1ql7CRkOnOGp8wyphAexxHc7jTqKL4aXokT47yRsoiqERYJCoDZI8HTH1DJK64sFw6NlZe2JXuKbdPfcGu0rDaTueLjUG+A9+ub6UvJhsvV9G+GkJxABAQfoobEBQaY7q4H7pBDhkMTs6X065CFCDEePFB+AtBwK3T2MIqkWQww9O6vXxU9sYOzB/6jQu+29nSUuIVLEG4bVsWdzea2Hc7S6GXj7ZR9tD35RMsj2WJC0H/M7F6UqZ+8p6gezUGX7YjBpU4FfH7km8RExES7axxNUrXbOrMJZnA8UKUq0MP44jOnNL3BzgcGvfDLRVMIDZfUgJXM6FBHKdTmgJXKIhgQkxrJLUOPSxJyFfeWlioliu9VvuyS7/W7nqPP+X0s57zxLDT9cv1frSAnZppyhDri1UxMZjQ3vKW9/E0xQpOzQsItI9CP6Byjw/qMb97yJeVSMe8OXDipf/ozp/3lUv7tMjYWERezkYVv0YlvhGkwq3DOitWWIfG9bNFCpDWwUr27ovTl47ICQEYisE71lzg99JhLx1Uq9VyrjDdHN/ZXpir5p7zOy/ecMT6e+5pXfTJz/FEiq0iYksKfZBFo0Z/3ZZepl0DNOn9l06ZWsTKTXlNJXHWAkAMx+gCCW4qBpr+ZTAEkugKLa/1hje8YfWaxlJvx6S0BFtc+WdfeHs6I2IlzwlUnvusF4w1ZgbMHUMr4NCguYjhhpSIQjPQEZoCssP1M3RkL5PVF7Ij6LfX3Oe+9pocu/IlU+6o2tzcnNeLyhs3DKfGZxeIG0uY9A5tPedHVfhttg+0U6hmkmSgRtxnedAhZx4CVtKb8Ttrc5FXLpVvlBrve/u/Y9iBsHIjyYKjKzuJhwuhQtjnRo/q3Ye06a93a2gMlf2Nh2zAI4cBw3wTjgCwNXWv5vGSJkAxKgpTQQh0+5bnkENOYUNkNR9mfD5kPEAdAHuBKKAU/0SujKaTJHRA08RL0+t0/W5qAUCfEhgkdoAqDANsjQao2iCnBLn0e7IJe4XvXHblt778rU3Fwsv+9GXe6jW9iKTCrbC3h0DQoNTsD9vMeTRWXfftK358z10wfYAXmUVDKU0fdYtUaMjuuCDihpXvIwXlb/Xz//SVr119993eqtXo/pJO26/4PpPBBQWMqdKfyRIgCzDIrHR7KhFh0CoXGygBPcakBEywKFVwE9LE8XC7SVRI4iIhXPmkHvQw4pKvAwPSMLm/O994zBGnveApft275AsX3/j1q+re2ER1bT5fxykMKy5XhM0XO6x9i6qFO1Z4LaMpK1QFABXOwewBAi+x/9TBZw1u2Ie7LxQrzFrGPBQwEtx9R3fb6Sf+xm+94mW0QsR88iMANAIwOviZewW/4r21QLWK1U0bjnzCmefO7iJ3IZAoQzSgLN4aAoDO06gUt6QB4PpdCmgw2cqtW2bg+8DHcOgveHXl3C+PGcDbudPbONPfdOiujheFwzHuCaHJlD+6EL8AlPchLvrwjgaYWmlUQaTBrapuiw5VWTfV69kOW3oMTiBQNL/pj3/9om9d+42bYB+wY7PwwvZXG5RFS/srO7TA3qb5dW8OkXNcZQBs7+DDNyrDJsIhTj6m61daL8TKlBEPuEvQBOJxHzE7sIsMkE0Qy7CVs8VnFGchvD18CyOAWkigxURMzh9tBwOn9kG9w46VZFZiHTp6kJUrbZyrg/sQgepRqwODgdVt9dgEOt3LPn3xjvuT05900rNf9hJcE5jHIBl2eTA/qMVJh+FW8hsED7z7PZ8ALJj5BBOdiTK/7h/kEX6+gtfPDUmRURj0NMd3HjT23rb1uku/831v9YFeY5WyrmLLTwZ5pt1FIsOsI7QwrDcagA8oq1T55lop+QCsEEkwX3xnMcZZCAELL0+fTNGKFJsLu0zayTRWpPQhzVSn38uvnzrppc9sTlavveXeT13wabQUTW9VUJjKFxoQAG4A7oM4KVtZg7kZOypRuTDLYb1PdgexJdJ2wJ2aj6oOQX/8RPnC5OzP9QdpG0tpUCPuADn0zf/0xnJZPi1YJWheeHO2RaWTEkTu32JhW/D29iuy1vpPfdLzJpqb+u0h0mceZSe5/pnhSMyPMtSyhVki8gv05674gMpPlMFmKO8Ad4S2oK9eRDitxW1Hh5grtmzpVyudQ4/dhTzXTysY343TB2scy891NEQNvnlt0QP9mitKiufQCqmlRTfQh9wH7k2E2ues6mi2BllzsA5VNoxv/uh7PxHOqZvA9S+JUOIYkYeGCsXXg68sy4gAuC8mYp4frDtkfT/txYMwICO5VkXxQwPw9hDim9oVhT7uHZITMtAH6x0lYK4QaIM8AfH+s6ixPHFBDEp8R9hKra+AMmXChZ0XspvPT4b7DvRd9IB5hYL+EAk8ROVXytTV+QDbG8rg0MjAdNC85/o7L77gczz/7//ef1t/5OGdfrsYMPLbYdypNBhIqAJwBpr80Pmf37kLHVWFyHkmtH+0LUhboCnAzyRYflzqlL0P7tj6/i9e6qWVxtiafJd4gEGtOQaLyTyNAC/cq1w/AX0HIRyayVfaupEEYJpmkQ0pfxxQw7gLrqV4RiBgJ6n4/QRjJbFjXr9ECv7wkMeedPAZv0H7f+pDH1+49rbJ0ka/ONVlsjGSBCFx6kLCfeyf4Dsl7DsyYPQni+oyPxXdUlKCkQpkAncoaoGjUrnKhMWVcgPwBd929XY+65yzTztzI3AqYRaktAWoMhQU27tfC4+HWsmH7KG8xLG/WBprrn7WOS8adL1ei1zRMnczs5J07kalgE8kAIv/yvfp+zICg8q0Fwvgu8QpZiTBysFmV25bkQpJYPn7t0H25g85ZnulvNDD/Q6RTb83lAfceV01j4BeO4J7RwxUps9lJMEqqiSjAfxxtfRGrpCrji4GI0h6XXliIENuXnvYrVdvuexz36Y/QQBYlBrV1GpSG5ibQPb8j/o/7vstg2YYpISU4/ANn5Wu3bgqzpNwkGRazPktxz2TA+S9wSF90Fz/FPIvs6BRAsgAWYBFDMwbXLivKAETCAYQAyULNrsuzqMmGeDQLwURDoNmU3TRACNKQKGDe52V0IAYL9dSdkqpr/xcQ6ZqLaUwdzCsUeFrn7z0mm/detqxzVe/6o8ZJAv9bjicDQc78UaB7/FLuaBSnp3vvfVtH2Su+EEMriyDL/LIPiLhV8AE02nmauOIQB9b2P2X1309vWV3cZXi/gJaBLOfF+VJvgCe0Q2AJrH8Uv5o6yBe2+yUkQFAg1Oq6YwEfBlphFRITdtWuG0a1Kqki9jSmxvONE99+pMmq8U7v3vD987/vJeOV/zJcmMmlGcA8wTDoMLsGw0RoJtdVyVyihHEixgsVaCaSlhxGuBX8hPlUfBZ9Iq9qNvHZ0bOMzlCnZna8C3//Hd6VDNVxUxC7BHsyjFdIfOi2c8Gz6PpFuqhU8NqIrVS9JSnnL1h3cF4opEdgkYD/UUAgHsyZsklFBUQ6J+GCAGCXUlYvNoSBIvYGhzzlQz6HZVSoaGzPWCSVBb3eN1cd9Mx28en5toJs5qVFTRmlxN0C/1NgtCB3tgAXdYHrTrcp/tnD0BNt1hl/foBD0aS4FwVkI/pJPl0YU9746pDP3PBxbP3SP/jQH+F61fLPmTZp6kfcu7XqgA2QSQcLiMZzGycKTcDaVglkGscK3uLVo1vRhiD20iCCAMlMgMgdZthwOULMm9whAOtqgk3GBE1RKCAJlm1wALcxRVkgL3X3D3lDoSWWnAPGTCdD1ZfU/qTrYA5CWQGwD0U/U+KY0cUl3i0eIjf0XRlor+z9fkPXXzv7cOXvvBpz37uy1M8jArzQ29Pp72AX3PY70RxK6g0PnjeRVvuhl1Bn/2oEwGUfTIaNgf+Qs77VGfuX2+6un3T7dXJmUGj0COalByXlXw/7UeAJ7YV2Go0/jL2GsQLafcxALi+wFYWAtcv6BIgGWigxTqIdRYYAIKt6AVDgvZ0lyOfcdZhJx0y1xt+8Z3ne/e1p2prC/mx0K8OSf6jSVjoggA9ndHoj2wAOjTol3oaGEW9YVwsp6wc3BNa2f2pwI4JJhAT8B0OlWlOh1786j/7w0MOnexFbfnoyx8441h5WpDLca/7NR5DcmMTKNvtcrUS3vgeQi5Ze/LnnvO8qcm1fWxRGKJ5bcyzJL7jUZUXSDYAoB9KoOe0Z97npobNYvMd7rszvBoDcV8YyRUW53M7et7Gw7rr1+3peHvyQ+btzfBbGh7pf7JDU21BA7gEl+OWtvCHVYQnW0Q4RQvdITXZsdtTkpWXmCUMdzySgpXSfr+/emzN3D2LX/joV6wF3KPKI4g9tkomtrJYC+z75X6tm4QP7r4aLoC1qVJjvI6KFxWfhp06jIa1SZMa6ryVjXKVM9B1VoKuOp78gugGjFR23Epnx54gR3E4IssVKRMCCgWug0BgGUBhpDD8un36H0MSuDe3H3ZUx+ID8BcqF3EUJ/lk2uu2cStiOKfhYLI+dsUXrvzURz86Pe699m/+bt36A5NcNxrOxpoJgF9H1WapVA7m9nT++1+/GeCyNHG/1p/jEX+4gdfXZ2x7t3eGf3DzV6+5605/tuTNTHmN0rCS9qJ5r+l7E7hFRiTgwYwJMqLuZ3ESPV+Xj8wivtxOGTLITQhmH1IhWMb7H38vvrpAjEOpuCEnzbFxuGN5n26cecw5T0YD/u1vXPGDT3ypWV0TpMw9UZ3t9GCKxcprelsWcDzDIA7U11gAQQG9g3s6GqDGM0mr7Qq5ZVZB9dG8k9gKexMZopKxscbfvuGV7V5YDug49M40KJHXn8jBjA/gHfe3wQmVQVIiiRCaUp6AgADGAPzJ6ac/fmZmLUgo2oMNQP45MgLoLZQiQnE1uisvoMVeTafcjpXxJnrrBy+uKXBbGrZa6c5Fb9Xa/NqZTt+bHUYYMRikjLp9f6hRp2bUdWxHe9yGzzJaHnAX/TZr5AeUqzItH5EgAruepm+bmJ5qz3cPXLvp8xd+adu2bY4G8HNdgVvs4xc0utGj92/h9a9//bJ4e5hxRsEghV/L9aLe9nu3Xv3d62ZKm6oek/iiHRoQbo65R7iPmiAlMCcyesA3Z7yLV+TTGzeIcKAJokwmUNIIXZlAAdyi07KbNUpGOph9c+0n2LCYllA2E+MrxsWIB1wEETbKmyXLk3olSukSDibQETkRESaGIkA3cvMNAh7FQXTHD+9YVdr0tKeun25suuzr3+iG83G1m48ncGRGORCUJry0dsMN1z/28acetHm1c/yO477oAVqPQRThp4T6UgNpOS8pYa0DPghRUl4LFNbrkE6hTrbKQnBPyTvr0k/NTq7xrrwvCUrxATVcYsVTE9yLtyysKc0hlAcnGOvwjWgw7AMAJZYQVGUCWAMs8bB8fwGMCDrE3VBaJgFIAlsio9IcRuAkDCf6wdjzz+ydfPC2Xfff+ntv7O0aViprSuW1w2GDjlEmX3dCN4u4uj0yV+XJRV4QAqTq0a20bw8mqwB6HjKGwmXYc+o0QGtUSCy2dDM5MuoP5wf3fvnLH141U6/VMDDIG0kXUTeGzunbO9ja70+uBtGPCnmJKe6yAvph7tCDD/vaFd9sD5MeZAafeiATBWsuYT6KVi7fxlXCDBvoPzFukWGLh5FczVOxFbuF0KMtT6bW1iqyKrGB3OtMFEZYQ1honnTkru3bx6788vHNZHoSYwvfEbqndzPVmIQ3mkNfkucUl5V9YRFAilLyqKsdiPlOk4qX2sQBGMixsamtMb2UUhJ3Zb65RULE6SA411FIDBhjOo78ynDqtpvjs59ztFdsUR+ujw8GRwahEySsLPq0y2TRMDIbAJ725Ur1xJNPIAljmPYsmT49KsCoZwGdaIToaYx0jXLFg2ZCAAMLRKa/6ZXpvCIVqkmXYKvBTHek6ynOxWRgevXSSt+G63MSgwaxsIRDui11xDtKemBlZmD1QnAJDo9YBcIIIrb4lTKbMeXnn3/+5Zfc98LnnvZnf/TqSqGe78S94Z6UCZTSdjjsEi+DivlP//S/757jIbg00fylqNtjeED94Arx114mn+vhH7MX+qViz0sWQZ2m4SeTKCiLR+Wuhe7jPvyuZMPqyRt2eZ2FiaM2FZVFD/cO+/Z8T0v4QxMTNMQXMPi1zygm2/hJbityr0IpiKwLWIm0PyIewn23Zh1El4pwjy8vnHbwUY8/ja6x9bNX7Lj+lpK/qlBoMCuYaUf0yfm8WbqmESg7aGarHeORtSMKwVaFbjEoV6G6FpdDH6JHJ37JX4h3P/+cZx53wkGVKj0ze9GHb7tH5Ex+zfSqFz3/BfO794xVaggFMpCSWVFSJ43Ni9iAGL3AA2/J8+vEAwsfcCR0Zhi1O4Nuj9TQca2KqzNBXFasn0It2dIa7kpL5fsUZtfPmm/0Z5/b7K2wT6Fa2C26Mt+edi8Wf3zdLVddcpeXNKIkJAREk7MSbwbxWVmsBZaNBGAdRh82SlHSF2u55oXv+3Q5qY57M8ADo5lvb9yZYB3ENHyAgxKfYvFClDisV3UbgfR0drJDOi29X7ALets/9XSqiGl0p9RpdHH3c0kDOmVdyThREFsVKTECAEZBBvQwXFNz09Qrlbtuu2PX9h1nPOYJZ5x63OKe3nU3/CBKmNGQqcej5vgYgxFr8Na77+qE3rlPP5mRlERRMcCNRN8K1yRYwmVDsa17/YRNvtiOuvjjk81RszlHMa6viDs3zvZf9bkLbjxhbX9bmFxx+/DA6X7UZiITTXdLe7rPz+cy0i11vnR46g/s6aQ1tNQHNJGIPjimIn18dsQIqCdANlQgaqAdSrD5wD3G1br3W0+e3Liuf/Ptt/z3f/Pu31WvneD7Y8Qdi9oocwTfVsp4fQH1NOsddlvts4jy6z//tKU+hU5vpM/Hs0JqIGU8FwvsPQxpNIznP3TB2w/cVEH9TuIH+e7zVL/QBSfQYmHtgeu/c9X3ds7P+eWqMhRCBHNE9OKBhWuQhVTRRmpB9To9jnCaVxttaXqd3LvwSu4AlyZeBJkuOWy910zGvnH5CbOzzfWuHa0VbNRxUWtEMfkaLnR1W2kZdjRmPKKsqYJw7Nh8xdrzAMgr1FG5hHJC8zR1GL9A5IZ4832sPjuYAtHZFXqz8dat28588ol5nHhpcKaQUU+AxbP32vsGj9I9vugyWYBiZDwkcaQ/zxubrtdWl7q5PcbXKeUUk3KgKTDdvWRMx+Ax4sUHSuuLAkdbDuWHIWlW1mOUQmYoJiaScth8hQg4z1GzAGMHNudR/KU13Z/5EVnqaUs7SlSPCplbBLeiPOw/SRQVQ4DjkCIDCFvw0MCitsbU2OnyAOtm1pLT8k2ve/NgwXvtH/3Fyx/3As9byA3ni7newuLWcl0zgjfWHPL+D1x80We/IUNFkYkDZbDCABGGTi20TL7XwzxmPIyIkKsT4zsImVYzKJd3JYPb4/bvn3feFbnF8vTB3nfuDutlb3qimq8Myfyl3D2gKYgjI64slvL+VFivOHpn42XHCvVJ0QSihxfvDyCYn6jJASRvNkUIPUUrh+6quJMqSdTJh+SPOujHXnfHOz7jXXvHdPWAUhHz7zgmAsl0Mu6KpzCtjiMbBmMjK5LoioyW+6zidLUitTq/T6mJZKDA4R+9UMn3g+2de3/z5eeecPJkP8RUi78BM97/4sejeJ5cs1D57Re8pLdzFneGgl/qEnetnCZmo3a0C58Gk2n1GYWVav9s32Sdh/m8Buv45fV6w527kwPXL6zfNL+gqRlF9LiGEQ5oBfSCfddA7PBQbqWni8gYOWH7Exe7dXbGKCu1lRRI5FUkJuPKKCTSevP0pjuu2XPRx68lPmBAcoiMMD/c4z/qyn/xHe4RalIiVEhSIiCUv1rCtBnHPfbIuXQ7QMuwAQzoTtaj4FxE4gF0rWC90/imTvXvaIB0AfQ6owTgvmiA+QLpCqIEBJSRWditzCo7ZNYBTSarqILRodxG0UzLeVRTETjaoK1FG8CoyF8IrzplFSWmbND0y63ds+VCUC3XLv/qFR/81/PzkfeW1/2Pc05/wqA770d9L27DD8odqNYcJLU/eNVrb75tUVxkEcsn+qZcNWBqyUeoNX91l8kpxWWhgCKIZE5DdDzeDa3WC//+768h98uzz+1/7AeV+wfehhlUQvj9xIuxTTtCCC9KZKDd1NnorEFlA3RBiAG6oF+WHWAW2kAfAatFDIQrGAuUtDjzFqU7gNdGQjhFCpC0v3q8+NTTcCHufu9Hez5+2WpvPKqvQchMcmXpAgF3mAfRFamV+K10cyYE8FEkABp0obZGtWNbWGchKd2Q1ZzIOMVq4WBEh4nFLvb68+snxl/3d38Bn1BW1k/cCH4prikERCrgMTn7MWedfvwpi7vnhbhlObliDrOABtmxrYOg9aIBMtZeJUvQL1HgJy/4aID0mtxux26v1pzffOTOQS6MiLyXxCVKIgJqn8UuwP6+qwgENY0GaO8hi/uiFOthjPBqn0eT/I2SDTFNcriTzDmFWrhZWfOFT3xrz7347Kmh+0rgvbJkLfCwH/LXrYVwscRYat2RZ05Jyvv4p502l94fDxcJX8ekaOxFhuY4CTp6AAYI07VmXL/j9yUfqhBKQK+XlMClKXFhBI5LLOJ9znywMheLJCj1NFngNZcg/dvhPoXZCm1wlIDQYskKEghQrGqVczVmqSipFcu9Tq/il8enpr74xUve+67zAKh/+au3nnPkk1Mmk1+ca81vYYbzpBDVpsZ3LZTOfckfbt1DTCbUDMNXjgSHPM1yXxDwF1vtXFDjGxLHcdndO17+1rffTKq+Zz8zvXq79737ChOTeMAXyCQmu0vTG5BXw/diVtxqcWQhpScjHxg1XtGsPJkoAPkWZQdm3GeXBGAsuPoCX1cgblZMwyH4evjSxCsF3tNOnTxgXbXXS9/y0eJip+lNR/UZKWxMhWcsBLYZ5DfpFRzii4Q4JDP0MgwyQsGe6ZhEW0Yrd+VafEaxKfQ7zR/q7Qrv+H//5k82HEQcmJxuMO4woaXzU/yFfmKIDLYHPEKRo3/nRb+Jp/JCq6NE2Uo4B7nKaJqeQa/GH0GEvaBBNS/y8OhPTdR6DCmcHzwmhwm97uHHbCuPxXxLSQAsuqqJEtQ10snzcH1tJWJwe/O1UDs+dBk9iUiRO6urcBnJXo5QuafVWcqhCp1Be3xiorXL+9A7v1JNyjCPlQp0QtVWFlpg2TRE9qAI4npmNslJpx2T+lE33T1M23BajHGmiYKdB9Z92zHWXoduNUoghHCkwg7pc/xOQ3aJMCiRPHBvigZ8ePDk4WoFCzOGryOkwNJLGKzLgwh5xLkDWbRBloAIUoEAQXwZFaQ7wilo0OnVyxUU3/14UG+MRXF66Ve+9vZ3vH9zaeo9f/PO5xx/TgDUh3NRtGt28T7SK1bXHXPHva1nPO/3W32vG5o7INLP8uddiIaqNJqtvLc9yP3Ld656xbvesSOo55/w9DVh1fvYt3OrpvsbVvu94nAn6ugmk60B/bk4cJP8ks6fud6lLFGiIBhuMdaaE9jcUgQkrPraRgm04w6lgxH/LvFP6iM5Z6kXGKk4+tDiGceHSCSf/pb36cvGa9X58UY5mCFVLBNBKLIUrIedh95gxFdIiBZHBsR0QgaAI/7TlSinZ8pJhh6qn7DmcMKxyC8FiMH+E10+TOGITz3+yP/jd5/S7SMCKRcbmUuxWAogf8ELyUp0B/zU2r0TDj36SWc+sRf22wSeKakVSkdZqoX0DAhrLnscU8Fpb+nxlnbs/L4bXsLkM59UcPNxcugR25vj4by1Is0G7y+Uz1b9znCbElMe7b0QT7D3YLRnhWyW4J5fZ/tQVvcTIzOoBFSOIBATH+ZH080DLv/8bXdcRS5pXj+M/ws4U4za5H/z78N/yP/NCz/yP09i9CR0XVkC8CCJZjatn1o71vfmhgmx66jhLeQvY/mlV9SaE3fvhr6AQWKogb6YD/VGtvRXKQUyzo0dx0M6uUFbqnEpWD7LMiQwoL6sxfL9FwqxL72ArZpfCoxB5BUzZVe2nXLBX5idQ4XFOG93++MTU35QvviSL7/3jResr5Xf9rp/PPfMp0bRXDi/tVQe9gaLvbRaHFv7oxtv/c3f/pPYBq3iQvFhWOYLzRUm3t2D9l997LzXfvL8+bGat37j5NEnb//sN737WummNYNSDj++gOzcuwdeqcY0vsRpQ0eN98/ZlnYAkmRq1WJfUh8QTGdrsGVcOJoII/euI/C1LW4AgBBSSDhQfe+0EwYlf6HXmX3npxqeopEX1o55eIbmQ5l05LMj+BO1kWLB7DGCMN3bbR0NyB5FXKxQyc4K63Q7PVa26FJk4hwO/+HNr22MedUqs0qTkITccDnigu0iv+CNPTlEJ08CIi//khe9mIBhkgLFQ4UFOC2UQ1g9OU03es2f9bEgsfo0OQ9PhlacX7OuU63FHbUVajn3xTi5tG/X17UpVB17PFW1ZdRso9ZzpdkpGnkvfNlnFehrtNpCLX0wn4Tv+NEVxgob3/bGD9j1Yxp8nys9qneXjxeQXKQx2NEn5aaJE8WwmNzb2faNKy9pBmtW9w8vJ81+Ot8P9jAGi2QVk6bAuDJthQqAgXhChQLbZTT6hQ0ODDglCpHpgsyKIKWQG+dUylBEEoAUvegWYefINmE2A/GkSihUwMgEP4qzs2UTkj0ZZ2rMbEQIEP6LmydzBpBsDtKRENCU+A3/a1t+fN+P7nnWQSe/6KxnDBfK37vt9jDakxvuzJU6jUojaBxy0xU33njTbeeedUbQyLXyLWY7kDVc83EPekkfrhJrHd5tevZfzQIBZLjKvUV/0VghrvBINoRR2KDFj9MOZnmdCpNOkP/Kru3P+qe3/GCuFxemvcbY+iccu+OO7ycXbG0cc3K1tKrfhuOvDpGgBn1sJ/DUiu4Q7yg1vJh8GH6mFo81z6+FXiACGBmQhZU6hliOGMAGCFYAHkrxx82l5Woa91DSjQ+9HvluDjnKe9zjxoNC/81v8z5+cb2+IV17fDGdbuWGOJkLk8QTw3E4BTPogmpDd+OdWcTgs6hzgVhiBMQOqNDKZTbmB41h2hok81h9c7lJ0Gg+vOs3X3HGX7zmSQZfdGcyB+o5XQK4X/Q3LCJ7FpkbGeJImhNvXE06/NZVV/abM6jsSVKNIwU+9Lmoh7uQlx+jNaXz0SuZAtaalDIDX/48ZMU1J8Qpvx4SxTZZyB2xafuttx7546vXzKQztWIJdzeuEyBSDyv0FxIhkoYO3om2Q27Itvp4SVrPE9SL1Qd1n/n7ywvIkwMIzv75pGoRAAhkfA9cwGsE1Cm1k6ZkIIG2rbwnUtdgJu551XrcD70d90/NrF236TiQpMdlhswPp/eIw7iVQzukxyAZkoj3o2f5VaHGz9PC0PWl2EhoO/30pJNOmh9uYxqlyFsEeAB6fITkvqB9cW4MUt6QriEuzg5tvEqqH6G/bANGIdSVbfDSEyRAMCR1KM4lExGk97VDiQUYB2UfBF60cXV4K9VxOKAdCQHyYyEIZnSoHX4ifQ7aJO+woP7l6776in/662vvvOuN/+efvP+3/vKY3Pp0Psq17ptv37RYuG/spP/F3pvA21WVd//7TPvsM985NzcjCUkghCkGBJTigOCA0gL11VarVWurVqtWO/i2VWtRq22dUOuMonVuURBRVAScEBSZZApD5pDkTufcM+3h7Pf7e/a5SdSg7f/zqXDDf2dn33XWXnvttdd61jOvZx19+XU3n/a6N90z2aq0EczBgaA/Fr2HJTGsjuLj40j/sB7gOk1FuljbsLAakxUR6neWWIHeCqliN85OOvFkMfuW//jaS9/yzqafdSbjFOH/Nx09XR10LrrBYbPfnEeEP4Jq2CmKkkvntUuIhC1YccOxYGOoi4gOL5O5EjfNJIGWJ0HJGjoNL4u/UL9LqayRLGiHLYiJM1BCSJuabTgD1eLvbCLEQ/fqHztX3QpyaVUHsPTbzs+S7Ax6gIr5g2oN6Se/hXD080ABDWxSJilBOo39c46dBoqFQYhPt9UeqLrsXvTq1/xRUuRhuALs6j/2A0BdH5YK3pmnnb7xiHXIAN1GPVWrQcxCbbPusu+KA9Y86APnW3vgk+dzDvpr88EXxY2dmTnF5hkfmWPxTlfKUngj3DnB9ECxGgIREj21aaZB1WF8hI1v8nv/lRHnOOjKvNt/86A08GAlrVp2jmGjh8asPzQ4ViqmP3PJV7rTuV4EVEo5ALgBZ/lcAeOhAg2zafij7FgwEgAYnzHGSsaBFoVh4ufg4ODn3v2BUlRlsWHBKcLLZOFfcHTWDl1wbX0OkJIGKQn3AtkXVkgcHuQ1It8RMAR4WgWsZIJCAFPwGjOdTNXB1dCazWxBqmCVWS5YV0JFgGKhAVUj0JZKVVergZJiRhPqwrPiTStxmCoVts1N3nbzbcNh4Xef8PTHrNqwb8vUHZ37namp4XJ2thjHg4N7bt1y9Xe++7hzn7yoXOQpgBciFHU7+PCxoxOLntUjD8+h5vD9eIzg9yrfQYXVUFBWUUJmFRucZbMzqfS1e/f91Uc+csVP7p+S91VlpJ5tPv6o9BNO8f/xa6X7e+769bhzdcHvicAGGcDignkFPGwdSddZP9OHUAJ1geWo1/vfbT1t2EWYl3xYc5lNGB/RgLSHlEbbULqgS8wWnROPT520wfNnO2/8RO/rNziV8fT4ikyvkpG1H0ceRo5X6kU2zGCtBNvbGw0YNOAqoZOUrjSF96pDLM1SPi8zNT1brQ63IdOu+8DkjW95y5+ee8EaKn14Dj5Nu+4QcIoFwHgpZKrFSrlY/MIPvpfyWBadIYQ/O+1GPu5uHvKqui75FB5TYn6K9L/vlz8CyZhZyuIOhz3ZgYG1q9KdfcuuuuLYam+8mM0FiueCuys7Mkijifk+WV0n4i5RS6OlacHPinEVuPnnEXgx1st7SpIBdAMuQ5maQNIWSVAQi6WxZ+IjpSXrA5AeCHDNZmvw9qWI0Bul9JbtuzO52gknj7K7ty3Q443G9aNA1PYBRCMEjTyKjgVDAMD7fd0e01qzTBYeQp3c97PrUZGMZ5Z5KSJAGA/Ygw0FDg5C3DZBeUSHZUulA+yARw2sjd9PylO7JvD8KaDXoRy9V7z/fNoS4qdQAahJfVMBCXRE1GOcfoL6xRlCHJQpVpnCmoaqqpGe87K5gXxp9+7d195yw1zDP/34015wxu82pnKbt++cnLo39ifLgGbV3VWf/dDXvvOU0x9brNXykgRoPTqQqM1+lknYX+r9rR8sI0LzSmPEz5mkZQI9u/EJbcPE+7nM5mZ80de/deGn/+P2LVvb+eH8kon0rpnG6sHCC58eXny9c/FP0086tVeoYhuwDkasMeROBZABKk6GlX4VZ8erSKjDlaYP9Rq9SfiZK3fobUhwX8wjBySOfChTsOy6cLXM9NVH5E49KSqVUl++1H/f1yqtXnH5hnRhmICAVJNPZRXFyUZeD6tismUq0jjzU3+S/3bl5aAfgUn/rp61klGvVShW/W4mxBUy1ykV6h+75HX5AlElkk+w7/htXqCd0svBHmWymYzfaHlebtWSFd+68+Zde1iUzpK0TK7gRQgI3djNV2QY1gHDpN7W16oTHrLxIGkRaJydWLDZ8Z01K1MD6erll23KtpbU2IgLHRM14WaNt5y6GAddquMdps3RSMrsTtCluII+xwQG5jKL5hRLleLC77HiPcAeMNoojnqogBxXbsOiEAx2NlkjpnoAj1zO97teblF9jv34/FJxxXXfu/0pTz22OsqLsPEQ/AsdJSt2mEw0hPdLqn70HAuGAIBPIAAHD0xCEga8zCWf+/QSb6KUKuViF7gFAgWe/clIynCwYQuIBn4hhu6BMaFjshMVEIAn7Kx5ranLjYSNFLia/cCgXhXz03A3CYAH/KRMIwzKsQp5RLeSGoTxaTtPiV1J1ASkoQSQAaIWZVKtAN1ocXBgJuNcd9dND9x2/5LCyB+f/IxTj3r8A3vqu/buaseTcaFTHB3293YvufRTI4vHNxy1lheEKFtzeRephwn0C31Di35Lh6Kj8XJNXD5TrK+RVWZpLkjnJlOpT13341f+63uu+NENUWXYKQ+xDY6/fXc0mHFef+7g93eEb/hqdMZJUXUwAiXKt4fpp7gQdD/zm4Uf0uqhalMnq2/VqXLGlByAikeIOaEKdDKHRp6mGM2gqIpbfjrtdVO+CxeItjgbgOY2rvdWr/V3TYd//07ntr218qr8opVOWwwEcSFgHdkyTBULEESruRhoCKySRP+qbxas2Iv0Rynl9NN4KJSKg922Uyrntk7+8KL3//XJp06kU00FL3lYDpRgdCf6mIidktlBiwUWWlxbXT7+ne9cy97IUaEYddp5rsQ9QqXO0NIRyedoCHhWAP9QByuasR0g+cCsZ9vNcMmy3Mph5zvfPLm+e8VwvphWGFJeS6Q6AbDGUgM2f8rYzsMUiTBPSP7Gg9bF5GcSAHw9ijmzBMQs0RBh15Riq3BJACR0mm0ALaStuqDlrtfudAK/kHe9IGgHwUBjNjU5NXXGM5axAhon8myaWOOeZCHJ7Y8u7E9XLxgCwOAkWiAazU5JgJAmWio1Uhv8/Ec/77SicrZYSBezpt1LkLKmocGWYIr5qFmZJDW1LU+ADSBycsOwtoiMJfo/BflCA/Z0MnX6lCN5VPcTdL9fOOBnMmOUD0jqirrfZA5hKIGq2kIx+Jc5YLPMyvlm1K1Vq+WMt33vzmtvvnHPzm1nLN/458/4/Upu5Z2b7+lM7vGnJ4vDhVQ+e8VXLv3RHbet2bB+bHQUIQJXVB3JJ1nyt3mB9DAjicIbd4KUoqyIVexGmVYmdemPb339ez/0ka99c8YtZEcWBwE2tjjdwQabjv78rPHcaP1PLonLi6JNm5wGmgfmPqK9JZTmsKGw6vk8Y79FSjVcIjbQgPlhFPYHPiAMSkiZZ7TW1G9JJalqmG2XYE3Z6TwbLVvmnPGYMhqrT1/V++gXU96Qu3RN4BR7bbSHhAPvsSs02mlVSUUMF5hGIEC16mguCbPfR1t6G0gxGXMrI6DQQYGMm67PBp6Xn5y897hjhy76wIu05FYk7mEiAHQPyFdgTivVTIF2FC8ZHN25d+qGn2/usfg860bdIOdVkFq0SlIF+TqB7ryNlMfVF796KBxcNpMN8r0se6y248pobu2S8I6fnHDnbasWe8VcFyiA7GSjEDaKAVSlfQkAdl4dnhCoMK4Zvy92vodTmO2m0JcALOJbXwJQTAiMwCxkUwtZqTEvAUhWAFQ6fKtFiWARRt6rzswGo2NLbr313iOPG12xsoYkosiEaXxwJbjQEvv/q5912OYsJAKQDAIwCO+fEABystnCzq3bb/7JDytOoZiqVbwRbfkKFmJ3IHESzE1GVldLkAkG0Sgnp1CITQFNWYN0+6U8lbQq+mmbBGBzHkgqEWbXBFIdpPefZlJONEV2XyUS/Q8oQa+1x63qOFWJqqwMQFAt5XPpdift+67nhuXsndvu+sFdtza2N5939BP/+AkXRF5585Zt4dZdHRZHDQ/fv3vrV7799X1+4+hj1pdyuMkjc1Pzw3CgUAdBSpeGc72baqed+5rBLTt3veif3nfx5d+4d18zPTIRuzVYvTxbGxLhuNetnn3a8MbHPPiKT6fv7/mnnOy1RsLUoBM0oR44+Mc4Cxl6ktWXjpNDEbSfr2MYk7Sp9/hW/dRwaCyTn6TA/mYW5qaM8HqKi1jZLtE2sVR4tfTG44ujS7s/vsl/+8XOzqn04pXp8uJumO5mtbyb3UDbBIAFm/AYFdg/0okWSC3QGFq9Cc7gqkzaam3RI3abJrFcxI/ybqXTmguibZ/+woUrjiiHQTOTKQhkHo6Dr8DdE2d9QuLxflFaGpJJFXr+xPJVV/7wJ7MsiRioEYQqlWN3UmA56Vw+Sl1tpZOW89WHOAiFG7tusZXxXTEFRMDKbljdmd68/rvXrF7qVlwfBK+VaHjnm56P2lWRja0cbdHc6RfDPmSzNyEAhAPCBpBIADQbPj2P+sj6nWEyCSCRqC2GLzYAC+ZLyXSX5Thp13WdTjvwcuOSKzNR0Bzesve+x5x0RHkgFynCHxtNsXYbqgziOMRHHcZZC4YAMAZAXyIEwL+QJoqhGJl0eqBQ+eKnPzXglIthdbAw3u6yvB8PwQNgmgCZYQLGFxoA26qrEtIvSC+DV5Fmuh0HJ4BCQ+Dc464KCJtrxgs7SAS1F1HG6rfCVm5/eTVcZcBD/BPO4NDn6CRMXElr0KKA8LVEnXa1lI0b7KtEiJjJO7fd8LM7by32yhccf87Zm870qkObp++e3LE9ygStfHz9TTd8/0c/Gq4MrF+zOvnapP2/1WsMKycmEcS7o+5//Sc3v+OTn3jT+9+3I8iF1eFsbQxWD36Xjw0Dv9eqOxtWT/zJBeE7rqp/5fbohI3VyrrmXCbfqji5OVbtg6Dpzyy+gQwNgVSto9VzwhLqLSWE0Pm1vyOV7uNf6AG6ZEkJsgJYP1hhlYgjzJJOrnTE6sxjNrSiVvSZrzqXfCM3MpYZmsg6NRYjhxUWFPpeN2oW2CEO2NJo8dr+m/RmXmDym1VtN9UWNc2ixCmbtK68Xn+1OCXlTs3seu7zznz5nz82k26TodjhSev0wG/1IJqKttVDEQTss1xdilR5LgB+CKD3Nvyf7dwVhn5tYnF7cjZdKNv+BAZcBwgAX0an8NAhDnlr5XPFerbjBU667XQr7glr/PaWo796+dHL3QHX5805MDI8HL0rGmQMmozANhttXOlweagqDUefNwMAZgDpfGQElnuoiwG5/4h5i6IC4nugWBSwp3hQzv5xpgS9C8IGZHhqb6pQYW+JeiY+8vb7fn7UhiUrVhWYcYx05DTYDcqknIdtJh2iN//3s4T5/vff8r/5BvYJrLef/phTUw801qVWrR97/Mx0rRWUK1lW1RI3NJfLejjaKI6jYnph/uKD9cmwkZrAdEDCx4fgXR3MCwqI+bSDJZNJF9kWTf0HuROzgYlVQtKmQt9bJdSW2jo0wwTcLEdXQq87kO7v9wQ8RzTAcIEWmpJgAtlPNlVlvQp7xs82O/kou35k5ZM3nLxpzYaWm/rRtlu+dMs3rq/f0qzOOtmp7Ej+uGOO/PdX/PPatWvLRN9lBhjXRltZc6TNxtUMm1hWMz+Vw2ZmvKqPOK1E0h0sWVAzklLJlbbjQalvN6aNwqZ1wo+QPPzc086t99e/cNV1X77me3fv2eNUirnBCk727NubjtghGe8St5PBwWfWWVzd+NZXpj97141v+raTXVM47Yx26DtRB71Por/RcDBKkil0VTP7P/UBTHnj+DVEqQzY3ErSVE18OEISuEN1sW2yfQKuYHGePmVFMZuI5fLhJJtkZYaWRhc8yctV81dcO/uSNzqt7c7K5xA1mM2+9ErFRtZn4sqCz6J6y9h9s9wkzCGoIqQ+hlJkhjGXp696yc1F7Sah/Gos++12WYyCkznuhsS0yLPLve/fdftdH12+nCexL9BOQOIXulhVPKwHnprltrPLaZ584Ru2t9lUZTkL0KvpTB1/nuSw/jgofej2M9yFXJa921gLz7ppILBwxqb2qsGTn3vmX3r7zljTaqWd0RnHZ51fMVjSybaAQ/ZX7WUI0o/mDSY8lBd/MYgWM9gsBQziYtjzgrgQQQniTBujRFyKohJhQYHCgGejUq9X7pKtnfqyYez57NKtR2QTjuIqLAH12wbe7B2CmZDVOM5c24vi+he/f2JxCEKFuQNaxMxFSHyYVHMP0+gvJAngoboo4+Y6k1M3XnvdYFwtpgYrpdHQyRIgFH0lki7oOZAxkQnHzIX/AIdozvJT6C9ZPyqWhompKa//ulDEkuCApLzx7ZZLYWpgDuuWiIghWKWEmbgKRehvUlpIBG2EJAa9VMgYRMWVS1LeylqtusfjuKlG7JLLZvFojz1u1+uzdz9w1/d/+gO2dl21aPzs40964qrjjvAWdabCHVund90/9ZGL33fL7q2FoYHh8RGhM9wtwi7mLQuhyhcxWYQ3cazBkZ61qLH2NwfopbIXX5ukaZ4CmYIFVYZWq+H2iTDQ1mQQrYvGinMmyE+1U5/++nff88kvX3jRx678wY1Nxy0MLyLcm98OSkxd1rYO1+R42Wj67VlnafmUVz8/d2v9+n/5Uq4ztui4U6fpH2Znj2B5uMhIY0sGpwZAb+WwjPms/k/1OVl8UUKPRF/7JE7FQSjc0jeJe1V8A74inWmi1ykHJ6xzxmphpx6+/T/in92VLQ84A6uNCCKK8ck8zvfKR0wo2oaWV9E7GiG1iYGlxUL6yeCplYyYutuHSJJGzmBLFTw+ux1IeYGApfumfv7GN7/krLNXIgtQuuvjFmusr97wSDmE5mGB2FWrMvjNH9+QHRhDk9YBIRM0SJCZDIf1SD89n/OLXyC6KMmaIHjqJXrLWTTcmxgeuOarJ0zvOm44ZutVse4Z9o3pFdmGD5iUJ4/NTQYBMNXKL5eFYPSxaD5entr0CZDmhCTwXpMAyOFFogf2U4wOlSTKHx5H1yMCICdRwT3jKasAOfYID1bmWg/ONfKnnFkDThmRlGgMu8I+uhYJ99neXxzEBfVL49477w/O//S/fnCuM7e3sd0tjBXKKadtkVUI1sCWUoAVMIClUhHdNfek2tR8RpwUNydABf2ILsgSxYQGZ2i285wATpDFbOa35j7FhYHIV1XcAS7tZvKTPMqzWJh8iupKDsDYZ+1Vp7JolG5BkfRbeJY3J2+hcSwqhiNiJU4mly66CkcUhuwe5X/m5q8vvWP4iNro6kWLn7z2MU9+wuPvmtl9x+5t3+1d850v/fiKD35lxdFrn//cZ5/z1LPWrlntVbU+mJrtI2iJXG30WinD83ovcgpstIilyuCkzaZXhurMZYle06eL10OlBlqEU5qcc+7etveHP7n16u9ff/ud9+zpEV0l4xYHR8ZR5Wfmul1UCuVSjX1syrWBuZ07vGq1Be+fix77rKeNj49f9yeXOHc5g0et6xSrDgv4xDBHpbxXRyjiNYYjQdySg+hUmpX0rlrJe4TUtd6AW+gxRJ9IoEKDOGko+R6LtwPjSDG2iaODtS1Izs9Ejay3ckl3/VEZgpBe9u3o8u8S5LU6uqbhgm60MltjoMfFHkCU0FDo1bzJBlxGfFWGkopuQ9ogX/esg+gh3pVjpETQxEhibIb05rxCaWrXnuNOmHjZKx+Puw1rY1k7bv7mjzgCwDfV8aCIUy8+5bTPXXv9jdt3FgeXtWx3SD5Hh0DkNx90CVoludpJ5oa498L6XDHj1o9cveO+W/Jdesnv5MXMs+gA2Afq6ET1I0OuETSYM5CTwVmsiWXydsoqJxmURGHLgxSwMiLLgoHkKa4GPXpK0podyTSw+tJIpW638p+fnDnn/4wfeSJimSpBWWd3H0WXBU8AwrAL9R5Zu2rj6SdtvuqWBqunGvdPTBwVhFXYXIZV4r3LClBwirBdpmvuQ4CR8J9xkWLhmOykdYDn9Mdg0f7qJ78E/tovWyCmpFgSw1nCQ+TqccEmfziAPqEJ/utqNENWKmCe54F74Qz7KROUEjiGCt8oIgvVx5l8YTAbhwFLajSHLFJkng0MU+XO4GwqvmVu782Tu73bbhmvjRyxZMXJw6vWrVjeWd7dN7tv694t3/zQ97/0vq8tXjGx/tj1L/qjZw4O1UbHx8qDOPuBxuGP/bDHGny9eb65ajJfEeHEF7FQntbjUCHu2Vckhx7t2HL/1s33PvDDm2792R2bt+2ZaUVp8FsKt8HhYUgmdbETd9rNlb2sj+gxV8eJpDTVWhm59dZcKz179Aued9amU971srfNXZNa+diz2+zZPdVyvKLjS/HaFnUWQ0f3CG0QXwOFrNqHa5VopDAs3QOKpteSdEJt+alymucqkNLKJaiU5jPuHVHKyxVYX6TNb/ODc+uPdIuFaGa794GvBPWZ0sQ6f2iphgTWn85n5PTh1gR+kzZXAu0Ho3sGL6xI1uDTbbxMpCK5xU34U93gPflcm63Y4wy7HhD0Jwgn/+/fvaJSMapAQFMLLpiIoSr/yDlSYTfuFFNFgmT87bnnn//P72xV5ojbZ95Z9s3WVMGGHQno/2rzkZ34ZhNxhXQ1dtMNOP3Zo47ZesVXg5aIdDiwAABAAElEQVSTZem1S6TvHioYQbwOqL1mJb1IR8u9Byai73wFaUiIJTmCSeF3htsOE2HJ4Ukrr6dg5JOqoECM1TwJsRG0h/oT1Em3quXx6cmZT7xn8sJPDAs3OJ1Mho0nH13HgicAWhUM55Bxzn/hc9/47Rt9p9nw9/jRcKE60GoRQTkA/2N2Ix6NFjdKvBc6hh4IlzPxzf2fMQdwkpEHLEn0yQApg3QhZZELOSFzUDQBPsuE1QQ7qAQ1ky/Ax7bM/3kEISRj+Gz+lgqQNr6DB60daLtjdsoCpakB9Y785LCvIoFHMP8hNlStjl0SVxsxFuBUdzDbiMJJf+fdd21Dh1rDA2qgPLR4aMPio48eP2pPfc+D9T0PXH//a65549Do8LIVE8uOWLpk2fj4kpHhseFKpYTnvfQc1husy8FWSZgNkPj0JKFRorm51q69U1u27rj3vq0PbN02NTXThGhEsUx4GeIwlWuFfCqHp0x2bmqmVC4RtKHpN7sdn4DZMNxigHPlWtgbzmYe2HbX0hef/6xnnHXN26+e+8SdQ8e/LBxcvpeYODi0siNyGGRqnt+cSudrkEQxgcavJXwg/UAGExzyLTYfnKtOU66wb9LhUG70/dwVMcApNlA0WBAtS0UjXJMyraADYXOOXuUcs9zHJPDpy92rf1IYGZpdOgpDzrpgHpThELqiilFDCDxs7zXhfgYHBpLh678zQUfiWTXMNo72Wm7jlxDialLmiZzL/u7Rrm0PPPXMDb973lGEf047RTePtlpCRjcICizhfkQdGWcAcz3w3XPOXbv8/FM3ffnmm91C9X8aG0EdwwjRmchCSGj0aL0ZN9qd1cdsLw1MtqcGTQ5l6GA0cPxSkCi6XB3JpCOb0eCPelm43hC30LrReMsRhFgOd0U5BBU6RAM0m/VTqJ8ymo4cCfaXskhtU+wQolL5dTczMjqev/qKyW/8V3T2eSiCcC7n+xc8StQn/7ePw+BrxSKyL/zpZ585esTi1n3NYqq+Z/KelUsnsqku7swsEiEam7SLwBZ8NuwFCkI0wwjkGPrAKkCeLkIfHMAaR0IGlDLwMqAGNIBTy7OHhKd12yRZAbAOQb9hVTKAOEMQ5BndoRa7JbFAOkrRANM4YugUMaIhUhyJdhCEOieTWEgTiWiFNzn7wiAJhDiRAOf5EALmF3JxrphLFTJB2G30CCW6+567Hoh/zqa76VIpzwL/asHLpMfbO7s33nvHdzvXsyNSvpivDbL4vwi6T5a+MM8U+tq8qrAbuNlCpxvMNdtNJgTSCB45Xj6LB2exRIvyTGzDs/rUICAekYuvRavLwkwcKHuemyg48NBwW1qY+ZNtt6171hP+4gXPv/LiO6698PJNq353z7INW5uzTsYbSuUjoiHn8cOjzgrOu4wBfSkEIsMvW7yBP+gxnP9AmiB++o7+peuUVBrGz4ioupmiNoDgYKEPJIGAbQRYKycdoDNQcDatr3jpxm0/dT7whZ7WJSx1xoacOQUZkmBhaF1EhUpMKBMik0iR/DUyAFMg/CEIUEvBJmBzUSKawT7qDAuxqnr0GpYnQjvPzOxyctNveNP5wkbEQxKkOBF7xrkYrdR/j6iDyZHTnlnaeifT7r32/HMvveOWaHbSKQyowznmWZz5Zs/PhPnfyV91T6JLBXBlhs902n5773SwaPW+8cVb5vaMQ8l7DDYTTZPRBpLOFJnnUYQupGFV0ef3xd1rrA/kUMQgQS2CBtiDyhF+F0xwWMJ+agpaw4T0ddjwkcfbgt4ku35irbn4PXsef1at4FWIFv1oIwCHgxEYHOkz4/PFeLp1+49+ysLBsNvKl2twqFL+pHBIAVSYvpgCieCpXU6BLvsJE8zBT5hhYwyk/wFiJCgIZ5t2iL8GcXYVCUhOHO/FNGpaC+70BP/JABGIYRFAC6p17eeobvspZJEUgKjodSrQv0UBfkKi0DHpQREPybNSasdpAulkc66LNrodsn44F7DVgAwOsJTEd8wRXZE912FkYlbhhI0ZIr33okBb8BZyxWIemwArPNOduag5HbVmwrnZsDkXtxu9JolGr9tMRYSJYYV8ys27hUKx7OY9OHoZRYWWFUzN5izkR2QXo0E2V0CB3tO6HvjwNLsbO910xmcz+3Bza0f1lDV/83f/d8+P9n341f9e9DaWV5xW72SJB1mCqjQDmeeKLtbT0VShbRKR9Ym6wqZtMvNBtyTUs/0j6X6og4i2dRvF6R+wMmjMdDjqzjCVx4yJ6Eecxw1rMictzu/e0f3YJc5Xv5c5ck2bdb9eKddV8CKrg16n+uRKLYyOoQzLFOOon6AUMZ+k+WNjKSrAb/4jFxF3DLs9lAxVci9st7rbX/iic1720k0QsmxfuUwTFSPJDBRW//w3Pex/5cZrHQBf0vJnx2qDs23/+s33OB4BQQ869OHJsT8xn2F/hbjpUi5AbRgXHPVxUPbSq48s/+w7G3Zv3jSCfQAjMWIbMTkJhSoELfOsiVkkej30MPnQUVAKcwCVO9f8QjDF9jFPKiwIGHUBE+RmjMB5uYGKjmhLVp7CBm0BIbhiFpYUp59qVuInCrmTyNsLq+Xy4H33NCsDvWM3lonoC+v1C99zuP94ZEHh/4fehiPkkPUmnX72C/+oWGO5ZwAC3De5LXTmWPOfhYMkvheaIMxwsGoAQBZ+zUl76QxcGyeeksCGHWLlNMX7P00vRFo/k54SKrCbQgOG2fV2oR3NDCFrsYz6Jd9BDgsCoYTlJEuUhf2pUCZFMTvG0vB4YteyalOpErjRyRUdFykZ/bSCGGiXm9JwN1VsxtrXIp3veSy48RrpXCdfrsxkynNuuVssxbW8M5hODfWyw738WIbVErYnpfQhPXSc7CqWR39fyee9HFQhi4XZg8PPZgpo8EuFXJpuwiXCmiFdrLazYaPLaiYsxVEem0QYsKOV2mwemi0cy+nHXCGM0n6b2Lq5QlwpZwam23V3pPJP77ywM9f+x5f/lTObXX7UKbtzwxU/O8hWa60IR24GBea7QIycSbYlV48hkzGnE95NCB3UbyKarv2T2WzKOBl05GQikQDSKIIEg40qi6ifxH6WXQJXTvT7Trk8cfRa7s/+/DbnC1cWa/mwVHGGB7xZpyRxQWifweAvWEI/IR4aFhGT/ghr9Iy2KAFiMwhQUR0S2thUPWJTmRZLXBlwiPBcu46B4x/efH7k7MA2TERiag8jtq4TNEkEfKQdEkr1ZV2/E5eYN+FrnvXMLFso2njomhzJz1/feE0FHUK6WvQQO425TK4aDAzuldmeIHN6EZhclvaDjv4U64+Geuygm5bs5yQFBYLKtemmBgI/+plw/f0yyjlwHJwJEaoC5p22U62MfOxduxoN6niE6eUOtPx/K7XgJQBNTPhQIkWDBoj0G/vXXXX5ykKxwdJLN1MYGcZtkR0Zq3kvxDc5jzSQaHeTGU70c/kT4xwsVgROAu5BawIBKuEhDsWRFwjjNyncLwgE7IBiYR0TGkQelCUIhBGUqwoyBjwkaaQEZgBOfxAZX6KBZpkhnANXU/Ubzwk94EFOKgEVUSEHIgJgi23A2GAapBYkJZNNKL0wl+8SY10I0LhiIUiTF9hHEddEtsEhTjrIjK9B80XABnQjID62Jkcswt5K0yVvwyyxKZSCxDuK5kI3mMeK9kPOBYRlBuOKnunT5K5kjFbPKaYaSBNeKoKegtayBNyK/Aend88OR5+/+H1jc8Frn/mGzp3LNpz4ql4wnMNiD82N4OigjgwZG9Gqd303g1uISIKUMSAdkVcGllZAaegz0VGwBSZYriHMNq0AXdMl872SJOiZDp7hbjQ0CA3wQxYi+c45JzSOqWRTm3uv+KBzZzNYe3Rcq5TDdKeYbhdBT4QRszUEGl/6O9E7kSLKEU0w/WBC1g3DaN9GdRaMZiKZmBJRro3dgeqymYbP57H/59yDWz/2gVeeflIh64xRlzYgkRil9V+MhC32s9F9xFwUh4mGggKhX+xIl8q0wvpx1cxXbrjVrQwUiL/WAVow/ORjn43ZkKAP3XTQr6YCMAhhZNkbkEbOdD3eeORMOjziymtOWdpEHQaldjslWBfuyzGPwcRZnwEX84XfM6vIWIfMGOPIz+oPeCA8O8HOyE+E8vW0OkxKVKg8/B0rgRUMToVlKRKPjxlaj/NBQL4IOzMUSCeHu+TADtW63UyG59wZFhZ0WsWf/vSmZz5nCZAWdIiHB8Wu+90i8OekmqAGg41Df/KCzqXLF/gBUlP8GeaXro974hnLVx052ZkreZnG1J5Wc7pSzWfzqUaHbSM50JNIcygMDYbTbn36CVCBJwk7pn1eLI0OV2nBuZC7NAIGPsISnFCEPoIG61KA/0kx8JCi0Av8bRKQNt0EuFN4U7OMhOaarnba06qETF7EVaIA+irSYEMSRkh4lu9EfBaB0UHFTAj7Ar1cXJUx0VJUiB0WflSILBK0GVYejl1mX70CbM9yaXQ9LIRnx3lstnQJPUGt+olBAHRPJVQFzSCBTcRycJihQP+umHDchCrlkdDPtxsshiq1282Z2b3lSu4jF73Ri9Ovfek7pm9Jbzz1+amw1GgwBIZUweZJN6qdvIKhANknvYG8YTMV84OQCN75fX5fnyVSSAeqU2XKY3A0mXUqrS6XracLy72rkXKLzkzonLBycKxGRvipbzj37yAis1MpETTEJw4xCEcBSGkK/S0zgw1tMh3oAuENdSxncthcMcQHAeBu/500SogmU9rz4P0Dw2Wnl5/Zt/eJZ69/4pknslFJ/9lH/B+TprjQIep2vnU4Vz1j0ylLly3zt2+Zq0+myl7Y6QL8btET8f8fHfRjHU57oFkoNBFeifkEDpbRq9+76ucDR3+Uk0yu+48DRSwFXPM3mWzJLePYBAi/evCugxsdhHOeR9DTdLuF+aqY6lW33pO75ko2755jl+huh1gd6D8lZeIXx+KNX63w8MgxoF7InyJmVbhWvDpzcvyEDU+54Ny9UbvkEkpgdnL3Vj9oeLU83H0Kgyh4HT0I3iso0YkOg7wODcAdgatOAtYoHiXbkJCJ/SCdN6qBuQq7nsWfEGzqhUIWQhFMCF4OpoCNMcyd9CUkJsEcgCIJfqYxoNrJRvOw6xkH6VqniQsiDCoj5C6eV3ifBNHS2UZcKJ5QtdnkNN4/ERr2X3kWhJRFWwNnpYhsUtvAHRm6J+x5RHRjkKy20pU6B6GAcABgXiFZ+auj2ceBBbQOPRBDG8hrBubKckQrVBhvGYL7Uwb7c5LWFQydac9F5dxw2Er3MLq365lc56/+9s9OWDXxT6/5l7u+UV++9Hm9+rJe6A4PDbXmmgr5qXA94p/ZyDnD5g5wg1xt12XtsMbJ/p7YFFihyW7lWGlFAwzj66qNy1GqU4NpfqTrt4TJY6i7oIkQsk7Km/SdYiG3aZU3Ueg9cF/qw19x9uzLj1bTtQG0/z5mFCdGbyWmkBGVjGEUnisDCU4XzU/ExIRxTO4mOQw8ukI6BcJFQmIdFRKyu9GpM3Awjxde+OJFo9xYMAplABpWQ1RY/QEvraiKi93aP//xC0qFrDs+5HtZdrBkUSV8Qy/TX+7+GzEHuDvB8fGeWXdk0b6h0clZB4wqUZVJa+KwTSJKGRGAtNpf/dRhDFoy53hIBh5Ncw4RYE365GDYIFv7f3IbmBXG1zgdoAfJYPNu2IkO04YoEeaOBG/lTe4Yu+Si6V7EWnrxCR1Cw0pQZipiaJuZf9Hh9hcYX+CHzKVQaS6mWM04T3/+s8tHLoXCD1TcztyDO7fflXYDrwZ2B88F2iuC8PqwMIb0FSQsx0YhcCW9FEInVzeGPKCSSOXDbB4HIm03zdWwMkoTMINQrL2NtyLvg4GAMSIEcEqK5QQ4mUkCb+DfYNVQvDA1yhyQOFeFAFIavj7B+0mm8u0Wd3WCGUUMtJf5PI/MzoexkQS7lWYTvziXEzLNoK6xk12dtI+uMD75xP1NEoZes9puEU/JNMROrDcTBbQun/+QE9RvSqAE+4NuWaarlbrgXUnjGNfA+7ayXmlYxXQY+Wwm1ZwYGZnavdXLdP769S978pOO/4c/fc8P/+OulRPnLRs5sTsnU0ZztlnKV5l8oH5okhqmttH9NJsEa5DZOxMNCjkpN8p4LDRIbvXYoUUfoi2+TKyhv2Xax7bNvgOiedob0iGYB4sJoA1tgmQXo92zzknLnLWVZjwTffLS/O335qq57PKRFEHpGRlQAR5weSPOyIIQcoaNAeMUDQAdokugoDpIOiIleERXPltpEQnwSJJmIWGHddAufrF3/eAVf/b0E44dJs68xJcFcgDJrDYRHyWeRYCRDbHT9J48Vnri0Wv8nfc7zTpsRtj1Q5/lew/9VdRwMCLeX3DndG5g9MElS3c15KIlEUO8hh0GEyIJmi+aOtq6QSkRg/0HN21uGU4XERBel9CbEARrE6MCWaYGvkR3GR5+QQPg1/rF7I1AfibV7bYhMOwXFsVzrucU88t++n3nqv9CMcR72ApN5IMpJ2bv8I0P8WtGMumpR/pVUMOhYRfBx1HSW7vyzOeeN92BFY3L+dTs3i3Tkw/Ap7IjlGYpWmfbXgI2mMAh8hqwHEKBAfKKLyK1IOvPQUJaWJ7yMBcTqFgSA84dkIqM2FRAw3gL8/WUqqV/gpYAOaknTEmAR6c0QjqRNwzRG48v8wA/ZW41U8FBt0QexPWz5aXpvqUsEhySg9oCxA3q5/2wzBIRtETY6ESaXdQJv3LgFCXA2Ct0T5BjTiV0kp9h+2LbtdjSkg9kMsXBAtVpoEQm7IHoCRUGj4+vJ/KBvCs4QwXnlaY++ckaq06jlI1rXnpm531e3Pqrv/jz857+hHe++VOXf2zXUUe8YLS4sb7XqVbBLlG32XJ7RfC1kSWth01kEchADpYf1yMUz8b7s4UyqN/TNZvHvSvKuTSYRoLrWcsBovfB+1klhPfZVEqij7Z8kXthIduMw1bHX+w6py9jYtdv+LHzua/5lXy0eixaVBWYKMycPqNZkM2BoZSMJqQPASAHnJ5IBqZWE1VgEMAtSabIA6iJHNhThlZjLNrQBbF1G3OrTh593avPVeBrDD9YmBbIAVyZBCB8aZhWYVSAukWx89cv/EN538JTEMXNc9mBAkex3/BZRgPA3f1iJB6cddLlvatWb+/Y7ivcASLBrSYhmKZSxedZfiMDykgQFNc+phKKt1rNa0z2Xs23vljQf12C6kWZlZFcjQszYp7UgCEGkxiEXyg+jSMFumJMZuX3vGk3UUua/jb0QzCMPA+Xl00P/IbvXbC3F7wR2PaUkE0ScG2F3RyKGydevnL5NZ+/rNmoL6rWeuwH0W3jL1+pVSEJwA2yrgBOU1rDb3AnxXOiBEDhwgRgbgsyhA7SCjoCtwifqDkPuGAelfyKXkgQKpuAGAxggJtS8asCfgr8KGAJ0AE3JRaQQcUJxKqA0I7QieBQieTKL9W9Pyf5SQ4voyrarDfzX4iLnwmRMOWFVWgKDH0Jn4jCAo9rXQ3LGdeEXgedjzAeJIy3YMVUQGd9jVoi5Rbl6FUxdDjT8O1S3HOq5QmKoKmSsjt4FjX27Ou1Zv769a965tOf9I63ffND/3LZssEXjNaOj+Mi6rVWt+1HrWplGGURvqrWB0w9dSf9prcjb9B7aiRXtZlTJFNKeEid7Bn2IfasZHux7DSFL+I5swHQz9ICeZmS32rG/qxzwZriYwbaqd3Oey9xrvtZvHoiXr448krpjhaFW0dCAwgTaH1pn8Q3q9eVYUOowVCeDo0yb+OVEIoEb9lPAZPu0O4sFs3dd17ysb/euH6UVds8FKe6C8WtUJ9uJwCq9Q0aJoY5hRW9WHAn/eimH/00Uyzzudoqh6KSb3/tkXSjpgWFWSmeTq9b1Q53H/vDbz5umPWC1s3o2A190314IcHAafMvfEcJAJeG/9L0w0MDI7BMwXQxMd0EMsSClhGY8jJyYRNW9DfTeor3pzDsDfidW/L7ZMaTw1YBekQnNWQC2I6sF7K2Ea+2HPvUdKE9Wdfbfo9XGmyfesYYmlBgL4zQTtIV1jW/9nMX6E0gd2EfTEebm+jyYIaBEnivcGDlsrOe+2z53EXhUCGb6szOTe9qNHfnPLQM0vXbKS0MGiFpgTDzAJGw9vyEtTZ+n1sYBrT1EPuPCuQix0MvBGvaQ09BlFH0QgAHfDiIVu4+CX6HI+HUgnTQhMBbCJi0JANNruRk9iSnIV8hFWP8wSQ0mir5KZNvcpKDiMBpKiOuKnPwafZsVhchEODEmSPcAEohPYV2SEILen8swKZFkS4IHhwZ30URlMZTioDpyASIDtgMSGjamWpIGh60Peh/zDYwr/qXDSCxA6M1CnuFeDBqxFG9+/IXvvjcJ531rrdcdtG/XTVcumBseGOzhRsRC7mY1cxCD5ccj8+SJ4924oOuSgskF1N8gezrDOmD6PUT1RBKIQkHqWyQyYMPpB1CTssg6KCik5SFGQATEBo48f6mmUNl1SYdO0cOOadN5OJG/KWrnO9c742XnLEljldBsnFQAxYla3ggHPgBsQKiHZAEYQwRH6XnT8kH8+n5BCNHpq4i0KLqeAx0vLC59bl/eOqTT10H3dJqspTTpIsWyAFDQMxSA1P0hYAsvSv+Au43H/Refe5T108sihuTKAqlatd+Bg99GDOU3BYp5eDa6vrTfnf58r1E523ImaGFZGcCkhUxOpyUVc9y8O75QwSHsQJxc1ghu2NRVvpTKymQPEX3cyRaIBMU7KdNPOXDLkKRInz++FwsGm4qHsAYEPVYQdmbWFy++KIH7rtVSmGjAWIFsAocrsdBvbxgPzFCKclQ+iG6kVbQJpx8EPrnvPQlA2OjqCwLmUwZv/PW1M7d97f8OtAlFG8oVsp9rV8SupXPo2FxLWQB0aKkx3kSsgLfYLogbAY8KPWH0Qy5FCmAgqzEwt+SXQEV2qFDUGlYQn+MewBRccq5cP6qBDoXTY7+KXQiPozHaYusvlYtDkmIJUwZE9KtQjHI4jtFZVReDBvvN+KhK3cPohDCaQgyxrmKNoE6qQ7ihfpI1bKFu7UujY+oSlKfeHA1hTknRyCmCpPAnH/A/vjPKG2ZrRm8QINXv+y1f/yc3/voRZ/90Ic/u7J0+tFLnsFiWFTizW7Th266BVz3MC3EaJmQIJI5LE4sQa1CuQmFs3Ziu5bwwQyG2Mg2AJtHg0W0GBYGQXo4k/z5dB61U4KOvivo4qKZzp262h1wWp1J5z++4WzfGS+p5sojKVadsTAcTQ6UJB2wYIQupIdFAwwJWU9SsZCRiDddIOKlVvYLHBgrCWMqoNOKt4tDtfjf3vEqbKUYhnpBM3LauVxZw7MQDoAYGY+W6puxsCQ2Ln5HYSWbXppy/vw5z2XdIEhYmkt0bv/TA2Z7LnAGh5o4kuJTk3J8okAk9PEASreuVM1qCYegLzkSpK62qYXkzWckBZV/8GHIPcnsV2V3E2qvZCZdUPQqXP+yBA0rpeIKdmBFjik4s7uXvfdtD0AhCBjB7PaDFjucHVz54ZRe8CogzX4YZf5oXwcca+B8YX0z3ZHMkmL5B1+8fHSQfRNZmEoYn/RM0Fg0uASFQoTEiZ0JVEEURycsyBsmJ28bKWPE2PWREwyqtEHCoMKInEKzEuvZSyMxG2g7UsRKLSYwm4GxFdJZGJ7jcfApyBqo5ZAwKbRKMoFtmG0Ii90zMoAqBv49S2wdMJUIkLh+w+w0Qap/KBeEQS78Kq92SQWklqmaJJNHyE/szLzIaoCoUQzqJjQKC4TOwyyx8sQHw5rkg9RtbC0iAuwfEoNOwkSYfODOpDs5Pyq1IBuxX2N3lyjaHUerd6ff/KIXnf+U0z/58R/+48d/FGWePr7sTKRq8yOi/a5s9IGYOvUfvWFb+ckCYfha3oAy7Spim8lL6nhTQEnnQ3lWhmlMjGZII4Bx0oR/F7OEAsnkQnht62qqgMZkm93osd6ylyyOnR3Ohz8XfPSKgYklzQ2Le3iwWPAKXisxLJVuQ1LkCEXtIjhqoigSDUUskOhikgGNUAGeMRsA9uhSz+/mi/CPnThoFzwvbLRwFAn3/OflX/zwumVl+AfRddgCgh0xsP3BTYb4EXzlK/Wp6gDBvCRUdUADCaDdZt3tyMTAt+64e8/O6aJbDIKmYoSwbw8yIluqw6sgdqqLAHDGj+7tf7bAXj2cctxWhZDZG9Z3br/zidN3LppwirOOz5t6sF0o8RWRj1U5UeyhBaK8H7IXDe7/5CB6Y4uzxcDQ7R4KHynsBAtsFxwXtMQXlzfEQVgFW6CB2ga9PdsMCJSEx4F8NELkMLQmqJPPMzASku/YARTfJgRdqQI66b3VkdEfXBee/KTixApCpjfpABEq5tnheDDEh+eBtv/4Z501fupxu/ftyfhRoVJGzccKpck92/CJqZUKoH6WLGXyrBbzumBJef0L2SdyAOBvdliwLmiY6Uy+uQMpYTZDKX+Uw0mwHnCyUDW4mWhoOI/iOyTHoWQaGProowLhNSMosvHC1yOLJtyKZo3miqYMOUJR88jD8vs/Ja1olsJ18kLNreSn2i4cplv9AnZLtSpTt5ICVrO8mdQScoUROYyD5i+slEkJ/XbyrVJipdvNUqZUHciGi+qTRb89jbuP7y7fkX/5c5+/8fGnv/uL17zpk5eWihuOXvmYQk87GIgOJgeTldrtZ58MmkCdFOBL9fo+/y4FjL0dAir2mvfyXVLu0nj7Od8qVitptxfmvUenw5B2oWRu1OoFtfr4actGHGfizm3Ny69xxmvNiaqD5w9VCL9DGYWSEsWOYX/1jhFH8wsiTRnRfKEIDmEbDl4v9jQVtGby1WJ3ehJC5uTcdnN2aKQUbbvzb/7ylUcfOa5vSV4kOqZImgv98JBaCwr4NOw4f/dHL5SgDZ5kbkSKACKhAaUjA8iCOyiBOeMd+pPBsARJJTzj4OAMLjYIARJKdSTwP/+UAYvRey6JGmceROeLqIv7x4Fn+2Cc5GsM5ovobxJr/JcykwIHarCWEB5wdsoZGi6+9W83+5g7mDQSUxaMO2/yUf/9qyD2sDxS6DMXVc581QujgaIi1aTiUt5dUihO736gPrUj9tkiTjtVEZNQuzYVPWn8tSyAKzKuosqDnGGMSXMSOkKqBy0gsBOfCRh3OBWV1F3WmrGWWOsGWBHLiREQF1LJBPAiYh5BiXYKv4KMTbCAcIDvkKrNy51SBulk2alhAZtzGnIXgRAvr2KJTMIt0YBESpCIYjQALE++nUkBeRyRmWh75tOQH+FCzAPSvZipAJwnfh93DznbiPem1dLRm/NoJbMknu0Gk7vL+TBfxGm6vjwY+qez//Rxp5z+wc9c8caLr5gsbhhedkbUHnDmephihOuNT+MrwPXiCw0bJsybNCtiu+kMODDJ+ZJLaIDeqCtIH0qgnxgtIANYC2QwoIWSYDjh6fgE+e6GmWKU93qlXge9cjD8uIHVT8gP9BpT//5556Z7nMXl8OgJ9F2JACI6KJIiEpDQgH7nJjTAelO+nhQTJbAy1vv2OPIf673SXb/pVMtOocA4VGve1N03HnPSka966R+wCMxQGn3Hs+bkKLK7sI9clz2+0p1UVO05Z02ULjjjNH/rPVlIAuOGhdQwvvwlBH12fajPJULLbN1p+e1ly7d2CcbMGgnBSP8UulavaQbo1ApMGYWBIwGCKhWmFpZPUJZY+P5PBrJfIrmbFNAjFBAYUrIvxJHFuPDoQWWs4P4L2/kU8ix4KF7/g/wXP84W1wVFrrMG7C9zOCUesiMW+kem8rl6FGy64Jzjzjvrgda+sNvN+6HHYvy4DQ3Yt/P+vBPWSnmWss5FnbgIk4+gCTZlebCtm0Lo1E+UI6YfYYtYTu6SI8IA4sFKFEswdc10TFqRhcgx/9E8JkvWk6iY3ElZWWZ4WqysYF5+a0Iv/LVlUQC52GxOzQOBNsymnHvm8dV+MoD6WyYMYW1h+XmEDooXeZAzn67C+ImnaWJGnv8p/ZJ5joI9c2yBLu8g9DxUaFheiTCHbRYPvWyIIymWYWmBtLag3Sv56XyltiOT27ujc4az7pUbzzvl9JPfd9kV7/raZbGzdt2R57baY0Evj0auOdvQBNUpvJ9MdD6dtLQpdgW5y8uof5Vm3hw9hfTnTxC9CEAW31DIgJqRWLC13CHqYsdNl/icDnGTCCmXC1v18ljpxKcuX51y9l79rV1f/5bHty4aiMs5l4UL4ADZUgyBMI7WX/sdQ+SE0m+KGkcLRAMQz5DhQEeQcP1UFCm3iO2mKaa403aLbquxZ3SidNHbXzdWQamFFqMjDGPjB+NoJG+BzySLcgr9xHxV6TmvPfep5YGq78+hARL7L/jF4sHUQAtku10+xOdCJEIWi9c77eWrN6crhI2C69Bk6EuCAnqDi2R5SaKoUV1C9GLhE9jhff/9I0HbfRSX1CORQjNPBxUdfE3q7fkFr6Q4h8tHl1104eTO7VoWyg6j//23LqySC94G8FDdzUQEdFHEjq1Y8pMf/rhU7w4QfSQdEdXYb3eCbgc7QdbNS9eNghmUaeAHShZvKLwFpw0nKEEe4IcjTZCZgAemhFtSVCdlKCDeUMhdxUAZoA/zDacAGk7qhOHnABSF/6xOwR//0aEaVyM8Y9RB32MEwH4KhKXEURkllKYa4Xp+SyBQ60BrJEjq3UzKpAw/uWVpcWgkuGvXJJ9MoTetcNOTIicmBPBlyAdoYKBHepcYcz7XacZFr5UtN/eFp8Xr/uncVx6xdt2/fe1Lb//BdaOljeuWPCmYGQigGQXH7/ZKBBDiCT6Uiz6XjlD7dCS9qxx1pP6ppLXNOoYMtQokTIdZ3/B2fa3yVdJGAyslNCMqZd0Y5U/arXemInffac/YcMxZ0J89X3/r2+Pd+8LRoezq5b1OO09wGx7TZ3KqWWINre+Ewhh63bOEGq2hkd1dBWiuBo7yNoIYmTsZAu4xjJHvOoG/5753v/l1TzttFfxEj0hHUoWrIuhJAAigIOTHQj6QRqX9kr8UawuzA+hCCrVrfnhdnB8g0BvEXls1gC/VrTKyCAAPddCHTrvpjE2kFg0O33jVmb16eYj4SZiG6SttPCbLDuv/sAGwV1jsBvBWIsvs8YtERr7kMqZZoMXVWoWiu+wejOSusSQ2ky0vFkm3U9Rb01I2IxPfZOoiE+k0GU75gzLYDDBluDJ1BRNZJ9/y95IolTNb7i9lctO/85Q0exxl2ZjjcDwOPVqHwZcqQDRrV7rdsQ1rzv+rP9vaYcuRDHvkcg4UFIR+Zsf22d3biplgZIC4mFgPEx5f7B6aH/MBlb3SQEhAiFII+CEHIcB+Ek4N8ANkVFgJlomxCwgQSzgwExGM/WcpWYwZKVXopQphqsAmVfIixdVRTG8KOVhGBHDwvOZHC8dIJxhJV00/IR/jWaXwYUqSA1NmLL/CRei0ZWUmZiQKH2k97JSfD3KAbMt2TWQC+wnPxqJirSZLIjGg4cBsi15sv+ZHnproz2DDc/GDLb+xz3mO96S3n/UKrzr01quvvPCW76Zrx41NPCbdLFbY2cV1Go1WxH7ouHkbxeQqCLO5JZIn9h9Oz9Q+IoXzEgCzH8WJ8fty4QZ9mv4HphwvINqA87l8gZjBXC3EBc6gLB/LdbMlAjq0g244PbI+f9IznVHHuetTn+td+xOHYCBHLkF+93qFDrtrspkCxmjMs6IkvECjqVO8vxCInWAVQxdkynGck46mcbL6CLEwTtC2yM/nMfH02vfe9qfPO++555yiOKggHu3xoj3VwFAMFhZqcRUL/MBNTaYMVtuB2VNhOXT+4JQTNkwsjufmfKKp0T1AFr6WrBZkgPnuhzj0OCh9VyMsLrpnYtk+3GoU0AMQEOHgQM8nSJdTgBA3hFeZugtq5o+G7YAuyB5IClhJFdYc+pUj0Q7pCn7v+w4lLgX9okkD9l9pJkQi400Ffmp8OPulj0c33zKXdxeMN9evdMBvyDhEl/2GJxbI7QKYh0EHoTnOxqc+aeIJJ+4M6qlmm0AmBIcrZt0U8Du9t7Vvd9ye8XDpmbcBaKEAiBMMzuSX2qePR0ENKkOwAl3FZ4D3jVTIZqAFBLITsHQ1iTJNTCHoARohWQ64xp42wQP7Z/CogCR4DpvToh0CeUtrA4IXR0yThSCF8edXF4ubnFcT2S2KA+lgf5EBS4g2GFUgR9ohu6V0gvqhE5zzlKNfwIgBtCFZLsBiKyCfK7NZp9REMgwkWhfYMKLmRiu7i/5P6Yw/eOwz5mq9113x4XfeenVl9Kw1A5u6jdIcPDR7zLQfLKdmhkq5fTMzNFKTynC9gAx6kLBYShygAebuqY/m20HxUp8Y+aOzwf7kyyAh1K9FDKIEWsSgGEGMA4uECfDKLjXtZqs8ljv1nCMrS5z77r3lx5/+rwzBHD3PGR3pBYT9dvHABUOxa4Hij8l2LEJkeB9OHx8rKIF6sK/6F9VHCBF3KJRCWvTZftIphRKxknqtOWdu6pTHHv8Pr/ljXOI9OFGkSCE0XE1gB6hUdsPEgLhAZsyhm5lzuoQP54Myjuuzz322xwrrNz/zPJlAQqJC+MAeRADKJx5FiYc6iPKZ8XY3Q6e8femS3SLHPYaSAzAR4OsANVtHG6Y3R2PBTiJUJTiaWSIGaZ422N0+nUjSdqVAcmo6gf2tPp7Rg1rH8GsOBQKqZuIKUOKWnLnpoY/8a71z2MaCOxTN/DWds4BuYXwFutj2QX9S0Wve89ZuLVdDMw7+Zn2qmxuslNFW7N62Zc+OLamgiTibTHVZGEHxwLWwpk1+EuBa8UCgBk1rfsopCLQtFsikTGXCzGtrAZhDmYvlqwkynufwET2xEEhQcFitbAZkSAVP6TC2FBy4n2HcnzhElyeYHWUG1TPraIudKikNh12BdEtrXiXlSdBGMpOfyTWhHJq7kCF0PvogKASVkBDNMK0RT6HBLT2rcsKrT/q9Xin7qm+9/7N7r180duxg4ZihxlCMeaWY2xvsTWcaQ6jiJx8sl8UxabbZkUxdPo+EiBynYXyRh/5MtkxDAwkNkOZFyECkom9FgH5IE0y+bCVsUJnH5EJYml7KDzrjy4c2PaEy6+z87lcvb95136Ly0NDSVU6nx7bsMzOzTgH1NBsX6HUKQsYhGsBViJ5PVa9B6TXKnAwkuMJ6RfpAyiGq9H8Gc+2hxYuD6UkiSX/sAxcO4CLYbRqR1ibE4lcRwNCXowwRYvt146gGPOIPQn2wWjrgw3yivXpNx2dYzzt29ZKlS7OFQo/PpOfA+7DnBOT6NV5AjHo+na8H+F3PDg3WWUeCmwbmAzE+1gvzmN0Ah1Ht4+vk7jz2n4cpQ+V6bH/C6kie7Sf1Z748Be1F/XoY9YPIwMFpPiUg6GlQa+OyFDqj49mvf7Zw443bDqrzsEoC4JoVh98BLMJbM+74huDlWeulHvjit9/30teftmg5mxU2fUIBp6rZfCuYqxeD9kB2xZEb4TjRLqCOjOAUfXgdOXyiEO8REgfsAz4kTA7yvyIJgExFSEAmXMFK0uWDm0ApBOHnrcAvD4ndTHqYSHHCZSrLw7bsXQGWIRbaXgXjIQhKK67ksGZzQlFOhek0OcDv+yEbLYZA2R5WGE9uyzyWygSoMzSUxrXyhmRWMcHmVJ+NsonSSlGy5PhzjtPEBIKsItIW++monQ4RVCoOvn/+VKbbzRbT3Tza/1y+8dbei1aesv7b0T1/cfN7N7fam8pPrbjrt2fjUg8xx9qI8K52mrpErSKaJI2ArEh7At0RcRG6JeqQHgChygAwL9f3c/ijlcJ6kkMJ4v0YytZbRK+okK9B898s5nDv6s3Ggzvzd7/hMxNrV7a+9b0H//M557dKeWf5RBY1BcH8+Nwcdm5CGhDlTkhcb4eQC/XrFSTtAD9Rr0ZNdIIXI+9lim5HGyikCm6rx05pbKnZdTKLnNm9I+2pz7ztH846aV3sd3E3ANljfk8qepRcb572H/fqv2wec2JmBsGsm+q1Y4+V8oWOUdlDdEIuzGKt6aU6jzvJyW1725te/DcbZhjOlvaalpKJ7aTZtsOPK1GvyLL7To+tlVl3kmVHtwAtnyRo4j1kfGS/iK2Vi760hqwsZHF3uRcVOtIUodaXBlYl0cOydYOT9XssFMDHH7OBMi1fa9ttDQFr9tlqiQloNgYtEch0WRrEIa4DyCAIVo+tuEEmN+/NM2EK5V1OsFgFMk4ABpFa1cora0EeC7v1v6bLpVjhACLg0RmkdGrFhnVPe/6zd+3bBY8/OFBh3VYj7qaLeacdZvc177vlNn+mUWYHXBBWz3YQ83I4ibISrIe/GrEVyDblAPtYFT1CRSfcvfh3dC1w+qwkEP9oQoMJEFo9IJ2yhANcFxFHEgZbS7ks0o3tRIbemBUD5ktqC5vQyrCwQLXyiKmkRUqQZ+CXOFWlcaUQB+gTREk8K1hcCR2Gw3gnrJFRBwsLgeoCLKyqpfPRadY610u5ZSTdOM2y2HLkVKNMMV+edmY6TmtJNDAatrLO5lOcJW/t/n1l4+D7t1z29z/4TLNZW1f6nebw8N58Z7RNj0C7oFrQLpE7US1DojDBCSqdvwUqtjK08ADjL72x2HyT/CkhtG+aIqNlws4USIgouJubTEXoMQduSyEBHbKDO/duOe95q9asKHfawdc+9fEWlZeK6XJZ3lJUCDIn5rNkeNpFhtV40JUCCbWxhKU1oI5TcYN2vRW0CATZwrcnDBgELCGZXstpz7z5b1/32E3rVBozio7Ddh7Z1x3ismzQPe9ZZzs/uyMaK3l+Ki4Xcz6b8TDoD3GIVSK8Tuw0CctY3FPy4jnF79h/AALzaRLJOZ9hf1EHCj6M5U+4nF+4/Ys/NND9Q2Dzi8cv5ex/r0oxZxNIowYYM/SGyfHBd27HENBsDji5ObFdyMgGm79Y88L79Qsfv/Ca/9AtljpB4CK9LNNZeqDVy8580XMG10x02Pt2bmZouNZkMWcuM1iojkcVt9lp7tjZ2r7b7QaDhSJLBIgt35VzQTr2UjFrhVl4BBYFj6MLom4zAMgZU2Zc4X25h2pdWLKMQAX6ew8IoUufolvagZJ8DAny1uRk2SMmATZcclhJ4GEz4JomBCk+TFYhH2CWSUkOYDJ4TQKOKqqEGcvgXhJLRB+m+VKaJvZVJ/SI6dI3BrBGzTRSfZswaDLt4AVFQCw2VRKZg8C5rMfs7itlS6yIv9/ZnYnS56XOflHlnJUDtXff+YUP77zyrlw4Vn3iQP4xzTDXTLUQgoisiSstrZKORWIOgTbxuIEq9JuqSD39tMScBAubHr5v5pDkJFZf89tUJqIKIgCGMtAIaecWc76VVYCYxQpjR/DNQj5T3bWvveLY9FPPzS5LOdd+9trpKy9zirns0FCmUoFa9hS5GtcUEA/LjCWoWccYg6+W919BkxI40szvCwfEcm6mStlcOROg32c3rKESbj+lYiHedc/znnbG7555IisJsStIyrNnHhoSD8877HTzyjPPGl084ExPdWrEWmEA0YomTMghPhkzPuSYYXBmGqli6b6x4c40xq5++f3Ymifp0ORg5I0jEGzLYmM4/QBmRw0oxeH+o4/KrEBCPw48QqbV9cvoLnmB3aUm3eUl/GT/I7tKQhWLl8187N313TudYokdsAlTxccyX9i7eMGHiPjlHtnfnQs9YRKc4RHp7dEVEwHGcTYccf4/vGpfrlOpeulOc3x4AH6SLy1kvUWFUma2Nb1la2P3rlS3jeKDzdVzeZxQ2CaRiPjso4hgGmfYDQkOnI3PQfoSCISgIQNaH6ClveB0LSNg/ZcZiimAGMpPFBEk8C0hLcOy2QBkbGB3RE7tamdXLXQnga0Y8kBkhj514S0Ki4MbhsU8SzZVgX8iAS8ccUovLuUQBmSJAvvJwPw6ABl4UVuZmRe5FVGAvWhcJBNDhMxLBAloUd5LI4PD+/SOcJb9vvPs84q/ty0z97rWGz45e3Pd8ZYuXt8bHZ1xerW53FDo7svPxQ7sXxKPDYkYSmBkgGj9ykTLa7RBZXzupuKuXgeaB+f2tP+vIWWb9MqBAuhqib5VgPYl1mCQfmIZlo3GYQ+nVGfOaUb3nv9Hi9dMOPfdec/lH/mcE805I2PpwYEIpz00C0EEC0fwIoh2EsJIkexsHxvJJ+SbTMBUhzBwTaL4yfoMbmF1SNymc8O4lR4sR/t2jy1ZVL/njuc84aS3ve4lRAcWEjDayoOH7Sx6aCzgOq2NNfdlFzzL2b4FISmDCgb4mSelv/oc8b1lJ2elyVSDqHz3LVnGX8YWonwAy5sFOHlWmfzvU+15VG7mXAMTKUrtkOf1vPRAFkNx8GgkaZl05pvUz7HnldboH/SUgJ8siavC/sQCyuE0kncndy5571tmYMK67aKTrgdwFeIxF/z6gF9jtZ/vsYX5F3ueGg6vbvpeMBpbY+VY/Xv2Y0+/8/dv+tilq/IDpmTJYrtrBEGmG5SIIBT3mrt2d1qt6sSiwvAgqp4mUUl6aBFCXFTgyQn0ILyPV6HiuKFV4ACVwCdIIkyBLuTGaQhFllnx7abxMMQmuBK3C6qWipE8gTkYU4ynWF1MEFAXGoxSHm011aDrsK068JcQigLW0UWYFlz8sr4R8IVxpbQ4J/22cmY2sJEzHolW6K5dLJcfbtwDHaORZ72XYv8Q4pPmh3g8O9NnOcc8O/tULyxd2frBv2a/+q3wlqOGnjLQHUk1B2fKO1B4VZpV1FKTA43KXEGKLbFjECCEHdRBopASbXgJE0+aKlYYoJBRF6pzNN+00kAaI9pLj6nlapx9iu7zNWqtfaGKSIJTP0FkyWYEnI6zb2b3Gb/vnvW0LAabS977ufrdt1bGa63Rkdhl9SaqKYlAaIX17TYQdKn4SJlq6DqhDXW/+o4xkXFZM36+GZlyGWt9a7bpuASbCHqF7J7bb9p43DFvedWfEGdC2B9KZk32O918AWbw0XVIokrHL9l47EfXfWfn1l3+0OhAkOqiAurrxH65N3LES4VeAtfNZs93dy5dsbOXGxW7opIMBJq/5BnqVXr/T+aLphYjZyog63S6niwAhUmjx21qJAm76la/hvl6NOD9kvMvEigCujaK3LIJlMxZHgKBCBj6eMQZGK5d+pkdv/e88imPA7AJYsSD8sFI2rxwr4ftQrD+ICeDKPwM4hCO9dPxqvXrH7j19sbePWzsXq0UA/hnHEq0fbpYOoKcdDvtbrsNGKLpR+p30ZqwhaIgRCBkTC7sPKBhuIQ3AVqCF7SUwirAhi1ksnwDReF7Xg+8AMPKAcHLLIoELFDT4wnWpxIW+IJRKU0ZLVhVzbxC4oUsB5TADsqzaonQkCrm5J8UU/sz9RpAm+pJceW9ulItCZ2sBFbcX0Jm9eDMoyCN5gbHyiVO+unOk8/JPrEZNz4ef/Ii50ubM6nx6u8sihen4jFkkHw8U4GvDt02zXY7OfZpEQFUzYa29VJOiFfSQth707zQNnCGuhA9Dh0iIsksVvv7H6Jb9iTfYfmaVtYx/SrJFw4Bt6NI2DM3tnL65W844qjV0eWf+84l7/+o43W80WVxbcSnFjCLUBEEgMLw/GARq5q3CV3YS7nC7Inkihqrtck/NakXdTD2i6p6qLjr0263dezixZ9+xzvXVAuR33FZHYFYyLaVge/mPa2GZUQfXYfot5dLD44uvvzaa1OFknhiwS09fIgj18v67Mjd82M6dvmyILXvjJuuP7qGfwU7kcHoaJUWcWO1W5OiKmZ97fbO/kNJPitubDmGDL+MP/IyArVJhjL86hEjCRAJfnJLUeFEMJSA8yCTmcMUBhwQuhl2u8uEoDYV04oPAQUnn6VP0FfYXDXw5R5xRlrRtvua5/1hKejCB5LfTad+bVjsQ3TDIy7rsCUAhlWScQTxsCZTI2qYBaEnPvbxJ//o+9/1cijq48BvZwvZYrEUss9RDw/RPHqXoNX2WTTQ6SpIHKGN8xAH6AcIQwwJmEsen6C+xHdStQspywhsRiS9jZ9gHSFgIXTBFDnC3UpwF16DxzVlqAQ+WeVA+pYNTAJ9gk97hQpLv6pnyAELUp9VJ3KQvElol3fovhrY/0kVkpUtr4+a7ZaECbAjURQxqyLeFGNviTO4yhk7s7x+VWb1z/yt/xh//CPp6+a8xatSm5Z1J5gnc5mwG3fyXUL7Z+NCpke4C7bhsFmizxOS1ZuMUPJSfnE1xGrZxkyB92UKBsNqfhnR0KMiUXjIqmmWaUllo/RSH6gu5jQdifUjjDutTi7bueDFA08+x7vn9jvefeG7Jrfd7ixdEg+tE3XgDVIuZ1K+qf5l/UV1hhSiN6mPRA2sV/QCukiNNg6QEiLVVJLOlnuNdmmgSph8x29X/e4X//Xfjq4Us4hIOXn6EwsN3TDaYg0Y3kGsnXg0HfQAa+iJlnbi8OANk1Pbtj0YeOki1iOZ+g9xIBmzdK/UbXURYYcW9Qb8E2+6+pRMs4cgyuDiqCMlKfpQVgIL3YfSjZIvFSpYm7twaEL6UnBSgD06xM+Rw7JhowcMLwyFCgjRSwyFZjCcST2G9M1lWy1hvIXxufIIxXQXoAFmkOthBuYlCl6R/ARAe0XP2/zz+sTy3rqjvKwn1THcmmBnIR9882F6oAKWdkazOwpQbRBwTXQfn1DHKzjjAxf8zcuns2G711k8OpTvRUEqcgteoQCmTxUzmUGvACS2Hty749776nv2EAEYB5AcjB+bzmghWR6cLokB/C2zMAZeiwwKMuYEKmQhkFUMs3ASZ1Qu9ZIMKGkPymWIBHhdmeLuEVJksWVnFtx0wHUmFig6z3wlVMWN5LRKZHm2Z0QS7DCECyDbhwtA4YQBaVsBK7U3aZ1ar0r8zB4RlREteixKG3PKxxdWPnFow4q547/cvuy1zuuvzN48WHv8WOGMrlOqh402WyfFe1wvyBQWdcJKtzXthHUzYfOu5GQCQiBlfNVVO7Uzj4TuDauSbWkwunZLURsgvqjPRBKU1nN8hHhxu0IEOfDESBC3CtiBiEYk9yPXDj/pLHxZG1/7zLV33/pTZ8D3Bsf83FhM3bwH/Y8fRm2fwuB7q0j100C9hQbaYaKR5VC5GmCiAHoM6Lwfu5Ua+Mp/8MGhSvGTH3z/msEhN/Ahl0IG4JgsTorsrZxz/M5D6T2SBh+e19hpZXpsqcXXve7sc7oE22Z3LTxlH+JggIFHPDERsZ1ZFpdV9+XdWBvmCHTFpMwfB6ct7xA4yoCBZ0TJ+8eBFNAjTmL+xv6/wOOvVPULObrLekGxRLKCASViRJLTLbSA6HIl8/F37WN1KWua03iaPuTn7n/pIz1x+EoA4ESxjhoAwv4Iv9qB/g4m2Xcy1SXLvMGRO269vdjqrkjnHyyFLnt8ITFi0hW37bAWsNaJiCIQztSjqVk39GvFfL6aa7vdfamGBQUF8WKpBXGAxeBUcTWG8RBbLSiXJhNfZDgM7T3AX6yLkkGRnGW4Ql9ElAPSsP2GmeRAr5ASEdoF4pyhOYcnxvIsIRhvVqsQCdgWJLNEObEqEy+9x751Wd/TJGLJjqYP3j6s5k2+f6bagePBPEeQOpyYjJmmoeynW2hksu3QnXBGn+Yce05h01hqeGe99fT8X13r3B9mF48V1lTSFSJ4xeluXMT7MlIQOuZx1Iwz9B8MNVvP86XJKgZQp6gOJFYTxlJ0Apw+c9EogcgAtNiUM2qk/Pn1g+7iJ6cRJ1EOzLaa2VKASWKPwu5sjRicHT+bwi7v7JveNTzeesHLZp9wysB/febqD33oHS28dMaOSA2MRam2iD5fGWiHAYZHVFSLh4nYpwEwYqKXq41gJNhLRop3BqxmxdkrB/1gn7deN3DKfHPX2btnRTp9+YXvILEZFgAAQABJREFUOHV4vIiOQ2GHoO16HmwBfden0ibBy6PrYGEF49PuhsVedkXZrTfrP7rn3l5hxOk2C5VS2GwwHbKskA4D7XiBF5amAzvCFDL5Sq+xt7Lm6K3B3mfdf8tYLdvpADyIrvmAYWI1Qaoolp+95qS60X6Q6HxgNcyPQtCvaQY4ayYAJih5mIJs5K1YIdBlbSAkiSFZn4kjP0I+YMDUslkkONDQCU6VL55QXJCJ6oJhWCqpZuHKVLtEA76TMq7vd91Sqbz5rppb6p58+gjuaACoAcJBQy/Qd7SHDF+9EI7D1gj8UJ0v/J5wHY6z/vGnOtt33fTFr1TyOQ/nyybwCfpg6BEN/F4bJFAoEzECJVFjrhV0Z+ea3qIhb7i2tDg022KxZ4DyBETmIhbg9APuAdw8QBP0bmyukB5wAkMJuJqyBzWJ0KEwnmKeGDBCmIAjsRvKAbMY+w+2knyrqUF5KhDyNnYEFKn5AshC1bBciG2Nw5wPDRLvImMuDUBFIZS7uF5h8WXHCRpO5BI6DVV/0GUHjMUhizKHF6c3nOYde0Rc2Ny97d97V33W+cmi9CjrlHEQ4n1UZXwQCUOXUpeTgvHS9GD1GrhenyAjMDRFAodQozh9+ftxw5CxNP18kjAzXY/YQg1S6PClzG3K6at4WD2lInycfjMVKQ7dyeUrOHEp+E6E6t8ZqvbOOL16+ilDP71p6tLLLt334M7C6uXu4HCdvceom2f6NfZBAEZObySfuqmZPrUkV/U83UT7oWU+OER+AjQok/Oi5pwz2xjK5i69+OIVeU8InsoxPhjHyq9H+wEA9uIK++HMtDKDxWeffdYXb75zR7eeKlfaM3OZcg0n3LDVVX+y6WKxELBhQNLhDAbThsUc2cJknFpNhyKlyhosBpyx11WA8t877KmDBuWX2HzV+RCHJp1BS7+MvVRvP+TRC8peqevP5RdP9D7zkc3PYDH0OiCFmDBoAq0GkyG7XZ+JniMm4gI5Dl8J4KEGALyFvgdeH7qfy4wunWjW63fv2DJQYo+LoFj22j2/g6d/2WPRL2I+mEv4sBezQDxodcJWkGaRcDcq1orFfC7v5XHYx+ERT3UGPp/PNUEk4g2kaAAbAVDaaw8JRAgNFY9hN2rkJxgQvKL6hTsTfK4bHNIFmd1aen/dlQDDU7DdYDA9pXmTZCb5QTaIIAXUz85mOHlKz6l1A/mYpcm5tJvHmwWFC8FbcPZclBo8orbuaSPHnTY4MRVteXfjq2+JL7/Bubua7XnZRUTtwsc5w0bJKHmNx9dc19Q0GKc5aiIN0deJYU+wtrKSOUVRUC3/7JaeozH6Q47NOd1VIqmK6aNKlGdnUszKS8mqCEDNsJv3iuwq3J6un3xS7/kvHB0adj70oX//8te/7JSytRXLI6/SRblnbkhqnY6DkIhQPzm8nezkQ5Sk4dVasTM55RDhJ5d3ul3RHz/IuYVo8sHBdOYrH/zgmkoVp8/m9FS+kO8G3eyjTNdv3XSIC8s9cgql66Q9/HLjCi4FhdJ3rr3aGZiATKZdL0K9w35dHjsKRyxZh49GSk6j8ofSs8Bm8aLC3JZN9/5sfQVCgZmeSSQbgG29rRD8PAprQfUIafD4yAGKA0J4Rxl1sRtQmCoZUcKRuhAT5D1j8xE0ZAHWTNApJwddRfaZEn1rMAyJGBDmlerXI0wnsV4yGgtQ5o8krSu6K1bNNGYyA4OpB+5FEG488ekDAWuO2UsYRgnJkeZmCIZksx0QWyDHo04CACtmXWF/TtQ73ujQqc8/bxt+Hjf8ePHgcNjsVIeKQbPd7MyNLx7bt2UXAawKRZf4oZVuHhLQmWm36m02Cc3P1Aq1SmF4KFfKt1yn2wlagDVLi9lOQloNMf2cJMQA6xCLC1zwW5hQ3DM5cMlifMkDliURmFqEKSTUB940EBZkCpcKqoQtIRagZPlsAr48TB2qM8cyM1YGEweVILt8JqGG3Iwf+giq7S4bJ7Ma2F3k1NaNrj1+7TGLqiO7J+/70ravf6n5vWsyW9s5b1U0cWQwuC3nmgjCrgBoYtApIVKDPFH1wFvhvYMQAMxA3qBLtNeulKBdSkN5aArtJAdsS2PJ5CvQZ9lXG4rnUyQHaYkeZbKSG6x3uNAHVhXMNqXMbEIk57ijdWD4YDejZRO7nvbkFScc5Xzqy5dd+tXPE+Nz5Mi1QbYQoE5DFqIzRCKtkyU5URnNUb+pyUrwBvL7cgASwOzOBwujY+3ZhrbuKZZcbefj1O+9d6wYffUTF6+vDaAJ4qMqtSrPZthZ7P8/rAcIr4I7ZK8dxJVMszNTypde8Njjv3TlyE0P7slOjIfwHowZptJ2wAJ4AmXHThEI0dgwyFEQNNpBafjOXDWK9mAlw61MgwJ00dnAtk0NAYseACSSA3jTUGqWCJ4or5/zh80eDTmHoChJ2sT6f+2dB7wlV33fZ+7c3l7ZV7b3Ve+ykCwJRJOwZLANBpkS4w/gEn+cOCQh/iS2nMRgkthgbHBMCbYFDobIAlsyBmOUYAhY2BQBQqht0fby3r7+bpu5Jd/fmfvevlUBSVlpV8x/9u59c8+cOTPnf/7n38//qAgki+cQJ3ElV6ffoHRmNahrrn198wJOGdXtlEe1bJBb7ITlNWPrP/XRPTe9Orrqhdh5WIIjhFa8MdNEeqJ04OeKUTB5DEArv4JmK0znsqlsQXL62vEXvfG1350+Pn3w8Eg+jyhTjvxCrtRu1gcGywj0Im9tn9pEhWZbYTNELI6iXYfapXx9eDo9NhgMVtkAPZNlOS8yNlgjS7xDJBAYUgZasLGuUEqED0FeeqMwUxIznABjjxAQwuTct45pCJmor0Ji62kRQ7WomX4is0jIgUfI6qmbe365S3RaSJqETCqDERZ3A0ysXq8vsJFK1OLNNg+vvvzCSzdt3orpvhmGv/+Nd39l131fb+8l9m5dfsNAukJE3r6gFnTwFDjGxZIuUX29KTGobRiLDgg9VwEJmMM3B1qJOgi9dlTeqSq4QqjTn71iBo7ii0loVmliib1J5qKzCtHSPNRB72T5hwxQQebakJyRBfIcVevTWIIP/8RN+Re9OP/d7xz++G0fOXr8YHHd2ly+2ojYuUaGK0QxBRXyPIX8aEby3z2TRzoGoNkpHuB0Fey7fipfakzNSgNAbWu1yB8+PzkxOjZ21/vftZHh5z5mM8pFIa/Nh3Gs2OEg4Ng22dUzZMko5pT+mz0jf+11r379H3zSq7FkMOeRc73Z7kWRLOo5SDwTIYae8xvN1aPB0V2VsVZEahY3cRzVBreEFcIcYb5oscj1yWCX9LB8UJOfMf7onLu45si3JstyvUediNxTDfrdx1J3/aSWT7qDVLTtZlApo3xgsAo7rfXv/s8HP/GFLejqoJTTxmOlH6RTjMBzhQEkzwQECQIlicURjWb4Edf90uDg1vUbDh+ZqM/O4MEpFbOlfKFRq5XLxTZ5oSFE8ktixmcPGW2Gnc4GRSzGUS+sN2qz8835Wq8V5YNsKZ3HqYgY7GJ8RAPBMVFvZTRWbjpQWuSfb9CPjyxCIoLCNSmsorW6BHUHq/s1wSZ3SXqt6BoSEo1pkaITkfmWaShEA8WyxQW22WjWWotkvECTrpbWXnbJZTfc8KIrX3BpZXP+weaDt95969u/8Nt3LN4z21lY663alF4XdCtzrV4N0TiXYacESKRmnl6Wl+EjNkUBAIOcOqmMEg5pOq6E94/lJ8r1hjF91V3UcTXdXFM1GuWcQoJ1nAjHgyRiu2on6vOTQsCOAx93d414ntrC1Rd3fvEXN2bKs7/97t//my9/pjgwPLpuI+nAJJrj4WZBFmOpdWhADqoAQ3CPjb/hUECR//x033o6zAdjW7aQyeVY/TGYy4XHjm4erP7NR/7k3KEqgS2txQUEBWXIJtseUi05AZZ5lfqV3ENL4QAwqfowwQBo7DtRd8vY+M6Jxfsfvl9ysPJFs4cQO8iTR5SkvCiSOKiQBNi8Lexmyuk11fKhB185tzOVzQBakqd3/EIYEetWiHDV4vVF/lGMJjNQu8MrHhSEIJSThNsuVFQUl0b1U8ESbpxl5FGAhCxFmlF4g5cnj+xCuirsgPkjXghThJF8U1/TjDZXHA4r1VNFL7AeCNsUMgmLYCrVYPcDwfC6ucsvLQOHCCeGFGVuBq2cU6B/64rGzsjT5GkACl3R/j6MVbulpG/Q03YnzFxw/nVvKX3+v/9Rb3YaU/7x2ZmRjWPHj82kyikvggZ5RA4plxVyMiGYiO1Rlqz+AVsFLYbN+fnWZK17cK6J03jbKvGJDCsf0SVSEaSj0yYlAcgIDRUVVeQLiOZoLGQKtRghBAoOqRS15Lc0g75Cy1tSE3lf5JAfwjBIGwRTNiaFtnLROTLZfiAIiMNbqC22OtHourFLLrxk+1k7tm3aUW9G+yb23fmPn/vrL/7NzuZusTLPGw7XDORKqV5urskC91o+NYD9n+CFXrAgXkTjvKgSHqmyopyg7HppmXTc6/Iqkrx0nYuuTc7oH+xJdBgxTqWcwiRk54H1yarjKqsR3U4/RILFJdVR6rvbXGt0kZ6y/8p8nZTLxy84u/2qnzi7kvE+dtun/+oLHyONxcjaNflcqUOUU5Dp1sNst0ESblJc8A40B8vCZSvAOrjidORd1C0HYE1/wZMEPwonwUxdzORm7/vuFRed/+F3vv2cSg5fMG+RL5PzpotiwK25bE7Jj7XA2Q4R83aa5diklEL6J6NnK5OtALSff9l19+389kONOa9UwsmWIZtK1OzgYIdDa6BFk/OBH9XDKDs+NTTe2u9liwgW4IzkIwbJ2YlOgrCGyh0MCX9PuhZjEYgpdKMFyU0n6jxGoneilmsADOijrvCQY7ldd7vQPj5ijg+vI3l7o05I2UKlsoowscpg9dY/mH/FTd7YOFuwZtpRi10ynT6rdYFuI5KlJs7gv4ljAEiseGoIlkGUy7tdSUEaDAgHvN6GrZte9obXfvHWW6cWZkbWjh2ZnM4OltphDcIFaRJZITewM+SzBqg0UEbDTTWQOuWMikJ8x632VOP+2X25YqEyOFQaHspXq6l8PpvNEicY1UniJlLkSKhToCVvgBq0jA1IxbKjsGiVv8QVQCElmUg2BkNFiPnJRyPGNJCJKMLST3pqAt7xGbBXey43vnbs+eddc/b555YGqrML85NTx9/3uXf+n6/e/Z0Du5rsq+flcumhaq7CPjTFcIDpS2oggphgCeREKnqdkp+dlQ0Lb7KItWQZUUpNdk55AU0L2U94HwHFlaj7oux6cV6Sqa7X1EyXBsQJCwJoRuK2mwjUFoPhAZLnIPMUcFHCIU3QazrMjZgMmImpZqtWq+dK1e7V1xQJ2vrmPx396EfuqLUPjO24Jlss1etNcvXhKEYZYwkHEaPplBhAPGnFTZz3mp+yDNEe70yJlC53BouT/6CJj6K+c+eV1139p+/4re2lQrbV8IICt9cb9WyxiOmfd2qS8Ji/dsQQCLUBKPxUw04+kWyev8jhl68tXXnBWQ99+1suUVp6bmEeRxTuMN0kHBYOoEahZxMl2ipWQzKbxHih66LvII+j41Tsk2bde9LxqPITg6K7n9whTFjST51vLr7NlT5eC8zhFjyr0Ez5A/O1Rj5bCEoHDj284VO3/+2bf/7GXIGXB2mRxTogLznBnivHYznqc+XNT/l7agUIg3fg3nu/dPvt6SOHtgbZShQeACuRiAkzYJlwi2SZpMpXmA+5iGEIhDpgdieKHBGIjQLEV0JWN7GHdJetksg1na2WC4OVDKvKqhWMCUhEEEbkdHRGnkcf2qxWhSCqN9IEZFLhu9crh5zLm4uAT3m8MoWTQrsakYug2WiEdSIqh0eG1m/aMD4+vuVHzi6VSiyznJtfvP/BB/7hq//03e/dt3f/XlRzUr9l2cWc7PZ+gXVmGEyYY3q2pgBziZ8gLIwFwg3tzTP9ZBdTuUxZvFgsoIklQOJVgl7DjZqHvjb6A/uZtOQ7lRCHXkQLePY4d12D9qNJqD6/idHWjUjmtIPP2nEaqHGtkx8keqnR8LQHQQbrcdkv5hr+vJ9uzO55/au2/eKbNx6Z2POO9/7Bnd/5bGncXzd4CU8nvIRn0yEFpDi6H/Ju2LJgR+wkJg+GO/e9uV4I8AkAQybVIjQW4WGdaLUzuWx7brI3te+Xf+YV73jbvxoulvAP5XP5E0RFcLLjyUOgfSxMb33Hf2zXh8JCGXv5QM6fi2a8oBQQId1oEpHWbrTIwps7e2Mr3fnj2173lqHmobY3GWwaaJaJGw29wcgLaixOjzMgdnMtFpwR6U+0j8dWb6wtKEWdPKsBSOvCup2oU2x32HBVgT2s4iBkiNbb2hJASwE6EWuGUVFcgkaPkCQWzrCFAKSaQGcZglhHoy1eCRZS+JCwyM1BJ85IRlHHHVPqn7ifjk+pnODA2l/8Y3bHDvjfRNob7fDs3LwXDSge4rlwJE4DeOJBkWWlUa9vOP+iV6az/3D7bYsTx3K5SqkXYcHBzwothFCSGE5kkV94etqicAqW0bdO2aZa9hFIIBJuj62iWov1ZndiCpKUKpeQ0FEOcnkszlmYQT6dCwgiy2nTEiis6GyfAYgO+7IbgaIQMZYeB2zGxH+MSzgTisXi0KpBSH+pyqbVAZGdzaj5lS9/cf/+A/d8+1t79u6dC1lx0857TKFugayf2qSKEFTFv4LKTu7hcdDx+JA8HIthkn9kJUHsZ4kLdpS+IA8hhY6KwnIXFVRP66HcgQ2Hn0yVWHmBEqsFdwfPBDZcdiq6RHopAzyLlngTXSG8xzEEMvMhxfPScAa/2RlIY89PzXTr0UL7Rc9b++obNuJZ/ND/uv3vv/f5wVJmPLcFlsjklOPXvRmDQ2SUJirvGlubuA7bcTo5b0jCSpZyN/CNsxcQbFgW/Xq1Upl/ZPfgQOGXfvVXbvmlNxbw10cRI+T4seucfT1VCDAuWe8dP/7af/vx26oDw/NevYb9PldUQu7YCse4aCr5bYT/XHY+V+52W4wceKJyKQkOScEh/koHdocz5qhEkgRH/O1OT/5yd4FZVAB7V45kXHiitoj7iutLesiJCj/wjBeem5v7w7fnf+cjYTEYC1udPN6OLnsGEJL83AgYMwawPMry5OSLVYwYpR1nvfS1r/uHO+/Yf+jAWgwLmQBREXICuSJ7EFZjIpezhAVodSz5/VNkoyRJA/nU5ExAkFAiZ3aQwTmFYiBCjrQfTs60fD9MpRcUKKzk/PLhkgtioITgjM0nwBCFe1mhnOTUJJqfeMwU9iP8kxwkpY33GuxW/VbYODC563t7F6Zmpg8dObhv376jU0eRhHk/HLjI+0WIPlFLcJc2u/riunIzgaVhoplMNCqKDNNzJ+ZzJ9MMod+p3rKNcTU2zVMDis/UcHRWkxQHsQitCH6fhbipKFs7RbQg474T/HkOnEChQbpEoepzL7NOrVFbPEVvweN89lsKM36nlMOiVSDoxkP6b9Z7tYvHcq+74ewtY96ffPovPvH5T8x68+etP3e0V5lW7LiUFJQAHs6D++8kJiPxjf+oIjAx9ygvn/bDZhuDj+xlUa9cxnmwMP/QfYPF4D2/8Zs/ff3VCmoM0RIQDLX7izZ4t+NpQKAb4ZL5havOu/WrG76376g3MIAtL8NmGtiJYACoZfhLEUhYnY02MFQ+XBqZbS8GHmtvJEMwpgxkjBY8XNjhaL1sgxIYVtJ9h8jLbyhyHh/LJ/x05455LF3VX8kGMYfos5OVF5/w/CRuslRrdGTDZz8x8/pfjq66GnbGJkUuUiyFc8QYwBKMnhN/CX4hwgeKFUa9InR56/bn/dSr7vr0nfOHHs4R+1NM+1jckfBF3LQ1OVyArdKxYcgERFo1nMOQIUqCLHZ5n/VTxL914AtEHUBb8ZiR0R/OgYiJXYcU05BVeW/rR3im0NopAUi0so3AAIqDBJ5DKqVUtKL2Yr2+uLjYIEjRX+AuWYREarkLcdcr+3m8t2nFqSLy+o2Qtb6hzyZ72PDbTEDqQXyh6ZhfyMsvBuPIeiy0I9GTM4HwCb0GzGBppsk0JKodW4TcYhmZbuStwGaOXZc21ba4itMMHIlX0IWz4IttwDCYzqLNmmmOkRBtCVORjQlPAO+jQvgEYabsvgZIeRwZ2JH8642F0cHSm1++6aLt3t9+6Ssf/tR/WfQOrh25sOCNhdEce/Sgk2mFkWa+dCi6J++EhEmxFEiJ2IAu6pw/rNqrUb0V5QqZ+vHJ7uLEpvVjd3zgfedu24AcRE5YbfDH6KAhENZox9ODQNBdxebx2dzbf/wnX/W+dxe75Xq50F4ERRTWDN2XbAFWg4Fk9PNTjwysOz45QQYJBCZGkxqwCda3OGFCw8bhiLVG0/ED/vTL3UWQRzgjGQN5wNUQvi0dwgbu4NuxFiqvsPirkpOcECJoxEkjSzc+6u9yk3HjoG98QmBwqTjw39629467VzWiFqEETkNeVq8f1cwZ9zN5YaBPMASYDpSZCtqRhhgpXwEbS63btHFq3x7WvLBxKTE9CC7kFgaXMkWWLEL3ha5yjnKXpFsJ/5BhCCYEWqtBtDmAiBGhbWz4JRsFBJ64IxdKii+aAzdBntWlIorQM8UYEzqNKDo9M70wO7swO7MwP98gsKfZJCkOElLBy5YDNq8pFH1irdnTsVAOSuV0WTtwwV5YgdNR5BGrFng7IakYDfNBM4ApwGyQQ4FCTShoJtd0VdOSt+sb0pl+vLzK6YKoquNhcaCSyKnmlMpVIjlMvEzzS5SWu0R7+SEniZ7CCd+67k7oJHI5565xMTB3C1FMnY62jYUF5oLZ+WOD6egnr7r0n7106Nt797z79t/51rGvrauuGc+tJztRMx3Kfe28uTEnoyOufRkRYumOAjf1xV7E6OC8ofJ2lPLZXnOxNXHgpddefvutHzpvzSoid2HYihBia9psDl0sDAk/5T47njIEGM1UmGqmUztGSvdOTH7vwMFUdkBhFmTX05AINUjHorAy7JNDg17jwPMn9q/pteqBSwHkZ7vsS81EIxuozPrIJYrphDm7/J1KjIVDrstO1Er+o6FWBZRtnYBnzDZM+arsIu/kHaIE1FMqIXkFCPmSrRWPtRBE7XNJM9n9jPFUveYFhefCIR3x35jo90tgAr7faPoDQ/6372tvOyu68BKJbpAIbtQugM+FwxjAiVGCyCL6MdIuxUJAzhwQdP3atYud9uTxY8SKZEmRICEDRELUlrEfuQGDCcRbyNJ3fCJSwBWQ3Vk55mi8skshjmuxuAR2cEk8g+c4tFTcvbub58okBIPQXQQSaKdhFSJdQxaVHIJ0dXkWn8OklOAMFGafL2R+eQYy2MxxZqk6Sy+1VEEat0Nc7O604855AdFfjBy06ZAcWszj+cfLiOj3SbMItDqieaCDavG3fmsSL9F6mEyfMTCPYrIuLhJPH2ClqebuFVeAWOs3rVGZi66+e2IH7YpMd2nirHvd+fpMqjdzw2Xb/+VPbzk6ffT3bvvPn9v12cH85g2FLelGnSnczgxlINm8oF5YwpvjN7QKx5WVScQbQPentSY3fl0yxA0U81NH9rfnJ3/jX//z9/7XXx/OZXrNRopNfmDjAClNhHoLBS2bW/Zw0JAdTwECkGCAn0MeSaUuWrftI1/9+/JiuplPo2CBAUIFJg02RnGAnl8q1oLa9fsf3sH+fNoPgE+uG2XbVFf6BwYQDTjAJ4wQhY8XXRW/Lv5biD5jKzkCCt4l4bOoOZW1CEBbCPCNVZNvMILK4IJK1Aj8QHUoQcmjtbharLbSgg4hptBHszLG3ROlOjvpyBZYdZNeVSp99Su7brp5tFRk7qJGtskbfFK9M/WHMYD+yLSjRj6fYzELCCzLBVJEJo1/NT08Xh0aRCzvhDVyBBPfj22dzCUYOhFVFdcioxCkmo/EeG3n7hgDUTBcQkgmhpIsbWwcCc1VXX2UB5qskzAIbBIIm1qYRhP85WbHVNjuEU4Axc9mWFCA+5d5JTMKcrdahc45vsJv3LaoIygHUMEs+7U4BEanhdyyHBOyLlovsit+w1XNQWcb11+V8+XK41oqWpbcXQVNCCYv5WIVqssPxypca7pbBB09XH+cfqBb4pbdHRSLUKsFTWrq8K5qUa/EN/cy0RHou2mWWreCaPGlF+945XWXVAP/dz/zns99+9Mwzq2j52fCIuNAgguEOFls9ObuhXgj8SHeyilS7q31M34HlcuyN1guPvTde7auHv7YB3//525+WbdWK7BFc5DDyIZpC8ZIZGMWLx4qIFk9niuB3K6PZ9AXhnzhamcxqm2olo83Ovfu3tcU+koucEMi2Qlslbs/m6lV/Rt33nuRV1tk0QwRyX6OlcXtbKrdAZPRqRW942R8hSaLdispCCVcVZQCdRyrWF7tJYKOaCRh3y0EkycO7BOhpw7lNELkD3ezvoz70SNBRqclLAExRl6Q8mQGsHR56a/kf2qk6uTOIo/U0X2ZZnPmBS8ZCNJd5LSlWmf6X9Nz+yNE2jc8uATayByMeICtmyWOudxM1Cms3XDB9TdsPu9cD9Nw2i9W84UKMTmQ5yCQd5Z0lSwsI/MOH/YM6LHxJPK4YnyK6UI5l68U+FQy2RLBEORpYGd4l9MWjOZENJFXQGNwor7EFGGVwoxkkxFl13dfQUWCz7Z9lkwS25ZhvWTYwxiS8zFqO+IMS0pD9PN+nh0r3Ma/jjKLDakR0WjYSICtnXEXIXYhPZTro/gfTVKmVcwA9A0UCKuRqOTquPqwG9VEVFeYJa/kzmmfFpwwjnTHiik1HhfSiFrGTMSJ9BKmGFH/RGNCCaisNVtlpmjQq+dwtHQ3Dw//zHWXX7A59fHb/vjWr97a8arnjV1eZE+GcKGdGmXD5iCc5GnAhG+6JuDoI92ME/10V9VrV843vvjdD+/86ZtuvOPPb73+2osgBqz3ZvkGcCFsW6REsCONsIfmB8M90yfumfp+jMkiA5ryhtK5huf91k03dAezRE4zNEJsxijmBHp/XylC8xW2U0DL1UwQ4okiibC6Q/Nj+cT5qPq/+aOfJ8iXEHzpkD4YHyL3nPcvxeXumxt5mRO3L936ZP8uvyG7g7FFNXrp0KqhOz8a7NtNCwR9PNl2Tns90wCWh0BbuvBDuOcQRlExxPPgmCSvWq46sOWy3ODqw0ePLkwdWVUkzzgWH9L2ZwnsQW5NsQgVVdWrd7NFsrLBQGTNQZyXvYUUAk4QISoIwuNi69GCoVPI7jARnqrYeOXX54P5SPunI0RIwYAL8Br6Qo7nFyk68TgrxB0xil0GVIp0Tdgzqbd4oIxSen38xDIfuZ5gF5JSEU8XSLCWFoChTDZ9oNF8cMuK8+GCUIm4BWzA2Xm0CMElg6NQlUV2YVdxHSi6rP9Mbkg8U02kV2ViXTQesWBaj8C4hPOZ8157LtWtBko8xF7MrEkIWZOH7tXtNNiDK5Otz06fP1h6+03XXzzof+iu99/y7Q9s6QyPemPF7nCqPZz2CulUmE43icMtEDGKqxt+wRxH526xIswrE1PbDgmg0hb0HZZtFeQmboX1hfmgveud//Gt/+mWX127Bl7DGytfNvGgMFsgBqwcuERR3IDw146nAwEApxBpLTZJ5UJEIjZq23jn5z/Zq7AwGKsIoxbmS7l2bTZNAGg7441V843d10wergTpo5lVrA3DWdzpIuYUsOcRpC8Bn/2rlSgUOw87hWEIYkFATnn/2XlDhksMTlnKHevHvINQLx+AS6folHHEDGkAEhUYXk6YT/HiehBXygFIzYm4hZAeBNdHh85i1VXS/opjGTSpXMAqyV56jozy9ZnKffc/8JqfG+/4c4Gc3s4K5Lfa3YaPZkNrTmNdvvdMODEG8ANGQXQzFlxw968a2jAyhDHowJFDlTzBQfgC2D8EA4/bKApLULYkqRMEo1XQReYkDi6IhDuGQmv8EkGmjirqrxCDGhzuAoK8MydRBv6J/lMMSV26zaGl6ru71JTakEVKlFeVqeHaV8OyzPAEV6Arqk6P1G8hOM3qVD9AeKi5KDy3uRJ3QbdTpk7Fd7lJEddRbykViNSyu1c3oxzoZSjlYe6S+4F1uJeuNxvsC+7nMnAspYHEnVGAe/nzc1PnpKr/4oU3nnt++sNf+/SHvvDHuc7M6tTmYqYCB1aKbWL3oSy8Io9jNw60NrFR3gDHSQ4vCeNANG27QcgVQXjM+k49nFuoT42urnzy9j+7/voXFgrs4ks/4bIMlPiWArnsOIUQcDjE+Ah3Xfq8KF+YbtYfODTNghbSPvilUjQzVRkabDZZLklOksLWiftfOH2EJKwzqXymDSl3m7pgzIRwY/OJt3bpm3Sg/pBp6Ds8ADMnjByKT/pCrfYCRZURyNXEEOT4gSw/TuXkhA+F1KdN3ahJIWzHiCQs4oQmHIafBA7Nlic+8GywpSrmYrRfEhEuzM1Xh4OLLstqgaTLEyr/nZ9rtVC7CeBu4QB/4sZOw5Uz621OAwB+0CPBCxAA9CLhAonggi1nn5XPdqqDk/fcTe7gfNAhFXQemlsu19uZxQbbKza0KQuSuYsl6kVEQGARxeuq6NAgYp8kxFblUekg/IKwEatSEdgVOARKSjwBOVPch7gCecLHy90U4B8jDAhcxAMB/eIGJ6U7aVt3iaKpGuHWSOEiuwhHEmKE1lxkTiKcI5Zwwtt1JI/rEoUqkMAuSo7vmQqaIOI3miouzIY/MSS4lTVlzEyeyUWZfPR2/fBQ7nKKBDfBBnh9TVHeWrKV3sLvlUjvmfFZbYXonmqEKbLFZ4M67zl3/NLc+L+85vk/elb29m997f1f+V8T3vSl3kgxPcj8YQN2sjAxexkJxfH5eTYsAHztll5EqhYzUOFK6nA+lY5CxMzMzkMPsRX5225567/+tz+PkUxdcaPpLGBkeDPkF0xO8eEwWMikIwp66R3lzM/f+JJPf/ND8OZmvUX6aLZeCMWHweu21+zMpYuzmeJgr6kYAfBGlNphbtzGim9GN64Ql2mwdYhAcx/3cCKuQIEzLPLb1VEF4apa1rF0o0pWnLtrT/WLTvj1wK+SILQ83Jk5uvVjfzT5Yz89UCWJFMpJKqizprkQ5FknhNpCqvUz7DAN4AcNCEs7JFsjzUDSRTX86uDY5u1k1SE2c37+eCmDdxEbRtQMSX2OUCsiKikcqgjlkyiv5AhQP+hUbGuQvV8yB/oo+qocZM5m4tQBuTGdWOskfPCFWrrAazpZnfagqiLxEvRpR7/4uCfIr8YPZzNygjGVZNxWXQ416RiCKsmw4yi0lANs+pK31K7miaxAIviaVhTqVdWCuIIml+6A7KuCAofEtsQzaIT2NQF1Ua/s2tE5l/utKVwDBtCNGg0Wyyhjnmwxrei8YM2vvODFL7hkzace+Mzv/M3vzbWPXFI+q5IZ8Zt5EkmK5SnDimxqsie1vXpUh3rkiYjNVTJ+to2ejalOsEy1I9aYNh48cu+FF2z/6Cfef/MbbiTLMyYy3pRWNBY0oHhZeQEFGztOIQTYf1pb5orSYu3nG3V2Tal8/0xr1yMH2rmStilicSVhn9qbj6Sh5Urn8FVzk6vDsE42tYgM7dmWqGUJVFKSBj6y+civi4QDTZVPWDFCOHt5DFXRALISDIRmbjcYJYSQsO9wWt9oFdwo4UmBRuA6lYUPzoUUqwWaALwtjTzq0GT5PofMtrSYZn/AQpkFDpl9ezuVVeHzrsFmRYLdFqEe7NsB4rFgH/IAPL5PY8/+JWMAPwjmkjChVCK10A82tiAhrRcUBzZszJcHG81mbXEhihhaMoaxhEA8X6gl6o+l3EmloJaIurInCMGwydCg858yRQjZBKUhuMtohnQNXRJTkIjuzkWnuA4pFykWpvNHr+S+QWRVcK+pK+5nLN7rJSjvk34eDy67j1pz5bKmuFtoVMRdfRVRZ+ou03pOJNJB2d0l1XecgBNlcHNXVd+BMmYeqslH2oN4hc7d7QJCl600wxZBUJlyodlsZcLWpm7pN1/0s9t3DNz5wB3vues9M97+c1Krq9FItztOFmAsPI6rAllBThDwgtCPMr2cHMetHgQfFSqV88kKTfDJzOJEq7PwH3793/zhB3934/Zxlt1BWFASJF46OPKezEitxDbq78bsVH45SaHtkv2J7EXEy8lIv/78HX/3uS92cnl8QV67kS8VOxECFRa4UpCdv2JucmtYa4Lf7RLm8hYpV3pFhsuZa6DacS5okXImGJGdxPPEeXvcQoEcJaTmojXHAGQ1cvFCmj2Oc0DoYRsuCkgpXKQHaE4KNdEAuMQJVzU7nyoDYF9k9kKLSP2QykStTqGIhbP70P2zL7+5Wqr2Gt3DObazYLtxwkfQQTVzjQGcSnR75tuSLVPE2CG2RGxOnIibLQ2PD42uYyu7+Xor7LBlOcYMxBHctFRC3ncxiaJdIsMQHCQSRSlyFXotSzarxpx7QAGj8UdcBorKM5EVRNOlLNCAI/SOOseKgbuoNuPqupuqYgNOI4jpuLvMq+sW99pQTw49XB/lo6CEl+Jw5aL+jorjXRPd5RczyJ0DgHh2iCe5aSJtQG0JqRXXD5vr360bYQPxHdzuVAXKxD+I94ctdstsplks1Wq1MFq4LLvx56664cqxodse+rs/vPujs90DlxY2DaXHmlGh0h0h8IpFzrSlzrkZJGZAEk+Wz3lZHzczzkay7JVTDb82WT8605684upLPvyx97/8dS8m5wM7vaMUcJ80E70qZ/qOu6z4T4rtOJUQAKawfcYMfATQsmgC7SIGv073S1//Vld7xWgdjTZhRmTqllrl+hWzx8+rzbAXEVvvprx8I2DZY8WRZpn4XVhnLNTHVn58AKQg1KbwPAxtgK1AIzeqwlcpAVpSIGcAQocTx8Q25C3gwyWQQOcyXfJBLXBLOmlAmP0YfIhR5Ykg1OstproFTMRsf1Cr+dliqlzNHHwku9h64CU3rqPTPrGDSmxFAy6Z+GPaf6KWn51yM4P+ADiDpAweccvkPEdcgdDqBpFA/JdBbmzLjpdsGtx4zp5vfHFmYudQhuWsIDVmHb/LVgNKFKpcEVj/e2QCin0DYKYSB7G+haWvMBecm5oIRBRh0+iEODTdWkJaZ0teUt1I54WDgO2y/kN3QXvi4CH4TDMilxBpQHSlO4buUw0vqZQIOALEXIuLuaI8LOxlwEyUDCVTK++ofBLkYNA8gF5r7siGjnlFhF9Es8+muK7JzIerovuc8MqUAAMUduor8oe5A5l1kr5eRQwAxsQ0k44g0xDxpzAp0p+mgmbQDhemWcF5RW7bKy+55totG//0G7fe8eCXW17zgvTl1Tb7c+VG0tWg3WmJnTpfiItegnwz5xkI1gNLbCMEOx0shrMTraONTC0Y8D/4gfe+7KYXpbEbRWG24gZLHl9B0b2SwlBpxCkDTqFw72pfpwwCstCxTzbrsxh/JI1+wwNh7S03XffZr3/7W3MLmfJIWKt5mTw2yFSr28oWp9MF8Q0QEhTViY54vFa+2FJ5v0x1YoItFMUbpJnkhB9VAM8h9KBLzPqpyBvxAd/dnFjRiArdp1/2VP6wNp+sAVI2EP+1miRf8FaN5e/8c/9n3uBd/KNrF5vzVTpK9peoQQ7IZYA8lWc8g3XNBPQDgAvX5iCmTCYXsARsAsMVB491L4PiCWGvrFq9YevmQto7dmw/mQTE7ZG4nZVBd3GIeELJIIiSPSGFEuxVzh/lMpNMTkUtJuNMxayCj7Gbeu4uUWS1Ik+CSuJnSLhyb7hSA3CU1zXIFy+u56sW93Out0M5YLmOUoTGB2Wi0/yE5eg8bjRum7tEw1U3fnBc2d0p45ZjDLoEeKikiaanIFtQoNfUXwcBWsVYS8DmLJyu3bqktPnN1960ozx29113v2Pqj3Lt5rnexmp6Y9QZKHVLbMhV682QuxM3Mk2xVE4syjm/aQ6OCbVgv3sY0lTvOHscvP6f3/zeD7/n4mt2iBoE8GE5F/QuUvbpVQgQxD/FNTVGzgfgwOF6Yl+nBALNqOYCXZyJE7QRtonppv26lkeNr/vSvd9rtdicgqSHWbAt1c53V7UvOX74efNHyNncDtEACvU0awnIhQVRl8zO3fpAzWMTEOI/4aGK+ZEgwqIwaQBgnyi7VAR3F+eMO1flNpIyEduRpArwAQtiE5AuxYYgh6x9hrISFN8fRVxaR+6K6q2ZQontQ7y5WpivtJqT6x45/J1XvHoNyWX1AOQyHtjGPLCy7dN/LmZ7+t/iufwGADBGkVarxR68D//tB3r1uWxjtkLgT5c4l2AxYlvz/EAExVPiZmR/qCRyP+lwSQwXKqk5Pkm3qQDUV7Hy2tgWQZkD7UE5VOA3rKRRLgmvlSVeSJH8cCIEGZYZs0WxdIBOnm9J+n0Z30UWMUNUHcebNAGxLUlZUgi4kXMOCmlNlxy9RiHgxMlK0F2dx35exZgyxSTUY5CFS5HinxUNftAmeQaznD5he4XMY0sVq+imm7k2k7nSSuVJ88ni3eGoPez19gZDU4WZVr3xsuL1/+6cNw2lvQ/s/rM/mfzgFm/NaGr1cGY800IY1AtEQbvlhb0OqSILgV/A5yt5MtuuhZPoWNnOujAVPtLdXctMv/Tmq3/prT97ziWbtRUT6TrsOPMgUGPvMLeR/I984A/vfXiuPbiKZRz5DLvQZWd3bL346Jc+8ZXPRqPpqJ4rN/xdg6uyzSL2fbYBiLq5sEsefwI9yW6SaqVKpIEla5RKvHzUJfciKnOv5RXJ4ofazC1aJaD9A5DH4QckinDOZGpqkwC2CpDxJ0T5xhwkJzPGJSnZirZDUHArhznRZJP0IlFIMsxTJJO+v3Bkf+6Df5l92SvB2hp+ELbwyKcrWvJzJh1mAnqaoxHjBzdzEmMJSZv5eeXNvzBx7zf33feNmfmJksSXdg7d0G82WqHWCecKQeiRl7jVxAYEJSXFHAKuKCcmEsxLCPKs8UJwcbQVdVoZVJSAzl2CdmMOx44D7YceO31Wu6Ej6HKJm5GLsDYh2kO1McxL4lX8Eou8mAwypHAu4szKF7QCWlA3nMlWrYrcS0AWQRfCi5DrnKf154MKEJmo6gxBnPN21FQl96U3c0euPciCnRZTsjcdtNByihOZyv5u9niw/9LFs/+Z9/KXbLlyb+eRd937Z/eEX9/or13X21gJ2My+xIK2Jst2xbOw63YLwdr5zlShVy8H3QbbP4apXGqARCsznUdmu7MXXXnWW37tlitffi76RtRcyBSwRxkDiEfgzPpWboTAm/O937rxNa/Y/0E2L+2w905jEU3Bq4XNnj+XL1TxC7MPsxwDDg1lh4wPWViWzpdKVuJkjKonanAjt6y4fenS0rTlksj9M3eEzezq9dFvvPWb193wo6wOCrx6Pldlgj2qG8/cCzzJls0E9CQB9ehqUFeOuHT5RKHlqUJp9caR8Q1hL5itLULdcXrhDSAzHEIG0RGs3k2TxJOENqwB8EhqjJ0cmwREW4YZnWOqoBkiGvE4IGS7JEOyHkG/kbDFJniwYxZ805z2n9Fl7uO6GoFb6AZXD8OJKut2DlfJNQMFX75Fkruq6U7NU3ez7l7qoKg7nEg/+9+ywGsJgVqOGYRjGI4BaPpmveFmptnJ1Uq91FC3jFf7aDC9e+jAixYu/tniT/3Y4BVHZh7+2OEP3t3+QiUonuefN+atZuMFksVHAIl30PYIJN9ja7BwVX4ACa3VrWXTWbSqqc5x7Malcxfe9l9+5Vd/9y3rLxgNuw2YKfuJdaOW/9xJw/JolPqh/o0o3iQfltc9b7D6vdrC9777ULoyLMeUNNFs3pu5pnZ0XYtginQTJxiWPWX7YdidhN63/yCtSsCXPUfmfkX7IL87kw6iEuXyXSFUya8rQ5Cz9hCFjbDET2GrrEP6KY8ByKwAULnDVIjsQwkM4iQBIp7aSxP9KYxQuUBK80Mzh9bmKo2rrkVrIcSpQMiQW/X/FNp5pqsyAPTdjlMGAeSKPk1s12oHHz744DdmDz7ktRYGSBKEWB4hqPbCRjtsYAgiOjETNeqUI/KSRDZ2AuNYxTnMfifa8RcHstzIHVRczjk6bD+JqUfnwlZGT8adXi9E0NcKM5mAKJBJh8r8ks3HmYYodJdIeE8hDesSxhaerrwIUHEKcBQLFM66Kge2a0oogmohrYM6CsRnkmgiiaVowsA/+Mn8oeuYgDSFUtnhKFwgSQNkPCLHRrMz5OVX+5Vbeu/MnFP4UvPLt+29ddE7eu7gjvHOJn+BzcvEvGBk8BnpO0R84zPHphPMYxRm30zsUYtebdLbe9ZVm37ul19z4cu25wZLmvXyc8uqBieiBV5Ap3acaRBotY/nOiMytmQernVf+HvvOna8663dnGpMdnvVwdKRW45+46cOHljoZeeCCpbFZrsCfWfRYLuXD3u5qIPziMEOml5RJiDcBb0cGzjJ1EOixZ7vTECkRKF8yQSkDfqcCUhGTlZdEnOQjZR1EJ7BShSovTMBaUtIeMmyCQh+INgxF/heZgBx4ZMHKkl+sQJlvEo92vWZe7avWUs+GRa+oKGeWTYg0wCe/Jh+v5oQ2RhjoJEgDfSXVD25oZGRbdtLlerxxWa3MYWxHjLPasBiPoPgz3KolNckDgL5w7l+RT9xCOP1VPQENFChorLUUM65hBvSZSqXkAuVcBddRQgn0rwoMPSPjyOEfMXhk1hseHOwGXrtruo6deUrdWoCspCeJoVAUTtoI7GSoY64mno73S8tgRO++cW33MWukNnBeawiyGSlS71mscf+eOljmekjwdHV/sibu2+4pffvF735v5r+5EcX/8f84Mylg5dtmtuRapA8L4OAj7TX8YilbqIGsEKOxb4ZGZHmWyyy81qtbGP95eO/8Jtv/KW3v27tlavTFRJx4CJocZVXxivod1hyrQ7ZcQZCoBOwAFyOecSDUT9YLJe/9M17/PwgqVcREjrF1Nb21FVTU6Gfqfus7ENAyTtxXtRZGYG0EAzbPVkiOIE6Q7JlYIWySyFAXFDqiFgDgIKzTAyuwIkugd1d1osweRRQEPuodA5GEyoqJUCSDW0Ku7llJfSWGcDKwidz3o56hQJ8K5qfXHXk2IM3vYqw5plMqnqm4aeJS09mNB+nDpjCIRIpIilaGf/E04+7N3TB6fJI+qmhLZddtfmi2Xv//ujhg1OHjoRRo0ryUFaKe82o1UhnhnBpYe5Okea2zU7ApKFWUhFFY2L6V5I2NhPAuo/tiC0n3fICnFZt1SGlG2IysjGvIPqNZKRYU1FzxZdKTdY3oj6TwIn/yqQgz4DCjsidII1BFdQwrSNI0QvJ79BvJXBAdVBN9ZS5QaGUamkD8jgwZzhFfxBr6c8i5ibty8lW6IZz6QW28N7Q3Phq76rnpa8az2z+em/qA9G7JrsPr8sUzh2+bLi9uZElCXDYKzT9JgoPLl+sBOxsxpo6/OcL9XZj0e9OeYfOvnTDm/7dG8//8fNIJkbmDEWtQgm0kIH0cEzlPuVXao2T5q9e0Y4zAQJgLpu713NZBHh4wJsuuuS2i7/54L37vdEBRi9MFQ5li03wCBdQO41rWGi14hAGikY7PZMbOJf56FHcPpZGHoUB4KxD1fgufjz6LveYuMrJ1H/F85/yaani1xa8SjkztMr724+X737L/LXXsSZRPrwz6jAG8DSHI6b4wqYlBhA3BIZi4gcHmy1QuFvKZb3MANg6eNkrqjvmJvfvnj64c+HwnvbMUUJbKqsGew1C44lqlKcXgs7qLIJ6cJ0q/gfCjLaKdQjplgWUkDq21mYvGMIb2IWYDVHalPcikX3wV25k5WJXCA0hZ1h+0Ij1fkj6svfL4OP0BDEGXlqOYiRn5WUmDZG8x1JilIJR3ETGfMWnxqYmWkPGQvISV+KLCrAeTRonctOyeA0/pRxoTUBqMaixK8Ymb9ON3k/8mH8jzObO6I5P9f4yvaZ+fmHr+bkdqVp6sj7TXcU+lkFjqp5VujcCi4iTS9U7tan6gWbQ6JW9F7zm+p958y0jlxe9XBT5c+hVGa+IQMiiDDiVHoxRDNeLZD3Swz3N0bTbnmkIIMmAOkrZR/xZJtqUz7z1Jdf/2iMfrTVaXdZQeaWpXr6F44cErbWgmQe1QKdlYsm5sIsDDNU3SubyAdWWhLP8mxN+8Onfoqv9G5caWXn7ifu4RY2fkqPRpLPtZkgKeG+gsuG//Ye77/w/VwclaMKZhaNn1tucEtA/a41gKYnRceUTQ6im4/PFnDYXE0ZJ4kjPeen8QGH8gtXjZ1/YfOTeQw98fe7II/NhnW3fJXw7lRRRFkqNjE6WApQBDEl6AonfZGiHTZCCGmR2YZ7orLAEaR1owlQkxQk7v4gDOMUZDUBCMWxFJ33irEkglzACPhXFElLKLhfTeCoRGkT7shhJ2Od2cQMpF864Q33J/kwscTxsPsgymkcKAuJwF+V90DlXZkvh9bUbXt153cbs9nvCf7gr+sup4q6LN2Q2lC8oBOOLrWytVyczXNBe8GuZkeJAt1GA07Fr42K0OO/NjW4fuv5nb77htdd5G7S/VM1vwFhZZANjy4qU8BrK48mr8DCYp/ZL68/5/iR3b2VfZwoEyP5dL+WL872wGmDLR4e7+eyNHz5/0z3f2O8VpETWvVTE9keY85D+JdDEB+i3PKCcuAngeMBShaWrjyvXCyXiY6maEHXl4dpcWXCKzgm4I/cDCcJ62p412vOd8/7iLw697k0Dnlc+RU84Nc04EnJqmrJWvh8EoNFCPemfUFGobXvy4L4DBw4sPPTXvUaYbfZKSAyI2WxKLu9sz5sp8S1HLlnO2KqKbxfvH4ZI/oreR2PoYTIJO5HLg8Y5exm6KqLbIvXSkZGUmwj4+ElZ0YaMzFRTyn8k51BOY/l4+YOxh6sS43stKK1S7Hda2h1N7EBPYxlBHh7FO4R8d93GL7TE9DrqDZCXMxM0G+2FuS5aD+m+RivpwXe1f7VYKT6SPXTX/D89mDlcXlvZNjy2NlNttgv0SJ5tbFokh+6m2JQF//bi/j3dcpDfNrD1+ede+ZNXXXDtWak871gvpFkQZscPDwSEbhIh8Opo3czw773H623K5gZS2Xs/vmvfOQf2LIyMLTZZM8BSSHLFEqSfjzo5/MBsEoBw0+wVQGMcwqHzD7e7hPzLT9AmzN+tGsMJ7FzHrA+QfV87iynmh1X5Sien9fVaA4/ZEV7COe3jLUB9BNelV4CWpwTW6WxEcrti0atFu0vZbbNHvcyqe+76zmWD5bnAG6jXvEL1oO+tZjvJdH7RQ9U9NY99yu9uGsBTBtnTu0FmETfG0E9FZaZSoxs2jY6Pe+evmdy379DOnYtHjzZbTfYoTInYR5nRjrZ4b5HYmA3pOddqAXB0oFGGQ7BMLIIsK+uJNgTDEt8JSKHYwXbEVSIQQHo5ErCKsDOGE/sRkKH++JtRwrG0s7OMvAIcy9FBThkgda1zBzgdRMYc+QNIZcGeFpLTvAIbq/cIuCSrj5hBNOqn5rv1o90FbFEj3shF3rZrvXPPaW/4TmXngdbEnsbBaMS/YOu2scFBEkBnoiBf40WCbpZNkjvz9en5eg1xL5PNPO9NP3L+lRdf8MIrgk0+gRJaAhBFrBZ9etC2u840CIC68SstM4B43cwrL/6Rv/rf3/LGi62ocyQbXFSu+DMLzbJz9Zzch+UWYlFq6fvkSku/VlSOi/r0lZcglGKp1jP4t9Fo5TIZ1rOkelUUVFjezET+Pe/Y8853b2Z9Y7FKPOh6xLh0vtHrkUyi7nunR9CxCfYMIsHKpp09CDzARUpSe2ipeICXK/aC7aMX7xg95+qFQ3uP7L5/Zt+eaHaSyJ+WNy87DHibJkya0Gi/E0Fzu7xpv4EAABXHSURBVCgDSOXYgshMTZpLqDKuAgh9tgbpR32mDs2jCsiOj+ROTiImg3ITEfHglACyAOEFwKgE8edWrULT6mPezP0EPbkJtgDaigHwBtImOoU83geWV/YItg+79aBTy/naIrk7W2+mR9qbr/S2X+9t3ZYqzXXnDngP/e/Og+lNA4WNQxuGBtcFlcI82+aFrW6qmCnWWrWFxgJWnaCa3nLFhmtefO1FV13mrWXDHbbLlPOvw47iPllSAdRKENr5cxgCsdT/KLoMD/jNG1/+jX0TB/ZPlEYH9hVmiRguRM0o28mwY4Y7uGXlXSefx2T9JILeryDDkSy0OrCSuqaQeL4v20BjdjbOUwFmP5UlLWSt1k1nhmmVTYML3rY7/2zfG96QOvcSJvai38bzwcGOFqy/OW2IbgzgVIz2k2hDAhAqpoR/5HC2g4FOQ3qJ61R+qG4uV9lWrmzb4dXnpx5+8PCe3bN77yPBPRI9JJaFMewwh68WyrxQlo+WVDdy7JITOYQgKxU+++MprRxZjyH9mHuUWQ5dGWKPo1e03q0mhvBrwRm3okBwmaZARmE93IKXI7VbFvZAsl0WryG/oE7AIfSiNX86lcdCm+lGHvs38v6Fhl9spFnAdYW3+Rpvx0AwsDczf0fx4Z1DhxdKC1dsuTBTLfQyQbfZTtUWQ5Yv0E8/fW9q7+DGoR3nX3jp1Zeefek52dXsFMiLttxrtjD/8oY5nxygApf2ki08Z/bXfhJYkPQqEoCc/WcZEJcWg19+0bW//t6PRONrJ9LFubAzWGKXRQQQyLGj1zEpFwmHoKtENH3Zi6tqTC2Re7Upw4779B+gUGe33p1bY24hNZpJELdGaWwp7asn/btOwZ8MixZxlHWifD5HcBr7Bg+XclPHz3rfO4/90SfH5xuLg4VRTbzeYCo168EdTtMRg+80PTxhjxXeEpCspFBC5/hot7RvqstmroI0GYREkjve/OzikSMHd+2c2L2zeXwi3aoV2fjOV7RkN8QroDVi2kvMOQOg680W2ysitWNeZwWZ1AWXhbTjt7TxGKqDTEOaLZoATJKoJ2s+fgA0A5k+ZVelAG7SlObBTGNzC3wGbpkY9f32Qt3rzfYw8/v5bmHcr24MhkaC0o8OXNVhNy/v4P25vQ8Mzi6sKY+t2bRu1ZrKFJGdUatWX4hai+y8WyytHl+3Ze2Wra+8dGRkZGBVlSfwICg+a6ABSDpKa0tmN0mZOPLoShyjxGQUgeGH7ADT6JG4QdQ7lE69/gMf/7/7dv+U33jbnocy3txUu9TzBmXZJ/dTR4mAQpn4yeoT+wC0CUyobD95BCRWhCE/4wxg4RhW0WUfgNs0hgVfJBHC1s8tWgLmPAFiJMRd930A2nYY6UTzgolwgrX8/0Ec9EZ2YqrlM7goOmE0l08NNxa86ZmJP/677ItvUKBEr5cn4lUxFvjgThOeGwP4/xvnp3B3TPSdnIKVA+MMcTUoBBRDCgnqQSRnDRZSsuMPEEUon0Sh2kJr4vDEIzsP79k1c+xoeX4Bck4uK6R1ZGM8ZdqsMoymmR7Y9kO8vaL+7lurd6OGSD9p53C9gvfMO1QHcB3iDsXXidLoigHAPjioKycvt7J0gDU6cA7Wk/n+VL2BTabi5Uezw2uHxkeHV1cqrG7OP3jsa/sH6kdW14qj2e3FoXF/sNHKzIRerdUcDvLVUnF424bxK88bO3/70FCFdZBR0ITio5OQDjSTYZ2E6Dvbw+ZxStDzkz68GeHjSjdtx3MdAmAahyi+k8Tjn8J/4gH8zGdmwpf/p3dc0pt9X206mj0Y9FYv+uQE1EpgOYG7uHxz7Y5yPMgJzPShRGndYAA4gZXNjRO3+p2VwNSPCT1O4HSrGzuBxQCWlg3j8sVpDKqlWT/onMBOFhcldkzgVMAazxZadTZI4cNLZ1od1jl2in5UnJ7wLr5u18fv2p5Lz6N2pHtVj81kci2PXeNPx2EM4FmCehQ2kf3J6xPrqvKuSgKC4sm3i7SgRbgyfyutAb8whYOhLBvHQKJsbZj2oxDEr+1+ePLIkcN7Hpk+fDCam81EUcBGBWCxX4DuExSEZE9eCGVYQf7odEmoD7OBB2idAeoCp9IG4B8k6FSOCVn7Jas46q93If6HXPowExbckzwONkXq5czQ5nOHM/m1ucJwPt9Od473Fve3Z493a/4Fi0P5wcHsgNfJhvShUh5bv35s9ejY6PqN6zekh0nqi4OafL3SVRDt85L33SG2g21p6We/FEnMnUkP0rR8zOXlenbyHIMAGMYbi+i7I+YHXlRj4fd8bvAtH/7sF+7+xEc79fHZ2U52yxxKa5wKQqlASeGQjxkAu25jwAHfXYpQsYcTDEDBPCL9sRIQLwaGAfBMzkm+6HiAYoEQeR7NANwUZPadqoOgDDR25LlWo1Uo5piJcD7p251g4ujxt//3kde8uVvMzvpe1QvJCoCb+PRousYATtWI/8B2hP3u0LpzDn738Y2Nq7AX4hiAGusiCquQxbEKWISzbzqrDLfAGPCN+rCTRq09Oz1zcP+h3Q9NHDkS7DqC8SdqRV14ADIFDWILwsji5H1NPeI9UQzQBFxQKTsqwghgCSQFEgOQ6YjUQd1ctiAzfCqdz5UKxWqxVC1VhorFYmamu5gND2fmD6Wm5jPz+QF/9fjg2KrK2Oj2cqU4MDpQWrOqsGpVubQqHxDsnPUKDaSaGkvhvGwOiw46BfaeHK4JSTooyDA/pybr1Zgb2PspoNMZFlK4dcXo9Vwy+d8hyw/JV5/ou94snbOdYi3dG/zagvf8W978oSOHro6CA52xCCxHTped5wQDQHJHA2CqEM0JS4hzRFNHtkqZeh6fAYhhEGBNtKiUANmRYgZAbAQBbbEGAHoicJ1CBhClFrvtopapsFlY3qsvkvmLqdv0/GjxeKUyfPSvvz62evxwN1yvpMAh8SCnZ4iNAZweuJ/6p87NhouLc8enFyen549Pzx2dnJ48vjg3P3x4gaW2nVZYn5pdmJrp1Mmxr2xzswHZNjHhkHQhi7sYHRUGgY6SrwxlivlitZKvltOlPF7ceFeAXbljI2OjazesXzU+Vhmolgaqg8NDpWolm5WMb4dB4GlCQAForP1C3fU+/z8//o8f+cg5bCDseZO9EayViPOYepoolxLt2c0x1ehWMZm7PQDEG1ALqIOo1CDaUvH+aeIhnBKAbQdCz3r0CldJiA7z4LtD9lAWPHaDugyoSByB1GLp2FBCfZ5I5JBs8njHE5V7KaSwxzm6mcWwwYY28y++Mfu+PxkbXM16iOlibvhxqj4rRcYAnhUwP/MPQZRHU2A4JckgzvAJIz6NsDY9NcVeNIUgszA9O3XkWD6X27hu/d5/vJ9N6jDwZPOFVDpNtmr2M6pUKv74KllHEVzwR2g3U3I0ZGAMA+RYzJLWwimqPEmhQVoyxhYtz3zn7Ak/vBAgmUmQbrpFMrXJ4498+f/mJ475M8eb+XEYgLJ+Yh+RVccRdOV/5kSEHlIeu3xF2YX1aLtaO0aUNEI9Pl4kfZXItOLoO/Z2XYINyAbVcCK3KL5KYtIPY8AqHz4urGP71eNeevxCVqw/7kF8czq3ML8Q5B957Rs3n3thUMyj+p+2rSKNATzuKD33CusyDkmOIp2nOEHcg163ibiEyUjuBJL8sFp3PpfOVEqVNJFo9RpojRbADvSsIiYoO1fKU5XZ5BYjaxkw0TjcS0lOe3WIMejjWqeQg9/ur30ZBJ4WBLoh9sa6S+gnf0+z7i/MptutbnFQ5FgmUSh4n5pzgi8JBhCXYDjHWkk1RJaCQm604tHFsymqx1XzsmiwzuQIlZdkE0eRqprDW4fEfRTnIoLNE6Cz81+4Gid/6d7HPeLp8ZhLzC9xJLY7XWytXpMrFLF0YntS2pbTchgDOC1gfwYeuoxwSxgZ66y9eoh0/yhfKgnm2LdbLimIfKAE5cjz+IHTZNRhPcAyUtNm3CyXSbi29AuM1dx0P08T3rrH29dzHwKt+lyuWJFtB2cui9bVI+0bExuFYlw+IdAoNE5lDjHFIGL0hAtktcxRtBS0pxCZXtWw8eP4ig9KxC9izF1GYdqOm48JP40/PkbHs6nf1Io/y3NlRVl8Gu8m/uhigvaaUaOQwQAFv8u1G510hnds+W4/wUfXfuZ/GwN45mH87DzBCeh6VDxplr+dLxVS73yr/atg8wkajtSEzuBmEuWh1oGdmBNxM7Tal5g0tTTH9BynCViUjmBhx9OFAJEJ+Py5G0KtcAekYU4U+qYWHSpyGpN64ggoir2lMSnnd0zQEdBPrKVy6Em5LpFcermh/tQAl2nG6Re6pCOm/o89j0ue1reUkMc9KMfK1I5I/E4IELNIvbYooMeFlRU+aQhIMXYkeVkkiRFwJYEG70X6+1Orj6DxjXFwHjFCKbbtcA9dJv2adb1eiyWVHA5dl9VhGMeJak/6Va2iQeAkCIBgiCmiyq545bcKQFSFJ7tr+AUeZS53V2ngJESMKzvS2smsbFbWI3ecyDfaL1j6o5RXp+KINZLHtkRPHZ+DATETHS+icxGR1o+t+yyUmAbwLAD52XhEeMJ6KexnXPlGBWZpWDbWLrH3K1uQBCJSBYUZ8kxDwPWJ368/NdBcOVuaJ7pESwTwZ05YR1dePFl6iluyb4PAk4UAQTigYJ/6L0vN8t+uQMLlcliBs93H5PsEHoKf2m5XMZfc5r6XsbovAsWkf5kBkCOi/4pLf+N4HpdH5cm+/Pet9/gEnee2nXHI7WHhaRMksoO59UHft7Vn6qIxgGcKss9yu4TyuyfiCOOv8+Tyt+exyQZ/+K0knH3pX9NIk8UdSqvPwboBDm08qb8SyNwMdKWajFnVgJ9oPYt8w/EFdAESWdhhEHi6ECBlFdiEA5ckzWApEclOIgFX+7Z4EA0hP0Y3HrKs0UK3YxofMwPs+3qFmHPoZOmTicMxVRftV7ZPNahNVzl59g/fm2dLADIC0+uu13LTtsQ0ysadedZfyBjAsw5ye6BBwCBgEDgzIHCa+M6Z0Xl7C4OAQcAgkGQIGANI8uhb3w0CBoFEQ8AYQKKH3zpvEDAIJBkCxgCSPPrWd4OAQSDREDAGkOjht84bBAwCSYaAMYAkj7713SBgEEg0BIwBJHr4rfMGAYNAkiFgDCDJo299NwgYBBINAWMAiR5+67xBwCCQZAgYA0jy6FvfDQIGgURDwBhAooffOm8QMAgkGQLGAJI8+tZ3g4BBINEQMAaQ6OG3zhsEDAJJhoAxgCSPvvXdIGAQSDQEjAEkevit8wYBg0CSIWAMIMmjb303CBgEEg0BYwCJHn7rvEHAIJBkCBgDSPLoW98NAgaBREPAGECih986bxAwCCQZAsYAkjz61neDgEEg0RAwBpDo4bfOGwQMAkmGgDGAJI++9d0gYBBINASMASR6+K3zBgGDQJIhYAwgyaNvfTcIGAQSDQFjAIkefuu8QcAgkGQIGANI8uhb3w0CBoFEQ8AYQKKH3zpvEDAIJBkCxgCSPPrWd4OAQSDREDAGkOjht84bBAwCSYaAMYAkj7713SBgEEg0BIwBJHr4rfMGAYNAkiFgDCDJo299NwgYBBINAWMAiR5+67xBwCCQZAgYA0jy6FvfDQIGgURDwBhAooffOm8QMAgkGQLGAJI8+tZ3g4BBINEQMAaQ6OG3zhsEDAJJhoAxgCSPvvXdIGAQSDQEjAEkevit8wYBg0CSIWAMIMmjb303CBgEEg0BYwCJHn7rvEHAIJBkCBgDSPLoW98NAgaBREPAGECih986bxAwCCQZAsYAkjz61neDgEEg0RAwBpDo4bfOGwQMAkmGgDGAJI++9d0gYBBINASMASR6+K3zBgGDQJIhYAwgyaNvfTcIGAQSDQFjAIkefuu8QcAgkGQIGANI8uhb3w0CBoFEQ8AYQKKH3zpvEDAIJBkCxgCSPPrWd4OAQSDREDAGkOjht84bBAwCSYaAMYAkj7713SBgEEg0BIwBJHr4rfMGAYNAkiFgDCDJo299NwgYBBINAWMAiR5+67xBwCCQZAgYA0jy6FvfDQIGgURDwBhAooffOm8QMAgkGQLGAJI8+tZ3g4BBINEQMAaQ6OG3zhsEDAJJhoAxgCSPvvXdIGAQSDQEjAEkevit8wYBg0CSIWAMIMmjb303CBgEEg0BYwCJHn7rvEHAIJBkCBgDSPLoW98NAgaBREPAGECih986bxAwCCQZAsYAkjz61neDgEEg0RAwBpDo4bfOGwQMAkmGgDGAJI++9d0gYBBINASMASR6+K3zBgGDQJIhYAwgyaNvfTcIGAQSDQFjAIkefuu8QcAgkGQIGANI8uhb3w0CBoFEQ8AYQKKH3zpvEDAIJBkCxgCSPPrWd4OAQSDREDAGkOjht84bBAwCSYaAMYAkj7713SBgEEg0BIwBJHr4rfMGAYNAkiFgDCDJo299NwgYBBINAWMAiR5+67xBwCCQZAgYA0jy6FvfDQIGgURDwBhAooffOm8QMAgkGQLGAJI8+tZ3g4BBINEQMAaQ6OG3zhsEDAJJhoAxgCSPvvXdIGAQSDQEjAEkevit8wYBg0CSIWAMIMmjb303CBgEEg0BYwCJHn7rvEHAIJBkCBgDSPLoW98NAgaBREPAGECih986bxAwCCQZAsYAkjz61neDgEEg0RAwBpDo4bfOGwQMAkmGgDGAJI++9d0gYBBINASMASR6+K3zBgGDQJIhYAwgyaNvfTcIGAQSDQFjAIkefuu8QcAgkGQIGANI8uhb3w0CBoFEQ8AYQKKH3zpvEDAIJBkCxgCSPPrWd4OAQSDREDAGkOjht84bBAwCSYaAMYAkj7713SBgEEg0BIwBJHr4rfMGAYNAkiFgDCDJo299NwgYBBINAWMAiR5+67xBwCCQZAgYA0jy6FvfDQIGgURDwBhAooffOm8QMAgkGQLGAJI8+tZ3g4BBINEQMAaQ6OG3zhsEDAJJhoAxgCSPvvXdIGAQSDQEjAEkevit8wYBg0CSIWAMIMmjb303CBgEEg0BYwCJHn7rvEHAIJBkCBgDSPLoW98NAgaBREPAGECih986bxAwCCQZAsYAkjz61neDgEEg0RAwBpDo4bfOGwQMAkmGgDGAJI++9d0gYBBINASMASR6+K3zBgGDQJIhYAwgyaNvfTcIGAQSDQFjAIkefuu8QcAgkGQIGANI8uhb3w0CBoFEQ8AYQKKH3zpvEDAIJBkCxgCSPPrWd4OAQSDREDAGkOjht84bBAwCSYaAMYAkj7713SBgEEg0BIwBJHr4rfMGAYNAkiFgDCDJo299NwgYBBINAWMAiR5+67xBwCCQZAgYA0jy6FvfDQIGgURDwBhAooffOm8QMAgkGQLGAJI8+tZ3g4BBINEQMAaQ6OG3zhsEDAJJhoAxgCSPvvXdIGAQSDQEjAEkevit8wYBg0CSIfD/AOlbKz6IzB9pAAAAAElFTkSuQmCC"
                })
            ]
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(80681);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/index.tsx









const sns = {
    ...CryptoartAI_base/* base */.u,
    init (signal) {},
    PostInspector: function Component() {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = (0,uniq/* default */.Z)(links).find(checkUrl);
        const asset = getAssetInfoFromURL(link);
        (0,entry_content_script/* usePluginWrapper */.fI)(!!asset);
        return asset ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            payload: asset
        }) : null;
    },
    DecryptedInspector: function Component(props) {
        const collectibleUrl = getRelevantUrl((0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message, {
            linkAsText: true
        }).unwrapOr(''));
        const asset = getAssetInfoFromURL(collectibleUrl);
        (0,entry_content_script/* usePluginWrapper */.fI)(!!asset);
        return asset ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            payload: asset
        }) : null;
    },
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(CryptoArtIcon, {});
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_cryptoartai_dapp_name"
            });
            return {
                ApplicationEntryID: CryptoartAI_base/* base.ID */.u.ID,
                marketListSortingPriority: 19,
                icon,
                category: 'dapp',
                name,
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                    i18nKey: "plugin_cryptoartai_dapp_description"
                })
            };
        })(), 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ })

}]);