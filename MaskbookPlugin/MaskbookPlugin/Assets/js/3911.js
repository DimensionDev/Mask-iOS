<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/3911.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3911],{

/***/ 77224:
/***/ ((module) => {

(function() {
	// The random number is a js implementation of the Xorshift PRNG
	var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

	function seedrand(seed) {
		for (var i = 0; i < randseed.length; i++) {
			randseed[i] = 0;
		}
		for (var i = 0; i < seed.length; i++) {
			randseed[i%4] = ((randseed[i%4] << 5) - randseed[i%4]) + seed.charCodeAt(i);
		}
	}

	function rand() {
		// based on Java's String.hashCode(), expanded to 4 32bit values
		var t = randseed[0] ^ (randseed[0] << 11);

		randseed[0] = randseed[1];
		randseed[1] = randseed[2];
		randseed[2] = randseed[3];
		randseed[3] = (randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8));

		return (randseed[3]>>>0) / ((1 << 31)>>>0);
	}

	function createColor() {
		//saturation is the whole color spectrum
		var h = Math.floor(rand() * 360);
		//saturation goes from 40 to 100, it avoids greyish colors
		var s = ((rand() * 60) + 40) + '%';
		//lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
		var l = ((rand()+rand()+rand()+rand()) * 25) + '%';

		var color = 'hsl(' + h + ',' + s + ',' + l + ')';
		return color;
	}

	function createImageData(size) {
		var width = size; // Only support square icons for now
		var height = size;

		var dataWidth = Math.ceil(width / 2);
		var mirrorWidth = width - dataWidth;

		var data = [];
		for(var y = 0; y < height; y++) {
			var row = [];
			for(var x = 0; x < dataWidth; x++) {
				// this makes foreground and background color to have a 43% (1/2.3) probability
				// spot color has 13% chance
				row[x] = Math.floor(rand()*2.3);
			}
			var r = row.slice(0, mirrorWidth);
			r.reverse();
			row = row.concat(r);

			for(var i = 0; i < row.length; i++) {
				data.push(row[i]);
			}
		}

		return data;
	}

  function buildOpts(opts) {
    var newOpts = {};

		newOpts.size = opts.size || 8;
		newOpts.scale = opts.scale || 4;
		newOpts.seed = opts.seed || Math.floor((Math.random()*Math.pow(10,16))).toString(16);
		newOpts.color = opts.color || createColor();
		newOpts.bgcolor = opts.bgcolor || createColor();
		newOpts.spotcolor = opts.spotcolor || createColor();

		seedrand(newOpts.seed);

    return newOpts;
  }

  function renderIcon(opts, canvas) {
    var opts = buildOpts(opts || {});

		var imageData = createImageData(opts.size);
		var width = Math.sqrt(imageData.length);

		canvas.width = canvas.height = opts.size * opts.scale;

		var cc = canvas.getContext('2d');
		cc.fillStyle = opts.bgcolor;
		cc.fillRect(0, 0, canvas.width, canvas.height);
		cc.fillStyle = opts.color;

		for(var i = 0; i < imageData.length; i++) {

			// if data is 0, leave the background
			if(imageData[i]) {
				var row = Math.floor(i / width);
				var col = i % width;

				// if data is 2, choose spot color, if 1 choose foreground
			  cc.fillStyle = (imageData[i] == 1) ? opts.color : opts.spotcolor;

				cc.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale);
			}
		}
    return canvas;
  }

	function createIcon(opts) {
    var opts = buildOpts(opts || {});
		var canvas = document.createElement('canvas');

    renderIcon(opts, canvas);

		return canvas;
	}

	var api = {
    create: createIcon,
    render: renderIcon
  };

  if (true) {
    module.exports = api;
  }
  if (typeof window !== "undefined") {
    window.blockies = api;
  }

})();


/***/ }),
=======
"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[967],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/967.js

/***/ 67431:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React vundefined
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(52458);var f=__webpack_require__(34539),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:n.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/3911.js
/***/ 55346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.IdentifierMap)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);



/***/ }),

