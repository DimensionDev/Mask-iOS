(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9172],{

/***/ 44309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ detectScrollType),
/* harmony export */   "T": () => (/* binding */ getNormalizedScrollLeft)
/* harmony export */ });
// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

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

/***/ 64271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = window.DOMPurify || (window.DOMPurify = (__webpack_require__(22214)["default"]) || __webpack_require__(22214));

/***/ }),

/***/ 81758:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.parse = __webpack_require__(65812);
exports.stringify = __webpack_require__(98079);


/***/ }),

/***/ 65812:
/***/ ((module) => {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),

/***/ 98079:
/***/ ((module) => {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }),

/***/ 29339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const RefreshIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Refresh', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.433 7.174l.975.683a.5.5 0 01-.13.884L5.89 9.858a.5.5 0 01-.657-.461L5.136 5.84a.5.5 0 01.787-.423l.806.564A8 8 0 114 12h2.001a6 6 0 102.433-4.826z",
        fill: "#1C68F3"
    })
}), '0 0 24 24');


/***/ }),

/***/ 51767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/base.tsx
var dHEDGE_base = __webpack_require__(41462);
// EXTERNAL MODULE: ../icons/general/Refresh.tsx
var Refresh = __webpack_require__(29339);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(27536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(48672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(3543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(6823);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(99192);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/constants.ts
var constants = __webpack_require__(5199);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/messages.ts
var messages = __webpack_require__(79649);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/types.tsx
var types = __webpack_require__(38618);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts + 3 modules
var useDHedgePool = __webpack_require__(66861);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants_constants = __webpack_require__(26223);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/usePool.ts






function useFetchPool(address) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address) return;
        return messages/* PluginDHedgeRPC.fetchPool */.t.fetchPool(address, constants/* API_URL */.T5);
    }, [
        address
    ]);
}
function useFetchPoolHistory(address, period, sort = true) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address) return [];
        return messages/* PluginDHedgeRPC.fetchPoolPerformance */.t.fetchPoolPerformance(address, period, constants/* API_URL */.T5, sort);
    }, [
        address,
        period,
        sort
    ]);
}
function usePoolDepositAssets(pool) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { sUSD_ADDRESS  } = (0,constants_constants/* useTokenConstants */.kd)();
    const poolManagerContract = (0,useDHedgePool/* useDHedgePoolManagerContract */.rY)(pool?.managerLogicAddress);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!pool) return;
        if (pool.poolType === types/* PoolType.v1 */.W4.v1) return sUSD_ADDRESS ? [
            sUSD_ADDRESS
        ] : undefined;
        return poolManagerContract?.methods.getDepositAssets().call();
    }, [
        pool,
        chainId,
        sUSD_ADDRESS,
        poolManagerContract
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(44385);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Refresh.js
var icons_material_Refresh = __webpack_require__(18697);
// EXTERNAL MODULE: ./src/plugins/hooks/useLineChart.ts
var useLineChart = __webpack_require__(75683);
// EXTERNAL MODULE: ./src/plugins/hooks/useDimension.ts
var useDimension = __webpack_require__(80883);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/ChartControl.tsx




const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            top: 0,
            right: 0,
            padding: theme.spacing(1, 2),
            position: 'absolute'
        },
        link: {
            cursor: 'pointer',
            marginRight: theme.spacing(1),
            '&:last-child': {
                marginRight: 0
            }
        },
        text: {
            fontSize: 10,
            fontWeight: 300
        }
    })
);
function PriceChartPeriodControl(props) {
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: [
            types/* Period.D1 */.pH.D1,
            types/* Period.W1 */.pH.W1,
            types/* Period.M1 */.pH.M1,
            types/* Period.M3 */.pH.M3,
            types/* Period.M6 */.pH.M6
        ].map((period)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                className: classes.link,
                onClick: ()=>props.onPeriodChange?.(period)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.text,
                    component: "span",
                    color: props.period === period ? 'primary' : 'textSecondary',
                    children: period
                })
            }, period)
        )
    });
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PerformanceChart.tsx












