"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7798],{

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

/***/ 55374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DR": () => (/* reexport */ getAllSplTokens),
  "KM": () => (/* reexport */ getFungibleAssets),
  "z6": () => (/* reexport */ getNonFungibleAssets),
  "BN": () => (/* reexport */ getSolAsset),
  "W3": () => (/* reexport */ getSplTokenBalance),
  "wD": () => (/* reexport */ getSplTokenList),
  "P5": () => (/* reexport */ lookup),
  "GY": () => (/* reexport */ reverse)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/solana/index.ts + 10 modules
var solana = __webpack_require__(7670);
;// CONCATENATED MODULE: ../plugins/Solana/src/helpers/token.ts


function createFungibleToken(chainId, address, name, symbol, decimals, logoURL) {
    return {
        id: address,
        chainId,
        type: src/* TokenType.Fungible */.iv.Fungible,
        schema: solana/* SchemaType.Fungible */.XQ.Fungible,
        address,
        name,
        symbol,
        decimals,
        logoURL
    };
}
function createFungibleAsset(token, balance, price) {
    return {
        ...token,
        balance,
        price,
        value: {
            [src/* CurrencyType.USD */.V2.USD]: (0,src/* multipliedBy */.$q)(price?.usd ?? 0, (0,src/* leftShift */.w5)(balance, token.decimals)).toFixed()
        }
    };
}

;// CONCATENATED MODULE: ../plugins/Solana/src/helpers/index.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/@solana+spl-token@0.1.8/node_modules/@solana/spl-token/lib/index.browser.esm.js
var index_browser_esm = __webpack_require__(23434);
// EXTERNAL MODULE: ../plugins/Solana/src/constants.ts
var constants = __webpack_require__(41040);
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
        mode: 'cors',
        body: JSON.stringify({
            ...options,
            jsonrpc: '2.0',
            id
        })
    });
    const result = await res.json();
    if (result.error) throw new Error(result.message || 'Fails in requesting RPC');
    return result;
}
async function fetchJSON(url) {
    const res = await globalThis.fetch(url);
    return res.json();
}

;// CONCATENATED MODULE: ../plugins/Solana/src/apis/getFungibleAssets.ts





const COINGECKO_URL_BASE = 'https://api.coingecko.com/api/v3';
const requestPath = `${COINGECKO_URL_BASE}/simple/price?ids=solana&vs_currencies=usd`;
async function getSolAsset(chainId, account) {
    const { SOL_ADDRESS =''  } = (0,solana/* getTokenConstants */.aV)(chainId);
    const priceData = await fetch(requestPath).then((r)=>r.json()
    );
    const price = priceData.solana[src/* CurrencyType.USD */.V2.USD];
    const data = await requestRPC(chainId, {
        method: 'getAccountInfo',
        params: [
            account
        ]
    });
    const balance = data.result?.value.lamports.toString() ?? '0';
    return createFungibleAsset(createFungibleToken(chainId, SOL_ADDRESS, 'Solana', 'SOL', 9, new URL(/* asset import */ __webpack_require__(96951), __webpack_require__.b).toString()), balance, {
        [src/* CurrencyType.USD */.V2.USD]: price.toString()
    });
}
const FAKE_SOL_ADDRESS = '11111111111111111111111111111111';
const fetchTokenList = (0,esm/* memoizePromise */.J3)(async (url)=>{
    const response = await fetch(url, {
        cache: 'force-cache'
    });
    const tokenList = await response.json();
    const SOL_ADDRESS = (0,solana/* getTokenConstants */.aV)(solana/* ChainId.Mainnet */.a_.Mainnet).SOL_ADDRESS;
    const tokens = [
        ...tokenList.official,
        ...tokenList.unOfficial
    ].map((token)=>{
        const address = token.mint === FAKE_SOL_ADDRESS ? SOL_ADDRESS : token.mint;
        return {
            id: address,
            chainId: solana/* ChainId.Mainnet */.a_.Mainnet,
            type: src/* TokenType.Fungible */.iv.Fungible,
            schema: solana/* SchemaType.Fungible */.XQ.Fungible,
            address,
            name: token.name,
            symbol: token.symbol,
            decimals: token.decimals,
            logoURL: token.icon
        };
    });
    return tokens;
}, (url)=>url
);
const RAYDIUM_TOKEN_LIST = 'https://api.raydium.io/v2/sdk/token/raydium.mainnet.json';
async function getAllSplTokens() {
    return fetchTokenList(RAYDIUM_TOKEN_LIST);
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
    const tokenList = await getAllSplTokens();
    const splTokens = [];
    data.result.forEach((x)=>{
        const info = x.account.data.parsed.info;
        const token = tokenList.find((y)=>y.address === info.mint
        );
        const isSafe = info.tokenAmount.decimals !== 0 && token !== undefined;
        if (!isSafe) return;
        const name = token.name || 'Unknown Token';
        const symbol = token.symbol || 'Unknown Token';
        const splToken = createFungibleAsset(createFungibleToken(chainId, info.mint, name, symbol, info.tokenAmount.decimals, token.logoURL), info.tokenAmount.amount);
        splTokens.push(splToken);
    });
    return splTokens;
}
async function getSplTokenBalance(chainId, account, mintAddress) {
    const splTokens = await getSplTokenList(chainId, account);
    const splToken = splTokens.find((x)=>(0,src/* isSameAddress */.Wr)(x.address, mintAddress)
    );
    return splToken?.balance ?? '0';
}
async function getFungibleAssets(address, options) {
    const allSettled = await Promise.allSettled([
        getSolAsset(options?.chainId || solana/* ChainId.Mainnet */.a_.Mainnet, address).then((x)=>[
                x
            ]
        ),
        getSplTokenList(options?.chainId || solana/* ChainId.Mainnet */.a_.Mainnet, address), 
    ]);
    const assets = allSettled.map((x)=>x.status === 'fulfilled' ? x.value : null
    ).flat().filter(Boolean);
    return (0,src/* createPageable */.LI)(assets, 0);
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
            chainId,
            type: src/* TokenType.NonFungible */.iv.NonFungible,
            schema: solana/* SchemaType.NonFungible */.XQ.NonFungible,
            address: '',
            contract: {
                chainId,
                name: metadata.data.data.name,
                symbol: metadata.data.data.symbol,
                address: pubkey,
                schema: solana/* SchemaType.NonFungible */.XQ.NonFungible
            },
            metadata: {
                chainId,
                name: metadata.data.data.name,
                symbol: metadata.data.data.symbol,
                description: externalMeta?.description,
                mediaURL: (externalMeta?.animation ?? externalMeta?.image) ?? '',
                mediaType: externalMeta?.properties?.category || 'Unknown'
            }
        };
    });
    const allSettled = await Promise.allSettled(promises);
    const assets = allSettled.map((x)=>x.status === 'fulfilled' ? x.value : null
    ).filter(Boolean);
    return assets;
}
async function getNonFungibleAssets(address, options) {
    const tokens = await getNftList(options?.chainId ?? solana/* ChainId.Mainnet */.a_.Mainnet, address);
    return (0,src/* createPageable */.LI)(tokens, 0);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@bonfida+spl-name-service@0.1.27/node_modules/@bonfida/spl-name-service/dist/index.js
var dist = __webpack_require__(96737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@solana+spl-name-service@0.1.3/node_modules/@solana/spl-name-service/dist/index.js
var spl_name_service_dist = __webpack_require__(94026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@solana+web3.js@1.39.1/node_modules/@solana/web3.js/lib/index.browser.esm.js
var web3_js_lib_index_browser_esm = __webpack_require__(59493);
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
async function lookup(chainId, name) {
    try {
        const { domainKey  } = await getKey(name.replace('.sol', ''));
        const registry = await spl_name_service_dist.NameRegistryState.retrieve(connection(chainId), domainKey);
        return registry.owner.toBase58();
    } catch  {
        return '';
    }
}
async function reverse(chainId, owner) {
    const accountKey = new web3_js_lib_index_browser_esm.PublicKey(owner);
    return (0,dist.performReverseLookup)(connection(chainId), accountKey);
}

;// CONCATENATED MODULE: ../plugins/Solana/src/apis/index.ts





/***/ }),

/***/ 22859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ SolanaRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41040);


