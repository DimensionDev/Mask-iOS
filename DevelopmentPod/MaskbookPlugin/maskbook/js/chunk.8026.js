"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8026,6685,5989],{

/***/ 33953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:t.rawValues?i:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

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

/***/ 13316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EyeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const EyeIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), undefined, '0 0 20 20');


/***/ }),

/***/ 72585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ EyeOffIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const EyeOffIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeOffIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#111432",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#ffffff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), undefined, '0 0 20 20');


/***/ }),

/***/ 1689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const File = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('File', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.5",
            d: "M8.08752 12.9375C8.08752 9.62379 10.4 6.9375 13.2525 6.9375H28.7473C31.5998 6.9375 33.9123 9.62379 33.9123 12.9375V36.9375C33.9123 40.2512 31.5998 42.9375 28.7473 42.9375H13.2525C10.4 42.9375 8.08752 40.2512 8.08752 36.9375V12.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.1",
            d: "M33.9122 20.3906V12.9375C33.9122 9.62379 31.5998 6.9375 28.7473 6.9375H22.3314L33.9122 20.3906Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M22.3314 6.9375L22.3314 14.3906C22.3314 17.7043 24.6439 20.3906 27.4964 20.3906L33.9122 20.3906L22.3314 6.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22.7565 22.8277C22.2814 22.2145 21.649 21.8834 21.0023 21.8834C20.3556 21.8834 19.7233 22.2145 19.2482 22.8277C18.7715 23.443 18.4959 24.2895 18.4959 25.1833V27.7068H23.5088V25.1833C23.5088 24.2895 23.2332 23.443 22.7565 22.8277ZM24.5113 27.7068V25.1833C24.5113 24.0179 24.1531 22.8894 23.5017 22.0486C22.8487 21.2057 21.951 20.7188 21.0023 20.7188C20.0536 20.7188 19.1559 21.2057 18.503 22.0486C17.8515 22.8894 17.4933 24.0179 17.4933 25.1833V27.7068H17.1007C16.2174 27.7068 15.4855 28.5263 15.4855 29.5597V34.0066C15.4855 35.0399 16.2174 35.8594 17.1007 35.8594H24.8985C25.7819 35.8594 26.5138 35.0399 26.5138 34.0066V29.5597C26.5138 28.5263 25.7819 27.7068 24.8985 27.7068H24.5113ZM25.5112 29.5597C25.5112 29.1896 25.2456 28.8715 24.8985 28.8715H17.1007C16.7536 28.8715 16.488 29.1896 16.488 29.5597V34.0066C16.488 34.3766 16.7536 34.6948 17.1007 34.6948H24.8985C25.2456 34.6948 25.5112 34.3766 25.5112 34.0066V29.5597Z",
            fill: "white"
        })
    ]
}), '0 0 42 48', [
    42,
    48
]);


/***/ }),

/***/ 55989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z_": () => (/* binding */ createDBAccess),
  "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
  "_X": () => (/* binding */ createTransaction)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/safari-14-idb-fix@3.0.0/node_modules/safari-14-idb-fix/dist/index.js
/**
 * Work around Safari 14 IndexedDB open bug.
 *
 * Safari has a horrible bug where IDB requests can hang while the browser is starting up. https://bugs.webkit.org/show_bug.cgi?id=226547
 * The only solution is to keep nudging it until it's awake.
 */
function idbReady() {
    var isSafari = !navigator.userAgentData &&
        /Safari\//.test(navigator.userAgent) &&
        !/Chrom(e|ium)\//.test(navigator.userAgent);
    // No point putting other browsers or older versions of Safari through this mess.
    if (!isSafari || !indexedDB.databases)
        return Promise.resolve();
    var intervalId;
    return new Promise(function (resolve) {
        var tryIdb = function () { return indexedDB.databases().finally(resolve); };
        intervalId = setInterval(tryIdb, 100);
        tryIdb();
    }).finally(function () { return clearInterval(intervalId); });
}

/* harmony default export */ const dist = (idbReady);

;// CONCATENATED MODULE: ./background/database/utils/openDB.ts



function createDBAccess(opener) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        shared/* MaskMessages.events.mobile_app_suspended.on */.ql.events.mobile_app_suspended.on(clean);
        setInterval(clean, /** 1 min */ 1000 * 60);
    }
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>db = undefined
            , {
                once: true
            });
        }
        db = undefined;
    }
    return async ()=>{
        if (true) {
            await dist();
        }
        (0,umd.assertEnvironment)(umd.Environment.ManifestBackground);
        if (db) {
            try {
                // try if the db still open
                const t = db.transaction([
                    db.objectStoreNames[0]
                ], 'readonly', {});
                t.commit();
                return db;
            } catch  {
                clean();
            }
        }
        db = await opener();
        db.addEventListener('close', clean, {
            once: true
        });
        db.addEventListener('error', clean, {
            once: true
        });
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        shared/* MaskMessages.events.mobile_app_suspended.on */.ql.events.mobile_app_suspended.on(clean);
        setInterval(clean, /** 1 min */ 1000 * 60);
    }
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>pendingOpen = db = undefined
            , {
                once: true
            });
        }
        pendingOpen = db = undefined;
    }
    let pendingOpen;
    async function open() {
        if (true) {
            await dist();
        }
        (0,umd.assertEnvironment)(umd.Environment.ManifestBackground);
        if (db?.version === latestVersion) return db;
        let currentVersion = firstVersionThatRequiresAsyncUpgrade;
        let lastVersionData = undefined;
        while(currentVersion < latestVersion){
            try {
                db = await opener(currentVersion, lastVersionData);
                // if the open success, the stored version is small or eq than currentTryOpenVersion
                // let's call the prepare function to do all the async jobs
                lastVersionData = await asyncUpgradePrepare(db);
            } catch (error) {
                if (currentVersion >= latestVersion) throw error;
            // if the stored database version is bigger than the currentTryOpenVersion
            // It will fail and we just move to next version
            }
            currentVersion += 1;
            db?.close();
            db = undefined;
        }
        db = await opener(currentVersion, lastVersionData);
        db.addEventListener('close', (e)=>db = undefined
        , {
            once: true
        });
        if (!db) throw new Error('Invalid state');
        return db;
    }
    return ()=>{
        // Share a Promise to prevent async upgrade for multiple times
        if (pendingOpen) return pendingOpen;
        const promise = pendingOpen = open();
        promise.catch(()=>pendingOpen = undefined
        );
        return promise;
    };
}
function createTransaction(db, mode) {
    // It must be a high order function to infer the type of UsedStoreName correctly.
    return (...storeNames)=>{
        return db.transaction(storeNames, mode);
    };
}


/***/ }),

/***/ 54494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ __deprecated__getStorage),
/* harmony export */   "X": () => (/* binding */ __deprecated__setStorage)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9084);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);


/**
 * Make sure that the storage is used serially.
 */ class MutexStorage {
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }
    async continue() {
        if (!this.locked) this.tasks.shift()?.();
    }
    async getStorage(key) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e, storage1)=>{
                if (e) reject(e);
                else resolve(storage1);
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    const stored = await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .timeout */ .Vs)(browser.storage.local.get(key), 3000, `Get ${key} timeout.`);
                    callback(null, stored?.[key]);
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    async setStorage(key, value) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e)=>{
                if (e) reject(e);
                else resolve();
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .timeout */ .Vs)(browser.storage.local.set({
                        [key]: value
                    }), 3000, `Set ${key} to ${value} timeout.`);
                    callback(null);
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    constructor(){
        this.tasks = [];
        this.locked = false;
    }
}
const storage = new MutexStorage();
/** Avoid using this. */ async function __deprecated__getStorage(key) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    const value = await storage.getStorage(key);
    return value;
}
/** Avoid using this. */ async function __deprecated__setStorage(key, value, options = {
    howToUpdate: 'replace'
}) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    if (options.howToUpdate === 'merge') value = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(await storage.getStorage(key) ?? {}, value);
    return storage.setStorage(key, value);
}


