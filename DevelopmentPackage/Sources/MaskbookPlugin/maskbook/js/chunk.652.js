"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[652],{

/***/ 26447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];


Object.defineProperty(exports, "__esModule", ({ value: true }));
let converter;
/**
 * Convert a little-endian buffer into a BigInt.
 * @param buf The little-endian buffer to convert
 * @returns A BigInt with the little-endian representation of buf.
 */
function toBigIntLE(buf) {
    {
        const reversed = Buffer.from(buf);
        reversed.reverse();
        const hex = reversed.toString('hex');
        if (hex.length === 0) {
            return BigInt(0);
        }
        return BigInt(`0x${hex}`);
    }
    return converter.toBigInt(buf, false);
}
exports.toBigIntLE = toBigIntLE;
/**
 * Convert a big-endian buffer into a BigInt
 * @param buf The big-endian buffer to convert.
 * @returns A BigInt with the big-endian representation of buf.
 */
function toBigIntBE(buf) {
    {
        const hex = buf.toString('hex');
        if (hex.length === 0) {
            return BigInt(0);
        }
        return BigInt(`0x${hex}`);
    }
    return converter.toBigInt(buf, true);
}
exports.toBigIntBE = toBigIntBE;
/**
 * Convert a BigInt to a little-endian buffer.
 * @param num   The BigInt to convert.
 * @param width The number of bytes that the resulting buffer should be.
 * @returns A little-endian buffer representation of num.
 */
function toBufferLE(num, width) {
    {
        const hex = num.toString(16);
        const buffer = Buffer.from(hex.padStart(width * 2, '0').slice(0, width * 2), 'hex');
        buffer.reverse();
        return buffer;
    }
    // Allocation is done here, since it is slower using napi in C
    return converter.fromBigInt(num, Buffer.allocUnsafe(width), false);
}
exports.toBufferLE = toBufferLE;
/**
 * Convert a BigInt to a big-endian buffer.
 * @param num   The BigInt to convert.
 * @param width The number of bytes that the resulting buffer should be.
 * @returns A big-endian buffer representation of num.
 */
function toBufferBE(num, width) {
    {
        const hex = num.toString(16);
        return Buffer.from(hex.padStart(width * 2, '0').slice(0, width * 2), 'hex');
    }
    return converter.fromBigInt(num, Buffer.allocUnsafe(width), true);
}
exports.toBufferBE = toBufferBE;


/***/ }),

/***/ 9026:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* eslint-env browser */
/* global globalThis:readonly */


// Ponyfill for `globalThis`
const _globalThis = (() => {
	if (typeof globalThis !== 'undefined') {
		return globalThis;
	}

	if (typeof self !== 'undefined') {
		return self;
	}

	/* istanbul ignore next */
	if (typeof window !== 'undefined') {
		return window;
	}

	/* istanbul ignore next */
	if (typeof __webpack_require__.g !== 'undefined') {
		return __webpack_require__.g;
	}
})();

const bufferToHex = buffer => {
	const view = new DataView(buffer);

	let hexCodes = '';
	for (let i = 0; i < view.byteLength; i += 4) {
		hexCodes += view.getUint32(i).toString(16).padStart(8, '0');
	}

	return hexCodes;
};

const create = algorithm => async (buffer, options) => {
	if (typeof buffer === 'string') {
		buffer = new _globalThis.TextEncoder().encode(buffer);
	}

	options = {
		outputFormat: 'hex',
		...options
	};

	const hash = await _globalThis.crypto.subtle.digest(algorithm, buffer);

	return options.outputFormat === 'hex' ? bufferToHex(hash) : hash;
};

__webpack_unused_export__ = create('SHA-1');
exports.JQ = create('SHA-256');
__webpack_unused_export__ = create('SHA-384');
__webpack_unused_export__ = create('SHA-512');


/***/ }),

/***/ 22591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ createWeb3State)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89260);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79958);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3251);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79946);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18829);