const DEFAULT_DIMENSION = {
    top: 32,
    right: 16,
    bottom: 32,
    left: 16,
    width: 598,
    height: 200
};
const PerformanceChart_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'relative',
            padding: theme.spacing(2)
        },
        svg: {
            display: 'block',
            color: theme.palette.text.primary
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute',
            fontSize: 15
        },
        placeholder: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            borderStyle: 'none'
        }
    })
);
function PerformanceChart(props) {
    const { pool  } = props;
    const { classes  } = PerformanceChart_useStyles();
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const rootRef = (0,react.useRef)(null);
    const svgRef = (0,react.useRef)(null);
    const [period, setPeriod] = (0,react.useState)(types/* Period.D1 */.pH.D1);
    // #region fetch pool history
    const { value: perfHistory , error , loading , retry  } = useFetchPoolHistory(pool.address, period);
    const stats = perfHistory?.map((row)=>[
            Number(row.timestamp),
            Number(row.performance)
        ]
    ) ?? [];
    // #endregion
    // #region make chart responsive
    const { width  } = (0,useWindowSize/* default */.Z)();
    const [responsiveWidth, setResponsiveWidth] = (0,react.useState)(DEFAULT_DIMENSION.width);
    const [responsiveHeight, setResponsiveHeight] = (0,react.useState)(DEFAULT_DIMENSION.height);
    (0,react.useEffect)(()=>{
        if (!rootRef.current) return;
        setResponsiveWidth(rootRef.current.getBoundingClientRect().width || DEFAULT_DIMENSION.width);
        setResponsiveHeight(rootRef.current.getBoundingClientRect().height || DEFAULT_DIMENSION.height);
    }, [
        width /* redraw canvas if window width resize */ 
    ]);
    // #endregion
    const dimension = {
        ...DEFAULT_DIMENSION,
        width: responsiveWidth,
        height: responsiveHeight
    };
    (0,useDimension/* useDimension */.$)(svgRef, dimension);
    (0,useLineChart/* useLineChart */.t)(svgRef, stats.map(([date, price])=>({
            date: new Date(date),
            value: price
        })
    ), dimension, 'x-dhedge-performance-line-chart', {
        tickFormat: '.0%',
        formatTooltip: (value)=>`${(value * 100).toFixed(1)}%`
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        ref: rootRef,
        children: [
            loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                className: classes.progress,
                color: "primary",
                size: 15
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_material_Refresh/* default */.Z, {
                className: classes.refresh,
                color: "primary",
                onClick: retry
            }),
            stats.length && !error ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChartPeriodControl, {
                        period: period,
                        onPeriodChange: setPeriod
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        className: classes.svg,
                        ref: svgRef,
                        width: dimension.width,
                        height: dimension.height,
                        viewBox: `0 0 ${dimension.width} ${dimension.height}`,
                        preserveAspectRatio: "xMidYMid meet"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.placeholder,
                align: "center",
                color: "textSecondary",
                children: loading ? t('plugin_dhedge_loading_chart') : error ? t('plugin_dhedge_fetch_error') : t('plugin_dhedge_no_data')
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(24);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(31008);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/utils.ts
var utils = __webpack_require__(19450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/isomorphic-dompurify@0.18.0/node_modules/isomorphic-dompurify/browser.js
var browser = __webpack_require__(64271);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolStats.tsx










const DIGIT_LENGTH = 18;
const PoolStats_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            alignItems: 'center',
            '& svg': {
                marginRight: theme.spacing(0.5)
            }
        },
        title: {
            fontSize: 12
        },
        value: {
            fontSize: 32
        },
        meta: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1)
        },
        description: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            maxWidth: '100%'
        }
    })
);
function PoolStats(props) {
    const { pool  } = props;
    const { classes  } = PoolStats_useStyles();
    // #region process stats
    const valueManaged = (0,utils/* formatAmountPostfix */.K)((0,formatter/* formatBalance */.az)(pool?.totalValue, DIGIT_LENGTH));
    const lifeTimeReturn = new (bignumber_default())((0,formatter/* formatBalance */.az)(pool.performance, DIGIT_LENGTH)).minus(1).multipliedBy(100);
    const riskFactor = pool && pool?.riskFactor !== -1 ? pool?.riskFactor : '-';
    // pool detail contains raw html and need to sanitize before use
    const cleanDescription = browser_default().sanitize(pool.poolDetails);
    const [expanded, setExpanded] = (0,react.useState)(cleanDescription.length < constants/* POOL_DESCRIPTION_LIMIT */.yV);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.meta,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        direction: "column",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_value_managed"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textPrimary",
                                    className: classes.value,
                                    children: [
                                        "$",
                                        valueManaged
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_lifetime_return"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: lifeTimeReturn.isGreaterThan(0) ? entry/* MaskColorVar.greenMain */.ZN.greenMain : lifeTimeReturn.isLessThan(0) ? entry/* MaskColorVar.redMain */.ZN.redMain : 'textPrimary',
                                    className: classes.value,
                                    children: [
                                        lifeTimeReturn.toFixed(2),
                                        "%"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_risk_factor"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: riskFactor === '-' || riskFactor === 3 ? 'textPrimary' : riskFactor < 3 ? entry/* MaskColorVar.greenMain */.ZN.greenMain : entry/* MaskColorVar.redMain */.ZN.redMain,
                                    className: classes.value,
                                    children: [
                                        riskFactor,
                                        " / 5"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            cleanDescription ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.description,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                color: "textPrimary",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                    i18nKey: "plugin_dhedge_strategy"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                color: "textSecondary",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: expanded ? cleanDescription : cleanDescription.slice(0, constants/* POOL_DESCRIPTION_LIMIT */.yV).concat('...')
                                    }
                                })
                            }),
                            cleanDescription.length > constants/* POOL_DESCRIPTION_LIMIT */.yV ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                color: "primary",
                                onClick: ()=>setExpanded(!expanded)
                                ,
                                children: expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                    i18nKey: "plugin_dhedge_see_less"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                    i18nKey: "plugin_dhedge_see_more"
                                })
                            }) : null
                        ]
                    })
                ]
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(30103);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockie.ts
var useBlockie = __webpack_require__(60481);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/useManager.ts


