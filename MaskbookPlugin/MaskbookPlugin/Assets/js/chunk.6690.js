(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8587],{

/***/ 23248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ MissingParameter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25933);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76729);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49283);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37186);



function MissingParameter(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .useI18N */ .M1)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    variant: "h5",
                    children: props.message
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    variant: "caption",
                    children: t('popups_missing_parameter_caption')
                })
            ]
        })
    }));
}


/***/ }),

/***/ 17925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignRequest)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28532);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69476);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(76900);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97448);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82267);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85290);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37058);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var opensea_js_lib_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57573);
/* harmony import */ var opensea_js_lib_utils_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(opensea_js_lib_utils_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34539);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27019);
/* harmony import */ var _components_DataSource_useMyPersonas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43730);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37186);
/* harmony import */ var _MissingParameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23248);











function SignRequest() {
    const param = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useLocation */ .TH)();
    const _ = new URLSearchParams(param.search);
    const message = _.get('message');
    const id = _.get('id');
    const personas = (0,_components_DataSource_useMyPersonas__WEBPACK_IMPORTED_MODULE_5__/* .useMyPersonas */ .n)();
    if (!personas.length) {
        // Let it goes into suspense because personas are still loading
        if (performance.now() < 5000) throw (0,opensea_js_lib_utils_utils__WEBPACK_IMPORTED_MODULE_3__.delay)(100);
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MissingParameter__WEBPACK_IMPORTED_MODULE_7__/* .MissingParameter */ .G, {
            message: "There is no persona"
        }));
    }
    if (!message || !id) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MissingParameter__WEBPACK_IMPORTED_MODULE_7__/* .MissingParameter */ .G, {
        message: "Bad sign request"
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SignRequestHandler, {
        requestID: id,
        message: message
    }));
};
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    root: {
        maxWidth: 500,
        padding: 32,
        '&>*': {
            marginBottom: 12
        }
    }
});
function SignRequestHandler(props) {
    const { classes  } = useStyles();
    const personas = (0,_components_DataSource_useMyPersonas__WEBPACK_IMPORTED_MODULE_5__/* .useMyPersonas */ .n)();
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(personas[0].identifier.toText());
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (personas.find((x)=>x.identifier.toText() === selected
        )) return;
        setSelected(personas[0].identifier.toText());
    }, [
        selected,
        personas
    ]);
    const onSign = ()=>{
        _utils__WEBPACK_IMPORTED_MODULE_6__/* .MaskMessage.events.signRequestApproved.sendToBackgroundPage */ .yV.events.signRequestApproved.sendToBackgroundPage({
            requestID: props.requestID,
            selectedPersona: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(selected, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier */ .ob).unwrap()
        });
    };
    var _nickname;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                variant: "h2",
                children: "Sign request:"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                variant: "body1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                        sx: {
                            textDecoration: 'underline',
                            display: 'inline'
                        },
                        component: "span",
                        children: "Unknown source"
                    }),
                    ' ',
                    "requested to sign the following message with your persona:"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
                multiline: true,
                inputProps: {
                    readOnly: true
                },
                fullWidth: true,
                value: props.message
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                variant: "body1",
                children: "Which persona would you like to sign this message?"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
                fullWidth: true,
                value: selected,
                onChange: (e)=>setSelected(e.target.value)
                ,
                children: personas.map((persona)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                        selected: true,
                        value: persona.identifier.toText(),
                        children: (_nickname = persona.nickname) !== null && _nickname !== void 0 ? _nickname : persona.fingerprint
                    }, persona.identifier.toText())
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                        onClick: window.close,
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                        onClick: onSign,
                        variant: "contained",
                        children: "Sign"
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 32007:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var swarm = __webpack_require__(52384);
var Bzz = function Bzz(provider) {
    this.givenProvider = Bzz.givenProvider;
    if (provider && provider._requestManager) {
        provider = provider.currentProvider;
    }
    // only allow file picker when in browser
    if (typeof document !== 'undefined') {
        this.pick = swarm.pick;
    }
    this.setProvider(provider);
};
// set default ethereum provider
/* jshint ignore:start */
Bzz.givenProvider = null;
if (typeof ethereum !== 'undefined' && ethereum.bzz) {
    Bzz.givenProvider = ethereum.bzz;
}
/* jshint ignore:end */
Bzz.prototype.setProvider = function (provider) {
    // is ethereum provider
    if (!!provider && typeof provider === 'object' && typeof provider.bzz === 'string') {
        provider = provider.bzz;
        // is no string, set default
    }
    // else if(!_.isString(provider)) {
    //      provider = 'http://swarm-gateways.net'; // default to gateway
    // }
    if (typeof provider === 'string') {
        this.currentProvider = provider;
    }
    else {
        this.currentProvider = null;
        var noProviderError = new Error('No provider set, please set one using bzz.setProvider().');
        this.download = this.upload = this.isAvailable = function () {
            throw noProviderError;
        };
        return false;
    }
    // add functions
    this.download = swarm.at(provider).download;
    this.upload = swarm.at(provider).upload;
    this.isAvailable = swarm.at(provider).isAvailable;
    return true;
};
module.exports = Bzz;


