(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4583],{

/***/ 58967:
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 64715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79844);
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
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(Provider, _Component);

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
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(Consumer, _Component2);

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

/***/ 56604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ DashboardWalletAddERC20TokenDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
if (462 == __webpack_require__.j) {
	/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58713);
}
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37186);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35313);
/* harmony import */ var _DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83071);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99983);
/* harmony import */ var _ERC20PredefinedTokenSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50536);








function DashboardWalletAddERC20TokenDialog(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .useI18N */ .M1)();
    const { wallet  } = props.ComponentProps;
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const onSubmit = (0,_Base__WEBPACK_IMPORTED_MODULE_5__/* .useSnackbarCallback */ .iD)(async ()=>{
        if (!token) return;
        await Promise.all([
            _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.addERC20Token */ .V.addERC20Token(token),
            _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trustERC20Token */ .V.trustERC20Token(wallet.address, token)
        ]);
    }, [
        token
    ], props.onClose);
    var ref;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Base__WEBPACK_IMPORTED_MODULE_5__/* .DashboardDialogCore */ .ef, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Base__WEBPACK_IMPORTED_MODULE_5__/* .DashboardDialogWrapper */ .ge, {
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            }),
            iconColor: "#699CF7",
            primary: t('add_token'),
            content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ERC20PredefinedTokenSelector__WEBPACK_IMPORTED_MODULE_6__/* .ERC20PredefinedTokenSelector */ .o, {
                excludeTokens: Array.from(wallet.erc20_token_whitelist),
                onTokenChange: setToken
            }),
            footer: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* .DebounceButton */ .D0, {
                disabled: !token,
                variant: "contained",
                onClick: onSubmit,
                children: t('add_token_symbol', {
                    symbol: (ref = token === null || token === void 0 ? void 0 : token.symbol) !== null && ref !== void 0 ? ref : 'Token'
                })
            })
        })
    }));
}


/***/ }),

/***/ 18260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ DashboardWalletErrorDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
if (462 == __webpack_require__.j) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91377);
}
if (462 == __webpack_require__.j) {
	/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36156);
}
if (462 == __webpack_require__.j) {
	/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27019);
}
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37186);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70791);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99983);







function DashboardWalletErrorDialog(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .useI18N */ .M1)();
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useHistory */ .k6)();
    const { error  } = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .useQueryParams */ .Kx)([
        'error'
    ]);
    let message = '';
    switch(error){
        case 'nowallet':
            message = t('error_no_wallet');
            break;
        case 'Returned error: gas required exceeds allowance (10000000) or always failing transaction':
            message = t('error_gas_feed_exceeds');
            break;
        case 'Returned error: insufficient funds for gas * price value':
            message = t('error_insufficient_balance');
            break;
        default:
            message = t('error_unknown');
            break;
    }
    const onClose = async ()=>{
        props.onClose();
        // prevent UI updating before dialog disappearing
        await (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .delay */ .gw)(300);
        history.replace(_Route__WEBPACK_IMPORTED_MODULE_2__/* .DashboardRoute.Wallets */ .q.Wallets);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Base__WEBPACK_IMPORTED_MODULE_3__/* .DashboardDialogCore */ .ef, {
        ...props,
        onClose: onClose,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Base__WEBPACK_IMPORTED_MODULE_3__/* .DashboardDialogWrapper */ .ge, {
            size: "small",
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            }),
            iconColor: "#F4637D",
            primary: t('error_wallet'),
            secondary: message,
            footer: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                variant: "contained",
                onClick: onClose,
                children: t('ok')
            })
        })
    }));
}


/***/ }),

/***/ 14962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ DashboardWalletImportDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/credit-card.js
if (462 == __webpack_require__.j) {
var credit_card = __webpack_require__(72659);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
if (462 == __webpack_require__.j) {
var Box = __webpack_require__(76900);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js
if (462 == __webpack_require__.j) {
var FormControlLabel = __webpack_require__(87239);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Checkbox/Checkbox.js + 4 modules
if (462 == __webpack_require__.j) {
var Checkbox = __webpack_require__(98569);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
if (462 == __webpack_require__.j) {
var Typography = __webpack_require__(49283);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
if (462 == __webpack_require__.j) {
var TextField = __webpack_require__(97448);
}
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/InfoOutlined.js
if (462 == __webpack_require__.j) {
var InfoOutlined = __webpack_require__(19072);
}
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(2905);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(98051);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx
var Base = __webpack_require__(99983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
if (462 == __webpack_require__.j) {
var useAsync = __webpack_require__(88088);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletHD.ts




/** Return the wallet with mnemonic words */ function useWalletHD() {
    var ref;
    const selectedWallet = (ref = (0,web3_shared_src/* useWallet */.Osb)()) === null || ref === void 0 ? void 0 : ref.address;
    return (0,useAsync/* default */.Z)(async ()=>{
        const selected = await messages/* WalletRPC.getWallet */.V.getWallet(selectedWallet);
        if (selected === null || selected === void 0 ? void 0 : selected.mnemonic.length) return selected;
        const all = await messages/* WalletRPC.getWallets */.V.getWallets();
        return (0,lodash.first)(all.filter((x)=>x.mnemonic.length
        ).sort((a, z)=>a.createdAt.getTime() - z.createdAt.getTime()
        ));
    }, [
        selectedWallet
    ]).value;
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/Import.tsx
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];














const useWalletImportDialogStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
        wrapper: {
            width: 550
        },
        confirmation: {
            fontSize: 16,
            lineHeight: 1.75,
            [theme.breakpoints.down('sm')]: {
                fontSize: 14
            }
        },
        notification: {
            fontSize: 12,
            fontWeight: 500,
            textAlign: 'center',
            backgroundColor: theme.palette.mode === 'dark' ? '#17191D' : '#EFF5FF',
            padding: '8px 22px',
            margin: theme.spacing(1, 0, 0),
            borderRadius: '4px'
        },
        notificationIcon: {
            width: 16,
            height: 16,
            color: theme.palette.primary.main
        }
    })
);
function DashboardWalletImportDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const state = (0,react.useState)(0);
    const { classes  } = useWalletImportDialogStyle();
    const hdWallet = useWalletHD();
    // wallet name
    const [walletName, setWalletName] = (0,react.useState)('');
    // mnemonic
    const [mnemonic, setMnemonic] = (0,react.useState)('');
    // private key
    const [privateKey, setPrivateKey] = (0,react.useState)('');
    // new wallet
    const [confirmed, setConfirmed] = (0,react.useState)(false);
    const [showNotification, setShowNotification] = (0,react.useState)(false);
    // keystore
    const [keystoreContent, setKeystoreContent] = (0,react.useState)('');
    const [keystorePassword, setKeystorePassword] = (0,react.useState)('');
    const tabProps = {
        tabs: [
            {
                label: t('wallet_new'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletName, {
                            name: walletName,
                            onChange: setWalletName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            sx: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                        color: "primary",
                                        checked: confirmed,
                                        onChange: ()=>setConfirmed((confirmed1)=>!confirmed1
                                            )
                                    }),
                                    label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                        sx: {
                                            display: 'inline-flex',
                                            alignItems: 'center'
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.confirmation,
                                            variant: "body2",
                                            children: t('wallet_confirmation_hint')
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoOutlined/* default */.Z, {
                                    className: classes.notificationIcon,
                                    cursor: "pointer",
                                    onClick: (ev)=>{
                                        ev.stopPropagation();
                                        setShowNotification((t1)=>!t1
                                        );
                                    }
                                })
                            ]
                        }),
                        showNotification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.notification,
                            children: t('wallet_notification')
                        }) : null
                    ]
                })
            },
            {
                label: t('wallet_import_keystore_label'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletName, {
                            name: walletName,
                            onChange: setWalletName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            required: true,
                            multiline: true,
                            rows: 6,
                            variant: "outlined",
                            label: t('wallet_import_keystore_content_label'),
                            placeholder: t('wallet_import_keystore_content_placeholder'),
                            value: keystoreContent,
                            onChange: (e)=>setKeystoreContent(e.target.value)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            required: true,
                            type: "password",
                            variant: "outlined",
                            label: t('wallet_import_keystore_password_label'),
                            placeholder: t('wallet_import_keystore_password_placeholder'),
                            value: keystorePassword,
                            onChange: (e)=>setKeystorePassword(e.target.value)
                        })
                    ]
                })
            },
            {
                label: t('mnemonic_words'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletName, {
                            name: walletName,
                            onChange: setWalletName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            required: true,
                            label: t('mnemonic_words'),
                            value: mnemonic,
                            onChange: (e)=>setMnemonic(e.target.value)
                            ,
                            variant: "outlined"
                        })
                    ]
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: t('private_key'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletName, {
                            name: walletName,
                            onChange: setWalletName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            type: "password",
                            required: true,
                            label: t('private_key'),
                            value: privateKey,
                            onChange: (e)=>setPrivateKey(e.target.value)
                            ,
                            variant: "outlined"
                        })
                    ]
                }),
                sx: {
                    display: 'flex',
                    p: 0
                }
            }, 
        ],
        state,
        height: 'auto'
    };
    const { setDialog: setCreateWalletDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.createWalletDialogUpdated */.R.events.createWalletDialogUpdated);
    const onCreate = (0,react.useCallback)((name)=>{
        if (hdWallet) return;
        setCreateWalletDialog({
            open: true,
            name
        });
    }, [
        hdWallet === null || hdWallet === void 0 ? void 0 : hdWallet.address,
        setCreateWalletDialog
    ]);
    const onDeriveOrImport = (0,Base/* useSnackbarCallback */.iD)(async ()=>{
        switch(state[0]){
            case 0:
                {
                    if (!hdWallet) return;
                    await messages/* WalletRPC.deriveWalletFromPhrase */.V.deriveWalletFromPhrase(walletName, hdWallet.mnemonic, hdWallet.passphrase);
                    break;
                }
            case 1:
                {
                    const { address , privateKey: _private_key_  } = await messages/* WalletRPC.fromKeyStore */.V.fromKeyStore(keystoreContent, Buffer.from(keystorePassword, 'utf-8'));
                    await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
                        name: walletName,
                        address,
                        _private_key_
                    });
                    break;
                }
            case 2:
                {
                    const words = mnemonic.split(' ');
                    if (words.length !== 12) {
                        throw new Error(t('import_failed'));
                    }
                    await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
                        name: walletName,
                        path: `${Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`,
                        mnemonic: words,
                        passphrase: ''
                    });
                    await messages/* WalletRPC.addPhrase */.V.addPhrase({
                        path: Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB,
                        mnemonic: words,
                        passphrase: ''
                    });
                    break;
                }
            case 3:
                {
                    const { address , privateKeyValid  } = await messages/* WalletRPC.recoverWalletFromPrivateKey */.V.recoverWalletFromPrivateKey(privateKey);
                    if (!privateKeyValid) throw new Error(t('import_failed'));
                    await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
                        name: walletName,
                        address,
                        _private_key_: privateKey
                    });
                    break;
                }
            default:
                break;
        }
    }, [
        state[0],
        walletName,
        mnemonic,
        privateKey,
        hdWallet === null || hdWallet === void 0 ? void 0 : hdWallet.address
    ], props.onClose);
    const onSubmit = (0,react.useCallback)(async ()=>{
        if (state[0] !== 0 || hdWallet) {
            await onDeriveOrImport();
            return;
        }
        props.onClose();
        onCreate(walletName);
    }, [
        state[0],
        walletName,
        hdWallet === null || hdWallet === void 0 ? void 0 : hdWallet.address,
        onCreate,
        onDeriveOrImport
    ]);
    const formInvalid = (()=>{
        if (walletName.length === 0 || (0,utils/* checkInputLengthExceed */.Se)(walletName)) {
            return true;
        }
        const isFilled = state[0] === 0 && confirmed || state[0] === 1 && keystoreContent && keystorePassword || state[0] === 2 && mnemonic || state[0] === 3 && privateKey;
        return !isFilled;
    })();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            classes: classes,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(credit_card/* default */.Z, {
            }),
            iconColor: "#4EE0BC",
            primary: t(state[0] === 0 ? 'plugin_wallet_on_create' : 'import_wallet'),
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                ...tabProps
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                variant: "contained",
                onClick: onSubmit,
                disabled: formInvalid,
                children: t(state[0] === 0 ? 'create' : 'import')
            })
        })
    }));
}
const WalletName = ({ name , onChange  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const text = (0,utils/* checkInputLengthExceed */.Se)(name) ? t('input_length_exceed_prompt', {
        name: t('wallet_name').toLowerCase(),
        length: utils/* WALLET_OR_PERSONA_NAME_MAX_LEN */.YU
    }) : undefined;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        helperText: text,
        required: true,
        autoFocus: true,
        label: t('wallet_name'),
        value: name,
        onChange: (e)=>onChange(e.target.value)
        ,
        variant: "outlined"
    }));
};


