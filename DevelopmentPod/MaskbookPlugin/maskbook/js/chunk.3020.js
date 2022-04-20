(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3020],{

/***/ 53753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.29.0_react@18.0.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(7631);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.29.0/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.29.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 35886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(80480);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

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

/***/ 58277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(43147);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 69480:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(58277)();
}


/***/ }),

/***/ 43147:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 30246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ hasNativeAPI),
  "Nz": () => (/* binding */ nativeAPI)
});

// UNUSED EXPORTS: sharedNativeAPI

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.2/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(19245);
;// CONCATENATED MODULE: ./shared/native-rpc/iOS.channel.ts
// cspell:disable-next-line
const key = 'maskbookjsonrpc';
class iOSWebkitChannel {
    on(cb) {
        this.listener.add(cb);
        return ()=>void this.listener.delete(cb)
        ;
    }
    send(data) {
        globalThis.webkit.messageHandlers[key].postMessage(data);
    }
    constructor(){
        this.listener = new Set();
        document.addEventListener(key, (e)=>{
            const detail = e.detail;
            for (const f of this.listener){
                try {
                    f(detail);
                } catch  {}
            }
        });
    }
}

;// CONCATENATED MODULE: ./shared/native-rpc/index.ts



// This module won't be used in Web. Let it not effecting HMR.
if (false) {}
const hasNativeAPI = "app" === 'app';
let nativeAPI = undefined;
let sharedNativeAPI = (/* unused pure expression or super */ null && (undefined));
if (true) {
    const options = {
        key: 'native',
        parameterStructures: 'by-name'
    };
    if (true) {
        const api = sharedNativeAPI = (0,full/* AsyncCall */.LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 8699).then(__webpack_require__.bind(__webpack_require__, 98699)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new iOSWebkitChannel()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 51257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ WalletStatusBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90869);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56911);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(78216);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(65506);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37253);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93775);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37731);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30232);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78144);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53242);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67071);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2666);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84797);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6955);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5027);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83463);
















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme, { isDashboard  })=>({
        content: {
            padding: theme.spacing(2, 3, 3)
        },
        currentAccount: {
            padding: theme.spacing(1.5),
            marginBottom: theme.spacing(2),
            display: 'flex',
            backgroundColor: isDashboard ? (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .nb)(theme).primaryBackground2 : theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center'
        },
        dashboardBackground: {
            background: theme.palette.background.default
        },
        accountInfo: {
            fontSize: 16,
            flexGrow: 1,
            marginLeft: theme.spacing(1)
        },
        accountName: {
            fontSize: 16,
            marginRight: 6
        },
        infoRow: {
            display: 'flex',
            alignItems: 'center'
        },
        actionButton: {
            fontSize: 12,
            marginLeft: theme.spacing(1),
            padding: theme.spacing(1, 2)
        },
        address: {
            fontSize: 16,
            marginRight: theme.spacing(1),
            display: 'inline-block'
        },
        link: {
            color: theme.palette.text.primary,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center'
        },
        linkIcon: {
            marginRight: theme.spacing(1)
        },
        twitterProviderBorder: {
            width: 14,
            height: 14
        },
        connectButtonWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: theme.spacing(2, 0)
        },
        domain: {
            fontSize: 16,
            lineHeight: '18px',
            marginLeft: 6,
            padding: 4,
            borderRadius: 8,
            backgroundColor: '#ffffff',
            color: theme.palette.common.black
        }
    })
);
function WalletStatusBox(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .useI18N */ .M1)();
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isDashboardPage */ .K2)();
    const { classes  } = useStyles({
        isDashboard
    });
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useChainId */ .xx)();
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useAccount */ .mA)();
    const wallet = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useWallet */ .Os)();
    const providerType = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useProviderType */ ._o)();
    const providerDescriptor = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useProviderDescriptor */ .fY)();
    const networkDescriptor = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useNetworkDescriptor */ .Vw)();
    const { Utils  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3State */ .dM)() ?? {};
    const { value: domain  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useReverseAddress */ .$q)(account);
    // #region copy addr to clipboard
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const onCopy = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_7__/* .useSnackbarCallback */ .iD)(async (ev)=>{
        ev.stopPropagation();
        copyToClipboard(account);
    }, [], undefined, undefined, undefined, t('copy_success_of_wallet_addr'));
    // #endregion
    // #region change provider
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // #endregion
    // #region walletconnect
    const { setDialog: setWalletConnectDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.walletConnectQRCodeDialogUpdated */ .R.events.walletConnectQRCodeDialogUpdated);
    // #endregion
    const onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        switch(providerType){
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect:
                setWalletConnectDialog({
                    open: true,
                    uri: await _extension_service__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Ethereum.createConnectionURI */ .ZP.Ethereum.createConnectionURI()
                });
                break;
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.Fortmatic */ .lP.Fortmatic:
                await _extension_service__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Ethereum.disconnectFortmatic */ .ZP.Ethereum.disconnectFortmatic(chainId);
                break;
        }
    }, [
        chainId,
        providerType,
        setWalletConnectDialog
    ]);
    return account ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.currentAccount, props.isDashboard ? classes.dashboardBackground : ''),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_7__/* .WalletIcon */ .o, {
                size: 48,
                badgeSize: 16,
                networkIcon: providerDescriptor?.icon,
                providerIcon: networkDescriptor?.icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.accountInfo,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.infoRow,
                        style: {
                            marginBottom: 6
                        },
                        children: providerType !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.MaskWallet */ .lP.MaskWallet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            className: classes.accountName,
                            children: domain && Utils?.formatDomainName ? Utils.formatDomainName(domain) : providerDescriptor?.name
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    className: classes.accountName,
                                    children: wallet?.name ?? providerDescriptor?.name
                                }),
                                domain && Utils?.formatDomainName ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    className: classes.domain,
                                    children: Utils.formatDomainName(domain)
                                }) : null
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.infoRow,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                className: classes.address,
                                variant: "body2",
                                title: account,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_7__/* .FormattedAddress */ .Kv, {
                                    address: account,
                                    size: 4,
                                    formatter: Utils?.formatAddress
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                className: classes.link,
                                underline: "none",
                                component: "button",
                                title: t('wallet_status_button_copy_address'),
                                onClick: onCopy,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    className: classes.linkIcon,
                                    size: 14
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                className: classes.link,
                                href: Utils?.resolveAddressLink?.(chainId, account) ?? '',
                                target: "_blank",
                                title: t('plugin_wallet_view_on_explorer'),
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    className: classes.linkIcon,
                                    size: 14
                                })
                            })
                        ]
                    })
                ]
            }),
            !props.disableChange && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                children: [
                    providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect || providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.Fortmatic */ .lP.Fortmatic ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_11__/* .ActionButtonPromise */ .Zc, {
                        className: classes.actionButton,
                        color: "primary",
                        size: "small",
                        variant: "contained",
                        init: t('wallet_status_button_disconnect'),
                        waiting: t('wallet_status_button_disconnecting'),
                        failed: t('failed'),
                        complete: t('done'),
                        executor: onDisconnect,
                        completeIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                        failIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.actionButton),
                        variant: "contained",
                        size: "small",
                        onClick: openSelectProviderDialog,
                        children: t('wallet_status_button_change')
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: classes.connectButtonWrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.actionButton),
            color: "primary",
            variant: "contained",
            size: "small",
            onClick: openSelectProviderDialog,
            children: t('plugin_wallet_on_connect')
        })
    });
}


/***/ }),

/***/ 89441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ InputBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30232);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2921);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37253);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85974);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86248);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            display: 'block',
            width: '100%',
            border: `1px solid ${(0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).border}`,
            alignItems: 'center',
            padding: theme.spacing(1),
            boxSizing: 'border-box'
        },
        search: {
            marginBottom: 0,
            display: 'flex',
            alignItems: 'center'
        },
        input: {
            width: '100%'
        },
        iconButton: {
            padding: theme.spacing(0.5)
        },
        label: {
            width: '100%',
            paddingLeft: theme.spacing(1)
        }
    })
);
function InputBox(props) {
    const { label , children , onChange , value  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setVisible((v)=>!(!value || value.length === 0)
        );
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.root,
        elevation: 0,
        children: [
            visible ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                variant: "body2",
                className: classes.label,
                children: label
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: classes.search,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        size: "large",
                        className: classes.iconButton,
                        "aria-label": "label",
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                        className: classes.input,
                        placeholder: label,
                        value: value,
                        onChange: (e)=>{
                            setVisible(e.target.value.length !== 0);
                            onChange?.(e.target.value);
                        },
                        ...props.inputBaseProps
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7284);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);
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
                marginLeft: 0
            }
        }
    });
}));


/***/ }),

/***/ 79205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ ConnectWalletDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
;// CONCATENATED MODULE: ./src/resources/FlashIcon.tsx


const useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        iconWrapper: {
            width: 20,
            height: 20,
            borderRadius: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.color.alpha(0.2)
        }
    })
);
const FlashSvg = ({ color =entry/* MaskColorVar.redMain */.ZN.redMain  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "6",
        height: "11",
        viewBox: "0 0 6 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M4.63739 0.644143L0.00450468 5.27703L2.45721 6.91216L1.36712 11L6 6.36712L3.5473 4.73198L4.63739 0.644143Z",
            fill: color.alpha(1)
        })
    })
;
function FlashIcon({ color =entry/* MaskColorVar.redMain */.ZN.redMain  }) {
    const { classes  } = useStyles({
        color
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.iconWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FlashSvg, {
            color: color
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(31008);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ConnectWalletDialog/ConnectionProgress.tsx










const ConnectionProgress_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2, 4, 3),
            borderRadius: 8,
            backgroundColor: theme.palette.background.default
        },
        tipContent: {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: entry/* MaskColorVar.errorBackground */.ZN.errorBackground,
            padding: theme.spacing(2, 0, 2, 1.5),
            borderRadius: 8
        },
        tipContentText: {
            color: entry/* MaskColorVar.redMain */.ZN.redMain,
            fontSize: 12,
            marginLeft: 10
        },
        tipLink: {
            color: entry/* MaskColorVar.redMain */.ZN.redMain,
            textDecoration: 'underline'
        },
        error: {
            fontSize: 12,
            paddingTop: theme.spacing(0.5),
            paddingRight: theme.spacing(1)
        }
    })
);
function ConnectionProgress(props) {
    const { providerType , connection  } = props;
    const { value: connected , loading , error , retry  } = connection;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(ConnectionProgress_useStyles(), props);
    const providerDescriptor = (0,entry_web3/* useProviderDescriptor */.fY)(providerType, entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                elevation: 0,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                    className: `${classes.content} dashboard-style`,
                    elevation: 0,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                                icon: providerDescriptor?.icon
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                display: "flex",
                                flex: 1,
                                flexDirection: "column",
                                sx: {
                                    marginLeft: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        children: [
                                            loading ? t('plugin_wallet_connecting_with') : t(connected ? 'plugin_wallet_connected_with' : 'plugin_wallet_connect_with'),
                                            ' ',
                                            (0,pipes/* resolveProviderName */.Hw)(providerType)
                                        ]
                                    }),
                                    loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                                size: 14,
                                                color: "primary",
                                                sx: {
                                                    marginRight: 1
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                children: t('initializing')
                                            })
                                        ]
                                    }) : null,
                                    !loading && error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.error,
                                        color: "red",
                                        variant: "body2",
                                        children: error.message?.includes('Already processing eth_requestAccounts') || error.message?.includes("Request of type 'wallet_requestPermissions' already pending for origin") ? t('plugin_wallet_metamask_error_already_request') : error.message ?? 'Something went wrong.'
                                    }) : null
                                ]
                            }),
                            !connected && error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                color: "primary",
                                variant: "contained",
                                onClick: retry,
                                disabled: loading,
                                children: t('plugin_wallet_connect_with_retry')
                            }) : null
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.tipContent,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FlashIcon, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.tipContentText,
                        variant: "body2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "plugin_wallet_connect_tip",
                            components: {
                                providerLink: (0,pipes/* resolveProviderHomeLink */.IH)(providerType) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    className: classes.tipLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: (0,pipes/* resolveProviderHomeLink */.IH)(providerType)
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                            },
                            values: {
                                providerName: (0,pipes/* resolveProviderName */.Hw)(providerType),
                                providerShortenLink: (0,pipes/* resolveProviderShortenLink */.dC)(providerType)
                            }
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ConnectWalletDialog/index.tsx












const ConnectWalletDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2.5)
        }
    })
);
function ConnectWalletDialog(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(ConnectWalletDialog_useStyles(), props);
    const [providerType, setProviderType] = (0,react.useState)();
    const [networkType, setNetworkType] = (0,react.useState)();
    // #region remote controlled dialog
    const { open , setDialog: setConnectWalletDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setProviderType(ev.providerType);
        setNetworkType(ev.networkType);
    });
    // #endregion
    // #region walletconnect
    const { setDialog: setWalletConnectDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated);
    // #endregion
    const connectTo = (0,react.useCallback)(async ()=>{
        if (!networkType) throw new Error('Unknown network type.');
        if (!providerType) throw new Error('Unknown provider type.');
        // read the chain detailed from the built-in chain list
        const expectedChainId = (0,chainDetailed/* getChainIdFromNetworkType */.EP)(networkType);
        const chainDetailedCAIP = (0,chainDetailed/* getChainDetailedCAIP */.EX)(expectedChainId);
        if (!chainDetailedCAIP) throw new Error('Unknown network type.');
        // a short time loading makes the user fells better
        await (0,esm/* delay */.gw)(1000);
        let account;
        let chainId;
        switch(providerType){
            case types/* ProviderType.MaskWallet */.lP.MaskWallet:
                ({ account , chainId  } = await service/* default.Ethereum.connectMaskWallet */.ZP.Ethereum.connectMaskWallet(networkType));
                break;
            case types/* ProviderType.MetaMask */.lP.MetaMask:
                ({ account , chainId  } = await service/* default.Ethereum.connectMetaMask */.ZP.Ethereum.connectMetaMask());
                break;
            case types/* ProviderType.WalletConnect */.lP.WalletConnect:
                // create wallet connect QR code URI
                const uri = await service/* default.Ethereum.createConnectionURI */.ZP.Ethereum.createConnectionURI();
                if (!uri) throw new Error('Failed to create connection URI.');
                // open the QR code dialog
                setWalletConnectDialog({
                    open: true,
                    uri
                });
                ({ account , chainId  } = await service/* default.Ethereum.connectWalletConnect */.ZP.Ethereum.connectWalletConnect());
                break;
            case types/* ProviderType.Coin98 */.lP.Coin98:
            case types/* ProviderType.WalletLink */.lP.WalletLink:
            case types/* ProviderType.MathWallet */.lP.MathWallet:
                ({ account , chainId  } = await service/* default.Ethereum.connectInjected */.ZP.Ethereum.connectInjected());
                break;
            case types/* ProviderType.Fortmatic */.lP.Fortmatic:
                ({ account , chainId  } = await service/* default.Ethereum.connectFortmatic */.ZP.Ethereum.connectFortmatic(expectedChainId));
                break;
            case types/* ProviderType.CustomNetwork */.lP.CustomNetwork:
                throw new Error('To be implemented.');
            default:
                (0,esm/* safeUnreachable */.P)(providerType);
                break;
        }
        // connection failed
        if (!account || !networkType) throw new Error(`Failed to connect to ${(0,pipes/* resolveProviderName */.Hw)(providerType)}.`);
        // switch to the expected chain
        if (chainId !== expectedChainId) {
            try {
                const overrides = {
                    chainId: expectedChainId,
                    providerType
                };
                // the coin98 wallet cannot handle add/switch RPC provider correctly
                // it will always add a new RPC provider even if the network exists
                if (providerType !== types/* ProviderType.Coin98 */.lP.Coin98) {
                    await Promise.race([
                        (async ()=>{
                            await (0,esm/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
                            throw new Error('Timeout!');
                        })(),
                        networkType === types/* NetworkType.Ethereum */.td.Ethereum ? service/* default.Ethereum.switchEthereumChain */.ZP.Ethereum.switchEthereumChain(types/* ChainId.Mainnet */.a_.Mainnet, overrides) : service/* default.Ethereum.addEthereumChain */.ZP.Ethereum.addEthereumChain(chainDetailedCAIP, account, overrides), 
                    ]);
                }
                // recheck
                const chainIdHex = await service/* default.Ethereum.getChainId */.ZP.Ethereum.getChainId(overrides);
                if (Number.parseInt(chainIdHex, 16) !== expectedChainId) throw new Error('Failed to switch chain.');
            } catch  {
                throw new Error(`Make sure your wallet is on the ${(0,pipes/* resolveNetworkName */.nW)(networkType)} network.`);
            }
        }
        // update account
        await messages/* WalletRPC.updateAccount */.V.updateAccount({
            account,
            chainId: expectedChainId,
            networkType,
            providerType
        });
        return true;
    }, [
        networkType,
        providerType
    ]);
    const connection = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!open) return true;
        await connectTo();
        // sync settings
        await (0,esm/* delay */.gw)(1000);
        setConnectWalletDialog({
            open: false,
            result: true
        });
        return true;
    }, [
        open,
        connectTo,
        setConnectWalletDialog
    ]);
    if (!providerType) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: `Connect to ${(0,pipes/* resolveProviderName */.Hw)(providerType)}`,
        open: open,
        onClose: ()=>setConnectWalletDialog({
                open: false,
                result: false
            })
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectionProgress, {
                providerType: providerType,
                connection: connection
            })
        })
    });
}


/***/ }),

/***/ 52339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ GasSettingDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var src = __webpack_require__(19841);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.29.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(53753);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(38443);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(61098);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.29.0_react@18.0.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(7631);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(93618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.14.4/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(74368);
// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(3687);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(41106);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/useGasSettingStyles.ts

const useGasSettingStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        options: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 10,
            cursor: 'pointer',
            width: '100%',
            overflowX: 'scroll',
            '& > *': {
                backgroundColor: theme.palette.mode === 'dark' ? '#212442' : '#f7f9fa',
                borderRadius: 8,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }
        },
        optionsTitle: {
            color: '#7B8192',
            fontSize: 16,
            lineHeight: '22px'
        },
        gasPrice: {
            fontSize: 12,
            lineHeight: '16px'
        },
        gasUSD: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '14px',
            wordBreak: 'break-all'
        },
        or: {
            display: 'flex',
            justifyContent: 'center'
        },
        label: {
            color: theme.palette.primary.main,
            fontSize: 12,
            lineHeight: '16px',
            margin: '10px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        selected: {
            backgroundColor: theme.palette.primary.main,
            '& > *': {
                color: theme.palette.primary.contrastText
            }
        },
        button: {
            marginTop: 10,
            padding: '9px 10px',
            borderRadius: 20
        },
        unit: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '16px',
            flex: 1,
            marginLeft: '0.5em'
        },
        price: {
            fontSize: 12,
            lineHeight: '16px',
            color: '#15181B'
        }
    })
);

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/GasSetting1559.tsx

















const HIGH_FEE_WARNING_MULTIPLIER = 1.5;
const GasSetting1559 = /*#__PURE__*/ (0,react.memo)(({ gasLimit: gasLimit1 , minGasLimit =0 , gasOption: gasOption1 = types/* GasOption.Medium */.TP.Medium , onConfirm =noop/* default */.Z  })=>{
    const { classes  } = useGasSettingStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [selectedGasOption, setGasOption] = (0,react.useState)(gasOption1);
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(nativeToken?.chainId);
    // #region Get suggest gas options data from meta swap api
    const { value: gasOptions , loading: getGasOptionsLoading  } = (0,useAsync/* default */.Z)(async ()=>{
        return messages/* WalletRPC.getEstimateGasFees */.V.getEstimateGasFees(chainId);
    }, [
        chainId
    ]);
    // #endregion
    // #region Gas options
    const options = (0,react.useMemo)(()=>[
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                gasOption: types/* GasOption.Low */.TP.Low,
                content: gasOptions?.low
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                gasOption: types/* GasOption.Medium */.TP.Medium,
                content: gasOptions?.medium
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                gasOption: types/* GasOption.High */.TP.High,
                content: gasOptions?.high
            }, 
        ]
    , [
        gasOptions
    ]);
    // #endregion
    const currentGasOption = options.find((opt)=>opt.gasOption === selectedGasOption
    );
    // #region Form field define schema
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>(0,base_src/* isGreaterThanOrEqualTo */.KH)(gasLimit, minGasLimit)
            , t('popups_wallet_gas_fee_settings_min_gas_limit_tips', {
                limit: minGasLimit
            })),
            maxPriorityFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_priority_fee_absence')).refine(base_src/* isPositive */.xP, t('wallet_transfer_error_max_priority_gas_fee_positive')),
            maxFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_fee_absence'))
        }).refine((data)=>(0,base_src/* isLessThanOrEqualTo */.PW)(data.maxPriorityFeePerGas, data.maxFeePerGas)
        , {
            message: t('wallet_transfer_error_max_priority_gas_fee_imbalance'),
            path: [
                'maxFeePerGas'
            ]
        });
    }, [
        minGasLimit,
        gasOptions
    ]);
    // #endregion
    const { control , handleSubmit , setValue , clearErrors , watch , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            gasLimit: new (bignumber_default())(gasLimit1 ?? 0).toString(),
            maxPriorityFeePerGas: '',
            maxFeePerGas: '0'
        },
        context: {
            minGasLimit,
            gasOptions
        }
    });
    // #region Set gas on tx to form data
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (gasLimit1) setValue('gasLimit', new (bignumber_default())(gasLimit1).toString());
    }, [
        gasLimit1,
        setValue
    ]);
    // #endregion
    // #region If the selected changed, set the value on the option to the form data
    (0,react.useEffect)(()=>{
        if (selectedGasOption === null) return;
        clearErrors([
            'maxPriorityFeePerGas',
            'maxFeePerGas'
        ]);
        setValue('maxPriorityFeePerGas', new (bignumber_default())(currentGasOption?.content?.suggestedMaxPriorityFeePerGas ?? 0).toString() ?? '');
        setValue('maxFeePerGas', new (bignumber_default())(currentGasOption?.content?.suggestedMaxFeePerGas ?? 0).toString() ?? '');
    }, [
        currentGasOption,
        setValue,
        options
    ]);
    // #endregion
    const handleConfirm = (0,react.useCallback)((data)=>{
        onConfirm?.({
            gasLimit: data.gasLimit,
            maxFee: (0,formatter/* formatGweiToWei */.nU)(data.maxFeePerGas).toFixed(0),
            priorityFee: (0,formatter/* formatGweiToWei */.nU)(data.maxPriorityFeePerGas).toFixed(0),
            gasOption: selectedGasOption
        });
    }, [
        onConfirm,
        selectedGasOption
    ]);
    const onSubmit = handleSubmit(handleConfirm);
    const [maxPriorityFeePerGas, maxFeePerGas, inputGasLimit] = watch([
        'maxPriorityFeePerGas',
        'maxFeePerGas',
        'gasLimit', 
    ]);
    // #region These are additional form rules that need to be prompted for but do not affect the validation of the form
    const maxPriorFeeHelperText = (0,react.useMemo)(()=>{
        if (getGasOptionsLoading) return undefined;
        if ((0,base_src/* isLessThan */.FI)(maxPriorityFeePerGas, gasOptions?.low?.suggestedMaxPriorityFeePerGas ?? 0)) return t('wallet_transfer_error_max_priority_gas_fee_too_low');
        if ((0,base_src/* isGreaterThan */.T1)(maxPriorityFeePerGas, (0,base_src/* multipliedBy */.$q)(gasOptions?.high?.suggestedMaxPriorityFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_priority_gas_fee_too_high');
        return undefined;
    }, [
        maxPriorityFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    const maxFeeGasHelperText = (0,react.useMemo)(()=>{
        if (getGasOptionsLoading) return undefined;
        if ((0,base_src/* isLessThan */.FI)(maxFeePerGas, gasOptions?.estimatedBaseFee ?? 0)) return t('wallet_transfer_error_max_fee_too_low');
        if ((0,base_src/* isGreaterThan */.T1)(maxFeePerGas, (0,base_src/* multipliedBy */.$q)(gasOptions?.high?.suggestedMaxFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_fee_too_high');
        return undefined;
    }, [
        maxFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title , content , gasOption  }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>setGasOption(gasOption)
                        ,
                        className: selectedGasOption === gasOption ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "div",
                                children: [
                                    (0,base_src/* toFixed */.FH)(content?.suggestedMaxFeePerGas, 2),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "inherit",
                                        children: "Gwei"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(content?.suggestedMaxFeePerGas ?? 0).times(nativeTokenPrice).times(21000).toPrecision(3)
                                })
                            })
                        ]
                    }, index)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_fee_settings_gas_limit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setGasOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.gasLimit?.message,
                                helperText: errors.gasLimit?.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            });
                        },
                        name: "gasLimit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            t('popups_wallet_gas_fee_settings_max_priority_fee'),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.unit,
                                children: [
                                    "(",
                                    t('wallet_transfer_gwei'),
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(Number(maxPriorityFeePerGas) ?? 0).times(nativeTokenPrice).times(inputGasLimit || 1).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setGasOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.maxPriorityFeePerGas?.message || !!maxPriorFeeHelperText,
                                helperText: errors.maxPriorityFeePerGas?.message || maxPriorFeeHelperText,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            })
                        ,
                        name: "maxPriorityFeePerGas"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            t('popups_wallet_gas_fee_settings_max_fee'),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.unit,
                                children: [
                                    "(",
                                    t('wallet_transfer_gwei'),
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(Number(maxFeePerGas) ?? 0).times(nativeTokenPrice).times(inputGasLimit || 1).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setGasOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.maxFeePerGas?.message || !!maxFeeGasHelperText,
                                helperText: errors.maxFeePerGas?.message || maxFeeGasHelperText,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            })
                        ,
                        name: "maxFeePerGas"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: getGasOptionsLoading,
                variant: "contained",
                fullWidth: true,
                className: classes.button,
                disabled: !(0,isEmpty/* default */.Z)(errors),
                onClick: onSubmit,
                children: t('confirm')
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(11627);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/Prior1559GasSetting.tsx


















