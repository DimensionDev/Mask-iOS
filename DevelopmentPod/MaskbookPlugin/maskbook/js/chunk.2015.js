(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2015],{

/***/ 13943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(97538);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(93086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(84879);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(20153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.69_9eb0130ea7f00b7e78e913147317bb83/node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(99572);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.69_9eb0130ea7f00b7e78e913147317bb83/node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(74707);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.69_9eb0130ea7f00b7e78e913147317bb83/node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(82298);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(20895);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabPanel/TabPanel.js


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

/***/ 84254:
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

/***/ 68098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ iOSWebkitChannel)
/* harmony export */ });
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


/***/ }),

/***/ 75126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ hasNativeAPI),
/* harmony export */   "Nz": () => (/* binding */ nativeAPI)
/* harmony export */ });
/* unused harmony export sharedNativeAPI */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _iOS_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68098);



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
        const api = sharedNativeAPI = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 1990).then(__webpack_require__.bind(__webpack_require__, 31990)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new _iOS_channel__WEBPACK_IMPORTED_MODULE_1__/* .iOSWebkitChannel */ .c()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 49656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ InputBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54933);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67020);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82591);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8882);
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

/***/ 17253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76102);
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49656);



function SearchInput(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputBox__WEBPACK_IMPORTED_MODULE_1__/* .InputBox */ .W, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .SearchIcon */ .W, {}),
        ...props
    }));
}


/***/ }),

/***/ 22654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17939);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
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

/***/ 62562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ PluginPetMessages),
/* harmony export */   "k": () => (/* binding */ PluginPetRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89729);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43576);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83477);



if (false) {}
const PluginPetMessages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PetsPluginID */ .Dt, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const PluginPetRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PetsPluginID */ .Dt, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(5773), __webpack_require__.e(6134), __webpack_require__.e(8557)]).then(__webpack_require__.bind(__webpack_require__, 7047))
, PluginPetMessages.events.rpc);


/***/ }),

/***/ 13906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ TraderDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89729);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92971);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(78535);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78336);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78037);
/* harmony import */ var _trader_useAllProviderTradeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97180);
/* harmony import */ var _trader_useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72515);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93179);
/* harmony import */ var _Trader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79638);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7282);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42421);
/* harmony import */ var _components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96988);
/* harmony import */ var _components_shared_NetworkTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28617);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19669);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43576);

















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

/***/ 5659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName)
/* harmony export */ });
/* unused harmony exports resolveCurrencyName, resolveTradeProviderLink, resolveTradePairLink, resolveUniswapWarningLevel, resolveUniswapWarningLevelColor, resolveZrxTradePoolName */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80632);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87002);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85143);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57534);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18392);
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

/***/ 16545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89729);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6916);


if (false) {}
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);


/***/ }),

/***/ 17051:
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(29528);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(54933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(93230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(54105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(57767);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.4_881b2a51613eca9a23c14f7ecef9122a/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(61460);
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
var service = __webpack_require__(99997);
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

/***/ 31937:
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var src = __webpack_require__(37828);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(16365);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(76322);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(67943);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.27.0_react@18.0.0-rc.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(67947);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(19669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.11.6/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(34181);
// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(22654);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(69471);
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
var base_src = __webpack_require__(52522);
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
                    /*#__PURE__*/ return (0,jsx_runtime.jsxs)("div", {
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
                    }, index);
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
                            /*#__PURE__*/ return (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
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
                            });
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
                            /*#__PURE__*/ return (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
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
                            });
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
                            /*#__PURE__*/ return (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
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
                            });
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

/***/ 49863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ WalletRenameWalletDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78535);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47673);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73774);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70202);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78336);
/* harmony import */ var _utils_i18n_next_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58179);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78037);








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

/***/ 52937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ RestoreLegacyWalletDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22572);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22749);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78037);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68532);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42421);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18249);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78535);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67020);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73774);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43576);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78336);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70202);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7282);













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