/***/ }),

/***/ 67968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__deprecated__getStorage": () => (/* reexport */ deprecated_storage/* __deprecated__getStorage */.$),
  "__deprecated__setStorage": () => (/* reexport */ deprecated_storage/* __deprecated__setStorage */.X),
  "fetch": () => (/* reexport */ fetch),
  "fetchJSON": () => (/* reexport */ fetchJSON),
  "openDashboard": () => (/* reexport */ popup_opener/* openDashboard */.f8),
  "openPopupWindow": () => (/* reexport */ popup_opener/* openPopupWindow */.lU),
  "queryExtensionPermission": () => (/* reexport */ request_permission/* queryExtensionPermission */.W0),
  "r2d2Fetch": () => (/* reexport */ r2d2Fetch),
  "removePopupWindow": () => (/* reexport */ popup_opener/* removePopupWindow */.Y8),
  "requestExtensionPermission": () => (/* reexport */ request_permission/* requestExtensionPermission */.rc),
  "resolveTCOLink": () => (/* reexport */ resolveTCOLink),
  "saveFileFromBuffer": () => (/* reexport */ download/* saveFileFromBuffer */.d)
});

;// CONCATENATED MODULE: ./background/services/helper/fetch.ts
async function fetch(url) {
    const res = await globalThis.fetch(url);
    return res.blob();
}
/** @deprecated */ async function fetchJSON(url) {
    const res = await globalThis.fetch(url);
    return res.json();
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
;// CONCATENATED MODULE: ./background/services/helper/short-link-resolver.ts

const cache = new Map();
async function resolver(u) {
    if (!u.startsWith('https://t.co/')) return null;
    if (cache.has(u)) return cache.get(u);
    const res = await globalThis.fetch(u, {
        redirect: 'error',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
    });
    const text = await res.text();
    const url = text.match(/URL=(.+).><\/noscript/)?.[1];
    if (url) cache.set(u, url);
    return url ?? null;
}
/** Resolve a https://t.co/ link to it's real address. */ const resolveTCOLink = (0,esm/* memoizePromise */.J3)(resolver, (x)=>x
);

// EXTERNAL MODULE: ./background/services/helper/popup-opener.ts
var popup_opener = __webpack_require__(31118);
// EXTERNAL MODULE: ./background/services/helper/deprecated-storage.ts
var deprecated_storage = __webpack_require__(54494);
// EXTERNAL MODULE: ./background/services/helper/request-permission.ts
var request_permission = __webpack_require__(39126);
// EXTERNAL MODULE: ./shared/helpers/download.ts
var download = __webpack_require__(42886);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./background/services/helper/r2d2Fetch.ts

const r2d2URL = 'r2d2.to';
var R2d2Workers;
(function(R2d2Workers) {
    R2d2Workers["opensea"] = 'opensea-proxy';
    R2d2Workers["gitcoin"] = 'gitcoin-agent';
    R2d2Workers["coinMarketCap"] = 'coinmarketcap-agent';
    R2d2Workers["goPlusLabs"] = 'gopluslabs';
})(R2d2Workers || (R2d2Workers = {}));
const matchers = [
    [
        'https://api.opensea.io',
        R2d2Workers.opensea
    ],
    [
        'https://gitcoin.co',
        R2d2Workers.gitcoin
    ],
    [
        'https://web-api.coinmarketcap.com',
        R2d2Workers.coinMarketCap
    ],
    [
        'https://api.gopluslabs.io',
        R2d2Workers.goPlusLabs
    ], 
];
/**
 * Why use r2d2 fetch: some third api provider will be block in Firefox and protect api key
 * @returns fetch response
 * @param input
 * @param init
 */ async function r2d2Fetch(input, init) {
    const url = init instanceof Request ? init.url : input;
    // ipfs
    if (url.startsWith('ipfs://')) return globalThis.fetch(dist_default()('https://cors.r2d2.to?https://coldcdn.com/api/cdn/mipfsygtms/ipfs/:ipfs', {
        ipfs: url.replace('ipfs://', '')
    }), init);
    // r2d2
    if (url.includes('r2d2.to')) return globalThis.fetch(input, init);
    // r2d2 worker
    const r2deWorkerType = matchers.find((x)=>url.startsWith(x[0])
    )?.[1];
    if (r2deWorkerType) return globalThis.fetch(url.replace(new URL(url).origin, `https://${r2deWorkerType}.${r2d2URL}`), init);
    // fallback
    return globalThis.fetch(input, init);
}

;// CONCATENATED MODULE: ./background/services/helper/index.ts









/***/ }),

/***/ 31118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y8": () => (/* binding */ removePopupWindow),
/* harmony export */   "f8": () => (/* binding */ openDashboard),
/* harmony export */   "lU": () => (/* binding */ openPopupWindow)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94670);



let currentPopupWindowId = 0;
function isLocked() {
    return new Promise((resolve)=>{
        const off = _shared__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.wallet_is_locked.on */ .ql.events.wallet_is_locked.on(([type, value])=>{
            if (type === 'request') return;
            off();
            resolve(value);
            // in case something went wrong
            setTimeout(()=>resolve(false)
            , 200);
        });
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.wallet_is_locked.sendToLocal */ .ql.events.wallet_is_locked.sendToLocal([
            'request'
        ]);
    });
}
const exclusionDetectLocked = [
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.PersonaSignRequest */ .mZ.PersonaSignRequest,
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.Unlock */ .mZ.Unlock,
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.ConnectWallet */ .mZ.ConnectWallet
];
async function openPopupWindow(route, params) {
    const windows = await browser.windows.getAll();
    const popup = windows.find((win)=>win && win.type === 'popup' && win.id === currentPopupWindowId
    );
    // Focus on the pop-up window if it already exists
    if (popup) {
        await browser.windows.update(currentPopupWindowId, {
            focused: true
        });
    } else {
        const locked = await isLocked();
        const shouldUnlockWallet = locked && !exclusionDetectLocked.includes(route ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.Wallet */ .mZ.Wallet);
        const url = urlcat__WEBPACK_IMPORTED_MODULE_1___default()('popups.html#', shouldUnlockWallet ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.Unlock */ .mZ.Unlock : route ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.Wallet */ .mZ.Wallet, {
            toBeClose: 1,
            from: locked && route ? route : null,
            ...params
        });
        let left;
        let top;
        try {
            const lastFocused = await browser.windows.getLastFocused();
            // Position window in top right corner of lastFocused window.
            top = lastFocused.top ?? 0;
            left = (lastFocused.left ?? 0) + (lastFocused.width ?? 0) - 350;
        } catch (error_) {
            // The following properties are more than likely 0, due to being
            // opened from the background chrome process for the extension that
            // has no physical dimensions
            const { screenX , screenY , outerWidth  } = window;
            top = Math.max(screenY, 0);
            left = Math.max(screenX + (outerWidth - 350), 0);
        }
        const { id  } = await browser.windows.create({
            url: browser.runtime.getURL(url),
            width: 350,
            height: 640,
            type: 'popup',
            state: 'normal',
            left,
            top
        });
        // update currentPopupWindowId and clean event
        if (id) {
            currentPopupWindowId = id;
            browser.windows.onRemoved.addListener(function listener(windowID) {
                if (windowID === id) {
                    currentPopupWindowId = 0;
                }
            });
            // firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1271047
            if (false) {}
        }
    }
}
async function removePopupWindow() {
    if (!currentPopupWindowId) return;
    browser.windows.remove(currentPopupWindowId);
    currentPopupWindowId = 0;
}
async function openDashboard(route, search) {
    return browser.tabs.create({
        active: true,
        url: browser.runtime.getURL(`/dashboard.html#${route}${search ? `?${search}` : ''}`)
    });
}


