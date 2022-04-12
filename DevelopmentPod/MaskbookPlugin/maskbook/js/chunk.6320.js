"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6320],{

/***/ 42408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CompletionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70008);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46663);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39402);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18287);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15672);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12463);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69507);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43021);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47906);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39338);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49975);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6254);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63967);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3292);
/* harmony import */ var _NoNftCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99118);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme, props)=>({
        successButton: {
            backgroundColor: theme.palette.mode === 'light' ? '#2e7d32' : '#66bb6a',
            color: theme.palette.mode === 'light' ? '#fff' : 'rgba(0, 0, 0, .87)',
            '&:hover': {
                backgroundColor: theme.palette.mode === 'light' ? '#1B5E20' : '#388E3C'
            }
        },
        errorButton: {},
        helperText: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(1)
        },
        helperTextIcon: {
            marginRight: '8px',
            fontSize: '20px'
        },
        helperTextContent: {
            fontSize: '14px'
        }
    })
);
function CompletionCard(props) {
    const { completionStatus , onSubmit  } = props;
    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(completionStatus === null || completionStatus === void 0 ? void 0 : completionStatus.answered);
    var ref1;
    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((ref1 = completionStatus === null || completionStatus === void 0 ? void 0 : completionStatus.questions) !== null && ref1 !== void 0 ? ref1 : []);
    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error1, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [snackVisible, setSnackVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__/* .FindTrumanContext */ .c);
    const { classes  } = useStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setError('');
        if (!completionStatus) return;
        setQuestions(completionStatus.questions);
        setSubmitted(completionStatus.answered);
        !!completionStatus.notMeetConditions.length && setError('insufficient-nft');
    }, [
        completionStatus
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setSubmitting(true);
        try {
            var ref;
            await onSubmit((ref = completionStatus === null || completionStatus === void 0 ? void 0 : completionStatus.id) !== null && ref !== void 0 ? ref : '', questions.map((e)=>({
                    id: e.id,
                    answer: e.answer || ''
                })
            ));
        } catch (error) {
            throw error;
        } finally{
            setSubmitting(false);
        }
    }, [
        questions.map((e)=>e.answer
        ).join(',')
    ]);
    const enabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return completionStatus && !completionStatus.answersPublished && !submitting && completionStatus.notMeetConditions.length === 0;
    }, [
        completionStatus,
        submitting
    ]);
    const isClosed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return !!(completionStatus === null || completionStatus === void 0 ? void 0 : completionStatus.answersPublished);
    }, [
        completionStatus
    ]);
    var _answer, _correctAnswer, _answer1, _answer2;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                },
                open: snackVisible,
                onClose: ()=>setSnackVisible(false)
                ,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    onClose: ()=>setSnackVisible(false)
                    ,
                    variant: "filled",
                    severity: "error",
                    sx: {
                        width: '100%'
                    },
                    children: t('plugin_find_truman_submit_failed')
                })
            }),
            completionStatus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: completionStatus.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        marginBottom: 2,
                        children: questions.map((question, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                marginBottom: 2,
                                children: completionStatus.answersPublished ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    fullWidth: true,
                                    InputProps: {
                                        readOnly: true
                                    },
                                    size: "small",
                                    focused: true,
                                    variant: "outlined",
                                    color: question.correct ? 'success' : 'error',
                                    error: !question.correct,
                                    value: (_answer = question.answer) !== null && _answer !== void 0 ? _answer : '',
                                    label: question.title,
                                    helperText: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: classes.helperText,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                className: classes.helperTextIcon
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: classes.helperTextContent,
                                                children: (_correctAnswer = question.correctAnswer) !== null && _correctAnswer !== void 0 ? _correctAnswer : ''
                                            })
                                        ]
                                    })
                                }) : completionStatus.answered ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    fullWidth: true,
                                    InputProps: {
                                        readOnly: true
                                    },
                                    size: "small",
                                    variant: "outlined",
                                    label: question.title,
                                    value: (_answer1 = question.answer) !== null && _answer1 !== void 0 ? _answer1 : ''
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    fullWidth: true,
                                    required: true,
                                    disabled: !enabled && !submitted,
                                    InputProps: {
                                        readOnly: submitted
                                    },
                                    size: "small",
                                    variant: "outlined",
                                    placeholder: t('plugin_find_truman_completion_placeholder'),
                                    label: question.title,
                                    value: (_answer2 = questions[index].answer) !== null && _answer2 !== void 0 ? _answer2 : '',
                                    onChange: ({ currentTarget  })=>{
                                        const ques = [
                                            ...questions
                                        ];
                                        ques[index].answer = currentTarget.value;
                                        setQuestions(ques);
                                    }
                                })
                            }, question.id)
                        )
                    }),
                    !error1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        textAlign: "right",
                        marginTop: 1,
                        paddingBottom: 1,
                        children: submitted ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            className: completionStatus.correct ? classes.successButton : classes.errorButton,
                            variant: "contained",
                            startIcon: completionStatus.correct ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                            color: completionStatus.correct ? 'success' : 'error',
                            children: completionStatus.correct ? t('plugin_find_truman_completion_correct') : t('plugin_find_truman_completion_wrong')
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* .ActionButtonPromise */ .Zc, {
                            color: "primary",
                            variant: "contained",
                            disabled: !enabled,
                            init: t(isClosed ? 'plugin_find_truman_completion_closed' : 'plugin_find_truman_completion_submit'),
                            waiting: t('plugin_find_truman_completion_submitting'),
                            failed: t('plugin_find_truman_submit_failed'),
                            complete: t('plugin_find_truman_completion_submitted'),
                            executor: handleSubmit,
                            failedOnClick: "use executor",
                            startIcon: isClosed ? undefined : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                            completeIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
                            failIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                        })
                    }),
                    completionStatus.notMeetConditions.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                severity: "info",
                                sx: {
                                    mb: 1
                                },
                                children: t('plugin_find_truman_insufficient_nft')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NoNftCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                conditions: completionStatus.notMeetConditions
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 99118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NoNftCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20333);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62810);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70008);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6518);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12463);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69507);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        card: {
            borderRadius: '6px',
            ':not(:last-child)': {
                marginBottom: '8px'
            },
            display: 'flex',
            flexDirection: 'column'
        },
        content: {
            flex: 1
        },
        title: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#fff',
            textTransform: 'uppercase'
        }
    };
});
function NoNftCard(props) {
    const { conditions , sx  } = props;
    const { classes  } = useStyles();
    const { t  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__/* .FindTrumanContext */ .c);
    const renderNftCard = (title, img, url, count, address)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
            item: true,
            xs: 6,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.card,
                variant: "outlined",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        component: "img",
                        image: img
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                gutterBottom: true,
                                variant: "h5",
                                component: "div",
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                variant: "body2",
                                color: "textSecondary",
                                children: t('plugin_find_truman_buy_nft_tip', {
                                    count,
                                    name: title
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        sx: {
                            justifyContent: 'flex-end'
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            onClick: (e)=>{
                                e.stopPropagation();
                            },
                            component: "a",
                            href: url,
                            variant: "contained",
                            target: "_blank",
                            size: "small",
                            children: t('plugin_find_truman_buy')
                        })
                    })
                ]
            }, address)
        }, title));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        container: true,
        spacing: 2,
        justifyContent: "space-around",
        sx: {
            ...sx || {}
        },
        children: conditions.map((condition)=>renderNftCard(condition.name, condition.img, condition.url, condition.minAmount, condition.address)
        )
    }));
};


