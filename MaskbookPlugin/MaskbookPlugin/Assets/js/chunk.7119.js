<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.7119.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7119],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5215],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5215.js

/***/ 97379:
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

/***/ 11399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SuccessIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const SuccessIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Success', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".2",
            d: "M32 58.667c14.727 0 26.667-11.94 26.667-26.667 0-14.728-11.94-26.667-26.667-26.667C17.272 5.333 5.333 17.273 5.333 32c0 14.728 11.94 26.667 26.667 26.667z",
            fill: "#77E0B5"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.46 22.027c1.09.99 1.17 2.677.18 3.767L31.306 40.46a2.667 2.667 0 01-3.708.23l-9.333-8a2.667 2.667 0 113.47-4.049l7.367 6.314 11.591-12.75a2.667 2.667 0 013.767-.18z",
            fill: "#77E0B5"
        })
    ]
}), '0 0 64 64');


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.7119.js
/***/ 22681:
=======
/***/ 64921:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5215.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.7119.js
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43402);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76898);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13661);
=======
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88088);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25830);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16842);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5215.js





const Image1 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Image2(props, outgoingRef) {
    const { src , loading: propsLoading , canvasProps , imgProps , style , className , SkeletonProps , onClick , onURL  } = props;
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#Maximum_canvas_size
    const [height, width] = [
        Math.min(32767, props.height || 500),
        Math.min(32767, props.width || 500)
    ];
    const [hasCSPBan, setHasCSPBan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [origin, component] = resolveMode(props, hasCSPBan);
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [blobURL, setBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!(src instanceof Blob)) return;
        const blob = URL.createObjectURL(src);
        setBlob(blob);
        return ()=>URL.revokeObjectURL(blob)
        ;
    }, [
        src
    ]);
    const url = blobURL || (typeof src === 'string' ? src : undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return void (url && (onURL === null || onURL === void 0 ? void 0 : onURL(url)));
    }, [
        onURL,
        url
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(outgoingRef, ()=>({
            canvas: canvasRef.current,
            img: imgRef.current
        })
    , []);
    // TODO: handle image loading error
    const { loading , error , value  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(async function() {
        if (propsLoading) return;
        if (component === 'img') return;
        if (typeof src !== 'string') return;
        if (origin === 'current') return fetch(src).then((x)=>x.blob()
        );
        return _extension_service__WEBPACK_IMPORTED_MODULE_2__/* .default.Helper.fetch */ .ZP.Helper.fetch(src);
    }, [
        component,
        src,
        origin
    ]);
    if (error) console.error(error);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const e = canvasRef.current;
        if (!e) return;
        if (!(e instanceof HTMLCanvasElement)) return;
        if (propsLoading || loading) return;
        if (component !== 'canvas') return;
        const source = src instanceof Blob ? src : value;
        if (!source) return;
        toImage(source).then((data)=>{
            const ctx = e.getContext('2d');
            ctx.drawImage(data, 0, 0, width * window.devicePixelRatio, height * window.devicePixelRatio);
        });
    }, [
        propsLoading,
        loading,
        value,
        component,
        width,
        height,
        src
    ]);
    if (propsLoading || loading) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            variant: "rectangular",
            width: width,
            height: height,
            className: className,
            style: style,
            onClick: onClick,
            ...SkeletonProps
        }));
    }
    if (component === 'img' && (typeof src === 'string' || blobURL)) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: url,
            onError: blobURL ? ()=>setHasCSPBan(true)
             : undefined,
            width: width,
            height: height,
            className: className,
            style: style,
            ref: imgRef,
            onClick: onClick,
            ...imgProps
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
        ref: canvasRef,
        width: width * window.devicePixelRatio,
        height: height * window.devicePixelRatio,
        style: {
            width,
            height,
            ...style
        },
        className: className,
        onClick: onClick,
        ...canvasProps
    }));
});
// TODO support concurrent mode
/**
 * This React Component is used to render images in the content script to bypass the CSP restriction.
 */ 
function resolveMode(props, hasCSPBan) {
    const { src , component ='img' , origin ='auto'  } = props;
    if (!hasCSPBan) return [
        'current',
        component
    ];
    if (typeof src !== 'string') return [
        'current',
        'canvas'
    ];
    if (origin === 'extension') return [
        'extension',
        'canvas'
    ];
    if (origin === 'auto') {
        if (isSameOrigin(src)) return [
            'current',
            component
        ];
        return [
            'extension',
            'canvas'
        ];
    }
    return [
        origin,
        component
    ];
}
function isSameOrigin(x) {
    if (typeof x !== 'string') return false;
    try {
        if (new URL(location.href).origin === new URL(x).origin) return true;
    } catch  {
    }
    return false;
}
async function toImage(arr) {
    try {
        return await createImageBitmap(arr);
    } catch  {
        // Safari route
        return new Promise((resolve, reject)=>{
            const img = document.createElement('img');
            img.addEventListener('load', ()=>{
                resolve(img);
                URL.revokeObjectURL(img.src);
            });
            img.addEventListener('error', ({ error  })=>{
                reject(error);
                URL.revokeObjectURL(img.src);
            });
            // TODO: this might be blocked by CSP
            img.src = URL.createObjectURL(arr);
        });
    }
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.7119.js
/***/ 77603:
=======
/***/ 70988:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5215.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(77504);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/useTheme.js
var useTheme = __webpack_require__(7931);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(82215);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogTitle/DialogTitle.js + 1 modules
var DialogTitle = __webpack_require__(20481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(11042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(18658);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(14840);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx






function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: (0,base/* isTwitter */.L3)(social_network.activatedSocialNetworkUI) ? 'primary' : 'inherit'
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {
    });
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogBackdropRoot: {
        }
    })
);
function InjectedDialog(props) {
    var ref, ref1, ref2;
    const overwrite = social_network.activatedSocialNetworkUI.customization.componentOverwrite || {
    };
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container , ...dialogClasses } = (0,shared_src.useStylesExtends)(useStyles(), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , ...rest } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack  } = (0,src/* useDialogStackConsumer */.N8)(open);
    return (0,utils/* usePortalShadowRoot */.ad)((container1)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
            container: container1,
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
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src.ErrorBoundary, {
                children: [
                    title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                        classes: {
                            root: dialogTitle
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
                                    style: shouldReplaceExitWithBack ? 'back' : titleBarIconStyle
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    }),
                    content,
                    actions
                ]
            })
        }));
    });
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>{
        return (child === null || child === void 0 ? void 0 : child.type) === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,shared_src.mergeClasses)(extraClasses, child.props.classes)
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 94617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ ConnectWalletDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.7119.js
var messages = __webpack_require__(49269);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(40623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(36487);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(81021);
=======
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5215.js
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ConnectWalletDialog/ConnectionProgress.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2, 4, 3),
            borderRadius: 8,
            backgroundColor: (0,src/* getMaskColor */.nb)(theme).twitterBackground
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
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
            className: classes.content,
            elevation: 0,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.ProviderIcon, {
                        providerType: providerType
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                        sx: {
                            marginLeft: 2
                        },
                        children: [
                            connected ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                children: [
                                    "Connected to ",
                                    (0,web3_shared_src/* resolveProviderName */.HwK)(providerType)
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                children: [
                                    "Connect to ",
                                    (0,web3_shared_src/* resolveProviderName */.HwK)(providerType)
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
                                        children: "Initializing…"
                                    })
                                ]
                            }) : null,
                            !loading && error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.error,
                                color: "red",
                                variant: "body2",
                                children: error.message
                            }) : null
                        ]
                    }),
                    !connected && error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        color: "primary",
                        variant: "contained",
                        onClick: retry,
                        children: t('retry')
                    }) : null
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ConnectWalletDialog/index.tsx













const ConnectWalletDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(5)
        }
    })
);
function ConnectWalletDialog(props) {
    const classes = (0,shared_src.useStylesExtends)(ConnectWalletDialog_useStyles(), props);
    const [providerType, setProviderType] = (0,react.useState)();
    const [networkType, setNetworkType] = (0,react.useState)();
    //#region remote controlled dialog
    const { open , closeDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setProviderType(ev.providerType);
        setNetworkType(ev.networkType);
    });
    //#endregion
    //#region walletconnect
    const { setDialog: setWalletConnectDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated);
    //#endregion
    const connectTo = (0,react.useCallback)(async ()=>{
        if (!networkType) throw new Error('Unknown network type.');
        if (!providerType) throw new Error('Unknown provider type.');
        // read the chain detailed from the built-in chain list
        const expectedChainId = (0,web3_shared_src/* getChainIdFromNetworkType */.EP9)(networkType);
        const chainDetailedCAIP = (0,web3_shared_src/* getChainDetailedCAIP */.EXI)(expectedChainId);
        if (!chainDetailedCAIP) throw new Error('Unknown network type.');
        // a short time loading makes the user fells better
        await (0,utils/* delay */.gw)(1000);
        let account;
        let chainId;
        switch(providerType){
            case web3_shared_src/* ProviderType.Maskbook */.lP_.Maskbook:
                throw new Error('Not necessary!');
            case web3_shared_src/* ProviderType.MetaMask */.lP_.MetaMask:
                ({ account , chainId  } = await service/* default.Ethereum.connectMetaMask */.ZP.Ethereum.connectMetaMask());
                break;
            case web3_shared_src/* ProviderType.WalletConnect */.lP_.WalletConnect:
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
            case web3_shared_src/* ProviderType.CustomNetwork */.lP_.CustomNetwork:
                throw new Error('To be implemented.');
            default:
                (0,esm/* safeUnreachable */.P)(providerType);
                break;
        }
        // connection failed
        if (!account || !networkType) throw new Error(`Failed to connect ${(0,web3_shared_src/* resolveProviderName */.HwK)(providerType)}.`);
        // need to switch chain
        if (chainId !== expectedChainId) {
            try {
                const overrides = {
                    chainId: expectedChainId,
                    providerType
                };
                await Promise.race([
                    (async ()=>{
                        await (0,utils/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
                        throw new Error('Timeout!');
                    })(),
                    networkType === web3_shared_src/* NetworkType.Ethereum */.tds.Ethereum ? service/* default.Ethereum.switchEthereumChain */.ZP.Ethereum.switchEthereumChain(web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet, overrides) : service/* default.Ethereum.addEthereumChain */.ZP.Ethereum.addEthereumChain(chainDetailedCAIP, account, overrides), 
                ]);
            } catch  {
                throw new Error(`Make sure your wallet is on the ${(0,web3_shared_src/* resolveNetworkName */.nWu)(networkType)} network.`);
            }
        }
        // update account
        await messages/* WalletRPC.updateAccount */.V.updateAccount({
            account,
            chainId: expectedChainId,
            providerType,
            networkType
        });
        return true;
    }, [
        networkType,
        providerType
    ]);
    const connection = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!open) return true;
        // connect to the specific provider
        await connectTo();
        // switch to the wallet status dialog
        closeDialog();
        return true;
    }, [
        open,
        providerType,
        connectTo
    ]);
    if (!providerType) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: `Connect to ${(0,web3_shared_src/* resolveProviderName */.HwK)(providerType)}`,
        open: open,
        onClose: closeDialog,
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