/***/ }),

/***/ 39944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2016
 */

var EventEmitter = __webpack_require__(15954);
/**
 * This function generates a defer promise and adds eventEmitter functionality to it
 *
 * @method eventifiedPromise
 */
var PromiEvent = function PromiEvent(justPromise) {
    var resolve, reject, eventEmitter = new Promise(function () {
        resolve = arguments[0];
        reject = arguments[1];
    });
    if (justPromise) {
        return {
            resolve: resolve,
            reject: reject,
            eventEmitter: eventEmitter
        };
    }
    // get eventEmitter
    var emitter = new EventEmitter();
    // add eventEmitter to the promise
    eventEmitter._events = emitter._events;
    eventEmitter.emit = emitter.emit;
    eventEmitter.on = emitter.on;
    eventEmitter.once = emitter.once;
    eventEmitter.off = emitter.off;
    eventEmitter.listeners = emitter.listeners;
    eventEmitter.addListener = emitter.addListener;
    eventEmitter.removeListener = emitter.removeListener;
    eventEmitter.removeAllListeners = emitter.removeAllListeners;
    return {
        resolve: resolve,
        reject: reject,
        eventEmitter: eventEmitter
    };
};
PromiEvent.resolve = function (value) {
    var promise = PromiEvent(true);
    promise.resolve(value);
    return promise.eventEmitter;
};
module.exports = PromiEvent;


/***/ }),

/***/ 24683:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file extend.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var formatters = __webpack_require__(70222).formatters;
var Method = __webpack_require__(34023);
var utils = __webpack_require__(83317);
var extend = function (pckg) {
    /* jshint maxcomplexity:5 */
    var ex = function (extension) {
        var extendedObject;
        if (extension.property) {
            if (!pckg[extension.property]) {
                pckg[extension.property] = {};
            }
            extendedObject = pckg[extension.property];
        }
        else {
            extendedObject = pckg;
        }
        if (extension.methods) {
            extension.methods.forEach(function (method) {
                if (!(method instanceof Method)) {
                    method = new Method(method);
                }
                method.attachToObject(extendedObject);
                method.setRequestManager(pckg._requestManager);
            });
        }
        return pckg;
    };
    ex.formatters = formatters;
    ex.utils = utils;
    ex.Method = Method;
    return ex;
};
module.exports = extend;


/***/ }),

