"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4586],{

/***/ 85468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ I18nextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
if (4554 != __webpack_require__.j) {
	/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24193);
}


function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  var value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      i18n: i18n,
      defaultNS: defaultNS
    };
  }, [i18n, defaultNS]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context__WEBPACK_IMPORTED_MODULE_1__/* .I18nContext.Provider */ .OO.Provider, {
    value: value
  }, children);
}

/***/ }),

/***/ 69961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ Trans)
/* harmony export */ });
/* unused harmony export nodesToString */
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42934);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44269);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var html_parse_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(883);
/* harmony import */ var html_escaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15333);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24193);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66680);



var _excluded = ["format"],
    _excluded2 = ["children", "count", "parent", "i18nKey", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function hasChildren(node, checkLength) {
  if (!node) return false;
  var base = node.props ? node.props.children : node.children;
  if (checkLength) return base.length > 0;
  return !!base;
}

function getChildren(node) {
  if (!node) return [];
  return node && node.children ? node.children : node.props && node.props.children;
}

function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
  return children.every(function (child) {
    return react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child);
  });
}

function getAsArray(data) {
  return Array.isArray(data) ? data : [data];
}

function mergeProps(source, target) {
  var newTarget = _objectSpread({}, target);

  newTarget.props = Object.assign(source.props, target.props);
  return newTarget;
}

function nodesToString(children, i18nOptions) {
  if (!children) return '';
  var stringNode = '';
  var childrenArray = getAsArray(children);
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  childrenArray.forEach(function (child, childIndex) {
    if (typeof child === 'string') {
      stringNode += "".concat(child);
    } else if (react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child)) {
      var childPropsCount = Object.keys(child.props).length;
      var shouldKeepChild = keepArray.indexOf(child.type) > -1;
      var childChildren = child.props.children;

      if (!childChildren && shouldKeepChild && childPropsCount === 0) {
        stringNode += "<".concat(child.type, "/>");
      } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (child.props.i18nIsDynamicList) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === 'string') {
        stringNode += "<".concat(child.type, ">").concat(childChildren, "</").concat(child.type, ">");
      } else {
        var content = nodesToString(childChildren, i18nOptions);
        stringNode += "<".concat(childIndex, ">").concat(content, "</").concat(childIndex, ">");
      }
    } else if (child === null) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .warn */ .ZK)("Trans: the passed in value is invalid - seems you passed in a null child.");
    } else if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(child) === 'object') {
      var format = child.format,
          clone = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(child, _excluded);

      var keys = Object.keys(clone);

      if (keys.length === 1) {
        var value = format ? "".concat(keys[0], ", ").concat(format) : keys[0];
        stringNode += "{{".concat(value, "}}");
      } else {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .warn */ .ZK)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .warn */ .ZK)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return stringNode;
}

