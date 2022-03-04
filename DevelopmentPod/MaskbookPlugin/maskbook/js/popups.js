/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 58967:
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 92304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(81758);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
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

/***/ 67379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UT": () => (/* binding */ HashRouter),
/* harmony export */   "rU": () => (/* binding */ Link),
/* harmony export */   "OL": () => (/* binding */ NavLink)
/* harmony export */ });
/* unused harmony export BrowserRouter */
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22749);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68944);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41901);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45788);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28866);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32054);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createBrowserHistory */ .lX)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createHashHistory */ .q_)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createLocation */ .ob)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__/* .__RouterContext.Consumer */ .s6.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__["default"])(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createPath */ .Ep)(context.location) === (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createPath */ .Ep)(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__/* .__RouterContext.Consumer */ .s6.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__["default"])(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_4__/* .matchPath */ .LX)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, style, activeStyle);
    }

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map


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

/***/ 28509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gp": () => (/* reexport */ addDashboardI18N)
});

// UNUSED EXPORTS: IntegratedDashboard, setMessages, setPluginMessages, setPluginServices, setService

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../dashboard/src/Dashboard.tsx


const Dashboard = /*#__PURE__*/ (/* unused pure expression or super */ null && (lazy(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(8136), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(6482)]).then(__webpack_require__.bind(__webpack_require__, 6482))
)));
function IntegratedDashboard() {
    return(/*#__PURE__*/ _jsx(Suspense, {
        fallback: "",
        children: /*#__PURE__*/ _jsx(Dashboard, {})
    }));
}

// EXTERNAL MODULE: ../dashboard/src/locales/en-US.json
var en_US = __webpack_require__(62012);
// EXTERNAL MODULE: ../dashboard/src/locales/ja-JP.json
var ja_JP = __webpack_require__(97979);
// EXTERNAL MODULE: ../dashboard/src/locales/ko-KR.json
var ko_KR = __webpack_require__(75743);
// EXTERNAL MODULE: ../dashboard/src/locales/qya-AA.json
var qya_AA = __webpack_require__(59641);
// EXTERNAL MODULE: ../dashboard/src/locales/zh-CN.json
var zh_CN = __webpack_require__(32284);
// EXTERNAL MODULE: ../dashboard/src/locales/zh-TW.json
var zh_TW = __webpack_require__(39675);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(43576);
;// CONCATENATED MODULE: ../dashboard/src/locales/languages.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts







const languages = {
    en: en_US,
    ja: ja_JP,
    ko: ko_KR,
    qy: qya_AA,
    'zh-CN': zh_CN,
    zh: zh_TW
};
const addDashboardI18N = (0,src/* createI18NBundle */.C9)('dashboard', languages);
// @ts-ignore
if (false) {}

;// CONCATENATED MODULE: ../dashboard/src/entry.tsx
// This entry is for dashboard used as a package (required by the main extension).
// Should only expose necessary API for setup the Dashboard API correctly.





/***/ }),

/***/ 43722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ MaskWalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const MaskWalletIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Wallet', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M38 27.006v-.363h.819a.181.181 0 110 .363H38z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M12 19.81c0-2.104 1.606-3.81 3.586-3.81h18.828C36.394 16 38 17.706 38 19.81v12.38c0 2.104-1.606 3.81-3.586 3.81H15.586C13.606 36 12 34.294 12 32.19V19.81z",
                fill: "#1C68F3",
                fillOpacity: ".4"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M28.87 25.142a8 8 0 11-8-13.856 8 8 0 018 13.856z",
            fill: "url(#mask_wallet_paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.878 18.982l1.307 2.264 6.792-3.921.292-.17a3.557 3.557 0 01-5.375 4.01l-1.317.76 1.098 1.902c.26.45.835.604 1.286.345l6.52-3.765a.941.941 0 00.345-1.286l-2.797-4.845-8.151 4.706zm3.797 1.732a2.769 2.769 0 002.587-.098 2.768 2.768 0 001.378-2.191l-3.965 2.289zm2.335-4.548a1.465 1.465 0 011.883.362l-.695.401a.68.68 0 00-1.12.647l-.695.401a1.465 1.465 0 01.627-1.811zm-3.487 2.013a1.464 1.464 0 011.883.362l-.695.401a.68.68 0 00-1.12.647l-.695.401a1.464 1.464 0 01.627-1.811zm-3.268-2.158a.941.941 0 00-.345 1.285l.575.997 8.151-4.706-.575-.996a.941.941 0 00-1.285-.345l-6.521 3.765z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M12 23.79c0-2.093 1.606-3.79 3.586-3.79h18.828C36.394 20 38 21.697 38 23.79v10.42c0 2.093-1.606 3.79-3.586 3.79H15.586C13.606 38 12 36.303 12 34.21V23.79z",
                fill: "#1C68F3",
                fillOpacity: ".05"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".8",
            d: "M39 26.824V30.5a.5.5 0 01-.5.5H35a2 2 0 010-4h3.5c.5 0 .5-.176.5-.176z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
            cx: "35",
            cy: "29",
            r: "1",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "8",
                    y: "12",
                    width: "34",
                    height: "28",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter1_b",
                    x: "8",
                    y: "16",
                    width: "34",
                    height: "26",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "mask_wallet_paint0_linear",
                    x1: "31.433",
                    y1: "13.777",
                    x2: "16.29",
                    y2: "20.004",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 48 48');


/***/ }),

/***/ 47146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MiniMaskIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const MiniMaskIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('MiniMask', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "white"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            opacity: "0.5",
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "rgba(0,0,0,0.2)"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "rgba(0,0,0,0.2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), undefined, '0 0 48 48');


/***/ }),

/***/ 33779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MasksIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const MasksIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('MasksIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            x: "3.594",
            y: "13.04",
            width: "1.5",
            height: "7.5",
            rx: ".75",
            transform: "rotate(-30 3.594 13.04)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.635 12.944c-.97.31-2.018.146-2.97-.445a.434.434 0 00-.37-.045.446.446 0 00-.282.263c-.427 1.021-1.196 1.765-2.166 2.075-1.55.495-3.312-.245-4.392-1.843a5.502 5.502 0 01-.684-1.409 6.763 6.763 0 01-.187-.744l-.165-.934.774.546a.574.574 0 00.505.084c.046-.015.09-.04.132-.063l.196-.215.013-.025.025-.048a4.253 4.253 0 012.259-1.718 4.244 4.244 0 012.687.037 4.244 4.244 0 012.168-1.587 4.274 4.274 0 012.837.091l.049.025c.036.02.082.035.128.051l.012.006c.1.03.211.024.322-.011a.56.56 0 00.363-.36l.305-.89.406.856c.117.238.203.475.28.715.161.507.246 1.03.258 1.544.065 1.923-.952 3.55-2.503 4.044zm-5.973-.585c-.129.042-.264.065-.402.078-.758.049-1.462-.47-1.786-.752.233-.258.698-.711 1.28-.897.138-.044.264-.064.402-.078.758-.048 1.462.47 1.786.752-.242.261-.707.715-1.28.897zm3.164-1.498c.34.075.991.172 1.563-.01.139-.045.262-.104.373-.17.637-.397.92-1.23 1.02-1.648-.339-.075-.99-.172-1.563.01a1.802 1.802 0 00-.373.17c-.636.397-.92 1.23-1.02 1.648z",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.03 8.621l.162-.27 7.659 2.527-.033.314a9.007 9.007 0 01-.434 2.04c-.531 1.594-1.443 2.96-2.56 3.85-.835.662-1.736 1.01-2.593 1.01-.336 0-.661-.044-.976-.153-1.128-.38-1.963-1.377-2.343-2.82-.369-1.378-.282-3.016.25-4.61.217-.673.51-1.302.867-1.888zm.976 4.48c.163.076.336.109.532.109.173 0 .368-.033.575-.087.221-.074.4-.166.477-.207.026-.013.04-.02.043-.02l.217-.13-.12-.229c-.01-.032-.357-.694-1.04-.998-.684-.303-1.41-.108-1.443-.097l-.25.065.055.25c.003.002.01.025.02.063.028.093.082.278.175.479.195.39.455.672.759.803zm3.374 1.15c.086.022.173.033.27.033.261 0 .543-.076.814-.217.282-.141.467-.304.478-.315l.195-.173-.152-.206c-.022-.033-.488-.63-1.215-.792-.673-.15-1.299.117-1.414.166-.01.004-.015.007-.018.007l-.228.109.098.239c0 .01.098.249.282.498.26.348.564.575.89.651z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "2.598",
                    y1: "10.871",
                    x2: "15.806",
                    y2: "6.618",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "8.688",
                    y: "4.35",
                    width: "17.163",
                    height: "17.741",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 4520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j3": () => (/* reexport safe */ _bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   "A9": () => (/* reexport safe */ _bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   "i1": () => (/* reexport safe */ _bridgedSolana__WEBPACK_IMPORTED_MODULE_3__.i),
/* harmony export */   "M1": () => (/* binding */ pasteText),
/* harmony export */   "Mx": () => (/* binding */ pasteImage),
/* harmony export */   "X2": () => (/* binding */ pasteInstagram),
/* harmony export */   "iJ": () => (/* binding */ inputText),
/* harmony export */   "ed": () => (/* binding */ hookInputUploadOnce)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51710);
/* harmony import */ var _bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94933);
/* harmony import */ var _bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72764);
/* harmony import */ var _bridgedSolana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18525);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30469);








function pasteText(text) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .sendEvent */ .qP)('paste', text);
}
function pasteImage(image) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .sendEvent */ .qP)('pasteImage', Array.from(image));
}
function pasteInstagram(url) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .sendEvent */ .qP)('instagramUpload', url);
}
function inputText(text) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .sendEvent */ .qP)('input', text);
}
function hookInputUploadOnce(format, fileName, image, triggerOnActiveElementNow = false) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .sendEvent */ .qP)('hookInputUploadOnce', format, fileName, Array.from(image), triggerOnActiveElementNow);
}
document.addEventListener(_shared__WEBPACK_IMPORTED_MODULE_0__/* .CustomEventId */ .OV, (e)=>{
    const r = (0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .decodeEvent */ .Vu)(e.detail);
    if (r[1].length < 1) return;
    switch(r[0]){
        case 'resolvePromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .resolvePromise */ .LD)(...r[1]);
        case 'rejectPromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .rejectPromise */ .Eu)(...r[1]);
        case 'ethBridgeOnEvent':
            return (0,_bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__/* .onEthEvent */ .t)(...r[1]);
        case 'coin98BridgeOnEvent':
            return (0,_bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__/* .onCoin98Event */ .$)(...r[1]);
        case 'solanaBridgeOnEvent':
            return (0,_bridgedSolana__WEBPACK_IMPORTED_MODULE_3__/* .onSolanaEvent */ .C)(...r[1]);
        case 'ethBridgeSendRequest':
        case 'ethBridgePrimitiveAccess':
        case 'ethBridgeRequestListen':
        case 'coin98BridgeSendRequest':
        case 'coin98BridgePrimitiveAccess':
        case 'coin98BridgeRequestListen':
        case 'solanaBridgeSendRequest':
        case 'solanaBridgePrimitiveAccess':
        case 'solanaBridgeRequestListen':
        case 'solanaBridgeExecute':
        case 'input':
        case 'paste':
        case 'pasteImage':
        case 'instagramUpload':
        case 'untilEthBridgeOnline':
        case 'untilCoin98BridgeOnline':
        case 'untilSolanaBridgeOnline':
        case 'hookInputUploadOnce':
            break;
        default:
            const neverEvent = r[0];
            console.log('[@masknet/injected-script]', neverEvent, 'not handled');
    }
});


/***/ }),

/***/ 63462:
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
    isolated_dashboard_bridge_enabled: false,
    mask_SDK_ready: betaOrInsiderOnly,
    /** There is no "tabs" to navigate to. We must be careful with this. */ has_no_browser_tab_ui: appOnly,
    has_no_connected_user_link: appOnly,
    has_native_nav_bar: appOnly,
    using_ShadowDOM_attach_mode: 'closed',
    /** Don't inject injected script in this mode. Native side will do the job. */ support_declarative_user_script: is_iOSApp,
    /** Don't show welcome page in this mode. Native side will do the job. */ has_native_welcome_ui: appOnly,
    /** Firefox has a special API that can inject to the document with a higher permission. */ has_firefox_xray_vision: "safari" === 'firefox',
    support_testnet_switch: betaOrInsiderOnly,
    // #region Experimental features
    image_payload_marked_as_beta: appOnly,
    transak_enabled: webOnly,
    trader_zrx_enabled: webOnly,
    trader_all_api_cached_enabled: devOnly,
    metamask_enabled: webOnly,
    injected_web3_enabled: webOnly,
    toolbox_enabled: webOnly,
    /** Prohibit the use of test networks in production */ wallet_allow_testnet: betaOrInsiderOnly || "production" !== 'production',
    wallet_mnemonic_words_backup_enabled: false,
    wallet_private_key_backup_enabled: true,
    wallet_gas_price_dialog_enable: true,
    /* construct LBP for all ERC20 tokens */ LBP_enabled: false,
    LBP_whitelist_enabled: "production" === 'production',
    plugin_switch_enabled: betaOrInsiderOnly,
    // #endregion
    EIP1559_enabled: true,
    bsc_enabled: true,
    polygon_enabled: true,
    arbitrum_enabled: true,
    xdai_enabled: true,
    avalanche_enabled: true,
    fantom_enabled: true,
    flow_enabled: true,
    celo_enabled: true,
    aurora_enabled: true,
    nft_airdrop_enabled: false,
    post_actions_enabled: false,
    next_id_tip_enabled: false,
    // #region Functionality missing / broken
    /**
     * - iOS: WebExtension polyfill didn't implemented the dynamic permission API
     */ no_web_extension_dynamic_permission_request: is_iOSApp,
    has_no_WebRTC:  true || 0,
    // #endregion
    using_emoji_flag: true
};
if (false) {}


/***/ }),

/***/ 71986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ql": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.vU),
/* harmony export */   "uU": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__.uU),
/* harmony export */   "_H": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__._H),
/* harmony export */   "dH": () => (/* reexport safe */ _helpers_download__WEBPACK_IMPORTED_MODULE_3__.d),
/* harmony export */   "rs": () => (/* reexport safe */ _helpers_download__WEBPACK_IMPORTED_MODULE_3__.r)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72949);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63462);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10570);
/* harmony import */ var _helpers_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83784);






/***/ }),

/***/ 10570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ setupMaskKVStorageBackend),
/* harmony export */   "uU": () => (/* binding */ InMemoryStorages),
/* harmony export */   "_H": () => (/* binding */ PersistentStorages)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43576);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72949);


const indexedDBProxy = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
const inMemoryBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
function setupMaskKVStorageBackend(indexedDB, inMemory) {
    indexedDBProxy.replaceBackend(indexedDB);
    inMemoryBackend.replaceBackend(inMemory);
}
const createPersistentKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(indexedDBProxy, _messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_persistent__ */ .q.events.__kv_backend_persistent__);
const createInMemoryKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(inMemoryBackend, _messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_in_memory__ */ .q.events.__kv_backend_in_memory__);
const InMemoryStorages = {
    Plugin: createInMemoryKVStorage('plugin', {}),
    FacebookNFTEventOnMobile: createInMemoryKVStorage('FacebookNFTEventOnMobile', {
        userId: '',
        avatarId: '',
        address: '',
        tokenId: ''
    }),
    InstagramNFTEvent: createInMemoryKVStorage('InstagramNFTEvent', {
        userId: '',
        address: '',
        tokenId: ''
    })
};
const PersistentStorages = {
    Plugin: createPersistentKVStorage('plugin', {})
};


/***/ }),

/***/ 71104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useMyPersonas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(78037);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
;// CONCATENATED MODULE: ./src/utils/comparer.ts
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
    if (Object.getOwnPropertySymbols(a) || Object.getOwnPropertySymbols(b)) return false;
    return a.every((persona, index)=>PersonaComparer(persona, b[index])
    );
}

// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(87478);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js + 1 modules
var debounce = __webpack_require__(82617);
;// CONCATENATED MODULE: ./src/components/DataSource/useMyPersonas.ts






let isLoading;
const independentRef = {
    myPersonasRef: new umd.ValueRef([], PersonaArrayComparer)
};
{
    const query = ()=>{
        return service/* default.Identity.queryMyPersonas */.ZP.Identity.queryMyPersonas().then((p)=>{
            independentRef.myPersonasRef.value = p.filter((x)=>!x.uninitialized
            );
            isLoading = null;
            service/* default.Helper.__deprecated__setStorage */.ZP.Helper.__deprecated__setStorage('mobileIsMyPersonasInitialized', independentRef.myPersonasRef.value.length > 0);
        });
    };
    const debounceQuery = (0,debounce/* default */.Z)(query, 500, {
        trailing: true
    });
    isLoading = query();
    messages/* MaskMessages.events.ownPersonaChanged.on */.q.events.ownPersonaChanged.on(debounceQuery);
}function useMyPersonas() {
    if (isLoading) throw isLoading;
    return (0,src/* useValueRef */.E)(independentRef.myPersonasRef);
}


/***/ }),

/***/ 35163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useEnterDashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);

const useEnterDashboard = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event)=>{
        if (event.shiftKey) {
            browser.tabs.create({
                active: true,
                url: browser.runtime.getURL('/debug.html')
            });
        } else {
            browser.tabs.create({
                active: true,
                url: browser.runtime.getURL('/dashboard.html')
            });
        }
    }, []);
};


