"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3617],{

/***/ 22749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$B": () => (/* binding */ useRouteMatch),
/* harmony export */   "AW": () => (/* binding */ Route),
/* harmony export */   "F0": () => (/* binding */ Router),
/* harmony export */   "LX": () => (/* binding */ matchPath),
/* harmony export */   "TH": () => (/* binding */ useLocation),
/* harmony export */   "VA": () => (/* binding */ MemoryRouter),
/* harmony export */   "k6": () => (/* binding */ useHistory),
/* harmony export */   "l_": () => (/* binding */ Redirect),
/* harmony export */   "rs": () => (/* binding */ Switch),
/* harmony export */   "s6": () => (/* binding */ context)
/* harmony export */ });
/* unused harmony exports Prompt, StaticRouter, __HistoryContext, generatePath, useParams, withRouter */
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68944);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41901);
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84254);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32054);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45788);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15415);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99415);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28866);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10063);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_7__/* .createMemoryHistory */ .PP)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_3___default().compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = (0,history__WEBPACK_IMPORTED_MODULE_7__/* .createLocation */ .ob)(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = (0,history__WEBPACK_IMPORTED_MODULE_7__/* .createLocation */ .ob)(prevProps.to);

        if (!(0,history__WEBPACK_IMPORTED_MODULE_7__/* .locationsAreEqual */ .Hp)(prevLocation, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_3___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? 0 : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? 0 : children(props) : children : component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? 0 : children(props) : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_7__/* .createPath */ .Ep)(location);
}

function staticHandler(methodName) {
  return function () {
      false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_7__/* .createLocation */ .ob)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_7__/* .createLocation */ .ob)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : invariant(false) : void 0;
      return /*#__PURE__*/React.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoistStatics(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, key, global; }


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ 63552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AW": () => (/* binding */ D),
/* harmony export */   "F0": () => (/* binding */ x),
/* harmony export */   "Fg": () => (/* binding */ y),
/* harmony export */   "TH": () => (/* binding */ H),
/* harmony export */   "UO": () => (/* binding */ useParams),
/* harmony export */   "WU": () => (/* binding */ K),
/* harmony export */   "Z5": () => (/* binding */ E),
/* harmony export */   "bS": () => (/* binding */ useMatch),
/* harmony export */   "oQ": () => (/* binding */ useHref),
/* harmony export */   "s0": () => (/* binding */ A)
/* harmony export */ });
/* unused harmony exports MemoryRouter, Outlet, createRoutesFromArray, createRoutesFromChildren, generatePath, matchPath, matchRoutes, resolvePath, useBlocker, useInRouterContext, useOutlet, useRoutes */
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
function f(){f=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return f.apply(this,arguments)}var k= false?0:function(a){return a};function l(a,b){if(!a)throw Error(b);}function m(a,b){if(!a){"undefined"!==typeof console&&console.warn(b);try{throw Error(b);}catch(c){}}}var p={};
function q(a,b,c){b||p[a]||(p[a]=!0, false?0:void 0)}var r=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({static:!1}); false&&(0);var v=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({outlet:null,params:k({}),pathname:"",route:null}); false&&(0);
function w(a){var b=a.children,c=a.initialEntries;a=a.initialIndex;var d=useRef();null==d.current&&(d.current=createMemoryHistory({initialEntries:c,initialIndex:a}));var e=d.current;c=useReducer(function(a,c){return c},{action:e.action,location:e.location});a=c[0];var g=c[1];useLayoutEffect(function(){return e.listen(g)},[e]);return createElement(x,{children:b,action:a.action,location:a.location,navigator:e})}
 false&&(0);
function y(a){var b=a.to,c=a.replace,d=a.state;z()?void 0: false?0:l(!1); false?0:void 0;var e=A();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){e(b,{replace:c,
state:d})});return null} false&&(0);function B(){return C()} false&&(0);function D(a){a=a.element;return void 0===a?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(B,null):a}
 false&&(0);
function x(a){var b=a.children;b=void 0===b?null:b;var c=a.action;c=void 0===c?history__WEBPACK_IMPORTED_MODULE_1__/* .Action.Pop */ .aU.Pop:c;var d=a.location,e=a.navigator;a=a.static;a=void 0===a?!1:a;z()? false?0:l(!1):void 0;return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(r.Provider,{children:b,value:{action:c,location:d,navigator:e,static:a}})}
 false&&(0);function E(a){var b=a.basename;b=void 0===b?"":b;a=F(a.children);return G(a,b)}
 false&&(0);function z(){return null!=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(r).location}function H(){z()?void 0: false?0:l(!1);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(r).location}