/***/ 90397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ WalletRiskWarningDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61460);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78037);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81409);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71831);
/* harmony import */ var _mui_icons_material_PriorityHigh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13955);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78535);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54933);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21065);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67020);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47673);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(73774);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42421);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78336);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7282);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70202);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57767);













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

/***/ 71090:
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
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(54105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90773);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(28532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(21065);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(7334);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(51503);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
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
var useAccount = __webpack_require__(81409);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(74727);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useSocket.ts
var useSocket = __webpack_require__(19132);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721ContractDetailed.ts
var useERC721ContractDetailed = __webpack_require__(48136);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(29528);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/SearchInput.tsx
var SearchInput = __webpack_require__(17253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(50499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.5.3/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(46149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/unionBy.js
var unionBy = __webpack_require__(60398);
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
    const { data: assets , state: loadingCollectionState  } = (0,useCollectibles/* useCollections */.b)(account, types/* ChainId.Mainnet */.a_.Mainnet, open);
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
                chainId: types/* ChainId.Mainnet */.a_.Mainnet,
                name: x.name,
                symbol: x.symbol,
                baseURI: x.iconURL,
                iconURL: x.iconURL
            },
            balance: x.balance
        })
    );
    const contractList = chainId === types/* ChainId.Mainnet */.a_.Mainnet && renderAssets ? (0,unionBy/* default */.Z)([
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
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchInput/* SearchInput */.M, {
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

/***/ 44614:
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
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(58179);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts
var native_rpc = __webpack_require__(75126);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(44438);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90773);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(28532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ImageList/ImageList.js + 1 modules
var ImageList = __webpack_require__(73314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ImageListItem/ImageListItem.js + 1 modules
var ImageListItem = __webpack_require__(48227);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var src_utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(93230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(54259);
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
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ShadowRootTooltip */.p_, {
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
var settings = __webpack_require__(3087);
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

/***/ 83796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ SelectTokenDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11178);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78535);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92971);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79518);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78336);
/* harmony import */ var _Wallet_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70202);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7282);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78037);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85143);
/* harmony import */ var _social_network_adaptor_minds_com_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45279);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44131);


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
        snsId: _social_network__WEBPACK_IMPORTED_MODULE_9__/* .activatedSocialNetworkUI.networkIdentifier */ .LM.networkIdentifier,
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
        await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_7__/* .delay */ .gw)(300);
    }, [
        id,
        setDialog
    ]);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setDialog({
            open: false,
            uuid: id
        });
        await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_7__/* .delay */ .gw)(300);
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

/***/ 5389:
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-rc.0/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(22749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(47673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallets.ts
var useWallets = __webpack_require__(4521);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(7334);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(10197);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(21065);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(17060);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(90056);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(52867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(54462);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockie.ts
var useBlockie = __webpack_require__(83457);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
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
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
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
        await (0,esm/* delay */.gw)(100);
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
                    /*#__PURE__*/ return (0,jsx_runtime.jsx)(WalletInList, {
                        wallet: wallet,
                        selected: (selectedWallet === null || selectedWallet === void 0 ? void 0 : selectedWallet.address) === wallet.address,
                        onClick: ()=>onSelect(wallet.address)
                    }, wallet.address);
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

/***/ 51945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ TransactionDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78535);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54105);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67020);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4467);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47673);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(73774);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(44542);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70751);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92971);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18249);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29528);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7282);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78037);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78336);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70202);











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

/***/ 29992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ TransactionSnackbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4467);
/* harmony import */ var _mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3799);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92971);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18392);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18249);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29528);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70202);
/* harmony import */ var _WalletStatusDialog_TransactionDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91339);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99997);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7282);










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