/***/ }),

/***/ 39126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BN": () => (/* binding */ requestSiteAdaptorsPermission),
/* harmony export */   "W0": () => (/* binding */ queryExtensionPermission),
/* harmony export */   "Xm": () => (/* binding */ requestHostPermission),
/* harmony export */   "rc": () => (/* binding */ requestExtensionPermission)
/* harmony export */ });
/* harmony import */ var _shared_definitions_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38372);
/* harmony import */ var _shared_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39820);


async function requestExtensionPermission(permission) {
    if (_shared_flags__WEBPACK_IMPORTED_MODULE_1__/* .Flags.no_web_extension_dynamic_permission_request */ .vU.no_web_extension_dynamic_permission_request) return true;
    if (await browser.permissions.contains(permission)) return true;
    try {
        return await browser.permissions.request(permission);
    } catch  {
    // which means we're on Firefox.
    // Chrome allows permission request from the background.
    }
    const popup = await browser.windows.create({
        height: 600,
        width: 350,
        type: 'popup',
        url: (0,_shared_definitions_routes__WEBPACK_IMPORTED_MODULE_0__/* .getPermissionRequestURL */ .r)(permission)
    });
    return new Promise((resolve)=>{
        browser.windows.onRemoved.addListener(function listener(windowID) {
            if (windowID !== popup.id) return;
            resolve(browser.permissions.contains(permission));
            browser.windows.onRemoved.removeListener(listener);
        });
    });
}
async function requestHostPermission(origins) {
    const currentOrigins = (await browser.permissions.getAll()).origins || [];
    const extra = origins.filter((i)=>!currentOrigins?.includes(i)
    );
    if (!extra.length) return true;
    return requestExtensionPermission({
        origins: extra
    });
}
function queryExtensionPermission(permission) {
    return browser.permissions.contains(permission);
}
/** @internal */ function requestSiteAdaptorsPermission(defines) {
    return requestExtensionPermission({
        origins: defines.map((x)=>x.declarativePermissions.origins
        ).flat()
    });
}


/***/ }),

/***/ 38372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ getPermissionRequestURL),
/* harmony export */   "y": () => (/* binding */ getPopupRouteURLWithNoParam)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);

function getPopupRouteURLWithNoParam(kind) {
    return browser.runtime.getURL(`/popups.html#${kind}`);
}
function getPermissionRequestURL(permission) {
    const { origins =[] , permissions =[]  } = permission;
    const params = new URLSearchParams();
    for (const each of origins)params.append('origins', each);
    for (const each1 of permissions)params.append('permissions', each1);
    return `${getPopupRouteURLWithNoParam(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.RequestPermission */ .mZ.RequestPermission)}?${params.toString()}`;
}


/***/ }),

/***/ 98027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PasswordField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29324);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48941);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11877);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72585);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13316);





const PasswordField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_2__/* .StyledInput */ .F, {
        ...props,
        type: showPassword ? 'text' : 'password',
        ref: ref,
        InputProps: {
            endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    "aria-label": "toggle password visibility",
                    onClick: ()=>setShowPassword(!showPassword)
                    ,
                    onMouseDown: (event)=>event.preventDefault()
                    ,
                    edge: "end",
                    size: "small",
                    children: showPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .EyeOffIcon */ .X, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .EyeIcon */ .t, {})
                })
            })
        }
    });
}));


/***/ }),

/***/ 11877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48591);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()(({ palette  })=>({
        textField: {
            width: '100%'
        },
        textFieldInput: {
            backgroundColor: palette.mode === 'light' ? '#F7F9FA' : palette.background.default,
            borderRadius: 6
        },
        inputFocused: {
            backgroundColor: `${palette.mode === 'light' ? '#FFFFFF' : palette.background.default} !important`,
            boxShadow: `0 0 0 2px ${palette.mode === 'dark' ? '#4F5378' : 'rgba(28, 104, 243, 0.2)'}`
        },
        input: {
            padding: '11px 9px',
            fontSize: 12,
            borderRadius: 6
        }
    })
);
const StyledInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...props,
        inputRef: ref,
        variant: "filled",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.textField, props.className),
        autoComplete: "off",
        inputProps: {
            className: classes.input,
            'aria-autocomplete': 'none',
            ...props.inputProps
        },
        InputProps: {
            ...props.InputProps,
            disableUnderline: true,
            classes: {
                root: classes.textFieldInput,
                focused: classes.inputFocused,
                ...props.InputProps?.classes
            }
        },
        FormHelperTextProps: {
            ...props.FormHelperTextProps,
            style: {
                marginLeft: 0,
                color: '#ff5f5f'
            }
        }
    });
}));


/***/ }),

