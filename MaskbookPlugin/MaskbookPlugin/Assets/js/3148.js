"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6346],{

/***/ 29005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 94325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ CollectibleContext),
  "OO": () => (/* binding */ CollectibleList),
  "B9": () => (/* binding */ CollectibleListAddress)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(76015);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(16842);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TablePagination/TablePagination.js + 2 modules
var TablePagination = __webpack_require__(76111);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(93975);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(64921);
// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(75388);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(85290);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/MoreHoriz.js
var MoreHoriz = __webpack_require__(67507);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx
var Base = __webpack_require__(99983);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/index.tsx + 9 modules
var Wallet = __webpack_require__(51557);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/ActionsBarNFT.tsx










const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        more: {
            color: theme.palette.text.primary
        }
    })
);
function ActionsBarNFT(props) {
    const { wallet , token  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src.useStylesExtends)(useStyles(), props);
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const [transeferDialog, , openTransferDialogOpen] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletTransferDialogNFT */.rK);
    const [hideTokenConfirmDialog, , openHideTokenConfirmDialog] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletHideTokenConfirmDialog */.u1);
    const [menu, openMenu] = (0,utils/* useMenu */.H9)([
        token.contractDetailed.type === web3_shared_src/* EthereumTokenType.ERC721 */.Drc.ERC721 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            disabled: !chainIdValid,
            onClick: ()=>openTransferDialogOpen({
                    token
                })
            ,
            children: t('transfer')
        }) : null,
        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: ()=>openHideTokenConfirmDialog({
                    wallet,
                    token
                })
            ,
            children: t('hide')
        }), 
    ]);
    const onClickButton = (0,react.useCallback)((ev)=>{
        ev.preventDefault();
        openMenu(ev);
    }, [
        openMenu
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                className: classes.more,
                size: "small",
                onClick: onClickButton,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MoreHoriz/* default */.Z, {
                })
            }),
            menu,
            hideTokenConfirmDialog,
            transeferDialog
        ]
    }));
}

// EXTERNAL MODULE: ./src/components/shared/Video.tsx + 1 modules
var Video = __webpack_require__(29005);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/CollectibleCard.tsx








const CollectibleCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper
        },
        icon: {
            top: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute',
            zIndex: 1,
            backgroundColor: `${theme.palette.background.paper} !important`
        },
        placeholder: {
            width: 64,
            height: 64,
            opacity: 0.1
        },
        video: {
            width: 160,
            height: 220
        }
    })
);
function CollectibleCard(props) {
    var ref;
    const { wallet , token , provider , readonly  } = props;
    const { classes  } = CollectibleCard_useStyles();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const isVideo = (ref = token.info.image) === null || ref === void 0 ? void 0 : ref.match(/\.(mp4|webm|mov|ogg|mp3|wav)$/i);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        target: "_blank",
        rel: "noopener noreferrer",
        href: (0,web3_shared_src/* resolveCollectibleLink */.Q_Z)(chainId, provider, token),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            className: classes.root,
            style: {
                width: 160,
                height: 220
            },
            children: [
                readonly || !wallet ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionsBarNFT, {
                    classes: {
                        more: classes.icon
                    },
                    wallet: wallet,
                    token: token
                }),
                token.info.image ? isVideo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Video/* Video */.n, {
                    src: token.info.image,
                    VideoProps: {
                        className: classes.video
                    }
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                    component: "img",
                    width: 160,
                    height: 220,
                    style: {
                        objectFit: 'contain'
                    },
                    src: token.info.image
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookIconOutlined */.A4, {
                    className: classes.placeholder
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx











const CollectibleContext = /*#__PURE__*/ (0,react.createContext)(null);
const CollectibleList_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'grid',
            flexWrap: 'wrap',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gridGap: theme.spacing(1)
        },
        text: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        },
        button: {
            marginTop: theme.spacing(1)
        },
        container: {
            height: 'calc(100% - 52px)',
            overflow: 'auto'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            padding: theme.spacing(1)
        },
        description: {
            textAlign: 'center',
            marginTop: theme.spacing(0.5),
            maxWidth: 160
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        loading: {
            position: 'absolute',
            bottom: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }
    })
);
function CollectibleListUI(props) {
    const { provider , wallet , collectibles , loading , hasNextPage , collectiblesRetry , error , readonly , page , hasRetry =true , onNextPage , onPrevPage ,  } = props;
    const classes = (0,src.useStylesExtends)(CollectibleList_useStyles(), props);
    const { t  } = (0,utils/* useI18N */.M1)();
    messages/* WalletMessages.events.erc721TokensUpdated.on */.R.events.erc721TokensUpdated.on(collectiblesRetry);
    if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.root,
        children: Array.from({
            length: 8
        }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.card,
                display: "flex",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "rectangular",
                        width: 160,
                        height: 220
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "text",
                        width: 160,
                        height: 20,
                        style: {
                            marginTop: 4
                        }
                    })
                ]
            }, i)
        )
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectibleContext.Provider, {
        value: {
            collectiblesRetry
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.container,
                children: error || collectibles.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.text,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            children: t('dashboard_no_collectible_found')
                        }),
                        hasRetry ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.button,
                            variant: "text",
                            onClick: ()=>collectiblesRetry()
                            ,
                            children: t('plugin_collectible_retry')
                        }) : null
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.root,
                    children: collectibles.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.card,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
                                    token: x,
                                    provider: provider,
                                    wallet: wallet,
                                    readonly: readonly
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.description,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.name,
                                        color: "textSecondary",
                                        variant: "body2",
                                        children: x.info.name
                                    })
                                })
                            ]
                        }, x.tokenId)
                    )
                })
            }),
            !(page === 0 && collectibles.length === 0) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                count: -1,
                component: "div",
                onPageChange: ()=>{
                },
                page: page,
                rowsPerPage: 30,
                rowsPerPageOptions: [
                    30
                ],
                labelDisplayedRows: ()=>null
                ,
                backIconButtonProps: {
                    onClick: ()=>onPrevPage()
                    ,
                    size: 'small',
                    disabled: page === 0
                },
                nextIconButtonProps: {
                    onClick: ()=>onNextPage()
                    ,
                    disabled: !hasNextPage,
                    size: 'small'
                }
            }) : null
        ]
    }));
}
function CollectibleListAddress(props) {
    const { address  } = props;
    const provider = (0,src.useValueRef)(settings/* currentCollectibleDataProviderSettings */.Ki);
    const chainId = web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet;
    const [page, setPage] = (0,react.useState)(0);
    var _classes;
    const classes = (_classes = props.classes) !== null && _classes !== void 0 ? _classes : {
    };
    const { value ={
        collectibles: [],
        hasNextPage: false
    } , loading: collectiblesLoading , retry: collectiblesRetry , error: collectiblesError ,  } = (0,web3_shared_src/* useCollectibles */.dX_)(address, chainId, provider, page, 50);
    const { collectibles =[] , hasNextPage  } = value;
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPage(0);
    }, [
        provider,
        address
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleListUI, {
        classes: classes,
        provider: provider,
        collectibles: collectibles,
        loading: collectiblesLoading,
        collectiblesRetry: collectiblesRetry,
        error: collectiblesError,
        readonly: true,
        page: page,
        hasNextPage: hasNextPage,
        hasRetry: !!address,
        onPrevPage: ()=>setPage((prev)=>prev - 1
            )
        ,
        onNextPage: ()=>setPage((next)=>next + 1
            )
    }));
}
function CollectibleList({ wallet , readonly  }) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const [page, setPage] = (0,react.useState)(0);
    const provider = (0,src.useValueRef)(settings/* currentCollectibleDataProviderSettings */.Ki);
    const { value ={
        collectibles: [],
        hasNextPage: false
    } , loading: collectiblesLoading , retry: collectiblesRetry , error: collectiblesError ,  } = (0,web3_shared_src/* useCollectibles */.dX_)(account, chainId, provider, page, 50);
    const { collectibles =[] , hasNextPage  } = value;
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPage(0);
    }, [
        account,
        provider
    ]);
    const dataSource = collectibles.filter((x)=>{
        const key = `${(0,web3_shared_src/* formatEthereumAddress */.j8w)(x.contractDetailed.address)}_${x.tokenId}`;
        switch(x.contractDetailed.type){
            case web3_shared_src/* EthereumTokenType.ERC721 */.Drc.ERC721:
                return wallet.erc721_token_blacklist ? !wallet.erc721_token_blacklist.has(key) : true;
            // wallet.erc1155_token_blacklist is still unused, comment it now.
            // case EthereumTokenType.ERC1155:
            //     return wallet.erc1155_token_blacklist ? !wallet.erc1155_token_blacklist.has(key) : true
            default:
                return false;
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleListUI, {
        provider: provider,
        wallet: wallet,
        collectibles: collectibles,
        loading: collectiblesLoading,
        error: collectiblesError,
        collectiblesRetry: collectiblesRetry,
        hasNextPage: hasNextPage,
        readonly: readonly,
        page: page,
        onPrevPage: ()=>setPage((prev)=>prev - 1
            )
        ,
        onNextPage: ()=>setPage((prev)=>prev + 1
            )
    }));
}


