(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6668],{

/***/ 2169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 96813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ MarketsIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


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

/***/ 53731:
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
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
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

// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenDetailed.ts
var useFungibleTokenDetailed = __webpack_require__(12777);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2239);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 5 modules
var useERC20TokenDetailed = __webpack_require__(29782);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(44371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ./src/plugins/ITO/messages.ts
var messages = __webpack_require__(861);
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
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(89260);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(33429);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/startCase.js
var startCase = __webpack_require__(38601);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(69958);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var ITO_constants = __webpack_require__(22668);
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
var checkAvailability = __webpack_require__(42814);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useAvailability.ts



function useAvailability(id, contract_address) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { ITO_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const isV1 = (0,utils_address/* isSameAddress */.Wr)(contract_address ?? '', ITO_CONTRACT_ADDRESS);
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
var useContract = __webpack_require__(3858);
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
    const qualificationAddress = (payload.qualification_address ?? availability?.qualification_addr) ?? DEFAULT_QUALIFICATION2_ADDRESS;
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(29812);
// EXTERNAL MODULE: ../web3-contracts/abis/ITO.json
var ITO = __webpack_require__(34517);
// EXTERNAL MODULE: ../web3-contracts/abis/ITO2.json
var ITO2 = __webpack_require__(47744);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useITO_Contract.ts



function useITO_Contract(contractAddress) {
    const { ITO_CONTRACT_ADDRESS , ITO2_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const ITO_CONTRACT = (0,useContract/* useContract */.cq)(ITO_CONTRACT_ADDRESS, ITO);
    const ITO2_CONTRACT = (0,useContract/* useContract */.cq)(ITO2_CONTRACT_ADDRESS, ITO2);
    return contractAddress && (0,utils_address/* isSameAddress */.Wr)(contractAddress, ITO_CONTRACT_ADDRESS) ? {
        contract: ITO_CONTRACT,
        version: 1
    } : {
        contract: ITO2_CONTRACT,
        version: 2
    };
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimCallback.ts





function useClaimCallback(pids, contractAddress) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { ITO_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const { contract: ITO_Contract  } = useITO_Contract(contractAddress);
    const [claimState, setClaimState] = (0,useTransactionState/* useTransactionState */.p)();
    const isV1 = (0,utils_address/* isSameAddress */.Wr)(ITO_CONTRACT_ADDRESS ?? '', contractAddress);
    const claimCallback = (0,react.useCallback)(async ()=>{
        if (!ITO_Contract || !contractAddress || pids.length === 0) {
            setClaimState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setClaimState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // check if already claimed
        try {
            const availabilityList = await Promise.all(pids.map((pid)=>(0,checkAvailability/* checkAvailability */.g)(pid, account, contractAddress, chainId, isV1)
            ));
            const isClaimed = availabilityList.some((availability)=>availability.claimed
            );
            if (isClaimed) {
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error: new Error('Already Claimed')
                });
                return;
            }
        } catch  {
            setClaimState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Failed to check availability.')
            });
            return;
        }
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await ITO_Contract.methods.claim(pids).estimateGas({
                from: account
            }).catch((error)=>{
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            ITO_Contract.methods.claim(pids).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setClaimState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        chainId,
        ITO_Contract,
        json_stable_stringify_default()(pids),
        isV1
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setClaimState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        claimState,
        claimCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useDestructCallback.ts



function useDestructCallback(ito_address) {
    const account = (0,useAccount/* useAccount */.m)();
    const { contract: ITO_Contract  } = useITO_Contract(ito_address);
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
var StyledLinearProgress = __webpack_require__(21339);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(82651);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(41197);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNetworkType.ts
var useNetworkType = __webpack_require__(96151);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(24790);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailedFromTokenLists.ts





function useERC20TokenDetailedFromTokenLists(address) {
    const { ERC20  } = (0,constants/* useTokenListConstants */.HQ)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { fetchERC20TokensFromTokenLists  } = (0,context/* useWeb3Context */.Z_)();
    const { value: allTokens = [] , loading: loadingAllTokens  } = (0,useAsync/* default */.Z)(async ()=>!ERC20 || ERC20.length === 0 ? [] : fetchERC20TokensFromTokenLists(ERC20, chainId)
    , [
        chainId,
        ERC20?.sort().join()
    ]);
    return {
        loading: loadingAllTokens,
        tokensDetailed: allTokens.find((token)=>(0,utils_address/* isSameAddress */.Wr)(address, token.address)
        )
    };
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/RemindDialog.tsx











const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), {});
    const [agreeReminder, setAgreeReminder] = (0,react.useState)(false);
    const networkType = (0,useNetworkType/* useNetworkType */.b)();
    const { tokensDetailed  } = useERC20TokenDetailedFromTokenLists(token.address);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                        logoURI: tokensDetailed?.logoURI
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
    });
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ShareDialog.tsx









const ShareDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const classes = (0,entry/* useStylesExtends */.Bc)(ShareDialog_useStyles(), {});
    const { token , actualSwapAmount , shareSuccessText , onClose  } = props;
    const amount = (0,formatter/* formatBalance */.az)(actualSwapAmount, token.decimals);
    const onShareSuccess = (0,react.useCallback)(async ()=>{
        onClose();
        if (!shareSuccessText) return;
        social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareSuccessText);
    }, [
        shareSuccessText,
        onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
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
                    children: (0,src/* isZero */.Fr)(actualSwapAmount) ? t('plugin_ito_out_of_stock_hit') : t('plugin_ito_congratulations')
                }),
                shareSuccessText ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: onShareSuccess,
                    variant: "contained",
                    color: "primary",
                    className: classes.shareButton,
                    children: t('plugin_ito_dialog_swap_share_title')
                }) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(52813);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Slider/Slider.js
var Slider = __webpack_require__(18881);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(44632);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(52599);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(79154);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC165.ts
var useERC165 = __webpack_require__(21002);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useQualificationVerify.ts




function useQualificationVerify(address, ito_address) {
    const account = (0,useAccount/* useAccount */.m)();
    const { contract: qualificationContract , version  } = useQualificationContract(address, ito_address);
    const { value: isQualificationHasLucky , loading: loadingQualificationHasLucky  } = (0,useERC165/* useERC165 */.i)(qualificationContract, address, ITO_constants/* QUALIFICATION_HAS_LUCKY_INTERFACE_ID */.tu);
    const { value: isQualification , loading: loadingQualification  } = (0,useERC165/* useERC165 */.i)(qualificationContract, address, version === 1 ? ITO_constants/* QUALIFICATION_INTERFACE_ID */.bJ : ITO_constants/* QUALIFICATION2_INTERFACE_ID */.tZ);
    const { value: qualificationHasStartTime , loading: loadingQualificationHasStartTime  } = (0,useERC165/* useERC165 */.i)(qualificationContract, address, ITO_constants/* QUALIFICATION_HAS_START_TIME_INTERFACE_ID */.Zl);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSwapCallback.ts









function useSwapCallback(payload, total, token, isQualificationHasLucky = false) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { ITO_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const { contract: ITO_Contract , version  } = useITO_Contract(payload.contract_address);
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
        if (!(0,src/* isPositive */.xP)(total)) {
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
            if ((0,src/* isZero */.Fr)(availability.remaining)) {
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
        const swapParamsV1 = [
            pid,
            lib_default().soliditySha3(lib_default().hexToNumber(`0x${(0,shared_base_src/* toHex */.NC)((0,shared_base_src/* fromHex */.H_)(lib_default().sha3(password) ?? '').slice(0, 5))}`), account),
            lib_default().sha3(account),
            swapTokenAt,
            total, 
        ];
        const swapParamsV2 = [
            pid,
            lib_default().soliditySha3(lib_default().hexToNumber(`0x${(0,shared_base_src/* toHex */.NC)((0,shared_base_src/* fromHex */.H_)(lib_default().sha3(password) ?? '').slice(0, 5))}`), account),
            swapTokenAt,
            total,
            [], 
        ];
        // estimate gas and compose transaction
        const value = (0,src/* toFixed */.FH)(token.type === types/* EthereumTokenType.Native */.Dr.Native ? total : 0);
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
                setSwapState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt,
                    reason: !receipt.events?.SwapSuccess ? t('plugin_ito_swap_unlucky_fail') : undefined
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

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/SwapDialog.tsx


















const SwapDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const classes = (0,entry/* useStylesExtends */.Bc)(SwapDialog_useStyles(), props);
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
    const [inputAmountForUI, setInputAmountForUI] = (0,react.useState)(swapAmount1.isZero() ? '' : (0,formatter/* formatBalance */.az)(swapAmount1, swapToken?.decimals));
    // #region select token
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await pickToken({
            disableNativeToken: !exchangeTokens.some(utils_address/* isNativeTokenAddress */.qw),
            disableSearchBar: true,
            whitelist: exchangeTokens.map((x)=>x.address
            )
        });
        if (!picked) return;
        const at = exchangeTokens.findIndex((0,utils_address/* currySameAddress */.DC)(picked.address));
        const ratio = new (bignumber_default())(payload.exchange_amounts[at * 2]).dividedBy(payload.exchange_amounts[at * 2 + 1]);
        setRatio(ratio);
        setSwapToken(picked);
        setTokenAmount(initAmount);
        setSwapAmount(initAmount.multipliedBy(ratio));
        setInputAmountForUI(initAmount.isZero() ? '' : (0,formatter/* formatBalance */.az)(initAmount.multipliedBy(ratio), picked.decimals));
    }, [
        initAmount,
        payload,
        pickToken,
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
    }, qualificationInfo?.isQualificationHasLucky);
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
    const { setDialog: setTransactionDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (swapState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && !swapState.receipt.status) resetSwapCallback();
        if (swapState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && swapState.type !== types/* TransactionStateType.RECEIPT */.n$.RECEIPT) return;
        const { receipt  } = swapState;
        const { to_value  } = receipt.events?.SwapSuccess.returnValues ?? {};
        setActualSwapAmount(to_value);
        setStatus(SwapStatus.Share);
        resetSwapCallback();
    });
    (0,react.useEffect)(()=>{
        if (swapState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        if (swapState.type === types/* TransactionStateType.HASH */.n$.HASH) {
            const { hash  } = swapState;
            setTimeout(()=>{
                (0,shared_base_ui_src/* openWindow */.xw)((0,pipes/* resolveTransactionLinkOnExplorer */.z4)(chainId, hash));
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
            symbol: swapToken?.symbol
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
                    const val = value === '' || value === '0' ? src/* ZERO */.xE : (0,src/* rightShift */.pu)(value, swapToken.decimals);
                    const isMax = value === (0,formatter/* formatBalance */.az)(maxAmount, swapToken.decimals) && !val.isZero();
                    const tokenAmount = isMax ? maxSwapAmount : val.dividedBy(ratio1);
                    const swapAmount = isMax ? tokenAmount.multipliedBy(ratio1) : val.dp(0);
                    setInputAmountForUI(isMax ? (0,src/* leftShift */.w5)(tokenAmount.multipliedBy(ratio1), swapToken.decimals).toString() : value);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(31008);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/UnlockDialog.tsx













function isMoreThanMillion(allowance, decimals) {
    return (0,src/* isGreaterThan */.T1)(allowance, `100000000000e${decimals}`) // 100 billion
    ;
}
const UnlockDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await pickToken({
            disableNativeToken: true,
            disableSearchBar: true,
            selectedTokens: token?.address ? [
                token.address
            ] : [],
            whitelist: tokens.map((x)=>x.address
            )
        });
        if (picked) setToken(picked);
    }, [
        tokens,
        token?.address
    ]);
    // #endregion
    // #region amount
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    const amount = (0,src/* rightShift */.pu)(rawAmount || '0', token?.decimals);
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(token?.type ?? types/* EthereumTokenType.Native */.Dr.Native, token?.address ?? '');
    // #endregion
    if (!tokens.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: t('plugin_ito_empty_token')
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                label: "Amount",
                amount: rawAmount,
                balance: tokenBalance ?? '0',
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
                        symbol: token.symbol ?? 'Unknown'
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
                                symbol: token.symbol ?? 'Token'
                            }) : t('plugin_ito_amount_unlocked', {
                                amount: (0,formatter/* formatBalance */.az)(allowance, token.decimals, 2),
                                symbol: token.symbol ?? 'Token'
                            })
                        })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/SwapGuide.tsx













var SwapStatus;
(function(SwapStatus) {
    SwapStatus[SwapStatus["Remind"] = 0] = "Remind";
    SwapStatus[SwapStatus["Swap"] = 1] = "Swap";
    SwapStatus[SwapStatus["Share"] = 2] = "Share";
    SwapStatus[SwapStatus["Unlock"] = 3] = "Unlock";
})(SwapStatus || (SwapStatus = {}));
const SwapGuide_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const { status , payload , exchangeTokens , isBuyer , open , retryPayload , shareSuccessText , total_remaining , onUpdate , onClose ,  } = props;
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
    const initAmount = src/* ZERO */.xE;
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
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
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RemindDialog, {
                            token: payload.token,
                            chainId: chainId,
                            setStatus: onUpdate
                        });
                    case SwapStatus.Unlock:
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlockDialog, {
                            tokens: payload.exchange_tokens.filter((x)=>!(0,utils_address/* isSameAddress */.Wr)(NATIVE_TOKEN_ADDRESS, x.address)
                            )
                        });
                    case SwapStatus.Swap:
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapDialog, {
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
                        });
                    case SwapStatus.Share:
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShareDialog, {
                            shareSuccessText: shareSuccessText,
                            poolName: payload.message,
                            token: payload.token,
                            actualSwapAmount: actualSwapAmount,
                            onClose: onCloseShareDialog
                        });
                    default:
                        return null;
                }
            })()
        })
    });
}

// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(1650);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(37732);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ITO.tsx

































const ITO_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
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
            width: props.snsId === shared_base_src/* EnhanceableSite.Facebook */.Jk.Facebook ? '98%' : '100%',
            maxWidth: props.snsId === shared_base_src/* EnhanceableSite.Facebook */.Jk.Facebook ? 'auto' : 470
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
            maxWidth: props.snsId === shared_base_src/* EnhanceableSite.Facebook */.Jk.Facebook ? 'auto' : 470,
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
    const { classes  } = ITO_useStyles({});
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                    (0,utils_address/* isSameAddress */.Wr)(exchangeToken.address, NATIVE_TOKEN_ADDRESS) ? (0,chainDetailed/* getChainDetailed */.$G)(exchangeToken.chainId)?.nativeCurrency.symbol : exchangeToken.symbol,
                    ' ',
                    "/ ",
                    token.symbol
                ]
            })
        ]
    });
};
function ITO_ITO(props) {
    // context
    const account = (0,useAccount/* useAccount */.m)();
    const postLink = (0,usePostInfo/* usePostLink */.V)();
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
    const sellerName = payload.seller.name ? payload.seller.name : message.split(ITO_constants/* MSG_DELIMITER */.Z3)[0] === message ? (0,formatter/* formatEthereumAddress */.j8)(payload.seller.address, 4) : message.split(ITO_constants/* MSG_DELIMITER */.Z3)[0];
    const title = message.split(ITO_constants/* MSG_DELIMITER */.Z3)[1] ?? message;
    const regions = message.split(ITO_constants/* MSG_DELIMITER */.Z3)[2] ?? defaultRegions;
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
    const total_remaining = new bignumber.BigNumber(availability?.remaining ?? '0');
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
    const { openDialog: openSelectProviderDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    // #region buy info
    const { value: tradeInfo , loading: loadingTradeInfo , retry: retryPoolTradeInfo  } = usePoolTradeInfo(pid, account);
    const isBuyer = chainId === payload.chain_id && ((0,src/* isGreaterThan */.T1)(availability?.swapped ?? 0, 0) || Boolean(availability?.claimed));
    const successShareText = t((0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_ito_claim_success_share' : 'plugin_ito_claim_success_share_no_official_account', {
        user: sellerName,
        link: postLink,
        symbol: token1.symbol,
        account: (0,base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? t('facebook_account') : t('twitter_account')
    });
    const canWithdraw = (0,react.useMemo)(()=>!availability?.destructed && isAccountSeller && !availability?.exchanged_tokens.every(src/* isZero */.Fr) && (listOfStatus.includes(ITO_Status.expired) || noRemain)
    , [
        tradeInfo,
        listOfStatus,
        isAccountSeller,
        noRemain,
        loadingTradeInfo
    ]);
    const refundAmount = (0,react.useMemo)(()=>{
        const buyInfo = tradeInfo?.buyInfo;
        if (!buyInfo) return src/* ZERO */.xE;
        return new bignumber.BigNumber(buyInfo.amount).minus(buyInfo.amount_sold);
    }, [
        tradeInfo
    ]);
    // out of stock
    const refundAllAmount = tradeInfo?.buyInfo && (0,src/* isZero */.Fr)(tradeInfo?.buyInfo.amount_sold);
    const onShareSuccess = (0,react.useCallback)(async ()=>{
        social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(successShareText);
    }, [
        successShareText
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
    const [claimState, claimCallback] = useClaimCallback([
        pid
    ], payload.contract_address);
    const { setDialog: setClaimTransactionDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (claimState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED || claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && claimState.no !== 0) return;
        window.location.reload();
    });
    (0,react.useEffect)(()=>{
        if (claimState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN || claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && claimState.no !== 0) return;
        setClaimTransactionDialog({
            open: true,
            state: claimState,
            summary: `Claiming ${(0,formatter/* formatBalance */.az)(availability?.swapped ?? 0, token1.decimals)} ${token1?.symbol ?? 'Token'}.`
        });
    }, [
        claimState /* update tx dialog only if state changed */ 
    ]);
    // #endregion
    const shareText = t((0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_ito_claim_foreshow_share' : 'plugin_ito_claim_foreshow_share_no_official_account', {
        link: postLink,
        name: token1.name,
        symbol: token1.symbol ?? 'token',
        account: (0,base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? t('facebook_account') : t('twitter_account')
    });
    const onShare = (0,react.useCallback)(async ()=>{
        social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
    }, [
        shareText
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
    const { setDialog: setTransactionDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
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
        availability?.exchange_addrs.forEach((addr, i)=>{
            const token = exchange_tokens.find((0,utils_address/* currySameAddress */.DC)(addr));
            const comma = noRemain && i === 0 ? ' ' : ', ';
            if (token) {
                summary += comma + (0,formatter/* formatBalance */.az)(availability?.exchanged_tokens[i], token.decimals) + ' ' + token.symbol;
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
        if (refundAllAmount) {
            return t('plugin_ito_out_of_stock_hit');
        }
        const _text = new bignumber.BigNumber(availability?.swapped || 0).isGreaterThan(0) ? t('plugin_ito_your_swapped_amount', {
            amount: (0,formatter/* formatBalance */.az)(availability?.swapped || 0, token1.decimals),
            symbol: token1.symbol
        }) : t('plugin_ito_your_claimed_amount', {
            amount: (0,formatter/* formatBalance */.az)(tradeInfo?.buyInfo?.amount_bought || 0, token1.decimals),
            symbol: token1.symbol
        });
        if (refundAmount.isZero() || refundAmount.isLessThan(0)) {
            return `${_text}.`;
        }
        return `${_text}, ${t('plugin_ito_your_refund_amount', {
            amount: (0,formatter/* formatBalance */.az)(refundAmount, tradeInfo?.buyInfo?.token.decimals ?? 0),
            symbol: tradeInfo?.buyInfo?.token.symbol
        })}`;
    }, [
        availability?.swapped,
        refundAllAmount,
        refundAmount,
        token1.decimals,
        token1.symbol,
        tradeInfo?.buyInfo?.token.decimals,
        tradeInfo?.buyInfo?.token.symbol, 
    ]);
    const FooterStartTime = (0,react.useMemo)(()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            className: classes.footerInfo,
            children: t('plugin_ito_list_start_date', {
                date: (0,format/* default */.Z)(startTime, 'yyyy-MM-dd HH:mm')
            })
        });
    }, [
        startTime
    ]);
    const FooterEndTime = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
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
    const FooterSwapInfo = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.footerInfo,
                    children: swapResultText
                }),
                FooterEndTime,
                hasLockTime && !isUnlocked && unlockTime > Date.now() && new bignumber.BigNumber(availability?.swapped || 0).isGreaterThan(0) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.footerInfo,
                    children: t('plugin_ito_wait_unlock_time', {
                        unlockTime: (0,format/* default */.Z)(unlockTime, 'yyyy-MM-dd HH:mm')
                    })
                }) : null
            ]
        })
    , [
        FooterEndTime,
        swapResultText
    ]);
    const FooterNormal = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.footerInfo,
                    children: t('plugin_ito_allocation_per_wallet', {
                        limit: (0,formatter/* formatBalance */.az)(limit, token1.decimals),
                        token: token1.symbol
                    })
                }),
                listOfStatus.includes(ITO_Status.waited) ? FooterStartTime : listOfStatus.includes(ITO_Status.started) ? FooterEndTime : null
            ]
        })
    , [
        FooterEndTime,
        FooterStartTime,
        limit,
        listOfStatus,
        token1.decimals,
        token1.symbol
    ]);
    const FooterBuyerLockedButton = (0,react.useMemo)(()=>{
        if (!availability?.claimed) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                onClick: claimCallback,
                variant: "contained",
                size: "large",
                disabled: claimState.type === types/* TransactionStateType.HASH */.n$.HASH,
                className: classes.actionButton,
                children: claimState.type === types/* TransactionStateType.HASH */.n$.HASH ? t('plugin_ito_claiming') : t('plugin_ito_claim')
            });
        }
        if (canWithdraw) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                onClick: onWithdraw,
                variant: "contained",
                size: "large",
                className: classes.actionButton,
                children: t('plugin_ito_withdraw')
            });
        }
        return null;
    }, [
        availability?.claimed,
        canWithdraw,
        claimState
    ]);
    const FooterBuyerWithLockTimeButton = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
            item: true,
            xs: noRemain || listOfStatus.includes(ITO_Status.expired) ? 12 : 6,
            children: (()=>{
                if (isUnlocked) return FooterBuyerLockedButton;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: ()=>undefined
                    ,
                    variant: "contained",
                    disabled: true,
                    size: "large",
                    className: classnames_default()(classes.actionButton, classes.textInOneLine),
                    children: t('plugin_ito_claim')
                });
            })()
        })
    , [
        noRemain,
        listOfStatus,
        isUnlocked
    ]);
    const FooterBuyerButton = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: (()=>{
                if (hasLockTime) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    container: true,
                    spacing: 2,
                    children: FooterBuyerWithLockTimeButton
                });
                if (canWithdraw) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        onClick: onWithdraw,
                        variant: "contained",
                        size: "large",
                        className: classes.actionButton,
                        children: t('plugin_ito_withdraw')
                    });
                }
                return null;
            })()
        })
    , [
        hasLockTime,
        canWithdraw
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                                children: isBuyer ? FooterSwapInfo : listOfStatus.includes(ITO_Status.expired) ? FooterEndTime : FooterNormal
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
                children: (()=>{
                    if (loadingRegion && isRegionRestrict) return null;
                    if (!isRegionAllow) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            disabled: true,
                            onClick: ()=>undefined
                            ,
                            variant: "contained",
                            size: "large",
                            className: classes.actionButton,
                            children: t('plugin_ito_region_ban')
                        });
                    }
                    if ((noRemain || listOfStatus.includes(ITO_Status.expired)) && !canWithdraw && (availability?.claimed && hasLockTime || !hasLockTime)) {
                        return null;
                    }
                    if (loadingTradeInfo || loadingAvailability) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            disabled: true,
                            onClick: ()=>undefined
                            ,
                            variant: "contained",
                            size: "large",
                            className: classes.actionButton,
                            children: t('plugin_ito_loading')
                        });
                    }
                    if (!account || !chainIdValid) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            onClick: openSelectProviderDialog,
                            variant: "contained",
                            size: "large",
                            className: classes.actionButton,
                            children: t('plugin_wallet_connect_a_wallet')
                        });
                    }
                    if (isBuyer) return FooterBuyerButton;
                    if (canWithdraw) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            onClick: onWithdraw,
                            variant: "contained",
                            size: "large",
                            className: classes.actionButton,
                            children: t('plugin_ito_withdraw')
                        });
                    }
                    if ((!ifQualified || !ifQualified.qualified) && !(0,utils_address/* isNativeTokenAddress */.qw)(qualificationAddress)) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            onClick: retryIfQualified,
                            loading: loadingIfQualified,
                            variant: "contained",
                            size: "large",
                            className: classes.actionButton,
                            children: loadingIfQualified ? t('plugin_ito_qualification_loading') : !ifQualified ? t('plugin_ito_qualification_failed') : !ifQualified.qualified ? (0,startCase/* default */.Z)(ifQualified.errorMsg) : null
                        });
                    }
                    if (listOfStatus.includes(ITO_Status.expired)) return null;
                    if (listOfStatus.includes(ITO_Status.waited)) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
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
                                shareText ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
                        });
                    }
                    if (listOfStatus.includes(ITO_Status.started)) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
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
                        });
                    }
                    return null;
                })()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapGuide, {
                status: claimDialogStatus,
                total_remaining: total_remaining,
                payload: {
                    ...payload,
                    qualification_address: qualificationAddress
                },
                shareSuccessText: successShareText,
                isBuyer: isBuyer,
                exchangeTokens: exchange_tokens,
                open: openClaimDialog,
                onUpdate: setClaimDialogStatus,
                onClose: ()=>setOpenClaimDialog(false)
                ,
                retryPayload: retryITOCard
            })
        ]
    });
}
function ITO_Loading() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(52872), __webpack_require__.b));
    const { classes  } = ITO_useStyles({});
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
    });
}
function ITO_Error({ retryPoolPayload  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ITO_useStyles({});
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(52872), __webpack_require__.b));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
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
    });
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PostInspector.tsx







