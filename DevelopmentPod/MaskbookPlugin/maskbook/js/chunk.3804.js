(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3804],{

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

/***/ 28839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CopyIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const CopyIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('copy', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.736 12.538c-.898 0-1.68-.267-2.244-.793-.566-.53-.858-1.273-.858-2.117V4.882c0-.84.29-1.58.852-2.109.558-.525 1.335-.795 2.226-.8h.003l4.383-.001c.898 0 1.68.267 2.244.793.566.53.858 1.273.858 2.117v4.746c0 .84-.29 1.58-.852 2.109-.558.525-1.335.794-2.226.8h-.003l-4.383.001v-.533.533Zm0-1.066c-.689 0-1.19-.203-1.516-.507-.32-.3-.52-.745-.52-1.337V4.882c0-.588.198-1.032.516-1.332.322-.303.82-.506 1.5-.51h.002l4.38-.002c.689 0 1.19.203 1.515.507.321.3.52.745.52 1.337v4.746c0 .588-.197 1.032-.516 1.332-.321.302-.818.506-1.5.51l-4.381.002Z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.41 14.615c-.898 0-1.68-.267-2.243-.793-.567-.53-.86-1.273-.86-2.117V6.959c0-1.084.484-1.986 1.37-2.489a.533.533 0 1 1 .526.928c-.514.292-.828.816-.828 1.561v4.746c0 .592.199 1.037.52 1.337.325.304.826.507 1.515.507l4.382-.002c.763-.005 1.295-.259 1.612-.628a.533.533 0 1 1 .81.695c-.563.654-1.418.994-2.418 1h-.003l-4.383.001v-.533.533Z"
        })
    ]
}), '0 0 16 17');


/***/ }),

/***/ 26721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ LinkOutIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const LinkOutIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('LinkOutIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12.6667 13.1667H13.1667V12.6667V8.5H13.5V12.6667C13.5 13.1239 13.1239 13.5 12.6667 13.5H3.33333C2.8711 13.5 2.5 13.1255 2.5 12.6667V3.33333C2.5 2.87451 2.8711 2.5 3.33333 2.5H7.5V2.83333H3.33333H2.83333V3.33333V12.6667V13.1667H3.33333H12.6667ZM13.1667 6.16667V4.27333V3.06623L12.3131 3.91978L6.11333 10.1196L5.88044 9.88667L12.0802 3.68689L12.9338 2.83333H11.7267H9.83333V2.5H13.5V6.16667H13.1667Z",
        fill: "#07101B"
    })
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12.6667 13.1667H13.1667V12.6667V8.5H13.5V12.6667C13.5 13.1239 13.1239 13.5 12.6667 13.5H3.33333C2.8711 13.5 2.5 13.1255 2.5 12.6667V3.33333C2.5 2.87451 2.8711 2.5 3.33333 2.5H7.5V2.83333H3.33333H2.83333V3.33333V12.6667V13.1667H3.33333H12.6667ZM13.1667 6.16667V4.27333V3.06623L12.3131 3.91978L6.11333 10.1196L5.88044 9.88667L12.0802 3.68689L12.9338 2.83333H11.7267H9.83333V2.5H13.5V6.16667H13.1667Z",
        fill: "#F5F5F5"
    })
}), undefined, '0 0 16 16');


/***/ }),