/***/ 10833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */
const requestManager = __webpack_require__(27014);
const extend = __webpack_require__(24683);
const packageInit = (pkg, args) => {
    args = Array.prototype.slice.call(args);
    if (!pkg) {
        throw new Error('You need to instantiate using the "new" keyword.');
    }
    // make property of pkg._provider, which can properly set providers
    Object.defineProperty(pkg, 'currentProvider', {
        get: () => {
            return pkg._provider;
        },
        set: (value) => {
            return pkg.setProvider(value);
        },
        enumerable: true,
        configurable: true
    });
    // inherit from parent package or create a new RequestManager
    if (args[0] && args[0]._requestManager) {
        pkg._requestManager = args[0]._requestManager;
    }
    else {
        pkg._requestManager = new requestManager.Manager(args[0], args[1]);
    }
    // add givenProvider
    pkg.givenProvider = requestManager.Manager.givenProvider;
    pkg.providers = requestManager.Manager.providers;
    pkg._provider = pkg._requestManager.provider;
    // add SETPROVIDER function (don't overwrite if already existing)
    if (!pkg.setProvider) {
        pkg.setProvider = (provider, net) => {
            pkg._requestManager.setProvider(provider, net);
            pkg._provider = pkg._requestManager.provider;
            return true;
        };
    }
    pkg.setRequestManager = (manager) => {
        pkg._requestManager = manager;
        pkg._provider = manager.provider;
    };
    // attach batch request creation
    pkg.BatchRequest = requestManager.BatchManager.bind(null, pkg._requestManager);
    // attach extend function
    pkg.extend = extend(pkg);
};
const addProviders = (pkg) => {
    pkg.givenProvider = requestManager.Manager.givenProvider;
    pkg.providers = requestManager.Manager.providers;
};
module.exports = {
    packageInit,
    addProviders
};


/***/ }),

/***/ 67541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file iban.js
 *
 * Details: https://github.com/ethereum/wiki/wiki/ICAP:-Inter-exchange-Client-Address-Protocol
 *
 * @author Marek Kotewicz <marek@parity.io>
 * @date 2015
 */

const utils = __webpack_require__(83317);
const BigNumber = __webpack_require__(28891);
const leftPad = function (string, bytes) {
    let result = string;
    while (result.length < bytes * 2) {
        result = '0' + result;
    }
    return result;
};
/**
 * Prepare an IBAN for mod 97 computation by moving the first 4 chars to the end and transforming the letters to
 * numbers (A = 10, B = 11, ..., Z = 35), as specified in ISO13616.
 *
 * @method iso13616Prepare
 * @param {String} iban the IBAN
 * @returns {String} the prepared IBAN
 */
const iso13616Prepare = function (iban) {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    iban = iban.toUpperCase();
    iban = iban.substr(4) + iban.substr(0, 4);
    return iban.split('').map(function (n) {
        const code = n.charCodeAt(0);
        if (code >= A && code <= Z) {
            // A = 10, B = 11, ... Z = 35
            return code - A + 10;
        }
        else {
            return n;
        }
    }).join('');
};
/**
 * Calculates the MOD 97 10 of the passed IBAN as specified in ISO7064.
 *
 * @method mod9710
 * @param {String} iban
 * @returns {Number}
 */
const mod9710 = function (iban) {
    let remainder = iban;
    let block;
    while (remainder.length > 2) {
        block = remainder.slice(0, 9);
        remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
    }
    return parseInt(remainder, 10) % 97;
};
/**
 * This prototype should be used to create iban object from iban correct string
 *
 * @param {String} iban
 */
