(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5908],{

/***/ 35886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(80480);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 23692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ./src/plugins/Savings/base.ts
var base = __webpack_require__(95163);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(93618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(46140);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(35827);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 5 modules
var useERC20TokenDetailed = __webpack_require__(29782);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox.tsx
var WalletStatusBox = __webpack_require__(51257);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts + 46 modules
var useAllProviderTradeContext = __webpack_require__(39850);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(32925);
// EXTERNAL MODULE: ./src/components/shared/NetworkTab.tsx
var NetworkTab = __webpack_require__(91956);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
;// CONCATENATED MODULE: ./src/plugins/Savings/types.ts
var TabType;
(function(TabType) {
    TabType["Deposit"] = 'deposit';
    TabType["Withdraw"] = 'withdraw';
})(TabType || (TabType = {}));
var ProtocolType;
(function(ProtocolType) {
    ProtocolType[ProtocolType["Lido"] = 0] = "Lido";
    ProtocolType[ProtocolType["AAVE"] = 1] = "AAVE";
})(ProtocolType || (ProtocolType = {}));

;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsDialogStyles.tsx

const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        abstractTabWrapper: {
            width: '100%',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2)
        },
        tableTabWrapper: {
            padding: theme.spacing(2)
        },
        tab: {
            height: 36,
            minHeight: 36,
            backgroundColor: isDashboard ? `${entry/* MaskColorVar.primaryBackground2 */.ZN.primaryBackground2}!important` : undefined
        },
        tabPaper: {
            backgroundColor: 'inherit'
        },
        tabs: {
            width: 535,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4,
            '& .Mui-selected': {
                color: '#ffffff',
                backgroundColor: `${theme.palette.primary.main}!important`
            }
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        content: {
            paddingTop: 0,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        savingsRoot: {
            width: 535,
            margin: 'auto'
        }
    })
);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAssets.ts + 1 modules
var useAssets = __webpack_require__(19681);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/IconURL.tsx

const ProviderIconURLs = {
    [ProtocolType.Lido]: new URL(/* asset import */ __webpack_require__(5337), __webpack_require__.b).toString(),
    [ProtocolType.AAVE]: new URL(/* asset import */ __webpack_require__(83000), __webpack_require__.b).toString()
};

;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsTable.tsx










const SavingsTable_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        containerWrap: {
            fontFamily: theme.typography.fontFamily
        },
        tableContainer: {
            maxHeight: 350,
            overflowY: 'scroll'
        },
        tableHeader: {
            display: 'flex',
            background: theme.palette.mode === 'light' ? '#F6F8F8' : '#17191D',
            borderRadius: theme.spacing(1),
            margin: '0 0 15px 0'
        },
        tableRow: {
            display: 'flex',
            background: theme.palette.mode === 'light' ? '#F6F8F8' : '#17191D',
            borderRadius: theme.spacing(1),
            marginBottom: theme.spacing(1),
            '&:last-child': {
                marginBottom: '0'
            }
        },
        tableItem: {
            display: 'flex',
            background: theme.palette.mode === 'light' ? '#F6F8F8' : '#17191D',
            borderRadius: theme.spacing(1)
        },
        tableCell: {
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            fontSize: '14px'
        },
        logoWrap: {
            position: 'relative',
            margin: '0 20px 0 0'
        },
        logo: {
            width: '32px',
            height: '32px'
        },
        logoMini: {
            height: '16px',
            position: 'absolute',
            bottom: 0,
            right: '-5px'
        },
        protocolLabel: {},
        loading: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
            width: '100%'
        }
    })
);
function SavingsTable({ chainId , tab , protocols , setTab , setSelectedProtocol  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = SavingsTable_useStyles();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const { value: assets , loading: getAssetsLoading  } = (0,useAssets/* useAssets */.L)(protocols.map((x)=>x.bareToken
    ), chainId);
    // Only fetch protocol APR and Balance on chainId change
    const { loading  } = (0,useAsync/* default */.Z)(async ()=>{
        await Promise.all(protocols.map(async (protocol)=>{
            protocol.updateApr(chainId, web3);
            protocol.updateBalance(chainId, web3, account);
        }));
    }, [
        chainId,
        web3,
        account,
        protocols
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.containerWrap,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                spacing: 0,
                className: classes.tableHeader,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t('plugin_savings_asset')
                        })
                    }),
                    tab === TabType.Deposit ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 2,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            variant: "body1",
                            children: [
                                " ",
                                t('plugin_savings_apr')
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: tab === TabType.Deposit ? 3 : 5,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t('plugin_savings_wallet')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 3,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t('plugin_savings_operation')
                        })
                    })
                ]
            }),
            loading || getAssetsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.loading,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.tableContainer,
                children: protocols.map((protocol, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        spacing: 0,
                        className: classes.tableRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                item: true,
                                xs: 4,
                                className: classes.tableCell,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.logoWrap,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                                                name: protocol.bareToken.name,
                                                address: protocol.bareToken.address,
                                                classes: {
                                                    icon: classes.logo
                                                },
                                                chainId: chainId
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                src: ProviderIconURLs[protocol.type],
                                                className: classes.logoMini
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classes.protocolLabel,
                                            children: protocol.bareToken.symbol
                                        })
                                    })
                                ]
                            }),
                            tab === TabType.Deposit ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 2,
                                className: classes.tableCell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    children: [
                                        protocol.apr,
                                        "%"
                                    ]
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                xs: tab === TabType.Deposit ? 3 : 5,
                                className: classes.tableCell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedBalance */.BV, {
                                        value: tab === TabType.Deposit ? assets.find((x)=>(0,address/* isSameAddress */.Wr)(x.token.address, protocol.bareToken.address)
                                        )?.balance : protocol.balance,
                                        decimals: protocol.bareToken.decimals,
                                        significant: 6,
                                        minimumBalance: (0,base_src/* rightShift */.pu)(10, protocol.bareToken.decimals - 6),
                                        formatter: formatter/* formatBalance */.az
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 3,
                                className: classes.tableCell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "contained",
                                    color: "primary",
                                    disabled: tab === TabType.Withdraw ? (0,base_src/* isZero */.Fr)(protocol.balance) : false,
                                    onClick: ()=>{
                                        setTab(tab);
                                        setSelectedProtocol(protocol);
                                    },
                                    children: tab === TabType.Deposit ? t('plugin_savings_deposit') : t('plugin_savings_withdraw')
                                })
                            })
                        ]
                    }, index)
                )
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(30688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(52813);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var utils_token = __webpack_require__(33690);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(41106);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsFormStyles.tsx

const SavingsFormStyles_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        containerWrap: {
            padding: '0 15px',
            fontFamily: theme.typography.fontFamily
        },
        inputWrap: {
            position: 'relative',
            width: '100%',
            margin: '0 0 10px 0'
        },
        inputTextField: {
            padding: '15px 10px 0px 10px',
            fontSize: '18px'
        },
        maxChip: {
            height: '20px',
            borderRadius: '3px',
            margin: '0 5px 10px 0'
        },
        selectTokenChip: {
            margin: '0 0 10px 0'
        },
        tokenValueUSD: {
            padding: '0 0 10px 0'
        },
        infoRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 0 15px 0'
        },
        infoRowLeft: {
            display: 'flex',
            alignItems: 'center'
        },
        infoRowRight: {
            fontWeight: 'bold'
        },
        rowImage: {
            width: '24px',
            height: '24px',
            margin: '0 5px 0 0'
        },
        button: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            borderRadius: 24,
            height: 'auto',
            marginTop: '0px !important'
        },
        disabledButton: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            borderRadius: 24,
            height: 'auto'
        },
        connectWallet: {
            marginTop: 0
        },
        tooltip: {
            backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            color: theme.palette.mode === 'dark' ? '#7B8192' : '#ffffff',
            borderRadius: 8,
            padding: 16,
            textAlign: 'left',
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 500
        },
        tooltipArrow: {
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000'
        },
        gasFee: {
            padding: '0 0 0 5px',
            fontSize: 11,
            opacity: 0.5
        }
    })
);

// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(52599);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var Trader_messages = __webpack_require__(61486);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(44632);
;// CONCATENATED MODULE: ../web3-contracts/abis/AaveLendingPoolAddressProvider.json
const AaveLendingPoolAddressProvider_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"string","name":"marketId","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"hasProxy","type":"bool"}],"name":"AddressSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"ConfigurationAdminUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"EmergencyAdminUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingPoolCollateralManagerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingPoolConfiguratorUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingPoolUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingRateOracleUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"newMarketId","type":"string"}],"name":"MarketIdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"PriceOracleUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"ProxyCreated","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingPoolCollateralManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingPoolConfigurator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingRateOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarketId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPoolAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPriceOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"address","name":"newAddress","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"address","name":"implementationAddress","type":"address"}],"name":"setAddressAsProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"emergencyAdmin","type":"address"}],"name":"setEmergencyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"manager","type":"address"}],"name":"setLendingPoolCollateralManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"configurator","type":"address"}],"name":"setLendingPoolConfiguratorImpl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"setLendingPoolImpl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lendingRateOracle","type":"address"}],"name":"setLendingRateOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"marketId","type":"string"}],"name":"setMarketId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"}],"name":"setPoolAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"priceOracle","type":"address"}],"name":"setPriceOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsForm.tsx




