/***/ 10339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ buildInfoMarkdown)
/* harmony export */ });
var ref, ref1, ref2, ref3, ref4, ref5, ref6;
console.log('Build info', {
    NODE_ENV: "production",
    VERSION: "v1.29.12-905-gc5a5cecec",
    TAG_NAME: "v1.36.0",
    COMMIT_HASH: "c5a5cecec",
    COMMIT_DATE: "2021-08-31T02:49:35.000Z",
    BUILD_DATE: "2021-08-31T02:52:53.915Z",
    REMOTE_URL: "https://github.com/DimensionDev/Maskbook",
    BRANCH_NAME: "develop",
    DIRTY: false,
    TAG_DIRTY: true
});
var ref7;
const buildInfoMarkdown = `## Build info
- Version: ${(ref7 = (ref = globalThis.browser) === null || ref === void 0 ? void 0 : (ref1 = ref.runtime) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.getManifest) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.call(ref1)) === null || ref3 === void 0 ? void 0 : ref3.version) !== null && ref7 !== void 0 ? ref7 : (ref4 = "v1.36.0") === null || ref4 === void 0 ? void 0 : ref4.slice(1)}
- NODE_ENV: ${"production"}
- target: ${"safari"}
- build: ${"stable"}
- architecture: ${"app"}
- firefoxVariant: ${false}
- resolution: ${"mobile"}
- BUILD_DATE: ${"2021-08-31T02:52:53.915Z"}
- VERSION: ${"v1.29.12-905-gc5a5cecec"}

## Git (${ true ? '*' : 0}):

${"c5a5cecec"} (${"develop"}) on tag "${"v1.36.0"}"
${((ref6 = (ref5 = "https://github.com/DimensionDev/Maskbook") === null || ref5 === void 0 ? void 0 : ref5.toLowerCase()) === null || ref6 === void 0 ? void 0 : ref6.includes('DimensionDev')) ? '' : "https://github.com/DimensionDev/Maskbook"}`;


/***/ }),

/***/ 83404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export getWelcomePageURL */
/* harmony import */ var _utils_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80773);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67099);
/* harmony import */ var _SetupStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86941);



function getWelcomePageURL() {
    if (false) {} else if (Flags.has_no_browser_tab_ui) {
        return browser.runtime.getURL(`index.html#${DashboardRoute.Nav}`);
    } else {
        return browser.runtime.getURL(`index.html#${DashboardRoute.Setup}/${SetupStep.ConsentDataCollection}`);
    }
}


/***/ }),

/***/ 43148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
=======
/***/ 6744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/967.js
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gn": () => (/* binding */ USDC),
/* harmony export */   "AA": () => (/* binding */ USDT),
/* harmony export */   "lz": () => (/* binding */ BUSD),
/* harmony export */   "TP": () => (/* binding */ COMP),
/* harmony export */   "Ti": () => (/* binding */ MKR),
/* harmony export */   "uz": () => (/* binding */ MSKA),
/* harmony export */   "mW": () => (/* binding */ MSKB),
/* harmony export */   "Xw": () => (/* binding */ MSKC),
/* harmony export */   "h1": () => (/* binding */ DAI),
/* harmony export */   "s5": () => (/* binding */ AMPL),
/* harmony export */   "bi": () => (/* binding */ UST),
/* harmony export */   "c0": () => (/* binding */ ETHER),
/* harmony export */   "xZ": () => (/* binding */ QUICK),
/* harmony export */   "ML": () => (/* binding */ WBTC),
/* harmony export */   "uj": () => (/* binding */ RUNE),
/* harmony export */   "nB": () => (/* binding */ BTCB),
/* harmony export */   "J6": () => (/* binding */ maUSDC),
/* harmony export */   "lK": () => (/* binding */ NFTX),
/* harmony export */   "_S": () => (/* binding */ STETH),
/* harmony export */   "FX": () => (/* binding */ WNATIVE),
/* harmony export */   "HL": () => (/* binding */ WNATIVE_ONLY),
/* harmony export */   "PM": () => (/* binding */ BIPS_BASE),
/* harmony export */   "IS": () => (/* binding */ ONE_BIPS),
/* harmony export */   "Bq": () => (/* binding */ SLIPPAGE_MIN),
/* harmony export */   "Nd": () => (/* binding */ SLIPPAGE_DEFAULT),
/* harmony export */   "Q9": () => (/* binding */ SLIPPAGE_MAX),
/* harmony export */   "ag": () => (/* binding */ DEFAULT_TRANSACTION_DEADLINE),
/* harmony export */   "rV": () => (/* binding */ L2_TRANSACTION_DEADLINE),
/* harmony export */   "J2": () => (/* binding */ PRICE_IMPACT_LOW),
/* harmony export */   "wh": () => (/* binding */ PRICE_IMPACT_MEDIUM),
/* harmony export */   "Wg": () => (/* binding */ PRICE_IMPACT_HIGH),
/* harmony export */   "EV": () => (/* binding */ PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN),
/* harmony export */   "lA": () => (/* binding */ PRICE_IMPACT_NON_EXPERT_BLOCKED),
/* harmony export */   "rI": () => (/* binding */ MINIMUM_AMOUNT)
/* harmony export */ });
/* unused harmony exports HUSD, MSKD, MSKE, OKB, EASY, eUSDC, eUSDT, eDAI, sUSD, UNITOKEN, TT01, TT02, IGG, OM, SUSHI, YAM, YFI, CAKE */
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6615);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);


const USDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('USDC_ADDRESS', 'USD Coin', 'USDC', 6);
const USDT = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('USDT_ADDRESS', 'Tether USD', 'USDT', 6);
const HUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('HUSD_ADDRESS', 'Huobi USD', 'HUSD', 6);
const BUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('BUSD_ADDRESS', 'Huobi USD', 'BUSD', 6);
const COMP = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('COMP_ADDRESS', 'Compound', 'COMP', 18);
const MKR = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MKR_ADDRESS', 'Maker', 'MKR', 18);
const MSKA = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKA_ADDRESS', 'Mask A', 'MSKA', 18);
const MSKB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKB_ADDRESS', 'Mask B', 'MSKB', 18);
const MSKC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKC_ADDRESS', 'Mask C', 'MSKC', 18);
const MSKD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKD_ADDRESS', 'Mask D', 'MSKD', 18);
const MSKE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKE_ADDRESS', 'Mask E', 'MSKE', 18);
const DAI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('DAI_ADDRESS', 'Dai Stablecoin', 'DAI', 18);
const AMPL = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('AMPL_ADDRESS', 'Ampleforth', 'AMPL', 18);
const OKB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('OKB_ADDRESS', 'Ampleforth', 'OKB', 18);
const UST = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('UST_ADDRESS', 'Wrapped UST Token', 'UST', 18);
const EASY = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('EASY_ADDRESS', 'EASY', 'EASY', 18);
const eUSDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eUSDC_ADDRESS', 'Easy USDC', 'eUSDC', 18);
const eUSDT = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eUSDT_ADDRESS', 'Easy USDT', 'eUSDT', 18);
const eDAI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eDAI_ADDRESS', 'Easy DAI', 'eDAI', 18);
const sUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('sUSD_ADDRESS', 'Synth sUSD', 'sUSD', 18);
const UNITOKEN = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('UNITOKEN_ADDRESS', 'Uniswap', 'UNI', 18);
const TT01 = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('TT01_ADDRESS', 'Test Token 01', 'TT01', 18);
const TT02 = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('TT02_ADDRESS', 'Test Token 02', 'TT02', 18);
const ETHER = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('ETHER_ADDRESS', 'Ether', 'ETH', 18);
const QUICK = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('QUICK_ADDRESS', 'Quickswap', 'QUICK', 18);
const WBTC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('WBTC_ADDRESS', 'Wrapped Bitcoin', 'WBTC', 18);
const IGG = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('IGG_ADDRESS', 'IG Gold', 'IGG', 18);
const OM = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('OM_ADDRESS', 'OM Token', 'OM', 18);
const SUSHI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('SUSHI_ADDRESS', 'SushiToken', 'SUSHI', 18);
const YAM = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('YAM_ADDRESS', 'YAM', 'YAM', 18);
const RUNE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('RUNE_ADDRESS', 'RUNE.ETH', 'RUNE', 18);
const YFI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('YFI_ADDRESS', 'Yearn', 'YFI', 18);
const BTCB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('BTCB_ADDRESS', 'Binance BTC', 'BTCB', 18);
const CAKE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('CAKE_ADDRESS', 'PancakeSwap Token', 'CAKE', 18);
const maUSDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('maUSDC_ADDRESS', 'Matic Aave interest bearing USDC', 'maUSDC', 6);
const NFTX = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('NFTX_ADDRESS', 'NFTX', 'NFTX', 18);
const STETH = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('stETH_ADDRESS', 'stakedETH', 'stETH', 18);
var _name, _symbol;
const WNATIVE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('WNATIVE_ADDRESS', (chainId)=>{
    var ref;
    return `Wrapped ${(_name = (ref = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .getChainDetailed */ .$Gt)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.name) !== null && _name !== void 0 ? _name : 'Ether'}`;
}, (chainId)=>{
    var ref;
    return `W${(_symbol = (ref = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .getChainDetailed */ .$Gt)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.symbol) !== null && _symbol !== void 0 ? _symbol : 'ETH'}`;
}, 18);
const WNATIVE_ONLY = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Ropsten */ .a_e.Ropsten]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Ropsten */ .a_e.Ropsten]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Kovan */ .a_e.Kovan]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Kovan */ .a_e.Kovan]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Gorli */ .a_e.Gorli]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Gorli */ .a_e.Gorli]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSCT */ .a_e.BSCT]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSCT */ .a_e.BSCT]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mumbai */ .a_e.Mumbai]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mumbai */ .a_e.Mumbai]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum */ .a_e.Arbitrum]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum */ .a_e.Arbitrum]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum_Rinkeby */ .a_e.Arbitrum_Rinkeby]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum_Rinkeby */ .a_e.Arbitrum_Rinkeby]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.xDai */ .a_e.xDai]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.xDai */ .a_e.xDai]
    ]
};
const BIPS_BASE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(10000);
const ONE_BIPS = _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ONE.dividedBy */ .ryP.dividedBy(BIPS_BASE);
const SLIPPAGE_MIN = 10 // bips
;
const SLIPPAGE_DEFAULT = 50 // bips
;
const SLIPPAGE_MAX = 1000 // bips
;
const DEFAULT_TRANSACTION_DEADLINE = 30 /* minutes */  * 60 /* seconds */ ;
const L2_TRANSACTION_DEADLINE = 60 /* minutes */  * 5 /* seconds */ ;
const PRICE_IMPACT_LOW = 100 // 1%
;
const PRICE_IMPACT_MEDIUM = 300 // 3%
;
const PRICE_IMPACT_HIGH = 500 // 5%
;
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = 1000 // 10%
;
// for non expert mode disable swaps above this
const PRICE_IMPACT_NON_EXPERT_BLOCKED = 1500 // 15%
;
const MINIMUM_AMOUNT = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())('1e-6');