class Iban {
    constructor(iban) {
        this._iban = iban;
    }
    /**
     * This method should be used to create an ethereum address from a direct iban address
     *
     * @method toAddress
     * @param {String} iban address
     * @return {String} the ethereum address
     */
    static toAddress(ib) {
        ib = new Iban(ib);
        if (!ib.isDirect()) {
            throw new Error('IBAN is indirect and can\'t be converted');
        }
        return ib.toAddress();
    }
    /**
     * This method should be used to create iban address from an ethereum address
     *
     * @method toIban
     * @param {String} address
     * @return {String} the IBAN address
     */
    static toIban(address) {
        return Iban.fromAddress(address).toString();
    }
    /**
     * This method should be used to create iban object from an ethereum address
     *
     * @method fromAddress
     * @param {String} address
     * @return {Iban} the IBAN object
     */
    static fromAddress(address) {
        if (!utils.isAddress(address)) {
            throw new Error('Provided address is not a valid address: ' + address);
        }
        address = address.replace('0x', '').replace('0X', '');
        const asBn = new BigNumber(address, 16);
        const base36 = asBn.toString(36);
        const padded = leftPad(base36, 15);
        return Iban.fromBban(padded.toUpperCase());
    }
    /**
     * Convert the passed BBAN to an IBAN for this country specification.
     * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
     * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
     *
     * @method fromBban
     * @param {String} bban the BBAN to convert to IBAN
     * @returns {Iban} the IBAN object
     */
    static fromBban(bban) {
        const countryCode = 'XE';
        const remainder = mod9710(iso13616Prepare(countryCode + '00' + bban));
        const checkDigit = ('0' + (98 - remainder)).slice(-2);
        return new Iban(countryCode + checkDigit + bban);
    }
    /**
     * Should be used to create IBAN object for given institution and identifier
     *
     * @method createIndirect
     * @param {Object} options, required options are "institution" and "identifier"
     * @return {Iban} the IBAN object
     */
    static createIndirect(options) {
        return Iban.fromBban('ETH' + options.institution + options.identifier);
    }
    /**
     * This method should be used to check if given string is valid iban object
     *
     * @method isValid
     * @param {String} iban string
     * @return {Boolean} true if it is valid IBAN
     */
    static isValid(iban) {
        const i = new Iban(iban);
        return i.isValid();
    }
    ;
    /**
     * Should be called to check if iban is correct
     *
     * @method isValid
     * @returns {Boolean} true if it is, otherwise false
     */
    isValid() {
        return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban) &&
            mod9710(iso13616Prepare(this._iban)) === 1;
    }
    ;
    /**
     * Should be called to check if iban number is direct
     *
     * @method isDirect
     * @returns {Boolean} true if it is, otherwise false
     */
    isDirect() {
        return this._iban.length === 34 || this._iban.length === 35;
    }
    ;
    /**
     * Should be called to check if iban number if indirect
     *
     * @method isIndirect
     * @returns {Boolean} true if it is, otherwise false
     */
    isIndirect() {
        return this._iban.length === 20;
    }
    ;
    /**
     * Should be called to get iban checksum
     * Uses the mod-97-10 checksumming protocol (ISO/IEC 7064:2003)
     *
     * @method checksum
     * @returns {String} checksum
     */
    checksum() {
        return this._iban.substr(2, 2);
    }
    ;
    /**
     * Should be called to get institution identifier
     * eg. XREG
     *
     * @method institution
     * @returns {String} institution identifier
     */
    institution() {
        return this.isIndirect() ? this._iban.substr(7, 4) : '';
    }
    ;
    /**
     * Should be called to get client identifier within institution
     * eg. GAVOFYORK
     *
     * @method client
     * @returns {String} client identifier
     */
    client() {
        return this.isIndirect() ? this._iban.substr(11) : '';
    }
    ;
    /**
     * Should be called to get client direct address
     *
     * @method toAddress
     * @returns {String} ethereum address
     */
    toAddress() {
        if (this.isDirect()) {
            const base36 = this._iban.substr(4);
            const asBn = new BigNumber(base36, 36);
            return utils.toChecksumAddress(asBn.toString(16, 20));
        }
        return '';
    }
    ;
    toString() {
        return this._iban;
    }
    ;
}
module.exports = Iban;


/***/ }),

