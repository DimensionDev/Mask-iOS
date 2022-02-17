(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5672],{

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

/***/ 6609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = window.DOMPurify || (window.DOMPurify = (__webpack_require__(99362)["default"]) || __webpack_require__(99362));

/***/ }),

/***/ 98212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const RefreshIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Refresh', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.433 7.174l.975.683a.5.5 0 01-.13.884L5.89 9.858a.5.5 0 01-.657-.461L5.136 5.84a.5.5 0 01.787-.423l.806.564A8 8 0 114 12h2.001a6 6 0 102.433-4.826z",
        fill: "#1C68F3"
    })
}), '0 0 24 24');


/***/ }),

/***/ 12127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useMyPersonas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(21949);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
;// CONCATENATED MODULE: ./src/utils/comparer.ts
function PersonaComparer(a, b) {
    if (a.createdAt.getTime() !== b.createdAt.getTime()) return false;
    if (a.updatedAt.getTime() !== b.updatedAt.getTime()) return false;
    if (a.fingerprint !== b.fingerprint) return false;
    if (a.hasPrivateKey !== b.hasPrivateKey) return false;
    if (!a.identifier.equals(b.identifier)) return false;
    // simple check
    if (a.linkedProfiles.size !== b.linkedProfiles.size) return false;
    if (a.nickname !== b.nickname) return false;
    return true;
}
function PersonaArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    if (Object.getOwnPropertySymbols(a) || Object.getOwnPropertySymbols(b)) return false;
    return a.every((persona, index)=>PersonaComparer(persona, b[index])
    );
}

// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(86865);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js
var debounce = __webpack_require__(89208);
;// CONCATENATED MODULE: ./src/components/DataSource/useMyPersonas.ts






let isLoading;
const independentRef = {
    myPersonasRef: new umd.ValueRef([], PersonaArrayComparer)
};
{
    const query = ()=>{
        return service/* default.Identity.queryMyPersonas */.ZP.Identity.queryMyPersonas().then((p)=>{
            independentRef.myPersonasRef.value = p.filter((x)=>!x.uninitialized
            );
            isLoading = null;
            service/* default.Helper.__deprecated__setStorage */.ZP.Helper.__deprecated__setStorage('mobileIsMyPersonasInitialized', independentRef.myPersonasRef.value.length > 0);
        });
    };
    const debounceQuery = (0,debounce/* default */.Z)(query, 500, {
        trailing: true
    });
    isLoading = query();
    messages/* MaskMessages.events.ownPersonaChanged.on */.q.events.ownPersonaChanged.on(debounceQuery);
}function useMyPersonas() {
    if (isLoading) throw isLoading;
    return (0,src/* useValueRef */.E)(independentRef.myPersonasRef);
}


/***/ }),

/***/ 38394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ usePersonaConnectStatus)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8267);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87050);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29980);
/* harmony import */ var _InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24957);
/* harmony import */ var _useActivatedUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68836);
/* harmony import */ var _useMyPersonas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12127);









const createPersona = ()=>{
    _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Welcome.openOptionsPage */ .ZP.Welcome.openOptionsPage(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .DashboardRoutes.Setup */ .vq.Setup);
};
const connectPersona = async ()=>{
    const currentPersonaIdentifier = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier();
    _settings_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentSetupGuideStatus */ .AI[_social_network__WEBPACK_IMPORTED_MODULE_5__.activatedSocialNetworkUI.networkIdentifier].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
        status: _InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_6__/* .SetupGuideStep.FindUsername */ .s.FindUsername,
        persona: currentPersonaIdentifier === null || currentPersonaIdentifier === void 0 ? void 0 : currentPersonaIdentifier.toText()
    });
};
function usePersonaConnectStatus() {
    const personas = (0,_useMyPersonas__WEBPACK_IMPORTED_MODULE_8__/* .useMyPersonas */ .n)();
    const lastRecognized = (0,_useActivatedUI__WEBPACK_IMPORTED_MODULE_7__/* .useLastRecognizedIdentity */ .FB)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const id = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(_social_network__WEBPACK_IMPORTED_MODULE_5__.activatedSocialNetworkUI.networkIdentifier, lastRecognized.identifier.userId);
        let connected = false;
        personas.forEach((p)=>{
            p.identifier;
            if (p.linkedProfiles.get(id)) {
                connected = true;
            }
        });
        const action = !personas.length ? createPersona : !connected ? connectPersona : null;
        return {
            connected,
            action,
            hasPersona: !!personas.length
        };
    }, [
        personas,
        lastRecognized,
        _social_network__WEBPACK_IMPORTED_MODULE_5__.activatedSocialNetworkUI
    ]);
}