/***/ }),

/***/ 24267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ twitterEncoding)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96578);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);


const ICAO9303Checksum = {
    encode: (input)=>{
        return `${input}${(input.toUpperCase().replace(/[+/=]/g, '0').split('').map((d, i)=>parseInt(d, 36) * [
                7,
                3,
                1
            ][i % 3]
        ).reduce((l, r)=>l + r
        , 0) % 19).toString(19).toUpperCase()}`;
    },
    decode: (input)=>{
        const content = input.slice(0, input.length - 1);
        const checksum = input.slice(input.length - 1);
        const r = ICAO9303Checksum.encode(content);
        if (checksum === r.slice(r.length - 1)) {
            return content;
        } else {
            return null;
        }
    }
};
const twitterEncoding = {
    /**
     * @link https://github.com/DimensionDev/Maskbook/issues/191
     */ publicKeyEncoder: (text)=>`🎭${ICAO9303Checksum.encode(text)}🎭`
    ,
    publicKeyDecoder: (text)=>{
        const r = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .regexMatchAll */ .zA)(text, /([\d+/=A-Za-z]{20,60})/);
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.isNull)(r)) {
            return [];
        }
        for (const v of r){
            const retV = ICAO9303Checksum.decode(v);
            if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.isNull)(retV)) {
                continue;
            }
            return [
                retV
            ];
        }
        return [];
    },
    /**
     * @link https://github.com/DimensionDev/Maskbook/issues/198
     */ payloadEncoder: (text)=>`https://mask.io/?PostData_v1=${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .batchReplace */ .aP)(text, [
            [
                '🎼',
                '%20'
            ],
            [
                ':||',
                '%40'
            ],
            [
                '+',
                '-'
            ],
            [
                '=',
                '_'
            ],
            [
                /\|/g,
                '.'
            ], 
        ])}`
    ,
    payloadDecoder: (text)=>{
        if (!text) return [];
        if (!text.includes('%20') || !text.includes('%40')) return [];
        const payloadLink = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .parseURL */ .Lk)(text).map((x)=>x.replace(/…$/, '')
        ).filter((x)=>x.endsWith('%40')
        )[0];
        try {
            const { search , pathname  } = new URL(payloadLink);
            const payload = search ? search.slice(1) : pathname.slice(1);
            if (!payload) return [];
            return [
                `🎼${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .batchReplace */ .aP)(payload// https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1476
                // eslint-disable-next-line unicorn/better-regex
                .replace(/^PostData_v\d=/i, '').replace(/^%20/, '').replace(/%40$/, ''), [
                    [
                        '-',
                        '+'
                    ],
                    [
                        '_',
                        '='
                    ],
                    [
                        /\./g,
                        '|'
                    ], 
                ])}:||`, 
            ];
        } catch  {
            return [];
        }
    }
};


/***/ }),

/***/ 85333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ twitterShared)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67561);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37186);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14840);
/* harmony import */ var _encoding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24267);
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22490);