function PostInspector(props) {
    const { chain_id , pid  } = props.payload;
    const isCompactPayload_ = (0,helpers/* isCompactPayload */.cr)(props.payload);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { value: payload , error , loading , retry: retryPayload ,  } = usePoolPayload(isCompactPayload_ && chainId === chain_id ? pid : '');
    const _payload = payload ?? props.payload;
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
        if (isCompactPayload_) {
            if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Loading, {});
            if (error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Error, {
                retryPoolPayload: retry
            });
        }
        if (loadingToken && typeof token === 'string' || tokenDetailed?.symbol?.toUpperCase() === 'UNKNOWN') return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Loading, {});
        if (!tokenDetailed && typeof token === 'string') return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Error, {
            retryPoolPayload: retry
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_ITO, {
            pid: pid,
            payload: typeof token === 'string' ? {
                ..._payload,
                token: tokenDetailed,
                exchange_tokens: exchangeTokensDetailed
            } : _payload
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: chain_id,
        children: renderITO()
    });
}

// EXTERNAL MODULE: ./src/plugins/ITO/base.ts
var ITO_base = __webpack_require__(1725);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(68043);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(7284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(69315);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(37214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ./src/web3/UI/DateTimePanel.tsx
var DateTimePanel = __webpack_require__(25233);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(1536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(57566);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/AdvanceSetting.tsx




var SettingField;
(function(SettingField) {
    SettingField["IPRegion"] = "IPRegion";
    SettingField["delayUnlocking"] = "delayUnlocking";
    SettingField["contract"] = "contract";
})(SettingField || (SettingField = {}));
const AdvanceSetting_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("fieldset", {
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
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(69911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/ArrowDownward.js
var ArrowDownward = __webpack_require__(98078);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/AddOutlined.js
var AddOutlined = __webpack_require__(31372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/RemoveOutlined.js
var RemoveOutlined = __webpack_require__(14650);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ExchangeTokenPanel.tsx










const ExchangeTokenPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await pickToken({
            disableNativeToken: isSell,
            blacklist: excludeTokensAddress,
            selectedTokens: [
                exchangeToken?.address || '',
                ...selectedTokensAddress
            ]
        });
        if (picked) onExchangeTokenChange(picked, dataIndex);
    }, [
        isSell,
        dataIndex,
        exchangeToken?.address,
        excludeTokensAddress.sort().join(),
        selectedTokensAddress.sort().join(), 
    ]);
    // #endregion
    // #region balance
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(exchangeToken?.type ?? types/* EthereumTokenType.Native */.Dr.Native, exchangeToken?.address ?? '');
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
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
    });
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ExchangeTokenPanelGroup.tsx










const ExchangeTokenPanelGroup_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
        setSelectedTokensAddress(exchangeTokenArray.map((x)=>x.token?.address ?? ''
        ));
    }, [
        exchangeTokenArray,
        onTokenAmountChange
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: exchangeTokenArray.map((item, idx)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
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
                                        props.token?.symbol,
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
            }, idx);
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useDebounce.js
var useDebounce = __webpack_require__(18356);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(24446);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(3379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FilledInput/FilledInput.js
var FilledInput = __webpack_require__(60832);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(20476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(16451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(43754);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/RegionSelect.tsx








const RegionSelect_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
const RegionSelect = /*#__PURE__*/ (0,react.forwardRef)(({ value =[] , onRegionChange , ...props }, ref)=>{
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
    const refItem = (0,react.useMemo)(()=>({
            focus: ()=>{
                displayRef.current?.focus();
            }
        })
    , []);
    (0,react.useImperativeHandle)(ref, ()=>refItem
    , [
        refItem
    ]);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
            (0,entry/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Popover/* default */.ZP, {
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
                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
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
                                }, region.code);
                            })
                        })
                    ]
                })
            )
        ]
    });
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























