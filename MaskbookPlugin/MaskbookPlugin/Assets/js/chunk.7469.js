"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5428],{

/***/ 72981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PostDialogHint)
/* harmony export */ });
/* unused harmony export PostDialogHintUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22593);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37186);
/* harmony import */ var _DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93569);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80050);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71299);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45513);
/* harmony import */ var _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70205);
/* harmony import */ var _resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75388);











const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            // TODO: is it correct? (what about twitter?)
            padding: _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_8__/* .isMobileFacebook */ .q ? 0 : '8px'
        },
        text: {
            fontSize: 14,
            color: '#606770',
            marginLeft: theme.spacing(1)
        },
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '8px 10px',
            borderBottom: '1px solid #dadde1'
        }
    })
);
const EntryIconButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
        size: "large",
        className: classes.button,
        onClick: props.onHintButtonClicked,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_9__/* .MaskbookSharpIcon */ .ck, {
            color: "primary"
        })
    }));
});
const PostDialogHintUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PostDialogHintUI1({ onHintButtonClicked  }) {
    const { classes  } = useStyles();
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    return _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_8__/* .isMobileFacebook */ .q ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.wrapper,
        onClick: onHintButtonClicked,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EntryIconButton, {
                onHintButtonClicked: ()=>undefined
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes.text,
                children: t('post_modal_hint__button')
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EntryIconButton, {
        onHintButtonClicked: onHintButtonClicked
    });
});
function PostDialogHint(props) {
    const identities = (0,_DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_4__/* .useMyIdentities */ .FA)();
    const connecting = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_5__.useValueRef)(_settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[_social_network__WEBPACK_IMPORTED_MODULE_7__.activatedSocialNetworkUI.networkIdentifier]);
    if (connecting || identities.length === 0) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PostDialogHintUI, {
        onHintButtonClicked: ()=>{
        },
        ...props
    }));
}


/***/ }),

/***/ 39562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ SearchResultBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66751);


const PluginRenderer = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createInjectHooksRenderer */ .EK)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSNSAdaptor */ .Pz, (x)=>x.SearchBoxComponent
);
function SearchResultBox(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginRenderer, {
    }));
}


/***/ }),

/***/ 25738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ ToolboxHint)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(85290);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(66751);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/FiberManualRecord.js
var FiberManualRecord = __webpack_require__(46670);
// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(75388);
// EXTERNAL MODULE: ./src/resources/tool-icon/index.ts
var tool_icon = __webpack_require__(30234);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(64921);
// EXTERNAL MODULE: ./src/utils/hooks/useMenu.tsx
var useMenu = __webpack_require__(17972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(74712);
// EXTERNAL MODULE: ./src/plugins/Transak/constants.ts
var constants = __webpack_require__(80165);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts
var Trader_constants = __webpack_require__(71765);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(8672);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/plugins/Transak/messages.ts
var Transak_messages = __webpack_require__(29440);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var Trader_messages = __webpack_require__(62323);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/utils/flags.ts
var flags = __webpack_require__(55);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(5075);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/useTheme.js
var useTheme = __webpack_require__(7931);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(98051);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useBlockNumberOfChain.ts



/**
 * Get the current block number of specified chain
 */ function useBlockNumberOfChain(chainId) {
    const { value  } = (0,useAsync/* default */.Z)(()=>service/* default.Ethereum.request */.ZP.Ethereum.request({
            method: web3_shared_src/* EthereumMethodType.ETH_BLOCK_NUMBER */.W8g.ETH_BLOCK_NUMBER
        }, {
            chainId
        })
    , [
        chainId
    ]);
    return value ? Number.parseInt(value, 10) : 0;
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimablePoolsByWeb3.ts






const SWAP_SUCCESS_TOPIC = (0,lib.sha3)('SwapSuccess(bytes32,address,address,address,uint256,uint256,uint128,bool)');
const SWAP_SUCCESS_TYPES = [
    {
        type: 'address',
        name: 'from_address'
    },
    {
        type: 'address',
        name: 'to_address'
    },
    {
        type: 'uint256',
        name: 'from_value'
    },
    {
        type: 'uint256',
        name: 'to_value'
    },
    {
        type: 'uint128',
        name: 'input_total'
    },
    {
        type: 'bool',
        name: 'claimed'
    }, 
];
function useClaimablePoolsByWeb3(chainId) {
    const web3 = (0,web3_shared_src/* useWeb3 */.$6B)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const currentBlock = useBlockNumberOfChain(chainId);
    const { ITO2_CONTRACT_CREATION_BLOCK_HEIGHT: fromBlock , ITO2_CONTRACT_ADDRESS: address  } = (0,web3_shared_src/* useITOConstants */.mgD)(chainId);
    // https://github.com/binance-chain/bsc/issues/113
    // getPastLogs block range limitations on BSC is only 5000, which is absurd. Sometimes 4500 also fails.
    const maxBlockRange = chainId === web3_shared_src/* ChainId.BSC */.a_e.BSC ? 4500 : 10000;
    const queryParams = (0,web3_shared_src/* useGetPastLogsParams */.bDE)(fromBlock, currentBlock, maxBlockRange, {
        address,
        topics: [
            SWAP_SUCCESS_TOPIC
        ]
    });
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!currentBlock) return [];
        const logs = (0,lodash.flatten)(await Promise.all(queryParams.map((queryParam)=>service/* default.Ethereum.getPastLogs */.ZP.Ethereum.getPastLogs(queryParam, {
                chainId
            })
        )));
        return logs.reduce((acc, log)=>{
            const data = web3.eth.abi.decodeParameters(SWAP_SUCCESS_TYPES, log.data);
            const pid = log.topics[1];
            if (!data.claimed && acc.every((p)=>p.pid !== pid
            )) {
                acc.push({
                    pid,
                    token: {
                        address: data.to_address,
                        type: web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20
                    }
                });
            }
            return acc;
        }, []);
    }, [
        account,
        address,
        chainId,
        JSON.stringify(queryParams),
        currentBlock
    ]);
}

