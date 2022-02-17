(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7654],{

/***/ 14136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ attachment_namespaceObject)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js
var attachment_namespaceObject = {};
__webpack_require__.r(attachment_namespaceObject);
__webpack_require__.d(attachment_namespaceObject, {
  "checksum": () => (checksum),
  "decode": () => (decode),
  "encode": () => (encode),
  "getPayload": () => (getPayload),
  "loadKey": () => (loadKey)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@1.12.2/node_modules/@msgpack/msgpack/dist.es5/msgpack.min.js
var msgpack_min = __webpack_require__(21795);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/utils.js
async function checksum(block) {
    const hashed = await crypto.subtle.digest({ name: "SHA-256" }, block);
    return new Uint8Array(hashed);
}
async function loadKey(passphrase, salt) {
    const key = await crypto.subtle.importKey("raw", passphrase, { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
    return crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt,
        iterations: 1000,
        hash: "SHA-256",
    }, key, { name: "AES-GCM", length: 128 }, true, ["encrypt", "decrypt"]);
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/types.js
const MAGIC_HEADER = new TextEncoder().encode("MASKBOOK-ATTACHMENT");
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/encoder.js



async function encode(passphrase, input) {
    let algorithm, salt, block, keyHash;
    if (passphrase === undefined) {
        block = input.block;
    }
    else {
        keyHash = await checksum(passphrase);
        salt = crypto.getRandomValues(new Uint8Array(8));
        const key = await loadKey(passphrase, salt);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        algorithm = { name: "AES-GCM", iv, tagLength: 128 };
        const encrypted = await crypto.subtle.encrypt(algorithm, key, input.block);
        block = new Uint8Array(encrypted);
    }
    const payload = {
        version: 0,
        mime: input.mime,
        metadata: input.metadata,
        algorithm,
        salt,
        keyHash,
        block,
        blockHash: await checksum(block),
    };
    return Uint8Array.from([...MAGIC_HEADER, ...(0,msgpack_min.encode)(payload)]);
}
//# sourceMappingURL=encoder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/utils.js
function bufferEqual(buf1, buf2) {
    if (buf1 === buf2) {
        return true;
    }
    else if (buf1.byteLength !== buf2.byteLength) {
        return false;
    }
    let i = buf1.byteLength;
    while (i--) {
        if (buf1[i] !== buf2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/payload.js




async function getPayload(passphrase, encoded) {
    if (!bufferEqual(MAGIC_HEADER, encoded.slice(0, MAGIC_HEADER.length))) {
        throw new Error("unexpected magic header.");
    }
    const buffer = encoded.slice(MAGIC_HEADER.length);
    const payload = (0,msgpack_min.decode)(buffer);
    if (payload.version !== 0) {
        throw new Error("unexpected file version.");
    }
    else if (payload.mime.length === 0) {
        throw new Error("unexpected `.mime`.");
    }
    else if (!bufferEqual(payload.blockHash, await checksum(payload.block))) {
        throw new Error("unexpected `blockHash`.");
    }
    else if (passphrase && payload.keyHash) {
        if (!bufferEqual(payload.keyHash, await checksum(passphrase))) {
            throw new Error("unexpected `keyHash`.");
        }
    }
    return payload;
}
//# sourceMappingURL=payload.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/decoder.js


async function decode(passphrase, encoded) {
    const payload = await getPayload(passphrase, encoded);
    let block = payload.block;
    if (passphrase && payload.algorithm && payload.salt) {
        const data = await crypto.subtle.decrypt(payload.algorithm, await loadKey(passphrase, payload.salt), payload.block);
        block = new Uint8Array(data);
    }
    return {
        mime: payload.mime,
        metadata: payload.metadata,
        block,
    };
}
//# sourceMappingURL=decoder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/index.js


//# sourceMappingURL=index.js.map

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

/***/ 68321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/truncate.js
var truncate = __webpack_require__(98016);
// EXTERNAL MODULE: ../plugins/FileService/src/base.ts + 7 modules
var base = __webpack_require__(46464);
// EXTERNAL MODULE: ../plugins/FileService/src/constants.ts
var constants = __webpack_require__(37613);
// EXTERNAL MODULE: ../plugins/FileService/src/helpers.ts + 2 modules
var helpers = __webpack_require__(34287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(52153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var isNil = __webpack_require__(29330);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.3_5f1f718baae1643018ff61bbe4484af0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(69961);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.3_5f1f718baae1643018ff61bbe4484af0/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(58556);
;// CONCATENATED MODULE: ../plugins/FileService/src/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "com.maskbook.fileservice", ...props })
function useI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("com.maskbook.fileservice")
    return (0,react.useMemo)(
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
const Translate = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(39973);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-rc.0/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(22749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/index.js + 7 modules
var common_protocols_esm = __webpack_require__(14136);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(51464);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(18906);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
;// CONCATENATED MODULE: ../plugins/FileService/src/file-key.ts
function makeFileKey(length = 16) {
    let key = '';
    // cspell:disable-next-line
    const table = 'ABDEFGHJKMNPQRTWXYadefhijkmnprstuvwxyz03478';
    for(let i = 0; i < length; i += 1){
        key += table.charAt(Math.floor(Math.random() * table.length));
    }
    return key;
}

// EXTERNAL MODULE: ../plugins/FileService/src/Worker/rpc.ts
var rpc = __webpack_require__(16895);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(26605);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(9506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(12976);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/List/List.js
var List = __webpack_require__(1749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js
var format = __webpack_require__(20478);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-rc.0/node_modules/react-feather/dist/icons/file.js
var icons_file = __webpack_require__(71021);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/RecentFiles.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            userSelect: 'none',
            display: 'flex',
            flexDirection: 'column',
            width: 150,
            paddingLeft: 10
        },
        heading: {
            fontSize: 14,
            lineHeight: 1.1,
            color: theme.palette.text.primary,
            marginTop: 0,
            marginBottom: 10
        },
        listing: {
            flex: 1
        },
        more: {
            fontSize: 14,
            lineHeight: 1.2,
            color: theme.palette.primary.contrastText
        }
    })
);
const useItemStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        padding: 0,
        paddingBottom: 10,
        userSelect: 'none',
        cursor: 'pointer'
    }
});
const useItemIconStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        minWidth: 32
    }
});
const useItemTextStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            margin: 0,
            marginLeft: 3
        },
        primary: {
            fontSize: 12,
            lineHeight: 1.1,
            color: theme.palette.text.primary,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        secondary: {
            fontSize: 10,
            lineHeight: 1.2,
            color: theme.palette.text.secondary
        }
    })
);
const RecentFiles = ({ files , onMore  })=>{
    const t = useI18N();
    const history = (0,react_router/* useHistory */.k6)();
    const { classes  } = useStyles();
    const { classes: itemClasses  } = useItemStyles();
    const { classes: itemIconClasses  } = useItemIconStyles();
    const { classes: itemTextClasses  } = useItemTextStyles();
    const onClick = (info)=>()=>{
            history.replace(constants/* FileRouter.uploaded */.er.uploaded, info);
        }
    ;
    const renderItem = (file, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
            classes: itemClasses,
            onClick: onClick(file),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                    classes: itemIconClasses,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_file/* default */.Z, {
                        width: 32,
                        height: 32
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                    classes: itemTextClasses,
                    primary: file.name,
                    secondary: (0,format/* default */.Z)(file.createdAt, 'yyyy-MM-dd HH:mm')
                })
            ]
        }, index)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.heading,
                children: t.recent_files()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.listing,
                children: files.slice(0, 4).map(renderItem)
            }),
            onMore && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.more,
                onClick: onMore,
                children: t.show_more()
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-rc.0/node_modules/react-feather/dist/icons/upload-cloud.js
var upload_cloud = __webpack_require__(92481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useDropArea.js
var useDropArea = __webpack_require__(50209);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/UploadDropArea.tsx








const UploadDropArea_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        label: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            position: 'relative',
            border: '1px dashed #C4C4C4',
            boxSizing: 'border-box',
            borderRadius: 4,
            textAlign: 'center',
            flex: 1,
            padding: 12,
            overflow: 'hidden',
            userSelect: 'none',
            height: 200
        },
        here: {
            fontSize: 12,
            lineHeight: 2.5,
            color: theme.palette.grey[100],
            userSelect: 'none'
        },
        hint: {
            margin: 0,
            color: '#939393',
            fontSize: 12,
            lineHeight: 1.5,
            userSelect: 'none'
        },
        over: {
            borderColor: '#2CA4EF',
            borderStyle: 'solid',
            userSelect: 'none',
            '& > $indicator': {
                opacity: 1
            }
        },
        indicator: {
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0,
            cursor: 'pointer',
            transition: 'all 500ms ease-out',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.85)',
            fontSize: 30,
            color: '#2CA4EF',
            userSelect: 'none',
            zIndex: 1
        },
        uploader: {
            userSelect: 'none',
            cursor: 'pointer',
            zIndex: 0
        }
    })
);
const UploadDropArea = ({ maxFileSize , onFile  })=>{
    const t = useI18N();
    const { classes , cx  } = UploadDropArea_useStyles();
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const [bond, { over  }] = (0,useDropArea/* default */.Z)({
        onFiles (files) {
            if (files.length > 1) {
                onError(101);
            } else if (files[0].size > maxFileSize) {
                onError(102);
            } else {
                onFile(files[0]);
            }
        },
        onText: ()=>onError(101)
        ,
        onUri: ()=>onError(101)
    });
    const MAX_FILE_SIZE = (0,esm/* formatFileSize */.sS)(maxFileSize);
    const onInput = (event)=>{
        var ref;
        const file = (ref = event.currentTarget.files) === null || ref === void 0 ? void 0 : ref.item(0);
        if ((0,isNil/* default */.Z)(file)) {
            onError(101);
        } else if (file.size > maxFileSize) {
            onError(102);
        } else {
            onFile(file);
        }
    };
    // error code definition:
    // see https://confluence.dimension.chat/x/3IEf#Maskbook:Plugin:FileService-ErrorHandling
    const onError = (code)=>{
        const messages = {
            101: t.error_101(),
            102: t.error_102({
                limit: MAX_FILE_SIZE
            })
        };
        if (code in messages) {
            showSnackbar(`Error ${code}: ${messages[code]}`, {
                variant: 'error'
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        component: "label",
        ...bond,
        className: cx(classes.label, {
            [classes.over]: over
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                type: "file",
                onInput: onInput,
                hidden: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.indicator,
                children: t.drop_indicator()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(upload_cloud/* default */.Z, {
                className: classes.uploader,
                width: 64,
                height: 64
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                className: classes.here,
                children: t.drop_here()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: classes.hint,
                children: t.drop_hint_1({
                    limit: MAX_FILE_SIZE
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: classes.hint,
                children: t.drop_hint_2()
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/Upload.tsx















const Upload_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column'
        },
        upload: {
            flex: 1,
            display: 'flex'
        },
        legal: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 'fit-content'
        },
        checkItems: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            height: 'fit-content'
        },
        encrypted: {
            userSelect: 'none',
            '& span': {
                fontSize: 12,
                lineHeight: 1.75
            }
        },
        usedCDN: {
            userSelect: 'none',
            '& span': {
                fontSize: 12,
                lineHeight: 1.75
            }
        },
        legalText: {
            userSelect: 'none',
            fontSize: 12,
            lineHeight: 1.75,
            color: theme.palette.text.secondary,
            '& a': {
                textDecoration: 'none'
            }
        }
    })
);
const Upload = ()=>{
    const t = useI18N();
    const { classes  } = Upload_useStyles();
    const history = (0,react_router/* useHistory */.k6)();
    const [encrypted, setEncrypted] = (0,react.useState)(true);
    const [useCDN, setUseCDN] = (0,react.useState)(false);
    const recent = (0,useAsync/* default */.Z)(()=>rpc/* PluginFileServiceRPC.getRecentFiles */.N.getRecentFiles()
    , []);
    const onFile = async (file)=>{
        let key = undefined;
        if (encrypted) {
            key = makeFileKey();
        }
        const block = new Uint8Array(await (0,esm/* blobToArrayBuffer */.vZ)(file));
        const checksum = (0,esm/* encodeArrayBuffer */.ll)(await common_protocols_esm/* Attachment.checksum */.P.checksum(block));
        const item = await rpc/* PluginFileServiceRPC.getFileInfo */.N.getFileInfo(checksum);
        if ((0,isNil/* default */.Z)(item)) {
            history.replace(constants/* FileRouter.uploading */.er.uploading, {
                key,
                name: file.name,
                size: file.size,
                type: file.type,
                block,
                checksum,
                useCDN
            });
        } else {
            history.replace(constants/* FileRouter.uploaded */.er.uploaded, item);
        }
    };
    var _value;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.upload,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadDropArea, {
                        maxFileSize: constants/* MAX_FILE_SIZE */.Tb,
                        onFile: onFile
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(RecentFiles, {
                        files: (_value = recent.value) !== null && _value !== void 0 ? _value : []
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.checkItems,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: encrypted,
                            onChange: (event)=>setEncrypted(event.target.checked)
                        }),
                        className: classes.encrypted,
                        label: t.on_encrypt_it()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: useCDN,
                            onChange: (event)=>setUseCDN(event.target.checked)
                        }),
                        className: classes.usedCDN,
                        label: t.use_cdn()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.legal,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.legalText,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate.legal_text, {
                        components: {
                            terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                target: "_blank",
                                href: t.legal_terms_link()
                            }),
                            policy: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                target: "_blank",
                                href: t.legal_policy_link()
                            })
                        }
                    })
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(44939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 2 modules
var omit = __webpack_require__(53580);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/hooks/Exchange.tsx



const Context = /*#__PURE__*/ (0,react.createContext)({
    onInsert: noop/* default */.Z,
    onUploading: noop/* default */.Z
});
const Exchange = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
        value: (0,omit/* default */.Z)(props, [
            'children'
        ]),
        children: props.children
    })