const minGasPriceOfChain = {
    [types/* ChainId.BSC */.a_.BSC]: (0,base_src/* pow10 */.wA)(9).multipliedBy(5),
    [types/* ChainId.Conflux */.a_.Conflux]: (0,base_src/* pow10 */.wA)(9).multipliedBy(5),
    [types/* ChainId.Matic */.a_.Matic]: (0,base_src/* pow10 */.wA)(9).multipliedBy(30)
};
const Prior1559GasSetting = /*#__PURE__*/ (0,react.memo)(({ gasLimit: gasLimit1 , minGasLimit =0 , gasOption: gasOption1 = types/* GasOption.Medium */.TP.Medium , onConfirm =noop/* default */.Z  })=>{
    const { classes  } = useGasSettingStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [selectedGasOption, setGasOption] = (0,react.useState)(gasOption1);
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(nativeToken?.chainId);
    // #region Get gas options from debank
    const { value: gasOptions , loading: getGasOptionsLoading  } = (0,useAsync/* default */.Z)(async ()=>{
        const response = await messages/* WalletRPC.getGasPriceDictFromDeBank */.V.getGasPriceDictFromDeBank(chainId);
        if (!response) return null;
        return {
            slow: response.data.slow.price,
            standard: response.data.normal.price,
            fast: response.data.fast.price
        };
    }, [
        chainId
    ]);
    // #endregion
    const options = (0,react.useMemo)(()=>gasOptions ? [
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                gasOption: types/* GasOption.Low */.TP.Low,
                gasPrice: gasOptions?.slow ?? 0
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                gasOption: types/* GasOption.Medium */.TP.Medium,
                gasPrice: gasOptions?.standard ?? 0
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                gasOption: types/* GasOption.High */.TP.High,
                gasPrice: gasOptions?.fast ?? 0
            }, 
        ] : null
    , [
        gasOptions
    ]);
    const currentGasOption = options ? options.find((opt)=>opt.gasOption === selectedGasOption
    ) : null;
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>new (bignumber_default())(gasLimit).gte(minGasLimit)
            , t('popups_wallet_gas_fee_settings_min_gas_limit_tips', {
                limit: minGasLimit
            })),
            gasPrice: lib.z.string().min(1, t('wallet_transfer_error_gas_price_absence'))
        });
    }, [
        minGasLimit
    ]);
    const { control , handleSubmit , setValue , watch , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            gasLimit: new (bignumber_default())(gasLimit1 ?? 0).toString(),
            gasPrice: ''
        },
        context: {
            minGasLimit
        }
    });
    const [inputGasLimit] = watch([
        'gasLimit'
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (gasLimit1) setValue('gasLimit', new (bignumber_default())(gasLimit1).toString());
    }, [
        gasLimit1,
        setValue
    ]);
    (0,react.useEffect)(()=>{
        const minGasPrice = minGasPriceOfChain[chainId];
        if (currentGasOption || minGasPrice) {
            setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)((currentGasOption?.gasPrice ?? minGasPrice) ?? 0).toString());
        }
    }, [
        currentGasOption,
        setValue,
        chainId
    ]);
    const handleConfirm = (0,react.useCallback)((data)=>{
        onConfirm({
            gasLimit: data.gasLimit,
            gasPrice: (0,web3_utils_lib.toWei)(data.gasPrice, 'gwei'),
            gasOption: selectedGasOption
        });
    }, [
        selectedGasOption
    ]);
    const onSubmit = handleSubmit(handleConfirm);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            options ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title , gasPrice , gasOption  }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>setGasOption(gasOption)
                        ,
                        className: selectedGasOption === gasOption ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                children: [
                                    (0,formatter/* formatWeiToGwei */.f1)(gasPrice ?? 0).toString(),
                                    " Gwei"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatWeiToEther */.yp)(gasPrice).times(nativeTokenPrice).times(inputGasLimit || '1').toPrecision(3)
                                })
                            })
                        ]
                    }, gasOption)
                )
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_fee_settings_gas_limit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setGasOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.gasLimit?.message,
                                helperText: errors.gasLimit?.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            });
                        },
                        name: "gasLimit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_price')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setGasOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.gasPrice?.message,
                                helperText: errors.gasPrice?.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            })
                        ,
                        name: "gasPrice"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: getGasOptionsLoading,
                variant: "contained",
                fullWidth: true,
                className: classes.button,
                disabled: !(0,isEmpty/* default */.Z)(errors),
                onClick: onSubmit,
                children: t('confirm')
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/GasSetting.tsx




const GasSetting = (props)=>{
    const chainId = (0,useChainId/* useChainId */.xx)();
    const is1559Supported = (0,chainDetailed/* isEIP1559Supported */.U1)(chainId);
    return is1559Supported ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting1559, {
        ...props
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Prior1559GasSetting, {
        ...props
    });
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/index.tsx










const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            color: theme.palette.text.primary
        }
    })
);
const GasSettingDialog = ()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const [gasOption1, setGasOption] = (0,react.useState)(types/* GasOption.Medium */.TP.Medium);
    const [gasLimit1, setGasLimit] = (0,react.useState)(0);
    const [minGasLimit, setMinGasLimit] = (0,react.useState)(0);
    const { open , closeDialog , setDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(src/* WalletMessages.events.gasSettingDialogUpdated */.R$.events.gasSettingDialogUpdated, (evt)=>{
        if (!evt.open) return;
        if (evt.gasOption) setGasOption(evt.gasOption);
        if (evt.gasLimit) setGasLimit(evt.gasLimit);
        if (evt.minGasLimit !== undefined) setMinGasLimit(evt.minGasLimit);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('popups_wallet_gas_fee_settings'),
        open: open,
        onClose: closeDialog,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting, {
                gasLimit: gasLimit1,
                minGasLimit: minGasLimit,
                onGasLimitChange: setGasLimit,
                gasOption: gasOption1,
                onGasOptionChange: setGasOption,
                onConfirm: ({ gasPrice , gasLimit , maxFee , priorityFee , gasOption  })=>{
                    setDialog({
                        open: false,
                        gasOption,
                        gasPrice,
                        gasLimit,
                        priorityFee,
                        maxFee
                    });
                }
            })
        })
    });
};


/***/ }),

