"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9103],{

/***/ 54331:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = void 0;
const options_1 = __webpack_require__(33084);
const utils_1 = __webpack_require__(19195);
// Most commonly used digit grouping base.
const DIGIT_GROUPING_BASE = 1000;
/**
 * Generator that divides a number until a decimal value is found.
 *
 * The denominator is defined by the numerical digit grouping base,
 * or interval. The most commonly-used digit group interval is 1000.
 *
 * e.g. 1,000,000 is grouped in multiples of 1000.
 */
function* divider(value) {
    // Create a mutable copy of the base.
    let denominator = DIGIT_GROUPING_BASE;
    while (true) {
        const result = value / denominator;
        if (result < 1) {
            // End of operation. We can't divide the value any further.
            return;
        }
        yield result;
        // The denominator is increased every iteration by multiplying
        // the base by itself, until a decimal value remains.
        denominator *= DIGIT_GROUPING_BASE;
    }
}
/**
 * millify converts long numbers to human-readable strings.
 */
function millify(value, options) {
    var _a;
    // Override default options with options supplied by user.
    const opts = options
        ? Object.assign(Object.assign({}, options_1.defaultOptions), options) : options_1.defaultOptions;
    if (!Array.isArray(opts.units) || !opts.units.length) {
        throw new Error("Option `units` must be a non-empty array");
    }
    // Validate value for type and length.
    let val = utils_1.parseValue(value);
    // Add a minus sign (-) prefix if it's a negative number.
    const prefix = val < 0 ? "-" : "";
    // Work only with positive values for simplicity's sake.
    val = Math.abs(val);
    // Keep dividing the input value by the digit grouping base
    // until the decimal and the unit index is deciphered.
    let unitIndex = 0;
    for (const result of divider(val)) {
        val = result;
        unitIndex += 1;
    }
    // Return the original number if the number is too large to have
    // a corresponding unit. Returning anything else is ambiguous.
    const unitIndexOutOfRange = unitIndex >= opts.units.length;
    if (unitIndexOutOfRange) {
        return value.toString();
    }
    // Round decimal up to desired precision.
    let rounded = utils_1.roundTo(val, opts.precision);
    // Fixes an edge case bug that outputs certain numbers as 1000K instead of 1M.
    // The rounded value needs another iteration in the divider cycle.
    for (const result of divider(rounded)) {
        rounded = result;
        unitIndex += 1;
    }
    // Calculate the unit suffix and make it lowercase (if needed).
    const unit = (_a = opts.units[unitIndex]) !== null && _a !== void 0 ? _a : "";
    const suffix = opts.lowercase ? unit.toLowerCase() : unit;
    // Add a space between number and abbreviation.
    const space = opts.space ? " " : "";
    // Replace decimal mark if desired.
    const formatted = rounded
        .toString()
        .replace(options_1.defaultOptions.decimalSeparator, opts.decimalSeparator);
    return `${prefix}${formatted}${space}${suffix}`;
}
__webpack_unused_export__ = millify;
exports.ZP = millify;


/***/ }),

/***/ 33084:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultOptions = void 0;
/**
 * Default options for Millify.
 */
exports.defaultOptions = {
    decimalSeparator: ".",
    lowercase: false,
    precision: 1,
    space: false,
    units: [
        "",
        "K",
        "M",
        "B",
        "T",
        "P",
        "E", // Quintillion
    ],
};


/***/ }),

/***/ 19195:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.roundTo = exports.parseValue = void 0;
/**
 * parseValue ensures the value is a number and within accepted range.
 */
function parseValue(value) {
    const val = parseFloat(value.toString());
    if (isNaN(val)) {
        throw new Error(`Input value is not a number`);
    }
    if (val > Number.MAX_SAFE_INTEGER || val < Number.MIN_SAFE_INTEGER) {
        throw new RangeError("Input value is outside of safe integer range");
    }
    return val;
}
exports.parseValue = parseValue;
/**
 * Rounds a number [value] up to a specified [precision].
 */
function roundTo(value, precision) {
    if (!Number.isFinite(value)) {
        throw new Error("Input value is not a finite number");
    }
    if (!Number.isInteger(precision) || precision < 0) {
        throw new Error("Precision is not a positive integer");
    }
    if (Number.isInteger(value)) {
        return value;
    }
    return parseFloat(value.toFixed(precision));
}
exports.roundTo = roundTo;


/***/ }),