function createSubscriptionFromPublicKey(getter) {
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .mapSubscription */ .S3)((0,_storage__WEBPACK_IMPORTED_MODULE_5__/* .getStorage */ .cF)().publicKey.subscription, getter);
}
function createWeb3State(signal) {
    const chainId = _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet;
    return {
        Shared: {
            allowTestnet: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(false),
            account: createSubscriptionFromPublicKey((publicKey)=>{
                return publicKey ?? '';
            }),
            wallets: createSubscriptionFromPublicKey((publicKey)=>{
                if (!publicKey) return [];
                return [
                    {
                        name: 'Solana',
                        address: publicKey,
                        hasDerivationPath: false,
                        hasStoredKeyInfo: false
                    }, 
                ];
            }),
            chainId: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(chainId),
            networkType: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(_masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .NetworkType.Solana */ .td.Solana),
            providerType: createSubscriptionFromPublicKey((publicKey)=>{
                return publicKey ? _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.Phantom */ .lP.Phantom : undefined;
            })
        },
        Asset: {
            getFungibleAssets: _apis__WEBPACK_IMPORTED_MODULE_3__/* .getFungibleAssets */ .KM,
            getNonFungibleAssets: _apis__WEBPACK_IMPORTED_MODULE_3__/* .getNonFungibleAssets */ .z6
        },
        Utils: {
            formatAddress: _helpers__WEBPACK_IMPORTED_MODULE_4__/* .formatAddress */ .Tg,
            formatBalance: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .toFixed */ .FH,
            formatCurrency: _helpers__WEBPACK_IMPORTED_MODULE_4__/* .formatCurrency */ .xG,
            isChainIdValid: ()=>true
            ,
            resolveTransactionLink: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .resolveTransactionLinkOnExplorer */ .z4,
            resolveAddressLink: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .resolveAddressLinkOnExplorer */ .V3,
            resolveBlockLink: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .resolveBlockLinkOnExplorer */ .vy
        },
        NameService: {
            lookup: (domain)=>(0,_apis__WEBPACK_IMPORTED_MODULE_3__/* .lookup */ .P5)(domain, chainId)
            ,
            reverse: (address)=>(0,_apis__WEBPACK_IMPORTED_MODULE_3__/* .reverse */ .GY)(address, chainId)
        }
    };
}


/***/ }),

/***/ 92980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ Web3UI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../web3-shared/solana/index.ts + 4 modules
var solana = __webpack_require__(79958);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../plugins/Solana/src/wallet/index.ts + 2 modules
var wallet = __webpack_require__(23085);
;// CONCATENATED MODULE: ../plugins/Solana/src/UI/components/ProviderIconClickBait.tsx





function ProviderIconClickBait({ network , provider , children , onSubmit , onClick  }) {
    const onLogIn = (0,react.useCallback)(async ()=>{
        onClick?.(network, provider);
        const publicKey = await (0,wallet/* connectWallet */.UP)();
        if (publicKey) {
            onSubmit?.(network, provider);
        }
    }, [
        provider,
        onClick,
        onSubmit
    ]);
    const isDashboard = (0,src/* isDashboardPage */.K2)();
    const disabled = isDashboard && provider.type === solana/* ProviderType.Phantom */.lP.Phantom;
    const disabledStyled = {
        opacity: 0.5
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,react.isValidElement)(children) ? /*#__PURE__*/ (0,react.cloneElement)(children, {
            style: disabled ? disabledStyled : undefined,
            ...children.props,
            onClick: disabled ? undefined : onLogIn
        }) : children
    });
}

;// CONCATENATED MODULE: ../plugins/Solana/src/UI/Web3UI/index.tsx

const Web3UI = {
    SelectProviderDialog: {
        ProviderIconClickBait: ProviderIconClickBait
    }
};


/***/ }),

/***/ 3251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "KM": () => (/* reexport */ getFungibleAssets),
  "z6": () => (/* reexport */ getNonFungibleAssets),
  "P5": () => (/* reexport */ lookup),
  "GY": () => (/* reexport */ reverse)
});

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../web3-shared/solana/index.ts + 4 modules
var solana = __webpack_require__(79958);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(92820);
// EXTERNAL MODULE: ../plugins/Solana/src/helpers/index.ts + 2 modules
var helpers = __webpack_require__(79946);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@solana+spl-token-registry@0.2.1301/node_modules/@solana/spl-token-registry/dist/module/index.js + 2 modules
var dist_module = __webpack_require__(64677);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@solana+spl-token@0.1.8/node_modules/@solana/spl-token/lib/index.browser.esm.js
var index_browser_esm = __webpack_require__(23434);
// EXTERNAL MODULE: ../plugins/Solana/src/constants.ts
var constants = __webpack_require__(20914);
;// CONCATENATED MODULE: ../plugins/Solana/src/apis/shared.ts


