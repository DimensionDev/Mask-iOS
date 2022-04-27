"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7664],{

/***/ 45479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];


var isHexPrefixed = __webpack_require__(77145);
var stripHexPrefix = __webpack_require__(45533);

/**
 * Pads a `String` to have an even length
 * @param {String} value
 * @return {String} output
 */
function padToEven(value) {
  var a = value; // eslint-disable-line

  if (typeof a !== 'string') {
    throw new Error('[ethjs-util] while padding to even, value must be string, is currently ' + typeof a + ', while padToEven.');
  }

  if (a.length % 2) {
    a = '0' + a;
  }

  return a;
}

/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */
function intToHex(i) {
  var hex = i.toString(16); // eslint-disable-line

  return '0x' + hex;
}

/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */
function intToBuffer(i) {
  var hex = intToHex(i);

  return new Buffer(padToEven(hex.slice(2)), 'hex');
}

/**
 * Get the binary size of a string
 * @param {String} str
 * @return {Number}
 */
function getBinarySize(str) {
  if (typeof str !== 'string') {
    throw new Error('[ethjs-util] while getting binary size, method getBinarySize requires input \'str\' to be type String, got \'' + typeof str + '\'.');
  }

  return Buffer.byteLength(str, 'utf8');
}

/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param {array} superset
 * @param {array} subset
 *
 * @returns {boolean}
 */
function arrayContainsArray(superset, subset, some) {
  if (Array.isArray(superset) !== true) {
    throw new Error('[ethjs-util] method arrayContainsArray requires input \'superset\' to be an array got type \'' + typeof superset + '\'');
  }
  if (Array.isArray(subset) !== true) {
    throw new Error('[ethjs-util] method arrayContainsArray requires input \'subset\' to be an array got type \'' + typeof subset + '\'');
  }

  return subset[Boolean(some) && 'some' || 'every'](function (value) {
    return superset.indexOf(value) >= 0;
  });
}

/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method toUtf8
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */
function toUtf8(hex) {
  var bufferValue = new Buffer(padToEven(stripHexPrefix(hex).replace(/^0+|0+$/g, '')), 'hex');

  return bufferValue.toString('utf8');
}

/**
 * Should be called to get ascii from it's hex representation
 *
 * @method toAscii
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */
function toAscii(hex) {
  var str = ''; // eslint-disable-line
  var i = 0,
      l = hex.length; // eslint-disable-line

  if (hex.substring(0, 2) === '0x') {
    i = 2;
  }

  for (; i < l; i += 2) {
    var code = parseInt(hex.substr(i, 2), 16);
    str += String.fromCharCode(code);
  }

  return str;
}

/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method fromUtf8
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */
function fromUtf8(stringValue) {
  var str = new Buffer(stringValue, 'utf8');

  return '0x' + padToEven(str.toString('hex')).replace(/^0+|0+$/g, '');
}

/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @method fromAscii
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */
function fromAscii(stringValue) {
  var hex = ''; // eslint-disable-line
  for (var i = 0; i < stringValue.length; i++) {
    // eslint-disable-line
    var code = stringValue.charCodeAt(i);
    var n = code.toString(16);
    hex += n.length < 2 ? '0' + n : n;
  }

  return '0x' + hex;
}

/**
 * getKeys([{a: 1, b: 2}, {a: 3, b: 4}], 'a') => [1, 3]
 *
 * @method getKeys get specific key from inner object array of objects
 * @param {String} params
 * @param {String} key
 * @param {Boolean} allowEmpty
 * @returns {Array} output just a simple array of output keys
 */
function getKeys(params, key, allowEmpty) {
  if (!Array.isArray(params)) {
    throw new Error('[ethjs-util] method getKeys expecting type Array as \'params\' input, got \'' + typeof params + '\'');
  }
  if (typeof key !== 'string') {
    throw new Error('[ethjs-util] method getKeys expecting type String for input \'key\' got \'' + typeof key + '\'.');
  }

  var result = []; // eslint-disable-line

  for (var i = 0; i < params.length; i++) {
    // eslint-disable-line
    var value = params[i][key]; // eslint-disable-line
    if (allowEmpty && !value) {
      value = '';
    } else if (typeof value !== 'string') {
      throw new Error('invalid abi');
    }
    result.push(value);
  }

  return result;
}

/**
 * Is the string a hex string.
 *
 * @method check if string is hex string of specific length
 * @param {String} value
 * @param {Number} length
 * @returns {Boolean} output the string is a hex string
 */
