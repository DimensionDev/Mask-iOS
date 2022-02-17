(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3523,9658],{

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

/***/ 64921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88088);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25830);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16842);





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

/***/ 70988:
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

/***/ 29005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ Video)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(16842);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/Skeleton/Skeleton.js




let warnedOnce = false;
/**
 * @ignore - do not document.
 */

/* harmony default export */ const Skeleton_Skeleton = (/*#__PURE__*/react.forwardRef(function DeprecatedSkeleton(props, ref) {
  if (!warnedOnce) {
    console.warn(['Material-UI: The Skeleton component was moved from the lab to the core.', '', "You should use `import { Skeleton } from '@material-ui/core'`", "or `import Skeleton from '@material-ui/core/Skeleton'`"].join('\n'));
    warnedOnce = true;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Skeleton/* default */.Z, (0,esm_extends/* default */.Z)({
    ref: ref
  }, props));
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
;// CONCATENATED MODULE: ./src/components/shared/Video.tsx





const Video = /*#__PURE__*/ (0,react.forwardRef)(function Video1(props, outgoingRef) {
    const { src , component ='video' , VideoProps , SkeletonProps  } = props;
    const videoRef = (0,react.useRef)(null);
    const { loading , error , value  } = (0,useAsync/* default */.Z)(async ()=>{
        if (typeof src !== 'string') return;
        return service/* default.Helper.fetch */.ZP.Helper.fetch(src);
    }, [
        src
    ]);
    const blobURL = (0,react.useMemo)(()=>{
        if (!value) return '';
        return URL.createObjectURL(value);
    }, [
        value
    ]);
    if (component !== 'video') return null;
    if (loading || loading) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton_Skeleton, {
            variant: "rectangular",
            ...SkeletonProps
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
        ref: videoRef,
        ...VideoProps,
        children: blobURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
            src: blobURL,
            type: "video/mp4"
        }) : null
    }));
});


/***/ }),

