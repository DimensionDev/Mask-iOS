"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3534],{

/***/ 57017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useClaimCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98086);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63541);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24403);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15030);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66580);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95130);
/* harmony import */ var _useITO_Contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10727);
/* harmony import */ var _Worker_apis_checkAvailability__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51576);





function useClaimCallback(pids, contractAddress) {
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .useAccount */ .m)();
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .useChainId */ .xx)();
    const { ITO_CONTRACT_ADDRESS  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .useITOConstants */ .mg)();
    const { contract: ITO_Contract  } = (0,_useITO_Contract__WEBPACK_IMPORTED_MODULE_2__/* .useITO_Contract */ .k)(contractAddress);
    const [claimState, setClaimState] = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .useTransactionState */ .p)();
    const isV1 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .isSameAddress */ .Wr)(ITO_CONTRACT_ADDRESS !== null && ITO_CONTRACT_ADDRESS !== void 0 ? ITO_CONTRACT_ADDRESS : '', contractAddress);
    const claimCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!ITO_Contract || !contractAddress || pids.length === 0) {
            setClaimState({
                type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setClaimState({
            type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
        });
        // check if already claimed
        try {
            const availabilityList = await Promise.all(pids.map((pid)=>(0,_Worker_apis_checkAvailability__WEBPACK_IMPORTED_MODULE_3__/* .checkAvailability */ .g)(pid, account, contractAddress, chainId, isV1)
            ));
            const isClaimed = availabilityList.some((availability)=>availability.claimed
            );
            if (isClaimed) {
                setClaimState({
                    type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED,
                    error: new Error('Already Claimed')
                });
                return;
            }
        } catch  {
            setClaimState({
                type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED,
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
                    type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            ITO_Contract.methods.claim(pids).send(config).on(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionEventType.CONFIRMATION */ .iE.CONFIRMATION, (no, receipt)=>{
                setClaimState({
                    type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionEventType.ERROR */ .iE.ERROR, (error)=>{
                setClaimState({
                    type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED,
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
            type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
        });
    }, []);
    return [
        claimState,
        claimCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 10727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useITO_Contract)
/* harmony export */ });
/* harmony import */ var _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34517);
/* harmony import */ var _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47744);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24403);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42340);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66580);



function useITO_Contract(contractAddress) {
    const { ITO_CONTRACT_ADDRESS , ITO2_CONTRACT_ADDRESS  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .useITOConstants */ .mg)();
    const ITO_CONTRACT = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .useContract */ .cq)(ITO_CONTRACT_ADDRESS, _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__);
    const ITO2_CONTRACT = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .useContract */ .cq)(ITO2_CONTRACT_ADDRESS, _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__);
    return contractAddress && (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .Wr)(contractAddress, ITO_CONTRACT_ADDRESS) ? {
        contract: ITO_CONTRACT,
        version: 1
    } : {
        contract: ITO2_CONTRACT,
        version: 2
    };
}


/***/ }),

/***/ 51576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ checkAvailability)
/* harmony export */ });
/* harmony import */ var _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34517);
/* harmony import */ var _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47744);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58528);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45925);




const interFaceV1 = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__/* .Interface */ .vU(_masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__);
const interFaceV2 = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__/* .Interface */ .vU(_masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__);
// ITO Contract readonly method, read it no matter on whatever chains you are.
async function checkAvailability(pid, from, to, chainId, isV1 = false) {
    const callData = (isV1 ? interFaceV1 : interFaceV2).encodeFunctionData('check_availability', [
        pid
    ]);
    const data = await _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Ethereum.call */ .ZP.Ethereum.call({
        to,
        from,
        data: callData
    }, {
        chainId
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
        destructed: results[4],
        unlock_time: parseHexToInt(results[5]),
        swapped: parseHexToInt(results[6]),
        exchanged_tokens: parse(results[7]).map(parseHexToInt),
        ...isV1 ? {} : {
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

/***/ 59259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PluginITO_RPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75042);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63151);


if (false) {}
const PluginITO_Messages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV);
const PluginITO_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(187), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4859), __webpack_require__.e(876), __webpack_require__.e(8927), __webpack_require__.e(9939)]).then(__webpack_require__.bind(__webpack_require__, 45684))
, PluginITO_Messages.rpc);