/***/ 47919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ WalletStatusBox)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../icons/general/Copy.tsx
var Copy = __webpack_require__(28839);
// EXTERNAL MODULE: ../icons/general/LinkOut.tsx
var LinkOut = __webpack_require__(26721);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(39969);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../web3-constants/evm/aave.json
var aave = __webpack_require__(36621);
// EXTERNAL MODULE: ../web3-constants/evm/airdrop.json
var airdrop = __webpack_require__(65757);
// EXTERNAL MODULE: ../web3-constants/evm/artblocks.json
var artblocks = __webpack_require__(70901);
// EXTERNAL MODULE: ../web3-constants/evm/cryptoartai.json
var cryptoartai = __webpack_require__(35934);
// EXTERNAL MODULE: ../web3-constants/evm/gitcoin.json
var gitcoin = __webpack_require__(56417);
// EXTERNAL MODULE: ../web3-constants/evm/good-ghosting.json
var good_ghosting = __webpack_require__(42953);
// EXTERNAL MODULE: ../web3-constants/evm/ito.json
var ito = __webpack_require__(25664);
// EXTERNAL MODULE: ../web3-constants/evm/lido.json
var lido = __webpack_require__(34476);
// EXTERNAL MODULE: ../web3-constants/evm/mask-box.json
var mask_box = __webpack_require__(96054);
// EXTERNAL MODULE: ../web3-constants/evm/nft-red-packet.json
var nft_red_packet = __webpack_require__(11847);
// EXTERNAL MODULE: ../web3-constants/evm/pooltogether.json
var pooltogether = __webpack_require__(29690);
// EXTERNAL MODULE: ../web3-constants/evm/red-packet.json
var red_packet = __webpack_require__(76260);
// EXTERNAL MODULE: ../web3-constants/evm/trader.json
var trader = __webpack_require__(24699);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js + 1 modules
var values = __webpack_require__(70682);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 1 modules
var pick = __webpack_require__(46428);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(62517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/filter.js + 1 modules
var filter = __webpack_require__(77063);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
;// CONCATENATED MODULE: ../web3-shared/evm/constants/getContractOwnerDomain.ts














const collect = (data, fields)=>{
    const groupedByFields = (0,values/* default */.Z)((0,pick/* default */.Z)(data, fields));
    const listOfAddresses = groupedByFields.map((v)=>(0,values/* default */.Z)(v)
    );
    const listOfAddress = (0,flatten/* default */.Z)(listOfAddresses);
    const collected = (0,filter/* default */.Z)((0,uniq/* default */.Z)(listOfAddress), Boolean);
    return collected.map((addr)=>addr.toLowerCase()
    );
};
const domainAddressMap = {
    'uniswap.org': collect(trader, [
        'UNISWAP_V2_ROUTER_ADDRESS',
        'UNISWAP_V2_FACTORY_ADDRESS',
        'UNISWAP_SWAP_ROUTER_ADDRESS',
        'UNISWAP_V3_FACTORY_ADDRESS',
        'UNISWAP_V3_QUOTER_ADDRESS', 
    ]),
    'defikingdoms.com': collect(trader, [
        'DEFIKINGDOMS_ROUTER_ADDRESS',
        'DEFIKINGDOMS_FACTORY_ADDRESS'
    ]),
    'app.openswap.one': collect(trader, [
        'OPENSWAP_ROUTER_ADDRESS',
        'OPENSWAP_FACTORY_ADDRESS'
    ]),
    'viper.exchange': collect(trader, [
        'VENOMSWAP_ROUTER_ADDRESS',
        'VENOMSWAP_FACTORY_ADDRESS'
    ]),
    'viperswap.one': collect(trader, [
        'VENOMSWAP_ROUTER_ADDRESS',
        'VENOMSWAP_FACTORY_ADDRESS'
    ]),
    'www.sushi.com': collect(trader, [
        'SUSHISWAP_ROUTER_ADDRESS',
        'SUSHISWAP_FACTORY_ADDRESS'
    ]),
    'quickswap.exchange': collect(trader, [
        'QUICKSWAP_ROUTER_ADDRESS',
        'QUICKSWAP_FACTORY_ADDRESS'
    ]),
    'pancakeswap.finance': collect(trader, [
        'PANCAKESWAP_ROUTER_ADDRESS',
        'PANCAKESWAP_FACTORY_ADDRESS'
    ]),
    'balancer.fi': collect(trader, [
        'BALANCER_EXCHANGE_PROXY_ADDRESS'
    ]),
    'dodoex.io': collect(trader, [
        'DODO_EXCHANGE_PROXY_ADDRESS'
    ]),
    'www.bancor.network': collect(trader, [
        'BANCOR_EXCHANGE_PROXY_ADDRESS'
    ]),
    'traderjoexyz.com': collect(trader, [
        'TRADERJOE_ROUTER_ADDRESS',
        'TRADERJOE_FACTORY_ADDRESS'
    ]),
    'openocean.finance': collect(trader, [
        'OPENOCEAN_EXCHANGE_PROXY_ADDRESS'
    ]),
    'pangolin.exchange': collect(trader, [
        'PANGOLIN_ROUTER_ADDRESS',
        'PANGOLIN_FACTORY_ADDRESS'
    ]),
    'wannaswap.finance': collect(trader, [
        'WANNASWAP_ROUTER_V2_ADDRESS',
        'WANNASWAP_ROUTER_ADDRESS',
        'WANNASWAP_FACTORY_ADDRESS', 
    ]),
    'www.trisolaris.io': collect(trader, [
        'TRISOLARIS_ROUTER_ADDRESS',
        'TRISOLARIS_FACTORY_ADDRESS'
    ]),
    'mdex.com': collect(trader, [
        'MDEX_ROUTER_ADDRESS',
        'MDEX_FACTORY_ADDRESS'
    ]),
    'aave.com': collect(aave, [
        'AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS'
    ]),
    'www.artblocks.io': collect(artblocks, [
        'GEN_ART_721_MINTER'
    ]),
    'www.cryptoart.ai': collect(cryptoartai, [
        'ARTIST_ACCEPTING_BIDS_V2',
        'ARTIST_ACCEPTING_BIDS_V2',
        'CANFT_MARKET'
    ]),
    'gitcoin.co': collect(gitcoin, [
        'GITCOIN_ETH_ADDRESS',
        'BULK_CHECKOUT_ADDRESS'
    ]),
    'goodghosting.com': collect(good_ghosting, [
        'GOOD_GHOSTING_INCENTIVES_CONTRACT_ADDRESS'
    ]),
    'lido.fi': collect(lido, [
        'LIDO_stETH_ADDRESS',
        'LIDO_REFERRAL_ADDRESS'
    ]),
    'pooltogether.com': collect(pooltogether, [
        'MASK_POOL_ADDRESS'
    ]),
    'mask.io': [
        ...collect(airdrop, [
            'AIRDROP_CONTRACT_ADDRESS'
        ]),
        ...collect(ito, [
            'ITO_CONTRACT_ADDRESS'
        ]),
        ...collect(red_packet, [
            'HAPPY_RED_PACKET_ADDRESS_V1',
            'HAPPY_RED_PACKET_ADDRESS_V2',
            'HAPPY_RED_PACKET_ADDRESS_V3',
            'HAPPY_RED_PACKET_ADDRESS_V4', 
        ]),
        ...collect(nft_red_packet, [
            'RED_PACKET_NFT_ADDRESS'
        ]),
        ...collect(mask_box, [
            'MASK_BOX_CONTRACT_ADDRESS'
        ]), 
    ]
};
// Not very common usage, no need to create a map of address-to-domain
function getContractOwnerDomain(address) {
    if (!address) return address;
    const addr = address.toLowerCase();
    const pair = Object.entries(domainAddressMap).find(([, addresses])=>{
        return addresses.includes(addr);
    });
    return pair ? pair[0] : addr;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ./src/components/shared/WalletStatusBox/TransactionList.tsx













const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        list: {
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            padding: 0
        },
        listItem: {
            height: 52,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1, 1),
            '&:nth-child(even)': {
                backgroundColor: theme.palette.background.default
            }
        },
        transaction: {
            width: '100%'
        },
        methodName: {
            fontWeight: 500,
            fontSize: 14,
            textTransform: 'capitalize',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        timestamp: {
            fontSize: 14,
            lineHeight: '18px'
        },
        cell: {
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.text.primary,
            boxSizing: 'border-box'
        },
        linkText: {
            fontSize: 14,
            lineHeight: '18px'
        },
        link: {
            display: 'flex',
            fill: 'none'
        },
        linkIcon: {
            fill: 'none',
            width: 17.5,
            height: 17.5,
            marginLeft: theme.spacing(0.5)
        },
        clear: {
            fontSize: 14,
            color: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.common.white,
            cursor: 'pointer'
        }
    })
);
const statusTextColorMap = {
    [base_src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND]: '#FFB915',
    [base_src/* TransactionStatusType.SUCCEED */.g8.SUCCEED]: '#60DFAB',
    [base_src/* TransactionStatusType.FAILED */.g8.FAILED]: '#FF5F5F'
};
const Transaction = ({ chainId , transaction: tx , onClear =noop/* default */.Z , ...rest })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes , theme  } = useStyles();
    const statusTextMap = {
        [base_src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND]: t('recent_transaction_pending'),
        [base_src/* TransactionStatusType.SUCCEED */.g8.SUCCEED]: t('recent_transaction_success'),
        [base_src/* TransactionStatusType.FAILED */.g8.FAILED]: t('recent_transaction_failed')
    };
    const { Others , TransactionFormatter , TransactionWatcher  } = (0,entry_web3/* useWeb3State */.dM)();
    const address = (tx._tx.to || '').toLowerCase();
    const { value: functionName  } = (0,useAsync/* default */.Z)(async ()=>{
        return TransactionFormatter ? (await TransactionFormatter.formatTransaction(chainId, tx._tx)).title : 'Contract Interaction';
    }, [
        TransactionFormatter
    ]);
    const handleClear = (0,react.useCallback)(()=>{
        onClear(tx);
    }, [
        onClear,
        tx
    ]);
    const domainOrAddress = (0,react.useMemo)(()=>getContractOwnerDomain(address)
    , [
        address
    ]);
    const [txStatus, setTxStatus] = (0,react.useState)(tx.status);
    (0,react.useEffect)(()=>{
        const off = TransactionWatcher?.emitter.on('progress', (id, status, transaction)=>{
            setTxStatus(status);
        });
        return ()=>{
            off?.();
        };
    }, [
        tx.id,
        TransactionWatcher
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                textAlign: "left",
                md: 4,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    overflow: "hidden",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.methodName,
                            title: functionName || '',
                            variant: "body1",
                            fontWeight: 500,
                            children: functionName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.timestamp,
                            variant: "body1",
                            color: theme.palette.text.secondary,
                            children: (0,format/* default */.Z)(tx.createdAt, 'yyyy.MM.dd hh:mm')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                flexGrow: 1,
                md: 4,
                justifyContent: "right",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.linkText,
                        children: address && (0,base_src/* isSameAddress */.Wr)(domainOrAddress, address) ? Others?.formatAddress?.(address, 4) : domainOrAddress || address
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        className: classes.link,
                        href: Others?.explorerResolver.transactionLink?.(chainId, tx.id),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkOut/* LinkOutIcon */.A, {
                            className: classes.linkIcon
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                md: 2,
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontWeight: 400,
                    justifyContent: "center",
                    color: statusTextColorMap[txStatus],
                    fontSize: 14,
                    children: statusTextMap[txStatus]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                md: 2,
                justifyContent: "right",
                children: txStatus === base_src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontWeight: 300,
                    className: classes.clear,
                    onClick: handleClear,
                    children: t('wallet_status_pending_clear')
                }) : null
            })
        ]
    });
};
const TransactionList = /*#__PURE__*/ (0,react.forwardRef)(({ className , transactions , onClear =noop/* default */.Z , ...rest }, ref)=>{
    const { classes  } = useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)();
    if (!transactions.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: classnames_default()(classes.list, className),
        ...rest,
        ref: ref,
        children: transactions.map((tx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                className: classes.listItem,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transaction, {
                    className: classes.transaction,
                    transaction: tx,
                    chainId: chainId,
                    onClear: onClear
                })
            }, tx.id)
        )
    });
});