/***/ 6836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(66751);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ./src/plugins/MaskbookPluginWrapper.tsx
var MaskbookPluginWrapper = __webpack_require__(65928);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(57652);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(29135);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(57703);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(76729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(20261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(74454);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.11.4_6270a9eba2c2d5b9e14d97f76e4f3a45/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(8286);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(5075);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/isValid/index.js
var isValid = __webpack_require__(43694);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(69217);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3366.js
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/VerifiedUser.js
var VerifiedUser = __webpack_require__(5273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(17225);
=======
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/VerifiedUser.js
var VerifiedUser = __webpack_require__(25513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(80784);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.3523.js
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/components/shared/Video.tsx + 1 modules
var Video = __webpack_require__(29005);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CollectibleTab.tsx




const useStyles = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        width: '100%',
        height: '100%',
        borderRadius: 0
    }
});
function CollectibleTab(props) {
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        ...props.CardProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
            className: classes.content,
            children: props.children
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(76015);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/opensea-js@1.1.11/node_modules/opensea-js/lib/types.js
var types = __webpack_require__(93986);
// EXTERNAL MODULE: ./src/settings/createSettings.ts
var createSettings = __webpack_require__(45154);
// EXTERNAL MODULE: ./src/plugins/Collectible/constants.ts
var constants = __webpack_require__(21542);
// EXTERNAL MODULE: ./src/plugins/Collectible/types/index.ts + 2 modules
var Collectible_types = __webpack_require__(7262);
;// CONCATENATED MODULE: ./src/plugins/Collectible/settings.ts



const currentCollectibleProviderSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+tradeProvider`, Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA, {
    primary: ()=>''
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ./src/plugins/Collectible/helpers.ts + 1 modules
var helpers = __webpack_require__(94051);
// EXTERNAL MODULE: ./src/plugins/Collectible/messages.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3366.js
var messages = __webpack_require__(84423);
=======
var messages = __webpack_require__(29592);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.3523.js
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils_utils = __webpack_require__(96578);
;// CONCATENATED MODULE: ./src/plugins/Collectible/utils.ts




function checkUrl(url) {
    const protocol = 'https://';
    const _url = new URL(url.startsWith(protocol) ? url : protocol + url);
    return constants/* openseaHostnames.includes */.Kr.includes(_url.hostname) && constants/* openseaPathnameRegexMatcher.test */.Pq.test(_url.pathname) || constants/* raribleHostnames.includes */.QG.includes(_url.hostname) && constants/* rariblePathnameRegexMatcher.test */.lD.test(_url.pathname);
}
function getRelevantUrl(textContent) {
    const urls = (0,utils_utils/* parseURL */.Lk)(textContent);
    return urls.find(checkUrl);
}
function getAssetInfoFromURL(url) {
    if (!url) return null;
    const _url = new URL(url);
    //#region opensea
    const openSeaMatched = _url.pathname.match(constants/* openseaPathnameRegexMatcher */.Pq);
    if (openSeaMatched) {
        return {
            chain_id: _url.host.includes('testnets') ? web3_shared_src/* ChainId.Rinkeby */.a_e.Rinkeby : web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet,
            address: openSeaMatched[1],
            token_id: openSeaMatched[2]
        };
    }
    //#endregion
    //#region rarible
    const raribleMatched = _url.pathname.match(constants/* rariblePathnameRegexMatcher */.lD);
    if (raribleMatched) {
        return {
            chain_id: _url.host.includes('ropsten') ? web3_shared_src/* ChainId.Ropsten */.a_e.Ropsten : _url.host.includes('rinkeby') ? web3_shared_src/* ChainId.Rinkeby */.a_e.Rinkeby : web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet,
            address: raribleMatched[1],
            token_id: raribleMatched[2]
        };
    }
    //#endregion
    // nothing matched
    return;
}
function getOrderUnitPrice(order) {
    var ref;
    if (!order.currentPrice || !((ref = order.paymentTokenContract) === null || ref === void 0 ? void 0 : ref.decimals)) return;
    const price = (0,web3_shared_src/* formatBalance */.azF)(order.currentPrice, order.paymentTokenContract.decimals);
    const quantity = (0,web3_shared_src/* formatBalance */.azF)(order.quantity, new (bignumber_default())(order.quantity).toString() !== '1' ? 8 : 0);
    return new (bignumber_default())(price).dividedBy(quantity).toFixed(4, 1).toString();
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/hooks/useAsset.ts










function useAsset(provider, token) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { WNATIVE_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!token) return;
        switch(provider){
            case Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA:
                var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
                const openSeaResponse = await messages/* PluginCollectibleRPC.getAsset */.O.getAsset(token.contractAddress, token.tokenId);
                var _sellOrders, ref8, ref9;
                const desktopOrder = (0,lodash.head)(((_sellOrders = openSeaResponse.sellOrders) !== null && _sellOrders !== void 0 ? _sellOrders : []).sort((a, b)=>new (bignumber_default())((ref8 = getOrderUnitPrice(a)) !== null && ref8 !== void 0 ? ref8 : 0).toNumber() - new (bignumber_default())((ref9 = getOrderUnitPrice(b)) !== null && ref9 !== void 0 ? ref9 : 0).toNumber()
                ));
                var ref10, ref11, _endTime, ref12, ref13, ref14, ref15, ref16, ref17, ref18, _name;
                return {
                    is_verified: [
                        'approved',
                        'verified'
                    ].includes((ref10 = (ref = openSeaResponse.collection) === null || ref === void 0 ? void 0 : ref.safelist_request_status) !== null && ref10 !== void 0 ? ref10 : ''),
                    is_order_weth: (0,web3_shared_src/* isSameAddress */.Wr$)((ref11 = desktopOrder === null || desktopOrder === void 0 ? void 0 : desktopOrder.paymentToken) !== null && ref11 !== void 0 ? ref11 : '', WNATIVE_ADDRESS),
                    is_collection_weth: openSeaResponse.collection.payment_tokens.some((0,web3_shared_src/* currySameAddress */.DC3)(WNATIVE_ADDRESS)),
                    is_owner: openSeaResponse.top_ownerships.some((item)=>(0,web3_shared_src/* isSameAddress */.Wr$)(item.owner.address, account)
                    ),
                    // it's an IOS string as my inspection
                    is_auction: Date.parse(`${(_endTime = openSeaResponse.endTime) !== null && _endTime !== void 0 ? _endTime : ''}Z`) > Date.now(),
                    image_url: openSeaResponse.imageUrl,
                    asset_contract: openSeaResponse.assetContract,
                    current_price: desktopOrder ? new (bignumber_default())((ref12 = getOrderUnitPrice(desktopOrder)) !== null && ref12 !== void 0 ? ref12 : 0).toNumber() : null,
                    current_symbol: (ref13 = desktopOrder === null || desktopOrder === void 0 ? void 0 : (ref1 = desktopOrder.paymentTokenContract) === null || ref1 === void 0 ? void 0 : ref1.symbol) !== null && ref13 !== void 0 ? ref13 : 'ETH',
                    owner: {
                        ...openSeaResponse.owner,
                        link: `${constants/* OpenSeaAccountURL */.l}${(ref15 = (ref14 = (ref2 = openSeaResponse.owner) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.user) === null || ref3 === void 0 ? void 0 : ref3.username) !== null && ref14 !== void 0 ? ref14 : openSeaResponse.owner.address) !== null && ref15 !== void 0 ? ref15 : ''}`
                    },
                    creator: {
                        ...openSeaResponse.creator,
                        link: `${constants/* OpenSeaAccountURL */.l}${(ref17 = (ref16 = (ref4 = openSeaResponse.creator) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.user) === null || ref5 === void 0 ? void 0 : ref5.username) !== null && ref16 !== void 0 ? ref16 : (ref6 = openSeaResponse.creator) === null || ref6 === void 0 ? void 0 : ref6.address) !== null && ref17 !== void 0 ? ref17 : ''}`
                    },
                    token_id: openSeaResponse.tokenId,
                    token_address: openSeaResponse.tokenAddress,
                    traits: openSeaResponse.traits,
                    safelist_request_status: (ref18 = (ref7 = openSeaResponse.collection) === null || ref7 === void 0 ? void 0 : ref7.safelist_request_status) !== null && ref18 !== void 0 ? ref18 : '',
                    description: openSeaResponse.description,
                    name: (_name = openSeaResponse.name) !== null && _name !== void 0 ? _name : openSeaResponse.collection.name,
                    collection_name: openSeaResponse.collection.name,
                    animation_url: openSeaResponse.animation_url,
                    end_time: desktopOrder ? (0,helpers/* toDate */.ZU)(Number.parseInt(desktopOrder.listingTime, 10)) : null,
                    order_payment_tokens: (desktopOrder === null || desktopOrder === void 0 ? void 0 : desktopOrder.paymentTokenContract) ? [
                        (0,helpers/* toTokenDetailed */.DX)(chainId, desktopOrder.paymentTokenContract)
                    ] : [],
                    offer_payment_tokens: (0,lodash.uniqBy)(openSeaResponse.collection.payment_tokens.map((x)=>(0,helpers/* toTokenDetailed */.DX)(chainId, x)
                    ), (x)=>x.address.toLowerCase()
                    ).filter((x)=>x.type === web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20
                    ),
                    order_: desktopOrder,
                    slug: openSeaResponse.collection.slug,
                    response_: openSeaResponse
                };
            case Collectible_types/* CollectibleProvider.RARIBLE */.wg.RARIBLE:
                var ref73;
                const raribleResponse = await messages/* PluginCollectibleRPC.getNFTItem */.O.getNFTItem(token.contractAddress, token.tokenId);
                const owner = (0,lodash.first)(raribleResponse === null || raribleResponse === void 0 ? void 0 : raribleResponse.owners);
                const creator = (0,lodash.first)(raribleResponse === null || raribleResponse === void 0 ? void 0 : raribleResponse.creators);
                var _description, _name1;
                return {
                    is_order_weth: false,
                    is_collection_weth: false,
                    is_verified: false,
                    is_owner: false,
                    is_auction: false,
                    image_url: raribleResponse === null || raribleResponse === void 0 ? void 0 : raribleResponse.meta.image.url.PREVIEW,
                    asset_contract: null,
                    owner: owner ? {
                        address: owner,
                        profile_img_url: '',
                        user: {
                            username: owner
                        },
                        link: ''
                    } : null,
                    creator: creator ? {
                        address: creator.account,
                        profile_img_url: '',
                        user: {
                            username: creator.account
                        },
                        link: ''
                    } : null,
                    traits: raribleResponse === null || raribleResponse === void 0 ? void 0 : raribleResponse.meta.attributes.map(({ key , value  })=>({
                            trait_type: key,
                            value
                        })
                    ),
                    description: (_description = raribleResponse === null || raribleResponse === void 0 ? void 0 : raribleResponse.meta.description) !== null && _description !== void 0 ? _description : '',
                    name: (_name1 = raribleResponse === null || raribleResponse === void 0 ? void 0 : raribleResponse.meta.name) !== null && _name1 !== void 0 ? _name1 : 'Unkown',
                    collection_name: '',
                    animation_url: (ref73 = raribleResponse.meta.animation) === null || ref73 === void 0 ? void 0 : ref73.url.PREVIEW,
                    current_price: 0,
                    current_symbol: 'ETH',
                    end_time: null,
                    order_payment_tokens: [],
                    offer_payment_tokens: [],
                    order_: null,
                    slug: '',
                    response_: raribleResponse
                };
            default:
                (0,esm/* unreachable */.t1)(provider);
        }
    }, [
        (0,helpers/* toTokenIdentifier */.BR)(token),
        account,
        chainId,
        provider,
        WNATIVE_ADDRESS
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/hooks/useOrders.ts









function useOrders(provider, token, side = types.OrderSide.Buy, pageNum = 0) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!token) return [];
        switch(provider){
            case Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA:
                const openseaResponse = await messages/* PluginCollectibleRPC.getOrders */.O.getOrders(token.contractAddress, token.tokenId, side, {
                    pageNum,
                    count: 10
                });
                return openseaResponse.orders.map((order)=>{
                    var ref, ref1, ref2, ref3, ref4, ref5, ref6;
                    var ref7;
                    const unitPrice = new (bignumber_default())((ref7 = getOrderUnitPrice(order)) !== null && ref7 !== void 0 ? ref7 : 0).toNumber();
                    var ref8;
                    return {
                        quantity: new (bignumber_default())(order.quantity).toNumber(),
                        expirationTime: order.side === types.OrderSide.Sell ? order.listingTime : order.expirationTime,
                        paymentTokenContract: order.paymentTokenContract,
                        hash: order.hash,
                        unitPrice,
                        paymentToken: order.paymentToken,
                        makerAccount: {
                            user: {
                                username: (ref = order.makerAccount) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.username
                            },
                            address: (ref2 = order.makerAccount) === null || ref2 === void 0 ? void 0 : ref2.address,
                            profile_img_url: (ref3 = order.makerAccount) === null || ref3 === void 0 ? void 0 : ref3.profile_img_url,
                            link: `${constants/* OpenSeaAccountURL */.l}${(ref8 = (ref4 = order.makerAccount) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.user) === null || ref5 === void 0 ? void 0 : ref5.username) !== null && ref8 !== void 0 ? ref8 : (ref6 = order.makerAccount) === null || ref6 === void 0 ? void 0 : ref6.address}`
                        }
                    };
                });
            case Collectible_types/* CollectibleProvider.RARIBLE */.wg.RARIBLE:
                return messages/* PluginCollectibleRPC.getOrderFromRarbile */.O.getOrderFromRarbile(token.contractAddress, token.tokenId, side);
            default:
                (0,esm/* unreachable */.t1)(provider);
        }
    }, [
        (0,helpers/* toTokenIdentifier */.BR)(token),
        pageNum,
        provider
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Collectible/pipes/index.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3366.js
var pipes = __webpack_require__(14598);
=======
var pipes = __webpack_require__(3362);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.3523.js
;// CONCATENATED MODULE: ./src/plugins/Collectible/hooks/useEvents.ts







function useEvents(provider, token, cursor) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!token) return {
            data: [],
            pageInfo: {
                hasNextPage: false
            }
        };
        switch(provider){
            case Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA:
                const openseaEvents = await messages/* PluginCollectibleRPC.getEvents */.O.getEvents(token.contractAddress, token.tokenId, cursor);
                return {
                    data: openseaEvents.edges.map((event)=>{
                        var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21, ref22;
                        var _publicUsername, _publicUsername1, _publicUsername2, _publicUsername3;
                        const accountPair = event.node.eventType === Collectible_types/* OpenSeaAssetEventType.SUCCESSFUL */.ls.SUCCESSFUL ? {
                            from: {
                                username: (ref = event.node.seller) === null || ref === void 0 ? void 0 : ref.user.publicUsername,
                                address: (ref1 = event.node.seller) === null || ref1 === void 0 ? void 0 : ref1.address,
                                imageUrl: (ref2 = event.node.seller) === null || ref2 === void 0 ? void 0 : ref2.imageUrl,
                                link: `${constants/* OpenSeaAccountURL */.l}${(_publicUsername = (ref3 = event.node.seller) === null || ref3 === void 0 ? void 0 : ref3.user.publicUsername) !== null && _publicUsername !== void 0 ? _publicUsername : (ref4 = event.node.seller) === null || ref4 === void 0 ? void 0 : ref4.address}`
                            },
                            to: {
                                username: (ref5 = event.node.winnerAccount) === null || ref5 === void 0 ? void 0 : ref5.user.publicUsername,
                                address: (ref6 = event.node.winnerAccount) === null || ref6 === void 0 ? void 0 : ref6.address,
                                imageUrl: (ref7 = event.node.winnerAccount) === null || ref7 === void 0 ? void 0 : ref7.imageUrl,
                                link: `${constants/* OpenSeaAccountURL */.l}${(_publicUsername1 = (ref8 = event.node.winnerAccount) === null || ref8 === void 0 ? void 0 : ref8.user.publicUsername) !== null && _publicUsername1 !== void 0 ? _publicUsername1 : (ref9 = event.node.winnerAccount) === null || ref9 === void 0 ? void 0 : ref9.address}`
                            }
                        } : {
                            from: {
                                username: (ref10 = event.node.fromAccount) === null || ref10 === void 0 ? void 0 : ref10.user.publicUsername,
                                address: (ref11 = event.node.fromAccount) === null || ref11 === void 0 ? void 0 : ref11.address,
                                imageUrl: (ref12 = event.node.fromAccount) === null || ref12 === void 0 ? void 0 : ref12.imageUrl,
                                link: `${constants/* OpenSeaAccountURL */.l}${(_publicUsername2 = (ref13 = event.node.fromAccount) === null || ref13 === void 0 ? void 0 : ref13.user.publicUsername) !== null && _publicUsername2 !== void 0 ? _publicUsername2 : (ref14 = event.node.fromAccount) === null || ref14 === void 0 ? void 0 : ref14.address}`
                            },
                            to: {
                                username: (ref15 = event.node.toAccount) === null || ref15 === void 0 ? void 0 : ref15.user.publicUsername,
                                address: (ref16 = event.node.toAccount) === null || ref16 === void 0 ? void 0 : ref16.address,
                                imageUrl: (ref17 = event.node.toAccount) === null || ref17 === void 0 ? void 0 : ref17.imageUrl,
                                link: `${constants/* OpenSeaAccountURL */.l}${(_publicUsername3 = (ref18 = event.node.toAccount) === null || ref18 === void 0 ? void 0 : ref18.user.publicUsername) !== null && _publicUsername3 !== void 0 ? _publicUsername3 : (ref19 = event.node.toAccount) === null || ref19 === void 0 ? void 0 : ref19.address}`
                            }
                        };
                        return {
                            id: event.node.id,
                            accountPair,
                            price: {
                                quantity: (ref20 = event.node.price) === null || ref20 === void 0 ? void 0 : ref20.quantity,
                                asset: (ref21 = event.node.price) === null || ref21 === void 0 ? void 0 : ref21.asset
                            },
                            assetQuantity: event.node.assetQuantity,
                            eventType: event.node.eventType,
                            transactionBlockExplorerLink: (ref22 = event.node.transaction) === null || ref22 === void 0 ? void 0 : ref22.blockExplorerLink,
                            timestamp: new Date(`${event.node.eventTimestamp}Z`).getTime()
                        };
                    }),
                    pageInfo: openseaEvents.pageInfo
                };
            case Collectible_types/* CollectibleProvider.RARIBLE */.wg.RARIBLE:
                const raribleEvents = await messages/* PluginCollectibleRPC.getHistoryFromRarible */.O.getHistoryFromRarible(token.contractAddress, token.tokenId);
                return {
                    data: raribleEvents.map((event)=>{
                        var ref89, ref90, ref91, ref92, ref93, ref94, ref95, ref96, ref97;
                        var ref98, ref99;
                        return {
                            id: event.salt,
                            accountPair: {
                                from: event.fromInfo ? {
                                    username: ((ref89 = event.fromInfo) === null || ref89 === void 0 ? void 0 : ref89.id) === constants/* NullContractAddress */.sh ? constants/* NullAddress */.Cn : (ref90 = event.fromInfo) === null || ref90 === void 0 ? void 0 : ref90.name,
                                    address: (ref91 = event.fromInfo) === null || ref91 === void 0 ? void 0 : ref91.id,
                                    imageUrl: (0,helpers/* toRaribleImage */.HV)((ref92 = event.fromInfo) === null || ref92 === void 0 ? void 0 : ref92.image),
                                    link: `${(0,pipes/* resolveRaribleUserNetwork */.gV)(chainId)}${(ref98 = (ref93 = event.fromInfo) === null || ref93 === void 0 ? void 0 : ref93.id) !== null && ref98 !== void 0 ? ref98 : ''}`
                                } : null,
                                to: event.ownerInfo ? {
                                    username: (ref94 = event.ownerInfo) === null || ref94 === void 0 ? void 0 : ref94.name,
                                    address: (ref95 = event.ownerInfo) === null || ref95 === void 0 ? void 0 : ref95.id,
                                    imageUrl: (0,helpers/* toRaribleImage */.HV)((ref96 = event.ownerInfo) === null || ref96 === void 0 ? void 0 : ref96.image),
                                    link: `${(0,pipes/* resolveRaribleUserNetwork */.gV)(chainId)}${(ref99 = (ref97 = event.ownerInfo) === null || ref97 === void 0 ? void 0 : ref97.id) !== null && ref99 !== void 0 ? ref99 : ''}`
                                } : null
                            },
                            eventType: event['@type'],
                            timestamp: new Date(event.date).getTime(),
                            price: event.price ? {
                                quantity: String(event.price)
                            } : null
                        };
                    }),
                    pageInfo: {
                        hasNextPage: false
                    }
                };
        }
    }, [
        chainId,
        (0,helpers/* toTokenIdentifier */.BR)(token),
        cursor,
        provider
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/hooks/useCollectibleState.ts










function useCollectibleState(token) {
    const [tabIndex, setTabIndex] = (0,react.useState)(Collectible_types/* CollectibleTab.ARTICLE */.s7.ARTICLE);
    const provider = (0,shared_src.useValueRef)(currentCollectibleProviderSettings);
    const asset = useAsset(provider, token);
    //#region offers
    const [offerPage, setOfferPage] = (0,react.useState)(0);
    const offers = useOrders(provider, tabIndex === Collectible_types/* CollectibleTab.OFFER */.s7.OFFER ? token : undefined, types.OrderSide.Buy, offerPage);
    //#endregion
    //#region orders
    const [orderPage, setOrderPage] = (0,react.useState)(0);
    const orders = useOrders(provider, tabIndex === Collectible_types/* CollectibleTab.LISTING */.s7.LISTING ? token : undefined, types.OrderSide.Sell, orderPage);
    //#endregion
    //#reguin events
    const [eventPage, setEventPage] = (0,react.useState)(0);
    const cursors = (0,react.useRef)([]);
    const events = useEvents(provider, tabIndex === Collectible_types/* CollectibleTab.HISTORY */.s7.HISTORY ? token : undefined, cursors.current[eventPage - 1]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        var ref;
        if (((ref = events.value) === null || ref === void 0 ? void 0 : ref.pageInfo.endCursor) && !cursors.current.some((item)=>events.value && item === events.value.pageInfo.endCursor
        )) {
            cursors.current.push(events.value.pageInfo.endCursor);
        }
    }, [
        events,
        cursors
    ]);
    //#endregion
    return {
        token,
        asset,
        provider,
        tabIndex,
        setTabIndex,
        offers,
        offerPage,
        setOfferPage,
        orders,
        orderPage,
        setOrderPage,
        events,
        eventPage,
        setEventPage
    };
}
const CollectibleState = (0,unstated_next/* createContainer */.f)(useCollectibleState);

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ArticleTab.tsx






const ArticleTab_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    body: {
        display: 'flex',
        justifyContent: 'center'
    },
    player: {
        maxWidth: '100%',
        maxHeight: '100%',
        border: 'none'
    }
});
// opensea supports: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF.
const AssetPlayer = ({ src , alt  })=>{
    const { classes  } = ArticleTab_useStyles();
    if (!src) {
        return null;
    }
    const isVideo = src.match(/\.(mp4|webm)$/i);
    if (isVideo) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Video/* Video */.n, {
            src: src,
            VideoProps: {
                className: classes.player
            }
        }));
    } else {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            className: classes.player,
            src: src,
            alt: alt
        }));
    }
};
function ArticleTab(props) {
    const { classes  } = ArticleTab_useStyles();
    const { asset  } = CollectibleState.useContainer();
    if (!asset.value) return null;
    const resourceUrl = asset.value.image_url || asset.value.animation_url;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.body,
            children: asset.value.animation_url ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: asset.value.animation_url,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPlayer, {
                    src: resourceUrl,
                    alt: asset.value.name
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPlayer, {
                src: resourceUrl,
                alt: asset.value.name
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx + 1 modules
var Markdown = __webpack_require__(13692);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/Account.tsx



function Account({ address , username  }) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: (0,web3_shared_src/* isSameAddress */.Wr$)(account, address !== null && address !== void 0 ? address : '') ? t('plugin_collectible_you') : username !== null && username !== void 0 ? username : address === null || address === void 0 ? void 0 : address.slice(2, 8)
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/TokenTab.tsx











const TokenTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            paddingTop: 0,
            paddingBottom: '0 !important'
        },
        container: {
            padding: theme.spacing(1)
        },
        markdown: {
            margin: theme.spacing(1, 0)
        },
        description: {
            fontSize: 14,
            wordBreak: 'break-all'
        },
        trait_content: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: theme.spacing(2)
        },
        trait: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 14,
            fontWeight: 600
        },
        chain_row: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(0.5),
            '&:last-child': {
                marginBottom: 0
            }
        },
        tokenId: {
            maxWidth: 112,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    };
});
function TokenTab(props) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = TokenTab_useStyles();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { token , asset  } = CollectibleState.useContainer();
    if (!asset.value) return null;
    var ref7, ref8, ref9;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectibleTab, {
        classes: {
            content: classes.content
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_base')
                    }),
                    asset.value.creator ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        children: [
                            t('plugin_collectible_create_by'),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: asset.value.creator.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                    address: asset.value.creator.address,
                                    username: (ref = asset.value.creator.user) === null || ref === void 0 ? void 0 : ref.username
                                })
                            })
                        ]
                    }) : asset.value.owner ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        children: [
                            t('plugin_collectible_owned_by'),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: asset.value.owner.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                    address: (ref1 = asset.value.owner) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.user) === null || ref2 === void 0 ? void 0 : ref2.username,
                                    username: (ref3 = asset.value.owner) === null || ref3 === void 0 ? void 0 : ref3.address
                                })
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                        classes: {
                            root: classes.markdown
                        },
                        content: (ref7 = (ref4 = asset.value) === null || ref4 === void 0 ? void 0 : ref4.description) !== null && ref7 !== void 0 ? ref7 : ''
                    })
                ]
            }),
            ((ref5 = asset.value.traits) === null || ref5 === void 0 ? void 0 : ref5.length) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_properties')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.trait_content,
                        children: asset.value.traits.map(({ trait_type , value  })=>{
                            var ref10;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                underline: "none",
                                href: ((ref10 = asset.value) === null || ref10 === void 0 ? void 0 : ref10.slug) ? (0,pipes/* resolveTraitLinkOnOpenSea */.zu)(chainId, asset.value.slug, trait_type, value) : '',
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                                    className: classes.trait,
                                    variant: "outlined",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            color: "primary",
                                            children: trait_type
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            children: value
                                        })
                                    ]
                                })
                            }, trait_type + value));
                        })
                    })
                ]
            }) : null,
            asset.value.asset_contract ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: [
                            t('plugin_collectible_about'),
                            " ",
                            asset.value.asset_contract.name
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.description,
                        variant: "body2",
                        children: (ref6 = asset.value.asset_contract) === null || ref6 === void 0 ? void 0 : ref6.description
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_chain_info')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_contract_address')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet, (ref8 = token === null || token === void 0 ? void 0 : token.contractAddress) !== null && ref8 !== void 0 ? ref8 : ''),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedAddress, {
                                        address: (ref9 = token === null || token === void 0 ? void 0 : token.contractAddress) !== null && ref9 !== void 0 ? ref9 : '',
                                        size: 4
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_token_id')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.tokenId,
                                variant: "body2",
                                children: token === null || token === void 0 ? void 0 : token.tokenId
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_block_chain')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: (0,web3_shared_src/* getChainName */.qzE)(chainId)
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Table/Table.js + 1 modules
var Table = __webpack_require__(44695);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(85473);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(32789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(18292);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(8919);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/formatDistanceToNow/index.js
var formatDistanceToNow = __webpack_require__(69291);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OrderRow.tsx











const OrderRow_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        account: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1
        },
        avatar: {
            width: 18,
            height: 18
        },
        accountName: {
            marginLeft: theme.spacing(0.5),
            fontSize: 14,
            lineHeight: 1
        },
        relativeTime: {
            whiteSpace: 'nowrap'
        },
        token: {
            objectFit: 'contain',
            width: 18,
            height: 18,
            marginRight: theme.spacing(0.5)
        },
        tokenLink: {
            display: 'flex',
            alignItems: 'center'
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            lineHeight: 1
        }
    };
});
function OrderRow({ order , isDifferenceToken  }) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16;
    const { classes  } = OrderRow_useStyles();
    const { provider  } = CollectibleState.useContainer();
    var ref17, ref18;
    const address = (ref18 = (ref17 = (ref = order.makerAccount) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.username) !== null && ref17 !== void 0 ? ref17 : (ref2 = order.makerAccount) === null || ref2 === void 0 ? void 0 : ref2.address) !== null && ref18 !== void 0 ? ref18 : '';
    var _quantity, _quantity1, ref19, _expirationTime;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: dist_default()('https://opensea.io/accounts/:address', {
                        address
                    }),
                    title: address,
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: (ref3 = order.makerAccount) === null || ref3 === void 0 ? void 0 : ref3.profile_img_url,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                address: (ref4 = order.makerAccount) === null || ref4 === void 0 ? void 0 : ref4.address,
                                username: (ref5 = order.makerAccount) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.user) === null || ref6 === void 0 ? void 0 : ref6.username
                            })
                        })
                    ]
                })
            }),
            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.content,
                            children: [
                                ((ref7 = order.paymentTokenContract) === null || ref7 === void 0 ? void 0 : ref7.symbol) !== 'ETH' && ((ref8 = order.paymentTokenContract) === null || ref8 === void 0 ? void 0 : ref8.symbol) !== 'WETH' && provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet, order.paymentToken),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: classes.tokenLink,
                                    children: ((ref9 = order.paymentTokenContract) === null || ref9 === void 0 ? void 0 : ref9.imageUrl) && /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: order.paymentTokenContract.imageUrl,
                                        className: classes.token,
                                        alt: (ref10 = order.paymentTokenContract) === null || ref10 === void 0 ? void 0 : ref10.symbol
                                    })
                                }) : null,
                                `${order.unitPrice} ${(ref11 = order.paymentTokenContract) === null || ref11 === void 0 ? void 0 : ref11.symbol}`
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.content,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                value: (_quantity = order.quantity) !== null && _quantity !== void 0 ? _quantity : 0,
                                decimals: new (bignumber_default())((_quantity1 = order.quantity) !== null && _quantity1 !== void 0 ? _quantity1 : 0).toString() !== '1' ? 8 : 0
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            style: {
                                display: 'flex'
                            },
                            className: classes.content,
                            children: [
                                ((ref12 = order.paymentTokenContract) === null || ref12 === void 0 ? void 0 : ref12.symbol) !== 'ETH' && ((ref13 = order.paymentTokenContract) === null || ref13 === void 0 ? void 0 : ref13.symbol) !== 'WETH' && provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet, order.paymentToken),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: classes.tokenLink,
                                    children: ((ref14 = order.paymentTokenContract) === null || ref14 === void 0 ? void 0 : ref14.imageUrl) && /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: order.paymentTokenContract.imageUrl,
                                        className: classes.token,
                                        alt: (ref15 = order.paymentTokenContract) === null || ref15 === void 0 ? void 0 : ref15.symbol
                                    })
                                }) : null,
                                `${order.unitPrice} ${provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA ? (ref19 = (ref16 = order.paymentTokenContract) === null || ref16 === void 0 ? void 0 : ref16.symbol) !== null && ref19 !== void 0 ? ref19 : '' : 'ETH'}`
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.content,
                            children: order.expirationTime && !(0,web3_shared_src/* isZero */.Fr9)(order.expirationTime) && (0,formatDistanceToNow/* default */.Z)(new Date(new (bignumber_default())((_expirationTime = order.expirationTime) !== null && _expirationTime !== void 0 ? _expirationTime : 0).multipliedBy(1000).toNumber()), {
                                addSuffix: true
                            })
                        })
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableFooter/TableFooter.js + 1 modules
var TableFooter = __webpack_require__(28119);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TablePagination/TablePagination.js + 2 modules
var TablePagination = __webpack_require__(76111);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/Pagination.tsx




const Pagination_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    spacer: {
        flex: 0
    },
    toolbar: {
        minHeight: 'unset',
        paddingLeft: 16
    },
    actions: {
        marginLeft: 0
    }
});
const TableListPagination = /*#__PURE__*/ (0,react.memo)(({ handlePrevClick , handleNextClick , prevDisabled , nextDisabled , page , pageCount  })=>{
    const { classes  } = Pagination_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableFooter/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                rowsPerPage: pageCount,
                rowsPerPageOptions: [
                    pageCount
                ],
                count: -1,
                page: page,
                classes: classes,
                onPageChange: ()=>{
                },
                labelDisplayedRows: ()=>null
                ,
                backIconButtonProps: {
                    onClick: handlePrevClick,
                    size: 'small',
                    disabled: prevDisabled
                },
                nextIconButtonProps: {
                    onClick: handleNextClick,
                    size: 'small',
                    disabled: nextDisabled
                }
            })
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(16842);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/LoadingTable.tsx


function LoadingTable() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
        size: "small",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "rectangular",
                            width: "100%",
                            height: 22
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                children: Array.from({
                    length: 5
                }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                animation: "wave",
                                variant: "rectangular",
                                width: "100%",
                                height: 14
                            })
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableFooter/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "rectangular",
                            width: "100%",
                            height: 28
                        })
                    })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OfferTab.tsx













const OfferTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        content: {
            padding: '0 !important'
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none'
        },
        button: {
            marginLeft: theme.spacing(1)
        }
    };
});
function OfferTab() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = OfferTab_useStyles();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { asset , token , provider , offers , offerPage , setOfferPage  } = CollectibleState.useContainer();
    const isDifferenceToken = (0,react.useMemo)(()=>{
        if (provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA) {
            var ref;
            var _expirationTime;
            return ((ref = offers.value) === null || ref === void 0 ? void 0 : ref.some((item)=>{
                var ref1, ref2;
                return ((ref1 = item.paymentTokenContract) === null || ref1 === void 0 ? void 0 : ref1.symbol) !== 'WETH' && ((ref2 = item.paymentTokenContract) === null || ref2 === void 0 ? void 0 : ref2.symbol) !== 'ETH' || item.quantity && new (bignumber_default())(item.quantity).toString() !== '1';
            })) && offers.value.filter((item)=>(0,web3_shared_src/* isZero */.Fr9)((_expirationTime = item.expirationTime) !== null && _expirationTime !== void 0 ? _expirationTime : 0)
            ).length === 0;
        } else {
            return false;
        }
    }, [
        provider,
        offers.value
    ]);
    const dataSource = (0,react.useMemo)(()=>{
        var ref3;
        if (!offers.value || !((ref3 = offers.value) === null || ref3 === void 0 ? void 0 : ref3.length)) return [];
        return offers.value.sort((a, b)=>{
            const current = new (bignumber_default())(a.unitPrice);
            const next = new (bignumber_default())(b.unitPrice);
            if (current.isLessThan(next)) {
                return 1;
            } else if (current.isGreaterThan(next)) {
                return -1;
            }
            return 0;
        });
    }, [
        offers.value
    ]);
    if (offers.loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingTable, {
    }));
    if (!offers.value || offers.error || !dataSource.length) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
        size: "small",
        stickyHeader: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                className: classes.empty,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                        className: classes.emptyCell,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textSecondary",
                                children: t('plugin_collectible_no_offers')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                sx: {
                                    marginTop: 1
                                },
                                variant: "text",
                                onClick: ()=>offers.retry()
                                ,
                                children: t('plugin_collectible_retry')
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableListPagination, {
                handlePrevClick: ()=>setOfferPage((prev)=>prev - 1
                    )
                ,
                handleNextClick: ()=>setOfferPage((prev)=>prev + 1
                    )
                ,
                prevDisabled: offerPage === 0,
                nextDisabled: dataSource.length < 10,
                page: offerPage,
                pageCount: 10
            })
        ]
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_from')
                            }),
                            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_unit_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_quantity')
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_expiration')
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: dataSource.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(OrderRow, {
                            order: order,
                            isDifferenceToken: isDifferenceToken
                        }, order.hash)
                    )
                }),
                provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA && dataSource.length || offerPage > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableListPagination, {
                    handlePrevClick: ()=>setOfferPage((prev)=>prev - 1
                        )
                    ,
                    handleNextClick: ()=>setOfferPage((prev)=>prev + 1
                        )
                    ,
                    prevDisabled: offerPage === 0,
                    nextDisabled: dataSource.length < 10,
                    page: offerPage,
                    pageCount: 10
                }) : null
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ListingTab.tsx













const ListingTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        content: {
            padding: '0 !important'
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none'
        },
        button: {
            marginLeft: theme.spacing(1)
        }
    };
});
function ListingTab() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ListingTab_useStyles();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { token , asset , provider , orders , orderPage , setOrderPage  } = CollectibleState.useContainer();
    const isDifferenceToken = (0,react.useMemo)(()=>{
        if (provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA) {
            var ref;
            var _expirationTime;
            return ((ref = orders.value) === null || ref === void 0 ? void 0 : ref.some((item)=>{
                var ref1, ref2;
                return ((ref1 = item.paymentTokenContract) === null || ref1 === void 0 ? void 0 : ref1.symbol) !== 'WETH' && ((ref2 = item.paymentTokenContract) === null || ref2 === void 0 ? void 0 : ref2.symbol) !== 'ETH' || item.quantity && new (bignumber_default())(item.quantity).toString() !== '1';
            })) && orders.value.filter((item)=>(0,web3_shared_src/* isZero */.Fr9)((_expirationTime = item.expirationTime) !== null && _expirationTime !== void 0 ? _expirationTime : 0)
            ).length === 0;
        } else {
            return false;
        }
    }, [
        provider,
        orders.value
    ]);
    const dataSource = (0,react.useMemo)(()=>{
        var ref3;
        if (!orders.value || !((ref3 = orders.value) === null || ref3 === void 0 ? void 0 : ref3.length)) return [];
        return orders.value.sort((a, b)=>{
            const current = new (bignumber_default())(a.unitPrice);
            const next = new (bignumber_default())(b.unitPrice);
            if (current.isLessThan(next)) return -1;
            else if (current.isGreaterThan(next)) return 1;
            return 0;
        });
    }, [
        orders.value
    ]);
    if (orders.loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingTable, {
    }));
    if (!orders.value || orders.error || !dataSource.length) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    className: classes.empty,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                            className: classes.emptyCell,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textSecondary",
                                    children: t('plugin_collectible_no_listings')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    sx: {
                                        marginTop: 1
                                    },
                                    variant: "text",
                                    onClick: ()=>orders.retry()
                                    ,
                                    children: t('plugin_collectible_retry')
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableListPagination, {
                    handlePrevClick: ()=>setOrderPage((prev)=>prev - 1
                        )
                    ,
                    handleNextClick: ()=>setOrderPage((prev)=>prev + 1
                        )
                    ,
                    prevDisabled: orderPage === 0,
                    nextDisabled: dataSource.length < 10,
                    page: orderPage,
                    pageCount: 10
                })
            ]
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_from')
                            }),
                            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_unit_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_quantity')
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_expiration')
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: dataSource.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(OrderRow, {
                            order: order,
                            isDifferenceToken: isDifferenceToken
                        }, order.hash)
                    )
                }),
                provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA && dataSource.length || orderPage > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableListPagination, {
                    handlePrevClick: ()=>setOrderPage((prev)=>prev - 1
                        )
                    ,
                    handleNextClick: ()=>setOrderPage((prev)=>prev + 1
                        )
                    ,
                    prevDisabled: orderPage === 0,
                    nextDisabled: dataSource.length < 10,
                    page: orderPage,
                    pageCount: 10
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Link.js
var icons_Link = __webpack_require__(87369);
// EXTERNAL MODULE: ./src/plugins/Wallet/formatter.ts
var formatter = __webpack_require__(57093);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/HistoryTab/Row.tsx













const Row_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        account: {
            display: 'flex',
            alignItems: 'center'
        },
        avatar: {
            width: 18,
            height: 18
        },
        accountName: {
            marginLeft: theme.spacing(0.5)
        },
        relativeTime: {
            whiteSpace: 'nowrap'
        },
        token: {
            objectFit: 'contain',
            width: 18,
            height: 18,
            marginRight: theme.spacing(0.5)
        },
        content: {
            display: 'flex',
            alignItems: 'center'
        }
    };
});
function Row({ event , isDifferenceToken  }) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10;
    const { classes  } = Row_useStyles();
    const { provider  } = CollectibleState.useContainer();
    const unitPrice = (0,react.useMemo)(()=>{
        var ref11, ref12, ref13;
        if (provider === Collectible_types/* CollectibleProvider.RARIBLE */.wg.RARIBLE || !isDifferenceToken || !event.price) return null;
        var ref14;
        const price = (0,web3_shared_src/* formatBalance */.azF)(event.price.quantity, (ref14 = (ref11 = event.price.asset) === null || ref11 === void 0 ? void 0 : ref11.decimals) !== null && ref14 !== void 0 ? ref14 : 0);
        var ref15, _decimals;
        const quantity = (0,web3_shared_src/* formatBalance */.azF)((ref15 = (ref12 = event.assetQuantity) === null || ref12 === void 0 ? void 0 : ref12.quantity) !== null && ref15 !== void 0 ? ref15 : 0, (_decimals = (ref13 = event.assetQuantity) === null || ref13 === void 0 ? void 0 : ref13.asset.decimals) !== null && _decimals !== void 0 ? _decimals : 0);
        return new (bignumber_default())(price).dividedBy(quantity).toFixed(3, 1).toString();
    }, [
        event,
        isDifferenceToken,
        provider
    ]);
    var ref16, _decimals, ref17, ref18, _username, ref19, _username1, ref20;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    variant: "body2",
                    children: provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA ? (0,pipes/* resolveOpenSeaAssetEventType */.YM)(event.eventType, (ref = event.accountPair.from) === null || ref === void 0 ? void 0 : ref.username) : (0,pipes/* resolveRaribleAssetEventType */.dp)(event.eventType)
                })
            }),
            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.content,
                            variant: "body2",
                            children: [
                                ((ref1 = event.price) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.asset) === null || ref2 === void 0 ? void 0 : ref2.imageUrl) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: event.price.asset.assetContract.blockExplorerLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: event.price.asset.imageUrl,
                                        className: classes.token,
                                        alt: event.price.asset.symbol
                                    })
                                }),
                                unitPrice,
                                (ref3 = event.price) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.asset) === null || ref4 === void 0 ? void 0 : ref4.symbol
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.content,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                value: (ref16 = (ref5 = event.assetQuantity) === null || ref5 === void 0 ? void 0 : ref5.quantity) !== null && ref16 !== void 0 ? ref16 : 0,
                                decimals: (_decimals = (ref6 = event.assetQuantity) === null || ref6 === void 0 ? void 0 : ref6.asset.decimals) !== null && _decimals !== void 0 ? _decimals : 0
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    variant: "body2",
                    children: event.price && provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA ? (0,web3_shared_src/* formatBalance */.azF)(event.price.quantity, (ref17 = (ref7 = event.price) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.asset) === null || ref8 === void 0 ? void 0 : ref8.decimals) !== null && ref17 !== void 0 ? ref17 : 0) : (ref18 = (ref9 = event.price) === null || ref9 === void 0 ? void 0 : ref9.quantity) !== null && ref18 !== void 0 ? ref18 : ''
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: event.accountPair.from && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: event.accountPair.from.link,
                    title: (ref19 = (_username = event.accountPair.from.username) !== null && _username !== void 0 ? _username : event.accountPair.from.address) !== null && ref19 !== void 0 ? ref19 : '',
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: event.accountPair.from.imageUrl,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                username: event.accountPair.from.username,
                                address: (ref10 = event.accountPair.from.address) === null || ref10 === void 0 ? void 0 : ref10.slice(2, 8)
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: event.accountPair.to && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: event.accountPair.to.link,
                    title: (ref20 = (_username1 = event.accountPair.to.username) !== null && _username1 !== void 0 ? _username1 : event.accountPair.to.address) !== null && ref20 !== void 0 ? ref20 : '',
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: event.accountPair.to.imageUrl,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                username: event.accountPair.to.username,
                                address: event.accountPair.to.address
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.relativeTime,
                children: event.transactionBlockExplorerLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: event.transactionBlockExplorerLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.content,
                        variant: "body2",
                        children: [
                            (0,formatter/* formatElapsed */.Q)(event.timestamp),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_Link/* default */.Z, {
                                fontSize: "inherit"
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    color: "primary",
                    variant: "body2",
                    children: (0,formatter/* formatElapsed */.Q)(event.timestamp)
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/HistoryTab/index.tsx











const HistoryTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        content: {
            padding: '0 !important'
        },
        spacer: {
            flex: 0
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none'
        }
    };
});
function HistoryTab(props) {
    var ref, ref1;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = HistoryTab_useStyles();
    const { provider , events , eventPage , setEventPage  } = CollectibleState.useContainer();
    //#region If there is a different asset, the unit price and quantity should be displayed
    const isDifferenceToken = (0,react.useMemo)(()=>{
        var ref2;
        if (provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA) return (ref2 = events.value) === null || ref2 === void 0 ? void 0 : ref2.data.some((item)=>{
            var ref3, ref4;
            return ((ref3 = item.price) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.asset) === null || ref4 === void 0 ? void 0 : ref4.symbol) !== 'ETH';
        });
        else return false;
    }, [
        events.value,
        provider
    ]);
    //#endregion
    if (events.loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingTable, {
    }));
    if (!events.value || events.error || !((ref = events.value) === null || ref === void 0 ? void 0 : ref.data.length)) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
        size: "small",
        stickyHeader: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                className: classes.empty,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                        className: classes.emptyCell,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textSecondary",
                                children: t('plugin_collectible_no_history')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                sx: {
                                    marginTop: 1
                                },
                                variant: "text",
                                onClick: ()=>events.retry()
                                ,
                                children: t('plugin_collectible_retry')
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableListPagination, {
                handlePrevClick: ()=>setEventPage((prev)=>prev - 1
                    )
                ,
                handleNextClick: ()=>setEventPage((prev)=>prev + 1
                    )
                ,
                prevDisabled: eventPage === 0,
                nextDisabled: !((ref1 = events.value) === null || ref1 === void 0 ? void 0 : ref1.pageInfo.hasNextPage),
                page: eventPage,
                pageCount: 10
            })
        ]
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_event')
                            }),
                            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_unit_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_quantity')
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_price')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_from')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_to')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_date')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: events.value.data.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Row, {
                            event: order,
                            isDifferenceToken: isDifferenceToken
                        }, order.id)
                    )
                }),
                provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA && events.value.data.length || eventPage > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableListPagination, {
                    handlePrevClick: ()=>setEventPage((prev)=>prev - 1
                        )
                    ,
                    handleNextClick: ()=>setEventPage((prev)=>prev + 1
                        )
                    ,
                    prevDisabled: eventPage === 0,
                    nextDisabled: !events.value.pageInfo.hasNextPage,
                    page: eventPage,
                    pageCount: 10
                }) : null
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CollectibleCard.tsx


function CollectibleCard(props) {
    const { children  } = props;
    const classes = props.classes;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes === null || classes === void 0 ? void 0 : classes.root,
        elevation: 0,
        children: children
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(12445);
;// CONCATENATED MODULE: ./src/resources/OpenSeaIcon.tsx


const svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 116 116",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "58",
            height: "58",
            rx: "29",
            transform: "matrix(-2 0 0 2 116 0)",
            fill: "#3291E9"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "58",
            height: "58",
            rx: "29",
            transform: "matrix(-2 0 0 2 116 0)",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            opacity: ".5",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M95.638 14.104c-2.25 2.361-5.024 4.67-8.356 6.89-11.163 7.437-20.071 18.062-20.32 39.29-.275 23.512 10.363 35.218 22.969 45.972C80.748 112.411 69.709 116 57.835 116 25.893 116 0 90.032 0 58S25.893 0 57.835 0C72.286 0 85.5 5.316 95.638 14.104z",
                    fill: "#3291E9"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M47.819 7.052c-1.125 1.18-2.512 2.335-4.178 3.445-5.582 3.719-10.035 9.031-10.16 19.645-.137 11.756 5.182 17.609 11.484 22.986A28.725 28.725 0 0128.918 58C12.947 58 0 45.016 0 29S12.947 0 28.917 0A28.757 28.757 0 0147.82 7.052z",
                    fill: "url(#paint1_linear)",
                    transform: "scale(2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            opacity: ".5",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M72.303 1.83c-1.548 4.205-4.233 8.651-8.207 13.24-8.789 10.147-14.558 22.765-9.178 43.292C61.72 84.313 78.152 91.65 95.669 99.47l1.775.793C87.094 110.021 73.16 116 57.834 116 25.895 116 0 90.032 0 58S25.893 0 57.835 0c4.996 0 9.844.635 14.468 1.83z",
                    fill: "#3291E9"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M36.151.915c-.773 2.103-2.116 4.326-4.103 6.62-4.394 5.073-7.28 11.383-4.589 21.646 3.401 12.976 11.617 16.644 20.375 20.554l.888.397C43.547 55.01 36.58 58 28.917 58 12.947 58 0 45.016 0 29S12.947 0 28.917 0c2.498 0 4.922.318 7.234.915z",
                    fill: "url(#paint2_linear)",
                    transform: "scale(2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            opacity: ".3",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M4.093 36.527c.185.757.39 1.526.614 2.304 7.44 25.773 28.19 31.897 50.307 38.425 15.465 4.565 31.598 9.327 44.321 21.14C88.825 109.255 74.115 116 57.835 116 25.893 116 0 90.032 0 58a57.99 57.99 0 014.093-21.473z",
                    fill: "#3291E9"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M2.047 0c.092.379.194.763.306 1.152C6.074 14.038 16.448 17.1 27.507 20.365c7.732 2.282 15.8 4.663 22.16 10.57-5.255 5.428-12.61 8.802-20.75 8.802-15.97 0-28.917-12.984-28.917-29C0 6.944.726 3.32 2.047 0z",
                    fill: "url(#paint3_linear)",
                    transform: "matrix(2 0 0 2 0 36.527)"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M57.75 100.213c23.059 0 41.751-18.746 41.751-41.87s-18.692-41.87-41.75-41.87C34.692 16.473 16 35.22 16 58.343s18.692 41.87 41.75 41.87z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M60.003 37.547v2.62l-2.825-.38v-2.24c.422.246.89.38 1.401.38.512 0 1.001-.134 1.424-.38zM59.91 65.21v6.496h-2.824v-6.518a23.97 23.97 0 012.825.022z",
            fill: "#24D7D0"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M61.312 35.105a2.837 2.837 0 01-1.402 2.464 2.74 2.74 0 01-1.4.38c-.513 0-1.002-.134-1.402-.38a2.837 2.837 0 01-1.402-2.464c0-1.568 1.268-2.845 2.825-2.845 1.557 0 2.78 1.277 2.78 2.845z",
            fill: "#14869F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M51.394 50.695v12.32c0 .18-.133.314-.311.314H39.717a.32.32 0 01-.29-.448l5.784-14.919a.317.317 0 01.422-.179l5.583 2.62c.112.046.178.18.178.292z",
            fill: "#1EB6D1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M62.96 54.458c-.733 1.725-1.779 3.338-2.957 4.816a27.71 27.71 0 01-2.825 3.002 38.68 38.68 0 01-3.533 2.939c-.15.11-.388.043-.293-.117.556-1.187 1.646-4.435 1.446-11.446-.223-7.594-2.87-12.522-3.893-14.134-.156-.224.044-.515.311-.493l5.962.784 2.825.38 4.092.538c.048 0 .074.042.088.088.215.695 1.832 6.447-1.222 13.643z",
            fill: "#6BD9FC"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M71.925 56.474c0 10.035-3.537 10.998-4.426 11.715-.134.09-.312.09-.423-.022-.6-.583-2.18-2.307-5.672-2.8a29.777 29.777 0 00-1.401-.157 30.173 30.173 0 00-2.825-.045 32.245 32.245 0 00-3.492.359c-.194.032-.181-.229-.023-.345.37-.274.742-.563 1.112-.865.134-.112.267-.202.4-.314a34.937 34.937 0 002.003-1.747c.133-.112.267-.246.378-.358.111-.112.222-.224.356-.336.049-.05.098-.092.143-.135.073-.07.134-.141.202-.215.067-.074.135-.156.205-.227.099-.1.197-.204.295-.32.111-.111.2-.223.311-.335.112-.112.223-.246.312-.358.2-.224.4-.47.6-.717.09-.135.2-.247.29-.381.089-.134.2-.246.289-.38.089-.135.178-.247.267-.382.089-.134.178-.246.267-.38.044-.068.11-.157.155-.224.067-.09.111-.18.178-.27.134-.2.267-.402.378-.604.045-.09.112-.18.156-.269.092-.185.213-.356.303-.542l.008-.018c.178-.313.334-.65.49-.963.067-.134.133-.269.178-.403 3.093-7.29 1.394-13.097 1.194-13.688-.007-.022.007-.043.023-.027a.049.049 0 00.01.008c.731.377 7.76 6.576 7.76 15.745z",
            fill: "#1EB6D1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M84.648 66.15a.762.762 0 01-.422.673c-3.134 1.515-5.088 4.623-6.238 7.909a22.912 22.912 0 01-1.984 4.225c-.52.865-1.516 1.412-2.433.992l-1.424-.627a4.016 4.016 0 00-3.292 0l-1.423.627a4.016 4.016 0 01-3.292 0l-1.424-.627a4.016 4.016 0 00-3.292 0l-1.423.627a4.016 4.016 0 01-3.292 0l-1.424-.627a4.016 4.016 0 00-3.292 0l-1.424.627a4.016 4.016 0 01-3.292 0l-1.423-.627a4.016 4.016 0 00-3.292 0l-1.313.582c-.622.275-1.326-.036-1.695-.608C35.277 75.766 34 71.602 34 67.136c0-.313 0-.627.022-.94a.32.32 0 01.312-.314H46.39c.178 0 .311.135.311.314v1.545c0 2.173 1.757 3.943 3.915 3.943h17.127c1.891 0 3.448-1.344 3.826-3.114.022-.134.156-.246.311-.246 3.807 0 7.564-.86 10.992-2.514l.686-.331a.727.727 0 01.746.064c.196.14.344.368.344.608z",
            fill: "#14869F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(58 58 -545.75 88.5729 272.875 -44.286)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: ".048",
                            stopColor: "#1F66A9"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: ".685",
                            stopColor: "#3291E9"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint1_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(-71.836 -7.39043 -1.87601 160.271 46.343 -3.102)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#E9A332",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0",
                            stopColor: "#23DC7D",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#23DC7D"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint2_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(-71.1866 12.0393 40.6313 155.011 24.39 -29.46)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#E9A332",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0",
                            stopColor: "#23DC7D",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#23DC7D"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint3_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(88.4485 40.5135 17.9137 -131.803 -26.388 98.367)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#23DC7D"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#23DC7D",
                            stopOpacity: "0"
                        })
                    ]
                })
            ]
        })
    ]
});
function OpenSeaIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: svg
    }));
}

;// CONCATENATED MODULE: ./src/resources/RaribleIcon.tsx


const RaribleIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "40",
            height: "40",
            rx: "8",
            fill: "#FEDA03"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M27.6 19.854c1.26-.328 2.382-1.27 2.382-3.165 0-3.155-2.679-3.889-6.111-3.889H10.2v14.206h5.754v-4.821h6.825c1.052 0 1.667.417 1.667 1.448v3.373H30.2v-3.551c0-1.935-1.091-3.155-2.6-3.601zm-4.722-1.498h-6.924v-1.39h6.924c.755 0 1.21.1 1.21.695s-.456.695-1.21.695z",
            fill: "#000"
        })
    ]
});
function RaribleIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: RaribleIcon_svg
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CollectibleProviderIcon.tsx






const CollectibleProviderIcon_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    opensea: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    },
    rarible: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    }
});
function CollectibleProviderIcon(props) {
    const { classes  } = CollectibleProviderIcon_useStyles();
    switch(props.provider){
        case Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(OpenSeaIcon, {
                classes: {
                    root: classes.opensea
                },
                viewBox: "0 0 16 16"
            }));
        case Collectible_types/* CollectibleProvider.RARIBLE */.wg.RARIBLE:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RaribleIcon, {
                classes: {
                    root: classes.rarible
                },
                viewBox: "0 0 16 16"
            }));
        default:
            (0,esm/* unreachable */.t1)(props.provider);
    }
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/PluginSkeleton.tsx



const PluginSkeleton_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(2),
            '&:first-child': {
                marginTop: theme.spacing(3)
            }
        }
    };
});
function PluginSkeleton() {
    const { classes  } = PluginSkeleton_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: Array.from({
            length: 2
        }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.skeleton,
                animation: "wave",
                variant: "rectangular",
                width: i === 0 ? '80%' : '60%',
                height: 15
            }, i)
        )
    }));
}

// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(75388);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(8672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(87239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(98569);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(26424);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(9011);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(92070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/esm/ExpandMore.js
var ExpandMore = __webpack_require__(3637);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/UnreviewedWarning.tsx





function UnreviewedWarning() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [expand, setExpand] = (0,react.useState)(true);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        variant: "outlined",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
            expanded: expand,
            disableGutters: true,
            square: true,
            onChange: ()=>setExpand((x)=>!x
                )
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.Z, {
                    expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        children: t('plugin_collectible_not_been_reviewed_by_opensea')
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textSecondary",
                        variant: "body2",
                        children: t('plugin_collectible_reviewed_tips')
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(90335);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(30540);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/SelectTokenAmountPanel.tsx






function SelectTokenAmountPanel(props) {
    var ref;
    const { amount , balance , token , disableNativeToken =false , disableSearchBar =false , onAmountChange , onTokenChange , FixedTokenListProps , TokenAmountPanelProps ,  } = props;
    //#region select token
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const { setDialog: setSelectTokenDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        onTokenChange(ev.token);
    }, [
        id,
        onTokenChange
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken,
            disableSearchBar,
            FixedTokenListProps
        });
    }, [
        id,
        disableNativeToken,
        disableSearchBar,
        FixedTokenListProps
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
        amount: amount,
        balance: balance,
        token: token,
        label: "Amount",
        onAmountChange: onAmountChange,
        ...TokenAmountPanelProps,
        SelectTokenChip: {
            ...TokenAmountPanelProps === null || TokenAmountPanelProps === void 0 ? void 0 : TokenAmountPanelProps.SelectTokenChip,
            ChipProps: {
                ...TokenAmountPanelProps === null || TokenAmountPanelProps === void 0 ? void 0 : (ref = TokenAmountPanelProps.SelectTokenChip) === null || ref === void 0 ? void 0 : ref.ChipProps,
                onClick: onSelectTokenChipClick
            }
        }
    }));
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(77016);
// EXTERNAL MODULE: ./src/web3/UI/DateTimePanel.tsx
var DateTimePanel = __webpack_require__(13763);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var Trader_messages = __webpack_require__(62323);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/MakeOfferDialog.tsx





















const MakeOfferDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {
        },
        buttons: {
            width: '100%',
            margin: `0 ${theme.spacing(-0.5)}`
        },
        button: {
            flex: 1,
            margin: `${theme.spacing(1.5)} ${theme.spacing(0.5)} 0`
        }
    };
});
function MakeOfferDialog(props) {
    var ref, ref1, ref2, ref3, ref4, ref5;
    const { asset , open , onClose  } = props;
    var ref6;
    const isAuction = (ref6 = asset === null || asset === void 0 ? void 0 : (ref = asset.value) === null || ref === void 0 ? void 0 : ref.is_auction) !== null && ref6 !== void 0 ? ref6 : false;
    var ref7;
    const isVerified = (ref7 = asset === null || asset === void 0 ? void 0 : (ref1 = asset.value) === null || ref1 === void 0 ? void 0 : ref1.is_verified) !== null && ref7 !== void 0 ? ref7 : false;
    var ref8;
    const paymentTokens = (ref8 = isAuction ? asset === null || asset === void 0 ? void 0 : (ref2 = asset.value) === null || ref2 === void 0 ? void 0 : ref2.order_payment_tokens : asset === null || asset === void 0 ? void 0 : (ref3 = asset.value) === null || ref3 === void 0 ? void 0 : ref3.offer_payment_tokens) !== null && ref8 !== void 0 ? ref8 : [];
    const selectedPaymentToken = (0,lodash.first)(paymentTokens);
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = MakeOfferDialog_useStyles();
    const { enqueueSnackbar  } = (0,theme_src/* useSnackbar */.Ds)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const [expirationDateTime, setExpirationDateTime] = (0,react.useState)(new Date());
    const [unreviewedChecked, setUnreviewedChecked] = (0,react.useState)(false);
    const [ToS_Checked, setToS_Checked] = (0,react.useState)(false);
    const { amount , token , balance , setAmount , setToken  } = (0,web3_shared_src/* useFungibleTokenWatched */.g3P)(selectedPaymentToken);
    const onMakeOffer = (0,react.useCallback)(async ()=>{
        if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return;
        if (!asset.value.token_id || !asset.value.token_address) return;
        if (!(token === null || token === void 0 ? void 0 : token.value)) return;
        if (token.value.type !== web3_shared_src/* EthereumTokenType.Native */.Drc.Native && token.value.type !== web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20) return;
        try {
            await messages/* PluginCollectibleRPC.createBuyOrder */.O.createBuyOrder({
                asset: (0,helpers/* toAsset */.J8)({
                    tokenId: asset.value.token_id,
                    tokenAddress: asset.value.token_address,
                    schemaName: asset.value.asset_contract.schemaName
                }),
                accountAddress: account,
                startAmount: Number.parseFloat(amount),
                expirationTime: !isAuction ? (0,helpers/* toUnixTimestamp */.nz)(expirationDateTime) : undefined,
                paymentTokenAddress: token.value.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native ? undefined : token.value.address
            });
        } catch (error) {
            if (error instanceof Error) {
                enqueueSnackbar(error.message, {
                    variant: 'error',
                    preventDuplicate: true
                });
            }
            throw error;
        }
    }, [
        asset === null || asset === void 0 ? void 0 : asset.value,
        token,
        account,
        amount,
        expirationDateTime,
        isAuction,
        enqueueSnackbar
    ]);
    const { openDialog: openSwapDialog  } = (0,shared_src.useRemoteControlledDialog)(Trader_messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    (0,react.useEffect)(()=>{
        setAmount('');
        setExpirationDateTime(new Date());
    }, [
        open
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        const amount_ = new (bignumber_default())(amount || '0');
        var _value;
        const balance_ = new (bignumber_default())((_value = balance.value) !== null && _value !== void 0 ? _value : '0');
        if (amount_.isZero()) return t('plugin_collectible_enter_a_price');
        if (balance_.isZero() || amount_.isGreaterThan(balance_)) return t('plugin_collectible_insufficent_balance');
        if (!isAuction && expirationDateTime.getTime() - Date.now() <= 0) return t('plugin_collectible_invalid_expiration_date');
        if (!isVerified && !unreviewedChecked) return t('plugin_collectible_ensure_unreviewed_item');
        if (!isVerified && !ToS_Checked) return t('plugin_collectible_check_tos_document');
        return '';
    }, [
        amount,
        balance.value,
        expirationDateTime,
        isVerified,
        isAuction,
        unreviewedChecked,
        ToS_Checked
    ]);
    if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return null;
    var _value;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: isAuction ? t('plugin_collectible_place_a_bid') : t('plugin_collectible_make_an_offer'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        children: [
                            isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    marginBottom: 2
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnreviewedWarning, {
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel, {
                                amount: amount,
                                balance: (_value = balance.value) !== null && _value !== void 0 ? _value : '0',
                                token: token.value,
                                disableNativeToken: !paymentTokens.some((x)=>(0,web3_shared_src/* isNative */.tYA)(x.address)
                                ),
                                onAmountChange: setAmount,
                                onTokenChange: setToken,
                                TokenAmountPanelProps: {
                                    label: t('plugin_collectible_price')
                                },
                                FixedTokenListProps: {
                                    selectedTokens: selectedPaymentToken ? [
                                        selectedPaymentToken.address
                                    ] : [],
                                    tokens: paymentTokens,
                                    whitelist: paymentTokens.map((x)=>x.address
                                    )
                                }
                            }),
                            !isAuction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
                                label: t('plugin_collectible_expiration_date'),
                                date: expirationDateTime,
                                min: (0,format/* default */.Z)(new Date(), "yyyy-MM-dd'T00:00"),
                                onChange: setExpirationDateTime,
                                className: classes.panel,
                                fullWidth: true
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    padding: 2,
                                    paddingBottom: 0
                                },
                                children: isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                            className: classes.label,
                                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                                color: "primary",
                                                checked: unreviewedChecked,
                                                onChange: (ev)=>setUnreviewedChecked(ev.target.checked)
                                            }),
                                            label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                children: t('plugin_collectible_approved_by_open_sea')
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                            className: classes.label,
                                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                                color: "primary",
                                                checked: ToS_Checked,
                                                onChange: (ev)=>setToS_Checked(ev.target.checked)
                                            }),
                                            label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                                    i18nKey: "plugin_collectible_legal_text",
                                                    components: {
                                                        terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                            color: "primary",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            href: "https://opensea.io/tos"
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.buttons,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                                        className: classes.button,
                                        variant: "contained",
                                        disabled: !!validationMessage,
                                        size: "large",
                                        init: validationMessage || t(isAuction ? 'plugin_collectible_place_bid' : 'plugin_collectible_make_offer'),
                                        waiting: t(isAuction ? 'plugin_collectible_place_bid' : 'plugin_collectible_make_offer'),
                                        complete: t('plugin_collectible_done'),
                                        failed: t('plugin_collectible_retry'),
                                        executor: onMakeOffer,
                                        completeOnClick: onClose,
                                        failedOnClick: "use executor"
                                    }),
                                    (isAuction ? (ref4 = asset.value) === null || ref4 === void 0 ? void 0 : ref4.is_collection_weth : (ref5 = asset.value) === null || ref5 === void 0 ? void 0 : ref5.is_order_weth) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        className: classes.button,
                                        variant: "contained",
                                        size: "large",
                                        onClick: openSwapDialog,
                                        children: "Convert ETH"
                                    }) : null
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var wallet_ts_dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ListingByPriceCard.tsx















const ListingByPriceCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {
            marginTop: theme.spacing(1.5)
        },
        caption: {
            fontSize: 11
        },
        button: {
            marginTop: theme.spacing(1.5)
        }
    };
});
function ListingByPriceCard(props) {
    const { asset , tokenWatched , paymentTokens , open , onClose  } = props;
    const { amount , token , balance , setAmount , setToken  } = tokenWatched;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ListingByPriceCard_useStyles();
    const { enqueueSnackbar  } = (0,theme_src/* useSnackbar */.Ds)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const [scheduleTime, setScheduleTime] = (0,react.useState)(new Date());
    const [expirationTime, setExpirationTime] = (0,react.useState)(new Date());
    const [buyerAddress, setBuyerAddress] = (0,react.useState)('');
    const [endingAmount, setEndingAmount] = (0,react.useState)('');
    const [endingPriceChecked, setEndingPriceChecked] = (0,react.useState)(false);
    const [futureTimeChecked, setFutureTimeChecked] = (0,react.useState)(false);
    const [privacyChecked, setPrivacyChecked] = (0,react.useState)(false);
    const validationMessage = (0,react.useMemo)(()=>{
        if ((0,web3_shared_src/* isZero */.Fr9)(amount || '0')) return t('plugin_collectible_enter_a_price');
        if (endingPriceChecked && endingAmount && !(0,web3_shared_src/* isGreaterThan */.T1o)(amount || '0', endingAmount || '0')) return t('plugin_collectible_invalid_ending_price');
        if (futureTimeChecked && Date.now() >= scheduleTime.getTime()) return t('plugin_collectible_invalid_schedule_date');
        if (endingPriceChecked && Date.now() >= expirationTime.getTime()) return t('plugin_collectible_invalid_expiration_date');
        if (privacyChecked && buyerAddress && !wallet_ts_dist.EthereumAddress.isValid(buyerAddress)) return t('plugin_collectible_invalid_buyer_address');
        return '';
    }, [
        amount,
        endingPriceChecked,
        endingAmount,
        futureTimeChecked,
        scheduleTime,
        expirationTime,
        privacyChecked,
        buyerAddress, 
    ]);
    const onPostListing = (0,react.useCallback)(async ()=>{
        if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return;
        if (!asset.value.token_id || !asset.value.token_address) return;
        if (!(token === null || token === void 0 ? void 0 : token.value)) return;
        if (token.value.type !== web3_shared_src/* EthereumTokenType.Native */.Drc.Native && token.value.type !== web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20) return;
        try {
            await messages/* PluginCollectibleRPC.createSellOrder */.O.createSellOrder({
                asset: (0,helpers/* toAsset */.J8)({
                    tokenId: asset.value.token_id,
                    tokenAddress: asset.value.token_address,
                    schemaName: asset.value.asset_contract.schemaName
                }),
                accountAddress: account,
                startAmount: Number.parseFloat(amount),
                endAmount: endingPriceChecked && endingAmount ? Number.parseFloat(endingAmount) : undefined,
                listingTime: futureTimeChecked ? (0,helpers/* toUnixTimestamp */.nz)(scheduleTime) : undefined,
                expirationTime: endingPriceChecked ? (0,helpers/* toUnixTimestamp */.nz)(expirationTime) : undefined,
                buyerAddress: privacyChecked ? buyerAddress : undefined
            });
        } catch (error) {
            if (error instanceof Error) {
                enqueueSnackbar(error.message, {
                    variant: 'error',
                    preventDuplicate: true
                });
            }
            throw error;
        }
    }, [
        asset === null || asset === void 0 ? void 0 : asset.value,
        token,
        amount,
        account,
        endingAmount,
        scheduleTime,
        expirationTime,
        buyerAddress,
        endingPriceChecked,
        futureTimeChecked,
        privacyChecked,
        enqueueSnackbar, 
    ]);
    (0,react.useEffect)(()=>{
        setAmount('');
        setScheduleTime(new Date());
        setExpirationTime(new Date());
        setBuyerAddress('');
        setEndingAmount('');
    }, [
        open
    ]);
    var _value, _value1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        elevation: 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel, {
                        amount: amount,
                        balance: (_value = balance.value) !== null && _value !== void 0 ? _value : '0',
                        token: token.value,
                        disableNativeToken: !paymentTokens.some((x)=>(0,web3_shared_src/* isNative */.tYA)(x.address)
                        ),
                        onAmountChange: setAmount,
                        onTokenChange: setToken,
                        TokenAmountPanelProps: {
                            label: endingPriceChecked ? t('plugin_collectible_starting_price') : t('plugin_collectible_price'),
                            TextFieldProps: {
                                classes: {
                                    root: classes.panel
                                },
                                helperText: endingPriceChecked ? t('plugin_collectible_set_initial_price') : t('plugin_collectible_ending_price_tip')
                            }
                        },
                        FixedTokenListProps: {
                            selectedTokens: token.value ? [
                                token.value.address
                            ] : [],
                            tokens: paymentTokens,
                            whitelist: paymentTokens.map((x)=>x.address
                            )
                        }
                    }),
                    endingPriceChecked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel, {
                        amount: endingAmount,
                        balance: (_value1 = balance.value) !== null && _value1 !== void 0 ? _value1 : '0',
                        onAmountChange: setEndingAmount,
                        token: token.value,
                        onTokenChange: setToken,
                        TokenAmountPanelProps: {
                            label: t('plugin_collectible_ending_price'),
                            disableToken: true,
                            disableBalance: true,
                            TextFieldProps: {
                                classes: {
                                    root: classes.panel
                                },
                                helperText: t('plugin_collectible_ending_price_less_than_staring')
                            }
                        }
                    }) : null,
                    futureTimeChecked || endingPriceChecked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
                        label: endingPriceChecked ? t('plugin_collectible_expiration_date') : t('plugin_collectible_schedule_date'),
                        date: endingPriceChecked ? expirationTime : scheduleTime,
                        min: (0,format/* default */.Z)(new Date(), "yyyy-MM-dd'T23:59"),
                        onChange: endingPriceChecked ? setExpirationTime : setScheduleTime,
                        className: classes.panel,
                        helperText: endingPriceChecked ? t('plugin_collectible_auto_cancel_tip') : t('plugin_collectible_schedule_future_date'),
                        fullWidth: true
                    }) : null,
                    privacyChecked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        className: classes.panel,
                        fullWidth: true,
                        value: buyerAddress,
                        variant: "outlined",
                        label: t('plugin_collectible_buyer_address'),
                        placeholder: t('plugin_collectible_buyer_address_placeholder'),
                        helperText: t('plugin_collectible_buyer_address_helper_text'),
                        onChange: (e)=>setBuyerAddress(e.target.value)
                        ,
                        InputLabelProps: {
                            shrink: true
                        }
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            padding: 2,
                            paddingBottom: 0
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: endingPriceChecked,
                                    onChange: (ev)=>setEndingPriceChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: t('plugin_collectible_include_ending_price')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.caption,
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_collectible_include_ending_price_helper')
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: futureTimeChecked,
                                    onChange: (ev)=>setFutureTimeChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: t('plugin_collectible_schedule_for_a_future_time')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.caption,
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_collectible_schedule_for_a_future_time_helper')
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: privacyChecked,
                                    onChange: (ev)=>setPrivacyChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: t('plugin_collectible_privacy')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.caption,
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_collectible_privacy_helper')
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                        className: classes.button,
                        variant: "contained",
                        disabled: !!validationMessage,
                        fullWidth: true,
                        size: "large",
                        init: validationMessage || t('plugin_collectible_post_listing'),
                        waiting: t('plugin_collectible_post_listing'),
                        complete: t('plugin_collectible_done'),
                        failed: t('plugin_collectible_retry'),
                        executor: onPostListing,
                        completeOnClick: onClose,
                        failedOnClick: "use executor"
                    })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ListingByHighestBidCard.tsx














const ListingByHighestBidCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {
        },
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function ListingByHighestBidCard(props) {
    const { asset , tokenWatched , paymentTokens , open , onClose  } = props;
    const { amount , token , balance , setAmount , setToken  } = tokenWatched;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ListingByHighestBidCard_useStyles();
    const { enqueueSnackbar  } = (0,theme_src/* useSnackbar */.Ds)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const [reservePrice, setReservePrice] = (0,react.useState)('');
    const [expirationDateTime, setExpirationDateTime] = (0,react.useState)(new Date());
    const validationMessage = (0,react.useMemo)(()=>{
        if ((0,web3_shared_src/* isZero */.Fr9)(amount || '0')) return t('plugin_collectible_enter_minimum_bid');
        if ((0,web3_shared_src/* isZero */.Fr9)(reservePrice || '0')) return t('plugin_collectible_enter_reserve_price');
        if ((0,web3_shared_src/* isLessThan */.FIT)(reservePrice, amount)) return t('plugin_collectible_invalid_reserve_price');
        if (expirationDateTime.getTime() - Date.now() <= 0) return t('plugin_collectible_invalid_expiration_date');
        return '';
    }, [
        amount,
        reservePrice,
        expirationDateTime
    ]);
    const onPostListing = (0,react.useCallback)(async ()=>{
        if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return;
        if (!asset.value.token_id || !asset.value.token_address) return;
        if (!(token === null || token === void 0 ? void 0 : token.value)) return;
        if (token.value.type !== web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20) return;
        try {
            await messages/* PluginCollectibleRPC.createSellOrder */.O.createSellOrder({
                asset: (0,helpers/* toAsset */.J8)({
                    tokenId: asset.value.token_id,
                    tokenAddress: asset.value.token_address,
                    schemaName: asset.value.asset_contract.schemaName
                }),
                accountAddress: account,
                startAmount: Number.parseFloat(amount),
                expirationTime: (0,helpers/* toUnixTimestamp */.nz)(expirationDateTime),
                englishAuctionReservePrice: Number.parseFloat(reservePrice),
                waitForHighestBid: true,
                paymentTokenAddress: token.value.address
            });
        } catch (error) {
            if (error instanceof Error) {
                enqueueSnackbar(error.message, {
                    variant: 'error',
                    preventDuplicate: true
                });
            }
            throw error;
        }
    }, [
        asset === null || asset === void 0 ? void 0 : asset.value,
        token,
        amount,
        account,
        reservePrice,
        expirationDateTime,
        enqueueSnackbar
    ]);
    (0,react.useEffect)(()=>{
        setAmount('');
        setReservePrice('');
        setExpirationDateTime(new Date());
    }, [
        open
    ]);
    var _value, _value1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        elevation: 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel, {
                        amount: amount,
                        balance: (_value = balance.value) !== null && _value !== void 0 ? _value : '0',
                        token: token.value,
                        disableNativeToken: !paymentTokens.some((x)=>(0,web3_shared_src/* isNative */.tYA)(x.address)
                        ),
                        onAmountChange: setAmount,
                        onTokenChange: setToken,
                        TokenAmountPanelProps: {
                            classes: {
                                root: classes.panel
                            },
                            label: t('plugin_collectible_minimum_bid'),
                            TextFieldProps: {
                                helperText: t('plugin_collectible_set_starting_bid_price')
                            }
                        },
                        FixedTokenListProps: {
                            selectedTokens: token.value ? [
                                token.value.address
                            ] : [],
                            tokens: paymentTokens,
                            whitelist: paymentTokens.map((x)=>x.address
                            )
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel, {
                        amount: reservePrice,
                        balance: (_value1 = balance.value) !== null && _value1 !== void 0 ? _value1 : '0',
                        onAmountChange: setReservePrice,
                        token: token.value,
                        onTokenChange: setToken,
                        TokenAmountPanelProps: {
                            classes: {
                                root: classes.panel
                            },
                            disableToken: true,
                            disableBalance: true,
                            label: t('plugin_collectible_reserve_price'),
                            TextFieldProps: {
                                helperText: t('plugin_collectible_reserve_price_helper')
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
                        label: t('plugin_collectible_expiration_date'),
                        date: expirationDateTime,
                        min: (0,format/* default */.Z)(new Date(), "yyyy-MM-dd'T23:59"),
                        onChange: setExpirationDateTime,
                        className: classes.panel,
                        helperText: t('plugin_collectible_auction_auto_end'),
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                        className: classes.button,
                        variant: "contained",
                        disabled: !!validationMessage,
                        fullWidth: true,
                        size: "large",
                        init: validationMessage || t('plugin_collectible_post_listing'),
                        waiting: t('plugin_collectible_post_listing'),
                        complete: t('plugin_collectible_done'),
                        failed: t('plugin_collectible_retry'),
                        executor: onPostListing,
                        completeOnClick: onClose,
                        failedOnClick: "use executor"
                    })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/PostListingDialog.tsx










const PostListingDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        button: {
            marginTop: theme.spacing(1.5)
        }
    };
});
function PostListingDialog(props) {
    var ref;
    const { asset , open , onClose  } = props;
    var ref1;
    const paymentTokens = (ref1 = asset === null || asset === void 0 ? void 0 : (ref = asset.value) === null || ref === void 0 ? void 0 : ref.offer_payment_tokens) !== null && ref1 !== void 0 ? ref1 : [];
    const selectedPaymentToken = (0,lodash.first)(paymentTokens);
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = PostListingDialog_useStyles();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const tokenWatched = (0,web3_shared_src/* useFungibleTokenWatched */.g3P)(selectedPaymentToken);
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            label: t('plugin_collectible_set_price')
        }, "price"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            label: t('plugin_collectible_highest_bid')
        }, "bid"), 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t('plugin_collectible_post_listing'),
        open: open,
        onClose: onClose,
        maxWidth: "md",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                    indicatorColor: "primary",
                    textColor: "primary",
                    variant: "fullWidth",
                    value: tabIndex,
                    onChange: (ev, newValue)=>setTabIndex(newValue)
                    ,
                    TabIndicatorProps: {
                        style: {
                            display: 'none'
                        }
                    },
                    children: tabs
                }),
                tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListingByPriceCard, {
                    asset: asset,
                    tokenWatched: tokenWatched,
                    paymentTokens: paymentTokens,
                    open: open,
                    onClose: onClose
                }) : null,
                tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListingByHighestBidCard, {
                    asset: asset,
                    tokenWatched: tokenWatched,
                    paymentTokens: paymentTokens,
                    open: open,
                    onClose: onClose
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(64921);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CheckoutOrder.tsx







const CheckoutOrder_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        itemInfo: {
            display: 'flex',
            alignItems: 'center'
        },
        texts: {
            marginLeft: theme.spacing(1)
        }
    })
);
function CheckoutOrder(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { asset  } = props;
    const order = asset === null || asset === void 0 ? void 0 : (ref = asset.value) === null || ref === void 0 ? void 0 : ref.order_;
    const { classes  } = CheckoutOrder_useStyles();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return null;
    if (!order) return null;
    var _collection_name, _name, _name1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
        size: "small",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            children: t('plugin_collectible_item')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            align: "right",
                            children: t('plugin_collectible_subtotal')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.itemInfo,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                            height: 80,
                                            width: 80,
                                            src: asset.value.image_url
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classes.texts,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    children: (_collection_name = asset.value.collection_name) !== null && _collection_name !== void 0 ? _collection_name : ''
                                                }),
                                                asset.value.token_address && asset.value.token_id ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                    color: "primary",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    href: (0,pipes/* resolveAssetLinkOnOpenSea */.uC)(chainId, asset.value.token_address, asset.value.token_id),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        children: (_name = asset.value.name) !== null && _name !== void 0 ? _name : ''
                                                    })
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    children: (_name1 = asset.value.name) !== null && _name1 !== void 0 ? _name1 : ''
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "right",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        asset.value.current_price,
                                        " ",
                                        asset.value.current_symbol
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_collectible_total')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "right",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        asset.value.current_price,
                                        " ",
                                        asset.value.current_symbol
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CheckoutDialog.tsx
















const CheckoutDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {
        },
        buttons: {
            width: '100%',
            margin: `0 ${theme.spacing(-0.5)}`
        },
        button: {
            flex: 1,
            margin: `${theme.spacing(1.5)} ${theme.spacing(0.5)} 0`
        }
    };
});
function CheckoutDialog(props) {
    var ref, ref1, ref2;
    const { asset , open , onClose  } = props;
    var ref3;
    const isAuction = (ref3 = asset === null || asset === void 0 ? void 0 : (ref = asset.value) === null || ref === void 0 ? void 0 : ref.is_auction) !== null && ref3 !== void 0 ? ref3 : false;
    var ref4;
    const isVerified = (ref4 = asset === null || asset === void 0 ? void 0 : (ref1 = asset.value) === null || ref1 === void 0 ? void 0 : ref1.is_verified) !== null && ref4 !== void 0 ? ref4 : false;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CheckoutDialog_useStyles();
    const { enqueueSnackbar  } = (0,theme_src/* useSnackbar */.Ds)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const [unreviewedChecked, setUnreviewedChecked] = (0,react.useState)(false);
    const [ToS_Checked, setToS_Checked] = (0,react.useState)(false);
    const onCheckout = (0,react.useCallback)(async ()=>{
        if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return;
        if (!asset.value.token_id || !asset.value.token_address) return;
        if (!asset.value.order_) return;
        try {
            await messages/* PluginCollectibleRPC.fulfillOrder */.O.fulfillOrder({
                order: asset.value.order_,
                accountAddress: account,
                recipientAddress: account
            });
        } catch (error) {
            if (error instanceof Error) {
                enqueueSnackbar(error.message, {
                    variant: 'error',
                    preventDuplicate: true
                });
            }
            throw error;
        }
    }, [
        asset === null || asset === void 0 ? void 0 : asset.value,
        account,
        enqueueSnackbar
    ]);
    const { openDialog: openSwapDialog  } = (0,shared_src.useRemoteControlledDialog)(Trader_messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    const validationMessage = (0,react.useMemo)(()=>{
        if (!isVerified && !unreviewedChecked) return t('plugin_collectible_ensure_unreviewed_item');
        if (!isVerified && !ToS_Checked) return t('plugin_collectible_check_tos_document');
        return '';
    }, [
        isVerified,
        unreviewedChecked,
        ToS_Checked
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t('plugin_collectible_checkout'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        children: [
                            isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    marginBottom: 2
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnreviewedWarning, {
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                sx: {
                                    padding: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckoutOrder, {
                                        asset: asset
                                    }),
                                    isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                className: classes.label,
                                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                                    color: "primary",
                                                    checked: unreviewedChecked,
                                                    onChange: (ev)=>setUnreviewedChecked(ev.target.checked)
                                                }),
                                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    variant: "body2",
                                                    children: t('plugin_collectible_approved_tips')
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                className: classes.label,
                                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                                    color: "primary",
                                                    checked: ToS_Checked,
                                                    onChange: (ev)=>setToS_Checked(ev.target.checked)
                                                }),
                                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    variant: "body2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                                        i18nKey: "plugin_collectible_agree_terms",
                                                        components: {
                                                            terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                                color: "primary",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                href: "https://opensea.io/tos"
                                                            })
                                                        }
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.buttons,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                                        className: classes.button,
                                        variant: "contained",
                                        disabled: !!validationMessage,
                                        size: "large",
                                        init: validationMessage || t('plugin_collectible_checkout'),
                                        waiting: t('plugin_collectible_checkout'),
                                        complete: t('plugin_collectible_done'),
                                        failed: t('plugin_collectible_retry'),
                                        executor: onCheckout,
                                        completeOnClick: onClose,
                                        failedOnClick: "use executor"
                                    }),
                                    (asset === null || asset === void 0 ? void 0 : (ref2 = asset.value) === null || ref2 === void 0 ? void 0 : ref2.is_order_weth) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        className: classes.button,
                                        variant: "contained",
                                        size: "large",
                                        onClick: openSwapDialog,
                                        children: t('plugin_collectible_convert_eth')
                                    }) : null
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ActionBar.tsx











const ActionBar_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            marginLeft: theme.spacing(-0.5),
            marginRight: theme.spacing(-0.5)
        },
        button: {
            flex: 1,
            margin: `0 ${theme.spacing(0.5)}`
        }
    };
});
function ActionBar(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ActionBar_useStyles();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { asset , token  } = CollectibleState.useContainer();
    const { open: openCheckoutDialog , onOpen: onOpenCheckoutDialog , onClose: onCloseCheckoutDialog ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    const { open: openOfferDialog , onOpen: onOpenOfferDialog , onClose: onCloseOfferDialog  } = (0,useControlledDialog/* useControlledDialog */.D)();
    const { open: openListingDialog , onOpen: onOpenListingDialog , onClose: onCloseListingDialog ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    if (!asset.value) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        sx: {
            marginTop: 1
        },
        display: "flex",
        justifyContent: "center",
        children: [
            !asset.value.is_owner && asset.value.is_auction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                fullWidth: true,
                variant: "contained",
                onClick: onOpenOfferDialog,
                children: t('plugin_collectible_place_bid')
            }) : null,
            !asset.value.is_owner && !asset.value.is_auction && ((ref = asset.value) === null || ref === void 0 ? void 0 : ref.order_) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                variant: "contained",
                onClick: onOpenCheckoutDialog,
                children: t('plugin_collectible_buy_now')
            }) : null,
            !asset.value.is_owner && !asset.value.is_auction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                variant: "contained",
                onClick: onOpenOfferDialog,
                children: t('plugin_collectible_make_offer')
            }) : null,
            asset.value.is_owner ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                variant: "contained",
                onClick: onOpenListingDialog,
                children: t('plugin_collectible_sell')
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckoutDialog, {
                asset: asset,
                open: openCheckoutDialog,
                onClose: onCloseCheckoutDialog
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MakeOfferDialog, {
                asset: asset,
                open: openOfferDialog,
                onClose: onCloseOfferDialog
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PostListingDialog, {
                asset: asset,
                open: openListingDialog,
                onClose: onCloseListingDialog
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/FootnoteMenu.tsx
var FootnoteMenu = __webpack_require__(8354);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/Collectible.tsx






























const Collectible_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0
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
        footer: {
            marginTop: -1,
            zIndex: 1,
            position: 'relative',
            borderTop: `solid 1px ${theme.palette.divider}`,
            justifyContent: 'space-between'
        },
        tabs: {
            height: 'var(--tabHeight)',
            width: '100%',
            minHeight: 'unset',
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        tab: {
            height: 'var(--tabHeight)',
            minHeight: 'unset',
            minWidth: 'unset',
            whiteSpace: 'nowrap'
        },
        subtitle: {
            fontSize: 12,
            marginRight: theme.spacing(0.5),
            maxHeight: '3.5rem',
            overflow: 'hidden',
            wordBreak: 'break-word'
        },
        description: {
            fontSize: 12,
            '& > strong': {
                color: theme.palette.text.primary,
                fontWeight: 300
            }
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
        footMenu: {
            color: theme.palette.text.secondary,
            fontSize: 10,
            display: 'flex',
            alignItems: 'center'
        },
        footName: {
            marginLeft: theme.spacing(0.5)
        },
        maskbook: {
            width: 40,
            height: 10
        },
        countdown: {
            fontSize: 12,
            borderRadius: 8,
            display: 'block',
            white: '100%',
            color: theme.palette.common.white,
            backgroundColor: '#eb5757',
            padding: theme.spacing(0.5, 2)
        }
    };
});
function Collectible(props) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Collectible_useStyles();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { asset , provider , tabIndex , setTabIndex  } = CollectibleState.useContainer();
    //#region sync with settings
    const collectibleProviderOptions = (0,esm/* getEnumAsArray */.Yl)(Collectible_types/* CollectibleProvider */.wg);
    const onDataProviderChange = (0,react.useCallback)((option)=>{
        currentCollectibleProviderSettings.value = option.value;
    }, []);
    //#endregion
    //#region provider switcher
    const CollectibleProviderSwitcher = (0,utils/* useSettingsSwitcher */.MN)(currentCollectibleProviderSettings, (0,esm/* getEnumAsArray */.Yl)(Collectible_types/* CollectibleProvider */.wg).map((x)=>x.value
    ), pipes/* resolveCollectibleProviderName */.l0);
    //#endregion
    if (asset.loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PluginSkeleton, {
    }));
    if (!asset.value) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                color: "textPrimary",
                sx: {
                    marginTop: 8,
                    marginBottom: 8
                },
                children: [
                    "Failed to load your collectible on ",
                    (0,pipes/* resolveCollectibleProviderName */.l0)(provider),
                    "."
                ]
            }),
            CollectibleProviderSwitcher,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                color: "primary",
                size: "small",
                variant: "text",
                onClick: ()=>asset.retry()
                ,
                sx: {
                    marginTop: 1.5
                },
                children: "Refresh"
            })
        ]
    }));
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_article')
        }, "article"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_details')
        }, "details"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_offers')
        }, "offers"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_listing')
        }, "listing"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_history')
        }, "history"), 
    ];
    const endDate = (ref = asset.value) === null || ref === void 0 ? void 0 : ref.end_time;
    var ref9, ref10, ref11, _name, _name1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectibleCard, {
                classes: classes,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            href: (ref1 = asset.value.owner) === null || ref1 === void 0 ? void 0 : ref1.link,
                            title: (ref10 = (ref9 = (ref2 = asset.value.owner) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.user) === null || ref3 === void 0 ? void 0 : ref3.username) !== null && ref9 !== void 0 ? ref9 : (ref4 = asset.value.owner) === null || ref4 === void 0 ? void 0 : ref4.address) !== null && ref10 !== void 0 ? ref10 : '',
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                src: (ref11 = (ref5 = asset.value.owner) === null || ref5 === void 0 ? void 0 : ref5.profile_img_url) !== null && ref11 !== void 0 ? ref11 : ''
                            })
                        }),
                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            style: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                asset.value.token_address && asset.value.token_id ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    color: "primary",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: (0,pipes/* resolveAssetLinkOnOpenSea */.uC)(chainId, asset.value.token_address, asset.value.token_id),
                                    children: (_name = asset.value.name) !== null && _name !== void 0 ? _name : ''
                                }) : (_name1 = asset.value.name) !== null && _name1 !== void 0 ? _name1 : '',
                                asset.value.safelist_request_status === 'verified' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifiedUser/* default */.Z, {
                                    color: "primary",
                                    fontSize: "small",
                                    sx: {
                                        marginLeft: 0.5
                                    }
                                }) : null
                            ]
                        }),
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                asset.value.description ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.subtitle,
                                        component: "div",
                                        variant: "body2",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                                            content: asset.value.description
                                        })
                                    })
                                }) : null,
                                ((ref6 = asset.value) === null || ref6 === void 0 ? void 0 : ref6.current_price) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    sx: {
                                        marginTop: 1
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.description,
                                        component: "span",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                            i18nKey: "plugin_collectible_description",
                                            values: {
                                                price: (ref7 = asset.value) === null || ref7 === void 0 ? void 0 : ref7.current_price,
                                                symbol: (ref8 = asset.value) === null || ref8 === void 0 ? void 0 : ref8.current_symbol
                                            }
                                        })
                                    })
                                }) : null
                            ]
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
                                onChange: (ev, newValue)=>setTabIndex(newValue)
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
                                    tabIndex === Collectible_types/* CollectibleTab.ARTICLE */.s7.ARTICLE ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArticleTab, {
                                    }) : null,
                                    tabIndex === Collectible_types/* CollectibleTab.TOKEN */.s7.TOKEN ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenTab, {
                                    }) : null,
                                    tabIndex === Collectible_types/* CollectibleTab.OFFER */.s7.OFFER ? /*#__PURE__*/ (0,jsx_runtime.jsx)(OfferTab, {
                                    }) : null,
                                    tabIndex === Collectible_types/* CollectibleTab.LISTING */.s7.LISTING ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListingTab, {
                                    }) : null,
                                    tabIndex === Collectible_types/* CollectibleTab.HISTORY */.s7.HISTORY ? /*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTab, {
                                    }) : null
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.footnote,
                                variant: "subtitle2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            t('plugin_powered_by'),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        className: classes.footLink,
                                        color: "textSecondary",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        title: "Mask",
                                        href: "https://mask.io",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookTextIcon */.vA, {
                                            classes: {
                                                root: classes.maskbook
                                            },
                                            viewBox: "0 0 80 20"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.footMenu,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FootnoteMenu/* FootnoteMenu */.p, {
                                        options: collectibleProviderOptions.map((x)=>({
                                                name: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleProviderIcon, {
                                                            provider: x.value
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: classes.footName,
                                                            children: (0,pipes/* resolveCollectibleProviderName */.l0)(x.value)
                                                        })
                                                    ]
                                                }),
                                                value: x.value
                                            })
                                        ),
                                        selectedIndex: (0,lodash.findIndex)(collectibleProviderOptions, (x)=>x.value === provider
                                        ),
                                        onChange: onDataProviderChange
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            endDate && (0,isValid/* default */.Z)(endDate) && (0,isAfter/* default */.Z)(endDate, Date.now()) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    marginTop: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.countdown,
                    children: t('plugin_collectible_sale_end', {
                        time: (0,format/* default */.Z)(endDate, 'yyyy-MM-dd HH:mm:ss')
                    })
                })
            }),
            provider === Collectible_types/* CollectibleProvider.OPENSEA */.wg.OPENSEA ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionBar, {
            }) : null
        ]
    }));
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx
var EthereumChainBoundary = __webpack_require__(85249);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/PostInspector.tsx




function PostInspector(props) {
    const token = props.payload;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: token.chain_id,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleState.Provider, {
            initialState: {
                chainId: token.chain_id,
                tokenId: token.token_id,
                contractAddress: token.address
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Collectible, {
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Collectible/base.ts
var base = __webpack_require__(83628);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/index.tsx









const sns = {
    ...base/* base */.u,
    init (signal) {
    },
    PostInspector: function Component() {
        const link = (0,lodash.uniq)(src/* usePostInfoDetails.postMetadataMentionedLinks */.H9.postMetadataMentionedLinks().concat(src/* usePostInfoDetails.postMentionedLinks */.H9.postMentionedLinks())).find(checkUrl);
        const asset = getAssetInfoFromURL(link);
        return asset ? renderPostInspector(asset) : null;
    },
    DecryptedInspector: function Component1(props) {
        const collectibleUrl = getRelevantUrl((0,typed_message/* getTypedMessageContent */.MH)(props.message));
        const asset = getAssetInfoFromURL(collectibleUrl);
        return asset ? renderPostInspector(asset) : null;
    }
};
/* harmony default export */ const SNSAdaptor = (sns);
function renderPostInspector(payload) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookPluginWrapper/* default */.Z, {
        pluginName: constants/* PLUGIN_NAME */.EW,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            payload: payload
        })
    }));
}


/***/ }),

/***/ 29592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ PluginCollectibleRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21542);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);


if (false) {}
const PluginCollectibleMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3366.js
const PluginCollectibleRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3, ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(3147), __webpack_require__.e(4544), __webpack_require__.e(8712), __webpack_require__.e(2943), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(8331), __webpack_require__.e(2261), __webpack_require__.e(1491), __webpack_require__.e(9714), __webpack_require__.e(9278), __webpack_require__.e(125), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(4039), __webpack_require__.e(7680), __webpack_require__.e(330), __webpack_require__.e(8846)]).then(__webpack_require__.bind(__webpack_require__, 68846))
=======
const PluginCollectibleRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3, ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(3147), __webpack_require__.e(4544), __webpack_require__.e(8712), __webpack_require__.e(2943), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(8331), __webpack_require__.e(2261), __webpack_require__.e(1491), __webpack_require__.e(9714), __webpack_require__.e(9278), __webpack_require__.e(125), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(1981), __webpack_require__.e(7680), __webpack_require__.e(8117), __webpack_require__.e(5357)]).then(__webpack_require__.bind(__webpack_require__, 35357))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.3523.js
, PluginCollectibleMessage.rpc);


/***/ }),

/***/ 65928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskbookPluginWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57343);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71629);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45513);
/* harmony import */ var _resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34539);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14840);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        card: {
            margin: theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            border: `1px solid ${theme.palette.divider}`,
            cursor: 'default',
            ...(0,_social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__/* .isTwitter */ .L3)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI) ? {
                borderRadius: 15,
                overflow: 'hidden'
            } : null
        },
        header: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.spacing(1)
        },
        icon: {
            width: '3em',
            height: '3em'
        },
        body: {
            margin: theme.spacing(2)
        }
    };
});
function MaskbookPluginWrapper(props) {
    const { classes  } = useStyles();
    const { pluginName , children  } = props;
    const useStableTheme = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI.customization.useTheme).current;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useStableTheme === null || useStableTheme === void 0 ? void 0 : useStableTheme();
    const inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.card,
        onClick: (ev)=>ev.stopPropagation()
        ,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_3__/* .MaskbookIcon */ .LX, {
                        className: classes.icon
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                                variant: "overline",
                                children: "Mask Plugin"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                                variant: "h6",
                                children: pluginName
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.body,
                children: children
            })
        ]
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            message: "Mask is loading this plugin..."
        }),
        children: theme ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
            theme: theme,
            children: inner
        }) : inner
    }));
};


/***/ }),

/***/ 13692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ Markdown)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/remarkable@2.0.1/node_modules/remarkable/dist/esm/index.browser.js
var index_browser = __webpack_require__(54030);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useRemarkable.ts


function useRemarkable(md) {
    return (0,react.useMemo)(()=>{
        const remarkable = new index_browser/* Remarkable */._();
        return remarkable.render(md);
    }, [
        md
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx




const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            color: 'inherit',
            fontSize: 'inherit',
            fontFamily: 'sans-serif',
            '& p': {
                margin: 0
            },
            '& p + p': {
                marginTop: theme.spacing(0.5)
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
                fontSize: 14
            },
            '& img': {
                maxWidth: '100%'
            },
            '& a': {
                color: theme.palette.text.primary
            }
        }
    })
);
function Markdown(props) {
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const html = useRemarkable(props.content);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        dangerouslySetInnerHTML: {
            __html: html
        },
        className: classes.root
    }));
}


/***/ }),

/***/ 8354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ FootnoteMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93244);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85290);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _utils_shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33465);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        link: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        title: {
            fontSize: 10,
            color: theme.palette.text.secondary
        }
    })
);
function FootnoteMenu(props) {
    var ref;
    const { children , options , selectedIndex =-1 , onChange  } = props;
    const { classes  } = useStyles();
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const onOpen = (event)=>setAnchorEl(event.currentTarget)
    ;
    const onSelect = (option)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
        onClose();
    };
    const onClose = ()=>setAnchorEl(null)
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                className: classes.link,
                color: "inherit",
                underline: "none",
                onClick: onOpen,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                        className: classes.title,
                        variant: "subtitle2",
                        children: (ref = options[selectedIndex]) === null || ref === void 0 ? void 0 : ref.name
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootMenu */ .dy, {
                open: !!anchorEl,
                onClose: onClose,
                anchorEl: anchorEl,
                children: options.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                        selected: selectedIndex === i,
                        onClick: ()=>onSelect(x)
                        ,
                        children: x.name
                    }, x.value)
                )
            })
        ]
    }));
}


/***/ }),

/***/ 62323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71765);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3, ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(3758), __webpack_require__.e(7604), __webpack_require__.e(211), __webpack_require__.e(1626), __webpack_require__.e(3375), __webpack_require__.e(5480)]).then(__webpack_require__.bind(__webpack_require__, 88105))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 57093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ formatElapsed)
/* harmony export */ });
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93002);

function formatElapsed(from) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = Date.now() - from;
    if (elapsed < msPerMinute) return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_seconds_ago', {
        seconds: Math.round(elapsed / 1000)
    });
    if (elapsed < msPerHour) return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_minutes_ago', {
        minutes: Math.round(elapsed / msPerMinute)
    });
    if (elapsed < msPerDay) return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_hours_ago', {
        hours: Math.round(elapsed / msPerHour)
    });
    if (elapsed < msPerMonth) return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_days_ago', {
        days: Math.round(elapsed / msPerDay)
    });
    if (elapsed < msPerYear) return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_months_ago', {
        months: Math.round(elapsed / msPerMonth)
    });
    return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_years_ago', {
        years: Math.round(elapsed / msPerYear)
    });
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

/***/ 13763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ DateTimePanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97448);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5075);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    datetime: {
        '&::-webkit-calendar-picker-indicator': {
            marginLeft: 0,
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(26195), __webpack_require__.b)})`
        }
    }
});
function DateTimePanel(props) {
    const { label , date , onChange , min , max , inputProps , ...rest } = props;
    const GMT = new Date().getTimezoneOffset() / 60 * -1;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        ...rest,
        label: `${label} ${GMT >= 0 ? `(UTC +${GMT})` : `(UTC ${GMT})`}`,
        value: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(date, "yyyy-MM-dd'T'HH:mm"),
        onChange: (e)=>{
            const date1 = new Date(e.currentTarget.value);
            onChange(date1);
        },
        InputLabelProps: {
            shrink: true
        },
        inputProps: {
            className: classes.datetime,
            ...inputProps,
            min,
            max
        },
        type: "datetime-local"
    }));
}