function SavingsForm({ chainId , protocol , tab , onClose  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = SavingsFormStyles_useStyles();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const [inputAmount, setInputAmount] = (0,react.useState)('');
    const [estimatedGas, setEstimatedGas] = (0,react.useState)(new (bignumber_default())('0'));
    const { value: nativeTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(types/* EthereumTokenType.Native */.Dr.Native, '', chainId);
    const { setDialog: openSwapDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Trader_messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    const onConvertClick = (0,react.useCallback)(()=>{
        const token = protocol.stakeToken;
        openSwapDialog({
            open: true,
            traderProps: {
                defaultInputCoin: {
                    id: token.address,
                    name: token.name ?? '',
                    symbol: token.symbol ?? '',
                    contract_address: token.address,
                    decimals: token.decimals
                }
            }
        });
    }, [
        protocol,
        openSwapDialog
    ]);
    // #region form variables
    const { value: inputTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)((0,address/* isSameAddress */.Wr)(protocol.bareToken.address, NATIVE_TOKEN_ADDRESS) ? types/* EthereumTokenType.Native */.Dr.Native : protocol.bareToken.type ?? types/* EthereumTokenType.Native */.Dr.Native, protocol.bareToken.address, chainId);
    const tokenAmount = (0,react.useMemo)(()=>new (bignumber_default())((0,base_src/* rightShift */.pu)(inputAmount || '0', protocol.bareToken.decimals))
    , [
        inputAmount,
        protocol.bareToken.decimals
    ]);
    const balanceAsBN = (0,react.useMemo)(()=>tab === TabType.Deposit ? new (bignumber_default())(inputTokenBalance || '0') : protocol.balance
    , [
        tab,
        protocol.balance,
        inputTokenBalance
    ]);
    const { loading  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!(tokenAmount.toNumber() > 0)) return;
        try {
            setEstimatedGas(tab === TabType.Deposit ? await protocol.depositEstimate(account, chainId, web3, tokenAmount) : await protocol.withdrawEstimate(account, chainId, web3, tokenAmount));
        } catch  {
            // do nothing
            console.log('Failed to estimate gas');
        }
    }, [
        chainId,
        tab,
        protocol,
        tokenAmount
    ]);
    // #endregion
    // #region form validation
    const validationMessage = (0,react.useMemo)(()=>{
        if (tokenAmount.isZero() || !inputAmount) return t('plugin_trader_error_amount_absence');
        if ((0,base_src/* isLessThan */.FI)(tokenAmount, 0)) return t('plugin_trade_error_input_amount_less_minimum_amount');
        if ((0,base_src/* isLessThan */.FI)(balanceAsBN.minus(estimatedGas), tokenAmount)) {
            return t('plugin_trader_error_insufficient_balance', {
                symbol: tab === TabType.Deposit ? protocol.bareToken.symbol : protocol.stakeToken.symbol
            });
        }
        return '';
    }, [
        inputAmount,
        tokenAmount,
        nativeTokenBalance,
        balanceAsBN
    ]);
    const tokenPrice = (0,useTokenPrice/* useTokenPrice */.p)(chainId, !(0,address/* isSameAddress */.Wr)(protocol.bareToken.address, NATIVE_TOKEN_ADDRESS) ? protocol.bareToken.address : undefined);
    const tokenValueUSD = (0,react.useMemo)(()=>inputAmount ? new (bignumber_default())(inputAmount).times(tokenPrice).toFixed(2) : '0'
    , [
        inputAmount,
        tokenPrice
    ]);
    // #endregion
    const { value: approvalData  } = (0,useAsync/* default */.Z)(async ()=>{
        const token = protocol.bareToken;
        const aavePoolAddress = (0,constants/* getAaveConstants */.wG)(chainId).AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS || primitives/* ZERO_ADDRESS */.r;
        const lPoolAddressProviderContract = (0,useContract/* createContract */.OP)(web3, aavePoolAddress, AaveLendingPoolAddressProvider_namespaceObject);
        const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
        return {
            approveToken: token.type === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? (0,utils_token/* createERC20Token */.wY)(chainId, token.address, token.decimals, token.name, token.symbol) : undefined,
            approveAmount: new (bignumber_default())(inputAmount).shiftedBy(token.decimals),
            approveAddress: poolAddress
        };
    }, [
        protocol.bareToken,
        inputAmount,
        chainId
    ]);
    const [, executor] = (0,useAsyncFn/* default */.Z)(async ()=>{
        switch(tab){
            case TabType.Deposit:
                if (!await protocol.deposit(account, chainId, web3, tokenAmount)) {
                    throw new Error('Failed to deposit token.');
                } else {
                    await protocol.updateBalance(chainId, web3, account);
                }
                return;
            case TabType.Withdraw:
                switch(protocol.type){
                    case ProtocolType.Lido:
                        onClose?.();
                        onConvertClick();
                        return;
                    default:
                        if (!await protocol.withdraw(account, chainId, web3, tokenAmount)) {
                            throw new Error('Failed to withdraw token.');
                        } else {
                            await protocol.updateBalance(chainId, web3, account);
                        }
                        return;
                }
            default:
                (0,esm/* unreachable */.t1)(tab);
        }
    }, [
        tab,
        protocol,
        account,
        chainId,
        web3,
        tokenAmount
    ]);
    const needsSwap = protocol.type === ProtocolType.Lido && tab === TabType.Withdraw;
    const buttonDom = (0,react.useMemo)(()=>{
        if (tab === TabType.Deposit) return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
            chainId: chainId,
            noSwitchNetworkTip: true,
            disablePadding: true,
            ActionButtonPromiseProps: {
                fullWidth: true,
                classes: {
                    root: classes.button,
                    disabled: classes.disabledButton
                },
                color: 'primary',
                style: {
                    padding: '13px 0',
                    marginTop: 0
                }
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                ActionButtonProps: {
                    color: 'primary',
                    classes: {
                        root: classes.button
                    }
                },
                classes: {
                    connectWallet: classes.connectWallet,
                    button: classes.button
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                    amount: approvalData?.approveAmount.toFixed() ?? '',
                    token: approvalData?.approveToken,
                    spender: approvalData?.approveAddress,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                        fullWidth: true,
                        color: "primary",
                        size: "large",
                        variant: "contained",
                        init: needsSwap ? 'Swap ' + protocol.bareToken.symbol : validationMessage || t('plugin_savings_deposit') + ' ' + protocol.bareToken.symbol,
                        waiting: t('plugin_savings_process_deposit'),
                        failed: t('failed'),
                        failedOnClick: "use executor",
                        complete: t('done'),
                        disabled: validationMessage !== '' && !needsSwap,
                        noUpdateEffect: true,
                        executor: executor
                    })
                })
            })
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
            chainId: chainId,
            noSwitchNetworkTip: true,
            disablePadding: true,
            ActionButtonPromiseProps: {
                fullWidth: true,
                classes: {
                    root: classes.button,
                    disabled: classes.disabledButton
                },
                color: 'primary',
                style: {
                    padding: '13px 0',
                    marginTop: 0
                }
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                ActionButtonProps: {
                    color: 'primary',
                    classes: {
                        root: classes.button
                    }
                },
                classes: {
                    connectWallet: classes.connectWallet,
                    button: classes.button
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    fullWidth: true,
                    color: "primary",
                    size: "large",
                    variant: "contained",
                    init: validationMessage || t('plugin_savings_withdraw') + ' ' + protocol.stakeToken.symbol,
                    waiting: t('plugin_savings_process_withdraw'),
                    failed: t('failed'),
                    failedOnClick: "use executor",
                    complete: t('done'),
                    disabled: validationMessage !== '',
                    noUpdateEffect: true,
                    executor: executor
                })
            })
        });
    }, [
        executor,
        validationMessage,
        needsSwap,
        protocol,
        tab,
        approvalData,
        chainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.containerWrap,
        children: [
            needsSwap ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.inputWrap,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenAmountPanel */.xl, {
                            amount: inputAmount,
                            maxAmount: balanceAsBN.minus(estimatedGas).toString(),
                            balance: balanceAsBN.toString(),
                            label: t('plugin_savings_amount'),
                            token: protocol.bareToken,
                            onAmountChange: setInputAmount,
                            InputProps: {
                                classes: {
                                    root: classes.inputTextField
                                }
                            },
                            MaxChipProps: {
                                classes: {
                                    root: classes.maxChip
                                }
                            },
                            SelectTokenChip: {
                                ChipProps: {
                                    classes: {
                                        root: classes.selectTokenChip
                                    }
                                }
                            }
                        })
                    }),
                    loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        textAlign: "right",
                        className: classes.tokenValueUSD,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* LoadingAnimation */.p6, {
                            width: 16,
                            height: 16
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        textAlign: "right",
                        className: classes.tokenValueUSD,
                        children: [
                            "\u2248 ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedCurrency */.bO, {
                                value: tokenValueUSD,
                                sign: "$",
                                formatter: formatter/* formatCurrency */.xG
                            }),
                            estimatedGas > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: classes.gasFee,
                                children: [
                                    "+ ",
                                    (0,formatter/* formatBalance */.az)(estimatedGas, 18),
                                    " ETH"
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.infoRow,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.infoRowLeft,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                                address: protocol.bareToken.address,
                                classes: {
                                    icon: classes.rowImage
                                }
                            }),
                            protocol.bareToken.name,
                            " ",
                            t('plugin_savings_apr'),
                            "%"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.infoRowRight,
                        children: [
                            protocol.apr,
                            "%"
                        ]
                    })
                ]
            }),
            buttonDom
        ]
    });
}

