"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4806],{

/***/ 94806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iW": () => (/* reexport */ ApproveStateType),
  "F_": () => (/* reexport */ MulticallStateType),
  "Zq": () => (/* reexport */ TargetChainIdContext),
  "cq": () => (/* reexport */ useContract_useContract),
  "GP": () => (/* reexport */ useContract_useContracts),
  "i1": () => (/* reexport */ useERC165),
  "nr": () => (/* reexport */ useERC20TokenAllowance),
  "Sj": () => (/* reexport */ useERC20TokenApproveCallback),
  "xw": () => (/* reexport */ useERC20TokenContract_useERC20TokenContract),
  "tK": () => (/* reexport */ useERC721ContractIsApproveForAll),
  "a0": () => (/* reexport */ useERC721ContractSetApproveForAllCallback),
  "nT": () => (/* reexport */ useERC721TokenContract_useERC721TokenContract),
  "cI": () => (/* reexport */ useGasConfig),
  "xf": () => (/* reexport */ useGasLimit),
  "_Y": () => (/* reexport */ useMultipleContractSingleData),
  "Hv": () => (/* reexport */ useNativeTokenWrapperCallback),
  "W7": () => (/* reexport */ useNativeTokenWrapperContract),
  "Ge": () => (/* reexport */ useNonFungibleOwnerTokens),
  "es": () => (/* reexport */ useSingleContractMultipleData),
  "z7": () => (/* reexport */ useTokenTransferCallback),
  "ol": () => (/* reexport */ useTransactionCallback),
  "pl": () => (/* reexport */ useTransactionState)
});

// UNUSED EXPORTS: ERC165_INTERFACE_ID, ERC721_ENUMERABLE_INTERFACE_ID, useERC1155TokenContract, useERC20TokenContracts, useERC20TokenTotalSupply, useERC20TokenTransferCallback, useERC721TokenByIndex, useERC721TokenContracts, useERC721TokenTransferCallback, useGetPastLogsParams, useMulticallCallback, useMulticallStateDecoded, useMultipleContractMultipleData, useNativeTransferCallback, useTargetChainIdContext, useTransactionReceipt

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var esm_useAsyncRetry = __webpack_require__(58500);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC165.ts