;
const useExchange = ()=>(0,react.useContext)(Context)
;

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/FileName.tsx



const FileName_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        name: {
            fontSize: 16,
            lineHeight: 1.75,
            textAlign: 'center',
            color: theme.palette.text.secondary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    })
);
const FileName = (props)=>{
    const { classes  } = FileName_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.name,
        children: props.name,
        title: props.name
    }));
};

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/Uploaded.tsx












const Uploaded_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        height: 250,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        alignItems: 'center',
        userSelect: 'none',
        paddingTop: 18,
        paddingBottom: 18
    },
    name: {
        fontSize: 16,
        lineHeight: 1.75,
        color: '#3B3B3B',
        textAlign: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: 400,
        whiteSpace: 'nowrap'
    },
    meta: {
        fontSize: 14,
        lineHeight: 1.71,
        color: '#5D6F88',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    info: {
        margin: 0
    }
});
const Uploaded = ()=>{
    const t = useI18N();
    const { classes  } = Uploaded_useStyles();
    const history = (0,react_router/* useHistory */.k6)();
    const { onInsert  } = useExchange();
    const { state  } = (0,react_router/* useLocation */.TH)();
    (0,react.useEffect)(()=>{
        onInsert(state);
    }, [
        onInsert,
        state
    ]);
    const onBack = ()=>{
        onInsert(null);
        history.replace(constants/* FileRouter.upload */.er.upload);
    };
    const onPreview = (event)=>{
        // ! THIS METHOD IS ONLY IN THE DEBUGGER !
        // ! Trigger: [Shift Key] + [Click] !
        // see https://mdn.io/shiftKey
        if (!event.shiftKey) {
            return;
        }
        const link = `https://arweave.net/${state.landingTxID}`;
        open(state.key ? `${link}#${state.key}` : link);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                onClick: onPreview,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_file/* default */.Z, {
                    width: 96,
                    height: 120
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                sx: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FileName, {
                        name: state.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        component: "section",
                        className: classes.meta,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: classes.info,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: (0,esm/* formatFileSize */.sS)(state.size)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: '  '
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: (0,format/* default */.Z)(state.createdAt, 'yyyy-MM-dd HH:mm:ss')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                onClick: onBack,
                                variant: "contained",
                                children: t.on_change_file()
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(61212);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/ProgressBar.tsx





const ProgressBar_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        height: 250,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        userSelect: 'none',
        paddingTop: 18,
        paddingBottom: 18
    },
    progress: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    meta: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: 0,
        color: '#939393',
        fontSize: 12,
        lineHeight: 1.75
    }
});
const ProgressBar = (props)=>{
    const t = useI18N();
    const { classes  } = ProgressBar_useStyles();
    const { startedAt , fileSize , sendSize  } = props;
    const value = sendSize / fileSize * 100;
    const elapsed = (Date.now() - startedAt) / 1000;
    const remaining = (fileSize - sendSize) / (elapsed ? sendSize / elapsed : 0);
    const variant = props.preparing ? 'indeterminate' : 'determinate';
    let completion = t.uploading_preparing();
    if (!props.preparing) {
        completion = `${(0,esm/* formatFileSize */.sS)(sendSize)} of ${(0,esm/* formatFileSize */.sS)(fileSize)}`;
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.progress,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.meta,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Duration, {
                        value: remaining
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: completion
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress/* default */.Z, {
                    variant: variant,
                    value: value
                })
            })
        ]
    }));
};
const Duration = ({ value  })=>{
    const t = useI18N();
    const render = ()=>{
        if (!Number.isFinite(value)) {
            return t.uploading_estimating_time();
        } else if (value < 60) {
            return t.uploading_in_minute_remaining({
                seconds: value.toFixed(0)
            });
        }
        return t.uploading_remaining({
            minutes: Math.trunc(value / 60) + '',
            seconds: (value % 60).toFixed(0)
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: render()
    }));
};

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/Uploading.tsx














