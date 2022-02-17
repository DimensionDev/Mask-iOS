"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4083],{

/***/ 21089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visuallyHidden);

/***/ }),

/***/ 25599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fF": () => (/* binding */ ITO_MetadataReader),
  "th": () => (/* binding */ gcd),
  "cr": () => (/* binding */ isCompactPayload),
  "_x": () => (/* binding */ payloadIntoMask),
  "_D": () => (/* binding */ payloadOutMask),
  "xT": () => (/* binding */ sortTokens),
  "F6": () => (/* binding */ tokenIntoMask)
});

// UNUSED EXPORTS: payloadOutMaskCompact, renderWithITO_Metadata, timestampInMask, timestampOutMask, tokenOutMask

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var constants = __webpack_require__(82611);
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"total_remaining":{"type":"string","title":"total_remaining"},"chain_id":{"type":"number","title":"chain_id"},"start_time":{"type":"number","title":"start_time"},"end_time":{"type":"number","title":"end_time"},"unlock_time":{"type":"number","title":"unlock_time"},"qualification_address":{"type":"string","title":"qualification_address"},"regions":{"type":"string","title":"regions"},"creation_time":{"type":"number","title":"creation_time"},"token":{"$ref":"#/definitions/token"},"seller":{"$ref":"#/definitions/trader"},"buyers":{"type":"array","title":"buyers","description":"A list of exchange token buyer","additionalItems":true,"items":{"anyOf":[{"$ref":"#/definitions/trader"}]}},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"$ref":"#/definitions/token"}]}}},"required":["contract_address","pid","password","message","limit","total","total_remaining","chain_id","start_time","end_time","creation_time","token","seller","buyers","exchange_amounts","exchange_tokens"]}');
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"chain_id":{"type":"number","title":"chain_id"},"token":{"type":"string","title":"token"},"seller":{"$ref":"#/definitions/trader"},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"properties":{"address":{"type":"string","title":"address"}}}]}}},"required":["contract_address","pid","password","message","limit","total","chain_id","seller","exchange_amounts","exchange_tokens"]}');
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts






const reader_v1 = (0,metadata/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_1 */.uJ, schema_v1_namespaceObject);
const reader_v2 = (0,metadata/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_2 */.ag, schema_v2_namespaceObject);
const renderWithITO_Metadata = (0,metadata/* createRenderWithMetadata */.mC)(ITO_MetadataReader);
function ITO_MetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta);
}
/**
 * The greatest common divisor
 */ function gcd(a, b) {
    let a_ = a.abs();
    let b_ = b.abs();
    if (b_.isGreaterThan(a_)) {
        const temp = b_;
        b_ = a_;
        a_ = temp;
    }
    while(true){
        if (b_.isZero()) return a_;
        a_ = a_.mod(b_);
        if (a_.isZero()) return b_;
        b_ = b_.mod(a_);
    }
}
function sortTokens(tokenA, tokenB) {
    const addressA = tokenA.address.toLowerCase();
    const addressB = tokenB.address.toLowerCase();
    if ((0,src/* isNative */.tYA)(addressA)) return -1;
    if ((0,src/* isNative */.tYA)(addressB)) return 1;
    return addressA < addressB ? -1 : 1;
}
function timestampInMask(timestamp) {
    return timestamp * 1000;
}
function timestampOutMask(timestamp) {
    return Math.floor(timestamp / 1000);
}
function tokenIntoMask(token) {
    return {
        ...(0,lodash.omit)(token, 'chain_id'),
        chainId: token.chain_id
    };
}
function tokenOutMask(token) {
    return {
        ...(0,lodash.omit)(token, 'chainId'),
        chain_id: token.chainId
    };
}
function payloadIntoMask(payload) {
    return {
        ...payload,
        start_time: timestampInMask(payload.start_time),
        end_time: timestampInMask(payload.end_time),
        creation_time: timestampInMask(payload.creation_time),
        token: tokenIntoMask(payload.token),
        exchange_tokens: payload.exchange_tokens.map(tokenIntoMask).sort(sortTokens)
    };
}
function payloadOutMask(payload) {
    return {
        ...payload,
        start_time: timestampOutMask(payload.start_time),
        end_time: timestampOutMask(payload.end_time),
        creation_time: timestampOutMask(payload.creation_time),
        token: tokenOutMask(payload.token),
        exchange_tokens: payload.exchange_tokens.map(tokenOutMask)
    };
}
function payloadOutMaskCompact(payload) {
    return {
        ...payload,
        // HOTFIX of image payload for ITO
        // remove unnecessary chunks of data to reduce the size of payload
        token: tokenOutMask(payload.token),
        contract_address: '',
        message: '',
        start_time: 0,
        end_time: 0,
        creation_time: 0,
        limit: '0',
        total_remaining: '0',
        buyers: [],
        exchange_amounts: [],
        exchange_tokens: []
    };
}
function isCompactPayload(payload) {
    return !payload.exchange_tokens.length;
}


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

/***/ 16494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
;// CONCATENATED MODULE: ./src/plugins/ITO/assets/ItoLabelIcon.tsx

const ItoLabelIcon = ({ size =24  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M23.4867 7.61475C23.4632 8.64131 11.9976 22.3382 11.9976 22.3382C11.9976 22.3382 4.93356 14.346 0.513245 7.61709H23.4867V7.61475Z",
                fill: "#FFB600"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M18.7195 1.66162H5.28043L0.513245 7.61475H23.4867L18.7195 1.66162Z",
                fill: "#FFD401"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M7.42957 7.61475L11.9999 1.66162L16.3007 7.61475H7.42957Z",
                fill: "#FFFFFD"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M7.42957 7.61475L11.9975 22.3382L16.3007 7.61475H7.42957Z",
                fill: "white"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M5.28043 1.66162L7.42965 7.61475H0.513245L5.28043 1.66162Z",
                fill: "#FAFF73"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M18.7194 1.66162L16.3007 7.61475H23.4866L18.7194 1.66162Z",
                fill: "#FFFFFD"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.8351 7.854C16.6523 7.91494 16.5234 8.03447 16.4484 8.21025C16.3195 8.39541 16.2773 8.60869 16.2445 8.82432C16.2093 9.03525 16.1882 9.24853 16.1578 9.48994C16.1203 9.12197 16.0875 8.78213 15.9914 8.454C16.0078 8.42353 15.9914 8.40713 15.9656 8.39541L15.9375 8.3251C15.9328 8.31807 15.9304 8.30869 15.9257 8.30166C15.9093 8.2665 15.8906 8.229 15.8742 8.19385C15.8648 8.11182 15.8156 8.05791 15.7429 8.02041C15.7054 7.94072 15.6398 7.89385 15.5531 7.8751C15.5437 7.86807 15.532 7.86338 15.5226 7.85635C15.4453 7.77432 15.3468 7.74385 15.239 7.73916C15.232 7.73682 15.225 7.73447 15.2156 7.73447C15.164 7.69932 15.1101 7.68057 15.0468 7.69463C15.0304 7.69229 15.014 7.68994 15 7.6876C14.9953 7.68291 14.9882 7.68291 14.9835 7.68525H14.9789C14.9179 7.65244 14.8546 7.63369 14.7843 7.64775C14.7703 7.64541 14.7539 7.64541 14.7398 7.64307C14.7093 7.61025 14.6648 7.63135 14.632 7.61494C14.571 7.58682 14.625 7.5751 14.6437 7.56103C14.6578 7.55869 14.6742 7.55635 14.6882 7.55635C14.714 7.57041 14.7398 7.56807 14.7609 7.54697C14.9578 7.5165 15.157 7.48369 15.3468 7.42041C15.3867 7.40635 15.4218 7.38057 15.4593 7.35947C15.6281 7.28447 15.7851 7.19775 15.839 6.99853C15.9656 6.88603 15.9937 6.72666 16.0265 6.57666C16.0898 6.30479 16.1226 6.02354 16.1531 5.74463C16.1976 5.98604 16.2093 6.23213 16.2609 6.47119C16.3054 6.66338 16.3546 6.85557 16.4625 7.02432C16.5796 7.21182 16.7531 7.329 16.9593 7.40635C17.2289 7.50713 17.5148 7.53291 17.796 7.57041C17.8546 7.57744 17.9132 7.5915 17.9976 7.60557C17.6812 7.63369 17.3929 7.6665 17.114 7.73916C17.0179 7.7626 16.9148 7.78603 16.8351 7.854Z",
                fill: "#FBFAF4"
            })
        ]
    })
;

// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx
var EthereumChainBoundary = __webpack_require__(85249);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(25599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ./src/plugins/ITO/messages.ts
var messages = __webpack_require__(33268);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/usePoolPayload.ts


function usePoolPayload(pid) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!pid) return;
        return messages/* PluginITO_RPC.getPool */.k.getPool(pid);
    }, [
        pid
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/OpenInNew.js
var OpenInNew = __webpack_require__(68682);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(5075);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(83250);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var constants = __webpack_require__(82611);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/plugins/ITO/types.ts
var ITO_Status;
(function(ITO_Status1) {
    ITO_Status1["waited"] = "waited";
    ITO_Status1["started"] = "started";
    ITO_Status1["expired"] = "expired";
})(ITO_Status || (ITO_Status = {
}));
var DialogTabs;
(function(DialogTabs1) {
    DialogTabs1[DialogTabs1["create"] = 0] = "create";
    DialogTabs1[DialogTabs1["past"] = 1] = "past";
})(DialogTabs || (DialogTabs = {
}));

// EXTERNAL MODULE: ./src/plugins/ITO/Worker/apis/checkAvailability.ts
var checkAvailability = __webpack_require__(40907);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useAvailability.ts



function useAvailability(id, contract_address) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { ITO_CONTRACT_ADDRESS  } = (0,web3_shared_src/* useITOConstants */.mgD)();
    const isV1 = (0,web3_shared_src/* isSameAddress */.Wr$)(contract_address !== null && contract_address !== void 0 ? contract_address : '', ITO_CONTRACT_ADDRESS);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!id || !contract_address) return null;
        return (0,checkAvailability/* checkAvailability */.g)(id, account, contract_address, chainId, isV1);
    }, [
        id,
        account
    ]);
}