/***/ }),

/***/ 21835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShowcaseBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
if (462 == __webpack_require__.j) {
	/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30699);
}
if (462 == __webpack_require__.j) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49283);
}
if (462 == __webpack_require__.j) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88460);
}
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37186);







const useStyle = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        title: {
            fontSize: 12,
            lineHeight: 1.75,
            marginTop: theme.spacing(2)
        },
        paper: {
            height: '100%',
            border: `solid 1px ${theme.palette.divider}`,
            backgroundColor: theme.palette.mode === 'light' ? '#FAFAFA' : '',
            boxShadow: 'none',
            padding: theme.spacing(2, 3)
        },
        scroller: {
            userSelect: 'text',
            height: '100%',
            overflow: 'auto',
            wordBreak: 'break-word'
        },
        tip: {
            textAlign: 'right',
            color: theme.palette.grey[500]
        }
    })
);
function ShowcaseBox(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const { classes  } = useStyle();
    const { title , children , TitleProps , ContentProps  } = props;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const xsMatch = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useMatchXS */ .IN)();
    const [, copy] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)();
    const { enqueueSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useSnackbar */ .Ds)();
    const copyText = xsMatch ? ()=>{
        copy(ref.current.innerText);
        enqueueSnackbar(t('copy_success_of_text'), {
            variant: 'success',
            preventDuplicate: false,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
            }
        });
    } : ()=>(0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .selectElementContents */ .Ms)(ref.current)
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            title ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                className: classes.title,
                component: "h5",
                ...TitleProps,
                children: title
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                className: classes.paper,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classes.scroller,
                    "data-testid": "prove_textarea",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            component: "div",
                            variant: "body1",
                            onClick: copyText,
                            ref: ref,
                            ...ContentProps,
                            children: children
                        }),
                        xsMatch ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            component: "p",
                            variant: "body2",
                            className: classes.tip,
                            children: t('copy_to_clipboard')
                        }) : null
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 22477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SpacedButtonGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76900);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        buttonGroup: {
            flexGrow: 0,
            flexShrink: 0,
            '& > *:not(:last-child)': {
                marginRight: theme.spacing(2)
            }
        }
    })
);
function SpacedButtonGroup(_props) {
    const { classes  } = useStyles();
    const { className , ...props } = _props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, classes.buttonGroup),
        ...props
    }));
};


/***/ }),

/***/ 50536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ ERC20PredefinedTokenSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
if (462 == __webpack_require__.j) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76900);
}
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37186);
/* harmony import */ var _DashboardComponents_FixedTokenList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19380);
/* harmony import */ var _DashboardComponents_SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78884);








const useERC20PredefinedTokenSelectorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        list: {
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        placeholder: {
            textAlign: 'center',
            paddingTop: theme.spacing(10.5),
            paddingBottom: theme.spacing(10.5)
        }
    })
);
function ERC20PredefinedTokenSelector(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useI18N */ .M1)();
    const { classes  } = useERC20PredefinedTokenSelectorStyles();
    const { onTokenChange , excludeTokens =[]  } = props;
    const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
        sx: {
            textAlign: 'left'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardComponents_SearchInput__WEBPACK_IMPORTED_MODULE_6__/* .SearchInput */ .M, {
                label: t('add_token_search_hint'),
                onChange: (keyword1)=>{
                    setKeyword(keyword1);
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardComponents_FixedTokenList__WEBPACK_IMPORTED_MODULE_5__/* .FixedTokenList */ .x, {
                classes: {
                    list: classes.list,
                    placeholder: classes.placeholder
                },
                keyword: keyword,
                blacklist: excludeTokens,
                onSelect: (token)=>{
                    return onTokenChange === null || onTokenChange === void 0 ? void 0 : onTokenChange((token === null || token === void 0 ? void 0 : token.type) === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Drc.ERC20 ? token : null);
                },
                FixedSizeListProps: {
                    height: 192,
                    itemSize: 52,
                    overscanCount: 2
                }
            })
        ]
    }));
}


/***/ }),

