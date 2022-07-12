"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8580,9348],{

/***/ 7602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* binding */ NFTImageCollectibleAvatar),
  "T": () => (/* binding */ NFTListPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ./src/plugins/Avatar/assets/selected.tsx


const SelectedIcon = (0,utils/* createIcon */.I)('SelectedIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "12",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M6.19922 12.757L10.1992 16.957L18.1992 8.55701",
            stroke: "white",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTImage.tsx





const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        imgBackground: {
            position: 'relative',
            padding: 6,
            borderRadius: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        icon: {
            position: 'absolute',
            top: 8,
            right: 13,
            width: 20,
            height: 20,
            color: theme.palette.primary.main
        },
        image: {
            width: 97,
            height: 97,
            objectFit: 'cover',
            borderRadius: '100%',
            boxSizing: 'border-box',
            '&:hover': {
                border: `1px solid ${theme.palette.primary.main}`
            }
        },
        selected: {
            border: `1px solid ${theme.palette.primary.main}`
        }
    })
);
function isSameNFT(pluginId, a, b) {
    return pluginId !== base_src/* NetworkPluginID.PLUGIN_SOLANA */.FF.PLUGIN_SOLANA ? (0,base_src/* isSameAddress */.Wr)(a.contract?.address, b?.contract?.address) && a.contract?.chainId && a.contract?.chainId === b?.contract?.chainId && a.tokenId === b?.tokenId : a.tokenId === b?.tokenId;
}
function NFTImage(props) {
    const { token , onChange , selectedToken , showBadge =false , pluginId  } = props;
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.imgBackground,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                onClick: ()=>onChange(token)
                ,
                src: token.metadata?.imageURL,
                className: classnames_default()(classes.image, isSameNFT(pluginId, token, selectedToken) ? classes.selected : '')
            }),
            showBadge && isSameNFT(pluginId, token, selectedToken) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectedIcon, {
                className: classes.icon
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/Application/NFTListPage.tsx






const NFTListPage_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {},
        button: {
            textAlign: 'center',
            paddingTop: theme.spacing(1),
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            color: '#1D9BF0'
        },
        gallery: {
            display: 'flex',
            flexFlow: 'row wrap',
            overflowY: 'auto',
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250, 250, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundClip: 'padding-box'
            }
        },
        skeleton: {
            width: 97,
            height: 97,
            objectFit: 'cover',
            borderRadius: '100%',
            boxSizing: 'border-box',
            padding: 4
        },
        skeletonBox: {
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    })
);
function NFTListPage(props) {
    const { classes  } = NFTListPage_useStyles();
    const { onChange , tokenInfo , tokens , children , pluginId , nextPage , loadError , loadFinish  } = props;
    const [selectedToken, setSelectedToken] = (0,react.useState)(tokenInfo);
    const _onChange = (token)=>{
        if (!token) return;
        setSelectedToken(token);
        onChange?.(token);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.gallery,
                    children: children ?? tokens.map((token1, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTImageCollectibleAvatar, {
                            pluginId: pluginId,
                            token: token1,
                            selectedToken: selectedToken,
                            onChange: (token)=>_onChange(token)
                        }, i)
                    )
                }),
                loadError && !loadFinish && tokens.length && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    py: 1,
                    style: {
                        gridColumnStart: 1,
                        gridColumnEnd: 6
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* RetryHint */.uw, {
                        hint: false,
                        retry: nextPage
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ElementAnchor */.ek, {
                    callback: ()=>{
                        if (nextPage) nextPage();
                    },
                    children: !loadFinish && tokens.length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* LoadingBase */.Sx, {})
                })
            ]
        })
    });
}
function NFTImageCollectibleAvatar({ token , onChange , selectedToken , pluginId  }) {
    const { classes  } = NFTListPage_useStyles();
    const { value: isImageToken , loading  } = (0,src/* useImageChecker */.vI)(token.metadata?.imageURL);
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.skeletonBox,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
            animation: "wave",
            variant: "rectangular",
            className: classes.skeleton
        })
    });
    return isImageToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTImage, {
        pluginId: pluginId,
        showBadge: true,
        token: token,
        selectedToken: selectedToken,
        onChange: onChange
    }) : null;
}


/***/ }),

