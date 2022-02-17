"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8145],{

/***/ 7714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wT": () => (/* binding */ SnackbarProvider),
/* harmony export */   "Ds": () => (/* binding */ useSnackbar)
/* harmony export */ });
/* unused harmony exports SnackbarContent, withSnackbar */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24204);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25789);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90033);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88448);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67811);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79556);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25283);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55851);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10063);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);










function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var SnackbarContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();

var allClasses = {
  mui: {
    root: {},
    anchorOriginTopCenter: {},
    anchorOriginBottomCenter: {},
    anchorOriginTopRight: {},
    anchorOriginBottomRight: {},
    anchorOriginTopLeft: {},
    anchorOriginBottomLeft: {}
  },
  container: {
    containerRoot: {},
    containerAnchorOriginTopCenter: {},
    containerAnchorOriginBottomCenter: {},
    containerAnchorOriginTopRight: {},
    containerAnchorOriginBottomRight: {},
    containerAnchorOriginTopLeft: {},
    containerAnchorOriginBottomLeft: {}
  }
};
var MESSAGES = {
  NO_PERSIST_ALL: 'WARNING - notistack: Reached maxSnack while all enqueued snackbars have \'persist\' flag. Notistack will dismiss the oldest snackbar anyway to allow other ones in the queue to be presented.'
};
var SNACKBAR_INDENTS = {
  view: {
    "default": 20,
    dense: 4
  },
  snackbar: {
    "default": 6,
    dense: 2
  }
};
var DEFAULTS = {
  maxSnack: 3,
  dense: false,
  hideIconVariant: false,
  variant: 'default',
  autoHideDuration: 5000,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  TransitionComponent: _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z,
  transitionDuration: {
    enter: 225,
    exit: 195
  }
};
var capitalise = function capitalise(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
var originKeyExtractor = function originKeyExtractor(anchor) {
  return "" + capitalise(anchor.vertical) + capitalise(anchor.horizontal);
};
/**
 * Omit SnackbarContainer class keys that are not needed for SnackbarItem
 */

var omitContainerKeys = function omitContainerKeys(classes) {
  return (// @ts-ignore
    Object.keys(classes).filter(function (key) {
      return !allClasses.container[key];
    }).reduce(function (obj, key) {
      var _extends2;

      return _extends({}, obj, (_extends2 = {}, _extends2[key] = classes[key], _extends2));
    }, {})
  );
};
var REASONS = {
  TIMEOUT: 'timeout',
  CLICKAWAY: 'clickaway',
  MAXSNACK: 'maxsnack',
  INSTRUCTED: 'instructed'
};
/** Tranforms classes name */

var transformer = {
  toContainerAnchorOrigin: function toContainerAnchorOrigin(origin) {
    return "containerAnchorOrigin" + origin;
  },
  toAnchorOrigin: function toAnchorOrigin(_ref) {
    var vertical = _ref.vertical,
        horizontal = _ref.horizontal;
    return "anchorOrigin" + capitalise(vertical) + capitalise(horizontal);
  },
  toVariant: function toVariant(variant) {
    return "variant" + capitalise(variant);
  }
};
var isDefined = function isDefined(value) {
  return !!value || value === 0;
};

var numberOrNull = function numberOrNull(numberish) {
  return typeof numberish === 'number' || numberish === null;
}; // @ts-ignore


var merge = function merge(options, props, defaults) {
  return function (name) {
    if (name === 'autoHideDuration') {
      if (numberOrNull(options.autoHideDuration)) return options.autoHideDuration;
      if (numberOrNull(props.autoHideDuration)) return props.autoHideDuration;
      return DEFAULTS.autoHideDuration;
    }

    return options[name] || props[name] || defaults[name];
  };
};
function objectMerge(options, props, defaults) {
  if (options === void 0) {
    options = {};
  }

  if (props === void 0) {
    props = {};
  }

  if (defaults === void 0) {
    defaults = {};
  }

  return _extends({}, defaults, {}, props, {}, options);
}

var componentName = 'SnackbarContent';
var classes = {
  root: componentName + "-root"
};
var Root = /*#__PURE__*/(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP)('div')(function (_ref) {
  var _ref2, _ref3;

  var theme = _ref.theme;
  return _ref3 = {}, _ref3["&." + classes.root] = (_ref2 = {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1
  }, _ref2[theme.breakpoints.up('sm')] = {
    flexGrow: 'initial',
    minWidth: 288
  }, _ref2), _ref3;
});
var SnackbarContent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref4, ref) {
  var className = _ref4.className,
      props = _objectWithoutPropertiesLoose(_ref4, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root, Object.assign({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className)
  }, props));
});