/***/ 33513:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var core = __webpack_require__(10833);
var Method = __webpack_require__(34023);
var utils = __webpack_require__(83317);
var Net = __webpack_require__(76932);
var formatters = __webpack_require__(70222).formatters;
var Personal = function Personal() {
    var _this = this;
    // sets _requestmanager
    core.packageInit(this, arguments);
    this.net = new Net(this);
    var defaultAccount = null;
    var defaultBlock = 'latest';
    Object.defineProperty(this, 'defaultAccount', {
        get: function () {
            return defaultAccount;
        },
        set: function (val) {
            if (val) {
                defaultAccount = utils.toChecksumAddress(formatters.inputAddressFormatter(val));
            }
            // update defaultBlock
            methods.forEach(function (method) {
                method.defaultAccount = defaultAccount;
            });
            return val;
        },
        enumerable: true
    });
    Object.defineProperty(this, 'defaultBlock', {
        get: function () {
            return defaultBlock;
        },
        set: function (val) {
            defaultBlock = val;
            // update defaultBlock
            methods.forEach(function (method) {
                method.defaultBlock = defaultBlock;
            });
            return val;
        },
        enumerable: true
    });
    var methods = [
        new Method({
            name: 'getAccounts',
            call: 'personal_listAccounts',
            params: 0,
            outputFormatter: utils.toChecksumAddress
        }),
        new Method({
            name: 'newAccount',
            call: 'personal_newAccount',
            params: 1,
            inputFormatter: [null],
            outputFormatter: utils.toChecksumAddress
        }),
        new Method({
            name: 'unlockAccount',
            call: 'personal_unlockAccount',
            params: 3,
            inputFormatter: [formatters.inputAddressFormatter, null, null]
        }),
        new Method({
            name: 'lockAccount',
            call: 'personal_lockAccount',
            params: 1,
            inputFormatter: [formatters.inputAddressFormatter]
        }),
        new Method({
            name: 'importRawKey',
            call: 'personal_importRawKey',
            params: 2
        }),
        new Method({
            name: 'sendTransaction',
            call: 'personal_sendTransaction',
            params: 2,
            inputFormatter: [formatters.inputTransactionFormatter, null]
        }),
        new Method({
            name: 'signTransaction',
            call: 'personal_signTransaction',
            params: 2,
            inputFormatter: [formatters.inputTransactionFormatter, null]
        }),
        new Method({
            name: 'sign',
            call: 'personal_sign',
            params: 3,
            inputFormatter: [formatters.inputSignFormatter, formatters.inputAddressFormatter, null]
        }),
        new Method({
            name: 'ecRecover',
            call: 'personal_ecRecover',
            params: 2,
            inputFormatter: [formatters.inputSignFormatter, null]
        })
    ];
    methods.forEach(function (method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
        method.defaultBlock = _this.defaultBlock;
        method.defaultAccount = _this.defaultAccount;
    });
};
core.addProviders(Personal);
module.exports = Personal;


/***/ }),

/***/ 76932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var core = __webpack_require__(10833);
var Method = __webpack_require__(34023);
var utils = __webpack_require__(83317);
var Net = function () {
    var _this = this;
    // sets _requestmanager
    core.packageInit(this, arguments);
    [
        new Method({
            name: 'getId',
            call: 'net_version',
            params: 0,
            outputFormatter: parseInt
        }),
        new Method({
            name: 'isListening',
            call: 'net_listening',
            params: 0
        }),
        new Method({
            name: 'getPeerCount',
            call: 'net_peerCount',
            params: 0,
            outputFormatter: utils.hexToNumber
        })
    ].forEach(function (method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });
};
core.addProviders(Net);
module.exports = Net;


/***/ }),

/***/ 83361:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file httpprovider.js
 * @authors:
 *   Marek Kotewicz <marek@parity.io>
 *   Marian Oancea
 *   Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2015
 */
var errors = __webpack_require__(70222).errors;
var XHR2 = __webpack_require__(4494)/* .XMLHttpRequest */ .h; // jshint ignore: line
var http = __webpack_require__(98651);
var https = __webpack_require__(2904);
/**
 * HttpProvider should be used to send rpc calls over http
 */