const Uploading_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        height: 250,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        userSelect: 'none',
        paddingTop: 18,
        paddingBottom: 18
    },
    name: {
        fontSize: 16,
        lineHeight: 1.75,
        textAlign: 'center',
        color: '#3B3B3B',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
});
const Uploading = ()=>{
    const t = useI18N();
    const { classes  } = Uploading_useStyles();
    const history = (0,react_router/* useHistory */.k6)();
    const { onUploading  } = useExchange();
    const [startedAt] = (0,react.useState)(Date.now());
    const [preparing, setPreparing] = (0,react.useState)(true);
    const [sendSize, setSendSize] = (0,react.useState)(0);
    const { state  } = (0,react_router/* useLocation */.TH)();
    (0,react.useEffect)(()=>{
        onUploading(true);
        return ()=>onUploading(false)
        ;
    }, [
        onUploading
    ]);
    const { error  } = (0,useAsync/* default */.Z)(async ()=>{
        const payloadTxID = await (0,shared_base_src/* timeout */.Vs)(rpc/* PluginFileServiceRPC.makeAttachment */.N.makeAttachment({
            key: state.key,
            block: state.block,
            type: state.type
        }), 60000);
        setPreparing(false);
        for await (const pctComplete of rpc/* PluginFileServiceRPCGenerator.upload */.$.upload(payloadTxID)){
            setSendSize(state.size * (pctComplete / 100));
        }
        const landingTxID = await (0,shared_base_src/* timeout */.Vs)(rpc/* PluginFileServiceRPC.uploadLandingPage */.N.uploadLandingPage({
            name: state.name,
            size: state.size,
            txId: payloadTxID,
            type: state.type,
            key: state.key,
            useCDN: state.useCDN
        }), 300000);
        const item = {
            type: 'file',
            provider: 'arweave',
            id: state.checksum,
            name: state.name,
            size: state.size,
            createdAt: new Date(startedAt),
            key: state.key,
            payloadTxID: payloadTxID,
            landingTxID: landingTxID
        };
        await rpc/* PluginFileServiceRPC.setFileInfo */.N.setFileInfo(item);
        history.replace(constants/* FileRouter.uploaded */.er.uploaded, item);
    }, []);
    (0,react.useEffect)(()=>{
        if (error) {
            onUploading(false);
        }
    }, [
        error,
        onUploading
    ]);
    if (error) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_file/* default */.Z, {
                        width: 96,
                        height: 120
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: t.signing_failed()
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_file/* default */.Z, {
                    width: 96,
                    height: 120
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                sx: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FileName, {
                        name: state.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressBar, {
                        preparing: preparing,
                        fileSize: state.size,
                        sendSize: sendSize,
                        startedAt: startedAt
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/index.tsx






const Entry = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* MemoryRouter */.VA, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: constants/* FileRouter.upload */.er.upload,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Upload, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: constants/* FileRouter.uploading */.er.uploading,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Uploading, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: constants/* FileRouter.uploaded */.er.uploaded,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Uploaded, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
                    to: constants/* FileRouter.upload */.er.upload
                })
            ]
        })
    })