const CreateForm_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
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
    const { onChangePoolSettings , onNext , origin , onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(CreateForm_useStyles(), props);
    const account = (0,useAccount/* useAccount */.m)();
    const { ITO2_CONTRACT_ADDRESS , DEFAULT_QUALIFICATION2_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const senderName = (currentIdentity?.identifier.userId ?? currentIdentity?.linkedPersona?.nickname) ?? 'Unknown User';
    const [message, setMessage] = (0,react.useState)(origin?.title ?? '');
    const [totalOfPerWallet, setTotalOfPerWallet] = (0,react.useState)((0,src/* isZero */.Fr)(origin?.limit || '0') ? '' : (0,formatter/* formatBalance */.az)(origin?.limit || '0', origin?.token?.decimals));
    const [tokenAndAmount, setTokenAndAmount] = (0,react.useState)();
    const TAS = [];
    if (origin?.token && origin?.total) {
        TAS.push({
            token: origin?.token,
            amount: (0,formatter/* formatBalance */.az)(origin?.total || '0', origin?.token.decimals),
            key: (0,v4/* default */.Z)()
        });
    }
    if (origin?.exchangeTokens && origin?.exchangeAmounts) {
        origin?.exchangeTokens.map((i, x)=>TAS.push({
                amount: (0,formatter/* formatBalance */.az)(origin?.exchangeAmounts[x] || '0', i?.decimals),
                token: i,
                key: (0,v4/* default */.Z)()
            })
        );
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
    const [startTime, setStartTime] = (0,react.useState)(origin?.startTime || new Date());
    const [endTime, setEndTime] = (0,react.useState)(origin?.endTime || new Date());
    const [unlockTime, setUnlockTime] = (0,react.useState)(origin?.unlockTime || new Date());
    const GMT = new Date().getTimezoneOffset() / 60 * -1;
    // amount for displaying
    const inputTokenAmount = (0,formatter/* formatAmount */.dN)(tokenAndAmount?.amount || '0', tokenAndAmount?.token?.decimals);
    // balance
    const { value: tokenBalance = '0'  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(tokenAndAmount?.token?.type ?? types/* EthereumTokenType.Native */.Dr.Native, tokenAndAmount?.token?.address ?? '');
    const RE_MATCH_WHOLE_AMOUNT = (0,react.useMemo)(()=>new RegExp(`^\\d*\\.?\\d{0,${tokenAndAmount?.token?.decimals ?? 18}}$`)
    , [
        tokenAndAmount?.token?.decimals
    ]);
    const onTotalOfPerWalletChange = (0,react.useCallback)((ev)=>{
        const total = ev.currentTarget.value;
        if (!RE_MATCH_WHOLE_AMOUNT.test(total)) return;
        if (total === '') setTotalOfPerWallet('');
        if (/^\d+\.?\d*$/.test(total)) {
            setTotalOfPerWallet(total);
        }
    }, [
        tokenAndAmount?.token?.decimals,
        RE_MATCH_WHOLE_AMOUNT
    ]);
    // qualificationAddress
    const [qualificationAddress, setQualificationAddress] = (0,react.useState)(origin?.qualificationAddress && origin.qualificationAddress !== DEFAULT_QUALIFICATION2_ADDRESS ? origin.qualificationAddress : '');
    const { value: qualification , loading: loadingQualification  } = useQualificationVerify(qualificationAddress, ITO2_CONTRACT_ADDRESS);
    // advance settings
    const [advanceSettingData, setAdvanceSettingData] = (0,react.useState)(origin?.advanceSettingData || {});
    // restrict regions
    const [regions, setRegions] = useRegionSelect(decodeRegionCode(origin?.regions ?? '-'));
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
        const [first, ...rest] = tokenAndAmounts;
        const qualificationAddress_ = qualification?.isQualification && advanceSettingData.contract ? qualificationAddress : DEFAULT_QUALIFICATION2_ADDRESS;
        if (!qualificationAddress_) return;
        setTokenAndAmount(first);
        onChangePoolSettings({
            // this is the raw password which should be signed by the sender
            password: lib_default().sha3(message) ?? '',
            name: senderName,
            title: message,
            limit: (0,formatter/* formatAmount */.dN)(totalOfPerWallet || '0', first?.token?.decimals),
            token: first?.token,
            total: (0,formatter/* formatAmount */.dN)(first?.amount || '0', first?.token?.decimals),
            exchangeAmounts: rest.map((item)=>(0,formatter/* formatAmount */.dN)(item.amount || '0', item?.token?.decimals)
            ),
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
        if (tokenAndAmounts.length === 0) return t('plugin_ito_error_enter_amount_and_token');
        for (const { amount , token  } of tokenAndAmounts){
            if (!token) return t('plugin_ito_error_select_token');
            if (amount === '') return t('plugin_ito_error_enter_amount');
            if ((0,src/* isZero */.Fr)(amount)) return t('plugin_ito_error_enter_amount');
        }
        if ((0,src/* isGreaterThan */.T1)(tokenAndAmount?.amount ?? '0', tokenBalance)) return t('plugin_ito_error_balance', {
            symbol: tokenAndAmount?.token?.symbol
        });
        if (!totalOfPerWallet || (0,src/* isZero */.Fr)(totalOfPerWallet)) return t('plugin_ito_error_allocation_absence');
        if ((0,src/* isGreaterThan */.T1)(totalOfPerWallet, tokenAndAmount?.amount ?? '0')) return t('plugin_ito_error_allocation_invalid');
        if (startTime >= endTime) return t('plugin_ito_error_exchange_time');
        if (endTime >= unlockTime && advanceSettingData.delayUnlocking) return t('plugin_ito_error_unlock_time');
        if (qualification?.startTime) {
            if (new Date(Number(qualification.startTime) * 1000) >= endTime) return t('plugin_ito_error_qualification_start_time');
        }
        if (!qualification?.isQualification && advanceSettingData.contract && qualificationAddress.length > 0) {
            return t('plugin_ito_error_invalid_qualification');
        }
        return '';
    }, [
        endTime,
        unlockTime,
        advanceSettingData,
        qualification,
        startTime,
        tokenAndAmount?.amount,
        tokenAndAmount?.token?.symbol,
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                style: {
                    display: 'block'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExchangeTokenPanelGroup, {
                    token: tokenAndAmount?.token,
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
                        endAdornment: tokenAndAmount?.token?.symbol,
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
                            endAdornment: qualification?.isQualification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classnames_default()(classes.iconWrapper, classes.success),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                                    fontSize: "small",
                                    style: {
                                        color: '#77E0B5'
                                    }
                                })
                            }) : qualification?.loadingERC165 || loadingQualification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
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
                    qualification?.startTime && new Date(Number(qualification.startTime) * 1000) > startTime ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                        token: tokenAndAmount?.token?.type === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? tokenAndAmount.token : undefined,
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
    });
}

// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(77522);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockNumber.ts
var useBlockNumber = __webpack_require__(93328);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(23501);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(55694);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(80804);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(56125);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(16296);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(76492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(76594);
;// CONCATENATED MODULE: ./src/web3/hooks/useTransactionDialog.ts




function useTransactionDialog(event, state, stateType, resetCallback) {
    // close the transaction dialog
    const { open , setDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0_react@18.0.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(66040);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PoolInList.tsx



















const PoolInList_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
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
    const isDebugging = (0,use_subscription.useSubscription)(shared/* PersistentStorages.Settings.storage.debugging.subscription */._H.Settings.storage.debugging.subscription);
    // #region Fetch tokens detailed
    const { value: _tokenDetailed  } = (0,useFungibleTokenDetailed/* useFungibleTokenDetailed */.j)(types/* EthereumTokenType.ERC20 */.Dr.ERC20, pool.token_address ?? pool.token.address);
    const poolToken = pool.token ?? _tokenDetailed;
    const { exchange_token_addresses  } = pool;
    const _poolTokens = exchange_token_addresses ? exchange_token_addresses.map((v)=>({
            address: v,
            type: (0,utils_address/* isSameAddress */.Wr)(v, NATIVE_TOKEN_ADDRESS) ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20
        })
    ) : [];
    const { value: _exchangeTokens  } = (0,useERC20TokenDetailed/* useFungibleTokensDetailed */.b)(_poolTokens);
    const exchangeTokens = pool.exchange_tokens ?? _exchangeTokens;
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
    const title = pool.message.split(ITO_constants/* MSG_DELIMITER */.Z3)[1] ?? pool.message;
    const noRemain = (0,src/* isZero */.Fr)(pool.total_remaining);
    const { listOfStatus  } = availabilityComputed;
    const isWithdrawn = tradeInfo?.destructInfo;
    const canWithdraw = !isWithdrawn && (listOfStatus.includes(ITO_Status.expired) || noRemain);
    // Note: After upgrade to Asymmetrical secret key in the future, `canSend` requires `password` exists.
    const canSend = !listOfStatus.includes(ITO_Status.expired) && !noRemain;
    const base = new (bignumber_default())(pool.total).minus(pool.total_remaining).dividedBy(pool.total).toNumber();
    const progress = 100 * base;
    const StatusButton = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
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
                onClick: ()=>onSend?.((0,omit/* default */.Z)({
                        ...pool,
                        token: poolToken,
                        exchange_tokens: exchangeTokens
                    }, [
                        'token_addresses',
                        'exchange_token_addresses', 
                    ]))
                ,
                children: t('plugin_ito_list_button_send')
            }) : isWithdrawn ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                fullWidth: true,
                size: "small",
                variant: "contained",
                disabled: true,
                children: t('plugin_ito_withdrawn')
            }) : null
        });
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
                                        isDebugging ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
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
                                            children: exchangeTokens.map((token, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            style: {
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: (0,utils_address/* isSameAddress */.Wr)(token.address, NATIVE_TOKEN_ADDRESS) ? (0,chainDetailed/* getChainDetailed */.$G)(token.chainId)?.nativeCurrency.symbol : token.symbol
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            children: [
                                                                (0,formatter/* formatBalance */.az)(new (bignumber_default())(pool.exchange_amounts[index * 2]).dividedBy(pool.exchange_amounts[index * 2 + 1]).shiftedBy(poolToken.decimals - exchangeTokens[index].decimals).shiftedBy(exchangeTokens[index].decimals).integerValue(), token.decimals, 6),
                                                                ' ',
                                                                (0,utils_address/* isSameAddress */.Wr)(token.address, NATIVE_TOKEN_ADDRESS) ? (0,chainDetailed/* getChainDetailed */.$G)(token.chainId)?.nativeCurrency.symbol : token.symbol,
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
                                                }, index)
                                            )
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








const PoolList_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
    });
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(46140);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(35827);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(99192);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useFill.ts











function useFillCallback(poolSettings) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { contract: ITO_Contract  } = useITO_Contract();
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
    const { contract: ITO_Contract  } = useITO_Contract();
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
        const ONE_TOKEN = src/* ONE.shiftedBy */.ry.shiftedBy(token.decimals ?? 0);
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
            password: primitives/* FAKE_SIGN_PASSWORD */.D,
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
        setFillState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Invalid start time.')
        });
        return false;
    }
    // error: the end time before BASE TIMESTAMP
    if (paramsObj.endTime < 0) {
        setFillState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Invalid end time.')
        });
        return false;
    }
    // error: the unlock time before BASE TIMESTAMP
    if (paramsObj.unlockTime < 0) {
        setFillState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Invalid unlock time.')
        });
        return false;
    }
    // error: the start time after the end time
    if (paramsObj.startTime >= paramsObj.endTime) {
        setFillState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('The start date should before the end date.')
        });
        return false;
    }
    // error: the end time before now
    if (paramsObj.endTime <= paramsObj.now) {
        setFillState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('The end date should be a future date.')
        });
        return false;
    }
    // error: unlock time before end time
    if (paramsObj.endTime >= paramsObj.unlockTime && paramsObj.unlockTime !== 0) {
        setFillState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('The unlock date should be later than end date.')
        });
        return false;
    }
    // error: limit greater than the total supply
    if ((0,src/* isGreaterThan */.T1)(paramsObj.limit, paramsObj.total)) {
        setFillState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Limits should less than the total supply.')
        });
        return false;
    }
    // error: exceed the max available total supply
    if ((0,src/* isGreaterThan */.T1)(paramsObj.total, '2e128')) {
        setFillState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Exceed the max available total supply')
        });
        return false;
    }
    // error: The size of amounts and the size of tokens not match
    if (paramsObj.exchangeAmounts.length !== paramsObj.exchangeTokens.length) {
        setFillState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Cannot match amounts with tokens.')
        });
        return false;
    }
    // error: token amount is not enough for dividing into integral pieces
    if (paramsObj.invalidTokenAt >= 0) {
        setFillState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error(`Cannot swap enough ${paramsObj.token.symbol ?? ''} out with ${paramsObj.exchangeTokens[paramsObj.invalidTokenAt].symbol ?? ''}`)
        });
        return false;
    }
    return true;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Launch.js
