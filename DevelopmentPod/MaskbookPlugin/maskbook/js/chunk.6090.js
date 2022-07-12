"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6090],{

/***/ 6090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85792);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77818);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50719);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93455);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18271);
/* harmony import */ var _hook_useTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43240);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    header: {
        padding: '10px 16px',
        backgroundColor: '#EFF5FF',
        color: '#1C68F3',
        fontSize: 14,
        lineHeight: '20px'
    },
    content: {
        flex: 1,
        padding: '16px 16px 0 16px',
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        color: '#1C68F3',
        fontSize: 12,
        lineHeight: '16px',
        marginBottom: 10
    },
    button: {
        fontWeight: 600,
        padding: '9px 0',
        borderRadius: 20,
        fontSize: 14,
        color: '#1C68F3',
        lineHeight: '20px',
        backgroundColor: '#F7F9FA'
    }
});
const AddToken = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .useNavigate */ .s0)();
    const blackList = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useBlockedFungibleTokens */ .v8)();
    (0,_hook_useTitle__WEBPACK_IMPORTED_MODULE_6__/* .useTitle */ .Z)(t('add_token'));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classes.label,
                        children: t('popups_wallet_token')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .FungibleTokenList */ .C2, {
                        blacklist: blackList.map((x)=>x.address
                        ),
                        FixedSizeListProps: {
                            height: 340,
                            itemSize: 54
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                height: "100%",
                sx: {
                    px: 2,
                    pb: 2
                },
                justifyContent: "center",
                alignItems: "center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    fullWidth: true,
                    className: classes.button,
                    onClick: ()=>navigate(-1)
                    ,
                    children: t('popups_wallet_go_back')
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToken);


/***/ })

}]);