/***/ }),

/***/ 85249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ EthereumChainBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76900);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49283);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6615);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80050);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83071);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93975);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25830);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37186);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35313);










function EthereumChainBoundary(props) {
    var ref;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const account = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .mAM)();
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useChainId */ .xxU)();
    const allowTestnet = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useAllowTestnet */ .QEY)();
    const providerType = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.useValueRef)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentProviderSettings */ .t1);
    const { noSwitchNetworkTip =false  } = props;
    const expectedChainId = props.chainId;
    const expectedNetwork = expectedChainId === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.BSC */ .a_e.BSC ? 'BSC' : (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .getChainName */ .qzE)(expectedChainId);
    const actualChainId = chainId;
    const actualNetwork = actualChainId === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.BSC */ .a_e.BSC ? 'BSC' : (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .getChainName */ .qzE)(actualChainId);
    // if false then it will not guide the user to switch the network
    const isAllowed = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .isChainIdValid */ .JiD)(expectedChainId, allowTestnet) && !!account;
    const onSwitch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.delay)(1000);
        if (!isAllowed) return;
        // read the chain detailed from the built-in chain list
        const chainDetailedCAIP = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .getChainDetailedCAIP */ .EXI)(expectedChainId);
        if (!chainDetailedCAIP) throw new Error('Unknown network type.');
        // if mask wallet was used it can switch network automatically
        if (providerType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.Maskbook */ .lP_.Maskbook) {
            await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletRPC.updateAccount */ .V.updateAccount({
                chainId: expectedChainId
            });
            return;
        }
        // request ethereum-compatiable network
        const networkType = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .getNetworkTypeFromChainId */ ._Te)(expectedChainId);
        if (!networkType) return;
        try {
            const overrides = {
                chainId: expectedChainId,
                providerType
            };
            await Promise.race([
                (async ()=>{
                    await (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.delay)(30 /* seconds */  * 1000 /* milliseconds */ );
                    throw new Error('Timeout!');
                })(),
                networkType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .NetworkType.Ethereum */ .tds.Ethereum ? _extension_service__WEBPACK_IMPORTED_MODULE_6__/* .default.Ethereum.switchEthereumChain */ .ZP.Ethereum.switchEthereumChain(_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_e.Mainnet, overrides) : _extension_service__WEBPACK_IMPORTED_MODULE_6__/* .default.Ethereum.addEthereumChain */ .ZP.Ethereum.addEthereumChain(chainDetailedCAIP, account, overrides), 
            ]);
        } catch  {
            throw new Error(`Make sure your wallet is on the ${(0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .resolveNetworkName */ .nWu)(networkType)} network.`);
        }
    }, [
        account,
        isAllowed,
        providerType,
        expectedChainId
    ]);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.useRemoteControlledDialog)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // is the actual chain id matched with the expected one?
    const isMatched = actualChainId === expectedChainId;
    var ref1;
    // is the actual chain id a valid one even if it does not match with the expected one?
    const isValid = (ref1 = props === null || props === void 0 ? void 0 : (ref = props.isValidChainId) === null || ref === void 0 ? void 0 : ref.call(props, actualChainId, expectedChainId)) !== null && ref1 !== void 0 ? ref1 : false;
    if (!account) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        sx: {
            paddingTop: 1,
            paddingBottom: 1
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_connect_wallet_tip')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP, {
                variant: "contained",
                size: "small",
                sx: {
                    marginTop: 1.5
                },
                onClick: openSelectProviderDialog,
                children: t('plugin_wallet_connect_wallet')
            })
        ]
    }));
    if (isMatched || isValid) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.children
    }));
    if (!isAllowed) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        sx: {
            paddingTop: 1,
            paddingBottom: 1
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
            color: "textPrimary",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: t('plugin_wallet_not_available_on', {
                    network: actualNetwork
                })
            })
        })
    }));
    var _switchButtonStyle;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        sx: {
            paddingTop: 1,
            paddingBottom: 1
        },
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualNetwork
                    })
                })
            }) : null,
            isAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* .ActionButtonPromise */ .Zc, {
                variant: "contained",
                size: "small",
                sx: (_switchButtonStyle = props.switchButtonStyle) !== null && _switchButtonStyle !== void 0 ? _switchButtonStyle : {
                    marginTop: 1.5
                },
                init: t('plugin_wallet_switch_network', {
                    network: expectedNetwork
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedNetwork
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedNetwork
                }),
                failed: t('retry'),
                executor: onSwitch,
                completeOnClick: onSwitch,
                failedOnClick: "use executor"
            }) : null
        ]
    }));
}