const ERC165_INTERFACE_ID = '0x01ffc9a7';
function useERC165(contract, address, interfaceId) {
    return (0,esm_useAsyncRetry/* default */.Z)(async ()=>{
        if (!contract || !address || !interfaceId) return false;
        try {
            const isERC165 = await contract.methods.supportsInterface(ERC165_INTERFACE_ID).call();
            const isVerify = await contract.methods.supportsInterface(interfaceId).call();
            return isERC165 && isVerify;
        } catch  {
            return false;
        }
    }, [
        address,
        interfaceId
    ]);
}

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useAccount.ts
var useAccount = __webpack_require__(72128);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBeat.ts
var useBeat = __webpack_require__(81215);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainId.ts
var web3_useChainId = __webpack_require__(45087);
// EXTERNAL MODULE: ../web3-contracts/abis/ERC20.json
var ERC20 = __webpack_require__(4350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../web3-shared/evm/utils/contract.ts
var contract = __webpack_require__(28114);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3.ts
var web3_useWeb3 = __webpack_require__(32383);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useContract.ts





/**
 * Create a contract which will forward its all transactions to the
 * EthereumService in the background page and decode the result of calls automatically
 * @param address
 * @param ABI
 * @param chainId
 */ function useContract_useContract(chainId, address = '', ABI = shared_base_src/* EMPTY_LIST */.rP) {
    const web3 = (0,web3_useWeb3/* useWeb3 */.$)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    return (0,react.useMemo)(()=>(0,contract/* createContract */.OP)(web3, address, ABI)
    , [
        web3,
        address,
        ABI
    ]);
}
/**
 * Create many contracts with same ABI
 * @param listOfAddress
 * @param ABI
 * @param chainId
 */ function useContract_useContracts(chainId, listOfAddress = [], ABI = []) {
    const web3 = (0,web3_useWeb3/* useWeb3 */.$)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    return (0,react.useMemo)(()=>listOfAddress.map((address)=>(0,contract/* createContract */.OP)(web3, address, ABI)
        ).filter(Boolean)
    , [
        web3,
        JSON.stringify(listOfAddress),
        ABI
    ]);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC20TokenContract.ts


function useERC20TokenContract_useERC20TokenContract(chainId, address) {
    return useContract_useContract(chainId, address, ERC20);
}
function useERC20TokenContracts(chainId, listOfAddress = []) {
    return useContracts(chainId, listOfAddress, ERC20ABI);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC20TokenAllowance.ts





function useERC20TokenAllowance(address, spender) {
    const account = (0,useAccount/* useAccount */.m)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,web3_useChainId/* useChainId */.x)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const erc20Contract = useERC20TokenContract_useERC20TokenContract(chainId, address);
    return (0,useBeat/* useBeatRetry */.ND)(async ()=>{
        if (!account || !spender || !erc20Contract) return '0';
        return erc20Contract.methods.allowance(account, spender).call({
            from: account
        });
    }, 30 * 1000, [
        account,
        chainId,
        spender,
        erc20Contract
    ]);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC20TokenTotalSupply.ts




function useERC20TokenTotalSupply(address) {
    const chainId = useChainId(NetworkPluginID.PLUGIN_EVM);
    const erc20TokenContract = useERC20TokenContract(chainId, address);
    return useAsyncRetry(async ()=>{
        if (!erc20TokenContract) return;
        return erc20TokenContract?.methods.totalSupply().call();
    }, [
        chainId,
        erc20TokenContract
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/once.js + 1 modules
var once = __webpack_require__(56898);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC20TokenApproveCallback.ts










const MaxUint256 = (0,src/* toFixed */.FH)('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
var ApproveStateType;
(function(ApproveStateType) {
    ApproveStateType[ApproveStateType["UNKNOWN"] = 0] = "UNKNOWN";
    ApproveStateType[ApproveStateType["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApproveStateType[ApproveStateType["UPDATING"] = 2] = "UPDATING";
    ApproveStateType[ApproveStateType["PENDING"] = 3] = "PENDING";
    ApproveStateType[ApproveStateType["APPROVED"] = 4] = "APPROVED";
    ApproveStateType[ApproveStateType["FAILED"] = 5] = "FAILED";
})(ApproveStateType || (ApproveStateType = {}));
function useERC20TokenApproveCallback(address, amount, spender) {
    const chainId = (0,web3_useChainId/* useChainId */.x)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,useAccount/* useAccount */.m)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const erc20Contract = useERC20TokenContract_useERC20TokenContract(chainId, address);
    // read the approved information from the chain
    const { value: balance = '0' , loading: loadingBalance , error: errorBalance , retry: revalidateBalance ,  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, address);
    const { value: allowance = '0' , loading: loadingAllowance , error: errorAllowance , retry: revalidateAllowance ,  } = useERC20TokenAllowance(address, spender);
    const [isApproving, setApproving] = (0,react.useState)(false);
    // the computed approve state
    const approveStateType = (0,react.useMemo)(()=>{
        if (!amount || !spender) return ApproveStateType.UNKNOWN;
        if (loadingBalance || loadingAllowance || isApproving) return ApproveStateType.UPDATING;
        if (errorBalance || errorAllowance) return ApproveStateType.FAILED;
        return (0,src/* isLessThan */.FI)(allowance, amount) ? ApproveStateType.NOT_APPROVED : ApproveStateType.APPROVED;
    }, [
        amount,
        spender,
        balance,
        allowance,
        errorBalance,
        errorAllowance,
        loadingAllowance,
        loadingBalance,
        isApproving, 
    ]);
    const [state, approveCallback] = (0,useAsyncFn/* default */.Z)(async (useExact = false)=>{
        if (approveStateType === ApproveStateType.UNKNOWN || !amount || !spender || !erc20Contract) {
            return;
        }
        // error: failed to approve token
        if (approveStateType !== ApproveStateType.NOT_APPROVED) {
            return;
        }
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).estimateGas({
                from: account
            }).catch((error)=>{
                useExact = !useExact;
                return erc20Contract.methods.approve(spender, amount).estimateGas({
                    from: account
                });
            }).catch((error)=>{
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            const revalidate = (0,once/* default */.Z)(()=>{
                revalidateBalance();
                revalidateAllowance();
            });
            erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                resolve(receipt.transactionHash);
                setApproving(false);
                revalidate();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                revalidate();
                reject(error);
            });
        });
    }, [
        account,
        amount,
        spender,
        erc20Contract,
        approveStateType
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        revalidateBalance();
        revalidateAllowance();
    }, [
        revalidateBalance,
        revalidateAllowance
    ]);
    return [
        {
            type: approveStateType,
            allowance,
            amount,
            spender,
            balance
        },
        {
            ...state,
            loading: loadingAllowance || loadingBalance || state.loading
        },
        approveCallback,
        resetCallback, 
    ];
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2596);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC20TokenTransferCallback.ts






function useERC20TokenTransferCallback(address, amount1, recipient1) {
    const account = (0,useAccount/* useAccount */.m)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,web3_useChainId/* useChainId */.x)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const erc20Contract = useERC20TokenContract_useERC20TokenContract(chainId, address);
    return (0,useAsyncFn/* default */.Z)(async (amount, recipient, gasConfig)=>{
        if (!account || !recipient || !amount || (0,src/* isZero */.Fr)(amount) || !erc20Contract) {
            return;
        }
        // error: invalid recipient address
        if (!(0,utils_address/* isValidAddress */.At)(recipient)) return;
        // error: insufficient balance
        const balance = await erc20Contract.methods.balanceOf(account).call();
        if ((0,src/* isGreaterThan */.T1)(amount, balance)) return;
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.transfer(recipient, amount).estimateGas({
                from: account
            }).catch((error)=>{
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc20Contract.methods.transfer(recipient, amount).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                reject(error);
            });
        });
    }, [
        account,
        address,
        amount1,
        recipient1,
        erc20Contract
    ]);
}

// EXTERNAL MODULE: ../web3-contracts/abis/ERC721.json
var ERC721 = __webpack_require__(78322);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC721TokenContract.ts


function useERC721TokenContract_useERC721TokenContract(chainId, address) {
    return useContract_useContract(chainId, address, ERC721);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC721TokenByIndex.ts




function useERC721TokenByIndex(token, index = 0) {
    const chainId = useChainId(NetworkPluginID.PLUGIN_EVM);
    const erc721Contract = useERC721TokenContract(chainId, token?.address);
    return useAsync(async ()=>{
        if (!erc721Contract) return;
        return erc721Contract.methods.tokenByIndex(index).call();
    }, [
        chainId,
        erc721Contract,
        index
    ]);
}

;// CONCATENATED MODULE: ../web3-shared/evm/utils/call.ts
function safeNonPayableTransactionCall(tx, overrides) {
    try {
        if (!tx) return;
        return tx.call(overrides);
    } catch (error) {
        return;
    }
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC721ContractIsApproveForAll.ts





/**
 * @param contractAddress NFT contract address.
 * @param owner The address that owns the NFTs.
 * @param operator The address that acts on behalf of the owner.
 * @return True if `operator` is an approved operator for `owner`, false otherwise.
 */ function useERC721ContractIsApproveForAll(contractAddress, owner, operator) {
    const chainId = (0,web3_useChainId/* useChainId */.x)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const erc721TokenContract = useERC721TokenContract_useERC721TokenContract(chainId, contractAddress);
    return (0,esm_useAsyncRetry/* default */.Z)(async ()=>{
        if (!erc721TokenContract || !owner || !operator) return;
        return safeNonPayableTransactionCall(erc721TokenContract.methods.isApprovedForAll(owner, operator));
    }, [
        erc721TokenContract,
        owner,
        operator
    ]);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC721ContractSetApproveForAllCallback.ts






/**
 * @param contractAddress NFT contract Address.
 * @param operator Address to add to the set of authorized operators.
 * @param approved True if the operator is approved, false to revoke approval.
 */ function useERC721ContractSetApproveForAllCallback(contractAddress, operator, approved) {
    const account = (0,useAccount/* useAccount */.m)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const erc721TokenContract = useERC721TokenContract_useERC721TokenContract(chainId, contractAddress);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!erc721TokenContract || !contractAddress || !operator) {
            return;
        }
        const config = {
            from: account,
            gas: await erc721TokenContract.methods.setApprovalForAll(operator, approved).estimateGas({
                from: account
            }).catch((error)=>{
                throw error;
            })
        };
        return new Promise(async (resolve, reject)=>{
            erc721TokenContract.methods.setApprovalForAll(operator, approved).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                resolve(receipt.transactionHash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                reject(error);
            });
        });
    }, [
        account,
        chainId,
        erc721TokenContract,
        approved,
        contractAddress,
        operator
    ]);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC721TokenTransferCallback.ts






function useERC721TokenTransferCallback(address) {
    const account = (0,useAccount/* useAccount */.m)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,web3_useChainId/* useChainId */.x)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const erc721Contract = useERC721TokenContract_useERC721TokenContract(chainId, address);
    return (0,useAsyncFn/* default */.Z)(async (tokenId, recipient, gasConfig)=>{
        if (!account || !recipient || !tokenId || !erc721Contract) return;
        // error: invalid recipient address
        if (!(0,utils_address/* isValidAddress */.At)(recipient)) return;
        // error: invalid ownership
        const ownerOf = await erc721Contract.methods.ownerOf(tokenId).call();
        if (!ownerOf || !(0,src/* isSameAddress */.Wr)(ownerOf, account)) return;
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc721Contract.methods.transferFrom(account, recipient, tokenId).estimateGas({
                from: account
            }).catch((error)=>{
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc721Contract.methods.transferFrom(account, recipient, tokenId).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                reject(error);
            });
        });
    }, [
        account,
        erc721Contract
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var esm_useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useGasOptions.ts
var useGasOptions = __webpack_require__(3125);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useGasConfig.ts





// TODO: support multiple chain
function useGasConfig(chainId) {
    const [gasConfig, setGasConfig] = (0,react.useState)();
    const { value: gasOptions_  } = (0,useGasOptions/* useGasOptions */.o)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: gasPrice  } = (0,esm_useAsync/* default */.Z)(async ()=>{
        try {
            const maxFeePerGas = (0,formatter/* formatGweiToWei */.nU)(gasOptions_?.[src/* GasOptionType.NORMAL */.Qd.NORMAL]?.suggestedMaxFeePerGas ?? 0).toFixed(0);
            const maxPriorityFeePerGas = (0,formatter/* formatGweiToWei */.nU)(gasOptions_?.[src/* GasOptionType.NORMAL */.Qd.NORMAL]?.suggestedMaxPriorityFeePerGas ?? 0).toFixed(0);
            setGasConfig({
                maxFeePerGas,
                maxPriorityFeePerGas
            });
            return maxFeePerGas;
        } catch (err) {
            setGasConfig(undefined);
            return;
        }
    }, [
        chainId,
        gasOptions_
    ]);
    return {
        gasPrice,
        gasConfig,
        setGasConfig
    };
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/abi.ts
var abi = __webpack_require__(77378);
;// CONCATENATED MODULE: ../web3-contracts/abis/Multicall.json
const Multicall_namespaceObject = JSON.parse('[{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Call[]","name":"calls","type":"tuple[]"}],"name":"multicall","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"uint256","name":"gasUsed","type":"uint256"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants = __webpack_require__(47104);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useMulticallContract.ts



function useMulticallContract(chainId) {
    const { MULTICALL_ADDRESS  } = (0,constants/* useEthereumConstants */.HV)(chainId);
    return useContract_useContract(chainId, MULTICALL_ADDRESS, Multicall_namespaceObject);
}

// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3Connection.ts
var web3_useWeb3Connection = __webpack_require__(53837);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useMulticall.ts







// conservative, hard-coded estimate of the current block gas limit
const CONSERVATIVE_BLOCK_GAS_LIMIT = 10_000_000;
// the default value for calls that don't specify gasRequired
const DEFAULT_GAS_REQUIRED = 200_000;
const DEFAULT_GAS_LIMIT = 1_000_000;
// #endregion
// #region cached results
const cachedResults = {};
function toCallKey(call) {
    return call.join('-');
}
function getCallResult(call, chainId, blockNumber) {
    const cache = cachedResults[chainId];
    const blockNumber_ = cache?.blockNumber ?? 0;
    if (blockNumber_ < blockNumber) return;
    return cache.results[toCallKey(call)];
}
function setCallResult(call, result, chainId, blockNumber) {
    const cache = cachedResults[chainId] ?? {
        results: [],
        blockNumber: 0
    };
    const blockNumber_ = cache.blockNumber;
    if (blockNumber_ > blockNumber) return;
    if (blockNumber_ < blockNumber) cache.blockNumber = blockNumber;
    cache.results[toCallKey(call)] = result;
    cachedResults[chainId] = cache;
}
// evenly distributes items among the chunks
function chunkArray(items, gasLimit = CONSERVATIVE_BLOCK_GAS_LIMIT * 10) {
    const chunks = [];
    let currentChunk = [];
    let currentChunkCumulativeGas = 0;
    for (const item of items){
        // calculate the gas required by the current item
        const gasRequired = item[1] ?? DEFAULT_GAS_REQUIRED;
        // if the current chunk is empty, or the current item wouldn't push it over the gas limit,
        // append the current item and increment the cumulative gas
        if (currentChunk.length === 0 || currentChunkCumulativeGas + gasRequired < gasLimit) {
            currentChunk.push(item);
            currentChunkCumulativeGas += gasRequired;
        } else {
            // otherwise, push the current chunk and create a new chunk
            chunks.push(currentChunk);
            currentChunk = [
                item
            ];
            currentChunkCumulativeGas = gasRequired;
        }
    }
    if (currentChunk.length > 0) chunks.push(currentChunk);
    return chunks;
}
var MulticallStateType;
(function(MulticallStateType) {
    MulticallStateType[MulticallStateType["UNKNOWN"] = 0] = "UNKNOWN";
    MulticallStateType[MulticallStateType[/** Wait for tx call */ "PENDING"] = 1] = "PENDING";
    MulticallStateType[MulticallStateType[/** Tx call resolved */ "SUCCEED"] = 2] = "SUCCEED";
    MulticallStateType[MulticallStateType[/** Tx call rejected */ "FAILED"] = 3] = "FAILED";
})(MulticallStateType || (MulticallStateType = {}));
/**
 * The basic hook for fetching data from the Multicall contract
 * @param calls
 */ function useMulticallCallback(targetChainId, targetBlockNumber) {
    const chainId = (0,web3_useChainId/* useChainId */.x)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, targetChainId);
    const connection = (0,web3_useWeb3Connection/* useWeb3Connection */.T)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const multicallContract = useMulticallContract(chainId);
    const [multicallState, setMulticallState] = (0,react.useState)({
        type: MulticallStateType.UNKNOWN
    });
    const multicallCallback = (0,react.useCallback)(async (calls, overrides)=>{
        if (calls.length === 0 || !multicallContract || !chainId) {
            setMulticallState({
                type: MulticallStateType.UNKNOWN
            });
            return;
        }
        const blockNumber = targetBlockNumber ?? await connection.getBlockNumber();
        try {
            setMulticallState({
                type: MulticallStateType.PENDING
            });
            // filter out cached calls
            const unresolvedCalls = calls.filter((call_)=>!getCallResult(call_, chainId, blockNumber)
            );
            // resolve the calls by chunks
            if (unresolvedCalls.length) {
                await Promise.all(chunkArray(unresolvedCalls).map(async (chunk)=>{
                    // we don't mind the actual block number of the current call
                    const { returnData  } = await multicallContract.methods.multicall(chunk).call(overrides);
                    returnData.forEach((result, index)=>setCallResult(chunk[index], result, chainId, blockNumber)
                    );
                }));
            }
            setMulticallState({
                type: MulticallStateType.SUCCEED,
                results: calls.map((call)=>getCallResult(call, chainId, blockNumber) ?? [
                        false,
                        '0x0',
                        '0x0'
                    ]
                )
            });
        } catch (error) {
            if (error instanceof Error) {
                setMulticallState({
                    type: MulticallStateType.FAILED,
                    error
                });
            }
            throw error;
        }
    }, [
        chainId,
        targetBlockNumber,
        multicallContract
    ]);
    return [
        multicallState,
        multicallCallback
    ];
}
// #endregion
// #region useMulticallStateDecoded
function useMulticallStateDecoded(contracts, names, state, chainId) {
    const web3 = (0,web3_useWeb3/* useWeb3 */.$)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    return (0,react.useMemo)(()=>{
        if (!web3 || state.type !== MulticallStateType.SUCCEED || contracts.length !== state.results.length) return [];
        return state.results.map(([succeed, gasUsed, result], index)=>{
            // the ignore formatter for better reading
            // prettier-ignore
            const outputs = contracts[index].options.jsonInterface.find(({ type , name  })=>type === 'function' && name === names[index]
            )?.outputs ?? [];
            try {
                const value = (0,abi/* decodeOutputString */.m)(web3, outputs, result);
                return {
                    succeed,
                    gasUsed,
                    value,
                    error: null
                };
            } catch (error) {
                return {
                    succeed: false,
                    gasUsed,
                    value: null,
                    error
                };
            }
        });
    }, [
        web3,
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        state
    ]);
}
// #endregion
function useSingleContractMultipleData(contract, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT, chainId, blockNumber) {
    const calls = (0,react.useMemo)(()=>{
        if (!contract) return [];
        return callDatas.map((data, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...data).encodeABI(), 
            ]
        );
    }, [
        contract?.options.address,
        names.join(),
        callDatas.flatMap((x)=>x
        ).join()
    ]);
    const [state, callback] = useMulticallCallback(chainId, blockNumber);
    const results = useMulticallStateDecoded(Array.from({
        length: calls.length
    }).fill(contract), names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMultipleContractSingleData(contracts, names, callData, chainId, blockNumber, gasLimit = DEFAULT_GAS_LIMIT) {
    const calls = (0,react.useMemo)(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...callData).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callData.join()
    ]);
    const [state, callback] = useMulticallCallback(chainId, blockNumber);
    const results = useMulticallStateDecoded(contracts, names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMultipleContractMultipleData(contracts, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT, chainId) {
    const calls = useMemo(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](callDatas[i]).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callDatas.flatMap((x)=>x
        ).join(),
        gasLimit
    ]);
    const [state, callback] = useMulticallCallback(chainId);
    const results = useMulticallStateDecoded(contracts, names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useNativeTokenTransferCallback.ts








function useNativeTransferCallback() {
    const chainId = (0,web3_useChainId/* useChainId */.x)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,useAccount/* useAccount */.m)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const web3 = (0,web3_useWeb3/* useWeb3 */.$)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncFn/* default */.Z)(async (amount, recipient, gasConfig, memo)=>{
        if (!account || !recipient || !amount || (0,src/* isZero */.Fr)(amount) || !web3) return;
        // error: invalid recipient address
        if (!dist.EthereumAddress.isValid(recipient)) return;
        // error: insufficient balance
        const balance = await web3.eth.getBalance(account);
        if ((0,src/* isGreaterThan */.T1)(amount, balance)) return;
        // send transaction and wait for hash
        const config = {
            from: account,
            to: recipient,
            gas: await web3.eth.estimateGas({
                from: account,
                to: recipient,
                value: amount,
                data: memo ? (0,lib.toHex)(memo) : undefined
            }).catch((error)=>{
                throw error;
            }),
            value: amount,
            data: memo ? (0,lib.toHex)(memo) : undefined,
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config, (error)=>{
                if (!error) return;
                reject(error);
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            });
        });
    }, [
        web3,
        account,
        chainId
    ]);
}