/***/ }),

/***/ 39527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OptionsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43021);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18287);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70644);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70008);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46663);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(39402);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63426);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26257);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63967);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3292);
/* harmony import */ var _NoNftCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99118);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69507);
/* harmony import */ var _ResultCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84548);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47906);









const useOptionsStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        progressOption: {
            transition: 'all .5s',
            padding: '12px 18px',
            borderRadius: '16px',
            '&:hover': {
                background: `rgba(28, 23, 26, ${theme.palette.mode === 'dark' ? '.75' : '.05'})`
            },
            '&:active': {
                background: `rgba(28, 23, 26, ${theme.palette.mode === 'dark' ? '.15' : '.15'})`
            },
            ':not(:last-child)': {
                marginBottom: '8px'
            }
        },
        blockChip: {
            width: '100%',
            marginBottom: 8,
            justifyContent: 'space-between',
            minHeight: '39px',
            height: 'fit-content',
            fontSize: '13px',
            padding: '8px',
            transition: 'all .3s'
        },
        blockChipSelected: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main
            }
        },
        checkIcon: {},
        horizontalScrollBar: {
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                height: '8px'
            },
            '::-webkit-scrollbar-thumb:horizontal': {
                backgroundColor: theme.palette.divider,
                borderRadius: '16px',
                border: `6px solid ${theme.palette.divider}`
            }
        },
        verticalScrollBar: {
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: '6px'
            },
            '::-webkit-scrollbar-thumb:vertical': {
                backgroundColor: theme.palette.divider,
                borderRadius: '16px',
                border: `6px solid ${theme.palette.divider}`
            }
        }
    };
});
function OptionsCard(props) {
    const { userStatus: userStatus1 , onSubmit  } = props;
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [choice, setChoice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userStatus1 ? userStatus1.choice : -1);
    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error1, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [snackVisible, setSnackVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { classes , cx  } = useOptionsStyles();
    const { t  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__/* .FindTrumanContext */ .c);
    const parentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setError('');
        userStatus1 && userStatus1.notMeetConditions.length > 0 && setError('insufficient-nft');
    }, [
        userStatus1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setChoice(userStatus1 ? userStatus1.choice : -1);
        setSelected(userStatus1 ? userStatus1.choice !== -1 : true);
    }, [
        userStatus1
    ]);
    const renderOptions = (userStatus)=>{
        const showCount = !!userStatus.count;
        const total1 = userStatus.count ? userStatus.count.reduce((total, e)=>{
            return {
                choice: -1,
                value: total.value + e.value
            };
        }).value : 0;
        return userStatus.options.map((option, index)=>{
            var ref;
            const count = userStatus.count ? ((ref = userStatus.count.find((e)=>e.choice === index
            )) === null || ref === void 0 ? void 0 : ref.value) || 0 : 0;
            const percent = (total1 > 0 ? count * 100 / total1 : 0).toFixed(2);
            const isSelected = choice === index;
            return userStatus.count ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                sx: choice !== index ? {
                    cursor: 'pointer'
                } : {},
                className: classes.progressOption,
                variant: "outlined",
                onClick: !submitting && !selected && !error1 && userStatus.status !== 0 ? ()=>{
                    setChoice(index);
                } : undefined,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        sx: {
                            display: 'flex',
                            rowGap: '8px',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            marginBottom: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'top'
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        sx: {
                                            marginRight: '8px'
                                        },
                                        size: "small",
                                        label: `${count} ${t(count > 1 ? 'plugin_find_truman_votes' : 'plugin_find_truman_vote')}`
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        color: "textPrimary",
                                        sx: {
                                            fontSize: '13px',
                                            lineHeight: '24px'
                                        },
                                        children: option
                                    })
                                ]
                            }),
                            isSelected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                                size: "small",
                                color: "primary",
                                label: t('plugin_find_truman_selected')
                            }) : selected ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                sx: {
                                    cursor: 'pointer'
                                },
                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                                size: "small",
                                color: "default",
                                label: t('plugin_find_truman_unselect')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                sx: {
                                    flex: 1
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ResultCard__WEBPACK_IMPORTED_MODULE_5__/* .BorderLinearProgress */ .C, {
                                    value: Number(percent),
                                    variant: "determinate"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                sx: {
                                    width: 54
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: [
                                        percent,
                                        "%"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }, option) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                sx: {
                    position: 'relative'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    id: "submit",
                    className: cx(classes.blockChip, isSelected && classes.blockChipSelected),
                    label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        style: {
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-all'
                        },
                        children: option
                    }),
                    onClick: !selected && !error1 && userStatus.status !== 0 ? ()=>{
                        setChoice(index);
                    } : undefined,
                    disabled: submitting,
                    deleteIcon: isSelected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}) : undefined,
                    onDelete: isSelected ? ()=>{} : undefined,
                    color: showCount ? 'default' : isSelected ? 'primary' : 'default',
                    variant: showCount ? 'outlined' : isSelected ? 'filled' : 'outlined'
                })
            }, index);
        });
    };
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setSubmitting(true);
        try {
            await onSubmit(choice);
        } catch (error) {
            throw error;
        } finally{
            setSubmitting(false);
        }
    }, [
        choice
    ]);
    const renderSubmitButton = (userStatus)=>{
        const isClosed = userStatus.status === 0;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            style: {
                textAlign: 'right',
                marginTop: '8px',
                paddingBottom: '8px'
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                color: selected ? 'success' : 'primary',
                variant: "contained",
                disabled: selected || isClosed || choice === -1,
                init: t(selected ? 'plugin_find_truman_submitted' : isClosed ? 'plugin_find_truman_vote_finish' : 'plugin_find_truman_submit'),
                waiting: t('plugin_find_truman_submitting'),
                failed: t('plugin_find_truman_submit_failed'),
                complete: t('plugin_find_truman_submitted'),
                executor: handleSubmit,
                failedOnClick: "use executor",
                startIcon: isClosed || selected ? undefined : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                completeIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                failIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
            })
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        ref: parentRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                },
                open: snackVisible,
                onClose: ()=>setSnackVisible(false)
                ,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    onClose: ()=>setSnackVisible(false)
                    ,
                    variant: "filled",
                    severity: "error",
                    sx: {
                        width: '100%'
                    },
                    children: t('plugin_find_truman_submit_failed')
                })
            }),
            userStatus1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: userStatus1.question
                    }),
                    renderOptions(userStatus1),
                    !error1 && renderSubmitButton(userStatus1),
                    userStatus1.notMeetConditions.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                severity: "info",
                                sx: {
                                    mb: 1
                                },
                                children: t('plugin_find_truman_insufficient_nft')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NoNftCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                conditions: userStatus1.notMeetConditions
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 84548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ BorderLinearProgress),
/* harmony export */   "Z": () => (/* binding */ ResultCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68435);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87799);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67730);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70008);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39402);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18287);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70644);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13152);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(95730);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5521);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73764);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69507);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43021);