/***/ }),

/***/ 5914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y$": () => (/* binding */ PersonaArrayComparer)
/* harmony export */ });
/* unused harmony exports PersonaComparer, ProfileArrayComparer */
function PersonaComparer(a, b) {
    if (a.createdAt.getTime() !== b.createdAt.getTime()) return false;
    if (a.updatedAt.getTime() !== b.updatedAt.getTime()) return false;
    if (a.fingerprint !== b.fingerprint) return false;
    if (a.hasPrivateKey !== b.hasPrivateKey) return false;
    if (!a.identifier.equals(b.identifier)) return false;
    // simple check
    if (a.linkedProfiles.size !== b.linkedProfiles.size) return false;
    if (a.nickname !== b.nickname) return false;
    return true;
}
function PersonaArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((persona, index)=>PersonaComparer(persona, b[index])
    );
}
function ProfileArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((person, index)=>{
        const target = b[index];
        if (!person.identifier.equals(target.identifier)) return false;
        if (person.avatar !== target.avatar) return false;
        if (person.updatedAt.getTime() !== target.updatedAt.getTime()) return false;
        // logic XOR
        if (!person.linkedPersona !== !target.linkedPersona) return false;
        if (person.linkedPersona && target.linkedPersona) {
            if (!PersonaComparer(person.linkedPersona, target.linkedPersona)) return false;
        }
        if (person.nickname !== target.nickname) return false;
        return true;
    });
}


/***/ }),

/***/ 44531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ createNormalReactRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24204);
/* harmony import */ var _components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33450);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53688);




function createNormalReactRoot(jsx, container) {
    var ref;
    if (!container) container = (ref = document.getElementById('root')) !== null && ref !== void 0 ? ref : void 0;
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    if (false) {}
    return react_dom__WEBPACK_IMPORTED_MODULE_1__.createRoot(container).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .NoEffectUsePortalShadowRootContext.Provider */ .XR.Provider, {
        value: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundary */ .S, {
            children: jsx
        })
    }));
}


/***/ }),

/***/ 74712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ MaskMessage)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type_transform_Serialization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33797);


// This file should be free of side effects
if (false) {}
// This file is designed as HMR-safe.
/* unsupported import.meta.webpackHot */ undefined && 0;
const MaskMessage = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.WebExtensionMessage({
    domain: 'mask'
});
Object.assign(globalThis, {
    MaskMessage
});
MaskMessage.serialization = _type_transform_Serialization__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z;


/***/ }),

/***/ 60979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xb": () => (/* binding */ Identifier),
/* harmony export */   "WO": () => (/* binding */ ProfileIdentifier),
/* harmony export */   "xI": () => (/* binding */ GroupIdentifier),
/* harmony export */   "_P": () => (/* binding */ PostIdentifier),
/* harmony export */   "bb": () => (/* binding */ PostIVIdentifier),
/* harmony export */   "ob": () => (/* binding */ ECKeyIdentifier),
/* harmony export */   "Np": () => (/* binding */ PersonaIdentifier)
/* harmony export */ });
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25906);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);