const SPL_TOKEN_PROGRAM_ID = index_browser_esm.TOKEN_PROGRAM_ID.toBase58();
let id = 0;
async function requestRPC(chainId, options) {
    const endpoint = constants/* NETWORK_ENDPOINTS */.qR[chainId];
    id += 1;
    const res = await globalThis.fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...options,
            jsonrpc: '2.0',
            id
        })
    });
    return res.json();
}
async function fetchJSON(url) {
    const res = await globalThis.fetch(url);
    return res.json();
}

;// CONCATENATED MODULE: ../plugins/Solana/src/apis/getFungibleAssets.ts






async function getSolanaBalance(chainId, account) {
    const { SOL_ADDRESS =''  } = (0,solana/* getTokenConstants */.aV)(chainId);
    const price = await src/* CoinGecko.getTokenPrice */.oD.getTokenPrice('solana', entry_web3/* CurrencyType.USD */.V2.USD);
    const data = await requestRPC(chainId, {
        method: 'getAccountInfo',
        params: [
            account
        ]
    });
    const balance = data.result?.value.lamports.toString() ?? '0';
    return (0,helpers/* createFungibleAsset */.kI)((0,helpers/* createFungibleToken */.mn)(chainId, SOL_ADDRESS, 'Solana', 'SOL', 9), balance, new URL(/* asset import */ __webpack_require__(96951), __webpack_require__.b).toString(), price);
}
async function getSplTokenList(chainId, account) {
    const data = await requestRPC(chainId, {
        method: 'getProgramAccounts',
        params: [
            SPL_TOKEN_PROGRAM_ID,
            {
                encoding: 'jsonParsed',
                filters: [
                    {
                        dataSize: 165
                    },
                    {
                        memcmp: {
                            offset: 32,
                            bytes: account
                        }
                    }, 
                ]
            }, 
        ]
    });
    if (!data.result?.length) return [];
    const tokenListProvider = new dist_module/* TokenListProvider */.DK();
    const provider = await tokenListProvider.resolve();
    const tokenList = provider.filterByChainId(chainId).getList();
    const splTokens = [];
    data.result.forEach((x)=>{
        const info = x.account.data.parsed.info;
        const token = tokenList.find((y)=>y.address === info.mint
        );
        const isSafe = info.tokenAmount.decimals !== 0 && token !== undefined;
        if (!isSafe) return;
        const name = token.name || 'Unknown Token';
        const symbol = token.symbol || 'Unknown Token';
        const splToken = (0,helpers/* createFungibleAsset */.kI)((0,helpers/* createFungibleToken */.mn)(chainId, info.mint, name, symbol, info.tokenAmount.decimals), info.tokenAmount.amount, token.logoURI);
        splTokens.push(splToken);
    });
    return splTokens;
}
async function getFungibleAssets(address, provider, network, pagination) {
    const allSettled = await Promise.allSettled([
        getSolanaBalance(network.chainId, address).then((x)=>[
                x
            ]
        ),
        getSplTokenList(network.chainId, address), 
    ]);
    return allSettled.map((x)=>x.status === 'fulfilled' ? x.value : null
    ).flat().filter(Boolean);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@metaplex+js@4.11.7/node_modules/@metaplex/js/lib/index.browser.esm.js
var lib_index_browser_esm = __webpack_require__(60709);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@metaplex-foundation+mpl-token-metadata@1.1.0/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/mpl-token-metadata.js
var mpl_token_metadata = __webpack_require__(99198);
;// CONCATENATED MODULE: ../plugins/Solana/src/apis/getNonFungibleAssets.ts






async function getNftList(chainId, account) {
    const data = await requestRPC(chainId, {
        method: 'getProgramAccounts',
        params: [
            SPL_TOKEN_PROGRAM_ID,
            {
                encoding: 'jsonParsed',
                filters: [
                    {
                        dataSize: 165
                    },
                    {
                        memcmp: {
                            offset: 32,
                            bytes: account
                        }
                    }, 
                ]
            }, 
        ]
    });
    if (!data.result?.length) return [];
    const connection = new lib_index_browser_esm/* Connection */.ew(constants/* ENDPOINT_KEY */.pU);
    const nftTokens = data.result.filter((x)=>x.account.data.parsed.info.tokenAmount.decimals === 0
    );
    const promises = nftTokens.map(async (x)=>{
        const pda = await mpl_token_metadata.Metadata.getPDA(x.account.data.parsed.info.mint);
        const metadata = await mpl_token_metadata.Metadata.load(connection, pda);
        if (!metadata) return null;
        const externalMeta = await fetchJSON(metadata.data.data.uri).catch(()=>null
        );
        const pubkey = pda.toBase58();
        return {
            id: pubkey,
            tokenId: pubkey,
            chainId: chainId,
            type: entry_web3/* TokenType.NonFungible */.iv.NonFungible,
            name: metadata.data.data.name,
            description: externalMeta?.description,
            contract: {
                name: metadata.data.data.name,
                symbol: metadata.data.data.symbol,
                chainId: solana/* ChainId.Mainnet */.a_.Mainnet,
                address: pubkey,
                tokenId: pubkey
            },
            metadata: {
                name: metadata.data.data.name,
                description: metadata.data.data.name,
                mediaType: externalMeta?.properties?.category || 'Unknown',
                iconURL: '',
                assetURL: (externalMeta?.animation ?? externalMeta?.image) ?? ''
            }
        };
    });
    const allSettled = await Promise.allSettled(promises);
    const tokens = allSettled.map((x)=>x.status === 'fulfilled' ? x.value : null
    ).filter(Boolean);
    return tokens;
}
async function getNonFungibleAssets(address, pagination, providerType, network) {
    const tokens = await getNftList(solana/* ChainId.Mainnet */.a_.Mainnet, address);
    return {
        currentPage: 1,
        hasNextPage: false,
        data: tokens
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@bonfida+spl-name-service@0.1.27/node_modules/@bonfida/spl-name-service/dist/index.js
var dist = __webpack_require__(96737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@solana+spl-name-service@0.1.3/node_modules/@solana/spl-name-service/dist/index.js
var spl_name_service_dist = __webpack_require__(94026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@solana+web3.js@1.31.0/node_modules/@solana/web3.js/lib/index.browser.esm.js
var web3_js_lib_index_browser_esm = __webpack_require__(29948);
;// CONCATENATED MODULE: ../plugins/Solana/src/apis/getDomainName.ts




const getKey = async (name)=>{
    const hashedName = await (0,spl_name_service_dist.getHashedName)(name);
    const domainKey = await (0,spl_name_service_dist.getNameAccountKey)(hashedName, undefined, constants/* SOL_TLD_AUTHORITY */.xP);
    return {
        domainKey,
        hashedName
    };
};
const connection = (chainId)=>{
    return new web3_js_lib_index_browser_esm.Connection(constants/* NETWORK_ENDPOINTS */.qR[chainId]);
};
async function lookup(name, chainId) {
    const { domainKey  } = await getKey(name);
    const registry = await spl_name_service_dist.NameRegistryState.retrieve(connection(chainId), domainKey);
    return registry.owner.toBase58();
}
async function reverse(owner, chainId) {
    const accountKey = new web3_js_lib_index_browser_esm.PublicKey(owner);
    return (0,dist.performReverseLookup)(connection(chainId), accountKey);
}

;// CONCATENATED MODULE: ../plugins/Solana/src/apis/index.ts





/***/ }),

/***/ 79946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kI": () => (/* reexport */ createFungibleAsset),
  "mn": () => (/* reexport */ createFungibleToken),
  "Tg": () => (/* reexport */ formatAddress),
  "xG": () => (/* reexport */ formatCurrency)
});

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(89260);
;// CONCATENATED MODULE: ../plugins/Solana/src/helpers/formatter.ts

function formatAddress(address, size = 0) {
    if (size === 0 || size >= 22) return address;
    return `${address.substr(0, 2 + size)}...${address.substr(-size)}`;
}
function formatCurrency(value, sign = '') {
    const digits = (0,src/* toFixed */.FH)(value);
    return `${sign}${digits}`;
}

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
;// CONCATENATED MODULE: ../plugins/Solana/src/helpers/token.ts


function createFungibleToken(chainId, address, name, symbol, decimals) {
    return {
        id: address,
        chainId,
        type: entry_web3/* TokenType.Fungible */.iv.Fungible,
        address,
        name,
        symbol,
        decimals
    };
}
function createFungibleAsset(token, balance, logoURI, price) {
    return {
        id: token.address,
        chainId: token.chainId,
        balance: (0,src/* leftShift */.w5)(balance, token.decimals).toFixed(),
        token,
        logoURI,
        value: {
            [entry_web3/* CurrencyType.USD */.V2.USD]: (0,src/* multipliedBy */.$q)(price?.usd ?? 0, (0,src/* leftShift */.w5)(balance, token.decimals)).toFixed()
        },
        price
    };
}

;// CONCATENATED MODULE: ../plugins/Solana/src/helpers/index.ts




/***/ }),