;

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/MainDialog.tsx












const MainDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        actions: {
            alignSelf: 'center'
        },
        button: {
            borderRadius: 26,
            marginTop: 24,
            fontSize: 16,
            lineHeight: 2.5,
            paddingLeft: 35,
            paddingRight: 35
        },
        paper: {
            width: '600px !important',
            maxWidth: 'none',
            boxShadow: 'none',
            backgroundImage: 'none',
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                display: 'block !important',
                margin: 12
            }
        }
    })
);
const FileServiceDialog = (props)=>{
    const t = useI18N();
    const { classes  } = MainDialog_useStyles();
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const [uploading, setUploading] = (0,react.useState)(false);
    const [selectedFileInfo, setSelectedFileInfo] = (0,react.useState)(null);
    const { attachMetadata , dropMetadata  } = (0,plugin_infra_src/* useCompositionContext */.Cp)();
    const { closeDialog: closeWalletStatusDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.walletStatusDialogUpdated */.R$.events.walletStatusDialogUpdated);
    const onInsert = ()=>{
        if ((0,isNil/* default */.Z)(selectedFileInfo)) {
            return;
        }
        if (selectedFileInfo) {
            attachMetadata(constants/* META_KEY_2 */.lw, JSON.parse(JSON.stringify(selectedFileInfo)));
        } else {
            dropMetadata(constants/* META_KEY_2 */.lw);
        }
        closeWalletStatusDialog();
        props.onClose();
    };
    const onDecline = ()=>{
        if (!uploading) {
            props.onClose();
            return;
        }
        showSnackbar(t.uploading_on_cancel());
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* MaskDialog */.Df, {
        DialogProps: {
            scroll: 'paper',
            classes: {
                paper: classes.paper
            }
        },
        open: props.open,
        title: t.__display_name(),
        onClose: onDecline,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Exchange, {
                    onUploading: setUploading,
                    onInsert: setSelectedFileInfo,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {})
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                classes: {
                    root: classes.actions
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "contained",
                    classes: {
                        root: classes.button
                    },
                    onClick: onInsert,
                    disabled: (0,isNil/* default */.Z)(selectedFileInfo),
                    children: t.on_insert()
                })
            })
        ]
    }));
};
/* harmony default export */ const MainDialog = (FileServiceDialog);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(50266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-rc.0/node_modules/react-feather/dist/icons/download-cloud.js
var download_cloud = __webpack_require__(83473);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/components/Copyable.tsx

const CopyableCode = ({ children , className  })=>{
    const onSelect = (event)=>{
        const selection = globalThis.getSelection();
        if (selection === null) {
            return;
        }
        const range = globalThis.document.createRange();
        range.selectNode(event.currentTarget);
        selection.removeAllRanges();
        selection.addRange(range);
    };
    const onDeselect = ()=>{
        var ref;
        (ref = globalThis.getSelection()) === null || ref === void 0 ? void 0 : ref.removeAllRanges();
    };
    const onCopy = async (event)=>{
        onSelect(event);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
        className: className,
        onClick: onCopy,
        onMouseEnter: onSelect,
        onMouseLeave: onDeselect,
        children: children
    }));
};