/***/ 60560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ WalletRenameWalletDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33347);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7284);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38175);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37731);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84797);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53242);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2666);
/* harmony import */ var _utils_i18n_next_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99192);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2, 4, 3)
        },
        dialogActions: {
            alignItems: 'center',
            padding: theme.spacing(3, 5)
        },
        actionButton: {}
    })
);
function WalletRenameWalletDialog() {
    const { t  } = (0,_utils_i18n_next_ui__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M)();
    const { classes  } = useStyles();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [wallet, setWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { open , setDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletRenameDialogUpdated */ .R.events.walletRenameDialogUpdated);
    _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletRenameDialogUpdated.on */ .R.events.walletRenameDialogUpdated.on((data)=>{
        if (!data.open) return;
        setName(data.wallet?.name ?? '');
        setWallet(data.wallet);
    });
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setDialog({
            open: false,
            wallet: null
        });
    }, []);
    const handleRename = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_5__/* .useSnackbarCallback */ .iD)(()=>{
        if (!wallet?.address) {
            throw new Error('Not select wallet yet.');
        }
        return _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.renameWallet */ .V.renameWallet(wallet.address, name);
    }, [
        wallet?.address
    ], handleClose);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_masknet_shared__WEBPACK_IMPORTED_MODULE_5__/* .InjectedDialog */ .Fl, {
        title: t('wallet_rename'),
        open: open,
        onClose: handleClose,
        maxWidth: "xs",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: classes.content,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    label: t('wallet_rename'),
                    fullWidth: true,
                    autoFocus: true,
                    inputProps: {
                        maxLength: 12
                    },
                    value: name,
                    onChange: (e)=>setName(e.target.value)
                    ,
                    placeholder: t('plugin_wallet_name_placeholder'),
                    onKeyPress: (e)=>e.key === 'Enter' && handleRename()
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.dialogActions,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        fullWidth: true,
                        color: "inherit",
                        variant: "outlined",
                        onClick: handleClose,
                        children: t('confirm')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        className: classes.actionButton,
                        variant: "contained",
                        onClick: handleRename,
                        disabled: !name,
                        fullWidth: true,
                        children: t('cancel')
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 15179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ RestoreLegacyWalletDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64452);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53242);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2666);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77521);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30232);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65506);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33347);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37253);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37731);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78144);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84797);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6955);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column'
        },
        title: {
            display: 'block'
        }
    })
);
function RestoreLegacyWalletDialog() {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    // const navigate = useNavigate()
    const { open , setDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.restoreLegacyWalletDialogUpdated */ .R.events.restoreLegacyWalletDialogUpdated);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setDialog({
            open: false
        });
    }, [
        setDialog
    ]);
    const { value: legacyWallets = []  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(async ()=>{
        const now = new Date();
        const wallets = await _messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletRPC.getLegacyWallets */ .V.getLegacyWallets(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .ProviderType.MaskWallet */ .lP.MaskWallet);
        if (!wallets.length) return [];
        return wallets.filter((x)=>(x.mnemonic || x._public_key_) && x.updatedAt < now
        );
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!legacyWallets.length) return;
        if (!location.href.includes('popups.html')) return;
        if (location.hash.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .PopupRoutes.LegacyWalletRecovered */ .mZ.LegacyWalletRecovered) || location.hash.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .PopupRoutes.Unlock */ .mZ.Unlock)) return;
        setDialog({
            open: true
        });
    }, [
        legacyWallets.map((x)=>x.address
        ).join()
    ]);
    const onRestore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        // !!! invalid navigation !!!
        // navigate(PopupRoutes.LegacyWalletRecovered)
        onClose();
    }, [
        onClose,
        history
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .InjectedDialog */ .Fl, {
        open: open,
        maxWidth: "xs",
        onClose: onClose,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    className: classes.title,
                    color: "textPrimary",
                    variant: "body2",
                    component: "div",
                    children: t('popups_wallet_dialog_legacy_wallet_tip')
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    display: "flex",
                    justifyContent: "center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        variant: "contained",
                        onClick: onRestore,
                        sx: {
                            marginTop: 2
                        },
                        children: t('confirm')
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 34116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ WalletRiskWarningDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31008);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53242);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2666);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10372);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(66394);
/* harmony import */ var _mui_icons_material_PriorityHigh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60106);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33347);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2921);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30103);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37253);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38175);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37731);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30232);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6955);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84797);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83463);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .makeStyles */ .ZL)()((theme)=>({
        paper: {
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .getMaskColor */ .nb)(theme).redMain
        },
        buttons: {
            padding: theme.spacing(3)
        },
        button: {
            borderRadius: 9999,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                marginBottom: theme.spacing(2)
            }
        },
        cancel: {
            backgroundColor: theme.palette.background.default,
            border: 'none'
        },
        title: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        },
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        avatar: {
            width: 64,
            height: 64,
            backgroundColor: 'rgba(255, 95, 95, 0.2)'
        },
        wallet: {
            backgroundColor: theme.palette.background.default,
            marginTop: theme.spacing(2),
            padding: theme.spacing(2),
            borderRadius: theme.spacing(1)
        },
        texts: {
            paddingBottom: theme.spacing(1)
        }
    })
);
function WalletRiskWarningDialog() {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .useAccount */ .m)();
    const { showSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .useCustomSnackbar */ .Ii)();
    const isMobile = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useMatchXS */ .IN)();
    const { open , setDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletMessages.events.walletRiskWarningDialogUpdated */ .R.events.walletRiskWarningDialogUpdated);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setDialog({
            open: false,
            type: 'cancel'
        });
        if (account) await _messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.setRiskWarningConfirmed */ .V.setRiskWarningConfirmed(account, false);
    }, [
        setDialog
    ]);
    const onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!account) {
            showSnackbar(t('wallet_risk_warning_no_select_wallet'), {
                variant: 'error',
                preventDuplicate: true
            });
            return;
        }
        await _messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.confirmRiskWarning */ .V.confirmRiskWarning(account);
        setDialog({
            open: false,
            type: 'confirm'
        });
    }, [
        showSnackbar,
        account,
        setDialog
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .InjectedDialog */ .Fl, {
        title: isMobile ? undefined : t('wallet_risk_warning_dialog_title'),
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    className: classes.paper,
                    elevation: 0,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.icon,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.avatar,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_PriorityHigh__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    style: {
                                        fontSize: 58,
                                        color: 'rgba(255, 95, 95, 1)'
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            className: classes.title,
                            align: "center",
                            variant: "h4",
                            children: t('wallet_risk_warning_dialog_title')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            variant: "body2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_15__/* .Trans */ .c, {
                                i18nKey: "multiline",
                                children: t('wallet_risk_warning_content')
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            elevation: 0,
                            className: `${classes.wallet} dashboard-style`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    className: classes.texts,
                                    children: t('nft_wallet_label')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    className: classes.texts,
                                    children: isMobile ? (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__/* .formatEthereumAddress */ .j8)(account, 5) : account
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                className: classes.buttons,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, classes.cancel, 'dashboard-style'),
                        fullWidth: true,
                        variant: "outlined",
                        onClick: onClose,
                        size: "large",
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_8__/* .ActionButtonPromise */ .Zc, {
                        className: classes.button,
                        variant: "contained",
                        fullWidth: true,
                        disabled: !account,
                        size: "large",
                        init: t('confirm'),
                        waiting: t('wallet_risk_confirm_confirming'),
                        failed: t('wallet_risk_confirm_failed'),
                        executor: onConfirm,
                        completeIcon: null,
                        failIcon: null,
                        failedOnClick: "use executor",
                        complete: t('done')
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 89679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ SelectNftContractDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(20476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(16451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(30103);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(67376);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(24790);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC721Tokens.ts




function useERC721Tokens() {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const erc721Tokens = (0,context/* useWeb3State */.dM)().erc721Tokens;
    return (0,react.useMemo)(()=>{
        if (!wallet) return [];
        return erc721Tokens.filter((x)=>x.contractDetailed.chainId === chainId
        );
    }, [
        chainId,
        wallet,
        erc721Tokens
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(90014);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useSocket.ts
var useSocket = __webpack_require__(37037);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721ContractDetailed.ts
var useERC721ContractDetailed = __webpack_require__(75569);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../icons/general/Search.tsx
var Search = __webpack_require__(38524);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/InputBox.tsx
var InputBox = __webpack_require__(89441);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/SearchInput.tsx



function SearchInput(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBox/* InputBox */.W, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* SearchIcon */.W, {}),
        ...props
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(33429);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.5.3/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(46149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/unionBy.js
var unionBy = __webpack_require__(60398);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectNftContractDialog.tsx














const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        search: {
            width: '95%',
            margin: theme.spacing(1, 0, 2, 0.8)
        },
        list: {
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        placeholder: {
            textAlign: 'center',
            height: 288,
            paddingTop: theme.spacing(14),
            boxSizing: 'border-box'
        },
        searchBox: {
            height: 400,
            width: '100%'
        },
        listItem: {
            cursor: 'pointer',
            display: 'flex',
            width: '100%',
            height: 63,
            borderRadius: 12,
            '&:hover': {
                background: theme.palette.mode === 'light' ? '#F7F9FA' : '#17191D'
            },
            position: 'relative'
        },
        icon: {
            borderRadius: 1000,
            width: 36,
            height: 36,
            marginRight: 8
        },
        openIcon: {
            display: 'flex',
            color: theme.palette.mode === 'light' ? 'rgba(123, 129, 146, 1)' : 'rgba(111, 118, 124, 1)',
            width: 16,
            height: 16,
            marginLeft: 2
        },
        address: {
            color: theme.palette.mode === 'light' ? 'rgba(123, 129, 146, 1)' : 'rgba(111, 118, 124, 1)',
            display: 'flex',
            textDecoration: 'none',
            alignItems: 'center',
            position: 'absolute',
            left: 59,
            bottom: 10,
            cursor: 'pointer',
            fontSize: 12,
            '&:hover': {
                textDecoration: 'none'
            }
        },
        addressText: {
            fontSize: 12
        },
        addressNoImage: {
            left: '16px !important'
        },
        dialogContent: {
            height: 560
        },
        noResultBox: {
            background: theme.palette.background.default,
            height: 431,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16
        },
        contractName: {
            marginBottom: 20,
            paddingRight: 30,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        balance: {
            position: 'absolute',
            right: 25
        }
    })
);
function SelectNftContractDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [id, setId] = (0,react.useState)('');
    const [keyword1, setKeyword] = (0,react.useState)('');
    const account = (0,useAccount/* useAccount */.m)();
    // #region remote controlled dialog
    const { open , setDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectNftContractDialogUpdated */.R.events.selectNftContractDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setId(ev.uuid);
    });
    const onSubmit = (0,react.useCallback)((contract)=>{
        setKeyword('');
        setDialog({
            open: false,
            uuid: id,
            contract
        });
    }, [
        id,
        setDialog,
        setKeyword
    ]);
    const onClose = (0,react.useCallback)(()=>{
        setKeyword('');
        setDialog({
            open: false,
            uuid: id
        });
    }, [
        id,
        setDialog
    ]);
    // #endregion
    const { data: assets , state: loadingCollectionState  } = (0,useCollectibles/* useCollections */.b)(account, chainId, open);
    const erc721InDb = useERC721Tokens();
    const allContractsInDb = (0,unionBy/* default */.Z)(erc721InDb.map((x)=>({
            ...x.contractDetailed,
            address: (0,formatter/* formatEthereumAddress */.j8)(x.contractDetailed.address)
        })
    ), 'address').map((x)=>({
            contractDetailed: x,
            balance: undefined
        })
    );
    const renderAssets = assets.map((x)=>({
            contractDetailed: {
                type: types/* EthereumTokenType.ERC721 */.Dr.ERC721,
                address: x.address,
                chainId,
                name: x.name,
                symbol: x.symbol,
                baseURI: x.iconURL,
                iconURL: x.iconURL
            },
            balance: x.balance
        })
    );
    const contractList = renderAssets ? (0,unionBy/* default */.Z)([
        ...renderAssets,
        ...allContractsInDb
    ], 'contractDetailed.address') : allContractsInDb;
    // #region fuse
    const fuse = (0,react.useMemo)(()=>new fuse_esm/* default */.Z(contractList, {
            shouldSort: true,
            threshold: 0.45,
            minMatchCharLength: 3,
            keys: [
                {
                    name: 'contractDetailed.name',
                    weight: 0.5
                },
                {
                    name: 'contractDetailed.symbol',
                    weight: 0.8
                },
                {
                    name: 'contractDetailed.address',
                    weight: 1
                }, 
            ]
        })
    , [
        contractList
    ]);
    const searchedTokenList = fuse.search(keyword1).map((x)=>x.item
    );
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: onClose,
        title: t('plugin_wallet_select_a_nft_contract'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.dialogContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.search,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchInput, {
                        label: t('add_nft_contract_search_hint'),
                        onChange: (keyword)=>{
                            setKeyword(keyword);
                        }
                    })
                }),
                loadingCollectionState === useSocket/* SocketState.done */.d.done && /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultBox, {
                    keyword: keyword1,
                    contractList: contractList,
                    searchedTokenList: searchedTokenList,
                    onSubmit: onSubmit
                }),
                loadingCollectionState !== useSocket/* SocketState.done */.d.done && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    sx: {
                        paddingTop: 4,
                        paddingBottom: 4
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                        size: 24
                    })
                })
            ]
        })
    });
}
function SearchResultBox(props) {
    const { keyword , searchedTokenList , onSubmit , contractList  } = props;
    const { classes  } = useStyles();
    const isValid = dist.EthereumAddress.isValid(keyword);
    const { value: contractDetailed , loading  } = (0,useERC721ContractDetailed/* useERC721ContractDetailed */.P)(keyword);
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.searchBox,
        children: keyword !== '' && searchedTokenList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: !isValid || loading || !contractDetailed || contractDetailed.name === '' && contractDetailed.symbol === '' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.noResultBox,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: loading ? t('wallet_loading_nft_contract') : t('wallet_search_contract_no_result')
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContractListItem, {
                    onSubmit: onSubmit,
                    contract: {
                        contractDetailed
                    }
                }, "0")
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            children: (keyword === '' ? contractList : searchedTokenList).map((contract, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContractListItem, {
                        onSubmit: onSubmit,
                        contract: contract
                    })
                }, i)
            )
        })
    });
}
function ContractListItem(props) {
    const { onSubmit , contract  } = props;
    const { classes  } = useStyles();
    const chainId = contract.contractDetailed.chainId;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                className: classes.listItem,
                onClick: ()=>onSubmit(contract.contractDetailed)
                ,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        className: classes.icon,
                        src: contract.contractDetailed.iconURL
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.contractName,
                        children: [
                            contract.contractDetailed.name,
                            ' ',
                            contract.contractDetailed.symbol && contract.contractDetailed.symbol !== 'UNKNOWN' ? '(' + contract.contractDetailed.symbol + ')' : ''
                        ]
                    }),
                    contract.balance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.balance,
                        children: contract.balance
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.address,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        onClick: ()=>onSubmit(contract.contractDetailed)
                        ,
                        className: classes.addressText,
                        children: contract.contractDetailed.address
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, contract.contractDetailed.address),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                            className: classes.openIcon,
                            fontSize: "small"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 67345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ SelectProviderDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(99192);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(30246);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(15679);
;// CONCATENATED MODULE: ../icons/general/Selected.tsx