var HttpProvider = function HttpProvider(host, options) {
    options = options || {};
    this.withCredentials = options.withCredentials || false;
    this.timeout = options.timeout || 0;
    this.headers = options.headers;
    this.agent = options.agent;
    this.connected = false;
    // keepAlive is true unless explicitly set to false
    const keepAlive = options.keepAlive !== false;
    this.host = host || 'http://localhost:8545';
    if (!this.agent) {
        if (this.host.substring(0, 5) === "https") {
            this.httpsAgent = new https.Agent({ keepAlive });
        }
        else {
            this.httpAgent = new http.Agent({ keepAlive });
        }
    }
};
HttpProvider.prototype._prepareRequest = function () {
    var request;
    // the current runtime is a browser
    if (typeof XMLHttpRequest !== 'undefined') {
        request = new XMLHttpRequest();
    }
    else {
        request = new XHR2();
        var agents = { httpsAgent: this.httpsAgent, httpAgent: this.httpAgent, baseUrl: this.baseUrl };
        if (this.agent) {
            agents.httpsAgent = this.agent.https;
            agents.httpAgent = this.agent.http;
            agents.baseUrl = this.agent.baseUrl;
        }
        request.nodejsSet(agents);
    }
    request.open('POST', this.host, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.timeout = this.timeout;
    request.withCredentials = this.withCredentials;
    if (this.headers) {
        this.headers.forEach(function (header) {
            request.setRequestHeader(header.name, header.value);
        });
    }
    return request;
};
/**
 * Should be used to make async request
 *
 * @method send
 * @param {Object} payload
 * @param {Function} callback triggered on end with (err, result)
 */
HttpProvider.prototype.send = function (payload, callback) {
    var _this = this;
    var request = this._prepareRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.timeout !== 1) {
            var result = request.responseText;
            var error = null;
            try {
                result = JSON.parse(result);
            }
            catch (e) {
                error = errors.InvalidResponse(request.responseText);
            }
            _this.connected = true;
            callback(error, result);
        }
    };
    request.ontimeout = function () {
        _this.connected = false;
        callback(errors.ConnectionTimeout(this.timeout));
    };
    try {
        request.send(JSON.stringify(payload));
    }
    catch (error) {
        this.connected = false;
        callback(errors.InvalidConnection(this.host));
    }
};
HttpProvider.prototype.disconnect = function () {
    //NO OP
};
/**
 * Returns the desired boolean.
 *
 * @method supportsSubscriptions
 * @returns {boolean}
 */
HttpProvider.prototype.supportsSubscriptions = function () {
    return false;
};
module.exports = HttpProvider;


/***/ }),

/***/ 29763:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file index.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var errors = __webpack_require__(70222).errors;
var oboe = __webpack_require__(11595);
var IpcProvider = function IpcProvider(path, net) {
    var _this = this;
    this.responseCallbacks = {};
    this.notificationCallbacks = [];
    this.path = path;
    this.connected = false;
    this.connection = net.connect({ path: this.path });
    this.addDefaultEvents();
    // LISTEN FOR CONNECTION RESPONSES
    var callback = function (result) {
        /*jshint maxcomplexity: 6 */
        var id = null;
        // get the id which matches the returned id
        if (Array.isArray(result)) {
            result.forEach(function (load) {
                if (_this.responseCallbacks[load.id])
                    id = load.id;
            });
        }
        else {
            id = result.id;
        }
        // notification
        if (!id && result.method.indexOf('_subscription') !== -1) {
            _this.notificationCallbacks.forEach(function (callback) {
                if (typeof callback === 'function')
                    callback(result);
            });
            // fire the callback
        }
        else if (_this.responseCallbacks[id]) {
            _this.responseCallbacks[id](null, result);
            delete _this.responseCallbacks[id];
        }
    };
    // use oboe.js for Sockets
    if (net.constructor.name === 'Socket') {
        oboe(this.connection)
            .done(callback);
    }
    else {
        this.connection.on('data', function (data) {
            _this._parseResponse(data.toString()).forEach(callback);
        });
    }
};
/**
Will add the error and end event to timeout existing calls

@method addDefaultEvents
*/
IpcProvider.prototype.addDefaultEvents = function () {
    var _this = this;
    this.connection.on('connect', function () {
        _this.connected = true;
    });
    this.connection.on('close', function () {
        _this.connected = false;
    });
    this.connection.on('error', function () {
        _this._timeout();
    });
    this.connection.on('end', function () {
        _this._timeout();
    });
    this.connection.on('timeout', function () {
        _this._timeout();
    });
};
/**
 Will parse the response and make an array out of it.

 NOTE, this exists for backwards compatibility reasons.

 @method _parseResponse
 @param {String} data
 */
