"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9376],{

/***/ 44309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ detectScrollType),
/* harmony export */   "T": () => (/* binding */ getNormalizedScrollLeft)
/* harmony export */ });
// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ 4789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ./src/plugins/Furucombo/base.tsx
var base = __webpack_require__(16228);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(81148);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(3543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(6823);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(27536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(99192);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ./src/plugins/Furucombo/constants.ts
var constants = __webpack_require__(16192);
;// CONCATENATED MODULE: ./src/plugins/Furucombo/apis/index.ts

let cachedAt = Date.now();
let cachedResult;
async function fetchPools() {
    if (cachedResult && Date.now() - cachedAt > 30 * 1000 /* cache for 30s */ ) return cachedResult;
    const response = await fetch(constants/* API_URL */.T5, {
        headers: {
            'x-api-key': constants/* API_KEY */.$h
        }
    });
    cachedResult = await response.json();
    cachedAt = Date.now();
    return cachedResult;
}

;// CONCATENATED MODULE: ./src/plugins/Furucombo/hooks/usePool.ts


function useFetchPools() {
    return (0,useAsyncRetry/* default */.Z)(()=>fetchPools()
    );
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(927);
;// CONCATENATED MODULE: ./src/plugins/Furucombo/utils.ts
function liquidityFormatter(num, digits) {
    const lookup = [
        {
            value: 1,
            symbol: ''
        },
        {
            value: 1e3,
            symbol: 'K'
        },
        {
            value: 1e6,
            symbol: 'M'
        },
        {
            value: 1e9,
            symbol: 'B'
        },
        {
            value: 1e12,
            symbol: 'T'
        },
        {
            value: 1e15,
            symbol: 'P'
        },
        {
            value: 1e18,
            symbol: 'E'
        }, 
    ];
    const rx = /\.0+$|(\.\d*[1-9])0+$/;
    const item1 = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item1 ? (num / item1.value).toFixed(digits).replace(rx, '$1') + item1.symbol : '0';
}
function shortenApy(num) {
    return num.length > 9 ? num.slice(0, 9).concat('...') : num;
}
function apyFormatter(num) {
    return (+num * 100).toFixed(2) + '%';
}

// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableSortLabel/TableSortLabel.js + 2 modules
var TableSortLabel = __webpack_require__(38625);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(76594);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableFooter/TableFooter.js + 1 modules
var TableFooter = __webpack_require__(34577);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TablePagination/TablePagination.js + 3 modules
var TablePagination = __webpack_require__(44905);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/LastPage.js
var LastPage = __webpack_require__(41315);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/FirstPage.js
var FirstPage = __webpack_require__(9871);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/KeyboardArrowRight.js
var KeyboardArrowRight = __webpack_require__(96217);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(43794);
;// CONCATENATED MODULE: ./src/plugins/Furucombo/UI/InvestmentsView.tsx









function TablePaginationActions(props) {
    const theme = (0,useTheme/* default */.Z)();
    const { count , page , rowsPerPage , onPageChange  } = props;
    const handleFirstPageButtonClick = (event)=>{
        onPageChange(event, 0);
    };
    const handleBackButtonClick = (event)=>{
        onPageChange(event, page - 1);
    };
    const handleNextButtonClick = (event)=>{
        onPageChange(event, page + 1);
    };
    const handleLastPageButtonClick = (event)=>{
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        sx: {
            flexShrink: 0,
            ml: 2.5
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                onClick: handleFirstPageButtonClick,
                disabled: page === 0,
                "aria-label": "first page",
                children: theme.direction === 'rtl' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LastPage/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FirstPage/* default */.Z, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                onClick: handleBackButtonClick,
                disabled: page === 0,
                "aria-label": "previous page",
                children: theme.direction === 'rtl' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowRight/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowLeft/* default */.Z, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                onClick: handleNextButtonClick,
                disabled: page >= Math.ceil(count / rowsPerPage) - 1,
                "aria-label": "next page",
                children: theme.direction === 'rtl' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowLeft/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowRight/* default */.Z, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                onClick: handleLastPageButtonClick,
                disabled: page >= Math.ceil(count / rowsPerPage) - 1,
                "aria-label": "last page",
                children: theme.direction === 'rtl' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FirstPage/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(LastPage/* default */.Z, {})
            })
        ]
    });
}
const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            fontFamily: 'inherit',
            backgroundColor: '#232535',
            color: 'white',
            borderRadius: 0
        },
        head: {
            borderBottom: '3px solid #393b4a',
            textTransform: 'uppercase'
        },
        row: {
            color: 'white'
        },
        cell: {
            fontFamily: 'inherit',
            color: 'white',
            borderBottom: '1px solid #393b4a'
        },
        sort: {
            color: 'white  !important',
            '& .MuiTableSortLabel-icon': {
                fill: 'white'
            }
        },
        pagination: {
            '& .MuiIconButton-root, .MuiTablePagination-select, .MuiTablePagination-, .MuiTablePagination-selectLabel': {
                color: 'white',
                fontFamily: 'inherit'
            },
            '& .MuiTablePagination-displayedRows, .MuiTablePagination-selectIcon': {
                color: 'white',
                fontFamily: 'inherit'
            },
            '& .MuiTablePagination-menuItem': {
                color: 'black',
                fontFamily: 'inherit'
            }
        },
        invest: {
            maxWidth: theme.spacing(12),
            fontFamily: 'inherit',
            backgroundColor: 'white',
            border: '1px solid #393b4a',
            borderRadius: '6px',
            color: '#212529',
            '&:hover': {
                backgroundColor: 'white',
                color: '#212529',
                border: '1px solid #393b4a'
            }
        }
    })
);
var Sortable;
(function(Sortable) {
    Sortable["apy"] = "apy";
    Sortable["liquidity"] = "liquidity";
})(Sortable || (Sortable = {}));
function InvestmentsView(props) {
    const { classes  } = useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const investables = props.investables;
    const [page, setPage] = react.useState(0);
    const [rowsPerPage, setRowsPerPage] = react.useState(5);
    const [order, setOrder] = react.useState('desc');
    const [orderBy, setOrderBy] = react.useState('apy');
    investables.sort((a, b)=>{
        const orderByA = orderBy;
        const orderByB = orderBy;
        return order === 'asc' ? Number.parseFloat(a[orderByA]) - Number.parseFloat(b[orderByB]) : Number.parseFloat(b[orderByB]) - Number.parseFloat(a[orderByA]);
    });
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - investables.length) : 0;
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(Number.parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleRequestSort = (event, property)=>{
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        component: Paper/* default */.Z,
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            "aria-label": "custom pagination table",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        className: classes.head,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: t('plugin_furucombo_head_pools')
                            }, "pools"),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableSortLabel/* default */.Z, {
                                    className: classes.sort,
                                    active: orderBy === 'apy',
                                    onClick: (e)=>handleRequestSort(e, 'apy')
                                    ,
                                    direction: orderBy === 'apy' ? order : 'asc',
                                    children: t('plugin_furucombo_annual_percentage_yield')
                                })
                            }, "apy"),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableSortLabel/* default */.Z, {
                                    className: classes.sort,
                                    active: orderBy === 'liquidity',
                                    onClick: (e)=>handleRequestSort(e, 'liquidity')
                                    ,
                                    direction: orderBy === 'liquidity' ? order : 'asc',
                                    children: t('plugin_furucombo_liquidity')
                                })
                            }, "liquidity"),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: t('plugin_furucombo_head_action')
                            }, "action")
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
                    children: [
                        (rowsPerPage > 0 ? investables.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : investables).map((row)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                className: classes.row,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.cell,
                                        component: "th",
                                        scope: "row",
                                        style: {
                                            width: 200,
                                            height: 36
                                        },
                                        children: row.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.cell,
                                        children: shortenApy(apyFormatter(row.apy))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.cell,
                                        children: liquidityFormatter(row.liquidity, 1)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.cell,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            className: classes.invest,
                                            size: "small",
                                            href: `${constants/* BASE_URL */._n}/${row.category}/${row.chainId}/${row.address}`,
                                            target: "_blank",
                                            children: t('plugin_furucombo_invest')
                                        })
                                    })
                                ]
                            }, row.address)
                        ),
                        emptyRows > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                            style: {
                                height: 69 * emptyRows
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                colSpan: 6,
                                className: classes.cell
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableFooter/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                            className: classes.pagination,
                            rowsPerPageOptions: [
                                5,
                                10,
                                25,
                                {
                                    label: 'All',
                                    value: -1
                                }
                            ],
                            colSpan: 4,
                            count: investables.length,
                            rowsPerPage: rowsPerPage,
                            page: page,
                            SelectProps: {
                                inputProps: {
                                    'aria-label': 'rows per page'
                                },
                                native: true
                            },
                            onPageChange: handleChangePage,
                            onRowsPerPageChange: handleChangeRowsPerPage,
                            ActionsComponent: TablePaginationActions
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(73508);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(24);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(73160);
;// CONCATENATED MODULE: ./src/resources/FurucomboIcon.tsx


const FurucomboIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(SvgIcon/* default */.Z, {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 42 42",
        version: "1.1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                children: "COMBO_token"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    cx: "50.0000129%",
                    cy: "52.1186081%",
                    fx: "50.0000129%",
                    fy: "52.1186081%",
                    r: "49.7661178%",
                    id: "radialGradient-1",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#1D1E27",
                            offset: "0%"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#1F202A",
                            offset: "22.0032839%"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#20222E",
                            offset: "75.9230432%"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#191A21",
                            offset: "100%"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                id: "Page-1",
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    id: "COMBO_token",
                    transform: "translate(1.000000, 1.000000)",
                    fillRule: "nonzero",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M20,-1 C8.40202025,-1 -1,8.40202025 -1,20 C-1,31.5979797 8.40202025,41 20,41 C31.5979797,41 41,31.5979797 41,20 C41,8.40202025 31.5979797,-1 20,-1 Z M20,1 C30.4934102,1 39,9.50658975 39,20 C39,30.4934102 30.4934102,39 20,39 C9.50658975,39 1,30.4934102 1,20 C1,9.50658975 9.50658975,1 20,1 Z",
                            id: "Oval-Copy-31",
                            fill: "#2F3249"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                            id: "Oval-Copy-31",
                            fill: "url(#radialGradient-1)",
                            cx: "20",
                            cy: "20",
                            r: "19"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                            id: "token",
                            transform: "translate(9.000000, 7.000000)",
                            fill: "#FFFFFF",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M10.4813993,23.5817983 L9.8711993,24.6617983 L10.6811992,25.1369982 C10.7825112,25.2022851 10.9008884,25.2361072 11.0213992,25.2341982 C11.1365672,25.2324351 11.2495926,25.2027891 11.3507992,25.1477982 L12.1607991,24.6725983 L11.5559992,23.5925983 L10.4813993,23.5817983 Z",
                                    id: "Path"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "14.050799 9.98459929 12.3389991 10.9997992 13.0193991 12.1769991 14.720399 11.1671992"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "18.6947987 8.86679937 18.0251987 7.68419946 16.3133988 8.69939939 16.9937988 9.8711993"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M21.7295985,6.02639957 L20.9249985,5.55659961 L20.2607986,6.55019954 L20.8925985,7.63019946 L22.0643984,7.54379947 L22.0643984,6.60419953 C22.0604393,6.36660267 21.9337655,6.14798816 21.7295985,6.02639957 L21.7295985,6.02639957 Z",
                                    id: "Path"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "15.4439989 2.43539983 13.942799 1.53899989 13.2677991 2.72159981 14.774399 3.61259974"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "18.8459987 4.42799969 17.3447988 3.53159975 16.6697988 4.71419967 18.1763987 5.6051996"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M10.6919992,0.0971999931 L9.8819993,0.577799959 L10.5677993,1.76039988 L11.0321992,1.4741999 L11.5019992,1.74959988 L12.1877991,0.57239996 L11.3831992,0.0971999931 C11.1709472,-0.0321257618 10.9042513,-0.0321257618 10.6919992,0.0971999931 L10.6919992,0.0971999931 Z",
                                    id: "Path"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "20.7143985 13.672799 20.7251985 15.4439989 22.0643984 15.4385989 22.0589984 13.667399"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "20.7143985 9.69299932 20.7251985 11.4587992 22.0643984 11.4587992 22.0589984 9.68759932"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M20.7089985,18.0899987 L20.2445986,18.3707987 L20.9303985,19.5479986 L21.7349985,19.0673987 C21.9395738,18.9417246 22.064278,18.7188925 22.0643984,18.4787987 L22.0643984,17.5283988 L20.7089985,17.5283988 L20.7089985,18.0899987 Z",
                                    id: "Path"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "16.8641988 20.2445986 17.5337988 21.4271985 19.0349987 20.5361985 18.3653987 19.3535986"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "13.456799 22.2803984 14.131799 23.4575983 15.6329989 22.5665984 14.9633989 21.3839985"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "10.3571993 21.7673985 11.7017992 21.7619985 11.6963992 19.9907986 10.3517993 19.9961986"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "11.6963992 12.9545991 10.3517993 12.9599991 10.3571993 14.731199 11.7017992 14.725799"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "10.3571993 18.2519987 11.7017992 18.2465987 11.6963992 16.4753988 10.3517993 16.4807988"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "1.3499999 11.5613992 1.34459991 9.79019931 0 9.79559931 0.00539999962 11.5667992"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "1.3499999 15.5519989 1.34459991 13.780799 0 13.786199 0.00539999962 15.5573989"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M1.3553999,17.5283988 L0,17.5283988 L0,18.4787987 C0.00231516044,18.7196912 0.128930544,18.9422893 0.334799976,19.0673987 L1.13939992,19.5479986 L1.82519987,18.3707987 L1.3553999,18.0899987 L1.3553999,17.5283988 Z",
                                    id: "Path"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "3.01319979 20.5361985 4.51439968 21.4271985 5.18399963 20.2445986 3.68279974 19.3535986"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "6.40979955 22.5665984 7.91639944 23.4575983 8.58599939 22.2803984 7.0847995 21.3839985"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "8.79119938 2.72159981 8.12159943 1.53899989 6.62579953 2.43539983 7.29539948 3.61799974"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "5.39459962 4.71419967 4.71959967 3.53159975 3.21299977 4.42799969 3.89339972 5.6051996"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "7.33859948 11.1671992 9.05039936 12.1769991 9.71999931 10.9943992 8.01359943 9.98459929"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("polygon", {
                                    id: "Path",
                                    points: "3.36419976 8.86679937 5.07599964 9.8711993 5.74559959 8.69939939 4.03919971 7.68419946"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M1.80899987,6.55019954 L1.14479992,5.55659961 L0.340199976,6.02639957 C0.134622022,6.14992262 0.00633143418,6.36984935 0,6.60959953 L0,7.54919947 L1.17719992,7.63559946 L1.80899987,6.55019954 Z",
                                    id: "Path"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    })
;

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Icon/Icon.js + 1 modules
var Icon = __webpack_require__(25238);
;// CONCATENATED MODULE: ./src/plugins/Furucombo/resources/QuickIcon.tsx


const QuickIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: "https://cdn.furucombo.app/assets/img/token/QUICK.png",
            height: "16px",
            width: "16px",
            alt: "WMATIC"
        })
    })