const getPostURL = (post)=>{
    if (!(post.identifier instanceof _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier)) return null;
    return new URL(`https://twitter.com/${post.identifier.userId}/status/${post.postId}`);
};
const twitterShared = {
    ..._base__WEBPACK_IMPORTED_MODULE_3__/* .twitterBase */ .oQ,
    utils: {
        getHomePage: ()=>'https://twitter.com'
        ,
        isValidUsername: _utils_user__WEBPACK_IMPORTED_MODULE_5__/* .usernameValidator */ .S_,
        publicKeyEncoding: {
            encoder (text) {
                return _encoding__WEBPACK_IMPORTED_MODULE_4__/* .twitterEncoding.publicKeyEncoder */ .n.publicKeyEncoder(text);
            },
            decoder (text) {
                return _encoding__WEBPACK_IMPORTED_MODULE_4__/* .twitterEncoding.publicKeyDecoder */ .n.publicKeyDecoder(text);
            }
        },
        textPayloadPostProcessor: {
            encoder (text) {
                return _encoding__WEBPACK_IMPORTED_MODULE_4__/* .twitterEncoding.payloadEncoder */ .n.payloadEncoder(text);
            },
            decoder (text) {
                return _encoding__WEBPACK_IMPORTED_MODULE_4__/* .twitterEncoding.payloadDecoder */ .n.payloadDecoder(text);
            }
        },
        getPostURL,
        getShareLinkURL (message) {
            return new URL(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`);
        },
        createPostContext: (0,_social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_1__/* .createSNSAdaptorSpecializedPostContext */ .k)({
            payloadParser: _utils__WEBPACK_IMPORTED_MODULE_2__/* .deconstructPayload */ .Qn,
            payloadDecoder: _encoding__WEBPACK_IMPORTED_MODULE_4__/* .twitterEncoding.payloadDecoder */ .n.payloadDecoder,
            getURLFromPostIdentifier: getPostURL
        })
    }
};


/***/ }),

/***/ 16331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(14840);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/collecting/getSearchedKeyword.ts


/**
 * Listing all possible pathnames start from /search that the search box will keep existing on twitter.
 * That means the keyword will not be cleaned and related components keep injecting.
 * Otherwise, if a pathname not in this list the keyword will be cleaned and remove relative components from DOM.
 */ const SAFE_PATHNAMES_ON_TWITTER = [
    '/compose/tweet',
    '/search-advanced',
    '/settings/trends',
    '/settings/search',
    '/i/display',
    '/account/switch',
    '/i/keyboard_shortcuts', 
];
function getSearchedKeywordAtTwitter() {
    if (!(0,base/* isTwitter */.L3)(social_network.activatedSocialNetworkUI)) return '';
    const params = new URLSearchParams(location.search);
    const hashTagMatched = location.pathname.match(/\/hashtag\/([A-Za-z]+)/);
    var ref;
    if (location.pathname === '/search' && !params.get('f')) return decodeURIComponent((ref = params.get('q')) !== null && ref !== void 0 ? ref : '');
    else if (hashTagMatched) return '#' + hashTagMatched[1];
    else if (!SAFE_PATHNAMES_ON_TWITTER.includes(location.pathname)) return '';
    return '';
};

// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/shared.ts
var shared = __webpack_require__(85333);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitFriends.ts
var InitFriends = __webpack_require__(46016);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(79328);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(74712);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/openComposeBox.ts


function openComposeBoxTwitter(content, options) {
    messages/* MaskMessage.events.requestComposition.sendToLocal */.y.events.requestComposition.sendToLocal({
        reason: 'timeline',
        open: true,
        content: typeof content === 'string' ? (0,typed_message/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ./src/utils/utils.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4795.js
var utils = __webpack_require__(98621);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts + 1 modules
var sdk = __webpack_require__(83156);
=======
var utils = __webpack_require__(96578);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts + 1 modules
var sdk = __webpack_require__(83554);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.4583.js
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/selector.ts
var selector = __webpack_require__(31948);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/postBox.ts
var postBox = __webpack_require__(57486);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(32951);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/isMobile.ts
var isMobile = __webpack_require__(93633);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/pasteTextToComposition.ts







/**
 * Wait for up to 5000 ms
 * If not complete, let user do it.
 */ const pasteTextToCompositionTwitter = (text, opt)=>{
    const interval = 500;
    const timeout = 5000;
    const worker = async function(abort) {
        const checkSignal = ()=>{
            if (abort.signal.aborted) throw new Error('Aborted');
        };
        if (!(0,postBox/* isCompose */.iv)() && !(0,postBox/* hasEditor */.Wu)()) {
            // open tweet window
            await (0,dom/* untilElementAvailable */.ft)((0,selector/* newPostButtonSelector */.nS)());
            (0,selector/* newPostButtonSelector */.nS)().evaluate().click();
            checkSignal();
        }
        // get focus
        const i = (0,selector/* postEditorDraftContentSelector */.Y5)();
        await (0,dom/* untilElementAvailable */.ft)(i);
        checkSignal();
        while(!(0,postBox/* hasFocus */.uf)(i)){
            i.evaluate().focus();
            checkSignal();
            await (0,utils/* delay */.gw)(interval);
        }
        // paste
        isMobile/* isMobileTwitter */.b ? (0,sdk/* inputText */.iJ)(text) : (0,sdk/* pasteText */.M1)(text);
        await (0,utils/* delay */.gw)(interval);
        if (!(0,postBox/* getEditorContent */.kt)().replace(/\n/g, '').includes(text.replace(/\n/g, ''))) {
            fail(new Error('Unable to paste text automatically'));
        }
    };
    const fail = (e)=>{
        if (opt === null || opt === void 0 ? void 0 : opt.recover) messages/* MaskMessage.events.autoPasteFailed.sendToLocal */.y.events.autoPasteFailed.sendToLocal({
            text
        });
        throw e;
    };
    const abortCtr = new AbortController();
    setTimeout(()=>{
        abortCtr.abort();
    }, timeout);
    worker(abortCtr).then(undefined, (error)=>fail(error)
    );
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/gotoNewsFeedPage.ts
function gotoNewsFeedPageTwitter() {
    if (location.pathname.includes('/home')) location.reload();
    else location.pathname = '/home';
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/automation/gotoProfilePage.ts
function gotoProfilePageTwitter(profile) {
    var ref;
    const path = `/${profile.userId}`;
    (ref = document.querySelector(`[href="${path}"]`)) === null || ref === void 0 ? void 0 : ref.click();
    setTimeout(()=>{
        // The classic way
        if (!location.pathname.startsWith(path)) location.pathname = path;
    }, 400);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(29573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/collecting/identity.ts






function resolveLastRecognizedIdentityInner(ref, cancel) {
    const selfSelector = (0,selector/* selfInfoSelectors */.qB)().handle;
    const assign = ()=>{
        const handle = (0,selector/* selfInfoSelectors */.qB)().handle.evaluate();
        const nickname = (0,selector/* selfInfoSelectors */.qB)().name.evaluate();
        const avatar = (0,selector/* selfInfoSelectors */.qB)().userAvatar.evaluate();
        if (!(0,lodash.isNil)(handle)) {
            ref.value = {
                identifier: new type/* ProfileIdentifier */.WO(base/* twitterBase.networkIdentifier */.oQ.networkIdentifier, handle),
                nickname,
                avatar
            };
        }
    };
    const watcher = new umd.MutationObserverWatcher(selfSelector).addListener('onAdd', ()=>assign()
    ).addListener('onChange', ()=>assign()
    ).startWatch({
        childList: true,
        subtree: true
    });
    cancel.addEventListener('abort', ()=>watcher.stopWatch()
    );
}
const IdentityProviderTwitter = {
    hasDeprecatedPlaceholderName: false,
    lastRecognized: social_network.creator.IdentityResolveProviderLastRecognized(),
    start (cancel) {
        resolveLastRecognizedIdentityInner(this.lastRecognized, cancel);
    }
};

// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/url.ts
var url = __webpack_require__(92058);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/utils/index.ts
var src_utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/utils/fetch.ts






/**
 * @example
 * parseNameArea("TheMirror\n(●'◡'●)@1\n@MisakaMirror")
 * >>> {
 *      name: "TheMirror(●'◡'●)@1",
 *      handle: "MisakaMirror"
 * }
 */ const parseNameArea = (nameArea)=>{
    const atIndex = nameArea.lastIndexOf('@');
    const name = nameArea.slice(0, atIndex).replace(/\n+/g, '');
    const handle = nameArea.slice(atIndex + 1).replace(/\n+/g, '');
    return name && handle ? {
        name,
        handle
    } : {
        name: '',
        handle: ''
    };
};
const parseId = (t)=>{
    return (0,utils/* regexMatch */.ZB)(t, /status\/(\d+)/, 1);
};
const serializeToText = (node)=>{
    const snippets = [];
    for (const childNode of Array.from(node.childNodes)){
        if (childNode.nodeType === Node.TEXT_NODE) {
            if (childNode.nodeValue) snippets.push(childNode.nodeValue);
        } else if (childNode.nodeName === 'IMG') {
            const img = childNode;
            var ref, ref1;
            const matched = (ref1 = ((ref = img.getAttribute('src')) !== null && ref !== void 0 ? ref : '').match(/emoji\/v2\/svg\/(\w+)\.svg/)) !== null && ref1 !== void 0 ? ref1 : [];
            if (matched[1]) snippets.push(String.fromCodePoint(Number.parseInt(`0x${matched[1]}`, 16)));
        } else if (childNode.childNodes.length) snippets.push(serializeToText(childNode));
    }
    return snippets.join('');
};
const postIdParser = (node)=>{
    var ref5, ref6;
    const idNode = (0,lodash.defaultTo)((ref5 = node.children[1]) === null || ref5 === void 0 ? void 0 : ref5.querySelector('a[href*="status"]'), (0,lodash.defaultTo)(node.parentElement.querySelector('a[href*="status"]'), (ref6 = node.closest('article > div')) === null || ref6 === void 0 ? void 0 : ref6.querySelector('a[href*="status"]')));
    const isRetweet = !!node.querySelector('[data-testid=socialContext]');
    const pid = idNode ? parseId(idNode.href) : parseId(location.href);
    // You can't retweet a tweet or a retweet, but only cancel retweeting
    return isRetweet ? `retweet:${pid}` : pid;
};
const postNameParser = (node)=>{
    var ref7;
    var ref8;
    const tweetElement = (ref8 = node.querySelector('[data-testid="tweet"]')) !== null && ref8 !== void 0 ? ref8 : node;
    // type 1:
    // normal tweet
    const anchorElement = tweetElement.querySelectorAll('a[role="link"]')[1];
    const nameInUniqueAnchorTweet = (0,src_utils/* collectNodeText */.aW)(anchorElement);
    var ref9;
    // type 2:
    const nameInDoubleAnchorsTweet = Array.from((ref9 = (ref7 = tweetElement.children[1]) === null || ref7 === void 0 ? void 0 : ref7.querySelectorAll('a[data-focusable="true"]')) !== null && ref9 !== void 0 ? ref9 : []).map(serializeToText).join('');
    // type 3:
    // parse name in quoted tweet
    const nameElementInQuoted = (0,dom/* nthChild */.vv)(tweetElement, 0, 0, 0, 0, 0);
    const nameInQuoteTweet = nameElementInQuoted ? serializeToText(nameElementInQuoted) : '';
    var ref10;
    return (ref10 = [
        nameInUniqueAnchorTweet,
        nameInDoubleAnchorsTweet,
        nameInQuoteTweet
    ].filter(Boolean).map(parseNameArea).find((r)=>r.name && r.handle
    )) !== null && ref10 !== void 0 ? ref10 : {
        name: '',
        handle: ''
    };
};
const postAvatarParser = (node)=>{
    var ref11;
    const tweetElement = (ref11 = node.querySelector('[data-testid="tweet"]')) !== null && ref11 !== void 0 ? ref11 : node;
    const avatarElement = tweetElement.children[0].querySelector(`img[src*="twimg.com"]`);
    return avatarElement ? avatarElement.src : undefined;
};
const postContentMessageParser = (node)=>{
    function resolve(content) {
        if (content.startsWith('@')) return 'user';
        if (content.startsWith('#')) return 'hash';
        if (content.startsWith('$')) return 'cash';
        return 'normal';
    }
    function make(node1) {
        if (node1.nodeType === Node.TEXT_NODE) {
            if (!node1.nodeValue) return (0,shared_src.makeTypedMessageEmpty)();
            return (0,shared_src.makeTypedMessageText)(node1.nodeValue);
        } else if (node1 instanceof HTMLAnchorElement) {
            const anchor = node1;
            var ref12;
            const href = (ref12 = anchor.getAttribute('title')) !== null && ref12 !== void 0 ? ref12 : anchor.getAttribute('href');
            const content = anchor.textContent;
            if (!content) return (0,shared_src.makeTypedMessageEmpty)();
            return (0,shared_src.makeTypedMessageAnchor)(resolve(content), href !== null && href !== void 0 ? href : 'javascript: void 0;', content);
        } else if (node1 instanceof HTMLImageElement) {
            const image = node1;
            const src = image.getAttribute('src');
            const matched = src === null || src === void 0 ? void 0 : src.match(/emoji\/v2\/svg\/([\w\-]+)\.svg/);
            if (matched === null || matched === void 0 ? void 0 : matched[1]) {
                const codePoints = matched[1].split('-').map((x)=>Number.parseInt(`0x${x}`, 16)
                );
                return (0,shared_src.makeTypedMessageText)(String.fromCodePoint(...codePoints));
            }
            return (0,shared_src.makeTypedMessageEmpty)();
        } else if (node1.childNodes.length) {
            const flattened = (0,lodash.flattenDeep)(Array.from(node1.childNodes).map(make));
            // conjunct text messages under same node
            if (flattened.every(shared_src.isTypedMessageText)) return (0,shared_src.makeTypedMessageText)(flattened.map((x)=>x.content
            ).join(''));
            return flattened;
        } else return (0,shared_src.makeTypedMessageEmpty)();
    }
    const lang = node.parentElement.querySelector('[lang]');
    return lang ? Array.from(lang.childNodes).flatMap(make) : [];
};
const postImagesParser = async (node)=>{
    const isQuotedTweet = !!node.closest('div[role="link"]');
    const imgNodes = node.querySelectorAll('img[src*="twimg.com/media"]');
    if (!imgNodes.length) return [];
    var ref13;
    const imgUrls = Array.from(imgNodes).filter((node1)=>isQuotedTweet || !node1.closest('div[role="link"]')
    ).flatMap((node1)=>(0,url/* canonifyImgUrl */.WR)((ref13 = node1.getAttribute('src')) !== null && ref13 !== void 0 ? ref13 : '')
    ).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
};
const postParser = (node)=>{
    return {
        ...postNameParser(node),
        avatar: postAvatarParser(node),
        // FIXME:
        // we get wrong pid for nested tweet
        pid: postIdParser(node),
        messages: postContentMessageParser(node).filter((x)=>!(0,shared_src.isTypedMessageEmpty)(x)
        )
    };
};

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(75388);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ./src/utils/memoize.ts
var memoize = __webpack_require__(59935);
// EXTERNAL MODULE: ./src/utils/flags.ts
var flags = __webpack_require__(55);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(19439);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/MaskbookIcon.tsx










function Icon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookIcon */.LX, {
        style: {
            width: props.size,
            height: props.size,
            verticalAlign: 'text-bottom',
            marginLeft: 6
        }
    }));
}
function _(main, size, signal) {
    // TODO: for unknown reason the MutationObserverWatcher doesn't work well
    // To reproduce, open a profile and switch to another profile.
    (0,utils_watcher/* startWatch */.f)(new umd.MutationObserverWatcher(main()).useForeach((ele, _1, meta)=>{
        let remover = ()=>{
        };
        const remove = ()=>remover()
        ;
        const check = ()=>{
            ifUsingMaskbook(new type/* ProfileIdentifier */.WO('twitter.com', (0,selector/* bioPageUserIDSelector */.QK)(main).evaluate() || '')).then(()=>{
                const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                    signal
                });
                root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                    size: size
                }));
                remover = root.destory;
            }, remove);
        };
        check();
        return {
            onNodeMutation: check,
            onTargetChanged: check,
            onRemove: remove
        };
    }), signal);
}
function injectMaskUserBadgeAtTwitter(signal) {
    // profile
    _(selector/* bioPageUserNickNameSelector */.uy, 24, signal);
    // floating bio
    _(selector/* floatingBioCardSelector */.YG, 20, signal);
}
function injectMaskIconToPostTwitter(post, signal) {
    const ls = new umd.LiveSelector([
        post.rootNodeProxy
    ]).map((x)=>{
        var ref, ref1, ref2;
        return (ref = x.current.parentElement) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.previousElementSibling) === null || ref2 === void 0 ? void 0 : ref2.querySelector('a[role="link"] > div > div:first-child');
    }).enableSingleMode();
    ifUsingMaskbook(post.postBy.getCurrentValue()).then(add, remove);
    post.postBy.subscribe(()=>ifUsingMaskbook(post.postBy.getCurrentValue()).then(add, remove)
    );
    let remover = ()=>{
    };
    function add() {
        if (signal === null || signal === void 0 ? void 0 : signal.aborted) return;
        const node = ls.evaluate();
        if (!node) return;
        const proxy = (0,umd.DOMProxy)({
            afterShadowRootInit: {
                mode: flags/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
            }
        });
        proxy.realCurrent = node;
        const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(proxy.afterShadow, {
            signal
        });
        root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
            size: 24
        }));
        remover = root.destory;
    }
    function remove() {
        remover();
    }
}
const ifUsingMaskbook = (0,memoize/* memoizePromise */.J)((pid)=>service/* default.Identity.queryProfile */.ZP.Identity.queryProfile(pid).then((x)=>!!x.linkedPersona ? Promise.resolve() : Promise.reject()
    )
, (pid)=>pid.toText()
);

// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts
var create_post_context = __webpack_require__(67561);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(71299);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/collecting/post.ts
















function registerPostCollectorInner(postStore, cancel) {
    const getTweetNode = (node)=>{
        const root = node.closest([
            'article > div',
            'div[role="link"]'
        ].join());
        if (!root) return null;
        const isCardNode = node.matches('[data-testid="card.wrapper"]');
        const hasTextNode = !!root.querySelector([
            '[data-testid="tweet"] div[lang]',
            '[data-testid="tweet"] + div div[lang]'
        ].join());
        // if a text node already exists, it's not going to decrypt the card node
        if (isCardNode && hasTextNode) return null;
        return root;
    };
    const getCurrentIdentifier = ()=>{
        const current = settings/* currentSelectedIdentity */.G[social_network.activatedSocialNetworkUI.networkIdentifier];
        return social_network.globalUIState.profiles.value.find((i)=>i.identifier.toText() === current.value
        ) || social_network.globalUIState.profiles.value[0];
    };
    const updateProfileInfo = (0,lodash.memoize)((info)=>{
        const currentProfile = getCurrentIdentifier();
        const profileIdentifier = info.postBy.getCurrentValue();
        service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(profileIdentifier, {
            nickname: info.nickname.getCurrentValue(),
            avatarURL: info.avatarURL.getCurrentValue()
        });
        if (currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.linkedPersona) {
            service/* default.Identity.createNewRelation */.ZP.Identity.createNewRelation(profileIdentifier, currentProfile.linkedPersona.identifier);
        }
    }, (info)=>{
        var ref;
        return (ref = info.postBy.getCurrentValue()) === null || ref === void 0 ? void 0 : ref.toText();
    });
    const watcher = new umd.IntervalWatcher((0,selector/* postsContentSelector */.XD)()).useForeach((node, _, proxy)=>{
        const tweetNode = getTweetNode(node);
        if (!tweetNode) return;
        const refs = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const info = shared/* twitterShared.utils.createPostContext */.p.utils.createPostContext({
            comments: undefined,
            rootElement: proxy,
            suggestedInjectionPoint: tweetNode,
            ...refs.subscriptions
        });
        function run() {
            collectPostInfo(tweetNode, refs, cancel);
            collectLinks(tweetNode, refs, cancel);
        }
        run();
        cancel.addEventListener('abort', info.postPayload.subscribe(()=>{
            const payload = info.postPayload.getCurrentValue();
            if (!payload) return;
            if (payload.err && refs.postMetadataImages.size === 0) return;
            updateProfileInfo(info);
        }));
        injectMaskIconToPostTwitter(info, cancel);
        postStore.set(proxy, info);
        return {
            onTargetChanged: run,
            onRemove: ()=>postStore.delete(proxy)
            ,
            onNodeMutation: run
        };
    }).assignKeys((node)=>{
        const tweetNode = getTweetNode(node);
        const isQuotedTweet = (tweetNode === null || tweetNode === void 0 ? void 0 : tweetNode.getAttribute('role')) === 'link';
        return tweetNode ? `${isQuotedTweet ? 'QUOTED' : ''}${postIdParser(tweetNode)}${node.innerText.replace(/\s/gm, '')}` : node.innerText;
    });
    watcher.startWatch(250);
    cancel.addEventListener('abort', ()=>watcher.stopWatch()
    );
}
const PostProviderTwitter = {
    posts: social_network.creator.PostProviderStore(),
    start (cancel) {
        registerPostCollectorInner(this.posts, cancel);
    }
};
function collectPostInfo(tweetNode, info, cancel) {
    if (!tweetNode) return;
    if (cancel === null || cancel === void 0 ? void 0 : cancel.aborted) return;
    const { pid , messages , handle , name , avatar  } = postParser(tweetNode);
    if (!pid) return;
    const postBy = handle ? new type/* ProfileIdentifier */.WO(base/* twitterBase.networkIdentifier */.oQ.networkIdentifier, handle) : type/* ProfileIdentifier.unknown */.WO.unknown;
    info.postID.value = pid;
    if (!info.postBy.value.equals(postBy)) info.postBy.value = postBy;
    info.nickname.value = name;
    info.avatarURL.value = avatar || null;
    // decode steganographic image
    // don't add await on this
    const images = (0,dom/* untilElementAvailable */.ft)((0,selector/* postsImageSelector */.rk)(tweetNode), 10000).then(()=>postImagesParser(tweetNode)
    ).then((urls)=>{
        for (const url of urls)info.postMetadataImages.add(url);
        if (urls.length) return (0,typed_message/* makeTypedMessageTupleFromList */.n_)(...urls.map((x)=>(0,typed_message/* makeTypedMessageImage */.as)(x)
        ));
        return (0,typed_message/* makeTypedMessageEmpty */.WM)();
    }).catch(()=>(0,typed_message/* makeTypedMessageEmpty */.WM)()
    );
    info.postMessage.value = (0,typed_message/* makeTypedMessageTuple */.Zw)([
        ...messages,
        (0,typed_message/* makeTypedMessagePromise */.Ng)(images)
    ]);
}
function collectLinks(tweetNode, info, cancel) {
    if (!tweetNode) return;
    if (cancel === null || cancel === void 0 ? void 0 : cancel.aborted) return;
    const links = [
        ...tweetNode.querySelectorAll('a')
    ].filter((x)=>x.rel
    );
    const seen = new Set([
        'https://help.twitter.com/using-twitter/how-to-tweet#source-labels'
    ]);
    for (const x of links){
        if (seen.has(x.href)) continue;
        seen.add(x.href);
        info.postMetadataMentionedLinks.set(x, x.href);
        service/* default.Helper.resolveTCOLink */.ZP.Helper.resolveTCOLink(x.href).then((val)=>{
            if (cancel === null || cancel === void 0 ? void 0 : cancel.aborted) return;
            if (!val) return;
            info.postMetadataMentionedLinks.set(x, val);
        });
    }
}

// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(87872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.6/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(98723);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/theme.ts
var theme = __webpack_require__(44713);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(51684);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/customization/custom.ts










const primaryColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    29,
    161,
    242
]));
const primaryColorContrastColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    255,
    255,
    255
]));
const backgroundColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    255,
    255,
    255
]));
const PaletteModeProviderTwitter = {
    current: new umd.ValueRef('light'),
    start: startWatchThemeColor
};
function startWatchThemeColor(signal) {
    function updateThemeColor() {
        const color = (0,theme_tools/* getBackgroundColor */.dF)((0,selector/* composeAnchorSelector */.QG)().evaluate());
        const contrastColor = (0,theme_tools/* getForegroundColor */.aF)((0,selector/* composeAnchorTextSelector */.xH)().evaluate());
        const backgroundColor = (0,theme_tools/* getBackgroundColor */.dF)(document.body);
        PaletteModeProviderTwitter.current.value = (0,theme_tools/* isDark */._T)((0,theme_tools/* fromRGB */.f2)(backgroundColor)) ? 'dark' : 'light';
        if (color) primaryColorRef.value = color;
        if (contrastColor) primaryColorContrastColorRef.value = contrastColor;
        if (backgroundColor) backgroundColorRef.value = backgroundColor;
    }
    const watcher = new umd.MutationObserverWatcher((0,selector/* composeAnchorSelector */.QG)()).addListener('onAdd', updateThemeColor).addListener('onChange', updateThemeColor).startWatch({
        childList: true,
        subtree: true
    });
    signal.addEventListener('abort', ()=>watcher.stopWatch()
    );
}
function useThemeTwitterVariant() {
    const primaryColor = (0,shared_src.useValueRef)(primaryColorRef);
    const primaryContrastColor = (0,shared_src.useValueRef)(primaryColorContrastColorRef);
    const backgroundColor = (0,shared_src.useValueRef)(backgroundColorRef);
    const MaskbookTheme = (0,theme/* useClassicMaskTheme */.Uk)({
        appearance: (0,theme_tools/* isDark */._T)((0,theme_tools/* fromRGB */.f2)(backgroundColor)) ? src/* Appearance.dark */.um.dark : src/* Appearance.light */.um.light
    });
    return (0,react.useMemo)(()=>{
        const primaryColorRGB = (0,theme_tools/* fromRGB */.f2)(primaryColor);
        const primaryContrastColorRGB = (0,theme_tools/* fromRGB */.f2)(primaryContrastColor);
        (0,immer_esm/* setAutoFreeze */.Fl)(false);
        const TwitterTheme = (0,immer_esm/* default */.ZP)(MaskbookTheme, (theme)=>{
            theme.palette.background.paper = backgroundColor;
            theme.palette.primary = {
                light: (0,theme_tools/* toRGB */.xr)((0,theme_tools/* shade */.wj)(primaryColorRGB, 10)),
                main: (0,theme_tools/* toRGB */.xr)(primaryColorRGB),
                dark: (0,theme_tools/* toRGB */.xr)((0,theme_tools/* shade */.wj)(primaryColorRGB, -10)),
                contrastText: (0,theme_tools/* toRGB */.xr)(primaryContrastColorRGB)
            };
            theme.shape.borderRadius = isMobile/* isMobileTwitter */.b ? 0 : 15;
            theme.breakpoints.values = {
                xs: 0,
                sm: 687,
                md: 1024,
                lg: 1280,
                xl: 1920
            };
            theme.components = theme.components || {
            };
            theme.components.MuiButton = {
                defaultProps: {
                    size: 'medium',
                    disableElevation: true
                },
                styleOverrides: {
                    root: {
                        borderRadius: 500,
                        textTransform: 'initial',
                        fontWeight: 'bold',
                        minHeight: 39,
                        paddingLeft: 15,
                        paddingRight: 15,
                        boxShadow: 'none',
                        [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                            '&': {
                                height: '28px !important',
                                minHeight: 'auto !important',
                                padding: '0 14px !important'
                            }
                        }
                    },
                    sizeLarge: {
                        minHeight: 49,
                        paddingLeft: 30,
                        paddingRight: 30
                    },
                    sizeSmall: {
                        minHeight: 30,
                        paddingLeft: 15,
                        paddingRight: 15
                    }
                }
            };
            theme.components.MuiPaper = {
                defaultProps: {
                    elevation: 0
                }
            };
            theme.components.MuiTab = {
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    }
                }
            };
        });
        (0,immer_esm/* setAutoFreeze */.Fl)(true);
        return (0,createMuiStrictModeTheme/* default */.Z)(TwitterTheme);
    }, [
        MaskbookTheme,
        backgroundColor,
        primaryColor,
        primaryContrastColor
    ]);
}
function TwitterThemeProvider(props) {
    if (true) throw new Error('This API is only for Storybook!');
    return(/*#__PURE__*/ createElement(ThemeProvider, {
        theme: useThemeTwitterVariant(),
        ...props
    }));
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/ToolboxHint.tsx + 5 modules
var ToolboxHint = __webpack_require__(25738);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/ToolboxHint.tsx







function injectToolboxHintAtTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* toolBoxInSideBarSelector */.ch)());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHintAtTwitter, {
    }));
}
const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        wrapper: {
            paddingTop: 4,
            paddingBottom: 4,
            cursor: 'pointer',
            [theme.breakpoints.down('lg')]: {
                transform: 'translateX(0px)'
            }
        },
        menuItem: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        },
        title: {
            color: theme.palette.mode === 'dark' ? 'rgb(216, 216, 216)' : 'rgb(15, 20, 25)'
        },
        text: {
            marginLeft: 12,
            fontSize: 15,
            color: theme.palette.mode === 'dark' ? 'rgb(216, 216, 216)' : 'rgb(15, 20, 25)',
            paddingRight: theme.spacing(2)
        },
        icon: {
            color: theme.palette.mode === 'dark' ? 'rgb(216, 216, 216)' : 'rgb(15, 20, 25)'
        },
        button: {
            '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgb(7, 15, 25)' : 'rgb(233, 246, 253)'
            },
            '&:active': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgb(13, 29, 48)' : 'rgb(212,237,252)'
            }
        }
    })
);
function ToolboxHintAtTwitter() {
    const { classes  } = useStyles();
    // Todo: add click handler
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHint/* ToolboxHint */.e, {
        classes: {
            wrapper: classes.wrapper,
            menuItem: classes.menuItem,
            title: classes.title,
            text: classes.text,
            button: classes.button,
            icon: classes.icon
        }
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/en-US.json
const en_US_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"This tweet is encrypted with #mask_io (@realMaskbook). 📪🔑\\n\\nInstall {{encrypted}} to decrypt it."}');
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/es-ES.json
const es_ES_namespaceObject = {};
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/fa-IR.json
const fa_IR_namespaceObject = {};
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/fr-FR.json
const fr_FR_namespaceObject = {};
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/it-IT.json
const it_IT_namespaceObject = {};
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/ja-JP.json
const ja_JP_namespaceObject = {};
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/ko-KR.json
const ko_KR_namespaceObject = {};
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/qya-AA.json
const qya_AA_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"crwdns5581:0{{encrypted}}crwdne5581:0"}');
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/ru-RU.json
const ru_RU_namespaceObject = {};
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/zh-CN.json
const zh_CN_namespaceObject = {};
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/zh-TW.json
const zh_TW_namespaceObject = JSON.parse('{"additional_post_box__encrypted_post_pre":"此推文已被 Mask（@realmaskbook）加密。📪🔑\\n\\n請安裝 {{encrypted}} 進行解密。"}');
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.11.4_6270a9eba2c2d5b9e14d97f76e4f3a45/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(8286);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "DO_NOT_USE", ...props })
function useDO_NOT_USE() {
    const { t } = useTranslation("DO_NOT_USE")
    return useMemo(
        function proxyBasedHooks() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = t.bind(null, key));
        },
    });
},
        [t],
    )
}
const DO_NOT_USE_TRANSLATOR = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback langauge in a family of langauges are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts













const languages = {
    en: en_US_namespaceObject,
    es: es_ES_namespaceObject,
    fa: fa_IR_namespaceObject,
    fr: fr_FR_namespaceObject,
    it: it_IT_namespaceObject,
    ja: ja_JP_namespaceObject,
    ko: ko_KR_namespaceObject,
    qy: qya_AA_namespaceObject,
    ru: ru_RU_namespaceObject,
    'zh-CN': zh_CN_namespaceObject,
    zh: zh_TW_namespaceObject
};
const addDO_NOT_USEI18N = (0,shared_src.createI18NBundle)('DO_NOT_USE', languages);

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/customization/i18n.ts

var _mask;
const i18NOverwriteTwitter = {
    mask: {
    }
};
const resource = languages;
for(const lng in resource){
    for(const key in resource[lng]){
        var _key;
        (_key = (_mask = i18NOverwriteTwitter.mask)[key]) !== null && _key !== void 0 ? _key : _mask[key] = {
        };
        i18NOverwriteTwitter.mask[key][lng] = resource[lng][key];
    }
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/SearchResultBox.tsx
var SearchResultBox = __webpack_require__(39562);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/SearchResult.tsx






function injectSearchResultBoxAtTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchResultHeadingSelector */.R9)());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultBox/* SearchResultBox */.L, {
    }));
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx + 1 modules
var PostReplacer = __webpack_require__(20351);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostReplacer.tsx

function resolveLangNode(node) {
    var ref;
    var ref1;
    return node.hasAttribute('lang') ? node : (ref1 = node.querySelector('[lang]')) !== null && ref1 !== void 0 ? ref1 : (ref = node.parentElement) === null || ref === void 0 ? void 0 : ref.querySelector('[lang]');
}
function injectPostReplacerAtTwitter(signal, current) {
    return (0,PostReplacer/* injectPostReplacer */.C)({
        zipPost (node) {
            const langNode = resolveLangNode(node.current);
            if (langNode) langNode.style.display = 'none';
        },
        unzipPost (node) {
            if (!node.current) return;
            const langNode = resolveLangNode(node.current);
            if (langNode) langNode.style.display = 'unset';
        }
    })(current, signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PageInspector.tsx + 3 modules
var PageInspector = __webpack_require__(12582);
// EXTERNAL MODULE: ./src/components/shared/NotSetupYetPrompt.tsx + 1 modules
var NotSetupYetPrompt = __webpack_require__(77766);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/SetupPrompt.tsx







function injectSetupPromptAtTwitter(signal) {
    const emptyNode = document.createElement('div');
    injectSetupPrompt((0,selector/* postEditorInTimelineSelector */.Ps)(), signal);
    injectSetupPrompt((0,selector/* postEditorInPopupSelector */.Rd)().map((x)=>(0,postBox/* isCompose */.iv)() && (0,postBox/* hasEditor */.Wu)() ? x : emptyNode
    ), signal);
}
function injectSetupPrompt(ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(NotSetupYetPrompt/* NotSetupYetPrompt */.N, {
    }));
}

// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 14 modules
var Composition = __webpack_require__(50269);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostDialog.tsx






function injectPostDialogAtTwitter(signal) {
    renderPostDialogTo('popup', (0,selector/* postEditorContentInPopupSelector */.$_)(), signal);
    renderPostDialogTo('timeline', (0,selector/* rootSelector */.Du)(), signal);
}
function renderPostDialogTo(reason, ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
        type: reason
    }));
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(72981);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostDialogHint.tsx









function injectPostDialogHintAtTwitter(signal) {
    const emptyNode = document.createElement('div');
    renderPostDialogHintTo('timeline', (0,selector/* postEditorInTimelineSelector */.Ps)(), signal);
    renderPostDialogHintTo('popup', (0,selector/* postEditorInPopupSelector */.Rd)().map((x)=>(0,postBox/* isCompose */.iv)() && (0,postBox/* hasEditor */.Wu)() ? x : emptyNode
    ), signal);
}
function renderPostDialogHintTo(reason, ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHintAtTwitter, {
        reason: reason
    }));
}
function PostDialogHintAtTwitter({ reason  }) {
    const onHintButtonClicked = (0,react.useCallback)(()=>messages/* MaskMessage.events.requestComposition.sendToLocal */.y.events.requestComposition.sendToLocal({
            reason,
            open: true
        })
    , [
        reason
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
        onHintButtonClicked: onHintButtonClicked
    }));
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostDialogIcon.tsx




const PostDialogIcon_useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        verticalAlign: 'middle'
    }
});
function PostDialogIcon(props) {
    const classes = (0,shared_src.useStylesExtends)(PostDialogIcon_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookSharpIcon */.ck, {
        classes: classes,
        onClick: props.onClick,
        color: "primary"
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostDialogIcon.tsx









function injectPostDialogIconAtTwitter(signal) {
    const emptyNode = document.createElement('div');
    renderPostDialogIconTo((0,selector/* postEditorToolbarSelector */.Ol)().map((x)=>(0,postBox/* isMobile */.tq)() && (0,postBox/* isCompose */.iv)() ? x : emptyNode
    ), signal);
}
function renderPostDialogIconTo(ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogIconAtTwitter, {
    }));
}
const useTwitterMaskbookIcon = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: 38,
            height: 38,
            boxSizing: 'border-box',
            padding: theme.spacing(1)
        }
    })
);
function PostDialogIconAtTwitter() {
    const { classes  } = useTwitterMaskbookIcon();
    const onIconClicked = ()=>messages/* MaskMessage.events.requestComposition.sendToLocal */.y.events.requestComposition.sendToLocal({
            reason: 'timeline',
            open: true
        })
    ;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogIcon, {
        classes: classes,
        onClick: onIconClicked
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/inject.tsx



function injectPostBoxComposed(signal) {
    injectPostDialogAtTwitter(signal);
    injectPostDialogHintAtTwitter(signal);
    injectPostDialogIconAtTwitter(signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx
var StartSetupGuide = __webpack_require__(58963);
// EXTERNAL MODULE: ./src/social-network/defaults/automation/AttachImageToComposition.ts
var AttachImageToComposition = __webpack_require__(67162);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostInspector.tsx + 12 modules
var PostInspector = __webpack_require__(89177);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/encoding.ts
var encoding = __webpack_require__(24267);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/PostInspector.tsx


function injectPostInspectorAtTwitter(signal, current) {
    return (0,PostInspector/* injectPostInspectorDefault */.J)({
        zipPost (node) {
            var ref, ref1;
            const contentContainer = node.current.parentElement;
            if (!contentContainer) return;
            const content = contentContainer.querySelector('[lang]');
            if (!content) return;
            for (const a of content.querySelectorAll('a')){
                if (encoding/* twitterEncoding.payloadDecoder */.n.payloadDecoder(a.title).length) hideDOM(a);
                if (/^https?:\/\/mask(\.io|book\.com)$/i.test(a.title)) hideDOM(a);
            }
            for (const span of content.querySelectorAll('span')){
                // match (.) (\n) (—§—) (any space) (/*)
                // Note: In Chinese we can't hide dom because "解密这条推文。\n—§—" is in the same DOM
                // hide it will break the sentence.
                if (span.innerText.match(/^\.\n—§— +\/\* $/)) hideDOM(span);
                // match (any space) (*/) (any space)
                if (span.innerText.match(/^ +\*\/ ?$/)) hideDOM(span);
            }
            const parent = (ref = content.parentElement) === null || ref === void 0 ? void 0 : ref.nextElementSibling;
            if (parent && matches(parent.innerText)) {
                parent.style.height = '0';
                parent.style.overflow = 'hidden';
            }
            const cardWrapper = (ref1 = contentContainer.parentElement) === null || ref1 === void 0 ? void 0 : ref1.querySelector('[data-testid="card.wrapper"]');
            if (cardWrapper) {
                cardWrapper.style.display = 'none';
                cardWrapper.setAttribute('aria-hidden', 'true');
            }
        }
    })(current, signal);
}
function matches(input) {
    input = input.toLowerCase();
    return input.includes('maskbook.com') && input.includes('make privacy protected again');
}
function hideDOM(a) {
    a.style.width = '0';
    a.style.height = '0';
    a.style.overflow = 'hidden';
    a.style.display = 'inline-block';
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/EnhancedProfileTab.tsx




function EnhancedProfileTab(props) {
    const { reset , clear , children , classes  } = props;
    const [active, setActive] = (0,react.useState)(false);
    const onClose = ()=>{
        setActive(false);
        src_utils/* MaskMessage.events.profileNFTsPageUpdated.sendToLocal */.yV.events.profileNFTsPageUpdated.sendToLocal({
            show: false
        });
        reset();
    };
    const onOpen = ()=>{
        src_utils/* MaskMessage.events.profileNFTsPageUpdated.sendToLocal */.yV.events.profileNFTsPageUpdated.sendToLocal({
            show: true
        });
        setActive(true);
    };
    (0,react.useEffect)(()=>{
        return src_utils/* MaskMessage.events.profileNFTsTabUpdated.on */.yV.events.profileNFTsTabUpdated.on(onClose);
    }, []);
    const onClick = (0,react.useCallback)(()=>{
        onOpen();
        clear();
    }, [
        clear,
        onOpen
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.tab,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classnames_default()(classes.button, active ? classes.selected : ''),
            onClick: onClick,
            children: [
                "NFTs",
                active && children ? children : null
            ]
        })
    }, "nfts"));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/color@4.0.1/node_modules/color/index.js
var color = __webpack_require__(48625);
var color_default = /*#__PURE__*/__webpack_require__.n(color);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/EnhancedProfileTab.tsx







function injectEnhancedProfileTabAtTwitter(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchProfileTabListLastChildSelector */.L2)());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(EnhancedProfileTabAtTwitter, {
    }));
}
const EnhancedProfileTab_useStyles = (0,src/* makeStyles */.ZL)()((theme, props)=>({
        tab: {
            '&:hover': {
                backgroundColor: new (color_default())(props.hover).alpha(0.1).toString(),
                cursor: 'pointer'
            },
            height: props.height
        },
        button: {
            zIndex: 1,
            position: 'relative',
            display: 'flex',
            minWidth: 56,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: props.padding,
            color: props.color,
            font: props.font,
            fontSize: props.fontSize,
            '&:hover': {
                color: props.color
            }
        },
        selected: {
            color: `${props.hover} !important`,
            fontWeight: 700
        },
        line: {
            dispaly: 'inline-flex',
            borderRadius: 9999,
            position: 'absolute',
            bottom: 0,
            minWidth: 56,
            alignSelf: 'center',
            height: 4,
            backgroundColor: props.line
        }
    })
);
const EMPTY_STYLE = {
};
function clear() {
    var ref;
    const eleTab = (ref = (0,selector/* searchProfileTabSelector */.Fe)().evaluate()) === null || ref === void 0 ? void 0 : ref.querySelector('div');
    if (!eleTab) return;
    const style = window.getComputedStyle(eleTab);
    const tabList = (0,selector/* searchProfileTabListSelector */.JN)().evaluate();
    tabList.map((v)=>{
        const _v = v.querySelector('div');
        _v.style.color = style.color;
        const line = v.querySelector('div > div');
        line.style.display = 'none';
    });
    const eleEmpty = (0,selector/* searchProfileEmptySelector */.YX)().evaluate();
    if (eleEmpty) eleEmpty.style.display = 'none';
    // set display: none will change the height of the original element
    const elePage = (0,selector/* searchProfileTabPageSelector */.xx)().evaluate();
    if (elePage) elePage.style.visibility = 'hidden';
}
function EnhancedProfileTab_reset() {
    var ref;
    const eleTab = (ref = (0,selector/* searchProfileTabSelector */.Fe)().evaluate()) === null || ref === void 0 ? void 0 : ref.querySelector('div');
    if (!eleTab) return;
    const eleEmpty = (0,selector/* searchProfileEmptySelector */.YX)().evaluate();
    if (eleEmpty) eleEmpty.style.display = '';
    const elePage = (0,selector/* searchProfileTabPageSelector */.xx)().evaluate();
    if (elePage) elePage.style.display = '';
    const tabList = (0,selector/* searchProfileTabListSelector */.JN)().evaluate();
    tabList.map((v)=>{
        const _v = v.querySelector('div');
        _v.style.color = '';
        const line = v.querySelector('div > div');
        line.style.display = '';
    });
}
function getStyle() {
    var ref;
    const eleTab = (ref = (0,selector/* searchProfileTabSelector */.Fe)().evaluate()) === null || ref === void 0 ? void 0 : ref.querySelector('div');
    const style = eleTab ? window.getComputedStyle(eleTab) : EMPTY_STYLE;
    const eleNewTweetButton = (0,selector/* searchNewTweetButtonSelector */.r$)().evaluate();
    const newTweetButtonColorStyle = eleNewTweetButton ? window.getComputedStyle(eleNewTweetButton) : EMPTY_STYLE;
    const eleBackButton = (0,selector/* searchForegroundColorSelector */.Q2)().evaluate();
    const backButtonColorStyle = eleBackButton ? window.getComputedStyle(eleBackButton) : EMPTY_STYLE;
    return {
        color: style.color,
        font: style.font,
        fontSize: style.fontSize,
        padding: style.paddingBottom,
        height: style.height,
        hover: backButtonColorStyle.color,
        line: newTweetButtonColorStyle.backgroundColor
    };
}
function EnhancedProfileTabAtTwitter() {
    const style = getStyle();
    const { classes  } = EnhancedProfileTab_useStyles(style);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EnhancedProfileTab, {
        classes: classes,
        reset: EnhancedProfileTab_reset,
        clear: clear,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.line
        })
    }));
}

// EXTERNAL MODULE: ../web3-shared/src/index.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4795.js
var web3_shared_src = __webpack_require__(22209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(46440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/InfoOutlined.js
var InfoOutlined = __webpack_require__(40548);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx + 2 modules
var CollectibleList = __webpack_require__(659);
=======
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/InfoOutlined.js
var InfoOutlined = __webpack_require__(19072);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx + 2 modules
var CollectibleList = __webpack_require__(94325);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.4583.js
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/useEthereumName.ts


const ENS_RE = /[\w#%+.:=@~-]{1,256}\.(eth|kred|xyz|luxe)\b/;
const ENS_RE_FULL = new RegExp(`^${ENS_RE.source}$`);
const ADDRESS = /0x[\dA-Fa-f]{40}/;
function useEthereumName(nickname, twitterId, bio) {
    const [ethereumName, setEthereumName] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        setEthereumName('');
        const matched = bio.match(ENS_RE);
        if (matched) {
            setEthereumName(matched[0]);
        }
    }, [
        bio
    ]);
    const name = (0,react.useMemo)(()=>{
        if (ENS_RE_FULL.test(nickname)) {
            return nickname;
        }
        if (ethereumName) return ethereumName;
        return twitterId ? `${twitterId}.eth` : '';
    }, [
        ethereumName,
        nickname,
        twitterId
    ]);
    return name;
}
function useEthereumAddress(nickanme, twitterId, bio) {
    const [address, setAddress] = (0,react.useState)();
    const name = useEthereumName(nickanme, twitterId, bio);
    const addressENS = (0,web3_shared_src/* useResolveENS */.Fqh)(name).value;
    const addressUNS = (0,web3_shared_src/* useResolveUNS */.gG2)(name).value;
    (0,react.useEffect)(()=>{
        setAddress('');
        const matched = bio.match(ADDRESS);
        if (matched) setAddress(matched[0]);
    }, [
        bio
    ]);
    return {
        name,
        addressENS,
        addressUNS,
        address
    };
}

;// CONCATENATED MODULE: ./src/utils/hooks/useLocationChange.ts

const useLocationChange = (handler)=>{
    (0,react.useEffect)(()=>{
        window.addEventListener('locationchange', handler);
        return ()=>window.removeEventListener('locationchange', handler)
        ;
    }, [
        handler
    ]);
};

;// CONCATENATED MODULE: ./src/components/InjectedComponents/EnhancedProfile.tsx











const RULE_TIP = [
    'Binding Rule',
    '1. Their Twitter nickname is their ENS',
    '2. Their Twitter bio contains ENS',
    '3. Their Twitter bio contains a validated address',
    '4. Their Twitter id + “.eth” form their ENS', 
].join('\n');
const EnhancedProfile_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1
        },
        note: {
            padding: theme.spacing(1),
            textAlign: 'right'
        },
        text: {
            paddingTop: 36,
            paddingBottom: 36,
            '& > p': {
                color: (0,src/* getMaskColor */.nb)(theme).textPrimary
            }
        }
    })
);
function EnhancedProfilePage(props) {
    const [show, setShow] = (0,react.useState)(false);
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const classes = (0,shared_src.useStylesExtends)(EnhancedProfile_useStyles(), props);
    const { bioDescription , nickname , twitterId , onUpdated  } = props;
    const { t  } = (0,src_utils/* useI18N */.M1)();
    useLocationChange(()=>{
        src_utils/* MaskMessage.events.profileNFTsTabUpdated.sendToLocal */.yV.events.profileNFTsTabUpdated.sendToLocal('reset');
    });
    (0,react.useEffect)(()=>{
        return src_utils/* MaskMessage.events.profileNFTsTabUpdated.on */.yV.events.profileNFTsTabUpdated.on((data)=>{
            onUpdated();
        });
    }, []);
    (0,react.useEffect)(()=>{
        return src_utils/* MaskMessage.events.profileNFTsPageUpdated.on */.yV.events.profileNFTsPageUpdated.on((data)=>{
            setShow(data.show);
        });
    }, []);
    const { name , addressENS , addressUNS , address  } = useEthereumAddress(nickname, twitterId, bioDescription);
    var ref, ref1;
    const address_ = (ref1 = (ref = addressENS !== null && addressENS !== void 0 ? addressENS : addressUNS) !== null && ref !== void 0 ? ref : address) !== null && ref1 !== void 0 ? ref1 : '';
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4795.js
    if (!show || !address_) return null;
=======
    if (!show) return null;
    if (!address_) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.text,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            color: "textSecondary",
            children: t('dashboard_no_collectible_found')
        })
    }));
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.4583.js
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.note,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        color: "textPrimary",
                        component: "span",
                        children: [
                            "Current display of ",
                            addressENS ? 'ENS' : addressUNS ? 'UNS' : 'address',
                            ":",
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(chainId, address_),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: addressENS || addressUNS ? name : (0,web3_shared_src/* formatEthereumAddress */.j8w)(address !== null && address !== void 0 ? address : '', 4)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        sx: {
                            lineHeight: 1,
                            marginLeft: 0.5,
                            cursor: 'pointer'
                        },
                        color: "textPrimary",
                        component: "span",
                        title: RULE_TIP,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoOutlined/* default */.Z, {
                            color: "inherit",
                            fontSize: "small"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleList/* CollectibleListAddress */.B9, {
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4795.js
                classes: {
                    button: classes.button
                },
=======
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.4583.js
                address: address_
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/user.ts
var user = __webpack_require__(22490);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/injection/EnhancedProfile.tsx








function injectEnhancedProfilePageForEmptyState(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchProfileEmptySelector */.YX)());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(EnhancedProfileaPageAtTwitter, {
    }));
}
function injectEnhancedProfilePageState(signal) {
    const watcher = new umd.MutationObserverWatcher((0,selector/* searchProfileTabPageSelector */.xx)());
    (0,src_utils/* startWatch */.fy)(watcher, signal);
    (0,src_utils/* createReactRootShadowed */.ou)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(EnhancedProfileaPageAtTwitter, {
    }));
}
function injectEnhancedProfileAtTwitter(signal) {
    injectEnhancedProfilePageForEmptyState(signal);
    injectEnhancedProfilePageState(signal);
}
const EnhancedProfile_EMPTY_STYLE = {
};
const injection_EnhancedProfile_useStyles = (0,src/* makeStyles */.ZL)()((theme, props)=>({
        text: {
            paddingTop: 29,
            paddingBottom: 29,
            '& > p': {
                fontSize: 28,
                fontFamily: props.fontFamily,
                fontWeight: 700,
                color: (0,src/* getMaskColor */.nb)(theme).textPrimary
            }
        },
        button: {
            backgroundColor: props.backgroundColor,
            color: 'white',
            marginTop: 18,
            '&:hover': {
                backgroundColor: props.backgroundColor
            }
        }
    })
);
function EnhancedProfileaPageAtTwitter() {
    const newTweetButton = (0,selector/* searchNewTweetButtonSelector */.r$)().evaluate();
    const style = newTweetButton ? window.getComputedStyle(newTweetButton) : EnhancedProfile_EMPTY_STYLE;
    const fontStyle = (newTweetButton === null || newTweetButton === void 0 ? void 0 : newTweetButton.firstChild) ? window.getComputedStyle(newTweetButton.firstChild) : EnhancedProfile_EMPTY_STYLE;
    const { classes  } = injection_EnhancedProfile_useStyles({
        backgroundColor: style.backgroundColor,
        fontFamily: fontStyle.fontFamily
    });
    const [bio, setBio] = (0,react.useState)((0,user/* getBioDescription */.Ek)());
    const [nickname, setNickname] = (0,react.useState)((0,user/* getNickname */.y)());
    const [twitterId, setTwitterId] = (0,react.useState)((0,user/* getTwitterId */.WM)());
    const onUpdated = ()=>{
        setBio((0,user/* getBioDescription */.Ek)());
        setNickname((0,user/* getNickname */.y)());
        setTwitterId((0,user/* getTwitterId */.WM)());
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EnhancedProfilePage, {
        classes: classes,
        bioDescription: bio,
        nickname: nickname,
        twitterId: twitterId,
        onUpdated: onUpdated
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/ui-provider.ts






























const useInjectedDialogClassesOverwriteTwitter = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                display: 'block !important'
            }
        },
        container: {
            alignItems: 'center'
        },
        paper: {
            width: '600px !important',
            maxWidth: 'none',
            boxShadow: 'none',
            backgroundImage: 'none',
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                '&': {
                    display: 'block !important',
                    borderRadius: '0 !important'
                }
            }
        },
        dialogTitle: {
            display: 'flex',
            alignItems: 'center',
            padding: '3px 15px',
            borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#2f3336' : '#ccd6dd'}`,
            '& > h2': {
                display: 'inline-block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px 11px !important'
            }
        },
        dialogContent: {
            padding: 16,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px !important'
            }
        },
        dialogActions: {
            padding: '3px 15px',
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px !important'
            }
        },
        dialogBackdropRoot: {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(110, 118, 125, 0.4)' : 'rgba(0, 0, 0, 0.4)'
        }
    })
);
const twitterUI = {
    ...base/* twitterBase */.oQ,
    ...shared/* twitterShared */.p,
    automation: {
        maskCompositionDialog: {
            open: openComposeBoxTwitter
        },
        nativeCommentBox: undefined,
        nativeCompositionDialog: {
            appendText: pasteTextToCompositionTwitter,
            // TODO: make a better way to detect
            attachImage: (0,AttachImageToComposition/* pasteImageToCompositionDefault */.f)(()=>false
            )
        },
        redirect: {
            newsFeed: gotoNewsFeedPageTwitter,
            profilePage: gotoProfilePageTwitter
        }
    },
    collecting: {
        identityProvider: IdentityProviderTwitter,
        postsProvider: PostProviderTwitter,
        getSearchedKeyword: getSearchedKeywordAtTwitter
    },
    customization: {
        paletteMode: PaletteModeProviderTwitter,
        componentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteTwitter
            }
        },
        useTheme: useThemeTwitterVariant,
        i18nOverwrite: i18NOverwriteTwitter
    },
    init (signal) {
        const friends = social_network.stateCreator.friends();
        const profiles = social_network.stateCreator.profiles();
        (0,InitFriends/* InitAutonomousStateFriends */.f)(signal, friends, shared/* twitterShared.networkIdentifier */.p.networkIdentifier);
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, shared/* twitterShared.networkIdentifier */.p.networkIdentifier);
        return {
            friends,
            profiles
        };
    },
    injection: {
        toolBoxInNavBar: injectToolboxHintAtTwitter,
        searchResult: injectSearchResultBoxAtTwitter,
        enhancedPostRenderer: injectPostReplacerAtTwitter,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        postInspector: injectPostInspectorAtTwitter,
        setupPrompt: injectSetupPromptAtTwitter,
        enhancedProfile: injectEnhancedProfileAtTwitter,
        enhancedProfileTab: injectEnhancedProfileTabAtTwitter,
        newPostComposition: {
            start: injectPostBoxComposed,
            supportedInputTypes: {
                text: true,
                image: true
            },
            supportedOutputTypes: {
                text: true,
                image: true
            }
        },
        setupWizard: (0,StartSetupGuide/* createTaskStartSetupGuideDefault */.Z)('twitter.com'),
        userBadge: injectMaskUserBadgeAtTwitter,
        commentComposition: undefined
    },
    configuration: {
        steganography: {
            password () {
                // ! Change this might be a breaking change !
                return new type/* ProfileIdentifier */.WO('twitter.com', type/* ProfileIdentifier.getUserName */.WO.getUserName(IdentityProviderTwitter.lastRecognized.value.identifier) || type/* ProfileIdentifier.getUserName */.WO.getUserName(settings/* currentSelectedIdentity */.G[base/* twitterBase.networkIdentifier */.oQ.networkIdentifier].value) || type/* ProfileIdentifier.getUserName */.WO.getUserName(social_network.globalUIState.profiles.value[0].identifier) || (0,esm/* unreachable */.t1)('Cannot figure out password')).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (twitterUI);


/***/ }),

/***/ 57486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kt": () => (/* binding */ getEditorContent),
/* harmony export */   "tq": () => (/* binding */ isMobile),
/* harmony export */   "iv": () => (/* binding */ isCompose),
/* harmony export */   "uf": () => (/* binding */ hasFocus),
/* harmony export */   "Wu": () => (/* binding */ hasEditor)
/* harmony export */ });
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31948);