var DIRECTION = {
  right: 'left',
  left: 'right',
  bottom: 'up',
  top: 'down'
};
var getTransitionDirection = function getTransitionDirection(anchorOrigin) {
  if (anchorOrigin.horizontal !== 'center') {
    return DIRECTION[anchorOrigin.horizontal];
  }

  return DIRECTION[anchorOrigin.vertical];
};

var CheckIcon = function CheckIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41\n        10.59L10 14.17L17.59 6.58L19 8L10 17Z"
  }));
};

var WarningIcon = function WarningIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"
  }));
};

var ErrorIcon = function ErrorIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,\n        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,\n        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
  }));
};

var InfoIcon = function InfoIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,\n        0 22,12A10,10 0 0,0 12,2Z"
  }));
};

var iconStyles = {
  fontSize: 20,
  marginInlineEnd: 8
};
var defaultIconVariants = {
  "default": undefined,
  success: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CheckIcon, {
    style: iconStyles
  }),
  warning: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WarningIcon, {
    style: iconStyles
  }),
  error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorIcon, {
    style: iconStyles
  }),
  info: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InfoIcon, {
    style: iconStyles
  })
};

/**
 * @link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/createChainedFunction.js
 */
function createChainedFunction(funcs, extraArg) {
  return funcs.reduce(function (acc, func) {
    if (func == null) return acc;

    if (false) {}

    return function chainedFunction() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var argums = [].concat(args);

      if (extraArg && argums.indexOf(extraArg) === -1) {
        argums.push(extraArg);
      }

      acc.apply(this, argums);
      func.apply(this, argums);
    };
  }, function () {});
}

/**
 * @link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/useEventCallback.js
 */
var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
function useEventCallback(fn) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return (ref.current).apply(void 0, arguments);
  }, []);
}

var Snackbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  var children = props.children,
      autoHideDuration = props.autoHideDuration,
      ClickAwayListenerProps = props.ClickAwayListenerProps,
      _props$disableWindowB = props.disableWindowBlurListener,
      disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB,
      onClose = props.onClose,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      open = props.open,
      resumeHideDuration = props.resumeHideDuration,
      other = _objectWithoutPropertiesLoose(props, ["children", "autoHideDuration", "ClickAwayListenerProps", "disableWindowBlurListener", "onClose", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration"]);

  var timerAutoHide = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var handleClose = useEventCallback(function () {
    if (onClose) {
      onClose.apply(void 0, arguments);
    }
  });
  var setAutoHideTimer = useEventCallback(function (autoHideDurationParam) {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function () {
      handleClose(null, REASONS.TIMEOUT);
    }, autoHideDurationParam);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }

    return function () {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  /**
   * Pause the timer when the user is interacting with the Snackbar
   * or when the user hide the window.
   */

  var handlePause = function handlePause() {
    clearTimeout(timerAutoHide.current);
  };
  /**
   * Restart the timer when the user is no longer interacting with the Snackbar
   * or when the window is shown back.
   */


  var handleResume = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

  var handleMouseEnter = function handleMouseEnter(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }

    handlePause();
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    handleResume();
  };

  var handleClickAway = function handleClickAway(event) {
    if (onClose) {
      onClose(event, REASONS.CLICKAWAY);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return function () {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }

    return undefined;
  }, [disableWindowBlurListener, handleResume, open]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, _extends({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _extends({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: ref
  }, other), children));
});

var componentName$1 = 'SnackbarItem';
var classes$1 = {
  contentRoot: componentName$1 + "-contentRoot",
  lessPadding: componentName$1 + "-lessPadding",
  variantSuccess: componentName$1 + "-variantSuccess",
  variantError: componentName$1 + "-variantError",
  variantInfo: componentName$1 + "-variantInfo",
  variantWarning: componentName$1 + "-variantWarning",
  message: componentName$1 + "-message",
  action: componentName$1 + "-action",
  wrappedRoot: componentName$1 + "-wrappedRoot"
};
var StyledSnackbar = /*#__PURE__*/(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP)(Snackbar)(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  var mode = theme.palette.mode || theme.palette.type;
  var backgroundColor = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .emphasize */ ._4)(theme.palette.background["default"], mode === 'light' ? 0.8 : 0.98);
  return _ref2 = {}, _ref2["&." + classes$1.wrappedRoot] = {
    position: 'relative',
    transform: 'translateX(0)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, _ref2["." + classes$1.contentRoot] = _extends({}, theme.typography.body2, {
    backgroundColor: backgroundColor,
    color: theme.palette.getContrastText(backgroundColor),
    alignItems: 'center',
    padding: '6px 16px',
    borderRadius: '4px',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
  }), _ref2["." + classes$1.lessPadding] = {
    paddingLeft: 8 * 2.5
  }, _ref2["." + classes$1.variantSuccess] = {
    backgroundColor: '#43a047',
    color: '#fff'
  }, _ref2["." + classes$1.variantError] = {
    backgroundColor: '#d32f2f',
    color: '#fff'
  }, _ref2["." + classes$1.variantInfo] = {
    backgroundColor: '#2196f3',
    color: '#fff'
  }, _ref2["." + classes$1.variantWarning] = {
    backgroundColor: '#ff9800',
    color: '#fff'
  }, _ref2["." + classes$1.message] = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0'
  }, _ref2["." + classes$1.action] = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    paddingLeft: 16,
    marginRight: -8
  }, _ref2;
});