// EXTERNAL MODULE: ./src/plugins/ITO/messages.ts
var ITO_messages = __webpack_require__(33268);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimablePoolsBySubgraph.ts



function useClaimablePoolsBySubgraph(chainId) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const results = await ITO_messages/* PluginITO_RPC.getAllPoolsAsBuyer */.k.getAllPoolsAsBuyer(account, chainId);
        return results.map((r)=>r.pool
        );
    }, [
        account,
        chainId
    ]);
}

// EXTERNAL MODULE: ./src/plugins/ITO/Worker/apis/checkAvailability.ts
var checkAvailability = __webpack_require__(40907);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimablePools.ts







function useClaimablePools(chainId, isMainnetOld = false) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { ITO_CONTRACT_ADDRESS , ITO2_CONTRACT_ADDRESS  } = (0,web3_shared_src/* useITOConstants */.mgD)(chainId);
    const contractAddress = isMainnetOld ? ITO_CONTRACT_ADDRESS : ITO2_CONTRACT_ADDRESS;
    //#region fetch claimable pool
    const { value: poolsFromSubgraph = [] , loading: loadingSubgraph  } = useClaimablePoolsBySubgraph(chainId);
    const { value: poolsFromWeb3 = [] , loading: loadingWeb3  } = useClaimablePoolsByWeb3(chainId);
    const loadingPool = loadingSubgraph || loadingWeb3;
    const isPoolsFromWeb3Empty = poolsFromWeb3.length === 0;
    const _pools = (0,lodash.unionBy)(poolsFromWeb3, poolsFromSubgraph, 'pid');
    //#endregion
    //#region fetch list of token detail
    const _tokens = (0,react.useMemo)(()=>_pools.reduce((acc, cur)=>{
            if (acc.every((p)=>p.address !== cur.token.address
            )) acc.push(cur.token);
            return acc;
        }, [])
    , [
        JSON.stringify(_pools)
    ]);
    // No need to fetch token details again since subgraph returns it.
    const { value: tokens , loading: loadingTokens  } = (0,web3_shared_src/* useFungibleTokensDetailed */.bs0)(_tokens, chainId);
    const pools = isPoolsFromWeb3Empty ? _pools : _pools.map((p, i)=>{
        if (tokens) {
            const token = tokens.find((t)=>t.address === p.token.address
            );
            if (token) return {
                ...p,
                token
            };
        }
        return p;
    });
    //#endregion
    const loading = loadingPool || loadingTokens;
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const chainDetailed = (0,web3_shared_src/* getChainDetailed */.$Gt)(chainId);
        if (!chainDetailed || loading) return undefined;
        if (isMainnetOld && chainId !== web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet || pools.length === 0) return [];
        if (!contractAddress) return undefined;
        const raws = await Promise.all(pools.map(async (value)=>{
            const availability = await (0,checkAvailability/* checkAvailability */.g)(value.pid, account, contractAddress, chainId, isMainnetOld);
            return {
                availability,
                ...value
            };
        }));
        const swappedTokens = raws.filter((raw)=>raw.availability.exchange_addrs.length !== 0 && !raw.availability.claimed && raw.availability.swapped !== '0' && Number(raw.availability.end_time) * 1000 < Number(raw.availability.unlock_time) * 1000
        ).map((raw)=>{
            return {
                pids: [
                    raw.pid
                ],
                amount: Number(raw.availability.swapped),
                token: raw.token,
                isClaimable: raw.availability.unlocked,
                unlockTime: new Date(Number(raw.availability.unlock_time) * 1000)
            };
        }).reduce((acc, cur)=>{
            if (acc.some(checkClaimable(cur)) && cur.isClaimable) {
                // merge same claimable tokens to one
                const existToken = acc.find(checkClaimable(cur));
                const existTokenIndex = acc.findIndex(checkClaimable(cur));
                acc[existTokenIndex] = mergeTokens(existToken, cur);
            } else if (acc.some(checkUnlockTimeEqual(cur))) {
                // merge same unlock time tokens to one
                const existToken = acc.find(checkUnlockTimeEqual(cur));
                const existTokenIndex = acc.findIndex(checkUnlockTimeEqual(cur));
                acc[existTokenIndex] = mergeTokens(existToken, cur);
            } else {
                acc.push(cur);
            }
            return acc;
        }, []).sort((a, b)=>b.unlockTime.getTime() - a.unlockTime.getTime()
        );
        return swappedTokens;
    }, [
        JSON.stringify(pools),
        account,
        chainId,
        loading,
        contractAddress
    ]);
}
function checkUnlockTimeEqual(cur) {
    return (t)=>t.token.address === cur.token.address && t.unlockTime.getTime() === cur.unlockTime.getTime()
    ;
}
function checkClaimable(cur) {
    return (t)=>t.token.address === cur.token.address && t.isClaimable
    ;
}
function mergeTokens(a, b) {
    a.pids = a.pids.concat(b.pids);
    a.amount += b.amount;
    return a;
}

// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimCallback.ts
var useClaimCallback = __webpack_require__(418);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(77016);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx
var EthereumChainBoundary = __webpack_require__(85249);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ClaimAllDialog.tsx




