function isHexString(value, length) {
  if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }

  if (length && value.length !== 2 + 2 * length) {
    return false;
  }

  return true;
}

module.exports = {
  arrayContainsArray: arrayContainsArray,
  intToBuffer: intToBuffer,
  getBinarySize: getBinarySize,
  isHexPrefixed: isHexPrefixed,
  stripHexPrefix: stripHexPrefix,
  padToEven: padToEven,
  intToHex: intToHex,
  fromAscii: fromAscii,
  fromUtf8: fromUtf8,
  toAscii: toAscii,
  toUtf8: toUtf8,
  getKeys: getKeys,
  isHexString: isHexString
};

/***/ }),

/***/ 36897:
/***/ ((module) => {



module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ 30309:
/***/ ((module) => {


module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 53326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ Web3UI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
;// CONCATENATED MODULE: ./src/plugins/EVM/UI/components/NetworkIconClickBait.tsx






function NetworkIconClickBait({ network , provider , children , onSubmit , onClick  }) {
    // #region connect wallet dialog
    const { setDialog: setConnectWalletDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (ev.result) onSubmit?.(network, provider);
    });
    // #endregion
    const providerType = provider?.type;
    const networkType = network.type;
    const onClickNetwork = (0,react.useCallback)(async ()=>{
        if (!providerType) return;
        switch(providerType){
            case types/* ProviderType.MaskWallet */.lP.MaskWallet:
            case types/* ProviderType.MetaMask */.lP.MetaMask:
            case types/* ProviderType.WalletConnect */.lP.WalletConnect:
            case types/* ProviderType.Coin98 */.lP.Coin98:
            case types/* ProviderType.WalletLink */.lP.WalletLink:
            case types/* ProviderType.MathWallet */.lP.MathWallet:
            case types/* ProviderType.Fortmatic */.lP.Fortmatic:
                setConnectWalletDialog({
                    open: true,
                    providerType,
                    networkType
                });
                break;
            case types/* ProviderType.CustomNetwork */.lP.CustomNetwork:
                throw new Error('To be implemented.');
            default:
                (0,esm/* unreachable */.t1)(providerType);
        }
        onClick?.(network, provider);
    }, [
        network,
        provider,
        onClick
    ]);
    if (!providerType) return null;
    // hide fortmatic for some networks because of incomplete supporting
    if (providerType === types/* ProviderType.Fortmatic */.lP.Fortmatic && !(0,chainDetailed/* isFortmaticSupported */.qj)((0,chainDetailed/* getChainIdFromNetworkType */.EP)(networkType))) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,react.isValidElement)(children) ? /*#__PURE__*/ (0,react.cloneElement)(children, {
            ...children.props,
            ...{
                onClick: onClickNetwork
            }
        }) : children
    });
}

// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ./src/plugins/EVM/hooks/index.ts + 8 modules
var hooks = __webpack_require__(75153);
;// CONCATENATED MODULE: ./src/plugins/EVM/UI/components/ProviderIconClickBait.tsx