/***/ }),

/***/ 65827:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(89729);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ./src/plugin-infra/host.ts
var host = __webpack_require__(34709);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ./src/setup.ui.ts
var setup_ui = __webpack_require__(37382);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router-dom@5.3.0_react@18.0.0-rc.0/node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(67379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-rc.0/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(22749);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
;// CONCATENATED MODULE: ./src/social-network-adaptor/browser-action/index.ts



const base = {
    networkIdentifier: 'localhost',
    name: '',
    declarativePermissions: {
        origins: []
    },
    shouldActivate (location) {
        return (0,umd.isEnvironment)(umd.Environment.ManifestAction);
    }
};
const browser_action_define = {
    ...base,
    automation: {},
    collecting: {},
    configuration: {},
    customization: {},
    injection: {},
    permission: {
        async has () {
            return true;
        },
        async request () {
            return true;
        }
    },
    utils: {
        createPostContext: null
    },
    async init (signal) {
        const state = {
            profiles: new umd.ValueRef([]),
            friends: new umd.ValueRef(new shared_base_src/* IdentifierMap */.qD(new Map()))
        };
        const activeTab = (await browser.tabs.query({
            active: true,
            currentWindow: true
        }) || [])[0];
        if (activeTab === undefined) return state;
        const location = new URL(activeTab.url || globalThis.location.href);
        for (const ui of social_network/* definedSocialNetworkUIs.values */.LB.values()){
            if (ui.shouldActivate(location) && ui.networkIdentifier !== 'localhost') {
                const _ = (await ui.load()).default;
                if (signal.aborted) return state;
                // TODO: heck, this is not what we expected.
                this.networkIdentifier = ui.networkIdentifier;
                this.permission = _.permission;
                this.declarativePermissions = _.declarativePermissions;
                this.utils = _.utils;
                return _.init(signal);
            }
        }
        return state;
    }
};
(0,social_network/* defineSocialNetworkUI */.BE)({
    ...base,
    async load () {
        return {
            default: browser_action_define
        };
    }
});

// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(51503);
// EXTERNAL MODULE: ./src/web3/context.ts
var web3_context = __webpack_require__(43621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/GlobalStyles/GlobalStyles.js
var GlobalStyles = __webpack_require__(46241);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(54933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
// EXTERNAL MODULE: ../icons/brands/MiniMask.tsx
var MiniMask = __webpack_require__(47146);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(44438);
;// CONCATENATED MODULE: ../icons/general/ArrowBack.tsx


const ArrowBackIcon = (0,icons_utils/* createIcon */.I)('ArrowBackIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.442 4.609a.625.625 0 10-.884-.884L3.731 9.552a.629.629 0 00-.154.654c.03.086.079.167.148.236l5.833 5.833a.625.625 0 10.884-.884l-4.767-4.766h10.158a.625.625 0 100-1.25H5.676l4.766-4.766z"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ./src/components/DataSource/useMyPersonas.ts + 1 modules
var useMyPersonas = __webpack_require__(71104);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ./src/extension/popups/hook/useEnterDashboard.ts
var useEnterDashboard = __webpack_require__(35163);
// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(43722);
// EXTERNAL MODULE: ../icons/general/Masks.tsx
var Masks = __webpack_require__(33779);
;// CONCATENATED MODULE: ./src/extension/popups/components/InitialPlaceholder/index.tsx









const useStyles = (0,theme_src/* makeStyles */.ZL)()({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: 16
    },
    placeholder: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 10px'
    },
    button: {
        fontWeight: 600,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 14,
        lineHeight: 1.5,
        borderRadius: 20
    }
});
const InitialPlaceholder = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const matchWallet = (0,react_router/* useRouteMatch */.$B)(shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet);
    const onEnter = (0,useEnterDashboard/* useEnterDashboard */.i)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.placeholder,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        style: {
                            width: 48,
                            height: 48,
                            borderRadius: 24,
                            marginBottom: 10,
                            backgroundColor: '#F7F9FA',
                            fontSize: 48
                        },
                        children: matchWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {
                            fontSize: "inherit"
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Masks/* MasksIcon */.s, {
                            fontSize: "inherit"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        style: {
                            fontSize: 14
                        },
                        children: t('popups_initial_tips', {
                            type: matchWallet ? 'wallet' : 'personas'
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "contained",
                color: "primary",
                className: classes.button,
                onClick: onEnter,
                children: t('browser_action_enter_dashboard')
            })
        ]
    }));
});

;// CONCATENATED MODULE: ./src/extension/popups/components/PopupFrame/index.tsx










function GlobalCss() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(GlobalStyles/* default */.Z, {
        styles: {
            body: {
                minWidth: 350,
                overflowX: 'hidden',
                margin: '0 auto !important',
                maxWidth: '100%',
                '-webkit-font-smoothing': 'subpixel-antialiased',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        }
    }));
}
const PopupFrame_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        container: {
            minHeight: 550,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
        },
        header: {
            padding: '0 10px',
            backgroundColor: theme.palette.primary.main,
            height: 50,
            display: 'flex',
            justifyContent: 'space-between'
        },
        left: {
            display: 'flex',
            alignItems: 'center'
        },
        right: {
            display: 'flex',
            paddingTop: 6
        },
        nav: {
            width: 86,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            fontSize: 16,
            fontWeight: 500,
            color: theme.palette.primary.contrastText,
            textDecoration: 'none',
            borderRadius: '4px 4px 0px 0px'
        },
        active: {
            color: theme.palette.primary.main,
            cursor: 'inherit',
            backgroundColor: '#ffffff'
        }
    })
);
const PopupFrame = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const history = (0,react_router/* useHistory */.k6)();
    const { classes  } = PopupFrame_useStyles();
    const location = (0,react_router/* useLocation */.TH)();
    const personas = (0,useMyPersonas/* useMyPersonas */.n)();
    const excludePath = (0,react_router/* useRouteMatch */.$B)({
        path: [
            shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet,
            shared_base_src/* PopupRoutes.Personas */.mZ.Personas,
            shared_base_src/* PopupRoutes.ContractInteraction */.mZ.ContractInteraction,
            shared_base_src/* PopupRoutes.Unlock */.mZ.Unlock
        ],
        exact: true
    });
    const excludePersonaPath = (0,react_router/* useRouteMatch */.$B)({
        path: [
            shared_base_src/* PopupRoutes.ContractInteraction */.mZ.ContractInteraction,
            shared_base_src/* PopupRoutes.GasSetting */.mZ.GasSetting,
            shared_base_src/* PopupRoutes.SelectWallet */.mZ.SelectWallet,
            shared_base_src/* PopupRoutes.WalletRecovered */.mZ.WalletRecovered, 
        ],
        exact: true
    });
    const matchRecovery = (0,react_router/* useRouteMatch */.$B)({
        path: [
            shared_base_src/* PopupRoutes.WalletRecovered */.mZ.WalletRecovered,
            shared_base_src/* PopupRoutes.Unlock */.mZ.Unlock
        ],
        exact: true
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobalCss, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                elevation: 0,
                style: {
                    height: '100vh',
                    overflowY: 'auto',
                    minHeight: 600,
                    borderRadius: 0
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.left,
                                children: excludePath || history.length === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MiniMask/* MiniMaskIcon */.q, {
                                    style: {
                                        fontSize: 30
                                    }
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackIcon, {
                                    onClick: history.goBack,
                                    style: {
                                        fill: '#ffffff',
                                        cursor: 'pointer',
                                        fontSize: 30
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.right,
                                children: [
                                    excludePersonaPath ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
                                        to: shared_base_src/* PopupRoutes.Personas */.mZ.Personas,
                                        className: classes.nav,
                                        activeClassName: classes.active,
                                        children: t('personas')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
                                        style: {
                                            marginRight: 5
                                        },
                                        to: !excludePersonaPath ? shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet : location,
                                        className: classes.nav,
                                        activeClassName: classes.active,
                                        children: t('wallets')
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.container,
                        children: personas.length === 0 && !matchRecovery ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InitialPlaceholder, {}) : props.children
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ./src/UIRoot.tsx + 1 modules
var UIRoot = __webpack_require__(68526);
;// CONCATENATED MODULE: ./src/extension/popups/UI.tsx





// eslint-disable-next-line import/no-deprecated







function useAlwaysLightTheme() {
    // eslint-disable-next-line import/no-deprecated
    return (0,utils/* useClassicMaskFullPageTheme */.Kx)({
        forcePalette: theme_src/* Appearance.light */.um.light
    });
}
const Wallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2653)]).then(__webpack_require__.bind(__webpack_require__, 47074))
);
const Personas = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 5096).then(__webpack_require__.bind(__webpack_require__, 75096))
);
const SwapPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(2486), __webpack_require__.e(2598), __webpack_require__.e(6230), __webpack_require__.e(187), __webpack_require__.e(405), __webpack_require__.e(1546), __webpack_require__.e(2939), __webpack_require__.e(4428), __webpack_require__.e(3449), __webpack_require__.e(5773), __webpack_require__.e(4333), __webpack_require__.e(8477), __webpack_require__.e(4313)]).then(__webpack_require__.bind(__webpack_require__, 64696))
);
const RequestPermissionPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(8913)]).then(__webpack_require__.bind(__webpack_require__, 8913))
);
const PermissionAwareRedirect = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(601)]).then(__webpack_require__.bind(__webpack_require__, 20601))
);
const ThirdPartyRequestPermission = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 2780).then(__webpack_require__.bind(__webpack_require__, 52780))
);
const PersonaSignRequest = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8310).then(__webpack_require__.bind(__webpack_require__, 98310))
);
const PluginRender = (0,src/* createInjectHooksRenderer */.EK)(src/* useActivatedPluginsDashboard */.eE, (x)=>x.GlobalInjection
);
function Popups() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UIRoot/* MaskUIRoot */.Y, {
        useTheme: useAlwaysLightTheme,
        kind: "page",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* Web3Provider */.Qg, {
            value: web3_context/* PopupWeb3Context */.Ae,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dom/* HashRouter */.UT, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
                        fallback: "",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                    path: shared_base_src/* PopupRoutes.Personas */.mZ.Personas,
                                    children: UI_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Personas, {}))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                    path: shared_base_src/* PopupRoutes.PersonaSignRequest */.mZ.PersonaSignRequest,
                                    children: UI_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaSignRequest, {}))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                    path: shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet,
                                    children: UI_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet, {}))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                    path: shared_base_src/* PopupRoutes.Swap */.mZ.Swap,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapPage, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                    path: shared_base_src/* PopupRoutes.RequestPermission */.mZ.RequestPermission,
                                    exact: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RequestPermissionPage, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                    path: shared_base_src/* PopupRoutes.PermissionAwareRedirect */.mZ.PermissionAwareRedirect,
                                    exact: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionAwareRedirect, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                    path: shared_base_src/* PopupRoutes.ThirdPartyRequestPermission */.mZ.ThirdPartyRequestPermission,
                                    exact: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThirdPartyRequestPermission, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
                                        to: shared_base_src/* PopupRoutes.Personas */.mZ.Personas
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRender, {})
                ]
            })
        })
    }));
};
function UI_frame(x) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PopupFrame, {
        children: x
    }));
}

// EXTERNAL MODULE: ./shared/kv-storage.ts
var kv_storage = __webpack_require__(10570);
;// CONCATENATED MODULE: ./src/extension/popups/render.tsx








setup_ui/* status.then */.i.then(()=>(0,utils/* createNormalReactRoot */.jv)(/*#__PURE__*/ (0,jsx_runtime.jsx)(Popups, {}))
);
// TODO: Should only load plugins when the page is plugin-aware.
(0,src/* startPluginDashboard */.CB)((0,host/* createPluginHost */.R)(undefined, (pluginID, signal)=>{
    return {
        createKVStorage (type, defaultValues) {
            if (type === 'memory') return kv_storage/* InMemoryStorages.Plugin.createSubScope */.uU.Plugin.createSubScope(pluginID, defaultValues, signal);
            else return kv_storage/* PersistentStorages.Plugin.createSubScope */._H.Plugin.createSubScope(pluginID, defaultValues, signal);
        },
        personaSign: service/* Services.Identity.signWithPersona */.K9.Identity.signWithPersona,
        walletSign: service/* Services.Ethereum.personalSign */.K9.Ethereum.personalSign
    };
}));


/***/ }),

/***/ 99997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Ql": () => (/* binding */ ServicesWithProgress)
/* harmony export */ });
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43576);
// Notice, this module itself is not HMR ready.
// If you change this file to add a new service, you need to reload.
// This file should not rely on any other in-project files unless it is HMR ready.



const SERVICE_HMR_EVENT = 'service-hmr';
const message = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.WebExtensionMessage({
    domain: 'services'
});
const log = {
    beCalled: true,
    localError: true,
    remoteError: true,
    sendLocalStack: true,
    type: 'pretty',
    requestReplay: "production" === 'development'
};
const Services = {
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(2908), __webpack_require__.e(4477), __webpack_require__.e(2475), __webpack_require__.e(7348), __webpack_require__.e(3962), __webpack_require__.e(350)]).then(__webpack_require__.bind(__webpack_require__, 350))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(3294), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(5773), __webpack_require__.e(6134), __webpack_require__.e(3370)]).then(__webpack_require__.bind(__webpack_require__, 69806))
    , 'Identity'),
    Welcome: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(3294), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(5773), __webpack_require__.e(6134), __webpack_require__.e(3370)]).then(__webpack_require__.bind(__webpack_require__, 72582))
    , 'Welcome'),
    Helper: add(()=>__webpack_require__.e(/* import() */ 6185).then(__webpack_require__.bind(__webpack_require__, 6185))
    , 'Helper'),
    Ethereum: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(5773), __webpack_require__.e(6134), __webpack_require__.e(7542)]).then(__webpack_require__.bind(__webpack_require__, 93195))
    , 'Ethereum'),
    SocialNetwork: add(()=>__webpack_require__.e(/* import() */ 8042).then(__webpack_require__.bind(__webpack_require__, 58042))
    , 'SocialNetwork'),
    Settings: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(3294), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(5773), __webpack_require__.e(6134), __webpack_require__.e(3370)]).then(__webpack_require__.bind(__webpack_require__, 33281))
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 4323).then(__webpack_require__.bind(__webpack_require__, 4323))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(2908), __webpack_require__.e(4477), __webpack_require__.e(2475), __webpack_require__.e(7348), __webpack_require__.e(3962), __webpack_require__.e(1035)]).then(__webpack_require__.bind(__webpack_require__, 31035))
, 'ServicesWithProgress', true);
if (false) {}
/**
 * Helper to add a new service to Services.* / ServicesWithProgress.* namespace.
 * @param impl Implementation of the service. Should be things like () => import("./background-script/CryptoService")
 * @param key Name of the service. Used for better debugging.
 * @param generator Is the service is a generator?
 */ function add(impl, key, generator = false) {
    const channel = message.events[key].bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.MessageTarget.Broadcast);
    const isBackground = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.Environment.ManifestBackground);
    const RPC = generator ? async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc : async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE;
    const load = ()=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getLocalImplementation */ .Bb)(isBackground, `Services.${key}`, impl, channel)
    ;
    const localImplementation = load();
    // No HMR support in MV3
     true && isBackground && /* unsupported import.meta.webpackHot */ undefined && 0;
    const service = RPC(localImplementation, {
        key,
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM,
        log,
        channel,
        preferLocalImplementation: isBackground,
        strict: isBackground,
        thenable: false
    });
    if (isBackground) {
        localImplementation.then((val)=>{
            Reflect.set(globalThis, key + 'Service', val);
            if (isBackground) Reflect.set(Services, key, val);
        });
    } else {
        Reflect.set(globalThis, key + 'Service', service);
        if (isBackground) Reflect.set(Services, key, service);
    }
    return service;
}


/***/ }),

/***/ 10036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ZRX_BASE_URL),
/* harmony export */   "k": () => (/* binding */ ZRX_AFFILIATE_ADDRESS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18249);

const ZRX_BASE_URL = {
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Ethereum */ .td.Ethereum]: 'https://api.0x.org',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Binance */ .td.Binance]: 'https://bsc.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Polygon */ .td.Polygon]: 'https://polygon.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'https://arbitrum.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.xDai */ .td.xDai]: 'https://xdai.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Avalanche */ .td.Avalanche]: 'https://avalanche.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Celo */ .td.Celo]: 'https://celo.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Fantom */ .td.Fantom]: 'https://fantom.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Aurora */ .td.Aurora]: 'https://aurora.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Boba */ .td.Boba]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Fuse */ .td.Fuse]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Metis */ .td.Metis]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Optimistic */ .td.Optimistic]: ''
};
const ZRX_AFFILIATE_ADDRESS = '0x934B510D4C9103E6a87AEf13b816fb080286D649';


/***/ }),

/***/ 35817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L4": () => (/* binding */ BALANCER_SOR_GAS_PRICE),
/* harmony export */   "r2": () => (/* binding */ BALANCER_MAX_NO_POOLS),
/* harmony export */   "qT": () => (/* binding */ BALANCER_SWAP_TYPE)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

