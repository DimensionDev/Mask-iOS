"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2009],{

/***/ 44309:
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

/***/ 68043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FA": () => (/* binding */ useMyIdentities),
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity),
/* harmony export */   "fb": () => (/* binding */ useCurrentVisitingIdentity),
/* harmony export */   "hg": () => (/* binding */ useFriendsList)
/* harmony export */ });
/* unused harmony export CurrentIdentitySubscription */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53242);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78144);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3747);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66040);






function useFriendsList() {
    const ref = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.friends */ .EJ.friends);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>ref.values.length ? [
            ...ref.values()
        ] : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_LIST */ .rP
    , [
        ref
    ]);
}
const default_ = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__.ValueRef({
    identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier.unknown */ .WO.unknown
});
function useLastRecognizedIdentity() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized || default_);
}
function useCurrentVisitingIdentity() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.currentVisitingIdentityProvider */ .LM.collecting.currentVisitingIdentityProvider?.recognized || default_);
}
function useMyIdentities() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles */ .EJ.profiles);
}
function useCurrentIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_4__.useSubscription)(CurrentIdentitySubscription);
}
const CurrentIdentitySubscription = {
    getCurrentValue () {
        const all = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles.value */ .EJ.profiles.value;
        const current = (_social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized || default_).value.identifier;
        return all.find((i)=>i.identifier.toText() === current.toText()
        ) || all[0];
    },
    subscribe (sub) {
        const a = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles.addListener */ .EJ.profiles.addListener(sub);
        const b = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized.addListener(sub);
        return ()=>[
                a(),
                b?.()
            ]
        ;
    }
};


/***/ }),

/***/ 77522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30232);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2921);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6823);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27536);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85139);




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
                    height: height,
                    minHeight: height
                }
            }) : null
        ]
    });
};


/***/ }),

/***/ 46054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ./src/plugins/Polls/base.ts
var base = __webpack_require__(23594);
// EXTERNAL MODULE: ./src/plugins/Polls/constants.ts
var constants = __webpack_require__(49374);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(81148);
;// CONCATENATED MODULE: ./src/plugins/Polls/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"question":{"type":"string","title":"question"},"key":{"type":"string","title":"key"},"start_time":{"type":"number","title":"start_time"},"end_time":{"type":"number","title":"end_time"},"options":{"type":"array","title":"options"},"results":{"type":"array","title":"results"},"sender":{"type":"string","title":"sender"},"id":{"type":"string","title":"id"}},"required":["question","key","start_time","end_time","options","results","sender","id"]}');
;// CONCATENATED MODULE: ./src/plugins/Polls/helpers.ts



