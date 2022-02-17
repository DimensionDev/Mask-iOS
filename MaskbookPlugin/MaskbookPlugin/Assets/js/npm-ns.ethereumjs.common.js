"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7849],{

/***/ 39820:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.chains = exports._getInitializedChains = void 0;
var mainnet_json_1 = __importDefault(__webpack_require__(86373));
var ropsten_json_1 = __importDefault(__webpack_require__(45167));
var rinkeby_json_1 = __importDefault(__webpack_require__(34956));
var kovan_json_1 = __importDefault(__webpack_require__(3910));
var goerli_json_1 = __importDefault(__webpack_require__(33758));
var calaveras_json_1 = __importDefault(__webpack_require__(97136));
/**
 * @hidden
 */
function _getInitializedChains(customChains) {
    var e_1, _a;
    var names = {
        '1': 'mainnet',
        '3': 'ropsten',
        '4': 'rinkeby',
        '42': 'kovan',
        '5': 'goerli',
        '123': 'calaveras',
    };
    var chains = {
        mainnet: mainnet_json_1.default,
        ropsten: ropsten_json_1.default,
        rinkeby: rinkeby_json_1.default,
        kovan: kovan_json_1.default,
        goerli: goerli_json_1.default,
        calaveras: calaveras_json_1.default,
    };
    if (customChains) {
        try {
            for (var customChains_1 = __values(customChains), customChains_1_1 = customChains_1.next(); !customChains_1_1.done; customChains_1_1 = customChains_1.next()) {
                var chain = customChains_1_1.value;
                var name_1 = chain.name;
                names[chain.chainId.toString()] = name_1;
                chains[name_1] = chain;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (customChains_1_1 && !customChains_1_1.done && (_a = customChains_1.return)) _a.call(customChains_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    chains['names'] = names;
    return chains;
}
exports._getInitializedChains = _getInitializedChains;
/**
 * @deprecated this constant will be internalized (removed)
 * on next major version update
 */
exports.chains = _getInitializedChains();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 56003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EIPs = void 0;
exports.EIPs = {
    1559: __webpack_require__(46436),
    2315: __webpack_require__(66138),
    2537: __webpack_require__(85761),
    2565: __webpack_require__(2731),
    2718: __webpack_require__(56888),
    2929: __webpack_require__(34684),
    2930: __webpack_require__(33584),
    3198: __webpack_require__(3016),
    3529: __webpack_require__(47999),
    3541: __webpack_require__(54712),
    3554: __webpack_require__(83958),
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 27218:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hardforks = void 0;
exports.hardforks = [
    ['chainstart', __webpack_require__(57975)],
    ['homestead', __webpack_require__(50498)],
    ['dao', __webpack_require__(52641)],
    ['tangerineWhistle', __webpack_require__(92272)],
    ['spuriousDragon', __webpack_require__(37777)],
    ['byzantium', __webpack_require__(69374)],
    ['constantinople', __webpack_require__(92543)],
    ['petersburg', __webpack_require__(19425)],
    ['istanbul', __webpack_require__(88707)],
    ['muirGlacier', __webpack_require__(36317)],
    ['berlin', __webpack_require__(31344)],
    ['london', __webpack_require__(43748)],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 88215:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hardfork = exports.Chain = exports.CustomChain = void 0;
var events_1 = __webpack_require__(47324);
var crc_32_1 = __webpack_require__(85019);
var ethereumjs_util_1 = __webpack_require__(98257);
var chains_1 = __webpack_require__(39820);
var hardforks_1 = __webpack_require__(27218);
var eips_1 = __webpack_require__(56003);
var CustomChain;
(function (CustomChain) {
    /**
     * Polygon (Matic) Mainnet
     *
     * - [Documentation](https://docs.matic.network/docs/develop/network-details/network)
     */
    CustomChain["PolygonMainnet"] = "polygon-mainnet";
    /**
     * Polygon (Matic) Mumbai Testnet
     *
     * - [Documentation](https://docs.matic.network/docs/develop/network-details/network)
     */
    CustomChain["PolygonMumbai"] = "polygon-mumbai";
    /**
     * Arbitrum Rinkeby Testnet
     *
     * - [Documentation](https://developer.offchainlabs.com/docs/public_testnet)
     */
    CustomChain["ArbitrumRinkebyTestnet"] = "arbitrum-rinkeby-testnet";
    /**
     * xDai EVM sidechain with a native stable token
     *
     * - [Documentation](https://www.xdaichain.com/)
     */
    CustomChain["xDaiChain"] = "x-dai-chain";
})(CustomChain = exports.CustomChain || (exports.CustomChain = {}));
var Chain;
(function (Chain) {
    Chain[Chain["Mainnet"] = 1] = "Mainnet";
    Chain[Chain["Ropsten"] = 3] = "Ropsten";
    Chain[Chain["Rinkeby"] = 4] = "Rinkeby";
    Chain[Chain["Kovan"] = 42] = "Kovan";
    Chain[Chain["Goerli"] = 5] = "Goerli";
    Chain[Chain["Calaveras"] = 123] = "Calaveras";
})(Chain = exports.Chain || (exports.Chain = {}));
var Hardfork;
(function (Hardfork) {
    Hardfork["Chainstart"] = "chainstart";
    Hardfork["Homestead"] = "homestead";
    Hardfork["Dao"] = "dao";
    Hardfork["TangerineWhistle"] = "tangerineWhistle";
    Hardfork["SpuriousDragon"] = "spuriousDragon";
    Hardfork["Byzantium"] = "byzantium";
    Hardfork["Constantinople"] = "constantinople";
    Hardfork["Petersburg"] = "petersburg";
    Hardfork["Istanbul"] = "istanbul";
    Hardfork["MuirGlacier"] = "muirGlacier";
    Hardfork["Berlin"] = "berlin";
    Hardfork["London"] = "london";
})(Hardfork = exports.Hardfork || (exports.Hardfork = {}));
/**
 * Common class to access chain and hardfork parameters and to provide
 * a unified and shared view on the network and hardfork state.
 *
 * Use the {@link Common.custom} static constructor for creating simple
 * custom chain {@link Common} objects (more complete custom chain setups
 * can be created via the main constructor and the {@link CommonOpts.customChains} parameter).
 */
var Common = /** @class */ (function (_super) {
    __extends(Common, _super);
    /**
     * @constructor
     */
    function Common(opts) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this._supportedHardforks = [];
        _this._eips = [];
        _this._customChains = (_a = opts.customChains) !== null && _a !== void 0 ? _a : [];
        _this._chainParams = _this.setChain(opts.chain);
        _this.DEFAULT_HARDFORK = (_b = _this._chainParams.defaultHardfork) !== null && _b !== void 0 ? _b : Hardfork.Istanbul;
        _this._hardfork = _this.DEFAULT_HARDFORK;
        if (opts.supportedHardforks) {
            _this._supportedHardforks = opts.supportedHardforks;
        }
        if (opts.hardfork) {
            _this.setHardfork(opts.hardfork);
        }
        if (opts.eips) {
            _this.setEIPs(opts.eips);
        }
        return _this;
    }
    /**
     * Creates a {@link Common} object for a custom chain, based on a standard one.
     *
     * It uses all the {@link Chain} parameters from the {@link baseChain} option except the ones overridden
     * in a provided {@link chainParamsOrName} dictionary. Some usage example:
     *
     * ```javascript
     * Common.custom({chainId: 123})
     * ```
     *
     * There are also selected supported custom chains which can be initialized by using one of the
     * {@link CustomChains} for {@link chainParamsOrName}, e.g.:
     *
     * ```javascript
     * Common.custom(CustomChains.MaticMumbai)
     * ```
     *
     * Note that these supported custom chains only provide some base parameters (usually the chain and
     * network ID and a name) and can only be used for selected use cases (e.g. sending a tx with
     * the `@ethereumjs/tx` library to a Layer-2 chain).
     *
     * @param chainParamsOrName Custom parameter dict (`name` will default to `custom-chain`) or string with name of a supported custom chain
     * @param opts Custom chain options to set the {@link CustomCommonOpts.baseChain}, selected {@link CustomCommonOpts.hardfork} and others
     */
    Common.custom = function (chainParamsOrName, opts) {
        var _a;
        if (opts === void 0) { opts = {}; }
        var baseChain = (_a = opts.baseChain) !== null && _a !== void 0 ? _a : 'mainnet';
        var standardChainParams = __assign({}, Common._getChainParams(baseChain));
        standardChainParams['name'] = 'custom-chain';
        if (typeof chainParamsOrName !== 'string') {
            return new Common(__assign({ chain: __assign(__assign({}, standardChainParams), chainParamsOrName) }, opts));
        }
        else {
            if (chainParamsOrName === CustomChain.PolygonMainnet) {
                return Common.custom({
                    name: CustomChain.PolygonMainnet,
                    chainId: 137,
                    networkId: 137,
                });
            }
            if (chainParamsOrName === CustomChain.PolygonMumbai) {
                return Common.custom({
                    name: CustomChain.PolygonMumbai,
                    chainId: 80001,
                    networkId: 80001,
                });
            }
            if (chainParamsOrName === CustomChain.ArbitrumRinkebyTestnet) {
                return Common.custom({
                    name: CustomChain.ArbitrumRinkebyTestnet,
                    chainId: 421611,
                    networkId: 421611,
                });
            }
            if (chainParamsOrName === CustomChain.xDaiChain) {
                return Common.custom({
                    name: CustomChain.xDaiChain,
                    chainId: 100,
                    networkId: 100,
                });
            }
            throw new Error("Custom chain " + chainParamsOrName + " not supported");
        }
    };
    /**
     * Creates a {@link Common} object for a custom chain, based on a standard one. It uses all the `Chain`
     * params from {@link baseChain} except the ones overridden in {@link customChainParams}.
     *
     * @deprecated Use {@link Common.custom} instead
     *
     * @param baseChain The name (`mainnet`) or id (`1`) of a standard chain used to base the custom
     * chain params on.
     * @param customChainParams The custom parameters of the chain.
     * @param hardfork String identifier ('byzantium') for hardfork (optional)
     * @param supportedHardforks Limit parameter returns to the given hardforks (optional)
     */
    Common.forCustomChain = function (baseChain, customChainParams, hardfork, supportedHardforks) {
        var standardChainParams = Common._getChainParams(baseChain);
        return new Common({
            chain: __assign(__assign({}, standardChainParams), customChainParams),
            hardfork: hardfork,
            supportedHardforks: supportedHardforks,
        });
    };
    /**
     * Static method to determine if a {@link chainId} is supported as a standard chain
     * @param chainId BN id (`1`) of a standard chain
     * @returns boolean
     */
    Common.isSupportedChainId = function (chainId) {
        var initializedChains = chains_1._getInitializedChains();
        return Boolean(initializedChains['names'][chainId.toString()]);
    };
    Common._getChainParams = function (chain, customChains) {
        var initializedChains = chains_1._getInitializedChains(customChains);
        if (typeof chain === 'number' || ethereumjs_util_1.BN.isBN(chain)) {
            chain = chain.toString();
            if (initializedChains['names'][chain]) {
                var name_1 = initializedChains['names'][chain];
                return initializedChains[name_1];
            }
            throw new Error("Chain with ID " + chain + " not supported");
        }
        if (initializedChains[chain]) {
            return initializedChains[chain];
        }
        throw new Error("Chain with name " + chain + " not supported");
    };
    /**
     * Sets the chain
     * @param chain String ('mainnet') or Number (1) chain
     *     representation. Or, a Dictionary of chain parameters for a private network.
     * @returns The dictionary with parameters set as chain
     */
    Common.prototype.setChain = function (chain) {
        var e_1, _a;
        if (typeof chain === 'number' || typeof chain === 'string' || ethereumjs_util_1.BN.isBN(chain)) {
            this._chainParams = Common._getChainParams(chain, this._customChains);
        }
        else if (typeof chain === 'object') {
            if (this._customChains.length > 0) {
                throw new Error('Chain must be a string, number, or BN when initialized with customChains passed in');
            }
            var required = ['networkId', 'genesis', 'hardforks', 'bootstrapNodes'];
            try {
                for (var required_1 = __values(required), required_1_1 = required_1.next(); !required_1_1.done; required_1_1 = required_1.next()) {
                    var param = required_1_1.value;
                    if (chain[param] === undefined) {
                        throw new Error("Missing required chain parameter: " + param);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (required_1_1 && !required_1_1.done && (_a = required_1.return)) _a.call(required_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._chainParams = chain;
        }
        else {
            throw new Error('Wrong input format');
        }
        return this._chainParams;
    };
    /**
     * Sets the hardfork to get params for
     * @param hardfork String identifier (e.g. 'byzantium')
     */
    Common.prototype.setHardfork = function (hardfork) {
        var e_2, _a;
        if (!this._isSupportedHardfork(hardfork)) {
            throw new Error("Hardfork " + hardfork + " not set as supported in supportedHardforks");
        }
        var existing = false;
        try {
            for (var HARDFORK_CHANGES_1 = __values(hardforks_1.hardforks), HARDFORK_CHANGES_1_1 = HARDFORK_CHANGES_1.next(); !HARDFORK_CHANGES_1_1.done; HARDFORK_CHANGES_1_1 = HARDFORK_CHANGES_1.next()) {
                var hfChanges = HARDFORK_CHANGES_1_1.value;
                if (hfChanges[0] === hardfork) {
                    if (this._hardfork !== hardfork) {
                        this._hardfork = hardfork;
                        this.emit('hardforkChanged', hardfork);
                    }
                    existing = true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (HARDFORK_CHANGES_1_1 && !HARDFORK_CHANGES_1_1.done && (_a = HARDFORK_CHANGES_1.return)) _a.call(HARDFORK_CHANGES_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (!existing) {
            throw new Error("Hardfork with name " + hardfork + " not supported");
        }
    };
    /**
     * Returns the hardfork based on the block number provided
     * @param blockNumber
     * @returns The name of the HF
     */
    Common.prototype.getHardforkByBlockNumber = function (blockNumber) {
        var e_3, _a;
        blockNumber = ethereumjs_util_1.toType(blockNumber, ethereumjs_util_1.TypeOutput.BN);
        var hardfork = Hardfork.Chainstart;
        try {
            for (var _b = __values(this.hardforks()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var hf = _c.value;
                // Skip comparison for not applied HFs
                if (hf.block === null) {
                    continue;
                }
                if (blockNumber.gte(new ethereumjs_util_1.BN(hf.block))) {
                    hardfork = hf.name;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return hardfork;
    };
    /**
     * Sets a new hardfork based on the block number provided
     * @param blockNumber
     * @returns The name of the HF set
     */
    Common.prototype.setHardforkByBlockNumber = function (blockNumber) {
        blockNumber = ethereumjs_util_1.toType(blockNumber, ethereumjs_util_1.TypeOutput.BN);
        var hardfork = this.getHardforkByBlockNumber(blockNumber);
        this.setHardfork(hardfork);
        return hardfork;
    };
    /**
     * Internal helper function to choose between hardfork set and hardfork provided as param
     * @param hardfork Hardfork given to function as a parameter
     * @returns Hardfork chosen to be used
     */
    Common.prototype._chooseHardfork = function (hardfork, onlySupported) {
        if (onlySupported === void 0) { onlySupported = true; }
        if (!hardfork) {
            hardfork = this._hardfork;
        }
        else if (onlySupported && !this._isSupportedHardfork(hardfork)) {
            throw new Error("Hardfork " + hardfork + " not set as supported in supportedHardforks");
        }
        return hardfork;
    };
    /**
     * Internal helper function, returns the params for the given hardfork for the chain set
     * @param hardfork Hardfork name
     * @returns Dictionary with hardfork params
     */
    Common.prototype._getHardfork = function (hardfork) {
        var e_4, _a;
        var hfs = this.hardforks();
        try {
            for (var hfs_1 = __values(hfs), hfs_1_1 = hfs_1.next(); !hfs_1_1.done; hfs_1_1 = hfs_1.next()) {
                var hf = hfs_1_1.value;
                if (hf['name'] === hardfork)
                    return hf;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (hfs_1_1 && !hfs_1_1.done && (_a = hfs_1.return)) _a.call(hfs_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        throw new Error("Hardfork " + hardfork + " not defined for chain " + this.chainName());
    };
    /**
     * Internal helper function to check if a hardfork is set to be supported by the library
     * @param hardfork Hardfork name
     * @returns True if hardfork is supported
     */
    Common.prototype._isSupportedHardfork = function (hardfork) {
        var e_5, _a;
        if (this._supportedHardforks.length > 0) {
            try {
                for (var _b = __values(this._supportedHardforks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var supportedHf = _c.value;
                    if (hardfork === supportedHf)
                        return true;
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        else {
            return true;
        }
        return false;
    };
    /**
     * Sets the active EIPs
     * @param eips
     */
    Common.prototype.setEIPs = function (eips) {
        var e_6, _a;
        var _this = this;
        if (eips === void 0) { eips = []; }
        var _loop_1 = function (eip) {
            if (!(eip in eips_1.EIPs)) {
                throw new Error(eip + " not supported");
            }
            var minHF = this_1.gteHardfork(eips_1.EIPs[eip]['minimumHardfork']);
            if (!minHF) {
                throw new Error(eip + " cannot be activated on hardfork " + this_1.hardfork() + ", minimumHardfork: " + minHF);
            }
            if (eips_1.EIPs[eip].requiredEIPs) {
                // eslint-disable-next-line prettier/prettier
                eips_1.EIPs[eip].requiredEIPs.forEach(function (elem) {
                    if (!(eips.includes(elem) || _this.isActivatedEIP(elem))) {
                        throw new Error(eip + " requires EIP " + elem + ", but is not included in the EIP list");
                    }
                });
            }
        };
        var this_1 = this;
        try {
            for (var eips_2 = __values(eips), eips_2_1 = eips_2.next(); !eips_2_1.done; eips_2_1 = eips_2.next()) {
                var eip = eips_2_1.value;
                _loop_1(eip);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (eips_2_1 && !eips_2_1.done && (_a = eips_2.return)) _a.call(eips_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
        this._eips = eips;
    };
    /**
     * Returns a parameter for the current chain setup
     *
     * If the parameter is present in an EIP, the EIP always takes precendence.
     * Otherwise the parameter if taken from the latest applied HF with
     * a change on the respective parameter.
     *
     * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @returns The value requested or `null` if not found
     */
    Common.prototype.param = function (topic, name) {
        var e_7, _a;
        // TODO: consider the case that different active EIPs
        // can change the same parameter
        var value = null;
        try {
            for (var _b = __values(this._eips), _c = _b.next(); !_c.done; _c = _b.next()) {
                var eip = _c.value;
                value = this.paramByEIP(topic, name, eip);
                if (value !== null) {
                    return value;
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return this.paramByHardfork(topic, name, this._hardfork);
    };
    /**
     * Returns the parameter corresponding to a hardfork
     * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @param hardfork Hardfork name
     * @returns The value requested or `null` if not found
     */
    Common.prototype.paramByHardfork = function (topic, name, hardfork) {
        var e_8, _a, e_9, _b;
        hardfork = this._chooseHardfork(hardfork);
        var value = null;
        try {
            for (var HARDFORK_CHANGES_2 = __values(hardforks_1.hardforks), HARDFORK_CHANGES_2_1 = HARDFORK_CHANGES_2.next(); !HARDFORK_CHANGES_2_1.done; HARDFORK_CHANGES_2_1 = HARDFORK_CHANGES_2.next()) {
                var hfChanges = HARDFORK_CHANGES_2_1.value;
                // EIP-referencing HF file (e.g. berlin.json)
                if (hfChanges[1].hasOwnProperty('eips')) { // eslint-disable-line
                    var hfEIPs = hfChanges[1]['eips'];
                    try {
                        for (var hfEIPs_1 = (e_9 = void 0, __values(hfEIPs)), hfEIPs_1_1 = hfEIPs_1.next(); !hfEIPs_1_1.done; hfEIPs_1_1 = hfEIPs_1.next()) {
                            var eip = hfEIPs_1_1.value;
                            var valueEIP = this.paramByEIP(topic, name, eip);
                            value = valueEIP !== null ? valueEIP : value;
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (hfEIPs_1_1 && !hfEIPs_1_1.done && (_b = hfEIPs_1.return)) _b.call(hfEIPs_1);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                    // Paramater-inlining HF file (e.g. istanbul.json)
                }
                else {
                    if (!hfChanges[1][topic]) {
                        throw new Error("Topic " + topic + " not defined");
                    }
                    if (hfChanges[1][topic][name] !== undefined) {
                        value = hfChanges[1][topic][name].v;
                    }
                }
                if (hfChanges[0] === hardfork)
                    break;
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (HARDFORK_CHANGES_2_1 && !HARDFORK_CHANGES_2_1.done && (_a = HARDFORK_CHANGES_2.return)) _a.call(HARDFORK_CHANGES_2);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return value;
    };
    /**
     * Returns a parameter corresponding to an EIP
     * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @param eip Number of the EIP
     * @returns The value requested or `null` if not found
     */
    Common.prototype.paramByEIP = function (topic, name, eip) {
        if (!(eip in eips_1.EIPs)) {
            throw new Error(eip + " not supported");
        }
        var eipParams = eips_1.EIPs[eip];
        if (!(topic in eipParams)) {
            throw new Error("Topic " + topic + " not defined");
        }
        if (eipParams[topic][name] === undefined) {
            return null;
        }
        var value = eipParams[topic][name].v;
        return value;
    };
    /**
     * Returns a parameter for the hardfork active on block number
     * @param topic Parameter topic
     * @param name Parameter name
     * @param blockNumber Block number
     */
    Common.prototype.paramByBlock = function (topic, name, blockNumber) {
        var activeHfs = this.activeHardforks(blockNumber);
        var hardfork = activeHfs[activeHfs.length - 1]['name'];
        return this.paramByHardfork(topic, name, hardfork);
    };
    /**
     * Checks if an EIP is activated by either being included in the EIPs
     * manually passed in with the {@link CommonOpts.eips} or in a
     * hardfork currently being active
     *
     * Note: this method only works for EIPs being supported
     * by the {@link CommonOpts.eips} constructor option
     * @param eip
     */
    Common.prototype.isActivatedEIP = function (eip) {
        var e_10, _a;
        if (this.eips().includes(eip)) {
            return true;
        }
        try {
            for (var HARDFORK_CHANGES_3 = __values(hardforks_1.hardforks), HARDFORK_CHANGES_3_1 = HARDFORK_CHANGES_3.next(); !HARDFORK_CHANGES_3_1.done; HARDFORK_CHANGES_3_1 = HARDFORK_CHANGES_3.next()) {
                var hfChanges = HARDFORK_CHANGES_3_1.value;
                var hf = hfChanges[1];
                if (this.gteHardfork(hf['name']) && 'eips' in hf) {
                    if (hf['eips'].includes(eip)) {
                        return true;
                    }
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (HARDFORK_CHANGES_3_1 && !HARDFORK_CHANGES_3_1.done && (_a = HARDFORK_CHANGES_3.return)) _a.call(HARDFORK_CHANGES_3);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return false;
    };
    /**
     * Checks if set or provided hardfork is active on block number
     * @param hardfork Hardfork name or null (for HF set)
     * @param blockNumber
     * @param opts Hardfork options (onlyActive unused)
     * @returns True if HF is active on block number
     */
    Common.prototype.hardforkIsActiveOnBlock = function (hardfork, blockNumber, opts) {
        var _a;
        if (opts === void 0) { opts = {}; }
        blockNumber = ethereumjs_util_1.toType(blockNumber, ethereumjs_util_1.TypeOutput.BN);
        var onlySupported = (_a = opts.onlySupported) !== null && _a !== void 0 ? _a : false;
        hardfork = this._chooseHardfork(hardfork, onlySupported);
        var hfBlock = this.hardforkBlockBN(hardfork);
        if (hfBlock && blockNumber.gte(hfBlock)) {
            return true;
        }
        return false;
    };
    /**
     * Alias to hardforkIsActiveOnBlock when hardfork is set
     * @param blockNumber
     * @param opts Hardfork options (onlyActive unused)
     * @returns True if HF is active on block number
     */
    Common.prototype.activeOnBlock = function (blockNumber, opts) {
        return this.hardforkIsActiveOnBlock(null, blockNumber, opts);
    };
    /**
     * Sequence based check if given or set HF1 is greater than or equal HF2
     * @param hardfork1 Hardfork name or null (if set)
     * @param hardfork2 Hardfork name
     * @param opts Hardfork options
     * @returns True if HF1 gte HF2
     */
    Common.prototype.hardforkGteHardfork = function (hardfork1, hardfork2, opts) {
        var e_11, _a;
        if (opts === void 0) { opts = {}; }
        var onlyActive = opts.onlyActive === undefined ? false : opts.onlyActive;
        hardfork1 = this._chooseHardfork(hardfork1, opts.onlySupported);
        var hardforks;
        if (onlyActive) {
            hardforks = this.activeHardforks(null, opts);
        }
        else {
            hardforks = this.hardforks();
        }
        var posHf1 = -1, posHf2 = -1;
        var index = 0;
        try {
            for (var hardforks_2 = __values(hardforks), hardforks_2_1 = hardforks_2.next(); !hardforks_2_1.done; hardforks_2_1 = hardforks_2.next()) {
                var hf = hardforks_2_1.value;
                if (hf['name'] === hardfork1)
                    posHf1 = index;
                if (hf['name'] === hardfork2)
                    posHf2 = index;
                index += 1;
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (hardforks_2_1 && !hardforks_2_1.done && (_a = hardforks_2.return)) _a.call(hardforks_2);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return posHf1 >= posHf2 && posHf2 !== -1;
    };
    /**
     * Alias to hardforkGteHardfork when hardfork is set
     * @param hardfork Hardfork name
     * @param opts Hardfork options
     * @returns True if hardfork set is greater than hardfork provided
     */
    Common.prototype.gteHardfork = function (hardfork, opts) {
        return this.hardforkGteHardfork(null, hardfork, opts);
    };
    /**
     * Checks if given or set hardfork is active on the chain
     * @param hardfork Hardfork name, optional if HF set
     * @param opts Hardfork options (onlyActive unused)
     * @returns True if hardfork is active on the chain
     */
    Common.prototype.hardforkIsActiveOnChain = function (hardfork, opts) {
        var e_12, _a;
        var _b;
        if (opts === void 0) { opts = {}; }
        var onlySupported = (_b = opts.onlySupported) !== null && _b !== void 0 ? _b : false;
        hardfork = this._chooseHardfork(hardfork, onlySupported);
        try {
            for (var _c = __values(this.hardforks()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var hf = _d.value;
                if (hf['name'] === hardfork && hf['block'] !== null)
                    return true;
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return false;
    };
    /**
     * Returns the active hardfork switches for the current chain
     * @param blockNumber up to block if provided, otherwise for the whole chain
     * @param opts Hardfork options (onlyActive unused)
     * @return Array with hardfork arrays
     */
    Common.prototype.activeHardforks = function (blockNumber, opts) {
        var e_13, _a;
        if (opts === void 0) { opts = {}; }
        var activeHardforks = [];
        var hfs = this.hardforks();
        try {
            for (var hfs_2 = __values(hfs), hfs_2_1 = hfs_2.next(); !hfs_2_1.done; hfs_2_1 = hfs_2.next()) {
                var hf = hfs_2_1.value;
                if (hf['block'] === null)
                    continue;
                if (blockNumber !== undefined && blockNumber !== null && blockNumber < hf['block'])
                    break;
                if (opts.onlySupported && !this._isSupportedHardfork(hf['name']))
                    continue;
                activeHardforks.push(hf);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (hfs_2_1 && !hfs_2_1.done && (_a = hfs_2.return)) _a.call(hfs_2);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return activeHardforks;
    };
    /**
     * Returns the latest active hardfork name for chain or block or throws if unavailable
     * @param blockNumber up to block if provided, otherwise for the whole chain
     * @param opts Hardfork options (onlyActive unused)
     * @return Hardfork name
     */
    Common.prototype.activeHardfork = function (blockNumber, opts) {
        if (opts === void 0) { opts = {}; }
        var activeHardforks = this.activeHardforks(blockNumber, opts);
        if (activeHardforks.length > 0) {
            return activeHardforks[activeHardforks.length - 1]['name'];
        }
        else {
            throw new Error("No (supported) active hardfork found");
        }
    };
    /**
     * Returns the hardfork change block for hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number
     * @deprecated Please use hardforkBlockBN() for large number support
     */
    Common.prototype.hardforkBlock = function (hardfork) {
        return ethereumjs_util_1.toType(this.hardforkBlockBN(hardfork), ethereumjs_util_1.TypeOutput.Number);
    };
    /**
     * Returns the hardfork change block for hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number
     */
    Common.prototype.hardforkBlockBN = function (hardfork) {
        hardfork = this._chooseHardfork(hardfork, false);
        return new ethereumjs_util_1.BN(this._getHardfork(hardfork)['block']);
    };
    /**
     * True if block number provided is the hardfork (given or set) change block
     * @param blockNumber Number of the block to check
     * @param hardfork Hardfork name, optional if HF set
     * @returns True if blockNumber is HF block
     */
    Common.prototype.isHardforkBlock = function (blockNumber, hardfork) {
        blockNumber = ethereumjs_util_1.toType(blockNumber, ethereumjs_util_1.TypeOutput.BN);
        hardfork = this._chooseHardfork(hardfork, false);
        return this.hardforkBlockBN(hardfork).eq(blockNumber);
    };
    /**
     * Returns the change block for the next hardfork after the hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number or null if not available
     * @deprecated Please use nextHardforkBlockBN() for large number support
     */
    Common.prototype.nextHardforkBlock = function (hardfork) {
        var block = this.nextHardforkBlockBN(hardfork);
        return block === null ? null : ethereumjs_util_1.toType(block, ethereumjs_util_1.TypeOutput.Number);
    };
    /**
     * Returns the change block for the next hardfork after the hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number or null if not available
     */
    Common.prototype.nextHardforkBlockBN = function (hardfork) {
        hardfork = this._chooseHardfork(hardfork, false);
        var hfBlock = this.hardforkBlockBN(hardfork);
        // Next fork block number or null if none available
        // Logic: if accumulator is still null and on the first occurence of
        // a block greater than the current hfBlock set the accumulator,
        // pass on the accumulator as the final result from this time on
        var nextHfBlock = this.hardforks().reduce(function (acc, hf) {
            var block = new ethereumjs_util_1.BN(hf.block);
            return block.gt(hfBlock) && acc === null ? block : acc;
        }, null);
        return nextHfBlock;
    };
    /**
     * True if block number provided is the hardfork change block following the hardfork given or set
     * @param blockNumber Number of the block to check
     * @param hardfork Hardfork name, optional if HF set
     * @returns True if blockNumber is HF block
     */
    Common.prototype.isNextHardforkBlock = function (blockNumber, hardfork) {
        blockNumber = ethereumjs_util_1.toType(blockNumber, ethereumjs_util_1.TypeOutput.BN);
        hardfork = this._chooseHardfork(hardfork, false);
        var nextHardforkBlock = this.nextHardforkBlockBN(hardfork);
        return nextHardforkBlock === null ? false : nextHardforkBlock.eq(blockNumber);
    };
    /**
     * Internal helper function to calculate a fork hash
     * @param hardfork Hardfork name
     * @returns Fork hash as hex string
     */
    Common.prototype._calcForkHash = function (hardfork) {
        var e_14, _a;
        var genesis = Buffer.from(this.genesis().hash.substr(2), 'hex');
        var hfBuffer = Buffer.alloc(0);
        var prevBlock = 0;
        try {
            for (var _b = __values(this.hardforks()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var hf = _c.value;
                var block = hf.block;
                // Skip for chainstart (0), not applied HFs (null) and
                // when already applied on same block number HFs
                if (block !== 0 && block !== null && block !== prevBlock) {
                    var hfBlockBuffer = Buffer.from(block.toString(16).padStart(16, '0'), 'hex');
                    hfBuffer = Buffer.concat([hfBuffer, hfBlockBuffer]);
                }
                if (hf.name === hardfork)
                    break;
                prevBlock = block;
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_14) throw e_14.error; }
        }
        var inputBuffer = Buffer.concat([genesis, hfBuffer]);
        // CRC32 delivers result as signed (negative) 32-bit integer,
        // convert to hex string
        var forkhash = ethereumjs_util_1.intToBuffer(crc_32_1.buf(inputBuffer) >>> 0).toString('hex');
        return "0x" + forkhash;
    };
    /**
     * Returns an eth/64 compliant fork hash (EIP-2124)
     * @param hardfork Hardfork name, optional if HF set
     */
    Common.prototype.forkHash = function (hardfork) {
        hardfork = this._chooseHardfork(hardfork, false);
        var data = this._getHardfork(hardfork);
        if (data['block'] === null) {
            var msg = 'No fork hash calculation possible for non-applied or future hardfork';
            throw new Error(msg);
        }
        if (data['forkHash'] !== undefined) {
            return data['forkHash'];
        }
        return this._calcForkHash(hardfork);
    };
    /**
     *
     * @param forkHash Fork hash as a hex string
     * @returns Array with hardfork data (name, block, forkHash)
     */
    Common.prototype.hardforkForForkHash = function (forkHash) {
        var resArray = this.hardforks().filter(function (hf) {
            return hf.forkHash === forkHash;
        });
        return resArray.length >= 1 ? resArray[resArray.length - 1] : null;
    };
    /**
     * Returns the Genesis parameters of current chain
     * @returns Genesis dictionary
     */
    Common.prototype.genesis = function () {
        return this._chainParams['genesis'];
    };
    /**
     * Returns the hardforks for current chain
     * @returns {Array} Array with arrays of hardforks
     */
    Common.prototype.hardforks = function () {
        return this._chainParams['hardforks'];
    };
    /**
     * Returns bootstrap nodes for the current chain
     * @returns {Dictionary} Dict with bootstrap nodes
     */
    Common.prototype.bootstrapNodes = function () {
        return this._chainParams['bootstrapNodes'];
    };
    /**
     * Returns DNS networks for the current chain
     * @returns {String[]} Array of DNS ENR urls
     */
    Common.prototype.dnsNetworks = function () {
        return this._chainParams['dnsNetworks'];
    };
    /**
     * Returns the hardfork set
     * @returns Hardfork name
     */
    Common.prototype.hardfork = function () {
        return this._hardfork;
    };
    /**
     * Returns the Id of current chain
     * @returns chain Id
     * @deprecated Please use chainIdBN() for large number support
     */
    Common.prototype.chainId = function () {
        return ethereumjs_util_1.toType(this.chainIdBN(), ethereumjs_util_1.TypeOutput.Number);
    };
    /**
     * Returns the Id of current chain
     * @returns chain Id
     */
    Common.prototype.chainIdBN = function () {
        return new ethereumjs_util_1.BN(this._chainParams['chainId']);
    };
    /**
     * Returns the name of current chain
     * @returns chain name (lower case)
     */
    Common.prototype.chainName = function () {
        return this._chainParams['name'];
    };
    /**
     * Returns the Id of current network
     * @returns network Id
     * @deprecated Please use networkIdBN() for large number support
     */
    Common.prototype.networkId = function () {
        return ethereumjs_util_1.toType(this.networkIdBN(), ethereumjs_util_1.TypeOutput.Number);
    };
    /**
     * Returns the Id of current network
     * @returns network Id
     */
    Common.prototype.networkIdBN = function () {
        return new ethereumjs_util_1.BN(this._chainParams['networkId']);
    };
    /**
     * Returns the active EIPs
     * @returns List of EIPs
     */
    Common.prototype.eips = function () {
        return this._eips;
    };
    /**
     * Returns the consensus type of the network
     * Possible values: "pow"|"poa"
     */
    Common.prototype.consensusType = function () {
        return this._chainParams['consensus']['type'];
    };
    /**
     * Returns the concrete consensus implementation
     * algorithm or protocol for the network
     * e.g. "ethash" for "pow" consensus type or
     * "clique" for "poa" consensus type
     */
    Common.prototype.consensusAlgorithm = function () {
        return this._chainParams['consensus']['algorithm'];
    };
    /**
     * Returns a dictionary with consensus configuration
     * parameters based on the consensus algorithm
     *
     * Expected returns (parameters must be present in
     * the respective chain json files):
     *
     * ethash: -
     * clique: period, epoch
     * aura: -
     */
    Common.prototype.consensusConfig = function () {
        return this._chainParams['consensus'][this.consensusAlgorithm()];
    };
    /**
     * Returns a deep copy of this {@link Common} instance.
     */
    Common.prototype.copy = function () {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    };
    return Common;
}(events_1.EventEmitter));
exports.default = Common;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 97136:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"calaveras","chainId":123,"networkId":123,"defaultHardfork":"berlin","consensus":{"type":"poa","algorithm":"clique","clique":{"period":30,"epoch":30000}},"comment":"The Calaveras testnet chain","url":"https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/client-integration-testnets/calaveras.md","genesis":{"hash":"0xeb9233d066c275efcdfed8037f4fc082770176aefdbcb7691c71da412a5670f2","gasLimit":"0x47b760","difficulty":"0x1","nonce":"0x0000000000000000","extraData":"0x00000000000000000000000000000000000000000000000000000000000000005211cea3870c7ba7c6c44b185e62eecdb864cd8c560228ce57d31efbf64c200b2c200aacec78cf17a7148e784fe95a7a750335f8b9572ee28d72e7650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","stateRoot":"0x664c93de37eb4a72953ea42b8c046cdb64c9f0b0bca5505ade8d970d49ebdb8c","timestamp":"0x60b3877f"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xe34c4aff"},{"name":"homestead","block":0,"forkHash":"0xe34c4aff"},{"name":"dao","block":null,"forkHash":"0xe34c4aff"},{"name":"tangerineWhistle","block":0,"forkHash":"0xe34c4aff"},{"name":"spuriousDragon","block":0,"forkHash":"0xe34c4aff"},{"name":"byzantium","block":0,"forkHash":"0xe34c4aff"},{"name":"constantinople","block":0,"forkHash":"0xe34c4aff"},{"name":"petersburg","block":0,"forkHash":"0xe34c4aff"},{"name":"istanbul","block":0,"forkHash":"0xe34c4aff"},{"name":"berlin","block":0,"forkHash":"0xe34c4aff"},{"name":"london","block":500,"forkHash":"0x173783e4"}],"bootstrapNodes":[{"ip":"3.21.156.138","port":30303,"id":"39eb08bbfad87481553c471a63ff2a4b4885fffa4ff50f1cf46744d9ad6e2f764ede146fe4df563fa9ccda1a46b9b1a88fb08135e1bf1d71b320912499da773d","location":"","comment":"Calaveras bootnode 1"},{"ip":"3.9.20.133","port":30303,"id":"9e1096aa59862a6f164994cb5cb16f5124d6c992cdbf4535ff7dea43ea1512afe5448dca9df1b7ab0726129603f1a3336b631e4d7a1a44c94daddd03241587f9","location":"","comment":"Calaveras bootnode 2"}]}');

/***/ }),

/***/ 33758:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"goerli","chainId":5,"networkId":5,"defaultHardfork":"istanbul","consensus":{"type":"poa","algorithm":"clique","clique":{"period":15,"epoch":30000}},"comment":"Cross-client PoA test network","url":"https://github.com/goerli/testnet","genesis":{"hash":"0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a","timestamp":"0x5c51a607","gasLimit":10485760,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","stateRoot":"0x5d6cded585e73c4e322c30c2f782a336316f17dd85a4863b9d838d2d4b8b3008"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xa3f5ab08"},{"name":"homestead","block":0,"forkHash":"0xa3f5ab08"},{"name":"dao","block":null,"forkHash":"0xa3f5ab08"},{"name":"tangerineWhistle","block":0,"forkHash":"0xa3f5ab08"},{"name":"spuriousDragon","block":0,"forkHash":"0xa3f5ab08"},{"name":"byzantium","block":0,"forkHash":"0xa3f5ab08"},{"name":"constantinople","block":0,"forkHash":"0xa3f5ab08"},{"name":"petersburg","block":0,"forkHash":"0xa3f5ab08"},{"name":"istanbul","block":1561651,"forkHash":"0xc25efa5c"},{"name":"berlin","block":4460644,"forkHash":"0x757a1c47"},{"name":"london","block":5062605,"forkHash":"0xb8c6299d"}],"bootstrapNodes":[{"ip":"51.141.78.53","port":30303,"id":"011f758e6552d105183b1761c5e2dea0111bc20fd5f6422bc7f91e0fabbec9a6595caf6239b37feb773dddd3f87240d99d859431891e4a642cf2a0a9e6cbb98a","location":"","comment":"Upstream bootnode 1"},{"ip":"13.93.54.137","port":30303,"id":"176b9417f511d05b6b2cf3e34b756cf0a7096b3094572a8f6ef4cdcb9d1f9d00683bf0f83347eebdf3b81c3521c2332086d9592802230bf528eaf606a1d9677b","location":"","comment":"Upstream bootnode 2"},{"ip":"94.237.54.114","port":30313,"id":"46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291","location":"","comment":"Upstream bootnode 3"},{"ip":"18.218.250.66","port":30313,"id":"b5948a2d3e9d486c4d75bf32713221c2bd6cf86463302339299bd227dc2e276cd5a1c7ca4f43a0e9122fe9af884efed563bd2a1fd28661f3b5f5ad7bf1de5949","location":"","comment":"Upstream bootnode 4"},{"ip":"3.11.147.67","port":30303,"id":"a61215641fb8714a373c80edbfa0ea8878243193f57c96eeb44d0bc019ef295abd4e044fd619bfc4c59731a73fb79afe84e9ab6da0c743ceb479cbb6d263fa91","location":"","comment":"Ethereum Foundation bootnode"},{"ip":"51.15.116.226","port":30303,"id":"a869b02cec167211fb4815a82941db2e7ed2936fd90e78619c53eb17753fcf0207463e3419c264e2a1dd8786de0df7e68cf99571ab8aeb7c4e51367ef186b1dd","location":"","comment":"Goerli Initiative bootnode"},{"ip":"51.15.119.157","port":30303,"id":"807b37ee4816ecf407e9112224494b74dd5933625f655962d892f2f0f02d7fbbb3e2a94cf87a96609526f30c998fd71e93e2f53015c558ffc8b03eceaf30ee33","location":"","comment":"Goerli Initiative bootnode"},{"ip":"51.15.119.157","port":40303,"id":"a59e33ccd2b3e52d578f1fbd70c6f9babda2650f0760d6ff3b37742fdcdfdb3defba5d56d315b40c46b70198c7621e63ffa3f987389c7118634b0fefbbdfa7fd","location":"","comment":"Goerli Initiative bootnode"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net"]}');

/***/ }),

/***/ 3910:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"kovan","chainId":42,"networkId":42,"defaultHardfork":"istanbul","consensus":{"type":"poa","algorithm":"aura","aura":{}},"comment":"Parity PoA test network","url":"https://kovan-testnet.github.io/website/","genesis":{"hash":"0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9","timestamp":null,"gasLimit":6000000,"difficulty":131072,"nonce":"0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","extraData":"0x","stateRoot":"0x2480155b48a1cea17d67dbfdfaafe821c1d19cdd478c5358e8ec56dec24502b2"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x010ffe56"},{"name":"homestead","block":0,"forkHash":"0x010ffe56"},{"name":"dao","block":null,"forkHash":"0x010ffe56"},{"name":"tangerineWhistle","block":0,"forkHash":"0x010ffe56"},{"name":"spuriousDragon","block":0,"forkHash":"0x010ffe56"},{"name":"byzantium","block":5067000,"forkHash":"0x7f83c620"},{"name":"constantinople","block":9200000,"forkHash":"0xa94e3dc4"},{"name":"petersburg","block":10255201,"forkHash":"0x186874aa"},{"name":"istanbul","block":14111141,"forkHash":"0x7f6599a6"},{"name":"berlin","block":null,"forkHash":null},{"name":"london","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"116.203.116.241","port":30303,"id":"16898006ba2cd4fa8bf9a3dfe32684c178fa861df144bfc21fe800dc4838a03e342056951fa9fd533dcb0be1219e306106442ff2cf1f7e9f8faa5f2fc1a3aa45","location":"","comment":"1"},{"ip":"3.217.96.11","port":30303,"id":"2909846f78c37510cc0e306f185323b83bb2209e5ff4fdd279d93c60e3f365e3c6e62ad1d2133ff11f9fd6d23ad9c3dad73bb974d53a22f7d1ac5b7dea79d0b0","location":"","comment":"2"},{"ip":"108.61.170.124","port":30303,"id":"740e1c8ea64e71762c71a463a04e2046070a0c9394fcab5891d41301dc473c0cff00ebab5a9bc87fbcb610ab98ac18225ff897bc8b7b38def5975d5ceb0a7d7c","location":"","comment":"3"},{"ip":"157.230.31.163","port":30303,"id":"2909846f78c37510cc0e306f185323b83bb2209e5ff4fdd279d93c60e3f365e3c6e62ad1d2133ff11f9fd6d23ad9c3dad73bb974d53a22f7d1ac5b7dea79d0b0","location":"","comment":"4"}]}');

/***/ }),

/***/ 86373:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"mainnet","chainId":1,"networkId":1,"defaultHardfork":"istanbul","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"The Ethereum main chain","url":"https://ethstats.net/","genesis":{"hash":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","timestamp":null,"gasLimit":5000,"difficulty":17179869184,"nonce":"0x0000000000000042","extraData":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","stateRoot":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xfc64ec04"},{"name":"homestead","block":1150000,"forkHash":"0x97c2c34c"},{"name":"dao","block":1920000,"forkHash":"0x91d1f948"},{"name":"tangerineWhistle","block":2463000,"forkHash":"0x7a64da13"},{"name":"spuriousDragon","block":2675000,"forkHash":"0x3edd5b10"},{"name":"byzantium","block":4370000,"forkHash":"0xa00bc324"},{"name":"constantinople","block":7280000,"forkHash":"0x668db0af"},{"name":"petersburg","block":7280000,"forkHash":"0x668db0af"},{"name":"istanbul","block":9069000,"forkHash":"0x879d6e30"},{"name":"muirGlacier","block":9200000,"forkHash":"0xe029e991"},{"name":"berlin","block":12244000,"forkHash":"0x0eb440f6"},{"name":"london","block":12965000,"forkHash":"0xb715077d"}],"bootstrapNodes":[{"ip":"18.138.108.67","port":30303,"id":"d860a01f9722d78051619d1e2351aba3f43f943f6f00718d1b9baa4101932a1f5011f16bb2b1bb35db20d6fe28fa0bf09636d26a87d31de9ec6203eeedb1f666","location":"ap-southeast-1-001","comment":"bootnode-aws-ap-southeast-1-001"},{"ip":"3.209.45.79","port":30303,"id":"22a8232c3abc76a16ae9d6c3b164f98775fe226f0917b0ca871128a74a8e9630b458460865bab457221f1d448dd9791d24c4e5d88786180ac185df813a68d4de","location":"us-east-1-001","comment":"bootnode-aws-us-east-1-001"},{"ip":"34.255.23.113","port":30303,"id":"ca6de62fce278f96aea6ec5a2daadb877e51651247cb96ee310a318def462913b653963c155a0ef6c7d50048bba6e6cea881130857413d9f50a621546b590758","location":"eu-west-1-001","comment":"bootnode-aws-eu-west-1-001"},{"ip":"35.158.244.151","port":30303,"id":"279944d8dcd428dffaa7436f25ca0ca43ae19e7bcf94a8fb7d1641651f92d121e972ac2e8f381414b80cc8e5555811c2ec6e1a99bb009b3f53c4c69923e11bd8","location":"eu-central-1-001","comment":"bootnode-aws-eu-central-1-001"},{"ip":"52.187.207.27","port":30303,"id":"8499da03c47d637b20eee24eec3c356c9a2e6148d6fe25ca195c7949ab8ec2c03e3556126b0d7ed644675e78c4318b08691b7b57de10e5f0d40d05b09238fa0a","location":"australiaeast-001","comment":"bootnode-azure-australiaeast-001"},{"ip":"191.234.162.198","port":30303,"id":"103858bdb88756c71f15e9b5e09b56dc1be52f0a5021d46301dbbfb7e130029cc9d0d6f73f693bc29b665770fff7da4d34f3c6379fe12721b5d7a0bcb5ca1fc1","location":"brazilsouth-001","comment":"bootnode-azure-brazilsouth-001"},{"ip":"52.231.165.108","port":30303,"id":"715171f50508aba88aecd1250af392a45a330af91d7b90701c436b618c86aaa1589c9184561907bebbb56439b8f8787bc01f49a7c77276c58c1b09822d75e8e8","location":"koreasouth-001","comment":"bootnode-azure-koreasouth-001"},{"ip":"104.42.217.25","port":30303,"id":"5d6d7cd20d6da4bb83a1d28cadb5d409b64edf314c0335df658c1a54e32c7c4a7ab7823d57c39b6a757556e68ff1df17c748b698544a55cb488b52479a92b60f","location":"westus-001","comment":"bootnode-azure-westus-001"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"]}');

/***/ }),

/***/ 34956:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"rinkeby","chainId":4,"networkId":4,"defaultHardfork":"istanbul","consensus":{"type":"poa","algorithm":"clique","clique":{"period":15,"epoch":30000}},"comment":"PoA test network","url":"https://www.rinkeby.io","genesis":{"hash":"0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177","timestamp":"0x58ee40ba","gasLimit":4700000,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x52657370656374206d7920617574686f7269746168207e452e436172746d616e42eb768f2244c8811c63729a21a3569731535f067ffc57839b00206d1ad20c69a1981b489f772031b279182d99e65703f0076e4812653aab85fca0f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","stateRoot":"0x53580584816f617295ea26c0e17641e0120cab2f0a8ffb53a866fd53aa8e8c2d"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x3b8e0691"},{"name":"homestead","block":1,"forkHash":"0x60949295"},{"name":"dao","block":null,"forkHash":null},{"name":"tangerineWhistle","block":2,"forkHash":"0x8bde40dd"},{"name":"spuriousDragon","block":3,"forkHash":"0xcb3a64bb"},{"name":"byzantium","block":1035301,"forkHash":"0x8d748b57"},{"name":"constantinople","block":3660663,"forkHash":"0xe49cab14"},{"name":"petersburg","block":4321234,"forkHash":"0xafec6b27"},{"name":"istanbul","block":5435345,"forkHash":"0xcbdb8838"},{"name":"berlin","block":8290928,"forkHash":"0x6910c8bd"},{"name":"london","block":8897988,"forkHash":"0x8e29f2f3"}],"bootstrapNodes":[{"ip":"52.169.42.101","port":30303,"id":"a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf","location":"","comment":"IE"},{"ip":"52.3.158.184","port":30303,"id":"343149e4feefa15d882d9fe4ac7d88f885bd05ebb735e547f12e12080a9fa07c8014ca6fd7f373123488102fe5e34111f8509cf0b7de3f5b44339c9f25e87cb8","location":"","comment":"INFURA"},{"ip":"159.89.28.211","port":30303,"id":"b6b28890b006743680c52e64e0d16db57f28124885595fa03a562be1d2bf0f3a1da297d56b13da25fb992888fd556d4c1a27b1f39d531bde7de1921c90061cc6","location":"","comment":"AKASHA"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.rinkeby.ethdisco.net"]}');

/***/ }),

/***/ 45167:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ropsten","chainId":3,"networkId":3,"defaultHardfork":"istanbul","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"PoW test network","url":"https://github.com/ethereum/ropsten","genesis":{"hash":"0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d","timestamp":null,"gasLimit":16777216,"difficulty":1048576,"nonce":"0x0000000000000042","extraData":"0x3535353535353535353535353535353535353535353535353535353535353535","stateRoot":"0x217b0bbcfb72e2d57e28f33cb361b9983513177755dc3f33ce3e7022ed62b77b"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x30c7ddbc"},{"name":"homestead","block":0,"forkHash":"0x30c7ddbc"},{"name":"dao","block":null,"forkHash":null},{"name":"tangerineWhistle","block":0,"forkHash":"0x30c7ddbc"},{"name":"spuriousDragon","block":10,"forkHash":"0x63760190"},{"name":"byzantium","block":1700000,"forkHash":"0x3ea159c7"},{"name":"constantinople","block":4230000,"forkHash":"0x97b544f3"},{"name":"petersburg","block":4939394,"forkHash":"0xd6e2149b"},{"name":"istanbul","block":6485846,"forkHash":"0x4bc66396"},{"name":"muirGlacier","block":7117117,"forkHash":"0x6727ef90"},{"name":"berlin","block":9812189,"forkHash":"0xa157d377"},{"name":"london","block":10499401,"forkHash":"0x7119b6b3"}],"bootstrapNodes":[{"ip":"52.176.7.10","port":30303,"id":"30b7ab30a01c124a6cceca36863ece12c4f5fa68e3ba9b0b51407ccc002eeed3b3102d20a88f1c1d3c3154e2449317b8ef95090e77b312d5cc39354f86d5d606","location":"","comment":"US-Azure geth"},{"ip":"52.176.100.77","port":30303,"id":"865a63255b3bb68023b6bffd5095118fcc13e79dcf014fe4e47e065c350c7cc72af2e53eff895f11ba1bbb6a2b33271c1116ee870f266618eadfc2e78aa7349c","location":"","comment":"US-Azure parity"},{"ip":"52.232.243.152","port":30303,"id":"6332792c4a00e3e4ee0926ed89e0d27ef985424d97b6a45bf0f23e51f0dcb5e66b875777506458aea7af6f9e4ffb69f43f3778ee73c81ed9d34c51c4b16b0b0f","location":"","comment":"Parity"},{"ip":"192.81.208.223","port":30303,"id":"94c15d1b9e2fe7ce56e458b9a3b672ef11894ddedd0c6f247e0f1d3487f52b66208fb4aeb8179fce6e3a749ea93ed147c37976d67af557508d199d9594c35f09","location":"","comment":"@gpip"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.ropsten.ethdisco.net"]}');

/***/ }),

/***/ 46436:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-1559","number":1559,"comment":"Fee market change for ETH 1.0 chain","url":"https://eips.ethereum.org/EIPS/eip-1559","status":"Review","minimumHardfork":"berlin","requiredEIPs":[2930],"gasConfig":{"baseFeeMaxChangeDenominator":{"v":8,"d":"Maximum base fee change denominator"},"elasticityMultiplier":{"v":2,"d":"Maximum block gas target elasticity"},"initialBaseFee":{"v":1000000000,"d":"Initial base fee on first EIP1559 block"}},"gasPrices":{},"vm":{},"pow":{}}');

/***/ }),

/***/ 66138:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-2315","number":2315,"comment":"Simple subroutines for the EVM","url":"https://eips.ethereum.org/EIPS/eip-2315","status":"Draft","minimumHardfork":"istanbul","gasConfig":{},"gasPrices":{"beginsub":{"v":2,"d":"Base fee of the BEGINSUB opcode"},"returnsub":{"v":5,"d":"Base fee of the RETURNSUB opcode"},"jumpsub":{"v":10,"d":"Base fee of the JUMPSUB opcode"}},"vm":{},"pow":{}}');

/***/ }),

/***/ 85761:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-2537","number":2537,"comment":"BLS12-381 precompiles","url":"https://eips.ethereum.org/EIPS/eip-2537","status":"Draft","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{"Bls12381G1AddGas":{"v":600,"d":"Gas cost of a single BLS12-381 G1 addition precompile-call"},"Bls12381G1MulGas":{"v":12000,"d":"Gas cost of a single BLS12-381 G1 multiplication precompile-call"},"Bls12381G2AddGas":{"v":4500,"d":"Gas cost of a single BLS12-381 G2 addition precompile-call"},"Bls12381G2MulGas":{"v":55000,"d":"Gas cost of a single BLS12-381 G2 multiplication precompile-call"},"Bls12381PairingBaseGas":{"v":115000,"d":"Base gas cost of BLS12-381 pairing check"},"Bls12381PairingPerPairGas":{"v":23000,"d":"Per-pair gas cost of BLS12-381 pairing check"},"Bls12381MapG1Gas":{"v":5500,"d":"Gas cost of BLS12-381 map field element to G1"},"Bls12381MapG2Gas":{"v":110000,"d":"Gas cost of BLS12-381 map field element to G2"},"Bls12381MultiExpGasDiscount":{"v":[[1,1200],[2,888],[3,764],[4,641],[5,594],[6,547],[7,500],[8,453],[9,438],[10,423],[11,408],[12,394],[13,379],[14,364],[15,349],[16,334],[17,330],[18,326],[19,322],[20,318],[21,314],[22,310],[23,306],[24,302],[25,298],[26,294],[27,289],[28,285],[29,281],[30,277],[31,273],[32,269],[33,268],[34,266],[35,265],[36,263],[37,262],[38,260],[39,259],[40,257],[41,256],[42,254],[43,253],[44,251],[45,250],[46,248],[47,247],[48,245],[49,244],[50,242],[51,241],[52,239],[53,238],[54,236],[55,235],[56,233],[57,232],[58,231],[59,229],[60,228],[61,226],[62,225],[63,223],[64,222],[65,221],[66,220],[67,219],[68,219],[69,218],[70,217],[71,216],[72,216],[73,215],[74,214],[75,213],[76,213],[77,212],[78,211],[79,211],[80,210],[81,209],[82,208],[83,208],[84,207],[85,206],[86,205],[87,205],[88,204],[89,203],[90,202],[91,202],[92,201],[93,200],[94,199],[95,199],[96,198],[97,197],[98,196],[99,196],[100,195],[101,194],[102,193],[103,193],[104,192],[105,191],[106,191],[107,190],[108,189],[109,188],[110,188],[111,187],[112,186],[113,185],[114,185],[115,184],[116,183],[117,182],[118,182],[119,181],[120,180],[121,179],[122,179],[123,178],[124,177],[125,176],[126,176],[127,175],[128,174]],"d":"Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair"}},"vm":{},"pow":{}}');

/***/ }),

/***/ 2731:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-2565","number":2565,"comment":"ModExp gas cost","url":"https://eips.ethereum.org/EIPS/eip-2565","status":"Last call","minimumHardfork":"byzantium","gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":3,"d":"Gquaddivisor from modexp precompile for gas calculation"}},"vm":{},"pow":{}}');

/***/ }),

/***/ 56888:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-2718","comment":"Typed Transaction Envelope","url":"https://eips.ethereum.org/EIPS/eip-2718","status":"Draft","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

/***/ }),

/***/ 34684:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-2929","comment":"Gas cost increases for state access opcodes","url":"https://eips.ethereum.org/EIPS/eip-2929","status":"Draft","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{"coldsload":{"v":2100,"d":"Gas cost of the first read of storage from a given location (per transaction)"},"coldaccountaccess":{"v":2600,"d":"Gas cost of the first read of a given address (per transaction)"},"warmstorageread":{"v":100,"d":"Gas cost of reading storage locations which have already loaded \'cold\'"},"sstoreCleanGasEIP2200":{"v":2900,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreNoopGasEIP2200":{"v":100,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":100,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitRefundEIP2200":{"v":19900,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanRefundEIP2200":{"v":4900,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"call":{"v":0,"d":"Base fee of the CALL opcode"},"callcode":{"v":0,"d":"Base fee of the CALLCODE opcode"},"delegatecall":{"v":0,"d":"Base fee of the DELEGATECALL opcode"},"staticcall":{"v":0,"d":"Base fee of the STATICCALL opcode"},"balance":{"v":0,"d":"Base fee of the BALANCE opcode"},"extcodesize":{"v":0,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":0,"d":"Base fee of the EXTCODECOPY opcode"},"extcodehash":{"v":0,"d":"Base fee of the EXTCODEHASH opcode"},"sload":{"v":0,"d":"Base fee of the SLOAD opcode"},"sstore":{"v":0,"d":"Base fee of the SSTORE opcode"}},"vm":{},"pow":{}}');

/***/ }),

/***/ 33584:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-2930","comment":"Optional access lists","url":"https://eips.ethereum.org/EIPS/eip-2930","status":"Draft","minimumHardfork":"istanbul","requiredEIPs":[2718,2929],"gasConfig":{},"gasPrices":{"accessListStorageKeyCost":{"v":1900,"d":"Gas cost per storage key in an Access List transaction"},"accessListAddressCost":{"v":2400,"d":"Gas cost per storage key in an Access List transaction"}},"vm":{},"pow":{}}');

/***/ }),

/***/ 3016:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-3198","number":3198,"comment":"BASEFEE opcode","url":"https://eips.ethereum.org/EIPS/eip-3198","status":"Review","minimumHardfork":"london","gasConfig":{},"gasPrices":{"basefee":{"v":2,"d":"Gas cost of the BASEFEE opcode"}},"vm":{},"pow":{}}');

/***/ }),

/***/ 47999:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-3529","comment":"Reduction in refunds","url":"https://eips.ethereum.org/EIPS/eip-3529","status":"Draft","minimumHardfork":"berlin","requiredEIPs":[2929],"gasConfig":{"maxRefundQuotient":{"v":5,"d":"Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"}},"gasPrices":{"selfdestructRefund":{"v":0,"d":"Refunded following a selfdestruct operation"},"sstoreClearRefundEIP2200":{"v":4800,"d":"Once per SSTORE operation for clearing an originally existing storage slot"}},"vm":{},"pow":{}}');

/***/ }),

/***/ 54712:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-3541","comment":"Reject new contracts starting with the 0xEF byte","url":"https://eips.ethereum.org/EIPS/eip-3541","status":"Draft","minimumHardfork":"berlin","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

/***/ }),

/***/ 83958:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"EIP-3554","comment":"Reduction in refunds","url":"Difficulty Bomb Delay to December 1st 2021","status":"Draft","minimumHardfork":"muirGlacier","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":9500000,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

/***/ }),

/***/ 31344:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"berlin","comment":"HF targeted for July 2020 following the Muir Glacier HF","url":"https://eips.ethereum.org/EIPS/eip-2070","status":"Draft","eips":[2565,2929,2718,2930]}');

/***/ }),

/***/ 69374:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"byzantium","comment":"Hardfork with new precompiles, instructions and other protocol changes","url":"https://eips.ethereum.org/EIPS/eip-609","status":"Final","gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":20,"d":"Gquaddivisor from modexp precompile for gas calculation"},"ecAdd":{"v":500,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":40000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":100000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":80000,"d":"Gas costs regarding curve pairing precompile input length"},"revert":{"v":0,"d":"Base fee of the REVERT opcode"},"staticcall":{"v":700,"d":"Base fee of the STATICCALL opcode"},"returndatasize":{"v":2,"d":"Base fee of the RETURNDATASIZE opcode"},"returndatacopy":{"v":3,"d":"Base fee of the RETURNDATACOPY opcode"}},"vm":{},"pow":{"minerReward":{"v":"3000000000000000000","d":"the amount a miner get rewarded for mining a block"},"difficultyBombDelay":{"v":3000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

/***/ }),

/***/ 57975:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"chainstart","comment":"Start of the Ethereum main chain","url":"","status":"","gasConfig":{"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be"},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations"},"maxRefundQuotient":{"v":2,"d":"Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"}},"gasPrices":{"base":{"v":2,"d":"Gas base cost, used e.g. for ChainID opcode (Istanbul)"},"tierStep":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them"},"exp":{"v":10,"d":"Base fee of the EXP opcode"},"expByte":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction"},"sha3":{"v":30,"d":"Base fee of the SHA3 opcode"},"sha3Word":{"v":6,"d":"Once per word of the SHA3 operation\'s data"},"sload":{"v":50,"d":"Base fee of the SLOAD opcode"},"sstoreSet":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero"},"sstoreReset":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero"},"sstoreRefund":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero"},"jumpdest":{"v":1,"d":"Base fee of the JUMPDEST opcode"},"log":{"v":375,"d":"Base fee of the LOG opcode"},"logData":{"v":8,"d":"Per byte in a LOG* operation\'s data"},"logTopic":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"},"create":{"v":32000,"d":"Base fee of the CREATE opcode"},"call":{"v":40,"d":"Base fee of the CALL opcode"},"callStipend":{"v":2300,"d":"Free gas given at beginning of call"},"callValueTransfer":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero"},"callNewAccount":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior"},"selfdestructRefund":{"v":24000,"d":"Refunded following a selfdestruct operation"},"memory":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation"},"createData":{"v":200,"d":""},"tx":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions"},"txCreation":{"v":32000,"d":"The cost of creating a contract via tx"},"txDataZero":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"},"txDataNonZero":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"copy":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"},"ecRecover":{"v":3000,"d":""},"sha256":{"v":60,"d":""},"sha256Word":{"v":12,"d":""},"ripemd160":{"v":600,"d":""},"ripemd160Word":{"v":120,"d":""},"identity":{"v":15,"d":""},"identityWord":{"v":3,"d":""},"stop":{"v":0,"d":"Base fee of the STOP opcode"},"add":{"v":3,"d":"Base fee of the ADD opcode"},"mul":{"v":5,"d":"Base fee of the MUL opcode"},"sub":{"v":3,"d":"Base fee of the SUB opcode"},"div":{"v":5,"d":"Base fee of the DIV opcode"},"sdiv":{"v":5,"d":"Base fee of the SDIV opcode"},"mod":{"v":5,"d":"Base fee of the MOD opcode"},"smod":{"v":5,"d":"Base fee of the SMOD opcode"},"addmod":{"v":8,"d":"Base fee of the ADDMOD opcode"},"mulmod":{"v":8,"d":"Base fee of the MULMOD opcode"},"signextend":{"v":5,"d":"Base fee of the SIGNEXTEND opcode"},"lt":{"v":3,"d":"Base fee of the LT opcode"},"gt":{"v":3,"d":"Base fee of the GT opcode"},"slt":{"v":3,"d":"Base fee of the SLT opcode"},"sgt":{"v":3,"d":"Base fee of the SGT opcode"},"eq":{"v":3,"d":"Base fee of the EQ opcode"},"iszero":{"v":3,"d":"Base fee of the ISZERO opcode"},"and":{"v":3,"d":"Base fee of the AND opcode"},"or":{"v":3,"d":"Base fee of the OR opcode"},"xor":{"v":3,"d":"Base fee of the XOR opcode"},"not":{"v":3,"d":"Base fee of the NOT opcode"},"byte":{"v":3,"d":"Base fee of the BYTE opcode"},"address":{"v":2,"d":"Base fee of the ADDRESS opcode"},"balance":{"v":20,"d":"Base fee of the BALANCE opcode"},"origin":{"v":2,"d":"Base fee of the ORIGIN opcode"},"caller":{"v":2,"d":"Base fee of the CALLER opcode"},"callvalue":{"v":2,"d":"Base fee of the CALLVALUE opcode"},"calldataload":{"v":3,"d":"Base fee of the CALLDATALOAD opcode"},"calldatasize":{"v":2,"d":"Base fee of the CALLDATASIZE opcode"},"calldatacopy":{"v":3,"d":"Base fee of the CALLDATACOPY opcode"},"codesize":{"v":2,"d":"Base fee of the CODESIZE opcode"},"codecopy":{"v":3,"d":"Base fee of the CODECOPY opcode"},"gasprice":{"v":2,"d":"Base fee of the GASPRICE opcode"},"extcodesize":{"v":20,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":20,"d":"Base fee of the EXTCODECOPY opcode"},"blockhash":{"v":20,"d":"Base fee of the BLOCKHASH opcode"},"coinbase":{"v":2,"d":"Base fee of the COINBASE opcode"},"timestamp":{"v":2,"d":"Base fee of the TIMESTAMP opcode"},"number":{"v":2,"d":"Base fee of the NUMBER opcode"},"difficulty":{"v":2,"d":"Base fee of the DIFFICULTY opcode"},"gaslimit":{"v":2,"d":"Base fee of the GASLIMIT opcode"},"pop":{"v":2,"d":"Base fee of the POP opcode"},"mload":{"v":3,"d":"Base fee of the MLOAD opcode"},"mstore":{"v":3,"d":"Base fee of the MSTORE opcode"},"mstore8":{"v":3,"d":"Base fee of the MSTORE8 opcode"},"sstore":{"v":0,"d":"Base fee of the SSTORE opcode"},"jump":{"v":8,"d":"Base fee of the JUMP opcode"},"jumpi":{"v":10,"d":"Base fee of the JUMPI opcode"},"pc":{"v":2,"d":"Base fee of the PC opcode"},"msize":{"v":2,"d":"Base fee of the MSIZE opcode"},"gas":{"v":2,"d":"Base fee of the GAS opcode"},"push":{"v":3,"d":"Base fee of the PUSH opcode"},"dup":{"v":3,"d":"Base fee of the DUP opcode"},"swap":{"v":3,"d":"Base fee of the SWAP opcode"},"callcode":{"v":40,"d":"Base fee of the CALLCODE opcode"},"return":{"v":0,"d":"Base fee of the RETURN opcode"},"invalid":{"v":0,"d":"Base fee of the INVALID opcode"},"selfdestruct":{"v":0,"d":"Base fee of the SELFDESTRUCT opcode"}},"vm":{"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed"},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack"},"maxExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis"}},"pow":{"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be"},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations"},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"difficultyBombDelay":{"v":0,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

/***/ }),

/***/ 92543:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"constantinople","comment":"Postponed hardfork including EIP-1283 (SSTORE gas metering changes)","url":"https://eips.ethereum.org/EIPS/eip-1013","status":"Final","gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":200,"d":"Once per SSTORE operation if the value doesn\'t change"},"netSstoreInitGas":{"v":20000,"d":"Once per SSTORE operation from clean zero"},"netSstoreCleanGas":{"v":5000,"d":"Once per SSTORE operation from clean non-zero"},"netSstoreDirtyGas":{"v":200,"d":"Once per SSTORE operation from dirty"},"netSstoreClearRefund":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"netSstoreResetRefund":{"v":4800,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"netSstoreResetClearRefund":{"v":19800,"d":"Once per SSTORE operation for resetting to the original zero value"},"shl":{"v":3,"d":"Base fee of the SHL opcode"},"shr":{"v":3,"d":"Base fee of the SHR opcode"},"sar":{"v":3,"d":"Base fee of the SAR opcode"},"extcodehash":{"v":400,"d":"Base fee of the EXTCODEHASH opcode"},"create2":{"v":32000,"d":"Base fee of the CREATE2 opcode"}},"vm":{},"pow":{"minerReward":{"v":"2000000000000000000","d":"The amount a miner gets rewarded for mining a block"},"difficultyBombDelay":{"v":5000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

/***/ }),

/***/ 52641:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"dao","comment":"DAO rescue hardfork","url":"https://eips.ethereum.org/EIPS/eip-779","status":"Final","gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

/***/ }),