// gasPrice is used by SOR as a factor to determine how many pools to swap against.
// i.e. higher cost means more costly to trade against lots of different pools.
// Can be changed in future using SOR.gasPrice = newPrice
const BALANCER_SOR_GAS_PRICE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())('1e11');
// This determines the max no of pools the SOR will use to swap.
const BALANCER_MAX_NO_POOLS = 4;
var BALANCER_SWAP_TYPE;
(function(BALANCER_SWAP_TYPE) {
    BALANCER_SWAP_TYPE["EXACT_IN"] = 'swapExactIn';
    BALANCER_SWAP_TYPE["EXACT_OUT"] = 'swapExactOut';
})(BALANCER_SWAP_TYPE || (BALANCER_SWAP_TYPE = {}));


/***/ }),

/***/ 55157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ PANCAKESWAP_CUSTOM_BASES),
/* harmony export */   "D": () => (/* binding */ PANCAKESWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80805);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const PANCAKESWAP_CUSTOM_BASES = {};
const PANCAKESWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .BUSD */ .lz,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .BTCB */ .nB,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .UST */ .bi,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .ETHER */ .c0
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]
    )
};


/***/ }),

/***/ 32855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ PANGOLIN_CUSTOM_BASES),
/* harmony export */   "h": () => (/* binding */ PANGOLIN_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80805);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const PANGOLIN_CUSTOM_BASES = {};
const PANGOLIN_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAIe */ .Lq,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .PNG */ .yI,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDTe */ ._c,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDCe */ .tB,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .ETHER */ .c0,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTCe */ .MI
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]
    )
};


/***/ }),

/***/ 10739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ QUICKSWAP_CUSTOM_BASES),
/* harmony export */   "P": () => (/* binding */ QUICKSWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80805);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const QUICKSWAP_CUSTOM_BASES = {};
const QUICKSWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .QUICK */ .xZ,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .ETHER */ .c0,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .maUSDC */ .J6
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]
    )
};


/***/ }),

/***/ 49257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ SASHIMISWAP_CUSTOM_BASES),
/* harmony export */   "y": () => (/* binding */ SASHIMISWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80805);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const SASHIMISWAP_CUSTOM_BASES = {};
const SASHIMISWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .COMP */ .TP,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .MKR */ .Ti
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]
    )
};


/***/ }),

/***/ 92151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ SUSHISWAP_CUSTOM_BASES),
/* harmony export */   "S": () => (/* binding */ SUSHISWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80805);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const SUSHISWAP_CUSTOM_BASES = {};
const SUSHISWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .RUNE */ .uj,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .NFTX */ .lK,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .STETH */ ._S
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .MSKA */ .uz,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .MSKB */ .mW,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .MSKC */ .Xw
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .BUSD */ .lz,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .BTCB */ .nB
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.xDai */ .a_.xDai]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.xDai */ .a_.xDai]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Celo */ .a_.Celo]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .CUSD */ .PX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .CEUR */ .Th
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Celo */ .a_.Celo]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Fantom */ .a_.Fantom]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .fUSDT */ .Hh,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Fantom */ .a_.Fantom]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]
    )
};


/***/ }),

/***/ 80805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gn": () => (/* binding */ USDC),
/* harmony export */   "tB": () => (/* binding */ USDCe),
/* harmony export */   "AA": () => (/* binding */ USDT),
/* harmony export */   "_c": () => (/* binding */ USDTe),
/* harmony export */   "Hh": () => (/* binding */ fUSDT),
/* harmony export */   "lz": () => (/* binding */ BUSD),
/* harmony export */   "TP": () => (/* binding */ COMP),
/* harmony export */   "Ti": () => (/* binding */ MKR),
/* harmony export */   "uz": () => (/* binding */ MSKA),
/* harmony export */   "mW": () => (/* binding */ MSKB),
/* harmony export */   "Xw": () => (/* binding */ MSKC),
/* harmony export */   "h1": () => (/* binding */ DAI),
/* harmony export */   "Lq": () => (/* binding */ DAIe),
/* harmony export */   "s5": () => (/* binding */ AMPL),
/* harmony export */   "bi": () => (/* binding */ UST),
/* harmony export */   "c0": () => (/* binding */ ETHER),
/* harmony export */   "xZ": () => (/* binding */ QUICK),
/* harmony export */   "lB": () => (/* binding */ WANNA),
/* harmony export */   "ML": () => (/* binding */ WBTC),
/* harmony export */   "MI": () => (/* binding */ WBTCe),
/* harmony export */   "uj": () => (/* binding */ RUNE),
/* harmony export */   "nB": () => (/* binding */ BTCB),
/* harmony export */   "J6": () => (/* binding */ maUSDC),
/* harmony export */   "lK": () => (/* binding */ NFTX),
/* harmony export */   "_S": () => (/* binding */ STETH),
/* harmony export */   "PX": () => (/* binding */ CUSD),
/* harmony export */   "Th": () => (/* binding */ CEUR),
/* harmony export */   "yI": () => (/* binding */ PNG),
/* harmony export */   "FX": () => (/* binding */ WNATIVE),
/* harmony export */   "HL": () => (/* binding */ WNATIVE_ONLY),
/* harmony export */   "PM": () => (/* binding */ BIPS_BASE),
/* harmony export */   "IS": () => (/* binding */ ONE_BIPS),
/* harmony export */   "Bq": () => (/* binding */ SLIPPAGE_MIN),
/* harmony export */   "Nd": () => (/* binding */ SLIPPAGE_DEFAULT),
/* harmony export */   "Q9": () => (/* binding */ SLIPPAGE_MAX),
/* harmony export */   "ag": () => (/* binding */ DEFAULT_TRANSACTION_DEADLINE),
/* harmony export */   "rV": () => (/* binding */ L2_TRANSACTION_DEADLINE),
/* harmony export */   "rI": () => (/* binding */ MINIMUM_AMOUNT)
/* harmony export */ });
/* unused harmony exports HUSD, MSKD, MSKE, OKB, EASY, eUSDC, eUSDT, eDAI, sUSD, UNITOKEN, TT01, TT02, IGG, OM, SUSHI, YAM, YFI, CAKE, JOE, PRICE_IMPACT_LOW, PRICE_IMPACT_MEDIUM, PRICE_IMPACT_HIGH, PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN, PRICE_IMPACT_NON_EXPERT_BLOCKED */
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28389);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80945);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18249);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52522);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);



const USDC = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('USDC_ADDRESS', 'USD Coin', 'USDC', 6);
const USDCe = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('USDC_ADDRESS', 'USD Coin', 'USDCe', 6);
const USDT = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('USDT_ADDRESS', 'Tether USD', 'USDT', 6);
const USDTe = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('USDT_ADDRESS', 'Tether USD', 'USDT.e', 6);
const fUSDT = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('fUSDT_ADDRESS', 'Frapped USDT', 'fUSDT', 6);
const HUSD = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('HUSD_ADDRESS', 'Huobi USD', 'HUSD', 6);
const BUSD = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('BUSD_ADDRESS', 'Huobi USD', 'BUSD', 6);
const COMP = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('COMP_ADDRESS', 'Compound', 'COMP', 18);
const MKR = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MKR_ADDRESS', 'Maker', 'MKR', 18);
const MSKA = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MSKA_ADDRESS', 'Mask A', 'MSKA', 18);
const MSKB = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MSKB_ADDRESS', 'Mask B', 'MSKB', 18);
const MSKC = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MSKC_ADDRESS', 'Mask C', 'MSKC', 18);
const MSKD = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MSKD_ADDRESS', 'Mask D', 'MSKD', 18);
const MSKE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MSKE_ADDRESS', 'Mask E', 'MSKE', 18);
const DAI = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('DAI_ADDRESS', 'Dai Stablecoin', 'DAI', 18);
const DAIe = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('DAI_ADDRESS', 'Dai Stablecoin', 'DAI.e', 18);
const AMPL = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('AMPL_ADDRESS', 'Ampleforth', 'AMPL', 18);
const OKB = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('OKB_ADDRESS', 'Ampleforth', 'OKB', 18);
const UST = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('UST_ADDRESS', 'Wrapped UST Token', 'UST', 18);
const EASY = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('EASY_ADDRESS', 'EASY', 'EASY', 18);
const eUSDC = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('eUSDC_ADDRESS', 'Easy USDC', 'eUSDC', 18);
const eUSDT = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('eUSDT_ADDRESS', 'Easy USDT', 'eUSDT', 18);
const eDAI = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('eDAI_ADDRESS', 'Easy DAI', 'eDAI', 18);
const sUSD = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('sUSD_ADDRESS', 'Synth sUSD', 'sUSD', 18);
const UNITOKEN = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('UNITOKEN_ADDRESS', 'Uniswap', 'UNI', 18);
const TT01 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('TT01_ADDRESS', 'Test Token 01', 'TT01', 18);
const TT02 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('TT02_ADDRESS', 'Test Token 02', 'TT02', 18);
const ETHER = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('ETHER_ADDRESS', 'Ether', 'ETH', 18);
const QUICK = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('QUICK_ADDRESS', 'Quickswap', 'QUICK', 18);
const WANNA = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('WANNA_ADDRESS', 'Wannaswap', 'WANNA', 18);
const WBTC = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('WBTC_ADDRESS', 'Wrapped Bitcoin', 'WBTC', 18);
const WBTCe = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('WBTC_ADDRESS', 'Wrapped Bitcoin', 'WBTCe', 18);
const IGG = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('IGG_ADDRESS', 'IG Gold', 'IGG', 18);
const OM = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('OM_ADDRESS', 'OM Token', 'OM', 18);
const SUSHI = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('SUSHI_ADDRESS', 'SushiToken', 'SUSHI', 18);
const YAM = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('YAM_ADDRESS', 'YAM', 'YAM', 18);
const RUNE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('RUNE_ADDRESS', 'RUNE.ETH', 'RUNE', 18);
const YFI = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('YFI_ADDRESS', 'Yearn', 'YFI', 18);
const BTCB = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('BTCB_ADDRESS', 'Binance BTC', 'BTCB', 18);
const CAKE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('CAKE_ADDRESS', 'PancakeSwap Token', 'CAKE', 18);
const maUSDC = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('maUSDC_ADDRESS', 'Matic Aave interest bearing USDC', 'maUSDC', 6);
const NFTX = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('NFTX_ADDRESS', 'NFTX', 'NFTX', 18);
const STETH = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('stETH_ADDRESS', 'stakedETH', 'stETH', 18);
const CUSD = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('cUSD_ADDRESS', 'Celo Dollar', 'cUSD', 18);
const CEUR = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('cEUR_ADDRESS', 'Celo Euro', 'cEUR', 18);
const JOE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('JOE_ADDRESS', 'JoeToken', 'JOE', 18);
const PNG = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('PNG_ADDRESS', 'Pangolin', 'PNG', 18);
var _name, _symbol;
const WNATIVE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('WNATIVE_ADDRESS', (chainId)=>{
    var ref;
    return `Wrapped ${(_name = (ref = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .getChainDetailed */ .$G)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.name) !== null && _name !== void 0 ? _name : 'Ether'}`;
}, (chainId)=>{
    var ref;
    return `W${(_symbol = (ref = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .getChainDetailed */ .$G)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.symbol) !== null && _symbol !== void 0 ? _symbol : 'ETH'}`;
}, 18);
const WNATIVE_ONLY = {
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Mainnet */ .a_.Mainnet]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Ropsten */ .a_.Ropsten]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Ropsten */ .a_.Ropsten]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Rinkeby */ .a_.Rinkeby]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Rinkeby */ .a_.Rinkeby]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Kovan */ .a_.Kovan]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Kovan */ .a_.Kovan]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Gorli */ .a_.Gorli]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Gorli */ .a_.Gorli]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.BSC */ .a_.BSC]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.BSC */ .a_.BSC]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.BSCT */ .a_.BSCT]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.BSCT */ .a_.BSCT]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Matic */ .a_.Matic]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Matic */ .a_.Matic]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Mumbai */ .a_.Mumbai]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Mumbai */ .a_.Mumbai]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Arbitrum */ .a_.Arbitrum]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Arbitrum */ .a_.Arbitrum]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Arbitrum_Rinkeby */ .a_.Arbitrum_Rinkeby]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Arbitrum_Rinkeby */ .a_.Arbitrum_Rinkeby]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.xDai */ .a_.xDai]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.xDai */ .a_.xDai]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Avalanche */ .a_.Avalanche]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Avalanche_Fuji */ .a_.Avalanche_Fuji]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Avalanche_Fuji */ .a_.Avalanche_Fuji]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Celo */ .a_.Celo]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Celo */ .a_.Celo]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Fantom */ .a_.Fantom]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Fantom */ .a_.Fantom]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Aurora */ .a_.Aurora]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Aurora */ .a_.Aurora]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Aurora_Testnet */ .a_.Aurora_Testnet]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Aurora_Testnet */ .a_.Aurora_Testnet]
    ]
};
const BIPS_BASE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(10000);
const ONE_BIPS = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ONE.dividedBy */ .ry.dividedBy(BIPS_BASE);
const SLIPPAGE_MIN = 10 // bips
;
const SLIPPAGE_DEFAULT = 50 // bips
;
const SLIPPAGE_MAX = 2000 // bips
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

/***/ 79755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ TRADERJOE_CUSTOM_BASES),
/* harmony export */   "X": () => (/* binding */ TRADERJOE_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80805);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const TRADERJOE_CUSTOM_BASES = {};
const TRADERJOE_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAIe */ .Lq,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDTe */ ._c,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDCe */ .tB,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTCe */ .MI
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]
    )
};


/***/ }),

/***/ 26914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ TRISOLARIS_CUSTOM_BASES),
/* harmony export */   "m": () => (/* binding */ TRISOLARIS_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80805);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const TRISOLARIS_CUSTOM_BASES = {};
const TRISOLARIS_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .MSKA */ .uz,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .MSKB */ .mW,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .MSKC */ .Xw
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]
    )
};


/***/ }),

/***/ 71019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QQ": () => (/* binding */ UNISWAP_CUSTOM_BASES),
/* harmony export */   "u7": () => (/* binding */ UNISWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "s9": () => (/* binding */ MAX_HOP),
/* harmony export */   "jg": () => (/* binding */ DEFAULT_MULTICALL_GAS_LIMIT),
/* harmony export */   "Ru": () => (/* binding */ BETTER_TRADE_LESS_HOPS_THRESHOLD),
/* harmony export */   "fI": () => (/* binding */ ZERO_PERCENT),
/* harmony export */   "yC": () => (/* binding */ ONE_HUNDRED_PERCENT)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18249);
/* harmony import */ var _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59800);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24994);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsbi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80805);




/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const UNISWAP_CUSTOM_BASES = {
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet]: {
        [_trader__WEBPACK_IMPORTED_MODULE_2__/* .AMPL */ .s5[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet].address]: [
            _trader__WEBPACK_IMPORTED_MODULE_2__/* .DAI */ .h1,
            _trader__WEBPACK_IMPORTED_MODULE_2__/* .WNATIVE */ .FX
        ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet]
        )
    },
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic]: {
        [_trader__WEBPACK_IMPORTED_MODULE_2__/* .AMPL */ .s5[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic].address]: [
            _trader__WEBPACK_IMPORTED_MODULE_2__/* .DAI */ .h1,
            _trader__WEBPACK_IMPORTED_MODULE_2__/* .WNATIVE */ .FX
        ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic]
        )
    }
};
const UNISWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_2__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic]: [
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Rinkeby */ .a_.Rinkeby]: [
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .MSKA */ .uz,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .MSKB */ .mW,
        _trader__WEBPACK_IMPORTED_MODULE_2__/* .MSKC */ .Xw
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Rinkeby */ .a_.Rinkeby]
    )
};
const MAX_HOP = 3;
const DEFAULT_MULTICALL_GAS_LIMIT = 2000000;
// used to ensure the user doesn't send so much ETH so they end up with <.01
const BETTER_TRADE_LESS_HOPS_THRESHOLD = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent(jsbi__WEBPACK_IMPORTED_MODULE_1___default().BigInt(50), jsbi__WEBPACK_IMPORTED_MODULE_1___default().BigInt(10000));
const ZERO_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent('0');
const ONE_HUNDRED_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent('1');


/***/ }),

/***/ 1548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ WANNASWAP_CUSTOM_BASES),
/* harmony export */   "N": () => (/* binding */ WANNASWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80805);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const WANNASWAP_CUSTOM_BASES = {};
const WANNASWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]: [
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WANNA */ .lB,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]
    )
};


/***/ }),

/***/ 3087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vv": () => (/* binding */ debugModeSetting),
/* harmony export */   "OF": () => (/* binding */ appearanceSettings),
/* harmony export */   "pQ": () => (/* binding */ languageSettings),
/* harmony export */   "tR": () => (/* binding */ pluginIDSettings),
/* harmony export */   "AI": () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   "Ct": () => (/* binding */ userGuideStatus),
/* harmony export */   "Pg": () => (/* binding */ sayHelloShowed),
/* harmony export */   "g4": () => (/* binding */ dismissPinExtensionTip),
/* harmony export */   "gG": () => (/* binding */ dismissVerifyNextID),
/* harmony export */   "JE": () => (/* binding */ bioDescription),
/* harmony export */   "yO": () => (/* binding */ personalHomepage),
/* harmony export */   "VO": () => (/* binding */ currentPluginMinimalModeNOTEnabled),
/* harmony export */   "i4": () => (/* binding */ launchPageSettings),
/* harmony export */   "cn": () => (/* binding */ currentPersonaIdentifier)
/* harmony export */ });
/* unused harmony exports currentImagePayloadStatus, currentSelectedIdentity, getCurrentSelectedIdentity, newDashboardConnection */
/* harmony import */ var _createSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90431);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90795);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10941);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42421);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87002);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43576);
/* harmony import */ var _plugins_EVM_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32646);