function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) {
  if (targetString === '') return [];
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString);
  if (!children && !emptyChildrenButNeedsHandling) return [targetString];
  var data = {};

  function getData(childs) {
    var childrenArray = getAsArray(childs);
    childrenArray.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(child) === 'object' && !react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child)) Object.assign(data, child);
    });
  }

  getData(children);
  var ast = html_parse_stringify__WEBPACK_IMPORTED_MODULE_2__/* ["default"].parse */ .Z.parse("<0>".concat(targetString, "</0>"));

  var opts = _objectSpread(_objectSpread({}, data), combinedTOpts);

  function renderInner(child, node, rootReactNode) {
    var childs = getChildren(child);
    var mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
  }

  function pushTranslatedJSX(child, inner, mem, i, isVoid) {
    if (child.dummy) child.children = inner;
    mem.push(react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
      key: i
    }), isVoid ? undefined : inner));
  }

  function mapAST(reactNode, astNode, rootReactNode) {
    var reactNodes = getAsArray(reactNode);
    var astNodes = getAsArray(astNode);
    return astNodes.reduce(function (mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);

      if (node.type === 'tag') {
        var tmp = reactNodes[parseInt(node.name, 10)];
        if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name]) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        var child = Object.keys(node.attrs).length !== 0 ? mergeProps({
          props: node.attrs
        }, tmp) : tmp;
        var isElement = react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child);
        var isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
        var isEmptyTransWithHTML = emptyChildrenButNeedsHandling && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(child) === 'object' && child.dummy && !isElement;
        var isKnownComponent = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(children) === 'object' && children !== null && Object.hasOwnProperty.call(children, node.name);

        if (typeof child === 'string') {
          var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
            var inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i);
          } else if (isEmptyTransWithHTML) {
          var _inner = mapAST(reactNodes, node.children, rootReactNode);

          mem.push(react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          }), _inner));
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            var _inner2 = renderInner(child, node, rootReactNode);

            pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push(react__WEBPACK_IMPORTED_MODULE_1__.createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }));
            } else {
              var _inner3 = mapAST(reactNodes, node.children, rootReactNode);

              mem.push(react__WEBPACK_IMPORTED_MODULE_1__.createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }, _inner3));
            }
          } else if (node.voidElement) {
            mem.push("<".concat(node.name, " />"));
          } else {
            var _inner4 = mapAST(reactNodes, node.children, rootReactNode);

            mem.push("<".concat(node.name, ">").concat(_inner4, "</").concat(node.name, ">"));
          }
        } else if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(child) === 'object' && !isElement) {
          var content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          mem.push(react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          }), translationContent));
        } else {
          mem.push(react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          })));
        }
      } else if (node.type === 'text') {
        var wrapTextNodes = i18nOptions.transWrapTextNodes;

        var _content = shouldUnescape ? (0,html_escaper__WEBPACK_IMPORTED_MODULE_3__/* .unescape */ .A)(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);

        if (wrapTextNodes) {
          mem.push(react__WEBPACK_IMPORTED_MODULE_1__.createElement(wrapTextNodes, {
            key: "".concat(node.name, "-").concat(i)
          }, _content));
        } else {
          mem.push(_content);
        }
      }

      return mem;
    }, []);
  }

  var result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
}

function Trans(_ref) {
  var children = _ref.children,
      count = _ref.count,
      parent = _ref.parent,
      i18nKey = _ref.i18nKey,
      _ref$tOptions = _ref.tOptions,
      tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
      values = _ref.values,
      defaults = _ref.defaults,
      components = _ref.components,
      ns = _ref.ns,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      shouldUnescape = _ref.shouldUnescape,
      additionalProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_ref, _excluded2);

  var _ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_7__/* .I18nContext */ .OO) || {},
      i18nFromContext = _ref2.i18n,
      defaultNSFromContext = _ref2.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0,_context__WEBPACK_IMPORTED_MODULE_7__/* .getI18n */ .nI)();

  if (!i18n) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .warnOnce */ .O4)('You will need to pass in an i18next instance by using i18nextReactModule');
    return children;
  }

  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
    return k;
  };

  var reactI18nextOptions = _objectSpread(_objectSpread({}, (0,_context__WEBPACK_IMPORTED_MODULE_7__/* .getDefaults */ .JP)()), i18n.options && i18n.options.react);

  var namespaces = ns || t.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  var defaultValue = defaults || nodesToString(children, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue || i18nKey;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values ? tOptions.interpolation : {
    interpolation: _objectSpread(_objectSpread({}, tOptions.interpolation), {}, {
      prefix: '#$?',
      suffix: '?$#'
    })
  };

  var combinedTOpts = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, tOptions), {}, {
    count: count
  }, values), interpolationOverride), {}, {
    defaultValue: defaultValue,
    ns: namespaces
  });

  var translation = key ? t(key, combinedTOpts) : defaultValue;
  var content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
  return useAsParent ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(useAsParent, additionalProps, content) : content;
}

/***/ }),