function ProviderIconClickBait({ network , provider , children , onClick , onSubmit  }) {
    // #region connect wallet dialog
    const { setDialog: setConnectWalletDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (ev.result) onSubmit?.(network, provider);
    });
    // #endregion
    const providerType = provider.type;
    const networkType = network.type;
    const injectedEthereumProviderType = (0,hooks/* useInjectedProviderType */.$K)('ethereum');
    const injectedCoin98ProviderType = (0,hooks/* useInjectedProviderType */.$K)('coin98');
    const onClickProvider = (0,react.useCallback)(async ()=>{
        // open the download page
        if ((0,chainDetailed/* isInjectedProvider */.sR)(providerType)) {
            const isProviderAvailable = providerType === types/* ProviderType.Coin98 */.lP.Coin98 ? providerType === injectedCoin98ProviderType : providerType === injectedEthereumProviderType;
            if (!isProviderAvailable) {
                const downloadLink = (0,pipes/* resolveProviderDownloadLink */.hX)(providerType);
                (0,src/* openWindow */.xw)(downloadLink);
                return;
            }
        }
        switch(providerType){
            case types/* ProviderType.MaskWallet */.lP.MaskWallet:
            case types/* ProviderType.MetaMask */.lP.MetaMask:
            case types/* ProviderType.WalletConnect */.lP.WalletConnect:
            case types/* ProviderType.Coin98 */.lP.Coin98:
            case types/* ProviderType.WalletLink */.lP.WalletLink:
            case types/* ProviderType.MathWallet */.lP.MathWallet:
            case types/* ProviderType.Fortmatic */.lP.Fortmatic:
                setConnectWalletDialog({
                    open: true,
                    providerType,
                    networkType
                });
                break;
            case types/* ProviderType.CustomNetwork */.lP.CustomNetwork:
                throw new Error('To be implemented.');
            default:
                (0,esm/* unreachable */.t1)(providerType);
        }
        onClick?.(network, provider);
    }, [
        network,
        provider,
        injectedEthereumProviderType,
        injectedCoin98ProviderType,
        onClick
    ]);
    // hide injected provider in dashboard
    if ((0,chainDetailed/* isInjectedProvider */.sR)(providerType) && (0,shared_base_src/* isDashboardPage */.K2)()) return null;
    // hide fortmatic for some networks because of incomplete supporting
    if (providerType === types/* ProviderType.Fortmatic */.lP.Fortmatic && !(0,chainDetailed/* isFortmaticSupported */.qj)((0,chainDetailed/* getChainIdFromNetworkType */.EP)(networkType))) return null;
    // hide coin98 and fortmatic
    if (providerType === types/* ProviderType.Coin98 */.lP.Coin98 || providerType === types/* ProviderType.Fortmatic */.lP.Fortmatic) return null;
    // coinbase and mathwallet are blocked by CSP
    if ([
        types/* ProviderType.WalletLink */.lP.WalletLink,
        types/* ProviderType.MathWallet */.lP.MathWallet
    ].includes(providerType)) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,react.isValidElement)(children) ? /*#__PURE__*/ (0,react.cloneElement)(children, {
            ...children.props,
            ...{
                onClick: onClickProvider
            }
        }) : children
    });
}

;// CONCATENATED MODULE: ./src/plugins/EVM/UI/Web3UI/index.tsx


const Web3UI = {
    SelectNetworkMenu: {
        NetworkIconClickBait: NetworkIconClickBait
    },
    SelectProviderDialog: {
        ProviderIconClickBait: ProviderIconClickBait
    }
};


/***/ }),