/**
 * Does the debug mode on
 */ const debugModeSetting = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('debugMode', false, {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_enable_debug')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_enable_debug_desc')
});
// #region appearance
const appearanceSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('appearance', _masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .Appearance["default"] */ .um["default"], {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_appearance')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_appearance_secondary')
});
// #endregion
// #region language
const languageSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('language', _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.__auto__ */ .P7.__auto__, {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_language')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_language_secondary')
});
// #endregion
// #region web3 plugin ID
const pluginIDSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('pluginID', _plugins_EVM_constants__WEBPACK_IMPORTED_MODULE_6__/* .PLUGIN_ID */ .Uu, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
// #endregion
// #region network setting
/**
 * Expected Usage: export const currentImagePayloadStatus = createNetworkSettings('currentImagePayloadStatus')
 *
 * Work around the issue:
 *      https://github.com/microsoft/TypeScript/issues/42873
 *      https://github.com/microsoft/TypeScript/issues/30858
 *
 * References:
 *      PluginGitcoinMessages: packages/mask/src/plugins/Gitcoin/messages.ts
 *      PluginTraderMessages: packages/mask/src/plugins/Trader/messages.ts
 *      PluginTransakMessages: packages/mask/src/plugins/Transak/messages.ts
 */ const currentImagePayloadStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('currentImagePayloadStatus', '');
const currentSelectedIdentity = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('currentSelectedIdentity', '');
function getCurrentSelectedIdentity(network) {
    return Identifier.fromString(currentSelectedIdentity[network].value, ProfileIdentifier).unwrapOr(ProfileIdentifier.unknown);
}
const currentSetupGuideStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('currentSetupGuideStatus', '');
const userGuideStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('userGuideStatus', '');
const sayHelloShowed = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('sayHelloShowed', false);
const dismissPinExtensionTip = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('dismissPinExtensionTip', false, {
    primary: ()=>''
});
const dismissVerifyNextID =  true ? (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('useless', false) : 0;
const bioDescription = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('bioDescription', '');
const personalHomepage = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('personalHomepage', '');
// This is a misuse of concept "NetworkSettings" as "namespaced settings"
// The refactor is tracked in https://github.com/DimensionDev/Maskbook/issues/1884
/**
 * ! DO NOT use this directly to query the plugin status !
 *
 * use `useActivatedPluginsSNSAdaptor().find((x) => x.ID === PLUGIN_ID)` or
 * `useActivatedPluginsDashboard().find((x) => x.ID === PLUGIN_ID)` instead
 */ // This was "currentPluginEnabled" before, but we used it to represent minimal mode now to make the settings be able to migrate.
const currentPluginMinimalModeNOTEnabled = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('pluginsEnabled', true);
// #endregion
const launchPageSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('launchPage', _types__WEBPACK_IMPORTED_MODULE_2__/* .LaunchPage.dashboard */ .z.dashboard, {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_launch_page')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_launch_page_secondary')
});
const newDashboardConnection = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('beta-dashboard', false, {
    primary: ()=>'Experimental: Allow isolated dashboard to connect'
    ,
    secondary: ()=>"WARNING: DON'T OPEN THIS UNLESS YOU KNOW WHAT YOU ARE DOING."
});
const currentPersonaIdentifier = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('currentPersonaIdentifier', '', {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
try {
    // Migrate language settings
    const lng = languageSettings.value;
    if (lng === 'en') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.enUS */ .P7.enUS;
    else if (lng === 'zh') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.zhCN */ .P7.zhCN;
    else if (lng === 'ja') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.jaJP */ .P7.jaJP;
    else if (lng === 'ko') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.koKR */ .P7.koKR;
    else languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.__auto__ */ .P7.__auto__;
} catch  {}


/***/ }),

/***/ 248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* unused harmony export mapContactAvatarColor */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21065);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32824);



function mapContactAvatarColor(string, theme) {
    const hash = [
        ...string
    ].reduce((prev, current)=>{
        // eslint-disable-next-line no-bitwise
        const next = current.charCodeAt(0) + (prev << 5) - prev;
        // eslint-disable-next-line no-bitwise
        return next & next;
    }, 0);
    return `hsl(${hash % 360}, ${theme === 'dark' ? '78%' : '98%'}, ${theme === 'dark' ? '50%' : '70%'})`;
}
function Avatar({ person , ...props }) {
    const { avatar , nickname , identifier  } = person;
    const name = nickname || identifier.userId || '';
    const [first, last] = name.split(' ');
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().palette.mode;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        "aria-label": name,
        src: avatar,
        style: {
            backgroundColor: mapContactAvatarColor(identifier.toText(), theme)
        },
        ...props,
        children: [
            first[0],
            (last || '')[0]
        ]
    }));
}


/***/ }),

/***/ 17155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ createNormalReactRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15621);
/* harmony import */ var _components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80443);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42421);




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

/***/ 21330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);

function useControlledDialog() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        open,
        setOpen,
        onClose: ()=>setOpen(false)
        ,
        onOpen: ()=>setOpen(true)
    };
}


/***/ }),

/***/ 38918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27403);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54692);




/**
 * A util hooks for easier to use `<Menu>`s.
 * @param menus Material UI `<MenuItem />` elements
 */ function useMenu(elements, anchorSibling = false, props, useShadowRoot = true) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const close = ()=>{
        setOpen(false);
        setAnchorEl(null);
    };
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useShadowRoot ? _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .ShadowRootMenu */ .dy : _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            PaperProps: props === null || props === void 0 ? void 0 : props.paperProps,
            MenuListProps: props === null || props === void 0 ? void 0 : props.menuListProps,
            open,
            anchorEl,
            onClose: close,
            onClick: close,
            anchorOrigin: props === null || props === void 0 ? void 0 : props.anchorOrigin,
            transformOrigin: props === null || props === void 0 ? void 0 : props.transformOrigin
        }, elements === null || elements === void 0 ? void 0 : elements.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
                ...element.props,
                key
            }) : element
        )),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((anchorElOrEvent)=>{
            let element;
            if (anchorElOrEvent instanceof HTMLElement) {
                element = anchorElOrEvent;
            } else {
                element = anchorElOrEvent.currentTarget;
            }
            var ref;
            // when the essential content of currentTarget would be closed over,
            //  we can set the anchorEl with currentTarget's bottom sibling to avoid it.
            const finalAnchor = anchorSibling ? (ref = element.nextElementSibling) !== null && ref !== void 0 ? ref : undefined : element;
            setAnchorEl(finalAnchor);
            setOpen(true);
            // HACK: it seems like anchor doesn't work correctly
            // but a force repaint can solve the problem.
            window.requestAnimationFrame(update);
        }, []), 
    ];
}


/***/ }),

/***/ 54195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useSettingsSwitcher),
/* harmony export */   "E": () => (/* binding */ useSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78037);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57767);




function useSettingsSwitcher(settings, options, resolver) {
    const currentOption = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .useValueRef */ .E)(settings);
    const nextOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (options.length === 0) return;
        if (typeof currentOption === 'undefined') return options[0];
        const indexOf = options.indexOf(currentOption);
        if (indexOf === -1) return;
        return indexOf === options.length - 1 ? options[0] : options[indexOf + 1];
    }, [
        currentOption,
        options
    ]);
    const onSwitch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (typeof nextOption !== 'undefined') settings.value = nextOption;
    }, [
        nextOption
    ]);
    if (options.length <= 1) return null;
    if (typeof nextOption === 'undefined') return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        sx: {
            marginTop: 1
        },
        color: "primary",
        variant: "contained",
        onClick: onSwitch,
        children: [
            "Switch to ",
            resolver(nextOption)
        ]
    }));
}
function useSwitcher(currentOption, onSwitch, options, resolver) {
    const nextOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (options.length === 0) return;
        if (typeof currentOption === 'undefined') return options[0];
        const indexOf = options.indexOf(currentOption);
        if (indexOf === -1) return;
        return indexOf === options.length - 1 ? options[0] : options[indexOf + 1];
    }, [
        currentOption,
        options
    ]);
    if (options.length <= 1) return null;
    if (typeof nextOption === 'undefined') return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        sx: {
            marginTop: 1
        },
        color: "primary",
        variant: "contained",
        onClick: ()=>onSwitch(nextOption)
        ,
        children: [
            "Switch to ",
            resolver(nextOption)
        ]
    }));
}


/***/ }),

/***/ 58179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useI18N),
/* harmony export */   "Z": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49945);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97723);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90795);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3087);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87002);
/* harmony import */ var _shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7853);





_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* ["default"].use */ .Z.use(react_i18next__WEBPACK_IMPORTED_MODULE_4__/* .initReactI18next */ .Db);
/**
 * Enhanced version of useTranslation
 * @param opt Options
 */ function useI18N(opt) {
    return (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$)('mask', opt);
}
function useLanguage() {
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$)();
    const lang = i18n.language;
    if (lang in _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .SupportedLanguages */ .iu) return lang;
    return _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .SupportedLanguages.enUS */ .iu.enUS;
}
_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .languageSettings.addListener */ .pQ.addListener((next)=>{
    if (next === _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .LanguageOptions.__auto__ */ .P7.__auto__) {
        const result = _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* ["default"].services.languageDetector.detect */ .Z.services.languageDetector.detect();
        for (const lng of result){
            if (lng in _shared_ui__WEBPACK_IMPORTED_MODULE_3__/* .languages */ .Mj) return void _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .Z.changeLanguage(lng);
        }
        _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .Z.changeLanguage(_masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .LanguageOptions.enUS */ .P7.enUS);
    } else {
        _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .Z.changeLanguage(next);
    }
});


/***/ }),

/***/ 7282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qE": () => (/* reexport */ Avatar/* Avatar */.q),
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
  "a_": () => (/* reexport */ BackupFormat/* UpgradeBackupJSONFile */.a),
  "SR": () => (/* reexport */ asyncIteratorHelpers/* asyncIteratorToArray */.SR),
  "aW": () => (/* reexport */ collectNodeText/* collectNodeText */.a),
  "_r": () => (/* reexport */ collectNodeText/* collectTwitterEmoji */._),
  "lR": () => (/* reexport */ BackupFile/* convertBackupFileToObject */.l),
  "jv": () => (/* reexport */ createNormalReactRoot/* createNormalReactRoot */.j),
  "ou": () => (/* reexport */ renderInShadowRoot/* createReactRootShadowed */.o),
  "Qn": () => (/* reexport */ Payload/* deconstructPayload */.Q),
  "GR": () => (/* reexport */ utils/* downloadUrl */.GR),
  "Ql": () => (/* reexport */ theme/* extendsTheme */.Ql),
  "uM": () => (/* reexport */ permissions/* extraPermissions */.u),
  "jK": () => (/* reexport */ BackupFile/* fixBackupFilePermission */.j),
  "$I": () => (/* reexport */ suspends/* getAssetAsBlobURL */.$),
  "dF": () => (/* reexport */ theme_tools/* getBackgroundColor */.dF),
  "c_": () => (/* reexport */ getTextUILength/* getTextUILength */.c),
  "bF": () => (/* reexport */ utils/* pasteImageToActiveElements */.bF),
  "Vc": () => (/* reexport */ renderInShadowRoot/* setupShadowRootPortal */.V),
  "cc": () => (/* reexport */ getTextUILength/* sliceTextByUILength */.L),
  "fy": () => (/* reexport */ watcher/* startWatch */.f),
  "ft": () => (/* reexport */ dom/* untilElementAvailable */.f),
  "Kx": () => (/* reexport */ theme/* useClassicMaskFullPageTheme */.Kx),
  "D2": () => (/* reexport */ useControlledDialog/* useControlledDialog */.D),
  "M1": () => (/* reexport */ i18n_next_ui/* useI18N */.M),
  "ZK": () => (/* reexport */ i18n_next_ui/* useLanguage */.Z),
  "IN": () => (/* reexport */ useMatchXS/* useMatchXS */.I),
  "H9": () => (/* reexport */ useMenu/* useMenu */.H),
  "Eh": () => (/* reexport */ theme/* usePopupsMaskFullPageTheme */.Eh),
  "ad": () => (/* reexport */ src/* usePortalShadowRoot */.ad),
  "eD": () => (/* reexport */ useQueryNavigatorPermission),
  "MN": () => (/* reexport */ useSettingSwitcher/* useSettingsSwitcher */.M),
  "Ei": () => (/* reexport */ useSettingSwitcher/* useSwitcher */.E)
});

// UNUSED EXPORTS: CryptoKeyToJsonWebKey, DecryptFailedReason, JWKToKey, JsonWebKeyToCryptoKey, PersonaArrayComparer, asyncIteratorWithResult, clamp, constructAlpha38, createShadowRootForwardedComponent, createShadowRootForwardedPopperComponent, fromRGB, getBackupPreviewInfo, getForegroundColor, getKeyParameter, isDark, isDarkTheme, keyToAddr, keyToJWK, mapContactAvatarColor, memorizeAsyncGenerator, nthChild, regexMatch, selectElementContents, shade, toRGB, useClassicMaskSNSTheme, useColorStyles, useErrorStyles, useSuspense

// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(248);
;// CONCATENATED MODULE: ./src/utils/components/index.ts


// EXTERNAL MODULE: ./src/utils/debug/index.ts
var debug = __webpack_require__(86490);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(21330);
// EXTERNAL MODULE: ./src/utils/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(74883);
// EXTERNAL MODULE: ./src/utils/hooks/useMenu.tsx
var useMenu = __webpack_require__(38918);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/hasIn.js + 2 modules
var hasIn = __webpack_require__(61451);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(71986);
;// CONCATENATED MODULE: ./src/utils/hooks/useQueryNavigatorPermission.ts
/** This file is published under MIT License */ 


const q = [
    'query',
    'request',
    'revoke'
];
function checkPermissionApiUsability(type) {
    const r = {};
    for (const v of q){
        r[v] = (0,hasIn/* default */.Z)(navigator, `permissions.${v}`);
    }
    if (type) {
        return r[type];
    }
    return r;
}
function useQueryNavigatorPermission(needRequest, name) {
    const [permission, updatePermission] = (0,react.useState)('prompt');
    (0,react.useEffect)(()=>{
        // TODO: Only camera related APi need to check Flags.has_no_WebRTC
        if (!needRequest || permission !== 'prompt' || shared/* Flags.has_no_WebRTC */.vU.has_no_WebRTC) return;
        let permissionStatus;
        const handleChange = function() {
            updatePermission(this.state);
        };
        if (checkPermissionApiUsability('query')) {
            navigator.permissions// @ts-expect-error https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-898868275
            .query({
                name
            }).then((p)=>{
                permissionStatus = p;
                permissionStatus.addEventListener('change', handleChange);
                updatePermission(permissionStatus.state);
            }).catch(()=>{
                // for some user agents which implemented `query` method
                // but rise an error if specific permission name dose not supported
                updatePermission('granted');
            });
        } else if (checkPermissionApiUsability('request')) {
            navigator.permissions// @ts-expect-error https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-898868275
            .request({
                name
            }).then((p)=>{
                updatePermission(p.state);
            }).catch(()=>{
                updatePermission('granted');
            });
        } else {
            updatePermission('granted');
        }
        return ()=>{
            return permissionStatus === null || permissionStatus === void 0 ? void 0 : permissionStatus.removeEventListener('change', handleChange);
        };
    }, [
        name,
        needRequest,
        permission
    ]);
    return permission;
}

// EXTERNAL MODULE: ./src/utils/hooks/useSettingSwitcher.tsx
var useSettingSwitcher = __webpack_require__(54195);
;// CONCATENATED MODULE: ./src/utils/hooks/index.ts







// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(3993);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
;// CONCATENATED MODULE: ./src/utils/shadow-root/index.ts



// EXTERNAL MODULE: ./src/utils/suspends/index.ts + 1 modules
var suspends = __webpack_require__(17077);
// EXTERNAL MODULE: ./src/utils/type-transform/asyncIteratorHelpers.ts
var asyncIteratorHelpers = __webpack_require__(61452);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFile.ts
var BackupFile = __webpack_require__(20990);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/index.ts
var BackupFormat = __webpack_require__(75776);
// EXTERNAL MODULE: ./src/utils/type-transform/CryptoKey-JsonWebKey.ts
var CryptoKey_JsonWebKey = __webpack_require__(70639);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(61292);
// EXTERNAL MODULE: ./src/utils/type-transform/SECP256k1-ETH.ts
var SECP256k1_ETH = __webpack_require__(59391);
;// CONCATENATED MODULE: ./src/utils/type-transform/index.ts







// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(64148);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(70409);
// EXTERNAL MODULE: ./src/utils/getTextUILength.ts
var getTextUILength = __webpack_require__(34390);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(58179);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(87478);
// EXTERNAL MODULE: ./src/utils/permissions.ts
var permissions = __webpack_require__(73325);
// EXTERNAL MODULE: ./src/utils/createNormalReactRoot.tsx
var createNormalReactRoot = __webpack_require__(17155);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(1235);
// EXTERNAL MODULE: ./src/utils/theme.ts
var theme = __webpack_require__(26734);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(58245);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(41878);
// EXTERNAL MODULE: ./src/utils/collectNodeText.ts
var collectNodeText = __webpack_require__(65395);
;// CONCATENATED MODULE: ./src/utils/index.ts





















/***/ }),

/***/ 87478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_0__.ql)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71986);



/***/ }),

