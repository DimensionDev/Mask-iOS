"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9315],{

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

/***/ 36640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllSplTokens": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.DR),
/* harmony export */   "getFungibleAssets": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.KM),
/* harmony export */   "getNonFungibleAssets": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.z6),
/* harmony export */   "getSolAsset": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.BN),
/* harmony export */   "getSplTokenBalance": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.W3),
/* harmony export */   "getSplTokenList": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.wD),
/* harmony export */   "lookup": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.P5),
/* harmony export */   "reverse": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.GY)
/* harmony export */ });
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55374);



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