const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        wrapper: {
            padding: theme.spacing(4)
        },
        actionButton: {
            margin: '0 auto',
            minHeight: 'auto',
            width: '100%',
            fontSize: 18,
            fontWeight: 400,
            backgroundColor: '#1C68F3',
            '&:hover': {
                backgroundColor: '#1854c4'
            }
        },
        footer: {
            marginTop: theme.spacing(2),
            zIndex: 1
        },
        footnote: {
            fontSize: 10,
            marginRight: theme.spacing(1)
        },
        footLink: {
            cursor: 'pointer',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            }
        },
        maskbook: {
            width: 40,
            height: 10
        },
        tokenCardWrapper: {
            width: '100%',
            color: 'white',
            maxHeight: 450,
            overflow: 'auto',
            paddingTop: theme.spacing(1),
            marginBottom: theme.spacing(0.5)
        },
        tokenCard: {
            width: '100%',
            color: 'white',
            flexDirection: 'column',
            padding: 0,
            marginBottom: theme.spacing(1.5),
            alignItems: 'baseline',
            justifyContent: 'space-between'
        },
        cardHeader: {
            display: 'flex',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            height: 42,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            '-webkit-font-smoothing': 'antialiased',
            fontSize: 14
        },
        cardHeaderLocked: {
            background: theme.palette.mode === 'light' ? '#EBEEF0' : '#2F3336',
            color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
        },
        cardHeaderClaimable: {
            background: '#77E0B5',
            color: 'white'
        },
        cardContent: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            height: 62,
            fontSize: 18
        },
        cardContentLocked: {
            background: theme.palette.mode === 'light' ? 'white' : '',
            border: `1px solid ${theme.palette.mode === 'light' ? '#EBEEF0' : '#2F3336'}`
        },
        cardContentClaimable: {
            background: theme.palette.mode === 'light' ? 'rgba(119, 224, 181, 0.15)' : 'rgba(56, 221, 192, 0.2)',
            border: '1px solid rgba(56, 221, 192, 0.2)'
        },
        content: {
            marginBottom: theme.spacing(2)
        },
        contentTitle: {
            fontSize: 18,
            fontWeight: 300
        },
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300,
            color: theme.palette.mode === 'light' ? '#15181B' : '#D9D9D9'
        },
        tabs: {
            backgroundColor: (0,src/* getMaskColor */.nb)(theme).twitterBackground,
            width: 536,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            '& .Mui-selected': {
                backgroundColor: '#1C68F3',
                color: '#fff'
            },
            borderRadius: 4
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        contentWrapper: {
            minHeight: 350,
            marginTop: theme.spacing(2)
        },
        emptyContentWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 350
        },
        lockIcon: {
            width: 22,
            height: 22,
            marginRight: 6
        },
        textWrapper: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: theme.spacing(1.5)
        },
        unlockTime: {
            marginRight: theme.spacing(1.5)
        },
        tokenBalance: {
            marginLeft: theme.spacing(1.5),
            color: theme.palette.mode === 'light' ? '#15181B' : '#D9D9D9'
        },
        tokenSymbol: {
            color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
        }
    })
);
function ClaimAllDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { open , onClose  } = props;
    const currentChainId = (0,web3_shared_src/* useChainId */.xxU)();
    const [chainId, setChainId] = (0,react.useState)([
        web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet,
        web3_shared_src/* ChainId.BSC */.a_e.BSC,
        web3_shared_src/* ChainId.Matic */.a_e.Matic
    ].includes(currentChainId) ? currentChainId : web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet);
    const { value: swappedTokens , loading , retry  } = useClaimablePools(chainId);
    const { ITO_CONTRACT_ADDRESS: ITO_CONTRACT_ADDRESS_MAINNET  } = (0,web3_shared_src/* useITOConstants */.mgD)(web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet);
    const { ITO2_CONTRACT_ADDRESS  } = (0,web3_shared_src/* useITOConstants */.mgD)(chainId);
    // Todo: Remove the code after the period that old ITO is being used and continues to be used for a while
    const { value: swappedTokensOld , loading: loadingOld , retry: retryOld  } = useClaimablePools(chainId, true);
    const { classes  } = useStyles();
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const popEnqueueSnackbar = (0,react.useCallback)((variant)=>enqueueSnackbar(t('plugin_ito_claim_all_title'), {
            variant,
            preventDuplicate: true,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            }
        })
    , [
        enqueueSnackbar
    ]);
    const claimablePids = (0,lodash.uniq)((0,lodash.flatten)(swappedTokens === null || swappedTokens === void 0 ? void 0 : swappedTokens.filter((t1)=>t1.isClaimable
    ).map((t1)=>t1.pids
    )));
    const claimablePidsOld = (0,lodash.uniq)((0,lodash.flatten)(swappedTokensOld === null || swappedTokensOld === void 0 ? void 0 : swappedTokensOld.filter((t1)=>t1.isClaimable
    ).map((t1)=>t1.pids
    )));
    const [claimState, claimCallback, resetClaimCallback] = (0,useClaimCallback/* useClaimCallback */.N)(claimablePids, ITO2_CONTRACT_ADDRESS);
    const [claimStateOld, claimCallbackOld, resetClaimCallbackOld] = (0,useClaimCallback/* useClaimCallback */.N)(claimablePidsOld, ITO_CONTRACT_ADDRESS_MAINNET);
    const [initLoading, setInitLoading] = (0,react.useState)(true);
    (0,react.useLayoutEffect)(()=>{
        setTimeout(()=>setInitLoading(false)
        , 1000);
    }, []);
    const onClaimButtonClick = (0,react.useCallback)(()=>{
        claimCallback();
    }, [
        claimCallback,
        chainId
    ]);
    const onClaimButtonClickOld = (0,react.useCallback)(()=>{
        claimCallbackOld();
    }, [
        claimCallbackOld,
        chainId
    ]);
    const { setDialog: setClaimTransactionDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (claimState.type === web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED || claimStateOld.type === web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED) popEnqueueSnackbar('error');
        if (claimState.type === web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED) {
            resetClaimCallback();
            retry();
            onClose();
            popEnqueueSnackbar('success');
        }
        if (claimStateOld.type === web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED) {
            resetClaimCallbackOld();
            retryOld();
            onClose();
            popEnqueueSnackbar('success');
        }
    });
    (0,react.useEffect)(()=>{
        if (claimStateOld.type === web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        if (claimStateOld.type === web3_shared_src/* TransactionStateType.HASH */.n$V.HASH) {
            const { hash  } = claimStateOld;
            setTimeout(()=>{
                window.open((0,web3_shared_src/* resolveTransactionLinkOnExplorer */.z4)(chainId, hash), '_blank', 'noopener noreferrer');
            }, 2000);
            return;
        }
        const claimableTokens = swappedTokensOld.filter((t1)=>t1.isClaimable
        );
        const summary = 'Claim ' + new Intl.ListFormat('en').format(claimableTokens.map((t1)=>(0,web3_shared_src/* formatBalance */.azF)(t1.amount, t1.token.decimals) + ' ' + t1.token.symbol
        ));
        setClaimTransactionDialog({
            open: true,
            state: claimStateOld,
            title: t('plugin_ito_claim_all_title'),
            summary
        });
    }, [
        claimStateOld,
        swappedTokensOld /* update tx dialog only if state changed */ 
    ]);
    (0,react.useEffect)(()=>{
        if (claimState.type === web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        if (claimState.type === web3_shared_src/* TransactionStateType.HASH */.n$V.HASH) {
            const { hash  } = claimState;
            setTimeout(()=>{
                window.open((0,web3_shared_src/* resolveTransactionLinkOnExplorer */.z4)(chainId, hash), '_blank', 'noopener noreferrer');
            }, 2000);
            return;
        }
        const claimableTokens = swappedTokens.filter((t1)=>t1.isClaimable
        );
        const summary = 'Claim ' + new Intl.ListFormat('en').format(claimableTokens.map((t1)=>(0,web3_shared_src/* formatBalance */.azF)(t1.amount, t1.token.decimals) + ' ' + t1.token.symbol
        ));
        setClaimTransactionDialog({
            open: true,
            state: claimState,
            title: t('plugin_ito_claim_all_title'),
            summary
        });
    }, [
        claimState,
        swappedTokens /* update tx dialog only if state changed */ 
    ]);
    const tabProps = {
        tabs: [
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: "ETH"
                }),
                sx: {
                    p: 0
                },
                cb: ()=>setChainId(web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet)
            },
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: "BSC"
                }),
                sx: {
                    p: 0
                },
                cb: ()=>setChainId(web3_shared_src/* ChainId.BSC */.a_e.BSC)
            },
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: "Polygon/Matic"
                }),
                sx: {
                    p: 0
                },
                cb: ()=>setChainId(web3_shared_src/* ChainId.Matic */.a_e.Matic)
            }, 
        ],
        index: [
            web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet,
            web3_shared_src/* ChainId.BSC */.a_e.BSC,
            web3_shared_src/* ChainId.Matic */.a_e.Matic
        ].indexOf(chainId),
        classes,
        hasOnlyOneChild: true
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        title: t('plugin_ito_claim_all_dialog_title'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                    ...tabProps
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.contentWrapper,
                    children: loading || loadingOld || initLoading || !swappedTokens || !swappedTokensOld ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.emptyContentWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                            size: 24
                        })
                    }) : swappedTokens.length > 0 || swappedTokensOld.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            swappedTokensOld.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.content,
                                children: [
                                    swappedTokens.length > 0 && swappedTokensOld.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        color: "textPrimary",
                                        className: classes.contentTitle,
                                        children: t('plugin_ito_claim_all_old_contract')
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {
                                        chainId: chainId,
                                        onClaimButtonClick: onClaimButtonClickOld,
                                        swappedTokens: swappedTokensOld,
                                        claimablePids: claimablePidsOld
                                    })
                                ]
                            }) : null,
                            swappedTokens.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.content,
                                children: [
                                    swappedTokens.length > 0 && swappedTokensOld.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        color: "textPrimary",
                                        className: classes.contentTitle,
                                        children: t('plugin_ito_claim_all_new_contract')
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {
                                        chainId: chainId,
                                        onClaimButtonClick: onClaimButtonClick,
                                        swappedTokens: swappedTokens,
                                        claimablePids: claimablePids
                                    })
                                ]
                            }) : null
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.emptyContentWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: [
                                t('plugin_ito_no_claimable_token'),
                                " "
                            ]
                        })
                    })
                })
            ]
        })
    }));
}
function Content(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const { onClaimButtonClick , swappedTokens , claimablePids , chainId  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.tokenCardWrapper,
                children: swappedTokens.map((swappedToken, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwappedToken, {
                            i: i,
                            swappedToken: swappedToken
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                chainId: chainId,
                noSwitchNetworkTip: true,
                switchButtonStyle: {
                    backgroundColor: '#1C68F3',
                    '&:hover': {
                        backgroundColor: '#1854c4'
                    },
                    minHeight: 'auto',
                    width: '100%',
                    fontSize: 18,
                    fontWeight: 400
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        className: classes.actionButton,
                        variant: "contained",
                        disabled: claimablePids.length === 0,
                        size: "large",
                        onClick: onClaimButtonClick,
                        children: t('plugin_ito_claim_all')
                    })
                })
            })
        ]
    }));
}
function SwappedToken({ i , swappedToken  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const theme = (0,useTheme/* default */.Z)();
    return swappedToken.token ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.tokenCard,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()(classes.cardHeader, swappedToken.isClaimable ? classes.cardHeaderClaimable : classes.cardHeaderLocked),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.textWrapper,
                        children: [
                            swappedToken.isClaimable ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.lockIcon,
                                src: theme.palette.mode === 'light' ? new URL(/* asset import */ __webpack_require__(96344), __webpack_require__.b).toString() : new URL(/* asset import */ __webpack_require__(15515), __webpack_require__.b).toString()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                children: [
                                    swappedToken.token.symbol,
                                    ' ',
                                    swappedToken.isClaimable ? t('plugin_ito_claim_all_status_unclaimed') : t('plugin_ito_claim_all_status_locked'),
                                    ":"
                                ]
                            })
                        ]
                    }),
                    swappedToken.isClaimable ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.unlockTime,
                        children: t('plugin_ito_claim_all_unlock_time', {
                            time: (0,format/* default */.Z)(swappedToken.unlockTime, 'yyyy-MM-dd HH:mm:ss')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classnames_default()(classes.cardContent, swappedToken.isClaimable ? classes.cardContentClaimable : classes.cardContentLocked),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                    classes: {
                        balance: classes.tokenBalance,
                        symbol: classes.tokenSymbol
                    },
                    value: swappedToken.amount,
                    decimals: swappedToken.token.decimals,
                    symbol: swappedToken.token.symbol
                })
            })
        ]
    }, i) : null;
}