/***/ 3993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ setupShadowRootPortal),
/* harmony export */   "o": () => (/* binding */ createReactRootShadowed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71986);
/* harmony import */ var _UIRoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68526);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26734);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15621);






const captureEvents = [
    'paste',
    'keydown',
    'keypress',
    'keyup',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'change', 
];
const setupShadowRootPortal = ()=>{
    const shadow = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .setupPortalShadowRoot */ .d_)({
        mode: _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
    }, captureEvents);
    (0,react_dom__WEBPACK_IMPORTED_MODULE_5__.createRoot)(shadow.appendChild(document.createElement('head'))).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("head", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {
                useTheme: _theme__WEBPACK_IMPORTED_MODULE_4__/* .useClassicMaskSNSTheme */ .VJ
            })
        ]
    }));
};
// https://github.com/DimensionDev/Maskbook/issues/3265 with fast refresh or import order?
const createReactRootShadowed_raw = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .createReactRootShadowedPartial */ .zV)({
    preventEventPropagationList: captureEvents,
    wrapJSX (jsx) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UIRoot__WEBPACK_IMPORTED_MODULE_3__/* .MaskUIRoot */ .Y, {
            useTheme: _theme__WEBPACK_IMPORTED_MODULE_4__/* .useClassicMaskSNSTheme */ .VJ,
            kind: "sns",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}),
                jsx
            ]
        }));
    }
});
function createReactRootShadowed(...args) {
    return createReactRootShadowed_raw(...args);
}


/***/ }),

/***/ 17077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ getAssetAsBlobURL)
});

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(43576);
;// CONCATENATED MODULE: ./src/utils/suspends/getAssetAsBlobURL.ts


/**
 * Fetch a file and turn it into blob URL.
 * This function must run in React concurrent mode.
 */ function getAssetAsBlobURL(url) {
    return (0,src/* getAssetAsBlobURL */.$I)(url, service/* default.Helper.fetch */.ZP.Helper.fetch);
}

;// CONCATENATED MODULE: ./src/utils/suspends/index.ts



/***/ }),

/***/ 26734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VJ": () => (/* binding */ useClassicMaskSNSTheme),
/* harmony export */   "Kx": () => (/* binding */ useClassicMaskFullPageTheme),
/* harmony export */   "Eh": () => (/* binding */ usePopupsMaskFullPageTheme),
/* harmony export */   "Nh": () => (/* binding */ useColorStyles),
/* harmony export */   "B6": () => (/* binding */ useErrorStyles),
/* harmony export */   "Ql": () => (/* binding */ extendsTheme)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78037);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43576);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87002);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97978);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29228);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84207);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11722);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59295);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(91732);
/* harmony import */ var _mui_material_locale_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69384);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9084);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46440);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76342);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3087);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44131);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47175);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(60232);
/* harmony import */ var _social_network_adaptor_twitter_com_customization_twitter_color_schema_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88674);
















function getFontFamily(monospace) {
    // We want to look native.
    // Windows has no CJK sans monospace. Accommodate that.
    // We only use it for fingerprints anyway so CJK coverage ain't a problem... yet.
    const monofont = navigator.platform.startsWith('Win') ? 'Consolas, monospace' : 'monospace';
    // https://caniuse.com/font-family-system-ui
    // Firefox does NOT support yet it in any form on Windows, but tests indicate that it agrees with Edge in using the UI font for sans-serif:
    // Microsoft YaHei on zh-Hans-CN.
    return !monospace ? '-apple-system, system-ui, sans-serif' : monofont;
}
const base = {
    palette: {
        primary: {
            main: '#1c68f3'
        },
        secondary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
        text: {
            hint: 'rgba(0, 0, 0, 0.38)'
        }
    },
    typography: {
        fontFamily: getFontFamily()
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1112,
            lg: 1280,
            xl: 1920
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'hover'
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    minWidth: '100px'
                }
            },
            defaultProps: {
                size: 'small',
                disableElevation: true
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    padding: '0',
                    // up-sm
                    '@media screen and (min-width: 600px)': {
                        minWidth: 160
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: '12px'
                }
            }
        }
    }
};
const lightThemePatch = {
    palette: {
        mode: 'light'
    }
};
const darkThemePatch = {
    palette: {
        mode: 'dark',
        background: {
            paper: _mui_material_colors__WEBPACK_IMPORTED_MODULE_10__/* ["default"][900] */ .Z[900]
        }
    },
    components: {
        MuiPaper: {
            // https://github.com/mui-org/material-ui/pull/25522
            styleOverrides: {
                root: {
                    backgroundImage: 'unset'
                }
            }
        }
    }
};
const baseTheme = (theme)=>{
    if (theme === 'light') return (0,lodash_unified__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)((0,lodash_unified__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(base), lightThemePatch);
    return (0,lodash_unified__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)((0,lodash_unified__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(base), darkThemePatch);
};
// Theme
const MaskLightTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(baseTheme('light'));
const MaskDarkTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(baseTheme('dark'));
const staticSubscription = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SubscriptionFromValueRef */ .Jf)(new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_14__.ValueRef('light'));
function useClassicMaskSNSTheme() {
    var ref;
    const { current: provider  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_6__/* .activatedSocialNetworkUI.customization.paletteMode */ .LM.customization.paletteMode) === null || ref === void 0 ? void 0 : ref.current) || staticSubscription);
    const { current: usePostTheme = (t)=>t
      } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(_social_network__WEBPACK_IMPORTED_MODULE_6__/* .activatedSocialNetworkUI.customization.useTheme */ .LM.customization.useTheme);
    const palette = (0,use_subscription__WEBPACK_IMPORTED_MODULE_7__.useSubscription)(provider);
    const baseTheme1 = palette === 'dark' ? MaskDarkTheme : MaskLightTheme;
    // TODO: support RTL?
    const [localization, isRTL] = useThemeLanguage();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(baseTheme1, localization);
    return usePostTheme(theme);
}
/**
 * @deprecated
 * - Popups: migrate to \@masknet/theme package
 */ function useClassicMaskFullPageTheme(overwrite) {
    const userPreference = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__.or)(overwrite === null || overwrite === void 0 ? void 0 : overwrite.forcePalette, (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .appearanceSettings */ .OF));
    const systemPreference = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const finalPalette = userPreference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance["default"] */ .um["default"] ? systemPreference : userPreference;
    const baseTheme2 = finalPalette === 'dark' ? MaskDarkTheme : MaskLightTheme;
    const [localization, isRTL] = useThemeLanguage();
    // TODO: support RTL
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(baseTheme2, localization);
}
/**
 * Only used in swap pages under popups, will replace it in the future
 */ function usePopupsMaskFullPageTheme() {
    const baseTheme3 = MaskLightTheme;
    (0,immer__WEBPACK_IMPORTED_MODULE_19__/* .setAutoFreeze */ .Fl)(false);
    const PopupTheme = (0,immer__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP)(baseTheme3, (theme)=>{
        theme.palette.background.paper = '#ffffff';
        theme.palette.primary = {
            ...theme.palette.primary,
            main: '#1c68f3'
        };
        const colorSchema = _social_network_adaptor_twitter_com_customization_twitter_color_schema_json__WEBPACK_IMPORTED_MODULE_8__.light;
        const colors = Object.keys(colorSchema);
        colors.forEach((color)=>{
            if (typeof theme.palette[color] === 'object') {
                Object.assign(theme.palette[color], colorSchema[color]);
            }
        });
        theme.palette.divider = colorSchema.divider;
        theme.palette.secondaryDivider = colorSchema.secondaryDivider;
        theme.components = theme.components || {};
        const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
        theme.components.MuiButton = {
            defaultProps: {
                size: 'medium',
                disableElevation: true,
                variant: 'contained'
            },
            variants: [
                {
                    props: {
                        variant: 'sns'
                    },
                    style: {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.common.white
                        },
                        '&.Mui-disabled': {
                            opacity: 0.5,
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.common.white
                        }
                    }
                },
                {
                    props: {
                        color: 'error'
                    },
                    style: {
                        backgroundColor: theme.palette.error.main,
                        color: theme.palette.common.white,
                        '&:hover': {
                            backgroundColor: '#f53b47'
                        }
                    }
                }, 
            ],
            styleOverrides: {
                root: {
                    borderRadius: 500,
                    textTransform: 'initial',
                    fontWeight: 600,
                    minHeight: 39,
                    paddingLeft: 15,
                    paddingRight: 15,
                    boxShadow: 'none',
                    [smallQuery]: {
                        '&': {
                            height: 30,
                            minHeight: 'auto !important',
                            padding: '0 14px !important'
                        }
                    }
                },
                contained: {
                    backgroundColor: theme.palette.text.primary,
                    color: theme.palette.text.buttonText,
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        backgroundColor: theme.palette.text.primary,
                        color: theme.palette.text.buttonText
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.action.buttonHover
                    },
                    [smallQuery]: {
                        '&': {
                            height: 30,
                            minHeight: 'auto !important',
                            padding: '0 14px !important'
                        }
                    }
                },
                containedSecondary: {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.strong,
                    '&:hover': {
                        color: theme.palette.action.buttonHover,
                        backgroundColor: theme.palette.action.bgHover
                    },
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.strong
                    }
                },
                outlined: {
                    color: theme.palette.text.strong,
                    borderColor: theme.palette.secondaryDivider,
                    backgroundColor: 'transparent',
                    '&:hover': {
                        color: theme.palette.action.buttonHover,
                        borderColor: theme.palette.secondaryDivider,
                        backgroundColor: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .parseColor */ .lu)(theme.palette.text.primary).setAlpha(0.1).toRgbString()
                    },
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        color: theme.palette.text.strong,
                        backgroundColor: 'transparent'
                    }
                },
                sizeLarge: {
                    minHeight: 40,
                    paddingLeft: 30,
                    paddingRight: 30,
                    [smallQuery]: {
                        '&': {
                            height: 28,
                            minHeight: 28,
                            paddingLeft: 15,
                            paddingRight: 15
                        }
                    }
                },
                sizeSmall: {
                    minHeight: 30,
                    paddingLeft: 15,
                    paddingRight: 15,
                    [smallQuery]: {
                        '&': {
                            height: 25,
                            minHeight: 29,
                            paddingLeft: 10,
                            paddingRight: 10
                        }
                    }
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
        theme.components.MuiChip = {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.strong
                },
                colorPrimary: {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    '&:hover': {
                        backgroundColor: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .parseColor */ .lu)(theme.palette.text.primary).setAlpha(0.1).toRgbString()
                    }
                }
            }
        };
        theme.components.MuiBackdrop = {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.action.mask
                }
            }
        };
        theme.components.MuiTooltip = {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.background.tipMask,
                    color: theme.palette.text.buttonText,
                    borderRadius: 8
                },
                tooltipArrow: {
                    backgroundColor: theme.palette.background.tipMask
                }
            }
        };
        theme.components.MuiSnackbar = {
            styleOverrides: {
                root: {
                    filter: `drop-shadow(0px 0px 16px ${theme.palette.background.messageShadow});`
                }
            }
        };
    });
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(PopupTheme);
}
function useThemeLanguage() {
    let language = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .languageSettings */ .pQ);
    // TODO: support auto language
    if (language === _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.__auto__ */ .P7.__auto__) language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.enUS */ .P7.enUS;
    const displayLanguage = language;
    const langs = {
        [_masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS]: _mui_material_locale_index__WEBPACK_IMPORTED_MODULE_15__/* .enUS */ ._z,
        [_masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.jaJP */ .iu.jaJP]: _mui_material_locale_index__WEBPACK_IMPORTED_MODULE_15__/* .jaJP */ .jz,
        [_masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.koKR */ .iu.koKR]: _mui_material_locale_index__WEBPACK_IMPORTED_MODULE_15__/* .koKR */ .uG,
        [_masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.zhTW */ .iu.zhTW]: _mui_material_locale_index__WEBPACK_IMPORTED_MODULE_15__/* .zhTW */ .cj,
        [_masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.zhCN */ .iu.zhCN]: _mui_material_locale_index__WEBPACK_IMPORTED_MODULE_15__/* .zhCN */ .U1
    };
    return [
        langs[displayLanguage] || _mui_material_locale_index__WEBPACK_IMPORTED_MODULE_15__/* .enUS */ ._z,
        false
    ];
}
const useColorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        error: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][900] */ .Z[900]
        },
        success: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_17__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_17__/* ["default"][800] */ .Z[800]
        },
        info: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_18__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_18__/* ["default"][800] */ .Z[800]
        }
    };
});
const useErrorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        containedPrimary: {
            backgroundColor: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][900] */ .Z[900],
            '&:hover': {
                backgroundColor: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][900] */ .Z[900] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][700] */ .Z[700]
            }
        },
        outlinedPrimary: {
            borderColor: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][900] */ .Z[900],
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][900] */ .Z[900],
            '&:hover': {
                borderColor: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][900] */ .Z[900] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_16__/* ["default"][700] */ .Z[700]
            }
        }
    };
});
function extendsTheme(extend) {
    return (theme)=>(0,lodash_unified__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)((0,lodash_unified__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(theme), extend(theme))
    ;
}


/***/ }),

/***/ 56644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ UpgradeBackupJSONFile),
/* harmony export */   "V": () => (/* binding */ getBackupPreviewInfo)
/* harmony export */ });
/* harmony import */ var _version_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82093);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89729);
/* harmony import */ var _version_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63799);
/* harmony import */ var _version_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73355);
/* eslint-disable import/no-deprecated */ 



function UpgradeBackupJSONFile(json, identity) {
    if ((0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .isBackupJSONFileVersion2 */ .GI)(json)) return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .patchNonBreakingUpgradeForBackupJSONFileVersion2 */ .a6)(json);
    if ((0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .isBackupJSONFileVersion1 */ .RV)(json)) return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .upgradeFromBackupJSONFileVersion1 */ .nl)((0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .patchNonBreakingUpgradeForBackupJSONFileVersion1 */ .z2)(json));
    if ((0,_version_0__WEBPACK_IMPORTED_MODULE_3__/* .isBackupJSONFileVersion0 */ .m)(json) && identity) {
        const upgraded = (0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .upgradeFromBackupJSONFileVersion0 */ .Bd)(json, identity);
        if (upgraded === null) return null;
        return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .upgradeFromBackupJSONFileVersion1 */ .nl)(upgraded);
    }
    return null;
}
function getBackupPreviewInfo(json) {
    var ref, ref1;
    return {
        personas: json.personas.length,
        accounts: json.personas.reduce((a, b)=>a + b.linkedProfiles.length
        , 0),
        posts: json.posts.length,
        contacts: json.profiles.length,
        relations: json.relations.length,
        files: ((ref = json.plugin) === null || ref === void 0 ? void 0 : (ref1 = ref[_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService]) === null || ref1 === void 0 ? void 0 : ref1.length) || 0,
        wallets: json.wallets.length,
        createdAt: json._meta_.createdAt
    };
}


/***/ }),

/***/ 75776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _JSON_latest__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _JSON_latest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56644);



/***/ }),

/***/ 61292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ deconstructPayload),
/* harmony export */   "R": () => (/* binding */ constructAlpha38)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90795);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79594);
/* harmony import */ var _social_network_utils_text_payload_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27008);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43576);





/**
 * Detect if there is version -40, -39 or -38 payload
 */ function deconstructAlpha40_Or_Alpha39_Or_Alpha38(str, throws = false) {
    // ? payload is 🎼2/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    // ? payload is 🎼3/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    // ? payload is 🎼4/4|AESKeyEncrypted|iv|encryptedText|signature|authorPublicKey?|publicShared?|authorIdentifier:||
    // ? if publicShared is true, that means AESKeyEncrypted is shared with public
    // ? "1" treated as true, "0" or not defined treated as false
    // ? authorIdentifier is encoded as `${network}/${id}`
    const isVersion40 = str.includes('\u{1F3BC}2/4');
    const isVersion39 = str.includes('\u{1F3BC}3/4');
    const isVersion38 = str.includes('\u{1F3BC}4/4');
    str = str.replace('\u{1F3BC}2/4', '\u{1F3BC}3/4');
    str = str.replace('\u{1F3BC}3/4', '\u{1F3BC}4/4');
    const [_, payloadStart] = str.split('\u{1F3BC}4/4|');
    if (!payloadStart) if (throws) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_not_found'));
    else return null;
    const [payload, rest] = payloadStart.split(':||');
    if (rest === undefined) if (throws) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_incomplete'));
    else return null;
    const [AESKeyEncrypted, iv, encryptedText, signature, ...optional] = payload.split('|');
    const [authorPublicKey, publicShared, authorID, ...extra] = optional;
    if (!(AESKeyEncrypted && iv && encryptedText)) if (throws) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_bad'));
    else return null;
    if (extra.length) console.warn('Found extra payload', extra);
    if (isVersion38) {
        if (!signature) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_bad'));
        return {
            version: -38,
            AESKeyEncrypted,
            iv,
            encryptedText,
            signature,
            authorPublicKey,
            sharedPublic: publicShared === '1',
            authorUserID: ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Result.wrap */ .x4.wrap(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Identifier.fromString */ .xb.fromString('person:' + atob(authorID), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ProfileIdentifier */ .WO).unwrap()
            ).unwrapOr(undefined)
        };
    }
    return {
        ownersAESKeyEncrypted: AESKeyEncrypted,
        iv,
        encryptedText,
        signature,
        version: isVersion39 ? -39 : -40
    };
}
function deconstructAlpha41(str, throws = false) {
    // 🎼1/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    if (str.includes('\u{1F3BC}1/4') && str.includes(':||')) if (throws) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_throw_in_alpha41'));
    else return null;
    return null;
}
const versions = new Set([
    deconstructAlpha40_Or_Alpha39_Or_Alpha38,
    deconstructAlpha41
]);
function deconstructPayload(str, networkDecoder) {
    if (!networkDecoder) {
        networkDecoder = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.Environment.ContentScript) ? _social_network_utils_text_payload_ui__WEBPACK_IMPORTED_MODULE_2__/* .decodeTextPayloadUI */ .X2 : (x)=>[
                x
            ]
        ;
    }
    for (const versionDecoder of versions){
        const results = networkDecoder(str);
        for (const result of results){
            if (!result) continue;
            const payload = versionDecoder(result, false);
            if (payload) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(payload);
        }
    }
    if (str.includes('\u{1F3BC}') && str.includes(':||')) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('service_unknown_payload')));
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_not_found')));
}
function constructAlpha38(data, encoder) {
    var ref;
    if (!encoder) {
        encoder = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.Environment.ContentScript) ? _social_network_utils_text_payload_ui__WEBPACK_IMPORTED_MODULE_2__/* .encodeTextPayloadUI */ .XF : (x)=>x
        ;
    }
    const userID = ((ref = data.authorUserID) === null || ref === void 0 ? void 0 : ref.toText().replace('person:', '')) || '';
    const fields = [
        data.AESKeyEncrypted,
        data.iv,
        data.encryptedText,
        data.signature,
        data.authorPublicKey,
        data.sharedPublic ? '1' : '0',
        userID.includes('|') ? undefined : btoa(userID), 
    ];
    return encoder(`\u{1F3BC}4/4|${fields.join('|')}:||`);
}