/***/ }),

/***/ 77016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ EthereumWalletConnectedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletRiskWarningDialog.ts




const useWalletRiskWarningDialog = ()=>{
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const [isConfirmed, setIsConfirmed] = (0,react.useState)(false);
    const fetchRiskWarningStatus = ()=>{
        if (!account) setIsConfirmed(false);
        else messages/* WalletRPC.getRiskWarningConfirmed */.V.getRiskWarningConfirmed(account).then((confirmed)=>setIsConfirmed(confirmed !== null && confirmed !== void 0 ? confirmed : false)
        );
    };
    const { openDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.walletRiskWarningDialogUpdated */.R.events.walletRiskWarningDialogUpdated, fetchRiskWarningStatus);
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
    const { children =null , offChain =false  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const nativeTokenBalance = (0,web3_shared_src/* useNativeTokenBalance */.hjz)();
    //#region remote controlled confirm risk warning
    const { isConfirmed: isRiskWarningConfirmed , openDialog: openRiskWarningDialog  } = useWalletRiskWarningDialog();
    //#endregion
    //#region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    //#endregion
    if (!account) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openSelectProviderDialog,
            children: t('plugin_wallet_connect_a_wallet')
        })
    }));
    if (!isRiskWarningConfirmed) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openRiskWarningDialog,
            children: t('plugin_wallet_confirm_risk_warning')
        })
    }));
    var _value;
    if ((0,web3_shared_src/* isZero */.Fr9)((_value = nativeTokenBalance.value) !== null && _value !== void 0 ? _value : '0') && !offChain) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classes.button,
            disabled: !nativeTokenBalance.error,
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: nativeTokenBalance.retry,
            children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
        })
    }));
    if (!chainIdValid && !offChain) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classes.button,
            disabled: true,
            fullWidth: true,
            variant: "contained",
            size: "large",
            children: t('plugin_wallet_invalid_network')
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: children
    }));
}


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

