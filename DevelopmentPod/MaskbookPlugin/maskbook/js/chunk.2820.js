(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2820],{

/***/ 88233:
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

/***/ 30806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);


const usePreviousProps = value => {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePreviousProps);

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

/***/ 54331:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = void 0;
const options_1 = __webpack_require__(33084);
const utils_1 = __webpack_require__(19195);
// Most commonly used digit grouping base.
const DIGIT_GROUPING_BASE = 1000;
/**
 * Generator that divides a number until a decimal value is found.
 *
 * The denominator is defined by the numerical digit grouping base,
 * or interval. The most commonly-used digit group interval is 1000.
 *
 * e.g. 1,000,000 is grouped in multiples of 1000.
 */
function* divider(value) {
    // Create a mutable copy of the base.
    let denominator = DIGIT_GROUPING_BASE;
    while (true) {
        const result = value / denominator;
        if (result < 1) {
            // End of operation. We can't divide the value any further.
            return;
        }
        yield result;
        // The denominator is increased every iteration by multiplying
        // the base by itself, until a decimal value remains.
        denominator *= DIGIT_GROUPING_BASE;
    }
}
/**
 * millify converts long numbers to human-readable strings.
 */
function millify(value, options) {
    var _a;
    // Override default options with options supplied by user.
    const opts = options
        ? Object.assign(Object.assign({}, options_1.defaultOptions), options) : options_1.defaultOptions;
    if (!Array.isArray(opts.units) || !opts.units.length) {
        throw new Error("Option `units` must be a non-empty array");
    }
    // Validate value for type and length.
    let val = utils_1.parseValue(value);
    // Add a minus sign (-) prefix if it's a negative number.
    const prefix = val < 0 ? "-" : "";
    // Work only with positive values for simplicity's sake.
    val = Math.abs(val);
    // Keep dividing the input value by the digit grouping base
    // until the decimal and the unit index is deciphered.
    let unitIndex = 0;
    for (const result of divider(val)) {
        val = result;
        unitIndex += 1;
    }
    // Return the original number if the number is too large to have
    // a corresponding unit. Returning anything else is ambiguous.
    const unitIndexOutOfRange = unitIndex >= opts.units.length;
    if (unitIndexOutOfRange) {
        return value.toString();
    }
    // Round decimal up to desired precision.
    let rounded = utils_1.roundTo(val, opts.precision);
    // Fixes an edge case bug that outputs certain numbers as 1000K instead of 1M.
    // The rounded value needs another iteration in the divider cycle.
    for (const result of divider(rounded)) {
        rounded = result;
        unitIndex += 1;
    }
    // Calculate the unit suffix and make it lowercase (if needed).
    const unit = (_a = opts.units[unitIndex]) !== null && _a !== void 0 ? _a : "";
    const suffix = opts.lowercase ? unit.toLowerCase() : unit;
    // Add a space between number and abbreviation.
    const space = opts.space ? " " : "";
    // Replace decimal mark if desired.
    const formatted = rounded
        .toString()
        .replace(options_1.defaultOptions.decimalSeparator, opts.decimalSeparator);
    return `${prefix}${formatted}${space}${suffix}`;
}
__webpack_unused_export__ = millify;
exports.ZP = millify;


/***/ }),

/***/ 33084:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultOptions = void 0;
/**
 * Default options for Millify.
 */
exports.defaultOptions = {
    decimalSeparator: ".",
    lowercase: false,
    precision: 1,
    space: false,
    units: [
        "",
        "K",
        "M",
        "B",
        "T",
        "P",
        "E", // Quintillion
    ],
};


/***/ }),

/***/ 19195:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.roundTo = exports.parseValue = void 0;
/**
 * parseValue ensures the value is a number and within accepted range.
 */
function parseValue(value) {
    const val = parseFloat(value.toString());
    if (isNaN(val)) {
        throw new Error(`Input value is not a number`);
    }
    if (val > Number.MAX_SAFE_INTEGER || val < Number.MIN_SAFE_INTEGER) {
        throw new RangeError("Input value is outside of safe integer range");
    }
    return val;
}
exports.parseValue = parseValue;
/**
 * Rounds a number [value] up to a specified [precision].
 */
function roundTo(value, precision) {
    if (!Number.isFinite(value)) {
        throw new Error("Input value is not a finite number");
    }
    if (!Number.isInteger(precision) || precision < 0) {
        throw new Error("Precision is not a positive integer");
    }
    if (Number.isInteger(value)) {
        return value;
    }
    return parseFloat(value.toFixed(precision));
}
exports.roundTo = roundTo;


/***/ }),