/***/ 20700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ AddNFT)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46715);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85792);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52125);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77818);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93455);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50719);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        root: {},
        addNFT: {
            position: 'absolute',
            right: 20,
            top: 10
        },
        input: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            display: 'block',
            width: '100%',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#2F3336' : '#EFF3F4'}`,
            alignItems: 'center',
            padding: theme.spacing(1),
            boxSizing: 'border-box',
            borderRadius: 8
        },
        message: {
            '&:before': {
                content: '""',
                marginRight: theme.spacing(0.5),
                borderLeft: '2px solid'
            }
        }
    })
);
function AddNFT(props) {
    const { onClose , open , onAddClick , title , chainId , account , expectedPluginID  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const [address1, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [tokenId1, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [checking, toggleChecking] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const currentPluginId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_5__/* .useCurrentWeb3NetworkPluginID */ .$f)(expectedPluginID);
    const _account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_5__/* .useAccount */ .mA)(expectedPluginID, account);
    const currentChainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_5__/* .useChainId */ .xx)(expectedPluginID, chainId);
    const hub = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3Hub */ .hh)(currentPluginId, {
        chainId: currentChainId,
        account: _account
    });
    const connection = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3Connection */ .Tv)(currentPluginId);
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        if (!address1) {
            setMessage(t('nft_input_address_label'));
            return;
        }
        if (!tokenId1) {
            setMessage(t('nft_input_tokenid_label'));
            return;
        }
        if (!hub?.getNonFungibleAsset) {
            setMessage(t('plugin_avatar_web3_error'));
            return;
        }
        toggleChecking(true);
        let tokenDetailed;
        try {
            const asset = await hub.getNonFungibleAsset(address1, tokenId1, {
                chainId: currentChainId
            });
            const token = await connection?.getNonFungibleToken(address1 ?? '', tokenId1, undefined, {
                chainId: currentChainId
            });
            tokenDetailed = {
                ...token ?? {},
                ...asset ?? {}
            };
            if (!tokenDetailed) {
                setMessage(t('plugin_avatar_asset'));
                toggleChecking(false);
                return;
            }
            if (tokenDetailed?.contract?.chainId && tokenDetailed?.contract?.chainId !== currentChainId) {
                setMessage(t('plugin_avatar_chain_error'));
                toggleChecking(false);
                return;
            }
            const isOwner = await connection?.getNonFungibleTokenOwnership(address1, tokenId1, _account, undefined, {
                chainId: currentChainId
            });
            if (!isOwner) {
                setMessage(t('nft_owner_hint'));
                toggleChecking(false);
                return;
            }
            onAddClick?.(tokenDetailed);
            toggleChecking(false);
            handleClose();
        } catch  {
            setMessage(t('plugin_avatar_asset'));
            toggleChecking(false);
            return;
        }
    }, [
        tokenId1,
        address1,
        onAddClick,
        onClose,
        currentChainId,
        hub,
        _account,
        connection
    ]);
    const onAddressChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((address)=>{
        setMessage('');
        setAddress(address);
    }, []);
    const onTokenIdChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((tokenId)=>{
        setMessage('');
        setTokenId(tokenId);
    }, []);
    const handleClose = ()=>{
        setMessage('');
        onClose();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .InjectedDialog */ .Fl, {
        title: title ?? t('nft_add_dialog_title'),
        open: open,
        onClose: handleClose,
        titleBarIconStyle: "close",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    className: classes.addNFT,
                    variant: "contained",
                    size: "small",
                    disabled: checking,
                    onClick: onClick,
                    children: checking ? t('nft_add_button_label_checking') : t('nft_add_button_label')
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: classes.input,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                        sx: {
                            width: '100%'
                        },
                        placeholder: t('plugin_avatar_input_token_address'),
                        onChange: (e)=>onAddressChange(e.target.value)
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: classes.input,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                        sx: {
                            width: '100%'
                        },
                        placeholder: t('plugin_avatar_input_token_id'),
                        onChange: (e)=>onTokenIdChange(e.target.value)
                    })
                }),
                message ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    color: "error",
                    className: classes.message,
                    fontSize: 12,
                    children: message
                }) : null
            ]
        })
    });
}


/***/ }),

/***/ 36199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ RainbowBox),
/* harmony export */   "v": () => (/* binding */ rainbowBorderKeyFrames)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);


const rainbowBorderKeyFrames = _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .keyframes */ .F4`
    0%, to {
        border-color: #00f8ff;
        box-shadow: 0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    20% {
        border-color: #a4ff00;
        box-shadow: 0 5px 15px rgba(164, 255, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    40% {
        border-color: #f7275e;
        box-shadow: 0 5px 15px rgba(247, 39, 94, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    60% {
        border-color: #ffd300;
        box-shadow: 0 5px 15px rgba(255, 211, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    80% {
        border-color: #ff8a00;
        box-shadow: 0 5px 15px rgba(255, 138, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
`;
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme, { width , height , radius ='100%' , size =2  })=>({
        root: {
            animation: `${rainbowBorderKeyFrames} 6s linear infinite`,
            width,
            height,
            boxShadow: '0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2)',
            transition: 'none',
            borderRadius: radius,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 0,
            border: `${size}px solid #00f8ff`
        }
    })
);
function RainbowBox(props) {
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles({
        width: props.width,
        height: props.height,
        radius: props.radius,
        size: props.borderSize
    }), props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: props.children
    });
}