// EXTERNAL MODULE: ./src/components/shared/WalletIcon.tsx
var WalletIcon = __webpack_require__(30838);
// EXTERNAL MODULE: ./src/plugins/ITO/base.ts
var base = __webpack_require__(49270);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ./src/plugin-infra/I18NFieldRender.tsx
var I18NFieldRender = __webpack_require__(88892);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(44846);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/ToolboxHint.tsx




























const ToolboxHint_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        paper: {
            borderRadius: 4,
            transform: 'translateY(-150px) !important',
            boxShadow: `${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px' : 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px'}`,
            backgroundImage: 'none'
        },
        menu: {
            paddingTop: 0,
            paddingBottom: 0
        },
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            cursor: 'pointer',
            [theme.breakpoints.down('lg')]: {
                transform: 'translateX(0px)'
            },
            '&:hover': {
                '& $title': {
                    color: theme.palette.primary.main
                },
                '& $icon': {
                    color: theme.palette.primary.main
                }
            }
        },
        button: {
            display: 'flex',
            padding: '12px 26px 12px 14px',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.down('lg')]: {
                transform: 'translateX(0px)',
                padding: 14
            }
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(15, 20, 25)',
            fontSize: 20,
            marginLeft: 22,
            lineHeight: 1.35,
            [theme.breakpoints.down('lg')]: {
                display: 'none'
            }
        },
        menuItem: {
        },
        text: {
            color: theme.palette.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(15, 20, 25)',
            marginLeft: 22
        },
        iconWrapper: {
            position: 'relative',
            height: 24,
            width: 24
        },
        icon: {
            color: theme.palette.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(15, 20, 25)',
            width: 24,
            height: 24,
            fontSize: 24
        },
        mask: {
            color: theme.palette.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(15, 20, 25)',
            width: 22,
            height: 22,
            fontSize: 22
        },
        chainIcon: {
            fontSize: 18,
            width: 18,
            height: 18,
            marginLeft: theme.spacing(0.5)
        }
    })
);
function ToolboxHint(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(ToolboxHint_useStyles(), props);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const selectedWallet = (0,web3_shared_src/* useWallet */.Osb)();
    const chainColor = (0,web3_shared_src/* useChainColor */.x56)();
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const chainDetailed = (0,web3_shared_src/* useChainDetailed */.K1)();
    const operatingSupportedChainMapping = (0,plugin_infra_src/* useActivatedPluginSNSAdaptorWithOperatingChainSupportedMet */.mF)();
    //#region recent pending transactions
    const { value: pendingTransactions = [] , retry: retryTransactions  } = (0,useRecentTransactions/* useRecentTransactions */.S)(web3_shared_src/* TransactionStatusType.NOT_DEPEND */.g8n.NOT_DEPEND);
    //#endregion
    //#region Encrypted message
    const openEncryptedMessage = (0,react.useCallback)((id)=>messages/* MaskMessage.events.requestComposition.sendToLocal */.y.events.requestComposition.sendToLocal({
            reason: 'timeline',
            open: true,
            options: {
                startupPlugin: id
            }
        })
    , []);
    //#endregion
    //#region Wallet
    const { openDialog: openWalletStatusDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    const { openDialog: openSelectWalletDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    //#endregion
    //#region Buy currency
    const transakPluginEnabled = (0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)().find((x)=>x.ID === constants/* PLUGIN_ID */.Uu
    );
    const { setDialog: setBuyDialog  } = (0,shared_src.useRemoteControlledDialog)(Transak_messages/* PluginTransakMessages.buyTokenDialogUpdated */.l.buyTokenDialogUpdated);
    const openBuyCurrency = (0,react.useCallback)(()=>{
        setBuyDialog({
            open: true,
            address: account
        });
    }, []);
    //#endregion
    //#region Swap
    const swapPluginEnabled = (0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)().find((x)=>x.ID === Trader_constants/* PLUGIN_IDENTIFIER */.J3
    );
    const { openDialog: openSwapDialog  } = (0,shared_src.useRemoteControlledDialog)(Trader_messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    //#endregion
    //#region Claim All ITO
    const { open: isClaimAllDialogOpen , onOpen: onClaimAllDialogOpen , onClose: onClaimAllDialogClose ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    //#endregion
    const items = [
        {
            ...tool_icon/* ToolIconURLs.encryptedmsg */.m.encryptedmsg,
            onClick: ()=>openEncryptedMessage()
        },
        {
            ...tool_icon/* ToolIconURLs.token */.m.token,
            onClick: openBuyCurrency,
            hide: !(account && flags/* Flags.transak_enabled */.vU.transak_enabled && transakPluginEnabled)
        },
        {
            ...tool_icon/* ToolIconURLs.swap */.m.swap,
            onClick: openSwapDialog,
            hide: !(chainIdValid && swapPluginEnabled)
        },
        {
            ...tool_icon/* ToolIconURLs.claim */.m.claim,
            onClick: onClaimAllDialogOpen,
            hide: !operatingSupportedChainMapping[base/* base.ID */.u.ID]
        }, 
    ];
    const pluginI18N = (0,I18NFieldRender/* usePluginI18NField */.e)();
    (0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)().forEach((plugin)=>{
        if (!plugin.ToolbarEntry) return;
        const { image , label , onClick: onClickRaw , priority , useShouldDisplay  } = plugin.ToolbarEntry;
        let onClick;
        if (onClickRaw === 'openCompositionEntry') {
            onClick = ()=>openEncryptedMessage(plugin.ID)
            ;
        } else {
            (0,esm/* safeUnreachable */.P)(onClickRaw);
            onClick = ()=>{
            };
        }
        items.push({
            onClick,
            image,
            label: typeof label === 'string' ? label : pluginI18N(plugin.ID, label),
            priority,
            useShouldDisplay,
            hide: !operatingSupportedChainMapping[plugin.ID]
        });
    });
    const [menu, openMenu] = (0,useMenu/* useMenu */.H)(items.filter((x)=>x.hide !== true
    ).sort((a, b)=>b.priority - a.priority
    ).map((desc)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxItem, {
            className: classes.menuItem,
            ...desc
        })
    ), false, {
        paperProps: {
            className: classnames_default()(classes.paper)
        },
        menuListProps: {
            className: classnames_default()(classes.menu)
        }
    });
    const isWalletValid = !!account && selectedWallet && chainIdValid;
    function renderButtonText() {
        if (!account) return t('plugin_wallet_on_connect');
        if (!chainIdValid) return t('plugin_wallet_wrong_network');
        if (pendingTransactions.length <= 0) return (0,web3_shared_src/* formatEthereumAddress */.j8w)(account, 4);
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_pending_transactions', {
                        count: pendingTransactions.length
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                    sx: {
                        marginLeft: 1.5
                    },
                    thickness: 6,
                    size: 20,
                    color: "inherit"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.wrapper,
                onClick: openMenu,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.button,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookSharpIconOfSize */.J6, {
                            classes: {
                                root: classes.icon
                            },
                            size: 22
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            children: "Mask Network"
                        })
                    ]
                })
            }),
            menu,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.wrapper,
                onClick: isWalletValid ? openWalletStatusDialog : openSelectWalletDialog,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.button,
                    children: [
                        isWalletValid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* WalletSharp */.Z6, {
                            classes: {
                                root: classes.icon
                            },
                            size: 24
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.title,
                            children: [
                                renderButtonText(),
                                account && chainIdValid && (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) !== 'mainnet' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FiberManualRecord/* default */.Z, {
                                    className: classes.chainIcon,
                                    style: {
                                        color: chainColor
                                    }
                                }) : null
                            ]
                        })
                    ]
                })
            }),
            isClaimAllDialogOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimAllDialog, {
                open: isClaimAllDialogOpen,
                onClose: onClaimAllDialogClose
            }) : null
        ]
    }));
}
// TODO: this should be rendered in the ErrorBoundary
const ToolboxItem = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { image , label , hide , priority , useShouldDisplay , ...rest } = props;
    const { classes  } = ToolboxHint_useStyles();
    const shouldDisplay = (0,react.useRef)(useShouldDisplay || (()=>true
    )).current() && !hide;
    if (!shouldDisplay) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
        ref: ref,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                src: image,
                width: 19,
                height: 19
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.text,
                children: label
            })
        ]
    }));
});