const getEditorContent = ()=>{
    const editorNode = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .postEditorDraftContentSelector */ .Y5)().evaluate();
    if (!editorNode) return '';
    if (editorNode.tagName.toLowerCase() === 'div') return editorNode.innerText;
    return editorNode.value;
};
const isMobile = ()=>globalThis.location.host.includes('mobile')
;
const isCompose = ()=>globalThis.location.pathname.includes('compose')
;
const hasFocus = (x)=>x.evaluate() === document.activeElement
;
const hasEditor = ()=>!!(0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .postEditorDraftContentSelector */ .Y5)().evaluate()
;


/***/ }),

/***/ 31948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L2": () => (/* binding */ searchProfileTabListLastChildSelector),
/* harmony export */   "xx": () => (/* binding */ searchProfileTabPageSelector),
/* harmony export */   "YX": () => (/* binding */ searchProfileEmptySelector),
/* harmony export */   "Fe": () => (/* binding */ searchProfileTabSelector),
/* harmony export */   "JN": () => (/* binding */ searchProfileTabListSelector),
/* harmony export */   "Q2": () => (/* binding */ searchForegroundColorSelector),
/* harmony export */   "r$": () => (/* binding */ searchNewTweetButtonSelector),
/* harmony export */   "rf": () => (/* binding */ searchNickNameSelector),
/* harmony export */   "Du": () => (/* binding */ rootSelector),
/* harmony export */   "QG": () => (/* binding */ composeAnchorSelector),
/* harmony export */   "xH": () => (/* binding */ composeAnchorTextSelector),
/* harmony export */   "$_": () => (/* binding */ postEditorContentInPopupSelector),
/* harmony export */   "Rd": () => (/* binding */ postEditorInPopupSelector),
/* harmony export */   "ch": () => (/* binding */ toolBoxInSideBarSelector),
/* harmony export */   "Ps": () => (/* binding */ postEditorInTimelineSelector),
/* harmony export */   "Y5": () => (/* binding */ postEditorDraftContentSelector),
/* harmony export */   "R9": () => (/* binding */ searchResultHeadingSelector),
/* harmony export */   "Ol": () => (/* binding */ postEditorToolbarSelector),
/* harmony export */   "nS": () => (/* binding */ newPostButtonSelector),
/* harmony export */   "V5": () => (/* binding */ bioDescriptionSelector),
/* harmony export */   "uy": () => (/* binding */ bioPageUserNickNameSelector),
/* harmony export */   "QK": () => (/* binding */ bioPageUserIDSelector),
/* harmony export */   "YG": () => (/* binding */ floatingBioCardSelector),
/* harmony export */   "rk": () => (/* binding */ postsImageSelector),
/* harmony export */   "XD": () => (/* binding */ postsContentSelector),
/* harmony export */   "qB": () => (/* binding */ selfInfoSelectors)
/* harmony export */ });
/* unused harmony exports searchProfileSelector, searchProfileActiveTabSelector, searchProfileActiveTabStatusLineSelector, searchProfileActiveTabLabelSelector, bioCardSelector */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96578);
/* harmony import */ var _postBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57486);



