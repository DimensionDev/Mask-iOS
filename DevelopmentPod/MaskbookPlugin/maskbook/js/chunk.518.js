"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[518],{

/***/ 98648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$B": () => (/* binding */ MinInt256),
/* harmony export */   "Bz": () => (/* binding */ MaxUint256),
/* harmony export */   "Ce": () => (/* binding */ WeiPerEther),
/* harmony export */   "PS": () => (/* binding */ MaxInt256),
/* harmony export */   "Py": () => (/* binding */ Two),
/* harmony export */   "_Y": () => (/* binding */ Zero),
/* harmony export */   "fh": () => (/* binding */ One),
/* harmony export */   "tL": () => (/* binding */ NegativeOne)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6619);

const NegativeOne = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(-1));
const Zero = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(0));
const One = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(1));
const Two = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(2));
const WeiPerEther = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("1000000000000000000"));
const MaxUint256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
const MinInt256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("-0x8000000000000000000000000000000000000000000000000000000000000000"));
const MaxInt256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));

//# sourceMappingURL=bignumbers.js.map

/***/ }),

/***/ 39125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": () => (/* binding */ id)
/* harmony export */ });
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75276);


function id(text) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .w)((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(text));
}
//# sourceMappingURL=id.js.map

/***/ }),

/***/ 27930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dk": () => (/* binding */ Description),
  "uj": () => (/* binding */ checkProperties),
  "p$": () => (/* binding */ deepCopy),
  "zG": () => (/* binding */ defineReadOnly),
  "tu": () => (/* binding */ getStatic),
  "mE": () => (/* binding */ resolveProperties),
  "DC": () => (/* binding */ shallowCopy)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/_version.js
const version = "properties/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const logger = new lib_esm/* Logger */.Yd(version);
function defineReadOnly(object, name, value) {
    Object.defineProperty(object, name, {
        enumerable: true,
        value: value,
        writable: false,
    });
}
// Crawl up the constructor chain to find a static method
function getStatic(ctor, key) {
    for (let i = 0; i < 32; i++) {
        if (ctor[key]) {
            return ctor[key];
        }
        if (!ctor.prototype || typeof (ctor.prototype) !== "object") {
            break;
        }
        ctor = Object.getPrototypeOf(ctor.prototype).constructor;
    }
    return null;
}
function resolveProperties(object) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = Object.keys(object).map((key) => {
            const value = object[key];
            return Promise.resolve(value).then((v) => ({ key: key, value: v }));
        });
        const results = yield Promise.all(promises);
        return results.reduce((accum, result) => {
            accum[(result.key)] = result.value;
            return accum;
        }, {});
    });
}
function checkProperties(object, properties) {
    if (!object || typeof (object) !== "object") {
        logger.throwArgumentError("invalid object", "object", object);
    }
    Object.keys(object).forEach((key) => {
        if (!properties[key]) {
            logger.throwArgumentError("invalid object key - " + key, "transaction:" + key, object);
        }
    });
}
function shallowCopy(object) {
    const result = {};
    for (const key in object) {
        result[key] = object[key];
    }
    return result;
}
const opaque = { bigint: true, boolean: true, "function": true, number: true, string: true };
function _isFrozen(object) {
    // Opaque objects are not mutable, so safe to copy by assignment
    if (object === undefined || object === null || opaque[typeof (object)]) {
        return true;
    }
    if (Array.isArray(object) || typeof (object) === "object") {
        if (!Object.isFrozen(object)) {
            return false;
        }
        const keys = Object.keys(object);
        for (let i = 0; i < keys.length; i++) {
            if (!_isFrozen(object[keys[i]])) {
                return false;
            }
        }
        return true;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
// Returns a new copy of object, such that no properties may be replaced.
// New properties may be added only to objects.
function _deepCopy(object) {
    if (_isFrozen(object)) {
        return object;
    }
    // Arrays are mutable, so we need to create a copy
    if (Array.isArray(object)) {
        return Object.freeze(object.map((item) => deepCopy(item)));
    }
    if (typeof (object) === "object") {
        const result = {};
        for (const key in object) {
            const value = object[key];
            if (value === undefined) {
                continue;
            }
            defineReadOnly(result, key, deepCopy(value));
        }
        return result;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
function deepCopy(object) {
    return _deepCopy(object);
}
class Description {
    constructor(info) {
        for (const key in info) {
            this[key] = deepCopy(info[key]);
        }
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 28908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ SharedIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const SharedIcon = (0,_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('SharedIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            clipPath: "url(#clip0_4018_10794)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.8449 3.38244L2.92483 7.92639L6.32181 9.95786C6.54825 10.0933 6.68688 10.3377 6.68688 10.6015V12.8779L8.98652 11.9452C9.19775 11.8595 9.43648 11.8746 9.63529 11.9861L14.8428 14.9067L16.8449 3.38244ZM17.1836 2.00958C17.721 1.83413 18.252 2.29389 18.1552 2.85093L15.9163 15.7386C15.8277 16.2484 15.2618 16.5175 14.8105 16.2644L9.23702 13.1385L6.51877 14.241C6.02564 14.441 5.48688 14.0782 5.48688 13.546V10.8568L1.46066 8.449C0.90841 8.11874 1.00114 7.29202 1.61286 7.09234L17.1836 2.00958ZM14.6798 5.65582C14.8971 5.90598 14.8705 6.28494 14.6203 6.50226L10.3858 10.1807C10.1357 10.398 9.75669 10.3714 9.53938 10.1213C9.32206 9.87109 9.34869 9.49213 9.59886 9.27482L13.8334 5.59634C14.0835 5.37902 14.4625 5.40565 14.6798 5.65582Z",
                fill: "white"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "clip0_4018_10794",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "18",
                    height: "18",
                    fill: "white",
                    transform: "translate(0.5)"
                })
            })
        })
    ]
}), '0 0 19 18');