/***/ 91527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_ImportWallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.16.0/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(7055);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(33953);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(80875);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useDropArea.js
var useDropArea = __webpack_require__(84429);
// EXTERNAL MODULE: ../icons/general/File.tsx
var File = __webpack_require__(1689);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/JsonFileBox/index.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {},
        fileBox: {},
        file: {
            display: 'none'
        },
        enter: {
            color: theme.palette.text.hint,
            whiteSpace: 'pre-line',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            cursor: 'pointer',
            transition: '0.4s',
            overflow: 'hidden',
            padding: '8px 0',
            backgroundColor: '#F7F9FA',
            '&[data-active=true]': {
                color: 'black'
            }
        },
        tips: {
            fontSize: 12,
            lineHeight: '16px'
        }
    })
);
const JsonFileBox = /*#__PURE__*/ (0,react.memo)(({ onChange  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const inputRef = (0,react.useRef)(null);
    const [file, setFile] = (0,react.useState)();
    const [bound, { over  }] = (0,useDropArea/* default */.Z)({
        onFiles (files) {
            setFile(files[0]);
        }
    });
    (0,react.useEffect)(()=>{
        if (file) {
            (0,esm/* blobToText */.Gx)(file).then((result)=>onChange(result)
            );
        }
    }, [
        file,
        onChange
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        ...bound,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.fileBox,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    className: classes.file,
                    type: "file",
                    accept: "application/json",
                    ref: inputRef,
                    onChange: ({ currentTarget  })=>{
                        if (currentTarget.files) setFile(currentTarget.files.item(0));
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.enter,
                    "data-active": over,
                    onClick: ()=>inputRef.current?.click()
                    ,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(File/* File */.$, {
                            style: {
                                fontSize: 32,
                                width: 32,
                                height: 32
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.tips,
                            children: over ? t('popups_wallet_backup_json_file_drag_tip') : file ? file.name : t('popups_wallet_backup_json_file_click_tip')
                        })
                    ]
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(11877);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/index.ts + 4 modules
var services = __webpack_require__(60364);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/components/PageHeader/index.tsx
var PageHeader = __webpack_require__(39841);
// EXTERNAL MODULE: ./src/extension/popups/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(98027);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(7197);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ./src/extension/popups/hook/useTitle.ts
var useTitle = __webpack_require__(43240);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/ImportWallet/index.tsx
























const ImportWallet_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 10px'
    },
    textField: {
        marginTop: 10
    },
    form: {
        marginTop: 26,
        width: '100%'
    },
    label: {
        fontSize: 12,
        lineHeight: '16px',
        color: '#1C68F3'
    },
    tips: {
        color: '#7B8192',
        fontSize: 12,
        lineHeight: '16px',
        marginTop: 10
    },
    tabs: {
        marginTop: 20,
        minHeight: 'unset'
    },
    tab: {
        fontSize: 12,
        lineHeight: '16px',
        padding: 9,
        minWidth: 0,
        backgroundColor: '#F7F9FA',
        minHeight: 'unset'
    },
    indicator: {
        display: 'none'
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    tabPanel: {
        padding: '16px 0 0 0',
        flex: 1,
        position: 'relative'
    },
    multiline: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    multilineInput: {
        padding: 6,
        borderRadius: 6,
        backgroundColor: '#F7F9FA',
        height: '100%'
    },
    textArea: {
        padding: 0,
        fontSize: 12,
        height: '100%!important'
    },
    button: {
        fontWeight: 600,
        padding: '9px 10px',
        borderRadius: 20
    },
    error: {
        color: '#FF5F5F',
        fontSize: 12,
        marginTop: 24,
        lineHeight: '16px',
        wordBreak: 'break-all'
    },
    controller: {
        padding: '20px 10px'
    },
    disabled: {
        opacity: 0.5,
        backgroundColor: '#1C68F3!important',
        color: '#ffffff!important'
    }
});
const ImportWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { classes  } = ImportWallet_useStyles();
    const [currentTab, onChange, tabs] = (0,entry/* useTabs */.YE)('mnemonic', 'json', 'privateKey');
    const [mnemonic, setMnemonic] = (0,react.useState)('');
    const [keyStoreContent, setKeyStoreContent] = (0,react.useState)('');
    const [keyStorePassword, setKeyStorePassword] = (0,react.useState)('');
    const [privateKey, setPrivateKey] = (0,react.useState)('');
    const [errorMessage, setErrorMessage] = (0,react.useState)('');
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            name: lib.z.string().min(1).max(12)
        });
    }, []);
    const { control , handleSubmit , formState: { errors , isValid  } ,  } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            name: ''
        }
    });
    const disabled = (0,react.useMemo)(()=>{
        if (!isValid) return true;
        switch(currentTab){
            case tabs.mnemonic:
                return !mnemonic;
            case tabs.json:
                return !keyStoreContent;
            case tabs.privateKey:
                return !privateKey;
            default:
                return true;
        }
    }, [
        currentTab,
        mnemonic,
        keyStorePassword,
        keyStoreContent,
        privateKey,
        isValid,
        tabs
    ]);
    const [{ loading  }, onDerivedWallet] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        if (!disabled) {
            try {
                switch(currentTab){
                    case tabs.mnemonic:
                        // valid the mnemonic
                        await (0,services.getDerivableAccounts)(mnemonic, 0, 1);
                        const params = (0,dist.query)({
                            name: data.name
                        });
                        navigate(src/* PopupRoutes.AddDeriveWallet */.mZ.AddDeriveWallet + '?' + params, {
                            replace: true,
                            state: {
                                mnemonic
                            }
                        });
                        break;
                    case tabs.json:
                        const wallet = await messages/* WalletRPC.recoverWalletFromKeyStoreJSON */.V.recoverWalletFromKeyStoreJSON(data.name, keyStoreContent, keyStorePassword);
                        if (!settings/* currentMaskWalletAccountSettings.value */.T_.value) {
                            await messages/* WalletRPC.updateMaskAccount */.V.updateMaskAccount({
                                account: wallet
                            });
                        }
                        navigate(src/* PopupRoutes.Wallet */.mZ.Wallet, {
                            replace: true
                        });
                        await service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow();
                        break;
                    case tabs.privateKey:
                        const privateKeyWallet = await messages/* WalletRPC.recoverWalletFromPrivateKey */.V.recoverWalletFromPrivateKey(data.name, privateKey);
                        await messages/* WalletRPC.updateMaskAccount */.V.updateMaskAccount({
                            account: privateKeyWallet
                        });
                        await service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow();
                        navigate(src/* PopupRoutes.Wallet */.mZ.Wallet, {
                            replace: true
                        });
                        break;
                    default:
                        break;
                }
            } catch (error) {
                if (error instanceof Error) {
                    setErrorMessage(error.message);
                }
            }
        }
    }, [
        mnemonic,
        currentTab,
        keyStoreContent,
        keyStorePassword,
        privateKey,
        disabled,
        history,
        tabs,
        connection
    ]);
    const onSubmit = handleSubmit(onDerivedWallet);
    (0,useTitle/* useTitle */.Z)(t('popups_import_the_wallet'));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PageHeader/* PageHeader */.m, {
                        title: t('plugin_wallet_import_wallet')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                        className: classes.form,
                        onSubmit: onSubmit,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.label,
                                    children: t('wallet_name')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                    render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                            ...field,
                                            classes: {
                                                root: classes.textField
                                            },
                                            error: !!errors.name?.message,
                                            helperText: errors.name?.message,
                                            variant: "filled",
                                            placeholder: t('popups_wallet_name_placeholder')
                                        })
                                    ,
                                    control: control,
                                    name: "name"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                        value: currentTab,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
                                value: currentTab,
                                variant: "fullWidth",
                                className: classes.tabs,
                                classes: {
                                    indicator: classes.indicator
                                },
                                onChange: (event, tab)=>{
                                    if (errorMessage) setErrorMessage('');
                                    onChange(event, tab);
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                        label: t('popups_wallet_name_mnemonic'),
                                        value: tabs.mnemonic,
                                        classes: {
                                            root: classes.tab,
                                            selected: classes.selected
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                        label: t('popups_wallet_name_json_file'),
                                        value: tabs.json,
                                        classes: {
                                            root: classes.tab,
                                            selected: classes.selected
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                        label: t('popups_wallet_name_private_key'),
                                        value: tabs.privateKey,
                                        classes: {
                                            root: classes.tab,
                                            selected: classes.selected
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                value: tabs.mnemonic,
                                className: classes.tabPanel,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                    type: "password",
                                    value: mnemonic,
                                    onChange: (e)=>{
                                        if (errorMessage) setErrorMessage('');
                                        setMnemonic(e.target.value.replaceAll('\n', ' '));
                                    },
                                    placeholder: t('popups_wallet_name_mnemonic_placeholder'),
                                    InputProps: {
                                        disableUnderline: true
                                    },
                                    className: classes.textField
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel/* default */.Z, {
                                value: tabs.json,
                                className: classes.tabPanel,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(JsonFileBox, {
                                        onChange: (content)=>setKeyStoreContent(content)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                                        classes: {
                                            root: classes.textField
                                        },
                                        placeholder: t('popups_wallet_name_origin_password'),
                                        onChange: (e)=>{
                                            if (errorMessage) setErrorMessage('');
                                            setKeyStorePassword(e.target.value);
                                        },
                                        value: keyStorePassword
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                value: tabs.privateKey,
                                className: classes.tabPanel,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                    type: "password",
                                    value: privateKey,
                                    onChange: (e)=>{
                                        if (errorMessage) setErrorMessage('');
                                        setPrivateKey(e.target.value);
                                    },
                                    rows: 4,
                                    placeholder: t('popups_wallet_name_private_key'),
                                    InputProps: {
                                        disableUnderline: true
                                    },
                                    className: classes.textField
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        children: errorMessage
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.controller,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                    loading: loading,
                    variant: "contained",
                    fullWidth: true,
                    classes: {
                        root: classes.button,
                        disabled: classes.disabled
                    },
                    disabled: disabled,
                    onClick: onSubmit,
                    children: t('import')
                })
            })
        ]
    });
});
/* harmony default export */ const Wallet_ImportWallet = (ImportWallet);


/***/ }),

/***/ 39841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21784);
/* harmony import */ var _components_NetworkSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60534);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        color: '#151818',
        lineHeight: 1.5,
        fontWeight: 600
    }
});
const PageHeader = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ title  })=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.header,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.title,
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NetworkSelector__WEBPACK_IMPORTED_MODULE_3__/* .NetworkSelector */ .k, {})
        ]
    });
});


/***/ }),

/***/ 86008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ createWalletDBAccess)
/* harmony export */ });
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63338);
/* harmony import */ var _background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55989);


