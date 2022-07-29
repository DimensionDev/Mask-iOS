"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9378],{

/***/ 28908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ SharedIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const SharedIcon = (0,_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('SharedIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            clipPath: "url(#clip0_4018_10794)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.8449 3.38244L2.92483 7.92639L6.32181 9.95786C6.54825 10.0933 6.68688 10.3377 6.68688 10.6015V12.8779L8.98652 11.9452C9.19775 11.8595 9.43648 11.8746 9.63529 11.9861L14.8428 14.9067L16.8449 3.38244ZM17.1836 2.00958C17.721 1.83413 18.252 2.29389 18.1552 2.85093L15.9163 15.7386C15.8277 16.2484 15.2618 16.5175 14.8105 16.2644L9.23702 13.1385L6.51877 14.241C6.02564 14.441 5.48688 14.0782 5.48688 13.546V10.8568L1.46066 8.449C0.90841 8.11874 1.00114 7.29202 1.61286 7.09234L17.1836 2.00958ZM14.6798 5.65582C14.8971 5.90598 14.8705 6.28494 14.6203 6.50226L10.3858 10.1807C10.1357 10.398 9.75669 10.3714 9.53938 10.1213C9.32206 9.87109 9.34869 9.49213 9.59886 9.27482L13.8334 5.59634C14.0835 5.37902 14.4625 5.40565 14.6798 5.65582Z",
                fill: "white"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "clip0_4018_10794",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "18",
                    height: "18",
                    fill: "white",
                    transform: "translate(0.5)"
                })
            })
        })
    ]
}), '0 0 19 18');


/***/ }),