/***/ 76262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.FT),
/* harmony export */   "H9": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.H9),
/* harmony export */   "NH": () => (/* binding */ usePostClaimedAuthor),
/* harmony export */   "Vc": () => (/* binding */ usePostLink),
/* harmony export */   "eT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.eT),
/* harmony export */   "oQ": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.oQ)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61751);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63151);



function usePostLink() {
    var _utils, ref;
    const id = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.snsID */ .H9.snsID();
    const identifier = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.identifier */ .H9.identifier();
    if (!id || !identifier) return '';
    var ref1;
    return (ref1 = (ref = (_utils = _social_network__WEBPACK_IMPORTED_MODULE_0__/* .activatedSocialNetworkUI.utils */ .LM.utils).getPostURL) === null || ref === void 0 ? void 0 : ref.call(_utils, identifier)) !== null && ref1 !== void 0 ? ref1 : '';
}
function usePostClaimedAuthor() {
    const payload = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.containingMaskPayload */ .H9.containingMaskPayload().unwrapOr(undefined);
    if (!payload) return undefined;
    if (payload.version !== -38) return undefined;
    return payload.authorUserID;
}


/***/ }),

/***/ 57464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(90171);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(99537);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(72212);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(68681);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(24218);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(18082);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(87409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(41457);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(15193);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx




function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(65375);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(40543);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogContent: {
            overscrollBehavior: 'contain'
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
    const overwrite = social_network/* activatedSocialNetworkUI.customization.componentOverwrite */.LM.customization.componentOverwrite || {};
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,src/* useStylesExtends */.Bc)(useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    }), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
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
        /*#__PURE__*/ return (0,jsx_runtime.jsx)(IncreaseStack, {
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
        });
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

/***/ 67983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ Markdown)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
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
            '& p, & li': {
                margin: 0,
                fontSize: 12,
                color: theme.palette.text.secondary
            },
            '& p + p': {
                marginTop: theme.spacing(0.5)
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
                fontSize: 14,
                fontWeight: 500
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
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const html = useRemarkable(props.content);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        dangerouslySetInnerHTML: {
            __html: html
        },
        className: classes.root
    }));
}


/***/ }),

/***/ 93363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(63151);
// EXTERNAL MODULE: ./src/plugins/Snapshot/base.ts
var base = __webpack_require__(65217);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(92093);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(43021);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/context.ts