/***/ 18829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WQ": () => (/* binding */ StorageDefaultValue),
/* harmony export */   "cF": () => (/* binding */ getStorage),
/* harmony export */   "tX": () => (/* binding */ setupStorage)
/* harmony export */ });
const StorageDefaultValue = {
    publicKey: null,
    chainId: null
};
let storage = null;
function setupStorage(_) {
    storage = _;
}
function getStorage() {
    return storage.storage;
}


/***/ }),

/***/ 23085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UP": () => (/* reexport */ connectWallet),
  "uH": () => (/* reexport */ watchAccount)
});

// UNUSED EXPORTS: clearConnection, storeConnection

// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(39230);
// EXTERNAL MODULE: ../plugins/Solana/src/storage/index.ts
var src_storage = __webpack_require__(18829);
// EXTERNAL MODULE: ../../node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js
var node_modules_buffer = __webpack_require__(15313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bs58@4.0.1/node_modules/bs58/index.js
var bs58 = __webpack_require__(91945);
var bs58_default = /*#__PURE__*/__webpack_require__.n(bs58);
;// CONCATENATED MODULE: ../plugins/Solana/src/utils.ts


function hexToBase58(hex) {
    const buffer = node_modules_buffer.Buffer.from(hex, 'hex');
    return bs58_default().encode(buffer);
}

;// CONCATENATED MODULE: ../plugins/Solana/src/wallet/connect.ts



async function clearConnection() {
    const storage = (0,src_storage/* getStorage */.cF)();
    await storage.publicKey.setValue(null);
    await storage.chainId.setValue(null);
}
async function storeConnection(pubKey, chainId) {
    const base58Key = typeof pubKey === 'string' ? pubKey : hexToBase58(pubKey._bn);
    const storage = (0,src_storage/* getStorage */.cF)();
    await storage.publicKey.setValue(base58Key);
    if (chainId) {
        await storage.chainId.setValue(chainId);
    }
}
async function connectWallet(init = false) {
    const rsp = await sdk/* bridgedSolanaProvider.connect */.i1.connect({
        onlyIfTrusted: init
    });
    if (rsp?.publicKey) {
        await storeConnection(rsp.publicKey);
    }
    const off = sdk/* bridgedSolanaProvider.on */.i1.on('disconnect', async ()=>{
        await clearConnection();
        off();
    });
    return rsp?.publicKey;
}
async function watchAccount() {
    sdk/* bridgedSolanaProvider.on */.i1.on('accountChanged', async (publicKey)=>{
        if (publicKey) {
            await storeConnection(publicKey);
        } else {
            await connectWallet();
        }
    });
}

;// CONCATENATED MODULE: ../plugins/Solana/src/wallet/index.ts



/***/ }),