;// CONCATENATED MODULE: ../web3-contracts/abis/Qualification.json
const Qualification_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_start_time","type":"uint256"},{"internalType":"uint256","name":"_max_gas_price","type":"uint256"},{"internalType":"uint256","name":"_min_token_amount","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint8","name":"_lucky_factor","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"GasPriceOver","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"qualified","type":"bool"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Qualification","type":"event"},{"anonymous":false,"inputs":[],"name":"Unlucky","type":"event"},{"inputs":[],"name":"get_creation_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_start_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"ifQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isLucky","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"ito_start_time","type":"uint256"}],"name":"logQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lucky_factor","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"max_gas_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"min_token_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_lucky_factor","type":"uint8"}],"name":"set_lucky_factor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_max_gas_price","type":"uint256"}],"name":"set_max_gas_price","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min_token_amount","type":"uint256"}],"name":"set_min_token_amount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start_time","type":"uint256"}],"name":"set_start_time","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token_addr","type":"address"}],"name":"set_token_addr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"token_addr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/Qualification2.json
const Qualification2_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_start_time","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"qualified","type":"bool"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Qualification","type":"event"},{"inputs":[],"name":"get_start_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"ifQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"},{"internalType":"string","name":"errorMsg","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"logQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"},{"internalType":"string","name":"errorMsg","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start_time","type":"uint256"}],"name":"set_start_time","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useQualificationContract.ts



function useQualificationContract(address, ito_address) {
    const { ITO_CONTRACT_ADDRESS  } = (0,web3_shared_src/* useITOConstants */.mgD)();
    const QLF_CONTRACT = (0,web3_shared_src/* useContract */.cqn)(address, Qualification_namespaceObject);
    const QLF2_CONTRACT = (0,web3_shared_src/* useContract */.cqn)(address, Qualification2_namespaceObject);
    return (0,web3_shared_src/* isSameAddress */.Wr$)(ito_address, ITO_CONTRACT_ADDRESS) ? {
        version: 1,
        contract: QLF_CONTRACT
    } : {
        version: 2,
        contract: QLF2_CONTRACT
    };
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useQualification.ts



function useQualification(qualification_address, ito_address) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { contract: qualificationContract  } = useQualificationContract(qualification_address, ito_address);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const startTime = await qualificationContract.methods.get_start_time().call({
            from: account
        });
        return Number(startTime) * 1000;
    }, [
        account,
        qualificationContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useAvailabilityComputed.ts






function useAvailabilityComputed(payload) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { DEFAULT_QUALIFICATION2_ADDRESS  } = (0,web3_shared_src/* useITOConstants */.mgD)();
    const asyncResult = useAvailability(payload.pid, payload.contract_address);
    const { value: availability , loading: loadingITO  } = asyncResult;
    var _qualification_address, ref;
    const qualificationAddress = (ref = (_qualification_address = payload.qualification_address) !== null && _qualification_address !== void 0 ? _qualification_address : availability === null || availability === void 0 ? void 0 : availability.qualification_addr) !== null && ref !== void 0 ? ref : DEFAULT_QUALIFICATION2_ADDRESS;
    const { value: qualification_start_time , loading: loadingQual  } = useQualification(qualificationAddress, payload.contract_address);
    asyncResult.loading = loadingITO || loadingQual;
    if (!availability) return {
        ...asyncResult,
        payload,
        computed: {
            remaining: '0',
            startTime: 0,
            endTime: 0,
            canFetch: false,
            canSwap: false,
            canShare: false,
            canRefund: false,
            isUnlocked: false,
            hasLockTime: false,
            unlockTime: 0,
            qualificationAddress,
            listOfStatus: (0,lodash.compact)([
                ITO_Status.expired
            ])
        }
    };
    const _startTime = Number(availability.start_time) * 1000 ? Number(availability.start_time) * 1000 : payload.start_time;
    const endTime = Number(availability.end_time) * 1000 ? Number(availability.end_time) * 1000 : payload.end_time;
    const startTime = qualification_start_time && qualification_start_time > _startTime ? qualification_start_time : _startTime;
    const isStarted = startTime < Date.now();
    const isExpired = availability.expired;
    const unlockTime = Number(availability.unlock_time) * 1000;
    const hasLockTime = unlockTime !== constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm;
    const isCompleted = Number(availability.swapped) > 0;
    return {
        ...asyncResult,
        computed: {
            remaining: availability.remaining,
            startTime,
            endTime,
            unlockTime,
            qualificationAddress,
            hasLockTime,
            isUnlocked: availability.unlocked,
            canFetch: payload.chain_id === chainId,
            canSwap: isStarted && !isExpired && !isCompleted && payload.chain_id === chainId && payload.password,
            canRefund: isExpired && payload.chain_id === chainId,
            canShare: !isStarted,
            listOfStatus: (0,lodash.compact)([
                isStarted ? ITO_Status.started : ITO_Status.waited,
                isExpired ? ITO_Status.expired : undefined, 
            ])
        }
    };
}

// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimCallback.ts
var useClaimCallback = __webpack_require__(418);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useITO_Contract.ts
var useITO_Contract = __webpack_require__(78566);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useDestructCallback.ts



function useDestructCallback(ito_address) {
    const nonce = (0,web3_shared_src/* useNonce */.XEd)();
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { contract: ITO_Contract  } = (0,useITO_Contract/* useITO_Contract */.k)(ito_address);
    const [destructState, setDestructState] = (0,web3_shared_src/* useTransactionState */.pld)();
    const destructCallback = (0,react.useCallback)(async (id)=>{
        if (!ITO_Contract || !id) {
            setDestructState({
                type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setDestructState({
            type: web3_shared_src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await ITO_Contract.methods.destruct(id).estimateGas({
                from: account
            }).catch((error)=>{
                setDestructState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            const onConfirm = (no, receipt)=>{
                setDestructState({
                    type: web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                    no,
                    receipt
                });
                resolve(receipt.transactionHash);
            };
            const onFailed = (error)=>{
                setDestructState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                reject(error);
            };
            const promiEvent = ITO_Contract.methods.destruct(id).send(config);
            promiEvent.on(web3_shared_src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, onConfirm).on(web3_shared_src/* TransactionEventType.ERROR */.iED.ERROR, onFailed);
        });
    }, [
        ITO_Contract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setDestructState({
            type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        destructState,
        destructCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useIfQualified.ts



function useIfQualified(address, ito_address) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { contract: qualificationContract , version  } = useQualificationContract(address, ito_address);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!qualificationContract) return false;
        return (version === 1 ? qualificationContract.methods.ifQualified(account) : qualificationContract.methods.ifQualified(account, [])).call({
            from: account
        });
    }, [
        account,
        qualificationContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/usePoolTradeInfo.ts


/**
 * Get all trading activities of a given trader on a specific pool.
 * @param pid
 * @param trader
 */ function usePoolTradeInfo(pid, trader) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!pid || !trader) return;
        return messages/* PluginITO_RPC.getTradeInfo */.k.getTradeInfo(pid, trader);
    }, [
        pid,
        trader
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/assets/regions.json
const regions_namespaceObject = JSON.parse('[{"code":"AF","name":"Afghanistan"},{"code":"AX","name":"Åland Islands"},{"code":"AL","name":"Albania"},{"code":"DZ","name":"Algeria"},{"code":"AS","name":"American Samoa"},{"code":"AD","name":"Andorra"},{"code":"AO","name":"Angola"},{"code":"AI","name":"Anguilla"},{"code":"AQ","name":"Antarctica"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AR","name":"Argentina"},{"code":"AM","name":"Armenia"},{"code":"AW","name":"Aruba"},{"code":"AU","name":"Australia"},{"code":"AT","name":"Austria"},{"code":"AZ","name":"Azerbaijan"},{"code":"BS","name":"Bahamas"},{"code":"BH","name":"Bahrain"},{"code":"BD","name":"Bangladesh"},{"code":"BB","name":"Barbados"},{"code":"BY","name":"Belarus"},{"code":"BE","name":"Belgium"},{"code":"BZ","name":"Belize"},{"code":"BJ","name":"Benin"},{"code":"BM","name":"Bermuda"},{"code":"BT","name":"Bhutan"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BW","name":"Botswana"},{"code":"BV","name":"Bouvet Island"},{"code":"BR","name":"Brazil"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BG","name":"Bulgaria"},{"code":"BF","name":"Burkina Faso"},{"code":"BI","name":"Burundi"},{"code":"KH","name":"Cambodia"},{"code":"CM","name":"Cameroon"},{"code":"CA","name":"Canada"},{"code":"CV","name":"Cape Verde"},{"code":"KY","name":"Cayman Islands"},{"code":"CF","name":"Central African Republic"},{"code":"TD","name":"Chad"},{"code":"CL","name":"Chile"},{"code":"CN","name":"China"},{"code":"CX","name":"Christmas Island"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CO","name":"Colombia"},{"code":"KM","name":"Comoros"},{"code":"CG","name":"Congo"},{"code":"CD","name":"Congo, the Democratic Republic of the"},{"code":"CK","name":"Cook Islands"},{"code":"CR","name":"Costa Rica"},{"code":"CI","name":"Côte d\'Ivoire"},{"code":"HR","name":"Croatia"},{"code":"CU","name":"Cuba"},{"code":"CW","name":"Curaçao"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czech Republic"},{"code":"DK","name":"Denmark"},{"code":"DJ","name":"Djibouti"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"EC","name":"Ecuador"},{"code":"EG","name":"Egypt"},{"code":"SV","name":"El Salvador"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"ER","name":"Eritrea"},{"code":"EE","name":"Estonia"},{"code":"ET","name":"Ethiopia"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FO","name":"Faroe Islands"},{"code":"FJ","name":"Fiji"},{"code":"FI","name":"Finland"},{"code":"FR","name":"France"},{"code":"GF","name":"French Guiana"},{"code":"PF","name":"French Polynesia"},{"code":"TF","name":"French Southern Territories"},{"code":"GA","name":"Gabon"},{"code":"GM","name":"Gambia"},{"code":"GE","name":"Georgia"},{"code":"DE","name":"Germany"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GR","name":"Greece"},{"code":"GL","name":"Greenland"},{"code":"GD","name":"Grenada"},{"code":"GP","name":"Guadeloupe"},{"code":"GU","name":"Guam"},{"code":"GT","name":"Guatemala"},{"code":"GG","name":"Guernsey"},{"code":"GN","name":"Guinea"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HT","name":"Haiti"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"VA","name":"Holy See (Vatican City State)"},{"code":"HN","name":"Honduras"},{"code":"HK","name":"Hong Kong"},{"code":"HU","name":"Hungary"},{"code":"IS","name":"Iceland"},{"code":"IN","name":"India"},{"code":"ID","name":"Indonesia"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IQ","name":"Iraq"},{"code":"IE","name":"Ireland"},{"code":"IM","name":"Isle of Man"},{"code":"IL","name":"Israel"},{"code":"IT","name":"Italy"},{"code":"JM","name":"Jamaica"},{"code":"JP","name":"Japan"},{"code":"JE","name":"Jersey"},{"code":"JO","name":"Jordan"},{"code":"KZ","name":"Kazakhstan"},{"code":"KE","name":"Kenya"},{"code":"KI","name":"Kiribati"},{"code":"KP","name":"Korea, Democratic People\'s Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KG","name":"Kyrgyzstan"},{"code":"LA","name":"Lao People\'s Democratic Republic"},{"code":"LV","name":"Latvia"},{"code":"LB","name":"Lebanon"},{"code":"LS","name":"Lesotho"},{"code":"LR","name":"Liberia"},{"code":"LY","name":"Libya"},{"code":"LI","name":"Liechtenstein"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"MO","name":"Macao"},{"code":"MK","name":"Macedonia, the Former Yugoslav Republic of"},{"code":"MG","name":"Madagascar"},{"code":"MW","name":"Malawi"},{"code":"MY","name":"Malaysia"},{"code":"MV","name":"Maldives"},{"code":"ML","name":"Mali"},{"code":"MT","name":"Malta"},{"code":"MH","name":"Marshall Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MU","name":"Mauritius"},{"code":"YT","name":"Mayotte"},{"code":"MX","name":"Mexico"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"MD","name":"Moldova, Republic of"},{"code":"MC","name":"Monaco"},{"code":"MN","name":"Mongolia"},{"code":"ME","name":"Montenegro"},{"code":"MS","name":"Montserrat"},{"code":"MA","name":"Morocco"},{"code":"MZ","name":"Mozambique"},{"code":"MM","name":"Myanmar"},{"code":"NA","name":"Namibia"},{"code":"NR","name":"Nauru"},{"code":"NP","name":"Nepal"},{"code":"NL","name":"Netherlands"},{"code":"NC","name":"New Caledonia"},{"code":"NZ","name":"New Zealand"},{"code":"NI","name":"Nicaragua"},{"code":"NE","name":"Niger"},{"code":"NG","name":"Nigeria"},{"code":"NU","name":"Niue"},{"code":"NF","name":"Norfolk Island"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"NO","name":"Norway"},{"code":"OM","name":"Oman"},{"code":"PK","name":"Pakistan"},{"code":"PW","name":"Palau"},{"code":"PS","name":"Palestine, State of"},{"code":"PA","name":"Panama"},{"code":"PG","name":"Papua New Guinea"},{"code":"PY","name":"Paraguay"},{"code":"PE","name":"Peru"},{"code":"PH","name":"Philippines"},{"code":"PN","name":"Pitcairn"},{"code":"PL","name":"Poland"},{"code":"PT","name":"Portugal"},{"code":"PR","name":"Puerto Rico"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"BL","name":"Saint Barthélemy"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"LC","name":"Saint Lucia"},{"code":"MF","name":"Saint Martin (French part)"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"WS","name":"Samoa"},{"code":"SM","name":"San Marino"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SA","name":"Saudi Arabia"},{"code":"SN","name":"Senegal"},{"code":"RS","name":"Serbia"},{"code":"SC","name":"Seychelles"},{"code":"SL","name":"Sierra Leone"},{"code":"SG","name":"Singapore"},{"code":"SX","name":"Sint Maarten (Dutch part)"},{"code":"SK","name":"Slovakia"},{"code":"SI","name":"Slovenia"},{"code":"SB","name":"Solomon Islands"},{"code":"SO","name":"Somalia"},{"code":"ZA","name":"South Africa"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"SS","name":"South Sudan"},{"code":"ES","name":"Spain"},{"code":"LK","name":"Sri Lanka"},{"code":"SD","name":"Sudan"},{"code":"SR","name":"Suriname"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SZ","name":"Swaziland"},{"code":"SE","name":"Sweden"},{"code":"CH","name":"Switzerland"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"TW","name":"Taiwan"},{"code":"TJ","name":"Tajikistan"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"TH","name":"Thailand"},{"code":"TL","name":"Timor-Leste"},{"code":"TG","name":"Togo"},{"code":"TK","name":"Tokelau"},{"code":"TO","name":"Tonga"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TN","name":"Tunisia"},{"code":"TR","name":"Turkey"},{"code":"TM","name":"Turkmenistan"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TV","name":"Tuvalu"},{"code":"UG","name":"Uganda"},{"code":"UA","name":"Ukraine"},{"code":"AE","name":"United Arab Emirates"},{"code":"GB","name":"United Kingdom"},{"code":"US","name":"United States"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VU","name":"Vanuatu"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VN","name":"Viet Nam"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"WF","name":"Wallis and Futuna"},{"code":"EH","name":"Western Sahara"},{"code":"YE","name":"Yemen"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}]');
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useRegion.ts
/* eslint-disable @typescript-eslint/prefer-enum-initializers */ 

// TODO better way to do the i18n of region

var // country and region code from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// there are many regions in the list, CountryCode is not precise,  so named as RegionCode or CountryRegionCode ?
RegionEnum;
(function(RegionEnum1) {
    RegionEnum1[RegionEnum1["AF"] = 0] = "AF";
    RegionEnum1[RegionEnum1["AX"] = 1] = "AX";
    RegionEnum1[RegionEnum1["AL"] = 2] = "AL";
    RegionEnum1[RegionEnum1["DZ"] = 3] = "DZ";
    RegionEnum1[RegionEnum1["AS"] = 4] = "AS";
    RegionEnum1[RegionEnum1["AD"] = 5] = "AD";
    RegionEnum1[RegionEnum1["AO"] = 6] = "AO";
    RegionEnum1[RegionEnum1["AI"] = 7] = "AI";
    RegionEnum1[RegionEnum1["AQ"] = 8] = "AQ";
    RegionEnum1[RegionEnum1["AG"] = 9] = "AG";
    RegionEnum1[RegionEnum1["AR"] = 10] = "AR";
    RegionEnum1[RegionEnum1["AM"] = 11] = "AM";
    RegionEnum1[RegionEnum1["AW"] = 12] = "AW";
    RegionEnum1[RegionEnum1["AU"] = 13] = "AU";
    RegionEnum1[RegionEnum1["AT"] = 14] = "AT";
    RegionEnum1[RegionEnum1["AZ"] = 15] = "AZ";
    RegionEnum1[RegionEnum1["BS"] = 16] = "BS";
    RegionEnum1[RegionEnum1["BH"] = 17] = "BH";
    RegionEnum1[RegionEnum1["BD"] = 18] = "BD";
    RegionEnum1[RegionEnum1["BB"] = 19] = "BB";
    RegionEnum1[RegionEnum1["BY"] = 20] = "BY";
    RegionEnum1[RegionEnum1["BE"] = 21] = "BE";
    RegionEnum1[RegionEnum1["BZ"] = 22] = "BZ";
    RegionEnum1[RegionEnum1["BJ"] = 23] = "BJ";
    RegionEnum1[RegionEnum1["BM"] = 24] = "BM";
    RegionEnum1[RegionEnum1["BT"] = 25] = "BT";
    RegionEnum1[RegionEnum1["BO"] = 26] = "BO";
    RegionEnum1[RegionEnum1["BQ"] = 27] = "BQ";
    RegionEnum1[RegionEnum1["BA"] = 28] = "BA";
    RegionEnum1[RegionEnum1["BW"] = 29] = "BW";
    RegionEnum1[RegionEnum1["BV"] = 30] = "BV";
    RegionEnum1[RegionEnum1["BR"] = 31] = "BR";
    RegionEnum1[RegionEnum1["IO"] = 32] = "IO";
    RegionEnum1[RegionEnum1["BN"] = 33] = "BN";
    RegionEnum1[RegionEnum1["BG"] = 34] = "BG";
    RegionEnum1[RegionEnum1["BF"] = 35] = "BF";
    RegionEnum1[RegionEnum1["BI"] = 36] = "BI";
    RegionEnum1[RegionEnum1["KH"] = 37] = "KH";
    RegionEnum1[RegionEnum1["CM"] = 38] = "CM";
    RegionEnum1[RegionEnum1["CA"] = 39] = "CA";
    RegionEnum1[RegionEnum1["CV"] = 40] = "CV";
    RegionEnum1[RegionEnum1["KY"] = 41] = "KY";
    RegionEnum1[RegionEnum1["CF"] = 42] = "CF";
    RegionEnum1[RegionEnum1["TD"] = 43] = "TD";
    RegionEnum1[RegionEnum1["CL"] = 44] = "CL";
    RegionEnum1[RegionEnum1["CN"] = 45] = "CN";
    RegionEnum1[RegionEnum1["CX"] = 46] = "CX";
    RegionEnum1[RegionEnum1["CC"] = 47] = "CC";
    RegionEnum1[RegionEnum1["CO"] = 48] = "CO";
    RegionEnum1[RegionEnum1["KM"] = 49] = "KM";
    RegionEnum1[RegionEnum1["CG"] = 50] = "CG";
    RegionEnum1[RegionEnum1["CD"] = 51] = "CD";
    RegionEnum1[RegionEnum1["CK"] = 52] = "CK";
    RegionEnum1[RegionEnum1["CR"] = 53] = "CR";
    RegionEnum1[RegionEnum1["CI"] = 54] = "CI";
    RegionEnum1[RegionEnum1["HR"] = 55] = "HR";
    RegionEnum1[RegionEnum1["CU"] = 56] = "CU";
    RegionEnum1[RegionEnum1["CW"] = 57] = "CW";
    RegionEnum1[RegionEnum1["CY"] = 58] = "CY";
    RegionEnum1[RegionEnum1["CZ"] = 59] = "CZ";
    RegionEnum1[RegionEnum1["DK"] = 60] = "DK";
    RegionEnum1[RegionEnum1["DJ"] = 61] = "DJ";
    RegionEnum1[RegionEnum1["DM"] = 62] = "DM";
    RegionEnum1[RegionEnum1["DO"] = 63] = "DO";
    RegionEnum1[RegionEnum1["EC"] = 64] = "EC";
    RegionEnum1[RegionEnum1["EG"] = 65] = "EG";
    RegionEnum1[RegionEnum1["SV"] = 66] = "SV";
    RegionEnum1[RegionEnum1["GQ"] = 67] = "GQ";
    RegionEnum1[RegionEnum1["ER"] = 68] = "ER";
    RegionEnum1[RegionEnum1["EE"] = 69] = "EE";
    RegionEnum1[RegionEnum1["ET"] = 70] = "ET";
    RegionEnum1[RegionEnum1["FK"] = 71] = "FK";
    RegionEnum1[RegionEnum1["FO"] = 72] = "FO";
    RegionEnum1[RegionEnum1["FJ"] = 73] = "FJ";
    RegionEnum1[RegionEnum1["FI"] = 74] = "FI";
    RegionEnum1[RegionEnum1["FR"] = 75] = "FR";
    RegionEnum1[RegionEnum1["GF"] = 76] = "GF";
    RegionEnum1[RegionEnum1["PF"] = 77] = "PF";
    RegionEnum1[RegionEnum1["TF"] = 78] = "TF";
    RegionEnum1[RegionEnum1["GA"] = 79] = "GA";
    RegionEnum1[RegionEnum1["GM"] = 80] = "GM";
    RegionEnum1[RegionEnum1["GE"] = 81] = "GE";
    RegionEnum1[RegionEnum1["DE"] = 82] = "DE";
    RegionEnum1[RegionEnum1["GH"] = 83] = "GH";
    RegionEnum1[RegionEnum1["GI"] = 84] = "GI";
    RegionEnum1[RegionEnum1["GR"] = 85] = "GR";
    RegionEnum1[RegionEnum1["GL"] = 86] = "GL";
    RegionEnum1[RegionEnum1["GD"] = 87] = "GD";
    RegionEnum1[RegionEnum1["GP"] = 88] = "GP";
    RegionEnum1[RegionEnum1["GU"] = 89] = "GU";
    RegionEnum1[RegionEnum1["GT"] = 90] = "GT";
    RegionEnum1[RegionEnum1["GG"] = 91] = "GG";
    RegionEnum1[RegionEnum1["GN"] = 92] = "GN";
    RegionEnum1[RegionEnum1["GW"] = 93] = "GW";
    RegionEnum1[RegionEnum1["GY"] = 94] = "GY";
    RegionEnum1[RegionEnum1["HT"] = 95] = "HT";
    RegionEnum1[RegionEnum1["HM"] = 96] = "HM";
    RegionEnum1[RegionEnum1["VA"] = 97] = "VA";
    RegionEnum1[RegionEnum1["HN"] = 98] = "HN";
    RegionEnum1[RegionEnum1["HK"] = 99] = "HK";
    RegionEnum1[RegionEnum1["HU"] = 100] = "HU";
    RegionEnum1[RegionEnum1["IS"] = 101] = "IS";
    RegionEnum1[RegionEnum1["IN"] = 102] = "IN";
    RegionEnum1[RegionEnum1["ID"] = 103] = "ID";
    RegionEnum1[RegionEnum1["IR"] = 104] = "IR";
    RegionEnum1[RegionEnum1["IQ"] = 105] = "IQ";
    RegionEnum1[RegionEnum1["IE"] = 106] = "IE";
    RegionEnum1[RegionEnum1["IM"] = 107] = "IM";
    RegionEnum1[RegionEnum1["IL"] = 108] = "IL";
    RegionEnum1[RegionEnum1["IT"] = 109] = "IT";
    RegionEnum1[RegionEnum1["JM"] = 110] = "JM";
    RegionEnum1[RegionEnum1["JP"] = 111] = "JP";
    RegionEnum1[RegionEnum1["JE"] = 112] = "JE";
    RegionEnum1[RegionEnum1["JO"] = 113] = "JO";
    RegionEnum1[RegionEnum1["KZ"] = 114] = "KZ";
    RegionEnum1[RegionEnum1["KE"] = 115] = "KE";
    RegionEnum1[RegionEnum1["KI"] = 116] = "KI";
    RegionEnum1[RegionEnum1["KP"] = 117] = "KP";
    RegionEnum1[RegionEnum1["KR"] = 118] = "KR";
    RegionEnum1[RegionEnum1["KW"] = 119] = "KW";
    RegionEnum1[RegionEnum1["KG"] = 120] = "KG";
    RegionEnum1[RegionEnum1["LA"] = 121] = "LA";
    RegionEnum1[RegionEnum1["LV"] = 122] = "LV";
    RegionEnum1[RegionEnum1["LB"] = 123] = "LB";
    RegionEnum1[RegionEnum1["LS"] = 124] = "LS";
    RegionEnum1[RegionEnum1["LR"] = 125] = "LR";
    RegionEnum1[RegionEnum1["LY"] = 126] = "LY";
    RegionEnum1[RegionEnum1["LI"] = 127] = "LI";
    RegionEnum1[RegionEnum1["LT"] = 128] = "LT";
    RegionEnum1[RegionEnum1["LU"] = 129] = "LU";
    RegionEnum1[RegionEnum1["MO"] = 130] = "MO";
    RegionEnum1[RegionEnum1["MK"] = 131] = "MK";
    RegionEnum1[RegionEnum1["MG"] = 132] = "MG";
    RegionEnum1[RegionEnum1["MW"] = 133] = "MW";
    RegionEnum1[RegionEnum1["MY"] = 134] = "MY";
    RegionEnum1[RegionEnum1["MV"] = 135] = "MV";
    RegionEnum1[RegionEnum1["ML"] = 136] = "ML";
    RegionEnum1[RegionEnum1["MT"] = 137] = "MT";
    RegionEnum1[RegionEnum1["MH"] = 138] = "MH";
    RegionEnum1[RegionEnum1["MQ"] = 139] = "MQ";
    RegionEnum1[RegionEnum1["MR"] = 140] = "MR";
    RegionEnum1[RegionEnum1["MU"] = 141] = "MU";
    RegionEnum1[RegionEnum1["YT"] = 142] = "YT";
    RegionEnum1[RegionEnum1["MX"] = 143] = "MX";
    RegionEnum1[RegionEnum1["FM"] = 144] = "FM";
    RegionEnum1[RegionEnum1["MD"] = 145] = "MD";
    RegionEnum1[RegionEnum1["MC"] = 146] = "MC";
    RegionEnum1[RegionEnum1["MN"] = 147] = "MN";
    RegionEnum1[RegionEnum1["ME"] = 148] = "ME";
    RegionEnum1[RegionEnum1["MS"] = 149] = "MS";
    RegionEnum1[RegionEnum1["MA"] = 150] = "MA";
    RegionEnum1[RegionEnum1["MZ"] = 151] = "MZ";
    RegionEnum1[RegionEnum1["MM"] = 152] = "MM";
    RegionEnum1[RegionEnum1["NA"] = 153] = "NA";
    RegionEnum1[RegionEnum1["NR"] = 154] = "NR";
    RegionEnum1[RegionEnum1["NP"] = 155] = "NP";
    RegionEnum1[RegionEnum1["NL"] = 156] = "NL";
    RegionEnum1[RegionEnum1["NC"] = 157] = "NC";
    RegionEnum1[RegionEnum1["NZ"] = 158] = "NZ";
    RegionEnum1[RegionEnum1["NI"] = 159] = "NI";
    RegionEnum1[RegionEnum1["NE"] = 160] = "NE";
    RegionEnum1[RegionEnum1["NG"] = 161] = "NG";
    RegionEnum1[RegionEnum1["NU"] = 162] = "NU";
    RegionEnum1[RegionEnum1["NF"] = 163] = "NF";
    RegionEnum1[RegionEnum1["MP"] = 164] = "MP";
    RegionEnum1[RegionEnum1["NO"] = 165] = "NO";
    RegionEnum1[RegionEnum1["OM"] = 166] = "OM";
    RegionEnum1[RegionEnum1["PK"] = 167] = "PK";
    RegionEnum1[RegionEnum1["PW"] = 168] = "PW";
    RegionEnum1[RegionEnum1["PS"] = 169] = "PS";
    RegionEnum1[RegionEnum1["PA"] = 170] = "PA";
    RegionEnum1[RegionEnum1["PG"] = 171] = "PG";
    RegionEnum1[RegionEnum1["PY"] = 172] = "PY";
    RegionEnum1[RegionEnum1["PE"] = 173] = "PE";
    RegionEnum1[RegionEnum1["PH"] = 174] = "PH";
    RegionEnum1[RegionEnum1["PN"] = 175] = "PN";
    RegionEnum1[RegionEnum1["PL"] = 176] = "PL";
    RegionEnum1[RegionEnum1["PT"] = 177] = "PT";
    RegionEnum1[RegionEnum1["PR"] = 178] = "PR";
    RegionEnum1[RegionEnum1["QA"] = 179] = "QA";
    RegionEnum1[RegionEnum1["RE"] = 180] = "RE";
    RegionEnum1[RegionEnum1["RO"] = 181] = "RO";
    RegionEnum1[RegionEnum1["RU"] = 182] = "RU";
    RegionEnum1[RegionEnum1["RW"] = 183] = "RW";
    RegionEnum1[RegionEnum1["BL"] = 184] = "BL";
    RegionEnum1[RegionEnum1["SH"] = 185] = "SH";
    RegionEnum1[RegionEnum1["KN"] = 186] = "KN";
    RegionEnum1[RegionEnum1["LC"] = 187] = "LC";
    RegionEnum1[RegionEnum1["MF"] = 188] = "MF";
    RegionEnum1[RegionEnum1["PM"] = 189] = "PM";
    RegionEnum1[RegionEnum1["VC"] = 190] = "VC";
    RegionEnum1[RegionEnum1["WS"] = 191] = "WS";
    RegionEnum1[RegionEnum1["SM"] = 192] = "SM";
    RegionEnum1[RegionEnum1["ST"] = 193] = "ST";
    RegionEnum1[RegionEnum1["SA"] = 194] = "SA";
    RegionEnum1[RegionEnum1["SN"] = 195] = "SN";
    RegionEnum1[RegionEnum1["RS"] = 196] = "RS";
    RegionEnum1[RegionEnum1["SC"] = 197] = "SC";
    RegionEnum1[RegionEnum1["SL"] = 198] = "SL";
    RegionEnum1[RegionEnum1["SG"] = 199] = "SG";
    RegionEnum1[RegionEnum1["SX"] = 200] = "SX";
    RegionEnum1[RegionEnum1["SK"] = 201] = "SK";
    RegionEnum1[RegionEnum1["SI"] = 202] = "SI";
    RegionEnum1[RegionEnum1["SB"] = 203] = "SB";
    RegionEnum1[RegionEnum1["SO"] = 204] = "SO";
    RegionEnum1[RegionEnum1["ZA"] = 205] = "ZA";
    RegionEnum1[RegionEnum1["GS"] = 206] = "GS";
    RegionEnum1[RegionEnum1["SS"] = 207] = "SS";
    RegionEnum1[RegionEnum1["ES"] = 208] = "ES";
    RegionEnum1[RegionEnum1["LK"] = 209] = "LK";
    RegionEnum1[RegionEnum1["SD"] = 210] = "SD";
    RegionEnum1[RegionEnum1["SR"] = 211] = "SR";
    RegionEnum1[RegionEnum1["SJ"] = 212] = "SJ";
    RegionEnum1[RegionEnum1["SZ"] = 213] = "SZ";
    RegionEnum1[RegionEnum1["SE"] = 214] = "SE";
    RegionEnum1[RegionEnum1["CH"] = 215] = "CH";
    RegionEnum1[RegionEnum1["SY"] = 216] = "SY";
    RegionEnum1[RegionEnum1["TW"] = 217] = "TW";
    RegionEnum1[RegionEnum1["TJ"] = 218] = "TJ";
    RegionEnum1[RegionEnum1["TZ"] = 219] = "TZ";
    RegionEnum1[RegionEnum1["TH"] = 220] = "TH";
    RegionEnum1[RegionEnum1["TL"] = 221] = "TL";
    RegionEnum1[RegionEnum1["TG"] = 222] = "TG";
    RegionEnum1[RegionEnum1["TK"] = 223] = "TK";
    RegionEnum1[RegionEnum1["TO"] = 224] = "TO";
    RegionEnum1[RegionEnum1["TT"] = 225] = "TT";
    RegionEnum1[RegionEnum1["TN"] = 226] = "TN";
    RegionEnum1[RegionEnum1["TR"] = 227] = "TR";
    RegionEnum1[RegionEnum1["TM"] = 228] = "TM";
    RegionEnum1[RegionEnum1["TC"] = 229] = "TC";
    RegionEnum1[RegionEnum1["TV"] = 230] = "TV";
    RegionEnum1[RegionEnum1["UG"] = 231] = "UG";
    RegionEnum1[RegionEnum1["UA"] = 232] = "UA";
    RegionEnum1[RegionEnum1["AE"] = 233] = "AE";
    RegionEnum1[RegionEnum1["GB"] = 234] = "GB";
    RegionEnum1[RegionEnum1["US"] = 235] = "US";
    RegionEnum1[RegionEnum1["UM"] = 236] = "UM";
    RegionEnum1[RegionEnum1["UY"] = 237] = "UY";
    RegionEnum1[RegionEnum1["UZ"] = 238] = "UZ";
    RegionEnum1[RegionEnum1["VU"] = 239] = "VU";
    RegionEnum1[RegionEnum1["VE"] = 240] = "VE";
    RegionEnum1[RegionEnum1["VN"] = 241] = "VN";
    RegionEnum1[RegionEnum1["VG"] = 242] = "VG";
    RegionEnum1[RegionEnum1["VI"] = 243] = "VI";
    RegionEnum1[RegionEnum1["WF"] = 244] = "WF";
    RegionEnum1[RegionEnum1["EH"] = 245] = "EH";
    RegionEnum1[RegionEnum1["YE"] = 246] = "YE";
    RegionEnum1[RegionEnum1["ZM"] = 247] = "ZM";
    RegionEnum1[RegionEnum1["ZW"] = 248] = "ZW";
})(RegionEnum || (RegionEnum = {
}));
const regionNameMap = new Map(regions_namespaceObject.map((r)=>[
        r.code,
        r.name
    ]
));
const regionCodes = regions_namespaceObject.map((r)=>r.code
);
function createRegionResolver(api, field) {
    return async ()=>{
        const response = await fetch(api);
        const result = await response.json();
        const code = result[field];
        if (!code) {
            throw new Error('Failed to resolve region');
        }
        if (!(code in RegionEnum)) {
            throw new Error('unknown region');
        }
        return {
            code,
            name: regionNameMap.get(code)
        };
    };
}
const IPGeoResolver = createRegionResolver('https://service.r2d2.to/geolocation', 'region');
function useIPRegion() {
    return (0,useAsyncRetry/* default */.Z)(IPGeoResolver);
}
function useRegionList() {
    // TODO return name by i18n
    return regions_namespaceObject;
}
function useRegionSelect(initRegionCodes) {
    return (0,react.useState)(initRegionCodes ? [
        ...initRegionCodes
    ] : [
        ...regionCodes
    ]);
}
function encodeRegionCode(codes) {
    const isMoreThanHalf = codes.length > regionCodes.length / 2;
    if (isMoreThanHalf) {
        return '-' + regionCodes.filter((c)=>!codes.includes(c)
        );
    }
    return '+' + codes.join(',');
}
function decodeRegionCode(str) {
    str = str.toUpperCase();
    const isReverse = str.startsWith('-');
    const codes = str.slice(1).split(',').filter((c)=>regionNameMap.has(c)
    );
    if (isReverse) {
        return regionCodes.filter((c)=>!codes.includes(c)
        );
    }
    return codes;
}
function checkRegionRestrict(regions1) {
    return regions1.length !== regionCodes.length;
}

// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/StyledLinearProgress.tsx
var StyledLinearProgress = __webpack_require__(28745);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(87239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(98569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/RemindDialog.tsx












const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        reminderText: {
            color: '#FF5555',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1.5)
        },
        reminderTextFirst: {
            marginTop: 0
        },
        reminderTextLast: {
            marginBottom: 0
        },
        docBox: {
            overflow: 'scroll'
        },
        center: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.2rem'
        },
        bigCenter: {
            fontSize: '1.5rem'
        },
        bold: {
            fontWeight: 'bold',
            fontSize: '1.1rem'
        },
        wrapper: {
            padding: theme.spacing(2),
            background: (0,src/* getMaskColor */.nb)(theme).twitterBackground,
            borderRadius: theme.shape.borderRadius
        },
        tokenWrapper: {
            display: 'flex',
            alignItems: 'center',
            marginTop: theme.spacing(2),
            padding: theme.spacing(2.5, 0, 3.5, 2)
        },
        tokenIcon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 39,
            height: 39
        },
        tokenTextWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 45,
            marginLeft: '1rem'
        },
        tokenSymbol: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#15181B',
            fontSize: 18,
            cursor: 'default'
        },
        tokenLink: {
            color: '#6F767C',
            fontSize: 15,
            '&:hover': {
                textDecoration: 'none'
            }
        },
        comfirmWrapper: {
            marginTop: theme.spacing(1),
            display: 'flex',
            alignItems: 'center'
        },
        comfirmText: {
            color: '#6F767C'
        },
        button: {
            width: 'fit-content',
            margin: '0 auto',
            padding: '6px 48px'
        },
        table: {
            border: '1px solid #FF5555',
            color: '#FF5555'
        },
        cell: {
            width: '50%',
            border: '1px solid #FF5555',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        moreCell: {
            flexDirection: 'column'
        },
        column: {
            width: '100%',
            display: 'flex'
        },
        lowSpacing: {
            marginTop: 4,
            marginBottom: 4
        }
    })
);
function RemindDialog(props) {
    const { token , chainId , setStatus  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(useStyles(), {
    });
    const [agreeReminder, setAgreeReminder] = (0,react.useState)(false);
    const networkType = (0,web3_shared_src/* useNetworkType */.bLq)();
    const { tokensDetailed  } = (0,web3_shared_src/* useERC20TokenDetailedFromTokenLists */.u85)(token.address);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classnames_default()(classes.reminderText, classes.reminderTextFirst),
                        children: t('plugin_ito_dialog_claim_reminder_text1', {
                            networkType: (0,web3_shared_src/* resolveNetworkName */.nWu)(networkType)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.reminderText,
                        children: t('plugin_ito_dialog_claim_reminder_text2')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.reminderText,
                        children: t('plugin_ito_dialog_claim_reminder_text3')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classnames_default()(classes.reminderText, classes.reminderTextLast),
                        children: t('plugin_ito_dialog_claim_reminder_text4')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classnames_default()(classes.wrapper, classes.tokenWrapper),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                        address: token.address,
                        classes: {
                            icon: classes.tokenIcon
                        },
                        logoURI: tokensDetailed === null || tokensDetailed === void 0 ? void 0 : tokensDetailed.logoURI
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.tokenTextWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h5",
                                className: classes.tokenSymbol,
                                children: token.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                target: "_blank",
                                className: classes.tokenLink,
                                rel: "noopener noreferrer",
                                href: dist_default()((0,web3_shared_src/* resolveLinkOnExplorer */.CSY)(chainId), '/token/:address', {
                                    address: token.address
                                }),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedAddress, {
                                            address: token.address,
                                            size: 4
                                        }),
                                        " (",
                                        t('plugin_ito_view_on_explorer'),
                                        ")"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.comfirmWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                        color: "primary",
                        checked: agreeReminder,
                        onChange: (event)=>{
                            setAgreeReminder(event.target.checked);
                        }
                    }),
                    label: t('plugin_ito_dialog_claim_reminder_agree')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                color: "primary",
                className: classes.button,
                onClick: ()=>setStatus(SwapStatus.Swap)
                ,
                disabled: !agreeReminder,
                children: t('plugin_ito_continue')
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ShareDialog.tsx








const ShareDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        shareWrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: theme.spacing(2, 0)
        },
        shareAmount: {
            fontSize: 36,
            marginTop: 90,
            color: '#fff'
        },
        shareToken: {
            marginTop: 5,
            fontSize: 24,
            color: '#fff'
        },
        shareText: {
            marginTop: 20,
            fontSize: 24,
            color: '#fff'
        },
        shareButton: {
            width: 'fit-content',
            backgroundColor: '#FBD363 !important',
            padding: theme.spacing(0.5, 6),
            marginTop: theme.spacing(2),
            minHeight: 28
        },
        shareImage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundAttachment: 'local',
            backgroundPosition: '0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 475,
            height: 341,
            backgroundColor: '#FF5238',
            borderRadius: 10
        }
    })
);
function ShareDialog(props) {
    const ShareBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(96705), __webpack_require__.b));
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(ShareDialog_useStyles(), {
    });
    const { token , actualSwapAmount , shareSuccessLink , onClose  } = props;
    const amount = (0,web3_shared_src/* formatBalance */.azF)(actualSwapAmount, token.decimals);
    const onShareSuccess = (0,react.useCallback)(async ()=>{
        onClose();
        window.open(shareSuccessLink, '_blank', 'noopener noreferrer');
    }, [
        shareSuccessLink,
        onClose
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.shareWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.shareImage,
            style: {
                backgroundImage: `url(${ShareBackground})`,
                borderRadius: 12
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.shareAmount,
                    children: amount
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.shareToken,
                    children: token.symbol
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.shareText,
                    children: (0,web3_shared_src/* isZero */.Fr9)(actualSwapAmount) ? t('plugin_ito_out_of_stock_hit') : t('plugin_ito_congratulations')
                }),
                shareSuccessLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: onShareSuccess,
                    variant: "contained",
                    color: "primary",
                    className: classes.shareButton,
                    children: t('plugin_ito_dialog_swap_share_title')
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(90335);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Slider/Slider.js
var Slider = __webpack_require__(43317);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(30540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSwapCallback.ts








function useSwapCallback(payload, total, token, isQualificationHasLucky = false) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const nonce = (0,web3_shared_src/* useNonce */.XEd)();
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { ITO_CONTRACT_ADDRESS  } = (0,web3_shared_src/* useITOConstants */.mgD)();
    const { contract: ITO_Contract , version  } = (0,useITO_Contract/* useITO_Contract */.k)(payload.contract_address);
    const [swapState, setSwapState] = (0,web3_shared_src/* useTransactionState */.pld)();
    const { contract: qualificationContract  } = useQualificationContract(payload.qualification_address, payload.contract_address);
    const swapCallback = (0,react.useCallback)(async ()=>{
        if (!ITO_Contract || !qualificationContract || !payload) {
            setSwapState({
                type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        const { pid , password  } = payload;
        // error: cannot find password
        if (!password) {
            setSwapState({
                type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                error: new Error('Failed to swap token.')
            });
            return;
        }
        // error: poll has expired
        if (payload.end_time < Date.now()) {
            setSwapState({
                type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                error: new Error('Pool has expired.')
            });
            return;
        }
        // error: invalid swap amount
        if (!new (bignumber_default())(total).isPositive()) {
            setSwapState({
                type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                error: new Error('Invalid swap amount.')
            });
            return;
        }
        // error: invalid token
        const swapTokenAt = payload.exchange_tokens.findIndex((0,web3_shared_src/* currySameAddress */.DC3)(token.address));
        if (swapTokenAt === -1) {
            setSwapState({
                type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                error: new Error(`Unknown ${token.symbol} token.`)
            });
            return;
        }
        // error: not qualified
        try {
            const ifQualified = await (version === 1 ? qualificationContract.methods.ifQualified(account) : qualificationContract.methods.ifQualified(account, [])).call({
                from: account
            });
            if (!ifQualified) {
                setSwapState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error: new Error('Not Qualified.')
                });
                return;
            }
        } catch  {
            setSwapState({
                type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                error: new Error('Failed to read qualification.')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setSwapState({
            type: web3_shared_src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        // check remaining
        try {
            const availability = await (0,checkAvailability/* checkAvailability */.g)(pid, account, payload.contract_address, chainId, (0,web3_shared_src/* isSameAddress */.Wr$)(payload.contract_address, ITO_CONTRACT_ADDRESS));
            if ((0,web3_shared_src/* isZero */.Fr9)(availability.remaining)) {
                setSwapState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error: new Error('Out of Stock')
                });
                return;
            }
        } catch  {
            setSwapState({
                type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                error: new Error('Failed to check availability.')
            });
            return;
        }
        var ref;
        const swapParamsV1 = [
            pid,
            lib_default().soliditySha3(lib_default().hexToNumber(`0x${(0,utils/* buf2hex */.Cw)((0,utils/* hex2buf */.Yu)((ref = lib_default().sha3(password)) !== null && ref !== void 0 ? ref : '').slice(0, 5))}`), account),
            lib_default().sha3(account),
            swapTokenAt,
            total, 
        ];
        var ref1;
        const swapParamsV2 = [
            pid,
            lib_default().soliditySha3(lib_default().hexToNumber(`0x${(0,utils/* buf2hex */.Cw)((0,utils/* hex2buf */.Yu)((ref1 = lib_default().sha3(password)) !== null && ref1 !== void 0 ? ref1 : '').slice(0, 5))}`), account),
            swapTokenAt,
            total,
            [], 
        ];
        // estimate gas and compose transaction
        const value = new (bignumber_default())(token.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native ? total : '0').toFixed();
        const config = {
            from: account,
            gas: isQualificationHasLucky ? 200000 : await (version === 1 ? ITO_Contract.methods.swap(...swapParamsV1) : ITO_Contract.methods.swap(...swapParamsV2)).estimateGas({
                from: account,
                value
            }).catch((error)=>{
                setSwapState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce,
            value
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            const onSucceed = (no, receipt)=>{
                var ref2;
                setSwapState({
                    type: web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                    no,
                    receipt,
                    reason: !((ref2 = receipt.events) === null || ref2 === void 0 ? void 0 : ref2.SwapSuccess) ? t('plugin_ito_swap_unlucky_fail') : undefined
                });
                resolve();
            };
            const onFailed = (error)=>{
                setSwapState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                reject(error);
            };
            const onHash = (hash)=>{
                setSwapState({
                    type: web3_shared_src/* TransactionStateType.HASH */.n$V.HASH,
                    hash
                });
                resolve();
            };
            const promiEvent = (version === 1 ? ITO_Contract.methods.swap(...swapParamsV1) : ITO_Contract.methods.swap(...swapParamsV2)).send(config);
            promiEvent.on(web3_shared_src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, onHash).on(web3_shared_src/* TransactionEventType.ERROR */.iED.ERROR, onFailed).on(web3_shared_src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, onSucceed).on(web3_shared_src/* TransactionEventType.RECEIPT */.iED.RECEIPT, (receipt)=>onSucceed(0, receipt)
            );
        });
    }, [
        gasPrice,
        nonce,
        ITO_Contract,
        chainId,
        qualificationContract,
        account,
        payload,
        total,
        token.address,
        isQualificationHasLucky, 
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setSwapState({
            type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        swapState,
        swapCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(65164);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(77016);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useQualificationVerify.ts




function useQualificationVerify(address, ito_address) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { contract: qualificationContract , version  } = useQualificationContract(address, ito_address);
    const { value: isQualificationHasLucky , loading: loadingQualificationHasLucky  } = (0,web3_shared_src/* useERC165 */.i1y)(qualificationContract, address, constants/* QUALIFICATION_HAS_LUCKY_INTERFACE_ID */.tu);
    const { value: isQualification , loading: loadingQualification  } = (0,web3_shared_src/* useERC165 */.i1y)(qualificationContract, address, version === 1 ? constants/* QUALIFICATION_INTERFACE_ID */.bJ : constants/* QUALIFICATION2_INTERFACE_ID */.tZ);
    const { value: qualificationHasStartTime , loading: loadingQualificationHasStartTime  } = (0,web3_shared_src/* useERC165 */.i1y)(qualificationContract, address, constants/* QUALIFICATION_HAS_START_TIME_INTERFACE_ID */.Zl);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        let startTime;
        if (qualificationHasStartTime) {
            startTime = await qualificationContract.methods.get_start_time().call({
                from: account
            });
        }
        return {
            loadingERC165: loadingQualification || loadingQualificationHasStartTime || loadingQualificationHasLucky,
            isQualification,
            startTime,
            isQualificationHasLucky
        };
    }, [
        address,
        isQualification,
        qualificationHasStartTime,
        isQualificationHasLucky,
        loadingQualification,
        loadingQualificationHasStartTime,
        loadingQualificationHasLucky,
        qualificationContract, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/SwapDialog.tsx

















const SwapDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        },
        providerBar: {
        },
        swapLimitWrap: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: theme.spacing(2)
        },
        swapLimitText: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#15181B',
            fontSize: 14,
            width: 'fit-content'
        },
        swapLimitSlider: {
            flexGrow: 1,
            width: 'auto !important',
            margin: theme.spacing(0, 3),
            '& .MuiSlider-thumb': {
                width: 28,
                height: 28,
                background: theme.palette.mode === 'dark' ? '#fff' : '2CA4EF, 100%'
            },
            '& .MuiSlider-rail': {
                height: 5
            },
            '& .MuiSlider-track': {
                height: 5
            }
        },
        exchangeText: {
            textAlign: 'right',
            fontSize: 10,
            margin: theme.spacing(1, 0, 3)
        },
        exchangeAmountText: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#15181B'
        },
        swapButtonWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: theme.spacing(2)
        },
        remindText: {
            fontSize: 10,
            marginTop: theme.spacing(1)
        },
        loading: {
            color: theme.palette.text.primary
        }
    })
);
function SwapDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { payload , initAmount , tokenAmount , maxSwapAmount , setTokenAmount , setActualSwapAmount , setStatus , account , token , exchangeTokens ,  } = props;
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const classes = (0,shared_src.useStylesExtends)(SwapDialog_useStyles(), props);
    const { NATIVE_TOKEN_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    const [ratio, setRatio] = (0,react.useState)(new (bignumber_default())(payload.exchange_amounts[0 * 2]).dividedBy(payload.exchange_amounts[0 * 2 + 1]));
    const { value: initToken  } = (0,web3_shared_src/* useFungibleTokenDetailed */.jv)((0,web3_shared_src/* isSameAddress */.Wr$)(NATIVE_TOKEN_ADDRESS, payload.exchange_tokens[0].address) ? web3_shared_src/* EthereumTokenType.Native */.Drc.Native : web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20, payload.exchange_tokens[0].address);
    const [swapToken, setSwapToken] = (0,react.useState)(undefined);
    (0,react.useEffect)(()=>{
        setSwapToken(initToken);
    }, [
        JSON.stringify(initToken)
    ]);
    const [swapAmount, setSwapAmount] = (0,react.useState)(tokenAmount.multipliedBy(ratio));
    const [inputAmountForUI, setInputAmountForUI] = (0,react.useState)(swapAmount.isZero() ? '' : (0,web3_shared_src/* formatBalance */.azF)(swapAmount, swapToken === null || swapToken === void 0 ? void 0 : swapToken.decimals));
    //#region select token
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const { setDialog: setSelectTokenDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        const at = exchangeTokens.findIndex((0,web3_shared_src/* currySameAddress */.DC3)(ev.token.address));
        const ratio1 = new (bignumber_default())(payload.exchange_amounts[at * 2]).dividedBy(payload.exchange_amounts[at * 2 + 1]);
        setRatio(ratio1);
        setSwapToken(ev.token);
        setTokenAmount(initAmount);
        setSwapAmount(initAmount.multipliedBy(ratio1));
        setInputAmountForUI(initAmount.isEqualTo(0) ? '' : (0,web3_shared_src/* formatBalance */.azF)(initAmount.multipliedBy(ratio1), ev.token.decimals));
    }, [
        id,
        payload,
        initAmount,
        exchangeTokens.map((x)=>x.address
        ).sort().join(), 
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken: !exchangeTokens.some((x)=>(0,web3_shared_src/* isNative */.tYA)(x.address)
            ),
            disableSearchBar: true,
            FixedTokenListProps: {
                whitelist: exchangeTokens.map((x)=>x.address
                )
            }
        });
    }, [
        exchangeTokens.map((x)=>x.address
        ).sort().join(), 
    ]);
    //#endregion
    //#region balance
    const { value: tokenBalance = '0'  } = (0,web3_shared_src/* useTokenBalance */.mMq)(swapToken ? swapToken.type : web3_shared_src/* EthereumTokenType.Native */.Drc.Native, swapToken ? swapToken.address : NATIVE_TOKEN_ADDRESS);
    //#endregion
    //#region maxAmount for TokenAmountPanel
    const maxAmount = (0,react.useMemo)(()=>bignumber_default().min(maxSwapAmount.multipliedBy(ratio).dp(0), tokenBalance).toFixed()
    , [
        maxSwapAmount,
        ratio,
        tokenBalance
    ]);
    //#endregion
    //#region swap
    const { value: qualificationInfo , loading: loadingQualification  } = useQualificationVerify(payload.qualification_address, payload.contract_address);
    const [swapState, swapCallback, resetSwapCallback] = useSwapCallback(payload, swapAmount.toFixed(), swapToken ? swapToken : {
        address: NATIVE_TOKEN_ADDRESS
    }, qualificationInfo === null || qualificationInfo === void 0 ? void 0 : qualificationInfo.isQualificationHasLucky);
    const onSwap = (0,react.useCallback)(async ()=>{
        await swapCallback();
        if (payload.token.type !== web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20) return;
        await Wallet_messages/* WalletRPC.addERC20Token */.V.addERC20Token(payload.token);
        await Wallet_messages/* WalletRPC.trustERC20Token */.V.trustERC20Token(account, payload.token);
    }, [
        swapCallback,
        payload.token.address
    ]);
    const { setDialog: setTransactionDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        var ref;
        if (ev.open) return;
        if (swapState.type === web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED && !swapState.receipt.status) resetSwapCallback();
        if (swapState.type !== web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED && swapState.type !== web3_shared_src/* TransactionStateType.RECEIPT */.n$V.RECEIPT) return;
        const { receipt  } = swapState;
        var _returnValues;
        const { to_value  } = (_returnValues = (ref = receipt.events) === null || ref === void 0 ? void 0 : ref.SwapSuccess.returnValues) !== null && _returnValues !== void 0 ? _returnValues : {
        };
        setActualSwapAmount(to_value);
        setStatus(SwapStatus.Share);
        resetSwapCallback();
    });
    (0,react.useEffect)(()=>{
        if (swapState.type === web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        if (swapState.type === web3_shared_src/* TransactionStateType.HASH */.n$V.HASH) {
            const { hash  } = swapState;
            setTimeout(()=>{
                window.open((0,web3_shared_src/* resolveTransactionLinkOnExplorer */.z4)(chainId, hash), '_blank', 'noopener noreferrer');
            }, 2000);
            return;
        }
        setTransactionDialog({
            open: true,
            state: swapState,
            summary: t('plugin_ito_swapping', {
                amount: (0,web3_shared_src/* formatBalance */.azF)(tokenAmount, token.decimals),
                symbol: token.symbol
            })
        });
    }, [
        swapState
    ]);
    //#endregion
    const validationMessage = (0,react.useMemo)(()=>{
        if (swapAmount.isEqualTo(0)) return t('plugin_ito_error_enter_amount');
        if (swapAmount.isGreaterThan(tokenBalance)) return t('plugin_ito_error_balance', {
            symbol: swapToken === null || swapToken === void 0 ? void 0 : swapToken.symbol
        });
        if (tokenAmount.isGreaterThan(maxSwapAmount)) return t('plugin_ito_dialog_swap_exceed_wallet_limit');
        return '';
    }, [
        swapAmount,
        tokenBalance,
        maxSwapAmount,
        swapToken,
        ratio
    ]);
    return swapToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.swapLimitWrap,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.swapLimitText,
                        children: [
                            "0 ",
                            token.symbol
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
                        className: classes.swapLimitSlider,
                        value: Number(tokenAmount.dividedBy(maxSwapAmount).multipliedBy(100)),
                        onChange: (_, newValue)=>{
                            const tokenAmount1 = maxSwapAmount.multipliedBy(newValue / 100);
                            const swapAmount1 = tokenAmount1.multipliedBy(ratio).dp(0);
                            setTokenAmount(tokenAmount1.dp(0));
                            setSwapAmount(swapAmount1);
                            setInputAmountForUI((0,web3_shared_src/* formatBalance */.azF)(swapAmount1, swapToken.decimals));
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.swapLimitText,
                        children: [
                            (0,web3_shared_src/* formatBalance */.azF)(maxSwapAmount, token.decimals),
                            " ",
                            token.symbol
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.exchangeText,
                variant: "body1",
                color: "textSecondary",
                children: [
                    t('plugin_ito_dialog_swap_exchange'),
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: classes.exchangeAmountText,
                        children: (0,web3_shared_src/* formatBalance */.azF)(tokenAmount, token.decimals)
                    }),
                    ' ',
                    token.symbol,
                    "."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                amount: inputAmountForUI,
                maxAmount: maxAmount,
                balance: tokenBalance,
                token: swapToken,
                onAmountChange: (value)=>{
                    const val = value === '' || value === '0' ? web3_shared_src/* ZERO */.xEJ : new (bignumber_default())(value).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(swapToken.decimals));
                    const isMax = value === (0,web3_shared_src/* formatBalance */.azF)(maxAmount, swapToken.decimals) && !val.isEqualTo(0);
                    const tokenAmount1 = isMax ? maxSwapAmount : val.dividedBy(ratio);
                    const swapAmount1 = isMax ? tokenAmount1.multipliedBy(ratio) : val.dp(0);
                    setInputAmountForUI(isMax ? tokenAmount1.multipliedBy(ratio).dividedBy((0,web3_shared_src/* pow10 */.wAG)(swapToken.decimals)).toString() : value);
                    setTokenAmount(tokenAmount1.dp(0));
                    setSwapAmount(swapAmount1);
                },
                label: t('plugin_ito_dialog_swap_panel_title'),
                SelectTokenChip: {
                    ChipProps: {
                        onClick: onSelectTokenChipClick
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.remindText,
                variant: "body1",
                color: "textSecondary",
                children: t('plugin_ito_swap_only_once_remind')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.swapButtonWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                        amount: swapAmount.toFixed(),
                        spender: payload.contract_address,
                        token: swapToken.type === web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20 ? swapToken : undefined,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            disabled: !!validationMessage || loadingQualification,
                            onClick: onSwap,
                            children: loadingQualification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                size: 16,
                                className: classes.loading
                            }) : validationMessage || t('plugin_ito_swap')
                        })
                    })
                })
            })
        ]
    }) : null;
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/UnlockDialog.tsx