function useAvatar(address) {
    return (0,useBlockie/* useBlockie */.Y)(address, constants/* BLOCKIES_OPTIONS */.jz);
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolViewDeck.tsx











const PoolViewDeck_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        title: {
            padding: theme.spacing(1, 0),
            display: 'flex',
            alignItems: 'center',
            '& > :last-child': {
                marginTop: 4,
                marginLeft: 4
            }
        },
        meta: {
            fontSize: 14,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'left'
        },
        avatar: {
            width: theme.spacing(8),
            height: theme.spacing(8)
        },
        text: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '4',
            '-webkit-box-orient': 'vertical'
        },
        button: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            fontWeight: 500
        },
        chip: {
            width: '100%',
            fontSize: 'x-small'
        }
    })
);
function PoolViewDeck(props) {
    const { pool , inputTokens , link  } = props;
    const { classes  } = PoolViewDeck_useStyles();
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const blockie = useAvatar(pool.managerAddress);
    const chainId = (0,useChainId/* useChainId */.xx)();
    // #region manager share
    const managerShare = new (bignumber_default())(pool.balanceOfManager).dividedBy(pool.totalSupply).multipliedBy(100).integerValue((bignumber_default()).ROUND_UP);
    // #endregion
    // #region the invest dialog
    const { setDialog: openInvestDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* PluginDHedgeMessages.InvestDialogUpdated */.V.InvestDialogUpdated);
    const onInvest = (0,react.useCallback)(()=>{
        if (!pool || !inputTokens) return;
        openInvestDialog({
            open: true,
            pool: pool,
            tokens: inputTokens
        });
    }, [
        pool,
        inputTokens,
        openInvestDialog
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        className: classes.meta,
        direction: "row",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                alignSelf: "center",
                xs: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: link,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        src: blockie,
                        className: classes.avatar
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            color: "primary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: link,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                children: pool.name.toUpperCase()
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        spacing: 0.5,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textPrimary",
                                    className: classes.text,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_managed_by",
                                        components: {
                                            manager: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, pool.managerAddress)
                                            })
                                        },
                                        values: {
                                            managerName: pool.managerName
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.text,
                                    children: managerShare.isLessThanOrEqualTo(50) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_manager_share",
                                        components: {
                                            share: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                        },
                                        values: {
                                            managerShare: managerShare
                                        }
                                    }) : t('plugin_dhedge_manager_share_more_than_50')
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                alignSelf: "right",
                xs: 4,
                textAlign: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.button,
                    variant: "contained",
                    fullWidth: true,
                    color: "primary",
                    onClick: onInvest,
                    children: t('plugin_dhedge_invest')
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolView.tsx