var Launch = __webpack_require__(47514);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Repeat.js
var Repeat = __webpack_require__(16762);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ConfirmDialog.tsx













const useSwapItemStyles = (0,entry/* makeStyles */.ZL)()({
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
    const amount_ = (0,formatter/* formatBalance */.az)(swapAmount || '0', swap?.decimals);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                color: "textPrimary",
                children: t('plugin_ito_swap_title', {
                    swap: exchange ? swap?.symbol : token?.symbol,
                    token: exchange ? token?.symbol : swap?.symbol,
                    amount: exchange ? src/* ONE.dividedBy */.ry.dividedBy(amount_).toFixed() : amount_
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
    });
}
const ConfirmDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const { poolSettings , onDone , onBack , onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ConfirmDialog_useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { DEFAULT_QUALIFICATION2_ADDRESS  } = (0,constants/* useITOConstants */.mg)();
    const showQualification = poolSettings?.advanceSettingData.contract && poolSettings?.qualificationAddress !== DEFAULT_QUALIFICATION2_ADDRESS;
    const stop = (0,react.useCallback)((ev)=>ev.stopPropagation()
    , []);
    (0,react.useEffect)(()=>{
        if (poolSettings?.token?.chainId !== chainId) onClose();
    }, [
        onClose,
        chainId,
        poolSettings
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
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
                        children: poolSettings?.title
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
                                children: poolSettings?.token?.symbol
                            }),
                            (0,utils_address/* isNativeTokenAddress */.qw)(poolSettings?.token) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: (0,pipes/* resolveTokenLinkOnExplorer */.yW)(poolSettings?.token),
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
                                value: poolSettings?.total,
                                decimals: poolSettings?.token?.decimals,
                                symbol: poolSettings?.token?.symbol,
                                formatter: formatter/* formatBalance */.az
                            })
                        })
                    })
                }),
                poolSettings?.exchangeTokens.filter(Boolean).map((item, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
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
                                    swapAmount: poolSettings?.exchangeAmounts[index]
                                })
                            })
                        ]
                    }, index);
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
                                value: poolSettings?.limit,
                                decimals: poolSettings?.token?.decimals,
                                symbol: poolSettings?.token?.symbol,
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
                            children: (0,format/* default */.Z)(poolSettings?.startTime, 'yyyy-MM-dd HH:mm:ss')
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
                            children: (0,format/* default */.Z)(poolSettings?.endTime, 'yyyy-MM-dd HH:mm:ss')
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
                                    href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, poolSettings?.qualificationAddress),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                            address: poolSettings?.qualificationAddress,
                                            size: 4,
                                            formatter: formatter/* formatEthereumAddress */.j8
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }) : null,
                poolSettings?.regions ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                                        decodeRegionCode(poolSettings?.regions).length,
                                        "/",
                                        regionCodes.length
                                    ]
                                })
                            })
                        })
                    ]
                }) : null,
                poolSettings?.unlockTime ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                                    children: (0,format/* default */.Z)(poolSettings?.unlockTime, 'yyyy-MM-dd HH:mm:ss')
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
                            total: (0,formatter/* formatBalance */.az)(poolSettings?.total, poolSettings?.token?.decimals),
                            symbol: poolSettings?.token?.symbol
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set.js
var set = __webpack_require__(24730);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/CompositionDialog.tsx
























const CompositionDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { snsId  })=>({
        content: {
            ...snsId === shared_src/* MINDS_ID */.fN ? {
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
    const { attachMetadata , dropMetadata  } = (0,entry_content_script/* useCompositionContext */.Cp)();
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
    // #endregion
    const { closeDialog: closeWalletStatusDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    const { setDialog: setTransactionDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        // reset state
        resetFillCallback();
        // no contract is available
        if (!ITO2_CONTRACT_ADDRESS) return;
        // the settings is not available
        if (!fillSettings?.token) return;
        // early return happened
        if (fillState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
        const { receipt  } = fillState;
        const FillSuccess = receipt.events?.FillSuccess.returnValues ?? {};
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
            unlock_time: fillSettings.unlockTime?.getTime() ?? 0,
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
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const senderName = (currentIdentity?.identifier.userId ?? currentIdentity?.linkedPersona?.nickname) ?? 'Unknown User';
    const onCreateOrSelect = (0,react.useCallback)(async (payload)=>{
        if (!payload.password) {
            const [, title] = payload.message.split(ITO_constants/* MSG_DELIMITER */.Z3);
            payload.password = await service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign(lib_default().sha3(title) ?? '', account);
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
        payloadDetail.seller.name = senderName;
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
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateForm, {
                    onNext: onNext,
                    onClose: onClose,
                    origin: poolSettings,
                    onChangePoolSettings: setPoolSettings
                }),
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
        if (!poolSettings?.token || fillState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            state: fillState,
            summary: t('plugin_ito_transaction_dialog_summary', {
                amount: (0,formatter/* formatBalance */.az)(poolSettings?.total, poolSettings?.token.decimals),
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
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
                    onDone: fillCallback,
                    onClose: onClose
                }) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ../icons/plugins/Markets.tsx
var Markets = __webpack_require__(96813);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../plugin-infra/src/entry-dom.ts + 1 modules
var entry_dom = __webpack_require__(3267);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(62517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(927);
// EXTERNAL MODULE: ./src/components/shared/NetworkTab.tsx
var NetworkTab = __webpack_require__(91956);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox.tsx
var WalletStatusBox = __webpack_require__(51257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var wallet_ts_dist = __webpack_require__(99674);
;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/apis/spaceStationGalaxy.ts



const CAMPAIGN_ID = 160;
const WHITE_LIST_INFO_FIELD = `
    maxCount
    usedCount
`;
async function fetchFromSubgraph(query) {
    const subgraphURL = (0,constants/* getSpaceStationGalaxyConstants */.h6)(types/* ChainId.Matic */.a_.Matic)?.SUBGRAPH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        body: json_stable_stringify_default()({
            query
        }),
        headers: {
            'content-type': 'application/json'
        }
    });
    const { data  } = await response.json();
    return data;
}
async function getClaimableTokenCount(address, id) {
    const data = await fetchFromSubgraph(`
    {
        campaign(id: ${id}) {
            whitelistInfo(address: "${address.toLowerCase()}") {
                ${WHITE_LIST_INFO_FIELD}
            }
        }
    }
    `);
    if (!data || !wallet_ts_dist.EthereumAddress.isValid(address)) return {
        maxCount: -1,
        usedCount: 0
    };
    const { campaign: { whitelistInfo  } ,  } = data;
    return whitelistInfo;
}
async function getCampaignInfo(id) {
    const data = await fetchFromSubgraph(`
    {
        campaign(id: ${id}) {
            chain
            name
            endTime
            startTime
            description
            gamification {
                nfts {
                  nft {
                    image
                  }
                }
              }
        }
    }
    `);
    if (!data) throw new Error('Failed to load payload.');
    const { campaign: { chain , name , description , endTime , startTime , gamification: { nfts  } ,  } ,  } = data;
    return {
        id,
        chain,
        name,
        description,
        endTime,
        startTime,
        nfts: nfts.map((v)=>v.nft
        )
    };
}
// (Matic) Mask Social Defi Alliance
// https://bulletlabs.notion.site/Matic-Mask-Social-Defi-Alliance-f798356212604dc7b3c6f8fbf066de21
async function getAccountClaimSignature(userSignature, account, chain, id) {
    const data = await fetchFromSubgraph(`
      mutation {
        prepareParticipate(input: {
            signature:"${userSignature}",
            campaignID: ${id},
            address: "${account}",
            mintCount: 1,
            chain: ${chain}
        }){
            allow
            signature
            mintFuncInfo {
                nftCoreAddress
                verifyIDs
                powahs
            }
        }
      }
    `);
    if (!data?.prepareParticipate.mintFuncInfo) return {
        allow: false,
        signature: '',
        verifyIDs: [],
        nftCoreAddress: '',
        powahs: []
    };
    const { prepareParticipate: { allow , signature , mintFuncInfo: { verifyIDs , nftCoreAddress , powahs  } ,  } ,  } = data;
    return {
        allow,
        signature,
        verifyIDs,
        nftCoreAddress,
        powahs
    };
}
async function mutationParticipate(userSignature, account, chain, id, txHash, verifyIDs) {
    const data = await fetchFromSubgraph(`
    mutation {
        participate(input: {
            signature:"${userSignature}",
            campaignID: ${id},
            address: "${account}",
            tx: "${txHash}",
            verifyIDs: ${verifyIDs},
            chain: ${chain}
        }){
            participated
        }
    }
    `);
    if (!data) throw new Error('Failed to load payload.');
    return data.participate.participated;
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSpaceStationCampaignInfo.ts


const CAMPAIGN_ID_LIST = [
    160,
    175,
    176,
    177,
    178,
    179,
    180
];
function useSpaceStationCampaignInfo(address, nftAirdropEnabled) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !nftAirdropEnabled) return [];
        return Promise.all(CAMPAIGN_ID_LIST.map(async (id)=>{
            const campaignInfo = await getCampaignInfo(id);
            const data = await getClaimableTokenCount(address, id);
            const claimableInfo = {
                claimable: data.maxCount - data.usedCount > 0,
                claimed: data.maxCount > 0 && data.maxCount - data.usedCount === 0
            };
            return {
                campaignInfo,
                claimableInfo
            };
        }));
    }, [
        address
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSpaceStationClaimableTokenCountCallback.ts



function useSpaceStationClaimableTokenCountCallback() {
    const [spaceStationAccountClaimableLoading, setSpaceStationAccountClaimableLoading] = (0,react.useState)(false);
    const [spaceStationClaimableCount, setSpaceStationClaimableCount] = (0,react.useState)(undefined);
    const spaceStationAccountClaimableCallback = (0,react.useCallback)(async (address)=>{
        setSpaceStationAccountClaimableLoading(true);
        const data = await Promise.all(CAMPAIGN_ID_LIST.map(async (id)=>{
            const claimableCount = await getClaimableTokenCount(address, id);
            return claimableCount.maxCount - claimableCount.usedCount > 0;
        }));
        setSpaceStationAccountClaimableLoading(false);
        setSpaceStationClaimableCount(data.filter((v)=>Boolean(v)
        ).length);
    }, [
        setSpaceStationAccountClaimableLoading,
        getClaimableTokenCount,
        setSpaceStationAccountClaimableLoading
    ]);
    return [
        spaceStationClaimableCount,
        setSpaceStationClaimableCount,
        spaceStationAccountClaimableCallback,
        spaceStationAccountClaimableLoading, 
    ];
}

;// CONCATENATED MODULE: ../web3-contracts/abis/SpaceStationGalaxy.json
const SpaceStationGalaxy_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_cid","type":"uint256"}],"name":"EventActivateCampaign","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_cid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_dummyId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_nftID","type":"uint256"},{"indexed":false,"internalType":"address","name":"_sender","type":"address"}],"name":"EventClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_cid","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"_dummyIdArr","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_nftIDArr","type":"uint256[]"},{"indexed":false,"internalType":"address","name":"_sender","type":"address"}],"name":"EventClaimBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_cid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_dummyId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_nftID","type":"uint256"},{"indexed":false,"internalType":"address","name":"_sender","type":"address"}],"name":"EventForge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256","name":"_dummyId","type":"uint256"},{"internalType":"uint256","name":"_powah","type":"uint256"},{"internalType":"address","name":"_account","type":"address"}],"name":"_hash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256[]","name":"_dummyIdArr","type":"uint256[]"},{"internalType":"uint256[]","name":"_powahArr","type":"uint256[]"},{"internalType":"address","name":"_account","type":"address"}],"name":"_hashBatch","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256[]","name":"_nftIDs","type":"uint256[]"},{"internalType":"uint256","name":"_dummyId","type":"uint256"},{"internalType":"uint256","name":"_powah","type":"uint256"},{"internalType":"address","name":"_account","type":"address"}],"name":"_hashForge","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"_verify","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"uint256","name":"_platformFee","type":"uint256"},{"internalType":"uint256","name":"_erc20Fee","type":"uint256"},{"internalType":"address","name":"_erc20","type":"address"}],"name":"activateCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"campaignFeeConfigs","outputs":[{"internalType":"address","name":"erc20","type":"address"},{"internalType":"uint256","name":"erc20Fee","type":"uint256"},{"internalType":"uint256","name":"platformFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"campaign_setter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256","name":"_dummyId","type":"uint256"},{"internalType":"uint256","name":"_powah","type":"uint256"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256[]","name":"_dummyIdArr","type":"uint256[]"},{"internalType":"uint256[]","name":"_powahArr","type":"uint256[]"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"claimBatch","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cid","type":"uint256"},{"internalType":"contract IStarNFTUpgradeable","name":"_starNFT","type":"address"},{"internalType":"uint256[]","name":"_nftIDs","type":"uint256[]"},{"internalType":"uint256","name":"_dummyId","type":"uint256"},{"internalType":"uint256","name":"_powah","type":"uint256"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"forge","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"galaxy_signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"hasMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"address","name":"setter","type":"address"},{"internalType":"address","name":"contract_manager","type":"address"},{"internalType":"address","name":"treasury","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury_manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateCampaignSetter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateGalaxySigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newAddress","type":"address"}],"name":"updateTreasureManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSpaceStationContract.ts