/**
 * @internal symbol that used to construct this type from the Identifier
 */ const $fromString = Symbol();
const fromStringCache = new Map();
const fromString = (id, constructor)=>{
    let result = null;
    // the third overload
    if (id instanceof Identifier) result = id;
    else {
        const [type, ...rest] = id.split(':');
        // the second overload
        if (fromStringCache.has(id)) result = fromStringCache.get(id);
        else if (type === 'person') result = ProfileIdentifier[$fromString](rest.join(':'));
        else if (type === 'group') result = GroupIdentifier[$fromString](rest.join(':'));
        else if (type === 'post') result = PostIdentifier[$fromString](rest.join(':'));
        else if (type === 'post_iv') result = PostIVIdentifier[$fromString](rest.join(':'));
        else if (type === 'ec_key') result = ECKeyIdentifier[$fromString](rest.join(':'));
        else return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError('Unreachable case:' + type));
        fromStringCache.set(id, result);
    }
    const err = (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError(`Can't cast to Identifier. Expected: ${(constructor === null || constructor === void 0 ? void 0 : constructor.name) || 'Any Identifier'}, Try to convert from string: ${id}`));
    if (!constructor) return result ? (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(result) : err;
    else if (result instanceof constructor) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(result);
    else return err;
};
class Identifier {
    static equals(a, b) {
        return !!(a === null || a === void 0 ? void 0 : a.equals(b));
    }
    equals(other) {
        if (!other) return false;
        return this === other || this.toText() === other.toText();
    }
    static IdentifiersToString(a, isOrderImportant = false) {
        const ax = a.map((x)=>x.toText()
        );
        if (!isOrderImportant) {
            ax.sort();
        }
        return ax.join(',');
    }
}
Identifier.fromString = fromString;
var tmp = $fromString;
class ProfileIdentifier extends Identifier {
    static getUserName(x) {
        if (typeof x === 'string') {
            if ([
                '',
                '$unknown'
            ].includes(x)) return null;
            return x;
        } else {
            if (x.isUnknown) return null;
            return x.userId;
        }
    }
    get isUnknown() {
        return this.equals(ProfileIdentifier.unknown);
    }
    toText() {
        return `person:${this.network}/${this.userId}`;
    }
    friendlyToText() {
        return `${this.userId}@${this.network}`;
    }
    static [tmp](str) {
        const [network, userId] = str.split('/');
        if (!network || !userId) return null;
        return new ProfileIdentifier(network, userId);
    }
    /**
     * @param network - Network belongs to
     * @param userId - User ID
     */ constructor(network, userId){
        super();
        this.network = network;
        this.userId = userId;
        noSlash(network);
        noSlash(userId);
    }
}
ProfileIdentifier.unknown = new ProfileIdentifier('localhost', '$unknown');
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('ProfileIdentifier')(ProfileIdentifier);
var tmp1 = $fromString;
class GroupIdentifier extends Identifier {
    static getFriendsGroupIdentifier(who, groupId) {
        return new GroupIdentifier(who.network, who.userId, groupId);
    }
    get ownerIdentifier() {
        if (this.virtualGroupOwner === null) return null;
        return new ProfileIdentifier(this.network, this.virtualGroupOwner);
    }
    toText() {
        return 'group:' + [
            this.network,
            this.virtualGroupOwner,
            this.groupID
        ].join('/');
    }
    get isReal() {
        return !this.virtualGroupOwner;
    }
    get isVirtual() {
        return !!this.virtualGroupOwner;
    }
    static [tmp1](str) {
        const [network1, belongs, groupID] = str.split('/');
        if (!network1 || !groupID) return null;
        return new GroupIdentifier(network1, belongs, groupID);
    }
    constructor(network1, virtualGroupOwner, groupID){
        super();
        this.network = network1;
        this.virtualGroupOwner = virtualGroupOwner;
        this.groupID = groupID;
        noSlash(network1);
        noSlash(groupID);
        if (virtualGroupOwner === '') this.virtualGroupOwner = null;
    }
}
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('GroupIdentifier')(GroupIdentifier);
var tmp2 = $fromString;
class PostIdentifier extends Identifier {
    get isUnknown() {
        return this.equals(PostIdentifier.unknown);
    }
    toText() {
        return `post:${this.postId}/${this.identifier.toText()}`;
    }
    static [tmp2](str) {
        const [postId, ...identifier] = str.split('/');
        const id = Identifier.fromString(identifier.join('/'));
        if (id.err || !postId) return null;
        return new PostIdentifier(id.val, postId);
    }
    /**
     * If identifier is a PostIdentifier, that means this post is binded with other post in some kind
     * e.g. a comment.
     */ constructor(identifier, postId){
        super();
        this.identifier = identifier;
        this.postId = postId;
        noSlash(postId);
    }
}
PostIdentifier.unknown = new PostIdentifier(ProfileIdentifier.unknown, '$unknown');
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('PostIdentifier')(PostIdentifier);
var tmp3 = $fromString;
class PostIVIdentifier extends Identifier {
    toText() {
        return `post_iv:${this.network}/${this.postIV.replace(/\//g, '|')}`;
    }
    static [tmp3](str) {
        const [network2, iv] = str.split('/');
        if (!network2 || !iv) return null;
        return new PostIVIdentifier(network2, iv);
    }
    constructor(network2, postIV){
        super();
        this.network = network2;
        this.postIV = postIV;
    }
}
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('PostIVIdentifier')(PostIVIdentifier);
var tmp4 = $fromString;
/**
 * This class identify the point on an EC curve.
 * ec_key:secp256k1/CompressedPoint
 */ class ECKeyIdentifier extends Identifier {
    toText() {
        var _encodedCompressedKey;
        const normalized = (_encodedCompressedKey = this.encodedCompressedKey) !== null && _encodedCompressedKey !== void 0 ? _encodedCompressedKey : this.compressedPoint.replace(/\//g, '|');
        return `ec_key:${this.curve}/${normalized}`;
    }
    static [tmp4](str) {
        const [curve, point] = str.split('/');
        if (curve !== 'secp256k1') return null;
        return new ECKeyIdentifier(curve, point);
    }
    constructor(curve, compressedPoint){
        super();
        this.curve = curve;
        this.compressedPoint = compressedPoint;
        this.type = 'ec_key';
    }
}
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('ECKeyIdentifier')(ECKeyIdentifier);
// eslint-disable-next-line no-redeclare
const PersonaIdentifier = [
    ECKeyIdentifier
];
/**
 * Because "/" is used to split parts in identifier
 * we should reject the "/"
 *
 * If you want to use it, you must first convert to something other
 */ function noSlash(str) {
    if (!str) return;
    if (str.includes('/')) throw new TypeError('Cannot contain / in a part of identifier');
}


/***/ }),