/***/ 30318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7666);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80231);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65845);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96436);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(1)
        },
        disabledTab: {
            opacity: 0.5
        },
        flexContainer: {}
    })
);
function AbstractTab(props) {
    const { tabs , state , index: index1 , height =200 , hasOnlyOneChild =false , scrollable =false  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [value, setValue] = state ?? [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length && !scrollable ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                square: true,
                elevation: 0,
                className: classes.tabPaper,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator,
                        flexContainer: classes.flexContainer
                    },
                    value: index1 ? index1 : value ? value : 0,
                    indicatorColor: "primary",
                    textColor: "primary",
                    variant: scrollable ? 'scrollable' : 'fullWidth',
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    scrollButtons: scrollable,
                    allowScrollButtonsMobile: scrollable,
                    onChange: (_, newValue)=>setValue?.(newValue)
                    ,
                    children: tabs.map((tab, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: tab.disabled,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tab, [
                                index1,
                                value
                            ].includes(i) ? classes.focusTab : '', tab.disabled ? classes.disabledTab : ''),
                            disableFocusRipple: tab.disableFocusRipple,
                            disableRipple: tab.disableRipple,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${tab.id?.toLowerCase()}_tab`
                        }, i)
                    )
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index)=>index === value
                ),
                sx: {
                    height,
                    minHeight: height
                }
            }) : null
        ]
    });
};


/***/ }),

/***/ 29378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ./src/plugins/MaskBox/base.ts + 3 modules
var base = __webpack_require__(98580);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(80681);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-eth-abi@1.7.3/node_modules/web3-eth-abi/lib/index.js
var lib = __webpack_require__(9177);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/fromUnixTime/index.js
var fromUnixTime = __webpack_require__(98162);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(31434);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/subDays/index.js
var subDays = __webpack_require__(50195);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clamp.js
var clamp = __webpack_require__(8218);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants = __webpack_require__(47104);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2596);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(36596);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/type.ts
var CardTab;
(function(CardTab) {
    CardTab[CardTab["Articles"] = 0] = "Articles";
    CardTab[CardTab["Details"] = 1] = "Details";
})(CardTab || (CardTab = {}));
var BoxState;
(function(BoxState) {
    BoxState[BoxState["UNKNOWN"] = 0] = "UNKNOWN";
    BoxState[BoxState["NOT_READY"] = 1] = "NOT_READY";
    BoxState[BoxState["READY"] = 2] = "READY";
    BoxState[BoxState["EXPIRED"] = 3] = "EXPIRED";
    BoxState[BoxState[/** sold all tokens out */ "SOLD_OUT"] = 4] = "SOLD_OUT";
    BoxState[BoxState[/** drawed all personal limited tokens */ "DRAWED_OUT"] = 5] = "DRAWED_OUT";
    BoxState[BoxState[/** canceled */ "CANCELED"] = 6] = "CANCELED";
    BoxState[BoxState[/** error occur */ "ERROR"] = 7] = "ERROR";
    BoxState[BoxState[/** 404 */ "NOT_FOUND"] = 8] = "NOT_FOUND";
    BoxState[BoxState[/** leaf not found */ "NOT_IN_WHITELIST"] = 9] = "NOT_IN_WHITELIST";
    BoxState[BoxState[/** insufficient holder token */ "INSUFFICIENT_HOLDER_TOKEN"] = 10] = "INSUFFICIENT_HOLDER_TOKEN";
    BoxState[BoxState[/** not qualified */ "NOT_QUALIFIED"] = 11] = "NOT_QUALIFIED";
})(BoxState || (BoxState = {}));
var MediaType;
(function(MediaType) {
    MediaType["Audio"] = 'audio';
    MediaType["Image"] = 'image';
    MediaType["Video"] = 'video';
    MediaType["Unknown"] = 'unknown';
})(MediaType || (MediaType = {}));

// EXTERNAL MODULE: ../web3-contracts/abis/MaskBox.json
var MaskBox = __webpack_require__(7744);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxContract.ts



function useMaskBoxContract() {
    const { targetChainId: chainId  } = entry_web3_evm/* TargetChainIdContext.useContainer */.Zq.useContainer();
    const { MASK_BOX_CONTRACT_ADDRESS  } = (0,constants/* useMaskBoxConstants */.kt)(chainId);
    return (0,entry_web3_evm/* useContract */.cq)(chainId, MASK_BOX_CONTRACT_ADDRESS, MaskBox);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxInfo.ts


function useMaskBoxInfo(id) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return null;
        const info = await maskBoxContract.methods.getBoxInfo(id).call();
        return info;
    }, [
        id,
        maskBoxContract
    ]);
}

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ./src/plugins/MaskBox/apis/index.ts + 2 modules
var apis = __webpack_require__(86862);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMerkleProof.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];




function useMerkelProof(root) {
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!root) return;
        const leaf = Buffer.from((account.replace(/0x/, '').match(/.{2}/g) ?? []).map((x)=>Number.parseInt(x, 16)
        )).toString('base64');
        return (0,apis/* getMerkleProof */.g)(leaf, root);
    }, [
        account,
        root
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxStatus.ts


function useMaskBoxStatus(id) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return null;
        return maskBoxContract.methods.getBoxStatus(id).call();
    }, [
        id,
        maskBoxContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxCreationSuccessEvent.ts






// dynamically set the block range window size
const FRAGMENT_SIZE = 3000;
const MAX_PAGE_SIZE = 10;
function useMaskBoxCreationSuccessEvent(creatorAddress, tokenAddress, boxId) {
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const maskBoxContract = useMaskBoxContract();
    const { MASK_BOX_CONTRACT_FROM_BLOCK  } = (0,constants/* useMaskBoxConstants */.kt)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!connection) return null;
        if (!maskBoxContract) return null;
        const getPastEvents = (fromBlock, toBlock)=>{
            return maskBoxContract.getPastEvents('CreationSuccess', {
                filter: {
                    creator: creatorAddress,
                    nft_address: tokenAddress,
                    box_id: boxId
                },
                fromBlock,
                toBlock
            });
        };
        const blockNumber = await connection.getBlockNumber();
        const range = blockNumber - (MASK_BOX_CONTRACT_FROM_BLOCK ?? Math.max(0, blockNumber - FRAGMENT_SIZE));
        const size = Math.min(MAX_PAGE_SIZE, Math.ceil(range / FRAGMENT_SIZE));
        const allSettled = await Promise.allSettled(Array.from({
            length: size
        }).map((_, index)=>getPastEvents(blockNumber - FRAGMENT_SIZE * (index + 1), blockNumber - FRAGMENT_SIZE * index - 1)
        ));
        const events = allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : []
        );
        const filtered = events.filter((evt)=>evt.returnValues.box_id === boxId
        );
        return (0,head/* default */.Z)(filtered);
    }, [
        boxId,
        creatorAddress,
        tokenAddress,
        maskBoxContract,
        MASK_BOX_CONTRACT_FROM_BLOCK
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxTokensForSale.ts


function useMaskBoxTokensForSale(id) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return [];
        return maskBoxContract.methods.getNftListForSale(id, 0, 100).call();
    }, [
        id,
        maskBoxContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxPurchasedTokens.ts



function useMaskBoxPurchasedTokens(id, customer) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return src/* EMPTY_LIST */.rP;
        return maskBoxContract.methods.getPurchasedNft(id, customer).call();
    }, [
        id,
        customer,
        maskBoxContract
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/formatDuration/index.js
var formatDuration = __webpack_require__(71322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/intervalToDuration/index.js + 7 modules
var intervalToDuration = __webpack_require__(64893);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/helpers/formatCountdown.ts


function formatCountdown(from, to) {
    const duration = (0,intervalToDuration/* default */.Z)({
        start: from,
        end: to
    });
    return (0,formatDuration/* default */.Z)(duration);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useOpenBoxTransaction.ts





function useOpenBoxTransaction(boxId, amount, paymentTokenIndex, paymentTokenPrice, paymentTokenDetailed, proof, overrides) {
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const maskBoxContract = useMaskBoxContract();
    return (0,react.useMemo)(()=>{
        if (!boxId || amount <= 0 || !maskBoxContract) return;
        return {
            config: {
                ...overrides,
                from: account,
                value: paymentTokenDetailed?.schema === types/* SchemaType.Native */.XQ.Native ? (0,base_src/* multipliedBy */.$q)(paymentTokenPrice, amount).toFixed() : undefined
            },
            method: maskBoxContract.methods.openBox(boxId, amount, paymentTokenIndex, proof ?? '0x00')
        };
    }, [
        account,
        amount,
        boxId,
        maskBoxContract,
        paymentTokenIndex,
        paymentTokenPrice,
        paymentTokenDetailed,
        proof,
        overrides, 
    ]);
}

// EXTERNAL MODULE: ./src/plugins/MaskBox/messages.ts
var messages = __webpack_require__(9346);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxMetadata.ts



function useMaskBoxMetadata(boxId, creator) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!boxId || !creator || !(0,address/* isValidAddress */.At)(creator)) return;
        return messages/* MaskBoxRPC.getMaskBoxMetadata */.z.getMaskBoxMetadata(boxId, creator);
    }, [
        creator
    ]);
}

;// CONCATENATED MODULE: ../web3-contracts/abis/MaskBoxQualification.json
const MaskBoxQualification_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes","name":"proof","type":"bytes"}],"name":"is_qualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"},{"internalType":"string","name":"error_msg","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxQualificationContract.ts


function useMaskBoxQualificationContract(chainId, address) {
    return (0,entry_web3_evm/* useContract */.cq)(chainId, address, MaskBoxQualification_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useQualification.ts




function useQualification(address, account, proof) {
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const qualificationContract = useMaskBoxQualificationContract(chainId, address);
    const { value: qualification = {
        qualified: false,
        error_msg: ''
    }  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!qualificationContract || !account) return null;
        return qualificationContract.methods.is_qualified(account, proof ?? '0x00').call({
            from: account
        });
    }, [
        account,
        qualificationContract,
        proof
    ]);
    return qualification;
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useContext.ts


























function useContext(initialState) {
    const now = new Date();
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(types/* ChainId.Mainnet */.a_.Mainnet);
    const { MASK_BOX_CONTRACT_ADDRESS  } = (0,constants/* useMaskBoxConstants */.kt)();
    const coder = lib;
    const [boxId, setBoxId] = (0,react.useState)(initialState?.boxId ?? '');
    const rootHash = initialState?.hashRoot || '';
    const [paymentTokenAddress, setPaymentTokenAddress] = (0,react.useState)('');
    // #region the box info
    const { value: maskBoxInfo = null , error: errorMaskBoxInfo , loading: loadingMaskBoxInfo , retry: retryMaskBoxInfo ,  } = useMaskBoxInfo(boxId);
    const { value: maskBoxStatus = null , error: errorMaskBoxStatus , loading: loadingMaskBoxStatus , retry: retryMaskBoxStatus ,  } = useMaskBoxStatus(boxId);
    const { value: maskBoxCreationSuccessEvent = null , retry: retryMaskBoxCreationSuccessEvent  } = useMaskBoxCreationSuccessEvent(maskBoxInfo?.creator ?? '', maskBoxInfo?.nft_address ?? '', boxId);
    const { value: paymentTokens = src/* EMPTY_LIST */.rP  } = (0,entry_web3/* useFungibleTokens */.nt)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, maskBoxStatus?.payment?.map(([address])=>address
    ) ?? []);
    const { value: allTokens = src/* EMPTY_LIST */.rP , retry: retryMaskBoxTokensForSale  } = useMaskBoxTokensForSale(boxId);
    const { value: purchasedTokens = src/* EMPTY_LIST */.rP , retry: retryMaskBoxPurchasedTokens  } = useMaskBoxPurchasedTokens(boxId, account);
    const { value: boxInfo = null , error: errorBoxInfo , loading: loadingBoxInfo , retry: retryBoxInfo ,  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxInfo || !maskBoxStatus || (0,address/* isZeroAddress */.uO)(maskBoxInfo?.creator ?? primitives/* ZERO_ADDRESS */.r)) return null;
        const personalLimit = Number.parseInt(maskBoxInfo.personal_limit, 10);
        const remaining = Number.parseInt(maskBoxStatus.remaining, 10) // the current balance of the creator's account
        ;
        const total = Number.parseInt(maskBoxStatus.total, 10) // the total amount of tokens in the box
        ;
        const totalComputed = total && remaining && remaining > total ? remaining : total;
        const sold = Math.max(0, totalComputed - remaining);
        const personalRemaining = Math.max(0, personalLimit - purchasedTokens.length);
        const startAt = Number.parseInt(maskBoxCreationSuccessEvent?.returnValues.start_time || '0', 10);
        const endAt = Number.parseInt(maskBoxCreationSuccessEvent?.returnValues.end_time || '0', 10);
        const info = {
            boxId,
            creator: maskBoxInfo.creator,
            name: maskBoxInfo.name,
            sellAll: maskBoxCreationSuccessEvent?.returnValues.sell_all ?? false,
            personalLimit,
            personalRemaining,
            remaining,
            availableAmount: Math.min(personalRemaining, remaining),
            startAt: startAt === 0 ? (0,subDays/* default */.Z)(new Date(), 1) : (0,fromUnixTime/* default */.Z)(startAt),
            endAt: endAt === 0 ? (0,addDays/* default */.Z)(new Date(), 1) : (0,fromUnixTime/* default */.Z)(endAt),
            started: maskBoxStatus.started,
            total: totalComputed,
            sold,
            canceled: maskBoxStatus.canceled,
            tokenIds: allTokens,
            tokenIdsPurchased: purchasedTokens,
            payments: paymentTokens.map((token, i)=>{
                return {
                    token,
                    price: maskBoxStatus.payment[i][1],
                    receivableAmount: maskBoxStatus.payment[i][2]
                };
            }),
            tokenAddress: maskBoxInfo.nft_address,
            heroImageURL: '',
            qualificationAddress: maskBoxInfo.qualification,
            holderTokenAddress: maskBoxInfo.holder_token_addr,
            holderMinTokenAmount: maskBoxInfo.holder_min_token_amount
        };
        return info;
    }, [
        allTokens,
        purchasedTokens,
        paymentTokens,
        maskBoxInfo,
        maskBoxStatus,
        maskBoxCreationSuccessEvent
    ]);
    // #endregion
    // #region qualification
    const { value , error: errorProof , loading: loadingProof  } = useMerkelProof(rootHash);
    const proofBytes = value?.proof ? coder.encodeParameters([
        'bytes32[]'
    ], [
        value?.proof?.map((p)=>`0x${p}`
        ) ?? []
    ]) : undefined;
    const qualification = useQualification(boxInfo?.qualificationAddress, account, value?.proof ? coder.encodeParameters([
        'bytes',
        'bytes32'
    ], [
        proofBytes,
        rootHash
    ]) : undefined);
    // not in whitelist
    const notInWhiteList = value?.message === 'leaf not found';
    // at least hold token amount
    const { value: holderToken  } = (0,entry_web3/* useFungibleToken */.cf)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, boxInfo?.holderTokenAddress);
    const { value: holderTokenBalance = '0'  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, holderToken?.address);
    const holderMinTokenAmountBN = new (bignumber_default())(boxInfo?.holderMinTokenAmount ?? 0);
    const insufficientHolderToken = (0,base_src/* isGreaterThan */.T1)(holderMinTokenAmountBN, 0) && !holderMinTokenAmountBN.lte(holderTokenBalance);
    // #endregion
    const boxState = (0,react.useMemo)(()=>{
        if (notInWhiteList) {
            return BoxState.NOT_IN_WHITELIST;
        }
        if (insufficientHolderToken) return BoxState.INSUFFICIENT_HOLDER_TOKEN;
        if (qualification?.error_msg) return BoxState.NOT_QUALIFIED;
        if (errorMaskBoxInfo || errorMaskBoxStatus || errorBoxInfo || (rootHash ? errorProof : false)) return BoxState.ERROR;
        if (loadingMaskBoxInfo || loadingMaskBoxStatus || loadingBoxInfo || (rootHash ? loadingProof : false)) {
            if (!maskBoxInfo && !boxInfo) return BoxState.UNKNOWN;
        }
        if (maskBoxInfo && !boxInfo) return BoxState.UNKNOWN;
        if (!maskBoxInfo || !maskBoxStatus || !boxInfo) return BoxState.NOT_FOUND;
        if (maskBoxStatus.canceled) return BoxState.CANCELED;
        if ((0,base_src/* isGreaterThanOrEqualTo */.KH)(boxInfo.tokenIdsPurchased.length, boxInfo.personalLimit)) return BoxState.DRAWED_OUT;
        if ((0,base_src/* isLessThanOrEqualTo */.PW)(boxInfo.remaining, 0)) return BoxState.SOLD_OUT;
        if (boxInfo.startAt > now || !boxInfo.started) return BoxState.NOT_READY;
        if (boxInfo.endAt < now || maskBoxStatus?.expired) return BoxState.EXPIRED;
        return BoxState.READY;
    }, [
        boxInfo,
        loadingBoxInfo,
        errorBoxInfo,
        maskBoxInfo,
        loadingMaskBoxInfo,
        errorMaskBoxInfo,
        qualification,
        loadingProof,
        errorProof,
        rootHash,
        notInWhiteList,
        insufficientHolderToken, 
    ]);
    const boxStateMessage = (0,react.useMemo)(()=>{
        switch(boxState){
            case BoxState.UNKNOWN:
                return 'Loading...';
            case BoxState.CANCELED:
                return 'Canceled';
            case BoxState.READY:
                return 'Draw';
            case BoxState.EXPIRED:
                return 'Ended';
            case BoxState.NOT_READY:
                const nowAt = now.getTime();
                const startAt = boxInfo?.startAt.getTime() ?? 0;
                if (startAt <= nowAt) return 'Syncing status...';
                const countdown = formatCountdown(startAt, nowAt);
                return countdown ? `Start sale in ${countdown}` : 'Loading...';
            case BoxState.SOLD_OUT:
                return 'Sold Out';
            case BoxState.NOT_IN_WHITELIST:
                return 'You are not in the whitelist.';
            case BoxState.INSUFFICIENT_HOLDER_TOKEN:
                const { symbol , decimals  } = holderToken ?? {};
                const tokenPrice = `${(0,base_src/* formatBalance */.az)(boxInfo?.holderMinTokenAmount, decimals)} $${symbol}`;
                return `You must hold at least ${tokenPrice}.`;
            case BoxState.NOT_QUALIFIED:
                return qualification?.error_msg ?? 'Not qualified.';
            case BoxState.DRAWED_OUT:
                return 'Purchase limit exceeded.';
            case BoxState.ERROR:
                return 'Something went wrong.';
            case BoxState.NOT_FOUND:
                return 'Failed to load box info.';
            default:
                (0,esm/* unreachable */.t1)(boxState);
        }
    }, [
        holderToken,
        boxState,
        boxInfo?.startAt,
        qualification
    ]);
    (0,react.useEffect)(()=>{
        if (!boxInfo || boxInfo.started) return;
        if (boxInfo.startAt < now) {
            retryMaskBoxStatus();
        }
    }, [
        boxInfo
    ]);
    // #region the box metadata
    const { value: boxMetadata , retry: retryBoxMetadata  } = useMaskBoxMetadata(boxId, boxInfo?.creator ?? '');
    // #endregion
    // #region the erc721 contract detailed
    const { value: contractDetailed  } = (0,entry_web3/* useNonFungibleTokenContract */.LN)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, maskBoxInfo?.nft_address ?? '', types/* SchemaType.ERC721 */.XQ.ERC721, {
        account
    });
    // #endregion
    // #region the payment count
    const [paymentCount, setPaymentCount] = (0,react.useState)(1);
    const setPaymentCount_ = (0,react.useCallback)((count)=>{
        setPaymentCount((0,clamp/* default */.Z)(count || 1, 1, boxInfo?.personalRemaining ?? 1));
    }, [
        boxInfo?.personalRemaining
    ]);
    // #endregion
    // #region token ids
    const [lastAllTokenIds, setLastAllTokenIds] = (0,react.useState)([]);
    const [lastPurchasedTokenIds, setLastPurchasedTokenIds] = (0,react.useState)([]);
    const refreshLastPurchasedTokenIds = (0,react.useCallback)(()=>{
        setLastPurchasedTokenIds((tokenIds)=>(0,uniq/* default */.Z)([
                ...tokenIds,
                ...purchasedTokens
            ])
        );
    }, [
        purchasedTokens.length
    ]);
    // #endregion
    // #region the payment token
    const { value: paymentNativeTokenBalance = '0'  } = (0,entry_web3/* useBalance */.KQ)();
    const { value: paymentERC20TokenBalance = '0'  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, (0,base_src/* isSameAddress */.Wr)(paymentTokenAddress, NATIVE_TOKEN_ADDRESS) ? '' : paymentTokenAddress);
    const paymentTokenInfo = boxInfo?.payments.find((x)=>(0,base_src/* isSameAddress */.Wr)(x.token.address, paymentTokenAddress)
    );
    const paymentTokenIndex = boxInfo?.payments.findIndex((x)=>(0,base_src/* isSameAddress */.Wr)(x.token.address ?? '', paymentTokenAddress)
    ) ?? -1;
    const paymentTokenPrice = paymentTokenInfo?.price ?? '0';
    const costAmount = (0,base_src/* multipliedBy */.$q)(paymentTokenPrice, paymentCount);
    const isNativeToken = (0,base_src/* isSameAddress */.Wr)(paymentTokenAddress, NATIVE_TOKEN_ADDRESS);
    const paymentTokenBalance = isNativeToken ? paymentNativeTokenBalance : paymentERC20TokenBalance;
    const paymentTokenDetailed = paymentTokenInfo?.token ?? null;
    const isBalanceInsufficient = costAmount.gt(paymentTokenBalance);
    (0,react.useEffect)(()=>{
        const firstPaymentTokenAddress = (0,head/* default */.Z)(boxInfo?.payments)?.token.address;
        if (paymentTokenAddress === '' && firstPaymentTokenAddress) setPaymentTokenAddress(firstPaymentTokenAddress);
    }, [
        paymentTokenAddress,
        boxInfo?.payments.map((x)=>x.token.address
        ).join()
    ]);
    // #endregion
    // #region transactions
    const [openBoxTransactionOverrides, setOpenBoxTransactionOverrides] = (0,react.useState)(null);
    const openBoxTransaction = useOpenBoxTransaction(boxId, paymentCount, paymentTokenIndex, paymentTokenPrice, paymentTokenDetailed, proofBytes, openBoxTransactionOverrides);
    const { value: erc20Allowance , retry: retryAllowance  } = (0,entry_web3_evm/* useERC20TokenAllowance */.nr)(isNativeToken ? undefined : paymentTokenAddress, MASK_BOX_CONTRACT_ADDRESS);
    const canPurchase = !isBalanceInsufficient && !!boxInfo?.personalRemaining;
    const allowToPurchase = boxState === BoxState.READY;
    const isAllowanceEnough = isNativeToken ? true : costAmount.lte(erc20Allowance ?? '0');
    const { value: openBoxTransactionGasLimit  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!openBoxTransaction || !canPurchase || !allowToPurchase || !isAllowanceEnough) return;
        const estimatedGas = await openBoxTransaction.method.estimateGas((0,omit/* default */.Z)(openBoxTransaction.config, 'gas'));
        return new (bignumber_default())(estimatedGas).toNumber();
    }, [
        openBoxTransaction,
        canPurchase,
        allowToPurchase,
        isAllowanceEnough
    ]);
    // #endregion
    return {
        // box id
        boxId,
        setBoxId,
        // box info & metadata
        boxInfo,
        boxMetadata,
        // box state
        boxState,
        boxStateMessage,
        // erc721 contract detailed
        contractDetailed,
        // payment count
        paymentCount,
        setPaymentCount: setPaymentCount_,
        // payment address
        paymentTokenAddress: paymentTokenAddress || ((0,head/* default */.Z)(boxInfo?.payments)?.token.address ?? ''),
        setPaymentTokenAddress: (address)=>{
            if (boxInfo?.payments.some((x)=>(0,base_src/* isSameAddress */.Wr)(x.token.address ?? '', address)
            )) setPaymentTokenAddress(address);
        },
        // token ids
        lastAllTokenIds,
        setLastAllTokenIds,
        lastPurchasedTokenIds,
        setLastPurchasedTokenIds,
        refreshLastPurchasedTokenIds,
        // payment token
        paymentTokenPrice,
        paymentTokenIndex,
        paymentTokenBalance,
        paymentTokenDetailed,
        isBalanceInsufficient,
        isAllowanceEnough,
        // transactions
        openBoxTransaction,
        openBoxTransactionGasLimit,
        openBoxTransactionOverrides,
        setOpenBoxTransactionOverrides,
        // retry callbacks
        retryAllowance,
        retryMaskBoxInfo,
        retryMaskBoxStatus,
        retryBoxInfo,
        retryBoxMetadata,
        retryMaskBoxCreationSuccessEvent,
        retryMaskBoxTokensForSale,
        retryMaskBoxPurchasedTokens
    };
}
const Context = (0,unstated_next/* createContainer */.f)(useContext);

// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(61305);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(51911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/Skeleton/Skeleton.js




let warnedOnce = false;
/**
 * @ignore - do not document.
 */

/* harmony default export */ const Skeleton_Skeleton = (/*#__PURE__*/react.forwardRef(function DeprecatedSkeleton(props, ref) {
  if (!warnedOnce) {
    console.warn(['MUI: The Skeleton component was moved from the lab to the core.', '', "You should use `import { Skeleton } from '@mui/material'`", "or `import Skeleton from '@mui/material/Skeleton'`"].join('\n'));
    warnedOnce = true;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Skeleton/* default */.Z, (0,esm_extends/* default */.Z)({
    ref: ref
  }, props));
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
;// CONCATENATED MODULE: ./src/components/shared/Video.tsx





const Video = /*#__PURE__*/ (0,react.forwardRef)(function Video(props, outgoingRef) {
    const { src , component ='video' , VideoProps , SkeletonProps  } = props;
    const videoRef = (0,react.useRef)(null);
    const { loading , error , value  } = (0,useAsync/* default */.Z)(async ()=>{
        if (typeof src !== 'string') return src;
        return service/* default.Helper.fetch */.ZP.Helper.fetch(src);
    }, [
        src
    ]);
    const blobURL = (0,react.useMemo)(()=>{
        if (!value) return '';
        return URL.createObjectURL(value);
    }, [
        value
    ]);
    if (component !== 'video') return null;
    if (loading || loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton_Skeleton, {
            variant: "rectangular",
            ...SkeletonProps
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
        ref: videoRef,
        muted: true,
        ...VideoProps,
        children: blobURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
            src: blobURL,
            type: "video/mp4"
        }) : null
    });
});

;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/ArticlesTab.tsx






const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        main: {
            paddingLeft: 16,
            paddingRight: 16
        },
        body: {
            width: '100%',
            height: 360,
            overflow: 'hidden',
            borderRadius: 8,
            boxSizing: 'border-box',
            border: `solid 1px ${theme.palette.divider}`
        },
        footer: {
            margin: theme.spacing(2.75, 0)
        },
        hero: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 360,
            objectFit: 'scale-down'
        },
        name: {
            whiteSpace: 'nowrap',
            maxWidth: '50%',
            display: 'inline-block',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        icon: {
            color: theme.palette.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(15, 20, 25)',
            width: 64,
            height: 64,
            opacity: 0.1
        }
    })
);
function ArticlesTab(props) {
    const { boxInfo , boxMetadata  } = props;
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.main,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.body,
                children: (()=>{
                    if (!boxMetadata?.mediaType) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.hero,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskSharpIconOfSize */.Vh, {
                            classes: {
                                root: classes.icon
                            },
                            size: 22
                        })
                    });
                    switch(boxMetadata.mediaType){
                        case MediaType.Video:
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Video, {
                                VideoProps: {
                                    className: classes.hero,
                                    controls: true
                                },
                                src: boxMetadata.mediaUrl
                            });
                        default:
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.hero,
                                src: boxMetadata.mediaUrl
                            });
                    }
                })()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.footer,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.name,
                        color: "textPrimary",
                        children: boxInfo.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: [
                            boxInfo.sold,
                            "/",
                            boxInfo.total
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/DetailsTab.tsx



const DetailsTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        main: {
            height: 360,
            overflow: 'auto',
            marginBottom: theme.spacing(2.75)
        },
        section: {
            margin: theme.spacing(4, 0),
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        },
        placeholder: {
            textAlign: 'center',
            marginTop: 170
        },
        title: {
            fontSize: 18,
            fontWeight: 500,
            lineHeight: '24px',
            marginBottom: theme.spacing(4)
        },
        content: {
            fontSize: 14,
            lineHeight: '24px',
            whiteSpace: 'pre-line'
        }
    })
);
function DetailsTab(props) {
    const { boxInfo , boxMetadata  } = props;
    const { classes  } = DetailsTab_useStyles();
    const definitions = boxMetadata?.activities.map((x)=>({
            title: x.title,
            content: x.body
        })
    );
    if (!definitions) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.main,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textPrimary",
            children: "No detailed information."
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.main,
        children: definitions?.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        color: "textPrimary",
                        variant: "h3",
                        children: x.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.content,
                        color: "textPrimary",
                        variant: "body2",
                        children: x.content
                    })
                ]
            }, i)
        )
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/Remove.js
var Remove = __webpack_require__(28962);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/Add.js
var Add = __webpack_require__(24721);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(48591);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19963);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/Tune.js
var Tune = __webpack_require__(2412);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(91788);
;// CONCATENATED MODULE: ./src/components/shared/TokenPrice.tsx




const TokenPrice = ({ chainId , contractAddress , amount , currencyType =base_src/* CurrencyType.USD */.V2.USD , ...rest })=>{
    const { value: tokenPrice = 0  } = (0,entry_web3/* useFungibleTokenPrice */.Of)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, contractAddress?.toLowerCase(), {
        chainId,
        currencyType
    });
    const { value: nativeTokenPrice = 0  } = (0,entry_web3/* useNativeTokenPrice */.lb)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const price = (0,address/* isZeroAddress */.uO)(contractAddress) ? nativeTokenPrice : tokenPrice;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        ...rest,
        children: [
            "$",
            (0,base_src/* multipliedBy */.$q)(amount, price).toFixed(2)
        ]
    });
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/GasSettingBar.tsx











function GasSettingBar(props) {
    const { gasLimit , gasPrice , maxFee , priorityFee , onChange  } = props;
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: nativeTokenDetailed  } = (0,entry_web3/* useFungibleToken */.cf)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: gasPriceDefault = '0'  } = (0,entry_web3/* useGasPrice */.Fh)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [gasOption, setGasOptionType] = (0,react.useState)(base_src/* GasOptionType.NORMAL */.Qd.NORMAL);
    const { setDialog: setGasSettingDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.gasSettingDialogUpdated */.R.events.gasSettingDialogUpdated);
    const onOpenGasSettingDialog = (0,react.useCallback)(()=>{
        setGasSettingDialog(resolver/* chainResolver.isSupport */.VU.isSupport(chainId, 'EIP1559') ? {
            open: true,
            gasLimit,
            maxFee,
            priorityFee,
            gasOption
        } : {
            open: true,
            gasLimit,
            gasPrice,
            gasOption
        });
    }, [
        chainId,
        gasLimit,
        gasPrice,
        maxFee,
        priorityFee,
        gasOption
    ]);
    // set initial options
    (0,react.useEffect)(()=>{
        return Wallet_messages/* WalletMessages.events.gasSettingDialogUpdated.on */.R.events.gasSettingDialogUpdated.on((evt)=>{
            if (evt.open) return;
            if (evt.gasOption) setGasOptionType(evt.gasOption);
            onChange(resolver/* chainResolver.isSupport */.VU.isSupport(chainId, 'EIP1559') ? {
                gas: evt.gasLimit,
                maxFeePerGas: evt.maxFee,
                maxPriorityFeePerGas: evt.priorityFee
            } : {
                gas: evt.gasLimit,
                gasPrice: evt.gasPrice
            });
        });
    }, []);
    const gasFee = (0,react.useMemo)(()=>{
        return (0,base_src/* multipliedBy */.$q)(gasLimit, resolver/* chainResolver.isSupport */.VU.isSupport(chainId, 'EIP1559') && maxFee ? new (bignumber_default())(maxFee) : gasPrice ?? gasPriceDefault);
    }, [
        chainId,
        gasLimit,
        gasPrice,
        maxFee,
        gasPriceDefault
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                fontSize: "14px",
                sx: {
                    marginRight: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            (0,formatter/* formatWeiToEther */.yp)(gasFee).toFixed(6),
                            " ",
                            nativeTokenDetailed?.symbol ?? '',
                            " \u2248"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPrice, {
                        chainId: chainId,
                        amount: (0,formatter/* formatWeiToEther */.yp)(gasFee)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "small",
                onClick: onOpenGasSettingDialog,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tune/* default */.Z, {
                    fontSize: "small",
                    color: "inherit"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/DrawDialog.tsx
















const DrawDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        main: {
            padding: `${theme.spacing(2.5)} !important`
        },
        caption: {
            textAlign: 'center'
        },
        body: {
            padding: theme.spacing(0, 2.5)
        },
        value: {
            fontSize: 32,
            lineHeight: '40px',
            fontWeight: 'bold',
            marginBottom: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
        section: {
            padding: theme.spacing(2, 0),
            justifyContent: 'space-between'
        },
        title: {
            width: '50%'
        },
        content: {},
        field: {
            borderRadius: 0,
            padding: theme.spacing(0),
            height: '25px !important',
            minWidth: 0,
            minHeight: 0,
            outline: 'none !important',
            borderColor: `${theme.palette.divider} !important`
        },
        textfield: {
            width: 40,
            textAlign: 'center',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.palette.divider
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.divider
                },
                '&.Mui-focused fieldset': {
                    borderWidth: 1,
                    borderColor: theme.palette.divider
                }
            }
        },
        number: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                appearance: 'none',
                margin: 0
            },
            padding: 0,
            appearance: 'textfield',
            textAlign: 'center',
            borderImage: 'none'
        }
    })
);
function DrawDialog(props) {
    const { boxInfo , open , drawing , onClose , onSubmit  } = props;
    const { classes  } = DrawDialog_useStyles();
    const { MASK_BOX_CONTRACT_ADDRESS  } = (0,constants/* useMaskBoxConstants */.kt)();
    const { paymentCount , setPaymentCount , paymentTokenPrice , paymentTokenBalance , paymentTokenDetailed , isBalanceInsufficient , isAllowanceEnough , openBoxTransactionGasLimit , setOpenBoxTransactionOverrides ,  } = (0,unstated_next/* useContainer */.u)(Context);
    const providerDescriptor = (0,entry_web3/* useProviderDescriptor */.fY)();
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const onCount = (0,react.useCallback)((step)=>{
        setPaymentCount(paymentCount + step);
    }, [
        paymentCount
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: "Draw",
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.main,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.caption,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.value,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                value: (0,base_src/* multipliedBy */.$q)(paymentTokenPrice, paymentCount),
                                                decimals: paymentTokenDetailed?.decimals ?? 0,
                                                formatter: base_src/* formatBalance */.az,
                                                significant: 6
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: paymentTokenDetailed?.symbol
                                        })
                                    ]
                                }),
                                paymentTokenDetailed ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "\u2248"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPrice, {
                                            chainId: chainId,
                                            amount: (0,base_src/* formatBalance */.az)(paymentTokenPrice, paymentTokenDetailed.decimals),
                                            contractAddress: paymentTokenDetailed.address
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.body,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Mystery Boxes:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            className: classes.content,
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                    className: classes.field,
                                                    variant: "outlined",
                                                    color: "inherit",
                                                    disabled: paymentCount <= 1,
                                                    onClick: ()=>onCount(-1)
                                                    ,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Remove/* default */.Z, {
                                                        color: "inherit"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                    className: classes.textfield,
                                                    type: "number",
                                                    size: "small",
                                                    sx: {
                                                        marginLeft: 1,
                                                        marginRight: 1
                                                    },
                                                    value: paymentCount,
                                                    disabled: boxInfo.remaining === 0 || boxInfo.personalRemaining <= 1,
                                                    onChange: (ev)=>{
                                                        const count = Number.parseInt(ev.target.value, 10);
                                                        if (count >= 1 && count <= boxInfo.availableAmount) {
                                                            setPaymentCount(count);
                                                        }
                                                    },
                                                    InputProps: {
                                                        classes: {
                                                            root: classes.field
                                                        },
                                                        autoFocus: true,
                                                        inputProps: {
                                                            className: classes.number,
                                                            autoComplete: 'off',
                                                            autoCorrect: 'off',
                                                            title: 'Token Amount',
                                                            inputMode: 'decimal',
                                                            min: 0,
                                                            max: 255,
                                                            minLength: 1,
                                                            pattern: '^[0-9]*[.,]?[0-9]*$',
                                                            spellCheck: false
                                                        }
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                    className: classes.field,
                                                    variant: "outlined",
                                                    color: "inherit",
                                                    disabled: paymentCount >= boxInfo.availableAmount || boxInfo.remaining === 0 || boxInfo.personalRemaining === 1,
                                                    onClick: ()=>onCount(1)
                                                    ,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {
                                                        color: "inherit"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Quantity Limit:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.content,
                                            color: "textPrimary",
                                            children: boxInfo.personalLimit
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Available amount:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.content,
                                            color: "textPrimary",
                                            children: [
                                                boxInfo.availableAmount,
                                                "/",
                                                boxInfo.total
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Current Wallet:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            className: classes.content,
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                                                    size: 16,
                                                    icon: providerDescriptor?.icon
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    color: "textPrimary",
                                                    sx: {
                                                        marginLeft: 1
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                                        address: account,
                                                        size: 6,
                                                        formatter: formatter/* formatEthereumAddress */.j8
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Available:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            className: classes.content,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                color: "textPrimary",
                                                children: [
                                                    (0,base_src/* formatBalance */.az)(paymentTokenBalance, paymentTokenDetailed?.decimals ?? 0, 6),
                                                    ' ',
                                                    paymentTokenDetailed?.symbol
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                isAllowanceEnough && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Gas Fee:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            className: classes.content,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingBar, {
                                                gasLimit: openBoxTransactionGasLimit || 0,
                                                onChange: setOpenBoxTransactionOverrides
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                        amount: (0,base_src/* multipliedBy */.$q)(paymentTokenPrice, paymentCount).toFixed(),
                        spender: MASK_BOX_CONTRACT_ADDRESS,
                        token: paymentTokenDetailed?.schema === types/* SchemaType.ERC20 */.XQ.ERC20 ? paymentTokenDetailed : undefined,
                        ActionButtonProps: {
                            size: 'medium',
                            sx: {
                                marginTop: 2
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            size: "medium",
                            fullWidth: true,
                            variant: "contained",
                            sx: {
                                marginTop: 2
                            },
                            disabled: isBalanceInsufficient || drawing,
                            onClick: onSubmit,
                            children: isBalanceInsufficient ? 'Insufficient balance' : drawing ? 'Drawing' : 'Draw'
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js + 1 modules
var difference = __webpack_require__(44729);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/CollectibleCard.tsx + 5 modules
var CollectibleCard = __webpack_require__(28159);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/TokenCard.tsx







const TokenCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        title: {
            textAlign: 'center',
            margin: theme.spacing(1, 0),
            maxWidth: 160
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        }
    })
);
const TokenCard = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { contractDetailed , tokenId , renderOrder  } = props;
    const { classes  } = TokenCard_useStyles();
    const { value: tokenDetailed  } = (0,entry_web3/* useNonFungibleToken */.bs)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, contractDetailed.address, tokenId);
    return tokenDetailed ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard/* CollectibleCard */.Z, {
                readonly: true,
                provider: base_src/* SourceType.OpenSea */.PO.OpenSea,
                token: tokenDetailed,
                renderOrder: renderOrder
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.title,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    color: "textSecondary",
                    variant: "body2",
                    children: tokenDetailed.contract?.name ?? tokenId
                })
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {});
});

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(442);
// EXTERNAL MODULE: ../icons/plugins/shared.tsx
var shared = __webpack_require__(28908);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/DrawResultDialog.tsx












const DrawResultDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        main: {
            padding: 8
        },
        list: {
            height: 360,
            overflow: 'auto',
            marginBottom: theme.spacing(2),
            display: 'grid',
            flexWrap: 'wrap',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gridGap: theme.spacing(1),
            padding: 8
        },
        token: {}
    })
);
function DrawResultDialog(props) {
    const { open , onClose , boxInfo , contractDetailed  } = props;
    const { classes  } = DrawResultDialog_useStyles();
    const { lastPurchasedTokenIds  } = (0,unstated_next/* useContainer */.u)(Context);
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const shareText = `I just claimed a #MaskBox with @realMaskNetwork. Install mask.io and create your own NFT mystery box! \n ${postLink}`;
    const onShare = ()=>{
        onClose();
        social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
    };
    if (!contractDetailed) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: "Successful",
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.list,
                        display: "flex",
                        flexWrap: "wrap",
                        children: (0,difference/* default */.Z)(boxInfo.tokenIdsPurchased, lastPurchasedTokenIds).map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.token,
                                flex: 1,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenCard, {
                                    tokenId: x,
                                    contractDetailed: contractDetailed,
                                    renderOrder: i
                                })
                            }, x)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared/* SharedIcon */.r, {
                            style: {
                                width: 18,
                                height: 18
                            }
                        }),
                        size: "medium",
                        fullWidth: true,
                        variant: "contained",
                        onClick: onShare,
                        children: "Share"
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(30318);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/PreviewCard.tsx

















const useTabsStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300
        },
        tabs: {
            width: '100%',
            height: 36,
            minHeight: 36,
            margin: `0 ${location.host.includes('minds') ? '12px' : 'auto'}`,
            '& .Mui-selected': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText
            },
            borderRadius: 4
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: `${theme.spacing(2)} !important`
        },
        button: {
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            width: '100%',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            },
            margin: '0 !important'
        }
    })
);
function PreviewCard(props) {
    const { classes: tabClasses  } = useTabsStyles();
    const state = (0,react.useState)(CardTab.Articles);
    const [openDrawDialog, setOpenDrawDialog] = (0,react.useState)(false);
    const [openDrawResultDialog, setOpenDrawResultDialog] = (0,react.useState)(false);
    const { targetChainId  } = entry_web3_evm/* TargetChainIdContext.useContainer */.Zq.useContainer();
    const theme = (0,useTheme/* default */.Z)();
    const { boxState , boxStateMessage , boxInfo , boxMetadata , contractDetailed , setPaymentCount , paymentTokenAddress , setPaymentTokenAddress , paymentTokenPrice , paymentTokenDetailed , refreshLastPurchasedTokenIds , // transaction
    openBoxTransaction , openBoxTransactionOverrides , openBoxTransactionGasLimit , setOpenBoxTransactionOverrides , // retry
    retryMaskBoxStatus , retryMaskBoxInfo , retryBoxInfo , retryMaskBoxCreationSuccessEvent , retryMaskBoxTokensForSale , retryMaskBoxPurchasedTokens ,  } = (0,unstated_next/* useContainer */.u)(Context);
    const txConfig = (0,react.useMemo)(()=>{
        return {
            ...openBoxTransaction?.config,
            gas: openBoxTransactionOverrides?.gas ?? openBoxTransactionGasLimit
        };
    }, [
        openBoxTransaction?.config,
        openBoxTransactionOverrides,
        openBoxTransactionGasLimit
    ]);
    // #region open box
    const [{ loading: isOpening  }, openBoxCallback] = (0,entry_web3_evm/* useTransactionCallback */.ol)(txConfig, openBoxTransaction?.method);
    const onRefresh = (0,react.useCallback)(()=>{
        state[1](CardTab.Articles);
        setPaymentCount(1);
        setPaymentTokenAddress('');
        retryMaskBoxInfo();
        retryMaskBoxCreationSuccessEvent();
        retryMaskBoxTokensForSale();
        retryMaskBoxPurchasedTokens();
    }, [
        retryMaskBoxInfo,
        retryMaskBoxCreationSuccessEvent,
        retryMaskBoxTokensForSale,
        retryMaskBoxPurchasedTokens
    ]);
    const [drawing, setDrawing] = (0,react.useState)(false);
    const onDraw = (0,react.useCallback)(async ()=>{
        setDrawing(true);
        refreshLastPurchasedTokenIds();
        try {
            await openBoxCallback();
            onRefresh();
            setOpenDrawResultDialog(true);
            retryMaskBoxStatus();
            setOpenDrawDialog(false);
        } catch  {}
        setDrawing(false);
    }, [
        openBoxCallback,
        refreshLastPurchasedTokenIds,
        onRefresh,
        retryMaskBoxStatus
    ]);
    // #endregion
    if (boxState === BoxState.UNKNOWN) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        sx: {
            display: 'flex',
            padding: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
    });
    if (boxState === BoxState.ERROR) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "error",
                children: "Something went wrong."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                sx: {
                    margin: 1.125,
                    width: 254,
                    backgroundColor: theme.palette.maskColor?.dark,
                    color: 'white',
                    '&:.hover': {
                        backgroundColor: theme.palette.maskColor?.dark
                    }
                },
                size: "small",
                onClick: retryBoxInfo,
                children: "Retry"
            })
        ]
    });
    if (boxState === BoxState.NOT_FOUND || !boxInfo) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "error",
                children: "Failed to load box."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                sx: {
                    margin: 1.125,
                    width: 254,
                    backgroundColor: theme.palette.maskColor?.dark,
                    color: 'white',
                    '&:.hover': {
                        backgroundColor: theme.palette.maskColor?.dark
                    }
                },
                size: "small",
                onClick: retryMaskBoxInfo,
                children: "Retry"
            })
        ]
    });
    const tabProps = {
        tabs: [
            {
                label: 'Articles',
                children: boxInfo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArticlesTab, {
                    boxInfo: boxInfo,
                    boxMetadata: boxMetadata
                }) : null,
                sx: {
                    p: 0
                }
            },
            {
                label: 'Details',
                children: boxInfo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailsTab, {
                    boxInfo: boxInfo,
                    boxMetadata: boxMetadata
                }) : null,
                sx: {
                    p: 0
                }
            }, 
        ],
        state,
        classes: tabClasses
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                        height: "",
                        ...tabProps,
                        state: state
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DrawDialog, {
                        boxInfo: boxInfo,
                        open: openDrawDialog,
                        drawing: drawing,
                        onClose: ()=>{
                            setOpenBoxTransactionOverrides(null);
                            setOpenDrawDialog(false);
                        },
                        onSubmit: onDraw
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DrawResultDialog, {
                        boxInfo: boxInfo,
                        contractDetailed: contractDetailed,
                        open: openDrawResultDialog,
                        onClose: ()=>{
                            refreshLastPurchasedTokenIds();
                            setOpenDrawResultDialog(false);
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                style: {
                    padding: 12
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                    expectedChainId: targetChainId,
                    renderInTimeline: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        ActionButtonProps: {
                            size: 'medium'
                        },
                        classes: {
                            button: tabClasses.button
                        },
                        renderInTimeline: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            loading: isOpening,
                            size: "medium",
                            fullWidth: true,
                            variant: "contained",
                            sx: {
                                backgroundColor: theme.palette.maskColor?.dark,
                                color: 'white',
                                width: '100%',
                                '&:hover': {
                                    background: theme.palette.maskColor?.dark
                                }
                            },
                            disabled: boxState !== BoxState.READY || isOpening,
                            onClick: ()=>setOpenDrawDialog(true)
                            ,
                            children: (()=>{
                                return boxState === BoxState.READY && paymentTokenAddress ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        boxStateMessage,
                                        " (",
                                        (0,base_src/* formatBalance */.az)(paymentTokenPrice, paymentTokenDetailed?.decimals ?? 0),
                                        ' ',
                                        paymentTokenDetailed?.symbol,
                                        "/Time)"
                                    ]
                                }) : boxStateMessage;
                            })()
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/MaskBox.tsx


const MaskBoxIcon = (0,utils/* createIcon */.I)('MaskBoxIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#2337B4",
            d: "m13.678 0 12.123 6.999-12.122 6.999L1.556 6.999z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#FF9607",
            d: "m12.468 13.302 1.212.7v2.8l-1.212-.7zM12.468 9.102l1.212.7v2.8l-1.212-.7zM13.68 7.002l1.213.7v1.4l-1.213-.7zM8.831 5.602l1.223.706v4.2L8.83 9.802zM10.04 3.503l1.212.7v1.4l-1.212-.7zM14.893 2.103l1.212.7v4.2l-1.212-.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#FFD5BE",
            d: "m13.68 12.602 1.213.7-1.213.7-1.212-.7zM14.893 11.902l1.212.7-1.212.7-1.213-.7zM13.68 8.402l1.213.7-1.213.7-1.212-.7zM14.893 6.303l1.212.7-1.212.7-1.213-.7zM10.04 4.903l1.212.7-1.212.7-1.212-.7zM16.105.003l1.226.708-6.061 3.5-1.227-.708z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#FFD5BE",
            d: "m17.317.703 1.213.7-1.213.7-1.212-.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "m12.465 3.5-1.213.7v1.399l1.213-.7V3.5Zm4.849-1.4 1.212-.7v5.599l-1.212.7-1.212.7v2.8l-1.213.7-1.212.7v-2.8l1.212-.7v-1.4l1.213-.7V2.799l-1.213.7-1.212.7-1.212.7V3.5l1.212-.7 1.212-.7 1.213-.7 1.212-.7v1.4Zm-4.85 2.8L10.04 6.298v4.2l2.425-1.4v-4.2Zm2.425 11.198-1.212.7v-2.8l1.212-.7 1.213-.7v2.8l-1.213.7Z",
            fill: "#FF5900"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#0057FF",
            d: "M13.678 13.998 25.801 7v13.997l-12.122 7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#367BFF",
            d: "m1.556 7.002 12.122 7v13.997L1.556 21z"
        })
    ]
}), '0 0 28 28');