/***/ }),

/***/ 58245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* binding */ downloadUrl),
/* harmony export */   "bF": () => (/* binding */ pasteImageToActiveElements),
/* harmony export */   "Ms": () => (/* binding */ selectElementContents),
/* harmony export */   "ZB": () => (/* binding */ regexMatch)
/* harmony export */ });
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4520);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32139);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99997);
/**
 * Prefer function declaration than const f = () => ...
 * in this file please.
 */ 


/**
 * Download given url return as Blob
 */ async function downloadUrl(url) {
    try {
        if (url.startsWith(browser.runtime.getURL(''))) {
            return _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Helper.fetch */ .ZP.Helper.fetch(url);
        }
    } catch  {}
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed.');
    return res.blob();
}
/**
 * paste image to activeElements
 * @param image
 */ async function pasteImageToActiveElements(image) {
    (0,_masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__/* .pasteImage */ .Mx)(new Uint8Array(await image.arrayBuffer()));
}
/**
 * Select all text in a node
 * @param el Element
 */ function selectElementContents(el) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = globalThis.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    return sel;
}
function regexMatch(str, regexp, index = 1) {
    const r = str.match(regexp);
    if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(r)) return null;
    if (index === null) {
        return r;
    }
    return r[index];
}


/***/ }),

/***/ 41878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ startWatch)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71986);

function startWatch(watcher, signal) {
    watcher.setDOMProxyOption({
        afterShadowRootInit: {
            mode: _shared__WEBPACK_IMPORTED_MODULE_0__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
        },
        beforeShadowRootInit: {
            mode: _shared__WEBPACK_IMPORTED_MODULE_0__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
        }
    }).startWatch({
        subtree: true,
        childList: true
    });
    signal.addEventListener('abort', ()=>watcher.stopWatch()
    );
    return watcher;
}


/***/ }),

/***/ 43621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sc": () => (/* binding */ Web3Context),
/* harmony export */   "Ae": () => (/* binding */ PopupWeb3Context),
/* harmony export */   "Mc": () => (/* binding */ SwapWeb3Context)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21122);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35895);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18249);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77031);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40085);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80945);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29528);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43576);
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4520);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12705);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70202);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71986);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99997);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52522);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23290);
/* harmony import */ var _masknet_web3_contracts_abis_ERC721_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78322);
/* harmony import */ var _masknet_web3_contracts_abis_CryptoPunks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28053);












const PUNK_CONTRACT_ADDRESS = '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb';
async function getTokenOwner(address, tokenId) {
    const web3 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .createWeb3 */ .N)(_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Ethereum.request */ .ZP.Ethereum.request, ()=>({
            chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ChainId.Mainnet */ .a_.Mainnet
        })
    );
    if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .isSameAddress */ .Wr)(address, PUNK_CONTRACT_ADDRESS)) {
        const PUNKContract = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .createContract */ .OP)(web3, PUNK_CONTRACT_ADDRESS, _masknet_web3_contracts_abis_CryptoPunks_json__WEBPACK_IMPORTED_MODULE_9__);
        return PUNKContract === null || PUNKContract === void 0 ? void 0 : PUNKContract.methods.punkIndexToAddress(tokenId).call();
    }
    const ERC721Contract = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .createContract */ .OP)(web3, address, _masknet_web3_contracts_abis_ERC721_json__WEBPACK_IMPORTED_MODULE_8__);
    return ERC721Contract === null || ERC721Contract === void 0 ? void 0 : ERC721Contract.methods.ownerOf(tokenId).call();
}
function createWeb3Context(disablePopup = false, isMask = false) {
    return {
        allowTestnet: createStaticSubscription(()=>_shared__WEBPACK_IMPORTED_MODULE_4__/* .Flags.wallet_allow_testnet */ .vU.wallet_allow_testnet
        ),
        chainId: createSubscriptionFromSettings(isMask ? _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletChainIdSettings */ .DT : _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentChainIdSettings */ .wU),
        account: createSubscriptionFromAsync(async ()=>{
            try {
                await _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentAccountSettings.readyPromise */ .aK.readyPromise;
                await _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletAccountSettings.readyPromise */ .T_.readyPromise;
                await _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentProviderSettings.readyPromise */ .t1.readyPromise;
            } catch (error) {
            // do nothing
            }
            const account = isMask ? _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletAccountSettings.value */ .T_.value : _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentAccountSettings.value */ .aK.value;
            const providerType = _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentProviderSettings.value */ .t1.value;
            if ((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .isPopupPage */ .N6)()) return account;
            if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ProviderType.Fortmatic */ .lP.Fortmatic) return account;
            if (!(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .isInjectedProvider */ .sR)(providerType)) return account;
            try {
                const bridgedProvider = providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ProviderType.Coin98 */ .lP.Coin98 ? _masknet_injected_script__WEBPACK_IMPORTED_MODULE_1__/* .bridgedCoin98Provider */ .A9 : _masknet_injected_script__WEBPACK_IMPORTED_MODULE_1__/* .bridgedEthereumProvider */ .j3;
                const injectedKey = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__/* .resolveProviderInjectedKey */ .YU)(providerType);
                if (!injectedKey) return '';
                const propertyValue = await bridgedProvider.getProperty(injectedKey);
                if (propertyValue === true) return account;
                return '';
            } catch (error1) {
                return '';
            }
        }, '', (callback)=>{
            const a = _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentAccountSettings.addListener */ .aK.addListener(callback);
            const b = _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletAccountSettings.addListener */ .T_.addListener(callback);
            const c = _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentProviderSettings.addListener */ .t1.addListener(callback);
            return ()=>void [
                    a(),
                    b(),
                    c()
                ]
            ;
        }),
        tokenPrices: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentTokenPricesSettings */ .JC),
        walletPrimary: createSubscriptionFromAsync(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getWalletPrimary */ .V.getWalletPrimary, null, _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletsUpdated.on */ .R.events.walletsUpdated.on),
        wallets: createSubscriptionFromAsync(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getWallets */ .V.getWallets, [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletsUpdated.on */ .R.events.walletsUpdated.on),
        providerType: isMask ? createStaticSubscription(()=>_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ProviderType.MaskWallet */ .lP.MaskWallet
        ) : createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentProviderSettings */ .t1),
        networkType: createSubscriptionFromSettings(isMask ? _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletNetworkSettings */ .br : _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentNetworkSettings */ .fX),
        erc20Tokens: createSubscriptionFromAsync(()=>_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getTokens */ .V.getTokens(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .EthereumTokenType.ERC20 */ .Dr.ERC20)
        , [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.erc20TokensUpdated.on */ .R.events.erc20TokensUpdated.on),
        erc721Tokens: createSubscriptionFromAsync(()=>_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getTokens */ .V.getTokens(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .EthereumTokenType.ERC721 */ .Dr.ERC721)
        , [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.erc721TokensUpdated.on */ .R.events.erc721TokensUpdated.on),
        erc1155Tokens: createSubscriptionFromAsync(()=>_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getTokens */ .V.getTokens(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .EthereumTokenType.ERC1155 */ .Dr.ERC1155)
        , [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.erc1155TokensUpdated.on */ .R.events.erc1155TokensUpdated.on),
        portfolioProvider: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentFungibleAssetDataProviderSettings */ .rI),
        addToken: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.addToken */ .V.addToken,
        removeToken: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.removeToken */ .V.removeToken,
        trustToken: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trustToken */ .V.trustToken,
        blockToken: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.blockToken */ .V.blockToken,
        request: _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Ethereum.request */ .ZP.Ethereum.request,
        getSendOverrides: ()=>isMask ? {
                account: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletAccountSettings.value */ .T_.value,
                chainId: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletChainIdSettings.value */ .DT.value,
                providerType: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ProviderType.MaskWallet */ .lP.MaskWallet
            } : {
                account: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentAccountSettings.value */ .aK.value,
                chainId: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentChainIdSettings.value */ .wU.value,
                providerType: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentProviderSettings.value */ .t1.value
            }
        ,
        getRequestOptions: ()=>({
                popupsWindow: !disablePopup
            })
        ,
        getAssetsList: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getAssetsList */ .V.getAssetsList,
        getAssetsListNFT: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getAssetsListNFT */ .V.getAssetsListNFT,
        getCollectionsNFT: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getCollectionsNFT */ .V.getCollectionsNFT,
        getAddressNamesList: async (identity)=>{
            const addressNames = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getAddressNames */ .V.getAddressNames(identity);
            if (identity.identifier.network === 'twitter.com') {
                var _userId;
                const result = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_7__/* .Twitter.getUserNftContainer */ .tL.getUserNftContainer((_userId = identity.identifier.userId) !== null && _userId !== void 0 ? _userId : '');
                if ((result === null || result === void 0 ? void 0 : result.type_name.toUpperCase()) === 'ERC721') {
                    const contractAddress = await getTokenOwner(result.address, result.token_id);
                    if (contractAddress) return [
                        ...addressNames,
                        {
                            type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .AddressNameType.TWITTER_BLUE */ .Lv.TWITTER_BLUE,
                            label: contractAddress,
                            resolvedAddress: contractAddress
                        }, 
                    ];
                }
            }
            return addressNames;
        },
        getTransactionList: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getTransactionList */ .V.getTransactionList,
        fetchERC20TokensFromTokenLists: _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_7__/* .TokenList.fetchERC20TokensFromTokenLists */ .no.fetchERC20TokensFromTokenLists,
        providerSocket: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .getProxyWebsocketInstance */ .bu)((info)=>_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.socketMessageUpdated.sendToAll */ .R.events.socketMessageUpdated.sendToAll(info)
        )
    };
}
const Web3Context = createWeb3Context(false, false);
const PopupWeb3Context = createWeb3Context(true, true);
const SwapWeb3Context = createWeb3Context(false, true);
// utils
function createSubscriptionFromSettings(settings) {
    const { trigger , subscribe  } = getEventTarget();
    settings.readyPromise.finally(trigger);
    return {
        getCurrentValue: ()=>{
            if (!settings.ready) throw settings.readyPromise;
            return settings.value;
        },
        subscribe: (f)=>{
            const a = subscribe(f);
            const b = settings.addListener(()=>trigger()
            );
            return ()=>void [
                    a(),
                    b()
                ]
            ;
        }
    };
}
function createStaticSubscription(getter) {
    return {
        getCurrentValue: getter,
        subscribe: ()=>lodash_unified__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z
    };
}
function createSubscriptionFromAsync(f, defaultValue, onChange) {
    // 0 - idle, 1 - updating state, > 1 - waiting state
    let beats = 0;
    let state = defaultValue;
    let isLoading = true;
    const { subscribe , trigger  } = getEventTarget();
    const init = f().then((v)=>{
        state = v;
    }).finally(trigger).finally(()=>isLoading = false
    );
    const flush = async ()=>{
        state = await f();
        beats -= 1;
        if (beats > 0) {
            beats = 1;
            setTimeout(flush, 0);
        } else if (beats < 0) {
            beats = 0;
        }
        trigger();
    };
    return {
        getCurrentValue: ()=>{
            if (isLoading) throw init;
            return state;
        },
        subscribe: (sub)=>{
            const a = subscribe(sub);
            const b = onChange(()=>{
                beats += 1;
                if (beats === 1) flush();
            });
            return ()=>void [
                    a(),
                    b()
                ]
            ;
        }
    };
}
function getEventTarget() {
    const event = new EventTarget();
    const EVENT = 'event';
    let timer;
    function trigger() {
        clearTimeout(timer);
        // delay to update state to ensure that all settings to be synced globally
        timer = setTimeout(()=>event.dispatchEvent(new Event(EVENT))
        , 600);
    }
    function subscribe(f) {
        event.addEventListener(EVENT, f);
        return ()=>event.removeEventListener(EVENT, f)
        ;
    }
    return {
        trigger,
        subscribe
    };
}


/***/ }),

/***/ 13338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EK": () => (/* reexport */ createInjectHooksRenderer/* createInjectHooksRenderer */.E),
  "I4": () => (/* reexport */ createPluginMessage),
  "V8": () => (/* reexport */ createPluginRPC),
  "Sc": () => (/* reexport */ createPluginRPCGenerator)
});

// EXTERNAL MODULE: ../plugin-infra/src/utils/createInjectHooksRenderer.tsx
var createInjectHooksRenderer = __webpack_require__(40998);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
;// CONCATENATED MODULE: ../plugin-infra/src/utils/message.ts

/**
 * Create a plugin message emitter
 * @param pluginID The plugin ID
 *
 * @example
 * export const MyPluginMessage = createPluginMessage(PLUGIN_ID)
 */ function createPluginMessage(pluginID, serializer) {
    const domain = '@plugin/' + pluginID;
    if (cache.has(domain)) return cache.get(domain);
    const messageCenter = new umd.WebExtensionMessage({
        domain
    });
    const events = messageCenter.events;
    if (serializer) messageCenter.serialization = serializer;
    cache.set(domain, events);
    return events;
}
const cache = new Map();

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(73302);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(43576);
;// CONCATENATED MODULE: ../plugin-infra/src/utils/rpc.ts



const log = {
    beCalled: true,
    localError: true,
    remoteError: true,
    requestReplay: true,
    sendLocalStack: true,
    type: 'pretty'
};
function createPluginRPC(key, impl, message, /** Please set this to true if your implementation is a Proxy. */ exoticImplementation) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    return (0,full/* AsyncCall */.LE)((exoticImplementation ? src/* getLocalImplementationExotic */.kO : src/* getLocalImplementation */.Bb)(isBackground, `Plugin(${key})`, impl, message), {
        key,
        channel: message.bind(umd.MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer: src/* serializer */.GM,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}
function createPluginRPCGenerator(key, impl, message) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    return (0,full/* AsyncGeneratorCall */.rc)((0,src/* getLocalImplementation */.Bb)(isBackground, `Plugin(${key})`, impl, message), {
        channel: message.bind(umd.MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer: src/* serializer */.GM,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}

;// CONCATENATED MODULE: ../plugin-infra/src/utils/index.ts





/***/ }),

/***/ 52091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28104);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67235);


const base = {
    ID: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu,
    icon: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ICON */ .E0,
    name: {
        fallback: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_NAME */ .EW
    },
    description: {
        fallback: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_DESCRIPTION */ .PP
    },
    publisher: {
        name: {
            fallback: 'Mask Network'
        },
        link: 'https://mask.io/'
    },
    enableRequirement: {
        architecture: {
            app: true,
            web: true
        },
        networks: {
            type: 'opt-out',
            networks: {}
        },
        target: 'stable'
    },
    i18n: _locales_languages__WEBPACK_IMPORTED_MODULE_1__/* .languages */ .M
};


/***/ }),

/***/ 87002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.FW),
/* harmony export */   "P7": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.P7),
/* harmony export */   "td": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.td),
/* harmony export */   "iu": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.iu),
/* harmony export */   "z4": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.z4)
/* harmony export */ });
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53715);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73215);
// Following is the API that can be called from the native side.

// Following is the API that implemented by the native side.




/***/ }),