;// CONCATENATED MODULE: ../web3-contracts/abis/WETH.json
const WETH_namespaceObject = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]');
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useWrappedEtherContract.ts



function useNativeTokenWrapperContract(chainId) {
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(chainId);
    return useContract_useContract(chainId, WNATIVE_ADDRESS, WETH_namespaceObject);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useNativeTokenWrapperCallback.ts





function useNativeTokenWrapperCallback(chainId) {
    const account = (0,useAccount/* useAccount */.m)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const wrapperContract = useNativeTokenWrapperContract(chainId);
    const wrapCallback = (0,react.useCallback)(async (amount, gasConfig)=>{
        if (!wrapperContract || !amount) {
            return;
        }
        // error: invalid deposit amount
        if ((0,src/* isZero */.Fr)(amount)) return;
        // estimate gas and compose transaction
        const config = {
            from: account,
            value: amount,
            gas: await wrapperContract.methods.deposit().estimateGas({
                from: account,
                value: amount
            }).catch((error)=>{
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            wrapperContract.methods.deposit().send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                reject(error);
            });
        });
    }, [
        account,
        wrapperContract
    ]);
    const unwrapCallback = (0,react.useCallback)(async (all = true, amount = '0', gasConfig)=>{
        if (!wrapperContract || !amount) {
            return;
        }
        // read balance
        const wethBalance = await wrapperContract.methods.balanceOf(account).call();
        // error: invalid withdraw amount
        if (all === false && (0,src/* isZero */.Fr)(amount)) {
            return;
        }
        // error: insufficient weth balance
        if (all === false && (0,src/* isLessThan */.FI)(wethBalance, amount)) {
            return;
        }
        // estimate gas and compose transaction
        const withdrawAmount = all ? wethBalance : amount;
        const config = {
            from: account,
            gas: await wrapperContract.methods.withdraw(withdrawAmount).estimateGas({
                from: account
            }).catch((error)=>{
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            wrapperContract.methods.withdraw(withdrawAmount).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                reject(error);
            });
        });
    }, [
        account,
        wrapperContract
    ]);
    return [
        wrapCallback,
        unwrapCallback
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useTokenTransferCallback.ts





function useTokenTransferCallback(type, address) {
    const r1 = useNativeTransferCallback();
    const r2 = useERC20TokenTransferCallback(address);
    const r3 = useERC721TokenTransferCallback(address);
    const type_ = type;
    switch(type_){
        case types/* SchemaType.Native */.XQ.Native:
            return r1;
        case types/* SchemaType.ERC20 */.XQ.ERC20:
            return r2;
        case types/* SchemaType.ERC721 */.XQ.ERC721:
            return r3;
        case types/* SchemaType.ERC1155 */.XQ.ERC1155:
            throw new Error('To be implemented.');
        default:
            (0,esm/* unreachable */.t1)(type_);
    }
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/transaction.ts
var transaction = __webpack_require__(46815);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useTransactionState.ts


function txStateReducer(state, nextState) {
    const allowed = nextState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN || (0,transaction/* isNextStateAvailable */.NU)(state.type, nextState.type);
    return allowed ? nextState : state;
}
function useTransactionState() {
    return (0,react.useReducer)(txStateReducer, {
        type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
    });
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useTransactionReceipt.ts





function useTransactionReceipt(hash, contract) {
    const web3 = useWeb3(NetworkPluginID.PLUGIN_EVM);
    const connection = useWeb3Connection(NetworkPluginID.PLUGIN_EVM);
    return useAsyncRetry(async ()=>{
        const receipt = await connection.getTransactionReceipt(hash);
        if (!receipt) return;
        // if the contract is not given, return the raw receipt from RPC
        if (!contract) return receipt;
        return {
            ...receipt,
            events: decodeEvents(web3, contract.options.jsonInterface, receipt)
        };
    }, [
        hash,
        contract,
        connection,
        web3
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useTransactionCallback.ts



function useTransactionCallback(config, method) {
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!config || !method) return;
        const gasExpectedConfig = {
            ...config
        };
        try {
            const estimatedGas = await method.estimateGas((0,omit/* default */.Z)(config, 'gas'));
            if (!gasExpectedConfig.gas && estimatedGas) {
                gasExpectedConfig.gas = estimatedGas;
            }
        } catch (error1) {
            await method.call(config);
        }
        return new Promise(async (resolve, reject)=>{
            method.send(gasExpectedConfig).once(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            }).once(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                reject(error);
            });
        });
    }, [
        config,
        method
    ]);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useGetPastLogsParams.ts


// There's a getPastLogs block range limitation which differ from RPCs.
//  So we need to split one large range request to multiple small ones.
function useGetPastLogsParams(fromBlock, currentBlock, maxBlockRange, params) {
    return useMemo(()=>{
        if (!fromBlock || fromBlock > currentBlock) return [];
        let count = 1;
        const queryParams = [];
        while(fromBlock + count * maxBlockRange < currentBlock){
            queryParams.push({
                fromBlock: toHex(fromBlock + (count - 1) * maxBlockRange),
                toBlock: toHex(fromBlock + count * maxBlockRange),
                ...params
            });
            count += 1;
        }
        queryParams.push({
            fromBlock: toHex(fromBlock + (count - 1) * maxBlockRange),
            toBlock: toHex(currentBlock),
            ...params
        });
        return queryParams;
    }, [
        fromBlock,
        currentBlock,
        maxBlockRange,
        params
    ]);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useGasLimit.ts









function useGasLimit(type, contractAddress, amount, recipient, tokenId) {
    const web3 = (0,web3_useWeb3/* useWeb3 */.$)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,useAccount/* useAccount */.m)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,web3_useChainId/* useChainId */.x)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const erc20Contract = useERC20TokenContract_useERC20TokenContract(chainId, contractAddress);
    const erc721Contract = useERC721TokenContract_useERC721TokenContract(chainId, contractAddress);
    return (0,esm_useAsync/* default */.Z)(async ()=>{
        if (!web3 || !recipient || type === undefined) return 0;
        if (type === types/* SchemaType.ERC20 */.XQ.ERC20 && !amount || !contractAddress) return 0;
        if (type === types/* SchemaType.ERC721 */.XQ.ERC721 && !tokenId || !contractAddress) return 0;
        switch(type){
            case types/* SchemaType.Native */.XQ.Native:
                return web3.eth.estimateGas({
                    from: account,
                    to: recipient,
                    value: amount
                });
            case types/* SchemaType.ERC20 */.XQ.ERC20:
                return erc20Contract?.methods.transfer(recipient, amount ?? 0).estimateGas({
                    from: account
                });
            case types/* SchemaType.ERC721 */.XQ.ERC721:
                return erc721Contract?.methods.transferFrom(account, recipient, tokenId ?? '').estimateGas({
                    from: account
                });
            case types/* SchemaType.ERC1155 */.XQ.ERC1155:
                throw new Error('To be implemented');
            default:
                (0,esm/* unreachable */.t1)(type);
        }
    }, [
        erc20Contract,
        type,
        amount,
        account,
        recipient,
        tokenId
    ]);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC721TokenContracts.ts


function useERC721TokenContracts(chainId, listOfAddress = []) {
    return useContracts(chainId, listOfAddress, ERC721ABI);
}

// EXTERNAL MODULE: ../web3-contracts/abis/ERC1155.json
var abis_ERC1155 = __webpack_require__(6521);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useERC1155TokenContract.ts


function useERC1155TokenContract(chainId, address) {
    return useContract(chainId, address, ERC1155);
}

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useNonFungibleOwnerTokens.ts






const ERC721_ENUMERABLE_INTERFACE_ID = '0x780e9d63';
function useNonFungibleOwnerTokens(contractAddress, ownerAccount, chainId, _balance) {
    const allListRef = (0,react.useRef)([]);
    const nonFungibleTokenContract = useERC721TokenContract_useERC721TokenContract(chainId, contractAddress ?? '');
    const connection = (0,web3_useWeb3Connection/* useWeb3Connection */.T)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const asyncRetry = (0,esm_useAsyncRetry/* default */.Z)(async ()=>{
        if (!contractAddress || !ownerAccount || !connection || !nonFungibleTokenContract) return;
        const isEnumerable = await nonFungibleTokenContract.methods.supportsInterface(ERC721_ENUMERABLE_INTERFACE_ID).call();
        const balance = _balance === undefined ? Number.parseInt(await nonFungibleTokenContract.methods.balanceOf(ownerAccount).call(), 10) : _balance;
        if (!isEnumerable || !balance) return;
        const allRequest = Array.from({
            length: balance
        }, async (_v, i)=>{
            const tokenId = await nonFungibleTokenContract.methods.tokenOfOwnerByIndex(ownerAccount, i).call();
            if (!tokenId) return;
            return [
                contractAddress,
                tokenId
            ];
        });
        const listOfPairs = (await Promise.allSettled(allRequest)).map((x)=>x.status === 'fulfilled' ? x.value : undefined
        ).filter((value)=>value
        );
        if (!listOfPairs.length) return;
        allListRef.current = await Promise.all(listOfPairs?.map((x)=>connection.getNonFungibleToken(x[0], x[1], types/* SchemaType.ERC721 */.XQ.ERC721, {
                chainId,
                account: ownerAccount
            })
        ) ?? []);
    }, [
        chainId,
        contractAddress,
        ownerAccount,
        chainId,
        connection,
        nonFungibleTokenContract,
        _balance
    ]);
    const clearTokenDetailedOwnerList = ()=>allListRef.current = []
    ;
    return {
        asyncRetry,
        tokenDetailedOwnerList: allListRef.current,
        clearTokenDetailedOwnerList
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/useTargetChainIdContext.ts




function useTargetChainIdContext(_chainId) {
    const chainId = (0,web3_useChainId/* useChainId */.x)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, _chainId);
    const [targetChainId, setTargetChainId] = (0,react.useState)(chainId);
    return {
        targetChainId,
        setTargetChainId
    };
}
const TargetChainIdContext = (0,unstated_next/* createContainer */.f)(useTargetChainIdContext);

;// CONCATENATED MODULE: ../plugin-infra/src/web3/EVM/index.ts




























;// CONCATENATED MODULE: ../plugin-infra/src/entry-web3-evm.ts



/***/ })

}]);