function isMoreThanMillion(allowance, decimals) {
    return (0,web3_shared_src/* isGreaterThan */.T1o)(allowance, `100000000000e${decimals}`) // 100 billion
    ;
}
const UnlockDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
        },
        tip: {
            margin: theme.spacing(1.5, 0, 1),
            fontSize: 10
        },
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function UnlockDialog(props) {
    const { tokens  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = UnlockDialog_useStyles();
    const { ITO2_CONTRACT_ADDRESS  } = (0,web3_shared_src/* useITOConstants */.mgD)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    //#region select token
    const [token, setToken] = (0,react.useState)(tokens[0]);
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const { setDialog: setSelectTokenDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        if (ev.token.type !== web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20) return;
        setToken(ev.token);
    }, [
        id
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken: true,
            disableSearchBar: true,
            FixedTokenListProps: {
                selectedTokens: token ? [
                    token.address
                ] : [],
                whitelist: tokens.map((x)=>x.address
                )
            }
        });
    }, [
        id,
        token === null || token === void 0 ? void 0 : token.address
    ]);
    //#endregion
    //#region amount
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    var ref;
    const amount = new (bignumber_default())(rawAmount || '0').multipliedBy((0,web3_shared_src/* pow10 */.wAG)((ref = token === null || token === void 0 ? void 0 : token.decimals) !== null && ref !== void 0 ? ref : 0));
    var ref1, ref2;
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,web3_shared_src/* useTokenBalance */.mMq)((ref1 = token === null || token === void 0 ? void 0 : token.type) !== null && ref1 !== void 0 ? ref1 : web3_shared_src/* EthereumTokenType.Native */.Drc.Native, (ref2 = token === null || token === void 0 ? void 0 : token.address) !== null && ref2 !== void 0 ? ref2 : '');
    //#endregion
    if (!tokens.length) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: "No need to unlock any token on this ITO."
    }));
    var _symbol, _symbol1, _symbol2;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                label: "Amount",
                amount: rawAmount,
                balance: tokenBalance !== null && tokenBalance !== void 0 ? tokenBalance : '0',
                token: token,
                onAmountChange: setRawAmount,
                SelectTokenChip: {
                    loading: loadingTokenBalance,
                    ChipProps: {
                        onClick: onSelectTokenChipClick
                    }
                }
            }),
            ITO2_CONTRACT_ADDRESS ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.tip,
                variant: "body2",
                color: "textSecondary",
                children: [
                    "Allow the contract",
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(chainId, ITO2_CONTRACT_ADDRESS),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedAddress, {
                            address: ITO2_CONTRACT_ADDRESS,
                            size: 4
                        })
                    }),
                    ' ',
                    "to use your ",
                    (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : 'Token',
                    " tokens when a new ITO round starts later."
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                    amount: amount.toFixed(),
                    spender: ITO2_CONTRACT_ADDRESS,
                    token: token,
                    children: (allowance)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            size: "large",
                            fullWidth: true,
                            disabled: true,
                            variant: "contained",
                            children: isMoreThanMillion(allowance, token.decimals) ? t('plugin_ito_amount_unlocked_infinity', {
                                symbol: (_symbol1 = token.symbol) !== null && _symbol1 !== void 0 ? _symbol1 : 'Token'
                            }) : t('plugin_ito_amount_unlocked', {
                                amount: (0,web3_shared_src/* formatBalance */.azF)(allowance, token.decimals, 2),
                                symbol: (_symbol2 = token.symbol) !== null && _symbol2 !== void 0 ? _symbol2 : 'Token'
                            })
                        })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/SwapGuide.tsx