/***/ 73408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ FortmaticProviderBridge)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(74673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fortmatic@2.2.1/node_modules/fortmatic/dist/cjs/fortmatic.js
var fortmatic = __webpack_require__(82458);
var fortmatic_default = /*#__PURE__*/__webpack_require__.n(fortmatic);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/enum.ts
var utils_enum = __webpack_require__(36803);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
;// CONCATENATED MODULE: ../web3-shared/evm/providers/Fortmatic.ts





// #region create in-page fortmatic provider
/* spell-checker: disable-next-line */ const TEST_KEY = 'pk_test_D9EAF9A8ACEC9627';
/* spell-checker: disable-next-line */ const LIVE_KEY = 'pk_live_331BE8AA24445030';
const resolveAPI_Key = (0,utils_enum/* createLookupTableResolver */.F)({
    [types/* ChainId.Mainnet */.a_.Mainnet]: LIVE_KEY,
    [types/* ChainId.BSC */.a_.BSC]: LIVE_KEY,
    [types/* ChainId.Matic */.a_.Matic]: LIVE_KEY,
    [types/* ChainId.Rinkeby */.a_.Rinkeby]: TEST_KEY,
    [types/* ChainId.Ropsten */.a_.Ropsten]: TEST_KEY,
    [types/* ChainId.Kovan */.a_.Kovan]: TEST_KEY
}, '');
const providerPool = new Map();
function createFortmatic(chainId) {
    const rpcUrl = (0,head/* default */.Z)((0,constants/* getRPCConstants */.t0)(chainId).RPC);
    if (!rpcUrl) throw new Error('Failed to create provider.');
    return new (fortmatic_default())(resolveAPI_Key(chainId), {
        chainId,
        rpcUrl
    });
}
function createProvider(chainId) {
    if (providerPool.has(chainId)) return providerPool.get(chainId);
    const fm = createFortmatic(chainId);
    const provider = fm.getProvider();
    providerPool.set(chainId, provider);
    return provider;
}
function login(chainId) {
    const provider = createProvider(chainId);
    return provider.enable();
}
function logout(chainId) {
    const fm = createFortmatic(chainId);
    return fm.user.logout();
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ./src/plugins/EVM/messages.ts
var messages = __webpack_require__(96069);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
;// CONCATENATED MODULE: ./src/plugins/EVM/UI/components/FortmaticProviderBridge.tsx









function FortmaticProviderBridge(props) {
    const chainId = (0,entry_web3/* useChainId */.xx)(entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const providerType = (0,entry_web3/* useProviderType */._o)(entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const onMounted = (0,react.useCallback)(async ()=>{
        if ((0,src/* isDashboardPage */.K2)() || (0,src/* isPopupPage */.N6)()) return;
        if (providerType !== types/* ProviderType.Fortmatic */.lP.Fortmatic) return;
        const connected = await service/* default.Ethereum.connectFortmatic */.ZP.Ethereum.connectFortmatic((0,chainDetailed/* isFortmaticSupported */.qj)(chainId) ? chainId : types/* ChainId.Mainnet */.a_.Mainnet);
        await Wallet_messages/* WalletRPC.updateAccount */.V.updateAccount({
            account: connected.account,
            chainId: connected.chainId,
            providerType
        });
    }, [
        chainId,
        providerType
    ]);
    (0,react.useEffect)(()=>{
        return messages/* EVM_Messages.events.FORTMATIC_PROVIDER_RPC_REQUEST.on */.j.events.FORTMATIC_PROVIDER_RPC_REQUEST.on(async ({ payload  })=>{
            const handleResponse = (error, result)=>{
                if (error) {
                    messages/* EVM_Messages.events.FORTMATIC_PROVIDER_RPC_RESPONSE.sendToBackgroundPage */.j.events.FORTMATIC_PROVIDER_RPC_RESPONSE.sendToBackgroundPage({
                        payload,
                        error: error instanceof Error ? error : new Error()
                    });
                    return;
                }
                messages/* EVM_Messages.events.FORTMATIC_PROVIDER_RPC_RESPONSE.sendToBackgroundPage */.j.events.FORTMATIC_PROVIDER_RPC_RESPONSE.sendToBackgroundPage({
                    payload,
                    result,
                    error: null
                });
            };
            const chainIdFinally = payload.method === types/* EthereumMethodType.MASK_LOGIN_FORTMATIC */.W8.MASK_LOGIN_FORTMATIC ? (0,head/* default */.Z)(payload.params) : chainId;
            if (!chainIdFinally || !(0,chainDetailed/* isFortmaticSupported */.qj)(chainIdFinally)) throw new Error('Not supported.');
            try {
                switch(payload.method){
                    case types/* EthereumMethodType.MASK_LOGIN_FORTMATIC */.W8.MASK_LOGIN_FORTMATIC:
                        handleResponse(null, {
                            chainId: chainIdFinally,
                            accounts: await login(chainIdFinally)
                        });
                        break;
                    case types/* EthereumMethodType.MASK_LOGOUT_FORTMATIC */.W8.MASK_LOGOUT_FORTMATIC:
                        handleResponse(null, await logout(chainIdFinally));
                        break;
                    default:
                        const provider = createProvider(chainIdFinally);
                        handleResponse(null, await provider.send(payload.method, payload.params));
                        break;
                }
            } catch (error) {
                handleResponse(error);
            }
        });
    }, [
        chainId
    ]);
    (0,useMount/* default */.Z)(onMounted);
    return null;
}


/***/ }),

/***/ 75153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gs": () => (/* reexport */ useAsset),
  "X$": () => (/* reexport */ useBridgedProvider),
  "k6": () => (/* reexport */ useHistory),
  "$K": () => (/* reexport */ useInjectedProviderType),
  "yi": () => (/* reexport */ useOrders)
});

// UNUSED EXPORTS: useInjectedProviderReady, useNetwork, useProvider

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2239);
// EXTERNAL MODULE: ./src/plugins/EVM/messages.ts
var messages = __webpack_require__(96069);
// EXTERNAL MODULE: ./src/plugins/Collectible/pipes/index.ts
var Collectible_pipes = __webpack_require__(67811);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useAsset.ts