const BorderLinearProgress = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(({ theme  })=>({
        height: 10,
        borderRadius: 5,
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"].colorPrimary */ .Z.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
        },
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"].bar */ .Z.bar}`]: {
            borderRadius: 5
        }
    })
);
const useResultStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        answerChip: {
            backgroundColor: theme.palette.mode === 'light' ? '#2e7d32' : '#66bb6a',
            color: theme.palette.mode === 'light' ? '#fff' : '#EFF3F4'
        }
    };
});
function ResultCard(props) {
    const { type , userStatus , result  } = props;
    const { classes  } = useResultStyles();
    const [choice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(userStatus ? userStatus.choice : -1);
    const { t  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__/* .FindTrumanContext */ .c);
    const total1 = (result === null || result === void 0 ? void 0 : result.count) && result.count.length > 0 ? result.count.reduce((total, e)=>{
        return {
            choice: -1,
            value: total.value + e.value
        };
    }).value : 1;
    const answer = result ? type === _types__WEBPACK_IMPORTED_MODULE_1__/* .PostType.PuzzleResult */ .hQ.PuzzleResult ? result.correct : result.result : -1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [
            answer === -1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                severity: "info",
                children: t(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .PostType.PuzzleResult */ .hQ.PuzzleResult ? 'plugin_find_truman_puzzle_underway' : 'plugin_find_truman_voting_underway')
            }),
            answer !== -1 && result && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: result.question
                    }),
                    result.options.map((option, index)=>{
                        var ref;
                        const value = ((ref = result.count.find((e)=>e.choice === index
                        )) === null || ref === void 0 ? void 0 : ref.value) || 0;
                        const percent = (total1 > 0 ? value * 100 / total1 : 0).toFixed(2);
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            variant: "outlined",
                            sx: {
                                padding: '12px 18px',
                                borderRadius: '16px',
                                marginBottom: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    sx: {
                                        display: 'flex',
                                        rowGap: '8px',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        marginBottom: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'top'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    sx: {
                                                        marginRight: '8px'
                                                    },
                                                    size: "small",
                                                    label: `${value} ${t(value > 1 ? 'plugin_find_truman_votes' : 'plugin_find_truman_vote')}`
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    color: "textPrimary",
                                                    sx: {
                                                        fontSize: '13px',
                                                        lineHeight: '24px'
                                                    },
                                                    children: option
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            direction: "row",
                                            spacing: 1,
                                            children: [
                                                choice === index && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                                                    size: "small",
                                                    color: "primary",
                                                    label: t('plugin_find_truman_selected')
                                                }),
                                                answer === index && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                                                    className: classes.answerChip,
                                                    color: "success",
                                                    size: "small",
                                                    label: t(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .PostType.PuzzleResult */ .hQ.PuzzleResult ? 'plugin_find_truman_answer' : 'plugin_find_truman_result')
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        columnGap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            sx: {
                                                flex: 1
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BorderLinearProgress, {
                                                value: Number(percent),
                                                variant: "determinate"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            sx: {
                                                width: 54
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: [
                                                    percent,
                                                    "%"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, option));
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 66925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StageCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18287);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70008);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20333);
/* harmony import */ var _ResultCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84548);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69507);