function path(x) {
    return x;
}
const createWalletDBAccess = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__/* .openDB */ .X3)('maskbook-plugin-wallet', 9, {
        async upgrade (db, oldVersion, newVersion, tx) {
            function v0_v1() {
                db.createObjectStore('Wallet', {
                    keyPath: path('address')
                });
            }
            function v8_v9() {
                const pluginStore = 'PluginStore';
                db.objectStoreNames.contains(pluginStore) && db.deleteObjectStore(pluginStore);
                db.createObjectStore('UnconfirmedRequestChunk', {
                    keyPath: path('record_id')
                });
            }
            if (oldVersion < 1) v0_v1();
            if (oldVersion < 9) v8_v9();
        }
    });
});


/***/ }),

/***/ 65703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hb": () => (/* binding */ updateMaskAccount),
/* harmony export */   "Ih": () => (/* binding */ setDefaultMaskAccount),
/* harmony export */   "JB": () => (/* binding */ getSupportedNetworks),
/* harmony export */   "RG": () => (/* binding */ rejectMaskAccount),
/* harmony export */   "RS": () => (/* binding */ selectMaskAccount),
/* harmony export */   "X3": () => (/* binding */ resetMaskAccount),
/* harmony export */   "Zb": () => (/* binding */ resolveMaskAccount)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29730);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94861);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72499);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94670);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91788);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46123);







async function setDefaultMaskAccount() {
    if (_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletAccountSettings.value */ .T_.value) return;
    const wallets = await _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getWallets */ .V.getWallets();
    const address = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(wallets)?.address;
    if (address) await updateMaskAccount({
        account: address
    });
}
async function updateMaskAccount(options) {
    if (options.chainId && !options.networkType) options.networkType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .chainResolver.chainNetworkType */ .VU.chainNetworkType(options.chainId);
    if (!options.chainId && options.networkType) options.chainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .networkResolver.networkChainId */ .LJ.networkChainId(options.networkType);
    const { account , chainId , networkType  } = options;
    if (chainId) _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletChainIdSettings.value */ .DT.value = chainId;
    if (networkType) _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletNetworkSettings.value */ .br.value = networkType;
    if (account && wallet_ts__WEBPACK_IMPORTED_MODULE_0__.EthereumAddress.isValid(account)) {
        _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletAccountSettings.value */ .T_.value = account;
        await resolveMaskAccount([
            account
        ]);
    }
}
async function resetMaskAccount() {
    _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletChainIdSettings.value */ .DT.value = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ChainId.Mainnet */ .a_.Mainnet;
    _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletNetworkSettings.value */ .br.value = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Ethereum */ .td.Ethereum;
    _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletAccountSettings.value */ .T_.value = '';
}
// #region select wallet with popups
let deferred;
async function selectMaskAccount() {
    deferred = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_4__/* .defer */ .PQ)();
    return deferred?.[0] ?? [];
}
async function resolveMaskAccount(accounts) {
    const [, resolve] = deferred ?? [];
    resolve?.(accounts);
    deferred = null;
}
async function rejectMaskAccount() {
    const [, resolve] = deferred ?? [];
    resolve?.([]);
    deferred = null;
}
// #endregion
async function getSupportedNetworks() {
    return [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Ethereum */ .td.Ethereum,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.bsc_enabled */ .vU.bsc_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Binance */ .td.Binance : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.polygon_enabled */ .vU.polygon_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Polygon */ .td.Polygon : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.arbitrum_enabled */ .vU.arbitrum_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Arbitrum */ .td.Arbitrum : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.xdai_enabled */ .vU.xdai_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.xDai */ .td.xDai : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.celo_enabled */ .vU.celo_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Celo */ .td.Celo : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.fantom_enabled */ .vU.fantom_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Fantom */ .td.Fantom : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.avalanche_enabled */ .vU.avalanche_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Avalanche */ .td.Avalanche : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.aurora_enabled */ .vU.aurora_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Aurora */ .td.Aurora : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.harmony_enabled */ .vU.harmony_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Harmony */ .td.Harmony : undefined, 
    ].filter(Boolean);
}


/***/ }),

/***/ 80956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ fromKeyStore)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js
var buffer = __webpack_require__(15313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/scrypt-js@3.0.1/node_modules/scrypt-js/scrypt.js
var scrypt = __webpack_require__(37508);
var scrypt_default = /*#__PURE__*/__webpack_require__.n(scrypt);
// EXTERNAL MODULE: ../../node_modules/.pnpm/z-schema@5.0.3/node_modules/z-schema/src/ZSchema.js
var ZSchema = __webpack_require__(63740);
var ZSchema_default = /*#__PURE__*/__webpack_require__.n(ZSchema);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/keystore/schema.json
const schema_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","type":"object","required":["version","id","address","crypto"],"properties":{"version":{"const":3},"id":{"type":"string"},"address":{"$ref":"#/definitions/address"},"crypto":{"type":"object","allOf":[{"$ref":"#/definitions/aes-cipher"},{"$ref":"#/definitions/key-derivation"},{"$ref":"#/definitions/authentication"}]}},"definitions":{"address":{"type":"string","pattern":"^[a-fA-F0-9]{40}$"},"aes-cipher":{"type":"object","properties":{"cipher":{"enum":["aes-128-ctr","aes-128-cbc"]},"cipherparams":{"type":"object","properties":{"iv":{"type":"string","pattern":"^[a-fA-F0-9]{32}$"}},"required":["iv"],"additionalProperties":false},"ciphertext":{"$ref":"#/definitions/encoded-string"}},"required":["cipher","ciphertext","cipherparams"]},"key-derivation":{"oneOf":[{"$ref":"#/definitions/pbkdf2"},{"$ref":"#/definitions/scrypt"}],"required":["kdf","kdfparams"]},"pbkdf2":{"type":"object","properties":{"kdf":{"const":"pbkdf2"},"kdfparams":{"type":"object","properties":{"c":{"type":"number","minimum":1000},"prf":{"const":"hmac-sha256"},"dklen":{"type":"number","minimum":16},"salt":{"$ref":"#/definitions/encoded-string"}},"required":["c","prf","dklen","salt"],"additionalProperties":false}}},"scrypt":{"type":"object","properties":{"kdf":{"const":"scrypt"},"kdfparams":{"type":"object","properties":{"n":{"type":"number","minimum":1},"p":{"type":"number","minimum":1},"r":{"type":"number","minimum":1},"dklen":{"type":"number","minimum":16},"salt":{"$ref":"#/definitions/encoded-string"}},"required":["n","p","r","dklen","salt"],"additionalProperties":false}}},"authentication":{"type":"object","properties":{"mac":{"$ref":"#/definitions/encoded-string"}},"required":["mac"]},"encoded-string":{"type":"string","pattern":"^[a-fA-F0-9]{64}$"}}}');
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/keystore/utils.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];