/***/ 32166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OZ": () => (/* reexport */ CrashUI/* CrashUI */.O),
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N),
  "LC": () => (/* reexport */ ProviderIcon/* ProviderIcon */.L),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "vT": () => (/* reexport */ TokenIcon/* TokenIconUI */.v),
  "no": () => (/* reexport */ TokenList/* TokenList */.n),
  "Pf": () => (/* reexport */ withErrorBoundary)
});

// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 1 modules
var TokenIcon = __webpack_require__(26529);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenList/index.tsx + 1 modules
var TokenList = __webpack_require__(83913);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(92045);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/CrashUI.tsx
var CrashUI = __webpack_require__(19887);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/context.ts
var context = __webpack_require__(86301);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../shared/src/UI/components/ErrorBoundary/ErrorBoundary.tsx



const map = new WeakMap();
/**
 * Return the ErrorBoundary wrapped version of given Component
 * @param Component The component that need to be wrapped with ErrorBoundary
 */ function withErrorBoundary(Component1) {
    if (map.has(Component1)) return map.get(Component1);
    const C = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ErrorBoundary, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Component1, {
                ...props,
                ref: ref
            })
        })
    );
    map.set(Component1, C);
    return C;
}
class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (!this.state.error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: this.props.children
        }));
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CrashUI/* CrashUI */.O, {
            subject: "Mask",
            onRetry: ()=>this.setState({
                    error: null
                })
            ,
            ...this.props,
            ...this.normalizedError
        }));
    }
    get normalizedError() {
        let stack = '<stack not available>';
        let type = 'UnknownError';
        let message = 'unknown error';
        try {
            stack = String(this.state.error.stack) || '<stack not available>';
            stack = stack.replace(/webpack-internal:.+node_modules\//g, 'npm:');
            // remove webpack-internal:///
            stack = stack.replace(/webpack-internal:\/{3}/g, '');
        } catch  {
        }
        try {
            type = String(this.state.error.name) || '<type not available>';
        } catch  {
        }
        try {
            message = String(this.state.error.message) || '<message not available>';
        } catch  {
        }
        return {
            stack,
            type,
            message
        };
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

;// CONCATENATED MODULE: ../shared/src/UI/components/ErrorBoundary/index.ts




// EXTERNAL MODULE: ../shared/src/UI/components/ProviderIcon/index.tsx
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/3911.js
var ProviderIcon = __webpack_require__(97331);
=======
var ProviderIcon = __webpack_require__(78852);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/967.js
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts






<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/3911.js

/***/ }),