/***/ 47061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ PluginWalletConnectIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const PluginWalletConnectIcon = (0,_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('PluginWalletConnectIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.15015 7.36221C4.15015 7.03084 4.41878 6.76221 4.75015 6.76221H9.25015C9.58152 6.76221 9.85015 7.03084 9.85015 7.36221C9.85015 7.69358 9.58152 7.96221 9.25015 7.96221H4.75015C4.41878 7.96221 4.15015 7.69358 4.15015 7.36221Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.76765 1.7293C2.56902 1.7293 1.60015 2.69817 1.60015 3.8968V7.36179C1.60015 7.69317 1.33152 7.96179 1.00015 7.96179C0.668776 7.96179 0.400146 7.69317 0.400146 7.36179V3.8968C0.400146 2.03543 1.90628 0.529297 3.76765 0.529297H7.98264C8.86881 0.529297 9.70567 0.805241 10.3308 1.34136C10.9644 1.8848 11.3501 2.67182 11.3501 3.61179C11.3501 3.94317 11.0815 4.2118 10.7501 4.2118C10.4188 4.2118 10.1501 3.94317 10.1501 3.61179C10.1501 3.02177 9.91716 2.56754 9.54953 2.25223C9.17337 1.9296 8.62648 1.7293 7.98264 1.7293H3.76765Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.00015 4.21221C2.67402 4.21221 1.60015 5.28608 1.60015 6.61221V11.8622C1.60015 13.1883 2.67402 14.2622 4.00015 14.2622H11.5001C12.8263 14.2622 13.9001 13.1883 13.9001 11.8622V11.3747H13.8027C12.8621 11.3747 11.896 10.7961 11.6257 9.79044L11.6249 9.78738L11.6249 9.78738C11.4193 9.00591 11.6636 8.23162 12.1873 7.72391C12.5779 7.32659 13.1128 7.09967 13.6901 7.09967H13.9001V6.61221C13.9001 5.29358 12.8188 4.21221 11.5001 4.21221H4.00015ZM0.400146 6.61221C0.400146 4.62334 2.01128 3.01221 4.00015 3.01221H11.5001C13.4815 3.01221 15.1001 4.63084 15.1001 6.61221V7.69967C15.1001 8.03104 14.8315 8.29967 14.5001 8.29967H13.6901C13.4309 8.29967 13.2038 8.40006 13.04 8.56827C13.0353 8.5731 13.0305 8.57786 13.0257 8.58253C12.8047 8.79464 12.6923 9.12611 12.785 9.48043C12.8903 9.86908 13.3039 10.1747 13.8027 10.1747H14.5001C14.8315 10.1747 15.1001 10.4433 15.1001 10.7747V11.8622C15.1001 13.8511 13.489 15.4622 11.5001 15.4622H4.00015C2.01128 15.4622 0.400146 13.8511 0.400146 11.8622V6.61221Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.6903 8.29912C13.4311 8.29912 13.204 8.39951 13.0402 8.56772L13.0294 8.57849C12.8376 8.76576 12.7307 9.03208 12.7576 9.31477L12.7583 9.32182L12.7583 9.32183C12.7961 9.77582 13.235 10.1741 13.7803 10.1741H15.2278C15.3278 10.1741 15.4003 10.094 15.4003 10.0091V8.46414C15.4003 8.37932 15.3278 8.29912 15.2278 8.29912H13.6903ZM12.1858 7.72513C12.5765 7.32671 13.1122 7.09912 13.6903 7.09912H15.2278C15.9829 7.09912 16.6003 7.70895 16.6003 8.46414V10.0091C16.6003 10.7643 15.9829 11.3741 15.2278 11.3741H13.7803C12.7067 11.3741 11.6617 10.5891 11.5627 9.42502C11.5011 8.76677 11.7517 8.1519 12.1858 7.72513Z",
            fill: "white"
        })
    ]
}), '0 0 17 16');


/***/ }),

/***/ 34430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ Markdown)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/remarkable@2.0.1/node_modules/remarkable/dist/esm/index.browser.js
var index_browser = __webpack_require__(54030);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(70854);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useRemarkable.ts



function useRemarkable(md) {
    return (0,react.useMemo)(()=>{
        const remarkable = new index_browser/* Remarkable */._();
        const defaultImageRender = remarkable.renderer.rules.image;
        remarkable.use(()=>{
            remarkable.renderer.rules.image = function(tokens, idx, ...args) {
                const modifiedTokens = tokens.map((token)=>({
                        ...token,
                        src: (0,pipes/* resolveIPFSLinkFromURL */.Yx)(token.src)
                    })
                );
                return defaultImageRender(modifiedTokens, idx, ...args);
            };
        });
        return remarkable.render(md);
    }, [
        md
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            color: 'inherit',
            fontSize: 'inherit',
            fontFamily: 'sans-serif',
            '& p, & li': {
                margin: 0,
                fontSize: 12,
                color: theme.palette.text.secondary
            },
            '& p + p': {
                marginTop: theme.spacing(0.5)
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
                fontSize: 14,
                fontWeight: 500
            },
            '& img': {
                maxWidth: '100%'
            },
            '& a': {
                color: theme.palette.text.primary
            }
        }
    })
);
function Markdown(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const html = useRemarkable(props.content);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        dangerouslySetInnerHTML: {
            __html: html
        },
        className: classes.root
    });
}


/***/ }),

/***/ 39103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ./src/plugins/Snapshot/base.ts
var base = __webpack_require__(89184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/context.ts

const SnapshotContext = (0,react.createContext)(null);

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/helpers.ts
function getProposalIdentifier(url) {
    const parsedURL = new URL(url);
    const [, space, , id] = parsedURL.hash.split('/');
    return {
        id,
        space
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(70186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(11142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(60647);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ./src/plugins/Snapshot/messages.ts
var messages = __webpack_require__(36173);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useUpdate.js
var useUpdate = __webpack_require__(31217);
;// CONCATENATED MODULE: ./src/utils/hooks/useSuspense.ts

function useSuspense(id, args, cache, Suspender) {
    const forceUpdate = (0,useUpdate/* default */.Z)();
    const rec = cache.get(id);
    if (!rec) {
        const p = Suspender(...args).then((val)=>void cache.set(id, [
                1,
                val
            ])
        ).catch((error)=>void cache.set(id, [
                2,
                error
            ])
        );
        cache.set(id, [
            0,
            p
        ]);
        throw p;
    }
    if (rec[0] === 1) return {
        payload: rec[1],
        retry: ()=>{
            if (cache.has(id)) cache.delete(id);
            forceUpdate();
        }
    };
    throw rec[1];
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useProposal.ts


const cache = new Map();
function proposalRetry() {
    for (const key of cache.keys()){
        cache.delete(key);
    }
}
function useProposal(id) {
    return useSuspense(id, [
        id
    ], cache, Suspender);
}
async function Suspender(id) {
    const proposal = await messages/* PluginSnapshotRPC.fetchProposal */.q.fetchProposal(id);
    // #region get 3box profile
    const profiles = await messages/* PluginSnapshotRPC.fetch3BoxProfiles */.q.fetch3BoxProfiles([
        proposal.address
    ]);
    // #endregion
    proposal.status = !proposal.isStart ? 'Pending' : proposal.isEnd ? 'Closed' : 'Active';
    proposal.authorName = profiles[0]?.name;
    proposal.authorAvatar = profiles[0]?.image;
    return proposal;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/SnapshotCard.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            minHeight: 120,
            padding: 0,
            border: `solid 1px ${theme.palette.divider}`,
            margin: `${theme.spacing(2)} auto`,
            marginBottom: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        },
        header: {
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            justifyContent: 'center',
            alignContent: 'center'
        },
        title: {
            display: 'flex',
            alignItems: 'center'
        }
    };
});
function SnapshotCard(props) {
    const { title , children  } = props;
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        variant: "outlined",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                className: classes.header,
                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                className: classes.content,
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sumBy.js
var sumBy = __webpack_require__(2109);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/find.js + 1 modules
var find = __webpack_require__(11623);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/usePower.ts






function usePower(identifier) {
    const { payload: proposal  } = useProposal(identifier.id);
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!account) return 0;
        const scores = await messages/* PluginSnapshotRPC.getScores */.q.getScores(proposal.snapshot, [
            account
        ], proposal.network, identifier.space, proposal.strategies);
        return (0,sumBy/* default */.Z)(scores, (score)=>(0,find/* default */.Z)(score, (_, key)=>key.toLowerCase() === account.toLowerCase()
            ) ?? 0
        );
    }, [
        account
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/millify@4.0.0/node_modules/millify/dist/millify.js
var millify = __webpack_require__(54331);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(62361);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(70854);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumBlockie.tsx




const EthereumBlockie_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 16,
            height: 16,
            backgroundColor: theme.palette.common.white,
            margin: 0
        }
    })
);
function EthereumBlockie(props) {
    const { address , name  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(EthereumBlockie_useStyles(), props);
    const blockie = (0,entry_web3/* useBlockie */.YT)(address);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        className: classes.icon,
        src: blockie,
        children: name?.slice(0, 1).toUpperCase()
    });
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/InformationCard.tsx















const InformationCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        field: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: `${theme.spacing(1)} auto`
        },
        link: {
            display: 'flex',
            color: 'inherit',
            alignItems: 'center',
            marginLeft: theme.spacing(1),
            textDecoration: 'none !important'
        },
        avatar: {
            width: 16,
            height: 16
        },
        avatarWrapper: {
            marginRight: 8
        }
    };
});
function InfoField(props) {
    const { classes  } = InformationCard_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.field,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: props.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: props.children
            })
        ]
    });
}
function InformationCard(props) {
    const { classes  } = InformationCard_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    const { start , end , snapshot , strategies  } = proposal;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotCard, {
        title: t('plugin_snapshot_info_title'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            component: "div",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_strategy'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            display: 'flex'
                        },
                        children: strategies.filter((strategy)=>Boolean(strategy.params.address)
                        ).map((strategy, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                target: "_blank",
                                rel: "noopener",
                                href: resolver/* explorerResolver.addressLink */.Nb.addressLink(chainId, strategy.params.address),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                                    address: strategy.params.address
                                })
                            }, i)
                        )
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_author'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        className: classes.link,
                        target: "_blank",
                        rel: "noopener",
                        href: resolver/* explorerResolver.addressLink */.Nb.addressLink(chainId, proposal.address),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.avatarWrapper,
                                children: proposal.authorAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    src: (0,pipes/* resolveIPFSLink */.r5)(proposal.authorAvatar),
                                    className: classes.avatar
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumBlockie, {
                                    address: proposal.address
                                })
                            }),
                            proposal.authorName ?? (0,formatter/* formatEthereumAddress */.j8)(proposal.address, 4)
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_ipfs'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        className: classes.link,
                        target: "_blank",
                        rel: "noopener",
                        href: (0,pipes/* resolveIPFSLink */.r5)(identifier.id),
                        children: [
                            "#",
                            identifier.id.slice(0, 7),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                fontSize: "small"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_start'),
                    children: (0,format/* default */.Z)(start * 1000, 'MM/dd/yyyy')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_end'),
                    children: (0,format/* default */.Z)(end * 1000, 'MM/dd/yyyy')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_snapshot'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        className: classes.link,
                        target: "_blank",
                        rel: "noopener",
                        href: resolver/* explorerResolver.blockLink */.Nb.blockLink(chainId, Number.parseInt(snapshot, 10)),
                        children: [
                            snapshot,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                fontSize: "small"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/VoteConfirmDialog.tsx










const VoteConfirmDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        card: {
            padding: 0,
            border: `solid 1px ${theme.palette.divider}`,
            margin: `${theme.spacing(2)} auto`
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
        },
        button: {
            width: '60%',
            minHeight: 39,
            margin: `${theme.spacing(1)} auto`
        },
        link: {
            display: 'flex',
            color: 'inherit',
            alignItems: 'center',
            marginLeft: theme.spacing(1),
            textDecoration: 'none !important'
        },
        loading: {
            color: theme.palette.background.paper
        }
    })
);
function VoteConfirmDialog(props) {
    const { open , onClose , onVoteConfirm , choiceText , snapshot , powerSymbol , power =0 , loading  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = VoteConfirmDialog_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: onClose,
        title: t('plugin_snapshot_vote_confirm_dialog_title'),
        disableBackdropClick: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                align: "center",
                                children: t('plugin_snapshot_vote_confirm_dialog_choice', {
                                    choiceText
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                align: "center",
                                children: t('plugin_snapshot_vote_confirm_dialog_warning')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                        className: classes.card,
                        variant: "outlined",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                            className: classes.content,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                                        title: t('plugin_snapshot_vote_choice'),
                                        children: choiceText
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                                        title: t('plugin_snapshot_info_snapshot'),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                                            className: classes.link,
                                            target: "_blank",
                                            rel: "noopener",
                                            href: resolver/* explorerResolver.blockLink */.Nb.blockLink(types/* ChainId.Mainnet */.a_.Mainnet, Number.parseInt(snapshot, 10)),
                                            children: [
                                                snapshot,
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                                    fontSize: "small"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(InfoField, {
                                        title: t('plugin_snapshot_vote_power'),
                                        children: [
                                            (0,millify/* default */.ZP)(power, {
                                                precision: 2,
                                                lowercase: true
                                            }),
                                            " ",
                                            powerSymbol.toUpperCase()
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                    offChain: true,
                    classes: {
                        connectWallet: classes.button,
                        unlockMetaMask: classes.button
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        classes: {
                            root: classes.button
                        },
                        color: "primary",
                        variant: "contained",
                        fullWidth: true,
                        disabled: loading,
                        onClick: onVoteConfirm,
                        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                            size: 16,
                            className: classes.loading
                        }) : t('plugin_snapshot_vote')
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useVotes.ts




const useVotes_cache = new Map();
function votesRetry() {
    for (const key of useVotes_cache.keys()){
        useVotes_cache.delete(key);
    }
}
function useVotes(identifier) {
    return useSuspense(identifier.id, [
        identifier
    ], useVotes_cache, useVotes_Suspender);
}
async function useVotes_Suspender(identifier) {
    const { payload: proposal  } = useProposal(identifier.id);
    const voters = proposal.votes.map((v)=>v.voter
    );
    const scores = await messages/* PluginSnapshotRPC.getScores */.q.getScores(proposal.snapshot, voters, proposal.network, identifier.space, proposal.strategies);
    const strategies = proposal.strategies;
    const profiles = await messages/* PluginSnapshotRPC.fetch3BoxProfiles */.q.fetch3BoxProfiles(voters);
    const profileEntries = Object.fromEntries(profiles.map((p)=>[
            p.contract_address,
            p
        ]
    ));
    return proposal.votes.map((v)=>{
        const choices = typeof v.choice === 'number' ? undefined : Array.isArray(v.choice) ? v.choice.map((i)=>({
                weight: 1,
                name: proposal.choices[i - 1],
                index: Number(i)
            })
        ) : Object.entries(v.choice).map(([i, weight])=>({
                weight,
                name: proposal.choices[Number(i) - 1],
                index: Number(i)
            })
        );
        return {
            choiceIndex: typeof v.choice === 'number' ? v.choice : undefined,
            choiceIndexes: typeof v.choice === 'number' ? undefined : Object.keys(v.choice).map((i)=>Number(i)
            ),
            choice: typeof v.choice === 'number' ? proposal.choices[v.choice - 1] : undefined,
            choices,
            totalWeight: choices ? Array.isArray(v.choice) ? v.choice.length : (0,sumBy/* default */.Z)(choices, (choice)=>choice.weight
            ) : undefined,
            address: v.voter,
            authorIpfsHash: v.id,
            balance: (0,sumBy/* default */.Z)(scores, (score)=>score[v.voter.toLowerCase()] ?? 0
            ),
            scores: strategies.map((_strategy, i)=>scores[i][v.voter] || 0
            ),
            strategySymbol: proposal.space.symbol ?? strategies[0].params.symbol,
            authorName: profileEntries[v.voter.toLowerCase()]?.name,
            authorAvatar: profileEntries[v.voter.toLowerCase()]?.image,
            timestamp: v.created
        };
    }).sort((a, b)=>b.balance - a.balance
    ).filter((v)=>v.balance > 0
    );
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useResults.ts




const useResults_cache = new Map();
function resultsRetry() {
    for (const key of useResults_cache.keys()){
        useResults_cache.delete(key);
    }
}
function useResults(identifier) {
    return useSuspense(identifier.id, [
        identifier
    ], useResults_cache, useResults_Suspender);
}
async function useResults_Suspender(identifier) {
    const { payload: proposal  } = useProposal(identifier.id);
    const { payload: votes  } = useVotes(identifier);
    const strategies = proposal.strategies;
    const powerOfChoices = proposal.choices.map((_choice, index)=>(0,sumBy/* default */.Z)(voteForChoice(votes, index), (choice1)=>{
            if (choice1.choiceIndex) return choice1.balance;
            const totalWeight = (0,sumBy/* default */.Z)(choice1.choices, (choice)=>choice.weight
            );
            const weight = choice1.choices.find((v)=>v.index === index + 1
            )?.weight ?? 0;
            return choice1.balance * weight / totalWeight;
        })
    );
    const powerDetailOfChoices = proposal.choices.map((_choice, i)=>strategies.map((_strategy, index)=>(0,sumBy/* default */.Z)(voteForChoice(votes, i), (vote)=>vote.scores[index]
            )
        )
    );
    const totalPower = (0,sumBy/* default */.Z)(votes, (vote)=>vote.balance
    );
    const results = powerOfChoices.map((p, i)=>({
            choice: proposal.choices[i],
            power: p,
            powerDetail: powerDetailOfChoices[i].map((inner_p, pI)=>({
                    power: strategies.length === 1 ? p : inner_p,
                    name: strategies[pI].params.symbol
                })
            ),
            percentage: totalPower === 0 ? 0 : p / totalPower * 100
        })
    );
    return {
        results: results.sort((a, b)=>b.power - a.power
        ),
        totalPower
    };
}
function voteForChoice(votes, i) {
    return votes.filter((vote)=>vote.choiceIndex ? vote.choiceIndex === i + 1 : vote.choices?.map((c)=>c.index
        )?.includes(i + 1)
    );
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useRetry.ts




function useRetry() {
    const forceUpdate = (0,useUpdate/* default */.Z)();
    return (0,react.useCallback)(()=>{
        votesRetry();
        resultsRetry();
        forceUpdate();
    }, []);
}

// EXTERNAL MODULE: ./src/plugins/Snapshot/constants.ts
var constants = __webpack_require__(75076);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/utils.ts
const getSnapshotVoteType = (type)=>({
        Vote: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'space',
                type: 'string'
            },
            {
                name: 'timestamp',
                type: 'uint64'
            },
            {
                name: 'proposal',
                type: 'string'
            },
            {
                name: 'choice',
                type: type === 'single-choice' ? 'uint32' : 'uint32[]'
            },
            {
                name: 'metadata',
                type: 'string'
            }, 
        ]
    })
;

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/VotingCard.tsx



















const VotingCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        button: {
            width: '80%',
            minHeight: 39,
            margin: `${theme.spacing(1)} auto`
        },
        choiceButton: {
            color: theme.palette.mode === 'dark' ? 'white' : 'black',
            transitionDuration: '0s !important',
            '&:hover': {
                border: '1px solid rgb(29, 161, 242)',
                boxShadow: 'inset 0 0 10px rgb(29, 161, 242)',
                backgroundColor: 'transparent !important'
            }
        },
        buttonActive: {
            border: '1px solid rgb(29, 161, 242)',
            boxShadow: 'inset 0 0 2px rgb(29, 161, 242)',
            backgroundColor: 'transparent',
            color: theme.palette.mode === 'dark' ? 'white' : 'black'
        }
    };
});
function VotingCard() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = VotingCard_useStyles();
    const identifier = (0,react.useContext)(SnapshotContext);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { payload: proposal  } = useProposal(identifier.id);
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: power  } = usePower(identifier);
    const choices = proposal.choices;
    const [choice, setChoice] = (0,react.useState)(0);
    const [open, setOpen] = (0,react.useState)(false);
    const [loading, setLoading] = (0,react.useState)(false);
    const networkPluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const retry = useRetry();
    const onVoteConfirm = (0,shared_src/* useSnackbarCallback */.iD)(async ()=>{
        setLoading(true);
        const message = {
            from: (0,lib.toChecksumAddress)(account),
            space: identifier.space,
            timestamp: Math.floor(Date.now() / 1e3),
            proposal: identifier.id,
            choice: proposal.type === 'single-choice' ? choice : [
                choice
            ],
            metadata: JSON.stringify({})
        };
        const domain = constants/* SNAPSHOT_VOTE_DOMAIN */.c_;
        const types = getSnapshotVoteType(proposal.type);
        const data = {
            message,
            domain,
            types
        };
        const sig = await connection?.signMessage(JSON.stringify({
            domain,
            types: {
                EIP712Domain: [
                    {
                        name: 'name',
                        type: 'string'
                    },
                    {
                        name: 'version',
                        type: 'string'
                    }, 
                ],
                Vote: types.Vote
            },
            primaryType: 'Vote',
            message
        }), 'typedDataSign', {
            account: (0,lib.toChecksumAddress)(account)
        });
        const body = JSON.stringify({
            data,
            sig,
            address: (0,lib.toChecksumAddress)(account)
        });
        return messages/* PluginSnapshotRPC.vote */.q.vote(body);
    }, [
        choice,
        identifier,
        account,
        proposal,
        connection,
        chainId
    ], ()=>{
        setLoading(false);
        setOpen(false);
        retry();
    }, (_err)=>setLoading(false)
    , void 0, t('plugin_snapshot_vote_success'));
    (0,react.useEffect)(()=>{
        setOpen(false);
    }, [
        account,
        power,
        setOpen
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotCard, {
        title: t('plugin_snapshot_vote_title'),
        children: [
            account && networkPluginId === src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    choices.map((choiceText, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            onClick: ()=>setChoice(i + 1)
                            ,
                            className: classnames_default()([
                                classes.button,
                                classes.choiceButton,
                                ...choice === i + 1 ? [
                                    classes.buttonActive
                                ] : [], 
                            ]),
                            variant: "outlined",
                            children: choiceText
                        }, i)
                    ),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "primary",
                        variant: "contained",
                        className: classes.button,
                        disabled: choice === 0 || !account || !power,
                        onClick: ()=>setOpen(true)
                        ,
                        children: power && account ? t('plugin_snapshot_vote') : t('plugin_snapshot_no_power')
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(VoteConfirmDialog, {
                open: open,
                loading: loading,
                onClose: ()=>setOpen(false)
                ,
                choiceText: choices[choice - 1],
                snapshot: proposal.snapshot,
                powerSymbol: proposal.space.symbol,
                power: power,
                onVoteConfirm: onVoteConfirm
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/SnapshotTab.tsx



const SnapshotTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        },
        content: {
            padding: `${theme.spacing(2)} !important`
        }
    };
});
function SnapshotTab(props) {
    const { classes  } = SnapshotTab_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
            className: classes.content,
            children: props.children
        })
    });
}