function StageCard(props) {
    const { userStoryStatus  } = props;
    const { t  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__/* .FindTrumanContext */ .c);
    const renderProgress = (total, success, color)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            sx: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px'
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    sx: {
                        width: '100%',
                        mr: 1
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ResultCard__WEBPACK_IMPORTED_MODULE_1__/* .BorderLinearProgress */ .C, {
                        color: color,
                        value: total > 0 ? success * 100 / total : 0,
                        variant: "determinate"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    sx: {
                        display: 'flex',
                        justifyContent: 'flex-end'
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        variant: "body2",
                        color: "text.secondary",
                        children: [
                            success,
                            "/",
                            total
                        ]
                    })
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: userStoryStatus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                container: true,
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                        item: true,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            sx: {
                                padding: '0 24px'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "h6",
                                    color: "text.primary",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_dialog_critical')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        t('plugin_find_truman_puzzle_rate'),
                                        userStoryStatus.critical.total > 0 ? (userStoryStatus.critical.correct * 100 / userStoryStatus.critical.total).toFixed(2) : '0.00',
                                        "%"
                                    ]
                                }),
                                renderProgress(userStoryStatus.critical.total, userStoryStatus.critical.correct, 'success'),
                                userStoryStatus.critical.waiting === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.critical.waiting,
                                        t('plugin_find_truman_puzzle_to_be_revealed')
                                    ]
                                }),
                                userStoryStatus.critical.waiting > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.critical.waiting,
                                        t('plugin_find_truman_polls_to_be_revealed')
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                        item: true,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            sx: {
                                padding: '0 24px'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "h6",
                                    color: "text.primary",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_dialog_noncritical')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        t('plugin_find_truman_voting_rate'),
                                        userStoryStatus.nonCritical.total > 0 ? (userStoryStatus.nonCritical.correct * 100 / userStoryStatus.nonCritical.total).toFixed(2) : '0.00',
                                        "%"
                                    ]
                                }),
                                renderProgress(userStoryStatus.nonCritical.total, userStoryStatus.nonCritical.correct, 'secondary'),
                                userStoryStatus.nonCritical.waiting === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.nonCritical.waiting,
                                        t('plugin_find_truman_poll_to_be_revealed')
                                    ]
                                }),
                                userStoryStatus.nonCritical.waiting > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.nonCritical.waiting,
                                        t('plugin_find_truman_polls_to_be_revealed')
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 98982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useConst)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93573);
/* harmony import */ var _Worker_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67194);