var SnackbarItem = function SnackbarItem(_ref3) {
  var propClasses = _ref3.classes,
      props = _objectWithoutPropertiesLoose(_ref3, ["classes"]);

  var timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      collapsed = _useState[0],
      setCollapsed = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);
  var handleClose = createChainedFunction([props.snack.onClose, props.onClose], props.snack.key);

  var handleEntered = function handleEntered() {
    if (props.snack.requestClose) {
      handleClose(null, REASONS.INSTRCUTED);
    }
  };

  var handleExitedScreen = function handleExitedScreen() {
    timeout.current = setTimeout(function () {
      setCollapsed(!collapsed);
    }, 125);
  };

  var style = props.style,
      otherAriaAttributes = props.ariaAttributes,
      otherClassName = props.className,
      hideIconVariant = props.hideIconVariant,
      iconVariant = props.iconVariant,
      snack = props.snack,
      otherAction = props.action,
      otherContent = props.content,
      otherTranComponent = props.TransitionComponent,
      otherTranProps = props.TransitionProps,
      otherTranDuration = props.transitionDuration,
      other = _objectWithoutPropertiesLoose(props, ["style", "dense", "ariaAttributes", "className", "hideIconVariant", "iconVariant", "snack", "action", "content", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]);

  var key = snack.key,
      open = snack.open,
      singleClassName = snack.className,
      variant = snack.variant,
      singleContent = snack.content,
      singleAction = snack.action,
      singleAriaAttributes = snack.ariaAttributes,
      anchorOrigin = snack.anchorOrigin,
      snackMessage = snack.message,
      singleTranComponent = snack.TransitionComponent,
      singleTranProps = snack.TransitionProps,
      singleTranDuration = snack.transitionDuration,
      singleSnackProps = _objectWithoutPropertiesLoose(snack, ["persist", "key", "open", "entered", "requestClose", "className", "variant", "content", "action", "ariaAttributes", "anchorOrigin", "message", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]);

  var icon = _extends({}, defaultIconVariants, {}, iconVariant)[variant];

  var ariaAttributes = _extends({
    'aria-describedby': 'notistack-snackbar'
  }, objectMerge(singleAriaAttributes, otherAriaAttributes));

  var TransitionComponent = singleTranComponent || otherTranComponent || DEFAULTS.TransitionComponent;
  var transitionDuration = objectMerge(singleTranDuration, otherTranDuration, DEFAULTS.transitionDuration);

  var transitionProps = _extends({
    direction: getTransitionDirection(anchorOrigin)
  }, objectMerge(singleTranProps, otherTranProps));

  var action = singleAction || otherAction;

  if (typeof action === 'function') {
    action = action(key);
  }

  var content = singleContent || otherContent;

  if (typeof content === 'function') {
    content = content(key, snack.message);
  } // eslint-disable-next-line operator-linebreak


  var callbacks = ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].reduce(function (acc, cbName) {
    var _extends2;

    return _extends({}, acc, (_extends2 = {}, _extends2[cbName] = createChainedFunction([props.snack[cbName], props[cbName]], props.snack.key), _extends2));
  }, {});
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    unmountOnExit: true,
    timeout: 175,
    "in": collapsed,
    onExited: callbacks.onExited
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSnackbar, Object.assign({}, other, singleSnackProps, {
    open: open,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(propClasses.root, classes$1.wrappedRoot, propClasses[transformer.toAnchorOrigin(anchorOrigin)]),
    onClose: handleClose
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionComponent, Object.assign({
    appear: true,
    "in": open,
    timeout: transitionDuration
  }, transitionProps, {
    onExit: callbacks.onExit,
    onExiting: callbacks.onExiting,
    onExited: handleExitedScreen,
    onEnter: callbacks.onEnter,
    onEntering: callbacks.onEntering,
    // order matters. first callbacks.onEntered to set entered: true,
    // then handleEntered to check if there's a request for closing
    onEntered: createChainedFunction([callbacks.onEntered, handleEntered])
  }), content || react__WEBPACK_IMPORTED_MODULE_0__.createElement(SnackbarContent, Object.assign({}, ariaAttributes, {
    role: "alert",
    style: style,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes$1.contentRoot, classes$1[transformer.toVariant(variant)], otherClassName, singleClassName, !hideIconVariant && icon && classes$1.lessPadding)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: ariaAttributes['aria-describedby'],
    className: classes$1.message
  }, !hideIconVariant ? icon : null, snackMessage), action && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes$1.action
  }, action)))));
};