;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/Preview.tsx







const Preview_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            border: `1px solid ${theme.palette.divider}`,
            boxSizing: 'border-box',
            borderRadius: 12,
            padding: theme.spacing(2),
            cursor: 'default',
            userSelect: 'none',
            '& p': {
                margin: 0
            }
        },
        meta: {
            flex: 1,
            minWidth: '1%',
            marginLeft: 18,
            marginRight: 18,
            fontSize: 14,
            lineHeight: 1.85
        },
        name: {
            fontSize: 16,
            lineHeight: 1.85,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        code: {
            lineHeight: 1,
            userSelect: 'auto'
        },
        download: {
            display: 'block',
            cursor: 'pointer'
        }
    })
);
function Preview({ info  }) {
    const t = useI18N();
    const { classes  } = Preview_useStyles();
    const fileKey = info.key ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        component: "p",
        color: "textPrimary",
        children: [
            t.file_key(),
            " ",
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyableCode, {
                className: classes.code,
                children: info.key
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        component: "p",
        color: "textSecondary",
        children: t.unencrypted()
    });
    const link = `https://arweave.net/${info.landingTxID}`;
    const onClick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        open(info.key ? `${link}#${info.key}` : link);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        elevation: 0,
        className: classes.root,
        onClick:  true ? onClick : 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_file/* default */.Z, {
                className: classes.download,
                width: 44,
                height: 44,
                onClick: onClick
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.meta,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "p",
                        color: "textPrimary",
                        className: classes.name,
                        title: info.name,
                        children: info.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "p",
                        color: "textSecondary",
                        children: (0,esm/* formatFileSize */.sS)(info.size)
                    }),
                    fileKey
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(download_cloud/* default */.Z, {
                className: classes.download,
                width: 24,
                height: 24,
                onClick: onClick
            })
        ]
    }));
}