if (false) {}
const SolanaMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const SolanaRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(5464), __webpack_require__.e(9278), __webpack_require__.e(7425), __webpack_require__.e(686), __webpack_require__.e(237), __webpack_require__.e(1432), __webpack_require__.e(9834), __webpack_require__.e(9831), __webpack_require__.e(7121), __webpack_require__.e(9223), __webpack_require__.e(4520), __webpack_require__.e(9315)]).then(__webpack_require__.bind(__webpack_require__, 36640))
, SolanaMessage.rpc);


/***/ }),

/***/ 96121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SharedContextSettings),
/* harmony export */   "o": () => (/* binding */ Web3StateSettings)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);

const Web3StateSettings = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createValueRefWithReady */ .a)(null);
const SharedContextSettings = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createValueRefWithReady */ .a)(null);


/***/ }),

/***/ 19877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ createWeb3State)
});

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/solana/index.ts + 10 modules
var solana = __webpack_require__(7670);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@servie+events@3.0.0/node_modules/@servie/events/dist/index.js
var dist = __webpack_require__(69260);
;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/providers/Base.ts

class BaseProvider {
    // No need to wait by default
    get ready() {
        return true;
    }
    // No need to wait by default
    get readyPromise() {
        return Promise.resolve();
    }
    switchChain(chainId) {
        throw new Error('Method not implemented.');
    }
    signMessage(dataToSign) {
        throw new Error('Method not implemented.');
    }
    verifyMessage(dataToVerify, signature) {
        throw new Error('Method not implemented.');
    }
    signTransaction(transaction) {
        throw new Error('Method not implemented.');
    }
    signTransactions(transactions) {
        return Promise.all(transactions.map((x)=>this.signTransaction(x)
        ));
    }
    createWeb3(options) {
        throw new Error('Method not implemented.');
    }
    createWeb3Provider(options) {
        throw new Error('Method not implemented.');
    }
    connect(chainId) {
        throw new Error('Method not implemented.');
    }
    disconnect() {
        throw new Error('Method not implemented.');
    }
    constructor(){
        this.web3 = null;
        this.provider = null;
        this.emitter = new dist/* Emitter */.Q5();
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(73742);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/providers/BaseInjected.ts


class BaseInjectedProvider extends BaseProvider {
    get ready() {
        return this.bridge.isReady;
    }
    get readyPromise() {
        if ((0,shared_base_src/* isExtensionSiteType */.Po)()) return Promise.reject(new Error('Not available on extension site.'));
        return this.bridge.untilAvailable().then(()=>undefined
        );
    }
    onAccountChanged(account) {
        this.emitter.emit('accounts', [
            account
        ]);
    }
    onChainChanged(chainId) {
        this.emitter.emit('chainId', chainId);
    }
    onDisconnect() {
        this.emitter.emit('disconnect', this.providerType);
    }
    async createWeb3Provider(options) {
        await this.readyPromise;
        if (!this.bridge) throw new Error('Failed to detect in-page provider.');
        return this.bridge;
    }
    async connect(chainId) {
        await this.readyPromise;
        const provider = await this.createWeb3Provider();
        const response = await provider.connect();
        return {
            chainId,
            account: response.publicKey
        };
    }
    async disconnect() {
        await this.readyPromise;
        const provider = await this.createWeb3Provider();
        await provider.disconnect();
    }
    constructor(providerType, bridge){
        super();
        this.providerType = providerType;
        this.bridge = bridge;
        bridge.on('accountChanged', this.onAccountChanged.bind(this));
        bridge.on('chainChanged', this.onChainChanged.bind(this));
        bridge.on('disconnect', this.onDisconnect.bind(this));
    }
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/providers/Coin98.ts




class Coin98Provider extends BaseInjectedProvider {
    async signMessage(dataToSign) {
        const { signature  } = await this.bridge.request({
            method: solana/* Coin98MethodType.SOL_SIGN */.aK.SOL_SIGN,
            params: [
                new TextEncoder().encode(dataToSign)
            ]
        });
        return signature;
    }
    async signTransaction(transaction) {
        const { signature , publicKey  } = await this.bridge.request({
            method: solana/* Coin98MethodType.SOL_SIGN */.aK.SOL_SIGN,
            params: [
                transaction
            ]
        });
        transaction.addSignature(publicKey, signature);
        return transaction;
    }
    async connect(chainId) {
        await this.readyPromise;
        const accounts = await this.bridge.request({
            method: solana/* Coin98MethodType.SOL_ACCOUNTS */.aK.SOL_ACCOUNTS,
            params: []
        });
        return {
            chainId,
            account: (0,head/* default */.Z)(accounts) ?? ''
        };
    }
    async disconnect() {
    // do nothing
    }
    constructor(){
        super(solana/* ProviderType.Coin98 */.lP.Coin98, sdk/* injectedCoin98SolanaProvider */.pb);
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/bs58@4.0.1/node_modules/bs58/index.js
var bs58 = __webpack_require__(91945);
var bs58_default = /*#__PURE__*/__webpack_require__.n(bs58);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@solana+web3.js@1.39.1/node_modules/@solana/web3.js/lib/index.browser.esm.js
var index_browser_esm = __webpack_require__(59493);
;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/providers/Phantom.ts





class PhantomProvider extends BaseInjectedProvider {
    async signMessage(dataToSign) {
        const { signature  } = await this.bridge.request({
            method: solana/* PhantomMethodType.SIGN_MESSAGE */.dK.SIGN_MESSAGE,
            params: {
                message: new TextEncoder().encode(dataToSign),
                display: 'hex'
            }
        });
        return signature;
    }
    async signTransaction(transaction) {
        const { publicKey , signature  } = await this.bridge.request({
            method: solana/* PhantomMethodType.SIGN_TRANSACTION */.dK.SIGN_TRANSACTION,
            params: {
                message: bs58_default().encode(transaction.serializeMessage())
            }
        });
        transaction.addSignature(new index_browser_esm.PublicKey(publicKey), bs58_default().decode(signature));
        return transaction;
    }
    async signTransactions(transactions) {
        return this.bridge.request({
            method: 'signAllTransactions',
            params: {
                message: transactions.map((transaction)=>{
                    return bs58_default().encode(transaction.serializeMessage());
                })
            }
        });
    }
    constructor(){
        sdk/* injectedPhantomProvider.untilAvailable */.ju.untilAvailable().then(()=>{
            sdk/* injectedPhantomProvider.connect */.ju.connect({
                onlyIfTrusted: true
            });
        });
        super(solana/* ProviderType.Phantom */.lP.Phantom, sdk/* injectedPhantomProvider */.ju);
    }
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/providers/SolflareProvider.ts



class SolflareProvider extends BaseInjectedProvider {
    async signMessage(dataToSign) {
        const { signature  } = await this.bridge.request({
            method: solana/* PhantomMethodType.SIGN_MESSAGE */.dK.SIGN_MESSAGE,
            params: [
                new TextEncoder().encode(dataToSign)
            ]
        });
        return signature;
    }
    async signTransaction(transaction) {
        const { signature , publicKey  } = await this.bridge.request({
            method: solana/* PhantomMethodType.SIGN_TRANSACTION */.dK.SIGN_TRANSACTION,
            params: [
                transaction
            ]
        });
        transaction.addSignature(publicKey, signature);
        return transaction;
    }
    constructor(){
        super(solana/* ProviderType.Solflare */.lP.Solflare, sdk/* injectedSolflareProvider */.yR);
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/eventemitter3@4.0.7/node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(21883);
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@project-serum+sol-wallet-adapter@0.2.6_@solana+web3.js@1.39.1/node_modules/@project-serum/sol-wallet-adapter/dist/esm/index.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Wallet extends (eventemitter3_default()) {
    constructor(provider, _network) {
        super();
        this._network = _network;
        this._publicKey = null;
        this._popup = null;
        this._handlerAdded = false;
        this._nextRequestId = 1;
        this._autoApprove = false;
        this._responsePromises = new Map();
        this.handleMessage = (e) => {
            var _a;
            if ((this._injectedProvider && e.source === window) ||
                (e.origin === ((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.origin) && e.source === this._popup)) {
                if (e.data.method === 'connected') {
                    const newPublicKey = new index_browser_esm.PublicKey(e.data.params.publicKey);
                    if (!this._publicKey || !this._publicKey.equals(newPublicKey)) {
                        if (this._publicKey && !this._publicKey.equals(newPublicKey)) {
                            this.handleDisconnect();
                        }
                        this._publicKey = newPublicKey;
                        this._autoApprove = !!e.data.params.autoApprove;
                        this.emit('connect', this._publicKey);
                    }
                }
                else if (e.data.method === 'disconnected') {
                    this.handleDisconnect();
                }
                else if (e.data.result || e.data.error) {
                    const promises = this._responsePromises.get(e.data.id);
                    if (promises) {
                        const [resolve, reject] = promises;
                        if (e.data.result) {
                            resolve(e.data.result);
                        }
                        else {
                            reject(new Error(e.data.error));
                        }
                    }
                }
            }
        };
        this._beforeUnload = () => {
            void this.disconnect();
        };
        if (isInjectedProvider(provider)) {
            this._injectedProvider = provider;
        }
        else if (isString(provider)) {
            this._providerUrl = new URL(provider);
            this._providerUrl.hash = new URLSearchParams({
                origin: window.location.origin,
                network: this._network,
            }).toString();
        }
        else {
            throw new Error('provider parameter must be an injected provider or a URL string.');
        }
    }
    handleConnect() {
        var _a;
        if (!this._handlerAdded) {
            this._handlerAdded = true;
            window.addEventListener('message', this.handleMessage);
            window.addEventListener('beforeunload', this._beforeUnload);
        }
        if (this._injectedProvider) {
            return new Promise((resolve) => {
                void this.sendRequest('connect', {});
                resolve();
            });
        }
        else {
            window.name = 'parent';
            this._popup = window.open((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.toString(), '_blank', 'location,resizable,width=460,height=675');
            return new Promise((resolve) => {
                this.once('connect', resolve);
            });
        }
    }
    handleDisconnect() {
        if (this._handlerAdded) {
            this._handlerAdded = false;
            window.removeEventListener('message', this.handleMessage);
            window.removeEventListener('beforeunload', this._beforeUnload);
        }
        if (this._publicKey) {
            this._publicKey = null;
            this.emit('disconnect');
        }
        this._responsePromises.forEach(([, reject], id) => {
            this._responsePromises.delete(id);
            reject(new Error('Wallet disconnected'));
        });
    }
    sendRequest(method, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (method !== 'connect' && !this.connected) {
                throw new Error('Wallet not connected');
            }
            const requestId = this._nextRequestId;
            ++this._nextRequestId;
            return new Promise((resolve, reject) => {
                var _a, _b, _c, _d;
                this._responsePromises.set(requestId, [resolve, reject]);
                if (this._injectedProvider) {
                    this._injectedProvider.postMessage({
                        jsonrpc: '2.0',
                        id: requestId,
                        method,
                        params: Object.assign({ network: this._network }, params),
                    });
                }
                else {
                    (_a = this._popup) === null || _a === void 0 ? void 0 : _a.postMessage({
                        jsonrpc: '2.0',
                        id: requestId,
                        method,
                        params,
                    }, (_c = (_b = this._providerUrl) === null || _b === void 0 ? void 0 : _b.origin) !== null && _c !== void 0 ? _c : '');
                    if (!this.autoApprove) {
                        (_d = this._popup) === null || _d === void 0 ? void 0 : _d.focus();
                    }
                }
            });
        });
    }
    get publicKey() {
        return this._publicKey;
    }
    get connected() {
        return this._publicKey !== null;
    }
    get autoApprove() {
        return this._autoApprove;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._popup) {
                this._popup.close();
            }
            yield this.handleConnect();
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._injectedProvider) {
                yield this.sendRequest('disconnect', {});
            }
            if (this._popup) {
                this._popup.close();
            }
            this.handleDisconnect();
        });
    }
    sign(data, display) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(data instanceof Uint8Array)) {
                throw new Error('Data must be an instance of Uint8Array');
            }
            const response = (yield this.sendRequest('sign', {
                data,
                display,
            }));
            const signature = bs58_default().decode(response.signature);
            const publicKey = new index_browser_esm.PublicKey(response.publicKey);
            return {
                signature,
                publicKey,
            };
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = (yield this.sendRequest('signTransaction', {
                message: bs58_default().encode(transaction.serializeMessage()),
            }));
            const signature = bs58_default().decode(response.signature);
            const publicKey = new index_browser_esm.PublicKey(response.publicKey);
            transaction.addSignature(publicKey, signature);
            return transaction;
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = (yield this.sendRequest('signAllTransactions', {
                messages: transactions.map((tx) => bs58_default().encode(tx.serializeMessage())),
            }));
            const signatures = response.signatures.map((s) => bs58_default().decode(s));
            const publicKey = new index_browser_esm.PublicKey(response.publicKey);
            transactions = transactions.map((tx, idx) => {
                tx.addSignature(publicKey, signatures[idx]);
                return tx;
            });
            return transactions;
        });
    }
    diffieHellman(publicKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(publicKey instanceof Uint8Array)) {
                throw new Error('Data must be an instance of Uint8Array');
            }
            const response = (yield this.sendRequest('diffieHellman', {
                publicKey,
            }));
            return response;
        });
    }
}
function isString(a) {
    return typeof a === 'string';
}
function isInjectedProvider(a) {
    return (isObject(a) && 'postMessage' in a && typeof a.postMessage === 'function');
}
function isObject(a) {
    return typeof a === 'object' && a !== null;
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/providers/Sollet.ts




class SolletProvider extends BaseProvider {
    get solanaProvider() {
        if (!this.wallet) throw new Error('No connection.');
        return this.wallet;
    }
    set solanaProvider(newWallet) {
        this.wallet = newWallet;
    }
    async signMessage(dataToSign) {
        const data = new TextEncoder().encode(dataToSign);
        const { signature  } = await this.solanaProvider.sign(data, 'uft8');
        return bs58_default().encode(signature);
    }
    signTransaction(transaction) {
        return this.solanaProvider.signTransaction(transaction);
    }
    signTransactions(transactions) {
        return this.solanaProvider.signAllTransactions(transactions);
    }
    async connect(chainId) {
        this.solanaProvider = new Wallet(this.providerURL, '');
        await this.solanaProvider.connect();
        return {
            chainId,
            account: this.solanaProvider.publicKey?.toBase58() ?? ''
        };
    }
    async disconnect() {
        this.solanaProvider = new Wallet(this.providerURL, '');
        await this.solanaProvider.disconnect();
        this.emitter.emit('disconnect', solana/* ProviderType.Sollet */.lP.Sollet);
        // clean the internal wallet
        this.wallet = null;
    }
    constructor(providerURL = 'https://www.sollet.io'){
        super();
        this.providerURL = providerURL;
        this.wallet = null;
    }
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/provider.ts






const Providers = {
    [solana/* ProviderType.None */.lP.None]: new BaseProvider(),
    [solana/* ProviderType.Phantom */.lP.Phantom]: new PhantomProvider(),
    [solana/* ProviderType.Solflare */.lP.Solflare]: new SolflareProvider(),
    [solana/* ProviderType.Sollet */.lP.Sollet]: new SolletProvider(),
    [solana/* ProviderType.Coin98 */.lP.Coin98]: new Coin98Provider()
};

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Provider.ts




class Provider extends entry_web3/* ProviderState */.Aw {
    constructor(context){
        super(context, Providers, {
            isSameAddress: src/* isSameAddress */.Wr,
            isValidChainId: solana/* isValidChainId */.JW,
            isValidAddress: solana/* isValidAddress */.At,
            getDefaultChainId: ()=>solana/* ChainId.Mainnet */.a_.Mainnet
            ,
            getDefaultProviderType: ()=>solana/* ProviderType.None */.lP.None
            ,
            getDefaultNetworkType: ()=>solana/* NetworkType.Solana */.td.Solana
            ,
            getNetworkTypeFromChainId: (chainId)=>solana/* chainResolver.chainNetworkType */.VU.chainNetworkType(chainId) ?? solana/* NetworkType.Solana */.td.Solana
        });
        this.context = context;
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
;// CONCATENATED MODULE: ../plugins/Solana/src/state/AddressBook.ts




class AddressBook extends entry_web3/* AddressBookState */.Cp {
    constructor(context, subscriptions){
        super(context, (0,esm/* getEnumAsArray */.Yl)(solana/* ChainId */.a_).map((x)=>x.value
        ), subscriptions, {
            isValidAddress: solana/* isValidAddress */.At,
            isSameAddress: src/* isSameAddress */.Wr,
            formatAddress: solana/* formatAddress */.Tg
        });
    }
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ../plugins/Solana/src/messages.ts
var messages = __webpack_require__(22859);
;// CONCATENATED MODULE: ../plugins/Solana/src/state/Hub/hub.ts




class Hub {
    getOptions(initial, overrides) {
        return {
            chainId: this.chainId,
            account: this.account,
            sourceType: this.sourceType,
            currencyType: this.currencyType,
            ...initial,
            ...overrides
        };
    }
    async getFungibleTokensFromTokenList(chainId, initial) {
        return messages/* SolanaRPC.getAllSplTokens */.y.getAllSplTokens();
    }
    async getNonFungibleTokensFromTokenList(chainId, initial) {
        throw new Error('Method not implemented.');
    }
    getGasOptions(chainId, initial) {
        throw new Error('Method not implemented.');
    }
    getFungibleAsset(address, initial) {
        throw new Error('Method not implemented.');
    }
    async getNonFungibleAsset(address, tokenId, initial) {
        const options = this.getOptions(initial);
        return web3_providers_src/* MagicEden.getAsset */.IC.getAsset(address, tokenId, options);
    }
    async getFungibleAssets(account, initial) {
        const options = this.getOptions(initial, {
            account
        });
        return messages/* SolanaRPC.getFungibleAssets */.y.getFungibleAssets(options.account, options);
    }
    getNonFungibleTokens(account, initial) {
        const options = this.getOptions(initial, {
            account
        });
        try {
            return web3_providers_src/* MagicEden.getTokens */.IC.getTokens(options.account, options);
        } catch  {
            return messages/* SolanaRPC.getNonFungibleAssets */.y.getNonFungibleAssets(options.account, options);
        }
    }
    getNonFungibleCollections(account, initial) {
        const options = this.getOptions(initial, {
            account
        });
        return web3_providers_src/* MagicEden.getCollections */.IC.getCollections(options.account, options);
    }
    getFungibleTokenPrice(chainId, address, initial) {
        const options = this.getOptions(initial);
        const { PLATFORM_ID ='' , COIN_ID =''  } = (0,solana/* getCoinGeckoConstants */.V6)(options.chainId);
        const { SOL_ADDRESS  } = (0,solana/* getTokenConstants */.aV)(options.chainId);
        if ((0,src/* isSameAddress */.Wr)(address, SOL_ADDRESS)) {
            return web3_providers_src/* CoinGecko.getTokenPriceByCoinId */.oD.getTokenPriceByCoinId(COIN_ID, options.currencyType);
        }
        return web3_providers_src/* CoinGecko.getTokenPrice */.oD.getTokenPrice(PLATFORM_ID, address, options.currencyType);
    }
    getNonFungibleTokenPrice(chainId, address, tokenId, initial) {
        throw new Error('Method not implemented.');
    }
    async getFungibleTokenIconURLs(chainId, address, initial) {
        return [];
    }
    getNonFungibleTokenIconURLs(chainId, address, tokenId, initial) {
        throw new Error('Method not implemented.');
    }
    getTransactions(chainId, account, initial) {
        throw new Error('Method not implemented.');
    }
    constructor(chainId, account, sourceType, currencyType){
        this.chainId = chainId;
        this.account = account;
        this.sourceType = sourceType;
        this.currencyType = currencyType;
    }
}
function createHub(chainId = solana/* ChainId.Mainnet */.a_.Mainnet, account = '', sourceType, currencyType) {
    return new Hub(chainId, account, sourceType, currencyType);
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Hub.ts


class Hub_Hub extends entry_web3/* HubState */.xH {
    constructor(context, subscription){
        super(createHub, subscription);
        this.context = context;
    }
}

// EXTERNAL MODULE: ../plugins/Solana/src/constants.ts
var constants = __webpack_require__(41040);
// EXTERNAL MODULE: ../plugins/Solana/src/settings/index.ts
var settings = __webpack_require__(96121);
;// CONCATENATED MODULE: ../plugins/Solana/src/utils/index.ts


function isNativeTokenAddress(address) {
    return address === constants/* SOL_ADDRESS */.UX;
}
function getNativeTokenAddress(chainId) {
    return (0,solana/* getTokenConstants */.aV)(chainId).SOL_ADDRESS ?? constants/* SOL_ADDRESS */.UX;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@solana+spl-token@0.1.8/node_modules/@solana/spl-token/lib/index.browser.esm.js
var lib_index_browser_esm = __webpack_require__(23434);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@solana+buffer-layout@4.0.0/node_modules/@solana/buffer-layout/lib/Layout.js
var Layout = __webpack_require__(94313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bn.js@4.12.0/node_modules/bn.js/lib/bn.js
var bn = __webpack_require__(28891);
var bn_default = /*#__PURE__*/__webpack_require__.n(bn);
;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/spl-token/createTransferInstructions.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];




var TokenInstruction;
(function(TokenInstruction) {
    TokenInstruction[TokenInstruction["InitializeMint"] = 0] = "InitializeMint";
    TokenInstruction[TokenInstruction["InitializeAccount"] = 1] = "InitializeAccount";
    TokenInstruction[TokenInstruction["InitializeMultisig"] = 2] = "InitializeMultisig";
    TokenInstruction[TokenInstruction["Transfer"] = 3] = "Transfer";
    TokenInstruction[TokenInstruction["Approve"] = 4] = "Approve";
    TokenInstruction[TokenInstruction["Revoke"] = 5] = "Revoke";
    TokenInstruction[TokenInstruction["SetAuthority"] = 6] = "SetAuthority";
    TokenInstruction[TokenInstruction["MintTo"] = 7] = "MintTo";
    TokenInstruction[TokenInstruction["Burn"] = 8] = "Burn";
    TokenInstruction[TokenInstruction["CloseAccount"] = 9] = "CloseAccount";
    TokenInstruction[TokenInstruction["FreezeAccount"] = 10] = "FreezeAccount";
    TokenInstruction[TokenInstruction["ThawAccount"] = 11] = "ThawAccount";
    TokenInstruction[TokenInstruction["TransferChecked"] = 12] = "TransferChecked";
    TokenInstruction[TokenInstruction["ApproveChecked"] = 13] = "ApproveChecked";
    TokenInstruction[TokenInstruction["MintToChecked"] = 14] = "MintToChecked";
    TokenInstruction[TokenInstruction["BurnChecked"] = 15] = "BurnChecked";
    TokenInstruction[TokenInstruction["InitializeAccount2"] = 16] = "InitializeAccount2";
    TokenInstruction[TokenInstruction["SyncNative"] = 17] = "SyncNative";
    TokenInstruction[TokenInstruction["InitializeAccount3"] = 18] = "InitializeAccount3";
    TokenInstruction[TokenInstruction["InitializeMultisig2"] = 19] = "InitializeMultisig2";
    TokenInstruction[TokenInstruction["InitializeMint2"] = 20] = "InitializeMint2";
})(TokenInstruction || (TokenInstruction = {}));
/**
 * Construct a Transfer instruction
 *
 * @param source       Source account
 * @param destination  Destination account
 * @param owner        Owner of the source account
 * @param amount       Number of tokens to transfer
 * @param multiSigners Signing accounts if `owner` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */ function createTransferInstruction(source, destination, owner, amount, multiSigners = [], programId = lib_index_browser_esm.TOKEN_PROGRAM_ID) {
    const dataLayout = Layout.struct([
        Layout.u8('instruction'),
        Layout.blob(8, 'amount'), 
    ]);
    const keys = addSigners([
        {
            pubkey: source,
            isSigner: false,
            isWritable: true
        },
        {
            pubkey: destination,
            isSigner: false,
            isWritable: true
        }, 
    ], owner, multiSigners);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
        instruction: TokenInstruction.Transfer,
        amount: new TokenAmount(amount).toBuffer()
    }, data);
    return new index_browser_esm.TransactionInstruction({
        keys,
        programId,
        data
    });
}
function addSigners(keys, ownerOrAuthority, multiSigners) {
    if (multiSigners.length) {
        keys.push({
            pubkey: ownerOrAuthority,
            isSigner: false,
            isWritable: false
        });
        for (const signer of multiSigners){
            keys.push({
                pubkey: signer.publicKey,
                isSigner: true,
                isWritable: false
            });
        }
    } else {
        keys.push({
            pubkey: ownerOrAuthority,
            isSigner: true,
            isWritable: false
        });
    }
    return keys;
}
class TokenAmount extends (bn_default()) {
    /**
     * Convert to Buffer representation
     */ toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 8) {
            return b;
        }
        if (b.length >= 8) {
            throw new Error('TokenAmount too large');
        }
        const zeroPad = Buffer.alloc(8);
        b.copy(zeroPad);
        return zeroPad;
    }
    /**
     * Construct a TokenAmount from Buffer representation
     */ static fromBuffer(buffer) {
        if (buffer.length !== 8) {
            throw new Error(`Invalid buffer length: ${buffer.length}`);
        }
        return new (bn_default())([
            ...buffer
        ].reverse().map((i)=>`00${i.toString(16)}`.slice(-2)
        ).join(''), 16);
    }
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/spl-token/createAssociatedTokenAccountInstruction.ts
/* provided dependency */ var createAssociatedTokenAccountInstruction_Buffer = __webpack_require__(15313)["Buffer"];


function createAssociatedTokenAccountInstruction(payer, associatedToken, owner, mint, programId = lib_index_browser_esm.TOKEN_PROGRAM_ID, associatedTokenProgramId = lib_index_browser_esm.ASSOCIATED_TOKEN_PROGRAM_ID) {
    const keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true
        },
        {
            pubkey: associatedToken,
            isSigner: false,
            isWritable: true
        },
        {
            pubkey: owner,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: mint,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: index_browser_esm.SystemProgram.programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: index_browser_esm.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
        }, 
    ];
    return new index_browser_esm.TransactionInstruction({
        keys,
        programId: associatedTokenProgramId,
        data: createAssociatedTokenAccountInstruction_Buffer.alloc(0)
    });
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/spl-token/getAccountInfo.ts
/* provided dependency */ var getAccountInfo_Buffer = __webpack_require__(15313)["Buffer"];

var AccountState;
(function(AccountState) {
    AccountState[AccountState["Uninitialized"] = 0] = "Uninitialized";
    AccountState[AccountState["Initialized"] = 1] = "Initialized";
    AccountState[AccountState["Frozen"] = 2] = "Frozen";
})(AccountState || (AccountState = {}));
async function getAccountInfo(connection, address, commitment, programId = lib_index_browser_esm.TOKEN_PROGRAM_ID) {
    const info = await connection.getAccountInfo(address, commitment);
    if (!info) throw new Error('TokenAccountNotFoundError');
    if (!info.owner.equals(programId)) throw new Error('TokenInvalidAccountOwnerError');
    if (info.data.length !== lib_index_browser_esm.AccountLayout.span) throw new Error('TokenInvalidAccountSizeError');
    const rawAccount = lib_index_browser_esm.AccountLayout.decode(getAccountInfo_Buffer.from(info.data));
    return {
        address,
        mint: rawAccount.mint,
        owner: rawAccount.owner,
        amount: rawAccount.amount,
        delegate: rawAccount.delegateOption ? rawAccount.delegate : null,
        delegatedAmount: rawAccount.delegatedAmount,
        isInitialized: rawAccount.state !== AccountState.Uninitialized,
        isFrozen: rawAccount.state === AccountState.Frozen,
        isNative: !!rawAccount.isNativeOption,
        rentExemptReserve: rawAccount.isNativeOption ? rawAccount.isNative : null,
        closeAuthority: rawAccount.closeAuthorityOption ? rawAccount.closeAuthority : null
    };
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/spl-token/getAssociatedTokenAddress.ts


async function getAssociatedTokenAddress(mint, owner, allowOwnerOffCurve = false, programId = lib_index_browser_esm.TOKEN_PROGRAM_ID, associatedTokenProgramId = lib_index_browser_esm.ASSOCIATED_TOKEN_PROGRAM_ID) {
    if (!allowOwnerOffCurve && !index_browser_esm.PublicKey.isOnCurve(owner.toBuffer())) throw new Error('TokenOwnerOffCurveError');
    const [address] = await index_browser_esm.PublicKey.findProgramAddress([
        owner.toBuffer(),
        programId.toBuffer(),
        mint.toBuffer()
    ], associatedTokenProgramId);
    return address;
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/spl-token/getOrCreateAssociatedTokenAccount.ts





async function getOrCreateAssociatedTokenAccount(connection, payer, mint, owner, signTransaction, allowOwnerOffCurve = false, commitment = 'single', programId = lib_index_browser_esm.TOKEN_PROGRAM_ID, associatedTokenProgramId = lib_index_browser_esm.ASSOCIATED_TOKEN_PROGRAM_ID) {
    const associatedToken = await getAssociatedTokenAddress(mint, owner, allowOwnerOffCurve, programId, associatedTokenProgramId);
    // This is the optimal logic, considering TX fee, client-side computation, RPC roundtrips and guaranteed idempotent.
    // Sadly we can't do this atomically.
    let account;
    try {
        account = await getAccountInfo(connection, associatedToken, commitment, programId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error) {
        // TokenAccountNotFoundError can be possible if the associated address has already received some lamports,
        // becoming a system account. Assuming program derived addressing is safe, this is the only case for the
        // TokenInvalidAccountOwnerError in this code path.
        if (error.message === 'TokenAccountNotFoundError' || error.message === 'TokenInvalidAccountOwnerError') {
            // As this isn't atomic, it's possible others can create associated accounts meanwhile.
            try {
                const transaction = new index_browser_esm.Transaction().add(createAssociatedTokenAccountInstruction(payer, associatedToken, owner, mint, programId, associatedTokenProgramId));
                const blockHash = await connection.getRecentBlockhash();
                transaction.feePayer = payer;
                transaction.recentBlockhash = blockHash.blockhash;
                const signed = await signTransaction(transaction);
                const signature = await connection.sendRawTransaction(signed.serialize());
                await connection.confirmTransaction(signature);
            } catch (error) {
            // Ignore all errors; for now there is no API-compatible way to selectively ignore the expected
            // instruction error if the associated account exists already.
            }
            // Now this should always succeed
            account = await getAccountInfo(connection, associatedToken, commitment, programId);
        } else {
            throw error;
        }
    }
    if (!account.mint.equals(mint.toBuffer())) throw new Error('TokenInvalidMintError');
    if (!account.owner.equals(owner.toBuffer())) throw new Error('TokenInvalidOwnerError');
    return account;
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/spl-token/index.ts



;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection/connection.ts










class Connection {
    getOptions(initial, overrides) {
        return {
            account: this.account,
            chainId: this.chainId,
            providerType: this.providerType,
            ...initial,
            ...overrides
        };
    }
    _getWeb3Provider(initial) {
        const options = this.getOptions(initial);
        return Providers[options.providerType];
    }
    async _attachRecentBlockHash(transaction, initial) {
        const options = this.getOptions(initial);
        const connection = this.connections.get(options.chainId) ?? new index_browser_esm.Connection(constants/* NETWORK_ENDPOINTS */.qR[options.chainId]);
        const blockHash = await connection.getRecentBlockhash();
        transaction.recentBlockhash = blockHash.blockhash;
        return transaction;
    }
    async getWeb3(initial) {
        const options = this.getOptions(initial);
        return this._getWeb3Provider(options).createWeb3(options);
    }
    getWeb3Provider(initial) {
        const options = this.getOptions(initial);
        return this._getWeb3Provider(options).createWeb3Provider(options);
    }
    async connect(initial) {
        const options = this.getOptions(initial);
        return {
            account: '',
            chainId: solana/* ChainId.Mainnet */.a_.Mainnet,
            ...await settings/* Web3StateSettings.value.Provider */.o.value.Provider?.connect(options.chainId, options.providerType)
        };
    }
    async disconnect(initial) {
        const options = this.getOptions(initial);
        await settings/* Web3StateSettings.value.Provider */.o.value.Provider?.disconnect(options.providerType);
    }
    async transferSol(recipient, amount, initial) {
        const options = this.getOptions(initial);
        if (!options.account) throw new Error('No payer provides.');
        const payerPubkey = new index_browser_esm.PublicKey(options.account);
        const recipientPubkey = new index_browser_esm.PublicKey(recipient);
        const transaction = new index_browser_esm.Transaction().add(index_browser_esm.SystemProgram.transfer({
            fromPubkey: payerPubkey,
            toPubkey: recipientPubkey,
            lamports: Number.parseInt(amount, 10)
        }));
        transaction.feePayer = payerPubkey;
        await this._attachRecentBlockHash(transaction);
        return this.sendTransaction(transaction);
    }
    async transferSplToken(address, recipient, amount, initial) {
        const options = this.getOptions(initial);
        if (!options.account) throw new Error('No payer provides.');
        const connection = this.connections.get(options.chainId) ?? new index_browser_esm.Connection(constants/* NETWORK_ENDPOINTS */.qR[options.chainId]);
        const payerPubkey = new index_browser_esm.PublicKey(options.account);
        const recipientPubkey = new index_browser_esm.PublicKey(recipient);
        const mintPubkey = new index_browser_esm.PublicKey(address);
        const signTransaction = this.signTransaction.bind(this);
        const formatTokenAccount = await getOrCreateAssociatedTokenAccount(connection, payerPubkey, mintPubkey, payerPubkey, signTransaction);
        const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, payerPubkey, mintPubkey, recipientPubkey, signTransaction);
        const transaction = new index_browser_esm.Transaction().add(createTransferInstruction(formatTokenAccount.address, toTokenAccount.address, payerPubkey, Number.parseInt(amount, 10)));
        const blockHash = await connection.getRecentBlockhash();
        transaction.feePayer = payerPubkey;
        transaction.recentBlockhash = blockHash.blockhash;
        const signature = await this.sendTransaction(transaction);
        return signature;
    }
    async transferFungibleToken(address, recipient, amount, memo, initial) {
        const options = this.getOptions(initial);
        if (isNativeTokenAddress(address)) {
            return this.transferSol(recipient, amount, options);
        }
        return this.transferSplToken(address, recipient, amount, options);
    }
    transferNonFungibleToken(address, recipient, mintAddress, amount, schema, initial) {
        const options = this.getOptions(initial);
        return this.transferSplToken(mintAddress, recipient, amount, options);
    }
    getGasPrice(initial) {
        throw new Error('Method not implemented.');
    }
    getTokenSchema(address, initial) {
        throw new Error('Method not implemented.');
    }
    getNonFungibleTokenContract(address, schemaType, initial) {
        throw new Error('Method not implemented.');
    }
    getNonFungibleTokenCollection(address, schemaType, initial) {
        throw new Error('Method not implemented.');
    }
    async switchChain(chainId, initial) {
        const options = this.getOptions(initial);
        await Providers[options.providerType].switchChain(chainId);
    }
    getNativeToken(initial) {
        const options = this.getOptions(initial);
        const token = (0,solana/* createNativeToken */.$c)(options.chainId);
        return Promise.resolve(token);
    }
    async getNativeTokenBalance(initial) {
        const options = this.getOptions(initial);
        if (!options.account) return '0';
        const connection = this.getWeb3Connection(options);
        const balance = await connection.getBalance(new index_browser_esm.PublicKey(options.account));
        return balance.toString();
    }
    async getFungibleTokenBalance(address, initial) {
        const options = this.getOptions(initial);
        if (!options.account) return '0';
        if (isNativeTokenAddress(address)) {
            return this.getNativeTokenBalance(options);
        }
        return messages/* SolanaRPC.getSplTokenBalance */.y.getSplTokenBalance(options.chainId, options.account, address);
    }
    getNonFungibleTokenBalance(address, tokenId, schemaType, initial) {
        throw new Error('Method not implemented.');
    }
    async getFungibleTokensBalance(listOfAddress, initial) {
        const options = this.getOptions(initial);
        if (!options.account) return {};
        const splTokens = await messages/* SolanaRPC.getSplTokenList */.y.getSplTokenList(options.chainId, options.account);
        const records = splTokens.reduce((map, asset)=>({
                ...map,
                [asset.address]: asset.balance
            })
        , {});
        if (listOfAddress.includes(constants/* SOL_ADDRESS */.UX)) {
            records[constants/* SOL_ADDRESS */.UX] = await this.getNativeTokenBalance(options);
        }
        return records;
    }
    getNonFungibleTokensBalance(listOfAddress, initial) {
        throw new Error('Method not implemented.');
    }
    getCode(address, initial) {
        throw new Error('Method not implemented.');
    }
    getWeb3Connection(initial) {
        const options = this.getOptions(initial);
        const connection = this.connections.get(options.chainId) ?? new index_browser_esm.Connection(constants/* NETWORK_ENDPOINTS */.qR[options.chainId]);
        this.connections.set(options.chainId, connection);
        return connection;
    }
    getAccount(initial) {
        const options = this.getOptions(initial);
        return Promise.resolve(options.account);
    }
    getAccountInfo(account, initial) {
        const options = this.getOptions(initial, {
            account
        });
        return this.getWeb3Connection(options).getAccountInfo((0,solana/* decodeAddress */.mV)(account));
    }
    getChainId(initial) {
        const options = this.getOptions(initial);
        return Promise.resolve(options.chainId);
    }
    async getBlock(no, initial) {
        const options = this.getOptions(initial);
        return this.getWeb3Connection(options).getBlock(no);
    }
    async getBlockNumber(initial) {
        const options = this.getOptions(initial);
        return this.getWeb3Connection(options).getSlot();
    }
    async getBlockTimestamp(initial) {
        const options = this.getOptions(initial);
        const slot = await this.getBlockNumber(options);
        const response = await this.getWeb3Connection(options).getBlockTime(slot);
        return response ?? 0;
    }
    async getBalance(account, initial) {
        const options = this.getOptions(initial);
        const balance = await this.getWeb3Connection(options).getBalance((0,solana/* decodeAddress */.mV)(account));
        return balance.toFixed();
    }
    getTransaction(id, initial) {
        const options = this.getOptions(initial);
        return this.getWeb3Connection(options).getTransaction(id);
    }
    async getTransactionReceipt(id, initial) {
        return null;
    }
    async getTransactionStatus(id, initial) {
        const options = this.getOptions(initial);
        const response = await this.getWeb3Connection(options).getSignatureStatus(id);
        if (response.value?.err) return src/* TransactionStatusType.FAILED */.g8.FAILED;
        if (response.value?.confirmations && response.value.confirmations > 0) return src/* TransactionStatusType.SUCCEED */.g8.SUCCEED;
        return src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND;
    }
    async signMessage(dataToSign, signType, initial) {
        const options = this.getOptions(initial);
        return this._getWeb3Provider(options).signMessage(dataToSign);
    }
    async verifyMessage(dataToVerify, signature, signType, initial) {
        const options = this.getOptions(initial);
        return this._getWeb3Provider(options).verifyMessage(dataToVerify, signature);
    }
    async signTransaction(transaction, initial) {
        const options = this.getOptions(initial);
        return this._getWeb3Provider(options).signTransaction(transaction);
    }
    signTransactions(transactions, initial) {
        const options = this.getOptions(initial);
        return Promise.all(transactions.map((x)=>this.signTransaction(x, options)
        ));
    }
    callTransaction(transaction, initial) {
        throw new Error('Method not implemented.');
    }
    async sendTransaction(transaction, initial) {
        const options = this.getOptions(initial);
        const signedTransaction = await this.signTransaction(transaction);
        return (0,index_browser_esm.sendAndConfirmRawTransaction)(this.getWeb3Connection(options), signedTransaction.serialize());
    }
    sendSignedTransaction(signature, initial) {
        const options = this.getOptions(initial);
        return (0,index_browser_esm.sendAndConfirmRawTransaction)(this.getWeb3Connection(options), signature.serialize());
    }
    async getTransactionNonce(account, initial) {
        const options = this.getOptions(initial, {
            account
        });
        const response = await this.getWeb3Connection(options).getNonce((0,solana/* decodeAddress */.mV)(account));
        return response?.nonce ? Number.parseInt(response.nonce, 10) : 0;
    }
    async getFungibleToken(address, initial) {
        const options = this.getOptions(initial);
        if (!address || isNativeTokenAddress(address)) {
            return this.getNativeToken();
        }
        const splTokens = await messages/* SolanaRPC.getAllSplTokens */.y.getAllSplTokens();
        const token = splTokens.find((x)=>x.address === address
        );
        return token ?? {
            address,
            chainId: options.chainId
        };
    }
    async getNonFungibleToken(address, tokenId, schemaType, initial) {
        const options = this.getOptions(initial);
        const asset = await web3_providers_src/* MagicEden.getAsset */.IC.getAsset(address, tokenId, options);
        return (0,src/* createNonFungibleToken */.RV)(options.chainId, address, solana/* SchemaType.NonFungible */.XQ.NonFungible, tokenId, asset?.ownerId, asset?.metadata, asset?.contract, asset?.collection);
    }
    getNonFungibleTokenOwnership(address, tokenId, owner, schema, initial) {
        throw new Error('Method not implemented.');
    }
    getNonFungibleTokenMetadata(address, tokenId, schemaType, initial) {
        throw new Error('Method not implemented.');
    }
    requestTransaction(hash, config, options) {
        throw new Error('Method not implemented.');
    }
    cancelTransaction(hash, config, options) {
        throw new Error('Method not implemented.');
    }
    constructor(chainId, account, providerType, context){
        this.chainId = chainId;
        this.account = account;
        this.providerType = providerType;
        this.context = context;
        this.connections = new Map();
    }
}
function createConnection(context, options) {
    const { chainId =solana/* ChainId.Mainnet */.a_.Mainnet , account ='' , providerType =solana/* ProviderType.Phantom */.lP.Phantom  } = options ?? {};
    return new Connection(chainId, account, providerType, context);
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Connection.ts


class Connection_Connection extends entry_web3/* ConnectionState */.em {
    constructor(context, subscription){
        super(context, createConnection, subscription);
    }
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Settings.ts

class Settings extends entry_web3/* SettingsState */.$c {
    constructor(context){
        super(context);
    }
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Transaction.ts



class Transaction extends entry_web3/* TransactionState */.g7 {
    constructor(context, subscriptions){
        super(context, (0,esm/* getEnumAsArray */.Yl)(solana/* ChainId */.a_).map((x)=>x.value
        ), subscriptions, {
            formatAddress: solana/* formatAddress */.Tg
        });
    }
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/Wallet.ts

class Wallet_Wallet extends entry_web3/* WalletState */.RM {
    constructor(context){
        super(context);
        this.context = context;
    }
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
;// CONCATENATED MODULE: ../plugins/Solana/src/state/Others.ts





class Others extends entry_web3/* OthersState */.CS {
    constructor(context){
        super(context, {
            defaultAddress: solana/* ZERO_ADDRESS */.r_,
            defaultBlockDelay: 15,
            chainDescriptors: solana/* CHAIN_DESCRIPTORS */.Q_,
            networkDescriptors: solana/* NETWORK_DESCRIPTORS */.qQ,
            providerDescriptors: solana/* PROVIDER_DESCRIPTORS */.zM
        });
        this.isValidDomain = solana/* isValidDomain */.hS;
        this.isValidAddress = solana/* isValidAddress */.At;
        this.isSameAddress = src/* isSameAddress */.Wr;
        this.formatAddress = solana/* formatAddress */.Tg;
        this.formatDomainName = formatter/* formatDomainName */.bc;
        this.formatTokenId = solana/* formatTokenId */.Xy;
        this.explorerResolver = solana/* explorerResolver */.Nb;
        this.getMaskTokenAddress = ()=>''
        ;
        this.getNativeTokenAddress = getNativeTokenAddress;
    }
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/IdentityService.ts




const SOL_RE = /\S{1,256}\.sol\b/;
function getSolanaName(twitterId, nickname, bio) {
    const [matched] = (nickname.match(SOL_RE) ?? bio.match(SOL_RE)) ?? [];
    if (matched) return matched;
    return twitterId && !twitterId.endsWith('.sol') ? `${twitterId}.sol` : twitterId;
}
class IdentityService extends entry_web3/* IdentityServiceState */.OC {
    async getFromRemote(identity) {
        const { identifier , bio ='' , nickname =''  } = identity;
        const addressMatched = identity.bio?.match(/\b\w{44}\b/);
        const address = addressMatched?.[0];
        const solanaName = getSolanaName(identifier?.userId ?? '', nickname, bio);
        const solanaDomainAddress = await messages/* SolanaRPC.lookup */.y.lookup(solana/* ChainId.Mainnet */.a_.Mainnet, solanaName);
        return [
            address && !address.startsWith('0x') && (0,solana/* isValidAddress */.At)(address) ? {
                networkSupporterPluginID: src/* NetworkPluginID.PLUGIN_SOLANA */.FF.PLUGIN_SOLANA,
                type: src/* SocialAddressType.ADDRESS */.bN.ADDRESS,
                label: (0,solana/* formatAddress */.Tg)(address, 4),
                address
            } : null,
            solanaDomainAddress ? {
                networkSupporterPluginID: src/* NetworkPluginID.PLUGIN_SOLANA */.FF.PLUGIN_SOLANA,
                type: src/* SocialAddressType.SOL */.bN.SOL,
                label: solanaName,
                address: solanaDomainAddress
            } : null, 
        ].filter(Boolean);
    }
    constructor(context){
        super();
        this.context = context;
    }
}

// EXTERNAL MODULE: ../plugins/Solana/src/apis/index.ts + 6 modules
var apis = __webpack_require__(55374);
;// CONCATENATED MODULE: ../plugins/Solana/src/state/NameService.ts




class NameService extends entry_web3/* NameServiceState */.Te {
    constructor(context, subscriptions){
        super(context, (0,esm/* getEnumAsArray */.Yl)(solana/* ChainId */.a_).map((x)=>x.value
        ), subscriptions, {
            isValidName: (x)=>(0,solana/* isValidDomain */.hS)(x)
            ,
            isValidAddress: (x)=>(0,solana/* isValidAddress */.At)(x) && !(0,solana/* isZeroAddress */.uO)(x)
            ,
            formatAddress: solana/* formatAddress */.Tg
        });
        this.lookup = apis/* lookup */.P5;
        this.reverse = apis/* reverse */.GY;
    }
}

;// CONCATENATED MODULE: ../plugins/Solana/src/state/index.ts










function createWeb3State(context) {
    const Provider_ = new Provider(context);
    const Settings_ = new Settings(context);
    return {
        AddressBook: new AddressBook(context, {
            chainId: Provider_.chainId
        }),
        Hub: new Hub_Hub(context, {
            chainId: Provider_.chainId,
            account: Provider_.account,
            currencyType: Settings_.currencyType
        }),
        IdentityService: new IdentityService(context),
        NameService: new NameService(context, {
            chainId: Provider_.chainId
        }),
        Settings: Settings_,
        Transaction: new Transaction(context, {
            chainId: Provider_.chainId,
            account: Provider_.account
        }),
        Provider: Provider_,
        Connection: new Connection_Connection(context, {
            chainId: Provider_.chainId,
            account: Provider_.account,
            providerType: Provider_.providerType
        }),
        Wallet: new Wallet_Wallet(context),
        Others: new Others(context)
    };
}


/***/ }),

/***/ 96951:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6e3a870c629ccaf7631c.png";

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
const web3_js_1 = __webpack_require__(59493);
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