/***/ }),

/***/ 19348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "clearCache": () => (/* binding */ clearCache),
  "getAddress": () => (/* reexport */ getAddress),
  "getAvatar": () => (/* reexport */ getAvatar),
  "saveAvatar": () => (/* reexport */ saveAvatar),
  "setAddress": () => (/* reexport */ setAddress)
});

// EXTERNAL MODULE: ./src/plugins/Avatar/types.ts
var types = __webpack_require__(88829);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(19769);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ./src/plugins/Avatar/constants.ts
var constants = __webpack_require__(80624);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Services/kv.ts



const cache = new Map();
// The DB contains data that an SNS identity handle maps to a Web3 address.
const createAddressDB = (site)=>src/* KeyValue.createJSON_Storage */.cl.createJSON_Storage(`${constants/* NFT_AVATAR_DB_NAME */.$s}_${site}`)
;
function getKey(site, userId) {
    return `${site}-${userId}`;
}
async function getAddress(site, userId, pluginID) {
    let f = cache.get(getKey(site, userId));
    if (f) return f;
    f = _getAddress(site, userId, pluginID);
    cache.set(getKey(site, userId), f);
    return f;
}
async function _getAddress(site, userId, pluginID) {
    if (userId === '$unknown') return;
    let storageV1, storageV2;
    try {
        const storage = await createAddressDB(site).get(userId);
        storageV1 = storage ?? {};
        storageV2 = storage ?? {};
    } catch  {
        storageV1 = {};
        storageV2 = {};
    }
    if (!pluginID && storageV2[userId]) return storageV2[userId];
    if (storageV2[pluginID ?? base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM]) return {
        address: storageV2[pluginID ?? base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM],
        networkPluginID: pluginID ?? base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
    };
    // V1 only supports EVM
    if (storageV1.address) return storageV1;
    return;
}
async function setAddress(site, userId, pluginID, address) {
    if (userId === '$unknown') return;
    let storageV2;
    try {
        const storage = await createAddressDB(site).get(userId);
        storageV2 = storage ?? {};
    } catch  {
        storageV2 = {};
    }
    // clear cache
    cache.delete(getKey(site, userId));
    await createAddressDB(site).set(userId, {
        ...storageV2,
        [pluginID]: address,
        [userId]: {
            address,
            networkPluginID: pluginID
        }
    });
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/Services/storage.ts




function storage_getKey(network) {
    return constants/* NFT_AVATAR_METADATA_STORAGE */.t5 + '_' + network;
}
function getCacheKey(userId, network) {
    return `${network}-${userId}`;
}
const storage_cache = new Map();
const NFTAvatarStorage = (network)=>src/* KeyValue.createJSON_Storage */.cl.createJSON_Storage(storage_getKey(network))
;
async function saveAvatar(account, network, avatar, sign) {
    await setAddress(network, avatar.userId, avatar.pluginId ?? base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, account);
    await NFTAvatarStorage(network).set(avatar.userId, {
        ...avatar,
        sign
    });
    storage_cache.delete(getCacheKey(avatar.userId, network));
    return avatar;
}
async function getAvatar(userId, network) {
    let f = storage_cache.get(getCacheKey(userId, network));
    if (f) return f;
    f = _getAvatar(userId, network);
    storage_cache.set(getCacheKey(userId, network), f);
    return f;
}
async function _getAvatar(userId, network) {
    const data = await NFTAvatarStorage(network).get(userId);
    if (!data) return;
    return data;
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/Services/index.ts


function deleteTargetCache(userId, address, snsKey) {
    const key = `${address}, ${userId}, ${snsKey}`;
    types/* RSS3Cache.delete */.j["delete"](key);
}
async function clearCache(userId, network, snsKey) {
    const storage = await getAddress(network, userId);
    if (storage?.address) {
        deleteTargetCache(userId, storage.address, snsKey);
    }
}




/***/ }),