/***/ }),

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useClaimCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6615);
/* harmony import */ var _useITO_Contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78566);
/* harmony import */ var _Worker_apis_checkAvailability__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40907);





function useClaimCallback(pids, contractAddress) {
    const nonce = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useNonce */ .XEd)();
    const gasPrice = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useGasPrice */ .Fh$)();
    const account = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .mAM)();
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useChainId */ .xxU)();
    const { ITO_CONTRACT_ADDRESS  } = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useITOConstants */ .mgD)();
    const { contract: ITO_Contract  } = (0,_useITO_Contract__WEBPACK_IMPORTED_MODULE_3__/* .useITO_Contract */ .k)(contractAddress);
    const [claimState, setClaimState] = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useTransactionState */ .pld)();
    const isV1 = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .isSameAddress */ .Wr$)(ITO_CONTRACT_ADDRESS !== null && ITO_CONTRACT_ADDRESS !== void 0 ? ITO_CONTRACT_ADDRESS : '', contractAddress);
    const claimCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!ITO_Contract || !contractAddress || pids.length === 0) {
            setClaimState({
                type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStateType.UNKNOWN */ .n$V.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setClaimState({
            type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$V.WAIT_FOR_CONFIRMING
        });
        // check if already claimed
        try {
            const availabilityList = await Promise.all(pids.map((pid)=>(0,_Worker_apis_checkAvailability__WEBPACK_IMPORTED_MODULE_4__/* .checkAvailability */ .g)(pid, account, contractAddress, chainId, isV1)
            ));
            const isClaimed = availabilityList.some((availability)=>availability.claimed
            );
            if (isClaimed) {
                setClaimState({
                    type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStateType.FAILED */ .n$V.FAILED,
                    error: new Error('Already Claimed')
                });
                return;
            }
        } catch  {
            setClaimState({
                type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStateType.FAILED */ .n$V.FAILED,
                error: new Error('Failed to check availability.')
            });
            return;
        }
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await ITO_Contract.methods.claim(pids).estimateGas({
                from: account
            }).catch((error)=>{
                setClaimState({
                    type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStateType.FAILED */ .n$V.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            const promiEvent = ITO_Contract.methods.claim(pids).send(config);
            promiEvent.on(_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.TRANSACTION_HASH */ .iED.TRANSACTION_HASH, (hash)=>{
                setClaimState({
                    type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStateType.HASH */ .n$V.HASH,
                    hash
                });
            }).on(_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.RECEIPT */ .iED.RECEIPT, (receipt)=>{
                setClaimState({
                    type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStateType.CONFIRMED */ .n$V.CONFIRMED,
                    no: 0,
                    receipt
                });
            }).on(_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.CONFIRMATION */ .iED.CONFIRMATION, (no, receipt)=>{
                setClaimState({
                    type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStateType.CONFIRMED */ .n$V.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.ERROR */ .iED.ERROR, (error)=>{
                setClaimState({
                    type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStateType.FAILED */ .n$V.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        chainId,
        ITO_Contract,
        json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()(pids),
        isV1
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setClaimState({
            type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStateType.UNKNOWN */ .n$V.UNKNOWN
        });
    }, []);
    return [
        claimState,
        claimCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 78566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useITO_Contract)
/* harmony export */ });
/* harmony import */ var _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34517);
/* harmony import */ var _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47744);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6615);



function useITO_Contract(contractAddress) {
    const { ITO_CONTRACT_ADDRESS , ITO2_CONTRACT_ADDRESS  } = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useITOConstants */ .mgD)();
    const ITO_CONTRACT = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useContract */ .cqn)(ITO_CONTRACT_ADDRESS, _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__);
    const ITO2_CONTRACT = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useContract */ .cqn)(ITO2_CONTRACT_ADDRESS, _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__);
    return contractAddress && (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .isSameAddress */ .Wr$)(contractAddress, ITO_CONTRACT_ADDRESS) ? {
        contract: ITO_CONTRACT,
        version: 1
    } : {
        contract: ITO2_CONTRACT,
        version: 2
    };
}


/***/ }),

/***/ 40907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ checkAvailability)
/* harmony export */ });
/* harmony import */ var _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34517);
/* harmony import */ var _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47744);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58528);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34110);