const PollMetadataReader = (0,typed_message_base/* createTypedMessageMetadataReader */.Bi)(constants/* PLUGIN_META_KEY */.um, schema_namespaceObject);
const renderWithPollMetadata = (0,typed_message_base/* createRenderWithMetadata */.mC)(PollMetadataReader);
if (false) {}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Select/Select.js + 3 modules
var Select = __webpack_require__(75879);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(24294);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(3379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(7284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(24);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(27700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(82240);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/add/index.js
var add = __webpack_require__(80146);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(77522);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(68043);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(20476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(16451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isValid/index.js + 1 modules
var isValid = __webpack_require__(32526);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/formatDistance/index.js + 2 modules
var formatDistance = __webpack_require__(58550);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/index.js + 5 modules
var en_US = __webpack_require__(14235);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/ja/index.js + 5 modules
var ja = __webpack_require__(40111);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/zh-TW/index.js + 5 modules
var zh_TW = __webpack_require__(92998);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/zh-CN/index.js + 6 modules
var zh_CN = __webpack_require__(92120);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/ko/index.js + 5 modules
var ko = __webpack_require__(10916);
;// CONCATENATED MODULE: ./src/plugins/Polls/types.ts
var PollStatus;
(function(PollStatus) {
    PollStatus["Inactive"] = "Inactive";
    PollStatus["Voted"] = "Voted";
    PollStatus["Voting"] = "Voting";
    PollStatus["Closed"] = "Closed";
})(PollStatus || (PollStatus = {}));

// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(97096);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
;// CONCATENATED MODULE: ./src/plugins/Polls/SNSAdaptor/Polls.tsx










const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        card: {
            borderRadius: theme.spacing(1),
            margin: theme.spacing(2, 0),
            padding: theme.spacing(2)
        },
        line: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        status: {
            display: 'flex',
            alignItems: 'center'
        },
        statusText: {
            margin: '3px',
            fontSize: '13px',
            color: theme.palette.primary.main
        },
        option: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            margin: theme.spacing(1, 0),
            padding: theme.spacing(0, 1),
            height: '28px'
        },
        bar: {
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: 100,
            backgroundColor: theme.palette.primary.main,
            opacity: 0.6,
            minWidth: theme.spacing(1),
            height: '28px',
            borderRadius: theme.spacing(0.8)
        },
        text: {
            zIndex: 101,
            lineHeight: '28px',
            margin: '0 4px'
        },
        deadline: {
            color: '#657786'
        }
    })
);
function PollCardUI(props) {
    const { poll , onClick , vote , status: status1  } = props;
    const { classes  } = useStyles();
    const isClosed = Date.now() > poll.end_time;
    const { t  } = (0,utils/* useI18N */.M1)();
    const lang = (0,utils/* useLanguage */.ZK)();
    const totalVotes = poll.results.reduce((accumulator, currentValue)=>accumulator + currentValue
    );
    const getDeadline = (date)=>{
        const deadline = new Date(date);
        if ((0,isValid/* default */.Z)(deadline)) {
            const localeMapping = ()=>{
                if (lang === public_api_src/* SupportedLanguages.enUS */.iu.enUS) return en_US/* default */.Z;
                if (lang === public_api_src/* SupportedLanguages.jaJP */.iu.jaJP) return ja/* default */.Z;
                if (lang === public_api_src/* SupportedLanguages.zhTW */.iu.zhTW) return zh_TW/* default */.Z;
                if (lang === public_api_src/* SupportedLanguages.zhCN */.iu.zhCN) return zh_CN/* default */.Z;
                if (lang === public_api_src/* SupportedLanguages.koKR */.iu.koKR) return ko/* default */.Z;
                (0,esm/* safeUnreachable */.P)(lang);
                return en_US/* default */.Z;
            };
            const time = (0,formatDistance/* default */.Z)(poll.start_time, poll.end_time, {
                locale: localeMapping()
            });
            return t('plugin_poll_deadline', {
                time
            });
        } else {
            return t('plugin_poll_length_unknown');
        }
    };
    const renderPollStatusI18n = (status)=>{
        switch(status){
            case PollStatus.Voting:
                return t('plugin_poll_status_voting');
            case PollStatus.Voted:
                return t('plugin_poll_status_voted');
            default:
                return t('plugin_poll_status_closed');
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.card,
        onClick: ()=>onClick?.()
        ,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                variant: "h5",
                className: classes.line,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            fontSize: '16px'
                        },
                        children: poll.question
                    }),
                    !status1 || status1 === PollStatus.Inactive ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.status,
                        children: [
                            status1 === PollStatus.Voting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                size: 18
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.statusText,
                                children: renderPollStatusI18n(status1)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                children: poll.options.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        className: classes.option,
                        onClick: ()=>{
                            vote?.(poll, index);
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    display: 'flex'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.bar,
                                        style: {
                                            width: `${poll.results[index] / totalVotes * 100}%`
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.text,
                                        children: option
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.text,
                                children: poll.results[index]
                            })
                        ]
                    }, index)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                classes: {
                    root: classes.deadline
                },
                children: isClosed ? t('plugin_poll_status_closed') : getDeadline(poll.end_time)
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/plugins/Polls/messages.ts
var messages = __webpack_require__(14046);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
;// CONCATENATED MODULE: ./src/plugins/Polls/SNSAdaptor/PollsDialog.tsx














const useNewPollStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        menuPaper: {
            height: 200
        },
        line: {
            display: 'flex',
            margin: theme.spacing(1)
        },
        item: {
            flex: 1,
            margin: theme.spacing(1)
        },
        pollWrap: {
            border: '1px solid #ccd6dd',
            borderRadius: '10px',
            margin: theme.spacing(1),
            padding: theme.spacing(1)
        },
        optionsWrap: {
            position: 'relative',
            '& >div': {
                width: '80%',
                margin: theme.spacing(2)
            }
        },
        addButton: {
            position: 'absolute',
            bottom: '0',
            right: '10px'
        },
        loading: {
            position: 'absolute',
            left: '50%',
            top: '50%'
        },
        whiteColor: {
            color: '#fff'
        }
    })
);
function NewPollUI(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useNewPollStyles(), props);
    const [loading, setLoading] = props.loading;
    const [question, setQuestion] = (0,react.useState)('');
    const [options1, setOptions] = (0,react.useState)([
        '',
        ''
    ]);
    const [days, setDays] = (0,react.useState)(1);
    const [hours, setHours] = (0,react.useState)(0);
    const [minutes, setMinutes] = (0,react.useState)(0);
    const { t  } = (0,utils/* useI18N */.M1)();
    const handleOptionsInput = (index, value)=>{
        setOptions(options1.map((option, i)=>i === index ? value : option
        ));
    };
    const addNewOption = ()=>{
        setOptions(options1.concat([
            ''
        ]));
    };
    const sendPoll = async ()=>{
        const start_time = new Date();
        const end_time = (0,add/* default */.Z)(start_time, {
            days,
            hours,
            minutes
        });
        setLoading(true);
        messages/* PluginPollRPC.createNewPoll */.p.createNewPoll({
            question,
            options: options1,
            start_time,
            end_time,
            sender: props.senderName,
            id: props.senderFingerprint
        }).then((res)=>{
            setLoading(false);
            props.switchToCreateNewPoll();
        });
    };
    // react hooks are not bound with the function identity but hooks order
    const useSelect = (count, fn, defaultIndex = 0)=>{
        const options = Array.from({
            length: count
        }).fill('');
        return (0,entry/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.Z, {
                variant: "standard",
                MenuProps: {
                    container,
                    anchorOrigin: {
                        horizontal: 'left',
                        vertical: 'bottom'
                    },
                    classes: {
                        paper: classes.menuPaper
                    }
                },
                value: defaultIndex,
                onChange: (e)=>fn(e.target.value)
                ,
                children: options.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                        value: index,
                        children: index
                    }, index)
                )
            })
        );
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                variant: "standard",
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    label: t('plugin_poll_question_hint'),
                    variant: "filled",
                    onChange: (e)=>{
                        setQuestion(e.target?.value);
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.pollWrap,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.optionsWrap,
                        children: [
                            options1.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                                    variant: "standard",
                                    className: classes.line,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                        label: `${t('plugin_poll_options_hint')}${index + 1}`,
                                        variant: "filled",
                                        onChange: (e)=>{
                                            handleOptionsInput(index, e.target?.value);
                                        }
                                    })
                                }, index)
                            ),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                size: "large",
                                onClick: addNewOption,
                                classes: {
                                    root: classes.addButton
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {
                                    color: "primary"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                        light: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        className: classes.line,
                        children: t('plugin_poll_length')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.line,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                variant: "filled",
                                className: classes.item,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                        children: t('plugin_poll_length_days')
                                    }),
                                    useSelect(8, setDays, days)
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                variant: "filled",
                                className: classes.item,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                        children: t('plugin_poll_length_hours')
                                    }),
                                    useSelect(25, setHours, hours)
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                variant: "filled",
                                className: classes.item,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                        children: t('plugin_poll_length_minutes')
                                    }),
                                    useSelect(61, setMinutes, minutes)
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.line,
                style: {
                    justifyContent: 'flex-end'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    color: "primary",
                    variant: "contained",
                    startIcon: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                        classes: {
                            root: classes.whiteColor
                        },
                        size: 24
                    }) : null,
                    style: {
                        color: '#fff'
                    },
                    onClick: sendPoll,
                    children: t('plugin_poll_send_poll')
                })
            })
        ]
    });
}
function ExistingPollsUI(props) {
    const [polls1, setPolls] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(false);
    const classes = (0,entry/* useStylesExtends */.Bc)(useNewPollStyles(), props);
    (0,react.useEffect)(()=>{
        setLoading(true);
        messages/* PluginPollRPC.getAllExistingPolls */.p.getAllExistingPolls().then((polls)=>{
            setLoading(false);
            const myPolls = [];
            polls.map((poll)=>{
                if (poll.id === props.senderFingerprint) {
                    myPolls.push(poll);
                }
            });
            setPolls(myPolls.reverse());
        });
    }, [
        props.senderFingerprint
    ]);
    const insertPoll = (poll)=>{
        props.onSelectExistingPoll(poll);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.wrapper,
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: 35,
            classes: {
                root: classes.loading
            }
        }) : polls1.map((p)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PollCardUI, {
                onClick: ()=>insertPoll(p)
                ,
                poll: p
            }, p.key)
        )
    });
}
function PollsDialog(props) {
    const state = (0,react.useState)(0);
    const [, setTabState] = state;
    const loading = (0,react.useState)(false);
    const { t  } = (0,utils/* useI18N */.M1)();
    const { attachMetadata , dropMetadata  } = (0,entry_content_script/* useCompositionContext */.Cp)();
    const createNewPoll = ()=>{
        setTabState(1);
    };
    const insertPoll = (data)=>{
        if (data) attachMetadata(constants/* PLUGIN_META_KEY */.um, data);
        else dropMetadata(constants/* PLUGIN_META_KEY */.um);
        props.onClose();
    };
    const senderName = (0,useActivatedUI/* useCurrentIdentity */.Ud)()?.linkedPersona?.nickname;
    const senderFingerprint = (0,useActivatedUI/* useCurrentIdentity */.Ud)()?.linkedPersona?.fingerprint;
    const tabProps = {
        tabs: [
            {
                label: t('plugin_poll_create_new'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NewPollUI, {
                    ...props,
                    loading: loading,
                    switchToCreateNewPoll: createNewPoll,
                    senderName: senderName,
                    senderFingerprint: senderFingerprint
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: t('plugin_poll_select_existing'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExistingPollsUI, {
                    ...props,
                    onSelectExistingPoll: insertPoll,
                    senderFingerprint: senderFingerprint
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* InjectedDialog */.Fl, {
        open: props.open,
        onClose: props.onClose,
        title: t('plugin_poll_display_name'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                height: 450,
                ...tabProps
            })
        })
    });
};

// EXTERNAL MODULE: ../plugin-infra/src/entry-dom.ts + 1 modules
var entry_dom = __webpack_require__(3267);
;// CONCATENATED MODULE: ./src/plugins/Polls/SNSAdaptor/PollsInPost.tsx







function PollsInPost(props) {
    const [status, setStatus] = (0,react.useState)(PollStatus.Inactive);
    const [updatedPoll, setUpdatedPoll] = (0,react.useState)(undefined);
    const vote = (poll, index)=>{
        if (Date.now() <= poll.end_time) {
            setStatus(PollStatus.Voting);
            messages/* PluginPollRPC.vote */.p.vote({
                poll,
                index
            }).then((res)=>{
                setStatus(PollStatus.Voted);
                setUpdatedPoll(res);
            });
        } else {
            setStatus(PollStatus.Closed);
        }
    };
    (0,react.useEffect)(()=>{
        const metadata = PollMetadataReader(props.message.meta);
        if (metadata.ok) {
            const key = metadata.val.key;
            messages/* PluginPollRPC.getPollByKey */.p.getPollByKey({
                key
            }).then((res)=>{
                setUpdatedPoll(res);
            });
        }
    }, [
        props.message.meta
    ]);
    return renderWithPollMetadata(props.message.meta, (r)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(C, {
            poll: updatedPoll ?? r,
            vote: vote,
            status: status
        });
    });
};
const C = (props)=>{
    (0,entry_dom/* usePluginWrapper */.fI)(true, {
        width: 400
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PollCardUI, {
            ...props
        })
    });
};

;// CONCATENATED MODULE: ./src/plugins/Polls/SNSAdaptor/index.tsx






const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Comp(props) {
        const metadata = PollMetadataReader(props.message.meta);
        if (!metadata.ok) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PollsInPost, {
            ...props
        });
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* PLUGIN_META_KEY */.um,
            (meta)=>`a poll of '${meta.question}' from ${meta.sender}`
        ], 
    ]),
    CompositionDialogEntry: {
        label: '\u{1F5F3}\uFE0F Poll',
        dialog: PollsDialog
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 14046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ PluginPollRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49374);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79936);


const PollMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginPollRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(3693), __webpack_require__.e(6690)]).then(__webpack_require__.bind(__webpack_require__, 46690))
, PollMessage.rpc, true);


/***/ })

}]);