const querySelector = (selector, singleMode = true)=>{
    const ls = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const querySelectorAll = (selector)=>{
    return new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.LiveSelector().querySelectorAll(selector);
};
//#region "Enhanced Profile"
const searchProfileSelector = ()=>querySelector('[aria-label][role="navigation"]')
;
const searchProfileTabListLastChildSelector = ()=>querySelector('[data-testid="primaryColumn"] > div > :nth-child(2) > div > div > :nth-child(2) > div > :last-child')
;
const searchProfileTabPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="region"] [aria-label]')
;
const searchProfileEmptySelector = ()=>querySelector('[data-testid="primaryColumn"] [data-testid="emptyState"]')
;
const searchProfileActiveTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"]')
;
const searchProfileTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="false"]')
;
const searchProfileActiveTabStatusLineSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"] > div > div')
;
const searchProfileActiveTabLabelSelector = ()=>querySelector('[aria-label][role="navigation"] [role="tablist"] [role="tab"][aria-selected="true"] > div')
;
const searchProfileTabListSelector = ()=>querySelectorAll('[aria-label][role="navigation"]  [role="tablist"][data-testid="ScrollSnap-List"] a')
;
const searchForegroundColorSelector = ()=>querySelector('[data-testid="primaryColumn"] > div > div > div > div > div > div > div > div > div > div')
;
const searchNewTweetButtonSelector = ()=>querySelector('[data-testid="SideNav_NewTweet_Button"]')
;
const searchNickNameSelector = ()=>querySelector('[data-testid="UserProfileHeader_Items"]')
;
const bioCardSelector = (singleMode = true)=>querySelector([
        '.profile',
        'a[href*="header_photo"] ~ div',
        'div[data-testid="primaryColumn"] > div > div:last-child > div > div > div > div ~ div'
    ].join(), singleMode)
