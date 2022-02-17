(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7225,9613,131,8253,7714],{

/***/ 67828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(37879);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(93817);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(40299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(16615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.61_2f50eb45a1501445764b3dbbd8573d7c/node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(85186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.61_2f50eb45a1501445764b3dbbd8573d7c/node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(1830);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.61_2f50eb45a1501445764b3dbbd8573d7c/node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38926);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.61_10fe5b9cda37a48a2d94b5e38d45d618/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.61_10fe5b9cda37a48a2d94b5e38d45d618/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(30212);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.61_10fe5b9cda37a48a2d94b5e38d45d618/node_modules/@mui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabPanelUtilityClass, classes);
};

const TabPanelRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
const TabPanel = /*#__PURE__*/react.forwardRef(function TabPanel(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabPanel'
  });

  const {
    children,
    className,
    value
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(ownerState);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m["default"])(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    ownerState: ownerState
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ }),

/***/ 23400:
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

/***/ 58967:
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 60878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68944);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired), _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0__.createContext || createReactContext;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ 15415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isarray = __webpack_require__(58967)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ 83336:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const strictUriEncode = __webpack_require__(30309);
const decodeComponent = __webpack_require__(49048);
const splitOnFirst = __webpack_require__(36897);

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
				const newValue = isArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url, hash] = splitOnFirst(input, '#');

	return Object.assign(
		{
			url: url.split('?')[0] || '',
			query: parse(extract(input), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (input, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(input.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(input.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, input.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(input.url);
	if (input.fragmentIdentifier) {
		hash = `#${encode(input.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};


/***/ }),

/***/ 42389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolvePathname);


/***/ }),

/***/ 36897:
/***/ ((module) => {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ 30309:
/***/ ((module) => {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 9915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ hasNativeAPI),
  "Nz": () => (/* binding */ nativeAPI)
});

// UNUSED EXPORTS: sharedNativeAPI

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(73302);
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
        __webpack_require__.e(/* import() */ 3321).then(__webpack_require__.bind(__webpack_require__, 3321)).then((x)=>x.MaskNetworkAPI
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

/***/ 25829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50266);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52311);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43463);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95273);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(1)
        },
        disabledTab: {
            opacity: 0.5
        },
        flexContainer: {}
    })
);
function AbstractTab(props) {
    const { tabs , state , index: index1 , height =200 , hasOnlyOneChild =false  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [value, setValue] = state !== null && state !== void 0 ? state : [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                square: true,
                elevation: 0,
                className: classes.tabPaper,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator,
                        flexContainer: classes.flexContainer
                    },
                    value: index1 ? index1 : value ? value : 0,
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    variant: "fullWidth",
                    indicatorColor: "primary",
                    textColor: "primary",
                    onChange: (_, newValue)=>{
                        return setValue === null || setValue === void 0 ? void 0 : setValue(newValue);
                    },
                    children: tabs.map((tab, i)=>{
                        var ref;
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: tab.disabled,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tab, [
                                index1,
                                value
                            ].includes(i) ? classes.focusTab : '', tab.disabled ? classes.disabledTab : ''),
                            disableFocusRipple: tab.disableFocusRipple,
                            disableRipple: tab.disableRipple,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${(ref = tab.id) === null || ref === void 0 ? void 0 : ref.toLowerCase()}_tab`
                        }, i));
                    })
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index)=>index === value
                ),
                sx: {
                    height: height,
                    minHeight: height
                }
            }) : null
        ]
    }));
};


/***/ }),

/***/ 32364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(95501);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(28527);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(52153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(71339);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(4739);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(98174);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(39419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(83573);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx

// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated



function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(29980);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(67908);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(81223);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogCloseButton: {
            color: theme.palette.text.primary
        },
        paper: {
            ...snsId === base/* MINDS_ID */.fN || snsId === facebook_com_base/* FACEBOOK_ID */.Iz ? {
                width: 'auto',
                backgroundImage: 'none'
            } : {}
        }
    })
);
function InjectedDialog(props) {
    var ref, ref1, ref2;
    const overwrite = social_network.activatedSocialNetworkUI.customization.componentOverwrite || {};
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,src/* useStylesExtends */.Bc)(useStyles({
        snsId: social_network.activatedSocialNetworkUI.networkIdentifier
    }), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , disableTitleBorder , ...rest } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,src/* useDialogStackActor */.tE)(open);
    return (0,utils/* usePortalShadowRoot */.ad)((container)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(IncreaseStack, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
                container: container,
                fullScreen: fullScreen,
                classes: dialogClasses,
                scroll: "paper",
                fullWidth: true,
                maxWidth: "sm",
                disableAutoFocus: true,
                disableEnforceFocus: true,
                onClose: (event, reason)=>{
                    if (reason === 'backdropClick' && disableBackdropClick) return;
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                },
                onBackdropClick: disableBackdropClick ? void 0 : onClose,
                BackdropProps: {
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...rest,
                ...extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* ErrorBoundary */.SV, {
                    children: [
                        title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            className: "dashboard-dialog-title-hook",
                            classes: {
                                root: dialogTitle
                            },
                            style: {
                                border: isDashboard || disableTitleBorder ? 'none' : undefined,
                                fontSize: isDashboard ? 24 : undefined
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "large",
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t('post_dialog__dismiss_aria'),
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIconUI, {
                                        style: shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        }));
    });
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>{
        return (child === null || child === void 0 ? void 0 : child.type) === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,src/* mergeClasses */.ze)(extraClasses, child.props.classes)
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 5913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ NetworkTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _AbstractTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25829);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9094);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87470);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme, props)=>({
        tab: {
            backgroundColor: !props.isDashboard ? `${theme.palette.background.default}!important` : `${_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.primaryBackground2 */ .ZN.primaryBackground2}!important`,
            marginRight: 1,
            '&:last-child': {
                marginRight: 0
            }
        },
        tabs: {
            '& .MuiTabs-flexContainer': {
                display: 'grid',
                gridTemplateColumns: Array(props.chainLength).fill(100 / props.chainLength + '%').join(' '),
                backgroundColor: theme.palette.background.paper
            },
            '& .Mui-selected': {
                color: '#ffffff',
                backgroundColor: `${theme.palette.primary.main}!important`
            }
        }
    })
);
function NetworkTab(props) {
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isDashboardPage */ .K2)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles({
        chainLength: props.chains.length,
        isDashboard
    }), props);
    const { chainId: chainId1 , setChainId , chains  } = props;
    const createTabItem = (name, chainId)=>({
            label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: name
            }),
            sx: {
                p: 0
            },
            cb: ()=>setChainId(chainId)
        })
    ;
    var ref;
    const tabProps = {
        tabs: chains.map((chainId)=>{
            var ref1;
            return createTabItem((ref = (ref1 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId)) === null || ref1 === void 0 ? void 0 : ref1.chain) !== null && ref !== void 0 ? ref : 'Unknown', chainId);
        }),
        index: chains.indexOf(chainId1),
        classes,
        hasOnlyOneChild: true
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AbstractTab__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...tabProps
    }));
}


/***/ }),

/***/ 56347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ WalletStatusBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14910);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51313);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61077);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40201);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40675);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14767);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87470);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94531);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21949);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98697);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76108);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8267);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9228);















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
    var ref;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .useI18N */ .M1)();
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isDashboardPage */ .K2)();
    const { classes  } = useStyles({
        isDashboard
    });
    const chainId = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useChainId */ .xx)();
    const account = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useAccount */ .mA)();
    const wallet = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .Os)();
    const providerType = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useProviderType */ ._o)();
    const providerDescriptor = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useProviderDescriptor */ .fY)();
    const networkDescriptor = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkDescriptor */ .Vw)();
    var ref1;
    const { Utils  } = (ref1 = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3State */ .dM)()) !== null && ref1 !== void 0 ? ref1 : {};
    const { value: domain  } = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useReverseAddress */ .$q)(account);
    // #region copy addr to clipboard
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const onCopy = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useSnackbarCallback */ .iD)(async (ev)=>{
        ev.stopPropagation();
        copyToClipboard(account);
    }, [], undefined, undefined, undefined, t('copy_success_of_wallet_addr'));
    // #endregion
    // #region change provider
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // #endregion
    // #region walletconnect
    const { setDialog: setWalletConnectDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletMessages.events.walletConnectQRCodeDialogUpdated */ .R.events.walletConnectQRCodeDialogUpdated);
    // #endregion
    const onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        switch(providerType){
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.WalletConnect */ .lP.WalletConnect:
                setWalletConnectDialog({
                    open: true,
                    uri: await _extension_service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Ethereum.createConnectionURI */ .ZP.Ethereum.createConnectionURI()
                });
                break;
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.Fortmatic */ .lP.Fortmatic:
                await _extension_service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Ethereum.disconnectFortmatic */ .ZP.Ethereum.disconnectFortmatic(chainId);
                break;
        }
    }, [
        chainId,
        providerType,
        setWalletConnectDialog
    ]);
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        openSelectProviderDialog();
    }, [
        openSelectProviderDialog
    ]);
    var ref2, ref3;
    return account ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.currentAccount, props.isDashboard ? classes.dashboardBackground : ''),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                size: 48,
                badgeSize: 16,
                networkIcon: providerDescriptor === null || providerDescriptor === void 0 ? void 0 : providerDescriptor.icon,
                providerIcon: networkDescriptor === null || networkDescriptor === void 0 ? void 0 : networkDescriptor.icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.accountInfo,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.infoRow,
                        style: {
                            marginBottom: 6
                        },
                        children: providerType !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.MaskWallet */ .lP.MaskWallet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            className: classes.accountName,
                            children: domain && (Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName) ? Utils.formatDomainName(domain) : providerDescriptor === null || providerDescriptor === void 0 ? void 0 : providerDescriptor.name
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    className: classes.accountName,
                                    children: (ref2 = wallet === null || wallet === void 0 ? void 0 : wallet.name) !== null && ref2 !== void 0 ? ref2 : providerDescriptor === null || providerDescriptor === void 0 ? void 0 : providerDescriptor.name
                                }),
                                domain && (Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    className: classes.domain,
                                    children: Utils.formatDomainName(domain)
                                }) : null
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.infoRow,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.address,
                                variant: "body2",
                                title: account,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .FormattedAddress */ .Kv, {
                                    address: account,
                                    size: 4,
                                    formatter: Utils === null || Utils === void 0 ? void 0 : Utils.formatAddress
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                className: classes.link,
                                underline: "none",
                                component: "button",
                                title: t('wallet_status_button_copy_address'),
                                onClick: onCopy,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: classes.linkIcon,
                                    size: 14
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                className: classes.link,
                                href: (ref3 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.resolveAddressLink) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId, account)) !== null && ref3 !== void 0 ? ref3 : '',
                                target: "_blank",
                                title: t('plugin_wallet_view_on_explorer'),
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
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
                    providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.WalletConnect */ .lP.WalletConnect || providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.Fortmatic */ .lP.Fortmatic ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_10__/* .ActionButtonPromise */ .Zc, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.actionButton),
                        variant: "contained",
                        size: "small",
                        onClick: onChange,
                        children: t('wallet_status_button_change')
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: classes.connectButtonWrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.actionButton),
            color: "primary",
            variant: "contained",
            size: "small",
            onClick: onChange,
            children: t('plugin_wallet_on_connect')
        })
    });
}


/***/ }),

/***/ 49257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ InputBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50266);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98174);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36190);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);




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
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
                            onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
                        },
                        ...props.inputBaseProps
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 88143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92498);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14767);
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
    var ref1;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                ...(ref1 = props.InputProps) === null || ref1 === void 0 ? void 0 : ref1.classes
            }
        },
        FormHelperTextProps: {
            ...props.FormHelperTextProps,
            style: {
                marginLeft: 0
            }
        }
    }));
}));


/***/ }),

/***/ 99223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gs": () => (/* reexport */ useAsset),
  "X$": () => (/* reexport */ useBridgedProvider),
  "k6": () => (/* reexport */ useHistory),
  "$K": () => (/* reexport */ useInjectedProviderType),
  "$F": () => (/* reexport */ useNFTBalance/* useNFTBalance */.$),
  "yi": () => (/* reexport */ useOrders)
});

// UNUSED EXPORTS: useInjectedProviderReady, useNetwork, useProvider

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(29105);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 25 modules
var constants = __webpack_require__(36130);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(52646);
// EXTERNAL MODULE: ./src/plugins/EVM/messages.ts
var messages = __webpack_require__(92280);
// EXTERNAL MODULE: ./src/plugins/Collectible/pipes/index.ts
var pipes = __webpack_require__(89639);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useAsset.ts




function useAsset(address, tokenId, provider) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        var ref, ref1, ref2;
        const asset = await messages/* EVM_RPC.getAsset */.k.getAsset({
            address,
            tokenId,
            chainId,
            provider
        });
        var ref3, ref4, ref5, ref6;
        return {
            ...asset,
            isOrderWeth: (ref4 = (0,utils_address/* isSameAddress */.Wr)((ref3 = asset === null || asset === void 0 ? void 0 : (ref = asset.desktopOrder) === null || ref === void 0 ? void 0 : ref.payment_token) !== null && ref3 !== void 0 ? ref3 : '', WNATIVE_ADDRESS)) !== null && ref4 !== void 0 ? ref4 : false,
            isCollectionWeth: (ref5 = asset === null || asset === void 0 ? void 0 : (ref1 = asset.collection) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.payment_tokens) === null || ref2 === void 0 ? void 0 : ref2.some((0,utils_address/* currySameAddress */.DC)(WNATIVE_ADDRESS))) !== null && ref5 !== void 0 ? ref5 : false,
            isOwner: (ref6 = asset === null || asset === void 0 ? void 0 : asset.top_ownerships.some((item)=>(0,utils_address/* isSameAddress */.Wr)(item.owner.address, account)
            )) !== null && ref6 !== void 0 ? ref6 : false,
            collectionLinkUrl: (0,pipes/* resolveAvatarLinkOnCurrentProvider */.TN)(chainId, asset, provider)
        };
    }, [
        account,
        chainId,
        WNATIVE_ADDRESS,
        address,
        tokenId,
        provider
    ]);
}

// EXTERNAL MODULE: ./src/plugins/EVM/hooks/useNFTBalance.ts
var useNFTBalance = __webpack_require__(39809);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useHistory.ts



function useHistory(provider, page, size, address, tokenId) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !tokenId) return {
            data: [],
            hasNextPage: false
        };
        const histories = await messages/* EVM_RPC.getHistory */.k.getHistory({
            address,
            tokenId,
            chainId,
            provider,
            page,
            size
        });
        return {
            data: histories,
            hasNextPage: histories.length === size
        };
    }, [
        address,
        tokenId,
        chainId,
        provider,
        page,
        size
    ]);
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts + 21 modules
var src = __webpack_require__(42189);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useOrders.ts




function useOrders(provider, page, size, address, tokenId, side) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !tokenId) return {
            data: [],
            hasNextPage: false
        };
        const orders = await messages/* EVM_RPC.getOrders */.k.getOrders({
            address,
            tokenId,
            side: side !== null && side !== void 0 ? side : src/* NonFungibleTokenAPI.OrderSide.Sell */.x4.OrderSide.Sell,
            chainId,
            provider,
            page,
            size
        });
        return {
            data: orders,
            hasNextPage: orders.length === size
        };
    }, [
        address,
        tokenId,
        side,
        chainId
    ]);
}

// EXTERNAL MODULE: ./src/plugins/EVM/constants.ts
var EVM_constants = __webpack_require__(44365);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useNetwork.ts


function useNetwork() {
    const networkType = useNetworkType();
    var ref;
    return (ref = PLUGIN_NETWORKS.find((x)=>x.type === networkType
    )) !== null && ref !== void 0 ? ref : null;
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useProvider.ts


function useProvider() {
    const providerType = useProviderType();
    var ref;
    return (ref = PLUGIN_PROVIDERS.find((x)=>x.type === providerType
    )) !== null && ref !== void 0 ? ref : null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(35520);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useBridgedProvider.ts



function useBridgedProvider(type) {
    return (0,react.useMemo)(()=>{
        switch(type){
            case 'ethereum':
                return sdk/* bridgedEthereumProvider */.j3;
            case 'coin98':
                return sdk/* bridgedCoin98Provider */.A9;
            default:
                (0,esm/* unreachable */.t1)(type);
        }
    }, [
        type
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useInjectedProviderReady.ts


function useInjectedProviderReady(type) {
    const bridgedProvider = useBridgedProvider(type);
    const { value: available = false  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return bridgedProvider.untilAvailable();
    }, [
        bridgedProvider
    ]);
    return available;
}

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useInjectedProviderType.ts




function useInjectedProviderType(type) {
    const bridgedProvider = useBridgedProvider(type);
    const injectedProviderReady = useInjectedProviderReady(type);
    const { value: injectedProviderType  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!injectedProviderReady) return;
        // WalletLink (Coinbase)
        const isWalletLink = await bridgedProvider.getProperty('isWalletLink');
        if (isWalletLink) return types/* ProviderType.WalletLink */.lP.WalletLink;
        // Coin98 under ethereum
        const isCoin98 = await bridgedProvider.getProperty('isCoin98');
        if (isCoin98) return types/* ProviderType.Coin98 */.lP.Coin98;
        // mathwallet
        const isMathWallet = await bridgedProvider.getProperty('isMathWallet');
        if (isMathWallet) return types/* ProviderType.MathWallet */.lP.MathWallet;
        // metamask
        const isMetaMask = await bridgedProvider.getProperty('isMetaMask');
        if (isMetaMask) return types/* ProviderType.MetaMask */.lP.MetaMask;
        return;
    }, [
        injectedProviderReady,
        bridgedProvider
    ]);
    return injectedProviderType;
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/index.ts











/***/ }),

/***/ 39809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useNFTBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29105);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13601);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25071);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92280);



function useNFTBalance(address, disabled = false) {
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!address || disabled) return null;
        return _messages__WEBPACK_IMPORTED_MODULE_0__/* .EVM_RPC.getNFTBalance */ .k.getNFTBalance({
            address,
            chainId,
            provider: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN
        });
    }, [
        address,
        disabled,
        chainId
    ]);
}


/***/ }),

/***/ 92280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ EVM_Messages),
/* harmony export */   "k": () => (/* binding */ EVM_RPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44365);



if (false) {}
const EVM_Messages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const EVM_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(2189), __webpack_require__.e(6280)]).then(__webpack_require__.bind(__webpack_require__, 46280))
, EVM_Messages.events.rpc);


/***/ }),

/***/ 96967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OptionsCard)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(42599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Chip/Chip.js
var Chip = __webpack_require__(57277);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardContent/CardContent.js
var CardContent = __webpack_require__(73450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Snackbar/Snackbar.js
var Snackbar = __webpack_require__(85379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(2896);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/RadioButtonChecked.js
var RadioButtonChecked = __webpack_require__(61403);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/RadioButtonUnchecked.js
var RadioButtonUnchecked = __webpack_require__(3368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/DoneOutlined.js
var DoneOutlined = __webpack_require__(12689);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/Send.js
var Send = __webpack_require__(26127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/RefreshOutlined.js
var RefreshOutlined = __webpack_require__(90247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(44939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardMedia/CardMedia.js
var CardMedia = __webpack_require__(9790);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardActions/CardActions.js
var CardActions = __webpack_require__(79388);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ./src/plugins/FindTruman/context.ts
var context = __webpack_require__(87468);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/NoNftCard.tsx





const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        card: {
            borderRadius: '6px',
            ':not(:last-child)': {
                marginBottom: '8px'
            },
            display: 'flex',
            flexDirection: 'column'
        },
        content: {
            flex: 1
        },
        title: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#fff',
            textTransform: 'uppercase'
        }
    };
});
function NoNftCard(props) {
    const { conditions , sx  } = props;
    const { classes  } = useStyles();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const renderNftCard = (title, img, url, count, address)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
            item: true,
            xs: 6,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.card,
                variant: "outlined",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardMedia/* default */.Z, {
                        component: "img",
                        image: img
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                gutterBottom: true,
                                variant: "h5",
                                component: "div",
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                color: "textSecondary",
                                children: t('plugin_find_truman_buy_nft_tip', {
                                    count,
                                    name: title
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        sx: {
                            justifyContent: 'flex-end'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            onClick: (e)=>{
                                e.stopPropagation();
                            },
                            component: "a",
                            href: url,
                            variant: "contained",
                            target: "_blank",
                            size: "small",
                            children: t('plugin_find_truman_buy')
                        })
                    })
                ]
            }, address)
        }, title));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        justifyContent: "space-around",
        sx: {
            ...sx || {}
        },
        children: conditions.map((condition)=>renderNftCard(condition.name, condition.img, condition.url, condition.minAmount, condition.address)
        )
    }));
};

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/ResultCard.tsx
var ResultCard = __webpack_require__(95342);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(9228);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/OptionsCard.tsx










const useOptionsStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        progressOption: {
            transition: 'all .5s',
            padding: '12px 18px',
            borderRadius: '16px',
            '&:hover': {
                background: `rgba(28, 23, 26, ${theme.palette.mode === 'dark' ? '.75' : '.05'})`
            },
            '&:active': {
                background: `rgba(28, 23, 26, ${theme.palette.mode === 'dark' ? '.15' : '.15'})`
            },
            ':not(:last-child)': {
                marginBottom: '8px'
            }
        },
        blockChip: {
            width: '100%',
            marginBottom: 8,
            justifyContent: 'space-between',
            minHeight: '39px',
            height: 'fit-content',
            fontSize: '13px',
            padding: '8px',
            transition: 'all .3s'
        },
        blockChipSelected: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main
            }
        },
        checkIcon: {},
        horizontalScrollBar: {
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                height: '8px'
            },
            '::-webkit-scrollbar-thumb:horizontal': {
                backgroundColor: theme.palette.divider,
                borderRadius: '16px',
                border: `6px solid ${theme.palette.divider}`
            }
        },
        verticalScrollBar: {
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: '6px'
            },
            '::-webkit-scrollbar-thumb:vertical': {
                backgroundColor: theme.palette.divider,
                borderRadius: '16px',
                border: `6px solid ${theme.palette.divider}`
            }
        }
    };
});
function OptionsCard(props) {
    const { userStatus: userStatus1 , onSubmit  } = props;
    const [selected, setSelected] = (0,react.useState)(true);
    const [choice, setChoice] = (0,react.useState)(userStatus1 ? userStatus1.choice : -1);
    const [submitting, setSubmitting] = (0,react.useState)(false);
    const [error1, setError] = (0,react.useState)('');
    const [unmeetCondition, setUnmeetCondition] = (0,react.useState)([]);
    const [snackVisible, setSnackVisible] = (0,react.useState)(false);
    const { classes , cx  } = useOptionsStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const parentRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        setError('');
        setUnmeetCondition((userStatus1 === null || userStatus1 === void 0 ? void 0 : userStatus1.notMeetConditions) || []);
        userStatus1 && userStatus1.notMeetConditions.length > 0 && setError('insufficient-nft');
    }, [
        chainId,
        userStatus1
    ]);
    (0,react.useEffect)(()=>{
        setChoice(userStatus1 ? userStatus1.choice : -1);
        setSelected(userStatus1 ? userStatus1.choice !== -1 : true);
    }, [
        userStatus1
    ]);
    const renderOptions = (userStatus)=>{
        const showCount = !!userStatus.count;
        const total1 = userStatus.count ? userStatus.count.reduce((total, e)=>{
            return {
                choice: -1,
                value: total.value + e.value
            };
        }).value : 0;
        return userStatus.options.map((option, index)=>{
            var ref;
            const count = userStatus.count ? ((ref = userStatus.count.find((e)=>e.choice === index
            )) === null || ref === void 0 ? void 0 : ref.value) || 0 : 0;
            const percent = (total1 > 0 ? count * 100 / total1 : 0).toFixed(2);
            const isSelected = choice === index;
            return userStatus.count ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                sx: choice !== index ? {
                    cursor: 'pointer'
                } : {},
                className: classes.progressOption,
                variant: "outlined",
                onClick: !submitting && !selected && !error1 && userStatus.status !== 0 ? ()=>{
                    setChoice(index);
                } : undefined,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            rowGap: '8px',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            marginBottom: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'top'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                        sx: {
                                            marginRight: '8px'
                                        },
                                        size: "small",
                                        label: `${count} ${t(count > 1 ? 'plugin_find_truman_votes' : 'plugin_find_truman_vote')}`
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        color: "textPrimary",
                                        sx: {
                                            fontSize: '13px',
                                            lineHeight: '24px'
                                        },
                                        children: option
                                    })
                                ]
                            }),
                            isSelected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButtonChecked/* default */.Z, {}),
                                size: "small",
                                color: "primary",
                                label: t('plugin_find_truman_selected')
                            }) : selected ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                sx: {
                                    cursor: 'pointer'
                                },
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButtonUnchecked/* default */.Z, {}),
                                size: "small",
                                color: "default",
                                label: t('plugin_find_truman_unselect')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    flex: 1
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard/* BorderLinearProgress */.C, {
                                    value: Number(percent),
                                    variant: "determinate"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    width: 54
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: [
                                        percent,
                                        "%"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }, option) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    position: 'relative'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                    id: "submit",
                    className: cx(classes.blockChip, isSelected && classes.blockChipSelected),
                    label: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-all'
                        },
                        children: option
                    }),
                    onClick: !selected && !error1 && userStatus.status !== 0 ? ()=>{
                        setChoice(index);
                    } : undefined,
                    disabled: submitting,
                    deleteIcon: isSelected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DoneOutlined/* default */.Z, {}) : undefined,
                    onDelete: isSelected ? ()=>{} : undefined,
                    color: showCount ? 'default' : isSelected ? 'primary' : 'default',
                    variant: showCount ? 'outlined' : isSelected ? 'filled' : 'outlined'
                })
            }, index);
        });
    };
    const handleSubmit = (0,react.useCallback)(async ()=>{
        setSubmitting(true);
        try {
            await onSubmit(choice);
        } catch (error) {
            throw error;
        } finally{
            setSubmitting(false);
        }
    }, [
        choice
    ]);
    const renderSubmitButton = (userStatus)=>{
        const isClosed = userStatus.status === 0;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            style: {
                textAlign: 'right',
                marginTop: '8px',
                paddingBottom: '8px'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                color: selected ? 'success' : 'primary',
                variant: "contained",
                disabled: selected || isClosed || choice === -1,
                init: t(selected ? 'plugin_find_truman_submitted' : isClosed ? 'plugin_find_truman_vote_finish' : 'plugin_find_truman_submit'),
                waiting: t('plugin_find_truman_submitting'),
                failed: t('plugin_find_truman_submit_failed'),
                complete: t('plugin_find_truman_submitted'),
                executor: handleSubmit,
                failedOnClick: "use executor",
                startIcon: isClosed || selected ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(Send/* default */.Z, {}),
                completeIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoneOutlined/* default */.Z, {}),
                failIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RefreshOutlined/* default */.Z, {})
            })
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
        ref: parentRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.Z, {
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                },
                open: snackVisible,
                onClose: ()=>setSnackVisible(false)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                    onClose: ()=>setSnackVisible(false)
                    ,
                    variant: "filled",
                    severity: "error",
                    sx: {
                        width: '100%'
                    },
                    children: t('plugin_find_truman_submit_failed')
                })
            }),
            userStatus1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: userStatus1.question
                    }),
                    renderOptions(userStatus1),
                    !error1 && renderSubmitButton(userStatus1),
                    unmeetCondition.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                                severity: "info",
                                sx: {
                                    mb: 1
                                },
                                children: t('plugin_find_truman_insufficient_nft')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NoNftCard, {
                                conditions: unmeetCondition
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 95342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ BorderLinearProgress),
/* harmony export */   "Z": () => (/* binding */ ResultCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40299);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61212);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74810);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73450);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42599);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95273);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57277);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87170);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90886);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19965);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87468);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14767);