const interFaceV1 = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_4__/* .Interface */ .vU(_masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__);
const interFaceV2 = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_4__/* .Interface */ .vU(_masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__);
// ITO Contract readonly method, read it no matter on whatever chains you are.
async function checkAvailability(pid, from, to, chainId, isV1 = false) {
    const { RPC  } = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .getRPCConstants */ .t06)(chainId);
    const provderURL = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.first)(RPC);
    if (!provderURL) throw new Error('Unknown chain id.');
    const provider = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__/* .JsonRpcProvider */ .r(provderURL);
    const callData = (isV1 ? interFaceV1 : interFaceV2).encodeFunctionData('check_availability', [
        pid
    ]);
    const data = await provider.call({
        to,
        from,
        data: callData
    });
    return decodeResult(data, isV1);
}
function decodeResult(data, isV1) {
    const results = (isV1 ? interFaceV1 : interFaceV2).decodeFunctionResult('check_availability', data);
    return {
        exchange_addrs: results[0],
        remaining: +parseHexToInt(results[1]),
        started: results[2],
        expired: results[3],
        unlocked: results[4],
        unlock_time: parseHexToInt(results[5]),
        swapped: parseHexToInt(results[6]),
        exchanged_tokens: parse(results[7]).map(parseHexToInt),
        ...isV1 ? {
        } : {
            claimed: results[8],
            start_time: parseHexToInt(results[9]),
            end_time: parseHexToInt(results[10]),
            qualification_addr: results[11]
        }
    };
}
function parse(input) {
    return JSON.parse(JSON.stringify(input));
}
function parseHexToInt(input) {
    return Number.parseInt(parse(input).hex, 16).toString();
}