const PoolView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            boxShadow: 'none',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0
        },
        message: {
            textAlign: 'center'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            fontSize: 'inherit'
        },
        content: {
            width: '100%',
            height: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important'
        },
        body: {
            flex: 1,
            overflow: 'auto',
            maxHeight: 350,
            borderRadius: 0,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tabs: {
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`,
            width: '100%',
            minHeight: 'unset'
        },
        tab: {
            minHeight: 'unset',
            minWidth: 'unset'
        }
    })
);
function PoolView(props) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = PoolView_useStyles();
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    // #region allowed tokens
    const { value: pool , error , loading , retry  } = useFetchPool(props.address ?? '');
    // #region susd token
    const { value: allowedTokens , loading: loadingAllowedTokens , retry: retryAllowedTokens , error: errorAllowedTokens ,  } = usePoolDepositAssets(pool);
    // #endregion
    // #region tabs
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_dhedge_tab_stats')
        }, "stats"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_dhedge_tab_chart')
        }, "chart"), 
    ].filter(Boolean);
    // #endregion
    if (loading || loadingAllowedTokens) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: t('plugin_dhedge_loading')
    });
    if (!pool) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: t('plugin_dhedge_pool_not_found')
    });
    if (error || errorAllowedTokens && currentChainId === pool.chainId) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: [
            t('plugin_dhedge_smt_wrong'),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            error?.message || errorAllowedTokens?.message,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
                className: classes.refresh,
                color: "primary",
                onClick: error ? retry : retryAllowedTokens
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: pool.chainId,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            className: classes.root,
            elevation: 0,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                    subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolViewDeck, {
                        pool: pool,
                        inputTokens: allowedTokens,
                        link: props.link
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                            className: classes.tabs,
                            indicatorColor: "primary",
                            textColor: "primary",
                            variant: "fullWidth",
                            value: tabIndex,
                            onChange: (_, newValue)=>setTabIndex(newValue)
                            ,
                            TabIndicatorProps: {
                                style: {
                                    display: 'none'
                                }
                            },
                            children: tabs
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                            className: classes.body,
                            children: [
                                tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolStats, {
                                    pool: pool
                                }) : null,
                                tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PerformanceChart, {
                                    pool: pool
                                }) : null
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/plugins/dHEDGE/UI/InvestDialog.tsx + 1 modules
var InvestDialog = __webpack_require__(96013);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/SNSAdaptor/index.tsx









function getPoolFromLink(link) {
    const matchLink = (0,constants/* createMatchLink */.ag)();
    const [, , address] = matchLink ? link.match(matchLink) ?? [] : [];
    return {
        link,
        address
    };
}
function getPoolFromLinks(links) {
    return links.map(getPoolFromLink).find(Boolean);
}
const sns = {
    ...dHEDGE_base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const links = (0,react.useMemo)(()=>{
            const x = (0,base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,src/* parseURL */.Lk)(x.val);
        }, [
            props.message
        ]);
        if (!links) return null;
        const pool = getPoolFromLinks(links);
        if (!pool?.address) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            link: pool.link,
            address: pool.address
        });
    },
    PostInspector: function Component() {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const pool = getPoolFromLinks(links);
        if (!pool?.address) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            link: pool.link,
            address: pool.address
        });
    },
    GlobalInjection: function Component() {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(InvestDialog/* InvestDialog */.V, {});
    }
};
/* harmony default export */ const SNSAdaptor = (sns);
function Renderer(props) {
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolView, {
        address: props.address,
        link: props.link
    });
}


/***/ }),

/***/ 19450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ formatAmountPostfix),
/* harmony export */   "N": () => (/* binding */ getChainIdFromCode)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65506);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38618);



const ONE_THOUSAND = 1000;
const ONE_MILLION = ONE_THOUSAND * 1000;
const ONE_BILLION = ONE_MILLION * 1000;
const ONE_TRILLION = ONE_BILLION * 1000;
/**
 * A helper function to format amount
 * @param input raw amount
 * @return {String} Postfixed formatted amount
 * @example
 * formatAmountPostfix(1.234);
 * // returns 1.23
 * @example
 * formatAmountPostfix(12.34);
 * // returns 12.3
 * @example
 * formatAmountPostfix(2000.123);
 * // returns 2.12K
 * @example
 * formatAmountPostfix(20000.123);
 * // returns 20.1K
 **/ function formatAmountPostfix(input) {
    let postfix = '';
    let amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(input);
    if (amount.isGreaterThanOrEqualTo(ONE_TRILLION)) {
        postfix = 'T';
        amount = amount.dividedBy(ONE_TRILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_BILLION)) {
        postfix = 'B';
        amount = amount.dividedBy(ONE_BILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_MILLION)) {
        postfix = 'M';
        amount = amount.dividedBy(ONE_MILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_THOUSAND)) {
        postfix = 'K';
        amount = amount.dividedBy(ONE_THOUSAND);
    }
    const fixedAmount = amount.isLessThanOrEqualTo(10) ? amount.toFixed(2) : amount.toFixed(1);
    return `${fixedAmount.replace(/\.0$/, '')}${postfix}`;
}
function getChainIdFromCode(blockChainCode) {
    switch(blockChainCode){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .BlockchainCode.ethereum */ .Xp.ethereum:
            return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .BlockchainCode.polygon */ .Xp.polygon:
            return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic;
    }
}


/***/ }),

/***/ 38587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ EthereumChainBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../plugin-infra/src/entry-dom.ts + 1 modules
var entry_dom = __webpack_require__(3267);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(24790);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAllowTestnet.ts

function useAllowTestnet() {
    return (0,context/* useWeb3StateContext */.N9)().allowTestnet;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(94232);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(80917);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumChainBoundary.tsx















const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({})
);
function EthereumChainBoundary(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const pluginID = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const plugin = (0,entry_dom/* useActivatedPlugin */.Rc)(pluginID, 'any');
    const account = (0,entry_web3/* useAccount */.mA)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const allowTestnet = useAllowTestnet();
    const providerType = (0,src/* useValueRef */.E)(settings/* currentProviderSettings */.t1);
    const { noSwitchNetworkTip =false  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const expectedChainId = props.chainId;
    const expectedNetwork = (0,chainDetailed/* getChainName */.qz)(expectedChainId);
    const actualChainId = chainId;
    const actualNetwork = (0,chainDetailed/* getChainName */.qz)(actualChainId);
    // if false then it will not guide the user to switch the network
    const isAllowed = (0,chainDetailed/* isChainIdValid */.Ji)(expectedChainId, allowTestnet) && !!account && providerType !== types/* ProviderType.Coin98 */.lP.Coin98;
    // is the actual chain id matched with the expected one?
    const isChainMatched = actualChainId === expectedChainId;
    const isPluginMatched = pluginID === entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    // is the actual chain id a valid one even if it does not match with the expected one?
    const isValid = props?.isValidChainId?.(actualChainId, expectedChainId) ?? false;
    const { openDialog: openSelectProviderDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #region connect wallet dialog
    const { setDialog: setConnectWalletDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (ev.open) return;
    });
    // #endregion
    // request ethereum-compatible network
    const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(expectedChainId);
    const onSwitchChain = (0,react.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,esm/* delay */.gw)(1000);
        if (!isAllowed) return;
        const switchToChain = async ()=>{
            // read the chain detailed from the built-in chain list
            const chainDetailedCAIP = (0,chainDetailed/* getChainDetailedCAIP */.EX)(expectedChainId);
            if (!chainDetailedCAIP) throw new Error('Unknown network type.');
            // if mask wallet was used it can switch network automatically
            if (providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet) {
                await messages/* WalletRPC.updateAccount */.V.updateAccount({
                    chainId: expectedChainId
                });
                return;
            }
            if (!networkType) return;
            try {
                const overrides = {
                    chainId: expectedChainId,
                    providerType
                };
                await Promise.race([
                    (async ()=>{
                        await (0,esm/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
                        throw new Error('Timeout!');
                    })(),
                    networkType === types/* NetworkType.Ethereum */.td.Ethereum ? service/* default.Ethereum.switchEthereumChain */.ZP.Ethereum.switchEthereumChain(expectedChainId, overrides) : service/* default.Ethereum.addEthereumChain */.ZP.Ethereum.addEthereumChain(chainDetailedCAIP, account, overrides), 
                ]);
                // recheck
                const chainIdHex = await service/* default.Ethereum.getChainId */.ZP.Ethereum.getChainId(overrides);
                if (Number.parseInt(chainIdHex, 16) !== expectedChainId) throw new Error('Failed to switch chain.');
            } catch  {
                throw new Error(`Switch Chain Error: Make sure your wallet is on the ${(0,pipes/* resolveNetworkName */.nW)(networkType)} network.`);
            }
        };
        const switchToPlugin = async ()=>{
            settings_settings/* pluginIDSettings.value */.tR.value = entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
        };
        if (!isChainMatched) await switchToChain();
        if (!isPluginMatched) {
            await switchToPlugin();
            if (!networkType || networkType !== types/* NetworkType.Ethereum */.td.Ethereum || (0,address/* isValidAddress */.At)(account)) return;
            setConnectWalletDialog({
                open: true,
                providerType: types/* ProviderType.MetaMask */.lP.MetaMask,
                networkType
            });
        }
    }, [
        account,
        isAllowed,
        isChainMatched,
        isPluginMatched,
        providerType,
        expectedChainId
    ]);
    const renderBox = (children)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: props.className,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            sx: !props.disablePadding ? {
                paddingTop: 1,
                paddingBottom: 1
            } : null,
            children: children
        });
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_connect_wallet_tip')
                })
            }),
            !props.hiddenConnectButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                size: "small",
                sx: {
                    marginTop: 1.5
                },
                onClick: openSelectProviderDialog,
                children: t('plugin_wallet_connect_wallet')
            }) : null
        ]
    }));
    if (isChainMatched && isPluginMatched || isValid) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    });
    if (!isAllowed) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: t('plugin_wallet_not_available_on', {
                network: actualNetwork
            })
        })
    }));
    if (pluginID !== entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: plugin?.name?.fallback ?? 'Unknown Plugin'
                        })
                    })
                }) : null,
                isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    variant: "contained",
                    size: "small",
                    className: classes.switchButton,
                    sx: props.switchButtonStyle ?? {
                        marginTop: 1.5
                    },
                    init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_switch_network', {
                            network: expectedNetwork
                        })
                    }),
                    waiting: t('plugin_wallet_switch_network_under_going', {
                        network: expectedNetwork
                    }),
                    complete: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...props.ActionButtonPromiseProps
                }) : null
            ]
        }));
    }
    return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualNetwork
                    })
                })
            }) : null,
            isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                variant: "contained",
                size: "small",
                className: classes.switchButton,
                sx: props.switchButtonStyle ?? {
                    marginTop: 1.5
                },
                init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedNetwork
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedNetwork
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...props.ActionButtonPromiseProps
            }) : null
        ]
    }));
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


/***/ })

}]);