/***/ }),

/***/ 41071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskPluginWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40675);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40201);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80640);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29980);
/* harmony import */ var _resources_MaskIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8231);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76342);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13138);
/* harmony import */ var _components_DataSource_usePersonaConnectStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38394);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76108);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55218);










const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        card: {
            margin: theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            border: `1px solid ${theme.palette.secondaryDivider}`,
            cursor: 'default',
            ...(0,_social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__/* .isTwitter */ .L3)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI) ? {
                borderRadius: 15,
                overflow: 'hidden'
            } : null
        },
        header: {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(2)
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.spacing(1.5)
        },
        action: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        body: {
            borderTop: `1px solid ${theme.palette.secondaryDivider}`,
            padding: theme.spacing(2)
        },
        button: {
            color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.twitterButtonText */ .ZN.twitterButtonText,
            '&,&:hover': {
                background: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.twitterButton */ .ZN.twitterButton
            }
        }
    };
});
function MaskPluginWrapper(props) {
    const { classes  } = useStyles();
    const { pluginName , children , action , publisher  } = props;
    const personaConnectStatus = (0,_components_DataSource_usePersonaConnectStatus__WEBPACK_IMPORTED_MODULE_6__/* .usePersonaConnectStatus */ .x)();
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const name = !personaConnectStatus.hasPersona ? t('please_create_persona') : !personaConnectStatus.connected ? t('please_connect_persona') : pluginName;
    const actionButton = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!personaConnectStatus.action) return null;
        const button = personaConnectStatus.hasPersona ? t('connect_persona') : t('create_persona');
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            variant: "contained",
            className: classes.button,
            onClick: personaConnectStatus.action,
            children: button
        }));
    }, [
        personaConnectStatus,
        t
    ]);
    const publisherInfo = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!publisher) return null;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    variant: "h6",
                    fontSize: "1.1rem",
                    fontWeight: "400",
                    color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
                    children: "Provided by"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    href: publisher.link,
                    underline: "none",
                    target: "_blank",
                    rel: "noopener",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        variant: "h6",
                        fontSize: "1.1rem",
                        fontWeight: "400",
                        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textPrimary */ .ZN.textPrimary,
                        children: publisher.name.fallback
                    })
                })
            ]
        }));
    }, [
        publisher
    ]);
    const inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.card,
        onClick: (ev)=>ev.stopPropagation()
        ,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskIcon__WEBPACK_IMPORTED_MODULE_3__/* .MaskIcon */ .ec, {
                        size: 45
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                variant: "h6",
                                fontSize: "1.1rem",
                                fontWeight: "400",
                                children: [
                                    "Mask Plugin ",
                                    !personaConnectStatus.connected && pluginName ? `(${pluginName})` : ''
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                variant: "h6",
                                fontSize: "1.1rem",
                                fontWeight: "400",
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.action,
                        children: actionButton || action || publisherInfo
                    })
                ]
            }),
            personaConnectStatus.connected && children ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.body,
                children: children
            }) : null
        ]
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            message: "Mask is loading this plugin..."
        }),
        children: inner
    }));
};


/***/ }),