const SelectedIcon = (0,utils/* createIcon */.I)('SelectedIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z",
            fill: "#60DFAB"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.115 5.507c.272.247.293.67.045.941l-3.333 3.667a.667.667 0 0 1-.928.058l-2.333-2a.667.667 0 1 1 .868-1.012l1.842 1.578 2.897-3.187a.667.667 0 0 1 .942-.045Z",
            fill: "#fff"
        })
    ]
}), '0 0 16 16');

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(20476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(16451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var src_utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(40791);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/ProviderIcon.tsx




const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            textAlign: 'center'
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.default
        },
        icon: {
            width: 45,
            height: 45,
            marginBottom: theme.spacing(2)
        },
        name: {
            fontSize: 16,
            fontWeight: 'normal',
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(1)
        },
        description: {
            fontSize: 14,
            fontWeight: 300
        }
    })
);
function ProviderIcon({ icon , name , onClick , className , ButtonBaseProps  }) {
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classnames_default()(classes.root, className),
        elevation: 0,
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonBase/* default */.Z, {
            className: `${classes.content} dashboard-style`,
            ...ButtonBaseProps,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: icon.toString(),
                    className: classes.icon
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    variant: "h3",
                    children: name
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/PluginProviderRender.tsx








const PluginProviderRender_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(2, 4)
        },
        section: {
            flexGrow: 1,
            marginTop: 21,
            '&:first-child': {
                marginTop: 0
            }
        },
        title: {
            fontSize: 19,
            fontWeight: 'bold'
        },
        list: {
            marginTop: 21,
            display: 'flex',
            gap: 32,
            flexWrap: 'wrap'
        },
        networkItem: {
            width: 'auto',
            padding: 0
        },
        iconWrapper: {
            position: 'relative',
            cursor: 'pointer',
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: 'transparent'
        },
        networkIcon: {
            backgroundColor: theme.palette.background.default
        },
        checkedBadge: {
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: 14,
            height: 14,
            background: '#fff',
            borderRadius: '50%'
        },
        alert: {
            fontSize: 12,
            display: 'flex',
            alignItems: 'center',
            marginTop: theme.spacing(1)
        },
        wallets: {
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '130px',
            gridGap: theme.spacing(1),
            margin: theme.spacing(2, 0, 0),
            [smallQuery]: {
                gridAutoRows: '110px',
                gridTemplateColumns: 'repeat(2, 1fr)'
            }
        },
        walletItem: {
            padding: 0,
            width: '100%',
            display: 'block'
        },
        providerIcon: {
            height: '100%',
            fontSize: 45,
            display: 'flex'
        }
    };
});
function PluginProviderRender({ networks , providers , undeterminedPluginID , undeterminedNetworkID , setUndeterminedPluginID , setUndeterminedNetworkID , NetworkIconClickBait , ProviderIconClickBait , onSubmit  }) {
    const { classes  } = PluginProviderRender_useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: classes.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            variant: "h2",
                            component: "h2",
                            children: t('plugin_wallet_guiding_step_1')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                            className: classes.list,
                            children: networks?.filter((x)=>x.isMainnet
                            ).map((network)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                    className: classes.networkItem,
                                    onClick: ()=>{
                                        setUndeterminedPluginID(network.networkSupporterPluginID);
                                        setUndeterminedNetworkID(network.ID);
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* ShadowRootTooltip */.p_, {
                                        title: network.name,
                                        placement: "top",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classes.iconWrapper,
                                            children: [
                                                NetworkIconClickBait ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIconClickBait, {
                                                    network: network,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                                                        icon: network.icon
                                                    })
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                                                    icon: network.icon
                                                }),
                                                undeterminedNetworkID === network.ID && /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectedIcon, {
                                                    className: classes.checkedBadge
                                                })
                                            ]
                                        })
                                    })
                                }, network.ID)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: classes.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            variant: "h2",
                            component: "h2",
                            children: t('plugin_wallet_guiding_step_2')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                            className: classes.wallets,
                            children: providers.filter((x)=>x.providerAdaptorPluginID === undeterminedPluginID
                            ).map((provider)=>ProviderIconClickBait ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderIconClickBait, {
                                    network: networks.find((x)=>x.ID === undeterminedNetworkID
                                    ) ?? (0,head/* default */.Z)(networks),
                                    provider: provider,
                                    onSubmit: onSubmit,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                        className: classes.walletItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderIcon, {
                                            className: classes.providerIcon,
                                            icon: provider.icon,
                                            name: provider.name
                                        })
                                    }, provider.ID)
                                }, provider.ID) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                    className: classes.walletItem,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderIcon, {
                                        className: classes.providerIcon,
                                        icon: provider.icon,
                                        name: provider.name
                                    })
                                }, provider.ID)
                            )
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(80917);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/index.tsx













const SelectProviderDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(0, 0, 1, 0),
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    })
);
function SelectProviderDialog(props) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = SelectProviderDialog_useStyles();
    // #region remote controlled dialog logic
    const { open , closeDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    // #region native app
    (0,react.useEffect)(()=>{
        if (!open) return;
        if (native_rpc/* hasNativeAPI */._) native_rpc/* nativeAPI */.Nz?.api.misc_openCreateWalletView();
    }, [
        open
    ]);
    // #endregion
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const networks = (0,entry_web3/* getRegisteredWeb3Networks */.Rm)();
    const providers = (0,entry_web3/* getRegisteredWeb3Providers */.i8)();
    const pluginID = (0,src/* useValueRef */.E)(settings/* pluginIDSettings */.tR);
    const network = (0,entry_web3/* useNetworkDescriptor */.Vw)();
    const [undeterminedPluginID, setUndeterminedPluginID] = (0,react.useState)(pluginID);
    const [undeterminedNetworkID, setUndeterminedNetworkID] = (0,react.useState)(network?.ID ?? entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const undeterminedNetwork = (0,entry_web3/* useNetworkDescriptor */.Vw)(undeterminedNetworkID, undeterminedPluginID);
    const networkType = (0,entry_web3/* useNetworkType */.bL)(undeterminedPluginID);
    const { NetworkIconClickBait , ProviderIconClickBait  } = (0,entry_web3/* useWeb3UI */.$d)(undeterminedPluginID).SelectProviderDialog ?? {};
    const onSubmit = (0,react.useCallback)(()=>{
        if (undeterminedNetwork?.type === networkType) {
            settings/* pluginIDSettings.value */.tR.value = undeterminedPluginID;
        }
        closeDialog();
        if (isDashboard) messages/* WalletMessages.events.walletStatusDialogUpdated.sendToLocal */.R.events.walletStatusDialogUpdated.sendToLocal({
            open: false
        });
    }, [
        networkType,
        undeterminedNetwork?.type,
        undeterminedPluginID,
        closeDialog,
        isDashboard
    ]);
    // not available for the native app
    if (native_rpc/* hasNativeAPI */._) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('plugin_wallet_select_provider_dialog_title'),
        open: open,
        onClose: closeDialog,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginProviderRender, {
                networks: networks,
                providers: providers,
                undeterminedPluginID: undeterminedPluginID,
                undeterminedNetworkID: undeterminedNetworkID,
                setUndeterminedPluginID: setUndeterminedPluginID,
                setUndeterminedNetworkID: setUndeterminedNetworkID,
                NetworkIconClickBait: NetworkIconClickBait,
                ProviderIconClickBait: ProviderIconClickBait,
                onSubmit: onSubmit
            })
        })
    });
}


/***/ }),

/***/ 40095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ SelectWalletDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallets.ts
var useWallets = __webpack_require__(39677);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(67376);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(92452);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(30103);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(43754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(40006);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(51179);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(69315);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockie.ts
var useBlockie = __webpack_require__(60481);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
;// CONCATENATED MODULE: ./src/components/shared/SelectWallet/WalletInList.tsx







const useStyle = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'inline-grid'
        },
        overflow: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        icon: {
            color: '#77E0B5',
            minWidth: 26,
            marginLeft: theme.spacing(1)
        }
    })
);
function WalletInList(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyle(), props);
    const { wallet , selected =false , disabled =false , onClick , ListItemProps  } = props;
    const blockie = (0,useBlockie/* useBlockie */.Y)(wallet.address);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
        disabled: disabled,
        onClick: onClick,
        ...ListItemProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                    src: blockie
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                classes: {
                    root: classes.root,
                    primary: classes.overflow,
                    secondary: classes.overflow
                },
                primary: wallet.name,
                secondary: (0,formatter/* formatEthereumAddress */.j8)(wallet.address, 16),
                secondaryTypographyProps: {
                    component: 'div'
                }
            }),
            selected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                className: classes.icon,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                    fontSize: "small"
                })
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectWalletDialog.tsx













const useStyles = (0,entry/* makeStyles */.ZL)()({
    content: {
        padding: 0,
        minHeight: 300
    }
});
function SelectWalletDialogUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const wallets = (0,useWallets/* useWallets */.r)(types/* ProviderType.MaskWallet */.lP.MaskWallet);
    const selectedWallet = (0,useWallet/* useWallet */.O)();
    // #region remote controlled dialog logic
    const [networkType, setNetworkType] = (0,react.useState)();
    const { open , closeDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectWalletDialogUpdated */.R.events.selectWalletDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setNetworkType(ev.networkType);
    });
    // #endregion
    const onSelect = (0,react.useCallback)(async (address)=>{
        closeDialog();
        await messages/* WalletRPC.updateAccount */.V.updateAccount({
            account: address,
            providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet,
            networkType
        });
    }, [
        networkType,
        closeDialog
    ]);
    // #region create new wallet
    const onCreate = (0,react.useCallback)(async ()=>{
        closeDialog();
        await (0,esm/* delay */.gw)(100);
        await service/* default.Welcome.openOptionsPage */.ZP.Welcome.openOptionsPage(shared_base_src/* DashboardRoutes.CreateMaskWallet */.vq.CreateMaskWallet, `create=${Date.now()}`);
    }, [
        history,
        closeDialog
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: closeDialog,
        title: t('plugin_wallet_select_a_wallet'),
        maxWidth: "xs",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: wallets.map((wallet)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletInList, {
                        wallet: wallet,
                        selected: selectedWallet?.address === wallet.address,
                        onClick: ()=>onSelect(wallet.address)
                    }, wallet.address)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "text",
                    onClick: onCreate,
                    children: t('plugin_wallet_on_create')
                })
            })
        ]
    });
}
function SelectWalletDialog(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectWalletDialogUI, {
        ...props
    });
}


/***/ }),

/***/ 30559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ TransactionDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33347);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98354);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37253);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93775);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38175);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37731);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15520);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73377);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31174);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65506);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55678);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53242);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2666);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6955);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84797);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3747);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        content: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(5, 3)
        },
        icon: {
            fontSize: 64,
            width: 64,
            height: 64
        },
        link: {
            marginTop: theme.spacing(0.5)
        },
        primary: {
            fontSize: 18,
            marginTop: theme.spacing(1)
        },
        secondary: {
            fontSize: 14
        }
    })
);
function TransactionDialogUI(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .useChainId */ .xx)();
    // #region remote controlled dialog
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [shareText, setShareText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t('plugin_wallet_transaction'));
    const { open , closeDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.transactionDialogUpdated */ .R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) {
            setState(ev.state);
            setSummary(ev.summary ?? '');
            setShareText(ev.shareText ?? '');
            setTitle(ev.title ?? t('plugin_wallet_transaction'));
        } else {
            setSummary('');
            setShareText('');
        }
    });
    const onShare = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (shareText) _social_network__WEBPACK_IMPORTED_MODULE_7__/* .activatedSocialNetworkUI.utils.share */ .LM.utils.share?.(shareText);
        closeDialog();
    }, [
        shareText,
        closeDialog
    ]);
    // #endregion
    if (!state) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .InjectedDialog */ .Fl, {
        open: open,
        onClose: closeDialog,
        title: title,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.content,
                children: [
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                size: 64,
                                color: "primary"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                variant: "subtitle1",
                                children: t('plugin_wallet_transaction_wait_for_confirmation')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.secondary,
                                color: "textSecondary",
                                children: summary
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .TransactionStateType.HASH */ .n$.HASH ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: t('plugin_wallet_transaction_submitted')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    className: classes.link,
                                    href: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__/* .resolveTransactionLinkOnExplorer */ .z4)(chainId, state.hash),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t('plugin_wallet_view_on_explorer')
                                })
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            state.receipt.status ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.icon
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: state.receipt.status ? t('plugin_wallet_transaction_confirmed') : state.reason ?? t('plugin_wallet_transaction_reverted')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    className: classes.link,
                                    href: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__/* .resolveTransactionLinkOnExplorer */ .z4)(chainId, state.receipt.transactionHash),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t('plugin_wallet_view_on_explorer')
                                })
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .TransactionStateType.FAILED */ .n$.FAILED ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: state.error.message
                            })
                        ]
                    }) : null
                ]
            }),
            ![
                _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(state.type) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    color: "primary",
                    size: "large",
                    variant: "contained",
                    fullWidth: true,
                    onClick: state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .TransactionStateType.FAILED */ .n$.FAILED || !shareText ? closeDialog : onShare,
                    children: state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .TransactionStateType.FAILED */ .n$.FAILED || !shareText ? t('dismiss') : t('share')
                })
            }) : null
        ]
    });
}
function TransactionDialog(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TransactionDialogUI, {
        ...props
    });
}


/***/ }),

/***/ 28784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ TransactionSnackbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93775);
/* harmony import */ var _mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47514);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31174);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36803);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65506);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55678);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84797);
/* harmony import */ var _WalletStatusDialog_TransactionDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79759);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5027);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6955);










