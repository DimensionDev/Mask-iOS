"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2374],{

/***/ 82374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_AddDeriveWallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx + 1 modules
var NetworkSelector = __webpack_require__(32263);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(2905);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(27019);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Table/Table.js + 1 modules
var Table = __webpack_require__(44695);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(8919);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(32789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(18292);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(85473);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(16842);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/DeriveWalletTable/index.tsx





const useStyles = (0,src/* makeStyles */.ZL)()({
    header: {
        backgroundColor: '#F7F9FA',
        padding: '14px 0',
        borderBottom: 'none'
    },
    title: {
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: 500
    },
    cell: {
        padding: '8px 0',
        borderBottom: 'none'
    },
    button: {
        minWidth: 0,
        padding: '0 5px'
    }
});
const DeriveWalletTable = /*#__PURE__*/ (0,react.memo)(({ loading , dataSource , onAdd  })=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
        size: "small",
        padding: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            align: "center",
                            variant: "head",
                            className: classes.header,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: "Address"
                            })
                        }, "address"),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            align: "center",
                            variant: "head",
                            className: classes.header,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: "Balance(ETH)"
                            })
                        }, "balance"),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            align: "center",
                            variant: "head",
                            className: classes.header,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: "Operation"
                            })
                        }, "Operation")
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                children: (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) && !loading ? dataSource.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "body",
                                className: classes.cell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedAddress, {
                                        address: item.address,
                                        size: 4
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "body",
                                className: classes.cell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                        value: item.balance,
                                        decimals: 18,
                                        significant: 4,
                                        symbol: "ETH"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "body",
                                className: classes.cell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    disabled: item.added,
                                    className: classes.button,
                                    onClick: ()=>onAdd(index)
                                    ,
                                    children: item.added ? 'added' : 'add'
                                })
                            })
                        ]
                    }, item.address)
                ) : Array.from({
                    length: 10
                }).fill(0).map((_, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "body",
                                className: classes.cell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                    animation: "wave",
                                    variant: "rectangular",
                                    width: "90%",
                                    height: 24
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "body",
                                className: classes.cell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                    animation: "wave",
                                    variant: "rectangular",
                                    width: "90%",
                                    height: 24
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "body",
                                className: classes.cell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                    animation: "wave",
                                    variant: "rectangular",
                                    width: "90%",
                                    height: 24
                                })
                            })
                        ]
                    }, index)
                )
            })
        ]
    }));
});

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/AddDeriveWallet/index.tsx












const AddDeriveWallet_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        padding: '16px 10px'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        color: '#151818',
        lineHeight: 1.5,
        fontWeight: 500
    },
    path: {
        marginTop: 26,
        marginBottom: 16,
        color: '#1C68F3',
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: 600
    },
    controller: {
        display: 'grid',
        marginTop: 24,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20
    },
    button: {
        padding: '10px 0',
        borderRadius: 20,
        fontSize: 14,
        lineHeight: '20px'
    }
});
const AddDeriveWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const location = (0,react_router/* useLocation */.TH)();
    const { classes  } = AddDeriveWallet_useStyles();
    const wallets = (0,web3_shared_src/* useWallets */.rBi)();
    const mnemonic = new URLSearchParams(location.search).get('mnemonic');
    const [page, setPage] = (0,react.useState)(0);
    const { loading , value: dataSource  } = (0,useAsync/* default */.Z)(async ()=>{
        if (mnemonic) {
            const derivedWallets = await messages/* WalletRPC.queryDerivableWalletFromPhrase */.V.queryDerivableWalletFromPhrase(mnemonic.split(' '), '', page + 1);
            return derivedWallets.map((derivedWallet)=>{
                const added = !!wallets.find((0,web3_shared_src/* currySameAddress */.DC3)(derivedWallet.address));
                var _balance;
                return {
                    added,
                    address: derivedWallet.address,
                    balance: (_balance = derivedWallet.balance) !== null && _balance !== void 0 ? _balance : '0'
                };
            });
        }
        return [];
    }, [
        mnemonic,
        wallets,
        page
    ]);
    const onAdd = (0,react.useCallback)(async (index)=>{
        if (mnemonic) {
            await messages/* WalletRPC.deriveWalletFromIndex */.V.deriveWalletFromIndex(mnemonic.split(' '), '', index);
        }
    }, [
        mnemonic
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: t('plugin_wallet_import_wallet')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelector */.k, {
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.path,
                children: t('popups_wallet_derivation_path', {
                    path: Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DeriveWalletTable, {
                loading: loading,
                dataSource: dataSource,
                onAdd: onAdd
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        disabled: page === 0 || loading,
                        onClick: ()=>setPage((prev)=>prev - 1
                            )
                        ,
                        children: t('popups_wallet_previous')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        onClick: ()=>setPage((prev)=>prev + 1
                            )
                        ,
                        disabled: loading,
                        children: t('popups_wallet_next')
                    })
                ]
            })
        ]
    }));
});
/* harmony default export */ const Wallet_AddDeriveWallet = (AddDeriveWallet);


/***/ })

}]);