/***/ 55672:
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(94531);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/SnackbarContent/SnackbarContent.js
var SnackbarContent = __webpack_require__(80640);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/base.tsx
var base = __webpack_require__(18317);
// EXTERNAL MODULE: ./src/plugins/MaskPluginWrapper.tsx
var MaskPluginWrapper = __webpack_require__(41071);
// EXTERNAL MODULE: ../icons/general/Refresh.tsx
var Refresh = __webpack_require__(98212);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(43463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(42599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(26995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardContent/CardContent.js
var CardContent = __webpack_require__(73450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Tabs/Tabs.js + 1 modules
var Tabs = __webpack_require__(52311);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(50266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardActions/CardActions.js
var CardActions = __webpack_require__(79388);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(14767);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(8231);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(48520);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(41460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(29105);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/constants.ts
var constants = __webpack_require__(33611);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/messages.ts
var messages = __webpack_require__(50179);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/types.tsx
var types = __webpack_require__(63937);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts + 3 modules
var useDHedgePool = __webpack_require__(31235);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 25 modules
var evm_constants = __webpack_require__(36130);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/usePool.ts






function useFetchPool(address) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address) return;
        return messages/* PluginDHedgeRPC.fetchPool */.t.fetchPool(address, constants/* API_URL */.T5);
    }, [
        address
    ]);
}
function useFetchPoolHistory(address, period, sort = true) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address) return [];
        return messages/* PluginDHedgeRPC.fetchPoolPerformance */.t.fetchPoolPerformance(address, period, constants/* API_URL */.T5, sort);
    }, [
        address,
        period,
        sort
    ]);
}
function usePoolDepositAssets(pool) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { sUSD_ADDRESS  } = (0,evm_constants/* useTokenConstants */.kd)();
    const poolManagerContract = (0,useDHedgePool/* useDHedgePoolManagerContract */.rY)(pool === null || pool === void 0 ? void 0 : pool.managerLogicAddress);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!pool) return;
        if (pool.poolType === types/* PoolType.v1 */.W4.v1) return sUSD_ADDRESS ? [
            sUSD_ADDRESS
        ] : undefined;
        return poolManagerContract === null || poolManagerContract === void 0 ? void 0 : poolManagerContract.methods.getDepositAssets().call();
    }, [
        pool,
        chainId,
        sUSD_ADDRESS,
        poolManagerContract
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(71443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(2974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/Refresh.js
var icons_material_Refresh = __webpack_require__(56368);
// EXTERNAL MODULE: ./src/plugins/hooks/useLineChart.ts
var useLineChart = __webpack_require__(66299);
// EXTERNAL MODULE: ./src/plugins/hooks/useDimension.ts
var useDimension = __webpack_require__(34034);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/ChartControl.tsx




const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            top: 0,
            right: 0,
            padding: theme.spacing(1, 2),
            position: 'absolute'
        },
        link: {
            cursor: 'pointer',
            marginRight: theme.spacing(1),
            '&:last-child': {
                marginRight: 0
            }
        },
        text: {
            fontSize: 10,
            fontWeight: 300
        }
    })
);
function PriceChartPeriodControl(props) {
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: [
            types/* Period.D1 */.pH.D1,
            types/* Period.W1 */.pH.W1,
            types/* Period.M1 */.pH.M1,
            types/* Period.M3 */.pH.M3,
            types/* Period.M6 */.pH.M6
        ].map((period)=>{
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                className: classes.link,
                onClick: ()=>{
                    var ref;
                    return (ref = props.onPeriodChange) === null || ref === void 0 ? void 0 : ref.call(props, period);
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.text,
                    component: "span",
                    color: props.period === period ? 'primary' : 'textSecondary',
                    children: period
                })
            }, period));
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PerformanceChart.tsx