function loadKeyStore(input) {
    let store;
    try {
        store = JSON.parse(input);
    } catch  {
        throw new Error('JSON file is incorrect');
    }
    const validator = new (ZSchema_default())({
        strictMode: true,
        breakOnFirstError: true
    });
    validator.validate(input, schema_namespaceObject);
    return store;
}
function assertKeyDerivation(keystore, derivedKey) {
    const payload = Buffer.concat([
        derivedKey.slice(16, 32),
        Buffer.from(keystore.ciphertext, 'hex')
    ]);
    const valid = (0,lib.sha3)(`0x${payload.toString('hex')}`) === `0x${keystore.mac}`;
    if (!valid) {
        throw new Error('Password is incorrect');
    }
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/keystore/index.ts



async function fromKeyStore(input, password) {
    const { crypto , address  } = loadKeyStore(input);
    const derivedKey = await makeDerivedKey(crypto, password);
    assertKeyDerivation(crypto, derivedKey);
    const seed = await decrypt(crypto.cipher, derivedKey, buffer.Buffer.from(crypto.ciphertext, 'hex'), buffer.Buffer.from(crypto.cipherparams.iv, 'hex'));
    return {
        address: `0x${address}`,
        privateKey: `0x${seed}`
    };
}
async function decrypt(cipher, derivedKey, cipherText, iv) {
    const name = cipher === 'aes-128-ctr' ? 'AES-CTR' : 'AES-CBC';
    derivedKey = derivedKey.slice(0, 16);
    const length = 128;
    const key = await crypto.subtle.importKey('raw', derivedKey, {
        name,
        length
    }, false, [
        'decrypt'
    ]);
    const aes_ctr_params = {
        name,
        counter: iv,
        length
    };
    const aes_cbc_params = {
        name,
        iv
    };
    const seed = await crypto.subtle.decrypt(cipher === 'aes-128-ctr' ? aes_ctr_params : aes_cbc_params, key, cipherText);
    return buffer.Buffer.from(seed).toString('hex');
}
async function makeDerivedKey(keystore, password) {
    const salt = buffer.Buffer.from(keystore.kdfparams.salt, 'hex');
    if (keystore.kdf === 'scrypt') {
        const { n , r , p , dklen  } = keystore.kdfparams;
        return scrypt_default().scrypt(password, salt, n, r, p, dklen);
    } else if (keystore.kdf === 'pbkdf2') {
        const iterations = keystore.kdfparams.c;
        const key = await crypto.subtle.importKey('raw', password, {
            name: 'PBKDF2'
        }, false, [
            'deriveBits'
        ]);
        const params = {
            name: 'PBKDF2',
            salt,
            iterations,
            hash: 'SHA-256'
        };
        return new Uint8Array(await crypto.subtle.deriveBits(params, key, 256));
    }
    throw new Error('Unsupported key derivation scheme');
}


/***/ }),

/***/ 47805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nt": () => (/* binding */ topUnconfirmedRequest),
/* harmony export */   "SP": () => (/* binding */ getUnconfirmedRequests),
/* harmony export */   "_b": () => (/* binding */ clearUnconfirmedRequests),
/* harmony export */   "fr": () => (/* binding */ shiftUnconfirmedRequest),
/* harmony export */   "v0": () => (/* binding */ updateUnconfirmedRequest),
/* harmony export */   "wI": () => (/* binding */ deleteUnconfirmedRequest),
/* harmony export */   "xD": () => (/* binding */ pushUnconfirmedRequest)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29730);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10503);
/* harmony import */ var _background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55989);
/* harmony import */ var _database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86008);
/* harmony import */ var _background_services_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67968);





const MAX_UNCONFIRMED_REQUESTS_SIZE = 1;
const MAIN_RECORD_ID = '0';
function requestSorter(a, z) {
    return (a.id ?? 0 - z.id) ?? 0;
}
async function getUnconfirmedRequests() {
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readonly')('UnconfirmedRequestChunk');
    const chunk = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    if (!chunk) return [];
    return chunk.requests.slice(0, MAX_UNCONFIRMED_REQUESTS_SIZE).sort(requestSorter);
}
async function topUnconfirmedRequest() {
    return (0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(await getUnconfirmedRequests());
}
async function shiftUnconfirmedRequest() {
    const now = new Date();
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    const requests = (chunk_?.requests ?? []).sort(requestSorter);
    if (!chunk_) return;
    if (!requests.length) return;
    const payload = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(requests);
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests: requests.slice(1)
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    // TODO: hasRequest is not the best definition
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.requestsUpdated.sendToAll */ .R$.events.requestsUpdated.sendToAll({
        hasRequest: false
    });
    return payload;
}
async function pushUnconfirmedRequest(payload) {
    const now = new Date();
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    const requests = chunk_?.requests ?? [];
    // validate if it's still possible to push a new request
    if (requests.length >= MAX_UNCONFIRMED_REQUESTS_SIZE) {
        await (0,_background_services_helper__WEBPACK_IMPORTED_MODULE_3__.openPopupWindow)();
        throw new Error('Unable to add more request.');
    }
    const chunk = chunk_ ? {
        ...chunk_,
        updatedAt: now,
        requests: requests.concat(payload)
    } : {
        record_id: MAIN_RECORD_ID,
        createdAt: now,
        updatedAt: now,
        requests: [
            payload
        ]
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.requestsUpdated.sendToAll */ .R$.events.requestsUpdated.sendToAll({
        hasRequest: true
    });
    return payload;
}
async function updateUnconfirmedRequest(payload) {
    const now = new Date();
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    if (!chunk_?.requests.length) throw new Error('No request to update.');
    const requests = chunk_?.requests?.map((item)=>{
        if (item.id !== payload.id) return item;
        return payload;
    }) ?? [];
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.requestsUpdated.sendToAll */ .R$.events.requestsUpdated.sendToAll({
        hasRequest: true
    });
    return payload;
}
async function deleteUnconfirmedRequest(payload) {
    const now = new Date();
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    const requests = (chunk_?.requests ?? []).filter((x)=>x.id !== payload.id
    );
    if (!chunk_) return;
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.requestsUpdated.sendToAll */ .R$.events.requestsUpdated.sendToAll({
        hasRequest: false
    });
    return payload;
}
async function clearUnconfirmedRequests() {
    const now = new Date();
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    const requests = chunk_?.requests ?? [];
    if (!chunk_) return;
    if (!requests.length) return;
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests: []
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.requestsUpdated.sendToAll */ .R$.events.requestsUpdated.sendToAll({
        hasRequest: false
    });
}


/***/ }),

/***/ 89993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gk": () => (/* binding */ confirmRequest),
/* harmony export */   "QN": () => (/* binding */ rejectRequest),
/* harmony export */   "by": () => (/* binding */ getError),
/* harmony export */   "lW": () => (/* binding */ send),
/* harmony export */   "yT": () => (/* binding */ sendPayload)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75692);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46123);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47104);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72499);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2046);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46815);
/* harmony import */ var _background_services_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67968);
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76536);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91788);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29330);