function useSpaceStationContract() {
    const { CONTRACT_ADDRESS  } = (0,constants/* useSpaceStationGalaxyConstants */.gE)();
    return (0,useContract/* useContract */.cq)(CONTRACT_ADDRESS, SpaceStationGalaxy_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSpaceStationContractClaimCallback.ts





function useSpaceStationContractClaimCallback(campaignInfo) {
    const account = (0,useAccount/* useAccount */.m)();
    const spaceStationContract = useSpaceStationContract();
    const { CONTRACT_ADDRESS  } = (0,constants/* useSpaceStationGalaxyConstants */.gE)();
    const [claimState, setClaimState] = (0,useTransactionState/* useTransactionState */.p)();
    const claimCallback = (0,react.useCallback)(async ()=>{
        if (!CONTRACT_ADDRESS || !spaceStationContract || !campaignInfo) {
            setClaimState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setClaimState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        let useSignature = '';
        try {
            useSignature = await service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign(`${campaignInfo.name}

${campaignInfo.description}`, account);
        } catch (error1) {
            setClaimState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Not allowed to claim.')
            });
        }
        const { allow , signature , verifyIDs , nftCoreAddress , powahs  } = await getAccountClaimSignature(useSignature, account, campaignInfo.chain, campaignInfo.id);
        if (!allow) {
            setClaimState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Not allowed to claim.')
            });
        }
        const params = [
            campaignInfo.id,
            nftCoreAddress,
            verifyIDs[0],
            powahs[0],
            signature
        ];
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await spaceStationContract.methods.claim(...params).estimateGas({
                from: account
            }).catch((error)=>{
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        return new Promise(async (resolve, reject)=>{
            spaceStationContract.methods.claim(...params).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, async (hash)=>{
                const participated = await mutationParticipate(useSignature, account, campaignInfo.chain, campaignInfo.id, hash, verifyIDs);
                if (!participated) {
                    setClaimState({
                        type: types/* TransactionStateType.FAILED */.n$.FAILED,
                        error: new Error('Failed to claim')
                    });
                }
            }).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setClaimState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setClaimState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        campaignInfo,
        CONTRACT_ADDRESS,
        spaceStationContract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{}, [
        setClaimState
    ]);
    return [
        claimState,
        claimCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/NftAirdropCard.tsx














const NftAirdropCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            color: '#fff',
            width: 496,
            padding: 20,
            borderRadius: 12,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: theme.spacing(1),
            background: 'linear-gradient(rgba(234, 69, 96, 1), rgba(255, 126, 172, 1))'
        },
        title: {
            fontSize: 20,
            fontWeight: 500,
            marginBottom: theme.spacing(1)
        },
        text: {
            fontSize: 16
        },
        subText: {
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: 4,
            marginTop: 4,
            fontSize: 14
        },
        claimTimeWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(1.5)
        },
        claimWrapper: {
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: theme.spacing(2),
            marginBottom: theme.spacing(0),
            marginRight: theme.spacing(1)
        },
        claimParent: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        },
        checkWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        nftImage: {
            width: '100%',
            borderRadius: 4
        },
        imgWrapper: {
            display: 'inline-block',
            width: 65,
            height: 85,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 5,
            marginBottom: theme.spacing(1)
        },
        gallery: {
            marginBottom: theme.spacing(0.5),
            whiteSpace: 'nowrap'
        },
        actionButton: {
            height: 30,
            minHeight: 30,
            width: 80,
            background: 'rgba(255, 255, 255, 0.2)',
            '&:hover': {
                background: 'rgba(255, 255, 255, 0.4)'
            },
            '&.Mui-disabled': {
                color: '#fff',
                opacity: 0.6,
                background: 'rgba(255, 255, 255, 0.2)'
            }
        },
        actionCheckButton: {
            height: 40,
            minHeight: 40,
            width: 130
        },
        connectWallet: {
            width: 200,
            minHeight: 30,
            whiteSpace: 'nowrap'
        },
        disabledButton: {
            color: '#fff'
        },
        address: {
            width: 340,
            color: '#fff',
            '& fieldset': {
                borderColor: '#fff !important'
            }
        },
        addressInput: {
            color: '#fff',
            padding: 13
        },
        chainBoundary: {
            display: 'none'
        },
        loading: {
            margin: theme.spacing(0, 1),
            color: 'rgba(255, 255, 255, 0.4)'
        },
        snackbarContent: {
            color: '#fff',
            display: 'flex',
            width: 250,
            marginLeft: theme.spacing(0.5),
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        snackbarTipContent: {
            display: 'flex',
            flexDirection: 'column'
        },
        snackbarTip: {
            fontSize: 13,
            display: 'flex',
            alignItems: 'self-start'
        },
        snackbarIcon: {
            marginLeft: theme.spacing(0.3),
            height: 17,
            width: 17,
            cursor: 'pointer'
        },
        whiteText: {
            color: '#fff'
        },
        closeIcon: {
            cursor: 'pointer'
        }
    })
);
function NftAirdropCard(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [checkAddress, setCheckAddress] = (0,react.useState)('');
    const now = Date.now();
    const { campaignInfos , loading , retry  } = props;
    const [spaceStationClaimableCount, setSpaceStationClaimableCount, spaceStationAccountClaimableCallback, spaceStationAccountClaimableLoading, ] = useSpaceStationClaimableTokenCountCallback();
    const account = (0,useAccount/* useAccount */.m)();
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const { classes  } = NftAirdropCard_useStyles();
    const claimableCount = campaignInfos ? campaignInfos.reduce((acc, cur)=>{
        if (cur.claimableInfo.claimable) return acc + 1;
        return acc;
    }, 0) : 0;
    (0,react.useEffect)(()=>{
        setCheckAddress('');
        setSpaceStationClaimableCount(undefined);
    }, [
        account,
        currentChainId
    ]);
    (0,react.useEffect)(()=>{
        setSpaceStationClaimableCount(undefined);
    }, [
        checkAddress
    ]);
    return loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: 16,
            className: classes.loading
        })
    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                children: t('plugin_ito_launch_campaign')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.claimTimeWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.text,
                        children: t('wallet_airdrop_nft_unclaimed_title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.text,
                        children: now < campaignInfos[0].campaignInfo.startTime * 1000 ? t('plugin_airdrop_nft_start_time', {
                            date: (0,format/* default */.Z)(campaignInfos[0].campaignInfo.startTime * 1000, 'yyyy-MM-dd HH:mm')
                        }) : t('plugin_airdrop_nft_end_time', {
                            date: (0,format/* default */.Z)(campaignInfos[0].campaignInfo.endTime * 1000, 'yyyy-MM-dd HH:mm')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.claimParent,
                children: campaignInfos.map((v, i)=>{
                    return v.claimableInfo.claimable ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimItem, {
                            campaignInfo: v.campaignInfo,
                            claimed: v.claimableInfo.claimed,
                            retry: retry
                        })
                    }, i) : null;
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.text,
                children: [
                    t('plugin_ito_total_claimable_count'),
                    claimableCount,
                    " ",
                    claimableCount > 1 ? 'items' : 'item',
                    ","
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.subText,
                children: t('plugin_airdrop_nft_check_address')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.checkWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        value: checkAddress,
                        onChange: (e)=>setCheckAddress(e.target.value)
                        ,
                        className: classes.address,
                        InputProps: {
                            classes: {
                                input: classes.addressInput
                            }
                        },
                        placeholder: "Enter your wallet address"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                        disabled: spaceStationAccountClaimableLoading || checkAddress === '',
                        onClick: async ()=>spaceStationAccountClaimableCallback(checkAddress)
                        ,
                        classes: {
                            disabled: classes.disabledButton
                        },
                        className: classnames_default()(classes.actionButton, classes.actionCheckButton),
                        children: [
                            spaceStationAccountClaimableLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                size: 16,
                                className: classes.loading
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: t('plugin_airdrop_nft_check')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.text,
                children: spaceStationClaimableCount === undefined ? null : spaceStationClaimableCount ? t('plugin_airdrop_nft_number_to_claim', {
                    count: spaceStationClaimableCount,
                    name: spaceStationClaimableCount > 1 ? 'NFTs' : 'NFT'
                }) : t('plugin_airdrop_nft_none_to_claim')
            })
        ]
    });
}
function ClaimItem(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { campaignInfo , claimed , retry  } = props;
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const [claimState, claimCallback] = useSpaceStationContractClaimCallback(campaignInfo);
    const now = Date.now();
    const { classes  } = NftAirdropCard_useStyles();
    const { showSnackbar , closeSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const snackbarOptions = {
        preventDuplicate: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        }
    };
    (0,react.useEffect)(()=>{
        if (claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && claimState.no === 0) {
            showSnackbar(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.snackbarContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.snackbarTipContent,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t('plugin_airdrop_nft_claim_all')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.snackbarTip,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: t('plugin_airdrop_nft_claim_successful')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        className: classes.whiteText,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: (0,pipes/* resolveTransactionLinkOnExplorer */.z4)(types/* ChainId.Mumbai */.a_.Mumbai, claimState.receipt.transactionHash),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                            className: classes.snackbarIcon
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                        onClick: ()=>closeSnackbar()
                        ,
                        className: classes.closeIcon
                    })
                ]
            }), {
                variant: 'success',
                ...snackbarOptions
            });
            retry();
        } else if (claimState.type === types/* TransactionStateType.FAILED */.n$.FAILED) {
            showSnackbar(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.snackbarContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.snackbarTipContent,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t('plugin_airdrop_nft_claim_all')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.snackbarTip,
                                children: t('plugin_airdrop_nft_claim_failed')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                        onClick: ()=>closeSnackbar()
                        ,
                        className: classes.closeIcon
                    })
                ]
            }), {
                variant: 'error',
                ...snackbarOptions
            });
        }
    }, [
        claimState
    ]);
    const unClaimable = now < campaignInfo.startTime * 1000 || now > campaignInfo.endTime * 1000 || !(currentChainId === types/* ChainId.Matic */.a_.Matic) || claimed;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.claimWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.gallery,
                    children: campaignInfo.nfts.map((nft, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.imgWrapper,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: nft.image,
                                className: classes.nftImage
                            })
                        }, i)
                    )
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                        hideRiskWarningConfirmed: true,
                        classes: {
                            connectWallet: classnames_default()(classes.actionButton, classes.connectWallet),
                            gasFeeButton: classnames_default()(classes.actionButton, classes.connectWallet),
                            invalidButton: classnames_default()(classes.actionButton, classes.connectWallet),
                            unlockMetaMask: classnames_default()(classes.actionButton, classes.connectWallet)
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            disabled: claimState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING || claimState.type === types/* TransactionStateType.HASH */.n$.HASH || unClaimable,
                            loading: claimState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING || claimState.type === types/* TransactionStateType.HASH */.n$.HASH,
                            classes: {
                                disabled: classes.disabledButton
                            },
                            onClick: claimCallback,
                            className: classes.actionButton,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: claimed ? t('plugin_airdrop_nft_claimed') : now > campaignInfo.endTime * 1000 ? t('plugin_airdrop_nft_expired') : t('plugin_airdrop_nft_claim')
                            })
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimAll.ts