/***/ 32007:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var swarm = __webpack_require__(52384);
var Bzz = function Bzz(provider) {
    this.givenProvider = Bzz.givenProvider;
    if (provider && provider._requestManager) {
        provider = provider.currentProvider;
    }
    // only allow file picker when in browser
    if (typeof document !== 'undefined') {
        this.pick = swarm.pick;
    }
    this.setProvider(provider);
};
// set default ethereum provider
/* jshint ignore:start */
Bzz.givenProvider = null;
if (typeof ethereum !== 'undefined' && ethereum.bzz) {
    Bzz.givenProvider = ethereum.bzz;
}
/* jshint ignore:end */
Bzz.prototype.setProvider = function (provider) {
    // is ethereum provider
    if (!!provider && typeof provider === 'object' && typeof provider.bzz === 'string') {
        provider = provider.bzz;
        // is no string, set default
    }
    // else if(!_.isString(provider)) {
    //      provider = 'http://swarm-gateways.net'; // default to gateway
    // }
    if (typeof provider === 'string') {
        this.currentProvider = provider;
    }
    else {
        this.currentProvider = null;
        var noProviderError = new Error('No provider set, please set one using bzz.setProvider().');
        this.download = this.upload = this.isAvailable = function () {
            throw noProviderError;
        };
        return false;
    }
    // add functions
    this.download = swarm.at(provider).download;
    this.upload = swarm.at(provider).upload;
    this.isAvailable = swarm.at(provider).isAvailable;
    return true;
};
module.exports = Bzz;