var JSON_RPC_ERROR_CODE;
(function(JSON_RPC_ERROR_CODE) {
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["INVALID_REQUEST"] = -32600] = "INVALID_REQUEST";
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["METHOD_NOT_FOUND"] = 32601] = "METHOD_NOT_FOUND";
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["INTERNAL_ERROR"] = -32603] = "INTERNAL_ERROR";
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["SERVER_ERROR_RANGE_START"] = -32000] = "SERVER_ERROR_RANGE_START";
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["SERVER_ERROR_RANGE_END"] = -32099] = "SERVER_ERROR_RANGE_END";
})(JSON_RPC_ERROR_CODE || (JSON_RPC_ERROR_CODE = {}));
const UNCONFIRMED_CALLBACK_MAP = new Map();
let id = 0;
const { RPC_WEIGHTS =[]  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getRPCConstants */ .t0)(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet);
const seed = Math.floor(Math.random() * RPC_WEIGHTS.length);
const providerPool = new Map();
function createProviderInstance(url) {
    const instance = providerPool.get(url);
    if (instance) return instance;
    const newInstance = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(url, {
        timeout: 30 * 1000,
        // @ts-ignore
        clientConfig: {
            keepalive: true,
            keepaliveInterval: 1
        },
        reconnect: {
            auto: true,
            delay: 5000,
            maxAttempts: Number.MAX_SAFE_INTEGER,
            onTimeout: true
        }
    });
    providerPool.set(url, newInstance);
    return newInstance;
}
async function createProvider(chainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet) {
    const { RPC_URLS =[] , RPC_WEIGHTS: RPC_WEIGHTS1 = []  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getRPCConstants */ .t0)(chainId);
    const url = RPC_URLS[RPC_WEIGHTS1[seed]];
    if (!url) throw new Error('Failed to create provider.');
    return createProviderInstance(url);
}
function getInternalError(error, response, fallback) {
    {
        const rpcError = error;
        if (rpcError instanceof Error && rpcError.message) return rpcError;
        if (rpcError && typeof rpcError.message === 'string') return new Error(rpcError.message);
        if (rpcError && typeof rpcError === 'string') return new Error(rpcError);
    }
    {
        const responseError = response?.error;
        if (responseError instanceof Error) return getError(responseError, null, fallback);
        if (responseError && typeof responseError.message === 'string') return getError(responseError, null, fallback);
        if (responseError && typeof responseError === 'string') return new Error(responseError);
    }
    if (fallback) return new Error(fallback);
    return new Error('Unknown Error.');
}
function getError(error, response, fallback) {
    const internalError = getInternalError(error, response, fallback);
    const internalErrorMessage = (()=>{
        const { code , message  } = internalError;
        if (message.includes(`"code":${JSON_RPC_ERROR_CODE.INTERNAL_ERROR}`)) return 'Transaction was failed due to an internal JSON-RPC server error.';
        if (message.includes('User denied message signature.')) return 'Signature canceled.';
        if (message.includes('User denied transaction signature.')) return 'Transaction was rejected!';
        if (message.includes('transaction underpriced')) return 'Transaction underpriced.';
        if (typeof code === 'number' && (code === JSON_RPC_ERROR_CODE.INTERNAL_ERROR || code <= JSON_RPC_ERROR_CODE.SERVER_ERROR_RANGE_START && code >= JSON_RPC_ERROR_CODE.SERVER_ERROR_RANGE_END)) {
            return 'Transaction was failed due to an internal JSON-RPC server error.';
        }
        return internalError.message;
    })();
    return new Error(internalErrorMessage);
}
/**
 * Send to built-in RPC endpoints.
 */ async function send(payload, callback, options) {
    const provider = await createProvider(options?.chainId);
    const computedPayload = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .getPayloadConfig */ .is)(payload);
    switch(payload.method){
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumMethodType.ETH_SEND_TRANSACTION */ .W8.ETH_SEND_TRANSACTION:
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumMethodType.MASK_REPLACE_TRANSACTION */ .W8.MASK_REPLACE_TRANSACTION:
            if (!computedPayload?.from || !computedPayload.to || !options?.chainId) return;
            const rawTransaction = await _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.signTransaction */ .V.signTransaction(computedPayload.from, {
                ...computedPayload,
                chainId: options.chainId
            });
            if (!rawTransaction) break;
            return provider.send({
                ...payload,
                method: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumMethodType.ETH_SEND_RAW_TRANSACTION */ .W8.ETH_SEND_RAW_TRANSACTION,
                params: [
                    rawTransaction
                ]
            }, callback);
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumMethodType.ETH_SIGN_TYPED_DATA */ .W8.ETH_SIGN_TYPED_DATA:
            const [address, dataToSign] = payload.params;
            const signed = await _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.signTypedData */ .V.signTypedData(address, dataToSign);
            try {
                callback(null, {
                    jsonrpc: '2.0',
                    id: payload.id,
                    result: signed
                });
            } catch (error) {
                callback(getError(error, null, 'Failed to sign message.'));
            }
            break;
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumMethodType.PERSONAL_SIGN */ .W8.PERSONAL_SIGN:
            const [data, account] = payload.params;
            const personalSigned = await _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.signPersonalMessage */ .V.signPersonalMessage(data, account);
            try {
                callback(null, {
                    jsonrpc: '2.0',
                    id: payload.id,
                    result: personalSigned
                });
            } catch (error1) {
                callback(getError(error1, null, 'Failed to sign message.'));
            }
            break;
        default:
            return provider.send(payload, callback);
    }
}
/**
 * The entrance of all RPC requests to MaskWallet.
 */ async function sendPayload(payload, options) {
    if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_3__/* .hasNativeAPI */ ._) {
        return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_3__/* .nativeAPI */ .Nz?.api.send(payload);
    } else {
        return new Promise(async (resolve, reject)=>{
            const callback = (error, response)=>{
                if (!(0,lodash_unified__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(error) || !(0,lodash_unified__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(response?.error)) {
                    reject(getError(error, response));
                } else if (response) resolve(response);
            };
            id += 1;
            const payload_ = {
                ...payload,
                id
            };
            if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isRiskMethod */ .Y2)(payload_.method)) {
                await _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.pushUnconfirmedRequest */ .V.pushUnconfirmedRequest(payload_);
                UNCONFIRMED_CALLBACK_MAP.set(payload_.id, callback);
                if (options?.popupsWindow) (0,_background_services_helper__WEBPACK_IMPORTED_MODULE_2__.openPopupWindow)();
                return;
            }
            send(payload, callback, options);
        });
    }
}
async function confirmRequest(payload, options) {
    const pid = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .getPayloadId */ .rH)(payload);
    if (!pid) return;
    const [deferred, resolve, reject] = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .defer */ .PQ)();
    send(payload, (error, response)=>{
        UNCONFIRMED_CALLBACK_MAP.get(pid)?.(error, response);
        if (error) {
            reject(error);
            return;
        }
        if (response?.error) {
            reject(new Error(`Failed to send transaction: ${response.error}`));
            return;
        }
        _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.deleteUnconfirmedRequest */ .V.deleteUnconfirmedRequest(payload).then(()=>{
            if (!options?.disableClose) (0,_background_services_helper__WEBPACK_IMPORTED_MODULE_2__.removePopupWindow)();
        }).finally(()=>{
            UNCONFIRMED_CALLBACK_MAP.delete(pid);
        });
        resolve(response);
    }, options);
    return deferred;
}
async function rejectRequest(payload) {
    const pid = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .getPayloadId */ .rH)(payload);
    if (!pid) return;
    UNCONFIRMED_CALLBACK_MAP.get(pid)?.(new Error('User rejected transaction.'));
    await _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.deleteUnconfirmedRequest */ .V.deleteUnconfirmedRequest(payload);
    await (0,_background_services_helper__WEBPACK_IMPORTED_MODULE_2__.removePopupWindow)();
    UNCONFIRMED_CALLBACK_MAP.delete(pid);
}


/***/ }),

/***/ 91541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K8": () => (/* binding */ updateWallet),
/* harmony export */   "MX": () => (/* binding */ getWallets),
/* harmony export */   "Ox": () => (/* binding */ hasStoredKeyInfo),
/* harmony export */   "Sx": () => (/* binding */ hasWallet),
/* harmony export */   "iL": () => (/* binding */ getWallet),
/* harmony export */   "ry": () => (/* binding */ addWallet),
/* harmony export */   "tJ": () => (/* binding */ deleteWallet),
/* harmony export */   "zr": () => (/* binding */ getWalletRequired)
/* harmony export */ });
/* unused harmony exports hasWalletRequired, hasStoredKeyInfoRequired */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96596);
/* harmony import */ var _dimensiondev_mask_wallet_core_proto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23015);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10503);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2596);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5326);
/* harmony import */ var _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26436);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);