;// CONCATENATED MODULE: ../web3-contracts/abis/AaveProtocolDataProvider.json
const AaveProtocolDataProvider_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"addressesProvider","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ADDRESSES_PROVIDER","outputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllATokens","outputs":[{"components":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"internalType":"struct AaveProtocolDataProvider.TokenData[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllReservesTokens","outputs":[{"components":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"internalType":"struct AaveProtocolDataProvider.TokenData[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveConfigurationData","outputs":[{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"ltv","type":"uint256"},{"internalType":"uint256","name":"liquidationThreshold","type":"uint256"},{"internalType":"uint256","name":"liquidationBonus","type":"uint256"},{"internalType":"uint256","name":"reserveFactor","type":"uint256"},{"internalType":"bool","name":"usageAsCollateralEnabled","type":"bool"},{"internalType":"bool","name":"borrowingEnabled","type":"bool"},{"internalType":"bool","name":"stableBorrowRateEnabled","type":"bool"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isFrozen","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveData","outputs":[{"internalType":"uint256","name":"availableLiquidity","type":"uint256"},{"internalType":"uint256","name":"totalStableDebt","type":"uint256"},{"internalType":"uint256","name":"totalVariableDebt","type":"uint256"},{"internalType":"uint256","name":"liquidityRate","type":"uint256"},{"internalType":"uint256","name":"variableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"stableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"averageStableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"liquidityIndex","type":"uint256"},{"internalType":"uint256","name":"variableBorrowIndex","type":"uint256"},{"internalType":"uint40","name":"lastUpdateTimestamp","type":"uint40"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveTokensAddresses","outputs":[{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtTokenAddress","type":"address"},{"internalType":"address","name":"variableDebtTokenAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"getUserReserveData","outputs":[{"internalType":"uint256","name":"currentATokenBalance","type":"uint256"},{"internalType":"uint256","name":"currentStableDebt","type":"uint256"},{"internalType":"uint256","name":"currentVariableDebt","type":"uint256"},{"internalType":"uint256","name":"principalStableDebt","type":"uint256"},{"internalType":"uint256","name":"scaledVariableDebt","type":"uint256"},{"internalType":"uint256","name":"stableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"liquidityRate","type":"uint256"},{"internalType":"uint40","name":"stableRateLastUpdated","type":"uint40"},{"internalType":"bool","name":"usageAsCollateralEnabled","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/Lido.json
const Lido_namespaceObject = JSON.parse('[{"constant":false,"inputs":[],"name":"resume","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"hasInitialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"depositContract","type":"address"},{"name":"_oracle","type":"address"},{"name":"_operators","type":"address"},{"name":"_treasury","type":"address"},{"name":"_insuranceFund","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInsuranceFund","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethAmount","type":"uint256"}],"name":"getSharesByPooledEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sender","type":"address"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_script","type":"bytes"}],"name":"getEVMScriptExecutor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getRecoveryVault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEPOSIT_SIZE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalPooledEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PAUSE_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTreasury","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SET_ORACLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isStopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MANAGE_WITHDRAWAL_KEY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBufferedEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SIGNATURE_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getWithdrawalCredentials","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFeeDistribution","outputs":[{"name":"treasuryFeeBasisPoints","type":"uint16"},{"name":"insuranceFeeBasisPoints","type":"uint16"},{"name":"operatorsFeeBasisPoints","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sharesAmount","type":"uint256"}],"name":"getPooledEthByShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"}],"name":"setOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"allowRecoverability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInitializationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_treasuryFeeBasisPoints","type":"uint16"},{"name":"_insuranceFeeBasisPoints","type":"uint16"},{"name":"_operatorsFeeBasisPoints","type":"uint16"}],"name":"setFeeDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_feeBasisPoints","type":"uint16"}],"name":"setFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_maxDeposits","type":"uint256"}],"name":"depositBufferedEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"MANAGE_FEE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"transferToVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SET_TREASURY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sender","type":"address"},{"name":"_role","type":"bytes32"},{"name":"_params","type":"uint256[]"}],"name":"canPerform","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_referral","type":"address"}],"name":"submit","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAWAL_CREDENTIALS_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getEVMScriptRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PUBKEY_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_pubkeyHash","type":"bytes32"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDepositContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBeaconStat","outputs":[{"name":"depositedValidators","type":"uint256"},{"name":"beaconValidators","type":"uint256"},{"name":"beaconBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BURN_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_insuranceFund","type":"address"}],"name":"setInsuranceFund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFee","outputs":[{"name":"feeBasisPoints","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SET_INSURANCE_FUND","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isPetrified","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_withdrawalCredentials","type":"bytes32"}],"name":"setWithdrawalCredentials","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositBufferedEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_sharesAmount","type":"uint256"}],"name":"burnShares","outputs":[{"name":"newTotalShares","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_treasury","type":"address"}],"name":"setTreasury","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_beaconValidators","type":"uint256"},{"name":"_beaconBalance","type":"uint256"}],"name":"pushBeacon","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"sharesOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"executor","type":"address"},{"indexed":false,"name":"script","type":"bytes"},{"indexed":false,"name":"input","type":"bytes"},{"indexed":false,"name":"returnData","type":"bytes"}],"name":"ScriptResult","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"vault","type":"address"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RecoverToVault","type":"event"},{"anonymous":false,"inputs":[],"name":"Stopped","type":"event"},{"anonymous":false,"inputs":[],"name":"Resumed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint16"}],"name":"FeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"treasuryFeeBasisPoints","type":"uint16"},{"indexed":false,"name":"insuranceFeeBasisPoints","type":"uint16"},{"indexed":false,"name":"operatorsFeeBasisPoints","type":"uint16"}],"name":"FeeDistributionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"withdrawalCredentials","type":"bytes32"}],"name":"WithdrawalCredentialsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"referral","type":"address"}],"name":"Submitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Unbuffered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"tokenAmount","type":"uint256"},{"indexed":false,"name":"sentFromBuffer","type":"uint256"},{"indexed":true,"name":"pubkeyHash","type":"bytes32"},{"indexed":false,"name":"etherAmount","type":"uint256"}],"name":"Withdrawal","type":"event"}]');
;// CONCATENATED MODULE: ./src/plugins/Savings/protocols/LDOProtocol.ts





class LidoProtocol {
    get apr() {
        return this._apr;
    }
    get balance() {
        return this._balance;
    }
    get bareToken() {
        return this.pair[0];
    }
    get stakeToken() {
        return this.pair[1];
    }
    async updateApr(chainId, web3) {
        try {
            const response = await fetch('https://cors.r2d2.to/?https://stake.lido.fi/api/steth-apr');
            this._apr = await response.text();
        } catch  {
            // the default APR is 5.30%
            this._apr = '5.30';
        }
    }
    async updateBalance(chainId, web3, account) {
        try {
            const contract = (0,useContract/* createContract */.OP)(web3, (0,constants/* getLidoConstants */.oO)(chainId).LIDO_stETH_ADDRESS || primitives/* ZERO_ADDRESS */.r, Lido_namespaceObject);
            this._balance = new (bignumber_default())(await contract?.methods.balanceOf(account).call() ?? '0');
        } catch (error) {
            this._balance = base_src/* ZERO */.xE;
        }
    }
    async depositEstimate(account, chainId, web3, value) {
        try {
            const contract = (0,useContract/* createContract */.OP)(web3, (0,constants/* getLidoConstants */.oO)(chainId).LIDO_stETH_ADDRESS || primitives/* ZERO_ADDRESS */.r, Lido_namespaceObject);
            const gasEstimate = await contract?.methods.submit((0,constants/* getLidoConstants */.oO)(chainId).LIDO_REFERRAL_ADDRESS || primitives/* ZERO_ADDRESS */.r).estimateGas({
                from: account,
                value: value.toString()
            });
            return new (bignumber_default())(gasEstimate || 0);
        } catch (error) {
            console.error('LDO `depositEstimate()` Error', error);
            return new (bignumber_default())(0);
        }
    }
    async deposit(account, chainId, web3, value) {
        try {
            const contract = (0,useContract/* createContract */.OP)(web3, (0,constants/* getLidoConstants */.oO)(chainId).LIDO_stETH_ADDRESS || primitives/* ZERO_ADDRESS */.r, Lido_namespaceObject);
            await contract?.methods.submit((0,constants/* getLidoConstants */.oO)(chainId).LIDO_REFERRAL_ADDRESS || primitives/* ZERO_ADDRESS */.r).send({
                from: account,
                value: value.toString(),
                gas: 300000
            });
            return true;
        } catch (error) {
            console.error('LDO `deposit()` Error', error);
            return false;
        }
    }
    async withdrawEstimate(account, chainId, web3, value) {
        return base_src/* ZERO */.xE;
    }
    async withdraw(account, chainId, web3, value) {
        /*
         * @TODO: Implement withdraw when stETH Beacon Chain allows for withdraws
         *
         * Review: https://github.com/lidofinance/lido-dao when ETH 2.0 is implemented.
         *
         * For now, just redirect to swap plugin
         *
         * await contract.methods
         *     .withdraw(inputTokenTradeAmount, '0x0000000000000000000000000000000000000000')
         *     .send({
         *         from: account,
         *         gasLimit: 2100000,
         *     })
         */ return false;
    }
    constructor(pair){
        this.pair = pair;
        this._apr = '0.00';
        this._balance = base_src/* ZERO */.xE;
        this.type = ProtocolType.Lido;
    }
}

;// CONCATENATED MODULE: ../web3-contracts/abis/AaveLendingPool.json
const AaveLendingPool_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"onBehalfOf","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowRateMode","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowRate","type":"uint256"},{"indexed":true,"internalType":"uint16","name":"referral","type":"uint16"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"onBehalfOf","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint16","name":"referral","type":"uint16"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":true,"internalType":"address","name":"initiator","type":"address"},{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"premium","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"FlashLoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"collateralAsset","type":"address"},{"indexed":true,"internalType":"address","name":"debtAsset","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"debtToCover","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidatedCollateralAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"bool","name":"receiveAToken","type":"bool"}],"name":"LiquidationCall","type":"event"},{"anonymous":false,"inputs":[],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"RebalanceStableBorrowRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"repayer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Repay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"uint256","name":"liquidityRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stableBorrowRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"variableBorrowRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidityIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"variableBorrowIndex","type":"uint256"}],"name":"ReserveDataUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"ReserveUsedAsCollateralDisabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"ReserveUsedAsCollateralEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rateMode","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"FLASHLOAN_PREMIUM_TOTAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LENDINGPOOL_REVISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_NUMBER_RESERVES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STABLE_RATE_BORROW_SIZE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"interestRateMode","type":"uint256"},{"internalType":"uint16","name":"referralCode","type":"uint16"},{"internalType":"address","name":"onBehalfOf","type":"address"}],"name":"borrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"onBehalfOf","type":"address"},{"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"balanceFromBefore","type":"uint256"},{"internalType":"uint256","name":"balanceToBefore","type":"uint256"}],"name":"finalizeTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiverAddress","type":"address"},{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"modes","type":"uint256[]"},{"internalType":"address","name":"onBehalfOf","type":"address"},{"internalType":"bytes","name":"params","type":"bytes"},{"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"flashLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAddressesProvider","outputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getConfiguration","outputs":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.ReserveConfigurationMap","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveData","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.ReserveConfigurationMap","name":"configuration","type":"tuple"},{"internalType":"uint128","name":"liquidityIndex","type":"uint128"},{"internalType":"uint128","name":"variableBorrowIndex","type":"uint128"},{"internalType":"uint128","name":"currentLiquidityRate","type":"uint128"},{"internalType":"uint128","name":"currentVariableBorrowRate","type":"uint128"},{"internalType":"uint128","name":"currentStableBorrowRate","type":"uint128"},{"internalType":"uint40","name":"lastUpdateTimestamp","type":"uint40"},{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtTokenAddress","type":"address"},{"internalType":"address","name":"variableDebtTokenAddress","type":"address"},{"internalType":"address","name":"interestRateStrategyAddress","type":"address"},{"internalType":"uint8","name":"id","type":"uint8"}],"internalType":"struct DataTypes.ReserveData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveNormalizedIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveNormalizedVariableDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReservesList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserAccountData","outputs":[{"internalType":"uint256","name":"totalCollateralETH","type":"uint256"},{"internalType":"uint256","name":"totalDebtETH","type":"uint256"},{"internalType":"uint256","name":"availableBorrowsETH","type":"uint256"},{"internalType":"uint256","name":"currentLiquidationThreshold","type":"uint256"},{"internalType":"uint256","name":"ltv","type":"uint256"},{"internalType":"uint256","name":"healthFactor","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserConfiguration","outputs":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.UserConfigurationMap","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtAddress","type":"address"},{"internalType":"address","name":"variableDebtAddress","type":"address"},{"internalType":"address","name":"interestRateStrategyAddress","type":"address"}],"name":"initReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"provider","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"collateralAsset","type":"address"},{"internalType":"address","name":"debtAsset","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"debtToCover","type":"uint256"},{"internalType":"bool","name":"receiveAToken","type":"bool"}],"name":"liquidationCall","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"rebalanceStableBorrowRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rateMode","type":"uint256"},{"internalType":"address","name":"onBehalfOf","type":"address"}],"name":"repay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"configuration","type":"uint256"}],"name":"setConfiguration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"val","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"rateStrategyAddress","type":"address"}],"name":"setReserveInterestRateStrategyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"bool","name":"useAsCollateral","type":"bool"}],"name":"setUserUseReserveAsCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"rateMode","type":"uint256"}],"name":"swapBorrowRateMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-contracts/abis/ERC20.json
var ERC20 = __webpack_require__(4350);
;// CONCATENATED MODULE: ./src/plugins/Savings/protocols/AAVEProtocol.ts