/***/ 3988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A4": () => (/* binding */ ApplicationIcon),
/* harmony export */   "Ff": () => (/* binding */ ApplicationRoundIcon),
/* harmony export */   "tc": () => (/* binding */ ApplicationSmallIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const ApplicationIcon = (0,_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ApplicationIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3Z",
            fill: "url(#paint0_linear_632_5441)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.86267 4.60495C10.0735 3.62935 11.7223 3.35455 13.2247 3.64015C14.5927 3.96655 15.8167 4.88695 16.4803 6.13135C16.9399 6.94975 17.0827 7.89775 17.0887 8.82415C17.0875 11.2253 17.0887 13.6253 17.0875 16.0265C17.0479 16.3397 17.2951 16.5629 17.4523 16.8029C18.1987 17.8733 18.5479 19.1717 18.6091 20.4653C18.1603 20.4677 17.7115 20.4665 17.2627 20.4653C17.1943 19.6301 17.0467 18.7949 16.6555 18.0449C15.4303 18.0389 14.2063 18.0653 12.9811 18.0533C12.9739 17.1437 12.9775 16.2341 12.9763 15.3245C11.9311 15.0797 10.8271 15.2621 9.84547 15.6677C7.96987 16.4585 6.70027 18.4385 6.70747 20.4665H5.39467C5.33227 18.8633 5.99707 17.2841 7.04587 16.0901C7.19347 15.9509 7.14067 15.7325 7.15627 15.5525C7.14307 13.7117 7.16467 11.8697 7.14547 10.0289C7.09987 9.11215 7.12867 8.19415 7.17067 7.27735C7.27987 6.18055 7.95307 5.20375 8.86267 4.60495ZM13.1599 4.97575C13.3111 5.40175 13.7239 5.67055 13.8871 6.09535C14.3995 7.04815 14.2543 8.15095 14.2711 9.18775C14.2795 11.7089 14.2771 14.2289 14.2783 16.7501C14.7811 16.7513 15.2851 16.7537 15.7879 16.7441C15.7843 14.1041 15.7855 11.4629 15.7879 8.82295C15.7819 8.18575 15.7183 7.52935 15.4339 6.94855C15.0127 6.00055 14.1487 5.27575 13.1599 4.97575ZM9.38947 5.83735C8.72587 6.27055 8.39707 7.08415 8.42227 7.85935C9.94387 7.87375 11.4643 7.86415 12.9859 7.86535C13.0399 6.85375 12.3859 5.82655 11.3851 5.56735C10.7179 5.33095 9.99427 5.52055 9.38947 5.83735ZM8.46187 9.15775C8.45467 9.69895 8.47387 10.2677 8.75947 10.7465C9.18427 11.5517 10.0651 12.0461 10.9663 12.0737C10.9675 12.5033 10.9675 12.9329 10.9663 13.3637C10.0339 13.3433 9.13867 12.9797 8.43307 12.3749C8.44627 13.2137 8.43307 14.0525 8.44267 14.8925C9.77107 14.0429 11.4211 13.6865 12.9799 13.9361C12.9715 12.3437 12.9787 10.7501 12.9751 9.15775C11.4715 9.15655 9.96667 9.15655 8.46187 9.15775Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                id: "paint0_linear_632_5441",
                x1: "13.8277",
                y1: "1",
                x2: "13.8277",
                y2: "22.9997",
                gradientUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                        stopColor: "#FF8D5C"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                        offset: "0.99",
                        stopColor: "#FFC49A"
                    })
                ]
            })
        })
    ]
}), '0 0 24 24');
const ApplicationRoundIcon = (0,_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ApplicationRoundIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M0 12.8652C0 6.23782 5.37258 0.865234 12 0.865234C18.6274 0.865234 24 6.23782 24 12.8652C24 19.4927 18.6274 24.8652 12 24.8652C5.37258 24.8652 0 19.4927 0 12.8652Z",
            fill: "url(#paint0_linear_2946_6667)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.86267 5.47018C10.0735 4.49458 11.7223 4.21978 13.2247 4.50538C14.5927 4.83178 15.8167 5.75218 16.4803 6.99658C16.9399 7.81498 17.0827 8.76298 17.0887 9.68938C17.0875 12.0906 17.0887 14.4906 17.0875 16.8918C17.0479 17.205 17.2951 17.4282 17.4523 17.6682C18.1987 18.7386 18.5479 20.037 18.6091 21.3306C18.1603 21.333 17.7115 21.3318 17.2627 21.3306C17.1943 20.4954 17.0467 19.6602 16.6555 18.9102C15.4303 18.9042 14.2063 18.9306 12.9811 18.9186C12.9739 18.009 12.9775 17.0994 12.9763 16.1898C11.9311 15.945 10.8271 16.1274 9.84547 16.533C7.96987 17.3238 6.70027 19.3038 6.70747 21.3318H5.39467C5.33227 19.7286 5.99707 18.1494 7.04587 16.9554C7.19347 16.8162 7.14067 16.5978 7.15627 16.4178C7.14307 14.577 7.16467 12.735 7.14547 10.8942C7.09987 9.97738 7.12867 9.05938 7.17067 8.14258C7.27987 7.04578 7.95307 6.06898 8.86267 5.47018ZM13.1599 5.84098C13.3111 6.26698 13.7239 6.53578 13.8871 6.96058C14.3995 7.91338 14.2543 9.01618 14.2711 10.053C14.2795 12.5742 14.2771 15.0942 14.2783 17.6154C14.7811 17.6166 15.2851 17.619 15.7879 17.6094C15.7843 14.9694 15.7855 12.3282 15.7879 9.68818C15.7819 9.05098 15.7183 8.39458 15.4339 7.81378C15.0127 6.86578 14.1487 6.14098 13.1599 5.84098ZM9.38947 6.70258C8.72587 7.13578 8.39707 7.94938 8.42227 8.72458C9.94387 8.73898 11.4643 8.72938 12.9859 8.73058C13.0399 7.71898 12.3859 6.69178 11.3851 6.43258C10.7179 6.19618 9.99427 6.38578 9.38947 6.70258ZM8.46187 10.023C8.45467 10.5642 8.47387 11.133 8.75947 11.6118C9.18427 12.417 10.0651 12.9114 10.9663 12.939C10.9675 13.3686 10.9675 13.7982 10.9663 14.229C10.0339 14.2086 9.13867 13.845 8.43307 13.2402C8.44627 14.079 8.43307 14.9178 8.44267 15.7578C9.77107 14.9082 11.4211 14.5518 12.9799 14.8014C12.9715 13.209 12.9787 11.6154 12.9751 10.023C11.4715 10.0218 9.96667 10.0218 8.46187 10.023Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                id: "paint0_linear_2946_6667",
                x1: "14.4369",
                y1: "0.865234",
                x2: "14.4369",
                y2: "24.865",
                gradientUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                        stopColor: "#FF8D5C"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                        offset: "0.99",
                        stopColor: "#FFC49A"
                    })
                ]
            })
        })
    ]
}), '0 0 24 25');
const ApplicationSmallIcon = (0,_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ApplicationSmallIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "currentColor",
        d: "M7.41269 2.72136C8.6044 1.76113 10.2272 1.49067 11.7059 1.77176C13.0524 2.09302 14.2571 2.99892 14.9102 4.2237C15.3626 5.02921 15.5031 5.96227 15.509 6.87407C15.5079 9.23743 15.509 11.5996 15.5079 13.963C15.4689 14.2712 15.7122 14.4909 15.8669 14.7271C16.6016 15.7807 16.9453 17.0586 17.0055 18.3318C16.5638 18.3342 16.122 18.333 15.6803 18.3318C15.613 17.5098 15.4677 16.6877 15.0827 15.9496C13.8768 15.9436 12.6721 15.9696 11.4662 15.9578C11.4591 15.0626 11.4626 14.1673 11.4615 13.272C10.4327 13.0311 9.34613 13.2106 8.38 13.6098C6.53396 14.3882 5.28437 16.3369 5.29145 18.333H3.99934C3.93792 16.7551 4.59225 15.2007 5.62452 14.0256C5.76979 13.8886 5.71782 13.6736 5.73318 13.4964C5.72019 11.6846 5.74145 9.87167 5.72255 8.05988C5.67767 7.15753 5.70601 6.254 5.74735 5.35164C5.85483 4.27213 6.51742 3.31072 7.41269 2.72136ZM11.6422 3.08632C11.791 3.5056 12.1973 3.77017 12.3579 4.18827C12.8622 5.12606 12.7193 6.21148 12.7359 7.23194C12.7441 9.7134 12.7418 12.1937 12.7429 14.6752C13.2378 14.6763 13.7339 14.6787 14.2287 14.6693C14.2252 12.0709 14.2264 9.47128 14.2287 6.87289C14.2228 6.24573 14.1602 5.59967 13.8803 5.02803C13.4658 4.09497 12.6154 3.38159 11.6422 3.08632ZM7.93118 3.93434C7.27804 4.36071 6.95442 5.16149 6.97923 5.92447C8.47685 5.93864 9.97329 5.9292 11.4709 5.93038C11.5241 4.93472 10.8804 3.92371 9.89533 3.66859C9.23865 3.43592 8.52645 3.62253 7.93118 3.93434ZM7.0182 7.20241C7.01112 7.73508 7.03001 8.29492 7.31111 8.76617C7.72922 9.55868 8.59614 10.0453 9.48313 10.0725C9.48432 10.4953 9.48432 10.9181 9.48313 11.3421C8.56543 11.322 7.68434 10.9642 6.98986 10.3689C7.00285 11.1945 6.98986 12.0201 6.99931 12.8468C8.30677 12.0106 9.93077 11.6598 11.465 11.9055C11.4567 10.3382 11.4638 8.76971 11.4603 7.20241C9.98037 7.20123 8.49929 7.20123 7.0182 7.20241Z"
    })
}), '0 0 21 20');


