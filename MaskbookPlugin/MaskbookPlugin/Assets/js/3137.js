(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3137],{

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

/***/ 86941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export SetupStep */
var SetupStep;
(function(SetupStep1) {
    SetupStep1["ConsentDataCollection"] = 'consent-data-collection';
    SetupStep1["CreatePersona"] = 'create-persona';
    SetupStep1["ConnectNetwork"] = 'connect-network';
    SetupStep1["RestoreDatabase"] = 'restore-database';
    SetupStep1["RestoreDatabaseAdvance"] = 'restore-database-advance';
    SetupStep1["RestoreDatabaseConfirmation"] = 'restore-database-confirmation';
})(SetupStep || (SetupStep = {
}));


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

/***/ 61893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ft": () => (/* binding */ untilElementAvailable),
/* harmony export */   "Up": () => (/* binding */ untilDomLoaded),
/* harmony export */   "Hx": () => (/* binding */ untilDocumentReady),
/* harmony export */   "vv": () => (/* binding */ nthChild)
/* harmony export */ });
/* unused harmony export isDocument */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);


const isDocument = (node)=>node.nodeType === Node.DOCUMENT_NODE
;
const untilElementAvailable = async (ls, timeout = 5000)=>{
    const w = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.IntervalWatcher(ls);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>reject()
        , timeout);
        w.useForeach(()=>{
            w.stopWatch();
            resolve();
        }).startWatch(500);
    });
};
function untilDomLoaded() {
    if (document.readyState !== 'loading') return Promise.resolve();
    return new Promise((resolve)=>{
        const callback = ()=>{
            if (document.readyState !== 'loading') {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, {
            passive: true
        });
    });
}
function untilDocumentReady() {
    if (document.readyState === 'complete') return Promise.resolve();
    return new Promise((resolve)=>{
        const callback = ()=>{
            if (document.readyState === 'complete') {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, {
            passive: true
        });
    });
}
const nthChild = (n, ...childrenIndex)=>{
    let r = n;
    for (const v of childrenIndex){
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(r)) break;
        r = r.children[v];
    }
    return r;
};


/***/ }),

/***/ 80773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vU": () => (/* binding */ Flags)
/* harmony export */ });
/* unused harmony exports is_iOSApp, isAndroidApp */
var ref, ref1;
const is_iOSApp =  true && "app" === 'app';
const isAndroidApp = (/* unused pure expression or super */ null && ( true && "safari" === 'firefox'));
const appOnly = "app" === 'app';
const devOnly = "production" === 'development';
const webOnly =  false || devOnly;
const insiderOnly =  false || devOnly;
const betaOrInsiderOnly = insiderOnly || "stable" === 'beta';
// TODO: In future, we can turn this object into a Proxy to receive flags from remote
const Flags = {
    __raw__: {
        target: "safari",
        architecture: "app"
    },
    /** The Mask Network v2 main switch. */ v2_enabled: betaOrInsiderOnly,
    /** There is no "tabs" to navigate to. We must be careful with this. */ has_no_browser_tab_ui: appOnly,
    has_no_connected_user_link: appOnly,
    has_native_nav_bar: appOnly,
    /** In E2E, prefer open shadow root so we can test it. */ using_ShadowDOM_attach_mode:  false ? 0 : 'closed',
    /** Don't inject injected script in this mode. Native side will do the job. */ support_native_injected_script_declaration: is_iOSApp,
    /** Don't show welcome page in this mode. Native side will do the job. */ has_native_welcome_ui: appOnly,
    /** Firefox has a special API that can inject to the document with a higher permission. */ requires_injected_script_run_directly: "safari" === 'firefox',
    support_eth_network_switch: betaOrInsiderOnly,
    //#region Experimental features
    image_payload_marked_as_beta: appOnly,
    transak_enabled: webOnly,
    trader_zrx_enabled: webOnly,
    trader_all_api_cached_enabled: devOnly,
    metamask_support_enabled: webOnly,
    toolbox_enabled: webOnly,
    /** Prohibit the use of test networks in production */ wallet_allow_testnet: betaOrInsiderOnly || "production" !== 'production',
    wallet_mnemonic_words_backup_enabled: false,
    wallet_private_key_backup_enabled: true,
    wallet_gas_price_dialog_enable: true,
    /* construct LBP for all ERC20 tokens */ LBP_enabled: false,
    LBP_whitelist_enabled: "production" === 'production',
    plugin_switch_enabled: betaOrInsiderOnly,
    //#endregion
    EIP1159_enabled: false,
    bsc_enabled: true,
    polygon_enabled: true,
    arbitrum_enabled: true,
    //#region Functionality missing / broken
    /**
     * - iOS: WebExtension polyfill didn't implemented the dynamic permission API
     * - E2E: Cannot click the "allow" button (maybe a bug) in the Puppeteer
     */ no_web_extension_dynamic_permission_request: is_iOSApp || "safari" === 'E2E',
    has_no_WebRTC:  true || 0,
    //#endregion
    using_emoji_flag: true
};
if (false) {}