/***/ 50498:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"homestead","comment":"Homestead hardfork with protocol and network changes","url":"https://eips.ethereum.org/EIPS/eip-606","status":"Final","gasConfig":{},"gasPrices":{"delegatecall":{"v":40,"d":"Base fee of the DELEGATECALL opcode"}},"vm":{},"pow":{}}');

/***/ }),

/***/ 88707:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"istanbul","comment":"HF targeted for December 2019 following the Constantinople/Petersburg HF","url":"https://eips.ethereum.org/EIPS/eip-1679","status":"Draft","gasConfig":{},"gasPrices":{"blake2Round":{"v":1,"d":"Gas cost per round for the Blake2 F precompile"},"ecAdd":{"v":150,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":6000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":45000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":34000,"d":"Gas costs regarding curve pairing precompile input length"},"txDataNonZero":{"v":16,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"sstoreSentryGasEIP2200":{"v":2300,"d":"Minimum gas required to be present for an SSTORE call, not consumed"},"sstoreNoopGasEIP2200":{"v":800,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":800,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitGasEIP2200":{"v":20000,"d":"Once per SSTORE operation from clean zero to non-zero"},"sstoreInitRefundEIP2200":{"v":19200,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanGasEIP2200":{"v":5000,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreCleanRefundEIP2200":{"v":4200,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"sstoreClearRefundEIP2200":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"balance":{"v":700,"d":"Base fee of the BALANCE opcode"},"extcodehash":{"v":700,"d":"Base fee of the EXTCODEHASH opcode"},"chainid":{"v":2,"d":"Base fee of the CHAINID opcode"},"selfbalance":{"v":5,"d":"Base fee of the SELFBALANCE opcode"},"sload":{"v":800,"d":"Base fee of the SLOAD opcode"}},"vm":{},"pow":{}}');

/***/ }),

/***/ 43748:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"london","comment":"HF targeted for July 2021 following the Berlin fork","url":"https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md","status":"Draft","eips":[1559,3198,3529,3541]}');