const BorderLinearProgress = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(({ theme  })=>({
        height: 10,
        borderRadius: 5,
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"].colorPrimary */ .Z.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
        },
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"].bar */ .Z.bar}`]: {
            borderRadius: 5
        }
    })
);
const useResultStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        answerChip: {
            backgroundColor: theme.palette.mode === 'light' ? '#2e7d32' : '#66bb6a',
            color: theme.palette.mode === 'light' ? '#fff' : '#EFF3F4'
        }
    };
});
function ResultCard(props) {
    const { type , userStatus , result  } = props;
    const { classes  } = useResultStyles();
    const [choice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(userStatus ? userStatus.choice : -1);
    const { t  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__/* .FindTrumanContext */ .c);
    const total1 = (result === null || result === void 0 ? void 0 : result.count) && result.count.length > 0 ? result.count.reduce((total, e)=>{
        return {
            choice: -1,
            value: total.value + e.value
        };
    }).value : 1;
    const answer = result ? type === _types__WEBPACK_IMPORTED_MODULE_1__/* .PostType.PuzzleResult */ .hQ.PuzzleResult ? result.correct : result.result : -1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [
            answer === -1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                severity: "info",
                children: t(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .PostType.PuzzleResult */ .hQ.PuzzleResult ? 'plugin_find_truman_puzzle_underway' : 'plugin_find_truman_voting_underway')
            }),
            answer !== -1 && result && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: result.question
                    }),
                    result.options.map((option, index)=>{
                        var ref;
                        const value = ((ref = result.count.find((e)=>e.choice === index
                        )) === null || ref === void 0 ? void 0 : ref.value) || 0;
                        const percent = (total1 > 0 ? value * 100 / total1 : 0).toFixed(2);
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            variant: "outlined",
                            sx: {
                                padding: '12px 18px',
                                borderRadius: '16px',
                                marginBottom: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    sx: {
                                        display: 'flex',
                                        rowGap: '8px',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        marginBottom: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'top'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    sx: {
                                                        marginRight: '8px'
                                                    },
                                                    size: "small",
                                                    label: `${value} ${t(value > 1 ? 'plugin_find_truman_votes' : 'plugin_find_truman_vote')}`
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    color: "textPrimary",
                                                    sx: {
                                                        fontSize: '13px',
                                                        lineHeight: '24px'
                                                    },
                                                    children: option
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            direction: "row",
                                            spacing: 1,
                                            children: [
                                                choice === index && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                                                    size: "small",
                                                    color: "primary",
                                                    label: t('plugin_find_truman_selected')
                                                }),
                                                answer === index && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                                                    className: classes.answerChip,
                                                    color: "success",
                                                    size: "small",
                                                    label: t(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .PostType.PuzzleResult */ .hQ.PuzzleResult ? 'plugin_find_truman_answer' : 'plugin_find_truman_result')
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        columnGap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            sx: {
                                                flex: 1
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BorderLinearProgress, {
                                                value: Number(percent),
                                                variant: "determinate"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            sx: {
                                                width: 54
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: [
                                                    percent,
                                                    "%"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, option));
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 84327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StageCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95273);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73450);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44939);
/* harmony import */ var _ResultCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87468);





function StageCard(props) {
    const { userStoryStatus  } = props;
    const { t  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__/* .FindTrumanContext */ .c);
    const renderProgress = (total, success, color)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            sx: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px'
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    sx: {
                        width: '100%',
                        mr: 1
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ResultCard__WEBPACK_IMPORTED_MODULE_1__/* .BorderLinearProgress */ .C, {
                        color: color,
                        value: total > 0 ? success * 100 / total : 0,
                        variant: "determinate"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    sx: {
                        display: 'flex',
                        justifyContent: 'flex-end'
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        variant: "body2",
                        color: "text.secondary",
                        children: [
                            success,
                            "/",
                            total
                        ]
                    })
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: userStoryStatus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                container: true,
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                        item: true,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            sx: {
                                padding: '0 24px'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "h6",
                                    color: "text.primary",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_dialog_critical')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        t('plugin_find_truman_puzzle_rate'),
                                        userStoryStatus.critical.total > 0 ? (userStoryStatus.critical.correct * 100 / userStoryStatus.critical.total).toFixed(2) : '0.00',
                                        "%"
                                    ]
                                }),
                                renderProgress(userStoryStatus.critical.total, userStoryStatus.critical.correct, 'success'),
                                userStoryStatus.critical.waiting === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.critical.waiting,
                                        t('plugin_find_truman_puzzle_to_be_revealed')
                                    ]
                                }),
                                userStoryStatus.critical.waiting > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.critical.waiting,
                                        t('plugin_find_truman_polls_to_be_revealed')
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                        item: true,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            sx: {
                                padding: '0 24px'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "h6",
                                    color: "text.primary",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_dialog_noncritical')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        t('plugin_find_truman_voting_rate'),
                                        userStoryStatus.nonCritical.total > 0 ? (userStoryStatus.nonCritical.correct * 100 / userStoryStatus.nonCritical.total).toFixed(2) : '0.00',
                                        "%"
                                    ]
                                }),
                                renderProgress(userStoryStatus.nonCritical.total, userStoryStatus.nonCritical.correct, 'secondary'),
                                userStoryStatus.nonCritical.waiting === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.nonCritical.waiting,
                                        t('plugin_find_truman_poll_to_be_revealed')
                                    ]
                                }),
                                userStoryStatus.nonCritical.waiting > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.nonCritical.waiting,
                                        t('plugin_find_truman_polls_to_be_revealed')
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 92997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useConst)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76108);
/* harmony import */ var _Worker_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87958);




function renderString(template, data) {
    var ref;
    return template.replace(/{{([^}]+)}}/g, (match, p1)=>{
        var ref1;
        return (ref = (ref1 = data[p1]) === null || ref1 === void 0 ? void 0 : ref1.toString()) !== null && ref !== void 0 ? ref : match;
    });
}
function useConst() {
    const { i18n  } = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .useI18N */ .M1)();
    const [consts, setConsts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!_constants__WEBPACK_IMPORTED_MODULE_3__/* .FindTruman_Const.initialized */ .Oh.initialized) {
            _constants__WEBPACK_IMPORTED_MODULE_3__/* .FindTruman_Const.init */ .Oh.init((resolve, reject)=>{
                (0,_Worker_apis__WEBPACK_IMPORTED_MODULE_1__/* .fetchConst */ .oM)(i18n.language).then(resolve).catch(reject);
            });
        }
        _constants__WEBPACK_IMPORTED_MODULE_3__/* .FindTruman_Const.then */ .Oh.then((res)=>{
            setConsts(res);
        });
    }, []);
    const t = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((id, options = {})=>{
        var ref;
        var ref2;
        return renderString((ref2 = consts === null || consts === void 0 ? void 0 : (ref = consts.locales) === null || ref === void 0 ? void 0 : ref[id]) !== null && ref2 !== void 0 ? ref2 : '', options);
    }, [
        consts
    ]);
    return {
        consts,
        t
    };
}


/***/ }),

/***/ 69297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oM": () => (/* binding */ fetchConst),
/* harmony export */   "dr": () => (/* binding */ fetchStoryInfo),
/* harmony export */   "cz": () => (/* binding */ fetchUserStoryStatus),
/* harmony export */   "JJ": () => (/* binding */ fetchUserPuzzleStatus),
/* harmony export */   "K1": () => (/* binding */ fetchUserPollStatus),
/* harmony export */   "He": () => (/* binding */ fetchPuzzleResult),
/* harmony export */   "mf": () => (/* binding */ fetchPollResult),
/* harmony export */   "yR": () => (/* binding */ submitPuzzle),
/* harmony export */   "LP": () => (/* binding */ submitPoll),
/* harmony export */   "du": () => (/* binding */ fetchUserParticipatedStoryStatus),
/* harmony export */   "aE": () => (/* binding */ fetchClue),
/* harmony export */   "oJ": () => (/* binding */ fetchUserPoap),
/* harmony export */   "j9": () => (/* binding */ fetchMysteryBoxInfo),
/* harmony export */   "UN": () => (/* binding */ openMysteryBox),
/* harmony export */   "kc": () => (/* binding */ fetchUserPartsInfo),
/* harmony export */   "PN": () => (/* binding */ fetchExchangeStatus),
/* harmony export */   "pU": () => (/* binding */ fetchAllPollsOrPuzzles),
/* harmony export */   "v_": () => (/* binding */ exchangeFtgWhitelist)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8267);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);



const PREFIX = 'https://findtruman.io/api';
async function request(url, options) {
    const response = await fetch(urlcat__WEBPACK_IMPORTED_MODULE_0___default()(PREFIX, url), {
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        ...options
    });
    const { data , code , msg  } = await response.json();
    if (code !== 0) {
        throw new _types__WEBPACK_IMPORTED_MODULE_2__/* .FindTrumanRemoteError */ .$T(msg, code, data);
    }
    return data;
}
function fetchConst(lang) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/consts', {
        l: lang
    }));
}
function fetchStoryInfo(storyId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/stories/:storyId', {
        storyId
    }));
}
function fetchUserStoryStatus(storyId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/stories/:storyId/status', {
        storyId,
        uaddr
    }));
}
function fetchUserPuzzleStatus(puzzleId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/puzzles/:puzzleId/status', {
        puzzleId,
        uaddr
    }));
}
function fetchUserPollStatus(pollId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls/:pollId/status', {
        pollId,
        uaddr
    }));
}
function fetchPuzzleResult(puzzleId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/puzzles/:puzzleId/result', {
        puzzleId
    }));
}
function fetchPollResult(pollId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls/:pollId/result', {
        pollId
    }));
}
async function submitPuzzle(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/puzzles/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
async function submitPoll(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/polls/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
function fetchUserParticipatedStoryStatus(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/participated_story_status', {
        uaddr
    }));
}
function fetchClue(clueId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/clues/:clueId', {
        clueId,
        uaddr
    }));
}
function fetchUserPoap(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/ftpoap', {
        uaddr
    }));
}
function fetchMysteryBoxInfo(id) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/mystery-boxes/:id', {
        id
    }));
}
async function openMysteryBox(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/mystery-boxes/_/open', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
function fetchUserPartsInfo(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/parts_with_additional', {
        uaddr
    }));
}
function fetchExchangeStatus(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_status', {
        uaddr
    }));
}
function fetchAllPollsOrPuzzles(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls_or_puzzles', {
        uaddr
    }));
}
function exchangeFtgWhitelist() {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_ftg_airdrop_whitelist', {}), {
        method: 'POST',
        body: JSON.stringify({})
    });
}


/***/ }),

/***/ 87468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ FindTrumanContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);

const FindTrumanContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);


/***/ }),

/***/ 7294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hQ": () => (/* binding */ PostType),
/* harmony export */   "Ym": () => (/* binding */ ClueConditionType),
/* harmony export */   "pX": () => (/* binding */ PartType),
/* harmony export */   "$T": () => (/* binding */ FindTrumanRemoteError)
/* harmony export */ });
var PostType;
(function(PostType) {
    PostType["Status"] = 'result';
    PostType["Puzzle"] = 'puzzle';
    PostType["Poll"] = 'poll';
    PostType["PuzzleResult"] = 'puzzle_result';
    PostType["PollResult"] = 'poll_result';
    PostType["Encryption"] = 'encryption';
})(PostType || (PostType = {}));
var ClueConditionType;
(function(ClueConditionType) {
    ClueConditionType["And"] = 'and';
    ClueConditionType["Or"] = 'or';
    ClueConditionType["Erc721"] = 'hold-erc721';
    ClueConditionType["Erc20"] = 'hold-erc20';
})(ClueConditionType || (ClueConditionType = {}));
var PartType;
(function(PartType) {
    PartType[PartType["Head"] = 1] = "Head";
    PartType[PartType["Skin"] = 2] = "Skin";
    PartType[PartType["Clothes"] = 3] = "Clothes";
    PartType[PartType["Mask"] = 4] = "Mask";
    PartType[PartType["Background"] = 5] = "Background";
})(PartType || (PartType = {}));
class FindTrumanRemoteError extends Error {
    constructor(message, code, data){
        super(message);
        this.code = code;
        this.data = data;
    }
}


/***/ }),

/***/ 97943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useClaimCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49861);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13601);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36130);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15516);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52646);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25071);
/* harmony import */ var _useITO_Contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82049);
/* harmony import */ var _Worker_apis_checkAvailability__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25754);





function useClaimCallback(pids, contractAddress) {
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .useAccount */ .m)();
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .useChainId */ .xx)();
    const { ITO_CONTRACT_ADDRESS  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .useITOConstants */ .mg)();
    const { contract: ITO_Contract  } = (0,_useITO_Contract__WEBPACK_IMPORTED_MODULE_2__/* .useITO_Contract */ .k)(contractAddress);
    const [claimState, setClaimState] = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .useTransactionState */ .p)();
    const isV1 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .isSameAddress */ .Wr)(ITO_CONTRACT_ADDRESS !== null && ITO_CONTRACT_ADDRESS !== void 0 ? ITO_CONTRACT_ADDRESS : '', contractAddress);
    const claimCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!ITO_Contract || !contractAddress || pids.length === 0) {
            setClaimState({
                type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setClaimState({
            type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
        });
        // check if already claimed
        try {
            const availabilityList = await Promise.all(pids.map((pid)=>(0,_Worker_apis_checkAvailability__WEBPACK_IMPORTED_MODULE_3__/* .checkAvailability */ .g)(pid, account, contractAddress, chainId, isV1)
            ));
            const isClaimed = availabilityList.some((availability)=>availability.claimed
            );
            if (isClaimed) {
                setClaimState({
                    type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED,
                    error: new Error('Already Claimed')
                });
                return;
            }
        } catch  {
            setClaimState({
                type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED,
                error: new Error('Failed to check availability.')
            });
            return;
        }
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await ITO_Contract.methods.claim(pids).estimateGas({
                from: account
            }).catch((error)=>{
                setClaimState({
                    type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            ITO_Contract.methods.claim(pids).send(config).on(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionEventType.CONFIRMATION */ .iE.CONFIRMATION, (no, receipt)=>{
                setClaimState({
                    type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionEventType.ERROR */ .iE.ERROR, (error)=>{
                setClaimState({
                    type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        chainId,
        ITO_Contract,
        json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()(pids),
        isV1
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setClaimState({
            type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
        });
    }, []);
    return [
        claimState,
        claimCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 82049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useITO_Contract)
/* harmony export */ });
/* harmony import */ var _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34517);
/* harmony import */ var _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47744);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36130);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47683);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52646);



function useITO_Contract(contractAddress) {
    const { ITO_CONTRACT_ADDRESS , ITO2_CONTRACT_ADDRESS  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .useITOConstants */ .mg)();
    const ITO_CONTRACT = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .useContract */ .cq)(ITO_CONTRACT_ADDRESS, _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__);
    const ITO2_CONTRACT = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .useContract */ .cq)(ITO2_CONTRACT_ADDRESS, _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__);
    return contractAddress && (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .Wr)(contractAddress, ITO_CONTRACT_ADDRESS) ? {
        contract: ITO_CONTRACT,
        version: 1
    } : {
        contract: ITO2_CONTRACT,
        version: 2
    };
}


/***/ }),

/***/ 25754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ checkAvailability)
/* harmony export */ });
/* harmony import */ var _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34517);
/* harmony import */ var _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47744);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58528);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8267);




const interFaceV1 = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__/* .Interface */ .vU(_masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__);
const interFaceV2 = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__/* .Interface */ .vU(_masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__);
// ITO Contract readonly method, read it no matter on whatever chains you are.
async function checkAvailability(pid, from, to, chainId, isV1 = false) {
    const callData = (isV1 ? interFaceV1 : interFaceV2).encodeFunctionData('check_availability', [
        pid
    ]);
    const data = await _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Ethereum.call */ .ZP.Ethereum.call({
        to,
        from,
        data: callData
    }, {
        chainId
    });
    return decodeResult(data, isV1);
}
function decodeResult(data, isV1) {
    const results = (isV1 ? interFaceV1 : interFaceV2).decodeFunctionResult('check_availability', data);
    return {
        exchange_addrs: results[0],
        remaining: +parseHexToInt(results[1]),
        started: results[2],
        expired: results[3],
        destructed: results[4],
        unlock_time: parseHexToInt(results[5]),
        swapped: parseHexToInt(results[6]),
        exchanged_tokens: parse(results[7]).map(parseHexToInt),
        ...isV1 ? {} : {
            claimed: results[8],
            start_time: parseHexToInt(results[9]),
            end_time: parseHexToInt(results[10]),
            qualification_addr: results[11]
        }
    };
}
function parse(input) {
    return JSON.parse(JSON.stringify(input));
}
function parseHexToInt(input) {
    return Number.parseInt(parse(input).hex, 16).toString();
}


/***/ }),

/***/ 92425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PluginITO_RPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74038);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94531);


if (false) {}
const PluginITO_Messages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV);
const PluginITO_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(187), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(3167)]).then(__webpack_require__.bind(__webpack_require__, 25123))
, PluginITO_Messages.rpc);


/***/ }),

/***/ 58505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ PluginPetMessages),
/* harmony export */   "k": () => (/* binding */ PluginPetRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50942);



if (false) {}
const PluginPetMessages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PetsPluginID */ .Dt, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const PluginPetRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PetsPluginID */ .Dt, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(5629)]).then(__webpack_require__.bind(__webpack_require__, 92857))
, PluginPetMessages.events.rpc);


/***/ }),

/***/ 35615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ TraderDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94531);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13601);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55535);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32364);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21949);
/* harmony import */ var _trader_useAllProviderTradeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28727);
/* harmony import */ var _trader_useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17508);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47545);
/* harmony import */ var _Trader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63481);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76108);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14767);
/* harmony import */ var _components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56347);
/* harmony import */ var _components_shared_NetworkTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5913);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70520);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87470);

















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_10__/* .makeStyles */ .ZL)()((theme)=>({
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        abstractTabWrapper: {
            width: '100%',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2)
        },
        tab: {
            height: 36,
            minHeight: 36
        },
        tabPaper: {
            backgroundColor: 'inherit'
        },
        tabs: {
            width: 535,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        content: {
            paddingTop: 0,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tradeRoot: {
            width: 535,
            margin: 'auto'
        }
    })
);
function TraderDialog({ open , onClose  }) {
    var ref, ref1;
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .isDashboardPage */ .K2)();
    const pluginID = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .usePluginIDContext */ .Zn)();
    const traderDefinition = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .useActivatedPlugin */ .Rc)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.Trader */ .je.Trader, 'any');
    var ref2;
    const chainIdList = (ref2 = (ref = traderDefinition === null || traderDefinition === void 0 ? void 0 : traderDefinition.enableRequirement.web3) === null || ref === void 0 ? void 0 : (ref1 = ref[pluginID]) === null || ref1 === void 0 ? void 0 : ref1.supportedChainIds) !== null && ref2 !== void 0 ? ref2 : [];
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const currentChainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .useChainId */ .xx)();
    const chainIdValid = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .useChainIdValid */ .as)();
    const [traderProps, setTraderProps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [chainId, setChainId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentChainId);
    const { open: remoteOpen , closeDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_7__/* .PluginTraderMessages.swapDialogUpdated */ .A.swapDialogUpdated, (ev)=>{
        if (ev === null || ev === void 0 ? void 0 : ev.traderProps) setTraderProps(ev.traderProps);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!chainIdValid) closeDialog();
    }, [
        chainIdValid,
        closeDialog
    ]);
    (0,react_use__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(()=>{
        if (currentChainId) {
            setChainId(currentChainId);
        }
    }, [
        currentChainId
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_trader_useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_6__/* .TargetChainIdContext.Provider */ .Z.Provider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_trader_useAllProviderTradeContext__WEBPACK_IMPORTED_MODULE_5__/* .AllProviderTradeContext.Provider */ .TX.Provider, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__/* .InjectedDialog */ .F, {
                open: open || remoteOpen,
                onClose: ()=>{
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                    setTraderProps(undefined);
                    closeDialog();
                },
                title: t('plugin_trader_swap'),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: classes.content,
                    children: [
                        !isDashboard ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.walletStatusBox,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_11__/* .WalletStatusBox */ .C, {})
                        }) : null,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.abstractTabWrapper,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_NetworkTab__WEBPACK_IMPORTED_MODULE_12__/* .NetworkTab */ .L, {
                                chainId: chainId,
                                setChainId: setChainId,
                                classes: classes,
                                chains: chainIdList
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Trader__WEBPACK_IMPORTED_MODULE_8__/* .Trader */ .A, {
                            ...traderProps,
                            chainId: chainId,
                            classes: {
                                root: classes.tradeRoot
                            }
                        })
                    ]
                })
            })
        })
    }));
}


/***/ }),

/***/ 18254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName)
/* harmony export */ });
/* unused harmony exports resolveCurrencyName, resolveTradeProviderLink, resolveTradePairLink, resolveUniswapWarningLevel, resolveUniswapWarningLevelColor, resolveZrxTradePoolName */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46347);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85123);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14381);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22487);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11585);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_4__);






