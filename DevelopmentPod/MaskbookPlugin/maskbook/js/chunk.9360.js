"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9360],{

/***/ 39125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": () => (/* binding */ id)
/* harmony export */ });
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42716);


function id(text) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .w)((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(text));
}
//# sourceMappingURL=id.js.map

/***/ }),

/***/ 20690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 46179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visuallyHidden);

/***/ }),

/***/ 72078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ MarketsIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const MarketsIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Markets', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.162 7.156c0 .5-.223.976-.627 1.409v2.011a7.002 7.002 0 1 1-3.478 13.486c-1.12.28-2.404.438-3.77.438-3.635 0-6.694-1.125-7.601-2.654h-.182v-.393a1.719 1.719 0 0 1 0-1.101V7.706a1.72 1.72 0 0 1-.092-.55c0-1.987 3.526-3.598 7.875-3.598 4.35 0 7.875 1.61 7.875 3.598Z",
            fill: "#FEDD18"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10.948 8.791c-.497 0-2.975-.046-2.975-.993a.33.33 0 0 1 .657-.06c.158.142.973.391 2.318.391 1.17 0 1.94-.188 2.226-.33-.284-.143-1.053-.331-2.226-.331-.497 0-2.975-.047-2.975-.993s2.48-.993 2.975-.993c.495 0 2.975.047 2.975.993a.33.33 0 0 1-.656.06c-.158-.142-.973-.39-2.319-.39-1.17 0-1.938.188-2.225.33.284.142 1.052.33 2.225.33.498 0 2.975.047 2.975.993 0 .947-2.48.993-2.975.993Z",
            fill: "#FFF4B3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.713 25.241c-4.285 0-7.77-3.486-7.77-7.771s3.486-7.771 7.77-7.771c4.285 0 7.771 3.489 7.771 7.774 0 4.284-3.486 7.768-7.77 7.768Zm0-14.547a6.786 6.786 0 0 0-6.778 6.779 6.786 6.786 0 0 0 6.778 6.778 6.786 6.786 0 0 0 6.779-6.778 6.786 6.786 0 0 0-6.779-6.779Z",
            fill: "#FFB600"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10.618 9.207a.33.33 0 1 0 .661 0V5.239a.33.33 0 1 0-.661 0v3.968Z",
            fill: "#FFF4B3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13.152 23.756c-.7.107-1.44.162-2.206.162-4.034 0-7.44-1.59-7.44-3.473a.52.52 0 0 0-.033-.172.521.521 0 0 0 .032-.173v-.828c1.409 1.4 4.181 2.332 7.44 2.332l.19-.002a7.847 7.847 0 0 1-.531-.993c-3.883-.088-7.101-1.638-7.101-3.467v-1.173c1.266 1.258 3.64 2.138 6.477 2.302a7.676 7.676 0 0 1-.04-.796c0-.065.002-.134.005-.2-3.582-.234-6.442-1.714-6.442-3.436V12.66c1.32 1.313 3.847 2.215 6.847 2.322.114-.34.251-.667.41-.985-3.954-.046-7.26-1.616-7.26-3.47V9.354c1.408 1.4 4.18 2.333 7.44 2.333.58 0 1.143-.03 1.687-.088a7.734 7.734 0 0 1 5.078-1.897c.09 0 .18.002.27.008.143-.115.28-.233.403-.356v.378c.336.03.667.079.992.15v-2.66c0-2.502-3.702-4.463-8.433-4.463-4.73 0-8.421 1.96-8.421 4.462v12.882c0 .06.013.118.032.172a.52.52 0 0 0-.032.173c0 2.502 3.702 4.462 8.432 4.462 1.258 0 2.442-.14 3.503-.39a7.516 7.516 0 0 1-1.299-.764ZM10.948 3.75c4.034 0 7.44 1.589 7.44 3.472 0 1.884-3.406 3.473-7.44 3.473-4.033 0-7.44-1.589-7.44-3.473 0-1.883 3.407-3.472 7.44-3.472Z",
            fill: "#FFB600"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.713 19.868c-1.113 0-1.985-.629-1.985-1.433a.33.33 0 1 1 .662 0c0 .41.618.771 1.323.771.706 0 1.324-.36 1.324-.77 0-.411-.618-.772-1.324-.772-1.113 0-1.985-.629-1.985-1.433s.872-1.433 1.985-1.433 1.985.63 1.985 1.433a.33.33 0 1 1-.661 0c0-.41-.618-.77-1.324-.77-.705 0-1.323.36-1.323.77 0 .41.618.771 1.323.771 1.113 0 1.985.63 1.985 1.433 0 .804-.872 1.433-1.985 1.433Z",
            fill: "#FFF4B3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.713 21.11a.33.33 0 0 1-.33-.331v-6.615a.33.33 0 1 1 .661 0v6.612a.33.33 0 0 1-.33.333Z",
            fill: "#FFF4B3"
        })
    ]
}), '0 0 28 28');


/***/ }),

/***/ 41529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FA": () => (/* binding */ useMyIdentities),
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity),
/* harmony export */   "fb": () => (/* binding */ useCurrentVisitingIdentity),
/* harmony export */   "hg": () => (/* binding */ useFriendsList)
/* harmony export */ });
/* unused harmony export CurrentIdentitySubscription */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39850);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61751);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47175);






function useFriendsList() {
    const ref = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.friends */ .EJ.friends);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[
            ...ref.values()
        ]
    , [
        ref
    ]);
}
const default_ = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__.ValueRef({
    identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier.unknown */ .WO.unknown
});
function useLastRecognizedIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useCurrentVisitingIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.currentVisitingIdentityProvider */ .LM.collecting.currentVisitingIdentityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useMyIdentities() {
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles */ .EJ.profiles);
}
function useCurrentIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_4__.useSubscription)(CurrentIdentitySubscription);
}
const CurrentIdentitySubscription = {
    getCurrentValue () {
        var ref;
        const all = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles.value */ .EJ.profiles.value;
        const current = (((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_).value.identifier;
        return all.find((i)=>i.identifier.toText() === current.toText()
        ) || all[0];
    },
    subscribe (sub) {
        var ref;
        const a = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles.addListener */ .EJ.profiles.addListener(sub);
        const b = (ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized.addListener(sub);
        return ()=>{
            return [
                a(),
                b === null || b === void 0 ? void 0 : b()
            ];
        };
    }
};


/***/ }),

/***/ 76262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.FT),
/* harmony export */   "H9": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.H9),
/* harmony export */   "NH": () => (/* binding */ usePostClaimedAuthor),
/* harmony export */   "Vc": () => (/* binding */ usePostLink),
/* harmony export */   "eT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.eT),
/* harmony export */   "oQ": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.oQ)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61751);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27194);



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