const DEFAULT_DIMENSION = {
    top: 32,
    right: 16,
    bottom: 32,
    left: 16,
    width: 598,
    height: 200
};
const PerformanceChart_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'relative',
            padding: theme.spacing(2)
        },
        svg: {
            display: 'block',
            color: theme.palette.text.primary
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute',
            fontSize: 15
        },
        placeholder: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            borderStyle: 'none'
        }
    })
);
function PerformanceChart(props) {
    const { pool  } = props;
    const { classes  } = PerformanceChart_useStyles();
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const rootRef = (0,react.useRef)(null);
    const svgRef = (0,react.useRef)(null);
    const [period, setPeriod] = (0,react.useState)(types/* Period.D1 */.pH.D1);
    // #region fetch pool history
    const { value: perfHistory , error , loading , retry  } = useFetchPoolHistory(pool.address, period);
    var ref;
    const stats = (ref = perfHistory === null || perfHistory === void 0 ? void 0 : perfHistory.map((row)=>[
            Number(row.timestamp),
            Number(row.performance)
        ]
    )) !== null && ref !== void 0 ? ref : [];
    // #endregion
    // #region make chart responsive
    const { width  } = (0,useWindowSize/* default */.Z)();
    const [responsiveWidth, setResponsiveWidth] = (0,react.useState)(DEFAULT_DIMENSION.width);
    const [responsiveHeight, setResponsiveHeight] = (0,react.useState)(DEFAULT_DIMENSION.height);
    (0,react.useEffect)(()=>{
        if (!rootRef.current) return;
        setResponsiveWidth(rootRef.current.getBoundingClientRect().width || DEFAULT_DIMENSION.width);
        setResponsiveHeight(rootRef.current.getBoundingClientRect().height || DEFAULT_DIMENSION.height);
    }, [
        width /* redraw canvas if window width resize */ 
    ]);
    // #endregion
    const dimension = {
        ...DEFAULT_DIMENSION,
        width: responsiveWidth,
        height: responsiveHeight
    };
    (0,useDimension/* useDimension */.$)(svgRef, dimension);
    (0,useLineChart/* useLineChart */.t)(svgRef, stats.map(([date, price])=>({
            date: new Date(date),
            value: price
        })
    ), dimension, 'x-dhedge-performance-line-chart', {
        tickFormat: '.0%',
        formatTooltip: (value)=>`${(value * 100).toFixed(1)}%`
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        ref: rootRef,
        children: [
            loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                className: classes.progress,
                color: "primary",
                size: 15
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_material_Refresh/* default */.Z, {
                className: classes.refresh,
                color: "primary",
                onClick: retry
            }),
            stats.length && !error ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChartPeriodControl, {
                        period: period,
                        onPeriodChange: setPeriod
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        className: classes.svg,
                        ref: svgRef,
                        width: dimension.width,
                        height: dimension.height,
                        viewBox: `0 0 ${dimension.width} ${dimension.height}`,
                        preserveAspectRatio: "xMidYMid meet"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.placeholder,
                align: "center",
                color: "textSecondary",
                children: loading ? t('plugin_dhedge_loading_chart') : error ? t('plugin_dhedge_fetch_error') : t('plugin_dhedge_no_data')
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(44939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(95162);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.3_5f1f718baae1643018ff61bbe4484af0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(69961);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/utils.ts
var utils = __webpack_require__(74855);
// EXTERNAL MODULE: ../../node_modules/.pnpm/isomorphic-dompurify@0.17.0/node_modules/isomorphic-dompurify/browser.js
var browser = __webpack_require__(6609);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolStats.tsx










const DIGIT_LENGTH = 18;
const PoolStats_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            alignItems: 'center',
            '& svg': {
                marginRight: theme.spacing(0.5)
            }
        },
        title: {
            fontSize: 12
        },
        value: {
            fontSize: 32
        },
        meta: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1)
        },
        description: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            maxWidth: '100%'
        }
    })
);
function PoolStats(props) {
    const { pool  } = props;
    const { classes  } = PoolStats_useStyles();
    // #region process stats
    const valueManaged = (0,utils/* formatAmountPostfix */.K)((0,formatter/* formatBalance */.az)(pool === null || pool === void 0 ? void 0 : pool.totalValue, DIGIT_LENGTH));
    const lifeTimeReturn = new (bignumber_default())((0,formatter/* formatBalance */.az)(pool.performance, DIGIT_LENGTH)).minus(1).multipliedBy(100);
    const riskFactor = pool && (pool === null || pool === void 0 ? void 0 : pool.riskFactor) !== -1 ? pool === null || pool === void 0 ? void 0 : pool.riskFactor : '-';
    // pool detail contains raw html and need to sanitize before use
    const cleanDescription = browser_default().sanitize(pool.poolDetails);
    const [expanded, setExpanded] = (0,react.useState)(cleanDescription.length < constants/* POOL_DESCRIPTION_LIMIT */.yV);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.meta,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        direction: "column",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_value_managed"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textPrimary",
                                    className: classes.value,
                                    children: [
                                        "$",
                                        valueManaged
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_lifetime_return"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: lifeTimeReturn.isGreaterThan(0) ? theme_src/* MaskColorVar.greenMain */.ZN.greenMain : lifeTimeReturn.isLessThan(0) ? theme_src/* MaskColorVar.redMain */.ZN.redMain : 'textPrimary',
                                    className: classes.value,
                                    children: [
                                        lifeTimeReturn.toFixed(2),
                                        "%"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_risk_factor"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: riskFactor === '-' || riskFactor === 3 ? 'textPrimary' : riskFactor < 3 ? theme_src/* MaskColorVar.greenMain */.ZN.greenMain : theme_src/* MaskColorVar.redMain */.ZN.redMain,
                                    className: classes.value,
                                    children: [
                                        riskFactor,
                                        " / 5"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {}),
            cleanDescription ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.description,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        color: "textPrimary",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "plugin_dhedge_strategy"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        color: "textSecondary",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            dangerouslySetInnerHTML: {
                                __html: expanded ? cleanDescription : cleanDescription.slice(0, constants/* POOL_DESCRIPTION_LIMIT */.yV).concat('...')
                            }
                        })
                    }),
                    cleanDescription.length > constants/* POOL_DESCRIPTION_LIMIT */.yV ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        color: "primary",
                        onClick: ()=>setExpanded(!expanded)
                        ,
                        children: expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "plugin_dhedge_see_less"
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "plugin_dhedge_see_more"
                        })
                    }) : null
                ]
            }) : null
        ]
    }));
}

// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(54575);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(71288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockie.ts
var useBlockie = __webpack_require__(89403);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/useManager.ts


function useAvatar(address) {
    return (0,useBlockie/* useBlockie */.Y)(address, constants/* BLOCKIES_OPTIONS */.jz);
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolViewDeck.tsx











const PoolViewDeck_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        title: {
            padding: theme.spacing(1, 0),
            display: 'flex',
            alignItems: 'center',
            '& > :last-child': {
                marginTop: 4,
                marginLeft: 4
            }
        },
        meta: {
            fontSize: 14,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'left'
        },
        avatar: {
            width: theme.spacing(8),
            height: theme.spacing(8)
        },
        text: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '4',
            '-webkit-box-orient': 'vertical'
        },
        button: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            fontWeight: 500
        },
        chip: {
            width: '100%',
            fontSize: 'x-small'
        }
    })
);
function PoolViewDeck(props) {
    const { pool , inputTokens , link  } = props;
    const { classes  } = PoolViewDeck_useStyles();
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const blockie = useAvatar(pool.managerAddress);
    const chainId = (0,useChainId/* useChainId */.xx)();
    // #region manager share
    const managerShare = new (bignumber_default())(pool.balanceOfManager).dividedBy(pool.totalSupply).multipliedBy(100).integerValue((bignumber_default()).ROUND_UP);
    // #endregion
    // #region the invest dialog
    const { setDialog: openInvestDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* PluginDHedgeMessages.InvestDialogUpdated */.V.InvestDialogUpdated);
    const onInvest = (0,react.useCallback)(()=>{
        if (!pool || !inputTokens) return;
        openInvestDialog({
            open: true,
            pool: pool,
            tokens: inputTokens
        });
    }, [
        pool,
        inputTokens,
        openInvestDialog
    ]);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        className: classes.meta,
        direction: "row",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                alignSelf: "center",
                xs: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: link,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        src: blockie,
                        className: classes.avatar
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            color: "primary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: link,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                children: pool.name.toUpperCase()
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        spacing: 0.5,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textPrimary",
                                    className: classes.text,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_managed_by",
                                        components: {
                                            manager: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, pool.managerAddress)
                                            })
                                        },
                                        values: {
                                            managerName: pool.managerName
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.text,
                                    children: managerShare.isLessThanOrEqualTo(50) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_manager_share",
                                        components: {
                                            share: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                        },
                                        values: {
                                            managerShare: managerShare
                                        }
                                    }) : t('plugin_dhedge_manager_share_more_than_50')
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                alignSelf: "right",
                xs: 4,
                textAlign: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.button,
                    variant: "contained",
                    fullWidth: true,
                    color: "primary",
                    onClick: onInvest,
                    children: t('plugin_dhedge_invest')
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolView.tsx