/***/ }),

/***/ 86962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* reexport */ useSaveNFTAvatar)
});

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ./src/plugins/Avatar/messages.ts
var messages = __webpack_require__(63970);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ./src/plugins/Avatar/types.ts
var types = __webpack_require__(88829);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/rss3/useSaveNFTAvatarToRSS3.ts





function useSaveAvatarToRSS3() {
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncFn/* default */.Z)(async (address, nft, signature, snsKey)=>{
        const rss = web3_providers_src/* RSS3.createRSS3 */.S5.createRSS3(address, async (message)=>{
            return connection.signMessage(message, 'personalSign', {
                account: address
            }) ?? '';
        });
        let _nfts = await web3_providers_src/* RSS3.getFileData */.S5.getFileData(rss, address, snsKey);
        if (!_nfts) {
            _nfts = {
                [nft.userId]: {
                    signature,
                    nft
                }
            };
        } else {
            _nfts[nft.userId] = {
                signature,
                nft
            };
        }
        await web3_providers_src/* RSS3.setFileData */.S5.setFileData(rss, address, snsKey, _nfts);
        // clear cache
        if (types/* RSS3Cache.has */.j.has(address)) types/* RSS3Cache.delete */.j["delete"](address);
        return nft;
    }, [
        connection
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/rss3/useSaveNFTAvatar.ts




function useSaveNFTAvatar() {
    const [, saveAvatarToRSS3] = useSaveAvatarToRSS3();
    return (0,useAsyncFn/* default */.Z)(async (address, nft, network, snsKey, networkPluginId, chainId)=>{
        const avatar = await saveAvatarToRSS3(address, nft, '', snsKey);
        await messages/* PluginNFTAvatarRPC.setAddress */.B.setAddress(network, nft.userId, networkPluginId ?? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, address);
        return avatar;
    }, [
        saveAvatarToRSS3
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/rss3/index.ts



/***/ }),

/***/ 30257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ useSave)
});

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/plugins/Avatar/messages.ts
var messages = __webpack_require__(63970);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/save/useSaveKV.ts