/***/ 8881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ CreateImportChooseDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69476);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76900);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _components_shared_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64921);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70988);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37186);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80050);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35313);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        content: {
            padding: theme.spacing(5, 4.5)
        },
        walletOption: {
            display: 'flex',
            alignItems: 'center',
            padding: 20,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 12,
            '& + &': {
                marginTop: 20
            }
        },
        optionTexts: {
            marginRight: 'auto',
            marginLeft: theme.spacing(2)
        },
        button: {
            width: 90,
            flexShink: 0
        },
        optionName: {
            fontSize: 16
        },
        optionDescription: {
            fontSize: 12,
            color: '#7B8192'
        },
        optionIcon: {
            height: 48,
            width: 48
        }
    })
);
function CreateImportChooseDialog(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useI18N */ .M1)();
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_5__.useStylesExtends)(useStyles(), props);
    //#region remote controlled dialog logic
    const { openDialog: openCreateWalletDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_5__.useRemoteControlledDialog)(_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.createWalletDialogUpdated */ .R.events.createWalletDialogUpdated);
    //#endregion
    const { open , closeDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_5__.useRemoteControlledDialog)(_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.createImportWalletDialogUpdated */ .R.events.createImportWalletDialogUpdated);
    const { openDialog: openImportDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_5__.useRemoteControlledDialog)(_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.importWalletDialogUpdated */ .R.events.importWalletDialogUpdated);
    const toCreateWallet = ()=>{
        openCreateWalletDialog();
        closeDialog();
    };
    const toImportWallet = ()=>{
        openImportDialog();
        closeDialog();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__/* .InjectedDialog */ .F, {
        open: open,
        onClose: closeDialog,
        title: t('plugin_wallet_create_import_choose'),
        maxWidth: "sm",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                    className: classes.walletOption,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_Image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                            src: new URL(/* asset import */ __webpack_require__(23543), __webpack_require__.b).toString(),
                            height: 48,
                            width: 48,
                            className: classes.optionIcon
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                            className: classes.optionTexts,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                                    variant: "h2",
                                    component: "h2",
                                    className: classes.optionName,
                                    children: t('plugin_wallet_create_a_new_wallet')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                                    variant: "body1",
                                    className: classes.optionDescription,
                                    children: t('plugin_wallet_create_a_new_wallet_description')
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            className: classes.button,
                            variant: "contained",
                            size: "small",
                            onClick: toCreateWallet,
                            children: t('plugin_wallet_setup_create')
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                    className: classes.walletOption,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_Image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                            src: new URL(/* asset import */ __webpack_require__(6301), __webpack_require__.b).toString(),
                            height: 48,
                            width: 48,
                            className: classes.optionIcon
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                            className: classes.optionTexts,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                                    variant: "h2",
                                    component: "h2",
                                    className: classes.optionName,
                                    children: t('plugin_wallet_import_wallet')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                                    variant: "body1",
                                    className: classes.optionDescription,
                                    children: t('plugin_wallet_import_wallet_description')
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            className: classes.button,
                            variant: "contained",
                            size: "small",
                            onClick: toImportWallet,
                            children: t('plugin_wallet_setup_import')
                        })
                    ]
                })
            ]
        })
    }));
}


/***/ }),

/***/ 31903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ CreateWalletDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ./src/plugins/Wallet/constants.ts
var constants = __webpack_require__(4111);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/useTheme.js
var useTheme = __webpack_require__(7931);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(87239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(98569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(32027);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Refresh.js
var Refresh = __webpack_require__(74881);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/CreateWalletDialog/StepNameAndWords.tsx







const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        top: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(2, 0, 1)
        },
        bottom: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(4, 0, 0)
        },
        input: {
            width: '100%'
        },
        card: {
            position: 'relative',
            minHeight: 140,
            display: 'flex',
            flexFlow: 'row wrap',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly'
        },
        cardButton: {
            padding: theme.spacing(1, 2, 3),
            backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.grey[50]
        },
        cardTextfield: {
            justifyContent: 'space-between'
        },
        word: {
            width: 101,
            minWidth: 101,
            whiteSpace: 'nowrap',
            marginTop: theme.spacing(2)
        },
        wordButton: {
            backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.common.white
        },
        confirmation: {
            fontSize: 12,
            lineHeight: 1.75
        },
        warning: {
            marginTop: theme.spacing(2)
        }
    })
);
const StepNameAndWords = ({ name , words , onNameChange , onRefreshWords , onSubmit ,  })=>{
    const { classes  } = useStyles();
    const theme = (0,useTheme/* default */.Z)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const [confirmed, setConfirmed] = (0,react.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        className: classes.input,
                        helperText: (0,utils/* checkInputLengthExceed */.Se)(name) ? t('input_length_exceed_prompt', {
                            name: t('wallet_name').toLowerCase(),
                            length: utils/* WALLET_OR_PERSONA_NAME_MAX_LEN */.YU
                        }) : undefined,
                        required: true,
                        autoFocus: true,
                        label: t('wallet_name'),
                        value: name,
                        onChange: (e)=>onNameChange(e.target.value)
                        ,
                        variant: "outlined"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.top,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                children: "Mnemonic"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.Z, {
                                }),
                                onClick: onRefreshWords,
                                children: t('refresh')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                        className: classnames_default()(classes.card, classes.cardButton),
                        elevation: 0,
                        variant: theme.palette.mode === 'dark' ? 'outlined' : 'elevation',
                        children: words.map((word, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classnames_default()(classes.word, classes.wordButton),
                                variant: "text",
                                children: word
                            }, i)
                        )
                    })
                ]
            }),
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
                        alignItems: 'flex-start'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.confirmation,
                        variant: "body2",
                        children: "I have securely written down my mnemonic word, I understand that lost mnemonic word cannot be recovered."
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.bottom,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "contained",
                    fullWidth: true,
                    disabled: !name || !confirmed,
                    onClick: onSubmit,
                    children: t('plugin_wallet_setup_create')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.warning,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                    severity: "info",
                    color: "warning",
                    children: "Please properly back up your account’s mnemonic words."
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/CreateWalletDialog/StepVerify.tsx





const StepVerify_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        bottom: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(4, 0, 0)
        },
        description: {
        },
        card: {
            position: 'relative',
            minHeight: 140,
            display: 'flex',
            flexFlow: 'row wrap',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly'
        },
        cardTextfield: {
            justifyContent: 'space-between'
        },
        word: {
            width: 101,
            minWidth: 101,
            whiteSpace: 'nowrap',
            marginTop: theme.spacing(2)
        },
        wordTextfield: {
            width: 110
        }
    })
);
const StepVerify = ({ wordsMatched , puzzleWords , indexes , onBack , onUpdateAnswerWords , onSubmit ,  })=>{
    const { classes  } = StepVerify_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.description,
                children: t('plugin_wallet_setup_description_verify')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                className: classnames_default()(classes.card, classes.cardTextfield),
                elevation: 0,
                children: puzzleWords.map((word, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        className: classnames_default()(classes.word, classes.wordTextfield),
                        size: "small",
                        value: word,
                        autoFocus: indexes.sort((a, z)=>a - z
                        ).indexOf(i) === 0,
                        disabled: !indexes.includes(i),
                        variant: "outlined",
                        onChange: (ev)=>onUpdateAnswerWords(ev.target.value, indexes.indexOf(i))
                        ,
                        children: word
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.bottom,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        fullWidth: true,
                        color: "primary",
                        variant: "text",
                        onClick: onBack,
                        style: {
                            marginRight: 16
                        },
                        children: t('plugin_wallet_setup_back')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        fullWidth: true,
                        disabled: !wordsMatched,
                        onClick: onSubmit,
                        children: t('plugin_wallet_setup_verify')
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/CreateWalletDialog/index.tsx












var CreateWalletStep;
(function(CreateWalletStep1) {
    CreateWalletStep1[CreateWalletStep1["NameAndWords"] = 0] = "NameAndWords";
    CreateWalletStep1[CreateWalletStep1["Verify"] = 1] = "Verify";
})(CreateWalletStep || (CreateWalletStep = {
}));
const CreateWalletDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(5, 4.5)
        },
        top: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(2, 0, 1)
        },
        bottom: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(4, 0, 0)
        },
        description: {
        },
        input: {
            width: '100%'
        },
        card: {
            position: 'relative',
            minHeight: 140,
            display: 'flex',
            flexFlow: 'row wrap',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly'
        },
        cardButton: {
            padding: theme.spacing(1, 2, 3),
            backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.grey[50]
        },
        cardTextfield: {
            justifyContent: 'space-between'
        },
        word: {
            width: 101,
            minWidth: 101,
            whiteSpace: 'nowrap',
            marginTop: theme.spacing(2)
        },
        wordButton: {
            backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.common.white
        },
        wordTextfield: {
            width: 110
        },
        confirmation: {
            fontSize: 12,
            lineHeight: 1.75
        },
        warning: {
            marginTop: theme.spacing(2)
        }
    })
);
function CreateWalletDialog() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CreateWalletDialog_useStyles();
    const [step, setStep] = (0,react.useState)(CreateWalletStep.NameAndWords);
    const [name, setName] = (0,react.useState)('');
    //#region create mnemonic words
    const [words, puzzleWords, indexes, answerCallback, resetCallback, refreshCallback] = (0,web3_shared_src/* useMnemonicWordsPuzzle */.hx3)();
    //#endregion
    //#region remote controlled dialog logic
    const { open , closeDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.createWalletDialogUpdated */.R.events.createWalletDialogUpdated, (ev)=>{
        if (!ev.open) return;
        if (!ev.name) return;
        setName(ev.name);
    });
    const onClose = (0,react.useCallback)(async ()=>{
        closeDialog();
        await (0,shared_src.delay)(300);
        setName('');
        setStep(CreateWalletStep.NameAndWords);
        refreshCallback();
    }, [
        refreshCallback
    ]);
    //#endregion
    const goVerify = (0,react.useCallback)(()=>{
        setStep(CreateWalletStep.Verify);
    }, []);
    const backToNameAndWords = (0,react.useCallback)(()=>{
        setStep(CreateWalletStep.NameAndWords);
        resetCallback();
    }, [
        resetCallback
    ]);
    const onSubmit = (0,shared_src.useSnackbarCallback)(async ()=>{
        await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
            name,
            path: `${constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`,
            mnemonic: words,
            passphrase: ''
        });
        await messages/* WalletRPC.addPhrase */.V.addPhrase({
            path: constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB,
            mnemonic: words,
            passphrase: ''
        });
    }, [
        name,
        words
    ], onClose);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        title: t('plugin_wallet_setup_title_create'),
        maxWidth: "sm",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                step === CreateWalletStep.NameAndWords && /*#__PURE__*/ (0,jsx_runtime.jsx)(StepNameAndWords, {
                    name: name,
                    words: words,
                    onNameChange: setName,
                    onRefreshWords: refreshCallback,
                    onSubmit: goVerify
                }),
                step === CreateWalletStep.Verify && /*#__PURE__*/ (0,jsx_runtime.jsx)(StepVerify, {
                    wordsMatched: words.join(' ') === puzzleWords.join(' '),
                    puzzleWords: puzzleWords,
                    indexes: indexes,
                    onUpdateAnswerWords: answerCallback,
                    onBack: backToNameAndWords,
                    onSubmit: onSubmit
                })
            ]
        })
    }));
}