/***/ 41973:
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(47673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ImageList/ImageList.js + 1 modules
var ImageList = __webpack_require__(73314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ImageListItem/ImageListItem.js + 1 modules
var ImageListItem = __webpack_require__(48227);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js
var map = __webpack_require__(857);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(93230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(54259);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(30282);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(57256);
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

/***/ 91339:
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
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(76322);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 2 modules
var useERC20TokenDetailed = __webpack_require__(98468);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var src = __webpack_require__(52522);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 26 modules
var constants = __webpack_require__(79518);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(77031);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
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

// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 3 modules
var locales_legacy = __webpack_require__(90795);
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

/***/ 82014:
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(47673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Error.js
var icons_material_Error = __webpack_require__(58056);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(78037);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox.tsx
var WalletStatusBox = __webpack_require__(96988);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ./src/utils/messages.ts
var utils_messages = __webpack_require__(87478);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(81409);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(7334);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(21330);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(99850);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var ITO_constants = __webpack_require__(61682);
// EXTERNAL MODULE: ./src/plugins/Transak/messages.ts
var Transak_messages = __webpack_require__(16545);
// EXTERNAL MODULE: ./src/plugins/Pets/messages.ts
var Pets_messages = __webpack_require__(62562);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(62517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(54105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90773);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(32824);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(28532);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 2 modules
var useERC20TokenDetailed = __webpack_require__(98468);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(77031);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 26 modules
var evm_constants = __webpack_require__(79518);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(29528);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ./src/components/shared/NetworkTab.tsx
var NetworkTab = __webpack_require__(28617);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(71986);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
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
var EthereumWalletConnectedBoundary = __webpack_require__(15061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(17939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
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
var useContract = __webpack_require__(40085);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSpaceStationContract.ts


function useSpaceStationContract() {
    const { CONTRACT_ADDRESS  } = (0,evm_constants/* useSpaceStationGalaxyConstants */.gE)();
    return (0,useContract/* useContract */.cq)(CONTRACT_ADDRESS, SpaceStationGalaxy_namespaceObject);
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(43616);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(50499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(96727);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(57767);
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
var ITO_messages = __webpack_require__(49912);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockNumber.ts
var useBlockNumber = __webpack_require__(81508);
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
var useClaimCallback = __webpack_require__(30525);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(80066);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ./utils-pure/index.ts + 6 modules
var utils_pure = __webpack_require__(61427);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts + 46 modules
var useAllProviderTradeContext = __webpack_require__(97180);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(72515);
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
var specific = __webpack_require__(27387);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(57256);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(17869);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(52522);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(76322);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(24183);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(69471);
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

// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var Trader_messages = __webpack_require__(93179);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsForm.tsx



















function SavingsForm({ chainId , selectedProtocol , tab , onClose  }) {
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
    const { setDialog: openSwapDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Trader_messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    const onConvertClick = (0,react.useCallback)(()=>{
        const token = protocol.getFungibleTokenDetails(targetChainId);
        var _name, _symbol;
        openSwapDialog({
            open: true,
            traderProps: {
                defaultInputCoin: {
                    id: token.address,
                    name: (_name = token.name) !== null && _name !== void 0 ? _name : '',
                    symbol: (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : '',
                    contract_address: token.address,
                    decimals: token.decimals
                }
            }
        });
    }, [
        protocol,
        targetChainId,
        openSwapDialog
    ]);
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
                                            onClose === null || onClose === void 0 ? void 0 : onClose();
                                            onConvertClick();
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




















function SavingsDialog({ open , onClose  }) {
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
                            onClose: onClose
                        })
                    ]
                })
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TraderDialog.tsx
var TraderDialog = __webpack_require__(13906);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(20895);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(13943);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(61458);
// EXTERNAL MODULE: ./src/plugins/FindTruman/Worker/apis/index.ts
var apis = __webpack_require__(16645);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(56213);
// EXTERNAL MODULE: ./src/plugins/FindTruman/context.ts
var context = __webpack_require__(35643);
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
var FindTruman_types = __webpack_require__(25686);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(28242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(21065);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(2473);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(47238);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(59366);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(67943);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/getUnixTime/index.js + 1 modules
var getUnixTime = __webpack_require__(4975);
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
            width: '100%',
            objectFit: 'contain',
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
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            spacing: 2,
            children: [
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
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestItem, {
                            quest: quest
                        })
                    }, quest.id)
                ),
                partsInfo.boxes.map((box)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
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
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PartItem, {
                            part: part
                        })
                    }, part.tokenId)
                )
            ]
        }) : null
    }));
};
function PoapLabel(props) {
    const { id , poapImg , size  } = props;
    return id ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
            src: poapImg !== null && poapImg !== void 0 ? poapImg : ''
        }),
        label: `#${id}`,
        size: size !== null && size !== void 0 ? size : 'small',
        variant: "filled"
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        src: poapImg,
        style: {
            width: '24px',
            height: '24px',
            borderRadius: '100%'
        }
    });
}
function PartSkeleton() {
    const { classes  } = PartsPanel_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        className: classes.skeleton,
        item: true,
        xs: 4,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                width: 80,
                height: 24
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                variant: "rectangular",
                animation: "wave",
                width: 168,
                height: 168
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                width: 168,
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
    var ref, ref1;
    const { part  } = props;
    const { classes  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    var ref2;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                PopperProps: {
                    disablePortal: true
                },
                arrow: true,
                title: part.name,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    lineHeight: "24px",
                    noWrap: true,
                    textAlign: "center",
                    variant: "body1",
                    color: "text.primary",
                    children: part.name
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'relative'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: classes.cover,
                    src: part.img
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "30px",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        size: "small",
                        label: getPartName(t, part.type),
                        color: "primary"
                    }),
                    ((ref = part.fromBox) === null || ref === void 0 ? void 0 : (ref1 = ref.completedQuest) === null || ref1 === void 0 ? void 0 : ref1.needPoap) && !!part.fromBox.completedQuest.tokenId && /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                        poapImg: (ref2 = consts === null || consts === void 0 ? void 0 : consts.poapImg) !== null && ref2 !== void 0 ? ref2 : '',
                        id: part.fromBox.completedQuest.tokenId
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
    const meetPoap = (0,react.useMemo)(()=>{
        return !quest.needPoap || !!quest.poaps.find((e)=>!e.used
        );
    }, [
        quest
    ]);
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    height: '24px'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.ribbonWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: consts === null || consts === void 0 ? void 0 : consts.boxImg
                    }),
                    quest.needPoap && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        position: "absolute",
                        top: "4px",
                        right: "4px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                            size: "medium",
                            poapImg: (ref = consts === null || consts === void 0 ? void 0 : consts.poapImg) !== null && ref !== void 0 ? ref : ''
                        })
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
                children: meetPoap ? t('plugin_find_truman_dialog_get') : t('plugin_find_truman_poap_required_title_simple')
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
    var ref, ref3;
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
    var ref4, ref5;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    height: '24px'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.ribbonWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: box.isOpened ? box.img : consts === null || consts === void 0 ? void 0 : consts.boxImg
                    }),
                    !box.isOpened && ((ref = box.completedQuest) === null || ref === void 0 ? void 0 : ref.needPoap) && !!box.completedQuest.tokenId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        position: "absolute",
                        top: "4px",
                        right: "4px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                            size: "medium",
                            id: box.completedQuest.tokenId,
                            poapImg: (ref4 = consts === null || consts === void 0 ? void 0 : consts.poapImg) !== null && ref4 !== void 0 ? ref4 : ''
                        })
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
            box.isOpened ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "30px",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        size: "small",
                        label: getPartName(t, box.partType),
                        color: "primary"
                    }),
                    ((ref3 = box.completedQuest) === null || ref3 === void 0 ? void 0 : ref3.needPoap) && !!box.completedQuest.tokenId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        position: "absolute",
                        top: "4px",
                        right: "4px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                            size: "medium",
                            id: box.completedQuest.tokenId,
                            poapImg: (ref5 = consts === null || consts === void 0 ? void 0 : consts.poapImg) !== null && ref5 !== void 0 ? ref5 : ''
                        })
                    })
                ]
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
    const poapIds = (0,react.useMemo)(()=>{
        return quest.poaps.map((e)=>`#${e.tokenId}`
        ).join(', ');
    }, [
        quest
    ]);
    const availablePoap = (0,react.useMemo)(()=>{
        return quest.poaps.find((e)=>!e.used
        );
    }, [
        quest
    ]);
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
                }),
                quest.needPoap && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.Z, {
                    severity: availablePoap ? 'success' : 'error',
                    sx: {
                        marginTop: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AlertTitle/* default */.Z, {
                            children: t('plugin_find_truman_poap_required_title')
                        }),
                        quest.poaps.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_poap_required_empty')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    rel: "noopener noreferrer",
                                    component: "a",
                                    target: "_blank",
                                    href: consts === null || consts === void 0 ? void 0 : consts.getPoapUrl,
                                    variant: "body2",
                                    sx: {
                                        fontWeight: 'bold',
                                        fontSize: '12px'
                                    },
                                    children: t('plugin_find_truman_poap_required_get')
                                })
                            ]
                        }) : availablePoap ? t('plugin_find_truman_poap_required_meet', {
                            id: `#${availablePoap.tokenId}`
                        }) : quest.poaps.length > 1 ? t('plugin_find_truman_poap_required_used_pl', {
                            id: poapIds
                        }) : t('plugin_find_truman_poap_required_used', {
                            id: poapIds
                        })
                    ]
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(41966);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(93230);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/StageCard.tsx
var StageCard = __webpack_require__(69753);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/OptionsCard.tsx
var OptionsCard = __webpack_require__(71073);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/ResultCard.tsx
var ResultCard = __webpack_require__(33572);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/CompletionCard.tsx
var CompletionCard = __webpack_require__(52461);
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
    const [questions1, setQuestions] = (0,react.useState)();
    const updateQuestions = (0,react.useCallback)(async ()=>{
        if (!account) return;
        const questions = await (0,apis/* fetchQuestions */.Oz)(account);
        questions.fills = questions.fills.map((f)=>{
            return {
                ...f,
                type: FindTruman_types/* PostType.Completion */.hQ.Completion
            };
        });
        questions.polls = questions.polls.map((f)=>{
            return {
                ...f,
                type: FindTruman_types/* PostType.Poll */.hQ.Poll
            };
        });
        questions.puzzles = questions.puzzles.map((f)=>{
            return {
                ...f,
                type: FindTruman_types/* PostType.Puzzle */.hQ.Puzzle
            };
        });
        setQuestions(questions);
    }, [
        account,
        open
    ]);
    (0,react.useEffect)(()=>{
        updateQuestions();
    }, [
        account,
        open
    ]);
    const handleSubmitPoll = async (postType, pollId, choice)=>{
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
        await updateQuestions();
        onUpdate();
    };
    const handleSubmitCompletion = async (quesId, answers)=>{
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        await (0,apis/* submitCompletion */.$F)(account, {
            quesId,
            answers,
            timestamp
        });
        await updateQuestions();
        onUpdate();
    };
    const renderItem = (question)=>{
        if (question.type === FindTruman_types/* PostType.Completion */.hQ.Completion) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CompletionCard/* default */.Z, {
                    onSubmit: handleSubmitCompletion,
                    completionStatus: question
                })
            }, `${question.type}_${question.id}`));
        } else {
            const poll = question;
            return poll.status ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard/* default */.Z, {
                    userStatus: poll,
                    onSubmit: async (choice)=>{
                        return handleSubmitPoll(poll.type, poll.id, choice);
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
        }
    };
    const itemsCritical = (0,react.useMemo)(()=>{
        return [
            ...((questions1 === null || questions1 === void 0 ? void 0 : questions1.fills) || []).filter((d)=>d.critical
            ),
            ...((questions1 === null || questions1 === void 0 ? void 0 : questions1.polls) || []).filter((d)=>d.critical
            ),
            ...((questions1 === null || questions1 === void 0 ? void 0 : questions1.puzzles) || []).filter((d)=>d.critical
            ), 
        ].sort((a, b)=>b.order - a.order
        );
    }, [
        questions1
    ]);
    const itemsNonCritical = (0,react.useMemo)(()=>{
        return [
            ...((questions1 === null || questions1 === void 0 ? void 0 : questions1.fills) || []).filter((d)=>!d.critical
            ),
            ...((questions1 === null || questions1 === void 0 ? void 0 : questions1.polls) || []).filter((d)=>!d.critical
            ),
            ...((questions1 === null || questions1 === void 0 ? void 0 : questions1.puzzles) || []).filter((d)=>!d.critical
            ), 
        ].sort((a, b)=>b.order - a.order
        );
    }, [
        questions1
    ]);
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
                                sx: {
                                    height: '522px'
                                },
                                children: !itemsCritical.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyTip, {}) : itemsCritical.map((e)=>renderItem(e)
                                )
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                className: classes.tabPane,
                                value: ParticipationType.NonCritical,
                                sx: {
                                    height: '522px'
                                },
                                children: !itemsNonCritical.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyTip, {}) : itemsNonCritical.map((e)=>renderItem(e)
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
    const classes = (0,theme_src/* useStylesExtends */.Bc)(useTabsStyles({
        columns: 'repeat(2, 50%)'
    }), props);
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
function EmptyTip() {
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        display: "flex",
        height: "100%",
        alignItems: "center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            margin: "auto",
            textAlign: "center",
            variant: "h6",
            color: "textSecondary",
            children: t('plugin_find_truman_coming_soon')
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/hooks/useConst.ts
var useConst = __webpack_require__(36320);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(33390);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/ArrowForwardRounded.js
var ArrowForwardRounded = __webpack_require__(45274);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/IntroductionPanel.tsx






const IntroductionPanel_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        section: {},
        bannerImg: {
            width: '40%',
            objectFit: 'contain',
            float: 'left',
            marginRight: theme.spacing(2)
        },
        stepCard: {
            display: 'flex',
            marginBottom: theme.spacing(1)
        },
        stepImg: {
            width: '83px',
            objectFit: 'contain',
            borderRadius: '8px',
            marginRight: theme.spacing(2)
        },
        communityRow: {
            display: 'flex',
            columnGap: theme.spacing(1.5)
        },
        communityItem: {
            cursor: 'pointer'
        },
        divider: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1)
        }
    })
);
function IntroductionPanel(props) {
    const { classes  } = IntroductionPanel_useStyles();
    const { const: consts  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    return consts ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.banner.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.bannerImg,
                                src: consts.introduction.banner.img
                            }),
                            consts.introduction.banner.desc.map((e, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: e
                                }, index)
                            )
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                className: classes.divider
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.step.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: consts.introduction.step.steps.map((step, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.stepCard,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        className: classes.stepImg,
                                        src: step.img
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body1",
                                                children: step.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: step.desc
                                            }),
                                            step.link && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                href: step.link.url,
                                                target: "_blank",
                                                variant: "body2",
                                                rel: "noopener noreferrer",
                                                children: step.link.label
                                            })
                                        ]
                                    })
                                ]
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                className: classes.divider
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.community.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.communityRow,
                        children: consts.introduction.community.channels.map((channel, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                className: classes.communityItem,
                                avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    alt: channel.label,
                                    src: channel.img
                                }),
                                label: channel.label,
                                component: "a",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: channel.url
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                className: classes.divider
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.plot.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: consts.introduction.plot.img,
                        style: {
                            width: '100%',
                            objectFit: 'contain',
                            marginBottom: '-5px'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowForwardRounded/* default */.Z, {}),
                        fullWidth: true,
                        variant: "outlined",
                        component: "a",
                        href: consts.introduction.plot.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: consts.introduction.plot.label
                    })
                ]
            })
        ]
    }) : null;
};

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
    const [currentTab, onChange, tabs] = (0,theme_src/* useTabs */.YE)(FindTrumanDialogTab.Introduction, FindTrumanDialogTab.Assets, FindTrumanDialogTab.Participate);
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
                                        value: FindTrumanDialogTab.Introduction,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IntroductionPanel, {})
                                    }),
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
const useTabsStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
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
                gridTemplateColumns: props.columns,
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
    FindTrumanDialogTab["Introduction"] = 'introduction';
    FindTrumanDialogTab["Assets"] = 'assets';
    FindTrumanDialogTab["Participate"] = 'participate';
})(FindTrumanDialogTab || (FindTrumanDialogTab = {}));
const FindTrumanDialogTabValues = [
    FindTrumanDialogTab.Introduction,
    FindTrumanDialogTab.Assets,
    FindTrumanDialogTab.Participate, 
];
function getFindTrumanDialogTabName(t, type) {
    switch(type){
        case FindTrumanDialogTab.Introduction:
            return t('plugin_find_truman_dialog_tab_introduction');
        case FindTrumanDialogTab.Assets:
            return t('plugin_find_truman_dialog_tab_assets');
        case FindTrumanDialogTab.Participate:
            return t('plugin_find_truman_dialog_tab_participate');
    }
}
function FindTrumanDialog_FindTrumanDialogTabs(props) {
    const classes = (0,theme_src/* useStylesExtends */.Bc)(useTabsStyles({
        columns: 'repeat(3, 33.33%)'
    }), props);
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
            createTabItem(FindTrumanDialogTab.Introduction),
            createTabItem(FindTrumanDialogTab.Assets),
            createTabItem(FindTrumanDialogTab.Participate), 
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
        createEntry('Savings', new URL(/* asset import */ __webpack_require__(16300), __webpack_require__.b).toString(), onSavingsDialogOpen, undefined, isNotEvm),
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
        ], isNotEvm, true), 
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
                onClose: onSavingsDialogClose
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