/***/ }),

/***/ 39944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2016
 */

var EventEmitter = __webpack_require__(15954);
/**
 * This function generates a defer promise and adds eventEmitter functionality to it
 *
 * @method eventifiedPromise
 */
var PromiEvent = function PromiEvent(justPromise) {
    var resolve, reject, eventEmitter = new Promise(function () {
        resolve = arguments[0];
        reject = arguments[1];
    });
    if (justPromise) {
        return {
            resolve: resolve,
            reject: reject,
            eventEmitter: eventEmitter
        };
    }
    // get eventEmitter
    var emitter = new EventEmitter();
    // add eventEmitter to the promise
    eventEmitter._events = emitter._events;
    eventEmitter.emit = emitter.emit;
    eventEmitter.on = emitter.on;
    eventEmitter.once = emitter.once;
    eventEmitter.off = emitter.off;
    eventEmitter.listeners = emitter.listeners;
    eventEmitter.addListener = emitter.addListener;
    eventEmitter.removeListener = emitter.removeListener;
    eventEmitter.removeAllListeners = emitter.removeAllListeners;
    return {
        resolve: resolve,
        reject: reject,
        eventEmitter: eventEmitter
    };
};
PromiEvent.resolve = function (value) {
    var promise = PromiEvent(true);
    promise.resolve(value);
    return promise.eventEmitter;
};
module.exports = PromiEvent;