;
//#endregion
const rootSelector = ()=>querySelector('#react-root')
;
const composeAnchorSelector = ()=>querySelector('header[role=banner] a[href="/compose/tweet"]')
;
const composeAnchorTextSelector = ()=>querySelector('header[role=banner] a[href="/compose/tweet"] div[dir]')
;
const postEditorContentInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"] > div:first-child > div:nth-child(3)')
;
const postEditorInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"] > div:first-child > div:nth-child(3) > div:first-child > div:first-child [role="button"][aria-label]:nth-child(6)')
;
const toolBoxInSideBarSelector = ()=>querySelector('[role="banner"] [role="navigation"] > div')
;
const postEditorInTimelineSelector = ()=>querySelector('[role="main"] :not(aside) > [role="progressbar"] ~ div [role="button"][aria-label]:nth-child(6)')
;
const postEditorDraftContentSelector = ()=>{
    if (location.pathname === '/compose/tweet') {
        return querySelector(`[contenteditable][aria-label][spellcheck],textarea[aria-label][spellcheck]`);
    }
    return ((0,_postBox__WEBPACK_IMPORTED_MODULE_1__/* .isCompose */ .iv)() ? postEditorInPopupSelector() : postEditorInTimelineSelector()).querySelector('.public-DraftEditor-content, [contenteditable][aria-label][spellcheck]');
};
const searchResultHeadingSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="region"] [role="heading"]')
;
const postEditorToolbarSelector = ()=>querySelector('[data-testid="toolBar"] > div > *:last-child')
;
const newPostButtonSelector = ()=>querySelector('[data-testid="SideNav_NewTweet_Button"]')
;
const bioDescriptionSelector = ()=>querySelector('[data-testid="UserDescription"]')
;
const bioPageUserNickNameSelector = ()=>{
    return querySelector('[data-testid="UserDescription"]').map((x)=>{
        var ref, ref1;
        return (ref = x.parentElement) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : ref1.previousElementSibling;
    }).querySelector('div[dir]');
};
const bioPageUserIDSelector = (selector)=>{
    return selector().map((x)=>{
        var ref5;
        return ((ref5 = x.parentElement) === null || ref5 === void 0 ? void 0 : ref5.nextElementSibling).innerText.replace('@', '');
    });
};
const floatingBioCardSelector = ()=>querySelector(`[style~="left:"] a[role=link] > div:first-child > div:first-child > div:first-child[dir="auto"]`)
;
const postsImageSelector = (node)=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.LiveSelector([
        node
    ]).querySelectorAll([
        '[data-testid="tweet"] > div > div img[src*="media"]',
        '[data-testid="tweet"] ~ div img[src*="media"]'
    ].join())