function resolveCurrencyName(currency) {
    return [
        currency.name,
        currency.symbol ? `"${currency.symbol}"` : '',
        currency.description ? `(${currency.description})` : '', 
    ].join(' ');
}
const resolveDataProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'CoinGecko',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'CoinMarketCap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'Uniswap Info'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveDataProviderLink = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'https://www.coingecko.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'https://coinmarketcap.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'https://info.uniswap.org/'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveTradeProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2]: 'Uniswap V2',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3]: 'Uniswap V3',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX]: '0x',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP]: 'SushiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP]: 'SashimiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER]: 'Balancer',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP]: 'QuickSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP]: 'PancakeSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO]: 'DODO',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BANCOR */ .z4.BANCOR]: 'Bancor',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.OPENOCEAN */ .z4.OPENOCEAN]: 'OpenOcean',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.TRADERJOE */ .z4.TRADERJOE]: 'TraderJoe',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANGOLIN */ .z4.PANGOLIN]: 'PangolinDex',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.TRISOLARIS */ .z4.TRISOLARIS]: 'Trisolaris',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.WANNASWAP */ .z4.WANNASWAP]: 'WannaSwap'
}, (tradeProvider)=>{
    throw new Error(`Unknown provider type: ${tradeProvider}`);
});
function resolveTradeProviderLink(tradeProvider, networkType) {
    switch(tradeProvider){
        case TradeProvider.UNISWAP_V2:
            return 'https://uniswap.org/';
        case TradeProvider.UNISWAP_V3:
            return 'https://uniswap.org/';
        case TradeProvider.ZRX:
            switch(networkType){
                case NetworkType.Ethereum:
                    return 'https://api.0x.org/';
                case NetworkType.Binance:
                    return 'https://bsc.api.0x.org/';
                case NetworkType.Polygon:
                    return 'https://polygon.api.0x.org/';
                case NetworkType.Arbitrum:
                    return 'https://aribitrum.api.0x.org/';
                case NetworkType.xDai:
                    return 'https://xdai.api.0x.org/';
                case NetworkType.Celo:
                    return 'https://celo.api.0x.org/';
                case NetworkType.Fantom:
                    return 'https://fantom.api.0x.org/';
                case NetworkType.Avalanche:
                    return 'https://avalanche.api.0x.org/';
                case NetworkType.Aurora:
                    return 'https://aurora.api.0x.org/';
                case NetworkType.Boba:
                case NetworkType.Fuse:
                case NetworkType.Metis:
                case NetworkType.Avalanche:
                case NetworkType.Optimistic:
                    console.error('To be implement network: ', networkType);
                    return '';
                default:
                    safeUnreachable(networkType);
                    return '';
            }
        case TradeProvider.SUSHISWAP:
            return 'https://sushiswapclassic.org/';
        case TradeProvider.SASHIMISWAP:
            return 'https://sashimi.cool/';
        case TradeProvider.BALANCER:
            return 'https://balancer.exchange/';
        case TradeProvider.QUICKSWAP:
            return 'https://quickswap.exchange/';
        case TradeProvider.PANCAKESWAP:
            return 'https://exchange.pancakeswap.finance/#/swap';
        case TradeProvider.DODO:
            return 'https://app.dodoex.io';
        case TradeProvider.BANCOR:
            return 'https://app.bancor.network/eth/swap';
        case TradeProvider.OPENOCEAN:
            return 'https://openocean.finance/classic';
        case TradeProvider.TRADERJOE:
            return 'https://traderjoexyz.com/#/trade';
        case TradeProvider.PANGOLIN:
            return 'https://app.pangolin.exchange/#/swap';
        case TradeProvider.TRISOLARIS:
            return 'https://www.trisolaris.io/#/swap';
        case TradeProvider.WANNASWAP:
            return 'https://wannaswap.finance/exchange/swap';
        default:
            unreachable(tradeProvider);
    }
}
function resolveTradePairLink(tradeProvider, address, networkType) {
    switch(tradeProvider){
        case TradeProvider.UNISWAP_V2:
            return `https://v2.info.uniswap.org/pair/${address}`;
        case TradeProvider.UNISWAP_V3:
            return `https://info.uniswap.org/pair/${address}`;
        case TradeProvider.ZRX:
            return '';
        case TradeProvider.DODO:
            {
                if (!networkNames[networkType]) {
                    console.error('Unsupported network: ', networkType);
                    return '';
                }
                return urlcat('https://app.dodoex.io/exchange/:address', {
                    address,
                    network: networkNames[networkType],
                    forced: true
                });
            }
        case TradeProvider.SUSHISWAP:
            switch(networkType){
                case NetworkType.Ethereum:
                    return `https://analytics.sushi.com/pairs/${address}`;
                case NetworkType.Binance:
                    return `https://analytics-bsc.sushi.com/pairs/${address}`;
                case NetworkType.Polygon:
                    return `https://analytics-polygon.sushi.com/pairs/${address}`;
                case NetworkType.Arbitrum:
                    return `https://analytics-aribtrum.sushi.com/pairs/${address}`;
                case NetworkType.xDai:
                    return `https://analytics-xdai.sushi.com/pairs/${address}`;
                case NetworkType.Celo:
                    return `https://analytics-celo.sushi.com/pairs/${address}`;
                case NetworkType.Fantom:
                    return `https://analytics-ftm.sushi.com/pairs/${address}`;
                case NetworkType.Avalanche:
                    return `https://analytics-avx.sushi.com/pairs/${address}`;
                case NetworkType.Aurora:
                    return `https://analytics-aurora.sushi.com/pairs/${address}`;
                case NetworkType.Boba:
                case NetworkType.Fuse:
                case NetworkType.Metis:
                case NetworkType.Optimistic:
                    console.error('To be implement network: ', networkType);
                    return '';
                default:
                    safeUnreachable(networkType);
                    return '';
            }
        case TradeProvider.SASHIMISWAP:
            return `https://info.sashimi.cool/pair/${address}`;
        case TradeProvider.BALANCER:
            return `https://pools.balancer.exchange/#/pool/${address}/`;
        case TradeProvider.QUICKSWAP:
            return `https://info.quickswap.exchange/pair/${address}`;
        case TradeProvider.PANCAKESWAP:
            return `https://pancakeswap.info/pool/${address}`;
        case TradeProvider.BANCOR:
            // TODO - Bancor analytics should be available with V3
            return '';
        case TradeProvider.OPENOCEAN:
            // TODO - OpenOcean
            return '';
        case TradeProvider.TRADERJOE:
            return `https://analytics.traderjoexyz.com/pairs/${address}`;
        case TradeProvider.PANGOLIN:
            return `https://info.pangolin.exchange/pair/${address}`;
        case TradeProvider.TRISOLARIS:
            // TODO - add Trisolaris Analytics
            return '';
        case TradeProvider.WANNASWAP:
            // TODO - add WannaSwap analytics
            return '';
        default:
            unreachable(tradeProvider);
    }
}
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}y`;
    if (days >= 30) return `${Math.floor(days / 30)}m`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    return `${days}d`;
}
function resolveUniswapWarningLevel(priceImpact) {
    const priceImpact_ = priceImpact.multipliedBy(BIPS_BASE);
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_NON_EXPERT_BLOCKED)) return WarningLevel.BLOCKED;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN)) return WarningLevel.CONFIRMATION_REQUIRED;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_HIGH)) return WarningLevel.HIGH;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_MEDIUM)) return WarningLevel.MEDIUM;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_LOW)) return WarningLevel.LOW;
    return WarningLevel.LOW;
}
const resolveUniswapWarningLevelColor = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.LOW */ .Os.LOW]: 'inherit',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.MEDIUM */ .Os.MEDIUM]: '#f3841e',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.HIGH */ .Os.HIGH]: '#f3841e',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.CONFIRMATION_REQUIRED */ .Os.CONFIRMATION_REQUIRED]: '#ff6871',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.BLOCKED */ .Os.BLOCKED]: '#ff6871'
}, '#27ae60');
const resolveZrxTradePoolName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ZRX */ .Zy.ZRX]: '0x',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ACryptoS */ .Zy.ACryptoS]: 'ACryptoS',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ApeSwap */ .Zy.ApeSwap]: 'ApeSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BakerySwap */ .Zy.BakerySwap]: 'BakerySwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Balancer */ .Zy.Balancer]: 'Balancer',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BalancerV2 */ .Zy.BalancerV2]: 'Balancer V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Bancor */ .Zy.Bancor]: 'Bancor',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Belt */ .Zy.Belt]: 'Belt',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CafeSwap */ .Zy.CafeSwap]: 'CafeSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CheeseSwap */ .Zy.CheeseSwap]: 'CheeseSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ComethSwap */ .Zy.ComethSwap]: 'ComethSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Component */ .Zy.Component]: 'Component',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Cream */ .Zy.Cream]: 'CREAM',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CryptoCom */ .Zy.CryptoCom]: 'CryptoCom',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Curve */ .Zy.Curve]: 'Curve',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CurveV2 */ .Zy.CurveV2]: 'Curve V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dfyn */ .Zy.Dfyn]: 'Dfyn',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dodo */ .Zy.Dodo]: 'DODO',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.DodoV2 */ .Zy.DodoV2]: 'DODO V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Ellipsis */ .Zy.Ellipsis]: 'Ellipsis',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Eth2Dai */ .Zy.Eth2Dai]: 'Eth2Dai',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.FirebirdOneSwap */ .Zy.FirebirdOneSwap]: 'FirebirdOneSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.IronSwap */ .Zy.IronSwap]: 'IronSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JetSwap */ .Zy.JetSwap]: 'JetSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JulSwap */ .Zy.JulSwap]: 'JulSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Kyber */ .Zy.Kyber]: 'Kyber',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.KyberDMM */ .Zy.KyberDMM]: 'KyberDMM',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Lido */ .Zy.Lido]: 'Lido',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Linkswap */ .Zy.Linkswap]: 'Linkswap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.LiquidityProvider */ .Zy.LiquidityProvider]: 'LiquidityProvider',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MStable */ .Zy.MStable]: 'mStable',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MakerPsm */ .Zy.MakerPsm]: 'MakerPsm',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mesh */ .Zy.Mesh]: 'Mesh',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mooniswap */ .Zy.Mooniswap]: 'Mooniswap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiBridge */ .Zy.MultiBridge]: 'MultiBridge',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiHop */ .Zy.MultiHop]: 'MultiHop',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Native */ .Zy.Native]: 'Native',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Nerve */ .Zy.Nerve]: 'Nerve',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Oasis */ .Zy.Oasis]: 'Oasis',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwap */ .Zy.PancakeSwap]: 'PancakeSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwapV2 */ .Zy.PancakeSwapV2]: 'PancakeSwap V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.QuickSwap */ .Zy.QuickSwap]: 'QuickSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Saddle */ .Zy.Saddle]: 'Saddle',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Shell */ .Zy.Shell]: 'Shell',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Smoothy */ .Zy.Smoothy]: 'Smoothy',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SnowSwap */ .Zy.SnowSwap]: 'SnowSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SushiSwap */ .Zy.SushiSwap]: 'SushiSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Swerve */ .Zy.Swerve]: 'Swerve',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Uniswap */ .Zy.Uniswap]: 'Uniswap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV2 */ .Zy.UniswapV2]: 'Uniswap V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV3 */ .Zy.UniswapV3]: 'Uniswap V3',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.WaultSwap */ .Zy.WaultSwap]: 'WaultSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.xSigma */ .Zy.xSigma]: 'xSigma',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.TraderJoe */ .Zy.TraderJoe]: 'TraderJoe',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PangolinDex */ .Zy.PangolinDex]: 'PangolinDex',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Trisolaris */ .Zy.Trisolaris]: 'Trisolaris',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.WannaSwap */ .Zy.WannaSwap]: 'WannaSwap'
}, 'Unknown');


/***/ }),

/***/ 71651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57887);


if (false) {}
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);


/***/ }),

/***/ 23817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ ConnectWalletDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(29105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(9094);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(54575);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(32364);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(50266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(42599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(2974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(9228);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
;// CONCATENATED MODULE: ./src/resources/FlashIcon.tsx


const useStyles = (0,src/* makeStyles */.ZL)()((theme, props)=>({
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
const FlashSvg = ({ color =src/* MaskColorVar.redMain */.ZN.redMain  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
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
function FlashIcon({ color =src/* MaskColorVar.redMain */.ZN.redMain  }) {
    const { classes  } = useStyles({
        color
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.iconWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FlashSvg, {
            color: color
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.3_5f1f718baae1643018ff61bbe4484af0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(69961);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ConnectWalletDialog/ConnectionProgress.tsx










const ConnectionProgress_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
            backgroundColor: src/* MaskColorVar.errorBackground */.ZN.errorBackground,
            padding: theme.spacing(2, 0, 2, 1.5),
            borderRadius: 8
        },
        tipContentText: {
            color: src/* MaskColorVar.redMain */.ZN.redMain,
            fontSize: 12,
            marginLeft: 10
        },
        tipLink: {
            color: src/* MaskColorVar.redMain */.ZN.redMain,
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
    var ref, ref1;
    const { providerType , connection  } = props;
    const { value: connected , loading , error , retry  } = connection;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(ConnectionProgress_useStyles(), props);
    const providerDescriptor = (0,plugin_infra_src/* useProviderDescriptor */.fY)(providerType, plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    var _message;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                                icon: providerDescriptor === null || providerDescriptor === void 0 ? void 0 : providerDescriptor.icon
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
                                            t(connected ? 'plugin_wallet_connected_with' : 'plugin_wallet_connect_with'),
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
                                        children: ((ref = error.message) === null || ref === void 0 ? void 0 : ref.includes('Already processing eth_requestAccounts')) || ((ref1 = error.message) === null || ref1 === void 0 ? void 0 : ref1.includes("Request of type 'wallet_requestPermissions' already pending for origin")) ? t('plugin_wallet_metamask_error_already_request') : (_message = error.message) !== null && _message !== void 0 ? _message : 'Something went wrong.'
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
    }));
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ConnectWalletDialog/index.tsx













const ConnectWalletDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2.5)
        }
    })
);
function ConnectWalletDialog(props) {
    const classes = (0,src/* useStylesExtends */.Bc)(ConnectWalletDialog_useStyles(), props);
    const [providerType, setProviderType] = (0,react.useState)();
    const [networkType, setNetworkType] = (0,react.useState)();
    // #region remote controlled dialog
    const { open , setDialog: setConnectWalletDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setProviderType(ev.providerType);
        setNetworkType(ev.networkType);
    });
    // #endregion
    // #region walletconnect
    const { setDialog: setWalletConnectDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated);
    // #endregion
    const connectTo = (0,react.useCallback)(async ()=>{
        if (!networkType) throw new Error('Unknown network type.');
        if (!providerType) throw new Error('Unknown provider type.');
        // read the chain detailed from the built-in chain list
        const expectedChainId = (0,chainDetailed/* getChainIdFromNetworkType */.EP)(networkType);
        const chainDetailedCAIP = (0,chainDetailed/* getChainDetailedCAIP */.EX)(expectedChainId);
        if (!chainDetailedCAIP) throw new Error('Unknown network type.');
        // a short time loading makes the user fells better
        await (0,shared_base_src/* delay */.gw)(1000);
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
                            await (0,shared_base_src/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
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
        await (0,shared_base_src/* delay */.gw)(1000);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
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
    }));
}


/***/ }),

/***/ 69656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ GasSettingDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var src = __webpack_require__(39973);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(14767);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(32364);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(9094);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.25.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(87756);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(48981);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.61_10fe5b9cda37a48a2d94b5e38d45d618/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(9484);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.25.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(74221);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(32637);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(70520);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.11.6/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(34181);
// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(88143);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(29187);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/useGasSettingStyles.ts

const useGasSettingStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(91339);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/GasSetting1559.tsx

















const HIGH_FEE_WARNING_MULTIPLIER = 1.5;
const GasSetting1559 = /*#__PURE__*/ (0,react.memo)(({ gasLimit: gasLimit1 , minGasLimit =0 , gasOption: gasOption1 = types/* GasOption.Medium */.TP.Medium , onConfirm =noop/* default */.Z  })=>{
    const { classes  } = useGasSettingStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [selectedGasOption, setGasOption] = (0,react.useState)(gasOption1);
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.chainId);
    // #region Get suggest gas options data from meta swap api
    const { value: gasOptions , loading: getGasOptionsLoading  } = (0,useAsync/* default */.Z)(async ()=>{
        return messages/* WalletRPC.getEstimateGasFees */.V.getEstimateGasFees(chainId);
    }, [
        chainId
    ]);
    // #endregion
    // #region Gas options
    const options = (0,react.useMemo)(()=>{
        return [
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                gasOption: types/* GasOption.Low */.TP.Low,
                content: gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.low
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                gasOption: types/* GasOption.Medium */.TP.Medium,
                content: gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.medium
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                gasOption: types/* GasOption.High */.TP.High,
                content: gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.high
            }, 
        ];
    }, [
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
            gasLimit: new (bignumber_default())(gasLimit1 !== null && gasLimit1 !== void 0 ? gasLimit1 : 0).toString(),
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
        var ref, ref3;
        if (selectedGasOption === null) return;
        clearErrors([
            'maxPriorityFeePerGas',
            'maxFeePerGas'
        ]);
        var ref4, ref5;
        setValue('maxPriorityFeePerGas', (ref5 = new (bignumber_default())((ref4 = currentGasOption === null || currentGasOption === void 0 ? void 0 : (ref = currentGasOption.content) === null || ref === void 0 ? void 0 : ref.suggestedMaxPriorityFeePerGas) !== null && ref4 !== void 0 ? ref4 : 0).toString()) !== null && ref5 !== void 0 ? ref5 : '');
        var ref6, ref7;
        setValue('maxFeePerGas', (ref7 = new (bignumber_default())((ref6 = currentGasOption === null || currentGasOption === void 0 ? void 0 : (ref3 = currentGasOption.content) === null || ref3 === void 0 ? void 0 : ref3.suggestedMaxFeePerGas) !== null && ref6 !== void 0 ? ref6 : 0).toString()) !== null && ref7 !== void 0 ? ref7 : '');
    }, [
        currentGasOption,
        setValue,
        options
    ]);
    // #endregion
    const handleConfirm = (0,react.useCallback)((data)=>{
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm({
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
        var ref, ref9;
        if (getGasOptionsLoading) return undefined;
        var ref10;
        if ((0,base_src/* isLessThan */.FI)(maxPriorityFeePerGas, (ref10 = gasOptions === null || gasOptions === void 0 ? void 0 : (ref = gasOptions.low) === null || ref === void 0 ? void 0 : ref.suggestedMaxPriorityFeePerGas) !== null && ref10 !== void 0 ? ref10 : 0)) return t('wallet_transfer_error_max_priority_gas_fee_too_low');
        var ref11;
        if ((0,base_src/* isGreaterThan */.T1)(maxPriorityFeePerGas, (0,base_src/* multipliedBy */.$q)((ref11 = gasOptions === null || gasOptions === void 0 ? void 0 : (ref9 = gasOptions.high) === null || ref9 === void 0 ? void 0 : ref9.suggestedMaxPriorityFeePerGas) !== null && ref11 !== void 0 ? ref11 : 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_priority_gas_fee_too_high');
        return undefined;
    }, [
        maxPriorityFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    const maxFeeGasHelperText = (0,react.useMemo)(()=>{
        var ref;
        if (getGasOptionsLoading) return undefined;
        var ref12;
        if ((0,base_src/* isLessThan */.FI)(maxFeePerGas, (ref12 = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.estimatedBaseFee) !== null && ref12 !== void 0 ? ref12 : 0)) return t('wallet_transfer_error_max_fee_too_low');
        var ref13;
        if ((0,base_src/* isGreaterThan */.T1)(maxFeePerGas, (0,base_src/* multipliedBy */.$q)((ref13 = gasOptions === null || gasOptions === void 0 ? void 0 : (ref = gasOptions.high) === null || ref === void 0 ? void 0 : ref.suggestedMaxFeePerGas) !== null && ref13 !== void 0 ? ref13 : 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_fee_too_high');
        return undefined;
    }, [
        maxFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    var ref8, ref1, ref2;
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title , content , gasOption  }, index)=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                                    (0,base_src/* toFixed */.FH)(content === null || content === void 0 ? void 0 : content.suggestedMaxFeePerGas, 2),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "inherit",
                                        children: "Gwei"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)((ref8 = content === null || content === void 0 ? void 0 : content.suggestedMaxFeePerGas) !== null && ref8 !== void 0 ? ref8 : 0).times(nativeTokenPrice).times(21000).toPrecision(3)
                                })
                            })
                        ]
                    }, index));
                })
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
                            var ref, ref14;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setGasOption(null);
                                    field.onChange(e);
                                },
                                error: !!((ref = errors.gasLimit) === null || ref === void 0 ? void 0 : ref.message),
                                helperText: (ref14 = errors.gasLimit) === null || ref14 === void 0 ? void 0 : ref14.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            }));
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
                                    usd: (0,formatter/* formatGweiToEther */.Hh)((ref1 = Number(maxPriorityFeePerGas)) !== null && ref1 !== void 0 ? ref1 : 0).times(nativeTokenPrice).times(inputGasLimit || 1).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            var ref, ref15;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setGasOption(null);
                                    field.onChange(e);
                                },
                                error: !!((ref = errors.maxPriorityFeePerGas) === null || ref === void 0 ? void 0 : ref.message) || !!maxPriorFeeHelperText,
                                helperText: ((ref15 = errors.maxPriorityFeePerGas) === null || ref15 === void 0 ? void 0 : ref15.message) || maxPriorFeeHelperText,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            }));
                        },
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
                                    usd: (0,formatter/* formatGweiToEther */.Hh)((ref2 = Number(maxFeePerGas)) !== null && ref2 !== void 0 ? ref2 : 0).times(nativeTokenPrice).times(inputGasLimit || 1).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            var ref, ref16;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setGasOption(null);
                                    field.onChange(e);
                                },
                                error: !!((ref = errors.maxFeePerGas) === null || ref === void 0 ? void 0 : ref.message) || !!maxFeeGasHelperText,
                                helperText: ((ref16 = errors.maxFeePerGas) === null || ref16 === void 0 ? void 0 : ref16.message) || maxFeeGasHelperText,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            }));
                        },
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
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(83317);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/Prior1559GasSetting.tsx

















const Prior1559GasSetting = /*#__PURE__*/ (0,react.memo)(({ gasLimit: gasLimit1 , minGasLimit =0 , gasOption: gasOption1 = types/* GasOption.Medium */.TP.Medium , onConfirm =noop/* default */.Z  })=>{
    const { classes  } = useGasSettingStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [selectedGasOption, setGasOption] = (0,react.useState)(gasOption1);
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.chainId);
    // #region Get gas options from debank
    const { value: gasOptions , loading: getGasOptionsLoading  } = (0,useAsync/* default */.Z)(async ()=>{
        const response = await messages/* WalletRPC.getGasPriceDictFromDeBank */.V.getGasPriceDictFromDeBank(chainId);
        if (!response) return {
            slow: 0,
            standard: 0,
            fast: 0
        };
        return {
            slow: response.data.slow.price,
            standard: response.data.normal.price,
            fast: response.data.fast.price
        };
    }, [
        chainId
    ]);
    var ref4, ref1, ref2;
    // #endregion
    const options = (0,react.useMemo)(()=>{
        return [
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                gasOption: types/* GasOption.Low */.TP.Low,
                gasPrice: (ref4 = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.slow) !== null && ref4 !== void 0 ? ref4 : 0
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                gasOption: types/* GasOption.Medium */.TP.Medium,
                gasPrice: (ref1 = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.standard) !== null && ref1 !== void 0 ? ref1 : 0
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                gasOption: types/* GasOption.High */.TP.High,
                gasPrice: (ref2 = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.fast) !== null && ref2 !== void 0 ? ref2 : 0
            }, 
        ];
    }, [
        gasOptions
    ]);
    const currentGasOption = options.find((opt)=>opt.gasOption === selectedGasOption
    );
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
            gasLimit: new (bignumber_default())(gasLimit1 !== null && gasLimit1 !== void 0 ? gasLimit1 : 0).toString(),
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
        if (currentGasOption) {
            setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)(currentGasOption.gasPrice).toString());
        }
    }, [
        currentGasOption,
        setValue
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
                                    (0,formatter/* formatWeiToGwei */.f1)(gasPrice !== null && gasPrice !== void 0 ? gasPrice : 0).toString(),
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
                            var ref, ref3;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setGasOption(null);
                                    field.onChange(e);
                                },
                                error: !!((ref = errors.gasLimit) === null || ref === void 0 ? void 0 : ref.message),
                                helperText: (ref3 = errors.gasLimit) === null || ref3 === void 0 ? void 0 : ref3.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            }));
                        },
                        name: "gasLimit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_price')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            var ref, ref5;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setGasOption(null);
                                    field.onChange(e);
                                },
                                error: !!((ref = errors.gasPrice) === null || ref === void 0 ? void 0 : ref.message),
                                helperText: (ref5 = errors.gasPrice) === null || ref5 === void 0 ? void 0 : ref5.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            }));
                        },
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
    }));
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










const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    const { open , closeDialog , setDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(src/* WalletMessages.events.gasSettingDialogUpdated */.R$.events.gasSettingDialogUpdated, (evt)=>{
        if (!evt.open) return;
        if (evt.gasOption) setGasOption(evt.gasOption);
        if (evt.gasLimit) setGasLimit(evt.gasLimit);
        if (evt.minGasLimit !== undefined) setMinGasLimit(evt.minGasLimit);
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
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
    }));
};


/***/ }),

/***/ 45207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ WalletRenameWalletDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55535);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92498);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52153);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40675);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14767);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98697);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32364);
/* harmony import */ var _utils_i18n_next_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48520);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21949);








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
    const { t  } = (0,_utils_i18n_next_ui__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M)();
    const { classes  } = useStyles();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [wallet, setWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { open , setDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletRenameDialogUpdated */ .R.events.walletRenameDialogUpdated);
    _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletRenameDialogUpdated.on */ .R.events.walletRenameDialogUpdated.on((data)=>{
        var ref;
        if (!data.open) return;
        var ref1;
        setName((ref1 = (ref = data.wallet) === null || ref === void 0 ? void 0 : ref.name) !== null && ref1 !== void 0 ? ref1 : '');
        setWallet(data.wallet);
    });
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setDialog({
            open: false,
            wallet: null
        });
    }, []);
    const handleRename = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useSnackbarCallback */ .iD)(()=>{
        if (!(wallet === null || wallet === void 0 ? void 0 : wallet.address)) {
            throw new Error('Not select wallet yet.');
        }
        return _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.renameWallet */ .V.renameWallet(wallet.address, name);
    }, [
        wallet === null || wallet === void 0 ? void 0 : wallet.address
    ], handleClose);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_4__/* .InjectedDialog */ .F, {
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
    }));
}


/***/ }),

/***/ 10219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ RestoreLegacyWalletDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29105);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80126);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21949);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55218);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14767);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55535);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40675);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87470);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32364);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98697);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76108);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme)=>({
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
function RestoreLegacyWalletDialog(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useHistory */ .k6)();
    const { open , setDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.restoreLegacyWalletDialogUpdated */ .R.events.restoreLegacyWalletDialogUpdated);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setDialog({
            open: false
        });
    }, [
        setDialog
    ]);
    const { value: legacyWallets = []  } = (0,react_use__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(async ()=>{
        const now = new Date();
        const wallets = await _messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletRPC.getLegacyWallets */ .V.getLegacyWallets(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .ProviderType.MaskWallet */ .lP.MaskWallet);
        if (!wallets.length) return [];
        return wallets.filter((x)=>(x.mnemonic || x._public_key_) && x.updatedAt < now
        );
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!legacyWallets.length) return;
        if (!location.href.includes('popups.html')) return;
        if (location.hash.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.LegacyWalletRecovered */ .mZ.LegacyWalletRecovered) || location.hash.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.Unlock */ .mZ.Unlock)) return;
        setDialog({
            open: true
        });
    }, [
        legacyWallets.map((x)=>x.address
        ).join()
    ]);
    const onRestore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        history.push(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.LegacyWalletRecovered */ .mZ.LegacyWalletRecovered);
        onClose();
    }, [
        onClose,
        history
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_5__/* .InjectedDialog */ .F, {
        open: open,
        maxWidth: "xs",
        onClose: onClose,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    className: classes.title,
                    color: "textPrimary",
                    variant: "body2",
                    component: "div",
                    children: t('popups_wallet_dialog_legacy_wallet_tip')
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    display: "flex",
                    justifyContent: "center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
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
    }));
}


/***/ }),

/***/ 65871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ WalletRiskWarningDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69961);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21949);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49861);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13443);
/* harmony import */ var _mui_icons_material_PriorityHigh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78765);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55535);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50266);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71288);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(52153);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(40675);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14767);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32364);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76108);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98697);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9228);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()((theme)=>({
        paper: {
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .getMaskColor */ .nb)(theme).redMain
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
            borderRadius: theme.spacing(1),
            '&> :first-child': {
                paddingBottom: theme.spacing(1)
            }
        }
    })
);
function WalletRiskWarningDialog() {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .useAccount */ .m)();
    const { showSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .useCustomSnackbar */ .Ii)();
    const isMobile = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useMatchXS */ .IN)();
    const { open , setDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletMessages.events.walletRiskWarningDialogUpdated */ .R.events.walletRiskWarningDialogUpdated);
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
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_5__/* .InjectedDialog */ .F, {
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
                                    children: t('nft_wallet_label')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    variant: "body1",
                                    color: "textPrimary",
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
    }));
}


/***/ }),

/***/ 66810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ SelectNftContractDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/List/List.js
var List = __webpack_require__(1749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(26605);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(71288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(28620);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(69172);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
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
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721ContractDetailed.ts
var useERC721ContractDetailed = __webpack_require__(10580);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(54575);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(32364);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../icons/general/Search.tsx
var Search = __webpack_require__(28682);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/InputBox.tsx
var InputBox = __webpack_require__(49257);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/SearchInput.tsx



function SearchInput(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InputBox/* InputBox */.W, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* SearchIcon */.W, {}),
        ...props
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(98347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.5.3/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(46149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/unionBy.js
var unionBy = __webpack_require__(60398);
// EXTERNAL MODULE: ./src/plugins/EVM/hooks/index.ts + 8 modules
var hooks = __webpack_require__(99223);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectNftContractDialog.tsx















const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
            marginBottom: 20
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
    const { open , setDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectNftContractDialogUpdated */.R.events.selectNftContractDialogUpdated, (ev)=>{
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
    const { value: assets  } = (0,hooks/* useNFTBalance */.$F)(account, !open);
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
    const contractList = chainId === types/* ChainId.Mainnet */.a_.Mainnet && assets ? (0,unionBy/* default */.Z)([
        ...assets,
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        title: t('plugin_wallet_select_a_nft_contract'),
        maxWidth: "xs",
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
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultBox, {
                    keyword: keyword1,
                    contractList: contractList,
                    searchedTokenList: searchedTokenList,
                    onSubmit: onSubmit
                })
            ]
        })
    }));
}
function SearchResultBox(props) {
    const { keyword , searchedTokenList , onSubmit , contractList  } = props;
    const { classes  } = useStyles();
    const isValid = dist.EthereumAddress.isValid(keyword);
    const { value: contractDetailed , loading  } = (0,useERC721ContractDetailed/* useERC721ContractDetailed */.P)(keyword);
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
    }));
}
function ContractListItem(props) {
    const { onSubmit , contract  } = props;
    const { classes  } = useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
    }));
}


/***/ }),

/***/ 43735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ SelectProviderDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(48520);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(32364);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(9915);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(5521);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/List/List.js
var List = __webpack_require__(1749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(26605);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ImageList/ImageList.js
var ImageList = __webpack_require__(82439);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ImageListItem/ImageListItem.js + 1 modules
var ImageListItem = __webpack_require__(14609);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var src_utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(42599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(20234);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/ProviderIcon.tsx



const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            textAlign: 'center'
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(4, 1),
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
function ProviderIcon({ icon , name , onClick , ButtonBaseProps  }) {
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
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
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/PluginProviderRender.tsx








const PluginProviderRender_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
        grid: {
            width: '100%',
            margin: theme.spacing(2, 0, 0)
        },
        providerIcon: {
            fontSize: 45
        }
    })
);
function PluginProviderRender({ networks , providers , undeterminedPluginID , undeterminedNetworkID , setUndeterminedPluginID , setUndeterminedNetworkID , NetworkIconClickBait , ProviderIconClickBait , onSubmit  }) {
    const { classes  } = PluginProviderRender_useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
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
                            children: networks === null || networks === void 0 ? void 0 : networks.filter((x)=>x.isMainnet
                            ).map((network)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                    className: classes.networkItem,
                                    onClick: ()=>{
                                        setUndeterminedPluginID(network.networkSupporterPluginID);
                                        setUndeterminedNetworkID(network.ID);
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src_utils/* ShadowRootTooltip */.p_, {
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
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageList/* default */.Z, {
                            className: classes.grid,
                            gap: 8,
                            cols: 3,
                            rowHeight: 130,
                            children: providers.filter((x)=>x.providerAdaptorPluginID === undeterminedPluginID
                            ).map((provider)=>ProviderIconClickBait ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderIconClickBait, {
                                    network: (ref = networks.find((x)=>x.ID === undeterminedNetworkID
                                    )) !== null && ref !== void 0 ? ref : (0,head/* default */.Z)(networks),
                                    provider: provider,
                                    onSubmit: onSubmit,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItem/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderIcon, {
                                            icon: provider.icon,
                                            name: provider.name
                                        })
                                    }, provider.ID)
                                }, provider.ID) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItem/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderIcon, {
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
    }));
}

// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(87050);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/index.tsx













const SelectProviderDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    const { open , closeDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    // #region native app
    (0,react.useEffect)(()=>{
        if (!open) return;
        if (native_rpc/* hasNativeAPI */._) native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.misc_openCreateWalletView */.Nz.api.misc_openCreateWalletView();
    }, [
        open
    ]);
    // #endregion
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const networks = (0,plugin_infra_src/* getRegisteredWeb3Networks */.Rm)();
    const providers = (0,plugin_infra_src/* getRegisteredWeb3Providers */.i8)();
    const pluginID = (0,shared_src/* useValueRef */.E)(settings/* pluginIDSettings */.tR);
    const network = (0,plugin_infra_src/* useNetworkDescriptor */.Vw)();
    const [undeterminedPluginID, setUndeterminedPluginID] = (0,react.useState)(pluginID);
    const [undeterminedNetworkID, setUndeterminedNetworkID] = (0,react.useState)(network === null || network === void 0 ? void 0 : network.ID);
    const undeterminedNetwork = (0,plugin_infra_src/* useNetworkDescriptor */.Vw)(undeterminedNetworkID, undeterminedPluginID);
    const networkType = (0,plugin_infra_src/* useNetworkType */.bL)(undeterminedPluginID);
    var _SelectProviderDialog;
    const { NetworkIconClickBait , ProviderIconClickBait  } = (_SelectProviderDialog = (0,plugin_infra_src/* useWeb3UI */.$d)(undeterminedPluginID).SelectProviderDialog) !== null && _SelectProviderDialog !== void 0 ? _SelectProviderDialog : {};
    const onSubmit = (0,react.useCallback)(()=>{
        if ((undeterminedNetwork === null || undeterminedNetwork === void 0 ? void 0 : undeterminedNetwork.type) === networkType) {
            settings/* pluginIDSettings.value */.tR.value = undeterminedPluginID;
        }
        closeDialog();
        if (isDashboard) messages/* WalletMessages.events.walletStatusDialogUpdated.sendToLocal */.R.events.walletStatusDialogUpdated.sendToLocal({
            open: false
        });
    }, [
        networkType,
        undeterminedNetwork === null || undeterminedNetwork === void 0 ? void 0 : undeterminedNetwork.type,
        undeterminedPluginID,
        closeDialog,
        isDashboard
    ]);
    // not available for the native app
    if (native_rpc/* hasNativeAPI */._) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
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
    }));
}


/***/ }),

/***/ 69850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ SelectTokenDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95501);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55535);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14767);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13601);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36130);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32364);
/* harmony import */ var _Wallet_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98697);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76108);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21949);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87470);
/* harmony import */ var _social_network_adaptor_minds_com_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67908);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29980);


// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated










const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme, { snsId , isDashboard  })=>({
        content: {
            ...snsId === _social_network_adaptor_minds_com_base__WEBPACK_IMPORTED_MODULE_8__/* .MINDS_ID */ .fN ? {
                minWidth: 552
            } : {},
            padding: theme.spacing(3),
            paddingTop: isDashboard ? 0 : theme.spacing(2.8)
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
        search: {
            backgroundColor: 'transparent !important',
            border: `solid 1px ${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.twitterBorderLine */ .ZN.twitterBorderLine}`
        }
    })
);
function SelectTokenDialog(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const isDashboard = location.href.includes('dashboard.html');
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles({
        snsId: _social_network__WEBPACK_IMPORTED_MODULE_9__.activatedSocialNetworkUI.networkIdentifier,
        isDashboard
    }), props);
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .useChainId */ .xx)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .useTokenConstants */ .kd)(chainId);
    // eslint-disable-next-line import/no-deprecated
    const isMdScreen = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)((theme)=>theme.breakpoints.down('md')
    );
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [targetChainId, setChainId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(chainId);
    const [rowSize, setRowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(54);
    const [disableNativeToken, setDisableNativeToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [disableSearchBar, setDisableSearchBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [FungibleTokenListProps, setFungibleTokenListProps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        try {
            const fontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
            setRowSize(fontSize * 4);
        } catch  {
            setRowSize(60);
        }
    }, []);
    const { open , setDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useRemoteControlledDialog */ .F$)(_Wallet_messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletMessages.events.selectTokenDialogUpdated */ .R.events.selectTokenDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setId(ev.uuid);
        var _disableNativeToken;
        setDisableNativeToken((_disableNativeToken = ev.disableNativeToken) !== null && _disableNativeToken !== void 0 ? _disableNativeToken : true);
        var _disableSearchBar;
        setDisableSearchBar((_disableSearchBar = ev.disableSearchBar) !== null && _disableSearchBar !== void 0 ? _disableSearchBar : false);
        var _FungibleTokenListProps;
        setFungibleTokenListProps((_FungibleTokenListProps = ev.FungibleTokenListProps) !== null && _FungibleTokenListProps !== void 0 ? _FungibleTokenListProps : null);
        var _chainId;
        setChainId((_chainId = ev.chainId) !== null && _chainId !== void 0 ? _chainId : undefined);
    });
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (token)=>{
        setDialog({
            open: false,
            uuid: id,
            token
        });
        await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .delay */ .gw)(300);
    }, [
        id,
        setDialog
    ]);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setDialog({
            open: false,
            uuid: id
        });
        await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .delay */ .gw)(300);
    }, [
        id,
        setDialog
    ]);
    var ref, ref1, ref2;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__/* .InjectedDialog */ .F, {
        titleBarIconStyle: isDashboard ? 'close' : 'back',
        open: open,
        onClose: onClose,
        title: t('plugin_wallet_select_a_token'),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            classes: {
                root: classes.content
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ERC20TokenList */ .T3, {
                classes: {
                    list: classes.list,
                    placeholder: classes.placeholder
                },
                onSelect: onSubmit,
                ...FungibleTokenListProps,
                tokens: [
                    ...(ref = FungibleTokenListProps === null || FungibleTokenListProps === void 0 ? void 0 : FungibleTokenListProps.tokens) !== null && ref !== void 0 ? ref : []
                ],
                blacklist: disableNativeToken && NATIVE_TOKEN_ADDRESS ? [
                    NATIVE_TOKEN_ADDRESS,
                    ...(ref1 = FungibleTokenListProps === null || FungibleTokenListProps === void 0 ? void 0 : FungibleTokenListProps.blacklist) !== null && ref1 !== void 0 ? ref1 : []
                ] : [
                    ...(ref2 = FungibleTokenListProps === null || FungibleTokenListProps === void 0 ? void 0 : FungibleTokenListProps.blacklist) !== null && ref2 !== void 0 ? ref2 : []
                ],
                targetChainId: targetChainId,
                disableSearch: disableSearchBar,
                FixedSizeListProps: {
                    itemSize: rowSize,
                    height: isMdScreen ? 300 : 503
                },
                SearchTextFieldProps: {
                    InputProps: {
                        classes: {
                            root: classes.search
                        }
                    }
                }
            })
        })
    }));
}


/***/ }),

/***/ 82166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ SelectWalletDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(80126);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(52153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallets.ts
var useWallets = __webpack_require__(32760);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(28620);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js
var ListItemAvatar = __webpack_require__(3279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(71288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(12976);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(9506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(18283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(37617);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockie.ts
var useBlockie = __webpack_require__(89403);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
;// CONCATENATED MODULE: ./src/components/shared/SelectWallet/WalletInList.tsx







const useStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    const classes = (0,src/* useStylesExtends */.Bc)(useStyle(), props);
    const { wallet , selected =false , disabled =false , onClick , ListItemProps  } = props;
    const blockie = (0,useBlockie/* useBlockie */.Y)(wallet.address);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
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
    }));
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(32364);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectWalletDialog.tsx














const useStyles = (0,src/* makeStyles */.ZL)()({
    content: {
        padding: 0,
        minHeight: 300
    }
});
function SelectWalletDialogUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const wallets = (0,useWallets/* useWallets */.r)(types/* ProviderType.MaskWallet */.lP.MaskWallet);
    const selectedWallet = (0,useWallet/* useWallet */.O)();
    // #region remote controlled dialog logic
    const [networkType, setNetworkType] = (0,react.useState)();
    const { open , closeDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectWalletDialogUpdated */.R.events.selectWalletDialogUpdated, (ev)=>{
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
    const history = (0,react_router/* useHistory */.k6)();
    const onCreate = (0,react.useCallback)(async ()=>{
        closeDialog();
        await (0,shared_base_src/* delay */.gw)(100);
        if ((0,umd.isEnvironment)(umd.Environment.ManifestOptions)) history.push('');
        else await service/* default.Welcome.openOptionsPage */.ZP.Welcome.openOptionsPage(shared_base_src/* DashboardRoutes.CreateMaskWallet */.vq.CreateMaskWallet, `create=${Date.now()}`);
    }, [
        history,
        closeDialog
    ]);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: closeDialog,
        title: t('plugin_wallet_select_a_wallet'),
        maxWidth: "xs",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: wallets.map((wallet)=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletInList, {
                        wallet: wallet,
                        selected: (selectedWallet === null || selectedWallet === void 0 ? void 0 : selectedWallet.address) === wallet.address,
                        onClick: ()=>onSelect(wallet.address)
                    }, wallet.address));
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "text",
                    onClick: onCreate,
                    children: t('plugin_wallet_on_create')
                })
            })
        ]
    }));
}
function SelectWalletDialog(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SelectWalletDialogUI, {
        ...props
    }));
}


/***/ }),

/***/ 11025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ TransactionDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55535);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2974);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40201);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52153);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40675);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14767);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54054);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80099);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13601);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25071);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54575);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76108);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21949);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32364);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98697);











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
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .useChainId */ .xx)();
    // #region remote controlled dialog
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [shareLink, setShareLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t('plugin_wallet_transaction'));
    const { open , closeDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.transactionDialogUpdated */ .R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) {
            setState(ev.state);
            var _summary;
            setSummary((_summary = ev.summary) !== null && _summary !== void 0 ? _summary : '');
            var _shareLink;
            setShareLink((_shareLink = ev.shareLink) !== null && _shareLink !== void 0 ? _shareLink : '');
            var _title;
            setTitle((_title = ev.title) !== null && _title !== void 0 ? _title : t('plugin_wallet_transaction'));
        } else {
            setSummary('');
            setShareLink('');
        }
    });
    const onShare = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (shareLink) window.open(shareLink, '_blank', 'noopener noreferrer');
        closeDialog();
    }, [
        shareLink,
        closeDialog
    ]);
    // #endregion
    if (!state) return null;
    var _reason;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_5__/* .InjectedDialog */ .F, {
        open: open,
        onClose: closeDialog,
        title: title,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: classes.content,
                children: [
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                size: 64,
                                color: "primary"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                variant: "subtitle1",
                                children: t('plugin_wallet_transaction_wait_for_confirmation')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.secondary,
                                color: "textSecondary",
                                children: summary
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.HASH */ .n$.HASH ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: t('plugin_wallet_transaction_submitted')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    className: classes.link,
                                    href: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .resolveTransactionLinkOnExplorer */ .z4)(chainId, state.hash),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t('plugin_wallet_view_on_explorer')
                                })
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            state.receipt.status ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.icon
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: state.receipt.status ? t('plugin_wallet_transaction_confirmed') : (_reason = state.reason) !== null && _reason !== void 0 ? _reason : t('plugin_wallet_transaction_reverted')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    className: classes.link,
                                    href: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .resolveTransactionLinkOnExplorer */ .z4)(chainId, state.receipt.transactionHash),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t('plugin_wallet_view_on_explorer')
                                })
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: state.error.message
                            })
                        ]
                    }) : null
                ]
            }),
            ![
                _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(state.type) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    color: "primary",
                    size: "large",
                    variant: "contained",
                    fullWidth: true,
                    onClick: state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED || !shareLink ? closeDialog : onShare,
                    children: state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n$.FAILED || !shareLink ? t('dismiss') : t('share')
                })
            }) : null
        ]
    }));
}
function TransactionDialog(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TransactionDialogUI, {
        ...props
    }));
}


/***/ }),

/***/ 82365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ TransactionSnackbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40201);
/* harmony import */ var _mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82940);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13601);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11585);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25071);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54575);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14767);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98697);
/* harmony import */ var _WalletStatusDialog_TransactionDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76582);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8267);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76108);










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
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletStatusDialog_TransactionDescription__WEBPACK_IMPORTED_MODULE_4__/* .RecentTransactionDescription */ .q, {
            hash: hash !== null && hash !== void 0 ? hash : '',
            computedPayload: payload,
            receipt: state.receipt
        }));
    }, []);
    const getFullMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((message, hash)=>{
        if (!hash) return message;
        const link = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .resolveTransactionLinkOnExplorer */ .z4)(chainId, hash);
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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
        }));
    }, [
        chainId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.transactionProgressUpdated.on */ .R.events.transactionProgressUpdated.on(async (progress)=>{
            var ref;
            if (location.href.includes('popups.html')) return;
            if (progress.state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN) return;
            const payload = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Ethereum.getSendTransactionComputedPayload */ .ZP.Ethereum.getSendTransactionComputedPayload(progress.payload);
            const config = resolveSnackbarConfig(progress.state.type);
            var _hash;
            const hash = (_hash = progress.state.hash) !== null && _hash !== void 0 ? _hash : (ref = progress.state.receipt) === null || ref === void 0 ? void 0 : ref.transactionHash;
            var ref1;
            if ([
                'swapExactETHForTokens',
                'swapExactTokensForETH',
                'swapExactTokensForTokens'
            ].includes((ref1 = payload === null || payload === void 0 ? void 0 : payload.name) !== null && ref1 !== void 0 ? ref1 : '')) {
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

/***/ 65109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ WalletConnectQRCodeDialog)
});

// UNUSED EXPORTS: QRCodeDialog

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(52153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(32364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ImageList/ImageList.js
var ImageList = __webpack_require__(82439);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ImageListItem/ImageListItem.js + 1 modules
var ImageListItem = __webpack_require__(14609);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js
var map = __webpack_require__(857);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(42599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(20234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/Provider.tsx



const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    var ref;
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        style: {
            opacity: ((ref = props.ButtonBaseProps) === null || ref === void 0 ? void 0 : ref.disabled) ? 0.5 : 1
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
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(5617);
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

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/SafariPlatform.tsx








const SafariPlatform_useStyles = (0,src/* makeStyles */.ZL)()({
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
    const makeConnect = (link)=>()=>{
            const url = new URL(link);
            url.searchParams.set('uri', uri);
            open(url.toString());
        }
    ;
    const descriptionMapping = {
        MetaMask: t('plugin_wallet_connect_safari_metamask'),
        Rainbow: t('plugin_wallet_connect_safari_rainbow'),
        Trust: t('plugin_wallet_connect_safari_trust'),
        imToken: t('plugin_wallet_connect_safari_im_token')
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ImageList/* default */.Z, {
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
    }));
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/FirefoxPlatform.tsx



const FirefoxPlatform = ({ uri  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
        variant: "contained",
        onClick: ()=>open(uri)
        ,
        children: t('plugin_wallet_on_connect_in_firefox')
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(44939);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/QRCodeModel.tsx





const QRCodeModel_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
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
    }));
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/index.tsx












const WalletConnectQRCodeDialog_useStyles = (0,src/* makeStyles */.ZL)()({
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
    const { open , closeDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated, (ev)=>ev.open && setURI(ev.uri)
    );
    // #endregion
    let mode = 'qrcode';
    if (false) {} else if (true) {
        mode = 'safari';
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeDialog, {
        uri: uri,
        open: open,
        mode: mode,
        onClose: async ()=>{
            await service/* default.Ethereum.cancelWalletConnect */.ZP.Ethereum.cancelWalletConnect();
            closeDialog();
        }
    }));
};
const QRCodeDialog = ({ uri , open , onClose , mode  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = WalletConnectQRCodeDialog_useStyles();
    const [qrMode, setQRMode] = (0,react.useState)(false);
    const PlatformSelector = ()=>{
        if (!uri) {
            return null;
        } else if (qrMode || mode === 'qrcode') {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeModel, {
                uri: uri
            }));
        } else if (mode === 'firefox') {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(FirefoxPlatform, {
                uri: uri
            }));
        } else if (mode === 'safari') {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SafariPlatform, {
                uri: uri
            }));
        }
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeModel, {
            uri: uri
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
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
    }));
};


/***/ }),

/***/ 76582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* binding */ RecentTransactionDescription)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(7683);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(48981);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 2 modules
var useERC20TokenDetailed = __webpack_require__(87262);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var src = __webpack_require__(91339);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 25 modules
var constants = __webpack_require__(36130);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(52646);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/contractMethodDescription/getRedpacketDescription.tsx



function getRedpacketDescription({ name , address , chainId  }, computedPayload) {
    const { HAPPY_RED_PACKET_ADDRESS_V4  } = (0,constants/* getRedPacketConstants */.GV)(chainId);
    if (!(0,utils_address/* isSameAddress */.Wr)(address, HAPPY_RED_PACKET_ADDRESS_V4)) return undefined;
    switch(name){
        case 'create_red_packet':
            var ref, ref1;
            var ref2;
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CreateRedpacketDescription, {
                tokenAddress: (ref2 = computedPayload === null || computedPayload === void 0 ? void 0 : (ref = computedPayload.parameters) === null || ref === void 0 ? void 0 : ref._token_addr) !== null && ref2 !== void 0 ? ref2 : '',
                tokenAmount: computedPayload === null || computedPayload === void 0 ? void 0 : (ref1 = computedPayload.parameters) === null || ref1 === void 0 ? void 0 : ref1._total_tokens
            }));
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: token && tokenAddress ? t('plugin_red_packet_create_with_token', {
            amount: (0,formatter/* formatBalance */.az)(tokenAmount, token.decimals),
            symbol: token.symbol
        }) : t('plugin_red_packet_create')
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/contractMethodDescription/getITO_Description.tsx



function getITO_Description({ name , address , chainId  }, computedPayload) {
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* getITOConstants */.af)(chainId);
    if (!(0,utils_address/* isSameAddress */.Wr)(address, ITO2_CONTRACT_ADDRESS)) return undefined;
    switch(name){
        case 'fill_pool':
            var ref, ref1;
            var ref2;
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(FillPoolDescription, {
                tokenAddress: (ref2 = computedPayload === null || computedPayload === void 0 ? void 0 : (ref = computedPayload.parameters) === null || ref === void 0 ? void 0 : ref._token_addr) !== null && ref2 !== void 0 ? ref2 : '',
                tokenAmount: computedPayload === null || computedPayload === void 0 ? void 0 : (ref1 = computedPayload.parameters) === null || ref1 === void 0 ? void 0 : ref1._total_tokens
            }));
        default:
            return undefined;
    }
}
function FillPoolDescription(props) {
    const { tokenAddress , tokenAmount  } = props;
    const { value: token  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(tokenAddress);
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: token && tokenAddress ? t('plugin_ito_transaction_dialog_summary', {
            amount: (0,formatter/* formatBalance */.az)(tokenAmount, token.decimals),
            symbol: token.symbol
        }) : t('plugin_ito_transaction_dialog_summary_with_no_token')
    }));
}

// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 1 modules
var locales_legacy = __webpack_require__(6057);
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
    var ref, ref1;
    return (ref1 = (ref = getRedpacketDescription(contractMethodInfo, computedPayload)) !== null && ref !== void 0 ? ref : getITO_Description(contractMethodInfo, computedPayload)) !== null && ref1 !== void 0 ? ref1 : getNFTRedpacketDescription(contractMethodInfo, computedPayload);
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/TransactionDescription.tsx





function getTokenAmountDescription(amount = '0', tokenDetailed, negative) {
    var ref;
    const symbol = negative ? '- ' : '';
    var ref1, ref2;
    const value = (0,src/* pow10 */.wA)(9 + ((ref1 = tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals) !== null && ref1 !== void 0 ? ref1 : 18)).isGreaterThanOrEqualTo(amount) ? (0,formatter/* formatBalance */.az)(amount, (ref2 = tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals) !== null && ref2 !== void 0 ? ref2 : 0, 4) : 'infinite';
    const token = tokenDetailed === null || tokenDetailed === void 0 ? void 0 : (ref = tokenDetailed.symbol) === null || ref === void 0 ? void 0 : ref.trim();
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
                    var ref;
                    return `Approve spend ${getTokenAmountDescription((ref = computedPayload.parameters) === null || ref === void 0 ? void 0 : ref.value, tokenDetailed)}`;
                case 'transfer':
                case 'transferFrom':
                    var ref3;
                    return `Transfer token ${getTokenAmountDescription((ref3 = computedPayload.parameters) === null || ref3 === void 0 ? void 0 : ref3.value, tokenDetailed, true)}`;
                case 'swapExactETHForTokens':
                    const inputAmount = (0,formatter/* formatBalance */.az)(computedPayload._tx.value, nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.decimals, 2);
                    const outputAmount = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountOutMin, tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals, 2);
                    return `Swap ${inputAmount} ${nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.symbol} for ${outputAmount} ${tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.symbol}`;
                case 'swapExactTokensForETH':
                    const inAmount = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountIn, tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals, 2);
                    const outAmount = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountOutMin, nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.decimals, 2);
                    return `Swap ${inAmount} ${tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.symbol} for ${outAmount} ${nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.symbol}`;
                case 'swapExactTokensForTokens':
                    const amountIn = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountIn, nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.decimals, 2);
                    const amountOut = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountOutMin, tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals, 2);
                    return `Swap ${amountIn} ${nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.symbol} for ${amountOut} ${tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.symbol}`;
                default:
                    var _name, _to;
                    const description = getContractMethodDescription({
                        name: (_name = computedPayload.name) !== null && _name !== void 0 ? _name : '',
                        chainId,
                        address: (_to = computedPayload._tx.to) !== null && _to !== void 0 ? _to : ''
                    }, computedPayload);
                    var _name1;
                    return description !== null && description !== void 0 ? description : `${(_name1 = computedPayload.name) !== null && _name1 !== void 0 ? _name1 : 'Contract Interaction'} ${computedPayload._tx.value ? getTokenAmountDescription(computedPayload._tx.value, nativeTokenDetailed, true) : ''}`;
            }
        case types/* EthereumRpcType.CONTRACT_DEPLOYMENT */.Wv.CONTRACT_DEPLOYMENT:
            return `Contract Deployment ${getTokenAmountDescription(computedPayload._tx.value, nativeTokenDetailed, true)}`;
        case types/* EthereumRpcType.CANCEL */.Wv.CANCEL:
            return 'Cancel Transaction';
        case types/* EthereumRpcType.RETRY */.Wv.RETRY:
            return 'Retry Transaction';
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
    if ((computedPayload === null || computedPayload === void 0 ? void 0 : computedPayload.type) === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION) {
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
    var ref;
    return !getNativeTokenLoading && !getERC20TokenLoading && !getInputERC20TokenLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: (ref = getTransactionDescription(chainId, inputTokenAddress ? inputTokenDetailed : nativeTokenDetailed, tokenDetailed, computedPayload)) !== null && ref !== void 0 ? ref : hash
    }) : null;
}


/***/ }),

/***/ 19767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ WalletStatusDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(52153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/Error.js
var icons_material_Error = __webpack_require__(29325);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(21949);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(14767);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(32364);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox.tsx
var WalletStatusBox = __webpack_require__(56347);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/utils/messages.ts
var utils_messages = __webpack_require__(86865);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(28620);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(67429);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(13329);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var ITO_constants = __webpack_require__(74038);
// EXTERNAL MODULE: ./src/plugins/Transak/messages.ts
var Transak_messages = __webpack_require__(71651);
// EXTERNAL MODULE: ./src/plugins/Pets/messages.ts
var Pets_messages = __webpack_require__(58505);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(62517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js
var format = __webpack_require__(20478);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(2974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/List/List.js
var List = __webpack_require__(1749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(28527);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(26605);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 2 modules
var useERC20TokenDetailed = __webpack_require__(87262);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(52646);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 25 modules
var evm_constants = __webpack_require__(36130);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(54575);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
// EXTERNAL MODULE: ./src/components/shared/NetworkTab.tsx
var NetworkTab = __webpack_require__(5913);
// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared = __webpack_require__(89650);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(29105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/apis/spaceStationGalaxy.ts



const CAMPAIGN_ID = 160;
const WHITE_LIST_INFO_FIELD = `
    maxCount
    usedCount