/***/ }),

/***/ 24683:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file extend.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var formatters = __webpack_require__(70222).formatters;
var Method = __webpack_require__(34023);
var utils = __webpack_require__(83317);
var extend = function (pckg) {
    /* jshint maxcomplexity:5 */
    var ex = function (extension) {
        var extendedObject;
        if (extension.property) {
            if (!pckg[extension.property]) {
                pckg[extension.property] = {};
            }
            extendedObject = pckg[extension.property];
        }
        else {
            extendedObject = pckg;
        }
        if (extension.methods) {
            extension.methods.forEach(function (method) {
                if (!(method instanceof Method)) {
                    method = new Method(method);
                }
                method.attachToObject(extendedObject);
                method.setRequestManager(pckg._requestManager);
            });
        }
        return pckg;
    };
    ex.formatters = formatters;
    ex.utils = utils;
    ex.Method = Method;
    return ex;
};
module.exports = extend;


/***/ }),

/***/ 10833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */
const requestManager = __webpack_require__(27014);
const extend = __webpack_require__(24683);
const packageInit = (pkg, args) => {
    args = Array.prototype.slice.call(args);
    if (!pkg) {
        throw new Error('You need to instantiate using the "new" keyword.');
    }
    // make property of pkg._provider, which can properly set providers
    Object.defineProperty(pkg, 'currentProvider', {
        get: () => {
            return pkg._provider;
        },
        set: (value) => {
            return pkg.setProvider(value);
        },
        enumerable: true,
        configurable: true
    });
    // inherit from parent package or create a new RequestManager
    if (args[0] && args[0]._requestManager) {
        pkg._requestManager = args[0]._requestManager;
    }
    else {
        pkg._requestManager = new requestManager.Manager(args[0], args[1]);
    }
    // add givenProvider
    pkg.givenProvider = requestManager.Manager.givenProvider;
    pkg.providers = requestManager.Manager.providers;
    pkg._provider = pkg._requestManager.provider;
    // add SETPROVIDER function (don't overwrite if already existing)
    if (!pkg.setProvider) {
        pkg.setProvider = (provider, net) => {
            pkg._requestManager.setProvider(provider, net);
            pkg._provider = pkg._requestManager.provider;
            return true;
        };
    }
    pkg.setRequestManager = (manager) => {
        pkg._requestManager = manager;
        pkg._provider = manager.provider;
    };
    // attach batch request creation
    pkg.BatchRequest = requestManager.BatchManager.bind(null, pkg._requestManager);
    // attach extend function
    pkg.extend = extend(pkg);
};
const addProviders = (pkg) => {
    pkg.givenProvider = requestManager.Manager.givenProvider;
    pkg.providers = requestManager.Manager.providers;
};
module.exports = {
    packageInit,
    addProviders
};


/***/ }),

/***/ 67541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file iban.js
 *
 * Details: https://github.com/ethereum/wiki/wiki/ICAP:-Inter-exchange-Client-Address-Protocol
 *
 * @author Marek Kotewicz <marek@parity.io>
 * @date 2015
 */

const utils = __webpack_require__(83317);
const BigNumber = __webpack_require__(28891);
const leftPad = function (string, bytes) {
    let result = string;
    while (result.length < bytes * 2) {
        result = '0' + result;
    }
    return result;
};
/**
 * Prepare an IBAN for mod 97 computation by moving the first 4 chars to the end and transforming the letters to
 * numbers (A = 10, B = 11, ..., Z = 35), as specified in ISO13616.
 *
 * @method iso13616Prepare
 * @param {String} iban the IBAN
 * @returns {String} the prepared IBAN
 */
const iso13616Prepare = function (iban) {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    iban = iban.toUpperCase();
    iban = iban.substr(4) + iban.substr(0, 4);
    return iban.split('').map(function (n) {
        const code = n.charCodeAt(0);
        if (code >= A && code <= Z) {
            // A = 10, B = 11, ... Z = 35
            return code - A + 10;
        }
        else {
            return n;
        }
    }).join('');
};
/**
 * Calculates the MOD 97 10 of the passed IBAN as specified in ISO7064.
 *
 * @method mod9710
 * @param {String} iban
 * @returns {Number}
 */
const mod9710 = function (iban) {
    let remainder = iban;
    let block;
    while (remainder.length > 2) {
        block = remainder.slice(0, 9);
        remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
    }
    return parseInt(remainder, 10) % 97;
};
/**
 * This prototype should be used to create iban object from iban correct string
 *
 * @param {String} iban
 */
class Iban {
    constructor(iban) {
        this._iban = iban;
    }
    /**
     * This method should be used to create an ethereum address from a direct iban address
     *
     * @method toAddress
     * @param {String} iban address
     * @return {String} the ethereum address
     */
    static toAddress(ib) {
        ib = new Iban(ib);
        if (!ib.isDirect()) {
            throw new Error('IBAN is indirect and can\'t be converted');
        }
        return ib.toAddress();
    }
    /**
     * This method should be used to create iban address from an ethereum address
     *
     * @method toIban
     * @param {String} address
     * @return {String} the IBAN address
     */
    static toIban(address) {
        return Iban.fromAddress(address).toString();
    }
    /**
     * This method should be used to create iban object from an ethereum address
     *
     * @method fromAddress
     * @param {String} address
     * @return {Iban} the IBAN object
     */
    static fromAddress(address) {
        if (!utils.isAddress(address)) {
            throw new Error('Provided address is not a valid address: ' + address);
        }
        address = address.replace('0x', '').replace('0X', '');
        const asBn = new BigNumber(address, 16);
        const base36 = asBn.toString(36);
        const padded = leftPad(base36, 15);
        return Iban.fromBban(padded.toUpperCase());
    }
    /**
     * Convert the passed BBAN to an IBAN for this country specification.
     * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
     * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
     *
     * @method fromBban
     * @param {String} bban the BBAN to convert to IBAN
     * @returns {Iban} the IBAN object
     */
    static fromBban(bban) {
        const countryCode = 'XE';
        const remainder = mod9710(iso13616Prepare(countryCode + '00' + bban));
        const checkDigit = ('0' + (98 - remainder)).slice(-2);
        return new Iban(countryCode + checkDigit + bban);
    }
    /**
     * Should be used to create IBAN object for given institution and identifier
     *
     * @method createIndirect
     * @param {Object} options, required options are "institution" and "identifier"
     * @return {Iban} the IBAN object
     */
    static createIndirect(options) {
        return Iban.fromBban('ETH' + options.institution + options.identifier);
    }
    /**
     * This method should be used to check if given string is valid iban object
     *
     * @method isValid
     * @param {String} iban string
     * @return {Boolean} true if it is valid IBAN
     */
    static isValid(iban) {
        const i = new Iban(iban);
        return i.isValid();
    }
    ;
    /**
     * Should be called to check if iban is correct
     *
     * @method isValid
     * @returns {Boolean} true if it is, otherwise false
     */
    isValid() {
        return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban) &&
            mod9710(iso13616Prepare(this._iban)) === 1;
    }
    ;
    /**
     * Should be called to check if iban number is direct
     *
     * @method isDirect
     * @returns {Boolean} true if it is, otherwise false
     */
    isDirect() {
        return this._iban.length === 34 || this._iban.length === 35;
    }
    ;
    /**
     * Should be called to check if iban number if indirect
     *
     * @method isIndirect
     * @returns {Boolean} true if it is, otherwise false
     */
    isIndirect() {
        return this._iban.length === 20;
    }
    ;
    /**
     * Should be called to get iban checksum
     * Uses the mod-97-10 checksumming protocol (ISO/IEC 7064:2003)
     *
     * @method checksum
     * @returns {String} checksum
     */
    checksum() {
        return this._iban.substr(2, 2);
    }
    ;
    /**
     * Should be called to get institution identifier
     * eg. XREG
     *
     * @method institution
     * @returns {String} institution identifier
     */
    institution() {
        return this.isIndirect() ? this._iban.substr(7, 4) : '';
    }
    ;
    /**
     * Should be called to get client identifier within institution
     * eg. GAVOFYORK
     *
     * @method client
     * @returns {String} client identifier
     */
    client() {
        return this.isIndirect() ? this._iban.substr(11) : '';
    }
    ;
    /**
     * Should be called to get client direct address
     *
     * @method toAddress
     * @returns {String} ethereum address
     */
    toAddress() {
        if (this.isDirect()) {
            const base36 = this._iban.substr(4);
            const asBn = new BigNumber(base36, 36);
            return utils.toChecksumAddress(asBn.toString(16, 20));
        }
        return '';
    }
    ;
    toString() {
        return this._iban;
    }
    ;
}
module.exports = Iban;