var SwapStatus;
(function(SwapStatus1) {
    SwapStatus1[SwapStatus1["Remind"] = 0] = "Remind";
    SwapStatus1[SwapStatus1["Swap"] = 1] = "Swap";
    SwapStatus1[SwapStatus1["Share"] = 2] = "Share";
    SwapStatus1[SwapStatus1["Unlock"] = 3] = "Unlock";
})(SwapStatus || (SwapStatus = {
}));
const SwapGuide_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            display: 'flex',
            flexDirection: 'column'
        },
        paper: {
            padding: '0 !important'
        }
    })
);
function SwapGuide(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { status , payload , exchangeTokens , isBuyer , open , retryPayload , shareSuccessLink , total_remaining , onUpdate , onClose ,  } = props;
    const [isPending, startTransition] = (0,react.useTransition)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    const onCloseShareDialog = (0,react.useCallback)(()=>{
        startTransition(()=>{
            onClose();
            retryPayload();
        });
    }, [
        retryPayload,
        startTransition,
        onClose
    ]);
    const { classes  } = SwapGuide_useStyles();
    const maxSwapAmount = (0,react.useMemo)(()=>bignumber_default().min(payload.limit, total_remaining)
    , [
        payload.limit,
        total_remaining
    ]);
    const initAmount = web3_shared_src/* ZERO */.xEJ;
    const [tokenAmount, setTokenAmount] = (0,react.useState)(initAmount);
    const [actualSwapAmount, setActualSwapAmount] = (0,react.useState)(0);
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const SwapTitle = {
        [SwapStatus.Remind]: t('plugin_ito_dialog_swap_reminder_title'),
        [SwapStatus.Unlock]: t('plugin_ito_dialog_swap_unlock_title'),
        [SwapStatus.Swap]: t('plugin_ito_dialog_swap_title', {
            token: payload.token.symbol
        }),
        [SwapStatus.Share]: t('plugin_ito_dialog_swap_share_title')
    };
    const closeDialog = (0,react.useCallback)(()=>{
        setTokenAmount(initAmount);
        return status === SwapStatus.Share ? onCloseShareDialog() : onClose();
    }, [
        status,
        initAmount,
        onCloseShareDialog,
        onClose,
        setTokenAmount
    ]);
    (0,react.useEffect)(()=>{
        onUpdate(isBuyer ? SwapStatus.Share : SwapStatus.Remind);
    }, [
        account,
        isBuyer,
        chainId,
        payload.chain_id
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        classes: {
            paper: classes.paper,
            dialogContent: classes.paper
        },
        open: open,
        title: SwapTitle[status],
        onClose: closeDialog,
        maxWidth: SwapStatus.Swap || status === SwapStatus.Unlock ? 'xs' : 'sm',
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            classes: {
                root: classes.content
            },
            children: (()=>{
                switch(status){
                    case SwapStatus.Remind:
                        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RemindDialog, {
                            token: payload.token,
                            chainId: chainId,
                            setStatus: onUpdate
                        }));
                    case SwapStatus.Unlock:
                        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UnlockDialog, {
                            tokens: payload.exchange_tokens.filter((x)=>!(0,web3_shared_src/* isSameAddress */.Wr$)(NATIVE_TOKEN_ADDRESS, x.address)
                            )
                        }));
                    case SwapStatus.Swap:
                        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SwapDialog, {
                            account: account,
                            initAmount: initAmount,
                            tokenAmount: tokenAmount,
                            maxSwapAmount: maxSwapAmount,
                            setTokenAmount: setTokenAmount,
                            setActualSwapAmount: setActualSwapAmount,
                            payload: payload,
                            token: payload.token,
                            exchangeTokens: exchangeTokens,
                            setStatus: onUpdate,
                            chainId: chainId
                        }));
                    case SwapStatus.Share:
                        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ShareDialog, {
                            shareSuccessLink: shareSuccessLink,
                            poolName: payload.message,
                            token: payload.token,
                            actualSwapAmount: actualSwapAmount,
                            onClose: onCloseShareDialog
                        }));
                    default:
                        return null;
                }
            })()
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ITO.tsx





