// EXTERNAL MODULE: ../icons/plugins/FileService.tsx
var FileService = __webpack_require__(47738);
;// CONCATENATED MODULE: ../plugins/FileService/src/SNSAdaptor/index.tsx









const definition = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector (props) {
        const metadata = (0,helpers/* FileInfoMetadataReader */.r)(props.message.meta);
        if (!metadata.ok) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Preview, {
            info: metadata.val
        }));
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* META_KEY_1 */.ki,
            onAttachedFile
        ],
        [
            constants/* META_KEY_2 */.lw,
            onAttachedFile
        ], 
    ]),
    CompositionDialogEntry: {
        label: {
            fallback: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FileService/* FileServiceIcon */.$, {
                        style: {
                            width: 16,
                            height: 16
                        }
                    }),
                    "File Service"
                ]
            })
        },
        dialog: MainDialog
    }
};
/* harmony default export */ const SNSAdaptor = (definition);
function onAttachedFile(payload) {
    const name = (0,truncate/* default */.Z)(payload.name, {
        length: 10
    });
    return `Attached File: ${name} (${(0,esm/* formatFileSize */.sS)(payload.size)})`;
}


/***/ }),

/***/ 16895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ PluginFileServiceRPC),
/* harmony export */   "$": () => (/* binding */ PluginFileServiceRPCGenerator)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);