/***/ }),

/***/ 33268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PluginITO_RPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82611);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66751);


if (false) {}
const PluginITO_Messages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV);
const PluginITO_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV, ()=>Promise.all(/* import() */[__webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(6739), __webpack_require__.e(1363)]).then(__webpack_require__.bind(__webpack_require__, 51363))
, PluginITO_Messages.rpc);


/***/ }),

/***/ 62323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71765);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3, ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(3758), __webpack_require__.e(7604), __webpack_require__.e(211), __webpack_require__.e(1626), __webpack_require__.e(3375), __webpack_require__.e(5480)]).then(__webpack_require__.bind(__webpack_require__, 88105))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 29440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80165);


if (false) {}
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);


/***/ }),

/***/ 30234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ ToolIconURLs)
/* harmony export */ });
const ToolIconURLs = {
    encryptedmsg: {
        image: new URL(/* asset import */ __webpack_require__(53305), __webpack_require__.b).toString(),
        label: 'Encrypted message',
        priority: 1000
    },
    redpacket: {
        image: new URL(/* asset import */ __webpack_require__(80759), __webpack_require__.b).toString(),
        label: 'Red Packet',
        priority: 990
    },
    files: {
        image: new URL(/* asset import */ __webpack_require__(34816), __webpack_require__.b).toString(),
        label: 'File Service',
        priority: 980
    },
    markets: {
        image: new URL(/* asset import */ __webpack_require__(12143), __webpack_require__.b).toString(),
        label: 'Markets',
        priority: 970
    },
    token: {
        image: new URL(/* asset import */ __webpack_require__(51614), __webpack_require__.b).toString(),
        label: 'Buy Cryptocurrency',
        priority: 960
    },
    swap: {
        image: new URL(/* asset import */ __webpack_require__(10548), __webpack_require__.b).toString(),
        label: 'Swap',
        priority: 950
    },
    claim: {
        image: new URL(/* asset import */ __webpack_require__(80003), __webpack_require__.b).toString(),
        label: 'Claim',
        priority: 940
    }
};


/***/ }),

/***/ 70205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ isMobileFacebook),
/* harmony export */   "x": () => (/* binding */ facebookDomain)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

const isMobileFacebook = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ContentScript) ? location.hostname === 'm.facebook.com' : navigator.userAgent.match(/Mobile|mobile/);
const facebookDomain = isMobileFacebook ? 'https://m.facebook.com/' : 'https://facebook.com/';


/***/ }),

/***/ 20351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ injectPostReplacer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(83250);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(66751);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(64614);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(71299);
// EXTERNAL MODULE: ./src/components/InjectedComponents/TypedMessageRenderer.tsx + 1 modules
var TypedMessageRenderer = __webpack_require__(34209);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostReplacer.tsx