;// CONCATENATED MODULE: ./src/components/shared/WalletStatusBox/usePendingTransactions.tsx









const usePendingTransactions_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        summaryWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.spacing(1, 1)
        },
        pendingSummary: {
            cursor: 'default',
            color: theme.palette.warning.main,
            fontSize: 14
        },
        noPendingTransactions: {
            padding: theme.spacing(1, 0),
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700
        },
        clearAll: {
            cursor: 'pointer',
            color: theme.palette.primary.main
        },
        hide: {
            display: 'none'
        }
    })
);
function usePendingTransactions() {
    const { classes  } = usePendingTransactions_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    // #region recent pending transactions
    const pendingTransactions = (0,entry_web3/* useRecentTransactions */.Sp)(undefined, base_src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND);
    // frozenTxes would not be reactive to pendingTransactions,
    // it would be recreated then the list shows up.
    const [meltedTxHashes, setMeltedTxHashes] = (0,react.useState)([]);
    const clearRecentTxes = (0,entry_web3/* useClearTransactionsCallback */.S4)();
    const removeRecentTx = (0,entry_web3/* useRemoveTransactionCallback */.kc)();
    const transactions = pendingTransactions.slice(0, 5).filter((tx)=>!meltedTxHashes.includes(tx.id)
    );
    // #endregion
    const summary = pendingTransactions.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.summaryWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()(pendingTransactions.length ? '' : classes.hide),
                children: pendingTransactions.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.pendingSummary,
                    variant: "body2",
                    mr: 1,
                    fontWeight: 700,
                    children: [
                        pendingTransactions.length,
                        ' ',
                        t('wallet_status_pending', {
                            plural: pendingTransactions.length > 1 ? 's' : ''
                        })
                    ]
                }) : null
            }),
            pendingTransactions.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.clearAll,
                onClick: clearRecentTxes,
                fontWeight: 700,
                children: t('wallet_status_pending_clear_all')
            }) : null
        ]
    }) : null;
    const transactionList = transactions.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionList, {
        transactions: transactions,
        onClear: (tx)=>{
            setMeltedTxHashes((list)=>[
                    ...list,
                    tx.id
                ]
            );
            removeRecentTx(tx.id);
        }
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.noPendingTransactions,
        children: t('wallet_status_no_pending_transactions')
    });
    return {
        summary,
        transactionList
    };
}