/***/ }),

/***/ 95070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ ImportWalletDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx
var Base = __webpack_require__(99983);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(98051);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ImportWalletDialog/MnemonicTab.tsx




const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        card: {
            position: 'relative',
            minHeight: 140,
            display: 'flex',
            flexFlow: 'row wrap',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly'
        },
        cardButton: {
            padding: theme.spacing(1, 2, 3),
            backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.grey[50]
        },
        cardTextfield: {
            justifyContent: 'space-between'
        },
        word: {
            width: 101,
            minWidth: 101,
            whiteSpace: 'nowrap',
            marginTop: theme.spacing(2)
        },
        wordButton: {
            backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.common.white
        },
        wordTextfield: {
            width: 110
        }
    })
);
const MnemonicTab = ({ words , onChange  })=>{
    const { classes  } = useStyles();
    const handleChange = (newWord, index)=>{
        const newWords = words.map((word, i)=>{
            return i === index ? newWord : word;
        });
        onChange(newWords);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classnames_default()(classes.card, classes.cardTextfield),
        elevation: 0,
        children: words.map((word, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                className: classnames_default()(classes.word, classes.wordTextfield),
                placeholder: String(i + 1),
                size: "small",
                value: word,
                autoFocus: i === 0,
                variant: "outlined",
                onChange: (ev)=>handleChange(ev.target.value, i)
                ,
                children: word
            }, i)
        )
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useDebounce.js
var useDebounce = __webpack_require__(59603);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ImportWalletDialog/FromPrivateKey.tsx







const FromPrivateKey_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        walletName: {
            width: '100%'
        },
        textField: {
            width: '100%',
            minHeight: 97
        }
    })
);
const FromPrivateKey = ({ onRecover  })=>{
    const { classes  } = FromPrivateKey_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const [valid, setValid] = (0,react.useState)(true);
    const [privateKey, setPrivateKey] = (0,react.useState)('');
    const handleChange = (0,react.useCallback)((evt)=>{
        const text = evt.target.value;
        setPrivateKey(text);
    }, []);
    (0,useDebounce/* default */.Z)(()=>{
        if (!privateKey) {
            setValid(true);
            return;
        }
        messages/* WalletRPC.recoverWalletFromPrivateKey */.V.recoverWalletFromPrivateKey(privateKey).then(({ address , privateKeyValid  })=>{
            setValid(privateKeyValid);
            onRecover({
                address,
                privateKey,
                privateKeyValid
            });
        });
    }, 500, [
        privateKey
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
            className: classes.textField,
            multiline: true,
            error: !valid,
            helperText: !valid ? t('plugin_wallet_import_private_key_invalid_warning') : '',
            placeholder: t('plugin_wallet_import_private_key_placeholder'),
            value: privateKey,
            onChange: handleChange
        })
    }));
};

// EXTERNAL MODULE: ./src/plugins/Wallet/constants.ts
var constants = __webpack_require__(4111);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ImportWalletDialog/index.tsx













const ImportWalletDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(4, 5, 1)
        },
        title: {
            fontSize: 18,
            fontWeight: 500,
            color: '#15181B',
            padding: theme.spacing(0, 1)
        },
        walletName: {
            width: '100%'
        },
        dialogActions: {
            alignItems: 'center',
            padding: theme.spacing(3, 5)
        },
        actionButton: {
        },
        headCell: {
            borderBottom: 'none',
            backgroundColor: '#F3F3F4'
        },
        bodyCell: {
            borderBottom: 'none',
            padding: '0 10px'
        }
    })
);
const BLANK_WORDS = Array.from({
    length: 12
}).fill('');
function ImportWalletDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [name, setName] = (0,react.useState)('');
    const classes = (0,shared_src.useStylesExtends)(ImportWalletDialog_useStyles(), props);
    const [walletFromPrivateKey, setWalletFromPrivateKey] = (0,react.useState)({
    });
    const { open , closeDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.importWalletDialogUpdated */.R.events.importWalletDialogUpdated);
    const { openDialog: openCreateImportDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.createImportWalletDialogUpdated */.R.events.createImportWalletDialogUpdated);
    const [words, setWords] = (0,react.useState)(BLANK_WORDS);
    const tabState = (0,react.useState)(0);
    const tabs = (0,react.useMemo)(()=>[
            {
                label: t('mnemonic_words'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicTab, {
                    words: words,
                    onChange: setWords
                })
            },
            {
                label: t('private_key'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FromPrivateKey, {
                    onRecover: setWalletFromPrivateKey
                })
            }, 
        ]
    , [
        words
    ]);
    const importWallet = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                className: classes.walletName,
                inputProps: {
                    maxLength: 12
                },
                label: t('wallet_name'),
                placeholder: t('plugin_wallet_name_placeholder'),
                value: name,
                onChange: (e)=>setName(e.target.value)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                tabs: tabs,
                state: tabState
            })
        ]
    });
    const resetState = ()=>{
        setWords((list)=>list.map(()=>''
            )
        );
        setName('');
    };
    const backToPrevious = ()=>{
        closeDialog();
        resetState();
        openCreateImportDialog();
    };
    const handleImport = (0,Base/* useSnackbarCallback */.iD)(async ()=>{
        switch(tabState[0]){
            case 0:
                await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
                    name,
                    path: `${constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`,
                    mnemonic: words,
                    passphrase: ''
                });
                try {
                    await messages/* WalletRPC.addPhrase */.V.addPhrase({
                        path: constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB,
                        mnemonic: words,
                        passphrase: ''
                    });
                } catch (error) {
                    if (error instanceof Error && error.message !== 'Add exists phrase.') {
                        throw error;
                    }
                }
                break;
            case 1:
                if (!walletFromPrivateKey.privateKeyValid) {
                    return;
                }
                await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
                    name,
                    address: walletFromPrivateKey.address,
                    _private_key_: walletFromPrivateKey.privateKey
                });
                break;
        }
    }, [
        tabState[0],
        name,
        words,
        walletFromPrivateKey.privateKeyValid,
        walletFromPrivateKey.privateKey
    ], ()=>{
        closeDialog();
        resetState();
    });
    const importable = (0,react.useMemo)(()=>{
        if (!name) {
            return false;
        }
        switch(tabState[0]){
            case 0:
                return words.filter(Boolean).length === 12;
            case 1:
                return !!walletFromPrivateKey.privateKeyValid;
        }
        return false;
    }, [
        name,
        tabState[0],
        words,
        walletFromPrivateKey.privateKeyValid
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: closeDialog,
        title: t('import_wallet'),
        maxWidth: "sm",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: importWallet
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.dialogActions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.actionButton,
                        variant: "contained",
                        fullWidth: true,
                        onClick: backToPrevious,
                        children: t('plugin_wallet_import_wallet_previous')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.actionButton,
                        fullWidth: true,
                        variant: "contained",
                        onClick: handleImport,
                        disabled: !importable,
                        children: t('plugin_wallet_import_wallet_import')
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 25984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25933);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40587);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49283);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80050);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
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
            backgroundColor: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).twitterBackground
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
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__.useStylesExtends)(useStyles(), props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        className: classes.root,
        elevation: 0,
        onClick: props.onClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            className: classes.content,
            ...props.ButtonBaseProps,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: classes.logo,
                    children: props.logo
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                    className: classes.name,
                    variant: "h3",
                    children: props.name
                }),
                props.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                    className: classes.description,
                    color: "textSecondary",
                    variant: "body2",
                    children: props.description
                })
            ]
        })
    }));
}


/***/ }),

/***/ 39183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ WalletRenameWalletDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69476);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97448);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37058);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35313);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70988);
/* harmony import */ var _utils_i18n_next_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59450);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80050);
/* harmony import */ var _extension_options_page_DashboardDialogs_Base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99983);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2, 4, 3)
        },
        dialogActions: {
            alignItems: 'center',
            padding: theme.spacing(3, 5)
        },
        actionButton: {
        }
    })
);
function WalletRenameWalletDialog() {
    const { t  } = (0,_utils_i18n_next_ui__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M)();
    const { classes  } = useStyles();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [wallet, setWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { open , setDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__.useRemoteControlledDialog)(_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletRenameDialogUpdated */ .R.events.walletRenameDialogUpdated);
    _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletRenameDialogUpdated.on */ .R.events.walletRenameDialogUpdated.on((data)=>{
        if (data.open) {
            var ref;
            var ref1;
            setName((ref1 = (ref = data.wallet) === null || ref === void 0 ? void 0 : ref.name) !== null && ref1 !== void 0 ? ref1 : '');
            setWallet(data.wallet);
        }
    });
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setDialog({
            open: false,
            wallet: null
        });
    }, []);
    const handleRename = (0,_extension_options_page_DashboardDialogs_Base__WEBPACK_IMPORTED_MODULE_7__/* .useSnackbarCallback */ .iD)(()=>{
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                className: classes.content,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                className: classes.dialogActions,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                        fullWidth: true,
                        color: "inherit",
                        variant: "outlined",
                        onClick: handleClose,
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                        className: classes.actionButton,
                        variant: "contained",
                        onClick: handleRename,
                        disabled: !name,
                        fullWidth: true,
                        children: "Confirm"
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 88573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ WalletRiskWarningDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69476);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88460);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57703);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37058);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70988);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37186);
/* harmony import */ var _material_ui_icons_PriorityHigh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60828);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34539);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35313);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80050);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6615);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8286);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83071);