/***/ 3078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y_": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.Y_),
/* harmony export */   "Jf": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.Jf),
/* harmony export */   "$P": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.$P),
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "UK": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.UK),
/* harmony export */   "pv": () => (/* reexport safe */ _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "_X": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__._X),
/* harmony export */   "Xh": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.Xh),
/* harmony export */   "F$": () => (/* reexport safe */ _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__.F),
/* harmony export */   "iD": () => (/* reexport safe */ _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__.i),
/* harmony export */   "S8": () => (/* reexport safe */ _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "r8": () => (/* reexport safe */ _createGlobalState__WEBPACK_IMPORTED_MODULE_6__.r)
/* harmony export */ });
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22466);
/* harmony import */ var _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56753);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7082);
/* harmony import */ var _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30246);
/* harmony import */ var _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54957);
/* harmony import */ var _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99058);
/* harmony import */ var _createGlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39326);








=======
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/967.js

/***/ }),

/***/ 93281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useValueRef),
/* harmony export */   "UK": () => (/* binding */ useValueRefDelayed),
/* harmony export */   "Jf": () => (/* binding */ SubscriptionFromValueRef),
/* harmony export */   "Y_": () => (/* binding */ SubscriptionDebug),
/* harmony export */   "$P": () => (/* binding */ ValueRefFromSubscription)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88085);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);



function useValueRef(ref) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>ref.addListener(callback)
        })
    , [
        ref
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function useValueRefDelayed(ref, latency = 500) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>{
                return ref.addListener((newVal, oldVal)=>{
                    setTimeout(()=>callback(newVal, oldVal)
                    , latency);
                });
            }
        })
    , [
        ref,
        latency
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function SubscriptionFromValueRef(ref) {
    return SubscriptionDebug({
        getCurrentValue: ()=>ref.value
        ,
        subscribe: (sub)=>ref.addListener(sub)
    });
}
function SubscriptionDebug(x) {
    Object.defineProperty(x, '_value', {
        configurable: true,
        get: ()=>x.getCurrentValue()
    });
    return x;
}
function ValueRefFromSubscription(sub, eq) {
    const ref = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(sub.getCurrentValue(), eq);
    sub.subscribe(()=>ref.value = sub.getCurrentValue()
    );
    return ref;
}


/***/ }),

/***/ 37566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* binding */ useERC20TokenBytes32Contract),
  "E": () => (/* binding */ useERC20TokenBytes32Contracts)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/ERC20Bytes32.json
const ERC20Bytes32_namespaceObject = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/src/hooks/useContract.ts
var useContract = __webpack_require__(16055);
;// CONCATENATED MODULE: ../web3-shared/src/contracts/useERC20TokenBytes32Contract.ts


function useERC20TokenBytes32Contract(address) {
    return (0,useContract/* useContract */.cq)(address, ERC20Bytes32_namespaceObject);
}
function useERC20TokenBytes32Contracts(listOfAddress, readonly = false) {
    return (0,useContract/* useContracts */.GP)(listOfAddress, ERC20Bytes32_namespaceObject, readonly);
}


/***/ }),

/***/ 58707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useChainColor)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33385);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98954);


function useChainColor() {
    const chainId = (0,_index__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    return (0,_pipes__WEBPACK_IMPORTED_MODULE_1__/* .resolveChainColor */ ._E)(chainId);
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/3911.js
/***/ 78944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useChainColor)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17283);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60345);


function useChainColor() {
    const chainId = (0,_index__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    return (0,_pipes__WEBPACK_IMPORTED_MODULE_1__/* .resolveChainColor */ ._E)(chainId);
}


/***/ }),

