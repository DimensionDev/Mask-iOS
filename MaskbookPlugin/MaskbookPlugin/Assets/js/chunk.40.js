"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7176],{

/***/ 97176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_TokenDetail)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletContext.ts
var useWalletContext = __webpack_require__(1267);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
;// CONCATENATED MODULE: ./src/plugins/Wallet/helpers.ts


function serializeWalletRecord(record) {
    return stringify({
        ...record,
        erc20_token_whitelist: Array.from(record.erc20_token_whitelist.values()),
        erc20_token_blacklist: Array.from(record.erc20_token_blacklist.values()),
        erc721_token_whitelist: Array.from(record.erc721_token_whitelist.values()),
        erc721_token_blacklist: Array.from(record.erc721_token_blacklist.values()),
        erc1155_token_whitelist: Array.from(record.erc1155_token_whitelist.values()),
        erc1155_token_blacklist: Array.from(record.erc1155_token_blacklist.values())
    });
}
function WalletComparer(a, b) {
    if (!a || !b) return false;
    return serializeWalletRecord(a) === serializeWalletRecord(b);
}
function WalletArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((wallet, index)=>WalletComparer(wallet, b[index])
    );
}
function PhraseComparer(a, b) {
    if (!a || !b) return false;
    return a.id === b.id && a.index === b.index;
}
function PhrasesComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((phrase, index)=>PhraseComparer(phrase, b[index])
    );
}
function ERC20TokenComparer(a, b) {
    if (!a || !b) return false;
    return isSameAddress(a.address, b.address);
}
function ERC20TokenArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((token, index)=>ERC20TokenComparer(token, b[index])
    );
}
function ERC721TokenComparer(a, b) {
    if (!a || !b) return false;
    return a.tokenId === b.tokenId;
}
function ERC721TokenArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((token, index)=>ERC721TokenComparer(token, b[index])
    );
}
function ERC1155TokenComparer(a, b) {
    if (!a || !b) return false;
    return a.tokenId === b.tokenId;
}
function ERC1155TokenArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((token, index)=>ERC1155TokenComparer(token, b[index])
    );
}
const getTokenUSDValue = (token)=>token.value ? Number.parseFloat(token.value[web3_shared_src/* CurrencyType.USD */.V2A.USD]) : 0
;

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/arrow-down-circle.js
var arrow_down_circle = __webpack_require__(61891);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/arrow-up-circle.js
var arrow_up_circle = __webpack_require__(5512);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(92131);
;// CONCATENATED MODULE: ../icons/general/InteractionCircle.tsx


const InteractionCircleIcon = (0,utils/* createIcon */.I)('InteractionIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 18.667a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667z",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.75 6l1.5 1.5-1.5 1.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.5 9.75V9A1.5 1.5 0 019 7.5h5.25M9 14.25l-1.5-1.5 1.5-1.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.25 10.5v.75a1.5 1.5 0 01-1.5 1.5H7.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 20 20');

// EXTERNAL MODULE: ./src/utils/index.ts
var src_utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/TokenDetail/index.tsx











const useStyles = (0,src/* makeStyles */.ZL)()({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 18
    },
    tokenIcon: {
        width: 24,
        height: 24,
        marginBottom: 4
    },
    balance: {
        fontSize: 14,
        lineHeight: '20px',
        color: '#1C68F3',
        fontWeight: 600
    },
    text: {
        fontSize: 12,
        lineHeight: 1,
        color: '#7B8192'
    },
    controller: {
        display: 'grid',
        justifyContent: 'center',
        gap: 20,
        gridTemplateColumns: 'repeat(3,1fr)',
        marginTop: 20,
        '& > *': {
            textAlign: 'center',
            cursor: 'pointer'
        }
    },
    icon: {
        stroke: '#1C68F3',
        fill: 'none'
    }
});
const TokenDetail = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const { currentToken  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    const openLabPage = (0,react.useCallback)(()=>{
        browser.windows.create({
            url: browser.runtime.getURL('/next.html#/labs')
        });
    }, []);
    if (!currentToken) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                    classes: {
                        icon: classes.tokenIcon
                    },
                    address: currentToken.token.address,
                    name: currentToken.token.name,
                    chainId: currentToken.token.chainId,
                    logoURI: currentToken.token.logoURI,
                    AvatarProps: {
                        sx: {
                            width: 24,
                            height: 24
                        }
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.balance,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                        value: currentToken.balance,
                        decimals: currentToken.token.decimals,
                        symbol: currentToken.token.symbol
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.text,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedCurrency, {
                        value: getTokenUSDValue(currentToken).toFixed(2),
                        sign: "$"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.controller,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            onClick: openLabPage,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down_circle/* default */.Z, {
                                    className: classes.icon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.text,
                                    children: t('popups_wallet_token_buy')
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_circle/* default */.Z, {
                                    className: classes.icon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.text,
                                    children: t('popups_wallet_token_send')
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            onClick: openLabPage,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InteractionCircleIcon, {
                                    className: classes.icon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.text,
                                    children: t('popups_wallet_token_swap')
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
});
/* harmony default export */ const Wallet_TokenDetail = (TokenDetail);


/***/ })

}]);