const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        paper: {
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).redMain
        },
        buttons: {
            padding: theme.spacing(3)
        },
        button: {
            borderRadius: 9999
        },
        cancel: {
            backgroundColor: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).twitterBackground,
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
            backgroundColor: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).twitterBackground,
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
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const account = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_7__/* .useAccount */ .mAM)();
    const { enqueueSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useSnackbar */ .Ds)();
    const { open , setDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__.useRemoteControlledDialog)(_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.walletRiskWarningDialogUpdated */ .R.events.walletRiskWarningDialogUpdated);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async ()=>{
        if (account) await _messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletRPC.setRiskWarningConfirmed */ .V.setRiskWarningConfirmed(account, false);
        setDialog({
            open: false,
            type: 'cancel'
        });
    }, [
        setDialog
    ]);
    const onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async ()=>{
        if (!account) {
            enqueueSnackbar(t('wallet_risk_warning_no_select_wallet'), {
                variant: 'error',
                preventDuplicate: true
            });
            return;
        }
        await _messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletRPC.confirmRiskWarning */ .V.confirmRiskWarning(account);
        setDialog({
            open: false,
            type: 'confirm'
        });
    }, [
        enqueueSnackbar,
        account,
        setDialog
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_2__/* .InjectedDialog */ .F, {
        title: t('wallet_risk_warning_dialog_title'),
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                    className: classes.paper,
                    elevation: 0,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.icon,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
                                className: classes.avatar,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_PriorityHigh__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
                                    style: {
                                        fontSize: 58,
                                        color: 'rgba(255, 95, 95, 1)'
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                            className: classes.title,
                            align: "center",
                            variant: "h4",
                            children: t('wallet_risk_warning_dialog_title')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                            variant: "body2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_15__/* .Trans */ .c, {
                                i18nKey: "multiline",
                                children: t('wallet_risk_warning_content')
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                            elevation: 0,
                            className: classes.wallet,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: "Wallet"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    children: account
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                className: classes.buttons,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.button, classes.cancel),
                        fullWidth: true,
                        variant: "outlined",
                        onClick: onClose,
                        size: "large",
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_9__/* .ActionButtonPromise */ .Zc, {
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

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.7119.js
/***/ 83694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ SelectProviderDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69739);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(55432);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(30581);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ImageList/ImageList.js + 1 modules
var ImageList = __webpack_require__(95248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ImageListItem/ImageListItem.js + 1 modules
var ImageListItem = __webpack_require__(93148);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210630045432-e05621c/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(24982);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(50162);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(22209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(1868);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(35071);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/Provider.tsx
var Provider = __webpack_require__(59485);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(25283);
;// CONCATENATED MODULE: ./src/resources/MetaMaskIcon.tsx


function MetaMaskIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            viewBox: "0 0 397 355",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                transform: "translate(-1 -1)",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m114.622644 327.195472 52.004717 13.810198v-18.05949l4.245283-4.249292h29.716982v21.246459 14.872523h-31.839624l-39.268868-16.997169z",
                        fill: "#cdbdb2"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m199.528305 327.195472 50.943397 13.810198v-18.05949l4.245283-4.249292h29.716981v21.246459 14.872523h-31.839623l-39.268868-16.997169z",
                        fill: "#cdbdb2",
                        transform: "matrix(-1 0 0 1 483.96227 0)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m170.872644 287.889523-4.245283 35.056657 5.306604-4.249292h55.18868l6.367925 4.249292-4.245284-35.056657-8.490565-5.311615-42.452832 1.062323z",
                        fill: "#393939"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m142.216984 50.9915022 25.471698 59.4900858 11.674528 173.158643h41.391511l12.735849-173.158643 23.349056-59.4900858z",
                        fill: "#f89c35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m30.7783023 181.657226-29.71698153 86.048161 74.29245393-4.249293h47.7594343v-37.181303l-2.122641-76.487253-10.613208 8.498583z",
                        fill: "#f89d35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m87.0283032 191.218134 87.0283028 2.124646-9.551886 44.617563-41.391511-10.623229z",
                        fill: "#d87c30"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m87.0283032 192.280457 36.0849058 33.994334v33.994334z",
                        fill: "#ea8d3a"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m123.113209 227.337114 42.452831 10.623229 13.79717 45.679888-9.551886 5.311615-46.698115-27.620398z",
                        fill: "#f89d35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m123.113209 261.331448-8.490565 65.864024 56.25-39.305949z",
                        fill: "#eb8f35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m174.056606 193.34278 5.306604 90.297451-15.919812-46.211049z",
                        fill: "#ea8e3a"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m74.2924539 262.393771 48.8207551-1.062323-8.490565 65.864024z",
                        fill: "#d87c30"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m24.4103777 355.878193 90.2122663-28.682721-40.3301901-64.801701-73.23113313 5.311616z",
                        fill: "#eb8f35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m167.688682 110.481588-45.636793 38.243627-35.0235858 42.492919 87.0283028 3.186969z",
                        fill: "#e8821e"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m114.622644 327.195472 56.25-39.305949-4.245283 33.994334v19.121813l-38.207548-7.43626z",
                        fill: "#dfcec3"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m229.245286 327.195472 55.18868-39.305949-4.245283 33.994334v19.121813l-38.207548-7.43626z",
                        fill: "#dfcec3",
                        transform: "matrix(-1 0 0 1 513.679252 0)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m132.665096 212.464593-11.674528 24.433427 41.39151-10.623229z",
                        fill: "#393939",
                        transform: "matrix(-1 0 0 1 283.372646 0)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m23.349057 1.06232296 144.339625 109.41926504-24.410378-59.4900858z",
                        fill: "#e88f35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m23.349057 1.06232296-19.10377392 58.42776294 10.61320772 63.7393781-7.42924541 4.249292 10.61320771 9.560906-8.49056617 7.436261 11.67452847 10.623229-7.4292454 6.373938 16.9811323 21.246459 79.5990577-24.433428c38.915096-31.161473 58.018869-47.096318 57.311322-47.804533-.707548-.708215-48.820756-37.1813036-144.339625-109.41926504z",
                        fill: "#8e5a30"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                        transform: "matrix(-1 0 0 1 399.056611 0)",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m30.7783023 181.657226-29.71698153 86.048161 74.29245393-4.249293h47.7594343v-37.181303l-2.122641-76.487253-10.613208 8.498583z",
                                fill: "#f89d35"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m87.0283032 191.218134 87.0283028 2.124646-9.551886 44.617563-41.391511-10.623229z",
                                fill: "#d87c30"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m87.0283032 192.280457 36.0849058 33.994334v33.994334z",
                                fill: "#ea8d3a"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m123.113209 227.337114 42.452831 10.623229 13.79717 45.679888-9.551886 5.311615-46.698115-27.620398z",
                                fill: "#f89d35"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m123.113209 261.331448-8.490565 65.864024 55.18868-38.243626z",
                                fill: "#eb8f35"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m174.056606 193.34278 5.306604 90.297451-15.919812-46.211049z",
                                fill: "#ea8e3a"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m74.2924539 262.393771 48.8207551-1.062323-8.490565 65.864024z",
                                fill: "#d87c30"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m24.4103777 355.878193 90.2122663-28.682721-40.3301901-64.801701-73.23113313 5.311616z",
                                fill: "#eb8f35"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m167.688682 110.481588-45.636793 38.243627-35.0235858 42.492919 87.0283028 3.186969z",
                                fill: "#e8821e"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m132.665096 212.464593-11.674528 24.433427 41.39151-10.623229z",
                                fill: "#393939",
                                transform: "matrix(-1 0 0 1 283.372646 0)"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m23.349057 1.06232296 144.339625 109.41926504-24.410378-59.4900858z",
                                fill: "#e88f35"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m23.349057 1.06232296-19.10377392 58.42776294 10.61320772 63.7393781-7.42924541 4.249292 10.61320771 9.560906-8.49056617 7.436261 11.67452847 10.623229-7.4292454 6.373938 16.9811323 21.246459 79.5990577-24.433428c38.915096-31.161473 58.018869-47.096318 57.311322-47.804533-.707548-.708215-48.820756-37.1813036-144.339625-109.41926504z",
                                fill: "#8e5a30"
                            })
                        ]
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(98556);
;// CONCATENATED MODULE: ./src/resources/WalletConnectIcon.tsx
=======
/***/ 30849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5215.js

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ SelectProviderDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ImageList/ImageList.js + 1 modules
var ImageList = __webpack_require__(75661);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ImageListItem/ImageListItem.js + 1 modules
var ImageListItem = __webpack_require__(58219);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(11399);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(27019);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(59450);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/Provider.tsx
var Provider = __webpack_require__(25984);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(12445);
;// CONCATENATED MODULE: ./src/resources/MetaMaskIcon.tsx


function MetaMaskIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            viewBox: "0 0 397 355",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                transform: "translate(-1 -1)",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m114.622644 327.195472 52.004717 13.810198v-18.05949l4.245283-4.249292h29.716982v21.246459 14.872523h-31.839624l-39.268868-16.997169z",
                        fill: "#cdbdb2"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m199.528305 327.195472 50.943397 13.810198v-18.05949l4.245283-4.249292h29.716981v21.246459 14.872523h-31.839623l-39.268868-16.997169z",
                        fill: "#cdbdb2",
                        transform: "matrix(-1 0 0 1 483.96227 0)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m170.872644 287.889523-4.245283 35.056657 5.306604-4.249292h55.18868l6.367925 4.249292-4.245284-35.056657-8.490565-5.311615-42.452832 1.062323z",
                        fill: "#393939"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m142.216984 50.9915022 25.471698 59.4900858 11.674528 173.158643h41.391511l12.735849-173.158643 23.349056-59.4900858z",
                        fill: "#f89c35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m30.7783023 181.657226-29.71698153 86.048161 74.29245393-4.249293h47.7594343v-37.181303l-2.122641-76.487253-10.613208 8.498583z",
                        fill: "#f89d35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m87.0283032 191.218134 87.0283028 2.124646-9.551886 44.617563-41.391511-10.623229z",
                        fill: "#d87c30"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m87.0283032 192.280457 36.0849058 33.994334v33.994334z",
                        fill: "#ea8d3a"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m123.113209 227.337114 42.452831 10.623229 13.79717 45.679888-9.551886 5.311615-46.698115-27.620398z",
                        fill: "#f89d35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m123.113209 261.331448-8.490565 65.864024 56.25-39.305949z",
                        fill: "#eb8f35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m174.056606 193.34278 5.306604 90.297451-15.919812-46.211049z",
                        fill: "#ea8e3a"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m74.2924539 262.393771 48.8207551-1.062323-8.490565 65.864024z",
                        fill: "#d87c30"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m24.4103777 355.878193 90.2122663-28.682721-40.3301901-64.801701-73.23113313 5.311616z",
                        fill: "#eb8f35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m167.688682 110.481588-45.636793 38.243627-35.0235858 42.492919 87.0283028 3.186969z",
                        fill: "#e8821e"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m114.622644 327.195472 56.25-39.305949-4.245283 33.994334v19.121813l-38.207548-7.43626z",
                        fill: "#dfcec3"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m229.245286 327.195472 55.18868-39.305949-4.245283 33.994334v19.121813l-38.207548-7.43626z",
                        fill: "#dfcec3",
                        transform: "matrix(-1 0 0 1 513.679252 0)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m132.665096 212.464593-11.674528 24.433427 41.39151-10.623229z",
                        fill: "#393939",
                        transform: "matrix(-1 0 0 1 283.372646 0)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m23.349057 1.06232296 144.339625 109.41926504-24.410378-59.4900858z",
                        fill: "#e88f35"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "m23.349057 1.06232296-19.10377392 58.42776294 10.61320772 63.7393781-7.42924541 4.249292 10.61320771 9.560906-8.49056617 7.436261 11.67452847 10.623229-7.4292454 6.373938 16.9811323 21.246459 79.5990577-24.433428c38.915096-31.161473 58.018869-47.096318 57.311322-47.804533-.707548-.708215-48.820756-37.1813036-144.339625-109.41926504z",
                        fill: "#8e5a30"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                        transform: "matrix(-1 0 0 1 399.056611 0)",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m30.7783023 181.657226-29.71698153 86.048161 74.29245393-4.249293h47.7594343v-37.181303l-2.122641-76.487253-10.613208 8.498583z",
                                fill: "#f89d35"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m87.0283032 191.218134 87.0283028 2.124646-9.551886 44.617563-41.391511-10.623229z",
                                fill: "#d87c30"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m87.0283032 192.280457 36.0849058 33.994334v33.994334z",
                                fill: "#ea8d3a"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m123.113209 227.337114 42.452831 10.623229 13.79717 45.679888-9.551886 5.311615-46.698115-27.620398z",
                                fill: "#f89d35"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m123.113209 261.331448-8.490565 65.864024 55.18868-38.243626z",
                                fill: "#eb8f35"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m174.056606 193.34278 5.306604 90.297451-15.919812-46.211049z",
                                fill: "#ea8e3a"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m74.2924539 262.393771 48.8207551-1.062323-8.490565 65.864024z",
                                fill: "#d87c30"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m24.4103777 355.878193 90.2122663-28.682721-40.3301901-64.801701-73.23113313 5.311616z",
                                fill: "#eb8f35"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m167.688682 110.481588-45.636793 38.243627-35.0235858 42.492919 87.0283028 3.186969z",
                                fill: "#e8821e"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m132.665096 212.464593-11.674528 24.433427 41.39151-10.623229z",
                                fill: "#393939",
                                transform: "matrix(-1 0 0 1 283.372646 0)"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m23.349057 1.06232296 144.339625 109.41926504-24.410378-59.4900858z",
                                fill: "#e88f35"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "m23.349057 1.06232296-19.10377392 58.42776294 10.61320772 63.7393781-7.42924541 4.249292 10.61320771 9.560906-8.49056617 7.436261 11.67452847 10.623229-7.4292454 6.373938 16.9811323 21.246459 79.5990577-24.433428c38.915096-31.161473 58.018869-47.096318 57.311322-47.804533-.707548-.708215-48.820756-37.1813036-144.339625-109.41926504z",
                                fill: "#8e5a30"
                            })
                        ]
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(75388);
;// CONCATENATED MODULE: ./src/resources/WalletConnectIcon.tsx


function WalletConnectIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 512 512",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "a",
                    cx: "0%",
                    cy: "50%",
                    r: "100%",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0",
                            stopColor: "#5d9df6"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#006fff"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "m256 0c141.384896 0 256 114.615104 256 256s-114.615104 256-256 256-256-114.615104-256-256 114.615104-256 256-256z",
                            fill: "url(#a)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "m64.6917558 37.7088298c51.5328072-50.2784397 135.0839942-50.2784397 186.6167992 0l6.202057 6.0510906c2.57664 2.5139218 2.57664 6.5897948 0 9.1037177l-21.215998 20.6995759c-1.288321 1.2569619-3.3771 1.2569619-4.665421 0l-8.534766-8.3270205c-35.950573-35.0754962-94.237969-35.0754962-130.188544 0l-9.1400282 8.9175519c-1.2883217 1.2569609-3.3771016 1.2569609-4.6654208 0l-21.2159973-20.6995759c-2.5766403-2.5139229-2.5766403-6.5897958 0-9.1037177zm230.4934852 42.8089117 18.882279 18.4227262c2.576627 2.5139103 2.576642 6.5897593.000032 9.1036863l-85.141498 83.070358c-2.576623 2.513941-6.754182 2.513969-9.33084.000066-.00001-.00001-.000023-.000023-.000033-.000034l-60.428256-58.957451c-.64416-.628481-1.68855-.628481-2.33271 0-.000004.000004-.000008.000007-.000012.000011l-60.4269683 58.957408c-2.5766141 2.513947-6.7541746 2.51399-9.3308408.000092-.0000151-.000014-.0000309-.000029-.0000467-.000046l-85.14386774-83.071463c-2.57663928-2.513921-2.57663928-6.589795 0-9.1037163l18.88231264-18.4226955c2.5766393-2.5139222 6.7541993-2.5139222 9.3308397 0l60.4291347 58.9582758c.6441608.62848 1.6885495.62848 2.3327103 0 .0000095-.000009.0000182-.000018.0000277-.000025l60.4261065-58.9582508c2.576581-2.51398 6.754142-2.5140743 9.33084-.0002103.000037.0000354.000072.0000709.000107.0001063l60.429056 58.9583548c.644159.628479 1.688549.628479 2.332709 0l60.428079-58.9571925c2.57664-2.5139231 6.754199-2.5139231 9.330839 0z",
                            fill: "#fff",
                            fillRule: "nonzero",
                            transform: "translate(98 160)"
                        })
                    ]
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/extension/options-page/Route.ts
var Route = __webpack_require__(70791);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ./src/components/shared/NetworkIcon.tsx
var NetworkIcon = __webpack_require__(96371);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(93975);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/index.tsx

function WalletConnectIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 512 512",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "a",
                    cx: "0%",
                    cy: "50%",
                    r: "100%",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0",
                            stopColor: "#5d9df6"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#006fff"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "m256 0c141.384896 0 256 114.615104 256 256s-114.615104 256-256 256-256-114.615104-256-256 114.615104-256 256-256z",
                            fill: "url(#a)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "m64.6917558 37.7088298c51.5328072-50.2784397 135.0839942-50.2784397 186.6167992 0l6.202057 6.0510906c2.57664 2.5139218 2.57664 6.5897948 0 9.1037177l-21.215998 20.6995759c-1.288321 1.2569619-3.3771 1.2569619-4.665421 0l-8.534766-8.3270205c-35.950573-35.0754962-94.237969-35.0754962-130.188544 0l-9.1400282 8.9175519c-1.2883217 1.2569609-3.3771016 1.2569609-4.6654208 0l-21.2159973-20.6995759c-2.5766403-2.5139229-2.5766403-6.5897958 0-9.1037177zm230.4934852 42.8089117 18.882279 18.4227262c2.576627 2.5139103 2.576642 6.5897593.000032 9.1036863l-85.141498 83.070358c-2.576623 2.513941-6.754182 2.513969-9.33084.000066-.00001-.00001-.000023-.000023-.000033-.000034l-60.428256-58.957451c-.64416-.628481-1.68855-.628481-2.33271 0-.000004.000004-.000008.000007-.000012.000011l-60.4269683 58.957408c-2.5766141 2.513947-6.7541746 2.51399-9.3308408.000092-.0000151-.000014-.0000309-.000029-.0000467-.000046l-85.14386774-83.071463c-2.57663928-2.513921-2.57663928-6.589795 0-9.1037163l18.88231264-18.4226955c2.5766393-2.5139222 6.7541993-2.5139222 9.3308397 0l60.4291347 58.9582758c.6441608.62848 1.6885495.62848 2.3327103 0 .0000095-.000009.0000182-.000018.0000277-.000025l60.4261065-58.9582508c2.576581-2.51398 6.754142-2.5140743 9.33084-.0002103.000037.0000354.000072.0000709.000107.0001063l60.429056 58.9583548c.644159.628479 1.688549.628479 2.332709 0l60.428079-58.9571925c2.57664-2.5139231 6.754199-2.5139231 9.330839 0z",
                            fill: "#fff",
                            fillRule: "nonzero",
                            transform: "translate(98 160)"
                        })
                    ]
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(49269);
// EXTERNAL MODULE: ./src/extension/options-page/Route.ts
var Route = __webpack_require__(67099);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(77603);
// EXTERNAL MODULE: ./src/components/shared/NetworkIcon.tsx
var NetworkIcon = __webpack_require__(87099);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(6621);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(77287);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/index.tsx






















<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.7119.js

=======
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5215.js
const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        paper: {
            width: '750px !important',
            maxWidth: 'unset'
        },
        content: {
            padding: theme.spacing(4, 4.5, 2)
        },
        step: {
            flexGrow: 1,
            marginTop: 21,
            '&:first-child': {
                marginTop: 0
            }
        },
        stepTitle: {
            fontSize: 19,
            fontWeight: 'bold'
        },
        stepContent: {
            marginTop: 21
        },
        networkDisabled: {
            opacity: 0.5
        },
        networkList: {
            display: 'flex',
            gap: 32
        },
        networkItem: {
            width: 'auto',
            padding: 0
        },
        iconWrapper: {
            position: 'relative',
            cursor: 'pointer',
            height: 48,
            width: 48,
            borderRadius: 48,
            backgroundColor: (0,src/* getMaskColor */.nb)(theme).twitterBackground
        },
        networkIcon: {
            backgroundColor: (0,src/* getMaskColor */.nb)(theme).twitterBackground
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
        },
        tip: {
            fontSize: 12
        }
    })
);
const networks = [
    web3_shared_src/* NetworkType.Ethereum */.tds.Ethereum,
    utils/* Flags.bsc_enabled */.vU.bsc_enabled ? web3_shared_src/* NetworkType.Binance */.tds.Binance : undefined,
    utils/* Flags.polygon_enabled */.vU.polygon_enabled ? web3_shared_src/* NetworkType.Polygon */.tds.Polygon : undefined,
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.7119.js
    utils/* Flags.arbitrum_enabled */.vU.arbitrum_enabled ? web3_shared_src/* NetworkType.Arbitrum */.tds.Arbitrum : undefined, 
=======
    utils/* Flags.arbitrum_enabled */.vU.arbitrum_enabled ? web3_shared_src/* NetworkType.Arbitrum */.tds.Arbitrum : undefined,
    utils/* Flags.xdai_enabled */.vU.xdai_enabled ? web3_shared_src/* NetworkType.xDai */.tds.xDai : undefined, 
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5215.js
].filter(Boolean);
function SelectProviderDialogUI(props) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const history = (0,react_router/* useHistory */.k6)();
    //#region remote controlled dialog logic
    const { open , closeDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    //#endregion
    //#region wallet status dialog
    const { openDialog: openWalletStatusDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    //#endregion
    //#region select wallet dialog
    const { setDialog: setSelectWalletDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.selectWalletDialogUpdated */.R.events.selectWalletDialogUpdated);
    //#endregion
    //#region create or import wallet dialog
    const { openDialog: openCreateImportDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.createImportWalletDialogUpdated */.R.events.createImportWalletDialogUpdated);
    //#endregion
    //#region connect wallet dialog
    const { setDialog: setConnectWalletDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated);
    //#endregion
    //#region wallet connect QR code dialog
    const { setDialog: setWalletConnectDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated);
    //#endregion
    const wallets = (0,web3_shared_src/* useWallets */.rBi)(web3_shared_src/* ProviderType.Maskbook */.lP_.Maskbook);
    const selectedNetworkType = (0,shared_src.useValueRef)(settings/* currentNetworkSettings */.fX);
    const selectedProviderType = (0,shared_src.useValueRef)(settings/* currentProviderSettings */.t1);
    //#region undetermined network type
    const [undeterminedNetworkType, setUndeterminedNetworkType] = (0,react.useState)(selectedNetworkType);
    (0,react.useEffect)(()=>{
        if (!open) return;
        setUndeterminedNetworkType(selectedNetworkType);
    }, [
        open
    ]);
    //#endregion
    const onConnectProvider = (0,react.useCallback)(async (providerType)=>{
        closeDialog();
        switch(providerType){
            case web3_shared_src/* ProviderType.Maskbook */.lP_.Maskbook:
                // choose a wallet
                if (wallets.length > 0) {
                    setSelectWalletDialog({
                        open: true,
                        networkType: undeterminedNetworkType
                    });
                    return;
                }
                // create a new wallet
                if ((0,umd.isEnvironment)(umd.Environment.ManifestOptions)) history.push(`${Route/* DashboardRoute.Wallets */.q.Wallets}?create=${Date.now()}`);
                else openCreateImportDialog();
                break;
            case web3_shared_src/* ProviderType.MetaMask */.lP_.MetaMask:
            case web3_shared_src/* ProviderType.WalletConnect */.lP_.WalletConnect:
                if (!account || providerType !== selectedProviderType || (0,web3_shared_src/* getChainIdFromNetworkType */.EP9)(undeterminedNetworkType) !== chainId) {
                    setConnectWalletDialog({
                        open: true,
                        providerType,
                        networkType: undeterminedNetworkType
                    });
                }
                break;
            case web3_shared_src/* ProviderType.CustomNetwork */.lP_.CustomNetwork:
                throw new Error('To be implemented.');
            default:
                (0,esm/* unreachable */.t1)(providerType);
        }
    }, [
        account,
        chainId,
        wallets,
        history,
        closeDialog,
        undeterminedNetworkType,
        selectedProviderType,
        openWalletStatusDialog,
        setSelectWalletDialog,
        setWalletConnectDialog, 
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t('plugin_wallet_select_provider_dialog_title'),
        open: open,
        onClose: closeDialog,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.step,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.stepTitle,
                            variant: "h2",
                            component: "h2",
                            children: "1. Choose Network"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                            className: classnames_default()(classes.networkList, classes.stepContent),
                            children: networks.map((network)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                    className: classes.networkItem,
                                    onClick: ()=>{
                                        setUndeterminedNetworkType(network);
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.iconWrapper,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                                                classes: {
                                                    icon: classes.networkIcon
                                                },
                                                networkType: network
                                            }),
                                            undeterminedNetworkType === network && /*#__PURE__*/ (0,jsx_runtime.jsx)(Success/* SuccessIcon */.t, {
                                                className: classes.checkedBadge
                                            })
                                        ]
                                    })
                                }, network)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.step,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.stepTitle,
                            variant: "h2",
                            component: "h2",
                            children: "2. Choose Wallet"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ImageList/* default */.Z, {
                            className: classnames_default()(classes.stepContent, classes.grid),
                            gap: 16,
                            cols: 3,
                            rowHeight: 151,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItem/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Provider/* Provider */.z, {
                                        logo: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookIcon */.LX, {
                                            className: classes.providerIcon,
                                            viewBox: "0 0 45 45"
                                        }),
                                        name: "Mask Network",
                                        onClick: ()=>onConnectProvider(web3_shared_src/* ProviderType.Maskbook */.lP_.Maskbook)
                                    })
                                }),
                                utils/* Flags.metamask_support_enabled */.vU.metamask_support_enabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItem/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Provider/* Provider */.z, {
                                        logo: /*#__PURE__*/ (0,jsx_runtime.jsx)(MetaMaskIcon, {
                                            className: classes.providerIcon,
                                            viewBox: "0 0 45 45"
                                        }),
                                        name: "MetaMask",
                                        onClick: ()=>onConnectProvider(web3_shared_src/* ProviderType.MetaMask */.lP_.MetaMask)
                                    })
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItem/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Provider/* Provider */.z, {
                                        logo: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectIcon, {
                                            className: classes.providerIcon,
                                            viewBox: "0 0 45 45"
                                        }),
                                        name: "WalletConnect",
                                        onClick: ()=>onConnectProvider(web3_shared_src/* ProviderType.WalletConnect */.lP_.WalletConnect)
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
}
function SelectProviderDialog(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProviderDialogUI, {
        ...props
    }));
}