// EXTERNAL MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx + 1 modules
var Markdown = __webpack_require__(34430);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ReadmeCard.tsx





function ReadMeCard(props) {
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
        content: proposal.body
    });
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ProposalTab.tsx







function ProposalTab() {
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotTab, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadMeCard, {}),
            proposal.isEnd ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(VotingCard, {})
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(37194);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/LinearProgress/linearProgressClasses.js
var linearProgressClasses = __webpack_require__(23918);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json2csv@5.0.6/node_modules/json2csv/dist/json2csv.umd.js
var json2csv_umd = __webpack_require__(92895);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/LoadingFailCard.tsx




class LoadingFailCard extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return this.props.isFullPluginDown ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                style: {
                    textAlign: 'center',
                    padding: 16
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "center",
                        color: "error",
                        children: "Loading fails due to Snapshot API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 254,
                            height: 40,
                            backgroundColor: '#07101B',
                            color: 'white',
                            fontSize: 14,
                            fontWeight: 700,
                            marginBottom: 4,
                            marginTop: 32
                        },
                        variant: "contained",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotCard, {
                title: this.props.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to Snapshot API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "contained",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/LoadingCard.tsx





const LoadingCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(1),
            '&:first-child': {
                marginTop: theme.spacing(2)
            }
        }
    };
});
function LoadingCard(props) {
    const { classes  } = LoadingCard_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotCard, {
            title: props.title,
            children: Array.from({
                length: 2
            }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    className: classes.skeleton,
                    animation: "wave",
                    variant: "rectangular",
                    width: i === 0 ? '80%' : '60%',
                    height: 15
                }, i)
            )
        }),
        children: props.children
    });
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ResultCard.tsx
