/***/ }),

/***/ 77287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qE": () => (/* reexport safe */ _components___WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "IN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.IN),
/* harmony export */   "H9": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "eD": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.eD),
/* harmony export */   "MN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.MN),
/* harmony export */   "E": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "p_": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.p_),
/* harmony export */   "ou": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.ou),
/* harmony export */   "ad": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.ad),
/* harmony export */   "$I": () => (/* reexport safe */ _suspends__WEBPACK_IMPORTED_MODULE_5__.$),
/* harmony export */   "PN": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.PN),
/* harmony export */   "qX": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.qX),
/* harmony export */   "Qn": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.Qn),
/* harmony export */   "ll": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.ll),
/* harmony export */   "YT": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.YT),
/* harmony export */   "YU": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.Y),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_11__.vU),
/* harmony export */   "c_": () => (/* reexport safe */ _getTextUILength__WEBPACK_IMPORTED_MODULE_12__.c),
/* harmony export */   "cc": () => (/* reexport safe */ _getTextUILength__WEBPACK_IMPORTED_MODULE_12__.L),
/* harmony export */   "M1": () => (/* reexport safe */ _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__.M),
/* harmony export */   "ZK": () => (/* reexport safe */ _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "ag": () => (/* reexport safe */ _i18n_next__WEBPACK_IMPORTED_MODULE_14__.a),
/* harmony export */   "J3": () => (/* reexport safe */ _memoize__WEBPACK_IMPORTED_MODULE_16__.J),
/* harmony export */   "yV": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_17__.y),
/* harmony export */   "uM": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_19__.u),
/* harmony export */   "b5": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_19__.b),
/* harmony export */   "CU": () => (/* reexport safe */ _side_effects__WEBPACK_IMPORTED_MODULE_20__.CU),
/* harmony export */   "Wu": () => (/* reexport safe */ _side_effects__WEBPACK_IMPORTED_MODULE_20__.Wu),
/* harmony export */   "Ql": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Ql),
/* harmony export */   "Uk": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Uk),
/* harmony export */   "Cw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Cw),
/* harmony export */   "Se": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Se),
/* harmony export */   "gw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.gw),
/* harmony export */   "Yu": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Yu),
/* harmony export */   "Vs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Vs),
/* harmony export */   "fy": () => (/* reexport safe */ _watcher__WEBPACK_IMPORTED_MODULE_24__.f),
/* harmony export */   "aW": () => (/* reexport safe */ _collectNodeText__WEBPACK_IMPORTED_MODULE_25__.a)
/* harmony export */ });
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5638);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7879);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33059);
/* harmony import */ var _native_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16994);
/* harmony import */ var _shadow_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99515);
/* harmony import */ var _suspends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20148);
/* harmony import */ var _type_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88066);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84934);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12139);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61893);
/* harmony import */ var _equality__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50970);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80773);
/* harmony import */ var _getTextUILength__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67552);
/* harmony import */ var _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35071);
/* harmony import */ var _i18n_next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95001);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61298);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61046);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(13017);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50023);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(27411);
/* harmony import */ var _side_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(21920);
/* harmony import */ var _createNormalReactRoot__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(37904);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8325);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(98621);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59851);
/* harmony import */ var _collectNodeText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(84497);































/***/ }),