function A(){z()?void 0: false?0:l(!1);var a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(r).navigator,b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(v).pathname,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){c.current=!0});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(d,e){void 0===e&&(e={});c.current?"number"===typeof d?a.go(d):(d=J(d,b),(e.replace?a.replace:a.push)(d,e.state)): false?0:
void 0},[a,b])}function C(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(v).outlet}function K(a){var b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(v).pathname;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return J(a,b)},[a,b])}
function G(a,b){void 0===b&&(b="");var c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(v),d=c.route,e=c.pathname,g=c.params; false&&(0);b=b?L([e,b]):e;var h=H();return(d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return M(a,h,b)},[h,a,b]))?d.reduceRight(function(a,c){var d=c.pathname,e=c.route;return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(v.Provider,{children:e.element,value:{outlet:a,params:k(f({},g,{},c.params)),pathname:L([b,d]),route:e}})},null):null}function N(a){return a.map(function(a){var c={path:a.path||"/",caseSensitive:!0===a.caseSensitive,element:a.element||createElement(B,null)};a.children&&(c.children=N(a.children));return c})}
function F(a){var b=[];react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(a,function(a){if((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(a))if(a.type===react__WEBPACK_IMPORTED_MODULE_0__.Fragment)b.push.apply(b,F(a.props.children));else{var c={path:a.props.path||"/",caseSensitive:!0===a.props.caseSensitive,element:a};a.props.children&&(a=F(a.props.children),a.length&&(c.children=a));b.push(c)}});return b}
function M(a,b,c){void 0===c&&(c="");"string"===typeof b&&(b=(0,history__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(b));b=b.pathname||"/";if(c)if(c=c.replace(/^\/*/,"/").replace(/\/+$/,""),b.startsWith(c))b=b===c?"/":b.slice(c.length);else return null;a=O(a);P(a);var d=null;for(c=0;null==d&&c<a.length;++c)a:{d=b;for(var e=a[c][1],g="/",h={},I=[],n=0;n<e.length;++n){var t=e[n],u="/"===g?d:d.slice(g.length)||"/";u=Q({path:t.path,caseSensitive:t.caseSensitive,end:n===e.length-1},u);if(!u){d=null;break a}g=L([g,u.pathname]);h=f({},h,{},u.params);
I.push({route:t,pathname:g,params:k(h)})}d=I}return d}function O(a,b,c,d,e){void 0===b&&(b=[]);void 0===c&&(c="");void 0===d&&(d=[]);void 0===e&&(e=[]);a.forEach(function(a,h){var g=L([c,a.path]),n=d.concat(a);h=e.concat(h);a.children&&O(a.children,b,g,n,h);b.push([g,n,h])});return b}function P(a){var b=a.reduce(function(a,b){b=b[0];a[b]=R(b);return a},{});S(a,function(a,d){var c=a[2];a=b[a[0]];var g=d[2];d=b[d[0]];return a!==d?d-a:T(c,g)})}var U=/^:\w+$/,V=2,W=1,X=10,Y=-2;
function Z(a){return"*"===a}function R(a){a=a.split("/");var b=a.length;a.some(Z)&&(b+=Y);return a.filter(function(a){return!Z(a)}).reduce(function(a,b){return a+(U.test(b)?V:""===b?W:X)},b)}function T(a,b){return a.length===b.length&&a.slice(0,-1).every(function(a,d){return a===b[d]})?a[a.length-1]-b[b.length-1]:0}function S(a,b){var c=a.slice(0);a.sort(function(a,e){return b(a,e)||c.indexOf(a)-c.indexOf(e)})}
function Q(a,b){"string"===typeof a&&(a={path:a});var c=a;a=c.path;var d=c.caseSensitive;c=c.end;c=aa(a,void 0===d?!1:d,void 0===c?!0:c);d=c[1];c=b.match(c[0]);if(!c)return null;b=c[1];var e=c.slice(2);d=d.reduce(function(a,b,c){c=e[c];try{var d=decodeURIComponent(c.replace(/\+/g," "))}catch(t){ false?0:void 0,d=c}a[b]=d;return a},{});return{path:a,pathname:b,params:d}}function aa(a,b,c){var d=[],e="^("+a.replace(/^\/*/,"/").replace(/\/?\*?$/,"").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,function(a,b){d.push(b);return"([^\\/]+)"})+")";a.endsWith("*")?(a.endsWith("/*")&&(e+="\\/?"),d.push("*"),e+="(.*)"):c&&(e+="\\/?");c&&(e+="$");return[new RegExp(e,b?void 0:"i"),d]}
function J(a,b){void 0===b&&(b="/");var c="string"===typeof a?(0,history__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(a):a;a=c.pathname;var d=c.search;d=void 0===d?"":d;c=c.hash;c=void 0===c?"":c;return{pathname:a?ba(a,a.startsWith("/")?"/":b):b,search:d,hash:c}}function L(a){return a.join("/").replace(/\/\/+/g,"/")}function ba(a,b){var c=b.replace(/\/+$/,"").replace(/\/\/+/g,"/").split("/");a.replace(/\/\/+/g,"/").split("/").forEach(function(a){".."===a?1<c.length&&c.pop():"."!==a&&c.push(a)});return 1<c.length?L(c):"/"}
function generatePath(a,b){void 0===b&&(b={});return a.replace(/:(\w+)/g,function(a,d){null==b[d]? false?0:l(!1):void 0;return b[d]}).replace(/\/*\*$/,function(){return null==b["*"]?"":b["*"].replace(/^\/*/,"/")})};
function useBlocker(a,b){void 0===b&&(b=!0);z()?void 0: false?0:l(!1);var c=useContext(r).navigator;useEffect(function(){if(b){var d=c.block(function(b){var c=f({},b,{retry:function(){d();b.retry()}});a(c)});return d}},[c,a,b])};
function useHref(a){z()?void 0: false?0:l(!1);var b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(r).navigator;a=K(a);return b.createHref(a)};function useMatch(a){z()?void 0: false?0:l(!1);var b=H();return Q(a,b.pathname)};
function useParams(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(v).params};function useRoutes(a,b){void 0===b&&(b="");z()?void 0: false?0:l(!1);var c=useMemo(function(){return N(a)},[a]);return G(c,b)};
//# sourceMappingURL=index.js.map


/***/ })

}]);