function renderString(template, data) {
    var ref;
    return template.replace(/{{([^}]+)}}/g, (match, p1)=>{
        var ref1;
        return (ref = (ref1 = data[p1]) === null || ref1 === void 0 ? void 0 : ref1.toString()) !== null && ref !== void 0 ? ref : match;
    });
}
function useConst() {
    const { i18n  } = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .useI18N */ .M1)();
    const [consts, setConsts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!_constants__WEBPACK_IMPORTED_MODULE_3__/* .FindTruman_Const.initialized */ .Oh.initialized) {
            _constants__WEBPACK_IMPORTED_MODULE_3__/* .FindTruman_Const.init */ .Oh.init((resolve, reject)=>{
                (0,_Worker_apis__WEBPACK_IMPORTED_MODULE_1__/* .fetchConst */ .oM)(i18n.language).then(resolve).catch(reject);
            });
        }
        _constants__WEBPACK_IMPORTED_MODULE_3__/* .FindTruman_Const.then */ .Oh.then((res)=>{
            setConsts(res);
        });
    }, []);
    const t = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((id, options = {})=>{
        var ref;
        var ref2;
        return renderString((ref2 = consts === null || consts === void 0 ? void 0 : (ref = consts.locales) === null || ref === void 0 ? void 0 : ref[id]) !== null && ref2 !== void 0 ? ref2 : '', options);
    }, [
        consts
    ]);
    return {
        consts,
        t
    };
}