/***/ 47713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "CB": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   "eE": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   "D4": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.D4),
/* harmony export */   "mF": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.mF),
/* harmony export */   "Pz": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.Pz),
/* harmony export */   "EK": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.EK),
/* harmony export */   "I4": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.I4),
/* harmony export */   "V8": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.V8),
/* harmony export */   "Sc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.Sc),
/* harmony export */   "eT": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.eT),
/* harmony export */   "oQ": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.oQ),
/* harmony export */   "H9": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.H9),
/* harmony export */   "FT": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.FT),
/* harmony export */   "Hq": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.Hq),
/* harmony export */   "x4": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.x4),
/* harmony export */   "bD": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.bD),
/* harmony export */   "fo": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_7__.fo),
/* harmony export */   "fg": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_7__.fg),
/* harmony export */   "Je": () => (/* reexport safe */ _manager_worker__WEBPACK_IMPORTED_MODULE_3__.J)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61182);
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87509);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11555);
/* harmony import */ var _manager_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50586);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93363);
/* harmony import */ var _PostContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76575);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64614);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63046);











/***/ }),

/***/ 61182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ CurrentSNSNetwork)
/* harmony export */ });
var CurrentSNSNetwork;
(function(CurrentSNSNetwork1) {
    CurrentSNSNetwork1[CurrentSNSNetwork1["Unknown"] = 0] = "Unknown";
    CurrentSNSNetwork1[CurrentSNSNetwork1["Facebook"] = 1] = "Facebook";
    CurrentSNSNetwork1[CurrentSNSNetwork1["Twitter"] = 2] = "Twitter";
    CurrentSNSNetwork1[CurrentSNSNetwork1["Instagram"] = 3] = "Instagram";
})(CurrentSNSNetwork || (CurrentSNSNetwork = {
}));


/***/ }),

/***/ 20786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xb": () => (/* binding */ Identifier),
/* harmony export */   "WO": () => (/* binding */ ProfileIdentifier),
/* harmony export */   "xI": () => (/* binding */ GroupIdentifier),
/* harmony export */   "_P": () => (/* binding */ PostIdentifier),
/* harmony export */   "bb": () => (/* binding */ PostIVIdentifier),
/* harmony export */   "ob": () => (/* binding */ ECKeyIdentifier),
/* harmony export */   "Np": () => (/* binding */ PersonaIdentifier)
/* harmony export */ });
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76117);
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

/***/ 55465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ fallbackLng)
/* harmony export */ });
const fallbackLng = {
    'zh-CN': [
        'zh-TW',
        'en'
    ],
    'zh-TW': [
        'zh-CN',
        'en'
    ],
    default: [
        'en'
    ]
};


/***/ }),

/***/ 47290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _fallbackRule__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "N_": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.N),
/* harmony export */   "C9": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.C)
/* harmony export */ });
/* harmony import */ var _fallbackRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55465);
/* harmony import */ var _register_ns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39271);




/***/ }),

/***/ 39874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lk": () => (/* reexport safe */ _parseURL__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "gw": () => (/* reexport safe */ _delay__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   "Vs": () => (/* reexport safe */ _timeout__WEBPACK_IMPORTED_MODULE_2__.V),
/* harmony export */   "Y0": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_3__.Y),
/* harmony export */   "s_": () => (/* reexport safe */ _pollingTask__WEBPACK_IMPORTED_MODULE_4__.s),
/* harmony export */   "Hd": () => (/* reexport safe */ _sessionStorageCache__WEBPACK_IMPORTED_MODULE_5__.H)
/* harmony export */ });
/* harmony import */ var _parseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38075);
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69460);
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58442);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6884);
/* harmony import */ var _pollingTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48967);
/* harmony import */ var _sessionStorageCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61440);








/***/ }),

/***/ 85942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
var TokenIcon = __webpack_require__(72972);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenList/index.tsx + 1 modules
var TokenList = __webpack_require__(51041);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(56752);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/CrashUI.tsx
var CrashUI = __webpack_require__(67899);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/context.ts
var context = __webpack_require__(62558);
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
var ProviderIcon = __webpack_require__(97331);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts







/***/ }),

/***/ 22466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 95197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useBlockie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77224);
/* harmony import */ var ethereum_blockies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__);


function useBlockie(address, options) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const defaultOptions = {
            seed: address,
            color: '#dfe',
            bgcolor: '#aaa'
        };
        try {
            return (0,ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__.create)({
                ...defaultOptions,
                ...options
            }).toDataURL();
        } catch  {
            return '';
        }
    }, [
        address
    ]);
}


/***/ })

}]);