IpcProvider.prototype._parseResponse = function (data) {
    var _this = this, returnValues = [];
    // DE-CHUNKER
    var dechunkedData = data
        .replace(/\}[\n\r]?\{/g, '}|--|{') // }{
        .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
        .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
        .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
        .split('|--|');
    dechunkedData.forEach(function (data) {
        // prepend the last chunk
        if (_this.lastChunk)
            data = _this.lastChunk + data;
        var result = null;
        try {
            result = JSON.parse(data);
        }
        catch (e) {
            _this.lastChunk = data;
            // start timeout to cancel all requests
            clearTimeout(_this.lastChunkTimeout);
            _this.lastChunkTimeout = setTimeout(function () {
                _this._timeout();
                throw errors.InvalidResponse(data);
            }, 1000 * 15);
            return;
        }
        // cancel timeout and set chunk to null
        clearTimeout(_this.lastChunkTimeout);
        _this.lastChunk = null;
        if (result)
            returnValues.push(result);
    });
    return returnValues;
};
/**
Get the adds a callback to the responseCallbacks object,
which will be called if a response matching the response Id will arrive.

@method _addResponseCallback
*/
IpcProvider.prototype._addResponseCallback = function (payload, callback) {
    var id = payload.id || payload[0].id;
    var method = payload.method || payload[0].method;
    this.responseCallbacks[id] = callback;
    this.responseCallbacks[id].method = method;
};
/**
Timeout all requests when the end/error event is fired

@method _timeout
*/
IpcProvider.prototype._timeout = function () {
    for (var key in this.responseCallbacks) {
        if (this.responseCallbacks.hasOwnProperty(key)) {
            this.responseCallbacks[key](errors.InvalidConnection('on IPC'));
            delete this.responseCallbacks[key];
        }
    }
};
/**
 Try to reconnect

 @method reconnect
 */
IpcProvider.prototype.reconnect = function () {
    this.connection.connect({ path: this.path });
};
IpcProvider.prototype.send = function (payload, callback) {
    // try reconnect, when connection is gone
    if (!this.connection.writable)
        this.connection.connect({ path: this.path });
    this.connection.write(JSON.stringify(payload));
    this._addResponseCallback(payload, callback);
};
/**
Subscribes to provider events.provider

@method on
@param {String} type    'notification', 'connect', 'error', 'end' or 'data'
@param {Function} callback   the callback to call
*/
IpcProvider.prototype.on = function (type, callback) {
    if (typeof callback !== 'function')
        throw new Error('The second parameter callback must be a function.');
    switch (type) {
        case 'data':
            this.notificationCallbacks.push(callback);
            break;
        // adds error, end, timeout, connect
        default:
            this.connection.on(type, callback);
            break;
    }
};
/**
 Subscribes to provider events.provider

 @method on
 @param {String} type    'connect', 'error', 'end' or 'data'
 @param {Function} callback   the callback to call
 */
IpcProvider.prototype.once = function (type, callback) {
    if (typeof callback !== 'function')
        throw new Error('The second parameter callback must be a function.');
    this.connection.once(type, callback);
};
/**
Removes event listener

@method removeListener
@param {String} type    'data', 'connect', 'error', 'end' or 'data'
@param {Function} callback   the callback to call
*/
IpcProvider.prototype.removeListener = function (type, callback) {
    var _this = this;
    switch (type) {
        case 'data':
            this.notificationCallbacks.forEach(function (cb, index) {
                if (cb === callback)
                    _this.notificationCallbacks.splice(index, 1);
            });
            break;
        default:
            this.connection.removeListener(type, callback);
            break;
    }
};
/**
Removes all event listeners

@method removeAllListeners
@param {String} type    'data', 'connect', 'error', 'end' or 'data'
*/
IpcProvider.prototype.removeAllListeners = function (type) {
    switch (type) {
        case 'data':
            this.notificationCallbacks = [];
            break;
        default:
            this.connection.removeAllListeners(type);
            break;
    }
};
/**
Resets the providers, clears all callbacks

@method reset
*/
IpcProvider.prototype.reset = function () {
    this._timeout();
    this.notificationCallbacks = [];
    this.connection.removeAllListeners('error');
    this.connection.removeAllListeners('end');
    this.connection.removeAllListeners('timeout');
    this.addDefaultEvents();
};
/**
 * Returns the desired boolean.
 *
 * @method supportsSubscriptions
 * @returns {boolean}
 */