const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    link: {
        display: 'flex',
        alignItems: 'center'
    }
});
function TransactionSnackbar() {
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .useChainId */ .xx)();
    const { classes  } = useStyles();
    const { showSnackbar , closeSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useCustomSnackbar */ .Ii)();
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M1)();
    const snackbarKeyRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const resolveSnackbarConfig = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .createLookupTableResolver */ .F)({
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING]: {
            processing: true,
            variant: 'default',
            message: t('plugin_wallet_snackbar_wait_for_confirming')
        },
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.HASH */ .n$.HASH]: {
            processing: true,
            variant: 'default',
            message: t('plugin_wallet_snackbar_hash')
        },
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED]: {
            processing: false,
            variant: 'success',
            message: t('plugin_wallet_snackbar_confirmed')
        },
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT]: {
            processing: false,
            variant: 'success',
            message: t('plugin_wallet_snackbar_success')
        },
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED]: {
            processing: false,
            variant: 'error',
            message: t('plugin_wallet_snackbar_failed')
        },
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN]: {
            processing: false,
            variant: 'error',
            message: ''
        }
    }, {});
    const showSingletonSnackbar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((title, options)=>{
        if (snackbarKeyRef.current !== undefined) closeSnackbar(snackbarKeyRef.current);
        snackbarKeyRef.current = showSnackbar(title, options);
        return ()=>{
            closeSnackbar(snackbarKeyRef.current);
        };
    }, [
        showSnackbar,
        closeSnackbar
    ]);
    const getTitle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((state, payload, hash)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletStatusDialog_TransactionDescription__WEBPACK_IMPORTED_MODULE_4__/* .RecentTransactionDescription */ .q, {
            hash: hash ?? '',
            computedPayload: payload,
            receipt: state.receipt
        });
    }, []);
    const getFullMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((message, hash)=>{
        if (!hash) return message;
        const link = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .resolveTransactionLinkOnExplorer */ .z4)(chainId, hash);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            className: classes.link,
            color: "inherit",
            href: link,
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                message,
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    sx: {
                        ml: 1
                    },
                    fontSize: "inherit"
                })
            ]
        });
    }, [
        chainId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.transactionProgressUpdated.on */ .R.events.transactionProgressUpdated.on(async (progress)=>{
            if (location.href.includes('popups.html')) return;
            if (progress.state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN) return;
            const payload = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Ethereum.getSendTransactionComputedPayload */ .ZP.Ethereum.getSendTransactionComputedPayload(progress.payload);
            const config = resolveSnackbarConfig(progress.state.type);
            const hash = progress.state.hash ?? progress.state.receipt?.transactionHash;
            const transactionComputedPayloadName = payload && 'name' in payload && payload.name || '';
            if ([
                'swapExactETHForTokens',
                'swapExactTokensForETH',
                'swapExactTokensForTokens'
            ].includes(transactionComputedPayloadName)) {
                if (progress.state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED) {
                    showSingletonSnackbar(t('plugin_wallet_snackbar_swap_successful'), {
                        ...config,
                        ...{
                            message: getFullMessage(getTitle(progress.state, payload, hash), hash)
                        }
                    });
                    return;
                }
                if (progress.state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED) {
                    showSingletonSnackbar(t('plugin_wallet_snackbar_swap_token'), {
                        ...config,
                        ...{
                            message: getFullMessage('Transaction failed', hash)
                        }
                    });
                    return;
                }
            }
            showSingletonSnackbar(getTitle(progress.state, payload, hash), {
                ...config,
                ...{
                    message: getFullMessage(config.message, hash)
                }
            });
        });
    }, [
        getTitle,
        getFullMessage
    ]);
    return null;
}


/***/ }),

/***/ 92971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ WalletConnectQRCodeDialog)
});

// UNUSED EXPORTS: QRCodeDialog

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ImageList/ImageList.js + 1 modules
var ImageList = __webpack_require__(9405);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ImageListItem/ImageListItem.js + 1 modules
var ImageListItem = __webpack_require__(29143);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js
var map = __webpack_require__(857);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(40791);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/Provider.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            textAlign: 'center'
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(3, 1, 2),
            backgroundColor: theme.palette.background.default
        },
        logo: {
            width: 45,
            height: 45,
            marginBottom: theme.spacing(2)
        },
        name: {
            fontSize: 16,
            fontWeight: 'normal',
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(1)
        },
        description: {
            fontSize: 14,
            fontWeight: 300
        }
    })
);
function Provider(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        style: {
            opacity: props.ButtonBaseProps?.disabled ? 0.5 : 1
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonBase/* default */.Z, {
            className: `${classes.content} dashboard-style`,
            ...props.ButtonBaseProps,
            onClick: props.onClick,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.logo,
                    children: props.logo
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    variant: "h3",
                    children: props.name
                }),
                props.description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.description,
                    color: "textSecondary",
                    variant: "body2",
                    children: props.description
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(73160);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/Icons.tsx


const TrustIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                    width: "128",
                    height: "128",
                    rx: "24",
                    fill: "#3375BB"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M96.685 31.485c1.149 0 2.236.472 3.036 1.272a4.29 4.29 0 011.23 3.056c-.205 12.223-.676 21.575-1.558 28.98-.862 7.403-2.154 12.9-4.102 17.35-1.313 2.974-2.933 5.435-4.84 7.527-2.564 2.769-5.497 4.778-8.696 6.686-1.368.818-2.79 1.625-4.282 2.473-3.183 1.807-6.683 3.795-10.649 6.448a4.242 4.242 0 01-4.737 0c-4.027-2.684-7.573-4.696-10.785-6.519-.714-.405-1.412-.8-2.095-1.192-3.753-2.174-7.137-4.246-10.09-7.24-1.97-1.969-3.671-4.369-5.025-7.22-1.846-3.814-3.097-8.428-4.02-14.397-1.23-7.978-1.846-18.417-2.071-32.896a4.274 4.274 0 011.21-3.056 4.35 4.35 0 013.056-1.272h1.763c5.435.021 17.433-.512 27.81-8.593a4.278 4.278 0 015.23 0c10.378 8.08 22.376 8.614 27.831 8.593h1.784zm-9.536 47.93c1.333-2.748 2.44-6.542 3.281-11.998 1.005-6.522 1.62-15.382 1.908-27.44-6.4-.185-17.392-1.416-27.872-8.47-10.48 7.034-21.473 8.264-27.851 8.47.225 9.967.676 17.72 1.394 23.81.82 6.932 1.99 11.629 3.446 14.93.964 2.195 2.03 3.775 3.302 5.169 1.702 1.867 3.855 3.405 6.788 5.168 1.217.73 2.558 1.49 4.018 2.316 2.601 1.472 5.58 3.158 8.903 5.273 3.262-2.08 6.197-3.749 8.768-5.21.775-.44 1.517-.863 2.225-1.271 3.61-2.072 6.275-3.794 8.265-5.804 1.333-1.374 2.42-2.871 3.425-4.943z",
                    fill: "#fff"
                })
            ]
        })
    })
;
const IMTokenIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                    width: "128",
                    height: "128",
                    rx: "24",
                    fill: "url(#paint0_linear)"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M105.782 36.041c2.77 37.67-21.348 55.475-42.97 57.374-20.1 1.765-39.022-10.636-40.681-29.69-1.37-15.74 8.32-22.441 15.933-23.11 7.83-.689 14.41 4.733 14.982 11.297.55 6.311-3.373 9.184-6.1 9.423-2.158.19-4.872-1.125-5.117-3.948-.21-2.426.707-2.757.483-5.334-.399-4.588-4.384-5.123-6.566-4.933-2.64.232-7.431 3.326-6.759 11.033.676 7.774 8.1 13.916 17.832 13.062 10.503-.921 17.815-9.131 18.364-20.646a4.2 4.2 0 01.375-1.768l.004-.014c.113-.242.245-.473.395-.693a9.37 9.37 0 01.883-1.118c.004-.01.004-.01.01-.01.27-.306.596-.637.964-.992 4.587-4.346 21.11-14.595 36.735-11.35a1.565 1.565 0 011.233 1.417z",
                    fill: "#fff"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: "paint0_linear",
                        x1: "128",
                        y1: "54.5",
                        x2: "0",
                        y2: "55",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#11C3D1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#057EB8"
                            })
                        ]
                    })
                })
            ]
        })
    })
;
const RainbowIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                    width: "128",
                    height: "128",
                    fill: "url(#paint0_linear)",
                    rx: "24"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "url(#paint1_radial)",
                    d: "M72.527 100.659c0-24.87-20.072-45.034-44.83-45.034H22v11.09c0 3.162 2.55 5.723 5.696 5.723 15.515 0 28.094 12.636 28.094 28.221 0 2.951 2.382 5.341 5.317 5.341h11.42v-5.341z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "url(#paint2_radial)",
                    d: "M89.263 100.659c0-34.103-27.618-61.846-61.567-61.846H22v16.812h5.696c24.72 0 44.83 20.203 44.83 45.034V106h16.737v-5.341z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "url(#paint3_radial)",
                    d: "M27.696 38.813c34.003 0 61.567 27.69 61.567 61.846V106h11.42c2.938 0 5.317-2.39 5.317-5.341 0-21.01-8.144-40.765-22.935-55.62C68.277 30.181 48.61 22 27.696 22 24.55 22 22 24.56 22 27.722v11.09h5.696z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                            id: "paint1_radial",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientTransform: "matrix(35.56535 -34.37578 34.64161 35.84038 23.943 103.361)",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: ".662",
                                    stopColor: "#01B1E2"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#01D64F"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                            id: "paint2_radial",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientTransform: "rotate(-44.956 139.17 26.446) scale(69.6855 70.0822)",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: ".76",
                                    stopColor: "#FE0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: ".973",
                                    stopColor: "#FFA000"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                            id: "paint3_radial",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientTransform: "matrix(61.26799 -59.14432 59.4229 61.55657 22 106.063)",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: ".81",
                                    stopColor: "#EE3E1D"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#8854C4"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint0_linear",
                            x1: "64",
                            x2: "64",
                            y1: "0",
                            y2: "128",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#164299"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#001E59"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    })
;
const MetaMaskIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 128 128",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                    width: "128",
                    height: "128",
                    fill: "#fff",
                    rx: "24"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E17726",
                    stroke: "#E17726",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M99.85 28L69.09 50.81l5.72-13.44L99.85 28z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E27625",
                    stroke: "#E27625",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M28.9 28l30.48 23.03-5.44-13.66L28.9 28zM88.78 80.9l-8.19 12.53 17.53 4.83 5.02-17.1-14.36-.27zM25.65 81.17l4.99 17.1 17.5-4.84-8.16-12.54-14.33.28z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E27625",
                    stroke: "#E27625",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M47.19 59.73l-4.87 7.36 17.34.79-.58-18.7-11.9 10.55zM81.57 59.73L69.5 48.96l-.4 18.92 17.35-.8-4.87-7.35zM48.14 93.43l10.5-5.08-9.04-7.06-1.46 12.14zM70.13 88.35l10.47 5.08-1.43-12.14-9.04 7.06z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#D5BFB2",
                    stroke: "#D5BFB2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M80.59 93.43l-10.47-5.08.85 6.81-.09 2.89 9.7-4.62zM48.13 93.43l9.73 4.62-.06-2.89.83-6.81-10.5 5.08z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#233447",
                    stroke: "#233447",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M58.05 76.79l-8.7-2.56 6.14-2.82 2.56 5.38zM70.7 76.79l2.56-5.38 6.17 2.82-8.73 2.56z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#CC6228",
                    stroke: "#CC6228",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M48.13 93.43l1.52-12.53-9.68.27 8.16 12.26zM79.1 80.9l1.48 12.53 8.19-12.26-9.68-.27zM86.44 67.09l-17.35.79 1.62 8.9 2.55-5.37 6.18 2.82 7-7.14zM49.34 74.23l6.14-2.82 2.56 5.38 1.61-8.91-17.34-.8 7.03 7.15z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E27525",
                    stroke: "#E27525",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M42.3 67.09l7.28 14.2-.24-7.06-7.03-7.14zM79.42 74.23l-.27 7.06 7.27-14.2-7 7.14zM59.65 67.88l-1.61 8.9 2.04 10.53.45-13.87-.88-5.56zM69.08 67.88l-.85 5.53.43 13.9L70.7 76.8l-1.62-8.91z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#F5841F",
                    stroke: "#F5841F",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M70.7 76.79L68.66 87.3l1.46 1.04 9.04-7.06.27-7.06-8.73 2.56zM49.35 74.23l.24 7.06 9.04 7.06 1.46-1.04-2.04-10.52-8.7-2.56z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#C0AC9D",
                    stroke: "#C0AC9D",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M70.89 98.05l.09-2.89-.8-.67H58.57l-.76.67.06 2.89-9.73-4.62 3.4 2.8 6.91 4.77h11.84l6.94-4.78 3.37-2.8-9.7 4.63z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#161616",
                    stroke: "#161616",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M70.13 88.35l-1.46-1.04h-8.59l-1.46 1.04-.82 6.81.76-.67H70.2l.79.67-.85-6.81z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#763E1A",
                    stroke: "#763E1A",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M101.16 52.3l2.58-12.59L99.84 28 70.13 50.05l11.44 9.67 16.16 4.72 3.56-4.17-1.55-1.12 2.46-2.25-1.89-1.46 2.47-1.89-1.61-1.25zM25 39.71l2.62 12.6-1.68 1.24 2.5 1.89-1.89 1.46 2.47 2.25-1.56 1.12 3.56 4.17 16.16-4.72 11.44-9.67L28.9 28 25 39.71z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#F5841F",
                    stroke: "#F5841F",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M97.73 64.44l-16.16-4.71 4.87 7.36-7.27 14.2 9.61-.12h14.36l-5.41-16.73zM47.19 59.73l-16.16 4.71-5.38 16.73h14.33l9.61.12-7.27-14.2 4.87-7.36zM69.1 67.88l1.03-17.83 4.69-12.68H53.94l4.69 12.68 1.03 17.83.4 5.6.03 13.83h8.58l.03-13.84.4-5.6z"
                })
            ]
        })
    })