function WalletRecordOutDB(record) {
    return {
        ...(0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(record, 'type'),
        configurable: record.storedKeyInfo?.type ? record.storedKeyInfo.type !== _dimensiondev_mask_wallet_core_proto__WEBPACK_IMPORTED_MODULE_0__.api.StoredKeyType.Mnemonic : true,
        hasStoredKeyInfo: !!record.storedKeyInfo,
        hasDerivationPath: !!record.derivationPath
    };
}
async function getWallet(address = _settings__WEBPACK_IMPORTED_MODULE_3__/* .currentMaskWalletAccountSettings.value */ .T_.value) {
    if (!address) return null;
    if (!(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .isValidAddress */ .At)(address)) throw new Error('Not a valid address.');
    const wallet = await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.get */ .O.get('wallet', (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address)) ?? null;
    return wallet ? WalletRecordOutDB(wallet) : null;
}
async function getWalletRequired(address) {
    const wallet = await getWallet(address);
    if (!wallet) throw new Error('The wallet does not exist.');
    return wallet;
}
async function hasWallet(address) {
    return _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.has */ .O.has('wallet', (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address));
}
async function hasWalletRequired(address) {
    const has = await hasWallet(address);
    if (!has) throw new Error('The wallet does not exist.');
    return has;
}
async function hasStoredKeyInfo(storedKeyInfo) {
    const wallets = await getWallets();
    if (!storedKeyInfo) return false;
    return wallets.filter((x)=>x.storedKeyInfo?.hash
    ).some((x)=>x.storedKeyInfo?.hash === storedKeyInfo?.hash
    );
}
async function hasStoredKeyInfoRequired(storedKeyInfo) {
    const has = await hasStoredKeyInfo(storedKeyInfo);
    if (!has) throw new Error('The stored key info does not exist.');
    return has;
}
async function getWallets() {
    const wallets = (await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .asyncIteratorToArray */ .SR)(_database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.iterate */ .O.iterate('wallet'))).map((x)=>x.value
    );
    return wallets.sort((a, z)=>{
        if (a.updatedAt > z.updatedAt) return -1;
        if (a.updatedAt < z.updatedAt) return 1;
        if (a.createdAt > z.createdAt) return -1;
        if (a.createdAt < z.createdAt) return 1;
        return 0;
    }).map(WalletRecordOutDB);
}
async function addWallet(address, name, derivationPath, storedKeyInfo) {
    const wallet = await getWallet(address);
    // overwrite mask wallet is not allowed
    if (wallet?.storedKeyInfo?.data) throw new Error('The wallet already exists.');
    const now = new Date();
    const address_ = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address);
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.add */ .O.add({
        id: address_,
        type: 'wallet',
        address: address_,
        name: name?.trim() || `Account ${(await getWallets()).length + 1}`,
        derivationPath,
        storedKeyInfo,
        createdAt: now,
        updatedAt: now
    });
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll(undefined);
    return address_;
}
async function updateWallet(address, updates) {
    const wallet = await getWallet(address);
    const now = new Date();
    const address_ = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address);
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.add */ .O.add({
        type: 'wallet',
        id: address_,
        address: address_,
        name: `Account ${(await getWallets()).length + 1}`,
        ...wallet,
        ...updates,
        createdAt: wallet?.createdAt ?? now,
        updatedAt: now
    });
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll(undefined);
}
async function deleteWallet(address) {
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.remove */ .O.remove('wallet', address);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll(undefined);
}


/***/ }),

/***/ 32152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p1": () => (/* binding */ isLocked),
/* harmony export */   "tR": () => (/* binding */ lockWallet),
/* harmony export */   "xG": () => (/* binding */ unlockWallet)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7197);
/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87368);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53856);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91788);




async function isLocked() {
    return await _password__WEBPACK_IMPORTED_MODULE_1__/* .hasPassword */ .fN() && !await _password__WEBPACK_IMPORTED_MODULE_1__/* .INTERNAL_getPassword */ .R0();
}
async function lockWallet() {
    _password__WEBPACK_IMPORTED_MODULE_1__/* .clearPassword */ .Cy();
    _settings__WEBPACK_IMPORTED_MODULE_0__/* .currentMaskWalletLockStatusSettings.value */ .Jg.value = _types__WEBPACK_IMPORTED_MODULE_2__/* .LockStatus.LOCKED */ .O.LOCKED;
    _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletLockStatusUpdated.sendToAll */ .R.events.walletLockStatusUpdated.sendToAll(true);
}
async function unlockWallet(unverifiedPassword) {
    if (!isLocked()) return true;
    try {
        await _password__WEBPACK_IMPORTED_MODULE_1__/* .verifyPasswordRequired */ .tl(unverifiedPassword);
        _password__WEBPACK_IMPORTED_MODULE_1__/* .INTERNAL_setPassword */ ._B(unverifiedPassword);
        _settings__WEBPACK_IMPORTED_MODULE_0__/* .currentMaskWalletLockStatusSettings.value */ .Jg.value = _types__WEBPACK_IMPORTED_MODULE_2__/* .LockStatus.UNLOCK */ .O.UNLOCK;
        _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletLockStatusUpdated.sendToAll */ .R.events.walletLockStatusUpdated.sendToAll(false);
        return true;
    } catch  {
        _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletLockStatusUpdated.sendToAll */ .R.events.walletLockStatusUpdated.sendToAll(true);
        return false;
    }
}


/***/ }),

/***/ 87368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ changePassword),
/* harmony export */   "Cy": () => (/* binding */ clearPassword),
/* harmony export */   "FY": () => (/* binding */ setPassword),
/* harmony export */   "Gv": () => (/* binding */ verifyPassword),
/* harmony export */   "R0": () => (/* binding */ INTERNAL_getPassword),
/* harmony export */   "_B": () => (/* binding */ INTERNAL_setPassword),
/* harmony export */   "_M": () => (/* binding */ INTERNAL_getPasswordRequired),
/* harmony export */   "fN": () => (/* binding */ hasPassword),
/* harmony export */   "tl": () => (/* binding */ verifyPasswordRequired),
/* harmony export */   "uo": () => (/* binding */ validatePassword)
/* harmony export */ });
/* unused harmony export validatePasswordRequired */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68317);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36962);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88278);



let password = '';
async function INTERNAL_getPassword() {
    return password ? _database__WEBPACK_IMPORTED_MODULE_0__/* .decryptSecret */ .Q0(password) : '';
}
async function INTERNAL_getPasswordRequired() {
    const password_ = await INTERNAL_getPassword();
    if (!password_) throw new Error('No password set yet or expired.');
    return password_;
}
function INTERNAL_setPassword(newPassword) {
    validatePasswordRequired(newPassword);
    password = newPassword;
}
async function setPassword(newPassword) {
    validatePasswordRequired(newPassword);
    await _database__WEBPACK_IMPORTED_MODULE_0__/* .encryptSecret */ .lM(newPassword);
    INTERNAL_setPassword(newPassword);
}
async function hasPassword() {
    return _database__WEBPACK_IMPORTED_MODULE_0__/* .hasSecret */ .Tx();
}
async function verifyPassword(unverifiedPassword) {
    if (password === unverifiedPassword) return true;
    return (0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(await _database__WEBPACK_IMPORTED_MODULE_0__/* .decryptSecret */ .Q0(unverifiedPassword));
}
async function verifyPasswordRequired(unverifiedPassword) {
    if (!await verifyPassword(unverifiedPassword)) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('popups_wallet_unlock_error_password'));
    return true;
}
async function changePassword(newPassword) {
    validatePasswordRequired(newPassword);
    const oldPassword = await INTERNAL_getPasswordRequired();
    if (oldPassword === newPassword) throw new Error('Failed to set the same password as the old one.');
    await _database__WEBPACK_IMPORTED_MODULE_0__/* .updateSecret */ .nG(oldPassword, newPassword);
}
function validatePassword(unverifiedPassword) {
    if (!unverifiedPassword) return false;
    if (unverifiedPassword.length < 8) return false;
    if (unverifiedPassword.length > 20) return false;
    return [
        /[A-Z]/,
        /[a-z]/,
        /\d/,
        /[^\dA-Za-z]/
    ].filter((x)=>x.test(unverifiedPassword)
    ).length >= 2;
}
function validatePasswordRequired(unverifiedPassword) {
    if (!validatePassword(unverifiedPassword)) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('popups_wallet_password_satisfied_requirement'));
    return true;
}
function clearPassword() {
    password = '';
}


/***/ })

}]);