function useAsset(address, tokenId, provider) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const asset = await messages/* EVM_RPC.getAsset */.k.getAsset({
            address,
            tokenId,
            chainId,
            provider
        });
        return {
            ...asset,
            image_url: (0,pipes/* resolveIPFSLinkFromURL */.Yx)(asset?.image_url ?? ''),
            isOrderWeth: (0,utils_address/* isSameAddress */.Wr)(asset?.desktopOrder?.payment_token ?? '', WNATIVE_ADDRESS) ?? false,
            isCollectionWeth: asset?.collection?.payment_tokens?.some((0,utils_address/* currySameAddress */.DC)(WNATIVE_ADDRESS)) ?? false,
            isOwner: asset?.top_ownerships.some((item)=>(0,utils_address/* isSameAddress */.Wr)(item.owner.address, account)
            ) ?? false,
            collectionLinkUrl: (0,Collectible_pipes/* resolveAvatarLinkOnCurrentProvider */.TN)(chainId, asset, provider)
        };
    }, [
        account,
        chainId,
        WNATIVE_ADDRESS,
        address,
        tokenId,
        provider
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useHistory.ts



function useHistory(provider, page, size, address, tokenId) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !tokenId) return {
            data: [],
            hasNextPage: false
        };
        const histories = await messages/* EVM_RPC.getHistory */.k.getHistory({
            address,
            tokenId,
            chainId,
            provider,
            page,
            size
        });
        return {
            data: histories,
            hasNextPage: histories.length === size
        };
    }, [
        address,
        tokenId,
        chainId,
        provider,
        page,
        size
    ]);
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(92820);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useOrders.ts




function useOrders(provider, page, size, address, tokenId, side) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !tokenId) return {
            data: [],
            hasNextPage: false
        };
        const orders = await messages/* EVM_RPC.getOrders */.k.getOrders({
            address,
            tokenId,
            side: side ?? src/* NonFungibleTokenAPI.OrderSide.Sell */.x4.OrderSide.Sell,
            chainId,
            provider,
            page,
            size
        });
        return {
            data: orders,
            hasNextPage: orders.length === size
        };
    }, [
        address,
        tokenId,
        side,
        chainId
    ]);
}

// EXTERNAL MODULE: ./src/plugins/EVM/constants.ts
var EVM_constants = __webpack_require__(29729);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useNetwork.ts


function useNetwork() {
    const networkType = useNetworkType();
    return PLUGIN_NETWORKS.find((x)=>x.type === networkType
    ) ?? null;
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useProvider.ts


function useProvider() {
    const providerType = useProviderType();
    return PLUGIN_PROVIDERS.find((x)=>x.type === providerType
    ) ?? null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(39230);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useBridgedProvider.ts



function useBridgedProvider(type) {
    return (0,react.useMemo)(()=>{
        switch(type){
            case 'ethereum':
                return sdk/* bridgedEthereumProvider */.j3;
            case 'coin98':
                return sdk/* bridgedCoin98Provider */.A9;
            default:
                (0,esm/* unreachable */.t1)(type);
        }
    }, [
        type
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useInjectedProviderReady.ts


function useInjectedProviderReady(type) {
    const bridgedProvider = useBridgedProvider(type);
    const { value: available = false  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return bridgedProvider.untilAvailable();
    }, [
        bridgedProvider
    ]);
    return available;
}

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useInjectedProviderType.ts




function useInjectedProviderType(type) {
    const bridgedProvider = useBridgedProvider(type);
    const injectedProviderReady = useInjectedProviderReady(type);
    const { value: injectedProviderType  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!injectedProviderReady) return;
        // WalletLink (Coinbase)
        const isWalletLink = await bridgedProvider.getProperty('isWalletLink');
        if (isWalletLink) return types/* ProviderType.WalletLink */.lP.WalletLink;
        // Coin98 under ethereum
        const isCoin98 = await bridgedProvider.getProperty('isCoin98');
        if (isCoin98) return types/* ProviderType.Coin98 */.lP.Coin98;
        // mathwallet
        const isMathWallet = await bridgedProvider.getProperty('isMathWallet');
        if (isMathWallet) return types/* ProviderType.MathWallet */.lP.MathWallet;
        // metamask
        const isMetaMask = await bridgedProvider.getProperty('isMetaMask');
        if (isMetaMask) return types/* ProviderType.MetaMask */.lP.MetaMask;
        return;
    }, [
        injectedProviderReady,
        bridgedProvider
    ]);
    return injectedProviderType;
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/index.ts










/***/ }),

/***/ 96069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ EVM_Messages),
/* harmony export */   "k": () => (/* binding */ EVM_RPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79936);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29729);



if (false) {}
const evmEventEmitter = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM);
const EVM_Messages = {
    events: evmEventEmitter
};
const EVM_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, ()=>__webpack_require__.e(/* import() */ 2152).then(__webpack_require__.bind(__webpack_require__, 12152))
, EVM_Messages.events.rpc);


/***/ })

}]);