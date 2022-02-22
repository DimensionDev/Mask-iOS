"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1478],{

/***/ 25591:
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

/***/ 82923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(89729);
// EXTERNAL MODULE: ./src/plugins/Furucombo/base.tsx
var base = __webpack_require__(85389);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(77031);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(20235);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CardContent/CardContent.js
var CardContent = __webpack_require__(81337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tabs/Tabs.js + 1 modules
var Tabs = __webpack_require__(76524);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(88785);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(54933);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(58179);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(19149);
// EXTERNAL MODULE: ./src/plugins/Furucombo/constants.ts
var constants = __webpack_require__(56153);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(32824);
;// CONCATENATED MODULE: ./src/plugins/Furucombo/utils.ts
function liquidityFormatter(num, digits) {
    const lookup = [
        {
            value: 1,
            symbol: ''
        },
        {
            value: 1000,
            symbol: 'K'
        },
        {
            value: 1000000,
            symbol: 'M'
        },
        {
            value: 1000000000,
            symbol: 'B'
        },
        {
            value: 1000000000000,
            symbol: 'T'
        },
        {
            value: 1000000000000000,
            symbol: 'P'
        },
        {
            value: 1000000000000000000,
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

// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(9328);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Table/Table.js
var Table = __webpack_require__(36347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableHead/TableHead.js
var TableHead = __webpack_require__(64109);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(50440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(80689);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableSortLabel/TableSortLabel.js + 1 modules
var TableSortLabel = __webpack_require__(56030);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableBody/TableBody.js
var TableBody = __webpack_require__(33576);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableFooter/TableFooter.js
var TableFooter = __webpack_require__(21273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TablePagination/TablePagination.js
var TablePagination = __webpack_require__(85589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/LastPage.js
var LastPage = __webpack_require__(63261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/FirstPage.js
var FirstPage = __webpack_require__(336);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/KeyboardArrowRight.js
var KeyboardArrowRight = __webpack_require__(13434);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(18550);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
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
    }));
}
const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
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
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Container/Container.js
var Container = __webpack_require__(40629);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(86685);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(33390);
// EXTERNAL MODULE: ./src/resources/FurucomboIcon.tsx
var FurucomboIcon = __webpack_require__(37684);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Icon/Icon.js + 1 modules
var Icon = __webpack_require__(65867);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(30282);
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










const PoolView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
        if (rewardToken.symbol === 'WMATIC') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WmaticIcon, {}));
        if (rewardToken.symbol === 'COMBO') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(FurucomboIcon/* FurucomboIcon */.x, {
            className: classes.icons
        }));
        if (rewardToken.symbol === 'QUICK') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(QuickIcon, {
            className: classes.icons
        }));
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UnknownIcon, {
            className: classes.unknown
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Furucombo/UI/FurucomboView.tsx









const FurucomboView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        align: "center",
        children: t('loading')
    }));
    if (error || !value) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        align: "center",
        color: "textPrimary",
        children: t('plugin_furucombo_smt_wrong')
    }));
    const { investables =[]  } = value;
    const investable1 = investables.find((investable)=>(0,address/* isSameAddress */.Wr)(investable.address, props.address) && investable.chainId === currentChainId && investable.category === props.category
    );
    if (!investable1) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        align: "center",
        color: "textPrimary",
        children: t('plugin_furucombo_pool_not_found')
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
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
    }));
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(80066);
;// CONCATENATED MODULE: ./src/plugins/Furucombo/SNSAdaptor/index.tsx







const matchLink = /^https:\/\/furucombo.app\/invest\/(pool|farm)\/(137|1)\/(0x\w+)/;
const isFurucomboLink = (link)=>matchLink.test(link)
;
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Comp(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,shared_base_src/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,shared_base_src/* parseURL */.Lk)(x.val).find(isFurucomboLink);
        }, [
            props.message
        ]);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    PostInspector: function Component() {
        const link = src/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks().find(isFurucomboLink);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    }
};
function Renderer(props) {
    var ref;
    const [, category, chainId, address] = (ref = props.url.match(matchLink)) !== null && ref !== void 0 ? ref : [];
    (0,src/* usePluginWrapper */.fI)(true);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: Number.parseInt(chainId, 10),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FurucomboView, {
            category: category,
            address: address
        })
    }));
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 80066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ EthereumChainBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(51503);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAllowTestnet.ts