/***/ 74393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PopupRoutes)
/* harmony export */ });
var PopupRoutes;
(function(PopupRoutes) {
    PopupRoutes["Root"] = '/';
    PopupRoutes["Wallet"] = '/wallet';
    PopupRoutes["ImportWallet"] = '/wallet/import';
    PopupRoutes["AddDeriveWallet"] = '/wallet/addDerive';
    PopupRoutes["WalletSettings"] = '/wallet/settings';
    PopupRoutes["WalletRename"] = '/wallet/rename';
    PopupRoutes["DeleteWallet"] = '/wallet/delete';
    PopupRoutes["CreateWallet"] = '/wallet/create';
    PopupRoutes["SwitchWallet"] = '/wallet/switch';
    PopupRoutes["SelectWallet"] = '/wallet/select';
    PopupRoutes["WalletRecovered"] = '/wallet/recovered';
    PopupRoutes["LegacyWalletRecovered"] = '/wallet/legacy-recovered';
    PopupRoutes["BackupWallet"] = '/wallet/backup';
    PopupRoutes["AddToken"] = '/wallet/addToken';
    PopupRoutes["WalletSignRequest"] = '/wallet/sign';
    PopupRoutes["GasSetting"] = '/wallet/gas';
    PopupRoutes["TokenDetail"] = '/wallet/tokenDetail';
    PopupRoutes["ContractInteraction"] = '/wallet/contract-interaction';
    PopupRoutes["Unlock"] = '/wallet/unlock';
    PopupRoutes["Transfer"] = '/wallet/transfer';
    PopupRoutes["SetPaymentPassword"] = '/wallet/password';
    PopupRoutes["ReplaceTransaction"] = '/wallet/replace';
    PopupRoutes["Personas"] = '/personas';
    PopupRoutes["Logout"] = '/personas/logout';
    PopupRoutes["PersonaRename"] = '/personas/rename';
    PopupRoutes["PermissionAwareRedirect"] = '/redirect';
    PopupRoutes["RequestPermission"] = '/request-permission';
    PopupRoutes["ThirdPartyRequestPermission"] = '/3rd-request-permission';
    PopupRoutes["SignRequest"] = '/sign-request';
    PopupRoutes["PersonaSignRequest"] = '/persona/sign-request';
    PopupRoutes["Swap"] = '/swap';
})(PopupRoutes || (PopupRoutes = {}));


/***/ }),

/***/ 10291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u0": () => (/* reexport */ AddressViewer/* AddressViewer */.u),
  "IR": () => (/* reexport */ AssetPlayer/* AssetPlayer */.I),
  "fq": () => (/* reexport */ ChainIcon/* ChainIcon */.f),
  "T3": () => (/* reexport */ ERC20TokenList/* ERC20TokenList */.T),
  "SV": () => (/* reexport */ ErrorBoundary/* ErrorBoundary */.SV),
  "N3": () => (/* reexport */ ErrorBoundary/* ErrorBoundaryBuildInfoContext */.N3),
  "qy": () => (/* reexport */ I18NextProviderHMR/* I18NextProviderHMR */.q),
  "XB": () => (/* reexport */ ImageIcon/* ImageIcon */.X),
  "p6": () => (/* reexport */ LoadingAnimation/* LoadingAnimation */.p),
  "jq": () => (/* reexport */ MiniNetworkSelector/* MiniNetworkSelector */.j),
  "yC": () => (/* reexport */ NFTCardStyledAssetPlayer/* NFTCardStyledAssetPlayer */.y),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "xR": () => (/* reexport */ SelectTokenChip/* SelectTokenChip */.x),
  "xl": () => (/* reexport */ TokenAmountPanel/* TokenAmountPanel */.x),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "o": () => (/* reexport */ WalletIcon/* WalletIcon */.o)
});

// UNUSED EXPORTS: CrashUI, TokenIconUI, useImageFailOver, withErrorBoundary

// EXTERNAL MODULE: ../shared/src/UI/hooks/index.ts + 1 modules
var hooks = __webpack_require__(84127);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 2 modules
var TokenIcon = __webpack_require__(48822);
// EXTERNAL MODULE: ../shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(30010);
// EXTERNAL MODULE: ../shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(54781);
// EXTERNAL MODULE: ../shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(3194);
// EXTERNAL MODULE: ../shared/src/UI/components/ERC20TokenList/index.tsx + 5 modules
var ERC20TokenList = __webpack_require__(29846);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(63973);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/index.ts + 1 modules
var ErrorBoundary = __webpack_require__(5036);
// EXTERNAL MODULE: ../shared/src/UI/components/SelectTokenChip/index.tsx
var SelectTokenChip = __webpack_require__(72197);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenAmountPanel/index.tsx
var TokenAmountPanel = __webpack_require__(50777);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var LoadingAnimation = __webpack_require__(15148);
// EXTERNAL MODULE: ../shared/src/UI/components/MiniNetworkSelector/index.tsx
var MiniNetworkSelector = __webpack_require__(63282);
// EXTERNAL MODULE: ../shared/src/UI/components/AddressViewer/index.tsx
var AddressViewer = __webpack_require__(97529);
// EXTERNAL MODULE: ../shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(52347);
// EXTERNAL MODULE: ../shared/src/UI/components/AssetPlayer/index.tsx + 2 modules
var AssetPlayer = __webpack_require__(36301);
// EXTERNAL MODULE: ../shared/src/UI/components/NFTCardStyledAssetPlayer/index.tsx
var NFTCardStyledAssetPlayer = __webpack_require__(40672);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts
















;// CONCATENATED MODULE: ../shared/src/UI/index.ts




/***/ }),

/***/ 33086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I4": () => (/* binding */ SOCIAL_MEDIA_ICON_MAPPING),
/* harmony export */   "n2": () => (/* binding */ mediaViewerUrl),
/* harmony export */   "hA": () => (/* binding */ MAX_WALLET_LIMIT),
/* harmony export */   "LM": () => (/* binding */ MAX_PERSONA_LIMIT)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9815);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83730);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85453);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65325);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32547);


const SOCIAL_MEDIA_ICON_MAPPING = {
    'twitter.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .TwitterColoredIcon */ .g, {}),
    'facebook.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .FacebookColoredIcon */ .W, {}),
    'minds.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__/* .MindsIcon */ .G, {}),
    'instagram.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .InstagramColoredIcon */ .$, {}),
    'opensea.io': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .OpenSeaColoredIcon */ .w, {})
};
const mediaViewerUrl = 'https://media-viewer.r2d2.to/index.html';
const MAX_WALLET_LIMIT = 100;
const MAX_PERSONA_LIMIT = 10;


/***/ }),

/***/ 24073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "pv": () => (/* reexport safe */ _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "_X": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__._X),
/* harmony export */   "F$": () => (/* reexport safe */ _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__.F),
/* harmony export */   "iD": () => (/* reexport safe */ _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__.i),
/* harmony export */   "S8": () => (/* reexport safe */ _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "r8": () => (/* reexport safe */ _createGlobalState__WEBPACK_IMPORTED_MODULE_6__.r)
/* harmony export */ });
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84081);
/* harmony import */ var _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9790);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63798);
/* harmony import */ var _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12293);
/* harmony import */ var _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95182);
/* harmony import */ var _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36013);
/* harmony import */ var _createGlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17222);









/***/ }),

/***/ 63798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* binding */ useMenu),
/* harmony export */   "_X": () => (/* binding */ useMenuConfig)
/* harmony export */ });
/* unused harmony export useMenuContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27403);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54692);




/** Provide ShadowRootMenu for useMenu in content script. */ const useMenuContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {});
}
function useMenuConfig(elements, config) {
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [status, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const open = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((anchorElOrEvent)=>{
        let element;
        if (anchorElOrEvent instanceof HTMLElement) {
            element = anchorElOrEvent;
        } else {
            element = anchorElOrEvent.currentTarget;
        }
        setAnchorEl(element);
        setOpen(true);
        // HACK: it seems like anchor doesn't work correctly
        // but a force repaint can solve the problem.
        window.requestAnimationFrame(update);
    }, []);
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const close = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setOpen(false)
    , []);
    const Menu1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(useMenuContext);
    return [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu1, {
            open: status,
            onClose: close,
            onClick: close,
            anchorEl: anchorEl,
            ...config,
            children: elements === null || elements === void 0 ? void 0 : elements.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(element, {
                    ...element.props,
                    key
                }) : element
            )
        }, "menu"),
        open,
        close, 
    ];
}


/***/ }),

/***/ 78037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r8": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.r8),
/* harmony export */   "H9": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.H9),
/* harmony export */   "_X": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__._X),
/* harmony export */   "pv": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.pv),
/* harmony export */   "F$": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.F$),
/* harmony export */   "S8": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.S8),
/* harmony export */   "iD": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.iD),
/* harmony export */   "E": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "Kv": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_1__.Kv),
/* harmony export */   "BV": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_1__.BV),
/* harmony export */   "bO": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_1__.bO),
/* harmony export */   "u0": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.u0),
/* harmony export */   "IR": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.IR),
/* harmony export */   "fq": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.fq),
/* harmony export */   "T3": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.T3),
/* harmony export */   "SV": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.SV),
/* harmony export */   "N3": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.N3),
/* harmony export */   "qy": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.qy),
/* harmony export */   "XB": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.XB),
/* harmony export */   "p6": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.p6),
/* harmony export */   "jq": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.jq),
/* harmony export */   "yC": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.yC),
/* harmony export */   "s_": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.s_),
/* harmony export */   "xR": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.xR),
/* harmony export */   "xl": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.xl),
/* harmony export */   "T1": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.T1),
/* harmony export */   "o": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.o),
/* harmony export */   "B_": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_3__.B),
/* harmony export */   "zr": () => (/* reexport safe */ _locales_languages__WEBPACK_IMPORTED_MODULE_4__.z),
/* harmony export */   "R": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.R),
/* harmony export */   "LM": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.LM),
/* harmony export */   "hA": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.hA),
/* harmony export */   "I4": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.I4),
/* harmony export */   "n2": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.n2)
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24073);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9580);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10291);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73360);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97174);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33086);









/***/ }),

/***/ 18146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d_": () => (/* binding */ setupPortalShadowRoot),
/* harmony export */   "XR": () => (/* binding */ NoEffectUsePortalShadowRootContext),
/* harmony export */   "ad": () => (/* binding */ usePortalShadowRoot),
/* harmony export */   "lr": () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   "vg": () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63151);



/**
 * ! Do not export !
 *
 * You SHOULD NOT use this in React directly
 */ let mountingPoint;
let mountingShadowRoot;
function setupPortalShadowRoot(init, preventEventPropagationList) {
    if (mountingPoint) return mountingShadowRoot;
    mountingShadowRoot = document.body.appendChild(document.createElement('div')).attachShadow(init);
    for (const each of preventEventPropagationList){
        mountingShadowRoot.addEventListener(each, (e)=>e.stopPropagation()
        );
    }
    mountingPoint = mountingShadowRoot.appendChild(document.createElement('div'));
    return mountingShadowRoot;
}
/** usePortalShadowRoot under this context does not do anything. (And it will return an empty container). */ const NoEffectUsePortalShadowRootContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
/**
 * Render to a React Portal in to the page needs this hook. It will provide a wrapped container that provides ShadowRoot isolation and CSS support for it.
 *
 * The return value can only be used once!
 * @param renderer A function that want to use PortalShadowRoot
 * @example
 * const picker = usePortalShadowRoot((container) => (
 *      <DatePicker
 *          DialogProps={{ container }}
 *          PopperProps={{ container }}
 *          value={new Date()}
 *          onChange={() => {}}
 *          renderInput={(props) => <TextField {...props} />}
 *      />
 * ))
 */ function usePortalShadowRoot(renderer) {
    // we ignore the changes on this property during multiple render
    // so we can violates the React hooks rule and still be safe.
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NoEffectUsePortalShadowRootContext)).current;
    if (disabled) return renderer(undefined);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [findMountingShadowRef, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const doms = useSideEffectRef(()=>{
        const root = document.createElement('div');
        const container = root.appendChild(document.createElement('div'));
        const style = root.appendChild(document.createElement('style'));
        return {
            root,
            container,
            style
        };
    });
    const { container: container1  } = doms;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IsolatedRender, {
        ...doms,
        findMountingShadowRef: findMountingShadowRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                style: {
                    display: 'none'
                },
                ref: (ref)=>findMountingShadowRef !== ref && setRef(ref)
            }),
            renderer(container1)
        ]
    }));
}
const IsolatedRender = ({ container , root , style , children , findMountingShadowRef  })=>{
    const update = useUpdate();
    const css = (0,_ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentShadowRootStyles */ .I)(findMountingShadowRef);
    const containerInUse = container.children.length !== 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        container.appendChild = bind(container.appendChild, container, update);
        container.removeChild = bind(container.removeChild, container, update);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!containerInUse) return root.remove();
        const shadow = PortalShadowRoot();
        if (root.parentElement === shadow) return;
        shadow.appendChild(root);
    }, [
        containerInUse,
        root
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (findMountingShadowRef && style.textContent !== css) style.textContent = css;
    }, [
        style,
        css,
        findMountingShadowRef
    ]);
    return children;
};
function createShadowRootForwardedComponent(Component) {
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    }));
}
function createShadowRootForwardedPopperComponent(Component) {
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            }));
        });
    }));
}
/**
 * ! Do not export !
 */ function PortalShadowRoot() {
    if (location.protocol.includes('extension')) return document.body;
    if (globalThis.location.hostname === 'localhost') return document.body;
    if (!mountingPoint) throw new TypeError('Please call setupPortalShadowRoot first');
    return mountingPoint;
}
function bind(f, thisArg, hook) {
    return (...args)=>{
        try {
            return f.apply(thisArg, args);
        } finally{
            hook();
        }
    };
}
function useUpdate() {
    const [, _update] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return ()=>_update((i)=>i + 1
        )
    ;
}
function useSideEffectRef(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 47989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bu": () => (/* binding */ getProxyWebsocketInstance)
/* harmony export */ });
/* unused harmony exports ProviderProxy, getWebSocketInstance, sendMessageToProxy */
/* harmony import */ var date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23131);
/* harmony import */ var date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10671);
/* harmony import */ var reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10568);



const POOL_CACHE_EXPIRE_TIME = 30;
const POOL_CACHE_MAX_CAPACITY = 10;
class ProviderProxy {
    /**
     * Send request to proxy websocket
     * @param message
     */ send(message) {
        this.clearPool();
        const cache = this._pool.get(message.id);
        if (cache && !cache.done) return;
        if (cache && !this.isExpired(cache)) {
            const notify = message.notify || this._globalNotify;
            notify({
                id: message.id,
                done: true,
                from: 'cache'
            });
            return;
        }
        this._socket.send(JSON.stringify({
            id: message.id,
            method: message.method,
            params: message.params
        }));
        this._pool.set(message.id, {
            data: [],
            createdAt: new Date(),
            notify: message.notify || this._globalNotify
        });
    }
    /**
     * Send async request to proxy websocket, Avoid use this method
     * @param message
     */ async sendAsync(message) {
        this.clearPool();
        const cache = this._pool.get(message.id);
        var ref;
        if (cache && !this.isExpired(cache)) return (ref = this.getResult(message.id)) !== null && ref !== void 0 ? ref : [];
        const innerMessagePromise = ()=>new Promise((resolve, reject)=>{
                message.notify = (info)=>{
                    if (info.done) resolve(info);
                    if (info.error) reject(info);
                };
                this.send(message);
            })
        ;
        await innerMessagePromise();
        var ref1;
        return (ref1 = this.getResult(message.id)) !== null && ref1 !== void 0 ? ref1 : [];
    }
    get socket() {
        return this._socket;
    }
    getResult(id) {
        const item = this._pool.get(id);
        if (!item) return [];
        const newItem = {
            ...item,
            pickedAt: new Date()
        };
        this._pool.set(id, newItem);
        return item.data;
    }
    /**
     * Cache is expired
     * @param item cache item
     * @returns boolean
     */ isExpired(item) {
        const now = new Date();
        return !!item.updatedAt && (0,date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(now, item.updatedAt) > POOL_CACHE_EXPIRE_TIME;
    }
    clearPool() {
        let beCleaned = [];
        const entities = Array.from(this._pool.entries());
        // clear expired
        beCleaned = entities.filter((x)=>this.isExpired(x[1])
        );
        // clear overed size
        if (entities.length > POOL_CACHE_MAX_CAPACITY) {
            const picks = entities.sort((a, b)=>(0,date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(a[1].pickedAt || a[1].createdAt, b[1].pickedAt || b[1].createdAt)
            ).slice(0, entities.length - POOL_CACHE_MAX_CAPACITY);
            beCleaned = [
                ...beCleaned,
                ...picks
            ];
        }
        beCleaned.forEach((x)=>this._pool.delete(x[0])
        );
    }
    constructor(point, notifyFn){
        this.waitingOpen = ()=>{
            return new Promise((resolve, reject)=>{
                this._socket.addEventListener('open', ()=>resolve()
                );
                this._socket.addEventListener('error', ()=>reject()
                );
            });
        };
        this.onMessage = (event)=>{
            const { id , results , error  } = JSON.parse(event.data);
            const itemInPoll = this._pool.get(id);
            if (!itemInPoll) return;
            if (error || !id) {
                itemInPoll.notify({
                    id,
                    done: true,
                    error: error,
                    from: 'remote'
                });
            }
            const updatedAt = new Date();
            if (!results || results.length === 0) {
                this._pool.set(id, {
                    ...itemInPoll,
                    done: true
                });
                itemInPoll.notify({
                    id,
                    done: true,
                    from: 'remote'
                });
                return;
            }
            var ref;
            const dataInPool = (ref = itemInPoll === null || itemInPoll === void 0 ? void 0 : itemInPoll.data) !== null && ref !== void 0 ? ref : [];
            const patchData = [
                ...dataInPool,
                ...results !== null && results !== void 0 ? results : []
            ];
            this._pool.set(id, {
                ...itemInPoll,
                updatedAt,
                data: patchData
            });
            itemInPoll.notify({
                id,
                done: false,
                from: 'remote'
            });
        };
        this.registerMessage = ()=>{
            this._socket.removeEventListener('message', this.onMessage);
            this._socket.addEventListener('message', this.onMessage);
        };
        this._socket = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(point, undefined, {
            minUptime: 20000
        });
        this._pool = new Map();
        this._globalNotify = notifyFn;
    }
}
const SOCKET_POINT = // workaround, should create a stage env for QA testing
 true ? 'wss://hyper-proxy.r2d2.to' : 0;
var SocketState;
(function(SocketState) {
    SocketState[SocketState["CONNECTING"] = 0] = "CONNECTING";
    SocketState[SocketState["OPEN"] = 1] = "OPEN";
    SocketState[SocketState["CLOSING"] = 2] = "CLOSING";
    SocketState[SocketState["CLOSED"] = 3] = "CLOSED";
})(SocketState || (SocketState = {}));
/**
 * Provider a ProxySocket instance
 * @returns a function to operate socket instance
 */ function getProxyWebsocketInstanceWrapper() {
    let cachedInstance;
    const createNewInstance = async (notify)=>{
        cachedInstance = new ProviderProxy(SOCKET_POINT, notify);
        await cachedInstance.waitingOpen();
        cachedInstance.registerMessage();
    };
    return async (notify)=>{
        if (cachedInstance) return cachedInstance;
        await createNewInstance(notify);
        return cachedInstance;
    };
}
const getProxyWebsocketInstance = getProxyWebsocketInstanceWrapper();
/**
 * Provide a websocket instance for once, avoid use it.
 * @param endPoint websocket endpoint
 * @returns websocket instance
 */ const getWebSocketInstance = async (endPoint)=>{
    const socket = new WebSocket(endPoint !== null && endPoint !== void 0 ? endPoint : SOCKET_POINT);
    const waitingOpen = ()=>{
        return new Promise((resolve, reject)=>{
            socket.addEventListener('open', ()=>resolve()
            );
            socket.addEventListener('error', ()=>reject()
            );
        });
    };
    await waitingOpen();
    return socket;
};
/**
 * Provide a websocket instance for once, avoid use it.
 * @param message endPoint
 * @param [endPoint = SOCKET_POINT] endPoint
 * @returns promise of request
 */ const sendMessageToProxy = async (message, endPoint)=>{
    let data = [];
    const socket = await getWebSocketInstance(SOCKET_POINT !== null && SOCKET_POINT !== void 0 ? SOCKET_POINT : endPoint);
    const sendPromise = ()=>new Promise((resolve, reject)=>{
            socket.addEventListener('message', (event)=>{
                const { results =[] , error  } = JSON.parse(event.data);
                if (error) {
                    socket.close();
                    reject(error);
                }
                if (results.length === 0) {
                    socket.close();
                    resolve(data);
                }
                data = [
                    ...data,
                    ...results
                ];
            });
            socket.send(JSON.stringify(message));
        })
    ;
    return sendPromise();
};


/***/ }),