;

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/SafariPlatform.tsx










const SafariPlatform_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    grid: {
        width: '100%'
    },
    icon: {
        fontSize: 45
    }
});
const providers = [
    {
        name: 'MetaMask',
        logo: MetaMaskIcon,
        protocol: 'https://metamask.app.link/wc'
    },
    {
        name: 'Rainbow',
        logo: RainbowIcon,
        protocol: 'https://rnbwapp.com/wc'
    },
    {
        name: 'Trust',
        logo: TrustIcon,
        protocol: 'https://link.trustwallet.com/wc'
    },
    {
        name: 'imToken',
        logo: IMTokenIcon,
        protocol: 'imtokenv2://wc'
    }, 
];
const SafariPlatform = ({ uri  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = SafariPlatform_useStyles();
    const makeConnect = (link)=>()=>(0,src/* openWindow */.xw)(dist_default()(link, {
                uri
            }))
    ;
    const descriptionMapping = {
        MetaMask: t('plugin_wallet_connect_safari_metamask'),
        Rainbow: t('plugin_wallet_connect_safari_rainbow'),
        Trust: t('plugin_wallet_connect_safari_trust'),
        imToken: t('plugin_wallet_connect_safari_im_token')
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageList/* default */.Z, {
        className: classes.grid,
        gap: 16,
        rowHeight: 183,
        children: (0,map/* default */.Z)(providers, ({ name , logo , protocol  }, key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItem/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Provider, {
                    name: name,
                    logo: /*#__PURE__*/ (0,react.createElement)(logo, {
                        className: classes.icon,
                        viewBox: '0 0 45 45'
                    }),
                    description: descriptionMapping[name],
                    onClick: makeConnect(protocol)
                })
            }, key)
        )
    });
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/FirefoxPlatform.tsx



const FirefoxPlatform = ({ uri  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
        variant: "contained",
        onClick: ()=>open(uri)
        ,
        children: t('plugin_wallet_on_connect_in_firefox')
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/QRCodeModel.tsx





const QRCodeModel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        tip: {
            fontSize: 14,
            marginBottom: theme.spacing(2)
        },
        onCopy: {
            marginTop: theme.spacing(1)
        }
    })
);
const QRCodeModel = ({ uri  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = QRCodeModel_useStyles();
    const style = {
        width: '80%',
        display: 'block',
        margin: 'auto'
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tip,
                color: "textSecondary",
                children: t('plugin_wallet_qr_code_with_wallet_connect')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* QRCode */.s_, {
                text: uri,
                canvasProps: {
                    style
                }
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/index.tsx












const WalletConnectQRCodeDialog_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%'
    }
});
const WalletConnectQRCodeDialog = ()=>{
    const [uri, setURI] = (0,react.useState)('');
    // #region remote controlled dialog logic
    const { open , closeDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated, (ev)=>ev.open && setURI(ev.uri)
    );
    // #endregion
    let mode = 'qrcode';
    if (false) {} else if (true) {
        mode = 'safari';
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeDialog, {
        uri: uri,
        open: open,
        mode: mode,
        onClose: async ()=>{
            await service/* default.Ethereum.cancelWalletConnect */.ZP.Ethereum.cancelWalletConnect();
            closeDialog();
        }
    });
};
const QRCodeDialog = ({ uri , open , onClose , mode  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = WalletConnectQRCodeDialog_useStyles();
    const [qrMode, setQRMode] = (0,react.useState)(false);
    const PlatformSelector = ()=>{
        if (!uri) {
            return null;
        } else if (qrMode || mode === 'qrcode') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeModel, {
                uri: uri
            });
        } else if (mode === 'firefox') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(FirefoxPlatform, {
                uri: uri
            });
        } else if (mode === 'safari') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(SafariPlatform, {
                uri: uri
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeModel, {
            uri: uri
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: onClose,
        title: t('plugin_wallet_connect_dialog_title'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.container,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PlatformSelector, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: mode !== 'qrcode' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "contained",
                    onClick: ()=>setQRMode(!qrMode)
                    ,
                    children: t(qrMode ? 'plugin_wallet_return_mobile_wallet_options' : 'plugin_wallet_view_qr_code')
                })
            })
        ]
    });
};


/***/ }),

/***/ 79759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* binding */ RecentTransactionDescription)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(7683);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(38443);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 5 modules
var useERC20TokenDetailed = __webpack_require__(29782);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(89260);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2239);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/contractMethodDescription/getRedpacketDescription.tsx



function getRedpacketDescription({ name , address , chainId  }, computedPayload) {
    const { HAPPY_RED_PACKET_ADDRESS_V4  } = (0,constants/* getRedPacketConstants */.GV)(chainId);
    if (!(0,utils_address/* isSameAddress */.Wr)(address, HAPPY_RED_PACKET_ADDRESS_V4)) return undefined;
    const transactionComputedPayloadParams = computedPayload && 'parameters' in computedPayload && computedPayload.parameters || undefined;
    switch(name){
        case 'create_red_packet':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateRedpacketDescription, {
                tokenAddress: transactionComputedPayloadParams?._token_addr ?? '',
                tokenAmount: transactionComputedPayloadParams?._total_tokens
            });
        default:
            return undefined;
    }
}
function CreateRedpacketDescription(props) {
    const { tokenAddress , tokenAmount  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const { value: tokenDetailed  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(tokenAddress);
    const token = (0,utils_address/* isNativeTokenAddress */.qw)(tokenAddress) ? nativeToken : tokenDetailed;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: token && tokenAddress ? t('plugin_red_packet_create_with_token', {
            amount: (0,formatter/* formatBalance */.az)(tokenAmount, token.decimals),
            symbol: token.symbol
        }) : t('plugin_red_packet_create')
    });
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/contractMethodDescription/getITO_Description.tsx



function getITO_Description({ name , address , chainId  }, computedPayload) {
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* getITOConstants */.af)(chainId);
    if (!(0,utils_address/* isSameAddress */.Wr)(address, ITO2_CONTRACT_ADDRESS)) return undefined;
    const transactionComputedPayloadParams = computedPayload && 'parameters' in computedPayload && computedPayload.parameters || undefined;
    switch(name){
        case 'fill_pool':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(FillPoolDescription, {
                tokenAddress: transactionComputedPayloadParams?._token_addr ?? '',
                tokenAmount: transactionComputedPayloadParams?._total_tokens
            });
        default:
            return undefined;
    }
}
function FillPoolDescription(props) {
    const { tokenAddress , tokenAmount  } = props;
    const { value: token  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(tokenAddress);
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: token && tokenAddress ? t('plugin_ito_transaction_dialog_summary', {
            amount: (0,formatter/* formatBalance */.az)(tokenAmount, token.decimals),
            symbol: token.symbol
        }) : t('plugin_ito_transaction_dialog_summary_with_no_token')
    });
}

// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts
var locales_legacy = __webpack_require__(47481);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/contractMethodDescription/getNFTRedpacketDescription.tsx


function getNFTRedpacketDescription({ name , address , chainId  }, computedPayload) {
    const { RED_PACKET_NFT_ADDRESS  } = (0,constants/* getNftRedPacketConstants */.pS)(chainId);
    if (!(0,utils_address/* isSameAddress */.Wr)(address, RED_PACKET_NFT_ADDRESS)) return undefined;
    switch(name){
        case 'create_red_packet':
            return locales_legacy/* i18n.t */.a.t('plugin_nft_red_packet_create');
        default:
            return undefined;
    }
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/contractMethodDescription/index.ts



function getContractMethodDescription(contractMethodInfo, computedPayload) {
    return (getRedpacketDescription(contractMethodInfo, computedPayload) ?? getITO_Description(contractMethodInfo, computedPayload)) ?? getNFTRedpacketDescription(contractMethodInfo, computedPayload);
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/TransactionDescription.tsx





function getTokenAmountDescription(amount = '0', tokenDetailed, negative) {
    const symbol = negative ? '- ' : '';
    const value = (0,src/* pow10 */.wA)(9 + (tokenDetailed?.decimals ?? 18)).isGreaterThanOrEqualTo(amount) ? (0,formatter/* formatBalance */.az)(amount, tokenDetailed?.decimals ?? 0, 4) : 'infinite';
    const token = tokenDetailed?.symbol?.trim();
    return `${symbol}${value} ${token}`;
}
function getTransactionDescription(chainId, nativeTokenDetailed, tokenDetailed, computedPayload) {
    if (!computedPayload) return;
    const type = computedPayload.type;
    switch(type){
        case types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER:
            return `Send token -${getTokenAmountDescription(computedPayload._tx.value, nativeTokenDetailed)}`;
        case types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION:
            switch(computedPayload.name){
                case 'approve':
                    return `Approve spend ${getTokenAmountDescription(computedPayload.parameters?.value, tokenDetailed)}`;
                case 'transfer':
                case 'transferFrom':
                    return `Transfer token ${getTokenAmountDescription(computedPayload.parameters?.value, tokenDetailed, true)}`;
                case 'swapExactETHForTokens':
                    const inputAmount = (0,formatter/* formatBalance */.az)(computedPayload._tx.value, nativeTokenDetailed?.decimals, 2);
                    const outputAmount = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountOutMin, tokenDetailed?.decimals, 2);
                    return `Swap ${inputAmount} ${nativeTokenDetailed?.symbol} for ${outputAmount} ${tokenDetailed?.symbol}`;
                case 'swapExactTokensForETH':
                    const inAmount = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountIn, tokenDetailed?.decimals, 2);
                    const outAmount = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountOutMin, nativeTokenDetailed?.decimals, 2);
                    return `Swap ${inAmount} ${tokenDetailed?.symbol} for ${outAmount} ${nativeTokenDetailed?.symbol}`;
                case 'swapExactTokensForTokens':
                    const amountIn = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountIn, nativeTokenDetailed?.decimals, 2);
                    const amountOut = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountOutMin, tokenDetailed?.decimals, 2);
                    return `Swap ${amountIn} ${nativeTokenDetailed?.symbol} for ${amountOut} ${tokenDetailed?.symbol}`;
                default:
                    const description = getContractMethodDescription({
                        name: computedPayload.name ?? '',
                        chainId,
                        address: computedPayload._tx.to ?? ''
                    }, computedPayload);
                    return description ?? `${computedPayload.name ?? 'Contract Interaction'} ${computedPayload._tx.value ? getTokenAmountDescription(computedPayload._tx.value, nativeTokenDetailed, true) : ''}`;
            }
        case types/* EthereumRpcType.CONTRACT_DEPLOYMENT */.Wv.CONTRACT_DEPLOYMENT:
            return `Contract Deployment ${getTokenAmountDescription(computedPayload._tx.value, nativeTokenDetailed, true)}`;
        case types/* EthereumRpcType.CANCEL */.Wv.CANCEL:
            return 'Cancel Transaction';
        default:
            return;
    }
}
function RecentTransactionDescription(props) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { hash , computedPayload  } = props;
    const { loading: getNativeTokenLoading , value: nativeTokenDetailed  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    let inputTokenAddress = '';
    let tokenAddress = '';
    if (computedPayload?.type === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION) {
        switch(computedPayload.name){
            case 'approve':
            case 'transfer':
            case 'transferFrom':
                tokenAddress = computedPayload._tx.to;
                break;
            case 'swapExactETHForTokens':
                tokenAddress = (0,last/* default */.Z)(computedPayload.parameters.path);
                break;
            case 'swapExactTokensForETH':
                tokenAddress = (0,head/* default */.Z)(computedPayload.parameters.path);
                break;
            case 'swapExactTokensForTokens':
                inputTokenAddress = (0,head/* default */.Z)(computedPayload.parameters.path);
                tokenAddress = (0,last/* default */.Z)(computedPayload.parameters.path);
                break;
            case 'create_red_packet':
                tokenAddress = computedPayload.parameters._token_addr;
                break;
            default:
                tokenAddress = '';
        }
    }
    const { loading: getInputERC20TokenLoading , value: inputTokenDetailed  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(inputTokenAddress);
    const { loading: getERC20TokenLoading , value: tokenDetailed  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(tokenAddress);
    return !getNativeTokenLoading && !getERC20TokenLoading && !getInputERC20TokenLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: getTransactionDescription(chainId, inputTokenAddress ? inputTokenDetailed : nativeTokenDetailed, tokenDetailed, computedPayload) ?? hash
    }) : null;
}