;

;// CONCATENATED MODULE: ./src/plugins/Furucombo/resources/UnknownIcon.tsx


const UnknownIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        xmlSpace: "preserve",
        version: "1.1",
        viewBox: "0 0 500 500",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            id: "unknown_icon",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M20 250c0,127 103,230 230,230 127,0 230,-103 230,-230 0,-127 -103,-230 -230,-230 -127,0 -230,103 -230,230zm184 71c0,-20 3,-36 11,-46 7,-10 20,-22 39,-35 10,-7 18,-14 23,-23 6,-9 9,-20 9,-32 0,-12 -4,-22 -10,-29 -7,-8 -16,-11 -28,-11 -10,0 -18,3 -25,9 -7,6 -10,15 -10,27l-73 0 0 -2c-1,-30 9,-53 29,-69 20,-15 46,-23 79,-23 35,0 62,9 82,27 20,17 30,41 30,71 0,19 -5,35 -16,51 -11,15 -25,27 -42,36 -9,6 -16,13 -19,20 -3,7 -5,17 -5,29l-74 0zm74 92l-74 0 0 -60 74 0 0 60z"
            })
        })
    })
;

;// CONCATENATED MODULE: ./src/plugins/Furucombo/resources/WmaticIcon.tsx


const WmaticIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Icon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: "https://cdn.furucombo.app/assets/img/token/WMATIC.png",
            height: "16px",
            width: "16px",
            alt: "WMATIC"
        })
    })