IpcProvider.prototype.supportsSubscriptions = function () {
    return true;
};
module.exports = IpcProvider;


/***/ }),

/***/ 63182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var core = __webpack_require__(10833);
var Subscriptions = __webpack_require__(84350).subscriptions;
var Method = __webpack_require__(34023);
// var formatters = require('web3-core-helpers').formatters;
var Net = __webpack_require__(76932);
var Shh = function Shh() {
    var _this = this;
    // sets _requestmanager
    core.packageInit(this, arguments);
    // overwrite package setRequestManager
    var setRequestManager = this.setRequestManager;
    this.setRequestManager = function (manager) {
        setRequestManager(manager);
        _this.net.setRequestManager(manager);
        return true;
    };
    // overwrite setProvider
    var setProvider = this.setProvider;
    this.setProvider = function () {
        setProvider.apply(_this, arguments);
        _this.setRequestManager(_this._requestManager);
    };
    this.net = new Net(this);
    [
        new Subscriptions({
            name: 'subscribe',
            type: 'shh',
            subscriptions: {
                'messages': {
                    params: 1
                    // inputFormatter: [formatters.inputPostFormatter],
                    // outputFormatter: formatters.outputPostFormatter
                }
            }
        }),
        new Method({
            name: 'getVersion',
            call: 'shh_version',
            params: 0
        }),
        new Method({
            name: 'getInfo',
            call: 'shh_info',
            params: 0
        }),
        new Method({
            name: 'setMaxMessageSize',
            call: 'shh_setMaxMessageSize',
            params: 1
        }),
        new Method({
            name: 'setMinPoW',
            call: 'shh_setMinPoW',
            params: 1
        }),
        new Method({
            name: 'markTrustedPeer',
            call: 'shh_markTrustedPeer',
            params: 1
        }),
        new Method({
            name: 'newKeyPair',
            call: 'shh_newKeyPair',
            params: 0
        }),
        new Method({
            name: 'addPrivateKey',
            call: 'shh_addPrivateKey',
            params: 1
        }),
        new Method({
            name: 'deleteKeyPair',
            call: 'shh_deleteKeyPair',
            params: 1
        }),
        new Method({
            name: 'hasKeyPair',
            call: 'shh_hasKeyPair',
            params: 1
        }),
        new Method({
            name: 'getPublicKey',
            call: 'shh_getPublicKey',
            params: 1
        }),
        new Method({
            name: 'getPrivateKey',
            call: 'shh_getPrivateKey',
            params: 1
        }),
        new Method({
            name: 'newSymKey',
            call: 'shh_newSymKey',
            params: 0
        }),
        new Method({
            name: 'addSymKey',
            call: 'shh_addSymKey',
            params: 1
        }),
        new Method({
            name: 'generateSymKeyFromPassword',
            call: 'shh_generateSymKeyFromPassword',
            params: 1
        }),
        new Method({
            name: 'hasSymKey',
            call: 'shh_hasSymKey',
            params: 1
        }),
        new Method({
            name: 'getSymKey',
            call: 'shh_getSymKey',
            params: 1
        }),
        new Method({
            name: 'deleteSymKey',
            call: 'shh_deleteSymKey',
            params: 1
        }),
        new Method({
            name: 'newMessageFilter',
            call: 'shh_newMessageFilter',
            params: 1
        }),
        new Method({
            name: 'getFilterMessages',
            call: 'shh_getFilterMessages',
            params: 1
        }),
        new Method({
            name: 'deleteMessageFilter',
            call: 'shh_deleteMessageFilter',
            params: 1
        }),
        new Method({
            name: 'post',
            call: 'shh_post',
            params: 1,
            inputFormatter: [null]
        }),
        new Method({
            name: 'unsubscribe',
            call: 'shh_unsubscribe',
            params: 1
        })
    ].forEach(function (method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });
};
Shh.prototype.clearSubscriptions = function () {
    this._requestManager.clearSubscriptions();
};
core.addProviders(Shh);
module.exports = Shh;


/***/ })

}]);