function useSaveKV(pluginId, chainId) {
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(pluginId);
    return (0,useAsyncFn/* default */.Z)(async (info, account, persona, proof)=>{
        const sign = await connection.signMessage(JSON.stringify(info), 'personalSign', {
            account
        });
        return messages/* PluginNFTAvatarRPC.saveAvatar */.B.saveAvatar(account, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier, info, sign);
    }, [
        connection
    ]);
}

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ./src/plugins/Avatar/constants.ts
var constants = __webpack_require__(80624);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/save/useSaveToNextID.ts








function useSaveToNextID() {
    return (0,useAsyncFn/* default */.Z)(async (info, account, persona, proof)=>{
        if (!proof?.identity || !persona?.publicKeyAsHex) return;
        const payload = await web3_providers_src/* NextIDStorage.getPayload */.wA.getPayload(persona.publicKeyAsHex, proof?.platform, proof?.identity, info, constants/* PLUGIN_ID */.Uu);
        if (!payload.ok) {
            return;
        }
        const result = await service/* default.Identity.generateSignResult */.ZP.Identity.generateSignResult(persona, payload.val.signPayload);
        if (!result) return;
        const response = await web3_providers_src/* NextIDStorage.set */.wA.set(payload.val.uuid, persona.publicKeyAsHex, (0,shared_base_src/* toBase64 */.s3)((0,shared_base_src/* fromHex */.H_)(result.signature.signature)), proof.platform, proof.identity, payload.val.createdAt, info, constants/* PLUGIN_ID */.Uu);
        await messages/* PluginNFTAvatarRPC.setAddress */.B.setAddress(social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier, info.userId, info.pluginId ?? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, account);
        return response.ok;
    });
}

// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/rss3/index.ts + 2 modules
var rss3 = __webpack_require__(86962);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/save/useSaveToRSS3.ts