/***/ }),

/***/ 33513:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var core = __webpack_require__(10833);
var Method = __webpack_require__(34023);
var utils = __webpack_require__(83317);
var Net = __webpack_require__(76932);
var formatters = __webpack_require__(70222).formatters;
var Personal = function Personal() {
    var _this = this;
    // sets _requestmanager
    core.packageInit(this, arguments);
    this.net = new Net(this);
    var defaultAccount = null;
    var defaultBlock = 'latest';
    Object.defineProperty(this, 'defaultAccount', {
        get: function () {
            return defaultAccount;
        },
        set: function (val) {
            if (val) {
                defaultAccount = utils.toChecksumAddress(formatters.inputAddressFormatter(val));
            }
            // update defaultBlock
            methods.forEach(function (method) {
                method.defaultAccount = defaultAccount;
            });
            return val;
        },
        enumerable: true
    });
    Object.defineProperty(this, 'defaultBlock', {
        get: function () {
            return defaultBlock;
        },
        set: function (val) {
            defaultBlock = val;
            // update defaultBlock
            methods.forEach(function (method) {
                method.defaultBlock = defaultBlock;
            });
            return val;
        },
        enumerable: true
    });
    var methods = [
        new Method({
            name: 'getAccounts',
            call: 'personal_listAccounts',
            params: 0,
            outputFormatter: utils.toChecksumAddress
        }),
        new Method({
            name: 'newAccount',
            call: 'personal_newAccount',
            params: 1,
            inputFormatter: [null],
            outputFormatter: utils.toChecksumAddress
        }),
        new Method({
            name: 'unlockAccount',
            call: 'personal_unlockAccount',
            params: 3,
            inputFormatter: [formatters.inputAddressFormatter, null, null]
        }),
        new Method({
            name: 'lockAccount',
            call: 'personal_lockAccount',
            params: 1,
            inputFormatter: [formatters.inputAddressFormatter]
        }),
        new Method({
            name: 'importRawKey',
            call: 'personal_importRawKey',
            params: 2
        }),
        new Method({
            name: 'sendTransaction',
            call: 'personal_sendTransaction',
            params: 2,
            inputFormatter: [formatters.inputTransactionFormatter, null]
        }),
        new Method({
            name: 'signTransaction',
            call: 'personal_signTransaction',
            params: 2,
            inputFormatter: [formatters.inputTransactionFormatter, null]
        }),
        new Method({
            name: 'sign',
            call: 'personal_sign',
            params: 3,
            inputFormatter: [formatters.inputSignFormatter, formatters.inputAddressFormatter, null]
        }),
        new Method({
            name: 'ecRecover',
            call: 'personal_ecRecover',
            params: 2,
            inputFormatter: [formatters.inputSignFormatter, null]
        })
    ];
    methods.forEach(function (method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
        method.defaultBlock = _this.defaultBlock;
        method.defaultAccount = _this.defaultAccount;
    });
};
core.addProviders(Personal);
module.exports = Personal;


/***/ }),

/***/ 76932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var core = __webpack_require__(10833);
var Method = __webpack_require__(34023);
var utils = __webpack_require__(83317);
var Net = function () {
    var _this = this;
    // sets _requestmanager
    core.packageInit(this, arguments);
    [
        new Method({
            name: 'getId',
            call: 'net_version',
            params: 0,
            outputFormatter: parseInt
        }),
        new Method({
            name: 'isListening',
            call: 'net_listening',
            params: 0
        }),
        new Method({
            name: 'getPeerCount',
            call: 'net_peerCount',
            params: 0,
            outputFormatter: utils.hexToNumber
        })
    ].forEach(function (method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });
};
core.addProviders(Net);
module.exports = Net;


/***/ }),

/***/ 83361:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file httpprovider.js
 * @authors:
 *   Marek Kotewicz <marek@parity.io>
 *   Marian Oancea
 *   Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2015
 */
var errors = __webpack_require__(70222).errors;
var XHR2 = __webpack_require__(4494)/* .XMLHttpRequest */ .h; // jshint ignore: line
var http = __webpack_require__(98651);
var https = __webpack_require__(2904);
/**
 * HttpProvider should be used to send rpc calls over http
 */
var HttpProvider = function HttpProvider(host, options) {
    options = options || {};
    this.withCredentials = options.withCredentials || false;
    this.timeout = options.timeout || 0;
    this.headers = options.headers;
    this.agent = options.agent;
    this.connected = false;
    // keepAlive is true unless explicitly set to false
    const keepAlive = options.keepAlive !== false;
    this.host = host || 'http://localhost:8545';
    if (!this.agent) {
        if (this.host.substring(0, 5) === "https") {
            this.httpsAgent = new https.Agent({ keepAlive });
        }
        else {
            this.httpAgent = new http.Agent({ keepAlive });
        }
    }
};
HttpProvider.prototype._prepareRequest = function () {
    var request;
    // the current runtime is a browser
    if (typeof XMLHttpRequest !== 'undefined') {
        request = new XMLHttpRequest();
    }
    else {
        request = new XHR2();
        var agents = { httpsAgent: this.httpsAgent, httpAgent: this.httpAgent, baseUrl: this.baseUrl };
        if (this.agent) {
            agents.httpsAgent = this.agent.https;
            agents.httpAgent = this.agent.http;
            agents.baseUrl = this.agent.baseUrl;
        }
        request.nodejsSet(agents);
    }
    request.open('POST', this.host, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.timeout = this.timeout;
    request.withCredentials = this.withCredentials;
    if (this.headers) {
        this.headers.forEach(function (header) {
            request.setRequestHeader(header.name, header.value);
        });
    }
    return request;
};
/**
 * Should be used to make async request
 *
 * @method send
 * @param {Object} payload
 * @param {Function} callback triggered on end with (err, result)
 */
HttpProvider.prototype.send = function (payload, callback) {
    var _this = this;
    var request = this._prepareRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.timeout !== 1) {
            var result = request.responseText;
            var error = null;
            try {
                result = JSON.parse(result);
            }
            catch (e) {
                error = errors.InvalidResponse(request.responseText);
            }
            _this.connected = true;
            callback(error, result);
        }
    };
    request.ontimeout = function () {
        _this.connected = false;
        callback(errors.ConnectionTimeout(this.timeout));
    };
    try {
        request.send(JSON.stringify(payload));
    }
    catch (error) {
        this.connected = false;
        callback(errors.InvalidConnection(this.host));
    }
};
HttpProvider.prototype.disconnect = function () {
    //NO OP
};
/**
 * Returns the desired boolean.
 *
 * @method supportsSubscriptions
 * @returns {boolean}
 */
HttpProvider.prototype.supportsSubscriptions = function () {
    return false;
};
module.exports = HttpProvider;


/***/ }),

/***/ 29763:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file index.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var errors = __webpack_require__(70222).errors;
var oboe = __webpack_require__(11595);
var IpcProvider = function IpcProvider(path, net) {
    var _this = this;
    this.responseCallbacks = {};
    this.notificationCallbacks = [];
    this.path = path;
    this.connected = false;
    this.connection = net.connect({ path: this.path });
    this.addDefaultEvents();
    // LISTEN FOR CONNECTION RESPONSES
    var callback = function (result) {
        /*jshint maxcomplexity: 6 */
        var id = null;
        // get the id which matches the returned id
        if (Array.isArray(result)) {
            result.forEach(function (load) {
                if (_this.responseCallbacks[load.id])
                    id = load.id;
            });
        }
        else {
            id = result.id;
        }
        // notification
        if (!id && result.method.indexOf('_subscription') !== -1) {
            _this.notificationCallbacks.forEach(function (callback) {
                if (typeof callback === 'function')
                    callback(result);
            });
            // fire the callback
        }
        else if (_this.responseCallbacks[id]) {
            _this.responseCallbacks[id](null, result);
            delete _this.responseCallbacks[id];
        }
    };
    // use oboe.js for Sockets
    if (net.constructor.name === 'Socket') {
        oboe(this.connection)
            .done(callback);
    }
    else {
        this.connection.on('data', function (data) {
            _this._parseResponse(data.toString()).forEach(callback);
        });
    }
};
/**
Will add the error and end event to timeout existing calls

@method addDefaultEvents
*/
IpcProvider.prototype.addDefaultEvents = function () {
    var _this = this;
    this.connection.on('connect', function () {
        _this.connected = true;
    });
    this.connection.on('close', function () {
        _this.connected = false;
    });
    this.connection.on('error', function () {
        _this._timeout();
    });
    this.connection.on('end', function () {
        _this._timeout();
    });
    this.connection.on('timeout', function () {
        _this._timeout();
    });
};
/**
 Will parse the response and make an array out of it.

 NOTE, this exists for backwards compatibility reasons.

 @method _parseResponse
 @param {String} data
 */
IpcProvider.prototype._parseResponse = function (data) {
    var _this = this, returnValues = [];
    // DE-CHUNKER
    var dechunkedData = data
        .replace(/\}[\n\r]?\{/g, '}|--|{') // }{
        .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
        .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
        .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
        .split('|--|');
    dechunkedData.forEach(function (data) {
        // prepend the last chunk
        if (_this.lastChunk)
            data = _this.lastChunk + data;
        var result = null;
        try {
            result = JSON.parse(data);
        }
        catch (e) {
            _this.lastChunk = data;
            // start timeout to cancel all requests
            clearTimeout(_this.lastChunkTimeout);
            _this.lastChunkTimeout = setTimeout(function () {
                _this._timeout();
                throw errors.InvalidResponse(data);
            }, 1000 * 15);
            return;
        }
        // cancel timeout and set chunk to null
        clearTimeout(_this.lastChunkTimeout);
        _this.lastChunk = null;
        if (result)
            returnValues.push(result);
    });
    return returnValues;
};
/**
Get the adds a callback to the responseCallbacks object,
which will be called if a response matching the response Id will arrive.

@method _addResponseCallback
*/
IpcProvider.prototype._addResponseCallback = function (payload, callback) {
    var id = payload.id || payload[0].id;
    var method = payload.method || payload[0].method;
    this.responseCallbacks[id] = callback;
    this.responseCallbacks[id].method = method;
};
/**
Timeout all requests when the end/error event is fired

@method _timeout
*/
IpcProvider.prototype._timeout = function () {
    for (var key in this.responseCallbacks) {
        if (this.responseCallbacks.hasOwnProperty(key)) {
            this.responseCallbacks[key](errors.InvalidConnection('on IPC'));
            delete this.responseCallbacks[key];
        }
    }
};
/**
 Try to reconnect

 @method reconnect
 */
IpcProvider.prototype.reconnect = function () {
    this.connection.connect({ path: this.path });
};
IpcProvider.prototype.send = function (payload, callback) {
    // try reconnect, when connection is gone
    if (!this.connection.writable)
        this.connection.connect({ path: this.path });
    this.connection.write(JSON.stringify(payload));
    this._addResponseCallback(payload, callback);
};
/**
Subscribes to provider events.provider

@method on
@param {String} type    'notification', 'connect', 'error', 'end' or 'data'
@param {Function} callback   the callback to call
*/
IpcProvider.prototype.on = function (type, callback) {
    if (typeof callback !== 'function')
        throw new Error('The second parameter callback must be a function.');
    switch (type) {
        case 'data':
            this.notificationCallbacks.push(callback);
            break;
        // adds error, end, timeout, connect
        default:
            this.connection.on(type, callback);
            break;
    }
};
/**
 Subscribes to provider events.provider

 @method on
 @param {String} type    'connect', 'error', 'end' or 'data'
 @param {Function} callback   the callback to call
 */
IpcProvider.prototype.once = function (type, callback) {
    if (typeof callback !== 'function')
        throw new Error('The second parameter callback must be a function.');
    this.connection.once(type, callback);
};
/**
Removes event listener

@method removeListener
@param {String} type    'data', 'connect', 'error', 'end' or 'data'
@param {Function} callback   the callback to call
*/
IpcProvider.prototype.removeListener = function (type, callback) {
    var _this = this;
    switch (type) {
        case 'data':
            this.notificationCallbacks.forEach(function (cb, index) {
                if (cb === callback)
                    _this.notificationCallbacks.splice(index, 1);
            });
            break;
        default:
            this.connection.removeListener(type, callback);
            break;
    }
};
/**
Removes all event listeners

@method removeAllListeners
@param {String} type    'data', 'connect', 'error', 'end' or 'data'
*/
IpcProvider.prototype.removeAllListeners = function (type) {
    switch (type) {
        case 'data':
            this.notificationCallbacks = [];
            break;
        default:
            this.connection.removeAllListeners(type);
            break;
    }
};
/**
Resets the providers, clears all callbacks

@method reset
*/
IpcProvider.prototype.reset = function () {
    this._timeout();
    this.notificationCallbacks = [];
    this.connection.removeAllListeners('error');
    this.connection.removeAllListeners('end');
    this.connection.removeAllListeners('timeout');
    this.addDefaultEvents();
};
/**
 * Returns the desired boolean.
 *
 * @method supportsSubscriptions
 * @returns {boolean}
 */
IpcProvider.prototype.supportsSubscriptions = function () {
    return true;
};
module.exports = IpcProvider;


/***/ }),

/***/ 63182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var core = __webpack_require__(10833);
var Subscriptions = __webpack_require__(84350).subscriptions;
var Method = __webpack_require__(34023);
// var formatters = require('web3-core-helpers').formatters;
var Net = __webpack_require__(76932);
var Shh = function Shh() {
    var _this = this;
    // sets _requestmanager
    core.packageInit(this, arguments);
    // overwrite package setRequestManager
    var setRequestManager = this.setRequestManager;
    this.setRequestManager = function (manager) {
        setRequestManager(manager);
        _this.net.setRequestManager(manager);
        return true;
    };
    // overwrite setProvider
    var setProvider = this.setProvider;
    this.setProvider = function () {
        setProvider.apply(_this, arguments);
        _this.setRequestManager(_this._requestManager);
    };
    this.net = new Net(this);
    [
        new Subscriptions({
            name: 'subscribe',
            type: 'shh',
            subscriptions: {
                'messages': {
                    params: 1
                    // inputFormatter: [formatters.inputPostFormatter],
                    // outputFormatter: formatters.outputPostFormatter
                }
            }
        }),
        new Method({
            name: 'getVersion',
            call: 'shh_version',
            params: 0
        }),
        new Method({
            name: 'getInfo',
            call: 'shh_info',
            params: 0
        }),
        new Method({
            name: 'setMaxMessageSize',
            call: 'shh_setMaxMessageSize',
            params: 1
        }),
        new Method({
            name: 'setMinPoW',
            call: 'shh_setMinPoW',
            params: 1
        }),
        new Method({
            name: 'markTrustedPeer',
            call: 'shh_markTrustedPeer',
            params: 1
        }),
        new Method({
            name: 'newKeyPair',
            call: 'shh_newKeyPair',
            params: 0
        }),
        new Method({
            name: 'addPrivateKey',
            call: 'shh_addPrivateKey',
            params: 1
        }),
        new Method({
            name: 'deleteKeyPair',
            call: 'shh_deleteKeyPair',
            params: 1
        }),
        new Method({
            name: 'hasKeyPair',
            call: 'shh_hasKeyPair',
            params: 1
        }),
        new Method({
            name: 'getPublicKey',
            call: 'shh_getPublicKey',
            params: 1
        }),
        new Method({
            name: 'getPrivateKey',
            call: 'shh_getPrivateKey',
            params: 1
        }),
        new Method({
            name: 'newSymKey',
            call: 'shh_newSymKey',
            params: 0
        }),
        new Method({
            name: 'addSymKey',
            call: 'shh_addSymKey',
            params: 1
        }),
        new Method({
            name: 'generateSymKeyFromPassword',
            call: 'shh_generateSymKeyFromPassword',
            params: 1
        }),
        new Method({
            name: 'hasSymKey',
            call: 'shh_hasSymKey',
            params: 1
        }),
        new Method({
            name: 'getSymKey',
            call: 'shh_getSymKey',
            params: 1
        }),
        new Method({
            name: 'deleteSymKey',
            call: 'shh_deleteSymKey',
            params: 1
        }),
        new Method({
            name: 'newMessageFilter',
            call: 'shh_newMessageFilter',
            params: 1
        }),
        new Method({
            name: 'getFilterMessages',
            call: 'shh_getFilterMessages',
            params: 1
        }),
        new Method({
            name: 'deleteMessageFilter',
            call: 'shh_deleteMessageFilter',
            params: 1
        }),
        new Method({
            name: 'post',
            call: 'shh_post',
            params: 1,
            inputFormatter: [null]
        }),
        new Method({
            name: 'unsubscribe',
            call: 'shh_unsubscribe',
            params: 1
        })
    ].forEach(function (method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });
};
Shh.prototype.clearSubscriptions = function () {
    this._requestManager.clearSubscriptions();
};
core.addProviders(Shh);
module.exports = Shh;


/***/ }),

/***/ 26195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "978bf9587a9f8a073309.png";

/***/ })

}]);