function useClaimAll(swapperAddress, chainId) {
    const allPoolsRef = (0,react.useRef)([]);
    (0,react.useEffect)(()=>{
        allPoolsRef.current = [];
    }, [
        chainId
    ]);
    const { value: blockNumber = 0  } = (0,useBlockNumber/* useBlockNumber */.O)(chainId);
    const asyncResult = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (allPoolsRef.current.length > 0) return allPoolsRef.current;
        const results = await messages/* PluginITO_RPC.getClaimAllPools */.k.getClaimAllPools(chainId, blockNumber, swapperAddress);
        allPoolsRef.current = results;
        return allPoolsRef.current;
    }, [
        swapperAddress,
        blockNumber,
        chainId
    ]);
    return {
        ...asyncResult,
        retry: ()=>{
            allPoolsRef.current = [];
            asyncResult.retry();
        }
    };
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ClaimAllDialog.tsx
























const ClaimAllDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    const isLight = theme.palette.mode === 'light';
    return {
        wrapper: {
            padding: theme.spacing(0, 4),
            [smallQuery]: {
                padding: theme.spacing(0, 1)
            }
        },
        actionButton: {
            margin: '0 auto',
            minHeight: 'auto',
            width: '100%',
            fontSize: 18,
            fontWeight: 400
        },
        footer: {
            marginTop: theme.spacing(2),
            zIndex: 1
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
        tokenCardWrapper: {
            width: '100%',
            color: 'white',
            overflow: 'auto',
            paddingTop: theme.spacing(1),
            marginBottom: theme.spacing(0.5)
        },
        tokenCard: {
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white',
            flexDirection: 'column',
            padding: 0,
            marginBottom: theme.spacing(1.5),
            alignItems: 'baseline',
            justifyContent: 'space-between'
        },
        cardHeader: {
            display: 'flex',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            height: 42,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            WebkitFontSmoothing: 'antialiased',
            fontSize: 14
        },
        cardHeaderLocked: {
            background: isLight ? '#EBEEF0' : '#2F3336',
            color: isLight ? '#7B8192' : '#6F767C'
        },
        cardHeaderClaimable: {
            background: '#77E0B5',
            color: 'white'
        },
        cardContent: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            height: 62,
            fontSize: 18
        },
        cardContentLocked: {
            background: isLight ? 'white' : '',
            border: `1px solid ${isLight ? '#EBEEF0' : '#2F3336'}`
        },
        cardContentClaimable: {
            background: 'rgba(119, 224, 181, 0.1)',
            border: '1px solid rgba(56, 221, 192, 0.4)'
        },
        content: {
            marginBottom: theme.spacing(2)
        },
        contentTitle: {
            fontSize: 18,
            fontWeight: 300
        },
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300
        },
        tabs: {
            height: 36,
            minHeight: 36,
            borderRadius: 4,
            backgroundColor: theme.palette.background.default,
            '& .Mui-selected': {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main
            }
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'column',
            height: props.shortITOwrapper ? 450 : 650
        },
        actionButtonWrapper: {
            position: 'sticky',
            width: '100%',
            marginTop: 'auto',
            bottom: 0,
            zIndex: 2,
            paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        emptyContentWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 350
        },
        lockIcon: {
            width: 22,
            height: 22,
            marginRight: 6
        },
        textWrapper: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: theme.spacing(1.5)
        },
        unlockTime: {
            marginRight: theme.spacing(1.5)
        },
        tokenBalance: {
            marginLeft: theme.spacing(1.5),
            color: theme.palette.mode === 'light' ? '#15181B' : '#D9D9D9'
        },
        tokenSymbol: {
            color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
        },
        snackbarSuccess: {
            backgroundColor: '#77E0B5'
        },
        snackbarError: {
            backgroundColor: '#FF5555'
        },
        abstractTabWrapper: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 2,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        walletStatusBox: {
            margin: theme.spacing(3, 'auto')
        },
        claimAllButton: {
            [smallQuery]: {
                fontSize: 14
            }
        }
    };
});
function ClaimAllDialog(props) {
    const { t: t1  } = (0,utils/* useI18N */.M1)();
    const { open , onClose  } = props;
    const ITO_Definition = (0,entry_dom/* useActivatedPlugin */.Rc)(entry_dom/* PluginId.ITO */.je.ITO, 'any');
    const pluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const chainIdList = ITO_Definition?.enableRequirement.web3?.[pluginId]?.supportedChainIds ?? [];
    const DialogRef = (0,react.useRef)(null);
    const account = (0,useAccount/* useAccount */.m)();
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const { value: campaignInfos , loading: loadingAirdrop , retry: retryAirdrop ,  } = useSpaceStationCampaignInfo(account, shared/* Flags.nft_airdrop_enabled */.vU.nft_airdrop_enabled);
    const [chainId, setChainId] = (0,react.useState)(chainIdList.includes(currentChainId) ? currentChainId : types/* ChainId.Mainnet */.a_.Mainnet);
    const { value: _swappedTokens , loading: _loading , retry  } = useClaimAll(account, chainId);
    const { value: swappedTokensWithDetailed = [] , loading: loadingTokenDetailed  } = (0,useERC20TokenDetailed/* useFungibleTokensDetailed */.b)((_swappedTokens ?? []).map((t)=>({
            address: t.token.address,
            type: types/* EthereumTokenType.ERC20 */.Dr.ERC20
        })
    ), chainId);
    const loading = _loading || loadingTokenDetailed;
    const swappedTokens = _swappedTokens?.map((t)=>{
        const tokenDetailed = swappedTokensWithDetailed.find((v)=>(0,utils_address/* isSameAddress */.Wr)(t.token.address, v.address)
        );
        if (tokenDetailed) t.token = tokenDetailed;
        return t;
    });
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    const claimablePids = (0,uniq/* default */.Z)((0,flatten/* default */.Z)(swappedTokens?.filter((t)=>t.isClaimable
    ).map((t)=>t.pids
    )));
    const [claimState, claimCallback, resetClaimCallback] = useClaimCallback(claimablePids, ITO2_CONTRACT_ADDRESS);
    const showNftAirdrop = chainId === types/* ChainId.Matic */.a_.Matic && campaignInfos && shared/* Flags.nft_airdrop_enabled */.vU.nft_airdrop_enabled;
    const { classes  } = ClaimAllDialog_useStyles({
        shortITOwrapper: showNftAirdrop && (!swappedTokens || swappedTokens.length === 0) || !showNftAirdrop
    });
    const [initLoading, setInitLoading] = (0,react.useState)(true);
    (0,react.useLayoutEffect)(()=>{
        setTimeout(()=>setInitLoading(false)
        , 1000);
    }, []);
    const { setDialog: setClaimTransactionDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) {
            resetClaimCallback();
            retry();
        }
    });
    (0,react.useEffect)(()=>{
        resetClaimCallback();
    }, [
        chainId
    ]);
    (0,react.useEffect)(()=>{
        if (claimState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        if (claimState.type === types/* TransactionStateType.FAILED */.n$.FAILED) {
            setClaimTransactionDialog({
                open: false
            });
            return;
        }
        if (claimState.type === types/* TransactionStateType.HASH */.n$.HASH) {
            const { hash  } = claimState;
            setTimeout(()=>{
                (0,shared_base_ui_src/* openWindow */.xw)((0,pipes/* resolveTransactionLinkOnExplorer */.z4)(chainId, hash));
            }, 2000);
            return;
        }
        const claimableTokens = swappedTokens?.filter((t)=>t.isClaimable
        );
        const summary = claimableTokens ? 'Claim ' + new Intl.ListFormat('en').format(claimableTokens.map((t)=>(0,formatter/* formatBalance */.az)(t.amount, t.token.decimals) + ' ' + t.token.symbol
        )) : '';
        setClaimTransactionDialog({
            open: true,
            state: claimState,
            title: t1('plugin_ito_claim_all_title'),
            summary
        });
    }, [
        claimState,
        swappedTokens /* update tx dialog only if state changed */ 
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* SnackbarProvider */.wT, {
        domRoot: DialogRef.current,
        classes: {
            variantSuccess: classes.snackbarSuccess,
            variantError: classes.snackbarError
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
            open: open,
            onClose: onClose,
            title: t1('plugin_ito_claim_all_dialog_title'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.walletStatusBox,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.abstractTabWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                            chainId: chainId,
                            setChainId: setChainId,
                            classes: classes,
                            chains: chainIdList
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.contentWrapper,
                        ref: DialogRef,
                        children: [
                            (showNftAirdrop || loadingAirdrop) && chainId === types/* ChainId.Matic */.a_.Matic && shared/* Flags.nft_airdrop_enabled */.vU.nft_airdrop_enabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NftAirdropCard, {
                                campaignInfos: campaignInfos,
                                loading: loadingAirdrop,
                                retry: retryAirdrop
                            }) : null,
                            loading || initLoading || !swappedTokens ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.emptyContentWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                    size: 24
                                })
                            }) : swappedTokens.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.content,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {
                                    swappedTokens: swappedTokens,
                                    chainId: chainId
                                })
                            }) : !showNftAirdrop && !loadingAirdrop ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.emptyContentWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    children: [
                                        t1('plugin_ito_no_claimable_token'),
                                        " "
                                    ]
                                })
                            }) : null,
                            swappedTokens && swappedTokens.length > 0 || chainId === types/* ChainId.Matic */.a_.Matic && shared/* Flags.nft_airdrop_enabled */.vU.nft_airdrop_enabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.actionButtonWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                                    chainId: chainId,
                                    classes: {
                                        switchButton: classes.claimAllButton
                                    },
                                    noSwitchNetworkTip: true,
                                    disablePadding: true,
                                    switchButtonStyle: {
                                        minHeight: 'auto',
                                        width: '100%',
                                        fontSize: 18,
                                        fontWeight: 400
                                    },
                                    children: swappedTokens?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                                        classes: {
                                            connectWallet: classes.claimAllButton
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                            className: classnames_default()(classes.actionButton, classes.claimAllButton),
                                            variant: "contained",
                                            loading: [
                                                types/* TransactionStateType.HASH */.n$.HASH,
                                                types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING, 
                                            ].includes(claimState.type),
                                            disabled: claimablePids.length === 0 || [
                                                types/* TransactionStateType.HASH */.n$.HASH,
                                                types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING, 
                                            ].includes(claimState.type),
                                            size: "small",
                                            onClick: claimCallback,
                                            children: t1('plugin_ito_claim_all')
                                        })
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                                })
                            }) : null
                        ]
                    })
                ]
            })
        })
    });
}
function Content(props) {
    const { classes  } = ClaimAllDialog_useStyles({
        shortITOwrapper: false
    });
    const { swappedTokens , chainId  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: classes.tokenCardWrapper,
        children: swappedTokens.map((swappedToken, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwappedToken, {
                    i: i,
                    swappedToken: swappedToken,
                    chainId: chainId
                })
            }, i)
        )
    });
}
function SwappedToken({ i , swappedToken , chainId  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes  } = ClaimAllDialog_useStyles({
        shortITOwrapper: false
    });
    const { value: token  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(swappedToken.token.address, undefined, chainId);
    return token ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.tokenCard,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()(classes.cardHeader, swappedToken.isClaimable ? classes.cardHeaderClaimable : classes.cardHeaderLocked),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.textWrapper,
                        children: [
                            swappedToken.isClaimable ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.lockIcon,
                                src: theme.palette.mode === 'light' ? new URL(/* asset import */ __webpack_require__(96344), __webpack_require__.b).toString() : new URL(/* asset import */ __webpack_require__(15515), __webpack_require__.b).toString()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                children: [
                                    token.symbol,
                                    ' ',
                                    swappedToken.isClaimable ? t('plugin_ito_claim_all_status_unclaimed') : t('plugin_ito_claim_all_status_locked'),
                                    ":"
                                ]
                            })
                        ]
                    }),
                    swappedToken.isClaimable ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.unlockTime,
                        children: t('plugin_ito_claim_all_unlock_time', {
                            time: (0,format/* default */.Z)(swappedToken.unlockTime, 'yyyy-MM-dd HH:mm:ss')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classnames_default()(classes.cardContent, swappedToken.isClaimable ? classes.cardContentClaimable : classes.cardContentLocked),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                    classes: {
                        balance: classes.tokenBalance,
                        symbol: classes.tokenSymbol
                    },
                    value: swappedToken.amount,
                    decimals: token.decimals,
                    symbol: token.symbol,
                    formatter: formatter/* formatBalance */.az
                })
            })
        ]
    }, i) : null;
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/index.tsx

