/***/ 51557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$X": () => (/* reexport */ AddERC20Token/* DashboardWalletAddERC20TokenDialog */.$),
  "ll": () => (/* reexport */ DashboardWalletAddERC721TokenDialog),
  "hN": () => (/* reexport */ DashboardWalletBackupDialog),
  "tR": () => (/* reexport */ DashboardWalletDeleteConfirmDialog),
  "zt": () => (/* reexport */ Wallet_Error/* DashboardWalletErrorDialog */.z),
  "u1": () => (/* reexport */ DashboardWalletHideTokenConfirmDialog),
  "NN": () => (/* reexport */ Import/* DashboardWalletImportDialog */.N),
  "Pi": () => (/* reexport */ DashboardWalletTransferDialogFT),
  "rK": () => (/* reexport */ DashboardWalletTransferDialogNFT)
});

// UNUSED EXPORTS: DashboardWalletRenameDialog, ERC20PredefinedTokenSelector

// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/AddERC20Token.tsx
var AddERC20Token = __webpack_require__(56604);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
if (462 == __webpack_require__.j) {
var TextField_TextField = __webpack_require__(97448);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
if (462 == __webpack_require__.j) {
var CircularProgress = __webpack_require__(89730);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/octagon.js
if (462 == __webpack_require__.j) {
var octagon = __webpack_require__(2275);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx
var Base = __webpack_require__(99983);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/AddERC721Token.tsx










function DashboardWalletAddERC721TokenDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [address, setAddress] = (0,react.useState)('');
    const account = (0,src/* useAccount */.mAM)();
    const { value: contractDetailed , loading  } = (0,src/* useERC721ContractDetailed */.P1e)(address);
    const [loadingToken, setLoadingToken] = (0,react.useState)(false);
    const [loadingTokenFailMessage, setLoadingTokenFailMessage] = (0,react.useState)('');
    const [tokenId, setTokenId, erc721TokenDetailedCallback] = (0,src/* useERC721TokenDetailedCallback */._gN)(contractDetailed);
    (0,react.useEffect)(()=>{
        setLoadingTokenFailMessage('');
    }, [
        tokenId,
        address
    ]);
    const onSubmit = (0,Base/* useSnackbarCallback */.iD)(async ()=>{
        setLoadingToken(true);
        const _tokenDetailed = await erc721TokenDetailedCallback();
        setLoadingToken(false);
        if (_tokenDetailed && !(0,src/* isSameAddress */.Wr$)(_tokenDetailed.info.owner, account) || !_tokenDetailed) {
            setLoadingTokenFailMessage(t('wallet_add_nft_invalid_owner'));
            throw new Error(t('wallet_add_nft_invalid_owner'));
        } else {
            await messages/* WalletRPC.addERC721Token */.V.addERC721Token(_tokenDetailed);
            props.onClose();
        }
    }, [
        setLoadingToken,
        props.onClose
    ], ()=>void 0
    );
    const validationMessage = (0,react.useMemo)(()=>{
        if (!dist.EthereumAddress.isValid(address)) return t('wallet_add_nft_invalid_address');
        return '';
    }, [
        address
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(octagon/* default */.Z, {
            }),
            iconColor: "#699CF7",
            primary: t('add_asset'),
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.Z, {
                        onChange: (e)=>setAddress(e.target.value)
                        ,
                        required: true,
                        autoFocus: true,
                        label: t('wallet_add_nft_address'),
                        placeholder: t('wallet_add_nft_address_placeholder')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.Z, {
                        onChange: (e)=>setTokenId(e.target.value)
                        ,
                        required: true,
                        label: t('wallet_add_nft_id'),
                        placeholder: t('wallet_add_nft_id_placeholder')
                    })
                ]
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* DebounceButton */.D0, {
                disabled: !!validationMessage || !!loadingTokenFailMessage || !address || !tokenId || !contractDetailed || loading,
                variant: "contained",
                onClick: onSubmit,
                children: [
                    loadingToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                        size: 16
                    }) : null,
                    validationMessage || loadingTokenFailMessage || t('add_asset')
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/credit-card.js
if (462 == __webpack_require__.j) {
var credit_card = __webpack_require__(72659);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
if (462 == __webpack_require__.j) {
var useAsync = __webpack_require__(88088);
}
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ShowcaseBox.tsx
var ShowcaseBox = __webpack_require__(21835);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/Backup.tsx








const useBackupDialogStyles = (0,theme_src/* makeStyles */.ZL)()({
    section: {
        textAlign: 'left'
    }
});
function DashboardWalletBackupDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { wallet  } = props.ComponentProps;
    const { classes  } = useBackupDialogStyles();
    const { value: [privateKeyInHex, mnemonic] = [
        '',
        []
    ]  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!wallet) return;
        const record = await messages/* WalletRPC.getWallet */.V.getWallet(wallet.address);
        if (!record) return;
        const { privateKeyInHex: privateKeyInHex1  } = record._private_key_ ? await messages/* WalletRPC.recoverWalletFromPrivateKey */.V.recoverWalletFromPrivateKey(record._private_key_) : await messages/* WalletRPC.recoverWalletFromMnemonicWords */.V.recoverWalletFromMnemonicWords(record.mnemonic, record.passphrase);
        return [
            privateKeyInHex1,
            record.mnemonic
        ];
    }, [
        wallet
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(credit_card/* default */.Z, {
            }),
            iconColor: "#4EE0BC",
            primary: t('backup_wallet'),
            secondary: t('backup_wallet_hint'),
            constraintSecondary: false,
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    utils/* Flags.wallet_mnemonic_words_backup_enabled */.vU.wallet_mnemonic_words_backup_enabled && mnemonic.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: classes.section,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShowcaseBox/* default */.Z, {
                            title: t('mnemonic_words'),
                            children: mnemonic.join(' ')
                        })
                    }) : null,
                    utils/* Flags.wallet_private_key_backup_enabled */.vU.wallet_private_key_backup_enabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: classes.section,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShowcaseBox/* default */.Z, {
                            title: t('private_key'),
                            children: privateKeyInHex
                        })
                    }) : null
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
if (462 == __webpack_require__.j) {
var Button_Button = __webpack_require__(91377);
}
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/SpacedButtonGroup.tsx
var DashboardComponents_SpacedButtonGroup = __webpack_require__(22477);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/DeleteConfirm.tsx








function DashboardWalletDeleteConfirmDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { wallet  } = props.ComponentProps;
    const onConfirm = (0,Base/* useSnackbarCallback */.iD)(async ()=>{
        await messages/* WalletRPC.removeWallet */.V.removeWallet(wallet.address);
        await messages/* WalletRPC.resetAccount */.V.resetAccount();
    }, [
        wallet.address
    ], props.onClose);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        fullScreen: false,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            size: "small",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(credit_card/* default */.Z, {
            }),
            iconColor: "#F4637D",
            primary: t('delete_wallet'),
            secondary: t('delete_wallet_hint'),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DashboardComponents_SpacedButtonGroup/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                        variant: "contained",
                        color: "danger",
                        onClick: onConfirm,
                        "data-testid": "confirm_button",
                        children: t('confirm')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.Z, {
                        variant: "outlined",
                        color: "inherit",
                        onClick: props.onClose,
                        children: t('cancel')
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/ERC20PredefinedTokenSelector.tsx
var ERC20PredefinedTokenSelector = __webpack_require__(50536);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/Error.tsx
var Wallet_Error = __webpack_require__(18260);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__(73088);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/HideTokenConfirm.tsx










function DashboardWalletHideTokenConfirmDialog(props) {
    const { wallet , token  } = props.ComponentProps;
    const { t  } = (0,utils/* useI18N */.M1)();
    var _address;
    const tokenAddress = (_address = token.address) !== null && _address !== void 0 ? _address : token.contractDetailed.address;
    var _name;
    const tokenName = (_name = token.name) !== null && _name !== void 0 ? _name : token.info.name;
    const onConfirm = (0,Base/* useSnackbarCallback */.iD)(()=>{
        var _type;
        const type = (_type = token.type) !== null && _type !== void 0 ? _type : token.contractDetailed.type;
        switch(type){
            case src/* EthereumTokenType.Native */.Drc.Native:
                throw new Error('Unable to hide the native token.');
            case src/* EthereumTokenType.ERC20 */.Drc.ERC20:
                return messages/* WalletRPC.blockERC20Token */.V.blockERC20Token(wallet.address, token);
            case src/* EthereumTokenType.ERC721 */.Drc.ERC721:
                return messages/* WalletRPC.removeERC721Token */.V.removeERC721Token(token);
            default:
                (0,esm/* unreachable */.t1)(type);
        }
    }, [
        wallet.address,
        token
    ], props.onClose);
    if ((0,src/* isNative */.tYA)(tokenAddress)) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        fullScreen: false,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            size: "small",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(trash_2/* default */.Z, {
            }),
            iconColor: "#F4637D",
            primary: t('hide_token'),
            secondary: t('hide_token_hint', {
                token: tokenName
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DashboardComponents_SpacedButtonGroup/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                        variant: "contained",
                        color: "danger",
                        onClick: onConfirm,
                        children: t('confirm')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.Z, {
                        variant: "outlined",
                        color: "inherit",
                        onClick: props.onClose,
                        children: t('cancel')
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/Import.tsx + 1 modules
var Import = __webpack_require__(14962);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/Rename.tsx








function DashboardWalletRenameDialog(props) {
    const { t  } = useI18N();
    const { wallet  } = props.ComponentProps;
    var _name;
    const [name, setName] = useState((_name = wallet.name) !== null && _name !== void 0 ? _name : '');
    const handleRename = useSnackbarCallback(()=>WalletRPC.renameWallet(wallet.address, name)
    , [
        wallet.address
    ], props.onClose);
    return(/*#__PURE__*/ _jsx(DashboardDialogCore, {
        fullScreen: false,
        ...props,
        children: /*#__PURE__*/ _jsx(DashboardDialogWrapper, {
            size: "small",
            primary: t('wallet_rename'),
            content: /*#__PURE__*/ _jsx(TextField, {
                helperText: checkInputLengthExceed(name) ? t('input_length_exceed_prompt', {
                    name: t('wallet_name').toLowerCase(),
                    length: WALLET_OR_PERSONA_NAME_MAX_LEN
                }) : undefined,
                required: true,
                autoFocus: true,
                label: t('wallet_name'),
                value: name,
                onChange: (e)=>setName(e.target.value)
                ,
                inputProps: {
                    onKeyPress: (e)=>e.key === 'Enter' && handleRename()
                }
            }),
            footer: /*#__PURE__*/ _jsxs(SpacedButtonGroup, {
                children: [
                    /*#__PURE__*/ _jsx(DebounceButton, {
                        variant: "contained",
                        onClick: handleRename,
                        disabled: name.length === 0 || checkInputLengthExceed(name),
                        children: t('ok')
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        variant: "outlined",
                        color: "inherit",
                        onClick: props.onClose,
                        children: t('cancel')
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/send.js
if (462 == __webpack_require__.j) {
var send = __webpack_require__(74550);
}
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(59450);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(98051);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/InputAdornment/InputAdornment.js + 1 modules
if (462 == __webpack_require__.j) {
var InputAdornment = __webpack_require__(55312);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
if (462 == __webpack_require__.j) {
var IconButton = __webpack_require__(22593);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/FileCopyOutlined.js
if (462 == __webpack_require__.j) {
var FileCopyOutlined = __webpack_require__(74990);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
if (462 == __webpack_require__.j) {
var useCopyToClipboard = __webpack_require__(30699);
}
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/ReceiveTab.tsx








const useReceiveTabStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        qr: {
            marginTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        form: {
            padding: theme.spacing(1)
        }
    })
);
function ReceiveTab(props) {
    const { wallet  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useReceiveTabStyles();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const copyWalletAddress = (0,Base/* useSnackbarCallback */.iD)(async (address)=>copyToClipboard(address)
    , []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                className: classes.form,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.Z, {
                    required: true,
                    label: t('wallet_address'),
                    value: wallet.address,
                    InputProps: {
                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                            position: "end",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                size: "small",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    copyWalletAddress(wallet.address);
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileCopyOutlined/* default */.Z, {
                                })
                            })
                        })
                    },
                    variant: "outlined"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.qr,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.QRCode, {
                    text: `ethereum:${wallet.address}`,
                    options: {
                        width: 200
                    },
                    canvasProps: {
                        style: {
                            display: 'block',
                            margin: 'auto'
                        }
                    }
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(30540);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/TransferTab.tsx











const useTransferTabStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(1)
        },
        button: {
            marginTop: theme.spacing(3)
        },
        maxChipRoot: {
            fontSize: 11,
            height: 21
        },
        maxChipLabel: {
            paddingLeft: 6,
            paddingRight: 6
        }
    })
);
function TransferTab(props) {
    const { token , onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useTransferTabStyles();
    const [amount, setAmount] = (0,react.useState)('');
    const [address, setAddress] = (0,react.useState)('');
    const [memo, setMemo] = (0,react.useState)('');
    var ref, ref1;
    // balance
    const { value: tokenBalance = '0' , retry: tokenBalanceRetry  } = (0,src/* useTokenBalance */.mMq)((ref = token === null || token === void 0 ? void 0 : token.type) !== null && ref !== void 0 ? ref : src/* EthereumTokenType.Native */.Drc.Native, (ref1 = token === null || token === void 0 ? void 0 : token.address) !== null && ref1 !== void 0 ? ref1 : '');
    const onChangeAmount = (0,react.useCallback)((ev)=>{
        const _amount = ev.currentTarget.value;
        if (_amount === '') setAmount('');
        if (/^\d+\.?\d*$/.test(_amount)) setAmount(_amount);
    }, []);
    //#region transfer tokens
    const transferAmount = new (bignumber_default())(amount || '0').multipliedBy((0,src/* pow10 */.wAG)(token.decimals));
    const [transferState, transferCallback, resetTransferCallback] = (0,src/* useTokenTransferCallback */.z7R)(token.type, token.address, transferAmount.toFixed(), address, memo);
    const onTransfer = (0,react.useCallback)(async ()=>{
        await transferCallback();
    }, [
        transferCallback
    ]);
    //#endregion
    //#region remote controlled transaction dialog
    const { setDialog: setTransactionDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open) return;
        resetTransferCallback();
        if (transferState.type !== src/* TransactionStateType.HASH */.n$V.HASH) return;
        onClose();
        tokenBalanceRetry();
    }, [
        transferState.type,
        tokenBalanceRetry
    ]));
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (transferState.type === src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        var _decimals;
        setTransactionDialog({
            open: true,
            state: transferState,
            summary: `Transfer ${(0,src/* formatBalance */.azF)(transferAmount, (_decimals = token.decimals) !== null && _decimals !== void 0 ? _decimals : 0)} ${token.symbol} to ${(0,src/* formatEthereumAddress */.j8w)(address, 4)}.`
        });
    }, [
        transferState /* update tx dialog only if state changed */ 
    ]);
    //#endregion
    //#region validation
    const validationMessage = (0,react.useMemo)(()=>{
        if (!transferAmount || (0,src/* isZero */.Fr9)(transferAmount)) return t('wallet_transfer_error_amount_absence');
        if ((0,src/* isGreaterThan */.T1o)(transferAmount, tokenBalance)) return t('wallet_transfer_error_insufficent_balance', {
            token: token.symbol
        });
        if (!address) return t('wallet_transfer_error_address_absence');
        if (!dist.EthereumAddress.isValid(address)) return t('wallet_transfer_error_invalid_address');
        return '';
    }, [
        transferAmount,
        address,
        tokenBalance,
        token
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                amount: amount,
                balance: tokenBalance,
                label: t('wallet_transfer_amount'),
                token: token,
                onAmountChange: setAmount,
                SelectTokenChip: {
                    readonly: true
                },
                MaxChipProps: {
                    classes: {
                        root: classes.maxChipRoot,
                        label: classes.maxChipLabel
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.Z, {
                required: true,
                label: t('wallet_transfer_to_address'),
                placeholder: t('wallet_transfer_to_address'),
                value: address,
                onChange: (ev)=>setAddress(ev.target.value)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.Z, {
                label: t('wallet_transfer_memo'),
                placeholder: t('wallet_transfer_memo_placeholder'),
                value: memo,
                disabled: token.type === src/* EthereumTokenType.ERC20 */.Drc.ERC20,
                onChange: (ev)=>setMemo(ev.target.value)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.Z, {
                className: classes.button,
                variant: "contained",
                color: "primary",
                disabled: !!validationMessage || transferState.type === src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING,
                onClick: onTransfer,
                children: validationMessage || t('wallet_transfer_send')
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/TransferFT.tsx








function DashboardWalletTransferDialogFT(props) {
    const { wallet , token  } = props.ComponentProps;
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const state = (0,react.useState)(0);
    const tabProps = {
        tabs: [
            {
                label: t('wallet_transfer_send'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransferTab, {
                    wallet: wallet,
                    token: token,
                    onClose: props.onClose
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: t('wallet_transfer_receive'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReceiveTab, {
                    wallet: wallet,
                    onClose: props.onClose
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            primary: t('wallet_transfer_title'),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(send/* default */.Z, {
            }),
            iconColor: "#4EE0BC",
            size: "medium",
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                height: 268,
                ...tabProps
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(64921);
// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(75388);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx + 2 modules
var CollectibleList = __webpack_require__(94325);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/TransferNFT.tsx













const useTransferDialogStylesNFT = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(1)
        },
        button: {
            marginTop: theme.spacing(3)
        },
        placeholder: {
            width: 48,
            height: 48,
            opacity: 0.1
        }
    })
);
function DashboardWalletTransferDialogNFT(props) {
    const { token  } = props.ComponentProps;
    const { onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useTransferDialogStylesNFT();
    const [address, setAddress] = (0,react.useState)('');
    const { collectiblesRetry  } = (0,react.useContext)(CollectibleList/* CollectibleContext */.E);
    //#region transfer tokens
    const [transferState, transferCallback, resetTransferCallback] = (0,src/* useTokenTransferCallback */.z7R)(token.contractDetailed.type, token.contractDetailed.address, token.tokenId, address);
    const onTransfer = (0,react.useCallback)(async ()=>{
        await transferCallback();
    }, [
        transferCallback
    ]);
    //#endregion
    //#region remote controlled transaction dialog
    const { setDialog: setTransactionDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open) return;
        resetTransferCallback();
        if (transferState.type !== src/* TransactionStateType.HASH */.n$V.HASH) return;
        onClose();
        collectiblesRetry();
    }, [
        transferState.type,
        collectiblesRetry
    ]));
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (transferState.type === src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            state: transferState,
            summary: `Transfer ${token.info.name} to ${(0,src/* formatEthereumAddress */.j8w)(address, 4)}.`
        });
    }, [
        transferState /* update tx dialog only if state changed */ 
    ]);
    //#endregion
    //#region validation
    const validationMessage = (0,react.useMemo)(()=>{
        if (!address) return t('wallet_transfer_error_address_absence');
        if (!dist.EthereumAddress.isValid(address)) return t('wallet_transfer_error_invalid_address');
        return '';
    }, [
        address,
        token
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            primary: t('wallet_transfer_title'),
            icon: token.info.image ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                component: "img",
                width: 160,
                height: 220,
                style: {
                    objectFit: 'contain'
                },
                src: token.info.image
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookIconOutlined */.A4, {
                className: classes.placeholder
            }),
            size: "medium",
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.Z, {
                        required: true,
                        label: t('wallet_transfer_to_address'),
                        placeholder: t('wallet_transfer_to_address'),
                        value: address,
                        onChange: (e)=>setAddress(e.target.value)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.Z, {
                        className: classes.button,
                        variant: "contained",
                        color: "primary",
                        disabled: !!validationMessage || transferState.type === src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING,
                        onClick: onTransfer,
                        children: validationMessage || t('wallet_transfer_send')
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/index.tsx













/***/ }),

/***/ 93633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ isMobileTwitter),
/* harmony export */   "M": () => (/* binding */ twitterDomain)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92058);


const isMobileTwitter = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ContentScript) ? location.hostname === _url__WEBPACK_IMPORTED_MODULE_0__/* .twitterUrl.hostLeadingUrlMobile.substr */ .x_.hostLeadingUrlMobile.substr(8) : !!navigator.userAgent.match(/Mobile|mobile/);
const twitterDomain = (/* runtime-dependent pure expression or super */ 462 == __webpack_require__.j ? (isMobileTwitter ? 'https://mobile.twitter.com/' : 'https://twitter.com/') : null);


/***/ }),

/***/ 92058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x_": () => (/* binding */ twitterUrl),
/* harmony export */   "WR": () => (/* binding */ canonifyImgUrl)
/* harmony export */ });
/* unused harmony export hostLeadingUrlAutoTwitter */
const twitterUrl = {
    hostIdentifier: 'twitter.com',
    hostLeadingUrl: 'https://twitter.com',
    hostLeadingUrlMobile: 'https://mobile.twitter.com'
};
const hostLeadingUrlAutoTwitter = (isMobile)=>isMobile ? twitterUrl.hostLeadingUrlMobile : twitterUrl.hostLeadingUrl
;
// more about twitter photo url formating: https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/entities-object#photo_format
const canonifyImgUrl = (url)=>{
    const parsed = new URL(url);
    if (parsed.hostname !== 'pbs.twimg.com') {
        return url;
    }
    const { searchParams  } = parsed;
    searchParams.set('name', 'orig');
    // we can't understand original image format when given url labeled as webp
    if (searchParams.get('format') === 'webp') {
        searchParams.set('format', 'png');
        const pngURL = parsed.href;
        searchParams.set('format', 'jpg');
        const jpgURL = parsed.href;
        return [
            pngURL,
            jpgURL
        ];
    }
    return parsed.href;
};


/***/ })

}]);