/***/ }),

/***/ 53504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$F": () => (/* binding */ submitCompletion),
/* harmony export */   "$G": () => (/* binding */ fetchUserCompletionStatus),
/* harmony export */   "He": () => (/* binding */ fetchPuzzleResult),
/* harmony export */   "JJ": () => (/* binding */ fetchUserPuzzleStatus),
/* harmony export */   "K1": () => (/* binding */ fetchUserPollStatus),
/* harmony export */   "LP": () => (/* binding */ submitPoll),
/* harmony export */   "Oz": () => (/* binding */ fetchQuestions),
/* harmony export */   "PN": () => (/* binding */ fetchExchangeStatus),
/* harmony export */   "UN": () => (/* binding */ openMysteryBox),
/* harmony export */   "aE": () => (/* binding */ fetchClue),
/* harmony export */   "cz": () => (/* binding */ fetchUserStoryStatus),
/* harmony export */   "dr": () => (/* binding */ fetchStoryInfo),
/* harmony export */   "du": () => (/* binding */ fetchUserParticipatedStoryStatus),
/* harmony export */   "j9": () => (/* binding */ fetchMysteryBoxInfo),
/* harmony export */   "kc": () => (/* binding */ fetchUserPartsInfo),
/* harmony export */   "mf": () => (/* binding */ fetchPollResult),
/* harmony export */   "oJ": () => (/* binding */ fetchUserPoap),
/* harmony export */   "oM": () => (/* binding */ fetchConst),
/* harmony export */   "pU": () => (/* binding */ fetchAllPollsOrPuzzles),
/* harmony export */   "v_": () => (/* binding */ exchangeFtgWhitelist),
/* harmony export */   "yR": () => (/* binding */ submitPuzzle)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45925);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73764);