/***/ 51758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92597);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35428);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49103);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80241);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46486);




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
    const [value, setValue] = state !== null && state !== void 0 ? state : [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length && !scrollable ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                    onChange: (_, newValue)=>{
                        return setValue === null || setValue === void 0 ? void 0 : setValue(newValue);
                    },
                    children: tabs.map((tab, i)=>{
                        var ref;
                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: tab.disabled,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tab, [
                                index1,
                                value
                            ].includes(i) ? classes.focusTab : '', tab.disabled ? classes.disabledTab : ''),
                            disableFocusRipple: tab.disableFocusRipple,
                            disableRipple: tab.disableRipple,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${(ref = tab.id) === null || ref === void 0 ? void 0 : ref.toLowerCase()}_tab`
                        }, i);
                    })
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index)=>index === value
                ),
                sx: {
                    height: height,
                    minHeight: height
                }
            }) : null
        ]
    }));
};


/***/ }),

/***/ 39853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ StyledLinearProgress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59837);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92597);



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
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        classes: classes,
        ...props
    }));
}


/***/ }),

/***/ 49076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fF": () => (/* binding */ ITO_MetadataReader),
  "th": () => (/* binding */ gcd),
  "cr": () => (/* binding */ isCompactPayload),
  "_x": () => (/* binding */ payloadIntoMask),
  "_D": () => (/* binding */ payloadOutMask),
  "xT": () => (/* binding */ sortTokens),
  "F6": () => (/* binding */ tokenIntoMask)
});

// UNUSED EXPORTS: payloadOutMaskCompact, renderWithITO_Metadata, timestampInMask, timestampOutMask, tokenOutMask

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var constants = __webpack_require__(75042);
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"total_remaining":{"type":"string","title":"total_remaining"},"chain_id":{"type":"number","title":"chain_id"},"start_time":{"type":"number","title":"start_time"},"end_time":{"type":"number","title":"end_time"},"unlock_time":{"type":"number","title":"unlock_time"},"qualification_address":{"type":"string","title":"qualification_address"},"regions":{"type":"string","title":"regions"},"creation_time":{"type":"number","title":"creation_time"},"token":{"$ref":"#/definitions/token"},"seller":{"$ref":"#/definitions/trader"},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"$ref":"#/definitions/token"}]}}},"required":["contract_address","pid","password","message","limit","total","total_remaining","chain_id","start_time","end_time","creation_time","token","seller","exchange_amounts","exchange_tokens"]}');
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"chain_id":{"type":"number","title":"chain_id"},"token":{"type":"string","title":"token"},"seller":{"$ref":"#/definitions/trader"},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"properties":{"address":{"type":"string","title":"address"}}}]}}},"required":["contract_address","pid","password","message","limit","total","chain_id","seller","exchange_amounts","exchange_tokens"]}');
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts






const reader_v1 = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_1 */.uJ, schema_v1_namespaceObject);
const reader_v2 = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_2 */.ag, schema_v2_namespaceObject);
const renderWithITO_Metadata = (0,base/* createRenderWithMetadata */.mC)(ITO_MetadataReader);
function ITO_MetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta);
}
/**
 * The greatest common divisor
 */ function gcd(a, b) {
    let a_ = a.abs();
    let b_ = b.abs();
    if (b_.isGreaterThan(a_)) {
        const temp = b_;
        b_ = a_;
        a_ = temp;
    }
    // eslint-disable-next-line no-constant-condition
    while(true){
        if (b_.isZero()) return a_;
        a_ = a_.mod(b_);
        if (a_.isZero()) return b_;
        b_ = b_.mod(a_);
    }
}
function sortTokens(tokenA, tokenB) {
    const addressA = tokenA.address.toLowerCase();
    const addressB = tokenB.address.toLowerCase();
    if ((0,address/* isNativeTokenAddress */.qw)(addressA)) return -1;
    if ((0,address/* isNativeTokenAddress */.qw)(addressB)) return 1;
    return addressA < addressB ? -1 : 1;
}
function timestampInMask(timestamp) {
    return timestamp * 1000;
}
function timestampOutMask(timestamp) {
    return Math.floor(timestamp / 1000);
}
function tokenIntoMask(token) {
    return {
        ...(0,omit/* default */.Z)(token, 'chain_id'),
        chainId: token.chain_id
    };
}
function tokenOutMask(token) {
    return {
        ...(0,omit/* default */.Z)(token, 'chainId'),
        chain_id: token.chainId
    };
}
function payloadIntoMask(payload) {
    return {
        ...payload,
        start_time: timestampInMask(payload.start_time),
        end_time: timestampInMask(payload.end_time),
        creation_time: timestampInMask(payload.creation_time),
        token: tokenIntoMask(payload.token),
        exchange_tokens: payload.exchange_tokens.map(tokenIntoMask).sort(sortTokens)
    };
}
function payloadOutMask(payload) {
    return {
        ...payload,
        start_time: timestampOutMask(payload.start_time),
        end_time: timestampOutMask(payload.end_time),
        creation_time: timestampOutMask(payload.creation_time),
        token: tokenOutMask(payload.token),
        exchange_tokens: payload.exchange_tokens.map(tokenOutMask)
    };
}
function payloadOutMaskCompact(payload) {
    return {
        ...payload,
        // HOTFIX of image payload for ITO
        // remove unnecessary chunks of data to reduce the size of payload
        token: tokenOutMask(payload.token),
        contract_address: '',
        message: '',
        start_time: 0,
        end_time: 0,
        creation_time: 0,
        limit: '0',
        total_remaining: '0',
        exchange_amounts: [],
        exchange_tokens: []
    };
}
function isCompactPayload(payload) {
    return !payload.exchange_tokens.length;
}


/***/ }),

/***/ 27343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var src = __webpack_require__(27194);
;// CONCATENATED MODULE: ./src/plugins/ITO/assets/ItoLabelIcon.tsx

const ItoLabelIcon = ({ size =24  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M23.4866 6.61475C23.4632 7.64131 11.9976 21.3382 11.9976 21.3382C11.9976 21.3382 4.9335 13.346 0.513184 6.61709H23.4866V6.61475Z",
                fill: "#FFB600"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M18.7194 0.661621H5.28037L0.513184 6.61475H23.4866L18.7194 0.661621Z",
                fill: "#FFD401"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M7.42944 6.61475L11.9998 0.661621L16.3005 6.61475H7.42944Z",
                fill: "#FFFFFD"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M7.42944 6.61475L11.9974 21.3382L16.3005 6.61475H7.42944Z",
                fill: "white"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M5.28037 0.661621L7.42959 6.61475H0.513184L5.28037 0.661621Z",
                fill: "#FAFF73"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M18.7193 0.661621L16.3005 6.61475H23.4865L18.7193 0.661621Z",
                fill: "#FFFFFD"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.8351 6.854C16.6523 6.91494 16.5234 7.03447 16.4484 7.21025C16.3195 7.39541 16.2773 7.60869 16.2445 7.82432C16.2093 8.03525 16.1882 8.24853 16.1578 8.48994C16.1203 8.12197 16.0875 7.78213 15.9914 7.454C16.0078 7.42353 15.9914 7.40713 15.9656 7.39541L15.9375 7.3251C15.9328 7.31807 15.9304 7.30869 15.9257 7.30166C15.9093 7.2665 15.8906 7.229 15.8742 7.19385C15.8648 7.11182 15.8156 7.05791 15.7429 7.02041C15.7054 6.94072 15.6398 6.89385 15.5531 6.8751C15.5437 6.86807 15.532 6.86338 15.5226 6.85635C15.4453 6.77432 15.3468 6.74385 15.239 6.73916C15.232 6.73682 15.225 6.73447 15.2156 6.73447C15.164 6.69932 15.1101 6.68057 15.0468 6.69463C15.0304 6.69229 15.014 6.68994 15 6.6876C14.9953 6.68291 14.9882 6.68291 14.9835 6.68525H14.9789C14.9179 6.65244 14.8546 6.63369 14.7843 6.64775C14.7703 6.64541 14.7539 6.64541 14.7398 6.64307C14.7093 6.61025 14.6648 6.63135 14.632 6.61494C14.571 6.58682 14.625 6.5751 14.6437 6.56103C14.6578 6.55869 14.6742 6.55635 14.6882 6.55635C14.714 6.57041 14.7398 6.56807 14.7609 6.54697C14.9578 6.5165 15.157 6.48369 15.3468 6.42041C15.3867 6.40635 15.4218 6.38057 15.4593 6.35947C15.6281 6.28447 15.7851 6.19775 15.839 5.99853C15.9656 5.88603 15.9937 5.72666 16.0265 5.57666C16.0898 5.30479 16.1226 5.02354 16.1531 4.74463C16.1976 4.98604 16.2093 5.23213 16.2609 5.47119C16.3054 5.66338 16.3546 5.85557 16.4625 6.02432C16.5796 6.21182 16.7531 6.329 16.9593 6.40635C17.2289 6.50713 17.5148 6.53291 17.796 6.57041C17.8546 6.57744 17.9132 6.5915 17.9976 6.60557C17.6812 6.63369 17.3929 6.6665 17.114 6.73916C17.0179 6.7626 16.9148 6.78603 16.8351 6.854Z",
                fill: "#FBFAF4"
            })
        ]
    })
;

// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var theme_src = __webpack_require__(92597);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenDetailed.ts
var useFungibleTokenDetailed = __webpack_require__(34082);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 26 modules
var constants = __webpack_require__(92211);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(66580);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 2 modules
var useERC20TokenDetailed = __webpack_require__(14754);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(72148);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(49076);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ./src/plugins/ITO/messages.ts
var messages = __webpack_require__(59259);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/usePoolPayload.ts


function usePoolPayload(pid) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!pid) return;
        return messages/* PluginITO_RPC.getPool */.k.getPool(pid);
    }, [
        pid
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(22229);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(83468);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(15091);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(24515);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(98294);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(11061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(81953);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(76262);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(47906);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(63081);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var ITO_constants = __webpack_require__(75042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(27862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(91518);
;// CONCATENATED MODULE: ./src/plugins/ITO/types.ts
var ITO_Status;
(function(ITO_Status) {
    ITO_Status["waited"] = "waited";
    ITO_Status["started"] = "started";
    ITO_Status["expired"] = "expired";
})(ITO_Status || (ITO_Status = {}));
var DialogTabs;
(function(DialogTabs) {
    DialogTabs[DialogTabs["create"] = 0] = "create";
    DialogTabs[DialogTabs["past"] = 1] = "past";
})(DialogTabs || (DialogTabs = {}));

// EXTERNAL MODULE: ./src/plugins/ITO/Worker/apis/checkAvailability.ts
var checkAvailability = __webpack_require__(51576);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useAvailability.ts



function useAvailability(id, contract_address) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { ITO_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const isV1 = (0,utils_address/* isSameAddress */.Wr)(contract_address !== null && contract_address !== void 0 ? contract_address : '', ITO_CONTRACT_ADDRESS);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!id || !contract_address) return null;
        return (0,checkAvailability/* checkAvailability */.g)(id, account, contract_address, chainId, isV1);
    }, [
        id,
        account
    ]);
}

;// CONCATENATED MODULE: ../web3-contracts/abis/Qualification.json
const Qualification_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_start_time","type":"uint256"},{"internalType":"uint256","name":"_max_gas_price","type":"uint256"},{"internalType":"uint256","name":"_min_token_amount","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint8","name":"_lucky_factor","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"GasPriceOver","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"qualified","type":"bool"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Qualification","type":"event"},{"anonymous":false,"inputs":[],"name":"Unlucky","type":"event"},{"inputs":[],"name":"get_creation_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_start_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"ifQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isLucky","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"ito_start_time","type":"uint256"}],"name":"logQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lucky_factor","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"max_gas_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"min_token_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_lucky_factor","type":"uint8"}],"name":"set_lucky_factor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_max_gas_price","type":"uint256"}],"name":"set_max_gas_price","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min_token_amount","type":"uint256"}],"name":"set_min_token_amount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start_time","type":"uint256"}],"name":"set_start_time","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token_addr","type":"address"}],"name":"set_token_addr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"token_addr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/Qualification2.json
const Qualification2_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_start_time","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"qualified","type":"bool"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Qualification","type":"event"},{"inputs":[],"name":"get_start_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"ifQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"},{"internalType":"string","name":"errorMsg","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"logQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"},{"internalType":"string","name":"errorMsg","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start_time","type":"uint256"}],"name":"set_start_time","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(42340);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useQualificationContract.ts



function useQualificationContract(address, ito_address) {
    const { ITO_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const QLF_CONTRACT = (0,useContract/* useContract */.cq)(address, Qualification_namespaceObject);
    const QLF2_CONTRACT = (0,useContract/* useContract */.cq)(address, Qualification2_namespaceObject);
    return (0,utils_address/* isSameAddress */.Wr)(ito_address, ITO_CONTRACT_ADDRESS) ? {
        version: 1,
        contract: QLF_CONTRACT
    } : {
        version: 2,
        contract: QLF2_CONTRACT
    };
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useQualification.ts



function useQualification(qualification_address, ito_address) {
    const account = (0,useAccount/* useAccount */.m)();
    const { contract: qualificationContract  } = useQualificationContract(qualification_address, ito_address);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const startTime = await qualificationContract.methods.get_start_time().call({
            from: account
        });
        return Number(startTime) * 1000;
    }, [
        account,
        qualificationContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useAvailabilityComputed.ts







function useAvailabilityComputed(payload) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { DEFAULT_QUALIFICATION2_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const asyncResult = useAvailability(payload.pid, payload.contract_address);
    const { value: availability , loading: loadingITO  } = asyncResult;
    var _qualification_address, ref;
    const qualificationAddress = (ref = (_qualification_address = payload.qualification_address) !== null && _qualification_address !== void 0 ? _qualification_address : availability === null || availability === void 0 ? void 0 : availability.qualification_addr) !== null && ref !== void 0 ? ref : DEFAULT_QUALIFICATION2_ADDRESS;
    const { value: qualification_start_time , loading: loadingQual  } = useQualification(qualificationAddress, payload.contract_address);
    asyncResult.loading = loadingITO || loadingQual;
    if (!availability) return {
        ...asyncResult,
        payload,
        computed: {
            remaining: '0',
            startTime: 0,
            endTime: 0,
            canFetch: false,
            canSwap: false,
            canShare: false,
            canRefund: false,
            isUnlocked: false,
            hasLockTime: false,
            unlockTime: 0,
            qualificationAddress,
            listOfStatus: (0,compact/* default */.Z)([
                ITO_Status.expired
            ])
        }
    };
    const _startTime = Number(availability.start_time) * 1000 ? Number(availability.start_time) * 1000 : payload.start_time;
    const endTime = Number(availability.end_time) * 1000 ? Number(availability.end_time) * 1000 : payload.end_time;
    const startTime = qualification_start_time && qualification_start_time > _startTime ? qualification_start_time : _startTime;
    const isStarted = startTime < Date.now();
    const isExpired = availability.expired;
    const unlockTime = Number(availability.unlock_time) * 1000;
    const hasLockTime = unlockTime !== ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm;
    const isCompleted = Number(availability.swapped) > 0;
    return {
        ...asyncResult,
        computed: {
            remaining: availability.remaining,
            startTime,
            endTime,
            unlockTime,
            qualificationAddress,
            hasLockTime,
            isUnlocked: (0,isAfter/* default */.Z)(Date.now(), unlockTime),
            canFetch: payload.chain_id === chainId,
            canSwap: isStarted && !isExpired && !isCompleted && payload.chain_id === chainId && payload.password,
            canRefund: isExpired && payload.chain_id === chainId,
            canShare: !isStarted,
            listOfStatus: (0,compact/* default */.Z)([
                isStarted ? ITO_Status.started : ITO_Status.waited,
                isExpired ? ITO_Status.expired : undefined, 
            ])
        }
    };
}

// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimCallback.ts
var useClaimCallback = __webpack_require__(57017);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(15030);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useITO_Contract.ts
var useITO_Contract = __webpack_require__(10727);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useDestructCallback.ts



function useDestructCallback(ito_address) {
    const account = (0,useAccount/* useAccount */.m)();
    const { contract: ITO_Contract  } = (0,useITO_Contract/* useITO_Contract */.k)(ito_address);
    const [destructState, setDestructState] = (0,useTransactionState/* useTransactionState */.p)();
    const destructCallback = (0,react.useCallback)(async (id)=>{
        if (!ITO_Contract || !id) {
            setDestructState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setDestructState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await ITO_Contract.methods.destruct(id).estimateGas({
                from: account
            }).catch((error)=>{
                setDestructState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            ITO_Contract.methods.destruct(id).send(config).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setDestructState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve(receipt.transactionHash);
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setDestructState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve(receipt.transactionHash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setDestructState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        ITO_Contract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setDestructState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        destructState,
        destructCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useIfQualified.ts



function useIfQualified(address, ito_address) {
    const account = (0,useAccount/* useAccount */.m)();
    const { contract: qualificationContract , version  } = useQualificationContract(address, ito_address);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!qualificationContract) return false;
        return (version === 1 ? qualificationContract.methods.ifQualified(account) : qualificationContract.methods.ifQualified(account, [])).call({
            from: account
        });
    }, [
        account,
        qualificationContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/usePoolTradeInfo.ts


/**
 * Get all trading activities of a given trader on a specific pool.
 * @param pid
 * @param trader
 */ function usePoolTradeInfo(pid, trader) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!pid || !trader) return;
        return messages/* PluginITO_RPC.getTradeInfo */.k.getTradeInfo(pid, trader);
    }, [
        pid,
        trader
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/assets/regions.json
const regions_namespaceObject = JSON.parse('[{"code":"AF","name":"Afghanistan"},{"code":"AX","name":"Åland Islands"},{"code":"AL","name":"Albania"},{"code":"DZ","name":"Algeria"},{"code":"AS","name":"American Samoa"},{"code":"AD","name":"Andorra"},{"code":"AO","name":"Angola"},{"code":"AI","name":"Anguilla"},{"code":"AQ","name":"Antarctica"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AR","name":"Argentina"},{"code":"AM","name":"Armenia"},{"code":"AW","name":"Aruba"},{"code":"AU","name":"Australia"},{"code":"AT","name":"Austria"},{"code":"AZ","name":"Azerbaijan"},{"code":"BS","name":"Bahamas"},{"code":"BH","name":"Bahrain"},{"code":"BD","name":"Bangladesh"},{"code":"BB","name":"Barbados"},{"code":"BY","name":"Belarus"},{"code":"BE","name":"Belgium"},{"code":"BZ","name":"Belize"},{"code":"BJ","name":"Benin"},{"code":"BM","name":"Bermuda"},{"code":"BT","name":"Bhutan"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BW","name":"Botswana"},{"code":"BV","name":"Bouvet Island"},{"code":"BR","name":"Brazil"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BG","name":"Bulgaria"},{"code":"BF","name":"Burkina Faso"},{"code":"BI","name":"Burundi"},{"code":"KH","name":"Cambodia"},{"code":"CM","name":"Cameroon"},{"code":"CA","name":"Canada"},{"code":"CV","name":"Cape Verde"},{"code":"KY","name":"Cayman Islands"},{"code":"CF","name":"Central African Republic"},{"code":"TD","name":"Chad"},{"code":"CL","name":"Chile"},{"code":"CN","name":"China"},{"code":"CX","name":"Christmas Island"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CO","name":"Colombia"},{"code":"KM","name":"Comoros"},{"code":"CG","name":"Congo"},{"code":"CD","name":"Congo, the Democratic Republic of the"},{"code":"CK","name":"Cook Islands"},{"code":"CR","name":"Costa Rica"},{"code":"CI","name":"Côte d\'Ivoire"},{"code":"HR","name":"Croatia"},{"code":"CU","name":"Cuba"},{"code":"CW","name":"Curaçao"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czech Republic"},{"code":"DK","name":"Denmark"},{"code":"DJ","name":"Djibouti"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"EC","name":"Ecuador"},{"code":"EG","name":"Egypt"},{"code":"SV","name":"El Salvador"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"ER","name":"Eritrea"},{"code":"EE","name":"Estonia"},{"code":"ET","name":"Ethiopia"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FO","name":"Faroe Islands"},{"code":"FJ","name":"Fiji"},{"code":"FI","name":"Finland"},{"code":"FR","name":"France"},{"code":"GF","name":"French Guiana"},{"code":"PF","name":"French Polynesia"},{"code":"TF","name":"French Southern Territories"},{"code":"GA","name":"Gabon"},{"code":"GM","name":"Gambia"},{"code":"GE","name":"Georgia"},{"code":"DE","name":"Germany"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GR","name":"Greece"},{"code":"GL","name":"Greenland"},{"code":"GD","name":"Grenada"},{"code":"GP","name":"Guadeloupe"},{"code":"GU","name":"Guam"},{"code":"GT","name":"Guatemala"},{"code":"GG","name":"Guernsey"},{"code":"GN","name":"Guinea"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HT","name":"Haiti"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"VA","name":"Holy See (Vatican City State)"},{"code":"HN","name":"Honduras"},{"code":"HK","name":"Hong Kong"},{"code":"HU","name":"Hungary"},{"code":"IS","name":"Iceland"},{"code":"IN","name":"India"},{"code":"ID","name":"Indonesia"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IQ","name":"Iraq"},{"code":"IE","name":"Ireland"},{"code":"IM","name":"Isle of Man"},{"code":"IL","name":"Israel"},{"code":"IT","name":"Italy"},{"code":"JM","name":"Jamaica"},{"code":"JP","name":"Japan"},{"code":"JE","name":"Jersey"},{"code":"JO","name":"Jordan"},{"code":"KZ","name":"Kazakhstan"},{"code":"KE","name":"Kenya"},{"code":"KI","name":"Kiribati"},{"code":"KP","name":"Korea, Democratic People\'s Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KG","name":"Kyrgyzstan"},{"code":"LA","name":"Lao People\'s Democratic Republic"},{"code":"LV","name":"Latvia"},{"code":"LB","name":"Lebanon"},{"code":"LS","name":"Lesotho"},{"code":"LR","name":"Liberia"},{"code":"LY","name":"Libya"},{"code":"LI","name":"Liechtenstein"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"MO","name":"Macao"},{"code":"MK","name":"Macedonia, the Former Yugoslav Republic of"},{"code":"MG","name":"Madagascar"},{"code":"MW","name":"Malawi"},{"code":"MY","name":"Malaysia"},{"code":"MV","name":"Maldives"},{"code":"ML","name":"Mali"},{"code":"MT","name":"Malta"},{"code":"MH","name":"Marshall Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MU","name":"Mauritius"},{"code":"YT","name":"Mayotte"},{"code":"MX","name":"Mexico"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"MD","name":"Moldova, Republic of"},{"code":"MC","name":"Monaco"},{"code":"MN","name":"Mongolia"},{"code":"ME","name":"Montenegro"},{"code":"MS","name":"Montserrat"},{"code":"MA","name":"Morocco"},{"code":"MZ","name":"Mozambique"},{"code":"MM","name":"Myanmar"},{"code":"NA","name":"Namibia"},{"code":"NR","name":"Nauru"},{"code":"NP","name":"Nepal"},{"code":"NL","name":"Netherlands"},{"code":"NC","name":"New Caledonia"},{"code":"NZ","name":"New Zealand"},{"code":"NI","name":"Nicaragua"},{"code":"NE","name":"Niger"},{"code":"NG","name":"Nigeria"},{"code":"NU","name":"Niue"},{"code":"NF","name":"Norfolk Island"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"NO","name":"Norway"},{"code":"OM","name":"Oman"},{"code":"PK","name":"Pakistan"},{"code":"PW","name":"Palau"},{"code":"PS","name":"Palestine, State of"},{"code":"PA","name":"Panama"},{"code":"PG","name":"Papua New Guinea"},{"code":"PY","name":"Paraguay"},{"code":"PE","name":"Peru"},{"code":"PH","name":"Philippines"},{"code":"PN","name":"Pitcairn"},{"code":"PL","name":"Poland"},{"code":"PT","name":"Portugal"},{"code":"PR","name":"Puerto Rico"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"BL","name":"Saint Barthélemy"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"LC","name":"Saint Lucia"},{"code":"MF","name":"Saint Martin (French part)"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"WS","name":"Samoa"},{"code":"SM","name":"San Marino"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SA","name":"Saudi Arabia"},{"code":"SN","name":"Senegal"},{"code":"RS","name":"Serbia"},{"code":"SC","name":"Seychelles"},{"code":"SL","name":"Sierra Leone"},{"code":"SG","name":"Singapore"},{"code":"SX","name":"Sint Maarten (Dutch part)"},{"code":"SK","name":"Slovakia"},{"code":"SI","name":"Slovenia"},{"code":"SB","name":"Solomon Islands"},{"code":"SO","name":"Somalia"},{"code":"ZA","name":"South Africa"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"SS","name":"South Sudan"},{"code":"ES","name":"Spain"},{"code":"LK","name":"Sri Lanka"},{"code":"SD","name":"Sudan"},{"code":"SR","name":"Suriname"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SZ","name":"Swaziland"},{"code":"SE","name":"Sweden"},{"code":"CH","name":"Switzerland"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"TW","name":"Taiwan"},{"code":"TJ","name":"Tajikistan"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"TH","name":"Thailand"},{"code":"TL","name":"Timor-Leste"},{"code":"TG","name":"Togo"},{"code":"TK","name":"Tokelau"},{"code":"TO","name":"Tonga"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TN","name":"Tunisia"},{"code":"TR","name":"Turkey"},{"code":"TM","name":"Turkmenistan"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TV","name":"Tuvalu"},{"code":"UG","name":"Uganda"},{"code":"UA","name":"Ukraine"},{"code":"AE","name":"United Arab Emirates"},{"code":"GB","name":"United Kingdom"},{"code":"US","name":"United States"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VU","name":"Vanuatu"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VN","name":"Viet Nam"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"WF","name":"Wallis and Futuna"},{"code":"EH","name":"Western Sahara"},{"code":"YE","name":"Yemen"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}]');
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useRegion.ts
/* eslint-disable @typescript-eslint/prefer-enum-initializers */ 

// TODO better way to do the i18n of region

var // country and region code from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// there are many regions in the list, CountryCode is not precise,  so named as RegionCode or CountryRegionCode ?
RegionEnum;
(function(RegionEnum) {
    RegionEnum[RegionEnum["AF"] = 0] = "AF";
    RegionEnum[RegionEnum["AX"] = 1] = "AX";
    RegionEnum[RegionEnum["AL"] = 2] = "AL";
    RegionEnum[RegionEnum["DZ"] = 3] = "DZ";
    RegionEnum[RegionEnum["AS"] = 4] = "AS";
    RegionEnum[RegionEnum["AD"] = 5] = "AD";
    RegionEnum[RegionEnum["AO"] = 6] = "AO";
    RegionEnum[RegionEnum["AI"] = 7] = "AI";
    RegionEnum[RegionEnum["AQ"] = 8] = "AQ";
    RegionEnum[RegionEnum["AG"] = 9] = "AG";
    RegionEnum[RegionEnum["AR"] = 10] = "AR";
    RegionEnum[RegionEnum["AM"] = 11] = "AM";
    RegionEnum[RegionEnum["AW"] = 12] = "AW";
    RegionEnum[RegionEnum["AU"] = 13] = "AU";
    RegionEnum[RegionEnum["AT"] = 14] = "AT";
    RegionEnum[RegionEnum["AZ"] = 15] = "AZ";
    RegionEnum[RegionEnum["BS"] = 16] = "BS";
    RegionEnum[RegionEnum["BH"] = 17] = "BH";
    RegionEnum[RegionEnum["BD"] = 18] = "BD";
    RegionEnum[RegionEnum["BB"] = 19] = "BB";
    RegionEnum[RegionEnum["BY"] = 20] = "BY";
    RegionEnum[RegionEnum["BE"] = 21] = "BE";
    RegionEnum[RegionEnum["BZ"] = 22] = "BZ";
    RegionEnum[RegionEnum["BJ"] = 23] = "BJ";
    RegionEnum[RegionEnum["BM"] = 24] = "BM";
    RegionEnum[RegionEnum["BT"] = 25] = "BT";
    RegionEnum[RegionEnum["BO"] = 26] = "BO";
    RegionEnum[RegionEnum["BQ"] = 27] = "BQ";
    RegionEnum[RegionEnum["BA"] = 28] = "BA";
    RegionEnum[RegionEnum["BW"] = 29] = "BW";
    RegionEnum[RegionEnum["BV"] = 30] = "BV";
    RegionEnum[RegionEnum["BR"] = 31] = "BR";
    RegionEnum[RegionEnum["IO"] = 32] = "IO";
    RegionEnum[RegionEnum["BN"] = 33] = "BN";
    RegionEnum[RegionEnum["BG"] = 34] = "BG";
    RegionEnum[RegionEnum["BF"] = 35] = "BF";
    RegionEnum[RegionEnum["BI"] = 36] = "BI";
    RegionEnum[RegionEnum["KH"] = 37] = "KH";
    RegionEnum[RegionEnum["CM"] = 38] = "CM";
    RegionEnum[RegionEnum["CA"] = 39] = "CA";
    RegionEnum[RegionEnum["CV"] = 40] = "CV";
    RegionEnum[RegionEnum["KY"] = 41] = "KY";
    RegionEnum[RegionEnum["CF"] = 42] = "CF";
    RegionEnum[RegionEnum["TD"] = 43] = "TD";
    RegionEnum[RegionEnum["CL"] = 44] = "CL";
    RegionEnum[RegionEnum["CN"] = 45] = "CN";
    RegionEnum[RegionEnum["CX"] = 46] = "CX";
    RegionEnum[RegionEnum["CC"] = 47] = "CC";
    RegionEnum[RegionEnum["CO"] = 48] = "CO";
    RegionEnum[RegionEnum["KM"] = 49] = "KM";
    RegionEnum[RegionEnum["CG"] = 50] = "CG";
    RegionEnum[RegionEnum["CD"] = 51] = "CD";
    RegionEnum[RegionEnum["CK"] = 52] = "CK";
    RegionEnum[RegionEnum["CR"] = 53] = "CR";
    RegionEnum[RegionEnum["CI"] = 54] = "CI";
    RegionEnum[RegionEnum["HR"] = 55] = "HR";
    RegionEnum[RegionEnum["CU"] = 56] = "CU";
    RegionEnum[RegionEnum["CW"] = 57] = "CW";
    RegionEnum[RegionEnum["CY"] = 58] = "CY";
    RegionEnum[RegionEnum["CZ"] = 59] = "CZ";
    RegionEnum[RegionEnum["DK"] = 60] = "DK";
    RegionEnum[RegionEnum["DJ"] = 61] = "DJ";
    RegionEnum[RegionEnum["DM"] = 62] = "DM";
    RegionEnum[RegionEnum["DO"] = 63] = "DO";
    RegionEnum[RegionEnum["EC"] = 64] = "EC";
    RegionEnum[RegionEnum["EG"] = 65] = "EG";
    RegionEnum[RegionEnum["SV"] = 66] = "SV";
    RegionEnum[RegionEnum["GQ"] = 67] = "GQ";
    RegionEnum[RegionEnum["ER"] = 68] = "ER";
    RegionEnum[RegionEnum["EE"] = 69] = "EE";
    RegionEnum[RegionEnum["ET"] = 70] = "ET";
    RegionEnum[RegionEnum["FK"] = 71] = "FK";
    RegionEnum[RegionEnum["FO"] = 72] = "FO";
    RegionEnum[RegionEnum["FJ"] = 73] = "FJ";
    RegionEnum[RegionEnum["FI"] = 74] = "FI";
    RegionEnum[RegionEnum["FR"] = 75] = "FR";
    RegionEnum[RegionEnum["GF"] = 76] = "GF";
    RegionEnum[RegionEnum["PF"] = 77] = "PF";
    RegionEnum[RegionEnum["TF"] = 78] = "TF";
    RegionEnum[RegionEnum["GA"] = 79] = "GA";
    RegionEnum[RegionEnum["GM"] = 80] = "GM";
    RegionEnum[RegionEnum["GE"] = 81] = "GE";
    RegionEnum[RegionEnum["DE"] = 82] = "DE";
    RegionEnum[RegionEnum["GH"] = 83] = "GH";
    RegionEnum[RegionEnum["GI"] = 84] = "GI";
    RegionEnum[RegionEnum["GR"] = 85] = "GR";
    RegionEnum[RegionEnum["GL"] = 86] = "GL";
    RegionEnum[RegionEnum["GD"] = 87] = "GD";
    RegionEnum[RegionEnum["GP"] = 88] = "GP";
    RegionEnum[RegionEnum["GU"] = 89] = "GU";
    RegionEnum[RegionEnum["GT"] = 90] = "GT";
    RegionEnum[RegionEnum["GG"] = 91] = "GG";
    RegionEnum[RegionEnum["GN"] = 92] = "GN";
    RegionEnum[RegionEnum["GW"] = 93] = "GW";
    RegionEnum[RegionEnum["GY"] = 94] = "GY";
    RegionEnum[RegionEnum["HT"] = 95] = "HT";
    RegionEnum[RegionEnum["HM"] = 96] = "HM";
    RegionEnum[RegionEnum["VA"] = 97] = "VA";
    RegionEnum[RegionEnum["HN"] = 98] = "HN";
    RegionEnum[RegionEnum["HK"] = 99] = "HK";
    RegionEnum[RegionEnum["HU"] = 100] = "HU";
    RegionEnum[RegionEnum["IS"] = 101] = "IS";
    RegionEnum[RegionEnum["IN"] = 102] = "IN";
    RegionEnum[RegionEnum["ID"] = 103] = "ID";
    RegionEnum[RegionEnum["IR"] = 104] = "IR";
    RegionEnum[RegionEnum["IQ"] = 105] = "IQ";
    RegionEnum[RegionEnum["IE"] = 106] = "IE";
    RegionEnum[RegionEnum["IM"] = 107] = "IM";
    RegionEnum[RegionEnum["IL"] = 108] = "IL";
    RegionEnum[RegionEnum["IT"] = 109] = "IT";
    RegionEnum[RegionEnum["JM"] = 110] = "JM";
    RegionEnum[RegionEnum["JP"] = 111] = "JP";
    RegionEnum[RegionEnum["JE"] = 112] = "JE";
    RegionEnum[RegionEnum["JO"] = 113] = "JO";
    RegionEnum[RegionEnum["KZ"] = 114] = "KZ";
    RegionEnum[RegionEnum["KE"] = 115] = "KE";
    RegionEnum[RegionEnum["KI"] = 116] = "KI";
    RegionEnum[RegionEnum["KP"] = 117] = "KP";
    RegionEnum[RegionEnum["KR"] = 118] = "KR";
    RegionEnum[RegionEnum["KW"] = 119] = "KW";
    RegionEnum[RegionEnum["KG"] = 120] = "KG";
    RegionEnum[RegionEnum["LA"] = 121] = "LA";
    RegionEnum[RegionEnum["LV"] = 122] = "LV";
    RegionEnum[RegionEnum["LB"] = 123] = "LB";
    RegionEnum[RegionEnum["LS"] = 124] = "LS";
    RegionEnum[RegionEnum["LR"] = 125] = "LR";
    RegionEnum[RegionEnum["LY"] = 126] = "LY";
    RegionEnum[RegionEnum["LI"] = 127] = "LI";
    RegionEnum[RegionEnum["LT"] = 128] = "LT";
    RegionEnum[RegionEnum["LU"] = 129] = "LU";
    RegionEnum[RegionEnum["MO"] = 130] = "MO";
    RegionEnum[RegionEnum["MK"] = 131] = "MK";
    RegionEnum[RegionEnum["MG"] = 132] = "MG";
    RegionEnum[RegionEnum["MW"] = 133] = "MW";
    RegionEnum[RegionEnum["MY"] = 134] = "MY";
    RegionEnum[RegionEnum["MV"] = 135] = "MV";
    RegionEnum[RegionEnum["ML"] = 136] = "ML";
    RegionEnum[RegionEnum["MT"] = 137] = "MT";
    RegionEnum[RegionEnum["MH"] = 138] = "MH";
    RegionEnum[RegionEnum["MQ"] = 139] = "MQ";
    RegionEnum[RegionEnum["MR"] = 140] = "MR";
    RegionEnum[RegionEnum["MU"] = 141] = "MU";
    RegionEnum[RegionEnum["YT"] = 142] = "YT";
    RegionEnum[RegionEnum["MX"] = 143] = "MX";
    RegionEnum[RegionEnum["FM"] = 144] = "FM";
    RegionEnum[RegionEnum["MD"] = 145] = "MD";
    RegionEnum[RegionEnum["MC"] = 146] = "MC";
    RegionEnum[RegionEnum["MN"] = 147] = "MN";
    RegionEnum[RegionEnum["ME"] = 148] = "ME";
    RegionEnum[RegionEnum["MS"] = 149] = "MS";
    RegionEnum[RegionEnum["MA"] = 150] = "MA";
    RegionEnum[RegionEnum["MZ"] = 151] = "MZ";
    RegionEnum[RegionEnum["MM"] = 152] = "MM";
    RegionEnum[RegionEnum["NA"] = 153] = "NA";
    RegionEnum[RegionEnum["NR"] = 154] = "NR";
    RegionEnum[RegionEnum["NP"] = 155] = "NP";
    RegionEnum[RegionEnum["NL"] = 156] = "NL";
    RegionEnum[RegionEnum["NC"] = 157] = "NC";
    RegionEnum[RegionEnum["NZ"] = 158] = "NZ";
    RegionEnum[RegionEnum["NI"] = 159] = "NI";
    RegionEnum[RegionEnum["NE"] = 160] = "NE";
    RegionEnum[RegionEnum["NG"] = 161] = "NG";
    RegionEnum[RegionEnum["NU"] = 162] = "NU";
    RegionEnum[RegionEnum["NF"] = 163] = "NF";
    RegionEnum[RegionEnum["MP"] = 164] = "MP";
    RegionEnum[RegionEnum["NO"] = 165] = "NO";
    RegionEnum[RegionEnum["OM"] = 166] = "OM";
    RegionEnum[RegionEnum["PK"] = 167] = "PK";
    RegionEnum[RegionEnum["PW"] = 168] = "PW";
    RegionEnum[RegionEnum["PS"] = 169] = "PS";
    RegionEnum[RegionEnum["PA"] = 170] = "PA";
    RegionEnum[RegionEnum["PG"] = 171] = "PG";
    RegionEnum[RegionEnum["PY"] = 172] = "PY";
    RegionEnum[RegionEnum["PE"] = 173] = "PE";
    RegionEnum[RegionEnum["PH"] = 174] = "PH";
    RegionEnum[RegionEnum["PN"] = 175] = "PN";
    RegionEnum[RegionEnum["PL"] = 176] = "PL";
    RegionEnum[RegionEnum["PT"] = 177] = "PT";
    RegionEnum[RegionEnum["PR"] = 178] = "PR";
    RegionEnum[RegionEnum["QA"] = 179] = "QA";
    RegionEnum[RegionEnum["RE"] = 180] = "RE";
    RegionEnum[RegionEnum["RO"] = 181] = "RO";
    RegionEnum[RegionEnum["RU"] = 182] = "RU";
    RegionEnum[RegionEnum["RW"] = 183] = "RW";
    RegionEnum[RegionEnum["BL"] = 184] = "BL";
    RegionEnum[RegionEnum["SH"] = 185] = "SH";
    RegionEnum[RegionEnum["KN"] = 186] = "KN";
    RegionEnum[RegionEnum["LC"] = 187] = "LC";
    RegionEnum[RegionEnum["MF"] = 188] = "MF";
    RegionEnum[RegionEnum["PM"] = 189] = "PM";
    RegionEnum[RegionEnum["VC"] = 190] = "VC";
    RegionEnum[RegionEnum["WS"] = 191] = "WS";
    RegionEnum[RegionEnum["SM"] = 192] = "SM";
    RegionEnum[RegionEnum["ST"] = 193] = "ST";
    RegionEnum[RegionEnum["SA"] = 194] = "SA";
    RegionEnum[RegionEnum["SN"] = 195] = "SN";
    RegionEnum[RegionEnum["RS"] = 196] = "RS";
    RegionEnum[RegionEnum["SC"] = 197] = "SC";
    RegionEnum[RegionEnum["SL"] = 198] = "SL";
    RegionEnum[RegionEnum["SG"] = 199] = "SG";
    RegionEnum[RegionEnum["SX"] = 200] = "SX";
    RegionEnum[RegionEnum["SK"] = 201] = "SK";
    RegionEnum[RegionEnum["SI"] = 202] = "SI";
    RegionEnum[RegionEnum["SB"] = 203] = "SB";
    RegionEnum[RegionEnum["SO"] = 204] = "SO";
    RegionEnum[RegionEnum["ZA"] = 205] = "ZA";
    RegionEnum[RegionEnum["GS"] = 206] = "GS";
    RegionEnum[RegionEnum["SS"] = 207] = "SS";
    RegionEnum[RegionEnum["ES"] = 208] = "ES";
    RegionEnum[RegionEnum["LK"] = 209] = "LK";
    RegionEnum[RegionEnum["SD"] = 210] = "SD";
    RegionEnum[RegionEnum["SR"] = 211] = "SR";
    RegionEnum[RegionEnum["SJ"] = 212] = "SJ";
    RegionEnum[RegionEnum["SZ"] = 213] = "SZ";
    RegionEnum[RegionEnum["SE"] = 214] = "SE";
    RegionEnum[RegionEnum["CH"] = 215] = "CH";
    RegionEnum[RegionEnum["SY"] = 216] = "SY";
    RegionEnum[RegionEnum["TW"] = 217] = "TW";
    RegionEnum[RegionEnum["TJ"] = 218] = "TJ";
    RegionEnum[RegionEnum["TZ"] = 219] = "TZ";
    RegionEnum[RegionEnum["TH"] = 220] = "TH";
    RegionEnum[RegionEnum["TL"] = 221] = "TL";
    RegionEnum[RegionEnum["TG"] = 222] = "TG";
    RegionEnum[RegionEnum["TK"] = 223] = "TK";
    RegionEnum[RegionEnum["TO"] = 224] = "TO";
    RegionEnum[RegionEnum["TT"] = 225] = "TT";
    RegionEnum[RegionEnum["TN"] = 226] = "TN";
    RegionEnum[RegionEnum["TR"] = 227] = "TR";
    RegionEnum[RegionEnum["TM"] = 228] = "TM";
    RegionEnum[RegionEnum["TC"] = 229] = "TC";
    RegionEnum[RegionEnum["TV"] = 230] = "TV";
    RegionEnum[RegionEnum["UG"] = 231] = "UG";
    RegionEnum[RegionEnum["UA"] = 232] = "UA";
    RegionEnum[RegionEnum["AE"] = 233] = "AE";
    RegionEnum[RegionEnum["GB"] = 234] = "GB";
    RegionEnum[RegionEnum["US"] = 235] = "US";
    RegionEnum[RegionEnum["UM"] = 236] = "UM";
    RegionEnum[RegionEnum["UY"] = 237] = "UY";
    RegionEnum[RegionEnum["UZ"] = 238] = "UZ";
    RegionEnum[RegionEnum["VU"] = 239] = "VU";
    RegionEnum[RegionEnum["VE"] = 240] = "VE";
    RegionEnum[RegionEnum["VN"] = 241] = "VN";
    RegionEnum[RegionEnum["VG"] = 242] = "VG";
    RegionEnum[RegionEnum["VI"] = 243] = "VI";
    RegionEnum[RegionEnum["WF"] = 244] = "WF";
    RegionEnum[RegionEnum["EH"] = 245] = "EH";
    RegionEnum[RegionEnum["YE"] = 246] = "YE";
    RegionEnum[RegionEnum["ZM"] = 247] = "ZM";
    RegionEnum[RegionEnum["ZW"] = 248] = "ZW";
})(RegionEnum || (RegionEnum = {}));
const regionNameMap = new Map(regions_namespaceObject.map((r)=>[
        r.code,
        r.name
    ]
));
const regionCodes = regions_namespaceObject.map((r)=>r.code
);
function createRegionResolver(api, field) {
    return async ()=>{
        const response = await fetch(api);
        const result = await response.json();
        const code = result[field];
        if (!code) {
            throw new Error('Failed to resolve region');
        }
        if (!(code in RegionEnum)) {
            throw new Error('unknown region');
        }
        return {
            code,
            name: regionNameMap.get(code)
        };
    };
}
const IPGeoResolver = createRegionResolver('https://service.r2d2.to/geolocation', 'region');
function useIPRegion() {
    return (0,useAsyncRetry/* default */.Z)(IPGeoResolver);
}
function useRegionList() {
    // TODO return name by i18n
    return regions_namespaceObject;
}
function useRegionSelect(initRegionCodes) {
    return (0,react.useState)(initRegionCodes ? [
        ...initRegionCodes
    ] : [
        ...regionCodes
    ]);
}
function encodeRegionCode(codes) {
    const isMoreThanHalf = codes.length > regionCodes.length / 2;
    if (isMoreThanHalf) {
        return '-' + regionCodes.filter((c)=>!codes.includes(c)
        );
    }
    return '+' + codes.join(',');
}
function decodeRegionCode(str) {
    str = str.toUpperCase();
    const isReverse = str.startsWith('-');
    const codes = str.slice(1).split(',').filter((c)=>regionNameMap.has(c)
    );
    if (isReverse) {
        return regionCodes.filter((c)=>!codes.includes(c)
        );
    }
    return codes;
}
function checkRegionRestrict(regions1) {
    return regions1.length !== regionCodes.length;
}

// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/StyledLinearProgress.tsx
var StyledLinearProgress = __webpack_require__(39853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(35437);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(96766);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(49950);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNetworkType.ts
var useNetworkType = __webpack_require__(83064);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(67937);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailedFromTokenLists.ts





function useERC20TokenDetailedFromTokenLists(address) {
    const { ERC20  } = (0,constants/* useTokenListConstants */.HQ)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { fetchERC20TokensFromTokenLists  } = (0,context/* useWeb3Context */.Z_)();
    const { value: allTokens = [] , loading: loadingAllTokens  } = (0,useAsync/* default */.Z)(async ()=>!ERC20 || ERC20.length === 0 ? [] : fetchERC20TokensFromTokenLists(ERC20, chainId)
    , [
        chainId,
        ERC20 === null || ERC20 === void 0 ? void 0 : ERC20.sort().join()
    ]);
    return {
        loading: loadingAllTokens,
        tokensDetailed: allTokens.find((token)=>(0,utils_address/* isSameAddress */.Wr)(address, token.address)
        )
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/RemindDialog.tsx











const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        reminderText: {
            color: '#FF5555',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1.5)
        },
        reminderTextFirst: {
            marginTop: 0
        },
        reminderTextLast: {
            marginBottom: 0
        },
        docBox: {
            overflow: 'scroll'
        },
        center: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.2rem'
        },
        bigCenter: {
            fontSize: '1.5rem'
        },
        bold: {
            fontWeight: 'bold',
            fontSize: '1.1rem'
        },
        wrapper: {
            padding: theme.spacing(2),
            background: theme.palette.background.default,
            borderRadius: theme.shape.borderRadius
        },
        tokenWrapper: {
            display: 'flex',
            alignItems: 'center',
            marginTop: theme.spacing(2),
            padding: theme.spacing(2.5, 0, 2.5, 2)
        },
        tokenIcon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 39,
            height: 39
        },
        tokenTextWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 45,
            marginLeft: '1rem'
        },
        tokenSymbol: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#15181B',
            fontSize: 18,
            cursor: 'default'
        },
        tokenLink: {
            color: '#6F767C',
            fontSize: 15,
            '&:hover': {
                textDecoration: 'none'
            }
        },
        confirmWrapper: {
            marginTop: theme.spacing(1),
            display: 'flex',
            alignItems: 'center'
        },
        confirmText: {
            color: '#6F767C'
        },
        button: {
            width: 'fit-content',
            margin: '0 auto',
            padding: '6px 48px'
        },
        table: {
            border: '1px solid #FF5555',
            color: '#FF5555'
        },
        cell: {
            width: '50%',
            border: '1px solid #FF5555',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        moreCell: {
            flexDirection: 'column'
        },
        column: {
            width: '100%',
            display: 'flex'
        },
        lowSpacing: {
            marginTop: 4,
            marginBottom: 4
        }
    })
);
function RemindDialog(props) {
    const { token , chainId , setStatus  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,theme_src/* useStylesExtends */.Bc)(useStyles(), {});
    const [agreeReminder, setAgreeReminder] = (0,react.useState)(false);
    const networkType = (0,useNetworkType/* useNetworkType */.b)();
    const { tokensDetailed  } = useERC20TokenDetailedFromTokenLists(token.address);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classnames_default()(classes.reminderText, classes.reminderTextFirst),
                        children: t('plugin_ito_dialog_claim_reminder_text1', {
                            networkType: (0,pipes/* resolveNetworkName */.nW)(networkType)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.reminderText,
                        children: t('plugin_ito_dialog_claim_reminder_text2')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.reminderText,
                        children: t('plugin_ito_dialog_claim_reminder_text3')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classnames_default()(classes.reminderText, classes.reminderTextLast),
                        children: t('plugin_ito_dialog_claim_reminder_text4')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classnames_default()(classes.wrapper, classes.tokenWrapper),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                        address: token.address,
                        classes: {
                            icon: classes.tokenIcon
                        },
                        logoURI: tokensDetailed === null || tokensDetailed === void 0 ? void 0 : tokensDetailed.logoURI
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.tokenTextWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h5",
                                className: classes.tokenSymbol,
                                children: token.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                target: "_blank",
                                className: classes.tokenLink,
                                rel: "noopener noreferrer",
                                href: dist_default()((0,pipes/* resolveLinkOnExplorer */.CS)(chainId), '/token/:address', {
                                    address: token.address
                                }),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                            address: token.address,
                                            size: 4,
                                            formatter: formatter/* formatEthereumAddress */.j8
                                        }),
                                        " (",
                                        t('plugin_ito_view_on_explorer'),
                                        ")"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.confirmWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                        color: "primary",
                        checked: agreeReminder,
                        onChange: (event)=>{
                            setAgreeReminder(event.target.checked);
                        }
                    }),
                    label: t('plugin_ito_dialog_claim_reminder_agree')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                color: "primary",
                className: classes.button,
                onClick: ()=>setStatus(SwapStatus.Swap)
                ,
                disabled: !agreeReminder,
                children: t('plugin_ito_continue')
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ShareDialog.tsx








const ShareDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        shareWrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: theme.spacing(2, 0)
        },
        shareAmount: {
            fontSize: 36,
            marginTop: 90,
            color: '#fff'
        },
        shareToken: {
            marginTop: 5,
            fontSize: 24,
            color: '#fff'
        },
        shareText: {
            marginTop: 20,
            fontSize: 24,
            color: '#fff'
        },
        shareButton: {
            width: 'fit-content',
            backgroundColor: '#FBD363 !important',
            padding: theme.spacing(0.5, 6),
            marginTop: theme.spacing(2),
            minHeight: 28
        },
        shareImage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundAttachment: 'local',
            backgroundPosition: '0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 475,
            height: 341,
            backgroundColor: '#FF5238',
            borderRadius: 10
        }
    })
);
function ShareDialog(props) {
    const ShareBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(96705), __webpack_require__.b));
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,theme_src/* useStylesExtends */.Bc)(ShareDialog_useStyles(), {});
    const { token , actualSwapAmount , shareSuccessLink , onClose  } = props;
    const amount = (0,formatter/* formatBalance */.az)(actualSwapAmount, token.decimals);
    const onShareSuccess = (0,react.useCallback)(async ()=>{
        onClose();
        window.open(shareSuccessLink, '_blank', 'noopener noreferrer');
    }, [
        shareSuccessLink,
        onClose
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.shareWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.shareImage,
            style: {
                backgroundImage: `url(${ShareBackground})`,
                borderRadius: 12
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.shareAmount,
                    children: amount
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.shareToken,
                    children: token.symbol
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.shareText,
                    children: (0,base_src/* isZero */.Fr)(actualSwapAmount) ? t('plugin_ito_out_of_stock_hit') : t('plugin_ito_congratulations')
                }),
                shareSuccessLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: onShareSuccess,
                    variant: "contained",
                    color: "primary",
                    className: classes.shareButton,
                    children: t('plugin_ito_dialog_swap_share_title')
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Slider/Slider.js
var Slider = __webpack_require__(18049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(55673);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(42624);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(7897);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSwapCallback.ts









function useSwapCallback(payload, total, token, isQualificationHasLucky = false) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { ITO_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const { contract: ITO_Contract , version  } = (0,useITO_Contract/* useITO_Contract */.k)(payload.contract_address);
    const [swapState, setSwapState] = (0,useTransactionState/* useTransactionState */.p)();
    const { contract: qualificationContract  } = useQualificationContract(payload.qualification_address, payload.contract_address);
    const swapCallback = (0,react.useCallback)(async ()=>{
        if (!ITO_Contract || !qualificationContract || !payload) {
            setSwapState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        const { pid , password  } = payload;
        // error: cannot find password
        if (!password) {
            setSwapState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Failed to swap token.')
            });
            return;
        }
        // error: poll has expired
        if (payload.end_time < Date.now()) {
            setSwapState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Pool has expired.')
            });
            return;
        }
        // error: invalid swap amount
        if (!(0,base_src/* isPositive */.xP)(total)) {
            setSwapState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid swap amount.')
            });
            return;
        }
        // error: invalid token
        const swapTokenAt = payload.exchange_tokens.findIndex((0,utils_address/* currySameAddress */.DC)(token.address));
        if (swapTokenAt === -1) {
            setSwapState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error(`Unknown ${token.symbol} token.`)
            });
            return;
        }
        // error: not qualified
        try {
            const ifQualified = await (version === 1 ? qualificationContract.methods.ifQualified(account) : qualificationContract.methods.ifQualified(account, [])).call({
                from: account
            });
            if (!ifQualified) {
                setSwapState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error: new Error('Not Qualified.')
                });
                return;
            }
        } catch  {
            setSwapState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Failed to read qualification.')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setSwapState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // check remaining
        try {
            const availability = await (0,checkAvailability/* checkAvailability */.g)(pid, account, payload.contract_address, chainId, (0,utils_address/* isSameAddress */.Wr)(payload.contract_address, ITO_CONTRACT_ADDRESS));
            if ((0,base_src/* isZero */.Fr)(availability.remaining)) {
                setSwapState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error: new Error('Out of Stock')
                });
                return;
            }
        } catch  {
            setSwapState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Failed to check availability.')
            });
            return;
        }
        var ref2;
        const swapParamsV1 = [
            pid,
            lib_default().soliditySha3(lib_default().hexToNumber(`0x${(0,shared_base_src/* toHex */.NC)((0,shared_base_src/* fromHex */.H_)((ref2 = lib_default().sha3(password)) !== null && ref2 !== void 0 ? ref2 : '').slice(0, 5))}`), account),
            lib_default().sha3(account),
            swapTokenAt,
            total, 
        ];
        var ref1;
        const swapParamsV2 = [
            pid,
            lib_default().soliditySha3(lib_default().hexToNumber(`0x${(0,shared_base_src/* toHex */.NC)((0,shared_base_src/* fromHex */.H_)((ref1 = lib_default().sha3(password)) !== null && ref1 !== void 0 ? ref1 : '').slice(0, 5))}`), account),
            swapTokenAt,
            total,
            [], 
        ];
        // estimate gas and compose transaction
        const value = (0,base_src/* toFixed */.FH)(token.type === types/* EthereumTokenType.Native */.Dr.Native ? total : 0);
        const config = {
            from: account,
            gas: isQualificationHasLucky ? 200000 : await (version === 1 ? ITO_Contract.methods.swap(...swapParamsV1) : ITO_Contract.methods.swap(...swapParamsV2)).estimateGas({
                from: account,
                value
            }).catch((error)=>{
                setSwapState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            value
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            const onSucceed = (no, receipt)=>{
                var ref;
                setSwapState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt,
                    reason: !((ref = receipt.events) === null || ref === void 0 ? void 0 : ref.SwapSuccess) ? t('plugin_ito_swap_unlucky_fail') : undefined
                });
                resolve();
            };
            const onFailed = (error)=>{
                setSwapState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            };
            (version === 1 ? ITO_Contract.methods.swap(...swapParamsV1) : ITO_Contract.methods.swap(...swapParamsV2)).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, onSucceed).on(types/* TransactionEventType.ERROR */.iE.ERROR, onFailed);
        });
    }, [
        ITO_Contract,
        chainId,
        qualificationContract,
        account,
        payload,
        total,
        token.address,
        isQualificationHasLucky
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setSwapState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        swapState,
        swapCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(66792);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(26340);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC165.ts


const ERC165_INTERFACE_ID = '0x01ffc9a7';
function useERC165(contract, address, interfaceId) {
    const account = (0,useAccount/* useAccount */.m)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!contract) return false;
        try {
            const isERC165 = await contract.methods.supportsInterface(ERC165_INTERFACE_ID).call({
                from: account
            });
            const isVerify = await contract.methods.supportsInterface(interfaceId).call({
                from: account
            });
            return isERC165 && isVerify;
        } catch  {
            return false;
        }
    }, [
        account,
        address,
        interfaceId
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useQualificationVerify.ts




function useQualificationVerify(address, ito_address) {
    const account = (0,useAccount/* useAccount */.m)();
    const { contract: qualificationContract , version  } = useQualificationContract(address, ito_address);
    const { value: isQualificationHasLucky , loading: loadingQualificationHasLucky  } = useERC165(qualificationContract, address, ITO_constants/* QUALIFICATION_HAS_LUCKY_INTERFACE_ID */.tu);
    const { value: isQualification , loading: loadingQualification  } = useERC165(qualificationContract, address, version === 1 ? ITO_constants/* QUALIFICATION_INTERFACE_ID */.bJ : ITO_constants/* QUALIFICATION2_INTERFACE_ID */.tZ);
    const { value: qualificationHasStartTime , loading: loadingQualificationHasStartTime  } = useERC165(qualificationContract, address, ITO_constants/* QUALIFICATION_HAS_START_TIME_INTERFACE_ID */.Zl);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        let startTime;
        if (qualificationHasStartTime) {
            startTime = await qualificationContract.methods.get_start_time().call({
                from: account
            });
        }
        return {
            loadingERC165: loadingQualification || loadingQualificationHasStartTime || loadingQualificationHasLucky,
            isQualification,
            startTime,
            isQualificationHasLucky
        };
    }, [
        address,
        isQualification,
        qualificationHasStartTime,
        isQualificationHasLucky,
        loadingQualification,
        loadingQualificationHasStartTime,
        loadingQualificationHasLucky,
        qualificationContract, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/SwapDialog.tsx


















const SwapDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        },
        providerBar: {},
        swapLimitWrap: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: theme.spacing(2)
        },
        swapLimitText: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#15181B',
            fontSize: 14,
            width: 'fit-content'
        },
        swapLimitSlider: {
            flexGrow: 1,
            width: 'auto !important',
            margin: theme.spacing(0, 3),
            '& .MuiSlider-thumb': {
                width: 28,
                height: 28,
                background: theme.palette.mode === 'dark' ? '#fff' : '2CA4EF, 100%'
            },
            '& .MuiSlider-rail': {
                height: 5
            },
            '& .MuiSlider-track': {
                height: 5
            }
        },
        exchangeText: {
            textAlign: 'right',
            fontSize: 10,
            margin: theme.spacing(1, 0, 3)
        },
        exchangeAmountText: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#15181B'
        },
        swapButtonWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: theme.spacing(2)
        },
        remindText: {
            fontSize: 10,
            marginTop: theme.spacing(1)
        },
        loading: {
            color: theme.palette.text.primary
        }
    })
);
function SwapDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { payload , initAmount , tokenAmount: tokenAmount1 , maxSwapAmount , setTokenAmount , setActualSwapAmount , setStatus , account , token , exchangeTokens ,  } = props;
    const chainId = (0,useChainId/* useChainId */.xx)();
    const classes = (0,theme_src/* useStylesExtends */.Bc)(SwapDialog_useStyles(), props);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const [ratio1, setRatio] = (0,react.useState)(new (bignumber_default())(payload.exchange_amounts[0 * 2]).dividedBy(payload.exchange_amounts[0 * 2 + 1]));
    const { value: initToken  } = (0,useFungibleTokenDetailed/* useFungibleTokenDetailed */.j)((0,utils_address/* isSameAddress */.Wr)(NATIVE_TOKEN_ADDRESS, payload.exchange_tokens[0].address) ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20, payload.exchange_tokens[0].address);
    const [swapToken, setSwapToken] = (0,react.useState)(undefined);
    (0,react.useEffect)(()=>{
        setSwapToken(initToken);
    }, [
        JSON.stringify(initToken)
    ]);
    const [swapAmount1, setSwapAmount] = (0,react.useState)(tokenAmount1.multipliedBy(ratio1));
    const [inputAmountForUI, setInputAmountForUI] = (0,react.useState)(swapAmount1.isZero() ? '' : (0,formatter/* formatBalance */.az)(swapAmount1, swapToken === null || swapToken === void 0 ? void 0 : swapToken.decimals));
    // #region select token
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const { setDialog: setSelectTokenDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        const at = exchangeTokens.findIndex((0,utils_address/* currySameAddress */.DC)(ev.token.address));
        const ratio = new (bignumber_default())(payload.exchange_amounts[at * 2]).dividedBy(payload.exchange_amounts[at * 2 + 1]);
        setRatio(ratio);
        setSwapToken(ev.token);
        setTokenAmount(initAmount);
        setSwapAmount(initAmount.multipliedBy(ratio));
        setInputAmountForUI(initAmount.isZero() ? '' : (0,formatter/* formatBalance */.az)(initAmount.multipliedBy(ratio), ev.token.decimals));
    }, [
        id,
        payload,
        initAmount,
        exchangeTokens.map((x)=>x.address
        ).sort().join(), 
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken: !exchangeTokens.some(utils_address/* isNativeTokenAddress */.qw),
            disableSearchBar: true,
            FungibleTokenListProps: {
                whitelist: exchangeTokens.map((x)=>x.address
                )
            }
        });
    }, [
        exchangeTokens.map((x)=>x.address
        ).sort().join(), 
    ]);
    // #endregion
    // #region balance
    const { value: tokenBalance = '0'  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(swapToken ? swapToken.type : types/* EthereumTokenType.Native */.Dr.Native, swapToken ? swapToken.address : NATIVE_TOKEN_ADDRESS);
    // #endregion
    // #region maxAmount for TokenAmountPanel
    const maxAmount = (0,react.useMemo)(()=>bignumber_default().min(maxSwapAmount.multipliedBy(ratio1).dp(0), tokenBalance).toFixed()
    , [
        maxSwapAmount,
        ratio1,
        tokenBalance
    ]);
    // #endregion
    // #region swap
    const { value: qualificationInfo , loading: loadingQualification  } = useQualificationVerify(payload.qualification_address, payload.contract_address);
    const [swapState, swapCallback, resetSwapCallback] = useSwapCallback(payload, swapAmount1.toFixed(), swapToken ? swapToken : {
        address: NATIVE_TOKEN_ADDRESS
    }, qualificationInfo === null || qualificationInfo === void 0 ? void 0 : qualificationInfo.isQualificationHasLucky);
    const onSwap = (0,react.useCallback)(async ()=>{
        await swapCallback();
        if (payload.token.type !== types/* EthereumTokenType.ERC20 */.Dr.ERC20) return;
        await Wallet_messages/* WalletRPC.addToken */.V.addToken(payload.token);
        await Wallet_messages/* WalletRPC.updateWalletToken */.V.updateWalletToken(account, payload.token, {
            strategy: 'trust'
        });
    }, [
        swapCallback,
        payload.token.address
    ]);
    const { setDialog: setTransactionDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        var ref;
        if (ev.open) return;
        if (swapState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && !swapState.receipt.status) resetSwapCallback();
        if (swapState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && swapState.type !== types/* TransactionStateType.RECEIPT */.n$.RECEIPT) return;
        const { receipt  } = swapState;
        var _returnValues;
        const { to_value  } = (_returnValues = (ref = receipt.events) === null || ref === void 0 ? void 0 : ref.SwapSuccess.returnValues) !== null && _returnValues !== void 0 ? _returnValues : {};
        setActualSwapAmount(to_value);
        setStatus(SwapStatus.Share);
        resetSwapCallback();
    });
    (0,react.useEffect)(()=>{
        if (swapState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        if (swapState.type === types/* TransactionStateType.HASH */.n$.HASH) {
            const { hash  } = swapState;
            setTimeout(()=>{
                window.open((0,pipes/* resolveTransactionLinkOnExplorer */.z4)(chainId, hash), '_blank', 'noopener noreferrer');
            }, 2000);
            return;
        }
        setTransactionDialog({
            open: true,
            state: swapState,
            summary: t('plugin_ito_swapping', {
                amount: (0,formatter/* formatBalance */.az)(tokenAmount1, token.decimals),
                symbol: token.symbol
            })
        });
    }, [
        swapState
    ]);
    // #endregion
    const validationMessage = (0,react.useMemo)(()=>{
        if (swapAmount1.isZero() || tokenAmount1.isZero() || swapAmount1.dividedBy(ratio1).isLessThan(1)) return t('plugin_ito_error_enter_amount');
        if (swapAmount1.isGreaterThan(tokenBalance)) return t('plugin_ito_error_balance', {
            symbol: swapToken === null || swapToken === void 0 ? void 0 : swapToken.symbol
        });
        if (tokenAmount1.isGreaterThan(maxSwapAmount)) return t('plugin_ito_dialog_swap_exceed_wallet_limit');
        return '';
    }, [
        swapAmount1,
        tokenBalance,
        maxSwapAmount,
        swapToken,
        ratio1
    ]);
    return swapToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.swapLimitWrap,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.swapLimitText,
                        children: [
                            "0 ",
                            token.symbol
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
                        className: classes.swapLimitSlider,
                        value: Number(tokenAmount1.dividedBy(maxSwapAmount).multipliedBy(100)),
                        onChange: (_, newValue)=>{
                            const tokenAmount = maxSwapAmount.multipliedBy(newValue / 100);
                            const swapAmount = tokenAmount.multipliedBy(ratio1).dp(0);
                            setTokenAmount(tokenAmount.dp(0));
                            setSwapAmount(swapAmount);
                            setInputAmountForUI((0,formatter/* formatBalance */.az)(swapAmount, swapToken.decimals));
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.swapLimitText,
                        children: [
                            (0,formatter/* formatBalance */.az)(maxSwapAmount, token.decimals),
                            " ",
                            token.symbol
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.exchangeText,
                variant: "body1",
                color: "textSecondary",
                children: [
                    t('plugin_ito_dialog_swap_exchange'),
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: classes.exchangeAmountText,
                        children: (0,formatter/* formatBalance */.az)(tokenAmount1, token.decimals)
                    }),
                    ' ',
                    token.symbol,
                    "."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                amount: inputAmountForUI,
                maxAmount: maxAmount,
                balance: tokenBalance,
                token: swapToken,
                onAmountChange: (value)=>{
                    const val = value === '' || value === '0' ? base_src/* ZERO */.xE : (0,base_src/* rightShift */.pu)(value, swapToken.decimals);
                    const isMax = value === (0,formatter/* formatBalance */.az)(maxAmount, swapToken.decimals) && !val.isZero();
                    const tokenAmount = isMax ? maxSwapAmount : val.dividedBy(ratio1);
                    const swapAmount = isMax ? tokenAmount.multipliedBy(ratio1) : val.dp(0);
                    setInputAmountForUI(isMax ? (0,base_src/* leftShift */.w5)(tokenAmount.multipliedBy(ratio1), swapToken.decimals).toString() : value);
                    setTokenAmount(tokenAmount.dp(0));
                    setSwapAmount(swapAmount);
                },
                label: t('plugin_ito_dialog_swap_panel_title'),
                SelectTokenChip: {
                    ChipProps: {
                        onClick: onSelectTokenChipClick
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.remindText,
                variant: "body1",
                color: "textSecondary",
                children: t('plugin_ito_swap_only_once_remind')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.swapButtonWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                        amount: swapAmount1.toFixed(),
                        spender: payload.contract_address,
                        token: swapToken.type === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? swapToken : undefined,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            disabled: !!validationMessage || loadingQualification,
                            onClick: onSwap,
                            children: loadingQualification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                size: 16,
                                className: classes.loading
                            }) : validationMessage || t('plugin_ito_swap')
                        })
                    })
                })
            })
        ]
    }) : null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.5_07b14a436152a0046ed0bd90fadfd5f7/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(76529);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/UnlockDialog.tsx















function isMoreThanMillion(allowance, decimals) {
    return (0,base_src/* isGreaterThan */.T1)(allowance, `100000000000e${decimals}`) // 100 billion
    ;
}
const UnlockDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {},
        tip: {
            margin: theme.spacing(1.5, 0, 1),
            fontSize: 10
        },
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function UnlockDialog(props) {
    const { tokens  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = UnlockDialog_useStyles();
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    // #region select token
    const [token, setToken] = (0,react.useState)(tokens[0]);
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const { setDialog: setSelectTokenDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        if (ev.token.type !== types/* EthereumTokenType.ERC20 */.Dr.ERC20) return;
        setToken(ev.token);
    }, [
        id
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken: true,
            disableSearchBar: true,
            FungibleTokenListProps: {
                selectedTokens: token ? [
                    token.address
                ] : [],
                whitelist: tokens.map((x)=>x.address
                )
            }
        });
    }, [
        id,
        token === null || token === void 0 ? void 0 : token.address
    ]);
    // #endregion
    // #region amount
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    const amount = (0,base_src/* rightShift */.pu)(rawAmount || '0', token === null || token === void 0 ? void 0 : token.decimals);
    var ref, ref1;
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)((ref = token === null || token === void 0 ? void 0 : token.type) !== null && ref !== void 0 ? ref : types/* EthereumTokenType.Native */.Dr.Native, (ref1 = token === null || token === void 0 ? void 0 : token.address) !== null && ref1 !== void 0 ? ref1 : '');
    // #endregion
    if (!tokens.length) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: t('plugin_ito_empty_token')
    }));
    var _symbol, _symbol1, _symbol2;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                label: "Amount",
                amount: rawAmount,
                balance: tokenBalance !== null && tokenBalance !== void 0 ? tokenBalance : '0',
                token: token,
                onAmountChange: setRawAmount,
                SelectTokenChip: {
                    loading: loadingTokenBalance,
                    ChipProps: {
                        onClick: onSelectTokenChipClick
                    }
                }
            }),
            ITO2_CONTRACT_ADDRESS ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tip,
                variant: "body2",
                color: "textSecondary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                    i18nKey: "plugin_ito_unlock_tip",
                    components: {
                        contractLink: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, ITO2_CONTRACT_ADDRESS)
                        })
                    },
                    values: {
                        address: (0,formatter/* formatEthereumAddress */.j8)(ITO2_CONTRACT_ADDRESS, 4),
                        symbol: (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : 'Unknown'
                    }
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                    amount: amount.toFixed(),
                    spender: ITO2_CONTRACT_ADDRESS,
                    token: token,
                    children: (allowance)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            size: "large",
                            fullWidth: true,
                            disabled: true,
                            variant: "contained",
                            children: isMoreThanMillion(allowance, token.decimals) ? t('plugin_ito_amount_unlocked_infinity', {
                                symbol: (_symbol1 = token.symbol) !== null && _symbol1 !== void 0 ? _symbol1 : 'Token'
                            }) : t('plugin_ito_amount_unlocked', {
                                amount: (0,formatter/* formatBalance */.az)(allowance, token.decimals, 2),
                                symbol: (_symbol2 = token.symbol) !== null && _symbol2 !== void 0 ? _symbol2 : 'Token'
                            })
                        })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/SwapGuide.tsx













var SwapStatus;
(function(SwapStatus) {
    SwapStatus[SwapStatus["Remind"] = 0] = "Remind";
    SwapStatus[SwapStatus["Swap"] = 1] = "Swap";
    SwapStatus[SwapStatus["Share"] = 2] = "Share";
    SwapStatus[SwapStatus["Unlock"] = 3] = "Unlock";
})(SwapStatus || (SwapStatus = {}));
const SwapGuide_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        content: {
            display: 'flex',
            flexDirection: 'column'
        },
        paper: {
            maxWidth: 544,
            backgroundImage: 'none'
        }
    })
);
function SwapGuide(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { status , payload , exchangeTokens , isBuyer , open , retryPayload , shareSuccessLink , total_remaining , onUpdate , onClose ,  } = props;
    const [isPending, startTransition] = (0,react.useTransition)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const onCloseShareDialog = (0,react.useCallback)(()=>{
        startTransition(()=>{
            onClose();
            retryPayload();
        });
    }, [
        retryPayload,
        startTransition,
        onClose
    ]);
    const { classes  } = SwapGuide_useStyles();
    const maxSwapAmount = (0,react.useMemo)(()=>bignumber_default().min(payload.limit, total_remaining)
    , [
        payload.limit,
        total_remaining
    ]);
    const initAmount = base_src/* ZERO */.xE;
    const [tokenAmount, setTokenAmount] = (0,react.useState)(initAmount);
    const [actualSwapAmount, setActualSwapAmount] = (0,react.useState)(0);
    const chainId = (0,useChainId/* useChainId */.xx)();
    const account = (0,useAccount/* useAccount */.m)();
    const SwapTitle = {
        [SwapStatus.Remind]: t('plugin_ito_dialog_swap_reminder_title'),
        [SwapStatus.Unlock]: t('plugin_ito_dialog_swap_unlock_title'),
        [SwapStatus.Swap]: t('plugin_ito_dialog_swap_title', {
            token: payload.token.symbol
        }),
        [SwapStatus.Share]: t('plugin_ito_dialog_swap_share_title')
    };
    const closeDialog = (0,react.useCallback)(()=>{
        setTokenAmount(initAmount);
        return status === SwapStatus.Share ? onCloseShareDialog() : onClose();
    }, [
        status,
        initAmount,
        onCloseShareDialog,
        onClose,
        setTokenAmount
    ]);
    (0,react.useEffect)(()=>{
        onUpdate(isBuyer ? SwapStatus.Share : SwapStatus.Remind);
    }, [
        account,
        isBuyer,
        chainId,
        payload.chain_id
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        classes: {
            paper: classes.paper,
            dialogContent: classes.paper
        },
        open: open,
        title: SwapTitle[status],
        onClose: closeDialog,
        maxWidth: SwapStatus.Swap || status === SwapStatus.Unlock ? 'xs' : 'sm',
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            classes: {
                root: classes.content
            },
            children: (()=>{
                switch(status){
                    case SwapStatus.Remind:
                        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RemindDialog, {
                            token: payload.token,
                            chainId: chainId,
                            setStatus: onUpdate
                        }));
                    case SwapStatus.Unlock:
                        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UnlockDialog, {
                            tokens: payload.exchange_tokens.filter((x)=>!(0,utils_address/* isSameAddress */.Wr)(NATIVE_TOKEN_ADDRESS, x.address)
                            )
                        }));
                    case SwapStatus.Swap:
                        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SwapDialog, {
                            account: account,
                            initAmount: initAmount,
                            tokenAmount: tokenAmount,
                            maxSwapAmount: maxSwapAmount,
                            setTokenAmount: setTokenAmount,
                            setActualSwapAmount: setActualSwapAmount,
                            payload: payload,
                            token: payload.token,
                            exchangeTokens: exchangeTokens,
                            setStatus: onUpdate,
                            chainId: chainId
                        }));
                    case SwapStatus.Share:
                        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ShareDialog, {
                            shareSuccessLink: shareSuccessLink,
                            poolName: payload.message,
                            token: payload.token,
                            actualSwapAmount: actualSwapAmount,
                            onClose: onCloseShareDialog
                        }));
                    default:
                        return null;
                }
            })()
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/startCase.js
var startCase = __webpack_require__(2189);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(40543);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(74926);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ITO.tsx































const ITO_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, props)=>({
        root: {
            position: 'relative',
            color: theme.palette.common.white,
            flexDirection: 'column',
            height: props.tokenNumber > 4 ? 425 : 405,
            minHeight: 405,
            boxSizing: 'border-box',
            backgroundAttachment: 'local',
            backgroundPosition: '-40px 0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#FF5238',
            borderRadius: theme.spacing(1),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(1),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(2)
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            width: props.snsId === base/* FACEBOOK_ID */.Iz ? '98%' : '100%',
            maxWidth: props.snsId === base/* FACEBOOK_ID */.Iz ? 'auto' : 470
        },
        title: {
            fontSize: props.titleLength > 31 ? '1.3rem' : '1.6rem',
            fontWeight: 'bold',
            marginBottom: 4,
            marginRight: 4,
            width: '80%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        status: {
            background: theme.palette.mode === 'light' ? 'rgba(20, 23, 26, 0.6)' : 'rgba(239, 243, 244, 0.6)',
            padding: '5px 16px',
            whiteSpace: 'nowrap',
            borderRadius: 10
        },
        totalText: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 12
        },
        tokenLink: {
            display: 'flex',
            alignItems: 'self-start',
            color: '#fff'
        },
        tokenIcon: {
            width: 24,
            height: 24
        },
        totalIcon: {
            marginLeft: theme.spacing(0.5),
            width: 16,
            height: 16,
            cursor: 'pointer'
        },
        progressWrap: {
            width: 220,
            marginBottom: theme.spacing(3),
            marginTop: theme.spacing(1)
        },
        footer: {
            position: 'absolute',
            width: '90%',
            maxWidth: props.snsId === base/* FACEBOOK_ID */.Iz ? 'auto' : 470,
            bottom: theme.spacing(2),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'self-end'
        },
        footerInfo: {
            fontSize: 12
        },
        fromText: {
            opacity: 0.6,
            fontSize: 14
        },
        rationWrap: {
            marginBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            '& > span': {
                marginLeft: theme.spacing(1),
                fontSize: 12,
                '& > strong': {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            }
        },
        actionFooter: {
            marginTop: theme.spacing(1)
        },
        actionButton: {
            width: '100%'
        },
        textProviderErr: {
            color: '#EB5757',
            marginTop: theme.spacing(1)
        },
        loadingITO: {
            marginTop: 260,
            textAlign: 'center',
            fontSize: 24
        },
        loadingITO_Button: {
            color: '#fff',
            borderColor: '#fff !important',
            margin: theme.spacing(1, 'auto'),
            minHeight: 35,
            '&:hover': {
                background: 'none'
            }
        },
        loadingWrap: {
            display: 'flex',
            justifyContent: 'center'
        },
        textInOneLine: {
            whiteSpace: 'nowrap'
        },
        claimDate: {
            marginTop: 16,
            color: '#F4212E'
        }
    })
);
const TokenItem = ({ price , token , exchangeToken  })=>{
    var ref;
    const { classes  } = ITO_useStyles({});
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                classes: {
                    icon: classes.tokenIcon
                },
                address: exchangeToken.address,
                logoURI: exchangeToken.logoURI
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                component: "span",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        children: price
                    }),
                    ' ',
                    (0,utils_address/* isSameAddress */.Wr)(exchangeToken.address, NATIVE_TOKEN_ADDRESS) ? (ref = (0,chainDetailed/* getChainDetailed */.$G)(exchangeToken.chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.symbol : exchangeToken.symbol,
                    ' ',
                    "/ ",
                    token.symbol
                ]
            })
        ]
    }));
};
function ITO(props) {
    var _utils, ref9, _utils1, ref1, ref2, ref3;
    // context
    const account = (0,useAccount/* useAccount */.m)();
    const postLink = (0,usePostInfo/* usePostLink */.Vc)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const [destructState, destructCallback, resetDestructCallback] = useDestructCallback(props.payload.contract_address);
    const [openClaimDialog, setOpenClaimDialog] = (0,react.useState)(false);
    const [claimDialogStatus, setClaimDialogStatus] = (0,react.useState)(SwapStatus.Remind);
    // assets
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(45554), __webpack_require__.b));
    const { pid , payload  } = props;
    const { regions: defaultRegions = '-'  } = props.payload;
    const { token: token1 , total: payload_total , exchange_amounts , exchange_tokens , limit , message  } = payload;
    const { t  } = (0,utils/* useI18N */.M1)();
    const sellerName = message.split(ITO_constants/* MSG_DELIMITER */.Z3)[0] === message ? (0,formatter/* formatEthereumAddress */.j8)(payload.seller.address, 4) : message.split(ITO_constants/* MSG_DELIMITER */.Z3)[0];
    var ref4;
    const title = (ref4 = message.split(ITO_constants/* MSG_DELIMITER */.Z3)[1]) !== null && ref4 !== void 0 ? ref4 : message;
    var ref5;
    const regions = (ref5 = message.split(ITO_constants/* MSG_DELIMITER */.Z3)[2]) !== null && ref5 !== void 0 ? ref5 : defaultRegions;
    const { classes  } = ITO_useStyles({
        titleLength: (0,utils/* getTextUILength */.c_)(title),
        tokenNumber: exchange_tokens.length,
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    });
    // #region token detailed
    const { value: availability , computed: availabilityComputed , loading: loadingAvailability , error: errorAvailability , retry: retryAvailability ,  } = useAvailabilityComputed(payload);
    const { listOfStatus , startTime , unlockTime , isUnlocked , hasLockTime , endTime , qualificationAddress  } = availabilityComputed;
    // #endregion
    const total = new bignumber.BigNumber(payload_total);
    var ref6;
    const total_remaining = new bignumber.BigNumber((ref6 = availability === null || availability === void 0 ? void 0 : availability.remaining) !== null && ref6 !== void 0 ? ref6 : '0');
    const sold = total.minus(total_remaining);
    const { value: currentRegion , loading: loadingRegion  } = useIPRegion();
    const allowRegions = decodeRegionCode(regions);
    const isRegionRestrict = checkRegionRestrict(allowRegions);
    const isRegionAllow = !isRegionRestrict || !currentRegion || !loadingRegion && allowRegions.includes(currentRegion.code);
    const { value: ifQualified = false , loading: loadingIfQualified , retry: retryIfQualified ,  } = useIfQualified(qualificationAddress, payload.contract_address);
    // #endregion
    const isAccountSeller = (0,utils_address/* isSameAddress */.Wr)(payload.seller.address, account) && chainId === payload.chain_id;
    const noRemain = total_remaining.isZero();
    // #region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    // #region buy info
    const { value: tradeInfo , loading: loadingTradeInfo , retry: retryPoolTradeInfo  } = usePoolTradeInfo(pid, account);
    var ref7;
    const isBuyer = chainId === payload.chain_id && ((0,base_src/* isGreaterThan */.T1)((ref7 = availability === null || availability === void 0 ? void 0 : availability.swapped) !== null && ref7 !== void 0 ? ref7 : 0, 0) || Boolean(availability === null || availability === void 0 ? void 0 : availability.claimed));
    const shareSuccessLink = (ref9 = (_utils = social_network/* activatedSocialNetworkUI.utils */.LM.utils).getShareLinkURL) === null || ref9 === void 0 ? void 0 : ref9.call(_utils, t((0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_ito_claim_success_share' : 'plugin_ito_claim_success_share_no_official_account', {
        user: sellerName,
        link: postLink,
        symbol: token1.symbol,
        account: (0,base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? t('facebook_account') : t('twitter_account')
    })).toString();
    const canWithdraw = (0,react.useMemo)(()=>{
        return !(availability === null || availability === void 0 ? void 0 : availability.destructed) && isAccountSeller && !(availability === null || availability === void 0 ? void 0 : availability.exchanged_tokens.every(base_src/* isZero */.Fr)) && (listOfStatus.includes(ITO_Status.expired) || noRemain);
    }, [
        tradeInfo,
        listOfStatus,
        isAccountSeller,
        noRemain,
        loadingTradeInfo
    ]);
    const refundAmount = (0,react.useMemo)(()=>{
        const buyInfo = tradeInfo === null || tradeInfo === void 0 ? void 0 : tradeInfo.buyInfo;
        if (!buyInfo) return base_src/* ZERO */.xE;
        return new bignumber.BigNumber(buyInfo.amount).minus(buyInfo.amount_sold);
    }, [
        tradeInfo
    ]);
    // out of stock
    const refundAllAmount = (tradeInfo === null || tradeInfo === void 0 ? void 0 : tradeInfo.buyInfo) && (0,base_src/* isZero */.Fr)(tradeInfo === null || tradeInfo === void 0 ? void 0 : tradeInfo.buyInfo.amount_sold);
    const onShareSuccess = (0,react.useCallback)(async ()=>{
        window.open(shareSuccessLink, '_blank', 'noopener noreferrer');
    }, [
        shareSuccessLink
    ]);
    // #endregion
    const retryITOCard = (0,react.useCallback)(()=>{
        retryPoolTradeInfo();
        retryAvailability();
    }, [
        retryPoolTradeInfo,
        retryAvailability
    ]);
    // #region claim
    const [claimState, claimCallback, resetClaimCallback] = (0,useClaimCallback/* useClaimCallback */.N)([
        pid
    ], payload.contract_address);
    const onClaimButtonClick = (0,react.useCallback)(()=>{
        claimCallback();
    }, [
        claimCallback
    ]);
    const { setDialog: setClaimTransactionDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (claimState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED || claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && claimState.no !== 0) return;
        window.location.reload();
    });
    (0,react.useEffect)(()=>{
        if (claimState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN || claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && claimState.no !== 0) return;
        var ref, ref8;
        setClaimTransactionDialog({
            open: true,
            state: claimState,
            summary: `Claiming ${(0,formatter/* formatBalance */.az)((ref = availability === null || availability === void 0 ? void 0 : availability.swapped) !== null && ref !== void 0 ? ref : 0, token1.decimals)} ${(ref8 = token1 === null || token1 === void 0 ? void 0 : token1.symbol) !== null && ref8 !== void 0 ? ref8 : 'Token'}.`
        });
    }, [
        claimState /* update tx dialog only if state changed */ 
    ]);
    var _symbol;
    // #endregion
    const shareLink = (ref1 = (_utils1 = social_network/* activatedSocialNetworkUI.utils */.LM.utils).getShareLinkURL) === null || ref1 === void 0 ? void 0 : ref1.call(_utils1, t((0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_ito_claim_foreshow_share' : 'plugin_ito_claim_foreshow_share_no_official_account', {
        link: postLink,
        name: token1.name,
        symbol: (_symbol = token1.symbol) !== null && _symbol !== void 0 ? _symbol : 'token',
        account: (0,base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? t('facebook_account') : t('twitter_account')
    })).toString();
    const onShare = (0,react.useCallback)(async ()=>{
        window.open(shareLink, '_blank', 'noopener noreferrer');
    }, [
        shareLink
    ]);
    const onUnlock = (0,react.useCallback)(async ()=>{
        setClaimDialogStatus(SwapStatus.Unlock);
        setOpenClaimDialog(true);
    }, []);
    const onClaim = (0,react.useCallback)(async ()=>{
        setClaimDialogStatus(SwapStatus.Remind);
        setOpenClaimDialog(true);
    }, []);
    // #region withdraw
    const { setDialog: setTransactionDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (destructState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
        window.location.reload();
    });
    (0,react.useEffect)(()=>{
        const timeToExpired = endTime - Date.now();
        // https://stackoverflow.com/q/3468607
        // SetTimeout using a 32 bit int to store the delay so the max value allowed would be 2147483647.
        // Meanwhile, no need to refresh ITO card when expired time is a large value (more than one day).
        if (timeToExpired < 0 || listOfStatus.includes(ITO_Status.expired) || timeToExpired > 1000 * 60 * 60 * 24) return;
        const timer = setTimeout(()=>{
            setOpenClaimDialog(false);
            retryITOCard();
        }, timeToExpired + ITO_constants/* TIME_WAIT_BLOCKCHAIN */.$9);
        return ()=>clearTimeout(timer)
        ;
    }, [
        endTime,
        listOfStatus
    ]);
    (0,react.useEffect)(()=>{
        if (destructState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN || !canWithdraw) return;
        let summary = t('plugin_ito_withdraw');
        if (!noRemain) {
            summary += ' ' + (0,formatter/* formatBalance */.az)(total_remaining, token1.decimals) + ' ' + token1.symbol;
        }
        availability === null || availability === void 0 ? void 0 : availability.exchange_addrs.forEach((addr, i)=>{
            const token = exchange_tokens.find((0,utils_address/* currySameAddress */.DC)(addr));
            const comma = noRemain && i === 0 ? ' ' : ', ';
            if (token) {
                summary += comma + (0,formatter/* formatBalance */.az)(availability === null || availability === void 0 ? void 0 : availability.exchanged_tokens[i], token.decimals) + ' ' + token.symbol;
            }
        });
        setTransactionDialog({
            open: true,
            state: destructState,
            summary
        });
    }, [
        destructState,
        canWithdraw
    ]);
    const onWithdraw = (0,react.useCallback)(async ()=>{
        destructCallback(payload.pid);
    }, [
        destructCallback,
        payload.pid
    ]);
    // #endregion
    const swapStatusText = (0,react.useMemo)(()=>{
        if (listOfStatus.includes(ITO_Status.waited)) return t('plugin_ito_status_no_start');
        if (listOfStatus.includes(ITO_Status.expired)) return t('plugin_ito_expired');
        if (listOfStatus.includes(ITO_Status.started)) {
            if (total_remaining.isZero()) return t('plugin_ito_status_out_of_stock');
            return t('plugin_ito_status_ongoing');
        }
        return '';
    }, [
        listOfStatus,
        total_remaining
    ]);
    const swapResultText = (0,react.useMemo)(()=>{
        var ref, ref10, ref11;
        if (refundAllAmount) {
            return t('plugin_ito_out_of_stock_hit');
        }
        const _text = new bignumber.BigNumber((availability === null || availability === void 0 ? void 0 : availability.swapped) || 0).isGreaterThan(0) ? t('plugin_ito_your_swapped_amount', {
            amount: (0,formatter/* formatBalance */.az)((availability === null || availability === void 0 ? void 0 : availability.swapped) || 0, token1.decimals),
            symbol: token1.symbol
        }) : t('plugin_ito_your_claimed_amount', {
            amount: (0,formatter/* formatBalance */.az)((tradeInfo === null || tradeInfo === void 0 ? void 0 : (ref = tradeInfo.buyInfo) === null || ref === void 0 ? void 0 : ref.amount_bought) || 0, token1.decimals),
            symbol: token1.symbol
        });
        if (refundAmount.isZero() || refundAmount.isLessThan(0)) {
            return `${_text}.`;
        }
        var _decimals;
        return `${_text}, ${t('plugin_ito_your_refund_amount', {
            amount: (0,formatter/* formatBalance */.az)(refundAmount, (_decimals = tradeInfo === null || tradeInfo === void 0 ? void 0 : (ref10 = tradeInfo.buyInfo) === null || ref10 === void 0 ? void 0 : ref10.token.decimals) !== null && _decimals !== void 0 ? _decimals : 0),
            symbol: tradeInfo === null || tradeInfo === void 0 ? void 0 : (ref11 = tradeInfo.buyInfo) === null || ref11 === void 0 ? void 0 : ref11.token.symbol
        })}`;
    }, [
        availability === null || availability === void 0 ? void 0 : availability.swapped,
        refundAllAmount,
        refundAmount,
        token1.decimals,
        token1.symbol,
        tradeInfo === null || tradeInfo === void 0 ? void 0 : (ref2 = tradeInfo.buyInfo) === null || ref2 === void 0 ? void 0 : ref2.token.decimals,
        tradeInfo === null || tradeInfo === void 0 ? void 0 : (ref3 = tradeInfo.buyInfo) === null || ref3 === void 0 ? void 0 : ref3.token.symbol, 
    ]);
    const footerStartTime = (0,react.useMemo)(()=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            className: classes.footerInfo,
            children: t('plugin_ito_list_start_date', {
                date: (0,format/* default */.Z)(startTime, 'yyyy-MM-dd HH:mm')
            })
        }));
    }, [
        startTime
    ]);
    const footerEndTime = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            className: classes.footerInfo,
            children: t('plugin_ito_swap_end_date', {
                date: (0,format/* default */.Z)(endTime, 'yyyy-MM-dd HH:mm')
            })
        })
    , [
        endTime,
        t
    ]);
    const footerSwapInfo = (0,react.useMemo)(()=>{
        /*#__PURE__*/ return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.footerInfo,
                    children: swapResultText
                }),
                footerEndTime,
                hasLockTime && !isUnlocked && unlockTime > Date.now() && new bignumber.BigNumber((availability === null || availability === void 0 ? void 0 : availability.swapped) || 0).isGreaterThan(0) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.footerInfo,
                    children: t('plugin_ito_wait_unlock_time', {
                        unlockTime: (0,format/* default */.Z)(unlockTime, 'yyyy-MM-dd HH:mm')
                    })
                }) : null
            ]
        });
    }, [
        footerEndTime,
        swapResultText
    ]);
    const footerNormal = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.footerInfo,
                    children: t('plugin_ito_allocation_per_wallet', {
                        limit: (0,formatter/* formatBalance */.az)(limit, token1.decimals),
                        token: token1.symbol
                    })
                }),
                listOfStatus.includes(ITO_Status.waited) ? footerStartTime : listOfStatus.includes(ITO_Status.started) ? footerEndTime : null
            ]
        })
    , [
        footerEndTime,
        footerStartTime,
        limit,
        listOfStatus,
        token1.decimals,
        token1.symbol
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                elevation: 0,
                style: {
                    backgroundImage: `url(${PoolBackground})`
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h5",
                                className: classes.title,
                                children: title
                            }),
                            swapStatusText ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                className: classes.status,
                                children: swapStatusText
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.totalText,
                        children: [
                            t('plugin_ito_swapped_status', {
                                remain: (0,formatter/* formatBalance */.az)(sold, token1.decimals),
                                total: (0,formatter/* formatBalance */.az)(total, token1.decimals),
                                token: token1.symbol
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.tokenLink,
                                href: dist_default()((0,pipes/* resolveLinkOnExplorer */.CS)(token1.chainId), '/token/:address', {
                                    address: token1.address
                                }),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                    fontSize: "small",
                                    className: classes.totalIcon
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.progressWrap,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledLinearProgress/* StyledLinearProgress */.B, {
                            variant: "determinate",
                            value: Number(sold.multipliedBy(100).dividedBy(total))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: exchange_tokens.slice(0, ITO_constants/* ITO_EXCHANGE_RATION_MAX */.No).sort(helpers/* sortTokens */.xT).map((exchangeToken, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.rationWrap,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenItem, {
                                    price: (0,formatter/* formatBalance */.az)(new bignumber.BigNumber(exchange_amounts[i * 2]).dividedBy(exchange_amounts[i * 2 + 1]).shiftedBy(token1.decimals - exchangeToken.decimals).shiftedBy(exchangeToken.decimals).integerValue(), exchangeToken.decimals),
                                    token: token1,
                                    exchangeToken: exchangeToken
                                })
                            }, i)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.footer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.footerInfo,
                                children: isBuyer ? footerSwapInfo : listOfStatus.includes(ITO_Status.expired) ? footerEndTime : footerNormal
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body1",
                                className: classes.fromText,
                                children: [
                                    "From: @",
                                    sellerName
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.actionFooter,
                children: loadingRegion && isRegionRestrict ? null : !isRegionAllow ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    disabled: true,
                    onClick: ()=>undefined
                    ,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_ito_region_ban')
                }) : (noRemain || listOfStatus.includes(ITO_Status.expired)) && !canWithdraw && ((availability === null || availability === void 0 ? void 0 : availability.claimed) && hasLockTime || !hasLockTime) ? null : loadingTradeInfo || loadingAvailability ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    disabled: true,
                    onClick: ()=>undefined
                    ,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_ito_loading')
                }) : !account || !chainIdValid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: openSelectProviderDialog,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_wallet_connect_a_wallet')
                }) : isBuyer ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    spacing: 2,
                    children: [
                        hasLockTime ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: noRemain || listOfStatus.includes(ITO_Status.expired) ? 12 : 6,
                            children: isUnlocked ? !(availability === null || availability === void 0 ? void 0 : availability.claimed) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onClaimButtonClick,
                                variant: "contained",
                                size: "large",
                                disabled: claimState.type === types/* TransactionStateType.HASH */.n$.HASH,
                                className: classes.actionButton,
                                children: claimState.type === types/* TransactionStateType.HASH */.n$.HASH ? t('plugin_ito_claiming') : t('plugin_ito_claim')
                            }) : canWithdraw ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onWithdraw,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_withdraw')
                            }) : null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: ()=>undefined
                                ,
                                variant: "contained",
                                disabled: true,
                                size: "large",
                                className: classnames_default()(classes.actionButton, classes.textInOneLine),
                                children: t('plugin_ito_claim')
                            })
                        }) : canWithdraw ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onWithdraw,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_withdraw')
                            })
                        }) : null,
                        noRemain || listOfStatus.includes(ITO_Status.expired) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: hasLockTime ? 6 : 12,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onShareSuccess,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_share')
                            })
                        })
                    ]
                }) : canWithdraw ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: onWithdraw,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: t('plugin_ito_withdraw')
                }) : (!ifQualified || !ifQualified.qualified) && !(0,utils_address/* isNativeTokenAddress */.qw)(qualificationAddress) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: retryIfQualified,
                    loading: loadingIfQualified,
                    variant: "contained",
                    size: "large",
                    className: classes.actionButton,
                    children: loadingIfQualified ? t('plugin_ito_qualification_loading') : !ifQualified ? t('plugin_ito_qualification_failed') : !ifQualified.qualified ? (0,startCase/* default */.Z)(ifQualified.errorMsg) : null
                }) : listOfStatus.includes(ITO_Status.expired) ? null : listOfStatus.includes(ITO_Status.waited) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onUnlock,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_unlock_in_advance')
                            })
                        }),
                        shareLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onShare,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_share')
                            })
                        }) : undefined
                    ]
                }) : listOfStatus.includes(ITO_Status.started) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onClaim,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_enter')
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onShareSuccess,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_share')
                            })
                        })
                    ]
                }) : null
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapGuide, {
                status: claimDialogStatus,
                total_remaining: total_remaining,
                payload: {
                    ...payload,
                    qualification_address: qualificationAddress
                },
                shareSuccessLink: shareSuccessLink,
                isBuyer: isBuyer,
                exchangeTokens: exchange_tokens,
                open: openClaimDialog,
                onUpdate: setClaimDialogStatus,
                onClose: ()=>setOpenClaimDialog(false)
                ,
                retryPayload: retryITOCard
            })
        ]
    }));
}
function ITO_Loading() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(52872), __webpack_require__.b));
    const { classes  } = ITO_useStyles({});
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
            className: classnames_default()(classes.root, classes.loadingWrap),
            elevation: 0,
            style: {
                backgroundImage: `url(${PoolBackground})`
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                className: classes.loadingITO,
                children: t('plugin_ito_loading')
            })
        })
    }));
}
function ITO_Error({ retryPoolPayload  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ITO_useStyles({});
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(52872), __webpack_require__.b));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classnames_default()(classes.root, classes.loadingWrap),
        elevation: 0,
        style: {
            backgroundImage: `url(${PoolBackground})`
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                className: classes.loadingITO,
                children: t('loading_failed')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                onClick: retryPoolPayload,
                variant: "outlined",
                size: "large",
                color: "primary",
                className: classes.loadingITO_Button,
                children: t('try_again')
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PostInspector.tsx







function PostInspector(props) {
    const { chain_id , pid  } = props.payload;
    const isCompactPayload_ = (0,helpers/* isCompactPayload */.cr)(props.payload);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { value: payload , error , loading , retry: retryPayload ,  } = usePoolPayload(isCompactPayload_ && chainId === chain_id ? pid : '');
    const _payload = payload !== null && payload !== void 0 ? payload : props.payload;
    // To meet the max allowance of the data size of image steganography, we need to
    //  cut off some properties, such as save the token address string only.
    const token = _payload.token;
    const { value: tokenDetailed , loading: _loadingToken , retry: retryToken ,  } = (0,useFungibleTokenDetailed/* useFungibleTokenDetailed */.j)(types/* EthereumTokenType.ERC20 */.Dr.ERC20, typeof token === 'string' ? token : token.address);
    const exchangeFungibleTokens = (0,react.useMemo)(()=>_payload.exchange_tokens.map((t)=>({
                address: t.address,
                type: (0,utils_address/* isSameAddress */.Wr)(t.address, NATIVE_TOKEN_ADDRESS) ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20
            })
        )
    , [
        JSON.stringify(_payload.exchange_tokens)
    ]);
    const { value: exchangeTokensDetailed , loading: loadingExchangeTokensDetailed , retry: retryExchangeTokensDetailed ,  } = (0,useERC20TokenDetailed/* useFungibleTokensDetailed */.b)(exchangeFungibleTokens);
    const retry = (0,react.useCallback)(()=>{
        retryPayload();
        retryToken();
        retryExchangeTokensDetailed();
    }, [
        retryPayload,
        retryToken,
        retryExchangeTokensDetailed
    ]);
    const loadingToken = _loadingToken || loadingExchangeTokensDetailed;
    const renderITO = ()=>{
        var ref;
        if (isCompactPayload_) {
            if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Loading, {}));
            if (error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Error, {
                retryPoolPayload: retry
            }));
        }
        if (loadingToken && typeof token === 'string' || (tokenDetailed === null || tokenDetailed === void 0 ? void 0 : (ref = tokenDetailed.symbol) === null || ref === void 0 ? void 0 : ref.toUpperCase()) === 'UNKNOWN') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Loading, {}));
        if (!tokenDetailed && typeof token === 'string') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Error, {
            retryPoolPayload: retry
        }));
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ITO, {
            pid: pid,
            payload: typeof token === 'string' ? {
                ..._payload,
                token: tokenDetailed,
                exchange_tokens: exchangeTokensDetailed
            } : _payload
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: chain_id,
        children: renderITO()
    }));
}

// EXTERNAL MODULE: ./src/plugins/ITO/base.ts
var ITO_base = __webpack_require__(23453);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(67182);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(80672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(61544);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(33312);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
// EXTERNAL MODULE: ./src/web3/UI/DateTimePanel.tsx
var DateTimePanel = __webpack_require__(6728);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(71715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(17658);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/AdvanceSetting.tsx




var SettingField;
(function(SettingField) {
    SettingField["IPRegion"] = "IPRegion";
    SettingField["delayUnlocking"] = "delayUnlocking";
    SettingField["contract"] = "contract";
})(SettingField || (SettingField = {}));
const AdvanceSetting_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            border: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
            minWidth: 0,
            flexDirection: 'column',
            verticalAlign: 'top'
        },
        label: {
            padding: `${theme.spacing(1)} ${theme.spacing(1)}`
        },
        group: {
            flexFlow: 'wrap',
            justifyContent: 'space-between',
            padding: theme.spacing(0, 1),
            marginBottom: theme.spacing(1)
        }
    })
);
function AdvanceSetting({ advanceSettingData , setAdvanceSettingData  }) {
    const { classes  } = AdvanceSetting_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const handleAdvanceSettingToggle = (event)=>{
        const { name , checked  } = event.target;
        setAdvanceSettingData({
            ...advanceSettingData,
            [name]: checked
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("fieldset", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormLabel/* default */.Z, {
                component: "legend",
                className: classes.label,
                children: t('plugin_ito_advanced')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
                className: classes.group,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: !!advanceSettingData.IPRegion,
                            onChange: handleAdvanceSettingToggle,
                            name: SettingField.IPRegion
                        }),
                        label: t('plugin_ito_advanced_ip_region')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: !!advanceSettingData.delayUnlocking,
                            onChange: handleAdvanceSettingToggle,
                            name: SettingField.delayUnlocking
                        }),
                        label: t('plugin_ito_advanced_delay_unlocking')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: !!advanceSettingData.contract,
                            onChange: handleAdvanceSettingToggle,
                            name: SettingField.contract
                        }),
                        label: t('plugin_ito_advanced_contract')
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(84179);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/ArrowDownward.js
var ArrowDownward = __webpack_require__(56300);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useExchangeTokenAmountstate.ts


var ExchangeTokenAndAmountActionType;
(function(ExchangeTokenAndAmountActionType) {
    ExchangeTokenAndAmountActionType[ExchangeTokenAndAmountActionType["ADD"] = 0] = "ADD";
    ExchangeTokenAndAmountActionType[ExchangeTokenAndAmountActionType["REMOVE"] = 1] = "REMOVE";
    ExchangeTokenAndAmountActionType[ExchangeTokenAndAmountActionType["UPDATE_AMOUNT"] = 2] = "UPDATE_AMOUNT";
    ExchangeTokenAndAmountActionType[ExchangeTokenAndAmountActionType["UPDATE_TOKEN"] = 3] = "UPDATE_TOKEN";
})(ExchangeTokenAndAmountActionType || (ExchangeTokenAndAmountActionType = {}));
function reducer(state, action) {
    switch(action.type){
        case ExchangeTokenAndAmountActionType.ADD:
            return [
                ...state,
                {
                    key: (0,v4/* default */.Z)(),
                    amount: '',
                    token: undefined
                }, 
            ];
        case ExchangeTokenAndAmountActionType.REMOVE:
            return state.filter((item)=>item.key !== action.key
            );
        case ExchangeTokenAndAmountActionType.UPDATE_AMOUNT:
            return state.map((item)=>item.key === action.key ? {
                    ...item,
                    amount: action.amount
                } : item
            );
        case ExchangeTokenAndAmountActionType.UPDATE_TOKEN:
            return state.map((item)=>item.key === action.key ? {
                    ...item,
                    token: action.token
                } : item
            );
        default:
            return state;
    }
}
function useExchangeTokenAndAmount(arrState) {
    return (0,react.useReducer)(reducer, arrState && arrState.length > 0 ? arrState : [
        {
            key: (0,v4/* default */.Z)(),
            amount: '',
            token: undefined
        },
        {
            key: (0,v4/* default */.Z)(),
            amount: '',
            token: undefined
        }, 
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(35428);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(91497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/AddOutlined.js
var AddOutlined = __webpack_require__(94598);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/RemoveOutlined.js
var RemoveOutlined = __webpack_require__(28649);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ExchangeTokenPanel.tsx












const ExchangeTokenPanel_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%'
        },
        line: {
            margin: theme.spacing(1),
            display: 'flex'
        },
        input: {
            flex: 1,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1)
        },
        flow: {
            margin: theme.spacing(1),
            textAlign: 'center'
        },
        button: {
            margin: theme.spacing(1),
            borderRadius: 10,
            backgroundColor: theme.palette.background.default,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                margin: theme.spacing(0),
                padding: theme.spacing(0, 0, 0, 0.5)
            }
        }
    })
);
function ExchangeTokenPanel(props) {
    const { onAmountChange , dataIndex , inputAmount , disableBalance , exchangeToken , onExchangeTokenChange , isSell , showAdd =true , showRemove =false , label , excludeTokensAddress =[] , selectedTokensAddress =[] , onRemove , onAdd ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ExchangeTokenPanel_useStyles();
    // #region select token dialog
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const { setDialog: setSelectTokenDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        onExchangeTokenChange(ev.token, dataIndex);
    }, [
        id,
        dataIndex
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        var ref;
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken: isSell,
            FungibleTokenListProps: {
                blacklist: excludeTokensAddress,
                selectedTokens: [
                    (ref = exchangeToken === null || exchangeToken === void 0 ? void 0 : exchangeToken.address) !== null && ref !== void 0 ? ref : '',
                    ...selectedTokensAddress
                ]
            }
        });
    }, [
        id,
        isSell,
        exchangeToken,
        excludeTokensAddress.sort().join(),
        selectedTokensAddress.sort().join()
    ]);
    var ref2, ref1;
    // #endregion
    // #region balance
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)((ref2 = exchangeToken === null || exchangeToken === void 0 ? void 0 : exchangeToken.type) !== null && ref2 !== void 0 ? ref2 : types/* EthereumTokenType.Native */.Dr.Native, (ref1 = exchangeToken === null || exchangeToken === void 0 ? void 0 : exchangeToken.address) !== null && ref1 !== void 0 ? ref1 : '');
    // #endregion
    const [inputAmountForUI, setInputAmountForUI] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        setInputAmountForUI(inputAmount);
    }, [
        inputAmount,
        setInputAmountForUI
    ]);
    const onAmountChangeForUI = (0,react.useCallback)((amount)=>{
        onAmountChange(amount, dataIndex);
    }, [
        dataIndex,
        onAmountChange
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        className: classes.line,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                classes: {
                    root: classes.input
                },
                label: label,
                amount: inputAmountForUI,
                disableBalance: disableBalance,
                balance: disableBalance || loadingTokenBalance ? '0' : tokenBalance,
                token: exchangeToken,
                onAmountChange: onAmountChangeForUI,
                SelectTokenChip: {
                    loading: false,
                    ChipProps: {
                        onClick: onSelectTokenChipClick
                    }
                },
                TextFieldProps: {
                    disabled: !exchangeToken,
                    placeholder: !exchangeToken ? t('plugin_ito_placeholder_when_token_unselected') : '0.0'
                },
                ...props.TokenAmountPanelProps
            }),
            showAdd ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "large",
                onClick: onAdd,
                className: classes.button,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddOutlined/* default */.Z, {
                    color: "primary"
                })
            }) : null,
            showRemove ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "large",
                onClick: onRemove,
                className: classes.button,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RemoveOutlined/* default */.Z, {
                    color: "error"
                })
            }) : null
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ExchangeTokenPanelGroup.tsx










const ExchangeTokenPanelGroup_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        arrow: {
            display: 'flex',
            justifyContent: 'center'
        },
        adornment: {
            color: theme.palette.text.secondary
        }
    })
);
function ExchangeTokenPanelGroup(props) {
    const { classes  } = ExchangeTokenPanelGroup_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { onTokenAmountChange  } = props;
    const [selectedTokensAddress, setSelectedTokensAddress] = (0,react.useState)([]);
    const [exchangeTokenArray, dispatchExchangeTokenArray] = useExchangeTokenAndAmount(props.origin);
    const onAdd = (0,react.useCallback)(()=>{
        if (exchangeTokenArray.length > ITO_constants/* ITO_EXCHANGE_RATION_MAX */.No) return;
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.ADD,
            key: (0,v4/* default */.Z)(),
            token: undefined,
            amount: '0'
        });
    }, [
        dispatchExchangeTokenArray,
        exchangeTokenArray.length
    ]);
    const onAmountChange = (0,react.useCallback)((amount, key)=>{
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.UPDATE_AMOUNT,
            amount,
            key
        });
    }, [
        dispatchExchangeTokenArray
    ]);
    const onTokenChange = (0,react.useCallback)((token, key)=>{
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.UPDATE_TOKEN,
            token,
            key
        });
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.UPDATE_AMOUNT,
            amount: '',
            key
        });
    }, [
        dispatchExchangeTokenArray
    ]);
    (0,react.useEffect)(()=>{
        onTokenAmountChange(exchangeTokenArray);
        var ref;
        setSelectedTokensAddress(exchangeTokenArray.map((x)=>{
            var ref1;
            return (ref = (ref1 = x.token) === null || ref1 === void 0 ? void 0 : ref1.address) !== null && ref !== void 0 ? ref : '';
        }));
    }, [
        exchangeTokenArray,
        onTokenAmountChange
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: exchangeTokenArray.map((item, idx)=>{
            var ref;
            return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ExchangeTokenPanel, {
                        label: idx ? t('plugin_ito_swap_ration_label') : t('plugin_ito_sell_total_amount'),
                        dataIndex: item.key,
                        disableBalance: idx !== 0,
                        isSell: idx === 0,
                        inputAmount: item.amount,
                        selectedTokensAddress: selectedTokensAddress,
                        onAmountChange: onAmountChange,
                        exchangeToken: item.token,
                        onExchangeTokenChange: onTokenChange,
                        showRemove: idx > 0 && idx < exchangeTokenArray.length && exchangeTokenArray.length !== 2,
                        showAdd: idx === exchangeTokenArray.length - 1 && idx < ITO_constants/* ITO_EXCHANGE_RATION_MAX */.No,
                        onRemove: ()=>dispatchExchangeTokenArray({
                                type: ExchangeTokenAndAmountActionType.REMOVE,
                                key: item.key
                            })
                        ,
                        onAdd: onAdd,
                        TokenAmountPanelProps: {
                            InputProps: idx ? {
                                startAdornment: props.token ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputAdornment/* default */.Z, {
                                    position: "start",
                                    className: classes.adornment,
                                    children: [
                                        "1",
                                        (ref = props.token) === null || ref === void 0 ? void 0 : ref.symbol,
                                        "="
                                    ]
                                }) : ''
                            } : {}
                        }
                    }),
                    idx === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.arrow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownward/* default */.Z, {
                            color: "disabled"
                        })
                    }) : null
                ]
            }, idx));
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useDebounce.js
var useDebounce = __webpack_require__(57872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(49203);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(97648);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/FilledInput/FilledInput.js
var FilledInput = __webpack_require__(13445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(59216);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(73268);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(10);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/RegionSelect.tsx








const RegionSelect_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            width: '100%',
            height: '54px',
            alignItems: 'center',
            paddingLeft: theme.spacing(2)
        },
        allToggle: {
            marginLeft: `-${theme.spacing(1)}`
        },
        inputControl: {
            display: 'flex'
        },
        inputRoot: {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            '&:before': {
                borderColor: 'rgba(0, 0, 0, 0.01)'
            }
        },
        input: {
            padding: theme.spacing(2)
        },
        span: {
            paddingLeft: theme.spacing(2)
        },
        options: {
            maxHeight: 140,
            overflow: 'auto'
        },
        display: {
            padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`
        },
        item: {
            padding: `0 ${theme.spacing(2)}`
        }
    })
);
// TODO fix TextField focus style
const RegionSelect = /*#__PURE__*/ (0,react.forwardRef)(({ value =[] , onRegionChange , ...props }, ref1)=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = RegionSelect_useStyles();
    const allRegions = useRegionList();
    const isAll = value.length === allRegions.length;
    const valueMap = new Map(value.map((code)=>[
            code,
            true
        ]
    ));
    const displayRef = (0,react.useRef)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [open, setOpen] = (0,react.useState)(false);
    const handleDisplayRef = (0,react.useCallback)((node)=>{
        displayRef.current = node;
        if (node) setAnchorEl(node);
    }, []);
    const [minPopoverWidth, setMinPopoverWidth] = (0,react.useState)(0);
    (0,react.useImperativeHandle)(ref1, ()=>{
        return {
            focus: ()=>{
                var ref;
                (ref = displayRef.current) === null || ref === void 0 ? void 0 : ref.focus();
            }
        };
    });
    const [filterText, setFilterText] = (0,react.useState)('');
    const [filteredRegions, setFilteredRegions] = (0,react.useState)(allRegions);
    const [, cancelFilterDebounce] = (0,useDebounce/* default */.Z)(()=>{
        const reg = new RegExp(filterText, 'i');
        setFilteredRegions(allRegions.filter((region)=>reg.test(region.name) || reg.test(region.code)
        ));
    }, 500, [
        filterText
    ]);
    const handleFilter = (event)=>{
        setFilterText(event.target.value);
    };
    const isAllFiltered = filteredRegions.every((region)=>valueMap.get(region.code)
    );
    const handleToggleAllFiltered = ()=>{
        filteredRegions.forEach((r)=>{
            isAllFiltered ? valueMap.delete(r.code) : valueMap.set(r.code, true);
        });
        onRegionChange(Array.from(valueMap.keys()));
    };
    const handleOpenChange = (toOpen, event)=>{
        if (toOpen && anchorEl) setMinPopoverWidth(anchorEl.clientWidth);
        if (!toOpen) {
            setFilterText('');
            cancelFilterDebounce();
        }
        setOpen(toOpen);
    };
    const handleToggle = (code)=>()=>{
            const isSelected = valueMap.get(code);
            isSelected ? valueMap.delete(code) : valueMap.set(code, true);
            onRegionChange(Array.from(valueMap.keys()));
        }
    ;
    const handleMouseDown = (event)=>{
        // Ignore everything but left-click
        if (event.button !== 0) {
            return;
        }
        // Hijack the default focus behavior.
        event.preventDefault();
        handleOpenChange(true, event);
    };
    const handlePopoverClose = (event)=>{
        handleOpenChange(false, event);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.root,
                ref: handleDisplayRef,
                onMouseDown: handleMouseDown,
                children: isAll ? t('plugin_ito_region_all') : t('plugin_ito_region_list', {
                    all: allRegions.length,
                    select: value.length
                })
            }),
            (0,utils/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Popover/* default */.ZP, {
                    container: container,
                    open: open,
                    anchorEl: anchorEl,
                    PaperProps: {
                        style: {
                            minWidth: `${minPopoverWidth}px`
                        }
                    },
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left'
                    },
                    onClose: handlePopoverClose,
                    disableRestoreFocus: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                            className: classes.inputControl,
                            variant: "filled",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FilledInput/* default */.Z, {
                                className: classes.inputRoot,
                                placeholder: t('plugin_ito_region_search'),
                                onChange: handleFilter,
                                inputProps: {
                                    className: classes.input
                                },
                                startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    className: classes.allToggle,
                                    checked: isAllFiltered,
                                    onChange: handleToggleAllFiltered,
                                    disableRipple: true
                                }),
                                endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputAdornment/* default */.Z, {
                                    position: "end",
                                    children: [
                                        value.length,
                                        "/",
                                        allRegions.length
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                            className: classes.options,
                            children: filteredRegions.map((region)=>{
                                return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                                    className: classes.item,
                                    onClick: handleToggle(region.code),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                            edge: "start",
                                            color: "primary",
                                            checked: valueMap.has(region.code),
                                            disableRipple: true
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: countryToFlag(region.code)
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: classes.span,
                                                    children: region.name
                                                })
                                            ]
                                        })
                                    ]
                                }, region.code));
                            })
                        })
                    ]
                })
            )
        ]
    }));
});
// ISO 3166-1 alpha-2
function countryToFlag(isoCode) {
    if (!shared/* Flags.using_emoji_flag */.vU.using_emoji_flag) {
        return '';
    }
    return isoCode.toUpperCase().replace(/./g, (char)=>String.fromCodePoint(char.charCodeAt(0) + 127397)
    );
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/CreateForm.tsx























const CreateForm_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        line: {
            margin: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            display: 'flex',
            [smallQuery]: {
                margin: theme.spacing(0)
            }
        },
        column: {
            flexDirection: 'column'
        },
        flow: {
            margin: theme.spacing(1),
            textAlign: 'center'
        },
        input: {
            padding: theme.spacing(1),
            flex: 1
        },
        inputLabel: {
            left: 8,
            top: 8
        },
        label: {
            paddingLeft: theme.spacing(2)
        },
        tip: {
            fontSize: 12,
            color: theme.palette.text.secondary
        },
        button: {
            marginTop: theme.spacing(1.5),
            [smallQuery]: {
                lineHeight: 1.2,
                marginTop: theme.spacing(0)
            }
        },
        date: {
            margin: theme.spacing(1),
            display: 'flex',
            '& > * ': {
                flex: 1,
                padding: theme.spacing(1),
                [smallQuery]: {
                    flexDirection: 'column',
                    padding: theme.spacing(2, 0, 1, 0)
                }
            },
            [smallQuery]: {
                flexDirection: 'column',
                paddingLeft: 0,
                paddingRight: 0
            }
        },
        iconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 26,
            height: 24,
            borderRadius: 500
        },
        success: {
            backgroundColor: 'rgba(119, 224, 181, 0.2)'
        },
        fail: {
            backgroundColor: 'rgba(255, 78, 89, 0.2)'
        },
        qualStartTime: {
            padding: '0 16px',
            opacity: 0.8
        },
        field: {
            flex: 1,
            padding: theme.spacing(1),
            marginTop: theme.spacing(1)
        }
    };
});
function CreateForm(props) {
    var ref16, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
    const { onChangePoolSettings , onNext , origin , onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,theme_src/* useStylesExtends */.Bc)(CreateForm_useStyles(), props);
    const account = (0,useAccount/* useAccount */.m)();
    const { ITO2_CONTRACT_ADDRESS , DEFAULT_QUALIFICATION2_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    var _userId, ref10;
    const senderName = (ref10 = (_userId = currentIdentity === null || currentIdentity === void 0 ? void 0 : currentIdentity.identifier.userId) !== null && _userId !== void 0 ? _userId : currentIdentity === null || currentIdentity === void 0 ? void 0 : (ref16 = currentIdentity.linkedPersona) === null || ref16 === void 0 ? void 0 : ref16.nickname) !== null && ref10 !== void 0 ? ref10 : 'Unknown User';
    var ref11;
    const [message, setMessage] = (0,react.useState)((ref11 = origin === null || origin === void 0 ? void 0 : origin.title) !== null && ref11 !== void 0 ? ref11 : '');
    const [totalOfPerWallet, setTotalOfPerWallet] = (0,react.useState)((0,base_src/* isZero */.Fr)((origin === null || origin === void 0 ? void 0 : origin.limit) || '0') ? '' : (0,formatter/* formatBalance */.az)((origin === null || origin === void 0 ? void 0 : origin.limit) || '0', origin === null || origin === void 0 ? void 0 : (ref1 = origin.token) === null || ref1 === void 0 ? void 0 : ref1.decimals));
    const [tokenAndAmount, setTokenAndAmount] = (0,react.useState)();
    const TAS = [];
    if ((origin === null || origin === void 0 ? void 0 : origin.token) && (origin === null || origin === void 0 ? void 0 : origin.total)) {
        TAS.push({
            token: origin === null || origin === void 0 ? void 0 : origin.token,
            amount: (0,formatter/* formatBalance */.az)((origin === null || origin === void 0 ? void 0 : origin.total) || '0', origin === null || origin === void 0 ? void 0 : origin.token.decimals),
            key: (0,v4/* default */.Z)()
        });
    }
    if ((origin === null || origin === void 0 ? void 0 : origin.exchangeTokens) && (origin === null || origin === void 0 ? void 0 : origin.exchangeAmounts)) {
        origin === null || origin === void 0 ? void 0 : origin.exchangeTokens.map((i, x)=>{
            return TAS.push({
                amount: (0,formatter/* formatBalance */.az)((origin === null || origin === void 0 ? void 0 : origin.exchangeAmounts[x]) || '0', i === null || i === void 0 ? void 0 : i.decimals),
                token: i,
                key: (0,v4/* default */.Z)()
            });
        });
    }
    // set the default exchange
    if (TAS.length === 1) {
        TAS.push({
            key: (0,v4/* default */.Z)(),
            amount: '',
            token: undefined
        });
    }
    const [tokenAndAmounts, setTokenAndAmounts] = (0,react.useState)(TAS);
    const [startTime, setStartTime] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.startTime) || new Date());
    const [endTime, setEndTime] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.endTime) || new Date());
    const [unlockTime, setUnlockTime] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.unlockTime) || new Date());
    const GMT = new Date().getTimezoneOffset() / 60 * -1;
    // amount for displaying
    const inputTokenAmount = (0,formatter/* formatAmount */.dN)((tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : tokenAndAmount.amount) || '0', tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref2 = tokenAndAmount.token) === null || ref2 === void 0 ? void 0 : ref2.decimals);
    var ref12, ref13;
    // balance
    const { value: tokenBalance = '0'  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)((ref12 = tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref3 = tokenAndAmount.token) === null || ref3 === void 0 ? void 0 : ref3.type) !== null && ref12 !== void 0 ? ref12 : types/* EthereumTokenType.Native */.Dr.Native, (ref13 = tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref4 = tokenAndAmount.token) === null || ref4 === void 0 ? void 0 : ref4.address) !== null && ref13 !== void 0 ? ref13 : '');
    var ref14;
    const RE_MATCH_WHOLE_AMOUNT = (0,react.useMemo)(()=>{
        var ref;
        return new RegExp(`^\\d*\\.?\\d{0,${(ref14 = tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref = tokenAndAmount.token) === null || ref === void 0 ? void 0 : ref.decimals) !== null && ref14 !== void 0 ? ref14 : 18}}$`);
    }, [
        tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref5 = tokenAndAmount.token) === null || ref5 === void 0 ? void 0 : ref5.decimals
    ]);
    const onTotalOfPerWalletChange = (0,react.useCallback)((ev)=>{
        const total = ev.currentTarget.value;
        if (!RE_MATCH_WHOLE_AMOUNT.test(total)) return;
        if (total === '') setTotalOfPerWallet('');
        if (/^\d+\.?\d*$/.test(total)) {
            setTotalOfPerWallet(total);
        }
    }, [
        tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref6 = tokenAndAmount.token) === null || ref6 === void 0 ? void 0 : ref6.decimals,
        RE_MATCH_WHOLE_AMOUNT
    ]);
    // qualificationAddress
    const [qualificationAddress, setQualificationAddress] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.qualificationAddress) && origin.qualificationAddress !== DEFAULT_QUALIFICATION2_ADDRESS ? origin.qualificationAddress : '');
    const { value: qualification , loading: loadingQualification  } = useQualificationVerify(qualificationAddress, ITO2_CONTRACT_ADDRESS);
    // advance settings
    const [advanceSettingData, setAdvanceSettingData] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.advanceSettingData) || {});
    var ref15;
    // restrict regions
    const [regions, setRegions] = useRegionSelect(decodeRegionCode((ref15 = origin === null || origin === void 0 ? void 0 : origin.regions) !== null && ref15 !== void 0 ? ref15 : '-'));
    (0,react.useEffect)(()=>{
        if (!advanceSettingData.contract) setQualificationAddress('');
        if (!advanceSettingData.delayUnlocking) setUnlockTime(new Date());
        if (!advanceSettingData.IPRegion) setRegions(regionCodes);
    }, [
        advanceSettingData
    ]);
    (0,react.useEffect)(()=>{
        if (!ITO2_CONTRACT_ADDRESS || !DEFAULT_QUALIFICATION2_ADDRESS) onClose();
    }, [
        ITO2_CONTRACT_ADDRESS,
        DEFAULT_QUALIFICATION2_ADDRESS,
        onClose
    ]);
    (0,react.useEffect)(()=>{
        var ref19, ref17;
        const [first, ...rest] = tokenAndAmounts;
        const qualificationAddress_ = (qualification === null || qualification === void 0 ? void 0 : qualification.isQualification) && advanceSettingData.contract ? qualificationAddress : DEFAULT_QUALIFICATION2_ADDRESS;
        if (!qualificationAddress_) return;
        setTokenAndAmount(first);
        var ref18;
        onChangePoolSettings({
            // this is the raw password which should be signed by the sender
            password: (ref18 = lib_default().sha3(message)) !== null && ref18 !== void 0 ? ref18 : '',
            name: senderName,
            title: message,
            limit: (0,formatter/* formatAmount */.dN)(totalOfPerWallet || '0', first === null || first === void 0 ? void 0 : (ref19 = first.token) === null || ref19 === void 0 ? void 0 : ref19.decimals),
            token: first === null || first === void 0 ? void 0 : first.token,
            total: (0,formatter/* formatAmount */.dN)((first === null || first === void 0 ? void 0 : first.amount) || '0', first === null || first === void 0 ? void 0 : (ref17 = first.token) === null || ref17 === void 0 ? void 0 : ref17.decimals),
            exchangeAmounts: rest.map((item)=>{
                var ref;
                return (0,formatter/* formatAmount */.dN)(item.amount || '0', item === null || item === void 0 ? void 0 : (ref = item.token) === null || ref === void 0 ? void 0 : ref.decimals);
            }),
            exchangeTokens: rest.map((item)=>item.token
            ),
            qualificationAddress: qualificationAddress_,
            startTime,
            endTime,
            unlockTime: unlockTime > endTime && advanceSettingData.delayUnlocking ? unlockTime : undefined,
            regions: encodeRegionCode(regions),
            advanceSettingData
        });
    }, [
        senderName,
        message,
        totalOfPerWallet,
        tokenAndAmount,
        tokenAndAmounts,
        setTokenAndAmount,
        startTime,
        endTime,
        unlockTime,
        qualification,
        regions,
        qualificationAddress,
        account,
        onChangePoolSettings,
        DEFAULT_QUALIFICATION2_ADDRESS, 
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        var ref;
        if (tokenAndAmounts.length === 0) return t('plugin_ito_error_enter_amount_and_token');
        for (const { amount , token  } of tokenAndAmounts){
            if (!token) return t('plugin_ito_error_select_token');
            if (amount === '') return t('plugin_ito_error_enter_amount');
            if ((0,base_src/* isZero */.Fr)(amount)) return t('plugin_ito_error_enter_amount');
        }
        var ref20;
        if ((0,base_src/* isGreaterThan */.T1)((ref20 = tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : tokenAndAmount.amount) !== null && ref20 !== void 0 ? ref20 : '0', tokenBalance)) return t('plugin_ito_error_balance', {
            symbol: tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref = tokenAndAmount.token) === null || ref === void 0 ? void 0 : ref.symbol
        });
        if (!totalOfPerWallet || (0,base_src/* isZero */.Fr)(totalOfPerWallet)) return t('plugin_ito_error_allocation_absence');
        var ref21;
        if ((0,base_src/* isGreaterThan */.T1)(totalOfPerWallet, (ref21 = tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : tokenAndAmount.amount) !== null && ref21 !== void 0 ? ref21 : '0')) return t('plugin_ito_error_allocation_invalid');
        if (startTime >= endTime) return t('plugin_ito_error_exchange_time');
        if (endTime >= unlockTime && advanceSettingData.delayUnlocking) return t('plugin_ito_error_unlock_time');
        if (qualification === null || qualification === void 0 ? void 0 : qualification.startTime) {
            if (new Date(Number(qualification.startTime) * 1000) >= endTime) return t('plugin_ito_error_qualification_start_time');
        }
        if (!(qualification === null || qualification === void 0 ? void 0 : qualification.isQualification) && advanceSettingData.contract && qualificationAddress.length > 0) {
            return t('plugin_ito_error_invalid_qualification');
        }
        return '';
    }, [
        endTime,
        unlockTime,
        advanceSettingData,
        qualification,
        startTime,
        tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : tokenAndAmount.amount,
        tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref7 = tokenAndAmount.token) === null || ref7 === void 0 ? void 0 : ref7.symbol,
        tokenAndAmounts,
        tokenBalance,
        totalOfPerWallet, 
    ]);
    const handleStartTime = (0,react.useCallback)((input)=>{
        setStartTime(input);
    }, []);
    const handleEndTime = (0,react.useCallback)((input)=>{
        const time = input.getTime();
        const now = Date.now();
        if (time < now) return;
        if (time > startTime.getTime()) setEndTime(input);
    }, [
        startTime
    ]);
    const handleUnlockTime = (0,react.useCallback)((input)=>{
        const time = input.getTime();
        const now = Date.now();
        if (time < now) return;
        if (time > endTime.getTime()) setUnlockTime(input);
    }, [
        startTime
    ]);
    const StartTime = /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
        label: t('plugin_ito_begin_time_title'),
        onChange: handleStartTime,
        date: startTime
    });
    const EndTime = /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
        label: t('plugin_ito_end_time_title'),
        onChange: handleEndTime,
        min: (0,format/* default */.Z)(startTime, "yyyy-MM-dd'T00:00"),
        date: endTime
    });
    const UnlockTime = /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
        label: t('plugin_ito_unlock_time'),
        onChange: handleUnlockTime,
        date: unlockTime
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                style: {
                    display: 'block'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExchangeTokenPanelGroup, {
                    token: tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : tokenAndAmount.token,
                    origin: tokenAndAmounts,
                    onTokenAmountChange: (arr)=>setTokenAndAmounts(arr)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    label: t('plugin_ito_message_label'),
                    value: message,
                    onChange: (e)=>setMessage((0,utils/* sliceTextByUILength */.cc)(e.target.value, 90))
                    ,
                    InputLabelProps: {
                        shrink: true,
                        classes: {
                            root: classes.inputLabel
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    label: t('plugin_ito_allocation_per_wallet_title'),
                    onChange: onTotalOfPerWalletChange,
                    value: totalOfPerWallet,
                    InputLabelProps: {
                        shrink: true,
                        classes: {
                            root: classes.inputLabel
                        }
                    },
                    InputProps: {
                        endAdornment: tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref8 = tokenAndAmount.token) === null || ref8 === void 0 ? void 0 : ref8.symbol,
                        inputProps: {
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            inputMode: 'decimal',
                            placeholder: '0.0',
                            pattern: '^[0-9]$',
                            spellCheck: false
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                className: classes.date,
                direction: "row",
                children: [
                    StartTime,
                    " ",
                    EndTime
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdvanceSetting, {
                    advanceSettingData: advanceSettingData,
                    setAdvanceSettingData: setAdvanceSettingData
                })
            }),
            advanceSettingData.IPRegion ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    label: t('plugin_ito_region_label'),
                    InputLabelProps: {
                        shrink: true,
                        classes: {
                            root: classes.inputLabel
                        }
                    },
                    InputProps: {
                        inputComponent: RegionSelect,
                        inputProps: {
                            value: regions,
                            onRegionChange: setRegions
                        }
                    }
                })
            }) : null,
            advanceSettingData.delayUnlocking ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.date,
                children: UnlockTime
            }) : null,
            account && advanceSettingData.contract ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classnames_default()(classes.line, classes.column),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        className: classes.input,
                        label: t('plugin_ito_qualification_label'),
                        onChange: (e)=>setQualificationAddress(e.currentTarget.value)
                        ,
                        value: qualificationAddress,
                        InputLabelProps: {
                            shrink: true,
                            classes: {
                                root: classes.inputLabel
                            }
                        },
                        InputProps: {
                            endAdornment: (qualification === null || qualification === void 0 ? void 0 : qualification.isQualification) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classnames_default()(classes.iconWrapper, classes.success),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                                    fontSize: "small",
                                    style: {
                                        color: '#77E0B5'
                                    }
                                })
                            }) : (qualification === null || qualification === void 0 ? void 0 : qualification.loadingERC165) || loadingQualification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                size: 16
                            }) : qualificationAddress.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classnames_default()(classes.iconWrapper, classes.fail),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                                    fontSize: "small",
                                    style: {
                                        color: '#ff4e59'
                                    }
                                })
                            }) : null
                        }
                    }),
                    (qualification === null || qualification === void 0 ? void 0 : qualification.startTime) && new Date(Number(qualification.startTime) * 1000) > startTime ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.qualStartTime,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t('plugin_ito_qualification_start_time')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: new Date(Number(qualification.startTime) * 1000).toString()
                            })
                        ]
                    }) : null
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                        amount: inputTokenAmount,
                        spender: ITO2_CONTRACT_ADDRESS,
                        token: (tokenAndAmount === null || tokenAndAmount === void 0 ? void 0 : (ref9 = tokenAndAmount.token) === null || ref9 === void 0 ? void 0 : ref9.type) === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? tokenAndAmount.token : undefined,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            disabled: !!validationMessage,
                            onClick: onNext,
                            children: validationMessage || t('plugin_ito_next')
                        })
                    })
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(51758);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockNumber.ts
var useBlockNumber = __webpack_require__(84198);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useAllPoolsAsSeller.ts