/***/ }),

/***/ 23397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "Ol": () => (/* binding */ useCurrentLinkedPersona),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity),
/* harmony export */   "fb": () => (/* binding */ useCurrentVisitingIdentity)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80226);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82192);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14257);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23587);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70981);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78778);







const default_ = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.ValueRef({}, lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
function useLastRecognizedIdentity() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized || default_);
}
function useCurrentVisitingIdentity() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.currentVisitingIdentityProvider */ .LM.collecting.currentVisitingIdentityProvider?.recognized || default_);
}
function useCurrentIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(CurrentIdentitySubscription);
}
function useCurrentLinkedPersona() {
    const currentIdentity = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(CurrentIdentitySubscription);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(async ()=>{
        if (!currentIdentity?.linkedPersona) return;
        return _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(currentIdentity.linkedPersona);
    }, [
        currentIdentity?.linkedPersona
    ]);
}
const CurrentIdentitySubscription = {
    getCurrentValue () {
        const all = _social_network__WEBPACK_IMPORTED_MODULE_1__/* .globalUIState.profiles.value */ .EJ.profiles.value;
        const current = (_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized || default_).value.identifier;
        return all.find((i)=>i.identifier === current
        ) || all[0];
    },
    subscribe (sub) {
        const a = _social_network__WEBPACK_IMPORTED_MODULE_1__/* .globalUIState.profiles.addListener */ .EJ.profiles.addListener(sub);
        const b = _social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized.addListener(sub);
        return ()=>[
                a(),
                b?.()
            ]
        ;
    }
};


/***/ }),