;

;// CONCATENATED MODULE: ./src/plugins/Furucombo/UI/PoolView.tsx










const PoolView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            fontFamily: 'inherit',
            backgroundColor: '#232535',
            color: 'white',
            padding: theme.spacing(2)
        },
        deck: {
            padding: theme.spacing(4),
            gap: theme.spacing(4)
        },
        meta: {
            padding: theme.spacing(4)
        },
        name: {
            fontSize: 20,
            fontFamily: 'inherit'
        },
        protocol: {
            color: '#9e9fa6',
            fontFamily: 'inherit',
            textTransform: 'capitalize'
        },
        title: {
            fontSize: 12,
            fontFamily: 'inherit',
            color: '#9e9fa6',
            textTransform: 'uppercase'
        },
        value: {
            fontSize: 24,
            fontFamily: 'inherit'
        },
        divider: {
            backgroundColor: '#393b4a',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        },
        invest: {
            maxWidth: theme.spacing(12),
            fontSize: 16,
            fontFamily: 'inherit',
            fontWeight: 400,
            backgroundColor: 'white',
            border: '1px solid #393b4a',
            borderRadius: '6px',
            color: '#212529',
            paddingRight: theme.spacing(4),
            paddingLeft: theme.spacing(4),
            '&:hover': {
                backgroundColor: 'white',
                color: '#212529',
                border: '1px solid #393b4a'
            }
        },
        icons: {
            height: 24,
            width: 24
        },
        unknown: {
            padding: theme.spacing(0.35),
            height: 19,
            width: 19
        },
        tooltip: {
            backgroundColor: 'white'
        }
    })
);
function PoolView(props) {
    const { classes  } = PoolView_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { category , chainId , address , name , protocol , liquidity , apy , angels  } = props.investable;
    const displayRewardIcon = (rewardToken)=>{
        if (rewardToken.symbol === 'WMATIC') return /*#__PURE__*/ (0,jsx_runtime.jsx)(WmaticIcon, {});
        if (rewardToken.symbol === 'COMBO') return /*#__PURE__*/ (0,jsx_runtime.jsx)(FurucomboIcon, {
            className: classes.icons
        });
        if (rewardToken.symbol === 'QUICK') return /*#__PURE__*/ (0,jsx_runtime.jsx)(QuickIcon, {
            className: classes.icons
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(UnknownIcon, {
            className: classes.unknown
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    wrap: "nowrap",
                    className: classes.deck,
                    justifyContent: "space-around",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                            container: true,
                            item: true,
                            direction: "column",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                    item: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.name,
                                        children: name
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                    item: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.protocol,
                                        children: protocol
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                size: "small",
                                className: classes.invest,
                                variant: "outlined",
                                href: `${constants/* BASE_URL */._n}/${category}/${chainId}/${address}`,
                                target: "_blank",
                                children: t('plugin_furucombo_invest')
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                className: classes.divider
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                wrap: "nowrap",
                justifyItems: "center",
                className: classes.meta,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        item: true,
                        direction: "column",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: t('plugin_furucombo_liquidity')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.value,
                                    children: liquidityFormatter(liquidity, 1)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        item: true,
                        direction: "column",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: t('plugin_furucombo_annual_percentage_yield')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.value,
                                    children: apyFormatter(apy)
                                })
                            })
                        ]
                    }),
                    category === 'farm' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        item: true,
                        direction: "column",
                        alignItems: "center",
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: t('plugin_furucombo_rewards')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                container: true,
                                item: true,
                                direction: "row",
                                justifyContent: "center",
                                children: angels.map((angel)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                        item: true,
                                        children: displayRewardIcon(angel.rewardToken)
                                    }, angel.address)
                                )
                            })
                        ]
                    }) : null
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Furucombo/UI/FurucomboView.tsx