;// CONCATENATED MODULE: ./src/components/shared/WalletStatusBox/index.tsx















const WalletStatusBox_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { contentBackground  })=>({
        content: {
            padding: theme.spacing(2, 3, 3)
        },
        currentAccount: {
            padding: theme.spacing(0, 1.5),
            marginBottom: theme.spacing(2),
            display: 'flex',
            background: contentBackground ?? ((0,shared_base_src/* isDashboardPage */.K2)() ? (0,entry/* getMaskColor */.nb)(theme).primaryBackground2 : theme.palette.background.default),
            borderRadius: 8,
            alignItems: 'center',
            height: 82
        },
        dashboardBackground: {
            background: theme.palette.background.default
        },
        accountInfo: {
            fontSize: 16,
            flexGrow: 1,
            marginLeft: theme.spacing(1.5)
        },
        accountName: {
            color: theme.palette.maskColor?.dark,
            fontWeight: 700,
            fontSize: 14,
            marginRight: 5,
            lineHeight: '18px'
        },
        balance: {
            color: theme.palette.maskColor?.dark,
            fontSize: 14,
            paddingTop: 2,
            lineHeight: '18px'
        },
        infoRow: {
            display: 'flex',
            alignItems: 'center'
        },
        actionButton: {
            fontSize: 12,
            color: 'white',
            backgroundColor: theme.palette.maskColor?.dark,
            marginLeft: theme.spacing(1),
            padding: theme.spacing(1, 2),
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            }
        },
        address: {
            fontSize: 16,
            marginRight: theme.spacing(1),
            display: 'inline-block'
        },
        link: {
            fontSize: 14,
            display: 'flex',
            alignItems: 'center'
        },
        twitterProviderBorder: {
            width: 14,
            height: 14
        },
        connectButtonWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: theme.spacing(2, 0)
        },
        icon: {
            width: 17.5,
            height: 17.5,
            marginRight: theme.spacing(0.5)
        },
        copyIcon: {
            fill: (0,shared_base_src/* isDashboardPage */.K2)() ? theme.palette.text.primary : theme.palette.maskColor?.dark
        },
        linkIcon: {
            stroke: (0,shared_base_src/* isDashboardPage */.K2)() ? theme.palette.text.primary : theme.palette.maskColor?.dark
        },
        statusBox: {
            position: 'relative'
        }
    })
);
function WalletStatusBox(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const providerDescriptor = (0,entry_web3/* useProviderDescriptor */.fY)();
    const { classes  } = WalletStatusBox_useStyles({
        contentBackground: providerDescriptor?.backgroundGradient
    });
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)();
    const chainId = (0,entry_web3/* useChainId */.xx)();
    const account = (0,entry_web3/* useAccount */.mA)();
    const wallet = (0,entry_web3/* useWallet */.Os)();
    const { value: balance = '0' , loading: loadingBalance  } = (0,entry_web3/* useBalance */.KQ)();
    const { value: nativeToken , loading: loadingNativeToken  } = (0,entry_web3/* useNativeToken */.u0)();
    const networkDescriptor = (0,entry_web3/* useNetworkDescriptor */.Vw)();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)();
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(undefined, account);
    // #region copy addr to clipboard
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const onCopy = (0,src/* useSnackbarCallback */.iD)(async (ev)=>{
        ev.stopPropagation();
        copyToClipboard(account);
    }, [], undefined, undefined, undefined, t('copy_success_of_wallet_addr'));
    // #endregion
    // #region change provider
    const { openDialog: openSelectProviderDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    const { closeDialog: closeWalletStatusDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    // #endregion
    const { summary: pendingSummary , transactionList  } = usePendingTransactions();
    return account ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classnames_default()(classes.statusBox, classes.currentAccount, (0,shared_base_src/* isDashboardPage */.K2)() ? classes.dashboardBackground : ''),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* WalletIcon */.o, {
                        size: 30,
                        badgeSize: 12,
                        mainIcon: providerDescriptor?.icon,
                        badgeIcon: networkDescriptor?.icon
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.accountInfo,
                        children: [
                            types/* ProviderType.MaskWallet */.lP.MaskWallet === providerDescriptor?.type ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.accountName,
                                children: wallet?.name
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.infoRow,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.accountName,
                                        children: domain && Others?.formatDomainName ? Others.formatDomainName(domain) : /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedAddress */.Kv, {
                                            address: account,
                                            size: 4,
                                            formatter: Others?.formatAddress
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        className: classes.link,
                                        underline: "none",
                                        component: "button",
                                        title: t('wallet_status_button_copy_address'),
                                        onClick: onCopy,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Copy/* CopyIcon */.T, {
                                            className: classnames_default()(classes.icon, classes.copyIcon)
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        className: classes.link,
                                        href: Others?.explorerResolver.addressLink?.(chainId, account) ?? '',
                                        target: "_blank",
                                        title: t('plugin_wallet_view_on_explorer'),
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkOut/* LinkOutIcon */.A, {
                                            className: classnames_default()(classes.icon, classes.linkIcon)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.infoRow,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.balance,
                                    children: loadingNativeToken || loadingBalance ? '-' : `${(0,base_src/* formatBalance */.az)(balance, nativeToken?.decimals, 3)} ${nativeToken?.symbol}`
                                })
                            })
                        ]
                    }),
                    !props.disableChange && /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classnames_default()(classes.actionButton),
                                variant: "contained",
                                size: "small",
                                onClick: async ()=>{
                                    await connection.disconnect();
                                    closeWalletStatusDialog();
                                    openSelectProviderDialog();
                                },
                                children: t('plugin_wallet_disconnect')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classnames_default()(classes.actionButton),
                                variant: "contained",
                                size: "small",
                                onClick: openSelectProviderDialog,
                                children: t('wallet_status_button_change')
                            })
                        ]
                    })
                ]
            }),
            props.showPendingTransaction ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    pendingSummary,
                    transactionList
                ]
            }) : null
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: classes.connectButtonWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            className: classnames_default()(classes.actionButton),
            color: "primary",
            variant: "contained",
            size: "small",
            onClick: openSelectProviderDialog,
            children: t('plugin_wallet_on_connect')
        })
    });
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


/***/ })

}]);