;
const postsContentSelector = ()=>{
    return querySelectorAll([
        // tweets on timeline page
        '[data-testid="tweet"] div + div div[lang]',
        '[data-testid="tweet"] div + div div[data-testid="card.wrapper"]',
        // tweets on detailed page
        '[data-testid="tweet"] + div > div:first-child div[lang]',
        '[data-testid="tweet"] + div > div div[data-testid="card.wrapper"]',
        // quoted tweets
        '[data-testid="tweet"] + div div[role="link"] div[lang]',
        '[data-testid="tweet"] > div:last-child div[role="link"] div[lang]', 
    ].join()).concat(querySelectorAll('[data-testid="tweet"] > div:last-child').map((x)=>{
        var ref6, ref7, ref8, ref9, ref10;
        const textElement = (ref6 = x.querySelector('[role="group"]')) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.parentElement) === null || ref7 === void 0 ? void 0 : ref7.querySelector('div[lang]');
        if (textElement) return textElement;
        // There's no textElement as there's only a twitter summary card parsed by a single url.
        const summaryCardElement = (ref10 = (ref8 = x.querySelector('[role="group"]')) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.parentElement) === null || ref9 === void 0 ? void 0 : ref9.querySelector('[data-testid="card.wrapper"]')) === null || ref10 === void 0 ? void 0 : ref10.previousElementSibling;
        return summaryCardElement;
    }));
};
const base = querySelector('#react-root + script');
const handle = /"screen_name":"(.*?)"/;
const name = /"name":"(.*?)"/;
const bio = /"description":"(.*?)"/;
const avatar = /"profile_image_url_https":"(.*?)"/;
/**
 * first matched element can be extracted by index zero, followings are all capture groups, if no 'g' specified.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 */ const p = (regex, index)=>{
    return base.clone().map((x)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .regexMatch */ .ZB)(x.innerText, regex, index)
    );
};
const selfInfoSelectors = ()=>({
        handle: p(handle, 1),
        name: p(name, 1),
        bio: p(bio, 1),
        userAvatar: p(avatar, 1)
    })