var collapse = {
  // Material-UI 4.12.x and above uses MuiCollapse-root; earlier versions use
  // Mui-Collapse-container.  https://github.com/mui-org/material-ui/pull/24084
  container: '& > .MuiCollapse-container, & > .MuiCollapse-root',
  wrapper: '& > .MuiCollapse-container > .MuiCollapse-wrapper, & > .MuiCollapse-root > .MuiCollapse-wrapper'
};
var xsWidthMargin = 16;
var componentName$2 = 'SnackbarContainer';
var classes$2 = {
  root: componentName$2 + "-root",
  rootDense: componentName$2 + "-rootDense",
  top: componentName$2 + "-top",
  bottom: componentName$2 + "-bottom",
  left: componentName$2 + "-left",
  right: componentName$2 + "-right",
  center: componentName$2 + "-center"
};
var Root$1 = /*#__PURE__*/(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP)('div')(function (_ref) {
  var _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;

  var theme = _ref.theme;
  return _ref7 = {}, _ref7["&." + classes$2.root] = (_ref2 = {
    boxSizing: 'border-box',
    display: 'flex',
    maxHeight: '100%',
    position: 'fixed',
    zIndex: theme.zIndex.snackbar,
    height: 'auto',
    width: 'auto',
    transition: 'top 300ms ease 0ms, right 300ms ease 0ms, bottom 300ms ease 0ms, left 300ms ease 0ms, margin 300ms ease 0ms, max-width 300ms ease 0ms',
    // container itself is invisible and should not block clicks, clicks should be passed to its children
    pointerEvents: 'none'
  }, _ref2[collapse.container] = {
    pointerEvents: 'all'
  }, _ref2[collapse.wrapper] = {
    padding: SNACKBAR_INDENTS.snackbar["default"] + "px 0px",
    transition: 'padding 300ms ease 0ms'
  }, _ref2.maxWidth = "calc(100% - " + SNACKBAR_INDENTS.view["default"] * 2 + "px)", _ref2[theme.breakpoints.down('sm')] = {
    width: '100%',
    maxWidth: "calc(100% - " + xsWidthMargin * 2 + "px)"
  }, _ref2), _ref7["&." + classes$2.rootDense] = (_ref3 = {}, _ref3[collapse.wrapper] = {
    padding: SNACKBAR_INDENTS.snackbar.dense + "px 0px"
  }, _ref3), _ref7["&." + classes$2.top] = {
    top: SNACKBAR_INDENTS.view["default"] - SNACKBAR_INDENTS.snackbar["default"],
    flexDirection: 'column'
  }, _ref7["&." + classes$2.bottom] = {
    bottom: SNACKBAR_INDENTS.view["default"] - SNACKBAR_INDENTS.snackbar["default"],
    flexDirection: 'column-reverse'
  }, _ref7["&." + classes$2.left] = (_ref4 = {
    left: SNACKBAR_INDENTS.view["default"]
  }, _ref4[theme.breakpoints.up('sm')] = {
    alignItems: 'flex-start'
  }, _ref4[theme.breakpoints.down('sm')] = {
    left: xsWidthMargin + "px"
  }, _ref4), _ref7["&." + classes$2.right] = (_ref5 = {
    right: SNACKBAR_INDENTS.view["default"]
  }, _ref5[theme.breakpoints.up('sm')] = {
    alignItems: 'flex-end'
  }, _ref5[theme.breakpoints.down('sm')] = {
    right: xsWidthMargin + "px"
  }, _ref5), _ref7["&." + classes$2.center] = (_ref6 = {
    left: '50%',
    transform: 'translateX(-50%)'
  }, _ref6[theme.breakpoints.up('sm')] = {
    alignItems: 'center'
  }, _ref6), _ref7;
});