function useAllowTestnet() {
    return (0,context/* useWeb3StateContext */.N9)().allowTestnet;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(81409);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(29528);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(57767);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(12705);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(3087);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumChainBoundary.tsx














const useStyles = (0,src/* makeStyles */.ZL)()(()=>({})
);
function EthereumChainBoundary(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const pluginID = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const plugin = (0,plugin_infra_src/* useActivatedPlugin */.Rc)(pluginID, 'any');
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const allowTestnet = useAllowTestnet();
    const providerType = (0,shared_src/* useValueRef */.E)(settings/* currentProviderSettings */.t1);
    const { noSwitchNetworkTip =false  } = props;
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const expectedChainId = props.chainId;
    const expectedNetwork = (0,chainDetailed/* getChainName */.qz)(expectedChainId);
    const actualChainId = chainId;
    const actualNetwork = (0,chainDetailed/* getChainName */.qz)(actualChainId);
    // if false then it will not guide the user to switch the network
    const isAllowed = (0,chainDetailed/* isChainIdValid */.Ji)(expectedChainId, allowTestnet) && !!account && providerType !== types/* ProviderType.Coin98 */.lP.Coin98;
    // is the actual chain id matched with the expected one?
    const isChainMatched = actualChainId === expectedChainId;
    const isPluginMatched = pluginID === plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    var ref1;
    // is the actual chain id a valid one even if it does not match with the expected one?
    const isValid = (ref1 = props === null || props === void 0 ? void 0 : (ref = props.isValidChainId) === null || ref === void 0 ? void 0 : ref.call(props, actualChainId, expectedChainId)) !== null && ref1 !== void 0 ? ref1 : false;
    const onSwitchChain = (0,react.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,shared_base_src/* delay */.gw)(1000);
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
            // request ethereum-compatible network
            const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(expectedChainId);
            if (!networkType) return;
            try {
                const overrides = {
                    chainId: expectedChainId,
                    providerType
                };
                await Promise.race([
                    (async ()=>{
                        await (0,shared_base_src/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
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
            settings_settings/* pluginIDSettings.value */.tR.value = plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
        };
        if (!isChainMatched) await switchToChain();
        if (!isPluginMatched) await switchToPlugin();
    }, [
        account,
        isAllowed,
        isChainMatched,
        isPluginMatched,
        providerType,
        expectedChainId
    ]);
    const { openDialog: openSelectProviderDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    const renderBox = (children)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            sx: !props.disablePadding ? {
                paddingTop: 1,
                paddingBottom: 1
            } : null,
            children: children
        }));
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_connect_wallet_tip')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                size: "small",
                sx: {
                    marginTop: 1.5
                },
                onClick: openSelectProviderDialog,
                children: t('plugin_wallet_connect_wallet')
            })
        ]
    }));
    if (isChainMatched && isPluginMatched || isValid) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    }));
    if (!isAllowed) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: t('plugin_wallet_not_available_on', {
                network: actualNetwork
            })
        })
    }));
    if (pluginID !== plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
        var ref2;
        var ref3, _switchButtonStyle;
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: (ref3 = plugin === null || plugin === void 0 ? void 0 : (ref2 = plugin.name) === null || ref2 === void 0 ? void 0 : ref2.fallback) !== null && ref3 !== void 0 ? ref3 : 'Unknown Plugin'
                        })
                    })
                }) : null,
                isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    variant: "contained",
                    size: "small",
                    className: classes.switchButton,
                    sx: (_switchButtonStyle = props.switchButtonStyle) !== null && _switchButtonStyle !== void 0 ? _switchButtonStyle : {
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
    var _switchButtonStyle1;
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
                sx: (_switchButtonStyle1 = props.switchButtonStyle) !== null && _switchButtonStyle1 !== void 0 ? _switchButtonStyle1 : {
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