/***/ 62745:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeDecode = void 0;
const encodeDecode = (layout) => {
    const decode = layout.decode.bind(layout);
    const encode = layout.encode.bind(layout);
    return { decode, encode };
};
exports.encodeDecode = encodeDecode;
//# sourceMappingURL=base.js.map

/***/ }),

/***/ 7763:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.u256be = exports.u256 = exports.u192be = exports.u192 = exports.u128be = exports.u128 = exports.u64be = exports.u64 = exports.bigIntBE = exports.bigInt = void 0;
const buffer_layout_1 = __webpack_require__(94313);
const bigint_buffer_1 = __webpack_require__(26447);
const base_1 = __webpack_require__(62745);
const bigInt = (length) => (property) => {
    const layout = (0, buffer_layout_1.blob)(length, property);
    const { encode, decode } = (0, base_1.encodeDecode)(layout);
    const bigIntLayout = layout;
    bigIntLayout.decode = (buffer, offset) => {
        const src = decode(buffer, offset);
        return (0, bigint_buffer_1.toBigIntLE)(Buffer.from(src));
    };
    bigIntLayout.encode = (bigInt, buffer, offset) => {
        const src = (0, bigint_buffer_1.toBufferLE)(bigInt, length);
        return encode(src, buffer, offset);
    };
    return bigIntLayout;
};
exports.bigInt = bigInt;
const bigIntBE = (length) => (property) => {
    const layout = (0, buffer_layout_1.blob)(length, property);
    const { encode, decode } = (0, base_1.encodeDecode)(layout);
    const bigIntLayout = layout;
    bigIntLayout.decode = (buffer, offset) => {
        const src = decode(buffer, offset);
        return (0, bigint_buffer_1.toBigIntBE)(Buffer.from(src));
    };
    bigIntLayout.encode = (bigInt, buffer, offset) => {
        const src = (0, bigint_buffer_1.toBufferBE)(bigInt, length);
        return encode(src, buffer, offset);
    };
    return bigIntLayout;
};
exports.bigIntBE = bigIntBE;
exports.u64 = (0, exports.bigInt)(8);
exports.u64be = (0, exports.bigIntBE)(8);
exports.u128 = (0, exports.bigInt)(16);
exports.u128be = (0, exports.bigIntBE)(16);
exports.u192 = (0, exports.bigInt)(24);
exports.u192be = (0, exports.bigIntBE)(24);
exports.u256 = (0, exports.bigInt)(32);
exports.u256be = (0, exports.bigIntBE)(32);
//# sourceMappingURL=bigint.js.map

