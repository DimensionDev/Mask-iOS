"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4967],{

/***/ 83336:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const strictUriEncode = __webpack_require__(30309);
const decodeComponent = __webpack_require__(49048);
const splitOnFirst = __webpack_require__(36897);

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
				const newValue = isArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url, hash] = splitOnFirst(input, '#');

	return Object.assign(
		{
			url: url.split('?')[0] || '',
			query: parse(extract(input), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (input, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(input.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(input.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, input.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(input.url);
	if (input.fragmentIdentifier) {
		hash = `#${encode(input.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
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

/***/ 74501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ Web3UI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_8495c1478c7f1d196df61d0bdcd91148/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(84176);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(78037);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
;// CONCATENATED MODULE: ./src/plugins/EVM/UI/components/NetworkIconClickBait.tsx






function NetworkIconClickBait({ network , provider , children , onSubmit , onClick  }) {
    // #region connect wallet dialog
    const { setDialog: setConnectWalletDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (ev.result) onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(network, provider);
    });
    // #endregion
    const providerType = provider === null || provider === void 0 ? void 0 : provider.type;
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
        onClick === null || onClick === void 0 ? void 0 : onClick(network, provider);
    }, [
        network,
        provider,
        onClick
    ]);
    if (!providerType) return null;
    // hide fortmatic for some networks because of incomplete supporting
    if (providerType === types/* ProviderType.Fortmatic */.lP.Fortmatic && !(0,chainDetailed/* isFortmaticSupported */.qj)((0,chainDetailed/* getChainIdFromNetworkType */.EP)(networkType))) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,react.isValidElement)(children) ? /*#__PURE__*/ (0,react.cloneElement)(children, {
            ...children.props,
            ...{
                onClick: onClickNetwork
            }
        }) : children
    }));
}

// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(29528);
// EXTERNAL MODULE: ./src/plugins/EVM/hooks/index.ts + 8 modules
var hooks = __webpack_require__(31638);
;// CONCATENATED MODULE: ./src/plugins/EVM/UI/components/ProviderIconClickBait.tsx








function ProviderIconClickBait({ network , provider , children , onClick , onSubmit  }) {
    // #region connect wallet dialog
    const { setDialog: setConnectWalletDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (ev.result) onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(network, provider);
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
                if (downloadLink) window.open(downloadLink, '_blank', 'noopener noreferrer');
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
        onClick === null || onClick === void 0 ? void 0 : onClick(network, provider);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,react.isValidElement)(children) ? /*#__PURE__*/ (0,react.cloneElement)(children, {
            ...children.props,
            ...{
                onClick: onClickProvider
            }
        }) : children
    }));
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

/***/ 16528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ FortmaticProviderBridge)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(43470);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fortmatic@2.2.1/node_modules/fortmatic/dist/cjs/fortmatic.js
var fortmatic = __webpack_require__(82458);
var fortmatic_default = /*#__PURE__*/__webpack_require__.n(fortmatic);
// EXTERNAL MODULE: ../web3-shared/evm/utils/enum.ts
var utils_enum = __webpack_require__(18392);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 25 modules
var constants = __webpack_require__(72873);
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

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(89729);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/plugins/EVM/messages.ts
var messages = __webpack_require__(56902);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(70202);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
;// CONCATENATED MODULE: ./src/plugins/EVM/UI/components/FortmaticProviderBridge.tsx










function FortmaticProviderBridge(props) {
    const chainId = (0,src/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const providerType = (0,src/* useProviderType */._o)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const onMounted = (0,react.useCallback)(async ()=>{
        if ((0,shared_base_src/* isDashboardPage */.K2)() || (0,shared_base_src/* isPopupPage */.N6)()) return;
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

/***/ 31638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gs": () => (/* reexport */ useAsset),
  "X$": () => (/* reexport */ useBridgedProvider),
  "k6": () => (/* reexport */ useHistory),
  "$K": () => (/* reexport */ useInjectedProviderType),
  "$F": () => (/* reexport */ useNFTBalance/* useNFTBalance */.$),
  "yi": () => (/* reexport */ useOrders)
});

// UNUSED EXPORTS: useInjectedProviderReady, useNetwork, useProvider

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(19149);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(81409);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 25 modules
var constants = __webpack_require__(72873);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(77031);
// EXTERNAL MODULE: ./src/plugins/EVM/messages.ts
var messages = __webpack_require__(56902);
// EXTERNAL MODULE: ./src/plugins/Collectible/pipes/index.ts
var pipes = __webpack_require__(36671);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useAsset.ts




function useAsset(address, tokenId, provider) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        var ref, ref1, ref2;
        const asset = await messages/* EVM_RPC.getAsset */.k.getAsset({
            address,
            tokenId,
            chainId,
            provider
        });
        var ref3, ref4, ref5, ref6;
        return {
            ...asset,
            isOrderWeth: (ref4 = (0,utils_address/* isSameAddress */.Wr)((ref3 = asset === null || asset === void 0 ? void 0 : (ref = asset.desktopOrder) === null || ref === void 0 ? void 0 : ref.payment_token) !== null && ref3 !== void 0 ? ref3 : '', WNATIVE_ADDRESS)) !== null && ref4 !== void 0 ? ref4 : false,
            isCollectionWeth: (ref5 = asset === null || asset === void 0 ? void 0 : (ref1 = asset.collection) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.payment_tokens) === null || ref2 === void 0 ? void 0 : ref2.some((0,utils_address/* currySameAddress */.DC)(WNATIVE_ADDRESS))) !== null && ref5 !== void 0 ? ref5 : false,
            isOwner: (ref6 = asset === null || asset === void 0 ? void 0 : asset.top_ownerships.some((item)=>(0,utils_address/* isSameAddress */.Wr)(item.owner.address, account)
            )) !== null && ref6 !== void 0 ? ref6 : false,
            collectionLinkUrl: (0,pipes/* resolveAvatarLinkOnCurrentProvider */.TN)(chainId, asset, provider)
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

// EXTERNAL MODULE: ./src/plugins/EVM/hooks/useNFTBalance.ts
var useNFTBalance = __webpack_require__(86191);
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

// EXTERNAL MODULE: ../web3-providers/src/index.ts + 21 modules
var src = __webpack_require__(41544);
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
            side: side !== null && side !== void 0 ? side : src/* NonFungibleTokenAPI.OrderSide.Sell */.x4.OrderSide.Sell,
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
var EVM_constants = __webpack_require__(32646);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useNetwork.ts


function useNetwork() {
    const networkType = useNetworkType();
    var ref;
    return (ref = PLUGIN_NETWORKS.find((x)=>x.type === networkType
    )) !== null && ref !== void 0 ? ref : null;
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useProvider.ts


function useProvider() {
    const providerType = useProviderType();
    var ref;
    return (ref = PLUGIN_PROVIDERS.find((x)=>x.type === providerType
    )) !== null && ref !== void 0 ? ref : null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_8495c1478c7f1d196df61d0bdcd91148/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(84176);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(4520);
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
var types = __webpack_require__(18249);
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

/***/ 86191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useNFTBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19149);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92971);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18249);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56902);



function useNFTBalance(address, disabled = false) {
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!address || disabled) return null;
        return _messages__WEBPACK_IMPORTED_MODULE_0__/* .EVM_RPC.getNFTBalance */ .k.getNFTBalance({
            address,
            chainId,
            provider: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN
        });
    }, [
        address,
        disabled,
        chainId
    ]);
}


/***/ }),

/***/ 56902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ EVM_Messages),
/* harmony export */   "k": () => (/* binding */ EVM_RPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89729);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86716);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32646);



if (false) {}
const EVM_Messages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const EVM_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(1544), __webpack_require__.e(4503)]).then(__webpack_require__.bind(__webpack_require__, 24503))
, EVM_Messages.events.rpc);


/***/ })

}]);