/***/ 80945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ji": () => (/* binding */ isChainIdValid),
/* harmony export */   "yX": () => (/* binding */ isChainIdMainnet),
/* harmony export */   "U1": () => (/* binding */ isEIP1559Supported),
/* harmony export */   "sR": () => (/* binding */ isInjectedProvider),
/* harmony export */   "qj": () => (/* binding */ isFortmaticSupported),
/* harmony export */   "$G": () => (/* binding */ getChainDetailed),
/* harmony export */   "EX": () => (/* binding */ getChainDetailedCAIP),
/* harmony export */   "NX": () => (/* binding */ getChainRPC),
/* harmony export */   "qz": () => (/* binding */ getChainName),
/* harmony export */   "F3": () => (/* binding */ getChainShortName),
/* harmony export */   "np": () => (/* binding */ getChainIdFromName),
/* harmony export */   "EP": () => (/* binding */ getChainIdFromNetworkType),
/* harmony export */   "_T": () => (/* binding */ getNetworkTypeFromChainId),
/* harmony export */   "AQ": () => (/* binding */ getCoinGeckoPlatformId),
/* harmony export */   "vM": () => (/* binding */ getCoinGeckoCoinId),
/* harmony export */   "pp": () => (/* binding */ getNetworkName)
/* harmony export */ });
/* unused harmony exports getChainFullName, getChainFromChainId */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75272);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83317);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18392);
/* harmony import */ var _assets_chains_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2545);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79518);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);






function isChainIdValid(chainId, allowTestnet = false) {
    const chainDetailed = getChainDetailed(chainId);
    return !!getNetworkTypeFromChainId(chainId) && ((chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) === 'mainnet' || allowTestnet);
}
function isChainIdMainnet(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) === 'mainnet';
}
function isEIP1559Supported(chainId) {
    var ref;
    var ref1;
    const features = (ref1 = (ref = getChainDetailed(chainId)) === null || ref === void 0 ? void 0 : ref.features) !== null && ref1 !== void 0 ? ref1 : [];
    return features.includes('EIP1559');
}
function isInjectedProvider(providerType) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.Coin98 */ .lP.Coin98,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.WalletLink */ .lP.WalletLink,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.MathWallet */ .lP.MathWallet
    ].includes(providerType);
}
function isFortmaticSupported(chainId) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC
    ].includes(chainId);
}
function getChainDetailed(chainId = _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet) {
    return _assets_chains_json__WEBPACK_IMPORTED_MODULE_2__.find((x)=>x.chainId === chainId
    );
}
// Learn more: https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md
function getChainDetailedCAIP(chainId = _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet) {
    const chainDetailed = getChainDetailed(chainId);
    const { RPC =[]  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getRPCConstants */ .t0)(chainId);
    if (!chainDetailed) return;
    return {
        chainId: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(chainDetailed.chainId),
        chainName: chainDetailed.name,
        nativeCurrency: chainDetailed.nativeCurrency,
        rpcUrls: RPC,
        blockExplorerUrls: [
            chainDetailed.explorers && chainDetailed.explorers.length > 0 && chainDetailed.explorers[0].url ? chainDetailed.explorers[0].url : chainDetailed.infoURL, 
        ]
    };
}
function getChainRPC(chainId, seed) {
    const { RPC , RPC_WEIGHTS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getRPCConstants */ .t0)(chainId);
    if (!RPC || !RPC_WEIGHTS) throw new Error(`Unknown chain id: ${chainId}.`);
    return RPC[RPC_WEIGHTS[seed]];
}
function getChainName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.name) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainShortName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.shortName) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainFullName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.fullName) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainIdFromName(name) {
    if (!name) return;
    var _fullName;
    const chainDetailed = _assets_chains_json__WEBPACK_IMPORTED_MODULE_2__.find((x)=>[
            x.chain,
            x.network,
            x.name,
            x.shortName,
            (_fullName = x.fullName) !== null && _fullName !== void 0 ? _fullName : ''
        ].filter(Boolean).map((y)=>y.toLowerCase()
        ).includes(name.toLowerCase())
    );
    return chainDetailed && getNetworkTypeFromChainId(chainDetailed.chainId) ? chainDetailed.chainId : undefined;
}
const getChainIdFromNetworkType = (0,_enum__WEBPACK_IMPORTED_MODULE_4__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .td.Ethereum]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .td.Arbitrum]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Arbitrum */ .a_.Arbitrum,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Avalanche */ .td.Avalanche]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .td.Binance]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Celo */ .td.Celo]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Celo */ .a_.Celo,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Fantom */ .td.Fantom]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Fantom */ .a_.Fantom,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .td.Polygon]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.xDai */ .td.xDai]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.xDai */ .a_.xDai,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Aurora */ .td.Aurora]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora
}, _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet);
// The value should be same as chain field in packages/web3-shared/evm/assets/chains.json
const chainNameMap = {
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .td.Ethereum]: 'ETH',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .td.Binance]: 'BSC',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .td.Polygon]: 'Polygon',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'Arbitrum',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.xDai */ .td.xDai]: 'xDai',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Celo */ .td.Celo]: 'CELO',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Fantom */ .td.Fantom]: 'FTM',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Aurora */ .td.Aurora]: 'Aurora',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Avalanche */ .td.Avalanche]: 'AVAX',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Boba */ .td.Boba]: 'Boba',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Fuse */ .td.Fuse]: 'Fuse',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Metis */ .td.Metis]: 'Metis',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Optimistic */ .td.Optimistic]: 'Optimistic'
};
function getNetworkTypeFromChainId(chainId, value1) {
    const chainDetailed = getChainDetailed(chainId);
    const entry = Object.entries(chainNameMap).find(([_, value])=>{
        if (value === (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.chain)) return true;
        return false;
    });
    if (value1) return entry === null || entry === void 0 ? void 0 : entry[1];
    return entry === null || entry === void 0 ? void 0 : entry[0];
}
function getChainFromChainId(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.chain;
}
function getCoinGeckoPlatformId(chainId) {
    const { PLATFORM_ID =''  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getCoinGeckoConstants */ .V6)(chainId);
    return PLATFORM_ID;
}
function getCoinGeckoCoinId(chainId) {
    const { COIN_ID =''  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getCoinGeckoConstants */ .V6)(chainId);
    return COIN_ID;
}
function getNetworkName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    if (!chainDetailed) return 'Unknown Network';
    if (chainDetailed.networkId === _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic) return chainDetailed.fullName;
    if (chainDetailed.network === 'mainnet') return chainDetailed.chain;
    return (0,lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(chainDetailed.network);
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

/***/ 88674:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"light":{"grey":{"50":"#eff3f4","200":"#cfd9de","300":"#b9cad3","700":"#536471"},"text":{"primary":"#0f1419","secondary":"#536471","strong":"#111418","buttonText":"#FFFFFF"},"background":{"default":"#F6F8F8","input":"#EDF1F2","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)"},"error":{"main":"#F4212E"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"light_high_contrast":{"grey":{"50":"#cfd9de","200":"#697987","300":"#697987","700":"#3b4c5c"},"text":{"primary":"#0f1419","secondary":"#536471","strong":"#111418","buttonText":"#FFFFFF"},"background":{"default":"#F6F8F8","input":"#EDF1F2","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)"},"error":{"main":"#FF5555"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"dark":{"grey":{"50":"#253341","200":"#3d5466","300":"#6b7d8c","700":"#8899a6"},"text":{"primary":"#EFF3F4","secondary":"#8899A6","strong":"#FFFFFF","buttonText":"#0F1419"},"background":{"default":"#18232E","input":"#212D39","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}},"dark_high_contrast":{"grey":{"50":"#10171e","200":"#697987","300":"#92a4b3","700":"#b8cbd9"},"text":{"primary":"#EFF3F4","secondary":"#8899A6","strong":"#FFFFFF","buttonText":"#0F1419"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","background":{"default":"#18232E","input":"#212D39","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)"},"action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}},"darker":{"grey":{"50":"#202327","200":"#2f3336","300":"#3d4145","700":"#6e767d"},"text":{"primary":"#D9D9D9","secondary":"#6E767D","strong":"#EFF3F4","buttonText":"#0F1419"},"background":{"default":"#15171A","input":"#1D2023","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(255, 255, 255, 0.2)"},"error":{"main":"#FF5555"},"divider":"#2F3336","secondaryDivider":"#2F3336","action":{"buttonHover":"#D7dBDC","bgHover":"#1A1D20","mask":"rgba(91, 112, 131, 0.4)"}},"darker_high_contrast":{"grey":{"50":"#121517","200":"#3d4145","300":"#6e767d","700":"#929ca6"},"text":{"primary":"#D9D9D9","secondary":"#6E767D","strong":"#EFF3F4","buttonText":"#0F1419"},"error":{"main":"#FF5555"},"divider":"#2F3336","secondaryDivider":"#2F3336","background":{"default":"#15171A","input":"#1D2023","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(255, 255, 255, 0.2)"},"action":{"buttonHover":"#D7dBDC","bgHover":"#1A1D20","mask":"rgba(91, 112, 131, 0.4)"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"97":"npm.lodash.clonedeep","125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","313":"npm.ef-core","405":"npm.react-feather","551":"npm.graphql","686":"npm-ns.metaplex-foundation.mpl-token-metadata","708":"npm.socket.io-client","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1183":"npm-ns.solana.spl-token-registry","1240":"npm-ns.ethersphere.bee-js","1246":"npm.eth-rpc-errors","1305":"npm-ns.metamask.inpage-provider","1432":"npm-ns.metaplex.js","1440":"npm.validator","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","2116":"npm.web-streams-polyfill","2162":"npm.z-schema","2245":"npm.react-highlight-words","2253":"npm.near-api-js","2261":"npm.wyvern-js","2297":"npm.3id-did-provider","2299":"npm.tweetnacl","2514":"npm.blob-polyfill","2598":"npm.react-hook-form","2735":"npm-ns.solana.web3.js","2908":"npm-ns.dimensiondev.stego-js","2917":"npm.did-jwt","2939":"npm-ns.uniswap.v3-sdk","2943":"npm.bip39","3375":"npm-ns.ethersproject.abstract-signer","3708":"npm.multiaddr","3742":"npm.multiformats","3850":"npm.arweave","4038":"npm.cborg","4049":"npm.qrcode-generator","4072":"npm.d3-scale","4270":"npm.rpc-utils","4428":"npm-ns.uniswap.v2-sdk","4477":"npm.gun","4520":"npm-ns.metaplex-foundation.mpl-core","4557":"npm.superstruct","5148":"npm-ns.ceramicstudio.idx","5229":"npm.cross-fetch","5255":"npm-ns.ceramicnetwork.common","5258":"MaskWallet","5334":"npm.store","5393":"npm-ns.ceramicnetwork.blockchain-utils-linking","5553":"npm.fortmatic","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","5687":"npm-ns.solana.buffer-layout","5756":"npm.debug","5815":"npm-ns.blocto.protobuf","5891":"npm-ns.walletconnect.core","6045":"npm.ethereumjs-abi","6124":"npm.fast-json-patch","6191":"npm.mustache","6230":"npm.zod","6265":"npm-ns.metamask.eth-sig-util","6316":"npm-ns.msgpack.msgpack","6813":"npm-ns.portto.sdk","6912":"npm.react-draggable","6982":"npm-ns.improbable-eng.grpc-web","7015":"npm.d3-transition","7070":"npm.regenerator-runtime","7141":"npm.json-rpc-engine","7318":"npm-ns.cyberlab.cyberconnect","7372":"npm.ipfs-http-client","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","7913":"npm.lodash","8000":"npm.lodash.isequal","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8393":"npm.lodash.get","8492":"npm.aes-js","8828":"npm-ns.ethersproject.wordlists","8857":"npm.borc","8936":"npm-ns.pedrouid.iso-crypto","9223":"npm-ns.metaplex-foundation.mpl-auction","9239":"npm-ns.blocto.fcl","9259":"npm.html-to-image","9271":"npm.rxjs","9278":"npm.axios","9447":"npm.engine.io-parser","9566":"npm.rpc-websockets","9706":"npm-ns.ceramicnetwork.streamid","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { if (typeof browser.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { if (typeof chrome.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var __send__ = (msg) => {
/******/ 			if (isBrowser) return runtime.runtime.sendMessage(msg)
/******/ 			return new Promise(r => runtime.runtime.sendMessage(msg, r))
/******/ 		}
/******/ 		var classicLoader = (url, done, chunkId) => {
/******/ 			__send__({ type: 'WTW_INJECT', file: url }).then(done, (e) => done(Object.assign(e, { type: 'missing' })))
/******/ 		}
/******/ 		var scriptLoader = (url, done, chunkId) => {
/******/ 			var script = document.createElement('script')
/******/ 			script.src = url
/******/ 			script.onload = done
/******/ 			script.onerror = done
/******/ 			document.body.appendChild(script)
/******/ 		}
/******/ 		var workerLoader = (url, done, chunkId) => {
/******/ 			try { importScripts(url); done() } catch (e) { done(e) }
/******/ 		}
/******/ 		var isWorker = typeof importScripts === 'function'
/******/ 		if (location.protocol.includes('-extension:')) __webpack_require__.l = isWorker ? workerLoader : scriptLoader
/******/ 		else if (!isWorker) __webpack_require__.l = classicLoader
/******/ 		else { throw new TypeError('Unable to determinate the chunk loader: content script + Worker') }
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 964;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("webpack", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { if (typeof browser.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { if (typeof chrome.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var path = "/"
/******/ 		__webpack_require__.p = typeof importScripts === 'function' ? path : runtime.runtime.getURL(path);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			964: 0,
/******/ 			3095: 0,
/******/ 			8963: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [5638,2698,7871,9759,3294,2486,4227,4544,5737,187,3883,8136,3147,8019,8712,9227,3693,3758,4570,7822,7856,400,3453,5132,12,2619,5838,3142,5105,3846,3832,8129,5951,2752,7849,7512,5178,6565,9744,444,6160,71,2222,9197,4960,102,253,572,8547,8145,5313,3617,4162,2088,3981,1696,3638,1555,516,2974,159,9141,6067,234,9737,79,4590,2891,5784,4586,9855,4029,433,9697,3619,7928,1744,8349,1830], () => (__webpack_require__(65827)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,7871,9759,3294,2486,4227,4544,5737,187,3883,8136,3147,8019,8712,9227,3693,3758,4570,7822,7856,400,3453,5132,12,2619,5838,3142,5105,3846,3832,8129,5951,2752,7849,7512,5178,6565,9744,444,6160,71,2222,9197,4960,102,253,572,8547,8145,5313,3617,4162,2088,3981,1696,3638,1555,516,2974,159,9141,6067,234,9737,79,4590,2891,5784,4586,9855,4029,433,9697,3619,7928,1744,8349,1830], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;