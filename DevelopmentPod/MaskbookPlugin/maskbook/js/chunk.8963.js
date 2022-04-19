"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8963],{

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

/***/ 50751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(27536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(48672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(30103);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(3543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(6823);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(31008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/VerifiedUser.js
var VerifiedUser = __webpack_require__(42971);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/opensea-js@1.2.7/node_modules/opensea-js/lib/types.js
var types = __webpack_require__(95356);
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

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var evm_types = __webpack_require__(65506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/escapeRegExp.js
var escapeRegExp = __webpack_require__(39345);
// EXTERNAL MODULE: ./src/plugins/CryptoartAI/constants.ts
var CryptoartAI_constants = __webpack_require__(67288);
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
    const urls = (0,src/* parseURL */.Lk)(textContent);
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
                ownerAvator: fetchResponse.data.creatorInfo.avatorPath,
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
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!token) return;
        const assetResponse = await getAsset(token.tokenId, chainId);
        return {
            owner: assetResponse.owners,
            trade: assetResponse.trade,
            is_owner: assetResponse.owners.some((owner)=>(0,utils_address/* isSameAddress */.Wr)(owner.ownerAddress, account)
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
    const chainId = (0,useChainId/* useChainId */.xx)();
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
    const chainId = (0,useChainId/* useChainId */.xx)();
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
                    avatorPath: event.avatorPath,
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
        events
    };
}
const CollectibleState = (0,unstated_next/* createContainer */.f)(useCollectibleState);

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
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
    const resourceUrl = asset.value.shareUrl || asset.value.ossUrl;
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
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx + 1 modules
var Markdown = __webpack_require__(57200);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/Account.tsx



function Account({ address , username  }) {
    const account = (0,useAccount/* useAccount */.m)();
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: (0,utils_address/* isSameAddress */.Wr)(account, address ?? '') ? t('plugin_collectible_you') : username || address?.slice(2, 8)
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
    const chainId = (0,useChainId/* useChainId */.xx)();
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
                                href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, token?.contractAddress ?? ''),
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
                                children: (0,chainDetailed/* getChainName */.qz)(chainId)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(80804);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(76594);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(16296);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(76492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(56125);
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
                            src: event.avatorPath,
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
                    children: event.createTime.substr(0, event.createTime.length - 3)
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(35555);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableFooter/TableFooter.js + 1 modules
var TableFooter = __webpack_require__(34577);
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
    const chainId = (0,useChainId/* useChainId */.xx)();
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
                            src: event.avatorPath,
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
                    children: event.createTime.substr(0, event.createTime.length - 3)
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
    const chainId = (0,useChainId/* useChainId */.xx)();
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
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(48668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(63258);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenWatched.tsx
var useFungibleTokenWatched = __webpack_require__(45603);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/SelectTokenAmountPanel.tsx
var SelectTokenAmountPanel = __webpack_require__(84002);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(52599);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(29812);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(35827);
;// CONCATENATED MODULE: ../web3-contracts/abis/CryptoArtAIKnownOriginDigitalAssetV2.json
const CryptoArtAIKnownOriginDigitalAssetV2_namespaceObject = JSON.parse('[{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_active","type":"bool"}],"name":"updateActive","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"priceInWeiToken","outputs":[{"name":"_priceInWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_uri","type":"string"}],"name":"setTokenURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_koCommissionAccount","type":"address"}],"name":"updateKoCommissionAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"InterfaceId_ERC165","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionData","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newBaseURI","type":"string"}],"name":"updateTokenBaseURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"uint8"}],"name":"checkRole","outputs":[],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalPurchaseValueInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_startDate","type":"uint256"}],"name":"updateStartDate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"artistCommission","outputs":[{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"tokenURIEdition","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_editionNumber","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalNumberAvailable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"uint8"}],"name":"addAddressToAccessControl","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"priceInWeiEdition","outputs":[{"name":"_priceInWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenBaseURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_rate","type":"uint256"}],"name":"updateArtistCommission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionType","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOf","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"purchaseDatesEdition","outputs":[{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_artistsAccount","type":"address"}],"name":"artistsEditions","outputs":[{"name":"_editionNumbers","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"totalAvailableEdition","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"koCommissionAccount","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"editionNumber","type":"uint256"}],"name":"detailsOfEdition","outputs":[{"name":"_editionData","type":"bytes32"},{"name":"_editionType","type":"uint256"},{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"},{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"},{"name":"_priceInWei","type":"uint256"},{"name":"_tokenURI","type":"string"},{"name":"_totalSupply","type":"uint256"},{"name":"_totalAvailable","type":"uint256"},{"name":"_active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_uri","type":"string"}],"name":"updateEditionTokenURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"tokensOfEdition","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_editionNumber","type":"uint256"}],"name":"underMint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_priceInWei","type":"uint256"}],"name":"updatePriceInWei","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"editionOfTokenId","outputs":[{"name":"_editionNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_editionNumber","type":"uint256"}],"name":"purchaseTo","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionData","type":"bytes32"},{"name":"_editionType","type":"uint256"},{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"},{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"},{"name":"_priceInWei","type":"uint256"},{"name":"_tokenURI","type":"string"},{"name":"_totalAvailable","type":"uint256"}],"name":"createActiveEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_MINTER","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"uint8"}],"name":"hasRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"uint8"}],"name":"removeAddressFromAccessControl","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_rate","type":"uint256"},{"name":"_recipient","type":"address"}],"name":"updateOptionalCommission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_UNDER_MINTER","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionData","type":"bytes32"},{"name":"_editionType","type":"uint256"},{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"},{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"},{"name":"_priceInWei","type":"uint256"},{"name":"_tokenURI","type":"string"},{"name":"_totalSupply","type":"uint256"},{"name":"_totalAvailable","type":"uint256"}],"name":"createInactivePreMintedEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"reclaimEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"highestEditionNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenIds","type":"uint256[]"}],"name":"batchTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionData","type":"bytes32"},{"name":"_editionType","type":"uint256"},{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"},{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"},{"name":"_priceInWei","type":"uint256"},{"name":"_tokenURI","type":"string"},{"name":"_totalSupply","type":"uint256"},{"name":"_totalAvailable","type":"uint256"}],"name":"createActivePreMintedEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_artistAccount","type":"address"}],"name":"updateArtistsAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenData","outputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionType","type":"uint256"},{"name":"_editionData","type":"bytes32"},{"name":"_tokenURI","type":"string"},{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"totalSupplyEdition","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"purchaseDatesToken","outputs":[{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionActive","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"totalRemaining","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_totalAvailable","type":"uint256"}],"name":"updateTotalAvailable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_KNOWN_ORIGIN","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionType","type":"uint256"}],"name":"updateEditionType","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionOptionalCommission","outputs":[{"name":"_rate","type":"uint256"},{"name":"_recipient","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_endDate","type":"uint256"}],"name":"updateEndDate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_editionData","type":"bytes32"},{"name":"_editionType","type":"uint256"},{"name":"_startDate","type":"uint256"},{"name":"_endDate","type":"uint256"},{"name":"_artistAccount","type":"address"},{"name":"_artistCommission","type":"uint256"},{"name":"_priceInWei","type":"uint256"},{"name":"_tokenURI","type":"string"},{"name":"_totalAvailable","type":"uint256"}],"name":"createInactiveEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_type","type":"uint256"}],"name":"editionsOfType","outputs":[{"name":"_editionNumbers","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"purchase","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"totalNumberMinted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenIds","type":"uint256[]"}],"name":"batchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_totalSupply","type":"uint256"}],"name":"updateTotalSupply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURISafe","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_tokenId","type":"uint256"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_buyer","type":"address"},{"indexed":false,"name":"_priceInWei","type":"uint256"}],"name":"Purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_tokenId","type":"uint256"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_buyer","type":"address"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_editionData","type":"bytes32"},{"indexed":true,"name":"_editionType","type":"uint256"}],"name":"EditionCreated","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"uint8"}],"name":"RoleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"uint8"}],"name":"RoleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/CryptoArtAIArtistAcceptingBidsV2.json
const CryptoArtAIArtistAcceptingBidsV2_namespaceObject = JSON.parse('[{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"increaseBid","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"highestBidForEdition","outputs":[{"name":"_bidder","type":"address"},{"name":"_value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"checkRole","outputs":[],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"withdrawBid","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_WHITELISTED","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"hasRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operators","type":"address[]"}],"name":"removeAddressesFromWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_withdrawalAccount","type":"address"}],"name":"withdrawStuckEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"}],"name":"removeAddressFromWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"acceptBid","outputs":[{"name":"tokenId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"addedEditions","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minBidAmount","type":"uint256"}],"name":"setMinBidAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"editionHighestBid","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minBidAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"editionsOnceEnabledForAuctions","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"editionController","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"rejectBid","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"koCommissionAccount","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"disableEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"editionNumberToArtistControlAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"}],"name":"addAddressToWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"auctionDetails","outputs":[{"name":"_enabled","type":"bool"},{"name":"_bidder","type":"address"},{"name":"_value","type":"uint256"},{"name":"_controller","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"enableEditionForArtist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_bidder","type":"address"},{"name":"_amount","type":"uint256"}],"name":"manualOverrideEditionHighestBidAndBidder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_koCommissionAccount","type":"address"}],"name":"setKoCommissionAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"cancelAuction","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_bidder","type":"address"}],"name":"manualDeleteEditionBids","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"placeBid","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"}],"name":"whitelist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_address","type":"address"}],"name":"setArtistsControlAddressAndEnabledEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_withdrawalAccount","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawStuckEtherOfAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kodaAddress","type":"address"}],"name":"setKodavV2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"enabledEditions","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"},{"name":"_address","type":"address"}],"name":"setArtistsControlAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kodaAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operators","type":"address[]"}],"name":"addAddressesToWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"isEditionEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_editionNumber","type":"uint256"}],"name":"enableEdition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_kodaAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"BidPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"BidIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_editionNumber","type":"uint256"}],"name":"BidWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_tokenId","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"BidAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caller","type":"address"},{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"BidRejected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_bidder","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"BidderRefunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_editionNumber","type":"uint256"}],"name":"AuctionCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_auctioneer","type":"address"}],"name":"AuctionEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_editionNumber","type":"uint256"},{"indexed":true,"name":"_auctioneer","type":"address"}],"name":"AuctionDisabled","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"string"}],"name":"RoleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"string"}],"name":"RoleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/CryptoArtAICANFTMarket.json
const CryptoArtAICANFTMarket_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract IAccessControl","name":"access","type":"address"},{"internalType":"contract ICAAsset","name":"caAsset","type":"address"},{"internalType":"address payable","name":"treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"bidder","type":"address"},{"indexed":false,"internalType":"uint256","name":"award","type":"uint256"}],"name":"AuctionAwardUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint32","name":"caPoints","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"artistPoints","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"sellerPoints","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"auctionAwardPoints","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"sharePoints","type":"uint32"}],"name":"MarketFeesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"bidder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"ReserveAuctionBidPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"ReserveAuctionCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"ReserveAuctionCanceledByAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint32","name":"minPercentIncrementInBasisPoints","type":"uint32"},{"indexed":false,"internalType":"uint256","name":"maxBidIncrementRequirement","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"extensionDuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"goLiveDate","type":"uint256"}],"name":"ReserveAuctionConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"extensionDuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reservePrice","type":"uint256"}],"name":"ReserveAuctionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"address","name":"bidder","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveAuctionFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"originalSellerAddress","type":"address"},{"indexed":true,"internalType":"address","name":"newSellerAddress","type":"address"}],"name":"ReserveAuctionSellerMigrated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reservePrice","type":"uint256"}],"name":"ReserveAuctionUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"share","type":"address"},{"indexed":false,"internalType":"uint256","name":"award","type":"uint256"}],"name":"ShareAwardUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"accessControl","outputs":[{"internalType":"contract IAccessControl","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"string","name":"reason","type":"string"}],"name":"adminCancelReserveAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"minPercentIncrementInBasisPoints","type":"uint32"},{"internalType":"uint32","name":"duration","type":"uint32"},{"internalType":"uint32","name":"_caPoints","type":"uint32"},{"internalType":"uint32","name":"_artistPoints","type":"uint32"},{"internalType":"uint32","name":"_sellerPoints","type":"uint32"},{"internalType":"uint32","name":"_auctionAwardPoints","type":"uint32"},{"internalType":"uint32","name":"_sharePoints","type":"uint32"}],"name":"adminUpdateConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"awards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"cancelReserveAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"reservePrice","type":"uint256"}],"name":"createReserveAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"finalizeReserveAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getArtist","outputs":[{"internalType":"address","name":"artist","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCATreasury","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeeConfig","outputs":[{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"getFees","outputs":[{"internalType":"uint256","name":"caFee","type":"uint256"},{"internalType":"uint256","name":"artistFee","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"auctionFee","type":"uint256"},{"internalType":"uint256","name":"shareFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getIsPrimary","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"getMinBidAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getPendingWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"getReserveAuction","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint32","name":"duration","type":"uint32"},{"internalType":"uint32","name":"extensionDuration","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"shareUser","type":"address"}],"internalType":"struct NFTMarketReserveAuction.ReserveAuction","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserveAuctionConfig","outputs":[{"internalType":"uint256","name":"minPercentIncrementInBasisPoints","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getReserveAuctionIdFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"address","name":"shareUser","type":"address"}],"name":"placeBid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_treasury","type":"address"}],"name":"setCATreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"uint256","name":"reservePrice","type":"uint256"}],"name":"updateReserveAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"user","type":"address"}],"name":"withdrawFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_withdrawalAccount","type":"address"}],"name":"withdrawStuckEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/hooks/useCryptoArtAI_Contract.ts