/***/ 60345:
=======
/***/ 98954:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/967.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hw": () => (/* binding */ resolveProviderName),
/* harmony export */   "wg": () => (/* binding */ resolveNetworkAddress),
/* harmony export */   "nW": () => (/* binding */ resolveNetworkName),
/* harmony export */   "_E": () => (/* binding */ resolveChainColor),
/* harmony export */   "CS": () => (/* binding */ resolveLinkOnExplorer),
/* harmony export */   "z4": () => (/* binding */ resolveTransactionLinkOnExplorer),
/* harmony export */   "yW": () => (/* binding */ resolveTokenLinkOnExplorer),
/* harmony export */   "V3": () => (/* binding */ resolveAddressLinkOnExplorer),
/* harmony export */   "vy": () => (/* binding */ resolveBlockLinkOnExplorer),
/* harmony export */   "r5": () => (/* binding */ resolveIPFSLink),
/* harmony export */   "Q_": () => (/* binding */ resolveCollectibleLink)
/* harmony export */ });
/* unused harmony exports resolveChainName, resolveChainFullName, resolveCollectibleProviderLink */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24402);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4285);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_3__);




function resolveProviderName(providerType) {
    switch(providerType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.Maskbook */ .lP.Maskbook:
            return 'Mask';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.MetaMask */ .lP.MetaMask:
            return 'MetaMask';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.WalletConnect */ .lP.WalletConnect:
            return 'WalletConnect';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork:
            return 'CustomNetwork';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(providerType);
            return 'Unknown Network';
    }
}
function resolveNetworkAddress(networkType, address) {
    switch(networkType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .td.Binance:
            return `binance:${address}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .td.Polygon:
            return `polygon:${address}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .td.Ethereum:
            return `ethereum:${address}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .td.Arbitrum:
            return `arbitrum:${address}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.xDai */ .td.xDai:
            return `xdai:${address}`;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(networkType);
            return address;
    }
}
function resolveNetworkName(networkType) {
    switch(networkType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .td.Binance:
            return 'Binance Smart Chain';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .td.Polygon:
            return 'Polygon';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .td.Ethereum:
            return 'Ethereum';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .td.Arbitrum:
            return 'Arbitrum';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.xDai */ .td.xDai:
            return 'xDai';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(networkType);
            return 'Unknown';
    }
}
function resolveChainName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.name) !== null && ref !== void 0 ? ref : 'Unknown';
}
function resolveChainFullName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.fullName) !== null && ref !== void 0 ? ref : 'Unknown';
}
function resolveChainColor(chainId) {
    switch(chainId){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet:
            return 'rgb(41, 182, 175)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Ropsten */ .a_.Ropsten:
            return 'rgb(255, 74, 141)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Kovan */ .a_.Kovan:
            return 'rgb(112, 87, 255)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby:
            return 'rgb(246, 195, 67)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Gorli */ .a_.Gorli:
            return 'rgb(48, 153, 242)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSCT */ .a_.BSCT:
            return 'rgb(240, 185, 10)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mumbai */ .a_.Mumbai:
            return 'rgb(130, 71, 229)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.xDai */ .a_.xDai:
            return 'rgb(73, 169, 166)';
        default:
            return 'rgb(214, 217, 220)';
    }
}
function resolveLinkOnExplorer(chainId) {
    var ref, ref1;
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getChainDetailed */ .$G)(chainId);
    if (!chainDetailed) return '';
    var ref2;
    return (ref2 = (ref = chainDetailed.explorers) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.url) !== null && ref2 !== void 0 ? ref2 : chainDetailed.infoURL;
}
function resolveTransactionLinkOnExplorer(chainId, tx) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/tx/:tx', {
        tx
    });
}
function resolveTokenLinkOnExplorer({ chainId , address  }) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/token/:address', {
        address
    });
}
function resolveAddressLinkOnExplorer(chainId, address) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/address/:address', {
        address
    });
}
function resolveBlockLinkOnExplorer(chainId, block) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/block/:block', {
        block
    });
}
function resolveIPFSLink(ipfs) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()('https://ipfs.fleek.co/ipfs/:ipfs', {
        ipfs
    });
}
function resolveCollectibleProviderLink(chainId, provider) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .CollectibleProvider.OPENSEAN */ .wg.OPENSEAN:
            if (chainId === _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby) return `https://testnets.opensea.io`;
            return `https://opensea.io`;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(provider);
    }
}
function resolveCollectibleLink(chainId, provider, { contractDetailed: { address  } , tokenId  }) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .CollectibleProvider.OPENSEAN */ .wg.OPENSEAN:
            return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveCollectibleProviderLink(chainId, provider), '/assets/:address/:tokenId', {
                address,
                tokenId
            });
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(provider);
    }
}


/***/ }),

/***/ 4350:
/***/ ((module) => {

module.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');

/***/ })

}]);