`;
async function fetchFromSubgraph(query) {
    var ref;
    const subgraphURL = (ref = (0,evm_constants/* getSpaceStationGalaxyConstants */.h6)(types/* ChainId.Matic */.a_.Matic)) === null || ref === void 0 ? void 0 : ref.SUBGRAPH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        body: json_stable_stringify_default()({
            query
        }),
        headers: {
            'content-type': 'application/json'
        }
    });
    const { data  } = await response.json();
    return data;
}
async function getClaimableTokenCount(address, id) {
    const data = await fetchFromSubgraph(`
    {
        campaign(id: ${id}) {
            whitelistInfo(address: "${address.toLowerCase()}") {
                ${WHITE_LIST_INFO_FIELD}
            }
        }
    }
    `);
    if (!data || !dist.EthereumAddress.isValid(address)) return {
        maxCount: -1,
        usedCount: 0
    };
    const { campaign: { whitelistInfo  } ,  } = data;
    return whitelistInfo;
}
async function getCampaignInfo(id) {
    const data = await fetchFromSubgraph(`
    {
        campaign(id: ${id}) {
            chain
            name
            endTime
            startTime
            description
            gamification {
                nfts {
                  nft {
                    image
                  }
                }
              }
        }
    }
    `);
    if (!data) throw new Error('Failed to load payload.');
    const { campaign: { chain , name , description , endTime , startTime , gamification: { nfts  } ,  } ,  } = data;
    return {
        id,
        chain,
        name,
        description,
        endTime,
        startTime,
        nfts: nfts.map((v)=>v.nft
        )
    };
}
// (Matic) Mask Social Defi Alliance
// https://bulletlabs.notion.site/Matic-Mask-Social-Defi-Alliance-f798356212604dc7b3c6f8fbf066de21
async function getAccountClaimSignature(userSignature, account, chain, id) {
    const data = await fetchFromSubgraph(`
      mutation {
        prepareParticipate(input: {
            signature:"${userSignature}",
            campaignID: ${id},
            address: "${account}",
            mintCount: 1,
            chain: ${chain}
        }){
            allow
            signature
            mintFuncInfo {
                nftCoreAddress
                verifyIDs
                powahs
            }
        }
      }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.prepareParticipate.mintFuncInfo)) return {
        allow: false,
        signature: '',
        verifyIDs: [],
        nftCoreAddress: '',
        powahs: []
    };
    const { prepareParticipate: { allow , signature , mintFuncInfo: { verifyIDs , nftCoreAddress , powahs  } ,  } ,  } = data;
    return {
        allow,
        signature,
        verifyIDs,
        nftCoreAddress,
        powahs
    };
}
async function mutationParticipate(userSignature, account, chain, id, txHash, verifyIDs) {
    const data = await fetchFromSubgraph(`
    mutation {
        participate(input: {
            signature:"${userSignature}",
            campaignID: ${id},
            address: "${account}",
            tx: "${txHash}",
            verifyIDs: ${verifyIDs},
            chain: ${chain}
        }){
            participated
        }
    }
    `);
    if (!data) throw new Error('Failed to load payload.');
    return data.participate.participated;
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSpaceStationCampaignInfo.ts


const CAMPAIGN_ID_LIST = [
    160,
    175,
    176,
    177,
    178,
    179,
    180
];
function useSpaceStationCampaignInfo(address, nftAirdropEnabled) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !nftAirdropEnabled) return [];
        return Promise.all(CAMPAIGN_ID_LIST.map(async (id)=>{
            const campaignInfo = await getCampaignInfo(id);
            const data = await getClaimableTokenCount(address, id);
            const claimableInfo = {
                claimable: data.maxCount - data.usedCount > 0,
                claimed: data.maxCount > 0 && data.maxCount - data.usedCount === 0
            };
            return {
                campaignInfo,
                claimableInfo
            };
        }));
    }, [
        address
    ]);
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(44776);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/TextField/TextField.js
var TextField = __webpack_require__(92498);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSpaceStationClaimableTokenCountCallback.ts



function useSpaceStationClaimableTokenCountCallback() {
    const [spaceStationAccountClaimableLoading, setSpaceStationAccountClaimableLoading] = (0,react.useState)(false);
    const [spaceStationClaimableCount, setSpaceStationClaimableCount] = (0,react.useState)(undefined);
    const spaceStationAccountClaimableCallback = (0,react.useCallback)(async (address)=>{
        setSpaceStationAccountClaimableLoading(true);
        const data = await Promise.all(CAMPAIGN_ID_LIST.map(async (id)=>{
            const claimableCount = await getClaimableTokenCount(address, id);
            return claimableCount.maxCount - claimableCount.usedCount > 0;
        }));
        setSpaceStationAccountClaimableLoading(false);
        setSpaceStationClaimableCount(data.filter((v)=>Boolean(v)
        ).length);
    }, [
        setSpaceStationAccountClaimableLoading,
        getClaimableTokenCount,
        setSpaceStationAccountClaimableLoading
    ]);
    return [
        spaceStationClaimableCount,
        setSpaceStationClaimableCount,
        spaceStationAccountClaimableCallback,
        spaceStationAccountClaimableLoading, 
    ];
}

;// CONCATENATED MODULE: ../web3-contracts/abis/SpaceStationGalaxy.json
const SpaceStationGalaxy_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_cid","type":"uint256"}],"name":"EventActivateCampaign","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_cid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_dummyId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_nftID","type":"uint256"},{"indexed":false,"internalType":"address","name":"_sender","type":"address"}],"name":"EventClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_cid","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"_dummyIdArr","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_nftIDArr","type":"uint256[]"},{"indexed":false,"internalType":"address","name":"_sender","type":"address"}],"name":"EventClaimBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_cid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_dummyId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_nftID","type":"uint256"},{"indexed":false,"internalType":"address","name":"_sender","type":"address"}],"name":"EventForge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256","name":"_dummyId","type":"uint256"},{"internalType":"uint256","name":"_powah","type":"uint256"},{"internalType":"address","name":"_account","type":"address"}],"name":"_hash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256[]","name":"_dummyIdArr","type":"uint256[]"},{"internalType":"uint256[]","name":"_powahArr","type":"uint256[]"},{"internalType":"address","name":"_account","type":"address"}],"name":"_hashBatch","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256[]","name":"_nftIDs","type":"uint256[]"},{"internalType":"uint256","name":"_dummyId","type":"uint256"},{"internalType":"uint256","name":"_powah","type":"uint256"},{"internalType":"address","name":"_account","type":"address"}],"name":"_hashForge","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"_verify","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"uint256","name":"_platformFee","type":"uint256"},{"internalType":"uint256","name":"_erc20Fee","type":"uint256"},{"internalType":"address","name":"_erc20","type":"address"}],"name":"activateCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"campaignFeeConfigs","outputs":[{"internalType":"address","name":"erc20","type":"address"},{"internalType":"uint256","name":"erc20Fee","type":"uint256"},{"internalType":"uint256","name":"platformFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"campaign_setter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256","name":"_dummyId","type":"uint256"},{"internalType":"uint256","name":"_powah","type":"uint256"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256[]","name":"_dummyIdArr","type":"uint256[]"},{"internalType":"uint256[]","name":"_powahArr","type":"uint256[]"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"claimBatch","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256[]","name":"_nftIDs","type":"uint256[]"},{"internalType":"uint256","name":"_dummyId","type":"uint256"},{"internalType":"uint256","name":"_powah","type":"uint256"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"forge","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"galaxy_signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"hasMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"address","name":"setter","type":"address"},{"internalType":"address","name":"contract_manager","type":"address"},{"internalType":"address","name":"treasury","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury_manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateCampaignSetter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateGalaxySigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newAddress","type":"address"}],"name":"updateTreasureManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(47683);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSpaceStationContract.ts