const ITO_useStyles = (0,src/* makeStyles */.ZL)()((theme, props)=>({
        root: {
            position: 'relative',
            color: theme.palette.common.white,
            flexDirection: 'column',
            height: props.tokenNumber > 4 ? 425 : 405,
            minHeight: 405,
            boxSizing: 'border-box',
            backgroundAttachment: 'local',
            backgroundPosition: '0 0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: theme.spacing(1),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(1),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(2)
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            width: '100%',
            maxWidth: 470
        },
        title: {
            fontSize: props.titleLength > 31 ? '1.3rem' : '1.6rem',
            fontWeight: 'bold',
            marginBottom: 4,
            marginRight: 4,
            width: '80%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        status: {
            background: 'rgba(20, 23, 26, 0.6)',
            padding: '5px 16px',
            whiteSpace: 'nowrap',
            borderRadius: 10
        },
        totalText: {
            display: 'flex',
            alignItems: 'center'
        },
        tokenLink: {
            display: 'flex',
            alignItems: 'center',
            color: '#fff'
        },
        tokenIcon: {
            width: 24,
            height: 24
        },
        totalIcon: {
            marginLeft: theme.spacing(1),
            cursor: 'pointer'
        },
        progressWrap: {
            width: 220,
            marginBottom: theme.spacing(3),
            marginTop: theme.spacing(1)
        },
        footer: {
            position: 'absolute',
            width: '90%',
            maxWidth: 470,
            bottom: theme.spacing(2),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        fromText: {
            opacity: 0.6,
            transform: 'translateY(5px)'
        },
        rationWrap: {
            marginBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            '& > span': {
                marginLeft: theme.spacing(1),
                fontSize: 14,
                '& > b': {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            }
        },
        actionFooter: {
            marginTop: theme.spacing(1)
        },
        actionButton: {
            minHeight: 'auto',
            width: '100%'
        },
        textProviderErr: {
            color: '#EB5757',
            marginTop: theme.spacing(1)
        },
        loadingITO: {
            marginTop: 260,
            textAlign: 'center',
            fontSize: 24
        },
        loadingITO_Button: {
            color: '#fff',
            borderColor: '#fff !important',
            margin: theme.spacing(1, 'auto'),
            minHeight: 35,
            '&:hover': {
                background: 'none'
            }
        },
        loadingWrap: {
            display: 'flex',
            justifyContent: 'center'
        },
        textInOneLine: {
            whiteSpace: 'nowrap'
        }
    })
);
const TokenItem = ({ price , token , exchangeToken  })=>{
    var ref;
    const { classes  } = ITO_useStyles({
    });
    const { NATIVE_TOKEN_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                classes: {
                    icon: classes.tokenIcon
                },
                address: exchangeToken.address,
                logoURI: exchangeToken.logoURI
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                component: "span",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        children: price
                    }),
                    ' ',
                    (0,web3_shared_src/* isSameAddress */.Wr$)(exchangeToken.address, NATIVE_TOKEN_ADDRESS) ? (ref = (0,web3_shared_src/* getChainDetailed */.$Gt)(exchangeToken.chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.symbol : exchangeToken.symbol,
                    ' ',
                    "/ ",
                    token.symbol
                ]
            })
        ]
    }));
};
function ITO(props) {
    var _utils, ref, _utils1, ref1, ref2, ref3;
    // context
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const postLink = (0,usePostInfo/* usePostLink */.Vc)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const [destructState, destructCallback, resetDestructCallback] = useDestructCallback(props.payload.contract_address);
    const [openClaimDialog, setOpenClaimDialog] = (0,react.useState)(false);
    const [claimDialogStatus, setClaimDialogStatus] = (0,react.useState)(SwapStatus.Remind);
    // assets
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(45554), __webpack_require__.b));
    const { pid , payload  } = props;
    const { regions: defaultRegions = '-'  } = props.payload;
    const { token , total: payload_total , exchange_amounts , exchange_tokens , limit , message  } = payload;
    const { t  } = (0,utils/* useI18N */.M1)();
    const sellerName = message.split(constants/* MSG_DELIMITER */.Z3)[0] === message ? (0,web3_shared_src/* formatEthereumAddress */.j8w)(payload.seller.address, 4) : message.split(constants/* MSG_DELIMITER */.Z3)[0];
    var ref4;
    const title = (ref4 = message.split(constants/* MSG_DELIMITER */.Z3)[1]) !== null && ref4 !== void 0 ? ref4 : message;
    var ref5;
    const regions = (ref5 = message.split(constants/* MSG_DELIMITER */.Z3)[2]) !== null && ref5 !== void 0 ? ref5 : defaultRegions;
    const { classes  } = ITO_useStyles({
        titleLength: (0,utils/* getTextUILength */.c_)(title),
        tokenNumber: exchange_tokens.length
    });
    //#region token detailed
    const { value: availability , computed: availabilityComputed , loading: loadingAvailability , error: errorAvailability , retry: retryAvailability ,  } = useAvailabilityComputed(payload);
    const { listOfStatus , startTime , unlockTime , isUnlocked , hasLockTime , endTime , qualificationAddress  } = availabilityComputed;
    //#ednregion
    const total = new bignumber.BigNumber(payload_total);
    var ref6;
    const total_remaining = new bignumber.BigNumber((ref6 = availability === null || availability === void 0 ? void 0 : availability.remaining) !== null && ref6 !== void 0 ? ref6 : '0');
    const sold = total.minus(total_remaining);
    const { value: currentRegion , loading: loadingRegion  } = useIPRegion();
    const allowRegions = decodeRegionCode(regions);
    const isRegionRestrict = checkRegionRestrict(allowRegions);
    const isRegionAllow = !isRegionRestrict || !currentRegion || !loadingRegion && allowRegions.includes(currentRegion.code);
    const { value: ifQualified = false , loading: loadingIfQualified , retry: retryIfQualified ,  } = useIfQualified(qualificationAddress, payload.contract_address);
    //#endregion
    const isAccountSeller = payload.seller.address.toLowerCase() === account.toLowerCase() && chainId === payload.chain_id;
    const noRemain = total_remaining.isZero();
    //#region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    //#endregion
    //#region buy info
    const { value: tradeInfo , loading: loadingTradeInfo , retry: retryPoolTradeInfo  } = usePoolTradeInfo(pid, account);
    var ref7;
    const isBuyer = chainId === payload.chain_id && ((0,web3_shared_src/* isGreaterThan */.T1o)((ref7 = availability === null || availability === void 0 ? void 0 : availability.swapped) !== null && ref7 !== void 0 ? ref7 : 0, 0) || Boolean(availability === null || availability === void 0 ? void 0 : availability.claimed));
    const shareSuccessLink = (ref = (_utils = social_network.activatedSocialNetworkUI.utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, t('plugin_ito_claim_success_share', {
        user: sellerName,
        link: postLink,
        symbol: token.symbol
    })).toString();
    const canWithdraw = (0,react.useMemo)(()=>{
        return isAccountSeller && !(tradeInfo === null || tradeInfo === void 0 ? void 0 : tradeInfo.destructInfo) && !(availability === null || availability === void 0 ? void 0 : availability.exchanged_tokens.every((t1)=>t1 === '0'
        )) && (listOfStatus.includes(ITO_Status.expired) || noRemain);
    }, [
        tradeInfo,
        listOfStatus,
        isAccountSeller,
        noRemain
    ]);
    const refundAmount = (0,react.useMemo)(()=>{
        const buyInfo = tradeInfo === null || tradeInfo === void 0 ? void 0 : tradeInfo.buyInfo;
        if (!buyInfo) return web3_shared_src/* ZERO */.xEJ;
        return new bignumber.BigNumber(buyInfo.amount).minus(buyInfo.amount_sold);
    }, [
        tradeInfo
    ]);
    // out of stock
    const refundAllAmount = (tradeInfo === null || tradeInfo === void 0 ? void 0 : tradeInfo.buyInfo) && (0,web3_shared_src/* isZero */.Fr9)(tradeInfo === null || tradeInfo === void 0 ? void 0 : tradeInfo.buyInfo.amount_sold);
    const onShareSuccess = (0,react.useCallback)(async ()=>{
        window.open(shareSuccessLink, '_blank', 'noopener noreferrer');
    }, [
        shareSuccessLink
    ]);
    //#endregion
    const retryITOCard = (0,react.useCallback)(()=>{
        retryPoolTradeInfo();
        retryAvailability();
    }, [
        retryPoolTradeInfo,
        retryAvailability
    ]);
    //#region claim
    const [claimState, claimCallback, resetClaimCallback] = (0,useClaimCallback/* useClaimCallback */.N)([
        pid
    ], payload.contract_address);
    const onClaimButtonClick = (0,react.useCallback)(()=>{
        claimCallback();
    }, [
        claimCallback
    ]);
    const { setDialog: setClaimTransactionDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (claimState.type !== web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED) return;
        resetClaimCallback();
        retryITOCard();
    });
    (0,react.useEffect)(()=>{
        if (claimState.type === web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        var ref8, ref9;
        setClaimTransactionDialog({
            open: true,
            state: claimState,
            summary: `Claiming ${(0,web3_shared_src/* formatBalance */.azF)((ref8 = availability === null || availability === void 0 ? void 0 : availability.swapped) !== null && ref8 !== void 0 ? ref8 : 0, token.decimals)} ${(ref9 = token === null || token === void 0 ? void 0 : token.symbol) !== null && ref9 !== void 0 ? ref9 : 'Token'}.`
        });
    }, [
        claimState /* update tx dialog only if state changed */ 
    ]);
    var _symbol;
    //#endregion
    const shareLink = (ref1 = (_utils1 = social_network.activatedSocialNetworkUI.utils).getShareLinkURL) === null || ref1 === void 0 ? void 0 : ref1.call(_utils1, t('plugin_ito_claim_foreshow_share', {
        link: postLink,
        name: token.name,
        symbol: (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : 'token'
    })).toString();
    const onShare = (0,react.useCallback)(async ()=>{
        window.open(shareLink, '_blank', 'noopener noreferrer');
    }, [
        shareLink
    ]);
    const onUnlock = (0,react.useCallback)(async ()=>{
        setClaimDialogStatus(SwapStatus.Unlock);
        setOpenClaimDialog(true);
    }, []);
    const onClaim = (0,react.useCallback)(async ()=>{
        setClaimDialogStatus(SwapStatus.Remind);
        setOpenClaimDialog(true);
    }, []);
    //#region withdraw
    const { setDialog: setTransactionDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (destructState.type !== web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED) return;
        resetDestructCallback();
        retryITOCard();
    });
    (0,react.useEffect)(()=>{
        const timeToExpired = endTime - Date.now();
        // https://stackoverflow.com/q/3468607
        // SetTimeout using a 32 bit int to store the delay so the max value allowed would be 2147483647.
        // Meanwhile, no need to refresh ITO card when expired time is a large value (more than one day).
        if (timeToExpired < 0 || listOfStatus.includes(ITO_Status.expired) || timeToExpired > 1000 * 60 * 60 * 24) return;
        const timer = setTimeout(()=>{
            setOpenClaimDialog(false);
            retryITOCard();
        }, timeToExpired + constants/* TIME_WAIT_BLOCKCHAIN */.$9);
        return ()=>clearTimeout(timer)
        ;
    }, [
        endTime,
        listOfStatus
    ]);
    (0,react.useEffect)(()=>{
        if (destructState.type === web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        let summary = t('plugin_ito_withdraw');
        if (!noRemain) {
            summary += ' ' + (0,web3_shared_src/* formatBalance */.azF)(total_remaining, token.decimals) + ' ' + token.symbol;
        }
        availability === null || availability === void 0 ? void 0 : availability.exchange_addrs.forEach((addr, i)=>{
            const token1 = exchange_tokens.find((0,web3_shared_src/* currySameAddress */.DC3)(addr));
            const comma = noRemain && i === 0 ? ' ' : ', ';
            if (token1) {
                summary += comma + (0,web3_shared_src/* formatBalance */.azF)(availability === null || availability === void 0 ? void 0 : availability.exchanged_tokens[i], token1.decimals) + ' ' + token1.symbol;
            }
        });
        setTransactionDialog({
            open: true,
            state: destructState,
            summary
        });
    }, [
        destructState
    ]);
    const onWithdraw = (0,react.useCallback)(async ()=>{
        destructCallback(payload.pid);
    }, [
        destructCallback,
        payload.pid
    ]);
    //#endregion
    const swapStatusText = (0,react.useMemo)(()=>{
        if (listOfStatus.includes(ITO_Status.waited)) return t('plugin_ito_status_no_start');
        if (listOfStatus.includes(ITO_Status.expired)) return t('plugin_ito_expired');
        if (listOfStatus.includes(ITO_Status.started)) {
            if (total_remaining.isZero()) return t('plugin_ito_status_out_of_stock');
            return t('plugin_ito_status_ongoing');
        }
        return '';
    }, [
        listOfStatus,
        total_remaining
    ]);
    const swapResultText = (0,react.useMemo)(()=>{
        var ref10, ref11, ref12;
        if (refundAllAmount) {
            return t('plugin_ito_out_of_stock_hit');
        }
        var ref13, ref14;
        const _text = Number(availability === null || availability === void 0 ? void 0 : availability.swapped) > 0 ? t('plugin_ito_your_swapped_amount', {
            amount: (0,web3_shared_src/* formatBalance */.azF)((ref13 = availability === null || availability === void 0 ? void 0 : availability.swapped) !== null && ref13 !== void 0 ? ref13 : 0, token.decimals),
            symbol: token.symbol
        }) : t('plugin_ito_your_claimed_amount', {
            amount: (0,web3_shared_src/* formatBalance */.azF)((ref14 = tradeInfo === null || tradeInfo === void 0 ? void 0 : (ref10 = tradeInfo.buyInfo) === null || ref10 === void 0 ? void 0 : ref10.amount_bought) !== null && ref14 !== void 0 ? ref14 : 0, token.decimals),
            symbol: token.symbol
        });
        if (refundAmount.isZero() || refundAmount.isLessThan(0)) {
            return `${_text}.`;
        }
        var _decimals;
        return `${_text}, ${t('plugin_ito_your_refund_amount', {
            amount: (0,web3_shared_src/* formatBalance */.azF)(refundAmount, (_decimals = tradeInfo === null || tradeInfo === void 0 ? void 0 : (ref11 = tradeInfo.buyInfo) === null || ref11 === void 0 ? void 0 : ref11.token.decimals) !== null && _decimals !== void 0 ? _decimals : 0),
            symbol: tradeInfo === null || tradeInfo === void 0 ? void 0 : (ref12 = tradeInfo.buyInfo) === null || ref12 === void 0 ? void 0 : ref12.token.symbol
        })}`;
    }, [
        availability === null || availability === void 0 ? void 0 : availability.swapped,
        refundAllAmount,
        refundAmount,
        token.decimals,
        token.symbol,
        tradeInfo === null || tradeInfo === void 0 ? void 0 : (ref2 = tradeInfo.buyInfo) === null || ref2 === void 0 ? void 0 : ref2.token.decimals,
        tradeInfo === null || tradeInfo === void 0 ? void 0 : (ref3 = tradeInfo.buyInfo) === null || ref3 === void 0 ? void 0 : ref3.token.symbol, 
    ]);
    const footerStartTime = (0,react.useMemo)(()=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            children: t('plugin_ito_list_start_date', {
                date: (0,format/* default */.Z)(startTime, 'yyyy-MM-dd HH:mm')
            })
        }));
    }, [
        startTime
    ]);
    const footerEndTime = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            children: t('plugin_ito_swap_end_date', {
                date: (0,format/* default */.Z)(endTime, 'yyyy-MM-dd HH:mm')
            })
        })
    , [
        endTime,
        t
    ]);
    const footerSwapInfo = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    children: swapResultText
                }),
                footerEndTime
            ]
        })
    , [
        footerEndTime,
        swapResultText
    ]);
    const footerNormal = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    children: t('plugin_ito_allocation_per_wallet', {
                        limit: (0,web3_shared_src/* formatBalance */.azF)(limit, token.decimals),
                        token: token.symbol
                    })
                }),
                listOfStatus.includes(ITO_Status.waited) ? footerStartTime : listOfStatus.includes(ITO_Status.started) ? footerEndTime : null
            ]
        })
    , [
        footerEndTime,
        footerStartTime,
        limit,
        listOfStatus,
        token.decimals,
        token.symbol
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                elevation: 0,
                style: {
                    backgroundImage: `url(${PoolBackground})`
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h5",
                                className: classes.title,
                                children: title
                            }),
                            swapStatusText ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                className: classes.status,
                                children: swapStatusText
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.totalText,
                        children: [
                            t('plugin_ito_swapped_status', {
                                remain: (0,web3_shared_src/* formatAmountPrecision */.E$5)(sold, token.decimals),
                                total: (0,web3_shared_src/* formatAmountPrecision */.E$5)(total, token.decimals),
                                token: token.symbol
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.tokenLink,
                                href: dist_default()((0,web3_shared_src/* resolveLinkOnExplorer */.CSY)(token.chainId), '/token/:address', {
                                    address: token.address
                                }),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                    fontSize: "small",
                                    className: classes.totalIcon
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.progressWrap,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledLinearProgress/* StyledLinearProgress */.B, {
                            variant: "determinate",
                            value: Number(sold.multipliedBy(100).dividedBy(total))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: exchange_tokens.slice(0, constants/* ITO_EXCHANGE_RATION_MAX */.No).sort(helpers/* sortTokens */.xT).map((exchangeToken, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.rationWrap,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenItem, {
                                    price: (0,web3_shared_src/* formatBalance */.azF)(new bignumber.BigNumber(exchange_amounts[i * 2]).dividedBy(exchange_amounts[i * 2 + 1]).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(token.decimals - exchangeToken.decimals)).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(exchangeToken.decimals)).integerValue(), exchangeToken.decimals),
                                    token: token,
                                    exchangeToken: exchangeToken
                                })
                            }, i)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.footer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                children: isBuyer ? footerSwapInfo : listOfStatus.includes(ITO_Status.expired) ? footerEndTime : footerNormal
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                className: classes.fromText,
                                children: `From: @${sellerName}`
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.actionFooter,
                children: loadingRegion && isRegionRestrict ? null : !isRegionAllow ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    disabled: true,
                    onClick: ()=>undefined
                    ,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_ito_region_ban')
                }) : total_remaining.isZero() && !isBuyer && !canWithdraw ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    disabled: true,
                    onClick: ()=>undefined
                    ,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_ito_status_out_of_stock')
                }) : loadingTradeInfo || loadingAvailability ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    disabled: true,
                    onClick: ()=>undefined
                    ,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_ito_loading')
                }) : !account || !chainIdValid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: openSelectProviderDialog,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_wallet_connect_a_wallet')
                }) : canWithdraw ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: onWithdraw,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_ito_withdraw')
                }) : isBuyer ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    spacing: 2,
                    children: [
                        hasLockTime ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: isUnlocked ? !(availability === null || availability === void 0 ? void 0 : availability.claimed) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onClaimButtonClick,
                                variant: "contained",
                                size: "large",
                                disabled: claimState.type === web3_shared_src/* TransactionStateType.HASH */.n$V.HASH,
                                className: classes.actionButton,
                                children: claimState.type === web3_shared_src/* TransactionStateType.HASH */.n$V.HASH ? t('plugin_ito_claiming') : t('plugin_ito_claim')
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: ()=>undefined
                                ,
                                disabled: true,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_claimed')
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: ()=>undefined
                                ,
                                variant: "contained",
                                disabled: true,
                                size: "large",
                                className: classnames_default()(classes.actionButton, classes.textInOneLine),
                                children: t('plugin_ito_wait_unlock_time', {
                                    unlockTime: (0,format/* default */.Z)(unlockTime, 'yyyy-MM-dd HH:mm')
                                })
                            })
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: hasLockTime ? 6 : 12,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onShareSuccess,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_share')
                            })
                        })
                    ]
                }) : !ifQualified || !ifQualified.qualified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: retryIfQualified,
                    loading: loadingIfQualified,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: loadingIfQualified ? t('plugin_ito_qualification_loading') : !ifQualified ? t('plugin_ito_qualification_failed') : !ifQualified.qualified ? (0,lodash.startCase)(ifQualified.errorMsg) : null
                }) : listOfStatus.includes(ITO_Status.expired) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    disabled: true,
                    onClick: ()=>undefined
                    ,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_ito_expired')
                }) : listOfStatus.includes(ITO_Status.waited) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onUnlock,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_unlock_in_advance')
                            })
                        }),
                        shareLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onShare,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_share')
                            })
                        }) : undefined
                    ]
                }) : listOfStatus.includes(ITO_Status.started) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: onClaim,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_ito_enter')
                }) : null
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapGuide, {
                status: claimDialogStatus,
                total_remaining: total_remaining,
                payload: {
                    ...payload,
                    qualification_address: qualificationAddress
                },
                shareSuccessLink: shareSuccessLink,
                isBuyer: isBuyer,
                exchangeTokens: exchange_tokens,
                open: openClaimDialog,
                onUpdate: setClaimDialogStatus,
                onClose: ()=>setOpenClaimDialog(false)
                ,
                retryPayload: retryITOCard
            })
        ]
    }));
}
function ITO_Loading() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(52872), __webpack_require__.b));
    const { classes  } = ITO_useStyles({
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
            className: classnames_default()(classes.root, classes.loadingWrap),
            elevation: 0,
            style: {
                backgroundImage: `url(${PoolBackground})`
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                className: classes.loadingITO,
                children: t('plugin_ito_loading')
            })
        })
    }));
}
function ITO_Error({ retryPoolPayload  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ITO_useStyles({
    });
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(52872), __webpack_require__.b));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classnames_default()(classes.root, classes.loadingWrap),
        elevation: 0,
        style: {
            backgroundImage: `url(${PoolBackground})`
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                className: classes.loadingITO,
                children: t('plugin_ito_loading_failed')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                onClick: retryPoolPayload,
                variant: "outlined",
                size: "large",
                color: "primary",
                className: classes.loadingITO_Button,
                children: t('plugin_ito_loading_try_again')
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PostInspector.tsx







function PostInspector(props) {
    const { chain_id , pid  } = props.payload;
    const isCompactPayload_ = (0,helpers/* isCompactPayload */.cr)(props.payload);
    const { NATIVE_TOKEN_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { value: payload , error , loading , retry: retryPayload ,  } = usePoolPayload(isCompactPayload_ && chainId === chain_id ? pid : '');
    const _payload = payload !== null && payload !== void 0 ? payload : props.payload;
    // To meet the max allowance of the data size of image steganography, we need to
    //  cut off some properties, such as save the token address string only.
    const token = _payload.token;
    const { value: tokenDetailed , loading: _loadingToken , retry: retryToken ,  } = (0,web3_shared_src/* useFungibleTokenDetailed */.jv)(web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20, typeof token === 'string' ? token : token.address);
    const exchangeFungibleTokens = (0,react.useMemo)(()=>_payload.exchange_tokens.map((t)=>({
                address: t.address,
                type: (0,web3_shared_src/* isSameAddress */.Wr$)(t.address, NATIVE_TOKEN_ADDRESS) ? web3_shared_src/* EthereumTokenType.Native */.Drc.Native : web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20
            })
        )
    , [
        JSON.stringify(_payload.exchange_tokens)
    ]);
    const { value: exchangeTokensDetailed , loading: loadingExchangeTokensDetailed , retry: retryExchangeTokensDetailed ,  } = (0,web3_shared_src/* useFungibleTokensDetailed */.bs0)(exchangeFungibleTokens);
    const retry = (0,react.useCallback)(()=>{
        retryPayload();
        retryToken();
        retryExchangeTokensDetailed();
    }, [
        retryPayload,
        retryToken,
        retryExchangeTokensDetailed
    ]);
    const loadingToken = _loadingToken || loadingExchangeTokensDetailed;
    const renderITO = ()=>{
        var ref;
        if (isCompactPayload_) {
            if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Loading, {
            }));
            if (error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Error, {
                retryPoolPayload: retry
            }));
        }
        if (loadingToken && typeof token === 'string' || (tokenDetailed === null || tokenDetailed === void 0 ? void 0 : (ref = tokenDetailed.symbol) === null || ref === void 0 ? void 0 : ref.toUpperCase()) === 'UNKNOWN') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Loading, {
        }));
        if (!tokenDetailed && typeof token === 'string') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Error, {
            retryPoolPayload: retry
        }));
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ITO, {
            pid: pid,
            payload: typeof token === 'string' ? {
                ..._payload,
                token: tokenDetailed,
                exchange_tokens: exchangeTokensDetailed
            } : _payload
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: chain_id,
        children: renderITO()
    }));
}

// EXTERNAL MODULE: ./src/plugins/ITO/base.ts
var base = __webpack_require__(49270);
// EXTERNAL MODULE: ./src/plugins/MaskbookPluginWrapper.tsx
var MaskbookPluginWrapper = __webpack_require__(65928);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Check.js
var Check = __webpack_require__(98181);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(11042);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(93569);
// EXTERNAL MODULE: ./src/web3/UI/DateTimePanel.tsx
var DateTimePanel = __webpack_require__(13763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(34963);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(33441);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/AdvanceSetting.tsx




var SettingField;
(function(SettingField1) {
    SettingField1["IPRegion"] = "IPRegion";
    SettingField1["delayUnlocking"] = "delayUnlocking";
    SettingField1["contract"] = "contract";
})(SettingField || (SettingField = {
}));
const AdvanceSetting_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            border: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
            minWidth: 0,
            flexDirection: 'column',
            verticalAlign: 'top'
        },
        label: {
            padding: `${theme.spacing(1)} ${theme.spacing(1)}`
        },
        group: {
            flexFlow: 'wrap',
            justifyContent: 'space-between',
            padding: theme.spacing(0, 1),
            marginBottom: theme.spacing(1)
        }
    })
);
function AdvanceSetting({ advanceSettingData , setAdvanceSettingData  }) {
    const { classes  } = AdvanceSetting_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const handleAdvanceSettingToggle = (event)=>{
        const { name , checked  } = event.target;
        setAdvanceSettingData({
            ...advanceSettingData,
            [name]: checked
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("fieldset", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormLabel/* default */.Z, {
                component: "legend",
                className: classes.label,
                children: t('plugin_ito_advanced')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
                className: classes.group,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: !!advanceSettingData.IPRegion,
                            onChange: handleAdvanceSettingToggle,
                            name: SettingField.IPRegion
                        }),
                        label: t('plugin_ito_advanced_ip_region')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: !!advanceSettingData.delayUnlocking,
                            onChange: handleAdvanceSettingToggle,
                            name: SettingField.delayUnlocking
                        }),
                        label: t('plugin_ito_advanced_delay_unlocking')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: !!advanceSettingData.contract,
                            onChange: handleAdvanceSettingToggle,
                            name: SettingField.contract
                        }),
                        label: t('plugin_ito_advanced_contract')
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(55312);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ArrowDownward.js
var ArrowDownward = __webpack_require__(24620);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useExchangeTokenAmountstate.ts