function useCryptoArtAI_Contract() {
    const { KNOWN_ORIGIN_DIGITAL_ASSET_V2 , ARTIST_ACCEPTING_BIDS_V2 , CANFT_MARKET  } = (0,constants/* useCryptoArtAIConstants */.ZK)();
    const KnownOriginDigitalAssetV2_CONTRACT = (0,useContract/* useContract */.cq)(KNOWN_ORIGIN_DIGITAL_ASSET_V2, CryptoArtAIKnownOriginDigitalAssetV2_namespaceObject);
    const ArtistAcceptingBidsV2_CONTRACT = (0,useContract/* useContract */.cq)(ARTIST_ACCEPTING_BIDS_V2, CryptoArtAIArtistAcceptingBidsV2_namespaceObject);
    const CANFTMarket_CONTRACT = (0,useContract/* useContract */.cq)(CANFT_MARKET, CryptoArtAICANFTMarket_namespaceObject);
    return {
        knownOriginDigitalAssetV2_contract: KnownOriginDigitalAssetV2_CONTRACT,
        artistAcceptingBidsV2_contract: ArtistAcceptingBidsV2_CONTRACT,
        cANFTMarket_contract: CANFTMarket_CONTRACT
    };
}

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/hooks/usePlaceBidCallback.ts