class AAVEProtocol {
    get type() {
        return ProtocolType.AAVE;
    }
    get apr() {
        return this._apr;
    }
    get balance() {
        return this._balance;
    }
    get bareToken() {
        return this.pair[0];
    }
    get stakeToken() {
        return this.pair[1];
    }
    async updateApr(chainId, web3) {
        try {
            const subgraphUrl = (0,constants/* getAaveConstants */.wG)(chainId).AAVE_SUBGRAPHS || '';
            if (!subgraphUrl) {
                this._apr = AAVEProtocol.DEFAULT_APR;
                return;
            }
            const body = JSON.stringify({
                query: `{
                reserves (where: {
                    underlyingAsset: "${this.bareToken.address}"
                    pool : "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5"
                }) {
                    id
                    name
                    underlyingAsset
                    price {
                     id
                    }
                    liquidityRate
                    }
                }`
            });
            const response = await fetch(subgraphUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const fullResponse = await response.json();
            const liquidityRate = +fullResponse.data.reserves[0].liquidityRate;
            const RAY = (0,base_src/* pow10 */.wA)(27) // 10 to the power 27
            ;
            const SECONDS_PER_YEAR = 31536000;
            // APY and APR are returned here as decimals, multiply by 100 to get the percents
            this._apr = new (bignumber_default())(liquidityRate).times(100).div(RAY).toFixed(2);
        } catch (error) {
            console.error('AAVE: Apr Error:', error);
            this._apr = AAVEProtocol.DEFAULT_APR;
        }
    }
    async updateBalance(chainId, web3, account) {
        try {
            const subgraphUrl = (0,constants/* getAaveConstants */.wG)(chainId).AAVE_SUBGRAPHS || '';
            if (!subgraphUrl) {
                this._apr = AAVEProtocol.DEFAULT_APR;
                return;
            }
            const body = JSON.stringify({
                query: `{
                reserves (where: {
                    underlyingAsset: "${this.bareToken.address}"
                    pool : "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5"
                }) {
                    id
                    aToken {
                      id
                    }
                    }
                }`
            });
            const response = await fetch(subgraphUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const fullResponse = await response.json();
            const aTokenId = fullResponse.data.reserves[0].aToken.id;
            const contract = (0,useContract/* createContract */.OP)(web3, aTokenId || primitives/* ZERO_ADDRESS */.r, ERC20);
            this._balance = new (bignumber_default())(await contract?.methods.balanceOf(account).call() ?? '0');
        } catch (error) {
            console.error('AAVE BALANCE ERROR: ', error);
            this._balance = base_src/* ZERO */.xE;
        }
    }
    async depositEstimate(account, chainId, web3, value) {
        try {
            const operation = await this.createDepositTokenOperation(account, chainId, web3, value);
            const gasEstimate = await operation?.estimateGas({
                from: account
            });
            return new (bignumber_default())(gasEstimate || 0);
        } catch (error) {
            console.error('AAVE deposit estimate ERROR: ', error);
            return base_src/* ZERO */.xE;
        }
    }
    async createDepositTokenOperation(account, chainId, web3, value) {
        const aaveLPoolAddress = (0,constants/* getAaveConstants */.wG)(chainId).AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS || primitives/* ZERO_ADDRESS */.r;
        const lPoolAddressProviderContract = (0,useContract/* createContract */.OP)(web3, aaveLPoolAddress, AaveLendingPoolAddressProvider_namespaceObject);
        const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
        const contract = (0,useContract/* createContract */.OP)(web3, poolAddress || primitives/* ZERO_ADDRESS */.r, AaveLendingPool_namespaceObject);
        return contract?.methods.deposit(this.bareToken.address, new (bignumber_default())(value).toFixed(), account, '0');
    }
    async deposit(account, chainId, web3, value) {
        try {
            const gasEstimate = await this.depositEstimate(account, chainId, web3, value);
            const operation = await this.createDepositTokenOperation(account, chainId, web3, value);
            if (operation) {
                await operation.send({
                    from: account,
                    gas: gasEstimate.toNumber()
                });
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }
    async withdrawEstimate(account, chainId, web3, value) {
        try {
            const lPoolAddressProviderContract = (0,useContract/* createContract */.OP)(web3, (0,constants/* getAaveConstants */.wG)(chainId).AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS || primitives/* ZERO_ADDRESS */.r, AaveLendingPoolAddressProvider_namespaceObject);
            const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
            const contract = (0,useContract/* createContract */.OP)(web3, poolAddress || primitives/* ZERO_ADDRESS */.r, AaveLendingPool_namespaceObject);
            const gasEstimate = await contract?.methods.withdraw(this.bareToken.address, new (bignumber_default())(value).toFixed(), account).estimateGas({
                from: account
            });
            return new (bignumber_default())(gasEstimate || 0);
        } catch (error) {
            return base_src/* ZERO */.xE;
        }
    }
    async withdraw(account, chainId, web3, value) {
        try {
            const lPoolAddressProviderContract = (0,useContract/* createContract */.OP)(web3, (0,constants/* getAaveConstants */.wG)(chainId).AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS || primitives/* ZERO_ADDRESS */.r, AaveLendingPoolAddressProvider_namespaceObject);
            const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
            const gasEstimate = await this.withdrawEstimate(account, chainId, web3, value);
            const contract = (0,useContract/* createContract */.OP)(web3, poolAddress || primitives/* ZERO_ADDRESS */.r, AaveLendingPool_namespaceObject);
            await contract?.methods.withdraw(this.bareToken.address, new (bignumber_default())(value).toFixed(), account).send({
                from: account,
                gas: gasEstimate.toNumber()
            });
            return true;
        } catch (error) {
            return false;
        }
    }
    constructor(pair){
        this.pair = pair;
        this._apr = '0.00';
        this._balance = base_src/* ZERO */.xE;
    }
}
AAVEProtocol.DEFAULT_APR = '0.17';

// EXTERNAL MODULE: ./src/plugins/Savings/constants.ts
var Savings_constants = __webpack_require__(51397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(27862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(62517);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsDialog.tsx























function splitToPair(a) {
    if (!a) {
        return [];
    }
    return a.reduce(function(result, value, index, array) {
        if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
        }
        return result;
    }, []);
}
function SavingsDialog({ open , onClose  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { classes  } = useStyles({
        isDashboard
    });
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const [chainId, setChainId] = (0,react.useState)(currentChainId);
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId
    });
    const [tab, setTab] = (0,react.useState)(TabType.Deposit);
    const [selectedProtocol, setSelectedProtocol] = (0,react.useState)(null);
    const { value: chains = shared_base_src/* EMPTY_LIST */.rP  } = (0,useAsync/* default */.Z)(async ()=>{
        const networks = await messages/* WalletRPC.getSupportedNetworks */.V.getSupportedNetworks();
        return networks.map((network)=>(0,chainDetailed/* getChainIdFromNetworkType */.EP)(network)
        );
    }, []);
    const { value: aaveTokens  } = (0,useAsync/* default */.Z)(async ()=>{
        if (chainId !== types/* ChainId.Mainnet */.a_.Mainnet) {
            return [];
        }
        const address = (0,constants/* getAaveConstants */.wG)(chainId).AAVE_PROTOCOL_DATA_PROVIDER_CONTRACT_ADDRESS || primitives/* ZERO_ADDRESS */.r;
        const protocolDataContract = (0,useContract/* createContract */.OP)(web3, address, AaveProtocolDataProvider_namespaceObject);
        const tokens = await protocolDataContract?.methods.getAllReservesTokens().call();
        const aTokens = await protocolDataContract?.methods.getAllATokens().call();
        return tokens?.map((token)=>{
            return [
                token[1],
                aTokens?.filter((f)=>f[0].toUpperCase() === `a${token[0]}`.toUpperCase()
                )[0][1]
            ];
        });
    }, [
        web3,
        chainId
    ]);
    const { value: detailedAaveTokens  } = (0,useERC20TokenDetailed/* useFungibleTokensDetailed */.b)((0,compact/* default */.Z)((0,flatten/* default */.Z)(aaveTokens ?? [])).map((m)=>{
        return {
            address: m,
            type: types/* EthereumTokenType.ERC20 */.Dr.ERC20
        };
    }) ?? [], chainId);
    const protocols = (0,react.useMemo)(()=>[
            ...Savings_constants/* LDO_PAIRS.filter */.k.filter((x)=>x[0].chainId === chainId
            ).map((pair)=>new LidoProtocol(pair)
            ),
            ...splitToPair(detailedAaveTokens).map((pair)=>new AAVEProtocol(pair)
            ), 
        ]
    , [
        chainId,
        detailedAaveTokens
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        setChainId(currentChainId);
    }, [
        currentChainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useTargetChainIdContext/* TargetChainIdContext.Provider */.Z.Provider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useAllProviderTradeContext/* AllProviderTradeContext.Provider */.TX.Provider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* InjectedDialog */.Fl, {
                open: open,
                title: t('plugin_savings'),
                onClose: ()=>{
                    if (selectedProtocol === null) {
                        onClose?.();
                    } else {
                        setSelectedProtocol(null);
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    children: [
                        !isDashboard ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.walletStatusBox,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {})
                        }) : null,
                        selectedProtocol ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsForm, {
                            tab: tab,
                            chainId: chainId,
                            protocol: selectedProtocol,
                            onClose: onClose
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.abstractTabWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                                        chainId: chainId,
                                        setChainId: setChainId,
                                        classes: classes,
                                        chains: chains
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.tableTabWrapper,
                                    children: protocols.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        textAlign: "center",
                                        children: t('plugin_no_protocol_available')
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(entry/* FolderTabs */.Jc, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* FolderTabPanel */.pL, {
                                                label: "Deposit",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsTable, {
                                                    chainId: chainId,
                                                    tab: TabType.Deposit,
                                                    protocols: protocols,
                                                    setTab: setTab,
                                                    setSelectedProtocol: setSelectedProtocol
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* FolderTabPanel */.pL, {
                                                label: "Withdraw",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsTable, {
                                                    chainId: chainId,
                                                    tab: TabType.Withdraw,
                                                    protocols: protocols.filter((x)=>!x.balance.isZero()
                                                    ),
                                                    setTab: setTab,
                                                    setSelectedProtocol: setSelectedProtocol
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/index.tsx





const sns = {
    ...base/* base */.u,
    init (signal) {},
    ApplicationEntries: [
        {
            RenderEntryComponent ({ disabled  }) {
                const [open, setOpen] = (0,react.useState)(false);
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ApplicationEntry */.Tv, {
                            disabled: disabled,
                            title: "Savings",
                            icon: new URL(/* asset import */ __webpack_require__(92476), __webpack_require__.b).toString(),
                            onClick: ()=>setOpen(true)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsDialog, {
                            open: open,
                            onClose: ()=>setOpen(false)
                        })
                    ]
                });
            },
            defaultSortingPriority: 7
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 52599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ EthereumWalletConnectedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(43369);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletRiskWarningDialog.ts




const useWalletRiskWarningDialog = ()=>{
    const account = (0,useAccount/* useAccount */.m)();
    const [isConfirmed, setConfirmed] = (0,react.useState)(false);
    const fetchRiskWarningStatus = ()=>{
        if (!account) setConfirmed(false);
        else messages/* WalletRPC.getRiskWarningConfirmed */.V.getRiskWarningConfirmed(account).then((confirmed)=>setConfirmed(confirmed ?? false)
        );
    };
    const { openDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletRiskWarningDialogUpdated */.R.events.walletRiskWarningDialogUpdated, fetchRiskWarningStatus);
    (0,react.useEffect)(fetchRiskWarningStatus, [
        account
    ]);
    return {
        isConfirmed,
        openDialog
    };
};

;// CONCATENATED MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx











const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function EthereumWalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const account = (0,useAccount/* useAccount */.m)();
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)();
    // #region remote controlled confirm risk warning
    const { isConfirmed: isRiskWarningConfirmed , openDialog: openRiskWarningDialog  } = useWalletRiskWarningDialog();
    // #endregion
    // #region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    if (!account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
    });
    if (!isRiskWarningConfirmed && !hideRiskWarningConfirmed) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
    });
    if ((0,base_src/* isZero */.Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: children
    });
}


/***/ }),

/***/ 19681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ useAssets)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(67376);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(38443);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAssetsFromChain.ts + 2 modules
var useAssetsFromChain = __webpack_require__(72831);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAssetsFromProvider.ts
var useAssetsFromProvider = __webpack_require__(38392);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var token = __webpack_require__(33690);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAssetsMerged.ts






/**
 * Merge multiple token lists into one which sorted by balance.
 * The order of result values is determined by the order they occur in the array.
 * @param listOfTokens
 */ function useAssetsMerged(...listOfTokens) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const mergedAssets = (0,react.useMemo)(()=>{
        if (!NATIVE_TOKEN_ADDRESS) return src/* EMPTY_LIST */.rP;
        return (0,uniqBy/* default */.Z)(listOfTokens.flatMap((x)=>x
        ), (x)=>`${x.token.chainId}_${(0,formatter/* formatEthereumAddress */.j8)(x.token.address)}`
        ).sort((0,token/* makeSortAssertFn */.Si)(chainId));
    }, [
        NATIVE_TOKEN_ADDRESS,
        ...listOfTokens,
        chainId
    ]);
    return mergedAssets;
}

;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAssets.ts








function useAssets(tokens, chainId) {
    const wallet = (0,useWallet/* useWallet */.O)();
    const { value: nativeTokenDetailed , loading: nativeTokenDetailedLoading , error: nativeTokenDetailedError , retry: retryNativeTokenDetailed ,  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)(chainId === 'all' ? undefined : chainId);
    const { value: assetsFromChain = src/* EMPTY_LIST */.rP , loading: assetsDetailedChainLoading , error: assetsDetailedChainError , retry: retryAssetsDetailedChain ,  } = (0,useAssetsFromChain/* useAssetsFromChain */.R)(nativeTokenDetailed ? [
        nativeTokenDetailed,
        ...tokens
    ] : tokens);
    const { value: assetsFromProvider = src/* EMPTY_LIST */.rP , loading: assetsDetailedProviderLoading , error: assetsDetailedProviderError , retry: retryAssetsDetailedDebank ,  } = (0,useAssetsFromProvider/* useAssetsFromProvider */.u)(chainId);
    const detailedTokensRetry = (0,react.useCallback)(()=>{
        retryNativeTokenDetailed();
        retryAssetsDetailedChain();
        retryAssetsDetailedDebank();
    }, [
        retryNativeTokenDetailed,
        retryAssetsDetailedChain,
        retryAssetsDetailedDebank
    ]);
    const matchedAssetsFromChain = (0,react.useMemo)(()=>assetsFromChain.filter((x)=>!chainId || chainId === 'all' || x.token.chainId === chainId
        )
    , [
        assetsFromChain,
        chainId
    ]);
    const assetsDetailed = useAssetsMerged(assetsFromProvider, matchedAssetsFromChain);
    const assets = (0,react.useMemo)(()=>assetsDetailed.filter((x)=>!wallet?.erc20_token_blacklist.has((0,formatter/* formatEthereumAddress */.j8)(x.token.address))
        )
    , [
        assetsDetailed,
        wallet?.erc20_token_blacklist
    ]);
    return {
        value: assets,
        error: nativeTokenDetailedError || assetsDetailedChainError || assetsDetailedProviderError,
        loading: nativeTokenDetailedLoading || assetsDetailedChainLoading || assetsDetailedProviderLoading,
        retry: detailedTokensRetry
    };
}


/***/ }),

/***/ 80480:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 83000:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6b6e934a36f8a3a456e2.png";

/***/ }),

/***/ 5337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/515b1f27d3dcc143f45d.png";

/***/ }),

/***/ 92476:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ebc9fb84b863c2f23884.png";

/***/ })

}]);