var ExchangeTokenAndAmountActionType;
(function(ExchangeTokenAndAmountActionType1) {
    ExchangeTokenAndAmountActionType1[ExchangeTokenAndAmountActionType1["ADD"] = 0] = "ADD";
    ExchangeTokenAndAmountActionType1[ExchangeTokenAndAmountActionType1["REMOVE"] = 1] = "REMOVE";
    ExchangeTokenAndAmountActionType1[ExchangeTokenAndAmountActionType1["UPDATE_AMOUNT"] = 2] = "UPDATE_AMOUNT";
    ExchangeTokenAndAmountActionType1[ExchangeTokenAndAmountActionType1["UPDATE_TOKEN"] = 3] = "UPDATE_TOKEN";
})(ExchangeTokenAndAmountActionType || (ExchangeTokenAndAmountActionType = {
}));
function reducer(state, action) {
    switch(action.type){
        case ExchangeTokenAndAmountActionType.ADD:
            return [
                ...state,
                {
                    key: (0,v4/* default */.Z)(),
                    amount: '',
                    token: undefined
                }, 
            ];
        case ExchangeTokenAndAmountActionType.REMOVE:
            return state.filter((item)=>item.key !== action.key
            );
        case ExchangeTokenAndAmountActionType.UPDATE_AMOUNT:
            return state.map((item)=>item.key === action.key ? {
                    ...item,
                    amount: action.amount
                } : item
            );
        case ExchangeTokenAndAmountActionType.UPDATE_TOKEN:
            return state.map((item)=>item.key === action.key ? {
                    ...item,
                    token: action.token
                } : item
            );
        default:
            return state;
    }
}
function useExchangeTokenAndAmount(arrState) {
    return (0,react.useReducer)(reducer, arrState && arrState.length > 0 ? arrState : [
        {
            key: (0,v4/* default */.Z)(),
            amount: '',
            token: undefined
        },
        {
            key: (0,v4/* default */.Z)(),
            amount: '',
            token: undefined
        }, 
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/AddOutlined.js
var AddOutlined = __webpack_require__(44787);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/RemoveOutlined.js
var RemoveOutlined = __webpack_require__(60043);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ExchangeTokenPanel.tsx












const ExchangeTokenPanel_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%'
        },
        line: {
            margin: theme.spacing(1),
            display: 'flex'
        },
        input: {
            flex: 1,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1)
        },
        flow: {
            margin: theme.spacing(1),
            textAlign: 'center'
        },
        button: {
            margin: theme.spacing(1),
            borderRadius: 10
        }
    })
);
function ExchangeTokenPanel(props) {
    const { onAmountChange , dataIndex , inputAmount , disableBalance , exchangeToken , onExchangeTokenChange , isSell , showAdd =true , showRemove =false , label , excludeTokensAddress =[] , selectedTokensAddress =[] , onRemove , onAdd ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ExchangeTokenPanel_useStyles();
    //#region select token dialog
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const { setDialog: setSelectTokenDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        onExchangeTokenChange(ev.token, dataIndex);
    }, [
        id,
        dataIndex
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        var ref;
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken: isSell,
            FixedTokenListProps: {
                blacklist: excludeTokensAddress,
                selectedTokens: [
                    (ref = exchangeToken === null || exchangeToken === void 0 ? void 0 : exchangeToken.address) !== null && ref !== void 0 ? ref : '',
                    ...selectedTokensAddress
                ]
            }
        });
    }, [
        id,
        isSell,
        exchangeToken,
        excludeTokensAddress.sort().join(),
        selectedTokensAddress.sort().join()
    ]);
    var ref, ref1;
    //#endregion
    //#region balance
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,web3_shared_src/* useTokenBalance */.mMq)((ref = exchangeToken === null || exchangeToken === void 0 ? void 0 : exchangeToken.type) !== null && ref !== void 0 ? ref : web3_shared_src/* EthereumTokenType.Native */.Drc.Native, (ref1 = exchangeToken === null || exchangeToken === void 0 ? void 0 : exchangeToken.address) !== null && ref1 !== void 0 ? ref1 : '');
    //#endregion
    const [inputAmountForUI, setInputAmountForUI] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        setInputAmountForUI(inputAmount);
    }, [
        inputAmount,
        setInputAmountForUI
    ]);
    const onAmountChangeForUI = (0,react.useCallback)((amount)=>{
        onAmountChange(amount, dataIndex);
    }, [
        dataIndex,
        onAmountChange
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        className: classes.line,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                classes: {
                    root: classes.input
                },
                label: label,
                amount: inputAmountForUI,
                disableBalance: disableBalance,
                balance: disableBalance || loadingTokenBalance ? '0' : tokenBalance,
                token: exchangeToken,
                onAmountChange: onAmountChangeForUI,
                SelectTokenChip: {
                    loading: false,
                    ChipProps: {
                        onClick: onSelectTokenChipClick
                    }
                },
                TextFieldProps: {
                    disabled: !exchangeToken,
                    placeholder: !exchangeToken ? t('plugin_ito_placeholder_when_token_unselected') : '0.0'
                },
                ...props.TokenAmountPanelProps
            }),
            showAdd ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "large",
                onClick: onAdd,
                className: classes.button,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddOutlined/* default */.Z, {
                    color: "primary"
                })
            }) : null,
            showRemove ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "large",
                onClick: onRemove,
                className: classes.button,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RemoveOutlined/* default */.Z, {
                    color: "secondary"
                })
            }) : null
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ExchangeTokenPanelGroup.tsx










const ExchangeTokenPanelGroup_useStyles = (0,src/* makeStyles */.ZL)()({
    arrow: {
        display: 'flex',
        justifyContent: 'center'
    }
});
function ExchangeTokenPanelGroup(props) {
    const { classes  } = ExchangeTokenPanelGroup_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { onTokenAmountChange  } = props;
    const [selectedTokensAddress, setSelectedTokensAddress] = (0,react.useState)([]);
    const [exchangeTokenArray, dispatchExchangeTokenArray] = useExchangeTokenAndAmount(props.origin);
    const onAdd = (0,react.useCallback)(()=>{
        if (exchangeTokenArray.length > constants/* ITO_EXCHANGE_RATION_MAX */.No) return;
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.ADD,
            key: (0,v4/* default */.Z)(),
            token: undefined,
            amount: '0'
        });
    }, [
        dispatchExchangeTokenArray,
        exchangeTokenArray.length
    ]);
    const onAmountChange = (0,react.useCallback)((amount, key)=>{
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.UPDATE_AMOUNT,
            amount,
            key
        });
    }, [
        dispatchExchangeTokenArray
    ]);
    const onTokenChange = (0,react.useCallback)((token, key)=>{
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.UPDATE_TOKEN,
            token,
            key
        });
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.UPDATE_AMOUNT,
            amount: '',
            key
        });
    }, [
        dispatchExchangeTokenArray
    ]);
    (0,react.useEffect)(()=>{
        onTokenAmountChange(exchangeTokenArray);
        var ref;
        setSelectedTokensAddress(exchangeTokenArray.map((x)=>{
            var ref1;
            return (ref = (ref1 = x.token) === null || ref1 === void 0 ? void 0 : ref1.address) !== null && ref !== void 0 ? ref : '';
        }));
    }, [
        exchangeTokenArray,
        onTokenAmountChange
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: exchangeTokenArray.map((item, idx)=>{
            var ref5;
            return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ExchangeTokenPanel, {
                        label: idx ? t('plugin_ito_swap_ration_label') : t('plugin_ito_sell_total_amount'),
                        dataIndex: item.key,
                        disableBalance: idx !== 0,
                        isSell: idx === 0,
                        inputAmount: item.amount,
                        selectedTokensAddress: selectedTokensAddress,
                        onAmountChange: onAmountChange,
                        exchangeToken: item.token,
                        onExchangeTokenChange: onTokenChange,
                        showRemove: idx > 0 && idx < exchangeTokenArray.length && exchangeTokenArray.length !== 2,
                        showAdd: idx === exchangeTokenArray.length - 1 && idx < constants/* ITO_EXCHANGE_RATION_MAX */.No,
                        onRemove: ()=>dispatchExchangeTokenArray({
                                type: ExchangeTokenAndAmountActionType.REMOVE,
                                key: item.key
                            })
                        ,
                        onAdd: onAdd,
                        TokenAmountPanelProps: {
                            InputProps: idx ? {
                                startAdornment: props.token ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputAdornment/* default */.Z, {
                                    position: "start",
                                    children: [
                                        "1",
                                        (ref5 = props.token) === null || ref5 === void 0 ? void 0 : ref5.symbol,
                                        "="
                                    ]
                                }) : ''
                            } : {
                            }
                        }
                    }),
                    idx === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.arrow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownward/* default */.Z, {
                            color: "disabled"
                        })
                    }) : null
                ]
            }, idx));
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useDebounce.js
var useDebounce = __webpack_require__(59603);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(42608);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(29094);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FilledInput/FilledInput.js + 1 modules
var FilledInput = __webpack_require__(29072);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/RegionSelect.tsx