const SNSAdaptor_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
        (0,entry_content_script/* usePluginWrapper */.fI)(payload.ok);
        if (!payload.ok) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
            chainId: payload.val.chain_id,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
                payload: (0,set/* default */.Z)((0,helpers/* payloadIntoMask */._x)(payload.val), 'token', payload.val.token)
            })
        });
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
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CompositionDialog, {
                open: open,
                onConfirm: onClose,
                onClose: onClose
            });
        },
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
    },
    ApplicationEntries: [
        {
            RenderEntryComponent ({ disabled  }) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                    disabled: disabled,
                    title: "ITO",
                    icon: new URL(/* asset import */ __webpack_require__(15347), __webpack_require__.b).toString(),
                    onClick: ()=>shared_base_src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
                            reason: 'timeline',
                            open: true,
                            options: {
                                startupPlugin: ITO_base/* base.ID */.u.ID
                            }
                        })
                });
            },
            defaultSortingPriority: 3
        },
        {
            RenderEntryComponent ({ disabled  }) {
                const [open, setOpen] = (0,react.useState)(false);
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                            title: "Claim",
                            disabled: disabled,
                            icon: new URL(/* asset import */ __webpack_require__(31817), __webpack_require__.b).toString(),
                            onClick: ()=>setOpen(true)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimAllDialog, {
                            open: open,
                            onClose: ()=>setOpen(false)
                        })
                    ]
                });
            },
            defaultSortingPriority: 4
        }, 
    ]
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
    const balance = (0,formatter/* formatBalance */.az)(payload.total, tokenDetailed?.decimals);
    const symbol = (tokenDetailed?.symbol ?? tokenDetailed?.name) ?? 'Token';
    const sellerName = payload.seller.name ? payload.seller.name : payload.message.split(ITO_constants/* MSG_DELIMITER */.Z3)[0] ?? (0,formatter/* formatEthereumAddress */.j8)(payload.seller.address, 4);
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

/***/ 42814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ checkAvailability)
/* harmony export */ });
/* harmony import */ var _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34517);
/* harmony import */ var _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47744);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58528);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5027);




const interFaceV1 = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__/* .Interface */ .vU(_masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__);
const interFaceV2 = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__/* .Interface */ .vU(_masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__);
// ITO Contract readonly method, read it no matter on whatever chains you are.
async function checkAvailability(pid, from, to, chainId, isV1 = false) {
    const callData = (isV1 ? interFaceV1 : interFaceV2).encodeFunctionData('check_availability', [
        pid
    ]);
    const data = await _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Ethereum.call */ .ZP.Ethereum.call({
        to,
        from,
        data: callData
    }, {
        chainId
    });
    return decodeResult(data, isV1);
}
function decodeResult(data, isV1) {
    const results = (isV1 ? interFaceV1 : interFaceV2).decodeFunctionResult('check_availability', data);
    return {
        exchange_addrs: results[0],
        remaining: +parseHexToInt(results[1]),
        started: results[2],
        expired: results[3],
        destructed: results[4],
        unlock_time: parseHexToInt(results[5]),
        swapped: parseHexToInt(results[6]),
        exchanged_tokens: parse(results[7]).map(parseHexToInt),
        ...isV1 ? {} : {
            claimed: results[8],
            start_time: parseHexToInt(results[9]),
            end_time: parseHexToInt(results[10]),
            qualification_addr: results[11]
        }
    };
}
function parse(input) {
    return JSON.parse(JSON.stringify(input));
}
function parseHexToInt(input) {
    return Number.parseInt(parse(input).hex, 16).toString();
}


/***/ }),

/***/ 861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PluginITO_RPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22668);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79936);


if (false) {}
const PluginITO_Messages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV);
const PluginITO_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(3758), __webpack_require__.e(187), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(5614), __webpack_require__.e(2938)]).then(__webpack_require__.bind(__webpack_require__, 34178))
, PluginITO_Messages.rpc);


/***/ }),

/***/ 25233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ DateTimePanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7284);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30232);
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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


/***/ }),

/***/ 31817:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/73aab4123001e8c43295.png";

/***/ }),

/***/ 15515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/073ba01ed1558c712de2.png";

/***/ }),

/***/ 96344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/98d46d881ebd22c5705a.png";

/***/ }),

/***/ 45554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f835dfbca611a92937dd.jpg";

/***/ }),

/***/ 52872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/63923416b1ad2fbbb38f.jpg";

/***/ }),

/***/ 96705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a6690b564780e865be65.jpg";

/***/ }),

/***/ 15347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5c74339465a5c0254083.png";

/***/ }),

/***/ 76048:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/978bf9587a9f8a073309.png";

/***/ }),

/***/ 34517:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"unlocked","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"bytes32","name":"validation","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 47744:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"end","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"indexed":false,"internalType":"uint128[]","name":"ratios","type":"uint128[]"},{"indexed":false,"internalType":"address","name":"qualification","type":"address"},{"indexed":false,"internalType":"uint256","name":"limit","type":"uint256"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"uint128","name":"input_total","type":"uint128"},{"indexed":false,"internalType":"bool","name":"claimed","type":"bool"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[],"name":"base_time","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"destructed","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"end_time","type":"uint256"},{"internalType":"address","name":"qualification_addr","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_base_time","type":"uint64"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint32","name":"_unlock_time","type":"uint32"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);