function useAllPoolsAsSeller(address) {
    const allPoolsRef = (0,react.useRef)([]);
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { value: blockNumber = 0  } = (0,useBlockNumber/* useBlockNumber */.O)();
    (0,react.useEffect)(()=>{
        allPoolsRef.current = [];
    }, [
        chainId
    ]);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const _pools = await messages/* PluginITO_RPC.getAllPoolsAsSeller */.k.getAllPoolsAsSeller(address, blockNumber, chainId);
        const pools = _pools.filter((a)=>!allPoolsRef.current.map((b)=>b.pool.pid
            ).includes(a.pool.pid)
        );
        allPoolsRef.current = allPoolsRef.current.concat(pools);
        return {
            pools: allPoolsRef.current,
            loadMore: pools.length > 0
        };
    }, [
        address,
        blockNumber,
        chainId
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(59837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(51671);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(27238);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(49010);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(65619);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(68119);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(1585);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(21202);
;// CONCATENATED MODULE: ./src/web3/hooks/useTransactionDialog.ts




function useTransactionDialog(event, state, stateType, resetCallback) {
    // close the transaction dialog
    const { open , setDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (state.type !== stateType) return;
        resetCallback();
    });
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (state.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setDialog({
            open: open || state.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING,
            state: state,
            ...event
        });
    }, [
        state /* update tx dialog only if state changed */ 
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PoolInList.tsx


















const PoolInList_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        top: {
            width: '100%',
            boxSizing: 'border-box',
            padding: theme.spacing(1, 2, 1),
            [smallQuery]: {
                padding: theme.spacing(1, 0, 1)
            }
        },
        root: {
            borderRadius: 10,
            display: 'flex',
            padding: theme.spacing(2)
        },
        iconbar: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: theme.spacing(0.5),
            paddingRight: theme.spacing(1)
        },
        icon: {
            width: 32,
            height: 32
        },
        content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden'
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            paddingBottom: theme.spacing(1),
            [smallQuery]: {
                flexDirection: 'column'
            }
        },
        button: {
            borderRadius: 50,
            [smallQuery]: {
                width: '100%'
            }
        },
        title: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: theme.spacing(1),
            width: '100%'
        },
        date: {
            fontSize: 12
        },
        progress: {
            paddingBottom: theme.spacing(1)
        },
        price: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: theme.spacing(1)
        },
        details: {
            '& > *': {
                paddingBottom: theme.spacing(1)
            }
        },
        table: {
            padding: theme.spacing(0, 0, 1, 0),
            borderRadius: 0
        },
        cell: {
            border: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.primary,
            wordBreak: 'break-word'
        },
        head: {
            border: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.secondary
        },
        ellipsis: {
            maxWidth: 350,
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        }
    };
});
function PoolInList(props) {
    const { pool , exchange_in_volumes , exchange_out_volumes , onSend , onRetry  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = PoolInList_useStyles();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    var _token_address;
    // #region Fetch tokens detailed
    const { value: _tokenDetailed  } = (0,useFungibleTokenDetailed/* useFungibleTokenDetailed */.j)(types/* EthereumTokenType.ERC20 */.Dr.ERC20, (_token_address = pool.token_address) !== null && _token_address !== void 0 ? _token_address : pool.token.address);
    var _token;
    const poolToken = (_token = pool.token) !== null && _token !== void 0 ? _token : _tokenDetailed;
    const { exchange_token_addresses  } = pool;
    const _poolTokens = exchange_token_addresses ? exchange_token_addresses.map((v)=>({
            address: v,
            type: (0,utils_address/* isSameAddress */.Wr)(v, NATIVE_TOKEN_ADDRESS) ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20
        })
    ) : [];
    const { value: _exchangeTokens  } = (0,useERC20TokenDetailed/* useFungibleTokensDetailed */.b)(_poolTokens);
    var _exchange_tokens;
    const exchangeTokens = (_exchange_tokens = pool.exchange_tokens) !== null && _exchange_tokens !== void 0 ? _exchange_tokens : _exchangeTokens;
    // #endregion
    // #region Calculate out exchange_out_volumes
    const exchangeOutVolumes = exchange_out_volumes.length === exchange_in_volumes.length ? exchange_out_volumes : poolToken && exchangeTokens ? exchange_in_volumes.map((v, i)=>new (bignumber_default())(v).div(pool.exchange_amounts[i * 2]).times(pool.exchange_amounts[i * 2 + 1])
    ) : [];
    // #endregion
    // #region withdraw
    const [destructState, destructCallback, resetDestructCallback] = useDestructCallback(pool.contract_address);
    useTransactionDialog(null, destructState, types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED, ()=>{
        onRetry();
        resetDestructCallback();
    });
    // #endregion
    const account = (0,useAccount/* useAccount */.m)();
    const { computed: availabilityComputed , loading: loadingAvailability  } = useAvailabilityComputed(pool);
    const { value: tradeInfo , loading: loadingTradeInfo  } = usePoolTradeInfo(pool.pid, account);
    var ref2;
    const title = (ref2 = pool.message.split(ITO_constants/* MSG_DELIMITER */.Z3)[1]) !== null && ref2 !== void 0 ? ref2 : pool.message;
    const noRemain = (0,base_src/* isZero */.Fr)(pool.total_remaining);
    const { listOfStatus  } = availabilityComputed;
    const isWithdrawn = tradeInfo === null || tradeInfo === void 0 ? void 0 : tradeInfo.destructInfo;
    const canWithdraw = !isWithdrawn && (listOfStatus.includes(ITO_Status.expired) || noRemain);
    // Note: After upgrade to Asymmetrical secret key in the future, `canSend` requires `password` exists.
    const canSend = !listOfStatus.includes(ITO_Status.expired) && !noRemain;
    const base = new (bignumber_default())(pool.total).minus(pool.total_remaining).dividedBy(pool.total).toNumber();
    const progress = 100 * base;
    const StatusButton = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: loadingTradeInfo || loadingAvailability ? null : canWithdraw ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                fullWidth: true,
                size: "small",
                variant: "contained",
                onClick: ()=>destructCallback(pool.pid)
                ,
                children: t('plugin_ito_withdraw')
            }) : canSend ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                fullWidth: true,
                size: "small",
                variant: "contained",
                onClick: ()=>{
                    return onSend === null || onSend === void 0 ? void 0 : onSend((0,omit/* default */.Z)({
                        ...pool,
                        token: poolToken,
                        exchange_tokens: exchangeTokens
                    }, [
                        'token_addresses',
                        'exchange_token_addresses', 
                    ]));
                },
                children: t('plugin_ito_list_button_send')
            }) : isWithdrawn ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                fullWidth: true,
                size: "small",
                variant: "contained",
                disabled: true,
                children: t('plugin_ito_withdrawn')
            }) : null
        }));
    };
    return poolToken && exchangeTokens ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.top,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            className: classes.root,
            variant: "outlined",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.iconbar,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                        classes: {
                            icon: classes.icon
                        },
                        address: poolToken.address,
                        logoURI: poolToken.logoURI
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.header,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.title,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            color: "textPrimary",
                                            className: classes.ellipsis,
                                            children: title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.date,
                                            variant: "body2",
                                            color: "textSecondary",
                                            children: t('plugin_ito_list_start_date', {
                                                date: (0,format/* default */.Z)(pool.start_time, 'yyyy-MM-dd HH:mm:ss')
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.date,
                                            variant: "body2",
                                            color: "textSecondary",
                                            children: t('plugin_ito_list_end_date', {
                                                date: (0,format/* default */.Z)(pool.end_time, 'yyyy-MM-dd HH:mm:ss')
                                            })
                                        }),
                                        settings/* debugModeSetting.value */.vv.value ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.date,
                                            variant: "body2",
                                            color: "textSecondary",
                                            children: t('plugin_ito_password', {
                                                password: pool.password === '' ? 'no password' : pool.password
                                            })
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.button,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StatusButton, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.progress,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress/* default */.Z, {
                                variant: "determinate",
                                value: progress
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.price,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    component: "span",
                                    children: [
                                        t('plugin_ito_list_sold_total'),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            color: "textPrimary",
                                            component: "span",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                value: bignumber_default().sum(...exchangeOutVolumes),
                                                decimals: poolToken.decimals,
                                                formatter: formatter/* formatBalance */.az
                                            })
                                        }),
                                        ' ',
                                        poolToken.symbol
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    component: "span",
                                    children: [
                                        t('plugin_ito_list_total'),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            color: "textPrimary",
                                            component: "span",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                value: pool.total,
                                                decimals: poolToken.decimals,
                                                formatter: formatter/* formatBalance */.az
                                            })
                                        }),
                                        ' ',
                                        poolToken.symbol
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.details,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                                component: Paper/* default */.Z,
                                className: classes.table,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
                                    size: "small",
                                    stickyHeader: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_type')
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_price')
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_sold')
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_got')
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                                            children: exchangeTokens.map((token, index)=>{
                                                var ref, ref1;
                                                /*#__PURE__*/ return (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            style: {
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: (0,utils_address/* isSameAddress */.Wr)(token.address, NATIVE_TOKEN_ADDRESS) ? (ref = (0,chainDetailed/* getChainDetailed */.$G)(token.chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.symbol : token.symbol
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            children: [
                                                                (0,formatter/* formatBalance */.az)(new (bignumber_default())(pool.exchange_amounts[index * 2]).dividedBy(pool.exchange_amounts[index * 2 + 1]).shiftedBy(poolToken.decimals - exchangeTokens[index].decimals).shiftedBy(exchangeTokens[index].decimals).integerValue(), token.decimals, 6),
                                                                ' ',
                                                                (0,utils_address/* isSameAddress */.Wr)(token.address, NATIVE_TOKEN_ADDRESS) ? (ref1 = (0,chainDetailed/* getChainDetailed */.$G)(token.chainId)) === null || ref1 === void 0 ? void 0 : ref1.nativeCurrency.symbol : token.symbol,
                                                                ' ',
                                                                "/ ",
                                                                poolToken.symbol
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                                value: exchangeOutVolumes[index],
                                                                decimals: poolToken.decimals,
                                                                significant: 6,
                                                                symbol: poolToken.symbol,
                                                                formatter: formatter/* formatBalance */.az
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                                value: exchange_in_volumes[index],
                                                                decimals: token.decimals,
                                                                significant: 6,
                                                                symbol: token.symbol,
                                                                formatter: formatter/* formatBalance */.az
                                                            })
                                                        })
                                                    ]
                                                }, index);
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }) : null;
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PoolList.tsx