function useSaveToRSS3() {
    const [, saveNFTAvatar] = (0,rss3/* useSaveNFTAvatar */.d)();
    return (0,useAsyncFn/* default */.Z)(async (info, account)=>{
        return saveNFTAvatar(account, info, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier, constants/* RSS3_KEY_SNS.TWITTER */.vu.TWITTER);
    }, [
        saveNFTAvatar
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/save/useSave.ts






function useSave(pluginId, chainId) {
    const [, saveToNextID] = useSaveToNextID();
    const [, saveToRSS3] = useSaveToRSS3();
    const [, saveToKV] = useSaveKV(pluginId, chainId);
    return (0,useAsyncFn/* default */.Z)(async (account, isBindAccount, token, data, persona, proof)=>{
        if (!token.contract?.address || !token.tokenId) return;
        const info = {
            pluginId,
            nickname: data.nickname,
            userId: data.userId,
            imageUrl: data.imageUrl,
            avatarId: data.avatarId,
            address: token.contract?.address ?? '',
            tokenId: token.tokenId,
            chainId: token.contract?.chainId ?? types/* ChainId.Mainnet */.a_.Mainnet,
            schema: token.contract?.schema ?? types/* SchemaType.ERC721 */.XQ.ERC721
        };
        switch(pluginId){
            case src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM:
                {
                    if (isBindAccount) {
                        return saveToNextID(info, account, persona, proof);
                    }
                    return saveToRSS3(info, account);
                }
            default:
                return saveToKV(info, account, persona, proof);
        }
    }, [
        saveToNextID,
        saveToRSS3,
        pluginId
    ]);
}


/***/ }),

/***/ 48121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ useGetNFTAvatar)
});

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ./src/plugins/Avatar/messages.ts
var messages = __webpack_require__(63970);
// EXTERNAL MODULE: ./src/plugins/Avatar/Services/index.ts + 2 modules
var Services = __webpack_require__(19348);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/addSeconds/index.js
var addSeconds = __webpack_require__(71767);
// EXTERNAL MODULE: ./src/plugins/Avatar/types.ts
var types = __webpack_require__(88829);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var evm_types = __webpack_require__(72499);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/rss3/useGetNFTAvatarFromRSS3.ts







function useGetNFTAvatarFromRSS3() {
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId: evm_types/* ChainId.Mainnet */.a_.Mainnet
    });
    return (0,useAsyncFn/* default */.Z)(async (userId, address, snsKey)=>{
        const rss = web3_providers_src/* RSS3.createRSS3 */.S5.createRSS3(address, async (message)=>{
            return connection?.signMessage(message, 'personalSign', {
                account: address
            }) ?? '';
        });
        const key = `${address}, ${userId}, ${snsKey}`;
        let v = types/* RSS3Cache.get */.j.get(key);
        if (!v || Date.now() > v[1]) {
            types/* RSS3Cache.set */.j.set(key, [
                _getNFTAvatarFromRSS(rss, userId, address, snsKey),
                (0,addSeconds/* default */.Z)(Date.now(), 60).getTime(), 
            ]);
        }
        v = types/* RSS3Cache.get */.j.get(key);
        const result = await v?.[0];
        return result?.nft;
    }, [
        connection
    ]);
}
async function _getNFTAvatarFromRSS(rss, userId, address, snsKey) {
    const nfts = await web3_providers_src/* RSS3.getFileData */.S5.getFileData(rss, address, snsKey);
    if (nfts) {
        return nfts[userId];
    }
    return web3_providers_src/* RSS3.getFileData */.S5.getFileData(rss, address, '_nft');
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useGetNFTAvatar.ts





function useGetNFTAvatar() {
    const [, getNFTAvatarFromRSS] = useGetNFTAvatarFromRSS3();
    return (0,useAsyncFn/* default */.Z)(async (userId, network, snsKey)=>{
        if (!userId || !network || !snsKey) return;
        const storage = await (0,Services.getAddress)(network, userId);
        if (!storage?.address) return;
        if (storage?.networkPluginID && storage.networkPluginID !== src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
            return messages/* PluginNFTAvatarRPC.getAvatar */.B.getAvatar(userId, network);
        }
        return getNFTAvatarFromRSS(userId, storage.address, snsKey);
    }, [
        getNFTAvatarFromRSS
    ]);
}


/***/ }),

/***/ 15495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ usePersonaNFTAvatar)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67938);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58500);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82192);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85418);
/* harmony import */ var _useGetNFTAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48121);





function usePersonaNFTAvatar(userId, avatarId, snsKey) {
    const [, getNFTAvatar] = (0,_useGetNFTAvatar__WEBPACK_IMPORTED_MODULE_3__/* .useGetNFTAvatar */ .U)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(async ()=>{
        const avatarMetaFromPersona = await (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getNFTAvatarByUserId */ .w9)(userId, avatarId);
        if (avatarMetaFromPersona) return avatarMetaFromPersona;
        const avatarMeta = await getNFTAvatar(userId, _social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.networkIdentifier */ .LM.networkIdentifier, snsKey);
        if (!avatarMeta) return;
        if (avatarMeta.pluginId === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID.PLUGIN_SOLANA */ .FF.PLUGIN_SOLANA) {
            return {
                imageUrl: '',
                nickname: '',
                ...avatarMeta,
                address: avatarMeta.tokenId
            };
        }
        return {
            imageUrl: '',
            nickname: '',
            ...avatarMeta
        };
    }, [
        userId,
        getNFTAvatar,
        avatarId,
        snsKey
    ]);
}


/***/ }),

/***/ 17321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58500);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82192);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63970);