const SnapshotContext = (0,react.createContext)(null);

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/helpers.ts
function getProposalIdentifier(url) {
    const parsedURL = new URL(url);
    const [, space, , id] = parsedURL.hash.split('/');
    return {
        id,
        space
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(50585);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(22234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(4834);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(70644);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(70008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(40158);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(30592);
// EXTERNAL MODULE: ./src/plugins/Snapshot/messages.ts
var messages = __webpack_require__(9606);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useUpdate.js
var useUpdate = __webpack_require__(52781);
;// CONCATENATED MODULE: ./src/utils/hooks/useSuspense.ts

function useSuspense(id, args, cache, Suspender) {
    const forceUpdate = (0,useUpdate/* default */.Z)();
    const rec = cache.get(id);
    if (!rec) {
        const p = Suspender(...args).then((val)=>void cache.set(id, [
                1,
                val
            ])
        ).catch((error)=>void cache.set(id, [
                2,
                error
            ])
        );
        cache.set(id, [
            0,
            p
        ]);
        throw p;
    }
    if (rec[0] === 1) return {
        payload: rec[1],
        retry: ()=>{
            if (cache.has(id)) cache.delete(id);
            forceUpdate();
        }
    };
    throw rec[1];
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useProposal.ts


const cache = new Map();
function proposalRetry() {
    for (const key of cache.keys()){
        cache.delete(key);
    }
}
function useProposal(id) {
    return useSuspense(id, [
        id
    ], cache, Suspender);
}
async function Suspender(id) {
    var ref, ref1;
    const proposal = await messages/* PluginSnapshotRPC.fetchProposal */.q.fetchProposal(id);
    // #region get 3box profile
    const profiles = await messages/* PluginSnapshotRPC.fetch3BoxProfiles */.q.fetch3BoxProfiles([
        proposal.address
    ]);
    // #endregion
    proposal.status = !proposal.isStart ? 'Pending' : proposal.isEnd ? 'Closed' : 'Active';
    proposal.authorName = (ref = profiles[0]) === null || ref === void 0 ? void 0 : ref.name;
    proposal.authorAvatar = (ref1 = profiles[0]) === null || ref1 === void 0 ? void 0 : ref1.image;
    return proposal;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/SnapshotCard.tsx



const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            minHeight: 120,
            padding: 0,
            border: `solid 1px ${theme.palette.divider}`,
            margin: `${theme.spacing(2)} auto`,
            marginBottom: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        },
        header: {
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
        },
        title: {
            display: 'flex',
            alignItems: 'center'
        }
    };
});
function SnapshotCard(props) {
    const { title , children  } = props;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        variant: "outlined",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                className: classes.header,
                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                className: classes.content,
                children: children
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(28577);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/mapKeys.js
var mapKeys = __webpack_require__(17399);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/usePower.ts





function usePower(identifier) {
    const { payload: proposal  } = useProposal(identifier.id);
    const account = (0,useAccount/* useAccount */.m)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!account) return 0;
        return (await messages/* PluginSnapshotRPC.getScores */.q.getScores(proposal.snapshot, [
            account
        ], proposal.network, identifier.space, proposal.strategies)).map((v)=>(0,mapKeys/* default */.Z)(v, (_value, key)=>key.toLowerCase()
            )
        ).reduce((acc, cur)=>{
            var ref;
            return acc + ((ref = cur[account.toLowerCase()]) !== null && ref !== void 0 ? ref : 0);
        }, 0);
    }, [
        account
    ]);
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(26340);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(68681);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(86377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(72212);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(83634);
// EXTERNAL MODULE: ../../node_modules/.pnpm/millify@4.0.0/node_modules/millify/dist/millify.js
var millify = __webpack_require__(54331);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(86167);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(83468);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(63190);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockie.ts
var useBlockie = __webpack_require__(7811);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumBlockie.tsx




const EthereumBlockie_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 16,
            height: 16,
            backgroundColor: theme.palette.common.white,
            margin: 0
        }
    })
);
function EthereumBlockie(props) {
    const { address , name  } = props;
    const classes = (0,theme_src/* useStylesExtends */.Bc)(EthereumBlockie_useStyles(), props);
    const blockie = (0,useBlockie/* useBlockie */.Y)(address);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        className: classes.icon,
        src: blockie,
        children: name === null || name === void 0 ? void 0 : name.substr(0, 1).toUpperCase()
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/InformationCard.tsx













const InformationCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        field: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: `${theme.spacing(1)} auto`
        },
        link: {
            display: 'flex',
            color: 'inherit',
            alignItems: 'center',
            marginLeft: theme.spacing(1),
            textDecoration: 'none !important'
        },
        avatar: {
            width: 16,
            height: 16
        },
        avatarWrapper: {
            marginRight: 8
        }
    };
});
function InfoField(props) {
    const { classes  } = InformationCard_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.field,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: props.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: props.children
            })
        ]
    }));
}
function InformationCard(props) {
    const { classes  } = InformationCard_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    const { start , end , snapshot , strategies  } = proposal;
    var _authorName;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotCard, {
        title: t('plugin_snapshot_info_title'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            component: "div",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_strategy'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            display: 'flex'
                        },
                        children: strategies.filter((strategy)=>Boolean(strategy.params.address)
                        ).map((strategy, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                target: "_blank",
                                rel: "noopener",
                                href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, strategy.params.address),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                                    address: strategy.params.address
                                })
                            }, i)
                        )
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_author'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        className: classes.link,
                        target: "_blank",
                        rel: "noopener",
                        href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, proposal.address),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.avatarWrapper,
                                children: proposal.authorAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    src: (0,pipes/* resolveIPFSLink */.r5)(proposal.authorAvatar),
                                    className: classes.avatar
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumBlockie, {
                                    address: proposal.address
                                })
                            }),
                            (_authorName = proposal.authorName) !== null && _authorName !== void 0 ? _authorName : (0,formatter/* formatEthereumAddress */.j8)(proposal.address, 4)
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_ipfs'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        className: classes.link,
                        target: "_blank",
                        rel: "noopener",
                        href: (0,pipes/* resolveIPFSLink */.r5)(identifier.id),
                        children: [
                            "#",
                            identifier.id.slice(0, 7),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                fontSize: "small"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_start'),
                    children: (0,format/* default */.Z)(start * 1000, 'MM/dd/yyyy')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_end'),
                    children: (0,format/* default */.Z)(end * 1000, 'MM/dd/yyyy')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_snapshot'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        className: classes.link,
                        target: "_blank",
                        rel: "noopener",
                        href: (0,pipes/* resolveBlockLinkOnExplorer */.vy)(chainId, snapshot),
                        children: [
                            snapshot,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                fontSize: "small"
                            })
                        ]
                    })
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/VoteConfirmDialog.tsx










const VoteConfirmDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        card: {
            padding: 0,
            border: `solid 1px ${theme.palette.divider}`,
            margin: `${theme.spacing(2)} auto`
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
        },
        button: {
            width: '60%',
            minHeight: 39,
            margin: `${theme.spacing(1)} auto`
        },
        link: {
            display: 'flex',
            color: 'inherit',
            alignItems: 'center',
            marginLeft: theme.spacing(1),
            textDecoration: 'none !important'
        },
        loading: {
            color: theme.palette.background.paper
        }
    })
);
function VoteConfirmDialog(props) {
    const { open , onClose , onVoteConfirm , choiceText , snapshot , powerSymbol , power =0 , loading  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = VoteConfirmDialog_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        title: t('plugin_snapshot_vote_confirm_dialog_title'),
        disableBackdropClick: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                align: "center",
                                children: t('plugin_snapshot_vote_confirm_dialog_choice', {
                                    choiceText
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                align: "center",
                                children: t('plugin_snapshot_vote_confirm_dialog_warning')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                        className: classes.card,
                        variant: "outlined",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                            className: classes.content,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                                        title: t('plugin_snapshot_vote_choice'),
                                        children: choiceText
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                                        title: t('plugin_snapshot_info_snapshot'),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                                            className: classes.link,
                                            target: "_blank",
                                            rel: "noopener",
                                            href: (0,pipes/* resolveBlockLinkOnExplorer */.vy)(types/* ChainId.Mainnet */.a_.Mainnet, snapshot),
                                            children: [
                                                snapshot,
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                                    fontSize: "small"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(InfoField, {
                                        title: t('plugin_snapshot_vote_power'),
                                        children: [
                                            (0,millify/* default */.ZP)(power, {
                                                precision: 2,
                                                lowercase: true
                                            }),
                                            " ",
                                            powerSymbol.toUpperCase()
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    offChain: true,
                    classes: {
                        connectWallet: classes.button,
                        unlockMetaMask: classes.button
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        classes: {
                            root: classes.button
                        },
                        color: "primary",
                        variant: "contained",
                        fullWidth: true,
                        disabled: loading,
                        onClick: onVoteConfirm,
                        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                            size: 16,
                            className: classes.loading
                        }) : t('plugin_snapshot_vote')
                    })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useVotes.ts



const useVotes_cache = new Map();
function votesRetry() {
    for (const key of useVotes_cache.keys()){
        useVotes_cache.delete(key);
    }
}
function useVotes(identifier) {
    return useSuspense(identifier.id, [
        identifier
    ], useVotes_cache, useVotes_Suspender);
}
async function useVotes_Suspender(identifier) {
    const { payload: proposal  } = useProposal(identifier.id);
    const voters = proposal.votes.map((v)=>v.voter
    );
    const scores = await messages/* PluginSnapshotRPC.getScores */.q.getScores(proposal.snapshot, voters, proposal.network, identifier.space, proposal.strategies);
    const strategies = proposal.strategies;
    const profiles = await messages/* PluginSnapshotRPC.fetch3BoxProfiles */.q.fetch3BoxProfiles(voters);
    const profileEntries = Object.fromEntries(profiles.map((p)=>[
            p.contract_address,
            p
        ]
    ));
    return proposal.votes.map((v)=>{
        var ref, ref1;
        const choices = typeof v.choice === 'number' ? undefined : Array.isArray(v.choice) ? v.choice.map((i)=>({
                weight: 1,
                name: proposal.choices[i - 1],
                index: Number(i)
            })
        ) : Object.entries(v.choice).map(([i, weight])=>({
                weight,
                name: proposal.choices[Number(i) - 1],
                index: Number(i)
            })
        );
        var _symbol;
        return {
            choiceIndex: typeof v.choice === 'number' ? v.choice : undefined,
            choiceIndexes: typeof v.choice === 'number' ? undefined : Object.keys(v.choice).map((i)=>Number(i)
            ),
            choice: typeof v.choice === 'number' ? proposal.choices[v.choice - 1] : undefined,
            choices,
            totalWeight: choices ? Array.isArray(v.choice) ? v.choice.length : choices.reduce((acc, choice)=>{
                return acc + choice.weight;
            }, 0) : undefined,
            address: v.voter,
            authorIpfsHash: v.id,
            balance: scores.reduce((a, b)=>a + (b[v.voter.toLowerCase()] ? b[v.voter.toLowerCase()] : 0)
            , 0),
            scores: strategies.map((_strategy, i)=>scores[i][v.voter] || 0
            ),
            strategySymbol: (_symbol = proposal.space.symbol) !== null && _symbol !== void 0 ? _symbol : strategies[0].params.symbol,
            authorName: (ref = profileEntries[v.voter.toLowerCase()]) === null || ref === void 0 ? void 0 : ref.name,
            authorAvatar: (ref1 = profileEntries[v.voter.toLowerCase()]) === null || ref1 === void 0 ? void 0 : ref1.image,
            timestamp: v.created
        };
    }).sort((a, b)=>b.balance - a.balance
    ).filter((v)=>v.balance > 0
    );
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useResults.ts



const useResults_cache = new Map();
function resultsRetry() {
    for (const key of useResults_cache.keys()){
        useResults_cache.delete(key);
    }
}
function useResults(identifier) {
    return useSuspense(identifier.id, [
        identifier
    ], useResults_cache, useResults_Suspender);
}
async function useResults_Suspender(identifier) {
    const { payload: proposal  } = useProposal(identifier.id);
    const { payload: votes  } = useVotes(identifier);
    const strategies = proposal.strategies;
    const powerOfChoices = proposal.choices.map((_choice, i)=>{
        return voteForChoice(votes, i).reduce((a, b)=>{
            if (b.choiceIndex) {
                return a + b.balance;
            } else {
                var ref;
                const totalWeight = b.choices.reduce((_totalWeight, inner_b)=>_totalWeight + inner_b.weight
                , 0);
                var ref1;
                return a + b.balance * ((ref1 = (ref = b.choices.find((v)=>v.index === i + 1
                )) === null || ref === void 0 ? void 0 : ref.weight) !== null && ref1 !== void 0 ? ref1 : 0) / totalWeight;
            }
        }, 0);
    });
    const powerDetailOfChoices = proposal.choices.map((_choice, i)=>strategies.map((_strategy, sI)=>voteForChoice(votes, i).reduce((a, b)=>a + b.scores[sI]
            , 0)
        )
    );
    const totalPower = votes.reduce((a, b)=>a + b.balance
    , 0);
    const results = powerOfChoices.map((p, i)=>({
            choice: proposal.choices[i],
            power: p,
            powerDetail: powerDetailOfChoices[i].map((inner_p, pI)=>({
                    power: strategies.length === 1 ? p : inner_p,
                    name: strategies[pI].params.symbol
                })
            ),
            percentage: totalPower === 0 ? 0 : p / totalPower * 100
        })
    );
    return {
        results: results.sort((a, b)=>b.power - a.power
        ),
        totalPower
    };
}
function voteForChoice(votes, i) {
    return votes.filter((vote)=>{
        var ref, ref2;
        return vote.choiceIndex ? vote.choiceIndex === i + 1 : (ref2 = (ref = vote.choices) === null || ref === void 0 ? void 0 : ref.map((c)=>c.index
        )) === null || ref2 === void 0 ? void 0 : ref2.includes(i + 1);
    });
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useRetry.ts




function useRetry() {
    const forceUpdate = (0,useUpdate/* default */.Z)();
    return (0,react.useCallback)(()=>{
        votesRetry();
        resultsRetry();
        forceUpdate();
    }, []);
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/VotingCard.tsx
















const VotingCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        button: {
            width: '80%',
            minHeight: 39,
            margin: `${theme.spacing(1)} auto`
        },
        choiceButton: {
            transitionDuration: '0s !important',
            '&:hover': {
                border: '2px solid rgb(29, 161, 242) !important',
                backgroundColor: 'transparent !important'
            }
        },
        buttonActive: {
            border: '2px solid rgb(29, 161, 242)',
            backgroundColor: 'transparent'
        }
    };
});
function VotingCard() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = VotingCard_useStyles();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    const account = (0,useAccount/* useAccount */.m)();
    const { value: power  } = usePower(identifier);
    const choices = proposal.choices;
    const [choice, setChoice] = (0,react.useState)(0);
    const [open, setOpen] = (0,react.useState)(false);
    const [loading, setLoading] = (0,react.useState)(false);
    const retry = useRetry();
    const onVoteConfirm = (0,shared_src/* useSnackbarCallback */.iD)(()=>{
        setLoading(true);
        return messages/* PluginSnapshotRPC.vote */.q.vote(identifier, choice, account, proposal.type);
    }, [
        choice,
        identifier
    ], ()=>{
        setLoading(false);
        setOpen(false);
        retry();
    }, (_err)=>setLoading(false)
    , void 0, t('plugin_snapshot_vote_success'));
    (0,react.useEffect)(()=>{
        setOpen(false);
    }, [
        account,
        power,
        setOpen
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotCard, {
        title: t('plugin_snapshot_vote_title'),
        children: [
            choices.map((choiceText, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: ()=>setChoice(i + 1)
                    ,
                    className: classnames_default()([
                        classes.button,
                        classes.choiceButton,
                        ...choice === i + 1 ? [
                            classes.buttonActive
                        ] : [], 
                    ]),
                    variant: "outlined",
                    children: choiceText
                }, i)
            ),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                classes: {
                    connectWallet: classes.button,
                    unlockMetaMask: classes.button
                },
                offChain: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.button,
                    variant: "contained",
                    disabled: choice === 0 || !account || !power,
                    onClick: ()=>setOpen(true)
                    ,
                    children: Boolean(power) && Boolean(account) ? t('plugin_snapshot_vote') : t('plugin_snapshot_no_power')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(VoteConfirmDialog, {
                open: open,
                loading: loading,
                onClose: ()=>setOpen(false)
                ,
                choiceText: choices[choice - 1],
                snapshot: proposal.snapshot,
                powerSymbol: proposal.space.symbol,
                power: power,
                onVoteConfirm: onVoteConfirm
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/SnapshotTab.tsx



const SnapshotTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        },
        content: {
            padding: `${theme.spacing(2)} !important`
        }
    };
});
function SnapshotTab(props) {
    const { classes  } = SnapshotTab_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
            className: classes.content,
            children: props.children
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx + 1 modules
var Markdown = __webpack_require__(67983);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ReadmeCard.tsx





function ReadMeCard(props) {
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
        content: proposal.body
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ProposalTab.tsx







function ProposalTab() {
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotTab, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadMeCard, {}),
            proposal.isEnd ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(VotingCard, {})
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(68435);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(87799);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/LinearProgress/linearProgressClasses.js
var linearProgressClasses = __webpack_require__(67730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(66552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json2csv@5.0.6/node_modules/json2csv/dist/json2csv.umd.js
var json2csv_umd = __webpack_require__(92895);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/LoadingFailCard.tsx




class LoadingFailCard extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return this.props.isFullPluginDown ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to Snapshot API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "outlined",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotCard, {
                title: this.props.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to Snapshot API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "outlined",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/LoadingCard.tsx





const LoadingCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(1),
            '&:first-child': {
                marginTop: theme.spacing(2)
            }
        }
    };
});
function LoadingCard(props) {
    const { classes  } = LoadingCard_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotCard, {
            title: props.title,
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
        }),
        children: props.children
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ResultCard.tsx
















const choiceMaxWidth = 240;
const ResultCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        list: {
            display: 'flex',
            flexDirection: 'column'
        },
        listItem: {
            display: 'flex',
            flexDirection: 'column'
        },
        listItemHeader: {
            display: 'flex',
            width: '100%'
        },
        power: {
            marginLeft: theme.spacing(2)
        },
        ratio: {
            marginLeft: 'auto'
        },
        choice: {
            maxWidth: choiceMaxWidth
        },
        linearProgressWrap: {
            width: '100%',
            marginTop: theme.spacing(1)
        },
        ellipsisText: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        resultButton: {
            width: 200,
            margin: '0 auto'
        }
    };
});
const StyledLinearProgress = (0,styled/* default */.ZP)(LinearProgress/* default */.Z)`
    &.${linearProgressClasses/* default.root */.Z.root} {
        height: 8px;
        border-radius: 5px;
    }
    &.${linearProgressClasses/* default.bar */.Z.bar} {
        border-radius: 5px;
    }
`;
function Content() {
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    const { payload: votes  } = useVotes(identifier);
    const { payload: { results  } ,  } = useResults(identifier);
    const { classes  } = ResultCard_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const listRef = (0,react.useRef)([]);
    const [tooltipsVisible, setTooltipsVisible] = (0,react.useState)(Array.from({
        length: results.length
    }).fill(false));
    (0,react.useEffect)(()=>{
        setTooltipsVisible(listRef.current.map((element)=>element.offsetWidth === choiceMaxWidth
        ));
    }, []);
    const dataForCsv = (0,react.useMemo)(()=>votes.map((vote)=>({
                address: vote.address,
                choice: vote.choiceIndex,
                balance: vote.balance,
                timestamp: vote.timestamp,
                dateUtc: new Date(vote.timestamp * 1000).toUTCString(),
                authorIpfsHash: vote.authorIpfsHash
            })
        )
    , [
        votes
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotCard, {
        title: proposal.isEnd ? t('plugin_snapshot_result_title') : t('plugin_snapshot_current_result_title'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.list,
                children: results.map((result, i1)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        className: classes.listItem,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.listItemHeader,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* ShadowRootTooltip */.p_, {
                                        PopperProps: {
                                            disablePortal: true
                                        },
                                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            color: "textPrimary",
                                            children: result.choice
                                        }),
                                        placement: "top",
                                        disableHoverListener: !tooltipsVisible[i1],
                                        arrow: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            ref: (ref)=>{
                                                listRef.current[i1] = ref;
                                            },
                                            className: classnames_default()(classes.choice, classes.ellipsisText),
                                            children: result.choice
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* ShadowRootTooltip */.p_, {
                                        PopperProps: {
                                            disablePortal: true
                                        },
                                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.ellipsisText,
                                            children: result.powerDetail.reduce((sum, cur, i)=>{
                                                const name = (0,millify/* default */.ZP)(cur.power, {
                                                    precision: 2,
                                                    lowercase: true
                                                }) + ' ' + cur.name;
                                                return `${sum} ${i === 0 ? '' : '+'} ${name}`;
                                            }, '')
                                        }),
                                        placement: "top",
                                        arrow: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.power,
                                            children: (0,millify/* default */.ZP)(result.power, {
                                                precision: 2,
                                                lowercase: true
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        className: classes.ratio,
                                        children: [
                                            Number.parseFloat(result.percentage.toFixed(2)),
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.linearProgressWrap,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledLinearProgress, {
                                    variant: "determinate",
                                    value: result.percentage
                                })
                            })
                        ]
                    }, i1)
                )
            }),
            proposal.isEnd ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                color: "primary",
                variant: "outlined",
                className: classes.resultButton,
                onClick: ()=>{
                    const csv = (0,json2csv_umd.parse)(dataForCsv);
                    const link = document.createElement('a');
                    link.setAttribute('href', `data:text/csv;charset=utf-8,${csv}`);
                    link.setAttribute('download', `snapshot-report-${identifier.id}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                },
                children: t('plugin_snapshot_download_report')
            }) : null
        ]
    }));
}
function Loading(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard, {
        title: proposal.isEnd ? t('plugin_snapshot_result_title') : t('plugin_snapshot_current_result_title'),
        children: props.children
    }));
}
function Fail(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    const retry = useRetry();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
        title: proposal.isEnd ? t('plugin_snapshot_result_title') : t('plugin_snapshot_current_result_title'),
        retry: retry,
        children: props.children
    }));
}
function ResultCard() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Loading, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fail, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {})
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Badge/Badge.js
var Badge = __webpack_require__(80062);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/VotesCard.tsx















const VotesCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        list: {
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 'var(--contentHeight)',
            overflow: 'auto',
            paddingTop: 0,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        listItem: {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        anchorTopRight: {
            transform: 'translateX(40px) translateY(2.5px)'
        },
        avatarWrapper: {
            marginRight: 8
        },
        choice: {
            flexGrow: 1,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            maxWidth: 180
        },
        ellipsisText: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        avatar: {
            width: 16,
            height: 16
        },
        link: {
            display: 'flex',
            minWidth: 130,
            color: 'inherit',
            alignItems: 'center',
            textDecoration: 'none !important',
            marginRight: 16
        },
        power: {
            minWidth: 90
        },
        shadowRootTooltip: {
            color: 'white'
        }
    };
});
function VotesCard_Content() {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: votes  } = useVotes(identifier);
    const { classes  } = VotesCard_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotCard, {
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Badge/* default */.Z, {
            max: 9999999,
            classes: {
                anchorOriginTopRightRectangular: classes.anchorTopRight
            },
            badgeContent: votes.length,
            color: "primary",
            children: t('plugin_snapshot_votes_title')
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            className: classes.list,
            children: votes.map((v)=>{
                var ref;
                const isAverageWeight = (ref = v.choices) === null || ref === void 0 ? void 0 : ref.every((c)=>c.weight === 1
                );
                const fullChoiceText = v.totalWeight && v.choices ? v.choices.reduce((acc, choice, i)=>{
                    return acc + (i === 0 ? '' : ', ') + (!isAverageWeight ? (0,formatter/* formatPercentage */.rl)(choice.weight / v.totalWeight) + ' ' : '') + choice.name;
                }, '') : null;
                var _authorName;
                return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                    className: classes.listItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                            className: classnames_default()(classes.link, classes.ellipsisText),
                            target: "_blank",
                            rel: "noopener",
                            href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, v.address),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.avatarWrapper,
                                    children: v.authorAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                        src: (0,pipes/* resolveIPFSLink */.r5)(v.authorAvatar),
                                        className: classes.avatar
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumBlockie, {
                                        address: v.address
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: (_authorName = v.authorName) !== null && _authorName !== void 0 ? _authorName : (0,formatter/* formatEthereumAddress */.j8)(v.address, 4)
                                })
                            ]
                        }),
                        v.choice ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.choice,
                            children: v.choice
                        }) : v.choices ? /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* ShadowRootTooltip */.p_, {
                            PopperProps: {
                                disablePortal: true
                            },
                            title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.shadowRootTooltip,
                                children: fullChoiceText
                            }),
                            placement: "top",
                            arrow: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.choice,
                                children: fullChoiceText
                            })
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.power,
                            children: (0,millify/* default */.ZP)(v.balance, {
                                precision: 2,
                                lowercase: true
                            }) + ' ' + (v.strategySymbol ? v.strategySymbol.toUpperCase() : '')
                        })
                    ]
                }, v.address));
            })
        })
    }));
}
function VotesCard_Loading(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard, {
        title: t('plugin_snapshot_votes_title'),
        children: props.children
    }));
}
function VotesCard_Fail(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const retry = useRetry();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
        title: t('plugin_snapshot_votes_title'),
        retry: retry,
        children: props.children
    }));
}
function VotesCard() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard_Loading, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard_Fail, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard_Content, {})
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ProgressTab.tsx





function ProgressTab() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotTab, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InformationCard, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard, {})
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/Snapshot.tsx








const Snapshot_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            '--contentHeight': '400px',
            '--tabHeight': '35px',
            width: '100%',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0
        },
        content: {
            width: '100%',
            minHeight: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important'
        },
        body: {
            flex: 1,
            maxHeight: 'calc(var(--contentHeight) - var(--tabHeight))',
            overflow: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
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
            minWidth: 'unset'
        },
        subtitle: {
            fontSize: 12,
            marginRight: theme.spacing(0.5)
        }
    };
});
function Snapshot() {
    const { classes  } = Snapshot_useStyles();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: "Proposal"
        }, "proposal"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: "Progress"
        }, "progress"), 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            sx: {
                                marginRight: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    component: "span",
                                    sx: {
                                        marginRight: 0.5
                                    },
                                    children: proposal.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textSecondary",
                                    component: "span",
                                    children: [
                                        "#",
                                        identifier.id.slice(0, 7)
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            color: "primary",
                            size: "small",
                            label: proposal.status
                        })
                    ]
                }),
                subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    sx: {
                        marginTop: 0.5
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textSecondary",
                        variant: "body2",
                        children: identifier.space
                    })
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
                            tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProposalTab, {}) : null,
                            tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressTab, {}) : null
                        ]
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/PostInspector.tsx






function PostInspector(props) {
    const identifier = getProposalIdentifier(props.url);
    const retry = useRetry();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotContext.Provider, {
        value: identifier,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
            title: "",
            isFullPluginDown: true,
            retry: retry,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Snapshot, {})
        })
    }));
}

// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(76262);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var typed_message_base = __webpack_require__(69492);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/index.tsx










const SNSAdaptor_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(2),
            '&:first-child': {
                marginTop: theme.spacing(3)
            }
        }
    };
});
const isSnapshotURL = (x)=>/^https:\/\/(?:www.)?snapshot.(org|page)\/#\/(.*?)\/proposal\/[\dA-Za-z]+$/.test(x)
;
function Renderer({ url  }) {
    const { classes  } = SNSAdaptor_useStyles();
    (0,src/* usePluginWrapper */.fI)(true);
    const fallbackUI = Array.from({
        length: 2
    }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
            className: classes.skeleton,
            animation: "wave",
            variant: "rectangular",
            width: i === 0 ? '80%' : '60%',
            height: 15
        }, i)
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: fallbackUI,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            url: url
        })
    }));
}
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,shared_base_src/* parseURL */.Lk)(x.val).find(isSnapshotURL);
        }, [
            props.message
        ]);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    PostInspector: function Component() {
        const links = usePostInfo/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isSnapshotURL);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 9606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ PluginSnapshotRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63151);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78638);


if (false) {}
const PluginSnapshotMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SNAPSHOT_PLUGIN_ID */ .ly);
const PluginSnapshotRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SNAPSHOT_PLUGIN_ID */ .ly, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(9796), __webpack_require__.e(1055)]).then(__webpack_require__.bind(__webpack_require__, 51055))
, PluginSnapshotMessages.rpc);


/***/ }),

/***/ 65375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "Sf": () => (/* binding */ isMinds),
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
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

/***/ 26340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ EthereumWalletConnectedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(20333);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(47906);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(63081);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(1347);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(15091);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
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

/***/ 7811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useBlockie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
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

/***/ 1347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28577);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98086);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44068);



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


/***/ })

}]);