const PoolView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            boxShadow: 'none',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0
        },
        message: {
            textAlign: 'center'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            fontSize: 'inherit'
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
        tabs: {
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`,
            width: '100%',
            minHeight: 'unset'
        },
        tab: {
            minHeight: 'unset',
            minWidth: 'unset'
        },
        footer: {
            marginTop: -1,
            zIndex: 1,
            position: 'relative',
            borderTop: `solid 1px ${theme.palette.divider}`,
            justifyContent: 'space-between'
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
        mask: {
            width: 40,
            height: 10
        },
        dhedge: {
            height: 10,
            margin: theme.spacing(0, 0.5)
        }
    })
);
function PoolView(props) {
    var ref;
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = PoolView_useStyles();
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    var _address;
    // #region allowed tokens
    const { value: pool , error , loading , retry  } = useFetchPool((_address = props.address) !== null && _address !== void 0 ? _address : '');
    // #region susd token
    const { value: allowedTokens , loading: loadingAllowedTokens , retry: retryAllowedTokens , error: errorAllowedTokens ,  } = usePoolDepositAssets(pool);
    // #endregion
    // #region tabs
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_dhedge_tab_stats')
        }, "stats"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_dhedge_tab_chart')
        }, "chart"), 
    ].filter(Boolean);
    // #endregion
    if (loading || loadingAllowedTokens) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: t('plugin_dhedge_loading')
    }));
    if (!pool) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: t('plugin_dhedge_pool_not_found')
    }));
    if (error || errorAllowedTokens && currentChainId === pool.chainId) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: [
            t('plugin_dhedge_smt_wrong'),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            ((ref = error) === null || ref === void 0 ? void 0 : ref.message) || (errorAllowedTokens === null || errorAllowedTokens === void 0 ? void 0 : errorAllowedTokens.message),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
                className: classes.refresh,
                color: "primary",
                onClick: error ? retry : retryAllowedTokens
            })
        ]
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: pool.chainId,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            className: classes.root,
            elevation: 0,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                    subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolViewDeck, {
                        pool: pool,
                        inputTokens: allowedTokens,
                        link: props.link
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
                                tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolStats, {
                                    pool: pool
                                }) : null,
                                tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PerformanceChart, {
                                    pool: pool
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
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskTextIcon */.$i, {
                                        classes: {
                                            root: classes.mask
                                        },
                                        viewBox: "0 0 80 20"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.footnote,
                            variant: "subtitle2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t('supported_by')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                                    className: classes.footLink,
                                    target: "_blank",
                                    color: "textSecondary",
                                    rel: "noopener noreferrer",
                                    title: "dHEDGE",
                                    href: "https://dhedge.org",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            className: classes.dhedge,
                                            src: "https://app.dhedge.org/favicon.ico"
                                        }),
                                        t('plugin_dhedge_dhedge')
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/dHEDGE/UI/InvestDialog.tsx + 1 modules
var InvestDialog = __webpack_require__(8631);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/SNSAdaptor/index.tsx










function getPoolFromLink(link) {
    const matchLink = (0,constants/* createMatchLink */.ag)();
    var ref;
    const [, , address] = matchLink ? (ref = link.match(matchLink)) !== null && ref !== void 0 ? ref : [] : [];
    return {
        link,
        address
    };
}
function getPoolFromLinks(links) {
    return links.map(getPoolFromLink).find(Boolean);
}
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const links = (0,react.useMemo)(()=>{
            const x = (0,shared_base_src/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,shared_base_src/* parseURL */.Lk)(x.val);
        }, [
            props.message
        ]);
        if (!links) return null;
        const pool = getPoolFromLinks(links);
        if (!(pool === null || pool === void 0 ? void 0 : pool.address)) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            link: pool.link,
            address: pool.address
        }));
    },
    PostInspector: function Component() {
        const links = src/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const pool = getPoolFromLinks(links);
        if (!(pool === null || pool === void 0 ? void 0 : pool.address)) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            link: pool.link,
            address: pool.address
        }));
    },
    GlobalInjection: function Component() {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InvestDialog/* InvestDialog */.V, {}));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);
function Renderer(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPluginWrapper/* default */.Z, {
        pluginName: "dHEDGE",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
                message: "Mask is loading this plugin..."
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolView, {
                address: props.address,
                link: props.link
            })
        })
    }));
}


/***/ }),

/***/ 74855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ formatAmountPostfix),
/* harmony export */   "N": () => (/* binding */ getChainIdFromCode)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25071);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63937);



const ONE_THOUSAND = 1000;
const ONE_MILLION = ONE_THOUSAND * 1000;
const ONE_BILLION = ONE_MILLION * 1000;
const ONE_TRILLION = ONE_BILLION * 1000;
/**
 * A helper function to format amount
 * @param input raw amount
 * @return {String} Postfixed formatted amount
 * @example
 * formatAmountPostfix(1.234);
 * // returns 1.23
 * @example
 * formatAmountPostfix(12.34);
 * // returns 12.3
 * @example
 * formatAmountPostfix(2000.123);
 * // returns 2.12K
 * @example
 * formatAmountPostfix(20000.123);
 * // returns 20.1K
 **/ function formatAmountPostfix(input) {
    let postfix = '';
    let amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(input);
    if (amount.isGreaterThanOrEqualTo(ONE_TRILLION)) {
        postfix = 'T';
        amount = amount.dividedBy(ONE_TRILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_BILLION)) {
        postfix = 'B';
        amount = amount.dividedBy(ONE_BILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_MILLION)) {
        postfix = 'M';
        amount = amount.dividedBy(ONE_MILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_THOUSAND)) {
        postfix = 'K';
        amount = amount.dividedBy(ONE_THOUSAND);
    }
    const fixedAmount = amount.isLessThanOrEqualTo(10) ? amount.toFixed(2) : amount.toFixed(1);
    return `${fixedAmount.replace(/\.0$/, '')}${postfix}`;
}
function getChainIdFromCode(blockChainCode) {
    switch(blockChainCode){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .BlockchainCode.ethereum */ .Xp.ethereum:
            return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .BlockchainCode.polygon */ .Xp.polygon:
            return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic;
    }
}


/***/ }),

/***/ 41460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ EthereumChainBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(69172);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAllowTestnet.ts

function useAllowTestnet() {
    return (0,context/* useWeb3StateContext */.N9)().allowTestnet;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(9094);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(54575);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(9228);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(18274);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(87050);
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
        await (0,shared_base_src/* delay */.gw)(1000);
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
                        await (0,shared_base_src/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
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

/***/ 89403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useBlockie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
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


/***/ })

}]);