const RegionSelect_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            width: '100%',
            height: '54px',
            alignItems: 'center',
            paddingLeft: theme.spacing(2)
        },
        allToggle: {
            marginLeft: `-${theme.spacing(1)}`
        },
        inputControl: {
            display: 'flex'
        },
        inputRoot: {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            '&:before': {
                borderColor: 'rgba(0, 0, 0, 0.01)'
            }
        },
        input: {
            padding: `${theme.spacing(2)}`
        },
        span: {
            paddingLeft: theme.spacing(2)
        },
        options: {
            maxHeight: 140,
            overflow: 'auto'
        },
        display: {
            padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`
        },
        item: {
            padding: `0 ${theme.spacing(2)}`
        }
    })
);
// TODO fix TextField focus style
const RegionSelect = /*#__PURE__*/ (0,react.forwardRef)(({ value =[] , onRegionChange , ...props }, ref)=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = RegionSelect_useStyles();
    const allRegions = useRegionList();
    const isAll = value.length === allRegions.length;
    const valueMap = new Map(value.map((code)=>[
            code,
            true
        ]
    ));
    const displayRef = (0,react.useRef)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [open, setOpen] = (0,react.useState)(false);
    const handleDisplayRef = (0,react.useCallback)((node)=>{
        displayRef.current = node;
        if (node) setAnchorEl(node);
    }, []);
    const [minPopoverWidth, setMinPopoverWidth] = (0,react.useState)(0);
    (0,react.useImperativeHandle)(ref, ()=>{
        return {
            focus: ()=>{
                var ref1;
                (ref1 = displayRef.current) === null || ref1 === void 0 ? void 0 : ref1.focus();
            }
        };
    });
    const [filterText, setFilterText] = (0,react.useState)('');
    const [filteredRegions, setFilteredRegions] = (0,react.useState)(allRegions);
    const [, cancelFilterDebounce] = (0,useDebounce/* default */.Z)(()=>{
        const reg = new RegExp(filterText, 'i');
        setFilteredRegions(allRegions.filter((region)=>reg.test(region.name) || reg.test(region.code)
        ));
    }, 500, [
        filterText
    ]);
    const handleFilter = (event)=>{
        setFilterText(event.target.value);
    };
    const isAllFiltered = filteredRegions.every((region)=>valueMap.get(region.code)
    );
    const handleToggleAllFiltered = ()=>{
        filteredRegions.forEach((r)=>{
            isAllFiltered ? valueMap.delete(r.code) : valueMap.set(r.code, true);
        });
        onRegionChange(Array.from(valueMap.keys()));
    };
    const handleOpenChange = (toOpen, event)=>{
        if (toOpen && anchorEl) setMinPopoverWidth(anchorEl.clientWidth);
        if (!toOpen) {
            setFilterText('');
            cancelFilterDebounce();
        }
        setOpen(toOpen);
    };
    const handleToggle = (code)=>()=>{
            const isSelected = valueMap.get(code);
            isSelected ? valueMap.delete(code) : valueMap.set(code, true);
            onRegionChange(Array.from(valueMap.keys()));
        }
    ;
    const handleMouseDown = (event)=>{
        // Ignore everything but left-click
        if (event.button !== 0) {
            return;
        }
        // Hijack the default focus behavior.
        event.preventDefault();
        handleOpenChange(true, event);
    };
    const handlePopoverClose = (event)=>{
        handleOpenChange(false, event);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.root,
                ref: handleDisplayRef,
                onMouseDown: handleMouseDown,
                children: isAll ? t('plugin_ito_region_all') : t('plugin_ito_region_list', {
                    all: allRegions.length,
                    select: value.length
                })
            }),
            (0,utils/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Popover/* default */.ZP, {
                    container: container,
                    open: open,
                    anchorEl: anchorEl,
                    PaperProps: {
                        style: {
                            minWidth: `${minPopoverWidth}px`
                        }
                    },
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left'
                    },
                    onClose: handlePopoverClose,
                    disableRestoreFocus: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                            className: classes.inputControl,
                            variant: "filled",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FilledInput/* default */.Z, {
                                className: classes.inputRoot,
                                placeholder: t('plugin_ito_region_search'),
                                onChange: handleFilter,
                                inputProps: {
                                    className: classes.input
                                },
                                startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    className: classes.allToggle,
                                    checked: isAllFiltered,
                                    onChange: handleToggleAllFiltered,
                                    disableRipple: true
                                }),
                                endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputAdornment/* default */.Z, {
                                    position: "end",
                                    children: [
                                        value.length,
                                        "/",
                                        allRegions.length
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                            className: classes.options,
                            children: filteredRegions.map((region)=>{
                                return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                                    className: classes.item,
                                    onClick: handleToggle(region.code),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                            edge: "start",
                                            color: "primary",
                                            checked: valueMap.has(region.code),
                                            disableRipple: true
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: countryToFlag(region.code)
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: classes.span,
                                                    children: region.name
                                                })
                                            ]
                                        })
                                    ]
                                }, region.code));
                            })
                        })
                    ]
                })
            )
        ]
    }));
});
// ISO 3166-1 alpha-2
function countryToFlag(isoCode) {
    if (!utils/* Flags.using_emoji_flag */.vU.using_emoji_flag) {
        return '';
    }
    return isoCode.toUpperCase().replace(/./g, (char)=>String.fromCodePoint(char.charCodeAt(0) + 127397)
    );
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/CreateForm.tsx























const CreateForm_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        line: {
            margin: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            display: 'flex'
        },
        column: {
            flexDirection: 'column'
        },
        flow: {
            margin: theme.spacing(1),
            textAlign: 'center'
        },
        input: {
            padding: theme.spacing(1),
            flex: 1
        },
        label: {
            paddingLeft: theme.spacing(2)
        },
        tip: {
            fontSize: 12,
            color: theme.palette.text.secondary
        },
        button: {
            marginTop: theme.spacing(1.5)
        },
        date: {
            margin: theme.spacing(1),
            display: 'flex',
            '& > * ': {
                flex: 1,
                padding: theme.spacing(1)
            }
        },
        iconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 26,
            height: 24,
            borderRadius: 500
        },
        success: {
            backgroundColor: 'rgba(119, 224, 181, 0.2)'
        },
        fail: {
            backgroundColor: 'rgba(255, 78, 89, 0.2)'
        },
        qualStartTime: {
            padding: '0 16px',
            opacity: 0.8
        },
        field: {
            flex: 1,
            padding: theme.spacing(1),
            marginTop: theme.spacing(1)
        }
    })
);
function CreateForm(props) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    const { onChangePoolSettings , onNext , origin , onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(CreateForm_useStyles(), props);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { ITO2_CONTRACT_ADDRESS , DEFAULT_QUALIFICATION2_ADDRESS  } = (0,web3_shared_src/* useITOConstants */.mgD)();
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    var _userId, ref8;
    const senderName = (ref8 = (_userId = currentIdentity === null || currentIdentity === void 0 ? void 0 : currentIdentity.identifier.userId) !== null && _userId !== void 0 ? _userId : currentIdentity === null || currentIdentity === void 0 ? void 0 : (ref = currentIdentity.linkedPersona) === null || ref === void 0 ? void 0 : ref.nickname) !== null && ref8 !== void 0 ? ref8 : 'Unknown User';
    var ref9;
    const [message, setMessage] = (0,react.useState)((ref9 = origin === null || origin === void 0 ? void 0 : origin.title) !== null && ref9 !== void 0 ? ref9 : '');
    const [totalOfPerWallet, setTotalOfPerWallet] = (0,react.useState)((0,web3_shared_src/* isZero */.Fr9)((origin === null || origin === void 0 ? void 0 : origin.limit) || '0') ? '' : (0,web3_shared_src/* formatBalance */.azF)((origin === null || origin === void 0 ? void 0 : origin.limit) || '0', origin === null || origin === void 0 ? void 0 : (ref1 = origin.token) === null || ref1 === void 0 ? void 0 : ref1.decimals));
    const [tokenAndAmount, setTokenAndAmount] = (0,react.useState)();
    const TAS = [];
    if ((origin === null || origin === void 0 ? void 0 : origin.token) && (origin === null || origin === void 0 ? void 0 : origin.total)) {
        TAS.push({
            token: origin === null || origin === void 0 ? void 0 : origin.token,
            amount: (0,web3_shared_src/* formatBalance */.azF)((origin === null || origin === void 0 ? void 0 : origin.total) || '0', origin === null || origin === void 0 ? void 0 : origin.token.decimals),
            key: (0,v4/* default */.Z)()
        });
    }
    if ((origin === null || origin === void 0 ? void 0 : origin.exchangeTokens) && (origin === null || origin === void 0 ? void 0 : origin.exchangeAmounts)) {
        origin === null || origin === void 0 ? void 0 : origin.exchangeTokens.map((i, x)=>{
            return TAS.push({
                amount: (0,web3_shared_src/* formatBalance */.azF)((origin === null || origin === void 0 ? void 0 : origin.exchangeAmounts[x]) || '0', i === null || i === void 0 ? void 0 : i.decimals),
                token: i,
                key: (0,v4/* default */.Z)()
            });
        });
    }
    // set the default exchange
    if (TAS.length === 1) {
        TAS.push({
            key: (0,v4/* default */.Z)(),
            amount: '',
            token: undefined
        });
    }
    const [tokenAndAmounts, setTokenAndAmounts] = (0,react.useState)(TAS);
    const [startTime, setStartTime] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.startTime) || new Date());
    const [endTime, setEndTime] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.endTime) || new Date());
    const [unlockTime, setUnlockTime] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.unlockTime) || new Date());
    const GMT = new Date().getTimezoneOffset() / 60 * -1;
    // amount for displaying
    const inputTokenAmount = (0,web3_shared_src/* formatAmount */.dNj)((tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : tokenAndAmount.amount) || '0', tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref2 = tokenAndAmount.token) === null || ref2 === void 0 ? void 0 : ref2.decimals);
    var ref10, ref11;
    // balance
    const { value: tokenBalance = '0'  } = (0,web3_shared_src/* useTokenBalance */.mMq)((ref10 = tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref3 = tokenAndAmount.token) === null || ref3 === void 0 ? void 0 : ref3.type) !== null && ref10 !== void 0 ? ref10 : web3_shared_src/* EthereumTokenType.Native */.Drc.Native, (ref11 = tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref4 = tokenAndAmount.token) === null || ref4 === void 0 ? void 0 : ref4.address) !== null && ref11 !== void 0 ? ref11 : '');
    const onTotalOfPerWalletChange = (0,react.useCallback)((ev)=>{
        const total = ev.currentTarget.value;
        if (total === '') setTotalOfPerWallet('');
        if (/^\d+\.?\d*$/.test(total)) {
            setTotalOfPerWallet(total);
        }
    }, []);
    // qualificationAddress
    const [qualificationAddress, setQualificationAddress] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.qualificationAddress) && origin.qualificationAddress !== DEFAULT_QUALIFICATION2_ADDRESS ? origin.qualificationAddress : '');
    const { value: qualification , loading: loadingQualification  } = useQualificationVerify(qualificationAddress, ITO2_CONTRACT_ADDRESS);
    // advance settings
    const [advanceSettingData, setAdvanceSettingData] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.advanceSettingData) || {
    });
    var ref12;
    // restrict regions
    const [regions, setRegions] = useRegionSelect(decodeRegionCode((ref12 = origin === null || origin === void 0 ? void 0 : origin.regions) !== null && ref12 !== void 0 ? ref12 : '-'));
    (0,react.useEffect)(()=>{
        if (!advanceSettingData.contract) setQualificationAddress('');
        if (!advanceSettingData.delayUnlocking) setUnlockTime(new Date());
        if (!advanceSettingData.IPRegion) setRegions(regionCodes);
    }, [
        advanceSettingData
    ]);
    (0,react.useEffect)(()=>{
        if (!ITO2_CONTRACT_ADDRESS || !DEFAULT_QUALIFICATION2_ADDRESS) onClose();
    }, [
        ITO2_CONTRACT_ADDRESS,
        DEFAULT_QUALIFICATION2_ADDRESS,
        onClose
    ]);
    (0,react.useEffect)(()=>{
        var ref13, ref14;
        const [first, ...rest] = tokenAndAmounts;
        const qualificationAddress_ = (qualification === null || qualification === void 0 ? void 0 : qualification.isQualification) && advanceSettingData.contract ? qualificationAddress : DEFAULT_QUALIFICATION2_ADDRESS;
        if (!qualificationAddress_) return;
        setTokenAndAmount(first);
        var ref15;
        onChangePoolSettings({
            // this is the raw password which should be signed by the sender
            password: (ref15 = lib_default().sha3(`${message}`)) !== null && ref15 !== void 0 ? ref15 : '',
            name: senderName,
            title: message,
            limit: (0,web3_shared_src/* formatAmount */.dNj)(totalOfPerWallet || '0', first === null || first === void 0 ? void 0 : (ref13 = first.token) === null || ref13 === void 0 ? void 0 : ref13.decimals),
            token: first === null || first === void 0 ? void 0 : first.token,
            total: (0,web3_shared_src/* formatAmount */.dNj)((first === null || first === void 0 ? void 0 : first.amount) || '0', first === null || first === void 0 ? void 0 : (ref14 = first.token) === null || ref14 === void 0 ? void 0 : ref14.decimals),
            exchangeAmounts: rest.map((item)=>{
                var ref16;
                return (0,web3_shared_src/* formatAmount */.dNj)(item.amount || '0', item === null || item === void 0 ? void 0 : (ref16 = item.token) === null || ref16 === void 0 ? void 0 : ref16.decimals);
            }),
            exchangeTokens: rest.map((item)=>item.token
            ),
            qualificationAddress: qualificationAddress_,
            startTime,
            endTime,
            unlockTime: unlockTime > endTime && advanceSettingData.delayUnlocking ? unlockTime : undefined,
            regions: encodeRegionCode(regions),
            advanceSettingData
        });
    }, [
        senderName,
        message,
        totalOfPerWallet,
        tokenAndAmount,
        tokenAndAmounts,
        setTokenAndAmount,
        startTime,
        endTime,
        unlockTime,
        qualification,
        regions,
        qualificationAddress,
        account,
        onChangePoolSettings,
        DEFAULT_QUALIFICATION2_ADDRESS, 
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        var ref17;
        if (tokenAndAmounts.length === 0) return t('plugin_ito_error_enter_amount_and_token');
        for (const { amount , token  } of tokenAndAmounts){
            if (!token) return t('plugin_ito_error_select_token');
            if (amount === '') return t('plugin_ito_error_enter_amount');
            if ((0,web3_shared_src/* isZero */.Fr9)(amount)) return t('plugin_ito_error_enter_amount');
        }
        var ref18;
        if ((0,web3_shared_src/* isGreaterThan */.T1o)((ref18 = tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : tokenAndAmount.amount) !== null && ref18 !== void 0 ? ref18 : '0', tokenBalance)) return t('plugin_ito_error_balance', {
            symbol: tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref17 = tokenAndAmount.token) === null || ref17 === void 0 ? void 0 : ref17.symbol
        });
        if (!totalOfPerWallet || (0,web3_shared_src/* isZero */.Fr9)(totalOfPerWallet)) return t('plugin_ito_error_allocation_absence');
        var ref19;
        if ((0,web3_shared_src/* isGreaterThan */.T1o)(totalOfPerWallet, (ref19 = tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : tokenAndAmount.amount) !== null && ref19 !== void 0 ? ref19 : '0')) return t('plugin_ito_error_allocation_invalid');
        if (startTime >= endTime) return t('plugin_ito_error_exchange_time');
        if (endTime >= unlockTime && advanceSettingData.delayUnlocking) return t('plugin_ito_error_unlock_time');
        if (qualification === null || qualification === void 0 ? void 0 : qualification.startTime) {
            if (new Date(Number(qualification.startTime) * 1000) >= endTime) return t('plugin_ito_error_qualification_start_time');
        }
        if (!(qualification === null || qualification === void 0 ? void 0 : qualification.isQualification) && advanceSettingData.contract && qualificationAddress.length > 0) {
            return t('plugin_ito_error_invalid_qualification');
        }
        return '';
    }, [
        endTime,
        unlockTime,
        advanceSettingData,
        qualification,
        startTime,
        tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : tokenAndAmount.amount,
        tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref5 = tokenAndAmount.token) === null || ref5 === void 0 ? void 0 : ref5.symbol,
        tokenAndAmounts,
        tokenBalance,
        totalOfPerWallet, 
    ]);
    const handleStartTime = (0,react.useCallback)((input)=>{
        setStartTime(input);
    }, []);
    const handleEndTime = (0,react.useCallback)((input)=>{
        const time = input.getTime();
        const now = Date.now();
        if (time < now) return;
        if (time > startTime.getTime()) setEndTime(input);
    }, [
        startTime
    ]);
    const handleUnlockTime = (0,react.useCallback)((input)=>{
        const time = input.getTime();
        const now = Date.now();
        if (time < now) return;
        if (time > endTime.getTime()) setUnlockTime(input);
    }, [
        startTime
    ]);
    const StartTime = /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
        label: t('plugin_ito_begin_time'),
        onChange: handleStartTime,
        date: startTime
    });
    const EndTime = /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
        label: t('plugin_ito_end_time'),
        onChange: handleEndTime,
        min: (0,format/* default */.Z)(startTime, "yyyy-MM-dd'T00:00"),
        date: endTime
    });
    const UnlockTime = /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
        label: t('plugin_ito_unlock_time'),
        onChange: handleUnlockTime,
        date: unlockTime
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                style: {
                    display: 'block'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExchangeTokenPanelGroup, {
                    token: tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : tokenAndAmount.token,
                    origin: tokenAndAmounts,
                    onTokenAmountChange: (arr)=>setTokenAndAmounts(arr)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    label: t('plugin_ito_message_label'),
                    value: message,
                    onChange: (e)=>setMessage((0,utils/* sliceTextByUILength */.cc)(e.target.value, 90))
                    ,
                    InputLabelProps: {
                        shrink: true
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    label: t('plugin_ito_allocation_per_wallet'),
                    onChange: onTotalOfPerWalletChange,
                    value: totalOfPerWallet,
                    InputLabelProps: {
                        shrink: true
                    },
                    InputProps: {
                        endAdornment: tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref6 = tokenAndAmount.token) === null || ref6 === void 0 ? void 0 : ref6.symbol,
                        inputProps: {
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            inputMode: 'decimal',
                            placeholder: '0.0',
                            pattern: '^[0-9]$',
                            spellCheck: false
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.date,
                children: [
                    StartTime,
                    " ",
                    EndTime
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdvanceSetting, {
                    advanceSettingData: advanceSettingData,
                    setAdvanceSettingData: setAdvanceSettingData
                })
            }),
            advanceSettingData.IPRegion ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    label: t('plugin_ito_region_label'),
                    InputLabelProps: {
                        shrink: true
                    },
                    InputProps: {
                        inputComponent: RegionSelect,
                        inputProps: {
                            value: regions,
                            onRegionChange: setRegions
                        }
                    }
                })
            }) : null,
            advanceSettingData.delayUnlocking ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.date,
                children: UnlockTime
            }) : null,
            account && advanceSettingData.contract ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classnames_default()(classes.line, classes.column),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        className: classes.input,
                        label: t('plugin_ito_qualification_label'),
                        onChange: (e)=>setQualificationAddress(e.currentTarget.value)
                        ,
                        value: qualificationAddress,
                        InputLabelProps: {
                            shrink: true
                        },
                        InputProps: {
                            endAdornment: (qualification === null || qualification === void 0 ? void 0 : qualification.isQualification) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classnames_default()(classes.iconWrapper, classes.success),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                                    fontSize: "small",
                                    style: {
                                        color: '#77E0B5'
                                    }
                                })
                            }) : (qualification === null || qualification === void 0 ? void 0 : qualification.loadingERC165) || loadingQualification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                size: 16
                            }) : qualificationAddress.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classnames_default()(classes.iconWrapper, classes.fail),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                                    fontSize: "small",
                                    style: {
                                        color: '#ff4e59'
                                    }
                                })
                            }) : null
                        }
                    }),
                    (qualification === null || qualification === void 0 ? void 0 : qualification.startTime) && new Date(Number(qualification.startTime) * 1000) > startTime ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.qualStartTime,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t('plugin_ito_qualification_start_time')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: new Date(Number(qualification.startTime) * 1000).toString()
                            })
                        ]
                    }) : null
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                        amount: inputTokenAmount,
                        spender: ITO2_CONTRACT_ADDRESS,
                        token: (tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref7 = tokenAndAmount.token) === null || ref7 === void 0 ? void 0 : ref7.type) === web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20 ? tokenAndAmount.token : undefined,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            disabled: !!validationMessage,
                            onClick: onNext,
                            children: validationMessage || t('plugin_ito_next')
                        })
                    })
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(98051);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useAllPoolsAsSeller.ts



function useAllPoolsAsSeller(address, page) {
    const allPoolsRef = (0,react.useRef)([]);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const pools = await messages/* PluginITO_RPC.getAllPoolsAsSeller */.k.getAllPoolsAsSeller(address, page);
        allPoolsRef.current = allPoolsRef.current.concat(pools);
        return {
            pools: allPoolsRef.current,
            loadMore: pools.length > 0
        };
    }, [
        address,
        page
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(52259);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(48237);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Table/Table.js + 1 modules
var Table = __webpack_require__(44695);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(8919);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(32789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(18292);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(85473);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(71299);
;// CONCATENATED MODULE: ./src/web3/hooks/useTransactionDialog.ts




function useTransactionDialog(transactionDialogEvent, transactionState, transactionStateType, resetTransactionState) {
    // close the transaction dialog
    const { setDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (transactionState.type !== transactionStateType) return;
        resetTransactionState();
    });
    // open the transation dialog
    (0,react.useEffect)(()=>{
        if (transactionState.type === web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        setDialog({
            open: true,
            state: transactionState,
            ...transactionDialogEvent
        });
    }, [
        transactionState /* update tx dialog only if state changed */ 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PoolInList.tsx

















const PoolInList_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        top: {
            width: '100%',
            boxSizing: 'border-box',
            padding: theme.spacing(1, 2, 1)
        },
        root: {
            borderRadius: 10,
            display: 'flex',
            padding: theme.spacing(2)
        },
        iconbar: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: theme.spacing(0.5),
            paddingRight: theme.spacing(1)
        },
        icon: {
            width: 32,
            height: 32
        },
        content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            paddingBottom: theme.spacing(1)
        },
        button: {
            borderRadius: 50
        },
        title: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: theme.spacing(1)
        },
        date: {
            fontSize: 12
        },
        progress: {
            paddingBottom: theme.spacing(1)
        },
        price: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: theme.spacing(1)
        },
        deteils: {
            '& > *': {
                paddingBottom: theme.spacing(1)
            }
        },
        table: {
            paddingBottom: theme.spacing(1),
            borderRadius: 0
        },
        cell: {
            border: '1px solid rgba(224, 224, 224, 1)',
            color: theme.palette.text.primary,
            wordBreak: 'break-word'
        },
        head: {
            border: '1px solid rgba(224, 224, 224, 1)',
            color: theme.palette.text.secondary
        }
    })
);
function PoolInList(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = PoolInList_useStyles();
    const { pool , exchange_in_volumes , exchange_out_volumes , onSend , onRetry  } = props;
    //#region withdraw
    const [destructState, destructCallback, resetDestructCallback] = useDestructCallback(pool.contract_address);
    useTransactionDialog(null, destructState, web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED, ()=>{
        onRetry();
        resetDestructCallback();
    });
    //#endregion
    const { NATIVE_TOKEN_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { computed: availabilityComputed , loading: loadingAvailability  } = useAvailabilityComputed(pool);
    const { value: tradeInfo , loading: loadingTradeInfo  } = usePoolTradeInfo(pool.pid, account);
    var ref;
    const title = (ref = pool.message.split(constants/* MSG_DELIMITER */.Z3)[1]) !== null && ref !== void 0 ? ref : pool.message;
    const noRemain = (0,web3_shared_src/* isZero */.Fr9)(pool.total_remaining);
    const { listOfStatus  } = availabilityComputed;
    const isWithdrawn = tradeInfo === null || tradeInfo === void 0 ? void 0 : tradeInfo.destructInfo;
    const canWithdraw = !isWithdrawn && (listOfStatus.includes(ITO_Status.expired) || noRemain);
    const canSend = !listOfStatus.includes(ITO_Status.expired) && !noRemain;
    const progress = 100 * Number(new (bignumber_default())(pool.total).minus(pool.total_remaining).dividedBy(pool.total));
    const StatusButton = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: loadingTradeInfo || loadingAvailability ? null : canWithdraw ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                size: "small",
                variant: "contained",
                onClick: ()=>destructCallback(pool.pid)
                ,
                children: t('plugin_ito_withdraw')
            }) : canSend ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                size: "small",
                variant: "contained",
                onClick: ()=>{
                    return onSend === null || onSend === void 0 ? void 0 : onSend(pool);
                },
                children: t('plugin_ito_list_button_send')
            }) : isWithdrawn ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                size: "small",
                variant: "contained",
                disabled: true,
                children: t('plugin_ito_withdrawn')
            }) : null
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.top,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            className: classes.root,
            variant: "outlined",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.iconbar,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                        classes: {
                            icon: classes.icon
                        },
                        address: pool.token.address,
                        logoURI: pool.token.logoURI
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.header,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.title,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            color: "textPrimary",
                                            children: title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.date,
                                            variant: "body2",
                                            color: "textSecondary",
                                            children: t('plugin_ito_list_start_date', {
                                                date: (0,format/* default */.Z)(pool.start_time, 'yyyy-MM-dd HH:mm:ss')
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.date,
                                            variant: "body2",
                                            color: "textSecondary",
                                            children: t('plugin_ito_list_end_date', {
                                                date: (0,format/* default */.Z)(pool.end_time, 'yyyy-MM-dd HH:mm:ss')
                                            })
                                        }),
                                        settings/* debugModeSetting.value */.vv.value ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.date,
                                            variant: "body2",
                                            color: "textSecondary",
                                            children: t('plugin_ito_password', {
                                                password: pool.password === '' ? 'no password' : pool.password
                                            })
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.button,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StatusButton, {
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.progress,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress/* default */.Z, {
                                variant: "determinate",
                                value: progress
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.price,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    component: "span",
                                    children: [
                                        t('plugin_ito_list_sold_total'),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            color: "textPrimary",
                                            component: "span",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                                value: bignumber_default().sum(...exchange_out_volumes),
                                                decimals: pool.token.decimals
                                            })
                                        }),
                                        ' ',
                                        pool.token.symbol
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    component: "span",
                                    children: [
                                        t('plugin_ito_list_total'),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            color: "textPrimary",
                                            component: "span",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                                value: pool.total,
                                                decimals: pool.token.decimals
                                            })
                                        }),
                                        ' ',
                                        pool.token.symbol
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.deteils,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                                component: Paper/* default */.Z,
                                className: classes.table,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
                                    size: "small",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_type')
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_price')
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_sold')
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_got')
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                                            children: pool.exchange_tokens.map((token, index)=>{
                                                var ref1, ref2;
                                                return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            style: {
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: (0,web3_shared_src/* isSameAddress */.Wr$)(token.address, NATIVE_TOKEN_ADDRESS) ? (ref1 = (0,web3_shared_src/* getChainDetailed */.$Gt)(token.chainId)) === null || ref1 === void 0 ? void 0 : ref1.nativeCurrency.symbol : token.symbol
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            children: [
                                                                (0,web3_shared_src/* formatBalance */.azF)(new (bignumber_default())(pool.exchange_amounts[index * 2]).dividedBy(pool.exchange_amounts[index * 2 + 1]).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(pool.token.decimals - pool.exchange_tokens[index].decimals)).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(pool.exchange_tokens[index].decimals)).integerValue(), token.decimals, 6),
                                                                ' ',
                                                                (0,web3_shared_src/* isSameAddress */.Wr$)(token.address, NATIVE_TOKEN_ADDRESS) ? (ref2 = (0,web3_shared_src/* getChainDetailed */.$Gt)(token.chainId)) === null || ref2 === void 0 ? void 0 : ref2.nativeCurrency.symbol : token.symbol,
                                                                ' ',
                                                                "/ ",
                                                                pool.token.symbol
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                                                value: exchange_out_volumes[index],
                                                                decimals: pool.token.decimals,
                                                                significant: 6,
                                                                symbol: pool.token.symbol
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                                                value: exchange_in_volumes[index],
                                                                decimals: token.decimals,
                                                                significant: 6,
                                                                symbol: token.symbol
                                                            })
                                                        })
                                                    ]
                                                }, index));
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PoolList.tsx








const PoolList_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            height: '100%',
            overflow: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
);
function PoolList(props) {
    const { classes  } = PoolList_useStyles();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const [page, setPage] = (0,react.useState)(0);
    const { value ={
        loadMore: true,
        pools: []
    } , loading , retry  } = useAllPoolsAsSeller(account, page);
    const { pools , loadMore  } = value;
    const containerRef = (0,react.useRef)(null);
    const addPage = (0,react.useCallback)(()=>loadMore ? setPage(page + 1) : void 0
    , [
        page,
        loadMore
    ]);
    (0,shared_src.useScrollBottomEvent)(containerRef, addPage);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        ref: containerRef,
        children: loading && page === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            })
        }) : pools.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            color: "textSecondary",
            className: classes.content,
            children: "No Data"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.content,
            children: [
                pools.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PoolInList, {
                        ...x,
                        onSend: props.onSend,
                        onRetry: retry
                    }, x.pool.pid)
                ),
                loading && page > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(59450);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useFill.ts










function useFillCallback(poolSettings) {
    const web3 = (0,web3_shared_src/* useWeb3 */.$6B)();
    const nonce = (0,web3_shared_src/* useNonce */.XEd)();
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { contract: ITO_Contract  } = (0,useITO_Contract/* useITO_Contract */.k)();
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const [fillState, setFillState] = (0,web3_shared_src/* useTransactionState */.pld)();
    const [fillSettings, setFillSettings] = (0,react.useState)(poolSettings);
    const paramResult = useFillParams(poolSettings);
    const fillCallback = (0,react.useCallback)(async ()=>{
        if (!poolSettings) {
            setFillState({
                type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        const { password , startTime , endTime , token , unlockTime  } = poolSettings;
        if (!token || !ITO_Contract || !paramResult) {
            setFillState({
                type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        const { gas , params , paramsObj , gasError  } = paramResult;
        if (gasError) {
            setFillState({
                type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                error: gasError
            });
            return;
        }
        if (!checkParams(paramsObj, setFillState)) return;
        // error: unable to sign password
        let signedPassword = '';
        try {
            signedPassword = await web3.eth.personal.sign(password, account, '');
        } catch  {
            signedPassword = '';
        }
        if (!signedPassword) {
            setFillState({
                type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                error: new Error(t('plugin_wallet_fail_to_sign'))
            });
            return;
        }
        params[0] = lib_default().sha3(signedPassword);
        // the given settings is valid
        setFillSettings({
            ...poolSettings,
            startTime: new Date(Math.floor(startTime.getTime() / 1000) * 1000),
            endTime: new Date(Math.floor(endTime.getTime() / 1000) * 1000),
            unlockTime: unlockTime ? new Date(Math.floor(unlockTime.getTime() / 1000) * 1000) : undefined,
            password: signedPassword,
            exchangeAmounts: paramsObj.exchangeAmountsDivided.flatMap((x)=>x
            ).map((y)=>y.toFixed()
            )
        });
        // start waiting for provider to confirm tx
        setFillState({
            type: web3_shared_src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        const config = {
            from: account,
            gas,
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            const promiEvent = ITO_Contract.methods.fill_pool(...params).send(config);
            promiEvent.on(web3_shared_src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, (hash)=>{
                setFillState({
                    type: web3_shared_src/* TransactionStateType.HASH */.n$V.HASH,
                    hash
                });
            }).on(web3_shared_src/* TransactionEventType.RECEIPT */.iED.RECEIPT, (receipt)=>{
                setFillState({
                    type: web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                    no: 0,
                    receipt
                });
            }).on(web3_shared_src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, (no, receipt)=>{
                setFillState({
                    type: web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(web3_shared_src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                setFillState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        web3,
        gasPrice,
        nonce,
        account,
        chainId,
        ITO_Contract,
        poolSettings,
        paramResult,
        setFillState
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setFillState({
            type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        fillSettings,
        fillState,
        fillCallback,
        resetCallback
    ];
}
function useFillParams(poolSettings) {
    const { contract: ITO_Contract  } = (0,useITO_Contract/* useITO_Contract */.k)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!poolSettings || !ITO_Contract) return null;
        const { startTime , endTime , title , name , token , total , limit , qualificationAddress , unlockTime , regions , exchangeAmounts: exchangeAmountsUnsorted , exchangeTokens: exchangeTokensUnsorted ,  } = poolSettings;
        // sort amounts and tokens
        const sorted = exchangeAmountsUnsorted.map((x, i)=>({
                amount: x,
                token: exchangeTokensUnsorted[i]
            })
        ).sort((unsortedA, unsortedB)=>(0,helpers/* sortTokens */.xT)(unsortedA.token, unsortedB.token)
        );
        const exchangeAmounts = sorted.map((x)=>x.amount
        );
        const exchangeTokens = sorted.map((x)=>x.token
        );
        const startTime_ = Math.floor((startTime.getTime() - constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000);
        const endTime_ = Math.floor((endTime.getTime() - constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000);
        const unlockTime_ = unlockTime ? Math.floor((unlockTime.getTime() - constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000) : 0;
        const now = Math.floor((Date.now() - constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000);
        var _decimals;
        const ONE_TOKEN = web3_shared_src/* ONE.multipliedBy */.ryP.multipliedBy((0,web3_shared_src/* pow10 */.wAG)((_decimals = token.decimals) !== null && _decimals !== void 0 ? _decimals : 0));
        const exchangeAmountsDivided = exchangeAmounts.map((x, i)=>{
            const amount = new (bignumber_default())(x);
            const divisor = (0,helpers/* gcd */.th)(ONE_TOKEN, amount);
            return [
                amount.dividedToIntegerBy(divisor),
                ONE_TOKEN.dividedToIntegerBy(divisor)
            ];
        });
        const totalAmount = new (bignumber_default())(total);
        const invalidTokenAt = exchangeAmountsDivided.findIndex(([tokenAmountA, tokenAmountB])=>totalAmount.multipliedBy(tokenAmountA).dividedToIntegerBy(tokenAmountB).isZero()
        );
        const paramsObj = {
            //#region tx function params
            password: web3_shared_src/* FAKE_SIGN_PASSWORD */.DJp,
            startTime: startTime_,
            endTime: endTime_,
            message: [
                name,
                title,
                regions
            ].join(constants/* MSG_DELIMITER */.Z3),
            exchangeAddrs: exchangeTokens.map((x)=>x.address
            ),
            ratios: exchangeAmountsDivided.flatMap((x)=>x
            ).map((y)=>y.toFixed()
            ),
            unlockTime: unlockTime_,
            tokenAddrs: token.address,
            total,
            limit,
            qualificationAddress,
            //#endregion
            //#region params for FE verify and fill settings
            exchangeAmountsDivided,
            now,
            invalidTokenAt,
            exchangeAmounts,
            exchangeTokens,
            token
        };
        if (!checkParams(paramsObj)) return null;
        const params = Object.values((0,lodash.omit)(paramsObj, [
            'exchangeAmountsDivided',
            'now',
            'invalidTokenAt',
            'exchangeAmounts',
            'exchangeTokens',
            'token', 
        ]));
        let gasError = null;
        const gas = await ITO_Contract.methods.fill_pool(...params).estimateGas({
            from: account
        }).catch((error)=>{
            gasError = error;
        });
        return {
            gas,
            params,
            paramsObj,
            gasError
        };
    }, [
        poolSettings
    ]).value;
}
function checkParams(paramsObj, setFillState) {
    // error: the start time before BASE TIMESTAMP
    if (paramsObj.startTime < 0) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('Invalid start time.')
        });
        return false;
    }
    // error: the end time before BASE TIMESTAMP
    if (paramsObj.endTime < 0) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('Invalid end time.')
        });
        return false;
    }
    // error: the unlock time before BASE TIMESTAMP
    if (paramsObj.unlockTime < 0) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('Invalid unlock time.')
        });
        return false;
    }
    // error: the start time after the end time
    if (paramsObj.startTime >= paramsObj.endTime) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('The start date should before the end date.')
        });
        return false;
    }
    // error: the end time before now
    if (paramsObj.endTime <= paramsObj.now) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('The end date should be a future date.')
        });
        return false;
    }
    // error: unlock time before end time
    if (paramsObj.endTime >= paramsObj.unlockTime && paramsObj.unlockTime !== 0) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('The unlock date should be later than end date.')
        });
        return false;
    }
    // error: limit greater than the total supply
    if ((0,web3_shared_src/* isGreaterThan */.T1o)(paramsObj.limit, paramsObj.total)) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('Limits should less than the total supply.')
        });
        return false;
    }
    // error: exceed the max available total supply
    if ((0,web3_shared_src/* isGreaterThan */.T1o)(paramsObj.total, '2e128')) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('Exceed the max available total supply')
        });
        return false;
    }
    // error: The size of amounts and the size of tokens not match
    if (paramsObj.exchangeAmounts.length !== paramsObj.exchangeTokens.length) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('Cannot match amounts with tokens.')
        });
        return false;
    }
    // error: token amount is not enough for dividing into integral pieces
    if (paramsObj.invalidTokenAt >= 0) {
        var _symbol, _symbol1;
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error(`Cannot swap enough ${(_symbol = paramsObj.token.symbol) !== null && _symbol !== void 0 ? _symbol : ''} out with ${(_symbol1 = paramsObj.exchangeTokens[paramsObj.invalidTokenAt].symbol) !== null && _symbol1 !== void 0 ? _symbol1 : ''}`)
        });
        return false;
    }
    return true;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Launch.js
var Launch = __webpack_require__(72228);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Repeat.js
var Repeat = __webpack_require__(30222);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ConfirmDialog.tsx












const useSwapItemStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});
function SwapItem(props) {
    const { token , swap , swapAmount  } = props;
    const [exchange, setExchange] = (0,react.useState)(false);
    const { classes  } = useSwapItemStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const amount_ = (0,web3_shared_src/* formatBalance */.azF)(swapAmount || '0', swap === null || swap === void 0 ? void 0 : swap.decimals);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                color: "textPrimary",
                children: t('plugin_ito_swap_title', {
                    swap: exchange ? swap === null || swap === void 0 ? void 0 : swap.symbol : token === null || token === void 0 ? void 0 : token.symbol,
                    token: exchange ? token === null || token === void 0 ? void 0 : token.symbol : swap === null || swap === void 0 ? void 0 : swap.symbol,
                    amount: exchange ? web3_shared_src/* ONE.dividedBy */.ryP.dividedBy(amount_).toFixed() : amount_
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                onClick: ()=>setExchange(!exchange)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                    size: "large",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Repeat/* default */.Z, {
                        fontSize: "small"
                    })
                })
            })
        ]
    }));
}
const ConfirmDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            flexGrow: 1
        },
        title: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            fontSize: 18
        },
        line: {
            display: 'flex',
            padding: theme.spacing(1)
        },
        data: {
            padding: theme.spacing(1),
            textAlign: 'right',
            color: theme.palette.text.primary
        },
        label: {
            padding: theme.spacing(1),
            textAlign: 'left',
            color: theme.palette.text.secondary
        },
        button: {
            padding: theme.spacing(2)
        },
        link: {
            padding: 0,
            marginLeft: theme.spacing(0.5),
            marginTop: 2
        },
        gasEstimation: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            cursor: 'pointer',
            '& > p': {
                marginRight: 5,
                color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
            }
        }
    })
);
function ConfirmDialog(props) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    const { poolSettings , onDone , onBack , onClose  } = props;
    const { classes  } = ConfirmDialog_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { DEFAULT_QUALIFICATION2_ADDRESS  } = (0,web3_shared_src/* useITOConstants */.mgD)();
    const showQualification = (poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.advanceSettingData.contract) && (poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.qualificationAddress) !== DEFAULT_QUALIFICATION2_ADDRESS;
    const stop = (0,react.useCallback)((ev)=>ev.stopPropagation()
    , []);
    (0,react.useEffect)(()=>{
        var ref8;
        if ((poolSettings === null || poolSettings === void 0 ? void 0 : (ref8 = poolSettings.token) === null || ref8 === void 0 ? void 0 : ref8.chainId) !== chainId) onClose();
    }, [
        onClose,
        chainId,
        poolSettings
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            spacing: 0,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h3",
                        className: classes.title,
                        component: "h3",
                        color: "textPrimary",
                        children: poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_sell_token')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                        className: classes.data,
                        style: {
                            display: 'flex',
                            justifyContent: 'flex-end'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                component: "span",
                                children: poolSettings === null || poolSettings === void 0 ? void 0 : (ref = poolSettings.token) === null || ref === void 0 ? void 0 : ref.symbol
                            }),
                            (0,web3_shared_src/* isNative */.tYA)(poolSettings === null || poolSettings === void 0 ? void 0 : (ref1 = poolSettings.token) === null || ref1 === void 0 ? void 0 : ref1.address) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: (0,web3_shared_src/* resolveTokenLinkOnExplorer */.yWL)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.token),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: stop,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch/* default */.Z, {
                                    fontSize: "small"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_sell_total_amount')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                value: poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.total,
                                decimals: poolSettings === null || poolSettings === void 0 ? void 0 : (ref2 = poolSettings.token) === null || ref2 === void 0 ? void 0 : ref2.decimals,
                                symbol: poolSettings === null || poolSettings === void 0 ? void 0 : (ref3 = poolSettings.token) === null || ref3 === void 0 ? void 0 : ref3.symbol
                            })
                        })
                    })
                }),
                poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.exchangeTokens.filter(Boolean).map((item, index)=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                        children: [
                            index === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 1,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                    className: classes.label,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body1",
                                        color: "textSecondary",
                                        children: t('plugin_ito_sell_price')
                                    })
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: index === 0 ? 11 : 12,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapItem, {
                                    token: poolSettings.token,
                                    swap: item,
                                    swapAmount: poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.exchangeAmounts[index]
                                })
                            })
                        ]
                    }, index));
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_allocation_per_wallet')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                value: poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.limit,
                                decimals: poolSettings === null || poolSettings === void 0 ? void 0 : (ref4 = poolSettings.token) === null || ref4 === void 0 ? void 0 : ref4.decimals,
                                symbol: poolSettings === null || poolSettings === void 0 ? void 0 : (ref5 = poolSettings.token) === null || ref5 === void 0 ? void 0 : ref5.symbol
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_begin_time')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: (0,format/* default */.Z)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.startTime, 'yyyy-MM-dd HH:mm:ss')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_end_time')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: (0,format/* default */.Z)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.endTime, 'yyyy-MM-dd HH:mm:ss')
                        })
                    })
                }),
                showQualification ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.label,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_ito_qualification_label')
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.data,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(chainId, poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.qualificationAddress),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedAddress, {
                                            address: poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.qualificationAddress,
                                            size: 4
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }) : null,
                (poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.regions) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.label,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_ito_region_confirm_label')
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.data,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        decodeRegionCode(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.regions).length,
                                        "/",
                                        regionCodes.length
                                    ]
                                })
                            })
                        })
                    ]
                }) : null,
                (poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.unlockTime) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.label,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_ito_unlock_time')
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.data,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: (0,format/* default */.Z)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.unlockTime, 'yyyy-MM-dd HH:mm:ss')
                                })
                            })
                        })
                    ]
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h5",
                        className: classes.title,
                        component: "p",
                        children: t('plugin_ito_send_tip')
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    className: classes.button,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        fullWidth: true,
                        variant: "outlined",
                        onClick: onBack,
                        children: t('plugin_ito_back')
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    className: classes.button,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        fullWidth: true,
                        variant: "contained",
                        onClick: onDone,
                        children: t('plugin_ito_send_text', {
                            total: (0,web3_shared_src/* formatAmountPrecision */.E$5)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.total, poolSettings === null || poolSettings === void 0 ? void 0 : (ref6 = poolSettings.token) === null || ref6 === void 0 ? void 0 : ref6.decimals),
                            symbol: poolSettings === null || poolSettings === void 0 ? void 0 : (ref7 = poolSettings.token) === null || ref7 === void 0 ? void 0 : ref7.symbol
                        })
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/components/CompositionDialog/CompositionContext.tsx
var CompositionContext = __webpack_require__(61754);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/CompositionDialog.tsx






















const CompositionDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            position: 'relative',
            paddingTop: 50
        },
        tabs: {
            top: 0,
            left: 0,
            right: 0,
            position: 'absolute'
        }
    })
);
var ITOCreateFormPageStep;
(function(ITOCreateFormPageStep1) {
    ITOCreateFormPageStep1["NewItoPage"] = 'new-ito';
    ITOCreateFormPageStep1["ConfirmItoPage"] = 'confirm-item';
})(ITOCreateFormPageStep || (ITOCreateFormPageStep = {
}));
function CompositionDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { classes  } = CompositionDialog_useStyles();
    const { attachMetadata , dropMetadata  } = (0,CompositionContext/* useCompositionContext */.C)();
    const { ITO2_CONTRACT_ADDRESS  } = (0,web3_shared_src/* useITOConstants */.mgD)();
    //#region step
    const [step, setStep] = (0,react.useState)(ITOCreateFormPageStep.NewItoPage);
    const onNext = (0,react.useCallback)(()=>{
        if (step === ITOCreateFormPageStep.NewItoPage) setStep(ITOCreateFormPageStep.ConfirmItoPage);
    }, [
        step
    ]);
    const onBack = (0,react.useCallback)(()=>{
        if (step === ITOCreateFormPageStep.ConfirmItoPage) setStep(ITOCreateFormPageStep.NewItoPage);
    }, [
        step
    ]);
    //#endregion
    const [poolSettings, setPoolSettings] = (0,react.useState)();
    //#region blocking
    const [fillSettings, fillState, fillCallback, resetFillCallback] = useFillCallback(poolSettings);
    const onDone = (0,react.useCallback)(()=>{
        fillCallback();
    }, [
        fillCallback
    ]);
    //#endregion
    const { setDialog: setTransactionDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        var ref, ref1;
        if (ev.open) return;
        // reset state
        resetFillCallback();
        // no contract is available
        if (!ITO2_CONTRACT_ADDRESS) return;
        // the settings is not available
        if (!(fillSettings === null || fillSettings === void 0 ? void 0 : fillSettings.token)) return;
        // earily return happended
        if (fillState.type !== web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED) return;
        const { receipt  } = fillState;
        var _returnValues;
        const FillSuccess = (_returnValues = (ref = receipt.events) === null || ref === void 0 ? void 0 : ref.FillSuccess.returnValues) !== null && _returnValues !== void 0 ? _returnValues : {
        };
        var ref5;
        // assemble JSON payload
        const payload = {
            contract_address: ITO2_CONTRACT_ADDRESS,
            pid: FillSuccess.id,
            password: fillSettings.password,
            message: FillSuccess.message,
            limit: fillSettings.limit,
            total: FillSuccess.total,
            total_remaining: FillSuccess.total,
            seller: {
                address: FillSuccess.creator
            },
            buyers: [],
            chain_id: chainId,
            start_time: fillSettings.startTime.getTime(),
            end_time: fillSettings.endTime.getTime(),
            unlock_time: (ref5 = (ref1 = fillSettings.unlockTime) === null || ref1 === void 0 ? void 0 : ref1.getTime()) !== null && ref5 !== void 0 ? ref5 : 0,
            qualification_address: fillSettings.qualificationAddress,
            creation_time: Number.parseInt(FillSuccess.creation_time, 10) * 1000,
            token: fillSettings.token,
            exchange_amounts: fillSettings.exchangeAmounts,
            exchange_tokens: fillSettings.exchangeTokens,
            regions: fillSettings.regions
        };
        setPoolSettings(undefined);
        onCreateOrSelect(payload);
        onBack();
    });
    //#region tabs
    const state = (0,react.useState)(DialogTabs.create);
    const onCreateOrSelect = (0,react.useCallback)(async (payload)=>{
        if (!payload.password) {
            const [, title] = payload.message.split(constants/* MSG_DELIMITER */.Z3);
            var ref6;
            payload.password = await service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign((ref6 = lib_default().sha3(title)) !== null && ref6 !== void 0 ? ref6 : '', account);
        }
        if (!payload.password) {
            alert('Failed to sign the password.');
            return;
        }
        // To meet the max allowance of the data size of image steganography, we need to
        //  cut off and simplify some properties, such as save the token address string only.
        const payloadDetail = (0,lodash.omit)((0,lodash.set)((0,lodash.set)((0,helpers/* payloadOutMask */._D)(payload), 'token', payload.token.address), 'exchange_tokens', payload.exchange_tokens.map(({ address  })=>({
                address
            })
        )), [
            'creation_time',
            'unlock_time',
            'total_remaining',
            'buyers',
            'regions',
            'start_time',
            'end_time',
            'qualification_address', 
        ]);
        if (payload) attachMetadata(constants/* ITO_MetaKey_2 */.ag, payloadDetail);
        else dropMetadata(constants/* ITO_MetaKey_2 */.ag);
        props.onConfirm(payload);
        // storing the created pool in DB, it helps retrieve the pool password later
        messages/* PluginITO_RPC.discoverPool */.k.discoverPool('', payload);
        const [, setValue] = state;
        setValue(DialogTabs.create);
    }, [
        account,
        chainId,
        props.onConfirm,
        state
    ]);
    const onClose = (0,react.useCallback)(()=>{
        const [, setValue] = state;
        setStep(ITOCreateFormPageStep.NewItoPage);
        setPoolSettings(undefined);
        setValue(DialogTabs.create);
        props.onClose();
    }, [
        props,
        state
    ]);
    const tabProps = {
        tabs: [
            {
                label: t('plugin_ito_create_new'),
                children: (0,src/* usePortalShadowRoot */.ad)(()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CreateForm, {
                        onNext: onNext,
                        onClose: onClose,
                        origin: poolSettings,
                        onChangePoolSettings: setPoolSettings
                    })
                ),
                sx: {
                    p: 0
                }
            },
            {
                label: t('plugin_ito_select_existing'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolList, {
                    onSend: onCreateOrSelect
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state
    };
    //#endregion
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (!(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.token) || fillState.type === web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            state: fillState,
            summary: t('plugin_ito_transaction_dialog_summary', {
                amount: (0,web3_shared_src/* formatBalance */.azF)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.total, poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.token.decimals),
                symbol: poolSettings.token.symbol
            })
        });
    }, [
        fillState,
        poolSettings,
        setTransactionDialog
    ]);
    (0,react.useEffect)(()=>{
        if (!ITO2_CONTRACT_ADDRESS) onClose();
    }, [
        ITO2_CONTRACT_ADDRESS,
        onClose
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        disableBackdropClick: true,
        open: props.open,
        title: t('plugin_ito_display_name'),
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                step === ITOCreateFormPageStep.NewItoPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                    classes: {
                        tabs: classes.tabs
                    },
                    height: 540,
                    ...tabProps
                }) : null,
                step === ITOCreateFormPageStep.ConfirmItoPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
                    poolSettings: poolSettings,
                    onBack: onBack,
                    onDone: onDone,
                    onClose: onClose
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/resources/tool-icon/index.ts
var tool_icon = __webpack_require__(30234);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/index.tsx













const SNSAdaptor_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center'
        },
        span: {
            paddingLeft: theme.spacing(1)
        }
    })
);
const sns = {
    ...base/* base */.u,
    init (signal) {
    },
    DecryptedInspector (props) {
        const payload = (0,helpers/* ITO_MetadataReader */.fF)(props.message.meta);
        if (!payload.ok) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookPluginWrapper/* default */.Z, {
            pluginName: "ITO",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                chainId: payload.val.chain_id,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
                    payload: (0,lodash.set)((0,helpers/* payloadIntoMask */._x)(payload.val), 'token', payload.val.token)
                })
            })
        }));
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* ITO_MetaKey_1 */.uJ,
            onAttached_ITO
        ],
        [
            constants/* ITO_MetaKey_2 */.ag,
            onAttached_ITO
        ], 
    ]),
    CompositionDialogEntry: {
        dialog ({ open , onClose  }) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CompositionDialog, {
                open: open,
                onConfirm: onClose,
                onClose: onClose
            }));
        },
        label: {
            fallback: '🚀 ITO'
        }
    },
    ToolbarEntry: {
        ...tool_icon/* ToolIconURLs.markets */.m.markets,
        onClick: 'openCompositionEntry'
    }
};
function onAttached_ITO(payload) {
    return {
        text: /*#__PURE__*/ (0,jsx_runtime.jsx)(Badge, {
            payload: payload
        })
    };
}
function Badge({ payload  }) {
    const { classes  } = SNSAdaptor_useStyles();
    const { value: tokenDetailed , loading: loadingToken  } = (0,web3_shared_src/* useFungibleTokenDetailed */.jv)(web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20, payload.token);
    const balance = (0,web3_shared_src/* formatBalance */.azF)(payload.total, tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals);
    var ref, ref1;
    const symbol = (ref1 = (ref = tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.symbol) !== null && ref !== void 0 ? ref : tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.name) !== null && ref1 !== void 0 ? ref1 : 'Token';
    var ref2;
    const sellerName = payload.seller.name ? payload.seller.name : (ref2 = payload.message.split(constants/* MSG_DELIMITER */.Z3)[0]) !== null && ref2 !== void 0 ? ref2 : (0,web3_shared_src/* formatEthereumAddress */.j8w)(payload.seller.address, 4);
    return loadingToken ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ItoLabelIcon, {
                size: 14
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes.span,
                children: `A ITO with ${balance} $${symbol} from ${sellerName}`
            })
        ]
    });
}
/* harmony default export */ const SNSAdaptor = (sns);


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

/***/ 13763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ DateTimePanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97448);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5075);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    datetime: {
        '&::-webkit-calendar-picker-indicator': {
            marginLeft: 0,
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(26195), __webpack_require__.b)})`
        }
    }
});
function DateTimePanel(props) {
    const { label , date , onChange , min , max , inputProps , ...rest } = props;
    const GMT = new Date().getTimezoneOffset() / 60 * -1;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        ...rest,
        label: `${label} ${GMT >= 0 ? `(UTC +${GMT})` : `(UTC ${GMT})`}`,
        value: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(date, "yyyy-MM-dd'T'HH:mm"),
        onChange: (e)=>{
            const date1 = new Date(e.currentTarget.value);
            onChange(date1);
        },
        InputLabelProps: {
            shrink: true
        },
        inputProps: {
            className: classes.datetime,
            ...inputProps,
            min,
            max
        },
        type: "datetime-local"
    }));
}


/***/ }),

/***/ 45554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3438c0d81a9f694c0e2.jpg";

/***/ }),

/***/ 52872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "440478482473857ba4e4.jpg";

/***/ }),

/***/ 96705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c9c41866606d83725de.jpg";

/***/ }),

/***/ 26195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "978bf9587a9f8a073309.png";

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