/***/ 30318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7666);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80231);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65845);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96436);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(1)
        },
        disabledTab: {
            opacity: 0.5
        },
        flexContainer: {}
    })
);
function AbstractTab(props) {
    const { tabs , state , index: index1 , height =200 , hasOnlyOneChild =false , scrollable =false  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [value, setValue] = state ?? [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length && !scrollable ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                square: true,
                elevation: 0,
                className: classes.tabPaper,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator,
                        flexContainer: classes.flexContainer
                    },
                    value: index1 ? index1 : value ? value : 0,
                    indicatorColor: "primary",
                    textColor: "primary",
                    variant: scrollable ? 'scrollable' : 'fullWidth',
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    scrollButtons: scrollable,
                    allowScrollButtonsMobile: scrollable,
                    onChange: (_, newValue)=>setValue?.(newValue)
                    ,
                    children: tabs.map((tab, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: tab.disabled,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tab, [
                                index1,
                                value
                            ].includes(i) ? classes.focusTab : '', tab.disabled ? classes.disabledTab : ''),
                            disableFocusRipple: tab.disableFocusRipple,
                            disableRipple: tab.disableRipple,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${tab.id?.toLowerCase()}_tab`
                        }, i)
                    )
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index)=>index === value
                ),
                sx: {
                    height,
                    minHeight: height
                }
            }) : null
        ]
    });
};


/***/ }),

/***/ 16334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ StyledLinearProgress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37194);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((_theme)=>({
        root: {
            height: 8,
            borderRadius: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
        },
        bar: {
            borderRadius: 5,
            backgroundColor: _theme.palette.common.white
        }
    })
);
function StyledLinearProgress(props) {
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        classes: classes,
        ...props
    });
}


/***/ }),

/***/ 49524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ TokenAmountPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(48591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(11142);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Error.js
var Error = __webpack_require__(72388);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(96209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./src/web3/UI/SelectTokenChip.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
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
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classnames_default()(classes.chip, classes.loadingChip),
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: 16
        }),
        size: "small",
        clickable: false,
        variant: "outlined"
    });
    if (!token) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        label: t('plugin_gitcoin_select_a_token'),
        size: "small",
        clickable: !readonly,
        ...ChipProps
    });
    if (token && error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
            address: token.address,
            chainId: token.chainId,
            name: token.name,
            logoURL: token.logoURL
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
        onDelete: noop/* default */.Z,
        ...ChipProps
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
            classes: {
                icon: classes.tokenIcon
            },
            address: token.address,
            name: token.name,
            chainId: token.chainId,
            logoURL: token.logoURL
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
        onDelete: readonly ? undefined : noop/* default */.Z,
        ...ChipProps
    });
}

;// CONCATENATED MODULE: ./src/web3/UI/TokenAmountPanel.tsx










const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const TokenAmountPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {},
        input: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                appearance: 'none',
                margin: 0
            },
            appearance: 'textfield'
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
    const { amount: amount1 , maxAmount , maxAmountShares =1 , maxAmountSignificant , balance , token , onAmountChange , label , disableToken =false , disableBalance =false , MaxChipProps ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(TokenAmountPanel_useStyles(), props);
    // #region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>({
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token?.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token?.decimals}}$`)
        })
    , [
        token?.decimals
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
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        className: classes.root,
        label: label,
        fullWidth: true,
        required: true,
        type: "text",
        value: amount1,
        variant: "outlined",
        onKeyDown: (ev)=>{
            if (ev.key === 'Enter') ev.preventDefault();
        },
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedBalance */.BV, {
                                value: balance,
                                decimals: token.decimals,
                                significant: 6,
                                formatter: base_src/* formatBalance */.az
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
                                    root: classnames_default()(classes.max, MaxChipProps?.classes?.root),
                                    ...MaxChipProps?.classes
                                },
                                size: "small",
                                label: "MAX",
                                clickable: true,
                                color: "primary",
                                variant: "outlined",
                                onClick: ()=>{
                                    const amount = new (bignumber_default())(maxAmount ?? balance).dividedBy(maxAmountShares).decimalPlaces(0, 1);
                                    onAmountChange((0,base_src/* formatBalance */.az)(amount, token.decimals, maxAmountSignificant) ?? '0');
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
    });
}


/***/ })

}]);