;


/***/ }),

/***/ 22490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S_": () => (/* binding */ usernameValidator),
/* harmony export */   "y": () => (/* binding */ getNickname),
/* harmony export */   "WM": () => (/* binding */ getTwitterId),
/* harmony export */   "Ek": () => (/* binding */ getBioDescription)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31948);


/**
 * @link https://help.twitter.com/en/managing-your-account/twitter-username-rules
 */ const usernameValidator = (name)=>{
    for (const v of [
        /(twitter|admin)/i,
        /.{16,}/,
        /\W/
    ]){
        if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.isNull)(v.exec(name))) {
            return false;
        }
    }
    if (name.length < 4) return false;
    return true;
};
const getNickname = ()=>{
    var ref, ref1, ref2, ref3;
    const node = (ref = (0,_selector__WEBPACK_IMPORTED_MODULE_1__/* .searchNickNameSelector */ .rf)().evaluate()) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.parentElement) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.firstChild) === null || ref3 === void 0 ? void 0 : ref3.nextSibling;
    if (!node) return '';
    const nicknameNode = node.querySelector('div span span');
    if (!nicknameNode) return '';
    return nicknameNode.innerHTML.trim();
};
const getTwitterId = ()=>{
    var ref13, ref14, ref15, ref16, ref17, ref18, ref19;
    const node = (ref13 = (0,_selector__WEBPACK_IMPORTED_MODULE_1__/* .searchNickNameSelector */ .rf)().evaluate()) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.parentElement) === null || ref14 === void 0 ? void 0 : (ref15 = ref14.parentElement) === null || ref15 === void 0 ? void 0 : (ref16 = ref15.firstChild) === null || ref16 === void 0 ? void 0 : (ref17 = ref16.nextSibling) === null || ref17 === void 0 ? void 0 : (ref18 = ref17.firstChild) === null || ref18 === void 0 ? void 0 : (ref19 = ref18.firstChild) === null || ref19 === void 0 ? void 0 : ref19.lastChild;
    if (!node) return '';
    const twitterIdNode = node.querySelector('div span');
    if (!twitterIdNode) return '';
    return twitterIdNode.innerHTML.trim().replace('@', '');
};
const getBioDescription = ()=>{
    const node = (0,_selector__WEBPACK_IMPORTED_MODULE_1__/* .bioDescriptionSelector */ .V5)().evaluate();
    var ref20;
    return (ref20 = node === null || node === void 0 ? void 0 : node.innerText) !== null && ref20 !== void 0 ? ref20 : '';
};


/***/ }),

/***/ 30540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ TokenAmountPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(13622);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(90874);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(98010);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/web3/UI/SelectTokenChip.tsx









const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        chip: {
            border: 'none',
            borderRadius: 8,
            paddingLeft: theme.spacing(0.5)
        },
        loadingChip: {
            marginRight: theme.spacing(-0.5)
        },
        icon: {
            color: theme.palette.text.primary,
            pointerEvents: 'none'
        },
        tokenIcon: {
            width: 16,
            height: 16
        }
    };
});
function SelectTokenChip(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { token , error , loading =false , readonly =false , ChipProps  } = props;
    const { classes  } = useStyles();
    if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classnames_default()(classes.chip, classes.loadingChip),
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: 16
        }),
        size: "small",
        clickable: false,
        variant: "outlined"
    }));
    if (!token) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        label: t('plugin_gitcoin_select_a_token'),
        size: "small",
        clickable: !readonly,
        ...ChipProps
    }));
    if (token && error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
            address: token.address,
            name: token.name,
            logoURI: token.logoURI
        }),
        deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Error/* default */.Z, {
            className: classes.icon
        }),
        label: token.symbol,
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        // the delete icon only visible when this callback provided
        onDelete: lodash.noop,
        ...ChipProps
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
            classes: {
                icon: classes.tokenIcon
            },
            address: token.address,
            name: token.name,
            logoURI: token.logoURI
        }),
        deleteIcon: readonly ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
            className: classes.icon
        }),
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        label: token.symbol,
        // the delete icon only visible when this callback provided
        onDelete: readonly ? undefined : lodash.noop,
        ...ChipProps
    }));
}

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/web3/UI/TokenAmountPanel.tsx










const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const TokenAmountPanel_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
        },
        input: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            '-moz-appearance': 'textfield'
        },
        max: {
            marginRight: theme.spacing(0.5),
            borderRadius: 8
        },
        token: {
            whiteSpace: 'pre',
            maxWidth: 300,
            paddingLeft: theme.spacing(1)
        },
        balance: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '80%',
            fontSize: 12,
            top: theme.spacing(0.5),
            position: 'absolute'
        },
        inputShrinkLabel: {
            transform: 'translate(17px, -3px) scale(0.75) !important'
        }
    };
});
function TokenAmountPanel(props) {
    var ref;
    const { amount , maxAmount , balance , token , onAmountChange , maxAmountShares =1 , label , disableToken =false , disableBalance =false , MaxChipProps ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(TokenAmountPanel_useStyles(), props);
    //#region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>{
        return {
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`)
        };
    }, [
        token === null || token === void 0 ? void 0 : token.decimals
    ]);
    const onChange = (0,react.useCallback)((ev)=>{
        const amount_ = ev.currentTarget.value.replace(/,/g, '.');
        if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) onAmountChange(`0${amount_}`);
        else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) onAmountChange(amount_);
    }, [
        onAmountChange,
        RE_MATCH_WHOLE_AMOUNT,
        RE_MATCH_FRACTION_AMOUNT
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        className: classes.root,
        label: label,
        fullWidth: true,
        required: true,
        type: "text",
        value: amount,
        variant: "outlined",
        onChange: onChange,
        placeholder: "0.0",
        InputProps: {
            inputProps: {
                autoComplete: 'off',
                autoCorrect: 'off',
                title: 'Token Amount',
                inputMode: 'decimal',
                min: 0,
                minLength: MIN_AMOUNT_LENGTH,
                maxLength: MAX_AMOUNT_LENGTH,
                pattern: '^[0-9]*[.,]?[0-9]*$',
                spellCheck: false,
                className: classes.input
            },
            endAdornment: disableToken ? null : token ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.token,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                },
                children: [
                    !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.balance,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: [
                            t('plugin_ito_list_table_got'),
                            ":",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                value: balance,
                                decimals: token.decimals,
                                significant: 6
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 2
                        },
                        children: [
                            balance !== '0' && !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                classes: {
                                    root: classnames_default()(classes.max, MaxChipProps === null || MaxChipProps === void 0 ? void 0 : (ref = MaxChipProps.classes) === null || ref === void 0 ? void 0 : ref.root),
                                    ...MaxChipProps === null || MaxChipProps === void 0 ? void 0 : MaxChipProps.classes
                                },
                                size: "small",
                                label: "MAX",
                                clickable: true,
                                color: "primary",
                                variant: "outlined",
                                onClick: ()=>{
                                    onAmountChange((0,web3_shared_src/* formatBalance */.azF)(new (bignumber_default())(maxAmount !== null && maxAmount !== void 0 ? maxAmount : balance).dividedBy(maxAmountShares).decimalPlaces(0, 1), token.decimals));
                                },
                                ...MaxChipProps
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenChip, {
                                token: token,
                                ...props.SelectTokenChip
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.token,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 2
                },
                children: [
                    !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.balance,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: "-"
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenChip, {
                        token: token,
                        ...props.SelectTokenChip
                    })
                ]
            }),
            ...props.InputProps
        },
        InputLabelProps: {
            shrink: true,
            classes: {
                shrink: classes.inputShrinkLabel
            }
        },
        ...props.TextFieldProps
    }));
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

/***/ 79844:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38085);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(subClass, superClass);
}

/***/ }),

/***/ 35404:
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