function useWallet(userId) {
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return _messages__WEBPACK_IMPORTED_MODULE_1__/* .PluginNFTAvatarRPC.getAddress */ .B.getAddress(_social_network__WEBPACK_IMPORTED_MODULE_0__/* .activatedSocialNetworkUI.networkIdentifier */ .LM.networkIdentifier, userId);
    }, [
        userId
    ]);
}


/***/ }),

/***/ 63970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80624);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70226);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>__webpack_require__.e(/* import() */ 9348).then(__webpack_require__.bind(__webpack_require__, 19348))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 88829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ RSS3Cache)
/* harmony export */ });
const RSS3Cache = new Map();


/***/ }),

/***/ 85418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RZ": () => (/* binding */ formatText),
/* harmony export */   "T4": () => (/* binding */ formatPrice),
/* harmony export */   "Tg": () => (/* binding */ formatAddress),
/* harmony export */   "Xy": () => (/* binding */ formatTokenId),
/* harmony export */   "bA": () => (/* binding */ sortPersonaBindings),
/* harmony export */   "mr": () => (/* binding */ toPNG),
/* harmony export */   "w9": () => (/* binding */ getNFTAvatarByUserId)
/* harmony export */ });
/* unused harmony export getImage */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32139);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29730);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78778);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19769);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67938);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82192);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80624);







function getLastSalePrice(lastSale) {
    if (!lastSale?.price?.usd || !lastSale.paymentToken?.decimals) return;
    return formatBalance(lastSale.price.usd, lastSale.paymentToken.decimals);
}
async function getImage(image) {
    const blob = await Services.Helper.fetch(image);
    return await blobToBase64(blob);
}
function blobToBase64(blob) {
    return new Promise((resolve, _)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>resolve(reader.result)
        ;
        reader.readAsDataURL(blob);
    });
}
function toPNG(image) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(ctx)) throw new Error('Canvas was not supported');
        img.addEventListener('load', ()=>{
            [canvas.width, canvas.height] = [
                img.width,
                img.height
            ];
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob((blob)=>{
                resolve(blob);
            }, 'image/png');
        });
        img.addEventListener('error', ()=>{
            reject(new Error('Could not load image'));
        });
        img.setAttribute('CrossOrigin', 'Anonymous');
        img.src = image;
    });
}
function formatPrice(amount, symbol) {
    const _amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(amount ?? '0');
    if (_amount.isZero()) return '';
    if (_amount.isLessThan(1)) return `${_amount.toFixed(2)} ${symbol}`;
    if (_amount.isLessThan(1e3)) return `${_amount.toFixed(1)} ${symbol}`;
    if (_amount.isLessThan(1e6)) return `${_amount.div(1e6).toFixed(1)}K ${symbol}`;
    return `${_amount.div(1e6).toFixed(1)}M ${symbol}`;
}
function formatText(name, tokenId) {
    const _name = name.replace(/#\d*/, '').trim();
    const __name = `${_name} #${tokenId}`;
    if (__name.length > 35) return `${__name.slice(0, 35)}...`;
    return __name;
}
function formatTokenId(symbol, tokenId) {
    const name = tokenId;
    return name.length > 18 ? name.slice(0, 12) + '...' : name;
}
function formatAddress(address, size = 0) {
    if (size === 0 || size >= 20) return address;
    return `${address.slice(0, Math.max(0, 2 + size))}...${address.slice(-size)}`;
}
const sortPersonaBindings = (a, b, userId)=>{
    const p_a = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(a.proofs.filter((x)=>x.identity === userId.toLowerCase()
    ));
    const p_b = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(b.proofs.filter((x)=>x.identity === userId.toLowerCase()
    ));
    if (!p_a || !p_b) return 0;
    if (p_a.created_at > p_b.created_at) return -1;
    return 1;
};
async function getNFTAvatarByUserId(userId, avatarId) {
    const platform = _social_network__WEBPACK_IMPORTED_MODULE_4__/* .activatedSocialNetworkUI.configuration.nextIDConfig */ .LM.configuration.nextIDConfig?.platform;
    const bindings = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof.queryExistedBindingByPlatform */ .q7.queryExistedBindingByPlatform(platform, userId.toLowerCase());
    for (const binding of bindings.sort((a, b)=>sortPersonaBindings(a, b, userId)
    )){
        const response = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDStorage.getByIdentity */ .wA.getByIdentity(binding.persona, platform, userId.toLowerCase(), _constants__WEBPACK_IMPORTED_MODULE_5__/* .PLUGIN_ID */ .Uu);
        if (!avatarId && response.ok) return response.val;
        if (response.ok && response.val.avatarId === avatarId) return response.val;
    }
    return;
}


/***/ })

}]);