;// CONCATENATED MODULE: ./src/plugins/MaskBox/contexts/RootContext.tsx


const RootContext = ({ children , chainId  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_web3_evm/* TargetChainIdContext.Provider */.Zq.Provider, {
        initialState: chainId,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/plugins/MaskBox/contexts/index.ts


;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/index.tsx













const isMaskBox = (x)=>x.startsWith('https://box-beta.mask.io') || x.startsWith('https://box.mask.io')
;
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector (props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,src/* parseURL */.Lk)(x.val).find(isMaskBox);
        }, [
            props.message
        ]);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    PostInspector: function Component() {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isMaskBox);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskBoxIcon, {});
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_mask_box_name"
            });
            const iconFilterColor = 'rgba(0, 87, 255, 0.3)';
            return {
                ApplicationEntryID: base/* base.ID */.u.ID,
                RenderEntryComponent ({ disabled  }) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                        title: name,
                        disabled: disabled,
                        iconFilterColor: iconFilterColor,
                        icon: icon,
                        onClick: ()=>(0,shared_base_ui_src/* openWindow */.xw)('https://box.mask.io/#/')
                    });
                },
                appBoardSortingDefaultPriority: 6,
                marketListSortingPriority: 4,
                icon,
                tutorialLink: 'https://realmasknetwork.notion.site/d0941687649a4ef7a38d71f23ecbe4da',
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                    i18nKey: "plugin_mask_box_description"
                }),
                category: 'dapp',
                iconFilterColor,
                name
            };
        })(), 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);