function useSpaceStationContract() {
    const { CONTRACT_ADDRESS  } = (0,evm_constants/* useSpaceStationGalaxyConstants */.gE)();
    return (0,useContract/* useContract */.cq)(CONTRACT_ADDRESS, SpaceStationGalaxy_namespaceObject);
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(15516);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSpaceStationContractClaimCallback.ts





function useSpaceStationContractClaimCallback(campaignInfo) {
    const account = (0,useAccount/* useAccount */.m)();
    const spaceStationContract = useSpaceStationContract();
    const { CONTRACT_ADDRESS  } = (0,evm_constants/* useSpaceStationGalaxyConstants */.gE)();
    const [claimState, setClaimState] = (0,useTransactionState/* useTransactionState */.p)();
    const claimCallback = (0,react.useCallback)(async ()=>{
        if (!CONTRACT_ADDRESS || !spaceStationContract || !campaignInfo) {
            setClaimState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setClaimState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        let useSignature = '';
        try {
            useSignature = await service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign(`${campaignInfo.name}

${campaignInfo.description}`, account);
        } catch (error1) {
            setClaimState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Not allowed to claim.')
            });
        }
        const { allow , signature , verifyIDs , nftCoreAddress , powahs  } = await getAccountClaimSignature(useSignature, account, campaignInfo.chain, campaignInfo.id);
        if (!allow) {
            setClaimState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Not allowed to claim.')
            });
        }
        const params = [
            campaignInfo.id,
            nftCoreAddress,
            verifyIDs[0],
            powahs[0],
            signature
        ];
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await spaceStationContract.methods.claim(...params).estimateGas({
                from: account
            }).catch((error)=>{
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        return new Promise(async (resolve, reject)=>{
            spaceStationContract.methods.claim(...params).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, async (hash)=>{
                const participated = await mutationParticipate(useSignature, account, campaignInfo.chain, campaignInfo.id, hash, verifyIDs);
                if (!participated) {
                    setClaimState({
                        type: types/* TransactionStateType.FAILED */.n$.FAILED,
                        error: new Error('Failed to claim')
                    });
                }
            }).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setClaimState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setClaimState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        campaignInfo,
        CONTRACT_ADDRESS,
        spaceStationContract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{}, [
        setClaimState
    ]);
    return [
        claimState,
        claimCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(98347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(39419);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(9228);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/NftAirdropCard.tsx














const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            color: '#fff',
            width: 496,
            padding: 20,
            borderRadius: 12,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: theme.spacing(1),
            background: 'linear-gradient(rgba(234, 69, 96, 1), rgba(255, 126, 172, 1))'
        },
        title: {
            fontSize: 20,
            fontWeight: 500,
            marginBottom: theme.spacing(1)
        },
        text: {
            fontSize: 16
        },
        subText: {
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: 4,
            marginTop: 4,
            fontSize: 14
        },
        claimTimeWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(1.5)
        },
        claimWrapper: {
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: theme.spacing(2),
            marginBottom: theme.spacing(0),
            marginRight: theme.spacing(1)
        },
        claimParent: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        },
        checkWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        nftImage: {
            width: '100%',
            borderRadius: 4
        },
        imgWrapper: {
            display: 'inline-block',
            width: 65,
            height: 85,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 5,
            marginBottom: theme.spacing(1)
        },
        gallery: {
            marginBottom: theme.spacing(0.5),
            whiteSpace: 'nowrap'
        },
        actionButton: {
            height: 30,
            minHeight: 30,
            width: 80,
            background: 'rgba(255, 255, 255, 0.2)',
            '&:hover': {
                background: 'rgba(255, 255, 255, 0.4)'
            },
            '&.Mui-disabled': {
                color: '#fff',
                opacity: 0.6,
                background: 'rgba(255, 255, 255, 0.2)'
            }
        },
        actionCheckButton: {
            height: 40,
            minHeight: 40,
            width: 130
        },
        connectWallet: {
            width: 200,
            minHeight: 30,
            whiteSpace: 'nowrap'
        },
        disabledButton: {
            color: '#fff'
        },
        address: {
            width: 340,
            color: '#fff',
            '& fieldset': {
                borderColor: '#fff !important'
            }
        },
        addressInput: {
            color: '#fff',
            padding: 13
        },
        chainBoundary: {
            display: 'none'
        },
        loading: {
            margin: theme.spacing(0, 1),
            color: 'rgba(255, 255, 255, 0.4)'
        },
        snackbarContent: {
            color: '#fff',
            display: 'flex',
            width: 250,
            marginLeft: theme.spacing(0.5),
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        snackbarTipContent: {
            display: 'flex',
            flexDirection: 'column'
        },
        snackbarTip: {
            fontSize: 13,
            display: 'flex',
            alignItems: 'self-start'
        },
        snackbarIcon: {
            marginLeft: theme.spacing(0.3),
            height: 17,
            width: 17,
            cursor: 'pointer'
        },
        whiteText: {
            color: '#fff'
        },
        closeIcon: {
            cursor: 'pointer'
        }
    })
);
function NftAirdropCard(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [checkAddress, setCheckAddress] = (0,react.useState)('');
    const now = Date.now();
    const { campaignInfos , loading , retry  } = props;
    const [spaceStationClaimableCount, setSpaceStationClaimableCount, spaceStationAccountClaimableCallback, spaceStationAccountClaimableLoading, ] = useSpaceStationClaimableTokenCountCallback();
    const account = (0,useAccount/* useAccount */.m)();
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const { classes  } = useStyles();
    const claimableCount = campaignInfos ? campaignInfos.reduce((acc, cur)=>{
        if (cur.claimableInfo.claimable) return acc + 1;
        return acc;
    }, 0) : 0;
    (0,react.useEffect)(()=>{
        setCheckAddress('');
        setSpaceStationClaimableCount(undefined);
    }, [
        account,
        currentChainId
    ]);
    (0,react.useEffect)(()=>{
        setSpaceStationClaimableCount(undefined);
    }, [
        checkAddress
    ]);
    return loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: 16,
            className: classes.loading
        })
    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                children: t('plugin_ito_launch_campaign')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.claimTimeWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.text,
                        children: t('wallet_airdrop_nft_unclaimed_title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.text,
                        children: now < campaignInfos[0].campaignInfo.startTime * 1000 ? t('plugin_airdrop_nft_start_time', {
                            date: (0,format/* default */.Z)(campaignInfos[0].campaignInfo.startTime * 1000, 'yyyy-MM-dd HH:mm')
                        }) : t('plugin_airdrop_nft_end_time', {
                            date: (0,format/* default */.Z)(campaignInfos[0].campaignInfo.endTime * 1000, 'yyyy-MM-dd HH:mm')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.claimParent,
                children: campaignInfos.map((v, i)=>{
                    return v.claimableInfo.claimable ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimItem, {
                            campaignInfo: v.campaignInfo,
                            claimed: v.claimableInfo.claimed,
                            retry: retry
                        })
                    }, i) : null;
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.text,
                children: [
                    t('plugin_ito_total_claimable_count'),
                    claimableCount,
                    " ",
                    claimableCount > 1 ? 'items' : 'item',
                    ","
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.subText,
                children: t('plugin_airdrop_nft_check_address')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.checkWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        value: checkAddress,
                        onChange: (e)=>setCheckAddress(e.target.value)
                        ,
                        className: classes.address,
                        InputProps: {
                            classes: {
                                input: classes.addressInput
                            }
                        },
                        placeholder: "Enter your wallet address"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                        disabled: spaceStationAccountClaimableLoading || checkAddress === '',
                        onClick: async ()=>spaceStationAccountClaimableCallback(checkAddress)
                        ,
                        classes: {
                            disabled: classes.disabledButton
                        },
                        className: classnames_default()(classes.actionButton, classes.actionCheckButton),
                        children: [
                            spaceStationAccountClaimableLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                size: 16,
                                className: classes.loading
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: t('plugin_airdrop_nft_check')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.text,
                children: spaceStationClaimableCount === undefined ? null : spaceStationClaimableCount ? t('plugin_airdrop_nft_number_to_claim', {
                    count: spaceStationClaimableCount,
                    name: spaceStationClaimableCount > 1 ? 'NFTs' : 'NFT'
                }) : t('plugin_airdrop_nft_none_to_claim')
            })
        ]
    });
}
function ClaimItem(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { campaignInfo , claimed , retry  } = props;
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const [claimState, claimCallback] = useSpaceStationContractClaimCallback(campaignInfo);
    const now = Date.now();
    const { classes  } = useStyles();
    const { showSnackbar , closeSnackbar  } = (0,theme_src/* useCustomSnackbar */.Ii)();
    const snackbarOptions = {
        preventDuplicate: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        }
    };
    (0,react.useEffect)(()=>{
        if (claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && claimState.no === 0) {
            showSnackbar(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.snackbarContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.snackbarTipContent,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t('plugin_airdrop_nft_claim_all')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.snackbarTip,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: t('plugin_airdrop_nft_claim_successful')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        className: classes.whiteText,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: (0,pipes/* resolveTransactionLinkOnExplorer */.z4)(types/* ChainId.Mumbai */.a_.Mumbai, claimState.receipt.transactionHash),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                            className: classes.snackbarIcon
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                        onClick: ()=>closeSnackbar()
                        ,
                        className: classes.closeIcon
                    })
                ]
            }), {
                variant: 'success',
                ...snackbarOptions
            });
            retry();
        } else if (claimState.type === types/* TransactionStateType.FAILED */.n$.FAILED) {
            showSnackbar(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.snackbarContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.snackbarTipContent,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t('plugin_airdrop_nft_claim_all')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.snackbarTip,
                                children: t('plugin_airdrop_nft_claim_failed')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                        onClick: ()=>closeSnackbar()
                        ,
                        className: classes.closeIcon
                    })
                ]
            }), {
                variant: 'error',
                ...snackbarOptions
            });
        }
    }, [
        claimState
    ]);
    const unClaimable = now < campaignInfo.startTime * 1000 || now > campaignInfo.endTime * 1000 || !(currentChainId === types/* ChainId.Matic */.a_.Matic) || claimed;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.claimWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.gallery,
                    children: campaignInfo.nfts.map((nft, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.imgWrapper,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: nft.image,
                                className: classes.nftImage
                            })
                        }, i)
                    )
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                        hideRiskWarningConfirmed: true,
                        classes: {
                            connectWallet: classnames_default()(classes.actionButton, classes.connectWallet),
                            gasFeeButton: classnames_default()(classes.actionButton, classes.connectWallet),
                            invalidButton: classnames_default()(classes.actionButton, classes.connectWallet),
                            unlockMetaMask: classnames_default()(classes.actionButton, classes.connectWallet)
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            disabled: claimState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING || claimState.type === types/* TransactionStateType.HASH */.n$.HASH || unClaimable,
                            loading: claimState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING || claimState.type === types/* TransactionStateType.HASH */.n$.HASH,
                            classes: {
                                disabled: classes.disabledButton
                            },
                            onClick: claimCallback,
                            className: classes.actionButton,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: claimed ? t('plugin_airdrop_nft_claimed') : now > campaignInfo.endTime * 1000 ? t('plugin_airdrop_nft_expired') : t('plugin_airdrop_nft_claim')
                            })
                        })
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/ITO/messages.ts
var ITO_messages = __webpack_require__(92425);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockNumber.ts
var useBlockNumber = __webpack_require__(98685);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimAll.ts




function useClaimAll(swapperAddress, chainId) {
    const allPoolsRef = (0,react.useRef)([]);
    (0,react.useEffect)(()=>{
        allPoolsRef.current = [];
    }, [
        chainId
    ]);
    const { value: blockNumber = 0  } = (0,useBlockNumber/* useBlockNumber */.O)(chainId);
    const asyncResult = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (allPoolsRef.current.length > 0) return allPoolsRef.current;
        const results = await ITO_messages/* PluginITO_RPC.getClaimAllPools */.k.getClaimAllPools(chainId, blockNumber, swapperAddress);
        allPoolsRef.current = results;
        return allPoolsRef.current;
    }, [
        swapperAddress,
        blockNumber,
        chainId
    ]);
    return {
        ...asyncResult,
        retry: ()=>{
            allPoolsRef.current = [];
            asyncResult.retry();
        }
    };
}

// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimCallback.ts
var useClaimCallback = __webpack_require__(97943);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(41460);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ClaimAllDialog.tsx























const ClaimAllDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        wrapper: {
            paddingBottom: '0px !important',
            paddingTop: '0px !important'
        },
        actionButton: {
            margin: '0 auto',
            minHeight: 'auto',
            width: '100%',
            fontSize: 18,
            fontWeight: 400
        },
        footer: {
            marginTop: theme.spacing(2),
            zIndex: 1
        },
        footnote: {
            fontSize: 10,
            marginRight: theme.spacing(1)
        },
        footLink: {
            cursor: 'pointer',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            }
        },
        tokenCardWrapper: {
            width: '100%',
            color: 'white',
            overflow: 'auto',
            paddingTop: theme.spacing(1),
            marginBottom: theme.spacing(0.5)
        },
        tokenCard: {
            width: 535,
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white',
            flexDirection: 'column',
            padding: 0,
            marginBottom: theme.spacing(1.5),
            alignItems: 'baseline',
            justifyContent: 'space-between'
        },
        cardHeader: {
            display: 'flex',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            height: 42,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            '-webkit-font-smoothing': 'antialiased',
            fontSize: 14
        },
        cardHeaderLocked: {
            background: theme.palette.mode === 'light' ? '#EBEEF0' : '#2F3336',
            color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
        },
        cardHeaderClaimable: {
            background: '#77E0B5',
            color: 'white'
        },
        cardContent: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            height: 62,
            fontSize: 18
        },
        cardContentLocked: {
            background: theme.palette.mode === 'light' ? 'white' : '',
            border: `1px solid ${theme.palette.mode === 'light' ? '#EBEEF0' : '#2F3336'}`
        },
        cardContentClaimable: {
            background: 'rgba(119, 224, 181, 0.1)',
            border: '1px solid rgba(56, 221, 192, 0.4)'
        },
        content: {
            marginBottom: theme.spacing(2)
        },
        contentTitle: {
            fontSize: 18,
            fontWeight: 300
        },
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300
        },
        tabs: {
            width: 536,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4,
            backgroundColor: theme.palette.background.default,
            '& .Mui-selected': {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main
            }
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'column',
            height: props.shortITOwrapper ? 450 : 650
        },
        actionButtonWrapper: {
            position: 'sticky',
            width: '100%',
            marginTop: 'auto',
            bottom: 0,
            zIndex: 2,
            paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        emptyContentWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 350
        },
        lockIcon: {
            width: 22,
            height: 22,
            marginRight: 6
        },
        textWrapper: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: theme.spacing(1.5)
        },
        unlockTime: {
            marginRight: theme.spacing(1.5)
        },
        tokenBalance: {
            marginLeft: theme.spacing(1.5),
            color: theme.palette.mode === 'light' ? '#15181B' : '#D9D9D9'
        },
        tokenSymbol: {
            color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
        },
        snackbarSuccess: {
            backgroundColor: '#77E0B5'
        },
        snackbarError: {
            backgroundColor: '#FF5555'
        },
        abstractTabWrapper: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 2,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        claimAllButton: {}
    })
);
function ClaimAllDialog(props) {
    var ref, ref1;
    const { t: t1  } = (0,utils/* useI18N */.M1)();
    const { open , onClose  } = props;
    const ITO_Definition = (0,plugin_infra_src/* useActivatedPlugin */.Rc)(plugin_infra_src/* PluginId.ITO */.je.ITO, 'any');
    const pluginId = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    var ref2;
    const chainIdList = (ref2 = (ref = ITO_Definition === null || ITO_Definition === void 0 ? void 0 : ITO_Definition.enableRequirement.web3) === null || ref === void 0 ? void 0 : (ref1 = ref[pluginId]) === null || ref1 === void 0 ? void 0 : ref1.supportedChainIds) !== null && ref2 !== void 0 ? ref2 : [];
    const DialogRef = (0,react.useRef)(null);
    const account = (0,useAccount/* useAccount */.m)();
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const { value: campaignInfos , loading: loadingAirdrop , retry: retryAirdrop ,  } = useSpaceStationCampaignInfo(account, shared/* Flags.nft_airdrop_enabled */.vU.nft_airdrop_enabled);
    const [chainId, setChainId] = (0,react.useState)(chainIdList.includes(currentChainId) ? currentChainId : types/* ChainId.Mainnet */.a_.Mainnet);
    const { value: _swappedTokens , loading: _loading , retry  } = useClaimAll(account, chainId);
    const { value: swappedTokensWithDetailed = [] , loading: loadingTokenDetailed  } = (0,useERC20TokenDetailed/* useFungibleTokensDetailed */.b)((_swappedTokens !== null && _swappedTokens !== void 0 ? _swappedTokens : []).map((t)=>({
            address: t.token.address,
            type: types/* EthereumTokenType.ERC20 */.Dr.ERC20
        })
    ), chainId);
    const loading = _loading || loadingTokenDetailed;
    const swappedTokens = _swappedTokens === null || _swappedTokens === void 0 ? void 0 : _swappedTokens.map((t)=>{
        const tokenDetailed = swappedTokensWithDetailed.find((v)=>(0,address/* isSameAddress */.Wr)(t.token.address, v.address)
        );
        if (tokenDetailed) t.token = tokenDetailed;
        return t;
    });
    const { ITO2_CONTRACT_ADDRESS  } = (0,evm_constants/* useITOConstants */.mg)(chainId);
    const claimablePids = (0,uniq/* default */.Z)((0,flatten/* default */.Z)(swappedTokens === null || swappedTokens === void 0 ? void 0 : swappedTokens.filter((t)=>t.isClaimable
    ).map((t)=>t.pids
    )));
    const [claimState, claimCallback, resetClaimCallback] = (0,useClaimCallback/* useClaimCallback */.N)(claimablePids, ITO2_CONTRACT_ADDRESS);
    const showNftAirdrop = chainId === types/* ChainId.Matic */.a_.Matic && campaignInfos && shared/* Flags.nft_airdrop_enabled */.vU.nft_airdrop_enabled;
    const { classes  } = ClaimAllDialog_useStyles({
        shortITOwrapper: showNftAirdrop && (!swappedTokens || swappedTokens.length === 0) || !showNftAirdrop
    });
    const [initLoading, setInitLoading] = (0,react.useState)(true);
    (0,react.useLayoutEffect)(()=>{
        setTimeout(()=>setInitLoading(false)
        , 1000);
    }, []);
    const onClaimButtonClick = (0,react.useCallback)(()=>{
        claimCallback();
    }, [
        claimCallback,
        chainId
    ]);
    const { setDialog: setClaimTransactionDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) {
            resetClaimCallback();
            retry();
        }
    });
    (0,react.useEffect)(()=>{
        resetClaimCallback();
    }, [
        chainId
    ]);
    (0,react.useEffect)(()=>{
        if (claimState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        if (claimState.type === types/* TransactionStateType.FAILED */.n$.FAILED) {
            setClaimTransactionDialog({
                open: false
            });
            return;
        }
        if (claimState.type === types/* TransactionStateType.HASH */.n$.HASH) {
            const { hash  } = claimState;
            setTimeout(()=>{
                window.open((0,pipes/* resolveTransactionLinkOnExplorer */.z4)(chainId, hash), '_blank', 'noopener noreferrer');
            }, 2000);
            return;
        }
        const claimableTokens = swappedTokens === null || swappedTokens === void 0 ? void 0 : swappedTokens.filter((t)=>t.isClaimable
        );
        const summary = claimableTokens ? 'Claim ' + new Intl.ListFormat('en').format(claimableTokens.map((t)=>(0,formatter/* formatBalance */.az)(t.amount, t.token.decimals) + ' ' + t.token.symbol
        )) : '';
        setClaimTransactionDialog({
            open: true,
            state: claimState,
            title: t1('plugin_ito_claim_all_title'),
            summary
        });
    }, [
        claimState,
        swappedTokens /* update tx dialog only if state changed */ 
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* SnackbarProvider */.wT, {
        domRoot: DialogRef.current,
        classes: {
            variantSuccess: classes.snackbarSuccess,
            variantError: classes.snackbarError
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            onClose: onClose,
            title: t1('plugin_ito_claim_all_dialog_title'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.walletStatusBox,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.abstractTabWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                            chainId: chainId,
                            setChainId: setChainId,
                            classes: classes,
                            chains: chainIdList
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.contentWrapper,
                        ref: DialogRef,
                        children: [
                            (showNftAirdrop || loadingAirdrop) && chainId === types/* ChainId.Matic */.a_.Matic && shared/* Flags.nft_airdrop_enabled */.vU.nft_airdrop_enabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NftAirdropCard, {
                                campaignInfos: campaignInfos,
                                loading: loadingAirdrop,
                                retry: retryAirdrop
                            }) : null,
                            loading || initLoading || !swappedTokens ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.emptyContentWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                    size: 24
                                })
                            }) : swappedTokens.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.content,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {
                                    swappedTokens: swappedTokens,
                                    chainId: chainId
                                })
                            }) : !showNftAirdrop && !loadingAirdrop ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.emptyContentWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    children: [
                                        t1('plugin_ito_no_claimable_token'),
                                        " "
                                    ]
                                })
                            }) : null,
                            swappedTokens && swappedTokens.length > 0 || chainId === types/* ChainId.Matic */.a_.Matic && shared/* Flags.nft_airdrop_enabled */.vU.nft_airdrop_enabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.actionButtonWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                                    chainId: chainId,
                                    classes: {
                                        switchButton: classes.claimAllButton
                                    },
                                    noSwitchNetworkTip: true,
                                    switchButtonStyle: {
                                        minHeight: 'auto',
                                        width: 540,
                                        fontSize: 18,
                                        fontWeight: 400
                                    },
                                    children: (swappedTokens === null || swappedTokens === void 0 ? void 0 : swappedTokens.length) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                                        classes: {
                                            connectWallet: classes.claimAllButton
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                            className: classnames_default()(classes.actionButton, classes.claimAllButton),
                                            variant: "contained",
                                            loading: [
                                                types/* TransactionStateType.HASH */.n$.HASH,
                                                types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING, 
                                            ].includes(claimState.type),
                                            disabled: claimablePids.length === 0 || [
                                                types/* TransactionStateType.HASH */.n$.HASH,
                                                types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING, 
                                            ].includes(claimState.type),
                                            size: "large",
                                            onClick: onClaimButtonClick,
                                            children: t1('plugin_ito_claim_all')
                                        })
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                                })
                            }) : null
                        ]
                    })
                ]
            })
        })
    }));
}
function Content(props) {
    const { classes  } = ClaimAllDialog_useStyles({
        shortITOwrapper: false
    });
    const { swappedTokens , chainId  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: classes.tokenCardWrapper,
        children: swappedTokens.map((swappedToken, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwappedToken, {
                    i: i,
                    swappedToken: swappedToken,
                    chainId: chainId
                })
            }, i)
        )
    }));
}
function SwappedToken({ i , swappedToken , chainId  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes  } = ClaimAllDialog_useStyles({
        shortITOwrapper: false
    });
    const { value: token  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(swappedToken.token.address, undefined, chainId);
    return token ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.tokenCard,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()(classes.cardHeader, swappedToken.isClaimable ? classes.cardHeaderClaimable : classes.cardHeaderLocked),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.textWrapper,
                        children: [
                            swappedToken.isClaimable ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.lockIcon,
                                src: theme.palette.mode === 'light' ? new URL(/* asset import */ __webpack_require__(96344), __webpack_require__.b).toString() : new URL(/* asset import */ __webpack_require__(15515), __webpack_require__.b).toString()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                children: [
                                    token.symbol,
                                    ' ',
                                    swappedToken.isClaimable ? t('plugin_ito_claim_all_status_unclaimed') : t('plugin_ito_claim_all_status_locked'),
                                    ":"
                                ]
                            })
                        ]
                    }),
                    swappedToken.isClaimable ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.unlockTime,
                        children: t('plugin_ito_claim_all_unlock_time', {
                            time: (0,format/* default */.Z)(swappedToken.unlockTime, 'yyyy-MM-dd HH:mm:ss')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classnames_default()(classes.cardContent, swappedToken.isClaimable ? classes.cardContentClaimable : classes.cardContentLocked),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedBalance */.BV, {
                    classes: {
                        balance: classes.tokenBalance,
                        symbol: classes.tokenSymbol
                    },
                    value: swappedToken.amount,
                    decimals: token.decimals,
                    symbol: token.symbol,
                    formatter: formatter/* formatBalance */.az
                })
            })
        ]
    }, i) : null;
}

;// CONCATENATED MODULE: ./src/components/shared/EntrySecondLevelDialog.tsx






const EntrySecondLevelDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2, 3, 3),
            minHeight: 491
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
function EntrySecondLevelDialog(props) {
    const { classes  } = EntrySecondLevelDialog_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: props.title,
        open: props.open,
        onClose: props.closeDialog,
        maxWidth: "sm",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationBoard, {
                    secondEntries: props.entries,
                    secondEntryChainTabs: props.chains
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(32637);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(9094);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./utils-pure/index.ts + 3 modules
var utils_pure = __webpack_require__(49613);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts + 46 modules
var useAllProviderTradeContext = __webpack_require__(28727);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(17508);
;// CONCATENATED MODULE: ./src/plugins/Savings/types.ts
var ProtocolCategory;
(function(ProtocolCategory) {
    ProtocolCategory["ETH"] = 'eth';
})(ProtocolCategory || (ProtocolCategory = {}));
var ProtocolType;
(function(ProtocolType) {
    ProtocolType[ProtocolType["Lido"] = 0] = "Lido";
})(ProtocolType || (ProtocolType = {}));
var TabType;
(function(TabType) {
    TabType["Deposit"] = 'deposit';
    TabType["Withdraw"] = 'withdraw';
})(TabType || (TabType = {}));

// EXTERNAL MODULE: ../web3-shared/evm/constants/specific.ts
var specific = __webpack_require__(91683);
;// CONCATENATED MODULE: ../web3-contracts/abis/Lido.json
const Lido_namespaceObject = JSON.parse('[{"constant":false,"inputs":[],"name":"resume","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"hasInitialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"depositContract","type":"address"},{"name":"_oracle","type":"address"},{"name":"_operators","type":"address"},{"name":"_treasury","type":"address"},{"name":"_insuranceFund","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInsuranceFund","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethAmount","type":"uint256"}],"name":"getSharesByPooledEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sender","type":"address"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_script","type":"bytes"}],"name":"getEVMScriptExecutor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getRecoveryVault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEPOSIT_SIZE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalPooledEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PAUSE_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTreasury","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SET_ORACLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isStopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MANAGE_WITHDRAWAL_KEY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBufferedEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SIGNATURE_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getWithdrawalCredentials","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFeeDistribution","outputs":[{"name":"treasuryFeeBasisPoints","type":"uint16"},{"name":"insuranceFeeBasisPoints","type":"uint16"},{"name":"operatorsFeeBasisPoints","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sharesAmount","type":"uint256"}],"name":"getPooledEthByShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"}],"name":"setOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"allowRecoverability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInitializationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_treasuryFeeBasisPoints","type":"uint16"},{"name":"_insuranceFeeBasisPoints","type":"uint16"},{"name":"_operatorsFeeBasisPoints","type":"uint16"}],"name":"setFeeDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_feeBasisPoints","type":"uint16"}],"name":"setFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_maxDeposits","type":"uint256"}],"name":"depositBufferedEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"MANAGE_FEE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"transferToVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SET_TREASURY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sender","type":"address"},{"name":"_role","type":"bytes32"},{"name":"_params","type":"uint256[]"}],"name":"canPerform","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_referral","type":"address"}],"name":"submit","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAWAL_CREDENTIALS_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getEVMScriptRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PUBKEY_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_pubkeyHash","type":"bytes32"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDepositContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBeaconStat","outputs":[{"name":"depositedValidators","type":"uint256"},{"name":"beaconValidators","type":"uint256"},{"name":"beaconBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BURN_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_insuranceFund","type":"address"}],"name":"setInsuranceFund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFee","outputs":[{"name":"feeBasisPoints","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SET_INSURANCE_FUND","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isPetrified","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_withdrawalCredentials","type":"bytes32"}],"name":"setWithdrawalCredentials","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositBufferedEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_sharesAmount","type":"uint256"}],"name":"burnShares","outputs":[{"name":"newTotalShares","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_treasury","type":"address"}],"name":"setTreasury","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_beaconValidators","type":"uint256"},{"name":"_beaconBalance","type":"uint256"}],"name":"pushBeacon","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"sharesOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"executor","type":"address"},{"indexed":false,"name":"script","type":"bytes"},{"indexed":false,"name":"input","type":"bytes"},{"indexed":false,"name":"returnData","type":"bytes"}],"name":"ScriptResult","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"vault","type":"address"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RecoverToVault","type":"event"},{"anonymous":false,"inputs":[],"name":"Stopped","type":"event"},{"anonymous":false,"inputs":[],"name":"Resumed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint16"}],"name":"FeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"treasuryFeeBasisPoints","type":"uint16"},{"indexed":false,"name":"insuranceFeeBasisPoints","type":"uint16"},{"indexed":false,"name":"operatorsFeeBasisPoints","type":"uint16"}],"name":"FeeDistributionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"withdrawalCredentials","type":"bytes32"}],"name":"WithdrawalCredentialsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"referral","type":"address"}],"name":"Submitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Unbuffered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"tokenAmount","type":"uint256"},{"indexed":false,"name":"sentFromBuffer","type":"uint256"},{"indexed":true,"name":"pubkeyHash","type":"bytes32"},{"indexed":false,"name":"etherAmount","type":"uint256"}],"name":"Withdrawal","type":"event"}]');
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ./src/plugins/Savings/protocols/LDOProtocol.ts




const LidoContracts = {
    [types/* ChainId.Mainnet */.a_.Mainnet]: {
        type: types/* EthereumTokenType.ERC20 */.Dr.ERC20,
        chainName: 'Ethereum',
        ldoContract: (0,evm_constants/* getSavingsConstants */.xy)(types/* ChainId.Mainnet */.a_.Mainnet).LIDO || specific/* ZERO_ADDRESS */.r_,
        stEthContract: (0,evm_constants/* getSavingsConstants */.xy)(types/* ChainId.Mainnet */.a_.Mainnet).LIDO_STETH || specific/* ZERO_ADDRESS */.r_
    },
    [types/* ChainId.Gorli */.a_.Gorli]: {
        type: types/* EthereumTokenType.ERC20 */.Dr.ERC20,
        chainName: 'Gorli',
        ldoContract: (0,evm_constants/* getSavingsConstants */.xy)(types/* ChainId.Gorli */.a_.Gorli).LIDO || specific/* ZERO_ADDRESS */.r_,
        stEthContract: (0,evm_constants/* getSavingsConstants */.xy)(types/* ChainId.Gorli */.a_.Gorli).LIDO_STETH || specific/* ZERO_ADDRESS */.r_
    }
};
class LidoProtocol {
    getFungibleTokenDetails(chainId) {
        let contractAddress = '';
        for (const network of this.availableNetworks){
            if (network.chainId === chainId) {
                contractAddress = network.contractAddress;
            }
        }
        return {
            type: 1,
            chainId: chainId,
            address: contractAddress,
            symbol: 'stETH',
            decimals: 18,
            name: 'Liquid staked Ether 2.0',
            logoURI: [
                'https://static.debank.com/image/eth_token/logo_url/0xae7ab96520de3a18e5e111b5eaab095312d7fe84/f768023f77be7a2ea23c37f25b272048.png',
                'https://tokens.1inch.io/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png', 
            ]
        };
    }
    async getApr() {
        try {
            const LidoAprUrl = 'https://cors.r2d2.to/?https://stake.lido.fi/api/steth-apr';
            const response = await fetch(LidoAprUrl);
            const apr = await response.text();
            this.apr = apr;
            return apr;
        } catch (error) {
            console.log('LDO `getApr()` error', error);
            // Default APR is 5.30%
            this.apr = '5.30';
            return '5.30';
        }
    }
    async getBalance(chainId, web3, account) {
        try {
            const contract = (0,useContract/* createContract */.OP)(web3, (0,evm_constants/* getSavingsConstants */.xy)(chainId).LIDO_STETH || specific/* ZERO_ADDRESS */.r_, Lido_namespaceObject);
            const balance = await (contract === null || contract === void 0 ? void 0 : contract.methods.balanceOf(account).call());
            this.balance = new (bignumber_default())(balance || '0');
            return this.balance;
        } catch (error) {
            console.log('LDO `getBalance()` error', error);
            this.balance = new (bignumber_default())('0');
            return this.balance;
        }
    }
    async depositEstimate(account, chainId, web3, value) {
        try {
            const contract = (0,useContract/* createContract */.OP)(web3, (0,evm_constants/* getSavingsConstants */.xy)(chainId).LIDO_STETH || specific/* ZERO_ADDRESS */.r_, Lido_namespaceObject);
            const gasEstimate = await (contract === null || contract === void 0 ? void 0 : contract.methods.submit((0,evm_constants/* getSavingsConstants */.xy)(chainId).LIDO_REFERRAL_ADDRESS || specific/* ZERO_ADDRESS */.r_).estimateGas({
                from: account,
                value: value.toString()
            }));
            return new (bignumber_default())(gasEstimate || 0);
        } catch (error) {
            console.error('LDO `depositEstimate()` Error', error);
            return new (bignumber_default())(0);
        }
    }
    async deposit(account, chainId, web3, value) {
        try {
            const contract = (0,useContract/* createContract */.OP)(web3, (0,evm_constants/* getSavingsConstants */.xy)(chainId).LIDO_STETH || specific/* ZERO_ADDRESS */.r_, Lido_namespaceObject);
            await (contract === null || contract === void 0 ? void 0 : contract.methods.submit((0,evm_constants/* getSavingsConstants */.xy)(chainId).LIDO_REFERRAL_ADDRESS || specific/* ZERO_ADDRESS */.r_).send({
                from: account,
                value: value.toString(),
                gas: 300000
            }));
            return true;
        } catch (error) {
            console.error('LDO `deposit()` Error', error);
            return false;
        }
    }
    async withdrawEstimate(account, chainId, web3, value) {
        return new (bignumber_default())('0');
    }
    async withdraw(account, chainId, web3, value) {
        /*
         * @TODO: Implement withdraw when stETH Beacon Chain allows for withdraws
         *
         * Review: https://github.com/lidofinance/lido-dao when ETH 2.0 is implemented.
         *
         * For now, just redirect to swap plugin
         *
         * await contract.methods
         *     .withdraw(inputTokenTradeAmount, '0x0000000000000000000000000000000000000000')
         *     .send({
         *         from: account,
         *         gasLimit: 2100000,
         *     })
         */ return false;
    }
    constructor(){
        this.category = ProtocolCategory.ETH;
        this.type = ProtocolType.Lido;
        this.name = 'Lido';
        this.image = 'lido';
        this.base = 'ETH';
        this.pair = 'stETH';
        this.decimals = 18;
        this.apr = '0.00';
        this.balance = new (bignumber_default())('0');
        this.availableNetworks = [
            {
                chainId: types/* ChainId.Mainnet */.a_.Mainnet,
                chainName: 'Ethereum',
                contractAddress: (0,evm_constants/* getSavingsConstants */.xy)(types/* ChainId.Mainnet */.a_.Mainnet).LIDO_STETH || specific/* ZERO_ADDRESS */.r_
            },
            {
                chainId: types/* ChainId.Gorli */.a_.Gorli,
                chainName: 'Gorli',
                contractAddress: (0,evm_constants/* getSavingsConstants */.xy)(types/* ChainId.Gorli */.a_.Gorli).LIDO_STETH || specific/* ZERO_ADDRESS */.r_
            }, 
        ];
    }
}
/* harmony default export */ const LDOProtocol = (new LidoProtocol());

;// CONCATENATED MODULE: ./src/plugins/Savings/protocols/index.ts

const SavingsProtocols = [
    LDOProtocol
];

;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsDialogStyles.tsx

const SavingsDialogStyles_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        abstractTabWrapper: {
            width: '100%',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2)
        },
        tableTabWrapper: {
            padding: theme.spacing(2)
        },
        tab: {
            height: 36,
            minHeight: 36,
            backgroundColor: isDashboard ? `${theme_src/* MaskColorVar.primaryBackground2 */.ZN.primaryBackground2}!important` : undefined
        },
        tabPaper: {
            backgroundColor: 'inherit'
        },
        tabs: {
            width: 535,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4,
            '& .Mui-selected': {
                color: '#ffffff',
                backgroundColor: `${theme.palette.primary.main}!important`
            }
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        content: {
            paddingTop: 0,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        savingsRoot: {
            width: 535,
            margin: 'auto'
        }
    })
);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(44939);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(26901);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(91339);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/IconURL.tsx
const IconURLs = {
    lido: new URL(/* asset import */ __webpack_require__(5337), __webpack_require__.b).toString(),
    eth: new URL(/* asset import */ __webpack_require__(5713), __webpack_require__.b).toString()
};

;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsTable.tsx











const SavingsTable_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        containerWrap: {
            fontFamily: theme.typography.fontFamily
        },
        tableHeader: {
            display: 'flex',
            background: theme.palette.mode === 'light' ? '#F6F8F8' : '#17191D',
            borderRadius: '8px',
            margin: '0 0 15px 0'
        },
        tableRow: {
            display: 'flex',
            background: theme.palette.mode === 'light' ? '#F6F8F8' : '#17191D',
            borderRadius: '8px'
        },
        tableItem: {
            display: 'flex',
            background: theme.palette.mode === 'light' ? '#F6F8F8' : '#17191D',
            borderRadius: '8px'
        },
        tableCell: {
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            fontSize: '14px'
        },
        logoWrap: {
            position: 'relative',
            margin: '0 20px 0 0'
        },
        logo: {
            height: '32px'
        },
        logoMini: {
            height: '16px',
            position: 'absolute',
            bottom: '3px',
            right: '-5px'
        },
        protocolLabel: {
            fontSize: 12,
            opacity: 0.5
        }
    })
);
function SavingsTable({ chainId , tab , mappableProtocols , setSelectedProtocol , setTab  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = SavingsTable_useStyles();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    // Only fetch protocol APR and Balance on chainId change
    (0,useAsync/* default */.Z)(async ()=>{
        for (const protocol of SavingsProtocols){
            await protocol.getApr();
            await protocol.getBalance(chainId, web3, account);
        }
    }, [
        chainId
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.containerWrap,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                spacing: 0,
                className: classes.tableHeader,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t('plugin_savings_type')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 2,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            variant: "body1",
                            children: [
                                " ",
                                t('plugin_savings_apr')
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 3,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t('plugin_savings_wallet')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 3,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t('plugin_savings_operation')
                        })
                    })
                ]
            }),
            mappableProtocols.map((categorizedProtocol)=>{
                const protocols = categorizedProtocol.protocols;
                if (protocols.length === 1) {
                    const protocol = protocols[0];
                    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        spacing: 0,
                        className: classes.tableRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                item: true,
                                xs: 4,
                                className: classes.tableCell,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.logoWrap,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                src: IconURLs[protocol.category],
                                                className: classes.logo
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                src: IconURLs[protocol.image],
                                                className: classes.logoMini
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body1",
                                                children: protocol.category.toUpperCase()
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body1",
                                                className: classes.protocolLabel,
                                                children: protocol.name
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 2,
                                className: classes.tableCell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    children: [
                                        protocol.apr,
                                        "%"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 3,
                                className: classes.tableCell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedBalance */.BV, {
                                        value: protocol.balance,
                                        decimals: protocol.decimals,
                                        significant: 6,
                                        minimumBalance: (0,base_src/* rightShift */.pu)(10, protocol.decimals - 6),
                                        formatter: formatter/* formatBalance */.az
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 3,
                                className: classes.tableCell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "contained",
                                    color: "primary",
                                    disabled: tab === TabType.Withdraw ? (0,base_src/* isZero */.Fr)(protocol.balance) : false,
                                    onClick: ()=>{
                                        setSelectedProtocol(protocol.type);
                                        setTab(tab);
                                    },
                                    children: tab === TabType.Deposit ? t('plugin_savings_deposit') : t('plugin_savings_withdraw')
                                })
                            })
                        ]
                    }, protocol.type));
                } else {
                    /*
                     *
                     * @TODO: Add mappable protocols with chevron to toggle
                     * currency pairs to expand and collapse as according to Figma
                     *
                     * Reference:
                     * https://www.figma.com/file/gVkQ67y285b4FXVV1KPThN/TwitterV1?node-id=17600%3A374185
                     *
                     */ return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}));
                }
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(48981);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(53106);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(29187);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsFormStyles.tsx

const SavingsFormStyles_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        containerWrap: {
            padding: '0 15px',
            fontFamily: theme.typography.fontFamily
        },
        inputWrap: {
            position: 'relative',
            width: '100%',
            margin: '0 0 10px 0'
        },
        inputTextField: {
            padding: '15px 10px 0px 10px',
            fontSize: '18px'
        },
        maxChip: {
            height: '20px',
            borderRadius: '3px',
            margin: '0 5px 10px 0'
        },
        selectTokenChip: {
            margin: '0 0 10px 0'
        },
        tokenValueUSD: {
            padding: '0 0 10px 0'
        },
        infoRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 0 15px 0'
        },
        infoRowLeft: {
            display: 'flex',
            alignItems: 'center'
        },
        infoRowRight: {
            fontWeight: 'bold'
        },
        rowImage: {
            height: '24px',
            margin: '0 5px 0 0'
        },
        button: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            borderRadius: 24,
            height: 'auto',
            marginTop: '0px !important'
        },
        disabledButton: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            borderRadius: 24,
            height: 'auto'
        },
        connectWallet: {
            marginTop: 0
        },
        tooltip: {
            backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            color: theme.palette.mode === 'dark' ? '#7B8192' : '#ffffff',
            borderRadius: 8,
            padding: 16,
            textAlign: 'left',
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 500
        },
        tooltipArrow: {
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000'
        },
        gasFee: {
            padding: '0 0 0 5px',
            fontSize: 11,
            opacity: 0.5
        }
    })
);

;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsForm.tsx



















function SavingsForm({ chainId , selectedProtocol , tab , onClose , onSwapDialogOpen  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = SavingsFormStyles_useStyles();
    const protocol = SavingsProtocols[selectedProtocol];
    const targetChainId = chainId;
    const { value: nativeTokenDetailed  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const [inputAmount, setInputAmount] = (0,react.useState)('');
    const [estimatedGas, setEstimatedGas] = (0,react.useState)(new (bignumber_default())('0'));
    const [loading, setLoading] = (0,react.useState)(false);
    const { value: nativeTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(types/* EthereumTokenType.Native */.Dr.Native, '', targetChainId);
    // #region form variables
    const tokenAmount = (0,react.useMemo)(()=>new (bignumber_default())((0,base_src/* rightShift */.pu)(inputAmount || '0', 18))
    , [
        inputAmount
    ]);
    const inputAsBN = (0,react.useMemo)(()=>new (bignumber_default())((0,base_src/* rightShift */.pu)(inputAmount, 18))
    , [
        inputAmount
    ]);
    const balanceAsBN = (0,react.useMemo)(()=>TabType.Deposit ? new (bignumber_default())(nativeTokenBalance || '0') : protocol.balance
    , [
        nativeTokenBalance,
        protocol.balance
    ]);
    (0,useAsync/* default */.Z)(async ()=>{
        if (!(inputAsBN.toNumber() > 0)) return;
        setLoading(true);
        const gasEstimate = tab === TabType.Deposit ? await protocol.depositEstimate(account, targetChainId, web3, inputAsBN) : await protocol.withdrawEstimate(account, targetChainId, web3, inputAsBN);
        setEstimatedGas(gasEstimate);
        setLoading(false);
    }, [
        protocol,
        chainId,
        inputAmount
    ]);
    // #endregion
    // #region form validation
    const validationMessage = (0,react.useMemo)(()=>{
        if (tokenAmount.isZero() || !inputAmount) return t('plugin_trader_error_amount_absence');
        if ((0,base_src/* isLessThan */.FI)(inputAsBN, 0)) return t('plugin_trade_error_input_amount_less_minimum_amount');
        if ((0,base_src/* isLessThan */.FI)(balanceAsBN.minus(estimatedGas), tokenAmount)) {
            return t('plugin_trader_error_insufficient_balance', {
                symbol: tab === TabType.Deposit ? protocol.base : protocol.pair
            });
        }
        return '';
    }, [
        inputAmount,
        tokenAmount,
        nativeTokenBalance,
        balanceAsBN
    ]);
    const tokenPrice = (0,useTokenPrice/* useTokenPrice */.p)(chainId, undefined);
    const tokenValueUSD = (0,react.useMemo)(()=>inputAmount ? new (bignumber_default())(inputAmount).times(tokenPrice).toFixed(2) : '0'
    , [
        inputAmount,
        tokenPrice
    ]);
    // #endregion
    // #region trade state
    const { tradeState: [_, dispatchTradeStore] ,  } = useAllProviderTradeContext/* AllProviderTradeContext.useContainer */.TX.useContainer();
    // #endregion
    const needsSwap = protocol.type === ProtocolType.Lido && tab === TabType.Withdraw;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.containerWrap,
        children: [
            needsSwap ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.inputWrap,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenAmountPanel */.xl, {
                            amount: inputAmount,
                            maxAmount: balanceAsBN.minus(estimatedGas).toString(),
                            balance: balanceAsBN.toString(),
                            label: t('plugin_savings_amount'),
                            token: nativeTokenDetailed,
                            onAmountChange: setInputAmount,
                            InputProps: {
                                classes: {
                                    root: classes.inputTextField
                                }
                            },
                            MaxChipProps: {
                                classes: {
                                    root: classes.maxChip
                                }
                            },
                            SelectTokenChip: {
                                ChipProps: {
                                    classes: {
                                        root: classes.selectTokenChip
                                    }
                                }
                            }
                        })
                    }),
                    loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        textAlign: "right",
                        className: classes.tokenValueUSD,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* LoadingAnimation */.p6, {
                            width: 16,
                            height: 16
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        textAlign: "right",
                        className: classes.tokenValueUSD,
                        children: [
                            "≈ ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedCurrency */.bO, {
                                value: tokenValueUSD,
                                sign: "$",
                                formatter: formatter/* formatCurrency */.xG
                            }),
                            estimatedGas > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: classes.gasFee,
                                children: [
                                    "+ ",
                                    (0,formatter/* formatBalance */.az)(estimatedGas, 18),
                                    " ETH"
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.infoRow,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.infoRowLeft,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: IconURLs[protocol.image],
                                className: classes.rowImage
                            }),
                            protocol.pair,
                            " ",
                            t('plugin_savings_apr'),
                            "%"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.infoRowRight,
                        children: [
                            protocol.apr,
                            "%"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                chainId: targetChainId,
                noSwitchNetworkTip: true,
                disablePadding: true,
                ActionButtonPromiseProps: {
                    fullWidth: true,
                    classes: {
                        root: classes.button,
                        disabled: classes.disabledButton
                    },
                    color: 'primary',
                    style: {
                        padding: '13px 0',
                        marginTop: 0
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    ActionButtonProps: {
                        color: 'primary',
                        classes: {
                            root: classes.button
                        }
                    },
                    classes: {
                        connectWallet: classes.connectWallet,
                        button: classes.button
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                        fullWidth: true,
                        color: "primary",
                        size: "large",
                        variant: "contained",
                        init: needsSwap ? 'Swap ' + protocol.pair : validationMessage || (tab === TabType.Deposit ? t('plugin_savings_deposit') + ' ' + protocol.base : t('plugin_savings_withdraw') + ' ' + protocol.pair),
                        waiting: TabType.Deposit ? t('plugin_savings_process_deposit') : t('plugin_savings_process_withdraw'),
                        failed: t('failed'),
                        failedOnClick: "use executor",
                        complete: t('done'),
                        disabled: validationMessage !== '' && !needsSwap,
                        noUpdateEffect: true,
                        executor: async ()=>{
                            switch(tab){
                                case TabType.Deposit:
                                    if (!await protocol.deposit(account, targetChainId, web3, tokenAmount)) {
                                        throw new Error('Could not deposit');
                                    }
                                    return;
                                case TabType.Withdraw:
                                    switch(protocol.type){
                                        case ProtocolType.Lido:
                                            dispatchTradeStore({
                                                type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN */.AF.UPDATE_INPUT_TOKEN,
                                                token: protocol.getFungibleTokenDetails(targetChainId)
                                            });
                                            onClose === null || onClose === void 0 ? void 0 : onClose();
                                            onSwapDialogOpen === null || onSwapDialogOpen === void 0 ? void 0 : onSwapDialogOpen();
                                            return;
                                        default:
                                            if (!await protocol.withdraw(account, targetChainId, web3, tokenAmount)) {
                                                throw new Error('Could not withdraw');
                                            }
                                            return;
                                    }
                                default:
                                    (0,esm/* unreachable */.t1)(tab);
                            }
                        }
                    })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsDialog.tsx




















function SavingsDialog({ open , onClose , onSwapDialogOpen  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { classes  } = SavingsDialogStyles_useStyles({
        isDashboard
    });
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const [chainId, setChainId] = (0,react.useState)(currentChainId);
    const [tab, setTab] = (0,react.useState)(TabType.Deposit);
    const [selectedProtocol, setSelectedProtocol] = (0,react.useState)(null);
    const { value: chains = utils_pure/* EMPTY_LIST */.rP  } = (0,useAsync/* default */.Z)(async ()=>{
        const networks = await messages/* WalletRPC.getSupportedNetworks */.V.getSupportedNetworks();
        return networks.map((network)=>(0,chainDetailed/* getChainIdFromNetworkType */.EP)(network)
        );
    }, []);
    const mappableProtocols = (0,react.useMemo)(()=>{
        return Object.keys(ProtocolCategory).map((category)=>({
                category,
                protocols: SavingsProtocols.filter((protocol)=>protocol.category.toLowerCase() === category.toLowerCase()
                )
            })
        ).filter((categorizedProtocol)=>categorizedProtocol.protocols.some(({ availableNetworks  })=>availableNetworks.some((network)=>network.chainId === chainId
                )
            )
        );
    }, [
        chainId
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(useTargetChainIdContext/* TargetChainIdContext.Provider */.Z.Provider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useAllProviderTradeContext/* AllProviderTradeContext.Provider */.TX.Provider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
                open: true,
                onClose: ()=>{
                    if (selectedProtocol === null) {
                        onClose === null || onClose === void 0 ? void 0 : onClose();
                    } else {
                        setSelectedProtocol(null);
                    }
                },
                title: t('plugin_savings'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    children: [
                        !isDashboard ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.walletStatusBox,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {})
                        }) : null,
                        selectedProtocol === null ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.abstractTabWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                                        chainId: chainId,
                                        setChainId: setChainId,
                                        classes: classes,
                                        chains: chains
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.tableTabWrapper,
                                    children: mappableProtocols.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "h5",
                                        textAlign: "center",
                                        children: t('plugin_no_protocol_available')
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(theme_src/* FolderTabs */.Jc, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* FolderTabPanel */.pL, {
                                                label: "DEPOSIT",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsTable, {
                                                    chainId: chainId,
                                                    tab: TabType.Deposit,
                                                    mappableProtocols: mappableProtocols,
                                                    setSelectedProtocol: setSelectedProtocol,
                                                    setTab: setTab
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* FolderTabPanel */.pL, {
                                                label: "WITHDRAW",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsTable, {
                                                    chainId: chainId,
                                                    tab: TabType.Withdraw,
                                                    mappableProtocols: mappableProtocols,
                                                    setSelectedProtocol: setSelectedProtocol,
                                                    setTab: setTab
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsForm, {
                            tab: tab,
                            chainId: chainId,
                            selectedProtocol: selectedProtocol,
                            onClose: onClose,
                            onSwapDialogOpen: onSwapDialogOpen
                        })
                    ]
                })
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TraderDialog.tsx
var TraderDialog = __webpack_require__(35615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.61_10fe5b9cda37a48a2d94b5e38d45d618/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(30212);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.61_10fe5b9cda37a48a2d94b5e38d45d618/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(67828);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(25829);
// EXTERNAL MODULE: ./src/plugins/FindTruman/Worker/apis/index.ts
var apis = __webpack_require__(69297);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Skeleton/Skeleton.js + 1 modules
var Skeleton = __webpack_require__(56118);
// EXTERNAL MODULE: ./src/plugins/FindTruman/context.ts
var context = __webpack_require__(87468);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/PoapPanel.tsx








const PoapPanel_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        skeleton: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        poap: {
            width: '120px',
            height: '120px',
            borderRadius: '8px'
        },
        poapCover: {
            width: '150px',
            height: '150px',
            borderRadius: '8px',
            border: 'none',
            filter: 'grayscale(100%)',
            background: 'rgba(255, 255, 255, 0.15)',
            transition: 'all .3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        }
    })
);
function PoapPanel(props) {
    const { classes  } = PoapPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const account = (0,useAccount/* useAccount */.m)();
    const { value: poaps , loading  } = (0,useAsync/* default */.Z)(async ()=>{
        return account ? (0,apis/* fetchUserPoap */.oJ)(account) : undefined;
    }, [
        account
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.skeleton,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    variant: "rectangular",
                    animation: "wave",
                    width: 120,
                    height: 120
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    width: 120
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    width: 36
                })
            ]
        }) : poaps && poaps.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
            container: true,
            spacing: 2,
            justifyContent: "center",
            children: poaps.map((poap)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    xs: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.poap,
                            src: poap.img
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            textAlign: "center",
                            children: poap.name
                        })
                    ]
                }, poap.id)
            )
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    textAlign: "center",
                    variant: "body1",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: t('plugin_find_truman_dialog_no_poap_tip')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: consts === null || consts === void 0 ? void 0 : consts.poapImg,
                    className: classes.poapCover
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    component: "a",
                    href: consts === null || consts === void 0 ? void 0 : consts.getPoapUrl,
                    target: "_blank",
                    sx: {
                        mt: 1
                    },
                    color: "primary",
                    variant: "text",
                    children: t('plugin_find_truman_dialog_get_poap_tip')
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./src/plugins/FindTruman/types.ts
var FindTruman_types = __webpack_require__(7294);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Chip/Chip.js
var Chip = __webpack_require__(57277);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(54648);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.61_10fe5b9cda37a48a2d94b5e38d45d618/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(9484);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/getUnixTime/index.js
var getUnixTime = __webpack_require__(37919);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/PartsPanel.tsx