/***/ }),

/***/ 20518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ WalletStatusDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Error.js
var Error = __webpack_require__(53852);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox.tsx
var WalletStatusBox = __webpack_require__(51257);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ./src/social-network-adaptor/utils.ts
var social_network_adaptor_utils = __webpack_require__(33060);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
;// CONCATENATED MODULE: ./src/components/shared/ApplicationBoard.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        applicationWrapper: {
            marginTop: theme.spacing(0.5),
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: '100px',
            gridGap: theme.spacing(1.5),
            justifyContent: 'space-between',
            height: 324,
            [smallQuery]: {
                overflow: 'auto',
                overscrollBehavior: 'contain',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: theme.spacing(1)
            }
        }
    };
});
function ApplicationBoard() {
    const { classes  } = useStyles();
    const snsAdaptorPlugins = (0,entry_content_script/* useActivatedPluginsSNSAdaptor */.Pz)('any');
    const currentWeb3Network = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const account = (0,entry_web3/* useAccount */.mA)();
    const currentSNSNetwork = (0,social_network_adaptor_utils/* getCurrentSNSNetwork */.G)(social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
            className: classes.applicationWrapper,
            children: snsAdaptorPlugins.reduce((acc, cur)=>{
                if (!cur.ApplicationEntries) return acc;
                const currentWeb3NetworkSupportedChainIds = cur.enableRequirement.web3?.[currentWeb3Network];
                const isWeb3Enabled = Boolean(currentWeb3NetworkSupportedChainIds === undefined || currentWeb3NetworkSupportedChainIds.supportedChainIds?.includes(chainId));
                const isWalletConnectedRequired = currentWeb3NetworkSupportedChainIds !== undefined;
                const currentSNSIsSupportedNetwork = cur.enableRequirement.networks.networks[currentSNSNetwork];
                const isSNSEnabled = currentSNSIsSupportedNetwork === undefined || currentSNSIsSupportedNetwork;
                return acc.concat(cur.ApplicationEntries.map((x)=>{
                    return {
                        entry: x,
                        enabled: isSNSEnabled && (account ? isWeb3Enabled : !isWalletConnectedRequired),
                        pluginId: cur.ID
                    };
                }) ?? []);
            }, []).sort((a, b)=>a.entry.defaultSortingPriority - b.entry.defaultSortingPriority
            ).map(({ entry , enabled  }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry.RenderEntryComponent, {
                        disabled: !enabled
                    })
                }, index)
            )
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/index.tsx













const WalletStatusDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2, 3, 3)
        },
        footer: {
            fontSize: 12,
            textAlign: 'left',
            padding: theme.spacing(2),
            borderTop: `1px solid ${theme.palette.divider}`,
            justifyContent: 'flex-start'
        },
        address: {
            fontSize: 16,
            marginRight: theme.spacing(1),
            display: 'inline-block'
        },
        subTitle: {
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 600,
            marginBottom: 11.5,
            color: theme.palette.text.primary
        }
    })
);
function WalletStatusDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = WalletStatusDialog_useStyles();
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    // #region remote controlled dialog logic
    const { open , closeDialog: _closeDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    const closeDialog = (0,react.useCallback)(()=>{
        _closeDialog();
        shared_base_src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
            reason: 'timeline',
            open: false
        });
    }, []);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* InjectedDialog */.Fl, {
        title: "Mask Network",
        open: open,
        onClose: closeDialog,
        maxWidth: "sm",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.subTitle,
                        children: t('wallets')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {
                        isDashboard: props.isDashboard
                    }),
                    !props.isDashboard && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.subTitle,
                                children: t('applications')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationBoard, {})
                        ]
                    })
                ]
            }),
            !chainIdValid ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.footer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Error/* default */.Z, {
                        color: "secondary",
                        fontSize: "small",
                        sx: {
                            marginRight: 1
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "secondary",
                        variant: "body2",
                        children: t('plugin_wallet_wrong_network_tip')
                    })
                ]
            }) : null
        ]
    });
}


/***/ }),

/***/ 41106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useNativeTokenPrice),
/* harmony export */   "p": () => (/* binding */ useTokenPrice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19841);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84797);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94232);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65506);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80526);






const task = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .pollingTask */ .s_)(async ()=>{
    await _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.kickToUpdateTokenPrices */ .V.kickToUpdateTokenPrices();
    return false;
}, {
    autoStart: false,
    delay: _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_CHAIN_STATE_DELAY */ .js
});
function useTokenPrice(chainId, contractAddress, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    let platformId = undefined;
    let coinId = undefined;
    if (chainId) {
        platformId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoPlatformId */ .AQ)(chainId);
        coinId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoCoinId */ .vM)(chainId);
    }
    const category = (contractAddress || coinId)?.toLowerCase();
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // start the polling task
        task.reset();
        return ()=>task.cancel()
        ;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!category) return;
        if (contractAddress && platformId) {
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trackContract */ .V.trackContract(platformId, contractAddress);
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateTokenPrices */ .V.updateTokenPrices();
        }
        if (!contractAddress) {
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trackNativeToken */ .V.trackNativeToken(category);
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateNativeTokenPrices */ .V.updateNativeTokenPrices();
        }
        return _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.addListener */ .JC.addListener((newVal)=>{
            const value = newVal[category]?.[currencyType] ?? 0;
            setPrice(value);
        });
    }, [
        platformId,
        category,
        contractAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!category) return;
        const currentTokenPrices = _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.value */ .JC.value;
        setPrice(currentTokenPrices[category]?.[currencyType] ?? 0);
    }, [
        category,
        currencyType
    ]);
    if (!category) return 0;
    return price;
}
function useNativeTokenPrice(chainId, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    return useTokenPrice(chainId, undefined, currencyType);
}


/***/ }),

/***/ 60481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useBlockie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
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


/***/ }),

/***/ 90014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCollections),
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24790);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2239);
/* harmony import */ var _useSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37037);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);





function useCollections(address, chainId, dependReady) {
    const id = `mask.fetchNonFungibleCollectionAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectionAsset',
        params: {
            address: address,
            pageSize: 200,
            chainId
        }
    };
    const collections = (0,_useSocket__WEBPACK_IMPORTED_MODULE_1__/* .useSocket */ .s)(message);
    // TODO Pass chainId to websocket, and filter from data side.
    const filtered = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return chainId ? {
            ...collections,
            data: collections.data.filter((x)=>x.chainId === chainId
            )
        } : collections;
    }, [
        collections,
        chainId
    ]);
    return filtered;
}
function useCollectibles(address, chainId, dependReady) {
    const { erc721Tokens  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Context */ .Z_)();
    const id = `mask.fetchNonFungibleCollectibleAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectibleAssetV2',
        params: {
            address: address,
            pageSize: 30
        }
    };
    const { data , state , error , retry  } = (0,_useSocket__WEBPACK_IMPORTED_MODULE_1__/* .useSocket */ .s)(message);
    const all = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)([
        ...data ?? [],
        ...erc721Tokens.getCurrentValue().filter((x)=>(!chainId || x.contractDetailed.chainId === chainId) && (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .Wr)(x.info.owner, address)
        ), 
    ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
    );
    return {
        data: all,
        state,
        error,
        retry
    };
}


/***/ }),

/***/ 75569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useERC721ContractDetailed),
/* harmony export */   "q": () => (/* binding */ getERC721ContractDetailed)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64452);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31174);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85010);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75000);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33690);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26223);






function useERC721ContractDetailed(address) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__/* .useERC721TokenContract */ .n)(address);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!address || !wallet_ts__WEBPACK_IMPORTED_MODULE_0__.EthereumAddress.isValid(address) || !erc721TokenContract) return;
        return getERC721ContractDetailed(erc721TokenContract, address, chainId);
    }, [
        address,
        chainId,
        erc721TokenContract
    ]);
}
const lazyBlank = Promise.resolve('');
async function getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract) {
    const results = await Promise.allSettled([
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.name()) ?? lazyBlank,
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.symbol()) ?? lazyBlank,
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.baseURI()) ?? lazyBlank, 
    ]);
    const [name, symbol, baseURI] = results.map((result)=>result.status === 'fulfilled' ? result.value : ''
    );
    return (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .createERC721ContractDetailed */ .ek)(chainId, address, name, symbol, baseURI);
}
async function getERC721ContractDetailedFromOpensea(address, chainId, apiUrl) {
    const response = await fetch(`${apiUrl}/${address}`);
    if (response.ok) {
        const data = await response.json();
        return (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .createERC721ContractDetailed */ .ek)(chainId, address, data.name, data.symbol, undefined, data.image_url);
    }
    return null;
}
async function getERC721ContractDetailed(contract, address, chainId) {
    const erc721ContractDetailedFromChain = await getERC721ContractDetailedFromChain(address, chainId, contract);
    const { GET_CONTRACT_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_6__/* .getOpenseaAPIConstants */ .jk)(chainId);
    if (!GET_CONTRACT_URL) return erc721ContractDetailedFromChain;
    const contractDetailedFromOpensea = await getERC721ContractDetailedFromOpensea(address, chainId, GET_CONTRACT_URL);
    // We prefer to use `name` and `symbol` from chain rather than opensea since,
    //  these two data on opensea is sometimes incorrect. Meanwhile there's often
    //   a lack of `iconURL` from chain, which exists on opensea.
    return contractDetailedFromOpensea ? {
        ...contractDetailedFromOpensea,
        name: erc721ContractDetailedFromChain.name,
        symbol: erc721ContractDetailedFromChain.symbol
    } : erc721ContractDetailedFromChain;
}


/***/ }),

/***/ 37037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SocketState),
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24790);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64452);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);




var SocketState;
(function(SocketState) {
    SocketState["init"] = "init";
    SocketState["sent"] = "sent";
    SocketState["receiving"] = "receiving";
    SocketState["done"] = "done";
})(SocketState || (SocketState = {}));
const useSocket = (message)=>{
    const { providerSocket  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(SocketState.init);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const { value: socket , loading  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>providerSocket
    , []);
    const requestId = `${message.id}_${id}`;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setState(SocketState.init);
        setData([]);
        setError(undefined);
    }, [
        message.id
    ]);
    const { retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!socket || !message.id || loading) return;
        const notifyUpdatedHook = (info)=>{
            if (requestId !== info.id) return;
            if (!info.done) {
                setState(SocketState.receiving);
            } else {
                // workaround for get data from cache
                setTimeout(()=>setState(SocketState.done)
                , 0);
            }
            setError(info.error);
            if (!socket) return;
            setData(socket.getResult(requestId));
        };
        socket.send({
            ...message,
            notify: notifyUpdatedHook,
            id: requestId
        });
        // Get data from cache
        setData(socket.getResult(requestId));
        setState(SocketState.sent);
    }, [
        requestId,
        socket,
        loading
    ]);
    const handleRetry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setId((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
        setState(SocketState.sent);
        setData([]);
        retry();
    }, [
        retry
    ]);
    return {
        data: data ?? [],
        state,
        error,
        retry: handleRetry
    };
};


/***/ }),

/***/ 39677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useWallets)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10372);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24790);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65506);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2239);




function useWallets(type) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const { providerType , wallets  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3StateContext */ .N9)();
    if (type === _types__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.MaskWallet */ .lP.MaskWallet) return wallets.filter((x)=>x.hasStoredKeyInfo
    );
    if (type === providerType) return wallets.filter((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .currySameAddress */ .DC)(account));
    if (type) return [];
    return wallets;
}


/***/ }),

/***/ 80480:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ })

}]);