const PoolList_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            height: '100%',
            overflow: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
);
function PoolList(props) {
    const { classes  } = PoolList_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,useAccount/* useAccount */.m)();
    const { value ={
        loadMore: true,
        pools: []
    } , loading , retry  } = useAllPoolsAsSeller(account);
    const { pools  } = value;
    const containerRef = (0,react.useRef)(null);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        ref: containerRef,
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
        }) : pools.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            color: "textSecondary",
            className: classes.content,
            children: t('no_data')
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.content,
            children: [
                pools.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PoolInList, {
                        ...x,
                        onSend: props.onSend,
                        onRetry: retry
                    }, x.pool.pid)
                ),
                loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {}) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(90495);
// EXTERNAL MODULE: ../web3-shared/evm/constants/specific.ts
var specific = __webpack_require__(5919);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(47930);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useFill.ts











function useFillCallback(poolSettings) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { contract: ITO_Contract  } = (0,useITO_Contract/* useITO_Contract */.k)();
    const [fillState, setFillState] = (0,useTransactionState/* useTransactionState */.p)();
    const [fillSettings, setFillSettings] = (0,react.useState)(poolSettings);
    const paramResult = useFillParams(poolSettings);
    const fillCallback = (0,react.useCallback)(async ()=>{
        if (!poolSettings) {
            setFillState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        const { password , startTime , endTime , token , unlockTime  } = poolSettings;
        if (!token || !ITO_Contract || !paramResult) {
            setFillState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        const { params , paramsObj  } = paramResult;
        if (!checkParams(paramsObj, setFillState)) return;
        // error: unable to sign password
        let signedPassword = '';
        try {
            signedPassword = await web3.eth.personal.sign(password, account, '');
        } catch  {
            signedPassword = '';
        }
        if (!signedPassword) {
            setFillState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error(t('plugin_wallet_fail_to_sign'))
            });
            return;
        }
        params[0] = lib_default().sha3(signedPassword);
        // the given settings is valid
        setFillSettings({
            ...poolSettings,
            startTime: new Date(Math.floor(startTime.getTime() / 1000) * 1000),
            endTime: new Date(Math.floor(endTime.getTime() / 1000) * 1000),
            unlockTime: unlockTime ? new Date(Math.floor(unlockTime.getTime() / 1000) * 1000) : undefined,
            password: signedPassword,
            exchangeAmounts: paramsObj.exchangeAmountsDivided.flatMap((x)=>x
            ).map((y)=>y.toFixed()
            )
        });
        // start waiting for provider to confirm tx
        setFillState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        const config = {
            from: account,
            gas: await ITO_Contract.methods.fill_pool(...params).estimateGas({
                from: account
            }).catch((error)=>{
                setFillState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                return;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            ITO_Contract.methods.fill_pool(...params).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setFillState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setFillState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        web3,
        account,
        chainId,
        ITO_Contract,
        poolSettings,
        paramResult,
        setFillState
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setFillState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        fillSettings,
        fillState,
        fillCallback,
        resetCallback
    ];
}
function useFillParams(poolSettings) {
    const { contract: ITO_Contract  } = (0,useITO_Contract/* useITO_Contract */.k)();
    const account = (0,useAccount/* useAccount */.m)();
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!poolSettings || !ITO_Contract) return null;
        const { startTime , endTime , title , name , token , total , limit , qualificationAddress , unlockTime , regions , exchangeAmounts: exchangeAmountsUnsorted , exchangeTokens: exchangeTokensUnsorted ,  } = poolSettings;
        // sort amounts and tokens
        const sorted = exchangeAmountsUnsorted.map((x, i)=>({
                amount: x,
                token: exchangeTokensUnsorted[i]
            })
        ).sort((unsortedA, unsortedB)=>(0,helpers/* sortTokens */.xT)(unsortedA.token, unsortedB.token)
        );
        const exchangeAmounts = sorted.map((x)=>x.amount
        );
        const exchangeTokens = sorted.map((x)=>x.token
        );
        const startTime_ = Math.floor((startTime.getTime() - ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000);
        const endTime_ = Math.floor((endTime.getTime() - ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000);
        const unlockTime_ = unlockTime ? Math.floor((unlockTime.getTime() - ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000) : 0;
        const now = Math.floor((Date.now() - ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000);
        var _decimals;
        const ONE_TOKEN = base_src/* ONE.shiftedBy */.ry.shiftedBy((_decimals = token.decimals) !== null && _decimals !== void 0 ? _decimals : 0);
        const exchangeAmountsDivided = exchangeAmounts.map((x, i)=>{
            const amount = new (bignumber_default())(x);
            const divisor = (0,helpers/* gcd */.th)(ONE_TOKEN, amount);
            return [
                amount.dividedToIntegerBy(divisor),
                ONE_TOKEN.dividedToIntegerBy(divisor)
            ];
        });
        const totalAmount = new (bignumber_default())(total);
        const invalidTokenAt = exchangeAmountsDivided.findIndex(([tokenAmountA, tokenAmountB])=>totalAmount.multipliedBy(tokenAmountA).dividedToIntegerBy(tokenAmountB).isZero()
        );
        const paramsObj = {
            // #region tx function params
            password: specific/* FAKE_SIGN_PASSWORD */.DJ,
            startTime: startTime_,
            endTime: endTime_,
            message: [
                name,
                title,
                regions
            ].join(ITO_constants/* MSG_DELIMITER */.Z3),
            exchangeAddrs: exchangeTokens.map((x)=>x.address
            ),
            ratios: exchangeAmountsDivided.flatMap((x)=>x
            ).map((y)=>y.toFixed()
            ),
            unlockTime: unlockTime_,
            tokenAddrs: token.address,
            total,
            limit,
            qualificationAddress,
            // #endregion
            // #region params for FE verify and fill settings
            exchangeAmountsDivided,
            now,
            invalidTokenAt,
            exchangeAmounts,
            exchangeTokens,
            token
        };
        if (!checkParams(paramsObj)) return null;
        const params = Object.values((0,omit/* default */.Z)(paramsObj, [
            'exchangeAmountsDivided',
            'now',
            'invalidTokenAt',
            'exchangeAmounts',
            'exchangeTokens',
            'token', 
        ]));
        return {
            params,
            paramsObj
        };
    }, [
        poolSettings
    ]).value;
}
function checkParams(paramsObj, setFillState) {
    // error: the start time before BASE TIMESTAMP
    if (paramsObj.startTime < 0) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Invalid start time.')
        });
        return false;
    }
    // error: the end time before BASE TIMESTAMP
    if (paramsObj.endTime < 0) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Invalid end time.')
        });
        return false;
    }
    // error: the unlock time before BASE TIMESTAMP
    if (paramsObj.unlockTime < 0) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Invalid unlock time.')
        });
        return false;
    }
    // error: the start time after the end time
    if (paramsObj.startTime >= paramsObj.endTime) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('The start date should before the end date.')
        });
        return false;
    }
    // error: the end time before now
    if (paramsObj.endTime <= paramsObj.now) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('The end date should be a future date.')
        });
        return false;
    }
    // error: unlock time before end time
    if (paramsObj.endTime >= paramsObj.unlockTime && paramsObj.unlockTime !== 0) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('The unlock date should be later than end date.')
        });
        return false;
    }
    // error: limit greater than the total supply
    if ((0,base_src/* isGreaterThan */.T1)(paramsObj.limit, paramsObj.total)) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Limits should less than the total supply.')
        });
        return false;
    }
    // error: exceed the max available total supply
    if ((0,base_src/* isGreaterThan */.T1)(paramsObj.total, '2e128')) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Exceed the max available total supply')
        });
        return false;
    }
    // error: The size of amounts and the size of tokens not match
    if (paramsObj.exchangeAmounts.length !== paramsObj.exchangeTokens.length) {
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Cannot match amounts with tokens.')
        });
        return false;
    }
    // error: token amount is not enough for dividing into integral pieces
    if (paramsObj.invalidTokenAt >= 0) {
        var _symbol, _symbol1;
        setFillState === null || setFillState === void 0 ? void 0 : setFillState({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error(`Cannot swap enough ${(_symbol = paramsObj.token.symbol) !== null && _symbol !== void 0 ? _symbol : ''} out with ${(_symbol1 = paramsObj.exchangeTokens[paramsObj.invalidTokenAt].symbol) !== null && _symbol1 !== void 0 ? _symbol1 : ''}`)
        });
        return false;
    }
    return true;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Launch.js