/* unsupported import.meta.webpackHot */ undefined && 0;
const PluginFileServiceMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService);
const PluginFileServiceRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3147), __webpack_require__.e(6316), __webpack_require__.e(9278), __webpack_require__.e(3850), __webpack_require__.e(6766)]).then(__webpack_require__.bind(__webpack_require__, 36766)).then(({ upload , setupDatabase , ...rest })=>rest
    )
, PluginFileServiceMessage._);
const PluginFileServiceRPCGenerator = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPCGenerator */ .Sc)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3147), __webpack_require__.e(6316), __webpack_require__.e(9278), __webpack_require__.e(3850), __webpack_require__.e(6766)]).then(__webpack_require__.bind(__webpack_require__, 36766)).then(({ upload  })=>({
            upload
        })
    )
, PluginFileServiceMessage._2);


/***/ }),

/***/ 37613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ki": () => (/* binding */ META_KEY_1),
/* harmony export */   "lw": () => (/* binding */ META_KEY_2),
/* harmony export */   "Tb": () => (/* binding */ MAX_FILE_SIZE),
/* harmony export */   "_$": () => (/* binding */ landing),
/* harmony export */   "Gm": () => (/* binding */ signing),
/* harmony export */   "oC": () => (/* binding */ mesonPrefix),
/* harmony export */   "er": () => (/* binding */ FileRouter)
/* harmony export */ });
const META_KEY_1 = 'com.maskbook.fileservice:1';
const META_KEY_2 = 'com.maskbook.fileservice:2';
const MAX_FILE_SIZE = 10485760 // = 10 MiB
;
const landing = 'https://files.r2d2.to/partner/arweave/landing-page.html';
const signing = 'https://service.r2d2.to/arweave-remote-signing';
const mesonPrefix = 'https://coldcdn.com/api/cdn/9m5pde';
var FileRouter;
(function(FileRouter) {
    FileRouter["upload"] = '/upload';
    FileRouter["uploading"] = '/uploading';
    FileRouter["uploaded"] = '/uploaded';
})(FileRouter || (FileRouter = {}));


/***/ }),

/***/ 34287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ FileInfoMetadataReader),
  "F": () => (/* binding */ FileInfoV1ToV2)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
// EXTERNAL MODULE: ../plugins/FileService/src/constants.ts
var constants = __webpack_require__(37613);
;// CONCATENATED MODULE: ../plugins/FileService/src/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["arweave"],"title":"type"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","size"]}');
;// CONCATENATED MODULE: ../plugins/FileService/src/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["file"],"title":"type"},"provider":{"type":"string","enum":["arweave"],"title":"provider"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","provider","size","type"]}');
;// CONCATENATED MODULE: ../plugins/FileService/src/helpers.ts




const reader_v1 = (0,src/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_1 */.ki, schema_v1_namespaceObject);
const reader_v2 = (0,src/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_2 */.lw, schema_v2_namespaceObject);
function FileInfoMetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta).map(FileInfoV1ToV2);
}
function FileInfoV1ToV2(info) {
    return {
        ...info,
        type: 'file',
        provider: 'arweave'
    };
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

/***/ })

}]);