const FurucomboView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            fontFamily: 'Muli,Helvetica,-apple-system,system-ui,"sans-serif"',
            width: '100%',
            boxShadow: 'none',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0
        },
        content: {
            width: '100%',
            height: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: '0 !important'
        },
        tabs: {
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`,
            backgroundColor: '#1b1b21'
        },
        tab: {
            fontFamily: 'inherit',
            color: 'white'
        }
    })
);
function FurucomboView(props) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = FurucomboView_useStyles();
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const { value , loading , error  } = useFetchPools();
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        align: "center",
        children: t('loading')
    });
    if (error || !value) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        align: "center",
        color: "textPrimary",
        children: t('plugin_furucombo_smt_wrong')
    });
    const { investables =[]  } = value;
    const investable1 = investables.find((investable)=>(0,address/* isSameAddress */.Wr)(investable.address, props.address) && investable.chainId === currentChainId && investable.category === props.category
    );
    if (!investable1) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        align: "center",
        color: "textPrimary",
        children: t('plugin_furucombo_pool_not_found')
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
                    value: tabIndex,
                    className: classes.tabs,
                    variant: "fullWidth",
                    indicatorColor: "primary",
                    textColor: "secondary",
                    onChange: (_, newValue)=>setTabIndex(newValue)
                    ,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: 0,
                            className: classes.tab,
                            label: t('plugin_furucombo_tab_pool')
                        }, 0),
                        ",",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: 1,
                            className: classes.tab,
                            label: t('plugin_furucombo_tab_investments')
                        }, 1),
                        ","
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                    children: [
                        tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolView, {
                            investable: investable1
                        }) : null,
                        tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InvestmentsView, {
                            investables: investables
                        }) : null
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
;// CONCATENATED MODULE: ./src/plugins/Furucombo/SNSAdaptor/index.tsx








const matchLink = /^https:\/\/furucombo.app\/invest\/(pool|farm)\/(137|1)\/(0x\w+)/;
const isFurucomboLink = (link)=>matchLink.test(link)
;
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Comp(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,src/* parseURL */.Lk)(x.val).find(isFurucomboLink);
        }, [
            props.message
        ]);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    PostInspector: function Component() {
        const link = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks().find(isFurucomboLink);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    }
};
function Renderer(props) {
    const [, category, chainId, address] = props.url.match(matchLink) ?? [];
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: Number.parseInt(chainId, 10),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FurucomboView, {
            category: category,
            address: address
        })
    });
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 38587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ EthereumChainBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../plugin-infra/src/entry-dom.ts + 1 modules
var entry_dom = __webpack_require__(3267);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(24790);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAllowTestnet.ts

function useAllowTestnet() {
    return (0,context/* useWeb3StateContext */.N9)().allowTestnet;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(94232);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(80917);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumChainBoundary.tsx















const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({})
);
function EthereumChainBoundary(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const pluginID = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const plugin = (0,entry_dom/* useActivatedPlugin */.Rc)(pluginID, 'any');
    const account = (0,entry_web3/* useAccount */.mA)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const allowTestnet = useAllowTestnet();
    const providerType = (0,src/* useValueRef */.E)(settings/* currentProviderSettings */.t1);
    const { noSwitchNetworkTip =false  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const expectedChainId = props.chainId;
    const expectedNetwork = (0,chainDetailed/* getChainName */.qz)(expectedChainId);
    const actualChainId = chainId;
    const actualNetwork = (0,chainDetailed/* getChainName */.qz)(actualChainId);
    // if false then it will not guide the user to switch the network
    const isAllowed = (0,chainDetailed/* isChainIdValid */.Ji)(expectedChainId, allowTestnet) && !!account && providerType !== types/* ProviderType.Coin98 */.lP.Coin98;
    // is the actual chain id matched with the expected one?
    const isChainMatched = actualChainId === expectedChainId;
    const isPluginMatched = pluginID === entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    // is the actual chain id a valid one even if it does not match with the expected one?
    const isValid = props?.isValidChainId?.(actualChainId, expectedChainId) ?? false;
    const { openDialog: openSelectProviderDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #region connect wallet dialog
    const { setDialog: setConnectWalletDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (ev.open) return;
    });
    // #endregion
    // request ethereum-compatible network
    const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(expectedChainId);
    const onSwitchChain = (0,react.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,esm/* delay */.gw)(1000);
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
            if (!networkType) return;
            try {
                const overrides = {
                    chainId: expectedChainId,
                    providerType
                };
                await Promise.race([
                    (async ()=>{
                        await (0,esm/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
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
            settings_settings/* pluginIDSettings.value */.tR.value = entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
        };
        if (!isChainMatched) await switchToChain();
        if (!isPluginMatched) {
            await switchToPlugin();
            if (!networkType || networkType !== types/* NetworkType.Ethereum */.td.Ethereum || (0,address/* isValidAddress */.At)(account)) return;
            setConnectWalletDialog({
                open: true,
                providerType: types/* ProviderType.MetaMask */.lP.MetaMask,
                networkType
            });
        }
    }, [
        account,
        isAllowed,
        isChainMatched,
        isPluginMatched,
        providerType,
        expectedChainId
    ]);
    const renderBox = (children)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: props.className,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            sx: !props.disablePadding ? {
                paddingTop: 1,
                paddingBottom: 1
            } : null,
            children: children
        });
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_connect_wallet_tip')
                })
            }),
            !props.hiddenConnectButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                size: "small",
                sx: {
                    marginTop: 1.5
                },
                onClick: openSelectProviderDialog,
                children: t('plugin_wallet_connect_wallet')
            }) : null
        ]
    }));
    if (isChainMatched && isPluginMatched || isValid) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    });
    if (!isAllowed) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: t('plugin_wallet_not_available_on', {
                network: actualNetwork
            })
        })
    }));
    if (pluginID !== entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: plugin?.name?.fallback ?? 'Unknown Plugin'
                        })
                    })
                }) : null,
                isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    variant: "contained",
                    size: "small",
                    className: classes.switchButton,
                    sx: props.switchButtonStyle ?? {
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
                sx: props.switchButtonStyle ?? {
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


/***/ })

}]);