/***/ 24193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OO": () => (/* binding */ I18nContext),
/* harmony export */   "JP": () => (/* binding */ getDefaults),
/* harmony export */   "zv": () => (/* binding */ ReportNamespaces),
/* harmony export */   "nI": () => (/* binding */ getI18n),
/* harmony export */   "Db": () => (/* binding */ initReactI18next)
/* harmony export */ });
/* unused harmony exports setDefaults, setI18n, composeInitialProps, getInitialProps */
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46637);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88876);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true
};
var i18nInstance;
var I18nContext = react__WEBPACK_IMPORTED_MODULE_1__.createContext();
function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = _objectSpread(_objectSpread({}, defaultOptions), options);
}
function getDefaults() {
  return defaultOptions;
}
var ReportNamespaces = function () {
  function ReportNamespaces() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, ReportNamespaces);

    this.usedNamespaces = {};
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;

      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);

  return ReportNamespaces;
}();
function setI18n(instance) {
  i18nInstance = instance;
}
function getI18n() {
  return i18nInstance;
}
var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
function composeInitialProps(ForComponent) {
  return function (ctx) {
    return new Promise(function (resolve) {
      var i18nInitialProps = getInitialProps();

      if (ForComponent.getInitialProps) {
        ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
          resolve(_objectSpread(_objectSpread({}, componentsInitialProps), i18nInitialProps));
        });
      } else {
        resolve(i18nInitialProps);
      }
    });
  };
}
function getInitialProps() {
  var i18n = getI18n();
  var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  var ret = {};
  var initialI18nStore = {};
  i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
}

/***/ }),

/***/ 58556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useTranslation)
/* harmony export */ });
if (4554 != __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82253);
}
if (4554 != __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36999);
}
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
if (4554 != __webpack_require__.j) {
	/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24193);
}
if (4554 != __webpack_require__.j) {
	/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66680);
}



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i18nFromProps = props.i18n;

  var _ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__/* .I18nContext */ .OO) || {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0,_context__WEBPACK_IMPORTED_MODULE_2__/* .getI18n */ .nI)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context__WEBPACK_IMPORTED_MODULE_2__/* .ReportNamespaces */ .zv();

  if (!i18n) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .warnOnce */ .O4)('You will need to pass in an i18next instance by using initReactI18next');

    var notReadyT = function notReadyT(k) {
      return Array.isArray(k) ? k[k.length - 1] : k;
    };

    var retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }

  if (i18n.options.react && i18n.options.react.wait !== undefined) (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .warnOnce */ .O4)('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');

  var i18nOptions = _objectSpread(_objectSpread(_objectSpread({}, (0,_context__WEBPACK_IMPORTED_MODULE_2__/* .getDefaults */ .JP)()), i18n.options.react), props);

  var useSuspense = i18nOptions.useSuspense,
      keyPrefix = i18nOptions.keyPrefix;
  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .hasLoadedNamespace */ .F0)(n, i18n, i18nOptions);
  });

  function getT() {
    return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getT),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1];

  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore;
    isMounted.current = true;

    if (!ready && !useSuspense) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .loadNamespaces */ .DC)(i18n, namespaces, function () {
        if (isMounted.current) setT(getT);
      });
    }

    function boundReset() {
      if (isMounted.current) setT(getT);
    }

    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return function () {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [i18n, namespaces.join()]);
  var isInitial = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (isMounted.current && !isInitial.current) {
      setT(getT);
    }

    isInitial.current = false;
  }, [i18n]);
  var ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(function (resolve) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .loadNamespaces */ .DC)(i18n, namespaces, function () {
      resolve();
    });
  });
}

/***/ }),

/***/ 66680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZK": () => (/* binding */ warn),
/* harmony export */   "O4": () => (/* binding */ warnOnce),
/* harmony export */   "DC": () => (/* binding */ loadNamespaces),
/* harmony export */   "F0": () => (/* binding */ hasLoadedNamespace)
/* harmony export */ });
/* unused harmony export getDisplayName */
function warn() {
  if (console && console.warn) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

    (_console = console).warn.apply(_console, args);
  }
}
var alreadyWarned = {};
function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
}
function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function () {
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };

      i18n.on('initialized', initialized);
    }
  });
}
function hasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }

  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === 'cimode') return true;

  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  };

  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

/***/ })

}]);