const choiceMaxWidth = 240;
const ResultCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        list: {
            display: 'flex',
            flexDirection: 'column'
        },
        listItem: {
            display: 'flex',
            flexDirection: 'column'
        },
        listItemHeader: {
            display: 'flex',
            width: '100%'
        },
        power: {
            marginLeft: theme.spacing(2)
        },
        ratio: {
            marginLeft: 'auto'
        },
        choice: {
            maxWidth: choiceMaxWidth
        },
        linearProgressWrap: {
            width: '100%',
            marginTop: theme.spacing(1)
        },
        ellipsisText: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        resultButton: {
            width: 200,
            margin: '0 auto'
        }
    };
});
const StyledLinearProgress = (0,styled/* default */.ZP)(LinearProgress/* default */.Z)`
    &.${linearProgressClasses/* default.root */.Z.root} {
        height: 8px;
        border-radius: 5px;
    }
    &.${linearProgressClasses/* default.bar */.Z.bar} {
        border-radius: 5px;
    }
`;
function Content() {
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    const { payload: votes  } = useVotes(identifier);
    const { payload: { results  } ,  } = useResults(identifier);
    const { classes  } = ResultCard_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const listRef = (0,react.useRef)([]);
    const [tooltipsVisible, setTooltipsVisible] = (0,react.useState)(Array.from({
        length: results.length
    }).fill(false));
    (0,react.useEffect)(()=>{
        setTooltipsVisible(listRef.current.map((element)=>element.offsetWidth === choiceMaxWidth
        ));
    }, []);
    const dataForCsv = (0,react.useMemo)(()=>votes.map((vote)=>({
                address: vote.address,
                choice: vote.choiceIndex,
                balance: vote.balance,
                timestamp: vote.timestamp,
                dateUtc: new Date(vote.timestamp * 1000).toUTCString(),
                authorIpfsHash: vote.authorIpfsHash
            })
        )
    , [
        votes
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotCard, {
        title: proposal.isEnd ? t('plugin_snapshot_result_title') : t('plugin_snapshot_current_result_title'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.list,
                children: results.map((result, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        className: classes.listItem,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.listItemHeader,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* ShadowRootTooltip */.p_, {
                                        PopperProps: {
                                            disablePortal: true
                                        },
                                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: result.choice
                                        }),
                                        placement: "top",
                                        disableHoverListener: !tooltipsVisible[i],
                                        arrow: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            ref: (ref)=>{
                                                listRef.current[i] = ref;
                                            },
                                            className: classnames_default()(classes.choice, classes.ellipsisText),
                                            children: result.choice
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* ShadowRootTooltip */.p_, {
                                        PopperProps: {
                                            disablePortal: true
                                        },
                                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.ellipsisText,
                                            children: result.powerDetail.flatMap((detail, index)=>{
                                                const name = (0,millify/* default */.ZP)(detail.power, {
                                                    precision: 2,
                                                    lowercase: true
                                                });
                                                return [
                                                    index === 0 ? '' : '+',
                                                    name,
                                                    detail.name
                                                ];
                                            }).join(' ')
                                        }),
                                        placement: "top",
                                        arrow: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.power,
                                            children: (0,millify/* default */.ZP)(result.power, {
                                                precision: 2,
                                                lowercase: true
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        className: classes.ratio,
                                        children: [
                                            Number.parseFloat(result.percentage.toFixed(2)),
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.linearProgressWrap,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledLinearProgress, {
                                    variant: "determinate",
                                    value: result.percentage
                                })
                            })
                        ]
                    }, i)
                )
            }),
            proposal.isEnd ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                color: "primary",
                variant: "contained",
                className: classes.resultButton,
                onClick: ()=>{
                    const csv = (0,json2csv_umd.parse)(dataForCsv);
                    const link = document.createElement('a');
                    link.setAttribute('href', `data:text/csv;charset=utf-8,${csv}`);
                    link.setAttribute('download', `snapshot-report-${identifier.id}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                },
                children: t('plugin_snapshot_download_report')
            }) : null
        ]
    });
}
function Loading(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard, {
        title: proposal.isEnd ? t('plugin_snapshot_result_title') : t('plugin_snapshot_current_result_title'),
        children: props.children
    });
}
function Fail(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    const retry = useRetry();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
        title: proposal.isEnd ? t('plugin_snapshot_result_title') : t('plugin_snapshot_current_result_title'),
        retry: retry,
        children: props.children
    });
}
function ResultCard() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Loading, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fail, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {})
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Badge/Badge.js + 1 modules
var Badge = __webpack_require__(42210);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/VotesCard.tsx

















const VotesCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        list: {
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 'var(--contentHeight)',
            overflow: 'auto',
            paddingTop: 0,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        listItem: {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        badge: {
            transform: 'translateX(40px) translateY(2.5px)'
        },
        avatarWrapper: {
            marginRight: 8
        },
        choice: {
            flexGrow: 1,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            maxWidth: 180
        },
        ellipsisText: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        avatar: {
            width: 16,
            height: 16
        },
        link: {
            display: 'flex',
            minWidth: 130,
            color: 'inherit',
            alignItems: 'center',
            textDecoration: 'none !important',
            marginRight: 16
        },
        power: {
            minWidth: 90
        },
        shadowRootTooltip: {
            color: 'white'
        }
    };
});
function VotesCard_Content() {
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: votes  } = useVotes(identifier);
    const { classes  } = VotesCard_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotCard, {
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Badge/* default */.Z, {
            max: 9999999,
            classes: {
                badge: classes.badge
            },
            badgeContent: votes.length,
            color: "primary",
            children: t('plugin_snapshot_votes_title')
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            className: classes.list,
            children: votes.map((v)=>{
                const isAverageWeight = v.choices?.every((c)=>c.weight === 1
                );
                const fullChoiceText = v.totalWeight && v.choices ? v.choices.flatMap((choice, index)=>[
                        index === 0 ? '' : ', ',
                        !isAverageWeight ? (0,formatter/* formatPercentage */.rl)(choice.weight / v.totalWeight) + ' ' : '',
                        choice.name, 
                    ]
                ).join('') : null;
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                    className: classes.listItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                            className: classnames_default()(classes.link, classes.ellipsisText),
                            target: "_blank",
                            rel: "noopener",
                            href: resolver/* explorerResolver.addressLink */.Nb.addressLink(chainId, v.address),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.avatarWrapper,
                                    children: v.authorAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                        src: (0,pipes/* resolveIPFSLink */.r5)(v.authorAvatar),
                                        className: classes.avatar
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumBlockie, {
                                        address: v.address
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: v.authorName ?? (0,formatter/* formatEthereumAddress */.j8)(v.address, 4)
                                })
                            ]
                        }),
                        v.choice ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.choice,
                            children: v.choice
                        }) : v.choices ? /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* ShadowRootTooltip */.p_, {
                            PopperProps: {
                                disablePortal: true
                            },
                            title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.shadowRootTooltip,
                                children: fullChoiceText
                            }),
                            placement: "top",
                            arrow: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.choice,
                                children: fullChoiceText
                            })
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.power,
                            children: (0,millify/* default */.ZP)(v.balance, {
                                precision: 2,
                                lowercase: true
                            }) + ' ' + (v.strategySymbol ? v.strategySymbol.toUpperCase() : '')
                        })
                    ]
                }, v.address);
            })
        })
    });
}
function VotesCard_Loading(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard, {
        title: t('plugin_snapshot_votes_title'),
        children: props.children
    });
}
function VotesCard_Fail(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const retry = useRetry();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
        title: t('plugin_snapshot_votes_title'),
        retry: retry,
        children: props.children
    });
}
function VotesCard() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard_Loading, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard_Fail, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard_Content, {})
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ProgressTab.tsx





function ProgressTab() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotTab, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InformationCard, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard, {})
        ]
    });
}

// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/Snapshot.tsx











const Snapshot_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            '--contentHeight': '400px',
            '--tabHeight': '35px',
            width: '100%',
            padding: 0
        },
        content: {
            width: '100%',
            minHeight: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important'
        },
        body: {
            flex: 1,
            maxHeight: 'calc(var(--contentHeight) - var(--tabHeight))',
            overflow: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tabs: {
            height: 'var(--tabHeight)',
            width: '100%',
            minHeight: 'unset',
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        tab: {
            height: 'var(--tabHeight)',
            minHeight: 'unset',
            minWidth: 'unset'
        },
        subtitle: {
            fontSize: 12,
            marginRight: theme.spacing(0.5)
        },
        button: {
            width: '100%',
            minHeight: 39,
            margin: `${theme.spacing(1)} auto`
        },
        choiceButton: {
            color: theme.palette.mode === 'dark' ? 'white' : 'black',
            transitionDuration: '0s !important',
            '&:hover': {
                border: '2px solid rgb(29, 161, 242) !important',
                backgroundColor: 'transparent !important'
            }
        },
        buttonActive: {
            border: '2px solid rgb(29, 161, 242)',
            backgroundColor: 'transparent',
            color: theme.palette.mode === 'dark' ? 'white' : 'black'
        }
    };
});
function Snapshot() {
    const { classes  } = Snapshot_useStyles();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: proposal  } = useProposal(identifier.id);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: "Proposal"
        }, "proposal"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: "Progress"
        }, "progress"), 
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    sx: {
                                        marginRight: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            component: "span",
                                            sx: {
                                                marginRight: 0.5
                                            },
                                            children: proposal.title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            color: "textSecondary",
                                            component: "span",
                                            children: [
                                                "#",
                                                identifier.id.slice(0, 7)
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                    color: "primary",
                                    size: "small",
                                    label: proposal.status
                                })
                            ]
                        }),
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            display: "flex",
                            alignItems: "center",
                            sx: {
                                marginTop: 0.5
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textSecondary",
                                variant: "body2",
                                children: identifier.space
                            })
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
                                    tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProposalTab, {}) : null,
                                    tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressTab, {}) : null
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                style: {
                    padding: 12
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedPluginID: src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                    expectedChainId: chainId,
                    renderInTimeline: true
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.8.0_2f7y4c3dlygqpuszd3d43oslwi/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(93122);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/PostInspector.tsx








function PostInspector(props) {
    const identifier = getProposalIdentifier(props.url);
    const retry = useRetry();
    const theme = (0,utils/* useClassicMaskSNSPluginTheme */.JN)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: theme,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotContext.Provider, {
            value: identifier,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
                title: "",
                isFullPluginDown: true,
                retry: retry,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Snapshot, {})
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(80681);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/Snapshot.tsx


const SnapshotIcon = (0,icons_utils/* createIcon */.I)('Snapshot', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M15.314 11.844l5.14-10.157a.683.683 0 00-1.058-.822L3.37 14.84a.813.813 0 00.535 1.425h8.725l-5.031 9.887a.746.746 0 001.154.9l15.977-13.925a.732.732 0 00-.481-1.284h-8.934z",
        fill: "#FF9F0A"
    })
}), '-4 -4 36 36');

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/index.tsx











const SNSAdaptor_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(2),
            '&:first-child': {
                marginTop: theme.spacing(3)
            }
        }
    };
});
const isSnapshotURL = (x)=>/^https:\/\/(?:www.)?snapshot.(org|page)\/#\/(.*?)\/proposal\/[\dA-Za-z]+$/.test(x)
;
function Renderer({ url  }) {
    const { classes  } = SNSAdaptor_useStyles();
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    const fallbackUI = Array.from({
        length: 2
    }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
            className: classes.skeleton,
            animation: "wave",
            variant: "rectangular",
            width: i === 0 ? '80%' : '60%',
            height: 15
        }, i)
    );
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: fallbackUI,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            url: url
        })
    });
}
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,shared_base_src/* parseURL */.Lk)(x.val).find(isSnapshotURL);
        }, [
            props.message
        ]);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    PostInspector: function Component() {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isSnapshotURL);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    ApplicationEntries: [
        {
            ApplicationEntryID: base/* base.ID */.u.ID,
            category: 'dapp',
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_snapshot_description"
            }),
            tutorialLink: 'https://realmasknetwork.notion.site/10c08ed9629942dd852d9afbfab61208',
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_snapshot_info_snapshot"
            }),
            marketListSortingPriority: 8,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotIcon, {})
        }, 
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotIcon, {
            style: {
                width: 24,
                height: 24,
                filter: 'drop-shadow(0px 6px 12px rgba(255, 159, 10, 0.2))'
            }
        }),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(255, 159, 10, 0.2) 100%), #FFFFFF;'
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 36173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ PluginSnapshotRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75076);


if (false) {}
const PluginSnapshotMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SNAPSHOT_PLUGIN_ID */ .ly);
const PluginSnapshotRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SNAPSHOT_PLUGIN_ID */ .ly, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(9796), __webpack_require__.e(3285)]).then(__webpack_require__.bind(__webpack_require__, 13285))
, PluginSnapshotMessages.rpc);


/***/ }),

/***/ 73495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ ChainBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76618);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21784);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72499);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80226);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46123);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72288);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93455);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91788);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77818);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47061);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89239);















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        action: {
            textAlign: 'center',
            margin: theme.spacing(1),
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 48
        },
        tooltip: {
            borderRadius: 4,
            padding: 10
        }
    })
);
function ChainBoundary(props) {
    const { noSwitchNetworkTip =true , expectedPluginID , expectedChainId , predicate =(actualPluginID, actualChainId)=>actualPluginID === expectedPluginID && actualChainId === expectedChainId
     ,  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const actualPluginID1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const plugin = (0,_masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_11__/* .useActivatedPlugin */ .Rc)(actualPluginID1, 'any');
    const { Others: actualOthers  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(actualPluginID1);
    const actualChainId1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)(actualPluginID1);
    const actualProviderType = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useProviderType */ ._o)(actualPluginID1);
    const actualChainName = actualOthers?.chainResolver.chainName(actualChainId1);
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .mA)(actualPluginID1);
    const { Others: expectedOthers  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(expectedPluginID);
    const expectedConnection = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3Connection */ .Tv)(expectedPluginID);
    const expectedAllowTestnet = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAllowTestnet */ .QE)(expectedPluginID);
    const expectedChainName = expectedOthers?.chainResolver.chainName(expectedChainId);
    const expectedNetworkDescriptor = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkDescriptor */ .Vw)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, expectedChainId);
    const expectedChainAllowed = expectedOthers?.chainResolver.isValid(expectedChainId, expectedAllowTestnet);
    const isPluginIDMatched = actualPluginID1 === expectedPluginID;
    const isMatched = predicate(actualPluginID1, actualChainId1);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    const onSwitchChain = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .delay */ .gw)(1000);
        if (!expectedChainAllowed) return;
        if (!isPluginIDMatched || actualProviderType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect) {
            openSelectProviderDialog();
            return;
        }
        if (!isMatched) {
            await expectedConnection?.connect({
                chainId: expectedChainId
            });
        }
    }, [
        expectedChainAllowed,
        isMatched,
        isPluginIDMatched,
        actualProviderType,
        expectedChainId,
        expectedConnection,
        openSelectProviderDialog, 
    ]);
    // TODO: will remove this and extract new boundary for timeline
    const buttonProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            ...props.renderInTimeline ? {
                variant: 'contained',
                fullWidth: true,
                sx: {
                    backgroundColor: theme.palette.maskColor?.dark,
                    color: theme.palette.maskColor?.white,
                    '&:hover': {
                        backgroundColor: theme.palette.maskColor?.dark
                    }
                }
            } : {},
            ...props.ActionButtonPromiseProps
        };
    }, [
        props.ActionButtonPromiseProps,
        props.renderInTimeline
    ]);
    const renderBox = (children, tips)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .ShadowRootTooltip */ .p_, {
            title: tips ?? '',
            classes: {
                tooltip: classes.tooltip
            },
            arrow: true,
            placement: "top",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: props.className,
                sx: {
                    flex: 1
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: children
            })
        });
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !props.hiddenConnectButton ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
            fullWidth: true,
            startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__/* .PluginWalletConnectIcon */ .Q, {}),
            variant: "contained",
            size: props.ActionButtonPromiseProps?.size,
            sx: {
                marginTop: 1.5
            },
            onClick: openSelectProviderDialog,
            ...buttonProps,
            children: t('plugin_wallet_connect_wallet')
        }) : null
    }));
    if (isMatched) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.children
    });
    if (actualPluginID1 !== expectedPluginID) {
        return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.errorPlugin */ .ZN.errorPlugin,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: plugin?.name?.fallback ?? 'Unknown Plugin'
                        })
                    })
                }) : null,
                expectedChainAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                    fullWidth: true,
                    className: classes.switchButton,
                    startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .WalletIcon */ .o, {
                        mainIcon: expectedNetworkDescriptor?.icon,
                        size: 18
                    }),
                    sx: props.ActionButtonPromiseProps?.sx,
                    style: {
                        borderRadius: 10
                    },
                    init: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: t('plugin_wallet_connect_network', {
                            network: 'EVM'
                        })
                    }),
                    waiting: t('plugin_wallet_connect_network_under_going', {
                        network: 'EVM'
                    }),
                    complete: t('plugin_wallet_connect_network', {
                        network: 'EVM'
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...buttonProps
                }) : null
            ]
        }));
    }
    return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.errorPlugin */ .ZN.errorPlugin,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualChainName
                    })
                })
            }) : null,
            expectedChainAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .WalletIcon */ .o, {
                    mainIcon: expectedNetworkDescriptor?.icon,
                    size: 18
                }),
                sx: props.ActionButtonPromiseProps?.sx,
                style: {
                    borderRadius: 10,
                    paddingTop: 11,
                    paddingBottom: 11
                },
                init: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedChainName
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedChainName
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedChainName
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...buttonProps
            }) : null
        ]
    }), actualProviderType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect ? t('plugin_wallet_connect_tips') : '');
}


/***/ }),

/***/ 59345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ WalletConnectedBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72288);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91788);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93455);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50719);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            margin: 0
        },
        timeline: {
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            width: '100%',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            }
        }
    })
);
function WalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false , renderInTimeline =false  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const pluginID = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useAccount */ .mA)();
    const chainIdValid = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useChainId */ .xx)();
    const nativeTokenBalance = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useNativeTokenBalance */ .hj)();
    const approved = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useRiskWarningApproved */ ._W)();
    const { setDialog: setRiskWarningDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.walletRiskWarningDialogUpdated */ .R.events.walletRiskWarningDialogUpdated);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // TODO: will remove  this and extract new boundary for timeline
    const buttonClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, classes.connectWallet, renderInTimeline ? classes.timeline : null));
    if (!account) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        startIcon: props.startIcon,
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: openSelectProviderDialog,
        ...props.ActionButtonProps,
        children: t('plugin_wallet_connect_a_wallet')
    });
    if (!approved && !hideRiskWarningConfirmed) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>{
            setRiskWarningDialog({
                open: true,
                account,
                pluginID
            });
        },
        ...props.ActionButtonProps,
        children: t('plugin_wallet_confirm_risk_warning')
    });
    if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isZero */ .Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: !nativeTokenBalance.error,
        fullWidth: true,
        variant: "contained",
        onClick: nativeTokenBalance.retry,
        ...props.ActionButtonProps,
        children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: true,
        fullWidth: true,
        variant: "contained",
        ...props.ActionButtonProps,
        children: t('plugin_wallet_invalid_network')
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}


/***/ })

}]);