/***/ }),

/***/ 46462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ SelectTokenDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69476);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70988);
/* harmony import */ var _extension_options_page_DashboardComponents_FixedTokenList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19380);
/* harmony import */ var _Wallet_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35313);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37186);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80050);
/* harmony import */ var _extension_options_page_DashboardComponents_SearchInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78884);











const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
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
        }
    })
);
function SelectTokenDialog(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_8__.useStylesExtends)(useStyles(), props);
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const chainDetailed = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useChainDetailed */ .K1)();
    //#region the native token
    const { value: nativeTokenDetailed  } = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useNativeTokenDetailed */ .JS1)();
    //#endregion
    //#region remote controlled dialog
    const [disableNativeToken, setDisableNativeToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [disableSearchBar, setDisableSearchBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [FixedTokenListProps, setFixedTokenListProps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { open , setDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_8__.useRemoteControlledDialog)(_Wallet_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.selectTokenDialogUpdated */ .R.events.selectTokenDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setId(ev.uuid);
        var _disableNativeToken;
        setDisableNativeToken((_disableNativeToken = ev.disableNativeToken) !== null && _disableNativeToken !== void 0 ? _disableNativeToken : true);
        var _disableSearchBar;
        setDisableSearchBar((_disableSearchBar = ev.disableSearchBar) !== null && _disableSearchBar !== void 0 ? _disableSearchBar : false);
        var _FixedTokenListProps;
        setFixedTokenListProps((_FixedTokenListProps = ev.FixedTokenListProps) !== null && _FixedTokenListProps !== void 0 ? _FixedTokenListProps : null);
    });
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (token)=>{
        setDialog({
            open: false,
            uuid: id,
            token
        });
        await (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .delay */ .gw)(300);
        setKeyword('');
    }, [
        id,
        setDialog,
        setKeyword
    ]);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setDialog({
            open: false,
            uuid: id
        });
        await (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .delay */ .gw)(300);
        setKeyword('');
    }, [
        id,
        setDialog
    ]);
    //#endregion
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((keyword1)=>{
        setKeyword(keyword1);
    }, []);
    var ref;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_4__/* .InjectedDialog */ .F, {
        open: open,
        onClose: onClose,
        title: t('plugin_wallet_select_a_token'),
        maxWidth: "xs",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
            children: [
                !disableSearchBar ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_SearchInput__WEBPACK_IMPORTED_MODULE_9__/* .SearchInput */ .M, {
                    label: t('add_token_search_hint'),
                    onChange: onChange
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_FixedTokenList__WEBPACK_IMPORTED_MODULE_5__/* .FixedTokenList */ .x, {
                    classes: {
                        list: classes.list,
                        placeholder: classes.placeholder
                    },
                    keyword: keyword,
                    onSelect: onSubmit,
                    ...FixedTokenListProps,
                    tokens: [
                        ...!disableNativeToken && nativeTokenDetailed && (!keyword || (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.nativeCurrency.symbol.includes(keyword.toLowerCase()))) ? [
                            nativeTokenDetailed
                        ] : [],
                        ...(ref = FixedTokenListProps === null || FixedTokenListProps === void 0 ? void 0 : FixedTokenListProps.tokens) !== null && ref !== void 0 ? ref : [], 
                    ],
                    FixedSizeListProps: {
                        height: disableSearchBar ? 350 : 288,
                        itemSize: 52,
                        overscanCount: 4,
                        ...FixedTokenListProps === null || FixedTokenListProps === void 0 ? void 0 : FixedTokenListProps.FixedSizeListProps
                    }
                })
            ]
        })
    }));
}


/***/ }),

/***/ 11588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ SelectWalletDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(27019);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(86299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(57703);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(54819);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(86126);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Check.js
var Check = __webpack_require__(98181);
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
    const classes = (0,shared_src.useStylesExtends)(useStyle(), props);
    const { wallet , selected =false , disabled =false , onClick , ListItemProps  } = props;
    const blockie = (0,web3_shared_src/* useBlockie */.YTs)(wallet.address);
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
                secondary: (0,web3_shared_src/* formatEthereumAddress */.j8w)(wallet.address, 16),
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
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/extension/options-page/Route.ts
var Route = __webpack_require__(70791);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectWalletDialog.tsx















const useStyles = (0,src/* makeStyles */.ZL)()({
    content: {
        padding: 0,
        minHeight: 300
    }
});
function SelectWalletDialogUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const wallets = (0,web3_shared_src/* useWallets */.rBi)(web3_shared_src/* ProviderType.Maskbook */.lP_.Maskbook);
    const selectedWallet = (0,web3_shared_src/* useWallet */.Osb)();
    //#region remote controlled dialog logic
    const [networkType, setNetworkType] = (0,react.useState)();
    const { open , closeDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.selectWalletDialogUpdated */.R.events.selectWalletDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setNetworkType(ev.networkType);
    });
    //#endregion
    const onSelect = (0,react.useCallback)(async (address)=>{
        closeDialog();
        await messages/* WalletRPC.updateAccount */.V.updateAccount({
            account: address,
            chainId: undefined,
            providerType: web3_shared_src/* ProviderType.Maskbook */.lP_.Maskbook,
            networkType
        });
    }, [
        networkType,
        closeDialog
    ]);
    //#region create new wallet
    const history = (0,react_router/* useHistory */.k6)();
    const onCreate = (0,react.useCallback)(async ()=>{
        closeDialog();
        await (0,utils/* delay */.gw)(100);
        if ((0,umd.isEnvironment)(umd.Environment.ManifestOptions)) history.push(`${Route/* DashboardRoute.Wallets */.q.Wallets}?create=${Date.now()}`);
        else await service/* default.Welcome.openOptionsPage */.ZP.Welcome.openOptionsPage(Route/* DashboardRoute.Wallets */.q.Wallets, `create=${Date.now()}`);
    }, [
        history,
        closeDialog
    ]);
    //#endregion
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

/***/ 7390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ TransactionDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69476);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89730);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93244);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37058);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46151);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57448);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37186);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80050);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70988);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35313);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4111);












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
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useI18N */ .M1)();
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_5__.useStylesExtends)(useStyles(), props);
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xxU)();
    //#region remote controlled dialog
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [shareLink, setShareLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t('plugin_wallet_transaction'));
    const { open , closeDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_5__.useRemoteControlledDialog)(_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletMessages.events.transactionDialogUpdated */ .R.events.transactionDialogUpdated, (ev)=>{
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
    //#endregion
    if (!state) return null;
    var _reason;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_6__/* .InjectedDialog */ .F, {
        open: open,
        onClose: closeDialog,
        title: title,
        maxWidth: "xs",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                className: classes.content,
                children: [
                    state.type === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$V.WAIT_FOR_CONFIRMING ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                                size: 64,
                                color: "primary"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                variant: "subtitle1",
                                children: t('plugin_wallet_transaction_wait_for_confirmation')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                                className: classes.secondary,
                                color: "textSecondary",
                                children: summary
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .TransactionStateType.HASH */ .n$V.HASH ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: t('plugin_wallet_transaction_submitted')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
                                    className: classes.link,
                                    href: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .resolveTransactionLinkOnExplorer */ .z4)(chainId, state.hash),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t('plugin_wallet_view_on_explorer')
                                })
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .TransactionStateType.CONFIRMED */ .n$V.CONFIRMED ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            state.receipt.status ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
                                className: classes.icon
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: state.receipt.status ? t('plugin_wallet_transaction_confirmed') : (_reason = state.reason) !== null && _reason !== void 0 ? _reason : t('plugin_wallet_transaction_reverted')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
                                    className: classes.link,
                                    href: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .resolveTransactionLinkOnExplorer */ .z4)(chainId, state.receipt.transactionHash),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t('plugin_wallet_view_on_explorer')
                                })
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .TransactionStateType.FAILED */ .n$V.FAILED ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: // it is trick, log(e) print {"code": 4001 ...}, log(e.code) print -1
                                state.error.message === 'MetaMask Message Signature: User denied message signature.' ? t('plugin_wallet_cancel_sign') : state.error.message.includes('User denied transaction signature.') ? t('plugin_wallet_transaction_rejected') : state.error.code === _constants__WEBPACK_IMPORTED_MODULE_8__/* .JSON_RPC_ErrorCode.INTERNAL_ERROR */ .Ag.INTERNAL_ERROR || state.error.message.includes(`"code":${_constants__WEBPACK_IMPORTED_MODULE_8__/* .JSON_RPC_ErrorCode.INTERNAL_ERROR */ .Ag.INTERNAL_ERROR}`) || state.error.code && state.error.code <= _constants__WEBPACK_IMPORTED_MODULE_8__/* .JSON_RPC_ErrorCode.SERVER_ERROR_RANGE_START */ .Ag.SERVER_ERROR_RANGE_START && state.error.code >= _constants__WEBPACK_IMPORTED_MODULE_8__/* .JSON_RPC_ErrorCode.SERVER_ERROR_RANGE_END */ .Ag.SERVER_ERROR_RANGE_END ? t('plugin_wallet_transaction_server_error') : state.error.message
                            })
                        ]
                    }) : null
                ]
            }),
            ![
                _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .TransactionStateType.UNKNOWN */ .n$V.UNKNOWN,
                _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$V.WAIT_FOR_CONFIRMING
            ].includes(state.type) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                    color: "primary",
                    size: "large",
                    variant: "contained",
                    fullWidth: true,
                    onClick: state.type === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .TransactionStateType.FAILED */ .n$V.FAILED || !shareLink ? closeDialog : onShare,
                    children: state.type === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .TransactionStateType.FAILED */ .n$V.FAILED || !shareLink ? t('dismiss') : t('share')
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