const PREFIX = 'https://findtruman.io/api';
async function request(url, options) {
    const response = await fetch(urlcat__WEBPACK_IMPORTED_MODULE_0___default()(PREFIX, url), {
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        ...options
    });
    const { data , code , msg  } = await response.json();
    if (code !== 0) {
        throw new _types__WEBPACK_IMPORTED_MODULE_2__/* .FindTrumanRemoteError */ .$T(msg, code, data);
    }
    return data;
}
function fetchConst(lang) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/consts', {
        l: lang
    }));
}
function fetchStoryInfo(storyId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/stories/:storyId', {
        storyId
    }));
}
function fetchUserStoryStatus(storyId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/stories/:storyId/status', {
        storyId,
        uaddr
    }));
}
function fetchUserPuzzleStatus(puzzleId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/puzzles/:puzzleId/status', {
        puzzleId,
        uaddr
    }));
}
function fetchUserPollStatus(pollId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls/:pollId/status', {
        pollId,
        uaddr
    }));
}
function fetchUserCompletionStatus(quesId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/subjective_questions/:quesId', {
        quesId,
        uaddr
    }));
}
function fetchPuzzleResult(puzzleId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/puzzles/:puzzleId/result', {
        puzzleId
    }));
}
function fetchPollResult(pollId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls/:pollId/result', {
        pollId
    }));
}
async function submitPuzzle(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/puzzles/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
async function submitPoll(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/polls/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
async function submitCompletion(address, params) {
    const { timestamp , quesId , answers  } = params;
    const data = {
        timestamp,
        address,
        rawdata: {
            quesId,
            answers
        }
    };
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/subjective_questions/_/answer', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
function fetchUserParticipatedStoryStatus(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/participated_story_status', {
        uaddr
    }));
}
function fetchClue(clueId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/clues/:clueId', {
        clueId,
        uaddr
    }));
}
function fetchUserPoap(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/ftpoap', {
        uaddr
    }));
}
function fetchMysteryBoxInfo(id) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/mystery-boxes/:id', {
        id
    }));
}
async function openMysteryBox(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/mystery-boxes/_/open', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
function fetchUserPartsInfo(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/parts_with_additional', {
        uaddr
    }));
}
function fetchExchangeStatus(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_status', {
        uaddr
    }));
}
function fetchAllPollsOrPuzzles(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls_or_puzzles', {
        uaddr
    }));
}
function fetchQuestions(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/questions', {
        uaddr
    }));
}
function exchangeFtgWhitelist() {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_ftg_airdrop_whitelist', {}), {
        method: 'POST',
        body: JSON.stringify({})
    });
}


/***/ }),

/***/ 69507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ FindTrumanContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);

const FindTrumanContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);


/***/ }),

/***/ 73764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$T": () => (/* binding */ FindTrumanRemoteError),
/* harmony export */   "Ym": () => (/* binding */ ClueConditionType),
/* harmony export */   "hQ": () => (/* binding */ PostType),
/* harmony export */   "pX": () => (/* binding */ PartType)
/* harmony export */ });
var PostType;
(function(PostType) {
    PostType["Status"] = 'result';
    PostType["Puzzle"] = 'puzzle';
    PostType["Poll"] = 'poll';
    PostType["Completion"] = 'completion';
    PostType["PuzzleResult"] = 'puzzle_result';
    PostType["PollResult"] = 'poll_result';
    PostType["Encryption"] = 'encryption';
})(PostType || (PostType = {}));
var ClueConditionType;
(function(ClueConditionType) {
    ClueConditionType["And"] = 'and';
    ClueConditionType["Or"] = 'or';
    ClueConditionType["Erc721"] = 'hold-erc721';
    ClueConditionType["Erc20"] = 'hold-erc20';
})(ClueConditionType || (ClueConditionType = {}));
var PartType;
(function(PartType) {
    PartType[PartType["Head"] = 1] = "Head";
    PartType[PartType["Skin"] = 2] = "Skin";
    PartType[PartType["Clothes"] = 3] = "Clothes";
    PartType[PartType["Mask"] = 4] = "Mask";
    PartType[PartType["Background"] = 5] = "Background";
})(PartType || (PartType = {}));
class FindTrumanRemoteError extends Error {
    constructor(message, code, data){
        super(message);
        this.code = code;
        this.data = data;
    }
}


/***/ })

}]);