function usePlaceBidCallback(is24Auction, editionNumber) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { artistAcceptingBidsV2_contract , cANFTMarket_contract  } = useCryptoArtAI_Contract();
    const [placeBidState, setPlaceBidState] = (0,useTransactionState/* useTransactionState */.p)();
    const placeBidCallback = (0,react.useCallback)(async (priceInWei)=>{
        if (!is24Auction && !artistAcceptingBidsV2_contract) {
            setPlaceBidState({
                type: evm_types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        if (is24Auction && !cANFTMarket_contract) {
            setPlaceBidState({
                type: evm_types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setPlaceBidState({
            type: evm_types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            value: (0,base_src/* toFixed */.FH)(priceInWei),
            gas: !is24Auction ? await artistAcceptingBidsV2_contract?.methods.placeBid(editionNumber).estimateGas({
                from: account,
                value: (0,base_src/* toFixed */.FH)(priceInWei)
            }).catch((error)=>{
                setPlaceBidState({
                    type: evm_types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }) : await cANFTMarket_contract?.methods.placeBid(editionNumber, primitives/* ZERO_ADDRESS */.r).estimateGas({
                from: account,
                value: (0,base_src/* toFixed */.FH)(priceInWei)
            }).catch((error)=>{
                setPlaceBidState({
                    type: evm_types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            if (!is24Auction) {
                artistAcceptingBidsV2_contract?.methods.placeBid(editionNumber).send(config).on(evm_types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                    setPlaceBidState({
                        type: evm_types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                        no: 0,
                        receipt
                    });
                    resolve();
                }).on(evm_types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                    setPlaceBidState({
                        type: evm_types/* TransactionStateType.HASH */.n$.HASH,
                        hash
                    });
                    resolve();
                }).on(evm_types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                    setPlaceBidState({
                        type: evm_types/* TransactionStateType.FAILED */.n$.FAILED,
                        error
                    });
                    reject(error);
                });
            } else {
                cANFTMarket_contract?.methods.placeBid(editionNumber, primitives/* ZERO_ADDRESS */.r).send(config).on(evm_types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                    setPlaceBidState({
                        type: evm_types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                        no: 0,
                        receipt
                    });
                    resolve();
                }).on(evm_types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                    setPlaceBidState({
                        type: evm_types/* TransactionStateType.HASH */.n$.HASH,
                        hash
                    });
                    resolve();
                }).on(evm_types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                    setPlaceBidState({
                        type: evm_types/* TransactionStateType.FAILED */.n$.FAILED,
                        error
                    });
                    reject(error);
                });
            }
        });
    }, [
        account,
        chainId,
        is24Auction,
        editionNumber,
        artistAcceptingBidsV2_contract,
        cANFTMarket_contract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setPlaceBidState({
            type: evm_types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        placeBidState,
        placeBidCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(37732);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(1650);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/MakeOfferDialog.tsx



















const MakeOfferDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0
        },
        details: {
            color: '#999',
            fontSize: '14px',
            margin: '0px'
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
    const chainId = (0,useChainId/* useChainId */.xx)();
    const paymentTokens = resolvePaymentTokensOnCryptoartAI(chainId) ?? [];
    const selectedPaymentToken = (0,head/* default */.Z)(paymentTokens);
    const { amount , token , balance , setAmount , setToken  } = (0,useFungibleTokenWatched/* useFungibleTokenWatched */.g)(selectedPaymentToken);
    const [atLeastBidValue, setAtLeastBidValue] = (0,react.useState)(0);
    (0,react.useEffect)(()=>{
        const price = new (bignumber_default())(is24Auction ? assetSource?.latestBidVo?.priceInEth : assetSource?.trade?.latestBid);
        setAtLeastBidValue(price.isFinite() ? price.plus(price.gte(1) ? '0.1' : '0.01').toNumber() : 0.01);
    }, [
        assetSource?.latestBidVo
    ]);
    const [placeBidState, placeBidCallback, resetCallback] = usePlaceBidCallback(is24Auction, assetSource?.editionNumber ?? '0');
    const onMakeOffer = (0,react.useCallback)(()=>{
        placeBidCallback(new (bignumber_default())(amount).shiftedBy(selectedPaymentToken?.decimals ?? 18).toNumber());
    }, [
        placeBidCallback,
        amount
    ]);
    const assetLink = resolveAssetLinkOnCryptoartAI(assetSource?.creator?.username, assetSource?.token_id, chainId);
    const shareText = token ? t((0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_cryptoartai_offer_share' : 'plugin_cryptoartai_offer_share_no_official_account', {
        amount: amount,
        symbol: token?.value?.symbol,
        title: assetSource?.title,
        assetLink: assetLink,
        account: (0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
    }) : '';
    const { setDialog: setTransactionDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (0,react.useCallback)((ev)=>{
        if (!ev.open) {
            if (placeBidState.type === evm_types/* TransactionStateType.HASH */.n$.HASH) onClose();
            if (placeBidState.type === evm_types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) {
                asset?.retry();
            }
        }
        resetCallback();
    }, [
        placeBidState,
        onClose
    ]));
    (0,react.useEffect)(()=>{
        if (placeBidState.type === evm_types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            shareText,
            state: placeBidState,
            summary: (assetSource?.is24Auction ? t('plugin_collectible_place_a_bid') : t('plugin_collectible_make_an_offer')) + ' ' + assetSource?.title
        });
    }, [
        placeBidState
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
        if (balance_.isZero() || amount_.gt((0,formatter/* formatBalance */.az)(balance.value, token?.value?.decimals, 4))) return t('plugin_collectible_insufficient_balance');
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
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        className: classes.player,
                                        src: assetSource?.shareUrl,
                                        alt: assetSource?.title
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    className: classes.player,
                                    src: assetSource?.shareUrl,
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
                                disableNativeToken: !paymentTokens.some(utils_address/* isNativeTokenAddress */.qw),
                                onAmountChange: setAmount,
                                onTokenChange: setToken,
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
                                children: t('plugin_cryptoartai_current_balance_is') + (0,formatter/* formatBalance */.az)(balance.value, token?.value?.decimals, 4) + ' ETH'
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.buttons,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                    className: classes.button,
                                    variant: "contained",
                                    disabled: !!validationMessage,
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
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { knownOriginDigitalAssetV2_contract  } = useCryptoArtAI_Contract();
    const [purchaseState, setPurchaseState] = (0,useTransactionState/* useTransactionState */.p)();
    const purchaseCallback = (0,react.useCallback)(async ()=>{
        if (!knownOriginDigitalAssetV2_contract) {
            setPurchaseState({
                type: evm_types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setPurchaseState({
            type: evm_types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            value: (0,base_src/* toFixed */.FH)(priceInWei),
            gas: await knownOriginDigitalAssetV2_contract.methods.purchase(editionNumber).estimateGas({
                from: account,
                value: (0,base_src/* toFixed */.FH)(priceInWei)
            }).catch((error)=>{
                setPurchaseState({
                    type: evm_types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            knownOriginDigitalAssetV2_contract.methods.purchase(editionNumber).send(config).on(evm_types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setPurchaseState({
                    type: evm_types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve();
            }).on(evm_types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setPurchaseState({
                    type: evm_types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve();
            }).on(evm_types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setPurchaseState({
                    type: evm_types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        chainId,
        knownOriginDigitalAssetV2_contract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setPurchaseState({
            type: evm_types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        purchaseState,
        purchaseCallback,
        resetCallback
    ];
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
    const chainId = (0,useChainId/* useChainId */.xx)();
    const paymentTokens = resolvePaymentTokensOnCryptoartAI(chainId) ?? [];
    const selectedPaymentToken = (0,head/* default */.Z)(paymentTokens);
    const { token , balance  } = (0,useFungibleTokenWatched/* useFungibleTokenWatched */.g)(selectedPaymentToken);
    const [purchaseState, onCheckout, resetCallback] = usePurchaseCallback(asset?.value?.editionNumber ?? '0', asset?.value?.priceInWei > 0 ? asset?.value?.priceInWei : new (bignumber_default())(0.01).shiftedBy(selectedPaymentToken?.decimals ?? 18).toNumber());
    const assetLink = resolveAssetLinkOnCryptoartAI(asset?.value?.creator?.username, asset?.value?.token_id, chainId);
    const shareText = token ? t((0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_cryptoartai_share' : 'plugin_cryptoartai_share_no_official_account', {
        amount: asset?.value?.priceInEth,
        symbol: token?.value?.symbol,
        title: asset?.value?.title,
        assetLink: assetLink,
        account: (0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
    }) : '';
    const { setDialog: setTransactionDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (0,react.useCallback)((ev)=>{
        if (!ev.open) {
            if (purchaseState.type === evm_types/* TransactionStateType.HASH */.n$.HASH) onClose();
        }
        resetCallback();
    }, [
        purchaseState,
        onClose
    ]));
    (0,react.useEffect)(()=>{
        if (purchaseState.type === evm_types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            shareText,
            state: purchaseState,
            summary: t('plugin_cryptoartai_buy') + ' ' + asset?.value?.title
        });
    }, [
        purchaseState
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        if (!isVerified) return t('plugin_collectible_check_tos_document');
        if (new (bignumber_default())(asset?.value?.priceInEth).gt((0,formatter/* formatBalance */.az)(balance.value, token?.value?.decimals, 4))) {
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
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        className: classes.player,
                                        src: asset.value.shareUrl,
                                        alt: asset.value.title
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
                                                children: (0,formatter/* formatBalance */.az)(balance.value, token?.value?.decimals, 4)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                className: classes.button,
                                fullWidth: true,
                                variant: "contained",
                                disabled: !!validationMessage,
                                onClick: onCheckout,
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
            marginLeft: theme.spacing(-0.5),
            marginRight: theme.spacing(-0.5)
        },
        button: {
            flex: 1,
            margin: `0 ${theme.spacing(0.5)}`
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
        sx: {
            marginTop: 1
        },
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
            !assetSource?.isSoldOut && !assetSource?.is24Auction && (!assetSource?.trade?.latestBid || assetSource?.trade?.latestBid < assetSource?.priceInEth) && assetSource?.trade?.isCanAuction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
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

;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/Collectible.tsx



















const Collectible_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            border: `solid 1px ${theme.palette.divider}`,
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
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { asset , events , tabIndex , setTabIndex  } = CollectibleState.useContainer();
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
                                src: (assetSource?.owner[0]?.ownerAvator ?? assetSource?.creator?.avatorPath) ?? ''
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
                                                soldPrice: soldPrice,
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionBar, {})
        ]
    });
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
;// CONCATENATED MODULE: ./src/plugins/CryptoartAI/SNSAdaptor/PostInspector.tsx




function PostInspector(props) {
    const token = props.payload;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: token.chain_id,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleState.Provider, {
            initialState: {
                chainId: token.chain_id,
                creator: token.creator,
                tokenId: token.token_id,
                contractAddress: token.contractAddress
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Collectible, {})
        })
    });
}

// EXTERNAL MODULE: ./src/plugins/CryptoartAI/base.ts
var CryptoartAI_base = __webpack_require__(2189);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(81148);
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
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 84002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SelectTokenAmountPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2666);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86248);
/* harmony import */ var _web3_UI_TokenAmountPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79154);




function SelectTokenAmountPanel(props) {
    const { amount , balance , token , disableNativeToken =false , disableSearchBar =false , onAmountChange , onTokenChange , FungibleTokenListProps , TokenAmountPanelProps ,  } = props;
    // #region select token
    const pickToken = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .usePickToken */ .yQ)();
    const onSelectTokenChipClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        const picked = await pickToken({
            disableNativeToken,
            disableSearchBar,
            ...FungibleTokenListProps
        });
        if (picked) onTokenChange(picked);
    }, [
        disableNativeToken,
        disableSearchBar,
        FungibleTokenListProps
    ]);
    // #endregion
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_web3_UI_TokenAmountPanel__WEBPACK_IMPORTED_MODULE_3__/* .TokenAmountPanel */ .x, {
        amount: amount,
        balance: balance,
        token: token,
        label: "Amount",
        onAmountChange: onAmountChange,
        ...TokenAmountPanelProps,
        SelectTokenChip: {
            ...TokenAmountPanelProps?.SelectTokenChip,
            ChipProps: {
                ...TokenAmountPanelProps?.SelectTokenChip?.ChipProps,
                onClick: onSelectTokenChipClick
            }
        }
    });
}


/***/ }),

/***/ 57200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ Markdown)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/remarkable@2.0.1/node_modules/remarkable/dist/esm/index.browser.js
var index_browser = __webpack_require__(54030);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useRemarkable.ts


function useRemarkable(md) {
    return (0,react.useMemo)(()=>{
        const remarkable = new index_browser/* Remarkable */._();
        return remarkable.render(md);
    }, [
        md
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            color: 'inherit',
            fontSize: 'inherit',
            fontFamily: 'sans-serif',
            '& p, & li': {
                margin: 0,
                fontSize: 12,
                color: theme.palette.text.secondary
            },
            '& p + p': {
                marginTop: theme.spacing(0.5)
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
                fontSize: 14,
                fontWeight: 500
            },
            '& img': {
                maxWidth: '100%'
            },
            '& a': {
                color: theme.palette.text.primary
            }
        }
    })
);
function Markdown(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const html = useRemarkable(props.content);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        dangerouslySetInnerHTML: {
            __html: html
        },
        className: classes.root
    });
}


/***/ }),

/***/ 12777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useFungibleTokenDetailed)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29782);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38443);




function useFungibleTokenDetailed(type, address, token) {
    const r1 = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenDetailed */ .J)();
    const r2 = (0,_useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenDetailed */ .k)(type === _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : '', token);
    switch(type){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type);
    }
}


/***/ }),

/***/ 45603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useFungibleTokenWatched)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _useFungibleTokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52813);
/* harmony import */ var _useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12777);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38443);





function useFungibleTokenWatched(initialToken) {
    const nativeToken = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenDetailed */ .J)();
    const [token = nativeToken.value, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialToken);
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const balance = (0,_useFungibleTokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useFungibleTokenBalance */ .V)(token?.type ?? _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native, token?.address ?? '');
    const detailed = (0,_useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleTokenDetailed */ .j)(token?.type ?? _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native, token?.address ?? '');
    return {
        amount,
        token: detailed,
        balance,
        setAmount,
        setToken
    };
}


/***/ })

}]);