const useStyles = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        overflowWrap: 'break-word'
    }
});
function PostReplacer(props) {
    const { classes  } = useStyles();
    const postMessage = usePostInfo/* usePostInfoDetails.postMessage */.H9.postMessage();
    const postPayload = usePostInfo/* usePostInfoDetails.postPayload */.H9.postPayload();
    const allPostReplacement = (0,shared_src.useValueRef)(settings/* allPostReplacementSettings */.zs);
    const plugins = (0,src/* useActivatedPluginsSNSAdaptor */.Pz)();
    const processedPostMessage = (0,react.useMemo)(()=>{
        return plugins.reduce((x, plugin)=>{
            var ref;
            const result = esm/* Result.wrap */.x4.wrap(()=>{
                var ref1;
                return (ref = (ref1 = plugin.typedMessageTransformer) === null || ref1 === void 0 ? void 0 : ref1.call(plugin, x)) !== null && ref !== void 0 ? ref : x;
            }).unwrapOr(x);
            if ((0,shared_src.isTypedMessageTuple)(result)) return result;
            console.warn('[TypedMessage] typedMessageTransformer that return a non TypedMessageTuple is not supported yet. This transform is ignored', result);
            return x;
        }, postMessage);
    }, [
        plugins.map((x)=>x.ID
        ).join(),
        postMessage
    ]);
    const shouldReplacePost = // replace all posts
    allPostReplacement || // replace posts which enhanced by plugins
    processedPostMessage.items.some((x)=>!(0,shared_src.isWellKnownTypedMessages)(x)
    ) || // replace posts which encrypted by Mask
    postPayload.ok;
    // zip/unzip original post
    (0,react.useEffect)(()=>{
        var ref5, ref6;
        if (shouldReplacePost) (ref5 = props.zip) === null || ref5 === void 0 ? void 0 : ref5.call(props);
        else (ref6 = props.unzip) === null || ref6 === void 0 ? void 0 : ref6.call(props);
    }, [
        shouldReplacePost
    ]);
    return shouldReplacePost ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderer/* DefaultTypedMessageRenderer */.sF, {
            message: (0,shared_src.makeTypedMessageTuple)(processedPostMessage.items.filter((x)=>!(0,shared_src.isTypedMessagePromise)(x)
            ))
        })
    }) : null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx







function injectPostReplacer(config = {
}, additionalPropsToPostReplacer = ()=>({
    })
, useCustomStyles = (0,theme_src/* makeStyles */.ZL)()({
})) {
    const PostReplacerDefault = /*#__PURE__*/ (0,react.memo)(function PostReplacerDefault1(props) {
        const { classes  } = useCustomStyles();
        const additionalProps = additionalPropsToPostReplacer(classes);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacer, {
            ...additionalProps,
            zip: props.zipPost,
            unzip: props.unZipPost
        }));
    });
    const { zipPost , unzipPost  } = config;
    const zipPostF = zipPost || lodash.noop;
    const unzipPostF = unzipPost || lodash.noop;
    return function injectPostReplacer1(current, signal) {
        signal.addEventListener('abort', unzipPostF);
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(current.rootNodeProxy.afterShadow, {
            key: 'post-replacer',
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacerDefault, {
                zipPost: ()=>zipPostF(current.rootNodeProxy)
                ,
                unZipPost: ()=>unzipPostF(current.rootNodeProxy)
                ,
                ...current
            })
        }));
    };
}


/***/ }),

/***/ 51684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_T": () => (/* binding */ isDark),
/* harmony export */   "xr": () => (/* binding */ toRGB),
/* harmony export */   "f2": () => (/* binding */ fromRGB),
/* harmony export */   "wj": () => (/* binding */ shade),
/* harmony export */   "dF": () => (/* binding */ getBackgroundColor),
/* harmony export */   "aF": () => (/* binding */ getForegroundColor),
/* harmony export */   "$o": () => (/* binding */ isDarkTheme)
/* harmony export */ });
/* unused harmony export clamp */
function isDark([r, g, b]) {
    return r < 68 && g < 68 && b < 68;
}
function toRGB(channels) {
    if (!channels) return '';
    return `rgb(${channels.join()})`;
}
function fromRGB(rgb) {
    const matched = rgb.match(/rgb\(\s*(\d+?)\s*,\s*(\d+?)\s*,\s*(\d+?)\s*\)/);
    if (matched) {
        const [_, r, g, b] = matched;
        return [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10)
        ];
    }
    return;
}
function clamp(num, min, max) {
    if (num < min) return min;
    if (num > max) return max;
    return num;
}
function shade(channels, percentage) {
    return channels.map((c)=>clamp(Math.floor(c * (100 + percentage) / 100), 0, 255)
    );
}
function fromRGBAtoRGB(color) {
    const matched = color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
    if (matched) {
        const [_, r, g, b, a] = matched;
        const rgba = [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10),
            Number.parseInt(a, 10), 
        ];
        return toRGB(shade(rgba.slice(0, 3), rgba[3] * 100));
    }
    return '';
}
function isRGBA(color) {
    return color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
}
function getBackgroundColor(element) {
    const color = getComputedStyle(element).backgroundColor;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}
function getForegroundColor(element) {
    const color = getComputedStyle(element).color;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}
function isDarkTheme(element = document.body) {
    const color = getComputedStyle(element).backgroundColor;
    let rgb;
    if (isRGBA(color)) {
        rgb = fromRGB(fromRGBAtoRGB(color));
    } else {
        rgb = fromRGB(color);
    }
    if (!rgb) return true;
    return isDark(rgb);
}


/***/ }),

/***/ 15515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eeb9f2f26b2edb39a70.png";

/***/ }),

/***/ 96344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74038f88a975f82105ba.png";

/***/ }),

/***/ 80003:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4da8b02bb5b7217131cc.png";

/***/ }),

/***/ 53305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fc5b3d5182d68ccb073.png";

/***/ }),

/***/ 34816:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fb14937533af5e01082.png";

/***/ }),

/***/ 12143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94a03fed8e268b91e255.png";

/***/ }),

/***/ 80759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a56884045e4fd720b0d.png";

/***/ }),

/***/ 10548:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1aa4a9fd7abb70f94bc.png";

/***/ }),

/***/ 51614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54b2701bac7cc9acc5b1.png";

/***/ }),

/***/ 34517:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"unlocked","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"bytes32","name":"validation","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 47744:
/***/ ((module) => {

module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"end","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"indexed":false,"internalType":"uint128[]","name":"ratios","type":"uint128[]"},{"indexed":false,"internalType":"address","name":"qualification","type":"address"},{"indexed":false,"internalType":"uint256","name":"limit","type":"uint256"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"uint128","name":"input_total","type":"uint128"},{"indexed":false,"internalType":"bool","name":"claimed","type":"bool"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[],"name":"base_time","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"unlocked","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"end_time","type":"uint256"},{"internalType":"address","name":"qualification_addr","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_base_time","type":"uint64"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint32","name":"_unlock_time","type":"uint32"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);