var Launch = __webpack_require__(4600);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Repeat.js
var Repeat = __webpack_require__(18655);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ConfirmDialog.tsx













const useSwapItemStyles = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});
function SwapItem(props) {
    const { token , swap , swapAmount  } = props;
    const [exchange, setExchange] = (0,react.useState)(false);
    const { classes  } = useSwapItemStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const amount_ = (0,formatter/* formatBalance */.az)(swapAmount || '0', swap === null || swap === void 0 ? void 0 : swap.decimals);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                color: "textPrimary",
                children: t('plugin_ito_swap_title', {
                    swap: exchange ? swap === null || swap === void 0 ? void 0 : swap.symbol : token === null || token === void 0 ? void 0 : token.symbol,
                    token: exchange ? token === null || token === void 0 ? void 0 : token.symbol : swap === null || swap === void 0 ? void 0 : swap.symbol,
                    amount: exchange ? base_src/* ONE.dividedBy */.ry.dividedBy(amount_).toFixed() : amount_
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                onClick: ()=>setExchange(!exchange)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                    size: "large",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Repeat/* default */.Z, {
                        fontSize: "small"
                    })
                })
            })
        ]
    }));
}
const ConfirmDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            flexGrow: 1
        },
        title: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.primary,
            fontSize: 18
        },
        line: {
            display: 'flex',
            padding: theme.spacing(1)
        },
        data: {
            padding: theme.spacing(1),
            textAlign: 'right',
            color: theme.palette.text.primary
        },
        label: {
            padding: theme.spacing(1),
            textAlign: 'left',
            color: theme.palette.text.secondary,
            wordBreak: 'keep-all'
        },
        button: {
            padding: theme.spacing(2),
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                padding: theme.spacing(0, 0, 1, 0)
            }
        },
        link: {
            padding: 0,
            marginLeft: theme.spacing(0.5),
            marginTop: 2
        },
        gasEstimation: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            cursor: 'pointer',
            '& > p': {
                marginRight: 5,
                color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
            }
        }
    })
);
function ConfirmDialog(props) {
    var ref7, ref1, ref2, ref3, ref4, ref5, ref6;
    const { poolSettings , onDone , onBack , onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ConfirmDialog_useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { DEFAULT_QUALIFICATION2_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const showQualification = (poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.advanceSettingData.contract) && (poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.qualificationAddress) !== DEFAULT_QUALIFICATION2_ADDRESS;
    const stop = (0,react.useCallback)((ev)=>ev.stopPropagation()
    , []);
    (0,react.useEffect)(()=>{
        var ref;
        if ((poolSettings === null || poolSettings === void 0 ? void 0 : (ref = poolSettings.token) === null || ref === void 0 ? void 0 : ref.chainId) !== chainId) onClose();
    }, [
        onClose,
        chainId,
        poolSettings
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            spacing: 0,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h3",
                        className: classes.title,
                        component: "h3",
                        color: "textPrimary",
                        children: poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_sell_token')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                        className: classes.data,
                        style: {
                            display: 'flex',
                            justifyContent: 'flex-end'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                component: "span",
                                children: poolSettings === null || poolSettings === void 0 ? void 0 : (ref7 = poolSettings.token) === null || ref7 === void 0 ? void 0 : ref7.symbol
                            }),
                            (0,utils_address/* isNativeTokenAddress */.qw)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.token) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: (0,pipes/* resolveTokenLinkOnExplorer */.yW)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.token),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: stop,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch/* default */.Z, {
                                    fontSize: "small"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_sell_total_amount')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.total,
                                decimals: poolSettings === null || poolSettings === void 0 ? void 0 : (ref1 = poolSettings.token) === null || ref1 === void 0 ? void 0 : ref1.decimals,
                                symbol: poolSettings === null || poolSettings === void 0 ? void 0 : (ref2 = poolSettings.token) === null || ref2 === void 0 ? void 0 : ref2.symbol,
                                formatter: formatter/* formatBalance */.az
                            })
                        })
                    })
                }),
                poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.exchangeTokens.filter(Boolean).map((item, index)=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                        children: [
                            index === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 1,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                    className: classes.label,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body1",
                                        color: "textSecondary",
                                        children: t('plugin_ito_sell_price')
                                    })
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: index === 0 ? 11 : 12,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapItem, {
                                    token: poolSettings.token,
                                    swap: item,
                                    swapAmount: poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.exchangeAmounts[index]
                                })
                            })
                        ]
                    }, index));
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_allocation_per_wallet_title')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.limit,
                                decimals: poolSettings === null || poolSettings === void 0 ? void 0 : (ref3 = poolSettings.token) === null || ref3 === void 0 ? void 0 : ref3.decimals,
                                symbol: poolSettings === null || poolSettings === void 0 ? void 0 : (ref4 = poolSettings.token) === null || ref4 === void 0 ? void 0 : ref4.symbol,
                                formatter: formatter/* formatBalance */.az
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_begin_time_title')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: (0,format/* default */.Z)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.startTime, 'yyyy-MM-dd HH:mm:ss')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_end_time_title')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: (0,format/* default */.Z)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.endTime, 'yyyy-MM-dd HH:mm:ss')
                        })
                    })
                }),
                showQualification ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.label,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_ito_qualification_label')
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.data,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.qualificationAddress),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                            address: poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.qualificationAddress,
                                            size: 4,
                                            formatter: formatter/* formatEthereumAddress */.j8
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }) : null,
                (poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.regions) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.label,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_ito_region_confirm_label')
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.data,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        decodeRegionCode(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.regions).length,
                                        "/",
                                        regionCodes.length
                                    ]
                                })
                            })
                        })
                    ]
                }) : null,
                (poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.unlockTime) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.label,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_ito_unlock_time')
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.data,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: (0,format/* default */.Z)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.unlockTime, 'yyyy-MM-dd HH:mm:ss')
                                })
                            })
                        })
                    ]
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h5",
                        className: classes.title,
                        component: "p",
                        children: t('plugin_ito_send_tip')
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    lg: 6,
                    xs: 12,
                    className: classes.button,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        fullWidth: true,
                        variant: "outlined",
                        onClick: onBack,
                        children: t('plugin_ito_back')
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    lg: 6,
                    xs: 12,
                    className: classes.button,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        fullWidth: true,
                        variant: "contained",
                        onClick: onDone,
                        children: t('plugin_ito_send_text', {
                            total: (0,formatter/* formatBalance */.az)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.total, poolSettings === null || poolSettings === void 0 ? void 0 : (ref5 = poolSettings.token) === null || ref5 === void 0 ? void 0 : ref5.decimals),
                            symbol: poolSettings === null || poolSettings === void 0 ? void 0 : (ref6 = poolSettings.token) === null || ref6 === void 0 ? void 0 : ref6.symbol
                        })
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set.js
var set = __webpack_require__(24730);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var minds_com_base = __webpack_require__(65375);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/CompositionDialog.tsx
























const CompositionDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        content: {
            ...snsId === minds_com_base/* MINDS_ID */.fN ? {
                minWidth: 600
            } : {},
            position: 'relative',
            paddingTop: 50
        },
        tabs: {
            top: 0,
            left: 0,
            right: 0,
            position: 'absolute'
        }
    })
);
var ITOCreateFormPageStep;
(function(ITOCreateFormPageStep) {
    ITOCreateFormPageStep["NewItoPage"] = 'new-ito';
    ITOCreateFormPageStep["ConfirmItoPage"] = 'confirm-item';
})(ITOCreateFormPageStep || (ITOCreateFormPageStep = {}));
function CompositionDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { classes  } = CompositionDialog_useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    });
    const { attachMetadata , dropMetadata  } = (0,src/* useCompositionContext */.Cp)();
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    // #region step
    const [step, setStep] = (0,react.useState)(ITOCreateFormPageStep.NewItoPage);
    const onNext = (0,react.useCallback)(()=>{
        if (step === ITOCreateFormPageStep.NewItoPage) setStep(ITOCreateFormPageStep.ConfirmItoPage);
    }, [
        step
    ]);
    const onBack = (0,react.useCallback)(()=>{
        if (step === ITOCreateFormPageStep.ConfirmItoPage) setStep(ITOCreateFormPageStep.NewItoPage);
    }, [
        step
    ]);
    // #endregion
    const [poolSettings, setPoolSettings] = (0,react.useState)();
    // #region blocking
    const [fillSettings, fillState, fillCallback, resetFillCallback] = useFillCallback(poolSettings);
    const onDone = (0,react.useCallback)(()=>{
        fillCallback();
    }, [
        fillCallback
    ]);
    // #endregion
    const { closeDialog: closeWalletStatusDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    const { setDialog: setTransactionDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        var ref, ref1;
        if (ev.open) return;
        // reset state
        resetFillCallback();
        // no contract is available
        if (!ITO2_CONTRACT_ADDRESS) return;
        // the settings is not available
        if (!(fillSettings === null || fillSettings === void 0 ? void 0 : fillSettings.token)) return;
        // early return happened
        if (fillState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
        const { receipt  } = fillState;
        var _returnValues;
        const FillSuccess = (_returnValues = (ref = receipt.events) === null || ref === void 0 ? void 0 : ref.FillSuccess.returnValues) !== null && _returnValues !== void 0 ? _returnValues : {};
        var ref2;
        // assemble JSON payload
        const payload = {
            contract_address: ITO2_CONTRACT_ADDRESS,
            pid: FillSuccess.id,
            password: fillSettings.password,
            message: FillSuccess.message,
            limit: fillSettings.limit,
            total: FillSuccess.total,
            total_remaining: FillSuccess.total,
            seller: {
                address: FillSuccess.creator
            },
            chain_id: chainId,
            start_time: fillSettings.startTime.getTime(),
            end_time: fillSettings.endTime.getTime(),
            unlock_time: (ref2 = (ref1 = fillSettings.unlockTime) === null || ref1 === void 0 ? void 0 : ref1.getTime()) !== null && ref2 !== void 0 ? ref2 : 0,
            qualification_address: fillSettings.qualificationAddress,
            creation_time: Number.parseInt(FillSuccess.creation_time, 10) * 1000,
            token: fillSettings.token,
            exchange_amounts: fillSettings.exchangeAmounts,
            exchange_tokens: fillSettings.exchangeTokens,
            regions: fillSettings.regions
        };
        setPoolSettings(undefined);
        onCreateOrSelect(payload);
        onBack();
    });
    // #region tabs
    const state = (0,react.useState)(DialogTabs.create);
    const onCreateOrSelect = (0,react.useCallback)(async (payload)=>{
        if (!payload.password) {
            const [, title] = payload.message.split(ITO_constants/* MSG_DELIMITER */.Z3);
            var ref;
            payload.password = await service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign((ref = lib_default().sha3(title)) !== null && ref !== void 0 ? ref : '', account);
        }
        if (!payload.password) {
            alert('Failed to sign the password.');
            return;
        }
        // To meet the max allowance of the data size of image steganography, we need to
        //  cut off and simplify some properties, such as save the token address string only.
        const payloadDetail = (0,omit/* default */.Z)((0,set/* default */.Z)((0,set/* default */.Z)((0,helpers/* payloadOutMask */._D)(payload), 'token', payload.token.address), 'exchange_tokens', payload.exchange_tokens.map(({ address  })=>({
                address
            })
        )), [
            'creation_time',
            'unlock_time',
            'total_remaining',
            'regions',
            'start_time',
            'end_time',
            'qualification_address', 
        ]);
        if (payload) attachMetadata(ITO_constants/* ITO_MetaKey_2 */.ag, payloadDetail);
        else dropMetadata(ITO_constants/* ITO_MetaKey_2 */.ag);
        closeWalletStatusDialog();
        props.onConfirm(payload);
        // storing the created pool in DB, it helps retrieve the pool password later
        messages/* PluginITO_RPC.discoverPool */.k.discoverPool('', payload);
        const [, setValue] = state;
        setValue(DialogTabs.create);
    }, [
        account,
        chainId,
        props.onConfirm,
        state
    ]);
    const onClose = (0,react.useCallback)(()=>{
        const [, setValue] = state;
        setStep(ITOCreateFormPageStep.NewItoPage);
        setPoolSettings(undefined);
        setValue(DialogTabs.create);
        props.onClose();
    }, [
        props,
        state
    ]);
    const tabProps = {
        tabs: [
            {
                label: t('plugin_ito_create_new'),
                children: (0,theme_src/* usePortalShadowRoot */.ad)(()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CreateForm, {
                        onNext: onNext,
                        onClose: onClose,
                        origin: poolSettings,
                        onChangePoolSettings: setPoolSettings
                    })
                ),
                sx: {
                    p: 0
                }
            },
            {
                label: t('plugin_ito_select_existing'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolList, {
                    onSend: onCreateOrSelect
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state
    };
    // #endregion
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (!(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.token) || fillState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            state: fillState,
            summary: t('plugin_ito_transaction_dialog_summary', {
                amount: (0,formatter/* formatBalance */.az)(poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.total, poolSettings === null || poolSettings === void 0 ? void 0 : poolSettings.token.decimals),
                symbol: poolSettings.token.symbol
            })
        });
    }, [
        fillState,
        poolSettings,
        setTransactionDialog
    ]);
    // #endregion
    (0,react.useEffect)(()=>{
        if (!ITO2_CONTRACT_ADDRESS) onClose();
    }, [
        ITO2_CONTRACT_ADDRESS,
        onClose
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        disableBackdropClick: true,
        open: props.open,
        title: t('plugin_ito_display_name'),
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                step === ITOCreateFormPageStep.NewItoPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                    classes: {
                        tabs: classes.tabs
                    },
                    height: 540,
                    ...tabProps
                }) : null,
                step === ITOCreateFormPageStep.ConfirmItoPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
                    poolSettings: poolSettings,
                    onBack: onBack,
                    onDone: onDone,
                    onClose: onClose
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ../icons/plugins/Markets.tsx
var Markets = __webpack_require__(72078);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/index.tsx













const SNSAdaptor_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center'
        },
        span: {
            paddingLeft: theme.spacing(1)
        }
    })
);
const sns = {
    ...ITO_base/* base */.u,
    init (signal) {},
    DecryptedInspector (props) {
        const payload = (0,helpers/* ITO_MetadataReader */.fF)(props.message.meta);
        (0,src/* usePluginWrapper */.fI)(payload.ok);
        if (!payload.ok) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
            chainId: payload.val.chain_id,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
                payload: (0,set/* default */.Z)((0,helpers/* payloadIntoMask */._x)(payload.val), 'token', payload.val.token)
            })
        }));
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            ITO_constants/* ITO_MetaKey_1 */.uJ,
            onAttached_ITO
        ],
        [
            ITO_constants/* ITO_MetaKey_2 */.ag,
            onAttached_ITO
        ], 
    ]),
    CompositionDialogEntry: {
        dialog ({ open , onClose  }) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CompositionDialog, {
                open: open,
                onConfirm: onClose,
                onClose: onClose
            }));
        },
        label: {
            fallback: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Markets/* MarketsIcon */.S, {
                        style: {
                            width: 16,
                            height: 16
                        }
                    }),
                    "ITO"
                ]
            })
        }
    }
};
function onAttached_ITO(payload) {
    return {
        text: /*#__PURE__*/ (0,jsx_runtime.jsx)(Badge, {
            payload: payload
        })
    };
}
function Badge({ payload  }) {
    const { classes  } = SNSAdaptor_useStyles();
    const { value: tokenDetailed , loading: loadingToken  } = (0,useFungibleTokenDetailed/* useFungibleTokenDetailed */.j)(types/* EthereumTokenType.ERC20 */.Dr.ERC20, payload.token);
    const balance = (0,formatter/* formatBalance */.az)(payload.total, tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals);
    var ref, ref1;
    const symbol = (ref1 = (ref = tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.symbol) !== null && ref !== void 0 ? ref : tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.name) !== null && ref1 !== void 0 ? ref1 : 'Token';
    var ref2;
    const sellerName = payload.seller.name ? payload.seller.name : (ref2 = payload.message.split(ITO_constants/* MSG_DELIMITER */.Z3)[0]) !== null && ref2 !== void 0 ? ref2 : (0,formatter/* formatEthereumAddress */.j8)(payload.seller.address, 4);
    return loadingToken ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ItoLabelIcon, {
                size: 14
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: classes.span,
                children: [
                    "A ITO with ",
                    balance,
                    " $",
                    symbol,
                    " from ",
                    sellerName
                ]
            })
        ]
    });
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 65375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 6728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ DateTimePanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67182);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92597);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57753);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    datetime: {
        '&::-webkit-calendar-picker-indicator': {
            marginLeft: 0,
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(76048), __webpack_require__.b)})`
        }
    },
    inputLabel: {
        left: 8,
        top: 8
    }
});
function DateTimePanel(props) {
    const { label , date: date1 , onChange , min , max , inputProps , ...rest } = props;
    const GMT = new Date().getTimezoneOffset() / 60 * -1;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...rest,
        label: `${label} ${GMT >= 0 ? `(UTC +${GMT})` : `(UTC ${GMT})`}`,
        value: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(date1, "yyyy-MM-dd'T'HH:mm"),
        onChange: (e)=>{
            const date = new Date(e.currentTarget.value);
            onChange(date);
        },
        InputLabelProps: {
            shrink: true,
            classes: {
                root: classes.inputLabel
            }
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

/***/ 72148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ EthereumChainBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(67937);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAllowTestnet.ts

function useAllowTestnet() {
    return (0,context/* useWeb3StateContext */.N9)().allowTestnet;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(22229);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(83468);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(47906);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(63361);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(63081);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(21202);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumChainBoundary.tsx














const useStyles = (0,src/* makeStyles */.ZL)()(()=>({})
);
function EthereumChainBoundary(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const pluginID = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const plugin = (0,plugin_infra_src/* useActivatedPlugin */.Rc)(pluginID, 'any');
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const allowTestnet = useAllowTestnet();
    const providerType = (0,shared_src/* useValueRef */.E)(settings/* currentProviderSettings */.t1);
    const { noSwitchNetworkTip =false  } = props;
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const expectedChainId = props.chainId;
    const expectedNetwork = (0,chainDetailed/* getChainName */.qz)(expectedChainId);
    const actualChainId = chainId;
    const actualNetwork = (0,chainDetailed/* getChainName */.qz)(actualChainId);
    // if false then it will not guide the user to switch the network
    const isAllowed = (0,chainDetailed/* isChainIdValid */.Ji)(expectedChainId, allowTestnet) && !!account && providerType !== types/* ProviderType.Coin98 */.lP.Coin98;
    // is the actual chain id matched with the expected one?
    const isChainMatched = actualChainId === expectedChainId;
    const isPluginMatched = pluginID === plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    var ref1;
    // is the actual chain id a valid one even if it does not match with the expected one?
    const isValid = (ref1 = props === null || props === void 0 ? void 0 : (ref = props.isValidChainId) === null || ref === void 0 ? void 0 : ref.call(props, actualChainId, expectedChainId)) !== null && ref1 !== void 0 ? ref1 : false;
    const onSwitchChain = (0,react.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,esm/* delay */.gw)(1000);
        if (!isAllowed) return;
        const switchToChain = async ()=>{
            // read the chain detailed from the built-in chain list
            const chainDetailedCAIP = (0,chainDetailed/* getChainDetailedCAIP */.EX)(expectedChainId);
            if (!chainDetailedCAIP) throw new Error('Unknown network type.');
            // if mask wallet was used it can switch network automatically
            if (providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet) {
                await messages/* WalletRPC.updateAccount */.V.updateAccount({
                    chainId: expectedChainId
                });
                return;
            }
            // request ethereum-compatible network
            const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(expectedChainId);
            if (!networkType) return;
            try {
                const overrides = {
                    chainId: expectedChainId,
                    providerType
                };
                await Promise.race([
                    (async ()=>{
                        await (0,esm/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
                        throw new Error('Timeout!');
                    })(),
                    networkType === types/* NetworkType.Ethereum */.td.Ethereum ? service/* default.Ethereum.switchEthereumChain */.ZP.Ethereum.switchEthereumChain(expectedChainId, overrides) : service/* default.Ethereum.addEthereumChain */.ZP.Ethereum.addEthereumChain(chainDetailedCAIP, account, overrides), 
                ]);
                // recheck
                const chainIdHex = await service/* default.Ethereum.getChainId */.ZP.Ethereum.getChainId(overrides);
                if (Number.parseInt(chainIdHex, 16) !== expectedChainId) throw new Error('Failed to switch chain.');
            } catch  {
                throw new Error(`Switch Chain Error: Make sure your wallet is on the ${(0,pipes/* resolveNetworkName */.nW)(networkType)} network.`);
            }
        };
        const switchToPlugin = async ()=>{
            settings_settings/* pluginIDSettings.value */.tR.value = plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
        };
        if (!isChainMatched) await switchToChain();
        if (!isPluginMatched) await switchToPlugin();
    }, [
        account,
        isAllowed,
        isChainMatched,
        isPluginMatched,
        providerType,
        expectedChainId
    ]);
    const { openDialog: openSelectProviderDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    const renderBox = (children)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: props.className,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            sx: !props.disablePadding ? {
                paddingTop: 1,
                paddingBottom: 1
            } : null,
            children: children
        }));
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_connect_wallet_tip')
                })
            }),
            !props.hiddenConnectButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                size: "small",
                sx: {
                    marginTop: 1.5
                },
                onClick: openSelectProviderDialog,
                children: t('plugin_wallet_connect_wallet')
            }) : null
        ]
    }));
    if (isChainMatched && isPluginMatched || isValid) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    }));
    if (!isAllowed) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: t('plugin_wallet_not_available_on', {
                network: actualNetwork
            })
        })
    }));
    if (pluginID !== plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
        var ref2;
        var ref3, _switchButtonStyle;
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: (ref3 = plugin === null || plugin === void 0 ? void 0 : (ref2 = plugin.name) === null || ref2 === void 0 ? void 0 : ref2.fallback) !== null && ref3 !== void 0 ? ref3 : 'Unknown Plugin'
                        })
                    })
                }) : null,
                isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    variant: "contained",
                    size: "small",
                    className: classes.switchButton,
                    sx: (_switchButtonStyle = props.switchButtonStyle) !== null && _switchButtonStyle !== void 0 ? _switchButtonStyle : {
                        marginTop: 1.5
                    },
                    init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_switch_network', {
                            network: expectedNetwork
                        })
                    }),
                    waiting: t('plugin_wallet_switch_network_under_going', {
                        network: expectedNetwork
                    }),
                    complete: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...props.ActionButtonPromiseProps
                }) : null
            ]
        }));
    }
    var _switchButtonStyle1;
    return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualNetwork
                    })
                })
            }) : null,
            isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                variant: "contained",
                size: "small",
                className: classes.switchButton,
                sx: (_switchButtonStyle1 = props.switchButtonStyle) !== null && _switchButtonStyle1 !== void 0 ? _switchButtonStyle1 : {
                    marginTop: 1.5
                },
                init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedNetwork
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedNetwork
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...props.ActionButtonPromiseProps
            }) : null
        ]
    }));
}


/***/ }),

/***/ 7897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ TokenAmountPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(67182);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(3073);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(55673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(58938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Error.js
var Error = __webpack_require__(56345);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
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
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
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
        onDelete: noop/* default */.Z,
        ...ChipProps
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
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
        onDelete: readonly ? undefined : noop/* default */.Z,
        ...ChipProps
    }));
}

;// CONCATENATED MODULE: ./src/web3/UI/TokenAmountPanel.tsx










const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const TokenAmountPanel_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
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
    var ref2;
    const { amount , maxAmount , balance , token , onAmountChange , maxAmountShares =1 , label , disableToken =false , disableBalance =false , MaxChipProps ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(TokenAmountPanel_useStyles(), props);
    const { Utils  } = (0,plugin_infra_src/* useWeb3State */.dM)();
    // #region update amount by self
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
    // #endregion
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: balance,
                                decimals: token.decimals,
                                significant: 6,
                                formatter: Utils === null || Utils === void 0 ? void 0 : Utils.formatBalance
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
                                    root: classnames_default()(classes.max, MaxChipProps === null || MaxChipProps === void 0 ? void 0 : (ref2 = MaxChipProps.classes) === null || ref2 === void 0 ? void 0 : ref2.root),
                                    ...MaxChipProps === null || MaxChipProps === void 0 ? void 0 : MaxChipProps.classes
                                },
                                size: "small",
                                label: "MAX",
                                clickable: true,
                                color: "primary",
                                variant: "outlined",
                                onClick: ()=>{
                                    var ref;
                                    var ref1;
                                    onAmountChange((ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.formatBalance) === null || ref === void 0 ? void 0 : ref.call(Utils, new (bignumber_default())(maxAmount !== null && maxAmount !== void 0 ? maxAmount : balance).dividedBy(maxAmountShares).decimalPlaces(0, 1), token.decimals)) !== null && ref1 !== void 0 ? ref1 : '0');
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

/***/ 84198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useBlockNumber)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22572);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63541);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90495);


/**
 * Get the current block number of current chain
 */ function useBlockNumber(expectedChainId) {
    const defaultChainId = (0,___WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    const web3 = (0,___WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)({
        chainId: expectedChainId !== null && expectedChainId !== void 0 ? expectedChainId : defaultChainId
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return web3.eth.getBlockNumber();
    }, [
        web3
    ]);
}


/***/ }),

/***/ 42624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useFungibleTokenBalance)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95130);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44270);
/* harmony import */ var _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);




function useFungibleTokenBalance(type, address, chainId) {
    const r1 = (0,_useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenBalance */ .h)();
    const r2 = (0,_useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenBalance */ .y)(type === _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : undefined, chainId);
    const type_ = type;
    switch(type_){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type_);
    }
}


/***/ }),

/***/ 34082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useFungibleTokenDetailed)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95130);
/* harmony import */ var _useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14754);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80955);




function useFungibleTokenDetailed(type, address, token) {
    const r1 = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenDetailed */ .J)();
    const r2 = (0,_useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenDetailed */ .k)(type === _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : '', token);
    switch(type){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type);
    }
}


/***/ }),

/***/ 45554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f835dfbca611a92937dd.jpg";

/***/ }),

/***/ 52872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/63923416b1ad2fbbb38f.jpg";

/***/ }),

/***/ 96705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a6690b564780e865be65.jpg";

/***/ }),

/***/ 76048:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/978bf9587a9f8a073309.png";

/***/ })

}]);