const PartsPanel_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        skeleton: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        ribbonWrapper: {
            position: 'relative'
        },
        ribbon: {
            position: 'absolute',
            width: '70px',
            height: '70px',
            overflow: 'hidden',
            top: '-6px',
            left: '-6px',
            '&:before': {
                position: 'absolute',
                content: '""',
                display: 'block',
                border: '3px solid #0359a3',
                top: 0,
                right: 0,
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent'
            },
            '&:after': {
                position: 'absolute',
                content: '""',
                display: 'block',
                border: '3px solid #0359a3',
                bottom: 0,
                left: 0,
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent'
            }
        },
        ribbonGray: {
            '&:before': {
                border: '3px solid #595959'
            },
            '&:after': {
                border: '3px solid #595959'
            }
        },
        ribbonContent: {
            position: 'absolute',
            display: 'block',
            width: '100px',
            padding: '2px 0',
            backgroundColor: 'rgb(29,155,240)',
            boxShadow: '0 5px 10px rgba(0,0,0,.1)',
            color: '#fff',
            textAlign: 'center',
            right: '-6px',
            top: '16px',
            transform: 'rotate(-45deg)',
            zIndex: 1
        },
        ribbonContentGray: {
            backgroundColor: '#8c8c8c'
        },
        cover: {
            width: '120px',
            height: '120px',
            borderRadius: '8px',
            position: 'relative',
            trans: 'all .3s',
            background: 'rgba(255, 255, 255, .15)'
        }
    })
);
function PartsPanel(props) {
    const { classes  } = PartsPanel_useStyles();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const account = (0,useAccount/* useAccount */.m)();
    const { value: partsInfo , loading , retry ,  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return account ? (0,apis/* fetchUserPartsInfo */.kc)(account) : undefined;
    }, [
        account
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        pl: 1,
        pr: 2,
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PartSkeleton, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PartSkeleton, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PartSkeleton, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PartSkeleton, {})
            ]
        }) : partsInfo ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            alignItems: "center",
            container: true,
            spacing: 2,
            children: [
                partsInfo.quests.map((quest)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 3,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestItem, {
                            quest: quest
                        })
                    }, quest.id)
                ),
                partsInfo.boxes.map((box)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 3,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MysteryBoxItem, {
                            account: account,
                            onOpened: ()=>retry()
                            ,
                            box: box
                        })
                    }, box.id)
                ),
                partsInfo.parts.map((part)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 3,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PartItem, {
                            part: part
                        })
                    }, part.tokenId)
                )
            ]
        }) : null
    }));
};
function PartSkeleton() {
    const { classes  } = PartsPanel_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        className: classes.skeleton,
        item: true,
        xs: 3,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                width: 80,
                height: 18
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                variant: "rectangular",
                animation: "wave",
                width: 120,
                height: 120
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                width: 120,
                height: 30
            })
        ]
    }));
}
function getPartName(t, type) {
    switch(type){
        case FindTruman_types/* PartType.Background */.pX.Background:
            return t('plugin_find_truman_dialog_ftg_part_background');
        case FindTruman_types/* PartType.Clothes */.pX.Clothes:
            return t('plugin_find_truman_dialog_ftg_part_clothes');
        case FindTruman_types/* PartType.Skin */.pX.Skin:
            return t('plugin_find_truman_dialog_ftg_part_face');
        case FindTruman_types/* PartType.Head */.pX.Head:
            return t('plugin_find_truman_dialog_ftg_part_head');
        case FindTruman_types/* PartType.Mask */.pX.Mask:
            return t('plugin_find_truman_dialog_ftg_part_mask');
    }
}
function PartItem(props) {
    const { part  } = props;
    const { classes  } = PartsPanel_useStyles();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.cover,
                src: part.img
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                columnGap: 1,
                display: "flex",
                alignItems: "center",
                height: "30px",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        size: "small",
                        label: getPartName(t, part.type),
                        color: "primary"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                        PopperProps: {
                            disablePortal: true
                        },
                        arrow: true,
                        title: part.name,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            noWrap: true,
                            variant: "body2",
                            color: "text.primary",
                            children: part.name
                        })
                    })
                ]
            })
        ]
    }));
}
function QuestItem(props) {
    const { quest  } = props;
    const { classes , cx  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const { open: isQuestDialogOpen , onOpen: onQuestDialogOpen , onClose: onQuestDialogClose  } = (0,utils/* useControlledDialog */.D2)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.ribbonWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: consts === null || consts === void 0 ? void 0 : consts.boxImg
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: cx(classes.ribbon, classes.ribbonGray),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: cx(classes.ribbonContent, classes.ribbonContentGray),
                            variant: "body2",
                            children: t('plugin_find_truman_dialog_ribbon_lacked')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                size: "small",
                color: "primary",
                variant: "outlined",
                fullWidth: true,
                onClick: onQuestDialogOpen,
                children: t('plugin_find_truman_dialog_get')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestDialog, {
                quest: quest,
                open: isQuestDialogOpen,
                onClose: onQuestDialogClose
            })
        ]
    }));
}
function MysteryBoxItem(props) {
    const { account , box , onOpened  } = props;
    const { classes , cx  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const [loading, setLoading] = (0,react.useState)(box.isOpened && !box.isMinted);
    const handleOpenBox = async ()=>{
        try {
            setLoading(true);
            await (0,apis/* openMysteryBox */.UN)(account, {
                timestamp: (0,getUnixTime/* default */.Z)(Date.now()),
                address: account,
                rawdata: {
                    boxId: box.id
                }
            });
        } finally{
            setLoading(false);
            onOpened();
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.ribbonWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: box.isOpened ? box.img : consts === null || consts === void 0 ? void 0 : consts.boxImg
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: box.isOpened ? cx(classes.ribbon, classes.ribbonGray) : classes.ribbon,
                        children: box.isOpened ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: cx(classes.ribbonContent, classes.ribbonContentGray),
                            variant: "body2",
                            children: t('plugin_find_truman_dialog_ribbon_minted')
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.ribbonContent,
                            variant: "body2",
                            children: t('plugin_find_truman_dialog_ribbon_openable')
                        })
                    })
                ]
            }),
            box.isOpened ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                height: "30px",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                    size: "small",
                    label: getPartName(t, box.partType),
                    color: "primary"
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: loading,
                size: "small",
                color: "primary",
                variant: "contained",
                fullWidth: true,
                onClick: handleOpenBox,
                children: t('plugin_find_truman_dialog_open')
            })
        ]
    }));
}
function QuestDialog(props) {
    const { quest , open , onClose  } = props;
    const { classes  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t('plugin_find_truman_dialog_get_box_title'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 4
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: classes.cover,
                    style: {
                        width: '250px',
                        height: '250px',
                        marginBottom: '8px'
                    },
                    src: consts === null || consts === void 0 ? void 0 : consts.boxImg
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    textAlign: "center",
                    variant: "body2",
                    color: "text.secondary",
                    sx: {
                        mb: 2
                    },
                    children: (0,format/* default */.Z)(new Date(quest.startFrom), 'yyyy-MM-dd')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h6",
                    color: "text.primary",
                    gutterBottom: true,
                    children: quest.title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "text.primary",
                    sx: {
                        whiteSpace: 'pre-wrap'
                    },
                    children: quest.desc
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(68699);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FusionFtg.tsx




const FusionFtg_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        box: {
            width: '200px',
            height: '200px',
            borderRadius: '8px',
            position: 'relative',
            background: 'rgba(255, 255, 255, .15)',
            transition: 'all .3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        },
        part: {
            width: '200px',
            height: '200px',
            position: 'absolute',
            top: 0,
            left: 0
        }
    })
);
const PartZIndex = {
    [FindTruman_types/* PartType.Background */.pX.Background]: 1,
    [FindTruman_types/* PartType.Skin */.pX.Skin]: 2,
    [FindTruman_types/* PartType.Clothes */.pX.Clothes]: 3,
    [FindTruman_types/* PartType.Head */.pX.Head]: 4,
    [FindTruman_types/* PartType.Mask */.pX.Mask]: 5
};
function FusionFtg(props) {
    const { parts , sx  } = props;
    const { classes  } = FusionFtg_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.box,
        sx: {
            ...sx
        },
        children: parts.map((part)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.part,
                src: part.img,
                style: {
                    zIndex: PartZIndex[part.type]
                }
            }, part.tokenId)
        )
    }));
};

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FtgPanel.tsx










const FtgPanel_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        ftgCover: {
            width: '150px',
            height: '150px',
            borderRadius: '8px',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.15)',
            transition: 'all .3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        },
        ftgRow: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            columnGap: theme.spacing(4),
            ':first-child': {
                marginTop: theme.spacing(2)
            },
            ':not(:last-child)': {
                marginBottom: theme.spacing(4),
                paddingBottom: theme.spacing(4),
                borderBottom: '1px solid rgba(255, 255, 255, .15)'
            }
        },
        ftgInfoRow: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            columnGap: theme.spacing(2),
            ':not(:last-child)': {
                marginBottom: theme.spacing(1)
            }
        }
    })
);
function FtgPanel(props) {
    const { classes  } = FtgPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const account = (0,useAccount/* useAccount */.m)();
    const ftgContract = (0,useERC721TokenContract/* useERC721TokenContract */.n)(consts === null || consts === void 0 ? void 0 : consts.ftgAddress);
    const { value: ftgs1  } = (0,useAsync/* default */.Z)(async ()=>{
        try {
            if (account && ftgContract) {
                const ftgs = [];
                const balance = await ftgContract.methods.balanceOf(account).call();
                for(let i = 0; i < (balance || 0); i += 1){
                    const tokenId = await ftgContract.methods.tokenOfOwnerByIndex(account, i).call();
                    const uri = await ftgContract.methods.tokenURI(tokenId).call();
                    if (uri) {
                        const res = await fetch(uri);
                        const nft = await res.json();
                        const tokenId = uri.split('/').at(-1);
                        ftgs.push({
                            ...nft,
                            tokenId
                        });
                    }
                }
                return ftgs;
            }
        } catch (error) {}
        return [];
    }, [
        account,
        ftgContract
    ]);
    const { value: fusion  } = (0,useAsync/* default */.Z)(async ()=>{
        return account ? (0,apis/* fetchExchangeStatus */.PN)(account) : undefined;
    }, [
        account
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: ftgs1 && ftgs1.length > 0 || fusion ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                ftgs1 === null || ftgs1 === void 0 ? void 0 : ftgs1.map((ftg)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FtgItem, {
                        ftg: ftg
                    }, ftg.tokenId)
                ),
                (fusion === null || fusion === void 0 ? void 0 : fusion.parts) && /*#__PURE__*/ (0,jsx_runtime.jsx)(FusionItem, {
                    parts: fusion.parts
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    textAlign: "center",
                    variant: "body1",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: t('plugin_find_truman_dialog_buy_ftg_tip')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: consts === null || consts === void 0 ? void 0 : consts.ftgImg,
                    className: classes.ftgCover
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    component: "a",
                    href: "https://findtruman.io/#/buy",
                    target: "_blank",
                    sx: {
                        mt: 1,
                        width: '150px'
                    },
                    color: "primary",
                    variant: "contained",
                    children: t('plugin_find_truman_dialog_buy_ftg')
                })
            ]
        })
    }));
};
function FtgInfoRow(props) {
    const { title , value  } = props;
    const { classes  } = FtgPanel_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.ftgInfoRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontWeight: "bold",
                variant: "body1",
                color: "text.primary",
                children: title
            }),
            typeof value === 'string' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                color: "text.secondary",
                children: value
            }) : value
        ]
    }));
}
function FtgItem(props) {
    const { ftg  } = props;
    const { classes  } = FtgPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.ftgRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.ftgCover,
                src: ftg.image
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    width: '250px'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "center",
                        variant: "h6",
                        color: "text.primary",
                        gutterBottom: true,
                        children: ftg.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_token'),
                        value: `#${ftg.tokenId}`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_blockchain'),
                        value: "Ethereum"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_standard'),
                        value: "ERC721 Enumerable"
                    }),
                    consts && /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_contract'),
                        value: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "text.secondary",
                                    mr: 1,
                                    children: [
                                        consts.ftgAddress.substring(0, 7),
                                        "...",
                                        consts.ftgAddress.substring(38, 42)
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: `https://etherscan.io/address/${consts.ftgAddress}`,
                                    variant: "body1",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "view"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
}
function FusionItem(props) {
    const { parts  } = props;
    const { classes  } = FtgPanel_useStyles();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.ftgRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FusionFtg, {
                parts: parts
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    width: '250px'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "center",
                        variant: "h6",
                        color: "text.primary",
                        gutterBottom: true,
                        children: "FindTruman Genesis"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_token'),
                        value: t('plugin_find_truman_dialog_ftg_no_minted')
                    }),
                    parts.map((part)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                            title: getPartName(t, part.type),
                            value: part.name
                        }, part.type)
                    )
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/AssetsPanel.tsx








const AssetsPanel_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        box: {
            display: 'flex',
            flexDirection: 'column'
        },
        row: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'baseline'
        }
    })
);
function AssetsPanel(props) {
    const { classes  } = AssetsPanel_useStyles();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.box,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.row,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "h5",
                        color: "text.primary",
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_assets_ftg')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "body2",
                        color: "text.secondary",
                        ml: 1,
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_ethereum_mainnet')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgPanel, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.row,
                mt: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "h5",
                        color: "text.primary",
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_assets_POAP')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "body2",
                        color: "text.secondary",
                        ml: 1,
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_ethereum_polygon')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapPanel, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 2,
                mb: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                textAlign: "left",
                                variant: "h5",
                                color: "text.primary",
                                children: t('plugin_find_truman_dialog_assets_parts')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                textAlign: "left",
                                variant: "body2",
                                color: "text.secondary",
                                ml: 1,
                                gutterBottom: true,
                                children: t('plugin_find_truman_dialog_ethereum_polygon')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "primary",
                        size: "small",
                        component: "a",
                        href: "https://findtruman.io/#/assets",
                        target: "_blank",
                        children: t('plugin_find_truman_dialog_fusion_fusion')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PartsPanel, {})
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(42599);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/StageCard.tsx
var StageCard = __webpack_require__(84327);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/OptionsCard.tsx + 1 modules
var OptionsCard = __webpack_require__(96967);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/ResultCard.tsx
var ResultCard = __webpack_require__(95342);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/ParticipatePanel.tsx


















const ParticipatePanel_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        panel: {},
        cover: {
            width: '100%',
            objectFit: 'cover',
            marginBottom: theme.spacing(2),
            borderRadius: '8px'
        },
        title: {
            marginBottom: theme.spacing(2)
        },
        buttons: {
            padding: theme.spacing(2)
        },
        wrapper: {
            '&:not(:last-child)': {
                marginBottom: theme.spacing(2)
            }
        },
        abstractTabWrapper: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 2,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        tabPaneWrapper: {
            width: '100%',
            marginBottom: '24px'
        },
        tabPane: {
            width: 535,
            margin: '0 auto',
            padding: 0
        },
        dialogWrapper: {
            paddingBottom: '0px !important',
            paddingTop: '0px !important'
        }
    })
);
function ParticipatePanel(props) {
    const { storyId  } = props;
    const { classes  } = ParticipatePanel_useStyles();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const account = (0,useAccount/* useAccount */.m)();
    const { open: isDialogOpen , onOpen: onDialogOpen , onClose: onDialogClose  } = (0,utils/* useControlledDialog */.D2)();
    const { value: userStoryStatus , retry: onUpdate  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return account && storyId ? (0,apis/* fetchUserStoryStatus */.cz)(storyId, account) : undefined;
    }, [
        account,
        storyId
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.panel,
        children: [
            userStoryStatus && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: userStoryStatus.img
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StageCard/* default */.Z, {
                        userStoryStatus: userStoryStatus
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                        className: classes.buttons,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            fullWidth: true,
                            color: "primary",
                            variant: "contained",
                            onClick: ()=>{
                                onDialogOpen();
                            },
                            children: t('plugin_find_truman_dialog_view_all')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipateDialog, {
                account: account,
                open: isDialogOpen,
                onClose: onDialogClose,
                onUpdate: onUpdate
            })
        ]
    }));
};
var ParticipationType;
(function(ParticipationType) {
    ParticipationType["Critical"] = 'critical';
    ParticipationType["NonCritical"] = 'non-critical';
})(ParticipationType || (ParticipationType = {}));
const ParticipationTabValues = [
    ParticipationType.Critical,
    ParticipationType.NonCritical
];
function ParticipateDialog(props) {
    const { account , open , onClose , onUpdate  } = props;
    const { classes  } = ParticipatePanel_useStyles();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const [currentTab, onChange, tabs] = (0,theme_src/* useTabs */.YE)(ParticipationType.Critical, ParticipationType.NonCritical);
    const [polls1, setPolls] = (0,react.useState)([]);
    (0,react.useEffect)(()=>{
        if (account) {
            (0,apis/* fetchAllPollsOrPuzzles */.pU)(account).then((polls)=>setPolls(polls)
            );
        }
    }, [
        account,
        open
    ]);
    const handleSubmit = async (postType, pollId, choice)=>{
        const target = pollId;
        const from = account;
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        if (postType === FindTruman_types/* PostType.Puzzle */.hQ.Puzzle) {
            await (0,apis/* submitPuzzle */.yR)(account, {
                target,
                from,
                timestamp,
                choice
            });
        } else if (postType === FindTruman_types/* PostType.Poll */.hQ.Poll) {
            await (0,apis/* submitPoll */.LP)(account, {
                target,
                from,
                timestamp,
                choice
            });
        }
        const polls = await (0,apis/* fetchAllPollsOrPuzzles */.pU)(account);
        setPolls(polls);
        onUpdate();
    };
    const renderPoll = (poll)=>{
        return poll.status ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
            variant: "outlined",
            className: classes.wrapper,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard/* default */.Z, {
                userStatus: poll,
                onSubmit: async (choice)=>{
                    return handleSubmit(poll.type, poll.id, choice);
                }
            })
        }, `${poll.type}_${poll.id}`) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
            variant: "outlined",
            className: classes.wrapper,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard/* default */.Z, {
                type: poll.type,
                userStatus: poll,
                result: {
                    ...poll,
                    correct: poll.result,
                    count: poll.count || []
                }
            })
        }, `${poll.type}_${poll.id}`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t('plugin_find_truman_dialog_participation_title'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.dialogWrapper,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: currentTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.abstractTabWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanDialogTabs, {
                            currentTab: currentTab,
                            setTab: (tab)=>onChange(null, tab)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.tabPaneWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                className: classes.tabPane,
                                value: ParticipationType.Critical,
                                children: polls1 === null || polls1 === void 0 ? void 0 : polls1.filter((e)=>e.critical
                                ).map((p)=>renderPoll(p)
                                )
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                className: classes.tabPane,
                                value: ParticipationType.NonCritical,
                                children: polls1 === null || polls1 === void 0 ? void 0 : polls1.filter((e)=>!e.critical
                                ).map((p)=>renderPoll(p)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    }));
}
function FindTrumanDialogTabs(props) {
    const classes = (0,theme_src/* useStylesExtends */.Bc)(useTabsStyles(), props);
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const { currentTab , setTab  } = props;
    const tabProps = {
        tabs: [
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_find_truman_dialog_critical')
                }),
                sx: {
                    p: 0
                },
                cb: ()=>setTab(ParticipationType.Critical)
            },
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_find_truman_dialog_noncritical')
                }),
                sx: {
                    p: 0
                },
                cb: ()=>setTab(ParticipationType.NonCritical)
            }, 
        ],
        index: ParticipationTabValues.indexOf(currentTab),
        classes,
        hasOnlyOneChild: true
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
        ...tabProps
    }));
}

// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/hooks/useConst.ts
var useConst = __webpack_require__(92997);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTrumanDialog.tsx













const FindTrumanDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        wrapper: {
            paddingBottom: '0px !important',
            paddingTop: '0px !important'
        },
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        abstractTabWrapper: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 2,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        tabPaneWrapper: {
            width: '100%',
            marginBottom: '24px'
        },
        tabPane: {
            width: 535,
            margin: '0 auto',
            padding: 0
        }
    })
);
function FindTrumanDialog(props) {
    const { open , onClose  } = props;
    const { classes  } = FindTrumanDialog_useStyles();
    const account = (0,plugin_infra_src/* useAccount */.mA)();
    const { consts , t  } = (0,useConst/* useConst */.B)();
    const [currentTab, onChange, tabs] = (0,theme_src/* useTabs */.YE)(FindTrumanDialogTab.Assets, FindTrumanDialogTab.Participate);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(context/* FindTrumanContext.Provider */.c.Provider, {
        value: {
            address: account,
            const: consts,
            t
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            onClose: onClose,
            title: "FindTruman",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.walletStatusBox,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {})
                    }),
                    consts && /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                        value: currentTab,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.abstractTabWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanDialog_FindTrumanDialogTabs, {
                                    currentTab: currentTab,
                                    setTab: (tab)=>onChange(null, tab)
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.tabPaneWrapper,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        className: classes.tabPane,
                                        value: FindTrumanDialogTab.Assets,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetsPanel, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        className: classes.tabPane,
                                        value: FindTrumanDialogTab.Participate,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipatePanel, {
                                            storyId: consts.storyId
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
}
const useTabsStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300,
            backgroundColor: `${theme.palette.background.default}!important`,
            marginRight: 1,
            '&:last-child': {
                marginRight: 0
            }
        },
        tabs: {
            width: 535,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4,
            backgroundColor: theme.palette.background.paper,
            '& .Mui-selected': {
                color: theme.palette.primary.contrastText,
                backgroundColor: `${theme.palette.primary.main}!important`
            },
            '& .MuiTabs-flexContainer': {
                display: 'grid',
                gridTemplateColumns: '50% 50%',
                backgroundColor: theme.palette.background.paper
            }
        },
        indicator: {
            display: 'none'
        }
    })
);
var FindTrumanDialogTab;
(function(FindTrumanDialogTab) {
    FindTrumanDialogTab["Assets"] = 'assets';
    FindTrumanDialogTab["Participate"] = 'participate';
})(FindTrumanDialogTab || (FindTrumanDialogTab = {}));
const FindTrumanDialogTabValues = [
    FindTrumanDialogTab.Assets,
    FindTrumanDialogTab.Participate
];
function getFindTrumanDialogTabName(t, type) {
    switch(type){
        case FindTrumanDialogTab.Assets:
            return t('plugin_find_truman_dialog_tab_assets');
        case FindTrumanDialogTab.Participate:
            return t('plugin_find_truman_dialog_tab_participate');
    }
}
function FindTrumanDialog_FindTrumanDialogTabs(props) {
    const classes = (0,theme_src/* useStylesExtends */.Bc)(useTabsStyles(), props);
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const { currentTab , setTab  } = props;
    const createTabItem = (type)=>({
            label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: getFindTrumanDialogTabName(t, type)
            }),
            sx: {
                p: 0
            },
            cb: ()=>setTab(type)
        })
    ;
    const tabProps = {
        tabs: [
            createTabItem(FindTrumanDialogTab.Assets),
            createTabItem(FindTrumanDialogTab.Participate)
        ],
        index: FindTrumanDialogTabValues.indexOf(currentTab),
        classes,
        hasOnlyOneChild: true
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
        ...tabProps
    }));
}

;// CONCATENATED MODULE: ./src/components/shared/ApplicationBoard.tsx




















const ApplicationBoard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        abstractTabWrapper: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 2,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300
        },
        tabs: {
            width: 552,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4,
            '& .Mui-selected': {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main
            }
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        indicator: {
            display: 'none'
        },
        applicationBox: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.background.default,
            borderRadius: '8px',
            cursor: 'pointer',
            height: 100,
            '&:hover': {
                transform: 'scale(1.05) translateY(-4px)',
                boxShadow: theme.palette.mode === 'light' ? '0px 10px 16px rgba(0, 0, 0, 0.1)' : 'none'
            }
        },
        applicationWrapper: {
            marginTop: 4,
            display: 'grid',
            gridTemplateColumns: '123px 123px 123px 123px',
            gridTemplateRows: '100px',
            rowGap: 12,
            justifyContent: 'space-between',
            height: 324
        },
        applicationImg: {
            width: 36,
            height: 36,
            marginBottom: 10
        },
        disabled: {
            pointerEvents: 'none',
            opacity: 0.5
        },
        title: {
            fontSize: 15
        }
    })
);
const SUPPORTED_CHAIN_ID_LIST = [
    types/* ChainId.Mainnet */.a_.Mainnet,
    types/* ChainId.BSC */.a_.BSC,
    types/* ChainId.Matic */.a_.Matic,
    types/* ChainId.Arbitrum */.a_.Arbitrum,
    types/* ChainId.xDai */.a_.xDai,
    types/* ChainId.Celo */.a_.Celo,
    types/* ChainId.Fantom */.a_.Fantom,
    types/* ChainId.Aurora */.a_.Aurora,
    types/* ChainId.Avalanche */.a_.Avalanche, 
];
function ApplicationBoard({ secondEntries , secondEntryChainTabs  }) {
    const { classes  } = ApplicationBoard_useStyles();
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const account = (0,useAccount/* useAccount */.m)();
    const selectedWallet = (0,useWallet/* useWallet */.O)();
    const currentPluginId = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const isNotEvm = currentPluginId !== plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    // #region Encrypted message
    const openEncryptedMessage = (0,react.useCallback)((id)=>utils_messages/* MaskMessages.events.requestComposition.sendToLocal */.q.events.requestComposition.sendToLocal({
            reason: 'timeline',
            open: true,
            options: {
                startupPlugin: id
            }
        })
    , []);
    // #endregion
    // #region Claim All ITO
    const { open: isClaimAllDialogOpen , onOpen: onClaimAllDialogOpen , onClose: onClaimAllDialogClose ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    // #endregion
    // #region Savings
    const { open: isSavingsDialogOpen , onOpen: onSavingsDialogOpen , onClose: onSavingsDialogClose ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    // #endregion
    // #region Swap
    const { open: isSwapDialogOpen , onOpen: onSwapDialogOpen , onClose: onSwapDialogClose  } = (0,useControlledDialog/* useControlledDialog */.D)();
    // #endregion
    // #region Fiat on/off ramp
    const { setDialog: setBuyDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Transak_messages/* PluginTransakMessages.buyTokenDialogUpdated */.l.buyTokenDialogUpdated);
    // #endregion
    // #region pet friends
    const { setDialog: setPetDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Pets_messages/* PluginPetMessages.events.essayDialogUpdated */.s.events.essayDialogUpdated);
    // #endregion
    // #region second level entry dialog
    const { open: isSecondLevelEntryDialogOpen , onOpen: onSecondLevelEntryDialogOpen , onClose: onSecondLevelEntryDialogClose ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    const [secondLevelEntryDialogTitle, setSecondLevelEntryDialogTitle] = (0,react.useState)('');
    const [secondLevelEntryChains, setSecondLevelEntryChains] = (0,react.useState)([]);
    const [secondLevelEntries, setSecondLevelEntries] = (0,react.useState)([]);
    const [chainId, setChainId] = (0,react.useState)((secondEntryChainTabs === null || secondEntryChainTabs === void 0 ? void 0 : secondEntryChainTabs.includes(currentChainId)) ? currentChainId : types/* ChainId.Mainnet */.a_.Mainnet);
    const openSecondEntryDir = (0,react.useCallback)((title, maskAppEntries, chains)=>{
        setSecondLevelEntryDialogTitle(title);
        setSecondLevelEntries(maskAppEntries);
        setSecondLevelEntryChains(chains);
        onSecondLevelEntryDialogOpen();
    }, []);
    // #endregion
    // #region FindTruman
    const { open: isFindTrumanDialogOpen , onOpen: onFindTrumanDialogOpen , onClose: onFindTrumanDialogClose ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    // #endregion
    function createEntry(title, img, onClick, supportedChains, hidden = false, walletRequired = true) {
        return {
            title,
            img,
            onClick,
            supportedChains,
            hidden,
            walletRequired
        };
    }
    const firstLevelEntries = [
        createEntry('Lucky Drop', new URL(/* asset import */ __webpack_require__(26686), __webpack_require__.b).toString(), ()=>openEncryptedMessage(constants/* RedPacketPluginID */.jY)
        , undefined, isNotEvm),
        createEntry('File Service', new URL(/* asset import */ __webpack_require__(27077), __webpack_require__.b).toString(), ()=>openEncryptedMessage(plugin_infra_src/* PluginId.FileService */.je.FileService)
        , undefined, false, false),
        createEntry('ITO', new URL(/* asset import */ __webpack_require__(91488), __webpack_require__.b).toString(), ()=>openEncryptedMessage(ITO_constants/* ITO_PluginID */.yV)
        , undefined, isNotEvm),
        createEntry('Claim', new URL(/* asset import */ __webpack_require__(3310), __webpack_require__.b).toString(), onClaimAllDialogOpen, undefined, isNotEvm),
        createEntry('Mask Bridge', new URL(/* asset import */ __webpack_require__(55352), __webpack_require__.b).toString(), ()=>window.open('https://bridge.mask.io/#/', '_blank', 'noopener noreferrer')
        , undefined, isNotEvm, false),
        createEntry('MaskBox', new URL(/* asset import */ __webpack_require__(79000), __webpack_require__.b).toString(), ()=>window.open('https://box.mask.io/#/', '_blank', 'noopener noreferrer')
        , undefined, isNotEvm, false),
        createEntry('Savings', new URL(/* asset import */ __webpack_require__(16300), __webpack_require__.b).toString(), onSavingsDialogOpen, undefined, false),
        createEntry('Swap', new URL(/* asset import */ __webpack_require__(72921), __webpack_require__.b).toString(), onSwapDialogOpen, undefined, isNotEvm),
        createEntry('Fiat On-Ramp', new URL(/* asset import */ __webpack_require__(81886), __webpack_require__.b).toString(), ()=>setBuyDialog({
                open: true,
                address: account
            })
        , undefined, false, false),
        createEntry('NFTs', new URL(/* asset import */ __webpack_require__(39022), __webpack_require__.b).toString(), ()=>openSecondEntryDir('NFTs', [
                createEntry('MaskBox', new URL(/* asset import */ __webpack_require__(79000), __webpack_require__.b).toString(), ()=>window.open('https://box.mask.io/#/', '_blank', 'noopener noreferrer')
                , undefined, false, false),
                createEntry('Valuables', new URL(/* asset import */ __webpack_require__(59203), __webpack_require__.b).toString(), ()=>{}, undefined, true),
                createEntry('Non-F Friends', new URL(/* asset import */ __webpack_require__(75556), __webpack_require__.b).toString(), ()=>setPetDialog({
                        open: true
                    })
                , [
                    types/* ChainId.Mainnet */.a_.Mainnet
                ], currentChainId !== types/* ChainId.Mainnet */.a_.Mainnet, true), 
            ], undefined)
        , undefined, isNotEvm),
        createEntry('Investment', new URL(/* asset import */ __webpack_require__(26017), __webpack_require__.b).toString(), ()=>openSecondEntryDir('Investment', [
                createEntry('Zerion', new URL(/* asset import */ __webpack_require__(42440), __webpack_require__.b).toString(), ()=>{}, [
                    types/* ChainId.Mainnet */.a_.Mainnet, 
                ]),
                createEntry('dHEDGE', new URL(/* asset import */ __webpack_require__(24778), __webpack_require__.b).toString(), ()=>{}), 
            ], SUPPORTED_CHAIN_ID_LIST)
        , undefined, true),
        createEntry('Alternative', new URL(/* asset import */ __webpack_require__(70742), __webpack_require__.b).toString(), ()=>openSecondEntryDir('Alternative', [
                createEntry('PoolTogether', new URL(/* asset import */ __webpack_require__(48352), __webpack_require__.b).toString(), ()=>{}), 
            ], SUPPORTED_CHAIN_ID_LIST)
        , undefined, true),
        createEntry('FindTruman', new URL(/* asset import */ __webpack_require__(42880), __webpack_require__.b).toString(), onFindTrumanDialogOpen, [
            types/* ChainId.Mainnet */.a_.Mainnet
        ], false, true), 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            (secondEntryChainTabs === null || secondEntryChainTabs === void 0 ? void 0 : secondEntryChainTabs.length) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.abstractTabWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                    chainId: chainId,
                    setChainId: setChainId,
                    classes: classes,
                    chains: secondEntryChainTabs
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.applicationWrapper,
                children: (secondEntries !== null && secondEntries !== void 0 ? secondEntries : firstLevelEntries).map(({ title , img , onClick , supportedChains , hidden , walletRequired  }, i)=>{
                    return (!supportedChains || (supportedChains === null || supportedChains === void 0 ? void 0 : supportedChains.includes(chainId))) && !hidden ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classnames_default()(classes.applicationBox, walletRequired && !selectedWallet ? classes.disabled : ''),
                        onClick: onClick,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: img,
                                className: classes.applicationImg
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                color: "textPrimary",
                                children: title
                            })
                        ]
                    }, i) : null;
                })
            }),
            isClaimAllDialogOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimAllDialog, {
                open: true,
                onClose: onClaimAllDialogClose
            }) : null,
            isSecondLevelEntryDialogOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EntrySecondLevelDialog, {
                title: secondLevelEntryDialogTitle,
                open: true,
                entries: secondLevelEntries,
                chains: secondLevelEntryChains,
                closeDialog: onSecondLevelEntryDialogClose
            }) : null,
            isFindTrumanDialogOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanDialog, {
                open: true,
                onClose: onFindTrumanDialogClose
            }) : null,
            isSwapDialogOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderDialog/* TraderDialog */.F, {
                open: true,
                onClose: onSwapDialogClose
            }) : null,
            isSavingsDialogOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsDialog, {
                open: true,
                onClose: onSavingsDialogClose,
                onSwapDialogOpen: onSwapDialogOpen
            }) : null
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/index.tsx













const WalletStatusDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
        utils_messages/* MaskMessages.events.requestComposition.sendToLocal */.q.events.requestComposition.sendToLocal({
            reason: 'timeline',
            open: false
        });
    }, []);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_material_Error/* default */.Z, {
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
    }));
}


/***/ }),

/***/ 67908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "Sf": () => (/* binding */ isMinds),
/* harmony export */   "fy": () => (/* binding */ mindsWorkerBase)
/* harmony export */ });
const MINDS_ID = 'minds.com';
const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const mindsBase = {
    networkIdentifier: MINDS_ID,
    name: 'minds',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('minds.com');
    }
};
function isMinds(ui) {
    return ui.networkIdentifier === MINDS_ID;
}
const mindsWorkerBase = {
    ...mindsBase,
    gunNetworkHint: 'minds-'
};


/***/ }),

/***/ 43730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ EthereumERC20TokenApprovedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(44939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/once.js
var once = __webpack_require__(42500);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC20TokenContract.ts
var useERC20TokenContract = __webpack_require__(50321);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenAllowance.ts
var useERC20TokenAllowance = __webpack_require__(33973);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenBalance.ts
var useERC20TokenBalance = __webpack_require__(11091);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(15516);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(91339);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC20TokenApproveCallback.ts









const MaxUint256 = (0,base_src/* toFixed */.FH)('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
var ApproveStateType;
(function(ApproveStateType) {
    ApproveStateType[ApproveStateType["UNKNOWN"] = 0] = "UNKNOWN";
    ApproveStateType[ApproveStateType["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApproveStateType[ApproveStateType["UPDATING"] = 2] = "UPDATING";
    ApproveStateType[ApproveStateType["PENDING"] = 3] = "PENDING";
    ApproveStateType[ApproveStateType["APPROVED"] = 4] = "APPROVED";
    ApproveStateType[ApproveStateType["FAILED"] = 5] = "FAILED";
})(ApproveStateType || (ApproveStateType = {}));
function useERC20TokenApproveCallback(address, amount, spender) {
    const account = (0,useAccount/* useAccount */.m)();
    const erc20Contract = (0,useERC20TokenContract/* useERC20TokenContract */.x)(address);
    const [transactionState, setTransactionState] = (0,useTransactionState/* useTransactionState */.p)();
    // read the approved information from the chain
    const { value: balance = '0' , loading: loadingBalance , error: errorBalance , retry: revalidateBalance ,  } = (0,useERC20TokenBalance/* useERC20TokenBalance */.y)(address);
    const { value: allowance = '0' , loading: loadingAllowance , error: errorAllowance , retry: revalidateAllowance ,  } = (0,useERC20TokenAllowance/* useERC20TokenAllowance */.n)(address, spender);
    // the computed approve state
    const approveStateType = (0,react.useMemo)(()=>{
        if (!amount || !spender) return ApproveStateType.UNKNOWN;
        if (loadingBalance || loadingAllowance) return ApproveStateType.UPDATING;
        if (errorBalance || errorAllowance) return ApproveStateType.FAILED;
        if (transactionState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING) return ApproveStateType.PENDING;
        return (0,base_src/* isLessThan */.FI)(allowance, amount) ? ApproveStateType.NOT_APPROVED : ApproveStateType.APPROVED;
    }, [
        amount,
        spender,
        balance,
        allowance,
        errorBalance,
        errorAllowance,
        loadingAllowance,
        loadingBalance,
        transactionState.type, 
    ]);
    const approveCallback = (0,react.useCallback)(async (useExact = false)=>{
        setTransactionState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
        if (approveStateType === ApproveStateType.UNKNOWN || !amount || !spender || !erc20Contract) {
            return;
        }
        // error: failed to approve token
        if (approveStateType !== ApproveStateType.NOT_APPROVED) {
            setTransactionState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Failed to approve token.')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransactionState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).estimateGas({
                from: account
            }).catch((error)=>{
                useExact = !useExact;
                return erc20Contract.methods.approve(spender, amount).estimateGas({
                    from: account
                });
            }).catch((error)=>{
                setTransactionState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            const revalidate = (0,once/* default */.Z)(()=>{
                revalidateBalance();
                revalidateAllowance();
            });
            erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).send(config).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setTransactionState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                revalidate();
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setTransactionState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                revalidate();
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransactionState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                revalidate();
                reject(error);
            });
        });
    }, [
        account,
        amount,
        balance,
        spender,
        loadingAllowance,
        loadingBalance,
        erc20Contract,
        approveStateType
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        revalidateBalance();
        revalidateAllowance();
        setTransactionState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, [
        revalidateBalance,
        revalidateAllowance
    ]);
    return [
        {
            type: approveStateType,
            allowance,
            amount,
            spender,
            balance
        },
        transactionState,
        approveCallback,
        resetCallback, 
    ];
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(9228);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        button: {
            flexDirection: 'column',
            position: 'relative',
            marginTop: theme.spacing(1.5),
            lineHeight: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonLabel: {
            display: 'block',
            fontWeight: 'inherit',
            marginTop: theme.spacing(-0.5),
            marginBottom: theme.spacing(1)
        },
        buttonAmount: {
            fontSize: 10,
            fontWeight: 300,
            bottom: theme.spacing(1),
            position: 'absolute'
        },
        children: {
            marginTop: 8,
            width: '100%'
        }
    })
);
function EthereumERC20TokenApprovedBoundary(props) {
    const { amount , spender , token , children =null , render , fallback , infiniteUnlockContent , onlyInfiniteUnlock =false , withChildren =false ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    var ref;
    const [{ type: approveStateType , allowance  }, transactionState, approveCallback, resetApproveCallback] = useERC20TokenApproveCallback((ref = token === null || token === void 0 ? void 0 : token.address) !== null && ref !== void 0 ? ref : '', amount, spender);
    const onApprove = (0,react.useCallback)(async (useExact = false)=>{
        if (approveStateType !== ApproveStateType.NOT_APPROVED) return;
        await approveCallback(useExact);
    }, [
        approveStateType,
        transactionState,
        approveCallback
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: render ? render(false) : children
    }));
    if (approveStateType === ApproveStateType.UNKNOWN) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                disabled: true,
                ...props.ActionButtonProps,
                children: fallback !== null && fallback !== void 0 ? fallback : 'Enter an amount'
            }),
            withChildren ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    }));
    var _symbol, ref1;
    if (approveStateType === ApproveStateType.FAILED) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                onClick: resetApproveCallback,
                ...props.ActionButtonProps,
                children: t('wallet_load_retry', {
                    symbol: (ref1 = (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : token.name) !== null && ref1 !== void 0 ? ref1 : 'Token'
                })
            }),
            withChildren ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    }));
    var ref2;
    if (approveStateType === ApproveStateType.NOT_APPROVED) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        width: "100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
                spacing: 2,
                children: [
                    !onlyInfiniteUnlock ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            onClick: ()=>onApprove(true)
                            ,
                            ...props.ActionButtonProps,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: classes.buttonLabel,
                                    children: t('plugin_wallet_token_unlock')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: classes.buttonAmount,
                                    children: [
                                        (0,formatter/* formatBalance */.az)(amount, token.decimals, 2),
                                        " ",
                                        (ref2 = token === null || token === void 0 ? void 0 : token.symbol) !== null && ref2 !== void 0 ? ref2 : 'Token'
                                    ]
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: onlyInfiniteUnlock ? 12 : 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            onClick: ()=>onApprove(false)
                            ,
                            ...props.ActionButtonProps,
                            children: infiniteUnlockContent !== null && infiniteUnlockContent !== void 0 ? infiniteUnlockContent : t('plugin_wallet_token_infinite_unlock')
                        })
                    })
                ]
            }),
            withChildren ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    }));
    if (approveStateType === ApproveStateType.PENDING || approveStateType === ApproveStateType.UPDATING) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* default */.ZP, {
            className: classes.button,
            fullWidth: true,
            variant: "contained",
            size: "large",
            disabled: true,
            ...props.ActionButtonProps,
            children: [
                approveStateType === ApproveStateType.PENDING ? t('plugin_ito_unlocking_symbol', {
                    symbol: token.symbol
                }) : `Updating ${token.symbol}`,
                "…"
            ]
        })
    }));
    if (approveStateType === ApproveStateType.APPROVED) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: render ? render(false) : typeof children === 'function' ? children(allowance) : children
    }));
    (0,esm/* unreachable */.t1)(approveStateType);
}


/***/ }),

/***/ 44776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ EthereumWalletConnectedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(44939);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(9228);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(2871);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(91339);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletRiskWarningDialog.ts




const useWalletRiskWarningDialog = ()=>{
    const account = (0,useAccount/* useAccount */.m)();
    const [isConfirmed, setConfirmed] = (0,react.useState)(false);
    const fetchRiskWarningStatus = ()=>{
        if (!account) setConfirmed(false);
        else messages/* WalletRPC.getRiskWarningConfirmed */.V.getRiskWarningConfirmed(account).then((confirmed)=>setConfirmed(confirmed !== null && confirmed !== void 0 ? confirmed : false)
        );
    };
    const { openDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletRiskWarningDialogUpdated */.R.events.walletRiskWarningDialogUpdated, fetchRiskWarningStatus);
    (0,react.useEffect)(fetchRiskWarningStatus, [
        account
    ]);
    return {
        isConfirmed,
        openDialog
    };
};

;// CONCATENATED MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function EthereumWalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const account = (0,useAccount/* useAccount */.m)();
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)();
    // #region remote controlled confirm risk warning
    const { isConfirmed: isRiskWarningConfirmed , openDialog: openRiskWarningDialog  } = useWalletRiskWarningDialog();
    // #endregion
    // #region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    if (!account) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openSelectProviderDialog,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_connect_a_wallet')
        })
    }));
    if (!isRiskWarningConfirmed && !hideRiskWarningConfirmed) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openRiskWarningDialog,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_confirm_risk_warning')
        })
    }));
    var _value;
    if ((0,base_src/* isZero */.Fr)((_value = nativeTokenBalance.value) !== null && _value !== void 0 ? _value : '0') && !offChain) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.gasFeeButton),
            disabled: !nativeTokenBalance.error,
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: nativeTokenBalance.retry,
            ...props.ActionButtonProps,
            children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
        })
    }));
    if (!chainIdValid && !offChain) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.invalidButton),
            disabled: true,
            fullWidth: true,
            variant: "contained",
            size: "large",
            ...props.ActionButtonProps,
            children: t('plugin_wallet_invalid_network')
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: children
    }));
}


/***/ }),

/***/ 94165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ assertNonNull)
/* harmony export */ });
/**
 * Ensure a value not null or undefined.
 */ function assertNonNull(val, message = 'Unexpected nil value detected') {
    if (val === null || val === undefined) throw new Error(message);
    return val;
}


/***/ }),

/***/ 23720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ CryptoKeyToJsonWebKey)
/* harmony export */ });
function CryptoKeyToJsonWebKey(key) {
    return crypto.subtle.exportKey('jwk', key);
}


/***/ }),

/***/ 69370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ startEffects)
/* harmony export */ });
function startEffects(hot) {
    const ac = new AbortController();
    hot === null || hot === void 0 ? void 0 : hot.dispose(()=>ac.abort()
    );
    return {
        signal: ac.signal,
        run (callback) {
            try {
                ac.signal.addEventListener('abort', callback());
            } catch (error) {
                console.error(error);
            }
        }
    };
}


/***/ }),

/***/ 49613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iV": () => (/* reexport */ utils_pure_crypto/* CryptoKeyToJsonWebKey */.i),
  "rP": () => (/* reexport */ EMPTY_LIST),
  "G1": () => (/* reexport */ OnDemandWorker),
  "Cq": () => (/* reexport */ assertion/* assertNonNull */.C),
  "J3": () => (/* reexport */ memoizePromise),
  "mS": () => (/* reexport */ type/* restorePrototype */.mS),
  "Yo": () => (/* reexport */ type/* restorePrototypeArray */.Yo),
  "Wu": () => (/* reexport */ hmr/* startEffects */.W)
});

// UNUSED EXPORTS: EMPTY_OBJECT, assert, nonNullable

// EXTERNAL MODULE: ./utils-pure/type/index.ts + 1 modules
var type = __webpack_require__(76871);
// EXTERNAL MODULE: ./utils-pure/assertion/index.ts
if (1711 != __webpack_require__.j) {
var assertion = __webpack_require__(94165);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(77184);
;// CONCATENATED MODULE: ./utils-pure/memoize.ts

/**
 * The promise version of lodash-es/memoize
 * @param f An async function
 * @param resolver If the function has 1 param, it can be undefined
 * as `x => x`. If it has more than 1 param, you must specify a function
 * to map the param the memoize key.
 */ function memoizePromise(f, resolver) {
    if (resolver === undefined) resolver = (x)=>x
    ;
    const memorizedFunction = (0,memoize/* default */.Z)(async function(...args) {
        try {
            // ? DO NOT remove "await" here
            return await f(...args);
        } catch (error) {
            memorizedFunction.cache.delete(resolver(...args));
            throw error;
        }
    }, resolver);
    return memorizedFunction;
}

;// CONCATENATED MODULE: ./utils-pure/misc.ts
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

// EXTERNAL MODULE: ./utils-pure/hmr.ts
var hmr = __webpack_require__(69370);
// EXTERNAL MODULE: ./utils-pure/crypto/index.ts
var utils_pure_crypto = __webpack_require__(23720);
;// CONCATENATED MODULE: ./utils-pure/OnDemandWorker/index.ts
// Implementation detail
/**
 * A Worker-like class that create/destory Worker on demand.
 *
 * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
 * This "Alive" MUST be the first message.
 */ class OnDemandWorker extends EventTarget {
    watchUsage() {
        const i = setInterval(()=>{
            if (!this.worker) {
                clearInterval(i);
                return;
            }
            if (Date.now() - this.lastUsed > this.inactiveTimeToTerminate) {
                this.log('inactive for', this.inactiveTimeToTerminate / 1000, 'sec');
                this.terminate();
                clearInterval(i);
            }
        }, Math.min(this.inactiveTimeToTerminate, 60 * 1000));
    }
    log(...args) {
    // console.log(`OnDemandWorker ${this.init[1]?.name}`, ...args)
    }
    use(onReady) {
        this.keepAlive();
        if (this.worker) return onReady();
        this.worker = new Worker(...this.__init);
        // TODO: what if the worker does not start successfully?
        this.worker.addEventListener('message', ()=>{
            this.worker.addEventListener('message', (e)=>this.dispatchEvent(cloneEvent(e))
            );
            onReady();
        }, {
            once: true
        });
        this.worker.addEventListener('error', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.worker.addEventListener('messageerror', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.watchUsage();
    }
    terminate() {
        var ref;
        (ref = this.worker) === null || ref === void 0 ? void 0 : ref.terminate();
        this.worker = undefined;
        this.log('terminated');
        this.dispatchEvent(new Event('terminated'));
    }
    keepAlive() {
        this.log('keep alive');
        this.lastUsed = Date.now();
    }
    onTerminated(callback) {
        this.addEventListener('terminated', callback, {
            once: true
        });
        return ()=>this.removeEventListener('terminated', callback)
        ;
    }
    postMessage(...args) {
        this.use(()=>{
            var ref;
            return (ref = this.worker) === null || ref === void 0 ? void 0 : ref.postMessage(...args);
        });
    }
    set onmessage(_) {
        OnDemandWorker_throws();
    }
    set onerror(_) {
        OnDemandWorker_throws();
    }
    set onmessageerror(_) {
        OnDemandWorker_throws();
    }
    /**
     * A Worker-like class that create/destory Worker on demand.
     *
     * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
     * This "Alive" MUST be the first message.
     */ constructor(...init){
        var ref;
        super();
        this.worker = undefined;
        this.lastUsed = Date.now();
        this.__init = init;
        this.inactiveTimeToTerminate = 15 * 60 * 1000;
        var ref1;
        this.log((ref1 = (ref = init[1]) === null || ref === void 0 ? void 0 : ref.name) !== null && ref1 !== void 0 ? ref1 : 'anonymous Worker', 'created with', ...init);
    }
}
function OnDemandWorker_throws() {
    throw new TypeError('Please use addEventListener');
}
function cloneEvent(e) {
    // @ts-ignore
    return new e.constructor(e.type, e);
}

;// CONCATENATED MODULE: ./utils-pure/index.ts









/***/ }),

/***/ 76871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mS": () => (/* reexport */ restorePrototype),
  "Yo": () => (/* reexport */ restorePrototypeArray)
});

// UNUSED EXPORTS: assert, nonNullable

;// CONCATENATED MODULE: ./utils-pure/type/prototype.ts
/**
 * @description Restore prototype on an object. This does not work with classes that uses ES private field.
 * @example
 * restorePrototype({ value: 1 }, SomeClass.prototype)
 * @param obj The prototype-less object.
 * @param prototype The prototype object
 * @returns The original object with prototype restored.
 */ function restorePrototype(obj, prototype) {
    if (!obj) return obj;
    Object.setPrototypeOf(obj, prototype);
    return obj;
}
function restorePrototypeArray(arr, prototype) {
    if (!arr) return arr;
    arr.forEach((x)=>Object.setPrototypeOf(x, prototype)
    );
    return arr;
}

;// CONCATENATED MODULE: ./utils-pure/type/index.ts

function assert(x, ...args) {
    console.assert(x, ...args);
    if (!x) throw new Error('Assert failed!');
}
function nonNullable(x) {
    return x !== undefined && x !== null;
}


/***/ }),

/***/ 89403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useBlockie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
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

/***/ 33973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useERC20TokenAllowance)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91339);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50321);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49861);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13601);




function useERC20TokenAllowance(address, spender) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .m)();
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_2__/* .useChainId */ .xx)();
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC20TokenContract */ .x)(address);
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .useBeatRetry */ .ND)(async ()=>{
        if (!account || !spender || !erc20Contract) return '0';
        return erc20Contract.methods.allowance(account, spender).call({
            from: account
        });
    }, 30 * 1000, [
        account,
        chainId,
        spender,
        erc20Contract
    ]);
}


/***/ }),

/***/ 11091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useERC20TokenBalance)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83317);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91339);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49861);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50321);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13601);





/**
 * Fetch token balance from chain
 * @param address
 * @param targetChainId
 */ function useERC20TokenBalance(address, targetChainId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)();
    const defaultChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    const chainId = targetChainId !== null && targetChainId !== void 0 ? targetChainId : defaultChainId;
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC20TokenContract */ .x)(address);
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .useBeatRetry */ .ND)(async ()=>{
        if (!account || !address || !erc20Contract) return undefined;
        return erc20Contract.methods.balanceOf(account).call({
            from: account,
            chainId: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(chainId)
        });
    }, 30 * 1000, [
        account,
        chainId,
        address,
        erc20Contract
    ]);
}


/***/ }),

/***/ 10580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useERC721ContractDetailed)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19149);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13601);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68699);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54243);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11304);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36130);






function useERC721ContractDetailed(address) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const { GET_CONTRACT_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .useOpenseaAPIConstants */ .$Y)();
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC721TokenContract */ .n)(address);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(async ()=>{
        if (!address || !wallet_ts__WEBPACK_IMPORTED_MODULE_0__.EthereumAddress.isValid(address) || !erc721TokenContract) return;
        const erc721ContractDetailedFromChain = await getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract);
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
    }, [
        address,
        chainId,
        erc721TokenContract
    ]);
}
const lazyBlank = Promise.resolve('');
async function getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract) {
    var ref, ref1, ref2;
    const results = await Promise.allSettled([
        (ref = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.name())) !== null && ref !== void 0 ? ref : lazyBlank,
        (ref1 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.symbol())) !== null && ref1 !== void 0 ? ref1 : lazyBlank,
        (ref2 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.baseURI())) !== null && ref2 !== void 0 ? ref2 : lazyBlank, 
    ]);
    const [name, symbol, baseURI] = results.map((result)=>result.status === 'fulfilled' ? result.value : ''
    );
    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createERC721ContractDetailed */ .ek)(chainId, address, name, symbol, baseURI);
}
async function getERC721ContractDetailedFromOpensea(address, chainId, apiUrl) {
    const response = await fetch(`${apiUrl}/${address}`);
    if (response.ok) {
        const data = await response.json();
        return (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createERC721ContractDetailed */ .ek)(chainId, address, data.name, data.symbol, undefined, data.image_url);
    }
    return null;
}


/***/ }),

/***/ 2871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19149);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49861);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32053);



/**
 * Fetch native token balance from chain
 * @param address
 */ function useNativeTokenBalance() {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const { value: balance = '0'  } = (0,_useBalance__WEBPACK_IMPORTED_MODULE_1__/* .useBalance */ .K)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!account) return;
        return balance;
    }, [
        account,
        balance
    ]);
}


/***/ }),

/***/ 15516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useTransactionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25071);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66748);



function txStateReducer(state, nextState) {
    const allowed = nextState.type === _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN || (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isNextStateAvailable */ .NU)(state.type, nextState.type);
    return allowed ? nextState : state;
}
function useTransactionState() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(txStateReducer, {
        type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
    });
}


/***/ }),

/***/ 32760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useWallets)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49861);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69172);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25071);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52646);




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

/***/ 66748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ir": () => (/* binding */ isFinalState),
/* harmony export */   "NU": () => (/* binding */ isNextStateAvailable)
/* harmony export */ });
/* unused harmony export isEIP1559Transaction */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14381);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25071);


function isEIP1559Transaction(receipt) {
    return typeof receipt.maxFeePerGas !== 'undefined' && typeof receipt.maxPriorityFeePerGas !== 'undefined';
}
function isFinalState(type) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED
    ].includes(type);
}
/**
 * UNKNOWN -> WAIT_FOR_CONFIRMING
 * UNKNOWN, WAIT_FOR_CONFIRMING -> HASH
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH -> RECEIPT
 * WAIT_FOR_CONFIRMING, HASH, RECEIPT -> CONFIRMED
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH, RECEIPT -> FAILED
 */ function isNextStateAvailable(type, nextType) {
    switch(nextType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN:
            return false;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(nextType);
    }
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


/***/ }),

/***/ 46488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valueEqual);


/***/ }),

/***/ 55352:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1a63223b7f16fe26d5f8.png";

/***/ }),

/***/ 24778:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/473ab885cba246e4f9f0.png";

/***/ }),

/***/ 81886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/93c1afb41af34fc0ed48.png";

/***/ }),

/***/ 27077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6a782854559834dd67a1.png";

/***/ }),

/***/ 42880:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1eca24f4e181c936b32f.png";

/***/ }),

/***/ 3310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/73aab4123001e8c43295.png";

/***/ }),

/***/ 26017:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e08802175f295737a749.png";

/***/ }),

/***/ 26686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c2e4f93f6cacfaf0e58f.png";

/***/ }),

/***/ 79000:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e62067e364007c72e059.png";

/***/ }),

/***/ 75556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4948ee35a4630775a9dd.png";

/***/ }),

/***/ 70742:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/46b37bad3071ab485e3c.png";

/***/ }),

/***/ 39022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/893e99123a1793cbc778.png";

/***/ }),

/***/ 48352:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dc34da96a01f0e7b8e4a.png";

/***/ }),

/***/ 16300:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ebc9fb84b863c2f23884.png";

/***/ }),

/***/ 72921:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/740bc66541a5c1f459e7.png";

/***/ }),

/***/ 91488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5c74339465a5c0254083.png";

/***/ }),

/***/ 59203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/606c71d41fe7381ece9b.png";

/***/ }),

/***/ 42440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d361e62a61049a8ca858.png";

/***/ }),

/***/ 15515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/073ba01ed1558c712de2.png";

/***/ }),

/***/ 96344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/98d46d881ebd22c5705a.png";

/***/ }),

/***/ 5713:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ded72d1ea95e9c1cff11.png";

/***/ }),

/***/ 5337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/515b1f27d3dcc143f45d.png";

/***/ }),

/***/ 28866:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 34517:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"unlocked","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"bytes32","name":"validation","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 47744:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"end","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"indexed":false,"internalType":"uint128[]","name":"ratios","type":"uint128[]"},{"indexed":false,"internalType":"address","name":"qualification","type":"address"},{"indexed":false,"internalType":"uint256","name":"limit","type":"uint256"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"uint128","name":"input_total","type":"uint128"},{"indexed":false,"internalType":"bool","name":"claimed","type":"bool"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[],"name":"base_time","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"destructed","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"end_time","type":"uint256"},{"internalType":"address","name":"qualification_addr","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_base_time","type":"uint64"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint32","name":"_unlock_time","type":"uint32"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 50092:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapAVAXForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactAVAXForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForAVAX","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForAVAXSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactAVAX","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactAVAXForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"WAVAX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]');

/***/ }),

/***/ 75517:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH9","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH9","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactInputParams","name":"params","type":"tuple"}],"name":"exactInput","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactInputSingleParams","name":"params","type":"tuple"}],"name":"exactInputSingle","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactOutputParams","name":"params","type":"tuple"}],"name":"exactOutput","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactOutputSingleParams","name":"params","type":"tuple"}],"name":"exactOutputSingle","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"refundETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowed","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowedIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"sweepToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"sweepTokenWithFee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"unwrapWETH9","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"unwrapWETH9WithFee","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]');

/***/ })

}]);