/***/ }),

/***/ 47275:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decimal = exports.WAD = void 0;
const bignumber_js_1 = __importDefault(__webpack_require__(42263));
const base_1 = __webpack_require__(62745);
const bigint_1 = __webpack_require__(7763);
exports.WAD = new bignumber_js_1.default('1e+18');
const decimal = (property) => {
    const layout = (0, bigint_1.u128)(property);
    const { encode, decode } = (0, base_1.encodeDecode)(layout);
    const decimalLayout = layout;
    decimalLayout.decode = (buffer, offset) => {
        const src = decode(buffer, offset).toString();
        return new bignumber_js_1.default(src).div(exports.WAD);
    };
    decimalLayout.encode = (decimal, buffer, offset) => {
        const src = BigInt(decimal.times(exports.WAD).integerValue().toString());
        return encode(src, buffer, offset);
    };
    return decimalLayout;
};
exports.decimal = decimal;
//# sourceMappingURL=decimal.js.map

/***/ }),

/***/ 3717:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(62745), exports);
__exportStar(__webpack_require__(7763), exports);
__exportStar(__webpack_require__(47275), exports);
__exportStar(__webpack_require__(87325), exports);
__exportStar(__webpack_require__(33929), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 87325:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bool = void 0;
const buffer_layout_1 = __webpack_require__(94313);
const base_1 = __webpack_require__(62745);
const bool = (property) => {
    const layout = (0, buffer_layout_1.u8)(property);
    const { encode, decode } = (0, base_1.encodeDecode)(layout);
    const boolLayout = layout;
    boolLayout.decode = (buffer, offset) => {
        const src = decode(buffer, offset);
        return !!src;
    };
    boolLayout.encode = (bool, buffer, offset) => {
        const src = Number(bool);
        return encode(src, buffer, offset);
    };
    return boolLayout;
};
exports.bool = bool;
//# sourceMappingURL=native.js.map

/***/ }),

/***/ 33929:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.publicKey = void 0;
const buffer_layout_1 = __webpack_require__(94313);
const web3_js_1 = __webpack_require__(10948);
const base_1 = __webpack_require__(62745);
const publicKey = (property) => {
    const layout = (0, buffer_layout_1.blob)(32, property);
    const { encode, decode } = (0, base_1.encodeDecode)(layout);
    const publicKeyLayout = layout;
    publicKeyLayout.decode = (buffer, offset) => {
        const src = decode(buffer, offset);
        return new web3_js_1.PublicKey(src);
    };
    publicKeyLayout.encode = (publicKey, buffer, offset) => {
        const src = publicKey.toBuffer();
        return encode(src, buffer, offset);
    };
    return publicKeyLayout;
};
exports.publicKey = publicKey;
//# sourceMappingURL=web3.js.map

/***/ }),

/***/ 22215:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

}]);