/***/ 83457:
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

/***/ 74727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCollections),
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51503);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77031);
/* harmony import */ var _useSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19132);




function useCollections(address, chainId, dependReady) {
    const id = `mask.fetchNonFungibleCollectionAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectionAsset',
        params: {
            address: address,
            pageSize: 200
        }
    };
    return (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
}
function useCollectibles(address, chainId, dependReady) {
    const { erc721Tokens  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const id = `mask.fetchNonFungibleCollectibleAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectibleAssetV2',
        params: {
            address: address,
            pageSize: 30
        }
    };
    const { data , state , error , retry  } = (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
    const all = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        ...data !== null && data !== void 0 ? data : [],
        ...erc721Tokens.getCurrentValue().filter((x)=>(!chainId || x.contractDetailed.chainId === chainId) && (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(x.info.owner, address)
        ), 
    ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
    );
    return {
        data: all,
        state,
        error,
        retry
    };
}


/***/ }),

/***/ 48136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useERC721ContractDetailed)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22572);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92971);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41966);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46522);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28389);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79518);






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

/***/ 19132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SocketState),
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51503);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22572);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);




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
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
    const { value: socket , loading  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>providerSocket
    , []);
    const { retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!socket || !message.id || loading) return;
        const requestId1 = `${message.id}_${id}`;
        const notifyUpdatedHook = (info)=>{
            if (!info.done) {
                setState(SocketState.receiving);
            } else {
                // workaround for get data from cache
                setTimeout(()=>setState(SocketState.done)
                , 0);
            }
            setError(info.error);
            if (!socket) return;
            const requestId = `${message.id}_${id}`;
            setData(socket.getResult(requestId));
        };
        socket.send({
            ...message,
            notify: notifyUpdatedHook,
            id: requestId1
        });
        // Get data from cache
        setData(socket.getResult(requestId1));
        setState(SocketState.sent);
    }, [
        message.id,
        socket,
        loading,
        id
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
        data: data !== null && data !== void 0 ? data : [],
        state,
        error,
        retry: handleRetry
    };
};


/***/ }),

/***/ 4521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useWallets)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81409);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51503);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18249);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77031);




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

/***/ })

}]);