function Renderer(props) {
    const [, matchedChainId] = props.url.match(/chain=(\d+)/i) ?? [];
    const [, boxId] = props.url.match(/box=(\d+)/i) ?? [];
    const [, hashRoot] = props.url.match(/rootHash=([\dA-Za-z]+)/) ?? [];
    const shouldNotRender = !matchedChainId || !boxId;
    (0,entry_content_script/* usePluginWrapper */.fI)(!shouldNotRender);
    if (shouldNotRender) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RootContext, {
        chainId: Number.parseInt(matchedChainId, 10),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
            initialState: {
                boxId,
                hashRoot
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {})
        })
    });
}


/***/ }),

/***/ 86862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* reexport */ getMaskBoxMetadata),
  "g": () => (/* reexport */ getMerkleProof)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/rss3-next@0.6.17/node_modules/rss3-next/dist/browser/RSS3.js
var RSS3 = __webpack_require__(42303);
var RSS3_default = /*#__PURE__*/__webpack_require__.n(RSS3);
// EXTERNAL MODULE: ./src/plugins/MaskBox/constants.ts
var constants = __webpack_require__(64373);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/rss3.ts


async function createRSS(address) {
    return new (RSS3_default())({
        endpoint: constants/* RSS3_ENDPOINT */.Py,
        address,
        sign: async (message)=>{
            throw new Error('Not supported.');
        }
    });
}
async function getMaskBoxMetadata(boxId, creator) {
    const rss = await createRSS(creator);
    const file = await rss.files.get(rss.account.address);
    if (!file) throw new Error('The account was not found.');
    const boxes = Object.getOwnPropertyDescriptor(file, '_box')?.value;
    return boxes?.[boxId];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/merkleProof.ts


async function getMerkleProof(leaf, root) {
    try {
        const response = await fetch(dist_default()(constants/* MERKLE_PROOF_ENDPOINT */.mN, {
            leaf,
            root: root.replace(/^0x/, '')
        }));
        return await response.json();
    } catch (err) {
        throw new Error(Reflect.get(Object(err), 'message'));
    }
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/index.ts




/***/ }),

/***/ 9346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ MaskBoxRPC)
/* harmony export */ });
/* unused harmony export MaskBoxMessages */
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64373);


const MaskBoxMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const MaskBoxRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>__webpack_require__.e(/* import() */ 2173).then(__webpack_require__.bind(__webpack_require__, 22173))
, MaskBoxMessages.rpc);


/***/ })

}]);