var SnackbarContainer = function SnackbarContainer(props) {
  var className = props.className,
      anchorOrigin = props.anchorOrigin,
      dense = props.dense,
      other = _objectWithoutPropertiesLoose(props, ["className", "anchorOrigin", "dense"]);

  var combinedClassname = (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes$2[anchorOrigin.vertical], classes$2[anchorOrigin.horizontal], classes$2.root, // root should come after others to override maxWidth
  className, dense && classes$2.rootDense);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root$1, Object.assign({
    className: combinedClassname
  }, other));
};

var SnackbarContainer$1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(SnackbarContainer);

/* eslint-disable */
var __DEV__ = (/* unused pure expression or super */ null && ("production" !== 'production'));

var warning = (function (message) {
  if (!__DEV__) return;

  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    throw new Error(message);
  } catch (x) {}
});

var SnackbarProvider = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SnackbarProvider, _Component);

  function SnackbarProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    /**
     * Adds a new snackbar to the queue to be presented.
     * Returns generated or user defined key referencing the new snackbar or null
     */

    _this.enqueueSnackbar = function (message, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var _opts = opts,
          key = _opts.key,
          preventDuplicate = _opts.preventDuplicate,
          options = _objectWithoutPropertiesLoose(_opts, ["key", "preventDuplicate"]);

      var hasSpecifiedKey = isDefined(key);
      var id = hasSpecifiedKey ? key : new Date().getTime() + Math.random();
      var merger = merge(options, _this.props, DEFAULTS);

      var snack = _extends({
        key: id
      }, options, {
        message: message,
        open: true,
        entered: false,
        requestClose: false,
        variant: merger('variant'),
        anchorOrigin: merger('anchorOrigin'),
        autoHideDuration: merger('autoHideDuration')
      });

      if (options.persist) {
        snack.autoHideDuration = undefined;
      }

      _this.setState(function (state) {
        if (preventDuplicate === undefined && _this.props.preventDuplicate || preventDuplicate) {
          var compareFunction = function compareFunction(item) {
            return hasSpecifiedKey ? item.key === key : item.message === message;
          };

          var inQueue = state.queue.findIndex(compareFunction) > -1;
          var inView = state.snacks.findIndex(compareFunction) > -1;

          if (inQueue || inView) {
            return state;
          }
        }

        return _this.handleDisplaySnack(_extends({}, state, {
          queue: [].concat(state.queue, [snack])
        }));
      });

      return id;
    };
    /**
     * Reducer: Display snack if there's space for it. Otherwise, immediately
     * begin dismissing the oldest message to start showing the new one.
     */


    _this.handleDisplaySnack = function (state) {
      var snacks = state.snacks;

      if (snacks.length >= _this.maxSnack) {
        return _this.handleDismissOldest(state);
      }

      return _this.processQueue(state);
    };
    /**
     * Reducer: Display items (notifications) in the queue if there's space for them.
     */


    _this.processQueue = function (state) {
      var queue = state.queue,
          snacks = state.snacks;

      if (queue.length > 0) {
        return _extends({}, state, {
          snacks: [].concat(snacks, [queue[0]]),
          queue: queue.slice(1, queue.length)
        });
      }

      return state;
    };
    /**
     * Reducer: Hide oldest snackbar on the screen because there exists a new one which we have to display.
     * (ignoring the one with 'persist' flag. i.e. explicitly told by user not to get dismissed).
     *
     * Note 1: If there is already a message leaving the screen, no new messages are dismissed.
     * Note 2: If the oldest message has not yet entered the screen, only a request to close the
     *         snackbar is made. Once it entered the screen, it will be immediately dismissed.
     */


    _this.handleDismissOldest = function (state) {
      if (state.snacks.some(function (item) {
        return !item.open || item.requestClose;
      })) {
        return state;
      }

      var popped = false;
      var ignore = false;
      var persistentCount = state.snacks.reduce(function (acc, current) {
        return acc + (current.open && current.persist ? 1 : 0);
      }, 0);

      if (persistentCount === _this.maxSnack) {
         false ? 0 : void 0;
        ignore = true;
      }

      var snacks = state.snacks.map(function (item) {
        if (!popped && (!item.persist || ignore)) {
          popped = true;

          if (!item.entered) {
            return _extends({}, item, {
              requestClose: true
            });
          }

          if (item.onClose) item.onClose(null, REASONS.MAXSNACK, item.key);
          if (_this.props.onClose) _this.props.onClose(null, REASONS.MAXSNACK, item.key);
          return _extends({}, item, {
            open: false
          });
        }

        return _extends({}, item);
      });
      return _extends({}, state, {
        snacks: snacks
      });
    };
    /**
     * Set the entered state of the snackbar with the given key.
     */


    _this.handleEnteredSnack = function (node, isAppearing, key) {
      if (!isDefined(key)) {
        throw new Error('handleEnteredSnack Cannot be called with undefined key');
      }

      _this.setState(function (_ref) {
        var snacks = _ref.snacks;
        return {
          snacks: snacks.map(function (item) {
            return item.key === key ? _extends({}, item, {
              entered: true
            }) : _extends({}, item);
          })
        };
      });
    };
    /**
     * Hide a snackbar after its timeout.
     */


    _this.handleCloseSnack = function (event, reason, key) {
      // should not use createChainedFunction for onClose.
      // because this.closeSnackbar called this function
      if (_this.props.onClose) {
        _this.props.onClose(event, reason, key);
      }

      if (reason === REASONS.CLICKAWAY) return;
      var shouldCloseAll = key === undefined;

      _this.setState(function (_ref2) {
        var snacks = _ref2.snacks,
            queue = _ref2.queue;
        return {
          snacks: snacks.map(function (item) {
            if (!shouldCloseAll && item.key !== key) {
              return _extends({}, item);
            }

            return item.entered ? _extends({}, item, {
              open: false
            }) : _extends({}, item, {
              requestClose: true
            });
          }),
          queue: queue.filter(function (item) {
            return item.key !== key;
          })
        };
      });
    };
    /**
     * Close snackbar with the given key
     */


    _this.closeSnackbar = function (key) {
      // call individual snackbar onClose callback passed through options parameter
      var toBeClosed = _this.state.snacks.find(function (item) {
        return item.key === key;
      });

      if (isDefined(key) && toBeClosed && toBeClosed.onClose) {
        toBeClosed.onClose(null, REASONS.INSTRUCTED, key);
      }

      _this.handleCloseSnack(null, REASONS.INSTRUCTED, key);
    };
    /**
     * When we set open attribute of a snackbar to false (i.e. after we hide a snackbar),
     * it leaves the screen and immediately after leaving animation is done, this method
     * gets called. We remove the hidden snackbar from state and then display notifications
     * waiting in the queue (if any). If after this process the queue is not empty, the
     * oldest message is dismissed.
     */
    // @ts-ignore


    _this.handleExitedSnack = function (event, key1, key2) {
      var key = key1 || key2;

      if (!isDefined(key)) {
        throw new Error('handleExitedSnack Cannot be called with undefined key');
      }

      _this.setState(function (state) {
        var newState = _this.processQueue(_extends({}, state, {
          snacks: state.snacks.filter(function (item) {
            return item.key !== key;
          })
        }));

        if (newState.queue.length === 0) {
          return newState;
        }

        return _this.handleDismissOldest(newState);
      });
    };

    _this.state = {
      snacks: [],
      queue: [],
      contextValue: {
        enqueueSnackbar: _this.enqueueSnackbar.bind(_assertThisInitialized(_this)),
        closeSnackbar: _this.closeSnackbar.bind(_assertThisInitialized(_this))
      }
    };
    return _this;
  }

  var _proto = SnackbarProvider.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var contextValue = this.state.contextValue;

    var _this$props = this.props,
        iconVariant = _this$props.iconVariant,
        _this$props$dense = _this$props.dense,
        dense = _this$props$dense === void 0 ? DEFAULTS.dense : _this$props$dense,
        _this$props$hideIconV = _this$props.hideIconVariant,
        hideIconVariant = _this$props$hideIconV === void 0 ? DEFAULTS.hideIconVariant : _this$props$hideIconV,
        domRoot = _this$props.domRoot,
        children = _this$props.children,
        _this$props$classes = _this$props.classes,
        classes = _this$props$classes === void 0 ? {} : _this$props$classes,
        props = _objectWithoutPropertiesLoose(_this$props, ["maxSnack", "preventDuplicate", "variant", "anchorOrigin", "iconVariant", "dense", "hideIconVariant", "domRoot", "children", "classes"]);

    var categ = this.state.snacks.reduce(function (acc, current) {
      var _extends2;

      var category = originKeyExtractor(current.anchorOrigin);
      var existingOfCategory = acc[category] || [];
      return _extends({}, acc, (_extends2 = {}, _extends2[category] = [].concat(existingOfCategory, [current]), _extends2));
    }, {});
    var snackbars = Object.keys(categ).map(function (origin) {
      var snacks = categ[origin];
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SnackbarContainer$1, {
        key: origin,
        dense: dense,
        anchorOrigin: snacks[0].anchorOrigin,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.containerRoot, classes[transformer.toContainerAnchorOrigin(origin)])
      }, snacks.map(function (snack) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SnackbarItem, Object.assign({}, props, {
          key: snack.key,
          snack: snack,
          dense: dense,
          iconVariant: iconVariant,
          hideIconVariant: hideIconVariant,
          classes: omitContainerKeys(classes),
          onClose: _this2.handleCloseSnack,
          onExited: createChainedFunction([_this2.handleExitedSnack, _this2.props.onExited]),
          onEntered: createChainedFunction([_this2.handleEnteredSnack, _this2.props.onEntered])
        }));
      }));
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SnackbarContext.Provider, {
      value: contextValue
    }, children, domRoot ? (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(snackbars, domRoot) : snackbars);
  };

  _createClass(SnackbarProvider, [{
    key: "maxSnack",
    get: function get() {
      return this.props.maxSnack || DEFAULTS.maxSnack;
    }
  }]);

  return SnackbarProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