/***/ }),

/***/ 36317:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"muirGlacier","comment":"HF to delay the difficulty bomb","url":"https://eips.ethereum.org/EIPS/eip-2384","status":"Final","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":9000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

/***/ }),

/***/ 19425:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"petersburg","comment":"Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople","url":"https://eips.ethereum.org/EIPS/eip-1716","status":"Draft","gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreInitGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreCleanGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreDirtyGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreClearRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetClearRefund":{"v":null,"d":"Removed along EIP-1283"}},"vm":{},"pow":{}}');

/***/ }),

/***/ 37777:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"spuriousDragon","comment":"HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit","url":"https://eips.ethereum.org/EIPS/eip-607","status":"Final","gasConfig":{},"gasPrices":{"expByte":{"v":50,"d":"Times ceil(log256(exponent)) for the EXP instruction"}},"vm":{"maxCodeSize":{"v":24576,"d":"Maximum length of contract code"}},"pow":{}}');

/***/ }),

/***/ 92272:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"tangerineWhistle","comment":"Hardfork with gas cost changes for IO-heavy operations","url":"https://eips.ethereum.org/EIPS/eip-608","status":"Final","gasConfig":{},"gasPrices":{"sload":{"v":200,"d":"Once per SLOAD operation"},"call":{"v":700,"d":"Once per CALL operation & message call transaction"},"extcodesize":{"v":700,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":700,"d":"Base fee of the EXTCODECOPY opcode"},"balance":{"v":400,"d":"Base fee of the BALANCE opcode"},"delegatecall":{"v":700,"d":"Base fee of the DELEGATECALL opcode"},"callcode":{"v":700,"d":"Base fee of the CALLCODE opcode"},"selfdestruct":{"v":5000,"d":"Base fee of the SELFDESTRUCT opcode"}},"vm":{},"pow":{}}');

/***/ })

}]);