/***/ 90880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ WalletConnectQRCodeDialog)
});

// UNUSED EXPORTS: QRCodeDialog

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ImageList/ImageList.js + 1 modules
var ImageList = __webpack_require__(75661);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ImageListItem/ImageListItem.js + 1 modules
var ImageListItem = __webpack_require__(58219);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/Provider.tsx
var Provider = __webpack_require__(25984);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(12445);
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
                    "clip-rule": "evenodd",
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
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M99.85 28L69.09 50.81l5.72-13.44L99.85 28z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E27625",
                    stroke: "#E27625",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M28.9 28l30.48 23.03-5.44-13.66L28.9 28zM88.78 80.9l-8.19 12.53 17.53 4.83 5.02-17.1-14.36-.27zM25.65 81.17l4.99 17.1 17.5-4.84-8.16-12.54-14.33.28z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E27625",
                    stroke: "#E27625",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M47.19 59.73l-4.87 7.36 17.34.79-.58-18.7-11.9 10.55zM81.57 59.73L69.5 48.96l-.4 18.92 17.35-.8-4.87-7.35zM48.14 93.43l10.5-5.08-9.04-7.06-1.46 12.14zM70.13 88.35l10.47 5.08-1.43-12.14-9.04 7.06z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#D5BFB2",
                    stroke: "#D5BFB2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M80.59 93.43l-10.47-5.08.85 6.81-.09 2.89 9.7-4.62zM48.13 93.43l9.73 4.62-.06-2.89.83-6.81-10.5 5.08z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#233447",
                    stroke: "#233447",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M58.05 76.79l-8.7-2.56 6.14-2.82 2.56 5.38zM70.7 76.79l2.56-5.38 6.17 2.82-8.73 2.56z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#CC6228",
                    stroke: "#CC6228",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M48.13 93.43l1.52-12.53-9.68.27 8.16 12.26zM79.1 80.9l1.48 12.53 8.19-12.26-9.68-.27zM86.44 67.09l-17.35.79 1.62 8.9 2.55-5.37 6.18 2.82 7-7.14zM49.34 74.23l6.14-2.82 2.56 5.38 1.61-8.91-17.34-.8 7.03 7.15z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E27525",
                    stroke: "#E27525",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M42.3 67.09l7.28 14.2-.24-7.06-7.03-7.14zM79.42 74.23l-.27 7.06 7.27-14.2-7 7.14zM59.65 67.88l-1.61 8.9 2.04 10.53.45-13.87-.88-5.56zM69.08 67.88l-.85 5.53.43 13.9L70.7 76.8l-1.62-8.91z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#F5841F",
                    stroke: "#F5841F",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M70.7 76.79L68.66 87.3l1.46 1.04 9.04-7.06.27-7.06-8.73 2.56zM49.35 74.23l.24 7.06 9.04 7.06 1.46-1.04-2.04-10.52-8.7-2.56z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#C0AC9D",
                    stroke: "#C0AC9D",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M70.89 98.05l.09-2.89-.8-.67H58.57l-.76.67.06 2.89-9.73-4.62 3.4 2.8 6.91 4.77h11.84l6.94-4.78 3.37-2.8-9.7 4.63z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#161616",
                    stroke: "#161616",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M70.13 88.35l-1.46-1.04h-8.59l-1.46 1.04-.82 6.81.76-.67H70.2l.79.67-.85-6.81z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#763E1A",
                    stroke: "#763E1A",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M101.16 52.3l2.58-12.59L99.84 28 70.13 50.05l11.44 9.67 16.16 4.72 3.56-4.17-1.55-1.12 2.46-2.25-1.89-1.46 2.47-1.89-1.61-1.25zM25 39.71l2.62 12.6-1.68 1.24 2.5 1.89-1.89 1.46 2.47 2.25-1.56 1.12 3.56 4.17 16.16-4.72 11.44-9.67L28.9 28 25 39.71z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#F5841F",
                    stroke: "#F5841F",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M97.73 64.44l-16.16-4.71 4.87 7.36-7.27 14.2 9.61-.12h14.36l-5.41-16.73zM47.19 59.73l-16.16 4.71-5.38 16.73h14.33l9.61.12-7.27-14.2 4.87-7.36zM69.1 67.88l1.03-17.83 4.69-12.68H53.94l4.69 12.68 1.03 17.83.4 5.6.03 13.83h8.58l.03-13.84.4-5.6z"
                })
            ]
        })
    })
;

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/SafariPlatform.tsx








const useStyles = (0,src/* makeStyles */.ZL)()({
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
    const { classes  } = useStyles();
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
        children: (0,lodash.map)(providers, ({ name , logo , protocol  }, key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItem/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Provider/* Provider */.z, {
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.QRCode, {
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
    //#region remote controlled dialog logic
    const { open , closeDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated, (ev)=>ev.open && setURI(ev.uri)
    );
    //#endregion
    // connected
    (0,react.useEffect)(()=>{
        if (!uri || !open) return;
        service/* default.Ethereum.connectWalletConnect */.ZP.Ethereum.connectWalletConnect().then(closeDialog, closeDialog);
    }, [
        open,
        uri,
        closeDialog
    ]);
    let mode = 'qrcode';
    if (false) {} else if (true) {
        mode = 'safari';
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeDialog, {
        uri: uri,
        open: open,
        mode: mode,
        onClose: closeDialog
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
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PlatformSelector, {
                })
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

/***/ 77447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ WalletStatusDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(98010);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/edit-3.js
var edit_3 = __webpack_require__(45567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/copy.js
var copy = __webpack_require__(11039);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/external-link.js
var external_link = __webpack_require__(90557);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(30699);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ./src/components/shared/WalletIcon.tsx
var WalletIcon = __webpack_require__(30838);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx
var Base = __webpack_require__(99983);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(93975);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/check.js
var check = __webpack_require__(97393);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/x-circle.js
var x_circle = __webpack_require__(11324);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/OpenInNew.js
var OpenInNew = __webpack_require__(68682);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(44846);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/RecentTransactionList.tsx










const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        transaction: {
            fontSize: 14,
            padding: 0,
            marginTop: 6,
            display: 'flex',
            alignItems: 'center'
        },
        transactionButton: {
            marginLeft: 'auto'
        },
        title: {
            marginRight: theme.spacing(1)
        },
        link: {
            display: 'inherit',
            fontSize: 14
        },
        linkIcon: {
            marginRight: theme.spacing(1)
        }
    })
);
function RecentTransactionList(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { value: transactions , error , retry  } = (0,useRecentTransactions/* useRecentTransactions */.S)();
    //#region clear the most recent transactions
    const onClear = (0,Base/* useSnackbarCallback */.iD)(async ()=>{
        await messages/* WalletRPC.clearRecentTransactions */.V.clearRecentTransactions(account);
        retry();
    }, [], undefined, undefined, undefined, t('done'));
    //#endregion
    if (error) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                sx: {
                    marginRight: 1
                },
                children: t('wallet_status_tip_error')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                onClick: retry,
                children: t('retry')
            })
        ]
    }));
    if (!(transactions === null || transactions === void 0 ? void 0 : transactions.length)) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: t('wallet_status_tip_empty')
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: t('plugin_wallet_recent_transaction')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        "aria-label": "Clear All",
                        component: "button",
                        onClick: onClear,
                        children: [
                            "(",
                            t('plugin_wallet_clear_all'),
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                children: transactions.map((transaction)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        className: classes.transaction,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                variant: "body2",
                                children: (0,web3_shared_src/* formatKeccakHash */.mHs)(transaction.hash, 6)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: (0,web3_shared_src/* resolveTransactionLinkOnExplorer */.z4)(chainId, transaction.hash),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                    className: classes.linkIcon,
                                    fontSize: "inherit"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.transactionButton,
                                component: "button",
                                children: transaction.status === web3_shared_src/* TransactionStatusType.NOT_DEPEND */.g8n.NOT_DEPEND ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                    size: 14,
                                    color: "primary"
                                }) : transaction.status === web3_shared_src/* TransactionStatusType.SUCCEED */.g8n.SUCCEED ? /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* default */.Z, {
                                    size: 14,
                                    color: "#77E0B5"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(x_circle/* default */.Z, {
                                    size: 14,
                                    color: "#FF5555"
                                })
                            })
                        ]
                    }, transaction.hash)
                )
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/index.tsx



















const WalletStatusDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2, 4, 3)
        },
        currentAccount: {
            padding: theme.spacing(2, 3),
            marginBottom: theme.spacing(2),
            display: 'flex',
            backgroundColor: (0,theme_src/* getMaskColor */.nb)(theme).twitterBackground,
            borderRadius: 8,
            alignItems: 'center'
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
        footer: {
            fontSize: 12,
            textAlign: 'left',
            padding: theme.spacing(2),
            borderTop: `1px solid ${theme.palette.divider}`,
            justifyContent: 'flex-start'
        },
        transactionList: {
            alignItems: 'center'
        },
        actions: {
        },
        actionButton: {
            fontSize: 12,
            marginLeft: theme.spacing(1)
        },
        changeButton: {
            borderRadius: 20
        },
        iconWrapper: {
            position: 'relative',
            height: 48,
            width: 48,
            marginRight: theme.spacing(1.5)
        },
        tip: {
            flex: 1,
            fontSize: 14
        },
        address: {
            fontSize: 16,
            marginRight: theme.spacing(1),
            display: 'inline-block'
        },
        link: {
            color: theme.palette.text.secondary,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center'
        },
        linkIcon: {
            marginRight: theme.spacing(1)
        }
    })
);
function WalletStatusDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = WalletStatusDialog_useStyles();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const selectedWallet = (0,web3_shared_src/* useWallet */.Osb)();
    const selectedProviderType = (0,src.useValueRef)(settings/* currentProviderSettings */.t1);
    //#region copy addr to clipboard
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const onCopy = (0,Base/* useSnackbarCallback */.iD)(async (ev)=>{
        ev.stopPropagation();
        var ref;
        copyToClipboard((ref = selectedWallet === null || selectedWallet === void 0 ? void 0 : selectedWallet.address) !== null && ref !== void 0 ? ref : '');
    }, [], undefined, undefined, undefined, t('copy_success_of_wallet_addr'));
    //#endregion
    //#region remote controlled dialog logic
    const { open , closeDialog  } = (0,src.useRemoteControlledDialog)(messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    //#endregion
    //#region change provider
    const { openDialog: openSelectProviderDialog  } = (0,src.useRemoteControlledDialog)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    //#endregion
    //#region walletconnect
    const { setDialog: setWalletConnectDialog  } = (0,src.useRemoteControlledDialog)(messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated);
    //#endregion
    const { setDialog: setRenameDialog  } = (0,src.useRemoteControlledDialog)(messages/* WalletMessages.events.walletRenameDialogUpdated */.R.events.walletRenameDialogUpdated);
    const onDisconnect = (0,react.useCallback)(async ()=>{
        if (selectedProviderType !== web3_shared_src/* ProviderType.WalletConnect */.lP_.WalletConnect) return;
        closeDialog();
        setWalletConnectDialog({
            open: true,
            uri: await service/* default.Ethereum.createConnectionURI */.ZP.Ethereum.createConnectionURI()
        });
    }, [
        selectedProviderType,
        closeDialog,
        setWalletConnectDialog
    ]);
    const onChange = (0,react.useCallback)(()=>{
        closeDialog();
        openSelectProviderDialog();
    }, [
        closeDialog,
        openSelectProviderDialog
    ]);
    if (!selectedWallet) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        title: t('wallet_status_title'),
        open: open,
        onClose: closeDialog,
        maxWidth: "sm",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: classes.currentAccount,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                                size: 48,
                                badgeSize: 18
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.accountInfo,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.infoRow,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.accountName,
                                                children: selectedWallet.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                className: classes.link,
                                                component: "button",
                                                onClick: ()=>{
                                                    setRenameDialog({
                                                        open: true,
                                                        wallet: selectedWallet
                                                    });
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(edit_3/* default */.Z, {
                                                    size: 16,
                                                    color: "currentcolor"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.infoRow,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.address,
                                                variant: "body2",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src.FormattedAddress, {
                                                    address: selectedWallet.address,
                                                    size: 4
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                className: classes.link,
                                                underline: "none",
                                                component: "button",
                                                title: t('wallet_status_button_copy_address'),
                                                onClick: onCopy,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(copy/* default */.Z, {
                                                    className: classes.linkIcon,
                                                    size: 14
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                className: classes.link,
                                                href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(chainId, selectedWallet.address),
                                                target: "_blank",
                                                title: t('plugin_wallet_view_on_explorer'),
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                                    className: classes.linkIcon,
                                                    size: 14
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                className: classes.actions,
                                children: [
                                    selectedProviderType === web3_shared_src/* ProviderType.WalletConnect */.lP_.WalletConnect ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        className: classes.actionButton,
                                        color: "primary",
                                        size: "small",
                                        variant: "outlined",
                                        onClick: onDisconnect,
                                        children: t('wallet_status_button_disconnect')
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        className: classnames_default()(classes.actionButton),
                                        color: "primary",
                                        variant: "contained",
                                        size: "small",
                                        onClick: onChange,
                                        children: t('wallet_status_button_change')
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: classes.transactionList,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RecentTransactionList, {
                        })
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
    }));
}


/***/ }),

/***/ 34240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useStartWatchChainState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80050);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4111);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35313);




const task = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.pollingTask)(async ()=>{
    await _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.kickToUpdateChainState */ .V.kickToUpdateChainState();
    return false;
}, {
    autoStart: false,
    delay: _constants__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_CHAIN_STATE_DELAY */ .js
});
function useStartWatchChainState() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // emit an updating request immediately
        _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateChainState */ .V.updateChainState();
    }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // start the polling task
        task.reset();
        return ()=>task.cancel()
        ;
    }, []);
}


/***/ }),

/***/ 75388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vA": () => (/* binding */ MaskbookTextIcon),
/* harmony export */   "LX": () => (/* binding */ MaskbookIcon),
/* harmony export */   "A4": () => (/* binding */ MaskbookIconOutlined),
/* harmony export */   "ck": () => (/* binding */ MaskbookSharpIcon),
/* harmony export */   "J6": () => (/* binding */ MaskbookSharpIconOfSize),
/* harmony export */   "Z6": () => (/* binding */ WalletSharp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12445);

/**
 * This icon should be sync with https://mask.io/img/MB--CircleCanvas--WhiteOverBlue.svg
 */ 
const MaskbookSmileFaceSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 600 600",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
        fillRule: "evenodd",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "300",
                cy: "300",
                r: "300",
                fill: "#1C68F3"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fill: "#fff",
                d: "m480 200h-360v-44c0-19.882 16.118-36 36-36h288c19.882 0 36 16.118 36 36v44zm0 30v100h-60-231-21.912c13.661 60.677 67.878 106 132.68 106 53.575 0 99.914-30.978 122.08-76h58.144v84c0 19.882-16.118 36-36 36h-288c-19.882 0-36-16.118-36-36v-214h360zm-267.78 130l175.11 5e-6c-19.092 27.914-51.184 46.232-87.555 46.232s-68.463-18.318-87.555-46.232zm-44.65-58h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48zm154 0h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48z"
            })
        ]
    })
});
const MaskbookSmileFaceSharpSVG = ({ size =20  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8 0H34.2C36.2987 0 38 1.70132 38 3.8V34.2C38 36.2987 36.2987 38 34.2 38H3.8C1.70132 38 0 36.2987 0 34.2V3.8C0 1.70132 1.70132 0 3.8 0ZM35.0939 21.6824V12.7412H2.90569V31.8753C2.90569 33.653 4.34681 35.0941 6.12451 35.0941H31.8751C33.6528 35.0941 35.0939 33.653 35.0939 31.8753V24.3648L29.8951 24.3649C27.9129 28.3903 23.7696 31.16 18.9795 31.16C13.1854 31.16 8.3378 27.1076 7.11632 21.6825L8.2704 21.6825V21.6824H35.0939ZM18.9795 28.4984C22.2314 28.4984 25.1008 26.8606 26.8078 24.3649H11.1511C12.8581 26.8606 15.7275 28.4984 18.9795 28.4984ZM7.15874 19.1789C7.50581 16.7524 9.59263 14.8871 12.1151 14.8871C14.6376 14.8871 16.7244 16.7524 17.0715 19.1789L14.3277 19.1789C14.026 18.245 13.1494 17.5694 12.1151 17.5694C11.0808 17.5694 10.2042 18.245 9.9025 19.1789L7.15874 19.1789ZM20.9282 19.1789C21.2752 16.7524 23.362 14.8871 25.8845 14.8871C28.407 14.8871 30.4938 16.7524 30.8409 19.1789L28.0971 19.1789C27.7954 18.245 26.9189 17.5694 25.8845 17.5694C24.8502 17.5694 23.9736 18.245 23.6719 19.1789L20.9282 19.1789ZM35.0939 6.12473C35.0939 4.34702 33.6528 2.90591 31.8751 2.90591H6.12451C4.34681 2.90591 2.90569 4.34702 2.90569 6.12473V10.0588H35.0939V6.12473Z"
        })
    })
;
const WalletSharpSVG = ({ size =20  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-alert-circle",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "14"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            })
        ]
    })
;
const MaskbookSmileFaceOutlinedSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 42 42",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            stroke: "#fff",
            strokeWidth: "3",
            d: "M39.55 21a18.55 18.55 0 11-37.1 0 18.55 18.55 0 0137.1 0z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M32.45 16.55v6.36H12.54a8.66 8.66 0 0016.21 1.9h3.7v5.35a2.3 2.3 0 01-2.29 2.3H11.84a2.3 2.3 0 01-2.3-2.3V16.55h22.91zm-5.9 8.27a6.74 6.74 0 01-11.14 0h11.15zM16.1 18.07a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm9.8 0a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm4.26-8.52a2.3 2.3 0 012.3 2.29v2.8H9.54v-2.8a2.3 2.3 0 012.29-2.3h18.32z",
            clipRule: "evenodd"
        })
    ]
});
const MaskbookTextSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 80 20",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m18.902 25.67h1.82v18.33h-3.744v-10.14l-5.668 7.956-5.694-7.956v10.14h-3.718v-18.33h1.82l7.592 10.504zm15.912 4.212h3.614v14.118h-3.614v-1.04c-1.17.78-2.574 1.248-4.134 1.248-4.42 0-7.02-3.562-7.02-7.306 0-3.77 2.6-7.306 7.02-7.306 1.482 0 2.938.468 4.134 1.17zm0 9.88v-5.668c-.884-.754-2.132-1.222-3.484-1.222-2.574 0-4.186 1.924-4.186 4.03 0 2.132 1.638 4.056 4.186 4.056 1.378 0 2.6-.442 3.484-1.196zm6.084 3.094 1.352-2.678c1.742.754 3.068 1.144 4.836 1.144 1.664 0 2.314-.624 2.314-1.352 0-.806-.806-1.17-2.99-1.638-3.042-.676-5.252-1.664-5.252-4.394 0-2.548 2.106-4.316 5.382-4.316 2.21 0 3.978.52 5.512 1.144l-1.196 2.652c-1.378-.52-2.99-.91-4.394-.91-1.378 0-2.08.494-2.08 1.248 0 .78.858 1.144 3.12 1.612 3.276.676 5.174 1.82 5.174 4.394 0 2.678-2.054 4.446-5.668 4.446-2.444 0-4.03-.338-6.11-1.352zm23.062-7.462 5.226 8.606h-4.004l-3.614-5.772-2.73 2.626v3.146h-3.614v-19.604h3.614v11.544l6.032-6.058h4.238z",
        fill: "currentColor",
        transform: "translate(0 -24)"
    })
});
function MaskbookTextIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookTextSVG
    }));
}
function MaskbookIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookSmileFaceSVG
    }));
}
function MaskbookIconOutlined(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookSmileFaceOutlinedSVG
    }));
}
function MaskbookSharpIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        style: {
            transform: 'translate(2px, 1.5px)'
        },
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskbookSmileFaceSharpSVG, {
        })
    }));
}
function MaskbookSharpIconOfSize(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskbookSmileFaceSharpSVG, {
            size: props.size
        })
    }));
}
function WalletSharp(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WalletSharpSVG, {
            size: props.size
        })
    }));
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

/***/ 6301:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "08cf6ede7b4e341b308e.png";

/***/ }),

/***/ 23543:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe1b5da2f055d09e4687.png";

/***/ })

}]);