var getFunctionName = function getFunctionName(fn) {
  var match = ("" + fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
};
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */


var getFunctionComponentName = function getFunctionComponentName(Component, fallback) {
  if (fallback === void 0) {
    fallback = '';
  }

  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
};

var getWrappedName = function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
};
/** 
 * From react-is
 * @link https://github.com/facebook/react/blob/master/packages/shared/ReactSymbols.js
 */


var ForwardRef = function ForwardRef() {
  var symbolFor = typeof Symbol === 'function' && Symbol["for"];
  return symbolFor ? symbolFor('react.forward_ref') : 0xead0;
};
/**
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


var getDisplayName = (function (Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case ForwardRef():
        return getWrappedName(Component, Component.render, 'ForwardRef');

      default:
        return undefined;
    }
  }

  return undefined;
});

var withSnackbar = function withSnackbar(Component) {
  var WrappedComponent = React__default.forwardRef(function (props, ref) {
    return React__default.createElement(SnackbarContext.Consumer, null, function (context) {
      return React__default.createElement(Component, _extends({}, props, {
        ref: ref,
        enqueueSnackbar: context.enqueueSnackbar,
        closeSnackbar: context.closeSnackbar
      }));
    });
  });

  if (false) {}

  hoistNonReactStatics(WrappedComponent, Component);
  return WrappedComponent;
};

var useSnackbar = (function () {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SnackbarContext);
});


//# sourceMappingURL=notistack.esm.js.map


/***/ })

}]);