/***/ }),

/***/ 65375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "fy": () => (/* binding */ mindsWorkerBase)
/* harmony export */ });
/* unused harmony export isMinds */
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57614);

const MINDS_ID = 'minds.com';
const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const mindsBase = {
    networkIdentifier: MINDS_ID,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__/* .SocialNetworkEnum.Minds */ .Gq.Minds,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('minds.com');
    }
};
function isMinds(ui) {
    return ui.networkIdentifier === MINDS_ID;
}
const mindsWorkerBase = {
    ...mindsBase,
    gunNetworkHint: 'minds-'
};


/***/ }),

/***/ 26340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ EthereumWalletConnectedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(20333);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var dist = __webpack_require__(98193);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(47906);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(63081);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(1347);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(26618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletRiskWarningDialog.ts




const useWalletRiskWarningDialog = ()=>{
    const account = (0,useAccount/* useAccount */.m)();
    const [isConfirmed, setConfirmed] = (0,react.useState)(false);
    const fetchRiskWarningStatus = ()=>{
        if (!account) setConfirmed(false);
        else messages/* WalletRPC.getRiskWarningConfirmed */.V.getRiskWarningConfirmed(account).then((confirmed)=>setConfirmed(confirmed !== null && confirmed !== void 0 ? confirmed : false)
        );
    };
    const { openDialog  } = (0,dist/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletRiskWarningDialogUpdated */.R.events.walletRiskWarningDialogUpdated, fetchRiskWarningStatus);
    (0,react.useEffect)(fetchRiskWarningStatus, [
        account
    ]);
    return {
        isConfirmed,
        openDialog
    };
};

;// CONCATENATED MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function EthereumWalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const account = (0,useAccount/* useAccount */.m)();
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)();
    // #region remote controlled confirm risk warning
    const { isConfirmed: isRiskWarningConfirmed , openDialog: openRiskWarningDialog  } = useWalletRiskWarningDialog();
    // #endregion
    // #region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,dist/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    if (!account) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openSelectProviderDialog,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_connect_a_wallet')
        })
    }));
    if (!isRiskWarningConfirmed && !hideRiskWarningConfirmed) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openRiskWarningDialog,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_confirm_risk_warning')
        })
    }));
    var _value;
    if ((0,base_src/* isZero */.Fr)((_value = nativeTokenBalance.value) !== null && _value !== void 0 ? _value : '0') && !offChain) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.gasFeeButton),
            disabled: !nativeTokenBalance.error,
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: nativeTokenBalance.retry,
            ...props.ActionButtonProps,
            children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
        })
    }));
    if (!chainIdValid && !offChain) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.invalidButton),
            disabled: true,
            fullWidth: true,
            variant: "contained",
            size: "large",
            ...props.ActionButtonProps,
            children: t('plugin_wallet_invalid_network')
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: children
    }));
}


/***/ }),

/***/ 34517:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"unlocked","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"bytes32","name":"validation","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 47744:
/***/ ((module) => {

module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"end","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"indexed":false,"internalType":"uint128[]","name":"ratios","type":"uint128[]"},{"indexed":false,"internalType":"address","name":"qualification","type":"address"},{"indexed":false,"internalType":"uint256","name":"limit","type":"uint256"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"uint128","name":"input_total","type":"uint128"},{"indexed":false,"internalType":"bool","name":"claimed","type":"bool"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[],"name":"base_time","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"destructed","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"end_time","type":"uint256"},{"internalType":"address","name":"qualification_addr","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_base_time","type":"uint64"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint32","name":"_unlock_time","type":"uint32"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);